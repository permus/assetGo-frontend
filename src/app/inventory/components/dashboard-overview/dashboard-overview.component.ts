import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAnalyticsService, DashboardData, AbcAnalysisItem, TurnoverData, StockAgingData } from '../../../core/services/inventory-analytics.service';
import { CurrencyService } from '../../../core/services/currency.service';

@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {
  dashboardData: DashboardData = {
    total_value: 0,
    total_parts: 0,
    low_stock_count: 0,
    out_of_stock_count: 0
  };

  loading = true;
  error: string | null = null;

  // Added analytics snippets for overview cards
  turnoverData: TurnoverData | null = null;
  agingData: StockAgingData | null = null;
  slowThresholdDays = 90;

  // ABC summary for overview
  abcSummary = {
    classA: { count: 0, value: 0, percentage: 0 },
    classB: { count: 0, value: 0, percentage: 0 },
    classC: { count: 0, value: 0, percentage: 0 },
    totalValue: 0
  };

  constructor(private analyticsService: InventoryAnalyticsService, private currencyService: CurrencyService) { }

  getCurrencySymbol(): string {
    return this.currencyService.getSymbol();
  }

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadAbcSummary();
    this.loadTurnover();
    this.loadStockAging();
  }

  loadDashboardData(): void {
    this.loading = true;
    this.error = null;

    this.analyticsService.getDashboardData().subscribe({
      next: (response) => {
        if (response.success) {
          this.dashboardData = response.data;
        } else {
          this.error = 'Failed to load dashboard data';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading dashboard data:', err);
        this.error = 'Error loading dashboard data. Please try again.';
        this.loading = false;
      }
    });
  }

  refreshData(): void {
    this.loadDashboardData();
    this.loadAbcSummary();
    this.loadTurnover();
    this.loadStockAging();
  }

  private loadAbcSummary(): void {
    this.analyticsService.getAbcAnalysis().subscribe({
      next: (response) => {
        if (response.success) {
          this.calculateAbcSummary(response.data);
        }
      },
      error: (err) => {
        console.error('Error loading ABC analysis for overview:', err);
      }
    });
  }

  private loadTurnover(): void {
    // Use last 6 months, annualized to times/year
    this.analyticsService.getTurnover({ period: '6m' }).subscribe({
      next: (res) => {
        if (res.success) {
          this.turnoverData = res.data;
          // Also mirror into dashboardData for direct binding if desired
          this.dashboardData = {
            ...this.dashboardData,
            average_turnover: res.data.turnover
          } as DashboardData;
        }
      },
      error: (err) => {
        console.error('Error loading turnover for overview:', err);
      }
    });
  }

  private loadStockAging(): void {
    this.analyticsService.getStockAging().subscribe({
      next: (res) => {
        if (res.success) {
          this.agingData = res.data;
          // Determine slow threshold from last bucket definition if available
          const buckets = res.data.buckets || [];
          const last = buckets[buckets.length - 1];
          if (last && typeof last.days_from === 'number') {
            this.slowThresholdDays = last.days_from;
          }
          this.dashboardData = {
            ...this.dashboardData,
            slow_moving_count: res.data.slow_moving?.length || 0
          } as DashboardData;
        }
      },
      error: (err) => {
        console.error('Error loading stock aging for overview:', err);
      }
    });
  }

  private calculateAbcSummary(items: AbcAnalysisItem[]): void {
    const classA = items.filter(i => i.class === 'A');
    const classB = items.filter(i => i.class === 'B');
    const classC = items.filter(i => i.class === 'C');

    const totalValue = items.reduce((sum, i) => sum + (i.value || 0), 0);
    const valueA = classA.reduce((sum, i) => sum + (i.value || 0), 0);
    const valueB = classB.reduce((sum, i) => sum + (i.value || 0), 0);
    const valueC = classC.reduce((sum, i) => sum + (i.value || 0), 0);

    this.abcSummary = {
      classA: {
        count: classA.length,
        value: valueA,
        percentage: totalValue > 0 ? (valueA / totalValue) * 100 : 0
      },
      classB: {
        count: classB.length,
        value: valueB,
        percentage: totalValue > 0 ? (valueB / totalValue) * 100 : 0
      },
      classC: {
        count: classC.length,
        value: valueC,
        percentage: totalValue > 0 ? (valueC / totalValue) * 100 : 0
      },
      totalValue
    };
  }

  formatCurrency(amount: number): string {
    return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}
