import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  HttpClient
} from "./chunk-ENJBTPXH.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable
} from "./chunk-SCVX3V3B.js";

// src/app/core/services/meta-work-orders.service.ts
var MetaWorkOrdersService = class _MetaWorkOrdersService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/meta/work-orders`;
  status$;
  priorities$;
  categories$;
  getStatus() {
    if (!this.status$) {
      this.status$ = this.http.get(`${this.base}/status`).pipe(map((res) => Array.isArray(res) ? res : res?.data ?? []), shareReplay({ bufferSize: 1, refCount: true }));
    }
    return this.status$;
  }
  // Helper to find a status id by slug
  getStatusIdBySlug(slug) {
    return this.getStatus().pipe(map((items) => {
      const found = items.find((s) => s.slug === slug);
      return found ? found.id : null;
    }));
  }
  getPriorities() {
    if (!this.priorities$) {
      this.priorities$ = this.http.get(`${this.base}/priorities`).pipe(map((res) => Array.isArray(res) ? res : res?.data ?? []), shareReplay({ bufferSize: 1, refCount: true }));
    }
    return this.priorities$;
  }
  getCategories() {
    if (!this.categories$) {
      this.categories$ = this.http.get(`${this.base}/categories`).pipe(map((res) => Array.isArray(res) ? res : res?.data ?? []), shareReplay({ bufferSize: 1, refCount: true }));
    }
    return this.categories$;
  }
  // Clear cache methods for when data needs to be refreshed
  clearStatusCache() {
    this.status$ = void 0;
  }
  clearPrioritiesCache() {
    this.priorities$ = void 0;
  }
  clearCategoriesCache() {
    this.categories$ = void 0;
  }
  clearAllCache() {
    this.clearStatusCache();
    this.clearPrioritiesCache();
    this.clearCategoriesCache();
  }
  static \u0275fac = function MetaWorkOrdersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetaWorkOrdersService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MetaWorkOrdersService, factory: _MetaWorkOrdersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetaWorkOrdersService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  MetaWorkOrdersService
};
//# sourceMappingURL=chunk-5LL6FNGY.js.map
