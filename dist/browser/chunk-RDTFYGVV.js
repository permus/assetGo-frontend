import {
  InventoryAnalyticsService
} from "./chunk-FQPE6O4E.js";
import {
  Chart,
  registerables
} from "./chunk-NKVVMDEB.js";
import {
  CurrencyService
} from "./chunk-RPSM5X2G.js";
import "./chunk-OR4RIGW3.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/analytics/analytics.component.ts
function AnalyticsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading inventory analytics...");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticsComponent_div_2_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function AnalyticsComponent_div_2_Template_button_click_5_listener() {
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
function AnalyticsComponent_div_3_div_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.kpis == null ? null : ctx_r1.kpis.turnover_change_pct, "1.0-2"), "% from last period ");
  }
}
function AnalyticsComponent_div_3_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6, "Inventory Turnover");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AnalyticsComponent_div_3_div_28_div_7_Template, 3, 4, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 39);
    \u0275\u0275element(9, "path", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 2, ctx_r1.turnoverData.turnover || 0, "1.1-2"), "x");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.kpis == null ? null : ctx_r1.kpis.turnover_change_pct) !== null && (ctx_r1.kpis == null ? null : ctx_r1.kpis.turnover_change_pct) !== void 0);
  }
}
function AnalyticsComponent_div_3_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6, "Avg Days on Hand");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 39);
    \u0275\u0275element(8, "path", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.turnoverData.days_on_hand !== null ? \u0275\u0275pipeBind2(4, 1, ctx_r1.turnoverData.days_on_hand, "1.0-0") + " days" : "-");
  }
}
function AnalyticsComponent_div_3_div_63_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "h3", 59);
    \u0275\u0275text(3, "Inventory Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5, "Real-time data from /api/inventory/analytics/dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 61)(7, "div", 62)(8, "span", 37);
    \u0275\u0275text(9, "Total Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 62)(13, "span", 37);
    \u0275\u0275text(14, "Total Parts:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 62)(18, "span", 37);
    \u0275\u0275text(19, "Low Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 42);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 62)(23, "span", 37);
    \u0275\u0275text(24, "Out of Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 63);
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
function AnalyticsComponent_div_3_div_63_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "h3", 59);
    \u0275\u0275text(3, "Dashboard Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5, "Data from /api/inventory/dashboard/overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 61)(7, "div", 62)(8, "span", 37);
    \u0275\u0275text(9, "Total Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 62)(13, "span", 37);
    \u0275\u0275text(14, "Total Parts:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 62)(18, "span", 37);
    \u0275\u0275text(19, "Low Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 42);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 62)(23, "span", 37);
    \u0275\u0275text(24, "Out of Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 63);
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
function AnalyticsComponent_div_3_div_63_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "h3", 59);
    \u0275\u0275text(3, "ABC Analysis Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5, "Data from /api/inventory/analytics/abc-analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 61)(7, "div", 62)(8, "span", 37);
    \u0275\u0275text(9, "Class A Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 62)(13, "span", 37);
    \u0275\u0275text(14, "Class B Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 62)(18, "span", 37);
    \u0275\u0275text(19, "Class C Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 36);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 62)(23, "span", 37);
    \u0275\u0275text(24, "Total Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 36);
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
function AnalyticsComponent_div_3_div_63_div_5_tr_18_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td")(10, "span", 71);
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
function AnalyticsComponent_div_3_div_63_div_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Showing first 10 items of ", ctx_r1.abcAnalysisData.length, " total items");
  }
}
function AnalyticsComponent_div_3_div_63_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "h3", 65);
    \u0275\u0275text(2, "ABC Analysis Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66)(4, "table", 67)(5, "thead")(6, "tr", 68)(7, "th");
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
    \u0275\u0275template(18, AnalyticsComponent_div_3_div_63_div_5_tr_18_Template, 12, 7, "tr", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, AnalyticsComponent_div_3_div_63_div_5_div_19_Template, 3, 1, "div", 70);
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
function AnalyticsComponent_div_3_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275template(2, AnalyticsComponent_div_3_div_63_div_2_Template, 27, 4, "div", 55)(3, AnalyticsComponent_div_3_div_63_div_3_Template, 27, 4, "div", 55)(4, AnalyticsComponent_div_3_div_63_div_4_Template, 27, 7, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AnalyticsComponent_div_3_div_63_div_5_Template, 20, 2, "div", 56);
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
function AnalyticsComponent_div_3_div_64_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275text(2, "No data yet");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticsComponent_div_3_div_64_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275elementStart(2, "div", 88)(3, "span", 89);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 90);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("title", c_r5.category_name + ": " + \u0275\u0275pipeBind2(1, 5, c_r5.turnover, "1.1-2") + "x");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", c_r5.turnover / ctx_r1.getMaxCategoryTurnover() * 100 + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 8, c_r5.turnover || 0, "1.1-2"), "x");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.category_name);
  }
}
function AnalyticsComponent_div_3_div_64_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85);
    \u0275\u0275template(2, AnalyticsComponent_div_3_div_64_div_10_div_2_Template, 8, 11, "div", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categoryTurnover.slice(0, 8));
  }
}
function AnalyticsComponent_div_3_div_64_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "canvas", 91);
    \u0275\u0275elementEnd();
  }
}
function AnalyticsComponent_div_3_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 73)(2, "div", 74)(3, "div", 75)(4, "h3", 76);
    \u0275\u0275text(5, "Inventory Turnover by Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 77);
    \u0275\u0275text(7, "How quickly inventory moves across categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 78);
    \u0275\u0275template(9, AnalyticsComponent_div_3_div_64_div_9_Template, 3, 0, "div", 79)(10, AnalyticsComponent_div_3_div_64_div_10_Template, 3, 1, "div", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 74)(12, "div", 75)(13, "h3", 76);
    \u0275\u0275text(14, "Monthly Turnover Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 77);
    \u0275\u0275text(16, "Turnover ratio over time");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AnalyticsComponent_div_3_div_64_Conditional_17_Template, 2, 0, "div", 81);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !(ctx_r1.categoryTurnover == null ? null : ctx_r1.categoryTurnover.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categoryTurnover == null ? null : ctx_r1.categoryTurnover.length);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.monthlyTrend.length > 0 ? 17 : -1);
  }
}
function AnalyticsComponent_div_3_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 73)(2, "div", 74)(3, "div", 75)(4, "h3", 76);
    \u0275\u0275text(5, "ABC Analysis Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 77);
    \u0275\u0275text(7, "Parts categorized by value contribution");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 92);
    \u0275\u0275element(9, "canvas", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 74)(11, "div", 75)(12, "h3", 76);
    \u0275\u0275text(13, "ABC Category Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 77);
    \u0275\u0275text(15, "Value and quantity by category");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 94)(17, "div", 95)(18, "div", 96)(19, "span", 97);
    \u0275\u0275text(20, "Class A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 98);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 99);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 100)(26, "div", 101);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 102);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 103)(31, "div", 96)(32, "span", 104);
    \u0275\u0275text(33, "Class B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 98);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 99);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 100)(39, "div", 101);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 102);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 105)(44, "div", 96)(45, "span", 106);
    \u0275\u0275text(46, "Class C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 98);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 99);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 100)(52, "div", 101);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 102);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate1("", ctx_r1.abcSummary.classA.count, " items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getClassValuePercentage("A"), "% of total value");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.abcSummary.classA.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getClassQuantityPercentage("A"), "% of quantity");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.abcSummary.classB.count, " items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getClassValuePercentage("B"), "% of total value");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.abcSummary.classB.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getClassQuantityPercentage("B"), "% of quantity");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.abcSummary.classC.count, " items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getClassValuePercentage("C"), "% of total value");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.abcSummary.classC.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getClassQuantityPercentage("C"), "% of quantity");
  }
}
function AnalyticsComponent_div_3_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 107)(2, "h3");
    \u0275\u0275text(3, "Demand Forecast");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Demand forecasting analytics will be implemented here.");
    \u0275\u0275elementEnd()()();
  }
}
function AnalyticsComponent_div_3_div_67_div_1_div_15_tr_13_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.name || item_r6.part_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.on_hand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r6.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.days_since_movement);
  }
}
function AnalyticsComponent_div_3_div_67_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "table", 111)(2, "thead")(3, "tr", 68)(4, "th");
    \u0275\u0275text(5, "Part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "On Hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Days Since");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, AnalyticsComponent_div_3_div_67_div_1_div_15_tr_13_Template, 9, 4, "tr", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.agingData.slow_moving);
  }
}
function AnalyticsComponent_div_3_div_67_div_1_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 82);
    \u0275\u0275text(2, "No slow moving items");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticsComponent_div_3_div_67_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "div", 75)(3, "h3", 76);
    \u0275\u0275text(4, "Stock Age Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 77);
    \u0275\u0275text(6, "Inventory value by age buckets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 92);
    \u0275\u0275element(8, "canvas", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 74)(10, "div", 75)(11, "h3", 76);
    \u0275\u0275text(12, "Slow Moving Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 77);
    \u0275\u0275text(14, "Items with low turnover requiring attention");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, AnalyticsComponent_div_3_div_67_div_1_div_15_Template, 14, 1, "div", 110)(16, AnalyticsComponent_div_3_div_67_div_1_ng_template_16_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noSlowMoving_r7 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r1.agingData == null ? null : ctx_r1.agingData.slow_moving == null ? null : ctx_r1.agingData.slow_moving.length)("ngIfElse", noSlowMoving_r7);
  }
}
function AnalyticsComponent_div_3_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AnalyticsComponent_div_3_div_67_div_1_Template, 18, 2, "div", 108);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.agingData);
  }
}
function AnalyticsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 16)(2, "div", 17)(3, "h2", 18);
    \u0275\u0275text(4, "Inventory Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6, "Advanced insights and performance metrics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 20)(8, "div", 21)(9, "select", 22);
    \u0275\u0275listener("change", function AnalyticsComponent_div_3_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPeriodChange($event));
    });
    \u0275\u0275elementStart(10, "option", 23);
    \u0275\u0275text(11, "Last 6 Months");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 24);
    \u0275\u0275text(13, "Last 3 Months");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 25);
    \u0275\u0275text(15, "Last Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 26);
    \u0275\u0275text(17, "Last Year");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 27);
    \u0275\u0275element(19, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "button", 29);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 15);
    \u0275\u0275element(22, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 30);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportReport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 15);
    \u0275\u0275element(25, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Export Report ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 32);
    \u0275\u0275template(28, AnalyticsComponent_div_3_div_28_Template, 10, 5, "div", 33);
    \u0275\u0275elementStart(29, "div", 34)(30, "div", 35)(31, "div", 36);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 37);
    \u0275\u0275text(34, "Carrying Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 38);
    \u0275\u0275text(36, "Monthly holding cost");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 39);
    \u0275\u0275element(38, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 41)(40, "div", 35)(41, "div", 42);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 37);
    \u0275\u0275text(44, "Dead Stock Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 38);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 39);
    \u0275\u0275element(48, "path", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, AnalyticsComponent_div_3_div_49_Template, 9, 4, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 44)(51, "button", 45);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("turnover"));
    });
    \u0275\u0275elementStart(52, "span", 46);
    \u0275\u0275text(53, "Turnover Analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "button", 45);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("abc"));
    });
    \u0275\u0275elementStart(55, "span", 46);
    \u0275\u0275text(56, "ABC Analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "button", 45);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("demand"));
    });
    \u0275\u0275elementStart(58, "span", 46);
    \u0275\u0275text(59, "Demand Forecast");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "button", 45);
    \u0275\u0275listener("click", function AnalyticsComponent_div_3_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("aging"));
    });
    \u0275\u0275elementStart(61, "span", 46);
    \u0275\u0275text(62, "Stock Aging");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(63, AnalyticsComponent_div_3_div_63_Template, 6, 4, "div", 47)(64, AnalyticsComponent_div_3_div_64_Template, 18, 3, "div", 47)(65, AnalyticsComponent_div_3_div_65_Template, 56, 12, "div", 47)(66, AnalyticsComponent_div_3_div_66_Template, 6, 0, "div", 47)(67, AnalyticsComponent_div_3_div_67_Template, 2, 1, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r1.selectedPeriod);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r1.turnoverData);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.getCarryingCostMonthly()));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.getDeadStockValue()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.getDeadStockItems(), " items");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.turnoverData);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "turnover");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "abc");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "demand");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "aging");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", false);
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
  currency;
  destroy$ = new Subject();
  activeTab = "turnover";
  selectedPeriod = "6m";
  // Config: monthly carrying cost rate (e.g., 2% of inventory value)
  carryingRateMonthly = 0.02;
  // Loading and error states
  loading = false;
  error = null;
  // Real-time analytics data from API
  dashboardData = null;
  abcAnalysisData = [];
  overviewData = null;
  turnoverData = null;
  agingData = null;
  kpis = null;
  categoryTurnover = [];
  monthlyTrend = [];
  hasTrendData = false;
  // Simple chart metrics for SVG rendering
  trendChartWidth = 400;
  trendChartHeight = 200;
  trendYPadding = 10;
  // top/bottom padding
  trendYScaleHeight = 180;
  // drawable height
  trendMax = 1;
  trendTicks = [1, 0.75, 0.5, 0.25, 0];
  // Chart.js instances
  trendChart;
  agingChart;
  abcChart;
  // ABC Analysis summary
  abcSummary = {
    classA: { count: 0, value: 0, percentage: 0 },
    classB: { count: 0, value: 0, percentage: 0 },
    classC: { count: 0, value: 0, percentage: 0 }
  };
  constructor(analyticsService, currency) {
    this.analyticsService = analyticsService;
    this.currency = currency;
  }
  ngOnInit() {
    Chart.register(...registerables);
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
      this.loadAbcAnalysis(),
      this.loadDashboardOverview(),
      this.loadTurnover(this.selectedPeriod),
      this.loadStockAging(),
      this.loadTurnoverByCategory(this.selectedPeriod),
      this.loadMonthlyTrend(this.selectedPeriod),
      this.loadKpis(this.selectedPeriod)
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
  loadMonthlyTrend(period) {
    return new Promise((resolve) => {
      this.analyticsService.getMonthlyTurnoverTrend({ period }).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success) {
            const pts = response.data.points || [];
            this.monthlyTrend = pts.length ? pts : this.generateZeroTrend(period);
            this.updateTrendMeta();
            setTimeout(() => this.renderTrendChart(true), 0);
            setTimeout(() => this.renderTrendChart(), 500);
          }
          resolve();
        },
        error: (err) => {
          console.error("Error loading monthly turnover trend:", err);
          resolve();
        }
      });
    });
  }
  loadTurnoverByCategory(period) {
    return new Promise((resolve) => {
      this.analyticsService.getTurnoverByCategory({ period }).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success) {
            this.categoryTurnover = response.data.categories || [];
          }
          resolve();
        },
        error: (err) => {
          console.error("Error loading turnover by category:", err);
          resolve();
        }
      });
    });
  }
  loadTurnover(period) {
    return new Promise((resolve) => {
      this.analyticsService.getTurnover({ period }).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success) {
            this.turnoverData = response.data;
          }
          resolve();
        },
        error: (err) => {
          console.error("Error loading turnover:", err);
          resolve();
        }
      });
    });
  }
  loadKpis(period) {
    return new Promise((resolve) => {
      this.analyticsService.getKpis({ period, carrying_rate: 0.24, dead_days: 90 }).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success) {
            this.kpis = response.data;
            this.turnoverData = {
              period: response.data.period,
              cogs: 0,
              avg_inventory_value: response.data.avg_inventory_value,
              turnover: response.data.turnover,
              days_on_hand: response.data.days_on_hand
            };
          }
          resolve();
        },
        error: (err) => {
          console.error("Error loading KPIs:", err);
          resolve();
        }
      });
    });
  }
  loadStockAging() {
    return new Promise((resolve) => {
      this.analyticsService.getStockAging().pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success) {
            const data = response.data;
            if (!data || !data.buckets || data.buckets.length === 0) {
              this.agingData = {
                buckets: [
                  { label: "0-30 days", days_from: 0, days_to: 30, count: 0, value: 0 },
                  { label: "31-60 days", days_from: 31, days_to: 60, count: 0, value: 0 },
                  { label: "61-90 days", days_from: 61, days_to: 90, count: 0, value: 0 },
                  { label: "91-180 days", days_from: 91, days_to: 180, count: 0, value: 0 },
                  { label: "180+ days", days_from: 181, days_to: null, count: 0, value: 0 }
                ],
                slow_moving: []
              };
            } else {
              this.agingData = data;
            }
            setTimeout(() => this.renderAgingChart(), 0);
          }
          resolve();
        },
        error: (err) => {
          console.error("Error loading stock aging:", err);
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
            if (this.activeTab === "abc")
              setTimeout(() => this.renderAbcChart(), 0);
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
  // ABC helpers for UI breakdown
  getClassCount(abc) {
    if (abc === "A")
      return this.abcSummary.classA.count;
    if (abc === "B")
      return this.abcSummary.classB.count;
    return this.abcSummary.classC.count;
  }
  getClassValue(abc) {
    if (abc === "A")
      return this.abcSummary.classA.value;
    if (abc === "B")
      return this.abcSummary.classB.value;
    return this.abcSummary.classC.value;
  }
  getClassQuantityPercentage(abc) {
    const totalItems = this.abcAnalysisData.length || 1;
    return Number((this.getClassCount(abc) / totalItems * 100).toFixed(1));
  }
  getClassValuePercentage(abc) {
    if (abc === "A")
      return Number(this.abcSummary.classA.percentage.toFixed(1));
    if (abc === "B")
      return Number(this.abcSummary.classB.percentage.toFixed(1));
    return Number(this.abcSummary.classC.percentage.toFixed(1));
  }
  onTabChange(tab) {
    this.activeTab = tab;
    if (tab === "turnover") {
      this.loadTurnover(this.selectedPeriod);
      this.loadTurnoverByCategory(this.selectedPeriod);
      this.loadMonthlyTrend(this.selectedPeriod).then(() => setTimeout(() => this.renderTrendChart(true), 0));
      this.loadKpis(this.selectedPeriod);
    }
    if (tab === "aging") {
      this.loadStockAging();
    }
    if (tab === "abc") {
      this.loadAbcAnalysis().then(() => setTimeout(() => this.renderAbcChart(true), 0));
    }
  }
  onPeriodChange(event) {
    const target = event.target;
    if (target && target.value) {
      const map = { "1month": "1m", "3months": "3m", "6months": "6m", "1year": "1y" };
      const val = map[target.value] || target.value;
      this.selectedPeriod = val;
      this.loadTurnover(this.selectedPeriod);
      this.loadTurnoverByCategory(this.selectedPeriod);
      this.loadMonthlyTrend(this.selectedPeriod);
      this.loadKpis(this.selectedPeriod);
    }
  }
  exportReport() {
    console.log("Exporting analytics report for period:", this.selectedPeriod);
  }
  // Removed getCurrentData; now using live turnoverData
  refreshData() {
    this.loadAllAnalytics();
  }
  formatCurrency(amount) {
    return this.currency.format(amount);
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
  // Derived KPI helpers for top cards
  getCarryingCostMonthly() {
    if (this.kpis)
      return this.kpis.carrying_cost_monthly || 0;
    const total = this.dashboardData?.total_value ?? this.overviewData?.total_value ?? 0;
    return total * this.carryingRateMonthly;
  }
  getDeadStockValue() {
    if (this.kpis)
      return this.kpis.dead_stock_value || 0;
    if (!this.agingData?.slow_moving?.length)
      return 0;
    return this.agingData.slow_moving.reduce((sum, item) => sum + (item.value || 0), 0);
  }
  getDeadStockItems() {
    if (this.kpis)
      return this.kpis.dead_stock_items || 0;
    return this.agingData?.slow_moving?.length ?? 0;
  }
  // Helpers for category turnover chart
  getMaxCategoryTurnover() {
    if (!this.categoryTurnover || this.categoryTurnover.length === 0)
      return 1;
    const max = Math.max(...this.categoryTurnover.map((c) => c.turnover || 0));
    return max > 0 ? max : 1;
  }
  // Trend helpers (computed in TS to keep template simple)
  updateTrendMeta() {
    const max = Math.max(...(this.monthlyTrend || []).map((p) => p.turnover || 0), 0);
    this.trendMax = this.niceCeil(max);
    this.hasTrendData = (this.monthlyTrend || []).some((p) => (p.turnover || 0) > 0);
    const t1 = this.trendMax;
    const t2 = this.trendMax * 0.75;
    const t3 = this.trendMax * 0.5;
    const t4 = this.trendMax * 0.25;
    this.trendTicks = [t1, t2, t3, t4, 0];
  }
  niceCeil(value) {
    const thresholds = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50];
    if (value <= 0)
      return 1;
    for (const t of thresholds)
      if (value <= t)
        return t;
    return Math.pow(10, Math.ceil(Math.log10(value)));
  }
  formatTick(val) {
    const decimals = this.trendMax < 1 ? 2 : 1;
    return Number(val).toFixed(decimals);
  }
  renderTrendChart(force) {
    const labels = (this.monthlyTrend || []).map((p) => p.label.split(" ")[0]);
    const data = (this.monthlyTrend || []).map((p) => p.turnover || 0);
    const config = {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Turnover",
          data,
          borderColor: "#0d9488",
          backgroundColor: "rgba(13,148,136,0.2)",
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: "#0d9488"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: Math.max(1, this.trendMax),
            ticks: {
              callback: (value) => this.formatTick(Number(value))
            }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    };
    const canvas = document.getElementById("monthlyTrendCanvas");
    if (!canvas)
      return;
    if (this.trendChart && !force) {
      this.trendChart.data.labels = labels;
      this.trendChart.data.datasets[0].data = data;
      this.trendChart.update();
      return;
    }
    if (this.trendChart && force) {
      this.trendChart.destroy();
      this.trendChart = void 0;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    this.trendChart = new Chart(ctx, config);
  }
  renderAgingChart(force) {
    const canvas = document.getElementById("agingBucketsCanvas");
    if (!canvas || !this.agingData)
      return;
    const labels = (this.agingData.buckets || []).map((b) => b.label);
    const counts = (this.agingData.buckets || []).map((b) => b.count);
    const values = (this.agingData.buckets || []).map((b) => b.value);
    const config = {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Items",
          data: counts,
          backgroundColor: "rgba(59,130,246,0.3)",
          borderColor: "#3b82f6",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const idx = ctx.dataIndex;
                const count = counts[idx] ?? 0;
                const val = values[idx] ?? 0;
                return ` ${count} items \u2014 ${this.currency.getCurrent()} ${val.toLocaleString()}`;
              }
            }
          }
        },
        scales: {
          y: { beginAtZero: true, ticks: { precision: 0 } },
          x: { grid: { display: false } }
        }
      }
    };
    if (this.agingChart && !force) {
      this.agingChart.data.labels = labels;
      this.agingChart.data.datasets[0].data = counts;
      this.agingChart.update();
      return;
    }
    if (this.agingChart && force) {
      this.agingChart.destroy();
      this.agingChart = void 0;
    }
    this.agingChart = new Chart(canvas.getContext("2d"), config);
  }
  renderAbcChart(force) {
    const canvas = document.getElementById("abcPieCanvas");
    if (!canvas)
      return;
    const counts = [
      this.abcAnalysisData.filter((i) => i.class === "A").length,
      this.abcAnalysisData.filter((i) => i.class === "B").length,
      this.abcAnalysisData.filter((i) => i.class === "C").length
    ];
    const config = {
      type: "doughnut",
      data: {
        labels: ["Class A", "Class B", "Class C"],
        datasets: [{
          data: counts,
          backgroundColor: ["#2563eb", "#10b981", "#f59e0b"],
          borderColor: ["#2563eb", "#10b981", "#f59e0b"],
          borderWidth: 1
        }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: true, position: "bottom" } } }
    };
    if (this.abcChart && !force) {
      this.abcChart.data.datasets[0].data = counts;
      this.abcChart.update();
      return;
    }
    if (this.abcChart && force) {
      this.abcChart.destroy();
      this.abcChart = void 0;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    this.abcChart = new Chart(ctx, config);
  }
  generateZeroTrend(period) {
    const monthsMap = { "1m": 1, "3m": 3, "6m": 6, "1y": 12 };
    const n = monthsMap[period] || 6;
    const points = [];
    const now = /* @__PURE__ */ new Date();
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const label = d.toLocaleString(void 0, { month: "short", year: "numeric" });
      const ym = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      points.push({ month: ym, label, cogs: 0, avg_inventory_value: 0, turnover: 0 });
    }
    return points;
  }
  getTrendPath() {
    const n = this.monthlyTrend?.length || 0;
    if (n === 0)
      return "";
    const stepX = this.trendChartWidth / Math.max(1, n - 1);
    let d = "";
    for (let i = 0; i < n; i++) {
      const x = i * stepX;
      const y = this.trendY(this.monthlyTrend[i]);
      d += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    return d;
  }
  trendX(index) {
    const n = this.monthlyTrend?.length || 0;
    const stepX = this.trendChartWidth / Math.max(1, n - 1);
    return index * stepX;
  }
  trendY(point) {
    const ratio = Math.min(1, Math.max(0, (point?.turnover || 0) / this.trendMax));
    return this.trendChartHeight - ratio * this.trendYScaleHeight - this.trendYPadding;
  }
  static \u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService), \u0275\u0275directiveInject(CurrencyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], decls: 7, vars: 3, consts: [["noSlowMoving", ""], [1, "analytics"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["title", "Refresh Data", 1, "voice-assistant", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "analytics-header"], [1, "header-left"], [1, "main-title"], [1, "subtitle"], [1, "header-right"], [1, "period-dropdown"], [1, "period-select", 3, "change", "value"], ["value", "6m"], ["value", "3m"], ["value", "1m"], ["value", "1y"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["title", "Refresh Data", 1, "refresh-btn", 3, "click"], [1, "export-btn", "!hidden", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "metric-cards-row"], ["class", "metric-card turnover", 4, "ngIf"], [1, "metric-card", "carrying-cost"], [1, "card-content"], [1, "metric-value"], [1, "metric-label"], [1, "metric-change"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "metric-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "metric-card", "dead-stock"], [1, "metric-value", "warning"], ["class", "metric-card avg-days", 4, "ngIf"], [1, "analytics-tabs"], [1, "tab-button", 3, "click"], [1, "tab-text"], ["class", "tab-content", 4, "ngIf"], [1, "metric-card", "turnover"], ["class", "metric-change", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"], [1, "metric-card", "avg-days"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "tab-content"], [1, "analytics-cards"], ["class", "analytics-card", 4, "ngIf"], ["class", "abc-table-section", 4, "ngIf"], [1, "analytics-card"], [1, "card-header"], [1, "card-title"], [1, "card-subtitle"], [1, "card-metrics"], [1, "metric-item"], [1, "metric-value", "danger"], [1, "abc-table-section"], [1, "section-title"], [1, "table-container"], [1, "analytics-table"], [1, "uppercase"], [4, "ngFor", "ngForOf"], ["class", "table-footer", 4, "ngIf"], [1, "abc-badge"], [1, "table-footer"], [1, "charts-section"], [1, "chart-panel"], [1, "panel-header"], [1, "panel-title"], [1, "panel-subtitle"], [1, "chart-container"], ["class", "chart-placeholder", 4, "ngIf"], ["class", "bar-chart", 4, "ngIf"], [1, "chart-container", 2, "height", "220px", "padding", "12px 8px"], [1, "chart-placeholder"], [1, "empty-state"], [1, "bar-chart"], [1, "bars"], ["class", "bar", 3, "title", 4, "ngFor", "ngForOf"], [1, "bar", 3, "title"], [1, "bar-fill"], [1, "bar-value"], [1, "bar-label"], ["id", "monthlyTrendCanvas"], [1, "chart-container", 2, "height", "260px", "padding", "12px 8px"], ["id", "abcPieCanvas"], [1, "abc-breakdown"], [1, "abc-row", "a"], [1, "left"], [1, "badge", "a"], [1, "items"], [1, "sub"], [1, "right"], [1, "value"], [1, "qty"], [1, "abc-row", "b"], [1, "badge", "b"], [1, "abc-row", "c"], [1, "badge", "c"], [1, "tab-placeholder"], ["class", "charts-section", 4, "ngIf"], ["id", "agingBucketsCanvas"], ["class", "table-container", 4, "ngIf", "ngIfElse"], [1, "panel-table"]], template: function AnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, AnalyticsComponent_div_1_Template, 4, 0, "div", 2)(2, AnalyticsComponent_div_2_Template, 9, 1, "div", 3)(3, AnalyticsComponent_div_3_Template, 68, 19, "div", 4);
      \u0275\u0275elementStart(4, "button", 5);
      \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_4_listener() {
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
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe], styles: ["\n\n.analytics[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  position: relative;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #0d9488;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.error-state[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d9488;\n  color: white;\n  border: none;\n}\n.error-state[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0f766e;\n}\n.analytics-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1.125rem;\n  margin: 0;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%] {\n  appearance: none;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  font-size: 0.875rem;\n  color: #374151;\n  cursor: pointer;\n  min-width: 150px;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0d9488;\n  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%], \n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  border: none;\n  cursor: pointer;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover, \n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  background-color: #0d9488;\n  color: white;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover {\n  background-color: #0f766e;\n}\n.analytics-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: white;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  overflow-x: auto;\n}\n.analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border-radius: 0.5rem;\n  white-space: nowrap;\n}\n.analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #f8fafc;\n}\n.analytics-tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  background-color: #0d9488;\n  color: white;\n}\n.analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .tab-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.tab-content[_ngcontent-%COMP%]   .tab-placeholder[_ngcontent-%COMP%] {\n  background: white;\n  padding: 3rem 2rem;\n  border-radius: 0.75rem;\n  text-align: center;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.tab-content[_ngcontent-%COMP%]   .tab-placeholder[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   .tab-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n.analytics-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-style: italic;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.analytics-cards[_ngcontent-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value.danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.abc-table-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n}\n.abc-table-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1.5rem 0;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 0.875rem;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .analytics-table[_ngcontent-%COMP%]   .abc-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.abc-table-section[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.metric-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-change[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-change.positive[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  color: #0d9488;\n  flex-shrink: 0;\n}\n.charts-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%], \n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%] {\n  height: 260px;\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n  display: block;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .panel-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .panel-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .panel-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.875rem;\n  color: #1e293b;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .panel-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  font-weight: 600;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-size: 0.75rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e2e8f0;\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #1f2937;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .badge.a[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .badge.b[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .badge.c[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #92400e;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1e293b;\n}\n.charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .abc-breakdown[_ngcontent-%COMP%]   .abc-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.voice-assistant[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: #0d9488;\n  color: white;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.voice-assistant[_ngcontent-%COMP%]:hover {\n  background: #0f766e;\n  transform: scale(1.1);\n}\n@media (max-width: 768px) {\n  .analytics[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .analytics-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.75rem;\n  }\n  .analytics-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .metric-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .charts-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .voice-assistant[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n    width: 3rem;\n    height: 3rem;\n  }\n}\n/*# sourceMappingURL=analytics.component.css.map */"] });
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
            <option value="6m">Last 6 Months</option>\r
            <option value="3m">Last 3 Months</option>\r
            <option value="1m">Last Month</option>\r
            <option value="1y">Last Year</option>\r
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
        <button class="export-btn !hidden" (click)="exportReport()">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
          </svg>\r
          Export Report\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- KPI Cards Row: Inventory Turnover, Carrying Cost, Dead Stock Value, Avg Days on Hand -->\r
    <div class="metric-cards-row">\r
      <!-- Inventory Turnover -->\r
      <div class="metric-card turnover" *ngIf="turnoverData">\r
        <div class="card-content">\r
          <div class="metric-value">{{ (turnoverData.turnover || 0) | number:'1.1-2' }}x</div>\r
          <div class="metric-label">Inventory Turnover</div>\r
          <div class="metric-change" *ngIf="kpis?.turnover_change_pct !== null && kpis?.turnover_change_pct !== undefined">\r
            {{ kpis?.turnover_change_pct! | number:'1.0-2' }}% from last period\r
          </div>\r
        </div>\r
        <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>\r
        </svg>\r
      </div>\r
\r
      <!-- Carrying Cost (Derived monthly) -->\r
      <div class="metric-card carrying-cost">\r
        <div class="card-content">\r
          <div class="metric-value">{{ formatCurrency(getCarryingCostMonthly()) }}</div>\r
          <div class="metric-label">Carrying Cost</div>\r
          <div class="metric-change">Monthly holding cost</div>\r
        </div>\r
        <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r
        </svg>\r
      </div>\r
\r
      <!-- Dead Stock Value (Derived from slow_moving) -->\r
      <div class="metric-card dead-stock">\r
        <div class="card-content">\r
          <div class="metric-value warning">{{ formatCurrency(getDeadStockValue()) }}</div>\r
          <div class="metric-label">Dead Stock Value</div>\r
          <div class="metric-change">{{ getDeadStockItems() }} items</div>\r
        </div>\r
        <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
        </svg>\r
      </div>\r
\r
      <!-- Avg Days on Hand -->\r
      <div class="metric-card avg-days" *ngIf="turnoverData">\r
        <div class="card-content">\r
          <div class="metric-value">{{ turnoverData.days_on_hand !== null ? (turnoverData.days_on_hand | number:'1.0-0') + ' days' : '-' }}</div>\r
          <div class="metric-label">Avg Days on Hand</div>\r
        </div>\r
        <svg class="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
        </svg>\r
      </div>\r
    </div>\r
\r
    <!-- Navigation Tabs -->\r
    <div class="analytics-tabs">\r
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
    <!-- Overview Tab Content removed -->\r
    <div *ngIf="false" class="tab-content">\r
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
              <tr class="uppercase">\r
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
            <div class="chart-placeholder" *ngIf="!categoryTurnover?.length">\r
              <div class="empty-state">No data yet</div>\r
            </div>\r
            <div class="bar-chart" *ngIf="categoryTurnover?.length">\r
              <div class="bars">\r
                <div class="bar" *ngFor="let c of categoryTurnover.slice(0,8)" [title]="c.category_name + ': ' + (c.turnover | number:'1.1-2') + 'x'">\r
                  <div class="bar-fill" [style.height]="(c.turnover / getMaxCategoryTurnover()) * 100 + '%'">\r
                    <span class="bar-value">{{ (c.turnover || 0) | number:'1.1-2' }}x</span>\r
                  </div>\r
                  <div class="bar-label">{{ c.category_name }}</div>\r
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
          @if (monthlyTrend.length > 0){\r
            <div class="chart-container" style="height:220px;padding:12px 8px;">\r
              <canvas id="monthlyTrendCanvas"></canvas>\r
            </div>\r
          }\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Other Tab Contents -->\r
    <div *ngIf="activeTab === 'abc'" class="tab-content">\r
      <div class="charts-section">\r
        <div class="chart-panel">\r
          <div class="panel-header">\r
            <h3 class="panel-title">ABC Analysis Distribution</h3>\r
            <p class="panel-subtitle">Parts categorized by value contribution</p>\r
          </div>\r
          <div class="chart-container" style="height:260px;padding:12px 8px;">\r
            <canvas id="abcPieCanvas"></canvas>\r
          </div>\r
        </div>\r
\r
        <div class="chart-panel">\r
          <div class="panel-header">\r
            <h3 class="panel-title">ABC Category Breakdown</h3>\r
            <p class="panel-subtitle">Value and quantity by category</p>\r
          </div>\r
          <div class="abc-breakdown">\r
            <div class="abc-row a">\r
              <div class="left">\r
                <span class="badge a">Class A</span>\r
                <div class="items">{{ abcSummary.classA.count }} items</div>\r
                <div class="sub">{{ getClassValuePercentage('A') }}% of total value</div>\r
              </div>\r
              <div class="right">\r
                <div class="value">{{ formatCurrency(abcSummary.classA.value) }}</div>\r
                <div class="qty">{{ getClassQuantityPercentage('A') }}% of quantity</div>\r
              </div>\r
            </div>\r
\r
            <div class="abc-row b">\r
              <div class="left">\r
                <span class="badge b">Class B</span>\r
                <div class="items">{{ abcSummary.classB.count }} items</div>\r
                <div class="sub">{{ getClassValuePercentage('B') }}% of total value</div>\r
              </div>\r
              <div class="right">\r
                <div class="value">{{ formatCurrency(abcSummary.classB.value) }}</div>\r
                <div class="qty">{{ getClassQuantityPercentage('B') }}% of quantity</div>\r
              </div>\r
            </div>\r
\r
            <div class="abc-row c">\r
              <div class="left">\r
                <span class="badge c">Class C</span>\r
                <div class="items">{{ abcSummary.classC.count }} items</div>\r
                <div class="sub">{{ getClassValuePercentage('C') }}% of total value</div>\r
              </div>\r
              <div class="right">\r
                <div class="value">{{ formatCurrency(abcSummary.classC.value) }}</div>\r
                <div class="qty">{{ getClassQuantityPercentage('C') }}% of quantity</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
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
      <div class="charts-section" *ngIf="agingData">\r
        <!-- Left: Stock Age Distribution -->\r
        <div class="chart-panel">\r
          <div class="panel-header">\r
            <h3 class="panel-title">Stock Age Distribution</h3>\r
            <p class="panel-subtitle">Inventory value by age buckets</p>\r
          </div>\r
          <div class="chart-container" style="height:260px;padding:12px 8px;">\r
            <canvas id="agingBucketsCanvas"></canvas>\r
          </div>\r
        </div>\r
\r
        <!-- Right: Slow Moving Items -->\r
        <div class="chart-panel">\r
          <div class="panel-header">\r
            <h3 class="panel-title">Slow Moving Items</h3>\r
            <p class="panel-subtitle">Items with low turnover requiring attention</p>\r
          </div>\r
          <div class="table-container" *ngIf="agingData?.slow_moving?.length; else noSlowMoving">\r
            <table class="panel-table">\r
              <thead>\r
                <tr class="uppercase">\r
                  <th>Part</th>\r
                  <th>On Hand</th>\r
                  <th>Value</th>\r
                  <th>Days Since</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let item of agingData.slow_moving">\r
                  <td>{{ item.name || item.part_id }}</td>\r
                  <td>{{ item.on_hand }}</td>\r
                  <td>{{ formatCurrency(item.value) }}</td>\r
                  <td>{{ item.days_since_movement }}</td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
          <ng-template #noSlowMoving>\r
            <div class="chart-container">\r
              <div class="chart-placeholder">No slow moving items</div>\r
            </div>\r
          </ng-template>\r
        </div>\r
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
`, styles: ["/* src/app/inventory/components/analytics/analytics.component.scss */\n.analytics {\n  padding: 1.5rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  position: relative;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #0d9488;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state p {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.error-state .error-title {\n  color: #dc2626;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.error-state .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.error-state .btn.btn-primary {\n  background-color: #0d9488;\n  color: white;\n  border: none;\n}\n.error-state .btn.btn-primary:hover {\n  background-color: #0f766e;\n}\n.analytics-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.analytics-header .header-left .main-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-header .header-left .subtitle {\n  color: #64748b;\n  font-size: 1.125rem;\n  margin: 0;\n}\n.analytics-header .header-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.analytics-header .header-right .period-dropdown {\n  position: relative;\n}\n.analytics-header .header-right .period-dropdown .period-select {\n  appearance: none;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  font-size: 0.875rem;\n  color: #374151;\n  cursor: pointer;\n  min-width: 150px;\n}\n.analytics-header .header-right .period-dropdown .period-select:focus {\n  outline: none;\n  border-color: #0d9488;\n  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);\n}\n.analytics-header .header-right .period-dropdown .dropdown-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.analytics-header .header-right .refresh-btn,\n.analytics-header .header-right .export-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  border: none;\n  cursor: pointer;\n}\n.analytics-header .header-right .refresh-btn:hover,\n.analytics-header .header-right .export-btn:hover {\n  transform: translateY(-1px);\n}\n.analytics-header .header-right .refresh-btn {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.analytics-header .header-right .refresh-btn:hover {\n  background-color: #e5e7eb;\n}\n.analytics-header .header-right .export-btn {\n  background-color: #0d9488;\n  color: white;\n}\n.analytics-header .header-right .export-btn:hover {\n  background-color: #0f766e;\n}\n.analytics-tabs {\n  display: flex;\n  background: white;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  overflow-x: auto;\n}\n.analytics-tabs .tab-button {\n  flex: 1;\n  min-width: 0;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border-radius: 0.5rem;\n  white-space: nowrap;\n}\n.analytics-tabs .tab-button:hover {\n  color: #374151;\n  background-color: #f8fafc;\n}\n.analytics-tabs .tab-button.active {\n  background-color: #0d9488;\n  color: white;\n}\n.analytics-tabs .tab-button .tab-text {\n  font-size: 0.875rem;\n}\n.tab-content .tab-placeholder {\n  background: white;\n  padding: 3rem 2rem;\n  border-radius: 0.75rem;\n  text-align: center;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.tab-content .tab-placeholder h3 {\n  color: #1e293b;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.tab-content .tab-placeholder p {\n  color: #64748b;\n  font-size: 1.125rem;\n}\n.analytics-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.analytics-cards .analytics-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.analytics-cards .analytics-card .card-header {\n  margin-bottom: 1.5rem;\n}\n.analytics-cards .analytics-card .card-header .card-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.analytics-cards .analytics-card .card-header .card-subtitle {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-style: italic;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item:last-child {\n  border-bottom: none;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item .metric-label {\n  color: #64748b;\n  font-weight: 500;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item .metric-value {\n  font-weight: 600;\n  color: #1e293b;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item .metric-value.warning {\n  color: #f59e0b;\n}\n.analytics-cards .analytics-card .card-metrics .metric-item .metric-value.danger {\n  color: #dc2626;\n}\n.abc-table-section {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n}\n.abc-table-section .section-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1.5rem 0;\n}\n.abc-table-section .table-container {\n  overflow-x: auto;\n}\n.abc-table-section .table-container .analytics-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.abc-table-section .table-container .analytics-table th,\n.abc-table-section .table-container .analytics-table td {\n  padding: 1rem;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n.abc-table-section .table-container .analytics-table th {\n  background-color: #f8fafc;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.abc-table-section .table-container .analytics-table td {\n  color: #1e293b;\n  font-size: 0.875rem;\n}\n.abc-table-section .table-container .analytics-table .abc-badge {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.abc-table-section .table-container .table-footer {\n  padding: 1rem 0;\n  text-align: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.metric-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.metric-cards-row .metric-card {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.metric-cards-row .metric-card .card-content {\n  flex: 1;\n}\n.metric-cards-row .metric-card .card-content .metric-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.metric-cards-row .metric-card .card-content .metric-value.warning {\n  color: #f59e0b;\n}\n.metric-cards-row .metric-card .card-content .metric-label {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.metric-cards-row .metric-card .card-content .metric-change {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.metric-cards-row .metric-card .card-content .metric-change.positive {\n  color: #059669;\n}\n.metric-cards-row .metric-card .metric-icon {\n  width: 3rem;\n  height: 3rem;\n  color: #0d9488;\n  flex-shrink: 0;\n}\n.charts-section {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.charts-section .chart-panel {\n  background: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.charts-section .chart-panel .panel-header {\n  margin-bottom: 1.5rem;\n}\n.charts-section .chart-panel .panel-header .panel-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.charts-section .chart-panel .panel-header .panel-subtitle {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.charts-section .chart-panel .chart-container .chart-placeholder,\n.charts-section .chart-panel .chart-container .line-chart {\n  height: 260px;\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.charts-section .chart-panel .chart-container canvas {\n  width: 100%;\n  height: 100% !important;\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n  display: block;\n}\n.charts-section .chart-panel .table-container {\n  overflow: auto;\n}\n.charts-section .chart-panel .table-container .panel-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.charts-section .chart-panel .table-container .panel-table th,\n.charts-section .chart-panel .table-container .panel-table td {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.875rem;\n  color: #1e293b;\n}\n.charts-section .chart-panel .table-container .panel-table th {\n  background-color: #f8fafc;\n  font-weight: 600;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-size: 0.75rem;\n}\n.charts-section .chart-panel .abc-breakdown {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e2e8f0;\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #1f2937;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .left .badge {\n  padding: 0.25rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .left .badge.a {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .left .badge.b {\n  background: #d1fae5;\n  color: #065f46;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .left .badge.c {\n  background: #ffedd5;\n  color: #92400e;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .left .items {\n  font-weight: 600;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .left .sub {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .right {\n  text-align: right;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .right .value {\n  font-weight: 700;\n  color: #1e293b;\n}\n.charts-section .chart-panel .abc-breakdown .abc-row .right .qty {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.voice-assistant {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: #0d9488;\n  color: white;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.voice-assistant:hover {\n  background: #0f766e;\n  transform: scale(1.1);\n}\n@media (max-width: 768px) {\n  .analytics {\n    padding: 1rem;\n  }\n  .analytics-header {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .analytics-header .header-right {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .analytics-tabs .tab-button {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.75rem;\n  }\n  .analytics-cards {\n    grid-template-columns: 1fr;\n  }\n  .metric-cards-row {\n    grid-template-columns: 1fr;\n  }\n  .charts-section {\n    grid-template-columns: 1fr;\n  }\n  .voice-assistant {\n    bottom: 1rem;\n    right: 1rem;\n    width: 3rem;\n    height: 3rem;\n  }\n}\n/*# sourceMappingURL=analytics.component.css.map */\n"] }]
  }], () => [{ type: InventoryAnalyticsService }, { type: CurrencyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src/app/inventory/components/analytics/analytics.component.ts", lineNumber: 15 });
})();
export {
  AnalyticsComponent
};
//# sourceMappingURL=chunk-RDTFYGVV.js.map
