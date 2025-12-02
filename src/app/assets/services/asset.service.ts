import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from '../../core/services/auth.service';
import {environment} from '../../../environments/environment';

export interface AssetPartItem {
  id?: number;
  asset_id: number;
  part_id: number;
  part?: { id: number; name: string; uom?: string; part_number?: string; unit_cost?: number; category?: { id: number; name: string } };
  qty: number;
  unit_cost?: number | null;
  created_at?: string;
  updated_at?: string;
}

export interface AssetDocument {
  id: number;
  asset_id: number;
  document_path: string;
  document_name: string;
  document_type: 'manual' | 'certificate' | 'warranty' | 'other';
  file_size: number;
  mime_type: string;
  document_url?: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

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

  // Export assets to Excel
  exportAssetsToExcel(archived: boolean = false): Observable<Blob> {
    const params = archived ? '?archived=1' : '';
    return this.http.get(`${this.baseUrl}/assets/export-excel${params}`, {
      responseType: 'blob',
      ...this.getAuthHeaders()
    });
  }

  // Bulk import assets from Excel
  importBulkExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    
    const token = this.authService.getToken();
    const headers: { [header: string]: string } = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return this.http.post(`${this.baseUrl}/assets/import-bulk-excel`, formData, {
      headers
    });
  }

  // Get import progress
  getImportProgress(jobId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/import-progress/${jobId}`, this.getAuthHeaders());
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
    return this.http.post(`${this.baseUrl}/assets/import-bulk-json`, data, this.getAuthHeaders());
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
  getActivityHistory(assetId: number | string, params: any = {}): Observable<any> {
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
    
    return this.http.get(`${this.baseUrl}/assets/${assetId}/activity-history${queryParams}`, this.getAuthHeaders());
  }

  // Location list
  getLocations(page: number = 1, perPage: number = 1000, sortBy: string = 'created', sortDirection: string = 'desc'): Observable<any> {
    const params = `?page=${page}&per_page=${perPage}&sort_by=${sortBy}&sort_direction=${sortDirection}`;
    return this.http.get(`${this.baseUrl}/locations${params}`, this.getAuthHeaders());
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
  getDepartments(page: number = 1, perPage: number = 1000, sortBy: string = 'created', sortDirection: string = 'desc'): Observable<any> {
    const params = `?page=${page}&per_page=${perPage}&sort_by=${sortBy}&sort_direction=${sortDirection}`;
    return this.http.get(`${this.baseUrl}/departments-list${params}`, this.getAuthHeaders());
  }

  // Fetch possible parent assets
  getPossibleParents(assetId?: number | string): Observable<any> {
    let url = `${this.baseUrl}/assets/possible-parents`;
    if (assetId) {
      url += `/${assetId}`;
    }
    return this.http.get(url, this.getAuthHeaders());
  }

  // Public methods (no authentication required)
  getAssetPublic(id: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets/${id}/public`);
  }

  getActivityHistoryPublic(assetId: number | string, params: any = {}): Observable<any> {
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
    return this.http.get(`${this.baseUrl}/assets/${assetId}/activity-history/public${queryParams}`);
  }

  // Get related assets
  getRelatedAssets(assetId: number | string, params: any = {}): Observable<any> {
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
    
    return this.http.get(`${this.baseUrl}/assets/${assetId}/related${queryParams}`, this.getAuthHeaders());
  }

  // Get asset depreciation chart data
  getAssetDepreciationChart(assetId: number | string, params: any = {}): Observable<any> {
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
    
    return this.http.get(`${this.baseUrl}/assets/${assetId}/chart-data${queryParams}`, this.getAuthHeaders());
  }

  // Get asset health & performance chart data
  getAssetHealthPerformanceChart(assetId: number | string, params: any = {}): Observable<any> {
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
    
    return this.http.get(`${this.baseUrl}/assets/${assetId}/health-performance-chart${queryParams}`, this.getAuthHeaders());
  }

  // Asset Parts Management
  getAssetParts(assetId: number): Observable<AssetPartItem[]> {
    return this.http
      .get<ApiResponse<AssetPartItem[]>>(`${this.baseUrl}/assets/${assetId}/parts`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  addAssetParts(assetId: number, items: Array<{ part_id: number; qty: number }>): Observable<AssetPartItem[]> {
    return this.http
      .post<ApiResponse<AssetPartItem[]>>(`${this.baseUrl}/assets/${assetId}/parts`, { items }, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  updateAssetPart(assetId: number, partId: number, qty: number): Observable<AssetPartItem> {
    return this.http
      .put<ApiResponse<AssetPartItem>>(`${this.baseUrl}/assets/${assetId}/parts/${partId}`, { qty }, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  removeAssetPart(assetId: number, partId: number): Observable<void> {
    return this.http
      .delete<ApiResponse<void>>(`${this.baseUrl}/assets/${assetId}/parts/${partId}`, this.getAuthHeaders())
      .pipe(map(() => undefined));
  }

  // Asset Documents Management
  getAssetDocuments(assetId: number): Observable<AssetDocument[]> {
    return this.http
      .get<ApiResponse<AssetDocument[]>>(`${this.baseUrl}/assets/${assetId}/documents`, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  uploadAssetDocument(assetId: number, file: File, documentName: string, documentType: 'manual' | 'certificate' | 'warranty' | 'other'): Observable<AssetDocument> {
    const formData = new FormData();
    formData.append('document', file);
    formData.append('document_name', documentName);
    formData.append('document_type', documentType);

    const token = this.authService.getToken();
    return this.http
      .post<ApiResponse<AssetDocument>>(`${this.baseUrl}/assets/${assetId}/documents`, formData, {
        headers: {
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        }
      })
      .pipe(map((res) => res.data));
  }

  updateAssetDocument(assetId: number, documentId: number, data: { document_name?: string; document_type?: 'manual' | 'certificate' | 'warranty' | 'other' }): Observable<AssetDocument> {
    return this.http
      .put<ApiResponse<AssetDocument>>(`${this.baseUrl}/assets/${assetId}/documents/${documentId}`, data, this.getAuthHeaders())
      .pipe(map((res) => res.data));
  }

  deleteAssetDocument(assetId: number, documentId: number): Observable<void> {
    return this.http
      .delete<ApiResponse<void>>(`${this.baseUrl}/assets/${assetId}/documents/${documentId}`, this.getAuthHeaders())
      .pipe(map(() => undefined));
  }
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
