import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Company {
  id: number;
  name: string;
  slug?: string;
  phone?: string;
  email?: string;
  address?: string;
  business_type?: string;
  industry?: string;
  currency?: string;
  subscription_status?: string;
  logo?: string;
  logo_url?: string;
}

export interface Role {
  id: number;
  name: string;
  description?: string;
}

export interface TeamMember {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_type: string;
  active: boolean;
  roles?: Role[];
  created_at: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_type: string;
  avatar?: string;
  hourly_rate?: number;
  active: boolean;
  preferences?: any;
  created_by?: number;
  created_by_name?: string;
  company_id?: number;
  company?: Company;
  roles?: Role[];
  created_teams?: TeamMember[];
  created_teams_count?: number;
  teams_allowed_count?: number;
  created_at: string;
  updated_at: string;
}

export interface UsersResponse {
  success: boolean;
  data: {
    users: User[];
    pagination: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
      from: number;
      to: number;
    };
  };
}

export interface UserResponse {
  success: boolean;
  data: {
    user: User;
  };
}

export interface CreatedTeamsResponse {
  success: boolean;
  data: {
    teams: TeamMember[];
    pagination: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
      from: number;
      to: number;
    };
  };
}

export interface CreateUserRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  company_name: string;
  industry?: string;
  business_type?: string;
  company_email?: string;
  company_phone?: string;
  company_address?: string;
  logo?: File;
  teams_allowed_count?: number;
}

export interface ChangePasswordRequest {
  password: string;
  password_confirmation: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const adminToken = localStorage.getItem('admin_token');
    const regularToken = localStorage.getItem('token');
    
    if (!adminToken) {
      console.error('AdminUsersService: No admin_token found in localStorage');
      console.error('Regular token exists:', !!regularToken);
      console.error('Please login through /admin/login to get an admin token');
      
      // Show alert to user
      alert('Admin authentication required. Please login through the admin panel at /admin/login');
      throw new Error('Admin token not found. Please login through /admin/login');
    }
    
    console.log('AdminUsersService: Using admin_token (first 20 chars):', adminToken.substring(0, 20) + '...');
    
    const headers: { [header: string]: string } = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${adminToken.trim()}`,
    };
    
    return { headers };
  }

  private getAuthHeadersForFileUpload(): { headers: { [header: string]: string } } {
    const adminToken = localStorage.getItem('admin_token');
    
    if (!adminToken) {
      throw new Error('Admin token not found. Please login through /admin/login');
    }
    
    const headers: { [header: string]: string } = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${adminToken.trim()}`,
      // Don't set Content-Type for FormData, let browser set it with boundary
    };
    
    return { headers };
  }

  getUsers(params?: {
    page?: number;
    per_page?: number;
    search?: string;
    active?: boolean;
    user_type?: string;
    sort_by?: string;
    sort_dir?: string;
  }): Observable<UsersResponse> {
    let httpParams = new HttpParams();
    
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key as keyof typeof params] !== undefined && params[key as keyof typeof params] !== null) {
          httpParams = httpParams.set(key, params[key as keyof typeof params]!.toString());
        }
      });
    }

    return this.http.get<UsersResponse>(`${this.apiUrl}/admin/users`, {
      ...this.getAuthHeaders(),
      params: httpParams
    });
  }

  getUser(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}/admin/users/${id}`, this.getAuthHeaders());
  }

  updateUser(id: number, data: Partial<User>): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.apiUrl}/admin/users/${id}`, data, this.getAuthHeaders());
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`, this.getAuthHeaders());
  }

  getCreatedTeams(userId: number, params?: {
    page?: number;
    per_page?: number;
    sort_by?: string;
    sort_dir?: string;
  }): Observable<CreatedTeamsResponse> {
    let httpParams = new HttpParams();
    
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key as keyof typeof params] !== undefined && params[key as keyof typeof params] !== null) {
          httpParams = httpParams.set(key, params[key as keyof typeof params]!.toString());
        }
      });
    }

    return this.http.get<CreatedTeamsResponse>(`${this.apiUrl}/admin/users/${userId}/teams`, {
      ...this.getAuthHeaders(),
      params: httpParams
    });
  }

  createUser(data: CreateUserRequest): Observable<UserResponse> {
    const formData = new FormData();
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('password_confirmation', data.password_confirmation);
    formData.append('company_name', data.company_name);
    
    if (data.teams_allowed_count !== undefined && data.teams_allowed_count !== null) {
      formData.append('teams_allowed_count', data.teams_allowed_count.toString());
    }
    if (data.industry) formData.append('industry', data.industry);
    if (data.business_type) formData.append('business_type', data.business_type);
    if (data.company_email) formData.append('company_email', data.company_email);
    if (data.company_phone) formData.append('company_phone', data.company_phone);
    if (data.company_address) formData.append('company_address', data.company_address);
    if (data.logo) formData.append('logo', data.logo);

    return this.http.post<UserResponse>(`${this.apiUrl}/admin/users`, formData, this.getAuthHeadersForFileUpload());
  }

  changePassword(userId: number, data: ChangePasswordRequest): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/admin/users/${userId}/change-password`,
      data,
      this.getAuthHeaders()
    );
  }
}

