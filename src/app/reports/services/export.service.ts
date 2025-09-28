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
          // Start polling for status
          this.startStatusPolling(response.data.run_id);
          return [response.data.run_id];
        }
        throw new Error(response.data.message || 'Export request failed');
      })
    );
  }

  /**
   * Start polling for export status
   */
  private startStatusPolling(runId: number): void {
    timer(0, 2000) // Poll every 2 seconds
      .pipe(
        switchMap(() => this.reportsApi.getExportStatus(runId)),
        takeWhile(status => status.status === 'queued' || status.status === 'running', true),
        catchError(error => {
          console.error('Error polling export status:', error);
          return [];
        })
      )
      .subscribe(status => {
        const currentStatus = this.exportStatusSubject.value;
        currentStatus.set(runId, status);
        this.exportStatusSubject.next(new Map(currentStatus));
      });
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
   * Generate filename for export
   */
  generateFilename(reportKey: string, format: ExportFormat): string {
    const timestamp = new Date().toISOString().split('T')[0];
    const cleanReportKey = reportKey.replace(/\./g, '-');
    return `report-${cleanReportKey}-${timestamp}.${format}`;
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
