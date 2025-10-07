import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at?: string;
  avatar?: string;
  avatar_url?: string;
  user_type: string;
  company_id: number;
  company?: Company;
}

export interface Company {
  id: number;
  name: string;
  slug: string;
  owner_id: number;
  subscription_status: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: User;
    company?: Company;
    token: string;
    token_type: string;
    email_verified: boolean;
    permissions?: Record<string, any>;
    module_access?: Record<string, boolean>;
  };
  error?: string;
  email_verified?: boolean;
  user_id?: number;
}

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  company_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  user_type?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ResendVerificationRequest {
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private moduleAccessSubject = new BehaviorSubject<Record<string, boolean>>({});
  public moduleAccess$ = this.moduleAccessSubject.asObservable();
  
  private permissionsSubject = new BehaviorSubject<Record<string, any>>({});
  public permissions$ = this.permissionsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }
  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const token = this.getToken();
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    };
  }


  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data, this.getAuthHeaders());
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data, {headers: {
        'Content-Type': 'application/json',
      }})
      .pipe(
        tap(response => {
          if (response.success && response.data?.token) {
            this.setSession(response.data.token, response.data.user);
            
            // Store module access and permissions
            if (response.data?.module_access) {
              this.moduleAccessSubject.next(response.data.module_access);
              localStorage.setItem('module_access', JSON.stringify(response.data.module_access));
            }
            
            if (response.data?.permissions) {
              this.permissionsSubject.next(response.data.permissions);
              localStorage.setItem('permissions', JSON.stringify(response.data.permissions));
            }
          }
        })
      );
  }

  forgotPassword(data: ForgotPasswordRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/forgot-password`, data, this.getAuthHeaders());
  }

  resetPassword(data: ResetPasswordRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/reset-password`, data, this.getAuthHeaders());
  }

  verifyEmail(id: string, hash: string): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/email/verify/${id}/${hash}`, this.getAuthHeaders());
  }

  resendVerification(data?: ResendVerificationRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/email/resend`, data || {}, this.getAuthHeaders());
  }

  getProfile(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/profile`, this.getAuthHeaders());
  }

  logout(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/logout`, {}, this.getAuthHeaders())
      .pipe(
        tap(() => {
          this.clearSession();
        })
      );
  }

  logoutAll(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/logout-all`, {})
      .pipe(
        tap(() => {
          this.clearSession();
        })
      );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getModuleAccess(): Record<string, boolean> {
    return this.moduleAccessSubject.value;
  }

  getPermissions(): Record<string, any> {
    return this.permissionsSubject.value;
  }

  hasModuleAccess(moduleKey: string): boolean {
    const moduleAccess = this.getModuleAccess();
    return moduleAccess[moduleKey] === true;
  }

  hasPermission(module: string, action: string): boolean {
    const permissions = this.getPermissions();
    return permissions[module]?.[action] === true;
  }

  private setSession(token: string, user: User): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private clearSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('module_access');
    localStorage.removeItem('permissions');
    this.currentUserSubject.next(null);
    this.moduleAccessSubject.next({});
    this.permissionsSubject.next({});
  }

  private loadUserFromStorage(): void {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    const moduleAccessStr = localStorage.getItem('module_access');
    const permissionsStr = localStorage.getItem('permissions');

    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.currentUserSubject.next(user);
        
        // Load module access and permissions from storage
        if (moduleAccessStr) {
          const moduleAccess = JSON.parse(moduleAccessStr);
          this.moduleAccessSubject.next(moduleAccess);
        }
        
        if (permissionsStr) {
          const permissions = JSON.parse(permissionsStr);
          this.permissionsSubject.next(permissions);
        }
      } catch (error) {
        this.clearSession();
      }
    }
  }

  /**
   * Update the current user data (used when profile is updated)
   */
  public updateCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
