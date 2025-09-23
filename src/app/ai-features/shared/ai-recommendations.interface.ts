export type RecType = 'cost_optimization' | 'maintenance' | 'efficiency' | 'compliance';
export type Level = 'low' | 'medium' | 'high';

export interface Recommendation {
  id: string;
  type: RecType;
  title: string;
  description: string;
  impact: Level;
  priority: Level;
  estimatedSavings?: number;
  implementationCost?: number;
  timeline: string;
  actions: string[];
  confidence: number;
  roi?: number;
  paybackPeriod?: string;
  implemented?: boolean;
  createdAt?: string;
}

export interface RecSummary {
  totalRecommendations: number;
  highPriorityCount: number;
  totalSavings: number;
  totalCost: number;
  roi: number;
  lastUpdated: string | null;
}

export interface RecFilters {
  type?: RecType;
  priority?: Level;
  impact?: Level;
  minConfidence?: number;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface RecResponse {
  success: boolean;
  data?: {
    recommendations: Recommendation[];
    summary: RecSummary;
    pagination?: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  };
  error?: string;
}

export interface RecGenerateResponse {
  success: boolean;
  data?: {
    recommendations: Recommendation[];
    summary: RecSummary;
  };
  error?: string;
}

export interface RecToggleResponse {
  success: boolean;
  data?: Recommendation;
  error?: string;
}
