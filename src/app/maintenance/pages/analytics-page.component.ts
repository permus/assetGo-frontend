import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceService } from '../maintenance.service';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from '../../core/services/currency.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss']
})
export class AnalyticsPageComponent implements OnInit, OnDestroy {
  loading = false;
  error: string | null = null;
  // simple series placeholders
  trendLabels: string[] = [];
  trendData: number[] = [];
  typeBreakdown: { name: string; value: number; normalizedValue: number }[] = [];
  monthlyCostsLabels: string[] = [];
  monthlyCostsData: number[] = [];
  monthlyCostsActual: number[] = []; // Store actual cost values for tooltips
  stats: {
    totalMaintenance: number;
    preventiveCount: number;
    preventiveRatio: number;
    avgCost: number;
    avgDuration: number;
  } = {
    totalMaintenance: 0,
    preventiveCount: 0,
    preventiveRatio: 0,
    avgCost: 0,
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
    this.api.listSchedules({ per_page: 500 }).subscribe({
      next: (res) => {
        const items: any[] = Array.isArray(res?.data) ? res.data : (Array.isArray(res?.data?.schedules) ? res.data.schedules : []);
        // trend by month count (due_date month)
        const mapCounts: Record<string, number> = {};
        const mapCosts: Record<string, number> = {};
        
        for (const s of items) {
          const d = s.due_date ? new Date(s.due_date) : null;
          const key = d && !isNaN(d.getTime()) ? `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}` : 'unknown';
          mapCounts[key] = (mapCounts[key] || 0) + 1;
          
          // Calculate cost from assets' purchase_price
          let scheduleCost = 0;
          if (s.assets && Array.isArray(s.assets)) {
            scheduleCost = s.assets.reduce((sum: number, asset: any) => {
              return sum + (parseFloat(asset.purchase_price) || 0);
            }, 0);
          }
          mapCosts[key] = (mapCosts[key] || 0) + scheduleCost;
        }
        
        this.trendLabels = Object.keys(mapCounts).sort();
        this.trendData = this.trendLabels.map(k => mapCounts[k]);

        this.monthlyCostsLabels = Object.keys(mapCosts).sort();
        // Store actual cost values for tooltips
        this.monthlyCostsActual = this.monthlyCostsLabels.map(k => mapCosts[k] || 0);
        // Normalize costs for chart display (max height = 100%)
        const maxCost = Math.max(...this.monthlyCostsActual, 1);
        this.monthlyCostsData = this.monthlyCostsActual.map(cost => {
          return maxCost > 0 ? (cost / maxCost) * 100 : 0;
        });

        // Type breakdown based on plan_type
        const breakdown: Record<string, number> = {};
        for (const s of items) {
          // Try to get plan_type from schedule, plan object, or fallback to 'preventive'
          const planType = s.plan_type || s.plan?.plan_type || 'preventive';
          breakdown[planType] = (breakdown[planType] || 0) + 1;
        }
        
        // Format type names for display
        const typeDisplayNames: Record<string, string> = {
          'preventive': 'Preventive',
          'predictive': 'Predictive',
          'condition_based': 'Condition Based',
          'corrective': 'Corrective',
          'emergency': 'Emergency',
        };
        
        const typeBreakdownEntries = Object.entries(breakdown)
          .filter(([_, value]) => value > 0) // Only show types with data
          .map(([name, value]) => ({ 
            name: typeDisplayNames[name] || name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' '), 
            value 
          }))
          .sort((a, b) => b.value - a.value); // Sort by value descending
        
        // Normalize type breakdown values for chart (max height = 100%)
        if (typeBreakdownEntries.length > 0) {
          const maxTypeValue = Math.max(...typeBreakdownEntries.map(t => t.value), 1);
          this.typeBreakdown = typeBreakdownEntries.map(t => ({
            ...t,
            normalizedValue: maxTypeValue > 0 ? (t.value / maxTypeValue) * 100 : 0
          }));
        } else {
          // If no data, show empty array
          this.typeBreakdown = [];
        }

        this.loading = false;
      },
      error: () => { this.loading = false; this.error = 'Failed to load analytics'; }
    });
  }

  fetchStats() {
    this.api.getAnalyticsStats().subscribe({
      next: (res) => {
        if (res?.success && res?.data) {
          this.stats = {
            totalMaintenance: res.data.totalMaintenance || 0,
            preventiveCount: res.data.preventiveCount || 0,
            preventiveRatio: res.data.preventiveRatio || 0,
            avgCost: res.data.avgCost || 0,
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

  formatPercentage(value: number): string {
    return `${value.toFixed(1)}%`;
  }

  get totalCount(): number {
    return this.stats.totalMaintenance;
  }
}


