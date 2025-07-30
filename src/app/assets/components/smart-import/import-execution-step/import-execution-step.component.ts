import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetImportService, ImportProgress, ImportResult } from '../../../services/asset-import.service';

@Component({
  selector: 'app-import-execution-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './import-execution-step.component.html',
  styleUrls: ['./import-execution-step.component.scss']
})
export class ImportExecutionStepComponent implements OnInit {
  @Input() fileId: string | null = null;
  @Output() importComplete = new EventEmitter<{ importId: string; result: ImportResult }>();

  isImporting = false;
  importProgress = 0;
  progress: ImportProgress | null = null;
  result: ImportResult | null = null;
  errors: string[] = [];
  progressInterval: any = null;

  constructor(private assetImportService: AssetImportService) {}

  ngOnInit(): void {
    if (this.fileId) {
      this.startImport();
    }
  }

  private startImport(): void {
    if (!this.fileId) return;

    this.isImporting = true;
    this.importProgress = 0;

    // Start progress tracking
    this.startProgressTracking();

    this.assetImportService.executeImport(this.fileId).subscribe({
      next: (response) => {
        this.isImporting = false;
        this.importProgress = 100;
        this.stopProgressTracking();
        
        this.result = response;
        this.importComplete.emit({
          importId: this.fileId!,
          result: this.result
        });
      },
      error: (error) => {
        this.isImporting = false;
        this.stopProgressTracking();
        this.errors = ['Import failed. Please try again.'];
        console.error('Import error:', error);
      }
    });
  }

  private startProgressTracking(): void {
    this.progressInterval = setInterval(() => {
      if (this.fileId) {
        this.assetImportService.getImportProgress(this.fileId).subscribe({
          next: (response) => {
            this.progress = response;
            this.updateProgressBar();
          },
          error: (error) => {
            console.error('Progress tracking error:', error);
          }
        });
      }
    }, 2000); // Update every 2 seconds
  }

  private stopProgressTracking(): void {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  private updateProgressBar(): void {
    if (this.progress?.metrics) {
      const { total_rows, processed } = this.progress.metrics;
      if (total_rows > 0) {
        this.importProgress = Math.round((processed / total_rows) * 100);
      }
    }
  }

  getProgressPercentage(): number {
    if (!this.progress?.metrics) return 0;
    const { total_rows, processed } = this.progress.metrics;
    return total_rows > 0 ? Math.round((processed / total_rows) * 100) : 0;
  }

  getImportStatus(): string {
    if (!this.progress?.status) return 'Preparing...';
    return this.progress.status;
  }

  getImportMetrics(): any {
    return this.progress?.metrics || {
      total_rows: 0,
      processed: 0,
      imported: 0,
      errors: 0
    };
  }

  getResultSummary(): any {
    if (!this.result) return null;
    
    return {
      imported: this.result.imported,
      skipped: this.result.skipped,
      errors: this.result.errors,
      total: this.result.imported + this.result.skipped + this.result.errors,
      successRate: this.result.imported / (this.result.imported + this.result.skipped + this.result.errors) * 100
    };
  }

  downloadErrorReport(): void {
    if (this.result?.error_report_url) {
      const link = document.createElement('a');
      link.href = this.result.error_report_url;
      link.download = 'import-error-report.csv';
      link.click();
    }
  }

  getStatusClass(): string {
    if (!this.progress?.status) return 'bg-gray-100 text-gray-800';
    
    const status = this.progress.status.toLowerCase();
    if (status.includes('completed') || status.includes('success')) {
      return 'bg-green-100 text-green-800';
    } else if (status.includes('error') || status.includes('failed')) {
      return 'bg-red-100 text-red-800';
    } else if (status.includes('processing') || status.includes('importing')) {
      return 'bg-blue-100 text-blue-800';
    } else {
      return 'bg-yellow-100 text-yellow-800';
    }
  }

  getProgressBarClass(): string {
    if (this.importProgress >= 100) {
      return 'bg-green-500';
    } else if (this.importProgress >= 50) {
      return 'bg-blue-500';
    } else {
      return 'bg-yellow-500';
    }
  }

  ngOnDestroy(): void {
    this.stopProgressTracking();
  }
} 