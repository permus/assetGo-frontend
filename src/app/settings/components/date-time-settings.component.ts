import { Component, inject, OnInit, signal } from '@angular/core';
import { SettingsService, Preferences } from '../settings.service';
import { ToastService } from '../../core/services/toast.service';
import { PreferencesService } from '../../core/services/preferences.service';

@Component({
  selector: 'date-time-settings',
  standalone: true,
  template: `
    <div class="space-y-6">
      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>

          Date & Time
        </h2>
        <p class="text-sm text-gray-500 mt-2">Date formats, timezone, and time preferences</p>
      </div>
      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow space-y-6">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>

          Date, Time & Number Formats
        </h2>
        <div>
          <div class="text-sm font-medium mb-2">Date Format</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().date_format==='MM/DD/YYYY'"
              [class.text-white]="form().date_format==='MM/DD/YYYY'" (click)="set('date_format','MM/DD/YYYY')">
              <span class="flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-5 text-gray-400"
                     [class.text-white]="form().date_format==='MM/DD/YYYY'" (click)="set('date_format','MM/DD/YYYY')">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                </svg>
              </span>
              <div class="text-sm font-medium">MM/DD/YYYY</div>
              <div class="text-xs opacity-80 mt-2">12/25/2024</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().date_format==='DD/MM/YYYY'"
              [class.text-white]="form().date_format==='DD/MM/YYYY'" (click)="set('date_format','DD/MM/YYYY')">
             <span class="flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-5 text-gray-400"
                     [class.text-white]="form().date_format==='DD/MM/YYYY'" (click)="set('date_format','DD/MM/YYYY')">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                </svg>
              </span>
              <div class="text-sm font-medium">DD/MM/YYYY</div>
              <div class="text-xs opacity-80 mt-2">25/12/2024</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().date_format==='YYYY-MM-DD'"
              [class.text-white]="form().date_format==='YYYY-MM-DD'" (click)="set('date_format','YYYY-MM-DD')">
               <span class="flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-5 text-gray-400"
                     [class.text-white]="form().date_format==='YYYY-MM-DD'" (click)="set('date_format','YYYY-MM-DD')">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                </svg>
              </span>
              <div class="text-sm font-medium">YYYY-MM-DD</div>
              <div class="text-xs opacity-80 mt-2">2024-12-25</div>
            </button>
          </div>
          <div class="text-xs text-gray-500 mt-2">Preview: {{ previewDate() }}</div>
        </div>
        <div>
          <div class="text-sm font-medium mb-2">Time Format</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().time_format==='12'" [class.text-white]="form().time_format==='12'"
              (click)="set('time_format','12')">
              <span class="flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-4 text-gray-400" [class.text-white]="form().time_format==='12'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </span>
              <div class="text-sm font-medium">12-hour</div>
              <div class="text-xs opacity-80 mt-2">2:30 PM</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().time_format==='24'" [class.text-white]="form().time_format==='24'"
              (click)="set('time_format','24')">
              <span class="flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-4 text-gray-400" [class.text-white]="form().time_format==='24'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </span>
              <div class="text-sm font-medium">24-hour</div>
              <div class="text-xs opacity-80 mt-2">14:30</div>
            </button>
          </div>
          <div class="text-xs text-gray-500 mt-2">Preview: {{ previewTime() }}</div>
        </div>
        <div>
          <div class="text-sm font-medium mb-2">Number Format</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().number_format==='US'" [class.text-white]="form().number_format==='US'"
              (click)="set('number_format','US')">
              <div class="text-sm font-medium">US Format</div>
              <div class="text-xs opacity-80 mt-2">1,234.56</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().number_format==='EU'" [class.text-white]="form().number_format==='EU'"
              (click)="set('number_format','EU')">
              <div class="text-sm font-medium">European</div>
              <div class="text-xs opacity-80 mt-2">1.234,56</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().number_format==='AR'" [class.text-white]="form().number_format==='AR'"
              (click)="set('number_format','AR')">
              <div class="text-sm font-medium">Arabic</div>
              <div class="text-xs opacity-80 mt-2">١,٢٣٤٫٥٦</div>
            </button>
          </div>
        </div>
        <div>
          <div class="text-sm font-medium mb-2">Timezone</div>
          <select class="input border border-gray-200 p-2 rounded w-full" [value]="form().timezone || 'Asia/Dhaka'"
                  (change)="set('timezone',$any($event.target).value)">
            <option value="Asia/Dhaka">Asia/Dhaka</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">America/New_York</option>
            <option value="Europe/London">Europe/London</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end">
        <button class="bg-blue-600 text-white px-4 py-3 rounded-xl disabled:opacity-50 transition-all duration-300 hover:bg-blue-700 cursor-pointer" [disabled]="saving()"
                (click)="save()">Save Changes
        </button>
      </div>
    </div>
  `,
  styles: [`
    .input {
      width: 100%;
      border-radius: 12px;
      border: 1px solid #d1d5db;
      padding: 0.75rem 0.875rem;
      font-size: 1rem;
      background: #ffffff;
      transition: all 0.2s ease-in-out;
    }

    .input::placeholder {
      color: #9ca3af;
    }

    .input:focus {
      outline: none;
      border-color: #3b82f6;
      background: #ffffff;
    }
  `]
})
export class DateTimeSettingsComponent implements OnInit {
  private api = inject(SettingsService);
  private toast = inject(ToastService);
  private prefsService = inject(PreferencesService);
  form = signal<Preferences>({});
  saving = signal(false);

  ngOnInit() { this.api.getPreferences().subscribe(res => this.form.set(res.data || {})); }
  set<K extends keyof Preferences>(k: K, v: Preferences[K]) { this.form.set({ ...this.form(), [k]: v }); }
  previewDate() {
    const now = new Date('2025-12-25T12:00:00Z');
    const fmt = this.form().date_format || 'MM/DD/YYYY';
    const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(now.getUTCDate()).padStart(2, '0');
    const yyyy = now.getUTCFullYear();
    if (fmt === 'DD/MM/YYYY') return `${dd}/${mm}/${yyyy}`;
    if (fmt === 'YYYY-MM-DD') return `${yyyy}-${mm}-${dd}`;
    return `${mm}/${dd}/${yyyy}`;
  }
  previewTime() {
    return this.form().time_format === '24' ? '14:30' : '2:30 PM';
  }

  save() {
    this.saving.set(true);
    this.api.updatePreferences(this.form()).subscribe({
      next: () => {
        this.saving.set(false);
        this.prefsService.updatePreferences(this.form());
        this.toast.success('Date & time settings saved successfully!');
      },
      error: (error) => {
        this.toast.error(error.error?.message || 'Failed to save settings');
        this.saving.set(false);
      }
    });
  }
}


