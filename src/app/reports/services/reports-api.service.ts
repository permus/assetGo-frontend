import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  BaseResponse,
  AssetSummaryResponse,
  AssetUtilizationRow,
  AssetDepreciationRow,
  AssetWarrantyRow,
  AssetComplianceRow,
  MaintenanceSummaryResponse,
  MaintenanceComplianceRow,
  MaintenanceCostRow,
  DowntimeRow,
  FailureAnalysisRow,
  TechnicianPerformanceRow,
  ExportRequest,
  ExportResponse,
  ExportStatusResponse,
  ReportRunStatus,
  ExportHistoryResponse,
  ReportDefinition,
  ReportConfig,
  LocationOption,
  AssetOption,
  UserOption,
  StatusOption,
  PriorityOption,
  CategoryOption
} from '../models/reports.models';

@Injectable({
  providedIn: 'root'
})
export class ReportsApiService {
  private apiUrl = `${environment.apiUrl}/reports`;

  constructor(private http: HttpClient) { }

  // Asset Reports
  getAssetSummary(config: ReportConfig): Observable<AssetSummaryResponse> {
    const params = this.buildParams(config);
    console.log('Making API request to:', `${this.apiUrl}/assets/summary`);
    console.log('With params:', params);
    console.log('Auth token:', localStorage.getItem('token'));
    return this.http.get<AssetSummaryResponse>(`${this.apiUrl}/assets/summary`, { params });
  }

  getAssetUtilization(config: ReportConfig): Observable<{assets: AssetUtilizationRow[], pagination: any}> {
    const params = this.buildParams(config);
    return this.http.get<{assets: AssetUtilizationRow[], pagination: any}>(`${this.apiUrl}/assets/utilization`, { params });
  }

  getAssetDepreciation(config: ReportConfig): Observable<{assets: AssetDepreciationRow[], totals: any, pagination: any}> {
    const params = this.buildParams(config);
    return this.http.get<{assets: AssetDepreciationRow[], totals: any, pagination: any}>(`${this.apiUrl}/assets/depreciation`, { params });
  }

  getAssetWarranty(config: ReportConfig): Observable<{assets: AssetWarrantyRow[], summary: any, pagination: any}> {
    const params = this.buildParams(config);
    return this.http.get<{assets: AssetWarrantyRow[], summary: any, pagination: any}>(`${this.apiUrl}/assets/warranty`, { params });
  }

  getAssetCompliance(config: ReportConfig): Observable<{assets: AssetComplianceRow[], pagination: any}> {
    const params = this.buildParams(config);
    return this.http.get<{assets: AssetComplianceRow[], pagination: any}>(`${this.apiUrl}/assets/compliance`, { params });
  }

  getAvailableAssetReports(): Observable<Record<string, ReportDefinition>> {
    return this.http.get<Record<string, ReportDefinition>>(`${this.apiUrl}/assets/available`);
  }

  // Maintenance Reports
  getMaintenanceSummary(config: ReportConfig): Observable<MaintenanceSummaryResponse> {
    const params = this.buildParams(config);
    return this.http.get<MaintenanceSummaryResponse>(`${this.apiUrl}/maintenance/summary`, { params });
  }

  getMaintenanceCompliance(config: ReportConfig): Observable<{work_orders: MaintenanceComplianceRow[], pagination: any}> {
    const params = this.buildParams(config);
    return this.http.get<{work_orders: MaintenanceComplianceRow[], pagination: any}>(`${this.apiUrl}/maintenance/compliance`, { params });
  }

  getMaintenanceCosts(config: ReportConfig): Observable<{work_orders: MaintenanceCostRow[], cost_trends: any[], pagination: any}> {
    const params = this.buildParams(config);
    return this.http.get<{work_orders: MaintenanceCostRow[], cost_trends: any[], pagination: any}>(`${this.apiUrl}/maintenance/costs`, { params });
  }

  getMaintenanceDowntime(config: ReportConfig): Observable<{work_orders: DowntimeRow[], pagination: any}> {
    const params = this.buildParams(config);
    return this.http.get<{work_orders: DowntimeRow[], pagination: any}>(`${this.apiUrl}/maintenance/downtime`, { params });
  }

  getMaintenanceFailureAnalysis(config: ReportConfig): Observable<{work_orders: FailureAnalysisRow[], pagination: any}> {
    const params = this.buildParams(config);
    return this.http.get<{work_orders: FailureAnalysisRow[], pagination: any}>(`${this.apiUrl}/maintenance/failure-analysis`, { params });
  }

  getMaintenanceTechnicianPerformance(config: ReportConfig): Observable<{technicians: TechnicianPerformanceRow[]}> {
    const params = this.buildParams(config);
    return this.http.get<{technicians: TechnicianPerformanceRow[]}>(`${this.apiUrl}/maintenance/technician-performance`, { params });
  }

  getAvailableMaintenanceReports(): Observable<Record<string, ReportDefinition>> {
    return this.http.get<Record<string, ReportDefinition>>(`${this.apiUrl}/maintenance/available`);
  }

  // Export Functions
  exportReport(request: ExportRequest): Observable<ExportResponse> {
    return this.http.post<ExportResponse>(`${this.apiUrl}/export`, request);
  }

  getExportStatus(runId: number): Observable<ExportStatusResponse> {
    return this.http.get<ExportStatusResponse>(`${this.apiUrl}/runs/${runId}`);
  }

  downloadExport(runId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/runs/${runId}/download`, { responseType: 'blob' });
  }

  getExportHistory(page: number = 1, pageSize: number = 20, filters?: any): Observable<ExportHistoryResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('page_size', pageSize.toString());

    if (filters) {
      if (filters.status) params = params.set('status', filters.status);
      if (filters.format) params = params.set('format', filters.format);
      if (filters.report_key) params = params.set('report_key', filters.report_key);
    }

    return this.http.get<ExportHistoryResponse>(`${this.apiUrl}/history`, { params });
  }

  cancelExport(runId: number): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(`${this.apiUrl}/runs/${runId}/cancel`);
  }

  // Filter Options
  getLocations(): Observable<LocationOption[]> {
    return this.http.get<LocationOption[]>(`${environment.apiUrl}/locations`);
  }

  getAssets(): Observable<AssetOption[]> {
    return this.http.get<AssetOption[]>(`${environment.apiUrl}/assets`);
  }

  getUsers(): Observable<UserOption[]> {
    return this.http.get<UserOption[]>(`${environment.apiUrl}/users`);
  }

  getWorkOrderStatuses(): Observable<StatusOption[]> {
    return this.http.get<StatusOption[]>(`${environment.apiUrl}/work-order-statuses`);
  }

  getWorkOrderPriorities(): Observable<PriorityOption[]> {
    return this.http.get<PriorityOption[]>(`${environment.apiUrl}/work-order-priorities`);
  }

  getWorkOrderCategories(): Observable<CategoryOption[]> {
    return this.http.get<CategoryOption[]>(`${environment.apiUrl}/work-order-categories`);
  }

  getAssetCategories(): Observable<CategoryOption[]> {
    return this.http.get<CategoryOption[]>(`${environment.apiUrl}/asset-categories`);
  }

  getAssetStatuses(): Observable<StatusOption[]> {
    return this.http.get<StatusOption[]>(`${environment.apiUrl}/asset-statuses`);
  }

  // Helper Methods
  private buildParams(config: ReportConfig): HttpParams {
    let params = new HttpParams()
      .set('page', config.page.toString())
      .set('page_size', config.pageSize.toString());

    if (config.dateRange.start) {
      params = params.set('date_from', config.dateRange.start);
    }
    if (config.dateRange.end) {
      params = params.set('date_to', config.dateRange.end);
    }
    if (config.locationIds.length > 0) {
      config.locationIds.forEach(id => {
        params = params.append('location_ids[]', id.toString());
      });
    }
    if (config.assetIds.length > 0) {
      config.assetIds.forEach(id => {
        params = params.append('asset_ids[]', id.toString());
      });
    }
    if (config.userIds.length > 0) {
      config.userIds.forEach(id => {
        params = params.append('assigned_to[]', id.toString());
      });
    }
    if (config.statusIds.length > 0) {
      config.statusIds.forEach(id => {
        params = params.append('status_id[]', id.toString());
      });
    }
    if (config.priorityIds.length > 0) {
      config.priorityIds.forEach(id => {
        params = params.append('priority_id[]', id.toString());
      });
    }
    if (config.categoryIds.length > 0) {
      config.categoryIds.forEach(id => {
        params = params.append('category_id[]', id.toString());
      });
    }
    if (config.search) {
      params = params.set('search', config.search);
    }
    if (config.sortBy) {
      params = params.set('sort_by', config.sortBy);
    }
    if (config.sortDirection) {
      params = params.set('sort_dir', config.sortDirection);
    }

    return params;
  }

  // Utility Methods
  formatCurrency(value: number, currency: string = 'AED'): string {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: currency
    }).format(value);
  }

  formatPercentage(value: number, decimals: number = 2): string {
    return `${value.toFixed(decimals)}%`;
  }

  formatNumber(value: number, decimals: number = 0): string {
    return new Intl.NumberFormat('en-AE').format(value);
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-AE');
  }

  formatDateTime(date: string): string {
    return new Date(date).toLocaleString('en-AE');
  }

  getStatusColor(status: string): string {
    const statusColors: Record<string, string> = {
      'active': 'text-green-600 bg-green-100',
      'inactive': 'text-gray-600 bg-gray-100',
      'maintenance': 'text-yellow-600 bg-yellow-100',
      'completed': 'text-green-600 bg-green-100',
      'in_progress': 'text-blue-600 bg-blue-100',
      'pending': 'text-yellow-600 bg-yellow-100',
      'cancelled': 'text-red-600 bg-red-100',
      'high': 'text-red-600 bg-red-100',
      'medium': 'text-yellow-600 bg-yellow-100',
      'low': 'text-green-600 bg-green-100',
      'success': 'text-green-600 bg-green-100',
      'failed': 'text-red-600 bg-red-100',
      'queued': 'text-yellow-600 bg-yellow-100',
      'running': 'text-blue-600 bg-blue-100'
    };
    return statusColors[status] || 'text-gray-600 bg-gray-100';
  }

  getPriorityColor(priority: string): string {
    const priorityColors: Record<string, string> = {
      'critical': 'text-red-600 bg-red-100',
      'high': 'text-orange-600 bg-orange-100',
      'medium': 'text-yellow-600 bg-yellow-100',
      'low': 'text-green-600 bg-green-100'
    };
    return priorityColors[priority] || 'text-gray-600 bg-gray-100';
  }
}
