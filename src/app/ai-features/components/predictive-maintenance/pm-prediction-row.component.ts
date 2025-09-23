import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prediction } from '../../shared/predictive-maintenance.interface';
import { PMRiskBadgeComponent } from './pm-risk-badge.component';

@Component({
  selector: 'app-pm-prediction-row',
  standalone: true,
  imports: [CommonModule, PMRiskBadgeComponent],
  template: `
    <div class="prediction-row">
      <div class="row-main">
        <!-- Asset Info -->
        <div class="asset-info">
          <div class="asset-header">
            <h3 class="asset-name">{{ prediction.assetName }}</h3>
            <app-pm-risk-badge [riskLevel]="prediction.riskLevel"></app-pm-risk-badge>
          </div>
          <div class="asset-meta">
            <span class="asset-id">Asset ID: {{ prediction.assetId }}</span>
            <span class="confidence-chip" [ngClass]="getConfidenceClass(prediction.confidence)">
              {{ prediction.confidence }}% confidence
            </span>
          </div>
        </div>

        <!-- Prediction Details -->
        <div class="prediction-details">
          <div class="detail-item">
            <div class="detail-label">Predicted Failure</div>
            <div class="detail-value">{{ formatDate(prediction.predictedFailureDate) }}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Recommended Action</div>
            <div class="detail-value action-text">{{ prediction.recommendedAction }}</div>
          </div>
        </div>

        <!-- Cost Analysis -->
        <div class="cost-analysis">
          <div class="cost-item">
            <div class="cost-label">Failure Cost</div>
            <div class="cost-value failure-cost">{{ formatCurrency(prediction.estimatedCost) }}</div>
          </div>
          <div class="cost-item">
            <div class="cost-label">Preventive Cost</div>
            <div class="cost-value preventive-cost">{{ formatCurrency(prediction.preventiveCost) }}</div>
          </div>
          <div class="cost-item savings">
            <div class="cost-label">Potential Savings</div>
            <div class="cost-value savings-value">{{ formatCurrency(prediction.savings) }}</div>
            <div class="roi-badge">ROI: {{ calculateROI(prediction.estimatedCost, prediction.preventiveCost) }}%</div>
          </div>
        </div>

        <!-- Expandable Factors -->
        <div class="factors-section" *ngIf="prediction.factors && prediction.factors.length > 0">
          <button 
            class="factors-toggle" 
            (click)="toggleFactors()"
            [attr.aria-expanded]="showFactors">
            <svg class="toggle-icon" [ngClass]="{ 'rotated': showFactors }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
            <span class="toggle-text">Risk Factors ({{ prediction.factors.length }})</span>
          </button>
          
          <div class="factors-content" *ngIf="showFactors">
            <div class="factors-list">
              <div class="factor-item" *ngFor="let factor of prediction.factors">
                <svg class="factor-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                </svg>
                <span class="factor-text">{{ factor }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <div class="timeline-section" *ngIf="prediction.timeline && (prediction.timeline.immediate || prediction.timeline.shortTerm || prediction.timeline.longTerm)">
          <button 
            class="timeline-toggle" 
            (click)="toggleTimeline()"
            [attr.aria-expanded]="showTimeline">
            <svg class="toggle-icon" [ngClass]="{ 'rotated': showTimeline }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
            <span class="toggle-text">Action Timeline</span>
          </button>
          
          <div class="timeline-content" *ngIf="showTimeline">
            <div class="timeline-list">
              <div class="timeline-group" *ngIf="prediction.timeline?.immediate && prediction.timeline.immediate.length > 0">
                <div class="timeline-header">
                  <span class="timeline-label immediate">Immediate</span>
                </div>
                <div class="timeline-items">
                  <div class="timeline-item" *ngFor="let action of prediction.timeline.immediate">
                    <span class="timeline-text">{{ action }}</span>
                  </div>
                </div>
              </div>
              
              <div class="timeline-group" *ngIf="prediction.timeline?.shortTerm && prediction.timeline.shortTerm.length > 0">
                <div class="timeline-header">
                  <span class="timeline-label short-term">Short Term</span>
                </div>
                <div class="timeline-items">
                  <div class="timeline-item" *ngFor="let action of prediction.timeline.shortTerm">
                    <span class="timeline-text">{{ action }}</span>
                  </div>
                </div>
              </div>
              
              <div class="timeline-group" *ngIf="prediction.timeline?.longTerm && prediction.timeline.longTerm.length > 0">
                <div class="timeline-header">
                  <span class="timeline-label long-term">Long Term</span>
                </div>
                <div class="timeline-items">
                  <div class="timeline-item" *ngFor="let action of prediction.timeline.longTerm">
                    <span class="timeline-text">{{ action }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="row-actions">
        <button 
          class="action-btn schedule-btn" 
          (click)="onScheduleMaintenance()"
          title="Schedule Maintenance">
          <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span class="btn-text">Schedule Maintenance</span>
        </button>

        <button 
          class="action-btn work-order-btn" 
          (click)="onCreateWorkOrder()"
          title="Create Work Order">
          <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
          <span class="btn-text">Create Work Order</span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./pm-prediction-row.component.scss']
})
export class PMPredictionRowComponent {
  @Input() prediction!: Prediction;
  @Output() scheduleMaintenance = new EventEmitter<Prediction>();
  @Output() createWorkOrder = new EventEmitter<Prediction>();

  showFactors = false;
  showTimeline = false;

  toggleFactors() {
    this.showFactors = !this.showFactors;
  }

  toggleTimeline() {
    this.showTimeline = !this.showTimeline;
  }

  onScheduleMaintenance() {
    this.scheduleMaintenance.emit(this.prediction);
  }

  onCreateWorkOrder() {
    this.createWorkOrder.emit(this.prediction);
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

  getConfidenceClass(confidence: number): string {
    if (confidence >= 80) return 'confidence-high';
    if (confidence >= 60) return 'confidence-medium';
    return 'confidence-low';
  }

  calculateROI(estimatedCost: number, preventiveCost: number): number {
    if (preventiveCost <= 0) return 0;
    return Math.round((estimatedCost - preventiveCost) / preventiveCost * 100);
  }
}
