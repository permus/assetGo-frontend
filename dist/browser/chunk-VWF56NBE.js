import {
  environment
} from "./chunk-5YESG6NV.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-TS6BXV7E.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BHMN65X2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/services/inventory-analytics.service.ts
var InventoryAnalyticsService = class _InventoryAnalyticsService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getAuthHeaders() {
    const token = localStorage.getItem("token");
    return {
      headers: __spreadValues({
        "Content-Type": "application/json"
      }, token ? { "Authorization": `Bearer ${token}` } : {})
    };
  }
  getDashboardData() {
    return this.http.get(`${this.apiUrl}/inventory/dashboard/overview`, this.getAuthHeaders());
  }
  getAbcAnalysis() {
    return this.http.get(`${this.apiUrl}/inventory/analytics/abc-analysis`, this.getAuthHeaders());
  }
  // Parts Catalog Methods
  getPartsCatalog(search, status, page = 1, perPage = 15) {
    let params = new HttpParams().set("page", page.toString()).set("per_page", perPage.toString());
    if (search) {
      params = params.set("search", search);
    }
    if (status) {
      params = params.set("status", status);
    }
    return this.http.get(`${this.apiUrl}/inventory/parts`, __spreadProps(__spreadValues({}, this.getAuthHeaders()), { params }));
  }
  getPart(partId) {
    return this.http.get(`${this.apiUrl}/inventory/parts/${partId}`, this.getAuthHeaders());
  }
  createPart(partData) {
    return this.http.post(`${this.apiUrl}/inventory/parts`, partData, this.getAuthHeaders());
  }
  updatePart(partId, partData) {
    return this.http.put(`${this.apiUrl}/inventory/parts/${partId}`, partData, this.getAuthHeaders());
  }
  deletePart(partId) {
    return this.http.delete(`${this.apiUrl}/inventory/parts/${partId}`, this.getAuthHeaders());
  }
  // Stock Levels Methods
  getStockLevels(locationId, partId, search, page = 1, perPage = 15) {
    let params = new HttpParams().set("page", page.toString()).set("per_page", perPage.toString());
    if (locationId) {
      params = params.set("location_id", locationId.toString());
    }
    if (partId) {
      params = params.set("part_id", partId.toString());
    }
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(`${this.apiUrl}/inventory/stocks`, __spreadProps(__spreadValues({}, this.getAuthHeaders()), { params }));
  }
  adjustStock(adjustmentData) {
    return this.http.post(`${this.apiUrl}/inventory/stocks/adjust`, adjustmentData, this.getAuthHeaders());
  }
  transferStock(transferData) {
    return this.http.post(`${this.apiUrl}/inventory/stocks/transfer`, transferData, this.getAuthHeaders());
  }
  reserveStock(reserveData) {
    return this.http.post(`${this.apiUrl}/inventory/stocks/reserve`, reserveData, this.getAuthHeaders());
  }
  releaseStock(releaseData) {
    return this.http.post(`${this.apiUrl}/inventory/stocks/release`, releaseData, this.getAuthHeaders());
  }
  performStockCount(countData) {
    return this.http.post(`${this.apiUrl}/inventory/stocks/count`, countData, this.getAuthHeaders());
  }
  static \u0275fac = function InventoryAnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryAnalyticsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InventoryAnalyticsService, factory: _InventoryAnalyticsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryAnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  InventoryAnalyticsService
};
//# sourceMappingURL=chunk-VWF56NBE.js.map
