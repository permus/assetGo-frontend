import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil, timer, switchMap } from 'rxjs';
import { DashboardService, DashboardData } from './dashboard.service';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  loading = false;
  data: DashboardData | null = null;
  @ViewChild('assetHealthChart') assetHealthChartRef!: ElementRef<HTMLCanvasElement>;
  private assetHealthChart: Chart | null = null;
  showAiInsights = false;
  
  // Archive analytics
  archiveAnalytics = {
    totalAssets: 0,
    activeAssets: 0,
    archivedAssets: 0,
    archivedByMonth: []
  };

  stats = [
    { title: 'Total Assets', value: '24', subtitle: 'Live data', icon: 'info', color: 'blue' },
    { title: 'Active Assets', value: '23', subtitle: '95.8% operational', icon: 'check', color: 'green' },
    { title: 'Critical Alerts', value: '1', subtitle: '1 require immediate attention', icon: 'warning', color: 'orange' },
    { title: 'Monthly Investment', value: '$0', subtitle: 'No data available', icon: 'dollar', color: 'purple' },
    { title: 'Asset Utilization', value: '--', subtitle: 'No data available', icon: 'trending', color: 'blue' },
    { title: 'Scheduled Maintenance', value: '0', subtitle: 'Next 30 days', icon: 'clock', color: 'teal' },
    { title: 'Active Work Orders', value: '2', subtitle: '1 high priority', icon: 'clipboard', color: 'yellow' },
    { title: 'Archived Assets', value: '0', subtitle: 'In archive', icon: 'shield', color: 'gray' }
  ];

  workOrders = [
    { title: 'Total Work Orders', value: 2 },
    { title: 'Scheduled This Week', value: 0 },
    { title: 'Overdue', value: 1 }
  ];

  constructor(private dashboardApi: DashboardService) {}

  ngOnInit() { this.fetch(); /* optional auto-refresh */ /* this.autoRefresh(); */ }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetch() {
    this.loading = true;
    this.dashboardApi.getDashboardData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.data = res?.data as any;
          this.hydrateStats();
          // ensure view has canvas before rendering
          setTimeout(() => this.renderAssetHealthChart(), 0);
        },
        error: () => { this.loading = false; }
      });
  }

  autoRefresh() {
    timer(60000, 60000).pipe(takeUntil(this.destroy$), switchMap(() => this.dashboardApi.getDashboardData()))
      .subscribe({ next: (res) => { this.data = res?.data as any; this.hydrateStats(); } });
  }

  private hydrateStats() {
    const d = this.data!;
    this.stats = [
      { title: 'Total Assets', value: String(d.total_assets ?? '--'), subtitle: d.total_assets != null ? 'Live data' : '-- No data available', icon: 'info', color: 'blue' },
      { title: 'Active Assets', value: String(d.active_assets ?? '--'), subtitle: d.active_assets != null ? 'Active assets' : '-- No data available', icon: 'check', color: 'green' },
      { title: 'Critical Alerts', value: String(d.critical_alerts ?? '--'), subtitle: d.critical_alerts != null ? 'Require attention' : '-- No data available', icon: 'warning', color: 'orange' },
      { title: 'Monthly Investment', value: `$${d.monthly_investment ?? 0}`, subtitle: 'Monthly spend', icon: 'dollar', color: 'purple' },
      { title: 'Asset Utilization', value: d.asset_utilization != null ? `${d.asset_utilization}%` : '--', subtitle: d.asset_utilization != null ? 'Utilization' : '-- No data available', icon: 'trending', color: 'blue' },
      { title: 'Scheduled Maintenance', value: String(d.scheduled_maintenance ?? 0), subtitle: 'Next 30 days', icon: 'clock', color: 'teal' },
      { title: 'Active Work Orders', value: String(d.active_work_orders ?? 0), subtitle: 'Open WOs', icon: 'clipboard', color: 'yellow' },
      { title: 'Archived Assets', value: String(d.archived_assets ?? 0), subtitle: `${d.archived_assets ?? 0} assets in archive`, icon: 'shield', color: 'gray' },
    ];
    this.workOrders = [
      { title: 'Total Work Orders', value: d.maintenance_insights.total_work_orders },
      { title: 'Scheduled This Week', value: d.maintenance_insights.scheduled_this_week },
      { title: 'Overdue', value: d.maintenance_insights.overdue },
    ];
  }

  private renderAssetHealthChart() {
    if (!this.data || !this.assetHealthChartRef) return;
    const ctx = this.assetHealthChartRef.nativeElement.getContext('2d');
    if (!ctx) return;
    // destroy existing
    if (this.assetHealthChart) {
      this.assetHealthChart.destroy();
      this.assetHealthChart = null;
    }
    const total = Math.max(0, Number(this.data.asset_health.total || 0));
    const active = Math.min(total, Math.max(0, Number(this.data.asset_health.active || 0)));
    const uncategorized = Math.min(total, Math.max(0, Number(this.data.asset_health.uncategorized || 0)));
    const others = Math.max(0, total - active - uncategorized);
    this.assetHealthChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Active', 'Uncategorized', 'Others'],
        datasets: [
          {
            data: [active, uncategorized, others],
            backgroundColor: ['#22c55e', '#3b82f6', '#e5e7eb'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '70%',
        rotation: -90,
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
      },
    });
  }

  // Helpers for template
  get activeAssets(): number { return Number(this.data?.asset_health.active ?? 0); }
  get totalAssets(): number { return Number(this.data?.asset_health.total ?? 0); }
  get activePercent(): number {
    const t = this.totalAssets; if (!t) return 0; return Math.round((this.activeAssets / t) * 100);
  }
}
