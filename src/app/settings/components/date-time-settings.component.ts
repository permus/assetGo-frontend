import { Component, inject, OnInit, signal } from '@angular/core';
import { SettingsService, Preferences } from '../settings.service';

@Component({
  selector: 'date-time-settings',
  standalone: true,
  template: `
    <div class="space-y-6">
      <div class="border border-gray-200 p-4 rounded-2xl">
        <h2 class="text-xl font-medium">Date & Time</h2>
        <p class="text-sm text-gray-600">Date formats, timezone, and time preferences</p>
      </div>
      <div class="border border-gray-200 p-4 rounded-2xl space-y-6">
        <h3 class="font-medium">Date, Time & Number Formats</h3>
        <div>
          <div class="text-sm font-medium mb-2">Date Format</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button class="p-6 rounded-xl border text-center" [class.bg-blue-600]="form().date_format==='MM/DD/YYYY'" [class.text-white]="form().date_format==='MM/DD/YYYY'" (click)="set('date_format','MM/DD/YYYY')">
              <div class="text-sm">MM/DD/YYYY</div>
              <div class="text-xs opacity-80 mt-2">12/25/2024</div>
            </button>
            <button class="p-6 rounded-xl border text-center" [class.bg-blue-600]="form().date_format==='DD/MM/YYYY'" [class.text-white]="form().date_format==='DD/MM/YYYY'" (click)="set('date_format','DD/MM/YYYY')">
              <div class="text-sm">DD/MM/YYYY</div>
              <div class="text-xs opacity-80 mt-2">25/12/2024</div>
            </button>
            <button class="p-6 rounded-xl border text-center" [class.bg-blue-600]="form().date_format==='YYYY-MM-DD'" [class.text-white]="form().date_format==='YYYY-MM-DD'" (click)="set('date_format','YYYY-MM-DD')">
              <div class="text-sm">YYYY-MM-DD</div>
              <div class="text-xs opacity-80 mt-2">2024-12-25</div>
            </button>
          </div>
          <div class="text-xs text-gray-500 mt-2">Preview: {{ previewDate() }}</div>
        </div>
        <div>
          <div class="text-sm font-medium mb-2">Time Format</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button class="p-6 rounded-xl border text-center" [class.bg-blue-600]="form().time_format==='12'" [class.text-white]="form().time_format==='12'" (click)="set('time_format','12')">
              <div class="text-sm">12-hour</div>
              <div class="text-xs opacity-80 mt-2">2:30 PM</div>
            </button>
            <button class="p-6 rounded-xl border text-center" [class.bg-blue-600]="form().time_format==='24'" [class.text-white]="form().time_format==='24'" (click)="set('time_format','24')">
              <div class="text-sm">24-hour</div>
              <div class="text-xs opacity-80 mt-2">14:30</div>
            </button>
          </div>
          <div class="text-xs text-gray-500 mt-2">Preview: {{ previewTime() }}</div>
        </div>
        <div>
          <div class="text-sm font-medium mb-2">Number Format</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button class="p-6 rounded-xl border text-center" [class.bg-blue-600]="form().number_format==='US'" [class.text-white]="form().number_format==='US'" (click)="set('number_format','US')">
              <div class="text-sm">US Format</div>
              <div class="text-xs opacity-80 mt-2">1,234.56</div>
            </button>
            <button class="p-6 rounded-xl border text-center" [class.bg-blue-600]="form().number_format==='EU'" [class.text-white]="form().number_format==='EU'" (click)="set('number_format','EU')">
              <div class="text-sm">European</div>
              <div class="text-xs opacity-80 mt-2">1.234,56</div>
            </button>
            <button class="p-6 rounded-xl border text-center" [class.bg-blue-600]="form().number_format==='AR'" [class.text-white]="form().number_format==='AR'" (click)="set('number_format','AR')">
              <div class="text-sm">Arabic</div>
              <div class="text-xs opacity-80 mt-2">١,٢٣٤٫٥٦</div>
            </button>
          </div>
        </div>
        <div>
          <div class="text-sm font-medium mb-2">Timezone</div>
          <select class="border p-2 rounded w-full" [value]="form().timezone || 'Asia/Dhaka'" (change)="set('timezone',$any($event.target).value)">
            <option value="Asia/Dhaka">Asia/Dhaka</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">America/New_York</option>
            <option value="Europe/London">Europe/London</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end">
        <button class="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50" [disabled]="saving()" (click)="save()">Save Changes</button>
      </div>
    </div>
  `
})
export class DateTimeSettingsComponent implements OnInit {
  private api = inject(SettingsService);
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
      next: () => this.saving.set(false),
      error: () => this.saving.set(false)
    });
  }
}


