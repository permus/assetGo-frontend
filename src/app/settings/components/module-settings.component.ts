import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { SettingsService, ModuleItem } from '../settings.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'module-settings',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="  p-4 rounded-lg space-y-4">
      <div>
        <h2 class="text-xl font-medium">Modules</h2>
        <p class="text-sm text-gray-600">Enable/disable features and manage permissions</p>
      </div>

      <div class="border bg-white border-gray-200 rounded-lg">
        <div class="border-b border-gray-200 p-4">
          <h3 class="font-medium">Module Management</h3>
          <p class="text-xs text-gray-500">Control which modules are available to your team. System modules cannot be disabled.</p>
        </div>

        <div class="p-4 space-y-6">
          <div>
            <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">System Modules</div>
            <div class="space-y-2">
              <div *ngFor="let m of systemModules()" class="flex items-center justify-between border border-gray-200 rounded-lg p-3 bg-gray-50">
                <div>
                  <div class="font-medium">{{ m.display_name }}</div>
                  <div class="text-xs text-gray-600">{{ m.description }}</div>
                </div>
                <span class="text-[10px] px-2 py-1 rounded-full bg-green-100 text-green-700">Always Enabled</span>
              </div>
            </div>
          </div>

          <div>
            <div class="text-xs uppercase tracking-wide text-gray-500 mb-2">Feature Modules</div>
            <div class="space-y-2">
              <div *ngFor="let m of featureModules()" class="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                <div>
                  <div class="font-medium">{{ m.display_name }}</div>
                  <div class="text-xs text-gray-600">{{ m.description }}</div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] px-2 py-1 rounded-full" [class.bg-blue-100]="m.is_enabled" [class.text-blue-700]="m.is_enabled" [class.bg-gray-100]="!m.is_enabled" [class.text-gray-600]="!m.is_enabled">{{ m.is_enabled ? 'Enabled' : 'Disabled' }}</span>
                  <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full" [class.bg-blue-600]="m.is_enabled" [class.bg-gray-300]="!m.is_enabled" [disabled]="saving()" (click)="toggle(m)">
                    <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="m.is_enabled" [class.translate-x-1]="!m.is_enabled"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .input { width: 100%; border-radius: 0.5rem; border: 1px solid #d1d5db; padding: 0.75rem 0.875rem; font-size: 1rem; background: #ffffff; transition: all 0.2s ease-in-out; }
    .input::placeholder { color: #9ca3af; }
  `]
})
export class ModuleSettingsComponent implements OnInit {
  private api = inject(SettingsService);
  modules = signal<ModuleItem[]>([]);
  saving = signal(false);
  systemModules = computed(() => this.modules().filter(m => m.is_system_module));
  featureModules = computed(() => this.modules().filter(m => !m.is_system_module));

  ngOnInit() { this.refresh(); }
  refresh() {
    this.api.listModules().subscribe(res => {
      const list = res.data?.modules || [];
      this.modules.set(list);
      this.enableAllModulesInitially(list);
    });
  }

  private enableAllModulesInitially(list: ModuleItem[]) {
    const alreadyInitialized = localStorage.getItem('app.modules.initialized') === 'true';
    if (alreadyInitialized) return;

    const modulesToEnable = list.filter(m => !m.is_system_module && !m.is_enabled);
    if (modulesToEnable.length === 0) {
      localStorage.setItem('app.modules.initialized', 'true');
      return;
    }

    this.saving.set(true);
    let remaining = modulesToEnable.length;

    // Optimistically update UI to enabled state
    this.modules.update(arr => arr.map(m => modulesToEnable.some(t => t.id === m.id) ? { ...m, is_enabled: true } : m));

    modulesToEnable.forEach(mod => {
      this.api.enableModule(mod.id).subscribe({
        next: () => {
          remaining -= 1;
          if (remaining === 0) {
            this.saving.set(false);
            localStorage.setItem('app.modules.initialized', 'true');
          }
        },
        error: () => {
          // Keep UI enabled per requirement; still conclude initialization
          remaining -= 1;
          if (remaining === 0) {
            this.saving.set(false);
            localStorage.setItem('app.modules.initialized', 'true');
          }
        }
      });
    });
  }

  toggle(m: ModuleItem) {
    if (m.is_system_module) return;
    this.saving.set(true);
    const prev = m.is_enabled;
    this.modules.update(list => list.map(x => x.id === m.id ? { ...x, is_enabled: !prev } : x));
    const req = prev ? this.api.disableModule(m.id) : this.api.enableModule(m.id);
    req.subscribe({
      next: () => this.saving.set(false),
      error: () => { this.modules.update(list => list.map(x => x.id === m.id ? { ...x, is_enabled: prev } : x)); this.saving.set(false); }
    });
  }
}


