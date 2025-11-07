import { Component, Input, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../settings.service';
import { CurrencyService } from '../../core/services/currency.service';
import { ToastService } from '../../core/services/toast.service';
import { PreferencesService } from '../../core/services/preferences.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'currency-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border border-gray-200 shadow bg-white mb-4 p-5 rounded-2xl">
      <h2 class="text-2xl font-medium mb-3">Currency Settings</h2>
      <div class="text-sm text-gray-500 mb-1">User Currency Preference</div>
      <p class="text-gray-500 text-sm mb-3">All financial amounts will be displayed in the selected currency.</p>
      <div class="flex gap-2 flex-wrap">
        <button
          class="px-3 py-2 rounded-xl border border-gray-200 flex items-center gap-2 transition-all duration-300 cursor-pointer hover:border-blue-500 font-medium"
          [class.bg-blue-600]="currentCurrency()==='USD'" [class.text-white]="currentCurrency()==='USD'"
          [disabled]="disabled || saving()" (click)="quickSet('USD')">
          <span>$</span>
          <span>USD - US Dollar</span>
        </button>
        <button
          class="px-3 py-2 rounded-xl border border-gray-200 flex items-center gap-2 transition-all duration-300 cursor-pointer hover:border-blue-500 font-medium"
          [class.bg-blue-600]="currentCurrency()==='AED'" [class.text-white]="currentCurrency()==='AED'"
          [disabled]="disabled || saving()" (click)="quickSet('AED')">
          <span>د.إ</span>
          <span>AED - UAE Dirham</span>
        </button>
      </div>
      <div class="text-xs text-gray-500 mt-2" *ngIf="currentCurrency()">Current
        setting: {{ verboseCurrency(currentCurrency()) }}
      </div>
    </div>
  `
})
export class CurrencySettingsComponent implements OnInit, OnDestroy {
  @Input() disabled = false;
  saving = signal(false);
  currentCurrency = signal('');
  private api = inject(SettingsService);
  private currency = inject(CurrencyService);
  private toast = inject(ToastService);
  private prefsService = inject(PreferencesService);
  private currencySubscription?: Subscription;

  ngOnInit() {
    // Subscribe to currency changes from CurrencyService
    this.currencySubscription = this.currency.get$().subscribe(code => {
      if (code) {
        this.currentCurrency.set(code.toUpperCase());
      }
    });

    // Load currency from user preferences first
    const prefs = this.prefsService.getPreferences();
    if (prefs?.currency) {
      const c = prefs.currency.toUpperCase();
      this.currentCurrency.set(c);
      this.currency.setCurrency(c);
    } else {
      // Fallback to company currency
      this.api.getCompany().subscribe(res => {
        const c = (res.data?.company?.currency ?? 'USD').toString().toUpperCase();
        this.currentCurrency.set(c);
        this.currency.refreshFromServer().subscribe();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.currencySubscription) {
      this.currencySubscription.unsubscribe();
    }
  }

  quickSet(code: string) {
    if (this.disabled || this.saving()) return;
    const codeUpper = code.toUpperCase();
    if (this.currentCurrency() === codeUpper) return;
    
    this.saving.set(true);
    
    // Save to user preferences - this will trigger CurrencyService subscription
    this.prefsService.setAndSave('currency', codeUpper).subscribe({
      next: () => {
        // CurrencyService will automatically update via subscription to preferences$
        // But we also explicitly update it to ensure immediate propagation
        this.currency.setCurrency(codeUpper);
        this.currentCurrency.set(codeUpper);
        this.saving.set(false);
        this.toast.success('Currency updated successfully!');
      },
      error: (error) => {
        this.toast.error(error.error?.message || 'Failed to update currency');
        this.saving.set(false);
      }
    });
  }

  verboseCurrency(code: string) {
    switch (code) {
      case 'USD': return 'US Dollar (USD)';
      case 'AED': return 'UAE Dirham (AED)';
      default: return code;
    }
  }
}


