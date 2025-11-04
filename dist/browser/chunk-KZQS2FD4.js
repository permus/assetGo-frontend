import {
  ArcElement,
  Chart,
  DoughnutController,
  plugin_legend,
  plugin_tooltip
} from "./chunk-NKVVMDEB.js";
import {
  PreferencesService
} from "./chunk-3QBMOR5J.js";
import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  RouterModule
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  Injectable,
  NgModule,
  Subject,
  ViewChild,
  inject,
  setClassMetadata,
  switchMap,
  takeUntil,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/dashboard/dashboard.service.ts
var DashboardService = class _DashboardService {
  http;
  base = `${environment.apiUrl}`;
  constructor(http) {
    this.http = http;
  }
  getDashboardData() {
    return this.http.get(`${this.base}/dashboard`);
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/dashboard/dashboard.component.ts
var _c0 = ["assetHealthChart"];
function DashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "span", 51);
    \u0275\u0275text(2, "No insights generated yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 53);
    \u0275\u0275element(5, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Generate New Insights");
    \u0275\u0275elementEnd()()();
  }
}
function DashboardComponent_div_9__svg_path_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 68);
  }
}
function DashboardComponent_div_9__svg_path_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 69);
  }
}
function DashboardComponent_div_9__svg_path_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 70);
  }
}
function DashboardComponent_div_9__svg_path_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 71);
  }
}
function DashboardComponent_div_9__svg_path_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 72);
  }
}
function DashboardComponent_div_9__svg_path_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 73);
  }
}
function DashboardComponent_div_9__svg_path_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 74);
  }
}
function DashboardComponent_div_9__svg_path_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 75);
  }
}
function DashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 55)(2, "h3", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 58);
    \u0275\u0275template(6, DashboardComponent_div_9__svg_path_6_Template, 1, 0, "path", 59)(7, DashboardComponent_div_9__svg_path_7_Template, 1, 0, "path", 60)(8, DashboardComponent_div_9__svg_path_8_Template, 1, 0, "path", 61)(9, DashboardComponent_div_9__svg_path_9_Template, 1, 0, "path", 62)(10, DashboardComponent_div_9__svg_path_10_Template, 1, 0, "path", 63)(11, DashboardComponent_div_9__svg_path_11_Template, 1, 0, "path", 64)(12, DashboardComponent_div_9__svg_path_12_Template, 1, 0, "path", 65)(13, DashboardComponent_div_9__svg_path_13_Template, 1, 0, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 67);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 51);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "w-8 h-8 rounded-lg flex items-center justify-center bg-" + stat_r1.color + "-100");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "text-" + stat_r1.color + "-600");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.icon === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.icon === "check");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.icon === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.icon === "dollar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.icon === "trending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.icon === "clock");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.icon === "clipboard");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.icon === "shield");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.subtitle);
  }
}
function DashboardComponent_ng_container_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 76)(2, "span", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " pending transfer approval(s)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.transfer_approvals);
  }
}
function DashboardComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "No pending transfer approvals");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 55)(2, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 78);
    \u0275\u0275element(4, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 47);
    \u0275\u0275text(6, "AI Insights");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 79);
    \u0275\u0275text(8, "AI Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 80);
    \u0275\u0275text(10, "Smart recommendations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 82);
    \u0275\u0275element(13, "path", 83);
    \u0275\u0275elementEnd()()();
  }
}
Chart.register(ArcElement, plugin_tooltip, plugin_legend, DoughnutController);
var DashboardComponent = class _DashboardComponent {
  dashboardApi;
  destroy$ = new Subject();
  prefsService = inject(PreferencesService);
  loading = false;
  data = null;
  assetHealthChartRef;
  assetHealthChart = null;
  showAiInsights = false;
  refreshInterval;
  // Archive analytics
  archiveAnalytics = {
    totalAssets: 0,
    activeAssets: 0,
    archivedAssets: 0,
    archivedByMonth: []
  };
  stats = [
    { title: "Total Assets", value: "24", subtitle: "Live data", icon: "info", color: "blue" },
    { title: "Active Assets", value: "23", subtitle: "95.8% operational", icon: "check", color: "green" },
    { title: "Critical Alerts", value: "1", subtitle: "1 require immediate attention", icon: "warning", color: "orange" },
    { title: "Monthly Investment", value: "$0", subtitle: "No data available", icon: "dollar", color: "purple" },
    { title: "Asset Utilization", value: "--", subtitle: "No data available", icon: "trending", color: "blue" },
    { title: "Scheduled Maintenance", value: "0", subtitle: "Next 30 days", icon: "clock", color: "teal" },
    { title: "Active Work Orders", value: "2", subtitle: "1 high priority", icon: "clipboard", color: "yellow" },
    { title: "Archived Assets", value: "0", subtitle: "In archive", icon: "shield", color: "gray" }
  ];
  workOrders = [
    { title: "Total Work Orders", value: 2 },
    { title: "Scheduled This Week", value: 0 },
    { title: "Overdue", value: 1 }
  ];
  constructor(dashboardApi) {
    this.dashboardApi = dashboardApi;
  }
  ngOnInit() {
    this.fetch();
    if (this.prefsService.get("auto_refresh")) {
      this.startAutoRefresh();
    }
  }
  ngOnDestroy() {
    this.stopAutoRefresh();
    this.destroy$.next();
    this.destroy$.complete();
  }
  startAutoRefresh() {
    this.stopAutoRefresh();
    this.refreshInterval = setInterval(() => {
      this.fetch();
    }, 3e4);
  }
  stopAutoRefresh() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }
  fetch() {
    this.loading = true;
    this.dashboardApi.getDashboardData().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.loading = false;
        this.data = res?.data;
        this.hydrateStats();
        setTimeout(() => this.renderAssetHealthChart(), 0);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  autoRefresh() {
    timer(6e4, 6e4).pipe(takeUntil(this.destroy$), switchMap(() => this.dashboardApi.getDashboardData())).subscribe({ next: (res) => {
      this.data = res?.data;
      this.hydrateStats();
    } });
  }
  hydrateStats() {
    const d = this.data;
    this.stats = [
      { title: "Total Assets", value: String(d.total_assets ?? "--"), subtitle: d.total_assets != null ? "Live data" : "-- No data available", icon: "info", color: "blue" },
      { title: "Active Assets", value: String(d.active_assets ?? "--"), subtitle: d.active_assets != null ? "Active assets" : "-- No data available", icon: "check", color: "green" },
      { title: "Critical Alerts", value: String(d.critical_alerts ?? "--"), subtitle: d.critical_alerts != null ? "Require attention" : "-- No data available", icon: "warning", color: "orange" },
      { title: "Monthly Investment", value: `$${d.monthly_investment ?? 0}`, subtitle: "Monthly spend", icon: "dollar", color: "purple" },
      { title: "Asset Utilization", value: d.asset_utilization != null ? `${d.asset_utilization}%` : "--", subtitle: d.asset_utilization != null ? "Utilization" : "-- No data available", icon: "trending", color: "blue" },
      { title: "Scheduled Maintenance", value: String(d.scheduled_maintenance ?? 0), subtitle: "Next 30 days", icon: "clock", color: "teal" },
      { title: "Active Work Orders", value: String(d.active_work_orders ?? 0), subtitle: "Open WOs", icon: "clipboard", color: "yellow" },
      { title: "Archived Assets", value: String(d.archived_assets ?? 0), subtitle: `${d.archived_assets ?? 0} assets in archive`, icon: "shield", color: "gray" }
    ];
    this.workOrders = [
      { title: "Total Work Orders", value: d.maintenance_insights.total_work_orders },
      { title: "Scheduled This Week", value: d.maintenance_insights.scheduled_this_week },
      { title: "Overdue", value: d.maintenance_insights.overdue }
    ];
  }
  renderAssetHealthChart() {
    if (!this.data || !this.assetHealthChartRef)
      return;
    const ctx = this.assetHealthChartRef.nativeElement.getContext("2d");
    if (!ctx)
      return;
    if (this.assetHealthChart) {
      this.assetHealthChart.destroy();
      this.assetHealthChart = null;
    }
    const total = Math.max(0, Number(this.data.asset_health.total || 0));
    const active = Math.min(total, Math.max(0, Number(this.data.asset_health.active || 0)));
    const uncategorized = Math.min(total, Math.max(0, Number(this.data.asset_health.uncategorized || 0)));
    const others = Math.max(0, total - active - uncategorized);
    this.assetHealthChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Active", "Uncategorized", "Others"],
        datasets: [
          {
            data: [active, uncategorized, others],
            backgroundColor: ["#22c55e", "#3b82f6", "#e5e7eb"],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        cutout: "70%",
        rotation: -90,
        plugins: { legend: { display: false }, tooltip: { enabled: true } }
      }
    });
  }
  // Helpers for template
  get activeAssets() {
    return Number(this.data?.asset_health.active ?? 0);
  }
  get totalAssets() {
    return Number(this.data?.asset_health.total ?? 0);
  }
  get activePercent() {
    const t = this.totalAssets;
    if (!t)
      return 0;
    return Math.round(this.activeAssets / t * 100);
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(DashboardService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetHealthChartRef = _t.first);
    }
  }, standalone: false, decls: 97, vars: 17, consts: [["assetHealthChart", ""], ["noApprovals", ""], [1, "p-6"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-3xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-600"], ["class", "flex items-center space-x-4", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6", "mb-8"], ["class", "bg-white rounded-lg p-6 shadow-sm border border-gray-200", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "bg-white", "rounded-lg", "p-6", "shadow-sm", "border", "border-gray-200"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-1"], [1, "text-sm", "text-gray-600"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "text-sm", "font-medium", "text-gray-700", "mb-4"], [1, "flex", "items-center", "justify-center", "mb-4"], [1, "relative", "w-40", "h-40"], ["width", "160", "height", "160"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "text-center"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "space-y-2"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-2"], [1, "w-3", "h-3", "bg-green-500", "rounded-full"], [1, "text-sm", "text-gray-700"], [1, "text-sm", "text-gray-900"], [1, "w-full", "bg-gray-200", "rounded-full", "h-2"], [1, "bg-green-500", "h-2", "rounded-full"], [1, "text-right", "text-xs", "text-gray-500"], [1, "flex", "items-center", "justify-between", "mt-4"], [1, "w-3", "h-3", "bg-blue-500", "rounded-full"], [1, "text-center", "mb-6"], [1, "text-4xl", "font-bold", "text-blue-600", "mb-2"], [1, "space-y-4"], [1, "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium", "text-green-600"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "mt-6", "space-y-3"], [1, "text-sm", "font-medium", "text-red-600"], [1, "space-y-6"], [1, "bg-white", "rounded-lg", "p-6", "shadow-sm", "border", "border-gray-200"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5", "text-green-600"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [1, "text-lg", "font-semibold", "text-gray-900"], [4, "ngIf", "ngIfElse"], ["class", "bg-white rounded-lg p-6 shadow-sm border border-gray-200", 4, "ngIf"], [1, "flex", "items-center", "space-x-4"], [1, "text-sm", "text-gray-500"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded-lg", "font-medium", "hover:bg-blue-700", "flex", "items-center", "space-x-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "font-medium", "text-gray-600"], [3, "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", 4, "ngIf"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "text-gray-700"], [1, "font-semibold"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-purple-600"], [1, "text-xs", "bg-green-100", "text-green-800", "px-2", "py-1", "rounded-full"], [1, "text-sm", "text-gray-600", "mb-4"], [1, "fixed", "bottom-6", "right-6", "w-12", "h-12", "bg-blue-600", "text-white", "rounded-full", "shadow-lg", "hover:bg-blue-700", "flex", "items-center", "justify-center", "cursor-pointer"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
      \u0275\u0275text(4, "Asset Intelligence Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Real-time insights and comprehensive asset management overview");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, DashboardComponent_div_7_Template, 8, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275template(9, DashboardComponent_div_9_Template, 18, 13, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div")(14, "h3", 12);
      \u0275\u0275text(15, "Asset & Maintenance Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 13);
      \u0275\u0275text(17, "Comprehensive portfolio distribution and maintenance trends");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 14)(19, "div")(20, "h4", 15);
      \u0275\u0275text(21, "Asset Health Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 16)(23, "div", 17);
      \u0275\u0275element(24, "canvas", 18, 0);
      \u0275\u0275elementStart(26, "div", 19)(27, "div", 20)(28, "div", 21);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 22);
      \u0275\u0275text(31, "Total");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 23)(33, "div", 24)(34, "div", 25);
      \u0275\u0275element(35, "div", 26);
      \u0275\u0275elementStart(36, "span", 27);
      \u0275\u0275text(37, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 28);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 29);
      \u0275\u0275element(41, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 31);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 32)(45, "div", 25);
      \u0275\u0275element(46, "div", 33);
      \u0275\u0275elementStart(47, "span", 27);
      \u0275\u0275text(48, "Uncategorized");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 28);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div")(52, "h4", 15);
      \u0275\u0275text(53, "Maintenance Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 34)(55, "div", 35);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 13);
      \u0275\u0275text(58, "Average Health Score");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 36)(60, "div", 37)(61, "span", 13);
      \u0275\u0275text(62, "Completion Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span", 38);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 37)(66, "span", 13);
      \u0275\u0275text(67, "Avg Days to Complete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span", 39);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 40)(71, "div", 24)(72, "span", 13);
      \u0275\u0275text(73, "Total Work Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 39);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 24)(77, "span", 13);
      \u0275\u0275text(78, "Scheduled This Week");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span", 39);
      \u0275\u0275text(80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 24)(82, "span", 13);
      \u0275\u0275text(83, "Overdue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 41);
      \u0275\u0275text(85);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(86, "div", 42)(87, "div", 43)(88, "div", 44);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(89, "svg", 45);
      \u0275\u0275element(90, "path", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(91, "h3", 47);
      \u0275\u0275text(92, "Transfer Approvals");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(93, DashboardComponent_ng_container_93_Template, 5, 1, "ng-container", 48)(94, DashboardComponent_ng_template_94_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(96, DashboardComponent_div_96_Template, 14, 0, "div", 49);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      const noApprovals_r3 = \u0275\u0275reference(95);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.showAiInsights);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(20);
      \u0275\u0275textInterpolate((tmp_4_0 = ctx.data == null ? null : ctx.data.asset_health.total) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.activeAssets, " assets");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.activePercent, "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.activePercent, "%");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate((tmp_8_0 = ctx.data == null ? null : ctx.data.asset_health.uncategorized) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", (tmp_9_0 = ctx.data == null ? null : ctx.data.asset_health.average_health_score) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : 0, "%");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", (tmp_10_0 = ctx.data == null ? null : ctx.data.maintenance_insights.completion_rate) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : 0, "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_11_0 = ctx.data == null ? null : ctx.data.maintenance_insights.avg_days_to_complete) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate((tmp_12_0 = ctx.data == null ? null : ctx.data.maintenance_insights.total_work_orders) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_13_0 = ctx.data == null ? null : ctx.data.maintenance_insights.scheduled_this_week) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_14_0 = ctx.data == null ? null : ctx.data.maintenance_insights.overdue) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ((tmp_15_0 = ctx.data == null ? null : ctx.data.transfer_approvals) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 0) > 0)("ngIfElse", noApprovals_r3);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showAiInsights);
    }
  }, dependencies: [NgClass, NgForOf, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: false, template: `<!-- Dashboard Content -->\r
<div class="p-6">\r
      <!-- Dashboard Header -->\r
      <div class="flex items-center justify-between mb-8">\r
        <div>\r
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Asset Intelligence Dashboard</h1>\r
          <p class="text-gray-600">Real-time insights and comprehensive asset management overview</p>\r
        </div>\r
        <div *ngIf="showAiInsights" class="flex items-center space-x-4">\r
          <span class="text-sm text-gray-500">No insights generated yet</span>\r
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center space-x-2">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
            </svg>\r
            <span>Generate New Insights</span>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Stats Grid -->\r
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">\r
        <div *ngFor="let stat of stats" class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center justify-between mb-4">\r
            <h3 class="text-sm font-medium text-gray-600">{{stat.title}}</h3>\r
            <div [ngClass]="'w-8 h-8 rounded-lg flex items-center justify-center bg-' + stat.color + '-100'">\r
              <svg class="w-4 h-4" [ngClass]="'text-' + stat.color + '-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path *ngIf="stat.icon === 'info'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                <path *ngIf="stat.icon === 'check'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                <path *ngIf="stat.icon === 'warning'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
                <path *ngIf="stat.icon === 'dollar'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
                <path *ngIf="stat.icon === 'trending'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>\r
                <path *ngIf="stat.icon === 'clock'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                <path *ngIf="stat.icon === 'clipboard'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>\r
                <path *ngIf="stat.icon === 'shield'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>\r
              </svg>\r
            </div>\r
          </div>\r
          <div class="text-2xl font-bold text-gray-900 mb-1">{{stat.value}}</div>\r
          <div class="text-sm text-gray-500">{{stat.subtitle}}</div>\r
        </div>\r
      </div>\r
\r
      <!-- Analytics Section -->\r
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">\r
        <!-- Asset & Maintenance Analytics -->\r
        <div class="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center justify-between mb-6">\r
            <div>\r
              <h3 class="text-lg font-semibold text-gray-900 mb-1">Asset & Maintenance Analytics</h3>\r
              <p class="text-sm text-gray-600">Comprehensive portfolio distribution and maintenance trends</p>\r
            </div>\r
          </div>\r
\r
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">\r
            <!-- Asset Health Status -->\r
            <div>\r
              <h4 class="text-sm font-medium text-gray-700 mb-4">Asset Health Status</h4>\r
              <div class="flex items-center justify-center mb-4">\r
                <div class="relative w-40 h-40">\r
                  <canvas #assetHealthChart width="160" height="160"></canvas>\r
                  <div class="absolute inset-0 flex items-center justify-center">\r
                    <div class="text-center">\r
                      <div class="text-2xl font-bold text-gray-900">{{ data?.asset_health.total ?? 0 }}</div>\r
                      <div class="text-xs text-gray-500">Total</div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="space-y-2">\r
                <div class="flex items-center justify-between">\r
                  <div class="flex items-center space-x-2">\r
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>\r
                    <span class="text-sm text-gray-700">Active</span>\r
                  </div>\r
                  <div class="text-sm text-gray-900">{{ activeAssets }} assets</div>\r
                </div>\r
                <div class="w-full bg-gray-200 rounded-full h-2">\r
                  <div class="bg-green-500 h-2 rounded-full" [style.width.%]="activePercent"></div>\r
                </div>\r
                <div class="text-right text-xs text-gray-500">{{ activePercent }}%</div>\r
                \r
                <div class="flex items-center justify-between mt-4">\r
                  <div class="flex items-center space-x-2">\r
                    <div class="w-3 h-3 bg-blue-500 rounded-full"></div>\r
                    <span class="text-sm text-gray-700">Uncategorized</span>\r
                  </div>\r
                  <div class="text-sm text-gray-900">{{ data?.asset_health.uncategorized ?? 0 }}</div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Maintenance Insights -->\r
            <div>\r
              <h4 class="text-sm font-medium text-gray-700 mb-4">Maintenance Insights</h4>\r
              <div class="text-center mb-6">\r
                <div class="text-4xl font-bold text-blue-600 mb-2">{{ data?.asset_health.average_health_score ?? 0 }}%</div>\r
                <div class="text-sm text-gray-600">Average Health Score</div>\r
              </div>\r
              \r
              <div class="space-y-4">\r
                <div class="flex justify-between items-center">\r
                  <span class="text-sm text-gray-600">Completion Rate</span>\r
                  <span class="text-sm font-medium text-green-600">{{ data?.maintenance_insights.completion_rate ?? 0 }}%</span>\r
                </div>\r
                <div class="flex justify-between items-center">\r
                  <span class="text-sm text-gray-600">Avg Days to Complete</span>\r
                  <span class="text-sm font-medium text-gray-900">{{ data?.maintenance_insights.avg_days_to_complete ?? 0 }}</span>\r
                </div>\r
              </div>\r
\r
              <div class="mt-6 space-y-3">\r
                <div class="flex items-center justify-between">\r
                  <span class="text-sm text-gray-600">Total Work Orders</span>\r
                  <span class="text-sm font-medium text-gray-900">{{ data?.maintenance_insights.total_work_orders ?? 0 }}</span>\r
                </div>\r
                <div class="flex items-center justify-between">\r
                  <span class="text-sm text-gray-600">Scheduled This Week</span>\r
                  <span class="text-sm font-medium text-gray-900">{{ data?.maintenance_insights.scheduled_this_week ?? 0 }}</span>\r
                </div>\r
                <div class="flex items-center justify-between">\r
                  <span class="text-sm text-gray-600">Overdue</span>\r
                  <span class="text-sm font-medium text-red-600">{{ data?.maintenance_insights.overdue ?? 0 }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Right Column -->\r
        <div class="space-y-6">\r
          <!-- Transfer Approvals -->\r
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
            <div class="flex items-center space-x-2 mb-4">\r
              <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">\r
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>\r
              </svg>\r
              <h3 class="text-lg font-semibold text-gray-900">Transfer Approvals</h3>\r
            </div>\r
            <ng-container *ngIf="(data?.transfer_approvals ?? 0) > 0; else noApprovals">\r
              <p class="text-gray-700"><span class="font-semibold">{{ data?.transfer_approvals }}</span> pending transfer approval(s)</p>\r
            </ng-container>\r
            <ng-template #noApprovals>\r
              <p class="text-gray-600">No pending transfer approvals</p>\r
            </ng-template>\r
          </div>\r
\r
          <!-- AI Insights -->\r
          <div *ngIf="showAiInsights" class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
            <div class="flex items-center justify-between mb-4">\r
              <div class="flex items-center space-x-2">\r
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
                </svg>\r
                <h3 class="text-lg font-semibold text-gray-900">AI Insights</h3>\r
              </div>\r
              <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">AI Active</span>\r
            </div>\r
            <p class="text-sm text-gray-600 mb-4">Smart recommendations</p>\r
            \r
            <!-- AI Chat Button -->\r
            <button class="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center cursor-pointer">\r
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
</div>` }]
  }], () => [{ type: DashboardService }], { assetHealthChartRef: [{
    type: ViewChild,
    args: ["assetHealthChart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/dashboard/dashboard.component.ts", lineNumber: 16 });
})();

// src/app/dashboard/dashboard-routing.module.ts
var routes = [
  { path: "", component: DashboardComponent }
];
var DashboardRoutingModule = class _DashboardRoutingModule {
  static \u0275fac = function DashboardRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/dashboard/dashboard.module.ts
var DashboardModule = class _DashboardModule {
  static \u0275fac = function DashboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    DashboardRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DashboardComponent
      ],
      imports: [
        CommonModule,
        DashboardRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  DashboardModule
};
//# sourceMappingURL=chunk-KZQS2FD4.js.map
