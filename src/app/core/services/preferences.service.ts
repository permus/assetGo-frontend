import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface UserPreferences {
  // Localization
  language?: string;
  rtl?: boolean;
  currency?: string;
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
    // Don't auto-load on construction - wait for explicit initialization
  }

  /**
   * Initialize preferences - fetch from backend and apply
   */
  initialize(): Observable<UserPreferences> {
    return new Observable<UserPreferences>(observer => {
      this.syncFromBackend().subscribe({
        next: (response: any) => {
          if (response?.success && response?.data) {
            const prefs = response.data as UserPreferences;
            // Merge with defaults
            const merged = { ...this.preferencesSubject.value, ...prefs };
            this.preferencesSubject.next(merged);
            this.applyPreferences(merged);
            // Also update localStorage as backup
            localStorage.setItem('app.preferences', JSON.stringify(merged));
            observer.next(merged);
            observer.complete();
          } else {
            // Fallback to localStorage if backend fails
            this.loadFromLocalStorage();
            observer.next(this.preferencesSubject.value);
            observer.complete();
          }
        },
        error: (err) => {
          // Fallback to localStorage if backend fails
          this.loadFromLocalStorage();
          observer.next(this.preferencesSubject.value);
          observer.complete();
        }
      });
    });
  }

  /**
   * Load preferences from localStorage (fallback)
   */
  private loadFromLocalStorage(): void {
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
   * Update preferences (local only - use saveToBackend to persist)
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
    // Apply language
    if (prefs.language) {
      document.documentElement.setAttribute('lang', prefs.language);
    }

    // Apply RTL
    if (prefs.rtl) {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }

    // Apply dark mode - ensure it's applied correctly
    if (prefs.dark_mode === true) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    // Apply compact view
    if (prefs.compact_view) {
      document.documentElement.classList.add('compact-mode');
    } else {
      document.documentElement.classList.remove('compact-mode');
    }

    // Note: CurrencyService will subscribe to preferences$ observable to get currency updates
  }

  /**
   * Get specific preference value
   */
  get<K extends keyof UserPreferences>(key: K): UserPreferences[K] {
    return this.preferencesSubject.value[key];
  }

  /**
   * Set specific preference value (local only - use saveToBackend to persist)
   */
  set<K extends keyof UserPreferences>(key: K, value: UserPreferences[K]): void {
    const updated = { ...this.preferencesSubject.value, [key]: value };
    this.preferencesSubject.next(updated);
    localStorage.setItem('app.preferences', JSON.stringify(updated));
    this.applyPreferences(updated);
  }

  /**
   * Set and save to backend
   */
  setAndSave<K extends keyof UserPreferences>(key: K, value: UserPreferences[K]): Observable<any> {
    const updated = { ...this.preferencesSubject.value, [key]: value };
    // Update immediately (local) - this triggers preferences$ observable
    this.preferencesSubject.next(updated);
    localStorage.setItem('app.preferences', JSON.stringify(updated));
    this.applyPreferences(updated);
    
    // Then save to backend
    return this.saveToBackend(updated).pipe(
      tap((response: any) => {
        // Update cache after successful save
        if (response?.success && response?.data) {
          localStorage.setItem('cached_preferences', JSON.stringify(response));
          // Merge backend response with current preferences
          const merged = { ...updated, ...response.data };
          this.preferencesSubject.next(merged);
          this.applyPreferences(merged);
        }
      })
    );
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

    // Check cache first
    const cached = localStorage.getItem('cached_preferences');
    if (cached) {
      try {
        const cachedData = JSON.parse(cached);
        // Return cached data but still fetch fresh data in background
        this.syncing = true;
        this.http.get(`${this.apiUrl}/settings/preferences`).pipe(
          tap((response: any) => {
            this.syncing = false;
            if (response.success && response.data) {
              localStorage.setItem('cached_preferences', JSON.stringify(response));
              const prefs = response.data as UserPreferences;
              const merged = { ...this.preferencesSubject.value, ...prefs };
              this.preferencesSubject.next(merged);
              this.applyPreferences(merged);
            }
          })
        ).subscribe({
          error: () => { this.syncing = false; }
        });
        return new Observable(observer => {
          observer.next(cachedData);
          observer.complete();
        });
      } catch (error) {
        console.error('Failed to parse cached preferences:', error);
        localStorage.removeItem('cached_preferences');
      }
    }

    // No cache, fetch from server and cache it
    this.syncing = true;
    return this.http.get(`${this.apiUrl}/settings/preferences`).pipe(
      tap((response: any) => {
        this.syncing = false;
        // Cache the response
        if (response.success && response.data) {
          localStorage.setItem('cached_preferences', JSON.stringify(response));
        }
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

