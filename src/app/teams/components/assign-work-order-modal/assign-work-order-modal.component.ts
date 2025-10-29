import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkOrderService } from '../../../work-orders/services/work-order.service';
import { GlobalDropdownComponent, DropdownOption } from '../../../shared/components/global-dropdown';

  @Component({
    selector: 'app-assign-work-order-modal',
    templateUrl: './assign-work-order-modal.component.html',
    styleUrls: ['./assign-work-order-modal.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, GlobalDropdownComponent]
  })
export class AssignWorkOrderModalComponent implements OnInit {
  @Input() teamMemberName: string = '';
  @Input() teamMemberId: number = 0;
  @Output() closed = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<{ work_order_id: number; due_date?: string; notes?: string }>();

  workOrders: DropdownOption[] = [];
  selectedWorkOrderId: number | null = null;
  selectedWorkOrder: DropdownOption | null = null;
  dueDate: string = '';
  notes: string = '';
  loading = false;
  errorMessage: string = '';

  constructor(private workOrderService: WorkOrderService) {}

  ngOnInit(): void {
    this.fetchWorkOrders();
  }

  fetchWorkOrders(): void {
    this.loading = true;
    this.errorMessage = '';
    
    // Fetch work orders that are not completed and not already assigned to this user
    this.workOrderService.getWorkOrders({ 
      page: 1, 
      per_page: 1000
      // Note: We'll filter by status on the frontend since the API doesn't support multiple status_id values
    }).subscribe({
      next: (response: any) => {
        console.log('Work orders response:', response);
        // Filter out work orders already assigned to this team member and completed work orders
        const availableWorkOrders = (response.data.data || []).filter((workOrder: any) => 
          workOrder.assigned_to !== this.teamMemberId &&
          workOrder.status?.slug !== 'completed' &&
          workOrder.status?.slug !== 'cancelled'
        );
        
        // Transform work orders to DropdownOption format
        this.workOrders = availableWorkOrders.map((workOrder: any) => ({
          id: workOrder.id,
          name: workOrder.title,
          description: workOrder.description || `Status: ${workOrder.status?.name || 'Unknown'}`,
          icon: 'work-order'
        }));
        console.log('Transformed work orders:', this.workOrders);
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error fetching work orders:', error);
        this.errorMessage = 'Failed to load work orders. Please try again.';
        this.loading = false;
      }
    });
  }

  submit(): void {
    if (!this.selectedWorkOrderId) {
      this.errorMessage = 'Please select a work order';
      return;
    }

    this.errorMessage = '';
    this.loading = true;
    
    // Call the backend API to assign the work order
    this.workOrderService.assignWorkOrder(this.selectedWorkOrderId, {
      user_id: this.teamMemberId,
      due_date: this.dueDate || undefined,
      notes: this.notes || undefined
    }).subscribe({
      next: (response: any) => {
        console.log('Work order assigned successfully:', response);
        this.loading = false;
        this.submitted.emit({ 
          work_order_id: this.selectedWorkOrderId!, 
          due_date: this.dueDate || undefined, 
          notes: this.notes || undefined 
        });
      },
      error: (error: any) => {
        console.error('Error assigning work order:', error);
        this.loading = false;
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Failed to assign work order. Please try again.';
        }
      }
    });
  }

  selectWorkOrder(workOrder: DropdownOption): void {
    this.selectedWorkOrder = workOrder;
    this.selectedWorkOrderId = workOrder.id;
    this.errorMessage = '';
  }

  onInputChange(): void {
    this.errorMessage = '';
  }

  close(): void {
    this.closed.emit();
  }
}


