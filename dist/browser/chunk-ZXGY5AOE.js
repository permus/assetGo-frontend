import {
  environment
} from "./chunk-5YESG6NV.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-Y54HQZIO.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RN3O7ENP.js";
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
  getInventoryAnalytics() {
    return this.http.get(`${this.apiUrl}/inventory/analytics/dashboard`, this.getAuthHeaders());
  }
  getAbcAnalysis() {
    return this.http.get(`${this.apiUrl}/inventory/analytics/abc-analysis`, this.getAuthHeaders());
  }
  // Parts Catalog Methods
  getPartsCatalog(search, status, page = 1, perPage = 15) {
    console.log("Calling parts API:", `${this.apiUrl}/inventory/parts`);
    let params = new HttpParams().set("page", page.toString()).set("per_page", perPage.toString());
    if (search) {
      params = params.set("search", search);
    }
    if (status) {
      params = params.set("status", status);
    }
    console.log("Parts API params:", params.toString());
    console.log("Auth headers:", this.getAuthHeaders());
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
  // Locations Methods
  getLocations(page = 1, perPage = 15, hierarchyLevel = 0, sortBy = "created", sortDirection = "desc") {
    console.log("Calling locations API:", `${this.apiUrl}/locations`);
    let params = new HttpParams().set("page", page.toString()).set("per_page", perPage.toString()).set("hierarchy_level", hierarchyLevel.toString()).set("sort_by", sortBy).set("sort_direction", sortDirection);
    console.log("Locations API params:", params.toString());
    console.log("Auth headers:", this.getAuthHeaders());
    return this.http.get(`${this.apiUrl}/locations`, __spreadProps(__spreadValues({}, this.getAuthHeaders()), { params }));
  }
  // Transactions Methods
  getTransactions(queryParams = "") {
    const url = queryParams ? `${this.apiUrl}/inventory/transactions?${queryParams}` : `${this.apiUrl}/inventory/transactions`;
    return this.http.get(url, this.getAuthHeaders());
  }
  // Purchase Order Methods
  // Purchase Order Methods
  getPurchaseOrders(page = 1, perPage = 15, status, search) {
    let params = new HttpParams().set("page", page.toString()).set("per_page", perPage.toString());
    if (status) {
      params = params.set("status", status);
    }
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(`${this.apiUrl}/inventory/purchase-orders`, __spreadProps(__spreadValues({}, this.getAuthHeaders()), { params }));
  }
  getPurchaseOrder(id) {
    return this.http.get(`${this.apiUrl}/inventory/purchase-orders/${id}`, this.getAuthHeaders());
  }
  createPurchaseOrder(poData) {
    return this.http.post(`${this.apiUrl}/inventory/purchase-orders`, poData, this.getAuthHeaders());
  }
  updatePurchaseOrder(id, poData) {
    return this.http.put(`${this.apiUrl}/inventory/purchase-orders/${id}`, poData, this.getAuthHeaders());
  }
  deletePurchaseOrder(id) {
    return this.http.delete(`${this.apiUrl}/inventory/purchase-orders/${id}`, this.getAuthHeaders());
  }
  receivePurchaseOrder(id, receiveData) {
    return this.http.post(`${this.apiUrl}/inventory/purchase-orders/${id}/receive`, receiveData, this.getAuthHeaders());
  }
  approvePurchaseOrder(approveData) {
    return this.http.post(`${this.apiUrl}/inventory/purchase-orders/approve`, approveData, this.getAuthHeaders());
  }
  getPendingApprovals() {
    return this.http.get(`${this.apiUrl}/inventory/purchase-orders/pending-approval`, this.getAuthHeaders());
  }
  getPurchaseOrderPerformance() {
    return this.http.get(`${this.apiUrl}/inventory/purchase-orders/performance`, this.getAuthHeaders());
  }
  sendPurchaseOrderEmail(id, emailData) {
    return this.http.post(`${this.apiUrl}/inventory/purchase-orders/${id}/send-email`, emailData, this.getAuthHeaders());
  }
  // Supplier methods
  getSuppliers(search = "", perPage = 15, page = 1) {
    const params = new HttpParams().set("search", search).set("per_page", perPage.toString()).set("page", page.toString());
    console.log("Getting suppliers with params:", params.toString());
    return this.http.get(`${this.apiUrl}/inventory/suppliers`, __spreadProps(__spreadValues({}, this.getAuthHeaders()), {
      params
    }));
  }
  getSupplier(id) {
    console.log("Getting supplier:", id);
    return this.http.get(`${this.apiUrl}/inventory/suppliers/${id}`, this.getAuthHeaders());
  }
  createSupplier(supplierData) {
    console.log("Creating supplier:", supplierData);
    return this.http.post(`${this.apiUrl}/inventory/suppliers`, supplierData, this.getAuthHeaders());
  }
  updateSupplier(id, supplierData) {
    console.log("Updating supplier:", id, supplierData);
    return this.http.put(`${this.apiUrl}/inventory/suppliers/${id}`, supplierData, this.getAuthHeaders());
  }
  deleteSupplier(id) {
    console.log("Deleting supplier:", id);
    return this.http.delete(`${this.apiUrl}/inventory/suppliers/${id}`, this.getAuthHeaders());
  }
  bulkDeleteSuppliers(supplierIds) {
    console.log("Bulk deleting suppliers:", supplierIds);
    return this.http.post(`${this.apiUrl}/inventory/suppliers/bulk-delete`, { supplier_ids: supplierIds }, this.getAuthHeaders());
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
//# sourceMappingURL=chunk-ZXGY5AOE.js.map
