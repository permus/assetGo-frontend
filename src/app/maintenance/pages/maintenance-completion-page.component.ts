import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../maintenance.service';
import { AssignedMaintenance, MaintenancePlanChecklist, MaintenanceChecklistResponse } from '../models';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-maintenance-completion-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './maintenance-completion-page.component.html',
  styleUrls: ['./maintenance-completion-page.component.scss']
})
export class MaintenanceCompletionPageComponent implements OnInit {
  loading = false;
  saving = false;
  assignment: AssignedMaintenance | null = null;
  assignmentId: number = 0;
  responses: Map<number, MaintenanceChecklistResponse> = new Map();
  
  // Form values for each checklist item (using object instead of Map for ngModel compatibility)
  itemValues: { [key: number]: any } = {};
  
  constructor(
    private service: MaintenanceService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.assignmentId = Number(this.route.snapshot.paramMap.get('assignmentId'));
    if (this.assignmentId) {
      this.loadAssignment();
    }
  }

  loadAssignment(): void {
    this.loading = true;
    this.service.getMyAssignments().subscribe({
      next: (response) => {
        this.assignment = response.data.find(a => a.id === this.assignmentId) || null;
        if (this.assignment) {
          this.initializeResponses();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading assignment:', error);
        this.loading = false;
      }
    });
  }

  initializeResponses(): void {
    if (!this.assignment) return;
    
    // Create a map of existing responses
    this.assignment.responses?.forEach(response => {
      this.responses.set(response.checklist_item_id, response);
      this.itemValues[response.checklist_item_id] = this.getInitialValue(response);
    });
    
    // Initialize empty values for items without responses
    this.assignment.checklist_items?.forEach(item => {
      if (!this.responses.has(item.id!)) {
        this.itemValues[item.id!] = this.getDefaultValue(item.type);
      }
    });
  }

  getInitialValue(response: MaintenanceChecklistResponse): any {
    switch (response.response_type) {
      case 'checkbox':
        return response.response_value?.checked || false;
      case 'text_input':
        return response.response_value?.text || '';
      case 'measurements':
        return response.response_value?.measurements || [];
      case 'pass_fail':
        return response.response_value?.result || null;
      case 'photo_capture':
        return response.photo_url || null;
      default:
        return null;
    }
  }

  getDefaultValue(type: string): any {
    switch (type) {
      case 'checkbox':
        return false;
      case 'text_input':
        return '';
      case 'measurements':
        return [{ value: '', unit: '' }];
      case 'pass_fail':
        return null;
      case 'photo_capture':
        return null;
      default:
        return null;
    }
  }

  saveResponse(item: MaintenancePlanChecklist): void {
    if (!this.assignment || !item.id) return;

    const value = this.itemValues[item.id];
    
    // Check if response should be deleted instead of saved
    const shouldDelete = this.shouldDeleteResponse(item.type, value);
    
    if (shouldDelete) {
      // Check if response exists to delete
      const existingResponse = this.responses.get(item.id);
      if (existingResponse && existingResponse.id) {
        this.deleteResponse(existingResponse.id, item.id);
      } else {
        // No response to delete, just remove from local state
        this.responses.delete(item.id);
      }
      return;
    }

    const responseValue = this.formatResponseValue(item.type, value);

    this.saving = true;
    this.service.saveChecklistResponse({
      schedule_maintenance_assigned_id: this.assignment.id,
      checklist_item_id: item.id,
      response_type: item.type,
      response_value: responseValue
    }).subscribe({
      next: (response) => {
        this.responses.set(item.id!, response.data);
        this.toastService.success('Response saved successfully');
        this.saving = false;
      },
      error: (error) => {
        console.error('Error saving response:', error);
        this.toastService.error('Failed to save response. Please try again.');
        this.saving = false;
      }
    });
  }

  shouldDeleteResponse(type: string, value: any): boolean {
    switch (type) {
      case 'checkbox':
        return value === false;
      case 'text_input':
        return !value || value.trim() === '';
      case 'pass_fail':
        return value === null || value === '';
      case 'measurements':
        return !value || value.length === 0 || value.every((m: any) => !m.value && !m.unit);
      default:
        return false;
    }
  }

  deleteResponse(responseId: number, itemId: number): void {
    this.saving = true;
    this.service.deleteChecklistResponse(responseId).subscribe({
      next: () => {
        this.responses.delete(itemId);
        this.toastService.info('Response removed');
        this.saving = false;
      },
      error: (error) => {
        console.error('Error deleting response:', error);
        this.toastService.error('Failed to remove response');
        this.saving = false;
      }
    });
  }

  formatResponseValue(type: string, value: any): any {
    switch (type) {
      case 'checkbox':
        return { checked: value };
      case 'text_input':
        return { text: value };
      case 'measurements':
        return { measurements: value };
      case 'pass_fail':
        return { result: value };
      default:
        return value;
    }
  }

  onFileSelected(event: Event, item: MaintenancePlanChecklist): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0 || !this.assignment || !item.id) return;

    const file = input.files[0];
    this.saving = true;

    this.service.uploadChecklistPhoto(this.assignment.id, item.id, file).subscribe({
      next: (response) => {
        this.responses.set(item.id!, response.data);
        this.itemValues[item.id!] = response.data.photo_url;
        this.toastService.success('Photo uploaded successfully');
        this.saving = false;
      },
      error: (error) => {
        console.error('Error uploading photo:', error);
        this.toastService.error('Failed to upload photo. Please try again.');
        this.saving = false;
      }
    });
  }

  isItemCompleted(itemId: number): boolean {
    return this.responses.has(itemId);
  }

  getCompletionPercentage(): number {
    const totalItems = this.assignment?.checklist_items?.length || 0;
    if (totalItems === 0) return 0;
    const completedItems = this.responses.size;
    return Math.round((completedItems / totalItems) * 100);
  }

  isAllRequiredCompleted(): boolean {
    if (!this.assignment?.checklist_items) return false;
    
    const requiredItems = this.assignment.checklist_items.filter(item => item.is_required);
    return requiredItems.every(item => this.isItemCompleted(item.id!));
  }

  goBack(): void {
    this.router.navigate(['/maintenance/my-assignments']);
  }

  addMeasurement(itemId: number): void {
    const measurements = this.itemValues[itemId] || [];
    measurements.push({ value: '', unit: '' });
    this.itemValues[itemId] = measurements;
  }

  removeMeasurement(itemId: number, index: number): void {
    const measurements = this.itemValues[itemId] || [];
    measurements.splice(index, 1);
    this.itemValues[itemId] = measurements;
  }
}

