import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkOrderService, CreateWorkOrderRequest } from './services/work-order.service';
import { AssetService } from '../assets/services/asset.service';
import { LocationService } from '../locations/services/location.service';
import { TeamService } from '../teams/services/team.service';
import { MetaWorkOrdersService } from '../core/services/meta-work-orders.service';
import { ToastService } from '../core/services/toast.service';
import { Subscription } from 'rxjs';
import { WorkOrderListComponent } from './components/work-order-list/work-order-list.component';
import { WorkOrderStatsComponent } from './components/work-order-stats/work-order-stats.component';
import { WorkOrderAnalyticsComponent } from './components/work-order-analytics/work-order-analytics.component';
import { MetaItem } from '../core/types/work-order.types';
import { DropdownOption } from '../shared/components/global-dropdown';

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

  // Dropdown options for global dropdown component
  statusDropdownOptions: DropdownOption[] = [];
  priorityDropdownOptions: DropdownOption[] = [];
  categoryDropdownOptions: DropdownOption[] = [];
  typeDropdownOptions: DropdownOption[] = [
    { id: 'ppm', name: 'PPM (Planned Preventive Maintenance)', description: 'Planned Preventive Maintenance - scheduled maintenance to prevent issues' },
    { id: 'corrective', name: 'Corrective', description: 'Corrective - fixing issues that have been identified' },
    { id: 'predictive', name: 'Predictive', description: 'Predictive - maintenance based on data and predictions' },
    { id: 'reactive', name: 'Reactive', description: 'Reactive - responding to unexpected failures or issues' }
  ];

  // Selected values for global dropdown component
  selectedStatusOption: DropdownOption | null = null;
  selectedPriorityOption: DropdownOption | null = null;
  selectedCategoryOption: DropdownOption | null = null;
  selectedTypeOption: DropdownOption | null = null;

  private subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private workOrderService: WorkOrderService,
    private assetService: AssetService,
    private locationService: LocationService,
    private teamService: TeamService,
    private metaWorkOrdersService: MetaWorkOrdersService,
    private toastService: ToastService
  ) {
    this.workOrderForm = this.fb.group({
      title: ['', Validators.required],
      status_id: [null, Validators.required],
      priority_id: [null, Validators.required],
      category_id: [null],
      type: ['ppm', Validators.required],
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
          this.statusDropdownOptions = statuses.map(s => this.convertStatusToDropdownOption(s));
          // Set default status to first available
          if (statuses.length > 0) {
            const defaultStatus = statuses.find(s => s.slug === 'open') || statuses[0];
            this.selectedStatusOption = this.convertStatusToDropdownOption(defaultStatus);
            this.workOrderForm.patchValue({ status_id: defaultStatus.id });
          }
        },
        error: (error) => {
          console.error('Error loading statuses:', error);
          this.toastService.error('Failed to load status options');
          this.statusOptions = [];
          this.statusDropdownOptions = [];
        }
      })
    );

    // Load priorities
    this.subscription.add(
      this.metaWorkOrdersService.getPriorities().subscribe({
        next: (priorities) => {
          this.priorityOptions = priorities;
          this.priorityDropdownOptions = priorities.map(p => this.convertPriorityToDropdownOption(p));
          // Set default priority to medium
          if (priorities.length > 0) {
            const defaultPriority = priorities.find(p => p.slug === 'medium') || priorities[0];
            this.selectedPriorityOption = this.convertPriorityToDropdownOption(defaultPriority);
            this.workOrderForm.patchValue({ priority_id: defaultPriority.id });
          }
        },
        error: (error) => {
          console.error('Error loading priorities:', error);
          this.toastService.error('Failed to load priority options');
          this.priorityOptions = [];
          this.priorityDropdownOptions = [];
        }
      })
    );

    // Load categories
    this.subscription.add(
      this.metaWorkOrdersService.getCategories().subscribe({
        next: (categories) => {
          this.categoryOptions = categories;
          // Add "No Category" option at the beginning
          this.categoryDropdownOptions = [
            { id: null, name: 'No Category', description: 'Work order without specific category' },
            ...categories.map(c => this.convertCategoryToDropdownOption(c))
          ];
        },
        error: (error) => {
          console.error('Error loading categories:', error);
          this.toastService.error('Failed to load category options');
          this.categoryOptions = [];
          this.categoryDropdownOptions = [
            { id: null, name: 'No Category', description: 'Work order without specific category' }
          ];
        }
      })
    );

    // Set default type to 'ppm'
    const defaultType = this.typeDropdownOptions.find(t => t.id === 'ppm');
    if (defaultType) {
      this.selectedTypeOption = defaultType;
      this.workOrderForm.patchValue({ type: 'ppm' });
    }
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
      this.teamService.getTeamMembersFlat(1000).subscribe({
        next: (items) => {
          this.teamMembers = items || [];
        },
        error: (error) => {
          console.error('Error loading team members:', error);
          this.teamMembers = [];
        }
      })
    );
  }

  // Helper methods to convert MetaItem to DropdownOption
  convertStatusToDropdownOption(status: MetaItem): DropdownOption {
    return {
      id: status.id,
      name: status.name,
      description: this.getStatusDescription(status)
    };
  }

  convertPriorityToDropdownOption(priority: MetaItem): DropdownOption {
    return {
      id: priority.id,
      name: priority.name,
      description: this.getPriorityDescription(priority)
    };
  }

  convertCategoryToDropdownOption(category: MetaItem): DropdownOption {
    return {
      id: category.id,
      name: category.name,
      description: this.getCategoryDescription(category)
    };
  }

  // Selection methods for global dropdown component
  selectStatus(option: DropdownOption | null): void {
    this.selectedStatusOption = option;
    this.workOrderForm.patchValue({ status_id: option?.id || null });
  }

  selectPriority(option: DropdownOption | null): void {
    this.selectedPriorityOption = option;
    this.workOrderForm.patchValue({ priority_id: option?.id || null });
  }

  selectCategory(option: DropdownOption | null): void {
    this.selectedCategoryOption = option;
    this.workOrderForm.patchValue({ category_id: option?.id || null });
  }

  selectType(option: DropdownOption | null): void {
    this.selectedTypeOption = option;
    this.workOrderForm.patchValue({ type: option?.id || '' });
  }


  getTypeColor(type: string): string {
    if (!type) return '#6B7280';
    switch (type) {
      case 'ppm': return '#3B82F6';      // Blue
      case 'corrective': return '#F59E0B';  // Amber
      case 'predictive': return '#10B981';  // Green
      case 'reactive': return '#EF4444';    // Red
      default: return '#6B7280';
    }
  }

  getTypeDescription(type: string): string {
    if (!type) return 'Select a work order type';
    switch (type) {
      case 'ppm': return 'Planned Preventive Maintenance - scheduled maintenance to prevent issues';
      case 'corrective': return 'Corrective - fixing issues that have been identified';
      case 'predictive': return 'Predictive - maintenance based on data and predictions';
      case 'reactive': return 'Reactive - responding to unexpected failures or issues';
      default: return 'Work order type';
    }
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
        type: this.workOrderForm.value.type as 'ppm' | 'corrective' | 'predictive' | 'reactive',
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
            this.toastService.success('Work order created successfully');
            this.closeCreateModal();
            // Reset form with default values
            this.workOrderForm.reset({
              status_id: this.selectedStatusOption?.id || null,
              priority_id: this.selectedPriorityOption?.id || null,
              category_id: null,
              type: this.selectedTypeOption?.id || 'ppm'
            });

            this.selectedCategoryOption = null;

            if (this.workOrderList) {
              this.workOrderList.refreshWorkOrders();
            }
            if (this.workOrderStats) {
              this.workOrderStats.loadStats();
            }
            if (this.activeTab === 'analytics' && this.workOrderAnalytics) {
              this.workOrderAnalytics.refreshData();
            }
          },
          error: (error) => {
            this.isLoading = false;
            if (error.error?.errors) {
              const fieldErrors = error.error.errors;
              const message = error.error?.message || 'Please fix the validation errors below.';
              this.showError(message, fieldErrors);
              this.toastService.error(message);
            } else if (error.error?.message) {
              this.showError(error.error.message);
              this.toastService.error(error.error.message);
            } else {
              const message = 'Failed to create work order. Please try again.';
              this.showError(message);
              this.toastService.error(message);
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


  onAssetChange(event: Event) {
    const selectedId = (event.target as HTMLSelectElement).value;
    const selectedAsset = this.assets.find(a => a.id === +selectedId);
    this.workOrderForm.patchValue({ location_id: selectedAsset?.location?.id || '' });
  }

}
