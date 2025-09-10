import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SettingsService, ModuleItem } from '../../settings/settings.service';
import { map, catchError, of } from 'rxjs';

// Functional guard factory: usage canActivate: [moduleGuard('assets')]
export const moduleGuard = (moduleKey: string): CanActivateFn => {
  return () => {
    const settings = inject(SettingsService);
    const router = inject(Router);
    return settings.listModules().pipe(
      map(res => {
        const enabled: Record<string, boolean> = {};
        const modules = (res?.data?.modules ?? []) as ModuleItem[];
        modules.forEach(m => (enabled[m.key] = !!m.is_enabled));
        const ok = !!enabled[moduleKey];
        if (!ok) {
          router.navigate(['/settings'], { queryParams: { module_disabled: moduleKey } });
        }
        return ok;
      }),
      catchError(() => {
        router.navigate(['/settings']);
        return of(false);
      })
    );
  };
};


