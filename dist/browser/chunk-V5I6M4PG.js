import {
  AuthService
} from "./chunk-5RUWZRCY.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-RCYJD2NT.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-WX4YBHDT.js";
import {
  environment
} from "./chunk-5YESG6NV.js";
import {
  HttpClient,
  HttpClientModule,
  HttpParams
} from "./chunk-3DQDTIJW.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  Subject,
  Subscription,
  ViewChild,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-E3IEKUEF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

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
    return this.http.get(`${this.apiUrl}/${id}`, this.getAuthHeaders());
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
    return this.http.get(`${this.apiUrl}/analytics`, this.getAuthHeaders());
  }
  // Get basic work order statistics
  getWorkOrderStatistics() {
    return this.http.get(`${this.apiUrl}/statistics`, this.getAuthHeaders());
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
    return this.http.get(`${this.apiUrl}/count`, __spreadProps(__spreadValues({}, this.getAuthHeaders()), { params: httpParams }));
  }
  // Get available filter options
  getWorkOrderFilters() {
    return this.http.get(`${this.apiUrl}/filters`, this.getAuthHeaders());
  }
  // Legacy: Get work order statistics (kept for backward compatibility)
  getWorkOrderStats() {
    return this.http.get(`${this.apiUrl}/count`, this.getAuthHeaders());
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

// src/app/work-orders/components/work-order-card/work-order-card.component.ts
function WorkOrderCardComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.workOrder.description, " ");
  }
}
var WorkOrderCardComponent = class _WorkOrderCardComponent {
  router;
  workOrder;
  constructor(router) {
    this.router = router;
  }
  getStatusLabel(status) {
    const statusMap = {
      "open": "Open",
      "in-progress": "In Progress",
      "completed": "Completed",
      "cancelled": "Cancelled"
    };
    return statusMap[status] || status;
  }
  getPriorityLabel(priority) {
    const priorityMap = {
      "low": "Low",
      "medium": "Medium",
      "high": "High",
      "critical": "Critical"
    };
    return priorityMap[priority] || priority;
  }
  getAssigneeName() {
    if (this.workOrder.assigned_to) {
      return "Assigned User";
    }
    return "Unassigned";
  }
  getAssetName() {
    if (this.workOrder.asset) {
      return this.workOrder.asset.name || "Asset";
    }
    return "No Asset";
  }
  getLocationName() {
    if (this.workOrder.location) {
      return this.workOrder.location.name || "Location";
    }
    return "No Location";
  }
  getCreatedBy() {
    if (this.workOrder.created_by) {
      return `${this.workOrder.created_by.first_name} ${this.workOrder.created_by.last_name}`;
    }
    return "Unknown";
  }
  viewDetails() {
    this.router.navigate(["/work-orders", this.workOrder.id]);
  }
  static \u0275fac = function WorkOrderCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderCardComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderCardComponent, selectors: [["app-work-order-card"]], inputs: { workOrder: "workOrder" }, standalone: false, decls: 68, vars: 20, consts: [[1, "work-order-card"], [1, "card-header"], [1, "title-section"], [1, "icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "title"], [1, "badges"], [1, "badge", "status-badge", 3, "ngClass"], [1, "badge", "priority-badge", 3, "ngClass"], [1, "card-content"], ["class", "description", 4, "ngIf"], [1, "details", "grid", "grid-cols-2", "gap-1", "sm:gap-2", "text-xs"], [1, "detail-item"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon", "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "label"], [1, "value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "card-footer"], [1, "view-button", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "description"]], template: function WorkOrderCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h3", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8)(10, "span", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275template(15, WorkOrderCardComponent_p_15_Template, 2, 1, "p", 12);
      \u0275\u0275elementStart(16, "div", 13)(17, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 15);
      \u0275\u0275element(19, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "span", 17);
      \u0275\u0275text(21, "Assignee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 18);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 15);
      \u0275\u0275element(26, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "span", 17);
      \u0275\u0275text(28, "Asset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 18);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 15);
      \u0275\u0275element(33, "path", 20)(34, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "span", 17);
      \u0275\u0275text(36, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 18);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 15);
      \u0275\u0275element(41, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "span", 17);
      \u0275\u0275text(43, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 18);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 15);
      \u0275\u0275element(49, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "span", 17);
      \u0275\u0275text(51, "Created");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 18);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 15);
      \u0275\u0275element(57, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "span", 17);
      \u0275\u0275text(59, "Created By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 18);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "div", 24)(63, "button", 25);
      \u0275\u0275listener("click", function WorkOrderCardComponent_Template_button_click_63_listener() {
        return ctx.viewDetails();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 26);
      \u0275\u0275element(65, "path", 6)(66, "path", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(67, " View Details ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("list-view", false);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.workOrder.title);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", "status-" + ctx.workOrder.status);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusLabel(ctx.workOrder.status), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", "priority-" + ctx.workOrder.priority);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getPriorityLabel(ctx.workOrder.priority), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.workOrder.description);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.getAssigneeName());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.getAssetName());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.getLocationName());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.workOrder.due_date ? \u0275\u0275pipeBind2(46, 14, ctx.workOrder.due_date, "MMM d, y") : "Not set");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 17, ctx.workOrder.created_at, "MMM d, y"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.getCreatedBy());
    }
  }, dependencies: [NgClass, NgIf, DatePipe], styles: ["\n\n.work-order-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n}\n.work-order-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  flex-shrink: 0;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.4;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge.status-open[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge.status-in-progress[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge.status-completed[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge.priority-low[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge.priority-medium[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge.priority-high[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge.priority-urgent[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.75rem;\n  width: 16px;\n  text-align: center;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  min-width: 60px;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 1rem;\n  border-top: 1px solid #f3f4f6;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  text-align: center;\n  flex-shrink: 0;\n}\n.list-view[_ngcontent-%COMP%]   .work-order-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  min-height: auto;\n}\n.list-view[_ngcontent-%COMP%]   .work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  flex: 1;\n}\n.list-view[_ngcontent-%COMP%]   .work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.list-view[_ngcontent-%COMP%]   .work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  border-top: none;\n  flex-shrink: 0;\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .work-order-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n    min-height: 180px;\n  }\n  .work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .list-view[_ngcontent-%COMP%]   .work-order-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    min-height: auto;\n  }\n  .list-view[_ngcontent-%COMP%]   .work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n    text-align: left;\n    width: 100%;\n    border-top: 1px solid #f3f4f6;\n    padding-top: 1rem;\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=work-order-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderCardComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-card", standalone: false, template: `<div class="work-order-card" [class.list-view]="false">\r
  <div class="card-header">\r
    <div class="title-section">\r
      <div class="icon">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="title">{{ workOrder.title }}</h3>\r
    </div>\r
    \r
    <div class="badges">\r
      <span class="badge status-badge" [ngClass]="'status-' + workOrder.status">\r
        {{ getStatusLabel(workOrder.status) }}\r
      </span>\r
      <span class="badge priority-badge" [ngClass]="'priority-' + workOrder.priority">\r
        {{ getPriorityLabel(workOrder.priority) }}\r
      </span>\r
    </div>\r
  </div>\r
\r
  <div class="card-content">\r
    <p class="description" *ngIf="workOrder.description">\r
      {{ workOrder.description }}\r
    </p>\r
    \r
    <div class="details grid grid-cols-2 gap-1 sm:gap-2 text-xs">\r
      <div class="detail-item">\r
        <svg class="icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
        </svg>\r
        <span class="label">Assignee</span>\r
        <span class="value">{{ getAssigneeName() }}</span>\r
      </div>\r
      \r
      <div class="detail-item">\r
        <svg class="icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r
        </svg>\r
        <span class="label">Asset</span>\r
        <span class="value">{{ getAssetName() }}</span>\r
      </div>\r
      \r
      <div class="detail-item">\r
        <svg class="icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
        </svg>\r
        <span class="label">Location</span>\r
        <span class="value">{{ getLocationName() }}</span>\r
      </div>\r
      \r
      <div class="detail-item">\r
        <svg class="icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
        </svg>\r
        <span class="label">Due Date</span>\r
        <span class="value">{{ workOrder.due_date ? (workOrder.due_date | date:'MMM d, y') : 'Not set' }}</span>\r
      </div>\r
      \r
      <div class="detail-item">\r
        <svg class="icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
        </svg>\r
        <span class="label">Created</span>\r
        <span class="value">{{ workOrder.created_at | date:'MMM d, y' }}</span>\r
      </div>\r
      \r
      <div class="detail-item">\r
        <svg class="icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
        </svg>\r
        <span class="label">Created By</span>\r
        <span class="value">{{ getCreatedBy() }}</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="card-footer">\r
    <button class="view-button" (click)="viewDetails()">\r
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
      </svg>\r
      View Details\r
    </button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/work-orders/components/work-order-card/work-order-card.component.scss */\n.work-order-card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n}\n.work-order-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.work-order-card .card-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  flex-shrink: 0;\n}\n.work-order-card .card-header .title-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n}\n.work-order-card .card-header .title-section .icon {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.work-order-card .card-header .title-section .title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.4;\n}\n.work-order-card .card-header .badges {\n  display: flex;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.work-order-card .card-header .badges .badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.work-order-card .card-header .badges .badge.status-open {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card .card-header .badges .badge.status-in-progress {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.work-order-card .card-header .badges .badge.status-completed {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.work-order-card .card-header .badges .badge.status-cancelled {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.work-order-card .card-header .badges .badge.priority-low {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.work-order-card .card-header .badges .badge.priority-medium {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.work-order-card .card-header .badges .badge.priority-high {\n  background: #fef3c7;\n  color: #d97706;\n}\n.work-order-card .card-header .badges .badge.priority-urgent {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card .card-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.work-order-card .card-content .description {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n}\n.work-order-card .card-content .details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.work-order-card .card-content .details .detail-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.work-order-card .card-content .details .detail-item .icon {\n  color: #9ca3af;\n  font-size: 0.75rem;\n  width: 16px;\n  text-align: center;\n}\n.work-order-card .card-content .details .detail-item .label {\n  font-weight: 500;\n  min-width: 60px;\n}\n.work-order-card .card-content .details .detail-item .value {\n  color: #6b7280;\n}\n.work-order-card .card-footer {\n  margin-top: auto;\n  padding-top: 1rem;\n  border-top: 1px solid #f3f4f6;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  text-align: center;\n  flex-shrink: 0;\n}\n.list-view .work-order-card {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  min-height: auto;\n}\n.list-view .work-order-card .card-header {\n  margin-bottom: 0;\n  flex: 1;\n}\n.list-view .work-order-card .card-content {\n  flex: 2;\n}\n.list-view .work-order-card .card-footer {\n  margin-top: 0;\n  padding-top: 0;\n  border-top: none;\n  flex-shrink: 0;\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .work-order-card {\n    padding: 1rem;\n    min-height: 180px;\n  }\n  .work-order-card .card-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .work-order-card .card-header .badges {\n    align-self: flex-start;\n  }\n  .work-order-card .card-content .details {\n    gap: 0.5rem;\n  }\n  .list-view .work-order-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    min-height: auto;\n  }\n  .list-view .work-order-card .card-footer {\n    text-align: left;\n    width: 100%;\n    border-top: 1px solid #f3f4f6;\n    padding-top: 1rem;\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=work-order-card.component.css.map */\n"] }]
  }], () => [{ type: Router }], { workOrder: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderCardComponent, { className: "WorkOrderCardComponent", filePath: "src/app/work-orders/components/work-order-card/work-order-card.component.ts", lineNumber: 11 });
})();

// src/app/work-orders/components/work-order-list/work-order-list.component.ts
function WorkOrderListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 5);
    \u0275\u0275element(3, "circle", 6)(4, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6, "Loading work orders...");
    \u0275\u0275elementEnd()()();
  }
}
function WorkOrderListComponent_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 23);
    \u0275\u0275element(3, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 25);
    \u0275\u0275text(5, "No work orders found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7, "Get started by creating your first work order.");
    \u0275\u0275elementEnd()()();
  }
}
function WorkOrderListComponent_div_2_div_14_app_work_order_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-work-order-card", 29);
  }
  if (rf & 2) {
    const workOrder_r3 = ctx.$implicit;
    \u0275\u0275property("workOrder", workOrder_r3);
  }
}
function WorkOrderListComponent_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, WorkOrderListComponent_div_2_div_14_app_work_order_card_1_Template, 1, 1, "app-work-order-card", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("list-view", ctx_r1.viewMode === "list")("active", ctx_r1.viewMode === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.workOrders);
  }
}
function WorkOrderListComponent_div_2_div_15_app_work_order_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-work-order-card", 29);
  }
  if (rf & 2) {
    const workOrder_r4 = ctx.$implicit;
    \u0275\u0275property("workOrder", workOrder_r4);
  }
}
function WorkOrderListComponent_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, WorkOrderListComponent_div_2_div_15_app_work_order_card_1_Template, 1, 1, "app-work-order-card", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.workOrders);
  }
}
function WorkOrderListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 9)(2, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 11);
    \u0275\u0275element(4, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 13)(7, "button", 14);
    \u0275\u0275listener("click", function WorkOrderListComponent_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewMode("grid"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 15);
    \u0275\u0275element(9, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 14);
    \u0275\u0275listener("click", function WorkOrderListComponent_div_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewMode("list"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 15);
    \u0275\u0275element(12, "path", 17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(13, WorkOrderListComponent_div_2_div_13_Template, 8, 0, "div", 18)(14, WorkOrderListComponent_div_2_div_14_Template, 2, 5, "div", 19)(15, WorkOrderListComponent_div_2_div_15_Template, 2, 3, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.workOrders.length, " work orders ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "grid");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "list");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.workOrders.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.workOrders.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.workOrders.length > 0);
  }
}
var WorkOrderListComponent = class _WorkOrderListComponent {
  workOrderService;
  workOrders = [];
  viewMode = "grid";
  isLoading = true;
  subscription = new Subscription();
  constructor(workOrderService) {
    this.workOrderService = workOrderService;
  }
  ngOnInit() {
    this.loadWorkOrders();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  loadWorkOrders() {
    this.isLoading = true;
    this.subscription.add(this.workOrderService.getWorkOrders().subscribe({
      next: (response) => {
        this.workOrders = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading work orders:", error);
        this.isLoading = false;
      }
    }));
  }
  setViewMode(mode) {
    this.viewMode = mode;
  }
  refreshWorkOrders() {
    this.loadWorkOrders();
  }
  static \u0275fac = function WorkOrderListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderListComponent)(\u0275\u0275directiveInject(WorkOrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderListComponent, selectors: [["app-work-order-list"]], standalone: false, decls: 3, vars: 2, consts: [[1, "list-section"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [1, "flex", "items-center", "justify-center", "py-8"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "ml-2", "text-gray-600"], [1, "list-header"], [1, "orders-count", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"], [1, "view-toggle"], [1, "view-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 10h16M4 14h16M4 18h16"], ["class", "empty-state", 4, "ngIf"], ["class", "work-orders-grid", 3, "list-view", "active", 4, "ngIf"], ["class", "work-orders-list", 3, "active", 4, "ngIf"], [1, "empty-state"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-gray-400", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-gray-500", "text-center"], [1, "work-orders-grid"], [3, "workOrder", 4, "ngFor", "ngForOf"], [3, "workOrder"], [1, "work-orders-list"]], template: function WorkOrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, WorkOrderListComponent_div_1_Template, 7, 0, "div", 1)(2, WorkOrderListComponent_div_2_Template, 16, 8, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [NgForOf, NgIf, WorkOrderCardComponent], styles: ["\n\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .orders-count[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #374151;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  padding: 0.25rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #2563eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-grid.list-view[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list.active[_ngcontent-%COMP%] {\n  display: flex;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-grid.active[_ngcontent-%COMP%] {\n  display: grid;\n}\n@media (max-width: 768px) {\n  .list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=work-order-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderListComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-list", standalone: false, template: `<div class="list-section">\r
  <!-- Loading State -->\r
  <div *ngIf="isLoading" class="loading-state">\r
    <div class="flex items-center justify-center py-8">\r
      <svg class="animate-spin h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
      </svg>\r
      <span class="ml-2 text-gray-600">Loading work orders...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Work Orders Content -->\r
  <div *ngIf="!isLoading">\r
    <div class="list-header">\r
      <div class="orders-count flex items-center gap-2">\r
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />\r
        </svg>\r
        {{ workOrders.length }} work orders\r
      </div>\r
\r
      <div class="view-toggle">\r
        <button\r
          class="view-btn"\r
          [class.active]="viewMode === 'grid'"\r
          (click)="setViewMode('grid')">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>\r
          </svg>\r
        </button>\r
        <button\r
          class="view-btn"\r
          [class.active]="viewMode === 'list'"\r
          (click)="setViewMode('list')">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div *ngIf="workOrders.length === 0" class="empty-state">\r
      <div class="flex flex-col items-center justify-center py-12">\r
        <svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
        </svg>\r
        <h3 class="text-lg font-medium text-gray-900 mb-2">No work orders found</h3>\r
        <p class="text-gray-500 text-center">Get started by creating your first work order.</p>\r
      </div>\r
    </div>\r
\r
    <!-- Work Orders Grid -->\r
    <div *ngIf="workOrders.length > 0" class="work-orders-grid" [class.list-view]="viewMode === 'list'" [class.active]="viewMode === 'grid'">\r
      <app-work-order-card\r
        *ngFor="let workOrder of workOrders"\r
        [workOrder]="workOrder">\r
      </app-work-order-card>\r
    </div>\r
\r
    <!-- Work Orders List -->\r
    <div *ngIf="workOrders.length > 0" class="work-orders-list" [class.active]="viewMode === 'list'">\r
      <app-work-order-card\r
        *ngFor="let workOrder of workOrders"\r
        [workOrder]="workOrder">\r
      </app-work-order-card>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/work-orders/components/work-order-list/work-order-list.component.scss */\n.list-section .list-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.list-section .list-header .orders-count {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #374151;\n}\n.list-section .list-header .view-toggle {\n  display: flex;\n  gap: 0.5rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  padding: 0.25rem;\n}\n.list-section .list-header .view-toggle .view-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n}\n.list-section .list-header .view-toggle .view-btn:hover {\n  color: #374151;\n}\n.list-section .list-header .view-toggle .view-btn.active {\n  background: white;\n  color: #2563eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.list-section .list-header .view-toggle .view-btn i {\n  font-size: 0.875rem;\n}\n.list-section .work-orders-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.list-section .work-orders-grid.list-view {\n  grid-template-columns: 1fr;\n}\n.list-section .work-orders-list {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n}\n.list-section .work-orders-list.active {\n  display: flex;\n}\n.list-section .work-orders-grid.active {\n  display: grid;\n}\n@media (max-width: 768px) {\n  .list-section .list-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .list-section .list-header .view-toggle {\n    align-self: center;\n  }\n  .list-section .work-orders-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=work-order-list.component.css.map */\n"] }]
  }], () => [{ type: WorkOrderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderListComponent, { className: "WorkOrderListComponent", filePath: "src/app/work-orders/components/work-order-list/work-order-list.component.ts", lineNumber: 11 });
})();

// src/app/work-orders/components/work-order-stats/work-order-stats.component.ts
function WorkOrderStatsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 5);
    \u0275\u0275element(3, "circle", 6)(4, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6, "Loading stats...");
    \u0275\u0275elementEnd()()();
  }
}
function WorkOrderStatsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 13);
    \u0275\u0275element(6, "path", 14)(7, "path", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 16)(9, "div", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
    \u0275\u0275text(14, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 18);
    \u0275\u0275element(16, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 20);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "div", 12);
    \u0275\u0275text(23, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 21);
    \u0275\u0275element(25, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 16)(27, "div", 23);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 10)(30, "div", 11)(31, "div", 12);
    \u0275\u0275text(32, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 24);
    \u0275\u0275element(34, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "div", 16)(36, "div", 26);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 10)(39, "div", 11)(40, "div", 12);
    \u0275\u0275text(41, "Critical");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 18);
    \u0275\u0275element(43, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 16)(45, "div", 20);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.total);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.open);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.inProgress);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.completed);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.stats.critical);
  }
}
var WorkOrderStatsComponent = class _WorkOrderStatsComponent {
  workOrderService;
  stats = null;
  isLoading = true;
  subscription = new Subscription();
  constructor(workOrderService) {
    this.workOrderService = workOrderService;
  }
  ngOnInit() {
    this.loadStats();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  loadStats() {
    this.isLoading = true;
    this.subscription.add(this.workOrderService.getWorkOrderStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading stats:", error);
        this.isLoading = false;
        this.stats = {
          total: 0,
          open: 0,
          inProgress: 0,
          completed: 0,
          critical: 0
        };
      }
    }));
  }
  getIconClass(icon) {
    const iconMap = {
      "wrench": "fas fa-wrench",
      "warning": "fas fa-exclamation-triangle",
      "clock": "fas fa-clock",
      "check": "fas fa-check-circle"
    };
    return iconMap[icon] || "fas fa-circle";
  }
  static \u0275fac = function WorkOrderStatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderStatsComponent)(\u0275\u0275directiveInject(WorkOrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderStatsComponent, selectors: [["app-work-order-stats"]], standalone: false, decls: 3, vars: 2, consts: [[1, "stats-section"], ["class", "loading-state", 4, "ngIf"], ["class", "stats-cards", 4, "ngIf"], [1, "loading-state"], [1, "flex", "items-center", "justify-center", "py-8"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "ml-2", "text-gray-600"], [1, "stats-cards"], [1, "stat-card"], [1, "p-6", "flex", "flex-row", "items-center", "justify-between", "space-y-0", "pb-1", "sm:pb-2"], [1, "label"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon", "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "p-6", "pt-0"], [1, "text-lg", "sm:text-xl", "md:text-2xl", "font-bold", "text-foreground"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon", "w-6", "h-6", "red"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "text-lg", "sm:text-xl", "md:text-2xl", "font-bold", "text-foreground", "number", "red"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon", "w-6", "h-6", "blue"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-lg", "sm:text-xl", "md:text-2xl", "font-bold", "text-foreground", "number", "blue"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon", "w-6", "h-6", "green"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-lg", "sm:text-xl", "md:text-2xl", "font-bold", "text-foreground", "green"]], template: function WorkOrderStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, WorkOrderStatsComponent_div_1_Template, 7, 0, "div", 1)(2, WorkOrderStatsComponent_div_2_Template, 47, 5, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.stats);
    }
  }, dependencies: [NgIf], styles: ["\n\n.stats-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n  height: 150px;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  display: block;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .icon.blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .icon.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .icon.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .number.blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .number.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .number.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  margin: 0;\n}\n.stats-section[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 0.875rem 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.stats-section[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.stats-section[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.stats-section[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n@media (max-width: 1024px) {\n  .stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n    height: 120px;\n    padding: 1rem;\n  }\n  .stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=work-order-stats.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderStatsComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-stats", standalone: false, template: '<div class="stats-section">\r\n  <!-- Loading State -->\r\n  <div *ngIf="isLoading" class="loading-state">\r\n    <div class="flex items-center justify-center py-8">\r\n      <svg class="animate-spin h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r\n        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r\n        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r\n      </svg>\r\n      <span class="ml-2 text-gray-600">Loading stats...</span>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Stats Cards -->\r\n  <div *ngIf="!isLoading && stats" class="stats-cards">\r\n    <div class="stat-card">\r\n      <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">\r\n        <div class="label">Total</div>\r\n        <svg class="icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="p-6 pt-0">\r\n        <div class="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{{ stats.total }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="stat-card">\r\n      <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">\r\n        <div class="label">Open</div>\r\n        <svg class="icon w-6 h-6 red" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="p-6 pt-0">\r\n        <div class="text-lg sm:text-xl md:text-2xl font-bold text-foreground number red">{{ stats.open }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="stat-card">\r\n      <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">\r\n        <div class="label">In Progress</div>\r\n        <svg class="icon w-6 h-6 blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="p-6 pt-0">\r\n        <div class="text-lg sm:text-xl md:text-2xl font-bold text-foreground number blue">{{ stats.inProgress }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="stat-card">\r\n      <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">\r\n        <div class="label">Completed</div>\r\n        <svg class="icon w-6 h-6 green" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="p-6 pt-0">\r\n        <div class="text-lg sm:text-xl md:text-2xl font-bold text-foreground green">{{ stats.completed }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="stat-card">\r\n      <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">\r\n        <div class="label">Critical</div>\r\n        <svg class="icon w-6 h-6 red" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="p-6 pt-0">\r\n        <div class="text-lg sm:text-xl md:text-2xl font-bold text-foreground number red">{{ stats.critical }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/work-orders/components/work-order-stats/work-order-stats.component.scss */\n.stats-section {\n  margin-bottom: 2rem;\n}\n.stats-section .stats-cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.stats-section .stats-cards .stat-card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n  height: 150px;\n}\n.stats-section .stats-cards .stat-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.stats-section .stats-cards .stat-card .icon {\n  margin-bottom: 0.75rem;\n  display: block;\n}\n.stats-section .stats-cards .stat-card .icon.blue {\n  color: #2563eb;\n}\n.stats-section .stats-cards .stat-card .icon.red {\n  color: #dc2626;\n}\n.stats-section .stats-cards .stat-card .icon.green {\n  color: #16a34a;\n}\n.stats-section .stats-cards .stat-card .number.blue {\n  color: #2563eb;\n}\n.stats-section .stats-cards .stat-card .number.red {\n  color: #dc2626;\n}\n.stats-section .stats-cards .stat-card .number.green {\n  color: #16a34a;\n}\n.stats-section .stats-cards .stat-card .label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n  margin: 0;\n}\n.stats-section .create-button {\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 0.875rem 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.stats-section .create-button:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.stats-section .create-button:active {\n  transform: translateY(0);\n}\n.stats-section .create-button .icon {\n  font-size: 0.875rem;\n}\n@media (max-width: 1024px) {\n  .stats-section .stats-cards {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .stats-section .stats-cards {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .stats-section .stats-cards .stat-card {\n    height: 120px;\n    padding: 1rem;\n  }\n  .stats-section .stats-cards .stat-card .number {\n    font-size: 1.5rem;\n  }\n  .stats-section .stats-cards .stat-card .icon {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=work-order-stats.component.css.map */\n"] }]
  }], () => [{ type: WorkOrderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderStatsComponent, { className: "WorkOrderStatsComponent", filePath: "src/app/work-orders/components/work-order-stats/work-order-stats.component.ts", lineNumber: 11 });
})();

// src/app/work-orders/components/work-order-analytics/work-order-analytics.component.ts
var _c0 = () => [0, 1, 2, 3, 4];
var _c1 = () => [];
function WorkOrderAnalyticsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading work order analytics...");
    \u0275\u0275elementEnd()();
  }
}
function WorkOrderAnalyticsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function WorkOrderAnalyticsComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 11);
    \u0275\u0275element(7, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Retry ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h3", 25);
    \u0275\u0275text(2, "Performance Metrics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "div", 27)(5, "div", 28)(6, "h4", 29);
    \u0275\u0275text(7, "Average Resolution Time");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 30);
    \u0275\u0275element(9, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 33);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 27)(15, "div", 28)(16, "h4", 29);
    \u0275\u0275text(17, "Completion Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 30);
    \u0275\u0275element(19, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 32);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 35);
    \u0275\u0275text(23, "Target: 85%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 27)(25, "div", 28)(26, "h4", 29);
    \u0275\u0275text(27, "Overdue Work Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 30);
    \u0275\u0275element(29, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 36);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 37);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 27)(35, "div", 28)(36, "h4", 29);
    \u0275\u0275text(37, "Active Technicians");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 30);
    \u0275\u0275element(39, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 32);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 39);
    \u0275\u0275text(43, "Active right now");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.formatDays(ctx_r1.performanceMetrics.average_resolution_time));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.performanceMetrics.resolution_time_trend || "No trend data", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatPercentage(ctx_r1.performanceMetrics.completion_rate));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.performanceMetrics.overdue_count || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.performanceMetrics.overdue_trend || "No trend data", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.performanceMetrics.active_technicians || 0);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_13_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "span", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", item_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", ctx_r1.formatPercentage(ctx_r1.getStatusPercentage(item_r4.value, ctx_r1.totalStatusCount)), ") ");
  }
}
function WorkOrderAnalyticsComponent_div_3_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "h3", 46);
    \u0275\u0275text(3, "Work Order Status Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48)(7, "div", 49)(8, "div", 50);
    \u0275\u0275template(9, WorkOrderAnalyticsComponent_div_3_div_13_div_2_div_9_Template, 8, 5, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 52)(11, "div", 53)(12, "div", 54)(13, "span", 55);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 56);
    \u0275\u0275text(16, "Total");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Current breakdown by status (", ctx_r1.totalStatusCount, " total)");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.statusChartData);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalStatusCount);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_13_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67);
    \u0275\u0275element(4, "div", 68);
    \u0275\u0275elementStart(5, "span", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getStatusPercentage(item_r5.value, ctx_r1.totalStatusCount) + "%")("background-color", item_r5.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.value);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "h3", 46);
    \u0275\u0275text(3, "Priority Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 47);
    \u0275\u0275text(5, "Work orders by priority level with trends");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48)(7, "div", 62)(8, "div", 63);
    \u0275\u0275template(9, WorkOrderAnalyticsComponent_div_3_div_13_div_3_div_9_Template, 7, 6, "div", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.priorityChartData);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_13_div_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 81);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_13_div_4_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(month_r6.month);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 45)(2, "h3", 46);
    \u0275\u0275text(3, "Monthly Performance Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 47);
    \u0275\u0275text(5, "Work orders created vs completed with efficiency tracking");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48)(7, "div", 71)(8, "div", 72)(9, "span");
    \u0275\u0275text(10, "80");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "60");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "40");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 73)(20, "div", 74);
    \u0275\u0275template(21, WorkOrderAnalyticsComponent_div_3_div_13_div_4_div_21_Template, 1, 0, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 76);
    \u0275\u0275element(23, "div", 77)(24, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 79);
    \u0275\u0275template(26, WorkOrderAnalyticsComponent_div_3_div_13_div_4_span_26_Template, 2, 1, "span", 80);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", "100%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", "80%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.monthlyTrendData);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275template(2, WorkOrderAnalyticsComponent_div_3_div_13_div_2_Template, 17, 3, "div", 42)(3, WorkOrderAnalyticsComponent_div_3_div_13_div_3_Template, 10, 1, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, WorkOrderAnalyticsComponent_div_3_div_13_div_4_Template, 27, 7, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasStatusDistribution);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasPriorityDistribution);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasMonthlyTrends);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "h4", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 90)(7, "div", 91)(8, "span", 92);
    \u0275\u0275text(9, "Completed:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 91)(13, "span", 92);
    \u0275\u0275text(14, "Avg Time:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 32);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 93);
    \u0275\u0275element(18, "div", 94);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tech_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tech_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tech_r7.score.toFixed(2));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(tech_r7.completed);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDays(tech_r7.avgTime));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", tech_r7.score * 100 + "%");
  }
}
function WorkOrderAnalyticsComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "h3", 25);
    \u0275\u0275text(2, "Top Technician Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 83);
    \u0275\u0275text(4, "Individual performance metrics for this month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 84);
    \u0275\u0275template(6, WorkOrderAnalyticsComponent_div_3_div_14_div_6_Template, 19, 6, "div", 85);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.technicianData);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "span", 100);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4", 102);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 103);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const insight_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(insight_r8.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getInsightIcon(insight_r8.type));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getInsightColor(insight_r8.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(insight_r8.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(insight_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(insight_r8.description);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "h3", 25);
    \u0275\u0275text(2, "Performance Insights & Recommendations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 83);
    \u0275\u0275text(4, "AI-powered insights based on current performance data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 96);
    \u0275\u0275template(6, WorkOrderAnalyticsComponent_div_3_div_15_div_6_Template, 10, 8, "div", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", (ctx_r1.analyticsData == null ? null : ctx_r1.analyticsData.insights) || \u0275\u0275pureFunction0(1, _c1));
  }
}
function WorkOrderAnalyticsComponent_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 105);
    \u0275\u0275element(2, "path", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 107);
    \u0275\u0275text(4, "No Analytics Data Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 108);
    \u0275\u0275text(6, "Work order analytics data will appear here once available.");
    \u0275\u0275elementEnd()();
  }
}
function WorkOrderAnalyticsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 13)(2, "div", 14)(3, "h2", 15);
    \u0275\u0275text(4, "Work Order Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, "Performance insights and trends");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 17)(8, "button", 18);
    \u0275\u0275listener("click", function WorkOrderAnalyticsComponent_div_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 11);
    \u0275\u0275element(10, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Refresh ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, WorkOrderAnalyticsComponent_div_3_div_12_Template, 44, 6, "div", 19)(13, WorkOrderAnalyticsComponent_div_3_div_13_Template, 5, 3, "div", 20)(14, WorkOrderAnalyticsComponent_div_3_div_14_Template, 7, 1, "div", 21)(15, WorkOrderAnalyticsComponent_div_3_div_15_Template, 7, 2, "div", 22)(16, WorkOrderAnalyticsComponent_div_3_div_16_Template, 7, 0, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.analyticsData && ctx_r1.performanceMetrics);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.analyticsData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasTechnicianData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasInsights);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.analyticsData && !ctx_r1.hasStatusDistribution && !ctx_r1.hasPriorityDistribution && !ctx_r1.hasMonthlyTrends && !ctx_r1.hasTechnicianData && !ctx_r1.hasInsights);
  }
}
var WorkOrderAnalyticsComponent = class _WorkOrderAnalyticsComponent {
  workOrderService;
  destroy$ = new Subject();
  // Loading and error states
  loading = false;
  error = null;
  // Analytics data
  analyticsData = null;
  statisticsData = null;
  // Chart data for visualization
  statusChartData = [];
  priorityChartData = [];
  monthlyTrendData = [];
  technicianData = [];
  constructor(workOrderService) {
    this.workOrderService = workOrderService;
  }
  ngOnInit() {
    this.loadAnalytics();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadAnalytics() {
    this.loading = true;
    this.error = null;
    Promise.all([
      this.loadWorkOrderAnalytics(),
      this.loadWorkOrderStatistics()
    ]).finally(() => {
      this.loading = false;
    });
  }
  loadWorkOrderAnalytics() {
    return new Promise((resolve) => {
      this.workOrderService.getWorkOrderAnalytics().pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          this.analyticsData = response;
          this.prepareChartData();
          resolve();
        },
        error: (err) => {
          console.error("Error loading work order analytics:", err);
          this.error = "Failed to load analytics data. Please try again.";
          resolve();
        }
      });
    });
  }
  loadWorkOrderStatistics() {
    return new Promise((resolve) => {
      this.workOrderService.getWorkOrderStatistics().pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          this.statisticsData = response;
          resolve();
        },
        error: (err) => {
          console.error("Error loading work order statistics:", err);
          resolve();
        }
      });
    });
  }
  prepareChartData() {
    if (!this.analyticsData)
      return;
    this.statusChartData = [
      {
        name: "Completed",
        value: this.analyticsData.status_distribution?.completed || 0,
        color: "#10b981"
      },
      {
        name: "Open",
        value: this.analyticsData.status_distribution?.open || 0,
        color: "#ef4444"
      },
      {
        name: "In Progress",
        value: this.analyticsData.status_distribution?.in_progress || 0,
        color: "#3b82f6"
      },
      {
        name: "On Hold",
        value: this.analyticsData.status_distribution?.on_hold || 0,
        color: "#f59e0b"
      },
      {
        name: "Cancelled",
        value: this.analyticsData.status_distribution?.cancelled || 0,
        color: "#6b7280"
      }
    ];
    this.priorityChartData = [
      {
        name: "Critical",
        value: this.analyticsData.priority_distribution?.critical || 0,
        color: "#dc2626"
      },
      {
        name: "High",
        value: this.analyticsData.priority_distribution?.high || 0,
        color: "#f59e0b"
      },
      {
        name: "Medium",
        value: this.analyticsData.priority_distribution?.medium || 0,
        color: "#3b82f6"
      },
      {
        name: "Low",
        value: this.analyticsData.priority_distribution?.low || 0,
        color: "#10b981"
      }
    ];
    if (this.analyticsData.monthly_trends?.months && this.analyticsData.monthly_trends.months.length > 0) {
      this.monthlyTrendData = this.analyticsData.monthly_trends.months.map((month, index) => ({
        month,
        created: this.analyticsData.monthly_trends.created[index] || 0,
        completed: this.analyticsData.monthly_trends.completed[index] || 0
      }));
    } else {
      this.monthlyTrendData = [];
    }
    if (this.analyticsData.technician_performance && this.analyticsData.technician_performance.length > 0) {
      this.technicianData = this.analyticsData.technician_performance.map((tech) => ({
        name: tech.name || "Unknown",
        score: tech.performance_score || 0,
        completed: tech.completed_orders || 0,
        avgTime: tech.average_resolution_time || 0
      }));
    } else {
      this.technicianData = [];
    }
  }
  refreshData() {
    this.loadAnalytics();
  }
  getInsightIcon(type) {
    switch (type) {
      case "success":
        return "\u2713";
      case "warning":
        return "\u26A0";
      case "info":
        return "\u2139";
      case "optimization":
        return "\u{1F4A1}";
      default:
        return "\u2139";
    }
  }
  getInsightColor(type) {
    switch (type) {
      case "success":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "info":
        return "text-blue-600 bg-blue-100";
      case "optimization":
        return "text-purple-600 bg-purple-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  }
  formatDays(days) {
    if (!days || days <= 0)
      return "0 days";
    if (days === 1)
      return "1 day";
    return `${days} days`;
  }
  formatPercentage(value) {
    if (!value || isNaN(value))
      return "0.0%";
    return `${value.toFixed(1)}%`;
  }
  getStatusPercentage(value, total) {
    if (!total || total <= 0)
      return 0;
    return value / total * 100;
  }
  // Safe getters for template usage
  get hasStatusDistribution() {
    return !!this.analyticsData?.status_distribution;
  }
  get hasPriorityDistribution() {
    return !!this.analyticsData?.priority_distribution;
  }
  get hasMonthlyTrends() {
    return !!(this.analyticsData?.monthly_trends?.months && this.analyticsData.monthly_trends.months.length > 0);
  }
  get hasTechnicianData() {
    return !!(this.analyticsData?.technician_performance && this.analyticsData.technician_performance.length > 0);
  }
  get hasInsights() {
    return !!(this.analyticsData?.insights && this.analyticsData.insights.length > 0);
  }
  get totalStatusCount() {
    return this.analyticsData?.status_distribution?.total || 0;
  }
  get performanceMetrics() {
    return this.analyticsData?.performance_metrics || {};
  }
  static \u0275fac = function WorkOrderAnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderAnalyticsComponent)(\u0275\u0275directiveInject(WorkOrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderAnalyticsComponent, selectors: [["app-work-order-analytics"]], decls: 4, vars: 3, consts: [[1, "work-order-analytics"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "analytics-header"], [1, "header-left"], [1, "main-title"], [1, "subtitle"], [1, "header-right"], ["title", "Refresh Data", 1, "refresh-btn", 3, "click"], ["class", "metrics-section", 4, "ngIf"], ["class", "charts-section", 4, "ngIf"], ["class", "technician-section", 4, "ngIf"], ["class", "insights-section", 4, "ngIf"], ["class", "no-data-message", 4, "ngIf"], [1, "metrics-section"], [1, "section-title"], [1, "metrics-grid"], [1, "metric-card"], [1, "metric-header"], [1, "metric-title"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "metric-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "metric-value"], [1, "metric-trend", "positive"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "metric-target"], [1, "metric-value", "warning"], [1, "metric-trend"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "metric-status"], [1, "charts-section"], [1, "chart-row"], ["class", "chart-card", 4, "ngIf"], ["class", "chart-card full-width", 4, "ngIf"], [1, "chart-card"], [1, "chart-header"], [1, "chart-title"], [1, "chart-subtitle"], [1, "chart-container"], [1, "pie-chart"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "chart-placeholder"], [1, "chart-circle"], [1, "chart-center"], [1, "total-count"], [1, "total-label"], [1, "legend-item"], [1, "legend-color"], [1, "legend-label"], [1, "legend-value"], [1, "legend-percentage"], [1, "bar-chart"], [1, "chart-bars"], ["class", "bar-item", 4, "ngFor", "ngForOf"], [1, "bar-item"], [1, "bar-label"], [1, "bar-container"], [1, "bar"], [1, "bar-value"], [1, "chart-card", "full-width"], [1, "trend-chart"], [1, "chart-y-axis"], [1, "chart-area"], [1, "grid-lines"], ["class", "grid-line", 4, "ngFor", "ngForOf"], [1, "trend-lines"], ["title", "Work orders created", 1, "trend-line", "created"], ["title", "Work orders completed", 1, "trend-line", "completed"], [1, "chart-x-axis"], [4, "ngFor", "ngForOf"], [1, "grid-line"], [1, "technician-section"], [1, "section-subtitle"], [1, "technician-grid"], ["class", "technician-card", 4, "ngFor", "ngForOf"], [1, "technician-card"], [1, "tech-header"], [1, "tech-name"], [1, "tech-score"], [1, "tech-metrics"], [1, "tech-metric"], [1, "metric-label"], [1, "performance-bar"], [1, "bar-fill"], [1, "insights-section"], [1, "insights-grid"], ["class", "insight-card", 3, "class", 4, "ngFor", "ngForOf"], [1, "insight-card"], [1, "insight-header"], [1, "insight-icon"], [1, "insight-tag"], [1, "insight-title"], [1, "insight-description"], [1, "no-data-message"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "no-data-title"], [1, "no-data-description"]], template: function WorkOrderAnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, WorkOrderAnalyticsComponent_div_1_Template, 4, 0, "div", 1)(2, WorkOrderAnalyticsComponent_div_2_Template, 9, 1, "div", 2)(3, WorkOrderAnalyticsComponent_div_3_Template, 17, 5, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.work-order-analytics[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.error-state[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n}\n.error-state[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.no-data-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.no-data-message[_ngcontent-%COMP%]   .no-data-title[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.no-data-message[_ngcontent-%COMP%]   .no-data-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n.analytics-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1.125rem;\n  margin: 0;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  transform: translateY(-1px);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem 0;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n}\n.metrics-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.metrics-section[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%]   .metric-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  margin: 0;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #6b7280;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-trend[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-trend.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-target[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.metrics-section[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-status[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #10b981;\n  font-weight: 500;\n}\n.charts-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.charts-section[_ngcontent-%COMP%]   .chart-card.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  min-height: 300px;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  min-width: 80px;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n  min-width: 30px;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-percentage[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-circle[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background:\n    conic-gradient(\n      #10b981 0deg 174deg,\n      #ef4444 174deg 234deg,\n      #3b82f6 234deg 264deg,\n      #f59e0b 264deg 285deg,\n      #6b7280 285deg 360deg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-circle[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  background: white;\n  border-radius: 50%;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-circle[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%] {\n  text-align: center;\n  z-index: 1;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-circle[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.charts-section[_ngcontent-%COMP%]   .pie-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-circle[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.charts-section[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .bar-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.charts-section[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .bar-item[_ngcontent-%COMP%]   .bar-label[_ngcontent-%COMP%] {\n  min-width: 60px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.charts-section[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .bar-item[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.charts-section[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .bar-item[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  height: 2rem;\n  border-radius: 0.25rem;\n  min-width: 20px;\n  transition: width 0.3s ease;\n}\n.charts-section[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .bar-item[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .bar-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n  min-width: 30px;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%] {\n  display: flex;\n  height: 300px;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-y-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 1rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #f3f4f6;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(2) {\n  top: 25%;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 50%;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(4) {\n  top: 75%;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(5) {\n  top: 100%;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .trend-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .trend-lines[_ngcontent-%COMP%]   .trend-line[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(59, 130, 246, 0.1) 100%);\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .trend-lines[_ngcontent-%COMP%]   .trend-line.created[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(59, 130, 246, 0.2) 100%);\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .trend-lines[_ngcontent-%COMP%]   .trend-line.completed[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(16, 185, 129, 0.2) 100%);\n}\n.charts-section[_ngcontent-%COMP%]   .trend-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .chart-x-axis[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.technician-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%]   .tech-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%]   .tech-header[_ngcontent-%COMP%]   .tech-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%]   .tech-header[_ngcontent-%COMP%]   .tech-score[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #3b82f6;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%]   .tech-metrics[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%]   .tech-metrics[_ngcontent-%COMP%]   .tech-metric[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%]   .tech-metrics[_ngcontent-%COMP%]   .tech-metric[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%]   .tech-metrics[_ngcontent-%COMP%]   .tech-metric[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%]   .performance-bar[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  background-color: #f3f4f6;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n.technician-section[_ngcontent-%COMP%]   .technician-card[_ngcontent-%COMP%]   .performance-bar[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #3b82f6;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.insights-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.insights-section[_ngcontent-%COMP%]   .insights-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border-left: 4px solid;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card.success[_ngcontent-%COMP%] {\n  border-left-color: #10b981;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card.warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card.info[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card.optimization[_ngcontent-%COMP%] {\n  border-left-color: #8b5cf6;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%]   .insight-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%]   .insight-tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card[_ngcontent-%COMP%]   .insight-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.insights-section[_ngcontent-%COMP%]   .insight-card[_ngcontent-%COMP%]   .insight-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .work-order-analytics[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .analytics-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .chart-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pie-chart[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .pie-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-circle[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n  .pie-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-circle[_ngcontent-%COMP%]::before {\n    width: 90px;\n    height: 90px;\n  }\n  .pie-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-circle[_ngcontent-%COMP%]   .chart-center[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .technician-grid[_ngcontent-%COMP%], \n   .insights-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=work-order-analytics.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderAnalyticsComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-analytics", standalone: true, imports: [CommonModule], template: `<div class="work-order-analytics">\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Loading work order analytics...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="error-state">\r
    <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
    </svg>\r
    <h3 class="error-title">{{ error }}</h3>\r
    <button class="btn btn-primary" (click)="refreshData()">\r
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
      </svg>\r
      Retry\r
    </button>\r
  </div>\r
\r
  <!-- Analytics Content -->\r
  <div *ngIf="!loading && !error">\r
    <!-- Header Section -->\r
    <div class="analytics-header">\r
      <div class="header-left">\r
        <h2 class="main-title">Work Order Analytics</h2>\r
        <p class="subtitle">Performance insights and trends</p>\r
      </div>\r
      <div class="header-right">\r
        <button class="refresh-btn" (click)="refreshData()" title="Refresh Data">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
          </svg>\r
          Refresh\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Performance Metrics Cards -->\r
    <div class="metrics-section" *ngIf="analyticsData && performanceMetrics">\r
      <h3 class="section-title">Performance Metrics</h3>\r
      <div class="metrics-grid">\r
        <div class="metric-card">\r
          <div class="metric-header">\r
            <h4 class="metric-title">Average Resolution Time</h4>\r
            <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
          </div>\r
          <div class="metric-value">{{ formatDays(performanceMetrics.average_resolution_time) }}</div>\r
          <div class="metric-trend positive">\r
            {{ performanceMetrics.resolution_time_trend || 'No trend data' }}\r
          </div>\r
        </div>\r
\r
        <div class="metric-card">\r
          <div class="metric-header">\r
            <h4 class="metric-title">Completion Rate</h4>\r
            <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
          </div>\r
          <div class="metric-value">{{ formatPercentage(performanceMetrics.completion_rate) }}</div>\r
          <div class="metric-target">Target: 85%</div>\r
        </div>\r
\r
        <div class="metric-card">\r
          <div class="metric-header">\r
            <h4 class="metric-title">Overdue Work Orders</h4>\r
            <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
            </svg>\r
          </div>\r
          <div class="metric-value warning">{{ performanceMetrics.overdue_count || 0 }}</div>\r
          <div class="metric-trend">\r
            {{ performanceMetrics.overdue_trend || 'No trend data' }}\r
          </div>\r
        </div>\r
\r
        <div class="metric-card">\r
          <div class="metric-header">\r
            <h4 class="metric-title">Active Technicians</h4>\r
            <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>\r
            </svg>\r
          </div>\r
          <div class="metric-value">{{ performanceMetrics.active_technicians || 0 }}</div>\r
          <div class="metric-status">Active right now</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Charts Section -->\r
    <div class="charts-section" *ngIf="analyticsData">\r
      <div class="chart-row">\r
        <!-- Status Distribution Chart -->\r
        <div class="chart-card" *ngIf="hasStatusDistribution">\r
          <div class="chart-header">\r
            <h3 class="chart-title">Work Order Status Distribution</h3>\r
            <p class="chart-subtitle">Current breakdown by status ({{ totalStatusCount }} total)</p>\r
          </div>\r
          <div class="chart-container">\r
            <div class="pie-chart">\r
              <div class="chart-legend">\r
                <div class="legend-item" *ngFor="let item of statusChartData">\r
                  <div class="legend-color" [style.background-color]="item.color"></div>\r
                  <span class="legend-label">{{ item.name }}</span>\r
                  <span class="legend-value">{{ item.value }}</span>\r
                  <span class="legend-percentage">\r
                    ({{ formatPercentage(getStatusPercentage(item.value, totalStatusCount)) }})\r
                  </span>\r
                </div>\r
              </div>\r
              <div class="chart-placeholder">\r
                <div class="chart-circle">\r
                  <div class="chart-center">\r
                    <span class="total-count">{{ totalStatusCount }}</span>\r
                    <span class="total-label">Total</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Priority Distribution Chart -->\r
        <div class="chart-card" *ngIf="hasPriorityDistribution">\r
          <div class="chart-header">\r
            <h3 class="chart-title">Priority Distribution</h3>\r
            <p class="chart-subtitle">Work orders by priority level with trends</p>\r
          </div>\r
          <div class="chart-container">\r
            <div class="bar-chart">\r
              <div class="chart-bars">\r
                <div class="bar-item" *ngFor="let item of priorityChartData">\r
                  <div class="bar-label">{{ item.name }}</div>\r
                  <div class="bar-container">\r
                    <div class="bar" \r
                         [style.width]="getStatusPercentage(item.value, totalStatusCount) + '%'"\r
                         [style.background-color]="item.color"></div>\r
                    <span class="bar-value">{{ item.value }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Monthly Performance Trend -->\r
      <div class="chart-card full-width" *ngIf="hasMonthlyTrends">\r
        <div class="chart-header">\r
          <h3 class="chart-title">Monthly Performance Trend</h3>\r
          <p class="chart-subtitle">Work orders created vs completed with efficiency tracking</p>\r
        </div>\r
        <div class="chart-container">\r
          <div class="trend-chart">\r
            <div class="chart-y-axis">\r
              <span>80</span>\r
              <span>60</span>\r
              <span>40</span>\r
              <span>20</span>\r
              <span>0</span>\r
            </div>\r
            <div class="chart-area">\r
              <div class="grid-lines">\r
                <div class="grid-line" *ngFor="let i of [0,1,2,3,4]"></div>\r
              </div>\r
              <div class="trend-lines">\r
                <div class="trend-line created" \r
                     [style.height]="'100%'"\r
                     title="Work orders created"></div>\r
                <div class="trend-line completed" \r
                     [style.height]="'80%'"\r
                     title="Work orders completed"></div>\r
              </div>\r
              <div class="chart-x-axis">\r
                <span *ngFor="let month of monthlyTrendData">{{ month.month }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Technician Performance Section -->\r
    <div class="technician-section" *ngIf="hasTechnicianData">\r
      <h3 class="section-title">Top Technician Performance</h3>\r
      <p class="section-subtitle">Individual performance metrics for this month</p>\r
      <div class="technician-grid">\r
        <div class="technician-card" *ngFor="let tech of technicianData">\r
          <div class="tech-header">\r
            <h4 class="tech-name">{{ tech.name }}</h4>\r
            <div class="tech-score">{{ tech.score.toFixed(2) }}</div>\r
          </div>\r
          <div class="tech-metrics">\r
            <div class="tech-metric">\r
              <span class="metric-label">Completed:</span>\r
              <span class="metric-value">{{ tech.completed }}</span>\r
            </div>\r
            <div class="tech-metric">\r
              <span class="metric-label">Avg Time:</span>\r
              <span class="metric-value">{{ formatDays(tech.avgTime) }}</span>\r
            </div>\r
          </div>\r
          <div class="performance-bar">\r
            <div class="bar-fill" [style.width]="(tech.score * 100) + '%'"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Performance Insights Section -->\r
    <div class="insights-section" *ngIf="hasInsights">\r
      <h3 class="section-title">Performance Insights & Recommendations</h3>\r
      <p class="section-subtitle">AI-powered insights based on current performance data</p>\r
      <div class="insights-grid">\r
        <div class="insight-card" \r
             *ngFor="let insight of (analyticsData?.insights || [])"\r
             [class]="insight.type">\r
          <div class="insight-header">\r
            <span class="insight-icon">{{ getInsightIcon(insight.type) }}</span>\r
            <span class="insight-tag" [class]="getInsightColor(insight.type)">{{ insight.tag }}</span>\r
          </div>\r
          <h4 class="insight-title">{{ insight.title }}</h4>\r
          <p class="insight-description">{{ insight.description }}</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- No Data Message -->\r
    <div *ngIf="analyticsData && !hasStatusDistribution && !hasPriorityDistribution && !hasMonthlyTrends && !hasTechnicianData && !hasInsights" class="no-data-message">\r
      <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r
      </svg>\r
      <h3 class="no-data-title">No Analytics Data Available</h3>\r
      <p class="no-data-description">Work order analytics data will appear here once available.</p>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/work-orders/components/work-order-analytics/work-order-analytics.component.scss */\n.work-order-analytics {\n  padding: 1.5rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state p {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.error-state .error-title {\n  color: #dc2626;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.error-state .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.error-state .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n}\n.error-state .btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.no-data-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.no-data-message .no-data-title {\n  color: #374151;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.no-data-message .no-data-description {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n.analytics-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.analytics-header .header-left .main-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-header .header-left .subtitle {\n  color: #64748b;\n  font-size: 1.125rem;\n  margin: 0;\n}\n.analytics-header .header-right .refresh-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.analytics-header .header-right .refresh-btn:hover {\n  background-color: #e5e7eb;\n  transform: translateY(-1px);\n}\n.section-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem 0;\n}\n.section-subtitle {\n  color: #64748b;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n}\n.metrics-section {\n  margin-bottom: 2rem;\n}\n.metrics-section .metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.metrics-section .metric-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.metrics-section .metric-card .metric-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.metrics-section .metric-card .metric-header .metric-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  margin: 0;\n}\n.metrics-section .metric-card .metric-header .metric-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #6b7280;\n}\n.metrics-section .metric-card .metric-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.metrics-section .metric-card .metric-value.warning {\n  color: #f59e0b;\n}\n.metrics-section .metric-card .metric-trend {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.metrics-section .metric-card .metric-trend.positive {\n  color: #10b981;\n}\n.metrics-section .metric-card .metric-target {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.metrics-section .metric-card .metric-status {\n  font-size: 0.875rem;\n  color: #10b981;\n  font-weight: 500;\n}\n.charts-section {\n  margin-bottom: 2rem;\n}\n.charts-section .chart-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.charts-section .chart-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.charts-section .chart-card.full-width {\n  grid-column: 1/-1;\n}\n.charts-section .chart-card .chart-header {\n  margin-bottom: 1.5rem;\n}\n.charts-section .chart-card .chart-header .chart-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.charts-section .chart-card .chart-header .chart-subtitle {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.charts-section .chart-card .chart-container {\n  min-height: 300px;\n}\n.charts-section .pie-chart {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.charts-section .pie-chart .chart-legend {\n  flex: 1;\n}\n.charts-section .pie-chart .chart-legend .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.charts-section .pie-chart .chart-legend .legend-item .legend-color {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n}\n.charts-section .pie-chart .chart-legend .legend-item .legend-label {\n  font-weight: 500;\n  color: #374151;\n  min-width: 80px;\n}\n.charts-section .pie-chart .chart-legend .legend-item .legend-value {\n  font-weight: 600;\n  color: #1e293b;\n  min-width: 30px;\n}\n.charts-section .pie-chart .chart-legend .legend-item .legend-percentage {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.charts-section .pie-chart .chart-placeholder {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.charts-section .pie-chart .chart-placeholder .chart-circle {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background:\n    conic-gradient(\n      #10b981 0deg 174deg,\n      #ef4444 174deg 234deg,\n      #3b82f6 234deg 264deg,\n      #f59e0b 264deg 285deg,\n      #6b7280 285deg 360deg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.charts-section .pie-chart .chart-placeholder .chart-circle::before {\n  content: "";\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  background: white;\n  border-radius: 50%;\n}\n.charts-section .pie-chart .chart-placeholder .chart-circle .chart-center {\n  text-align: center;\n  z-index: 1;\n}\n.charts-section .pie-chart .chart-placeholder .chart-circle .chart-center .total-count {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.charts-section .pie-chart .chart-placeholder .chart-circle .chart-center .total-label {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.charts-section .bar-chart .chart-bars .bar-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.charts-section .bar-chart .chart-bars .bar-item .bar-label {\n  min-width: 60px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.charts-section .bar-chart .chart-bars .bar-item .bar-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.charts-section .bar-chart .chart-bars .bar-item .bar-container .bar {\n  height: 2rem;\n  border-radius: 0.25rem;\n  min-width: 20px;\n  transition: width 0.3s ease;\n}\n.charts-section .bar-chart .chart-bars .bar-item .bar-container .bar-value {\n  font-weight: 600;\n  color: #1e293b;\n  min-width: 30px;\n}\n.charts-section .trend-chart {\n  display: flex;\n  height: 300px;\n}\n.charts-section .trend-chart .chart-y-axis {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 1rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.charts-section .trend-chart .chart-area {\n  flex: 1;\n  position: relative;\n}\n.charts-section .trend-chart .chart-area .grid-lines {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.charts-section .trend-chart .chart-area .grid-lines .grid-line {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #f3f4f6;\n}\n.charts-section .trend-chart .chart-area .grid-lines .grid-line:nth-child(1) {\n  top: 0;\n}\n.charts-section .trend-chart .chart-area .grid-lines .grid-line:nth-child(2) {\n  top: 25%;\n}\n.charts-section .trend-chart .chart-area .grid-lines .grid-line:nth-child(3) {\n  top: 50%;\n}\n.charts-section .trend-chart .chart-area .grid-lines .grid-line:nth-child(4) {\n  top: 75%;\n}\n.charts-section .trend-chart .chart-area .grid-lines .grid-line:nth-child(5) {\n  top: 100%;\n}\n.charts-section .trend-chart .chart-area .trend-lines {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.charts-section .trend-chart .chart-area .trend-lines .trend-line {\n  position: absolute;\n  width: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(59, 130, 246, 0.1) 100%);\n}\n.charts-section .trend-chart .chart-area .trend-lines .trend-line.created {\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(59, 130, 246, 0.2) 100%);\n}\n.charts-section .trend-chart .chart-area .trend-lines .trend-line.completed {\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(16, 185, 129, 0.2) 100%);\n}\n.charts-section .trend-chart .chart-area .chart-x-axis {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.technician-section {\n  margin-bottom: 2rem;\n}\n.technician-section .technician-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.technician-section .technician-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.technician-section .technician-card .tech-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.technician-section .technician-card .tech-header .tech-name {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.technician-section .technician-card .tech-header .tech-score {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #3b82f6;\n}\n.technician-section .technician-card .tech-metrics {\n  margin-bottom: 1rem;\n}\n.technician-section .technician-card .tech-metrics .tech-metric {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.technician-section .technician-card .tech-metrics .tech-metric .metric-label {\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.technician-section .technician-card .tech-metrics .tech-metric .metric-value {\n  font-weight: 600;\n  color: #1e293b;\n}\n.technician-section .technician-card .performance-bar {\n  height: 0.5rem;\n  background-color: #f3f4f6;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n.technician-section .technician-card .performance-bar .bar-fill {\n  height: 100%;\n  background-color: #3b82f6;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.insights-section {\n  margin-bottom: 2rem;\n}\n.insights-section .insights-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.insights-section .insight-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border-left: 4px solid;\n}\n.insights-section .insight-card.success {\n  border-left-color: #10b981;\n}\n.insights-section .insight-card.warning {\n  border-left-color: #f59e0b;\n}\n.insights-section .insight-card.info {\n  border-left-color: #3b82f6;\n}\n.insights-section .insight-card.optimization {\n  border-left-color: #8b5cf6;\n}\n.insights-section .insight-card .insight-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.insights-section .insight-card .insight-header .insight-icon {\n  font-size: 1.5rem;\n}\n.insights-section .insight-card .insight-header .insight-tag {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.insights-section .insight-card .insight-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.insights-section .insight-card .insight-description {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .work-order-analytics {\n    padding: 1rem;\n  }\n  .analytics-header {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .analytics-header .header-right {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n  .metrics-grid {\n    grid-template-columns: 1fr;\n  }\n  .chart-row {\n    grid-template-columns: 1fr;\n  }\n  .pie-chart {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .pie-chart .chart-placeholder .chart-circle {\n    width: 150px;\n    height: 150px;\n  }\n  .pie-chart .chart-placeholder .chart-circle::before {\n    width: 90px;\n    height: 90px;\n  }\n  .pie-chart .chart-placeholder .chart-circle .chart-center .total-count {\n    font-size: 1.5rem;\n  }\n  .technician-grid,\n  .insights-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=work-order-analytics.component.css.map */\n'] }]
  }], () => [{ type: WorkOrderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderAnalyticsComponent, { className: "WorkOrderAnalyticsComponent", filePath: "src/app/work-orders/components/work-order-analytics/work-order-analytics.component.ts", lineNumber: 13 });
})();

// src/app/work-orders/components/work-order-filters/work-order-filters.component.ts
function WorkOrderFiltersComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_div_14_Template_div_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectStatus(option_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2.label, " ");
  }
}
function WorkOrderFiltersComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_div_22_Template_div_click_0_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPriority(option_r5.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r5.label, " ");
  }
}
function WorkOrderFiltersComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_button_34_Template_button_click_0_listener() {
      const option_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSortBy(option_r7.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.sortBy === option_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r7.label, " ");
  }
}
function WorkOrderFiltersComponent__svg_path_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 26);
  }
}
function WorkOrderFiltersComponent__svg_path_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 26);
  }
}
var WorkOrderFiltersComponent = class _WorkOrderFiltersComponent {
  fb;
  workOrderService;
  filtersChanged = new EventEmitter();
  filterForm;
  isLoading = false;
  subscription = new Subscription();
  // Filter states
  showStatusDropdown = false;
  showPriorityDropdown = false;
  showAdvanced = false;
  // Sort options
  sortBy = "date";
  sortOrder = "desc";
  statusOptions = [
    { value: "all", label: "All Status" },
    { value: "open", label: "Open" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" }
  ];
  priorityOptions = [
    { value: "all", label: "All Priority" },
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
    { value: "critical", label: "Critical" }
  ];
  sortOptions = [
    { value: "date", label: "Date" },
    { value: "priority", label: "Priority" },
    { value: "status", label: "Status" }
  ];
  constructor(fb, workOrderService) {
    this.fb = fb;
    this.workOrderService = workOrderService;
    this.filterForm = this.fb.group({
      search: [""],
      status: ["all"],
      priority: ["all"]
    });
  }
  ngOnInit() {
    this.subscription.add(this.filterForm.valueChanges.subscribe(() => {
      this.onFilterChange();
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // Status dropdown methods
  toggleStatusDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showPriorityDropdown = false;
  }
  selectStatus(value) {
    this.filterForm.patchValue({ status: value });
    this.showStatusDropdown = false;
  }
  getStatusLabel() {
    const selected = this.statusOptions.find((opt) => opt.value === this.filterForm.value.status);
    return selected ? selected.label : "All Status";
  }
  // Priority dropdown methods
  togglePriorityDropdown() {
    this.showPriorityDropdown = !this.showPriorityDropdown;
    this.showStatusDropdown = false;
  }
  selectPriority(value) {
    this.filterForm.patchValue({ priority: value });
    this.showPriorityDropdown = false;
  }
  getPriorityLabel() {
    const selected = this.priorityOptions.find((opt) => opt.value === this.filterForm.value.priority);
    return selected ? selected.label : "All Priority";
  }
  // Advanced methods
  toggleAdvanced() {
    this.showAdvanced = !this.showAdvanced;
  }
  setSortBy(value) {
    this.sortBy = value;
    this.onFilterChange();
  }
  toggleSortOrder() {
    this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    this.onFilterChange();
  }
  onSearch() {
    this.onFilterChange();
  }
  onFilterChange() {
    const filters = __spreadProps(__spreadValues({}, this.filterForm.value), {
      sortBy: this.sortBy,
      sortOrder: this.sortOrder
    });
    this.filtersChanged.emit(filters);
    console.log("Filters changed:", filters);
  }
  clearFilters() {
    this.filterForm.patchValue({
      search: "",
      status: "all",
      priority: "all"
    });
    this.sortBy = "date";
    this.sortOrder = "desc";
    this.showAdvanced = false;
  }
  // Close dropdowns when clicking outside
  onDocumentClick(event) {
    if (!event.target.closest(".filter-dropdown")) {
      this.showStatusDropdown = false;
      this.showPriorityDropdown = false;
    }
  }
  static \u0275fac = function WorkOrderFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderFiltersComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WorkOrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderFiltersComponent, selectors: [["app-work-order-filters"]], outputs: { filtersChanged: "filtersChanged" }, standalone: false, decls: 47, vars: 19, consts: [[1, "filters-section"], [1, "filters-container", 3, "formGroup"], [1, "search-input"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon", "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "formControlName", "search", "placeholder", "Search work orders...", 1, "search-field", 3, "input"], [1, "filter-dropdowns"], [1, "filter-dropdown"], ["type", "button", 1, "filter-button", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "dropdown-menu"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "advanced-button", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "transition-transform"], [1, "advanced-options"], [1, "advanced-section"], [1, "sort-options"], ["type", "button", "class", "sort-option", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "sort-order-button", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12", 4, "ngIf"], ["type", "button", 1, "clear-button", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "dropdown-item", 3, "click"], ["type", "button", 1, "sort-option", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"]], template: function WorkOrderFiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "input", 5);
      \u0275\u0275listener("input", function WorkOrderFiltersComponent_Template_input_input_5_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "button", 8);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_button_click_8_listener() {
        return ctx.toggleStatusDropdown();
      });
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 9);
      \u0275\u0275element(12, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275template(14, WorkOrderFiltersComponent_div_14_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "button", 8);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_button_click_16_listener() {
        return ctx.togglePriorityDropdown();
      });
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 9);
      \u0275\u0275element(20, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 11);
      \u0275\u0275template(22, WorkOrderFiltersComponent_div_22_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "button", 13);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_button_click_23_listener() {
        return ctx.toggleAdvanced();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 9);
      \u0275\u0275element(25, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Advanced ");
      \u0275\u0275elementStart(27, "svg", 15);
      \u0275\u0275element(28, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "div", 16)(30, "div", 17)(31, "h4");
      \u0275\u0275text(32, "Sort By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 18);
      \u0275\u0275template(34, WorkOrderFiltersComponent_button_34_Template, 2, 3, "button", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 17)(36, "h4");
      \u0275\u0275text(37, "Sort Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 20);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_button_click_38_listener() {
        return ctx.toggleSortOrder();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 9);
      \u0275\u0275template(40, WorkOrderFiltersComponent__svg_path_40_Template, 1, 0, "path", 21)(41, WorkOrderFiltersComponent__svg_path_41_Template, 1, 0, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "button", 22);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_button_click_43_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 9);
      \u0275\u0275element(45, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Clear ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.getStatusLabel());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("show", ctx.showStatusDropdown);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.statusOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.getPriorityLabel());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("show", ctx.showPriorityDropdown);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.priorityOptions);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.showAdvanced);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("rotate-180", ctx.showAdvanced);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("show", ctx.showAdvanced);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.sortOptions);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.sortOrder === "asc");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sortOrder === "desc");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.sortOrder === "asc" ? "Ascending" : "Descending", " ");
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  position: relative;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n  position: relative;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: #f9fafb;\n  transition: all 0.2s ease;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 0.875rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 140px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  z-index: 50;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-8px);\n  transition: all 0.2s ease;\n  margin-top: 0.25rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  border-bottom: 1px solid #f3f4f6;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 8px 8px 0 0;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 8px 8px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-button[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-button.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-button.active[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #6b7280;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n  background: #fef2f2;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 12px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  z-index: 40;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-8px);\n  transition: all 0.2s ease;\n  margin-top: 0.5rem;\n  padding: 1.5rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%]   .advanced-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%]   .advanced-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%]   .advanced-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.75rem 0;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%]   .advanced-section[_ngcontent-%COMP%]   .sort-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%]   .advanced-section[_ngcontent-%COMP%]   .sort-options[_ngcontent-%COMP%]   .sort-option[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%]   .advanced-section[_ngcontent-%COMP%]   .sort-options[_ngcontent-%COMP%]   .sort-option[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%]   .advanced-section[_ngcontent-%COMP%]   .sort-options[_ngcontent-%COMP%]   .sort-option.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%]   .advanced-section[_ngcontent-%COMP%]   .sort-order-button[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%]   .advanced-section[_ngcontent-%COMP%]   .sort-order-button[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n@media (max-width: 768px) {\n  .filters-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    gap: 0.5rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-button[_ngcontent-%COMP%], \n   .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%] {\n    align-self: stretch;\n    justify-content: center;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .advanced-options[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 1rem;\n    transform: none;\n  }\n}\n/*# sourceMappingURL=work-order-filters.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderFiltersComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-filters", standalone: false, template: `<div class="filters-section">\r
  <div class="filters-container" [formGroup]="filterForm">\r
    <!-- Search Input -->\r
    <div class="search-input">\r
      <svg class="search-icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
      </svg>\r
      <input \r
        class="search-field"\r
        type="text"\r
        formControlName="search"\r
        placeholder="Search work orders..."\r
        (input)="onSearch()">\r
    </div>\r
\r
    <!-- Filter Dropdowns -->\r
    <div class="filter-dropdowns">\r
      <!-- Status Dropdown -->\r
      <div class="filter-dropdown">\r
        <button \r
          type="button"\r
          class="filter-button"\r
          (click)="toggleStatusDropdown()">\r
          <span>{{ getStatusLabel() }}</span>\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
          </svg>\r
        </button>\r
        \r
        <div class="dropdown-menu" [class.show]="showStatusDropdown">\r
          <div \r
            *ngFor="let option of statusOptions" \r
            class="dropdown-item"\r
            (click)="selectStatus(option.value)">\r
            {{ option.label }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Priority Dropdown -->\r
      <div class="filter-dropdown">\r
        <button \r
          type="button"\r
          class="filter-button"\r
          (click)="togglePriorityDropdown()">\r
          <span>{{ getPriorityLabel() }}</span>\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
          </svg>\r
        </button>\r
        \r
        <div class="dropdown-menu" [class.show]="showPriorityDropdown">\r
          <div \r
            *ngFor="let option of priorityOptions" \r
            class="dropdown-item"\r
            (click)="selectPriority(option.value)">\r
            {{ option.label }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Advanced Button -->\r
    <button \r
      type="button"\r
      class="advanced-button"\r
      [class.active]="showAdvanced"\r
      (click)="toggleAdvanced()">\r
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"></path>\r
      </svg>\r
      Advanced\r
      <svg class="w-4 h-4 transition-transform" [class.rotate-180]="showAdvanced" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
      </svg>\r
    </button>\r
\r
    <!-- Advanced Options -->\r
    <div class="advanced-options" [class.show]="showAdvanced">\r
      <div class="advanced-section">\r
        <h4>Sort By</h4>\r
        <div class="sort-options">\r
          <button \r
            *ngFor="let option of sortOptions"\r
            type="button"\r
            class="sort-option"\r
            [class.active]="sortBy === option.value"\r
            (click)="setSortBy(option.value)">\r
            {{ option.label }}\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <div class="advanced-section">\r
        <h4>Sort Order</h4>\r
        <button \r
          type="button"\r
          class="sort-order-button"\r
          (click)="toggleSortOrder()">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path *ngIf="sortOrder === 'asc'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>\r
            <path *ngIf="sortOrder === 'desc'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>\r
          </svg>\r
          {{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }}\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Clear Filters -->\r
    <button \r
      type="button"\r
      class="clear-button"\r
      (click)="clearFilters()">\r
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
      </svg>\r
      Clear\r
    </button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/work-orders/components/work-order-filters/work-order-filters.component.scss */\n.filters-section {\n  margin-bottom: 2rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.filters-section .filters-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  position: relative;\n}\n.filters-section .filters-container .search-input {\n  flex: 1;\n  min-width: 250px;\n  position: relative;\n}\n.filters-section .filters-container .search-input .search-field {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: #f9fafb;\n  transition: all 0.2s ease;\n}\n.filters-section .filters-container .search-input .search-field:focus {\n  outline: none;\n  border-color: #2563eb;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.filters-section .filters-container .search-input .search-field::placeholder {\n  color: #9ca3af;\n}\n.filters-section .filters-container .search-input .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 0.875rem;\n}\n.filters-section .filters-container .filter-dropdowns {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown {\n  position: relative;\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .filter-button {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 140px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .filter-button:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .filter-button:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  z-index: 50;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-8px);\n  transition: all 0.2s ease;\n  margin-top: 0.25rem;\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .dropdown-menu.show {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .dropdown-menu .dropdown-item {\n  padding: 0.75rem 1rem;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  border-bottom: 1px solid #f3f4f6;\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .dropdown-menu .dropdown-item:last-child {\n  border-bottom: none;\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .dropdown-menu .dropdown-item:hover {\n  background-color: #f9fafb;\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .dropdown-menu .dropdown-item:first-child {\n  border-radius: 8px 8px 0 0;\n}\n.filters-section .filters-container .filter-dropdowns .filter-dropdown .dropdown-menu .dropdown-item:last-child {\n  border-radius: 0 0 8px 8px;\n}\n.filters-section .filters-container .advanced-button {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n}\n.filters-section .filters-container .advanced-button:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.filters-section .filters-container .advanced-button:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.filters-section .filters-container .advanced-button.active {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.filters-section .filters-container .advanced-button.active:hover {\n  background: #1d4ed8;\n}\n.filters-section .filters-container .clear-button {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #6b7280;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n}\n.filters-section .filters-container .clear-button:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n  background: #fef2f2;\n}\n.filters-section .filters-container .clear-button:focus {\n  outline: none;\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.filters-section .filters-container .advanced-options {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 12px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  z-index: 40;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-8px);\n  transition: all 0.2s ease;\n  margin-top: 0.5rem;\n  padding: 1.5rem;\n}\n.filters-section .filters-container .advanced-options.show {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.filters-section .filters-container .advanced-options .advanced-section {\n  margin-bottom: 1.5rem;\n}\n.filters-section .filters-container .advanced-options .advanced-section:last-child {\n  margin-bottom: 0;\n}\n.filters-section .filters-container .advanced-options .advanced-section h4 {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.75rem 0;\n}\n.filters-section .filters-container .advanced-options .advanced-section .sort-options {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.filters-section .filters-container .advanced-options .advanced-section .sort-options .sort-option {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filters-section .filters-container .advanced-options .advanced-section .sort-options .sort-option:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.filters-section .filters-container .advanced-options .advanced-section .sort-options .sort-option.active {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.filters-section .filters-container .advanced-options .advanced-section .sort-order-button {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filters-section .filters-container .advanced-options .advanced-section .sort-order-button:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n@media (max-width: 768px) {\n  .filters-section {\n    padding: 1rem;\n  }\n  .filters-section .filters-container {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .filters-section .filters-container .search-input {\n    min-width: auto;\n  }\n  .filters-section .filters-container .filter-dropdowns {\n    justify-content: space-between;\n    gap: 0.5rem;\n  }\n  .filters-section .filters-container .filter-dropdowns .filter-dropdown .filter-button {\n    min-width: 120px;\n  }\n  .filters-section .filters-container .advanced-button,\n  .filters-section .filters-container .clear-button {\n    align-self: stretch;\n    justify-content: center;\n  }\n  .filters-section .filters-container .advanced-options {\n    position: static;\n    margin-top: 1rem;\n    transform: none;\n  }\n}\n/*# sourceMappingURL=work-order-filters.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: WorkOrderService }], { filtersChanged: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderFiltersComponent, { className: "WorkOrderFiltersComponent", filePath: "src/app/work-orders/components/work-order-filters/work-order-filters.component.ts", lineNumber: 12 });
})();

// src/app/work-orders/work-orders.component.ts
function WorkOrdersComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Work order created successfully!");
    \u0275\u0275elementEnd()();
  }
}
function WorkOrdersComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function WorkOrdersComponent_div_25_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("title"), " ");
  }
}
function WorkOrdersComponent_div_25_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("asset_id"), " ");
  }
}
function WorkOrdersComponent_div_25_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("location_id"), " ");
  }
}
function WorkOrdersComponent_div_25_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("assigned_to"), " ");
  }
}
function WorkOrdersComponent_div_25__svg_svg_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 57);
    \u0275\u0275element(1, "circle", 58)(2, "path", 59);
    \u0275\u0275elementEnd();
  }
}
function WorkOrdersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_25_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal($event));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_25_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 22);
    \u0275\u0275element(4, "path", 23)(5, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "Create New Work Order");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 25)(9, "form", 26);
    \u0275\u0275listener("ngSubmit", function WorkOrdersComponent_div_25_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(10, "div", 27)(11, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 29);
    \u0275\u0275element(13, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "h3");
    \u0275\u0275text(15, "Basic Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 31)(17, "div", 32)(18, "label");
    \u0275\u0275text(19, "Title ");
    \u0275\u0275elementStart(20, "span", 33);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 34);
    \u0275\u0275template(23, WorkOrdersComponent_div_25_div_23_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 36)(25, "div", 32)(26, "label");
    \u0275\u0275text(27, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 37)(29, "option", 38);
    \u0275\u0275text(30, "Low");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 39);
    \u0275\u0275text(32, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 40);
    \u0275\u0275text(34, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 41);
    \u0275\u0275text(36, "Critical");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 32)(38, "label");
    \u0275\u0275text(39, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 31)(42, "div", 32)(43, "label");
    \u0275\u0275text(44, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "textarea", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 36)(47, "div", 32)(48, "label");
    \u0275\u0275text(49, "Estimated Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 32)(52, "label");
    \u0275\u0275text(53, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "textarea", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 27)(56, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(57, "svg", 29);
    \u0275\u0275element(58, "path", 46)(59, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(60, "h3");
    \u0275\u0275text(61, "Assignment & Location");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 36)(63, "div", 32)(64, "label");
    \u0275\u0275text(65, "Asset ID (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 48);
    \u0275\u0275template(67, WorkOrdersComponent_div_25_div_67_Template, 2, 1, "div", 35);
    \u0275\u0275elementStart(68, "div", 49)(69, "small");
    \u0275\u0275text(70, "Enter the ID of an existing asset from your assets list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 32)(72, "label");
    \u0275\u0275text(73, "Location ID (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "input", 50);
    \u0275\u0275template(75, WorkOrdersComponent_div_25_div_75_Template, 2, 1, "div", 35);
    \u0275\u0275elementStart(76, "div", 49)(77, "small");
    \u0275\u0275text(78, "Enter the ID of an existing location from your locations list");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "div", 36)(80, "div", 32)(81, "label");
    \u0275\u0275text(82, "Assign To User ID (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 51);
    \u0275\u0275template(84, WorkOrdersComponent_div_25_div_84_Template, 2, 1, "div", 35);
    \u0275\u0275elementStart(85, "div", 49)(86, "small");
    \u0275\u0275text(87, "Enter the ID of an existing user from your team members");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(88, "div", 52)(89, "button", 53);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_25_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275text(90, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "button", 54);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_25_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275template(92, WorkOrdersComponent_div_25__svg_svg_92_Template, 3, 0, "svg", 55);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r0.workOrderForm);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("title"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error-input", ctx_r0.hasFieldError("title"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("title"));
    \u0275\u0275advance(40);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("asset_id"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r0.hasFieldError("asset_id"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("asset_id"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("location_id"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r0.hasFieldError("location_id"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("location_id"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("assigned_to"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r0.hasFieldError("assigned_to"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("assigned_to"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoading ? "Creating..." : "Create Work Order", " ");
  }
}
var WorkOrdersComponent = class _WorkOrdersComponent {
  fb;
  workOrderService;
  workOrderList;
  workOrderStats;
  workOrderAnalytics;
  activeTab = "work-orders";
  showCreateModal = false;
  workOrderForm;
  isLoading = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = "";
  fieldErrors = {};
  currentFilters = {};
  subscription = new Subscription();
  constructor(fb, workOrderService) {
    this.fb = fb;
    this.workOrderService = workOrderService;
    this.workOrderForm = this.fb.group({
      title: ["", Validators.required],
      priority: ["medium"],
      due_date: [""],
      description: [""],
      asset_id: [""],
      location_id: [""],
      assigned_to: [""],
      estimated_hours: [""],
      notes: [""]
    });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    if (tab === "analytics" && this.workOrderAnalytics) {
      this.workOrderAnalytics.refreshData();
    }
  }
  openCreateModal() {
    this.showCreateModal = true;
    this.resetMessages();
  }
  closeCreateModal(event) {
    if (event && event.target.classList.contains("modal-overlay")) {
      this.showCreateModal = false;
    } else if (!event) {
      this.showCreateModal = false;
    }
    this.resetMessages();
  }
  resetMessages() {
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
    this.errorMessage = "";
    this.fieldErrors = {};
  }
  showSuccess() {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3e3);
  }
  showError(message, fieldErrors) {
    this.errorMessage = message;
    this.showErrorMessage = true;
    if (fieldErrors) {
      this.fieldErrors = fieldErrors;
    }
    setTimeout(() => {
      this.showErrorMessage = false;
      this.fieldErrors = {};
    }, 8e3);
  }
  // Helper method to get field errors for display
  getFieldError(fieldName) {
    return this.fieldErrors[fieldName] ? this.fieldErrors[fieldName].join(", ") : "";
  }
  // Helper method to check if a field has errors
  hasFieldError(fieldName) {
    return !!this.fieldErrors[fieldName] && this.fieldErrors[fieldName].length > 0;
  }
  onFiltersChanged(filters) {
    this.currentFilters = filters;
    console.log("Filters received in main component:", filters);
    if (this.workOrderList) {
    }
  }
  onSubmit() {
    if (this.workOrderForm.valid) {
      this.isLoading = true;
      this.resetMessages();
      const workOrderData = {
        title: this.workOrderForm.value.title,
        description: this.workOrderForm.value.description || void 0,
        priority: this.workOrderForm.value.priority,
        due_date: this.workOrderForm.value.due_date || void 0,
        asset_id: this.workOrderForm.value.asset_id || void 0,
        location_id: this.workOrderForm.value.location_id || void 0,
        assigned_to: this.workOrderForm.value.assigned_to || void 0,
        estimated_hours: this.workOrderForm.value.estimated_hours || void 0,
        notes: this.workOrderForm.value.notes || void 0
      };
      this.subscription.add(this.workOrderService.createWorkOrder(workOrderData).subscribe({
        next: (response) => {
          console.log("Work order created successfully:", response);
          this.showSuccess();
          this.closeCreateModal();
          this.workOrderForm.reset({
            priority: "medium"
          });
          if (this.workOrderList) {
            this.workOrderList.refreshWorkOrders();
          }
          if (this.workOrderStats) {
            this.workOrderStats.loadStats();
          }
          if (this.activeTab === "analytics" && this.workOrderAnalytics) {
            this.workOrderAnalytics.refreshData();
          }
        },
        error: (error) => {
          console.error("Error creating work order:", error);
          if (error.error?.errors) {
            const fieldErrors = error.error.errors;
            const message = error.error?.message || "Please fix the validation errors below.";
            this.showError(message, fieldErrors);
          } else if (error.error?.message) {
            this.showError(error.error.message);
          } else {
            this.showError("Failed to create work order. Please try again.");
          }
        },
        complete: () => {
          this.isLoading = false;
        }
      }));
    }
  }
  refreshAllData() {
    if (this.workOrderList) {
      this.workOrderList.refreshWorkOrders();
    }
    if (this.workOrderStats) {
      this.workOrderStats.loadStats();
    }
    if (this.workOrderAnalytics) {
      this.workOrderAnalytics.refreshData();
    }
  }
  static \u0275fac = function WorkOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrdersComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WorkOrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrdersComponent, selectors: [["app-work-orders"]], viewQuery: function WorkOrdersComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(WorkOrderListComponent, 5);
      \u0275\u0275viewQuery(WorkOrderStatsComponent, 5);
      \u0275\u0275viewQuery(WorkOrderAnalyticsComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.workOrderList = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.workOrderStats = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.workOrderAnalytics = _t.first);
    }
  }, standalone: false, decls: 26, vars: 11, consts: [[1, "work-orders-container"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "header"], [1, "tabs"], [1, "tab", 3, "click"], [1, "content"], [1, "work-orders-content"], [1, "create-button-container"], [1, "create-button", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [3, "filtersChanged"], [1, "analytics-content"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "success-message"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "error-message"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "header-icon", "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "section-icon", "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "form-row", "full-width"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "title", "placeholder", "Enter work order title"], ["class", "field-error", 4, "ngIf"], [1, "form-row"], ["formControlName", "priority"], ["value", "low"], ["value", "medium", "selected", ""], ["value", "high"], ["value", "critical"], ["type", "datetime-local", "formControlName", "due_date"], ["formControlName", "description", "placeholder", "Enter work order description"], ["type", "number", "formControlName", "estimated_hours", "placeholder", "0", "min", "0", "step", "0.5"], ["formControlName", "notes", "placeholder", "Additional notes"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["type", "number", "formControlName", "asset_id", "placeholder", "Enter asset ID"], [1, "field-help"], ["type", "number", "formControlName", "location_id", "placeholder", "Enter location ID"], ["type", "number", "formControlName", "assigned_to", "placeholder", "Enter user ID"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "field-error"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function WorkOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, WorkOrdersComponent_div_1_Template, 5, 0, "div", 1)(2, WorkOrdersComponent_div_2_Template, 5, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h1");
      \u0275\u0275text(5, "Work Order Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Streamline maintenance workflows with intelligent work order tracking and scheduling.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5);
      \u0275\u0275listener("click", function WorkOrdersComponent_Template_div_click_9_listener() {
        return ctx.setActiveTab("work-orders");
      });
      \u0275\u0275text(10, " Work Orders ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5);
      \u0275\u0275listener("click", function WorkOrdersComponent_Template_div_click_11_listener() {
        return ctx.setActiveTab("analytics");
      });
      \u0275\u0275text(12, " Analytics ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 6)(14, "div", 7);
      \u0275\u0275element(15, "app-work-order-stats");
      \u0275\u0275elementStart(16, "div", 8)(17, "button", 9);
      \u0275\u0275listener("click", function WorkOrdersComponent_Template_button_click_17_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10);
      \u0275\u0275element(19, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Create Work Order ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "app-work-order-filters", 12);
      \u0275\u0275listener("filtersChanged", function WorkOrdersComponent_Template_app_work_order_filters_filtersChanged_21_listener($event) {
        return ctx.onFiltersChanged($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "app-work-order-list");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 13);
      \u0275\u0275element(24, "app-work-order-analytics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(25, WorkOrdersComponent_div_25_Template, 94, 25, "div", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showErrorMessage);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.activeTab === "work-orders");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "analytics");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "work-orders");
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.activeTab === "analytics");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showCreateModal);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, WorkOrderAnalyticsComponent, WorkOrderListComponent, WorkOrderFiltersComponent, WorkOrderStatsComponent], styles: [`@charset "UTF-8";



.work-orders-container[_ngcontent-%COMP%] {
  padding: 2rem;
  background-color: #f8fafc;
  min-height: 100vh;
}
.work-orders-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.work-orders-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.work-orders-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  color: #64748b;
  font-weight: 400;
}
.work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
}
.work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {
  padding: 0.75rem 0;
  font-size: 1.125rem;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease;
}
.work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {
  color: #2563eb;
  font-weight: 600;
  border-bottom-color: #2563eb;
}
.work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover {
  color: #1e40af;
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%] {
  display: none;
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .analytics-content.active[_ngcontent-%COMP%] {
  display: block;
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%]   .analytics-placeholder[_ngcontent-%COMP%] {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  border: 2px dashed #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%]   .analytics-placeholder[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%]   .analytics-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #6b7280;
  margin: 0;
  font-size: 1rem;
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .work-orders-content[_ngcontent-%COMP%] {
  display: none;
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .work-orders-content.active[_ngcontent-%COMP%] {
  display: block;
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .work-orders-content[_ngcontent-%COMP%]   .create-button-container[_ngcontent-%COMP%] {
  text-align: right;
  margin-bottom: 2rem;
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .work-orders-content[_ngcontent-%COMP%]   .create-button-container[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%] {
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.875rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .work-orders-content[_ngcontent-%COMP%]   .create-button-container[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%]:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .work-orders-content[_ngcontent-%COMP%]   .create-button-container[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%]:active {
  transform: translateY(0);
}
.work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .work-orders-content[_ngcontent-%COMP%]   .create-button-container[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {
  color: #2563eb;
  font-size: 1.25rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.full-width[_ngcontent-%COMP%] {
  grid-template-columns: 1fr;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {
  color: #dc2626;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {
  color: #9ca3af;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error-input[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.error-input[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.error-input[_ngcontent-%COMP%] {
  border-color: #dc2626;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error-input[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.error-input[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.error-input[_ngcontent-%COMP%]:focus {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 80px;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%]:hover::-webkit-calendar-picker-indicator {
  opacity: 1;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  color: #dc2626;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {
  color: #dc2626;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%]::before {
  content: "\\26a0";
  font-size: 0.875rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-help[_ngcontent-%COMP%] {
  margin-top: 0.25rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-help[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.75rem;
  font-style: italic;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {
  background: #2563eb;
  color: white;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {
  background: #1d4ed8;
}
@media (max-width: 768px) {
  .work-orders-container[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .work-orders-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    font-size: 1.875rem;
  }
  .work-orders-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {
    gap: 1rem;
  }
  .work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%]   .analytics-placeholder[_ngcontent-%COMP%] {
    padding: 2rem 1rem;
  }
  .work-orders-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .work-orders-content[_ngcontent-%COMP%]   .create-button-container[_ngcontent-%COMP%] {
    margin-bottom: 1.5rem;
  }
  .modal-overlay[_ngcontent-%COMP%] {
    padding: 0.5rem;
  }
  .modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
/*# sourceMappingURL=work-orders.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-work-orders", standalone: false, template: `<div class="work-orders-container">\r
  <!-- Success Message -->\r
  <div *ngIf="showSuccessMessage" class="success-message">\r
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
    </svg>\r
    <span>Work order created successfully!</span>\r
  </div>\r
\r
  <!-- Error Message -->\r
  <div *ngIf="showErrorMessage" class="error-message">\r
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
    </svg>\r
    <span>{{ errorMessage }}</span>\r
  </div>\r
\r
  <div class="header">\r
    <h1>Work Order Management</h1>\r
    <p>Streamline maintenance workflows with intelligent work order tracking and scheduling.</p>\r
  </div>\r
\r
  <div class="tabs">\r
    <div class="tab" \r
         [class.active]="activeTab === 'work-orders'"\r
         (click)="setActiveTab('work-orders')">\r
      Work Orders\r
    </div>\r
    <div class="tab" \r
         [class.active]="activeTab === 'analytics'"\r
         (click)="setActiveTab('analytics')">\r
      Analytics\r
    </div>\r
  </div>\r
\r
  <div class="content">\r
    <div class="work-orders-content" [class.active]="activeTab === 'work-orders'">\r
      <app-work-order-stats></app-work-order-stats>\r
      \r
      <div class="create-button-container">\r
        <button class="create-button" (click)="openCreateModal()">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
          </svg>\r
          Create Work Order\r
        </button>\r
      </div>\r
      \r
      <app-work-order-filters (filtersChanged)="onFiltersChanged($event)"></app-work-order-filters>\r
      <app-work-order-list></app-work-order-list>\r
    </div>\r
\r
    <div class="analytics-content" [class.active]="activeTab === 'analytics'">\r
      <app-work-order-analytics></app-work-order-analytics>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Create Work Order Modal -->\r
<div class="modal-overlay" *ngIf="showCreateModal" (click)="closeCreateModal($event)">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <svg class="header-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
      </svg>\r
      <h2>Create New Work Order</h2>\r
    </div>\r
    \r
    <div class="modal-body">\r
      <form [formGroup]="workOrderForm" (ngSubmit)="onSubmit()">\r
        <!-- Basic Information Section -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <svg class="section-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
            </svg>\r
            <h3>Basic Information</h3>\r
          </div>\r
          \r
          <div class="form-row full-width">\r
            <div class="form-group" [class.error]="hasFieldError('title')">\r
              <label>Title <span class="required">*</span></label>\r
              <input \r
                type="text" \r
                formControlName="title" \r
                placeholder="Enter work order title"\r
                [class.error-input]="hasFieldError('title')">\r
              <div class="field-error" *ngIf="hasFieldError('title')">\r
                {{ getFieldError('title') }}\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-group">\r
              <label>Priority</label>\r
              <select formControlName="priority">\r
                <option value="low">Low</option>\r
                <option value="medium" selected>Medium</option>\r
                <option value="high">High</option>\r
                <option value="critical">Critical</option>\r
              </select>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label>Due Date</label>\r
              <input \r
                type="datetime-local" \r
                formControlName="due_date">\r
            </div>\r
          </div>\r
          \r
          <div class="form-row full-width">\r
            <div class="form-group">\r
              <label>Description</label>\r
              <textarea \r
                formControlName="description" \r
                placeholder="Enter work order description"></textarea>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label>Estimated Hours</label>\r
              <input\r
                type="number"\r
                formControlName="estimated_hours"\r
                placeholder="0"\r
                min="0"\r
                step="0.5">\r
            </div>\r
\r
            <div class="form-group">\r
              <label>Notes</label>\r
              <textarea\r
                formControlName="notes"\r
                placeholder="Additional notes"></textarea>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <!-- Assignment & Location Section -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <svg class="section-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
            </svg>\r
            <h3>Assignment & Location</h3>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-group" [class.error]="hasFieldError('asset_id')">\r
              <label>Asset ID (Optional)</label>\r
              <input\r
                type="number"\r
                formControlName="asset_id"\r
                placeholder="Enter asset ID"\r
                [class.error-input]="hasFieldError('asset_id')">\r
              <div class="field-error" *ngIf="hasFieldError('asset_id')">\r
                {{ getFieldError('asset_id') }}\r
              </div>\r
              <div class="field-help">\r
                <small>Enter the ID of an existing asset from your assets list</small>\r
              </div>\r
            </div>\r
            \r
            <div class="form-group" [class.error]="hasFieldError('location_id')">\r
              <label>Location ID (Optional)</label>\r
              <input\r
                type="number"\r
                formControlName="location_id"\r
                placeholder="Enter location ID"\r
                [class.error-input]="hasFieldError('location_id')">\r
              <div class="field-error" *ngIf="hasFieldError('location_id')">\r
                {{ getFieldError('location_id') }}\r
              </div>\r
              <div class="field-help">\r
                <small>Enter the ID of an existing location from your locations list</small>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-group" [class.error]="hasFieldError('assigned_to')">\r
              <label>Assign To User ID (Optional)</label>\r
              <input\r
                type="number"\r
                formControlName="assigned_to"\r
                placeholder="Enter user ID"\r
                [class.error-input]="hasFieldError('assigned_to')">\r
              <div class="field-error" *ngIf="hasFieldError('assigned_to')">\r
                {{ getFieldError('assigned_to') }}\r
              </div>\r
              <div class="field-help">\r
                <small>Enter the ID of an existing user from your team members</small>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </form>\r
    </div>\r
    \r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" (click)="closeCreateModal()" [disabled]="isLoading">Cancel</button>\r
      <button class="btn btn-primary" (click)="onSubmit()" [disabled]="isLoading">\r
        <svg *ngIf="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
        {{ isLoading ? 'Creating...' : 'Create Work Order' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: [`@charset "UTF-8";

/* src/app/work-orders/work-orders.component.scss */
.work-orders-container {
  padding: 2rem;
  background-color: #f8fafc;
  min-height: 100vh;
}
.work-orders-container .header {
  margin-bottom: 2rem;
}
.work-orders-container .header h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}
.work-orders-container .header p {
  font-size: 1.125rem;
  color: #64748b;
  font-weight: 400;
}
.work-orders-container .tabs {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
}
.work-orders-container .tabs .tab {
  padding: 0.75rem 0;
  font-size: 1.125rem;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease;
}
.work-orders-container .tabs .tab.active {
  color: #2563eb;
  font-weight: 600;
  border-bottom-color: #2563eb;
}
.work-orders-container .tabs .tab:hover {
  color: #1e40af;
}
.work-orders-container .content .analytics-content {
  display: none;
}
.work-orders-container .content .analytics-content.active {
  display: block;
}
.work-orders-container .content .analytics-content .analytics-placeholder {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  border: 2px dashed #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}
.work-orders-container .content .analytics-content .analytics-placeholder h3 {
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.work-orders-container .content .analytics-content .analytics-placeholder p {
  color: #6b7280;
  margin: 0;
  font-size: 1rem;
}
.work-orders-container .content .work-orders-content {
  display: none;
}
.work-orders-container .content .work-orders-content.active {
  display: block;
}
.work-orders-container .content .work-orders-content .create-button-container {
  text-align: right;
  margin-bottom: 2rem;
}
.work-orders-container .content .work-orders-content .create-button-container .create-button {
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.875rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.work-orders-container .content .work-orders-content .create-button-container .create-button:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.work-orders-container .content .work-orders-content .create-button-container .create-button:active {
  transform: translateY(0);
}
.work-orders-container .content .work-orders-content .create-button-container .create-button .icon {
  font-size: 0.875rem;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}
.modal-overlay .modal {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.modal-overlay .modal .modal-header {
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.modal-overlay .modal .modal-header .header-icon {
  color: #2563eb;
  font-size: 1.25rem;
}
.modal-overlay .modal .modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}
.modal-overlay .modal .modal-body {
  padding: 1.5rem;
}
.modal-overlay .modal .modal-body .form-section {
  margin-bottom: 2rem;
}
.modal-overlay .modal .modal-body .form-section .section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.modal-overlay .modal .modal-body .form-section .section-header .section-icon {
  font-size: 1rem;
}
.modal-overlay .modal .modal-body .form-section .section-header h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
}
.modal-overlay .modal .modal-body .form-section .form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
.modal-overlay .modal .modal-body .form-section .form-row.full-width {
  grid-template-columns: 1fr;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group label .required {
  color: #dc2626;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group input,
.modal-overlay .modal .modal-body .form-section .form-row .form-group select,
.modal-overlay .modal .modal-body .form-section .form-row .form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group input:focus,
.modal-overlay .modal .modal-body .form-section .form-row .form-group select:focus,
.modal-overlay .modal .modal-body .form-section .form-row .form-group textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group input::placeholder,
.modal-overlay .modal .modal-body .form-section .form-row .form-group select::placeholder,
.modal-overlay .modal .modal-body .form-section .form-row .form-group textarea::placeholder {
  color: #9ca3af;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group input.error-input,
.modal-overlay .modal .modal-body .form-section .form-row .form-group select.error-input,
.modal-overlay .modal .modal-body .form-section .form-row .form-group textarea.error-input {
  border-color: #dc2626;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group input.error-input:focus,
.modal-overlay .modal .modal-body .form-section .form-row .form-group select.error-input:focus,
.modal-overlay .modal .modal-body .form-section .form-row .form-group textarea.error-input:focus {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group textarea {
  resize: vertical;
  min-height: 80px;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group input[type=datetime-local]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group input[type=datetime-local]:hover::-webkit-calendar-picker-indicator {
  opacity: 1;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group.error label {
  color: #dc2626;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group .field-error {
  color: #dc2626;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group .field-error::before {
  content: "\\26a0";
  font-size: 0.875rem;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group .field-help {
  margin-top: 0.25rem;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group .field-help small {
  color: #6b7280;
  font-size: 0.75rem;
  font-style: italic;
}
.modal-overlay .modal .modal-footer {
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
.modal-overlay .modal .modal-footer .btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}
.modal-overlay .modal .modal-footer .btn.btn-secondary {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.modal-overlay .modal .modal-footer .btn.btn-secondary:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}
.modal-overlay .modal .modal-footer .btn.btn-primary {
  background: #2563eb;
  color: white;
}
.modal-overlay .modal .modal-footer .btn.btn-primary:hover {
  background: #1d4ed8;
}
@media (max-width: 768px) {
  .work-orders-container {
    padding: 1rem;
  }
  .work-orders-container .header h1 {
    font-size: 1.875rem;
  }
  .work-orders-container .header p {
    font-size: 1rem;
  }
  .work-orders-container .tabs {
    gap: 1rem;
  }
  .work-orders-container .tabs .tab {
    font-size: 1rem;
  }
  .work-orders-container .content .analytics-content .analytics-placeholder {
    padding: 2rem 1rem;
  }
  .work-orders-container .content .work-orders-content .create-button-container {
    margin-bottom: 1.5rem;
  }
  .modal-overlay {
    padding: 0.5rem;
  }
  .modal-overlay .modal .modal-body {
    padding: 1rem;
  }
  .modal-overlay .modal .modal-body .form-section .form-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
/*# sourceMappingURL=work-orders.component.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: WorkOrderService }], { workOrderList: [{
    type: ViewChild,
    args: [WorkOrderListComponent]
  }], workOrderStats: [{
    type: ViewChild,
    args: [WorkOrderStatsComponent]
  }], workOrderAnalytics: [{
    type: ViewChild,
    args: [WorkOrderAnalyticsComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrdersComponent, { className: "WorkOrdersComponent", filePath: "src/app/work-orders/work-orders.component.ts", lineNumber: 15 });
})();

// src/app/work-orders/components/work-order-preview/work-order-preview.component.ts
function WorkOrderPreviewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "circle", 9)(4, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6, "Loading work order...");
    \u0275\u0275elementEnd()()();
  }
}
function WorkOrderPreviewComponent_div_2__svg_path_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 27);
  }
}
function WorkOrderPreviewComponent_div_2__svg_path_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 78);
  }
}
function WorkOrderPreviewComponent_div_2__svg_path_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 79);
  }
}
function WorkOrderPreviewComponent_div_2_div_122_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 84);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 16);
    \u0275\u0275element(10, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comment_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(comment_r3.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r3.text);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 3, comment_r3.timestamp, "MMM d, y, h:mm a"));
  }
}
function WorkOrderPreviewComponent_div_2_div_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275template(1, WorkOrderPreviewComponent_div_2_div_122_div_1_Template, 14, 6, "div", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.workOrder.comments);
  }
}
function WorkOrderPreviewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "a", 15);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_2_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 16);
    \u0275\u0275element(5, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Back to Work Orders ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 18)(8, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 20);
    \u0275\u0275element(10, "path", 21)(11, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 23)(13, "h1");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 25)(18, "button", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 16);
    \u0275\u0275element(20, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 16);
    \u0275\u0275element(24, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Edit ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 30)(27, "div", 31)(28, "div", 32)(29, "h3", 33);
    \u0275\u0275text(30, "Work Order Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 34)(32, "label");
    \u0275\u0275text(33, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 34)(37, "label");
    \u0275\u0275text(38, "Assigned To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 16);
    \u0275\u0275element(41, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 32)(45, "h3", 33);
    \u0275\u0275text(46, "Time Tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 37);
    \u0275\u0275text(48, "Track time spent on this work order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 38)(50, "div", 39)(51, "label");
    \u0275\u0275text(52, "Task Description (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function WorkOrderPreviewComponent_div_2_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentSession.description, $event) || (ctx_r1.currentSession.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 39)(55, "label");
    \u0275\u0275text(56, "Hourly Rate (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function WorkOrderPreviewComponent_div_2_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentSession.hourlyRate, $event) || (ctx_r1.currentSession.hourlyRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "button", 42);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_2_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isTimerRunning ? ctx_r1.stopTimer() : ctx_r1.startTimer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 16);
    \u0275\u0275template(60, WorkOrderPreviewComponent_div_2__svg_path_60_Template, 1, 0, "path", 43)(61, WorkOrderPreviewComponent_div_2__svg_path_61_Template, 1, 0, "path", 44)(62, WorkOrderPreviewComponent_div_2__svg_path_62_Template, 1, 0, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(64, "div", 46)(65, "div", 47)(66, "span", 48);
    \u0275\u0275text(67, "3:04 Total Time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 49)(69, "span", 50);
    \u0275\u0275text(70, "$0 Total Cost");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 51)(72, "h4");
    \u0275\u0275text(73, "Time Log History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 52)(75, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(76, "svg", 16);
    \u0275\u0275element(77, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(78, "span");
    \u0275\u0275text(79, "omar@omeda.io");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(81, "svg", 16);
    \u0275\u0275element(82, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(83, "span");
    \u0275\u0275text(84, "Aug 11, 01:09 PM 3:04");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(85, "div", 32)(86, "h3", 33);
    \u0275\u0275text(87, "Status Update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "p", 37);
    \u0275\u0275text(89, "Update the work order status and add notes about the progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 56)(91, "label");
    \u0275\u0275text(92, "Current Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(94, "svg", 16);
    \u0275\u0275element(95, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(97, "div", 58)(98, "label");
    \u0275\u0275text(99, "Update Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "select", 59);
    \u0275\u0275listener("change", function WorkOrderPreviewComponent_div_2_Template_select_change_100_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusChange($event));
    });
    \u0275\u0275elementStart(101, "option", 60);
    \u0275\u0275text(102, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "option", 61);
    \u0275\u0275text(104, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "option", 62);
    \u0275\u0275text(106, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "option", 63);
    \u0275\u0275text(108, "Cancelled");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(109, "div", 32)(110, "h3", 33);
    \u0275\u0275text(111, "Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "p", 37);
    \u0275\u0275text(113, "Activity log and comments for this work order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "button", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(115, "svg", 16);
    \u0275\u0275element(116, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(117, " + Add Comment ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(118, "form", 66);
    \u0275\u0275listener("ngSubmit", function WorkOrderPreviewComponent_div_2_Template_form_ngSubmit_118_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addComment());
    });
    \u0275\u0275element(119, "textarea", 67);
    \u0275\u0275elementStart(120, "button", 68);
    \u0275\u0275text(121, "Add Comment");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(122, WorkOrderPreviewComponent_div_2_div_122_Template, 2, 1, "div", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 70)(124, "div", 32)(125, "h3", 33);
    \u0275\u0275text(126, "Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 71);
    \u0275\u0275element(128, "div", 72);
    \u0275\u0275elementStart(129, "div", 73)(130, "label");
    \u0275\u0275text(131, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "p");
    \u0275\u0275text(133);
    \u0275\u0275pipe(134, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(135, "div", 71);
    \u0275\u0275element(136, "div", 72);
    \u0275\u0275elementStart(137, "div", 73)(138, "label");
    \u0275\u0275text(139, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "p");
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(143, "div", 71);
    \u0275\u0275element(144, "div", 72);
    \u0275\u0275elementStart(145, "div", 73)(146, "label");
    \u0275\u0275text(147, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "p");
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(151, "div", 32)(152, "h3", 33);
    \u0275\u0275text(153, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "div", 74)(155, "button", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(156, "svg", 16);
    \u0275\u0275element(157, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, " Edit Work Order ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(159, "button", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(160, "svg", 16);
    \u0275\u0275element(161, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(162, " View Costs ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(163, "button", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(164, "svg", 16);
    \u0275\u0275element(165, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(166, " Add Parts ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Work Order #", ctx_r1.workOrder == null ? null : ctx_r1.workOrder.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass((ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status) || "open"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel((ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status) || "open"), " ");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate((ctx_r1.workOrder == null ? null : ctx_r1.workOrder.description) || "No description provided");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.workOrder && ctx_r1.workOrder.assigned_to ? "User ID: " + ctx_r1.workOrder.assigned_to : "Unassigned");
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentSession.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentSession.hourlyRate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.isTimerRunning ? "stop-button" : "start-button");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isTimerRunning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTimerRunning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTimerRunning);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isTimerRunning ? "Stop Timer" : "Start Timer", " ");
    \u0275\u0275advance(30);
    \u0275\u0275classMap(ctx_r1.getStatusClass((ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status) || "open"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel((ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status) || "open"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("selected", (ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status) === "open");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", (ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status) === "in-progress");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", (ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status) === "completed");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", (ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status) === "cancelled");
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r1.commentForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.workOrder && ctx_r1.workOrder.comments && ctx_r1.workOrder.comments.length > 0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(134, 28, ctx_r1.workOrder == null ? null : ctx_r1.workOrder.created_at, "MMMM d, y 'at' h:mm a"), " by ", ctx_r1.workOrder && ctx_r1.workOrder.created_by ? ctx_r1.workOrder.created_by.first_name + " " + ctx_r1.workOrder.created_by.last_name : "Unknown", "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(142, 31, ctx_r1.workOrder == null ? null : ctx_r1.workOrder.updated_at, "MMMM d, y 'at' h:mm a"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.workOrder && ctx_r1.workOrder.due_date ? \u0275\u0275pipeBind2(150, 34, ctx_r1.workOrder.due_date, "MMMM d, y") : "Not set");
  }
}
var WorkOrderPreviewComponent = class _WorkOrderPreviewComponent {
  route;
  router;
  workOrderService;
  fb;
  workOrder = null;
  isLoading = true;
  isTimerRunning = false;
  currentSession = {
    description: "",
    hourlyRate: 0
  };
  commentForm;
  subscription = new Subscription();
  constructor(route, router, workOrderService, fb) {
    this.route = route;
    this.router = router;
    this.workOrderService = workOrderService;
    this.fb = fb;
    this.commentForm = this.fb.group({
      comment: ["", Validators.required]
    });
  }
  ngOnInit() {
    const workOrderId = this.route.snapshot.paramMap.get("id");
    if (workOrderId) {
      this.loadWorkOrder(workOrderId);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  loadWorkOrder(id) {
    this.isLoading = true;
    this.subscription.add(this.workOrderService.getWorkOrderById(id).subscribe({
      next: (workOrder) => {
        this.workOrder = workOrder;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading work order:", error);
        this.isLoading = false;
      }
    }));
  }
  goBack() {
    this.router.navigate(["/work-orders"]);
  }
  startTimer() {
    this.isTimerRunning = true;
  }
  stopTimer() {
    this.isTimerRunning = false;
  }
  addComment() {
    if (this.commentForm.valid && this.workOrder) {
      const newComment = {
        id: Date.now().toString(),
        text: this.commentForm.get("comment")?.value,
        author: "omar@omeda.io",
        // This would come from auth service
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      if (!this.workOrder.comments) {
        this.workOrder.comments = [];
      }
      this.workOrder.comments.unshift(newComment);
      this.commentForm.reset();
    }
  }
  updateStatus(newStatus) {
    if (this.workOrder) {
      this.workOrder.status = newStatus;
    }
  }
  onStatusChange(event) {
    const target = event.target;
    if (target && target.value) {
      this.updateStatus(target.value);
    }
  }
  getStatusClass(status) {
    const statusMap = {
      "open": "status-open",
      "in-progress": "status-in-progress",
      "completed": "status-completed",
      "cancelled": "status-cancelled"
    };
    return statusMap[status] || "status-open";
  }
  getStatusLabel(status) {
    const statusMap = {
      "open": "Open",
      "in-progress": "In Progress",
      "completed": "Completed",
      "cancelled": "Cancelled"
    };
    return statusMap[status] || status;
  }
  static \u0275fac = function WorkOrderPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderPreviewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WorkOrderService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderPreviewComponent, selectors: [["app-work-order-preview"]], standalone: false, decls: 6, vars: 2, consts: [[1, "work-order-preview-container"], ["class", "loading-state", 4, "ngIf"], ["class", "work-order-content", 4, "ngIf"], [1, "voice-input-button"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"], [1, "loading-state"], [1, "flex", "items-center", "justify-center", "py-8"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "ml-2", "text-gray-600"], [1, "work-order-content"], [1, "header-section"], [1, "back-link"], [1, "back-button", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "title-section"], [1, "title-content"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "wrench-icon", "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "title-text"], [1, "work-order-id"], [1, "action-buttons"], [1, "status-button"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "edit-button"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "content-grid"], [1, "left-column"], [1, "info-card"], [1, "card-title"], [1, "detail-item"], [1, "assignee-info"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "card-subtitle"], [1, "current-session"], [1, "form-group"], ["type", "text", "placeholder", "What are you working on?", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "0", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "timer-button", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z", 4, "ngIf"], [1, "time-summary"], [1, "total-time"], [1, "time-label"], [1, "total-cost"], [1, "cost-label"], [1, "time-log-history"], [1, "time-log-entry"], [1, "log-info"], [1, "log-time"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "status-section"], [1, "current-status"], [1, "status-update"], [1, "form-select", 3, "change"], ["value", "open", 3, "selected"], ["value", "in-progress", 3, "selected"], ["value", "completed", 3, "selected"], ["value", "cancelled", 3, "selected"], [1, "add-comment-button"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "comment-form", 3, "ngSubmit", "formGroup"], ["formControlName", "comment", "placeholder", "Write a comment about the work order progress...", 1, "comment-textarea"], ["type", "submit", 1, "submit-comment-button"], ["class", "comments-list", 4, "ngIf"], [1, "right-column"], [1, "timeline-item"], [1, "timeline-dot"], [1, "timeline-content"], [1, "quick-actions"], [1, "action-button"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"], [1, "comments-list"], ["class", "comment-entry", 4, "ngFor", "ngForOf"], [1, "comment-entry"], [1, "comment-info"], [1, "comment-text"], [1, "comment-time"]], template: function WorkOrderPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, WorkOrderPreviewComponent_div_1_Template, 7, 0, "div", 1)(2, WorkOrderPreviewComponent_div_2_Template, 167, 37, "div", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.workOrder);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgModel, DatePipe], styles: ["\n\n.work-order-preview-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .wrench-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  flex-shrink: 0;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   .work-order-id[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button.status-open[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button.status-in-progress[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button.status-completed[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .assignee-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .assignee-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button.start-button[_ngcontent-%COMP%] {\n  background-color: #10b981;\n  color: white;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button.start-button[_ngcontent-%COMP%]:hover {\n  background-color: #059669;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button.stop-button[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button.stop-button[_ngcontent-%COMP%]:hover {\n  background-color: #dc2626;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-time[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-cost[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-time[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-time[_ngcontent-%COMP%]   .cost-label[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-cost[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-cost[_ngcontent-%COMP%]   .cost-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%]   .log-info[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%]   .log-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%]   .log-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%]   .log-time[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status.status-open[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status.status-open[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status.status-in-progress[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status.status-in-progress[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status.status-completed[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status.status-completed[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status.status-cancelled[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  cursor: pointer;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .add-comment-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .add-comment-button[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .comment-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  resize: vertical;\n  min-height: 100px;\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .comment-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .submit-comment-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .submit-comment-button[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-time[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  background-color: #2563eb;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.work-order-content[_ngcontent-%COMP%]   .voice-input-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3rem;\n  height: 3rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.work-order-content[_ngcontent-%COMP%]   .voice-input-button[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n  transform: scale(1.05);\n}\n@media (max-width: 768px) {\n  .work-order-content[_ngcontent-%COMP%]   .voice-input-button[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .work-order-preview-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .work-order-preview-container[_ngcontent-%COMP%]   .work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .work-order-preview-container[_ngcontent-%COMP%]   .work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .work-order-preview-container[_ngcontent-%COMP%]   .work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .work-order-preview-container[_ngcontent-%COMP%]   .work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=work-order-preview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-preview", standalone: false, template: `<div class="work-order-preview-container">\r
  <!-- Loading State -->\r
  <div *ngIf="isLoading" class="loading-state">\r
    <div class="flex items-center justify-center py-8">\r
      <svg class="animate-spin h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
      </svg>\r
      <span class="ml-2 text-gray-600">Loading work order...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Work Order Content -->\r
  <div *ngIf="!isLoading && workOrder" class="work-order-content">\r
    <!-- Back Navigation and Header -->\r
    <div class="header-section">\r
      <div class="back-link">\r
        <a (click)="goBack()" class="back-button">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          Back to Work Orders\r
        </a>\r
      </div>\r
      \r
      <div class="title-section">\r
        <div class="title-content">\r
          <svg class="wrench-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
          </svg>\r
          <div class="title-text">\r
            <h1>{{ workOrder?.title }}</h1>\r
            <p class="work-order-id">Work Order #{{ workOrder?.id }}</p>\r
          </div>\r
        </div>\r
        \r
        <div class="action-buttons">\r
          <button class="status-button" [class]="getStatusClass(workOrder?.status || 'open')">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
            {{ getStatusLabel(workOrder?.status || 'open') }}\r
          </button>\r
          <button class="edit-button">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
            </svg>\r
            Edit\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Main Content Grid -->\r
    <div class="content-grid">\r
      <!-- Left Column -->\r
      <div class="left-column">\r
        <!-- Work Order Details Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Work Order Details</h3>\r
          <div class="detail-item">\r
            <label>Description</label>\r
            <p>{{ workOrder?.description || 'No description provided' }}</p>\r
          </div>\r
          <div class="detail-item">\r
            <label>Assigned To</label>\r
            <div class="assignee-info">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
              </svg>\r
              <span>{{ workOrder && workOrder.assigned_to ? 'User ID: ' + workOrder.assigned_to : 'Unassigned' }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Time Tracking Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Time Tracking</h3>\r
          <p class="card-subtitle">Track time spent on this work order</p>\r
          \r
          <div class="current-session">\r
            <div class="form-group">\r
              <label>Task Description (Optional)</label>\r
              <input \r
                type="text" \r
                [(ngModel)]="currentSession.description"\r
                placeholder="What are you working on?"\r
                class="form-input">\r
            </div>\r
            \r
            <div class="form-group">\r
              <label>Hourly Rate (Optional)</label>\r
              <input \r
                type="number" \r
                [(ngModel)]="currentSession.hourlyRate"\r
                placeholder="0"\r
                class="form-input">\r
            </div>\r
            \r
            <button \r
              (click)="isTimerRunning ? stopTimer() : startTimer()"\r
              [class]="isTimerRunning ? 'stop-button' : 'start-button'"\r
              class="timer-button">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path *ngIf="!isTimerRunning" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                <path *ngIf="isTimerRunning" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                <path *ngIf="isTimerRunning" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path>\r
              </svg>\r
              {{ isTimerRunning ? 'Stop Timer' : 'Start Timer' }}\r
            </button>\r
          </div>\r
          \r
          <div class="time-summary">\r
            <div class="total-time">\r
              <span class="time-label">3:04 Total Time</span>\r
            </div>\r
            <div class="total-cost">\r
              <span class="cost-label">$0 Total Cost</span>\r
            </div>\r
          </div>\r
          \r
          <div class="time-log-history">\r
            <h4>Time Log History</h4>\r
            <div class="time-log-entry">\r
              <div class="log-info">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
                </svg>\r
                <span>omar&#64;omeda.io</span>\r
              </div>\r
              <div class="log-time">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                </svg>\r
                <span>Aug 11, 01:09 PM 3:04</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Status Update Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Status Update</h3>\r
          <p class="card-subtitle">Update the work order status and add notes about the progress</p>\r
          \r
          <div class="status-section">\r
            <label>Current Status:</label>\r
            <div class="current-status" [class]="getStatusClass(workOrder?.status || 'open')">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
              </svg>\r
              {{ getStatusLabel(workOrder?.status || 'open') }}\r
            </div>\r
          </div>\r
          \r
          <div class="status-update">\r
            <label>Update Status:</label>\r
            <select (change)="onStatusChange($event)" class="form-select">\r
              <option value="open" [selected]="workOrder?.status === 'open'">Open</option>\r
              <option value="in-progress" [selected]="workOrder?.status === 'in-progress'">In Progress</option>\r
              <option value="completed" [selected]="workOrder?.status === 'completed'">Completed</option>\r
              <option value="cancelled" [selected]="workOrder?.status === 'cancelled'">Cancelled</option>\r
            </select>\r
          </div>\r
        </div>\r
\r
        <!-- Comments Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Comments</h3>\r
          <p class="card-subtitle">Activity log and comments for this work order</p>\r
          \r
          <button class="add-comment-button">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
            </svg>\r
            + Add Comment\r
          </button>\r
          \r
          <form [formGroup]="commentForm" (ngSubmit)="addComment()" class="comment-form">\r
            <textarea \r
              formControlName="comment"\r
              placeholder="Write a comment about the work order progress..."\r
              class="comment-textarea"></textarea>\r
            <button type="submit" class="submit-comment-button">Add Comment</button>\r
          </form>\r
          \r
          <div class="comments-list" *ngIf="workOrder && workOrder.comments && workOrder.comments.length > 0">\r
            <div *ngFor="let comment of workOrder.comments" class="comment-entry">\r
              <div class="comment-info">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
                </svg>\r
                <span>{{ comment.author }}</span>\r
              </div>\r
              <div class="comment-text">{{ comment.text }}</div>\r
              <div class="comment-time">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                </svg>\r
                <span>{{ comment.timestamp | date:'MMM d, y, h:mm a' }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Right Column -->\r
      <div class="right-column">\r
        <!-- Timeline Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Timeline</h3>\r
          <div class="timeline-item">\r
            <div class="timeline-dot"></div>\r
            <div class="timeline-content">\r
              <label>Created</label>\r
              <p>{{ workOrder?.created_at | date:'MMMM d, y \\'at\\' h:mm a' }} by {{ workOrder && workOrder.created_by ? (workOrder.created_by.first_name + ' ' + workOrder.created_by.last_name) : 'Unknown' }}</p>\r
            </div>\r
          </div>\r
          <div class="timeline-item">\r
            <div class="timeline-dot"></div>\r
            <div class="timeline-content">\r
              <label>Last Updated</label>\r
              <p>{{ workOrder?.updated_at | date:'MMMM d, y \\'at\\' h:mm a' }}</p>\r
            </div>\r
          </div>\r
          <div class="timeline-item">\r
            <div class="timeline-dot"></div>\r
            <div class="timeline-content">\r
              <label>Due Date</label>\r
              <p>{{ workOrder && workOrder.due_date ? (workOrder.due_date | date:'MMMM d, y') : 'Not set' }}</p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Quick Actions Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Quick Actions</h3>\r
          <div class="quick-actions">\r
            <button class="action-button">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
              </svg>\r
              Edit Work Order\r
            </button>\r
            <button class="action-button">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
              </svg>\r
              View Costs\r
            </button>\r
            <button class="action-button">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r
              </svg>\r
              Add Parts\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Voice Input Button -->\r
  <button class="voice-input-button">\r
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>\r
    </svg>\r
  </button>\r
</div>\r
`, styles: ["/* src/app/work-orders/components/work-order-preview/work-order-preview.component.scss */\n.work-order-preview-container {\n  padding: 1.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n}\n.loading-state {\n  text-align: center;\n  padding: 2rem;\n}\n.work-order-content .header-section {\n  margin-bottom: 2rem;\n}\n.work-order-content .header-section .back-link {\n  margin-bottom: 1rem;\n}\n.work-order-content .header-section .back-link .back-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.work-order-content .header-section .back-link .back-button:hover {\n  color: #374151;\n}\n.work-order-content .header-section .title-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.work-order-content .header-section .title-section .title-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.work-order-content .header-section .title-section .title-content .wrench-icon {\n  color: #2563eb;\n  flex-shrink: 0;\n}\n.work-order-content .header-section .title-section .title-content .title-text h1 {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.work-order-content .header-section .title-section .title-content .title-text .work-order-id {\n  margin: 0;\n  font-size: 1rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.work-order-content .header-section .title-section .action-buttons {\n  display: flex;\n  gap: 0.75rem;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button.status-open {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button.status-in-progress {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button.status-completed {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button.status-cancelled {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.work-order-content .header-section .title-section .action-buttons .edit-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.work-order-content .header-section .title-section .action-buttons .edit-button:hover {\n  background-color: #1d4ed8;\n}\n.work-order-content .content-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .work-order-content .content-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.work-order-content .content-grid .left-column,\n.work-order-content .content-grid .right-column {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.work-order-content .content-grid .info-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.work-order-content .content-grid .info-card .card-title {\n  margin: 0 0 1rem 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n}\n.work-order-content .content-grid .info-card .card-subtitle {\n  margin: 0 0 1.5rem 0;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.work-order-content .content-grid .info-card .detail-item {\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .detail-item label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .detail-item p {\n  margin: 0;\n  color: #6b7280;\n}\n.work-order-content .content-grid .info-card .detail-item .assignee-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n}\n.work-order-content .content-grid .info-card .detail-item .assignee-info svg {\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .current-session {\n  margin-bottom: 1.5rem;\n}\n.work-order-content .content-grid .info-card .current-session .form-group {\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .current-session .form-group label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .current-session .form-group .form-input {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.work-order-content .content-grid .info-card .current-session .form-group .form-input:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content .content-grid .info-card .current-session .timer-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.work-order-content .content-grid .info-card .current-session .timer-button.start-button {\n  background-color: #10b981;\n  color: white;\n}\n.work-order-content .content-grid .info-card .current-session .timer-button.start-button:hover {\n  background-color: #059669;\n}\n.work-order-content .content-grid .info-card .current-session .timer-button.stop-button {\n  background-color: #ef4444;\n  color: white;\n}\n.work-order-content .content-grid .info-card .current-session .timer-button.stop-button:hover {\n  background-color: #dc2626;\n}\n.work-order-content .content-grid .info-card .time-summary {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n}\n.work-order-content .content-grid .info-card .time-summary .total-time,\n.work-order-content .content-grid .info-card .time-summary .total-cost {\n  text-align: center;\n}\n.work-order-content .content-grid .info-card .time-summary .total-time .time-label,\n.work-order-content .content-grid .info-card .time-summary .total-time .cost-label,\n.work-order-content .content-grid .info-card .time-summary .total-cost .time-label,\n.work-order-content .content-grid .info-card .time-summary .total-cost .cost-label {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.work-order-content .content-grid .info-card .time-log-history h4 {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n}\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry .log-info,\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry .log-time {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry .log-info svg,\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry .log-time svg {\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .status-section,\n.work-order-content .content-grid .info-card .status-update {\n  margin-bottom: 1.5rem;\n}\n.work-order-content .content-grid .info-card .status-section label,\n.work-order-content .content-grid .info-card .status-update label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .status-section .current-status,\n.work-order-content .content-grid .info-card .status-update .current-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.work-order-content .content-grid .info-card .status-section .current-status.status-open,\n.work-order-content .content-grid .info-card .status-update .current-status.status-open {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.work-order-content .content-grid .info-card .status-section .current-status.status-in-progress,\n.work-order-content .content-grid .info-card .status-update .current-status.status-in-progress {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.work-order-content .content-grid .info-card .status-section .current-status.status-completed,\n.work-order-content .content-grid .info-card .status-update .current-status.status-completed {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.work-order-content .content-grid .info-card .status-section .current-status.status-cancelled,\n.work-order-content .content-grid .info-card .status-update .current-status.status-cancelled {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.work-order-content .content-grid .info-card .status-section .form-select,\n.work-order-content .content-grid .info-card .status-update .form-select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  cursor: pointer;\n}\n.work-order-content .content-grid .info-card .status-section .form-select:focus,\n.work-order-content .content-grid .info-card .status-update .form-select:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content .content-grid .info-card .add-comment-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .add-comment-button:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .comment-form {\n  margin-bottom: 1.5rem;\n}\n.work-order-content .content-grid .info-card .comment-form .comment-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  resize: vertical;\n  min-height: 100px;\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .comment-form .comment-textarea:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content .content-grid .info-card .comment-form .submit-comment-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.work-order-content .content-grid .info-card .comment-form .submit-comment-button:hover {\n  background-color: #1d4ed8;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry {\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-info svg {\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-text {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-time {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-time svg {\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .timeline-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.work-order-content .content-grid .info-card .timeline-item .timeline-dot {\n  width: 0.75rem;\n  height: 0.75rem;\n  background-color: #2563eb;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n}\n.work-order-content .content-grid .info-card .timeline-item .timeline-content {\n  flex: 1;\n}\n.work-order-content .content-grid .info-card .timeline-item .timeline-content label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n.work-order-content .content-grid .info-card .timeline-item .timeline-content p {\n  margin: 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.work-order-content .content-grid .info-card .quick-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.work-order-content .content-grid .info-card .quick-actions .action-button {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n}\n.work-order-content .content-grid .info-card .quick-actions .action-button:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .quick-actions .action-button svg {\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.work-order-content .voice-input-button {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3rem;\n  height: 3rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.work-order-content .voice-input-button:hover {\n  background-color: #1d4ed8;\n  transform: scale(1.05);\n}\n@media (max-width: 768px) {\n  .work-order-content .voice-input-button {\n    bottom: 1rem;\n    right: 1rem;\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .work-order-preview-container {\n    padding: 1rem;\n  }\n  .work-order-preview-container .work-order-content .header-section .title-section {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .work-order-preview-container .work-order-content .header-section .title-section .action-buttons {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .work-order-preview-container .work-order-content .content-grid {\n    gap: 1rem;\n  }\n  .work-order-preview-container .work-order-content .content-grid .info-card {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=work-order-preview.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: WorkOrderService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderPreviewComponent, { className: "WorkOrderPreviewComponent", filePath: "src/app/work-orders/components/work-order-preview/work-order-preview.component.ts", lineNumber: 13 });
})();

// src/app/work-orders/work-orders-routing.module.ts
var routes = [
  {
    path: "",
    component: WorkOrdersComponent
  },
  {
    path: ":id",
    component: WorkOrderPreviewComponent
  }
];
var WorkOrdersRoutingModule = class _WorkOrdersRoutingModule {
  static \u0275fac = function WorkOrdersRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrdersRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WorkOrdersRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrdersRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/work-orders/work-orders.module.ts
var WorkOrdersModule = class _WorkOrdersModule {
  static \u0275fac = function WorkOrdersModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrdersModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WorkOrdersModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    WorkOrdersRoutingModule,
    WorkOrderAnalyticsComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrdersModule, [{
    type: NgModule,
    args: [{
      declarations: [
        WorkOrdersComponent,
        WorkOrderListComponent,
        WorkOrderCardComponent,
        WorkOrderFiltersComponent,
        WorkOrderStatsComponent,
        WorkOrderPreviewComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        WorkOrdersRoutingModule,
        WorkOrderAnalyticsComponent
      ]
    }]
  }], null, null);
})();
export {
  WorkOrdersModule
};
//# sourceMappingURL=chunk-V5I6M4PG.js.map
