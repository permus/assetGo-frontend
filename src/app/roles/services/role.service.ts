import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';

// Role interfaces
export interface Role {
  id: number;
  name: string;
  description?: string;
  company_id: number;
  created_at: string;
  updated_at: string;
  permissions?: Permission;
  users_count?: number;
  showMenu?: boolean; // For UI dropdown menu state
}

export interface Permission {
  id: number;
  role_id: number;
  permissions: {
    [module: string]: {
      can_view: boolean;
      can_create: boolean;
      can_edit: boolean;
      can_delete: boolean;
      can_export: boolean;
    };
  };
  created_at: string;
  updated_at: string;
}

export interface AvailablePermissions {
  [module: string]: {
    can_view: boolean;
    can_create: boolean;
    can_edit: boolean;
    can_delete: boolean;
    can_export: boolean;
  };
}

export interface RolesResponse {
  success: boolean;
  data: Role[];
}

export interface RoleResponse {
  success: boolean;
  data: Role;
}

export interface AvailablePermissionsResponse {
  success: boolean;
  data: AvailablePermissions;
}

export interface CreateRoleRequest {
  name: string;
  description?: string;
  permissions: {
    [module: string]: {
      can_view: boolean;
      can_create: boolean;
      can_edit: boolean;
      can_delete: boolean;
      can_export: boolean;
    };
  };
}

export interface UpdateRoleRequest {
  name?: string;
  description?: string;
  permissions?: {
    [module: string]: {
      can_view: boolean;
      can_create: boolean;
      can_edit: boolean;
      can_delete: boolean;
      can_export: boolean;
    };
  };
}

export interface AssignRoleRequest {
  user_id: number;
  role_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = `${environment.apiUrl}/roles`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const token = this.authService.getToken();
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    };
  }

  // Get all roles
  getRoles(): Observable<RolesResponse> {
    return this.http.get<RolesResponse>(this.apiUrl, this.getAuthHeaders());
  }

  // Get a specific role
  getRole(id: number): Observable<RoleResponse> {
    return this.http.get<RoleResponse>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Create a new role
  createRole(roleData: CreateRoleRequest): Observable<RoleResponse> {
    return this.http.post<RoleResponse>(this.apiUrl, roleData, this.getAuthHeaders());
  }

  // Update a role
  updateRole(id: number, roleData: UpdateRoleRequest): Observable<RoleResponse> {
    return this.http.put<RoleResponse>(`${this.apiUrl}/${id}`, roleData, this.getAuthHeaders());
  }

  // Delete a role
  deleteRole(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Get available permissions
  getAvailablePermissions(): Observable<AvailablePermissionsResponse> {
    return this.http.get<AvailablePermissionsResponse>(`${this.apiUrl}/available-permissions`, this.getAuthHeaders());
  }

  // Assign role to user
  assignRoleToUser(data: AssignRoleRequest): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/assign-to-user`, data, this.getAuthHeaders());
  }

  // Remove role from user
  removeRoleFromUser(data: AssignRoleRequest): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/remove-from-user`, data, this.getAuthHeaders());
  }
} 