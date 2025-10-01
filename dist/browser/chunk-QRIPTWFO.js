import {
  InventoryAnalyticsService
} from "./chunk-ILYFWJC3.js";
import "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  UpperCasePipe
} from "./chunk-MMJF4Y5E.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YUR5IGOK.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/dashboard-alerts/dashboard-alerts.component.ts
function DashboardAlertsComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "p", 34);
    \u0275\u0275text(3, "No active alerts");
    \u0275\u0275elementEnd()()();
  }
}
function DashboardAlertsComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "h4", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 40)(12, "span", 41);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 42)(16, "button", 22);
    \u0275\u0275listener("click", function DashboardAlertsComponent_div_74_Template_button_click_16_listener() {
      const a_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resolve(a_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 43);
    \u0275\u0275element(18, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Resolve ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", a_r2.alert_level);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, a_r2.alert_level));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", a_r2.part_id || "-", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 7, a_r2.created_at, "medium"));
  }
}
var DashboardAlertsComponent = class _DashboardAlertsComponent {
  analyticsService;
  alerts = [];
  summary = { active: 0, critical: 0, ack: 0, total: 0 };
  filter = "active";
  loading = false;
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.loadSummary();
    this.loadAlerts();
  }
  loadSummary() {
    this.analyticsService.getAlertsSummary().subscribe({
      next: (res) => {
        this.summary = res.data || this.summary;
      },
      error: () => {
      }
    });
  }
  loadAlerts() {
    this.loading = true;
    const params = {};
    if (this.filter === "active")
      params.is_resolved = false;
    if (this.filter === "ack")
      params.is_resolved = true;
    this.analyticsService.getAlerts(params).subscribe({
      next: (res) => {
        let items = res.data?.data || [];
        if (this.filter === "critical")
          items = items.filter((a) => a.alert_level === "critical");
        this.alerts = items;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  resolve(alert) {
    this.analyticsService.resolveAlert(alert.id).subscribe({ next: () => this.loadAlerts() });
  }
  runScan() {
    this.analyticsService.scanAlerts().subscribe({ next: () => this.refresh() });
  }
  setFilter(val) {
    this.filter = val;
    this.loadAlerts();
  }
  static \u0275fac = function DashboardAlertsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardAlertsComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardAlertsComponent, selectors: [["app-dashboard-alerts"]], decls: 78, vars: 18, consts: [[1, "dashboard-alerts"], [1, "alert-system-header"], [1, "system-title"], [1, "system-subtitle"], [1, "summary-cards-row"], [1, "summary-card", "active-alerts"], [1, "card-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "card-content"], [1, "card-value"], [1, "card-label"], [1, "summary-card", "critical"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "summary-card", "acknowledged"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "summary-card", "total-alerts"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "alert-management-section"], [1, "section-header"], [1, "section-title"], [1, "section-subtitle"], [1, "action-btn", "acknowledge", 3, "click"], [1, "alert-tabs"], [1, "tab-button", 3, "click"], [1, "tab-text"], [1, "tab-count"], [1, "alert-list"], ["class", "alert-item", 4, "ngIf"], ["class", "alert-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "fab"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [1, "alert-item"], [1, "alert-content"], [1, "alert-description"], [1, "alert-item", 3, "ngClass"], [1, "alert-left"], [1, "alert-severity"], [1, "severity-label"], [1, "alert-title"], [1, "alert-details"], [1, "timestamp"], [1, "alert-actions"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"]], template: function DashboardAlertsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Stock Alert System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Real-time notifications for inventory issues and opportunities");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275text(15, "Active Alerts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 7);
      \u0275\u0275element(19, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "div", 9)(21, "div", 10);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11);
      \u0275\u0275text(24, "Critical");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 14)(26, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 7);
      \u0275\u0275element(28, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "div", 9)(30, "div", 10);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 11);
      \u0275\u0275text(33, "Acknowledged");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 16)(35, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(36, "svg", 7);
      \u0275\u0275element(37, "path", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "div", 9)(39, "div", 10);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 11);
      \u0275\u0275text(42, "Total Alerts");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 18)(44, "div", 19)(45, "h3", 20);
      \u0275\u0275text(46, "Alert Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p", 21);
      \u0275\u0275text(48, "Monitor and manage all inventory alerts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 22);
      \u0275\u0275listener("click", function DashboardAlertsComponent_Template_button_click_49_listener() {
        return ctx.runScan();
      });
      \u0275\u0275text(50, "Run Scan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 23)(52, "button", 24);
      \u0275\u0275listener("click", function DashboardAlertsComponent_Template_button_click_52_listener() {
        return ctx.setFilter("active");
      });
      \u0275\u0275elementStart(53, "span", 25);
      \u0275\u0275text(54, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 26);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "button", 24);
      \u0275\u0275listener("click", function DashboardAlertsComponent_Template_button_click_57_listener() {
        return ctx.setFilter("critical");
      });
      \u0275\u0275elementStart(58, "span", 25);
      \u0275\u0275text(59, "Critical");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 26);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "button", 24);
      \u0275\u0275listener("click", function DashboardAlertsComponent_Template_button_click_62_listener() {
        return ctx.setFilter("ack");
      });
      \u0275\u0275elementStart(63, "span", 25);
      \u0275\u0275text(64, "Acknowledged");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 26);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "button", 24);
      \u0275\u0275listener("click", function DashboardAlertsComponent_Template_button_click_67_listener() {
        return ctx.setFilter("all");
      });
      \u0275\u0275elementStart(68, "span", 25);
      \u0275\u0275text(69, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 26);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 27);
      \u0275\u0275template(73, DashboardAlertsComponent_div_73_Template, 4, 0, "div", 28)(74, DashboardAlertsComponent_div_74_Template, 20, 10, "div", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "button", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(76, "svg", 7);
      \u0275\u0275element(77, "path", 31);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.summary.active);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.summary.critical);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.summary.ack);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.summary.total);
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.filter === "active");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("(", ctx.summary.active, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filter === "critical");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("(", ctx.summary.critical, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filter === "ack");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("(", ctx.summary.ack, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filter === "all");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("(", ctx.summary.total, ")");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.alerts.length && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.alerts);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, UpperCasePipe, DatePipe], styles: ["\n\n.dashboard-alerts[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-system-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-system-header[_ngcontent-%COMP%]   .system-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-system-header[_ngcontent-%COMP%]   .system-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n  margin: 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.active-alerts[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.critical[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #ef4444;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.acknowledged[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-alerts[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 0.25rem;\n  margin-bottom: 1.5rem;\n  overflow-x: auto;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: none;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item.critical[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef4444;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-severity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background-color: #fee2e2;\n  border-radius: 0.375rem;\n  flex-shrink: 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-severity[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-severity[_ngcontent-%COMP%]   .severity-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #ef4444;\n  text-transform: uppercase;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 0 0 0.75rem 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  font-size: 0.875rem;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-details[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 500;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .alert-details[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-actions[_ngcontent-%COMP%]   .action-btn.acknowledge[_ngcontent-%COMP%] {\n  background-color: #10b981;\n  color: white;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-actions[_ngcontent-%COMP%]   .action-btn.acknowledge[_ngcontent-%COMP%]:hover {\n  background-color: #059669;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-actions[_ngcontent-%COMP%]   .action-btn.dismiss[_ngcontent-%COMP%] {\n  background-color: #6b7280;\n  color: white;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-actions[_ngcontent-%COMP%]   .action-btn.dismiss[_ngcontent-%COMP%]:hover {\n  background-color: #4b5563;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .alert-management-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: currentColor;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.dashboard-alerts[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=dashboard-alerts.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardAlertsComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-alerts", standalone: true, imports: [CommonModule], template: `<div class="dashboard-alerts">\r
  <!-- Stock Alert System Header -->\r
  <div class="alert-system-header">\r
    <h2 class="system-title">Stock Alert System</h2>\r
    <p class="system-subtitle">Real-time notifications for inventory issues and opportunities</p>\r
  </div>\r
\r
  <!-- Summary Cards Row -->\r
  <div class="summary-cards-row">\r
    <div class="summary-card active-alerts">\r
      <div class="card-icon">\r
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
        </svg>\r
      </div>\r
      <div class="card-content">\r
        <div class="card-value">{{ summary.active }}</div>\r
        <div class="card-label">Active Alerts</div>\r
      </div>\r
    </div>\r
\r
    <div class="summary-card critical">\r
      <div class="card-icon">\r
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </div>\r
      <div class="card-content">\r
        <div class="card-value">{{ summary.critical }}</div>\r
        <div class="card-label">Critical</div>\r
      </div>\r
    </div>\r
\r
    <div class="summary-card acknowledged">\r
      <div class="card-icon">\r
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
        </svg>\r
      </div>\r
      <div class="card-content">\r
        <div class="card-value">{{ summary.ack }}</div>\r
        <div class="card-label">Acknowledged</div>\r
      </div>\r
    </div>\r
\r
    <div class="summary-card total-alerts">\r
      <div class="card-icon">\r
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r
        </svg>\r
      </div>\r
      <div class="card-content">\r
        <div class="card-value">{{ summary.total }}</div>\r
        <div class="card-label">Total Alerts</div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Alert Management Section -->\r
  <div class="alert-management-section">\r
    <div class="section-header">\r
      <h3 class="section-title">Alert Management</h3>\r
      <p class="section-subtitle">Monitor and manage all inventory alerts</p>\r
      <button class="action-btn acknowledge" (click)="runScan()">Run Scan</button>\r
    </div>\r
\r
    <!-- Alert Filter Tabs -->\r
    <div class="alert-tabs">\r
      <button class="tab-button" [class.active]="filter==='active'" (click)="setFilter('active')">\r
        <span class="tab-text">Active</span>\r
        <span class="tab-count">({{ summary.active }})</span>\r
      </button>\r
      <button class="tab-button" [class.active]="filter==='critical'" (click)="setFilter('critical')">\r
        <span class="tab-text">Critical</span>\r
        <span class="tab-count">({{ summary.critical }})</span>\r
      </button>\r
      <button class="tab-button" [class.active]="filter==='ack'" (click)="setFilter('ack')">\r
        <span class="tab-text">Acknowledged</span>\r
        <span class="tab-count">({{ summary.ack }})</span>\r
      </button>\r
      <button class="tab-button" [class.active]="filter==='all'" (click)="setFilter('all')">\r
        <span class="tab-text">All</span>\r
        <span class="tab-count">({{ summary.total }})</span>\r
      </button>\r
    </div>\r
\r
    <!-- Alert List -->\r
    <div class="alert-list">\r
      <div *ngIf="!alerts.length && !loading" class="alert-item">\r
        <div class="alert-content"><p class="alert-description">No active alerts</p></div>\r
      </div>\r
      <div class="alert-item" *ngFor="let a of alerts" [ngClass]="a.alert_level">\r
        <div class="alert-left">\r
          <div class="alert-severity">\r
            <span class="severity-label">{{ a.alert_level | uppercase }}</span>\r
          </div>\r
          <div class="alert-content">\r
            <h4 class="alert-title">#{{ a.part_id || '-' }}</h4>\r
            <p class="alert-description">{{ a.message }}</p>\r
            <div class="alert-details">\r
              <span class="timestamp">{{ a.created_at | date:'medium' }}</span>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="alert-actions">\r
          <button class="action-btn acknowledge" (click)="resolve(a)">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
            </svg>\r
            Resolve\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Floating Action Button -->\r
  <button class="fab">\r
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>\r
    </svg>\r
  </button>\r
</div>\r
`, styles: ["/* src/app/inventory/components/dashboard-alerts/dashboard-alerts.component.scss */\n.dashboard-alerts {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-alerts .alert-system-header {\n  margin-bottom: 2rem;\n}\n.dashboard-alerts .alert-system-header .system-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.dashboard-alerts .alert-system-header .system-subtitle {\n  color: #6b7280;\n  font-size: 1.125rem;\n  margin: 0;\n}\n.dashboard-alerts .summary-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.dashboard-alerts .summary-cards-row .summary-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dashboard-alerts .summary-cards-row .summary-card .card-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.dashboard-alerts .summary-cards-row .summary-card .card-content .card-value {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.dashboard-alerts .summary-cards-row .summary-card .card-content .card-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.dashboard-alerts .summary-cards-row .summary-card.active-alerts .card-icon {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.dashboard-alerts .summary-cards-row .summary-card.critical .card-icon {\n  background-color: #fee2e2;\n  color: #ef4444;\n}\n.dashboard-alerts .summary-cards-row .summary-card.acknowledged .card-icon {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.dashboard-alerts .summary-cards-row .summary-card.total-alerts .card-icon {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.dashboard-alerts .alert-management-section .section-header {\n  margin-bottom: 1.5rem;\n}\n.dashboard-alerts .alert-management-section .section-header .section-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.dashboard-alerts .alert-management-section .section-header .section-subtitle {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n.dashboard-alerts .alert-management-section .alert-tabs {\n  display: flex;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 0.25rem;\n  margin-bottom: 1.5rem;\n  overflow-x: auto;\n}\n.dashboard-alerts .alert-management-section .alert-tabs .tab-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: none;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.dashboard-alerts .alert-management-section .alert-tabs .tab-button:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.dashboard-alerts .alert-management-section .alert-tabs .tab-button.active {\n  background-color: #3b82f6;\n  color: white;\n}\n.dashboard-alerts .alert-management-section .alert-tabs .tab-button .tab-count {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item:last-child {\n  margin-bottom: 0;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item.critical {\n  border-left: 4px solid #ef4444;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-left {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-left .alert-severity {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background-color: #fee2e2;\n  border-radius: 0.375rem;\n  flex-shrink: 0;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-left .alert-severity svg {\n  color: #ef4444;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-left .alert-severity .severity-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #ef4444;\n  text-transform: uppercase;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-left .alert-content .alert-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-left .alert-content .alert-description {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 0 0 0.75rem 0;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-left .alert-content .alert-details {\n  display: flex;\n  gap: 1.5rem;\n  font-size: 0.875rem;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-left .alert-content .alert-details .stock-info {\n  color: #ef4444;\n  font-weight: 500;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-left .alert-content .alert-details .timestamp {\n  color: #9ca3af;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-actions .action-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-actions .action-btn.acknowledge {\n  background-color: #10b981;\n  color: white;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-actions .action-btn.acknowledge:hover {\n  background-color: #059669;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-actions .action-btn.dismiss {\n  background-color: #6b7280;\n  color: white;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-actions .action-btn.dismiss:hover {\n  background-color: #4b5563;\n}\n.dashboard-alerts .alert-management-section .alert-list .alert-item .alert-actions .action-btn svg {\n  color: currentColor;\n}\n.dashboard-alerts .fab {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.dashboard-alerts .fab:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.dashboard-alerts .fab svg {\n  color: white;\n}\n/*# sourceMappingURL=dashboard-alerts.component.css.map */\n"] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardAlertsComponent, { className: "DashboardAlertsComponent", filePath: "src/app/inventory/components/dashboard-alerts/dashboard-alerts.component.ts", lineNumber: 12 });
})();
export {
  DashboardAlertsComponent
};
//# sourceMappingURL=chunk-QRIPTWFO.js.map
