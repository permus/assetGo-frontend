import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderService, WorkOrderAnalytics, WorkOrderStatistics } from '../../services/work-order.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-work-order-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-order-analytics.component.html',
  styleUrls: ['./work-order-analytics.component.scss']
})
export class WorkOrderAnalyticsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // Loading and error states
  loading = false;
  error: string | null = null;

  // Analytics data
  analyticsData: WorkOrderAnalytics | null = null;
  statisticsData: WorkOrderStatistics | null = null;

  // Chart data for visualization
  statusChartData: any[] = [];
  priorityChartData: any[] = [];
  monthlyTrendData: any[] = [];
  technicianData: any[] = [];

  constructor(private workOrderService: WorkOrderService) { }

  ngOnInit(): void {
    this.loadAnalytics();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAnalytics(): void {
    this.loading = true;
    this.error = null;

    // Load both analytics and statistics
    Promise.all([
      this.loadWorkOrderAnalytics(),
      this.loadWorkOrderStatistics()
    ]).finally(() => {
      this.loading = false;
    });
  }

  loadWorkOrderAnalytics(): Promise<void> {
    return new Promise((resolve) => {
      this.workOrderService.getWorkOrderAnalytics()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.analyticsData = response;
            this.prepareChartData();
            resolve();
          },
          error: (err) => {
            console.error('Error loading work order analytics:', err);
            this.error = 'Failed to load analytics data. Please try again.';
            resolve();
          }
        });
    });
  }

  loadWorkOrderStatistics(): Promise<void> {
    return new Promise((resolve) => {
      this.workOrderService.getWorkOrderStatistics()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.statisticsData = response;
            resolve();
          },
          error: (err) => {
            console.error('Error loading work order statistics:', err);
            resolve();
          }
        });
    });
  }

  prepareChartData(): void {
    if (!this.analyticsData) return;

    // Safely prepare status distribution chart data with null checks
    this.statusChartData = [
      { 
        name: 'Completed', 
        value: this.analyticsData.status_distribution?.completed || 0, 
        color: '#10b981' 
      },
      { 
        name: 'Open', 
        value: this.analyticsData.status_distribution?.open || 0, 
        color: '#ef4444' 
      },
      { 
        name: 'In Progress', 
        value: this.analyticsData.status_distribution?.in_progress || 0, 
        color: '#3b82f6' 
      },
      { 
        name: 'On Hold', 
        value: this.analyticsData.status_distribution?.on_hold || 0, 
        color: '#f59e0b' 
      },
      { 
        name: 'Cancelled', 
        value: this.analyticsData.status_distribution?.cancelled || 0, 
        color: '#6b7280' 
      }
    ];

    // Safely prepare priority distribution chart data with null checks
    this.priorityChartData = [
      { 
        name: 'Critical', 
        value: this.analyticsData.priority_distribution?.critical || 0, 
        color: '#dc2626' 
      },
      { 
        name: 'High', 
        value: this.analyticsData.priority_distribution?.high || 0, 
        color: '#f59e0b' 
      },
      { 
        name: 'Medium', 
        value: this.analyticsData.priority_distribution?.medium || 0, 
        color: '#3b82f6' 
      },
      { 
        name: 'Low', 
        value: this.analyticsData.priority_distribution?.low || 0, 
        color: '#10b981' 
      }
    ];

    // Safely prepare monthly trends data with null checks
    if (this.analyticsData.monthly_trends?.months && this.analyticsData.monthly_trends.months.length > 0) {
      this.monthlyTrendData = this.analyticsData.monthly_trends.months.map((month, index) => ({
        month,
        created: this.analyticsData!.monthly_trends.created[index] || 0,
        completed: this.analyticsData!.monthly_trends.completed[index] || 0
      }));
    } else {
      this.monthlyTrendData = [];
    }

    // Safely prepare technician performance data with null checks
    if (this.analyticsData.technician_performance && this.analyticsData.technician_performance.length > 0) {
      this.technicianData = this.analyticsData.technician_performance.map(tech => ({
        name: tech.name || 'Unknown',
        score: tech.performance_score || 0,
        completed: tech.completed_orders || 0,
        avgTime: tech.average_resolution_time || 0
      }));
    } else {
      this.technicianData = [];
    }
  }

  refreshData(): void {
    this.loadAnalytics();
  }

  getInsightIcon(type: string): string {
    switch (type) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'info': return 'ℹ';
      case 'optimization': return '💡';
      default: return 'ℹ';
    }
  }

  getInsightColor(type: string): string {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      case 'optimization': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  }

  formatDays(days: number): string {
    if (!days || days <= 0) return '0 days';
    if (days === 1) return '1 day';
    return `${days} days`;
  }

  formatPercentage(value: number): string {
    if (!value || isNaN(value)) return '0.0%';
    return `${value.toFixed(1)}%`;
  }

  getStatusPercentage(value: number, total: number): number {
    if (!total || total <= 0) return 0;
    return (value / total) * 100;
  }

  // Safe getters for template usage
  get hasStatusDistribution(): boolean {
    return !!(this.analyticsData?.status_distribution);
  }

  get hasPriorityDistribution(): boolean {
    return !!(this.analyticsData?.priority_distribution);
  }

  get hasMonthlyTrends(): boolean {
    return !!(this.analyticsData?.monthly_trends?.months && this.analyticsData.monthly_trends.months.length > 0);
  }

  get hasTechnicianData(): boolean {
    return !!(this.analyticsData?.technician_performance && this.analyticsData.technician_performance.length > 0);
  }

  get hasInsights(): boolean {
    return !!(this.analyticsData?.insights && this.analyticsData.insights.length > 0);
  }

  get totalStatusCount(): number {
    return this.analyticsData?.status_distribution?.total || 0;
  }

  get performanceMetrics(): any {
    return this.analyticsData?.performance_metrics || {};
  }
}
