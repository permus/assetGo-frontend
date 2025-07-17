import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at?: string;
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

  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data);
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data);
  }

  forgotPassword(data: ForgotPasswordRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/forgot-password`, data);
  }

  resetPassword(data: ResetPasswordRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/reset-password`, data);
  }

  verifyEmail(id: string, hash: string): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/email/verify/${id}/${hash}`);
  }

  resendVerification(data?: ResendVerificationRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/email/resend`, data || {});
  }

  getProfile(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/profile`);
  }

  logout(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/logout`, {});
  }

  logoutAll(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/logout-all`, {});
  }
}