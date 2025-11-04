import {
  AuthService
} from "./chunk-BGMQUXYP.js";
import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  HttpClient
} from "./chunk-ENJBTPXH.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SCVX3V3B.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/roles/services/role.service.ts
var RoleService = class _RoleService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/roles`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return {
      headers: __spreadValues({
        "Content-Type": "application/json"
      }, token ? { "Authorization": `Bearer ${token}` } : {})
    };
  }
  // Get all roles
  getRoles() {
    return this.http.get(this.apiUrl, this.getAuthHeaders());
  }
  // Get a specific role
  getRole(id) {
    return this.http.get(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Create a new role
  createRole(roleData) {
    return this.http.post(this.apiUrl, roleData, this.getAuthHeaders());
  }
  // Update a role
  updateRole(id, roleData) {
    return this.http.put(`${this.apiUrl}/${id}`, roleData, this.getAuthHeaders());
  }
  // Delete a role
  deleteRole(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Get available permissions
  getAvailablePermissions() {
    return this.http.get(`${this.apiUrl}/available-permissions`, this.getAuthHeaders());
  }
  // Assign role to user
  assignRoleToUser(data) {
    return this.http.post(`${this.apiUrl}/assign-to-user`, data, this.getAuthHeaders());
  }
  // Remove role from user
  removeRoleFromUser(data) {
    return this.http.post(`${this.apiUrl}/remove-from-user`, data, this.getAuthHeaders());
  }
  static \u0275fac = function RoleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleService, factory: _RoleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  RoleService
};
//# sourceMappingURL=chunk-3TF5MW7O.js.map
