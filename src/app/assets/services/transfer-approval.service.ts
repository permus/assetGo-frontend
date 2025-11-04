import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';

export interface Transfer {
  id: number;
  asset_id: number;
  asset: {
    id: number;
    name: string;
    asset_id: string;
    location_id?: number;
    department_id?: number;
    location?: { id: number; name: string };
    department?: { id: number; name: string };
  };
  old_location_id?: number;
  new_location_id?: number;
  old_department_id?: number;
  new_department_id?: number;
  from_user_id?: number;
  to_user_id?: number;
  reason: string;
  transfer_date?: string;
  notes?: string;
  condition_report?: string;
  status: 'pending' | 'completed' | 'rejected';
  approved_by?: number;
  created_by: number | { id: number; first_name: string; last_name: string; email: string };
  old_location?: { id: number; name: string; full_path?: string };
  new_location?: { id: number; name: string; full_path?: string };
  old_department?: { id: number; name: string };
  new_department?: { id: number; name: string };
  from_user?: { id: number; first_name: string; last_name: string; email: string };
  to_user?: { id: number; first_name: string; last_name: string; email: string };
  createdBy?: { id: number; first_name: string; last_name: string; email: string };
  approver?: { id: number; first_name: string; last_name: string; email: string };
  created_at: string;
  updated_at: string;
}

export interface PendingTransfersResponse {
  success: boolean;
  data: {
    pending_transfers: Transfer[];
  };
}

export interface TransferDetailsResponse {
  success: boolean;
  data: {
    transfer: Transfer;
  };
}

export interface ApproveTransferRequest {
  notes?: string;
}

export interface RejectTransferRequest {
  rejection_reason?: string;
}

@Injectable({ providedIn: 'root' })
export class TransferApprovalService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const token = this.authService.getToken();
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    };
  }

  // Get pending transfers
  getPendingTransfers(): Observable<PendingTransfersResponse> {
    return this.http.get<PendingTransfersResponse>(`${this.baseUrl}/assets/transfers/pending`, this.getAuthHeaders());
  }

  // Get transfer details
  getTransferDetails(transferId: number | string): Observable<TransferDetailsResponse> {
    return this.http.get<TransferDetailsResponse>(`${this.baseUrl}/assets/transfers/${transferId}`, this.getAuthHeaders());
  }

  // Approve transfer
  approveTransfer(transferId: number | string, data?: ApproveTransferRequest): Observable<{ success: boolean; message: string; data: any }> {
    return this.http.post<{ success: boolean; message: string; data: any }>(
      `${this.baseUrl}/assets/transfers/${transferId}/approve`,
      data || {},
      this.getAuthHeaders()
    );
  }

  // Reject transfer
  rejectTransfer(transferId: number | string, data?: RejectTransferRequest): Observable<{ success: boolean; message: string; data: any }> {
    return this.http.post<{ success: boolean; message: string; data: any }>(
      `${this.baseUrl}/assets/transfers/${transferId}/reject`,
      data || {},
      this.getAuthHeaders()
    );
  }
}
