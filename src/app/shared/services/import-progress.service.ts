import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject, takeUntil } from 'rxjs';
import { AssetService } from '../../assets/services/asset.service';

export interface ImportProgressState {
  showProgressBox: boolean;
  currentJobId: string | null;
  progressPercentage: number;
  progressMessage: string;
  isCompleted: boolean;
  isImportComplete: boolean;
  importResults: any;
  failedImportsCsvData: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ImportProgressService {
  private destroy$ = new Subject<void>();
  private polling$ = new Subject<void>();

  // State management
  private _state = new BehaviorSubject<ImportProgressState>({
    showProgressBox: false,
    currentJobId: null,
    progressPercentage: 0,
    progressMessage: 'Starting import...',
    isCompleted: false,
    isImportComplete: false,
    importResults: null,
    failedImportsCsvData: null
  });

  // Public observable for components to subscribe to
  public state$ = this._state.asObservable();

  constructor(private assetService: AssetService) {}

  /**
   * Get current state
   */
  get currentState(): ImportProgressState {
    return this._state.value;
  }

  /**
   * Start import progress tracking
   */
  startImport(jobId: string, importResults: any): void {
    this.updateState({
      showProgressBox: true,
      currentJobId: jobId,
      progressPercentage: 0,
      progressMessage: `Processing ${importResults.total_assets} assets...`,
      isCompleted: false,
      isImportComplete: false,
      importResults: importResults,
      failedImportsCsvData: null
    });

    this.startProgressPolling();
  }

  /**
   * Close the progress box
   */
  closeProgressBox(): void {
    this.updateState({
      showProgressBox: false,
      currentJobId: null,
      progressPercentage: 0,
      progressMessage: 'Starting import...',
      isCompleted: false,
      isImportComplete: false,
      importResults: null,
      failedImportsCsvData: null
    });

    // Stop polling
    this.polling$.next();
    this.polling$ = new Subject<void>();
  }

  /**
   * Start polling for import progress
   */
  private startProgressPolling(): void {
    if (!this.currentState.currentJobId) return;

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
    if (!this.currentState.currentJobId) return;

    this.assetService.getImportProgress(this.currentState.currentJobId).subscribe({
      next: (response: any) => {
        // Handle nested response structure with data property
        const data = response.data || response;

        // Update progress from the actual API response structure
        const rawPercentage = data.progress_percentage;
        const progressPercentage = Math.round(rawPercentage || 0);

        // Create detailed progress message
        let progressMessage: string;
        if (data.is_processing) {
          const processed = data.processed_assets || 0;
          const total = data.total_assets || 0;
          const successful = data.successful_imports || 0;
          const failed = data.failed_imports || 0;

          progressMessage = `Processing: ${processed}/${total} assets (${successful} success, ${failed} failed)`;
        } else if (data.is_completed) {
          progressMessage = 'Import completed - generating report...';
        } else {
          progressMessage = data.status || 'Processing...';
        }

        const isCompleted = data.is_completed || false;

        this.updateState({
          progressPercentage,
          progressMessage,
          isCompleted,
          importResults: data
        });

        if (isCompleted) {
          // Stop the polling
          this.polling$.next();
          this.polling$.complete();
          this.handleImportComplete(data);
        }
      },
      error: (error) => {
        console.error('Error checking progress:', error);
        this.updateState({
          progressMessage: 'Error checking progress'
        });
      }
    });
  }

  /**
   * Handle import completion
   */
  private handleImportComplete(response: any): void {
    // Create completion summary
    const successful = response.successful_imports || 0;
    const failed = response.failed_imports || 0;
    const total = response.total_assets || 0;

    const progressMessage = `Import complete! ${successful} successful, ${failed} failed out of ${total} assets`;

    this.updateState({
      isImportComplete: true,
      progressMessage,
      importResults: response
    });

    // Generate CSV for failed imports if there are any
    if (failed > 0 && response.errors && response.errors.length > 0) {
      this.generateFailedImportsCSV(response.errors);
    }
  }

  /**
   * Generate CSV for failed imports
   */
  private generateFailedImportsCSV(errors: any[]): void {
    const headers = ['Asset Name', 'Error', 'Details'];
    const csvContent = [
      headers.join(','),
      ...errors.map(error => [
        `"${(error.name || '').replace(/"/g, '""')}"`,
        `"${(error.error || '').replace(/"/g, '""')}"`,
        `"${(error.details || '').replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');

    this.updateState({
      failedImportsCsvData: csvContent
    });
  }

  /**
   * Download the failed imports CSV
   */
  downloadFailedImportsCSV(): void {
    const csvData = this.currentState.failedImportsCsvData;
    if (csvData) {
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = 'failed-imports.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  /**
   * Update state
   */
  private updateState(updates: Partial<ImportProgressState>): void {
    this._state.next({
      ...this.currentState,
      ...updates
    });
  }

  /**
   * Cleanup on service destroy
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.polling$.next();
    this.polling$.complete();
  }
}