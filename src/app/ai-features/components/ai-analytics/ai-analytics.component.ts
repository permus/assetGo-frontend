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
import { ScheduleSettingsModalComponent } from './schedule-settings-modal.component';
import { CreateWorkOrderModalComponent } from '../create-work-order-modal/create-work-order-modal.component';
import { ScheduleMaintenanceModalComponent } from '../schedule-maintenance-modal/schedule-maintenance-modal.component';

@Component({
  selector: 'app-ai-analytics',
  standalone: true,
  imports: [
    CommonModule,
    AnalyticsHeaderComponent,
    HealthScoreCardComponent,
    RiskAssetsComponent,
    PerformanceInsightsComponent,
    CostOptimizationsComponent,
    ScheduleSettingsModalComponent,
    CreateWorkOrderModalComponent,
    ScheduleMaintenanceModalComponent
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

      <!-- Error Banner -->
      <div class="error-banner" *ngIf="errorMessage">
        <div class="error-banner-content">
          <div class="error-banner-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div class="error-banner-text">
            <p class="error-banner-message">{{ errorMessage }}</p>
          </div>
          <div class="error-banner-actions">
            <button class="error-banner-dismiss" (click)="errorMessage = null" title="Dismiss">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Schedule Settings Modal -->
      <app-schedule-settings-modal
        [isOpen]="showScheduleModal"
        (closeModal)="closeScheduleModal()"
        (settingsUpdated)="onScheduleUpdated()">
      </app-schedule-settings-modal>

      <!-- Create Work Order Modal -->
      <app-create-work-order-modal
        [isOpen]="showWorkOrderModal"
        [prediction]="selectedAssetForWorkOrder"
        (closeModal)="closeWorkOrderModal()"
        (workOrderCreated)="onWorkOrderCreated()">
      </app-create-work-order-modal>

      <!-- Schedule Maintenance Modal -->
      <app-schedule-maintenance-modal
        [isOpen]="showScheduleMaintenanceModal"
        [prediction]="selectedAssetForMaintenance"
        (closeModal)="closeScheduleMaintenanceModal()">
      </app-schedule-maintenance-modal>

      <!-- Insight Details Modal -->
      <div *ngIf="showInsightDetailsModal && selectedInsight"
           class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style="background-color: #0000008f"
           (click)="closeInsightDetailsModal()">
        <div class="bg-white rounded-lg shadow-xl max-w-lg w-full"
             (click)="$event.stopPropagation()">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-gray-900">Performance Insight Details</h2>
            </div>
            <button
              (click)="closeInsightDetailsModal()"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="p-6">
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ selectedInsight.title }}</h3>
                <p class="text-gray-600">{{ selectedInsight.description }}</p>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <div class="text-sm text-gray-500">Impact</div>
                  <div class="text-xl font-bold" [ngClass]="{
                    'text-red-600': selectedInsight.impact === 'high',
                    'text-yellow-600': selectedInsight.impact === 'medium',
                    'text-green-600': selectedInsight.impact === 'low'
                  }">
                    {{ selectedInsight.impact | titlecase }}
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">Confidence</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedInsight.confidence }}%</div>
                </div>
                <div *ngIf="selectedInsight.category">
                  <div class="text-sm text-gray-500">Category</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedInsight.category | titlecase }}</div>
                </div>
              </div>

              <div class="pt-4 border-t border-gray-200">
                <h4 class="text-sm font-semibold text-gray-900 mb-2">Recommended Action</h4>
                <p class="text-gray-600">{{ selectedInsight.action }}</p>
              </div>

              <div class="pt-4 border-t border-gray-200">
                <h4 class="text-sm font-semibold text-gray-900 mb-2">Benefits</h4>
                <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Improved operational performance</li>
                  <li>Better resource allocation</li>
                  <li>Enhanced efficiency metrics</li>
                </ul>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-200">
              <button
                type="button"
                (click)="closeInsightDetailsModal()"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Optimization Details Modal -->
      <div *ngIf="showOptimizationDetailsModal && selectedOptimization"
           class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style="background-color: #0000008f"
           (click)="closeOptimizationDetailsModal()">
        <div class="bg-white rounded-lg shadow-xl max-w-lg w-full"
             (click)="$event.stopPropagation()">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-gray-900">Cost Optimization Details</h2>
            </div>
            <button
              (click)="closeOptimizationDetailsModal()"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="p-6">
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ selectedOptimization.title }}</h3>
                <p class="text-gray-600">{{ selectedOptimization.description }}</p>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <div class="text-sm text-gray-500">Estimated Savings</div>
                  <div class="text-xl font-bold text-green-600">
                    {{ selectedOptimization.estimatedSavings | currency:'AED':'symbol':'1.2-2' }}
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">Payback Period</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedOptimization.paybackPeriod }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">Confidence</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedOptimization.confidence }}%</div>
                </div>
                <div *ngIf="selectedOptimization.category">
                  <div class="text-sm text-gray-500">Category</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedOptimization.category | titlecase }}</div>
                </div>
              </div>

              <div class="pt-4 border-t border-gray-200">
                <h4 class="text-sm font-semibold text-gray-900 mb-2">Benefits</h4>
                <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Significant cost reduction over time</li>
                  <li>Improved operational efficiency</li>
                  <li>Better resource utilization</li>
                </ul>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-200">
              <button
                type="button"
                (click)="closeOptimizationDetailsModal()"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Close
              </button>
              <button
                type="button"
                (click)="onImplementOptimization(selectedOptimization); closeOptimizationDetailsModal()"
                class="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
                Implement
              </button>
            </div>
          </div>
        </div>
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
  showScheduleModal = false;
  showWorkOrderModal = false;
  showScheduleMaintenanceModal = false;
  showOptimizationDetailsModal = false;
  showInsightDetailsModal = false;
  selectedAssetForWorkOrder: any = null;
  selectedAssetForMaintenance: any = null;
  selectedOptimization: CostOptimization | null = null;
  selectedInsight: PerformanceInsight | null = null;

  // Computed properties
  get avgAssetAge(): number {
    if (!this.latest) return 0;
    // Extract from analytics snapshot if available, otherwise default to 0
    return this.latest.avgAssetAge ?? 0;
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
      this.errorMessage = 'No analytics data to export. Please generate analytics first.';
      return;
    }

    this.errorMessage = null;
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
    this.showScheduleModal = true;
  }

  closeScheduleModal() {
    this.showScheduleModal = false;
  }

  onScheduleUpdated() {
    // Refresh analytics after schedule update if needed
    // For now, just close the modal
    this.closeScheduleModal();
  }

  onScheduleMaintenance(asset: RiskAsset) {
    // Convert RiskAsset to prediction-like format for schedule maintenance modal
    this.selectedAssetForMaintenance = {
      assetId: asset.id,
      assetName: asset.name,
      riskLevel: asset.riskLevel,
      recommendedAction: asset.recommendedAction,
      confidence: asset.confidence,
      savings: asset.estimatedCost ? asset.estimatedCost - (asset.preventiveCost || 0) : 0
    };
    this.showScheduleMaintenanceModal = true;
  }

  onCreateWorkOrder(asset: RiskAsset) {
    // Convert RiskAsset to prediction-like format for work order modal
    this.selectedAssetForWorkOrder = {
      assetId: asset.id,
      assetName: asset.name,
      riskLevel: asset.riskLevel,
      recommendedAction: asset.recommendedAction,
      confidence: asset.confidence,
      savings: asset.estimatedCost ? asset.estimatedCost - (asset.preventiveCost || 0) : 0
    };
    this.showWorkOrderModal = true;
  }

  closeWorkOrderModal() {
    this.showWorkOrderModal = false;
    this.selectedAssetForWorkOrder = null;
  }

  closeScheduleMaintenanceModal() {
    this.showScheduleMaintenanceModal = false;
    this.selectedAssetForMaintenance = null;
  }

  onWorkOrderCreated() {
    this.closeWorkOrderModal();
  }

  onViewInsightDetails(insight: PerformanceInsight) {
    this.selectedInsight = insight;
    this.showInsightDetailsModal = true;
  }

  closeInsightDetailsModal() {
    this.showInsightDetailsModal = false;
    this.selectedInsight = null;
  }

  onImplementOptimization(optimization: CostOptimization) {
    // Convert CostOptimization to work order format
    this.selectedAssetForWorkOrder = {
      assetId: null, // Cost optimizations are general, not asset-specific
      assetName: 'Cost Optimization',
      riskLevel: 'medium',
      recommendedAction: `${optimization.title}: ${optimization.description}`,
      confidence: optimization.confidence,
      savings: optimization.estimatedSavings
    };
    this.showWorkOrderModal = true;
  }

  onViewOptimizationDetails(optimization: CostOptimization) {
    this.selectedOptimization = optimization;
    this.showOptimizationDetailsModal = true;
  }

  closeOptimizationDetailsModal() {
    this.showOptimizationDetailsModal = false;
    this.selectedOptimization = null;
  }
}
