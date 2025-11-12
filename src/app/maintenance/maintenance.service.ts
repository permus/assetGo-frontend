import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MaintenancePlan, MaintenancePlanChecklist, ScheduleMaintenance, AssignedMaintenance, MaintenanceChecklistResponse } from './models';

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

  /**
   * Get current user's assigned maintenance tasks
   */
  getMyAssignments(): Observable<{ success: boolean; data: AssignedMaintenance[] }> {
    return this.http.get<{ success: boolean; data: AssignedMaintenance[] }>(`${this.base}/my-assignments`);
  }

  /**
   * Get checklist responses for an assignment
   */
  getChecklistResponses(assignmentId: number): Observable<{ success: boolean; data: MaintenanceChecklistResponse[] }> {
    const params = new HttpParams().set('schedule_maintenance_assigned_id', assignmentId.toString());
    return this.http.get<{ success: boolean; data: MaintenanceChecklistResponse[] }>(`${this.base}/checklist-responses`, { params });
  }

  /**
   * Save or update a checklist response
   */
  saveChecklistResponse(payload: {
    schedule_maintenance_assigned_id: number;
    checklist_item_id: number;
    response_type: string;
    response_value: any;
    photo?: File;
  }): Observable<{ success: boolean; data: MaintenanceChecklistResponse }> {
    const formData = new FormData();
    formData.append('schedule_maintenance_assigned_id', payload.schedule_maintenance_assigned_id.toString());
    formData.append('checklist_item_id', payload.checklist_item_id.toString());
    formData.append('response_type', payload.response_type);
    formData.append('response_value', JSON.stringify(payload.response_value));
    
    if (payload.photo) {
      formData.append('photo', payload.photo);
    }

    return this.http.post<{ success: boolean; data: MaintenanceChecklistResponse }>(`${this.base}/checklist-responses`, formData);
  }

  /**
   * Upload photo for photo_capture checklist items
   */
  uploadChecklistPhoto(assignmentId: number, itemId: number, file: File): Observable<{ success: boolean; data: MaintenanceChecklistResponse }> {
    const formData = new FormData();
    formData.append('schedule_maintenance_assigned_id', assignmentId.toString());
    formData.append('checklist_item_id', itemId.toString());
    formData.append('response_type', 'photo_capture');
    formData.append('response_value', JSON.stringify({}));
    formData.append('photo', file);

    return this.http.post<{ success: boolean; data: MaintenanceChecklistResponse }>(`${this.base}/checklist-responses`, formData);
  }

  /**
   * Update an existing checklist response
   */
  updateChecklistResponse(responseId: number, payload: {
    response_value?: any;
    photo?: File;
  }): Observable<{ success: boolean; data: MaintenanceChecklistResponse }> {
    const formData = new FormData();
    
    if (payload.response_value !== undefined) {
      formData.append('response_value', JSON.stringify(payload.response_value));
    }
    
    if (payload.photo) {
      formData.append('photo', payload.photo);
    }

    return this.http.put<{ success: boolean; data: MaintenanceChecklistResponse }>(`${this.base}/checklist-responses/${responseId}`, formData);
  }

  /**
   * Get users who can be assigned to maintenance schedules
   */
  getAssignableUsers(scheduleId?: number): Observable<{ success: boolean; data: any[] }> {
    let params = new HttpParams();
    if (scheduleId) {
      params = params.set('schedule_id', scheduleId.toString());
    }
    return this.http.get<{ success: boolean; data: any[] }>(`${this.base}/assignable-users`, { params });
  }

  /**
   * Get all assignments for a specific schedule
   */
  getScheduleAssignments(scheduleId: number): Observable<{ success: boolean; data: any[] }> {
    return this.http.get<{ success: boolean; data: any[] }>(`${this.base}/schedules/${scheduleId}/assignments`);
  }

  /**
   * Assign user to schedule
   */
  assignUserToSchedule(scheduleId: number, userId: number): Observable<{ success: boolean; data: any }> {
    return this.http.post<{ success: boolean; data: any }>(`${this.base}/schedule-assignments`, {
      schedule_maintenance_id: scheduleId,
      team_id: userId
    });
  }

  /**
   * Remove assignment
   */
  removeAssignment(assignmentId: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.base}/schedule-assignments/${assignmentId}`);
  }

  /**
   * Delete a checklist response
   */
  deleteChecklistResponse(responseId: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.base}/checklist-responses/${responseId}`);
  }
}


