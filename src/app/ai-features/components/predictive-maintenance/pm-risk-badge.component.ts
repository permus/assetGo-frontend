import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskLevel } from '../../shared/predictive-maintenance.interface';

@Component({
  selector: 'app-pm-risk-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="risk-badge" [ngClass]="getRiskClass(riskLevel)">
      <svg class="risk-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
      <span class="risk-text">{{ getRiskLabel(riskLevel) }}</span>
    </span>
  `,
  styleUrls: ['./pm-risk-badge.component.scss']
})
export class PMRiskBadgeComponent {
  @Input() riskLevel: RiskLevel = 'medium';

  getRiskClass(riskLevel: RiskLevel): string {
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

  getRiskLabel(riskLevel: RiskLevel): string {
    switch (riskLevel.toLowerCase()) {
      case 'high':
        return 'High Risk';
      case 'medium':
        return 'Medium Risk';
      case 'low':
        return 'Low Risk';
      default:
        return 'Unknown Risk';
    }
  }
}
