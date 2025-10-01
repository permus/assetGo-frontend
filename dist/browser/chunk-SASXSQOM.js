import {
  AuthService
} from "./chunk-NM3PRJXP.js";
import {
  environment
} from "./chunk-B4WPIQPD.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-MMJF4Y5E.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YUR5IGOK.js";
import {
  __spreadProps,
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
  // Get paginated team members
  getTeamMembers(page = 1, perPage = 15, opts) {
    const token = this.authService.getToken();
    const headers = __spreadValues({
      "Content-Type": "application/json"
    }, token ? { "Authorization": `Bearer ${token}` } : {});
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("per_page", String(perPage));
    if (opts?.search)
      params.set("search", opts.search);
    if (opts?.role_id !== void 0)
      params.set("role_id", String(opts.role_id));
    if (opts?.role_name)
      params.set("role_name", opts.role_name);
    if (opts?.status)
      params.set("status", opts.status);
    if (opts?.type)
      params.set("type", opts.type);
    if (opts?.sort_by)
      params.set("sort_by", opts.sort_by);
    if (opts?.sort_dir)
      params.set("sort_dir", opts.sort_dir);
    const url = `${this.apiUrl}?${params.toString()}`;
    return this.http.get(url, { headers });
  }
  // Convenience: get flat list of team members for selects
  getTeamMembersFlat(perPage = 1e3) {
    return this.getTeamMembers(1, perPage).pipe(map((res) => res?.data?.teams ?? []));
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
  // Get team analytics
  getTeamAnalytics(params) {
    const token = this.authService.getToken();
    const headers = __spreadValues({
      "Content-Type": "application/json"
    }, token ? { "Authorization": `Bearer ${token}` } : {});
    const query = new URLSearchParams();
    if (params?.date_range)
      query.set("date_range", String(params.date_range));
    const url = `${this.apiUrl}/analytics${query.toString() ? `?${query.toString()}` : ""}`;
    return this.http.get(url, { headers });
  }
  // Get available roles for team members
  getAvailableRoles() {
    return this.http.get(`${this.apiUrl}/available-roles`, this.getAuthHeaders());
  }
  // Team management methods
  getTeam(id) {
    return this.http.get(`${this.apiUrl}/teams/${id}`, this.getAuthHeaders());
  }
  createTeam(teamData) {
    return this.http.post(`${this.apiUrl}/teams`, teamData, this.getAuthHeaders());
  }
  updateTeam(id, teamData) {
    return this.http.put(`${this.apiUrl}/teams/${id}`, teamData, this.getAuthHeaders());
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

// src/app/work-orders/services/work-order.service.ts
var WorkOrderService = class _WorkOrderService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/work-orders`;
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
  // Comments API
  getComments(workOrderId) {
    return this.http.get(`${this.apiUrl}/${workOrderId}/comments`, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // Assignments API
  getAssignments(workOrderId) {
    return this.http.get(`${this.apiUrl}/${workOrderId}/assignments`, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  setAssignments(workOrderId, userIds) {
    return this.http.post(`${this.apiUrl}/${workOrderId}/assignments`, { user_ids: userIds }, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  deleteAssignment(workOrderId, assignmentId) {
    return this.http.delete(`${this.apiUrl}/${workOrderId}/assignments/${assignmentId}`, this.getAuthHeaders());
  }
  // Update a single assignment's status
  updateAssignmentStatus(workOrderId, assignmentId, status) {
    return this.http.put(`${this.apiUrl}/${workOrderId}/assignments/${assignmentId}`, { status }, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // Assign a work order to a user
  assignWorkOrder(workOrderId, assignmentData) {
    return this.http.post(`${this.apiUrl}/${workOrderId}/assign`, assignmentData, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // Parts API
  getParts(workOrderId) {
    return this.http.get(`${this.apiUrl}/${workOrderId}/parts`, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  addParts(workOrderId, items) {
    return this.http.post(`${this.apiUrl}/${workOrderId}/parts`, { items }, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  updatePart(workOrderId, partItemId, payload) {
    return this.http.put(`${this.apiUrl}/${workOrderId}/parts/${partItemId}`, payload, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  deletePart(workOrderId, partItemId) {
    return this.http.delete(`${this.apiUrl}/${workOrderId}/parts/${partItemId}`, this.getAuthHeaders());
  }
  addComment(workOrderId, comment, meta) {
    return this.http.post(`${this.apiUrl}/${workOrderId}/comments`, { comment, meta }, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  deleteComment(workOrderId, commentId) {
    return this.http.delete(`${this.apiUrl}/${workOrderId}/comments/${commentId}`, this.getAuthHeaders());
  }
  // Enhanced: Get all work orders with advanced filtering and search
  getWorkOrders(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== void 0 && value !== null && value !== "") {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get(this.apiUrl, __spreadProps(__spreadValues({}, this.getAuthHeaders()), { params: httpParams }));
  }
  // Get a single work order by ID
  getWorkOrderById(id) {
    return this.http.get(`${this.apiUrl}/${id}`, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // Update status by status_id
  updateWorkOrderStatus(id, status_id) {
    return this.http.post(`${this.apiUrl}/${id}/status`, { status_id }, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // Create a new work order
  createWorkOrder(workOrder) {
    return this.http.post(this.apiUrl, workOrder, this.getAuthHeaders());
  }
  // Update an existing work order
  updateWorkOrder(id, workOrder) {
    return this.http.put(`${this.apiUrl}/${id}`, workOrder, this.getAuthHeaders());
  }
  // Delete a work order
  deleteWorkOrder(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Get comprehensive work order analytics
  getWorkOrderAnalytics() {
    return this.http.get(`${this.apiUrl}/analytics`, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // Get basic work order statistics
  getWorkOrderStatistics() {
    return this.http.get(`${this.apiUrl}/statistics`, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // Get work order count with filters
  getWorkOrderCount(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== void 0 && value !== null && value !== "") {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/count`, __spreadProps(__spreadValues({}, this.getAuthHeaders()), { params: httpParams })).pipe(map((res) => res.data));
  }
  // Get available filter options
  getWorkOrderFilters() {
    return this.http.get(`${this.apiUrl}/filters`, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // History API
  getWorkOrderHistory(id) {
    return this.http.get(`${this.apiUrl}/${id}/history`, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // Time tracking API
  getTimeLogs(workOrderId) {
    return this.http.get(`${this.apiUrl}/${workOrderId}/time-logs`, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  startTimer(workOrderId, payload) {
    return this.http.post(`${this.apiUrl}/${workOrderId}/time-logs/start`, payload, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  stopTimer(workOrderId) {
    return this.http.post(`${this.apiUrl}/${workOrderId}/time-logs/stop`, {}, this.getAuthHeaders()).pipe(map((res) => res.data));
  }
  // Legacy: Get work order statistics (kept for backward compatibility)
  // Note: This method is deprecated, use getWorkOrderStatistics() instead
  getWorkOrderStats() {
    return this.http.get(`${this.apiUrl}/statistics`, this.getAuthHeaders()).pipe(map((stats) => ({
      total: Object.values(stats.status_counts || {}).reduce((sum, count) => sum + count, 0),
      open: stats.status_counts?.["open"] || 0,
      inProgress: stats.status_counts?.["in-progress"] || 0,
      completed: stats.status_counts?.["completed"] || 0,
      critical: stats.priority_counts?.["critical"] || 0
    })));
  }
  static \u0275fac = function WorkOrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkOrderService, factory: _WorkOrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  TeamService,
  WorkOrderService
};
//# sourceMappingURL=chunk-SASXSQOM.js.map
