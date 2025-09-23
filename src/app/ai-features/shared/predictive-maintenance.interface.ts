export type RiskLevel = 'high' | 'medium' | 'low';

export interface Prediction {
  id?: string;
  assetId: string;
  assetName: string;
  riskLevel: RiskLevel;
  predictedFailureDate: string; // ISO date
  confidence: number;           // 0-100
  recommendedAction: string;
  estimatedCost: number;        // failure cost
  preventiveCost: number;       // preventive cost
  savings: number;              // estimated - preventive
  factors?: string[];
  timeline?: {
    immediate?: string[];
    shortTerm?: string[];
    longTerm?: string[];
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface Summary {
  totalAssets: number;
  highRiskCount: number;
  totalSavings: number;
  averageConfidence: number;
  lastUpdated: string | null; // ISO
}

export interface PredictiveMaintenanceResponse {
  success: boolean;
  data?: {
    predictions: Prediction[];
    summary: Summary;
  };
  message?: string;
}

export interface GeneratePredictionsRequest {
  assetIds?: string[];
  forceRefresh?: boolean;
}

export interface GeneratePredictionsResponse {
  success: boolean;
  data?: {
    predictions: Prediction[];
    summary: Summary;
    generatedAt: string;
  };
  message?: string;
}

export interface ExportRequest {
  format: 'csv' | 'excel';
  filters?: {
    riskLevel?: RiskLevel;
    minConfidence?: number;
    dateFrom?: string;
    dateTo?: string;
  };
}

export interface ExportResponse {
  success: boolean;
  data?: {
    downloadUrl: string;
    filename: string;
  };
  message?: string;
}
