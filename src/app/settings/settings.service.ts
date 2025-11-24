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
    // Check cache first
    const cached = localStorage.getItem('cached_company');
    if (cached) {
      try {
        const cachedData = JSON.parse(cached);
        return new Observable<ApiResponse<{ company: Company }>>(observer => {
          observer.next(cachedData);
          observer.complete();
        });
      } catch (error) {
        console.error('Failed to parse cached company data:', error);
        localStorage.removeItem('cached_company');
      }
    }

    // No cache, fetch from server and cache it
    return this.http.get<ApiResponse<{ company: Company }>>(`${this.base}/company`).pipe(
      tap(response => {
        if (response.success && response.data) {
          localStorage.setItem('cached_company', JSON.stringify(response));
        }
      })
    );
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
  listModules(forceRefresh: boolean = false) {
    // Prevent multiple simultaneous requests
    if (this.modulesLoading && !forceRefresh) {
      return this.modulesEnabled$.asObservable().pipe(
        map(() => ({ success: true, data: { modules: [] } } as ApiResponse<{ modules: ModuleItem[] }>))
      );
    }

    // Check cache first (unless forcing refresh)
    if (!forceRefresh) {
      const cached = localStorage.getItem('cached_modules');
      const cacheTimestamp = localStorage.getItem('cached_modules_timestamp');
      if (cached && cacheTimestamp) {
        try {
          // Check if cache is stale (older than 30 seconds)
          const cacheAge = Date.now() - parseInt(cacheTimestamp, 10);
          const maxCacheAge = 30 * 1000; // 30 seconds
          
          if (cacheAge < maxCacheAge) {
            const cachedData = JSON.parse(cached);
            this.pushModulesEnabled(cachedData?.data?.modules || []);
            this.modulesLoaded = true;
            return new Observable<ApiResponse<{ modules: ModuleItem[] }>>(observer => {
              observer.next(cachedData);
              observer.complete();
            });
          } else {
            // Cache is stale, remove it and fetch fresh data
            console.log('[SettingsService] Cache is stale, fetching fresh modules');
            localStorage.removeItem('cached_modules');
            localStorage.removeItem('cached_modules_timestamp');
          }
        } catch (error) {
          console.error('Failed to parse cached modules:', error);
          localStorage.removeItem('cached_modules');
          localStorage.removeItem('cached_modules_timestamp');
        }
      }
    }

    // No cache or force refresh, fetch from server and cache it
    this.modulesLoading = true;
    return this.http
      .get<ApiResponse<{ modules: ModuleItem[] }>>(`${this.base}/settings/modules`)
      .pipe(tap(res => {
        this.pushModulesEnabled(res?.data?.modules || []);
        this.modulesLoaded = true;
        this.modulesLoading = false;
        // Cache the response with timestamp
        if (res.success && res.data) {
          localStorage.setItem('cached_modules', JSON.stringify(res));
          localStorage.setItem('cached_modules_timestamp', Date.now().toString());
        }
      }));
  }
  enableModule(moduleId: number) {
    return this.http
      .post<ApiResponse<{ module_id: number }>>(`${this.base}/settings/modules/${moduleId}/enable`, {})
      .pipe(tap(() => {
        // Refresh modules immediately to update BehaviorSubject
        this.refreshModulesEnabled().subscribe({
          next: () => {
            // Modules refreshed successfully
          },
          error: (err) => {
            console.error('Failed to refresh modules after enable:', err);
          }
        });
      }));
  }
  disableModule(moduleId: number) {
    return this.http
      .post<ApiResponse<{ module_id: number }>>(`${this.base}/settings/modules/${moduleId}/disable`, {})
      .pipe(tap(() => {
        // Refresh modules immediately to update BehaviorSubject
        this.refreshModulesEnabled().subscribe({
          next: () => {
            // Modules refreshed successfully
          },
          error: (err) => {
            console.error('Failed to refresh modules after disable:', err);
          }
        });
      }));
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
    this.modulesLoading = false;
    // Clear cache to force fresh fetch
    localStorage.removeItem('cached_modules');
    localStorage.removeItem('cached_modules_timestamp');
    return this.listModules(true); // Force refresh
  }

  private pushModulesEnabled(list: ModuleItem[]): void {
    const map: Record<string, boolean> = {};
    for (const m of list) map[m.key] = !!m.is_enabled;
    this.modulesEnabled$.next(map);
  }
}


