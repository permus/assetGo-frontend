import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReportConfig, ReportCategory } from '../models/reports.models';

export interface ExportState {
  runId: number | null;
  status: 'idle' | 'queued' | 'running' | 'success' | 'failed';
  downloadUrl: string | null;
  reportKey: string | null;
  format: string | null;
  errorMessage: string | null;
  executionTimeFormatted: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ReportStateService {
  private reportConfigSubject = new BehaviorSubject<ReportConfig>(this.getDefaultConfig());
  private exportStateSubject = new BehaviorSubject<ExportState>(this.getDefaultExportState());
  private selectedReportsSubject = new BehaviorSubject<string[]>([]);
  private activeTabSubject = new BehaviorSubject<ReportCategory>('assets');

  // Observables
  reportConfig$: Observable<ReportConfig> = this.reportConfigSubject.asObservable();
  exportState$: Observable<ExportState> = this.exportStateSubject.asObservable();
  selectedReports$: Observable<string[]> = this.selectedReportsSubject.asObservable();
  activeTab$: Observable<ReportCategory> = this.activeTabSubject.asObservable();

  // Getters
  get reportConfig(): ReportConfig {
    return this.reportConfigSubject.value;
  }

  get exportState(): ExportState {
    return this.exportStateSubject.value;
  }

  get selectedReports(): string[] {
    return this.selectedReportsSubject.value;
  }

  get activeTab(): ReportCategory {
    return this.activeTabSubject.value;
  }

  // Setters
  setReportConfig(config: Partial<ReportConfig>): void {
    const currentConfig = this.reportConfigSubject.value;
    this.reportConfigSubject.next({ ...currentConfig, ...config });
  }

  setExportState(state: Partial<ExportState>): void {
    const currentState = this.exportStateSubject.value;
    this.exportStateSubject.next({ ...currentState, ...state });
  }

  setSelectedReports(reports: string[]): void {
    this.selectedReportsSubject.next(reports);
  }

  toggleReportSelection(reportId: string): void {
    const current = this.selectedReportsSubject.value;
    const index = current.indexOf(reportId);
    if (index > -1) {
      this.setSelectedReports([...current.slice(0, index), ...current.slice(index + 1)]);
    } else {
      this.setSelectedReports([...current, reportId]);
    }
  }

  setActiveTab(tab: ReportCategory): void {
    this.activeTabSubject.next(tab);
  }

  // Reset methods
  resetExportState(): void {
    this.exportStateSubject.next(this.getDefaultExportState());
  }

  resetSelectedReports(): void {
    this.selectedReportsSubject.next([]);
  }

  resetReportConfig(): void {
    this.reportConfigSubject.next(this.getDefaultConfig());
  }

  // Helper methods
  private getDefaultConfig(): ReportConfig {
    return {
      dateRange: {
        start: null,
        end: null
      },
      period: 'this_month',
      page: 1,
      pageSize: 50,
      locationIds: [],
      assetIds: [],
      userIds: [],
      statusIds: [],
      priorityIds: [],
      categoryIds: [],
      search: '',
      sortBy: '',
      sortDirection: 'asc'
    };
  }

  private getDefaultExportState(): ExportState {
    return {
      runId: null,
      status: 'idle',
      downloadUrl: null,
      reportKey: null,
      format: null,
      errorMessage: null,
      executionTimeFormatted: null
    };
  }
}

