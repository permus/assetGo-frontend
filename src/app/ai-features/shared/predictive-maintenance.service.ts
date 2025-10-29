import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { 
  Prediction, 
  Summary, 
  PredictiveMaintenanceResponse, 
  GeneratePredictionsRequest, 
  GeneratePredictionsResponse,
  ExportRequest,
  ExportResponse
} from './predictive-maintenance.interface';

@Injectable({
  providedIn: 'root'
})
export class PredictiveMaintenanceService {
  private baseUrl = `${environment.apiUrl}/ai/predictive-maintenance`;

  constructor(private http: HttpClient) {}

  /**
   * Get predictions with optional filtering.
   */
  getPredictions(filters?: {
    riskLevel?: string;
    minConfidence?: number;
    dateFrom?: string;
    dateTo?: string;
  }): Observable<PredictiveMaintenanceResponse> {
    let params = new HttpParams();
    
    if (filters) {
      if (filters.riskLevel) params = params.set('risk_level', filters.riskLevel);
      if (filters.minConfidence) params = params.set('min_confidence', filters.minConfidence.toString());
      if (filters.dateFrom) params = params.set('date_from', filters.dateFrom);
      if (filters.dateTo) params = params.set('date_to', filters.dateTo);
    }

    return this.http.get<PredictiveMaintenanceResponse>(this.baseUrl, { params });
  }

  /**
   * Generate new predictions using AI.
   */
  generatePredictions(request: GeneratePredictionsRequest): Observable<GeneratePredictionsResponse> {
    return this.http.post<GeneratePredictionsResponse>(`${this.baseUrl}/generate`, request);
  }

  /**
   * Export predictions to CSV.
   */
  exportToCsv(filters?: {
    riskLevel?: string;
    minConfidence?: number;
    dateFrom?: string;
    dateTo?: string;
  }): Observable<Blob> {
    let params = new HttpParams().set('format', 'csv');
    
    if (filters) {
      if (filters.riskLevel) params = params.set('filters[risk_level]', filters.riskLevel);
      if (filters.minConfidence) params = params.set('filters[min_confidence]', filters.minConfidence.toString());
      if (filters.dateFrom) params = params.set('filters[date_from]', filters.dateFrom);
      if (filters.dateTo) params = params.set('filters[date_to]', filters.dateTo);
    }

    return this.http.get(`${this.baseUrl}/export`, { 
      params, 
      responseType: 'blob' 
    });
  }

  /**
   * Get summary statistics.
   */
  getSummary(): Observable<{ success: boolean; data: Summary }> {
    return this.http.get<{ success: boolean; data: Summary }>(`${this.baseUrl}/summary`);
  }

  /**
   * Clear all predictions.
   */
  clearPredictions(): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.baseUrl}/clear`);
  }

  /**
   * Get job status for async generation.
   */
  getJobStatus(jobId: string): Observable<{
    success: boolean;
    data: {
      job_id: string;
      status: 'queued' | 'processing' | 'completed' | 'failed';
      progress: number;
      total_assets: number;
      predictions_generated: number;
      error: string | null;
      completed_at: string | null;
    }
  }> {
    return this.http.get<{
      success: boolean;
      data: {
        job_id: string;
        status: 'queued' | 'processing' | 'completed' | 'failed';
        progress: number;
        total_assets: number;
        predictions_generated: number;
        error: string | null;
        completed_at: string | null;
      }
    }>(`${this.baseUrl}/job-status/${jobId}`);
  }

  /**
   * Download CSV file.
   */
  downloadCsv(blob: Blob, filename: string = 'predictive_maintenance.csv'): void {
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
   * Format currency for display.
   */
  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  /**
   * Format date for display.
   */
  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  /**
   * Get risk level color class.
   */
  getRiskLevelClass(riskLevel: string): string {
    switch (riskLevel.toLowerCase()) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'medium':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'low':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  }

  /**
   * Get confidence level class.
   */
  getConfidenceClass(confidence: number): string {
    if (confidence >= 80) return 'text-green-600';
    if (confidence >= 60) return 'text-amber-600';
    return 'text-red-600';
  }

  /**
   * Calculate ROI percentage.
   */
  calculateROI(estimatedCost: number, preventiveCost: number): number {
    if (preventiveCost <= 0) return 0;
    return Math.round((estimatedCost - preventiveCost) / preventiveCost * 100);
  }
}
