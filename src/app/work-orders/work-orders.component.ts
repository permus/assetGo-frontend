import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkOrderService, CreateWorkOrderRequest } from './services/work-order.service';
import { AssetService } from '../assets/services/asset.service';
import { LocationService } from '../locations/services/location.service';
import { TeamService } from '../teams/services/team.service';
import { MetaWorkOrdersService } from '../core/services/meta-work-orders.service';
import { Subscription } from 'rxjs';
import { WorkOrderListComponent } from './components/work-order-list/work-order-list.component';
import { WorkOrderStatsComponent } from './components/work-order-stats/work-order-stats.component';
import { WorkOrderAnalyticsComponent } from './components/work-order-analytics/work-order-analytics.component';
import { MetaItem } from '../core/types/work-order.types';

@Component({
  selector: 'app-work-orders',
  standalone: false,
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss']
})
export class WorkOrdersComponent implements OnInit, OnDestroy {
  @ViewChild(WorkOrderListComponent) workOrderList!: WorkOrderListComponent;
  @ViewChild(WorkOrderStatsComponent) workOrderStats!: WorkOrderStatsComponent;
  @ViewChild(WorkOrderAnalyticsComponent) workOrderAnalytics!: WorkOrderAnalyticsComponent;

  activeTab: 'work-orders' | 'analytics' = 'work-orders';
  showCreateModal = false;
  workOrderForm: FormGroup;
  isLoading = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = '';
  fieldErrors: { [key: string]: string[] } = {};
  currentFilters: any = {};

  // Lists for select boxes
  assets: any[] = [];
  locations: any[] = [];
  teamMembers: any[] = [];

  // Metadata options for new standardized select boxes
  statusOptions: MetaItem[] = [];
  priorityOptions: MetaItem[] = [];
  categoryOptions: MetaItem[] = [];

  // Dropdown states for new standardized select boxes
  showStatusDropdown = false;
  showPriorityDropdown = false;
  showCategoryDropdown = false;

  // Selected values for new standardized select boxes
  selectedStatus: MetaItem | null = null;
  selectedPriority: MetaItem | null = null;
  selectedCategory: MetaItem | null = null;

  private subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private workOrderService: WorkOrderService,
    private assetService: AssetService,
    private locationService: LocationService,
    private teamService: TeamService,
    private metaWorkOrdersService: MetaWorkOrdersService
  ) {
    this.workOrderForm = this.fb.group({
      title: ['', Validators.required],
      status_id: [null, Validators.required],
      priority_id: [null, Validators.required],
      category_id: [null],
      due_date: [''],
      description: [''],
      asset_id: [''],
      location_id: [''],
      assigned_to: [''],
      team_id: [''],
      estimated_hours: [''],
      notes: ['']
    });
  }

  ngOnInit(): void {
    console.log('WorkOrdersComponent: ngOnInit called');
    console.log('WorkOrdersComponent: Initial activeTab:', this.activeTab);
    this.loadSelectData();
    this.loadMetadataOptions();
  }

  ngAfterViewInit(): void {
    console.log('WorkOrdersComponent: ngAfterViewInit called');
    console.log('WorkOrdersComponent: workOrderList component:', this.workOrderList);
    console.log('WorkOrdersComponent: workOrderStats component:', this.workOrderStats);
    console.log('WorkOrdersComponent: workOrderAnalytics component:', this.workOrderAnalytics);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadMetadataOptions(): void {
    // Ensure we don't reuse any stale cached responses after deploy/code changes
    this.metaWorkOrdersService.clearAllCache();

    // Load statuses
    this.subscription.add(
      this.metaWorkOrdersService.getStatus().subscribe({
        next: (statuses) => {
          this.statusOptions = statuses;
          // Set default status to first available
          if (statuses.length > 0) {
            const defaultStatus = statuses.find(s => s.slug === 'open') || statuses[0];
            this.selectedStatus = defaultStatus;
            this.workOrderForm.patchValue({ status_id: defaultStatus.id });
          }
        },
        error: (error) => {
          console.error('Error loading statuses:', error);
          this.statusOptions = [];
        }
      })
    );

    // Load priorities
    this.subscription.add(
      this.metaWorkOrdersService.getPriorities().subscribe({
        next: (priorities) => {
          this.priorityOptions = priorities;
          // Set default priority to medium
          if (priorities.length > 0) {
            const defaultPriority = priorities.find(p => p.slug === 'medium') || priorities[0];
            this.selectedPriority = defaultPriority;
            this.workOrderForm.patchValue({ priority_id: defaultPriority.id });
          }
        },
        error: (error) => {
          console.error('Error loading priorities:', error);
          this.priorityOptions = [];
        }
      })
    );

    // Load categories
    this.subscription.add(
      this.metaWorkOrdersService.getCategories().subscribe({
        next: (categories) => {
          this.categoryOptions = categories;
        },
        error: (error) => {
          console.error('Error loading categories:', error);
          this.categoryOptions = [];
        }
      })
    );
  }

  private loadSelectData(): void {
    // Load assets
    this.subscription.add(
      this.assetService.getAssets({ per_page: 1000 }).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.assets = response.data.assets || response.data || [];
          } else {
            this.assets = [];
            console.warn('Assets response format unexpected:', response);
          }
        },
        error: (error) => {
          console.error('Error loading assets:', error);
          this.assets = [];
        }
      })
    );

    // Load locations
    this.subscription.add(
      this.locationService.getLocations({ per_page: 1000 }).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.locations = response.data.locations || response.data || [];
          } else {
            this.locations = [];
            console.warn('Locations response format unexpected:', response);
          }
        },
        error: (error) => {
          console.error('Error loading locations:', error);
          this.locations = [];
        }
      })
    );

    // Load team members
    this.subscription.add(
      this.teamService.getTeamMembers().subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.teamMembers = response.data || [];
          } else {
            this.teamMembers = [];
            console.warn('Team members response format unexpected:', response);
          }
        },
        error: (error) => {
          console.error('Error loading team members:', error);
          this.teamMembers = [];
        }
      })
    );
  }

  // New standardized select box methods
  toggleStatusDropdown(): void {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
  }

  togglePriorityDropdown(): void {
    this.showPriorityDropdown = !this.showPriorityDropdown;
    this.showStatusDropdown = false;
    this.showCategoryDropdown = false;
  }

  toggleCategoryDropdown(): void {
    this.showCategoryDropdown = !this.showCategoryDropdown;
    this.showStatusDropdown = false;
    this.showPriorityDropdown = false;
  }

  selectStatus(status: MetaItem): void {
    this.selectedStatus = status;
    this.workOrderForm.patchValue({ status_id: status.id });
    this.showStatusDropdown = false;
  }

  selectPriority(priority: MetaItem): void {
    this.selectedPriority = priority;
    this.workOrderForm.patchValue({ priority_id: priority.id });
    this.showPriorityDropdown = false;
  }

  selectCategory(category: MetaItem | null): void {
    this.selectedCategory = category;
    this.workOrderForm.patchValue({ category_id: category?.id || null });
    this.showCategoryDropdown = false;
  }

  getStatusLabel(): string {
    return this.selectedStatus ? this.selectedStatus.name : 'Select status';
  }

  getPriorityLabel(): string {
    return this.selectedPriority ? this.selectedPriority.name : 'Select priority';
  }

  getCategoryLabel(): string {
    return this.selectedCategory ? this.selectedCategory.name : 'Select category (optional)';
  }

  getStatusValue(): number | null {
    return this.selectedStatus ? this.selectedStatus.id : null;
  }

  getPriorityValue(): number | null {
    return this.selectedPriority ? this.selectedPriority.id : null;
  }

  getCategoryValue(): number | null {
    return this.selectedCategory ? this.selectedCategory.id : null;
  }

  getStatusColor(slug: string): string {
    if (!slug) return '#6B7280';
    switch (slug) {
      case 'open': return '#10B981';
      case 'in-progress': return '#F59E0B';
      case 'completed': return '#3B82F6';
      case 'cancelled': return '#EF4444';
      case 'on-hold': return '#8B5CF6';
      default: return '#6B7280';
    }
  }

  getPriorityColor(priority: MetaItem): string {
    if (!priority) return '#6B7280';
    switch (priority.slug) {
      case 'low': return '#10B981';
      case 'medium': return '#F59E0B';
      case 'high': return '#F97316';
      case 'critical': return '#EF4444';
      case 'ppm': return '#8B5CF6';
      default: return '#6B7280';
    }
  }

  getStatusDescription(status: MetaItem): string {
    if (!status) return 'Select a status for this work order';
    switch (status.slug) {
      case 'open': return 'Work order is open and ready to be assigned';
      case 'in-progress': return 'Work order is currently being worked on';
      case 'completed': return 'Work order has been completed successfully';
      case 'cancelled': return 'Work order has been cancelled';
      case 'on-hold': return 'Work order is temporarily on hold';
      default: return status.name;
    }
  }

  getPriorityDescription(priority: MetaItem): string {
    if (!priority) return 'Select a priority level for this work order';
    switch (priority.slug) {
      case 'low': return 'Low priority - can be addressed when convenient';
      case 'medium': return 'Medium priority - should be addressed soon';
      case 'high': return 'High priority - needs immediate attention';
      case 'critical': return 'Critical priority - urgent, requires immediate action';
      case 'ppm': return 'Preventive maintenance - scheduled maintenance task';
      default: return priority.name;
    }
  }

  getCategoryDescription(category: MetaItem): string {
    // Map category slugs to descriptions
    switch (category.slug) {
      case 'preventive-maintenance': return 'Regular scheduled maintenance to prevent breakdowns';
      case 'corrective-maintenance': return 'Repair work to fix existing problems';
      case 'emergency-maintenance': return 'Urgent repairs requiring immediate attention';
      case 'inspection': return 'Regular inspections and assessments';
      case 'calibration': return 'Equipment calibration and adjustment';
      case 'cleaning': return 'Cleaning and general upkeep';
      case 'lubrication': return 'Lubrication and oil changes';
      case 'filter-replacement': return 'Filter and consumable replacement';
      case 'belt-replacement': return 'Belt and drive component replacement';
      case 'electrical': return 'Electrical system maintenance';
      case 'mechanical': return 'Mechanical system maintenance';
      case 'plumbing': return 'Plumbing system maintenance';
      case 'hvac': return 'HVAC system maintenance';
      default: return 'Maintenance category';
    }
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.status-dropdown') && !target.closest('.priority-dropdown') && !target.closest('.category-dropdown')) {
      this.showStatusDropdown = false;
      this.showPriorityDropdown = false;
      this.showCategoryDropdown = false;
    }
  }

  setActiveTab(tab: 'work-orders' | 'analytics') {
    console.log('WorkOrdersComponent: setActiveTab called with:', tab);
    this.activeTab = tab;
    console.log('WorkOrdersComponent: activeTab is now:', this.activeTab);

    // Refresh data when switching to analytics tab
    if (tab === 'analytics' && this.workOrderAnalytics) {
      this.workOrderAnalytics.refreshData();
    }
  }

  openCreateModal() {
    this.showCreateModal = true;
    this.resetMessages();
    this.loadSelectData(); // Refresh the select data when opening modal
    this.loadMetadataOptions(); // Refresh metadata options
  }

  closeCreateModal(event?: any) {
    if (event && event.target.classList.contains('modal-overlay')) {
      this.showCreateModal = false;
    } else if (!event) {
      this.showCreateModal = false;
    }
    this.resetMessages();
  }

  private resetMessages(): void {
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
    this.errorMessage = '';
    this.fieldErrors = {};
  }

  private showSuccess(): void {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }

  private showError(message: string, fieldErrors?: { [key: string]: string[] }): void {
    this.errorMessage = message;
    this.showErrorMessage = true;

    if (fieldErrors) {
      this.fieldErrors = fieldErrors;
    }

    setTimeout(() => {
      this.showErrorMessage = false;
      this.fieldErrors = {};
    }, 8000); // Show field errors longer
  }

  // Helper method to get field errors for display
  getFieldError(fieldName: string): string {
    return this.fieldErrors[fieldName] ? this.fieldErrors[fieldName].join(', ') : '';
  }

  // Helper method to check if a field has errors
  hasFieldError(fieldName: string): boolean {
    return !!this.fieldErrors[fieldName] && this.fieldErrors[fieldName].length > 0;
  }

  onFiltersChanged(filters: any): void {
    this.currentFilters = filters;
    console.log('Filters received in main component:', filters);

    // Here you would typically apply filters to the work order list
    // For now, we'll just log them
    if (this.workOrderList) {
      // You could add a method to apply filters to the list
      // this.workOrderList.applyFilters(filters);
    }
  }

  onSubmit() {
    if (this.workOrderForm.valid) {
      this.isLoading = true;
      this.resetMessages();

      const workOrderData: CreateWorkOrderRequest = {
        title: this.workOrderForm.value.title,
        description: this.workOrderForm.value.description || undefined,
        status_id: this.workOrderForm.value.status_id,
        priority_id: this.workOrderForm.value.priority_id,
        category_id: this.workOrderForm.value.category_id || undefined,
        due_date: this.workOrderForm.value.due_date || undefined,
        asset_id: this.workOrderForm.value.asset_id || undefined,
        location_id: this.workOrderForm.value.location_id || undefined,
        assigned_to: this.workOrderForm.value.assigned_to || undefined,
        team_id: this.workOrderForm.value.team_id || undefined,
        estimated_hours: this.workOrderForm.value.estimated_hours || undefined,
        notes: this.workOrderForm.value.notes || undefined
      };

      this.subscription.add(
        this.workOrderService.createWorkOrder(workOrderData).subscribe({
          next: (response) => {
            console.log('Work order created successfully:', response);
            this.showSuccess();
            this.closeCreateModal();
            this.workOrderForm.reset({
              status_id: this.selectedStatus?.id || null,
              priority_id: this.selectedPriority?.id || null,
              category_id: null
            });
            // Reset selected values
            this.selectedCategory = null;
            // Refresh the work order list and stats
            if (this.workOrderList) {
              this.workOrderList.refreshWorkOrders();
            }
            if (this.workOrderStats) {
              this.workOrderStats.loadStats();
            }
            // Refresh analytics if on analytics tab
            if (this.activeTab === 'analytics' && this.workOrderAnalytics) {
              this.workOrderAnalytics.refreshData();
            }
          },
          error: (error) => {
            console.error('Error creating work order:', error);

            // Handle different types of errors
            if (error.error?.errors) {
              // Backend validation errors
              const fieldErrors = error.error.errors;
              const message = error.error?.message || 'Please fix the validation errors below.';
              this.showError(message, fieldErrors);
            } else if (error.error?.message) {
              // General error message
              this.showError(error.error.message);
            } else {
              // Fallback error message
              this.showError('Failed to create work order. Please try again.');
            }
          },
          complete: () => {
            this.isLoading = false;
          }
        })
      );
    }
  }

  refreshAllData(): void {
    // Refresh work order list
    if (this.workOrderList) {
      this.workOrderList.refreshWorkOrders();
    }

    // Refresh stats
    if (this.workOrderStats) {
      this.workOrderStats.loadStats();
    }

    // Refresh analytics
    if (this.workOrderAnalytics) {
      this.workOrderAnalytics.refreshData();
    }

    // Refresh select data
    this.loadSelectData();
    this.loadMetadataOptions();
  }
}
