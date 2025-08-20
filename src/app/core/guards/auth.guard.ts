import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FeatureFlagsService } from '../services/feature-flags.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private featureFlags: FeatureFlagsService) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {
      this.router.navigate(['//login']);
      return false;
    }

    // Ensure feature flags are fetched after token presence
    this.featureFlags.fetchMe().subscribe({});

    return true;
  }
}
