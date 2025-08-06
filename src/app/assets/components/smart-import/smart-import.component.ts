import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AssetService } from '../../services/asset.service';
import { timer, interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-smart-import',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './smart-import.component.html',
  styleUrls: ['./smart-import.component.scss']
})
export class SmartImportComponent implements OnDestroy {
  @Output() importComplete = new EventEmitter<void>();
  
  private destroy$ = new Subject<void>();
  
  // Step management
  currentStep = 1;
  totalSteps = 2; // Simplified to: 1. Upload, 2. Progress
  
  // File upload state
  uploadedFile: File | null = null;
  uploaded = false;
  
  // Import state
  importLoading = false;
  isImportComplete = false;
  importedCount = 0;

  // Import results
  importResults: any = null;
  showResults = false;

  // Error state
  errorMessage = '';
  showError = false;

  // Progress tracking
  showProgressBox = false;
  currentJobId: string | null = null;
  progressPercentage = 0;
  progressMessage = 'Starting import...';
  isCompleted = false;
  private polling$ = new Subject<void>();

  constructor(private assetService: AssetService, private router: Router) {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.polling$.next();
    this.polling$.complete();
  }

  /**
   * Handle file upload
   */
  parseFile(event: any): void {
    const file = event.target.files[0];
    
    // Clear any existing errors
    this.clearError();
    
    if (!file) {
      this.errorMessage = 'No file selected';
      this.showError = true;
      return;
    }

    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !['xlsx', 'xls'].includes(fileExtension)) {
      this.errorMessage = 'Please upload a valid Excel file (.xlsx, .xls).';
      this.showError = true;
      return;
    }

    this.uploadedFile = file;
    this.uploaded = true;
    this.currentStep = 2;
  }

  /**
   * Clear error state
   */
  clearError(): void {
    this.errorMessage = '';
    this.showError = false;
  }

  /**
   * Start the bulk import process
   */
  startBulkImport(): void {
    if (!this.uploadedFile) {
      this.errorMessage = 'No file selected for import';
          this.showError = true;
          return;
        }

    this.importLoading = true;
    this.clearError();

    this.assetService.importBulkExcel(this.uploadedFile).subscribe({
      next: (response: any) => {
        this.importLoading = false;
        if (response && response.success && response.data?.job_id) {
          this.currentJobId = response.data.job_id;
          this.importResults = response.data; // Store initial response data
          
          // Set initial progress message with file stats
          const stats = response.data.file_stats;
          this.progressMessage = `Processing ${stats?.total_rows_processed || 'unknown'} assets from ${response.data.file_name}`;
          
          this.showProgressBox = true;
          this.startProgressPolling();
      } else {
          this.errorMessage = response.message || 'Invalid response from server';
      this.showError = true;
        }
      },
      error: (error) => {
        this.importLoading = false;
        this.errorMessage = error.error?.message || 'Error starting import process';
      this.showError = true;
      }
    });
  }

  /**
   * Start polling for import progress
   */
  private startProgressPolling(): void {
    if (!this.currentJobId) return;

    interval(2000)
      .pipe(
        takeUntil(this.destroy$),
        takeUntil(this.polling$)
      )
      .subscribe(() => {
        this.checkImportProgress();
      });
  }

  /**
   * Check import progress
   */
  private checkImportProgress(): void {
    if (!this.currentJobId) return;

    this.assetService.getImportProgress(this.currentJobId).subscribe({
            next: (response: any) => {
        // Handle nested response structure with data property
        const data = response.data || response;
        
        // Update progress from the actual API response structure
        const rawPercentage = data.progress_percentage;
        this.progressPercentage = Math.round(rawPercentage || 0);
        
        // Create detailed progress message
        if (data.is_processing) {
          const processed = data.processed_assets || 0;
          const total = data.total_assets || 0;
          const successful = data.successful_imports || 0;
          const failed = data.failed_imports || 0;
          
          this.progressMessage = `Processing: ${processed}/${total} assets (${successful} success, ${failed} failed)`;
        } else if (data.is_completed) {
          this.progressMessage = 'Import completed - generating report...';
      } else {
          this.progressMessage = data.status || 'Processing...';
        }

        this.isCompleted = data.is_completed || false;

        if (this.isCompleted) {
          // Stop the polling
          this.polling$.next();
          this.polling$.complete();
          this.handleImportComplete(data);
        }
      },
          error: (error) => {
        console.error('Error checking progress:', error);
        this.progressMessage = 'Error checking progress';
      }
    });
  }

  /**
   * Handle import completion
   */
  private handleImportComplete(response: any): void {
    this.importResults = response;
    this.isImportComplete = true;
    
    // Create completion summary
    const successful = response.successful_imports || 0;
    const failed = response.failed_imports || 0;
    const total = response.total_assets || 0;
    
    this.progressMessage = `Import complete! ${successful} successful, ${failed} failed out of ${total} assets`;
    
    // Generate CSV for failed imports if there are any
    if (failed > 0 && response.errors && response.errors.length > 0) {
      this.generateFailedImportsCSV(response.errors);
    }
    
    // Show countdown and auto-navigate to asset list
    let countdown = 3;
    this.progressMessage = `Import complete! ${successful} successful, ${failed} failed out of ${total} assets. Redirecting in ${countdown}s...`;
    
    const countdownTimer = interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      countdown--;
      if (countdown > 0) {
        this.progressMessage = `Import complete! ${successful} successful, ${failed} failed out of ${total} assets. Redirecting in ${countdown}s...`;
           } else {
        countdownTimer.unsubscribe();
        this.router.navigate(['/assets']);
      }
    });
  }

  /**
   * Close the progress box
   */
  closeProgressBox(): void {
    this.showProgressBox = false;
    this.currentJobId = null;
    this.progressPercentage = 0;
    this.progressMessage = 'Starting import...';
    this.isCompleted = false;
    
    // Stop polling
    this.polling$.next();
    this.polling$ = new Subject<void>();
  }

  /**
   * Reset the import process
   */
  resetImport(): void {
    this.currentStep = 1;
    this.uploadedFile = null;
    this.uploaded = false;
    this.importLoading = false;
    this.isImportComplete = false;
    this.closeProgressBox();
    this.clearError();
  }

  /**
   * Generate CSV file for failed imports
   */
  private generateFailedImportsCSV(errors: any[]): void {
    if (!errors || errors.length === 0) return;

    // CSV headers
    const headers = ['Asset Name', 'Error Reason', 'Additional Details'];
    
    // Convert errors to CSV rows
    const csvRows = [
      headers.join(','), // Header row
      ...errors.map(error => {
        const name = (error.name || '').replace(/"/g, '""'); // Escape quotes
        const reason = (error.error || error.message || 'Unknown error').replace(/"/g, '""');
        const details = (error.details || '').replace(/"/g, '""');
        
        return `"${name}","${reason}","${details}"`;
      })
    ];
    
    // Create and download CSV
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `failed-imports-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  /**
   * Download failed imports CSV manually
   */
  downloadFailedImportsCSV(): void {
    if (this.importResults?.errors) {
      this.generateFailedImportsCSV(this.importResults.errors);
    }
  }

  /**
   * Navigate to asset list page
   */
  goToAssetList(): void {
    this.router.navigate(['/assets']);
  }

  /**
   * Close all dropdowns when clicking outside (compatibility method)
   */
  closeAllDropdowns(): void {
    // No-op for compatibility with template
  }
} 