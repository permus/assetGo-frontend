import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private adminAuthService: AdminAuthService
  ) {}

  canActivate(): boolean {
    const isAuthenticated = this.adminAuthService.isAuthenticated();

    if (!isAuthenticated) {
      this.router.navigate(['/admin/login']);
      return false;
    }

    return true;
  }
}

