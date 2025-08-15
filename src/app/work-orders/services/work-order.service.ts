import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  priority_id: number | null;
  status_id: number | null;
  category_id: number | null;
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
  
  // Relationships (populated by backend)
  priority?: { id: number; name: string; slug: string };
  status?: { id: number; name: string; slug: string };
  category?: { id: number; name: string; slug: string };
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

// Generic API response wrapper from backend
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface CreateWorkOrderRequest {
  title: string;
  description?: string;
  priority_id: number;
  status_id: number;
  category_id?: number;
  due_date?: string;
  asset_id?: number;
  location_id?: number;
  assigned_to?: number;
  team_id?: number;
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
  // KPIs
  total_work_orders: number;
  open_work_orders: number;
  in_progress_work_orders: number;
  completed_work_orders: number;
  overdue_work_orders: number;
  average_resolution_time_days: number;
  completion_rate_percentage: number;
  active_technicians: number;

  // Distributions
  status_distribution: { [key: string]: number };
  priority_distribution: { [key: string]: number };

  // Trends
  monthly_performance_trend: Array<{
    year: number;
    month: number;
    created_count: number;
    completed_count: number;
  }>;
  top_technician_performance: Array<{
    assigned_to: number;
    completed_count: number;
    avg_resolution_days: number;
    assignedTo?: {
      id: number;
      first_name: string;
      last_name: string;
    };
  }>;
}

export interface WorkOrderStatistics {
  status_counts: { [key: string]: number };
  priority_counts: { [key: string]: number };
  overdue_count: number;
  recent_created: number;
  recent_completed: number;
}

export interface WorkOrderFilters {
  assets: Array<{ id: number; name: string; asset_id: string }>;
  locations: Array<{ id: number; name: string }>;
  users: Array<{ id: number; first_name: string; last_name: string }>;
  status_options: { [key: string]: string };
  priority_options: { [key: string]: string };
}

export interface WorkOrderSearchParams {
  status_id?: number | null;
  priority_id?: number | null;
  category_id?: number | null;
  asset_id?: number;
  location_id?: number;
  assigned_to?: number;
  overdue?: boolean;
  start_date?: string;
  end_date?: string;
  search?: string;
  sort_by?: string;
  sort_dir?: 'asc' | 'desc';
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
    return this.http
      .get<ApiResponse<WorkOrderAnalytics>>(`${this.apiUrl}/analytics`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  // Get basic work order statistics
  getWorkOrderStatistics(): Observable<WorkOrderStatistics> {
    return this.http
      .get<ApiResponse<WorkOrderStatistics>>(`${this.apiUrl}/statistics`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
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

    return this.http
      .get<ApiResponse<{ count: number }>>(
        `${this.apiUrl}/count`, 
        { ...this.getAuthHeaders(), params: httpParams }
      )
      .pipe(map((res) => res.data));
  }

  // Get available filter options
  getWorkOrderFilters(): Observable<WorkOrderFilters> {
    return this.http
      .get<ApiResponse<WorkOrderFilters>>(`${this.apiUrl}/filters`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  // Legacy: Get work order statistics (kept for backward compatibility)
  // Note: This method is deprecated, use getWorkOrderStatistics() instead
  getWorkOrderStats(): Observable<WorkOrderStats> {
    // For backward compatibility, we'll call the statistics endpoint and transform the data
    return this.http.get<WorkOrderStatistics>(`${this.apiUrl}/statistics`, this.getAuthHeaders())
      .pipe(
        map(stats => ({
          total: Object.values(stats.status_counts || {}).reduce((sum, count) => sum + count, 0),
          open: stats.status_counts?.['open'] || 0,
          inProgress: stats.status_counts?.['in-progress'] || 0,
          completed: stats.status_counts?.['completed'] || 0,
          critical: stats.priority_counts?.['critical'] || 0
        }))
      );
  }
}
