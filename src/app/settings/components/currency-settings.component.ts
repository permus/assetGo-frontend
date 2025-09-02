import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'currency-settings',
  standalone: true,
  template: `
    <div class="border border-gray-200 p-4 rounded-2xl">
      <h2 class="text-xl font-medium mb-2">Currency Settings</h2>
      <div class="text-sm text-gray-600 mb-1">Company Currency</div>
      <p class="text-gray-500 text-sm mb-3">All financial amounts will be displayed in the selected currency.</p>
      <div class="flex gap-2 flex-wrap">
        <button class="px-3 py-2 rounded border flex items-center gap-2"
                [class.bg-blue-600]="currentCurrency()==='USD'" [class.text-white]="currentCurrency()==='USD'"
                [disabled]="disabled || saving()" (click)="quickSet('USD')">
          <span>$</span>
          <span>USD - US Dollar</span>
        </button>
        <button class="px-3 py-2 rounded border flex items-center gap-2"
                [class.bg-blue-600]="currentCurrency()==='AED'" [class.text-white]="currentCurrency()==='AED'"
                [disabled]="disabled || saving()" (click)="quickSet('AED')">
          <span>•</span>
          <span>AED - UAE Dirham</span>
        </button>
      </div>
      <div class="text-xs text-gray-500 mt-2" *ngIf="currentCurrency()">Current setting: {{ verboseCurrency(currentCurrency()) }}</div>
      <p class="text-sm text-gray-500 mt-2">Admin only</p>
    </div>
  `
})
export class CurrencySettingsComponent implements OnInit {
  @Input() disabled = false;
  saving = signal(false);
  currentCurrency = signal('');
  private api = inject(SettingsService);

  ngOnInit() {
    this.api.getCompany().subscribe(res => {
      const c = (res.data?.company?.currency ?? '').toString().toUpperCase();
      this.currentCurrency.set(c);
    });
  }

  quickSet(code: string) {
    if (this.disabled) return;
    if (this.currentCurrency() === code) return;
    this.saving.set(true);
    this.api.updateCurrency(code).subscribe({
      next: () => { this.currentCurrency.set(code); this.saving.set(false); },
      error: () => this.saving.set(false)
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


