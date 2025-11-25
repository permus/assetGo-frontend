import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SettingsService } from '../../settings/settings.service';
import { AuthService } from '../services/auth.service';
import { map, catchError, of, take, timeout } from 'rxjs';

// Functional guard factory: usage canActivate: [moduleGuard('assets')]
export const moduleGuard = (moduleKey: string): CanActivateFn => {
  return () => {
    const settings = inject(SettingsService);
    const authService = inject(AuthService);
    const router = inject(Router);
    
    // Check if user is authenticated
    if (!authService.isAuthenticated()) {
      router.navigate(['/login']);
      return of(false);
    }
    
    // Try to get cached modules from localStorage first (fast, no HTTP)
    try {
      const cached = localStorage.getItem('cached_modules');
      if (cached) {
        const cachedData = JSON.parse(cached);
        const modules = cachedData?.data?.modules || [];
        const enabledMap: Record<string, boolean> = {};
        modules.forEach((m: any) => {
          enabledMap[m.key] = !!m.is_enabled;
        });
        
        if (Object.keys(enabledMap).length > 0) {
          const isModuleEnabled = !!enabledMap[moduleKey];
          const hasModuleAccess = authService.hasModuleAccess(moduleKey);
          const ok = isModuleEnabled && hasModuleAccess;
          
          if (!ok) {
            if (!isModuleEnabled) {
              router.navigate(['/settings'], { queryParams: { module_disabled: moduleKey } });
            } else {
              router.navigate(['/dashboard'], { queryParams: { access_denied: moduleKey } });
            }
            return of(false);
          }
          return of(true);
        }
      }
    } catch (error) {
      console.warn('[ModuleGuard] Failed to parse cached modules, falling back to service');
    }
    
    // If no cache, get from service with timeout (don't block navigation)
    return settings.getModulesEnabled$().pipe(
      take(1),
      timeout({
        each: 2000, // 2 second timeout
        with: () => {
          // On timeout, allow access (modules still loading in background)
          console.warn(`[ModuleGuard] Timeout loading modules for ${moduleKey}, allowing access`);
          return of({});
        }
      }),
      map(enabled => {
        // If enabled is empty (timeout), default to allowing access
        const enabledMap = enabled as Record<string, boolean>;
        const isModuleEnabled = Object.keys(enabledMap).length === 0 ? true : !!(enabledMap[moduleKey]);
        const hasModuleAccess = authService.hasModuleAccess(moduleKey);
        
        const ok = isModuleEnabled && hasModuleAccess;
        
        if (!ok && Object.keys(enabledMap).length > 0) {
          // Only redirect if we have actual module data
          if (!isModuleEnabled) {
            router.navigate(['/settings'], { queryParams: { module_disabled: moduleKey } });
          } else {
            router.navigate(['/dashboard'], { queryParams: { access_denied: moduleKey } });
          }
        }
        return ok || Object.keys(enabledMap).length === 0; // Allow if timeout (empty enabled)
      }),
      catchError(() => {
        // On error, allow access (don't block navigation)
        console.warn(`[ModuleGuard] Error loading modules for ${moduleKey}, allowing access`);
        return of(true);
      })
    );
  };
};


