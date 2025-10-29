import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface DashboardData {
  total_value: number;
  total_parts: number;
  low_stock_count: number;
  out_of_stock_count: number;
  // New fields from overview endpoint
  average_turnover?: number;
  slow_moving_count?: number;
}

export interface PartsOverviewData {
  total_parts: number;
  low_stock_count: number;
  total_value: number;
}

export interface PartsOverviewResponse {
  success: boolean;
  data: PartsOverviewData;
}

export interface AbcAnalysisItem {
  part_id: number;
  name: string;
  value: number;
  cumulative_ratio: number;
  class: string;
}

export interface AbcAnalysisResponse {
  success: boolean;
  data: AbcAnalysisItem[];
}

export interface TurnoverData {
  period: string;
  cogs: number;
  avg_inventory_value: number;
  turnover: number;
  days_on_hand: number | null;
}

export interface TurnoverResponse {
  success: boolean;
  data: TurnoverData;
}

export interface KpisData {
  period: string;
  turnover: number;
  days_on_hand: number | null;
  avg_inventory_value: number;
  carrying_cost_monthly: number;
  carrying_rate_annual: number;
  dead_stock_value: number;
  dead_stock_items: number;
  dead_days_threshold: number;
  previous_turnover?: number;
  turnover_change_pct?: number | null;
}

export interface KpisResponse {
  success: boolean;
  data: KpisData;
}

export interface CategoryTurnoverItem {
  category_id: number | null;
  category_name: string;
  cogs: number;
  avg_inventory_value: number;
  turnover: number;
  days_on_hand: number | null;
}

export interface TurnoverByCategoryResponse {
  success: boolean;
  data: {
    period: string;
    categories: CategoryTurnoverItem[];
  };
}

export interface MonthlyTurnoverPoint {
  month: string;      // YYYY-MM
  label: string;      // e.g., "Mar 2025"
  cogs: number;
  avg_inventory_value: number;
  turnover: number;   // monthly (not annualized)
}

export interface MonthlyTurnoverTrendResponse {
  success: boolean;
  data: {
    period: string;
    points: MonthlyTurnoverPoint[];
  };
}

export interface AgingBucket {
  label: string;
  days_from: number;
  days_to: number | null;
  count: number;
  value: number;
}

export interface SlowMovingItem {
  part_id: number;
  name: string;
  on_hand: number;
  value: number;
  last_movement_at: string | null;
  days_since_movement: number;
}

export interface StockAgingData {
  buckets: AgingBucket[];
  slow_moving: SlowMovingItem[];
}

export interface StockAgingResponse {
  success: boolean;
  data: StockAgingData;
}

// Alerts API
export interface InventoryAlertDTO {
  id: number;
  part_id: number | null;
  alert_type: string;
  alert_level: string;
  message: string;
  is_resolved: boolean;
  created_at: string;
}

export interface AlertsListResponse {
  success: boolean;
  data: { data: InventoryAlertDTO[]; current_page: number; last_page: number; total: number };
}

export interface AlertActionResponse {
  success: boolean;
  data: any;
}

export interface AlertsSummaryResponse {
  success: boolean;
  data: { active: number; critical: number; ack: number; total: number };
}

export interface DashboardResponse {
  success: boolean;
  data: DashboardData;
}

// Parts Catalog Interfaces
export interface InventoryPart {
  id: number;
  name: string;
  part_number: string;
  description?: string;
  uom: string;
  unit_cost?: number;
  category_id?: number;
  reorder_point?: number;
  reorder_qty?: number;
  barcode?: string;
  status?: string;
  abc_class?: string;
  is_archived?: boolean;
  company_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface PartsCatalogResponse {
  success: boolean;
  data: {
    data: InventoryPart[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface PartResponse {
  success: boolean;
  data: InventoryPart;
}

export interface CreatePartRequest {
  name: string;
  part_number: string;
  description?: string;
  uom: string;
  unit_cost?: number;
  category_id?: number;
  reorder_point?: number;
  reorder_qty?: number;
  barcode?: string;
  status?: string;
  abc_class?: string;
}

export interface UpdatePartRequest {
  name?: string;
  part_number?: string;
  description?: string;
  uom?: string;
  unit_cost?: number;
  category_id?: number;
  reorder_point?: number;
  reorder_qty?: number;
  barcode?: string;
  status?: string;
  abc_class?: string;
}

// Stock Levels Interfaces
export interface InventoryLocation {
  id: number;
  name: string;
  code?: string;
  type?: string;
  address?: string;
  company_id: number;
}

export interface LocationResponse {
  success: boolean;
  data: {
    locations: any[];
    data: InventoryLocation[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

// Transactions Interfaces
export interface InventoryTransaction {
  id: number;
  company_id: number;
  part_id: number;
  location_id: number;
  type: 'receipt' | 'issue' | 'adjustment' | 'transfer_out' | 'transfer_in' | 'return';
  quantity: number;
  unit_cost: number;
  total_cost: number;
  reason: string;
  notes: string;
  reference: string;
  related_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  part: {
    id: number;
    name: string;
    part_number: string;
    description: string;
  };
  location: {
    id: number;
    name: string;
    code: string;
  };
}

export interface TransactionsResponse {
  success: boolean;
  data: {
    data: InventoryTransaction[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

// Purchase Order Interfaces
export interface PurchaseOrderItem {
  id?: number;
  part_id?: number;
  part_number: string;
  description: string;
  ordered_qty: number;
  received_qty?: number;
  unit_cost: number;
  line_total?: number;
  notes?: string;
  part?: InventoryPart;
  location_info?: InventoryLocation;
}

export interface PurchaseOrder {
  id?: number;
  company_id?: number;
  po_number: string;
  supplier_id?: number;
  vendor_name: string;
  vendor_contact: string;
  order_date: string;
  expected_date: string;
  status: string;
  subtotal: number;
  tax: number;
  total: number;
  terms?: string;
  notes?: string;
  created_by?: {
    id:number,
    first_name:string,
    last_name:string,
    email:string,
    phone:string,
    role:string,
    avatar:string
  };
  approved_by?: number;
  approved_at?: string;
  reject_comment?: string;
  created_at?: string;
  updated_at?: string;
  supplier?: any;
  items: PurchaseOrderItem[];
}

export interface CreatePurchaseOrderRequest {
  supplier_id?: number;
  vendor_name: string;
  vendor_contact: string;
  order_date: string;
  expected_date: string;
  items: {
    part_id?: number;
    part_number: string;
    description: string;
    qty: number;
    unit_cost: number;
  }[];
  tax_rate?: number;
  tax_amount?: number;
  terms?: string;
  notes?: string;
}

export interface UpdatePurchaseOrderRequest {
  supplier_id?: number;
  vendor_name?: string;
  vendor_contact?: string;
  order_date?: string;
  expected_date?: string;
  items?: {
    part_id?: number;
    part_number: string;
    description: string;
    qty: number;
    unit_cost: number;
  }[];
  tax_rate?: number;
  tax_amount?: number;
  terms?: string;
  notes?: string;
}

export interface ReceivePurchaseOrderRequest {
  location_id: number;
  items: {
    item_id: number;
    receive_qty: number;
  }[];
  reference?: string;
  notes?: string;
}

export interface ApprovePurchaseOrderRequest {
  purchase_order_id: number;
  approve: boolean;
  comment?: string;
}

export interface PurchaseOrdersResponse {
  success: boolean;
  data: {
    data: PurchaseOrder[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface PurchaseOrdersOverviewData {
  total_pos: number;
  draft: number;
  pending: number;
  approved: number;
  ordered: number;
  received: number;
  closed: number;
  rejected: number;
  cancelled: number;
  total_value: number;
}

export interface PurchaseOrdersOverviewResponse {
  success: boolean;
  data: PurchaseOrdersOverviewData;
}

export interface PurchaseOrderResponse {
  success: boolean;
  data: PurchaseOrder;
}

export interface InventoryStock {
  id: number;
  part_id: number;
  location_id: number;
  on_hand: number;
  available: number;
  reserved: number;
  allocated: number;
  average_cost: number;
  last_updated: string;
  part: InventoryPart;
  location: InventoryLocation;
}

export interface StockLevelsResponse {
  success: boolean;
  data: {
    data: InventoryStock[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface StockAdjustmentRequest {
  part_id: number | null;
  location_id: number | null;
  type: 'receipt' | 'issue' | 'adjustment' | 'return';
  quantity: number;
  unit_cost?: number;
  reason?: string;
  notes?: string;
  reference?: string;
}

export interface StockTransferRequest {
  part_id: number;
  from_location_id: number;
  to_location_id: number;
  quantity: number;
  reason?: string;
  notes?: string;
  reference?: string;
}

export interface StockReserveRequest {
  part_id: number;
  location_id: number;
  quantity: number;
  reference?: string;
}

export interface StockCountRequest {
  part_id: number;
  location_id: number;
  counted_quantity: number;
  notes?: string;
}

export interface StockOperationResponse {
  success: boolean;
  data: any;
}

// Supplier interfaces
export interface Supplier {
  id: number;
  company_id: number;
  supplier_code: string;
  name: string;
  contact_person: string;
  tax_registration_number?: string;
  email: string;
  phone: string;
  alternate_phone?: string;
  website?: string;
  street_address?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  payment_terms?: string;
  terms?: string;
  currency: string;
  credit_limit?: number;
  delivery_lead_time?: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateSupplierRequest {
  name: string;
  contact_person: string;
  email: string;
  phone: string;
  supplier_code?: string;
  tax_registration_number?: string;
  alternate_phone?: string;
  website?: string;
  street_address?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  payment_terms?: string;
  currency?: string;
  credit_limit?: number;
  delivery_lead_time?: number;
  notes?: string;
}

export interface UpdateSupplierRequest {
  name?: string;
  contact_person?: string;
  email?: string;
  phone?: string;
  supplier_code?: string;
  tax_registration_number?: string;
  alternate_phone?: string;
  website?: string;
  street_address?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  payment_terms?: string;
  currency?: string;
  credit_limit?: number;
  delivery_lead_time?: number;
  notes?: string;
}

export interface SuppliersResponse {
  success: boolean;
  data: {
    current_page: number;
    data: Supplier[];
    per_page: number;
    total: number;
  };
}

export interface SupplierResponse {
  success: boolean;
  data: Supplier;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryAnalyticsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const token = localStorage.getItem('token');
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    };
  }

  getDashboardData(): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(
      `${this.apiUrl}/inventory/dashboard/overview`,
      this.getAuthHeaders()
    );
  }

  getInventoryAnalytics(): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(
      `${this.apiUrl}/inventory/analytics/dashboard`,
      this.getAuthHeaders()
    );
  }

  getTurnover(params?: { period?: '1m' | '3m' | '6m' | '1y' }): Observable<TurnoverResponse> {
    return this.http.get<TurnoverResponse>(
      `${this.apiUrl}/inventory/analytics/turnover`,
      { ...this.getAuthHeaders(), params: new HttpParams({ fromObject: params || {} }) }
    );
  }

  getKpis(params?: { period?: '1m' | '3m' | '6m' | '1y'; carrying_rate?: number; dead_days?: number }): Observable<KpisResponse> {
    return this.http.get<KpisResponse>(
      `${this.apiUrl}/inventory/analytics/kpis`,
      { ...this.getAuthHeaders(), params: new HttpParams({ fromObject: params || {} }) }
    );
  }

  getTurnoverByCategory(params?: { period?: '1m' | '3m' | '6m' | '1y' }): Observable<TurnoverByCategoryResponse> {
    return this.http.get<TurnoverByCategoryResponse>(
      `${this.apiUrl}/inventory/analytics/turnover-by-category`,
      { ...this.getAuthHeaders(), params: new HttpParams({ fromObject: params || {} }) }
    );
  }

  getMonthlyTurnoverTrend(params?: { period?: '1m' | '3m' | '6m' | '1y' }): Observable<MonthlyTurnoverTrendResponse> {
    return this.http.get<MonthlyTurnoverTrendResponse>(
      `${this.apiUrl}/inventory/analytics/monthly-turnover-trend`,
      { ...this.getAuthHeaders(), params: new HttpParams({ fromObject: params || {} }) }
    );
  }

  getStockAging(params?: { bands?: number[] }): Observable<StockAgingResponse> {
    let httpParams = new HttpParams();
    if (params?.bands && params.bands.length) {
      // send repeated bands[]=n params for array
      params.bands.forEach(b => { httpParams = httpParams.append('bands[]', String(b)); });
    }
    return this.http.get<StockAgingResponse>(
      `${this.apiUrl}/inventory/analytics/stock-aging`,
      { ...this.getAuthHeaders(), params: httpParams }
    );
  }

  getAbcAnalysis(params?: { cost_basis?: 'average' | 'unit'; thr_a?: number; thr_b?: number }): Observable<AbcAnalysisResponse> {
    let httpParams = new HttpParams();
    if (params?.cost_basis) httpParams = httpParams.set('cost_basis', params.cost_basis);
    if (typeof params?.thr_a === 'number') httpParams = httpParams.set('thr_a', String(params.thr_a));
    if (typeof params?.thr_b === 'number') httpParams = httpParams.set('thr_b', String(params.thr_b));

    return this.http.get<AbcAnalysisResponse>(
      `${this.apiUrl}/inventory/analytics/abc-analysis`,
      { ...this.getAuthHeaders(), params: httpParams }
    );
  }

  // Alerts
  getAlerts(params?: { is_resolved?: boolean; page?: number }): Observable<AlertsListResponse> {
    let httpParams = new HttpParams();
    if (typeof params?.is_resolved === 'boolean') httpParams = httpParams.set('is_resolved', String(params.is_resolved));
    if (params?.page) httpParams = httpParams.set('page', String(params.page));
    return this.http.get<AlertsListResponse>(
      `${this.apiUrl}/inventory/alerts`,
      { ...this.getAuthHeaders(), params: httpParams }
    );
  }

  resolveAlert(alertId: number): Observable<AlertActionResponse> {
    return this.http.post<AlertActionResponse>(
      `${this.apiUrl}/inventory/alerts/${alertId}/resolve`,
      {},
      this.getAuthHeaders()
    );
  }

  scanAlerts(): Observable<AlertActionResponse> {
    return this.http.post<AlertActionResponse>(
      `${this.apiUrl}/inventory/alerts/scan`,
      {},
      this.getAuthHeaders()
    );
  }

  getAlertsSummary(): Observable<AlertsSummaryResponse> {
    return this.http.get<AlertsSummaryResponse>(
      `${this.apiUrl}/inventory/alerts/summary`,
      this.getAuthHeaders()
    );
  }

  // Automation recommendations
  getReorderRecommendations(body?: { lookback_days?: number; lead_time_days?: number; safety_days?: number }): Observable<{ success: boolean; data: { recommendations: any[] } }> {
    return this.http.post<{ success: boolean; data: { recommendations: any[] } }>(
      `${this.apiUrl}/inventory/automation/recommendations`,
      body || {},
      this.getAuthHeaders()
    );
  }

  // Parts Catalog Methods
  getPartsCatalog(
    search?: string,
    status?: string,
    page: number = 1,
    perPage: number = 15,
    isArchived?: boolean
  ): Observable<PartsCatalogResponse> {
    console.log('Calling parts API:', `${this.apiUrl}/inventory/parts`);
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    if (search) {
      params = params.set('search', search);
    }

    if (status) {
      params = params.set('status', status);
    }

    // Add is_archived parameter when filtering for archived items only
    if (isArchived !== undefined) {
      params = params.set('is_archived', isArchived.toString());
    }

    console.log('Parts API params:', params.toString());
    console.log('Auth headers:', this.getAuthHeaders());

    return this.http.get<PartsCatalogResponse>(
      `${this.apiUrl}/inventory/parts`,
      { ...this.getAuthHeaders(), params }
    );
  }

  getPartsOverview(): Observable<PartsOverviewResponse> {
    return this.http.get<PartsOverviewResponse>(
      `${this.apiUrl}/inventory/parts/overview`,
      this.getAuthHeaders()
    );
  }

  getPart(partId: number): Observable<PartResponse> {
    return this.http.get<PartResponse>(
      `${this.apiUrl}/inventory/parts/${partId}`,
      this.getAuthHeaders()
    );
  }

  createPart(partData: CreatePartRequest): Observable<PartResponse> {
    return this.http.post<PartResponse>(
      `${this.apiUrl}/inventory/parts`,
      partData,
      this.getAuthHeaders()
    );
  }

  updatePart(partId: number, partData: UpdatePartRequest): Observable<PartResponse> {
    return this.http.put<PartResponse>(
      `${this.apiUrl}/inventory/parts/${partId}`,
      partData,
      this.getAuthHeaders()
    );
  }

  deletePart(partId: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(
      `${this.apiUrl}/inventory/parts/${partId}`,
      this.getAuthHeaders()
    );
  }

  archivePart(partId: number, force: boolean = false): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/inventory/parts/${partId}/archive`,
      { force },
      this.getAuthHeaders()
    );
  }

  restorePart(partId: number): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/inventory/parts/${partId}/restore`,
      {},
      this.getAuthHeaders()
    );
  }

  // Stock Levels Methods
  getStockLevels(
    locationId?: number,
    partId?: number,
    search?: string,
    page: number = 1,
    perPage: number = 15
  ): Observable<StockLevelsResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    if (locationId) {
      params = params.set('location_id', locationId.toString());
    }

    if (partId) {
      params = params.set('part_id', partId.toString());
    }

    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<StockLevelsResponse>(
      `${this.apiUrl}/inventory/stocks`,
      { ...this.getAuthHeaders(), params }
    );
  }

  adjustStock(adjustmentData: StockAdjustmentRequest): Observable<StockOperationResponse> {
    return this.http.post<StockOperationResponse>(
      `${this.apiUrl}/inventory/stocks/adjust`,
      adjustmentData,
      this.getAuthHeaders()
    );
  }

  transferStock(transferData: StockTransferRequest): Observable<StockOperationResponse> {
    return this.http.post<StockOperationResponse>(
      `${this.apiUrl}/inventory/stocks/transfer`,
      transferData,
      this.getAuthHeaders()
    );
  }

  reserveStock(reserveData: StockReserveRequest): Observable<StockOperationResponse> {
    return this.http.post<StockOperationResponse>(
      `${this.apiUrl}/inventory/stocks/reserve`,
      reserveData,
      this.getAuthHeaders()
    );
  }

  releaseStock(releaseData: StockReserveRequest): Observable<StockOperationResponse> {
    return this.http.post<StockOperationResponse>(
      `${this.apiUrl}/inventory/stocks/release`,
      releaseData,
      this.getAuthHeaders()
    );
  }

  performStockCount(countData: StockCountRequest): Observable<StockOperationResponse> {
    return this.http.post<StockOperationResponse>(
      `${this.apiUrl}/inventory/stocks/count`,
      countData,
      this.getAuthHeaders()
    );
  }

  // Locations Methods
  getLocations(
    page: number = 1,
    perPage: number = 15,
    hierarchyLevel: number = 0,
    sortBy: string = 'created',
    sortDirection: string = 'desc'
  ): Observable<LocationResponse> {
    console.log('Calling locations API:', `${this.apiUrl}/locations`);
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString())
      .set('hierarchy_level', hierarchyLevel.toString())
      .set('sort_by', sortBy)
      .set('sort_direction', sortDirection);

    console.log('Locations API params:', params.toString());
    console.log('Auth headers:', this.getAuthHeaders());

    return this.http.get<LocationResponse>(
      `${this.apiUrl}/locations`,
      { ...this.getAuthHeaders(), params }
    );
  }

  // Transactions Methods
  getTransactions(queryParams: string = ''): Observable<TransactionsResponse> {
    const url = queryParams ?
      `${this.apiUrl}/inventory/transactions?${queryParams}` :
      `${this.apiUrl}/inventory/transactions`;

    return this.http.get<TransactionsResponse>(
      url,
      this.getAuthHeaders()
    );
  }

  // Purchase Order Methods

  // Purchase Order Methods
  getPurchaseOrders(
    page: number = 1,
    perPage: number = 15,
    status?: string,
    search?: string
  ): Observable<PurchaseOrdersResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    if (status) {
      params = params.set('status', status);
    }

    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<PurchaseOrdersResponse>(
      `${this.apiUrl}/inventory/purchase-orders`,
      { ...this.getAuthHeaders(), params }
    );
  }

  getPurchaseOrder(id: number): Observable<PurchaseOrderResponse> {
    return this.http.get<PurchaseOrderResponse>(
      `${this.apiUrl}/inventory/purchase-orders/${id}`,
      this.getAuthHeaders()
    );
  }

  createPurchaseOrder(poData: CreatePurchaseOrderRequest): Observable<PurchaseOrderResponse> {
    return this.http.post<PurchaseOrderResponse>(
      `${this.apiUrl}/inventory/purchase-orders`,
      poData,
      this.getAuthHeaders()
    );
  }

  updatePurchaseOrder(id: number, poData: UpdatePurchaseOrderRequest): Observable<PurchaseOrderResponse> {
    return this.http.put<PurchaseOrderResponse>(
      `${this.apiUrl}/inventory/purchase-orders/${id}`,
      poData,
      this.getAuthHeaders()
    );
  }

  deletePurchaseOrder(id: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/inventory/purchase-orders/${id}`,
      this.getAuthHeaders()
    );
  }

  receivePurchaseOrder(id: number, receiveData: ReceivePurchaseOrderRequest): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/inventory/purchase-orders/${id}/receive`,
      receiveData,
      this.getAuthHeaders()
    );
  }

  approvePurchaseOrder(approveData: ApprovePurchaseOrderRequest): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/inventory/purchase-orders/approve`,
      approveData,
      this.getAuthHeaders()
    );
  }

  getPendingApprovals(): Observable<PurchaseOrdersResponse> {
    return this.http.get<PurchaseOrdersResponse>(
      `${this.apiUrl}/inventory/purchase-orders/pending-approval`,
      this.getAuthHeaders()
    );
  }

  getPurchaseOrderPerformance(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/inventory/purchase-orders/performance`,
      this.getAuthHeaders()
    );
  }

  getPurchaseOrdersOverview(): Observable<PurchaseOrdersOverviewResponse> {
    return this.http.get<PurchaseOrdersOverviewResponse>(
      `${this.apiUrl}/inventory/purchase-orders/overview`,
      this.getAuthHeaders()
    );
  }

  sendPurchaseOrderEmail(id: number, emailData: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/inventory/purchase-orders/${id}/send-email`,
      emailData,
      this.getAuthHeaders()
    );
  }

  // ABC CSV Export
  downloadAbcCsv(params?: { cost_basis?: 'average' | 'unit'; thr_a?: number; thr_b?: number }): Observable<Blob> {
    let httpParams = new HttpParams();
    if (params?.cost_basis) httpParams = httpParams.set('cost_basis', params.cost_basis);
    if (typeof params?.thr_a === 'number') httpParams = httpParams.set('thr_a', String(params.thr_a));
    if (typeof params?.thr_b === 'number') httpParams = httpParams.set('thr_b', String(params.thr_b));

    return this.http.get(
      `${this.apiUrl}/inventory/analytics/abc-analysis/export`,
      {
        headers: this.getAuthHeaders().headers,
        params: httpParams,
        // Angular's HttpClient typing requires this cast to use blob
        responseType: 'blob' as 'json'
      }
    ) as unknown as Observable<Blob>;
  }

  // Supplier methods
  getSuppliers(search: string = '', perPage: number = 15, page: number = 1): Observable<SuppliersResponse> {
    const params = new HttpParams()
      .set('search', search)
      .set('per_page', perPage.toString())
      .set('page', page.toString());

    console.log('Getting suppliers with params:', params.toString());
    return this.http.get<SuppliersResponse>(`${this.apiUrl}/inventory/suppliers`, {
      ...this.getAuthHeaders(),
      params
    });
  }

  getSupplier(id: number): Observable<SupplierResponse> {
    console.log('Getting supplier:', id);
    return this.http.get<SupplierResponse>(`${this.apiUrl}/inventory/suppliers/${id}`, this.getAuthHeaders());
  }

  createSupplier(supplierData: CreateSupplierRequest): Observable<SupplierResponse> {
    console.log('Creating supplier:', supplierData);
    return this.http.post<SupplierResponse>(`${this.apiUrl}/inventory/suppliers`, supplierData, this.getAuthHeaders());
  }

  updateSupplier(id: number, supplierData: UpdateSupplierRequest): Observable<SupplierResponse> {
    console.log('Updating supplier:', id, supplierData);
    return this.http.put<SupplierResponse>(`${this.apiUrl}/inventory/suppliers/${id}`, supplierData, this.getAuthHeaders());
  }

  deleteSupplier(id: number): Observable<any> {
    console.log('Deleting supplier:', id);
    return this.http.delete(`${this.apiUrl}/inventory/suppliers/${id}`, this.getAuthHeaders());
  }

  bulkDeleteSuppliers(supplierIds: number[]): Observable<any> {
    console.log('Bulk deleting suppliers:', supplierIds);
    return this.http.post(`${this.apiUrl}/inventory/suppliers/bulk-delete`, { supplier_ids: supplierIds }, this.getAuthHeaders());
  }
}
