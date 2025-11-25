import {Component, OnInit, inject, signal, computed} from '@angular/core';
import {SettingsService, ModuleItem} from '../settings.service';
import {ToastService} from '../../core/services/toast.service';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'module-settings',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <div class="space-y-4">
      <div class="border border-gray-200 p-5 rounded-2xl shadow bg-white">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>

          Modules
        </h2>
        <p class="text-sm text-gray-500 mt-2">Enable/disable features and manage permissions</p>
      </div>

      <div class="border bg-white border-gray-200 rounded-2xl shadow">
        <div class="p-5 pb-2">
          <h3 class="text-2xl font-medium">Module Management</h3>
          <p class="text-xs text-gray-500">Control which modules are available to your team. System modules cannot be
            disabled.</p>
        </div>

        <div class="p-5 space-y-6">
          <div>
            <div class="text-sm tracking-wide text-gray-500 mb-3">System Modules</div>
            <div class="space-y-3">
              <div *ngFor="let m of systemModules()"
                   class="flex items-center justify-between border border-gray-200 rounded-2xl p-4 bg-gray-50">
                <div>
                  <div class="font-medium">{{ m.display_name }}</div>
                  <div class="text-xs text-gray-600">{{ m.description }}</div>
                </div>
                <span class="text-[10px] px-2 py-1 rounded-full bg-green-100 text-green-700">Always Enabled</span>
              </div>
            </div>
          </div>

          <div>
            <div class="text-sm tracking-wide text-gray-500 mb-2">Feature Modules</div>
            <div class="space-y-3">
              <div *ngFor="let m of featureModules()"
                   class="flex items-center justify-between border border-gray-200 rounded-2xl p-4">
                <div>
                  <div class="font-medium">{{ m.display_name }}</div>
                  <div class="text-xs text-gray-600">{{ m.description }}</div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] px-2 py-1 rounded-full" [class.bg-blue-100]="m.is_enabled"
                        [class.text-blue-700]="m.is_enabled" [class.bg-gray-100]="!m.is_enabled"
                        [class.text-gray-600]="!m.is_enabled">{{ m.is_enabled ? 'Enabled' : 'Disabled' }}</span>

                  <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300"
                          [class.bg-blue-600]="m.is_enabled" [class.bg-gray-300]="!m.is_enabled"
                          [class.opacity-50]="saving()" [class.cursor-not-allowed]="saving()" [class.cursor-pointer]="!saving()"
                          [disabled]="saving()"
                          (click)="toggle(m)">
                    <span *ngIf="loadingModuleId() === m.id" class="absolute inset-0 flex items-center justify-center">
                      <svg class="animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    <span *ngIf="loadingModuleId() !== m.id" class="inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-400"
                          [class.translate-x-5]="m.is_enabled" [class.translate-x-1]="!m.is_enabled"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ModuleSettingsComponent implements OnInit {
  private api = inject(SettingsService);
  private toast = inject(ToastService);
  modules = signal<ModuleItem[]>([]);
  saving = signal(false);
  loadingModuleId = signal<number | null>(null);
  systemModules = computed(() => this.modules().filter(m => m.is_system_module));
  featureModules = computed(() => this.modules().filter(m => !m.is_system_module));

  ngOnInit() {
    this.refresh();
  }

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
    this.modules.update(arr => arr.map(m => modulesToEnable.some(t => t.id === m.id) ? {...m, is_enabled: true} : m));

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
    if (m.is_system_module || this.saving()) return;
    
    this.saving.set(true);
    this.loadingModuleId.set(m.id);
    const prev = m.is_enabled;
    const action = prev ? 'disabled' : 'enabled';
    
    // Optimistically update UI
    this.modules.update(list => list.map(x => x.id === m.id ? {...x, is_enabled: !prev} : x));
    
    const req = prev ? this.api.disableModule(m.id) : this.api.enableModule(m.id);
    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.loadingModuleId.set(null);
        this.toast.success(`Module ${action} successfully!`);
        // Note: refreshModulesEnabled() is already called via switchMap() in enableModule/disableModule
        // which will update the BehaviorSubject and trigger UI updates
      },
      error: (error) => {
        // Revert optimistic update on error
        this.modules.update(list => list.map(x => x.id === m.id ? {...x, is_enabled: prev} : x));
        this.toast.error(error.error?.message || `Failed to ${action.slice(0, -1)} module`);
        this.saving.set(false);
        this.loadingModuleId.set(null);
      }
    });
  }
}


