import {
  environment
} from "./chunk-B4WPIQPD.js";
import {
  HttpClient
} from "./chunk-MMJF4Y5E.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YUR5IGOK.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  apiUrl = environment.apiUrl;
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
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
  setSession(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  clearSession() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.currentUserSubject.next(null);
  }
  loadUserFromStorage() {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.currentUserSubject.next(user);
      } catch (error) {
        this.clearSession();
      }
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
//# sourceMappingURL=chunk-NM3PRJXP.js.map
