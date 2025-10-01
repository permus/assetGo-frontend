import {
  MaintenanceService
} from "./chunk-G7NBKUQU.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-E2GGJA5S.js";
import "./chunk-B4WPIQPD.js";
import {
  CommonModule
} from "./chunk-MMJF4Y5E.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-YUR5IGOK.js";
import "./chunk-TXDUYLVM.js";

// src/app/maintenance/pages/schedule-preview-page/schedule-preview-page.component.ts
var _c0 = () => [];
function SchedulePreviewPageComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function SchedulePreviewPageComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function SchedulePreviewPageComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div")(3, "div", 15);
    \u0275\u0275text(4, "Maintenance Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "div")(11, "div", 19);
    \u0275\u0275text(12, "Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "div", 19);
    \u0275\u0275text(17, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 20);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "div", 19);
    \u0275\u0275text(22, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 20);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "div", 19);
    \u0275\u0275text(27, "Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("#", ctx_r0.schedule == null ? null : ctx_r0.schedule.id, " \u2022 Plan ", ctx_r0.schedule == null ? null : ctx_r0.schedule.maintenance_plan_id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.schedule == null ? null : ctx_r0.schedule.status) || "scheduled");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.schedule == null ? null : ctx_r0.schedule.start_date));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.schedule == null ? null : ctx_r0.schedule.due_date));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.schedule == null ? null : ctx_r0.schedule.priority_id) || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((ctx_r0.schedule == null ? null : ctx_r0.schedule.asset_ids) || \u0275\u0275pureFunction0(7, _c0)).join(", ") || "-");
  }
}
var SchedulePreviewPageComponent = class _SchedulePreviewPageComponent {
  route;
  router;
  api;
  loading = false;
  error = null;
  schedule = null;
  constructor(route, router, api) {
    this.route = route;
    this.router = router;
    this.api = api;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.error = "Invalid schedule id";
      return;
    }
    this.fetch(id);
  }
  fetch(id) {
    this.loading = true;
    this.api.getSchedule(id).subscribe({
      next: (res) => {
        this.schedule = res?.data || res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Failed to load schedule";
      }
    });
  }
  formatDate(value) {
    if (!value)
      return "-";
    const d = new Date(value);
    if (isNaN(d.getTime()))
      return "-";
    return d.toLocaleString();
  }
  goBack() {
    this.router.navigate(["/maintenance/scheduled"]);
  }
  static \u0275fac = function SchedulePreviewPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SchedulePreviewPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MaintenanceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchedulePreviewPageComponent, selectors: [["app-schedule-preview-page"]], decls: 18, vars: 3, consts: [[1, ""], [1, "bg-white", "border-b", "border-gray-200", "px-6", "py-4", "print-hide"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-4"], ["aria-label", "Breadcrumb", 1, "flex"], [1, "flex", "items-center", "space-x-2"], ["href", "javascript:void(0)", 1, "text-gray-500", "hover:text-gray-700", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "mx-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "text-gray-900", "font-medium"], [1, "min-h-screen", "bg-gray-50", "p-6"], [1, "text-center", "py-20"], [1, "text-center", "text-red-600", "py-20"], [1, "max-w-3xl", "mx-auto", "bg-white", "border", "border-gray-200", "rounded-2xl", "shadow-sm", "p-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "text-gray-500"], [1, "text-2xl", "font-semibold"], [1, "bg-gray-100", "text-gray-700", "text-xs", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "text-sm", "text-gray-600"], [1, "font-medium"]], template: function SchedulePreviewPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "ol", 5)(6, "li")(7, "a", 6);
      \u0275\u0275listener("click", function SchedulePreviewPageComponent_Template_a_click_7_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(8, "Maintenance Schedule");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "li", 9);
      \u0275\u0275text(13, "Schedule Details");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275template(15, SchedulePreviewPageComponent_Conditional_15_Template, 2, 0, "div", 11)(16, SchedulePreviewPageComponent_Conditional_16_Template, 2, 1, "div", 12)(17, SchedulePreviewPageComponent_Conditional_17_Template, 30, 8, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.loading ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && !ctx.error && ctx.schedule ? 17 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n/*# sourceMappingURL=schedule-preview-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SchedulePreviewPageComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-preview-page", standalone: true, imports: [CommonModule], template: `<div class="">\r
\r
  <!-- Header -->\r
  <div class="bg-white border-b border-gray-200 px-6 py-4 print-hide">\r
    <div class="flex items-center justify-between">\r
      <!-- Back Button and Breadcrumb -->\r
      <div class="flex items-center space-x-4">\r
        <!-- Breadcrumb -->\r
        <nav class="flex" aria-label="Breadcrumb">\r
          <ol class="flex items-center space-x-2">\r
            <li>\r
              <a href="javascript:void(0)" (click)="goBack()"\r
                 class="text-gray-500 hover:text-gray-700 transition-colors">Maintenance\r
                Schedule</a>\r
            </li>\r
            <li>\r
              <svg class="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
              </svg>\r
            </li>\r
            <li class="text-gray-900 font-medium">Schedule Details</li>\r
          </ol>\r
        </nav>\r
      </div>\r
\r
    </div>\r
  </div>\r
  <div class="min-h-screen bg-gray-50 p-6">\r
\r
    @if (loading) {\r
      <div class="text-center py-20">Loading...</div>\r
    }\r
    @if (error) {\r
      <div class="text-center text-red-600 py-20">{{ error }}</div>\r
    }\r
\r
    @if (!loading && !error && schedule) {\r
      <div class="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6">\r
        <div class="flex items-center justify-between mb-4">\r
          <div>\r
            <div class="text-sm text-gray-500">Maintenance Schedule</div>\r
            <h1 class="text-2xl font-semibold">#{{ schedule?.id }} \u2022 Plan {{ schedule?.maintenance_plan_id }}</h1>\r
          </div>\r
          <span\r
            class="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{{ schedule?.status || 'scheduled' }}</span>\r
        </div>\r
\r
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
          <div>\r
            <div class="text-sm text-gray-600">Start</div>\r
            <div class="font-medium">{{ formatDate(schedule?.start_date) }}</div>\r
          </div>\r
          <div>\r
            <div class="text-sm text-gray-600">Due</div>\r
            <div class="font-medium">{{ formatDate(schedule?.due_date) }}</div>\r
          </div>\r
          <div>\r
            <div class="text-sm text-gray-600">Priority</div>\r
            <div class="font-medium">{{ schedule?.priority_id || '-' }}</div>\r
          </div>\r
          <div>\r
            <div class="text-sm text-gray-600">Assets</div>\r
            <div class="font-medium">{{ (schedule?.asset_ids || []).join(', ') || '-' }}</div>\r
          </div>\r
        </div>\r
      </div>\r
    }\r
\r
  </div>\r
</div>\r
\r
\r
`, styles: ["/* src/app/maintenance/pages/schedule-preview-page/schedule-preview-page.component.scss */\n.btn.btn-secondary {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n}\n.btn.btn-secondary:hover {\n  background: #f9fafb;\n}\n/*# sourceMappingURL=schedule-preview-page.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: MaintenanceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchedulePreviewPageComponent, { className: "SchedulePreviewPageComponent", filePath: "src/app/maintenance/pages/schedule-preview-page/schedule-preview-page.component.ts", lineNumber: 14 });
})();
export {
  SchedulePreviewPageComponent
};
//# sourceMappingURL=chunk-ENSRLR7Q.js.map
