import { Pipe, PipeTransform, inject, OnDestroy } from '@angular/core';
import { PreferencesService } from '../services/preferences.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'numberFormat',
  standalone: true,
  pure: false // Needed to update when preferences change
})
export class NumberFormatPipe implements PipeTransform, OnDestroy {
  private prefsService = inject(PreferencesService);
  private subscription?: Subscription;
  private preferences: any = {};

  constructor() {
    // Subscribe to preference changes
    this.subscription = this.prefsService.preferences$.subscribe(prefs => {
      this.preferences = prefs;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  transform(value: any, decimals: number = 2): string {
    if (value === null || value === undefined || value === '') return '';
    
    const num = Number(value);
    if (isNaN(num)) return String(value);
    
    const format = this.preferences.number_format || this.prefsService.get('number_format') || 'US';
    
    // Format the number based on the selected format
    switch (format) {
      case 'EU':
        // European: 1.234,56 (dot for thousands, comma for decimal)
        return this.formatEuropean(num, decimals);
      case 'AR':
        // Arabic: ١,٢٣٤٫٥٦ (Arabic-Indic digits)
        return this.formatArabic(num, decimals);
      case 'US':
      default:
        // US: 1,234.56 (comma for thousands, dot for decimal)
        return this.formatUS(num, decimals);
    }
  }

  private formatUS(num: number, decimals: number): string {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  private formatEuropean(num: number, decimals: number): string {
    return num.toLocaleString('de-DE', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  private formatArabic(num: number, decimals: number): string {
    // Format using Arabic locale, then convert to Arabic-Indic digits
    const formatted = num.toLocaleString('ar-EG', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
    
    // Convert Western Arabic numerals to Arabic-Indic numerals
    return formatted.replace(/\d/g, (d) => {
      return String.fromCharCode(d.charCodeAt(0) + 1584);
    });
  }
}

