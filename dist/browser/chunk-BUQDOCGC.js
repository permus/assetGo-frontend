import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-FSOYXA4J.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-E2GGJA5S.js";
import {
  CommonModule,
  HttpClientModule
} from "./chunk-MMJF4Y5E.js";
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
} from "./chunk-YUR5IGOK.js";
import "./chunk-TXDUYLVM.js";

// src/app/maintenance/maintenance.component.ts
var MaintenanceComponent = class _MaintenanceComponent {
  static \u0275fac = function MaintenanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceComponent, selectors: [["app-maintenance"]], decls: 19, vars: 0, consts: [[1, "maintenance-container"], [1, "header-section"], [1, "title-section"], [1, "page-title"], [1, "page-subtitle"], [1, "navigation-tabs"], [1, "tabs-nav"], ["routerLink", "/maintenance/plans", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/maintenance/scheduled", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/maintenance/history", "routerLinkActive", "active", 1, "tab-link"], ["routerLink", "/maintenance/analytics", "routerLinkActive", "active", 1, "tab-link"], [1, "content-area"]], template: function MaintenanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Preventive Maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Plans, schedules, inspections, and analytics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 5)(8, "nav", 6)(9, "a", 7);
      \u0275\u0275text(10, "Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275text(12, "Scheduled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 9);
      \u0275\u0275text(14, "History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 10);
      \u0275\u0275text(16, "Analytics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275element(18, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.maintenance-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  min-height: 100vh;\n  background-color: #f9fafb;\n}\n.maintenance-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.maintenance-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.maintenance-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.maintenance-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.maintenance-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  gap: 4px;\n}\n.maintenance-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding: 5px 1.5rem;\n  text-decoration: none;\n  color: #6b7280;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n  white-space: nowrap;\n  cursor: pointer;\n  justify-content: center;\n}\n.maintenance-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.maintenance-container[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-link.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.maintenance-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n/*# sourceMappingURL=maintenance.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceComponent, [{
    type: Component,
    args: [{ selector: "app-maintenance", standalone: true, imports: [RouterLink, RouterLinkActive, RouterOutlet], template: '<div class="maintenance-container">\r\n  <div class="header-section">\r\n    <div class="title-section">\r\n      <h1 class="page-title">Preventive Maintenance</h1>\r\n      <p class="page-subtitle">Plans, schedules, inspections, and analytics</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="navigation-tabs">\r\n    <nav class="tabs-nav">\r\n      <a routerLink="/maintenance/plans" routerLinkActive="active" class="tab-link">Plans</a>\r\n      <a routerLink="/maintenance/scheduled" routerLinkActive="active" class="tab-link">Scheduled</a>\r\n      <a routerLink="/maintenance/history" routerLinkActive="active" class="tab-link">History</a>\r\n      <a routerLink="/maintenance/analytics" routerLinkActive="active" class="tab-link">Analytics</a>\r\n    </nav>\r\n  </div>\r\n\r\n  <div class="content-area">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n', styles: ["/* src/app/maintenance/maintenance.component.scss */\n.maintenance-container {\n  padding: 1.5rem;\n  min-height: 100vh;\n  background-color: #f9fafb;\n}\n.maintenance-container .header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.maintenance-container .header-section .page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.maintenance-container .header-section .page-subtitle {\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.maintenance-container .navigation-tabs {\n  margin-bottom: 1rem;\n}\n.maintenance-container .navigation-tabs .tabs-nav {\n  display: flex;\n  border-radius: 0.75rem;\n  padding: 0.25rem;\n  gap: 4px;\n}\n.maintenance-container .navigation-tabs .tabs-nav .tab-link {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding: 5px 1.5rem;\n  text-decoration: none;\n  color: #6b7280;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  transition: all 0.2s;\n  white-space: nowrap;\n  cursor: pointer;\n  justify-content: center;\n}\n.maintenance-container .navigation-tabs .tabs-nav .tab-link:hover {\n  color: #374151;\n  background-color: #f9fafb;\n}\n.maintenance-container .navigation-tabs .tabs-nav .tab-link.active {\n  background-color: #3b82f6;\n  color: white;\n}\n.maintenance-container .content-area {\n  min-height: 400px;\n}\n/*# sourceMappingURL=maintenance.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceComponent, { className: "MaintenanceComponent", filePath: "src/app/maintenance/maintenance.component.ts", lineNumber: 11 });
})();

// src/app/maintenance/maintenance-routing.module.ts
var routes = [
  {
    path: "",
    component: MaintenanceComponent,
    children: [
      { path: "", redirectTo: "plans", pathMatch: "full" },
      {
        path: "plans",
        loadComponent: () => import("./chunk-B6G5RDLJ.js").then((m) => m.PlansPageComponent),
        title: "Preventive Maintenance \u2014 Plans"
      },
      {
        path: "scheduled",
        loadComponent: () => import("./chunk-TQ4UKAUN.js").then((m) => m.ScheduledPageComponent),
        title: "Preventive Maintenance \u2014 Scheduled"
      },
      {
        path: "ppm-gantt",
        loadComponent: () => import("./chunk-TJXW55NI.js").then((m) => m.GanttPageComponent),
        title: "Preventive Maintenance \u2014 PPM Gantt"
      },
      {
        path: "inspections",
        loadComponent: () => import("./chunk-PFNT3SU7.js").then((m) => m.InspectionsPageComponent),
        title: "Preventive Maintenance \u2014 Inspections"
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-LEJZ57C3.js").then((m) => m.HistoryPageComponent),
        title: "Preventive Maintenance \u2014 History"
      },
      {
        path: "analytics",
        loadComponent: () => import("./chunk-MCXIMWSC.js").then((m) => m.AnalyticsPageComponent),
        title: "Preventive Maintenance \u2014 Analytics"
      }
    ]
  },
  {
    path: "plans/:id",
    loadComponent: () => import("./chunk-DN5DGQZ2.js").then((m) => m.PlanPreviewPageComponent),
    title: "Maintenance Plan Preview"
  },
  {
    path: "scheduled/:id",
    loadComponent: () => import("./chunk-ENSRLR7Q.js").then((m) => m.SchedulePreviewPageComponent),
    title: "Maintenance Schedule Preview"
  }
];
var MaintenanceRoutingModule = class _MaintenanceRoutingModule {
  static \u0275fac = function MaintenanceRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MaintenanceRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/maintenance/maintenance.module.ts
var MaintenanceModule = class _MaintenanceModule {
  static \u0275fac = function MaintenanceModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MaintenanceModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MaintenanceRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        MaintenanceRoutingModule,
        MaintenanceComponent
      ]
    }]
  }], null, null);
})();
export {
  MaintenanceModule
};
//# sourceMappingURL=chunk-BUQDOCGC.js.map
