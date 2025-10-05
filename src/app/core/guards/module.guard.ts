import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SettingsService, ModuleItem } from '../../settings/settings.service';
import { AuthService } from '../services/auth.service';
import { map, catchError, of } from 'rxjs';

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
    
    return settings.listModules().pipe(
      map(res => {
        const enabled: Record<string, boolean> = {};
        const modules = (res?.data?.modules ?? []) as ModuleItem[];
        modules.forEach(m => (enabled[m.key] = !!m.is_enabled));
        
        // Check both module enablement and user permissions
        const isModuleEnabled = !!enabled[moduleKey];
        const hasModuleAccess = authService.hasModuleAccess(moduleKey);
        
        const ok = isModuleEnabled && hasModuleAccess;
        
        if (!ok) {
          if (!isModuleEnabled) {
            router.navigate(['/settings'], { queryParams: { module_disabled: moduleKey } });
          } else {
            router.navigate(['/dashboard'], { queryParams: { access_denied: moduleKey } });
          }
        }
        return ok;
      }),
      catchError(() => {
        router.navigate(['/dashboard']);
        return of(false);
      })
    );
  };
};


