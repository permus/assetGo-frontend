import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAnalyticsService, DashboardData, AbcAnalysisItem } from '../../../core/services/inventory-analytics.service';
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

  activeTab = 'overview';
  selectedPeriod = '6months';

  // Loading and error states
  loading = false;
  error: string | null = null;

  // Real-time analytics data from API
  dashboardData: DashboardData | null = null;
  abcAnalysisData: AbcAnalysisItem[] = [];
  overviewData: DashboardData | null = null;

  // ABC Analysis summary
  abcSummary = {
    classA: { count: 0, value: 0, percentage: 0 },
    classB: { count: 0, value: 0, percentage: 0 },
    classC: { count: 0, value: 0, percentage: 0 }
  };

  // Sample data for different periods (for demo purposes)
  periodData = {
    '6months': {
      turnover: '2.4x',
      turnoverChange: '+12.5% from last period',
      carryingCost: 'AED 15,000',
      deadStockValue: 'AED 8,500',
      deadStockItems: '23 items',
      avgDays: '45 days'
    },
    '3months': {
      turnover: '2.1x',
      turnoverChange: '+8.2% from last period',
      carryingCost: 'AED 12,500',
      deadStockValue: 'AED 6,200',
      deadStockItems: '18 items',
      avgDays: '42 days'
    },
    '1month': {
      turnover: '1.8x',
      turnoverChange: '+5.1% from last period',
      carryingCost: 'AED 10,000',
      deadStockValue: 'AED 4,800',
      deadStockItems: '15 items',
      avgDays: '38 days'
    },
    '1year': {
      turnover: '2.8x',
      turnoverChange: '+18.7% from last period',
      carryingCost: 'AED 18,500',
      deadStockValue: 'AED 9,200',
      deadStockItems: '28 items',
      avgDays: '52 days'
    }
  };

  constructor(private analyticsService: InventoryAnalyticsService) { }

  ngOnInit(): void {
    this.loadAllAnalytics();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAllAnalytics(): void {
    this.loading = true;
    this.error = null;

    // Load all three analytics endpoints
    Promise.all([
      this.loadInventoryAnalytics(),
      this.loadAbcAnalysis(),
      this.loadDashboardOverview()
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
    console.log('Switched to tab:', tab);
  }

  onPeriodChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      this.selectedPeriod = target.value;
      console.log('Changed period to:', target.value);
    }
  }

  exportReport(): void {
    console.log('Exporting analytics report for period:', this.selectedPeriod);
    // Here you would implement the actual export functionality
  }

  getCurrentData() {
    return this.periodData[this.selectedPeriod as keyof typeof this.periodData];
  }

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
}
