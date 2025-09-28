import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KPICard, ReportCategory } from '../models/reports.models';

@Component({
  selector: 'app-reports-kpi-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="kpi-cards" *ngIf="kpis.length > 0">
      <div class="kpi-grid">
        <div 
          *ngFor="let kpi of kpis; trackBy: trackByKey" 
          class="kpi-card"
          [class]="'kpi-card--' + kpi.color">
          
          <div class="kpi-card__header">
            <div class="kpi-card__icon">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2">
                <ng-container [ngSwitch]="kpi.icon">
                  <!-- Package icon -->
                  <g *ngSwitchCase="'package'">
                    <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </g>
                  
                  <!-- Dollar sign icon -->
                  <g *ngSwitchCase="'dollar-sign'">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </g>
                  
                  <!-- Trending up icon -->
                  <g *ngSwitchCase="'trending-up'">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </g>
                  
                  <!-- Wrench icon -->
                  <g *ngSwitchCase="'wrench'">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </g>
                  
                  <!-- Check circle icon -->
                  <g *ngSwitchCase="'check-circle'">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </g>
                  
                  <!-- Clock icon -->
                  <g *ngSwitchCase="'clock'">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </g>
                  
                  <!-- Users icon -->
                  <g *ngSwitchCase="'users'">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </g>
                  
                  <!-- Alert triangle icon -->
                  <g *ngSwitchCase="'alert-triangle'">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </g>
                  
                  <!-- Activity icon -->
                  <g *ngSwitchCase="'activity'">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </g>
                  
                  <!-- Default icon -->
                  <g *ngSwitchDefault>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </g>
                </ng-container>
              </svg>
            </div>
            <div class="kpi-card__trend" *ngIf="kpi.trend">
              <svg 
                class="trend-icon"
                [class.trend-up]="kpi.trend.direction === 'up'"
                [class.trend-down]="kpi.trend.direction === 'down'"
                [class.trend-neutral]="kpi.trend.direction === 'neutral'"
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2">
                <polyline 
                  *ngIf="kpi.trend.direction === 'up'" 
                  points="23 6 13.5 15.5 8.5 10.5 1 18">
                </polyline>
                <polyline 
                  *ngIf="kpi.trend.direction === 'down'" 
                  points="23 18 13.5 8.5 8.5 13.5 1 6">
                </polyline>
                <line 
                  *ngIf="kpi.trend.direction === 'neutral'" 
                  x1="1" y1="12" x2="23" y2="12">
                </line>
              </svg>
              <span class="trend-value">{{ kpi.trend.value }}%</span>
            </div>
          </div>
          
          <div class="kpi-card__content">
            <div class="kpi-card__value">
              {{ formatValue(kpi.value, kpi.format) }}
            </div>
            <div class="kpi-card__label">
              {{ kpi.label }}
            </div>
            <div class="kpi-card__period" *ngIf="kpi.trend">
              vs {{ kpi.trend.period }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./reports-kpi-cards.component.scss']
})
export class ReportsKpiCardsComponent {
  @Input() kpis: KPICard[] = [];
  @Input() category: ReportCategory = 'assets';

  /**
   * Track by function for ngFor
   */
  trackByKey(index: number, kpi: KPICard): string {
    return kpi.key;
  }

  /**
   * Format value based on format type
   */
  formatValue(value: number | string, format: string): string {
    if (typeof value === 'string') {
      return value;
    }

    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-AE', {
          style: 'currency',
          currency: 'AED',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(value);
      
      case 'percentage':
        return `${value.toFixed(1)}%`;
      
      case 'number':
        return new Intl.NumberFormat('en-AE').format(value);
      
      default:
        return value.toString();
    }
  }
}
