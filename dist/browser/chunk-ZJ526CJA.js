import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-IWKUZ4XC.js";
import {
  HttpClientModule,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-M7RYNHQY.js";
import {
  CommonModule,
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-7JZMUYI4.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/inventory.component.ts
var InventoryComponent = class _InventoryComponent {
  constructor() {
  }
  static \u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["app-inventory"]], decls: 34, vars: 0, consts: [[1, "inventory-container"], [1, "header-section"], [1, "title-section"], [1, "page-title"], [1, "page-subtitle"], [1, "action-buttons"], [1, "btn", "btn-primary"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "btn", "btn-secondary"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "navigation-tabs"], [1, "tabs-nav"], ["routerLink", "/inventory/dashboard", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/parts-catalog", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/stock-levels", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/transactions", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/purchase-orders", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/abc-analysis", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/analytics", "routerLinkActive", "active", 1, "tab-link"], [1, "content-area"]], template: function InventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Inventory Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Optimize stock levels and procurement with intelligent inventory tracking and analytics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Add Item ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 7);
      \u0275\u0275element(14, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Import ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 11)(17, "nav", 12)(18, "a", 13);
      \u0275\u0275text(19, " Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 14);
      \u0275\u0275text(21, " Parts Catalog ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 15);
      \u0275\u0275text(23, " Stock Levels ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 16);
      \u0275\u0275text(25, " Transactions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 17);
      \u0275\u0275text(27, " Purchase Orders ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 18);
      \u0275\u0275text(29, " ABC Analysis ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 19);
      \u0275\u0275text(31, " Analytics ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 20);
      \u0275\u0275element(33, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [
    RouterLinkActive,
    RouterLink,
    RouterOutlet
  ], styles: ["\n\n.inventory-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  min-height: 100vh;\n  background-color: #f9fafb;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  gap: 4px;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding: 5px 1.5rem;\n  text-decoration: none;\n  color: #6b7280;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n  white-space: nowrap;\n  cursor: pointer;\n  justify-content: center;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.analytics-tab[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.analytics-tab[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.analytics-tab.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.inventory-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n/*# sourceMappingURL=inventory.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryComponent, [{
    type: Component,
    args: [{ selector: "app-inventory", imports: [
      RouterLinkActive,
      RouterLink,
      RouterOutlet
    ], template: '<div class="inventory-container">\n  <!-- Header Section - Same as Assets -->\n  <div class="header-section">\n    <div class="title-section">\n      <h1 class="page-title">Inventory Management</h1>\n      <p class="page-subtitle">Optimize stock levels and procurement with intelligent inventory tracking and analytics</p>\n    </div>\n\n    <div class="action-buttons">\n      <button class="btn btn-primary">\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\n        </svg>\n        Add Item\n      </button>\n      <button class="btn btn-secondary">\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>\n        </svg>\n        Import\n      </button>\n    </div>\n  </div>\n\n  <!-- Navigation Tabs -->\n  <div class="navigation-tabs">\n    <nav class="tabs-nav">\n      <a\n        routerLink="/inventory/dashboard"\n        routerLinkActive="active"\n        class="tab-link">\n        Dashboard\n      </a>\n      <a\n        routerLink="/inventory/parts-catalog"\n        routerLinkActive="active"\n        class="tab-link">\n        Parts Catalog\n      </a>\n      <a\n        routerLink="/inventory/stock-levels"\n        routerLinkActive="active"\n        class="tab-link">\n        Stock Levels\n      </a>\n      <a\n        routerLink="/inventory/transactions"\n        routerLinkActive="active"\n        class="tab-link">\n        Transactions\n      </a>\n      <a\n        routerLink="/inventory/purchase-orders"\n        routerLinkActive="active"\n        class="tab-link">\n        Purchase Orders\n      </a>\n      <a\n        routerLink="/inventory/abc-analysis"\n        routerLinkActive="active"\n        class="tab-link">\n        ABC Analysis\n      </a>\n      <a\n        routerLink="/inventory/analytics"\n        routerLinkActive="active"\n        class="tab-link ">\n        Analytics\n      </a>\n    </nav>\n  </div>\n\n  <!-- Content Area -->\n  <div class="content-area">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n', styles: ["/* src/app/inventory/inventory.component.scss */\n.inventory-container {\n  padding: 1.5rem;\n  min-height: 100vh;\n  background-color: #f9fafb;\n}\n.inventory-container .header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.inventory-container .header-section .title-section .page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.inventory-container .header-section .title-section .page-subtitle {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.inventory-container .header-section .action-buttons {\n  display: flex;\n  gap: 0.75rem;\n}\n.inventory-container .header-section .action-buttons .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n.inventory-container .header-section .action-buttons .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.inventory-container .header-section .action-buttons .btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.inventory-container .header-section .action-buttons .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.inventory-container .header-section .action-buttons .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.inventory-container .navigation-tabs {\n  margin-bottom: 2rem;\n}\n.inventory-container .navigation-tabs .tabs-nav {\n  display: flex;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  gap: 4px;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding: 5px 1.5rem;\n  text-decoration: none;\n  color: #6b7280;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n  white-space: nowrap;\n  cursor: pointer;\n  justify-content: center;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link.active {\n  background-color: #3b82f6;\n  color: white;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link.analytics-tab {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link.analytics-tab:hover {\n  background-color: #e5e7eb;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link.analytics-tab.active {\n  background-color: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.inventory-container .content-area {\n  min-height: 400px;\n}\n/*# sourceMappingURL=inventory.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "src/app/inventory/inventory.component.ts", lineNumber: 14 });
})();

// src/app/inventory/inventory-routing.module.ts
var routes = [
  {
    path: "",
    component: InventoryComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-SIGF24RG.js").then((m) => m.InventoryDashboardComponent),
        children: [
          {
            path: "",
            redirectTo: "overview",
            pathMatch: "full"
          },
          {
            path: "overview",
            loadComponent: () => import("./chunk-AP24ZTV7.js").then((m) => m.DashboardOverviewComponent)
          },
          {
            path: "automation",
            loadComponent: () => import("./chunk-DWO3VXVU.js").then((m) => m.DashboardAutomationComponent)
          },
          {
            path: "alerts",
            loadComponent: () => import("./chunk-AAFACAAC.js").then((m) => m.DashboardAlertsComponent)
          }
        ]
      },
      {
        path: "parts-catalog",
        loadComponent: () => import("./chunk-PWAZUG2S.js").then((m) => m.PartsCatalogComponent)
      },
      {
        path: "stock-levels",
        loadComponent: () => import("./chunk-VV5PYV64.js").then((m) => m.StockLevelsComponent)
      },
      {
        path: "transactions",
        loadComponent: () => import("./chunk-Q43PKG2N.js").then((m) => m.TransactionsComponent)
      },
      {
        path: "purchase-orders",
        loadComponent: () => import("./chunk-RZ646CRL.js").then((m) => m.PurchaseOrdersComponent)
      },
      {
        path: "abc-analysis",
        loadComponent: () => import("./chunk-QKIMUY23.js").then((m) => m.AbcAnalysisComponent)
      },
      {
        path: "analytics",
        loadComponent: () => import("./chunk-OTII2WEB.js").then((m) => m.AnalyticsComponent)
      }
    ]
  }
];
var InventoryRoutingModule = class _InventoryRoutingModule {
  static \u0275fac = function InventoryRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InventoryRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/inventory/inventory.module.ts
var InventoryModule = class _InventoryModule {
  static \u0275fac = function InventoryModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InventoryModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InventoryRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        InventoryRoutingModule,
        InventoryComponent
      ]
    }]
  }], null, null);
})();
export {
  InventoryModule
};
//# sourceMappingURL=chunk-ZJ526CJA.js.map
