import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ExportService } from '../services/export.service';
import { ReportCategory, ExportFormat, ReportRunStatus } from '../models/reports.models';

@Component({
  selector: 'app-reports-export-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="export-panel-overlay" *ngIf="isOpen" (click)="onClose()">
      <div class="export-panel" (click)="$event.stopPropagation()">
        <!-- Panel Header -->
        <div class="panel-header">
          <h3 class="panel-title">
            <svg class="panel-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export Report
          </h3>
          <button class="close-button" (click)="onClose()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Panel Content -->
        <div class="panel-content">
          <!-- Export Options -->
          <div class="export-options">
            <div class="option-group">
              <label class="option-label">Export Format</label>
              <div class="format-options">
                <label 
                  *ngFor="let format of exportFormats" 
                  class="format-option"
                  [class.selected]="selectedFormat === format.value">
                  <input 
                    type="radio" 
                    name="format" 
                    [value]="format.value"
                    [(ngModel)]="selectedFormat"
                    class="format-radio">
                  <div class="format-content">
                    <svg class="format-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <ng-container [ngSwitch]="format.value">
                        <g *ngSwitchCase="'pdf'">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14,2 14,8 20,8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10,9 9,9 8,9"></polyline>
                        </g>
                        <g *ngSwitchCase="'xlsx'">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14,2 14,8 20,8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10,9 9,9 8,9"></polyline>
                        </g>
                        <g *ngSwitchCase="'csv'">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14,2 14,8 20,8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10,9 9,9 8,9"></polyline>
                        </g>
                        <g *ngSwitchCase="'json'">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14,2 14,8 20,8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10,9 9,9 8,9"></polyline>
                        </g>
                      </ng-container>
                    </svg>
                    <div class="format-info">
                      <span class="format-name">{{ format.label }}</span>
                      <span class="format-description">{{ format.description }}</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Export Parameters -->
            <div class="option-group">
              <label class="option-label">Export Parameters</label>
              <div class="parameter-options">
                <label class="parameter-option">
                  <input 
                    type="checkbox" 
                    [(ngModel)]="includeCharts"
                    class="parameter-checkbox">
                  <span class="parameter-text">Include charts and graphs</span>
                </label>
                <label class="parameter-option">
                  <input 
                    type="checkbox" 
                    [(ngModel)]="includeKPIs"
                    class="parameter-checkbox">
                  <span class="parameter-text">Include KPI summary</span>
                </label>
                <label class="parameter-option">
                  <input 
                    type="checkbox" 
                    [(ngModel)]="includeFilters"
                    class="parameter-checkbox">
                  <span class="parameter-text">Include applied filters</span>
                </label>
              </div>
            </div>

            <!-- File Name -->
            <div class="option-group">
              <label class="option-label">File Name</label>
              <input 
                type="text" 
                class="filename-input"
                [(ngModel)]="filename"
                placeholder="Enter custom filename (optional)">
              <div class="filename-preview">
                Preview: {{ getFilenamePreview() }}
              </div>
            </div>
          </div>

          <!-- Active Exports -->
          <div class="active-exports" *ngIf="activeExports.length > 0">
            <h4 class="exports-title">Active Exports</h4>
            <div class="exports-list">
              <div 
                *ngFor="let exportRun of activeExports" 
                class="export-item"
                [class]="'export-' + exportRun.status">
                
                <div class="export-info">
                  <div class="export-header">
                    <span class="export-name">{{ getReportName(exportRun.report_key) }}</span>
                    <span class="export-format">{{ exportRun.format.toUpperCase() }}</span>
                  </div>
                  <div class="export-status">
                    <div class="status-indicator" [class]="'status-' + exportRun.status"></div>
                    <span class="status-text">{{ getStatusLabel(exportRun.status) }}</span>
                    <span class="status-progress" *ngIf="exportRun.status === 'running'">
                      ({{ getProgress(exportRun) }}%)
                    </span>
                  </div>
                  <div class="export-details" *ngIf="exportRun.row_count > 0">
                    {{ formatNumber(exportRun.row_count) }} records
                  </div>
                </div>

                <div class="export-actions">
                  <button 
                    *ngIf="exportRun.status === 'success'"
                    class="action-button download-button"
                    (click)="onDownload(exportRun)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7,10 12,15 17,10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                  </button>
                  <button 
                    *ngIf="exportRun.status === 'queued' || exportRun.status === 'running'"
                    class="action-button cancel-button"
                    (click)="onCancel(exportRun)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel Footer -->
        <div class="panel-footer">
          <button 
            class="footer-button cancel-button"
            (click)="onClose()">
            Cancel
          </button>
          <button 
            class="footer-button export-button"
            [disabled]="isExporting"
            (click)="onExport()">
            <svg 
              *ngIf="isExporting" 
              class="button-icon spinning"
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
            <svg 
              *ngIf="!isExporting" 
              class="button-icon"
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {{ isExporting ? 'Exporting...' : 'Export Report' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./reports-export-panel.component.scss']
})
export class ReportsExportPanelComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = false;
  @Input() activeTab: ReportCategory = 'assets';
  @Input() config: any = {};

  @Output() close = new EventEmitter<void>();
  @Output() exportRequest = new EventEmitter<{ format: string, params: any }>();

  private destroy$ = new Subject<void>();

  // Export options
  selectedFormat: ExportFormat = 'xlsx';
  includeCharts: boolean = true;
  includeKPIs: boolean = true;
  includeFilters: boolean = true;
  filename: string = '';

  // Export state
  isExporting: boolean = false;
  activeExports: ReportRunStatus[] = [];

  // Export formats
  exportFormats = [
    { value: 'pdf', label: 'PDF', description: 'Portable Document Format' },
    { value: 'xlsx', label: 'Excel', description: 'Microsoft Excel Spreadsheet' },
    { value: 'csv', label: 'CSV', description: 'Comma Separated Values' },
    { value: 'json', label: 'JSON', description: 'JavaScript Object Notation' }
  ];

  constructor(private exportService: ExportService) {}

  ngOnInit(): void {
    this.loadActiveExports();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Load active exports
   */
  private loadActiveExports(): void {
    this.exportService.getActiveExports()
      .pipe(takeUntil(this.destroy$))
      .subscribe(exports => {
        this.activeExports = exports;
      });
  }

  /**
   * Get filename preview
   */
  getFilenamePreview(): string {
    if (this.filename) {
      return `${this.filename}.${this.selectedFormat}`;
    }
    return this.exportService.generateFilename(this.getReportKey(), this.selectedFormat);
  }

  /**
   * Get report key based on active tab
   */
  private getReportKey(): string {
    switch (this.activeTab) {
      case 'assets':
        return 'assets.summary';
      case 'maintenance':
        return 'maintenance.summary';
      case 'inventory':
        return 'inventory.stock_levels';
      case 'financial':
        return 'financial.tco';
      default:
        return 'assets.summary';
    }
  }

  /**
   * Get report name
   */
  getReportName(reportKey: string): string {
    const names: Record<string, string> = {
      'assets.summary': 'Asset Summary',
      'assets.utilization': 'Asset Utilization',
      'assets.depreciation': 'Asset Depreciation',
      'maintenance.summary': 'Maintenance Summary',
      'maintenance.compliance': 'Maintenance Compliance',
      'inventory.stock_levels': 'Inventory Stock Levels',
      'financial.tco': 'Total Cost of Ownership'
    };
    return names[reportKey] || reportKey;
  }

  /**
   * Get status label
   */
  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      'queued': 'Queued',
      'running': 'Processing',
      'success': 'Completed',
      'failed': 'Failed',
      'cancelled': 'Cancelled'
    };
    return labels[status] || status;
  }

  /**
   * Get progress percentage
   */
  getProgress(exportRun: ReportRunStatus): number {
    if (exportRun.status === 'success') return 100;
    if (exportRun.status === 'failed' || exportRun.status === 'cancelled') return 0;
    if (exportRun.status === 'queued') return 10;
    if (exportRun.status === 'running') return 50;
    return 0;
  }

  /**
   * Format number
   */
  formatNumber(value: number): string {
    return new Intl.NumberFormat('en-AE').format(value);
  }

  /**
   * Handle export
   */
  onExport(): void {
    this.isExporting = true;
    
    const exportData = {
      format: this.selectedFormat,
      params: {
        include_charts: this.includeCharts,
        include_kpis: this.includeKPIs,
        include_filters: this.includeFilters,
        filename: this.filename || undefined,
        ...this.config
      }
    };

    this.exportRequest.emit(exportData);
    
    // Reset export state after a delay
    setTimeout(() => {
      this.isExporting = false;
    }, 2000);
  }

  /**
   * Handle download
   */
  onDownload(exportRun: ReportRunStatus): void {
    this.exportService.downloadExport(exportRun.id, this.filename)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          console.log('Download started');
        },
        error: (error) => {
          console.error('Download failed:', error);
        }
      });
  }

  /**
   * Handle cancel
   */
  onCancel(exportRun: ReportRunStatus): void {
    this.exportService.cancelExport(exportRun.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (success) => {
          if (success) {
            console.log('Export cancelled');
          }
        },
        error: (error) => {
          console.error('Cancel failed:', error);
        }
      });
  }

  /**
   * Handle close
   */
  onClose(): void {
    this.close.emit();
  }
}
