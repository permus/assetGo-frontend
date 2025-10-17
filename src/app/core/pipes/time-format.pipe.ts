import { Pipe, PipeTransform, inject } from '@angular/core';
import { PreferencesService } from '../services/preferences.service';

@Pipe({
  name: 'timeFormat',
  standalone: true,
  pure: false // Needed to update when preferences change
})
export class TimeFormatPipe implements PipeTransform {
  private prefsService = inject(PreferencesService);

  transform(value: any): string {
    if (!value) return '';
    
    const date = new Date(value);
    if (isNaN(date.getTime())) return String(value);
    
    const format = this.prefsService.get('time_format') || '12';
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
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
}

