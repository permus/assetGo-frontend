import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../../core/services/auth.service';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AssetService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService:AuthService) {}


  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const token = this.authService.getToken();
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    };
  }
  // Asset resource endpoints
  getAssets(params: any = {}): Observable<any> {
    let queryParams = '';
    const paramKeys = Object.keys(params);
    
    if (paramKeys.length > 0) {
      const queryArray = paramKeys
        .filter(key => params[key] !== '' && params[key] !== null && params[key] !== undefined)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      
      if (queryArray.length > 0) {
        queryParams = '?' + queryArray.join('&');
      }
    }
    
    return this.http.get(`${this.baseUrl}/assets${queryParams}`, this.getAuthHeaders());
  }
  getAsset(id: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/${id}`, this.getAuthHeaders());
  }
  createAsset(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets`, data, this.getAuthHeaders());
  }
  updateAsset(id: number | string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/assets/${id}`, data, this.getAuthHeaders());
  }
  
  deleteAsset(id: number | string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/assets/${id}`, this.getAuthHeaders());
  }

  // Restore asset from archive
  restoreAsset(id: number | string, data?: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/${id}/restore`, data, this.getAuthHeaders());
  }

  // Get archive analytics
  getArchiveAnalytics(): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/analytics`, this.getAuthHeaders());
  }

  // Export assets (CSV)
  exportAssets(archived: boolean = false): Observable<Blob> {
    const params = archived ? '?archived=1' : '';
    return this.http.get(`${this.baseUrl}/assets/export${params}`, {
      responseType: 'blob',
      ...this.getAuthHeaders()
    });
  }

  // Archive asset
  archiveAsset(id: number | string, data: any = {}): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/${id}/archive`, data, this.getAuthHeaders());
  }

  // Bulk archive assets
  bulkArchiveAssets(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/bulk-archive`, data, this.getAuthHeaders());
  }

  // Bulk delete assets (permanently delete archived assets)
  bulkDeleteAssets(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/bulk-delete`, data, this.getAuthHeaders());
  }

  // Bulk restore assets
  bulkRestoreAssets(assetIds: number[], restoreReason?: string): Observable<any> {
    const payload: any = { asset_ids: assetIds };
    if (restoreReason && restoreReason.trim()) {
      payload.restore_reason = restoreReason.trim();
    }
    return this.http.post(`${this.baseUrl}/assets/bulk-restore`, payload, this.getAuthHeaders());
  }

  // Asset statistics
  getAssetStatistics(): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/statistics`, this.getAuthHeaders());
  }

  // Asset category
  getAssetCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/asset-categories`, this.getAuthHeaders());
  }

  // Custom asset endpoints
  duplicateAsset(id: number | string, data: any = {}): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/${id}/duplicate`, data, this.getAuthHeaders());
  }
  bulkImportAssets(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/import/bulk`, data, this.getAuthHeaders());
  }
  transferAsset(id: number | string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/${id}/transfer`, data, this.getAuthHeaders());
  }

  // Maintenance schedule CRUD
  listMaintenanceSchedules(assetId: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/${assetId}/maintenance-schedules`, this.getAuthHeaders());
  }
  addMaintenanceSchedule(assetId: number | string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets/${assetId}/maintenance-schedules`, data, this.getAuthHeaders());
  }
  updateMaintenanceSchedule(assetId: number | string, scheduleId: number | string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/assets/${assetId}/maintenance-schedules/${scheduleId}`, data, this.getAuthHeaders());
  }
  deleteMaintenanceSchedule(assetId: number | string, scheduleId: number | string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/assets/${assetId}/maintenance-schedules/${scheduleId}`, this.getAuthHeaders());
  }

  // Activity history
  getActivityHistory(assetId: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/${assetId}/activity-history`, this.getAuthHeaders());
  }

  // Location list
  getLocations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/locations`, this.getAuthHeaders());
  }

  // Asset Types
  getAssetTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/asset-types-list`, this.getAuthHeaders());
  }

  // Asset Statuses
  getAssetStatuses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/asset-statuses-list`, this.getAuthHeaders());
  }

  // Departments
  getDepartments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/departments-list`, this.getAuthHeaders());
  }
}
