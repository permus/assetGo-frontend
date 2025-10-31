import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { 
  Recommendation, 
  RecSummary, 
  RecFilters, 
  RecResponse, 
  RecGenerateResponse, 
  RecToggleResponse 
} from './ai-recommendations.interface';

@Injectable({
  providedIn: 'root'
})
export class AIRecommendationsService {
  private apiUrl = `${environment.apiUrl}/ai/recommendations`;

  constructor(private http: HttpClient) { }

  /**
   * Get recommendations with filters and pagination
   */
  getRecommendations(filters: RecFilters = {}, page: number = 1, pageSize: number = 10): Observable<RecResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    // Add filters to params
    if (filters.type) params = params.set('type', filters.type);
    if (filters.priority) params = params.set('priority', filters.priority);
    if (filters.impact) params = params.set('impact', filters.impact);
    if (filters.search) params = params.set('search', filters.search);
    if (filters.minConfidence !== undefined) params = params.set('minConfidence', filters.minConfidence.toString());

    return this.http.get<RecResponse>(`${this.apiUrl}`, { params });
  }

  /**
   * Generate new recommendations
   */
  generateRecommendations(): Observable<RecGenerateResponse> {
    return this.http.post<RecGenerateResponse>(`${this.apiUrl}/generate`, {});
  }

  /**
   * Toggle implementation status
   */
  toggleImplementation(id: string, implemented: boolean): Observable<RecToggleResponse> {
    return this.http.post<RecToggleResponse>(`${this.apiUrl}/${id}/toggle`, { implemented });
  }

  /**
   * Export recommendations to CSV
   */
  exportRecommendations(filters: RecFilters = {}): Observable<Blob> {
    let params = new HttpParams();

    // Add filters to params
    if (filters.type) params = params.set('type', filters.type);
    if (filters.priority) params = params.set('priority', filters.priority);
    if (filters.impact) params = params.set('impact', filters.impact);
    if (filters.search) params = params.set('search', filters.search);
    if (filters.minConfidence !== undefined) params = params.set('minConfidence', filters.minConfidence.toString());

    return this.http.get(`${this.apiUrl}/export`, { 
      params, 
      responseType: 'blob' 
    });
  }

  /**
   * Get summary statistics
   */
  getSummary(): Observable<{ success: boolean; data?: RecSummary; error?: string }> {
    return this.http.get<{ success: boolean; data?: RecSummary; error?: string }>(`${this.apiUrl}/summary`);
  }

  /**
   * Download CSV file
   */
  downloadCsv(blob: Blob, filename: string): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  /**
   * Compute ROI and net benefit
   */
  computeROI(estimatedSavings?: number, implementationCost?: number): { net: number | null; roi: number | null } {
    if (!estimatedSavings || !implementationCost || implementationCost <= 0) {
      return { net: null, roi: null };
    }
    
    const net = estimatedSavings - implementationCost;
    const roi = (net / implementationCost) * 100;
    return { net, roi };
  }

  /**
   * Compute payback period
   */
  computePaybackPeriod(estimatedSavings?: number, implementationCost?: number): string | null {
    if (!estimatedSavings || !implementationCost || estimatedSavings <= 0) {
      return null;
    }
    
    const months = Math.max(1, Math.round((implementationCost / (estimatedSavings / 12))));
    return `${months} months`;
  }

  /**
   * Get type display name
   */
  getTypeDisplayName(type: string): string {
    const typeMap: { [key: string]: string } = {
      'cost_optimization': 'Cost Optimization',
      'maintenance': 'Maintenance',
      'efficiency': 'Efficiency',
      'compliance': 'Compliance'
    };
    return typeMap[type] || type;
  }

  /**
   * Get type icon
   */
  getTypeIcon(type: string): string {
    const iconMap: { [key: string]: string } = {
      'cost_optimization': 'dollar-sign',
      'maintenance': 'wrench',
      'efficiency': 'trending-up',
      'compliance': 'shield-check'
    };
    return iconMap[type] || 'help-circle';
  }

  /**
   * Get priority color class
   */
  getPriorityColorClass(priority: string): string {
    const colorMap: { [key: string]: string } = {
      'low': 'priority-low',
      'medium': 'priority-medium',
      'high': 'priority-high'
    };
    return colorMap[priority] || 'priority-medium';
  }

  /**
   * Get impact color class
   */
  getImpactColorClass(impact: string): string {
    const colorMap: { [key: string]: string } = {
      'low': 'impact-low',
      'medium': 'impact-medium',
      'high': 'impact-high'
    };
    return colorMap[impact] || 'impact-medium';
  }
}
