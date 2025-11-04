import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferApprovalService, Transfer } from '../../../assets/services/transfer-approval.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-review-transfer-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review-transfer-modal.component.html',
  styleUrl: './review-transfer-modal.component.scss'
})
export class ReviewTransferModalComponent implements OnInit {
  @Input() isOpen = false;
  @Input() transfer: Transfer | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() transferReviewed = new EventEmitter<void>();

  loading = false;
  rejectionReason = '';
  showRejectInput = false;

  constructor(
    private transferApprovalService: TransferApprovalService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.showRejectInput = false;
    this.rejectionReason = '';
    this.closeModal.emit();
  }

  onApprove(): void {
    if (!this.transfer) return;

    this.loading = true;
    this.transferApprovalService.approveTransfer(this.transfer.id)
      .subscribe({
        next: (response) => {
          this.loading = false;
          if (response.success) {
            this.toastService.success(response.message || 'Transfer approved successfully.');
            this.transferReviewed.emit();
          } else {
            this.toastService.error(response.message || 'Failed to approve transfer.');
          }
        },
        error: (error) => {
          this.loading = false;
          this.toastService.error(error.error?.message || 'Failed to approve transfer.');
        }
      });
  }

  onReject(): void {
    if (!this.showRejectInput) {
      this.showRejectInput = true;
      return;
    }

    if (!this.transfer) return;

    this.loading = true;
    this.transferApprovalService.rejectTransfer(this.transfer.id, {
      rejection_reason: this.rejectionReason || 'No reason provided'
    })
      .subscribe({
        next: (response) => {
          this.loading = false;
          if (response.success) {
            this.toastService.success(response.message || 'Transfer rejected successfully.');
            this.showRejectInput = false;
            this.rejectionReason = '';
            this.transferReviewed.emit();
          } else {
            this.toastService.error(response.message || 'Failed to reject transfer.');
          }
        },
        error: (error) => {
          this.loading = false;
          this.toastService.error(error.error?.message || 'Failed to reject transfer.');
        }
      });
  }

  formatDate(dateString?: string): string {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  getRequesterName(): string {
    if (!this.transfer?.created_by) return 'Unknown';
    if (typeof this.transfer.created_by === 'object') {
      return `${this.transfer.created_by.first_name || ''} ${this.transfer.created_by.last_name || ''}`.trim() || 'Unknown';
    }
    return 'Unknown';
  }
}
