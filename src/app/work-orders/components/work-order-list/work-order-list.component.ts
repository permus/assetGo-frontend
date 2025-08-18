import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { WorkOrderService, WorkOrder, WorkOrderListResponse } from '../../services/work-order.service';
import { Subscription } from 'rxjs';
import { EditWorkOrderModalComponent } from '../edit-work-order-modal/edit-work-order-modal.component';

// Interfaces for nested objects
interface User {
  id: number;
  first_name: string;
  last_name: string;
  user_type: string;
  email: string;
}

interface Asset {
  id: number;
  name: string;
  asset_id: string;
}

interface Location {
  id: number;
  name: string;
  full_path: string;
}

@Component({
  selector: 'app-work-order-list',
  standalone: false,
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.scss']
})
export class WorkOrderListComponent implements OnInit, OnDestroy {
  @Output() createWorkOrderRequested = new EventEmitter<void>();

  workOrders: any[] = [];
  viewMode: 'grid' | 'list' = 'grid';
  isLoading = true;

  // Edit modal properties
  isEditModalOpen = false;
  selectedWorkOrder: any = null;

  // Pagination properties
  currentPage = 1;
  perPage = 10;
  total = 0;
  totalPages = 0;

  // Bulk operations properties
  selectedWorkOrders: Set<number> = new Set();
  isBulkMode = false;
  showBulkActions = false;
  bulkAction = '';
  bulkTargetUser: number | null = null;
  bulkStatus: string = '';
  bulkPriority: string = '';
  // Delete modal state (align with Asset delete flow)
  showDeleteConfirmationModal = false;

  // Math object for template access
  Math = Math;

  private subscription = new Subscription();

  constructor(private workOrderService: WorkOrderService) {}

  ngOnInit(): void {
    this.loadWorkOrders();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Method to test empty state (remove in production)
  testEmptyState(): void {
    this.workOrders = [];
    this.total = 0;
    this.currentPage = 1;
    this.totalPages = 0;
    this.isLoading = false;
    console.log('WorkOrderListComponent: Empty state triggered manually');
  }

  // Method to get current state for debugging (remove in production)
  getCurrentState(): any {
    return {
      workOrders: this.workOrders,
      workOrdersLength: this.workOrders?.length,
      isLoading: this.isLoading,
      total: this.total,
      currentPage: this.currentPage,
      totalPages: this.totalPages
    };
  }

  loadWorkOrders(page: number = 1, filters?: any): void {
    this.isLoading = true;
    this.currentPage = page;

    const params: any = {
      page: this.currentPage,
      per_page: this.perPage
    };

    // Apply filters if provided
    if (filters) {
      if (filters.search && filters.search.trim()) {
        params.search = filters.search.trim();
      }
      // Use *_id fields coming from filters component
      if (filters.status_id) {
        params.status_id = filters.status_id;
      }
      if (filters.priority_id) {
        params.priority_id = filters.priority_id;
      }
      if (filters.category_id) {
        params.category_id = filters.category_id;
      }
      if (filters.asset_id && filters.asset_id !== '') {
        params.asset_id = filters.asset_id;
      }
      if (filters.location_id && filters.location_id !== '') {
        params.location_id = filters.location_id;
      }
      if (filters.assigned_to && filters.assigned_to !== '') {
        params.assigned_to = filters.assigned_to;
      }
      if (filters.is_overdue !== undefined && filters.is_overdue !== false) {
        params.is_overdue = filters.is_overdue;
      }
      if (filters.start_date && filters.start_date !== '') {
        params.start_date = filters.start_date;
      }
      if (filters.end_date && filters.end_date !== '') {
        params.end_date = filters.end_date;
      }
      if (filters.due_start_date && filters.due_start_date !== '') {
        params.due_start_date = filters.due_start_date;
      }
      if (filters.due_end_date && filters.due_end_date !== '') {
        params.due_end_date = filters.due_end_date;
      }
      if (filters.sortBy) {
        params.sort_by = filters.sortBy;
      }
      if (filters.sortOrder) {
        params.sort_dir = filters.sortOrder;
      }
    }

    this.subscription.add(
      this.workOrderService.getWorkOrders(params).subscribe({
        next: (response: any) => {
          // Fix: The API returns { data: [...], current_page: 1, total: 1 }
          // So response.data is the array of work orders
          this.workOrders = response.data.data || [];
          this.total = response.total || 0;
          this.currentPage = response.current_page || 1;
          this.perPage = response.per_page || 10;
          this.totalPages = response.last_page || 1;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('WorkOrderListComponent: Error loading work orders:', error);
          this.workOrders = [];
          this.isLoading = false;
        }
      })
    );
  }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  refreshWorkOrders(): void {
    this.loadWorkOrders(this.currentPage);
  }

  onFiltersChanged(filters: any): void {
    console.log('WorkOrderListComponent: Filters changed:', filters);
    // Reset to first page when filters change
    this.loadWorkOrders(1, filters);
  }

  createWorkOrder(): void {
    this.createWorkOrderRequested.emit();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadWorkOrders(page);
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    if (this.totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages around current page
      let start = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
      let end = Math.min(this.totalPages, start + maxVisiblePages - 1);

      // Adjust start if we're near the end
      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  // Helper methods for list view
  getStatusLabel(status: string): string {
    const statusMap: { [key: string]: string } = {
      'open': 'Open',
      'in_progress': 'In Progress',
      'completed': 'Completed',
      'cancelled': 'Cancelled',
      'pending': 'Pending'
    };
    return statusMap[status] || status;
  }

  getPriorityLabel(priority: string): string {
    const priorityMap: { [key: string]: string } = {
      'low': 'Low',
      'medium': 'Medium',
      'high': 'High',
      'critical': 'Critical'
    };
    return priorityMap[priority] || priority;
  }

  // Bulk operations methods
  toggleBulkMode(): void {
    this.isBulkMode = !this.isBulkMode;
    if (!this.isBulkMode) {
      this.selectedWorkOrders.clear();
      this.showBulkActions = false;
    }
  }

  toggleWorkOrderSelection(workOrderId: number): void {
    if (this.selectedWorkOrders.has(workOrderId)) {
      this.selectedWorkOrders.delete(workOrderId);
    } else {
      this.selectedWorkOrders.add(workOrderId);
    }
    this.showBulkActions = this.selectedWorkOrders.size > 0;
  }

  onCardSelectionChanged(event: { workOrderId: number; selected: boolean }): void {
    const { workOrderId, selected } = event;
    if (selected) {
      this.selectedWorkOrders.add(workOrderId);
    } else {
      this.selectedWorkOrders.delete(workOrderId);
    }
    this.showBulkActions = this.selectedWorkOrders.size > 0;
  }

  selectAllWorkOrders(): void {
    this.workOrders.forEach(wo => this.selectedWorkOrders.add(wo.id));
    this.showBulkActions = true;
  }

  deselectAllWorkOrders(): void {
    this.selectedWorkOrders.clear();
    this.showBulkActions = false;
  }

  getSelectedCount(): number {
    return this.selectedWorkOrders.size;
  }

  isAllSelected(): boolean {
    return this.workOrders.length > 0 && this.selectedWorkOrders.size === this.workOrders.length;
  }

  isPartiallySelected(): boolean {
    return this.selectedWorkOrders.size > 0 && this.selectedWorkOrders.size < this.workOrders.length;
  }

  toggleSelectAll(): void {
    if (this.isAllSelected()) {
      this.deselectAllWorkOrders();
    } else {
      this.selectAllWorkOrders();
    }
  }

  // Bulk status update
  updateBulkStatus(status: string): void {
    if (this.selectedWorkOrders.size === 0) return;

    const workOrderIds = Array.from(this.selectedWorkOrders);
    const updates = workOrderIds.map(id => ({
      id,
      status
    }));

    // Here you would call the bulk update API
    console.log('Bulk status update:', updates);
    
    // For now, just refresh the list
    this.refreshWorkOrders();
    this.selectedWorkOrders.clear();
    this.showBulkActions = false;
  }

  // Bulk priority update
  updateBulkPriority(priority: string): void {
    if (this.selectedWorkOrders.size === 0) return;

    const workOrderIds = Array.from(this.selectedWorkOrders);
    const updates = workOrderIds.map(id => ({
      id,
      priority
    }));

    // Here you would call the bulk update API
    console.log('Bulk priority update:', updates);
    
    // For now, just refresh the list
    this.refreshWorkOrders();
    this.selectedWorkOrders.clear();
    this.showBulkActions = false;
  }

  // Bulk assignment
  assignBulkWorkOrders(userId: number): void {
    if (this.selectedWorkOrders.size === 0) return;

    const workOrderIds = Array.from(this.selectedWorkOrders);
    const updates = workOrderIds.map(id => ({
      id,
      assigned_to: userId
    }));

    // Here you would call the bulk update API
    console.log('Bulk assignment update:', updates);
    
    // For now, just refresh the list
    this.refreshWorkOrders();
    this.selectedWorkOrders.clear();
    this.showBulkActions = false;
  }

  // Bulk delete
  deleteBulkWorkOrders(): void {
    if (this.selectedWorkOrders.size === 0) return;

    if (confirm(`Are you sure you want to delete ${this.selectedWorkOrders.size} work order(s)?`)) {
      const workOrderIds = Array.from(this.selectedWorkOrders);
      
      // Here you would call the bulk delete API
      console.log('Bulk delete:', workOrderIds);
      
      // For now, just refresh the list
      this.refreshWorkOrders();
      this.selectedWorkOrders.clear();
      this.showBulkActions = false;
    }
  }

  getAssigneeName(workOrder: any): string {
    if (workOrder.assigned_to) {
      if (typeof workOrder.assigned_to === 'object' && workOrder.assigned_to !== null) {
        const assignedTo = workOrder.assigned_to as User;
        const firstName = assignedTo.first_name || '';
        const lastName = assignedTo.last_name || '';
        return `${firstName} ${lastName}`.trim() || 'Unassigned';
      }
      return String(workOrder.assigned_to);
    }
    return 'Unassigned';
  }

  getAssetName(workOrder: any): string {
    if (workOrder.asset) {
      if (typeof workOrder.asset === 'object' && workOrder.asset !== null) {
        const asset = workOrder.asset as Asset;
        return asset.name || asset.asset_id || 'No Asset';
      }
      return String(workOrder.asset);
    }
    return 'No Asset';
  }

  getLocationName(workOrder: any): string {
    if (workOrder.location) {
      if (typeof workOrder.location === 'object' && workOrder.location !== null) {
        const location = workOrder.location as Location;
        return location.name || location.full_path || 'No Location';
      }
      return String(workOrder.location);
    }
    return 'No Location';
  }

  viewWorkOrderDetails(workOrder: any): void {
    // Navigate to work order details
    console.log('Viewing work order:', workOrder);
    // TODO: Implement navigation to work order details page
  }

  editWorkOrder(workOrder: any): void {
    // Open edit modal
    this.selectedWorkOrder = workOrder;
    this.isEditModalOpen = true;
  }

  deleteWorkOrder(workOrder: WorkOrder): void {
    if (!workOrder?.id) { return; }
    // Match asset flow: select the item and open confirmation modal
    this.selectedWorkOrders.clear();
    this.selectedWorkOrders.add(workOrder.id);
    this.showDeleteConfirmationModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteConfirmationModal = false;
  }

  deleteSelected(deletionReason?: string): void {
    // deletionReason is currently unused for work orders, but accepted to mirror asset delete API
    const ids = Array.from(this.selectedWorkOrders);
    if (ids.length === 0) {
      this.showDeleteConfirmationModal = false;
      return;
    }
    this.isLoading = true;
    let completed = 0;
    const finalize = () => {
      completed++;
      if (completed >= ids.length) {
        this.showDeleteConfirmationModal = false;
        this.selectedWorkOrders.clear();
        this.loadWorkOrders(this.currentPage);
      }
    };
    ids.forEach((id) => {
      this.subscription.add(
        this.workOrderService.deleteWorkOrder(id).subscribe({
          next: () => finalize(),
          error: (error) => {
            console.error('Failed to delete work order:', error);
            finalize();
          }
        })
      );
    });
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.selectedWorkOrder = null;
  }

  onWorkOrderUpdated(updatedWorkOrder: WorkOrder): void {
    // Update the work order in the list
    const index = this.workOrders.findIndex(wo => wo.id === updatedWorkOrder.id);
    if (index !== -1) {
      this.workOrders[index] = updatedWorkOrder;
    }

    // Close the modal
    this.closeEditModal();

    // Show success message (optional)
    console.log('Work order updated successfully:', updatedWorkOrder);
  }
}
