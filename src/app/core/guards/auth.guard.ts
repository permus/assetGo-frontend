import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FeatureFlagsService } from '../services/feature-flags.service';
import { CurrencyService } from '../services/currency.service';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private featureFlagsLoaded = false;

  constructor(private router: Router, private authService: AuthService, private featureFlags: FeatureFlagsService, @Inject(CurrencyService) private currency: CurrencyService) {}

  canActivate(route: any, state: RouterStateSnapshot): boolean {
    console.log('[AuthGuard] canActivate called for:', state.url);
    const isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {
      console.log('[AuthGuard] User not authenticated, blocking route');
      // Don't redirect if already going to login, register, landing page, or if in admin section
      const currentUrl = state.url;
      if (currentUrl && (currentUrl.startsWith('/admin') || currentUrl === '/' || currentUrl.startsWith('/login') || currentUrl.startsWith('/register'))) {
        // Let these routes handle themselves
        return false;
      }
      // For protected routes, redirect to landing page (not login)
      // Users can click "Get Started" on landing page to go to login
      this.router.navigate(['/']);
      return false;
    }

    // Note: Currency and preferences are loaded in app.component.ts
    // Only fetch feature flags ONCE to avoid duplicate requests
    if (!this.featureFlagsLoaded) {
      console.log('[AuthGuard] Loading feature flags (first time only)');
      this.featureFlagsLoaded = true;
      this.featureFlags.fetchMe().subscribe({
        error: () => {
          console.warn('[AuthGuard] Failed to load feature flags');
          this.featureFlagsLoaded = false; // Allow retry on error
        }
      });
    }

    return true;
  }
}
