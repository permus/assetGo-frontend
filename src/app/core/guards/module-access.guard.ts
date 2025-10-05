import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ModuleAccessService } from '../services/module-access.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleAccessGuard implements CanActivate {
  constructor(
    private moduleAccessService: ModuleAccessService,
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if user is authenticated
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    // Check module access
    const canAccess = this.moduleAccessService.canAccessRoute(state.url);
    
    if (!canAccess) {
      // Redirect to dashboard if user doesn't have access to the requested module
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }
}
