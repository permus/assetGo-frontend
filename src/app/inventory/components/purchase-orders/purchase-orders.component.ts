import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatePurchaseOrderModalComponent } from '../create-purchase-order-modal/create-purchase-order-modal.component';
import { ViewPurchaseOrderModalComponent } from '../view-purchase-order-modal/view-purchase-order-modal.component';
import { ReceiveItemsModalComponent } from '../receive-items-modal/receive-items-modal.component';
import { InventoryAnalyticsService, PurchaseOrder, PurchaseOrdersResponse } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-purchase-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, CreatePurchaseOrderModalComponent, ViewPurchaseOrderModalComponent, ReceiveItemsModalComponent],
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit, OnDestroy {
  showCreatePOModal = false;
  showViewPOModal = false;
  showReceiveItemsModal = false;
  selectedPurchaseOrder: PurchaseOrder | null = null;

  // Dropdown state
  openDropdownId: number | null = null;

  // Data properties
  purchaseOrders: PurchaseOrder[] = [];
  loading = false;
  error: string | null = null;

  // Pagination
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  perPage = 15;

  // Filters
  filters = {
    status: '',
    search: ''
  };

  // Overview stats
  overviewStats = {
    totalPOs: 0,
    pending: 0,
    approved: 0,
    totalValue: 0
  };

  constructor(private inventoryService: InventoryAnalyticsService) {}

  ngOnInit(): void {
    this.loadPurchaseOrders();
    this.loadOverviewStats();

    // Close dropdown when clicking outside
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  // Dropdown functionality
  toggleDropdown(event: Event, poId?: number): void {
    event.stopPropagation();
    if (poId) {
      this.openDropdownId = this.openDropdownId === poId ? null : poId;
    }
  }

  onDocumentClick(event: Event): void {
    if (!(event.target as Element).closest('.dropdown-container')) {
      this.openDropdownId = null;
    }
  }

  // New action methods
  viewPurchaseOrder(po: PurchaseOrder): void {
    this.openViewPOModal(po);
    this.openDropdownId = null;
  }

  approvePurchaseOrder(po: PurchaseOrder): void {
    console.log('Approving Purchase Order:', po.po_number);

    if (!po.id) {
      this.error = 'Purchase Order ID is missing';
      return;
    }

    // Call the approve endpoint to approve the PO
    this.inventoryService.approvePurchaseOrder({ purchase_order_id: po.id, approve: true }).subscribe({
      next: (response: any) => {
        if (response.success) {
          console.log('Purchase Order approved successfully');
          this.loadPurchaseOrders();
          this.loadOverviewStats();
        } else {
          this.error = 'Failed to approve purchase order';
        }
      },
      error: (err: any) => {
        this.error = 'Error approving purchase order: ' + err.message;
      }
    });

    this.openDropdownId = null;
  }

  sendEmail(po: PurchaseOrder): void {
    console.log('Sending email for Purchase Order:', po.po_number);

    // Here you would implement email functionality
    // This could open a modal to compose email or trigger an email service
    alert(`Email functionality for PO ${po.po_number} would be implemented here.`);

    this.openDropdownId = null;
  }

  markAsOrdered(po: PurchaseOrder): void {
    console.log('Marking Purchase Order as Ordered:', po.po_number);

    if (!po.id) {
      this.error = 'Purchase Order ID is missing';
      return;
    }

    // Here you would call the API to mark the PO as ordered
    this.inventoryService.updatePurchaseOrder(po.id, { status: 'ordered' } as any).subscribe({
      next: (response: any) => {
        if (response.success) {
          console.log('Purchase Order marked as ordered successfully');
          this.loadPurchaseOrders();
          this.loadOverviewStats();
        } else {
          this.error = 'Failed to mark purchase order as ordered';
        }
      },
      error: (err: any) => {
        this.error = 'Error marking purchase order as ordered: ' + err.message;
      }
    });

    this.openDropdownId = null;
  }

  closePurchaseOrder(po: PurchaseOrder): void {
    if (!po.id) {
      this.error = 'Purchase Order ID is missing';
      return;
    }
    this.inventoryService.updatePurchaseOrder(po.id, { status: 'closed' } as any).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.loadPurchaseOrders();
          this.loadOverviewStats();
        } else {
          this.error = 'Failed to close purchase order';
        }
      },
      error: (err: any) => {
        this.error = 'Error closing purchase order: ' + err.message;
      }
    });
    this.openDropdownId = null;
  }

  loadPurchaseOrders(): void {
    this.loading = true;
    this.error = null;

    this.inventoryService.getPurchaseOrders(
      this.currentPage,
      this.perPage,
      this.filters.status || undefined,
      this.filters.search || undefined
    ).subscribe({
      next: (response: PurchaseOrdersResponse) => {
        if (response.success) {
          this.purchaseOrders = response.data.data;
          this.currentPage = response.data.current_page;
          this.totalPages = response.data.last_page;
          this.totalItems = response.data.total;
        } else {
          this.error = 'Failed to load purchase orders';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading purchase orders: ' + err.message;
        this.loading = false;
      }
    });
  }

  loadOverviewStats(): void {
    this.inventoryService.getPurchaseOrdersOverview().subscribe({
      next: (response) => {
        if (response.success) {
          const d = response.data;
          this.overviewStats.totalPOs = d.total_pos;
          this.overviewStats.pending = d.pending;
          this.overviewStats.approved = d.approved;
          this.overviewStats.totalValue = d.total_value;
        }
      },
      error: (err) => {
        console.error('Error loading overview stats:', err);
      }
    });
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.loadPurchaseOrders();
  }

  clearFilters(): void {
    this.filters = {
      status: '',
      search: ''
    };
    this.currentPage = 1;
    this.loadPurchaseOrders();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPurchaseOrders();
  }

  openCreatePOModal(): void {
    this.showCreatePOModal = true;
  }

  closeCreatePOModal(): void {
    this.showCreatePOModal = false;
  }

  openViewPOModal(purchaseOrder: PurchaseOrder): void {
    this.selectedPurchaseOrder = purchaseOrder;
    this.showViewPOModal = true;
  }

  closeViewPOModal(): void {
    this.showViewPOModal = false;
    this.selectedPurchaseOrder = null;
  }

  openReceiveItemsModal(purchaseOrder: PurchaseOrder): void {
    this.selectedPurchaseOrder = purchaseOrder;
    this.showReceiveItemsModal = true;
  }

  closeReceiveItemsModal(): void {
    this.showReceiveItemsModal = false;
    this.selectedPurchaseOrder = null;
  }

  onCreatePurchaseOrder(poData: any): void {
/*    console.log('Creating Purchase Order:', poData);

    this.inventoryService.createPurchaseOrder(poData).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('Purchase Order created successfully:', response.data);
          this.loadPurchaseOrders();
          this.loadOverviewStats();
          this.closeCreatePOModal();
        } else {
          this.error = 'Failed to create purchase order';
        }
      },
      error: (err) => {
        this.error = 'Error creating purchase order: ' + err.message;
      }
    });*/

    this.loadPurchaseOrders();
    this.loadOverviewStats();
    this.closeCreatePOModal();
  }

  onPurchaseOrderUpdated(updatedPO: PurchaseOrder): void {
    // Update the purchase order in the list
    const index = this.purchaseOrders.findIndex(po => po.id === updatedPO.id);
    if (index !== -1) {
      this.purchaseOrders[index] = updatedPO;
    }
    this.loadOverviewStats();
  }

  onItemsReceived(): void {
    // Refresh the purchase orders list to show updated received quantities
    this.loadPurchaseOrders();
    this.loadOverviewStats();
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

  formatCurrency(amount: any): string {
    // Convert to number and handle invalid values
    const numAmount = Number(amount);

    // Check if it's a valid number
    if (isNaN(numAmount) || !isFinite(numAmount)) {
      return 'AED 0.00';
    }

    return `AED ${numAmount.toFixed(2)}`;
  }

  formatDate(dateString: any): string {
    // Handle null, undefined, or invalid date strings
    if (!dateString) {
      return 'N/A';
    }

    try {
      const date = new Date(dateString);

      // Check if it's a valid date
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

  getMinValue(a: number, b: number): number {
    return Math.min(a, b);
  }

  refreshData(): void {
    this.loadPurchaseOrders();
    this.loadOverviewStats();
  }
}
