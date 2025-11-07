import { Pipe, PipeTransform, inject, OnDestroy } from '@angular/core';
import { PreferencesService } from '../services/preferences.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'dateFormat',
  standalone: true,
  pure: false // Needed to update when preferences change
})
export class DateFormatPipe implements PipeTransform, OnDestroy {
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

  transform(value: any): string {
    if (!value) return '';
    
    const date = new Date(value);
    if (isNaN(date.getTime())) return String(value);
    
    const format = this.preferences.date_format || this.prefsService.get('date_format') || 'MM/DD/YYYY';
    const timezone = this.preferences.timezone || this.prefsService.get('timezone') || 'UTC';
    
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

