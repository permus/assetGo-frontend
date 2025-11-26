import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ReportsApiService } from '../services/reports-api.service';
import { ReportPollingService, ExportStatus } from '../services/report-polling.service';
import { ReportStateService } from '../services/report-state.service';
import { ExportFormat } from '../models/reports.models';

@Component({
  selector: 'app-report-generator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="report-generator">
      <button
        class="generate-button"
        [disabled]="disabled || isGenerating"
        (click)="onGenerate()">
        <span *ngIf="!isGenerating">{{ buttonText }}</span>
        <span *ngIf="isGenerating" class="loading-content">
          <i class="loading-spinner"></i>
          {{ generatingText }}
        </span>
      </button>
      
      <button
        *ngIf="showDownloadButton && downloadUrl"
        class="download-button"
        [disabled]="!downloadUrl"
        (click)="onDownload()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7,10 12,15 17,10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        {{ downloadButtonText }}
      </button>
      
      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      
      <div *ngIf="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </div>
  `,
  styles: [`
    .report-generator {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .generate-button {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
      width: 100%;
      
      &:hover:not(:disabled) {
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        transform: translateY(-1px);
        box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);
      }
      
      &:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        transform: none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }
      
      .loading-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        
        .loading-spinner {
          width: 1rem;
          height: 1rem;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      }
    }
    
    .download-button {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      
      &:hover:not(:disabled) {
        background: linear-gradient(135deg, #059669 0%, #047857 100%);
        transform: translateY(-1px);
        box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.1), 0 4px 6px -2px rgba(16, 185, 129, 0.05);
      }
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
      
      svg {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
      }
    }
    
    .error-message {
      color: #dc2626;
      font-size: 0.875rem;
      padding: 0.5rem;
      background: #fee2e2;
      border-radius: 0.375rem;
    }
    
    .success-message {
      color: #059669;
      font-size: 0.875rem;
      padding: 0.5rem;
      background: #d1fae5;
      border-radius: 0.375rem;
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class ReportGeneratorComponent implements OnDestroy {
  @Input() reportKey: string = '';
  @Input() format: ExportFormat = 'pdf';
  @Input() disabled: boolean = false;
  @Input() buttonText: string = 'Generate Report';
  @Input() generatingText: string = 'Generating Report...';
  @Input() downloadButtonText: string = 'Download Generated Report';
  @Input() showDownloadButton: boolean = true;
  @Input() autoDownload: boolean = true;
  
  @Output() generated = new EventEmitter<{ runId: number; downloadUrl: string }>();
  @Output() error = new EventEmitter<string>();
  @Output() downloadStarted = new EventEmitter<void>();
  
  private destroy$ = new Subject<void>();
  
  isGenerating = false;
  downloadUrl: string | null = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  lastRunId: number | null = null;
  
  constructor(
    private reportsApi: ReportsApiService,
    private pollingService: ReportPollingService,
    private stateService: ReportStateService
  ) {}
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.lastRunId) {
      this.pollingService.stopPolling(this.lastRunId);
    }
  }
  
  onGenerate(): void {
    if (this.disabled || this.isGenerating || !this.reportKey) {
      return;
    }
    
    this.isGenerating = true;
    this.errorMessage = null;
    this.successMessage = null;
    this.downloadUrl = null;
    
    const config = this.stateService.reportConfig;
    const exportParams = {
      date_from: config.dateRange.start,
      date_to: config.dateRange.end,
      format: this.format
    };
    
    this.reportsApi.exportReport({
      report_key: this.reportKey,
      format: this.format,
      params: exportParams
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const runId = response.data.run_id;
          const status = response.data.status || 'queued';
          
          // If already completed (sync driver), handle immediately
          if (status === 'success') {
            this.handleImmediateSuccess(runId);
          } else {
            // Start polling for async completion
            this.startPolling(runId);
          }
        } else {
          this.handleError('Export failed: ' + (response.error || 'Unknown error'));
        }
      },
      error: (err) => {
        this.handleError('Export failed: ' + (err.message || 'Unknown error'));
      }
    });
  }
  
  onDownload(): void {
    if (!this.downloadUrl || !this.lastRunId) {
      return;
    }
    
    this.downloadStarted.emit();
    this.downloadFile(this.lastRunId);
  }
  
  private handleImmediateSuccess(runId: number): void {
    this.reportsApi.getExportStatus(runId).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (statusResponse) => {
        if (statusResponse.success && statusResponse.data) {
          const statusData = statusResponse.data;
          if (statusData.download_url && statusData.format) {
            this.lastRunId = runId;
            this.downloadUrl = statusData.download_url;
            this.isGenerating = false;
            this.successMessage = `Report generated successfully! (${statusData.execution_time_formatted || ''})`;
            
            this.generated.emit({
              runId,
              downloadUrl: statusData.download_url
            });
            
            if (this.autoDownload) {
              setTimeout(() => this.downloadFile(runId), 300);
            }
          } else {
            this.handleError('Export completed but no download URL provided');
          }
        }
      },
      error: (err) => {
        this.handleError('Failed to get export status: ' + err.message);
      }
    });
  }
  
  private startPolling(runId: number): void {
    this.lastRunId = runId;
    
    this.pollingService.pollExportStatus(runId).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (status: ExportStatus) => {
        if (status.status === 'success') {
          this.lastRunId = status.id;
          this.downloadUrl = status.download_url || null;
          this.isGenerating = false;
          this.successMessage = `Report generated successfully! (${status.execution_time_formatted || ''})`;
          
          if (this.downloadUrl) {
            this.generated.emit({
              runId: status.id,
              downloadUrl: this.downloadUrl
            });
            
            if (this.autoDownload) {
              setTimeout(() => this.downloadFile(status.id), 300);
            }
          }
        } else if (status.status === 'failed') {
          this.handleError('Export failed: ' + (status.error_message || 'Unknown error'));
        }
      },
      error: (err) => {
        this.handleError('Failed to check export status: ' + err.message);
      }
    });
  }
  
  private downloadFile(runId: number): void {
    if (!runId) {
      return;
    }
    
    this.reportsApi.downloadExport(runId).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (blob: Blob) => {
        if (blob.size === 0) {
          this.errorMessage = 'Downloaded file is empty';
          return;
        }
        
        const blobUrl = window.URL.createObjectURL(blob);
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        const reportName = this.reportKey.replace(/\./g, '-').replace(/[^a-zA-Z0-9-]/g, '');
        const filename = `${reportName}-${timestamp}.${this.format}`;
        
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 1000);
        
        this.successMessage = `Report downloaded: ${filename}`;
      },
      error: (err) => {
        this.handleError('Failed to download report: ' + (err.message || 'Unknown error'));
      }
    });
  }
  
  private handleError(message: string): void {
    this.isGenerating = false;
    this.errorMessage = message;
    this.error.emit(message);
  }
}

