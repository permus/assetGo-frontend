import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pm-actions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pm-actions">
      <div class="actions-main">
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
            <span class="btn-text">{{ isGenerating ? 'Generating...' : 'Generate Predictions' }}</span>
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

        <div class="action-info" *ngIf="lastUpdated">
          <div class="info-item">
            <svg class="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span class="info-text">Last updated: {{ formatDate(lastUpdated) }}</span>
          </div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="progress-container" *ngIf="isGenerating">
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="progress"></div>
        </div>
        <div class="progress-text">
          <span class="progress-label">AI is analyzing your assets...</span>
          <span class="progress-percentage">{{ progress }}%</span>
        </div>
      </div>

      <!-- Status Messages -->
      <div class="status-messages" *ngIf="statusMessage">
        <div class="status-message" [ngClass]="statusType">
          <svg class="status-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path *ngIf="statusType === 'success'" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path *ngIf="statusType === 'error'" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"></path>
            <path *ngIf="statusType === 'info'" d="M12 16v-4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            <polyline *ngIf="statusType === 'success'" points="22,4 12,14.01 9,11.01"></polyline>
          </svg>
          <span class="status-text">{{ statusMessage }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pm-actions.component.scss']
})
export class PMActionsComponent {
  @Input() isLoading = false;
  @Input() isGenerating = false;
  @Input() hasData = false;
  @Input() lastUpdated: string | null = null;
  @Input() progress = 0;
  @Input() statusMessage = '';
  @Input() statusType: 'success' | 'error' | 'info' = 'info';

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

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
