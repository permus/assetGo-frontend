import {
  AssetService
} from "./chunk-3TM7CNSY.js";
import "./chunk-SXXO6UMD.js";
import {
  RouterModule
} from "./chunk-B4FV4NLG.js";
import "./chunk-5YESG6NV.js";
import "./chunk-7F6J47MM.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IDZXZHOB.js";
import "./chunk-TXDUYLVM.js";

// src/app/dashboard/dashboard.component.ts
function DashboardComponent_div_16__svg_path_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 71);
  }
}
function DashboardComponent_div_16__svg_path_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 72);
  }
}
function DashboardComponent_div_16__svg_path_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 73);
  }
}
function DashboardComponent_div_16__svg_path_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 74);
  }
}
function DashboardComponent_div_16__svg_path_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 75);
  }
}
function DashboardComponent_div_16__svg_path_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 76);
  }
}
function DashboardComponent_div_16__svg_path_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 77);
  }
}
function DashboardComponent_div_16__svg_path_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 78);
  }
}
function DashboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 52)(2, "h3", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 61);
    \u0275\u0275template(6, DashboardComponent_div_16__svg_path_6_Template, 1, 0, "path", 62)(7, DashboardComponent_div_16__svg_path_7_Template, 1, 0, "path", 63)(8, DashboardComponent_div_16__svg_path_8_Template, 1, 0, "path", 64)(9, DashboardComponent_div_16__svg_path_9_Template, 1, 0, "path", 65)(10, DashboardComponent_div_16__svg_path_10_Template, 1, 0, "path", 66)(11, DashboardComponent_div_16__svg_path_11_Template, 1, 0, "path", 67)(12, DashboardComponent_div_16__svg_path_12_Template, 1, 0, "path", 68)(13, DashboardComponent_div_16__svg_path_13_Template, 1, 0, "path", 69);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 70);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 5);
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
var DashboardComponent = class _DashboardComponent {
  assetService;
  destroy$ = new Subject();
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
  constructor(assetService) {
    this.assetService = assetService;
  }
  ngOnInit() {
    this.loadArchiveAnalytics();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadArchiveAnalytics() {
    this.assetService.getArchiveAnalytics().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.archiveAnalytics = response.data;
          this.updateStatsWithAnalytics();
        }
      },
      error: (error) => {
        console.error("Error loading archive analytics:", error);
      }
    });
  }
  updateStatsWithAnalytics() {
    const archivedStat = this.stats.find((stat) => stat.title === "Archived Assets");
    if (archivedStat) {
      archivedStat.value = this.archiveAnalytics.archivedAssets.toString();
      archivedStat.subtitle = `${this.archiveAnalytics.archivedAssets} assets in archive`;
    }
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: false, decls: 117, vars: 1, consts: [[1, "p-6"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-3xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-600"], [1, "flex", "items-center", "space-x-4"], [1, "text-sm", "text-gray-500"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded-lg", "font-medium", "hover:bg-blue-700", "flex", "items-center", "space-x-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6", "mb-8"], ["class", "bg-white rounded-lg p-6 shadow-sm border border-gray-200", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "bg-white", "rounded-lg", "p-6", "shadow-sm", "border", "border-gray-200"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-1"], [1, "text-sm", "text-gray-600"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "text-sm", "font-medium", "text-gray-700", "mb-4"], [1, "flex", "items-center", "justify-center", "mb-4"], [1, "relative", "w-32", "h-32"], ["viewBox", "0 0 36 36", 1, "w-32", "h-32", "transform", "-rotate-90"], ["stroke", "currentColor", "stroke-width", "3", "fill", "none", "d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "text-gray-200"], ["stroke", "currentColor", "stroke-width", "3", "fill", "none", "stroke-dasharray", "96, 100", "d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "text-blue-600"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "text-center"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "space-y-2"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-2"], [1, "w-3", "h-3", "bg-green-500", "rounded-full"], [1, "text-sm", "text-gray-700"], [1, "text-sm", "text-gray-900"], [1, "w-full", "bg-gray-200", "rounded-full", "h-2"], [1, "bg-green-500", "h-2", "rounded-full", 2, "width", "96%"], [1, "text-right", "text-xs", "text-gray-500"], [1, "flex", "items-center", "justify-between", "mt-4"], [1, "w-3", "h-3", "bg-blue-500", "rounded-full"], [1, "text-center", "mb-6"], [1, "text-4xl", "font-bold", "text-blue-600", "mb-2"], [1, "space-y-4"], [1, "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium", "text-green-600"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "mt-6", "space-y-3"], [1, "text-sm", "font-medium", "text-red-600"], [1, "space-y-6"], [1, "bg-white", "rounded-lg", "p-6", "shadow-sm", "border", "border-gray-200"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5", "text-green-600"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "flex", "items-center", "justify-between", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-purple-600"], [1, "text-xs", "bg-green-100", "text-green-800", "px-2", "py-1", "rounded-full"], [1, "text-sm", "text-gray-600", "mb-4"], [1, "fixed", "bottom-6", "right-6", "w-12", "h-12", "bg-blue-600", "text-white", "rounded-full", "shadow-lg", "hover:bg-blue-700", "flex", "items-center", "justify-center", "cursor-pointer"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [1, "text-sm", "font-medium", "text-gray-600"], [3, "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", 4, "ngIf"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Asset Intelligence Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Real-time insights and comprehensive asset management overview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "span", 5);
      \u0275\u0275text(9, "No insights generated yet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 7);
      \u0275\u0275element(12, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Generate New Insights");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275template(16, DashboardComponent_div_16_Template, 18, 13, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div")(21, "h3", 14);
      \u0275\u0275text(22, "Asset & Maintenance Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 15);
      \u0275\u0275text(24, "Comprehensive portfolio distribution and maintenance trends");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div")(27, "h4", 17);
      \u0275\u0275text(28, "Asset Health Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 18)(30, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 20);
      \u0275\u0275element(32, "path", 21)(33, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "div", 25);
      \u0275\u0275text(37, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 26);
      \u0275\u0275text(39, "Total");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 27)(41, "div", 28)(42, "div", 29);
      \u0275\u0275element(43, "div", 30);
      \u0275\u0275elementStart(44, "span", 31);
      \u0275\u0275text(45, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 32);
      \u0275\u0275text(47, "24 assets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 33);
      \u0275\u0275element(49, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 35);
      \u0275\u0275text(51, "96%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 36)(53, "div", 29);
      \u0275\u0275element(54, "div", 37);
      \u0275\u0275elementStart(55, "span", 31);
      \u0275\u0275text(56, "Uncategorized");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 32);
      \u0275\u0275text(58, "8");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "div")(60, "h4", 17);
      \u0275\u0275text(61, "Maintenance Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 38)(63, "div", 39);
      \u0275\u0275text(64, "96%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 15);
      \u0275\u0275text(66, "Average Health Score");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 40)(68, "div", 41)(69, "span", 15);
      \u0275\u0275text(70, "Completion Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span", 42);
      \u0275\u0275text(72, "0%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 41)(74, "span", 15);
      \u0275\u0275text(75, "Avg Days to Complete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 43);
      \u0275\u0275text(77, "0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 44)(79, "div", 28)(80, "span", 15);
      \u0275\u0275text(81, "Total Work Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span", 43);
      \u0275\u0275text(83, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 28)(85, "span", 15);
      \u0275\u0275text(86, "Scheduled This Week");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span", 43);
      \u0275\u0275text(88, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 28)(90, "span", 15);
      \u0275\u0275text(91, "Overdue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 45);
      \u0275\u0275text(93, "1");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(94, "div", 46)(95, "div", 47)(96, "div", 48);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(97, "svg", 49);
      \u0275\u0275element(98, "path", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(99, "h3", 51);
      \u0275\u0275text(100, "Transfer Approvals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "p", 3);
      \u0275\u0275text(102, "No pending transfer approvals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 47)(104, "div", 52)(105, "div", 29);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(106, "svg", 53);
      \u0275\u0275element(107, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(108, "h3", 51);
      \u0275\u0275text(109, "AI Insights");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "span", 54);
      \u0275\u0275text(111, "AI Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "p", 55);
      \u0275\u0275text(113, "Smart recommendations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "button", 56);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(115, "svg", 57);
      \u0275\u0275element(116, "path", 58);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.stats);
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
        <div class="flex items-center space-x-4">\r
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
                <div class="relative w-32 h-32">\r
                  <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">\r
                    <path class="text-gray-200" stroke="currentColor" stroke-width="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>\r
                    <path class="text-blue-600" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="96, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>\r
                  </svg>\r
                  <div class="absolute inset-0 flex items-center justify-center">\r
                    <div class="text-center">\r
                      <div class="text-2xl font-bold text-gray-900">24</div>\r
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
                  <div class="text-sm text-gray-900">24 assets</div>\r
                </div>\r
                <div class="w-full bg-gray-200 rounded-full h-2">\r
                  <div class="bg-green-500 h-2 rounded-full" style="width: 96%"></div>\r
                </div>\r
                <div class="text-right text-xs text-gray-500">96%</div>\r
                \r
                <div class="flex items-center justify-between mt-4">\r
                  <div class="flex items-center space-x-2">\r
                    <div class="w-3 h-3 bg-blue-500 rounded-full"></div>\r
                    <span class="text-sm text-gray-700">Uncategorized</span>\r
                  </div>\r
                  <div class="text-sm text-gray-900">8</div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Maintenance Insights -->\r
            <div>\r
              <h4 class="text-sm font-medium text-gray-700 mb-4">Maintenance Insights</h4>\r
              <div class="text-center mb-6">\r
                <div class="text-4xl font-bold text-blue-600 mb-2">96%</div>\r
                <div class="text-sm text-gray-600">Average Health Score</div>\r
              </div>\r
              \r
              <div class="space-y-4">\r
                <div class="flex justify-between items-center">\r
                  <span class="text-sm text-gray-600">Completion Rate</span>\r
                  <span class="text-sm font-medium text-green-600">0%</span>\r
                </div>\r
                <div class="flex justify-between items-center">\r
                  <span class="text-sm text-gray-600">Avg Days to Complete</span>\r
                  <span class="text-sm font-medium text-gray-900">0</span>\r
                </div>\r
              </div>\r
\r
              <div class="mt-6 space-y-3">\r
                <div class="flex items-center justify-between">\r
                  <span class="text-sm text-gray-600">Total Work Orders</span>\r
                  <span class="text-sm font-medium text-gray-900">2</span>\r
                </div>\r
                <div class="flex items-center justify-between">\r
                  <span class="text-sm text-gray-600">Scheduled This Week</span>\r
                  <span class="text-sm font-medium text-gray-900">0</span>\r
                </div>\r
                <div class="flex items-center justify-between">\r
                  <span class="text-sm text-gray-600">Overdue</span>\r
                  <span class="text-sm font-medium text-red-600">1</span>\r
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
            <p class="text-gray-600">No pending transfer approvals</p>\r
          </div>\r
\r
          <!-- AI Insights -->\r
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
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
  }], () => [{ type: AssetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/dashboard/dashboard.component.ts", lineNumber: 12 });
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
//# sourceMappingURL=chunk-EI2L7QRL.js.map
