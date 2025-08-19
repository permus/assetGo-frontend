import {
  AuthService
} from "./chunk-GTHU662S.js";
import {
  environment
} from "./chunk-5YESG6NV.js";
import {
  HttpClient
} from "./chunk-Y54HQZIO.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RN3O7ENP.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/teams/services/team.service.ts
var TeamService = class _TeamService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/teams`;
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
  // Get all team members
  getTeamMembers() {
    return this.http.get(this.apiUrl, this.getAuthHeaders());
  }
  // Get a specific team member
  getTeamMember(id) {
    return this.http.get(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Create a new team member (invite)
  createTeamMember(teamMemberData) {
    return this.http.post(this.apiUrl, teamMemberData, this.getAuthHeaders());
  }
  // Update a team member
  updateTeamMember(id, teamMemberData) {
    return this.http.put(`${this.apiUrl}/${id}`, teamMemberData, this.getAuthHeaders());
  }
  // Delete a team member
  deleteTeamMember(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Resend invitation
  resendInvitation(id) {
    return this.http.post(`${this.apiUrl}/${id}/resend-invitation`, {}, this.getAuthHeaders());
  }
  // Get team member statistics
  getTeamMemberStatistics() {
    return this.http.get(`${this.apiUrl}/statistics`, this.getAuthHeaders());
  }
  // Get available roles for team members
  getAvailableRoles() {
    return this.http.get(`${this.apiUrl}/available-roles`, this.getAuthHeaders());
  }
  static \u0275fac = function TeamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamService, factory: _TeamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  TeamService
};
//# sourceMappingURL=chunk-BBU6RFGY.js.map
