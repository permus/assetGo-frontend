import {
  SettingsService
} from "./chunk-RPSM5X2G.js";
import {
  AuthService
} from "./chunk-BGMQUXYP.js";
import {
  BehaviorSubject,
  Injectable,
  combineLatest,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SCVX3V3B.js";

// src/app/core/services/module-access.service.ts
var ModuleAccessService = class _ModuleAccessService {
  authService;
  settingsService;
  visibleModulesSubject = new BehaviorSubject({});
  visibleModules$ = this.visibleModulesSubject.asObservable();
  constructor(authService, settingsService) {
    this.authService = authService;
    this.settingsService = settingsService;
    combineLatest([
      this.authService.moduleAccess$,
      this.settingsService.getModulesEnabled$()
    ]).subscribe(([moduleAccess, enabledModules]) => {
      const visibleModules = {};
      Object.keys(moduleAccess).forEach((moduleKey) => {
        const hasPermission = moduleAccess[moduleKey];
        const isEnabled = enabledModules[moduleKey] ?? true;
        visibleModules[moduleKey] = hasPermission && isEnabled;
      });
      this.visibleModulesSubject.next(visibleModules);
    });
  }
  /**
   * Check if a module should be visible to the current user
   */
  isModuleVisible(moduleKey) {
    const visibleModules = this.visibleModulesSubject.value;
    return visibleModules[moduleKey] === true;
  }
  /**
   * Get all visible modules
   */
  getVisibleModules() {
    return this.visibleModulesSubject.value;
  }
  /**
   * Check if user has access to a specific module
   */
  hasModuleAccess(moduleKey) {
    return this.authService.hasModuleAccess(moduleKey);
  }
  /**
   * Check if user has a specific permission
   */
  hasPermission(module, action) {
    return this.authService.hasPermission(module, action);
  }
  /**
   * Get filtered modules based on user access
   */
  getFilteredModules(modules) {
    const visibleModules = this.getVisibleModules();
    return modules.filter((module) => {
      if (module.is_system_module) {
        return visibleModules[module.key] === true;
      }
      return visibleModules[module.key] === true;
    });
  }
  /**
   * Check if user can access a route
   */
  canAccessRoute(routePath) {
    const routeToModuleMap = {
      "/dashboard": "dashboard",
      "/settings": "settings",
      "/assets": "assets",
      "/assets/list": "assets",
      "/locations": "locations",
      "/work-orders": "work_orders",
      "/teams": "teams",
      "/maintenance": "maintenance",
      "/inventory": "inventory",
      "/sensors": "sensors",
      "/ai": "ai_features",
      "/reports": "reports",
      "/facilities-locations": "facilities_locations",
      "/sla": "sla",
      "/eservices": "eservices",
      "/tenant-portal": "tenant_portal",
      "/maintenance-requests": "maintenance_requests",
      "/amenity-bookings": "amenity_bookings",
      "/move-requests": "move_in_out_requests",
      "/fitout-requests": "fitout_requests",
      "/inhouse-services": "inhouse_services",
      "/parcels": "parcel_management",
      "/visitors": "visitor_management",
      "/business-directory": "business_directory",
      "/tenant-communication": "tenant_communication"
    };
    const moduleKey = routeToModuleMap[routePath];
    if (!moduleKey) {
      return true;
    }
    return this.isModuleVisible(moduleKey);
  }
  static \u0275fac = function ModuleAccessService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleAccessService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(SettingsService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModuleAccessService, factory: _ModuleAccessService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleAccessService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AuthService }, { type: SettingsService }], null);
})();

export {
  ModuleAccessService
};
//# sourceMappingURL=chunk-QO55V45C.js.map
