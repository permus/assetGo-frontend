import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetImportService } from '../../../services/asset-import.service';

@Component({
  selector: 'app-import-execution-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './import-execution-step.component.html',
  styleUrls: ['./import-execution-step.component.scss']
})
export class ImportExecutionStepComponent implements OnInit {
  @Input() fileId: string | null = null;
  @Output() importComplete = new EventEmitter<any>();

  isImporting = false;
  importProgress = 0;
  importStatus = 'Preparing import...';
  importResult: any = null;
  errors: string[] = [];

  constructor(private assetImportService: AssetImportService) {}

  ngOnInit(): void {
    if (this.fileId) {
      this.executeImport();
    }
  }

  private executeImport(): void {
    if (!this.fileId) return;

    this.isImporting = true;
    this.importProgress = 0;
    this.importStatus = 'Starting import...';

    // Simulate import progress
    const progressInterval = setInterval(() => {
      if (this.importProgress < 90) {
        this.importProgress += Math.random() * 10;
        this.updateImportStatus();
      }
    }, 500);

    this.assetImportService.executeImport(this.fileId).subscribe({
      next: (response) => {
        clearInterval(progressInterval);
        this.importProgress = 100;
        this.importStatus = 'Import completed successfully!';
        this.isImporting = false;
        
        this.importResult = response.data;
        this.importComplete.emit({
          importId: this.importResult.import_id,
          success: true,
          result: this.importResult
        });
      },
      error: (error) => {
        clearInterval(progressInterval);
        this.isImporting = false;
        this.importStatus = 'Import failed';
        this.errors = ['Import failed. Please try again.'];
        console.error('Import error:', error);
      }
    });
  }

  private updateImportStatus(): void {
    if (this.importProgress < 20) {
      this.importStatus = 'Validating data...';
    } else if (this.importProgress < 40) {
      this.importStatus = 'Processing assets...';
    } else if (this.importProgress < 60) {
      this.importStatus = 'Creating records...';
    } else if (this.importProgress < 80) {
      this.importStatus = 'Generating QR codes...';
    } else if (this.importProgress < 100) {
      this.importStatus = 'Finalizing import...';
    }
  }

  downloadErrorReport(): void {
    if (this.importResult?.error_report_url) {
      const link = document.createElement('a');
      link.href = this.importResult.error_report_url;
      link.download = 'import-error-report.csv';
      link.click();
    }
  }

  getImportSummary(): any {
    if (!this.importResult) return null;

    return {
      totalImported: this.importResult.total_imported || 0,
      totalSkipped: this.importResult.total_skipped || 0,
      totalErrors: this.importResult.total_errors || 0,
      importTime: this.importResult.import_time || 0
    };
  }
} 