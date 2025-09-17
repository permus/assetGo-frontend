import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface RiskAsset {
  name: string;
  riskLevel: 'high' | 'medium' | 'low';
  reason: string;
  confidence: number;
}

export interface PerformanceInsight {
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  action: string;
}

export interface CostOptimization {
  title: string;
  description: string;
  estimatedSavings: number;
  paybackPeriod: string;
  confidence: number;
}

export interface AnalyticsResult {
  healthScore: number;
  riskAssets: RiskAsset[];
  insights: PerformanceInsight[];
  optimizations: CostOptimization[];
}

export interface AssetContext {
  id: number;
  name: string;
  type: string;
  manufacturer?: string;
  model?: string;
  age: number;
  condition: string;
  lastMaintenance?: string;
  nextMaintenance?: string;
  value: number;
  location?: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class AIAnalyticsService {
  private apiUrl = `${environment.apiUrl}/ai/asset-analytics`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token') ?? ''}`,
        'Content-Type': 'application/json'
      })
    };
  }

  analyzeAssets(assetContext: AssetContext[], assetImages: string[] = []): Observable<{success: boolean; data: AnalyticsResult; message?: string}> {
    return this.http.post<{success: boolean; data: AnalyticsResult; message?: string}>(
      `${this.apiUrl}/analyze`,
      { 
        assetContext, 
        assetImages 
      },
      this.getAuthHeaders()
    );
  }
}
