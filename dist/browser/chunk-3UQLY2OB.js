import {
  InventoryAnalyticsService
} from "./chunk-ILYFWJC3.js";
import "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  DecimalPipe,
  NgIf
} from "./chunk-MMJF4Y5E.js";
import {
  Component,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YUR5IGOK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/inventory/components/dashboard-overview/dashboard-overview.component.ts
function DashboardOverviewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard data...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardOverviewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function DashboardOverviewComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 15);
    \u0275\u0275element(7, "path", 7);
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
function DashboardOverviewComponent_div_3_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Need immediate attention ");
    \u0275\u0275elementEnd();
  }
}
function DashboardOverviewComponent_div_3_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, "All items well stocked");
    \u0275\u0275elementEnd();
  }
}
function DashboardOverviewComponent_div_3_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h4", 22);
    \u0275\u0275text(3, "Average Turnover");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 43);
    \u0275\u0275text(11, "Times per year");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 1, (tmp_3_0 = (tmp_3_0 = ctx_r1.dashboardData.average_turnover) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ctx_r1.turnoverData == null ? null : ctx_r1.turnoverData.turnover) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0, "1.1-2"), "x");
  }
}
function DashboardOverviewComponent_div_3_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h4", 22);
    \u0275\u0275text(3, "Slow Moving Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.dashboardData.slow_moving_count) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : (ctx_r1.agingData == null ? null : ctx_r1.agingData.slow_moving == null ? null : ctx_r1.agingData.slow_moving.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.slowThresholdDays, "+ days without movement");
  }
}
function DashboardOverviewComponent_div_3_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 48);
    \u0275\u0275element(3, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 50);
    \u0275\u0275text(5, "Active Reorder Alerts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51)(7, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 53);
    \u0275\u0275element(9, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 54)(11, "span", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 56);
    \u0275\u0275text(14, "Need reordering attention");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 57)(16, "span", 58);
    \u0275\u0275text(17, "high");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r1.dashboardData.low_stock_count, " parts");
  }
}
function DashboardOverviewComponent_div_3_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "path", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 62);
    \u0275\u0275text(4, "All Good!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 63);
    \u0275\u0275text(6, "No reorder alerts at this time. All inventory levels are healthy.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardOverviewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 16)(2, "h2", 17);
    \u0275\u0275text(3, "Inventory Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function DashboardOverviewComponent_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 15);
    \u0275\u0275element(6, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Refresh ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 19)(9, "div", 20)(10, "div", 21)(11, "h4", 22);
    \u0275\u0275text(12, "Total Inventory Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 6);
    \u0275\u0275element(15, "path", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 25);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 15);
    \u0275\u0275element(20, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Real-time data ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 20)(23, "div", 21)(24, "h4", 22);
    \u0275\u0275text(25, "Parts at Reorder Point");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 6);
    \u0275\u0275element(28, "path", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 29);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, DashboardOverviewComponent_div_3_div_31_Template, 2, 0, "div", 30)(32, DashboardOverviewComponent_div_3_ng_template_32_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, DashboardOverviewComponent_div_3_div_34_Template, 12, 4, "div", 31)(35, DashboardOverviewComponent_div_3_div_35_Template, 11, 2, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 32)(37, "div", 33)(38, "h4", 34);
    \u0275\u0275text(39, "Class A Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 35)(41, "div", 36)(42, "span", 37);
    \u0275\u0275text(43, "Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 38);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 36)(47, "span", 37);
    \u0275\u0275text(48, "Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 38);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 36)(52, "span", 37);
    \u0275\u0275text(53, "Percentage:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 38);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 39);
    \u0275\u0275element(57, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 33)(59, "h4", 34);
    \u0275\u0275text(60, "Class B Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 35)(62, "div", 36)(63, "span", 37);
    \u0275\u0275text(64, "Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 38);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 36)(68, "span", 37);
    \u0275\u0275text(69, "Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 38);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 36)(73, "span", 37);
    \u0275\u0275text(74, "Percentage:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 38);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 39);
    \u0275\u0275element(78, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 33)(80, "h4", 34);
    \u0275\u0275text(81, "Class C Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 35)(83, "div", 36)(84, "span", 37);
    \u0275\u0275text(85, "Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 38);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 36)(89, "span", 37);
    \u0275\u0275text(90, "Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 38);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 36)(94, "span", 37);
    \u0275\u0275text(95, "Percentage:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 38);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 39);
    \u0275\u0275element(99, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(100, DashboardOverviewComponent_div_3_div_100_Template, 18, 1, "div", 41)(101, DashboardOverviewComponent_div_3_div_101_Template, 7, 0, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noLowStock_r4 = \u0275\u0275reference(33);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("$", ctx_r1.dashboardData.total_value.toLocaleString(), "");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.dashboardData.low_stock_count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dashboardData.low_stock_count > 0)("ngIfElse", noLowStock_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.dashboardData.average_turnover !== void 0 || ctx_r1.turnoverData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dashboardData.slow_moving_count !== void 0 || ctx_r1.agingData);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.abcSummary.classA.count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.abcSummary.classA.value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.abcSummary.classA.percentage.toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.abcSummary.classA.percentage, "%");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.abcSummary.classB.count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.abcSummary.classB.value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.abcSummary.classB.percentage.toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.abcSummary.classB.percentage, "%");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.abcSummary.classC.count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.abcSummary.classC.value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.abcSummary.classC.percentage.toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.abcSummary.classC.percentage, "%");
    \u0275\u0275advance();
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
  // Added analytics snippets for overview cards
  turnoverData = null;
  agingData = null;
  slowThresholdDays = 90;
  // ABC summary for overview
  abcSummary = {
    classA: { count: 0, value: 0, percentage: 0 },
    classB: { count: 0, value: 0, percentage: 0 },
    classC: { count: 0, value: 0, percentage: 0 },
    totalValue: 0
  };
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.loadDashboardData();
    this.loadAbcSummary();
    this.loadTurnover();
    this.loadStockAging();
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
    this.loadAbcSummary();
    this.loadTurnover();
    this.loadStockAging();
  }
  loadAbcSummary() {
    this.analyticsService.getAbcAnalysis().subscribe({
      next: (response) => {
        if (response.success) {
          this.calculateAbcSummary(response.data);
        }
      },
      error: (err) => {
        console.error("Error loading ABC analysis for overview:", err);
      }
    });
  }
  loadTurnover() {
    this.analyticsService.getTurnover({ period: "6m" }).subscribe({
      next: (res) => {
        if (res.success) {
          this.turnoverData = res.data;
          this.dashboardData = __spreadProps(__spreadValues({}, this.dashboardData), {
            average_turnover: res.data.turnover
          });
        }
      },
      error: (err) => {
        console.error("Error loading turnover for overview:", err);
      }
    });
  }
  loadStockAging() {
    this.analyticsService.getStockAging().subscribe({
      next: (res) => {
        if (res.success) {
          this.agingData = res.data;
          const buckets = res.data.buckets || [];
          const last = buckets[buckets.length - 1];
          if (last && typeof last.days_from === "number") {
            this.slowThresholdDays = last.days_from;
          }
          this.dashboardData = __spreadProps(__spreadValues({}, this.dashboardData), {
            slow_moving_count: res.data.slow_moving?.length || 0
          });
        }
      },
      error: (err) => {
        console.error("Error loading stock aging for overview:", err);
      }
    });
  }
  calculateAbcSummary(items) {
    const classA = items.filter((i) => i.class === "A");
    const classB = items.filter((i) => i.class === "B");
    const classC = items.filter((i) => i.class === "C");
    const totalValue = items.reduce((sum, i) => sum + (i.value || 0), 0);
    const valueA = classA.reduce((sum, i) => sum + (i.value || 0), 0);
    const valueB = classB.reduce((sum, i) => sum + (i.value || 0), 0);
    const valueC = classC.reduce((sum, i) => sum + (i.value || 0), 0);
    this.abcSummary = {
      classA: {
        count: classA.length,
        value: valueA,
        percentage: totalValue > 0 ? valueA / totalValue * 100 : 0
      },
      classB: {
        count: classB.length,
        value: valueB,
        percentage: totalValue > 0 ? valueB / totalValue * 100 : 0
      },
      classC: {
        count: classC.length,
        value: valueC,
        percentage: totalValue > 0 ? valueC / totalValue * 100 : 0
      },
      totalValue
    };
  }
  formatCurrency(amount) {
    return `$${amount.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  static \u0275fac = function DashboardOverviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardOverviewComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardOverviewComponent, selectors: [["app-dashboard-overview"]], decls: 7, vars: 3, consts: [["noLowStock", ""], [1, "dashboard-overview"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["title", "Refresh Dashboard", 1, "fab", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "dashboard-header"], [1, "dashboard-title"], ["title", "Refresh Data", 1, "btn", "btn-secondary", 3, "click"], [1, "metrics-row"], [1, "metric-card"], [1, "card-header"], [1, "card-title"], [1, "card-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "card-value"], [1, "card-trend", "positive"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 10l7-7m0 0l7 7m-7-7v18"], [1, "card-icon", "warning"], [1, "card-value", "warning"], ["class", "card-message", 4, "ngIf", "ngIfElse"], ["class", "metric-card", 4, "ngIf"], [1, "classification-row"], [1, "classification-card"], [1, "classification-title"], [1, "classification-stats"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], [1, "progress-bar"], [1, "progress-fill"], ["class", "alerts-section", 4, "ngIf"], ["class", "no-alerts", 4, "ngIf"], [1, "card-message"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 3v4h4M21 21v-4h-4M3 17v4h4M21 7V3h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "alerts-section"], [1, "alerts-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "alerts-title"], [1, "alert-item"], [1, "alert-left"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "warning-icon"], [1, "alert-content"], [1, "alert-part"], [1, "alert-details"], [1, "alert-right"], [1, "priority-tag", "high"], [1, "no-alerts"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "no-alerts-title"], [1, "no-alerts-description"]], template: function DashboardOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, DashboardOverviewComponent_div_1_Template, 4, 0, "div", 2)(2, DashboardOverviewComponent_div_2_Template, 9, 1, "div", 3)(3, DashboardOverviewComponent_div_3_Template, 102, 23, "div", 4);
      \u0275\u0275elementStart(4, "button", 5);
      \u0275\u0275listener("click", function DashboardOverviewComponent_Template_button_click_4_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 6);
      \u0275\u0275element(6, "path", 7);
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
  }, dependencies: [CommonModule, NgIf, DecimalPipe], styles: ["\n\n.dashboard-overview[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: #f3f4f6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-icon.warning[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-value.danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-trend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-trend.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-trend[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-message[_ngcontent-%COMP%], \n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-unit[_ngcontent-%COMP%], \n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1rem 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background-color: #f3f4f6;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #3b82f6;\n  transition: width 0.3s ease;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alerts-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alerts-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alerts-header[_ngcontent-%COMP%]   .alerts-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-part[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-details[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .priority-tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .priority-tag.high[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.dashboard-overview[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .no-alerts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .no-alerts[_ngcontent-%COMP%]   .no-alerts-title[_ngcontent-%COMP%] {\n  color: #059669;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .no-alerts[_ngcontent-%COMP%]   .no-alerts-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n/*# sourceMappingURL=dashboard-overview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardOverviewComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-overview", standalone: true, imports: [CommonModule], template: `<div class="dashboard-overview">\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Loading dashboard data...</p>\r
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
  <!-- Dashboard Content -->\r
  <div *ngIf="!loading && !error">\r
    <!-- Header with Refresh Button -->\r
    <div class="dashboard-header">\r
      <h2 class="dashboard-title">Inventory Overview</h2>\r
      <button class="btn btn-secondary" (click)="refreshData()" title="Refresh Data">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
        </svg>\r
        Refresh\r
      </button>\r
    </div>\r
\r
    <!-- Top Row - Metric Cards -->\r
    <div class="metrics-row">\r
      <div class="metric-card">\r
        <div class="card-header">\r
          <h4 class="card-title">Total Inventory Value</h4>\r
          <div class="card-icon">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="card-value">\${{ dashboardData.total_value.toLocaleString() }}</div>\r
        <div class="card-trend positive">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>\r
          </svg>\r
          Real-time data\r
        </div>\r
      </div>\r
\r
      \r
\r
      <div class="metric-card">\r
        <div class="card-header">\r
          <h4 class="card-title">Parts at Reorder Point</h4>\r
          <div class="card-icon warning">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="card-value warning">{{ dashboardData.low_stock_count }}</div>\r
        <div class="card-message" *ngIf="dashboardData.low_stock_count > 0; else noLowStock">\r
          Need immediate attention\r
        </div>\r
        <ng-template #noLowStock>\r
          <div class="card-message">All items well stocked</div>\r
        </ng-template>\r
      </div>\r
\r
      \r
\r
      <!-- New: Average Turnover Card (from overview or turnoverData) -->\r
      <div class="metric-card" *ngIf="(dashboardData.average_turnover !== undefined) || turnoverData">\r
        <div class="card-header">\r
          <h4 class="card-title">Average Turnover</h4>\r
          <div class="card-icon">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v4h4M21 21v-4h-4M3 17v4h4M21 7V3h-4"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="card-value">{{ (dashboardData.average_turnover ?? turnoverData?.turnover ?? 0) | number:'1.1-2' }}x</div>\r
        <div class="card-message">Times per year</div>\r
      </div>\r
\r
      <!-- New: Slow Moving Items Card (from overview or agingData) -->\r
      <div class="metric-card" *ngIf="(dashboardData.slow_moving_count !== undefined) || agingData">\r
        <div class="card-header">\r
          <h4 class="card-title">Slow Moving Items</h4>\r
          <div class="card-icon">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="card-value">{{ dashboardData.slow_moving_count ?? (agingData?.slow_moving?.length || 0) }}</div>\r
        <div class="card-message">{{ slowThresholdDays }}+ days without movement</div>\r
      </div>\r
    </div>\r
\r
    <!-- Middle Row - Classification Cards -->\r
    <div class="classification-row">\r
      <div class="classification-card">\r
        <h4 class="classification-title">Class A Items</h4>\r
        <div class="classification-stats">\r
          <div class="stat-item">\r
            <span class="stat-label">Count:</span>\r
            <span class="stat-value">{{ abcSummary.classA.count }}</span>\r
          </div>\r
          <div class="stat-item">\r
            <span class="stat-label">Value:</span>\r
            <span class="stat-value">{{ formatCurrency(abcSummary.classA.value) }}</span>\r
          </div>\r
          <div class="stat-item">\r
            <span class="stat-label">Percentage:</span>\r
            <span class="stat-value">{{ abcSummary.classA.percentage.toFixed(1) }}%</span>\r
          </div>\r
        </div>\r
        <div class="progress-bar">\r
          <div class="progress-fill" [style.width.%]="abcSummary.classA.percentage"></div>\r
        </div>\r
      </div>\r
\r
      <div class="classification-card">\r
        <h4 class="classification-title">Class B Items</h4>\r
        <div class="classification-stats">\r
          <div class="stat-item">\r
            <span class="stat-label">Count:</span>\r
            <span class="stat-value">{{ abcSummary.classB.count }}</span>\r
          </div>\r
          <div class="stat-item">\r
            <span class="stat-label">Value:</span>\r
            <span class="stat-value">{{ formatCurrency(abcSummary.classB.value) }}</span>\r
          </div>\r
          <div class="stat-item">\r
            <span class="stat-label">Percentage:</span>\r
            <span class="stat-value">{{ abcSummary.classB.percentage.toFixed(1) }}%</span>\r
          </div>\r
        </div>\r
        <div class="progress-bar">\r
          <div class="progress-fill" [style.width.%]="abcSummary.classB.percentage"></div>\r
        </div>\r
      </div>\r
\r
      <div class="classification-card">\r
        <h4 class="classification-title">Class C Items</h4>\r
        <div class="classification-stats">\r
          <div class="stat-item">\r
            <span class="stat-label">Count:</span>\r
            <span class="stat-value">{{ abcSummary.classC.count }}</span>\r
          </div>\r
          <div class="stat-item">\r
            <span class="stat-label">Value:</span>\r
            <span class="stat-value">{{ formatCurrency(abcSummary.classC.value) }}</span>\r
          </div>\r
          <div class="stat-item">\r
            <span class="stat-label">Percentage:</span>\r
            <span class="stat-value">{{ abcSummary.classC.percentage.toFixed(1) }}%</span>\r
          </div>\r
        </div>\r
        <div class="progress-bar">\r
          <div class="progress-fill" [style.width.%]="abcSummary.classC.percentage"></div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Bottom Section - Active Reorder Alerts -->\r
    <div class="alerts-section" *ngIf="dashboardData.low_stock_count > 0">\r
      <div class="alerts-header">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>\r
        </svg>\r
        <h4 class="alerts-title">Active Reorder Alerts</h4>\r
      </div>\r
      \r
      <div class="alert-item">\r
        <div class="alert-left">\r
          <svg class="w-5 h-5 warning-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
          </svg>\r
          <div class="alert-content">\r
            <span class="alert-part">{{ dashboardData.low_stock_count }} parts</span>\r
            <span class="alert-details">Need reordering attention</span>\r
          </div>\r
        </div>\r
        <div class="alert-right">\r
          <span class="priority-tag high">high</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- No Alerts Message -->\r
    <div class="no-alerts" *ngIf="dashboardData.low_stock_count === 0">\r
      <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
      <h3 class="no-alerts-title">All Good!</h3>\r
      <p class="no-alerts-description">No reorder alerts at this time. All inventory levels are healthy.</p>\r
    </div>\r
  </div>\r
\r
  <!-- Floating Action Button -->\r
  <button class="fab" (click)="refreshData()" title="Refresh Dashboard">\r
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
    </svg>\r
  </button>\r
</div>\r
`, styles: ["/* src/app/inventory/components/dashboard-overview/dashboard-overview.component.scss */\n.dashboard-overview {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-overview .metrics-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview .metrics-row .metric-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .metrics-row .metric-card .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.dashboard-overview .metrics-row .metric-card .card-header .card-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview .metrics-row .metric-card .card-header .card-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: #f3f4f6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n}\n.dashboard-overview .metrics-row .metric-card .card-header .card-icon.warning {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.dashboard-overview .metrics-row .metric-card .card-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview .metrics-row .metric-card .card-value.warning {\n  color: #f59e0b;\n}\n.dashboard-overview .metrics-row .metric-card .card-value.danger {\n  color: #ef4444;\n}\n.dashboard-overview .metrics-row .metric-card .card-trend {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.dashboard-overview .metrics-row .metric-card .card-trend.positive {\n  color: #10b981;\n}\n.dashboard-overview .metrics-row .metric-card .card-trend svg {\n  color: #10b981;\n}\n.dashboard-overview .metrics-row .metric-card .card-message,\n.dashboard-overview .metrics-row .metric-card .card-unit,\n.dashboard-overview .metrics-row .metric-card .card-description {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview .classification-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview .classification-row .classification-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .classification-row .classification-card .classification-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1rem 0;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats {\n  margin-bottom: 1rem;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats .stat-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats .stat-item .stat-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats .stat-item .stat-value {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n.dashboard-overview .classification-row .classification-card .progress-bar {\n  width: 100%;\n  height: 4px;\n  background-color: #f3f4f6;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.dashboard-overview .classification-row .classification-card .progress-bar .progress-fill {\n  height: 100%;\n  background-color: #3b82f6;\n  transition: width 0.3s ease;\n}\n.dashboard-overview .alerts-section {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .alerts-section .alerts-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.dashboard-overview .alerts-section .alerts-header svg {\n  color: #6b7280;\n}\n.dashboard-overview .alerts-section .alerts-header .alerts-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview .alerts-section .alert-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .warning-icon {\n  color: #ef4444;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .alert-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .alert-content .alert-part {\n  font-weight: 600;\n  color: #111827;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .alert-content .alert-details {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview .alerts-section .alert-item .alert-right .priority-tag {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.dashboard-overview .alerts-section .alert-item .alert-right .priority-tag.high {\n  background-color: #ef4444;\n  color: white;\n}\n.dashboard-overview .fab {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.dashboard-overview .fab:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.dashboard-overview .fab svg {\n  color: white;\n}\n.dashboard-overview .content-area {\n  min-height: 400px;\n}\n.dashboard-overview .loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.dashboard-overview .loading-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.dashboard-overview .loading-state p {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.dashboard-overview .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.dashboard-overview .error-state .error-title {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.dashboard-overview .error-state .btn {\n  margin-top: 1rem;\n}\n.dashboard-overview .dashboard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.dashboard-overview .dashboard-header .dashboard-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview .dashboard-header .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n.dashboard-overview .dashboard-header .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.dashboard-overview .dashboard-header .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.dashboard-overview .no-alerts {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .no-alerts .no-alerts-title {\n  color: #059669;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.dashboard-overview .no-alerts .no-alerts-description {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n/*# sourceMappingURL=dashboard-overview.component.css.map */\n"] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardOverviewComponent, { className: "DashboardOverviewComponent", filePath: "src/app/inventory/components/dashboard-overview/dashboard-overview.component.ts", lineNumber: 12 });
})();
export {
  DashboardOverviewComponent
};
//# sourceMappingURL=chunk-3UQLY2OB.js.map
