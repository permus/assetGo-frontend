import {Component, OnInit, OnDestroy, Output, EventEmitter, inject} from '@angular/core';
import {WorkOrderService, WorkOrder,} from '../../services';
import {Subscription} from 'rxjs';
import {PaginationData} from '../../../shared/components/pagination/pagination.component';
import {Router} from '@angular/router';
import {PreferencesService} from '../../../core/services/preferences.service';
import {ToastService} from '../../../core/services/toast.service';

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
  private prefsService = inject(PreferencesService);

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


  // Pagination
  pagination: PaginationData = {
    current_page: 1,
    last_page: 1,
    per_page: 20,
    total: 0,
    from: 0,
    to: 0
  };

  // Current filters to preserve during pagination
  currentFilters: any = {};


  // Bulk operations properties
  selectedWorkOrders: Set<number> = new Set();
  showBulkActions = false;
  // Delete modal state (align with Asset delete flow)
  showDeleteConfirmationModal = false;

  // Math object for template access
  Math = Math;

  private subscription = new Subscription();

  constructor(
    private workOrderService: WorkOrderService, 
    private router: Router,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    // Apply items per page from user preferences
    const itemsPerPage = this.prefsService.get('items_per_page') || 20;
    this.perPage = itemsPerPage;
    this.pagination.per_page = itemsPerPage;
    
    this.loadWorkOrders(1, this.currentFilters);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
      if (filters.type) {
        params.type = filters.type;
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
          let data = response.data;
          this.workOrders = data.data || [];
          this.total = data.total || 0;
          this.currentPage = data.current_page || 1;
          this.perPage = data.per_page || 10;
          this.totalPages = data.last_page || 1;
          this.pagination = {
            current_page: this.currentPage,
            last_page: this.totalPages,
            per_page: this.perPage,
            total: this.total,
            from: (this.currentPage - 1) * this.perPage + 1,
            to: Math.min(this.currentPage * this.perPage, this.total)
          };
          this.isLoading = false;
        },
        error: (error) => {
          console.error('WorkOrderListComponent: Error loading work orders:', error);
          this.toastService.error('Failed to load work orders');
          this.workOrders = [];
          this.isLoading = false;
        },
      })
    );
  }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  refreshWorkOrders(): void {
    this.loadWorkOrders(this.currentPage, this.currentFilters);
  }

  onFiltersChanged(filters: any): void {
    console.log('WorkOrderListComponent: Filters changed:', filters);
    // Store current filters for pagination
    this.currentFilters = { ...filters };
    // Reset to first page when filters change
    this.loadWorkOrders(1, filters);
  }

  createWorkOrder(): void {
    this.createWorkOrderRequested.emit();
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

  getTypeLabel(type: string): string {
    const typeMap: { [key: string]: string } = {
      'ppm': 'PPM',
      'corrective': 'Corrective',
      'predictive': 'Predictive',
      'reactive': 'Reactive'
    };
    return typeMap[type] || type;
  }

  onCardSelectionChanged(event: { workOrderId: number; selected: boolean }): void {
    const {workOrderId, selected} = event;
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
  getAssigneeName(workOrder: any): string {
    if (workOrder.assigned_to) {
      if (typeof workOrder.assigned_to === 'object') {
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
      if (typeof workOrder.asset === 'object') {
        const asset = workOrder.asset as Asset;
        return asset.name || asset.asset_id || 'No Asset';
      }
      return String(workOrder.asset);
    }
    return 'No Asset';
  }

  getLocationName(workOrder: any): string {
    if (workOrder.location) {
      if (typeof workOrder.location === 'object') {
        const location = workOrder.location as Location;
        return location.name || location.full_path || 'No Location';
      }
      return String(workOrder.location);
    }
    return 'No Location';
  }

  viewWorkOrderDetails(workOrder: any): void {
    // Navigate to work order details
    this.router.navigate(['/work-orders', workOrder.id]);
  }

  editWorkOrder(workOrder: any): void {
    // Open edit modal
    this.selectedWorkOrder = workOrder;
    this.isEditModalOpen = true;
  }

  deleteWorkOrder(workOrder: WorkOrder): void {
    if (!workOrder?.id) {
      return;
    }
    // Match asset flow: select the item and open confirmation modal
    this.selectedWorkOrders.clear();
    this.selectedWorkOrders.add(workOrder.id);
    this.showDeleteConfirmationModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteConfirmationModal = false;
  }

  openDeleteModalForSelected(): void {
    if (this.selectedWorkOrders.size === 0) {
      return;
    }
    this.showDeleteConfirmationModal = true;
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
        this.loadWorkOrders(this.currentPage, this.currentFilters);
      }
    };
    ids.forEach((id) => {
      this.subscription.add(
        this.workOrderService.deleteWorkOrder(id).subscribe({
          next: () => {
            this.toastService.success('Work order deleted successfully');
            finalize();
          },
          error: (error) => {
            console.error('Failed to delete work order:', error);
            this.toastService.error('Failed to delete work order');
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

    // Show success message
    this.toastService.success('Work order updated successfully');
    console.log('Work order updated successfully:', updatedWorkOrder);
  }


  /**
   * Handle pagination page change
   */
  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadWorkOrders(page, this.currentFilters);
  }

  /**
   * Handle pagination per page change
   */
  onPerPageChange(perPage: number): void {
    this.perPage = perPage;
    this.currentPage = 1; // Reset to first page when changing per page
    this.loadWorkOrders(1, this.currentFilters);
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }

}
