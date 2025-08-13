import {
  InventoryAnalyticsService
} from "./chunk-JOTUIW65.js";
import "./chunk-5YESG6NV.js";
import "./chunk-TS6BXV7E.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BHMN65X2.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/dashboard-overview/dashboard-overview.component.ts
function DashboardOverviewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard data...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardOverviewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function DashboardOverviewComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 16);
    \u0275\u0275element(7, "path", 8);
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
function DashboardOverviewComponent_div_3_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Need immediate attention ");
    \u0275\u0275elementEnd();
  }
}
function DashboardOverviewComponent_div_3_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, "All items well stocked");
    \u0275\u0275elementEnd();
  }
}
function DashboardOverviewComponent_div_3_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " Items with zero stock ");
    \u0275\u0275elementEnd();
  }
}
function DashboardOverviewComponent_div_3_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "All items in stock");
    \u0275\u0275elementEnd();
  }
}
function DashboardOverviewComponent_div_3_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 51);
    \u0275\u0275element(3, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 53);
    \u0275\u0275text(5, "Active Reorder Alerts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 54)(7, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 56);
    \u0275\u0275element(9, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 57)(11, "span", 58);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 59);
    \u0275\u0275text(14, "Need reordering attention");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 60)(16, "span", 61);
    \u0275\u0275text(17, "high");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r1.dashboardData.low_stock_count, " parts");
  }
}
function DashboardOverviewComponent_div_3_div_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 63);
    \u0275\u0275element(2, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 65);
    \u0275\u0275text(4, "All Good!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 66);
    \u0275\u0275text(6, "No reorder alerts at this time. All inventory levels are healthy.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardOverviewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 17)(2, "h2", 18);
    \u0275\u0275text(3, "Inventory Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function DashboardOverviewComponent_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 16);
    \u0275\u0275element(6, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Refresh ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 20)(9, "div", 21)(10, "div", 22)(11, "h4", 23);
    \u0275\u0275text(12, "Total Inventory Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 7);
    \u0275\u0275element(15, "path", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 26);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 16);
    \u0275\u0275element(20, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Real-time data ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 21)(23, "div", 22)(24, "h4", 23);
    \u0275\u0275text(25, "Total Parts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 7);
    \u0275\u0275element(28, "path", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 26);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 30);
    \u0275\u0275text(32, "Items in catalog");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 21)(34, "div", 22)(35, "h4", 23);
    \u0275\u0275text(36, "Parts at Reorder Point");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 7);
    \u0275\u0275element(39, "path", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 32);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, DashboardOverviewComponent_div_3_div_42_Template, 2, 0, "div", 33)(43, DashboardOverviewComponent_div_3_ng_template_43_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 21)(46, "div", 22)(47, "h4", 23);
    \u0275\u0275text(48, "Out of Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 7);
    \u0275\u0275element(51, "path", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "div", 35);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, DashboardOverviewComponent_div_3_div_54_Template, 2, 0, "div", 36)(55, DashboardOverviewComponent_div_3_ng_template_55_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 37)(58, "div", 38)(59, "h4", 39);
    \u0275\u0275text(60, "Class A Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 40)(62, "div", 41)(63, "span", 42);
    \u0275\u0275text(64, "Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 43);
    \u0275\u0275text(66, "-");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 41)(68, "span", 42);
    \u0275\u0275text(69, "Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 43);
    \u0275\u0275text(71, "-");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 41)(73, "span", 42);
    \u0275\u0275text(74, "Percentage:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 43);
    \u0275\u0275text(76, "-");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 44);
    \u0275\u0275element(78, "div", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 38)(80, "h4", 39);
    \u0275\u0275text(81, "Class B Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 40)(83, "div", 41)(84, "span", 42);
    \u0275\u0275text(85, "Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 43);
    \u0275\u0275text(87, "-");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 41)(89, "span", 42);
    \u0275\u0275text(90, "Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 43);
    \u0275\u0275text(92, "-");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 41)(94, "span", 42);
    \u0275\u0275text(95, "Percentage:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 43);
    \u0275\u0275text(97, "-");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 44);
    \u0275\u0275element(99, "div", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 38)(101, "h4", 39);
    \u0275\u0275text(102, "Class C Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 40)(104, "div", 41)(105, "span", 42);
    \u0275\u0275text(106, "Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span", 43);
    \u0275\u0275text(108, "-");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 41)(110, "span", 42);
    \u0275\u0275text(111, "Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 43);
    \u0275\u0275text(113, "-");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 41)(115, "span", 42);
    \u0275\u0275text(116, "Percentage:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "span", 43);
    \u0275\u0275text(118, "-");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(119, "div", 44);
    \u0275\u0275element(120, "div", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(121, DashboardOverviewComponent_div_3_div_121_Template, 18, 1, "div", 46)(122, DashboardOverviewComponent_div_3_div_122_Template, 7, 0, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noLowStock_r4 = \u0275\u0275reference(44);
    const noOutOfStock_r5 = \u0275\u0275reference(56);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("$", ctx_r1.dashboardData.total_value.toLocaleString(), "");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.dashboardData.total_parts);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.dashboardData.low_stock_count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dashboardData.low_stock_count > 0)("ngIfElse", noLowStock_r4);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.dashboardData.out_of_stock_count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dashboardData.out_of_stock_count > 0)("ngIfElse", noOutOfStock_r5);
    \u0275\u0275advance(67);
    \u0275\u0275property("ngIf", ctx_r1.dashboardData.low_stock_count > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dashboardData.low_stock_count === 0);
  }
}
var DashboardOverviewComponent = class _DashboardOverviewComponent {
  analyticsService;
  dashboardData = {
    total_value: 0,
    total_parts: 0,
    low_stock_count: 0,
    out_of_stock_count: 0
  };
  loading = true;
  error = null;
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.loading = true;
    this.error = null;
    this.analyticsService.getDashboardData().subscribe({
      next: (response) => {
        if (response.success) {
          this.dashboardData = response.data;
        } else {
          this.error = "Failed to load dashboard data";
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading dashboard data:", err);
        this.error = "Error loading dashboard data. Please try again.";
        this.loading = false;
      }
    });
  }
  refreshData() {
    this.loadDashboardData();
  }
  static \u0275fac = function DashboardOverviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardOverviewComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardOverviewComponent, selectors: [["app-dashboard-overview"]], decls: 7, vars: 3, consts: [["noLowStock", ""], ["noOutOfStock", ""], [1, "dashboard-overview"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["title", "Refresh Dashboard", 1, "fab", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "dashboard-header"], [1, "dashboard-title"], ["title", "Refresh Data", 1, "btn", "btn-secondary", 3, "click"], [1, "metrics-row"], [1, "metric-card"], [1, "card-header"], [1, "card-title"], [1, "card-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "card-value"], [1, "card-trend", "positive"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 10l7-7m0 0l7 7m-7-7v18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "card-message"], [1, "card-icon", "warning"], [1, "card-value", "warning"], ["class", "card-message", 4, "ngIf", "ngIfElse"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "card-value", "danger"], ["class", "card-description", 4, "ngIf", "ngIfElse"], [1, "classification-row"], [1, "classification-card"], [1, "classification-title"], [1, "classification-stats"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], [1, "progress-bar"], [1, "progress-fill", 2, "width", "0%"], ["class", "alerts-section", 4, "ngIf"], ["class", "no-alerts", 4, "ngIf"], [1, "card-description"], [1, "alerts-section"], [1, "alerts-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "alerts-title"], [1, "alert-item"], [1, "alert-left"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "warning-icon"], [1, "alert-content"], [1, "alert-part"], [1, "alert-details"], [1, "alert-right"], [1, "priority-tag", "high"], [1, "no-alerts"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "no-alerts-title"], [1, "no-alerts-description"]], template: function DashboardOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, DashboardOverviewComponent_div_1_Template, 4, 0, "div", 3)(2, DashboardOverviewComponent_div_2_Template, 9, 1, "div", 4)(3, DashboardOverviewComponent_div_3_Template, 123, 10, "div", 5);
      \u0275\u0275elementStart(4, "button", 6);
      \u0275\u0275listener("click", function DashboardOverviewComponent_Template_button_click_4_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 7);
      \u0275\u0275element(6, "path", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.dashboard-overview[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: #f3f4f6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-icon.warning[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-value.danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-trend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-trend.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-trend[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-message[_ngcontent-%COMP%], \n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-unit[_ngcontent-%COMP%], \n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1rem 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background-color: #f3f4f6;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #3b82f6;\n  transition: width 0.3s ease;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alerts-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alerts-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alerts-header[_ngcontent-%COMP%]   .alerts-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-part[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-details[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .priority-tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .priority-tag.high[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.dashboard-overview[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .no-alerts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .no-alerts[_ngcontent-%COMP%]   .no-alerts-title[_ngcontent-%COMP%] {\n  color: #059669;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .no-alerts[_ngcontent-%COMP%]   .no-alerts-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n/*# sourceMappingURL=dashboard-overview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardOverviewComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-overview", standalone: true, imports: [CommonModule], template: '<div class="dashboard-overview">\r\n  <!-- Loading State -->\r\n  <div *ngIf="loading" class="loading-state">\r\n    <div class="loading-spinner"></div>\r\n    <p>Loading dashboard data...</p>\r\n  </div>\r\n\r\n  <!-- Error State -->\r\n  <div *ngIf="error && !loading" class="error-state">\r\n    <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n    </svg>\r\n    <h3 class="error-title">{{ error }}</h3>\r\n    <button class="btn btn-primary" (click)="refreshData()">\r\n      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r\n      </svg>\r\n      Retry\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Dashboard Content -->\r\n  <div *ngIf="!loading && !error">\r\n    <!-- Header with Refresh Button -->\r\n    <div class="dashboard-header">\r\n      <h2 class="dashboard-title">Inventory Overview</h2>\r\n      <button class="btn btn-secondary" (click)="refreshData()" title="Refresh Data">\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r\n        </svg>\r\n        Refresh\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Top Row - Metric Cards -->\r\n    <div class="metrics-row">\r\n      <div class="metric-card">\r\n        <div class="card-header">\r\n          <h4 class="card-title">Total Inventory Value</h4>\r\n          <div class="card-icon">\r\n            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r\n            </svg>\r\n          </div>\r\n        </div>\r\n        <div class="card-value">${{ dashboardData.total_value.toLocaleString() }}</div>\r\n        <div class="card-trend positive">\r\n          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>\r\n          </svg>\r\n          Real-time data\r\n        </div>\r\n      </div>\r\n\r\n      <div class="metric-card">\r\n        <div class="card-header">\r\n          <h4 class="card-title">Total Parts</h4>\r\n          <div class="card-icon">\r\n            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r\n            </svg>\r\n          </div>\r\n        </div>\r\n        <div class="card-value">{{ dashboardData.total_parts }}</div>\r\n        <div class="card-message">Items in catalog</div>\r\n      </div>\r\n\r\n      <div class="metric-card">\r\n        <div class="card-header">\r\n          <h4 class="card-title">Parts at Reorder Point</h4>\r\n          <div class="card-icon warning">\r\n            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n            </svg>\r\n          </div>\r\n        </div>\r\n        <div class="card-value warning">{{ dashboardData.low_stock_count }}</div>\r\n        <div class="card-message" *ngIf="dashboardData.low_stock_count > 0; else noLowStock">\r\n          Need immediate attention\r\n        </div>\r\n        <ng-template #noLowStock>\r\n          <div class="card-message">All items well stocked</div>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <div class="metric-card">\r\n        <div class="card-header">\r\n          <h4 class="card-title">Out of Stock</h4>\r\n          <div class="card-icon">\r\n            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r\n            </svg>\r\n          </div>\r\n        </div>\r\n        <div class="card-value danger">{{ dashboardData.out_of_stock_count }}</div>\r\n        <div class="card-description" *ngIf="dashboardData.out_of_stock_count > 0; else noOutOfStock">\r\n          Items with zero stock\r\n        </div>\r\n        <ng-template #noOutOfStock>\r\n          <div class="card-description">All items in stock</div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Middle Row - Classification Cards -->\r\n    <div class="classification-row">\r\n      <div class="classification-card">\r\n        <h4 class="classification-title">Class A Items</h4>\r\n        <div class="classification-stats">\r\n          <div class="stat-item">\r\n            <span class="stat-label">Count:</span>\r\n            <span class="stat-value">-</span>\r\n          </div>\r\n          <div class="stat-item">\r\n            <span class="stat-label">Value:</span>\r\n            <span class="stat-value">-</span>\r\n          </div>\r\n          <div class="stat-item">\r\n            <span class="stat-label">Percentage:</span>\r\n            <span class="stat-value">-</span>\r\n          </div>\r\n        </div>\r\n        <div class="progress-bar">\r\n          <div class="progress-fill" style="width: 0%"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="classification-card">\r\n        <h4 class="classification-title">Class B Items</h4>\r\n        <div class="classification-stats">\r\n          <div class="stat-item">\r\n            <span class="stat-label">Count:</span>\r\n            <span class="stat-value">-</span>\r\n          </div>\r\n          <div class="stat-item">\r\n            <span class="stat-label">Value:</span>\r\n            <span class="stat-value">-</span>\r\n          </div>\r\n          <div class="stat-item">\r\n            <span class="stat-label">Percentage:</span>\r\n            <span class="stat-value">-</span>\r\n          </div>\r\n        </div>\r\n        <div class="progress-bar">\r\n          <div class="progress-fill" style="width: 0%"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="classification-card">\r\n        <h4 class="classification-title">Class C Items</h4>\r\n        <div class="classification-stats">\r\n          <div class="stat-item">\r\n            <span class="stat-label">Count:</span>\r\n            <span class="stat-value">-</span>\r\n          </div>\r\n          <div class="stat-item">\r\n            <span class="stat-label">Value:</span>\r\n            <span class="stat-value">-</span>\r\n          </div>\r\n          <div class="stat-item">\r\n            <span class="stat-label">Percentage:</span>\r\n            <span class="stat-value">-</span>\r\n          </div>\r\n        </div>\r\n        <div class="progress-bar">\r\n          <div class="progress-fill" style="width: 0%"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Bottom Section - Active Reorder Alerts -->\r\n    <div class="alerts-section" *ngIf="dashboardData.low_stock_count > 0">\r\n      <div class="alerts-header">\r\n        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>\r\n        </svg>\r\n        <h4 class="alerts-title">Active Reorder Alerts</h4>\r\n      </div>\r\n      \r\n      <div class="alert-item">\r\n        <div class="alert-left">\r\n          <svg class="w-5 h-5 warning-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n          </svg>\r\n          <div class="alert-content">\r\n            <span class="alert-part">{{ dashboardData.low_stock_count }} parts</span>\r\n            <span class="alert-details">Need reordering attention</span>\r\n          </div>\r\n        </div>\r\n        <div class="alert-right">\r\n          <span class="priority-tag high">high</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- No Alerts Message -->\r\n    <div class="no-alerts" *ngIf="dashboardData.low_stock_count === 0">\r\n      <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r\n      </svg>\r\n      <h3 class="no-alerts-title">All Good!</h3>\r\n      <p class="no-alerts-description">No reorder alerts at this time. All inventory levels are healthy.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Floating Action Button -->\r\n  <button class="fab" (click)="refreshData()" title="Refresh Dashboard">\r\n    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r\n    </svg>\r\n  </button>\r\n</div>\r\n', styles: ["/* src/app/inventory/components/dashboard-overview/dashboard-overview.component.scss */\n.dashboard-overview {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-overview .metrics-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview .metrics-row .metric-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .metrics-row .metric-card .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.dashboard-overview .metrics-row .metric-card .card-header .card-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview .metrics-row .metric-card .card-header .card-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: #f3f4f6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n}\n.dashboard-overview .metrics-row .metric-card .card-header .card-icon.warning {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.dashboard-overview .metrics-row .metric-card .card-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview .metrics-row .metric-card .card-value.warning {\n  color: #f59e0b;\n}\n.dashboard-overview .metrics-row .metric-card .card-value.danger {\n  color: #ef4444;\n}\n.dashboard-overview .metrics-row .metric-card .card-trend {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.dashboard-overview .metrics-row .metric-card .card-trend.positive {\n  color: #10b981;\n}\n.dashboard-overview .metrics-row .metric-card .card-trend svg {\n  color: #10b981;\n}\n.dashboard-overview .metrics-row .metric-card .card-message,\n.dashboard-overview .metrics-row .metric-card .card-unit,\n.dashboard-overview .metrics-row .metric-card .card-description {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview .classification-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview .classification-row .classification-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .classification-row .classification-card .classification-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1rem 0;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats {\n  margin-bottom: 1rem;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats .stat-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats .stat-item .stat-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats .stat-item .stat-value {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n.dashboard-overview .classification-row .classification-card .progress-bar {\n  width: 100%;\n  height: 4px;\n  background-color: #f3f4f6;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.dashboard-overview .classification-row .classification-card .progress-bar .progress-fill {\n  height: 100%;\n  background-color: #3b82f6;\n  transition: width 0.3s ease;\n}\n.dashboard-overview .alerts-section {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .alerts-section .alerts-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.dashboard-overview .alerts-section .alerts-header svg {\n  color: #6b7280;\n}\n.dashboard-overview .alerts-section .alerts-header .alerts-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview .alerts-section .alert-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .warning-icon {\n  color: #ef4444;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .alert-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .alert-content .alert-part {\n  font-weight: 600;\n  color: #111827;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .alert-content .alert-details {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview .alerts-section .alert-item .alert-right .priority-tag {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.dashboard-overview .alerts-section .alert-item .alert-right .priority-tag.high {\n  background-color: #ef4444;\n  color: white;\n}\n.dashboard-overview .fab {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.dashboard-overview .fab:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.dashboard-overview .fab svg {\n  color: white;\n}\n.dashboard-overview .content-area {\n  min-height: 400px;\n}\n.dashboard-overview .loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.dashboard-overview .loading-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.dashboard-overview .loading-state p {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.dashboard-overview .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.dashboard-overview .error-state .error-title {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.dashboard-overview .error-state .btn {\n  margin-top: 1rem;\n}\n.dashboard-overview .dashboard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.dashboard-overview .dashboard-header .dashboard-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview .dashboard-header .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n.dashboard-overview .dashboard-header .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.dashboard-overview .dashboard-header .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.dashboard-overview .no-alerts {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .no-alerts .no-alerts-title {\n  color: #059669;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.dashboard-overview .no-alerts .no-alerts-description {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n/*# sourceMappingURL=dashboard-overview.component.css.map */\n"] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardOverviewComponent, { className: "DashboardOverviewComponent", filePath: "src/app/inventory/components/dashboard-overview/dashboard-overview.component.ts", lineNumber: 12 });
})();
export {
  DashboardOverviewComponent
};
//# sourceMappingURL=chunk-FK4TG4NN.js.map
