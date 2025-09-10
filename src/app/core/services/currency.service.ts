import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SettingsService } from '../../settings/settings.service';

export type CurrencyCode = 'USD' | 'AED' | string;

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private readonly settings = inject(SettingsService);
  private readonly currency$ = new BehaviorSubject<CurrencyCode>('USD');

  // Load from server and broadcast
  refreshFromServer(): Observable<CurrencyCode> {
    return this.settings.getCompany().pipe(
      map(res => ((res?.data?.company?.currency || 'USD') as CurrencyCode)),
      tap(code => this.currency$.next(code))
    );
  }

  get$(): Observable<CurrencyCode> {
    return this.currency$.asObservable();
  }

  getCurrent(): CurrencyCode {
    return this.currency$.getValue();
  }

  // Helper to format amounts consistently
  format(amount: number | string | null | undefined): string {
    const num = Number(amount ?? 0);
    if (!isFinite(num)) return `${this.getCurrent()} 0.00`;
    return `${this.getCurrent()} ${num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}


