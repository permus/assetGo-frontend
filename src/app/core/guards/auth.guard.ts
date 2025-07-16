import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Mock authentication logic - always returns true for now
    const isAuthenticated = true;
    
    if (!isAuthenticated) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    
    return true;
  }
}