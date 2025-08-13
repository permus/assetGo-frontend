import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface DashboardData {
  total_value: number;
  total_parts: number;
  low_stock_count: number;
  out_of_stock_count: number;
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
  part_id: number;
  location_id: number;
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

  getAbcAnalysis(): Observable<AbcAnalysisResponse> {
    return this.http.get<AbcAnalysisResponse>(
      `${this.apiUrl}/inventory/analytics/abc-analysis`,
      this.getAuthHeaders()
    );
  }

  // Parts Catalog Methods
  getPartsCatalog(
    search?: string,
    status?: string,
    page: number = 1,
    perPage: number = 15
  ): Observable<PartsCatalogResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    if (search) {
      params = params.set('search', search);
    }

    if (status) {
      params = params.set('status', status);
    }

    return this.http.get<PartsCatalogResponse>(
      `${this.apiUrl}/inventory/parts`,
      { ...this.getAuthHeaders(), params }
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
}
