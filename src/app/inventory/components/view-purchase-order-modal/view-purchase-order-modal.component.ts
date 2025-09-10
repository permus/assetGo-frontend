import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrder } from '../../../core/services/inventory-analytics.service';
import { CurrencyService } from '../../../core/services/currency.service';

@Component({
  selector: 'app-view-purchase-order-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-purchase-order-modal.component.html',
  styleUrls: ['./view-purchase-order-modal.component.scss']
})
export class ViewPurchaseOrderModalComponent {
  @Input() purchaseOrder: PurchaseOrder | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() purchaseOrderUpdated = new EventEmitter<PurchaseOrder>();

  constructor(private currency: CurrencyService) {}

  // Safe getters for template use
  get hasItems(): boolean {
    return !!(this.purchaseOrder?.items && this.purchaseOrder.items.length > 0);
  }

  get itemsCount(): number {
    return this.purchaseOrder?.items?.length || 0;
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

  formatCurrency(amount: any): string { return this.currency.format(amount); }

  formatDate(dateString: any): string {
    if (!dateString) {
      return 'N/A';
    }
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Invalid Date';
      }
      return date.toLocaleDateString();
    } catch (error) {
      return 'Invalid Date';
    }
  }

  calculateItemsTotal(items: any[]): number {
    if (!items || !Array.isArray(items) || items.length === 0) return 0;
    return items.reduce((sum, item) => {
      const qty = Number(item?.ordered_qty) || 0;
      return sum + (isNaN(qty) ? 0 : qty);
    }, 0);
  }

  calculateTotalValue(items: any[]): number {
    if (!items || !Array.isArray(items) || items.length === 0) return 0;
    return items.reduce((sum, item) => {
      const qty = Number(item?.ordered_qty) || 0;
      const price = Number(item?.unit_price) || 0;
      return sum + (qty * price);
    }, 0);
  }

  onClose(): void {
    this.closeModal.emit();
  }

  onEdit(): void {
    // Emit the purchase order for editing
    if (this.purchaseOrder) {
      this.purchaseOrderUpdated.emit(this.purchaseOrder);
    }
    this.onClose();
  }
}
