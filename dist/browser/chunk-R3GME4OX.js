import {
  Chart,
  defaults
} from "./chunk-NKVVMDEB.js";
import {
  CurrencyService
} from "./chunk-RPSM5X2G.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ISERUI2H.js";
import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  RouterModule
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  CommonModule,
  HttpClient,
  HttpClientModule,
  HttpParams,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  BehaviorSubject,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Subject,
  ViewChild,
  catchError,
  distinctUntilChanged,
  map,
  setClassMetadata,
  switchMap,
  takeUntil,
  takeWhile,
  timer,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SCVX3V3B.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/reports/services/reports-api.service.ts
var ReportsApiService = class _ReportsApiService {
  http;
  currencyService;
  apiUrl = `${environment.apiUrl}/reports`;
  constructor(http, currencyService) {
    this.http = http;
    this.currencyService = currencyService;
  }
  // Asset Reports
  getAssetSummary(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/assets/summary`, { params }).pipe(map((res) => res.data));
  }
  getAssetUtilization(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/assets/utilization`, { params }).pipe(map((res) => res.data));
  }
  getAssetDepreciation(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/assets/depreciation`, { params }).pipe(map((res) => res.data));
  }
  getAssetWarranty(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/assets/warranty`, { params }).pipe(map((res) => res.data));
  }
  getAssetCompliance(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/assets/compliance`, { params }).pipe(map((res) => res.data));
  }
  getAvailableAssetReports() {
    return this.http.get(`${this.apiUrl}/assets/available`).pipe(map((res) => res.data));
  }
  // Maintenance Reports
  getMaintenanceSummary(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/summary`, { params }).pipe(map((res) => res.data));
  }
  getMaintenanceCompliance(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/compliance`, { params }).pipe(map((res) => res.data));
  }
  getMaintenanceCosts(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/costs`, { params }).pipe(map((res) => res.data));
  }
  getMaintenanceDowntime(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/downtime`, { params }).pipe(map((res) => res.data));
  }
  getMaintenanceFailureAnalysis(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/failure-analysis`, { params }).pipe(map((res) => res.data));
  }
  getMaintenanceTechnicianPerformance(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/technician-performance`, { params }).pipe(map((res) => res.data));
  }
  getAvailableMaintenanceReports() {
    return this.http.get(`${this.apiUrl}/maintenance/available`).pipe(map((res) => res.data));
  }
  // Export Functions
  exportReport(request) {
    return this.http.post(`${this.apiUrl}/export`, request);
  }
  getExportStatus(runId) {
    return this.http.get(`${this.apiUrl}/runs/${runId}`);
  }
  downloadExport(runId) {
    return this.http.get(`${this.apiUrl}/runs/${runId}/download`, { responseType: "blob" });
  }
  getExportHistory(page = 1, pageSize = 20, filters) {
    let params = new HttpParams().set("page", page.toString()).set("page_size", pageSize.toString());
    if (filters) {
      if (filters.status)
        params = params.set("status", filters.status);
      if (filters.format)
        params = params.set("format", filters.format);
      if (filters.report_key)
        params = params.set("report_key", filters.report_key);
    }
    return this.http.get(`${this.apiUrl}/history`, { params });
  }
  cancelExport(runId) {
    return this.http.delete(`${this.apiUrl}/runs/${runId}/cancel`);
  }
  // Filter Options
  getLocations() {
    return this.http.get(`${environment.apiUrl}/locations`);
  }
  getAssets() {
    return this.http.get(`${environment.apiUrl}/assets`);
  }
  getUsers() {
    return this.http.get(`${environment.apiUrl}/users`);
  }
  getWorkOrderStatuses() {
    return this.http.get(`${environment.apiUrl}/meta/work-orders/status`);
  }
  getWorkOrderPriorities() {
    return this.http.get(`${environment.apiUrl}/meta/work-orders/priorities`);
  }
  getWorkOrderCategories() {
    return this.http.get(`${environment.apiUrl}/meta/work-orders/categories`);
  }
  getAssetCategories() {
    return this.http.get(`${environment.apiUrl}/asset-categories`);
  }
  getAssetStatuses() {
    return this.http.get(`${environment.apiUrl}/asset-statuses`);
  }
  // Helper Methods
  buildParams(config) {
    let params = new HttpParams().set("page", config.page.toString()).set("page_size", config.pageSize.toString());
    if (config.dateRange.start) {
      params = params.set("date_from", config.dateRange.start);
    }
    if (config.dateRange.end) {
      params = params.set("date_to", config.dateRange.end);
    }
    if (config.locationIds.length > 0) {
      config.locationIds.forEach((id) => {
        params = params.append("location_ids[]", id.toString());
      });
    }
    if (config.assetIds.length > 0) {
      config.assetIds.forEach((id) => {
        params = params.append("asset_ids[]", id.toString());
      });
    }
    if (config.userIds.length > 0) {
      config.userIds.forEach((id) => {
        params = params.append("assigned_to[]", id.toString());
      });
    }
    if (config.statusIds.length > 0) {
      config.statusIds.forEach((id) => {
        params = params.append("status_id[]", id.toString());
      });
    }
    if (config.priorityIds.length > 0) {
      config.priorityIds.forEach((id) => {
        params = params.append("priority_id[]", id.toString());
      });
    }
    if (config.categoryIds.length > 0) {
      config.categoryIds.forEach((id) => {
        params = params.append("category_id[]", id.toString());
      });
    }
    if (config.search) {
      params = params.set("search", config.search);
    }
    if (config.sortBy) {
      params = params.set("sort_by", config.sortBy);
    }
    if (config.sortDirection) {
      params = params.set("sort_dir", config.sortDirection);
    }
    return params;
  }
  // Utility Methods
  formatCurrency(value) {
    const currency = this.currencyService.getCurrent();
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency
    }).format(value);
  }
  formatPercentage(value, decimals = 2) {
    return `${value.toFixed(decimals)}%`;
  }
  formatNumber(value, decimals = 0) {
    return new Intl.NumberFormat("en-AE").format(value);
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-AE");
  }
  formatDateTime(date) {
    return new Date(date).toLocaleString("en-AE");
  }
  getStatusColor(status) {
    const statusColors = {
      "active": "text-green-600 bg-green-100",
      "inactive": "text-gray-600 bg-gray-100",
      "maintenance": "text-yellow-600 bg-yellow-100",
      "completed": "text-green-600 bg-green-100",
      "in_progress": "text-blue-600 bg-blue-100",
      "pending": "text-yellow-600 bg-yellow-100",
      "cancelled": "text-red-600 bg-red-100",
      "high": "text-red-600 bg-red-100",
      "medium": "text-yellow-600 bg-yellow-100",
      "low": "text-green-600 bg-green-100",
      "success": "text-green-600 bg-green-100",
      "failed": "text-red-600 bg-red-100",
      "queued": "text-yellow-600 bg-yellow-100",
      "running": "text-blue-600 bg-blue-100"
    };
    return statusColors[status] || "text-gray-600 bg-gray-100";
  }
  getPriorityColor(priority) {
    const priorityColors = {
      "critical": "text-red-600 bg-red-100",
      "high": "text-orange-600 bg-orange-100",
      "medium": "text-yellow-600 bg-yellow-100",
      "low": "text-green-600 bg-green-100"
    };
    return priorityColors[priority] || "text-gray-600 bg-gray-100";
  }
  static \u0275fac = function ReportsApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(CurrencyService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportsApiService, factory: _ReportsApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: CurrencyService }], null);
})();

// src/app/reports/services/export.service.ts
var ExportService = class _ExportService {
  reportsApi;
  exportStatusSubject = new BehaviorSubject(/* @__PURE__ */ new Map());
  exportStatus$ = this.exportStatusSubject.asObservable();
  // Configuration for auto-download
  autoDownloadEnabled = true;
  // Track active polling subscriptions
  activePollingSubscriptions = /* @__PURE__ */ new Map();
  constructor(reportsApi) {
    this.reportsApi = reportsApi;
  }
  /**
   * Export report and return run ID
   */
  exportReport(reportKey, format, params = {}) {
    return this.reportsApi.exportReport({
      report_key: reportKey,
      format,
      params
    }).pipe(switchMap((response) => {
      if (response.success && response.data.run_id) {
        const runId = response.data.run_id;
        const currentStatus = this.exportStatusSubject.value;
        if (currentStatus.has(runId)) {
          console.log(`Run ID ${runId} already being tracked, skipping duplicate tracking`);
          return [runId];
        }
        const initialStatus = {
          id: runId,
          report_key: reportKey,
          format,
          status: "queued",
          status_label: "Queued",
          row_count: 0,
          execution_time_ms: 0,
          execution_time_formatted: "0ms",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          started_at: null,
          completed_at: null,
          error_message: null,
          download_url: null,
          file_size: null
        };
        currentStatus.set(runId, initialStatus);
        this.exportStatusSubject.next(new Map(currentStatus));
        console.log("Export service - Added export to tracking:", runId, initialStatus);
        this.startStatusPolling(runId);
        return [runId];
      }
      throw new Error(response.data.message || "Export request failed");
    }));
  }
  /**
   * Start polling for export status
   */
  startStatusPolling(runId) {
    if (this.activePollingSubscriptions.has(runId)) {
      console.log(`Already polling run ID ${runId}, skipping duplicate polling`);
      return;
    }
    let pollCount = 0;
    const maxPolls = 15;
    console.log(`Starting polling for run ID ${runId}`);
    const timeoutId = setTimeout(() => {
      console.log(`Force stopping polling for run ID ${runId} after timeout`);
      this.stopPolling(runId);
    }, 3e4);
    const subscription = timer(0, 2e3).pipe(
      switchMap(() => {
        pollCount++;
        return this.reportsApi.getExportStatus(runId);
      }),
      takeWhile((response) => {
        const status = response.success ? response.data : null;
        if (!status)
          return false;
        const isComplete = status.status === "success" || status.status === "failed";
        const hasReachedMaxPolls = pollCount >= maxPolls;
        const shouldContinue = !isComplete && !hasReachedMaxPolls;
        if (!shouldContinue) {
          console.log(`Stopping polling for run ID ${runId}: complete=${isComplete}, maxPolls=${hasReachedMaxPolls}, status=${status.status}`);
        }
        return shouldContinue;
      }, true),
      // Include the final emission (e.g., success/failed) so UI and auto-download update
      catchError((error) => {
        console.error("Error polling export status:", error);
        return [];
      })
    ).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const status = response.data;
          const currentStatus = this.exportStatusSubject.value;
          currentStatus.set(runId, status);
          this.exportStatusSubject.next(new Map(currentStatus));
          if (status.status === "success" && this.autoDownloadEnabled) {
            console.log("Export completed successfully, triggering auto-download for run ID:", runId);
            this.autoDownloadExport(runId);
          }
          if (status.status === "success" || status.status === "failed") {
            console.log(`Export polling stopped for run ID ${runId}: ${status.status}`);
            clearTimeout(timeoutId);
            this.stopPolling(runId);
          } else if (pollCount >= maxPolls) {
            console.log(`Export polling stopped for run ID ${runId}: reached max polls (${maxPolls})`);
            clearTimeout(timeoutId);
            this.stopPolling(runId);
          }
        } else {
          console.error("Export status response failed:", response);
          clearTimeout(timeoutId);
          this.stopPolling(runId);
        }
      },
      complete: () => {
        console.log(`Export polling completed for run ID ${runId}`);
        clearTimeout(timeoutId);
        this.stopPolling(runId);
      },
      error: (error) => {
        console.error(`Export polling error for run ID ${runId}:`, error);
        clearTimeout(timeoutId);
        this.stopPolling(runId);
      }
    });
    this.activePollingSubscriptions.set(runId, subscription);
  }
  /**
   * Get export status for a specific run
   */
  getExportStatus(runId) {
    return new Observable((observer) => {
      const subscription = this.exportStatus$.subscribe((statusMap) => {
        const status = statusMap.get(runId);
        observer.next(status);
      });
      return () => subscription.unsubscribe();
    });
  }
  /**
   * Download exported file
   */
  downloadExport(runId, filename) {
    return this.reportsApi.downloadExport(runId).pipe(switchMap((blob) => {
      this.downloadBlob(blob, filename);
      return [blob];
    }));
  }
  /**
   * Auto download export when it completes successfully
   */
  autoDownloadExport(runId) {
    const currentStatus = this.exportStatusSubject.value;
    const exportStatus = currentStatus.get(runId);
    if (exportStatus && exportStatus.status === "success") {
      console.log("Auto-downloading export for run ID:", runId);
      const filename = this.generateFilename(exportStatus.report_key, exportStatus.format);
      if (exportStatus.download_url) {
        const url = exportStatus.download_url;
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.download = filename;
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        this.downloadInNewTab(runId, filename);
      }
    } else {
      console.warn("Cannot auto-download: export not ready for run ID:", runId);
    }
  }
  /**
   * Cancel export
   */
  cancelExport(runId) {
    return this.reportsApi.cancelExport(runId).pipe(switchMap((response) => {
      if (response.success) {
        const currentStatus = this.exportStatusSubject.value;
        currentStatus.delete(runId);
        this.exportStatusSubject.next(new Map(currentStatus));
        return [true];
      }
      return [false];
    }));
  }
  /**
   * Download blob as file
   */
  downloadBlob(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
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
  generateFilename(reportKey, format) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/:/g, "-");
    const reportName = reportKey.replace(/\./g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    return `${reportName}-${timestamp}.${format}`;
  }
  /**
   * Download file in new tab using API endpoint
   */
  downloadInNewTab(runId, filename) {
    const baseUrl = "http://assetgo-backend.test";
    const downloadUrl = `${baseUrl}/api/reports/runs/${runId}/download`;
    console.log("Opening download in new tab:", downloadUrl);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.target = "_blank";
    link.download = filename || "export.pdf";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Download initiated in new tab for:", filename || "export.pdf");
  }
  /**
   * Enable or disable auto-download
   */
  setAutoDownload(enabled) {
    this.autoDownloadEnabled = enabled;
    console.log("Auto-download", enabled ? "enabled" : "disabled");
  }
  /**
   * Check if auto-download is enabled
   */
  isAutoDownloadEnabled() {
    return this.autoDownloadEnabled;
  }
  /**
   * Stop polling for a specific run ID
   */
  stopPolling(runId) {
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
  stopAllPolling() {
    this.activePollingSubscriptions.forEach((subscription, runId) => {
      subscription.unsubscribe();
      console.log(`Stopped polling for run ID ${runId}`);
    });
    this.activePollingSubscriptions.clear();
    console.log("Stopped all export polling");
  }
  /**
   * Force stop polling for a specific run ID (emergency stop)
   */
  forceStopPolling(runId) {
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
  getActivePollingCount() {
    return this.activePollingSubscriptions.size;
  }
  /**
   * Clear all export tracking data
   */
  clearAllTracking() {
    this.stopAllPolling();
    this.exportStatusSubject.next(/* @__PURE__ */ new Map());
    console.log("Cleared all export tracking data");
  }
  /**
   * Get tracking status for debugging
   */
  getTrackingStatus() {
    const trackedExports = this.exportStatusSubject.value.size;
    const activePolling = this.activePollingSubscriptions.size;
    console.log(`Tracking Status: ${trackedExports} exports tracked, ${activePolling} actively polling`);
    return { activePolling, trackedExports };
  }
  /**
   * Get file extension from MIME type
   */
  getFileExtension(mimeType) {
    const extensions = {
      "application/pdf": "pdf",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
      "text/csv": "csv",
      "application/json": "json"
    };
    return extensions[mimeType] || "file";
  }
  /**
   * Get export progress percentage
   */
  getExportProgress(runId) {
    return new Observable((observer) => {
      const subscription = this.exportStatus$.subscribe((statusMap) => {
        const status = statusMap.get(runId);
        if (status) {
          let progress = 0;
          switch (status.status) {
            case "queued":
              progress = 10;
              break;
            case "running":
              progress = 50;
              break;
            case "success":
              progress = 100;
              break;
            case "failed":
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
  isExportCompleted(runId) {
    return new Observable((observer) => {
      const subscription = this.exportStatus$.subscribe((statusMap) => {
        const status = statusMap.get(runId);
        if (status) {
          observer.next(status.status === "success" || status.status === "failed");
        }
      });
      return () => subscription.unsubscribe();
    });
  }
  /**
   * Get estimated time remaining
   */
  getEstimatedTimeRemaining(runId) {
    return new Observable((observer) => {
      const subscription = this.exportStatus$.subscribe((statusMap) => {
        const status = statusMap.get(runId);
        if (status && status.status === "running") {
          const estimatedSeconds = Math.max(10, Math.min(300, status.row_count / 100));
          observer.next(`${Math.ceil(estimatedSeconds)}s`);
        } else {
          observer.next("N/A");
        }
      });
      return () => subscription.unsubscribe();
    });
  }
  /**
   * Clear completed exports from memory
   */
  clearCompletedExports() {
    const currentStatus = this.exportStatusSubject.value;
    const filteredStatus = /* @__PURE__ */ new Map();
    currentStatus.forEach((status, runId) => {
      if (status.status !== "success" && status.status !== "failed") {
        filteredStatus.set(runId, status);
      }
    });
    this.exportStatusSubject.next(filteredStatus);
  }
  /**
   * Get all active exports
   */
  getActiveExports() {
    return new Observable((observer) => {
      const subscription = this.exportStatus$.subscribe((statusMap) => {
        const activeExports = Array.from(statusMap.values()).filter((status) => status.status === "queued" || status.status === "running");
        observer.next(activeExports);
      });
      return () => subscription.unsubscribe();
    });
  }
  /**
   * Get all recent exports (including completed ones)
   */
  getAllExports() {
    return new Observable((observer) => {
      const subscription = this.exportStatus$.subscribe((statusMap) => {
        const allExports = Array.from(statusMap.values());
        observer.next(allExports);
      });
      return () => subscription.unsubscribe();
    });
  }
  /**
   * Get export statistics
   */
  getExportStats() {
    return new Observable((observer) => {
      const subscription = this.exportStatus$.subscribe((statusMap) => {
        const stats = {
          total: statusMap.size,
          completed: 0,
          failed: 0,
          inProgress: 0
        };
        statusMap.forEach((status) => {
          switch (status.status) {
            case "success":
              stats.completed++;
              break;
            case "failed":
              stats.failed++;
              break;
            case "queued":
            case "running":
              stats.inProgress++;
              break;
          }
        });
        observer.next(stats);
      });
      return () => subscription.unsubscribe();
    });
  }
  static \u0275fac = function ExportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExportService)(\u0275\u0275inject(ReportsApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExportService, factory: _ExportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ReportsApiService }], null);
})();

// src/app/reports/components/reports-export-panel.component.ts
function ReportsExportPanelComponent_div_0_div_14_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 33)(1, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsExportPanelComponent_div_0_div_14_label_5_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedFormat, $event) || (ctx_r1.selectedFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 36);
    \u0275\u0275element(4, "path", 6)(5, "polyline", 7)(6, "line", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 37)(8, "span", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const fmt_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", fmt_r5.value);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedFormat);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(fmt_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fmt_r5.description);
  }
}
function ReportsExportPanelComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3, "Export Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275template(5, ReportsExportPanelComponent_div_0_div_14_label_5_Template, 12, 4, "label", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "span", 24);
    \u0275\u0275text(8, "Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 27)(10, "label", 28)(11, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsExportPanelComponent_div_0_div_14_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.includeCharts, $event) || (ctx_r1.includeCharts = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 30);
    \u0275\u0275text(13, "Include charts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 28)(15, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsExportPanelComponent_div_0_div_14_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.includeKPIs, $event) || (ctx_r1.includeKPIs = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 30);
    \u0275\u0275text(17, "Include KPIs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 28)(19, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsExportPanelComponent_div_0_div_14_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.includeFilters, $event) || (ctx_r1.includeFilters = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 30);
    \u0275\u0275text(21, "Include filters");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 23)(23, "span", 24);
    \u0275\u0275text(24, "Filename");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsExportPanelComponent_div_0_div_14_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.filename, $event) || (ctx_r1.filename = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 32);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.exportFormats);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.includeCharts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.includeKPIs);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.includeFilters);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filename);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getFilenamePreview());
  }
}
function ReportsExportPanelComponent_div_0_div_15_div_12_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exportRun_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(exportRun_r7.execution_time_formatted);
  }
}
function ReportsExportPanelComponent_div_0_div_15_div_12_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275element(2, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exportRun_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getProgress(exportRun_r7), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getProgress(exportRun_r7), "%");
  }
}
function ReportsExportPanelComponent_div_0_div_15_div_12_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_div_15_div_12_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const exportRun_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDownload(exportRun_r7));
    });
    \u0275\u0275text(1, "Download");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exportRun_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("disabled", !exportRun_r7.download_url);
  }
}
function ReportsExportPanelComponent_div_0_div_15_div_12_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_div_15_div_12_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const exportRun_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCancel(exportRun_r7));
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function ReportsExportPanelComponent_div_0_div_15_div_12_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_div_15_div_12_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const exportRun_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRetry(exportRun_r7));
    });
    \u0275\u0275text(1, "Retry");
    \u0275\u0275elementEnd();
  }
}
function ReportsExportPanelComponent_div_0_div_15_div_12_div_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exportRun_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", exportRun_r7.row_count, " rows");
  }
}
function ReportsExportPanelComponent_div_0_div_15_div_12_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportsExportPanelComponent_div_0_div_15_div_12_div_16_span_3_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exportRun_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatFileSize(exportRun_r7.file_size));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exportRun_r7.row_count);
  }
}
function ReportsExportPanelComponent_div_0_div_15_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48)(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 51)(8, "span", 52);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ReportsExportPanelComponent_div_0_div_15_div_12_span_10_Template, 2, 1, "span", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ReportsExportPanelComponent_div_0_div_15_div_12_div_11_Template, 5, 3, "div", 54);
    \u0275\u0275elementStart(12, "div", 55);
    \u0275\u0275template(13, ReportsExportPanelComponent_div_0_div_15_div_12_button_13_Template, 2, 1, "button", 56)(14, ReportsExportPanelComponent_div_0_div_15_div_12_button_14_Template, 2, 0, "button", 57)(15, ReportsExportPanelComponent_div_0_div_15_div_12_button_15_Template, 2, 0, "button", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ReportsExportPanelComponent_div_0_div_15_div_12_div_16_Template, 4, 2, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exportRun_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getReportDisplayName(exportRun_r7.report_key || "Unknown"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((exportRun_r7.format == null ? null : exportRun_r7.format.toUpperCase()) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "status-" + (exportRun_r7.status || "unknown"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", exportRun_r7.status_label || "Unknown", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exportRun_r7.execution_time_formatted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exportRun_r7.status === "queued" || exportRun_r7.status === "running");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", exportRun_r7.status === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exportRun_r7.status === "queued" || exportRun_r7.status === "running");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exportRun_r7.status === "failed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exportRun_r7.status === "success" && exportRun_r7.file_size);
  }
}
function ReportsExportPanelComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h4");
    \u0275\u0275text(3, "Export Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "button", 43);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshExports());
    });
    \u0275\u0275text(6, "Refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 43);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_div_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.forceStopAllPolling());
    });
    \u0275\u0275text(8, "Stop Polling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 43);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_div_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearExports());
    });
    \u0275\u0275text(10, "Clear");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 44);
    \u0275\u0275template(12, ReportsExportPanelComponent_div_0_div_15_div_12_Template, 17, 10, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.activeExports)("ngForTrackBy", ctx_r1.trackByRunId);
  }
}
function ReportsExportPanelComponent_div_0_div_16_div_4_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exportRun_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", exportRun_r11.execution_time_formatted, " ");
  }
}
function ReportsExportPanelComponent_div_0_div_16_div_4_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_div_16_div_4_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const exportRun_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDownload(exportRun_r11));
    });
    \u0275\u0275text(1, " Download ");
    \u0275\u0275elementEnd();
  }
}
function ReportsExportPanelComponent_div_0_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 75)(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 51)(8, "span", 52);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ReportsExportPanelComponent_div_0_div_16_div_4_span_10_Template, 2, 1, "span", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 55);
    \u0275\u0275template(12, ReportsExportPanelComponent_div_0_div_16_div_4_button_12_Template, 2, 0, "button", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exportRun_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getReportDisplayName(exportRun_r11.report_key || "Unknown"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((exportRun_r11.format == null ? null : exportRun_r11.format.toUpperCase()) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "status-" + (exportRun_r11.status || "unknown"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", exportRun_r11.status_label || "Unknown", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exportRun_r11.execution_time_formatted);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", exportRun_r11.status === "success");
  }
}
function ReportsExportPanelComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "h4");
    \u0275\u0275text(2, "Recent Exports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73);
    \u0275\u0275template(4, ReportsExportPanelComponent_div_0_div_16_div_4_Template, 13, 6, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.activeExports);
  }
}
function ReportsExportPanelComponent_div_0_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onViewHistory());
    });
    \u0275\u0275text(1, "Recent Exports");
    \u0275\u0275elementEnd();
  }
}
function ReportsExportPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5);
    \u0275\u0275element(5, "path", 6)(6, "polyline", 7)(7, "line", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Export Reports ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "line", 11)(12, "line", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275template(14, ReportsExportPanelComponent_div_0_div_14_Template, 28, 6, "div", 14)(15, ReportsExportPanelComponent_div_0_div_15_Template, 13, 2, "div", 15)(16, ReportsExportPanelComponent_div_0_div_16_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17)(18, "button", 18);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(19, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ReportsExportPanelComponent_div_0_button_20_Template, 2, 0, "button", 19);
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275listener("click", function ReportsExportPanelComponent_div_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 21);
    \u0275\u0275element(23, "path", 6)(24, "polyline", 7)(25, "line", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r1.activeExports.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeExports.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showHistory);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.showHistory);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isExporting);
    \u0275\u0275advance();
    \u0275\u0275classProp("spinning", ctx_r1.isExporting);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isExporting ? "Exporting\u2026" : "Export", " ");
  }
}
var ReportsExportPanelComponent = class _ReportsExportPanelComponent {
  exportService;
  reportsApi;
  isOpen = false;
  activeTab = "assets";
  config = {};
  selectedReports = [];
  selectedReport = "";
  close = new EventEmitter();
  exportRequest = new EventEmitter();
  destroy$ = new Subject();
  // Export options
  selectedFormat = "xlsx";
  includeCharts = true;
  includeKPIs = true;
  includeFilters = true;
  filename = "";
  // Export state
  isExporting = false;
  activeExports = [];
  showHistory = false;
  historyRuns = [];
  // Export formats
  exportFormats = [
    { value: "pdf", label: "PDF", description: "Portable Document Format" },
    { value: "xlsx", label: "Excel", description: "Microsoft Excel Spreadsheet" },
    { value: "csv", label: "CSV", description: "Comma Separated Values" },
    { value: "json", label: "JSON", description: "JavaScript Object Notation" }
  ];
  constructor(exportService, reportsApi) {
    this.exportService = exportService;
    this.reportsApi = reportsApi;
  }
  ngOnInit() {
    this.loadActiveExports();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnChanges(changes) {
    if (changes["isOpen"] && this.isOpen) {
      this.resetPanelState();
    }
  }
  /**
   * Reset modal state when opened
   */
  resetPanelState() {
    this.showHistory = false;
    this.isExporting = false;
    this.filename = "";
    this.selectedFormat = "xlsx";
    this.activeExports = [];
    this.exportService.clearAllTracking();
  }
  /**
   * Load active exports
   */
  loadActiveExports() {
    this.exportService.getAllExports().pipe(takeUntil(this.destroy$)).subscribe((exports2) => {
      console.log("Export panel - Active exports updated:", exports2);
      console.log("Export panel - Number of exports:", exports2.length);
      exports2.forEach((exportRun, index) => {
        console.log(`Export ${index + 1}:`, {
          id: exportRun.id,
          report_key: exportRun.report_key,
          format: exportRun.format,
          status: exportRun.status,
          status_label: exportRun.status_label
        });
      });
      this.activeExports = exports2;
    });
  }
  /**
   * Load recent export history
   */
  loadHistory() {
    this.reportsApi.getExportHistory(1, 10).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        const runs = res?.runs || res?.data?.runs || [];
        this.historyRuns = runs;
      },
      error: (err) => {
        console.error("Failed to load export history", err);
        this.historyRuns = [];
      }
    });
  }
  /**
   * Get filename preview
   */
  getFilenamePreview() {
    if (this.filename) {
      return `${this.filename}.${this.selectedFormat}`;
    }
    return this.exportService.generateFilename(this.getReportKey(), this.selectedFormat);
  }
  /**
   * Get report key based on active tab
   */
  getReportKey() {
    const explicit = this.selectedReports?.[0] || this.selectedReport;
    if (explicit) {
      const prefix = this.activeTab === "maintenance" ? "maintenance" : this.activeTab;
      if (explicit.includes("."))
        return explicit;
      const maintenanceMap = {
        "maintenance-summary": "maintenance.summary",
        "preventive-compliance": "maintenance.compliance",
        "maintenance-costs": "maintenance.costs",
        "equipment-downtime": "maintenance.downtime",
        "failure-analysis": "maintenance.failure_analysis",
        "technician-performance": "maintenance.technician_performance"
      };
      const assetMap = {
        "asset-summary": "assets.asset-summary",
        "asset-utilization": "assets.asset-utilization",
        "depreciation-analysis": "assets.depreciation-analysis",
        "warranty-status": "assets.warranty-status",
        "compliance-report": "assets.compliance-report"
      };
      if (prefix === "maintenance" && maintenanceMap[explicit]) {
        return maintenanceMap[explicit];
      }
      if (prefix === "assets" && assetMap[explicit]) {
        return assetMap[explicit];
      }
      const normalized = explicit.replace(/-/g, ".");
      return `${prefix}.${normalized}`;
    }
    switch (this.activeTab) {
      case "assets":
        return "assets.summary";
      case "maintenance":
        return "maintenance.summary";
      case "inventory":
        return "inventory.stock_levels";
      case "financial":
        return "financial.tco";
      default:
        return "assets.summary";
    }
  }
  /**
   * Get report name
   */
  getReportName(reportKey) {
    const names = {
      // New frontend format
      "assets.asset-summary": "Asset Summary",
      "assets.asset-utilization": "Asset Utilization",
      "assets.depreciation-analysis": "Depreciation Analysis",
      "assets.warranty-status": "Warranty Status",
      "assets.compliance-report": "Compliance Report",
      "maintenance.maintenance-summary": "Maintenance Summary",
      "maintenance.maintenance-compliance": "Maintenance Compliance",
      "maintenance.maintenance-costs": "Maintenance Costs",
      "maintenance.downtime-analysis": "Downtime Analysis",
      "maintenance.failure-analysis": "Failure Analysis",
      "maintenance.technician-performance": "Technician Performance",
      "inventory.stock-levels": "Inventory Stock Levels",
      "financial.total-cost-ownership": "Total Cost of Ownership",
      // Old format (for backward compatibility)
      "assets.summary": "Asset Summary",
      "assets.utilization": "Asset Utilization",
      "assets.depreciation": "Asset Depreciation",
      "maintenance.summary": "Maintenance Summary",
      "maintenance.compliance": "Maintenance Compliance",
      "inventory.stock_levels": "Inventory Stock Levels",
      "financial.tco": "Total Cost of Ownership"
    };
    return names[reportKey] || reportKey;
  }
  /**
   * Get status label
   */
  getStatusLabel(status) {
    const labels = {
      "queued": "Queued",
      "running": "Processing",
      "success": "Completed",
      "failed": "Failed",
      "cancelled": "Cancelled"
    };
    return labels[status] || status;
  }
  /**
   * Get progress percentage
   */
  getProgress(exportRun) {
    if (exportRun.status === "success")
      return 100;
    if (exportRun.status === "failed" || exportRun.status === "cancelled")
      return 0;
    if (exportRun.status === "queued")
      return 10;
    if (exportRun.status === "running")
      return 50;
    return 0;
  }
  /**
   * Format number
   */
  formatNumber(value) {
    return new Intl.NumberFormat("en-AE").format(value);
  }
  /**
   * Handle export
   */
  onExport() {
    this.isExporting = true;
    const exportData = {
      format: this.selectedFormat,
      params: __spreadValues({
        include_charts: this.includeCharts,
        include_kpis: this.includeKPIs,
        include_filters: this.includeFilters,
        filename: this.filename || void 0
      }, this.config)
    };
    this.exportRequest.emit(exportData);
    setTimeout(() => {
      this.isExporting = false;
    }, 2e3);
  }
  /**
   * Handle download
   */
  onDownload(exportRun) {
    const filename = this.exportService.generateFilename(exportRun.report_key, exportRun.format);
    this.exportService.downloadInNewTab(exportRun.id, filename);
  }
  /**
   * Handle cancel
   */
  onCancel(exportRun) {
    this.exportService.cancelExport(exportRun.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (success) => {
        if (success) {
          console.log("Export cancelled");
        }
      },
      error: (error) => {
        console.error("Cancel failed:", error);
      }
    });
  }
  /**
   * Handle close
   */
  onClose() {
    this.close.emit();
  }
  /**
   * Get report display name
   */
  getReportDisplayName(reportKey) {
    if (!reportKey)
      return "Unknown Report";
    return this.getReportName(reportKey);
  }
  /**
   * Format file size
   */
  formatFileSize(bytes) {
    if (!bytes || bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  /**
   * Track by run ID for ngFor
   */
  trackByRunId(index, exportRun) {
    return exportRun.id;
  }
  /**
   * Handle retry
   */
  onRetry(exportRun) {
    console.log("Retrying export:", exportRun);
  }
  /**
   * Handle view history
   */
  onViewHistory() {
    this.showHistory = true;
    this.loadHistory();
  }
  /**
   * Refresh exports manually
   */
  refreshExports() {
    console.log("Manually refreshing exports...");
    this.loadActiveExports();
  }
  /**
   * Clear all exports (for debugging)
   */
  clearExports() {
    console.log("Clearing all exports...");
    this.exportService.clearAllTracking();
    this.activeExports = [];
  }
  /**
   * Force stop all polling (emergency stop)
   */
  forceStopAllPolling() {
    console.log("Force stopping all polling...");
    this.exportService.stopAllPolling();
    this.activeExports = [];
  }
  static \u0275fac = function ReportsExportPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsExportPanelComponent)(\u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(ReportsApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsExportPanelComponent, selectors: [["app-reports-export-panel"]], inputs: { isOpen: "isOpen", activeTab: "activeTab", config: "config", selectedReports: "selectedReports", selectedReport: "selectedReport" }, outputs: { close: "close", exportRequest: "exportRequest" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "export-panel-overlay", 4, "ngIf"], [1, "export-panel-overlay"], [1, "export-panel"], [1, "panel-header"], [1, "panel-title"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "panel-icon"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7,10 12,15 17,10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "close-button", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "panel-content"], ["class", "export-options", 4, "ngIf"], ["class", "active-exports", 4, "ngIf"], ["class", "export-history", 4, "ngIf"], [1, "panel-footer"], [1, "footer-button", 3, "click"], ["class", "footer-button", 3, "click", 4, "ngIf"], [1, "footer-button", "export-button", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "button-icon"], [1, "export-options"], [1, "option-group"], [1, "option-label"], [1, "format-options"], ["class", "format-option", 4, "ngFor", "ngForOf"], [1, "parameter-options"], [1, "parameter-option"], ["type", "checkbox", 1, "parameter-checkbox", 3, "ngModelChange", "ngModel"], [1, "parameter-text"], ["type", "text", "placeholder", "Optional filename...", 1, "filename-input", 3, "ngModelChange", "ngModel"], [1, "filename-preview"], [1, "format-option"], ["type", "radio", "name", "format", 1, "format-radio", 3, "ngModelChange", "value", "ngModel"], [1, "format-content"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "format-icon"], [1, "format-info"], [1, "format-name"], [1, "format-description"], [1, "active-exports"], [1, "export-header"], [1, "debug-buttons"], ["type", "button", 1, "toolbar-button", 3, "click"], [1, "exports-list"], ["class", "export-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "export-item"], [1, "export-info"], [1, "row-header"], [1, "export-name"], [1, "export-format"], [1, "export-status"], [1, "status-badge", 3, "ngClass"], ["class", "execution-time", 4, "ngIf"], ["class", "progress-container", 4, "ngIf"], [1, "export-actions"], ["class", "action-button download-button", 3, "disabled", "click", 4, "ngIf"], ["class", "action-button cancel-button", 3, "click", 4, "ngIf"], ["class", "action-button retry-button", 3, "click", 4, "ngIf"], ["class", "file-info", 4, "ngIf"], [1, "execution-time"], [1, "progress-container"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "action-button", "download-button", 3, "click", "disabled"], [1, "action-button", "cancel-button", 3, "click"], [1, "action-button", "retry-button", 3, "click"], [1, "file-info"], [1, "file-size"], ["class", "row-count", 4, "ngIf"], [1, "row-count"], [1, "export-history"], [1, "history-list"], ["class", "export-item", 4, "ngFor", "ngForOf"], [1, "export-title"], [1, "report-name"], ["class", "action-button download-button", 3, "click", 4, "ngIf"], [1, "action-button", "download-button", 3, "click"]], template: function ReportsExportPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ReportsExportPanelComponent_div_0_Template, 27, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.export-panel-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   .panel-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: none;\n  color: #6b7280;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .option-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.75rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 0.75rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-radio[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-radio[_ngcontent-%COMP%]:checked    + .format-content[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 0.5rem;\n  background: white;\n  transition: all 0.2s;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%]   .format-icon[_ngcontent-%COMP%] {\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%]   .format-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%]   .format-info[_ngcontent-%COMP%]   .format-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%]   .format-info[_ngcontent-%COMP%]   .format-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .parameter-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .parameter-options[_ngcontent-%COMP%]   .parameter-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .parameter-options[_ngcontent-%COMP%]   .parameter-option[_ngcontent-%COMP%]   .parameter-checkbox[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: #3b82f6;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .parameter-options[_ngcontent-%COMP%]   .parameter-option[_ngcontent-%COMP%]   .parameter-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .filename-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .filename-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .filename-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .filename-preview[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-family: monospace;\n  background: #f8fafc;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  border: 1px solid #e2e8f0;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #e2e8f0;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .export-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .export-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .export-header[_ngcontent-%COMP%]   .debug-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  opacity: 0.7;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .export-header[_ngcontent-%COMP%]   .debug-buttons[_ngcontent-%COMP%]   .toolbar-button[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .export-header[_ngcontent-%COMP%]   .debug-buttons[_ngcontent-%COMP%]   .toolbar-button[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.5rem;\n  background: white;\n  transition: all 0.2s;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item.export-success[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: #f0fdf4;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item.export-failed[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item.export-running[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .row-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .row-header[_ngcontent-%COMP%]   .export-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .row-header[_ngcontent-%COMP%]   .export-format[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  background: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.25rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-status[_ngcontent-%COMP%]   .status-indicator.status-queued[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-status[_ngcontent-%COMP%]   .status-indicator.status-running[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-status[_ngcontent-%COMP%]   .status-indicator.status-success[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-status[_ngcontent-%COMP%]   .status-indicator.status-failed[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-status[_ngcontent-%COMP%]   .status-indicator.status-cancelled[_ngcontent-%COMP%] {\n  background: #6b7280;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-status[_ngcontent-%COMP%]   .status-progress[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-info[_ngcontent-%COMP%]   .export-details[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  background: white;\n  color: #374151;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-actions[_ngcontent-%COMP%]   .action-button.download-button[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n  border-color: #10b981;\n  color: #10b981;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-actions[_ngcontent-%COMP%]   .action-button.cancel-button[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .footer-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background: white;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .footer-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .footer-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .footer-button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .footer-button[_ngcontent-%COMP%]   .button-icon.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .footer-button.cancel-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .footer-button.export-button[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .footer-button.export-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .export-panel-overlay[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%] {\n    max-height: 95vh;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n    padding-top: 1.5rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .active-exports[_ngcontent-%COMP%]   .exports-list[_ngcontent-%COMP%]   .export-item[_ngcontent-%COMP%]   .export-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .footer-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    gap: 0.5rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%]   .format-icon[_ngcontent-%COMP%] {\n    width: 1rem;\n    height: 1rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%]   .format-info[_ngcontent-%COMP%]   .format-name[_ngcontent-%COMP%] {\n    font-size: 0.8125rem;\n  }\n  .export-panel-overlay[_ngcontent-%COMP%]   .export-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .option-group[_ngcontent-%COMP%]   .format-options[_ngcontent-%COMP%]   .format-option[_ngcontent-%COMP%]   .format-content[_ngcontent-%COMP%]   .format-info[_ngcontent-%COMP%]   .format-description[_ngcontent-%COMP%] {\n    font-size: 0.6875rem;\n  }\n}\n/*# sourceMappingURL=reports-export-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsExportPanelComponent, [{
    type: Component,
    args: [{ selector: "app-reports-export-panel", standalone: true, imports: [CommonModule, FormsModule], template: `<div *ngIf="isOpen" class="export-panel-overlay">\r
  <div class="export-panel">\r
    <div class="panel-header">\r
      <h3 class="panel-title">\r
        <svg class="panel-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
          <polyline points="7,10 12,15 17,10"></polyline>\r
          <line x1="12" y1="15" x2="12" y2="3"></line>\r
        </svg>\r
        Export Reports\r
      </h3>\r
      <button class="close-button" (click)="onClose()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <div class="panel-content">\r
      <!-- Export Options -->\r
      <div class="export-options" *ngIf="activeExports.length === 0">\r
        <div class="option-group">\r
          <span class="option-label">Export Format</span>\r
          <div class="format-options">\r
            <label class="format-option" *ngFor="let fmt of exportFormats">\r
              <input class="format-radio" type="radio" name="format" [value]="fmt.value" [(ngModel)]="selectedFormat">\r
              <div class="format-content">\r
                <svg class="format-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
                  <polyline points="7,10 12,15 17,10"></polyline>\r
                  <line x1="12" y1="15" x2="12" y2="3"></line>\r
                </svg>\r
                <div class="format-info">\r
                  <span class="format-name">{{ fmt.label }}</span>\r
                  <span class="format-description">{{ fmt.description }}</span>\r
                </div>\r
              </div>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <div class="option-group">\r
          <span class="option-label">Options</span>\r
          <div class="parameter-options">\r
            <label class="parameter-option">\r
              <input class="parameter-checkbox" type="checkbox" [(ngModel)]="includeCharts"> <span class="parameter-text">Include charts</span>\r
            </label>\r
            <label class="parameter-option">\r
              <input class="parameter-checkbox" type="checkbox" [(ngModel)]="includeKPIs"> <span class="parameter-text">Include KPIs</span>\r
            </label>\r
            <label class="parameter-option">\r
              <input class="parameter-checkbox" type="checkbox" [(ngModel)]="includeFilters"> <span class="parameter-text">Include filters</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <div class="option-group">\r
          <span class="option-label">Filename</span>\r
          <input class="filename-input" type="text" [(ngModel)]="filename" placeholder="Optional filename...">\r
          <div class="filename-preview">{{ getFilenamePreview() }}</div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- Active Exports -->\r
      <div class="active-exports" *ngIf="activeExports.length">\r
        <div class="export-header">\r
          <h4>Export Progress</h4>\r
          <div class="debug-buttons">\r
            <button type="button" class="toolbar-button" (click)="refreshExports()">Refresh</button>\r
            <button type="button" class="toolbar-button" (click)="forceStopAllPolling()">Stop Polling</button>\r
            <button type="button" class="toolbar-button" (click)="clearExports()">Clear</button>\r
          </div>\r
        </div>\r
\r
        <div class="exports-list">\r
          <div class="export-item" *ngFor="let exportRun of activeExports; trackBy: trackByRunId">\r
            <div class="export-info">\r
              <div class="row-header">\r
                <span class="export-name">{{ getReportDisplayName(exportRun.report_key || 'Unknown') }}</span>\r
                <span class="export-format">{{ exportRun.format?.toUpperCase() || 'N/A' }}</span>\r
              </div>\r
\r
              <div class="export-status">\r
                <span class="status-badge" [ngClass]="'status-' + (exportRun.status || 'unknown')">\r
                  {{ exportRun.status_label || 'Unknown' }}\r
                </span>\r
                <span class="execution-time" *ngIf="exportRun.execution_time_formatted">{{ exportRun.execution_time_formatted }}</span>\r
              </div>\r
            </div>\r
\r
            <!-- Progress Bar -->\r
            <div class="progress-container" *ngIf="exportRun.status === 'queued' || exportRun.status === 'running'">\r
              <div class="progress-bar">\r
                <div class="progress-fill" [style.width.%]="getProgress(exportRun)"></div>\r
              </div>\r
              <span class="progress-text">{{ getProgress(exportRun) }}%</span>\r
            </div>\r
\r
            <!-- Actions -->\r
            <div class="export-actions">\r
              <button class="action-button download-button" *ngIf="exportRun.status === 'success'" (click)="onDownload(exportRun)" [disabled]="!exportRun.download_url">Download</button>\r
              <button class="action-button cancel-button" *ngIf="exportRun.status === 'queued' || exportRun.status === 'running'" (click)="onCancel(exportRun)">Cancel</button>\r
              <button class="action-button retry-button" *ngIf="exportRun.status === 'failed'" (click)="onRetry(exportRun)">Retry</button>\r
            </div>\r
\r
            <!-- File Info -->\r
            <div class="file-info" *ngIf="exportRun.status === 'success' && exportRun.file_size">\r
              <span class="file-size">{{ formatFileSize(exportRun.file_size) }}</span>\r
              <span class="row-count" *ngIf="exportRun.row_count">{{ exportRun.row_count }} rows</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Export History (placeholder) -->\r
      <div class="export-history" *ngIf="showHistory">\r
        <h4>Recent Exports</h4>\r
        <div class="history-list">\r
          <div class="export-item" *ngFor="let exportRun of activeExports">\r
            <div class="export-info">\r
              <div class="export-title">\r
                <span class="report-name">{{ getReportDisplayName(exportRun.report_key || 'Unknown') }}</span>\r
                <span class="export-format">{{ exportRun.format?.toUpperCase() || 'N/A' }}</span>\r
              </div>\r
              <div class="export-status">\r
                <span class="status-badge" [ngClass]="'status-' + (exportRun.status || 'unknown')">\r
                  {{ exportRun.status_label || 'Unknown' }}\r
                </span>\r
                <span class="execution-time" *ngIf="exportRun.execution_time_formatted">\r
                  {{ exportRun.execution_time_formatted }}\r
                </span>\r
              </div>\r
            </div>\r
            <div class="export-actions">\r
              <button class="action-button download-button" *ngIf="exportRun.status === 'success'" (click)="onDownload(exportRun)">\r
                Download\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="panel-footer">\r
      <button class="footer-button" (click)="onClose()">Close</button>\r
      <button class="footer-button" (click)="onViewHistory()" *ngIf="!showHistory">Recent Exports</button>\r
      <button class="footer-button export-button" (click)="onExport()" [disabled]="isExporting">\r
        <svg class="button-icon" [class.spinning]="isExporting" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
          <polyline points="7,10 12,15 17,10"></polyline>\r
          <line x1="12" y1="15" x2="12" y2="3"></line>\r
        </svg>\r
        {{ isExporting ? 'Exporting\u2026' : 'Export' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/reports/components/reports-export-panel.component.scss */\n.export-panel-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.export-panel-overlay .export-panel {\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.export-panel-overlay .export-panel .panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.export-panel-overlay .export-panel .panel-header .panel-title {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.export-panel-overlay .export-panel .panel-header .panel-title .panel-icon {\n  color: #3b82f6;\n}\n.export-panel-overlay .export-panel .panel-header .close-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: none;\n  color: #6b7280;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.export-panel-overlay .export-panel .panel-header .close-button:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.export-panel-overlay .export-panel .panel-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group {\n  margin-bottom: 2rem;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .option-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.75rem;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 0.75rem;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option {\n  position: relative;\n  cursor: pointer;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-radio {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-radio:checked + .format-content {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 0.5rem;\n  background: white;\n  transition: all 0.2s;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content .format-icon {\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content .format-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content .format-info .format-name {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content .format-info .format-description {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .parameter-options {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .parameter-options .parameter-option {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .parameter-options .parameter-option .parameter-checkbox {\n  width: 1rem;\n  height: 1rem;\n  accent-color: #3b82f6;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .parameter-options .parameter-option .parameter-text {\n  font-size: 0.875rem;\n  color: #374151;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .filename-input {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .filename-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .filename-input::placeholder {\n  color: #9ca3af;\n}\n.export-panel-overlay .export-panel .panel-content .export-options .option-group .filename-preview {\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-family: monospace;\n  background: #f8fafc;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  border: 1px solid #e2e8f0;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #e2e8f0;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .export-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .export-header h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .export-header .debug-buttons {\n  display: flex;\n  gap: 0.5rem;\n  opacity: 0.7;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .export-header .debug-buttons .toolbar-button {\n  background: none;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .export-header .debug-buttons .toolbar-button:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.5rem;\n  background: white;\n  transition: all 0.2s;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item.export-success {\n  border-color: #10b981;\n  background: #f0fdf4;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item.export-failed {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item.export-running {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info {\n  flex: 1;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .row-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .row-header .export-name {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .row-header .export-format {\n  font-size: 0.75rem;\n  color: #6b7280;\n  background: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-status {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.25rem;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-status .status-indicator {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-status .status-indicator.status-queued {\n  background: #f59e0b;\n  animation: pulse 2s infinite;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-status .status-indicator.status-running {\n  background: #3b82f6;\n  animation: pulse 2s infinite;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-status .status-indicator.status-success {\n  background: #10b981;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-status .status-indicator.status-failed {\n  background: #ef4444;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-status .status-indicator.status-cancelled {\n  background: #6b7280;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-status .status-text {\n  font-size: 0.8125rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-status .status-progress {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-info .export-details {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-actions .action-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  background: white;\n  color: #374151;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-actions .action-button:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-actions .action-button.download-button:hover {\n  background: #f0fdf4;\n  border-color: #10b981;\n  color: #10b981;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-actions .action-button.cancel-button:hover {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-actions .action-button svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.export-panel-overlay .export-panel .panel-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.export-panel-overlay .export-panel .panel-footer .footer-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background: white;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.export-panel-overlay .export-panel .panel-footer .footer-button:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.export-panel-overlay .export-panel .panel-footer .footer-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.export-panel-overlay .export-panel .panel-footer .footer-button .button-icon {\n  width: 1rem;\n  height: 1rem;\n}\n.export-panel-overlay .export-panel .panel-footer .footer-button .button-icon.spinning {\n  animation: spin 1s linear infinite;\n}\n.export-panel-overlay .export-panel .panel-footer .footer-button.cancel-button:hover:not(:disabled) {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n.export-panel-overlay .export-panel .panel-footer .footer-button.export-button {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n.export-panel-overlay .export-panel .panel-footer .footer-button.export-button:hover:not(:disabled) {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .export-panel-overlay {\n    padding: 0.5rem;\n  }\n  .export-panel-overlay .export-panel {\n    max-height: 95vh;\n  }\n  .export-panel-overlay .export-panel .panel-header {\n    padding: 1rem;\n  }\n  .export-panel-overlay .export-panel .panel-header .panel-title {\n    font-size: 1.125rem;\n  }\n  .export-panel-overlay .export-panel .panel-content {\n    padding: 1rem;\n  }\n  .export-panel-overlay .export-panel .panel-content .export-options .option-group {\n    margin-bottom: 1.5rem;\n  }\n  .export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options {\n    grid-template-columns: 1fr;\n  }\n  .export-panel-overlay .export-panel .panel-content .active-exports {\n    margin-top: 1.5rem;\n    padding-top: 1.5rem;\n  }\n  .export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .export-panel-overlay .export-panel .panel-content .active-exports .exports-list .export-item .export-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .export-panel-overlay .export-panel .panel-footer {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .export-panel-overlay .export-panel .panel-footer .footer-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content {\n    padding: 0.75rem;\n    gap: 0.5rem;\n  }\n  .export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content .format-icon {\n    width: 1rem;\n    height: 1rem;\n  }\n  .export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content .format-info .format-name {\n    font-size: 0.8125rem;\n  }\n  .export-panel-overlay .export-panel .panel-content .export-options .option-group .format-options .format-option .format-content .format-info .format-description {\n    font-size: 0.6875rem;\n  }\n}\n/*# sourceMappingURL=reports-export-panel.component.css.map */\n"] }]
  }], () => [{ type: ExportService }, { type: ReportsApiService }], { isOpen: [{
    type: Input
  }], activeTab: [{
    type: Input
  }], config: [{
    type: Input
  }], selectedReports: [{
    type: Input
  }], selectedReport: [{
    type: Input
  }], close: [{
    type: Output
  }], exportRequest: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsExportPanelComponent, { className: "ReportsExportPanelComponent", filePath: "src/app/reports/components/reports-export-panel.component.ts", lineNumber: 16 });
})();

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol = root_default.Symbol;
var Symbol_default = Symbol;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_baseCreate.js
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject_default(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate_default = baseCreate;

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default = copyArray;

// node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var isIndex_default = isIndex;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assignValue.js
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default = copyObject;

// node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default = baseRest;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default = isIterateeCall;

// node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return baseRest_default(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var createAssigner_default = createAssigner;

// node_modules/lodash-es/_isPrototype.js
var objectProto5 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto6 = Object.prototype;
var hasOwnProperty4 = objectProto6.hasOwnProperty;
var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
var isArguments = baseIsArguments_default(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty5 = objectProto7.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default = nativeKeysIn;

// node_modules/lodash-es/_baseKeysIn.js
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty6.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var baseKeysIn_default = baseKeysIn;

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default = keysIn;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty7.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty8.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/lodash-es/isPlainObject.js
var objectTag2 = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto11 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty9.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_cloneBuffer.js
var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
var Buffer2 = moduleExports3 ? root_default.Buffer : void 0;
var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var cloneBuffer_default = cloneBuffer;

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array = root_default.Uint8Array;
var Uint8Array_default = Uint8Array;

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default = cloneArrayBuffer;

// node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default = cloneTypedArray;

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default = initCloneObject;

// node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// node_modules/lodash-es/_assignMergeValue.js
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignMergeValue_default = assignMergeValue;

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// node_modules/lodash-es/_safeGet.js
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var safeGet_default = safeGet;

// node_modules/lodash-es/toPlainObject.js
function toPlainObject(value) {
  return copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default = toPlainObject;

// node_modules/lodash-es/_baseMergeDeep.js
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue_default(object, key, newValue);
}
var baseMergeDeep_default = baseMergeDeep;

// node_modules/lodash-es/_baseMerge.js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor_default(source, function(srcValue, key) {
    stack || (stack = new Stack_default());
    if (isObject_default(srcValue)) {
      baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue_default(object, key, newValue);
    }
  }, keysIn_default);
}
var baseMerge_default = baseMerge;

// node_modules/lodash-es/merge.js
var merge = createAssigner_default(function(object, source, srcIndex) {
  baseMerge_default(object, source, srcIndex);
});
var merge_default = merge;

// node_modules/ng2-charts/fesm2022/ng2-charts.mjs
var NG_CHARTS_CONFIGURATION = new InjectionToken("Configuration for ngCharts");
var ThemeService = class _ThemeService {
  constructor() {
    this.colorschemesOptions = new BehaviorSubject(void 0);
  }
  setColorschemesOptions(options) {
    this.pColorschemesOptions = options;
    this.colorschemesOptions.next(options);
  }
  getColorschemesOptions() {
    return this.pColorschemesOptions;
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ThemeService,
      factory: _ThemeService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BaseChartDirective = class _BaseChartDirective {
  constructor(element, zone, themeService, config) {
    this.zone = zone;
    this.themeService = themeService;
    this.type = "bar";
    this.plugins = [];
    this.chartClick = new EventEmitter();
    this.chartHover = new EventEmitter();
    this.subs = [];
    this.themeOverrides = {};
    if (config?.registerables) {
      Chart.register(...config.registerables);
    }
    if (config?.defaults) {
      defaults.set(config.defaults);
    }
    this.ctx = element.nativeElement.getContext("2d");
    this.subs.push(this.themeService.colorschemesOptions.pipe(distinctUntilChanged()).subscribe((r) => this.themeChanged(r)));
  }
  ngOnChanges(changes) {
    const requireRender = ["type"];
    const propertyNames = Object.getOwnPropertyNames(changes);
    if (propertyNames.some((key) => requireRender.includes(key)) || propertyNames.every((key) => changes[key].isFirstChange())) {
      this.render();
    } else {
      const config = this.getChartConfiguration();
      if (this.chart) {
        Object.assign(this.chart.config.data, config.data);
        if (this.chart.config.plugins) {
          Object.assign(this.chart.config.plugins, config.plugins);
        }
        if (this.chart.config.options) {
          Object.assign(this.chart.config.options, config.options);
        }
      }
      this.update();
    }
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
    this.subs.forEach((s) => s.unsubscribe());
  }
  render() {
    if (this.chart) {
      this.chart.destroy();
    }
    return this.zone.runOutsideAngular(() => this.chart = new Chart(this.ctx, this.getChartConfiguration()));
  }
  update(mode) {
    if (this.chart) {
      this.zone.runOutsideAngular(() => this.chart?.update(mode));
    }
  }
  hideDataset(index, hidden) {
    if (this.chart) {
      this.chart.getDatasetMeta(index).hidden = hidden;
      this.update();
    }
  }
  isDatasetHidden(index) {
    return this.chart?.getDatasetMeta(index)?.hidden;
  }
  toBase64Image() {
    return this.chart?.toBase64Image();
  }
  themeChanged(options) {
    this.themeOverrides = options;
    if (this.chart) {
      if (this.chart.config.options) {
        Object.assign(this.chart.config.options, this.getChartOptions());
      }
      this.update();
    }
  }
  getChartOptions() {
    return merge_default({
      onHover: (event, active) => {
        if (!this.chartHover.observed && !this.chartHover.observers?.length) {
          return;
        }
        this.zone.run(() => this.chartHover.emit({
          event,
          active
        }));
      },
      onClick: (event, active) => {
        if (!this.chartClick.observed && !this.chartClick.observers?.length) {
          return;
        }
        this.zone.run(() => this.chartClick.emit({
          event,
          active
        }));
      }
    }, this.themeOverrides, this.options, {
      plugins: {
        legend: {
          display: this.legend
        }
      }
    });
  }
  getChartConfiguration() {
    return {
      type: this.type,
      data: this.getChartData(),
      options: this.getChartOptions(),
      plugins: this.plugins
    };
  }
  getChartData() {
    return this.data ? this.data : {
      labels: this.labels || [],
      datasets: this.datasets || []
    };
  }
  static {
    this.\u0275fac = function BaseChartDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseChartDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(NG_CHARTS_CONFIGURATION, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseChartDirective,
      selectors: [["canvas", "baseChart", ""]],
      inputs: {
        type: "type",
        legend: "legend",
        data: "data",
        options: "options",
        plugins: "plugins",
        labels: "labels",
        datasets: "datasets"
      },
      outputs: {
        chartClick: "chartClick",
        chartHover: "chartHover"
      },
      exportAs: ["base-chart"],
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseChartDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "canvas[baseChart]",
      exportAs: "base-chart",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ThemeService
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_CHARTS_CONFIGURATION]
    }]
  }], {
    type: [{
      type: Input
    }],
    legend: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    plugins: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    datasets: [{
      type: Input
    }],
    chartClick: [{
      type: Output
    }],
    chartHover: [{
      type: Output
    }]
  });
})();

// src/app/reports/components/charts/pie-chart.component.ts
var PieChartComponent = class _PieChartComponent {
  chart;
  data = [];
  title = "";
  height = 300;
  showLegend = true;
  chartType = "pie";
  chartData;
  chartOptions = {};
  ngOnInit() {
    this.initializeChart();
  }
  initializeChart() {
    const defaultColors = [
      "#4F46E5",
      // Indigo
      "#10B981",
      // Green
      "#F59E0B",
      // Amber
      "#EF4444",
      // Red
      "#8B5CF6",
      // Purple
      "#06B6D4",
      // Cyan
      "#F97316",
      // Orange
      "#EC4899"
      // Pink
    ];
    this.chartData = {
      labels: this.data.map((d) => d.label),
      datasets: [{
        data: this.data.map((d) => d.value),
        backgroundColor: this.data.map((d, i) => d.color || defaultColors[i % defaultColors.length]),
        borderWidth: 2,
        borderColor: "#FFFFFF"
      }]
    };
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.5,
      plugins: {
        legend: {
          display: this.showLegend,
          position: "bottom",
          labels: {
            padding: 10,
            font: {
              size: 11
            }
          }
        },
        title: {
          display: !!this.title,
          text: this.title,
          font: {
            size: 16,
            weight: "bold"
          },
          padding: {
            top: 10,
            bottom: 20
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.label || "";
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = (value / total * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    };
  }
  updateChart() {
    this.initializeChart();
    this.chart?.update();
  }
  static \u0275fac = function PieChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PieChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PieChartComponent, selectors: [["app-pie-chart"]], viewQuery: function PieChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(BaseChartDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, inputs: { data: "data", title: "title", height: "height", showLegend: "showLegend" }, decls: 2, vars: 5, consts: [[1, "chart-container"], ["baseChart", "", 3, "data", "type", "options"]], template: function PieChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "canvas", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("height", ctx.height, "px");
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.chartData)("type", ctx.chartType)("options", ctx.chartOptions);
    }
  }, dependencies: [CommonModule, BaseChartDirective], styles: ["\n\n.chart-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-height: 350px;\n  min-height: 250px;\n}\ncanvas[_ngcontent-%COMP%] {\n  max-height: 100% !important;\n}\n/*# sourceMappingURL=pie-chart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PieChartComponent, [{
    type: Component,
    args: [{ selector: "app-pie-chart", standalone: true, imports: [CommonModule, BaseChartDirective], template: `
    <div class="chart-container" [style.height.px]="height">
      <canvas
        baseChart
        [data]="chartData"
        [type]="chartType"
        [options]="chartOptions">
      </canvas>
    </div>
  `, styles: ["/* angular:styles/component:scss;51e98e5ab3d9158e659ace25f6cc5e2065ad689bb727959922319f50c7b57648;D:/laragon-2025/www/assetGo-backend/assetGo-frontend/src/app/reports/components/charts/pie-chart.component.ts */\n.chart-container {\n  position: relative;\n  width: 100%;\n  max-height: 350px;\n  min-height: 250px;\n}\ncanvas {\n  max-height: 100% !important;\n}\n/*# sourceMappingURL=pie-chart.component.css.map */\n"] }]
  }], null, { chart: [{
    type: ViewChild,
    args: [BaseChartDirective]
  }], data: [{
    type: Input
  }], title: [{
    type: Input
  }], height: [{
    type: Input
  }], showLegend: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PieChartComponent, { className: "PieChartComponent", filePath: "src/app/reports/components/charts/pie-chart.component.ts", lineNumber: 32 });
})();

// src/app/reports/components/charts/bar-chart.component.ts
var BarChartComponent = class _BarChartComponent {
  chart;
  data = [];
  title = "";
  height = 300;
  horizontal = false;
  showLegend = false;
  color = "#4F46E5";
  chartType = "bar";
  chartData;
  chartOptions = {};
  ngOnInit() {
    this.chartType = this.horizontal ? "bar" : "bar";
    this.initializeChart();
  }
  initializeChart() {
    this.chartData = {
      labels: this.data.map((d) => d.label),
      datasets: [{
        label: this.title,
        data: this.data.map((d) => d.value),
        backgroundColor: this.color,
        borderColor: this.color,
        borderWidth: 0,
        borderRadius: 4
      }]
    };
    this.chartOptions = {
      indexAxis: this.horizontal ? "y" : "x",
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.8,
      plugins: {
        legend: {
          display: this.showLegend,
          position: "top"
        },
        title: {
          display: !!this.title,
          text: this.title,
          font: {
            size: 16,
            weight: "bold"
          },
          padding: {
            top: 10,
            bottom: 20
          }
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
          cornerRadius: 6
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 11
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0, 0, 0, 0.05)"
          },
          ticks: {
            font: {
              size: 11
            }
          }
        }
      }
    };
  }
  updateChart() {
    this.initializeChart();
    this.chart?.update();
  }
  static \u0275fac = function BarChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarChartComponent, selectors: [["app-bar-chart"]], viewQuery: function BarChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(BaseChartDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, inputs: { data: "data", title: "title", height: "height", horizontal: "horizontal", showLegend: "showLegend", color: "color" }, decls: 2, vars: 5, consts: [[1, "chart-container"], ["baseChart", "", 3, "data", "type", "options"]], template: function BarChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "canvas", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("height", ctx.height, "px");
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.chartData)("type", ctx.chartType)("options", ctx.chartOptions);
    }
  }, dependencies: [CommonModule, BaseChartDirective], styles: ["\n\n.chart-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-height: 350px;\n  min-height: 250px;\n}\ncanvas[_ngcontent-%COMP%] {\n  max-height: 100% !important;\n}\n/*# sourceMappingURL=bar-chart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarChartComponent, [{
    type: Component,
    args: [{ selector: "app-bar-chart", standalone: true, imports: [CommonModule, BaseChartDirective], template: `
    <div class="chart-container" [style.height.px]="height">
      <canvas
        baseChart
        [data]="chartData"
        [type]="chartType"
        [options]="chartOptions">
      </canvas>
    </div>
  `, styles: ["/* angular:styles/component:scss;51e98e5ab3d9158e659ace25f6cc5e2065ad689bb727959922319f50c7b57648;D:/laragon-2025/www/assetGo-backend/assetGo-frontend/src/app/reports/components/charts/bar-chart.component.ts */\n.chart-container {\n  position: relative;\n  width: 100%;\n  max-height: 350px;\n  min-height: 250px;\n}\ncanvas {\n  max-height: 100% !important;\n}\n/*# sourceMappingURL=bar-chart.component.css.map */\n"] }]
  }], null, { chart: [{
    type: ViewChild,
    args: [BaseChartDirective]
  }], data: [{
    type: Input
  }], title: [{
    type: Input
  }], height: [{
    type: Input
  }], horizontal: [{
    type: Input
  }], showLegend: [{
    type: Input
  }], color: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarChartComponent, { className: "BarChartComponent", filePath: "src/app/reports/components/charts/bar-chart.component.ts", lineNumber: 32 });
})();

// src/app/reports/pages/reports.page.ts
function ReportsPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h3");
    \u0275\u0275text(2, "Debug Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Component loaded: ", ctx_r0.getCurrentTime(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Active Tab: ", ctx_r0.activeTab, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Is Loading: ", ctx_r0.isLoading, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Has Data: ", ctx_r0.hasData, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Error Message: ", ctx_r0.errorMessage, "");
  }
}
function ReportsPage_button_24_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ReportsPage_button_24_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTabChange(tab_r3.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 26)(3, "path", 27)(4, "path", 28)(5, "path", 29)(6, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275template(8, ReportsPage_button_24_span_8_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeTab === tab_r3.id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", tab_r3.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r3.id === "custom");
  }
}
function ReportsPage_div_27_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Generate Selected Reports (", ctx_r0.selectedReports.length, ")");
  }
}
function ReportsPage_div_27_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Generating Report... ");
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_27_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "h3");
    \u0275\u0275text(3, "Asset Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Key metrics and statistics for your asset portfolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66)(7, "div", 67)(8, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 48);
    \u0275\u0275element(10, "path", 69)(11, "polyline", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 71)(13, "div", 72);
    \u0275\u0275text(14, "Total Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 73);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 67)(18, "div", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 48);
    \u0275\u0275element(20, "line", 75)(21, "path", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 71)(23, "div", 72);
    \u0275\u0275text(24, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 73);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 67)(28, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 48);
    \u0275\u0275element(30, "polyline", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div", 71)(32, "div", 72);
    \u0275\u0275text(33, "Active Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 73);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 67)(37, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 48);
    \u0275\u0275element(39, "path", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 71)(41, "div", 72);
    \u0275\u0275text(42, "In Maintenance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 73);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(45, "div", 80)(46, "h3");
    \u0275\u0275text(47, "Asset Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p");
    \u0275\u0275text(49, "Visual representation of your asset data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 81)(51, "div", 82)(52, "h4");
    \u0275\u0275text(53, "Assets by Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "app-pie-chart", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 84)(56, "h4");
    \u0275\u0275text(57, "Assets by Category");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "app-bar-chart", 85);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate((ctx_r0.assetSummaryData == null ? null : ctx_r0.assetSummaryData.totals == null ? null : ctx_r0.assetSummaryData.totals.total_count) || 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("$", ctx_r0.formatNumber((ctx_r0.assetSummaryData == null ? null : ctx_r0.assetSummaryData.totals == null ? null : ctx_r0.assetSummaryData.totals.total_value) || 0), "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r0.assetSummaryData == null ? null : ctx_r0.assetSummaryData.totals == null ? null : ctx_r0.assetSummaryData.totals.active_count) || 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r0.assetSummaryData == null ? null : ctx_r0.assetSummaryData.totals == null ? null : ctx_r0.assetSummaryData.totals.maintenance_count) || 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("data", ctx_r0.getStatusChartData())("height", 280)("showLegend", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r0.getCategoryChartData())("height", 280)("horizontal", false)("color", "#4F46E5");
  }
}
function ReportsPage_div_27_div_62__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "polyline", 95);
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_27_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "input", 87);
    \u0275\u0275listener("change", function ReportsPage_div_27_div_62_Template_input_change_1_listener($event) {
      const report_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onReportSelectionChange(report_r6.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 88)(3, "div", 89);
    \u0275\u0275template(4, ReportsPage_div_27_div_62__svg_svg_4_Template, 2, 0, "svg", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 92);
    \u0275\u0275element(7, "path", 26)(8, "path", 27)(9, "path", 28)(10, "path", 29)(11, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 93)(13, "h4");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 94);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const report_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", report_r6.id)("value", report_r6.id)("checked", ctx_r0.isReportSelected(report_r6.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r0.isReportSelected(report_r6.id));
    \u0275\u0275property("for", report_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isReportSelected(report_r6.id));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(report_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r6.estimatedTime);
  }
}
function ReportsPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "h3");
    \u0275\u0275text(4, "Report Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Configure your asset reports with custom date ranges and filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "div", 37)(9, "label");
    \u0275\u0275text(10, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_27_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.start, $event) || (ctx_r0.reportConfig.dateRange.start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "label");
    \u0275\u0275text(14, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_27_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.end, $event) || (ctx_r0.reportConfig.dateRange.end = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label");
    \u0275\u0275text(18, "Export Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_27_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.exportFormat, $event) || (ctx_r0.exportFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 40);
    \u0275\u0275text(21, "PDF Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 41);
    \u0275\u0275text(23, "Excel Spreadsheet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 42);
    \u0275\u0275text(25, "CSV File");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 43);
    \u0275\u0275listener("click", function ReportsPage_div_27_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onGenerateSelectedReports());
    });
    \u0275\u0275template(27, ReportsPage_div_27_span_27_Template, 2, 1, "span", 44)(28, ReportsPage_div_27_span_28_Template, 3, 0, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 46)(30, "h3");
    \u0275\u0275text(31, "Quick Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Generate commonly requested reports instantly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 47);
    \u0275\u0275listener("click", function ReportsPage_div_27_Template_div_click_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("current-month"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 48);
    \u0275\u0275element(36, "rect", 49)(37, "line", 50)(38, "line", 51)(39, "line", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Current Month Asset Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 47);
    \u0275\u0275listener("click", function ReportsPage_div_27_Template_div_click_42_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("performance"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 48);
    \u0275\u0275element(44, "path", 53)(45, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "Asset Performance Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 47);
    \u0275\u0275listener("click", function ReportsPage_div_27_Template_div_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("warranty"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 48);
    \u0275\u0275element(50, "path", 55)(51, "path", 56)(52, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Warranty Expiring This Quarter");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(55, ReportsPage_div_27_div_55_Template, 59, 11, "div", 58);
    \u0275\u0275elementStart(56, "div", 59)(57, "h3");
    \u0275\u0275text(58, "Available Asset Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p");
    \u0275\u0275text(60, "Select the reports you want to generate. Multiple reports can be combined into a single export.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 60);
    \u0275\u0275template(62, ReportsPage_div_27_div_62_Template, 19, 10, "div", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reportConfig.dateRange.start);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reportConfig.dateRange.end);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.exportFormat);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.selectedReports.length === 0 || ctx_r0.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isGenerating);
    \u0275\u0275advance(27);
    \u0275\u0275property("ngIf", ctx_r0.assetSummaryData);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.assetReports);
  }
}
function ReportsPage_div_28_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Generate Selected Reports (", ctx_r0.selectedReports.length, ")");
  }
}
function ReportsPage_div_28_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Generating Report... ");
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_28_div_62__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "polyline", 95);
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_28_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "input", 109);
    \u0275\u0275listener("change", function ReportsPage_div_28_div_62_Template_input_change_1_listener($event) {
      const report_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onReportSelectionChange(report_r9.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 88)(3, "div", 89);
    \u0275\u0275template(4, ReportsPage_div_28_div_62__svg_svg_4_Template, 2, 0, "svg", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 92);
    \u0275\u0275element(7, "path", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 93)(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 94);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const report_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", report_r9.id)("value", report_r9.id)("checked", ctx_r0.isReportSelected(report_r9.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r0.isReportSelected(report_r9.id));
    \u0275\u0275property("for", report_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isReportSelected(report_r9.id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(report_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r9.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r9.estimatedTime);
  }
}
function ReportsPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "h3");
    \u0275\u0275text(4, "Report Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Configure your maintenance reports with custom date ranges and filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "div", 37)(9, "label");
    \u0275\u0275text(10, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_28_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.start, $event) || (ctx_r0.reportConfig.dateRange.start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "label");
    \u0275\u0275text(14, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_28_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.end, $event) || (ctx_r0.reportConfig.dateRange.end = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label");
    \u0275\u0275text(18, "Export Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_28_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.exportFormat, $event) || (ctx_r0.exportFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 40);
    \u0275\u0275text(21, "PDF Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 41);
    \u0275\u0275text(23, "Excel Spreadsheet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 42);
    \u0275\u0275text(25, "CSV File");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 43);
    \u0275\u0275listener("click", function ReportsPage_div_28_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onGenerateSelectedReports());
    });
    \u0275\u0275template(27, ReportsPage_div_28_span_27_Template, 2, 1, "span", 44)(28, ReportsPage_div_28_span_28_Template, 3, 0, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 46)(30, "h3");
    \u0275\u0275text(31, "Quick Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Generate commonly requested reports instantly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 47);
    \u0275\u0275listener("click", function ReportsPage_div_28_Template_div_click_34_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("monthly-summary"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 48);
    \u0275\u0275element(36, "rect", 49)(37, "line", 50)(38, "line", 51)(39, "line", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Monthly Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 47);
    \u0275\u0275listener("click", function ReportsPage_div_28_Template_div_click_42_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("overdue-tasks"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 48);
    \u0275\u0275element(44, "path", 96)(45, "line", 97)(46, "line", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Overdue Tasks");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 59)(50, "h3");
    \u0275\u0275text(51, "Available Maintenance Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53, "Select the reports you want to generate. Multiple reports can be combined into a single export.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 99)(55, "button", 100);
    \u0275\u0275listener("click", function ReportsPage_div_28_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onExport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 9);
    \u0275\u0275element(57, "path", 15)(58, "polyline", 101)(59, "line", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Export Selected ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "div", 60);
    \u0275\u0275template(62, ReportsPage_div_28_div_62_Template, 15, 10, "div", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 103)(64, "div", 104)(65, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 92);
    \u0275\u0275element(67, "circle", 106)(68, "polyline", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(69, "div", 108)(70, "h4");
    \u0275\u0275text(71, "MTTR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 73);
    \u0275\u0275text(73, "4.2h");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 104)(75, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(76, "svg", 92);
    \u0275\u0275element(77, "path", 53)(78, "path", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(79, "div", 108)(80, "h4");
    \u0275\u0275text(81, "MTBF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 73);
    \u0275\u0275text(83, "168h");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 104)(85, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(86, "svg", 92);
    \u0275\u0275element(87, "rect", 49)(88, "line", 50)(89, "line", 51)(90, "line", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(91, "div", 108)(92, "h4");
    \u0275\u0275text(93, "Compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span", 73);
    \u0275\u0275text(95, "94%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 104)(97, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(98, "svg", 92);
    \u0275\u0275element(99, "line", 75)(100, "path", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(101, "div", 108)(102, "h4");
    \u0275\u0275text(103, "Cost/Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span", 73);
    \u0275\u0275text(105, "$2.1K");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reportConfig.dateRange.start);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reportConfig.dateRange.end);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.exportFormat);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.selectedReports.length === 0 || ctx_r0.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isGenerating);
    \u0275\u0275advance(27);
    \u0275\u0275property("disabled", !ctx_r0.selectedReport && ctx_r0.selectedReports.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.maintenanceReports);
  }
}
function ReportsPage_div_29_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Generate Selected Reports (", ctx_r0.selectedReports.length, ")");
  }
}
function ReportsPage_div_29_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Generating Report... ");
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_29_div_106__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "polyline", 95);
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_29_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "input", 117);
    \u0275\u0275listener("change", function ReportsPage_div_29_div_106_Template_input_change_1_listener($event) {
      const report_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onReportSelectionChange(report_r12.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 88)(3, "div", 89);
    \u0275\u0275template(4, ReportsPage_div_29_div_106__svg_svg_4_Template, 2, 0, "svg", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 92);
    \u0275\u0275element(7, "path", 114)(8, "polyline", 115)(9, "line", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 93)(11, "h4");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 94);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const report_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", report_r12.id)("value", report_r12.id)("checked", ctx_r0.isReportSelected(report_r12.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r0.isReportSelected(report_r12.id));
    \u0275\u0275property("for", report_r12.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isReportSelected(report_r12.id));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(report_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r12.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r12.estimatedTime);
  }
}
function ReportsPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "h3");
    \u0275\u0275text(4, "Report Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Configure your inventory reports with custom date ranges and filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "div", 37)(9, "label");
    \u0275\u0275text(10, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_29_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.start, $event) || (ctx_r0.reportConfig.dateRange.start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "label");
    \u0275\u0275text(14, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_29_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.end, $event) || (ctx_r0.reportConfig.dateRange.end = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label");
    \u0275\u0275text(18, "Export Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_29_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.exportFormat, $event) || (ctx_r0.exportFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 40);
    \u0275\u0275text(21, "PDF Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 41);
    \u0275\u0275text(23, "Excel Spreadsheet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 42);
    \u0275\u0275text(25, "CSV File");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 43);
    \u0275\u0275listener("click", function ReportsPage_div_29_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onGenerateSelectedReports());
    });
    \u0275\u0275template(27, ReportsPage_div_29_span_27_Template, 2, 1, "span", 44)(28, ReportsPage_div_29_span_28_Template, 3, 0, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 46)(30, "h3");
    \u0275\u0275text(31, "Quick Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Generate commonly requested reports instantly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 47);
    \u0275\u0275listener("click", function ReportsPage_div_29_Template_div_click_34_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("low-stock-alerts"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 48);
    \u0275\u0275element(36, "path", 96)(37, "line", 97)(38, "line", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "Low Stock Alerts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 47);
    \u0275\u0275listener("click", function ReportsPage_div_29_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("top-consumed-items"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 48);
    \u0275\u0275element(43, "path", 53)(44, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Top Consumed Items");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 103)(48, "div", 104)(49, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 92);
    \u0275\u0275element(51, "line", 75)(52, "path", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "div", 108)(54, "h4");
    \u0275\u0275text(55, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 73);
    \u0275\u0275text(57, "$124.5K");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 104)(59, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(60, "svg", 92);
    \u0275\u0275element(61, "path", 53)(62, "path", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(63, "div", 108)(64, "h4");
    \u0275\u0275text(65, "Turnover Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 73);
    \u0275\u0275text(67, "4.2x");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(68, "svg", 111);
    \u0275\u0275element(69, "polyline", 112)(70, "polyline", 113);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(71, "div", 104)(72, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 92);
    \u0275\u0275element(74, "path", 96)(75, "line", 97)(76, "line", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(77, "div", 108)(78, "h4");
    \u0275\u0275text(79, "Low Stock Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 73);
    \u0275\u0275text(81, "12");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 104)(83, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(84, "svg", 92);
    \u0275\u0275element(85, "path", 114)(86, "polyline", 115)(87, "line", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(88, "div", 108)(89, "h4");
    \u0275\u0275text(90, "Active SKUs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 73);
    \u0275\u0275text(92, "847");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(93, "div", 59)(94, "h3");
    \u0275\u0275text(95, "Available Inventory Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "p");
    \u0275\u0275text(97, "Generate comprehensive inventory analysis and management reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div", 99)(99, "button", 100);
    \u0275\u0275listener("click", function ReportsPage_div_29_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onExport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(100, "svg", 9);
    \u0275\u0275element(101, "path", 15)(102, "polyline", 101)(103, "line", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275text(104, " Export Selected ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(105, "div", 60);
    \u0275\u0275template(106, ReportsPage_div_29_div_106_Template, 17, 10, "div", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reportConfig.dateRange.start);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reportConfig.dateRange.end);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.exportFormat);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.selectedReports.length === 0 || ctx_r0.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isGenerating);
    \u0275\u0275advance(71);
    \u0275\u0275property("disabled", ctx_r0.selectedReports.length === 0 && !ctx_r0.selectedReport);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.inventoryReports);
  }
}
function ReportsPage_div_30_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Generate Selected Reports (", ctx_r0.selectedReports.length, ")");
  }
}
function ReportsPage_div_30_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Generating Report... ");
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_30_div_105__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "polyline", 95);
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_30_div_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "input", 124);
    \u0275\u0275listener("change", function ReportsPage_div_30_div_105_Template_input_change_1_listener($event) {
      const report_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onReportSelectionChange(report_r15.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 88)(3, "div", 89);
    \u0275\u0275template(4, ReportsPage_div_30_div_105__svg_svg_4_Template, 2, 0, "svg", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 92);
    \u0275\u0275element(7, "path", 26)(8, "path", 27)(9, "path", 28)(10, "path", 29)(11, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 93)(13, "h4");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 94);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const report_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", report_r15.id)("value", report_r15.id)("checked", ctx_r0.isReportSelected(report_r15.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r0.isReportSelected(report_r15.id));
    \u0275\u0275property("for", report_r15.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isReportSelected(report_r15.id));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(report_r15.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r15.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r15.estimatedTime);
  }
}
function ReportsPage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "h3");
    \u0275\u0275text(4, "Report Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Configure your financial reports with custom date ranges and filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "div", 37)(9, "label");
    \u0275\u0275text(10, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_30_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.start, $event) || (ctx_r0.reportConfig.dateRange.start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "label");
    \u0275\u0275text(14, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_30_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.end, $event) || (ctx_r0.reportConfig.dateRange.end = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label");
    \u0275\u0275text(18, "Export Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_30_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.exportFormat, $event) || (ctx_r0.exportFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 40);
    \u0275\u0275text(21, "PDF Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 41);
    \u0275\u0275text(23, "Excel Spreadsheet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 42);
    \u0275\u0275text(25, "CSV File");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 43);
    \u0275\u0275listener("click", function ReportsPage_div_30_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onGenerateSelectedReports());
    });
    \u0275\u0275template(27, ReportsPage_div_30_span_27_Template, 2, 1, "span", 44)(28, ReportsPage_div_30_span_28_Template, 3, 0, "span", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 46)(30, "h3");
    \u0275\u0275text(31, "Quick Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Generate commonly requested reports instantly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 47);
    \u0275\u0275listener("click", function ReportsPage_div_30_Template_div_click_34_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("monthly-pl"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 48);
    \u0275\u0275element(36, "line", 75)(37, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "Monthly P&L");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 47);
    \u0275\u0275listener("click", function ReportsPage_div_30_Template_div_click_40_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("cost-trends"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 48);
    \u0275\u0275element(42, "path", 53)(43, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Cost Trends");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 103)(47, "div", 104)(48, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 92);
    \u0275\u0275element(50, "line", 75)(51, "path", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "div", 108)(53, "h4");
    \u0275\u0275text(54, "Total Asset Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 73);
    \u0275\u0275text(56, "AED 2.4M");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 104)(58, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 92);
    \u0275\u0275element(60, "rect", 49)(61, "line", 50)(62, "line", 51)(63, "line", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(64, "div", 108)(65, "h4");
    \u0275\u0275text(66, "Monthly Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 73);
    \u0275\u0275text(68, "AED 68K");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 104)(70, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(71, "svg", 92);
    \u0275\u0275element(72, "path", 53)(73, "path", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "div", 108)(75, "h4");
    \u0275\u0275text(76, "Budget Variance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 73);
    \u0275\u0275text(78, "-8.2%");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(79, "svg", 118);
    \u0275\u0275element(80, "polyline", 112)(81, "polyline", 113);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(82, "div", 104)(83, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(84, "svg", 92);
    \u0275\u0275element(85, "circle", 106)(86, "polyline", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(87, "div", 108)(88, "h4");
    \u0275\u0275text(89, "ROI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 73);
    \u0275\u0275text(91, "12.4%");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 59)(93, "h3");
    \u0275\u0275text(94, "Available Financial Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p");
    \u0275\u0275text(96, "Generate comprehensive financial analysis and cost management reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 99)(98, "button", 100);
    \u0275\u0275listener("click", function ReportsPage_div_30_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onExport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(99, "svg", 9);
    \u0275\u0275element(100, "path", 15)(101, "polyline", 101)(102, "line", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, " Export Selected ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(104, "div", 60);
    \u0275\u0275template(105, ReportsPage_div_30_div_105_Template, 19, 10, "div", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 119)(107, "h3");
    \u0275\u0275text(108, "Cost Distribution Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "p");
    \u0275\u0275text(110, "Visual breakdown of expenses across different categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 120)(112, "div", 121)(113, "span");
    \u0275\u0275text(114, "Maintenance (45%)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 122)(116, "span");
    \u0275\u0275text(117, "Operations (32%)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 123)(119, "span");
    \u0275\u0275text(120, "Administration (23%)");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reportConfig.dateRange.start);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reportConfig.dateRange.end);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.exportFormat);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.selectedReports.length === 0 || ctx_r0.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isGenerating);
    \u0275\u0275advance(70);
    \u0275\u0275property("disabled", ctx_r0.selectedReports.length === 0 && !ctx_r0.selectedReport);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.financialReports);
  }
}
function ReportsPage_div_31_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "input", 149);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_31_div_29_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.dataSource, $event) || (ctx_r0.customReport.dataSource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 150)(3, "span", 151);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 152);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const source_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", source_r18.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customReport.dataSource);
    \u0275\u0275property("value", source_r18.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", source_r18.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(source_r18.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", source_r18.fieldCount, " fields available");
  }
}
function ReportsPage_div_31_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153)(1, "div", 154)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 155)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 156)(12, "button", 157);
    \u0275\u0275listener("click", function ReportsPage_div_31_div_51_Template_button_click_12_listener() {
      const report_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editReport(report_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 9);
    \u0275\u0275element(14, "path", 158)(15, "path", 159);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "button", 157);
    \u0275\u0275listener("click", function ReportsPage_div_31_div_51_Template_button_click_16_listener() {
      const report_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.runReport(report_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 9);
    \u0275\u0275element(18, "polygon", 138);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const report_r20 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(report_r20.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r20.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(report_r20.frequency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r20.lastRun);
  }
}
function ReportsPage_div_31_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275listener("click", function ReportsPage_div_31_div_57_Template_div_click_0_listener() {
      const template_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.useTemplate(template_r22));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 26)(3, "path", 27)(4, "path", 28)(5, "path", 29)(6, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const template_r22 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(template_r22.name);
  }
}
function ReportsPage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 125)(2, "div", 126)(3, "h3");
    \u0275\u0275text(4, "+ Create Custom Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Build custom reports by selecting data sources, fields, and applying filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 127)(8, "div", 128)(9, "label");
    \u0275\u0275text(10, "Report Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_31_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.name, $event) || (ctx_r0.customReport.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 128)(13, "label");
    \u0275\u0275text(14, "Output Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 130);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_31_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.format, $event) || (ctx_r0.customReport.format = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 40);
    \u0275\u0275text(17, "PDF Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 41);
    \u0275\u0275text(19, "Excel Spreadsheet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 42);
    \u0275\u0275text(21, "CSV File");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 128)(23, "label");
    \u0275\u0275text(24, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 131);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_31_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.description, $event) || (ctx_r0.customReport.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 132)(27, "h4");
    \u0275\u0275text(28, "Data Sources");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ReportsPage_div_31_div_29_Template, 7, 6, "div", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 134)(31, "h4");
    \u0275\u0275text(32, "Filter Conditions (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 135);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_31_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.filters, $event) || (ctx_r0.customReport.filters = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 136)(35, "button", 137);
    \u0275\u0275listener("click", function ReportsPage_div_31_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.runCustomReport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 9);
    \u0275\u0275element(37, "polygon", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Run Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "button", 139);
    \u0275\u0275listener("click", function ReportsPage_div_31_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCustomReport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 9);
    \u0275\u0275element(41, "path", 140)(42, "polyline", 141)(43, "polyline", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Save Template ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "div", 143)(46, "div", 144)(47, "h3");
    \u0275\u0275text(48, "Saved Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50, "Manage your custom report templates");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, ReportsPage_div_31_div_51_Template, 19, 4, "div", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 146)(53, "h3");
    \u0275\u0275text(54, "Quick Templates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275text(56, "Start with pre-built report templates");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, ReportsPage_div_31_div_57_Template, 9, 1, "div", 147);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customReport.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customReport.format);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customReport.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.dataSources);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customReport.filters);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.savedReports);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.quickTemplates);
  }
}
var ReportsPage = class _ReportsPage {
  reportsApi;
  exportService;
  destroy$ = new Subject();
  // State
  activeTab = "assets";
  isLoading = false;
  hasData = false;
  errorMessage = null;
  showExportPanel = false;
  // Data
  reportData = [];
  pagination = null;
  kpiCards = [];
  selectedReport = "";
  selectedReports = [];
  isGenerating = false;
  successMessage = "";
  assetSummaryData = null;
  maintenanceSummaryData = null;
  // Configuration
  reportConfig = {
    dateRange: {
      start: null,
      end: null
    },
    period: "this_month",
    page: 1,
    pageSize: 50,
    locationIds: [],
    assetIds: [],
    userIds: [],
    statusIds: [],
    priorityIds: [],
    categoryIds: [],
    search: "",
    sortBy: "",
    sortDirection: "asc"
  };
  // Export configuration
  exportFormat = "pdf";
  // Filter configurations for different report types
  maintenanceFilters = {
    period: "last_month",
    type: "all"
  };
  // Custom select options/state for Maintenance
  maintenancePeriodOptions = [
    { id: "last_month", name: "Last Month" },
    { id: "this_month", name: "This Month" },
    { id: "last_quarter", name: "Last Quarter" },
    { id: "this_quarter", name: "This Quarter" }
  ];
  selectedMaintenancePeriod = this.maintenancePeriodOptions[0];
  maintenanceTypeOptions = [
    { id: "all", name: "All Types" },
    { id: "preventive", name: "Preventive" },
    { id: "corrective", name: "Corrective" },
    { id: "emergency", name: "Emergency" }
  ];
  selectedMaintenanceType = this.maintenanceTypeOptions[0];
  inventoryFilters = {
    category: "all",
    location: "all"
  };
  // Custom select options/state for Inventory
  inventoryCategoryOptions = [
    { id: "all", name: "All Categories" },
    { id: "parts", name: "Parts" },
    { id: "supplies", name: "Supplies" },
    { id: "tools", name: "Tools" }
  ];
  selectedInventoryCategory = this.inventoryCategoryOptions[0];
  inventoryLocationOptions = [
    { id: "all", name: "All Locations" },
    { id: "warehouse", name: "Warehouse" },
    { id: "office", name: "Office" },
    { id: "field", name: "Field" }
  ];
  selectedInventoryLocation = this.inventoryLocationOptions[0];
  financialFilters = {
    period: "monthly",
    currency: "AED"
  };
  // Global report key maps to avoid redeclarations and scope issues
  maintenanceKeyMap = {
    "maintenance-summary": "maintenance.summary",
    "preventive-compliance": "maintenance.compliance",
    "maintenance-costs": "maintenance.costs",
    "equipment-downtime": "maintenance.downtime",
    "failure-analysis": "maintenance.failure_analysis",
    "technician-performance": "maintenance.technician_performance"
  };
  assetKeyMap = {
    "asset-summary": "assets.asset-summary",
    "asset-utilization": "assets.asset-utilization",
    "depreciation-analysis": "assets.depreciation-analysis",
    "warranty-status": "assets.warranty-status",
    "compliance-report": "assets.compliance-report"
  };
  financialKeyMap = {
    "total-cost-ownership": "financial.total_cost_ownership",
    "maintenance-cost-breakdown": "financial.maintenance_cost_breakdown",
    "budget-vs-actual": "financial.budget.vs.actual"
  };
  inventoryKeyMap = {
    "current-stock": "inventory.current.stock",
    "abc-analysis": "inventory.abc.analysis",
    "slow-moving": "inventory.slow_moving",
    "reorder-analysis": "inventory.reorder_analysis"
  };
  // Custom select options/state for Financial
  financialPeriodOptions = [
    { id: "monthly", name: "Monthly" },
    { id: "quarterly", name: "Quarterly" },
    { id: "yearly", name: "Yearly" }
  ];
  selectedFinancialPeriod = this.financialPeriodOptions[0];
  financialCurrencyOptions = [
    { id: "AED", name: "AED (Dirham)" },
    { id: "USD", name: "USD (Dollar)" },
    { id: "EUR", name: "EUR (Euro)" }
  ];
  selectedFinancialCurrency = this.financialCurrencyOptions[0];
  // Available tabs
  tabs = [
    { id: "assets", label: "Asset Reports", icon: "package" },
    { id: "maintenance", label: "Maintenance Reports", icon: "wrench" },
    { id: "inventory", label: "Inventory Reports", icon: "box" },
    { id: "financial", label: "Financial Reports", icon: "dollar-sign" }
  ];
  // Report data for each category
  assetReports = [
    {
      id: "asset-summary",
      title: "Asset Summary Report",
      description: "Complete overview of all assets with status, location, and financial details",
      estimatedTime: "~5 min"
    },
    {
      id: "asset-utilization",
      title: "Asset Utilization Report",
      description: "Analysis of asset usage patterns and efficiency metrics",
      estimatedTime: "~3 min"
    },
    {
      id: "depreciation-analysis",
      title: "Depreciation Analysis",
      description: "Asset depreciation calculations and current value assessments",
      estimatedTime: "~4 min"
    },
    {
      id: "warranty-status",
      title: "Warranty Status Report",
      description: "Assets under warranty, expiring warranties, and expired coverage",
      estimatedTime: "~2 min"
    },
    {
      id: "compliance-report",
      title: "Compliance Report",
      description: "Asset compliance status, certifications, and regulatory requirements",
      estimatedTime: "~6 min"
    }
  ];
  maintenanceReports = [
    {
      id: "maintenance-summary",
      title: "Maintenance Summary",
      description: "Overview of all maintenance activities, costs, and completion rates",
      estimatedTime: "~4 min"
    },
    {
      id: "preventive-compliance",
      title: "Preventive Maintenance Compliance",
      description: "Track adherence to scheduled preventive maintenance plans",
      estimatedTime: "~3 min"
    },
    {
      id: "maintenance-costs",
      title: "Maintenance Cost Analysis",
      description: "Detailed breakdown of maintenance expenses by asset, type, and time",
      estimatedTime: "~5 min"
    },
    {
      id: "equipment-downtime",
      title: "Equipment Downtime Report",
      description: "Analysis of asset downtime duration and impact on operations",
      estimatedTime: "~4 min"
    },
    {
      id: "failure-analysis",
      title: "Failure Analysis Report",
      description: "Root cause analysis and failure patterns across assets",
      estimatedTime: "~6 min"
    },
    {
      id: "technician-performance",
      title: "Technician Performance",
      description: "Productivity metrics and work quality assessment for maintenance teams",
      estimatedTime: "~4 min"
    }
  ];
  inventoryReports = [
    {
      id: "current-stock",
      title: "Current Stock Levels",
      description: "Real-time inventory levels across all locations and categories",
      estimatedTime: "~2 min"
    },
    {
      id: "abc-analysis",
      title: "ABC Analysis Report",
      description: "Classification of inventory items by value and importance",
      estimatedTime: "~4 min"
    },
    {
      id: "slow-moving",
      title: "Slow Moving Inventory",
      description: "Items with low turnover rates and aging analysis",
      estimatedTime: "~3 min"
    },
    {
      id: "reorder-analysis",
      title: "Reorder Point Analysis",
      description: "Items below reorder points and suggested purchase quantities",
      estimatedTime: "~2 min"
    },
    {
      id: "consumption-trends",
      title: "Consumption Trends",
      description: "Usage patterns and demand forecasting for parts and materials",
      estimatedTime: "~5 min"
    },
    {
      id: "vendor-performance",
      title: "Vendor Performance",
      description: "Supplier reliability, lead times, and cost analysis",
      estimatedTime: "~4 min"
    },
    {
      id: "inventory-valuation",
      title: "Inventory Valuation",
      description: "Total inventory value, cost breakdown, and financial impact",
      estimatedTime: "~3 min"
    }
  ];
  financialReports = [
    {
      id: "total-cost-ownership",
      title: "Total Cost of Ownership",
      description: "Complete lifecycle cost analysis including acquisition, maintenance, and disposal",
      estimatedTime: "~8 min"
    },
    {
      id: "budget-vs-actual",
      title: "Budget vs Actual Analysis",
      description: "Comparison of planned vs actual spending across departments and projects",
      estimatedTime: "~5 min"
    },
    {
      id: "depreciation-schedule",
      title: "Depreciation Schedule",
      description: "Asset depreciation calculations and remaining book values",
      estimatedTime: "~6 min"
    },
    {
      id: "maintenance-cost-breakdown",
      title: "Maintenance Cost Breakdown",
      description: "Detailed analysis of maintenance expenses by asset, type, and period",
      estimatedTime: "~4 min"
    },
    {
      id: "return-on-investment",
      title: "Return on Investment",
      description: "ROI calculations for assets, upgrades, and maintenance initiatives",
      estimatedTime: "~7 min"
    },
    {
      id: "cost-center-analysis",
      title: "Cost Center Analysis",
      description: "Financial performance breakdown by department and location",
      estimatedTime: "~5 min"
    }
  ];
  // Custom report data
  customReport = {
    name: "",
    format: "pdf",
    description: "",
    dataSource: "",
    filters: ""
  };
  dataSources = [
    { id: "assets", name: "Assets", fieldCount: 5 },
    { id: "inventory", name: "Inventory", fieldCount: 5 },
    { id: "work_orders", name: "Work Orders", fieldCount: 5 },
    { id: "maintenance", name: "Maintenance Records", fieldCount: 5 },
    { id: "locations", name: "Locations", fieldCount: 4 }
  ];
  savedReports = [
    {
      id: "high-value-assets",
      name: "High Value Assets by Location",
      description: "Assets worth over $10K grouped by location",
      frequency: "Weekly",
      lastRun: "2 days ago"
    },
    {
      id: "maintenance-cost-trends",
      name: "Maintenance Cost Trends",
      description: "Monthly maintenance costs with year-over-year comparison",
      frequency: "Monthly",
      lastRun: "1 week ago"
    },
    {
      id: "inventory-turnover",
      name: "Inventory Turnover Analysis",
      description: "Parts consumption patterns and reorder recommendations",
      frequency: "Bi-weekly",
      lastRun: "3 days ago"
    }
  ];
  quickTemplates = [
    { id: "monthly-asset-summary", name: "Monthly Asset Summary" },
    { id: "cost-analysis-department", name: "Cost Analysis by Department" },
    { id: "maintenance-performance", name: "Maintenance Performance" }
  ];
  constructor(reportsApi, exportService) {
    this.reportsApi = reportsApi;
    this.exportService = exportService;
  }
  getCurrentTime() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
  ngOnInit() {
    console.log("ReportsPage ngOnInit called");
    console.log("Component initialized successfully");
    this.initializeDateRange();
    this.loadReportData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * Initialize date range based on selected period
   */
  initializeDateRange() {
    const now = /* @__PURE__ */ new Date();
    const period = this.reportConfig.period;
    switch (period) {
      case "today":
        this.reportConfig.dateRange = {
          start: now.toISOString().split("T")[0],
          end: now.toISOString().split("T")[0]
        };
        break;
      case "yesterday":
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        this.reportConfig.dateRange = {
          start: yesterday.toISOString().split("T")[0],
          end: yesterday.toISOString().split("T")[0]
        };
        break;
      case "this_week":
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        this.reportConfig.dateRange = {
          start: startOfWeek.toISOString().split("T")[0],
          end: endOfWeek.toISOString().split("T")[0]
        };
        break;
      case "last_week":
        const lastWeekStart = new Date(now);
        lastWeekStart.setDate(now.getDate() - now.getDay() - 7);
        const lastWeekEnd = new Date(lastWeekStart);
        lastWeekEnd.setDate(lastWeekStart.getDate() + 6);
        this.reportConfig.dateRange = {
          start: lastWeekStart.toISOString().split("T")[0],
          end: lastWeekEnd.toISOString().split("T")[0]
        };
        break;
      case "this_month":
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        this.reportConfig.dateRange = {
          start: startOfMonth.toISOString().split("T")[0],
          end: endOfMonth.toISOString().split("T")[0]
        };
        break;
      case "last_month":
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        this.reportConfig.dateRange = {
          start: lastMonthStart.toISOString().split("T")[0],
          end: lastMonthEnd.toISOString().split("T")[0]
        };
        break;
      case "this_quarter":
        const quarter = Math.floor(now.getMonth() / 3);
        const startOfQuarter = new Date(now.getFullYear(), quarter * 3, 1);
        const endOfQuarter = new Date(now.getFullYear(), quarter * 3 + 3, 0);
        this.reportConfig.dateRange = {
          start: startOfQuarter.toISOString().split("T")[0],
          end: endOfQuarter.toISOString().split("T")[0]
        };
        break;
      case "last_quarter":
        const lastQuarter = Math.floor(now.getMonth() / 3) - 1;
        const lastQuarterStart = new Date(now.getFullYear(), lastQuarter * 3, 1);
        const lastQuarterEnd = new Date(now.getFullYear(), lastQuarter * 3 + 3, 0);
        this.reportConfig.dateRange = {
          start: lastQuarterStart.toISOString().split("T")[0],
          end: lastQuarterEnd.toISOString().split("T")[0]
        };
        break;
      case "this_year":
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const endOfYear = new Date(now.getFullYear(), 11, 31);
        this.reportConfig.dateRange = {
          start: startOfYear.toISOString().split("T")[0],
          end: endOfYear.toISOString().split("T")[0]
        };
        break;
      case "last_year":
        const lastYearStart = new Date(now.getFullYear() - 1, 0, 1);
        const lastYearEnd = new Date(now.getFullYear() - 1, 11, 31);
        this.reportConfig.dateRange = {
          start: lastYearStart.toISOString().split("T")[0],
          end: lastYearEnd.toISOString().split("T")[0]
        };
        break;
      case "ytd":
        const ytdStart = new Date(now.getFullYear(), 0, 1);
        this.reportConfig.dateRange = {
          start: ytdStart.toISOString().split("T")[0],
          end: now.toISOString().split("T")[0]
        };
        break;
    }
  }
  /**
   * Load report data based on active tab
   */
  loadReportData() {
    console.log("loadReportData called, activeTab:", this.activeTab);
    this.isLoading = true;
    this.errorMessage = null;
    let request$;
    switch (this.activeTab) {
      case "assets":
        console.log("Loading asset summary...");
        request$ = this.reportsApi.getAssetSummary(this.reportConfig);
        break;
      case "maintenance":
        request$ = this.reportsApi.getMaintenanceSummary(this.reportConfig);
        break;
      case "inventory":
        this.isLoading = false;
        this.hasData = false;
        return;
      case "financial":
        this.isLoading = false;
        this.hasData = false;
        return;
      case "custom":
        this.isLoading = false;
        this.hasData = false;
        return;
      default:
        this.isLoading = false;
        this.hasData = false;
        return;
    }
    if (request$) {
      request$.pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          console.log("Report data received:", response);
          this.processReportData(response);
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Error loading report data:", error);
          console.error("Error status:", error.status);
          console.error("Error message:", error.message);
          console.error("Error details:", error);
          this.errorMessage = `Failed to load report data: ${error.status} - ${error.message}`;
          this.isLoading = false;
          this.hasData = false;
        }
      });
    }
  }
  /**
   * Process report data and extract KPIs
   */
  processReportData(response) {
    console.log("Processing report data:", response);
    if ("assets" in response) {
      this.assetSummaryData = response;
      this.reportData = response.assets || [];
    } else if ("work_orders" in response) {
      this.maintenanceSummaryData = response;
      this.reportData = response.work_orders || [];
    } else {
      this.reportData = [];
    }
    this.pagination = response.pagination || null;
    this.hasData = this.reportData.length > 0;
    console.log("Processed data - reportData:", this.reportData, "hasData:", this.hasData);
    if ("totals" in response && response.totals) {
      this.kpiCards = this.buildKPICardsFromTotals(response.totals);
    } else if ("kpis" in response && response.kpis) {
      this.kpiCards = this.buildKPICardsFromKPIs(response.kpis);
    } else {
      this.kpiCards = [];
    }
  }
  /**
   * Build KPI cards from totals data
   */
  buildKPICardsFromTotals(totals) {
    return [
      {
        title: "Total Assets",
        value: totals.total_count || 0,
        icon: "package",
        trend: null
      },
      {
        title: "Total Value",
        value: `$${(totals.total_value || 0).toLocaleString()}`,
        icon: "dollar-sign",
        trend: null
      },
      {
        title: "Active Assets",
        value: totals.active_count || 0,
        icon: "check-circle",
        trend: null
      },
      {
        title: "In Maintenance",
        value: totals.maintenance_count || 0,
        icon: "wrench",
        trend: null
      }
    ];
  }
  /**
   * Build KPI cards from KPIs data
   */
  buildKPICardsFromKPIs(kpis) {
    return [
      {
        title: "MTTR",
        value: `${kpis.mttr || 0}h`,
        icon: "clock",
        trend: null
      },
      {
        title: "MTBF",
        value: `${kpis.mtbf || 0}h`,
        icon: "trending-up",
        trend: null
      },
      {
        title: "Compliance",
        value: `${kpis.compliance || 0}%`,
        icon: "calendar",
        trend: null
      },
      {
        title: "Cost/Asset",
        value: `$${kpis.cost_per_asset || 0}K`,
        icon: "dollar-sign",
        trend: null
      }
    ];
  }
  /**
   * Handle tab change
   */
  onTabChange(tabId) {
    this.activeTab = tabId;
    this.selectedReport = "";
    this.selectedReports = [];
    this.loadReportData();
  }
  /**
   * Handle refresh
   */
  onRefresh() {
    this.loadReportData();
  }
  /**
   * Handle export
   */
  onExport() {
    this.showExportPanel = true;
  }
  /**
   * Handle config change
   */
  onConfigChange(config) {
    this.reportConfig = __spreadValues({}, config);
  }
  // Maintenance dropdown handlers
  onSelectMaintenancePeriod(option) {
    this.selectedMaintenancePeriod = option;
    this.maintenanceFilters.period = option?.id ?? this.maintenanceFilters.period;
  }
  onSelectMaintenanceType(option) {
    this.selectedMaintenanceType = option;
    this.maintenanceFilters.type = option?.id ?? this.maintenanceFilters.type;
  }
  // Inventory dropdown handlers
  onSelectInventoryCategory(option) {
    this.selectedInventoryCategory = option;
    this.inventoryFilters.category = option?.id ?? this.inventoryFilters.category;
  }
  onSelectInventoryLocation(option) {
    this.selectedInventoryLocation = option;
    this.inventoryFilters.location = option?.id ?? this.inventoryFilters.location;
  }
  // Financial dropdown handlers
  onSelectFinancialPeriod(option) {
    this.selectedFinancialPeriod = option;
    this.financialFilters.period = option?.id ?? this.financialFilters.period;
  }
  onSelectFinancialCurrency(option) {
    this.selectedFinancialCurrency = option;
    this.financialFilters.currency = option?.id ?? this.financialFilters.currency;
  }
  /**
   * Handle apply filters
   */
  onApplyFilters() {
    this.loadReportData();
  }
  /**
   * Handle reset filters
   */
  onResetFilters() {
    this.reportConfig = {
      dateRange: { start: null, end: null },
      period: "this_month",
      page: 1,
      pageSize: 50,
      locationIds: [],
      assetIds: [],
      userIds: [],
      statusIds: [],
      priorityIds: [],
      categoryIds: [],
      search: "",
      sortBy: "",
      sortDirection: "asc"
    };
    this.initializeDateRange();
    this.loadReportData();
  }
  /**
   * Handle page change
   */
  onPageChange(page) {
    this.reportConfig.page = page;
    this.loadReportData();
  }
  /**
   * Handle page size change
   */
  onPageSizeChange(pageSize) {
    this.reportConfig.pageSize = pageSize;
    this.reportConfig.page = 1;
    this.loadReportData();
  }
  /**
   * Handle sort change
   */
  onSortChange(sort) {
    this.reportConfig.sortBy = sort.field;
    this.reportConfig.sortDirection = sort.direction;
    this.loadReportData();
  }
  /**
   * Handle close export panel
   */
  onCloseExportPanel() {
    this.showExportPanel = false;
  }
  /**
   * Handle export report
   */
  onExportReport(exportData) {
    const reportKey = this.getReportKey();
    this.exportService.exportReport(reportKey, exportData.format, exportData.params).pipe(takeUntil(this.destroy$)).subscribe({
      next: (runId) => {
        console.log("Export started:", runId);
        this.showExportPanel = false;
      },
      error: (error) => {
        console.error("Export failed:", error);
      }
    });
  }
  /**
   * Get report key for export
   */
  getReportKey() {
    return `${this.activeTab}.${this.selectedReport || "summary"}`;
  }
  /**
   * Generate quick report
   */
  generateQuickReport(type) {
    console.log("Generating quick report:", type);
  }
  /**
   * Run custom report
   */
  runCustomReport() {
    console.log("Running custom report:", this.customReport);
  }
  /**
   * Save custom report
   */
  saveCustomReport() {
    console.log("Saving custom report:", this.customReport);
  }
  /**
   * Edit saved report
   */
  editReport(report) {
    console.log("Editing report:", report);
  }
  /**
   * Run saved report
   */
  runReport(report) {
    console.log("Running saved report:", report);
  }
  /**
   * Use quick template
   */
  useTemplate(template) {
    console.log("Using template:", template);
  }
  /**
   * Handle report selection change
   */
  onReportSelectionChange(reportId, event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      if (!this.selectedReports.includes(reportId)) {
        this.selectedReports.push(reportId);
      }
    } else {
      this.selectedReports = this.selectedReports.filter((id) => id !== reportId);
    }
    this.selectedReport = this.selectedReports.length > 0 ? this.selectedReports[0] : "";
    console.log("Report selection changed:", reportId, "checked:", isChecked);
    console.log("Selected reports:", this.selectedReports);
  }
  /**
   * Check if a report is selected
   */
  isReportSelected(reportId) {
    return this.selectedReports.includes(reportId);
  }
  /**
   * Generate selected reports
   */
  onGenerateSelectedReports() {
    if (this.selectedReports.length === 0) {
      console.warn("No reports selected");
      return;
    }
    console.log("Generating selected reports:", this.selectedReports);
    console.log("Export format:", this.exportFormat);
    console.log("Date range:", this.reportConfig.dateRange);
    this.isGenerating = true;
    this.errorMessage = "";
    this.successMessage = "";
    const reportId = this.selectedReports[0];
    const maintenanceMap = {
      "maintenance-summary": "maintenance.summary",
      "preventive-compliance": "maintenance.compliance",
      "maintenance-costs": "maintenance.costs",
      "equipment-downtime": "maintenance.downtime",
      "failure-analysis": "maintenance.failure_analysis",
      "technician-performance": "maintenance.technician_performance"
    };
    const assetMap = {
      "asset-summary": "assets.asset-summary",
      "asset-utilization": "assets.asset-utilization",
      "depreciation-analysis": "assets.depreciation-analysis",
      "warranty-status": "assets.warranty-status",
      "compliance-report": "assets.compliance-report"
    };
    const financialMap = {
      "total-cost-ownership": "financial.total_cost_ownership",
      "maintenance-cost-breakdown": "financial.maintenance_cost_breakdown"
    };
    let reportKey = maintenanceMap[reportId] || assetMap[reportId] || financialMap[reportId] || reportId;
    if (!reportKey.includes(".")) {
      reportKey = `${this.activeTab}.${reportKey.replace(/-/g, ".")}`;
    }
    const exportParams = {
      date_from: this.reportConfig.dateRange.start,
      date_to: this.reportConfig.dateRange.end,
      format: this.exportFormat
    };
    this.reportsApi.exportReport({
      report_key: reportKey,
      format: this.exportFormat,
      // Type assertion for now
      params: exportParams
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          console.log("Export job queued successfully:", response.data);
          this.pollExportStatus(response.data.run_id, reportKey);
        } else {
          this.errorMessage = "Export failed: " + (response.error || "Unknown error");
          this.isGenerating = false;
        }
      },
      error: (error) => {
        console.error("Export failed:", error);
        this.errorMessage = "Export failed: " + error.message;
        this.isGenerating = false;
      }
    });
  }
  /**
   * Poll export status until completion
   */
  pollExportStatus(runId, reportKey) {
    const maxPolls = 15;
    let pollCount = 0;
    const pollInterval = setInterval(() => {
      pollCount++;
      this.reportsApi.getExportStatus(runId).pipe(takeUntil(this.destroy$)).subscribe({
        next: (statusResponse) => {
          if (statusResponse.success && statusResponse.data) {
            const status = statusResponse.data;
            console.log(`Poll ${pollCount}: Export status for run ${runId}:`, status.status);
            if (status.status === "success") {
              clearInterval(pollInterval);
              this.isGenerating = false;
              if (status.download_url) {
                this.downloadFile(status.download_url, status.report_key, status.format);
                this.successMessage = `Report generated successfully! (${status.execution_time_formatted})`;
              } else {
                this.errorMessage = "Export completed but no download URL provided";
              }
            } else if (status.status === "failed") {
              clearInterval(pollInterval);
              this.isGenerating = false;
              this.errorMessage = "Export failed: " + (status.error_message || "Unknown error");
            } else if (pollCount >= maxPolls) {
              clearInterval(pollInterval);
              this.isGenerating = false;
              this.errorMessage = "Export timed out. Please check the export status manually.";
            }
          } else {
            clearInterval(pollInterval);
            this.isGenerating = false;
            this.errorMessage = "Failed to check export status: " + (statusResponse.error || "Unknown error");
          }
        },
        error: (error) => {
          clearInterval(pollInterval);
          this.isGenerating = false;
          this.errorMessage = "Error checking export status: " + error.message;
        }
      });
    }, 2e3);
  }
  /**
   * Download file from URL
   */
  downloadFile(downloadUrl, reportKey, format) {
    const baseUrl = "http://assetgo-backend.test";
    const fullUrl = downloadUrl.startsWith("http") ? downloadUrl : `${baseUrl}${downloadUrl}`;
    console.log("Downloading file from URL:", fullUrl);
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/:/g, "-");
    const reportName = reportKey.replace(/\./g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    const filename = `${reportName}-${timestamp}.${format}`;
    const link = document.createElement("a");
    link.href = fullUrl;
    link.target = "_blank";
    link.download = filename;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Download initiated for:", filename);
  }
  /**
   * Handle export request from export panel
   */
  onExportRequest(exportData) {
    console.log("Export request from panel:", exportData);
    const reportsToExport = this.selectedReports.length > 0 ? this.selectedReports : [this.selectedReport];
    if (reportsToExport.length === 0) {
      console.warn("No reports selected for export");
      return;
    }
    const reportKeys = reportsToExport.map((id) => {
      let key = this.maintenanceKeyMap[id] || this.assetKeyMap[id] || this.financialKeyMap[id] || this.inventoryKeyMap[id] || id;
      if (!key.includes(".")) {
        key = `${this.activeTab}.${key.replace(/-/g, ".")}`;
      }
      return key;
    });
    const exportParams = __spreadValues({
      date_from: this.reportConfig.dateRange.start,
      date_to: this.reportConfig.dateRange.end,
      format: exportData.format
    }, exportData.params);
    const exportRequests = reportKeys.map((reportKey) => this.exportService.exportReport(reportKey, exportData.format, exportParams).pipe(takeUntil(this.destroy$)));
    exportRequests.forEach((request, index) => {
      request.subscribe({
        next: (runId) => {
          console.log(`Export ${index + 1}/${reportKeys.length} started:`, reportKeys[index], "Run ID:", runId);
        },
        error: (error) => {
          console.error(`Export ${index + 1}/${reportKeys.length} failed:`, reportKeys[index], error);
        }
      });
    });
  }
  /**
   * Get status chart data for pie chart
   */
  getStatusChartData() {
    if (!this.assetSummaryData?.status_distribution) {
      return [];
    }
    const colorMap = {
      "active": "#10B981",
      "maintenance": "#F59E0B",
      "inactive": "#6B7280",
      "retired": "#EF4444"
    };
    return Object.entries(this.assetSummaryData.status_distribution).map(([status, count]) => ({
      label: status.charAt(0).toUpperCase() + status.slice(1),
      value: count,
      color: colorMap[status.toLowerCase()] || "#4F46E5"
    }));
  }
  /**
   * Get category chart data for bar chart
   */
  getCategoryChartData() {
    if (!this.assetSummaryData?.category_distribution) {
      return [];
    }
    return Object.entries(this.assetSummaryData.category_distribution).map(([category, count]) => ({
      label: category,
      value: count
    }));
  }
  /**
   * Format number for display
   */
  formatNumber(value) {
    return value.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }
  static \u0275fac = function ReportsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsPage)(\u0275\u0275directiveInject(ReportsApiService), \u0275\u0275directiveInject(ExportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsPage, selectors: [["app-reports"]], decls: 32, vars: 13, consts: [[1, "reports-page"], ["style", "background: #f0f0f0; padding: 10px; margin: 10px; border: 1px solid #ccc;", 4, "ngIf"], [1, "reports-header"], [1, "header-content"], [1, "header-left"], [1, "title"], [1, "subtitle"], [1, "header-actions", 2, "display", "none"], [1, "action-button", "refresh-button", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], ["d", "M21 3v5h-5"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], ["d", "M3 21v-5h5"], [1, "action-button", "export-button", 3, "click"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["d", "M7 10l5 5 5-5"], ["d", "M12 15V3"], [1, "report-tabs"], ["class", "tab-button", 3, "active", "click", 4, "ngFor", "ngForOf"], [3, "close", "exportRequest", "isOpen", "activeTab", "config", "selectedReports", "selectedReport"], [1, "reports-content"], ["class", "report-category", 4, "ngIf"], [2, "background", "#f0f0f0", "padding", "10px", "margin", "10px", "border", "1px solid #ccc"], [1, "tab-button", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "tab-icon"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["d", "M14 2v6h6"], ["d", "M16 13H8"], ["d", "M16 17H8"], ["d", "M10 9H8"], ["class", "new-badge", 4, "ngIf"], [1, "new-badge"], [1, "report-category"], [1, "filters-section"], [1, "filter-card"], [1, "filter-row"], [1, "filter-group"], ["type", "date", 1, "filter-input", 3, "ngModelChange", "ngModel"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "pdf"], ["value", "xlsx"], ["value", "csv"], [1, "generate-button", 3, "click", "disabled"], [4, "ngIf"], ["class", "loading-content", 4, "ngIf"], [1, "quick-reports-card"], [1, "quick-report-item", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["d", "M3 3v18h18"], ["d", "M18 17V9M13 17V5M8 17v-3"], ["d", "M9 12l2 2 4-4"], ["d", "M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"], ["d", "M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"], ["class", "asset-overview-section", 4, "ngIf"], [1, "available-reports"], [1, "report-list"], ["class", "report-item", 4, "ngFor", "ngForOf"], [1, "loading-content"], [1, "loading-spinner"], [1, "asset-overview-section"], [1, "overview-card", "kpi-overview-card", 2, "display", "none"], [1, "kpi-grid"], [1, "kpi-item"], [1, "kpi-icon-wrapper", "success"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "kpi-details"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-icon-wrapper", "primary"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "kpi-icon-wrapper", "warning"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [1, "overview-card", "charts-overview-card", 2, "display", "none"], [1, "charts-grid"], [1, "chart-card"], [3, "data", "height", "showLegend"], [1, "chart-card", 2, "display", "none"], [3, "data", "height", "horizontal", "color"], [1, "report-item"], ["type", "checkbox", "name", "assetReport", 3, "change", "id", "value", "checked"], [1, "report-card", 3, "for"], [1, "checkbox-indicator"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "report-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "report-content"], [1, "report-time"], ["points", "20,6 9,17 4,12"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "export-controls", 2, "display", "none"], [1, "export-button", 3, "click", "disabled"], ["points", "7,10 12,15 17,10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "kpi-section", 2, "display", "none"], [1, "kpi-card"], [1, "kpi-icon"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12,6 12,12 16,14"], [1, "kpi-content"], ["type", "checkbox", "name", "maintenanceReport", 3, "change", "id", "value", "checked"], ["d", "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "trend-icon"], ["points", "23 6 13.5 15.5 8.5 10.5 1 18"], ["points", "17 6 23 6 23 12"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], ["type", "checkbox", "name", "inventoryReport", 3, "change", "id", "value", "checked"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "trend-icon", "positive"], [1, "cost-distribution"], [1, "chart-container"], [1, "chart-bar", "maintenance", 2, "width", "45%"], [1, "chart-bar", "operations", 2, "width", "32%"], [1, "chart-bar", "administration", 2, "width", "23%"], ["type", "checkbox", "name", "financialReport", 3, "change", "id", "value", "checked"], [1, "custom-reports-layout"], [1, "create-report-panel"], [1, "form-section"], [1, "form-group"], ["type", "text", "placeholder", "Enter report name...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["placeholder", "Describe what this report will analyze...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "data-sources"], ["class", "data-source-item", 4, "ngFor", "ngForOf"], [1, "filter-conditions"], ["placeholder", "e.g., status = 'active' AND purchase_cost > 1000", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn-primary", 3, "click"], ["points", "5,3 19,12 5,21"], [1, "btn-secondary", 3, "click"], ["d", "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], ["points", "17,21 17,13 7,13 7,21"], ["points", "7,3 7,8 15,8"], [1, "saved-reports-panel"], [1, "saved-reports"], ["class", "saved-report-item", 4, "ngFor", "ngForOf"], [1, "quick-templates"], ["class", "template-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "data-source-item"], ["type", "radio", "name", "dataSource", 3, "ngModelChange", "id", "ngModel", "value"], [3, "for"], [1, "source-name"], [1, "field-count"], [1, "saved-report-item"], [1, "report-info"], [1, "report-meta"], [1, "report-actions"], [1, "action-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "template-item", 3, "click"]], template: function ReportsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ReportsPage_div_1_Template, 13, 5, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Generate and export comprehensive reports for your asset management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
      \u0275\u0275listener("click", function ReportsPage_Template_button_click_10_listener() {
        return ctx.onRefresh();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 9);
      \u0275\u0275element(12, "path", 10)(13, "path", 11)(14, "path", 12)(15, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 14);
      \u0275\u0275listener("click", function ReportsPage_Template_button_click_17_listener() {
        return ctx.onExport();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 9);
      \u0275\u0275element(19, "path", 15)(20, "path", 16)(21, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Export ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "div", 18);
      \u0275\u0275template(24, ReportsPage_button_24_Template, 9, 4, "button", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "app-reports-export-panel", 20);
      \u0275\u0275listener("close", function ReportsPage_Template_app_reports_export_panel_close_25_listener() {
        return ctx.onCloseExportPanel();
      })("exportRequest", function ReportsPage_Template_app_reports_export_panel_exportRequest_25_listener($event) {
        return ctx.onExportRequest($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 21);
      \u0275\u0275template(27, ReportsPage_div_27_Template, 63, 8, "div", 22)(28, ReportsPage_div_28_Template, 106, 8, "div", 22)(29, ReportsPage_div_29_Template, 107, 8, "div", 22)(30, ReportsPage_div_30_Template, 121, 8, "div", 22)(31, ReportsPage_div_31_Template, 58, 7, "div", 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", false);
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showExportPanel)("activeTab", ctx.activeTab)("config", ctx.reportConfig)("selectedReports", ctx.selectedReports)("selectedReport", ctx.selectedReport);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "assets");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "maintenance");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "inventory");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "financial");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "custom");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgModel,
    ReportsExportPanelComponent,
    PieChartComponent,
    BarChartComponent
  ], styles: [`

.reports-page[_ngcontent-%COMP%] {
  min-height: 100vh;
  background: #f9fafb;
  padding: 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%] {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button.refresh-button[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button.export-button[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #1d4ed8 100%);
  color: white;
  border-color: #3b82f6;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button.export-button[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1e40af 100%);
  border-color: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);
}
.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%] {
  display: flex;
  gap: 0;
  padding: 0 2rem;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #e5e7eb;
}
.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 0.5rem 0.5rem 0 0;
}
.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {
  color: #374151;
  background: #f9fafb;
}
.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
  background: #f0f9ff;
}
.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .new-badge[_ngcontent-%COMP%] {
  background: #10b981;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  margin-left: 0.25rem;
  font-weight: 600;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #6b7280;
  margin: 0 0 1rem 0;
  line-height: 1.6;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {
  flex: 1;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s ease;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover {
  border-color: #d1d5db;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 8l4 4 4-4' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem 1rem;
  padding-right: 2.5rem;
  cursor: pointer;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover {
  border-color: #d1d5db;
  background-color: #fafafa;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:disabled, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:disabled {
  background-color: #f3f4f6;
  color: #9ca3af;
  cursor: not-allowed;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #1d4ed8 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:hover:not(:disabled), 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:hover:not(:disabled) {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1e40af 100%);
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:disabled, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 1s linear infinite;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]:hover {
  background: #f9fafb;
  border-color: #e5e7eb;
  transform: translateY(-1px);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
  color: #6b7280;
  flex-shrink: 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #374151;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
  margin-bottom: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #1d4ed8 100%);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
  cursor: pointer;
  transition: all 0.2s ease;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]:hover:not(:disabled), 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]:hover:not(:disabled), 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]:hover:not(:disabled), 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]:hover:not(:disabled) {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1e40af 100%);
  transform: translateY(-1px);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]:disabled, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]:disabled, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]:disabled, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  box-shadow: none;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .export-controls[_ngcontent-%COMP%]   .export-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%] {
  display: grid;
  gap: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%] {
  position: relative;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%] {
  border-color: #3b82f6;
  background: #f0f9ff;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #3b82f6;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  background: white;
  transition: all 0.2s ease;
  flex-shrink: 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #3b82f6;
  stroke-width: 3;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover {
  border-color: #d1d5db;
  background: #f9fafb;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%] {
  background: #f0f9ff;
  border-color: #3b82f6;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%] {
  background: #3b82f6;
  border-color: #3b82f6;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #3b82f6;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%] {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 8px;
  color: #6b7280;
  transition: all 0.2s ease;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1.5rem;
  height: 1.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%] {
  flex: 1;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
  line-height: 1.4;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #6b7280;
  background: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%] {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f9ff;
  border-radius: 8px;
  color: #3b82f6;
  flex-shrink: 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1.5rem;
  height: 1.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
  flex: 1;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 0.25rem 0;
  font-weight: 500;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1.2;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .trend-icon[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .trend-icon.positive[_ngcontent-%COMP%] {
  color: #10b981;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .trend-icon.negative[_ngcontent-%COMP%] {
  color: #ef4444;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%] {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  margin: 0 0 1.5rem 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {
  display: flex;
  height: 2rem;
  border-radius: 0.375rem;
  overflow: hidden;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-bar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-bar.maintenance[_ngcontent-%COMP%] {
  background: #3b82f6;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-bar.operations[_ngcontent-%COMP%] {
  background: #3b82f6;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-bar.administration[_ngcontent-%COMP%] {
  background: #10b981;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s ease;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:hover {
  border-color: #d1d5db;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {
  min-height: 4rem;
  resize: vertical;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]:hover {
  background: #f3f4f6;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {
  margin: 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .source-name[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .source-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #374151;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .field-count[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .field-count[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #9ca3af;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .filter-conditions[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .filter-conditions[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .filter-conditions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .filter-conditions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {
  background: #3b82f6;
  color: white;
  border: none;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {
  background: #2563eb;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.25rem 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 0 0.5rem 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   .report-meta[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   .report-meta[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #9ca3af;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {
  background: #f3f4f6;
  color: #374151;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 0.5rem;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]:hover, 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1.25rem;
  height: 1.25rem;
  color: #6b7280;
}
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #374151;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%] {
  margin: 2rem 0;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%]:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  transform: translateY(-2px);
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%]   .kpi-icon-wrapper[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex-shrink: 0;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%]   .kpi-icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%]   .kpi-icon-wrapper.success[_ngcontent-%COMP%] {
  background: #d1fae5;
  color: #10b981;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%]   .kpi-icon-wrapper.primary[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #3b82f6;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%]   .kpi-icon-wrapper.warning[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #f59e0b;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%]   .kpi-details[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%]   .kpi-details[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%]   .kpi-item[_ngcontent-%COMP%]   .kpi-details[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .charts-overview-card[_ngcontent-%COMP%]   .charts-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .charts-overview-card[_ngcontent-%COMP%]   .charts-grid[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%] {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.25rem;
  max-height: 380px;
}
.reports-page[_ngcontent-%COMP%]   .asset-overview-section[_ngcontent-%COMP%]   .charts-overview-card[_ngcontent-%COMP%]   .charts-grid[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem 0;
}
.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
}
.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
  border: 3px solid #e5e7eb;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 1s linear infinite;
  margin-bottom: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
}
.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
}
.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .no-data-icon[_ngcontent-%COMP%] {
  color: #9ca3af;
  margin-bottom: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .no-data-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}
.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .no-data-description[_ngcontent-%COMP%] {
  color: #64748b;
  margin: 0 0 1.5rem 0;
  max-width: 400px;
}
.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]:hover {
  background: #2563eb;
}
.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
}
.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {
  color: #ef4444;
  margin-bottom: 1rem;
}
.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}
.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-description[_ngcontent-%COMP%] {
  color: #64748b;
  margin: 0 0 1.5rem 0;
  max-width: 400px;
}
.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]:hover {
  background: #2563eb;
}
.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
@keyframes _ngcontent-%COMP%_spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 1024px) {
  .reports-content[_ngcontent-%COMP%] {
    padding: 0 1rem 2rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .report-tabs[_ngcontent-%COMP%] {
    padding: 0 1rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .report-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {
    display: none;
  }
  .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {
    white-space: nowrap;
    flex-shrink: 0;
  }
  .reports-header[_ngcontent-%COMP%] {
    padding: 1.5rem 1rem;
  }
  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: flex-end;
  }
}
@media (max-width: 768px) {
  .reports-content[_ngcontent-%COMP%] {
    padding: 0 1rem 1rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%] {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%] {
    padding: 0.75rem;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%] {
    width: 2.5rem;
    height: 2.5rem;
  }
  .reports-header[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }
  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
  .report-tabs[_ngcontent-%COMP%] {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }
  .asset-overview-section[_ngcontent-%COMP%]   .kpi-overview-card[_ngcontent-%COMP%]   .kpi-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .asset-overview-section[_ngcontent-%COMP%]   .charts-overview-card[_ngcontent-%COMP%]   .charts-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .asset-overview-section[_ngcontent-%COMP%]   .charts-overview-card[_ngcontent-%COMP%]   .charts-grid[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%] {
    max-height: 300px;
  }
}
@media (max-width: 480px) {
  .reports-content[_ngcontent-%COMP%] {
    padding: 0 0.75rem 1rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%], 
   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%] {
    padding: 0.75rem;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
    padding: 0.75rem;
    flex-direction: column;
    text-align: center;
  }
  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
    width: 2.5rem;
    height: 2.5rem;
  }
  .reports-header[_ngcontent-%COMP%] {
    padding: 0.75rem;
  }
  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {
    font-size: 1.75rem;
  }
  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {
    font-size: 0.875rem;
  }
}
/*# sourceMappingURL=reports.page.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsPage, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReportsExportPanelComponent,
      PieChartComponent,
      BarChartComponent
    ], template: `<div class="reports-page">
  <!-- Debug Info (temporary) -->
  <div style="background: #f0f0f0; padding: 10px; margin: 10px; border: 1px solid #ccc;" *ngIf="false">
    <h3>Debug Info</h3>
    <p>Component loaded: {{ getCurrentTime() }}</p>
    <p>Active Tab: {{ activeTab }}</p>
    <p>Is Loading: {{ isLoading }}</p>
    <p>Has Data: {{ hasData }}</p>
    <p>Error Message: {{ errorMessage }}</p>
  </div>

  <!-- Header -->
  <div class="reports-header">
    <div class="header-content">
      <div class="header-left">
        <h1 class="title">Reports</h1>
        <p class="subtitle">Generate and export comprehensive reports for your asset management</p>
      </div>
      <div class="header-actions" style="display: none;">
        <button class="action-button refresh-button" (click)="onRefresh()" [disabled]="isLoading">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
            <path d="M3 21v-5h5"></path>
          </svg>
          Refresh
        </button>
        <button class="action-button export-button" (click)="onExport()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <path d="M7 10l5 5 5-5"></path>
            <path d="M12 15V3"></path>
          </svg>
          Export
        </button>
      </div>
    </div>
  </div>

  <!-- Report Category Tabs -->
  <div class="report-tabs">
    <button 
      *ngFor="let tab of tabs" 
      class="tab-button" 
      [class.active]="activeTab === tab.id"
      (click)="onTabChange(tab.id)">
      <svg class="tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
        <path d="M10 9H8"></path>
      </svg>
      {{ tab.label }}
      <span class="new-badge" *ngIf="tab.id === 'custom'">New</span>
    </button>
  </div>

  <!-- Export Drawer -->
  <app-reports-export-panel
    [isOpen]="showExportPanel"
    [activeTab]="activeTab"
    [config]="reportConfig"
    [selectedReports]="selectedReports"
    [selectedReport]="selectedReport"
    (close)="onCloseExportPanel()"
    (exportRequest)="onExportRequest($event)">
  </app-reports-export-panel>

  <!-- Main Content Area -->
  <div class="reports-content">
    
    <!-- Asset Reports UI -->
    <div *ngIf="activeTab === 'assets'" class="report-category">
      <!-- Filters and Configuration -->
      <div class="filters-section">
        <div class="filter-card">
          <h3>Report Configuration</h3>
          <p>Configure your asset reports with custom date ranges and filters</p>
          <div class="filter-row">
            <div class="filter-group">
              <label>Start Date</label>
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.start">
            </div>
            <div class="filter-group">
              <label>End Date</label>
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.end">
            </div>
            <div class="filter-group">
              <label>Export Format</label>
              <select class="filter-select" [(ngModel)]="exportFormat">
                <option value="pdf">PDF Document</option>
                <option value="xlsx">Excel Spreadsheet</option>
                <option value="csv">CSV File</option>
              </select>
            </div>
          </div>
          <button class="generate-button" (click)="onGenerateSelectedReports()" [disabled]="selectedReports.length === 0 || isGenerating">
            <span *ngIf="!isGenerating">Generate Selected Reports ({{ selectedReports.length }})</span>
            <span *ngIf="isGenerating" class="loading-content">
              <i class="loading-spinner"></i>
              Generating Report...
            </span>
          </button>
        </div>

        <div class="quick-reports-card">
          <h3>Quick Reports</h3>
          <p>Generate commonly requested reports instantly</p>
          <div class="quick-report-item" (click)="generateQuickReport('current-month')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Current Month Asset Summary</span>
          </div>
          <div class="quick-report-item" (click)="generateQuickReport('performance')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9M13 17V5M8 17v-3"></path>
            </svg>
            <span>Asset Performance Dashboard</span>
          </div>
          <div class="quick-report-item" (click)="generateQuickReport('warranty')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
            </svg>
            <span>Warranty Expiring This Quarter</span>
          </div>
        </div>
      </div>

      <!-- Asset Overview Section -->
      <div class="asset-overview-section" *ngIf="assetSummaryData">
        <!-- KPI Cards - Hidden -->
        <div class="overview-card kpi-overview-card" style="display: none;">
          <h3>Asset Overview</h3>
          <p>Key metrics and statistics for your asset portfolio</p>
          <div class="kpi-grid">
            <div class="kpi-item">
              <div class="kpi-icon-wrapper success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="kpi-details">
                <div class="kpi-label">Total Assets</div>
                <div class="kpi-value">{{ assetSummaryData?.totals?.total_count || 0 }}</div>
              </div>
            </div>
            
            <div class="kpi-item">
              <div class="kpi-icon-wrapper primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div class="kpi-details">
                <div class="kpi-label">Total Value</div>
                <div class="kpi-value">\${{ formatNumber(assetSummaryData?.totals?.total_value || 0) }}</div>
              </div>
            </div>
            
            <div class="kpi-item">
              <div class="kpi-icon-wrapper success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <div class="kpi-details">
                <div class="kpi-label">Active Assets</div>
                <div class="kpi-value">{{ assetSummaryData?.totals?.active_count || 0 }}</div>
              </div>
            </div>
            
            <div class="kpi-item">
              <div class="kpi-icon-wrapper warning">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="kpi-details">
                <div class="kpi-label">In Maintenance</div>
                <div class="kpi-value">{{ assetSummaryData?.totals?.maintenance_count || 0 }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Charts Section - Hidden -->
        <div class="overview-card charts-overview-card" style="display: none;">
          <h3>Asset Distribution</h3>
          <p>Visual representation of your asset data</p>
          <div class="charts-grid">
            <!-- Status Distribution Pie Chart -->
            <div class="chart-card">
              <h4>Assets by Status</h4>
              <app-pie-chart
                [data]="getStatusChartData()"
                [height]="280"
                [showLegend]="true">
              </app-pie-chart>
            </div>
            
            <!-- Category Distribution Bar Chart - Hidden -->
            <div class="chart-card" style="display: none;">
              <h4>Assets by Category</h4>
              <app-bar-chart
                [data]="getCategoryChartData()"
                [height]="280"
                [horizontal]="false"
                [color]="'#4F46E5'">
              </app-bar-chart>
            </div>
          </div>
        </div>
      </div>

      <!-- Available Reports -->
      <div class="available-reports">
        <h3>Available Asset Reports</h3>
        <p>Select the reports you want to generate. Multiple reports can be combined into a single export.</p>
        
        <div class="report-list">
          <div class="report-item" *ngFor="let report of assetReports">
            <input type="checkbox" [id]="report.id" name="assetReport" [value]="report.id" (change)="onReportSelectionChange(report.id, $event)" [checked]="isReportSelected(report.id)">
            <label [for]="report.id" class="report-card" [class.selected]="isReportSelected(report.id)">
              <div class="checkbox-indicator">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" *ngIf="isReportSelected(report.id)">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <div class="report-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                  <path d="M10 9H8"></path>
                </svg>
              </div>
              <div class="report-content">
                <h4>{{ report.title }}</h4>
                <p>{{ report.description }}</p>
                <span class="report-time">{{ report.estimatedTime }}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Maintenance Reports UI -->
    <div *ngIf="activeTab === 'maintenance'" class="report-category">
      <!-- Filters and Configuration -->
      <div class="filters-section">
        <div class="filter-card">
          <h3>Report Configuration</h3>
          <p>Configure your maintenance reports with custom date ranges and filters</p>
          <div class="filter-row">
            <div class="filter-group">
              <label>Start Date</label>
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.start">
            </div>
            <div class="filter-group">
              <label>End Date</label>
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.end">
            </div>
            <div class="filter-group">
              <label>Export Format</label>
              <select class="filter-select" [(ngModel)]="exportFormat">
                <option value="pdf">PDF Document</option>
                <option value="xlsx">Excel Spreadsheet</option>
                <option value="csv">CSV File</option>
              </select>
            </div>
          </div>
          <button class="generate-button" (click)="onGenerateSelectedReports()" [disabled]="selectedReports.length === 0 || isGenerating">
            <span *ngIf="!isGenerating">Generate Selected Reports ({{ selectedReports.length }})</span>
            <span *ngIf="isGenerating" class="loading-content">
              <i class="loading-spinner"></i>
              Generating Report...
            </span>
          </button>
        </div>

        <div class="quick-reports-card">
          <h3>Quick Reports</h3>
          <p>Generate commonly requested reports instantly</p>
          <div class="quick-report-item" (click)="generateQuickReport('monthly-summary')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Monthly Summary</span>
          </div>
          <div class="quick-report-item" (click)="generateQuickReport('overdue-tasks')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>Overdue Tasks</span>
          </div>
        </div>
      </div>

      <!-- Available Maintenance Reports -->
      <div class="available-reports">
        <h3>Available Maintenance Reports</h3>
        <p>Select the reports you want to generate. Multiple reports can be combined into a single export.</p>
        
        <!-- Export Controls - Hidden -->
        <div class="export-controls" style="display: none;">
          <button class="export-button" (click)="onExport()" [disabled]="!selectedReport && selectedReports.length === 0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export Selected
          </button>
        </div>
        
        <div class="report-list">
          <div class="report-item" *ngFor="let report of maintenanceReports">
            <input type="checkbox" [id]="report.id" name="maintenanceReport" [value]="report.id" (change)="onReportSelectionChange(report.id, $event)" [checked]="isReportSelected(report.id)">
            <label [for]="report.id" class="report-card" [class.selected]="isReportSelected(report.id)">
              <div class="checkbox-indicator">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" *ngIf="isReportSelected(report.id)">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <div class="report-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <div class="report-content">
                <h4>{{ report.title }}</h4>
                <p>{{ report.description }}</p>
                <span class="report-time">{{ report.estimatedTime }}</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- Maintenance KPIs - Hidden -->
      <div class="kpi-section" style="display: none;">
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>MTTR</h4>
            <span class="kpi-value">4.2h</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9M13 17V5M8 17v-3"></path>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>MTBF</h4>
            <span class="kpi-value">168h</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>Compliance</h4>
            <span class="kpi-value">94%</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>Cost/Asset</h4>
            <span class="kpi-value">$2.1K</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Inventory Reports UI -->
    <div *ngIf="activeTab === 'inventory'" class="report-category">
      <!-- Filters and Configuration -->
      <div class="filters-section">
        <div class="filter-card">
          <h3>Report Configuration</h3>
          <p>Configure your inventory reports with custom date ranges and filters</p>
          <div class="filter-row">
            <div class="filter-group">
              <label>Start Date</label>
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.start">
            </div>
            <div class="filter-group">
              <label>End Date</label>
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.end">
            </div>
            <div class="filter-group">
              <label>Export Format</label>
              <select class="filter-select" [(ngModel)]="exportFormat">
                <option value="pdf">PDF Document</option>
                <option value="xlsx">Excel Spreadsheet</option>
                <option value="csv">CSV File</option>
              </select>
            </div>
          </div>
          <button class="generate-button" (click)="onGenerateSelectedReports()" [disabled]="selectedReports.length === 0 || isGenerating">
            <span *ngIf="!isGenerating">Generate Selected Reports ({{ selectedReports.length }})</span>
            <span *ngIf="isGenerating" class="loading-content">
              <i class="loading-spinner"></i>
              Generating Report...
            </span>
          </button>
        </div>

        <div class="quick-reports-card">
          <h3>Quick Reports</h3>
          <p>Generate commonly requested reports instantly</p>
          <div class="quick-report-item" (click)="generateQuickReport('low-stock-alerts')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>Low Stock Alerts</span>
          </div>
          <div class="quick-report-item" (click)="generateQuickReport('top-consumed-items')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9M13 17V5M8 17v-3"></path>
            </svg>
            <span>Top Consumed Items</span>
          </div>
        </div>
      </div>

      <!-- Inventory KPIs - Hidden -->
      <div class="kpi-section" style="display: none;">
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>Total Value</h4>
            <span class="kpi-value">$124.5K</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9M13 17V5M8 17v-3"></path>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>Turnover Rate</h4>
            <span class="kpi-value">4.2x</span>
            <svg class="trend-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>Low Stock Items</h4>
            <span class="kpi-value">12</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>Active SKUs</h4>
            <span class="kpi-value">847</span>
          </div>
        </div>
      </div>

      <!-- Inventory Reports List -->
      <div class="available-reports">
        <h3>Available Inventory Reports</h3>
        <p>Generate comprehensive inventory analysis and management reports</p>

        <!-- Export Controls - Hidden -->
        <div class="export-controls" style="display: none;">
          <button class="export-button" (click)="onExport()" [disabled]="selectedReports.length === 0 && !selectedReport">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export Selected
          </button>
        </div>
        
        <div class="report-list">
          <div class="report-item" *ngFor="let report of inventoryReports">
            <input type="checkbox" [id]="report.id" name="inventoryReport" [value]="report.id" (change)="onReportSelectionChange(report.id, $event)" [checked]="isReportSelected(report.id)">
            <label [for]="report.id" class="report-card" [class.selected]="isReportSelected(report.id)">
              <div class="checkbox-indicator">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" *ngIf="isReportSelected(report.id)">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <div class="report-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div class="report-content">
                <h4>{{ report.title }}</h4>
                <p>{{ report.description }}</p>
                <span class="report-time">{{ report.estimatedTime }}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Financial Reports UI -->
    <div *ngIf="activeTab === 'financial'" class="report-category">
      <!-- Filters and Configuration -->
      <div class="filters-section">
        <div class="filter-card">
          <h3>Report Configuration</h3>
          <p>Configure your financial reports with custom date ranges and filters</p>
          <div class="filter-row">
            <div class="filter-group">
              <label>Start Date</label>
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.start">
            </div>
            <div class="filter-group">
              <label>End Date</label>
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.end">
            </div>
            <div class="filter-group">
              <label>Export Format</label>
              <select class="filter-select" [(ngModel)]="exportFormat">
                <option value="pdf">PDF Document</option>
                <option value="xlsx">Excel Spreadsheet</option>
                <option value="csv">CSV File</option>
              </select>
            </div>
          </div>
          <button class="generate-button" (click)="onGenerateSelectedReports()" [disabled]="selectedReports.length === 0 || isGenerating">
            <span *ngIf="!isGenerating">Generate Selected Reports ({{ selectedReports.length }})</span>
            <span *ngIf="isGenerating" class="loading-content">
              <i class="loading-spinner"></i>
              Generating Report...
            </span>
          </button>
        </div>

        <div class="quick-reports-card">
          <h3>Quick Reports</h3>
          <p>Generate commonly requested reports instantly</p>
          <div class="quick-report-item" (click)="generateQuickReport('monthly-pl')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span>Monthly P&L</span>
          </div>
          <div class="quick-report-item" (click)="generateQuickReport('cost-trends')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9M13 17V5M8 17v-3"></path>
            </svg>
            <span>Cost Trends</span>
          </div>
        </div>
      </div>

      <!-- Financial KPIs - Hidden -->
      <div class="kpi-section" style="display: none;">
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>Total Asset Value</h4>
            <span class="kpi-value">AED 2.4M</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>Monthly Costs</h4>
            <span class="kpi-value">AED 68K</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9M13 17V5M8 17v-3"></path>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>Budget Variance</h4>
            <span class="kpi-value">-8.2%</span>
            <svg class="trend-icon positive" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
          </div>
          <div class="kpi-content">
            <h4>ROI</h4>
            <span class="kpi-value">12.4%</span>
          </div>
        </div>
      </div>

      <!-- Financial Reports List -->
      <div class="available-reports">
        <h3>Available Financial Reports</h3>
        <p>Generate comprehensive financial analysis and cost management reports</p>

        <!-- Export Controls - Hidden -->
        <div class="export-controls" style="display: none;">
          <button class="export-button" (click)="onExport()" [disabled]="selectedReports.length === 0 && !selectedReport">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export Selected
          </button>
        </div>
        
        <div class="report-list">
          <div class="report-item" *ngFor="let report of financialReports">
            <input type="checkbox" [id]="report.id" name="financialReport" [value]="report.id" (change)="onReportSelectionChange(report.id, $event)" [checked]="isReportSelected(report.id)">
            <label [for]="report.id" class="report-card" [class.selected]="isReportSelected(report.id)">
              <div class="checkbox-indicator">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" *ngIf="isReportSelected(report.id)">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <div class="report-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                  <path d="M10 9H8"></path>
                </svg>
              </div>
              <div class="report-content">
                <h4>{{ report.title }}</h4>
                <p>{{ report.description }}</p>
                <span class="report-time">{{ report.estimatedTime }}</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- Cost Distribution Chart -->
      <div class="cost-distribution">
        <h3>Cost Distribution Overview</h3>
        <p>Visual breakdown of expenses across different categories</p>
        <div class="chart-container">
          <div class="chart-bar maintenance" style="width: 45%">
            <span>Maintenance (45%)</span>
          </div>
          <div class="chart-bar operations" style="width: 32%">
            <span>Operations (32%)</span>
          </div>
          <div class="chart-bar administration" style="width: 23%">
            <span>Administration (23%)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Reports UI -->
    <div *ngIf="activeTab === 'custom'" class="report-category">
      <div class="custom-reports-layout">
        <!-- Left Panel: Create Custom Report -->
        <div class="create-report-panel">
          <h3>+ Create Custom Report</h3>
          <p>Build custom reports by selecting data sources, fields, and applying filters</p>
          
          <div class="form-section">
            <div class="form-group">
              <label>Report Name</label>
              <input type="text" class="form-input" placeholder="Enter report name..." [(ngModel)]="customReport.name">
            </div>
            
            <div class="form-group">
              <label>Output Format</label>
              <select class="form-select" [(ngModel)]="customReport.format">
                <option value="pdf">PDF Document</option>
                <option value="xlsx">Excel Spreadsheet</option>
                <option value="csv">CSV File</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-textarea" placeholder="Describe what this report will analyze..." [(ngModel)]="customReport.description"></textarea>
            </div>
          </div>

          <div class="data-sources">
            <h4>Data Sources</h4>
            <div class="data-source-item" *ngFor="let source of dataSources">
              <input type="radio" [id]="source.id" name="dataSource" [(ngModel)]="customReport.dataSource" [value]="source.id">
              <label [for]="source.id">
                <span class="source-name">{{ source.name }}</span>
                <span class="field-count">{{ source.fieldCount }} fields available</span>
              </label>
            </div>
          </div>

          <div class="filter-conditions">
            <h4>Filter Conditions (Optional)</h4>
            <textarea class="form-textarea" placeholder="e.g., status = 'active' AND purchase_cost > 1000" [(ngModel)]="customReport.filters"></textarea>
          </div>

          <div class="form-actions">
            <button class="btn-primary" (click)="runCustomReport()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5,3 19,12 5,21"></polygon>
              </svg>
              Run Report
            </button>
            <button class="btn-secondary" (click)="saveCustomReport()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17,21 17,13 7,13 7,21"></polyline>
                <polyline points="7,3 7,8 15,8"></polyline>
              </svg>
              Save Template
            </button>
          </div>
        </div>

        <!-- Right Panel: Saved Reports & Templates -->
        <div class="saved-reports-panel">
          <!-- Saved Reports -->
          <div class="saved-reports">
            <h3>Saved Reports</h3>
            <p>Manage your custom report templates</p>
            
            <div class="saved-report-item" *ngFor="let report of savedReports">
              <div class="report-info">
                <h4>{{ report.name }}</h4>
                <p>{{ report.description }}</p>
                <div class="report-meta">
                  <span>{{ report.frequency }}</span>
                  <span>{{ report.lastRun }}</span>
                </div>
              </div>
              <div class="report-actions">
                <button class="action-btn" (click)="editReport(report)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </button>
                <button class="action-btn" (click)="runReport(report)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Quick Templates -->
          <div class="quick-templates">
            <h3>Quick Templates</h3>
            <p>Start with pre-built report templates</p>
            
            <div class="template-item" *ngFor="let template of quickTemplates" (click)="useTemplate(template)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <path d="M14 2v6h6"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
                <path d="M10 9H8"></path>
              </svg>
              <span>{{ template.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`, styles: [`/* src/app/reports/pages/reports.page.scss */
.reports-page {
  min-height: 100vh;
  background: #f9fafb;
  padding: 0;
}
.reports-page .reports-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.reports-page .reports-header .header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.reports-page .reports-header .header-content .header-left .title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}
.reports-page .reports-header .header-content .header-left .subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}
.reports-page .reports-header .header-content .header-actions {
  display: flex;
  gap: 1rem;
}
.reports-page .reports-header .header-content .header-actions .action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.reports-page .reports-header .header-content .header-actions .action-button:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.reports-page .reports-header .header-content .header-actions .action-button.refresh-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.reports-page .reports-header .header-content .header-actions .action-button.export-button {
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #1d4ed8 100%);
  color: white;
  border-color: #3b82f6;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
}
.reports-page .reports-header .header-content .header-actions .action-button.export-button:hover {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1e40af 100%);
  border-color: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);
}
.reports-page .reports-header .header-content .header-actions .action-button svg {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
.reports-page .report-tabs {
  display: flex;
  gap: 0;
  padding: 0 2rem;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #e5e7eb;
}
.reports-page .report-tabs .tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 0.5rem 0.5rem 0 0;
}
.reports-page .report-tabs .tab-button:hover {
  color: #374151;
  background: #f9fafb;
}
.reports-page .report-tabs .tab-button.active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
  background: #f0f9ff;
}
.reports-page .report-tabs .tab-button .tab-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
.reports-page .report-tabs .tab-button .new-badge {
  background: #10b981;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  margin-left: 0.25rem;
  font-weight: 600;
}
.reports-page .reports-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}
.reports-page .reports-content .report-category .filters-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.reports-page .reports-content .report-category .filters-section .filter-card,
.reports-page .reports-content .report-category .filters-section .quick-reports-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.reports-page .reports-content .report-category .filters-section .filter-card:hover,
.reports-page .reports-content .report-category .filters-section .quick-reports-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);
}
.reports-page .reports-content .report-category .filters-section .filter-card h3,
.reports-page .reports-content .report-category .filters-section .quick-reports-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}
.reports-page .reports-content .report-category .filters-section .filter-card p,
.reports-page .reports-content .report-category .filters-section .quick-reports-card p {
  color: #6b7280;
  margin: 0 0 1rem 0;
  line-height: 1.6;
}
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group {
  flex: 1;
}
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group label,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-input,
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-select,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-input,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s ease;
}
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-input:focus,
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-select:focus,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-input:focus,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-input:hover,
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-select:hover,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-input:hover,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-select:hover {
  border-color: #d1d5db;
}
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-select,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M6 8l4 4 4-4' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem 1rem;
  padding-right: 2.5rem;
  cursor: pointer;
}
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-select:hover,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-select:hover {
  border-color: #d1d5db;
  background-color: #fafafa;
}
.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-select:disabled,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-select:disabled {
  background-color: #f3f4f6;
  color: #9ca3af;
  cursor: not-allowed;
}
.reports-page .reports-content .report-category .filters-section .filter-card .generate-button,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button {
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #1d4ed8 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
}
.reports-page .reports-content .report-category .filters-section .filter-card .generate-button:hover:not(:disabled),
.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button:hover:not(:disabled) {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1e40af 100%);
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);
}
.reports-page .reports-content .report-category .filters-section .filter-card .generate-button:disabled,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.reports-page .reports-content .report-category .filters-section .filter-card .generate-button .loading-content,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button .loading-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.reports-page .reports-content .report-category .filters-section .filter-card .generate-button .loading-content .loading-spinner,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button .loading-content .loading-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
.reports-page .reports-content .report-category .filters-section .filter-card .quick-report-item,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-report-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}
.reports-page .reports-content .report-category .filters-section .filter-card .quick-report-item:hover,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-report-item:hover {
  background: #f9fafb;
  border-color: #e5e7eb;
  transform: translateY(-1px);
}
.reports-page .reports-content .report-category .filters-section .filter-card .quick-report-item svg,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-report-item svg {
  width: 1rem;
  height: 1rem;
  color: #6b7280;
  flex-shrink: 0;
}
.reports-page .reports-content .report-category .filters-section .filter-card .quick-report-item span,
.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-report-item span {
  font-size: 0.875rem;
  color: #374151;
}
.reports-page .reports-content .report-category .available-reports,
.reports-page .reports-content .report-category .maintenance-reports,
.reports-page .reports-content .report-category .inventory-reports,
.reports-page .reports-content .report-category .financial-reports {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
  margin-bottom: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.reports-page .reports-content .report-category .available-reports:hover,
.reports-page .reports-content .report-category .maintenance-reports:hover,
.reports-page .reports-content .report-category .inventory-reports:hover,
.reports-page .reports-content .report-category .financial-reports:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);
}
.reports-page .reports-content .report-category .available-reports h3,
.reports-page .reports-content .report-category .maintenance-reports h3,
.reports-page .reports-content .report-category .inventory-reports h3,
.reports-page .reports-content .report-category .financial-reports h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}
.reports-page .reports-content .report-category .available-reports p,
.reports-page .reports-content .report-category .maintenance-reports p,
.reports-page .reports-content .report-category .inventory-reports p,
.reports-page .reports-content .report-category .financial-reports p {
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
}
.reports-page .reports-content .report-category .available-reports .export-controls,
.reports-page .reports-content .report-category .maintenance-reports .export-controls,
.reports-page .reports-content .report-category .inventory-reports .export-controls,
.reports-page .reports-content .report-category .financial-reports .export-controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.reports-page .reports-content .report-category .available-reports .export-controls .export-button,
.reports-page .reports-content .report-category .maintenance-reports .export-controls .export-button,
.reports-page .reports-content .report-category .inventory-reports .export-controls .export-button,
.reports-page .reports-content .report-category .financial-reports .export-controls .export-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #1d4ed8 100%);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
  cursor: pointer;
  transition: all 0.2s ease;
}
.reports-page .reports-content .report-category .available-reports .export-controls .export-button:hover:not(:disabled),
.reports-page .reports-content .report-category .maintenance-reports .export-controls .export-button:hover:not(:disabled),
.reports-page .reports-content .report-category .inventory-reports .export-controls .export-button:hover:not(:disabled),
.reports-page .reports-content .report-category .financial-reports .export-controls .export-button:hover:not(:disabled) {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1e40af 100%);
  transform: translateY(-1px);
}
.reports-page .reports-content .report-category .available-reports .export-controls .export-button:disabled,
.reports-page .reports-content .report-category .maintenance-reports .export-controls .export-button:disabled,
.reports-page .reports-content .report-category .inventory-reports .export-controls .export-button:disabled,
.reports-page .reports-content .report-category .financial-reports .export-controls .export-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  box-shadow: none;
}
.reports-page .reports-content .report-category .available-reports .export-controls .export-button svg,
.reports-page .reports-content .report-category .maintenance-reports .export-controls .export-button svg,
.reports-page .reports-content .report-category .inventory-reports .export-controls .export-button svg,
.reports-page .reports-content .report-category .financial-reports .export-controls .export-button svg {
  width: 1rem;
  height: 1rem;
}
.reports-page .reports-content .report-category .available-reports .report-list,
.reports-page .reports-content .report-category .available-reports .report-grid,
.reports-page .reports-content .report-category .maintenance-reports .report-list,
.reports-page .reports-content .report-category .maintenance-reports .report-grid,
.reports-page .reports-content .report-category .inventory-reports .report-list,
.reports-page .reports-content .report-category .inventory-reports .report-grid,
.reports-page .reports-content .report-category .financial-reports .report-list,
.reports-page .reports-content .report-category .financial-reports .report-grid {
  display: grid;
  gap: 1rem;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item {
  position: relative;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item input[type=checkbox],
.reports-page .reports-content .report-category .available-reports .report-grid .report-item input[type=checkbox],
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item input[type=checkbox],
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item input[type=checkbox],
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item input[type=checkbox],
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item input[type=checkbox],
.reports-page .reports-content .report-category .financial-reports .report-list .report-item input[type=checkbox],
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item input[type=checkbox] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item input[type=checkbox]:checked + .report-card,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item input[type=checkbox]:checked + .report-card,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item input[type=checkbox]:checked + .report-card,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item input[type=checkbox]:checked + .report-card,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item input[type=checkbox]:checked + .report-card,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item input[type=checkbox]:checked + .report-card,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item input[type=checkbox]:checked + .report-card,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item input[type=checkbox]:checked + .report-card {
  border-color: #3b82f6;
  background: #f0f9ff;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item input[type=checkbox]:checked + .report-card .report-icon,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item input[type=checkbox]:checked + .report-card .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item input[type=checkbox]:checked + .report-card .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item input[type=checkbox]:checked + .report-card .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item input[type=checkbox]:checked + .report-card .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item input[type=checkbox]:checked + .report-card .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item input[type=checkbox]:checked + .report-card .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item input[type=checkbox]:checked + .report-card .report-icon {
  background: #dbeafe;
  color: #3b82f6;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .checkbox-indicator,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .checkbox-indicator,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .checkbox-indicator,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .checkbox-indicator,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .checkbox-indicator,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .checkbox-indicator,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .checkbox-indicator,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .checkbox-indicator,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .checkbox-indicator,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .checkbox-indicator,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .checkbox-indicator,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .checkbox-indicator,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .checkbox-indicator,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .checkbox-indicator,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .checkbox-indicator,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .checkbox-indicator {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  background: white;
  transition: all 0.2s ease;
  flex-shrink: 0;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .checkbox-indicator svg,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .checkbox-indicator svg,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .checkbox-indicator svg,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .checkbox-indicator svg,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .checkbox-indicator svg,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .checkbox-indicator svg,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .checkbox-indicator svg,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .checkbox-indicator svg,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .checkbox-indicator svg,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .checkbox-indicator svg,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .checkbox-indicator svg,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .checkbox-indicator svg,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .checkbox-indicator svg,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .checkbox-indicator svg,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .checkbox-indicator svg,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .checkbox-indicator svg {
  color: #3b82f6;
  stroke-width: 3;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card:hover,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content:hover,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card:hover,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content:hover,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card:hover,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content:hover,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card:hover,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content:hover,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card:hover,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content:hover,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card:hover,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content:hover,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card:hover,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content:hover,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card:hover,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content:hover {
  border-color: #d1d5db;
  background: #f9fafb;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card.selected,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content.selected,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card.selected,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content.selected,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card.selected,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content.selected,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card.selected,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content.selected,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card.selected,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content.selected,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card.selected,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content.selected,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card.selected,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content.selected,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card.selected,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content.selected {
  background: #f0f9ff;
  border-color: #3b82f6;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card.selected .checkbox-indicator,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content.selected .checkbox-indicator,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card.selected .checkbox-indicator,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content.selected .checkbox-indicator,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card.selected .checkbox-indicator,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content.selected .checkbox-indicator,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card.selected .checkbox-indicator,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content.selected .checkbox-indicator,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card.selected .checkbox-indicator,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content.selected .checkbox-indicator,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card.selected .checkbox-indicator,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content.selected .checkbox-indicator,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card.selected .checkbox-indicator,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content.selected .checkbox-indicator,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card.selected .checkbox-indicator,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content.selected .checkbox-indicator {
  background: #3b82f6;
  border-color: #3b82f6;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card.selected .report-icon,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content.selected .report-icon,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card.selected .report-icon,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content.selected .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card.selected .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content.selected .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card.selected .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content.selected .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card.selected .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content.selected .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card.selected .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content.selected .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card.selected .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content.selected .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card.selected .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content.selected .report-icon {
  background: #dbeafe;
  color: #3b82f6;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-icon,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-icon,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-icon,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-icon,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-icon,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-icon,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 8px;
  color: #6b7280;
  transition: all 0.2s ease;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-icon svg,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-icon svg,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-icon svg,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-icon svg,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-icon svg,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-icon svg,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-icon svg,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-icon svg,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-icon svg,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-icon svg,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-icon svg,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-icon svg,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-icon svg,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-icon svg,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-icon svg,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-content,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-content,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-content,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-content,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-content,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-content,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-content,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-content,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-content,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-content,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-content,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-content,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-content,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-content,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-content,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-content {
  flex: 1;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-content h4,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-content h4,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-content h4,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-content h4,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-content h4,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-content h4,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-content h4,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-content h4,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-content h4,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-content h4,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-content h4,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-content h4,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-content h4,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-content h4,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-content h4,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
  line-height: 1.4;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-content p,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-content p,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-content p,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-content p,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-content p,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-content p,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-content p,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-content p,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-content p,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-content p,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-content p,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-content p,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-content p,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-content p,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-content p,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-content p {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
}
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-content .report-time,
.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-content .report-time,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-content .report-time,
.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-content .report-time,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-content .report-time,
.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-content .report-time,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-content .report-time,
.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-content .report-time,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-content .report-time,
.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-content .report-time,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-content .report-time,
.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-content .report-time,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-content .report-time,
.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-content .report-time,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-content .report-time,
.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-content .report-time {
  font-size: 0.75rem;
  color: #6b7280;
  background: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
.reports-page .reports-content .report-category .available-reports .report-grid,
.reports-page .reports-content .report-category .maintenance-reports .report-grid,
.reports-page .reports-content .report-category .inventory-reports .report-grid,
.reports-page .reports-content .report-category .financial-reports .report-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.reports-page .reports-content .report-category .kpi-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}
.reports-page .reports-content .report-category .kpi-section .kpi-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.reports-page .reports-content .report-category .kpi-section .kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);
}
.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f9ff;
  border-radius: 8px;
  color: #3b82f6;
  flex-shrink: 0;
}
.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content {
  flex: 1;
}
.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content .kpi-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 0.25rem 0;
  font-weight: 500;
}
.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content .kpi-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1.2;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content .trend-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}
.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content .trend-icon.positive {
  color: #10b981;
}
.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content .trend-icon.negative {
  color: #ef4444;
}
.reports-page .reports-content .report-category .cost-distribution {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}
.reports-page .reports-content .report-category .cost-distribution h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}
.reports-page .reports-content .report-category .cost-distribution p {
  color: #64748b;
  margin: 0 0 1.5rem 0;
}
.reports-page .reports-content .report-category .cost-distribution .chart-container {
  display: flex;
  height: 2rem;
  border-radius: 0.375rem;
  overflow: hidden;
}
.reports-page .reports-content .report-category .cost-distribution .chart-container .chart-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
}
.reports-page .reports-content .report-category .cost-distribution .chart-container .chart-bar.maintenance {
  background: #3b82f6;
}
.reports-page .reports-content .report-category .cost-distribution .chart-container .chart-bar.operations {
  background: #3b82f6;
}
.reports-page .reports-content .report-category .cost-distribution .chart-container .chart-bar.administration {
  background: #10b981;
}
.reports-page .reports-content .custom-reports-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel:hover,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);
}
.reports-page .reports-content .custom-reports-layout .create-report-panel h3,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel p,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel p {
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section {
  margin-bottom: 1.5rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group {
  margin-bottom: 1rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group label,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-input,
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-select,
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-textarea,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-input,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-select,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s ease;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-input:focus,
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-select:focus,
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-textarea:focus,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-input:focus,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-select:focus,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-input:hover,
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-select:hover,
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-textarea:hover,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-input:hover,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-select:hover,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-textarea:hover {
  border-color: #d1d5db;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-section .form-group .form-textarea,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-section .form-group .form-textarea {
  min-height: 4rem;
  resize: vertical;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .data-sources,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .data-sources {
  margin-bottom: 1.5rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .data-sources h4,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .data-sources h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .data-sources .data-source-item,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .data-sources .data-source-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .data-sources .data-source-item:hover,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .data-sources .data-source-item:hover {
  background: #f3f4f6;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .data-sources .data-source-item input[type=radio],
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .data-sources .data-source-item input[type=radio] {
  margin: 0;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .data-sources .data-source-item label,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .data-sources .data-source-item label {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .data-sources .data-source-item label .source-name,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .data-sources .data-source-item label .source-name {
  font-weight: 500;
  color: #374151;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .data-sources .data-source-item label .field-count,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .data-sources .data-source-item label .field-count {
  font-size: 0.75rem;
  color: #9ca3af;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .filter-conditions,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .filter-conditions {
  margin-bottom: 1.5rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .filter-conditions h4,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .filter-conditions h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-actions,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-actions {
  display: flex;
  gap: 1rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-actions .btn-primary,
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-actions .btn-secondary,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-actions .btn-primary,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-actions .btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-actions .btn-primary svg,
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-actions .btn-secondary svg,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-actions .btn-primary svg,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-actions .btn-secondary svg {
  width: 1rem;
  height: 1rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-actions .btn-primary,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-actions .btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-actions .btn-primary:hover,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-actions .btn-primary:hover {
  background: #2563eb;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-actions .btn-secondary,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-actions .btn-secondary {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .form-actions .btn-secondary:hover,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .form-actions .btn-secondary:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .saved-report-item,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .saved-report-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .saved-report-item .report-info h4,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .saved-report-item .report-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.25rem 0;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .saved-report-item .report-info p,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .saved-report-item .report-info p {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 0 0.5rem 0;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .saved-report-item .report-info .report-meta,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .saved-report-item .report-info .report-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #9ca3af;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .saved-report-item .report-actions,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .saved-report-item .report-actions {
  display: flex;
  gap: 0.5rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .saved-report-item .report-actions .action-btn,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .saved-report-item .report-actions .action-btn {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background: white;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .saved-report-item .report-actions .action-btn:hover,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .saved-report-item .report-actions .action-btn:hover {
  background: #f3f4f6;
  color: #374151;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .saved-report-item .report-actions .action-btn svg,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .saved-report-item .report-actions .action-btn svg {
  width: 1rem;
  height: 1rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .quick-templates h3,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .quick-templates h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .quick-templates .template-item,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .quick-templates .template-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 0.5rem;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .quick-templates .template-item:hover,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .quick-templates .template-item:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .quick-templates .template-item svg,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .quick-templates .template-item svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #6b7280;
}
.reports-page .reports-content .custom-reports-layout .create-report-panel .quick-templates .template-item span,
.reports-page .reports-content .custom-reports-layout .saved-reports-panel .quick-templates .template-item span {
  font-size: 0.875rem;
  color: #374151;
}
.reports-page .asset-overview-section {
  margin: 2rem 0;
}
.reports-page .asset-overview-section .overview-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;
}
.reports-page .asset-overview-section .overview-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.reports-page .asset-overview-section .overview-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}
.reports-page .asset-overview-section .overview-card p {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  transform: translateY(-2px);
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item .kpi-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex-shrink: 0;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item .kpi-icon-wrapper svg {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item .kpi-icon-wrapper.success {
  background: #d1fae5;
  color: #10b981;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item .kpi-icon-wrapper.primary {
  background: #dbeafe;
  color: #3b82f6;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item .kpi-icon-wrapper.warning {
  background: #fef3c7;
  color: #f59e0b;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item .kpi-details {
  flex: 1;
  min-width: 0;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item .kpi-details .kpi-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}
.reports-page .asset-overview-section .kpi-overview-card .kpi-grid .kpi-item .kpi-details .kpi-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
}
.reports-page .asset-overview-section .charts-overview-card .charts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.reports-page .asset-overview-section .charts-overview-card .charts-grid .chart-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.25rem;
  max-height: 380px;
}
.reports-page .asset-overview-section .charts-overview-card .charts-grid .chart-card h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem 0;
}
.reports-page .loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);
}
.reports-page .loading-state .loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid #e5e7eb;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}
.reports-page .loading-state .loading-text {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
}
.reports-page .no-data-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
}
.reports-page .no-data-state .no-data-icon {
  color: #9ca3af;
  margin-bottom: 1rem;
}
.reports-page .no-data-state .no-data-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}
.reports-page .no-data-state .no-data-description {
  color: #64748b;
  margin: 0 0 1.5rem 0;
  max-width: 400px;
}
.reports-page .no-data-state .retry-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.reports-page .no-data-state .retry-button:hover {
  background: #2563eb;
}
.reports-page .no-data-state .retry-button svg {
  width: 1rem;
  height: 1rem;
}
.reports-page .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
}
.reports-page .error-state .error-icon {
  color: #ef4444;
  margin-bottom: 1rem;
}
.reports-page .error-state .error-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}
.reports-page .error-state .error-description {
  color: #64748b;
  margin: 0 0 1.5rem 0;
  max-width: 400px;
}
.reports-page .error-state .retry-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}
.reports-page .error-state .retry-button:hover {
  background: #2563eb;
}
.reports-page .error-state .retry-button svg {
  width: 1rem;
  height: 1rem;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 1024px) {
  .reports-content {
    padding: 0 1rem 2rem;
  }
  .reports-content .report-category .filters-section {
    grid-template-columns: 1fr;
  }
  .reports-content .report-category .kpi-section {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .reports-content .report-category .custom-reports-layout {
    grid-template-columns: 1fr;
  }
  .report-tabs {
    padding: 0 1rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .report-tabs::-webkit-scrollbar {
    display: none;
  }
  .report-tabs .tab-button {
    white-space: nowrap;
    flex-shrink: 0;
  }
  .reports-header {
    padding: 1.5rem 1rem;
  }
  .reports-header .header-content {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  .reports-header .header-content .header-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
@media (max-width: 768px) {
  .reports-content {
    padding: 0 1rem 1rem;
  }
  .reports-content .report-category .filters-section {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .reports-content .report-category .filters-section .filter-card,
  .reports-content .report-category .filters-section .quick-reports-card {
    padding: 1rem;
  }
  .reports-content .report-category .kpi-section {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  .reports-content .report-category .kpi-section .kpi-card {
    padding: 1rem;
  }
  .reports-content .report-category .available-reports,
  .reports-content .report-category .maintenance-reports,
  .reports-content .report-category .inventory-reports,
  .reports-content .report-category .financial-reports {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .reports-content .report-category .available-reports .report-list .report-item .report-card,
  .reports-content .report-category .available-reports .report-list .report-item .report-card-content,
  .reports-content .report-category .available-reports .report-grid .report-item .report-card,
  .reports-content .report-category .available-reports .report-grid .report-item .report-card-content,
  .reports-content .report-category .maintenance-reports .report-list .report-item .report-card,
  .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content,
  .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card,
  .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content,
  .reports-content .report-category .inventory-reports .report-list .report-item .report-card,
  .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content,
  .reports-content .report-category .inventory-reports .report-grid .report-item .report-card,
  .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content,
  .reports-content .report-category .financial-reports .report-list .report-item .report-card,
  .reports-content .report-category .financial-reports .report-list .report-item .report-card-content,
  .reports-content .report-category .financial-reports .report-grid .report-item .report-card,
  .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content {
    padding: 0.75rem;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  .reports-content .report-category .available-reports .report-list .report-item .report-card .report-icon,
  .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-icon,
  .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-icon,
  .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-icon,
  .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-icon,
  .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-icon,
  .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-icon,
  .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-icon,
  .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-icon,
  .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-icon,
  .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-icon,
  .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-icon,
  .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-icon,
  .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-icon,
  .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-icon,
  .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  .reports-header {
    padding: 1rem;
  }
  .reports-header .header-content .header-left .title {
    font-size: 2rem;
  }
  .reports-header .header-content .header-left .subtitle {
    font-size: 1rem;
  }
  .reports-header .header-content .header-actions {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }
  .reports-header .header-content .header-actions .action-button {
    width: 100%;
    justify-content: center;
  }
  .report-tabs {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }
  .asset-overview-section .kpi-overview-card .kpi-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .asset-overview-section .charts-overview-card .charts-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .asset-overview-section .charts-overview-card .charts-grid .chart-card {
    max-height: 300px;
  }
}
@media (max-width: 480px) {
  .reports-content {
    padding: 0 0.75rem 1rem;
  }
  .reports-content .report-category .filters-section .filter-card,
  .reports-content .report-category .filters-section .quick-reports-card {
    padding: 0.75rem;
  }
  .reports-content .report-category .kpi-section .kpi-card {
    padding: 0.75rem;
    flex-direction: column;
    text-align: center;
  }
  .reports-content .report-category .kpi-section .kpi-card .kpi-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  .reports-header {
    padding: 0.75rem;
  }
  .reports-header .header-content .header-left .title {
    font-size: 1.75rem;
  }
  .reports-header .header-content .header-left .subtitle {
    font-size: 0.875rem;
  }
}
/*# sourceMappingURL=reports.page.css.map */
`] }]
  }], () => [{ type: ReportsApiService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsPage, { className: "ReportsPage", filePath: "src/app/reports/pages/reports.page.ts", lineNumber: 26 });
})();

// src/app/reports/reports-routing.module.ts
var routes = [
  {
    path: "",
    component: ReportsPage,
    data: {
      title: "Reports",
      breadcrumb: "Reports"
    }
  },
  {
    path: "assets",
    component: ReportsPage,
    data: {
      title: "Asset Reports",
      breadcrumb: "Asset Reports",
      category: "assets"
    }
  },
  {
    path: "maintenance",
    component: ReportsPage,
    data: {
      title: "Maintenance Reports",
      breadcrumb: "Maintenance Reports",
      category: "maintenance"
    }
  },
  {
    path: "inventory",
    component: ReportsPage,
    data: {
      title: "Inventory Reports",
      breadcrumb: "Inventory Reports",
      category: "inventory"
    }
  },
  {
    path: "financial",
    component: ReportsPage,
    data: {
      title: "Financial Reports",
      breadcrumb: "Financial Reports",
      category: "financial"
    }
  },
  {
    path: "custom",
    component: ReportsPage,
    data: {
      title: "Custom Reports",
      breadcrumb: "Custom Reports",
      category: "custom"
    }
  }
];
var ReportsRoutingModule = class _ReportsRoutingModule {
  static \u0275fac = function ReportsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/reports/reports.module.ts
var ReportsModule = class _ReportsModule {
  static \u0275fac = function ReportsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    ReportsApiService,
    ExportService
  ], imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReportsRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReportsRoutingModule
      ],
      providers: [
        ReportsApiService,
        ExportService
      ]
    }]
  }], null, null);
})();
export {
  ReportsModule
};
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=chunk-R3GME4OX.js.map
