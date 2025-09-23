import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recs-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="recs-header">
      <!-- Main Header -->
      <div class="header-content">
        <div class="header-main">
          <div class="header-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <div class="header-text">
            <h1 class="header-title">AI Recommendations</h1>
            <p class="header-description">
              Intelligent suggestions to optimize your asset management operations, 
              reduce costs, and improve efficiency.
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
            <span class="btn-text">Refresh</span>
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
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./recs-header.component.scss']
})
export class RecsHeaderComponent {
  @Input() lastUpdated: string | null = null;
  @Input() isLoading: boolean = false;
  @Input() isGenerating: boolean = false;
  @Input() hasData: boolean = false;

  @Output() refresh = new EventEmitter<void>();
  @Output() generate = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();

  onRefresh() {
    this.refresh.emit();
  }

  onGenerate() {
    this.generate.emit();
  }

  onExport() {
    this.export.emit();
  }
}
