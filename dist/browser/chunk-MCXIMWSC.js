import {
  MaintenanceService
} from "./chunk-G7NBKUQU.js";
import {
  FormsModule
} from "./chunk-FSOYXA4J.js";
import "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-MMJF4Y5E.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YUR5IGOK.js";
import "./chunk-TXDUYLVM.js";

// src/app/maintenance/pages/analytics-page.component.ts
function AnalyticsPageComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", (v_r1 || 0) * 12, "%");
    \u0275\u0275attribute("title", ctx_r2.trendLabels[i_r2] + ": " + v_r1);
  }
}
function AnalyticsPageComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r4);
  }
}
function AnalyticsPageComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "div", 41);
    \u0275\u0275elementStart(2, "div", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", (t_r5.value || 0) * 10, "%");
    \u0275\u0275attribute("title", t_r5.name + ": " + t_r5.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.name);
  }
}
function AnalyticsPageComponent_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", v_r6 || 0, "%");
    \u0275\u0275attribute("title", ctx_r2.monthlyCostsLabels[i_r7] + ": $" + v_r6);
  }
}
function AnalyticsPageComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r8);
  }
}
var AnalyticsPageComponent = class _AnalyticsPageComponent {
  api;
  loading = false;
  error = null;
  // simple series placeholders
  trendLabels = [];
  trendData = [];
  typeBreakdown = [];
  monthlyCostsLabels = [];
  monthlyCostsData = [];
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.fetch();
  }
  fetch() {
    this.loading = true;
    this.api.listSchedules({ per_page: 500 }).subscribe({
      next: (res) => {
        const items = Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.schedules) ? res.data.schedules : [];
        const mapCounts = {};
        const mapCosts = {};
        for (const s of items) {
          const d = s.due_date ? new Date(s.due_date) : null;
          const key = d && !isNaN(d.getTime()) ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}` : "unknown";
          mapCounts[key] = (mapCounts[key] || 0) + 1;
          mapCosts[key] = (mapCosts[key] || 0) + (s.cost || 0);
        }
        this.trendLabels = Object.keys(mapCounts).sort();
        this.trendData = this.trendLabels.map((k) => mapCounts[k]);
        this.monthlyCostsLabels = Object.keys(mapCosts).sort();
        this.monthlyCostsData = this.monthlyCostsLabels.map((k) => mapCosts[k]);
        const breakdown = { preventive: 0, corrective: 0, emergency: 0 };
        for (const s of items)
          breakdown["preventive"]++;
        this.typeBreakdown = Object.entries(breakdown).map(([name, value]) => ({ name, value }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Failed to load analytics";
      }
    });
  }
  get totalCount() {
    let sum = 0;
    for (const n of this.trendData)
      sum += Number(n) || 0;
    return sum;
  }
  static \u0275fac = function AnalyticsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsPageComponent)(\u0275\u0275directiveInject(MaintenanceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsPageComponent, selectors: [["app-analytics-page"]], decls: 87, vars: 6, consts: [[1, "min-h-screen", "bg-gray-50", "text-gray-900", "p-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-xl", "font-semibold"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "mb-4", "metrics-grid"], [1, "metric-card", "info"], [1, "metric-header"], [1, "title"], [1, "badge"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.867 19.125h.008v.008h-.008v-.008Z"], [1, "value"], [1, "hint"], [1, "metric-card", "success"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"], [1, "value", "text-green-600"], [1, "metric-card", "warning"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-orange-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "metric-card", "danger"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "panel"], [1, "panel-title"], [1, "grid", "grid-cols-12", "gap-1", "text-xs", "text-gray-400"], [1, "col-span-12", "flex", "items-end", "h-48", "space-x-2"], [4, "ngFor", "ngForOf"], [1, "col-span-12", "flex", "justify-between", "mt-2"], [1, "flex", "items-end", "h-48", "space-x-3"], ["class", "w-12", 4, "ngFor", "ngForOf"], [1, "panel", "mt-4"], [1, "panel-title", "!mb-0"], [1, "text-sm", "text-gray-500", "mb-3"], [1, "list-none", "text-sm", "text-lg"], [1, "flex", "items-center", "gap-2", "text-md", "text-yellow-400", "mb-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5"], [1, "flex", "items-center", "gap-2", "text-md", "text-gray-500"], [1, "bar"], [1, "w-12"], [1, "bar", "bg-purple-500"], [1, "text-xs", "text-center", "mt-1"], [1, "bar", "bg-emerald-500"]], template: function AnalyticsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Preventive Maintenance Analytics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275text(8, "Total Maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "path", 9)(12, "path", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275text(16, "0 upcoming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 5)(19, "div", 6);
      \u0275\u0275text(20, "Preventive Ratio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 14);
      \u0275\u0275element(23, "path", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "div", 16);
      \u0275\u0275text(25, "0.0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 12);
      \u0275\u0275text(27, "Target: 80%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 17)(29, "div", 5)(30, "div", 6);
      \u0275\u0275text(31, "Avg Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(33, "svg", 18);
      \u0275\u0275element(34, "path", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "div", 11);
      \u0275\u0275text(36, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 12);
      \u0275\u0275text(38, "Per maintenance activity");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 20)(40, "div", 5)(41, "div", 6);
      \u0275\u0275text(42, "Avg Duration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 21);
      \u0275\u0275element(45, "path", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(46, "div", 11);
      \u0275\u0275text(47, "0.0h");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 12);
      \u0275\u0275text(49, "Per maintenance activity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 23)(51, "div", 24)(52, "div", 25);
      \u0275\u0275text(53, "Maintenance Trend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 26)(55, "div", 27);
      \u0275\u0275template(56, AnalyticsPageComponent_ng_container_56_Template, 2, 3, "ng-container", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 29);
      \u0275\u0275template(58, AnalyticsPageComponent_span_58_Template, 2, 1, "span", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 24)(60, "div", 25);
      \u0275\u0275text(61, "Maintenance Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 30);
      \u0275\u0275template(63, AnalyticsPageComponent_div_63_Template, 4, 4, "div", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 32)(65, "div", 25);
      \u0275\u0275text(66, "Maintenance Costs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 26)(68, "div", 27);
      \u0275\u0275template(69, AnalyticsPageComponent_ng_container_69_Template, 2, 3, "ng-container", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 29);
      \u0275\u0275template(71, AnalyticsPageComponent_span_71_Template, 2, 1, "span", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 32)(73, "div", 33);
      \u0275\u0275text(74, "Key Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p", 34);
      \u0275\u0275text(76, "Automated analysis of your maintenance performance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "ul", 35)(78, "li", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(79, "svg", 37);
      \u0275\u0275element(80, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(81, " Consider increasing preventive maintenance to reduce corrective work.");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(82, "li", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(83, "svg", 37);
      \u0275\u0275element(84, "path", 9)(85, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(86, " No maintenance history found. Start by completing some maintenance activities.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.totalCount);
      \u0275\u0275advance(42);
      \u0275\u0275property("ngForOf", ctx.trendData);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.trendLabels);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.typeBreakdown);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.monthlyCostsData);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.monthlyCostsLabels);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.sublabel[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: #111827;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 20px;\n  background: #3b82f6;\n  border-radius: 0.25rem;\n}\n.shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 1rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.metric-card[_ngcontent-%COMP%]   .metric-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.metric-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.metric-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #e5f0ff;\n  color: #2563eb;\n  border-radius: 10px;\n  padding: 0.35rem 0.5rem;\n  font-size: 0.75rem;\n}\n.metric-card.info[_ngcontent-%COMP%] {\n  background: #f2f8ff;\n  border-color: #dbeafe;\n}\n.metric-card.success[_ngcontent-%COMP%] {\n  background: #f2fffa;\n  border-color: #d1fae5;\n}\n.metric-card.warning[_ngcontent-%COMP%] {\n  background: #fff8ed;\n  border-color: #fde68a;\n}\n.metric-card.danger[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  border-color: #fecaca;\n}\n.metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.metric-card[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=analytics-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsPageComponent, [{
    type: Component,
    args: [{ selector: "app-analytics-page", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="min-h-screen bg-gray-50 text-gray-900 p-6">\r
  <div class="flex items-center justify-between mb-4">\r
    <h1 class="text-xl font-semibold">Preventive Maintenance Analytics</h1>\r
  </div>\r
\r
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 metrics-grid">\r
    <div class="metric-card info">\r
      <div class="metric-header">\r
        <div class="title">Total Maintenance</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-600">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />\r
          </svg>\r
        </div>\r
      </div>\r
      <div class="value">{{ totalCount }}</div>\r
      <div class="hint">0 upcoming</div>\r
    </div>\r
    <div class="metric-card success">\r
      <div class="metric-header">\r
        <div class="title">Preventive Ratio</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-green-600">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />\r
          </svg>\r
        </div>\r
      </div>\r
      <div class="value text-green-600">0.0%</div>\r
      <div class="hint">Target: 80%</div>\r
    </div>\r
    <div class="metric-card warning">\r
      <div class="metric-header">\r
        <div class="title">Avg Cost</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-orange-600">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />\r
          </svg>\r
        </div>\r
      </div>\r
      <div class="value">$0</div>\r
      <div class="hint">Per maintenance activity</div>\r
    </div>\r
    <div class="metric-card danger">\r
      <div class="metric-header">\r
        <div class="title">Avg Duration</div>\r
        <div class="badge">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-red-600">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />\r
          </svg>\r
        </div>\r
      </div>\r
      <div class="value">0.0h</div>\r
      <div class="hint">Per maintenance activity</div>\r
    </div>\r
  </div>\r
\r
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
    <div class="panel">\r
      <div class="panel-title">Maintenance Trend</div>\r
      <div class="grid grid-cols-12 gap-1 text-xs text-gray-400">\r
        <div class="col-span-12 flex items-end h-48 space-x-2">\r
          <ng-container *ngFor="let v of trendData; let i = index">\r
            <div class="bar" [style.height.%]="(v || 0) * 12" [attr.title]="trendLabels[i] + ': ' + v"></div>\r
          </ng-container>\r
        </div>\r
        <div class="col-span-12 flex justify-between mt-2">\r
          <span *ngFor="let l of trendLabels">{{ l }}</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="panel">\r
      <div class="panel-title">Maintenance Types</div>\r
      <div class="flex items-end h-48 space-x-3">\r
        <div *ngFor="let t of typeBreakdown" class="w-12">\r
          <div class="bar bg-purple-500" [style.height.%]="(t.value || 0) * 10" [attr.title]="t.name + ': ' + t.value"></div>\r
          <div class="text-xs text-center mt-1">{{ t.name }}</div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="panel mt-4">\r
    <div class="panel-title">Maintenance Costs</div>\r
    <div class="grid grid-cols-12 gap-1 text-xs text-gray-400">\r
      <div class="col-span-12 flex items-end h-48 space-x-2">\r
        <ng-container *ngFor="let v of monthlyCostsData; let i = index">\r
          <div class="bar bg-emerald-500" [style.height.%]="(v || 0)" [attr.title]="monthlyCostsLabels[i] + ': $' + v"></div>\r
        </ng-container>\r
      </div>\r
      <div class="col-span-12 flex justify-between mt-2">\r
        <span *ngFor="let l of monthlyCostsLabels">{{ l }}</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="panel mt-4">\r
    <div class="panel-title !mb-0">Key Insights</div>\r
    <p class="text-sm text-gray-500 mb-3">Automated analysis of your maintenance performance</p>\r
    <ul class="list-none text-sm  text-lg">\r
      <li class="flex items-center gap-2 text-md text-yellow-400 mb-2">\r
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />\r
        </svg>\r
        Consider increasing preventive maintenance to reduce corrective work.</li>\r
      <li class=" flex items-center gap-2 text-md text-gray-500">\r
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />\r
        </svg>\r
\r
        No maintenance history found. Start by completing some maintenance activities.</li>\r
    </ul>\r
  </div>\r
</div>\r
\r
\r
`, styles: ["/* src/app/maintenance/pages/analytics-page.component.scss */\n.card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.label {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.sublabel {\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.panel {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.panel-title {\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: #111827;\n}\n.bar {\n  width: 20px;\n  background: #3b82f6;\n  border-radius: 0.25rem;\n}\n.shadow-sm {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.metrics-grid {\n  align-items: stretch;\n}\n.metric-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 1rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.metric-card .metric-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.metric-card .title {\n  font-weight: 600;\n  color: #111827;\n}\n.metric-card .badge {\n  background: #e5f0ff;\n  color: #2563eb;\n  border-radius: 10px;\n  padding: 0.35rem 0.5rem;\n  font-size: 0.75rem;\n}\n.metric-card.info {\n  background: #f2f8ff;\n  border-color: #dbeafe;\n}\n.metric-card.success {\n  background: #f2fffa;\n  border-color: #d1fae5;\n}\n.metric-card.warning {\n  background: #fff8ed;\n  border-color: #fde68a;\n}\n.metric-card.danger {\n  background: #fff5f5;\n  border-color: #fecaca;\n}\n.metric-card .value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.metric-card .hint {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=analytics-page.component.css.map */\n"] }]
  }], () => [{ type: MaintenanceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsPageComponent, { className: "AnalyticsPageComponent", filePath: "src/app/maintenance/pages/analytics-page.component.ts", lineNumber: 13 });
})();
export {
  AnalyticsPageComponent
};
//# sourceMappingURL=chunk-MCXIMWSC.js.map
