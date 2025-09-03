import { Component, OnInit, inject, signal } from '@angular/core';
import { SettingsService, Preferences } from '../settings.service';

@Component({
  selector: 'preferences-settings',
  standalone: true,
  template: `
    <div class="space-y-6 ">
      <div class="border bg-white border-gray-200 p-4 rounded-lg">
        <h2 class="text-xl font-medium">Preferences</h2>
        <p class="text-sm text-gray-600">Personal user preferences and notifications</p>
      </div>

      <div class="border bg-white border-gray-200 p-4 rounded-lg">
        <h3 class="font-medium mb-4">Notification Preferences</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Email Notifications</div>
              <div class="text-xs text-gray-500">Receive notifications via email</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full" [class.bg-blue-600]="form().email_notifications" [class.bg-gray-300]="!form().email_notifications" (click)="toggle('email_notifications')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="form().email_notifications" [class.translate-x-1]="!form().email_notifications"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Push Notifications</div>
              <div class="text-xs text-gray-500">Receive browser push notifications</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full" [class.bg-blue-600]="form().push_notifications" [class.bg-gray-300]="!form().push_notifications" (click)="toggle('push_notifications')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="form().push_notifications" [class.translate-x-1]="!form().push_notifications"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Maintenance Alerts</div>
              <div class="text-xs text-gray-500">Get notified about upcoming maintenance</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full" [class.bg-blue-600]="form().maintenance_alerts" [class.bg-gray-300]="!form().maintenance_alerts" (click)="toggle('maintenance_alerts')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="form().maintenance_alerts" [class.translate-x-1]="!form().maintenance_alerts"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Work Order Updates</div>
              <div class="text-xs text-gray-500">Notifications for work order changes</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full" [class.bg-blue-600]="form().work_order_updates" [class.bg-gray-300]="!form().work_order_updates" (click)="toggle('work_order_updates')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="form().work_order_updates" [class.translate-x-1]="!form().work_order_updates"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="border bg-white border-gray-200 p-4 rounded-lg">
        <h3 class="font-medium mb-4">Display Preferences</h3>
        <div class="space-y-3">
          <div>
            <label class="text-sm font-medium">Dashboard Layout</label>
            <select class="border border-gray-200 p-2 rounded-lg w-full" [value]="form().dashboard_layout || 'grid'" (change)="patch('dashboard_layout', $any($event.target).value)">
              <option value="grid">Grid View</option>
              <option value="list">List View</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium">Items Per Page</label>
            <select class="border border-gray-200 p-2 rounded-lg w-full" [value]="form().items_per_page || 20" (change)="patch('items_per_page', +$any($event.target).value)">
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
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full" [class.bg-blue-600]="form().auto_refresh" [class.bg-gray-300]="!form().auto_refresh" (click)="toggle('auto_refresh')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="form().auto_refresh" [class.translate-x-1]="!form().auto_refresh"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Compact View</div>
              <div class="text-xs text-gray-500">Use more compact spacing throughout the app</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full" [class.bg-blue-600]="form().compact_view" [class.bg-gray-300]="!form().compact_view" (click)="toggle('compact_view')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="form().compact_view" [class.translate-x-1]="!form().compact_view"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Show Avatars</div>
              <div class="text-xs text-gray-500">Display user avatars in lists and tables</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full" [class.bg-blue-600]="form().show_avatars" [class.bg-gray-300]="!form().show_avatars" (click)="toggle('show_avatars')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="form().show_avatars" [class.translate-x-1]="!form().show_avatars"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="border bg-white border-gray-200 p-4 rounded-lg">
        <h3 class="font-medium mb-2">Accessibility</h3>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-sm">Dark Mode</div>
            <div class="text-xs text-gray-500">Use dark theme (coming soon)</div>
          </div>
          <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full" [class.bg-blue-600]="form().dark_mode" [class.bg-gray-300]="!form().dark_mode" (click)="toggle('dark_mode')">
            <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="form().dark_mode" [class.translate-x-1]="!form().dark_mode"></span>
          </button>
        </div>
      </div>

      <div class="flex justify-end">
        <button class="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50" [disabled]="saving()" (click)="save()">Save Preferences</button>
      </div>
    </div>
  `,
  styles: [`
    .input { width: 100%; border-radius: 0.5rem; border: 1px solid #d1d5db; padding: 0.75rem 0.875rem; font-size: 1rem; background: #ffffff; transition: all 0.2s ease-in-out; }
    .input::placeholder { color: #9ca3af; }
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


