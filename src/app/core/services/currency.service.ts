import { Injectable, inject, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SettingsService } from '../../settings/settings.service';
import { PreferencesService } from './preferences.service';
import { FormatService } from './format.service';

export type CurrencyCode = 'USD' | 'AED' | string;

@Injectable({ providedIn: 'root' })
export class CurrencyService implements OnDestroy {
  private readonly settings = inject(SettingsService);
  private readonly prefsService = inject(PreferencesService);
  private readonly formatService = inject(FormatService);
  private readonly currency$ = new BehaviorSubject<CurrencyCode>('USD');
  private refreshing = false;
  private prefsSubscription?: Subscription;
  
  private readonly currencySymbols: Record<string, string> = {
    'USD': '$',
    'AED': 'د.إ',
  };

  constructor() {
    // Subscribe to preferences changes to automatically update currency
    this.prefsSubscription = this.prefsService.preferences$.subscribe(prefs => {
      // Update currency whenever preferences change and currency is present
      if (prefs?.currency) {
        const newCurrency = prefs.currency.toUpperCase();
        const currentCurrency = this.currency$.getValue();
        if (currentCurrency !== newCurrency) {
          this.currency$.next(newCurrency);
        }
      }
    });
    
    // Also initialize from current preferences
    const currentPrefs = this.prefsService.getPreferences();
    if (currentPrefs?.currency) {
      const initCurrency = currentPrefs.currency.toUpperCase();
      this.currency$.next(initCurrency);
    }
  }

  ngOnDestroy(): void {
    if (this.prefsSubscription) {
      this.prefsSubscription.unsubscribe();
    }
  }

  // Load from user preferences and broadcast
  refreshFromServer(): Observable<CurrencyCode> {
    // Prevent multiple simultaneous requests
    if (this.refreshing) {
      return this.currency$.asObservable().pipe(
        map(code => code)
      );
    }

    // First, try to get from user preferences
    const userPrefs = this.prefsService.getPreferences();
    if (userPrefs?.currency) {
      const code = userPrefs.currency as CurrencyCode;
      this.currency$.next(code);
      return new Observable<CurrencyCode>(observer => {
        observer.next(code);
        observer.complete();
      });
    }

    // Fallback to company currency (for backward compatibility)
    const cached = localStorage.getItem('cached_company');
    if (cached) {
      try {
        const cachedData = JSON.parse(cached);
        const code = (cachedData?.data?.company?.currency || 'USD') as CurrencyCode;
        this.currency$.next(code);
        return new Observable<CurrencyCode>(observer => {
          observer.next(code);
          observer.complete();
        });
      } catch (error) {
        console.error('Failed to parse cached company data in currency service:', error);
        localStorage.removeItem('cached_company');
      }
    }

    // No cache, fetch from server (which will now cache automatically)
    this.refreshing = true;
    return this.settings.getCompany().pipe(
      map(res => ((res?.data?.company?.currency || 'USD') as CurrencyCode)),
      tap(code => {
        this.currency$.next(code);
        this.refreshing = false;
      })
    );
  }

  /**
   * Update currency and notify all subscribers
   */
  setCurrency(code: CurrencyCode): void {
    this.currency$.next(code);
  }

  get$(): Observable<CurrencyCode> {
    return this.currency$.asObservable();
  }

  getCurrent(): CurrencyCode {
    return this.currency$.getValue();
  }

  getSymbol(): string {
    const code = this.getCurrent();
    return this.currencySymbols[code] || code;
  }

  // Helper to format amounts consistently
  format(amount: number | string | null | undefined): string {
    const num = Number(amount ?? 0);
    if (!isFinite(num)) return `${this.getSymbol()}${this.formatService.formatNumber(0, 2)}`;
    return `${this.getSymbol()}${this.formatService.formatNumber(num, 2)}`;
  }
}


