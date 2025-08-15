import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { WorkOrder } from '../../services/work-order.service';

// Interfaces for nested objects
interface User {
  id: number;
  first_name: string;
  last_name: string;
  user_type: string;
  email: string;
}

interface Asset {
  id: number;
  name: string;
  asset_id: string;
}

interface Location {
  id: number;
  name: string;
  full_path: string;
}

@Component({
  selector: 'app-work-order-card',
  standalone: false,
  templateUrl: './work-order-card.component.html',
  styleUrls: ['./work-order-card.component.scss']
})
export class WorkOrderCardComponent {
  @Input() workOrder!: WorkOrder;
  @Input() isListView = false;
  @Input() showBulkSelection = false;
  @Input() isSelected = false;
  @Output() editRequested = new EventEmitter<WorkOrder>();
  @Output() selectionChanged = new EventEmitter<{ workOrderId: number; selected: boolean }>();

  constructor(private router: Router) {}

  onSelectionChange(event: any): void {
    const selected = event.target.checked;
    this.isSelected = selected;
    this.selectionChanged.emit({
      workOrderId: this.workOrder.id,
      selected: selected
    });
  }

  getStatusLabel(status: string): string {
    const statusMap: { [key: string]: string } = {
      'open': 'Open',
      'in_progress': 'In Progress',
      'completed': 'Completed',
      'cancelled': 'Cancelled',
      'pending': 'Pending'
    };
    return statusMap[status] || status;
  }

  getPriorityLabel(priority: string): string {
    const priorityMap: { [key: string]: string } = {
      'low': 'Low',
      'medium': 'Medium',
      'high': 'High',
      'critical': 'Critical',
      'urgent': 'Urgent'
    };
    return priorityMap[priority] || priority;
  }

  getAssigneeName(): string {
    if (this.workOrder.assigned_to) {
      if (typeof this.workOrder.assigned_to === 'object' && this.workOrder.assigned_to !== null) {
        const assignedTo = this.workOrder.assigned_to as User;
        const firstName = assignedTo.first_name || '';
        const lastName = assignedTo.last_name || '';
        return `${firstName} ${lastName}`.trim() || 'Unassigned';
      }
      return String(this.workOrder.assigned_to);
    }
    return 'Unassigned';
  }

  getAssetName(): string {
    if (this.workOrder.asset) {
      if (typeof this.workOrder.asset === 'object' && this.workOrder.asset !== null) {
        const asset = this.workOrder.asset as Asset;
        return asset.name || asset.asset_id || 'No Asset';
      }
      return String(this.workOrder.asset);
    }
    return 'No Asset';
  }

  getLocationName(): string {
    if (this.workOrder.location) {
      if (typeof this.workOrder.location === 'object' && this.workOrder.location !== null) {
        const location = this.workOrder.location as Location;
        return location.name || location.full_path || 'No Location';
      }
      return String(this.workOrder.location);
    }
    return 'No Location';
  }

  getCreatedBy(): string {
    if (this.workOrder.created_by) {
      if (typeof this.workOrder.created_by === 'object' && this.workOrder.created_by !== null) {
        const createdBy = this.workOrder.created_by as User;
        const firstName = createdBy.first_name || '';
        const lastName = createdBy.last_name || '';
        return `${firstName} ${lastName}`.trim() || 'Unknown';
      }
      return String(this.workOrder.created_by);
    }
    return 'Unknown';
  }

  viewDetails(): void {
    // Navigate to work order details
    this.router.navigate(['/work-orders', this.workOrder.id]);
  }

  editWorkOrder(): void {
    // Emit edit event to parent component
    this.editRequested.emit(this.workOrder);
  }
}
