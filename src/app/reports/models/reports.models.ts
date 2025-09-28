// Report Types and Enums
export type ReportCategory = 'assets' | 'maintenance' | 'inventory' | 'financial' | 'custom';
export type ExportFormat = 'pdf' | 'xlsx' | 'csv' | 'json';
export type ReportStatus = 'queued' | 'running' | 'success' | 'failed' | 'cancelled';
export type ReportPeriod = 'today' | 'yesterday' | 'this_week' | 'last_week' | 'this_month' | 'last_month' | 'this_quarter' | 'last_quarter' | 'this_year' | 'last_year' | 'ytd' | 'custom';

// Base Response Interface
export interface BaseResponse {
  success: boolean;
  data?: any;
  error?: string;
  meta?: {
    generated_at: string;
    company_id: number;
  };
}

// Pagination Interface
export interface PaginationMeta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  from: number;
  to: number;
  has_more_pages: boolean;
}

// Report Filter Interface
export interface ReportFilter {
  key: string;
  label: string;
  type: 'date' | 'select' | 'multiselect' | 'text' | 'number';
  options?: Array<{value: string, label: string}>;
  required?: boolean;
  defaultValue?: any;
}

// Date Range Interface
export interface DateRange {
  start: string | null;
  end: string | null;
}

// Report Definition Interface
export interface ReportDefinition {
  key: string;
  name: string;
  description: string;
  category: ReportCategory;
  filters: ReportFilter[];
  defaultColumns: string[];
  availableColumns: string[];
  kpis?: Array<{
    key: string;
    label: string;
    calculation: string;
    format: 'number' | 'currency' | 'percentage' | 'text';
  }>;
}

// Asset Report Interfaces
export interface AssetSummaryRow {
  id: number;
  name: string;
  status: string;
  location: string;
  category: string;
  purchase_price: number;
  purchase_date: string;
  book_value?: number;
}

export interface AssetSummaryResponse {
  assets: AssetSummaryRow[];
  totals: {
    total_count: number;
    total_value: number;
    average_value: number;
    active_count: number;
    maintenance_count: number;
    inactive_count: number;
  };
  status_distribution: Record<string, number>;
  category_distribution: Record<string, number>;
  pagination: PaginationMeta;
}

export interface AssetUtilizationRow {
  id: number;
  name: string;
  location: string;
  category: string;
  utilization_rate: number;
  hours_used: number;
  hours_available: number;
  status: string;
}

export interface AssetDepreciationRow {
  id: number;
  name: string;
  purchase_price: number;
  purchase_date: string;
  depreciation_life: number;
  monthly_depreciation: number;
  accumulated_depreciation: number;
  book_value: number;
  months_elapsed: number;
  location: string;
}

export interface AssetWarrantyRow {
  id: number;
  name: string;
  warranty_end_date: string;
  days_to_expire: number;
  status: 'active' | 'expiring_soon' | 'expired';
  location: string;
  category: string;
}

export interface AssetComplianceRow {
  id: number;
  name: string;
  compliance_status: string;
  last_inspection: string;
  next_inspection: string;
  location: string;
}

// Maintenance Report Interfaces
export interface MaintenanceKPIs {
  total_work_orders: number;
  completed_work_orders: number;
  overdue_work_orders: number;
  completion_rate: number;
  overdue_rate: number;
  avg_resolution_time_hours: number;
  mttr_hours: number;
}

export interface MaintenanceSummaryResponse {
  work_orders: any[];
  kpis: MaintenanceKPIs;
  status_distribution: Record<string, number>;
  priority_distribution: Record<string, number>;
  pagination: PaginationMeta;
}

export interface MaintenanceComplianceRow {
  id: number;
  title: string;
  asset: string;
  location: string;
  compliance_status: string;
  scheduled_date: string;
  completed_date: string;
  days_overdue: number;
}

export interface MaintenanceCostRow {
  id: number;
  title: string;
  asset: string;
  location: string;
  estimated_hours: number;
  actual_hours: number;
  estimated_cost: number;
  actual_cost: number;
  cost_variance: number;
  variance_percentage: number;
}

export interface DowntimeRow {
  id: number;
  title: string;
  asset: string;
  location: string;
  downtime_hours: number;
  impact_level: 'low' | 'medium' | 'high';
  start_date: string;
  end_date: string;
  priority: string;
}

export interface FailureAnalysisRow {
  id: number;
  title: string;
  asset: string;
  location: string;
  category: string;
  priority: string;
  failure_type: string;
  root_cause: string;
  prevention_action: string;
  created_at: string;
}

export interface TechnicianPerformanceRow {
  id: number;
  name: string;
  email: string;
  total_work_orders: number;
  completed_work_orders: number;
  completion_rate: number;
  avg_resolution_time_days: number;
  total_hours_worked: number;
  efficiency_score: number;
}

// Export Interfaces
export interface ExportRequest {
  report_key: string;
  format: ExportFormat;
  params: Record<string, any>;
}

export interface ExportResponse {
  success: boolean;
  data: {
    run_id: number;
    status: ReportStatus;
    message: string;
  };
}

export interface ReportRunStatus {
  id: number;
  report_key: string;
  format: ExportFormat;
  status: ReportStatus;
  status_label: string;
  row_count: number;
  execution_time_ms: number;
  execution_time_formatted: string;
  created_at: string;
  started_at: string;
  completed_at: string;
  error_message?: string;
  download_url?: string;
  file_size?: number;
}

export interface ExportHistoryResponse {
  runs: ReportRunStatus[];
  pagination: PaginationMeta;
}

// Report Template Interfaces
export interface ReportTemplate {
  id: number;
  name: string;
  description: string;
  report_key: string | null;
  definition: any;
  default_filters: Record<string, any>;
  is_shared: boolean;
  is_public: boolean;
  category: string;
  type: 'standard' | 'custom';
  last_run_at?: string;
  run_count: number;
  success_rate: number;
  created_at: string;
  updated_at: string;
}

// Report Schedule Interfaces
export interface ReportSchedule {
  id: number;
  name: string;
  description: string;
  rrule: string;
  timezone: string;
  delivery_email: string;
  delivery_options: Record<string, any>;
  enabled: boolean;
  last_run_at: string;
  next_run_at: string;
  frequency_display_name: string;
  next_run_formatted: string;
  last_run_formatted: string;
  is_due: boolean;
  is_active: boolean;
  delivery_emails: string[];
  created_at: string;
  updated_at: string;
}

// Filter Options Interfaces
export interface LocationOption {
  id: number;
  name: string;
  full_path: string;
}

export interface AssetOption {
  id: number;
  name: string;
  status: string;
  location: string;
}

export interface UserOption {
  id: number;
  name: string;
  email: string;
}

export interface StatusOption {
  id: number;
  name: string;
  slug: string;
}

export interface PriorityOption {
  id: number;
  name: string;
  slug: string;
}

export interface CategoryOption {
  id: number;
  name: string;
  slug: string;
}

// Report Configuration Interfaces
export interface ReportConfig {
  dateRange: DateRange;
  period: ReportPeriod;
  page: number;
  pageSize: number;
  locationIds: number[];
  assetIds: number[];
  userIds: number[];
  statusIds: number[];
  priorityIds: number[];
  categoryIds: number[];
  search: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
}

// KPI Card Interface
export interface KPICard {
  key: string;
  label: string;
  value: number | string;
  format: 'number' | 'currency' | 'percentage' | 'text';
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
    period: string;
  };
  icon?: string;
  color?: string;
}

// Chart Data Interfaces
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
  }>;
}

// Report Builder Interfaces
export interface ReportBuilderConfig {
  name: string;
  description: string;
  category: ReportCategory;
  tables: string[];
  fields: Array<{
    table: string;
    field: string;
    alias?: string;
    type: string;
  }>;
  filters: Array<{
    field: string;
    operator: string;
    value: any;
  }>;
  groupBy: string[];
  orderBy: Array<{
    field: string;
    direction: 'asc' | 'desc';
  }>;
  format: ExportFormat;
}
