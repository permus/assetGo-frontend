import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { 
  AnalyticsSnapshot, 
  RiskAsset, 
  PerformanceInsight, 
  CostOptimization,
  ScheduleSettings
} from '../../shared/ai-analytics.interface';
import { AIAnalyticsService } from '../../shared/ai-analytics.service';
import { AnalyticsHeaderComponent } from './analytics-header.component';
import { HealthScoreCardComponent } from './health-score-card.component';
import { RiskAssetsComponent } from './risk-assets.component';
import { PerformanceInsightsComponent } from './performance-insights.component';
import { CostOptimizationsComponent } from './cost-optimizations.component';

@Component({
  selector: 'app-ai-analytics',
  standalone: true,
  imports: [
    CommonModule,
    AnalyticsHeaderComponent,
    HealthScoreCardComponent,
    RiskAssetsComponent,
    PerformanceInsightsComponent,
    CostOptimizationsComponent
  ],
  template: `
    <div class="ai-analytics-page">
      <!-- Header -->
      <app-analytics-header
        [lastUpdated]="latest?.createdAt"
        [isLoading]="isLoading"
        [isGenerating]="isGenerating"
        [hasData]="!!latest"
        (refresh)="onRefresh()"
        (generate)="onGenerate()"
        (export)="onExport()"
        (schedule)="onSchedule()">
      </app-analytics-header>

      <!-- Main Content -->
      <div class="analytics-content" *ngIf="latest; else loadingState">
        <div class="content-grid">
          <!-- Left Column -->
          <div class="left-column">
            <!-- Health Score -->
            <app-health-score-card
              [healthScore]="latest.healthScore"
              [avgAssetAge]="avgAssetAge"
              [maintenanceStatus]="maintenanceStatus"
              [performanceStatus]="performanceStatus"
              [conditionStatus]="conditionStatus">
            </app-health-score-card>

            <!-- Performance Insights -->
            <app-performance-insights
              [performanceInsights]="latest.performanceInsights"
              (viewDetails)="onViewInsightDetails($event)">
            </app-performance-insights>
          </div>

          <!-- Right Column -->
          <div class="right-column">
            <!-- Risk Assets -->
            <app-risk-assets
              [riskAssets]="latest.riskAssets"
              (scheduleMaintenance)="onScheduleMaintenance($event)"
              (createWorkOrder)="onCreateWorkOrder($event)">
            </app-risk-assets>

            <!-- Cost Optimizations -->
            <app-cost-optimizations
              [costOptimizations]="latest.costOptimizations"
              (implement)="onImplementOptimization($event)"
              (viewDetails)="onViewOptimizationDetails($event)">
            </app-cost-optimizations>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <ng-template #loadingState>
        <div class="loading-state" *ngIf="isLoading">
          <div class="loading-skeleton">
            <div class="skeleton-header">
              <div class="skeleton-icon"></div>
              <div class="skeleton-content">
                <div class="skeleton-line w-3-4"></div>
                <div class="skeleton-line w-1-2"></div>
              </div>
            </div>
            <div class="skeleton-body">
              <div class="skeleton-line w-full"></div>
              <div class="skeleton-line w-2-3"></div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="!isLoading && !latest">
          <svg class="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"></path>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <h2 class="empty-title">No Analytics Data</h2>
          <p class="empty-description">
            Generate your first AI-powered analytics report to get comprehensive insights into your asset portfolio.
          </p>
          <button class="generate-button" (click)="onGenerate()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            Generate Analytics
          </button>
        </div>
      </ng-template>

      <!-- Error State -->
      <div class="error-state" *ngIf="errorMessage">
        <svg class="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <h3 class="error-title">Error Loading Analytics</h3>
        <p class="error-description">{{ errorMessage }}</p>
        <button class="retry-button" (click)="onRefresh()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
            <path d="M3 21v-5h5"></path>
          </svg>
          Try Again
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./ai-analytics.component.scss']
})
export class AIAnalyticsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // State
  latest: AnalyticsSnapshot | null = null;
  isLoading = false;
  isGenerating = false;
  errorMessage: string | null = null;

  // Computed properties
  get avgAssetAge(): number {
    return 5.2; // This would come from the analytics data
  }

  get maintenanceStatus(): string {
    if (!this.latest) return 'Unknown';
    const maintenanceAssets = this.latest.riskAssets.filter(asset => 
      asset.recommendedAction.toLowerCase().includes('maintenance')
    ).length;
    
    if (maintenanceAssets === 0) return 'Excellent';
    if (maintenanceAssets <= 2) return 'Good';
    if (maintenanceAssets <= 5) return 'Fair';
    return 'Poor';
  }

  get performanceStatus(): string {
    if (!this.latest) return 'Unknown';
    const avgConfidence = this.latest.performanceInsights.reduce((sum, insight) => 
      sum + insight.confidence, 0) / this.latest.performanceInsights.length;
    
    if (avgConfidence >= 90) return 'Excellent';
    if (avgConfidence >= 80) return 'Good';
    if (avgConfidence >= 70) return 'Fair';
    return 'Poor';
  }

  get conditionStatus(): string {
    if (!this.latest) return 'Unknown';
    const healthScore = this.latest.healthScore;
    
    if (healthScore >= 90) return 'Excellent';
    if (healthScore >= 80) return 'Good';
    if (healthScore >= 70) return 'Fair';
    if (healthScore >= 60) return 'Poor';
    return 'Critical';
  }

  constructor(private analyticsService: AIAnalyticsService) {}

  ngOnInit() {
    this.loadAnalytics();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAnalytics() {
    this.isLoading = true;
    this.errorMessage = null;

    this.analyticsService.getAnalytics()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.latest = response.data.latest;
          } else {
            this.errorMessage = response.error || 'Failed to load analytics';
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading analytics:', error);
          this.errorMessage = 'Failed to load analytics. Please try again.';
          this.isLoading = false;
        }
      });
  }

  onRefresh() {
    this.loadAnalytics();
  }

  onGenerate() {
    this.isGenerating = true;
    this.errorMessage = null;

    this.analyticsService.generateAnalytics()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.latest = response.data.latest;
          } else {
            this.errorMessage = response.error || 'Failed to generate analytics';
          }
          this.isGenerating = false;
        },
        error: (error) => {
          console.error('Error generating analytics:', error);
          this.errorMessage = 'Failed to generate analytics. Please try again.';
          this.isGenerating = false;
        }
      });
  }

  onExport() {
    if (!this.latest) {
      alert('No analytics data to export. Please generate analytics first.');
      return;
    }

    this.analyticsService.exportAnalytics()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob) => {
          const filename = `ai_analytics_${new Date().toISOString().split('T')[0]}.csv`;
          this.analyticsService.downloadCsv(blob, filename);
        },
        error: (error) => {
          console.error('Error exporting analytics:', error);
          this.errorMessage = 'Failed to export analytics. Please try again.';
        }
      });
  }

  onSchedule() {
    // TODO: Implement schedule modal
    alert('Schedule Updates feature coming soon!');
  }

  onScheduleMaintenance(asset: RiskAsset) {
    // TODO: Implement schedule maintenance
    alert(`Schedule maintenance for: ${asset.name}`);
  }

  onCreateWorkOrder(asset: RiskAsset) {
    // TODO: Implement create work order
    alert(`Create work order for: ${asset.name}`);
  }

  onViewInsightDetails(insight: PerformanceInsight) {
    // TODO: Implement view insight details
    alert(`View details for: ${insight.title}`);
  }

  onImplementOptimization(optimization: CostOptimization) {
    // TODO: Implement optimization
    alert(`Implement optimization: ${optimization.title}`);
  }

  onViewOptimizationDetails(optimization: CostOptimization) {
    // TODO: Implement view optimization details
    alert(`View details for: ${optimization.title}`);
  }
}
