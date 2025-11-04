import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface UserPreferences {
  // Localization
  language?: string;
  rtl?: boolean;
  date_format?: string;
  time_format?: string;
  number_format?: string;
  timezone?: string;
  
  // Notifications
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

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  
  private preferencesSubject = new BehaviorSubject<UserPreferences>({
    // Defaults
    email_notifications: true,
    push_notifications: true,
    maintenance_alerts: true,
    work_order_updates: true,
    dashboard_layout: 'grid',
    items_per_page: 20,
    auto_refresh: false,
    compact_view: false,
    show_avatars: true,
    dark_mode: false,
  });

  public preferences$: Observable<UserPreferences> = this.preferencesSubject.asObservable();

  constructor() {
    this.loadPreferences();
  }

  /**
   * Load preferences from localStorage and apply to app
   */
  private loadPreferences(): void {
    const stored = localStorage.getItem('app.preferences');
    if (stored) {
      try {
        const prefs = JSON.parse(stored);
        this.preferencesSubject.next({ ...this.preferencesSubject.value, ...prefs });
        this.applyPreferences(prefs);
      } catch (error) {
        console.error('Failed to load preferences:', error);
      }
    }
  }

  /**
   * Get current preferences
   */
  getPreferences(): UserPreferences {
    return this.preferencesSubject.value;
  }

  /**
   * Update preferences
   */
  updatePreferences(prefs: Partial<UserPreferences>): void {
    const updated = { ...this.preferencesSubject.value, ...prefs };
    this.preferencesSubject.next(updated);
    localStorage.setItem('app.preferences', JSON.stringify(updated));
    this.applyPreferences(updated);
  }

  /**
   * Apply preferences to the application
   */
  private applyPreferences(prefs: UserPreferences): void {
    // Apply dark mode
    if (prefs.dark_mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Apply compact view
    if (prefs.compact_view) {
      document.documentElement.classList.add('compact-mode');
    } else {
      document.documentElement.classList.remove('compact-mode');
    }

    // Apply RTL
    if (prefs.rtl) {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }

  /**
   * Get specific preference value
   */
  get<K extends keyof UserPreferences>(key: K): UserPreferences[K] {
    return this.preferencesSubject.value[key];
  }

  /**
   * Set specific preference value
   */
  set<K extends keyof UserPreferences>(key: K, value: UserPreferences[K]): void {
    const updated = { ...this.preferencesSubject.value, [key]: value };
    this.updatePreferences(updated);
  }

  private syncing = false;

  /**
   * Sync preferences from backend
   */
  syncFromBackend(): Observable<any> {
    // Prevent multiple simultaneous requests
    if (this.syncing) {
      return new Observable(observer => {
        observer.next({ success: true, data: this.preferencesSubject.value });
        observer.complete();
      });
    }

    this.syncing = true;
    return this.http.get(`${this.apiUrl}/settings/preferences`).pipe(
      tap(() => {
        this.syncing = false;
      })
    );
  }

  /**
   * Save preferences to backend
   */
  saveToBackend(prefs: UserPreferences): Observable<any> {
    return this.http.put(`${this.apiUrl}/settings/preferences`, prefs);
  }
}

