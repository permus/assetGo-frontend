import {
  MetaWorkOrdersService
} from "./chunk-5LL6FNGY.js";
import {
  TeamService,
  WorkOrderService
} from "./chunk-7MV7TIRV.js";
import {
  InventoryAnalyticsService
} from "./chunk-FQPE6O4E.js";
import {
  ClickOutsideDirective
} from "./chunk-CWFMMIPL.js";
import {
  LocationService
} from "./chunk-HLNFKPU6.js";
import {
  PaginationComponent
} from "./chunk-FLVBNG45.js";
import {
  DeleteConfirmationModalComponent
} from "./chunk-VSCYFJEH.js";
import {
  AssetService
} from "./chunk-XSZSUCV7.js";
import "./chunk-6M5LH3XM.js";
import {
  ToastService
} from "./chunk-7NKQIE52.js";
import "./chunk-LZKWF3AL.js";
import {
  CurrencyService
} from "./chunk-RPSM5X2G.js";
import {
  PreferencesService
} from "./chunk-3QBMOR5J.js";
import {
  AuthService
} from "./chunk-BGMQUXYP.js";
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
} from "./chunk-ISERUI2H.js";
import "./chunk-OR4RIGW3.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  HttpClientModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  NgModule,
  Output,
  Subject,
  Subscription,
  ViewChild,
  effect,
  firstValueFrom,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SCVX3V3B.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/work-orders/components/work-order-card/work-order-card.component.ts
function WorkOrderCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "input", 32);
    \u0275\u0275listener("change", function WorkOrderCardComponent_div_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectionChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isSelected);
  }
}
function WorkOrderCardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 34);
    \u0275\u0275listener("click", function WorkOrderCardComponent_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "path", 36)(4, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 38);
    \u0275\u0275text(6, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 34);
    \u0275\u0275listener("click", function WorkOrderCardComponent_div_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editWorkOrder());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 35);
    \u0275\u0275element(9, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 38);
    \u0275\u0275text(11, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 40);
    \u0275\u0275elementStart(13, "button", 41);
    \u0275\u0275listener("click", function WorkOrderCardComponent_div_18_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.requestDelete());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 42);
    \u0275\u0275element(15, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span", 44);
    \u0275\u0275text(17, "Delete");
    \u0275\u0275elementEnd()()();
  }
}
function WorkOrderCardComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCategoryName());
  }
}
var WorkOrderCardComponent = class _WorkOrderCardComponent {
  router;
  workOrder;
  isListView = false;
  showBulkSelection = false;
  isSelected = false;
  editRequested = new EventEmitter();
  deleteRequested = new EventEmitter();
  selectionChanged = new EventEmitter();
  constructor(router) {
    this.router = router;
  }
  showMenu = false;
  onDocumentClick() {
    this.showMenu = false;
  }
  getStatusSlug(status) {
    if (!status)
      return "open";
    if (typeof status === "string")
      return status;
    if (typeof status === "object" && status !== null && "slug" in status) {
      return status.slug;
    }
    return String(status);
  }
  getPrioritySlug(priority) {
    if (!priority)
      return "medium";
    if (typeof priority === "string")
      return priority;
    if (typeof priority === "object" && priority !== null && "slug" in priority) {
      return priority.slug;
    }
    return String(priority);
  }
  onSelectionChange(event) {
    const selected = event.target.checked;
    this.isSelected = selected;
    this.selectionChanged.emit({
      workOrderId: this.workOrder.id,
      selected
    });
  }
  getStatusLabel(status) {
    const slug = this.getStatusSlug(status);
    const statusMap = {
      "open": "Open",
      "in-progress": "In Progress",
      "in_progress": "In Progress",
      "completed": "Completed",
      "cancelled": "Cancelled",
      "pending": "Pending"
    };
    return statusMap[slug] || slug;
  }
  getPriorityLabel(priority) {
    const slug = this.getPrioritySlug(priority);
    const priorityMap = {
      "low": "Low",
      "medium": "Medium",
      "high": "High",
      "critical": "Critical",
      "urgent": "Urgent"
    };
    return priorityMap[slug] || slug;
  }
  getAssigneeName() {
    if (this.workOrder.assigned_to) {
      if (typeof this.workOrder.assigned_to === "object" && this.workOrder.assigned_to !== null) {
        const assignedTo = this.workOrder.assigned_to;
        const firstName = assignedTo.first_name || "";
        const lastName = assignedTo.last_name || "";
        return `${firstName} ${lastName}`.trim() || "Unassigned";
      }
      return String(this.workOrder.assigned_to);
    }
    return "Unassigned";
  }
  getAssetName() {
    if (this.workOrder.asset) {
      if (typeof this.workOrder.asset === "object" && this.workOrder.asset !== null) {
        const asset = this.workOrder.asset;
        return asset.name || asset.asset_id || "No Asset";
      }
      return String(this.workOrder.asset);
    }
    return "No Asset";
  }
  getLocationName() {
    if (this.workOrder.location) {
      if (typeof this.workOrder.location === "object" && this.workOrder.location !== null) {
        const location = this.workOrder.location;
        return location.name || location.full_path || "No Location";
      }
      return String(this.workOrder.location);
    }
    return "No Location";
  }
  getCreatedBy() {
    if (this.workOrder.created_by) {
      if (typeof this.workOrder.created_by === "object" && this.workOrder.created_by !== null) {
        const createdBy = this.workOrder.created_by;
        const firstName = createdBy.first_name || "";
        const lastName = createdBy.last_name || "";
        return `${firstName} ${lastName}`.trim() || "Unknown";
      }
      return String(this.workOrder.created_by);
    }
    return "Unknown";
  }
  getCategoryName() {
    const category = this.workOrder?.category;
    if (!category)
      return "";
    if (typeof category === "object" && category !== null && "name" in category) {
      return category.name || "";
    }
    if (typeof category === "string")
      return category;
    return "";
  }
  viewDetails() {
    this.router.navigate(["/work-orders", this.workOrder.id]);
    this.showMenu = false;
  }
  editWorkOrder() {
    this.editRequested.emit(this.workOrder);
    this.showMenu = false;
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  requestDelete() {
    this.deleteRequested.emit(this.workOrder);
    this.showMenu = false;
  }
  static \u0275fac = function WorkOrderCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderCardComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderCardComponent, selectors: [["app-work-order-card"]], hostBindings: function WorkOrderCardComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function WorkOrderCardComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { workOrder: "workOrder", isListView: "isListView", showBulkSelection: "showBulkSelection", isSelected: "isSelected" }, outputs: { editRequested: "editRequested", deleteRequested: "deleteRequested", selectionChanged: "selectionChanged" }, standalone: false, decls: 44, vars: 25, consts: [[1, "work-order-card", "h-[230px]"], ["class", "bulk-selection-checkbox", 4, "ngIf"], [1, "card-header", "mb-3"], [1, "flex", "justify-between", "items-center", "gap-3", "my-2"], [1, "title-section"], [1, "icon"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.867 19.125h.008v.008h-.008v-.008Z"], [1, "title", "truncate", "max-w-[250px]", 3, "title"], [1, "header-actions"], [1, "relative", 3, "click"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "hover:bg-gray-100", "transition-colors", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["cx", "12", "cy", "6", "r", "1.5"], ["cx", "12", "cy", "12", "r", "1.5"], ["cx", "12", "cy", "18", "r", "1.5"], ["class", "absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50", 4, "ngIf"], [1, "badges", "flex", "flex-wrap", "gap-2"], [1, "badge", "status-badge", 3, "ngClass"], [1, "badge", "priority-badge", 3, "ngClass"], ["class", "badge bg-gray-100 text-gray-800", 4, "ngIf"], [1, "card-content"], [1, "description", "truncate", 3, "title"], [1, "meta-row"], [1, "meta-item"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "footer-row"], [1, "text-xs"], [1, "bulk-selection-checkbox"], ["type", "checkbox", 1, "bulk-checkbox", 3, "change", "checked"], [1, "absolute", "right-0", "top-full", "mt-1", "w-48", "bg-white", "rounded-lg", "shadow-lg", "border", "border-gray-200", "py-1", "z-50"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "text-left", "hover:bg-gray-50", "transition-colors", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "text-sm", "text-gray-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "border-t", "border-gray-100", "my-1"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "text-left", "hover:bg-red-50", "transition-colors", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-sm", "text-red-600"], [1, "badge", "bg-gray-100", "text-gray-800"]], template: function WorkOrderCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, WorkOrderCardComponent_div_1_Template, 2, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7)(8, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "h3", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
      \u0275\u0275listener("click", function WorkOrderCardComponent_Template_div_click_12_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(13, "button", 12);
      \u0275\u0275listener("click", function WorkOrderCardComponent_Template_button_click_13_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 13);
      \u0275\u0275element(15, "circle", 14)(16, "circle", 15)(17, "circle", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, WorkOrderCardComponent_div_18_Template, 18, 0, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "div", 18)(20, "span", 19);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 20);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, WorkOrderCardComponent_span_24_Template, 2, 1, "span", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 22)(26, "p", 23);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 24)(29, "div", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 26);
      \u0275\u0275element(31, "path", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 26);
      \u0275\u0275element(36, "path", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 29)(41, "span", 30);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "date");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("list-view", ctx.isListView);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showBulkSelection);
      \u0275\u0275advance(8);
      \u0275\u0275property("title", ctx.workOrder.title);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.workOrder.title);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.showMenu);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", "status-" + ((ctx.workOrder.status == null ? null : ctx.workOrder.status.slug) || ctx.workOrder.status || "open"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusLabel(ctx.workOrder.status), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", "priority-" + ((ctx.workOrder.priority == null ? null : ctx.workOrder.priority.slug) || ctx.workOrder.priority || "medium"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getPriorityLabel(ctx.workOrder.priority), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getCategoryName());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("italic", !ctx.workOrder.description);
      \u0275\u0275property("title", ctx.workOrder.description || "No description provided");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.workOrder.description || "No description provided", " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.getAssigneeName() || "Unknown");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.workOrder.due_date ? \u0275\u0275pipeBind2(39, 19, ctx.workOrder.due_date, "MMM d, y") : "N/A");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("Created ", \u0275\u0275pipeBind2(43, 22, ctx.workOrder.created_at, "MMM d, y"), " by ", ctx.getCreatedBy() || "Unknown", "");
    }
  }, dependencies: [NgClass, NgIf, DatePipe], styles: ["\n\n.work-order-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  position: relative;\n}\n.work-order-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  border-color: #cbd5e1;\n}\n.work-order-card[_ngcontent-%COMP%]   .bulk-selection-checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  z-index: 10;\n}\n.work-order-card[_ngcontent-%COMP%]   .bulk-selection-checkbox[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 9999px;\n  border: 2px solid #60a5fa;\n  background-color: #fff;\n  box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(59, 130, 246, 0.15);\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: box-shadow 0.15s ease, border-color 0.15s ease;\n}\n.work-order-card[_ngcontent-%COMP%]   .bulk-selection-checkbox[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]:checked {\n  background-image: radial-gradient(#3b82f6 45%, transparent 46%);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 70% 70%;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px #fff, 0 0 0 6px rgba(59, 130, 246, 0.25);\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n  line-height: 1.3;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.status-open[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.status-on-hold[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.status-draft[_ngcontent-%COMP%] {\n  background: #f9f2fe;\n  color: #5426dc;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.status-in-progress[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.status-completed[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.priority-low[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.priority-medium[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.priority-high[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.priority-ppm[_ngcontent-%COMP%] {\n  background: #e2c7fe;\n  color: #3b06d9;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.priority-critical[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 0.75rem;\n  line-height: 1.5;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem 2rem;\n  margin-top: 0.5rem;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #334155;\n  font-size: 0.9rem;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: #94a3b8;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .footer-row[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-view.work-order-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  min-height: auto;\n  padding: 1rem;\n}\n.list-view.work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  flex: 1;\n  min-width: 200px;\n}\n.list-view.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.list-view.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.75rem;\n}\n.list-view.work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .work-order-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n    min-height: 180px;\n  }\n  .work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .work-order-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .list-view.work-order-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    min-height: auto;\n  }\n  .list-view.work-order-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .list-view.work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n    text-align: left;\n    width: 100%;\n    border-top: 1px solid #f3f4f6;\n    padding-top: 1rem;\n    margin-top: 1rem;\n  }\n  .list-view.work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 0.75rem;\n  }\n  .list-view.work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%], \n   .list-view.work-order-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=work-order-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderCardComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-card", standalone: false, template: `<div class="work-order-card h-[230px]" [class.list-view]="isListView">\r
  <!-- Bulk Selection Checkbox -->\r
  <div class="bulk-selection-checkbox" *ngIf="showBulkSelection">\r
    <input\r
      type="checkbox"\r
      [checked]="isSelected"\r
      (change)="onSelectionChange($event)"\r
      class="bulk-checkbox">\r
  </div>\r
\r
  <div class="card-header mb-3">\r
    <div class="flex justify-between items-center gap-3 my-2">\r
      <div class="title-section">\r
        <div class="icon">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />\r
          </svg>\r
\r
        </div>\r
        <h3 class="title truncate max-w-[250px]" [title]="workOrder.title">{{ workOrder.title }}</h3>\r
      </div>\r
      <div class="header-actions">\r
\r
\r
        <div class="relative" (click)="$event.stopPropagation()">\r
          <button\r
            (click)="toggleMenu()"\r
            class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">\r
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <circle cx="12" cy="6" r="1.5" />\r
              <circle cx="12" cy="12" r="1.5" />\r
              <circle cx="12" cy="18" r="1.5" />\r
            </svg>\r
          </button>\r
\r
          <!-- Dropdown Menu (matches assets UI) -->\r
          <div *ngIf="showMenu" class="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">\r
            <button\r
              (click)="viewDetails()"\r
              class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors cursor-pointer">\r
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
              </svg>\r
              <span class="text-sm text-gray-700">View Details</span>\r
            </button>\r
\r
            <button\r
              (click)="editWorkOrder()"\r
              class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors cursor-pointer">\r
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
              </svg>\r
              <span class="text-sm text-gray-700">Edit</span>\r
            </button>\r
\r
            <div class="border-t border-gray-100 my-1"></div>\r
\r
            <button\r
              (click)="requestDelete()"\r
              class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-red-50 transition-colors cursor-pointer">\r
              <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
              </svg>\r
              <span class="text-sm text-red-600">Delete</span>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="badges flex flex-wrap gap-2">\r
        <span class="badge status-badge" [ngClass]="'status-' + ($any(workOrder.status)?.slug || workOrder.status || 'open')">\r
          {{ getStatusLabel($any(workOrder.status)) }}\r
        </span>\r
      <span class="badge priority-badge" [ngClass]="'priority-' + ($any(workOrder.priority)?.slug || workOrder.priority || 'medium')">\r
          {{ getPriorityLabel($any(workOrder.priority)) }}\r
        </span>\r
      <span *ngIf="getCategoryName()" class="badge bg-gray-100 text-gray-800">{{ getCategoryName() }}</span>\r
    </div>\r
  </div>\r
\r
  <div class="card-content">\r
    <p class="description truncate" [class.italic]="!workOrder.description" [title]="workOrder.description || 'No description provided'">\r
      {{ workOrder.description || 'No description provided' }}\r
    </p>\r
\r
    <div class="meta-row">\r
      <div class="meta-item">\r
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>\r
        <span>{{ getAssigneeName() || 'Unknown' }}</span>\r
      </div>\r
      <div class="meta-item">\r
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>\r
        <span>{{ workOrder.due_date ? (workOrder.due_date | date:'MMM d, y') : 'N/A' }}</span>\r
      </div>\r
    </div>\r
\r
    <div class="footer-row">\r
      <span class="text-xs">Created {{ workOrder.created_at | date:'MMM d, y' }} by {{ getCreatedBy() || 'Unknown' }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- footer removed; actions are in header -->\r
</div>\r
`, styles: ["/* src/app/work-orders/components/work-order-card/work-order-card.component.scss */\n.work-order-card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  position: relative;\n}\n.work-order-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  border-color: #cbd5e1;\n}\n.work-order-card .bulk-selection-checkbox {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  z-index: 10;\n}\n.work-order-card .bulk-selection-checkbox .bulk-checkbox {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 9999px;\n  border: 2px solid #60a5fa;\n  background-color: #fff;\n  box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(59, 130, 246, 0.15);\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: box-shadow 0.15s ease, border-color 0.15s ease;\n}\n.work-order-card .bulk-selection-checkbox .bulk-checkbox:checked {\n  background-image: radial-gradient(#3b82f6 45%, transparent 46%);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 70% 70%;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px #fff, 0 0 0 6px rgba(59, 130, 246, 0.25);\n}\n.work-order-card .card-header .title-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n}\n.work-order-card .card-header .title-section .icon {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.work-order-card .card-header .title-section .title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n  line-height: 1.3;\n}\n.work-order-card .card-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.work-order-card .card-header .badge {\n  padding: 0.15rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.work-order-card .card-header .badge.status-open {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card .card-header .badge.status-on-hold {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card .card-header .badge.status-draft {\n  background: #f9f2fe;\n  color: #5426dc;\n}\n.work-order-card .card-header .badge.status-in-progress {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.work-order-card .card-header .badge.status-completed {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.work-order-card .card-header .badge.status-cancelled {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.work-order-card .card-header .badge.priority-low {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.work-order-card .card-header .badge.priority-medium {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.work-order-card .card-header .badge.priority-high {\n  background: #fef3c7;\n  color: #d97706;\n}\n.work-order-card .card-header .badge.priority-ppm {\n  background: #e2c7fe;\n  color: #3b06d9;\n}\n.work-order-card .card-header .badge.priority-critical {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.work-order-card .card-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.work-order-card .card-content .description {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 0.75rem;\n  line-height: 1.5;\n}\n.work-order-card .card-content .meta-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem 2rem;\n  margin-top: 0.5rem;\n}\n.work-order-card .card-content .meta-row .meta-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #334155;\n  font-size: 0.9rem;\n}\n.work-order-card .card-content .meta-row .meta-item .icon {\n  width: 16px;\n  height: 16px;\n  color: #94a3b8;\n}\n.work-order-card .card-content .footer-row {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.work-order-card .card-footer {\n  display: none;\n}\n.list-view.work-order-card {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  min-height: auto;\n  padding: 1rem;\n}\n.list-view.work-order-card .card-header {\n  margin-bottom: 0;\n  flex: 1;\n  min-width: 200px;\n}\n.list-view.work-order-card .card-content {\n  flex: 2;\n}\n.list-view.work-order-card .card-content .details {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.75rem;\n}\n.list-view.work-order-card .card-footer {\n  display: none;\n}\n@media (max-width: 768px) {\n  .work-order-card {\n    padding: 1rem;\n    min-height: 180px;\n  }\n  .work-order-card .card-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .work-order-card .card-header .badges {\n    align-self: flex-start;\n  }\n  .work-order-card .card-content .details {\n    gap: 0.5rem;\n  }\n  .work-order-card .card-footer {\n    display: none;\n  }\n  .list-view.work-order-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    min-height: auto;\n  }\n  .list-view.work-order-card .card-content .details {\n    grid-template-columns: 1fr;\n  }\n  .list-view.work-order-card .card-footer {\n    text-align: left;\n    width: 100%;\n    border-top: 1px solid #f3f4f6;\n    padding-top: 1rem;\n    margin-top: 1rem;\n  }\n  .list-view.work-order-card .card-footer .button-group {\n    flex-direction: row;\n    gap: 0.75rem;\n  }\n  .list-view.work-order-card .card-footer .button-group .view-button,\n  .list-view.work-order-card .card-footer .button-group .edit-button {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=work-order-card.component.css.map */\n"] }]
  }], () => [{ type: Router }], { workOrder: [{
    type: Input
  }], isListView: [{
    type: Input
  }], showBulkSelection: [{
    type: Input
  }], isSelected: [{
    type: Input
  }], editRequested: [{
    type: Output
  }], deleteRequested: [{
    type: Output
  }], selectionChanged: [{
    type: Output
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderCardComponent, { className: "WorkOrderCardComponent", filePath: "src/app/work-orders/components/work-order-card/work-order-card.component.ts", lineNumber: 32 });
})();

// src/app/work-orders/components/work-order-filters/work-order-filters.component.ts
function WorkOrderFiltersComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "All Status");
    \u0275\u0275elementEnd();
  }
}
function WorkOrderFiltersComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.getStatusColor(ctx_r0.getStatusValue()) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getStatusColor(ctx_r0.getStatusValue()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getStatusLabel());
  }
}
function WorkOrderFiltersComponent_div_20_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_div_20_button_15_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectStatus(option_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 41);
    \u0275\u0275element(4, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 35)(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.getStatusValue() === option_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r0.getStatusColor(option_r4.id) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getStatusColor(option_r4.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getStatusDescription(option_r4.id));
  }
}
function WorkOrderFiltersComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Select Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_div_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectStatus(null));
    });
    \u0275\u0275elementStart(6, "div", 31)(7, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 33);
    \u0275\u0275element(9, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 35)(11, "div", 36);
    \u0275\u0275text(12, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 37);
    \u0275\u0275text(14, "Show all statuses");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(15, WorkOrderFiltersComponent_div_20_button_15_Template, 10, 8, "button", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.statusOptions);
  }
}
function WorkOrderFiltersComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "All Priority");
    \u0275\u0275elementEnd();
  }
}
function WorkOrderFiltersComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.getPriorityColor(ctx_r0.getPriorityValue()) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getPriorityColor(ctx_r0.getPriorityValue()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getPriorityLabel());
  }
}
function WorkOrderFiltersComponent_div_33_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_div_33_button_15_Template_button_click_0_listener() {
      const option_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectPriority(option_r7.id));
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 41);
    \u0275\u0275element(4, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 35)(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.getPriorityValue() === option_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r0.getPriorityColor(option_r7.id) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getPriorityColor(option_r7.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getPriorityDescription(option_r7.id));
  }
}
function WorkOrderFiltersComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Select Priority ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_div_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectPriority(null));
    });
    \u0275\u0275elementStart(6, "div", 31)(7, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 33);
    \u0275\u0275element(9, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 35)(11, "div", 36);
    \u0275\u0275text(12, "All Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 37);
    \u0275\u0275text(14, "Show all priorities");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(15, WorkOrderFiltersComponent_div_33_button_15_Template, 10, 8, "button", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.priorityOptions);
  }
}
function WorkOrderFiltersComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "All Categories");
    \u0275\u0275elementEnd();
  }
}
function WorkOrderFiltersComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 44);
    \u0275\u0275element(3, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getCategoryLabel());
  }
}
function WorkOrderFiltersComponent_div_46_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_div_46_button_15_Template_button_click_0_listener() {
      const option_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectCategory(option_r10.id));
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 46);
    \u0275\u0275element(4, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 35)(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275text(9, "Category");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.getCategoryValue() === option_r10.id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(option_r10.name);
  }
}
function WorkOrderFiltersComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Select Category ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_div_46_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectCategory(null));
    });
    \u0275\u0275elementStart(6, "div", 31)(7, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 33);
    \u0275\u0275element(9, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 35)(11, "div", 36);
    \u0275\u0275text(12, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 37);
    \u0275\u0275text(14, "Show all categories");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(15, WorkOrderFiltersComponent_div_46_button_15_Template, 10, 3, "button", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.categoryOptions);
  }
}
function WorkOrderFiltersComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 47);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_Conditional_47_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Clear Filters ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 49);
    \u0275\u0275listener("click", function WorkOrderFiltersComponent_Conditional_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 10);
    \u0275\u0275element(7, "path", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Apply Filters ");
    \u0275\u0275elementEnd()();
  }
}
var WorkOrderFiltersComponent = class _WorkOrderFiltersComponent {
  fb;
  workOrderService;
  assetService;
  locationService;
  metaService;
  filtersChanged = new EventEmitter();
  filterForm;
  isLoading = false;
  subscription = new Subscription();
  // Filter states
  showStatusDropdown = false;
  showPriorityDropdown = false;
  showCategoryDropdown = false;
  showAdvanced = false;
  showDateRangePicker = false;
  showAssetDropdown = false;
  showLocationDropdown = false;
  // Sort options
  sortBy = "created_at";
  sortOrder = "desc";
  // Filter data
  statusOptions = [];
  priorityOptions = [];
  categoryOptions = [];
  sortOptions = [
    { value: "created_at", label: "Created Date" },
    { value: "due_date", label: "Due Date" },
    { value: "priority", label: "Priority" },
    { value: "status", label: "Status" },
    { value: "title", label: "Title" }
  ];
  // Asset and location options
  assets = [];
  locations = [];
  users = [];
  constructor(fb, workOrderService, assetService, locationService, metaService) {
    this.fb = fb;
    this.workOrderService = workOrderService;
    this.assetService = assetService;
    this.locationService = locationService;
    this.metaService = metaService;
    this.filterForm = this.fb.group({
      search: [""],
      status_id: [null],
      priority_id: [null],
      category_id: [null],
      asset_id: [""],
      location_id: [""],
      assigned_to: [""],
      is_overdue: [false],
      start_date: [""],
      end_date: [""],
      due_start_date: [""],
      due_end_date: [""]
    });
    effect(() => {
      this.checkFilter();
    });
  }
  ngOnInit() {
    this.metaService.clearAllCache();
    this.loadFilterOptions();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  loadFilterOptions() {
    this.subscription.add(this.metaService.getStatus().subscribe({
      next: (statuses) => {
        this.statusOptions = statuses;
      },
      error: (error) => {
        console.error("Error loading statuses:", error);
      }
    }));
    this.subscription.add(this.metaService.getPriorities().subscribe({
      next: (priorities) => {
        this.priorityOptions = priorities;
      },
      error: (error) => {
        console.error("Error loading priorities:", error);
      }
    }));
    this.subscription.add(this.metaService.getCategories().subscribe({
      next: (categories) => {
        this.categoryOptions = categories;
      },
      error: (error) => {
        console.error("Error loading categories:", error);
      }
    }));
    this.subscription.add(this.assetService.getAssets({ per_page: 1e3 }).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.assets = response.data.assets || response.data || [];
        }
      },
      error: (error) => {
        console.error("Error loading assets:", error);
      }
    }));
    this.subscription.add(this.locationService.getLocations({ per_page: 1e3 }).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.locations = response.data.locations || response.data || [];
        }
      },
      error: (error) => {
        console.error("Error loading locations:", error);
      }
    }));
    this.subscription.add(this.workOrderService.getWorkOrderFilters().subscribe({
      next: (response) => {
        this.users = response.users || [];
      },
      error: (error) => {
        console.error("Error loading filter options:", error);
      }
    }));
  }
  // Status dropdown methods
  toggleStatusDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
    this.showAssetDropdown = false;
    this.showLocationDropdown = false;
  }
  selectStatus(statusId) {
    this.filterForm.patchValue({ status_id: statusId });
    this.showStatusDropdown = false;
  }
  getStatusLabel() {
    const statusId = this.filterForm.value.status_id;
    if (!statusId)
      return "All Status";
    const selected = this.statusOptions.find((opt) => opt.id === statusId);
    return selected ? selected.name : "All Status";
  }
  // Priority dropdown methods
  togglePriorityDropdown() {
    this.showPriorityDropdown = !this.showPriorityDropdown;
    this.showStatusDropdown = false;
    this.showCategoryDropdown = false;
    this.showAssetDropdown = false;
    this.showLocationDropdown = false;
  }
  selectPriority(priorityId) {
    this.filterForm.patchValue({ priority_id: priorityId });
    this.showPriorityDropdown = false;
  }
  getPriorityLabel() {
    const priorityId = this.filterForm.value.priority_id;
    if (!priorityId)
      return "All Priority";
    const selected = this.priorityOptions.find((opt) => opt.id === priorityId);
    return selected ? selected.name : "All Priority";
  }
  // Asset dropdown methods
  toggleAssetDropdown() {
    this.showAssetDropdown = !this.showAssetDropdown;
    this.showStatusDropdown = false;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
    this.showLocationDropdown = false;
  }
  selectAsset(assetId) {
    this.filterForm.patchValue({ asset_id: assetId === 0 ? null : assetId });
    this.showAssetDropdown = false;
  }
  getAssetLabel() {
    const assetId = this.filterForm.value.asset_id;
    if (!assetId)
      return "All Assets";
    const asset = this.assets.find((a) => a.id === assetId);
    return asset ? asset.name : "All Assets";
  }
  // Category dropdown methods
  toggleCategoryDropdown() {
    this.showCategoryDropdown = !this.showCategoryDropdown;
    this.showStatusDropdown = false;
    this.showPriorityDropdown = false;
    this.showAssetDropdown = false;
    this.showLocationDropdown = false;
  }
  selectCategory(categoryId) {
    this.filterForm.patchValue({ category_id: categoryId });
    this.showCategoryDropdown = false;
  }
  getCategoryLabel() {
    const categoryId = this.filterForm.value.category_id;
    if (!categoryId)
      return "All Categories";
    const selected = this.categoryOptions.find((opt) => opt.id === categoryId);
    return selected ? selected.name : "All Categories";
  }
  getCategoryValue() {
    return this.filterForm.value.category_id;
  }
  // Location dropdown methods
  toggleLocationDropdown() {
    this.showLocationDropdown = !this.showLocationDropdown;
    this.showStatusDropdown = false;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
    this.showAssetDropdown = false;
  }
  selectLocation(locationId) {
    this.filterForm.patchValue({ location_id: locationId === 0 ? null : locationId });
    this.showLocationDropdown = false;
  }
  getLocationLabel() {
    const locationId = this.filterForm.value.location_id;
    if (!locationId)
      return "All Locations";
    const location = this.locations.find((l) => l.id === locationId);
    return location ? location.name : "All Locations";
  }
  // Date range methods
  toggleDateRangePicker() {
    this.showDateRangePicker = !this.showDateRangePicker;
  }
  // Advanced methods
  toggleAdvanced() {
    this.showAdvanced = !this.showAdvanced;
  }
  setSortBy(value) {
    this.sortBy = value;
  }
  toggleSortOrder() {
    this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
  }
  onSearch() {
    this.onFilterChange();
  }
  onFilterChange() {
    const formValue = this.filterForm.value;
    const filters = __spreadProps(__spreadValues({}, formValue), {
      sortBy: this.sortBy,
      sortOrder: this.sortOrder
    });
    Object.keys(filters).forEach((key) => {
      if (filters[key] === "" || filters[key] === null || filters[key] === void 0) {
        delete filters[key];
      }
    });
    this.filtersChanged.emit(filters);
  }
  clearFilters() {
    this.filterForm.patchValue({
      search: "",
      status_id: null,
      priority_id: null,
      category_id: null,
      asset_id: "",
      location_id: "",
      assigned_to: "",
      is_overdue: false,
      start_date: "",
      end_date: "",
      due_start_date: "",
      due_end_date: ""
    });
    this.sortBy = "created_at";
    this.sortOrder = "desc";
    this.showAdvanced = false;
    this.showDateRangePicker = false;
    this.onFilterChange();
  }
  checkFilter() {
    const { status_id, priority_id, category_id, search } = this.filterForm.value;
    return !!(status_id || priority_id || category_id || search && search.trim() !== "");
  }
  // Close dropdowns when clicking outside
  onDocumentClick(event) {
    if (!event.target.closest(".filter-dropdown")) {
      this.showStatusDropdown = false;
      this.showPriorityDropdown = false;
      this.showCategoryDropdown = false;
      this.showAssetDropdown = false;
      this.showLocationDropdown = false;
    }
  }
  // Helper methods for template
  getAssetName(assetId) {
    const asset = this.assets.find((a) => a.id === assetId);
    return asset ? asset.name : "";
  }
  getLocationName(locationId) {
    const location = this.locations.find((l) => l.id === locationId);
    return location ? location.name : "";
  }
  // New helper methods for enhanced select boxes
  getStatusValue() {
    return this.filterForm.value.status_id;
  }
  getPriorityValue() {
    return this.filterForm.value.priority_id;
  }
  getAssetValue() {
    return this.filterForm.value.asset_id;
  }
  getLocationValue() {
    return this.filterForm.value.location_id;
  }
  getStatusColor(statusId) {
    if (!statusId)
      return "#6B7280";
    const status = this.statusOptions.find((s) => s.id === statusId);
    if (!status)
      return "#6B7280";
    const colorMap = {
      "open": "#10B981",
      // Green
      "in-progress": "#F59E0B",
      // Amber
      "completed": "#3B82F6",
      // Blue
      "cancelled": "#EF4444",
      // Red
      "pending": "#8B5CF6"
      // Purple
    };
    return colorMap[status.slug] || "#6B7280";
  }
  getPriorityColor(priorityId) {
    if (!priorityId)
      return "#6B7280";
    const priority = this.priorityOptions.find((p) => p.id === priorityId);
    if (!priority)
      return "#6B7280";
    const colorMap = {
      "low": "#10B981",
      // Green
      "medium": "#F59E0B",
      // Amber
      "high": "#F97316",
      // Orange
      "critical": "#EF4444"
      // Red
    };
    return colorMap[priority.slug] || "#6B7280";
  }
  getStatusDescription(statusId) {
    if (!statusId)
      return "Work order status";
    const status = this.statusOptions.find((s) => s.id === statusId);
    if (!status)
      return "Work order status";
    const descriptionMap = {
      "open": "Work order is open and ready for assignment",
      "in-progress": "Work order is currently being worked on",
      "completed": "Work order has been completed successfully",
      "cancelled": "Work order has been cancelled",
      "pending": "Work order is pending approval or resources"
    };
    return descriptionMap[status.slug] || "Work order status";
  }
  getPriorityDescription(priorityId) {
    if (!priorityId)
      return "Work order priority level";
    const priority = this.priorityOptions.find((p) => p.id === priorityId);
    if (!priority)
      return "Work order priority level";
    const descriptionMap = {
      "low": "Low priority - can be addressed when convenient",
      "medium": "Medium priority - should be addressed soon",
      "high": "High priority - needs immediate attention",
      "critical": "Critical priority - requires immediate action"
    };
    return descriptionMap[priority.slug] || "Work order priority level";
  }
  static \u0275fac = function WorkOrderFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderFiltersComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WorkOrderService), \u0275\u0275directiveInject(AssetService), \u0275\u0275directiveInject(LocationService), \u0275\u0275directiveInject(MetaWorkOrdersService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderFiltersComponent, selectors: [["app-work-order-filters"]], outputs: { filtersChanged: "filtersChanged" }, standalone: false, decls: 48, vars: 23, consts: [[1, "filters-section"], [1, "filters-container", 3, "formGroup"], [1, "search-input-wrapper"], [1, "search-input"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon", "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "formControlName", "search", "placeholder", "Search work orders by title, description, or asset...", 1, "search-field", 3, "keydown.enter"], [1, "filter-grid"], [1, "filter-dropdown", 3, "clickOutside"], [1, "filter-label"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "relative", 3, "click"], ["type", "button", 1, "filter-button", 3, "click"], [1, "button-content"], ["class", "placeholder-text", 4, "ngIf"], ["class", "selected-option", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "chevron-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "dropdown-menu", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "action-buttons"], [1, "placeholder-text"], [1, "selected-option"], [1, "status-indicator"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "selected-text"], [1, "dropdown-menu"], [1, "dropdown-header"], [1, "dropdown-option", 3, "click"], [1, "option-content"], [1, "option-icon", "bg-gray-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 10h16M4 14h16M4 18h16"], [1, "option-text"], [1, "option-label"], [1, "option-description"], ["type", "button", "class", "dropdown-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dropdown-option", 3, "click"], [1, "option-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], [1, "priority-indicator"], [1, "category-indicator"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-purple-600"], [1, "option-icon", "bg-purple-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-purple-600"], ["type", "button", 1, "action-btn", "secondary", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["type", "button", 1, "action-btn", "primary", 3, "click"]], template: function WorkOrderFiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "input", 6);
      \u0275\u0275listener("keydown.enter", function WorkOrderFiltersComponent_Template_input_keydown_enter_6_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
      \u0275\u0275listener("clickOutside", function WorkOrderFiltersComponent_Template_div_clickOutside_8_listener() {
        return ctx.showStatusDropdown = false;
      });
      \u0275\u0275elementStart(9, "label", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 10);
      \u0275\u0275element(11, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 12);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_div_click_13_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(14, "button", 13);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_button_click_14_listener() {
        return ctx.toggleStatusDropdown();
      });
      \u0275\u0275elementStart(15, "div", 14);
      \u0275\u0275template(16, WorkOrderFiltersComponent_span_16_Template, 2, 0, "span", 15)(17, WorkOrderFiltersComponent_div_17_Template, 6, 5, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 17);
      \u0275\u0275element(19, "path", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(20, WorkOrderFiltersComponent_div_20_Template, 16, 1, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 8);
      \u0275\u0275listener("clickOutside", function WorkOrderFiltersComponent_Template_div_clickOutside_21_listener() {
        return ctx.showPriorityDropdown = false;
      });
      \u0275\u0275elementStart(22, "label", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 10);
      \u0275\u0275element(24, "path", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Priority ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "div", 12);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_div_click_26_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(27, "button", 13);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_button_click_27_listener() {
        return ctx.togglePriorityDropdown();
      });
      \u0275\u0275elementStart(28, "div", 14);
      \u0275\u0275template(29, WorkOrderFiltersComponent_span_29_Template, 2, 0, "span", 15)(30, WorkOrderFiltersComponent_div_30_Template, 6, 5, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 17);
      \u0275\u0275element(32, "path", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(33, WorkOrderFiltersComponent_div_33_Template, 16, 1, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "div", 8);
      \u0275\u0275listener("clickOutside", function WorkOrderFiltersComponent_Template_div_clickOutside_34_listener() {
        return ctx.showCategoryDropdown = false;
      });
      \u0275\u0275elementStart(35, "label", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(36, "svg", 10);
      \u0275\u0275element(37, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "div", 12);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_div_click_39_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(40, "button", 13);
      \u0275\u0275listener("click", function WorkOrderFiltersComponent_Template_button_click_40_listener() {
        return ctx.toggleCategoryDropdown();
      });
      \u0275\u0275elementStart(41, "div", 14);
      \u0275\u0275template(42, WorkOrderFiltersComponent_span_42_Template, 2, 0, "span", 15)(43, WorkOrderFiltersComponent_div_43_Template, 6, 1, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 17);
      \u0275\u0275element(45, "path", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(46, WorkOrderFiltersComponent_div_46_Template, 16, 1, "div", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(47, WorkOrderFiltersComponent_Conditional_47_Template, 9, 0, "div", 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.showStatusDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.getStatusLabel() || ctx.getStatusLabel() === "All Status");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusLabel() && ctx.getStatusLabel() !== "All Status");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.showStatusDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showStatusDropdown);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.showPriorityDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.getPriorityLabel() || ctx.getPriorityLabel() === "All Priority");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getPriorityLabel() && ctx.getPriorityLabel() !== "All Priority");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.showPriorityDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showPriorityDropdown);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.showCategoryDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.getCategoryLabel() || ctx.getCategoryLabel() === "All Categories");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getCategoryLabel() && ctx.getCategoryLabel() !== "All Categories");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.showCategoryDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showCategoryDropdown);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.checkFilter() ? 47 : -1);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ClickOutsideDirective], styles: ["\n\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  position: relative;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  font-size: 1rem;\n  background: #f9fafb;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);\n  transform: translateY(-1px);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n  font-weight: 400;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 1.25rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-right: 0.5rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 1rem;\n  text-align: left;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 56px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  background: #f9fafb;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button.active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .placeholder-text[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-style: italic;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%], \n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   .priority-indicator[_ngcontent-%COMP%], \n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   .category-indicator[_ngcontent-%COMP%], \n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   .asset-indicator[_ngcontent-%COMP%], \n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   .location-indicator[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%] {\n  color: #111827;\n  font-weight: 500;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n  transition: transform 0.3s ease;\n  flex-shrink: 0;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   .chevron-icon.active[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  z-index: 50;\n  max-height: 20rem;\n  overflow: auto;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f9fafb;\n  border-radius: 12px 12px 0 0;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e5e7eb;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: transparent;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #f3f4f6;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]:focus {\n  background-color: #f8fafc;\n  outline: none;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option.selected[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n  font-weight: 500;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]   .option-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  text-align: start;\n  width: 100%;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]   .option-content[_ngcontent-%COMP%]   .option-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]   .option-content[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]   .option-content[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]   .option-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]   .option-content[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]   .option-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  line-height: 1.2;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%] {\n  background: white;\n  border-color: #d1d5db;\n  color: #6b7280;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  color: #374151;\n  background: #f9fafb;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1400px) {\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 1200px) {\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .filters-section[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .filters-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n    padding: 0.875rem 0.875rem 0.875rem 2.75rem;\n    font-size: 0.875rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    left: 0.875rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-bottom: 0.5rem;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%]   .filter-dropdown[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n    min-height: 48px;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=work-order-filters.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderFiltersComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-filters", standalone: false, template: `<div class="filters-section">\r
  <div class="filters-container" [formGroup]="filterForm">\r
    <!-- Search Input - Full Width -->\r
    <div class="search-input-wrapper">\r
      <div class="search-input">\r
        <svg class="search-icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
        </svg>\r
        <input\r
          class="search-field"\r
          type="text"\r
          formControlName="search"\r
          placeholder="Search work orders by title, description, or asset..."\r
          (keydown.enter)="onSearch()">\r
      </div>\r
    </div>\r
\r
    <!-- Filter Grid - 4 Columns -->\r
    <div class="filter-grid">\r
      <!-- Status Dropdown -->\r
      <div class="filter-dropdown" (clickOutside)="showStatusDropdown = false">\r
        <label class="filter-label">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
          Status\r
        </label>\r
        <div class="relative" (click)="$event.stopPropagation()">\r
          <button\r
            type="button"\r
            (click)="toggleStatusDropdown()"\r
            class="filter-button"\r
            [class.active]="showStatusDropdown">\r
            <div class="button-content">\r
              <span *ngIf="!getStatusLabel() || getStatusLabel() === 'All Status'"\r
                    class="placeholder-text">All Status</span>\r
              <div *ngIf="getStatusLabel() && getStatusLabel() !== 'All Status'" class="selected-option">\r
                <div class="status-indicator" [style.background-color]="getStatusColor(getStatusValue()) + '20'">\r
                  <svg class="w-4 h-4" [style.color]="getStatusColor(getStatusValue())" fill="none"\r
                       stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                  </svg>\r
                </div>\r
                <span class="selected-text">{{ getStatusLabel() }}</span>\r
              </div>\r
              <svg class="chevron-icon" [class.active]="showStatusDropdown" fill="none" stroke="currentColor"\r
                   viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
            </div>\r
          </button>\r
\r
          <!-- Dropdown Menu -->\r
          <div *ngIf="showStatusDropdown" class="dropdown-menu">\r
            <div class="dropdown-header">\r
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
              </svg>\r
              Select Status\r
            </div>\r
            <button\r
              class="dropdown-option"\r
              (click)="selectStatus(null)">\r
              <div class="option-content">\r
                <div class="option-icon bg-gray-100">\r
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r
                  </svg>\r
                </div>\r
                <div class="option-text">\r
                  <div class="option-label">All Status</div>\r
                  <div class="option-description">Show all statuses</div>\r
                </div>\r
              </div>\r
            </button>\r
            <button\r
              *ngFor="let option of statusOptions"\r
              type="button"\r
              (click)="selectStatus(option.id)"\r
              class="dropdown-option"\r
              [class.selected]="getStatusValue() === option.id">\r
              <div class="option-content">\r
                <div class="option-icon" [style.background-color]="getStatusColor(option.id) + '20'">\r
                  <svg class="w-5 h-5" [style.color]="getStatusColor(option.id)" fill="none" stroke="currentColor"\r
                       viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                  </svg>\r
                </div>\r
                <div class="option-text">\r
                  <div class="option-label">{{ option.name }}</div>\r
                  <div class="option-description">{{ getStatusDescription(option.id) }}</div>\r
                </div>\r
              </div>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Priority Dropdown -->\r
      <div class="filter-dropdown" (clickOutside)="showPriorityDropdown = false">\r
        <label class="filter-label">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
          </svg>\r
          Priority\r
        </label>\r
        <div class="relative" (click)="$event.stopPropagation()">\r
          <button\r
            type="button"\r
            (click)="togglePriorityDropdown()"\r
            class="filter-button"\r
            [class.active]="showPriorityDropdown">\r
            <div class="button-content">\r
              <span *ngIf="!getPriorityLabel() || getPriorityLabel() === 'All Priority'" class="placeholder-text">All Priority</span>\r
              <div *ngIf="getPriorityLabel() && getPriorityLabel() !== 'All Priority'" class="selected-option">\r
                <div class="priority-indicator" [style.background-color]="getPriorityColor(getPriorityValue()) + '20'">\r
                  <svg class="w-4 h-4" [style.color]="getPriorityColor(getPriorityValue())" fill="none"\r
                       stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
                  </svg>\r
                </div>\r
                <span class="selected-text">{{ getPriorityLabel() }}</span>\r
              </div>\r
              <svg class="chevron-icon" [class.active]="showPriorityDropdown" fill="none" stroke="currentColor"\r
                   viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
            </div>\r
          </button>\r
\r
          <!-- Dropdown Menu -->\r
          <div *ngIf="showPriorityDropdown" class="dropdown-menu">\r
            <div class="dropdown-header">\r
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
              </svg>\r
              Select Priority\r
            </div>\r
            <button\r
              class="dropdown-option"\r
              (click)="selectPriority(null)">\r
              <div class="option-content">\r
                <div class="option-icon bg-gray-100">\r
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r
                  </svg>\r
                </div>\r
                <div class="option-text">\r
                  <div class="option-label">All Priority</div>\r
                  <div class="option-description">Show all priorities</div>\r
                </div>\r
              </div>\r
            </button>\r
            <button\r
              *ngFor="let option of priorityOptions"\r
              type="button"\r
              (click)="selectPriority(option.id)"\r
              class="dropdown-option"\r
              [class.selected]="getPriorityValue() === option.id">\r
              <div class="option-content">\r
                <div class="option-icon" [style.background-color]="getPriorityColor(option.id) + '20'">\r
                  <svg class="w-5 h-5" [style.color]="getPriorityColor(option.id)" fill="none" stroke="currentColor"\r
                       viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
                  </svg>\r
                </div>\r
                <div class="option-text">\r
                  <div class="option-label">{{ option.name }}</div>\r
                  <div class="option-description">{{ getPriorityDescription(option.id) }}</div>\r
                </div>\r
              </div>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Category Dropdown -->\r
      <div class="filter-dropdown" (clickOutside)="showCategoryDropdown = false">\r
        <label class="filter-label">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
          </svg>\r
          Category\r
        </label>\r
        <div class="relative" (click)="$event.stopPropagation()">\r
          <button\r
            type="button"\r
            (click)="toggleCategoryDropdown()"\r
            class="filter-button"\r
            [class.active]="showCategoryDropdown">\r
            <div class="button-content">\r
              <span *ngIf="!getCategoryLabel() || getCategoryLabel() === 'All Categories'" class="placeholder-text">All Categories</span>\r
              <div *ngIf="getCategoryLabel() && getCategoryLabel() !== 'All Categories'" class="selected-option">\r
                <div class="category-indicator">\r
                  <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
                  </svg>\r
                </div>\r
                <span class="selected-text">{{ getCategoryLabel() }}</span>\r
              </div>\r
              <svg class="chevron-icon" [class.active]="showCategoryDropdown" fill="none" stroke="currentColor"\r
                   viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
            </div>\r
          </button>\r
\r
          <!-- Dropdown Menu -->\r
          <div *ngIf="showCategoryDropdown" class="dropdown-menu">\r
            <div class="dropdown-header">\r
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
              </svg>\r
              Select Category\r
            </div>\r
            <button\r
              class="dropdown-option"\r
              (click)="selectCategory(null)">\r
              <div class="option-content">\r
                <div class="option-icon bg-gray-100">\r
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r
                  </svg>\r
                </div>\r
                <div class="option-text">\r
                  <div class="option-label">All Categories</div>\r
                  <div class="option-description">Show all categories</div>\r
                </div>\r
              </div>\r
            </button>\r
            <button\r
              *ngFor="let option of categoryOptions"\r
              type="button"\r
              (click)="selectCategory(option.id)"\r
              class="dropdown-option"\r
              [class.selected]="getCategoryValue() === option.id">\r
              <div class="option-content">\r
                <div class="option-icon bg-purple-100">\r
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
                  </svg>\r
                </div>\r
                <div class="option-text">\r
                  <div class="option-label">{{ option.name }}</div>\r
                  <div class="option-description">Category</div>\r
                </div>\r
              </div>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
    @if (checkFilter()) {\r
      <!-- Action Buttons Row -->\r
      <div class="action-buttons">\r
\r
        <button\r
          type="button"\r
          class="action-btn secondary"\r
          (click)="clearFilters()">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
          </svg>\r
          Clear Filters\r
        </button>\r
\r
\r
        <button\r
          type="button"\r
          class="action-btn primary"\r
          (click)="onSearch()">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
          Apply Filters\r
        </button>\r
      </div>\r
\r
    }\r
\r
  </div>\r
</div>\r
`, styles: ["/* src/app/work-orders/components/work-order-filters/work-order-filters.component.scss */\n.filters-section {\n  margin-bottom: 2rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.filters-section .filters-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  position: relative;\n}\n.filters-section .filters-container .search-input-wrapper .search-input {\n  position: relative;\n  width: 100%;\n}\n.filters-section .filters-container .search-input-wrapper .search-input .search-field {\n  width: 100%;\n  padding: 1rem 1rem 1rem 3rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  font-size: 1rem;\n  background: #f9fafb;\n  transition: all 0.3s ease;\n  font-weight: 500;\n}\n.filters-section .filters-container .search-input-wrapper .search-input .search-field:focus {\n  outline: none;\n  border-color: #2563eb;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);\n  transform: translateY(-1px);\n}\n.filters-section .filters-container .search-input-wrapper .search-input .search-field::placeholder {\n  color: #9ca3af;\n  font-weight: 400;\n}\n.filters-section .filters-container .search-input-wrapper .search-input .search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  font-size: 1.25rem;\n}\n.filters-section .filters-container .filter-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .filter-label {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .filter-label svg {\n  color: #6b7280;\n  margin-right: 0.5rem;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative {\n  position: relative;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button {\n  width: 100%;\n  padding: 0 1rem;\n  text-align: left;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 56px;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button:hover {\n  border-color: #d1d5db;\n  background: #f9fafb;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button.active {\n  border-color: #2563eb;\n  background: #eff6ff;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .placeholder-text {\n  color: #9ca3af;\n  font-style: italic;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .selected-option {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .selected-option .status-indicator,\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .selected-option .priority-indicator,\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .selected-option .category-indicator,\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .selected-option .asset-indicator,\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .selected-option .location-indicator {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .selected-option .selected-text {\n  color: #111827;\n  font-weight: 500;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .chevron-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n  transition: transform 0.3s ease;\n  flex-shrink: 0;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button .button-content .chevron-icon.active {\n  transform: rotate(180deg);\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  z-index: 50;\n  max-height: 20rem;\n  overflow: auto;\n  animation: slideDown 0.2s ease-out;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-header {\n  padding: 1rem 1rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f9fafb;\n  border-radius: 12px 12px 0 0;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e5e7eb;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-header svg {\n  margin-right: 0.5rem;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: transparent;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #f3f4f6;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option:last-child {\n  border-bottom: none;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option:hover {\n  background-color: #f8fafc;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option:focus {\n  background-color: #f8fafc;\n  outline: none;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option.selected {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n  font-weight: 500;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option .option-content {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  text-align: start;\n  width: 100%;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option .option-content .option-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option .option-content .option-text {\n  flex: 1;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option .option-content .option-text .option-label {\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.filters-section .filters-container .filter-grid .filter-dropdown .relative .dropdown-menu .dropdown-option .option-content .option-text .option-description {\n  font-size: 0.75rem;\n  color: #6b7280;\n  line-height: 1.2;\n}\n.filters-section .filters-container .action-buttons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.filters-section .filters-container .action-buttons .action-btn {\n  padding: 0.75rem 1.5rem;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filters-section .filters-container .action-buttons .action-btn:hover {\n  transform: translateY(-1px);\n}\n.filters-section .filters-container .action-buttons .action-btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.filters-section .filters-container .action-buttons .action-btn.secondary {\n  background: white;\n  border-color: #d1d5db;\n  color: #6b7280;\n}\n.filters-section .filters-container .action-buttons .action-btn.secondary:hover {\n  border-color: #9ca3af;\n  color: #374151;\n  background: #f9fafb;\n}\n.filters-section .filters-container .action-buttons .action-btn.primary {\n  background: #2563eb;\n  color: white;\n}\n.filters-section .filters-container .action-buttons .action-btn.primary:hover {\n  background: #1d4ed8;\n  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1400px) {\n  .filters-section .filters-container .filter-grid {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 1200px) {\n  .filters-section .filters-container .filter-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .filters-section {\n    padding: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n  .filters-section .filters-container {\n    gap: 1.5rem;\n  }\n  .filters-section .filters-container .filter-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .filters-section .filters-container .action-buttons {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .filters-section .filters-container .action-buttons .action-btn {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .filters-section {\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .filters-section .filters-container {\n    gap: 1rem;\n  }\n  .filters-section .filters-container .search-input-wrapper .search-input .search-field {\n    padding: 0.875rem 0.875rem 0.875rem 2.75rem;\n    font-size: 0.875rem;\n  }\n  .filters-section .filters-container .search-input-wrapper .search-input .search-icon {\n    font-size: 1rem;\n    left: 0.875rem;\n  }\n  .filters-section .filters-container .filter-grid {\n    gap: 0.75rem;\n  }\n  .filters-section .filters-container .filter-grid .filter-dropdown .filter-label {\n    font-size: 0.75rem;\n    margin-bottom: 0.5rem;\n  }\n  .filters-section .filters-container .filter-grid .filter-dropdown .relative .filter-button {\n    padding: 0.875rem;\n    min-height: 48px;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=work-order-filters.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: WorkOrderService }, { type: AssetService }, { type: LocationService }, { type: MetaWorkOrdersService }], { filtersChanged: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderFiltersComponent, { className: "WorkOrderFiltersComponent", filePath: "src/app/work-orders/components/work-order-filters/work-order-filters.component.ts", lineNumber: 17 });
})();

// src/app/work-orders/components/edit-work-order-modal/edit-work-order-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EditWorkOrderModalComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading form...");
    \u0275\u0275elementEnd()();
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("title"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", status_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r4.name);
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("status_id"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const priority_r5 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", priority_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(priority_r5.name);
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("priority"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", category_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r6.name);
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("category_id"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("due_date"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("description"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("estimated_hours"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("notes"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_option_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r7 = ctx.$implicit;
    \u0275\u0275property("value", asset_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", asset_r7.name, " (", asset_r7.asset_id, ") ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("asset_id"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_option_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r8 = ctx.$implicit;
    \u0275\u0275property("value", location_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r8.name, " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("location_id"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_option_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r9 = ctx.$implicit;
    \u0275\u0275property("value", user_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r9.first_name, " ", user_r9.last_name, " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("assigned_to"), " ");
  }
}
function EditWorkOrderModalComponent_div_0_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 19);
    \u0275\u0275listener("ngSubmit", function EditWorkOrderModalComponent_div_0_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "h3", 21);
    \u0275\u0275text(3, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23)(6, "label", 24);
    \u0275\u0275text(7, "Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 25);
    \u0275\u0275template(9, EditWorkOrderModalComponent_div_0_form_12_div_9_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 22)(11, "div", 23)(12, "label", 27);
    \u0275\u0275text(13, "Status *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 28)(15, "option", 29);
    \u0275\u0275text(16, "Select status");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, EditWorkOrderModalComponent_div_0_form_12_For_18_Template, 2, 2, "option", 30, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, EditWorkOrderModalComponent_div_0_form_12_div_19_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 23)(21, "label", 31);
    \u0275\u0275text(22, "Priority *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 32)(24, "option", 29);
    \u0275\u0275text(25, "Select Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, EditWorkOrderModalComponent_div_0_form_12_For_27_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, EditWorkOrderModalComponent_div_0_form_12_div_28_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 22)(30, "div", 23)(31, "label", 33);
    \u0275\u0275text(32, "Category (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 34)(34, "option", 29);
    \u0275\u0275text(35, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(36, EditWorkOrderModalComponent_div_0_form_12_For_37_Template, 2, 2, "option", 30, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, EditWorkOrderModalComponent_div_0_form_12_div_38_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 23)(40, "label", 35);
    \u0275\u0275text(41, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 36);
    \u0275\u0275template(43, EditWorkOrderModalComponent_div_0_form_12_div_43_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 22)(45, "div", 23)(46, "label", 37);
    \u0275\u0275text(47, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "textarea", 38);
    \u0275\u0275template(49, EditWorkOrderModalComponent_div_0_form_12_div_49_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 22)(51, "div", 23)(52, "label", 39);
    \u0275\u0275text(53, "Estimated Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 40);
    \u0275\u0275template(55, EditWorkOrderModalComponent_div_0_form_12_div_55_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 23)(57, "label", 41);
    \u0275\u0275text(58, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "textarea", 42);
    \u0275\u0275template(60, EditWorkOrderModalComponent_div_0_form_12_div_60_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 20)(62, "h3", 21);
    \u0275\u0275text(63, "Assignment & Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 22)(65, "div", 23)(66, "label", 43);
    \u0275\u0275text(67, "Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "select", 44);
    \u0275\u0275listener("change", function EditWorkOrderModalComponent_div_0_form_12_Template_select_change_68_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAssetChange($event));
    });
    \u0275\u0275elementStart(69, "option", 29);
    \u0275\u0275text(70, "Select Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, EditWorkOrderModalComponent_div_0_form_12_option_71_Template, 2, 3, "option", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, EditWorkOrderModalComponent_div_0_form_12_div_72_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 23)(74, "label", 46);
    \u0275\u0275text(75, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "select", 47)(77, "option", 29);
    \u0275\u0275text(78, "Select Location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, EditWorkOrderModalComponent_div_0_form_12_option_79_Template, 2, 2, "option", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(80, EditWorkOrderModalComponent_div_0_form_12_div_80_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 22)(82, "div", 23)(83, "label", 48);
    \u0275\u0275text(84, "Assign To Team Member (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "select", 49)(86, "option", 29);
    \u0275\u0275text(87, "Select Assignee");
    \u0275\u0275elementEnd();
    \u0275\u0275template(88, EditWorkOrderModalComponent_div_0_form_12_option_88_Template, 2, 3, "option", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, EditWorkOrderModalComponent_div_0_form_12_div_89_Template, 2, 1, "div", 26);
    \u0275\u0275elementStart(90, "div", 50)(91, "small");
    \u0275\u0275text(92, "Select an existing team member to assign the work order to");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("title"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("title"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("status_id"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.statusOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("status_id"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("priority_id"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.priorityOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("priority"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("category_id"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.categoryOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("category_id"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("due_date"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r1.hasFieldError("due_date"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("due_date"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("description"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r1.hasFieldError("description"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("description"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("estimated_hours"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r1.hasFieldError("estimated_hours"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("estimated_hours"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("notes"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r1.hasFieldError("notes"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("notes"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("asset_id"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r1.hasFieldError("asset_id"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.assets);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("asset_id"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("location_id"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r1.hasFieldError("location_id"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.locations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("location_id"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("assigned_to"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r1.hasFieldError("assigned_to"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("assigned_to"));
  }
}
function EditWorkOrderModalComponent_div_0__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "circle", 53)(2, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function EditWorkOrderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function EditWorkOrderModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function EditWorkOrderModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h2", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5);
    \u0275\u0275element(5, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Edit Work Order ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", function EditWorkOrderModalComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 8);
    \u0275\u0275element(9, "path", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275template(11, EditWorkOrderModalComponent_div_0_div_11_Template, 4, 0, "div", 11)(12, EditWorkOrderModalComponent_div_0_form_12_Template, 93, 51, "form", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13)(14, "button", 14);
    \u0275\u0275listener("click", function EditWorkOrderModalComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 15);
    \u0275\u0275listener("click", function EditWorkOrderModalComponent_div_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(17, EditWorkOrderModalComponent_div_0__svg_svg_17_Template, 3, 0, "svg", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx_r1.isFormReady);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormReady);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.canSubmit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmitting ? "Updating..." : "Update Work Order", " ");
  }
}
var EditWorkOrderModalComponent = class _EditWorkOrderModalComponent {
  fb;
  workOrderService;
  assetService;
  locationService;
  teamService;
  authService;
  metaWorkOrdersService;
  toastService;
  workOrder = null;
  isOpen = false;
  modalClosed = new EventEmitter();
  workOrderUpdated = new EventEmitter();
  editForm;
  isSubmitting = false;
  statusOptions = [];
  priorityOptions = [];
  categoryOptions = [];
  // Getter to safely access the form
  get form() {
    return this.editForm || null;
  }
  // Check if the form is ready to use
  get isFormReady() {
    return this.editForm && typeof this.editForm.patchValue === "function";
  }
  // Safely ensure the form is ready
  ensureFormReady() {
    if (!this.isFormReady) {
      console.log("EditWorkOrderModalComponent: Form not ready, initializing now");
      this.initForm();
      return this.isFormReady;
    }
    return true;
  }
  // Dropdown data
  users = [];
  assets = [];
  locations = [];
  teams = [];
  subscription = new Subscription();
  constructor(fb, workOrderService, assetService, locationService, teamService, authService, metaWorkOrdersService, toastService) {
    this.fb = fb;
    this.workOrderService = workOrderService;
    this.assetService = assetService;
    this.locationService = locationService;
    this.teamService = teamService;
    this.authService = authService;
    this.metaWorkOrdersService = metaWorkOrdersService;
    this.toastService = toastService;
  }
  ngOnInit() {
    this.initForm();
    this.loadDropdownData();
    this.loadMetadataOptions();
    if (this.workOrder && this.isFormReady) {
      this.populateForm();
    }
  }
  // Removed ngDoCheck as it was called too frequently and could cause performance issues
  // We'll rely on ngOnChanges for detecting input changes instead
  ngOnChanges() {
    if (!this.isFormReady) {
      this.initForm();
    }
    if (this.workOrder && this.isFormReady) {
      this.populateForm();
    }
    if (this.isOpen && this.workOrder) {
      this.resetForm();
      this.populateForm();
    }
  }
  resetForm() {
    if (!this.isFormReady) {
      this.initForm();
    }
    if (this.isFormReady && this.editForm) {
      this.editForm.reset();
      this.editForm.markAsUntouched();
      this.editForm.markAsPristine();
    }
  }
  initForm() {
    try {
      this.editForm = this.fb.group({
        title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
        priority_id: ["", Validators.required],
        status_id: ["", Validators.required],
        category_id: [""],
        due_date: [""],
        description: ["", [Validators.maxLength(1e3)]],
        estimated_hours: ["", [Validators.min(0)]],
        notes: [""],
        asset_id: [""],
        location_id: [""],
        assigned_to: [""]
      });
      if (!this.editForm || typeof this.editForm.patchValue !== "function") {
        console.error("EditWorkOrderModalComponent: Form not properly initialized");
        this.editForm = null;
        return;
      }
    } catch (error) {
      console.error("EditWorkOrderModalComponent: Error initializing form:", error);
      this.editForm = null;
    }
  }
  populateForm() {
    if (!this.workOrder || !this.isFormReady) {
      return;
    }
    this.editForm.patchValue({
      title: this.workOrder.title || "",
      priority_id: this.workOrder.priority?.id || this.workOrder.priority || "",
      status_id: this.workOrder.status?.id || this.workOrder.status || "",
      category_id: this.workOrder.category?.id || this.workOrder.category || "",
      due_date: this.workOrder?.due_date ? this.workOrder.due_date.split("T")[0] : void 0,
      description: this.workOrder.description || "",
      estimated_hours: this.workOrder.estimated_hours || "",
      notes: this.workOrder.notes || "",
      asset_id: this.getFieldValue(this.workOrder.asset),
      location_id: this.getFieldValue(this.workOrder.location),
      assigned_to: this.getFieldValue(this.workOrder.assigned_to)
    });
    console.log(this.editForm.get("due_date")?.value, "due_date", this.workOrder.due_date);
  }
  getFieldValue(field) {
    if (!field)
      return "";
    if (typeof field === "object" && "id" in field) {
      return field.id;
    }
    if (typeof field === "number" || typeof field === "string") {
      return field;
    }
    return "";
  }
  loadDropdownData() {
    return __async(this, null, function* () {
      try {
        const teams = yield firstValueFrom(this.teamService.getTeamMembersFlat(1e3));
        this.users = teams || [];
        const assetsResponse = yield firstValueFrom(this.assetService.getAssets({ per_page: 100 }));
        this.assets = assetsResponse?.data?.assets || assetsResponse?.data || [];
        const locationsResponse = yield firstValueFrom(this.locationService.getLocations({ per_page: 100 }));
        this.locations = locationsResponse?.data?.locations || [];
        this.teams = teams || [];
      } catch (error) {
        console.error("Error loading dropdown data:", error);
      }
    });
  }
  // Form validation helpers
  isFieldInvalid(fieldName) {
    if (!this.isFormReady || !this.editForm) {
      return false;
    }
    const field = this.editForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  getFieldError(fieldName) {
    if (!this.isFormReady || !this.editForm) {
      return "";
    }
    const field = this.editForm.get(fieldName);
    if (!field || !field.errors)
      return "";
    if (field.errors["required"]) {
      return `${this.getFieldLabel(fieldName)} is required`;
    }
    if (field.errors["minlength"]) {
      return `${this.getFieldLabel(fieldName)} must be at least ${field.errors["minlength"].requiredLength} characters`;
    }
    if (field.errors["maxlength"]) {
      return `${this.getFieldLabel(fieldName)} must not exceed ${field.errors["maxlength"].requiredLength} characters`;
    }
    if (field.errors["min"]) {
      return `${this.getFieldLabel(fieldName)} must be at least ${field.errors["min"].min}`;
    }
    return "Invalid value";
  }
  getFieldLabel(fieldName) {
    const labels = {
      title: "Title",
      status_id: "Status",
      category_id: "Category",
      priority_id: "Priority",
      due_date: "Due Date",
      description: "Description",
      estimated_hours: "Estimated Hours",
      notes: "Notes",
      asset_id: "Asset",
      location_id: "Location",
      assigned_to: "Assigned To"
    };
    return labels[fieldName] || fieldName;
  }
  hasFieldError(fieldName) {
    if (!this.isFormReady || !this.editForm) {
      return false;
    }
    return this.isFieldInvalid(fieldName);
  }
  canSubmit() {
    if (!this.isFormReady || !this.editForm) {
      return false;
    }
    const isValid = this.editForm.valid;
    const notSubmitting = !this.isSubmitting;
    return isValid && notSubmitting;
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.editForm.invalid || this.isSubmitting || !this.workOrder) {
        return;
      }
      this.isSubmitting = true;
      try {
        const formData = this.editForm.value;
        const updatePayload = {
          title: formData.title,
          status_id: formData.status_id,
          category_id: formData.category_id,
          priority_id: formData.priority_id,
          due_date: formData.due_date || null,
          description: formData.description || null,
          estimated_hours: formData.estimated_hours || null,
          notes: formData.notes || null,
          asset_id: formData.asset_id || null,
          location_id: formData.location_id || null,
          assigned_to: formData.assigned_to || null
        };
        const updatedWorkOrder = yield firstValueFrom(this.workOrderService.updateWorkOrder(this.workOrder.id, updatePayload));
        if (updatedWorkOrder) {
          this.toastService.success("Work order updated successfully");
          this.workOrderUpdated.emit(updatedWorkOrder);
          this.closeModal();
        }
      } catch (error) {
        console.error("Error updating work order:", error);
        if (error && typeof error === "object" && "error" in error && error.error && typeof error.error === "object" && "message" in error.error) {
          const message = error.error.message;
          console.error("API Error:", message);
          this.toastService.error(message || "Failed to update work order");
        } else if (error instanceof Error && error.message) {
          console.error("Network Error:", error.message);
          this.toastService.error("Network error: Failed to update work order");
        } else {
          this.toastService.error("Failed to update work order");
        }
      } finally {
        this.isSubmitting = false;
      }
    });
  }
  closeModal() {
    this.resetForm();
    this.modalClosed.emit();
  }
  onAssetChange(event) {
    const selectedId = event.target.value;
    const selectedAsset = this.assets.find((a) => a.id === +selectedId);
    this.editForm.patchValue({ location_id: selectedAsset?.location?.id || "" });
  }
  loadMetadataOptions() {
    this.metaWorkOrdersService.clearAllCache();
    this.subscription.add(this.metaWorkOrdersService.getStatus().subscribe({
      next: (statuses) => {
        this.statusOptions = statuses;
      },
      error: (error) => {
        console.error("Error loading statuses:", error);
        this.statusOptions = [];
      }
    }));
    this.subscription.add(this.metaWorkOrdersService.getPriorities().subscribe({
      next: (priorities) => {
        this.priorityOptions = priorities;
      },
      error: (error) => {
        console.error("Error loading priorities:", error);
        this.priorityOptions = [];
      }
    }));
    this.subscription.add(this.metaWorkOrdersService.getCategories().subscribe({
      next: (categories) => {
        this.categoryOptions = categories;
      },
      error: (error) => {
        console.error("Error loading categories:", error);
        this.categoryOptions = [];
      }
    }));
  }
  static \u0275fac = function EditWorkOrderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditWorkOrderModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WorkOrderService), \u0275\u0275directiveInject(AssetService), \u0275\u0275directiveInject(LocationService), \u0275\u0275directiveInject(TeamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MetaWorkOrdersService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditWorkOrderModalComponent, selectors: [["app-edit-work-order-modal"]], inputs: { workOrder: "workOrder", isOpen: "isOpen" }, outputs: { modalClosed: "modalClosed", workOrderUpdated: "workOrderUpdated" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "close-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], ["class", "loading-state", 4, "ngIf"], ["class", "edit-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "w-4 h-4 mr-2 animate-spin", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "edit-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "form-row"], [1, "form-group"], ["for", "title", 1, "form-label"], ["id", "title", "type", "text", "formControlName", "title", "placeholder", "Enter work order title", 1, "form-input"], ["class", "error-message", 4, "ngIf"], ["for", "status", 1, "form-label"], ["id", "status", "formControlName", "status_id", 1, "form-select", "capitalize"], ["value", ""], [3, "value"], ["for", "priority", 1, "form-label"], ["id", "priority", "formControlName", "priority_id", 1, "form-select", "capitalize"], ["for", "category", 1, "form-label"], ["id", "category", "formControlName", "category_id", 1, "form-select"], ["for", "due_date", 1, "form-label"], ["id", "due_date", "type", "date", "formControlName", "due_date", 1, "form-input"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "placeholder", "Enter work order description", "rows", "3", 1, "form-textarea"], ["for", "estimated_hours", 1, "form-label"], ["id", "estimated_hours", "type", "number", "formControlName", "estimated_hours", "placeholder", "0.0", "min", "0", "step", "0.5", 1, "form-input"], ["for", "notes", 1, "form-label"], ["id", "notes", "formControlName", "notes", "placeholder", "Additional notes or instructions", "rows", "3", 1, "form-textarea"], ["for", "asset_id", 1, "form-label"], ["id", "asset_id", "formControlName", "asset_id", 1, "form-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "location_id", 1, "form-label"], ["id", "location_id", "formControlName", "location_id", 1, "form-select"], ["for", "assigned_to", 1, "form-label"], ["id", "assigned_to", "formControlName", "assigned_to", 1, "form-select"], [1, "field-help"], [1, "error-message"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function EditWorkOrderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EditWorkOrderModalComponent_div_0_Template, 19, 5, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ['\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  display: none;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  text-align: center;\n  color: #6b7280;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border: 3px solid #e5e7eb;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.edit-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.edit-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.edit-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e5e7eb;\n}\n.edit-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .edit-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]::after {\n  content: " *";\n  color: #dc2626;\n  display: none;\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label.required[_ngcontent-%COMP%]::after {\n  display: inline;\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background-color: white;\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%], \n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select.error[_ngcontent-%COMP%], \n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, \n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]::placeholder, \n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.edit-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:has(.form-group:only-child) {\n  grid-template-columns: 1fr;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  min-width: 120px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #2563eb;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1d4ed8;\n  transform: translateY(-1px);\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #9ca3af;\n}\n@media (max-width: 640px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    max-height: 95vh;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 0.75rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem 1rem;\n    flex-direction: column;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .edit-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .edit-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .edit-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 0.75rem;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.modal-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  position: relative;\n}\n.btn[_ngcontent-%COMP%]:disabled   .animate-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=edit-work-order-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditWorkOrderModalComponent, [{
    type: Component,
    args: [{ selector: "app-edit-work-order-modal", standalone: false, template: `<div class="modal-overlay" *ngIf="isOpen" (click)="closeModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <h2 class="modal-title">\r
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
        </svg>\r
        Edit Work Order\r
      </h2>\r
      <button class="close-btn" (click)="closeModal()" type="button">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="modal-body">\r
      <!-- Loading state while form is being initialized -->\r
      <div *ngIf="!isFormReady" class="loading-state">\r
        <div class="spinner"></div>\r
        <p>Loading form...</p>\r
      </div>\r
\r
      <form *ngIf="isFormReady" [formGroup]="editForm" (ngSubmit)="onSubmit()" class="edit-form">\r
        <!-- Basic Information -->\r
        <div class="form-section">\r
          <h3 class="section-title">Basic Information</h3>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label for="title" class="form-label">Title *</label>\r
              <input\r
                id="title"\r
                type="text"\r
                formControlName="title"\r
                class="form-input"\r
                placeholder="Enter work order title"\r
                [class.error]="isFieldInvalid('title')"\r
              />\r
              <div *ngIf="isFieldInvalid('title')" class="error-message">\r
                {{ getFieldError('title') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label for="status" class="form-label">Status *</label>\r
              <select\r
                id="status"\r
                formControlName="status_id"\r
                class="form-select capitalize"\r
                [class.error]="isFieldInvalid('status_id')"\r
              >\r
                <option value="">Select status</option>\r
                @for (status of statusOptions;track status.id) {\r
                  <option value="{{ status.id }}">{{ status.name }}</option>\r
                }\r
              </select>\r
              <div *ngIf="isFieldInvalid('status_id')" class="error-message">\r
                {{ getFieldError('status_id') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="priority" class="form-label">Priority *</label>\r
              <select\r
                id="priority"\r
                formControlName="priority_id"\r
                class="form-select capitalize"\r
                [class.error]="isFieldInvalid('priority_id')"\r
              >\r
                <option value="">Select Priority</option>\r
               @for (priority of priorityOptions;track priority) {\r
                <option value="{{ priority.id }}">{{ priority.name }}</option>\r
               }\r
              </select>\r
              <div *ngIf="isFieldInvalid('priority')" class="error-message">\r
                {{ getFieldError('priority') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label for="category" class="form-label">Category (Optional)</label>\r
              <select\r
                id="category"\r
                formControlName="category_id"\r
                class="form-select"\r
                [class.error]="isFieldInvalid('category_id')"\r
              >\r
                <option value="">Select Category</option>\r
                @for (category of categoryOptions;track category.id) {\r
                  <option value="{{ category.id }}">{{ category.name }}</option>\r
                }\r
              </select>\r
              <div *ngIf="isFieldInvalid('category_id')" class="error-message">\r
                {{ getFieldError('category_id') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group" [class.error]="hasFieldError('due_date')">\r
              <label for="due_date" class="form-label">Due Date</label>\r
              <input\r
                id="due_date"\r
                type="date"\r
                formControlName="due_date"\r
                class="form-input"\r
                [class.error-input]="hasFieldError('due_date')"\r
              />\r
              <div *ngIf="hasFieldError('due_date')" class="error-message">\r
                {{ getFieldError('due_date') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group" [class.error]="hasFieldError('description')">\r
              <label for="description" class="form-label">Description</label>\r
              <textarea\r
                id="description"\r
                formControlName="description"\r
                class="form-textarea"\r
                placeholder="Enter work order description"\r
                rows="3"\r
                [class.error-input]="hasFieldError('description')"\r
              ></textarea>\r
              <div *ngIf="hasFieldError('description')" class="error-message">\r
                {{ getFieldError('description') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group" [class.error]="hasFieldError('estimated_hours')">\r
              <label for="estimated_hours" class="form-label">Estimated Hours</label>\r
              <input\r
                id="estimated_hours"\r
                type="number"\r
                formControlName="estimated_hours"\r
                class="form-input"\r
                placeholder="0.0"\r
                min="0"\r
                step="0.5"\r
                [class.error-input]="hasFieldError('estimated_hours')"\r
              />\r
              <div *ngIf="hasFieldError('estimated_hours')" class="error-message">\r
                {{ getFieldError('estimated_hours') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group" [class.error]="hasFieldError('notes')">\r
              <label for="notes" class="form-label">Notes</label>\r
              <textarea\r
                id="notes"\r
                formControlName="notes"\r
                class="form-textarea"\r
                placeholder="Additional notes or instructions"\r
                rows="3"\r
                [class.error-input]="hasFieldError('notes')"\r
              ></textarea>\r
              <div *ngIf="hasFieldError('notes')" class="error-message">\r
                {{ getFieldError('notes') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Assignment & Asset -->\r
        <div class="form-section">\r
          <h3 class="section-title">Assignment & Asset</h3>\r
\r
          <div class="form-row">\r
            <div class="form-group" [class.error]="hasFieldError('asset_id')">\r
              <label for="asset_id" class="form-label">Asset</label>\r
              <select\r
                (change)="onAssetChange($event)"\r
                id="asset_id"\r
                formControlName="asset_id"\r
                class="form-select"\r
                [class.error-input]="hasFieldError('asset_id')"\r
              >\r
                <option value="">Select Asset</option>\r
                <option *ngFor="let asset of assets" [value]="asset.id">\r
                  {{ asset.name }} ({{ asset.asset_id }})\r
                </option>\r
              </select>\r
              <div *ngIf="hasFieldError('asset_id')" class="error-message">\r
                {{ getFieldError('asset_id') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group" [class.error]="hasFieldError('location_id')">\r
              <label for="location_id" class="form-label">Location</label>\r
              <select\r
                id="location_id"\r
                formControlName="location_id"\r
                class="form-select"\r
                [class.error-input]="hasFieldError('location_id')"\r
              >\r
                <option value="">Select Location</option>\r
                <option *ngFor="let location of locations" [value]="location.id">\r
                  {{ location.name }}\r
                </option>\r
              </select>\r
              <div *ngIf="hasFieldError('location_id')" class="error-message">\r
                {{ getFieldError('location_id') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group" [class.error]="hasFieldError('assigned_to')">\r
              <label for="assigned_to" class="form-label">Assign To Team Member (Optional)</label>\r
              <select\r
                id="assigned_to"\r
                formControlName="assigned_to"\r
                class="form-select"\r
                [class.error-input]="hasFieldError('assigned_to')"\r
              >\r
                <option value="">Select Assignee</option>\r
                <option *ngFor="let user of users" [value]="user.id">\r
                  {{ user.first_name }} {{ user.last_name }}\r
                </option>\r
              </select>\r
              <div *ngIf="hasFieldError('assigned_to')" class="error-message">\r
                {{ getFieldError('assigned_to') }}\r
              </div>\r
              <div class="field-help">\r
                <small>Select an existing team member to assign the work order to</small>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
\r
      </form>\r
    </div>\r
\r
    <!-- Modal Footer -->\r
    <div class="modal-footer">\r
      <button type="button" class="btn btn-secondary" (click)="closeModal()">\r
        Cancel\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-primary"\r
        (click)="onSubmit()"\r
        [disabled]="!canSubmit()"\r
      >\r
        <svg *ngIf="isSubmitting" class="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
        {{ isSubmitting ? 'Updating...' : 'Update Work Order' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/work-orders/components/edit-work-order-modal/edit-work-order-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n}\n.modal-content::-webkit-scrollbar {\n  width: 0;\n  display: none;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header .modal-title {\n  display: flex;\n  align-items: center;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.modal-header .modal-title svg {\n  color: #6b7280;\n}\n.modal-header .close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.modal-header .close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header .close-btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  text-align: center;\n  color: #6b7280;\n}\n.loading-state .spinner {\n  width: 2rem;\n  height: 2rem;\n  border: 3px solid #e5e7eb;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state p {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.edit-form .form-section {\n  margin-bottom: 2rem;\n}\n.edit-form .form-section:last-child {\n  margin-bottom: 0;\n}\n.edit-form .form-section .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e5e7eb;\n}\n.edit-form .form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (max-width: 768px) {\n  .edit-form .form-row {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.edit-form .form-group {\n  display: flex;\n  flex-direction: column;\n}\n.edit-form .form-group .form-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.edit-form .form-group .form-label::after {\n  content: " *";\n  color: #dc2626;\n  display: none;\n}\n.edit-form .form-group .form-label.required::after {\n  display: inline;\n}\n.edit-form .form-group .form-input,\n.edit-form .form-group .form-select,\n.edit-form .form-group .form-textarea {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background-color: white;\n}\n.edit-form .form-group .form-input:focus,\n.edit-form .form-group .form-select:focus,\n.edit-form .form-group .form-textarea:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.edit-form .form-group .form-input.error,\n.edit-form .form-group .form-select.error,\n.edit-form .form-group .form-textarea.error {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.edit-form .form-group .form-input::placeholder,\n.edit-form .form-group .form-select::placeholder,\n.edit-form .form-group .form-textarea::placeholder {\n  color: #9ca3af;\n}\n.edit-form .form-group .form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.edit-form .form-group .error-message {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.edit-form .form-row:has(.form-group:only-child) {\n  grid-template-columns: 1fr;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.modal-footer .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  min-width: 120px;\n}\n.modal-footer .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-footer .btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.modal-footer .btn-secondary {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer .btn-secondary:hover:not(:disabled) {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.modal-footer .btn-primary {\n  background-color: #2563eb;\n  color: white;\n}\n.modal-footer .btn-primary:hover:not(:disabled) {\n  background-color: #1d4ed8;\n  transform: translateY(-1px);\n}\n.modal-footer .btn-primary:disabled {\n  background-color: #9ca3af;\n}\n@media (max-width: 640px) {\n  .modal-overlay {\n    padding: 0.5rem;\n  }\n  .modal-content {\n    max-height: 95vh;\n  }\n  .modal-header {\n    padding: 1rem 1rem 0.75rem;\n  }\n  .modal-header .modal-title {\n    font-size: 1.125rem;\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-footer {\n    padding: 0.75rem 1rem 1rem;\n    flex-direction: column;\n  }\n  .modal-footer .btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .edit-form .form-row {\n    gap: 0.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .edit-form .form-section {\n    margin-bottom: 1.5rem;\n  }\n  .edit-form .form-section .section-title {\n    font-size: 1rem;\n    margin-bottom: 0.75rem;\n  }\n}\n.modal-overlay {\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-content {\n  animation: slideIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.btn:disabled {\n  position: relative;\n}\n.btn:disabled .animate-spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=edit-work-order-modal.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: WorkOrderService }, { type: AssetService }, { type: LocationService }, { type: TeamService }, { type: AuthService }, { type: MetaWorkOrdersService }, { type: ToastService }], { workOrder: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], modalClosed: [{
    type: Output
  }], workOrderUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditWorkOrderModalComponent, { className: "EditWorkOrderModalComponent", filePath: "src/app/work-orders/components/edit-work-order-modal/edit-work-order-modal.component.ts", lineNumber: 83 });
})();

// src/app/work-orders/components/work-order-list/work-order-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
function WorkOrderListComponent_Conditional_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.getSelectedCount(), " selected) ");
  }
}
function WorkOrderListComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 26)(2, "input", 27);
    \u0275\u0275listener("change", function WorkOrderListComponent_Conditional_2_Conditional_8_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4, "Select All");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isAllSelected())("indeterminate", ctx_r1.isPartiallySelected());
  }
}
function WorkOrderListComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "button", 31);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateBulkStatus("open"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Set Open ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateBulkStatus("in_progress"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 14);
    \u0275\u0275element(8, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Set In Progress ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 31);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_Conditional_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateBulkStatus("completed"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 14);
    \u0275\u0275element(12, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Set Completed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 30)(15, "button", 31);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_Conditional_10_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateBulkPriority("high"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 14);
    \u0275\u0275element(17, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Set High Priority ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 31);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_Conditional_10_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateBulkPriority("critical"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 14);
    \u0275\u0275element(21, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Set Critical ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 36);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_Conditional_10_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModalForSelected());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 37);
    \u0275\u0275element(25, "rect", 38)(26, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Delete ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275property("disabled", ctx_r1.getSelectedCount() === 0);
  }
}
function WorkOrderListComponent_Conditional_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 43);
    \u0275\u0275element(4, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 45)(6, "h3", 46);
    \u0275\u0275text(7, "No work orders found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9, "Get started by creating your first work order to streamline your maintenance workflows.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 48)(11, "button", 49);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_div_21_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createWorkOrder());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 50);
    \u0275\u0275element(13, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Create Work Order ");
    \u0275\u0275elementEnd()()()();
  }
}
function WorkOrderListComponent_Conditional_2_div_22_app_work_order_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-work-order-card", 54);
    \u0275\u0275listener("editRequested", function WorkOrderListComponent_Conditional_2_div_22_app_work_order_card_1_Template_app_work_order_card_editRequested_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editWorkOrder($event));
    })("deleteRequested", function WorkOrderListComponent_Conditional_2_div_22_app_work_order_card_1_Template_app_work_order_card_deleteRequested_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteWorkOrder($event));
    })("selectionChanged", function WorkOrderListComponent_Conditional_2_div_22_app_work_order_card_1_Template_app_work_order_card_selectionChanged_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCardSelectionChanged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const workOrder_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("workOrder", workOrder_r7)("showBulkSelection", true)("isSelected", ctx_r1.selectedWorkOrders.has(workOrder_r7.id));
  }
}
function WorkOrderListComponent_Conditional_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, WorkOrderListComponent_Conditional_2_div_22_app_work_order_card_1_Template, 1, 3, "app-work-order-card", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.workOrders);
  }
}
function WorkOrderListComponent_Conditional_2_div_23_div_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const workOrder_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate("title", workOrder_r9.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(workOrder_r9.description);
  }
}
function WorkOrderListComponent_Conditional_2_div_23_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 63)(3, "div", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 65);
    \u0275\u0275element(5, "path", 66)(6, "path", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 68)(8, "div", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, WorkOrderListComponent_Conditional_2_div_23_div_18_div_10_Template, 2, 2, "div", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 62)(12, "div", 71)(13, "span", 72);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 73);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 62)(18, "div", 74)(19, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 14);
    \u0275\u0275element(21, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 14);
    \u0275\u0275element(26, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 62)(30, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 14);
    \u0275\u0275element(32, "path", 79)(33, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 62)(37, "div", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 14);
    \u0275\u0275element(39, "path", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 62)(44, "div", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 14);
    \u0275\u0275element(46, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 62)(51, "div", 85)(52, "button", 86);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_div_23_div_18_Template_button_click_52_listener() {
      const workOrder_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewWorkOrderDetails(workOrder_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 14);
    \u0275\u0275element(54, "path", 67)(55, "path", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "button", 88);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_div_23_div_18_Template_button_click_56_listener() {
      const workOrder_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editWorkOrder(workOrder_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(57, "svg", 14);
    \u0275\u0275element(58, "path", 89);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const workOrder_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275propertyInterpolate("title", workOrder_r9.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(workOrder_r9.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", workOrder_r9.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "status-" + workOrder_r9.status.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(workOrder_r9.status.name), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "priority-" + workOrder_r9.priority.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityLabel(workOrder_r9.priority.name), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getAssigneeName(workOrder_r9));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getAssetName(workOrder_r9));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getLocationName(workOrder_r9));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(workOrder_r9.due_date ? \u0275\u0275pipeBind2(42, 12, workOrder_r9.due_date, "MMM d, y") : "Not set");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 15, workOrder_r9.created_at, "MMM d, y"));
  }
}
function WorkOrderListComponent_Conditional_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 58);
    \u0275\u0275text(4, "Work Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 58);
    \u0275\u0275text(6, "Status & Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 58);
    \u0275\u0275text(8, "Assignee & Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 58);
    \u0275\u0275text(10, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 58);
    \u0275\u0275text(12, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 58);
    \u0275\u0275text(14, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 58);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 59);
    \u0275\u0275template(18, WorkOrderListComponent_Conditional_2_div_23_div_18_Template, 59, 18, "div", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.workOrders);
  }
}
function WorkOrderListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 7);
    \u0275\u0275element(4, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275template(6, WorkOrderListComponent_Conditional_2_span_6_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 10);
    \u0275\u0275template(8, WorkOrderListComponent_Conditional_2_Conditional_8_Template, 5, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275template(10, WorkOrderListComponent_Conditional_2_Conditional_10_Template, 28, 1);
    \u0275\u0275elementStart(11, "button", 13);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshWorkOrders());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 14);
    \u0275\u0275element(13, "path", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 16)(15, "button", 17);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewMode("grid"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 14);
    \u0275\u0275element(17, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 19);
    \u0275\u0275listener("click", function WorkOrderListComponent_Conditional_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewMode("list"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 14);
    \u0275\u0275element(20, "path", 20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(21, WorkOrderListComponent_Conditional_2_div_21_Template, 15, 0, "div", 21)(22, WorkOrderListComponent_Conditional_2_div_22_Template, 2, 1, "div", 22)(23, WorkOrderListComponent_Conditional_2_div_23_Template, 19, 1, "div", 23);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "app-delete-confirmation-modal", 24);
    \u0275\u0275listener("closeModal", function WorkOrderListComponent_Conditional_2_Template_app_delete_confirmation_modal_closeModal_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    })("confirmDelete", function WorkOrderListComponent_Conditional_2_Template_app_delete_confirmation_modal_confirmDelete_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.total, " work orders ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getSelectedCount() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getSelectedCount() > 0 ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getSelectedCount() > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "grid");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "list");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.workOrders.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.workOrders.length > 0 && ctx_r1.viewMode === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.workOrders.length > 0 && ctx_r1.viewMode === "list");
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r1.showDeleteConfirmationModal)("selectedCount", ctx_r1.selectedWorkOrders.size)("entitySingular", "Work Order")("entityPlural", "Work Orders")("warningText", null);
  }
}
function WorkOrderListComponent_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 94);
  }
}
function WorkOrderListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 91);
    \u0275\u0275element(2, "div", 92);
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275repeaterCreate(4, WorkOrderListComponent_Conditional_3_For_5_Template, 1, 0, "div", 94, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function WorkOrderListComponent_app_pagination_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-pagination", 95);
    \u0275\u0275listener("pageChange", function WorkOrderListComponent_app_pagination_4_Template_app_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    })("perPageChange", function WorkOrderListComponent_app_pagination_4_Template_app_pagination_perPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPerPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pagination", ctx_r1.pagination);
  }
}
function WorkOrderListComponent_app_edit_work_order_modal_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-work-order-modal", 96);
    \u0275\u0275listener("modalClosed", function WorkOrderListComponent_app_edit_work_order_modal_5_Template_app_edit_work_order_modal_modalClosed_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    })("workOrderUpdated", function WorkOrderListComponent_app_edit_work_order_modal_5_Template_app_edit_work_order_modal_workOrderUpdated_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadWorkOrders());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("workOrder", ctx_r1.selectedWorkOrder)("isOpen", ctx_r1.isEditModalOpen);
  }
}
var WorkOrderListComponent = class _WorkOrderListComponent {
  workOrderService;
  router;
  toastService;
  createWorkOrderRequested = new EventEmitter();
  prefsService = inject(PreferencesService);
  workOrders = [];
  viewMode = "grid";
  isLoading = true;
  // Edit modal properties
  isEditModalOpen = false;
  selectedWorkOrder = null;
  // Pagination properties
  currentPage = 1;
  perPage = 10;
  total = 0;
  totalPages = 0;
  // Pagination
  pagination = {
    current_page: 1,
    last_page: 1,
    per_page: 20,
    total: 0,
    from: 0,
    to: 0
  };
  // Current filters to preserve during pagination
  currentFilters = {};
  // Bulk operations properties
  selectedWorkOrders = /* @__PURE__ */ new Set();
  showBulkActions = false;
  // Delete modal state (align with Asset delete flow)
  showDeleteConfirmationModal = false;
  // Math object for template access
  Math = Math;
  subscription = new Subscription();
  constructor(workOrderService, router, toastService) {
    this.workOrderService = workOrderService;
    this.router = router;
    this.toastService = toastService;
  }
  ngOnInit() {
    const itemsPerPage = this.prefsService.get("items_per_page") || 20;
    this.perPage = itemsPerPage;
    this.pagination.per_page = itemsPerPage;
    this.loadWorkOrders(1, this.currentFilters);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  loadWorkOrders(page = 1, filters) {
    this.isLoading = true;
    this.currentPage = page;
    const params = {
      page: this.currentPage,
      per_page: this.perPage
    };
    if (filters) {
      if (filters.search && filters.search.trim()) {
        params.search = filters.search.trim();
      }
      if (filters.status_id) {
        params.status_id = filters.status_id;
      }
      if (filters.priority_id) {
        params.priority_id = filters.priority_id;
      }
      if (filters.category_id) {
        params.category_id = filters.category_id;
      }
      if (filters.asset_id && filters.asset_id !== "") {
        params.asset_id = filters.asset_id;
      }
      if (filters.location_id && filters.location_id !== "") {
        params.location_id = filters.location_id;
      }
      if (filters.assigned_to && filters.assigned_to !== "") {
        params.assigned_to = filters.assigned_to;
      }
      if (filters.is_overdue !== void 0 && filters.is_overdue !== false) {
        params.is_overdue = filters.is_overdue;
      }
      if (filters.start_date && filters.start_date !== "") {
        params.start_date = filters.start_date;
      }
      if (filters.end_date && filters.end_date !== "") {
        params.end_date = filters.end_date;
      }
      if (filters.due_start_date && filters.due_start_date !== "") {
        params.due_start_date = filters.due_start_date;
      }
      if (filters.due_end_date && filters.due_end_date !== "") {
        params.due_end_date = filters.due_end_date;
      }
      if (filters.sortBy) {
        params.sort_by = filters.sortBy;
      }
      if (filters.sortOrder) {
        params.sort_dir = filters.sortOrder;
      }
    }
    this.subscription.add(this.workOrderService.getWorkOrders(params).subscribe({
      next: (response) => {
        let data = response.data;
        this.workOrders = data.data || [];
        this.total = data.total || 0;
        this.currentPage = data.current_page || 1;
        this.perPage = data.per_page || 10;
        this.totalPages = data.last_page || 1;
        this.pagination = {
          current_page: this.currentPage,
          last_page: this.totalPages,
          per_page: this.perPage,
          total: this.total,
          from: (this.currentPage - 1) * this.perPage + 1,
          to: Math.min(this.currentPage * this.perPage, this.total)
        };
        this.isLoading = false;
      },
      error: (error) => {
        console.error("WorkOrderListComponent: Error loading work orders:", error);
        this.toastService.error("Failed to load work orders");
        this.workOrders = [];
        this.isLoading = false;
      }
    }));
  }
  setViewMode(mode) {
    this.viewMode = mode;
  }
  refreshWorkOrders() {
    this.loadWorkOrders(this.currentPage, this.currentFilters);
  }
  onFiltersChanged(filters) {
    console.log("WorkOrderListComponent: Filters changed:", filters);
    this.currentFilters = __spreadValues({}, filters);
    this.loadWorkOrders(1, filters);
  }
  createWorkOrder() {
    this.createWorkOrderRequested.emit();
  }
  // Helper methods for list view
  getStatusLabel(status) {
    const statusMap = {
      "open": "Open",
      "in_progress": "In Progress",
      "completed": "Completed",
      "cancelled": "Cancelled",
      "pending": "Pending"
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
  onCardSelectionChanged(event) {
    const { workOrderId, selected } = event;
    if (selected) {
      this.selectedWorkOrders.add(workOrderId);
    } else {
      this.selectedWorkOrders.delete(workOrderId);
    }
    this.showBulkActions = this.selectedWorkOrders.size > 0;
  }
  selectAllWorkOrders() {
    this.workOrders.forEach((wo) => this.selectedWorkOrders.add(wo.id));
    this.showBulkActions = true;
  }
  deselectAllWorkOrders() {
    this.selectedWorkOrders.clear();
    this.showBulkActions = false;
  }
  getSelectedCount() {
    return this.selectedWorkOrders.size;
  }
  isAllSelected() {
    return this.workOrders.length > 0 && this.selectedWorkOrders.size === this.workOrders.length;
  }
  isPartiallySelected() {
    return this.selectedWorkOrders.size > 0 && this.selectedWorkOrders.size < this.workOrders.length;
  }
  toggleSelectAll() {
    if (this.isAllSelected()) {
      this.deselectAllWorkOrders();
    } else {
      this.selectAllWorkOrders();
    }
  }
  // Bulk status update
  updateBulkStatus(status) {
    if (this.selectedWorkOrders.size === 0)
      return;
    const workOrderIds = Array.from(this.selectedWorkOrders);
    const updates = workOrderIds.map((id) => ({
      id,
      status
    }));
    console.log("Bulk status update:", updates);
    this.refreshWorkOrders();
    this.selectedWorkOrders.clear();
    this.showBulkActions = false;
  }
  // Bulk priority update
  updateBulkPriority(priority) {
    if (this.selectedWorkOrders.size === 0)
      return;
    const workOrderIds = Array.from(this.selectedWorkOrders);
    const updates = workOrderIds.map((id) => ({
      id,
      priority
    }));
    console.log("Bulk priority update:", updates);
    this.refreshWorkOrders();
    this.selectedWorkOrders.clear();
    this.showBulkActions = false;
  }
  getAssigneeName(workOrder) {
    if (workOrder.assigned_to) {
      if (typeof workOrder.assigned_to === "object") {
        const assignedTo = workOrder.assigned_to;
        const firstName = assignedTo.first_name || "";
        const lastName = assignedTo.last_name || "";
        return `${firstName} ${lastName}`.trim() || "Unassigned";
      }
      return String(workOrder.assigned_to);
    }
    return "Unassigned";
  }
  getAssetName(workOrder) {
    if (workOrder.asset) {
      if (typeof workOrder.asset === "object") {
        const asset = workOrder.asset;
        return asset.name || asset.asset_id || "No Asset";
      }
      return String(workOrder.asset);
    }
    return "No Asset";
  }
  getLocationName(workOrder) {
    if (workOrder.location) {
      if (typeof workOrder.location === "object") {
        const location = workOrder.location;
        return location.name || location.full_path || "No Location";
      }
      return String(workOrder.location);
    }
    return "No Location";
  }
  viewWorkOrderDetails(workOrder) {
    this.router.navigate(["/work-orders", workOrder.id]);
  }
  editWorkOrder(workOrder) {
    this.selectedWorkOrder = workOrder;
    this.isEditModalOpen = true;
  }
  deleteWorkOrder(workOrder) {
    if (!workOrder?.id) {
      return;
    }
    this.selectedWorkOrders.clear();
    this.selectedWorkOrders.add(workOrder.id);
    this.showDeleteConfirmationModal = true;
  }
  closeDeleteModal() {
    this.showDeleteConfirmationModal = false;
  }
  openDeleteModalForSelected() {
    if (this.selectedWorkOrders.size === 0) {
      return;
    }
    this.showDeleteConfirmationModal = true;
  }
  deleteSelected(deletionReason) {
    const ids = Array.from(this.selectedWorkOrders);
    if (ids.length === 0) {
      this.showDeleteConfirmationModal = false;
      return;
    }
    this.isLoading = true;
    let completed = 0;
    const finalize = () => {
      completed++;
      if (completed >= ids.length) {
        this.showDeleteConfirmationModal = false;
        this.selectedWorkOrders.clear();
        this.loadWorkOrders(this.currentPage, this.currentFilters);
      }
    };
    ids.forEach((id) => {
      this.subscription.add(this.workOrderService.deleteWorkOrder(id).subscribe({
        next: () => {
          this.toastService.success("Work order deleted successfully");
          finalize();
        },
        error: (error) => {
          console.error("Failed to delete work order:", error);
          this.toastService.error("Failed to delete work order");
          finalize();
        }
      }));
    });
  }
  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedWorkOrder = null;
  }
  onWorkOrderUpdated(updatedWorkOrder) {
    const index = this.workOrders.findIndex((wo) => wo.id === updatedWorkOrder.id);
    if (index !== -1) {
      this.workOrders[index] = updatedWorkOrder;
    }
    this.closeEditModal();
    this.toastService.success("Work order updated successfully");
    console.log("Work order updated successfully:", updatedWorkOrder);
  }
  /**
   * Handle pagination page change
   */
  onPageChange(page) {
    this.currentPage = page;
    this.loadWorkOrders(page, this.currentFilters);
  }
  /**
   * Handle pagination per page change
   */
  onPerPageChange(perPage) {
    this.perPage = perPage;
    this.currentPage = 1;
    this.loadWorkOrders(1, this.currentFilters);
  }
  static \u0275fac = function WorkOrderListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderListComponent)(\u0275\u0275directiveInject(WorkOrderService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderListComponent, selectors: [["app-work-order-list"]], outputs: { createWorkOrderRequested: "createWorkOrderRequested" }, standalone: false, decls: 6, vars: 4, consts: [[1, "list-section"], [3, "filtersChanged"], [1, "loading-state"], [3, "pagination", "pageChange", "perPageChange", 4, "ngIf"], [3, "workOrder", "isOpen", "modalClosed", "workOrderUpdated", 4, "ngIf"], [1, "list-header"], [1, "orders-count", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 1 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"], ["class", "selected-count", 4, "ngIf"], [1, "bulk-operations"], [1, "bulk-selection"], [1, "header-actions"], ["title", "Refresh", 1, "refresh-btn", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "view-toggle"], ["title", "Grid View", 1, "view-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["title", "List View", 1, "view-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 10h16M4 14h16M4 18h16"], ["class", "empty-state", 4, "ngIf"], ["class", "work-orders-grid", 4, "ngIf"], ["class", "work-orders-list", 4, "ngIf"], [3, "closeModal", "confirmDelete", "isOpen", "selectedCount", "entitySingular", "entityPlural", "warningText"], [1, "selected-count"], [1, "select-all-label"], ["type", "checkbox", 1, "select-all-checkbox", 3, "change", "checked", "indeterminate"], [1, "select-all-text"], [1, "bulk-actions", "!hidden"], [1, "bulk-action-group"], [1, "bulk-action-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"], ["title", "Delete Selected", 1, "bulk-delete-btn", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["x", "4", "y", "4", "width", "16", "height", "16", "rx", "2", "stroke-width", "2"], ["d", "M8 8l8 8M8 16l8-8", "stroke-width", "2"], [1, "empty-state"], [1, "empty-content"], [1, "empty-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-20", "h-20"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "empty-text"], [1, "empty-title"], [1, "empty-description"], [1, "empty-actions"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "work-orders-grid"], ["class", "work-order-card-item", 3, "workOrder", "showBulkSelection", "isSelected", "editRequested", "deleteRequested", "selectionChanged", 4, "ngFor", "ngForOf"], [1, "work-order-card-item", 3, "editRequested", "deleteRequested", "selectionChanged", "workOrder", "showBulkSelection", "isSelected"], [1, "work-orders-list"], [1, "list-table-header"], [1, "list-table-row"], [1, "list-table-cell", "header-cell"], [1, "list-table-body"], ["class", "list-table-row hover:bg-gray-50", 4, "ngFor", "ngForOf"], [1, "list-table-row", "hover:bg-gray-50"], [1, "list-table-cell"], [1, "work-order-info"], [1, "work-order-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "work-order-details"], [1, "work-order-title", "line-clamp-1", 3, "title"], ["class", "work-order-description line-clamp-2", 3, "title", 4, "ngIf"], [1, "badges-container", "!flex-row"], [1, "badge", "status-badge", 3, "ngClass"], [1, "badge", "priority-badge", 3, "ngClass"], [1, "assignee-asset-info"], [1, "info-item"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "location-info"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "due-date-info"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "created-info"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "actions-container"], ["title", "View Details", 1, "action-btn", "view-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["title", "Edit Work Order", 1, "action-btn", "edit-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "work-order-description", "line-clamp-2", 3, "title"], [1, "loading-skeleton"], [1, "skeleton-header"], [1, "skeleton-cards"], [1, "skeleton-card"], [3, "pageChange", "perPageChange", "pagination"], [3, "modalClosed", "workOrderUpdated", "workOrder", "isOpen"]], template: function WorkOrderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-work-order-filters", 1);
      \u0275\u0275listener("filtersChanged", function WorkOrderListComponent_Template_app_work_order_filters_filtersChanged_1_listener($event) {
        return ctx.onFiltersChanged($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, WorkOrderListComponent_Conditional_2_Template, 25, 17, "div")(3, WorkOrderListComponent_Conditional_3_Template, 6, 1, "div", 2)(4, WorkOrderListComponent_app_pagination_4_Template, 1, 1, "app-pagination", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, WorkOrderListComponent_app_edit_work_order_modal_5_Template, 1, 2, "app-edit-work-order-modal", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isLoading ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.workOrders.length > 0 || ctx.pagination.total > 0 && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditModalOpen);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, DeleteConfirmationModalComponent, PaginationComponent, WorkOrderCardComponent, WorkOrderFiltersComponent, EditWorkOrderModalComponent, DatePipe], styles: ["\n\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .orders-count[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .orders-count[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #2563eb;\n  font-weight: 600;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .bulk-operations[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex: 1;\n  margin: 0 2rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .bulk-operations[_ngcontent-%COMP%]   .bulk-selection[_ngcontent-%COMP%]   .select-all-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .bulk-operations[_ngcontent-%COMP%]   .bulk-selection[_ngcontent-%COMP%]   .select-all-label[_ngcontent-%COMP%]   .select-all-checkbox[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: #2563eb;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .bulk-operations[_ngcontent-%COMP%]   .bulk-selection[_ngcontent-%COMP%]   .select-all-label[_ngcontent-%COMP%]   .select-all-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-action-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-action-group[_ngcontent-%COMP%]   .bulk-action-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  white-space: nowrap;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-action-group[_ngcontent-%COMP%]   .bulk-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-action-group[_ngcontent-%COMP%]   .bulk-action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-delete-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ef4444;\n  border-radius: 6px;\n  background: white;\n  color: #ef4444;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  white-space: nowrap;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-delete-btn[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: white;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-delete-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  padding: 0 12px;\n  border-radius: 10px;\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fee2e2;\n  transition: background 0.2s ease;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-delete-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-delete-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-mode-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #d1d5db;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-mode-btn[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n  color: #374151;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-mode-btn.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-mode-btn.active[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .bulk-mode-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #d1d5db;\n  padding: 0.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  color: #374151;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  padding: 0.25rem;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background: #e5e7eb;\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #2563eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%] {\n  height: 60px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-filters[_ngcontent-%COMP%] {\n  height: 50px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-cards[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%] {\n  height: 200px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 12px;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n  padding: 3rem 2rem;\n  text-align: center;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 0.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.4;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 400px;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  border: none;\n  cursor: pointer;\n  min-width: 140px;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  box-shadow: 0 1px 3px 0 rgba(37, 99, 235, 0.3);\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.4);\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-grid[_ngcontent-%COMP%]   .work-order-card-item[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-grid[_ngcontent-%COMP%]   .work-order-card-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .work-order-card-item.list-view[_ngcontent-%COMP%] {\n  min-height: auto;\n  padding: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px 8px 0 0;\n  border-bottom: none;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1.5fr 1fr 1fr 1fr 0.5fr;\n  gap: 1rem;\n  padding: 1rem;\n  align-items: center;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .header-cell[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0 0 8px 8px;\n  background: white;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1.5fr 1fr 1fr 1fr 0.5fr;\n  gap: 1rem;\n  padding: 1rem;\n  align-items: center;\n  border-bottom: 1px solid #f3f4f6;\n  transition: background-color 0.2s ease;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: #eff6ff;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2563eb;\n  flex-shrink: 0;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-details[_ngcontent-%COMP%]   .work-order-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-details[_ngcontent-%COMP%]   .work-order-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.4;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n  text-align: center;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge.status-open[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge.status-in-progress[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge.status-completed[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge.priority-low[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge.priority-medium[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge.priority-high[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge.priority-critical[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .assignee-asset-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .assignee-asset-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .assignee-asset-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  width: 1rem;\n  height: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%], \n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .due-date-info[_ngcontent-%COMP%], \n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .created-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .due-date-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .created-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  width: 1rem;\n  height: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   .action-btn.view-btn[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   .action-btn.edit-btn[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  color: #d97706;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n  padding: 1rem;\n  margin-top: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 2.5rem;\n  text-align: center;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n@media (max-width: 768px) {\n  .list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    padding: 1rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    align-self: center;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 4rem;\n    height: 4rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: 200px;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n    padding: 0.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    padding: 0.5rem 0;\n    border-bottom: 1px solid #f3f4f6;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]:last-child, \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-icon[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-icon[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .assignee-asset-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .assignee-asset-info[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .due-date-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .created-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .due-date-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .created-info[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 480px) {\n  .list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .orders-count[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-grid[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n    padding: 0.375rem 0.5rem;\n    min-width: 2rem;\n    font-size: 0.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 3.5rem;\n    height: 3.5rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: 180px;\n    padding: 0.625rem 1.25rem;\n    font-size: 0.875rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%] {\n    padding: 0.375rem 0;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-icon[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-icon[_ngcontent-%COMP%] {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-details[_ngcontent-%COMP%]   .work-order-title[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-details[_ngcontent-%COMP%]   .work-order-title[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-details[_ngcontent-%COMP%]   .work-order-description[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .work-order-info[_ngcontent-%COMP%]   .work-order-details[_ngcontent-%COMP%]   .work-order-description[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .badges-container[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    padding: 0.125rem 0.5rem;\n    font-size: 0.625rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .assignee-asset-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .due-date-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .created-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .assignee-asset-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .due-date-info[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .created-info[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .assignee-asset-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .due-date-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-header[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .created-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .assignee-asset-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .due-date-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .list-section[_ngcontent-%COMP%]   .work-orders-list[_ngcontent-%COMP%]   .list-table-body[_ngcontent-%COMP%]   .list-table-row[_ngcontent-%COMP%]   .list-table-cell[_ngcontent-%COMP%]   .created-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 0.875rem;\n    height: 0.875rem;\n  }\n}\n/*# sourceMappingURL=work-order-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderListComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-list", standalone: false, template: `<div class="list-section">\r
  <!-- Filters are always rendered so selections persist during loading -->\r
  <app-work-order-filters (filtersChanged)="onFiltersChanged($event)"></app-work-order-filters>\r
\r
\r
  <!-- Work Orders Content -->\r
  @if (!isLoading) {\r
    <div>\r
      <div class="list-header">\r
        <div class="orders-count flex items-center gap-2">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor" class="size-5">\r
            <path stroke-linecap="round" stroke-linejoin="round"\r
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 1 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>\r
          </svg>\r
          {{ total }} work orders\r
          <span *ngIf="getSelectedCount() > 0" class="selected-count">\r
          ({{ getSelectedCount() }} selected)\r
        </span>\r
        </div>\r
\r
        <!-- Bulk Operations -->\r
        <div class="bulk-operations">\r
          @if (getSelectedCount() > 0) {\r
            <div class="bulk-selection">\r
              <label class="select-all-label">\r
                <input\r
                  type="checkbox"\r
                  [checked]="isAllSelected()"\r
                  [indeterminate]="isPartiallySelected()"\r
                  (change)="toggleSelectAll()"\r
                  class="select-all-checkbox">\r
                <span class="select-all-text">Select All</span>\r
              </label>\r
            </div>\r
          }\r
        </div>\r
\r
        <div class="header-actions">\r
          @if (getSelectedCount() > 0) {\r
\r
            <div class="bulk-actions !hidden">\r
              <div class="bulk-action-group">\r
                <button\r
                  class="bulk-action-btn"\r
                  (click)="updateBulkStatus('open')">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
                  </svg>\r
                  Set Open\r
                </button>\r
                <button\r
                  class="bulk-action-btn"\r
                  (click)="updateBulkStatus('in_progress')">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
                  </svg>\r
                  Set In Progress\r
                </button>\r
                <button\r
                  class="bulk-action-btn"\r
                  (click)="updateBulkStatus('completed')">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
                  </svg>\r
                  Set Completed\r
                </button>\r
              </div>\r
\r
              <div class="bulk-action-group">\r
                <button\r
                  class="bulk-action-btn"\r
                  (click)="updateBulkPriority('high')">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
                  </svg>\r
                  Set High Priority\r
                </button>\r
                <button\r
                  class="bulk-action-btn"\r
                  (click)="updateBulkPriority('critical')">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
                  </svg>\r
                  Set Critical\r
                </button>\r
              </div>\r
            </div>\r
\r
            <button\r
              class="bulk-delete-btn"\r
              [disabled]="getSelectedCount() === 0"\r
              (click)="openDeleteModalForSelected()"\r
              title="Delete Selected">\r
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <rect x="4" y="4" width="16" height="16" rx="2" stroke-width="2"/>\r
                <path d="M8 8l8 8M8 16l8-8" stroke-width="2"/>\r
              </svg>\r
              Delete\r
            </button>\r
          }\r
\r
          <button\r
            class="refresh-btn"\r
            (click)="refreshWorkOrders()"\r
            title="Refresh"\r
            [disabled]="isLoading">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
            </svg>\r
          </button>\r
\r
          <div class="view-toggle">\r
            <button\r
              class="view-btn"\r
              [class.active]="viewMode === 'grid'"\r
              (click)="setViewMode('grid')"\r
              title="Grid View">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>\r
              </svg>\r
            </button>\r
            <button\r
              class="view-btn"\r
              [class.active]="viewMode === 'list'"\r
              (click)="setViewMode('list')"\r
              title="List View">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Empty State -->\r
      <div class="empty-state" *ngIf="workOrders.length === 0">\r
        <div class="empty-content">\r
          <div class="empty-icon">\r
            <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"\r
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
            </svg>\r
          </div>\r
          <div class="empty-text">\r
            <h3 class="empty-title">No work orders found</h3>\r
            <p class="empty-description">Get started by creating your first work order to streamline your maintenance\r
              workflows.</p>\r
          </div>\r
          <div class="empty-actions">\r
            <button class="btn btn-primary" (click)="createWorkOrder()">\r
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
              </svg>\r
              Create Work Order\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Work Orders Grid View -->\r
      <div *ngIf="workOrders.length > 0 && viewMode === 'grid'" class="work-orders-grid">\r
        <app-work-order-card\r
          *ngFor="let workOrder of workOrders"\r
          [workOrder]="workOrder"\r
          [showBulkSelection]="true"\r
          [isSelected]="selectedWorkOrders.has(workOrder.id)"\r
          (editRequested)="editWorkOrder($event)"\r
          (deleteRequested)="deleteWorkOrder($event)"\r
          (selectionChanged)="onCardSelectionChanged($event)"\r
          class="work-order-card-item">\r
        </app-work-order-card>\r
      </div>\r
\r
      <!-- Work Orders List View -->\r
      <div *ngIf="workOrders.length > 0 && viewMode === 'list'" class="work-orders-list">\r
        <!-- Table Header -->\r
        <div class="list-table-header">\r
          <div class="list-table-row">\r
            <div class="list-table-cell header-cell">Work Order</div>\r
            <div class="list-table-cell header-cell">Status & Priority</div>\r
            <div class="list-table-cell header-cell">Assignee & Asset</div>\r
            <div class="list-table-cell header-cell">Location</div>\r
            <div class="list-table-cell header-cell">Due Date</div>\r
            <div class="list-table-cell header-cell">Created</div>\r
            <div class="list-table-cell header-cell">Actions</div>\r
          </div>\r
        </div>\r
\r
        <!-- Table Body -->\r
        <div class="list-table-body">\r
          <div *ngFor="let workOrder of workOrders" class="list-table-row hover:bg-gray-50">\r
            <div class="list-table-cell">\r
              <div class="work-order-info">\r
                <div class="work-order-icon">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                  </svg>\r
                </div>\r
                <div class="work-order-details">\r
                  <div class="work-order-title line-clamp-1" title="{{ workOrder.title }}">{{ workOrder.title }}</div>\r
                  <div class="work-order-description line-clamp-2" title="{{ workOrder.description }}" *ngIf="workOrder.description">{{ workOrder.description }}</div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="list-table-cell">\r
              <div class="badges-container !flex-row">\r
              <span class="badge status-badge" [ngClass]="'status-' + workOrder.status.slug">\r
                {{ getStatusLabel(workOrder.status.name) }}\r
              </span>\r
                <span class="badge priority-badge" [ngClass]="'priority-' + workOrder.priority.slug">\r
                {{ getPriorityLabel(workOrder.priority.name) }}\r
              </span>\r
              </div>\r
            </div>\r
\r
            <div class="list-table-cell">\r
              <div class="assignee-asset-info">\r
                <div class="info-item">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
                  </svg>\r
                  <span>{{ getAssigneeName(workOrder) }}</span>\r
                </div>\r
                <div class="info-item">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r
                  </svg>\r
                  <span>{{ getAssetName(workOrder) }}</span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="list-table-cell">\r
              <div class="location-info">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                </svg>\r
                <span>{{ getLocationName(workOrder) }}</span>\r
              </div>\r
            </div>\r
\r
            <div class="list-table-cell">\r
              <div class="due-date-info">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                </svg>\r
                <span>{{ workOrder.due_date ? (workOrder.due_date | date:'MMM d, y') : 'Not set' }}</span>\r
              </div>\r
            </div>\r
\r
            <div class="list-table-cell">\r
              <div class="created-info">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                </svg>\r
                <span>{{ workOrder.created_at | date:'MMM d, y' }}</span>\r
              </div>\r
            </div>\r
\r
            <div class="list-table-cell">\r
              <div class="actions-container">\r
                <button class="action-btn view-btn" (click)="viewWorkOrderDetails(workOrder)" title="View Details">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                  </svg>\r
                </button>\r
                <button class="action-btn edit-btn" (click)="editWorkOrder(workOrder)" title="Edit Work Order">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                  </svg>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
\r
      <!-- Delete Confirmation Modal (shared) -->\r
      <app-delete-confirmation-modal\r
        [isOpen]="showDeleteConfirmationModal"\r
        [selectedCount]="selectedWorkOrders.size"\r
        [entitySingular]="'Work Order'"\r
        [entityPlural]="'Work Orders'"\r
        [warningText]="null"\r
        (closeModal)="closeDeleteModal()"\r
        (confirmDelete)="deleteSelected($event)">\r
      </app-delete-confirmation-modal>\r
    </div>\r
  }\r
\r
  @if (isLoading) {\r
    <div class="loading-state">\r
      <div class="loading-skeleton">\r
        <div class="skeleton-header"></div>\r
        <div class="skeleton-cards">\r
          @for (item of [1, 2, 3, 4, 5, 6]; track item) {\r
            <div class="skeleton-card"></div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
\r
  <!-- Pagination -->\r
  <app-pagination\r
    *ngIf="workOrders.length > 0 || pagination.total > 0 && !isLoading"\r
    [pagination]="pagination"\r
    (pageChange)="onPageChange($event)"\r
    (perPageChange)="onPerPageChange($event)">\r
  </app-pagination>\r
\r
</div>\r
\r
<!-- Edit Work Order Modal -->\r
<app-edit-work-order-modal\r
  *ngIf="isEditModalOpen"\r
  [workOrder]="selectedWorkOrder"\r
  [isOpen]="isEditModalOpen"\r
  (modalClosed)="closeEditModal()"\r
  (workOrderUpdated)="loadWorkOrders()">\r
</app-edit-work-order-modal>\r
`, styles: ["/* src/app/work-orders/components/work-order-list/work-order-list.component.scss */\n.list-section .list-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.list-section .list-header .orders-count {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.list-section .list-header .orders-count .selected-count {\n  font-size: 0.875rem;\n  color: #2563eb;\n  font-weight: 600;\n}\n.list-section .list-header .bulk-operations {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex: 1;\n  margin: 0 2rem;\n}\n.list-section .list-header .bulk-operations .bulk-selection .select-all-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.list-section .list-header .bulk-operations .bulk-selection .select-all-label .select-all-checkbox {\n  width: 1rem;\n  height: 1rem;\n  accent-color: #2563eb;\n}\n.list-section .list-header .bulk-operations .bulk-selection .select-all-label .select-all-text {\n  font-weight: 500;\n}\n.list-section .list-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.list-section .list-header .header-actions .bulk-actions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.list-section .list-header .header-actions .bulk-actions .bulk-action-group {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.list-section .list-header .header-actions .bulk-actions .bulk-action-group .bulk-action-btn {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  white-space: nowrap;\n}\n.list-section .list-header .header-actions .bulk-actions .bulk-action-group .bulk-action-btn:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.list-section .list-header .header-actions .bulk-actions .bulk-action-group .bulk-action-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section .list-header .header-actions .bulk-actions .bulk-delete-btn {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ef4444;\n  border-radius: 6px;\n  background: white;\n  color: #ef4444;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  white-space: nowrap;\n}\n.list-section .list-header .header-actions .bulk-actions .bulk-delete-btn:hover {\n  background: #ef4444;\n  color: white;\n}\n.list-section .list-header .header-actions .bulk-actions .bulk-delete-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section .list-header .header-actions .bulk-delete-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  padding: 0 12px;\n  border-radius: 10px;\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fee2e2;\n  transition: background 0.2s ease;\n}\n.list-section .list-header .header-actions .bulk-delete-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.list-section .list-header .header-actions .bulk-delete-btn:hover:not(:disabled) {\n  background: #fee2e2;\n}\n.list-section .list-header .header-actions .bulk-delete-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.list-section .list-header .header-actions .bulk-mode-btn {\n  background: none;\n  border: 1px solid #d1d5db;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.list-section .list-header .header-actions .bulk-mode-btn:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n  color: #374151;\n}\n.list-section .list-header .header-actions .bulk-mode-btn.active {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.list-section .list-header .header-actions .bulk-mode-btn.active:hover {\n  background: #1d4ed8;\n}\n.list-section .list-header .header-actions .bulk-mode-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section .list-header .header-actions .refresh-btn {\n  background: none;\n  border: 1px solid #d1d5db;\n  padding: 0.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.list-section .list-header .header-actions .refresh-btn:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  color: #374151;\n}\n.list-section .list-header .header-actions .refresh-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.list-section .list-header .header-actions .refresh-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section .list-header .header-actions .view-toggle {\n  display: flex;\n  gap: 0.25rem;\n  background: #f3f4f6;\n  border-radius: 8px;\n  padding: 0.25rem;\n}\n.list-section .list-header .header-actions .view-toggle .view-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.list-section .list-header .header-actions .view-toggle .view-btn:hover {\n  color: #374151;\n  background: #e5e7eb;\n}\n.list-section .list-header .header-actions .view-toggle .view-btn.active {\n  background: white;\n  color: #2563eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.list-section .list-header .header-actions .view-toggle .view-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section .loading-state {\n  padding: 1rem;\n}\n.list-section .loading-state .loading-skeleton .skeleton-header {\n  height: 60px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.list-section .loading-state .loading-skeleton .skeleton-filters {\n  height: 50px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n}\n.list-section .loading-state .loading-skeleton .skeleton-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.list-section .loading-state .loading-skeleton .skeleton-cards .skeleton-card {\n  height: 200px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 12px;\n}\n@keyframes loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.list-section .empty-state {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n  padding: 3rem 2rem;\n  text-align: center;\n}\n.list-section .empty-state .empty-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.list-section .empty-state .empty-content .empty-icon {\n  color: #9ca3af;\n  margin-bottom: 0.5rem;\n}\n.list-section .empty-state .empty-content .empty-icon svg {\n  width: 5rem;\n  height: 5rem;\n}\n.list-section .empty-state .empty-content .empty-text .empty-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.4;\n}\n.list-section .empty-state .empty-content .empty-text .empty-description {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 400px;\n}\n.list-section .empty-state .empty-content .empty-actions {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n.list-section .empty-state .empty-content .empty-actions .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  border: none;\n  cursor: pointer;\n  min-width: 140px;\n}\n.list-section .empty-state .empty-content .empty-actions .btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.list-section .empty-state .empty-content .empty-actions .btn.btn-primary {\n  background: #2563eb;\n  color: white;\n  box-shadow: 0 1px 3px 0 rgba(37, 99, 235, 0.3);\n}\n.list-section .empty-state .empty-content .empty-actions .btn.btn-primary:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.4);\n}\n.list-section .empty-state .empty-content .empty-actions .btn.btn-primary:active {\n  transform: translateY(0);\n}\n.list-section .empty-state .empty-content .empty-actions .btn.btn-secondary {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.list-section .empty-state .empty-content .empty-actions .btn.btn-secondary:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.list-section .empty-state .empty-content .empty-actions .btn.btn-secondary:active {\n  transform: translateY(0);\n}\n.list-section .work-orders-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.list-section .work-orders-grid .work-order-card-item {\n  transition: transform 0.2s ease;\n}\n.list-section .work-orders-grid .work-order-card-item:hover {\n  transform: translateY(-2px);\n}\n.list-section .work-orders-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.list-section .work-orders-list .work-order-card-item.list-view {\n  min-height: auto;\n  padding: 1rem;\n}\n.list-section .work-orders-list .list-table-header {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px 8px 0 0;\n  border-bottom: none;\n}\n.list-section .work-orders-list .list-table-header .list-table-row {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1.5fr 1fr 1fr 1fr 0.5fr;\n  gap: 1rem;\n  padding: 1rem;\n  align-items: center;\n}\n.list-section .work-orders-list .list-table-header .list-table-row .header-cell {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.list-section .work-orders-list .list-table-body {\n  border: 1px solid #e5e7eb;\n  border-radius: 0 0 8px 8px;\n  background: white;\n}\n.list-section .work-orders-list .list-table-body .list-table-row {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1.5fr 1fr 1fr 1fr 0.5fr;\n  gap: 1rem;\n  padding: 1rem;\n  align-items: center;\n  border-bottom: 1px solid #f3f4f6;\n  transition: background-color 0.2s ease;\n}\n.list-section .work-orders-list .list-table-body .list-table-row:last-child {\n  border-bottom: none;\n}\n.list-section .work-orders-list .list-table-body .list-table-row:hover {\n  background-color: #f9fafb;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .work-order-info {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .work-order-info .work-order-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: #eff6ff;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2563eb;\n  flex-shrink: 0;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .work-order-info .work-order-details .work-order-title {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .work-order-info .work-order-details .work-order-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.4;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n  text-align: center;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge.status-open {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge.status-in-progress {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge.status-completed {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge.status-cancelled {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge.priority-low {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge.priority-medium {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge.priority-high {\n  background: #fef3c7;\n  color: #d97706;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge.priority-critical {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .assignee-asset-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .assignee-asset-info .info-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .assignee-asset-info .info-item svg {\n  color: #9ca3af;\n  width: 1rem;\n  height: 1rem;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .location-info,\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .due-date-info,\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .created-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .location-info svg,\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .due-date-info svg,\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .created-info svg {\n  color: #9ca3af;\n  width: 1rem;\n  height: 1rem;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .actions-container {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .actions-container .action-btn {\n  padding: 0.5rem;\n  border: none;\n  background: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6b7280;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .actions-container .action-btn:hover {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .actions-container .action-btn.view-btn:hover {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .actions-container .action-btn.edit-btn:hover {\n  background: #fef3c7;\n  color: #d97706;\n}\n.list-section .pagination-container {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n  padding: 1rem;\n  margin-top: 1rem;\n}\n.list-section .pagination-container .pagination-info {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.list-section .pagination-container .pagination-controls {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.list-section .pagination-container .pagination-controls .pagination-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.list-section .pagination-container .pagination-controls .pagination-btn:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.list-section .pagination-container .pagination-controls .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.list-section .pagination-container .pagination-controls .pagination-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.list-section .pagination-container .pagination-controls .page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.list-section .pagination-container .pagination-controls .page-numbers .page-number {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 2.5rem;\n  text-align: center;\n}\n.list-section .pagination-container .pagination-controls .page-numbers .page-number:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.list-section .pagination-container .pagination-controls .page-numbers .page-number.active {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n@media (max-width: 768px) {\n  .list-section .list-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    padding: 1rem;\n  }\n  .list-section .list-header .header-actions {\n    align-self: center;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .list-section .work-orders-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .list-section .pagination-container .pagination-controls {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .list-section .pagination-container .pagination-controls .page-numbers {\n    order: -1;\n  }\n  .list-section .empty-state {\n    padding: 2rem 1rem;\n  }\n  .list-section .empty-state .empty-content {\n    gap: 1.25rem;\n  }\n  .list-section .empty-state .empty-content .empty-icon svg {\n    width: 4rem;\n    height: 4rem;\n  }\n  .list-section .empty-state .empty-content .empty-text .empty-title {\n    font-size: 1.25rem;\n  }\n  .list-section .empty-state .empty-content .empty-text .empty-description {\n    font-size: 0.875rem;\n  }\n  .list-section .empty-state .empty-content .empty-actions {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .list-section .empty-state .empty-content .empty-actions .btn {\n    min-width: 200px;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row,\n  .list-section .work-orders-list .list-table-body .list-table-row {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n    padding: 0.75rem;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell {\n    justify-content: space-between;\n    padding: 0.5rem 0;\n    border-bottom: 1px solid #f3f4f6;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell:last-child,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell:last-child {\n    border-bottom: none;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .work-order-info,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .work-order-info {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .work-order-info .work-order-icon,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .work-order-info .work-order-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .badges-container,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container {\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .assignee-asset-info,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .assignee-asset-info {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .location-info,\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .due-date-info,\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .created-info,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .location-info,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .due-date-info,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .created-info {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .actions-container,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .actions-container {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 480px) {\n  .list-section .list-header {\n    padding: 0.75rem;\n  }\n  .list-section .list-header .orders-count {\n    font-size: 0.875rem;\n  }\n  .list-section .work-orders-grid {\n    gap: 0.75rem;\n  }\n  .list-section .pagination-container {\n    padding: 0.75rem;\n  }\n  .list-section .pagination-container .pagination-controls .page-numbers .page-number {\n    padding: 0.375rem 0.5rem;\n    min-width: 2rem;\n    font-size: 0.75rem;\n  }\n  .list-section .empty-state {\n    padding: 1.5rem 1rem;\n  }\n  .list-section .empty-state .empty-content {\n    gap: 1rem;\n  }\n  .list-section .empty-state .empty-content .empty-icon svg {\n    width: 3.5rem;\n    height: 3.5rem;\n  }\n  .list-section .empty-state .empty-content .empty-text .empty-title {\n    font-size: 1.125rem;\n  }\n  .list-section .empty-state .empty-content .empty-text .empty-description {\n    font-size: 0.875rem;\n  }\n  .list-section .empty-state .empty-content .empty-actions .btn {\n    min-width: 180px;\n    padding: 0.625rem 1.25rem;\n    font-size: 0.875rem;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row,\n  .list-section .work-orders-list .list-table-body .list-table-row {\n    padding: 0.5rem;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell {\n    padding: 0.375rem 0;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .work-order-info .work-order-icon,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .work-order-info .work-order-icon {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .work-order-info .work-order-details .work-order-title,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .work-order-info .work-order-details .work-order-title {\n    font-size: 0.875rem;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .work-order-info .work-order-details .work-order-description,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .work-order-info .work-order-details .work-order-description {\n    font-size: 0.75rem;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .badges-container .badge,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .badges-container .badge {\n    padding: 0.125rem 0.5rem;\n    font-size: 0.625rem;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .assignee-asset-info,\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .location-info,\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .due-date-info,\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .created-info,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .assignee-asset-info,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .location-info,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .due-date-info,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .created-info {\n    font-size: 0.75rem;\n  }\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .assignee-asset-info svg,\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .location-info svg,\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .due-date-info svg,\n  .list-section .work-orders-list .list-table-header .list-table-row .list-table-cell .created-info svg,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .assignee-asset-info svg,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .location-info svg,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .due-date-info svg,\n  .list-section .work-orders-list .list-table-body .list-table-row .list-table-cell .created-info svg {\n    width: 0.875rem;\n    height: 0.875rem;\n  }\n}\n/*# sourceMappingURL=work-order-list.component.css.map */\n"] }]
  }], () => [{ type: WorkOrderService }, { type: Router }, { type: ToastService }], { createWorkOrderRequested: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderListComponent, { className: "WorkOrderListComponent", filePath: "src/app/work-orders/components/work-order-list/work-order-list.component.ts", lineNumber: 36 });
})();

// src/app/work-orders/components/work-order-stats/work-order-stats.component.ts
function WorkOrderStatsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "div", 5);
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4, "Loading stats...");
    \u0275\u0275elementEnd()()();
  }
}
function WorkOrderStatsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275text(4, "Total Work Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 12);
    \u0275\u0275element(7, "path", 13)(8, "path", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275text(12, "Work orders in system");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17)(14, "div", 9)(15, "div", 10);
    \u0275\u0275text(16, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 18);
    \u0275\u0275element(19, "path", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 15);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 16);
    \u0275\u0275text(23, "Awaiting assignment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 20)(25, "div", 9)(26, "div", 10);
    \u0275\u0275text(27, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 21);
    \u0275\u0275element(30, "path", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div", 15);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 16);
    \u0275\u0275text(34, "Under maintenance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 23)(36, "div", 9)(37, "div", 10);
    \u0275\u0275text(38, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 24);
    \u0275\u0275element(41, "path", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 15);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 16);
    \u0275\u0275text(45, "Closed successfully");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.getTotalCount());
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.getStatusCount("open"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.getStatusCount("in-progress"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.getStatusCount("completed"));
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
    this.subscription.add(this.workOrderService.getWorkOrderStatistics().subscribe({
      next: (stats) => {
        console.log("Work order stats loaded:", stats);
        this.stats = stats;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading stats:", error);
        this.isLoading = false;
        this.stats = {
          status_counts: {},
          priority_counts: {},
          overdue_count: 0,
          recent_created: 0,
          recent_completed: 0
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
  getTotalCount() {
    if (!this.stats?.status_counts)
      return 0;
    return Object.values(this.stats.status_counts).reduce((sum, count) => sum + count, 0);
  }
  // Helper methods for template access
  getStatusCount(status) {
    return this.stats?.status_counts?.[status] || 0;
  }
  getPriorityCount(priority) {
    return this.stats?.priority_counts?.[priority] || 0;
  }
  getOverdueCount() {
    return this.stats?.overdue_count || 0;
  }
  getRecentCreated() {
    return this.stats?.recent_created || 0;
  }
  getRecentCompleted() {
    return this.stats?.recent_completed || 0;
  }
  // Check if we have any data to show
  hasData() {
    return !!(this.stats && (Object.keys(this.stats.status_counts || {}).length > 0 || Object.keys(this.stats.priority_counts || {}).length > 0 || this.stats.overdue_count > 0 || this.stats.recent_created > 0 || this.stats.recent_completed > 0));
  }
  static \u0275fac = function WorkOrderStatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderStatsComponent)(\u0275\u0275directiveInject(WorkOrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderStatsComponent, selectors: [["app-work-order-stats"]], standalone: false, decls: 3, vars: 2, consts: [[1, "stats-section"], ["class", "loading-state", 4, "ngIf"], ["class", "stats-cards", 4, "ngIf"], [1, "loading-state"], [1, "loading-wrap"], [1, "spinner"], [1, "loading-text"], [1, "stats-cards"], [1, "stat-card", "theme-blue"], [1, "card-top"], [1, "title"], [1, "badge"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.867 19.125h.008v.008h-.008v-.008Z"], [1, "value"], [1, "subtitle"], [1, "stat-card", "theme-green"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"], [1, "stat-card", "theme-orange"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6", "text-orange-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "stat-card", "theme-purple"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"]], template: function WorkOrderStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, WorkOrderStatsComponent_div_1_Template, 5, 0, "div", 1)(2, WorkOrderStatsComponent_div_2_Template, 46, 4, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [NgIf], styles: ["\n\n.stats-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 16px 18px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #334155;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  border-radius: 10px;\n  padding: 6px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 2px 0 6px;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card.theme-blue[_ngcontent-%COMP%] {\n  background: #f0f7ff;\n  border-color: #dbeafe;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card.theme-blue[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.15);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card.theme-green[_ngcontent-%COMP%] {\n  background: #effcf4;\n  border-color: #d1fae5;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card.theme-green[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card.theme-orange[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card.theme-orange[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card.theme-purple[_ngcontent-%COMP%] {\n  background: #f6f3ff;\n  border-color: #ddd6fe;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card.theme-purple[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15);\n}\n.stats-section[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 0.875rem 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.stats-section[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.stats-section[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.stats-section[_ngcontent-%COMP%]   .create-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n@media (max-width: 1024px) {\n  .stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .stats-section[_ngcontent-%COMP%]   .stats-cards[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=work-order-stats.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderStatsComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-stats", standalone: false, template: `<div class="stats-section">\r
  <div *ngIf="isLoading" class="loading-state">\r
    <div class="loading-wrap">\r
      <div class="spinner"></div>\r
      <span class="loading-text">Loading stats...</span>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!isLoading" class="stats-cards">\r
    <div class="stat-card theme-blue">\r
      <div class="card-top">\r
        <div class="title">Total Work Orders</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />\r
          </svg>\r
        </div>\r
      </div>\r
      <div class="value">{{ getTotalCount() }}</div>\r
      <div class="subtitle">Work orders in system</div>\r
    </div>\r
\r
    <div class="stat-card theme-green">\r
      <div class="card-top">\r
        <div class="title">Open</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-green-500">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />\r
          </svg>\r
\r
        </div>\r
      </div>\r
      <div class="value">{{ getStatusCount('open') }}</div>\r
      <div class="subtitle">Awaiting assignment</div>\r
    </div>\r
\r
    <div class="stat-card theme-orange">\r
      <div class="card-top">\r
        <div class="title">In Progress</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-orange-500">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />\r
          </svg>\r
\r
        </div>\r
      </div>\r
      <div class="value">{{ getStatusCount('in-progress') }}</div>\r
      <div class="subtitle">Under maintenance</div>\r
    </div>\r
\r
    <div class="stat-card theme-purple">\r
      <div class="card-top">\r
        <div class="title">Completed</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-indigo-500">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />\r
          </svg>\r
\r
        </div>\r
      </div>\r
      <div class="value">{{ getStatusCount('completed') }}</div>\r
      <div class="subtitle">Closed successfully</div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/work-orders/components/work-order-stats/work-order-stats.component.scss */\n.stats-section {\n  margin-bottom: 2rem;\n}\n.stats-section .stats-cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stats-section .stats-cards .stat-card {\n  position: relative;\n  background: #ffffff;\n  border-radius: 14px;\n  padding: 16px 18px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 4px 16px rgba(2, 6, 23, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stats-section .stats-cards .stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.08);\n}\n.stats-section .stats-cards .stat-card .card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.stats-section .stats-cards .stat-card .title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #334155;\n}\n.stats-section .stats-cards .stat-card .badge {\n  background: rgba(59, 130, 246, 0.12);\n  border-radius: 10px;\n  padding: 6px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.stats-section .stats-cards .stat-card .value {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 2px 0 6px;\n}\n.stats-section .stats-cards .stat-card .subtitle {\n  font-size: 13px;\n  color: #6b7280;\n}\n.stats-section .stats-cards .stat-card.theme-blue {\n  background: #f0f7ff;\n  border-color: #dbeafe;\n}\n.stats-section .stats-cards .stat-card.theme-blue .badge {\n  background: rgba(59, 130, 246, 0.15);\n}\n.stats-section .stats-cards .stat-card.theme-green {\n  background: #effcf4;\n  border-color: #d1fae5;\n}\n.stats-section .stats-cards .stat-card.theme-green .badge {\n  background: rgba(16, 185, 129, 0.15);\n}\n.stats-section .stats-cards .stat-card.theme-orange {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.stats-section .stats-cards .stat-card.theme-orange .badge {\n  background: rgba(245, 158, 11, 0.15);\n}\n.stats-section .stats-cards .stat-card.theme-purple {\n  background: #f6f3ff;\n  border-color: #ddd6fe;\n}\n.stats-section .stats-cards .stat-card.theme-purple .badge {\n  background: rgba(139, 92, 246, 0.15);\n}\n.stats-section .create-button {\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 0.875rem 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  white-space: nowrap;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.stats-section .create-button:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.stats-section .create-button:active {\n  transform: translateY(0);\n}\n.stats-section .create-button .icon {\n  font-size: 0.875rem;\n}\n@media (max-width: 1024px) {\n  .stats-section .stats-cards {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .stats-section .stats-cards {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .stats-section .stats-cards .stat-card {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=work-order-stats.component.css.map */\n"] }]
  }], () => [{ type: WorkOrderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderStatsComponent, { className: "WorkOrderStatsComponent", filePath: "src/app/work-orders/components/work-order-stats/work-order-stats.component.ts", lineNumber: 11 });
})();

// src/app/work-orders/components/work-order-analytics/work-order-analytics.component.ts
var _c02 = () => [0, 1, 2, 3, 4];
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
    \u0275\u0275elementStart(0, "div", 23)(1, "h3", 24);
    \u0275\u0275text(2, "Performance Metrics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "div", 26)(5, "div", 27)(6, "h4", 28);
    \u0275\u0275text(7, "Average Resolution Time");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 29);
    \u0275\u0275element(9, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "div", 27)(16, "h4", 28);
    \u0275\u0275text(17, "Completion Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 29);
    \u0275\u0275element(19, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 31);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 34);
    \u0275\u0275text(23, "Target: 85%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 26)(25, "div", 27)(26, "h4", 28);
    \u0275\u0275text(27, "Overdue Work Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 29);
    \u0275\u0275element(29, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 35);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 36);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 26)(35, "div", 27)(36, "h4", 28);
    \u0275\u0275text(37, "Active Technicians");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 29);
    \u0275\u0275element(39, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 31);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 38);
    \u0275\u0275text(43, "Active right now");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.formatDays(ctx_r1.analyticsData.average_resolution_time_days));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.analyticsData.average_resolution_time_days || 0, " days average ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatPercentage(ctx_r1.analyticsData.completion_rate_percentage));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.analyticsData.overdue_work_orders || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.analyticsData.overdue_work_orders || 0, " overdue ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.analyticsData.active_technicians || 0);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_13_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "div", 57);
    \u0275\u0275elementStart(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60);
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
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h3", 45);
    \u0275\u0275text(3, "Work Order Status Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 47)(7, "div", 48)(8, "div", 49);
    \u0275\u0275template(9, WorkOrderAnalyticsComponent_div_3_div_13_div_2_div_9_Template, 8, 5, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 51)(11, "div", 52)(12, "div", 53)(13, "span", 54);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 55);
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
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275element(4, "div", 67);
    \u0275\u0275elementStart(5, "span", 68);
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
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h3", 45);
    \u0275\u0275text(3, "Priority Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275text(5, "Work orders by priority level with trends");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 47)(7, "div", 61)(8, "div", 62);
    \u0275\u0275template(9, WorkOrderAnalyticsComponent_div_3_div_13_div_3_div_9_Template, 7, 6, "div", 63);
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
    \u0275\u0275element(0, "div", 80);
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
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 44)(2, "h3", 45);
    \u0275\u0275text(3, "Monthly Performance Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275text(5, "Work orders created vs completed with efficiency tracking");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 47)(7, "div", 70)(8, "div", 71)(9, "span");
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
    \u0275\u0275elementStart(19, "div", 72)(20, "div", 73);
    \u0275\u0275template(21, WorkOrderAnalyticsComponent_div_3_div_13_div_4_div_21_Template, 1, 0, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 75);
    \u0275\u0275element(23, "div", 76)(24, "div", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 78);
    \u0275\u0275template(26, WorkOrderAnalyticsComponent_div_3_div_13_div_4_span_26_Template, 2, 1, "span", 79);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c02));
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
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275template(2, WorkOrderAnalyticsComponent_div_3_div_13_div_2_Template, 17, 3, "div", 41)(3, WorkOrderAnalyticsComponent_div_3_div_13_div_3_Template, 10, 1, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, WorkOrderAnalyticsComponent_div_3_div_13_div_4_Template, 27, 7, "div", 42);
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
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "h4", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 88);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 89)(7, "div", 90)(8, "span", 91);
    \u0275\u0275text(9, "Completed:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 90)(13, "span", 91);
    \u0275\u0275text(14, "Avg Time:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 31);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 92);
    \u0275\u0275element(18, "div", 93);
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
    \u0275\u0275styleProp("width", ctx_r1.getProgressBarWidth(tech_r7.score) + "%");
  }
}
function WorkOrderAnalyticsComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "h3", 24);
    \u0275\u0275text(2, "Top Technician Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "Individual performance metrics for this month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 83);
    \u0275\u0275template(6, WorkOrderAnalyticsComponent_div_3_div_14_div_6_Template, 19, 6, "div", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.technicianData);
  }
}
function WorkOrderAnalyticsComponent_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 95);
    \u0275\u0275element(2, "path", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 97);
    \u0275\u0275text(4, "No Analytics Data Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 98);
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
    \u0275\u0275template(12, WorkOrderAnalyticsComponent_div_3_div_12_Template, 44, 6, "div", 19)(13, WorkOrderAnalyticsComponent_div_3_div_13_Template, 5, 3, "div", 20)(14, WorkOrderAnalyticsComponent_div_3_div_14_Template, 7, 1, "div", 21)(15, WorkOrderAnalyticsComponent_div_3_div_15_Template, 7, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.analyticsData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.analyticsData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasTechnicianData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.analyticsData && !ctx_r1.hasStatusDistribution && !ctx_r1.hasPriorityDistribution && !ctx_r1.hasMonthlyTrends && !ctx_r1.hasTechnicianData);
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
        value: this.analyticsData.status_distribution?.["completed"] || 0,
        color: "#10b981"
      },
      {
        name: "Open",
        value: this.analyticsData.status_distribution?.["open"] || 0,
        color: "#ef4444"
      },
      {
        name: "In Progress",
        value: this.analyticsData.status_distribution?.["in-progress"] || 0,
        color: "#3b82f6"
      },
      {
        name: "On Hold",
        value: this.analyticsData.status_distribution?.["on-hold"] || 0,
        color: "#f59e0b"
      },
      {
        name: "Cancelled",
        value: this.analyticsData.status_distribution?.["cancelled"] || 0,
        color: "#6b7280"
      }
    ];
    this.priorityChartData = [
      {
        name: "Critical",
        value: this.analyticsData.priority_distribution?.["critical"] || 0,
        color: "#dc2626"
      },
      {
        name: "High",
        value: this.analyticsData.priority_distribution?.["high"] || 0,
        color: "#f59e0b"
      },
      {
        name: "Medium",
        value: this.analyticsData.priority_distribution?.["medium"] || 0,
        color: "#3b82f6"
      },
      {
        name: "Low",
        value: this.analyticsData.priority_distribution?.["low"] || 0,
        color: "#10b981"
      },
      {
        name: "PPM",
        value: this.analyticsData.priority_distribution?.["ppm"] || 0,
        color: "#8b5cf6"
      }
    ];
    if (this.analyticsData.monthly_performance_trend && this.analyticsData.monthly_performance_trend.length > 0) {
      this.monthlyTrendData = this.analyticsData.monthly_performance_trend.map((trend) => ({
        month: `${trend.year}-${trend.month.toString().padStart(2, "0")}`,
        created: trend.created_count || 0,
        completed: trend.completed_count || 0
      }));
    } else {
      this.monthlyTrendData = [];
    }
    if (this.analyticsData.top_technician_performance && this.analyticsData.top_technician_performance.length > 0) {
      this.technicianData = this.analyticsData.top_technician_performance.map((tech) => ({
        name: tech.assigned_to ? `${tech.assigned_to.first_name} ${tech.assigned_to.last_name}` : "Unknown",
        score: tech.completed_count || 0,
        // Use completed count as the primary metric
        completed: tech.completed_count || 0,
        avgTime: tech.avg_resolution_days || 0
      }));
    } else {
      this.technicianData = [];
    }
  }
  refreshData() {
    this.loadAnalytics();
  }
  formatDays(days) {
    if (!days || days === 0)
      return "0 days";
    if (days < 0) {
      const absDays = Math.abs(days);
      if (absDays === 1)
        return "1 day ahead";
      return `${absDays.toFixed(1)} days ahead`;
    }
    if (days === 1)
      return "1 day";
    return `${days.toFixed(1)} days`;
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
    return !!(this.analyticsData?.monthly_performance_trend && this.analyticsData.monthly_performance_trend.length > 0);
  }
  get hasTechnicianData() {
    return !!(this.analyticsData?.top_technician_performance && this.analyticsData.top_technician_performance.length > 0);
  }
  get totalStatusCount() {
    if (!this.analyticsData?.status_distribution)
      return 0;
    return Object.values(this.analyticsData.status_distribution).reduce((sum, count) => sum + count, 0);
  }
  getProgressBarWidth(completedCount) {
    if (!this.technicianData || this.technicianData.length === 0)
      return 0;
    const maxCompleted = Math.max(...this.technicianData.map((tech) => tech.completed));
    if (maxCompleted === 0)
      return 0;
    return completedCount / maxCompleted * 100;
  }
  static \u0275fac = function WorkOrderAnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderAnalyticsComponent)(\u0275\u0275directiveInject(WorkOrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderAnalyticsComponent, selectors: [["app-work-order-analytics"]], decls: 4, vars: 3, consts: [[1, "work-order-analytics"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "analytics-header"], [1, "header-left"], [1, "main-title"], [1, "subtitle"], [1, "header-right"], ["title", "Refresh Data", 1, "refresh-btn", 3, "click"], ["class", "metrics-section", 4, "ngIf"], ["class", "charts-section", 4, "ngIf"], ["class", "technician-section", 4, "ngIf"], ["class", "no-data-message", 4, "ngIf"], [1, "metrics-section"], [1, "section-title"], [1, "metrics-grid"], [1, "metric-card"], [1, "metric-header"], [1, "metric-title"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "metric-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "metric-value"], [1, "metric-trend", "positive"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "metric-target"], [1, "metric-value", "warning"], [1, "metric-trend"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "metric-status"], [1, "charts-section"], [1, "chart-row"], ["class", "chart-card", 4, "ngIf"], ["class", "chart-card full-width", 4, "ngIf"], [1, "chart-card"], [1, "chart-header"], [1, "chart-title"], [1, "chart-subtitle"], [1, "chart-container"], [1, "pie-chart"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "chart-placeholder"], [1, "chart-circle"], [1, "chart-center"], [1, "total-count"], [1, "total-label"], [1, "legend-item"], [1, "legend-color"], [1, "legend-label"], [1, "legend-value"], [1, "legend-percentage"], [1, "bar-chart"], [1, "chart-bars"], ["class", "bar-item", 4, "ngFor", "ngForOf"], [1, "bar-item"], [1, "bar-label"], [1, "bar-container"], [1, "bar"], [1, "bar-value"], [1, "chart-card", "full-width"], [1, "trend-chart"], [1, "chart-y-axis"], [1, "chart-area"], [1, "grid-lines"], ["class", "grid-line", 4, "ngFor", "ngForOf"], [1, "trend-lines"], ["title", "Work orders created", 1, "trend-line", "created"], ["title", "Work orders completed", 1, "trend-line", "completed"], [1, "chart-x-axis"], [4, "ngFor", "ngForOf"], [1, "grid-line"], [1, "technician-section"], [1, "section-subtitle"], [1, "technician-grid"], ["class", "technician-card", 4, "ngFor", "ngForOf"], [1, "technician-card"], [1, "tech-header"], [1, "tech-name"], [1, "tech-score"], [1, "tech-metrics"], [1, "tech-metric"], [1, "metric-label"], [1, "performance-bar"], [1, "bar-fill"], [1, "no-data-message"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "no-data-title"], [1, "no-data-description"]], template: function WorkOrderAnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, WorkOrderAnalyticsComponent_div_1_Template, 4, 0, "div", 1)(2, WorkOrderAnalyticsComponent_div_2_Template, 9, 1, "div", 2)(3, WorkOrderAnalyticsComponent_div_3_Template, 16, 4, "div", 3);
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
     <div class="metrics-section" *ngIf="analyticsData">\r
       <h3 class="section-title">Performance Metrics</h3>\r
       <div class="metrics-grid">\r
         <div class="metric-card">\r
           <div class="metric-header">\r
             <h4 class="metric-title">Average Resolution Time</h4>\r
             <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
             </svg>\r
           </div>\r
           <div class="metric-value">{{ formatDays(analyticsData.average_resolution_time_days) }}</div>\r
           <div class="metric-trend positive">\r
             {{ analyticsData.average_resolution_time_days || 0 }} days average\r
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
           <div class="metric-value">{{ formatPercentage(analyticsData.completion_rate_percentage) }}</div>\r
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
           <div class="metric-value warning">{{ analyticsData.overdue_work_orders || 0 }}</div>\r
           <div class="metric-trend">\r
             {{ analyticsData.overdue_work_orders || 0 }} overdue\r
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
           <div class="metric-value">{{ analyticsData.active_technicians || 0 }}</div>\r
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
            <div class="bar-fill" [style.width]="getProgressBarWidth(tech.score) + '%'"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
\r
\r
    <!-- No Data Message -->\r
    <div *ngIf="analyticsData && !hasStatusDistribution && !hasPriorityDistribution && !hasMonthlyTrends && !hasTechnicianData" class="no-data-message">\r
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
function WorkOrdersComponent_div_24_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("title"), " ");
  }
}
function WorkOrdersComponent_div_24_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "Select status");
    \u0275\u0275elementEnd();
  }
}
function WorkOrdersComponent_div_24_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 67);
    \u0275\u0275element(3, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.getStatusColor(ctx_r0.selectedStatus.slug) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getStatusColor(ctx_r0.selectedStatus.slug));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedStatus.name);
  }
}
function WorkOrdersComponent_div_24_div_37_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_div_37_button_3_Template_button_click_0_listener() {
      const status_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectStatus(status_r4));
    });
    \u0275\u0275elementStart(1, "div", 73)(2, "div", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 67);
    \u0275\u0275element(4, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 75)(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r0.selectedStatus == null ? null : ctx_r0.selectedStatus.id) === status_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r0.getStatusColor(status_r4.slug) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getStatusColor(status_r4.slug));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(status_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getStatusDescription(status_r4));
  }
}
function WorkOrdersComponent_div_24_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275text(2, "Select status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WorkOrdersComponent_div_24_div_37_button_3_Template, 10, 8, "button", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.statusOptions);
  }
}
function WorkOrdersComponent_div_24_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("status_id"), " ");
  }
}
function WorkOrdersComponent_div_24_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "Select priority");
    \u0275\u0275elementEnd();
  }
}
function WorkOrdersComponent_div_24_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 67);
    \u0275\u0275element(3, "path", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.getPriorityColor(ctx_r0.selectedPriority) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getPriorityColor(ctx_r0.selectedPriority));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedPriority.name);
  }
}
function WorkOrdersComponent_div_24_div_51_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_div_51_button_3_Template_button_click_0_listener() {
      const priority_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectPriority(priority_r6));
    });
    \u0275\u0275elementStart(1, "div", 73)(2, "div", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 67);
    \u0275\u0275element(4, "path", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 75)(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const priority_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r0.selectedPriority == null ? null : ctx_r0.selectedPriority.id) === priority_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r0.getPriorityColor(priority_r6) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getPriorityColor(priority_r6));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(priority_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getPriorityDescription(priority_r6));
  }
}
function WorkOrdersComponent_div_24_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275text(2, "Select priority");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WorkOrdersComponent_div_24_div_51_button_3_Template, 10, 8, "button", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.priorityOptions);
  }
}
function WorkOrdersComponent_div_24_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("priority_id"), " ");
  }
}
function WorkOrdersComponent_div_24_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "Select category (optional)");
    \u0275\u0275elementEnd();
  }
}
function WorkOrdersComponent_div_24_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 67);
    \u0275\u0275element(3, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedCategory.name);
  }
}
function WorkOrdersComponent_div_24_div_64_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_div_64_button_13_Template_button_click_0_listener() {
      const category_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectCategory(category_r9));
    });
    \u0275\u0275elementStart(1, "div", 73)(2, "div", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 67);
    \u0275\u0275element(4, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 75)(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r0.selectedCategory == null ? null : ctx_r0.selectedCategory.id) === category_r9.id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(category_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getCategoryDescription(category_r9));
  }
}
function WorkOrdersComponent_div_24_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275text(2, "Select category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 72);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_div_64_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectCategory(null));
    });
    \u0275\u0275elementStart(4, "div", 73)(5, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 67);
    \u0275\u0275element(7, "path", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 75)(9, "div", 76);
    \u0275\u0275text(10, "No Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 84);
    \u0275\u0275text(12, "Work order without specific category");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(13, WorkOrdersComponent_div_24_div_64_button_13_Template, 10, 4, "button", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r0.categoryOptions);
  }
}
function WorkOrdersComponent_div_24_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("category_id"), " ");
  }
}
function WorkOrdersComponent_div_24_option_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r10 = ctx.$implicit;
    \u0275\u0275property("value", asset_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asset_r10.name || asset_r10.asset_name || "Asset " + asset_r10.id, " ");
  }
}
function WorkOrdersComponent_div_24_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("asset_id"), " ");
  }
}
function WorkOrdersComponent_div_24_option_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r11 = ctx.$implicit;
    \u0275\u0275property("value", location_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r11.name || "Location " + location_r11.id, " ");
  }
}
function WorkOrdersComponent_div_24_div_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("location_id"), " ");
  }
}
function WorkOrdersComponent_div_24_option_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r12 = ctx.$implicit;
    \u0275\u0275property("value", member_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", member_r12.first_name, " ", member_r12.last_name, " ");
  }
}
function WorkOrdersComponent_div_24_div_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("assigned_to"), " ");
  }
}
function WorkOrdersComponent_div_24_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 62);
    \u0275\u0275element(1, "circle", 86)(2, "path", 87);
    \u0275\u0275elementEnd();
  }
}
function WorkOrdersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal($event));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_div_click_1_listener($event) {
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
    \u0275\u0275listener("ngSubmit", function WorkOrdersComponent_div_24_Template_form_ngSubmit_9_listener() {
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
    \u0275\u0275template(23, WorkOrdersComponent_div_24_div_23_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 36)(25, "div", 32)(26, "label");
    \u0275\u0275text(27, "Status ");
    \u0275\u0275elementStart(28, "span", 33);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 37);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_div_click_30_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(31, "button", 38);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleStatusDropdown());
    });
    \u0275\u0275elementStart(32, "div", 39);
    \u0275\u0275template(33, WorkOrdersComponent_div_24_span_33_Template, 2, 0, "span", 40)(34, WorkOrdersComponent_div_24_div_34_Template, 6, 5, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 42);
    \u0275\u0275element(36, "path", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(37, WorkOrdersComponent_div_24_div_37_Template, 4, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, WorkOrdersComponent_div_24_div_38_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 32)(40, "label");
    \u0275\u0275text(41, "Priority ");
    \u0275\u0275elementStart(42, "span", 33);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 45);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_div_click_44_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(45, "button", 38);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePriorityDropdown());
    });
    \u0275\u0275elementStart(46, "div", 39);
    \u0275\u0275template(47, WorkOrdersComponent_div_24_span_47_Template, 2, 0, "span", 40)(48, WorkOrdersComponent_div_24_div_48_Template, 6, 5, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 42);
    \u0275\u0275element(50, "path", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(51, WorkOrdersComponent_div_24_div_51_Template, 4, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, WorkOrdersComponent_div_24_div_52_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "div", 36)(54, "div", 32)(55, "label");
    \u0275\u0275text(56, "Category (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 46);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_div_click_57_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(58, "button", 38);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCategoryDropdown());
    });
    \u0275\u0275elementStart(59, "div", 39);
    \u0275\u0275template(60, WorkOrdersComponent_div_24_span_60_Template, 2, 0, "span", 40)(61, WorkOrdersComponent_div_24_div_61_Template, 6, 1, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 42);
    \u0275\u0275element(63, "path", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(64, WorkOrdersComponent_div_24_div_64_Template, 14, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, WorkOrdersComponent_div_24_div_65_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(66, "div", 32)(67, "label");
    \u0275\u0275text(68, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 31)(71, "div", 32)(72, "label");
    \u0275\u0275text(73, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "textarea", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 36)(76, "div", 32)(77, "label");
    \u0275\u0275text(78, "Estimated Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 32)(81, "label");
    \u0275\u0275text(82, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "textarea", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 27)(85, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(86, "svg", 29);
    \u0275\u0275element(87, "path", 51)(88, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(89, "h3");
    \u0275\u0275text(90, "Assignment & Location");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 36)(92, "div", 32)(93, "label");
    \u0275\u0275text(94, "Asset (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "select", 53);
    \u0275\u0275listener("change", function WorkOrdersComponent_div_24_Template_select_change_95_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onAssetChange($event));
    });
    \u0275\u0275elementStart(96, "option", 54);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, WorkOrdersComponent_div_24_option_98_Template, 2, 2, "option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(99, WorkOrdersComponent_div_24_div_99_Template, 2, 1, "div", 35);
    \u0275\u0275elementStart(100, "div", 56)(101, "small");
    \u0275\u0275text(102, "Select an existing asset from your assets list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "div", 32)(104, "label");
    \u0275\u0275text(105, "Location (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "select", 57)(107, "option", 54);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd();
    \u0275\u0275template(109, WorkOrdersComponent_div_24_option_109_Template, 2, 2, "option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(110, WorkOrdersComponent_div_24_div_110_Template, 2, 1, "div", 35);
    \u0275\u0275elementStart(111, "div", 56)(112, "small");
    \u0275\u0275text(113, "Select an existing location from your locations list");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(114, "div", 36)(115, "div", 32)(116, "label");
    \u0275\u0275text(117, "Assign To Team Member (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "select", 58)(119, "option", 54);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd();
    \u0275\u0275template(121, WorkOrdersComponent_div_24_option_121_Template, 2, 3, "option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(122, WorkOrdersComponent_div_24_div_122_Template, 2, 1, "div", 35);
    \u0275\u0275elementStart(123, "div", 56)(124, "small");
    \u0275\u0275text(125, "Select an existing team member to assign the work order to");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(126, "div", 59)(127, "button", 60);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_button_click_127_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275text(128, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "button", 61);
    \u0275\u0275listener("click", function WorkOrdersComponent_div_24_Template_button_click_129_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275template(130, WorkOrdersComponent_div_24_Conditional_130_Template, 3, 0, ":svg:svg", 62);
    \u0275\u0275text(131);
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
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("status_id"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("status_id"))("active", ctx_r0.showStatusDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.selectedStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedStatus);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r0.showStatusDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showStatusDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("status_id"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("priority_id"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("priority_id"))("active", ctx_r0.showPriorityDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.selectedPriority);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedPriority);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r0.showPriorityDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showPriorityDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("priority_id"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("category_id"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("category_id"))("active", ctx_r0.showCategoryDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r0.showCategoryDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showCategoryDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("category_id"));
    \u0275\u0275advance(27);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("asset_id"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r0.hasFieldError("asset_id"));
    \u0275\u0275property("disabled", ctx_r0.assets.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.assets.length === 0 ? "Loading assets..." : "Select an asset");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.assets);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("asset_id"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("location_id"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r0.hasFieldError("location_id"));
    \u0275\u0275property("disabled", ctx_r0.locations.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.locations.length === 0 ? "Loading locations..." : "Select a location");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.locations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("location_id"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx_r0.hasFieldError("assigned_to"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r0.hasFieldError("assigned_to"));
    \u0275\u0275property("disabled", ctx_r0.teamMembers.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.teamMembers.length === 0 ? "Loading team members..." : "Select a team member");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.teamMembers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasFieldError("assigned_to"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoading ? 130 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoading ? "Creating..." : "Create Work Order", " ");
  }
}
var WorkOrdersComponent = class _WorkOrdersComponent {
  fb;
  workOrderService;
  assetService;
  locationService;
  teamService;
  metaWorkOrdersService;
  toastService;
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
  // Lists for select boxes
  assets = [];
  locations = [];
  teamMembers = [];
  // Metadata options for new standardized select boxes
  statusOptions = [];
  priorityOptions = [];
  categoryOptions = [];
  // Dropdown states for new standardized select boxes
  showStatusDropdown = false;
  showPriorityDropdown = false;
  showCategoryDropdown = false;
  // Selected values for new standardized select boxes
  selectedStatus = null;
  selectedPriority = null;
  selectedCategory = null;
  subscription = new Subscription();
  constructor(fb, workOrderService, assetService, locationService, teamService, metaWorkOrdersService, toastService) {
    this.fb = fb;
    this.workOrderService = workOrderService;
    this.assetService = assetService;
    this.locationService = locationService;
    this.teamService = teamService;
    this.metaWorkOrdersService = metaWorkOrdersService;
    this.toastService = toastService;
    this.workOrderForm = this.fb.group({
      title: ["", Validators.required],
      status_id: [null, Validators.required],
      priority_id: [null, Validators.required],
      category_id: [null],
      due_date: [""],
      description: [""],
      asset_id: [""],
      location_id: [""],
      assigned_to: [""],
      team_id: [""],
      estimated_hours: [""],
      notes: [""]
    });
  }
  dataLoaded = false;
  ngOnInit() {
    console.log("WorkOrdersComponent: ngOnInit called");
    console.log("WorkOrdersComponent: Initial activeTab:", this.activeTab);
    if (this.dataLoaded) {
      console.log("WorkOrdersComponent: Data already loaded, skipping");
      return;
    }
    this.dataLoaded = true;
    this.loadSelectData();
    this.loadMetadataOptions();
  }
  ngAfterViewInit() {
    console.log("WorkOrdersComponent: ngAfterViewInit called");
    console.log("WorkOrdersComponent: workOrderList component:", this.workOrderList);
    console.log("WorkOrdersComponent: workOrderStats component:", this.workOrderStats);
    console.log("WorkOrdersComponent: workOrderAnalytics component:", this.workOrderAnalytics);
  }
  ngOnDestroy() {
    console.log("WorkOrdersComponent: ngOnDestroy called");
    this.subscription.unsubscribe();
    this.dataLoaded = false;
  }
  loadMetadataOptions() {
    this.metaWorkOrdersService.clearAllCache();
    this.subscription.add(this.metaWorkOrdersService.getStatus().subscribe({
      next: (statuses) => {
        this.statusOptions = statuses;
        if (statuses.length > 0) {
          const defaultStatus = statuses.find((s) => s.slug === "open") || statuses[0];
          this.selectedStatus = defaultStatus;
          this.workOrderForm.patchValue({ status_id: defaultStatus.id });
        }
      },
      error: (error) => {
        console.error("Error loading statuses:", error);
        this.toastService.error("Failed to load status options");
        this.statusOptions = [];
      }
    }));
    this.subscription.add(this.metaWorkOrdersService.getPriorities().subscribe({
      next: (priorities) => {
        this.priorityOptions = priorities;
        if (priorities.length > 0) {
          const defaultPriority = priorities.find((p) => p.slug === "medium") || priorities[0];
          this.selectedPriority = defaultPriority;
          this.workOrderForm.patchValue({ priority_id: defaultPriority.id });
        }
      },
      error: (error) => {
        console.error("Error loading priorities:", error);
        this.toastService.error("Failed to load priority options");
        this.priorityOptions = [];
      }
    }));
    this.subscription.add(this.metaWorkOrdersService.getCategories().subscribe({
      next: (categories) => {
        this.categoryOptions = categories;
      },
      error: (error) => {
        console.error("Error loading categories:", error);
        this.toastService.error("Failed to load category options");
        this.categoryOptions = [];
      }
    }));
  }
  loadSelectData() {
    this.subscription.add(this.assetService.getAssets({ per_page: 1e3 }).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.assets = response.data.assets || response.data || [];
        } else {
          this.assets = [];
          console.warn("Assets response format unexpected:", response);
        }
      },
      error: (error) => {
        console.error("Error loading assets:", error);
        this.assets = [];
      }
    }));
    this.subscription.add(this.locationService.getLocations({ per_page: 1e3 }).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.locations = response.data.locations || response.data || [];
        } else {
          this.locations = [];
          console.warn("Locations response format unexpected:", response);
        }
      },
      error: (error) => {
        console.error("Error loading locations:", error);
        this.locations = [];
      }
    }));
    this.subscription.add(this.teamService.getTeamMembersFlat(1e3).subscribe({
      next: (items) => {
        this.teamMembers = items || [];
      },
      error: (error) => {
        console.error("Error loading team members:", error);
        this.teamMembers = [];
      }
    }));
  }
  // New standardized select box methods
  toggleStatusDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
  }
  togglePriorityDropdown() {
    this.showPriorityDropdown = !this.showPriorityDropdown;
    this.showStatusDropdown = false;
    this.showCategoryDropdown = false;
  }
  toggleCategoryDropdown() {
    this.showCategoryDropdown = !this.showCategoryDropdown;
    this.showStatusDropdown = false;
    this.showPriorityDropdown = false;
  }
  selectStatus(status) {
    this.selectedStatus = status;
    this.workOrderForm.patchValue({ status_id: status.id });
    this.showStatusDropdown = false;
  }
  selectPriority(priority) {
    this.selectedPriority = priority;
    this.workOrderForm.patchValue({ priority_id: priority.id });
    this.showPriorityDropdown = false;
  }
  selectCategory(category) {
    this.selectedCategory = category;
    this.workOrderForm.patchValue({ category_id: category?.id || null });
    this.showCategoryDropdown = false;
  }
  getStatusLabel() {
    return this.selectedStatus ? this.selectedStatus.name : "Select status";
  }
  getPriorityLabel() {
    return this.selectedPriority ? this.selectedPriority.name : "Select priority";
  }
  getCategoryLabel() {
    return this.selectedCategory ? this.selectedCategory.name : "Select category (optional)";
  }
  getStatusValue() {
    return this.selectedStatus ? this.selectedStatus.id : null;
  }
  getPriorityValue() {
    return this.selectedPriority ? this.selectedPriority.id : null;
  }
  getCategoryValue() {
    return this.selectedCategory ? this.selectedCategory.id : null;
  }
  getStatusColor(slug) {
    if (!slug)
      return "#6B7280";
    switch (slug) {
      case "open":
        return "#10B981";
      case "in-progress":
        return "#F59E0B";
      case "completed":
        return "#3B82F6";
      case "cancelled":
        return "#EF4444";
      case "on-hold":
        return "#8B5CF6";
      default:
        return "#6B7280";
    }
  }
  getPriorityColor(priority) {
    if (!priority)
      return "#6B7280";
    switch (priority.slug) {
      case "low":
        return "#10B981";
      case "medium":
        return "#F59E0B";
      case "high":
        return "#F97316";
      case "critical":
        return "#EF4444";
      case "ppm":
        return "#8B5CF6";
      default:
        return "#6B7280";
    }
  }
  getStatusDescription(status) {
    if (!status)
      return "Select a status for this work order";
    switch (status.slug) {
      case "open":
        return "Work order is open and ready to be assigned";
      case "in-progress":
        return "Work order is currently being worked on";
      case "completed":
        return "Work order has been completed successfully";
      case "cancelled":
        return "Work order has been cancelled";
      case "on-hold":
        return "Work order is temporarily on hold";
      default:
        return status.name;
    }
  }
  getPriorityDescription(priority) {
    if (!priority)
      return "Select a priority level for this work order";
    switch (priority.slug) {
      case "low":
        return "Low priority - can be addressed when convenient";
      case "medium":
        return "Medium priority - should be addressed soon";
      case "high":
        return "High priority - needs immediate attention";
      case "critical":
        return "Critical priority - urgent, requires immediate action";
      case "ppm":
        return "Preventive maintenance - scheduled maintenance task";
      default:
        return priority.name;
    }
  }
  getCategoryDescription(category) {
    switch (category.slug) {
      case "preventive-maintenance":
        return "Regular scheduled maintenance to prevent breakdowns";
      case "corrective-maintenance":
        return "Repair work to fix existing problems";
      case "emergency-maintenance":
        return "Urgent repairs requiring immediate attention";
      case "inspection":
        return "Regular inspections and assessments";
      case "calibration":
        return "Equipment calibration and adjustment";
      case "cleaning":
        return "Cleaning and general upkeep";
      case "lubrication":
        return "Lubrication and oil changes";
      case "filter-replacement":
        return "Filter and consumable replacement";
      case "belt-replacement":
        return "Belt and drive component replacement";
      case "electrical":
        return "Electrical system maintenance";
      case "mechanical":
        return "Mechanical system maintenance";
      case "plumbing":
        return "Plumbing system maintenance";
      case "hvac":
        return "HVAC system maintenance";
      default:
        return "Maintenance category";
    }
  }
  // Close dropdowns when clicking outside
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".status-dropdown") && !target.closest(".priority-dropdown") && !target.closest(".category-dropdown")) {
      this.showStatusDropdown = false;
      this.showPriorityDropdown = false;
      this.showCategoryDropdown = false;
    }
  }
  setActiveTab(tab) {
    console.log("WorkOrdersComponent: setActiveTab called with:", tab);
    this.activeTab = tab;
    console.log("WorkOrdersComponent: activeTab is now:", this.activeTab);
    if (tab === "analytics" && this.workOrderAnalytics) {
      this.workOrderAnalytics.refreshData();
    }
  }
  openCreateModal() {
    this.showCreateModal = true;
    this.resetMessages();
    this.loadSelectData();
    this.loadMetadataOptions();
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
        status_id: this.workOrderForm.value.status_id,
        priority_id: this.workOrderForm.value.priority_id,
        category_id: this.workOrderForm.value.category_id || void 0,
        due_date: this.workOrderForm.value.due_date || void 0,
        asset_id: this.workOrderForm.value.asset_id || void 0,
        location_id: this.workOrderForm.value.location_id || void 0,
        assigned_to: this.workOrderForm.value.assigned_to || void 0,
        team_id: this.workOrderForm.value.team_id || void 0,
        estimated_hours: this.workOrderForm.value.estimated_hours || void 0,
        notes: this.workOrderForm.value.notes || void 0
      };
      this.subscription.add(this.workOrderService.createWorkOrder(workOrderData).subscribe({
        next: (response) => {
          this.toastService.success("Work order created successfully");
          this.closeCreateModal();
          this.workOrderForm.reset({
            status_id: this.selectedStatus?.id || null,
            priority_id: this.selectedPriority?.id || null,
            category_id: null
          });
          this.selectedCategory = null;
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
          this.isLoading = false;
          if (error.error?.errors) {
            const fieldErrors = error.error.errors;
            const message = error.error?.message || "Please fix the validation errors below.";
            this.showError(message, fieldErrors);
            this.toastService.error(message);
          } else if (error.error?.message) {
            this.showError(error.error.message);
            this.toastService.error(error.error.message);
          } else {
            const message = "Failed to create work order. Please try again.";
            this.showError(message);
            this.toastService.error(message);
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
    this.loadSelectData();
    this.loadMetadataOptions();
  }
  onAssetChange(event) {
    const selectedId = event.target.value;
    const selectedAsset = this.assets.find((a) => a.id === +selectedId);
    this.workOrderForm.patchValue({ location_id: selectedAsset?.location?.id || "" });
  }
  static \u0275fac = function WorkOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrdersComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WorkOrderService), \u0275\u0275directiveInject(AssetService), \u0275\u0275directiveInject(LocationService), \u0275\u0275directiveInject(TeamService), \u0275\u0275directiveInject(MetaWorkOrdersService), \u0275\u0275directiveInject(ToastService));
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
  }, hostBindings: function WorkOrdersComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function WorkOrdersComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: false, decls: 25, vars: 11, consts: [[1, "work-orders-container"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "header"], [1, "tabs"], [1, "tab", 3, "click"], [1, "content"], [1, "work-orders-content"], [1, "create-button-container"], [1, "create-button", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [3, "createWorkOrderRequested"], [1, "analytics-content"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "success-message"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "error-message"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "header-icon", "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "section-icon", "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "form-row", "full-width"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "title", "placeholder", "Enter work order title"], ["class", "field-error", 4, "ngIf"], [1, "form-row"], [1, "relative", "status-dropdown", 3, "click"], ["type", "button", 1, "dropdown-button", 3, "click"], [1, "dropdown-content"], ["class", "placeholder", 4, "ngIf"], ["class", "selected-item", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "dropdown-menu", 4, "ngIf"], [1, "relative", "priority-dropdown", 3, "click"], [1, "relative", "category-dropdown", 3, "click"], ["type", "datetime-local", "formControlName", "due_date"], ["formControlName", "description", "placeholder", "Enter work order description"], ["type", "number", "formControlName", "estimated_hours", "placeholder", "0", "min", "0", "step", "0.5"], ["formControlName", "notes", "placeholder", "Additional notes"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["formControlName", "asset_id", 3, "change", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "field-help"], ["formControlName", "location_id", 3, "disabled"], ["formControlName", "assigned_to", 3, "disabled"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-primary", "w-[170px]", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white", "inline"], [1, "field-error"], [1, "placeholder"], [1, "selected-item"], [1, "status-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon"], [1, "selected-text"], [1, "dropdown-menu"], [1, "dropdown-header"], ["type", "button", "class", "dropdown-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "item-content"], [1, "item-icon"], [1, "item-details"], [1, "item-name"], [1, "item-description", "!text-xs"], [1, "priority-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "category-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"], [1, "item-icon", "no-category"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "item-description"], [3, "value"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function WorkOrdersComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(21, "app-work-order-list", 12);
      \u0275\u0275listener("createWorkOrderRequested", function WorkOrdersComponent_Template_app_work_order_list_createWorkOrderRequested_21_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 13);
      \u0275\u0275element(23, "app-work-order-analytics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, WorkOrdersComponent_div_24_Template, 132, 70, "div", 14);
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
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "analytics");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showCreateModal);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, WorkOrderAnalyticsComponent, WorkOrderListComponent, WorkOrderStatsComponent], styles: [`@charset "UTF-8";



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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {
  border-radius: 12px;
  padding: 0.5rem 0;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
}
.work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover {
  background: #f3f4f6;
}
.work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  border-bottom-color: #2563eb;
}
.work-orders-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]:hover {
  color: #fff;
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
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 0;
  display: none;
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
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  background-color: #f9fafb;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  background: white;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover {
  background-color: #f3f4f6;
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
.status-dropdown[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%] {
  position: relative;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: white;
  transition: all 0.2s ease;
  cursor: pointer;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus, 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus, 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%] {
  border-color: #fca5a5;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%] {
  border-color: #3b82f6;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.status-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {
  color: #9ca3af;
}
.status-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.status-dropdown[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .priority-icon[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .priority-icon[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .priority-icon[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.status-dropdown[_ngcontent-%COMP%]   .status-icon.no-category[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .priority-icon.no-category[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .category-icon.no-category[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .status-icon.no-category[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .priority-icon.no-category[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .category-icon.no-category[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .status-icon.no-category[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .priority-icon.no-category[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .category-icon.no-category[_ngcontent-%COMP%] {
  background-color: #f3f4f6;
}
.status-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
.status-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%] {
  color: #111827;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  transition: transform 0.2s ease;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {
  position: absolute;
  z-index: 50;
  width: 100%;
  margin-top: 0.25rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 15rem;
  overflow: auto;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: #f9fafb;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {
  background-color: #eff6ff;
  outline: none;
}
.status-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%] {
  background-color: #eff6ff;
  color: #1d4ed8;
}
.status-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.status-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff6ff;
}
.status-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%] {
  flex: 1;
}
.status-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #111827;
}
.status-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], 
.category-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.125rem;
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
    <div class="tab"\r
         [class.active]="activeTab === 'work-orders'"\r
         (click)="setActiveTab('work-orders')">\r
      Work Orders\r
    </div>\r
    <div class="tab"\r
         [class.active]="activeTab === 'analytics'"\r
         (click)="setActiveTab('analytics')">\r
      Analytics\r
    </div>\r
  </div>\r
\r
  <div class="content">\r
    <div class="work-orders-content" [class.active]="activeTab === 'work-orders'">\r
\r
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
      <app-work-order-list (createWorkOrderRequested)="openCreateModal()"></app-work-order-list>\r
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
              <input\r
                type="text"\r
                formControlName="title"\r
                placeholder="Enter work order title"\r
                [class.error-input]="hasFieldError('title')">\r
              <div class="field-error" *ngIf="hasFieldError('title')">\r
                {{ getFieldError('title') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group" [class.error]="hasFieldError('status_id')">\r
              <label>Status <span class="required">*</span></label>\r
              <!-- Custom Status Dropdown -->\r
              <div class="relative status-dropdown" (click)="$event.stopPropagation()">\r
                <button type="button" (click)="toggleStatusDropdown()" class="dropdown-button" [class.error]="hasFieldError('status_id')" [class.active]="showStatusDropdown">\r
                  <div class="dropdown-content">\r
                    <span *ngIf="!selectedStatus" class="placeholder">Select status</span>\r
                    <div *ngIf="selectedStatus" class="selected-item">\r
                      <div class="status-icon" [style.background-color]="getStatusColor(selectedStatus.slug) + '20'">\r
                        <svg class="icon" [style.color]="getStatusColor(selectedStatus.slug)" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                        </svg>\r
                      </div>\r
                      <span class="selected-text">{{selectedStatus.name}}</span>\r
                    </div>\r
                    <svg class="dropdown-arrow" [class.rotated]="showStatusDropdown" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                    </svg>\r
                  </div>\r
                </button>\r
                <!-- Dropdown Menu -->\r
                <div *ngIf="showStatusDropdown" class="dropdown-menu">\r
                  <div class="dropdown-header">Select status</div>\r
                  <button *ngFor="let status of statusOptions" type="button" (click)="selectStatus(status)" class="dropdown-item" [class.selected]="selectedStatus?.id === status.id">\r
                    <div class="item-content">\r
                      <div class="item-icon" [style.background-color]="getStatusColor(status.slug) + '20'">\r
                        <svg class="icon" [style.color]="getStatusColor(status.slug)" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                        </svg>\r
                      </div>\r
                      <div class="item-details">\r
                        <div class="item-name">{{status.name}}</div>\r
                        <div class="item-description !text-xs">{{getStatusDescription(status)}}</div>\r
                      </div>\r
                    </div>\r
                  </button>\r
                </div>\r
              </div>\r
              <div class="field-error" *ngIf="hasFieldError('status_id')">\r
                {{ getFieldError('status_id') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group" [class.error]="hasFieldError('priority_id')">\r
              <label>Priority <span class="required">*</span></label>\r
              <!-- Custom Priority Dropdown -->\r
              <div class="relative priority-dropdown" (click)="$event.stopPropagation()">\r
                <button type="button" (click)="togglePriorityDropdown()" class="dropdown-button" [class.error]="hasFieldError('priority_id')" [class.active]="showPriorityDropdown">\r
                  <div class="dropdown-content">\r
                    <span *ngIf="!selectedPriority" class="placeholder">Select priority</span>\r
                    <div *ngIf="selectedPriority" class="selected-item">\r
                      <div class="priority-icon" [style.background-color]="getPriorityColor(selectedPriority) + '20'">\r
                        <svg class="icon" [style.color]="getPriorityColor(selectedPriority)" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
                        </svg>\r
                      </div>\r
                      <span class="selected-text">{{selectedPriority.name}}</span>\r
                    </div>\r
                    <svg class="dropdown-arrow" [class.rotated]="showPriorityDropdown" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                    </svg>\r
                  </div>\r
                </button>\r
                <!-- Dropdown Menu -->\r
                <div *ngIf="showPriorityDropdown" class="dropdown-menu">\r
                  <div class="dropdown-header">Select priority</div>\r
                  <button *ngFor="let priority of priorityOptions" type="button" (click)="selectPriority(priority)" class="dropdown-item" [class.selected]="selectedPriority?.id === priority.id">\r
                    <div class="item-content">\r
                      <div class="item-icon" [style.background-color]="getPriorityColor(priority) + '20'">\r
                        <svg class="icon" [style.color]="getPriorityColor(priority)" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
                        </svg>\r
                      </div>\r
                      <div class="item-details">\r
                        <div class="item-name">{{priority.name}}</div>\r
                        <div class="item-description !text-xs">{{getPriorityDescription(priority)}}</div>\r
                      </div>\r
                    </div>\r
                  </button>\r
                </div>\r
              </div>\r
              <div class="field-error" *ngIf="hasFieldError('priority_id')">\r
                {{ getFieldError('priority_id') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group" [class.error]="hasFieldError('category_id')">\r
              <label>Category (Optional)</label>\r
              <!-- Custom Category Dropdown -->\r
              <div class="relative category-dropdown" (click)="$event.stopPropagation()">\r
                <button type="button" (click)="toggleCategoryDropdown()" class="dropdown-button" [class.error]="hasFieldError('category_id')" [class.active]="showCategoryDropdown">\r
                  <div class="dropdown-content">\r
                    <span *ngIf="!selectedCategory" class="placeholder">Select category (optional)</span>\r
                    <div *ngIf="selectedCategory" class="selected-item">\r
                      <div class="category-icon">\r
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>\r
                        </svg>\r
                      </div>\r
                      <span class="selected-text">{{selectedCategory.name}}</span>\r
                    </div>\r
                    <svg class="dropdown-arrow" [class.rotated]="showCategoryDropdown" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                    </svg>\r
                  </div>\r
                </button>\r
                <!-- Dropdown Menu -->\r
                <div *ngIf="showCategoryDropdown" class="dropdown-menu">\r
                  <div class="dropdown-header">Select category</div>\r
                  <button type="button" (click)="selectCategory(null)" class="dropdown-item">\r
                    <div class="item-content">\r
                      <div class="item-icon no-category">\r
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
                        </svg>\r
                      </div>\r
                      <div class="item-details">\r
                        <div class="item-name">No Category</div>\r
                        <div class="item-description">Work order without specific category</div>\r
                      </div>\r
                    </div>\r
                  </button>\r
                  <button *ngFor="let category of categoryOptions" type="button" (click)="selectCategory(category)" class="dropdown-item" [class.selected]="selectedCategory?.id === category.id">\r
                    <div class="item-content">\r
                      <div class="item-icon">\r
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>\r
                        </svg>\r
                      </div>\r
                      <div class="item-details">\r
                        <div class="item-name">{{category.name}}</div>\r
                        <div class="item-description">{{getCategoryDescription(category)}}</div>\r
                      </div>\r
                    </div>\r
                  </button>\r
                </div>\r
              </div>\r
              <div class="field-error" *ngIf="hasFieldError('category_id')">\r
                {{ getFieldError('category_id') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label>Due Date</label>\r
              <input\r
                type="datetime-local"\r
                formControlName="due_date">\r
            </div>\r
          </div>\r
\r
          <div class="form-row full-width">\r
            <div class="form-group">\r
              <label>Description</label>\r
              <textarea\r
                formControlName="description"\r
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
              <label>Asset (Optional)</label>\r
              <select\r
                (change)="onAssetChange($event)"\r
                formControlName="asset_id"\r
                [class.error-input]="hasFieldError('asset_id')"\r
                [disabled]="assets.length === 0">\r
                <option value="">{{ assets.length === 0 ? 'Loading assets...' : 'Select an asset' }}</option>\r
                <option *ngFor="let asset of assets" [value]="asset.id">\r
                  {{ asset.name || asset.asset_name || 'Asset ' + asset.id }}\r
                </option>\r
              </select>\r
              <div class="field-error" *ngIf="hasFieldError('asset_id')">\r
                {{ getFieldError('asset_id') }}\r
              </div>\r
              <div class="field-help">\r
                <small>Select an existing asset from your assets list</small>\r
              </div>\r
            </div>\r
\r
            <div class="form-group" [class.error]="hasFieldError('location_id')">\r
              <label>Location (Optional)</label>\r
              <select\r
                formControlName="location_id"\r
                [class.error-input]="hasFieldError('location_id')"\r
                [disabled]="locations.length === 0">\r
                <option value="">{{ locations.length === 0 ? 'Loading locations...' : 'Select a location' }}</option>\r
                <option *ngFor="let location of locations" [value]="location.id">\r
                  {{ location.name || 'Location ' + location.id }}\r
                </option>\r
              </select>\r
              <div class="field-error" *ngIf="hasFieldError('location_id')">\r
                {{ getFieldError('location_id') }}\r
              </div>\r
              <div class="field-help">\r
                <small>Select an existing location from your locations list</small>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group" [class.error]="hasFieldError('assigned_to')">\r
              <label>Assign To Team Member (Optional)</label>\r
              <select\r
                formControlName="assigned_to"\r
                [class.error-input]="hasFieldError('assigned_to')"\r
                [disabled]="teamMembers.length === 0">\r
                <option value="">{{ teamMembers.length === 0 ? 'Loading team members...' : 'Select a team member' }}</option>\r
                <option *ngFor="let member of teamMembers" [value]="member.id">\r
                  {{ member.first_name }} {{ member.last_name }}\r
                </option>\r
              </select>\r
              <div class="field-error" *ngIf="hasFieldError('assigned_to')">\r
                {{ getFieldError('assigned_to') }}\r
              </div>\r
              <div class="field-help">\r
                <small>Select an existing team member to assign the work order to</small>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" (click)="closeCreateModal()" [disabled]="isLoading">Cancel</button>\r
      <button class="btn btn-primary w-[170px]" (click)="onSubmit()" [disabled]="isLoading">\r
        @if (isLoading){\r
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">\r
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
          </svg>\r
        }\r
\r
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  gap: 1rem;
  margin-bottom: 2rem;
}
.work-orders-container .tabs .tab {
  border-radius: 12px;
  padding: 0.5rem 0;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
}
.work-orders-container .tabs .tab:hover {
  background: #f3f4f6;
}
.work-orders-container .tabs .tab.active {
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  border-bottom-color: #2563eb;
}
.work-orders-container .tabs .tab.active:hover {
  color: #fff;
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
.modal-overlay .modal::-webkit-scrollbar {
  width: 0;
  display: none;
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
.modal-overlay .modal .modal-body .form-section .form-row .form-group select:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  background-color: #f9fafb;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group select option {
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  background: white;
}
.modal-overlay .modal .modal-body .form-section .form-row .form-group select option:hover {
  background-color: #f3f4f6;
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
.status-dropdown,
.priority-dropdown,
.category-dropdown {
  position: relative;
}
.status-dropdown .dropdown-button,
.priority-dropdown .dropdown-button,
.category-dropdown .dropdown-button {
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: white;
  transition: all 0.2s ease;
  cursor: pointer;
}
.status-dropdown .dropdown-button:focus,
.priority-dropdown .dropdown-button:focus,
.category-dropdown .dropdown-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.status-dropdown .dropdown-button.error,
.priority-dropdown .dropdown-button.error,
.category-dropdown .dropdown-button.error {
  border-color: #fca5a5;
}
.status-dropdown .dropdown-button.active,
.priority-dropdown .dropdown-button.active,
.category-dropdown .dropdown-button.active {
  border-color: #3b82f6;
}
.status-dropdown .dropdown-content,
.priority-dropdown .dropdown-content,
.category-dropdown .dropdown-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.status-dropdown .placeholder,
.priority-dropdown .placeholder,
.category-dropdown .placeholder {
  color: #9ca3af;
}
.status-dropdown .selected-item,
.priority-dropdown .selected-item,
.category-dropdown .selected-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.status-dropdown .status-icon,
.status-dropdown .priority-icon,
.status-dropdown .category-icon,
.priority-dropdown .status-icon,
.priority-dropdown .priority-icon,
.priority-dropdown .category-icon,
.category-dropdown .status-icon,
.category-dropdown .priority-icon,
.category-dropdown .category-icon {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.status-dropdown .status-icon.no-category,
.status-dropdown .priority-icon.no-category,
.status-dropdown .category-icon.no-category,
.priority-dropdown .status-icon.no-category,
.priority-dropdown .priority-icon.no-category,
.priority-dropdown .category-icon.no-category,
.category-dropdown .status-icon.no-category,
.category-dropdown .priority-icon.no-category,
.category-dropdown .category-icon.no-category {
  background-color: #f3f4f6;
}
.status-dropdown .icon,
.priority-dropdown .icon,
.category-dropdown .icon {
  width: 1rem;
  height: 1rem;
}
.status-dropdown .selected-text,
.priority-dropdown .selected-text,
.category-dropdown .selected-text {
  color: #111827;
}
.status-dropdown .dropdown-arrow,
.priority-dropdown .dropdown-arrow,
.category-dropdown .dropdown-arrow {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  transition: transform 0.2s ease;
}
.status-dropdown .dropdown-arrow.rotated,
.priority-dropdown .dropdown-arrow.rotated,
.category-dropdown .dropdown-arrow.rotated {
  transform: rotate(180deg);
}
.status-dropdown .dropdown-menu,
.priority-dropdown .dropdown-menu,
.category-dropdown .dropdown-menu {
  position: absolute;
  z-index: 50;
  width: 100%;
  margin-top: 0.25rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 15rem;
  overflow: auto;
}
.status-dropdown .dropdown-header,
.priority-dropdown .dropdown-header,
.category-dropdown .dropdown-header {
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: #f9fafb;
}
.status-dropdown .dropdown-item,
.priority-dropdown .dropdown-item,
.category-dropdown .dropdown-item {
  width: 100%;
  padding: 0.75rem;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.status-dropdown .dropdown-item:hover,
.status-dropdown .dropdown-item:focus,
.priority-dropdown .dropdown-item:hover,
.priority-dropdown .dropdown-item:focus,
.category-dropdown .dropdown-item:hover,
.category-dropdown .dropdown-item:focus {
  background-color: #eff6ff;
  outline: none;
}
.status-dropdown .dropdown-item.selected,
.priority-dropdown .dropdown-item.selected,
.category-dropdown .dropdown-item.selected {
  background-color: #eff6ff;
  color: #1d4ed8;
}
.status-dropdown .item-content,
.priority-dropdown .item-content,
.category-dropdown .item-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.status-dropdown .item-icon,
.priority-dropdown .item-icon,
.category-dropdown .item-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff6ff;
}
.status-dropdown .item-details,
.priority-dropdown .item-details,
.category-dropdown .item-details {
  flex: 1;
}
.status-dropdown .item-name,
.priority-dropdown .item-name,
.category-dropdown .item-name {
  font-weight: 500;
  color: #111827;
}
.status-dropdown .item-description,
.priority-dropdown .item-description,
.category-dropdown .item-description {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.125rem;
}
/*# sourceMappingURL=work-orders.component.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: WorkOrderService }, { type: AssetService }, { type: LocationService }, { type: TeamService }, { type: MetaWorkOrdersService }, { type: ToastService }], { workOrderList: [{
    type: ViewChild,
    args: [WorkOrderListComponent]
  }], workOrderStats: [{
    type: ViewChild,
    args: [WorkOrderStatsComponent]
  }], workOrderAnalytics: [{
    type: ViewChild,
    args: [WorkOrderAnalyticsComponent]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrdersComponent, { className: "WorkOrdersComponent", filePath: "src/app/work-orders/work-orders.component.ts", lineNumber: 21 });
})();

// src/app/work-orders/components/add-work-order-parts-modal/add-work-order-parts-modal.component.ts
function AddWorkOrderPartsModalComponent_div_0_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "button", 20);
    \u0275\u0275listener("click", function AddWorkOrderPartsModalComponent_div_0_div_12_div_1_Template_button_click_7_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addToCart(p_r4));
    });
    \u0275\u0275text(8, "Add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("UoM: ", p_r4.uom || "-", " \u2022 On hand: ", p_r4.on_hand || "-", "");
  }
}
function AddWorkOrderPartsModalComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, AddWorkOrderPartsModalComponent_div_0_div_12_div_1_Template, 9, 3, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.results);
  }
}
function AddWorkOrderPartsModalComponent_div_0_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AddWorkOrderPartsModalComponent_div_0_div_13_div_1_Template_input_ngModelChange_4_listener($event) {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(c_r6.qty, $event) || (c_r6.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AddWorkOrderPartsModalComponent_div_0_div_13_div_1_Template_input_ngModelChange_5_listener($event) {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(c_r6.unit_cost, $event) || (c_r6.unit_cost = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 26);
    \u0275\u0275listener("click", function AddWorkOrderPartsModalComponent_div_0_div_13_div_1_Template_button_click_6_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeFromCart(c_r6.part.id));
    });
    \u0275\u0275text(7, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.part.name);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", c_r6.qty);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", c_r6.unit_cost);
  }
}
function AddWorkOrderPartsModalComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, AddWorkOrderPartsModalComponent_div_0_div_13_div_1_Template, 8, 3, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cart);
  }
}
function AddWorkOrderPartsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function AddWorkOrderPartsModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function AddWorkOrderPartsModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3");
    \u0275\u0275text(4, "Add Parts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function AddWorkOrderPartsModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function AddWorkOrderPartsModalComponent_div_0_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.query, $event) || (ctx_r1.query = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function AddWorkOrderPartsModalComponent_div_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.search());
    });
    \u0275\u0275text(11, "Search");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AddWorkOrderPartsModalComponent_div_0_div_12_Template, 2, 1, "div", 9)(13, AddWorkOrderPartsModalComponent_div_0_div_13_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
    \u0275\u0275listener("click", function AddWorkOrderPartsModalComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(16, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 8);
    \u0275\u0275listener("click", function AddWorkOrderPartsModalComponent_div_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(18, "Add to Work Order");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.query);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.results.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cart.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.cart.length === 0);
  }
}
var AddWorkOrderPartsModalComponent = class _AddWorkOrderPartsModalComponent {
  woService;
  inv;
  toastService;
  workOrderId;
  isOpen = false;
  closed = new EventEmitter();
  saved = new EventEmitter();
  query = "";
  results = [];
  cart = [];
  loading = false;
  constructor(woService, inv, toastService) {
    this.woService = woService;
    this.inv = inv;
    this.toastService = toastService;
  }
  search() {
    this.loading = true;
    this.inv.getPartsCatalog(this.query || void 0, void 0, 1, 10).subscribe({
      next: (resp) => {
        this.results = resp?.data?.data || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastService.error("Failed to search parts");
      }
    });
  }
  addToCart(part) {
    const existing = this.cart.find((c) => c.part.id === part.id);
    if (existing) {
      existing.qty += 1;
      this.toastService.success("Part quantity updated");
      return;
    }
    this.cart.push({ part, qty: 1, unit_cost: part.unit_cost || void 0 });
    this.toastService.success("Part added to cart");
  }
  removeFromCart(partId) {
    this.cart = this.cart.filter((c) => c.part.id !== partId);
    this.toastService.success("Part removed from cart");
  }
  save() {
    return __async(this, null, function* () {
      if (!this.workOrderId || this.cart.length === 0) {
        this.closed.emit();
        return;
      }
      const payload = this.cart.map((c) => ({ part_id: c.part.id, qty: c.qty, unit_cost: c.unit_cost }));
      this.woService.addParts(this.workOrderId, payload).subscribe({
        next: (items) => {
          this.toastService.success("Parts added to work order successfully");
          this.saved.emit(items);
          this.closed.emit();
        },
        error: () => {
          this.toastService.error("Failed to add parts to work order");
        }
      });
    });
  }
  close() {
    this.closed.emit();
  }
  ngOnChanges(changes) {
    if (changes["isOpen"] && this.isOpen && this.results.length === 0 && !this.loading) {
      this.search();
    }
  }
  static \u0275fac = function AddWorkOrderPartsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddWorkOrderPartsModalComponent)(\u0275\u0275directiveInject(WorkOrderService), \u0275\u0275directiveInject(InventoryAnalyticsService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddWorkOrderPartsModalComponent, selectors: [["app-add-work-order-parts-modal"]], inputs: { workOrderId: "workOrderId", isOpen: "isOpen" }, outputs: { closed: "closed", saved: "saved" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close", 3, "click"], [1, "modal-body"], [1, "search-row"], ["placeholder", "Search parts by name or code", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "results", 4, "ngIf"], ["class", "cart", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "results"], ["class", "result-row", 4, "ngFor", "ngForOf"], [1, "result-row"], [1, "left"], [1, "name"], [1, "sub"], [1, "right"], [1, "btn", 3, "click"], [1, "cart"], ["class", "cart-row", 4, "ngFor", "ngForOf"], [1, "cart-row"], ["type", "number", "min", "0.001", "step", "0.001", 1, "qty", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "Unit cost", 1, "cost", 3, "ngModelChange", "ngModel"], [1, "icon", 3, "click"]], template: function AddWorkOrderPartsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AddWorkOrderPartsModalComponent_div_0_Template, 19, 5, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  width: min(720px, 95vw);\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  max-height: 60vh;\n  overflow: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.close[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #374151;\n}\n.form-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.results[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.result-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.result-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.result-row[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.cart[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.cart-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.cart-row[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.cart-row[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n  width: 7rem;\n  margin-left: 0.5rem;\n}\n.cart-row[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=add-work-order-parts-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddWorkOrderPartsModalComponent, [{
    type: Component,
    args: [{ selector: "app-add-work-order-parts-modal", standalone: false, template: `<div class="modal-overlay" *ngIf="isOpen" (click)="close()">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3>Add Parts</h3>\r
      <button class="close" (click)="close()">\xD7</button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="search-row">\r
        <input class="form-input" [(ngModel)]="query" placeholder="Search parts by name or code" />\r
        <button class="btn btn-primary" (click)="search()" [disabled]="loading">Search</button>\r
      </div>\r
      <div class="results" *ngIf="results.length">\r
        <div class="result-row" *ngFor="let p of results">\r
          <div class="left">\r
            <div class="name">{{ p.name }}</div>\r
            <div class="sub">UoM: {{ $any(p).uom || '-' }} \u2022 On hand: {{ $any(p).on_hand || '-' }}</div>\r
          </div>\r
          <div class="right">\r
            <button class="btn" (click)="addToCart(p)">Add</button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="cart" *ngIf="cart.length">\r
        <div class="cart-row" *ngFor="let c of cart">\r
          <div class="left">{{ c.part.name }}</div>\r
          <div class="right">\r
            <input class="qty" type="number" [(ngModel)]="c.qty" min="0.001" step="0.001" />\r
            <input class="cost" type="number" [(ngModel)]="c.unit_cost" min="0" step="0.01" placeholder="Unit cost" />\r
            <button class="icon" (click)="removeFromCart($any(c.part).id)">\u{1F5D1}</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" (click)="close()">Cancel</button>\r
      <button class="btn btn-primary" (click)="save()" [disabled]="cart.length===0">Add to Work Order</button>\r
    </div>\r
  </div>\r
  </div>\r
\r
\r
`, styles: ["/* src/app/work-orders/components/add-work-order-parts-modal/add-work-order-parts-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  width: min(720px, 95vw);\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-body {\n  padding: 1rem 1.25rem;\n  max-height: 60vh;\n  overflow: auto;\n}\n.modal-footer {\n  padding: 1rem 1.25rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.close {\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.btn {\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n}\n.btn.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n}\n.btn.btn-secondary {\n  background: #fff;\n  color: #374151;\n}\n.form-input {\n  flex: 1;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.search-row {\n  display: flex;\n  gap: 0.5rem;\n}\n.results {\n  margin-top: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.result-row {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.result-row .name {\n  font-weight: 600;\n}\n.result-row .sub {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.cart {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.cart-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.cart-row .qty {\n  width: 6rem;\n}\n.cart-row .cost {\n  width: 7rem;\n  margin-left: 0.5rem;\n}\n.cart-row .icon {\n  margin-left: 0.5rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=add-work-order-parts-modal.component.css.map */\n"] }]
  }], () => [{ type: WorkOrderService }, { type: InventoryAnalyticsService }, { type: ToastService }], { workOrderId: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], closed: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddWorkOrderPartsModalComponent, { className: "AddWorkOrderPartsModalComponent", filePath: "src/app/work-orders/components/add-work-order-parts-modal/add-work-order-parts-modal.component.ts", lineNumber: 12 });
})();

// src/app/work-orders/components/view-costs-modal/view-costs-modal.component.ts
function ViewCostsModalComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Loading costs...");
    \u0275\u0275elementEnd();
  }
}
function ViewCostsModalComponent_div_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "No parts added.");
    \u0275\u0275elementEnd();
  }
}
function ViewCostsModalComponent_div_0_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((p_r3.part == null ? null : p_r3.part.name) || "Part #" + p_r3.part_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", p_r3.qty, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.getCurrencySymbol(), "", \u0275\u0275pipeBind2(7, 4, (p_r3.unit_cost || 0) * (p_r3.qty || 0), "1.2-2"), "");
  }
}
function ViewCostsModalComponent_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, ViewCostsModalComponent_div_0_div_32_div_1_Template, 8, 7, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.parts);
  }
}
function ViewCostsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ViewCostsModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ViewCostsModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3");
    \u0275\u0275text(4, "Work Order Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ViewCostsModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275template(8, ViewCostsModalComponent_div_0_div_8_Template, 2, 0, "div", 6);
    \u0275\u0275elementStart(9, "div", 7)(10, "div")(11, "div", 8);
    \u0275\u0275text(12, "Labor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "div", 8);
    \u0275\u0275text(19, "Parts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 9);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "div", 8);
    \u0275\u0275text(25, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 10);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "h4");
    \u0275\u0275text(30, "Parts");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ViewCostsModalComponent_div_0_div_31_Template, 2, 0, "div", 6)(32, ViewCostsModalComponent_div_0_div_32_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 12)(34, "button", 13);
    \u0275\u0275listener("click", function ViewCostsModalComponent_div_0_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(35, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind2(15, 10, ctx_r1.laborMinutes / 60, "1.2-2"), " hrs \u2022 ", ctx_r1.getCurrencySymbol(), "", \u0275\u0275pipeBind2(16, 13, ctx_r1.laborCost, "1.2-2"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.getCurrencySymbol(), "", \u0275\u0275pipeBind2(22, 16, ctx_r1.partsCost, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.getCurrencySymbol(), "", \u0275\u0275pipeBind2(28, 19, ctx_r1.totalCost, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.parts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parts.length);
  }
}
var ViewCostsModalComponent = class _ViewCostsModalComponent {
  woService;
  currencyService;
  workOrderId;
  isOpen = false;
  closed = new EventEmitter();
  loading = false;
  timeLogs = [];
  parts = [];
  laborMinutes = 0;
  laborCost = 0;
  partsCost = 0;
  totalCost = 0;
  constructor(woService, currencyService) {
    this.woService = woService;
    this.currencyService = currencyService;
  }
  getCurrencySymbol() {
    return this.currencyService.getSymbol();
  }
  ngOnChanges(changes) {
    if (changes["isOpen"] && this.isOpen && this.workOrderId) {
      this.fetchCosts();
    }
  }
  fetchCosts() {
    this.loading = true;
    const id = this.workOrderId;
    this.woService.getTimeLogs(id).subscribe({
      next: (data) => {
        this.timeLogs = data.logs || [];
        this.laborMinutes = data.totals?.total_minutes || 0;
        this.laborCost = data.totals?.total_cost || 0;
        this.computeTotals();
      }
    });
    this.woService.getParts(id).subscribe({
      next: (items) => {
        this.parts = items || [];
        this.computeTotals();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  computeTotals() {
    this.partsCost = (this.parts || []).reduce((sum, p) => {
      const unit = p.unit_cost ?? 0;
      const qty = p.qty ?? 0;
      return sum + unit * qty;
    }, 0);
    this.totalCost = (this.laborCost || 0) + (this.partsCost || 0);
  }
  close() {
    this.closed.emit();
  }
  static \u0275fac = function ViewCostsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCostsModalComponent)(\u0275\u0275directiveInject(WorkOrderService), \u0275\u0275directiveInject(CurrencyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCostsModalComponent, selectors: [["app-view-costs-modal"]], inputs: { workOrderId: "workOrderId", isOpen: "isOpen" }, outputs: { closed: "closed" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close", 3, "click"], [1, "modal-body"], ["class", "text-sm text-gray-500", 4, "ngIf"], [1, "summary"], [1, "label"], [1, "value"], [1, "value", "total"], ["class", "parts-list", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "text-sm", "text-gray-500"], [1, "parts-list"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "name"], [1, "qty"], [1, "cost"]], template: function ViewCostsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ViewCostsModalComponent_div_0_Template, 36, 22, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgForOf, NgIf, DecimalPipe], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  width: min(720px, 95vw);\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  max-height: 60vh;\n  overflow: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.close[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #374151;\n}\n.summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.summary[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.summary[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.summary[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.parts-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.parts-list[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.parts-list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.parts-list[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.parts-list[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=view-costs-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCostsModalComponent, [{
    type: Component,
    args: [{ selector: "app-view-costs-modal", standalone: false, template: `<div class="modal-overlay" *ngIf="isOpen" (click)="close()">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3>Work Order Costs</h3>\r
      <button class="close" (click)="close()">\xD7</button>\r
    </div>\r
    <div class="modal-body">\r
      <div *ngIf="loading" class="text-sm text-gray-500">Loading costs...</div>\r
\r
      <div class="summary">\r
        <div>\r
          <div class="label">Labor</div>\r
          <div class="value">{{ (laborMinutes/60) | number:'1.2-2' }} hrs \u2022 {{ getCurrencySymbol() }}{{ laborCost | number:'1.2-2' }}</div>\r
        </div>\r
        <div>\r
          <div class="label">Parts</div>\r
          <div class="value">{{ getCurrencySymbol() }}{{ partsCost | number:'1.2-2' }}</div>\r
        </div>\r
        <div>\r
          <div class="label">Total</div>\r
          <div class="value total">{{ getCurrencySymbol() }}{{ totalCost | number:'1.2-2' }}</div>\r
        </div>\r
      </div>\r
\r
      <h4>Parts</h4>\r
      <div *ngIf="parts.length === 0" class="text-sm text-gray-500">No parts added.</div>\r
      <div class="parts-list" *ngIf="parts.length">\r
        <div class="row" *ngFor="let p of parts">\r
          <div class="name">{{ p.part?.name || ('Part #' + p.part_id) }}</div>\r
          <div class="qty">x{{ p.qty }}</div>\r
          <div class="cost">{{ getCurrencySymbol() }}{{ ((($any(p).unit_cost || 0) * ($any(p).qty || 0)) | number:'1.2-2') }}</div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" (click)="close()">Close</button>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
`, styles: ["/* src/app/work-orders/components/view-costs-modal/view-costs-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  width: min(720px, 95vw);\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-body {\n  padding: 1rem 1.25rem;\n  max-height: 60vh;\n  overflow: auto;\n}\n.modal-footer {\n  padding: 1rem 1.25rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.close {\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.btn {\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n}\n.btn.btn-secondary {\n  background: #fff;\n  color: #374151;\n}\n.summary {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.summary .label {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.summary .value {\n  font-weight: 700;\n}\n.summary .total {\n  color: #111827;\n}\n.parts-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.parts-list .row {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n}\n.parts-list .name {\n  font-weight: 600;\n}\n.parts-list .qty {\n  color: #6b7280;\n}\n.parts-list .cost {\n  font-weight: 600;\n}\n/*# sourceMappingURL=view-costs-modal.component.css.map */\n"] }]
  }], () => [{ type: WorkOrderService }, { type: CurrencyService }], { workOrderId: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCostsModalComponent, { className: "ViewCostsModalComponent", filePath: "src/app/work-orders/components/view-costs-modal/view-costs-modal.component.ts", lineNumber: 11 });
})();

// src/app/work-orders/components/work-order-preview/work-order-preview.component.ts
function WorkOrderPreviewComponent_div_0_div_8_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("by ", evt_r3.user.first_name, " ", evt_r3.user.last_name, "");
  }
}
function WorkOrderPreviewComponent_div_0_div_8_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u201C", evt_r3.details.comment, "\u201D");
  }
}
function WorkOrderPreviewComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "div", 21)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, WorkOrderPreviewComponent_div_0_div_8_p_8_Template, 2, 2, "p", 22)(9, WorkOrderPreviewComponent_div_0_div_8_p_9_Template, 2, 1, "p", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evt_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("dot-muted", evt_r3.type !== "created");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(evt_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, evt_r3.timestamp, "MMMM d, y 'at' h:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", evt_r3.user);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r3.type === "comment" && (evt_r3.details == null ? null : evt_r3.details.comment));
  }
}
function WorkOrderPreviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeHistoryModal());
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 13)(3, "h3");
    \u0275\u0275text(4, "Full History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeHistoryModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275template(8, WorkOrderPreviewComponent_div_0_div_8_Template, 10, 9, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "button", 18);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeHistoryModal());
    });
    \u0275\u0275text(11, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.fullHistory);
  }
}
function WorkOrderPreviewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 25);
    \u0275\u0275element(3, "circle", 26)(4, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6, "Loading work order...");
    \u0275\u0275elementEnd()()();
  }
}
function WorkOrderPreviewComponent_div_3_app_edit_work_order_modal_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-work-order-modal", 101);
    \u0275\u0275listener("modalClosed", function WorkOrderPreviewComponent_div_3_app_edit_work_order_modal_27_Template_app_edit_work_order_modal_modalClosed_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    })("workOrderUpdated", function WorkOrderPreviewComponent_div_3_app_edit_work_order_modal_27_Template_app_edit_work_order_modal_workOrderUpdated_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadWorkOrder(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isOpen", ctx_r1.showEditModal)("workOrder", ctx_r1.workOrder);
  }
}
function WorkOrderPreviewComponent_div_3_app_add_work_order_parts_modal_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-add-work-order-parts-modal", 102);
    \u0275\u0275listener("closed", function WorkOrderPreviewComponent_div_3_app_add_work_order_parts_modal_28_Template_app_add_work_order_parts_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeAddPartsModal());
    })("saved", function WorkOrderPreviewComponent_div_3_app_add_work_order_parts_modal_28_Template_app_add_work_order_parts_modal_saved_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPartsAdded());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isOpen", ctx_r1.showAddPartsModal)("workOrderId", ctx_r1.workOrder == null ? null : ctx_r1.workOrder.id);
  }
}
function WorkOrderPreviewComponent_div_3_app_view_costs_modal_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-view-costs-modal", 103);
    \u0275\u0275listener("closed", function WorkOrderPreviewComponent_div_3_app_view_costs_modal_29_Template_app_view_costs_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showViewCostsModal = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isOpen", ctx_r1.showViewCostsModal)("workOrderId", ctx_r1.workOrder == null ? null : ctx_r1.workOrder.id);
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_63_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", a_r8.first_name, " ", a_r8.last_name, " ");
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_63_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const a_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275textInterpolate1(" ", a_r8 ? "User ID: " + a_r8 : "Unassigned", " ");
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WorkOrderPreviewComponent_div_3_ng_container_63_ng_container_1_Template, 2, 2, "ng-container", 92)(2, WorkOrderPreviewComponent_div_3_ng_container_63_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r8 = ctx.ngIf;
    const assignedId_r9 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r8 && (a_r8.first_name || a_r8.last_name))("ngIfElse", assignedId_r9);
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_68_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const asst_r10 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asst_r10.name || asst_r10.asset_id, " ");
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_68_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const asst_r10 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275textInterpolate1(" ", asst_r10 ? "Asset ID: " + asst_r10 : "No Asset", " ");
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WorkOrderPreviewComponent_div_3_ng_container_68_ng_container_1_Template, 2, 1, "ng-container", 92)(2, WorkOrderPreviewComponent_div_3_ng_container_68_ng_template_2_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const asst_r10 = ctx.ngIf;
    const assetId_r11 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", asst_r10 && (asst_r10.name || asst_r10.asset_id))("ngIfElse", assetId_r11);
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_73_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const loc_r12 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", loc_r12.name || loc_r12.full_path, " ");
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_73_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const loc_r12 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275textInterpolate1(" ", loc_r12 ? "Location ID: " + loc_r12 : "No Location", " ");
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WorkOrderPreviewComponent_div_3_ng_container_73_ng_container_1_Template, 2, 1, "ng-container", 92)(2, WorkOrderPreviewComponent_div_3_ng_container_73_ng_template_2_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const loc_r12 = ctx.ngIf;
    const locationId_r13 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", loc_r12 && (loc_r12.name || loc_r12.full_path))("ngIfElse", locationId_r13);
  }
}
function WorkOrderPreviewComponent_div_3_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "label");
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.notes);
  }
}
function WorkOrderPreviewComponent_div_3_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "label");
    \u0275\u0275text(2, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.tags);
  }
}
function WorkOrderPreviewComponent_div_3_span_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function WorkOrderPreviewComponent_div_3_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayedElapsed, " ");
  }
}
function WorkOrderPreviewComponent_div_3_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Started ", \u0275\u0275pipeBind2(2, 1, ctx_r1.timeLogs[0].start_time, "MMM d, hh:mm a"), " ");
  }
}
function WorkOrderPreviewComponent_div_3__svg_path_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 47);
  }
}
function WorkOrderPreviewComponent_div_3__svg_path_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 107);
  }
}
function WorkOrderPreviewComponent_div_3__svg_path_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 108);
  }
}
function WorkOrderPreviewComponent_div_3_div_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1, "No time logs yet.");
    \u0275\u0275elementEnd();
  }
}
function WorkOrderPreviewComponent_div_3_div_130_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const log_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022 ", \u0275\u0275pipeBind2(2, 1, log_r14.duration_minutes || 0, "1.0-0"), " min ");
  }
}
function WorkOrderPreviewComponent_div_3_div_130_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\u2022 running");
    \u0275\u0275elementContainerEnd();
  }
}
function WorkOrderPreviewComponent_div_3_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 33);
    \u0275\u0275element(8, "path", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275template(12, WorkOrderPreviewComponent_div_3_div_130_ng_container_12_Template, 3, 4, "ng-container", 22)(13, WorkOrderPreviewComponent_div_3_div_130_ng_container_13_Template, 2, 0, "ng-container", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r14 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(log_r14.user ? log_r14.user.first_name + " " + log_r14.user.last_name : "Unknown");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 4, log_r14.start_time, "MMM d, h:mm a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", log_r14.end_time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !log_r14.end_time);
  }
}
function WorkOrderPreviewComponent_div_3_option_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", s_r15.slug)("selected", ctx_r1.getStatusLabel(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status) === s_r15.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r15.name, " ");
  }
}
function WorkOrderPreviewComponent_div_3_div_157_div_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r16.user ? (comment_r16 == null ? null : comment_r16.user == null ? null : comment_r16.user.first_name) + " " + (comment_r16 == null ? null : comment_r16.user == null ? null : comment_r16.user.last_name) : "Unknown User");
  }
}
function WorkOrderPreviewComponent_div_3_div_157_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, WorkOrderPreviewComponent_div_3_div_157_div_1_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 119);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 120);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 33);
    \u0275\u0275element(9, "path", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comment_r16 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275conditional(comment_r16.user ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r16.comment);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 3, comment_r16.created_at, "MMM d, y, h:mm a"));
  }
}
function WorkOrderPreviewComponent_div_3_div_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275template(1, WorkOrderPreviewComponent_div_3_div_157_div_1_Template, 13, 6, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.workOrder.comments);
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_162_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("by ", evt_r18.user.first_name, " ", evt_r18.user.last_name, "");
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_162_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u201C", evt_r18.details.comment, "\u201D");
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_162_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "div", 21)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, WorkOrderPreviewComponent_div_3_ng_container_162_div_1_p_8_Template, 2, 2, "p", 22)(9, WorkOrderPreviewComponent_div_3_ng_container_162_div_1_p_9_Template, 2, 1, "p", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evt_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("dot-muted", evt_r18.type !== "created");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(evt_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, evt_r18.timestamp, "MMMM d, y 'at' h:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", evt_r18.user);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r18.type === "comment" && (evt_r18.details == null ? null : evt_r18.details.comment));
  }
}
function WorkOrderPreviewComponent_div_3_ng_container_162_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WorkOrderPreviewComponent_div_3_ng_container_162_div_1_Template, 10, 9, "div", 16);
    \u0275\u0275elementStart(2, "button", 121);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_ng_container_162_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openHistoryModal());
    });
    \u0275\u0275text(3, "View all");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.historyPreview);
  }
}
function WorkOrderPreviewComponent_div_3_ng_template_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "div", 21)(3, "label");
    \u0275\u0275text(4, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275element(11, "div", 122);
    \u0275\u0275elementStart(12, "div", 21)(13, "label");
    \u0275\u0275text(14, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, ctx_r1.workOrder == null ? null : ctx_r1.workOrder.created_at, "MMMM d, y 'at' h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("by ", ctx_r1.workOrder && ctx_r1.workOrder.created_by ? ctx_r1.workOrder.created_by.first_name + " " + ctx_r1.workOrder.created_by.last_name : "Unknown", "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 6, ctx_r1.workOrder.updated_at, "MMMM d, y 'at' h:mm a"));
  }
}
function WorkOrderPreviewComponent_div_3_span_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.assignments.length, ")");
  }
}
function WorkOrderPreviewComponent_div_3_div_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1, "No assignments yet.");
    \u0275\u0275elementEnd();
  }
}
function WorkOrderPreviewComponent_div_3_div_173_div_1_ng_container_12_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r22 = ctx.$implicit;
    \u0275\u0275property("value", opt_r22.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r22.label);
  }
}
function WorkOrderPreviewComponent_div_3_div_173_div_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 133);
    \u0275\u0275listener("change", function WorkOrderPreviewComponent_div_3_div_173_div_1_ng_container_12_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const a_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAssignmentStatusChange(a_r21, $event));
    });
    \u0275\u0275template(2, WorkOrderPreviewComponent_div_3_div_173_div_1_ng_container_12_option_2_Template, 2, 2, "option", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.assignmentStatuses.get(a_r21.id) || "assigned");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.assignmentStatusOptions);
  }
}
function WorkOrderPreviewComponent_div_3_div_173_div_1_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getAssignmentStatusClass(ctx_r1.assignmentStatuses.get(a_r21.id)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getAssignmentStatusLabel(ctx_r1.assignmentStatuses.get(a_r21.id)));
  }
}
function WorkOrderPreviewComponent_div_3_div_173_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 126)(2, "div", 127);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128)(5, "div", 129);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 130);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 131);
    \u0275\u0275template(12, WorkOrderPreviewComponent_div_3_div_173_div_1_ng_container_12_Template, 3, 2, "ng-container", 92)(13, WorkOrderPreviewComponent_div_3_div_173_div_1_ng_template_13_Template, 2, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(15, "button", 132);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_div_173_div_1_Template_button_click_15_listener() {
      const a_r21 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeAssignment(a_r21));
    });
    \u0275\u0275text(16, "\u{1F5D1}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r21 = ctx.$implicit;
    const statusBadge_r23 = \u0275\u0275reference(14);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (a_r21.user.first_name || "?")[0], "", (a_r21.user.last_name || "")[0] || "", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", a_r21.user.first_name, " ", a_r21.user.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Assigned ", \u0275\u0275pipeBind2(9, 8, a_r21.created_at, "shortTime"), " \u2022 ", \u0275\u0275pipeBind2(10, 11, a_r21.created_at, "MMM d"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.assignmentStatuses.get(a_r21.id) || "assigned") === "assigned")("ngIfElse", statusBadge_r23);
  }
}
function WorkOrderPreviewComponent_div_3_div_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275template(1, WorkOrderPreviewComponent_div_3_div_173_div_1_Template, 17, 14, "div", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.assignments);
  }
}
function WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const m_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Assigned ", \u0275\u0275pipeBind2(2, 2, (tmp_7_0 = ctx_r1.getAssignmentForUser(m_r26.id)) == null ? null : tmp_7_0.created_at, "shortTime"), " \u2022 ", \u0275\u0275pipeBind2(3, 5, (tmp_7_0 = ctx_r1.getAssignmentForUser(m_r26.id)) == null ? null : tmp_7_0.created_at, "MMM d"), " ");
  }
}
function WorkOrderPreviewComponent_div_3_div_174_div_9_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const m_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(m_r26.email);
  }
}
function WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_12_ng_container_1_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r28 = ctx.$implicit;
    \u0275\u0275property("value", opt_r28.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r28.label);
  }
}
function WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 133);
    \u0275\u0275listener("change", function WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_12_ng_container_1_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      const m_r26 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAssignmentStatusChange(ctx_r1.getAssignmentForUser(m_r26.id), $event));
    });
    \u0275\u0275template(2, WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_12_ng_container_1_option_2_Template, 2, 2, "option", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const m_r26 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.assignmentStatuses.get(((tmp_9_0 = ctx_r1.getAssignmentForUser(m_r26.id)) == null ? null : tmp_9_0.id) || 0) || "assigned");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.assignmentStatusOptions);
  }
}
function WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const m_r26 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getAssignmentStatusClass(ctx_r1.assignmentStatuses.get(((tmp_9_0 = ctx_r1.getAssignmentForUser(m_r26.id)) == null ? null : tmp_9_0.id) || 0)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getAssignmentStatusLabel(ctx_r1.assignmentStatuses.get(((tmp_10_0 = ctx_r1.getAssignmentForUser(m_r26.id)) == null ? null : tmp_10_0.id) || 0)));
  }
}
function WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_12_ng_container_1_Template, 3, 2, "ng-container", 92)(2, WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_12_ng_template_2_Template, 2, 3, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const modalBadge_r29 = \u0275\u0275reference(3);
    const m_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.assignmentStatuses.get(((tmp_8_0 = ctx_r1.getAssignmentForUser(m_r26.id)) == null ? null : tmp_8_0.id) || 0) || "assigned") === "assigned")("ngIfElse", modalBadge_r29);
  }
}
function WorkOrderPreviewComponent_div_3_div_174_div_9_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 132);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_div_174_div_9_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const m_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeAssignmentByUser(m_r26.id));
    });
    \u0275\u0275text(1, "\u{1F5D1}");
    \u0275\u0275elementEnd();
  }
}
function WorkOrderPreviewComponent_div_3_div_174_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140)(1, "div", 126)(2, "div", 127);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128)(5, "div", 129);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 130);
    \u0275\u0275template(8, WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_8_Template, 4, 8, "ng-container", 92)(9, WorkOrderPreviewComponent_div_3_div_174_div_9_ng_template_9_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 131);
    \u0275\u0275template(12, WorkOrderPreviewComponent_div_3_div_174_div_9_ng_container_12_Template, 4, 2, "ng-container", 22)(13, WorkOrderPreviewComponent_div_3_div_174_div_9_button_13_Template, 2, 0, "button", 141);
    \u0275\u0275elementStart(14, "input", 142);
    \u0275\u0275listener("change", function WorkOrderPreviewComponent_div_3_div_174_div_9_Template_input_change_14_listener($event) {
      const m_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleUserSelection(m_r26.id, $event.target.checked));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r26 = ctx.$implicit;
    const emailOnly_r31 = \u0275\u0275reference(10);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (m_r26.first_name || "?")[0], "", (m_r26.last_name || "")[0] || "", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", m_r26.first_name, " ", m_r26.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isUserAlreadyAssigned(m_r26.id))("ngIfElse", emailOnly_r31);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isUserAlreadyAssigned(m_r26.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isUserAlreadyAssigned(m_r26.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedUserIds.has(m_r26.id));
  }
}
function WorkOrderPreviewComponent_div_3_div_174_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_div_174_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeAssignmentsModal());
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_div_174_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 136);
    \u0275\u0275element(4, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Add New Assignment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 123);
    \u0275\u0275template(9, WorkOrderPreviewComponent_div_3_div_174_div_9_Template, 15, 9, "div", 137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 17)(11, "button", 138);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_div_174_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeAssignmentsModal());
    });
    \u0275\u0275text(12, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 139);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_div_174_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveAssignments());
    });
    \u0275\u0275text(14, "Assign");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.teamMembers);
  }
}
function WorkOrderPreviewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "a", 32);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 33);
    \u0275\u0275element(5, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Back to Work Orders ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 35)(8, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 37);
    \u0275\u0275element(10, "path", 38)(11, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 40)(13, "h1");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 41);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 42)(18, "span", 43);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 44);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 45)(23, "button", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 33);
    \u0275\u0275element(25, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(27, WorkOrderPreviewComponent_div_3_app_edit_work_order_modal_27_Template, 1, 2, "app-edit-work-order-modal", 48)(28, WorkOrderPreviewComponent_div_3_app_add_work_order_parts_modal_28_Template, 1, 2, "app-add-work-order-parts-modal", 49)(29, WorkOrderPreviewComponent_div_3_app_view_costs_modal_29_Template, 1, 2, "app-view-costs-modal", 50);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 51)(31, "div", 52)(32, "div", 53)(33, "h3", 54);
    \u0275\u0275text(34, "Work Order Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 55)(36, "div", 56)(37, "label");
    \u0275\u0275text(38, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 56)(42, "label");
    \u0275\u0275text(43, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 56)(47, "label");
    \u0275\u0275text(48, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 56)(52, "label");
    \u0275\u0275text(53, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 56)(57, "label");
    \u0275\u0275text(58, "Assigned To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(60, "svg", 33);
    \u0275\u0275element(61, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275template(63, WorkOrderPreviewComponent_div_3_ng_container_63_Template, 4, 2, "ng-container", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 56)(65, "label");
    \u0275\u0275text(66, "Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "p");
    \u0275\u0275template(68, WorkOrderPreviewComponent_div_3_ng_container_68_Template, 4, 2, "ng-container", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 56)(70, "label");
    \u0275\u0275text(71, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p");
    \u0275\u0275template(73, WorkOrderPreviewComponent_div_3_ng_container_73_Template, 4, 2, "ng-container", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 56)(75, "label");
    \u0275\u0275text(76, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "p");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 56)(80, "label");
    \u0275\u0275text(81, "Estimated Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p");
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 56)(85, "label");
    \u0275\u0275text(86, "Actual Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(89, WorkOrderPreviewComponent_div_3_div_89_Template, 5, 1, "div", 59)(90, WorkOrderPreviewComponent_div_3_div_90_Template, 5, 1, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 53)(92, "h3", 54);
    \u0275\u0275text(93, "Time Tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p", 60);
    \u0275\u0275text(95, "Track time spent on this work order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 61)(97, "div", 62)(98, "div", 63);
    \u0275\u0275text(99, "Current Session");
    \u0275\u0275elementEnd();
    \u0275\u0275template(100, WorkOrderPreviewComponent_div_3_span_100_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(101, WorkOrderPreviewComponent_div_3_div_101_Template, 2, 1, "div", 65)(102, WorkOrderPreviewComponent_div_3_div_102_Template, 3, 4, "div", 66);
    \u0275\u0275elementStart(103, "div", 67)(104, "label");
    \u0275\u0275text(105, "Task Description (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function WorkOrderPreviewComponent_div_3_Template_input_ngModelChange_106_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentSession.description, $event) || (ctx_r1.currentSession.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 67)(108, "label");
    \u0275\u0275text(109, "Hourly Rate (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function WorkOrderPreviewComponent_div_3_Template_input_ngModelChange_110_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentSession.hourlyRate, $event) || (ctx_r1.currentSession.hourlyRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "button", 70);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_Template_button_click_111_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isTimerRunning ? ctx_r1.stopTimer() : ctx_r1.startTimer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(112, "svg", 33);
    \u0275\u0275template(113, WorkOrderPreviewComponent_div_3__svg_path_113_Template, 1, 0, "path", 71)(114, WorkOrderPreviewComponent_div_3__svg_path_114_Template, 1, 0, "path", 72)(115, WorkOrderPreviewComponent_div_3__svg_path_115_Template, 1, 0, "path", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(117, "div", 74)(118, "div", 75)(119, "span", 76);
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 77)(123, "span", 78);
    \u0275\u0275text(124);
    \u0275\u0275pipe(125, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(126, "div", 79)(127, "h4");
    \u0275\u0275text(128, "Time Log History");
    \u0275\u0275elementEnd();
    \u0275\u0275template(129, WorkOrderPreviewComponent_div_3_div_129_Template, 2, 0, "div", 80)(130, WorkOrderPreviewComponent_div_3_div_130_Template, 14, 7, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 53)(132, "h3", 54);
    \u0275\u0275text(133, "Status Update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "p", 60);
    \u0275\u0275text(135, "Update the work order status and add notes about the progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 82)(137, "label");
    \u0275\u0275text(138, "Current Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "div", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(140, "svg", 33);
    \u0275\u0275element(141, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(142);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(143, "div", 84)(144, "label");
    \u0275\u0275text(145, "Update Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "select", 85);
    \u0275\u0275listener("change", function WorkOrderPreviewComponent_div_3_Template_select_change_146_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusChange($event));
    });
    \u0275\u0275template(147, WorkOrderPreviewComponent_div_3_option_147_Template, 2, 3, "option", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(148, "div", 53)(149, "h3", 54);
    \u0275\u0275text(150, "Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "p", 60);
    \u0275\u0275text(152, "Activity log and comments for this work order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "form", 87);
    \u0275\u0275listener("ngSubmit", function WorkOrderPreviewComponent_div_3_Template_form_ngSubmit_153_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addComment());
    });
    \u0275\u0275element(154, "textarea", 88);
    \u0275\u0275elementStart(155, "button", 89);
    \u0275\u0275text(156, "Add Comment");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(157, WorkOrderPreviewComponent_div_3_div_157_Template, 2, 1, "div", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "div", 91)(159, "div", 53)(160, "h3", 54);
    \u0275\u0275text(161, "Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275template(162, WorkOrderPreviewComponent_div_3_ng_container_162_Template, 4, 1, "ng-container", 92)(163, WorkOrderPreviewComponent_div_3_ng_template_163_Template, 18, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "div", 53)(166, "div", 93)(167, "h3", 54);
    \u0275\u0275text(168, "Assignments");
    \u0275\u0275template(169, WorkOrderPreviewComponent_div_3_span_169_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "button", 94);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_Template_button_click_170_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAssignmentsModal());
    });
    \u0275\u0275text(171, "+ Add Assignment");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(172, WorkOrderPreviewComponent_div_3_div_172_Template, 2, 0, "div", 80)(173, WorkOrderPreviewComponent_div_3_div_173_Template, 2, 1, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(174, WorkOrderPreviewComponent_div_3_div_174_Template, 15, 1, "div", 7);
    \u0275\u0275elementStart(175, "div", 53)(176, "h3", 54);
    \u0275\u0275text(177, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "div", 96)(179, "button", 97);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_Template_button_click_179_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(180, "svg", 33);
    \u0275\u0275element(181, "path", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, " Edit Work Order ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(183, "button", 97);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_Template_button_click_183_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showViewCostsModal = true);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(184, "svg", 33);
    \u0275\u0275element(185, "path", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275text(186, " View Costs ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(187, "button", 97);
    \u0275\u0275listener("click", function WorkOrderPreviewComponent_div_3_Template_button_click_187_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddPartsModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(188, "svg", 33);
    \u0275\u0275element(189, "path", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275text(190, " Add Parts ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    let tmp_20_0;
    const basicTimeline_r32 = \u0275\u0275reference(164);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Work Order #", ctx_r1.workOrder == null ? null : ctx_r1.workOrder.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityLabel(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.priority), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.workOrder == null ? null : ctx_r1.workOrder.category == null ? null : ctx_r1.workOrder.category.name) || "Uncategorized", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showEditModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAddPartsModal && ctx_r1.workOrder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.workOrder);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx_r1.workOrder == null ? null : ctx_r1.workOrder.description) || "No description provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getPriorityLabel(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.priority));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.workOrder == null ? null : ctx_r1.workOrder.category == null ? null : ctx_r1.workOrder.category.name) || "Uncategorized");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.workOrder == null ? null : ctx_r1.workOrder.assigned_to);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.workOrder == null ? null : ctx_r1.workOrder.asset);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.workOrder == null ? null : ctx_r1.workOrder.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.workOrder == null ? null : ctx_r1.workOrder.company == null ? null : ctx_r1.workOrder.company.name) || "Company ID: " + (ctx_r1.workOrder == null ? null : ctx_r1.workOrder.company_id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_19_0 = ctx_r1.workOrder == null ? null : ctx_r1.workOrder.estimated_hours) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_20_0 = ctx_r1.workOrder == null ? null : ctx_r1.workOrder.actual_hours) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.workOrder == null ? null : ctx_r1.workOrder.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.workOrder == null ? null : ctx_r1.workOrder.tags);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.isTimerRunning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTimerRunning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTimerRunning && ctx_r1.hasActiveSession && (ctx_r1.timeLogs[0] == null ? null : ctx_r1.timeLogs[0].start_time));
    \u0275\u0275advance(4);
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
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(121, 50, ctx_r1.totalMinutes / 60, "1.2-2"), " hrs Total Time");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.getCurrencySymbol(), "", \u0275\u0275pipeBind2(125, 53, ctx_r1.totalCost, "1.2-2"), " Total Cost");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.timeLogs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.timeLogs);
    \u0275\u0275advance(9);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.workOrder == null ? null : ctx_r1.workOrder.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.statusOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.commentForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.workOrder && ctx_r1.workOrder.comments && ctx_r1.workOrder.comments.length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.historyPreview && ctx_r1.historyPreview.length > 0)("ngIfElse", basicTimeline_r32);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.assignments == null ? null : ctx_r1.assignments.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.assignments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.assignments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAssignmentsModal);
  }
}
var WorkOrderPreviewComponent = class _WorkOrderPreviewComponent {
  route;
  router;
  workOrderService;
  metaService;
  fb;
  teamService;
  currencyService;
  workOrder = null;
  isLoading = true;
  isTimerRunning = false;
  currentSession = {
    description: "",
    hourlyRate: 0
  };
  timeLogs = [];
  totalMinutes = 0;
  totalCost = 0;
  hasActiveSession = false;
  commentForm;
  subscription = new Subscription();
  statusOptions = [];
  historyPreview = [];
  showHistoryModal = false;
  fullHistory = [];
  displayedElapsed = "00:00:00";
  timerHandle = null;
  activeStartTime;
  // Assignments UI state
  showAssignmentsModal = false;
  showEditModal = false;
  showAddPartsModal = false;
  showViewCostsModal = false;
  assignments = [];
  teamMembers = [];
  selectedUserIds = /* @__PURE__ */ new Set();
  assignmentStatuses = /* @__PURE__ */ new Map();
  assignmentStatusOptions = [
    { value: "assigned", label: "Assigned" },
    { value: "accepted", label: "Accepted" },
    { value: "declined", label: "Declined" },
    { value: "completed", label: "Completed" }
  ];
  openAssignmentsModal() {
    this.showAssignmentsModal = true;
  }
  closeAssignmentsModal() {
    this.showAssignmentsModal = false;
  }
  // Edit modal controls
  openEditModal() {
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
  }
  onWorkOrderUpdated(updated) {
    this.workOrder = __spreadValues(__spreadValues({}, this.workOrder), updated);
    this.showEditModal = false;
  }
  openAddPartsModal() {
    this.showAddPartsModal = true;
  }
  closeAddPartsModal() {
    this.showAddPartsModal = false;
  }
  onPartsAdded() {
    this.closeAddPartsModal();
  }
  toggleUserSelection(userId, checked) {
    if (checked) {
      this.selectedUserIds.add(userId);
    } else {
      this.selectedUserIds.delete(userId);
    }
  }
  saveAssignments() {
    if (!this.workOrder)
      return;
    const ids = Array.from(this.selectedUserIds.values());
    this.workOrderService.setAssignments(this.workOrder.id, ids).subscribe({
      next: (items) => {
        this.assignments = items || [];
        this.closeAssignmentsModal();
      }
    });
  }
  removeAssignment(a) {
    if (!this.workOrder)
      return;
    this.workOrderService.deleteAssignment(this.workOrder.id, a.id).subscribe({
      next: () => {
        this.assignments = (this.assignments || []).filter((x) => x.id !== a.id);
        this.selectedUserIds.delete(a.user_id);
      }
    });
  }
  isUserAlreadyAssigned(userId) {
    return (this.assignments || []).some((a) => a.user_id === userId);
  }
  getAssignmentForUser(userId) {
    return (this.assignments || []).find((a) => a.user_id === userId);
  }
  removeAssignmentByUser(userId) {
    const a = this.getAssignmentForUser(userId);
    if (!a)
      return;
    this.removeAssignment(a);
  }
  onAssignmentStatusChange(a, event) {
    const target = event.target;
    if (!this.workOrder || !a || !target?.value)
      return;
    const newStatus = target.value;
    this.assignmentStatuses.set(a.id, newStatus);
    this.workOrderService.updateAssignmentStatus(this.workOrder.id, a.id, newStatus).subscribe({
      next: (updated) => {
        this.assignments = (this.assignments || []).map((x) => x.id === updated.id ? __spreadProps(__spreadValues({}, x), { status: updated.status }) : x);
        const shouldDisable = newStatus !== "assigned";
        if (shouldDisable) {
        }
      }
    });
  }
  getAssignmentStatusLabel(value) {
    const v = (value || "assigned").toLowerCase();
    const found = this.assignmentStatusOptions.find((o) => o.value === v);
    return found ? found.label : v;
  }
  getAssignmentStatusClass(value) {
    const v = (value || "assigned").toLowerCase();
    switch (v) {
      case "accepted":
        return "pill-status accepted";
      case "declined":
        return "pill-status declined";
      case "completed":
        return "pill-status completed";
      default:
        return "pill-status assigned";
    }
  }
  constructor(route, router, workOrderService, metaService, fb, teamService, currencyService) {
    this.route = route;
    this.router = router;
    this.workOrderService = workOrderService;
    this.metaService = metaService;
    this.fb = fb;
    this.teamService = teamService;
    this.currencyService = currencyService;
    this.commentForm = this.fb.group({
      comment: ["", Validators.required]
    });
  }
  ngOnInit() {
    const workOrderId = this.route.snapshot.paramMap.get("id");
    if (workOrderId) {
      this.loadWorkOrder(workOrderId);
    }
    this.metaService.getStatus().subscribe({
      next: (statuses) => {
        this.statusOptions = statuses || [];
      },
      error: () => {
        this.statusOptions = [];
      }
    });
  }
  getCurrencySymbol() {
    return this.currencyService.getSymbol();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.stopCountdown();
  }
  loadWorkOrder(id) {
    this.isLoading = true;
    this.subscription.add(this.workOrderService.getWorkOrderById(id).subscribe({
      next: (workOrder) => {
        this.workOrder = workOrder;
        this.workOrderService.getAssignments(workOrder.id).subscribe({
          next: (items) => {
            this.assignments = items || [];
            this.selectedUserIds = new Set((this.assignments || []).map((a) => a.user_id));
            (this.assignments || []).forEach((a) => {
              const status = a.status || "assigned";
              this.assignmentStatuses.set(a.id, status);
            });
          }
        });
        this.teamService.getTeamMembersFlat(1e3).subscribe({
          next: (items) => {
            this.teamMembers = items || [];
          },
          error: () => {
            this.teamMembers = [];
          }
        });
        this.workOrderService.getComments(workOrder.id).subscribe({
          next: (comments) => {
            this.workOrder.comments = comments;
          }
        });
        this.workOrderService.getWorkOrderHistory(workOrder.id).subscribe({
          next: (events) => {
            this.fullHistory = events || [];
            this.historyPreview = (events || []).slice(0, 3);
          }
        });
        this.workOrderService.getTimeLogs(workOrder.id).subscribe({
          next: (data) => {
            this.timeLogs = data.logs || [];
            this.totalMinutes = data.totals?.total_minutes || 0;
            this.totalCost = data.totals?.total_cost || 0;
            const active = this.timeLogs.find((l) => !l.end_time);
            this.hasActiveSession = !!active;
            if (active && active.start_time) {
              this.isTimerRunning = true;
              this.startCountdown(new Date(active.start_time));
            } else {
              this.isTimerRunning = false;
              this.stopCountdown();
            }
          }
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading work order:", error);
        this.isLoading = false;
      }
    }));
  }
  openHistoryModal() {
    this.showHistoryModal = true;
  }
  closeHistoryModal() {
    this.showHistoryModal = false;
  }
  goBack() {
    this.router.navigate(["/work-orders"]);
  }
  startTimer() {
    this.isTimerRunning = true;
    if (!this.workOrder)
      return;
    this.workOrderService.startTimer(this.workOrder.id, {
      description: this.currentSession.description || void 0,
      hourly_rate: this.currentSession.hourlyRate || void 0
    }).subscribe({
      next: () => {
        const now = /* @__PURE__ */ new Date();
        this.startCountdown(now);
        this.workOrderService.getTimeLogs(this.workOrder.id).subscribe((data) => {
          this.timeLogs = data.logs || [];
          this.totalMinutes = data.totals?.total_minutes || 0;
          this.totalCost = data.totals?.total_cost || 0;
          this.hasActiveSession = this.timeLogs.some((l) => !l.end_time);
        });
      }
    });
  }
  stopTimer() {
    this.isTimerRunning = false;
    if (!this.workOrder)
      return;
    this.workOrderService.stopTimer(this.workOrder.id).subscribe({
      next: () => {
        this.stopCountdown();
        this.workOrderService.getTimeLogs(this.workOrder.id).subscribe((data) => {
          this.timeLogs = data.logs || [];
          this.totalMinutes = data.totals?.total_minutes || 0;
          this.totalCost = data.totals?.total_cost || 0;
          this.hasActiveSession = this.timeLogs.some((l) => !l.end_time);
        });
      }
    });
  }
  addComment() {
    if (this.commentForm.valid && this.workOrder) {
      const text = this.commentForm.get("comment")?.value;
      this.workOrderService.addComment(this.workOrder.id, text).subscribe({
        next: (created) => {
          if (!this.workOrder.comments)
            this.workOrder.comments = [];
          this.workOrder.comments.unshift(created);
          this.commentForm.reset();
        }
      });
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
      const slug = target.value;
      if (!this.workOrder)
        return;
      this.metaService.getStatus().subscribe({
        next: (statuses) => {
          const status = statuses.find((s) => s.slug === slug || s.slug === slug.replace("_", "-"));
          if (!status)
            return;
          this.workOrderService.updateWorkOrderStatus(this.workOrder.id, status.id).subscribe({
            next: (updated) => {
              this.workOrder = __spreadProps(__spreadValues({}, this.workOrder), { status: updated.status });
            }
          });
        }
      });
    }
  }
  getStatusSlug(status) {
    if (!status)
      return "open";
    if (typeof status === "string")
      return status;
    if (typeof status === "object" && status !== null && "slug" in status) {
      return status.slug;
    }
    return String(status);
  }
  getStatusClass(status) {
    const slug = this.getStatusSlug(status);
    const statusMap = {
      "open": "status-open",
      "in-progress": "status-in-progress",
      "in_progress": "status-in-progress",
      "completed": "status-completed",
      "cancelled": "status-cancelled"
    };
    return statusMap[slug] || "status-open";
  }
  getStatusLabel(status) {
    const slug = this.getStatusSlug(status);
    const statusMap = {
      "open": "Open",
      "in-progress": "In Progress",
      "in_progress": "In Progress",
      "completed": "Completed",
      "cancelled": "Cancelled"
    };
    return statusMap[slug] || slug;
  }
  getPrioritySlug(priority) {
    if (!priority)
      return "medium";
    if (typeof priority === "string")
      return priority;
    if (typeof priority === "object" && priority !== null && "slug" in priority) {
      return priority.slug;
    }
    return String(priority);
  }
  getPriorityLabel(priority) {
    const slug = this.getPrioritySlug(priority);
    const map = {
      "low": "Low",
      "medium": "Medium",
      "high": "High",
      "critical": "Critical"
    };
    return map[slug] || slug;
  }
  startCountdown(start) {
    this.activeStartTime = start;
    this.updateDisplayedElapsed();
    this.stopCountdown();
    this.timerHandle = setInterval(() => this.updateDisplayedElapsed(), 1e3);
  }
  stopCountdown() {
    if (this.timerHandle) {
      clearInterval(this.timerHandle);
      this.timerHandle = null;
    }
  }
  updateDisplayedElapsed() {
    if (!this.activeStartTime) {
      this.displayedElapsed = "00:00:00";
      return;
    }
    const now = (/* @__PURE__ */ new Date()).getTime();
    const start = this.activeStartTime.getTime();
    const diffSec = Math.max(0, Math.floor((now - start) / 1e3));
    const hours = Math.floor(diffSec / 3600);
    const minutes = Math.floor(diffSec % 3600 / 60);
    const seconds = diffSec % 60;
    const pad = (n) => n.toString().padStart(2, "0");
    this.displayedElapsed = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  static \u0275fac = function WorkOrderPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkOrderPreviewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WorkOrderService), \u0275\u0275directiveInject(MetaWorkOrdersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TeamService), \u0275\u0275directiveInject(CurrencyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkOrderPreviewComponent, selectors: [["app-work-order-preview"]], standalone: false, decls: 4, vars: 3, consts: [["basicTimeline", ""], ["assignedId", ""], ["assetId", ""], ["locationId", ""], ["statusBadge", ""], ["emailOnly", ""], ["modalBadge", ""], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "work-order-preview-container"], ["class", "loading-state", 4, "ngIf"], ["class", "work-order-content", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close", 3, "click"], [1, "modal-body"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "close-btn", 3, "click"], [1, "timeline-item"], [1, "timeline-dot"], [1, "timeline-content"], [4, "ngIf"], [1, "loading-state"], [1, "flex", "items-center", "justify-center", "py-8"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "ml-2", "text-gray-600"], [1, "work-order-content"], [1, "header-section"], [1, "back-link"], [1, "back-button", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "title-section"], [1, "title-content"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "wrench-icon", "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "title-text"], [1, "work-order-id"], [1, "chips", 2, "margin-top", "4px", "display", "flex", "gap", "8px", "flex-wrap", "wrap"], [1, "chip", 2, "background", "#eef2ff", "color", "#3730a3", "padding", "2px 8px", "border-radius", "9999px", "font-size", "12px"], [1, "chip", 2, "background", "#ecfeff", "color", "#155e75", "padding", "2px 8px", "border-radius", "9999px", "font-size", "12px"], [1, "action-buttons"], [1, "status-button"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [3, "isOpen", "workOrder", "modalClosed", "workOrderUpdated", 4, "ngIf"], [3, "isOpen", "workOrderId", "closed", "saved", 4, "ngIf"], [3, "isOpen", "workOrderId", "closed", 4, "ngIf"], [1, "content-grid"], [1, "left-column"], [1, "info-card"], [1, "card-title"], [1, "row"], [1, "detail-item", "col-6"], [1, "assignee-info"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["class", "detail-item col-6", 4, "ngIf"], [1, "card-subtitle"], [1, "current-session"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-sm", "font-medium"], ["class", "px-2 py-0.5 text-xs rounded-full", "style", "background:#dbeafe;color:#1e40af;", 4, "ngIf"], ["class", "text-center mb-3", "style", "font-size:28px;letter-spacing:2px;color:#2563eb;", 4, "ngIf"], ["class", "text-center text-xs text-gray-500 mb-3", 4, "ngIf"], [1, "form-group"], ["type", "text", "placeholder", "What are you working on?", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "0", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "timer-button", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z", 4, "ngIf"], [1, "time-summary"], [1, "total-time"], [1, "time-label"], [1, "total-cost"], [1, "cost-label"], [1, "time-log-history"], ["class", "text-sm text-gray-500", 4, "ngIf"], ["class", "time-log-entry", 4, "ngFor", "ngForOf"], [1, "status-section"], [1, "current-status"], [1, "status-update"], [1, "form-select", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "comment-form", 3, "ngSubmit", "formGroup"], ["formControlName", "comment", "placeholder", "Write a comment about the work order progress...", 1, "comment-textarea"], ["type", "submit", 1, "submit-comment-button"], ["class", "comments-list", 4, "ngIf"], [1, "right-column"], [4, "ngIf", "ngIfElse"], [1, "assignments-header"], [1, "assign-add-btn", 3, "click"], ["class", "assignment-list", 4, "ngIf"], [1, "quick-actions"], [1, "action-button", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [3, "modalClosed", "workOrderUpdated", "isOpen", "workOrder"], [3, "closed", "saved", "isOpen", "workOrderId"], [3, "closed", "isOpen", "workOrderId"], [1, "px-2", "py-0.5", "text-xs", "rounded-full", 2, "background", "#dbeafe", "color", "#1e40af"], [1, "text-center", "mb-3", 2, "font-size", "28px", "letter-spacing", "2px", "color", "#2563eb"], [1, "text-center", "text-xs", "text-gray-500", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"], [1, "text-sm", "text-gray-500"], [1, "time-log-entry"], [1, "log-info"], [1, "log-time"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [3, "value", "selected"], [1, "comments-list"], ["class", "comment-entry", 4, "ngFor", "ngForOf"], [1, "comment-entry"], [1, "comment-info"], [1, "comment-text"], [1, "comment-time"], [1, "view-all-button", 3, "click"], [1, "timeline-dot", "dot-muted"], [1, "assignment-list"], ["class", "assignment-row", 4, "ngFor", "ngForOf"], [1, "assignment-row"], [1, "assignment-left"], [1, "avatar-circle"], [1, "assignment-meta"], [1, "assignment-name"], [1, "assignment-sub"], [1, "assignment-actions"], ["title", "Remove", 1, "icon-btn", "danger", 3, "click"], [1, "assignment-select", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "header-icon", "w-5", "h-5"], ["class", "assignment-row selectable", 4, "ngFor", "ngForOf"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "assignment-row", "selectable"], ["class", "icon-btn danger", "title", "Remove", 3, "click", 4, "ngIf"], ["type", "checkbox", 3, "change", "checked"]], template: function WorkOrderPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, WorkOrderPreviewComponent_div_0_Template, 12, 1, "div", 7);
      \u0275\u0275elementStart(1, "div", 8);
      \u0275\u0275template(2, WorkOrderPreviewComponent_div_2_Template, 7, 0, "div", 9)(3, WorkOrderPreviewComponent_div_3_Template, 191, 56, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showHistoryModal);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.workOrder);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgModel, EditWorkOrderModalComponent, AddWorkOrderPartsModalComponent, ViewCostsModalComponent, DecimalPipe, DatePipe], styles: ['\n\n.work-order-preview-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 100%;\n  margin: 0;\n  position: relative;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  padding: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .view-all-button[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background-color: #f3f4f6;\n  border: 1px solid #d1d5db;\n  color: #374151;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 50;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  width: min(720px, 95vw);\n  max-height: 80vh;\n  background: #fff;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #eef2f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  overflow: auto;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  border-top: 1px solid #eef2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n  color: #374151;\n  border-radius: 0.375rem;\n  padding: 0.25rem 0.5rem;\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .wrench-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  flex-shrink: 0;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]   .work-order-id[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button.status-open[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button.status-in-progress[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button.status-completed[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .status-button.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.25rem;\n  width: 100%;\n  max-width: 100%;\n}\n@media (max-width: 1024px) {\n  .work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1rem;\n  align-self: start;\n  height: fit-content;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #eef2f7;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .assignee-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .assignee-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item.col-6[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  box-sizing: border-box;\n}\n@media (max-width: 768px) {\n  .work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .detail-item.col-6[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button.start-button[_ngcontent-%COMP%] {\n  background-color: #10b981;\n  color: white;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button.start-button[_ngcontent-%COMP%]:hover {\n  background-color: #059669;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button.stop-button[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .current-session[_ngcontent-%COMP%]   .timer-button.stop-button[_ngcontent-%COMP%]:hover {\n  background-color: #dc2626;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-time[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-cost[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-time[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-time[_ngcontent-%COMP%]   .cost-label[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-cost[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-summary[_ngcontent-%COMP%]   .total-cost[_ngcontent-%COMP%]   .cost-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%]   .log-info[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%]   .log-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%]   .log-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .time-log-history[_ngcontent-%COMP%]   .time-log-entry[_ngcontent-%COMP%]   .log-time[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status.status-open[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status.status-open[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status.status-in-progress[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status.status-in-progress[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status.status-completed[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status.status-completed[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .current-status.status-cancelled[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .current-status.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  cursor: pointer;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .status-update[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .add-comment-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .add-comment-button[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .comment-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  resize: vertical;\n  min-height: 100px;\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .comment-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .submit-comment-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comment-form[_ngcontent-%COMP%]   .submit-comment-button[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .comments-list[_ngcontent-%COMP%]   .comment-entry[_ngcontent-%COMP%]   .comment-time[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  padding-left: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0.375rem;\n  top: 0.25rem;\n  bottom: -0.25rem;\n  width: 2px;\n  background: #e5e7eb;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n  width: 0.625rem;\n  height: 0.625rem;\n  background-color: #2563eb;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n  border: 2px solid #ffffff;\n  box-shadow: 0 0 0 2px #e5e7eb;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-dot.dot-muted[_ngcontent-%COMP%] {\n  background-color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignments-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assign-add-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  color: #374151;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  background: #fafafa;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-row.selectable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-row.selectable[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 9999px;\n  background: #e5e7eb;\n  color: #374151;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-actions[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  padding: 0.125rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  border: 1px solid #e5e7eb;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .pill.muted[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .pill-status[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .pill-status.assigned[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #374151;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .pill-status.accepted[_ngcontent-%COMP%] {\n  background: #60a5fa;\n  color: #fff;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .pill-status.declined[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #7f1d1d;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .pill-status.completed[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n  color: #065f46;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 0.375rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .icon-btn.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .icon-btn.danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .assignment-select[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background: #fff;\n  font-size: 0.875rem;\n  color: #111827;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .team-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.25rem 1fr auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #eef2f7;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .team-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .team-row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n}\n.work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .member-email[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #6b7280;\n}\n.work-order-content[_ngcontent-%COMP%]   .voice-input-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3rem;\n  height: 3rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.work-order-content[_ngcontent-%COMP%]   .voice-input-button[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n  transform: scale(1.05);\n}\n@media (max-width: 768px) {\n  .work-order-content[_ngcontent-%COMP%]   .voice-input-button[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .work-order-preview-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .work-order-preview-container[_ngcontent-%COMP%]   .work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .work-order-preview-container[_ngcontent-%COMP%]   .work-order-content[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .work-order-preview-container[_ngcontent-%COMP%]   .work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .work-order-preview-container[_ngcontent-%COMP%]   .work-order-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  width: min(720px, 95vw);\n  max-height: 80vh;\n  background: #ffffff;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  overflow: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.modal[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  padding-left: 1rem;\n}\n.modal[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0.375rem;\n  top: 0.25rem;\n  bottom: -0.25rem;\n  width: 2px;\n  background: #e5e7eb;\n}\n.modal[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n  width: 0.625rem;\n  height: 0.625rem;\n  background-color: #2563eb;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n  border: 2px solid #ffffff;\n  box-shadow: 0 0 0 2px #e5e7eb;\n}\n.modal[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-dot.dot-muted[_ngcontent-%COMP%] {\n  background-color: #9ca3af;\n}\n.modal[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n.modal[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.modal[_ngcontent-%COMP%]   .assignment-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.modal[_ngcontent-%COMP%]   .assignment-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  background: #fafafa;\n}\n.modal[_ngcontent-%COMP%]   .assignment-row.selectable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.modal[_ngcontent-%COMP%]   .assignment-row.selectable[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.modal[_ngcontent-%COMP%]   .assignment-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 9999px;\n  background: #e5e7eb;\n  color: #374151;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.modal[_ngcontent-%COMP%]   .assignment-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.modal[_ngcontent-%COMP%]   .assignment-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.modal[_ngcontent-%COMP%]   .assignment-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.modal[_ngcontent-%COMP%]   .assignment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modal[_ngcontent-%COMP%]   .assignment-actions[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.modal[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  padding: 0.125rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  border: 1px solid #e5e7eb;\n}\n.modal[_ngcontent-%COMP%]   .pill.muted[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 0.375rem;\n}\n.modal[_ngcontent-%COMP%]   .icon-btn.danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.modal[_ngcontent-%COMP%]   .icon-btn.danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n/*# sourceMappingURL=work-order-preview.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkOrderPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-work-order-preview", standalone: false, template: `<!-- History Modal as global sibling to avoid stacking context issues -->\r
<div class="modal-overlay" *ngIf="showHistoryModal" (click)="closeHistoryModal()">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3>Full History</h3>\r
      <button class="close" (click)="closeHistoryModal()">\xD7</button>\r
    </div>\r
    <div class="modal-body">\r
      <div *ngFor="let evt of fullHistory" class="timeline-item">\r
        <div class="timeline-dot" [class.dot-muted]="evt.type !== 'created'"></div>\r
        <div class="timeline-content">\r
          <label>{{ evt.title }}</label>\r
          <p>{{ evt.timestamp | date:'MMMM d, y \\'at\\' h:mm a' }}</p>\r
          <p *ngIf="evt.user">by {{ evt.user.first_name }} {{ evt.user.last_name }}</p>\r
          <p *ngIf="evt.type === 'comment' && evt.details?.comment">\u201C{{ evt.details.comment }}\u201D</p>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="close-btn" (click)="closeHistoryModal()">Close</button>\r
    </div>\r
  </div>\r
</div>\r
<div class="work-order-preview-container">\r
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
            <div class="chips" style="margin-top:4px; display:flex; gap:8px; flex-wrap:wrap;">\r
              <span class="chip" style="background:#eef2ff;color:#3730a3;padding:2px 8px;border-radius:9999px;font-size:12px;">\r
                {{ getPriorityLabel($any(workOrder?.priority)) }}\r
              </span>\r
              <span class="chip" style="background:#ecfeff;color:#155e75;padding:2px 8px;border-radius:9999px;font-size:12px;">\r
                {{ workOrder?.category?.name || 'Uncategorized' }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="action-buttons">\r
          <button class="status-button" [class]="getStatusClass($any(workOrder?.status))">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
            {{ getStatusLabel($any(workOrder?.status)) }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Edit Work Order Modal Mount -->\r
    <app-edit-work-order-modal\r
      *ngIf="showEditModal"\r
      [isOpen]="showEditModal"\r
      [workOrder]="$any(workOrder)"\r
      (modalClosed)="closeEditModal()"\r
      (workOrderUpdated)="loadWorkOrder(workOrder?.id)">\r
    </app-edit-work-order-modal>\r
\r
    <app-add-work-order-parts-modal\r
      *ngIf="showAddPartsModal && workOrder"\r
      [isOpen]="showAddPartsModal"\r
      [workOrderId]="$any(workOrder)?.id"\r
      (closed)="closeAddPartsModal()"\r
      (saved)="onPartsAdded()">\r
    </app-add-work-order-parts-modal>\r
\r
    <app-view-costs-modal\r
      *ngIf="workOrder"\r
      [isOpen]="showViewCostsModal"\r
      [workOrderId]="$any(workOrder)?.id"\r
      (closed)="showViewCostsModal=false">\r
    </app-view-costs-modal>\r
\r
    <!-- Main Content Grid -->\r
    <div class="content-grid">\r
      <!-- Left Column -->\r
      <div class="left-column">\r
        <!-- Work Order Details Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Work Order Details</h3>\r
          <div class="row">\r
          <div class="detail-item col-6">\r
            <label>Description</label>\r
            <p>{{ workOrder?.description || 'No description provided' }}</p>\r
          </div>\r
          <div class="detail-item col-6">\r
            <label>Status</label>\r
            <p>{{ getStatusLabel($any(workOrder?.status)) }}</p>\r
          </div>\r
          <div class="detail-item col-6">\r
            <label>Priority</label>\r
            <p>{{ getPriorityLabel($any(workOrder?.priority)) }}</p>\r
          </div>\r
          <div class="detail-item col-6">\r
            <label>Category</label>\r
            <p>{{ workOrder?.category?.name || 'Uncategorized' }}</p>\r
          </div>\r
          <div class="detail-item col-6">\r
            <label>Assigned To</label>\r
            <div class="assignee-info">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
              </svg>\r
              <span>\r
                <ng-container *ngIf="$any(workOrder)?.assigned_to as a">\r
                  <ng-container *ngIf="a && (a.first_name || a.last_name); else assignedId">\r
                    {{ a.first_name }} {{ a.last_name }}\r
                  </ng-container>\r
                  <ng-template #assignedId>\r
                    {{ a ? ('User ID: ' + a) : 'Unassigned' }}\r
                  </ng-template>\r
                </ng-container>\r
              </span>\r
            </div>\r
          </div>\r
          <div class="detail-item col-6">\r
            <label>Asset</label>\r
            <p>\r
              <ng-container *ngIf="$any(workOrder)?.asset as asst">\r
                <ng-container *ngIf="asst && (asst.name || asst.asset_id); else assetId">\r
                  {{ asst.name || asst.asset_id }}\r
                </ng-container>\r
                <ng-template #assetId>\r
                  {{ asst ? ('Asset ID: ' + asst) : 'No Asset' }}\r
                </ng-template>\r
              </ng-container>\r
            </p>\r
          </div>\r
          <div class="detail-item col-6">\r
            <label>Location</label>\r
            <p>\r
              <ng-container *ngIf="$any(workOrder)?.location as loc">\r
                <ng-container *ngIf="loc && (loc.name || loc.full_path); else locationId">\r
                  {{ loc.name || loc.full_path }}\r
                </ng-container>\r
                <ng-template #locationId>\r
                  {{ loc ? ('Location ID: ' + loc) : 'No Location' }}\r
                </ng-template>\r
              </ng-container>\r
            </p>\r
          </div>\r
          <div class="detail-item col-6">\r
            <label>Company</label>\r
            <p>{{ workOrder?.company?.name || ('Company ID: ' + workOrder?.company_id) }}</p>\r
          </div>\r
          <div class="detail-item col-6">\r
            <label>Estimated Hours</label>\r
            <p>{{ workOrder?.estimated_hours ?? 'N/A' }}</p>\r
          </div>\r
          <div class="detail-item col-6">\r
            <label>Actual Hours</label>\r
            <p>{{ workOrder?.actual_hours ?? 'N/A' }}</p>\r
          </div>\r
          <div class="detail-item col-6" *ngIf="workOrder?.notes">\r
            <label>Notes</label>\r
            <p>{{ workOrder?.notes }}</p>\r
          </div>\r
          <div class="detail-item col-6" *ngIf="workOrder?.tags">\r
            <label>Tags</label>\r
            <p>{{ workOrder?.tags }}</p>\r
          </div>\r
\r
          </div>\r
        </div>\r
\r
        <!-- Time Tracking Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Time Tracking</h3>\r
          <p class="card-subtitle">Track time spent on this work order</p>\r
\r
          <div class="current-session">\r
            <div class="flex items-center justify-between mb-2">\r
              <div class="text-sm font-medium">Current Session</div>\r
              <span *ngIf="isTimerRunning" class="px-2 py-0.5 text-xs rounded-full" style="background:#dbeafe;color:#1e40af;">Active</span>\r
            </div>\r
            <div *ngIf="isTimerRunning" class="text-center mb-3" style="font-size:28px;letter-spacing:2px;color:#2563eb;">\r
              {{ displayedElapsed }}\r
            </div>\r
            <div *ngIf="isTimerRunning && hasActiveSession && timeLogs[0]?.start_time" class="text-center text-xs text-gray-500 mb-3">\r
              Started {{ timeLogs[0].start_time | date:'MMM d, hh:mm a' }}\r
            </div>\r
            <div class="form-group">\r
              <label>Task Description (Optional)</label>\r
              <input\r
                type="text"\r
                [(ngModel)]="currentSession.description"\r
                placeholder="What are you working on?"\r
                class="form-input">\r
            </div>\r
\r
            <div class="form-group">\r
              <label>Hourly Rate (Optional)</label>\r
              <input\r
                type="number"\r
                [(ngModel)]="currentSession.hourlyRate"\r
                placeholder="0"\r
                class="form-input">\r
            </div>\r
\r
            <button\r
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
              <span class="time-label">{{ (totalMinutes / 60) | number:'1.2-2' }} hrs Total Time</span>\r
            </div>\r
            <div class="total-cost">\r
              <span class="cost-label">{{ getCurrencySymbol() }}{{ totalCost | number:'1.2-2' }} Total Cost</span>\r
            </div>\r
          </div>\r
\r
          <div class="time-log-history">\r
            <h4>Time Log History</h4>\r
            <div *ngIf="timeLogs.length === 0" class="text-sm text-gray-500">No time logs yet.</div>\r
            <div class="time-log-entry" *ngFor="let log of timeLogs">\r
              <div class="log-info">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
                </svg>\r
                <span>{{ log.user ? (log.user.first_name + ' ' + log.user.last_name) : 'Unknown' }}</span>\r
              </div>\r
              <div class="log-time">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                </svg>\r
                <span>{{ log.start_time | date:'MMM d, h:mm a' }}\r
                  <ng-container *ngIf="log.end_time">\r
                    \u2022 {{ (log.duration_minutes || 0) | number:'1.0-0' }} min\r
                  </ng-container>\r
                  <ng-container *ngIf="!log.end_time">\u2022 running</ng-container>\r
                </span>\r
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
            <div class="current-status" [class]="getStatusClass($any(workOrder?.status))">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
              </svg>\r
              {{ getStatusLabel($any(workOrder?.status)) }}\r
            </div>\r
          </div>\r
\r
          <div class="status-update">\r
            <label>Update Status:</label>\r
            <select (change)="onStatusChange($event)" class="form-select">\r
              <option *ngFor="let s of statusOptions" [value]="s.slug" [selected]="getStatusLabel($any(workOrder?.status)) === s.name">\r
                {{ s.name }}\r
              </option>\r
            </select>\r
          </div>\r
        </div>\r
\r
        <!-- Comments Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Comments</h3>\r
          <p class="card-subtitle">Activity log and comments for this work order</p>\r
\r
          <form [formGroup]="commentForm" (ngSubmit)="addComment()" class="comment-form">\r
            <textarea\r
              formControlName="comment"\r
              placeholder="Write a comment about the work order progress..."\r
              class="comment-textarea"></textarea>\r
            <button type="submit" class="submit-comment-button">Add Comment</button>\r
          </form>\r
\r
          <div class="comments-list" *ngIf="workOrder && workOrder.comments && workOrder.comments.length > 0">\r
            <div *ngFor="let comment of workOrder.comments as any" class="comment-entry">\r
              <div class="comment-info">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
                </svg>\r
                @if (comment.user){\r
                  <span>{{ comment.user ? (comment?.user?.first_name + ' ' + comment?.user?.last_name) : 'Unknown User' }}</span>\r
                }\r
              </div>\r
              <div class="comment-text">{{ comment.comment }}</div>\r
              <div class="comment-time">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                </svg>\r
                <span>{{ comment.created_at | date:'MMM d, y, h:mm a' }}</span>\r
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
          <ng-container *ngIf="historyPreview && historyPreview.length > 0; else basicTimeline">\r
            <div *ngFor="let evt of historyPreview; let i = index" class="timeline-item">\r
              <div class="timeline-dot" [class.dot-muted]="evt.type !== 'created'"></div>\r
              <div class="timeline-content">\r
                <label>{{ evt.title }}</label>\r
                <p>{{ evt.timestamp | date:'MMMM d, y \\'at\\' h:mm a' }}</p>\r
                <p *ngIf="evt.user">by {{ evt.user.first_name }} {{ evt.user.last_name }}</p>\r
                <p *ngIf="evt.type === 'comment' && evt.details?.comment">\u201C{{ evt.details.comment }}\u201D</p>\r
              </div>\r
            </div>\r
            <button class="view-all-button" (click)="openHistoryModal()">View all</button>\r
          </ng-container>\r
          <ng-template #basicTimeline>\r
            <div class="timeline-item">\r
              <div class="timeline-dot"></div>\r
              <div class="timeline-content">\r
                <label>Created</label>\r
                <p>{{ workOrder?.created_at | date:'MMMM d, y \\'at\\' h:mm a' }}</p>\r
                <p>by {{ workOrder && workOrder.created_by ? (workOrder.created_by.first_name + ' ' + workOrder.created_by.last_name) : 'Unknown' }}</p>\r
              </div>\r
            </div>\r
            <div class="timeline-item">\r
              <div class="timeline-dot dot-muted"></div>\r
              <div class="timeline-content">\r
                <label>Last Updated</label>\r
                <p>{{ workOrder.updated_at | date:'MMMM d, y \\'at\\' h:mm a' }}</p>\r
              </div>\r
            </div>\r
          </ng-template>\r
        </div>\r
\r
\r
\r
        <!-- Assignments Card (light UI) -->\r
        <div class="info-card">\r
          <div class="assignments-header">\r
            <h3 class="card-title">Assignments<span *ngIf="assignments?.length"> ({{ assignments.length }})</span></h3>\r
            <button class="assign-add-btn" (click)="openAssignmentsModal()">+ Add Assignment</button>\r
          </div>\r
\r
          <div *ngIf="assignments.length === 0" class="text-sm text-gray-500">No assignments yet.</div>\r
          <div *ngIf="assignments.length > 0" class="assignment-list">\r
            <div class="assignment-row" *ngFor="let a of assignments">\r
              <div class="assignment-left">\r
                <div class="avatar-circle">{{ (a.user.first_name || '?')[0] }}{{ (a.user.last_name || '')[0] || '' }}</div>\r
                <div class="assignment-meta">\r
                  <div class="assignment-name">{{ a.user.first_name }} {{ a.user.last_name }}</div>\r
                  <div class="assignment-sub">Assigned {{ a.created_at | date:'shortTime' }} \u2022 {{ a.created_at | date:'MMM d' }}</div>\r
                </div>\r
              </div>\r
              <div class="assignment-actions">\r
                <ng-container *ngIf="(assignmentStatuses.get(a.id) || 'assigned') === 'assigned'; else statusBadge">\r
                  <select class="assignment-select" [value]="assignmentStatuses.get(a.id) || 'assigned'" (change)="onAssignmentStatusChange(a, $event)">\r
                    <option *ngFor="let opt of assignmentStatusOptions" [value]="opt.value">{{ opt.label }}</option>\r
                  </select>\r
                </ng-container>\r
                <ng-template #statusBadge>\r
                  <span [class]="getAssignmentStatusClass(assignmentStatuses.get(a.id))">{{ getAssignmentStatusLabel(assignmentStatuses.get(a.id)) }}</span>\r
                </ng-template>\r
                <button class="icon-btn danger" title="Remove" (click)="removeAssignment(a)">\u{1F5D1}</button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Add Assignment Modal (light version with checkbox list) -->\r
        <div class="modal-overlay" *ngIf="showAssignmentsModal" (click)="closeAssignmentsModal()">\r
          <div class="modal" (click)="$event.stopPropagation()">\r
            <div class="modal-header">\r
              <svg class="header-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
              </svg>\r
              <h2>Add New Assignment</h2>\r
            </div>\r
            <div class="modal-body">\r
              <!-- Checkbox list styled like assignment rows -->\r
              <div class="assignment-list">\r
                <div class="assignment-row selectable" *ngFor="let m of teamMembers">\r
                  <div class="assignment-left">\r
                    <div class="avatar-circle">{{ (m.first_name || '?')[0] }}{{ (m.last_name || '')[0] || '' }}</div>\r
                    <div class="assignment-meta">\r
                      <div class="assignment-name">{{ m.first_name }} {{ m.last_name }}</div>\r
                      <div class="assignment-sub">\r
                        <ng-container *ngIf="isUserAlreadyAssigned(m.id); else emailOnly">\r
                          Assigned {{ (getAssignmentForUser(m.id)?.created_at) | date:'shortTime' }} \u2022 {{ (getAssignmentForUser(m.id)?.created_at) | date:'MMM d' }}\r
                        </ng-container>\r
                        <ng-template #emailOnly>{{ m.email }}</ng-template>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="assignment-actions">\r
                    <ng-container *ngIf="isUserAlreadyAssigned(m.id)">\r
                      <ng-container *ngIf="(assignmentStatuses.get(getAssignmentForUser(m.id)?.id || 0) || 'assigned') === 'assigned'; else modalBadge">\r
                        <select class="assignment-select" [value]="assignmentStatuses.get(getAssignmentForUser(m.id)?.id || 0) || 'assigned'" (change)="onAssignmentStatusChange(getAssignmentForUser(m.id)!, $event)">\r
                          <option *ngFor="let opt of assignmentStatusOptions" [value]="opt.value">{{ opt.label }}</option>\r
                        </select>\r
                      </ng-container>\r
                      <ng-template #modalBadge>\r
                        <span [class]="getAssignmentStatusClass(assignmentStatuses.get(getAssignmentForUser(m.id)?.id || 0))">{{ getAssignmentStatusLabel(assignmentStatuses.get(getAssignmentForUser(m.id)?.id || 0)) }}</span>\r
                      </ng-template>\r
                    </ng-container>\r
                    <button *ngIf="isUserAlreadyAssigned(m.id)" class="icon-btn danger" title="Remove" (click)="removeAssignmentByUser(m.id)">\u{1F5D1}</button>\r
                    <input type="checkbox"\r
                           [checked]="selectedUserIds.has(m.id)"\r
                           (change)="toggleUserSelection(m.id, $any($event.target).checked)" />\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="modal-footer">\r
              <button class="btn btn-secondary" (click)="closeAssignmentsModal()">Cancel</button>\r
              <button class="btn btn-primary" (click)="saveAssignments()">Assign</button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Quick Actions Card -->\r
        <div class="info-card">\r
          <h3 class="card-title">Quick Actions</h3>\r
          <div class="quick-actions">\r
            <button class="action-button" (click)="openEditModal()">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
              </svg>\r
              Edit Work Order\r
            </button>\r
            <button class="action-button" (click)="showViewCostsModal=true">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
              </svg>\r
              View Costs\r
            </button>\r
            <button class="action-button" (click)="openAddPartsModal()">\r
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
</div>\r
`, styles: ['/* src/app/work-orders/components/work-order-preview/work-order-preview.component.scss */\n.work-order-preview-container {\n  padding: 1.5rem;\n  max-width: 100%;\n  margin: 0;\n  position: relative;\n}\n.loading-state {\n  text-align: center;\n  padding: 2rem;\n}\n.work-order-content .header-section {\n  margin-bottom: 2rem;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  padding: 1rem;\n}\n.work-order-content .header-section .back-link {\n  margin-bottom: 1rem;\n}\n.work-order-content .header-section .back-link .back-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.work-order-content .header-section .back-link .back-button:hover {\n  color: #374151;\n}\n.work-order-content .header-section .view-all-button {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background-color: #f3f4f6;\n  border: 1px solid #d1d5db;\n  color: #374151;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.work-order-content .header-section .modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 50;\n}\n.work-order-content .header-section .modal {\n  width: min(720px, 95vw);\n  max-height: 80vh;\n  background: #fff;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n.work-order-content .header-section .modal-header {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #eef2f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.work-order-content .header-section .modal-body {\n  padding: 1rem 1.25rem;\n  overflow: auto;\n}\n.work-order-content .header-section .modal-footer {\n  padding: 0.75rem 1.25rem;\n  border-top: 1px solid #eef2f7;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.work-order-content .header-section .modal-header .close,\n.work-order-content .header-section .modal-footer .close-btn {\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n  color: #374151;\n  border-radius: 0.375rem;\n  padding: 0.25rem 0.5rem;\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n}\n.work-order-content .header-section .title-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.work-order-content .header-section .title-section .title-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.work-order-content .header-section .title-section .title-content .wrench-icon {\n  color: #2563eb;\n  flex-shrink: 0;\n}\n.work-order-content .header-section .title-section .title-content .title-text h1 {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.work-order-content .header-section .title-section .title-content .title-text .work-order-id {\n  margin: 0;\n  font-size: 1rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.work-order-content .header-section .title-section .action-buttons {\n  display: flex;\n  gap: 0.75rem;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button.status-open {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button.status-in-progress {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button.status-completed {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.work-order-content .header-section .title-section .action-buttons .status-button.status-cancelled {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.work-order-content .header-section .title-section .action-buttons .edit-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.work-order-content .header-section .title-section .action-buttons .edit-button:hover {\n  background-color: #1d4ed8;\n}\n.work-order-content .content-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.25rem;\n  width: 100%;\n  max-width: 100%;\n}\n@media (max-width: 1024px) {\n  .work-order-content .content-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.work-order-content .content-grid .left-column,\n.work-order-content .content-grid .right-column {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.work-order-content .content-grid .right-column {\n  position: sticky;\n  top: 1rem;\n  align-self: start;\n  height: fit-content;\n}\n.work-order-content .content-grid .info-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.work-order-content .content-grid .info-card .card-title {\n  margin: 0 0 1rem 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #eef2f7;\n}\n.work-order-content .content-grid .info-card .card-subtitle {\n  margin: 0 0 1.5rem 0;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.work-order-content .content-grid .info-card .detail-item {\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .detail-item label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .detail-item p {\n  margin: 0;\n  color: #6b7280;\n}\n.work-order-content .content-grid .info-card .detail-item .assignee-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n}\n.work-order-content .content-grid .info-card .detail-item .assignee-info svg {\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.work-order-content .content-grid .info-card .detail-item.col-6 {\n  width: 50%;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  box-sizing: border-box;\n}\n@media (max-width: 768px) {\n  .work-order-content .content-grid .info-card .detail-item.col-6 {\n    width: 100%;\n  }\n}\n.work-order-content .content-grid .info-card .current-session {\n  margin-bottom: 1.5rem;\n}\n.work-order-content .content-grid .info-card .current-session .form-group {\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .current-session .form-group label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .current-session .form-group .form-input {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.work-order-content .content-grid .info-card .current-session .form-group .form-input:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content .content-grid .info-card .current-session .timer-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.work-order-content .content-grid .info-card .current-session .timer-button.start-button {\n  background-color: #10b981;\n  color: white;\n}\n.work-order-content .content-grid .info-card .current-session .timer-button.start-button:hover {\n  background-color: #059669;\n}\n.work-order-content .content-grid .info-card .current-session .timer-button.stop-button {\n  background-color: #ef4444;\n  color: white;\n}\n.work-order-content .content-grid .info-card .current-session .timer-button.stop-button:hover {\n  background-color: #dc2626;\n}\n.work-order-content .content-grid .info-card .time-summary {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n}\n.work-order-content .content-grid .info-card .time-summary .total-time,\n.work-order-content .content-grid .info-card .time-summary .total-cost {\n  text-align: center;\n}\n.work-order-content .content-grid .info-card .time-summary .total-time .time-label,\n.work-order-content .content-grid .info-card .time-summary .total-time .cost-label,\n.work-order-content .content-grid .info-card .time-summary .total-cost .time-label,\n.work-order-content .content-grid .info-card .time-summary .total-cost .cost-label {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.work-order-content .content-grid .info-card .time-log-history h4 {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n}\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry .log-info,\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry .log-time {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry .log-info svg,\n.work-order-content .content-grid .info-card .time-log-history .time-log-entry .log-time svg {\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .status-section,\n.work-order-content .content-grid .info-card .status-update {\n  margin-bottom: 1.5rem;\n}\n.work-order-content .content-grid .info-card .status-section label,\n.work-order-content .content-grid .info-card .status-update label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .status-section .current-status,\n.work-order-content .content-grid .info-card .status-update .current-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.work-order-content .content-grid .info-card .status-section .current-status.status-open,\n.work-order-content .content-grid .info-card .status-update .current-status.status-open {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.work-order-content .content-grid .info-card .status-section .current-status.status-in-progress,\n.work-order-content .content-grid .info-card .status-update .current-status.status-in-progress {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.work-order-content .content-grid .info-card .status-section .current-status.status-completed,\n.work-order-content .content-grid .info-card .status-update .current-status.status-completed {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.work-order-content .content-grid .info-card .status-section .current-status.status-cancelled,\n.work-order-content .content-grid .info-card .status-update .current-status.status-cancelled {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.work-order-content .content-grid .info-card .status-section .form-select,\n.work-order-content .content-grid .info-card .status-update .form-select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  cursor: pointer;\n}\n.work-order-content .content-grid .info-card .status-section .form-select:focus,\n.work-order-content .content-grid .info-card .status-update .form-select:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content .content-grid .info-card .add-comment-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .add-comment-button:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .comment-form {\n  margin-bottom: 1.5rem;\n}\n.work-order-content .content-grid .info-card .comment-form .comment-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  resize: vertical;\n  min-height: 100px;\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .comment-form .comment-textarea:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.work-order-content .content-grid .info-card .comment-form .submit-comment-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.work-order-content .content-grid .info-card .comment-form .submit-comment-button:hover {\n  background-color: #1d4ed8;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry {\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-info svg {\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-text {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-time {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .comments-list .comment-entry .comment-time svg {\n  color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .timeline-item {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  padding-left: 1rem;\n}\n.work-order-content .content-grid .info-card .timeline-item::before {\n  content: "";\n  position: absolute;\n  left: 0.375rem;\n  top: 0.25rem;\n  bottom: -0.25rem;\n  width: 2px;\n  background: #e5e7eb;\n}\n.work-order-content .content-grid .info-card .timeline-item .timeline-dot {\n  width: 0.625rem;\n  height: 0.625rem;\n  background-color: #2563eb;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n  border: 2px solid #ffffff;\n  box-shadow: 0 0 0 2px #e5e7eb;\n}\n.work-order-content .content-grid .info-card .timeline-item .timeline-dot.dot-muted {\n  background-color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .timeline-item .timeline-content {\n  flex: 1;\n}\n.work-order-content .content-grid .info-card .timeline-item .timeline-content label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n.work-order-content .content-grid .info-card .timeline-item .timeline-content p {\n  margin: 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.work-order-content .content-grid .info-card .quick-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.work-order-content .content-grid .info-card .quick-actions .action-button {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n}\n.work-order-content .content-grid .info-card .quick-actions .action-button:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.work-order-content .content-grid .info-card .quick-actions .action-button svg {\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.work-order-content .content-grid .info-card .assignments-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.work-order-content .content-grid .info-card .assign-add-btn {\n  padding: 0.5rem 0.75rem;\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  color: #374151;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.work-order-content .content-grid .info-card .assignment-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.work-order-content .content-grid .info-card .assignment-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  background: #fafafa;\n}\n.work-order-content .content-grid .info-card .assignment-row.selectable {\n  cursor: pointer;\n}\n.work-order-content .content-grid .info-card .assignment-row.selectable:hover {\n  background: #f5f5f5;\n}\n.work-order-content .content-grid .info-card .assignment-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.work-order-content .content-grid .info-card .avatar-circle {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 9999px;\n  background: #e5e7eb;\n  color: #374151;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.work-order-content .content-grid .info-card .assignment-meta {\n  display: flex;\n  flex-direction: column;\n}\n.work-order-content .content-grid .info-card .assignment-name {\n  font-weight: 600;\n  color: #111827;\n}\n.work-order-content .content-grid .info-card .assignment-sub {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.work-order-content .content-grid .info-card .assignment-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.work-order-content .content-grid .info-card .assignment-actions input[type=checkbox] {\n  width: 1rem;\n  height: 1rem;\n}\n.work-order-content .content-grid .info-card .pill {\n  padding: 0.125rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  border: 1px solid #e5e7eb;\n}\n.work-order-content .content-grid .info-card .pill.muted {\n  background: #f3f4f6;\n  color: #374151;\n}\n.work-order-content .content-grid .info-card .pill-status {\n  padding: 0.25rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.work-order-content .content-grid .info-card .pill-status.assigned {\n  background: #e5e7eb;\n  color: #374151;\n}\n.work-order-content .content-grid .info-card .pill-status.accepted {\n  background: #60a5fa;\n  color: #fff;\n}\n.work-order-content .content-grid .info-card .pill-status.declined {\n  background: #fecaca;\n  color: #7f1d1d;\n}\n.work-order-content .content-grid .info-card .pill-status.completed {\n  background: #bbf7d0;\n  color: #065f46;\n}\n.work-order-content .content-grid .info-card .icon-btn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 0.375rem;\n}\n.work-order-content .content-grid .info-card .icon-btn.danger {\n  color: #b91c1c;\n}\n.work-order-content .content-grid .info-card .icon-btn.danger:hover {\n  background: #fee2e2;\n}\n.work-order-content .content-grid .info-card .assignment-select {\n  padding: 0.4rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background: #fff;\n  font-size: 0.875rem;\n  color: #111827;\n}\n.work-order-content .content-grid .info-card .team-list {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.work-order-content .content-grid .info-card .team-row {\n  display: grid;\n  grid-template-columns: 1.25rem 1fr auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #eef2f7;\n}\n.work-order-content .content-grid .info-card .team-row:last-child {\n  border-bottom: 0;\n}\n.work-order-content .content-grid .info-card .team-row input[type=checkbox] {\n  width: 1rem;\n  height: 1rem;\n}\n.work-order-content .content-grid .info-card .member-name {\n  font-weight: 500;\n  color: #111827;\n}\n.work-order-content .content-grid .info-card .member-email {\n  font-size: 0.8125rem;\n  color: #6b7280;\n}\n.work-order-content .voice-input-button {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3rem;\n  height: 3rem;\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.work-order-content .voice-input-button:hover {\n  background-color: #1d4ed8;\n  transform: scale(1.05);\n}\n@media (max-width: 768px) {\n  .work-order-content .voice-input-button {\n    bottom: 1rem;\n    right: 1rem;\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .work-order-preview-container {\n    padding: 1rem;\n  }\n  .work-order-preview-container .work-order-content .header-section .title-section {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .work-order-preview-container .work-order-content .header-section .title-section .action-buttons {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .work-order-preview-container .work-order-content .content-grid {\n    gap: 1rem;\n  }\n  .work-order-preview-container .work-order-content .content-grid .info-card {\n    padding: 1rem;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  width: min(720px, 95vw);\n  max-height: 80vh;\n  background: #ffffff;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header {\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal-body {\n  padding: 1rem 1.25rem;\n  overflow: auto;\n}\n.modal-footer {\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn.btn-secondary {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn.btn-secondary:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.btn.btn-primary {\n  background: #2563eb;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: #1d4ed8;\n}\n.modal .timeline-item {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  padding-left: 1rem;\n}\n.modal .timeline-item::before {\n  content: "";\n  position: absolute;\n  left: 0.375rem;\n  top: 0.25rem;\n  bottom: -0.25rem;\n  width: 2px;\n  background: #e5e7eb;\n}\n.modal .timeline-item .timeline-dot {\n  width: 0.625rem;\n  height: 0.625rem;\n  background-color: #2563eb;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n  border: 2px solid #ffffff;\n  box-shadow: 0 0 0 2px #e5e7eb;\n}\n.modal .timeline-item .timeline-dot.dot-muted {\n  background-color: #9ca3af;\n}\n.modal .timeline-item .timeline-content {\n  flex: 1;\n}\n.modal .timeline-item .timeline-content label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n.modal .timeline-item .timeline-content p {\n  margin: 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.modal .assignment-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.modal .assignment-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  background: #fafafa;\n}\n.modal .assignment-row.selectable {\n  cursor: pointer;\n}\n.modal .assignment-row.selectable:hover {\n  background: #f5f5f5;\n}\n.modal .assignment-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal .avatar-circle {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 9999px;\n  background: #e5e7eb;\n  color: #374151;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.modal .assignment-meta {\n  display: flex;\n  flex-direction: column;\n}\n.modal .assignment-name {\n  font-weight: 600;\n  color: #111827;\n}\n.modal .assignment-sub {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.modal .assignment-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modal .assignment-actions input[type=checkbox] {\n  width: 1rem;\n  height: 1rem;\n}\n.modal .pill {\n  padding: 0.125rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  border: 1px solid #e5e7eb;\n}\n.modal .pill.muted {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal .icon-btn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 0.375rem;\n}\n.modal .icon-btn.danger {\n  color: #b91c1c;\n}\n.modal .icon-btn.danger:hover {\n  background: #fee2e2;\n}\n/*# sourceMappingURL=work-order-preview.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: WorkOrderService }, { type: MetaWorkOrdersService }, { type: FormBuilder }, { type: TeamService }, { type: CurrencyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkOrderPreviewComponent, { className: "WorkOrderPreviewComponent", filePath: "src/app/work-orders/components/work-order-preview/work-order-preview.component.ts", lineNumber: 17 });
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
    WorkOrderAnalyticsComponent,
    DeleteConfirmationModalComponent,
    PaginationComponent
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
        WorkOrderPreviewComponent,
        EditWorkOrderModalComponent,
        AddWorkOrderPartsModalComponent,
        ViewCostsModalComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        WorkOrdersRoutingModule,
        WorkOrderAnalyticsComponent,
        DeleteConfirmationModalComponent,
        PaginationComponent,
        ClickOutsideDirective
      ]
    }]
  }], null, null);
})();
export {
  WorkOrdersModule
};
//# sourceMappingURL=chunk-B2YHIMLD.js.map
