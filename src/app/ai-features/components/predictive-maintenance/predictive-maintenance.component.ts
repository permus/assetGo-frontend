import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { 
  Prediction, 
  Summary
} from '../../shared/predictive-maintenance.interface';
import { PredictiveMaintenanceService } from '../../shared/predictive-maintenance.service';
import { ToastService } from '../../../core/services/toast.service';
import { CreateWorkOrderModalComponent } from '../create-work-order-modal/create-work-order-modal.component';
import { ScheduleMaintenanceModalComponent } from '../schedule-maintenance-modal/schedule-maintenance-modal.component';

@Component({
  selector: 'app-predictive-maintenance',
  standalone: true,
  imports: [CommonModule, CreateWorkOrderModalComponent, ScheduleMaintenanceModalComponent],
  template: `
    <div class="predictive-maintenance">
      <!-- Header -->
      <div class="pm-header">
        <h1 class="pm-title">Predictive Maintenance</h1>
        <p class="pm-description">
          AI-powered failure prediction and maintenance optimization. 
          Get intelligent insights to prevent costly breakdowns and optimize your maintenance schedule.
        </p>
      </div>

      <!-- Actions -->
      <div class="pm-actions">
        <div class="action-buttons">
          <button 
            class="btn btn-secondary" 
            (click)="onRefresh()"
            [disabled]="isLoading">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            Refresh Analysis
          </button>

          <button 
            class="btn btn-primary" 
            (click)="onGenerate()"
            [disabled]="isLoading || isGenerating">
            <svg *ngIf="!isGenerating" class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            <svg *ngIf="isGenerating" class="btn-icon animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 11-6.219-8.56"></path>
            </svg>
            {{ isGenerating 
              ? (jobProgress > 0 
                ? 'Generating... ' + jobProgress + '%' 
                : 'Generating...') 
              : 'Generate Predictions' 
            }}
          </button>

          <button 
            class="btn btn-outline" 
            (click)="onExport()"
            [disabled]="isLoading || !hasData">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export Report
          </button>
        </div>

        <div class="action-info" *ngIf="lastUpdated">
          <div class="info-item">
            <svg class="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span class="info-text">Last updated: {{ formatDate(lastUpdated) }}</span>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="pm-summary" *ngIf="summary">
        <div class="summary-grid">
          <div class="summary-card">
            <div class="card-icon assets-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div class="card-content">
              <div class="card-value">{{ summary?.totalAssets || 0 }}</div>
              <div class="card-label">Assets Monitored</div>
            </div>
          </div>

          <div class="summary-card">
            <div class="card-icon risk-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div class="card-content">
              <div class="card-value risk-value">{{ summary?.highRiskCount || 0 }}</div>
              <div class="card-label">High-Risk Assets</div>
            </div>
          </div>

          <div class="summary-card">
            <div class="card-icon savings-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div class="card-content">
              <div class="card-value savings-value">{{ formatCurrency(summary?.totalSavings || 0) }}</div>
              <div class="card-label">Potential Savings</div>
            </div>
          </div>

          <div class="summary-card">
            <div class="card-icon confidence-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22,4 12,14.01 9,11.01"></polyline>
              </svg>
            </div>
            <div class="card-content">
              <div class="card-value confidence-value">{{ summary?.averageConfidence || 0 }}%</div>
              <div class="card-label">Avg Confidence</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Predictions List -->
      <div class="pm-predictions" *ngIf="!isLoading && predictions.length > 0">
        <h3 class="predictions-title">Predictions</h3>
        <div class="predictions-list">
          <div class="prediction-card" *ngFor="let prediction of predictions">
            <div class="prediction-header">
              <h4 class="asset-name">{{ prediction.assetName }}</h4>
              <span class="risk-badge" [ngClass]="getRiskClass(prediction.riskLevel)">
                {{ prediction.riskLevel | titlecase }} Risk
              </span>
            </div>
            <div class="prediction-details">
              <div class="detail-item">
                <span class="detail-label">Confidence:</span>
                <span class="detail-value">{{ prediction.confidence }}%</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Predicted Failure:</span>
                <span class="detail-value">{{ formatDate(prediction.predictedFailureDate) }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Action:</span>
                <span class="detail-value">{{ prediction.recommendedAction }}</span>
              </div>
            </div>
            <div class="prediction-actions">
              <button class="btn btn-sm btn-secondary" (click)="onScheduleMaintenance(prediction)">
                Schedule Maintenance
              </button>
              <button class="btn btn-sm btn-primary" (click)="onCreateWorkOrder(prediction)">
                Create Work Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="empty-state" *ngIf="!isLoading && predictions.length === 0">
        <div class="empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        </div>
        <h3 class="empty-title">No Predictions Yet</h3>
        <p class="empty-description">
          Generate AI-powered predictions to get started with predictive maintenance insights.
        </p>
        <button class="btn btn-primary" (click)="onGenerate()">
          <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          Generate Predictions
        </button>
      </div>

      <!-- Loading State -->
      <div class="loading-state" *ngIf="isLoading">
        <div class="loading-spinner">
          <svg class="animate-spin" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 11-6.219-8.56"></path>
          </svg>
        </div>
        <h3 class="loading-title">Loading Predictions</h3>
        <p class="loading-description">Fetching your predictive maintenance data...</p>
      </div>

      <!-- Error State -->
      <div class="error-state" *ngIf="errorMessage && !isLoading">
        <div class="error-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
        <h3 class="error-title">Something Went Wrong</h3>
        <p class="error-description">{{ errorMessage }}</p>
        <button class="btn btn-primary" (click)="onRefresh()">
          <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
            <path d="M3 21v-5h5"></path>
          </svg>
          Try Again
        </button>
      </div>

      <!-- Modals -->
      <app-create-work-order-modal
        [isOpen]="showCreateWorkOrderModal"
        [prediction]="selectedPrediction"
        (closeModal)="closeCreateWorkOrderModal()"
        (workOrderCreated)="onWorkOrderCreated($event)">
      </app-create-work-order-modal>

      <app-schedule-maintenance-modal
        [isOpen]="showScheduleMaintenanceModal"
        [prediction]="selectedPrediction"
        (closeModal)="closeScheduleMaintenanceModal()">
      </app-schedule-maintenance-modal>
    </div>
  `,
  styleUrls: ['./predictive-maintenance.component.scss']
})
export class PredictiveMaintenanceComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // State
  predictions: Prediction[] = [];
  summary: Summary | null = null;
  isLoading = false;
  isGenerating = false;
  errorMessage = '';
  lastUpdated: string | null = null;
  showCreateWorkOrderModal = false;
  showScheduleMaintenanceModal = false;
  selectedPrediction: Prediction | null = null;
  generationJobId: string | null = null;
  pollingInterval: any = null;
  jobProgress = 0;

  constructor(
    private pmService: PredictiveMaintenanceService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.stopPolling();
    this.destroy$.next();
    this.destroy$.complete();
  }

  get hasData(): boolean {
    return this.predictions.length > 0;
  }

  loadData() {
    this.isLoading = true;
    this.errorMessage = '';

    this.pmService.getPredictions()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.predictions = response.data.predictions;
            this.summary = response.data.summary;
            this.lastUpdated = response.data.summary.lastUpdated;
          } else {
            this.errorMessage = response.message || 'Failed to load predictions';
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading predictions:', error);
          this.errorMessage = 'Failed to load predictions. Please try again.';
          this.isLoading = false;
        }
      });
  }

  onRefresh() {
    this.loadData();
  }

  onGenerate() {
    this.isGenerating = true;
    this.errorMessage = '';
    this.jobProgress = 0;

    this.pmService.generatePredictions({ forceRefresh: true })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data?.job_id) {
            this.generationJobId = response.data.job_id;
            this.startPollingJobStatus();
          }
        },
        error: (error) => {
          console.error('Error starting generation:', error);
          this.errorMessage = 'Failed to start predictions generation.';
          this.isGenerating = false;
          this.toastService.error('Failed to start predictions generation.');
        }
      });
  }

  startPollingJobStatus() {
    this.pollingInterval = setInterval(() => {
      if (this.generationJobId) {
        this.pmService.getJobStatus(this.generationJobId)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response) => {
              if (response.data.status === 'completed') {
                this.stopPolling();
                this.isGenerating = false;
                this.jobProgress = 100;
                this.loadData();
                this.toastService.success('Predictions generated successfully!');
              } else if (response.data.status === 'failed') {
                this.stopPolling();
                this.isGenerating = false;
                this.errorMessage = response.data.error || 'Generation failed';
                this.toastService.error(this.errorMessage);
              } else if (response.data.status === 'processing') {
                this.jobProgress = response.data.progress || 0;
              }
            },
            error: () => {
              this.stopPolling();
              this.isGenerating = false;
            }
          });
      }
    }, 3000); // Poll every 3 seconds
  }

  stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
      this.generationJobId = null;
    }
  }

  onScheduleMaintenance(prediction: Prediction) {
    // Route to Create Work Order modal for now (scheduling functionality coming soon)
    this.onCreateWorkOrder(prediction);
  }

  onCreateWorkOrder(prediction: Prediction) {
    this.selectedPrediction = prediction;
    this.showCreateWorkOrderModal = true;
  }

  closeCreateWorkOrderModal() {
    this.showCreateWorkOrderModal = false;
    this.selectedPrediction = null;
  }

  closeScheduleMaintenanceModal() {
    this.showScheduleMaintenanceModal = false;
    this.selectedPrediction = null;
  }

  onWorkOrderCreated(workOrder: any) {
    this.toastService.success('Work order created successfully!');
    this.closeCreateWorkOrderModal();
  }

  onExport() {
    if (this.predictions.length === 0) {
      this.toastService.warning('No predictions to export. Please generate predictions first.');
      return;
    }

    this.pmService.exportToCsv()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob) => {
          const filename = `predictive_maintenance_${new Date().toISOString().split('T')[0]}.csv`;
          this.pmService.downloadCsv(blob, filename);
          this.toastService.success('Report exported successfully!');
        },
        error: (error) => {
          console.error('Error exporting data:', error);
          this.errorMessage = 'Failed to export data. Please try again.';
          this.toastService.error(this.errorMessage);
        }
      });
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  getRiskClass(riskLevel: string): string {
    switch (riskLevel.toLowerCase()) {
      case 'high':
        return 'risk-high';
      case 'medium':
        return 'risk-medium';
      case 'low':
        return 'risk-low';
      default:
        return 'risk-medium';
    }
  }
}