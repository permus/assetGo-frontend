import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  // Get all work orders with pagination
  getWorkOrders(): Observable<WorkOrderListResponse> {
    return this.http.get<WorkOrderListResponse>(this.apiUrl, this.getAuthHeaders());
  }

  // Get a single work order by ID
  getWorkOrderById(id: string): Observable<WorkOrderPreview> {
    return this.http.get<WorkOrderPreview>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Create a new work order
  createWorkOrder(workOrder: CreateWorkOrderRequest): Observable<WorkOrder> {
    return this.http.post<WorkOrder>(this.apiUrl, workOrder, this.getAuthHeaders());
  }

  // Get work order statistics
  getWorkOrderStats(): Observable<WorkOrderStats> {
    return this.http.get<WorkOrderStats>(`${this.apiUrl}/count`, this.getAuthHeaders());
  }
}
