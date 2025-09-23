export type Level = 'low' | 'medium' | 'high';

export interface RiskAsset {
  id: string;
  name: string;
  riskLevel: 'high' | 'medium' | 'low';
  reason: string;
  confidence: number;
  recommendedAction: string;
  estimatedCost?: number;
  preventiveCost?: number;
}

export interface PerformanceInsight {
  title: string;
  description: string;
  impact: Level;
  action: string;
  confidence: number;
  category?: 'utilization' | 'efficiency' | 'maintenance' | 'cost';
}

export interface CostOptimization {
  title: string;
  description: string;
  estimatedSavings: number;
  paybackPeriod: string;
  confidence: number;
  category?: 'energy' | 'maintenance' | 'vendor' | 'lifecycle';
}

export interface AnalyticsData {
  healthScore: number; // 0-100
  riskAssets: RiskAsset[];
  performanceInsights: PerformanceInsight[];
  costOptimizations: CostOptimization[];
  // optional trends
  trends?: Array<{ date: string; healthScore?: number; maintenanceCost?: number }>;
}

export interface AnalyticsSnapshot extends AnalyticsData {
  id: string;           // run id
  companyId: string;
  createdAt: string;    // ISO
}

export interface ScheduleSettings {
  enabled: boolean;
  frequency: 'daily' | 'weekly' | 'monthly';
  hourUTC?: number; // 0-23
}

export interface AnalyticsResponse {
  success: boolean;
  data?: {
    latest: AnalyticsSnapshot;
    history: Array<{ createdAt: string; healthScore: number }>;
  };
  error?: string;
}

export interface AnalyticsGenerateResponse {
  success: boolean;
  data?: {
    latest: AnalyticsSnapshot;
    history: Array<{ createdAt: string; healthScore: number }>;
  };
  error?: string;
}

export interface ScheduleResponse {
  success: boolean;
  data?: ScheduleSettings;
  error?: string;
}

export interface AnalyticsFilters {
  riskLevel?: 'high' | 'medium' | 'low';
  impact?: Level;
  minConfidence?: number;
  search?: string;
  category?: string;
}
