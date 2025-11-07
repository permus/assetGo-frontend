import { Injectable, inject } from '@angular/core';
import { PreferencesService } from './preferences.service';

@Injectable({
  providedIn: 'root'
})
export class FormatService {
  private prefsService = inject(PreferencesService);

  /**
   * Format a date according to user preferences
   */
  formatDate(value: any): string {
    if (!value) return '';
    
    const date = new Date(value);
    if (isNaN(date.getTime())) return String(value);
    
    const format = this.prefsService.get('date_format') || 'MM/DD/YYYY';
    const timezone = this.prefsService.get('timezone') || 'UTC';
    
    // Convert to user's timezone
    const dateInTimezone = this.convertToTimezone(date, timezone);
    
    const mm = String(dateInTimezone.getMonth() + 1).padStart(2, '0');
    const dd = String(dateInTimezone.getDate()).padStart(2, '0');
    const yyyy = dateInTimezone.getFullYear();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    switch (format) {
      case 'DD/MM/YYYY':
        return `${dd}/${mm}/${yyyy}`;
      case 'YYYY-MM-DD':
        return `${yyyy}-${mm}-${dd}`;
      case 'MMM DD, YYYY':
        return `${monthNames[dateInTimezone.getMonth()]} ${dd}, ${yyyy}`;
      case 'MM/DD/YYYY':
      default:
        return `${mm}/${dd}/${yyyy}`;
    }
  }

  /**
   * Format a time according to user preferences
   */
  formatTime(value: any): string {
    if (!value) return '';
    
    const date = new Date(value);
    if (isNaN(date.getTime())) return String(value);
    
    const format = this.prefsService.get('time_format') || '12';
    const timezone = this.prefsService.get('timezone') || 'UTC';
    
    // Convert to user's timezone
    const dateInTimezone = this.convertToTimezone(date, timezone);
    
    const hours = dateInTimezone.getHours();
    const minutes = String(dateInTimezone.getMinutes()).padStart(2, '0');
    
    if (format === '24') {
      // 24-hour format
      return `${String(hours).padStart(2, '0')}:${minutes}`;
    } else {
      // 12-hour format with AM/PM
      const period = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      return `${hours12}:${minutes} ${period}`;
    }
  }

  /**
   * Format a number according to user preferences
   */
  formatNumber(value: any, decimals: number = 2): string {
    if (value === null || value === undefined || value === '') return '';
    
    const num = Number(value);
    if (isNaN(num)) return String(value);
    
    const format = this.prefsService.get('number_format') || 'US';
    
    switch (format) {
      case 'EU':
        // European: 1.234,56
        return num.toLocaleString('de-DE', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });
      case 'AR':
        // Arabic: ١,٢٣٤٫٥٦
        const formatted = num.toLocaleString('ar-EG', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });
        // Convert to Arabic-Indic digits
        return formatted.replace(/\d/g, (d) => {
          return String.fromCharCode(d.charCodeAt(0) + 1584);
        });
      case 'US':
      default:
        // US: 1,234.56
        return num.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });
    }
  }

  /**
   * Convert date to specified timezone
   */
  private convertToTimezone(date: Date, timezone: string): Date {
    try {
      // Use Intl.DateTimeFormat to convert to timezone
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      
      const parts = formatter.formatToParts(date);
      const year = parseInt(parts.find(p => p.type === 'year')?.value || '0');
      const month = parseInt(parts.find(p => p.type === 'month')?.value || '0') - 1;
      const day = parseInt(parts.find(p => p.type === 'day')?.value || '0');
      const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0');
      const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0');
      const second = parseInt(parts.find(p => p.type === 'second')?.value || '0');
      
      return new Date(year, month, day, hour, minute, second);
    } catch (error) {
      // Fallback to original date if timezone conversion fails
      console.warn('Timezone conversion failed, using local time:', error);
      return date;
    }
  }
}

