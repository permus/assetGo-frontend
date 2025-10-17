import { Pipe, PipeTransform, inject } from '@angular/core';
import { PreferencesService } from '../services/preferences.service';

@Pipe({
  name: 'dateFormat',
  standalone: true,
  pure: false // Needed to update when preferences change
})
export class DateFormatPipe implements PipeTransform {
  private prefsService = inject(PreferencesService);

  transform(value: any): string {
    if (!value) return '';
    
    const date = new Date(value);
    if (isNaN(date.getTime())) return String(value);
    
    const format = this.prefsService.get('date_format') || 'MM/DD/YYYY';
    
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    
    switch (format) {
      case 'DD/MM/YYYY':
        return `${dd}/${mm}/${yyyy}`;
      case 'YYYY-MM-DD':
        return `${yyyy}-${mm}-${dd}`;
      case 'MM/DD/YYYY':
      default:
        return `${mm}/${dd}/${yyyy}`;
    }
  }
}

