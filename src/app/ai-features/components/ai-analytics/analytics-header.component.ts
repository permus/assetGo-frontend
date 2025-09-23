import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="analytics-header">
      <!-- Main Header -->
      <div class="header-content">
        <div class="header-main">
          <div class="header-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"></path>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <div class="header-text">
            <h1 class="header-title">AI Asset Analytics</h1>
            <p class="header-description">
              AI-powered insights and comprehensive analytics for your asset portfolio. 
              Get intelligent recommendations to optimize performance and reduce costs.
            </p>
          </div>
        </div>
        
        <!-- Last Updated -->
        <div class="last-updated" *ngIf="lastUpdated">
          <svg class="update-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <span>Last updated {{ lastUpdated | date:'short' }}</span>
        </div>
      </div>

      <!-- Action Bar -->
      <div class="action-bar">
        <div class="action-buttons">
          <button
            class="btn btn-secondary"
            (click)="onRefresh()"
            [disabled]="isLoading">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            <span class="btn-text">Refresh Analysis</span>
          </button>

          <button
            class="btn btn-primary"
            (click)="onGenerate()"
            [disabled]="isLoading || isGenerating">
            <svg *ngIf="!isGenerating" class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            <svg *ngIf="isGenerating" class="btn-icon animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 11-6.219-8.56"></path>
            </svg>
            <span class="btn-text">{{ isGenerating ? 'Generating...' : 'Generate New' }}</span>
          </button>

          <button
            class="btn btn-outline"
            (click)="onExport()"
            [disabled]="isLoading || !hasData">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span class="btn-text">Export Report</span>
          </button>

          <button
            class="btn btn-outline"
            (click)="onSchedule()"
            [disabled]="isLoading">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span class="btn-text">Schedule Updates</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./analytics-header.component.scss']
})
export class AnalyticsHeaderComponent {
  @Input() lastUpdated: string | null = null;
  @Input() isLoading: boolean = false;
  @Input() isGenerating: boolean = false;
  @Input() hasData: boolean = false;

  @Output() refresh = new EventEmitter<void>();
  @Output() generate = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();
  @Output() schedule = new EventEmitter<void>();

  onRefresh() {
    this.refresh.emit();
  }

  onGenerate() {
    this.generate.emit();
  }

  onExport() {
    this.export.emit();
  }

  onSchedule() {
    this.schedule.emit();
  }
}
