import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIAnalyticsService } from '../../shared/ai-analytics.service';

@Component({
  selector: 'app-health-score-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="health-score-card">
      <div class="card-header">
        <h3 class="card-title">Overall Asset Health Score</h3>
        <div class="score-label" [ngClass]="getHealthScoreColorClass(healthScore)">
          {{ getHealthScoreLabel(healthScore) }}
        </div>
      </div>

      <div class="score-display">
        <div class="score-circle" [ngClass]="getHealthScoreColorClass(healthScore)">
          <div class="score-value">{{ healthScore }}</div>
          <div class="score-percent">%</div>
        </div>
        
        <div class="score-details">
          <div class="detail-item">
            <span class="detail-label">Asset Age</span>
            <span class="detail-value">{{ avgAssetAge }} years</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Maintenance Status</span>
            <span class="detail-value">{{ maintenanceStatus }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Performance</span>
            <span class="detail-value">{{ performanceStatus }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Condition</span>
            <span class="detail-value">{{ conditionStatus }}</span>
          </div>
        </div>
      </div>

      <div class="progress-bar">
        <div 
          class="progress-fill" 
          [ngClass]="getHealthScoreColorClass(healthScore)"
          [style.width.%]="healthScore">
        </div>
      </div>

      <div class="health-description">
        <p *ngIf="healthScore >= 90" class="description-text">
          Your asset portfolio is in excellent condition with minimal maintenance needs and optimal performance.
        </p>
        <p *ngIf="healthScore >= 80 && healthScore < 90" class="description-text">
          Your assets are performing well with good maintenance practices. Consider minor optimizations.
        </p>
        <p *ngIf="healthScore >= 70 && healthScore < 80" class="description-text">
          Your assets are in fair condition. Some maintenance improvements and optimizations are recommended.
        </p>
        <p *ngIf="healthScore >= 60 && healthScore < 70" class="description-text">
          Your assets need attention. Immediate maintenance and performance improvements are recommended.
        </p>
        <p *ngIf="healthScore < 60" class="description-text">
          Critical attention required. Your assets need immediate maintenance and performance improvements.
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./health-score-card.component.scss']
})
export class HealthScoreCardComponent {
  @Input() healthScore: number = 0;
  @Input() avgAssetAge: number = 0;
  @Input() maintenanceStatus: string = 'Good';
  @Input() performanceStatus: string = 'Optimal';
  @Input() conditionStatus: string = 'Excellent';

  constructor(private analyticsService: AIAnalyticsService) {}

  getHealthScoreLabel(score: number): string {
    return this.analyticsService.getHealthScoreLabel(score);
  }

  getHealthScoreColorClass(score: number): string {
    return this.analyticsService.getHealthScoreColorClass(score);
  }
}
