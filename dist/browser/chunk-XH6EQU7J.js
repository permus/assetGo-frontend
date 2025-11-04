import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  CommonModule
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/inventory-dashboard/inventory-dashboard.component.ts
var _c0 = () => ({ exact: true });
var InventoryDashboardComponent = class _InventoryDashboardComponent {
  constructor() {
  }
  static \u0275fac = function InventoryDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryDashboardComponent, selectors: [["app-inventory-dashboard"]], decls: 35, vars: 2, consts: [[1, "inventory-dashboard"], [1, "dashboard-header"], [1, "header-left"], [1, "dashboard-title"], [1, "dashboard-subtitle"], [1, "header-right"], [1, "utility-options"], [1, "auto-refresh"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "refresh-now"], [1, "dashboard-tabs"], [1, "tabs-nav"], ["routerLink", "/inventory/dashboard/overview", "routerLinkActive", "active", 1, "tab-link", "active", 3, "routerLinkActiveOptions"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], ["routerLink", "/inventory/dashboard/automation", "routerLinkActive", "active", 1, "tab-link"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"], ["routerLink", "/inventory/dashboard/alerts", "routerLinkActive", "active", 1, "tab-link"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "dashboard-content"]], template: function InventoryDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Inventory Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Real-time inventory insights, automation, and alerts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Auto-refresh OFF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 8);
      \u0275\u0275element(16, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "Refresh Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(19, "div", 11)(20, "nav", 12)(21, "a", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 14);
      \u0275\u0275element(23, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Overview ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "a", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 14);
      \u0275\u0275element(27, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Smart Automation ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "a", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 14);
      \u0275\u0275element(31, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " Alert System ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "div", 20);
      \u0275\u0275element(34, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c0));
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .dashboard-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .utility-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .utility-options[_ngcontent-%COMP%]   .auto-refresh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .utility-options[_ngcontent-%COMP%]   .auto-refresh[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .utility-options[_ngcontent-%COMP%]   .refresh-now[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .utility-options[_ngcontent-%COMP%]   .refresh-now[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .utility-options[_ngcontent-%COMP%]   .refresh-now[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-tabs[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 5px 1.5rem;\n  text-decoration: none;\n  color: #6b7280;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.inventory-dashboard[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%]   .content-placeholder[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 2rem;\n  text-align: center;\n  color: #6b7280;\n}\n/*# sourceMappingURL=inventory-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-inventory-dashboard", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], template: '<div class="inventory-dashboard">\r\n  <!-- Header Section -->\r\n  <div class="dashboard-header">\r\n    <div class="header-left">\r\n      <h2 class="dashboard-title">Inventory Dashboard</h2>\r\n      <p class="dashboard-subtitle">Real-time inventory insights, automation, and alerts</p>\r\n    </div>\r\n\r\n    <div class="header-right">\r\n      <div class="utility-options">\r\n        <div class="auto-refresh">\r\n          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r\n          </svg>\r\n          <span>Auto-refresh OFF</span>\r\n        </div>\r\n\r\n        <button class="refresh-now">\r\n          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r\n          </svg>\r\n          <span>Refresh Now</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Dashboard Navigation Tabs -->\r\n  <div class="dashboard-tabs">\r\n    <nav class="tabs-nav">\r\n      <a\r\n        routerLink="/inventory/dashboard/overview"\r\n        routerLinkActive="active"\r\n        [routerLinkActiveOptions]="{exact: true}"\r\n        class="tab-link active">\r\n        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r\n        </svg>\r\n        Overview\r\n      </a>\r\n\r\n      <a\r\n        routerLink="/inventory/dashboard/automation"\r\n        routerLinkActive="active"\r\n        class="tab-link">\r\n        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>\r\n        </svg>\r\n        Smart Automation\r\n      </a>\r\n\r\n      <a\r\n        routerLink="/inventory/dashboard/alerts"\r\n        routerLinkActive="active"\r\n        class="tab-link">\r\n        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>\r\n        </svg>\r\n        Alert System\r\n      </a>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- Dashboard Content Area -->\r\n  <div class="dashboard-content">\r\n   <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/inventory/components/inventory-dashboard/inventory-dashboard.component.scss */\n.inventory-dashboard .dashboard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.inventory-dashboard .dashboard-header .header-left .dashboard-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.inventory-dashboard .dashboard-header .header-left .dashboard-subtitle {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n}\n.inventory-dashboard .dashboard-header .header-right .utility-options {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.inventory-dashboard .dashboard-header .header-right .utility-options .auto-refresh {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.inventory-dashboard .dashboard-header .header-right .utility-options .auto-refresh svg {\n  color: #9ca3af;\n}\n.inventory-dashboard .dashboard-header .header-right .utility-options .refresh-now {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.inventory-dashboard .dashboard-header .header-right .utility-options .refresh-now:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.inventory-dashboard .dashboard-header .header-right .utility-options .refresh-now svg {\n  color: #6b7280;\n}\n.inventory-dashboard .dashboard-tabs {\n  margin-bottom: 2rem;\n}\n.inventory-dashboard .dashboard-tabs .tabs-nav {\n  display: flex;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n}\n.inventory-dashboard .dashboard-tabs .tabs-nav .tab-link {\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 5px 1.5rem;\n  text-decoration: none;\n  color: #6b7280;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.inventory-dashboard .dashboard-tabs .tabs-nav .tab-link:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.inventory-dashboard .dashboard-tabs .tabs-nav .tab-link.active {\n  background-color: #3b82f6;\n  color: white;\n}\n.inventory-dashboard .dashboard-tabs .tabs-nav .tab-link svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.inventory-dashboard .dashboard-content .content-placeholder {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 2rem;\n  text-align: center;\n  color: #6b7280;\n}\n/*# sourceMappingURL=inventory-dashboard.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryDashboardComponent, { className: "InventoryDashboardComponent", filePath: "src/app/inventory/components/inventory-dashboard/inventory-dashboard.component.ts", lineNumber: 12 });
})();
export {
  InventoryDashboardComponent
};
//# sourceMappingURL=chunk-XH6EQU7J.js.map
