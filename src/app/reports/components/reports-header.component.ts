import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportCategory } from '../models/reports.models';

@Component({
  selector: 'app-reports-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reports-header">
      <div class="header-content">
        <div class="header-left">
          <div class="header-title">
            <svg class="header-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"></path>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <h1 class="title">Reports</h1>
          </div>
          <p class="subtitle">Generate and export comprehensive reports for your assets and maintenance activities</p>
        </div>

        <div class="header-right">
          <div class="header-actions">
            <button 
              class="action-button refresh-button"
              [disabled]="isLoading"
              (click)="onRefresh()"
              [class.loading]="isLoading">
              <svg 
                class="button-icon" 
                [class.spinning]="isLoading"
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M3 21v-5h5"></path>
              </svg>
              <span class="button-text">Refresh</span>
            </button>

            <button 
              class="action-button export-button"
              [disabled]="!hasData || isLoading"
              (click)="onExport()">
              <svg class="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span class="button-text">Export</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Status Bar -->
      <div class="status-bar" *ngIf="isLoading || hasData">
        <div class="status-item" *ngIf="isLoading">
          <div class="status-indicator loading"></div>
          <span class="status-text">Loading reports...</span>
        </div>
        <div class="status-item" *ngIf="!isLoading && hasData">
          <div class="status-indicator success"></div>
          <span class="status-text">Reports loaded successfully</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./reports-header.component.scss']
})
export class ReportsHeaderComponent {
  @Input() activeTab: ReportCategory = 'assets';
  @Input() isLoading: boolean = false;
  @Input() hasData: boolean = false;

  @Output() tabChange = new EventEmitter<ReportCategory>();
  @Output() refresh = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();

  onRefresh(): void {
    this.refresh.emit();
  }

  onExport(): void {
    this.export.emit();
  }
}
