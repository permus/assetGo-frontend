import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JZMUYI4.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/analytics/analytics.component.ts
var AnalyticsComponent = class _AnalyticsComponent {
  activeTab = "turnover";
  selectedPeriod = "6months";
  // Sample data for different periods
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
    console.log("Exporting report for period:", this.selectedPeriod);
  }
  getCurrentData() {
    return this.periodData[this.selectedPeriod];
  }
  static \u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], decls: 160, vars: 15, consts: [[1, "analytics"], [1, "analytics-header"], [1, "header-left"], [1, "main-title"], [1, "subtitle"], [1, "header-right"], [1, "period-dropdown"], [1, "period-select", 3, "change", "value"], ["value", "6months"], ["value", "3months"], ["value", "1month"], ["value", "1year"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "export-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "metric-cards-row"], [1, "metric-card", "turnover"], [1, "card-content"], [1, "metric-value"], [1, "metric-label"], [1, "metric-change", "positive"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "metric-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"], [1, "metric-card", "carrying-cost"], [1, "metric-change"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "metric-card", "dead-stock"], [1, "metric-value", "warning"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "metric-card", "avg-days"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "analytics-tabs"], [1, "tab-button", 3, "click"], [1, "tab-text"], [1, "charts-section"], [1, "chart-panel"], [1, "panel-header"], [1, "panel-title"], [1, "panel-subtitle"], [1, "chart-container"], [1, "chart-placeholder"], [1, "chart-grid"], [1, "y-axis"], [1, "chart-area"], [1, "grid-lines"], [1, "grid-line"], [1, "x-axis"], [1, "line-chart"], ["viewBox", "0 0 400 200", "preserveAspectRatio", "none", 1, "trend-line"], ["d", "M0,40 L67,160 L133,80 L200,120 L267,60 L333,100 L400,80", "stroke", "#0d9488", "stroke-width", "3", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "0", "cy", "40", "r", "4", "fill", "#0d9488"], ["cx", "67", "cy", "160", "r", "4", "fill", "#0d9488"], ["cx", "133", "cy", "80", "r", "4", "fill", "#0d9488"], ["cx", "200", "cy", "120", "r", "4", "fill", "#0d9488"], ["cx", "267", "cy", "60", "r", "4", "fill", "#0d9488"], ["cx", "333", "cy", "100", "r", "4", "fill", "#0d9488"], ["cx", "400", "cy", "80", "r", "4", "fill", "#0d9488"], [1, "voice-assistant"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"]], template: function AnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Inventory Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Advanced insights and performance metrics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "select", 7);
      \u0275\u0275listener("change", function AnalyticsComponent_Template_select_change_9_listener($event) {
        return ctx.onPeriodChange($event);
      });
      \u0275\u0275elementStart(10, "option", 8);
      \u0275\u0275text(11, "Last 6 Months");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 9);
      \u0275\u0275text(13, "Last 3 Months");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 10);
      \u0275\u0275text(15, "Last Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 11);
      \u0275\u0275text(17, "Last Year");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 12);
      \u0275\u0275element(19, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "button", 14);
      \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_20_listener() {
        return ctx.exportReport();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 15);
      \u0275\u0275element(22, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Export Report ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "div", 17)(25, "div", 18)(26, "div", 19)(27, "div", 20);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 21);
      \u0275\u0275text(30, "Inventory Turnover");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(33, "svg", 23);
      \u0275\u0275element(34, "path", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "div", 25)(36, "div", 19)(37, "div", 20);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 21);
      \u0275\u0275text(40, "Carrying Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 26);
      \u0275\u0275text(42, "Monthly holding cost");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 23);
      \u0275\u0275element(44, "path", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div", 28)(46, "div", 19)(47, "div", 29);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 21);
      \u0275\u0275text(50, "Dead Stock Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 26);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(53, "svg", 23);
      \u0275\u0275element(54, "path", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(55, "div", 31)(56, "div", 19)(57, "div", 20);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 21);
      \u0275\u0275text(60, "Avg Days on Hand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 26);
      \u0275\u0275text(62, "Average inventory age");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(63, "svg", 23);
      \u0275\u0275element(64, "path", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(65, "div", 33)(66, "button", 34);
      \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_66_listener() {
        return ctx.onTabChange("turnover");
      });
      \u0275\u0275elementStart(67, "span", 35);
      \u0275\u0275text(68, "Turnover Analysis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "button", 34);
      \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_69_listener() {
        return ctx.onTabChange("abc");
      });
      \u0275\u0275elementStart(70, "span", 35);
      \u0275\u0275text(71, "ABC Analysis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "button", 34);
      \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_72_listener() {
        return ctx.onTabChange("demand");
      });
      \u0275\u0275elementStart(73, "span", 35);
      \u0275\u0275text(74, "Demand Forecast");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "button", 34);
      \u0275\u0275listener("click", function AnalyticsComponent_Template_button_click_75_listener() {
        return ctx.onTabChange("aging");
      });
      \u0275\u0275elementStart(76, "span", 35);
      \u0275\u0275text(77, "Stock Aging");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 36)(79, "div", 37)(80, "div", 38)(81, "h3", 39);
      \u0275\u0275text(82, "Inventory Turnover by Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p", 40);
      \u0275\u0275text(84, "How quickly inventory moves across categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 41)(86, "div", 42)(87, "div", 43)(88, "div", 44)(89, "span");
      \u0275\u0275text(90, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "span");
      \u0275\u0275text(96, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span");
      \u0275\u0275text(98, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 45)(100, "div", 46);
      \u0275\u0275element(101, "div", 47)(102, "div", 47)(103, "div", 47)(104, "div", 47)(105, "div", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 48)(107, "span");
      \u0275\u0275text(108, "ews");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(109, "div", 37)(110, "div", 38)(111, "h3", 39);
      \u0275\u0275text(112, "Monthly Turnover Trend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 40);
      \u0275\u0275text(114, "Turnover ratio over time");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 41)(116, "div", 49)(117, "div", 44)(118, "span");
      \u0275\u0275text(119, "3.6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "span");
      \u0275\u0275text(121, "2.7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "1.8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "span");
      \u0275\u0275text(125, "0.9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "span");
      \u0275\u0275text(127, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 45)(129, "div", 46);
      \u0275\u0275element(130, "div", 47)(131, "div", 47)(132, "div", 47)(133, "div", 47)(134, "div", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(135, "svg", 50);
      \u0275\u0275element(136, "path", 51)(137, "circle", 52)(138, "circle", 53)(139, "circle", 54)(140, "circle", 55)(141, "circle", 56)(142, "circle", 57)(143, "circle", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(144, "div", 48)(145, "span");
      \u0275\u0275text(146, "Mar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "span");
      \u0275\u0275text(148, "Apr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "span");
      \u0275\u0275text(150, "May");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "span");
      \u0275\u0275text(152, "Jun");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "span");
      \u0275\u0275text(154, "Jul");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "span");
      \u0275\u0275text(156, "Aug");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(157, "button", 59);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(158, "svg", 60);
      \u0275\u0275element(159, "path", 61);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.selectedPeriod);
      \u0275\u0275advance(19);
      \u0275\u0275textInterpolate(ctx.getCurrentData().turnover);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.getCurrentData().turnoverChange);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.getCurrentData().carryingCost);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.getCurrentData().deadStockValue);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.getCurrentData().deadStockItems);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.getCurrentData().avgDays);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "turnover");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "abc");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "demand");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "aging");
    }
  }, dependencies: [CommonModule], styles: ["\n\n.analytics[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  gap: 2rem;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 150px;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%]   .period-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  position: relative;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #374151;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-change[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-change.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  width: 2rem;\n  height: 2rem;\n  color: #9ca3af;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card.turnover[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card.carrying-cost[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card.dead-stock[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card.avg-days[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 0.25rem;\n  margin-bottom: 2rem;\n  overflow-x: auto;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  background: none;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.analytics[_ngcontent-%COMP%]   .analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .tab-text[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  min-height: 300px;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 200px;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .y-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 1rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #f3f4f6;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(2) {\n  top: 25%;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 50%;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(4) {\n  top: 75%;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(5) {\n  top: 100%;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]   .chart-grid[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .x-axis[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .y-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 1rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #f3f4f6;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(2) {\n  top: 25%;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 50%;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(4) {\n  top: 75%;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .grid-lines[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%]:nth-child(5) {\n  top: 100%;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .trend-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n.analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%]   .chart-area[_ngcontent-%COMP%]   .x-axis[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.analytics[_ngcontent-%COMP%]   .voice-assistant[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.analytics[_ngcontent-%COMP%]   .voice-assistant[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.analytics[_ngcontent-%COMP%]   .voice-assistant[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 1024px) {\n  .analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .analytics[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .period-dropdown[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n    font-size: 0.75rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .charts-section[_ngcontent-%COMP%]   .chart-panel[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n    min-height: 250px;\n  }\n}\n@media (max-width: 480px) {\n  .analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .analytics-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .analytics[_ngcontent-%COMP%]   .metric-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .analytics[_ngcontent-%COMP%]   .analytics-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=analytics.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsComponent, [{
    type: Component,
    args: [{ selector: "app-analytics", standalone: true, imports: [CommonModule], template: `<div class="analytics">\r
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
      <button class="export-btn" (click)="exportReport()">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
        </svg>\r
        Export Report\r
      </button>\r
    </div>\r
  </div>\r
\r
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
                <span>ews</span>\r
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
\r
  <!-- Voice Assistant Button -->\r
  <button class="voice-assistant">\r
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>\r
    </svg>\r
  </button>\r
</div>\r
`, styles: ["/* src/app/inventory/components/analytics/analytics.component.scss */\n.analytics {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.analytics .analytics-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  gap: 2rem;\n}\n.analytics .analytics-header .header-left .main-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.analytics .analytics-header .header-left .subtitle {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n}\n.analytics .analytics-header .header-right {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.analytics .analytics-header .header-right .period-dropdown {\n  position: relative;\n  min-width: 150px;\n}\n.analytics .analytics-header .header-right .period-dropdown .period-select {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.analytics .analytics-header .header-right .period-dropdown .period-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.analytics .analytics-header .header-right .period-dropdown .dropdown-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.analytics .analytics-header .header-right .export-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.analytics .analytics-header .header-right .export-btn:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.analytics .analytics-header .header-right .export-btn svg {\n  color: #6b7280;\n}\n.analytics .metric-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.analytics .metric-cards-row .metric-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  position: relative;\n}\n.analytics .metric-cards-row .metric-card .card-content .metric-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n.analytics .metric-cards-row .metric-card .card-content .metric-value.warning {\n  color: #f59e0b;\n}\n.analytics .metric-cards-row .metric-card .card-content .metric-label {\n  font-size: 1rem;\n  color: #374151;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.analytics .metric-cards-row .metric-card .card-content .metric-change {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.analytics .metric-cards-row .metric-card .card-content .metric-change.positive {\n  color: #10b981;\n}\n.analytics .metric-cards-row .metric-card .metric-icon {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  width: 2rem;\n  height: 2rem;\n  color: #9ca3af;\n}\n.analytics .metric-cards-row .metric-card.turnover .metric-icon {\n  color: #10b981;\n}\n.analytics .metric-cards-row .metric-card.carrying-cost .metric-icon {\n  color: #3b82f6;\n}\n.analytics .metric-cards-row .metric-card.dead-stock .metric-icon {\n  color: #f59e0b;\n}\n.analytics .metric-cards-row .metric-card.avg-days .metric-icon {\n  color: #8b5cf6;\n}\n.analytics .analytics-tabs {\n  display: flex;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 0.25rem;\n  margin-bottom: 2rem;\n  overflow-x: auto;\n}\n.analytics .analytics-tabs .tab-button {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  background: none;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.analytics .analytics-tabs .tab-button:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.analytics .analytics-tabs .tab-button.active {\n  background-color: #3b82f6;\n  color: white;\n}\n.analytics .analytics-tabs .tab-button .tab-text {\n  margin: 0;\n}\n.analytics .charts-section {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.analytics .charts-section .chart-panel {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.analytics .charts-section .chart-panel .panel-header {\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.analytics .charts-section .chart-panel .panel-header .panel-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.analytics .charts-section .chart-panel .panel-header .panel-subtitle {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.analytics .charts-section .chart-panel .chart-container {\n  padding: 1.5rem;\n  min-height: 300px;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid {\n  display: flex;\n  width: 100%;\n  height: 200px;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .y-axis {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 1rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .chart-area {\n  flex: 1;\n  position: relative;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .chart-area .grid-lines {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .chart-area .grid-lines .grid-line {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #f3f4f6;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .chart-area .grid-lines .grid-line:nth-child(1) {\n  top: 0;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .chart-area .grid-lines .grid-line:nth-child(2) {\n  top: 25%;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .chart-area .grid-lines .grid-line:nth-child(3) {\n  top: 50%;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .chart-area .grid-lines .grid-line:nth-child(4) {\n  top: 75%;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .chart-area .grid-lines .grid-line:nth-child(5) {\n  top: 100%;\n}\n.analytics .charts-section .chart-panel .chart-container .chart-placeholder .chart-grid .chart-area .x-axis {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart {\n  height: 100%;\n  display: flex;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .y-axis {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: 1rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area {\n  flex: 1;\n  position: relative;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area .grid-lines {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area .grid-lines .grid-line {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #f3f4f6;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area .grid-lines .grid-line:nth-child(1) {\n  top: 0;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area .grid-lines .grid-line:nth-child(2) {\n  top: 25%;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area .grid-lines .grid-line:nth-child(3) {\n  top: 50%;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area .grid-lines .grid-line:nth-child(4) {\n  top: 75%;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area .grid-lines .grid-line:nth-child(5) {\n  top: 100%;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area .trend-line {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n.analytics .charts-section .chart-panel .chart-container .line-chart .chart-area .x-axis {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1rem;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.analytics .voice-assistant {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.analytics .voice-assistant:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.analytics .voice-assistant svg {\n  color: white;\n}\n@media (max-width: 1024px) {\n  .analytics .charts-section {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .analytics {\n    padding: 1rem;\n  }\n  .analytics .analytics-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .analytics .analytics-header .header-right {\n    justify-content: stretch;\n  }\n  .analytics .analytics-header .header-right .period-dropdown {\n    min-width: auto;\n  }\n  .analytics .analytics-header .header-right .export-btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .analytics .metric-cards-row {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .analytics .metric-cards-row .metric-card {\n    padding: 1rem;\n  }\n  .analytics .metric-cards-row .metric-card .card-content .metric-value {\n    font-size: 1.5rem;\n  }\n  .analytics .metric-cards-row .metric-card .card-content .metric-label {\n    font-size: 0.875rem;\n  }\n  .analytics .metric-cards-row .metric-card .metric-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .analytics .analytics-tabs .tab-button {\n    padding: 0.5rem 1rem;\n    font-size: 0.75rem;\n  }\n  .analytics .charts-section .chart-panel .chart-container {\n    padding: 1rem;\n    min-height: 250px;\n  }\n}\n@media (max-width: 480px) {\n  .analytics .analytics-header .header-left .main-title {\n    font-size: 1.5rem;\n  }\n  .analytics .analytics-header .header-left .subtitle {\n    font-size: 1rem;\n  }\n  .analytics .metric-cards-row {\n    grid-template-columns: 1fr;\n  }\n  .analytics .analytics-tabs .tab-button {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=analytics.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src/app/inventory/components/analytics/analytics.component.ts", lineNumber: 11 });
})();
export {
  AnalyticsComponent
};
//# sourceMappingURL=chunk-OTII2WEB.js.map
