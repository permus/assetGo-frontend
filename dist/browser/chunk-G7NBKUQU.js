import {
  environment
} from "./chunk-B4WPIQPD.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-MMJF4Y5E.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YUR5IGOK.js";

// src/app/maintenance/maintenance.service.ts
var MaintenanceService = class _MaintenanceService {
  http;
  base = `${environment.apiUrl}/maintenance`;
  constructor(http) {
    this.http = http;
  }
  listPlans(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((k) => {
        if (params[k] !== void 0 && params[k] !== null) {
          httpParams = httpParams.set(k, String(params[k]));
        }
      });
    }
    return this.http.get(`${this.base}/plans`, { params: httpParams });
  }
  getPlan(id) {
    return this.http.get(`${this.base}/plans/${id}`);
  }
  createPlan(payload) {
    return this.http.post(`${this.base}/plans`, payload);
  }
  updatePlan(id, payload) {
    return this.http.put(`${this.base}/plans/${id}`, payload);
  }
  deletePlan(id) {
    return this.http.delete(`${this.base}/plans/${id}`);
  }
  listSchedules(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((k) => {
        if (params[k] !== void 0 && params[k] !== null) {
          httpParams = httpParams.set(k, String(params[k]));
        }
      });
    }
    return this.http.get(`${this.base}/schedules`, { params: httpParams });
  }
  createSchedule(payload) {
    return this.http.post(`${this.base}/schedules`, payload);
  }
  getSchedule(id) {
    return this.http.get(`${this.base}/schedules/${id}`);
  }
  updateSchedule(id, payload) {
    return this.http.put(`${this.base}/schedules/${id}`, payload);
  }
  deleteSchedule(id) {
    return this.http.delete(`${this.base}/schedules/${id}`);
  }
  static \u0275fac = function MaintenanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MaintenanceService, factory: _MaintenanceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MaintenanceService
};
//# sourceMappingURL=chunk-G7NBKUQU.js.map
