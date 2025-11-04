import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-ISERUI2H.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  CommonModule,
  HttpClientModule
} from "./chunk-ENJBTPXH.js";
import {
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
  ɵɵtext
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/inventory.component.ts
var InventoryComponent = class _InventoryComponent {
  constructor() {
  }
  static \u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["app-inventory"]], decls: 25, vars: 0, consts: [[1, "inventory-container"], [1, "header-section"], [1, "title-section"], [1, "page-title"], [1, "page-subtitle"], [1, "navigation-tabs"], [1, "tabs-nav"], ["routerLink", "/inventory/dashboard", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/parts-catalog", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/stock-levels", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/transactions", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/purchase-orders", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/abc-analysis", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/inventory/analytics", "routerLinkActive", "active", 1, "tab-link"], [1, "content-area"]], template: function InventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Inventory Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Optimize stock levels and procurement with intelligent inventory tracking and analytics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 5)(8, "nav", 6)(9, "a", 7);
      \u0275\u0275text(10, " Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275text(12, " Parts Catalog ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 9);
      \u0275\u0275text(14, " Stock Levels ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 10);
      \u0275\u0275text(16, " Transactions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 11);
      \u0275\u0275text(18, " Purchase Orders ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 12);
      \u0275\u0275text(20, " ABC Analysis ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 13);
      \u0275\u0275text(22, " Analytics ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275element(24, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [
    RouterLinkActive,
    RouterLink,
    RouterOutlet
  ], styles: ["\n\n.inventory-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  min-height: 100vh;\n  background-color: #f9fafb;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.inventory-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  gap: 4px;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding: 5px 1.5rem;\n  text-decoration: none;\n  color: #6b7280;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n  white-space: nowrap;\n  cursor: pointer;\n  justify-content: center;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.analytics-tab[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.analytics-tab[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.inventory-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.analytics-tab.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.inventory-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n/*# sourceMappingURL=inventory.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryComponent, [{
    type: Component,
    args: [{ selector: "app-inventory", imports: [
      RouterLinkActive,
      RouterLink,
      RouterOutlet
    ], template: '<div class="inventory-container">\r\n  <!-- Header Section - Same as Assets -->\r\n  <div class="header-section">\r\n    <div class="title-section">\r\n      <h1 class="page-title">Inventory Management</h1>\r\n      <p class="page-subtitle">Optimize stock levels and procurement with intelligent inventory tracking and analytics</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Navigation Tabs -->\r\n  <div class="navigation-tabs">\r\n    <nav class="tabs-nav">\r\n      <a\r\n        routerLink="/inventory/dashboard"\r\n        routerLinkActive="active"\r\n        class="tab-link">\r\n        Dashboard\r\n      </a>\r\n      <a\r\n        routerLink="/inventory/parts-catalog"\r\n        routerLinkActive="active"\r\n        class="tab-link">\r\n        Parts Catalog\r\n      </a>\r\n      <a\r\n        routerLink="/inventory/stock-levels"\r\n        routerLinkActive="active"\r\n        class="tab-link">\r\n        Stock Levels\r\n      </a>\r\n      <a\r\n        routerLink="/inventory/transactions"\r\n        routerLinkActive="active"\r\n        class="tab-link">\r\n        Transactions\r\n      </a>\r\n      <a\r\n        routerLink="/inventory/purchase-orders"\r\n        routerLinkActive="active"\r\n        class="tab-link">\r\n        Purchase Orders\r\n      </a>\r\n      <a\r\n        routerLink="/inventory/abc-analysis"\r\n        routerLinkActive="active"\r\n        class="tab-link">\r\n        ABC Analysis\r\n      </a>\r\n      <a\r\n        routerLink="/inventory/analytics"\r\n        routerLinkActive="active"\r\n        class="tab-link ">\r\n        Analytics\r\n      </a>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- Content Area -->\r\n  <div class="content-area">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/inventory/inventory.component.scss */\n.inventory-container {\n  padding: 1.5rem;\n  min-height: 100vh;\n  background-color: #f9fafb;\n}\n.inventory-container .header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.inventory-container .header-section .title-section .page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.inventory-container .header-section .title-section .page-subtitle {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.inventory-container .navigation-tabs {\n  margin-bottom: 2rem;\n}\n.inventory-container .navigation-tabs .tabs-nav {\n  display: flex;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  gap: 4px;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding: 5px 1.5rem;\n  text-decoration: none;\n  color: #6b7280;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n  white-space: nowrap;\n  cursor: pointer;\n  justify-content: center;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link.active {\n  background-color: #3b82f6;\n  color: white;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link.analytics-tab {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link.analytics-tab:hover {\n  background-color: #e5e7eb;\n}\n.inventory-container .navigation-tabs .tabs-nav .tab-link.analytics-tab.active {\n  background-color: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.inventory-container .content-area {\n  min-height: 400px;\n}\n/*# sourceMappingURL=inventory.component.css.map */\n"] }]
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
        loadComponent: () => import("./chunk-XH6EQU7J.js").then((m) => m.InventoryDashboardComponent),
        children: [
          {
            path: "",
            redirectTo: "overview",
            pathMatch: "full"
          },
          {
            path: "overview",
            loadComponent: () => import("./chunk-ST5Y4F5W.js").then((m) => m.DashboardOverviewComponent)
          },
          {
            path: "automation",
            loadComponent: () => import("./chunk-AXOSBOE4.js").then((m) => m.DashboardAutomationComponent)
          },
          {
            path: "alerts",
            loadComponent: () => import("./chunk-RGYTVPUR.js").then((m) => m.DashboardAlertsComponent)
          }
        ]
      },
      {
        path: "parts-catalog",
        loadComponent: () => import("./chunk-LXX2HLG7.js").then((m) => m.PartsCatalogComponent)
      },
      {
        path: "stock-levels",
        loadComponent: () => import("./chunk-H3T2TUUF.js").then((m) => m.StockLevelsComponent)
      },
      {
        path: "transactions",
        loadComponent: () => import("./chunk-3FLZYSCS.js").then((m) => m.TransactionsComponent)
      },
      {
        path: "purchase-orders",
        loadComponent: () => import("./chunk-SJPYXD6A.js").then((m) => m.PurchaseOrdersComponent)
      },
      {
        path: "abc-analysis",
        loadComponent: () => import("./chunk-MBSLRGKM.js").then((m) => m.AbcAnalysisComponent)
      },
      {
        path: "analytics",
        loadComponent: () => import("./chunk-RDTFYGVV.js").then((m) => m.AnalyticsComponent)
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
//# sourceMappingURL=chunk-EPA2ONEE.js.map
