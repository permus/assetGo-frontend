import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkOrderService, WorkOrder, WorkOrderListResponse } from '../../services/work-order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-order-list',
  standalone: false,
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.scss']
})
export class WorkOrderListComponent implements OnInit, OnDestroy {
  workOrders: WorkOrder[] = [];
  viewMode: 'grid' | 'list' = 'grid';
  isLoading = true;
  private subscription = new Subscription();

  constructor(private workOrderService: WorkOrderService) {}

  ngOnInit(): void {
    this.loadWorkOrders();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadWorkOrders(): void {
    this.isLoading = true;
    console.log('WorkOrderListComponent: Starting to load work orders...');
    
    this.subscription.add(
      this.workOrderService.getWorkOrders().subscribe({
        next: (response: WorkOrderListResponse) => {
          console.log('WorkOrderListComponent: Received response:', response);
          console.log('WorkOrderListComponent: Response data type:', typeof response.data);
          console.log('WorkOrderListComponent: Response data length:', response.data?.length);
          
          // Fix: The API returns { data: [...], current_page: 1, total: 1 }
          // So response.data is the array of work orders
          this.workOrders = response.data || [];
          console.log('WorkOrderListComponent: Work orders loaded:', this.workOrders);
          console.log('WorkOrderListComponent: Final workOrders array:', this.workOrders);
          console.log('WorkOrderListComponent: Array length after assignment:', this.workOrders.length);
          
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
    this.loadWorkOrders();
  }
}
