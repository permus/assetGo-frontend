import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SettingsService } from '../../settings/settings.service';

export type CurrencyCode = 'USD' | 'AED' | string;

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private readonly settings = inject(SettingsService);
  private readonly currency$ = new BehaviorSubject<CurrencyCode>('USD');
  private refreshing = false;
  
  private readonly currencySymbols: Record<string, string> = {
    'USD': '$',
    'AED': 'د.إ',
  };

  // Load from server and broadcast
  refreshFromServer(): Observable<CurrencyCode> {
    // Prevent multiple simultaneous requests
    if (this.refreshing) {
      return this.currency$.asObservable().pipe(
        map(code => code)
      );
    }

    // Check cache first
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
    if (!isFinite(num)) return `${this.getSymbol()}0.00`;
    return `${this.getSymbol()}${num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}


