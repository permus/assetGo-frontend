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
  templateUrl: './reports-export-panel.component.html',
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
  showHistory: boolean = false;

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
    this.exportService.getAllExports()
      .pipe(takeUntil(this.destroy$))
      .subscribe(exports => {
        console.log('Export panel - Active exports updated:', exports);
        console.log('Export panel - Number of exports:', exports.length);
        
        // Debug each export
        exports.forEach((exportRun, index) => {
          console.log(`Export ${index + 1}:`, {
            id: exportRun.id,
            report_key: exportRun.report_key,
            format: exportRun.format,
            status: exportRun.status,
            status_label: exportRun.status_label
          });
        });
        
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
      // New frontend format
      'assets.asset-summary': 'Asset Summary',
      'assets.asset-utilization': 'Asset Utilization',
      'assets.depreciation-analysis': 'Depreciation Analysis',
      'assets.warranty-status': 'Warranty Status',
      'assets.compliance-report': 'Compliance Report',
      'maintenance.maintenance-summary': 'Maintenance Summary',
      'maintenance.maintenance-compliance': 'Maintenance Compliance',
      'maintenance.maintenance-costs': 'Maintenance Costs',
      'maintenance.downtime-analysis': 'Downtime Analysis',
      'maintenance.failure-analysis': 'Failure Analysis',
      'maintenance.technician-performance': 'Technician Performance',
      'inventory.stock-levels': 'Inventory Stock Levels',
      'financial.total-cost-ownership': 'Total Cost of Ownership',
      // Old format (for backward compatibility)
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
    // Use API download endpoint for security and reliability
    const filename = this.exportService.generateFilename(exportRun.report_key, exportRun.format);
    
    // Open download in new tab
    this.exportService.downloadInNewTab(exportRun.id, filename);
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

  /**
   * Get report display name
   */
  getReportDisplayName(reportKey: string): string {
    if (!reportKey) return 'Unknown Report';
    return this.getReportName(reportKey);
  }

  /**
   * Format file size
   */
  formatFileSize(bytes: number): string {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Track by run ID for ngFor
   */
  trackByRunId(index: number, exportRun: ReportRunStatus): number {
    return exportRun.id;
  }

  /**
   * Handle retry
   */
  onRetry(exportRun: ReportRunStatus): void {
    console.log('Retrying export:', exportRun);
    // Implement retry logic if needed
  }

  /**
   * Handle view history
   */
  onViewHistory(): void {
    console.log('Viewing export history');
    // Implement history view logic if needed
  }

  /**
   * Refresh exports manually
   */
  refreshExports(): void {
    console.log('Manually refreshing exports...');
    this.loadActiveExports();
  }

  /**
   * Clear all exports (for debugging)
   */
  clearExports(): void {
    console.log('Clearing all exports...');
    this.exportService.clearAllTracking();
    this.activeExports = [];
  }

  /**
   * Force stop all polling (emergency stop)
   */
  forceStopAllPolling(): void {
    console.log('Force stopping all polling...');
    this.exportService.stopAllPolling();
    this.activeExports = [];
  }
}
