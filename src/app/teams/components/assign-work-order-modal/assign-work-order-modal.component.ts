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
    
    this.workOrderService.getWorkOrders({ page: 1, per_page: 1000 }).subscribe({
      next: (response: any) => {
        // Transform work orders to DropdownOption format
        this.workOrders = (response.data || []).map((workOrder: any) => ({
          id: workOrder.id,
          name: workOrder.title,
          description: workOrder.description || `Status: ${workOrder.status_id}`,
          icon: 'work-order'
        }));
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error fetching work orders:', error);
        this.errorMessage = 'Failed to load work orders';
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
    
    // Call the backend API to assign the work order
    this.workOrderService.assignWorkOrder(this.selectedWorkOrderId, {
      user_id: this.teamMemberId,
      due_date: this.dueDate || undefined,
      notes: this.notes || undefined
    }).subscribe({
      next: (response: any) => {
        this.submitted.emit({ 
          work_order_id: this.selectedWorkOrderId!, 
          due_date: this.dueDate || undefined, 
          notes: this.notes || undefined 
        });
      },
      error: (error: any) => {
        console.error('Error assigning work order:', error);
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


