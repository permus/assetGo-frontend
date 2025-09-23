import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostOptimization } from '../../shared/ai-analytics.interface';
import { AIAnalyticsService } from '../../shared/ai-analytics.service';

@Component({
  selector: 'app-cost-optimizations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cost-optimizations-card">
      <div class="card-header">
        <h3 class="card-title">Cost Optimizations</h3>
        <div class="optimizations-count">{{ costOptimizations.length }} opportunities</div>
      </div>

      <div class="optimizations-list" *ngIf="costOptimizations.length > 0; else emptyState">
        <div 
          *ngFor="let optimization of costOptimizations; let i = index" 
          class="optimization-item"
          [ngClass]="'category-' + (optimization.category || 'general')">
          <div class="optimization-header">
            <div class="optimization-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path [attr.d]="getCategoryIconPath(optimization.category)"></path>
              </svg>
            </div>
            <div class="optimization-title">{{ optimization.title }}</div>
            <div class="category-badge" *ngIf="optimization.category">
              {{ optimization.category | titlecase }}
            </div>
          </div>
          
          <div class="optimization-description">{{ optimization.description }}</div>
          
          <div class="optimization-metrics">
            <div class="metric-item">
              <div class="metric-label">Estimated Savings</div>
              <div class="metric-value savings">
                {{ optimization.estimatedSavings | currency:'AED':'symbol':'1.2-2' }}
              </div>
            </div>
            
            <div class="metric-item">
              <div class="metric-label">Payback Period</div>
              <div class="metric-value">{{ optimization.paybackPeriod }}</div>
            </div>
            
            <div class="metric-item">
              <div class="metric-label">Confidence</div>
              <div class="metric-value">
                <div class="confidence-chip">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
                    <path d="M12 16V12"></path>
                    <path d="M12 8H12.01"></path>
                  </svg>
                  {{ optimization.confidence }}%
                </div>
              </div>
            </div>
          </div>

          <div class="optimization-actions">
            <button 
              class="action-btn primary"
              (click)="onImplement(optimization)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
              </svg>
              Implement
            </button>
            
            <button 
              class="action-btn secondary"
              (click)="onViewDetails(optimization)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View Details
            </button>
          </div>
        </div>
      </div>

      <ng-template #emptyState>
        <div class="empty-state">
          <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
            <path d="M12 8V12L15 15"></path>
          </svg>
          <h4 class="empty-title">No Cost Optimizations</h4>
          <p class="empty-description">
            Generate analytics to discover AI-powered cost optimization opportunities.
          </p>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./cost-optimizations.component.scss']
})
export class CostOptimizationsComponent {
  @Input() costOptimizations: CostOptimization[] = [];
  @Output() implement = new EventEmitter<CostOptimization>();
  @Output() viewDetails = new EventEmitter<CostOptimization>();

  constructor(private analyticsService: AIAnalyticsService) {}

  getCategoryIconPath(category?: string): string {
    const iconMap: { [key: string]: string } = {
      'energy': 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
      'maintenance': 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
      'vendor': 'M1 3h15l4 6-4 6H1V3z',
      'lifecycle': 'M1 4v16l4-4 4 4 4-4 4 4V4H1z',
      'general': 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z'
    };
    
    const iconName = this.analyticsService.getCategoryIcon(category || '');
    return iconMap[iconName] || iconMap['general'];
  }

  onImplement(optimization: CostOptimization) {
    this.implement.emit(optimization);
  }

  onViewDetails(optimization: CostOptimization) {
    this.viewDetails.emit(optimization);
  }
}
