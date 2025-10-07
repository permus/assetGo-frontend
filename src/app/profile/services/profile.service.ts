import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_type: 'admin' | 'user' | 'manager' | 'team';
  email_verified_at?: string;
  avatar?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
  company?: {
    id: number;
    name: string;
  };
}

export interface ProfileUpdateRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
}

export interface PasswordChangeRequest {
  current_password: string;
  password: string;
  password_confirmation: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProfile(): Observable<{success: boolean, data: {user: UserProfile}}> {
    return this.http.get<{success: boolean, data: {user: UserProfile}}>(`${this.apiUrl}/profile`);
  }

  updateProfile(data: ProfileUpdateRequest): Observable<{success: boolean, message: string, data: {user: UserProfile}}> {
    return this.http.put<{success: boolean, message: string, data: {user: UserProfile}}>(`${this.apiUrl}/profile`, data);
  }

  changePassword(data: PasswordChangeRequest): Observable<{success: boolean, message: string}> {
    return this.http.post<{success: boolean, message: string}>(`${this.apiUrl}/change-password`, data);
  }

  uploadAvatar(file: File): Observable<{success: boolean, message: string, data: {avatar_url: string, avatar_path: string}}> {
    const formData = new FormData();
    formData.append('avatar', file);
    
    return this.http.post<{success: boolean, message: string, data: {avatar_url: string, avatar_path: string}}>(`${this.apiUrl}/profile/avatar`, formData);
  }
}
