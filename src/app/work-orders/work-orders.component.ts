import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkOrderService, CreateWorkOrderRequest } from './services/work-order.service';
import { AssetService } from '../assets/services/asset.service';
import { LocationService } from '../locations/services/location.service';
import { TeamService } from '../teams/services/team.service';
import { Subscription } from 'rxjs';
import { WorkOrderListComponent } from './components/work-order-list/work-order-list.component';
import { WorkOrderStatsComponent } from './components/work-order-stats/work-order-stats.component';
import { WorkOrderAnalyticsComponent } from './components/work-order-analytics/work-order-analytics.component';

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
  
  private subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private workOrderService: WorkOrderService,
    private assetService: AssetService,
    private locationService: LocationService,
    private teamService: TeamService
  ) {
    this.workOrderForm = this.fb.group({
      title: ['', Validators.required],
      priority: ['medium'],
      due_date: [''],
      description: [''],
      asset_id: [''],
      location_id: [''],
      assigned_to: [''],
      estimated_hours: [''],
      notes: ['']
    });
  }

  ngOnInit(): void {
    console.log('WorkOrdersComponent: ngOnInit called');
    console.log('WorkOrdersComponent: Initial activeTab:', this.activeTab);
    this.loadSelectData();
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
        priority: this.workOrderForm.value.priority,
        due_date: this.workOrderForm.value.due_date || undefined,
        asset_id: this.workOrderForm.value.asset_id || undefined,
        location_id: this.workOrderForm.value.location_id || undefined,
        assigned_to: this.workOrderForm.value.assigned_to || undefined,
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
              priority: 'medium'
            });
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
  }
}
