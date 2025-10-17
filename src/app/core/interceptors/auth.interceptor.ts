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
            if (currentUrl && currentUrl !== '/login' && !currentUrl.includes('/auth/')) {
              localStorage.setItem('redirect_url', currentUrl);
            }
            
            // Set session expired message
            localStorage.setItem('session_message', 'Your session has expired. Please login again.');
            
            // Redirect to login
            this.router.navigate(['/login']);
          }
          
          return throwError(() => error);
        })
      );
    }
    
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle 401 for non-authenticated requests
        if (error.status === 401 && !req.url.includes('/login')) {
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}