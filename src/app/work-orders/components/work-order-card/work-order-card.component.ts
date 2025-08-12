import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkOrder } from '../../services/work-order.service';

@Component({
  selector: 'app-work-order-card',
  standalone: false,
  templateUrl: './work-order-card.component.html',
  styleUrls: ['./work-order-card.component.scss']
})
export class WorkOrderCardComponent {
  @Input() workOrder!: WorkOrder;

  constructor(private router: Router) {}

  getStatusLabel(status: WorkOrder['status']): string {
    const statusMap = {
      'open': 'Open',
      'in-progress': 'In Progress',
      'completed': 'Completed',
      'cancelled': 'Cancelled'
    };
    return statusMap[status] || status;
  }

  getPriorityLabel(priority: WorkOrder['priority']): string {
    const priorityMap = {
      'low': 'Low',
      'medium': 'Medium',
      'high': 'High',
      'critical': 'Critical'
    };
    return priorityMap[priority] || priority;
  }

  getAssigneeName(): string {
    if (this.workOrder.assigned_to) {
      // This would need to be implemented based on how you get user details
      return 'Assigned User';
    }
    return 'Unassigned';
  }

  getAssetName(): string {
    if (this.workOrder.asset) {
      return this.workOrder.asset.name || 'Asset';
    }
    return 'No Asset';
  }

  getLocationName(): string {
    if (this.workOrder.location) {
      return this.workOrder.location.name || 'Location';
    }
    return 'No Location';
  }

  getCreatedBy(): string {
    if (this.workOrder.created_by) {
      return `${this.workOrder.created_by.first_name} ${this.workOrder.created_by.last_name}`;
    }
    return 'Unknown';
  }

  viewDetails(): void {
    this.router.navigate(['/work-orders', this.workOrder.id]);
  }
}
