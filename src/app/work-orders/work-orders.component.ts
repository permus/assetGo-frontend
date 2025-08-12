import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkOrderService, CreateWorkOrderRequest } from './services/work-order.service';
import { Subscription } from 'rxjs';
import { WorkOrderListComponent } from './components/work-order-list/work-order-list.component';
import { WorkOrderStatsComponent } from './components/work-order-stats/work-order-stats.component';

@Component({
  selector: 'app-work-orders',
  standalone: false,
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss']
})
export class WorkOrdersComponent implements OnInit, OnDestroy {
  @ViewChild(WorkOrderListComponent) workOrderList!: WorkOrderListComponent;
  @ViewChild(WorkOrderStatsComponent) workOrderStats!: WorkOrderStatsComponent;
  
  activeTab: 'work-orders' | 'analytics' = 'work-orders';
  showCreateModal = false;
  workOrderForm: FormGroup;
  isLoading = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = '';
  currentFilters: any = {};
  private subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private workOrderService: WorkOrderService
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

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setActiveTab(tab: 'work-orders' | 'analytics') {
    this.activeTab = tab;
  }

  openCreateModal() {
    this.showCreateModal = true;
    this.resetMessages();
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
  }

  private showSuccess(): void {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }

  private showError(message: string): void {
    this.errorMessage = message;
    this.showErrorMessage = true;
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 5000);
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
          },
          error: (error) => {
            console.error('Error creating work order:', error);
            const message = error.error?.message || 'Failed to create work order. Please try again.';
            this.showError(message);
          },
          complete: () => {
            this.isLoading = false;
          }
        })
      );
    }
  }
}
