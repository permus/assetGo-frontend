import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../maintenance.service';
import { DatePipe } from '@angular/common';
import { CurrencyService } from '../../core/services/currency.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'history-page.component.html',
  styleUrls: ['history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {
  loading = false;
  error: string | null = null;
  all: any[] = [];
  filtered: any[] = [];
  search = '';
  filter: 'all' | 'preventive' | 'predictive' | 'condition_based' = 'all';
  stats: {
    totalActivities: number;
    preventive: number;
    preventivePercentage: number;
    totalCost: number;
    avgDuration: number;
  } = {
    totalActivities: 0,
    preventive: 0,
    preventivePercentage: 0,
    totalCost: 0,
    avgDuration: 0,
  };

  private destroy$ = new Subject<void>();
  private currencyService = inject(CurrencyService);
  private cdr = inject(ChangeDetectorRef);
  currentCurrency = 'USD';

  constructor(private api: MaintenanceService) {}

  ngOnInit(): void {
    // Subscribe to currency changes for instant updates
    this.currencyService.get$().pipe(
      takeUntil(this.destroy$)
    ).subscribe(currency => {
      this.currentCurrency = currency;
      this.cdr.markForCheck();
    });

    this.fetch();
    this.fetchStats();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetch() {
    this.loading = true;
    this.api.listSchedules({ status: 'completed', per_page: 100 }).subscribe({
      next: (res) => {
        const items = Array.isArray(res?.data) ? res.data : (Array.isArray(res?.data?.schedules) ? res.data.schedules : []);
        // map schedules to simple history rows (completed items only)
        this.all = items.filter((s: any) => s.status === 'completed');
        this.apply();
        this.loading = false;
      },
      error: () => { this.loading = false; this.error = 'Failed to load history'; }
    });
  }

  fetchStats() {
    this.api.getHistoryStats().subscribe({
      next: (res) => {
        if (res?.success && res?.data) {
          this.stats = {
            totalActivities: res.data.totalActivities || 0,
            preventive: res.data.preventive || 0,
            preventivePercentage: res.data.preventivePercentage || 0,
            totalCost: res.data.totalCost || 0,
            avgDuration: res.data.avgDuration || 0,
          };
        }
      },
      error: () => {
        // Keep default values if stats fetch fails
      }
    });
  }

  formatCurrency(value: number): string {
    return this.currencyService.format(value);
  }

  formatDuration(value: number): string {
    return `${value.toFixed(1)}h`;
  }

  apply() {
    const base = this.search ? this.all.filter(h => String(h.maintenance_plan_id).includes(this.search)) : this.all;
    this.filtered = this.filter === 'all' ? base : base.filter(h => (h.plan_type || 'preventive') === this.filter);
  }
}


