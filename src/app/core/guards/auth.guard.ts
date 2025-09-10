import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FeatureFlagsService } from '../services/feature-flags.service';
import { CurrencyService } from '../services/currency.service';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private featureFlags: FeatureFlagsService, @Inject(CurrencyService) private currency: CurrencyService) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {
      this.router.navigate(['//login']);
      return false;
    }

    // Ensure feature flags and currency are fetched after token presence
    this.featureFlags.fetchMe().subscribe({});
    this.currency.refreshFromServer().subscribe({});

    return true;
  }
}
