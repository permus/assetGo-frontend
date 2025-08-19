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
  id: number;
  work_order_id?: number;
  user?: { id: number; first_name: string; last_name: string; email: string };
  comment: string;
  meta?: any;
  created_at: string;
  updated_at: string;
}

export interface TimeLog {
  id: number;
  description?: string | null;
  start_time: string;
  end_time?: string | null;
  duration_minutes?: number | null;
  user?: { id: number; first_name: string; last_name: string; email: string };
  hourly_rate?: number | null;
  total_cost?: number | null;
}

export interface WorkOrderAssignment {
  id: number;
  work_order_id: number;
  user: { id: number; first_name: string; last_name: string; email: string };
  user_id: number;
  assigned_by?: number | null;
  status?: string; // optional: 'assigned' | 'accepted' | 'declined' | 'completed'
  created_at: string;
  updated_at: string;
}

export interface WorkOrderPartItem {
  id: number;
  work_order_id: number;
  part_id: number;
  part?: { id: number; name: string; uom?: string };
  location_id?: number | null;
  qty: number;
  unit_cost?: number | null;
  status: 'reserved' | 'consumed';
  created_at: string;
  updated_at: string;
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

export interface WorkOrderHistoryEvent {
  type: 'created' | 'updated' | 'comment' | string;
  title: string;
  timestamp: string;
  user?: { id: number; first_name: string; last_name: string; email: string } | null;
  details?: any;
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

  // Comments API
  getComments(workOrderId: number): Observable<WorkOrderComment[]> {
    return this.http
      .get<ApiResponse<WorkOrderComment[]>>(`${this.apiUrl}/${workOrderId}/comments`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  // Assignments API
  getAssignments(workOrderId: number): Observable<WorkOrderAssignment[]> {
    return this.http
      .get<ApiResponse<WorkOrderAssignment[]>>(`${this.apiUrl}/${workOrderId}/assignments`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  setAssignments(workOrderId: number, userIds: number[]): Observable<WorkOrderAssignment[]> {
    return this.http
      .post<ApiResponse<WorkOrderAssignment[]>>(
        `${this.apiUrl}/${workOrderId}/assignments`,
        { user_ids: userIds },
        this.getAuthHeaders()
      )
      .pipe(map((res) => res.data));
  }

  deleteAssignment(workOrderId: number, assignmentId: number): Observable<{ success: boolean; message?: string }> {
    return this.http
      .delete<{ success: boolean; message?: string }>(`${this.apiUrl}/${workOrderId}/assignments/${assignmentId}`, this.getAuthHeaders());
  }

  // Update a single assignment's status
  updateAssignmentStatus(workOrderId: number, assignmentId: number, status: string): Observable<WorkOrderAssignment> {
    return this.http
      .put<ApiResponse<WorkOrderAssignment>>(
        `${this.apiUrl}/${workOrderId}/assignments/${assignmentId}`,
        { status },
        this.getAuthHeaders()
      )
      .pipe(map((res) => res.data));
  }

  // Parts API
  getParts(workOrderId: number): Observable<WorkOrderPartItem[]> {
    return this.http
      .get<ApiResponse<WorkOrderPartItem[]>>(`${this.apiUrl}/${workOrderId}/parts`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  addParts(workOrderId: number, items: Array<{ part_id: number; qty: number; unit_cost?: number; location_id?: number }>): Observable<WorkOrderPartItem[]> {
    return this.http
      .post<ApiResponse<WorkOrderPartItem[]>>(`${this.apiUrl}/${workOrderId}/parts`, { items }, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  updatePart(workOrderId: number, partItemId: number, payload: Partial<{ qty: number; unit_cost: number; status: 'reserved' | 'consumed' }>): Observable<WorkOrderPartItem> {
    return this.http
      .put<ApiResponse<WorkOrderPartItem>>(`${this.apiUrl}/${workOrderId}/parts/${partItemId}`, payload, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  deletePart(workOrderId: number, partItemId: number): Observable<{ success: boolean }> {
    return this.http
      .delete<{ success: boolean }>(`${this.apiUrl}/${workOrderId}/parts/${partItemId}`, this.getAuthHeaders());
  }

  addComment(workOrderId: number, comment: string, meta?: any): Observable<WorkOrderComment> {
    return this.http
      .post<ApiResponse<WorkOrderComment>>(
        `${this.apiUrl}/${workOrderId}/comments`,
        { comment, meta },
        this.getAuthHeaders()
      )
      .pipe(map((res) => res.data));
  }

  deleteComment(workOrderId: number, commentId: number): Observable<{ success: boolean; message?: string }> {
    return this.http
      .delete<{ success: boolean; message?: string }>(`${this.apiUrl}/${workOrderId}/comments/${commentId}`, this.getAuthHeaders());
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
    return this.http
      .get<ApiResponse<WorkOrderPreview>>(`${this.apiUrl}/${id}`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  // Update status by status_id
  updateWorkOrderStatus(id: number, status_id: number): Observable<WorkOrder> {
    return this.http
      .post<ApiResponse<WorkOrder>>(`${this.apiUrl}/${id}/status`, { status_id }, this.getAuthHeaders())
      .pipe(map((res) => res.data));
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

  // History API
  getWorkOrderHistory(id: number): Observable<WorkOrderHistoryEvent[]> {
    return this.http
      .get<ApiResponse<WorkOrderHistoryEvent[]>>(`${this.apiUrl}/${id}/history`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  // Time tracking API
  getTimeLogs(workOrderId: number): Observable<{ logs: TimeLog[]; totals: { total_minutes: number; total_cost: number } }> {
    return this.http
      .get<ApiResponse<{ logs: TimeLog[]; totals: { total_minutes: number; total_cost: number } }>>(
        `${this.apiUrl}/${workOrderId}/time-logs`,
        this.getAuthHeaders()
      )
      .pipe(map((res) => res.data));
  }

  startTimer(workOrderId: number, payload: { description?: string; hourly_rate?: number }): Observable<TimeLog> {
    return this.http
      .post<ApiResponse<TimeLog>>(
        `${this.apiUrl}/${workOrderId}/time-logs/start`,
        payload,
        this.getAuthHeaders()
      )
      .pipe(map((res) => res.data));
  }

  stopTimer(workOrderId: number): Observable<TimeLog> {
    return this.http
      .post<ApiResponse<TimeLog>>(
        `${this.apiUrl}/${workOrderId}/time-logs/stop`,
        {},
        this.getAuthHeaders()
      )
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
