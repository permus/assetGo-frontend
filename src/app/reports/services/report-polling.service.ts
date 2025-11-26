import { Injectable } from '@angular/core';
import { Observable, Subject, interval, of } from 'rxjs';
import { takeUntil, switchMap, catchError, tap } from 'rxjs/operators';
import { ReportsApiService } from './reports-api.service';

export interface ExportStatus {
  id: number;
  report_key: string;
  format: string;
  status: 'queued' | 'running' | 'success' | 'failed';
  status_label: string;
  download_url?: string;
  file_size?: number;
  row_count?: number;
  execution_time_ms?: number;
  execution_time_formatted?: string;
  error_message?: string;
  created_at?: string;
  started_at?: string;
  completed_at?: string;
}

export interface PollingOptions {
  maxPolls?: number;
  pollInterval?: number; // milliseconds
  immediatePoll?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ReportPollingService {
  private activePollers = new Map<number, Subject<void>>();

  constructor(private reportsApi: ReportsApiService) {}

  /**
   * Start polling for export status
   */
  pollExportStatus(
    runId: number,
    options: PollingOptions = {}
  ): Observable<ExportStatus> {
    const {
      maxPolls = 30,
      pollInterval = 2000,
      immediatePoll = true
    } = options;

    // Stop any existing poller for this runId
    this.stopPolling(runId);

    // Create a subject to control this poller
    const stopSubject = new Subject<void>();
    this.activePollers.set(runId, stopSubject);

    let pollCount = 0;
    let isRequestInProgress = false;

    return new Observable((observer) => {
      const performPoll = () => {
        if (isRequestInProgress || pollCount >= maxPolls) {
          if (pollCount >= maxPolls) {
            observer.error(new Error('Polling timeout'));
            this.stopPolling(runId);
          }
          return;
        }

        pollCount++;
        isRequestInProgress = true;
        console.log(`[Poll ${pollCount}/${maxPolls}] Checking export status for run ${runId}...`);

        this.reportsApi.getExportStatus(runId).pipe(
          takeUntil(stopSubject),
          catchError((error) => {
            console.error(`[Poll ${pollCount}] Error checking status:`, error);
            isRequestInProgress = false;
            if (pollCount >= maxPolls) {
              observer.error(error);
              this.stopPolling(runId);
            }
            return of(null);
          })
        ).subscribe({
          next: (response) => {
            isRequestInProgress = false;

            if (!response) {
              return; // Skip null responses
            }

            if (response.success && response.data) {
              const status = response.data;
              console.log(`[Poll ${pollCount}] Status:`, status.status);

              // Emit status update
              observer.next(status);

              // Stop polling if completed or failed
              if (status.status === 'success' || status.status === 'failed') {
                observer.complete();
                this.stopPolling(runId);
              } else if (pollCount >= maxPolls) {
                observer.error(new Error('Polling timeout'));
                this.stopPolling(runId);
              } else {
                // Schedule next poll
                setTimeout(() => performPoll(), pollInterval);
              }
            } else if (pollCount >= maxPolls) {
              observer.error(new Error('Polling timeout'));
              this.stopPolling(runId);
            } else {
              // Schedule next poll even on error response
              setTimeout(() => performPoll(), pollInterval);
            }
          },
          error: (error) => {
            isRequestInProgress = false;
            if (pollCount >= maxPolls) {
              observer.error(error);
              this.stopPolling(runId);
            } else {
              setTimeout(() => performPoll(), pollInterval);
            }
          }
        });
      };

      // Start with immediate poll if requested
      if (immediatePoll) {
        performPoll();
      } else {
        setTimeout(() => performPoll(), pollInterval);
      }
    });
  }

  /**
   * Stop polling for a specific run ID
   */
  stopPolling(runId: number): void {
    const stopSubject = this.activePollers.get(runId);
    if (stopSubject) {
      stopSubject.next();
      stopSubject.complete();
      this.activePollers.delete(runId);
      console.log(`Stopped polling for run ${runId}`);
    }
  }

  /**
   * Stop all active polling
   */
  stopAllPolling(): void {
    this.activePollers.forEach((stopSubject, runId) => {
      stopSubject.next();
      stopSubject.complete();
    });
    this.activePollers.clear();
    console.log('Stopped all polling');
  }

  /**
   * Check if polling is active for a run ID
   */
  isPolling(runId: number): boolean {
    return this.activePollers.has(runId);
  }
}

