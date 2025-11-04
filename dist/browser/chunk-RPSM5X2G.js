import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  HttpClient
} from "./chunk-ENJBTPXH.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-SCVX3V3B.js";

// src/app/settings/settings.service.ts
var SettingsService = class _SettingsService {
  http = inject(HttpClient);
  base = environment.apiUrl;
  // Stream broadcasting module enablement state
  modulesEnabled$ = new BehaviorSubject({});
  modulesLoaded = false;
  modulesLoading = false;
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
    if (this.modulesLoading) {
      return this.modulesEnabled$.asObservable().pipe(map(() => ({ success: true, data: { modules: [] } })));
    }
    this.modulesLoading = true;
    return this.http.get(`${this.base}/settings/modules`).pipe(tap((res) => {
      this.pushModulesEnabled(res?.data?.modules || []);
      this.modulesLoaded = true;
      this.modulesLoading = false;
    }));
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
    if (!this.modulesLoaded && !this.modulesLoading) {
      const currentValue = this.modulesEnabled$.value;
      if (Object.keys(currentValue).length === 0) {
        this.modulesLoading = true;
        this.listModules().subscribe({
          next: () => {
            this.modulesLoaded = true;
            this.modulesLoading = false;
          },
          error: () => {
            this.modulesLoading = false;
          }
        });
      } else {
        this.modulesLoaded = true;
      }
    }
    return this.modulesEnabled$.asObservable();
  }
  refreshModulesEnabled() {
    this.modulesLoaded = false;
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
  refreshing = false;
  currencySymbols = {
    "USD": "$",
    "AED": "\u062F.\u0625"
  };
  // Load from server and broadcast
  refreshFromServer() {
    if (this.refreshing) {
      return this.currency$.asObservable().pipe(map((code) => code));
    }
    this.refreshing = true;
    return this.settings.getCompany().pipe(map((res) => res?.data?.company?.currency || "USD"), tap((code) => {
      this.currency$.next(code);
      this.refreshing = false;
    }));
  }
  get$() {
    return this.currency$.asObservable();
  }
  getCurrent() {
    return this.currency$.getValue();
  }
  getSymbol() {
    const code = this.getCurrent();
    return this.currencySymbols[code] || code;
  }
  // Helper to format amounts consistently
  format(amount) {
    const num = Number(amount ?? 0);
    if (!isFinite(num))
      return `${this.getSymbol()}0.00`;
    return `${this.getSymbol()}${num.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
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
//# sourceMappingURL=chunk-RPSM5X2G.js.map
