import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { switchMap, takeWhile, catchError } from 'rxjs/operators';
import { ReportsApiService } from './reports-api.service';
import { ReportRunStatus, ExportFormat } from '../models/reports.models';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  private exportStatusSubject = new BehaviorSubject<Map<number, ReportRunStatus>>(new Map());
  public exportStatus$ = this.exportStatusSubject.asObservable();
  
  // Configuration for auto-download
  private autoDownloadEnabled = true;
  
  // Track active polling subscriptions
  private activePollingSubscriptions = new Map<number, any>();

  constructor(private reportsApi: ReportsApiService) { }

  /**
   * Export report and return run ID
   */
  exportReport(reportKey: string, format: ExportFormat, params: any = {}): Observable<number> {
    return this.reportsApi.exportReport({
      report_key: reportKey,
      format: format,
      params: params
    }).pipe(
      switchMap(response => {
        if (response.success && response.data.run_id) {
          const runId = response.data.run_id;
          
          // Check if we're already tracking this run ID
          const currentStatus = this.exportStatusSubject.value;
          if (currentStatus.has(runId)) {
            console.log(`Run ID ${runId} already being tracked, skipping duplicate tracking`);
            return [runId];
          }
          
          // Add export to status tracking immediately
          const initialStatus: ReportRunStatus = {
            id: runId,
            report_key: reportKey,
            format: format,
            status: 'queued',
            status_label: 'Queued',
            row_count: 0,
            execution_time_ms: 0,
            execution_time_formatted: '0ms',
            created_at: new Date().toISOString(),
            started_at: null,
            completed_at: null,
            error_message: null,
            download_url: null,
            file_size: null
          };
          
          currentStatus.set(runId, initialStatus);
          this.exportStatusSubject.next(new Map(currentStatus));
          console.log('Export service - Added export to tracking:', runId, initialStatus);
          
          // Start polling for status
          this.startStatusPolling(runId);
          return [runId];
        }
        throw new Error(response.data.message || 'Export request failed');
      })
    );
  }

  /**
   * Start polling for export status
   */
  private startStatusPolling(runId: number): void {
    // Check if already polling this run ID
    if (this.activePollingSubscriptions.has(runId)) {
      console.log(`Already polling run ID ${runId}, skipping duplicate polling`);
      return;
    }
    
    let pollCount = 0;
    const maxPolls = 15; // Reduced to 15 polls (30 seconds max)
    
    console.log(`Starting polling for run ID ${runId}`);
    
    // Add a timeout to force stop polling after 30 seconds
    const timeoutId = setTimeout(() => {
      console.log(`Force stopping polling for run ID ${runId} after timeout`);
      this.stopPolling(runId);
    }, 30000); // 30 seconds timeout
    
    const subscription = timer(0, 2000) // Poll every 2 seconds
      .pipe(
        switchMap(() => {
          pollCount++;
          return this.reportsApi.getExportStatus(runId);
        }),
        takeWhile(response => {
          // Extract the actual status from the response
          const status = response.success ? response.data : null;
          if (!status) return false;
          
          // Stop polling if export is complete (success or failed) OR if we've reached max polls
          const isComplete = status.status === 'success' || status.status === 'failed';
          const hasReachedMaxPolls = pollCount >= maxPolls;
          
          // Continue polling only if not complete AND not reached max polls
          const shouldContinue = !isComplete && !hasReachedMaxPolls;
          
          if (!shouldContinue) {
            console.log(`Stopping polling for run ID ${runId}: complete=${isComplete}, maxPolls=${hasReachedMaxPolls}, status=${status.status}`);
          }
          
          return shouldContinue;
        }, true), // Include the final emission (e.g., success/failed) so UI and auto-download update
        catchError(error => {
          console.error('Error polling export status:', error);
          return [];
        })
      )
      .subscribe({
        next: response => {
          if (response.success && response.data) {
            const status = response.data as any;
            const currentStatus = this.exportStatusSubject.value;
            currentStatus.set(runId, status);
            this.exportStatusSubject.next(new Map(currentStatus));
            
            // Check if export completed successfully and trigger auto-download
            if (status.status === 'success' && this.autoDownloadEnabled) {
              console.log('Export completed successfully, triggering auto-download for run ID:', runId);
              this.autoDownloadExport(runId);
            }
            
            // Log completion or max polls reached
            if (status.status === 'success' || status.status === 'failed') {
              console.log(`Export polling stopped for run ID ${runId}: ${status.status}`);
              clearTimeout(timeoutId);
              this.stopPolling(runId);
            } else if (pollCount >= maxPolls) {
              console.log(`Export polling stopped for run ID ${runId}: reached max polls (${maxPolls})`);
              clearTimeout(timeoutId);
              this.stopPolling(runId);
            }
          } else {
            console.error('Export status response failed:', response);
            clearTimeout(timeoutId);
            this.stopPolling(runId);
          }
        },
        complete: () => {
          console.log(`Export polling completed for run ID ${runId}`);
          clearTimeout(timeoutId);
          this.stopPolling(runId);
        },
        error: error => {
          console.error(`Export polling error for run ID ${runId}:`, error);
          clearTimeout(timeoutId);
          this.stopPolling(runId);
        }
      });
    
    // Store the subscription for potential cleanup
    this.activePollingSubscriptions.set(runId, subscription);
  }


  /**
   * Get export status for a specific run
   */
  getExportStatus(runId: number): Observable<ReportRunStatus | undefined> {
    return new Observable(observer => {
      const subscription = this.exportStatus$.subscribe(statusMap => {
        const status = statusMap.get(runId);
        observer.next(status);
      });
      return () => subscription.unsubscribe();
    });
  }

  /**
   * Download exported file
   */
  downloadExport(runId: number, filename?: string): Observable<Blob> {
    return this.reportsApi.downloadExport(runId).pipe(
      switchMap(blob => {
        this.downloadBlob(blob, filename);
        return [blob];
      })
    );
  }

  /**
   * Auto download export when it completes successfully
   */
  private autoDownloadExport(runId: number): void {
    // Get the current status to check if download URL is available
    const currentStatus = this.exportStatusSubject.value;
    const exportStatus = currentStatus.get(runId);
    
    if (exportStatus && exportStatus.status === 'success') {
      console.log('Auto-downloading export for run ID:', runId);
      
      // Generate filename based on report key and format
      const filename = this.generateFilename(exportStatus.report_key, exportStatus.format);
      
      // Open download in new tab
      // Prefer backend-provided direct URL if available to avoid popup blockers
      if ((exportStatus as any).download_url) {
        const url = (exportStatus as any).download_url as string;
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.download = filename;
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        this.downloadInNewTab(runId, filename);
      }
    } else {
      console.warn('Cannot auto-download: export not ready for run ID:', runId);
    }
  }

  /**
   * Cancel export
   */
  cancelExport(runId: number): Observable<boolean> {
    return this.reportsApi.cancelExport(runId).pipe(
      switchMap(response => {
        if (response.success) {
          // Remove from status tracking
          const currentStatus = this.exportStatusSubject.value;
          currentStatus.delete(runId);
          this.exportStatusSubject.next(new Map(currentStatus));
          return [true];
        }
        return [false];
      })
    );
  }

  /**
   * Download blob as file
   */
  private downloadBlob(blob: Blob, filename?: string): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || `export-${Date.now()}.${this.getFileExtension(blob.type)}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  /**
   * Generate filename for export
   */
  generateFilename(reportKey: string, format: string): string {
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    const reportName = reportKey.replace(/\./g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    return `${reportName}-${timestamp}.${format}`;
  }

  /**
   * Download file in new tab using API endpoint
   */
  downloadInNewTab(runId: number, filename?: string): void {
    // Construct the API download URL
    const baseUrl = 'http://assetgo-backend.test'; // Use the same base URL as the API
    const downloadUrl = `${baseUrl}/api/reports/runs/${runId}/download`;
    
    console.log('Opening download in new tab:', downloadUrl);
    
    // Create a temporary link and click it to trigger download in new tab
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.target = '_blank'; // Open in new tab
    link.download = filename || 'export.pdf';
    link.rel = 'noopener noreferrer'; // Security best practice
    
    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Download initiated in new tab for:', filename || 'export.pdf');
  }

  /**
   * Enable or disable auto-download
   */
  setAutoDownload(enabled: boolean): void {
    this.autoDownloadEnabled = enabled;
    console.log('Auto-download', enabled ? 'enabled' : 'disabled');
  }

  /**
   * Check if auto-download is enabled
   */
  isAutoDownloadEnabled(): boolean {
    return this.autoDownloadEnabled;
  }

  /**
   * Stop polling for a specific run ID
   */
  private stopPolling(runId: number): void {
    const subscription = this.activePollingSubscriptions.get(runId);
    if (subscription) {
      subscription.unsubscribe();
      this.activePollingSubscriptions.delete(runId);
      console.log(`Stopped polling for run ID ${runId}`);
    }
  }

  /**
   * Stop all active polling
   */
  stopAllPolling(): void {
    this.activePollingSubscriptions.forEach((subscription, runId) => {
      subscription.unsubscribe();
      console.log(`Stopped polling for run ID ${runId}`);
    });
    this.activePollingSubscriptions.clear();
    console.log('Stopped all export polling');
  }

  /**
   * Force stop polling for a specific run ID (emergency stop)
   */
  forceStopPolling(runId: number): void {
    const subscription = this.activePollingSubscriptions.get(runId);
    if (subscription) {
      subscription.unsubscribe();
      this.activePollingSubscriptions.delete(runId);
      console.log(`Force stopped polling for run ID ${runId}`);
    }
  }

  /**
   * Get active polling count
   */
  getActivePollingCount(): number {
    return this.activePollingSubscriptions.size;
  }

  /**
   * Clear all export tracking data
   */
  clearAllTracking(): void {
    this.stopAllPolling();
    this.exportStatusSubject.next(new Map());
    console.log('Cleared all export tracking data');
  }

  /**
   * Get tracking status for debugging
   */
  getTrackingStatus(): { activePolling: number, trackedExports: number } {
    const trackedExports = this.exportStatusSubject.value.size;
    const activePolling = this.activePollingSubscriptions.size;
    
    console.log(`Tracking Status: ${trackedExports} exports tracked, ${activePolling} actively polling`);
    return { activePolling, trackedExports };
  }

  /**
   * Get file extension from MIME type
   */
  private getFileExtension(mimeType: string): string {
    const extensions: Record<string, string> = {
      'application/pdf': 'pdf',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
      'text/csv': 'csv',
      'application/json': 'json'
    };
    return extensions[mimeType] || 'file';
  }


  /**
   * Get export progress percentage
   */
  getExportProgress(runId: number): Observable<number> {
    return new Observable(observer => {
      const subscription = this.exportStatus$.subscribe(statusMap => {
        const status = statusMap.get(runId);
        if (status) {
          let progress = 0;
          switch (status.status) {
            case 'queued':
              progress = 10;
              break;
            case 'running':
              progress = 50;
              break;
            case 'success':
              progress = 100;
              break;
            case 'failed':
              progress = 0;
              break;
          }
          observer.next(progress);
        }
      });
      return () => subscription.unsubscribe();
    });
  }

  /**
   * Check if export is completed
   */
  isExportCompleted(runId: number): Observable<boolean> {
    return new Observable(observer => {
      const subscription = this.exportStatus$.subscribe(statusMap => {
        const status = statusMap.get(runId);
        if (status) {
          observer.next(status.status === 'success' || status.status === 'failed');
        }
      });
      return () => subscription.unsubscribe();
    });
  }

  /**
   * Get estimated time remaining
   */
  getEstimatedTimeRemaining(runId: number): Observable<string> {
    return new Observable(observer => {
      const subscription = this.exportStatus$.subscribe(statusMap => {
        const status = statusMap.get(runId);
        if (status && status.status === 'running') {
          // Simple estimation based on row count
          const estimatedSeconds = Math.max(10, Math.min(300, status.row_count / 100));
          observer.next(`${Math.ceil(estimatedSeconds)}s`);
        } else {
          observer.next('N/A');
        }
      });
      return () => subscription.unsubscribe();
    });
  }

  /**
   * Clear completed exports from memory
   */
  clearCompletedExports(): void {
    const currentStatus = this.exportStatusSubject.value;
    const filteredStatus = new Map();
    
    currentStatus.forEach((status, runId) => {
      if (status.status !== 'success' && status.status !== 'failed') {
        filteredStatus.set(runId, status);
      }
    });
    
    this.exportStatusSubject.next(filteredStatus);
  }

  /**
   * Get all active exports
   */
  getActiveExports(): Observable<ReportRunStatus[]> {
    return new Observable(observer => {
      const subscription = this.exportStatus$.subscribe(statusMap => {
        const activeExports = Array.from(statusMap.values())
          .filter(status => status.status === 'queued' || status.status === 'running');
        observer.next(activeExports);
      });
      return () => subscription.unsubscribe();
    });
  }

  /**
   * Get all recent exports (including completed ones)
   */
  getAllExports(): Observable<ReportRunStatus[]> {
    return new Observable(observer => {
      const subscription = this.exportStatus$.subscribe(statusMap => {
        const allExports = Array.from(statusMap.values());
        observer.next(allExports);
      });
      return () => subscription.unsubscribe();
    });
  }

  /**
   * Get export statistics
   */
  getExportStats(): Observable<{
    total: number;
    completed: number;
    failed: number;
    inProgress: number;
  }> {
    return new Observable(observer => {
      const subscription = this.exportStatus$.subscribe(statusMap => {
        const stats = {
          total: statusMap.size,
          completed: 0,
          failed: 0,
          inProgress: 0
        };

        statusMap.forEach(status => {
          switch (status.status) {
            case 'success':
              stats.completed++;
              break;
            case 'failed':
              stats.failed++;
              break;
            case 'queued':
            case 'running':
              stats.inProgress++;
              break;
          }
        });

        observer.next(stats);
      });
      return () => subscription.unsubscribe();
    });
  }
}
