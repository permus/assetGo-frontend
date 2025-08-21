import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAnalyticsService, DashboardData, AbcAnalysisItem, TurnoverData, StockAgingData, KpisData, CategoryTurnoverItem, MonthlyTurnoverPoint } from '../../../core/services/inventory-analytics.service';
import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  activeTab = 'turnover';
  selectedPeriod: '1m' | '3m' | '6m' | '1y' = '6m';

  // Config: monthly carrying cost rate (e.g., 2% of inventory value)
  private readonly carryingRateMonthly = 0.02;

  // Loading and error states
  loading = false;
  error: string | null = null;

  // Real-time analytics data from API
  dashboardData: DashboardData | null = null;
  abcAnalysisData: AbcAnalysisItem[] = [];
  overviewData: DashboardData | null = null;
  turnoverData: TurnoverData | null = null;
  agingData: StockAgingData | null = null;
  kpis: KpisData | null = null;
  categoryTurnover: CategoryTurnoverItem[] = [];
  monthlyTrend: MonthlyTurnoverPoint[] = [];
  hasTrendData = false;

  // Simple chart metrics for SVG rendering
  private readonly trendChartWidth = 400;
  private readonly trendChartHeight = 200;
  private readonly trendYPadding = 10; // top/bottom padding
  private readonly trendYScaleHeight = 180; // drawable height
  trendMax = 1;
  trendTicks: number[] = [1, 0.75, 0.5, 0.25, 0];

  // Chart.js instances
  private trendChart?: Chart;
  private agingChart?: Chart;

  // ABC Analysis summary
  abcSummary = {
    classA: { count: 0, value: 0, percentage: 0 },
    classB: { count: 0, value: 0, percentage: 0 },
    classC: { count: 0, value: 0, percentage: 0 }
  };


  constructor(private analyticsService: InventoryAnalyticsService) { }

  ngOnInit(): void {
    this.loadAllAnalytics();
    Chart.register(...registerables);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAllAnalytics(): void {
    this.loading = true;
    this.error = null;

    // Load analytics endpoints including KPIs
    Promise.all([
      this.loadAbcAnalysis(),
      this.loadDashboardOverview(),
      this.loadTurnover(this.selectedPeriod),
      this.loadStockAging(),
      this.loadTurnoverByCategory(this.selectedPeriod),
      this.loadMonthlyTrend(this.selectedPeriod),
      this.loadKpis(this.selectedPeriod)
    ]).finally(() => {
      this.loading = false;
    });
  }

  loadInventoryAnalytics(): Promise<void> {
    return new Promise((resolve) => {
      this.analyticsService.getInventoryAnalytics()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.dashboardData = response.data;
            }
            resolve();
          },
          error: (err) => {
            console.error('Error loading inventory analytics:', err);
            resolve();
          }
        });
    });
  }

  loadMonthlyTrend(period: '1m' | '3m' | '6m' | '1y'): Promise<void> {
    return new Promise((resolve) => {
      this.analyticsService.getMonthlyTurnoverTrend({ period })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.monthlyTrend = response.data.points || [];
              this.updateTrendMeta();
              setTimeout(() => this.renderTrendChart(), 0);
            }
            resolve();
          },
          error: (err) => {
            console.error('Error loading monthly turnover trend:', err);
            resolve();
          }
        });
    });
  }

  loadTurnoverByCategory(period: '1m' | '3m' | '6m' | '1y'): Promise<void> {
    return new Promise((resolve) => {
      this.analyticsService.getTurnoverByCategory({ period })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.categoryTurnover = response.data.categories || [];
            }
            resolve();
          },
          error: (err) => {
            console.error('Error loading turnover by category:', err);
            resolve();
          }
        });
    });
  }

  loadTurnover(period: '1m' | '3m' | '6m' | '1y'): Promise<void> {
    return new Promise((resolve) => {
      this.analyticsService.getTurnover({ period })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.turnoverData = response.data;
            }
            resolve();
          },
          error: (err) => {
            console.error('Error loading turnover:', err);
            resolve();
          }
        });
    });
  }

  loadKpis(period: '1m' | '3m' | '6m' | '1y'): Promise<void> {
    return new Promise((resolve) => {
      this.analyticsService.getKpis({ period, carrying_rate: 0.24, dead_days: 90 })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.kpis = response.data;
              // Prefer KPIs for the top cards when available
              this.turnoverData = {
                period: response.data.period,
                cogs: 0,
                avg_inventory_value: response.data.avg_inventory_value,
                turnover: response.data.turnover,
                days_on_hand: response.data.days_on_hand
              };
            }
            resolve();
          },
          error: (err) => {
            console.error('Error loading KPIs:', err);
            resolve();
          }
        });
    });
  }

  loadStockAging(): Promise<void> {
    return new Promise((resolve) => {
      this.analyticsService.getStockAging()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.agingData = response.data;
              setTimeout(() => this.renderAgingChart(), 0);
            }
            resolve();
          },
          error: (err) => {
            console.error('Error loading stock aging:', err);
            resolve();
          }
        });
    });
  }

  loadAbcAnalysis(): Promise<void> {
    return new Promise((resolve) => {
      this.analyticsService.getAbcAnalysis()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.abcAnalysisData = response.data;
              this.calculateAbcSummary();
            }
            resolve();
          },
          error: (err) => {
            console.error('Error loading ABC analysis:', err);
            resolve();
          }
        });
    });
  }

  loadDashboardOverview(): Promise<void> {
    return new Promise((resolve) => {
      this.analyticsService.getDashboardData()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.overviewData = response.data;
            }
            resolve();
          },
          error: (err) => {
            console.error('Error loading dashboard overview:', err);
            resolve();
          }
        });
    });
  }

  calculateAbcSummary(): void {
    if (!this.abcAnalysisData.length) return;

    const classA = this.abcAnalysisData.filter(item => item.class === 'A');
    const classB = this.abcAnalysisData.filter(item => item.class === 'B');
    const classC = this.abcAnalysisData.filter(item => item.class === 'C');

    const totalValue = this.abcAnalysisData.reduce((sum, item) => sum + item.value, 0);

    this.abcSummary.classA = {
      count: classA.length,
      value: classA.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? (classA.reduce((sum, item) => sum + item.value, 0) / totalValue) * 100 : 0
    };

    this.abcSummary.classB = {
      count: classB.length,
      value: classB.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? (classB.reduce((sum, item) => sum + item.value, 0) / totalValue) * 100 : 0
    };

    this.abcSummary.classC = {
      count: classC.length,
      value: classC.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? (classC.reduce((sum, item) => sum + item.value, 0) / totalValue) * 100 : 0
    };
  }

  onTabChange(tab: string): void {
    this.activeTab = tab;
    if (tab === 'turnover') {
      this.loadTurnover(this.selectedPeriod);
      this.loadTurnoverByCategory(this.selectedPeriod);
      this.loadMonthlyTrend(this.selectedPeriod).then(() => setTimeout(() => this.renderTrendChart(true as any), 0));
      this.loadKpis(this.selectedPeriod);
    }
    if (tab === 'aging') {
      this.loadStockAging();
    }
  }

  onPeriodChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      // map old select values to API period tokens if needed
      const map: any = { '1month': '1m', '3months': '3m', '6months': '6m', '1year': '1y' };
      const val = map[target.value] || target.value;
      this.selectedPeriod = val as any;
      this.loadTurnover(this.selectedPeriod);
      this.loadTurnoverByCategory(this.selectedPeriod);
      this.loadMonthlyTrend(this.selectedPeriod);
      this.loadKpis(this.selectedPeriod);
    }
  }

  exportReport(): void {
    console.log('Exporting analytics report for period:', this.selectedPeriod);
    // Here you would implement the actual export functionality
  }

  // Removed getCurrentData; now using live turnoverData

  refreshData(): void {
    this.loadAllAnalytics();
  }

  formatCurrency(amount: number): string {
    return `AED ${amount.toLocaleString()}`;
  }

  getAbcClassColor(abcClass: string): string {
    switch (abcClass) {
      case 'A': return 'bg-green-100 text-green-800';
      case 'B': return 'bg-yellow-100 text-yellow-800';
      case 'C': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  // Derived KPI helpers for top cards
  getCarryingCostMonthly(): number {
    if (this.kpis) return this.kpis.carrying_cost_monthly || 0;
    const total = this.dashboardData?.total_value ?? this.overviewData?.total_value ?? 0;
    return total * this.carryingRateMonthly; // fallback
  }

  getDeadStockValue(): number {
    if (this.kpis) return this.kpis.dead_stock_value || 0;
    if (!this.agingData?.slow_moving?.length) return 0; // fallback
    return this.agingData.slow_moving.reduce((sum, item) => sum + (item.value || 0), 0);
  }

  getDeadStockItems(): number {
    if (this.kpis) return this.kpis.dead_stock_items || 0;
    return this.agingData?.slow_moving?.length ?? 0; // fallback
  }

  // Helpers for category turnover chart
  getMaxCategoryTurnover(): number {
    if (!this.categoryTurnover || this.categoryTurnover.length === 0) return 1;
    const max = Math.max(...this.categoryTurnover.map(c => c.turnover || 0));
    return max > 0 ? max : 1;
  }

  // Trend helpers (computed in TS to keep template simple)
  private updateTrendMeta(): void {
    const max = Math.max(...(this.monthlyTrend || []).map(p => p.turnover || 0), 0);
    this.trendMax = this.niceCeil(max);
    this.hasTrendData = (this.monthlyTrend || []).some(p => (p.turnover || 0) > 0);
    const t1 = this.trendMax;
    const t2 = this.trendMax * 0.75;
    const t3 = this.trendMax * 0.5;
    const t4 = this.trendMax * 0.25;
    this.trendTicks = [t1, t2, t3, t4, 0];
  }

  private niceCeil(value: number): number {
    const thresholds = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50];
    if (value <= 0) return 1;
    for (const t of thresholds) if (value <= t) return t;
    return Math.pow(10, Math.ceil(Math.log10(value)));
  }

  formatTick(val: number): string {
    const decimals = this.trendMax < 1 ? 2 : 1;
    return Number(val).toFixed(decimals);
  }

  private renderTrendChart(force?: boolean): void {
    const labels = (this.monthlyTrend || []).map(p => p.label.split(' ')[0]);
    const data = (this.monthlyTrend || []).map(p => p.turnover || 0);

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Turnover',
          data,
          borderColor: '#0d9488',
          backgroundColor: 'rgba(13,148,136,0.2)',
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: '#0d9488'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: Math.max(1, this.trendMax),
            ticks: {
              callback: (value) => this.formatTick(Number(value))
            }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    };

    const canvas = document.getElementById('monthlyTrendCanvas') as HTMLCanvasElement | null;
    if (!canvas) return;

    if (this.trendChart && !force) {
      this.trendChart.data.labels = labels;
      this.trendChart.data.datasets[0].data = data as any;
      this.trendChart.update();
      return;
    }
    if (this.trendChart && force) {
      this.trendChart.destroy();
      this.trendChart = undefined;
    }

    this.trendChart = new Chart(canvas.getContext('2d')!, config);
  }

  private renderAgingChart(force?: boolean): void {
    const canvas = document.getElementById('agingBucketsCanvas') as HTMLCanvasElement | null;
    if (!canvas || !this.agingData) return;

    const labels = (this.agingData.buckets || []).map(b => b.label);
    const counts = (this.agingData.buckets || []).map(b => b.count);
    const values = (this.agingData.buckets || []).map(b => b.value);

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Items',
          data: counts,
          backgroundColor: 'rgba(59,130,246,0.3)',
          borderColor: '#3b82f6',
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const idx = ctx.dataIndex;
                const count = counts[idx] ?? 0;
                const val = values[idx] ?? 0;
                return ` ${count} items — AED ${val.toLocaleString()}`;
              }
            }
          }
        },
        scales: {
          y: { beginAtZero: true, ticks: { precision: 0 } },
          x: { grid: { display: false } }
        }
      }
    };

    if (this.agingChart && !force) {
      this.agingChart.data.labels = labels;
      this.agingChart.data.datasets[0].data = counts as any;
      this.agingChart.update();
      return;
    }
    if (this.agingChart && force) {
      this.agingChart.destroy();
      this.agingChart = undefined;
    }
    this.agingChart = new Chart(canvas.getContext('2d')!, config);
  }

  getTrendPath(): string {
    const n = this.monthlyTrend?.length || 0;
    if (n === 0) return '';
    const stepX = this.trendChartWidth / Math.max(1, n - 1);
    let d = '';
    for (let i = 0; i < n; i++) {
      const x = i * stepX;
      const y = this.trendY(this.monthlyTrend[i]);
      d += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    return d;
  }

  trendX(index: number): number {
    const n = this.monthlyTrend?.length || 0;
    const stepX = this.trendChartWidth / Math.max(1, n - 1);
    return index * stepX;
  }

  trendY(point: MonthlyTurnoverPoint): number {
    const ratio = Math.min(1, Math.max(0, (point?.turnover || 0) / this.trendMax));
    return this.trendChartHeight - (ratio * this.trendYScaleHeight) - this.trendYPadding;
  }
}
