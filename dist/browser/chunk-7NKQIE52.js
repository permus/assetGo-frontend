import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SCVX3V3B.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  toastsSubject = new BehaviorSubject([]);
  toasts$ = this.toastsSubject.asObservable();
  /**
   * Show a success toast
   */
  success(message, duration = 5e3) {
    this.show("success", message, duration);
  }
  /**
   * Show an error toast
   */
  error(message, duration = 7e3) {
    this.show("error", message, duration);
  }
  /**
   * Show a warning toast
   */
  warning(message, duration = 6e3) {
    this.show("warning", message, duration);
  }
  /**
   * Show an info toast
   */
  info(message, duration = 5e3) {
    this.show("info", message, duration);
  }
  /**
   * Show a toast notification
   */
  show(type, message, duration) {
    const toast = {
      id: this.generateId(),
      type,
      message,
      duration
    };
    const current = this.toastsSubject.value;
    this.toastsSubject.next([...current, toast]);
    if (duration > 0) {
      setTimeout(() => {
        this.remove(toast.id);
      }, duration);
    }
  }
  /**
   * Remove a specific toast
   */
  remove(id) {
    const current = this.toastsSubject.value;
    this.toastsSubject.next(current.filter((t) => t.id !== id));
  }
  /**
   * Clear all toasts
   */
  clear() {
    this.toastsSubject.next([]);
  }
  /**
   * Generate unique ID for toast
   */
  generateId() {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-7NKQIE52.js.map
