import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard to prevent authenticated users from accessing guest-only pages (login, register, etc.)
 * Redirects authenticated users to dashboard
 */
@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(): boolean {
    console.log('[GuestGuard] canActivate called');
    const isAuthenticated = this.authService.isAuthenticated();

    if (isAuthenticated) {
      console.log('[GuestGuard] User authenticated, redirecting to dashboard');
      // User is already logged in, redirect to dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }

    console.log('[GuestGuard] User not authenticated, allowing access');
    // User is not authenticated, allow access to guest pages
    return true;
  }
}

