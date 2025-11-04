import {
  AuthService
} from "./chunk-BGMQUXYP.js";
import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  HttpClient
} from "./chunk-ENJBTPXH.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SCVX3V3B.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/assets/services/asset.service.ts
var AssetService = class _AssetService {
  http;
  authService;
  baseUrl = environment.apiUrl;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return {
      headers: __spreadValues({
        "Content-Type": "application/json"
      }, token ? { "Authorization": `Bearer ${token}` } : {})
    };
  }
  // Asset resource endpoints
  getAssets(params = {}) {
    let queryParams = "";
    const paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
      const queryArray = paramKeys.filter((key) => params[key] !== "" && params[key] !== null && params[key] !== void 0).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      if (queryArray.length > 0) {
        queryParams = "?" + queryArray.join("&");
      }
    }
    return this.http.get(`${this.baseUrl}/assets${queryParams}`, this.getAuthHeaders());
  }
  getAsset(id) {
    return this.http.get(`${this.baseUrl}/assets/${id}`, this.getAuthHeaders());
  }
  createAsset(data) {
    return this.http.post(`${this.baseUrl}/assets`, data, this.getAuthHeaders());
  }
  updateAsset(id, data) {
    return this.http.put(`${this.baseUrl}/assets/${id}`, data, this.getAuthHeaders());
  }
  deleteAsset(id) {
    return this.http.delete(`${this.baseUrl}/assets/${id}`, this.getAuthHeaders());
  }
  // Restore asset from archive
  restoreAsset(id, data) {
    return this.http.post(`${this.baseUrl}/assets/${id}/restore`, data, this.getAuthHeaders());
  }
  // Get archive analytics
  getArchiveAnalytics() {
    return this.http.get(`${this.baseUrl}/assets/analytics`, this.getAuthHeaders());
  }
  // Export assets (CSV)
  exportAssets(archived = false) {
    const params = archived ? "?archived=1" : "";
    return this.http.get(`${this.baseUrl}/assets/export${params}`, __spreadValues({
      responseType: "blob"
    }, this.getAuthHeaders()));
  }
  // Export assets to Excel
  exportAssetsToExcel(archived = false) {
    const params = archived ? "?archived=1" : "";
    return this.http.get(`${this.baseUrl}/assets/export-excel${params}`, __spreadValues({
      responseType: "blob"
    }, this.getAuthHeaders()));
  }
  // Bulk import assets from Excel
  importBulkExcel(file) {
    const formData = new FormData();
    formData.append("file", file);
    const token = this.authService.getToken();
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return this.http.post(`${this.baseUrl}/assets/import-bulk-excel`, formData, {
      headers
    });
  }
  // Get import progress
  getImportProgress(jobId) {
    return this.http.get(`${this.baseUrl}/assets/import-progress/${jobId}`, this.getAuthHeaders());
  }
  // Archive asset
  archiveAsset(id, data = {}) {
    return this.http.post(`${this.baseUrl}/assets/${id}/archive`, data, this.getAuthHeaders());
  }
  // Bulk archive assets
  bulkArchiveAssets(data) {
    return this.http.post(`${this.baseUrl}/assets/bulk-archive`, data, this.getAuthHeaders());
  }
  // Bulk delete assets (permanently delete archived assets)
  bulkDeleteAssets(data) {
    return this.http.post(`${this.baseUrl}/assets/bulk-delete`, data, this.getAuthHeaders());
  }
  // Bulk restore assets
  bulkRestoreAssets(assetIds, restoreReason) {
    const payload = { asset_ids: assetIds };
    if (restoreReason && restoreReason.trim()) {
      payload.restore_reason = restoreReason.trim();
    }
    return this.http.post(`${this.baseUrl}/assets/bulk-restore`, payload, this.getAuthHeaders());
  }
  // Asset statistics
  getAssetStatistics() {
    return this.http.get(`${this.baseUrl}/assets/statistics`, this.getAuthHeaders());
  }
  // Asset category
  getAssetCategories() {
    return this.http.get(`${this.baseUrl}/asset-categories`, this.getAuthHeaders());
  }
  // Custom asset endpoints
  duplicateAsset(id, data = {}) {
    return this.http.post(`${this.baseUrl}/assets/${id}/duplicate`, data, this.getAuthHeaders());
  }
  bulkImportAssets(data) {
    return this.http.post(`${this.baseUrl}/assets/import-bulk-json`, data, this.getAuthHeaders());
  }
  transferAsset(id, data) {
    return this.http.post(`${this.baseUrl}/assets/${id}/transfer`, data, this.getAuthHeaders());
  }
  // Maintenance schedule CRUD
  listMaintenanceSchedules(assetId) {
    return this.http.get(`${this.baseUrl}/assets/${assetId}/maintenance-schedules`, this.getAuthHeaders());
  }
  addMaintenanceSchedule(assetId, data) {
    return this.http.post(`${this.baseUrl}/assets/${assetId}/maintenance-schedules`, data, this.getAuthHeaders());
  }
  updateMaintenanceSchedule(assetId, scheduleId, data) {
    return this.http.put(`${this.baseUrl}/assets/${assetId}/maintenance-schedules/${scheduleId}`, data, this.getAuthHeaders());
  }
  deleteMaintenanceSchedule(assetId, scheduleId) {
    return this.http.delete(`${this.baseUrl}/assets/${assetId}/maintenance-schedules/${scheduleId}`, this.getAuthHeaders());
  }
  // Activity history
  getActivityHistory(assetId, params = {}) {
    let queryParams = "";
    const paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
      const queryArray = paramKeys.filter((key) => params[key] !== "" && params[key] !== null && params[key] !== void 0).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      if (queryArray.length > 0) {
        queryParams = "?" + queryArray.join("&");
      }
    }
    return this.http.get(`${this.baseUrl}/assets/${assetId}/activity-history${queryParams}`, this.getAuthHeaders());
  }
  // Location list
  getLocations(page = 1, perPage = 1e3, sortBy = "created", sortDirection = "desc") {
    const params = `?page=${page}&per_page=${perPage}&sort_by=${sortBy}&sort_direction=${sortDirection}`;
    return this.http.get(`${this.baseUrl}/locations${params}`, this.getAuthHeaders());
  }
  // Asset Types
  getAssetTypes() {
    return this.http.get(`${this.baseUrl}/asset-types-list`, this.getAuthHeaders());
  }
  // Asset Statuses
  getAssetStatuses() {
    return this.http.get(`${this.baseUrl}/asset-statuses-list`, this.getAuthHeaders());
  }
  // Departments
  getDepartments(page = 1, perPage = 1e3, sortBy = "created", sortDirection = "desc") {
    const params = `?page=${page}&per_page=${perPage}&sort_by=${sortBy}&sort_direction=${sortDirection}`;
    return this.http.get(`${this.baseUrl}/departments-list${params}`, this.getAuthHeaders());
  }
  // Fetch possible parent assets
  getPossibleParents(assetId) {
    let url = `${this.baseUrl}/assets/possible-parents`;
    if (assetId) {
      url += `/${assetId}`;
    }
    return this.http.get(url, this.getAuthHeaders());
  }
  // Public methods (no authentication required)
  getAssetPublic(id) {
    return this.http.get(`${this.baseUrl}/assets/${id}/public`);
  }
  getActivityHistoryPublic(assetId, params = {}) {
    let queryParams = "";
    const paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
      const queryArray = paramKeys.filter((key) => params[key] !== "" && params[key] !== null && params[key] !== void 0).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      if (queryArray.length > 0) {
        queryParams = "?" + queryArray.join("&");
      }
    }
    return this.http.get(`${this.baseUrl}/assets/${assetId}/activity-history/public${queryParams}`);
  }
  // Get related assets
  getRelatedAssets(assetId, params = {}) {
    let queryParams = "";
    const paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
      const queryArray = paramKeys.filter((key) => params[key] !== "" && params[key] !== null && params[key] !== void 0).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      if (queryArray.length > 0) {
        queryParams = "?" + queryArray.join("&");
      }
    }
    return this.http.get(`${this.baseUrl}/assets/${assetId}/related${queryParams}`, this.getAuthHeaders());
  }
  // Get asset depreciation chart data
  getAssetDepreciationChart(assetId, params = {}) {
    let queryParams = "";
    const paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
      const queryArray = paramKeys.filter((key) => params[key] !== "" && params[key] !== null && params[key] !== void 0).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      if (queryArray.length > 0) {
        queryParams = "?" + queryArray.join("&");
      }
    }
    return this.http.get(`${this.baseUrl}/assets/${assetId}/chart-data${queryParams}`, this.getAuthHeaders());
  }
  // Get asset health & performance chart data
  getAssetHealthPerformanceChart(assetId, params = {}) {
    let queryParams = "";
    const paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
      const queryArray = paramKeys.filter((key) => params[key] !== "" && params[key] !== null && params[key] !== void 0).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      if (queryArray.length > 0) {
        queryParams = "?" + queryArray.join("&");
      }
    }
    return this.http.get(`${this.baseUrl}/assets/${assetId}/health-performance-chart${queryParams}`, this.getAuthHeaders());
  }
  static \u0275fac = function AssetService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetService, factory: _AssetService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  AssetService
};
//# sourceMappingURL=chunk-XSZSUCV7.js.map
