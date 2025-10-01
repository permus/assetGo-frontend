import {
  environment
} from "./chunk-B4WPIQPD.js";
import {
  HttpClient
} from "./chunk-MMJF4Y5E.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-YUR5IGOK.js";

// src/app/settings/settings.service.ts
var SettingsService = class _SettingsService {
  http = inject(HttpClient);
  base = environment.apiUrl;
  // Stream broadcasting module enablement state
  modulesEnabled$ = new BehaviorSubject({});
  // Company
  getCompany() {
    return this.http.get(`${this.base}/company`);
  }
  updateCompany(payload) {
    return this.http.put(`${this.base}/company`, payload);
  }
  updateCurrency(currency) {
    return this.http.put(`${this.base}/settings/currency`, { currency });
  }
  uploadCompanyLogo(file) {
    const fd = new FormData();
    fd.append("logo", file);
    return this.http.post(`${this.base}/settings/company/logo`, fd);
  }
  // Modules
  listModules() {
    return this.http.get(`${this.base}/settings/modules`).pipe(tap((res) => this.pushModulesEnabled(res?.data?.modules || [])));
  }
  enableModule(moduleId) {
    return this.http.post(`${this.base}/settings/modules/${moduleId}/enable`, {}).pipe(tap(() => this.refreshModulesEnabled().subscribe()));
  }
  disableModule(moduleId) {
    return this.http.post(`${this.base}/settings/modules/${moduleId}/disable`, {}).pipe(tap(() => this.refreshModulesEnabled().subscribe()));
  }
  // Preferences
  getPreferences() {
    return this.http.get(`${this.base}/settings/preferences`);
  }
  updatePreferences(prefs) {
    return this.http.put(`${this.base}/settings/preferences`, prefs);
  }
  // ----- Modules enabled stream helpers -----
  getModulesEnabled$() {
    return this.modulesEnabled$.asObservable();
  }
  refreshModulesEnabled() {
    return this.listModules();
  }
  pushModulesEnabled(list) {
    const map2 = {};
    for (const m of list)
      map2[m.key] = !!m.is_enabled;
    this.modulesEnabled$.next(map2);
  }
  static \u0275fac = function SettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/currency.service.ts
var CurrencyService = class _CurrencyService {
  settings = inject(SettingsService);
  currency$ = new BehaviorSubject("USD");
  // Load from server and broadcast
  refreshFromServer() {
    return this.settings.getCompany().pipe(map((res) => res?.data?.company?.currency || "USD"), tap((code) => this.currency$.next(code)));
  }
  get$() {
    return this.currency$.asObservable();
  }
  getCurrent() {
    return this.currency$.getValue();
  }
  // Helper to format amounts consistently
  format(amount) {
    const num = Number(amount ?? 0);
    if (!isFinite(num))
      return `${this.getCurrent()} 0.00`;
    return `${this.getCurrent()} ${num.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  static \u0275fac = function CurrencyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrencyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CurrencyService, factory: _CurrencyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SettingsService,
  CurrencyService
};
//# sourceMappingURL=chunk-FTDOMACV.js.map
