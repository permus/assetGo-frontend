import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip interceptor for admin API routes - they handle their own authentication
    if (req.url.includes('/admin/')) {
      return next.handle(req);
    }
    
    // Don't override if Authorization header already exists (e.g., from admin services)
    if (req.headers.has('Authorization')) {
      return next.handle(req);
    }
    
    const token = this.authService.getToken();
    
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle 401 Unauthorized - Token expired or invalid
          if (error.status === 401 && !req.url.includes('/login')) {
            // Clear session
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('module_access');
            localStorage.removeItem('permissions');
            
            // Store current URL for redirect after login
            const currentUrl = this.router.url;
            // Don't redirect if we're on public routes (landing page, admin, login, register)
            if (currentUrl && (currentUrl.startsWith('/admin') || currentUrl === '/' || currentUrl === '/login' || currentUrl.startsWith('/register'))) {
              return throwError(() => error);
            }
            if (currentUrl && currentUrl !== '/login' && !currentUrl.includes('/auth/')) {
              localStorage.setItem('redirect_url', currentUrl);
            }
            
            // Set session expired message
            localStorage.setItem('session_message', 'Your session has expired. Please login again.');
            
            // Redirect to login only if not on public routes
            this.router.navigate(['/login']);
          }
          // Handle 403 Forbidden - Account suspended or access denied
          else if (error.status === 403 && !req.url.includes('/login')) {
            // Check if error message indicates account suspension
            const errorMessage = error.error?.message || '';
            if (errorMessage.toLowerCase().includes('suspended')) {
              // Clear session
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              localStorage.removeItem('module_access');
              localStorage.removeItem('permissions');
              
              // Set suspension message
              localStorage.setItem('session_message', errorMessage || 'Your account has been suspended. Please contact support.');
              
              // Redirect to login
              const currentUrl = this.router.url;
              if (!currentUrl.startsWith('/admin') && currentUrl !== '/' && currentUrl !== '/login' && !currentUrl.startsWith('/register')) {
                this.router.navigate(['/login']);
              }
            }
          }
          
          return throwError(() => error);
        })
      );
    }
    
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle 401 for non-authenticated requests
        // Don't redirect if we're on public routes (landing page, admin, login, register) or making admin API calls
        const currentUrl = this.router.url;
        if (error.status === 401 && !req.url.includes('/login') && !req.url.includes('/admin') && 
            !currentUrl.startsWith('/admin') && currentUrl !== '/' && currentUrl !== '/login' && !currentUrl.startsWith('/register')) {
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}