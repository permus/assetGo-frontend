import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  HttpClient
} from "./chunk-ENJBTPXH.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SCVX3V3B.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  apiUrl = environment.apiUrl;
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  moduleAccessSubject = new BehaviorSubject({});
  moduleAccess$ = this.moduleAccessSubject.asObservable();
  permissionsSubject = new BehaviorSubject({});
  permissions$ = this.permissionsSubject.asObservable();
  servicesInitialized = false;
  constructor(http) {
    this.http = http;
    this.loadUserFromStorage();
  }
  getAuthHeaders() {
    const token = this.getToken();
    return {
      headers: __spreadValues({
        "Content-Type": "application/json"
      }, token ? { "Authorization": `Bearer ${token}` } : {})
    };
  }
  register(data) {
    return this.http.post(`${this.apiUrl}/register`, data, this.getAuthHeaders());
  }
  login(data) {
    return this.http.post(`${this.apiUrl}/login`, data, { headers: {
      "Content-Type": "application/json"
    } }).pipe(tap((response) => {
      if (response.success && response.data?.token) {
        this.setSession(response.data.token, response.data.user);
        if (response.data?.module_access) {
          this.moduleAccessSubject.next(response.data.module_access);
          localStorage.setItem("module_access", JSON.stringify(response.data.module_access));
        }
        if (response.data?.permissions) {
          this.permissionsSubject.next(response.data.permissions);
          localStorage.setItem("permissions", JSON.stringify(response.data.permissions));
        }
      }
    }));
  }
  forgotPassword(data) {
    return this.http.post(`${this.apiUrl}/forgot-password`, data, this.getAuthHeaders());
  }
  resetPassword(data) {
    return this.http.post(`${this.apiUrl}/reset-password`, data, this.getAuthHeaders());
  }
  verifyEmail(id, hash) {
    return this.http.get(`${this.apiUrl}/email/verify/${id}/${hash}`, this.getAuthHeaders());
  }
  resendVerification(data) {
    return this.http.post(`${this.apiUrl}/email/resend`, data || {}, this.getAuthHeaders());
  }
  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`, this.getAuthHeaders());
  }
  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}, this.getAuthHeaders()).pipe(tap(() => {
      this.clearSession();
    }));
  }
  logoutAll() {
    return this.http.post(`${this.apiUrl}/logout-all`, {}).pipe(tap(() => {
      this.clearSession();
    }));
  }
  isAuthenticated() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  getModuleAccess() {
    return this.moduleAccessSubject.value;
  }
  getPermissions() {
    return this.permissionsSubject.value;
  }
  hasModuleAccess(moduleKey) {
    const moduleAccess = this.getModuleAccess();
    return moduleAccess[moduleKey] === true;
  }
  hasPermission(module, action) {
    const permissions = this.getPermissions();
    return permissions[module]?.[action] === true;
  }
  setSession(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  clearSession() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("module_access");
    localStorage.removeItem("permissions");
    this.currentUserSubject.next(null);
    this.moduleAccessSubject.next({});
    this.permissionsSubject.next({});
    this.servicesInitialized = false;
  }
  loadUserFromStorage() {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    const moduleAccessStr = localStorage.getItem("module_access");
    const permissionsStr = localStorage.getItem("permissions");
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.currentUserSubject.next(user);
        if (moduleAccessStr) {
          const moduleAccess = JSON.parse(moduleAccessStr);
          this.moduleAccessSubject.next(moduleAccess);
        }
        if (permissionsStr) {
          const permissions = JSON.parse(permissionsStr);
          this.permissionsSubject.next(permissions);
        }
      } catch (error) {
        this.clearSession();
      }
    }
  }
  /**
   * Update the current user data (used when profile is updated)
   */
  updateCurrentUser(user) {
    this.currentUserSubject.next(user);
    localStorage.setItem("user", JSON.stringify(user));
  }
  /**
   * Initialize app services after login (currency, preferences, modules)
   * This is called automatically after successful login
   * Services are injected from the component that calls this
   */
  initializeAppServices(currencyService, preferencesService, settingsService) {
    if (this.servicesInitialized) {
      return;
    }
    this.servicesInitialized = true;
    if (currencyService) {
      currencyService.refreshFromServer().subscribe({
        error: () => {
        }
      });
    }
    if (preferencesService) {
      preferencesService.syncFromBackend().subscribe({
        next: (response) => {
          if (response.success && response.data) {
            preferencesService.updatePreferences(response.data);
          }
        },
        error: () => {
        }
      });
    }
    if (settingsService) {
      settingsService.listModules().subscribe({
        error: () => {
        }
      });
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-BGMQUXYP.js.map
