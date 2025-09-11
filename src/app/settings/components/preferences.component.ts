import { Component, OnInit, inject, signal } from '@angular/core';
import { SettingsService, Preferences } from '../settings.service';

@Component({
  selector: 'preferences-settings',
  standalone: true,
  template: `
    <div class="space-y-6 ">
      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
          </svg>

          Preferences
        </h2>
        <p class="text-sm text-gray-500 mt-2">Personal user preferences and notifications</p>
      </div>

      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h3 class="text-2xl font-medium mb-4 gap-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
          </svg>

          Notification Preferences
        </h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Email Notifications</div>
              <div class="text-xs text-gray-500">Receive notifications via email</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().email_notifications" [class.bg-gray-300]="!form().email_notifications"
                    (click)="toggle('email_notifications')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().email_notifications"
                    [class.translate-x-1]="!form().email_notifications"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Push Notifications</div>
              <div class="text-xs text-gray-500">Receive browser push notifications</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().push_notifications" [class.bg-gray-300]="!form().push_notifications"
                    (click)="toggle('push_notifications')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().push_notifications"
                    [class.translate-x-1]="!form().push_notifications"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Maintenance Alerts</div>
              <div class="text-xs text-gray-500">Get notified about upcoming maintenance</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().maintenance_alerts" [class.bg-gray-300]="!form().maintenance_alerts"
                    (click)="toggle('maintenance_alerts')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().maintenance_alerts"
                    [class.translate-x-1]="!form().maintenance_alerts"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Work Order Updates</div>
              <div class="text-xs text-gray-500">Notifications for work order changes</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().work_order_updates" [class.bg-gray-300]="!form().work_order_updates"
                    (click)="toggle('work_order_updates')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().work_order_updates"
                    [class.translate-x-1]="!form().work_order_updates"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h3 class="text-2xl font-medium mb-4 gap-2 flex items-center">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"/>
          </svg>
          Display Preferences
        </h3>

        <div class="space-y-3">
          <div>
            <label class="text-sm font-medium mb-2 block">Dashboard Layout</label>
            <select class="input border border-gray-200 p-2 rounded-lg w-full" [value]="form().dashboard_layout || 'grid'"
                    (change)="patch('dashboard_layout', $any($event.target).value)">
              <option value="grid">Grid View</option>
              <option value="list">List View</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium mb-2 block">Items Per Page</label>
            <select class="input border border-gray-200 p-2 rounded-lg w-full" [value]="form().items_per_page || 20"
                    (change)="patch('items_per_page', +$any($event.target).value)">
              <option [value]="10">10 Items</option>
              <option [value]="20">20 Items</option>
              <option [value]="50">50 Items</option>
            </select>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Auto Refresh</div>
              <div class="text-xs text-gray-500">Automatically refresh data every 30 seconds</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().auto_refresh" [class.bg-gray-300]="!form().auto_refresh"
                    (click)="toggle('auto_refresh')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().auto_refresh" [class.translate-x-1]="!form().auto_refresh"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Compact View</div>
              <div class="text-xs text-gray-500">Use more compact spacing throughout the app</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().compact_view" [class.bg-gray-300]="!form().compact_view"
                    (click)="toggle('compact_view')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().compact_view" [class.translate-x-1]="!form().compact_view"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Show Avatars</div>
              <div class="text-xs text-gray-500">Display user avatars in lists and tables</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().show_avatars" [class.bg-gray-300]="!form().show_avatars"
                    (click)="toggle('show_avatars')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().show_avatars" [class.translate-x-1]="!form().show_avatars"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h3 class="text-2xl font-medium mb-2 flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
          Accessibility
        </h3>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-sm">Dark Mode</div>
            <div class="text-xs text-gray-500">Use dark theme (coming soon)</div>
          </div>
          <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                  [class.bg-blue-600]="form().dark_mode" [class.bg-gray-300]="!form().dark_mode"
                  (click)="toggle('dark_mode')">
            <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                  [class.translate-x-5]="form().dark_mode" [class.translate-x-1]="!form().dark_mode"></span>
          </button>
        </div>
      </div>

      <div class="flex justify-end">
        <button class="bg-blue-600 text-white px-4 py-3 rounded-xl disabled:opacity-50 transition-all duration-300 ease-in-out hover:bg-blue-700 cursor-pointer" [disabled]="saving()"
                (click)="save()">Save Preferences
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
export class PreferencesComponent implements OnInit {
  private api = inject(SettingsService);
  form = signal<Preferences>({});
  saving = signal(false);

  ngOnInit() { this.api.getPreferences().subscribe(res => this.form.set(res.data || {})); }
  patch<K extends keyof Preferences>(k: K, v: Preferences[K]) { this.form.set({ ...this.form(), [k]: v }); }
  toggle<K extends keyof Preferences>(k: K) { this.form.set({ ...this.form(), [k]: !this.form()[k] as any }); }

  save() {
    this.saving.set(true);
    this.api.updatePreferences(this.form()).subscribe({
      next: () => { this.saving.set(false); localStorage.setItem('app.preferences', JSON.stringify(this.form())); },
      error: () => this.saving.set(false)
    });
  }
}


