import {
  MaintenanceService
} from "./chunk-NKW5FA2N.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ISERUI2H.js";
import "./chunk-OR4RIGW3.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/maintenance/pages/history-page.component.ts
function HistoryPageComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function HistoryPageComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "path", 40)(4, "path", 41)(5, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275text(7, "No maintenance history found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 44);
    \u0275\u0275text(9, "Maintenance activities will appear here as they are completed.");
    \u0275\u0275elementEnd()();
  }
}
function HistoryPageComponent_div_71_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div")(3, "div", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const h_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Plan #", h_r1.maintenance_plan_id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Completed \u2022 ", h_r1.due_date, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Priority: ", h_r1.priority_name || h_r1.priority_id || "-", "");
  }
}
function HistoryPageComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275template(2, HistoryPageComponent_div_71_div_2_Template, 9, 3, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filtered);
  }
}
var HistoryPageComponent = class _HistoryPageComponent {
  api;
  loading = false;
  error = null;
  all = [];
  filtered = [];
  search = "";
  filter = "all";
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.fetch();
  }
  fetch() {
    this.loading = true;
    this.api.listSchedules({ status: "completed", per_page: 100 }).subscribe({
      next: (res) => {
        const items = Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.schedules) ? res.data.schedules : [];
        this.all = items.filter((s) => s.status === "completed");
        this.apply();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Failed to load history";
      }
    });
  }
  apply() {
    const base = this.search ? this.all.filter((h) => String(h.maintenance_plan_id).includes(this.search)) : this.all;
    this.filtered = this.filter === "all" ? base : base.filter((h) => (h.plan_type || "preventive") === this.filter);
  }
  static \u0275fac = function HistoryPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryPageComponent)(\u0275\u0275directiveInject(MaintenanceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryPageComponent, selectors: [["app-history-page"]], decls: 72, vars: 14, consts: [[1, "min-h-screen", "bg-gray-50", "text-gray-900", "p-6"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-sm", "text-gray-500", "mb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "mb-4", "metrics-grid"], [1, "metric-card", "info"], [1, "metric-header"], [1, "title"], [1, "badge"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.867 19.125h.008v.008h-.008v-.008Z"], [1, "value"], [1, "hint"], ["href", "javascript:void(0)", 1, "link"], [1, "metric-card", "success"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"], [1, "hint", "text-green-600"], [1, "metric-card", "warning"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "hint", "text-orange-600"], [1, "metric-card", "danger"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "size-5", "text-red-600"], ["x1", "10", "x2", "14", "y1", "2", "y2", "2"], ["x1", "12", "x2", "15", "y1", "14", "y2", "11"], ["cx", "12", "cy", "14", "r", "8"], [1, "hint", "text-red-600"], [1, "search-row", "mb-4"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "Search by plan, status...", 1, "w-full", "pl-10", "pr-4", "py-2", "border-2", "transition-all", "duration-300", "ease-in-out", "border-blue-300", "rounded-xl", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", 3, "ngModelChange", "input", "ngModel"], [1, "pill-group"], [1, "pill", 3, "click"], ["class", "text-center py-20", 4, "ngIf"], ["class", "text-center py-20 text-gray-500 bg-white border border-gray-200 rounded-xl", 4, "ngIf"], ["class", "bg-white border border-gray-200 rounded-xl", 4, "ngIf"], [1, "text-center", "py-20"], [1, "text-center", "py-20", "text-gray-500", "bg-white", "border", "border-gray-200", "rounded-xl"], [1, "mb-4", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "size-10"], ["d", "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"], ["d", "M3 3v5h5"], ["d", "M12 7v5l4 2"], [1, "text-lg", "font-medium"], [1, "text-sm", "text-gray-500"], [1, "bg-white", "border", "border-gray-200", "rounded-xl"], [1, "divide-y", "divide-gray-200"], ["class", "px-6 py-4", 4, "ngFor", "ngForOf"], [1, "px-6", "py-4"], [1, "flex", "items-center", "justify-between"], [1, "font-medium", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "text-sm", "text-gray-700"]], template: function HistoryPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Maintenance History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Track completed maintenance activities and their outcomes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275text(9, "Total Activities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "path", 9)(13, "path", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "a", 13);
      \u0275\u0275text(18, "Items completed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 5)(21, "div", 6);
      \u0275\u0275text(22, "Preventive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 15);
      \u0275\u0275element(25, "path", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "div", 11);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275text(29, "0% of total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 5)(32, "div", 6);
      \u0275\u0275text(33, "Total Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 8);
      \u0275\u0275element(36, "path", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "div", 11);
      \u0275\u0275text(38, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 20);
      \u0275\u0275text(40, "Year to date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 21)(42, "div", 5)(43, "div", 6);
      \u0275\u0275text(44, "Avg Duration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 22);
      \u0275\u0275element(47, "line", 23)(48, "line", 24)(49, "circle", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "div", 11);
      \u0275\u0275text(51, "0.0h");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 26);
      \u0275\u0275text(53, "Per activity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 27)(55, "div", 28)(56, "div", 29)(57, "label");
      \u0275\u0275text(58, "Search maintenance history");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function HistoryPageComponent_Template_input_ngModelChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function HistoryPageComponent_Template_input_input_59_listener() {
        return ctx.apply();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 31)(61, "button", 32);
      \u0275\u0275listener("click", function HistoryPageComponent_Template_button_click_61_listener() {
        ctx.filter = "all";
        return ctx.apply();
      });
      \u0275\u0275text(62, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "button", 32);
      \u0275\u0275listener("click", function HistoryPageComponent_Template_button_click_63_listener() {
        ctx.filter = "preventive";
        return ctx.apply();
      });
      \u0275\u0275text(64, "Preventive ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 32);
      \u0275\u0275listener("click", function HistoryPageComponent_Template_button_click_65_listener() {
        ctx.filter = "predictive";
        return ctx.apply();
      });
      \u0275\u0275text(66, "Predictive ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 32);
      \u0275\u0275listener("click", function HistoryPageComponent_Template_button_click_67_listener() {
        ctx.filter = "condition_based";
        return ctx.apply();
      });
      \u0275\u0275text(68, "Condition Based ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(69, HistoryPageComponent_div_69_Template, 2, 0, "div", 33)(70, HistoryPageComponent_div_70_Template, 10, 0, "div", 34)(71, HistoryPageComponent_div_71_Template, 3, 1, "div", 35);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.all.length);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.all.length);
      \u0275\u0275advance(32);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filter === "all");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filter === "preventive");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filter === "predictive");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filter === "condition_based");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.sublabel[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.form-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: 100%;\n  padding: 0.6rem 0.9rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  min-height: 42px;\n  font-size: 0.875rem;\n  background: #fff;\n}\n.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 1rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.metric-card[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.metric-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.metric-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #e5f0ff;\n  color: #2563eb;\n  border-radius: 10px;\n  padding: 0.35rem 0.5rem;\n  font-size: 0.75rem;\n}\n.metric-card.info[_ngcontent-%COMP%] {\n  background: #f2f8ff;\n  border-color: #dbeafe;\n}\n.metric-card.success[_ngcontent-%COMP%] {\n  background: #f2fffa;\n  border-color: #d1fae5;\n}\n.metric-card.warning[_ngcontent-%COMP%] {\n  background: #fff8ed;\n  border-color: #fde68a;\n}\n.metric-card.danger[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  border-color: #fecaca;\n}\n.metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.metric-card[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.metric-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.pill-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.pill[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 0.5rem 0.9rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background: #fff;\n  color: #111827;\n  font-size: 0.875rem;\n}\n.pill.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=history-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryPageComponent, [{
    type: Component,
    args: [{ selector: "app-history-page", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="min-h-screen bg-gray-50 text-gray-900 p-6">\r
  <h1 class="text-xl font-semibold mb-2">Maintenance History</h1>\r
  <p class="text-sm text-gray-500 mb-6">Track completed maintenance activities and their outcomes</p>\r
\r
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 metrics-grid">\r
    <div class="metric-card info">\r
      <div class="metric-header">\r
        <div class="title">Total Activities</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor" class="size-5">\r
            <path stroke-linecap="round" stroke-linejoin="round"\r
                  d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"/>\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z"/>\r
          </svg>\r
\r
        </div>\r
      </div>\r
      <div class="value">{{ all.length }}</div>\r
      <div class="hint"><a class="link" href="javascript:void(0)">Items completed</a></div>\r
    </div>\r
    <div class="metric-card success">\r
      <div class="metric-header">\r
        <div class="title">Preventive</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor" class="size-5 text-green-600">\r
            <path stroke-linecap="round" stroke-linejoin="round"\r
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>\r
          </svg>\r
\r
        </div>\r
      </div>\r
      <div class="value">{{ all.length }}</div>\r
      <div class="hint text-green-600">0% of total</div>\r
    </div>\r
    <div class="metric-card warning">\r
      <div class="metric-header">\r
        <div class="title">Total Cost</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor" class="size-5">\r
            <path stroke-linecap="round" stroke-linejoin="round"\r
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
          </svg>\r
        </div>\r
      </div>\r
      <div class="value">$0</div>\r
      <div class="hint text-orange-600">Year to date</div>\r
    </div>\r
    <div class="metric-card danger">\r
      <div class="metric-header">\r
        <div class="title">Avg Duration</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
               class="size-5 text-red-600">\r
            <line x1="10" x2="14" y1="2" y2="2"/>\r
            <line x1="12" x2="15" y1="14" y2="11"/>\r
            <circle cx="12" cy="14" r="8"/>\r
          </svg>\r
        </div>\r
      </div>\r
      <div class="value">0.0h</div>\r
      <div class="hint text-red-600">Per activity</div>\r
    </div>\r
  </div>\r
\r
  <div class="search-row mb-4">\r
    <div class="form-row">\r
      <div class="form-group">\r
        <label>Search maintenance history</label>\r
        <input type="text"\r
               class="w-full pl-10 pr-4 py-2 border-2 transition-all duration-300 ease-in-out border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
               [(ngModel)]="search" placeholder="Search by plan, status..." (input)="apply()"/>\r
      </div>\r
    </div>\r
    <div class="pill-group">\r
      <button class="pill" [class.active]="filter==='all'" (click)="filter='all'; apply()">All</button>\r
      <button class="pill" [class.active]="filter==='preventive'" (click)="filter='preventive'; apply()">Preventive\r
      </button>\r
      <button class="pill" [class.active]="filter==='predictive'" (click)="filter='predictive'; apply()">Predictive\r
      </button>\r
      <button class="pill" [class.active]="filter==='condition_based'" (click)="filter='condition_based'; apply()">Condition Based\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="loading" class="text-center py-20">Loading...</div>\r
  <div *ngIf="!loading && filtered.length===0"\r
       class="text-center py-20 text-gray-500 bg-white border border-gray-200 rounded-xl">\r
    <div class="mb-4 flex items-center justify-center">\r
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
           class="size-10">\r
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>\r
        <path d="M3 3v5h5"/>\r
        <path d="M12 7v5l4 2"/>\r
      </svg>\r
    </div>\r
    <div class="text-lg font-medium">No maintenance history found</div>\r
    <div class="text-sm text-gray-500">Maintenance activities will appear here as they are completed.</div>\r
  </div>\r
\r
  <div *ngIf="!loading && filtered.length>0" class="bg-white border border-gray-200 rounded-xl">\r
    <div class="divide-y divide-gray-200">\r
      <div class="px-6 py-4" *ngFor="let h of filtered">\r
        <div class="flex items-center justify-between">\r
          <div>\r
            <div class="font-medium text-gray-900">Plan #{{ h.maintenance_plan_id }}</div>\r
            <div class="text-xs text-gray-500">Completed \u2022 {{ h.due_date }}</div>\r
          </div>\r
          <div class="text-sm text-gray-700">Priority: {{ h.priority_name || h.priority_id || '-' }}</div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
`, styles: ["/* src/app/maintenance/pages/history-page.component.scss */\n.card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.label {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.sublabel {\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.form-row {\n  width: 100%;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n}\n.form-group input {\n  width: 24rem;\n  max-width: 100%;\n  padding: 0.6rem 0.9rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  min-height: 42px;\n  font-size: 0.875rem;\n  background: #fff;\n}\n.form-group .field-error {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.metrics-grid {\n  align-items: stretch;\n}\n.metric-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 1rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.metric-card .metric-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.metric-card .title {\n  font-weight: 600;\n  color: #111827;\n}\n.metric-card .badge {\n  background: #e5f0ff;\n  color: #2563eb;\n  border-radius: 10px;\n  padding: 0.35rem 0.5rem;\n  font-size: 0.75rem;\n}\n.metric-card.info {\n  background: #f2f8ff;\n  border-color: #dbeafe;\n}\n.metric-card.success {\n  background: #f2fffa;\n  border-color: #d1fae5;\n}\n.metric-card.warning {\n  background: #fff8ed;\n  border-color: #fde68a;\n}\n.metric-card.danger {\n  background: #fff5f5;\n  border-color: #fecaca;\n}\n.metric-card .value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.metric-card .hint {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.metric-card .link {\n  color: #2563eb;\n  text-decoration: none;\n}\n.search-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.pill-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.pill {\n  white-space: nowrap;\n  padding: 0.5rem 0.9rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background: #fff;\n  color: #111827;\n  font-size: 0.875rem;\n}\n.pill.active {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=history-page.component.css.map */\n"] }]
  }], () => [{ type: MaintenanceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryPageComponent, { className: "HistoryPageComponent", filePath: "src/app/maintenance/pages/history-page.component.ts", lineNumber: 13 });
})();
export {
  HistoryPageComponent
};
//# sourceMappingURL=chunk-TSEBPZW3.js.map
