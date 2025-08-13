import {
  AuthService
} from "./chunk-ORU7ONSE.js";
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
} from "./chunk-MQFZXT5S.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-ANYYK4S4.js";
import {
  environment
} from "./chunk-5YESG6NV.js";
import {
  HttpClient,
  HttpClientModule
} from "./chunk-TS6BXV7E.js";
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
  Subscription,
  ViewChild,
  setClassMetadata,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BHMN65X2.js";
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
  // Get all work orders with pagination
  getWorkOrders() {
    return this.http.get(this.apiUrl, this.getAuthHeaders());
  }
  // Get a single work order by ID
  getWorkOrderById(id) {
    return this.http.get(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Create a new work order
  createWorkOrder(workOrder) {
    return this.http.post(this.apiUrl, workOrder, this.getAuthHeaders());
  }
  // Get work order statistics
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Work order created successfully!");
    \u0275\u0275elementEnd()();
  }
}
function WorkOrdersComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 19);
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
function WorkOrdersComponent_div_29__svg_svg_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "circle", 56)(2, "path", 57);
    \u0275\u0275elementEnd();
  }
}
function WorkOrdersComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_29_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal($event));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_29_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 23);
    \u0275\u0275element(4, "path", 24)(5, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "Create New Work Order");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26)(9, "form", 27);
    \u0275\u0275listener("ngSubmit", function WorkOrdersComponent_div_29_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(10, "div", 28)(11, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 30);
    \u0275\u0275element(13, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "h3");
    \u0275\u0275text(15, "Basic Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 32)(17, "div", 33)(18, "label");
    \u0275\u0275text(19, "Title ");
    \u0275\u0275elementStart(20, "span", 34);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 36)(24, "div", 33)(25, "label");
    \u0275\u0275text(26, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 37)(28, "option", 38);
    \u0275\u0275text(29, "Low");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 39);
    \u0275\u0275text(31, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 40);
    \u0275\u0275text(33, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 41);
    \u0275\u0275text(35, "Critical");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 33)(37, "label");
    \u0275\u0275text(38, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 32)(41, "div", 33)(42, "label");
    \u0275\u0275text(43, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "textarea", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 36)(46, "div", 33)(47, "label");
    \u0275\u0275text(48, "Estimated Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 33)(51, "label");
    \u0275\u0275text(52, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "textarea", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 28)(55, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 30);
    \u0275\u0275element(57, "path", 46)(58, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "h3");
    \u0275\u0275text(60, "Assignment & Location");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 36)(62, "div", 33)(63, "label");
    \u0275\u0275text(64, "Asset ID (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 33)(67, "label");
    \u0275\u0275text(68, "Location ID (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 36)(71, "div", 33)(72, "label");
    \u0275\u0275text(73, "Assign To User ID (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "input", 50);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(75, "div", 51)(76, "button", 52);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_29_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275text(77, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 53);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_29_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275template(79, WorkOrdersComponent_div_29__svg_svg_79_Template, 3, 0, "svg", 54);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r0.workOrderForm);
    \u0275\u0275advance(67);
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
  activeTab = "work-orders";
  showCreateModal = false;
  workOrderForm;
  isLoading = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = "";
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
  }
  showSuccess() {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3e3);
  }
  showError(message) {
    this.errorMessage = message;
    this.showErrorMessage = true;
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 5e3);
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
        },
        error: (error) => {
          console.error("Error creating work order:", error);
          const message = error.error?.message || "Failed to create work order. Please try again.";
          this.showError(message);
        },
        complete: () => {
          this.isLoading = false;
        }
      }));
    }
  }
  static \u0275fac = function WorkOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrdersComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WorkOrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrdersComponent, selectors: [["app-work-orders"]], viewQuery: function WorkOrdersComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(WorkOrderListComponent, 5);
      \u0275\u0275viewQuery(WorkOrderStatsComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.workOrderList = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.workOrderStats = _t.first);
    }
  }, standalone: false, decls: 30, vars: 11, consts: [[1, "work-orders-container"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "header"], [1, "tabs"], [1, "tab", 3, "click"], [1, "content"], [1, "work-orders-content"], [1, "create-button-container"], [1, "create-button", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [3, "filtersChanged"], [1, "analytics-content"], [1, "analytics-placeholder"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "success-message"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "error-message"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "header-icon", "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "section-icon", "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "form-row", "full-width"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "title", "placeholder", "Enter work order title"], [1, "form-row"], ["formControlName", "priority"], ["value", "low"], ["value", "medium", "selected", ""], ["value", "high"], ["value", "critical"], ["type", "datetime-local", "formControlName", "due_date"], ["formControlName", "description", "placeholder", "Enter work order description"], ["type", "number", "formControlName", "estimated_hours", "placeholder", "0", "min", "0", "step", "0.5"], ["formControlName", "notes", "placeholder", "Additional notes"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["type", "number", "formControlName", "asset_id", "placeholder", "Enter asset ID"], ["type", "number", "formControlName", "location_id", "placeholder", "Enter location ID"], ["type", "number", "formControlName", "assigned_to", "placeholder", "Enter user ID"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function WorkOrdersComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(23, "div", 13)(24, "div", 14)(25, "h3");
      \u0275\u0275text(26, "Analytics Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "Work order analytics and insights will be displayed here.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(29, WorkOrdersComponent_div_29_Template, 81, 5, "div", 15);
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
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.showCreateModal);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, WorkOrderListComponent, WorkOrderFiltersComponent, WorkOrderStatsComponent], styles: [`

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
      <div class="analytics-placeholder">\r
        <h3>Analytics Dashboard</h3>\r
        <p>Work order analytics and insights will be displayed here.</p>\r
      </div>\r
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
            <div class="form-group">\r
              <label>Title <span class="required">*</span></label>\r
              <input \r
                type="text" \r
                formControlName="title" \r
                placeholder="Enter work order title">\r
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
            <div class="form-group">\r
              <label>Asset ID (Optional)</label>\r
              <input\r
                type="number"\r
                formControlName="asset_id"\r
                placeholder="Enter asset ID">\r
            </div>\r
            \r
            <div class="form-group">\r
              <label>Location ID (Optional)</label>\r
              <input\r
                type="number"\r
                formControlName="location_id"\r
                placeholder="Enter location ID">\r
            </div>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-group">\r
              <label>Assign To User ID (Optional)</label>\r
              <input\r
                type="number"\r
                formControlName="assigned_to"\r
                placeholder="Enter user ID">\r
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
`, styles: [`/* src/app/work-orders/work-orders.component.scss */
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
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrdersComponent, { className: "WorkOrdersComponent", filePath: "src/app/work-orders/work-orders.component.ts", lineNumber: 14 });
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
    WorkOrdersRoutingModule
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
        WorkOrdersRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  WorkOrdersModule
};
//# sourceMappingURL=chunk-QTXNJ47B.js.map
