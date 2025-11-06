import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MaintenancePlan, MaintenancePlanChecklist, ScheduleMaintenance } from './models';

@Injectable({ providedIn: 'root' })
export class MaintenanceService {
  private base = `${environment.apiUrl}/maintenance`;

  constructor(private http: HttpClient) {}

  listPlans(params?: Record<string, any>): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(k => {
        if (params[k] !== undefined && params[k] !== null) {
          httpParams = httpParams.set(k, String(params[k]));
        }
      });
    }
    return this.http.get<any>(`${this.base}/plans`, { params: httpParams });
  }

  getPlan(id: number): Observable<any> {
    return this.http.get<any>(`${this.base}/plans/${id}`);
  }

  createPlan(payload: MaintenancePlan & { checklist_items: MaintenancePlanChecklist[] }): Observable<any> {
    return this.http.post<any>(`${this.base}/plans`, payload);
  }

  updatePlan(id: number, payload: Partial<MaintenancePlan> & { checklist_items?: MaintenancePlanChecklist[] }): Observable<any> {
    return this.http.put<any>(`${this.base}/plans/${id}`, payload);
  }

  deletePlan(id: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/plans/${id}`);
  }

  listSchedules(params?: Record<string, any>): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(k => {
        if (params[k] !== undefined && params[k] !== null) {
          httpParams = httpParams.set(k, String(params[k]));
        }
      });
    }
    return this.http.get<any>(`${this.base}/schedules`, { params: httpParams });
  }

  createSchedule(payload: ScheduleMaintenance): Observable<any> {
    return this.http.post<any>(`${this.base}/schedules`, payload);
  }

  getSchedule(id: number): Observable<any> {
    return this.http.get<any>(`${this.base}/schedules/${id}`);
  }

  updateSchedule(id: number, payload: Partial<ScheduleMaintenance>): Observable<any> {
    return this.http.put<any>(`${this.base}/schedules/${id}`, payload);
  }

  deleteSchedule(id: number): Observable<any> {
    return this.http.delete<any>(`${this.base}/schedules/${id}`);
  }

  getHistoryStats(): Observable<any> {
    return this.http.get<any>(`${this.base}/stats/history`);
  }

  getAnalyticsStats(): Observable<any> {
    return this.http.get<any>(`${this.base}/stats/analytics`);
  }
}


