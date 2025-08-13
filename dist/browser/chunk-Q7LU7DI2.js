import {
  AssetService
} from "./chunk-LJFCQSIX.js";
import {
  BehaviorSubject,
  Injectable,
  Subject,
  interval,
  setClassMetadata,
  takeUntil,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-E3IEKUEF.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/shared/services/import-progress.service.ts
var ImportProgressService = class _ImportProgressService {
  assetService;
  destroy$ = new Subject();
  polling$ = new Subject();
  // State management
  _state = new BehaviorSubject({
    showProgressBox: false,
    currentJobId: null,
    progressPercentage: 0,
    progressMessage: "Starting import...",
    isCompleted: false,
    isImportComplete: false,
    importResults: null,
    failedImportsCsvData: null
  });
  // Public observable for components to subscribe to
  state$ = this._state.asObservable();
  constructor(assetService) {
    this.assetService = assetService;
  }
  /**
   * Get current state
   */
  get currentState() {
    return this._state.value;
  }
  /**
   * Start import progress tracking
   */
  startImport(jobId, importResults) {
    this.updateState({
      showProgressBox: true,
      currentJobId: jobId,
      progressPercentage: 0,
      progressMessage: `Processing ${importResults.total_assets} assets...`,
      isCompleted: false,
      isImportComplete: false,
      importResults,
      failedImportsCsvData: null
    });
    this.startProgressPolling();
  }
  /**
   * Close the progress box
   */
  closeProgressBox() {
    this.updateState({
      showProgressBox: false,
      currentJobId: null,
      progressPercentage: 0,
      progressMessage: "Starting import...",
      isCompleted: false,
      isImportComplete: false,
      importResults: null,
      failedImportsCsvData: null
    });
    this.polling$.next();
    this.polling$ = new Subject();
  }
  /**
   * Start polling for import progress
   */
  startProgressPolling() {
    if (!this.currentState.currentJobId)
      return;
    interval(2e3).pipe(takeUntil(this.destroy$), takeUntil(this.polling$)).subscribe(() => {
      this.checkImportProgress();
    });
  }
  /**
   * Check import progress
   */
  checkImportProgress() {
    if (!this.currentState.currentJobId)
      return;
    this.assetService.getImportProgress(this.currentState.currentJobId).subscribe({
      next: (response) => {
        const data = response.data || response;
        const rawPercentage = data.progress_percentage;
        const progressPercentage = Math.round(rawPercentage || 0);
        let progressMessage;
        if (data.is_processing) {
          const processed = data.processed_assets || 0;
          const total = data.total_assets || 0;
          const successful = data.successful_imports || 0;
          const failed = data.failed_imports || 0;
          progressMessage = `Processing: ${processed}/${total} assets (${successful} success, ${failed} failed)`;
        } else if (data.is_completed) {
          progressMessage = "Import completed - generating report...";
        } else {
          progressMessage = data.status || "Processing...";
        }
        const isCompleted = data.is_completed || false;
        this.updateState({
          progressPercentage,
          progressMessage,
          isCompleted,
          importResults: data
        });
        if (isCompleted) {
          this.polling$.next();
          this.polling$.complete();
          this.handleImportComplete(data);
        }
      },
      error: (error) => {
        console.error("Error checking progress:", error);
        this.updateState({
          progressMessage: "Error checking progress"
        });
      }
    });
  }
  /**
   * Handle import completion
   */
  handleImportComplete(response) {
    const successful = response.successful_imports || 0;
    const failed = response.failed_imports || 0;
    const total = response.total_assets || 0;
    const progressMessage = `Import complete! ${successful} successful, ${failed} failed out of ${total} assets`;
    this.updateState({
      isImportComplete: true,
      progressMessage,
      importResults: response
    });
    if (failed > 0 && response.errors && response.errors.length > 0) {
      this.generateFailedImportsCSV(response.errors);
    }
  }
  /**
   * Generate CSV for failed imports
   */
  generateFailedImportsCSV(errors) {
    const headers = ["Asset Name", "Error", "Details"];
    const csvContent = [
      headers.join(","),
      ...errors.map((error) => [
        `"${(error.name || "").replace(/"/g, '""')}"`,
        `"${(error.error || "").replace(/"/g, '""')}"`,
        `"${(error.details || "").replace(/"/g, '""')}"`
      ].join(","))
    ].join("\n");
    this.updateState({
      failedImportsCsvData: csvContent
    });
  }
  /**
   * Download the failed imports CSV
   */
  downloadFailedImportsCSV() {
    const csvData = this.currentState.failedImportsCsvData;
    if (csvData) {
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = "failed-imports.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  /**
   * Update state
   */
  updateState(updates) {
    this._state.next(__spreadValues(__spreadValues({}, this.currentState), updates));
  }
  /**
   * Cleanup on service destroy
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.polling$.next();
    this.polling$.complete();
  }
  static \u0275fac = function ImportProgressService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImportProgressService)(\u0275\u0275inject(AssetService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImportProgressService, factory: _ImportProgressService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportProgressService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AssetService }], null);
})();

export {
  ImportProgressService
};
//# sourceMappingURL=chunk-Q7LU7DI2.js.map
