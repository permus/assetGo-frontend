import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface DashboardData {
  total_assets: number;
  active_assets: number;
  critical_alerts: number;
  monthly_investment: number;
  asset_utilization: number | null;
  scheduled_maintenance: number;
  active_work_orders: number;
  archived_assets: number;
  asset_health: { total: number; active: number; uncategorized: number; average_health_score: number };
  maintenance_insights: { completion_rate: number; avg_days_to_complete: number; total_work_orders: number; scheduled_this_week: number; overdue: number };
  transfer_approvals: number;
  ai_insights: string;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private base = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}
  getDashboardData(): Observable<{ success: boolean; data: DashboardData }> {
    return this.http.get<{ success: boolean; data: DashboardData }>(`${this.base}/dashboard`);
  }
}


