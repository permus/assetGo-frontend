import { Component, OnInit } from '@angular/core';
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
export class PurchaseOrdersComponent implements OnInit {
  showCreatePOModal = false;
  showViewPOModal = false;
  showReceiveItemsModal = false;
  selectedPurchaseOrder: PurchaseOrder | null = null;
  
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
    // Load stats for overview cards
    this.inventoryService.getPurchaseOrders(1, 1000).subscribe({
      next: (response: PurchaseOrdersResponse) => {
        if (response.success) {
          const allPOs = response.data.data;
          this.overviewStats.totalPOs = allPOs.length;
          this.overviewStats.pending = allPOs.filter(po => po.status === 'pending').length;
          this.overviewStats.approved = allPOs.filter(po => po.status === 'approved').length;
          this.overviewStats.totalValue = allPOs.reduce((sum, po) => sum + po.total, 0);
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
    console.log('Creating Purchase Order:', poData);
    
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
    });
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

  formatCurrency(amount: number): string {
    return `AED ${amount.toFixed(2)}`;
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }

  calculateItemsTotal(items: any[]): number {
    if (!items || items.length === 0) return 0;
    return items.reduce((sum, item) => sum + (item.ordered_qty || 0), 0);
  }

  getMinValue(a: number, b: number): number {
    return Math.min(a, b);
  }

  refreshData(): void {
    this.loadPurchaseOrders();
    this.loadOverviewStats();
  }
}
