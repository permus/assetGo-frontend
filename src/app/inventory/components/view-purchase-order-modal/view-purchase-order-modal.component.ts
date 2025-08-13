import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryAnalyticsService, PurchaseOrder, UpdatePurchaseOrderRequest } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-view-purchase-order-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-purchase-order-modal.component.html',
  styleUrls: ['./view-purchase-order-modal.component.scss']
})
export class ViewPurchaseOrderModalComponent {
  @Input() purchaseOrder: PurchaseOrder | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() purchaseOrderUpdated = new EventEmitter<PurchaseOrder>();

  isEditing = false;
  loading = false;
  error: string | null = null;

  constructor(private inventoryService: InventoryAnalyticsService) {}

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  onUpdate(updatedData: UpdatePurchaseOrderRequest): void {
    if (!this.purchaseOrder?.id) return;

    this.loading = true;
    this.error = null;

    this.inventoryService.updatePurchaseOrder(this.purchaseOrder.id, updatedData).subscribe({
      next: (response) => {
        if (response.success) {
          this.purchaseOrderUpdated.emit(response.data);
          this.isEditing = false;
        } else {
          this.error = 'Failed to update purchase order';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error updating purchase order: ' + err.message;
        this.loading = false;
      }
    });
  }

  onDelete(): void {
    if (!this.purchaseOrder?.id) return;

    if (confirm('Are you sure you want to delete this purchase order? This action cannot be undone.')) {
      this.loading = true;
      this.error = null;

      this.inventoryService.deletePurchaseOrder(this.purchaseOrder.id).subscribe({
        next: () => {
          this.closeModal.emit();
        },
        error: (err) => {
          this.error = 'Error deleting purchase order: ' + err.message;
          this.loading = false;
        }
      });
    }
  }

  onClose(): void {
    this.closeModal.emit();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'draft': return 'status-draft';
      case 'pending': return 'status-pending';
      case 'approved': return 'status-approved';
      case 'ordered': return 'status-ordered';
      case 'rejected': return 'status-rejected';
      case 'closed': return 'status-closed';
      case 'cancelled': return 'status-cancelled';
      default: return 'status-default';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'draft': return 'Draft';
      case 'pending': return 'Pending';
      case 'approved': return 'Approved';
      case 'ordered': return 'Ordered';
      case 'rejected': return 'Rejected';
      case 'closed': return 'Closed';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  }

  formatCurrency(amount: number): string {
    return `AED ${amount.toFixed(2)}`;
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }

  canEdit(): boolean {
    return this.purchaseOrder?.status === 'draft';
  }

  canDelete(): boolean {
    return this.purchaseOrder?.status === 'draft';
  }
}
