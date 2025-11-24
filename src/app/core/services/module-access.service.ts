import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SettingsService, ModuleItem } from '../../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleAccessService {
  private visibleModulesSubject = new BehaviorSubject<Record<string, boolean>>({});
  public visibleModules$ = this.visibleModulesSubject.asObservable();

  constructor(
    private authService: AuthService,
    private settingsService: SettingsService
  ) {
    // Combine module access from permissions and module settings
    combineLatest([
      this.authService.moduleAccess$,
      this.settingsService.getModulesEnabled$()
    ]).subscribe(([moduleAccess, enabledModules]) => {
      const visibleModules: Record<string, boolean> = {};
      
      // Get all unique module keys from both sources
      const allModuleKeys = new Set([
        ...Object.keys(moduleAccess),
        ...Object.keys(enabledModules)
      ]);
      
      // System modules that should always be enabled if user has permission
      const systemModules = ['dashboard', 'settings'];
      
      // Check each module for both permission access and enabled status
      allModuleKeys.forEach(moduleKey => {
        const hasPermission = moduleAccess[moduleKey] === true;
        
        // Determine if module is enabled
        let isEnabled: boolean;
        if (enabledModules.hasOwnProperty(moduleKey)) {
          // Module exists in enabledModules map - use its actual status
          isEnabled = enabledModules[moduleKey] === true;
        } else {
          // Module not found in enabledModules - default based on type
          // System modules default to enabled, feature modules default to disabled
          isEnabled = systemModules.includes(moduleKey);
        }
        
        // Module is visible if user has permission AND module is enabled
        // This ensures disabled modules are hidden for ALL users, including team members
        visibleModules[moduleKey] = hasPermission && isEnabled;
      });
      
      this.visibleModulesSubject.next(visibleModules);
    });
  }

  /**
   * Check if a module should be visible to the current user
   */
  isModuleVisible(moduleKey: string): boolean {
    const visibleModules = this.visibleModulesSubject.value;
    return visibleModules[moduleKey] === true;
  }

  /**
   * Get all visible modules
   */
  getVisibleModules(): Record<string, boolean> {
    return this.visibleModulesSubject.value;
  }

  /**
   * Check if user has access to a specific module
   */
  hasModuleAccess(moduleKey: string): boolean {
    return this.authService.hasModuleAccess(moduleKey);
  }

  /**
   * Check if user has a specific permission
   */
  hasPermission(module: string, action: string): boolean {
    return this.authService.hasPermission(module, action);
  }

  /**
   * Get filtered modules based on user access
   */
  getFilteredModules(modules: ModuleItem[]): ModuleItem[] {
    const visibleModules = this.getVisibleModules();
    
    return modules.filter(module => {
      // System modules (dashboard, settings) are always visible if user has access
      if (module.is_system_module) {
        return visibleModules[module.key] === true;
      }
      
      // Regular modules need both permission and enabled status
      return visibleModules[module.key] === true;
    });
  }

  /**
   * Check if user can access a route
   */
  canAccessRoute(routePath: string): boolean {
    // Map route paths to module keys
    const routeToModuleMap: Record<string, string> = {
      '/dashboard': 'dashboard',
      '/settings': 'settings',
      '/assets': 'assets',
      '/assets/list': 'assets',
      '/locations': 'locations',
      '/work-orders': 'work_orders',
      '/teams': 'teams',
      '/maintenance': 'maintenance',
      '/inventory': 'inventory',
      '/sensors': 'sensors',
      '/ai': 'ai_features',
      '/reports': 'reports',
      '/facilities-locations': 'facilities_locations',
      '/sla': 'sla',
      '/eservices': 'eservices',
      '/tenant-portal': 'tenant_portal',
      '/maintenance-requests': 'maintenance_requests',
      '/amenity-bookings': 'amenity_bookings',
      '/move-requests': 'move_in_out_requests',
      '/fitout-requests': 'fitout_requests',
      '/inhouse-services': 'inhouse_services',
      '/parcels': 'parcel_management',
      '/visitors': 'visitor_management',
      '/business-directory': 'business_directory',
      '/tenant-communication': 'tenant_communication',
    };

    const moduleKey = routeToModuleMap[routePath];
    if (!moduleKey) {
      // If route is not mapped, allow access (for unknown routes)
      return true;
    }

    return this.isModuleVisible(moduleKey);
  }
}
