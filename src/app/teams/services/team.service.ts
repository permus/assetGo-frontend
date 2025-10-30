import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';

// Team interfaces
export interface Team {
  id: number;
  name: string;
  description?: string;
  company_id: number;
  created_by: number;
  created_at: string;
  updated_at: string;
  members?: TeamMember[];
}

// Team Member interfaces (users with user_type = 'team')
export interface TeamMember {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role_id?: number;
  role?: {
    id: number;
    name: string;
    description?: string;
  };
  roles?: Array<{
    id: number;
    name: string;
    description?: string;
    permissions?: any;
  }>;
  hourly_rate?: number;
  user_type: 'team';
  company_id: number;
  created_by: number;
  email_verified_at?: string;
  created_at: string;
  updated_at: string;
  active?: boolean; // Team member active/inactive status
  showMenu?: boolean; // For UI dropdown menu state
  // Location scoping info (optional fields provided by backend)
  locations?: { id: number; name: string }[];
  has_full_location_access?: boolean;
  assigned_work_orders_count?: number;
  assigned_work_orders_total_count?: number;
  assigned_work_orders_active_count?: number;
  assigned_work_orders_completed_count?: number;
}

export interface TeamMemberStatistics {
  // Team member counts
  total_team_members: number;
  active_team_members: number;
  pending_team_members: number;

  // Work order assignment aggregates
  assigned_work_orders_total_count: number;
  assigned_work_orders_active_count: number;
  assigned_work_orders_completed_count: number;

  // Derived KPI
  completion_rate: number;

  // Legacy optional fields for backward compatibility with older templates
  work_orders_count?: number;
  active_work_orders_count?: number;
}

export interface AvailableRole {
  id: number;
  name: string;
  description?: string;
}

export interface Pagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}

export interface TeamMembersPaginatedResponse {
  success: boolean;
  data: {
    teams: TeamMember[];
    pagination: Pagination;
  };
}

export interface TeamMemberResponse {
  success: boolean;
  data: TeamMember;
}

export interface TeamMemberStatisticsResponse {
  success: boolean;
  data: TeamMemberStatistics;
}

export interface TeamAnalyticsResponse {
  success: boolean;
  data: {
    date_range_days: number;
    productivity_rate_percent: number;
    on_time_rate_percent: number;
    avg_completion_days: number;
    labor_cost_total: number;
    top_performers: Array<{ user_id: number; first_name: string; last_name: string; completed_count: number }>;
  };
}

export interface AvailableRolesResponse {
  success: boolean;
  data: AvailableRole[];
}

export interface CreateTeamMemberRequest {
  first_name: string;
  last_name: string;
  email: string;
  role_id: number;
  hourly_rate?: number | null;
  location_ids?: number[] | null; // omit or null => full access
  expand_descendants?: boolean;   // default true
  password?: string;              // optional custom password
  password_confirmation?: string; // required if password is provided
}

export interface UpdateTeamMemberRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
  role_id?: number;
  hourly_rate?: number | null;
  location_ids?: number[] | null;
  expand_descendants?: boolean;
}

export interface ResendInvitationRequest {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = `${environment.apiUrl}/teams`;

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

  // Get paginated team members
  getTeamMembers(
    page: number = 1,
    perPage: number = 15,
    opts?: {
      search?: string;
      role_id?: number;
      role_name?: string;
      status?: 'active' | 'inactive';
      active?: boolean;
      type?: string;
      sort_by?: 'name' | 'email' | 'created_at';
      sort_dir?: 'asc' | 'desc';
    }
  ): Observable<TeamMembersPaginatedResponse> {
    const token = this.authService.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    } as { [header: string]: string };

    const params = new URLSearchParams();
    params.set('page', String(page));
    params.set('per_page', String(perPage));
    if (opts?.search) params.set('search', opts.search);
    if (opts?.role_id !== undefined) params.set('role_id', String(opts.role_id));
    if (opts?.role_name) params.set('role_name', opts.role_name);
    if (opts?.status) params.set('status', opts.status);
    if (opts?.active !== undefined) params.set('active', String(opts.active));
    if (opts?.type) params.set('type', opts.type);
    if (opts?.sort_by) params.set('sort_by', opts.sort_by);
    if (opts?.sort_dir) params.set('sort_dir', opts.sort_dir);

    const url = `${this.apiUrl}?${params.toString()}`;
    return this.http.get<TeamMembersPaginatedResponse>(url, { headers });
  }

  // Convenience: get flat list of team members for selects
  getTeamMembersFlat(perPage: number = 1000): Observable<TeamMember[]> {
    return this.getTeamMembers(1, perPage).pipe(
      map((res) => res?.data?.teams ?? [])
    );
  }

  // Get a specific team member
  getTeamMember(id: number): Observable<TeamMemberResponse> {
    return this.http.get<TeamMemberResponse>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Create a new team member (invite)
  createTeamMember(teamMemberData: CreateTeamMemberRequest): Observable<TeamMemberResponse> {
    return this.http.post<TeamMemberResponse>(this.apiUrl, teamMemberData, this.getAuthHeaders());
  }

  // Update a team member
  updateTeamMember(id: number, teamMemberData: UpdateTeamMemberRequest): Observable<TeamMemberResponse> {
    return this.http.put<TeamMemberResponse>(`${this.apiUrl}/${id}`, teamMemberData, this.getAuthHeaders());
  }

  // Toggle team member active/inactive status
  toggleTeamMemberStatus(id: number): Observable<TeamMemberResponse> {
    return this.http.post<TeamMemberResponse>(`${this.apiUrl}/${id}/toggle-status`, {}, this.getAuthHeaders());
  }

  // Delete a team member
  deleteTeamMember(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Resend invitation
  resendInvitation(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/${id}/resend-invitation`, {}, this.getAuthHeaders());
  }

  // Get team member statistics
  getTeamMemberStatistics(): Observable<TeamMemberStatisticsResponse> {
    return this.http.get<TeamMemberStatisticsResponse>(`${this.apiUrl}/statistics`, this.getAuthHeaders());
  }

  // Get team analytics
  getTeamAnalytics(params?: { date_range?: number }): Observable<TeamAnalyticsResponse> {
    const token = this.authService.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    } as { [header: string]: string };

    const query = new URLSearchParams();
    if (params?.date_range) query.set('date_range', String(params.date_range));

    const url = `${this.apiUrl}/analytics${query.toString() ? `?${query.toString()}` : ''}`;
    return this.http.get<TeamAnalyticsResponse>(url, { headers });
  }

  // Get available roles for team members
  getAvailableRoles(): Observable<AvailableRolesResponse> {
    return this.http.get<AvailableRolesResponse>(`${this.apiUrl}/available-roles`, this.getAuthHeaders());
  }

  // Team management methods
  getTeam(id: number): Observable<{ success: boolean; data: Team }> {
    return this.http.get<{ success: boolean; data: Team }>(`${this.apiUrl}/teams/${id}`, this.getAuthHeaders());
  }

  createTeam(teamData: Partial<Team>): Observable<{ success: boolean; data: Team }> {
    return this.http.post<{ success: boolean; data: Team }>(`${this.apiUrl}/teams`, teamData, this.getAuthHeaders());
  }

  updateTeam(id: number, teamData: Partial<Team>): Observable<{ success: boolean; data: Team }> {
    return this.http.put<{ success: boolean; data: Team }>(`${this.apiUrl}/teams/${id}`, teamData, this.getAuthHeaders());
  }
}
