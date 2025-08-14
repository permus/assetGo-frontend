import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/services/auth.service';

export interface WorkOrderUser {
  id: number;
  first_name: string;
  last_name: string;
  user_type: string;
  email: string;
  email_verified_at: string;
  company_id: number;
  created_by: number;
  permissions: any;
  created_at: string;
  updated_at: string;
}

export interface WorkOrderCompany {
  id: number;
  name: string;
  slug: string;
  owner_id: string;
  subscription_status: string;
  subscription_expires_at: string | null;
  business_type: string | null;
  industry: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  logo: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface WorkOrder {
  id: number;
  title: string;
  description: string | null;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  due_date: string | null;
  completed_at: string | null;
  asset_id: number | null;
  location_id: number | null;
  assigned_to: number | null;
  assigned_by: number | null;
  created_by: WorkOrderUser;
  company_id: number;
  estimated_hours: number | null;
  actual_hours: number | null;
  notes: string | null;
  category: string | null;
  tags: string | null;
  team: any | null;
  meta: any;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  is_overdue: boolean;
  days_until_due: number | null;
  days_since_created: number;
  resolution_time_days: number | null;
  asset: any | null;
  location: any | null;
  company: WorkOrderCompany;
}

export interface WorkOrderListResponse {
  current_page: number;
  data: WorkOrder[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url: string | null;
    label: string;
    active: boolean;
  }>;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface CreateWorkOrderRequest {
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  due_date?: string;
  asset_id?: number;
  location_id?: number;
  assigned_to?: number;
  team_id?: number;
  category?: string;
  tags?: string;
  estimated_hours?: number;
  notes?: string;
}

export interface WorkOrderStats {
  total: number;
  open: number;
  inProgress: number;
  completed: number;
  critical: number;
}

export interface WorkOrderPreview extends WorkOrder {
  lastUpdated?: string;
  timeSpent?: string;
  totalCost?: number;
  hourlyRate?: number;
  comments?: WorkOrderComment[];
  timeLogs?: TimeLog[];
}

export interface WorkOrderComment {
  id: string;
  text: string;
  author: string;
  timestamp: string;
}

export interface TimeLog {
  id: string;
  description?: string;
  startTime: string;
  endTime?: string;
  duration: string;
  author: string;
  hourlyRate?: number;
}

// New interfaces for enhanced analytics and filtering
export interface WorkOrderAnalytics {
  performance_metrics: {
    average_resolution_time: number;
    completion_rate: number;
    overdue_count: number;
    active_technicians: number;
    resolution_time_trend: string;
    overdue_trend: string;
  };
  status_distribution: {
    completed: number;
    open: number;
    in_progress: number;
    on_hold: number;
    cancelled: number;
    total: number;
  };
  priority_distribution: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  monthly_trends: {
    created: number[];
    completed: number[];
    months: string[];
  };
  technician_performance: Array<{
    name: string;
    performance_score: number;
    completed_orders: number;
    average_resolution_time: number;
  }>;
  insights: Array<{
    type: 'success' | 'warning' | 'info' | 'optimization';
    title: string;
    description: string;
    tag: string;
    icon: string;
  }>;
}

export interface WorkOrderStatistics {
  total_count: number;
  status_breakdown: {
    open: number;
    in_progress: number;
    completed: number;
    cancelled: number;
  };
  priority_breakdown: {
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
  overdue_count: number;
  completion_rate: number;
  average_resolution_time: number;
}

export interface WorkOrderFilters {
  status_options: string[];
  priority_options: string[];
  asset_types: Array<{ id: number; name: string }>;
  location_options: Array<{ id: number; name: string }>;
  user_assignments: Array<{ id: number; name: string }>;
  date_ranges: {
    min_date: string;
    max_date: string;
  };
}

export interface WorkOrderSearchParams {
  status?: string;
  priority?: string;
  asset_id?: number;
  location_id?: number;
  assigned_to?: number;
  overdue?: boolean;
  start_date?: string;
  end_date?: string;
  search?: string;
  sort?: string;
  direction?: 'asc' | 'desc';
  page?: number;
  per_page?: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {
  private apiUrl = `${environment.apiUrl}/work-orders`;
  
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

  // Enhanced: Get all work orders with advanced filtering and search
  getWorkOrders(params?: WorkOrderSearchParams): Observable<WorkOrderListResponse> {
    let httpParams = new HttpParams();
    
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof WorkOrderSearchParams];
        if (value !== undefined && value !== null && value !== '') {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }

    return this.http.get<WorkOrderListResponse>(
      this.apiUrl, 
      { ...this.getAuthHeaders(), params: httpParams }
    );
  }

  // Get a single work order by ID
  getWorkOrderById(id: string): Observable<WorkOrderPreview> {
    return this.http.get<WorkOrderPreview>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Create a new work order
  createWorkOrder(workOrder: CreateWorkOrderRequest): Observable<WorkOrder> {
    return this.http.post<WorkOrder>(this.apiUrl, workOrder, this.getAuthHeaders());
  }

  // Update an existing work order
  updateWorkOrder(id: number, workOrder: Partial<CreateWorkOrderRequest>): Observable<WorkOrder> {
    return this.http.put<WorkOrder>(`${this.apiUrl}/${id}`, workOrder, this.getAuthHeaders());
  }

  // Delete a work order
  deleteWorkOrder(id: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Get comprehensive work order analytics
  getWorkOrderAnalytics(): Observable<WorkOrderAnalytics> {
    return this.http.get<WorkOrderAnalytics>(`${this.apiUrl}/analytics`, this.getAuthHeaders());
  }

  // Get basic work order statistics
  getWorkOrderStatistics(): Observable<WorkOrderStatistics> {
    return this.http.get<WorkOrderStatistics>(`${this.apiUrl}/statistics`, this.getAuthHeaders());
  }

  // Get work order count with filters
  getWorkOrderCount(params?: WorkOrderSearchParams): Observable<{ count: number }> {
    let httpParams = new HttpParams();
    
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof WorkOrderSearchParams];
        if (value !== undefined && value !== null && value !== '') {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }

    return this.http.get<{ count: number }>(
      `${this.apiUrl}/count`, 
      { ...this.getAuthHeaders(), params: httpParams }
    );
  }

  // Get available filter options
  getWorkOrderFilters(): Observable<WorkOrderFilters> {
    return this.http.get<WorkOrderFilters>(`${this.apiUrl}/filters`, this.getAuthHeaders());
  }

  // Legacy: Get work order statistics (kept for backward compatibility)
  getWorkOrderStats(): Observable<WorkOrderStats> {
    return this.http.get<WorkOrderStats>(`${this.apiUrl}/count`, this.getAuthHeaders());
  }
}
