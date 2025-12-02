export type AppliesTo = 'work_orders' | 'maintenance' | 'both';
export type PriorityLevel = 'low' | 'medium' | 'high' | 'critical' | 'ppm';

export interface SlaDefinition {
  id?: number;
  companyId?: number;
  name: string;
  description?: string | null;
  appliesTo: AppliesTo;
  priorityLevel?: PriorityLevel | null;
  categoryId?: number | null;
  category?: {
    id: number;
    name: string;
    slug: string;
  } | null;
  responseTimeHours: number;
  containmentTimeHours?: number | null;
  completionTimeHours: number;
  isActive: boolean;
  createdBy?: number;
  creator?: {
    id: number;
    name: string;
    email: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface SlaDefinitionResponse {
  success: boolean;
  data: {
    definitions: SlaDefinition[];
  };
  pagination?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
  };
}

export interface SlaDefinitionSingleResponse {
  success: boolean;
  data: SlaDefinition;
}

