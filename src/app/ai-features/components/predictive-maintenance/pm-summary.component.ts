import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Summary } from '../../shared/predictive-maintenance.interface';

@Component({
  selector: 'app-pm-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pm-summary">
      <div class="summary-grid">
        <!-- Assets Monitored Card -->
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
            <div class="card-description">Total assets under analysis</div>
          </div>
        </div>

        <!-- High-Risk Assets Card -->
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
            <div class="card-description">Require immediate attention</div>
          </div>
        </div>

        <!-- Potential Savings Card -->
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
            <div class="card-description">Estimated cost avoidance</div>
          </div>
        </div>

        <!-- Average Confidence Card -->
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
            <div class="card-description">AI prediction accuracy</div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div class="summary-loading" *ngIf="isLoading">
        <div class="loading-card" *ngFor="let i of [1,2,3,4]">
          <div class="loading-icon"></div>
          <div class="loading-content">
            <div class="loading-value"></div>
            <div class="loading-label"></div>
            <div class="loading-description"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pm-summary.component.scss']
})
export class PMSummaryComponent {
  @Input() summary: Summary | null = null;
  @Input() isLoading = false;

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
}
