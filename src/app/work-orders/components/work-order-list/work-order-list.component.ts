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
    
    this.subscription.add(
      this.workOrderService.getWorkOrders().subscribe({
        next: (response: WorkOrderListResponse) => {
          this.workOrders = response.data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading work orders:', error);
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
