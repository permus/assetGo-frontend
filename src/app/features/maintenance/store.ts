import { Injectable, computed, signal } from '@angular/core';
import { MaintenanceService } from './maintenance.service';
import { MaintenancePlan } from './models';

@Injectable({ providedIn: 'root' })
export class MaintenanceStore {
  plans = signal<MaintenancePlan[]>([]);
  meta = signal<any>({});
  loading = signal<boolean>(false);

  totalPlans = computed(() => this.plans().length);
  activePlans = computed(() => this.plans().filter(p => p.is_active).length);
  scheduledItems = computed(() => this.plans().reduce((sum, p) => sum + (p.scheduled_count || 0), 0));
  criticalPlans = computed(() => this.plans().filter(p => p.priority_id === 1).length);

  constructor(private api: MaintenanceService) {}

  fetchPlans() {
    this.loading.set(true);
    this.api.listPlans({ include: 'meta', per_page: 20 }).subscribe({
      next: (res) => {
        const list = Array.isArray(res?.data?.plans) ? res.data.plans : [];
        this.plans.set(list);
        if (res?.meta) this.meta.set(res.meta);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
}


