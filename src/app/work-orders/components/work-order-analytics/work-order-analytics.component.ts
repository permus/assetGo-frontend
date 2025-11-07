import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderService, WorkOrderAnalytics, WorkOrderStatistics } from '../../services/work-order.service';
import { Subject, takeUntil } from 'rxjs';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';
import { FormatService } from '../../../core/services/format.service';

@Component({
  selector: 'app-work-order-analytics',
  standalone: true,
  imports: [CommonModule, NumberFormatPipe],
  templateUrl: './work-order-analytics.component.html',
  styleUrls: ['./work-order-analytics.component.scss']
})
export class WorkOrderAnalyticsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private formatService = inject(FormatService);

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
        value: this.analyticsData.status_distribution?.['completed'] || 0,
        color: '#10b981'
      },
      {
        name: 'Open',
        value: this.analyticsData.status_distribution?.['open'] || 0,
        color: '#ef4444'
      },
      {
        name: 'In Progress',
        value: this.analyticsData.status_distribution?.['in-progress'] || 0,
        color: '#3b82f6'
      },
      {
        name: 'On Hold',
        value: this.analyticsData.status_distribution?.['on-hold'] || 0,
        color: '#f59e0b'
      },
      {
        name: 'Cancelled',
        value: this.analyticsData.status_distribution?.['cancelled'] || 0,
        color: '#6b7280'
      }
    ];

    // Safely prepare priority distribution chart data with null checks
    this.priorityChartData = [
      {
        name: 'Critical',
        value: this.analyticsData.priority_distribution?.['critical'] || 0,
        color: '#dc2626'
      },
      {
        name: 'High',
        value: this.analyticsData.priority_distribution?.['high'] || 0,
        color: '#f59e0b'
      },
      {
        name: 'Medium',
        value: this.analyticsData.priority_distribution?.['medium'] || 0,
        color: '#3b82f6'
      },
      {
        name: 'Low',
        value: this.analyticsData.priority_distribution?.['low'] || 0,
        color: '#10b981'
      },
      {
        name: 'PPM',
        value: this.analyticsData.priority_distribution?.['ppm'] || 0,
        color: '#8b5cf6'
      }
    ];

    // Safely prepare monthly trends data with null checks
    if (this.analyticsData.monthly_performance_trend && this.analyticsData.monthly_performance_trend.length > 0) {
      this.monthlyTrendData = this.analyticsData.monthly_performance_trend.map((trend) => ({
        month: `${trend.year}-${trend.month.toString().padStart(2, '0')}`,
        created: trend.created_count || 0,
        completed: trend.completed_count || 0
      }));
    } else {
      this.monthlyTrendData = [];
    }

    // Safely prepare technician performance data with null checks
    if (this.analyticsData.top_technician_performance && this.analyticsData.top_technician_performance.length > 0) {
      this.technicianData = this.analyticsData.top_technician_performance.map(tech => ({
        name: tech.assigned_to ? `${tech.assigned_to.first_name} ${tech.assigned_to.last_name}` : 'Unknown',
        score: tech.completed_count || 0, // Use completed count as the primary metric
        completed: tech.completed_count || 0,
        avgTime: tech.avg_resolution_days || 0
      }));
    } else {
      this.technicianData = [];
    }
  }

  refreshData(): void {
    this.loadAnalytics();
  }



  formatDays(days: number): string {
    if (!days || days === 0) return '0 days';
    
    // Handle negative values (completed ahead of schedule)
    if (days < 0) {
      const absDays = Math.abs(days);
      if (absDays === 1) return '1 day ahead';
      return `${this.formatService.formatNumber(absDays, 1)} days ahead`;
    }
    
    // Handle positive values (completed after schedule)
    if (days === 1) return '1 day';
    return `${this.formatService.formatNumber(days, 1)} days`;
  }

  formatPercentage(value: number): string {
    if (!value || isNaN(value)) return '0.0%';
    return `${this.formatService.formatNumber(value, 1)}%`;
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
    return !!(this.analyticsData?.monthly_performance_trend && this.analyticsData.monthly_performance_trend.length > 0);
  }

  get hasTechnicianData(): boolean {
    return !!(this.analyticsData?.top_technician_performance && this.analyticsData.top_technician_performance.length > 0);
  }



  get totalStatusCount(): number {
    if (!this.analyticsData?.status_distribution) return 0;
    return Object.values(this.analyticsData.status_distribution).reduce((sum, count) => sum + count, 0);
  }

  getProgressBarWidth(completedCount: number): number {
    if (!this.technicianData || this.technicianData.length === 0) return 0;
    
    // Find the maximum completed count to calculate relative percentage
    const maxCompleted = Math.max(...this.technicianData.map(tech => tech.completed));
    if (maxCompleted === 0) return 0;
    
    return (completedCount / maxCompleted) * 100;
  }
}
