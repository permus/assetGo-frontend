import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';

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
  hourly_rate?: number;
  user_type: 'team';
  company_id: number;
  created_by: number;
  email_verified_at?: string;
  created_at: string;
  updated_at: string;
  showMenu?: boolean; // For UI dropdown menu state
  // Location scoping info (optional fields provided by backend)
  locations?: { id: number; name: string }[];
  has_full_location_access?: boolean;
}

export interface TeamMemberStatistics {
  total_team_members: number;
  active_team_members: number;
  pending_team_members: number;
}

export interface AvailableRole {
  id: number;
  name: string;
  description?: string;
}

export interface TeamMembersResponse {
  success: boolean;
  data: TeamMember[];
}

export interface TeamMemberResponse {
  success: boolean;
  data: TeamMember;
}

export interface TeamMemberStatisticsResponse {
  success: boolean;
  data: TeamMemberStatistics;
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

  // Get all team members
  getTeamMembers(): Observable<TeamMembersResponse> {
    return this.http.get<TeamMembersResponse>(this.apiUrl, this.getAuthHeaders());
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

  // Get available roles for team members
  getAvailableRoles(): Observable<AvailableRolesResponse> {
    return this.http.get<AvailableRolesResponse>(`${this.apiUrl}/available-roles`, this.getAuthHeaders());
  }
}
