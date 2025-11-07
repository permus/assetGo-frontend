import { Pipe, PipeTransform, inject, OnDestroy } from '@angular/core';
import { PreferencesService } from '../services/preferences.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'timeFormat',
  standalone: true,
  pure: false // Needed to update when preferences change
})
export class TimeFormatPipe implements PipeTransform, OnDestroy {
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
    
    const format = this.preferences.time_format || this.prefsService.get('time_format') || '12';
    const timezone = this.preferences.timezone || this.prefsService.get('timezone') || 'UTC';
    
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

