import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecSummary } from '../../shared/ai-recommendations.interface';

@Component({
  selector: 'app-recs-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="recs-summary">
      <div class="summary-grid" *ngIf="summary; else loadingTemplate">
        <!-- Total Recommendations -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">Total Recommendations</span>
            <span class="card-value">{{ summary.totalRecommendations }}</span>
          </div>
        </div>

        <!-- High Priority -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-red">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">High Priority</span>
            <span class="card-value">{{ summary.highPriorityCount }}</span>
          </div>
        </div>

        <!-- Potential Savings -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
              <path d="M12 8V12L15 15"></path>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">Potential Savings</span>
            <span class="card-value">{{ summary.totalSavings | currency:'AED':'symbol':'1.2-2' }}</span>
          </div>
        </div>

        <!-- Investment Required -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-orange">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
              <path d="M12 6V12L16 14"></path>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">Investment Required</span>
            <span class="card-value">{{ summary.totalCost | currency:'AED':'symbol':'1.2-2' }}</span>
          </div>
        </div>

        <!-- ROI -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"></path>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">ROI</span>
            <span class="card-value">{{ summary.roi | number:'1.0-1' }}%</span>
          </div>
        </div>
      </div>

      <ng-template #loadingTemplate>
        <div class="summary-loading">
          <div class="loading-skeleton" *ngFor="let i of [1,2,3,4,5]">
            <div class="skeleton-icon"></div>
            <div class="skeleton-content">
              <div class="skeleton-line w-24"></div>
              <div class="skeleton-line w-16"></div>
            </div>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./recs-summary.component.scss']
})
export class RecsSummaryComponent {
  @Input() summary: RecSummary | null = null;
}
