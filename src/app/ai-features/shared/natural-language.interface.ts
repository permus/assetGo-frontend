export type ChatRole = 'system' | 'user' | 'assistant';

export interface ChatMessage {
  type: 'user' | 'assistant';
  content: string;
  timestamp: string; // ISO
}

export interface AssetContext {
  totalAssets: number;
  activeAssets: number;
  maintenanceAssets: number;
  totalValue?: number;
  openWorkOrders: number;
  highPriorityWorkOrders: number;
  overdueWorkOrders: number;
  overdueMaintenance: number;
  totalLocations: number;
  lowStockItems?: number;
  recentAssets?: Array<{ id: string; name: string; status?: string }>;
  recentWorkOrders?: Array<{ id: string; title: string; status: string }>;
}

export interface NLQState {
  query: string;
  messages: ChatMessage[];
  isProcessing: boolean;
  assetContext: AssetContext | null;
  needsApiKey: boolean;
  hasContext: boolean;
}

export interface ChatRequest {
  messages: Array<{ role: ChatRole; content: string }>;
  assetContext: AssetContext;
  companyContext?: { name?: string };
}

export interface ChatResponse {
  success: boolean;
  reply?: string;
  error?: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface ContextResponse {
  success: boolean;
  data?: AssetContext;
  error?: string;
}

export type Category = 'Maintenance' | 'Financial' | 'Analytics' | 'Search' | 'Operations';

export interface ExampleQuery {
  id: string;
  category: Category;
  title: string;
  description: string;
  query: string;
  icon: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}
