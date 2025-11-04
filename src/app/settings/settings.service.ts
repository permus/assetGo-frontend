import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export type ApiResponse<T> = { success: boolean; message?: string; data?: T };

export interface Company {
  id: number;
  name: string;
  owner_id: number | string;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  industry?: string | null;
  business_type?: string | null;
  currency?: string | null;
  settings?: Record<string, unknown> | null;
  logo_url?: string | null;
}

export interface ModuleItem {
  id: number;
  key: string;
  display_name: string;
  description?: string | null;
  icon_name?: string | null;
  route_path?: string | null;
  sort_order: number;
  is_system_module: boolean;
  is_enabled: boolean;
}

export interface Preferences {
  language?: string;
  rtl?: boolean;
  date_format?: string;
  time_format?: string;
  number_format?: string;
  timezone?: string;
  // Notification preferences
  email_notifications?: boolean;
  push_notifications?: boolean;
  maintenance_alerts?: boolean;
  work_order_updates?: boolean;
  // Display
  dashboard_layout?: 'grid' | 'list';
  items_per_page?: number;
  auto_refresh?: boolean;
  compact_view?: boolean;
  show_avatars?: boolean;
  // Accessibility
  dark_mode?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;
  // Stream broadcasting module enablement state
  private modulesEnabled$ = new BehaviorSubject<Record<string, boolean>>({});
  private modulesLoaded = false;
  private modulesLoading = false;

  // Company
  getCompany() {
    return this.http.get<ApiResponse<{ company: Company }>>(`${this.base}/company`);
  }
  updateCompany(payload: Partial<Company>) {
    return this.http.put<ApiResponse<{ company: Company }>>(`${this.base}/company`, payload);
  }
  updateCurrency(currency: string) {
    return this.http.put<ApiResponse<{ company: Company }>>(`${this.base}/settings/currency`, { currency });
  }
  uploadCompanyLogo(file: File) {
    const fd = new FormData();
    fd.append('logo', file);
    return this.http.post<ApiResponse<{ logo_url: string; company: Company }>>(
      `${this.base}/settings/company/logo`, fd
    );
  }

  // Modules
  listModules() {
    // Prevent multiple simultaneous requests
    if (this.modulesLoading) {
      return this.modulesEnabled$.asObservable().pipe(
        map(() => ({ success: true, data: { modules: [] } } as ApiResponse<{ modules: ModuleItem[] }>))
      );
    }

    this.modulesLoading = true;
    return this.http
      .get<ApiResponse<{ modules: ModuleItem[] }>>(`${this.base}/settings/modules`)
      .pipe(tap(res => {
        this.pushModulesEnabled(res?.data?.modules || []);
        this.modulesLoaded = true;
        this.modulesLoading = false;
      }));
  }
  enableModule(moduleId: number) {
    return this.http
      .post<ApiResponse<{ module_id: number }>>(`${this.base}/settings/modules/${moduleId}/enable`, {})
      .pipe(tap(() => this.refreshModulesEnabled().subscribe()));
  }
  disableModule(moduleId: number) {
    return this.http
      .post<ApiResponse<{ module_id: number }>>(`${this.base}/settings/modules/${moduleId}/disable`, {})
      .pipe(tap(() => this.refreshModulesEnabled().subscribe()));
  }

  // Preferences
  getPreferences() {
    return this.http.get<ApiResponse<Preferences>>(`${this.base}/settings/preferences`);
  }
  updatePreferences(prefs: Preferences) {
    return this.http.put<ApiResponse<Preferences>>(`${this.base}/settings/preferences`, prefs);
  }

  // ----- Modules enabled stream helpers -----
  getModulesEnabled$(): Observable<Record<string, boolean>> {
    // Auto-load modules on first access if not already loaded
    if (!this.modulesLoaded && !this.modulesLoading) {
      const currentValue = this.modulesEnabled$.value;
      // Only load if BehaviorSubject is empty (no cached data)
      if (Object.keys(currentValue).length === 0) {
        this.modulesLoading = true;
        this.listModules().subscribe({
          next: () => {
            this.modulesLoaded = true;
            this.modulesLoading = false;
          },
          error: () => {
            this.modulesLoading = false;
            // Keep modulesLoaded as false so it can retry on next access
          }
        });
      } else {
        // Data already exists in BehaviorSubject, mark as loaded
        this.modulesLoaded = true;
      }
    }
    return this.modulesEnabled$.asObservable();
  }

  refreshModulesEnabled() {
    this.modulesLoaded = false;
    return this.listModules();
  }

  private pushModulesEnabled(list: ModuleItem[]): void {
    const map: Record<string, boolean> = {};
    for (const m of list) map[m.key] = !!m.is_enabled;
    this.modulesEnabled$.next(map);
  }
}


