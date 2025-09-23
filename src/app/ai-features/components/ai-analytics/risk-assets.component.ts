import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskAsset } from '../../shared/ai-analytics.interface';
import { AIAnalyticsService } from '../../shared/ai-analytics.service';

@Component({
  selector: 'app-risk-assets',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="risk-assets-card">
      <div class="card-header">
        <h3 class="card-title">High-Risk Assets</h3>
        <div class="asset-count">{{ riskAssets.length }} assets</div>
      </div>

      <div class="assets-list" *ngIf="riskAssets.length > 0; else emptyState">
        <div 
          *ngFor="let asset of riskAssets" 
          class="asset-item"
          [ngClass]="'risk-' + asset.riskLevel">
          <div class="asset-header">
            <div class="asset-name">{{ asset.name }}</div>
            <div class="risk-badge" [ngClass]="getRiskLevelColorClass(asset.riskLevel)">
              {{ asset.riskLevel | titlecase }}
            </div>
          </div>
          
          <div class="asset-reason">{{ asset.reason }}</div>
          
          <div class="asset-details">
            <div class="confidence-chip">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
                <path d="M12 16V12"></path>
                <path d="M12 8H12.01"></path>
              </svg>
              {{ asset.confidence }}%
            </div>
            
            <div class="cost-info" *ngIf="asset.estimatedCost">
              <span class="cost-label">Est. Cost:</span>
              <span class="cost-value">{{ asset.estimatedCost | currency:'AED':'symbol':'1.2-2' }}</span>
            </div>
          </div>

          <div class="asset-actions">
            <button 
              class="action-btn primary"
              (click)="onScheduleMaintenance(asset)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              Schedule Maintenance
            </button>
            
            <button 
              class="action-btn secondary"
              (click)="onCreateWorkOrder(asset)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              Create Work Order
            </button>
          </div>

          <div class="recommended-action">
            <strong>Recommended Action:</strong> {{ asset.recommendedAction }}
          </div>
        </div>
      </div>

      <ng-template #emptyState>
        <div class="empty-state">
          <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 12l2 2 4-4"></path>
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
          </svg>
          <h4 class="empty-title">No High-Risk Assets</h4>
          <p class="empty-description">
            Great! Your assets are currently in good condition with no high-risk items identified.
          </p>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./risk-assets.component.scss']
})
export class RiskAssetsComponent {
  @Input() riskAssets: RiskAsset[] = [];
  @Output() scheduleMaintenance = new EventEmitter<RiskAsset>();
  @Output() createWorkOrder = new EventEmitter<RiskAsset>();

  constructor(private analyticsService: AIAnalyticsService) {}

  getRiskLevelColorClass(riskLevel: string): string {
    return this.analyticsService.getRiskLevelColorClass(riskLevel);
  }

  onScheduleMaintenance(asset: RiskAsset) {
    this.scheduleMaintenance.emit(asset);
  }

  onCreateWorkOrder(asset: RiskAsset) {
    this.createWorkOrder.emit(asset);
  }
}
