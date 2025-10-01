import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FSOYXA4J.js";
import {
  RouterModule
} from "./chunk-E2GGJA5S.js";
import {
  environment
} from "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  HttpClient,
  HttpClientModule,
  HttpParams,
  NgForOf,
  NgIf
} from "./chunk-MMJF4Y5E.js";
import {
  BehaviorSubject,
  Component,
  Injectable,
  NgModule,
  Observable,
  Subject,
  catchError,
  setClassMetadata,
  switchMap,
  takeUntil,
  takeWhile,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YUR5IGOK.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/reports/services/reports-api.service.ts
var ReportsApiService = class _ReportsApiService {
  http;
  apiUrl = `${environment.apiUrl}/reports`;
  constructor(http) {
    this.http = http;
  }
  // Asset Reports
  getAssetSummary(config) {
    const params = this.buildParams(config);
    console.log("Making API request to:", `${this.apiUrl}/assets/summary`);
    console.log("With params:", params);
    console.log("Auth token:", localStorage.getItem("token"));
    return this.http.get(`${this.apiUrl}/assets/summary`, { params });
  }
  getAssetUtilization(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/assets/utilization`, { params });
  }
  getAssetDepreciation(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/assets/depreciation`, { params });
  }
  getAssetWarranty(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/assets/warranty`, { params });
  }
  getAssetCompliance(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/assets/compliance`, { params });
  }
  getAvailableAssetReports() {
    return this.http.get(`${this.apiUrl}/assets/available`);
  }
  // Maintenance Reports
  getMaintenanceSummary(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/summary`, { params });
  }
  getMaintenanceCompliance(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/compliance`, { params });
  }
  getMaintenanceCosts(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/costs`, { params });
  }
  getMaintenanceDowntime(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/downtime`, { params });
  }
  getMaintenanceFailureAnalysis(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/failure-analysis`, { params });
  }
  getMaintenanceTechnicianPerformance(config) {
    const params = this.buildParams(config);
    return this.http.get(`${this.apiUrl}/maintenance/technician-performance`, { params });
  }
  getAvailableMaintenanceReports() {
    return this.http.get(`${this.apiUrl}/maintenance/available`);
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
    return this.http.get(`${environment.apiUrl}/work-order-statuses`);
  }
  getWorkOrderPriorities() {
    return this.http.get(`${environment.apiUrl}/work-order-priorities`);
  }
  getWorkOrderCategories() {
    return this.http.get(`${environment.apiUrl}/work-order-categories`);
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
  formatCurrency(value, currency = "AED") {
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
    return new (__ngFactoryType__ || _ReportsApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportsApiService, factory: _ReportsApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
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
      }, false),
      // Don't include the final value that caused the condition to become false
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
      this.downloadInNewTab(runId, filename);
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

// src/app/reports/pages/reports.page.ts
function ReportsPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h3");
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
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ReportsPage_button_24_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTabChange(tab_r3.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 25)(3, "path", 26)(4, "path", 27)(5, "path", 28)(6, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275template(8, ReportsPage_button_24_span_8_Template, 2, 0, "span", 30);
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
function ReportsPage_div_26_span_27_Template(rf, ctx) {
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
function ReportsPage_div_26_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2, " Generating Report... ");
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_26_div_61__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "polyline", 71);
    \u0275\u0275elementEnd();
  }
}
function ReportsPage_div_26_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "input", 63);
    \u0275\u0275listener("change", function ReportsPage_div_26_div_61_Template_input_change_1_listener($event) {
      const report_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onReportSelectionChange(report_r6.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 64)(3, "div", 65);
    \u0275\u0275template(4, ReportsPage_div_26_div_61__svg_svg_4_Template, 2, 0, "svg", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 68);
    \u0275\u0275element(7, "path", 25)(8, "path", 26)(9, "path", 27)(10, "path", 28)(11, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 69)(13, "h4");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 70);
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
function ReportsPage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h3");
    \u0275\u0275text(4, "Report Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Configure your asset reports with custom date ranges and filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "div", 36)(9, "label");
    \u0275\u0275text(10, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_26_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.start, $event) || (ctx_r0.reportConfig.dateRange.start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 36)(13, "label");
    \u0275\u0275text(14, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_26_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reportConfig.dateRange.end, $event) || (ctx_r0.reportConfig.dateRange.end = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 36)(17, "label");
    \u0275\u0275text(18, "Export Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_26_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.exportFormat, $event) || (ctx_r0.exportFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 39);
    \u0275\u0275text(21, "PDF Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 40);
    \u0275\u0275text(23, "Excel Spreadsheet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 41);
    \u0275\u0275text(25, "CSV File");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 42);
    \u0275\u0275listener("click", function ReportsPage_div_26_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onGenerateSelectedReports());
    });
    \u0275\u0275template(27, ReportsPage_div_26_span_27_Template, 2, 1, "span", 43)(28, ReportsPage_div_26_span_28_Template, 3, 0, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 45)(30, "h3");
    \u0275\u0275text(31, "Quick Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Generate commonly requested reports instantly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 46);
    \u0275\u0275listener("click", function ReportsPage_div_26_Template_div_click_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("current-month"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 47);
    \u0275\u0275element(36, "rect", 48)(37, "line", 49)(38, "line", 50)(39, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Current Month Asset Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 46);
    \u0275\u0275listener("click", function ReportsPage_div_26_Template_div_click_42_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("performance"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 47);
    \u0275\u0275element(44, "path", 52)(45, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "Asset Performance Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 46);
    \u0275\u0275listener("click", function ReportsPage_div_26_Template_div_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("warranty"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 47);
    \u0275\u0275element(50, "path", 54)(51, "path", 55)(52, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Warranty Expiring This Quarter");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 57)(56, "h3");
    \u0275\u0275text(57, "Available Asset Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p");
    \u0275\u0275text(59, "Select the reports you want to generate. Multiple reports can be combined into a single export.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 58);
    \u0275\u0275template(61, ReportsPage_div_26_div_61_Template, 19, 10, "div", 59);
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
    \u0275\u0275advance(33);
    \u0275\u0275property("ngForOf", ctx_r0.assetReports);
  }
}
function ReportsPage_div_27_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_27_div_48_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedReport, $event) || (ctx_r0.selectedReport = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 99)(3, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 68);
    \u0275\u0275element(5, "path", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 69)(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 70);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const report_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", report_r9.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedReport);
    \u0275\u0275property("value", report_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", report_r9.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(report_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r9.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r9.estimatedTime);
  }
}
function ReportsPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h3");
    \u0275\u0275text(4, "Time Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_27_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.maintenanceFilters.period, $event) || (ctx_r0.maintenanceFilters.period = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 72);
    \u0275\u0275text(7, "Last Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 73);
    \u0275\u0275text(9, "This Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 74);
    \u0275\u0275text(11, "Last Quarter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 75);
    \u0275\u0275text(13, "This Quarter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 34)(15, "h3");
    \u0275\u0275text(16, "Maintenance Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_27_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.maintenanceFilters.type, $event) || (ctx_r0.maintenanceFilters.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 76);
    \u0275\u0275text(19, "All Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 77);
    \u0275\u0275text(21, "Preventive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 78);
    \u0275\u0275text(23, "Corrective");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 79);
    \u0275\u0275text(25, "Emergency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 80)(27, "h3");
    \u0275\u0275text(28, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 81);
    \u0275\u0275listener("click", function ReportsPage_div_27_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("monthly-summary"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 9);
    \u0275\u0275element(31, "rect", 48)(32, "line", 49)(33, "line", 50)(34, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Monthly Summary ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "button", 81);
    \u0275\u0275listener("click", function ReportsPage_div_27_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuickReport("overdue-tasks"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 9);
    \u0275\u0275element(38, "path", 82)(39, "line", 83)(40, "line", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Overdue Tasks ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 85)(43, "h3");
    \u0275\u0275text(44, "Maintenance Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p");
    \u0275\u0275text(46, "Select the maintenance reports you want to generate and analyze.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 86);
    \u0275\u0275template(48, ReportsPage_div_27_div_48_Template, 13, 7, "div", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 88)(50, "div", 89)(51, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 68);
    \u0275\u0275element(53, "circle", 91)(54, "polyline", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "div", 93)(56, "h4");
    \u0275\u0275text(57, "MTTR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 94);
    \u0275\u0275text(59, "4.2h");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 89)(61, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 68);
    \u0275\u0275element(63, "path", 52)(64, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "div", 93)(66, "h4");
    \u0275\u0275text(67, "MTBF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 94);
    \u0275\u0275text(69, "168h");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "div", 89)(71, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(72, "svg", 68);
    \u0275\u0275element(73, "rect", 48)(74, "line", 49)(75, "line", 50)(76, "line", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(77, "div", 93)(78, "h4");
    \u0275\u0275text(79, "Compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 94);
    \u0275\u0275text(81, "94%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 89)(83, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(84, "svg", 68);
    \u0275\u0275element(85, "line", 95)(86, "path", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(87, "div", 93)(88, "h4");
    \u0275\u0275text(89, "Cost/Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 94);
    \u0275\u0275text(91, "$2.1K");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.maintenanceFilters.period);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.maintenanceFilters.type);
    \u0275\u0275advance(31);
    \u0275\u0275property("ngForOf", ctx_r0.maintenanceReports);
  }
}
function ReportsPage_div_28_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_28_div_94_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedReport, $event) || (ctx_r0.selectedReport = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 99)(3, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 68);
    \u0275\u0275element(5, "path", 112)(6, "polyline", 113)(7, "line", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 69)(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 70);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const report_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", report_r12.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedReport);
    \u0275\u0275property("value", report_r12.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", report_r12.id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(report_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r12.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r12.estimatedTime);
  }
}
function ReportsPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h3");
    \u0275\u0275text(4, "Category Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_28_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.inventoryFilters.category, $event) || (ctx_r0.inventoryFilters.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 76);
    \u0275\u0275text(7, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 101);
    \u0275\u0275text(9, "Parts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 102);
    \u0275\u0275text(11, "Supplies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 103);
    \u0275\u0275text(13, "Tools");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 34)(15, "h3");
    \u0275\u0275text(16, "Location Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_28_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.inventoryFilters.location, $event) || (ctx_r0.inventoryFilters.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 76);
    \u0275\u0275text(19, "All Locations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 104);
    \u0275\u0275text(21, "Warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 105);
    \u0275\u0275text(23, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 106);
    \u0275\u0275text(25, "Field");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 107)(27, "h3");
    \u0275\u0275text(28, "Quick Insights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 108);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 9);
    \u0275\u0275element(31, "path", 82)(32, "line", 83)(33, "line", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "Low Stock Alerts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 108);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 9);
    \u0275\u0275element(38, "path", 52)(39, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Top Consumed Items");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 88)(43, "div", 89)(44, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 68);
    \u0275\u0275element(46, "line", 95)(47, "path", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "div", 93)(49, "h4");
    \u0275\u0275text(50, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 94);
    \u0275\u0275text(52, "$124.5K");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 89)(54, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 68);
    \u0275\u0275element(56, "path", 52)(57, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(58, "div", 93)(59, "h4");
    \u0275\u0275text(60, "Turnover Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 94);
    \u0275\u0275text(62, "4.2x");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 109);
    \u0275\u0275element(64, "polyline", 110)(65, "polyline", 111);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(66, "div", 89)(67, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(68, "svg", 68);
    \u0275\u0275element(69, "path", 82)(70, "line", 83)(71, "line", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(72, "div", 93)(73, "h4");
    \u0275\u0275text(74, "Low Stock Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 94);
    \u0275\u0275text(76, "12");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 89)(78, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(79, "svg", 68);
    \u0275\u0275element(80, "path", 112)(81, "polyline", 113)(82, "line", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(83, "div", 93)(84, "h4");
    \u0275\u0275text(85, "Active SKUs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 94);
    \u0275\u0275text(87, "847");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(88, "div", 115)(89, "h3");
    \u0275\u0275text(90, "Inventory Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "p");
    \u0275\u0275text(92, "Generate comprehensive inventory analysis and management reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 86);
    \u0275\u0275template(94, ReportsPage_div_28_div_94_Template, 15, 7, "div", 87);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.inventoryFilters.category);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.inventoryFilters.location);
    \u0275\u0275advance(77);
    \u0275\u0275property("ngForOf", ctx_r0.inventoryReports);
  }
}
function ReportsPage_div_29_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "input", 132);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_29_div_89_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedReport, $event) || (ctx_r0.selectedReport = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 99)(3, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 68);
    \u0275\u0275element(5, "path", 25)(6, "path", 26)(7, "path", 27)(8, "path", 28)(9, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 69)(11, "h4");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 70);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const report_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", report_r15.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedReport);
    \u0275\u0275property("value", report_r15.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", report_r15.id);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(report_r15.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r15.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r15.estimatedTime);
  }
}
function ReportsPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h3");
    \u0275\u0275text(4, "Reporting Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_29_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.financialFilters.period, $event) || (ctx_r0.financialFilters.period = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "option", 117);
    \u0275\u0275text(7, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 118);
    \u0275\u0275text(9, "Quarterly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 119);
    \u0275\u0275text(11, "Yearly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 34)(13, "h3");
    \u0275\u0275text(14, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_29_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.financialFilters.currency, $event) || (ctx_r0.financialFilters.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 120);
    \u0275\u0275text(17, "AED (Dirham)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 121);
    \u0275\u0275text(19, "USD (Dollar)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 122);
    \u0275\u0275text(21, "EUR (Euro)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 123)(23, "h3");
    \u0275\u0275text(24, "Executive Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 124);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 9);
    \u0275\u0275element(27, "line", 95)(28, "path", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Monthly P&L");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 124);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 9);
    \u0275\u0275element(33, "path", 52)(34, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Cost Trends");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 88)(38, "div", 89)(39, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 68);
    \u0275\u0275element(41, "line", 95)(42, "path", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "div", 93)(44, "h4");
    \u0275\u0275text(45, "Total Asset Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 94);
    \u0275\u0275text(47, "AED 2.4M");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 89)(49, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 68);
    \u0275\u0275element(51, "rect", 48)(52, "line", 49)(53, "line", 50)(54, "line", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "div", 93)(56, "h4");
    \u0275\u0275text(57, "Monthly Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 94);
    \u0275\u0275text(59, "AED 68K");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 89)(61, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 68);
    \u0275\u0275element(63, "path", 52)(64, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "div", 93)(66, "h4");
    \u0275\u0275text(67, "Budget Variance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 94);
    \u0275\u0275text(69, "-8.2%");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(70, "svg", 125);
    \u0275\u0275element(71, "polyline", 110)(72, "polyline", 111);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(73, "div", 89)(74, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(75, "svg", 68);
    \u0275\u0275element(76, "circle", 91)(77, "polyline", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(78, "div", 93)(79, "h4");
    \u0275\u0275text(80, "ROI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 94);
    \u0275\u0275text(82, "12.4%");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(83, "div", 126)(84, "h3");
    \u0275\u0275text(85, "Financial Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p");
    \u0275\u0275text(87, "Generate comprehensive financial analysis and cost management reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 86);
    \u0275\u0275template(89, ReportsPage_div_29_div_89_Template, 17, 7, "div", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 127)(91, "h3");
    \u0275\u0275text(92, "Cost Distribution Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p");
    \u0275\u0275text(94, "Visual breakdown of expenses across different categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 128)(96, "div", 129)(97, "span");
    \u0275\u0275text(98, "Maintenance (45%)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 130)(100, "span");
    \u0275\u0275text(101, "Operations (32%)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 131)(103, "span");
    \u0275\u0275text(104, "Administration (23%)");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.financialFilters.period);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.financialFilters.currency);
    \u0275\u0275advance(74);
    \u0275\u0275property("ngForOf", ctx_r0.financialReports);
  }
}
function ReportsPage_div_30_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 156)(1, "input", 157);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_30_div_29_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.dataSource, $event) || (ctx_r0.customReport.dataSource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 158)(3, "span", 159);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 160);
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
function ReportsPage_div_30_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 161)(1, "div", 162)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 163)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 164)(12, "button", 165);
    \u0275\u0275listener("click", function ReportsPage_div_30_div_51_Template_button_click_12_listener() {
      const report_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editReport(report_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 9);
    \u0275\u0275element(14, "path", 166)(15, "path", 167);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "button", 165);
    \u0275\u0275listener("click", function ReportsPage_div_30_div_51_Template_button_click_16_listener() {
      const report_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.runReport(report_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 9);
    \u0275\u0275element(18, "polygon", 146);
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
function ReportsPage_div_30_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275listener("click", function ReportsPage_div_30_div_57_Template_div_click_0_listener() {
      const template_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.useTemplate(template_r22));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 25)(3, "path", 26)(4, "path", 27)(5, "path", 28)(6, "path", 29);
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
function ReportsPage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 133)(2, "div", 134)(3, "h3");
    \u0275\u0275text(4, "+ Create Custom Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Build custom reports by selecting data sources, fields, and applying filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 135)(8, "div", 136)(9, "label");
    \u0275\u0275text(10, "Report Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_30_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.name, $event) || (ctx_r0.customReport.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 136)(13, "label");
    \u0275\u0275text(14, "Output Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 138);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_30_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.format, $event) || (ctx_r0.customReport.format = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 39);
    \u0275\u0275text(17, "PDF Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 40);
    \u0275\u0275text(19, "Excel Spreadsheet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 41);
    \u0275\u0275text(21, "CSV File");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 136)(23, "label");
    \u0275\u0275text(24, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 139);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_30_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.description, $event) || (ctx_r0.customReport.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 140)(27, "h4");
    \u0275\u0275text(28, "Data Sources");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ReportsPage_div_30_div_29_Template, 7, 6, "div", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 142)(31, "h4");
    \u0275\u0275text(32, "Filter Conditions (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 143);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsPage_div_30_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.customReport.filters, $event) || (ctx_r0.customReport.filters = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 144)(35, "button", 145);
    \u0275\u0275listener("click", function ReportsPage_div_30_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.runCustomReport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 9);
    \u0275\u0275element(37, "polygon", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Run Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "button", 147);
    \u0275\u0275listener("click", function ReportsPage_div_30_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCustomReport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 9);
    \u0275\u0275element(41, "path", 148)(42, "polyline", 149)(43, "polyline", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Save Template ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "div", 151)(46, "div", 152)(47, "h3");
    \u0275\u0275text(48, "Saved Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50, "Manage your custom report templates");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, ReportsPage_div_30_div_51_Template, 19, 4, "div", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 154)(53, "h3");
    \u0275\u0275text(54, "Quick Templates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275text(56, "Start with pre-built report templates");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, ReportsPage_div_30_div_57_Template, 9, 1, "div", 155);
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
  inventoryFilters = {
    category: "all",
    location: "all"
  };
  financialFilters = {
    period: "monthly",
    currency: "AED"
  };
  // Available tabs
  tabs = [
    { id: "assets", label: "Asset Reports", icon: "package" },
    { id: "maintenance", label: "Maintenance Reports", icon: "wrench" },
    { id: "inventory", label: "Inventory Reports", icon: "box" },
    { id: "financial", label: "Financial Reports", icon: "dollar-sign" },
    { id: "custom", label: "Custom Reports", icon: "settings" }
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
      this.reportData = response.assets || [];
    } else if ("work_orders" in response) {
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
    const reportKey = `assets.${reportId}`;
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
    const reportKeys = reportsToExport.map((reportId) => `assets.${reportId}`);
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
  static \u0275fac = function ReportsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsPage)(\u0275\u0275directiveInject(ReportsApiService), \u0275\u0275directiveInject(ExportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsPage, selectors: [["app-reports"]], decls: 31, vars: 8, consts: [[1, "reports-page"], ["style", "background: #f0f0f0; padding: 10px; margin: 10px; border: 1px solid #ccc;", 4, "ngIf"], [1, "reports-header"], [1, "header-content"], [1, "header-left"], [1, "title"], [1, "subtitle"], [1, "header-actions"], [1, "action-button", "refresh-button", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], ["d", "M21 3v5h-5"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], ["d", "M3 21v-5h5"], [1, "action-button", "export-button", 3, "click"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["d", "M7 10l5 5 5-5"], ["d", "M12 15V3"], [1, "report-tabs"], ["class", "tab-button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "reports-content"], ["class", "report-category", 4, "ngIf"], [2, "background", "#f0f0f0", "padding", "10px", "margin", "10px", "border", "1px solid #ccc"], [1, "tab-button", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "tab-icon"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["d", "M14 2v6h6"], ["d", "M16 13H8"], ["d", "M16 17H8"], ["d", "M10 9H8"], ["class", "new-badge", 4, "ngIf"], [1, "new-badge"], [1, "report-category"], [1, "filters-section"], [1, "filter-card"], [1, "filter-row"], [1, "filter-group"], ["type", "date", 1, "filter-input", 3, "ngModelChange", "ngModel"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "pdf"], ["value", "xlsx"], ["value", "csv"], [1, "generate-button", 3, "click", "disabled"], [4, "ngIf"], ["class", "loading-content", 4, "ngIf"], [1, "quick-reports-card"], [1, "quick-report-item", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["d", "M3 3v18h18"], ["d", "M18 17V9M13 17V5M8 17v-3"], ["d", "M9 12l2 2 4-4"], ["d", "M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"], ["d", "M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"], [1, "available-reports"], [1, "report-list"], ["class", "report-item", 4, "ngFor", "ngForOf"], [1, "loading-content"], [1, "loading-spinner"], [1, "report-item"], ["type", "checkbox", "name", "assetReport", 3, "change", "id", "value", "checked"], [1, "report-card", 3, "for"], [1, "checkbox-indicator"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "report-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "report-content"], [1, "report-time"], ["points", "20,6 9,17 4,12"], ["value", "last_month"], ["value", "this_month"], ["value", "last_quarter"], ["value", "this_quarter"], ["value", "all"], ["value", "preventive"], ["value", "corrective"], ["value", "emergency"], [1, "quick-actions-card"], [1, "quick-action-button", 3, "click"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "maintenance-reports"], [1, "report-grid"], ["class", "report-card", 4, "ngFor", "ngForOf"], [1, "kpi-section"], [1, "kpi-card"], [1, "kpi-icon"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12,6 12,12 16,14"], [1, "kpi-content"], [1, "kpi-value"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "report-card"], ["type", "radio", "name", "maintenanceReport", 3, "ngModelChange", "id", "ngModel", "value"], [1, "report-card-content", 3, "for"], ["d", "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"], ["value", "parts"], ["value", "supplies"], ["value", "tools"], ["value", "warehouse"], ["value", "office"], ["value", "field"], [1, "quick-insights-card"], [1, "insight-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "trend-icon"], ["points", "23 6 13.5 15.5 8.5 10.5 1 18"], ["points", "17 6 23 6 23 12"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], [1, "inventory-reports"], ["type", "radio", "name", "inventoryReport", 3, "ngModelChange", "id", "ngModel", "value"], ["value", "monthly"], ["value", "quarterly"], ["value", "yearly"], ["value", "AED"], ["value", "USD"], ["value", "EUR"], [1, "executive-summary-card"], [1, "summary-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "trend-icon", "positive"], [1, "financial-reports"], [1, "cost-distribution"], [1, "chart-container"], [1, "chart-bar", "maintenance", 2, "width", "45%"], [1, "chart-bar", "operations", 2, "width", "32%"], [1, "chart-bar", "administration", 2, "width", "23%"], ["type", "radio", "name", "financialReport", 3, "ngModelChange", "id", "ngModel", "value"], [1, "custom-reports-layout"], [1, "create-report-panel"], [1, "form-section"], [1, "form-group"], ["type", "text", "placeholder", "Enter report name...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["placeholder", "Describe what this report will analyze...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "data-sources"], ["class", "data-source-item", 4, "ngFor", "ngForOf"], [1, "filter-conditions"], ["placeholder", "e.g., status = 'active' AND purchase_cost > 1000", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn-primary", 3, "click"], ["points", "5,3 19,12 5,21"], [1, "btn-secondary", 3, "click"], ["d", "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], ["points", "17,21 17,13 7,13 7,21"], ["points", "7,3 7,8 15,8"], [1, "saved-reports-panel"], [1, "saved-reports"], ["class", "saved-report-item", 4, "ngFor", "ngForOf"], [1, "quick-templates"], ["class", "template-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "data-source-item"], ["type", "radio", "name", "dataSource", 3, "ngModelChange", "id", "ngModel", "value"], [3, "for"], [1, "source-name"], [1, "field-count"], [1, "saved-report-item"], [1, "report-info"], [1, "report-meta"], [1, "report-actions"], [1, "action-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "template-item", 3, "click"]], template: function ReportsPage_Template(rf, ctx) {
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
      \u0275\u0275elementStart(25, "div", 20);
      \u0275\u0275template(26, ReportsPage_div_26_Template, 62, 7, "div", 21)(27, ReportsPage_div_27_Template, 92, 3, "div", 21)(28, ReportsPage_div_28_Template, 95, 3, "div", 21)(29, ReportsPage_div_29_Template, 105, 3, "div", 21)(30, ReportsPage_div_30_Template, 58, 7, "div", 21);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", false);
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.tabs);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.reports-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f9fafb;\n  padding: 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button.refresh-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button.export-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border-color: #3b82f6;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button.export-button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  border-color: #2563eb;\n  transform: translateY(-1px);\n  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  padding: 0 2rem;\n  margin-bottom: 2rem;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  border-bottom: 1px solid #e5e7eb;\n}\n.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background: #f9fafb;\n}\n.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n  background: #f0f9ff;\n}\n.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .new-badge[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 0.25rem;\n  margin-left: 0.25rem;\n  font-weight: 600;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem 2rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 1rem 0;\n  line-height: 1.6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: all 0.2s ease;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:hover:not(:disabled), \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:hover:not(:disabled), \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:hover:not(:disabled), \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:hover:not(:disabled), \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:disabled, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:disabled, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:disabled, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:disabled, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #e5e7eb;\n  transform: translateY(-1px);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .quick-report-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%]   .quick-action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  margin-bottom: 2rem;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #f0f9ff;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  stroke-width: 3;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  background: #f9fafb;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  border-color: #3b82f6;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .checkbox-indicator[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content.selected[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f3f4f6;\n  border-radius: 8px;\n  color: #6b7280;\n  transition: all 0.2s ease;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n  line-height: 1.4;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.5;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-content[_ngcontent-%COMP%]   .report-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  background: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #eff6ff;\n  border-radius: 0.5rem;\n  color: #3b82f6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  margin: 0 0 0.25rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .trend-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  margin-left: 0.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .trend-icon.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .trend-icon.negative[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 2rem;\n  border-radius: 0.375rem;\n  overflow: hidden;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-bar.maintenance[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-bar.operations[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-bar.administration[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f9ff;\n  border-radius: 8px;\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 0.25rem 0;\n  font-weight: 500;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .cost-distribution[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.2;\n  font-feature-settings: "tnum";\n  font-variant-numeric: tabular-nums;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: all 0.2s ease;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  min-height: 4rem;\n  resize: vertical;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  margin: 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .source-name[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .source-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .field-count[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .data-sources[_ngcontent-%COMP%]   .data-source-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .field-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .filter-conditions[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .filter-conditions[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .filter-conditions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .filter-conditions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border: none;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.25rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   .report-meta[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-info[_ngcontent-%COMP%]   .report-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  background: white;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .saved-report-item[_ngcontent-%COMP%]   .report-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 0.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]:hover, \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #6b7280;\n}\n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .create-report-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%]   .saved-reports-panel[_ngcontent-%COMP%]   .quick-templates[_ngcontent-%COMP%]   .template-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n  padding: 2rem;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  background: #e2e8f0;\n  border-radius: 0.5rem;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 1rem;\n  background: #e2e8f0;\n  border-radius: 0.25rem;\n  margin-bottom: 0.5rem;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%]   .skeleton-line.large[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%]   .skeleton-line.medium[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 0.75rem;\n  background: #e2e8f0;\n  border-radius: 0.25rem;\n  margin-bottom: 0.75rem;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line.short[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border: 3px solid #e5e7eb;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 2rem;\n  text-align: center;\n}\n.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .no-data-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .no-data-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .no-data-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n  max-width: 400px;\n}\n.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.reports-page[_ngcontent-%COMP%]   .no-data-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 2rem;\n  text-align: center;\n}\n.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n  max-width: 400px;\n}\n.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.reports-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@media (max-width: 768px) {\n  .reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .reports-page[_ngcontent-%COMP%]   .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    overflow-x: auto;\n    flex-wrap: nowrap;\n  }\n  .reports-page[_ngcontent-%COMP%]   .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n  .reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%] {\n    padding: 0 1rem 2rem;\n  }\n  .reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .reports-page[_ngcontent-%COMP%]   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes pulse {\n    0%, 100% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.5;\n    }\n  }\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(10px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n}\n@media (max-width: 768px) and (max-width: 1024px) {\n  .reports-content[_ngcontent-%COMP%] {\n    padding: 0 1rem 2rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .custom-reports-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .report-tabs[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    overflow-x: auto;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n  .report-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .report-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n  .reports-header[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 768px) and (max-width: 768px) {\n  .reports-content[_ngcontent-%COMP%] {\n    padding: 0 1rem 1rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n    margin-bottom: 1.5rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    flex-direction: column;\n    text-align: center;\n    gap: 0.75rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .available-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .maintenance-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .inventory-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-list[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .financial-reports[_ngcontent-%COMP%]   .report-grid[_ngcontent-%COMP%]   .report-item[_ngcontent-%COMP%]   .report-card-content[_ngcontent-%COMP%]   .report-icon[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .reports-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n    width: 100%;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .report-tabs[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    margin-bottom: 1.5rem;\n  }\n}\n@media (max-width: 768px) and (max-width: 480px) {\n  .reports-content[_ngcontent-%COMP%] {\n    padding: 0 0.75rem 1rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-reports-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-actions-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .quick-insights-card[_ngcontent-%COMP%], \n   .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .executive-summary-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    flex-direction: column;\n    text-align: center;\n  }\n  .reports-content[_ngcontent-%COMP%]   .report-category[_ngcontent-%COMP%]   .kpi-section[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .reports-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=reports.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsPage, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="reports-page">\r
  <!-- Debug Info (temporary) -->\r
  <div style="background: #f0f0f0; padding: 10px; margin: 10px; border: 1px solid #ccc;" *ngIf="false">\r
    <h3>Debug Info</h3>\r
    <p>Component loaded: {{ getCurrentTime() }}</p>\r
    <p>Active Tab: {{ activeTab }}</p>\r
    <p>Is Loading: {{ isLoading }}</p>\r
    <p>Has Data: {{ hasData }}</p>\r
    <p>Error Message: {{ errorMessage }}</p>\r
  </div>\r
\r
  <!-- Header -->\r
  <div class="reports-header">\r
    <div class="header-content">\r
      <div class="header-left">\r
        <h1 class="title">Reports</h1>\r
        <p class="subtitle">Generate and export comprehensive reports for your asset management</p>\r
      </div>\r
      <div class="header-actions">\r
        <button class="action-button refresh-button" (click)="onRefresh()" [disabled]="isLoading">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>\r
            <path d="M21 3v5h-5"></path>\r
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>\r
            <path d="M3 21v-5h5"></path>\r
          </svg>\r
          Refresh\r
        </button>\r
        <button class="action-button export-button" (click)="onExport()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
            <path d="M7 10l5 5 5-5"></path>\r
            <path d="M12 15V3"></path>\r
          </svg>\r
          Export\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Report Category Tabs -->\r
  <div class="report-tabs">\r
    <button \r
      *ngFor="let tab of tabs" \r
      class="tab-button" \r
      [class.active]="activeTab === tab.id"\r
      (click)="onTabChange(tab.id)">\r
      <svg class="tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\r
        <path d="M14 2v6h6"></path>\r
        <path d="M16 13H8"></path>\r
        <path d="M16 17H8"></path>\r
        <path d="M10 9H8"></path>\r
      </svg>\r
      {{ tab.label }}\r
      <span class="new-badge" *ngIf="tab.id === 'custom'">New</span>\r
    </button>\r
  </div>\r
\r
  <!-- Main Content Area -->\r
  <div class="reports-content">\r
    \r
    <!-- Asset Reports UI -->\r
    <div *ngIf="activeTab === 'assets'" class="report-category">\r
      <!-- Filters and Configuration -->\r
      <div class="filters-section">\r
        <div class="filter-card">\r
          <h3>Report Configuration</h3>\r
          <p>Configure your asset reports with custom date ranges and filters</p>\r
          <div class="filter-row">\r
            <div class="filter-group">\r
              <label>Start Date</label>\r
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.start">\r
            </div>\r
            <div class="filter-group">\r
              <label>End Date</label>\r
              <input type="date" class="filter-input" [(ngModel)]="reportConfig.dateRange.end">\r
            </div>\r
            <div class="filter-group">\r
              <label>Export Format</label>\r
              <select class="filter-select" [(ngModel)]="exportFormat">\r
                <option value="pdf">PDF Document</option>\r
                <option value="xlsx">Excel Spreadsheet</option>\r
                <option value="csv">CSV File</option>\r
              </select>\r
            </div>\r
          </div>\r
          <button class="generate-button" (click)="onGenerateSelectedReports()" [disabled]="selectedReports.length === 0 || isGenerating">\r
            <span *ngIf="!isGenerating">Generate Selected Reports ({{ selectedReports.length }})</span>\r
            <span *ngIf="isGenerating" class="loading-content">\r
              <i class="loading-spinner"></i>\r
              Generating Report...\r
            </span>\r
          </button>\r
        </div>\r
\r
        <div class="quick-reports-card">\r
          <h3>Quick Reports</h3>\r
          <p>Generate commonly requested reports instantly</p>\r
          <div class="quick-report-item" (click)="generateQuickReport('current-month')">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
              <line x1="16" y1="2" x2="16" y2="6"></line>\r
              <line x1="8" y1="2" x2="8" y2="6"></line>\r
              <line x1="3" y1="10" x2="21" y2="10"></line>\r
            </svg>\r
            <span>Current Month Asset Summary</span>\r
          </div>\r
          <div class="quick-report-item" (click)="generateQuickReport('performance')">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M3 3v18h18"></path>\r
              <path d="M18 17V9M13 17V5M8 17v-3"></path>\r
            </svg>\r
            <span>Asset Performance Dashboard</span>\r
          </div>\r
          <div class="quick-report-item" (click)="generateQuickReport('warranty')">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M9 12l2 2 4-4"></path>\r
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>\r
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>\r
            </svg>\r
            <span>Warranty Expiring This Quarter</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Available Reports -->\r
      <div class="available-reports">\r
        <h3>Available Asset Reports</h3>\r
        <p>Select the reports you want to generate. Multiple reports can be combined into a single export.</p>\r
        \r
        <div class="report-list">\r
          <div class="report-item" *ngFor="let report of assetReports">\r
            <input type="checkbox" [id]="report.id" name="assetReport" [value]="report.id" (change)="onReportSelectionChange(report.id, $event)" [checked]="isReportSelected(report.id)">\r
            <label [for]="report.id" class="report-card" [class.selected]="isReportSelected(report.id)">\r
              <div class="checkbox-indicator">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" *ngIf="isReportSelected(report.id)">\r
                  <polyline points="20,6 9,17 4,12"></polyline>\r
                </svg>\r
              </div>\r
              <div class="report-icon">\r
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\r
                  <path d="M14 2v6h6"></path>\r
                  <path d="M16 13H8"></path>\r
                  <path d="M16 17H8"></path>\r
                  <path d="M10 9H8"></path>\r
                </svg>\r
              </div>\r
              <div class="report-content">\r
                <h4>{{ report.title }}</h4>\r
                <p>{{ report.description }}</p>\r
                <span class="report-time">{{ report.estimatedTime }}</span>\r
              </div>\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Maintenance Reports UI -->\r
    <div *ngIf="activeTab === 'maintenance'" class="report-category">\r
      <!-- Filters -->\r
      <div class="filters-section">\r
        <div class="filter-card">\r
          <h3>Time Period</h3>\r
          <select class="filter-select" [(ngModel)]="maintenanceFilters.period">\r
            <option value="last_month">Last Month</option>\r
            <option value="this_month">This Month</option>\r
            <option value="last_quarter">Last Quarter</option>\r
            <option value="this_quarter">This Quarter</option>\r
          </select>\r
        </div>\r
        <div class="filter-card">\r
          <h3>Maintenance Type</h3>\r
          <select class="filter-select" [(ngModel)]="maintenanceFilters.type">\r
            <option value="all">All Types</option>\r
            <option value="preventive">Preventive</option>\r
            <option value="corrective">Corrective</option>\r
            <option value="emergency">Emergency</option>\r
          </select>\r
        </div>\r
        <div class="quick-actions-card">\r
          <h3>Quick Actions</h3>\r
          <button class="quick-action-button" (click)="generateQuickReport('monthly-summary')">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
              <line x1="16" y1="2" x2="16" y2="6"></line>\r
              <line x1="8" y1="2" x2="8" y2="6"></line>\r
              <line x1="3" y1="10" x2="21" y2="10"></line>\r
            </svg>\r
            Monthly Summary\r
          </button>\r
          <button class="quick-action-button" (click)="generateQuickReport('overdue-tasks')">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>\r
              <line x1="12" y1="9" x2="12" y2="13"></line>\r
              <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
            </svg>\r
            Overdue Tasks\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Maintenance Reports List -->\r
      <div class="maintenance-reports">\r
        <h3>Maintenance Reports</h3>\r
        <p>Select the maintenance reports you want to generate and analyze.</p>\r
        \r
        <div class="report-grid">\r
          <div class="report-card" *ngFor="let report of maintenanceReports">\r
            <input type="radio" [id]="report.id" name="maintenanceReport" [(ngModel)]="selectedReport" [value]="report.id">\r
            <label [for]="report.id" class="report-card-content">\r
              <div class="report-icon">\r
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>\r
                </svg>\r
              </div>\r
              <div class="report-content">\r
                <h4>{{ report.title }}</h4>\r
                <p>{{ report.description }}</p>\r
                <span class="report-time">{{ report.estimatedTime }}</span>\r
              </div>\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Maintenance KPIs -->\r
      <div class="kpi-section">\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <circle cx="12" cy="12" r="10"></circle>\r
              <polyline points="12,6 12,12 16,14"></polyline>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>MTTR</h4>\r
            <span class="kpi-value">4.2h</span>\r
          </div>\r
        </div>\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M3 3v18h18"></path>\r
              <path d="M18 17V9M13 17V5M8 17v-3"></path>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>MTBF</h4>\r
            <span class="kpi-value">168h</span>\r
          </div>\r
        </div>\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
              <line x1="16" y1="2" x2="16" y2="6"></line>\r
              <line x1="8" y1="2" x2="8" y2="6"></line>\r
              <line x1="3" y1="10" x2="21" y2="10"></line>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>Compliance</h4>\r
            <span class="kpi-value">94%</span>\r
          </div>\r
        </div>\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <line x1="12" y1="1" x2="12" y2="23"></line>\r
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>Cost/Asset</h4>\r
            <span class="kpi-value">$2.1K</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Inventory Reports UI -->\r
    <div *ngIf="activeTab === 'inventory'" class="report-category">\r
      <!-- Filters -->\r
      <div class="filters-section">\r
        <div class="filter-card">\r
          <h3>Category Filter</h3>\r
          <select class="filter-select" [(ngModel)]="inventoryFilters.category">\r
            <option value="all">All Categories</option>\r
            <option value="parts">Parts</option>\r
            <option value="supplies">Supplies</option>\r
            <option value="tools">Tools</option>\r
          </select>\r
        </div>\r
        <div class="filter-card">\r
          <h3>Location Filter</h3>\r
          <select class="filter-select" [(ngModel)]="inventoryFilters.location">\r
            <option value="all">All Locations</option>\r
            <option value="warehouse">Warehouse</option>\r
            <option value="office">Office</option>\r
            <option value="field">Field</option>\r
          </select>\r
        </div>\r
        <div class="quick-insights-card">\r
          <h3>Quick Insights</h3>\r
          <div class="insight-item">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>\r
              <line x1="12" y1="9" x2="12" y2="13"></line>\r
              <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
            </svg>\r
            <span>Low Stock Alerts</span>\r
          </div>\r
          <div class="insight-item">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M3 3v18h18"></path>\r
              <path d="M18 17V9M13 17V5M8 17v-3"></path>\r
            </svg>\r
            <span>Top Consumed Items</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Inventory KPIs -->\r
      <div class="kpi-section">\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <line x1="12" y1="1" x2="12" y2="23"></line>\r
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>Total Value</h4>\r
            <span class="kpi-value">$124.5K</span>\r
          </div>\r
        </div>\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M3 3v18h18"></path>\r
              <path d="M18 17V9M13 17V5M8 17v-3"></path>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>Turnover Rate</h4>\r
            <span class="kpi-value">4.2x</span>\r
            <svg class="trend-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>\r
              <polyline points="17 6 23 6 23 12"></polyline>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>\r
              <line x1="12" y1="9" x2="12" y2="13"></line>\r
              <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>Low Stock Items</h4>\r
            <span class="kpi-value">12</span>\r
          </div>\r
        </div>\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>\r
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>\r
              <line x1="12" y1="22.08" x2="12" y2="12"></line>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>Active SKUs</h4>\r
            <span class="kpi-value">847</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Inventory Reports List -->\r
      <div class="inventory-reports">\r
        <h3>Inventory Reports</h3>\r
        <p>Generate comprehensive inventory analysis and management reports</p>\r
        \r
        <div class="report-grid">\r
          <div class="report-card" *ngFor="let report of inventoryReports">\r
            <input type="radio" [id]="report.id" name="inventoryReport" [(ngModel)]="selectedReport" [value]="report.id">\r
            <label [for]="report.id" class="report-card-content">\r
              <div class="report-icon">\r
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>\r
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>\r
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>\r
                </svg>\r
              </div>\r
              <div class="report-content">\r
                <h4>{{ report.title }}</h4>\r
                <p>{{ report.description }}</p>\r
                <span class="report-time">{{ report.estimatedTime }}</span>\r
              </div>\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Financial Reports UI -->\r
    <div *ngIf="activeTab === 'financial'" class="report-category">\r
      <!-- Filters -->\r
      <div class="filters-section">\r
        <div class="filter-card">\r
          <h3>Reporting Period</h3>\r
          <select class="filter-select" [(ngModel)]="financialFilters.period">\r
            <option value="monthly">Monthly</option>\r
            <option value="quarterly">Quarterly</option>\r
            <option value="yearly">Yearly</option>\r
          </select>\r
        </div>\r
        <div class="filter-card">\r
          <h3>Currency</h3>\r
          <select class="filter-select" [(ngModel)]="financialFilters.currency">\r
            <option value="AED">AED (Dirham)</option>\r
            <option value="USD">USD (Dollar)</option>\r
            <option value="EUR">EUR (Euro)</option>\r
          </select>\r
        </div>\r
        <div class="executive-summary-card">\r
          <h3>Executive Summary</h3>\r
          <div class="summary-item">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <line x1="12" y1="1" x2="12" y2="23"></line>\r
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>\r
            </svg>\r
            <span>Monthly P&L</span>\r
          </div>\r
          <div class="summary-item">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M3 3v18h18"></path>\r
              <path d="M18 17V9M13 17V5M8 17v-3"></path>\r
            </svg>\r
            <span>Cost Trends</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Financial KPIs -->\r
      <div class="kpi-section">\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <line x1="12" y1="1" x2="12" y2="23"></line>\r
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>Total Asset Value</h4>\r
            <span class="kpi-value">AED 2.4M</span>\r
          </div>\r
        </div>\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
              <line x1="16" y1="2" x2="16" y2="6"></line>\r
              <line x1="8" y1="2" x2="8" y2="6"></line>\r
              <line x1="3" y1="10" x2="21" y2="10"></line>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>Monthly Costs</h4>\r
            <span class="kpi-value">AED 68K</span>\r
          </div>\r
        </div>\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M3 3v18h18"></path>\r
              <path d="M18 17V9M13 17V5M8 17v-3"></path>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>Budget Variance</h4>\r
            <span class="kpi-value">-8.2%</span>\r
            <svg class="trend-icon positive" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>\r
              <polyline points="17 6 23 6 23 12"></polyline>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="kpi-card">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <circle cx="12" cy="12" r="10"></circle>\r
              <polyline points="12,6 12,12 16,14"></polyline>\r
            </svg>\r
          </div>\r
          <div class="kpi-content">\r
            <h4>ROI</h4>\r
            <span class="kpi-value">12.4%</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Financial Reports List -->\r
      <div class="financial-reports">\r
        <h3>Financial Reports</h3>\r
        <p>Generate comprehensive financial analysis and cost management reports</p>\r
        \r
        <div class="report-grid">\r
          <div class="report-card" *ngFor="let report of financialReports">\r
            <input type="radio" [id]="report.id" name="financialReport" [(ngModel)]="selectedReport" [value]="report.id">\r
            <label [for]="report.id" class="report-card-content">\r
              <div class="report-icon">\r
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\r
                  <path d="M14 2v6h6"></path>\r
                  <path d="M16 13H8"></path>\r
                  <path d="M16 17H8"></path>\r
                  <path d="M10 9H8"></path>\r
                </svg>\r
              </div>\r
              <div class="report-content">\r
                <h4>{{ report.title }}</h4>\r
                <p>{{ report.description }}</p>\r
                <span class="report-time">{{ report.estimatedTime }}</span>\r
              </div>\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Cost Distribution Chart -->\r
      <div class="cost-distribution">\r
        <h3>Cost Distribution Overview</h3>\r
        <p>Visual breakdown of expenses across different categories</p>\r
        <div class="chart-container">\r
          <div class="chart-bar maintenance" style="width: 45%">\r
            <span>Maintenance (45%)</span>\r
          </div>\r
          <div class="chart-bar operations" style="width: 32%">\r
            <span>Operations (32%)</span>\r
          </div>\r
          <div class="chart-bar administration" style="width: 23%">\r
            <span>Administration (23%)</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Custom Reports UI -->\r
    <div *ngIf="activeTab === 'custom'" class="report-category">\r
      <div class="custom-reports-layout">\r
        <!-- Left Panel: Create Custom Report -->\r
        <div class="create-report-panel">\r
          <h3>+ Create Custom Report</h3>\r
          <p>Build custom reports by selecting data sources, fields, and applying filters</p>\r
          \r
          <div class="form-section">\r
            <div class="form-group">\r
              <label>Report Name</label>\r
              <input type="text" class="form-input" placeholder="Enter report name..." [(ngModel)]="customReport.name">\r
            </div>\r
            \r
            <div class="form-group">\r
              <label>Output Format</label>\r
              <select class="form-select" [(ngModel)]="customReport.format">\r
                <option value="pdf">PDF Document</option>\r
                <option value="xlsx">Excel Spreadsheet</option>\r
                <option value="csv">CSV File</option>\r
              </select>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label>Description</label>\r
              <textarea class="form-textarea" placeholder="Describe what this report will analyze..." [(ngModel)]="customReport.description"></textarea>\r
            </div>\r
          </div>\r
\r
          <div class="data-sources">\r
            <h4>Data Sources</h4>\r
            <div class="data-source-item" *ngFor="let source of dataSources">\r
              <input type="radio" [id]="source.id" name="dataSource" [(ngModel)]="customReport.dataSource" [value]="source.id">\r
              <label [for]="source.id">\r
                <span class="source-name">{{ source.name }}</span>\r
                <span class="field-count">{{ source.fieldCount }} fields available</span>\r
              </label>\r
            </div>\r
          </div>\r
\r
          <div class="filter-conditions">\r
            <h4>Filter Conditions (Optional)</h4>\r
            <textarea class="form-textarea" placeholder="e.g., status = 'active' AND purchase_cost > 1000" [(ngModel)]="customReport.filters"></textarea>\r
          </div>\r
\r
          <div class="form-actions">\r
            <button class="btn-primary" (click)="runCustomReport()">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <polygon points="5,3 19,12 5,21"></polygon>\r
              </svg>\r
              Run Report\r
            </button>\r
            <button class="btn-secondary" (click)="saveCustomReport()">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>\r
                <polyline points="17,21 17,13 7,13 7,21"></polyline>\r
                <polyline points="7,3 7,8 15,8"></polyline>\r
              </svg>\r
              Save Template\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Right Panel: Saved Reports & Templates -->\r
        <div class="saved-reports-panel">\r
          <!-- Saved Reports -->\r
          <div class="saved-reports">\r
            <h3>Saved Reports</h3>\r
            <p>Manage your custom report templates</p>\r
            \r
            <div class="saved-report-item" *ngFor="let report of savedReports">\r
              <div class="report-info">\r
                <h4>{{ report.name }}</h4>\r
                <p>{{ report.description }}</p>\r
                <div class="report-meta">\r
                  <span>{{ report.frequency }}</span>\r
                  <span>{{ report.lastRun }}</span>\r
                </div>\r
              </div>\r
              <div class="report-actions">\r
                <button class="action-btn" (click)="editReport(report)">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                  </svg>\r
                </button>\r
                <button class="action-btn" (click)="runReport(report)">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <polygon points="5,3 19,12 5,21"></polygon>\r
                  </svg>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Quick Templates -->\r
          <div class="quick-templates">\r
            <h3>Quick Templates</h3>\r
            <p>Start with pre-built report templates</p>\r
            \r
            <div class="template-item" *ngFor="let template of quickTemplates" (click)="useTemplate(template)">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\r
                <path d="M14 2v6h6"></path>\r
                <path d="M16 13H8"></path>\r
                <path d="M16 17H8"></path>\r
                <path d="M10 9H8"></path>\r
              </svg>\r
              <span>{{ template.name }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
`, styles: ['/* src/app/reports/pages/reports.page.scss */\n.reports-page {\n  min-height: 100vh;\n  background: #f9fafb;\n  padding: 0;\n}\n.reports-page .reports-header {\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.reports-page .reports-header .header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.reports-page .reports-header .header-content .header-left .title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.reports-page .reports-header .header-content .header-left .subtitle {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n}\n.reports-page .reports-header .header-content .header-actions {\n  display: flex;\n  gap: 1rem;\n}\n.reports-page .reports-header .header-content .header-actions .action-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.reports-page .reports-header .header-content .header-actions .action-button:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.reports-page .reports-header .header-content .header-actions .action-button.refresh-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.reports-page .reports-header .header-content .header-actions .action-button.export-button {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border-color: #3b82f6;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.reports-page .reports-header .header-content .header-actions .action-button.export-button:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  border-color: #2563eb;\n  transform: translateY(-1px);\n  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);\n}\n.reports-page .reports-header .header-content .header-actions .action-button svg {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.reports-page .report-tabs {\n  display: flex;\n  gap: 0;\n  padding: 0 2rem;\n  margin-bottom: 2rem;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  border-bottom: 1px solid #e5e7eb;\n}\n.reports-page .report-tabs .tab-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n.reports-page .report-tabs .tab-button:hover {\n  color: #374151;\n  background: #f9fafb;\n}\n.reports-page .report-tabs .tab-button.active {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n  background: #f0f9ff;\n}\n.reports-page .report-tabs .tab-button .tab-icon {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.reports-page .report-tabs .tab-button .new-badge {\n  background: #10b981;\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 0.25rem;\n  margin-left: 0.25rem;\n  font-weight: 600;\n}\n.reports-page .reports-content {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem 2rem;\n}\n.reports-page .reports-content .report-category .filters-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card:hover,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card:hover,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card:hover,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card:hover,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.reports-page .reports-content .report-category .filters-section .filter-card h3,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card h3,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card h3,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card h3,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card h3 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card p,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card p,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card p,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card p,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card p {\n  color: #6b7280;\n  margin: 0 0 1rem 0;\n  line-height: 1.6;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .filter-row,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .filter-row,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .filter-row,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .filter-row {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .filter-row .filter-group,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .filter-row .filter-group,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .filter-row .filter-group {\n  flex: 1;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group label,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group label,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .filter-row .filter-group label,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .filter-row .filter-group label,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .filter-row .filter-group label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-input,\n.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-select,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-input,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-select,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .filter-row .filter-group .filter-input,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .filter-row .filter-group .filter-select,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .filter-row .filter-group .filter-input,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .filter-row .filter-group .filter-select,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .filter-row .filter-group .filter-input,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .filter-row .filter-group .filter-select {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: all 0.2s ease;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-input:focus,\n.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-select:focus,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-input:focus,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-select:focus,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .filter-row .filter-group .filter-input:focus,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .filter-row .filter-group .filter-select:focus,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .filter-row .filter-group .filter-input:focus,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .filter-row .filter-group .filter-select:focus,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .filter-row .filter-group .filter-input:focus,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .filter-row .filter-group .filter-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-input:hover,\n.reports-page .reports-content .report-category .filters-section .filter-card .filter-row .filter-group .filter-select:hover,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-input:hover,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .filter-row .filter-group .filter-select:hover,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .filter-row .filter-group .filter-input:hover,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .filter-row .filter-group .filter-select:hover,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .filter-row .filter-group .filter-input:hover,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .filter-row .filter-group .filter-select:hover,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .filter-row .filter-group .filter-input:hover,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .filter-row .filter-group .filter-select:hover {\n  border-color: #d1d5db;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .generate-button,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .generate-button,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .generate-button,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .generate-button {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .generate-button:hover:not(:disabled),\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button:hover:not(:disabled),\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .generate-button:hover:not(:disabled),\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .generate-button:hover:not(:disabled),\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .generate-button:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .generate-button:disabled,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button:disabled,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .generate-button:disabled,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .generate-button:disabled,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .generate-button:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .generate-button .loading-content,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button .loading-content,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .generate-button .loading-content,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .generate-button .loading-content,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .generate-button .loading-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .generate-button .loading-content .loading-spinner,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .generate-button .loading-content .loading-spinner,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .generate-button .loading-content .loading-spinner,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .generate-button .loading-content .loading-spinner,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .generate-button .loading-content .loading-spinner {\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .quick-report-item,\n.reports-page .reports-content .report-category .filters-section .filter-card .insight-item,\n.reports-page .reports-content .report-category .filters-section .filter-card .summary-item,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-report-item,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .insight-item,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .summary-item,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .quick-report-item,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .insight-item,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .summary-item,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .quick-report-item,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .insight-item,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .summary-item,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .quick-report-item,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .insight-item,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .summary-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .quick-report-item:hover,\n.reports-page .reports-content .report-category .filters-section .filter-card .insight-item:hover,\n.reports-page .reports-content .report-category .filters-section .filter-card .summary-item:hover,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-report-item:hover,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .insight-item:hover,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .summary-item:hover,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .quick-report-item:hover,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .insight-item:hover,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .summary-item:hover,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .quick-report-item:hover,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .insight-item:hover,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .summary-item:hover,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .quick-report-item:hover,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .insight-item:hover,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .summary-item:hover {\n  background: #f9fafb;\n  border-color: #e5e7eb;\n  transform: translateY(-1px);\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .quick-report-item svg,\n.reports-page .reports-content .report-category .filters-section .filter-card .insight-item svg,\n.reports-page .reports-content .report-category .filters-section .filter-card .summary-item svg,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-report-item svg,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .insight-item svg,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .summary-item svg,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .quick-report-item svg,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .insight-item svg,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .summary-item svg,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .quick-report-item svg,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .insight-item svg,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .summary-item svg,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .quick-report-item svg,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .insight-item svg,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .summary-item svg {\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .quick-report-item span,\n.reports-page .reports-content .report-category .filters-section .filter-card .insight-item span,\n.reports-page .reports-content .report-category .filters-section .filter-card .summary-item span,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-report-item span,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .insight-item span,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .summary-item span,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .quick-report-item span,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .insight-item span,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .summary-item span,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .quick-report-item span,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .insight-item span,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .summary-item span,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .quick-report-item span,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .insight-item span,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .summary-item span {\n  font-size: 0.875rem;\n  color: #374151;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .quick-action-button,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-action-button,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .quick-action-button,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .quick-action-button,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .quick-action-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .quick-action-button:hover,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-action-button:hover,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .quick-action-button:hover,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .quick-action-button:hover,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .quick-action-button:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.reports-page .reports-content .report-category .filters-section .filter-card .quick-action-button svg,\n.reports-page .reports-content .report-category .filters-section .quick-reports-card .quick-action-button svg,\n.reports-page .reports-content .report-category .filters-section .quick-actions-card .quick-action-button svg,\n.reports-page .reports-content .report-category .filters-section .quick-insights-card .quick-action-button svg,\n.reports-page .reports-content .report-category .filters-section .executive-summary-card .quick-action-button svg {\n  width: 1rem;\n  height: 1rem;\n}\n.reports-page .reports-content .report-category .available-reports,\n.reports-page .reports-content .report-category .maintenance-reports,\n.reports-page .reports-content .report-category .inventory-reports,\n.reports-page .reports-content .report-category .financial-reports {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  margin-bottom: 2rem;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.reports-page .reports-content .report-category .available-reports:hover,\n.reports-page .reports-content .report-category .maintenance-reports:hover,\n.reports-page .reports-content .report-category .inventory-reports:hover,\n.reports-page .reports-content .report-category .financial-reports:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.reports-page .reports-content .report-category .available-reports h3,\n.reports-page .reports-content .report-category .maintenance-reports h3,\n.reports-page .reports-content .report-category .inventory-reports h3,\n.reports-page .reports-content .report-category .financial-reports h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.reports-page .reports-content .report-category .available-reports p,\n.reports-page .reports-content .report-category .maintenance-reports p,\n.reports-page .reports-content .report-category .inventory-reports p,\n.reports-page .reports-content .report-category .financial-reports p {\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.6;\n}\n.reports-page .reports-content .report-category .available-reports .report-list,\n.reports-page .reports-content .report-category .available-reports .report-grid,\n.reports-page .reports-content .report-category .maintenance-reports .report-list,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid,\n.reports-page .reports-content .report-category .inventory-reports .report-list,\n.reports-page .reports-content .report-category .inventory-reports .report-grid,\n.reports-page .reports-content .report-category .financial-reports .report-list,\n.reports-page .reports-content .report-category .financial-reports .report-grid {\n  display: grid;\n  gap: 1rem;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item {\n  position: relative;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item input[type=checkbox],\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item input[type=checkbox],\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item input[type=checkbox],\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item input[type=checkbox],\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item input[type=checkbox],\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item input[type=checkbox],\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item input[type=checkbox],\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item input[type=checkbox]:checked + .report-card,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item input[type=checkbox]:checked + .report-card,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item input[type=checkbox]:checked + .report-card,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item input[type=checkbox]:checked + .report-card,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item input[type=checkbox]:checked + .report-card,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item input[type=checkbox]:checked + .report-card,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item input[type=checkbox]:checked + .report-card,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item input[type=checkbox]:checked + .report-card {\n  border-color: #3b82f6;\n  background: #f0f9ff;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item input[type=checkbox]:checked + .report-card .report-icon,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item input[type=checkbox]:checked + .report-card .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item input[type=checkbox]:checked + .report-card .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item input[type=checkbox]:checked + .report-card .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item input[type=checkbox]:checked + .report-card .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item input[type=checkbox]:checked + .report-card .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item input[type=checkbox]:checked + .report-card .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item input[type=checkbox]:checked + .report-card .report-icon {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .checkbox-indicator,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .checkbox-indicator,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .checkbox-indicator,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .checkbox-indicator,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .checkbox-indicator,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .checkbox-indicator,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .checkbox-indicator,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .checkbox-indicator,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .checkbox-indicator,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .checkbox-indicator,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .checkbox-indicator,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .checkbox-indicator,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .checkbox-indicator,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .checkbox-indicator,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .checkbox-indicator,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .checkbox-indicator {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .checkbox-indicator svg,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .checkbox-indicator svg,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .checkbox-indicator svg,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .checkbox-indicator svg,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .checkbox-indicator svg,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .checkbox-indicator svg,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .checkbox-indicator svg,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .checkbox-indicator svg,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .checkbox-indicator svg,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .checkbox-indicator svg,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .checkbox-indicator svg,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .checkbox-indicator svg,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .checkbox-indicator svg,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .checkbox-indicator svg,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .checkbox-indicator svg,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .checkbox-indicator svg {\n  color: #3b82f6;\n  stroke-width: 3;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card:hover,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content:hover,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card:hover,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content:hover,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card:hover,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content:hover,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card:hover,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content:hover,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card:hover,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content:hover,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card:hover,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content:hover,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card:hover,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content:hover,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card:hover,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content:hover {\n  border-color: #d1d5db;\n  background: #f9fafb;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card.selected,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content.selected,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card.selected,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content.selected,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card.selected,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content.selected,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card.selected,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content.selected,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card.selected,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content.selected,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card.selected,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content.selected,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card.selected,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content.selected,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card.selected,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content.selected {\n  background: #f0f9ff;\n  border-color: #3b82f6;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card.selected .checkbox-indicator,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content.selected .checkbox-indicator {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card.selected .report-icon,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content.selected .report-icon,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card.selected .report-icon,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content.selected .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card.selected .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content.selected .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card.selected .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content.selected .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card.selected .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content.selected .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card.selected .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content.selected .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card.selected .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content.selected .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card.selected .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content.selected .report-icon {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-icon,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-icon,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-icon,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-icon,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-icon,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-icon,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-icon {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f3f4f6;\n  border-radius: 8px;\n  color: #6b7280;\n  transition: all 0.2s ease;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-icon svg,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-icon svg,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-icon svg,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-icon svg,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-icon svg,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-icon svg,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-icon svg,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-icon svg,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-icon svg,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-icon svg,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-icon svg,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-icon svg,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-icon svg,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-icon svg,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-icon svg,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-icon svg {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-content,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-content,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-content,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-content,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-content,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-content,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-content,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-content,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-content,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-content,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-content,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-content,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-content,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-content,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-content,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-content {\n  flex: 1;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-content h4,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-content h4,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-content h4,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-content h4,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-content h4,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-content h4,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-content h4,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-content h4,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-content h4,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-content h4,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-content h4,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-content h4,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-content h4,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-content h4,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-content h4,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-content h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n  line-height: 1.4;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-content p,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-content p,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-content p,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-content p,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-content p,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-content p,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-content p,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-content p,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-content p,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-content p,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-content p,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-content p,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-content p,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-content p,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-content p,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-content p {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.5;\n}\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card .report-content .report-time,\n.reports-page .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-content .report-time,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-content .report-time,\n.reports-page .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-content .report-time,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-content .report-time,\n.reports-page .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-content .report-time,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-content .report-time,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-content .report-time,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-content .report-time,\n.reports-page .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-content .report-time,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-content .report-time,\n.reports-page .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-content .report-time,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-content .report-time,\n.reports-page .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-content .report-time,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-content .report-time,\n.reports-page .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-content .report-time {\n  font-size: 0.75rem;\n  color: #6b7280;\n  background: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.reports-page .reports-content .report-category .available-reports .report-grid,\n.reports-page .reports-content .report-category .maintenance-reports .report-grid,\n.reports-page .reports-content .report-category .inventory-reports .report-grid,\n.reports-page .reports-content .report-category .financial-reports .report-grid {\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n.reports-page .reports-content .report-category .kpi-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.reports-page .reports-content .report-category .kpi-section .kpi-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-icon {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #eff6ff;\n  border-radius: 0.5rem;\n  color: #3b82f6;\n}\n.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-icon svg {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content h4 {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  margin: 0 0 0.25rem 0;\n}\n.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content .kpi-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content .trend-icon {\n  width: 1rem;\n  height: 1rem;\n  margin-left: 0.5rem;\n}\n.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content .trend-icon.positive {\n  color: #10b981;\n}\n.reports-page .reports-content .report-category .kpi-section .kpi-card .kpi-content .trend-icon.negative {\n  color: #ef4444;\n}\n.reports-page .reports-content .report-category .cost-distribution {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n}\n.reports-page .reports-content .report-category .cost-distribution h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.reports-page .reports-content .report-category .cost-distribution p {\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n}\n.reports-page .reports-content .report-category .cost-distribution .chart-container {\n  display: flex;\n  height: 2rem;\n  border-radius: 0.375rem;\n  overflow: hidden;\n}\n.reports-page .reports-content .report-category .cost-distribution .chart-container .chart-bar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.reports-page .reports-content .report-category .cost-distribution .chart-container .chart-bar.maintenance {\n  background: #3b82f6;\n}\n.reports-page .reports-content .report-category .cost-distribution .chart-container .chart-bar.operations {\n  background: #3b82f6;\n}\n.reports-page .reports-content .report-category .cost-distribution .chart-container .chart-bar.administration {\n  background: #10b981;\n}\n.reports-page .reports-content .report-category .cost-distribution .kpi-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.reports-page .reports-content .report-category .cost-distribution .kpi-section .kpi-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.reports-page .reports-content .report-category .cost-distribution .kpi-section .kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.reports-page .reports-content .report-category .cost-distribution .kpi-section .kpi-card .kpi-icon {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f9ff;\n  border-radius: 8px;\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.reports-page .reports-content .report-category .cost-distribution .kpi-section .kpi-card .kpi-icon svg {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.reports-page .reports-content .report-category .cost-distribution .kpi-section .kpi-card .kpi-content {\n  flex: 1;\n}\n.reports-page .reports-content .report-category .cost-distribution .kpi-section .kpi-card .kpi-content .kpi-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 0.25rem 0;\n  font-weight: 500;\n}\n.reports-page .reports-content .report-category .cost-distribution .kpi-section .kpi-card .kpi-content .kpi-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.2;\n  font-feature-settings: "tnum";\n  font-variant-numeric: tabular-nums;\n}\n.reports-page .reports-content .report-category .custom-reports-layout {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel h3,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel p,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel p {\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.6;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section {\n  margin-bottom: 1.5rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group {\n  margin-bottom: 1rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group label,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-input,\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-select,\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-textarea,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-input,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-select,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-textarea {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background: white;\n  transition: all 0.2s ease;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-input:focus,\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-select:focus,\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-textarea:focus,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-input:focus,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-select:focus,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-input:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-select:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-textarea:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-input:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-select:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-textarea:hover {\n  border-color: #d1d5db;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-section .form-group .form-textarea,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-section .form-group .form-textarea {\n  min-height: 4rem;\n  resize: vertical;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .data-sources,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .data-sources {\n  margin-bottom: 1.5rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .data-sources h4,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .data-sources h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem 0;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .data-sources .data-source-item,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .data-sources .data-source-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .data-sources .data-source-item:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .data-sources .data-source-item:hover {\n  background: #f3f4f6;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .data-sources .data-source-item input[type=radio],\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .data-sources .data-source-item input[type=radio] {\n  margin: 0;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .data-sources .data-source-item label,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .data-sources .data-source-item label {\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .data-sources .data-source-item label .source-name,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .data-sources .data-source-item label .source-name {\n  font-weight: 500;\n  color: #374151;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .data-sources .data-source-item label .field-count,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .data-sources .data-source-item label .field-count {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .filter-conditions,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .filter-conditions {\n  margin-bottom: 1.5rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .filter-conditions h4,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .filter-conditions h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem 0;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-actions,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-actions {\n  display: flex;\n  gap: 1rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-actions .btn-primary,\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-actions .btn-secondary,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-actions .btn-primary,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-actions .btn-secondary {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-actions .btn-primary svg,\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-actions .btn-secondary svg,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-actions .btn-primary svg,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-actions .btn-secondary svg {\n  width: 1rem;\n  height: 1rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-actions .btn-primary,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-actions .btn-primary {\n  background: #3b82f6;\n  color: white;\n  border: none;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-actions .btn-primary:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-actions .btn-primary:hover {\n  background: #2563eb;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-actions .btn-secondary,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-actions .btn-secondary {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .form-actions .btn-secondary:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .form-actions .btn-secondary:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .saved-report-item,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .saved-report-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .saved-report-item .report-info h4,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .saved-report-item .report-info h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.25rem 0;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .saved-report-item .report-info p,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .saved-report-item .report-info p {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .saved-report-item .report-info .report-meta,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .saved-report-item .report-info .report-meta {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .saved-report-item .report-actions,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .saved-report-item .report-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .saved-report-item .report-actions .action-btn,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .saved-report-item .report-actions .action-btn {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  background: white;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .saved-report-item .report-actions .action-btn:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .saved-report-item .report-actions .action-btn:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .saved-report-item .report-actions .action-btn svg,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .saved-report-item .report-actions .action-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .quick-templates h3,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .quick-templates h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem 0;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .quick-templates .template-item,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .quick-templates .template-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 0.5rem;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .quick-templates .template-item:hover,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .quick-templates .template-item:hover {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .quick-templates .template-item svg,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .quick-templates .template-item svg {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #6b7280;\n}\n.reports-page .reports-content .report-category .custom-reports-layout .create-report-panel .quick-templates .template-item span,\n.reports-page .reports-content .report-category .custom-reports-layout .saved-reports-panel .quick-templates .template-item span {\n  font-size: 0.875rem;\n  color: #374151;\n}\n.reports-page .loading-state {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n  padding: 2rem;\n}\n.reports-page .loading-state .loading-skeleton {\n  width: 100%;\n  max-width: 800px;\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.reports-page .loading-state .loading-skeleton .skeleton-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.reports-page .loading-state .loading-skeleton .skeleton-header .skeleton-icon {\n  width: 3rem;\n  height: 3rem;\n  background: #e2e8f0;\n  border-radius: 0.5rem;\n  animation: pulse 2s infinite;\n}\n.reports-page .loading-state .loading-skeleton .skeleton-header .skeleton-text {\n  flex: 1;\n}\n.reports-page .loading-state .loading-skeleton .skeleton-header .skeleton-text .skeleton-line {\n  height: 1rem;\n  background: #e2e8f0;\n  border-radius: 0.25rem;\n  margin-bottom: 0.5rem;\n  animation: pulse 2s infinite;\n}\n.reports-page .loading-state .loading-skeleton .skeleton-header .skeleton-text .skeleton-line.large {\n  width: 60%;\n}\n.reports-page .loading-state .loading-skeleton .skeleton-header .skeleton-text .skeleton-line.medium {\n  width: 40%;\n}\n.reports-page .loading-state .loading-skeleton .skeleton-content .skeleton-line {\n  height: 0.75rem;\n  background: #e2e8f0;\n  border-radius: 0.25rem;\n  margin-bottom: 0.75rem;\n  animation: pulse 2s infinite;\n}\n.reports-page .loading-state .loading-skeleton .skeleton-content .skeleton-line.short {\n  width: 30%;\n}\n.reports-page .loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n}\n.reports-page .loading-state .loading-spinner {\n  width: 2rem;\n  height: 2rem;\n  border: 3px solid #e5e7eb;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.reports-page .loading-state .loading-text {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.reports-page .no-data-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 2rem;\n  text-align: center;\n}\n.reports-page .no-data-state .no-data-icon {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.reports-page .no-data-state .no-data-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.reports-page .no-data-state .no-data-description {\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n  max-width: 400px;\n}\n.reports-page .no-data-state .retry-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.reports-page .no-data-state .retry-button:hover {\n  background: #2563eb;\n}\n.reports-page .no-data-state .retry-button svg {\n  width: 1rem;\n  height: 1rem;\n}\n.reports-page .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 2rem;\n  text-align: center;\n}\n.reports-page .error-state .error-icon {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.reports-page .error-state .error-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.reports-page .error-state .error-description {\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n  max-width: 400px;\n}\n.reports-page .error-state .retry-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.reports-page .error-state .retry-button:hover {\n  background: #2563eb;\n}\n.reports-page .error-state .retry-button svg {\n  width: 1rem;\n  height: 1rem;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@media (max-width: 768px) {\n  .reports-page .reports-header {\n    padding: 1rem;\n  }\n  .reports-page .reports-header .header-content {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .reports-page .reports-header .header-content .header-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .reports-page .report-tabs {\n    padding: 0 1rem;\n    overflow-x: auto;\n    flex-wrap: nowrap;\n  }\n  .reports-page .report-tabs .tab-button {\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n  .reports-page .reports-content {\n    padding: 0 1rem 2rem;\n  }\n  .reports-page .reports-content .report-category .filters-section {\n    grid-template-columns: 1fr;\n  }\n  .reports-page .reports-content .report-category .kpi-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .reports-page .reports-content .report-category .custom-reports-layout {\n    grid-template-columns: 1fr;\n  }\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes pulse {\n    0%, 100% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.5;\n    }\n  }\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(10px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n}\n@media (max-width: 768px) and (max-width: 1024px) {\n  .reports-content {\n    padding: 0 1rem 2rem;\n  }\n  .reports-content .report-category .filters-section {\n    grid-template-columns: 1fr;\n  }\n  .reports-content .report-category .kpi-section {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  }\n  .reports-content .report-category .custom-reports-layout {\n    grid-template-columns: 1fr;\n  }\n  .report-tabs {\n    padding: 0 1rem;\n    overflow-x: auto;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n  .report-tabs::-webkit-scrollbar {\n    display: none;\n  }\n  .report-tabs .tab-button {\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n  .reports-header {\n    padding: 1.5rem 1rem;\n  }\n  .reports-header .header-content {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .reports-header .header-content .header-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 768px) and (max-width: 768px) {\n  .reports-content {\n    padding: 0 1rem 1rem;\n  }\n  .reports-content .report-category .filters-section {\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .reports-content .report-category .filters-section .filter-card,\n  .reports-content .report-category .filters-section .quick-reports-card,\n  .reports-content .report-category .filters-section .quick-actions-card,\n  .reports-content .report-category .filters-section .quick-insights-card,\n  .reports-content .report-category .filters-section .executive-summary-card {\n    padding: 1rem;\n  }\n  .reports-content .report-category .kpi-section {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n    margin-bottom: 1.5rem;\n  }\n  .reports-content .report-category .kpi-section .kpi-card {\n    padding: 1rem;\n  }\n  .reports-content .report-category .available-reports,\n  .reports-content .report-category .maintenance-reports,\n  .reports-content .report-category .inventory-reports,\n  .reports-content .report-category .financial-reports {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .reports-content .report-category .available-reports .report-list .report-item .report-card,\n  .reports-content .report-category .available-reports .report-list .report-item .report-card-content,\n  .reports-content .report-category .available-reports .report-grid .report-item .report-card,\n  .reports-content .report-category .available-reports .report-grid .report-item .report-card-content,\n  .reports-content .report-category .maintenance-reports .report-list .report-item .report-card,\n  .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content,\n  .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card,\n  .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content,\n  .reports-content .report-category .inventory-reports .report-list .report-item .report-card,\n  .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content,\n  .reports-content .report-category .inventory-reports .report-grid .report-item .report-card,\n  .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content,\n  .reports-content .report-category .financial-reports .report-list .report-item .report-card,\n  .reports-content .report-category .financial-reports .report-list .report-item .report-card-content,\n  .reports-content .report-category .financial-reports .report-grid .report-item .report-card,\n  .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content {\n    padding: 0.75rem;\n    flex-direction: column;\n    text-align: center;\n    gap: 0.75rem;\n  }\n  .reports-content .report-category .available-reports .report-list .report-item .report-card .report-icon,\n  .reports-content .report-category .available-reports .report-list .report-item .report-card-content .report-icon,\n  .reports-content .report-category .available-reports .report-grid .report-item .report-card .report-icon,\n  .reports-content .report-category .available-reports .report-grid .report-item .report-card-content .report-icon,\n  .reports-content .report-category .maintenance-reports .report-list .report-item .report-card .report-icon,\n  .reports-content .report-category .maintenance-reports .report-list .report-item .report-card-content .report-icon,\n  .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card .report-icon,\n  .reports-content .report-category .maintenance-reports .report-grid .report-item .report-card-content .report-icon,\n  .reports-content .report-category .inventory-reports .report-list .report-item .report-card .report-icon,\n  .reports-content .report-category .inventory-reports .report-list .report-item .report-card-content .report-icon,\n  .reports-content .report-category .inventory-reports .report-grid .report-item .report-card .report-icon,\n  .reports-content .report-category .inventory-reports .report-grid .report-item .report-card-content .report-icon,\n  .reports-content .report-category .financial-reports .report-list .report-item .report-card .report-icon,\n  .reports-content .report-category .financial-reports .report-list .report-item .report-card-content .report-icon,\n  .reports-content .report-category .financial-reports .report-grid .report-item .report-card .report-icon,\n  .reports-content .report-category .financial-reports .report-grid .report-item .report-card-content .report-icon {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .reports-header {\n    padding: 1rem;\n  }\n  .reports-header .header-content .header-left .title {\n    font-size: 2rem;\n  }\n  .reports-header .header-content .header-left .subtitle {\n    font-size: 1rem;\n  }\n  .reports-header .header-content .header-actions {\n    flex-direction: column;\n    gap: 0.75rem;\n    width: 100%;\n  }\n  .reports-header .header-content .header-actions .action-button {\n    width: 100%;\n    justify-content: center;\n  }\n  .report-tabs {\n    padding: 0 1rem;\n    margin-bottom: 1.5rem;\n  }\n}\n@media (max-width: 768px) and (max-width: 480px) {\n  .reports-content {\n    padding: 0 0.75rem 1rem;\n  }\n  .reports-content .report-category .filters-section .filter-card,\n  .reports-content .report-category .filters-section .quick-reports-card,\n  .reports-content .report-category .filters-section .quick-actions-card,\n  .reports-content .report-category .filters-section .quick-insights-card,\n  .reports-content .report-category .filters-section .executive-summary-card {\n    padding: 0.75rem;\n  }\n  .reports-content .report-category .kpi-section .kpi-card {\n    padding: 0.75rem;\n    flex-direction: column;\n    text-align: center;\n  }\n  .reports-content .report-category .kpi-section .kpi-card .kpi-icon {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .reports-header {\n    padding: 0.75rem;\n  }\n  .reports-header .header-content .header-left .title {\n    font-size: 1.75rem;\n  }\n  .reports-header .header-content .header-left .subtitle {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=reports.page.css.map */\n'] }]
  }], () => [{ type: ReportsApiService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsPage, { className: "ReportsPage", filePath: "src/app/reports/pages/reports.page.ts", lineNumber: 16 });
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
//# sourceMappingURL=chunk-V34D2O2G.js.map
