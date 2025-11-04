import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  HttpClient
} from "./chunk-ENJBTPXH.js";
import {
  BehaviorSubject,
  Injectable,
  Observable,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-SCVX3V3B.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/services/preferences.service.ts
var PreferencesService = class _PreferencesService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  preferencesSubject = new BehaviorSubject({
    // Defaults
    email_notifications: true,
    push_notifications: true,
    maintenance_alerts: true,
    work_order_updates: true,
    dashboard_layout: "grid",
    items_per_page: 20,
    auto_refresh: false,
    compact_view: false,
    show_avatars: true,
    dark_mode: false
  });
  preferences$ = this.preferencesSubject.asObservable();
  constructor() {
    this.loadPreferences();
  }
  /**
   * Load preferences from localStorage and apply to app
   */
  loadPreferences() {
    const stored = localStorage.getItem("app.preferences");
    if (stored) {
      try {
        const prefs = JSON.parse(stored);
        this.preferencesSubject.next(__spreadValues(__spreadValues({}, this.preferencesSubject.value), prefs));
        this.applyPreferences(prefs);
      } catch (error) {
        console.error("Failed to load preferences:", error);
      }
    }
  }
  /**
   * Get current preferences
   */
  getPreferences() {
    return this.preferencesSubject.value;
  }
  /**
   * Update preferences
   */
  updatePreferences(prefs) {
    const updated = __spreadValues(__spreadValues({}, this.preferencesSubject.value), prefs);
    this.preferencesSubject.next(updated);
    localStorage.setItem("app.preferences", JSON.stringify(updated));
    this.applyPreferences(updated);
  }
  /**
   * Apply preferences to the application
   */
  applyPreferences(prefs) {
    if (prefs.dark_mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (prefs.compact_view) {
      document.documentElement.classList.add("compact-mode");
    } else {
      document.documentElement.classList.remove("compact-mode");
    }
    if (prefs.rtl) {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }
  /**
   * Get specific preference value
   */
  get(key) {
    return this.preferencesSubject.value[key];
  }
  /**
   * Set specific preference value
   */
  set(key, value) {
    const updated = __spreadProps(__spreadValues({}, this.preferencesSubject.value), { [key]: value });
    this.updatePreferences(updated);
  }
  syncing = false;
  /**
   * Sync preferences from backend
   */
  syncFromBackend() {
    if (this.syncing) {
      return new Observable((observer) => {
        observer.next({ success: true, data: this.preferencesSubject.value });
        observer.complete();
      });
    }
    this.syncing = true;
    return this.http.get(`${this.apiUrl}/settings/preferences`).pipe(tap(() => {
      this.syncing = false;
    }));
  }
  /**
   * Save preferences to backend
   */
  saveToBackend(prefs) {
    return this.http.put(`${this.apiUrl}/settings/preferences`, prefs);
  }
  static \u0275fac = function PreferencesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreferencesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PreferencesService, factory: _PreferencesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreferencesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  PreferencesService
};
//# sourceMappingURL=chunk-3QBMOR5J.js.map
