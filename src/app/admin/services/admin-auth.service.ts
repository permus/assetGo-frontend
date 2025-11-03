import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface Admin {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
}

export interface AdminAuthResponse {
  success: boolean;
  message: string;
  data?: {
    token: string;
    admin: Admin;
  };
}

export interface AdminLoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private apiUrl = environment.apiUrl;
  private currentAdminSubject = new BehaviorSubject<Admin | null>(null);
  public currentAdmin$ = this.currentAdminSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadAdminFromStorage();
  }

  private loadAdminFromStorage(): void {
    const adminStr = localStorage.getItem('admin');
    if (adminStr) {
      try {
        const admin = JSON.parse(adminStr);
        this.currentAdminSubject.next(admin);
      } catch (e) {
        localStorage.removeItem('admin');
        localStorage.removeItem('admin_token');
      }
    }
  }

  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const token = this.getToken();
    return {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    };
  }

  login(data: AdminLoginRequest): Observable<AdminAuthResponse> {
    return this.http.post<AdminAuthResponse>(`${this.apiUrl}/admin/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .pipe(
        tap(response => {
          if (response.success && response.data?.token) {
            this.setSession(response.data.token, response.data.admin);
          }
        })
      );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/logout`, {}, this.getAuthHeaders())
      .pipe(
        tap(() => {
          this.clearSession();
        })
      );
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/profile`, this.getAuthHeaders())
      .pipe(
        tap((response: any) => {
          if (response.success && response.data) {
            this.currentAdminSubject.next(response.data);
            localStorage.setItem('admin', JSON.stringify(response.data));
          }
        })
      );
  }

  private setSession(token: string, admin: Admin): void {
    localStorage.setItem('admin_token', token);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.currentAdminSubject.next(admin);
  }

  private clearSession(): void {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin');
    this.currentAdminSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('admin_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getCurrentAdmin(): Admin | null {
    return this.currentAdminSubject.value;
  }
}

