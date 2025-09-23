import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { 
  AnalyticsResponse, 
  AnalyticsGenerateResponse, 
  ScheduleResponse, 
  AnalyticsSnapshot,
  ScheduleSettings,
  AnalyticsFilters
} from './ai-analytics.interface';

@Injectable({
  providedIn: 'root'
})
export class AIAnalyticsService {
  private apiUrl = `${environment.apiUrl}/ai/analytics`;

  constructor(private http: HttpClient) { }

  /**
   * Get latest analytics and history
   */
  getAnalytics(): Observable<AnalyticsResponse> {
    return this.http.get<AnalyticsResponse>(`${this.apiUrl}/`);
  }

  /**
   * Generate new analytics
   */
  generateAnalytics(): Observable<AnalyticsGenerateResponse> {
    return this.http.post<AnalyticsGenerateResponse>(`${this.apiUrl}/generate`, {});
  }

  /**
   * Export analytics to CSV
   */
  exportAnalytics(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export`, { 
      responseType: 'blob' 
    });
  }

  /**
   * Get schedule settings
   */
  getScheduleSettings(): Observable<ScheduleResponse> {
    return this.http.get<ScheduleResponse>(`${this.apiUrl}/schedule`);
  }

  /**
   * Update schedule settings
   */
  updateScheduleSettings(settings: ScheduleSettings): Observable<ScheduleResponse> {
    return this.http.post<ScheduleResponse>(`${this.apiUrl}/schedule`, settings);
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
   * Get health score label
   */
  getHealthScoreLabel(score: number): string {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Fair';
    if (score >= 60) return 'Poor';
    return 'Critical';
  }

  /**
   * Get health score color class
   */
  getHealthScoreColorClass(score: number): string {
    if (score >= 90) return 'health-excellent';
    if (score >= 80) return 'health-good';
    if (score >= 70) return 'health-fair';
    if (score >= 60) return 'health-poor';
    return 'health-critical';
  }

  /**
   * Get risk level color class
   */
  getRiskLevelColorClass(riskLevel: string): string {
    const colorMap: { [key: string]: string } = {
      'high': 'risk-high',
      'medium': 'risk-medium',
      'low': 'risk-low'
    };
    return colorMap[riskLevel] || 'risk-medium';
  }

  /**
   * Get impact color class
   */
  getImpactColorClass(impact: string): string {
    const colorMap: { [key: string]: string } = {
      'high': 'impact-high',
      'medium': 'impact-medium',
      'low': 'impact-low'
    };
    return colorMap[impact] || 'impact-medium';
  }

  /**
   * Get category icon
   */
  getCategoryIcon(category: string): string {
    const iconMap: { [key: string]: string } = {
      'utilization': 'activity',
      'efficiency': 'trending-up',
      'maintenance': 'wrench',
      'cost': 'dollar-sign',
      'energy': 'zap',
      'vendor': 'truck',
      'lifecycle': 'refresh-cw'
    };
    return iconMap[category] || 'help-circle';
  }

  /**
   * Get frequency display name
   */
  getFrequencyDisplayName(frequency: string): string {
    const nameMap: { [key: string]: string } = {
      'daily': 'Daily',
      'weekly': 'Weekly',
      'monthly': 'Monthly'
    };
    return nameMap[frequency] || 'Weekly';
  }

  /**
   * Filter analytics data
   */
  filterAnalyticsData(data: any, filters: AnalyticsFilters): any {
    if (!data) return data;

    let filteredData = { ...data };

    // Filter risk assets
    if (data.riskAssets) {
      filteredData.riskAssets = data.riskAssets.filter((asset: any) => {
        if (filters.riskLevel && asset.riskLevel !== filters.riskLevel) return false;
        if (filters.minConfidence && asset.confidence < filters.minConfidence) return false;
        if (filters.search && !asset.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
        return true;
      });
    }

    // Filter performance insights
    if (data.performanceInsights) {
      filteredData.performanceInsights = data.performanceInsights.filter((insight: any) => {
        if (filters.impact && insight.impact !== filters.impact) return false;
        if (filters.minConfidence && insight.confidence < filters.minConfidence) return false;
        if (filters.category && insight.category !== filters.category) return false;
        if (filters.search && !insight.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
        return true;
      });
    }

    // Filter cost optimizations
    if (data.costOptimizations) {
      filteredData.costOptimizations = data.costOptimizations.filter((optimization: any) => {
        if (filters.minConfidence && optimization.confidence < filters.minConfidence) return false;
        if (filters.category && optimization.category !== filters.category) return false;
        if (filters.search && !optimization.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
        return true;
      });
    }

    return filteredData;
  }
}