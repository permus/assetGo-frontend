import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-7JZMUYI4.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/dashboard-overview/dashboard-overview.component.ts
var DashboardOverviewComponent = class _DashboardOverviewComponent {
  constructor() {
  }
  static \u0275fac = function DashboardOverviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardOverviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardOverviewComponent, selectors: [["app-dashboard-overview"]], decls: 133, vars: 0, consts: [[1, "dashboard-overview"], [1, "metrics-row"], [1, "metric-card"], [1, "card-header"], [1, "card-title"], [1, "card-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "card-value"], [1, "card-trend", "positive"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 10l7-7m0 0l7 7m-7-7v18"], [1, "card-icon", "warning"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "card-value", "warning"], [1, "card-message"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "card-unit"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "card-value", "danger"], [1, "card-description"], [1, "classification-row"], [1, "classification-card"], [1, "classification-title"], [1, "classification-stats"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], [1, "progress-bar"], [1, "progress-fill", 2, "width", "0%"], [1, "alerts-section"], [1, "alerts-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "alerts-title"], [1, "alert-item"], [1, "alert-left"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "warning-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "alert-content"], [1, "alert-part"], [1, "alert-details"], [1, "alert-right"], [1, "priority-tag", "high"], [1, "fab"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"]], template: function DashboardOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      \u0275\u0275text(5, "Total Inventory Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 6);
      \u0275\u0275element(8, "path", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275text(10, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " +2.1% from last month ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "h4", 4);
      \u0275\u0275text(18, "Parts at Reorder Point");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 6);
      \u0275\u0275element(21, "path", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "div", 14);
      \u0275\u0275text(23, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15);
      \u0275\u0275text(25, "Need immediate attention");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 2)(27, "div", 3)(28, "h4", 4);
      \u0275\u0275text(29, "Average Turnover");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 6);
      \u0275\u0275element(32, "path", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "div", 8);
      \u0275\u0275text(34, "0.0x");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 17);
      \u0275\u0275text(36, "Times per year");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 2)(38, "div", 3)(39, "h4", 4);
      \u0275\u0275text(40, "Slow Moving Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 6);
      \u0275\u0275element(43, "path", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(44, "div", 19);
      \u0275\u0275text(45, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 20);
      \u0275\u0275text(47, "180+ days without movement");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 21)(49, "div", 22)(50, "h4", 23);
      \u0275\u0275text(51, "Class A Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 24)(53, "div", 25)(54, "span", 26);
      \u0275\u0275text(55, "Count:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 27);
      \u0275\u0275text(57, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 25)(59, "span", 26);
      \u0275\u0275text(60, "Value:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 27);
      \u0275\u0275text(62, "$0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 25)(64, "span", 26);
      \u0275\u0275text(65, "Percentage:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span", 27);
      \u0275\u0275text(67, "0.0% of total value");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 28);
      \u0275\u0275element(69, "div", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 22)(71, "h4", 23);
      \u0275\u0275text(72, "Class B Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 24)(74, "div", 25)(75, "span", 26);
      \u0275\u0275text(76, "Count:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 27);
      \u0275\u0275text(78, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 25)(80, "span", 26);
      \u0275\u0275text(81, "Value:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span", 27);
      \u0275\u0275text(83, "$0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 25)(85, "span", 26);
      \u0275\u0275text(86, "Percentage:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span", 27);
      \u0275\u0275text(88, "0.0% of total value");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 28);
      \u0275\u0275element(90, "div", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 22)(92, "h4", 23);
      \u0275\u0275text(93, "Class C Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 24)(95, "div", 25)(96, "span", 26);
      \u0275\u0275text(97, "Count:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span", 27);
      \u0275\u0275text(99, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 25)(101, "span", 26);
      \u0275\u0275text(102, "Value:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span", 27);
      \u0275\u0275text(104, "$0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 25)(106, "span", 26);
      \u0275\u0275text(107, "Percentage:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span", 27);
      \u0275\u0275text(109, "0.0% of total value");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "div", 28);
      \u0275\u0275element(111, "div", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 30)(113, "div", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(114, "svg", 32);
      \u0275\u0275element(115, "path", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(116, "h4", 34);
      \u0275\u0275text(117, "Active Reorder Alerts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 35)(119, "div", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(120, "svg", 37);
      \u0275\u0275element(121, "path", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(122, "div", 39)(123, "span", 40);
      \u0275\u0275text(124, "part 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "span", 41);
      \u0275\u0275text(126, "Current: 0 | Reorder at: 2");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "div", 42)(128, "span", 43);
      \u0275\u0275text(129, "high");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(130, "button", 44);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(131, "svg", 6);
      \u0275\u0275element(132, "path", 45);
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n.dashboard-overview[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: #f3f4f6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-icon.warning[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-value.danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-trend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-trend.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-trend[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-message[_ngcontent-%COMP%], \n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-unit[_ngcontent-%COMP%], \n.dashboard-overview[_ngcontent-%COMP%]   .metrics-row[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1rem 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .classification-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background-color: #f3f4f6;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .classification-row[_ngcontent-%COMP%]   .classification-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #3b82f6;\n  transition: width 0.3s ease;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alerts-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alerts-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alerts-header[_ngcontent-%COMP%]   .alerts-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-part[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-details[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .priority-tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .priority-tag.high[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.dashboard-overview[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.dashboard-overview[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=dashboard-overview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardOverviewComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-overview", standalone: true, imports: [CommonModule], template: '<div class="dashboard-overview">\r\n  <!-- Top Row - Metric Cards -->\r\n  <div class="metrics-row">\r\n    <div class="metric-card">\r\n      <div class="card-header">\r\n        <h4 class="card-title">Total Inventory Value</h4>\r\n        <div class="card-icon">\r\n          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n      <div class="card-value">$0</div>\r\n      <div class="card-trend positive">\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>\r\n        </svg>\r\n        +2.1% from last month\r\n      </div>\r\n    </div>\r\n\r\n    <div class="metric-card">\r\n      <div class="card-header">\r\n        <h4 class="card-title">Parts at Reorder Point</h4>\r\n        <div class="card-icon warning">\r\n          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n      <div class="card-value warning">1</div>\r\n      <div class="card-message">Need immediate attention</div>\r\n    </div>\r\n\r\n    <div class="metric-card">\r\n      <div class="card-header">\r\n        <h4 class="card-title">Average Turnover</h4>\r\n        <div class="card-icon">\r\n          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n      <div class="card-value">0.0x</div>\r\n      <div class="card-unit">Times per year</div>\r\n    </div>\r\n\r\n    <div class="metric-card">\r\n      <div class="card-header">\r\n        <h4 class="card-title">Slow Moving Items</h4>\r\n        <div class="card-icon">\r\n          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n      <div class="card-value danger">0</div>\r\n      <div class="card-description">180+ days without movement</div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Middle Row - Classification Cards -->\r\n  <div class="classification-row">\r\n    <div class="classification-card">\r\n      <h4 class="classification-title">Class A Items</h4>\r\n      <div class="classification-stats">\r\n        <div class="stat-item">\r\n          <span class="stat-label">Count:</span>\r\n          <span class="stat-value">0</span>\r\n        </div>\r\n        <div class="stat-item">\r\n          <span class="stat-label">Value:</span>\r\n          <span class="stat-value">$0</span>\r\n        </div>\r\n        <div class="stat-item">\r\n          <span class="stat-label">Percentage:</span>\r\n          <span class="stat-value">0.0% of total value</span>\r\n        </div>\r\n      </div>\r\n      <div class="progress-bar">\r\n        <div class="progress-fill" style="width: 0%"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="classification-card">\r\n      <h4 class="classification-title">Class B Items</h4>\r\n      <div class="classification-stats">\r\n        <div class="stat-item">\r\n          <span class="stat-label">Count:</span>\r\n          <span class="stat-value">0</span>\r\n        </div>\r\n        <div class="stat-item">\r\n          <span class="stat-label">Value:</span>\r\n          <span class="stat-value">$0</span>\r\n        </div>\r\n        <div class="stat-item">\r\n          <span class="stat-label">Percentage:</span>\r\n          <span class="stat-value">0.0% of total value</span>\r\n        </div>\r\n      </div>\r\n      <div class="progress-bar">\r\n        <div class="progress-fill" style="width: 0%"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="classification-card">\r\n      <h4 class="classification-title">Class C Items</h4>\r\n      <div class="classification-stats">\r\n        <div class="stat-item">\r\n          <span class="stat-label">Count:</span>\r\n          <span class="stat-value">0</span>\r\n        </div>\r\n        <div class="stat-item">\r\n          <span class="stat-label">Value:</span>\r\n          <span class="stat-value">$0</span>\r\n        </div>\r\n        <div class="stat-item">\r\n          <span class="stat-label">Percentage:</span>\r\n          <span class="stat-value">0.0% of total value</span>\r\n        </div>\r\n      </div>\r\n      <div class="progress-bar">\r\n        <div class="progress-fill" style="width: 0%"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Bottom Section - Active Reorder Alerts -->\r\n  <div class="alerts-section">\r\n    <div class="alerts-header">\r\n      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>\r\n      </svg>\r\n      <h4 class="alerts-title">Active Reorder Alerts</h4>\r\n    </div>\r\n    \r\n    <div class="alert-item">\r\n      <div class="alert-left">\r\n        <svg class="w-5 h-5 warning-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n        </svg>\r\n        <div class="alert-content">\r\n          <span class="alert-part">part 1</span>\r\n          <span class="alert-details">Current: 0 | Reorder at: 2</span>\r\n        </div>\r\n      </div>\r\n      <div class="alert-right">\r\n        <span class="priority-tag high">high</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Floating Action Button -->\r\n  <button class="fab">\r\n    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>\r\n    </svg>\r\n  </button>\r\n</div>\r\n', styles: ["/* src/app/inventory/components/dashboard-overview/dashboard-overview.component.scss */\n.dashboard-overview {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-overview .metrics-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview .metrics-row .metric-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .metrics-row .metric-card .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.dashboard-overview .metrics-row .metric-card .card-header .card-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview .metrics-row .metric-card .card-header .card-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: #f3f4f6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n}\n.dashboard-overview .metrics-row .metric-card .card-header .card-icon.warning {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.dashboard-overview .metrics-row .metric-card .card-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview .metrics-row .metric-card .card-value.warning {\n  color: #f59e0b;\n}\n.dashboard-overview .metrics-row .metric-card .card-value.danger {\n  color: #ef4444;\n}\n.dashboard-overview .metrics-row .metric-card .card-trend {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.dashboard-overview .metrics-row .metric-card .card-trend.positive {\n  color: #10b981;\n}\n.dashboard-overview .metrics-row .metric-card .card-trend svg {\n  color: #10b981;\n}\n.dashboard-overview .metrics-row .metric-card .card-message,\n.dashboard-overview .metrics-row .metric-card .card-unit,\n.dashboard-overview .metrics-row .metric-card .card-description {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n}\n.dashboard-overview .classification-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.dashboard-overview .classification-row .classification-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .classification-row .classification-card .classification-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1rem 0;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats {\n  margin-bottom: 1rem;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats .stat-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats .stat-item .stat-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview .classification-row .classification-card .classification-stats .stat-item .stat-value {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n.dashboard-overview .classification-row .classification-card .progress-bar {\n  width: 100%;\n  height: 4px;\n  background-color: #f3f4f6;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.dashboard-overview .classification-row .classification-card .progress-bar .progress-fill {\n  height: 100%;\n  background-color: #3b82f6;\n  transition: width 0.3s ease;\n}\n.dashboard-overview .alerts-section {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-overview .alerts-section .alerts-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.dashboard-overview .alerts-section .alerts-header svg {\n  color: #6b7280;\n}\n.dashboard-overview .alerts-section .alerts-header .alerts-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-overview .alerts-section .alert-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .warning-icon {\n  color: #ef4444;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .alert-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .alert-content .alert-part {\n  font-weight: 600;\n  color: #111827;\n}\n.dashboard-overview .alerts-section .alert-item .alert-left .alert-content .alert-details {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-overview .alerts-section .alert-item .alert-right .priority-tag {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.dashboard-overview .alerts-section .alert-item .alert-right .priority-tag.high {\n  background-color: #ef4444;\n  color: white;\n}\n.dashboard-overview .fab {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.dashboard-overview .fab:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.dashboard-overview .fab svg {\n  color: white;\n}\n/*# sourceMappingURL=dashboard-overview.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardOverviewComponent, { className: "DashboardOverviewComponent", filePath: "src/app/inventory/components/dashboard-overview/dashboard-overview.component.ts", lineNumber: 11 });
})();
export {
  DashboardOverviewComponent
};
//# sourceMappingURL=chunk-AP24ZTV7.js.map
