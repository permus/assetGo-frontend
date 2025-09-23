import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recommendation } from '../../shared/ai-recommendations.interface';
import { AIRecommendationsService } from '../../shared/ai-recommendations.service';

@Component({
  selector: 'app-rec-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rec-card" [ngClass]="{'implemented': recommendation.implemented}">
      <!-- Card Header -->
      <div class="card-header">
        <div class="header-left">
          <div class="type-icon" [ngClass]="'type-' + recommendation.type">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path [attr.d]="getTypeIconPath(recommendation.type)"></path>
            </svg>
          </div>
          <div class="title-section">
            <h3 class="card-title">{{ recommendation.title }}</h3>
            <div class="type-badge">{{ getTypeDisplayName(recommendation.type) }}</div>
          </div>
        </div>
        <div class="header-right">
          <div class="badges">
            <span class="priority-badge" [ngClass]="getPriorityColorClass(recommendation.priority)">
              {{ recommendation.priority | titlecase }}
            </span>
            <span class="impact-badge" [ngClass]="getImpactColorClass(recommendation.impact)">
              {{ recommendation.impact | titlecase }} Impact
            </span>
            <span class="confidence-chip">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
                <path d="M12 16V12"></path>
                <path d="M12 8H12.01"></path>
              </svg>
              {{ recommendation.confidence }}%
            </span>
          </div>
        </div>
      </div>

      <!-- Card Content -->
      <div class="card-content">
        <p class="card-description">{{ recommendation.description }}</p>

        <!-- Cost Analysis -->
        <div class="cost-analysis" *ngIf="recommendation.estimatedSavings || recommendation.implementationCost">
          <div class="cost-item" *ngIf="recommendation.estimatedSavings">
            <span class="cost-label">Estimated Savings</span>
            <span class="cost-value savings">{{ recommendation.estimatedSavings | currency:'AED':'symbol':'1.2-2' }}</span>
          </div>
          <div class="cost-item" *ngIf="recommendation.implementationCost">
            <span class="cost-label">Implementation Cost</span>
            <span class="cost-value cost">{{ recommendation.implementationCost | currency:'AED':'symbol':'1.2-2' }}</span>
          </div>
          <div class="cost-item" *ngIf="netBenefit">
            <span class="cost-label">Net Benefit</span>
            <span class="cost-value" [ngClass]="netBenefit >= 0 ? 'savings' : 'cost'">
              {{ netBenefit | currency:'AED':'symbol':'1.2-2' }}
            </span>
          </div>
          <div class="cost-item" *ngIf="roi">
            <span class="cost-label">ROI</span>
            <span class="cost-value" [ngClass]="roi >= 0 ? 'savings' : 'cost'">
              {{ roi | number:'1.0-1' }}%
            </span>
          </div>
          <div class="cost-item" *ngIf="paybackPeriod">
            <span class="cost-label">Payback Period</span>
            <span class="cost-value">{{ paybackPeriod }}</span>
          </div>
        </div>

        <!-- Timeline -->
        <div class="timeline">
          <svg class="timeline-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <span class="timeline-text">Timeline: {{ recommendation.timeline }}</span>
        </div>

        <!-- Actions List -->
        <div class="actions-list" *ngIf="recommendation.actions?.length">
          <h4 class="actions-title">Recommended Actions:</h4>
          <ul class="actions-items">
            <li *ngFor="let action of recommendation.actions" class="action-item">
              <svg class="action-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              {{ action }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Card Actions -->
      <div class="card-actions">
        <button
          class="btn btn-secondary"
          [ngClass]="{'implemented': recommendation.implemented}"
          (click)="onToggleImplementation()"
          [disabled]="isToggling">
          <svg *ngIf="!recommendation.implemented" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"></path>
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
          </svg>
          <svg *ngIf="recommendation.implemented" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"></path>
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
          </svg>
          <span>{{ recommendation.implemented ? 'Implemented' : 'Mark as Implemented' }}</span>
        </button>

        <button
          class="btn btn-primary"
          (click)="onCreateActionPlan()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
          <span>Create Action Plan</span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./rec-card.component.scss']
})
export class RecCardComponent {
  @Input() recommendation!: Recommendation;
  @Output() toggleImplementation = new EventEmitter<{ id: string; implemented: boolean }>();
  @Output() createActionPlan = new EventEmitter<Recommendation>();

  isToggling = false;

  constructor(private recService: AIRecommendationsService) {}

  get netBenefit(): number | null {
    const result = this.recService.computeROI(
      this.recommendation.estimatedSavings,
      this.recommendation.implementationCost
    );
    return result.net;
  }

  get roi(): number | null {
    const result = this.recService.computeROI(
      this.recommendation.estimatedSavings,
      this.recommendation.implementationCost
    );
    return result.roi;
  }

  get paybackPeriod(): string | null {
    return this.recService.computePaybackPeriod(
      this.recommendation.estimatedSavings,
      this.recommendation.implementationCost
    );
  }

  onToggleImplementation() {
    this.isToggling = true;
    this.toggleImplementation.emit({
      id: this.recommendation.id,
      implemented: !this.recommendation.implemented
    });
    
    // Reset toggling state after a short delay
    setTimeout(() => {
      this.isToggling = false;
    }, 1000);
  }

  onCreateActionPlan() {
    this.createActionPlan.emit(this.recommendation);
  }

  getTypeDisplayName(type: string): string {
    return this.recService.getTypeDisplayName(type);
  }

  getTypeIconPath(type: string): string {
    const iconMap: { [key: string]: string } = {
      'dollar-sign': 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      'wrench': 'M22 7l-7.5-4.5L7 7l5.5 3.5L22 7zM7 7v10l5.5 3.5L18 17V7l-5.5 3.5L7 7z',
      'trending-up': 'M23 6l-9.5 9.5-5-5L1 18',
      'shield-check': 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4'
    };
    
    const iconName = this.recService.getTypeIcon(type);
    return iconMap[iconName] || iconMap['help-circle'];
  }

  getPriorityColorClass(priority: string): string {
    return this.recService.getPriorityColorClass(priority);
  }

  getImpactColorClass(impact: string): string {
    return this.recService.getImpactColorClass(impact);
  }
}
