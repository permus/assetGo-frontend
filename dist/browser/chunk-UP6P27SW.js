import {
  InventoryAnalyticsService
} from "./chunk-ESHGZUZD.js";
import "./chunk-5YESG6NV.js";
import "./chunk-3DQDTIJW.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-E3IEKUEF.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/analytics/analytics.component.ts
function AnalyticsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading inventory analytics...");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function AnalyticsComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 14);
    \u0275\u0275element(7, "path", 6);
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
function AnalyticsComponent_div_3_div_43_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h3", 41);
    \u0275\u0275text(3, "Inventory Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5, "Real-time data from /api/inventory/analytics/dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "div", 44)(8, "span", 45);
    \u0275\u0275text(9, "Total Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 44)(13, "span", 45);
    \u0275\u0275text(14, "Total Parts:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 46);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 44)(18, "span", 45);
    \u0275\u0275text(19, "Low Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 47);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 44)(23, "span", 45);
    \u0275\u0275text(24, "Out of Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 48);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.dashboardData.total_value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.dashboardData.total_parts.toLocaleString());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.dashboardData.low_stock_count.toLocaleString());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.dashboardData.out_of_stock_count.toLocaleString());
  }
}
function AnalyticsComponent_div_3_div_43_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h3", 41);
    \u0275\u0275text(3, "Dashboard Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5, "Data from /api/inventory/dashboard/overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "div", 44)(8, "span", 45);
    \u0275\u0275text(9, "Total Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 44)(13, "span", 45);
    \u0275\u0275text(14, "Total Parts:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 46);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 44)(18, "span", 45);
    \u0275\u0275text(19, "Low Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 47);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 44)(23, "span", 45);
    \u0275\u0275text(24, "Out of Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 48);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.overviewData.total_value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.overviewData.total_parts.toLocaleString());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.overviewData.low_stock_count.toLocaleString());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.overviewData.out_of_stock_count.toLocaleString());
  }
}
function AnalyticsComponent_div_3_div_43_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h3", 41);
    \u0275\u0275text(3, "ABC Analysis Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5, "Data from /api/inventory/analytics/abc-analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43)(7, "div", 44)(8, "span", 45);
    \u0275\u0275text(9, "Class A Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 44)(13, "span", 45);
    \u0275\u0275text(14, "Class B Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 46);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 44)(18, "span", 45);
    \u0275\u0275text(19, "Class C Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 46);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 44)(23, "span", 45);
    \u0275\u0275text(24, "Total Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 46);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", ctx_r1.abcSummary.classA.count, " (", ctx_r1.abcSummary.classA.percentage.toFixed(1), "%)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.abcSummary.classB.count, " (", ctx_r1.abcSummary.classB.percentage.toFixed(1), "%)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.abcSummary.classC.count, " (", ctx_r1.abcSummary.classC.percentage.toFixed(1), "%)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.abcAnalysisData.length);
  }
}
function AnalyticsComponent_div_3_div_43_div_5_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 55);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.part_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r4.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (item_r4.cumulative_ratio * 100).toFixed(2), "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getAbcClassColor(item_r4.class));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.class, " ");
  }
}
function AnalyticsComponent_div_3_div_43_div_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Showing first 10 items of ", ctx_r1.abcAnalysisData.length, " total items");
  }
}
function AnalyticsComponent_div_3_div_43_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h3", 50);
    \u0275\u0275text(2, "ABC Analysis Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "table", 52)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Part ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Part Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Cumulative Ratio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "ABC Class");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, AnalyticsComponent_div_3_div_43_div_5_tr_18_Template, 12, 7, "tr", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, AnalyticsComponent_div_3_div_43_div_5_div_19_Template, 3, 1, "div", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.abcAnalysisData.slice(0, 10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.abcAnalysisData.length > 10);
  }
}
function AnalyticsComponent_div_3_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275template(2, AnalyticsComponent_div_3_div_43_div_2_Template, 27, 4, "div", 37)(3, AnalyticsComponent_div_3_div_43_div_3_Template, 27, 4, "div", 37)(4, AnalyticsComponent_div_3_div_43_div_4_Template, 27, 7, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AnalyticsComponent_div_3_div_43_div_5_Template, 20, 2, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.dashboardData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.overviewData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.abcAnalysisData.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.abcAnalysisData.length > 0);
  }
}
function AnalyticsComponent_div_3_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 57)(2, "div", 58)(3, "div", 59)(4, "div", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45);
    \u0275\u0275text(7, "Inventory Turnover");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 61);
    \u0275\u0275element(11, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 63)(13, "div", 59)(14, "div", 46);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 45);
    \u0275\u0275text(17, "Carrying Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 64);
    \u0275\u0275text(19, "Monthly holding cost");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 61);
    \u0275\u0275element(21, "path", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 66)(23, "div", 59)(24, "div", 47);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 45);
    \u0275\u0275text(27, "Dead Stock Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 64);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 61);
    \u0275\u0275element(31, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 67)(33, "div", 59)(34, "div", 46);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 45);
    \u0275\u0275text(37, "Avg Days on Hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 64);
    \u0275\u0275text(39, "Average inventory age");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 61);
    \u0275\u0275element(41, "path", 68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 69)(43, "div", 70)(44, "div", 71)(45, "h3", 72);
    \u0275\u0275text(46, "Inventory Turnover by Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 73);
    \u0275\u0275text(48, "How quickly inventory moves across categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 74)(50, "div", 75)(51, "div", 76)(52, "div", 77)(53, "span");
    \u0275\u0275text(54, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 78)(64, "div", 79);
    \u0275\u0275element(65, "div", 80)(66, "div", 80)(67, "div", 80)(68, "div", 80)(69, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 81)(71, "span");
    \u0275\u0275text(72, "News");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(73, "div", 70)(74, "div", 71)(75, "h3", 72);
    \u0275\u0275text(76, "Monthly Turnover Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "p", 73);
    \u0275\u0275text(78, "Turnover ratio over time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 74)(80, "div", 82)(81, "div", 77)(82, "span");
    \u0275\u0275text(83, "3.6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span");
    \u0275\u0275text(85, "2.7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span");
    \u0275\u0275text(87, "1.8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89, "0.9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span");
    \u0275\u0275text(91, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 78)(93, "div", 79);
    \u0275\u0275element(94, "div", 80)(95, "div", 80)(96, "div", 80)(97, "div", 80)(98, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(99, "svg", 83);
    \u0275\u0275element(100, "path", 84)(101, "circle", 85)(102, "circle", 86)(103, "circle", 87)(104, "circle", 88)(105, "circle", 89)(106, "circle", 90)(107, "circle", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(108, "div", 81)(109, "span");
    \u0275\u0275text(110, "Mar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span");
    \u0275\u0275text(112, "Apr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span");
    \u0275\u0275text(114, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "span");
    \u0275\u0275text(116, "Jun");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "span");
    \u0275\u0275text(118, "Jul");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "span");
    \u0275\u0275text(120, "Aug");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getCurrentData().turnover);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getCurrentData().turnoverChange);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getCurrentData().carryingCost);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.getCurrentData().deadStockValue);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getCurrentData().deadStockItems);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getCurrentData().avgDays);
  }
}
function AnalyticsComponent_div_3_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 92)(2, "h3");
    \u0275\u0275text(3, "ABC Analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "This tab shows detailed ABC analysis. Switch to Overview tab to see the ABC data.");
    \u0275\u0275elementEnd()()();
  }
}
function AnalyticsComponent_div_3_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 92)(2, "h3");
    \u0275\u0275text(3, "Demand Forecast");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Demand forecasting analytics will be implemented here.");
    \u0275\u0275elementEnd()()();
  }
}
function AnalyticsComponent_div_3_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 92)(2, "h3");
    \u0275\u0275text(3, "Stock Aging");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Stock aging analysis will be implemented here.");
    \u0275\u0275elementEnd()()();
  }
}
function AnalyticsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 15)(2, "div", 16)(3, "h2", 17);
    \u0275\u0275text(4, "Inventory Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Advanced insights and performance metrics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "div", 20)(9, "select", 21);
    \u0275\u0275listener("change", function AnalyticsComponent_div_3_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPeriodChange($event));
    });
    \u0275\u0275elementStart(10, "option", 22);
    \u0275\u0275text(11, "Last 6 Months");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 23);
    \u0275\u0275text(13, "Last 3 Months");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 24);
    \u0275\u0275text(15, "Last Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 25);
    \u0275\u0275text(17, "Last Year");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 26);
    \u0275\u0275element(19, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "button", 28);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 14);
    \u0275\u0275element(22, "path", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 29);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportReport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 14);
    \u0275\u0275element(25, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Export Report ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 31)(28, "button", 32);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("overview"));
    });
    \u0275\u0275elementStart(29, "span", 33);
    \u0275\u0275text(30, "Overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 32);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("turnover"));
    });
    \u0275\u0275elementStart(32, "span", 33);
    \u0275\u0275text(33, "Turnover Analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "button", 32);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("abc"));
    });
    \u0275\u0275elementStart(35, "span", 33);
    \u0275\u0275text(36, "ABC Analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 32);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("demand"));
    });
    \u0275\u0275elementStart(38, "span", 33);
    \u0275\u0275text(39, "Demand Forecast");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 32);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("aging"));
    });
    \u0275\u0275elementStart(41, "span", 33);
    \u0275\u0275text(42, "Stock Aging");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, AnalyticsComponent_div_3_div_43_Template, 6, 4, "div", 34)(44, AnalyticsComponent_div_3_div_44_Template, 121, 6, "div", 34)(45, AnalyticsComponent_div_3_div_45_Template, 6, 0, "div", 34)(46, AnalyticsComponent_div_3_div_46_Template, 6, 0, "div", 34)(47, AnalyticsComponent_div_3_div_47_Template, 6, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r1.selectedPeriod);
    \u0275\u0275advance(19);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "overview");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "turnover");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "abc");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "demand");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "aging");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "turnover");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "abc");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "demand");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "aging");
  }
}
var AnalyticsComponent = class _AnalyticsComponent {
  analyticsService;
  destroy$ = new Subject();
  activeTab = "overview";
  selectedPeriod = "6months";
  // Loading and error states
  loading = false;
  error = null;
  // Real-time analytics data from API
  dashboardData = null;
  abcAnalysisData = [];
  overviewData = null;
  // ABC Analysis summary
  abcSummary = {
    classA: { count: 0, value: 0, percentage: 0 },
    classB: { count: 0, value: 0, percentage: 0 },
    classC: { count: 0, value: 0, percentage: 0 }
  };
  // Sample data for different periods (for demo purposes)
  periodData = {
    "6months": {
      turnover: "2.4x",
      turnoverChange: "+12.5% from last period",
      carryingCost: "AED 15,000",
      deadStockValue: "AED 8,500",
      deadStockItems: "23 items",
      avgDays: "45 days"
    },
    "3months": {
      turnover: "2.1x",
      turnoverChange: "+8.2% from last period",
      carryingCost: "AED 12,500",
      deadStockValue: "AED 6,200",
      deadStockItems: "18 items",
      avgDays: "42 days"
    },
    "1month": {
      turnover: "1.8x",
      turnoverChange: "+5.1% from last period",
      carryingCost: "AED 10,000",
      deadStockValue: "AED 4,800",
      deadStockItems: "15 items",
      avgDays: "38 days"
    },
    "1year": {
      turnover: "2.8x",
      turnoverChange: "+18.7% from last period",
      carryingCost: "AED 18,500",
      deadStockValue: "AED 9,200",
      deadStockItems: "28 items",
      avgDays: "52 days"
    }
  };
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.loadAllAnalytics();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadAllAnalytics() {
    this.loading = true;
    this.error = null;
    Promise.all([
      this.loadInventoryAnalytics(),
      this.loadAbcAnalysis(),
      this.loadDashboardOverview()
    ]).finally(() => {
      this.loading = false;
    });
  }
  loadInventoryAnalytics() {
    return new Promise((resolve) => {
      this.analyticsService.getInventoryAnalytics().pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success) {
            this.dashboardData = response.data;
          }
          resolve();
        },
        error: (err) => {
          console.error("Error loading inventory analytics:", err);
          resolve();
        }
      });
    });
  }
  loadAbcAnalysis() {
    return new Promise((resolve) => {
      this.analyticsService.getAbcAnalysis().pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success) {
            this.abcAnalysisData = response.data;
            this.calculateAbcSummary();
          }
          resolve();
        },
        error: (err) => {
          console.error("Error loading ABC analysis:", err);
          resolve();
        }
      });
    });
  }
  loadDashboardOverview() {
    return new Promise((resolve) => {
      this.analyticsService.getDashboardData().pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success) {
            this.overviewData = response.data;
          }
          resolve();
        },
        error: (err) => {
          console.error("Error loading dashboard overview:", err);
          resolve();
        }
      });
    });
  }
  calculateAbcSummary() {
    if (!this.abcAnalysisData.length)
      return;
    const classA = this.abcAnalysisData.filter((item) => item.class === "A");
    const classB = this.abcAnalysisData.filter((item) => item.class === "B");
    const classC = this.abcAnalysisData.filter((item) => item.class === "C");
    const totalValue = this.abcAnalysisData.reduce((sum, item) => sum + item.value, 0);
    this.abcSummary.classA = {
      count: classA.length,
      value: classA.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? classA.reduce((sum, item) => sum + item.value, 0) / totalValue * 100 : 0
    };
    this.abcSummary.classB = {
      count: classB.length,
      value: classB.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? classB.reduce((sum, item) => sum + item.value, 0) / totalValue * 100 : 0
    };
    this.abcSummary.classC = {
      count: classC.length,
      value: classC.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? classC.reduce((sum, item) => sum + item.value, 0) / totalValue * 100 : 0
    };
  }
  onTabChange(tab) {
    this.activeTab = tab;
    console.log("Switched to tab:", tab);
  }
  onPeriodChange(event) {
    const target = event.target;
    if (target && target.value) {
      this.selectedPeriod = target.value;
      console.log("Changed period to:", target.value);
    }
  }
  exportReport() {
    console.log("Exporting analytics report for period:", this.selectedPeriod);
  }
  getCurrentData() {
    return this.periodData[this.selectedPeriod];
  }
  refreshData() {
    this.loadAllAnalytics();
  }
  formatCurrency(amount) {
    return `AED ${amount.toLocaleString()}`;
  }
  getAbcClassColor(abcClass) {
    switch (abcClass) {
      case "A":
        return "bg-green-100 text-green-800";
      case "B":
        return "bg-yellow-100 text-yellow-800";
      case "C":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }
  static \u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], decls: 7, vars: 3, consts: [[1, "analytics"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["title", "Refresh Data", 1, "voice-assistant", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "analytics-header"], [1, "header-left"], [1, "main-title"], [1, "subtitle"], [1, "header-right"], [1, "period-dropdown"], [1, "period-select", 3, "change", "value"], ["value", "6months"], ["value", "3months"], ["value", "1month"], ["value", "1year"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["title", "Refresh Data", 1, "refresh-btn", 3, "click"], [1, "export-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "analytics-tabs"], [1, "tab-button", 3, "click"], [1, "tab-text"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], [1, "analytics-cards"], ["class", "analytics-card", 4, "ngIf"], ["class", "abc-table-section", 4, "ngIf"], [1, "analytics-card"], [1, "card-header"], [1, "card-title"], [1, "card-subtitle"], [1, "card-metrics"], [1, "metric-item"], [1, "metric-label"], [1, "metric-value"], [1, "metric-value", "warning"], [1, "metric-value", "danger"], [1, "abc-table-section"], [1, "section-title"], [1, "table-container"], [1, "analytics-table"], [4, "ngFor", "ngForOf"], ["class", "table-footer", 4, "ngIf"], [1, "abc-badge"], [1, "table-footer"], [1, "metric-cards-row"], [1, "metric-card", "turnover"], [1, "card-content"], [1, "metric-change", "positive"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "metric-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"], [1, "metric-card", "carrying-cost"], [1, "metric-change"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "metric-card", "dead-stock"], [1, "metric-card", "avg-days"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "charts-section"], [1, "chart-panel"], [1, "panel-header"], [1, "panel-title"], [1, "panel-subtitle"], [1, "chart-container"], [1, "chart-placeholder"], [1, "chart-grid"], [1, "y-axis"], [1, "chart-area"], [1, "grid-lines"], [1, "grid-line"], [1, "x-axis"], [1, "line-chart"], ["viewBox", "0 0 400 200", "preserveAspectRatio", "none", 1, "trend-line"], ["d", "M0,40 L67,160 L133,80 L200,120 L267,60 L333,100 L400,80", "stroke", "#0d9488", "stroke-width", "3", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "0", "cy", "40", "r", "4", "fill", "#0d9488"], ["cx", "67", "cy", "160", "r", "4", "fill", "#0d9488"], ["cx", "133", "cy", "80", "r", "4", "fill", "#0d9488"], ["cx", "200", "cy", "120", "r", "4", "fill", "#0d9488"], ["cx", "267", "cy", "60", "r", "4", "fill", "#0d9488"], ["cx", "333", "cy", "100", "r", "4", "fill", "#0d9488"], ["cx", "400", "cy", "80", "r", "4", "fill", "#0d9488"], [1, "tab-placeholder"]], template: function AnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AnalyticsComponent_div_1_Template, 4, 0, "div", 1)(2, AnalyticsComponent_div_2_Template, 9, 1, "div", 2)(3, AnalyticsComponent_div_3_Template, 48, 16, "div", 3);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_4_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
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
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.analytics[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  position: relative;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #0d9488;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.error-state[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d9488;\n  color: white;\n  border: none;\n}\n.error-state[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0f766e;\n}\n.analytics-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1.125rem;\n  margin: 0;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%] {\n  appearance: none;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  font-size: 0.875rem;\n  color: #374151;\n  cursor: pointer;\n  min-width: 150px;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0d9488;\n  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%], \n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  border: none;\n  cursor: pointer;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover, \n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  background-color: #0d9488;\n  color: white;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover {\n  background-color: #0f766e;\n}\n.analytics-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: white;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  overflow-x: auto;\n}\n.analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border-radius: 0.5rem;\n  white-space: nowrap;\n}\n.analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #f8fafc;\n}\n.analytics-tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  background-color: #0d9488;\n  color: white;\n}\n.analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .tab-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.tab-content[_ngcontent-%COMP%]   .tab-placeholder[_ngcontent-%COMP%] {\n  background: white;\n  padding: 3rem 2rem;\n  border-radius: 0.75rem;\n  text-align: center;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.tab-content[_ngcontent-%COMP%]   .tab-placeholder[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   .tab-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n.analytics-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-style: italic;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value.danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.abc-table-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n}\n.abc-table-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1.5rem 0;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 0.875rem;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   .abc-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.metric-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-change[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-change.positive[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  color: #0d9488;\n  flex-shrink: 0;\n}\n.charts-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%], \n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%] {\n  height: 200px;\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.voice-assistant[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: #0d9488;\n  color: white;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.voice-assistant[_ngcontent-%COMP%]:hover {\n  background: #0f766e;\n  transform: scale(1.1);\n}\n@media (max-width: 768px) {\n  .analytics[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .analytics-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.75rem;\n  }\n  .analytics-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .metric-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .charts-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .voice-assistant[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n    width: 3rem;\n    height: 3rem;\n  }\n}\n/*# sourceMappingURL=analytics.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsComponent, [{
    type: Component,
    args: [{ selector: "app-analytics", standalone: true, imports: [CommonModule], template: `<div class="analytics">\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Loading inventory analytics...</p>\r
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
        <h2 class="main-title">Inventory Analytics</h2>\r
        <p class="subtitle">Advanced insights and performance metrics</p>\r
      </div>\r
      <div class="header-right">\r
        <div class="period-dropdown">\r
          <select class="period-select" [value]="selectedPeriod" (change)="onPeriodChange($event)">\r
            <option value="6months">Last 6 Months</option>\r
            <option value="3months">Last 3 Months</option>\r
            <option value="1month">Last Month</option>\r
            <option value="1year">Last Year</option>\r
          </select>\r
          <svg class="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
          </svg>\r
        </div>\r
        <button class="refresh-btn" (click)="refreshData()" title="Refresh Data">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
          </svg>\r
        </button>\r
        <button class="export-btn" (click)="exportReport()">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
          </svg>\r
          Export Report\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Navigation Tabs -->\r
    <div class="analytics-tabs">\r
      <button class="tab-button" [class.active]="activeTab === 'overview'" (click)="onTabChange('overview')">\r
        <span class="tab-text">Overview</span>\r
      </button>\r
      <button class="tab-button" [class.active]="activeTab === 'turnover'" (click)="onTabChange('turnover')">\r
        <span class="tab-text">Turnover Analysis</span>\r
      </button>\r
      <button class="tab-button" [class.active]="activeTab === 'abc'" (click)="onTabChange('abc')">\r
        <span class="tab-text">ABC Analysis</span>\r
      </button>\r
      <button class="tab-button" [class.active]="activeTab === 'demand'" (click)="onTabChange('demand')">\r
        <span class="tab-text">Demand Forecast</span>\r
      </button>\r
      <button class="tab-button" [class.active]="activeTab === 'aging'" (click)="onTabChange('aging')">\r
        <span class="tab-text">Stock Aging</span>\r
      </button>\r
    </div>\r
\r
    <!-- Overview Tab Content -->\r
    <div *ngIf="activeTab === 'overview'" class="tab-content">\r
      <!-- Real-time Analytics Cards -->\r
      <div class="analytics-cards">\r
        <!-- Inventory Analytics Card -->\r
        <div class="analytics-card" *ngIf="dashboardData">\r
          <div class="card-header">\r
            <h3 class="card-title">Inventory Analytics</h3>\r
            <span class="card-subtitle">Real-time data from /api/inventory/analytics/dashboard</span>\r
          </div>\r
          <div class="card-metrics">\r
            <div class="metric-item">\r
              <span class="metric-label">Total Value:</span>\r
              <span class="metric-value">{{ formatCurrency(dashboardData.total_value) }}</span>\r
            </div>\r
            <div class="metric-item">\r
              <span class="metric-label">Total Parts:</span>\r
              <span class="metric-value">{{ dashboardData.total_parts.toLocaleString() }}</span>\r
            </div>\r
            <div class="metric-item">\r
              <span class="metric-label">Low Stock:</span>\r
              <span class="metric-value warning">{{ dashboardData.low_stock_count.toLocaleString() }}</span>\r
            </div>\r
            <div class="metric-item">\r
              <span class="metric-label">Out of Stock:</span>\r
              <span class="metric-value danger">{{ dashboardData.out_of_stock_count.toLocaleString() }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Dashboard Overview Card -->\r
        <div class="analytics-card" *ngIf="overviewData">\r
          <div class="card-header">\r
            <h3 class="card-title">Dashboard Overview</h3>\r
            <span class="card-subtitle">Data from /api/inventory/dashboard/overview</span>\r
          </div>\r
          <div class="card-metrics">\r
            <div class="metric-item">\r
              <span class="metric-label">Total Value:</span>\r
              <span class="metric-value">{{ formatCurrency(overviewData.total_value) }}</span>\r
            </div>\r
            <div class="metric-item">\r
              <span class="metric-label">Total Parts:</span>\r
              <span class="metric-value">{{ overviewData.total_parts.toLocaleString() }}</span>\r
            </div>\r
            <div class="metric-item">\r
              <span class="metric-label">Low Stock:</span>\r
              <span class="metric-value warning">{{ overviewData.low_stock_count.toLocaleString() }}</span>\r
            </div>\r
            <div class="metric-item">\r
              <span class="metric-label">Out of Stock:</span>\r
              <span class="metric-value danger">{{ overviewData.out_of_stock_count.toLocaleString() }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- ABC Analysis Summary Card -->\r
        <div class="analytics-card" *ngIf="abcAnalysisData.length > 0">\r
          <div class="card-header">\r
            <h3 class="card-title">ABC Analysis Summary</h3>\r
            <span class="card-subtitle">Data from /api/inventory/analytics/abc-analysis</span>\r
          </div>\r
          <div class="card-metrics">\r
            <div class="metric-item">\r
              <span class="metric-label">Class A Items:</span>\r
              <span class="metric-value">{{ abcSummary.classA.count }} ({{ abcSummary.classA.percentage.toFixed(1) }}%)</span>\r
            </div>\r
            <div class="metric-item">\r
              <span class="metric-label">Class B Items:</span>\r
              <span class="metric-value">{{ abcSummary.classB.count }} ({{ abcSummary.classB.percentage.toFixed(1) }}%)</span>\r
            </div>\r
            <div class="metric-item">\r
              <span class="metric-label">Class C Items:</span>\r
              <span class="metric-value">{{ abcSummary.classC.count }} ({{ abcSummary.classC.percentage.toFixed(1) }}%)</span>\r
            </div>\r
            <div class="metric-item">\r
              <span class="metric-label">Total Items:</span>\r
              <span class="metric-value">{{ abcAnalysisData.length }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ABC Analysis Table -->\r
      <div class="abc-table-section" *ngIf="abcAnalysisData.length > 0">\r
        <h3 class="section-title">ABC Analysis Details</h3>\r
        <div class="table-container">\r
          <table class="analytics-table">\r
            <thead>\r
              <tr>\r
                <th>Part ID</th>\r
                <th>Part Name</th>\r
                <th>Value</th>\r
                <th>Cumulative Ratio</th>\r
                <th>ABC Class</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let item of abcAnalysisData.slice(0, 10)">\r
                <td>{{ item.part_id }}</td>\r
                <td>{{ item.name }}</td>\r
                <td>{{ formatCurrency(item.value) }}</td>\r
                <td>{{ (item.cumulative_ratio * 100).toFixed(2) }}%</td>\r
                <td>\r
                  <span class="abc-badge" [class]="getAbcClassColor(item.class)">\r
                    {{ item.class }}\r
                  </span>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
          <div class="table-footer" *ngIf="abcAnalysisData.length > 10">\r
            <p>Showing first 10 items of {{ abcAnalysisData.length }} total items</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Turnover Analysis Tab Content -->\r
    <div *ngIf="activeTab === 'turnover'" class="tab-content">\r
      <!-- Metric Cards Row -->\r
      <div class="metric-cards-row">\r
        <div class="metric-card turnover">\r
          <div class="card-content">\r
            <div class="metric-value">{{ getCurrentData().turnover }}</div>\r
            <div class="metric-label">Inventory Turnover</div>\r
            <div class="metric-change positive">{{ getCurrentData().turnoverChange }}</div>\r
          </div>\r
          <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>\r
          </svg>\r
        </div>\r
\r
        <div class="metric-card carrying-cost">\r
          <div class="card-content">\r
            <div class="metric-value">{{ getCurrentData().carryingCost }}</div>\r
            <div class="metric-label">Carrying Cost</div>\r
            <div class="metric-change">Monthly holding cost</div>\r
          </div>\r
          <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r
          </svg>\r
        </div>\r
\r
        <div class="metric-card dead-stock">\r
          <div class="card-content">\r
            <div class="metric-value warning">{{ getCurrentData().deadStockValue }}</div>\r
            <div class="metric-label">Dead Stock Value</div>\r
            <div class="metric-change">{{ getCurrentData().deadStockItems }}</div>\r
          </div>\r
          <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
          </svg>\r
        </div>\r
\r
        <div class="metric-card avg-days">\r
          <div class="card-content">\r
            <div class="metric-value">{{ getCurrentData().avgDays }}</div>\r
            <div class="metric-label">Avg Days on Hand</div>\r
            <div class="metric-change">Average inventory age</div>\r
          </div>\r
          <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
        </div>\r
      </div>\r
\r
      <!-- Charts Section -->\r
      <div class="charts-section">\r
        <!-- Left Chart Panel -->\r
        <div class="chart-panel">\r
          <div class="panel-header">\r
            <h3 class="panel-title">Inventory Turnover by Category</h3>\r
            <p class="panel-subtitle">How quickly inventory moves across categories</p>\r
          </div>\r
          <div class="chart-container">\r
            <div class="chart-placeholder">\r
              <div class="chart-grid">\r
                <div class="y-axis">\r
                  <span>4</span>\r
                  <span>3</span>\r
                  <span>2</span>\r
                  <span>1</span>\r
                  <span>0</span>\r
                </div>\r
                <div class="chart-area">\r
                  <div class="grid-lines">\r
                    <div class="grid-line"></div>\r
                    <div class="grid-line"></div>\r
                    <div class="grid-line"></div>\r
                    <div class="grid-line"></div>\r
                    <div class="grid-line"></div>\r
                  </div>\r
                  <div class="x-axis">\r
                    <span>News</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Right Chart Panel -->\r
        <div class="chart-panel">\r
          <div class="panel-header">\r
            <h3 class="panel-title">Monthly Turnover Trend</h3>\r
            <p class="panel-subtitle">Turnover ratio over time</p>\r
          </div>\r
          <div class="chart-container">\r
            <div class="line-chart">\r
              <div class="y-axis">\r
                <span>3.6</span>\r
                <span>2.7</span>\r
                <span>1.8</span>\r
                <span>0.9</span>\r
                <span>0</span>\r
              </div>\r
              <div class="chart-area">\r
                <div class="grid-lines">\r
                  <div class="grid-line"></div>\r
                  <div class="grid-line"></div>\r
                  <div class="grid-line"></div>\r
                  <div class="grid-line"></div>\r
                  <div class="grid-line"></div>\r
                </div>\r
                <svg class="trend-line" viewBox="0 0 400 200" preserveAspectRatio="none">\r
                  <path d="M0,40 L67,160 L133,80 L200,120 L267,60 L333,100 L400,80" \r
                        stroke="#0d9488" \r
                        stroke-width="3" \r
                        fill="none" \r
                        stroke-linecap="round" \r
                        stroke-linejoin="round"/>\r
                  <circle cx="0" cy="40" r="4" fill="#0d9488"/>\r
                  <circle cx="67" cy="160" r="4" fill="#0d9488"/>\r
                  <circle cx="133" cy="80" r="4" fill="#0d9488"/>\r
                  <circle cx="200" cy="120" r="4" fill="#0d9488"/>\r
                  <circle cx="267" cy="60" r="4" fill="#0d9488"/>\r
                  <circle cx="333" cy="100" r="4" fill="#0d9488"/>\r
                  <circle cx="400" cy="80" r="4" fill="#0d9488"/>\r
                </svg>\r
                <div class="x-axis">\r
                  <span>Mar</span>\r
                  <span>Apr</span>\r
                  <span>May</span>\r
                  <span>Jun</span>\r
                  <span>Jul</span>\r
                  <span>Aug</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Other Tab Contents -->\r
    <div *ngIf="activeTab === 'abc'" class="tab-content">\r
      <div class="tab-placeholder">\r
        <h3>ABC Analysis</h3>\r
        <p>This tab shows detailed ABC analysis. Switch to Overview tab to see the ABC data.</p>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="activeTab === 'demand'" class="tab-content">\r
      <div class="tab-placeholder">\r
        <h3>Demand Forecast</h3>\r
        <p>Demand forecasting analytics will be implemented here.</p>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="activeTab === 'aging'" class="tab-content">\r
      <div class="tab-placeholder">\r
        <h3>Stock Aging</h3>\r
        <p>Stock aging analysis will be implemented here.</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Voice Assistant Button -->\r
  <button class="voice-assistant" (click)="refreshData()" title="Refresh Data">\r
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
    </svg>\r
  </button>\r
</div>\r
`, styles: ["/* src/app/inventory/components/analytics/analytics.component.scss */\n.analytics {\n  padding: 1.5rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  position: relative;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #0d9488;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state p {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.error-state .error-title {\n  color: #dc2626;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.error-state .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.error-state .btn.btn-primary {\n  background-color: #0d9488;\n  color: white;\n  border: none;\n}\n.error-state .btn.btn-primary:hover {\n  background-color: #0f766e;\n}\n.analytics-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.analytics-header .header-left .main-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-header .header-left .subtitle {\n  color: #64748b;\n  font-size: 1.125rem;\n  margin: 0;\n}\n.analytics-header .header-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.analytics-header .header-right .period-dropdown {\n  position: relative;\n}\n.analytics-header .header-right .period-dropdown .period-select {\n  appearance: none;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  font-size: 0.875rem;\n  color: #374151;\n  cursor: pointer;\n  min-width: 150px;\n}\n.analytics-header .header-right .period-dropdown .period-select:focus {\n  outline: none;\n  border-color: #0d9488;\n  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);\n}\n.analytics-header .header-right .period-dropdown .dropdown-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.analytics-header .header-right .refresh-btn,\n.analytics-header .header-right .export-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  border: none;\n  cursor: pointer;\n}\n.analytics-header .header-right .refresh-btn:hover,\n.analytics-header .header-right .export-btn:hover {\n  transform: translateY(-1px);\n}\n.analytics-header .header-right .refresh-btn {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.analytics-header .header-right .refresh-btn:hover {\n  background-color: #e5e7eb;\n}\n.analytics-header .header-right .export-btn {\n  background-color: #0d9488;\n  color: white;\n}\n.analytics-header .header-right .export-btn:hover {\n  background-color: #0f766e;\n}\n.analytics-tabs {\n  display: flex;\n  background: white;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  overflow-x: auto;\n}\n.analytics-tabs .tab-button {\n  flex: 1;\n  min-width: 0;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border-radius: 0.5rem;\n  white-space: nowrap;\n}\n.analytics-tabs .tab-button:hover {\n  color: #374151;\n  background-color: #f8fafc;\n}\n.analytics-tabs .tab-button.active {\n  background-color: #0d9488;\n  color: white;\n}\n.analytics-tabs .tab-button .tab-text {\n  font-size: 0.875rem;\n}\n.tab-content .tab-placeholder {\n  background: white;\n  padding: 3rem 2rem;\n  border-radius: 0.75rem;\n  text-align: center;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.tab-content .tab-placeholder h3 {\n  color: #1e293b;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.tab-content .tab-placeholder p {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n.analytics-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.analytics-cards .analytics-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.analytics-cards .analytics-card .card-header {\n  margin-bottom: 1.5rem;\n}\n.analytics-cards .analytics-card .card-header .card-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-cards .analytics-card .card-header .card-subtitle {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-style: italic;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item:last-child {\n  border-bottom: none;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item .metric-label {\n  color: #64748b;\n  font-weight: 500;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item .metric-value {\n  font-weight: 600;\n  color: #1e293b;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item .metric-value.warning {\n  color: #f59e0b;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item .metric-value.danger {\n  color: #dc2626;\n}\n.abc-table-section {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n}\n.abc-table-section .section-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1.5rem 0;\n}\n.abc-table-section .table-container {\n  overflow-x: auto;\n}\n.abc-table-section .table-container .analytics-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.abc-table-section .table-container .analytics-table th,\n.abc-table-section .table-container .analytics-table td {\n  padding: 1rem;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n.abc-table-section .table-container .analytics-table th {\n  background-color: #f8fafc;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.abc-table-section .table-container .analytics-table td {\n  color: #1e293b;\n  font-size: 0.875rem;\n}\n.abc-table-section .table-container .analytics-table .abc-badge {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.abc-table-section .table-container .table-footer {\n  padding: 1rem 0;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.metric-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.metric-cards-row .metric-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.metric-cards-row .metric-card .card-content {\n  flex: 1;\n}\n.metric-cards-row .metric-card .card-content .metric-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.metric-cards-row .metric-card .card-content .metric-value.warning {\n  color: #f59e0b;\n}\n.metric-cards-row .metric-card .card-content .metric-label {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.metric-cards-row .metric-card .card-content .metric-change {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.metric-cards-row .metric-card .card-content .metric-change.positive {\n  color: #059669;\n}\n.metric-cards-row .metric-card .metric-icon {\n  width: 3rem;\n  height: 3rem;\n  color: #0d9488;\n  flex-shrink: 0;\n}\n.charts-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.charts-section .chart-panel {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.charts-section .chart-panel .panel-header {\n  margin-bottom: 1.5rem;\n}\n.charts-section .chart-panel .panel-header .panel-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.charts-section .chart-panel .panel-header .panel-subtitle {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.charts-section .chart-panel .chart-container .chart-placeholder,\n.charts-section .chart-panel .chart-container .line-chart {\n  height: 200px;\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.voice-assistant {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: #0d9488;\n  color: white;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.voice-assistant:hover {\n  background: #0f766e;\n  transform: scale(1.1);\n}\n@media (max-width: 768px) {\n  .analytics {\n    padding: 1rem;\n  }\n  .analytics-header {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .analytics-header .header-right {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .analytics-tabs .tab-button {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.75rem;\n  }\n  .analytics-cards {\n    grid-template-columns: 1fr;\n  }\n  .metric-cards-row {\n    grid-template-columns: 1fr;\n  }\n  .charts-section {\n    grid-template-columns: 1fr;\n  }\n  .voice-assistant {\n    bottom: 1rem;\n    right: 1rem;\n    width: 3rem;\n    height: 3rem;\n  }\n}\n/*# sourceMappingURL=analytics.component.css.map */\n"] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src/app/inventory/components/analytics/analytics.component.ts", lineNumber: 13 });
})();
export {
  AnalyticsComponent
};
//# sourceMappingURL=chunk-UP6P27SW.js.map
