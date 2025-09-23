import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceInsight } from '../../shared/ai-analytics.interface';
import { AIAnalyticsService } from '../../shared/ai-analytics.service';

@Component({
  selector: 'app-performance-insights',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="insights-card">
      <div class="card-header">
        <h3 class="card-title">Performance Insights</h3>
        <div class="insights-count">{{ performanceInsights.length }} insights</div>
      </div>

      <div class="insights-list" *ngIf="performanceInsights.length > 0; else emptyState">
        <div 
          *ngFor="let insight of performanceInsights; let i = index" 
          class="insight-item"
          [ngClass]="'impact-' + insight.impact">
          <div class="insight-header">
            <div class="insight-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path [attr.d]="getCategoryIconPath(insight.category)"></path>
              </svg>
            </div>
            <div class="insight-title">{{ insight.title }}</div>
            <div class="impact-badge" [ngClass]="getImpactColorClass(insight.impact)">
              {{ insight.impact | titlecase }} Impact
            </div>
          </div>
          
          <div class="insight-description">{{ insight.description }}</div>
          
          <div class="insight-details">
            <div class="confidence-chip">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
                <path d="M12 16V12"></path>
                <path d="M12 8H12.01"></path>
              </svg>
              {{ insight.confidence }}%
            </div>
            
            <div class="category-badge" *ngIf="insight.category">
              {{ insight.category | titlecase }}
            </div>
          </div>

          <div class="insight-action">
            <div class="action-text">
              <strong>Recommended Action:</strong> {{ insight.action }}
            </div>
            <button 
              class="action-btn"
              (click)="onViewDetails(insight)">
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
            <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <h4 class="empty-title">No Performance Insights</h4>
          <p class="empty-description">
            Generate analytics to get AI-powered performance insights for your assets.
          </p>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./performance-insights.component.scss']
})
export class PerformanceInsightsComponent {
  @Input() performanceInsights: PerformanceInsight[] = [];
  @Output() viewDetails = new EventEmitter<PerformanceInsight>();

  constructor(private analyticsService: AIAnalyticsService) {}

  getImpactColorClass(impact: string): string {
    return this.analyticsService.getImpactColorClass(impact);
  }

  getCategoryIconPath(category?: string): string {
    const iconMap: { [key: string]: string } = {
      'utilization': 'M22 12h-4l-3 9L9 3l-3 9H2',
      'efficiency': 'M3 3v18h18M18 17V9M13 17V5M8 17v-3',
      'maintenance': 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
      'cost': 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
    };
    
    const iconName = this.analyticsService.getCategoryIcon(category || '');
    return iconMap[iconName] || iconMap['help-circle'];
  }

  onViewDetails(insight: PerformanceInsight) {
    this.viewDetails.emit(insight);
  }
}
