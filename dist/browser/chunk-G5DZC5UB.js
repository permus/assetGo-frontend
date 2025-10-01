import {
  InventoryAnalyticsService
} from "./chunk-ILYFWJC3.js";
import "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  NgForOf,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YUR5IGOK.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/dashboard-automation/dashboard-automation.component.ts
function DashboardAutomationComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3, "No recommendations");
    \u0275\u0275elementEnd()()();
  }
}
function DashboardAutomationComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 29)(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30)(6, "div", 31)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 31)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 31)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "div", 32)(16, "button", 33);
    \u0275\u0275text(17, "Create PO");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", r_r1.name, " (ID: ", r_r1.part_id, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Available: ", r_r1.available, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Daily usage: ", r_r1.daily_usage, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Recommended: ", r_r1.recommended_qty, "");
  }
}
var DashboardAutomationComponent = class _DashboardAutomationComponent {
  analyticsService;
  recommendations = [];
  loading = false;
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.loadRecommendations();
  }
  loadRecommendations() {
    this.loading = true;
    this.analyticsService.getReorderRecommendations({ lookback_days: 90, lead_time_days: 14, safety_days: 7 }).subscribe({ next: (res) => {
      this.recommendations = res.data.recommendations;
      this.loading = false;
    }, error: () => {
      this.loading = false;
    } });
  }
  static \u0275fac = function DashboardAutomationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardAutomationComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardAutomationComponent, selectors: [["app-dashboard-automation"]], decls: 43, vars: 2, consts: [[1, "dashboard-automation"], [1, "smart-reorder-section"], [1, "section-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "section-title"], [1, "section-subtitle"], [1, "automation-settings-card"], [1, "card-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "card-title"], [1, "card-description"], [1, "settings-options"], [1, "setting-item"], [1, "setting-info"], [1, "setting-label"], [1, "setting-note"], [1, "toggle-switch", "off"], [1, "toggle-slider"], [1, "toggle-switch", "on"], [1, "reorder-alerts-section"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"], ["class", "alert-item", 4, "ngIf"], ["class", "alert-item", 4, "ngFor", "ngForOf"], [1, "alert-item"], [1, "alert-content"], [1, "part-name"], [1, "alert-left"], [1, "stock-details"], [1, "stock-item"], [1, "alert-right"], [1, "create-po-btn"]], template: function DashboardAutomationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h3", 5);
      \u0275\u0275text(6, "Smart Reorder Manager");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Automated inventory reordering with intelligent recommendations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 9);
      \u0275\u0275element(12, "path", 10)(13, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "h4", 12);
      \u0275\u0275text(15, "Automation Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p", 13);
      \u0275\u0275text(17, "Configure how the system handles automatic reordering.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "span", 17);
      \u0275\u0275text(22, "Enable Auto-Reorder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275text(24, "Require Approval");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 19);
      \u0275\u0275element(26, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 15)(28, "div", 16)(29, "span", 17);
      \u0275\u0275text(30, "Email Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 21);
      \u0275\u0275element(32, "div", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(33, "div", 22)(34, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 3);
      \u0275\u0275element(36, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "h3", 5);
      \u0275\u0275text(38, "Reorder Alerts (1)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "p", 6);
      \u0275\u0275text(40, "Parts that need reordering based on current stock levels.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, DashboardAutomationComponent_div_41_Template, 4, 0, "div", 24)(42, DashboardAutomationComponent_div_42_Template, 18, 5, "div", 25);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(41);
      \u0275\u0275property("ngIf", !ctx.recommendations.length && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.recommendations);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.dashboard-automation[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 2rem 0;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 0 0 1.5rem 0;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .settings-options[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .settings-options[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .settings-options[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .settings-options[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%]   .setting-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .settings-options[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-info[_ngcontent-%COMP%]   .setting-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .settings-options[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 3rem;\n  height: 1.5rem;\n  background-color: #d1d5db;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .settings-options[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .toggle-switch.on[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .settings-options[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.125rem;\n  left: 0.125rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .smart-reorder-section[_ngcontent-%COMP%]   .automation-settings-card[_ngcontent-%COMP%]   .settings-options[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .toggle-switch.on[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(1.5rem);\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .severity-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .severity-badge.high[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .severity-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .stock-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .stock-details[_ngcontent-%COMP%]   .stock-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-left[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]   .stock-details[_ngcontent-%COMP%]   .stock-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.75rem;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .pricing-status[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .pricing-status[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .pricing-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #ef4444;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .create-po-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .create-po-btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.dashboard-automation[_ngcontent-%COMP%]   .reorder-alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-right[_ngcontent-%COMP%]   .create-po-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=dashboard-automation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardAutomationComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-automation", standalone: true, imports: [CommonModule], template: '<div class="dashboard-automation">\r\n  <!-- Smart Reorder Manager Section -->\r\n  <div class="smart-reorder-section">\r\n    <div class="section-header">\r\n      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r\n      </svg>\r\n      <h3 class="section-title">Smart Reorder Manager</h3>\r\n    </div>\r\n    <p class="section-subtitle">Automated inventory reordering with intelligent recommendations</p>\r\n\r\n    <!-- Automation Settings Card -->\r\n    <div class="automation-settings-card">\r\n      <div class="card-header">\r\n        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r\n        </svg>\r\n        <h4 class="card-title">Automation Settings</h4>\r\n      </div>\r\n      <p class="card-description">Configure how the system handles automatic reordering.</p>\r\n      \r\n      <div class="settings-options">\r\n        <div class="setting-item">\r\n          <div class="setting-info">\r\n            <span class="setting-label">Enable Auto-Reorder</span>\r\n            <span class="setting-note">Require Approval</span>\r\n          </div>\r\n          <div class="toggle-switch off">\r\n            <div class="toggle-slider"></div>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class="setting-item">\r\n          <div class="setting-info">\r\n            <span class="setting-label">Email Notifications</span>\r\n          </div>\r\n          <div class="toggle-switch on">\r\n            <div class="toggle-slider"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Reorder Alerts Section -->\r\n  <div class="reorder-alerts-section">\r\n    <div class="section-header">\r\n      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>\r\n      </svg>\r\n      <h3 class="section-title">Reorder Alerts (1)</h3>\r\n    </div>\r\n    <p class="section-subtitle">Parts that need reordering based on current stock levels.</p>\r\n\r\n    <!-- Recommendations List -->\r\n    <div class="alert-item" *ngIf="!recommendations.length && !loading">\r\n      <div class="alert-content"><span class="part-name">No recommendations</span></div>\r\n    </div>\r\n    <div class="alert-item" *ngFor="let r of recommendations">\r\n      <div class="alert-left">\r\n        <div class="alert-content">\r\n          <span class="part-name">{{ r.name }} (ID: {{ r.part_id }})</span>\r\n          <div class="stock-details">\r\n            <div class="stock-item"><span>Available: {{ r.available }}</span></div>\r\n            <div class="stock-item"><span>Daily usage: {{ r.daily_usage }}</span></div>\r\n            <div class="stock-item"><span>Recommended: {{ r.recommended_qty }}</span></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="alert-right">\r\n        <button class="create-po-btn">Create PO</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/inventory/components/dashboard-automation/dashboard-automation.component.scss */\n.dashboard-automation {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.dashboard-automation .section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.dashboard-automation .section-header svg {\n  color: #6b7280;\n}\n.dashboard-automation .section-header .section-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-automation .section-subtitle {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 2rem 0;\n}\n.dashboard-automation .smart-reorder-section {\n  margin-bottom: 3rem;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .card-header svg {\n  color: #6b7280;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .card-header .card-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .card-description {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 0 0 1.5rem 0;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .settings-options .setting-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .settings-options .setting-item:last-child {\n  border-bottom: none;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .settings-options .setting-item .setting-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .settings-options .setting-item .setting-info .setting-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #111827;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .settings-options .setting-item .setting-info .setting-note {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .settings-options .setting-item .toggle-switch {\n  position: relative;\n  width: 3rem;\n  height: 1.5rem;\n  background-color: #d1d5db;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .settings-options .setting-item .toggle-switch.on {\n  background-color: #3b82f6;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .settings-options .setting-item .toggle-switch .toggle-slider {\n  position: absolute;\n  top: 0.125rem;\n  left: 0.125rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  background-color: white;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n.dashboard-automation .smart-reorder-section .automation-settings-card .settings-options .setting-item .toggle-switch.on .toggle-slider {\n  transform: translateX(1.5rem);\n}\n.dashboard-automation .reorder-alerts-section .alert-item {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-left {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-left .severity-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-left .severity-badge.high {\n  background-color: #ef4444;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-left .severity-badge svg {\n  color: white;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-left .alert-content .part-name {\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-left .alert-content .stock-details {\n  display: flex;\n  gap: 1.5rem;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-left .alert-content .stock-details .stock-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-left .alert-content .stock-details .stock-item svg {\n  color: #9ca3af;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.75rem;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-right .pricing-status {\n  text-align: right;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-right .pricing-status .price {\n  display: block;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-right .pricing-status .status {\n  display: block;\n  font-size: 0.875rem;\n  color: #ef4444;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-right .create-po-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-right .create-po-btn:hover {\n  background-color: #2563eb;\n}\n.dashboard-automation .reorder-alerts-section .alert-item .alert-right .create-po-btn svg {\n  color: white;\n}\n/*# sourceMappingURL=dashboard-automation.component.css.map */\n"] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardAutomationComponent, { className: "DashboardAutomationComponent", filePath: "src/app/inventory/components/dashboard-automation/dashboard-automation.component.ts", lineNumber: 13 });
})();
export {
  DashboardAutomationComponent
};
//# sourceMappingURL=chunk-G5DZC5UB.js.map
