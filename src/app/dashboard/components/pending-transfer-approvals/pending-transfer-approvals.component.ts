import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { TransferApprovalService, Transfer } from '../../../assets/services/transfer-approval.service';
import { ReviewTransferModalComponent } from '../review-transfer-modal/review-transfer-modal.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-pending-transfer-approvals',
  standalone: true,
  imports: [CommonModule, ReviewTransferModalComponent],
  templateUrl: './pending-transfer-approvals.component.html',
  styleUrl: './pending-transfer-approvals.component.scss'
})
export class PendingTransferApprovalsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  pendingTransfers: Transfer[] = [];
  loading = false;
  error = '';
  showReviewModal = false;
  selectedTransfer: Transfer | null = null;

  constructor(
    private transferApprovalService: TransferApprovalService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadPendingTransfers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPendingTransfers(): void {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || !['manager', 'admin', 'owner'].includes(currentUser.user_type)) {
      return; // Only managers/admins can see pending transfers
    }

    this.loading = true;
    this.error = '';

    this.transferApprovalService.getPendingTransfers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.loading = false;
          if (response.success) {
            this.pendingTransfers = response.data.pending_transfers || [];
          } else {
            this.error = 'Failed to load pending transfers';
          }
        },
        error: (error) => {
          this.loading = false;
          this.error = error.error?.message || 'Failed to load pending transfers';
        }
      });
  }

  reviewTransfer(transfer: Transfer): void {
    this.selectedTransfer = transfer;
    this.showReviewModal = true;
  }

  onTransferReviewed(): void {
    this.showReviewModal = false;
    this.selectedTransfer = null;
    this.loadPendingTransfers(); // Reload list after approval/rejection
  }

  onCloseModal(): void {
    this.showReviewModal = false;
    this.selectedTransfer = null;
  }

  formatDate(dateString?: string): string {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  getRequesterName(transfer: Transfer): string {
    if (!transfer.created_by) return 'Unknown';
    if (typeof transfer.created_by === 'object') {
      return `${transfer.created_by.first_name || ''} ${transfer.created_by.last_name || ''}`.trim() || 'Unknown';
    }
    return 'Unknown';
  }

  getReasonBadgeClass(reason: string): string {
    const reasonMap: { [key: string]: string } = {
      'Upgrade': 'bg-blue-100 text-blue-800',
      'Relocation': 'bg-purple-100 text-purple-800',
      'Maintenance': 'bg-yellow-100 text-yellow-800',
      'Department Change': 'bg-green-100 text-green-800',
      'Storage': 'bg-gray-100 text-gray-800',
      'Disposal': 'bg-red-100 text-red-800',
      'Other': 'bg-indigo-100 text-indigo-800'
    };
    return reasonMap[reason] || 'bg-gray-100 text-gray-800';
  }
}
