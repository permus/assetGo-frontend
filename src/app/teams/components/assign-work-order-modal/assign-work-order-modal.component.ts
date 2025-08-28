import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkOrderService } from '../../../work-orders/services/work-order.service';

@Component({
  selector: 'app-assign-work-order-modal',
  templateUrl: './assign-work-order-modal.component.html',
  styleUrls: ['./assign-work-order-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AssignWorkOrderModalComponent implements OnInit {
  @Input() teamMemberName: string = '';
  @Input() teamMemberId: number = 0;
  @Output() closed = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<{ work_order_id: number; due_date?: string; notes?: string }>();

  workOrders: any[] = [];
  selectedWorkOrderId: number | null = null;
  selectedWorkOrder: any = null;
  dueDate: string = '';
  notes: string = '';
  loading = false;
  errorMessage: string = '';
  
  // Dropdown state
  showWorkOrderDropdown = false;

  constructor(private workOrderService: WorkOrderService) {}

  ngOnInit(): void {
    this.fetchWorkOrders();
  }

  fetchWorkOrders(): void {
    this.loading = true;
    
    this.workOrderService.getWorkOrders({ page: 1, per_page: 1000 }).subscribe({
      next: (response: any) => {
        this.workOrders = response.data || [];
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

  toggleWorkOrderDropdown(): void {
    this.showWorkOrderDropdown = !this.showWorkOrderDropdown;
  }

  selectWorkOrder(workOrder: any): void {
    this.selectedWorkOrder = workOrder;
    this.selectedWorkOrderId = workOrder.id;
    this.showWorkOrderDropdown = false;
    this.errorMessage = '';
  }

  onInputChange(): void {
    this.errorMessage = '';
  }

  close(): void {
    this.closed.emit();
  }

  @HostListener('document:click')
  closeOnOutsideClick(): void {
    this.showWorkOrderDropdown = false;
  }
}


