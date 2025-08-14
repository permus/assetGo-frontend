import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkOrderService, WorkOrder } from '../../services/work-order.service';
import { AssetService } from '../../../assets/services/asset.service';
import { LocationService } from '../../../locations/services/location.service';
import { TeamService } from '../../../teams/services/team.service';
import { AuthService } from '../../../core/services/auth.service';
import { firstValueFrom } from 'rxjs';

// Interfaces for dropdown data
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
  slug?: string;
  address?: string;
  description?: string;
  location_type_id: number;
  parent_id?: number;
  company_id: number;
  user_id: number;
  hierarchy_level: number;
  latitude?: number;
  longitude?: number;
  qr_code_path?: string;
  qr_code_url?: string;
  quick_chart_qr_url?: string;
  created_at: string;
  updated_at: string;
  type: any;
  parent?: Location;
  children?: Location[];
  creator?: any;
  asset_summary?: {
    asset_count: number;
    total_value: number;
  };
}

interface Team {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role_id?: number;
  role?: {
    id: number;
    name: string;
    description?: string;
  };
  hourly_rate?: number;
  user_type: 'team';
  company_id: number;
  created_by: number;
  email_verified_at?: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-edit-work-order-modal',
  standalone: false,
  templateUrl: './edit-work-order-modal.component.html',
  styleUrls: ['./edit-work-order-modal.component.scss']
})
export class EditWorkOrderModalComponent implements OnInit {
  @Input() workOrder: WorkOrder | null = null;
  @Input() isOpen = false;
  @Output() modalClosed = new EventEmitter<void>();
  @Output() workOrderUpdated = new EventEmitter<WorkOrder>();

  editForm!: FormGroup;
  isSubmitting = false;

  // Dropdown data
  users: User[] = [];
  assets: Asset[] = [];
  locations: Location[] = [];
  teams: Team[] = [];

  constructor(
    private fb: FormBuilder,
    private workOrderService: WorkOrderService,
    private assetService: AssetService,
    private locationService: LocationService,
    private teamService: TeamService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log('EditWorkOrderModalComponent: ngOnInit called');
    this.initForm();
    this.loadDropdownData();
    if (this.workOrder) {
      console.log('EditWorkOrderModalComponent: WorkOrder found, populating form');
      this.populateForm();
    } else {
      console.log('EditWorkOrderModalComponent: No WorkOrder provided');
    }
  }

  ngDoCheck(): void {
    // Check if workOrder input has changed and repopulate form if needed
    if (this.workOrder && this.editForm && !this.editForm.dirty) {
      this.populateForm();
    }
  }

  ngOnChanges(): void {
    console.log('EditWorkOrderModalComponent: ngOnChanges called, isOpen:', this.isOpen, 'workOrder:', !!this.workOrder);
    
    if (this.workOrder && this.editForm) {
      this.populateForm();
    }
    
    // Reset form when modal is opened/closed
    if (this.isOpen && this.workOrder) {
      console.log('EditWorkOrderModalComponent: Modal opened, resetting and populating form');
      this.resetForm();
      this.populateForm();
    }
  }

  private resetForm(): void {
    if (this.editForm) {
      this.editForm.reset();
      this.editForm.markAsUntouched();
      this.editForm.markAsPristine();
    }
  }

  private initForm(): void {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      priority: ['', Validators.required],
      due_date: [''],
      description: ['', [Validators.maxLength(1000)]],
      estimated_hours: ['', [Validators.min(0)]],
      notes: [''],
      asset_id: [''],
      location_id: [''],
      assigned_to: ['']
    });
    
    console.log('EditWorkOrderModalComponent: Form initialized:', {
      formExists: !!this.editForm,
      formValid: this.editForm.valid,
      formStatus: this.editForm.status,
      formErrors: this.editForm.errors,
      formValues: this.editForm.value
    });
  }

  private populateForm(): void {
    if (!this.workOrder) {
      console.log('EditWorkOrderModalComponent: No workOrder to populate form with');
      return;
    }

    console.log('EditWorkOrderModalComponent: Populating form with workOrder:', this.workOrder);

    // Convert date strings to Date objects for the form
    const dueDate = this.workOrder.due_date ? new Date(this.workOrder.due_date).toISOString().split('T')[0] : '';

    const formValues = {
      title: this.workOrder.title || '',
      priority: this.workOrder.priority || '',
      due_date: dueDate,
      description: this.workOrder.description || '',
      estimated_hours: this.workOrder.estimated_hours || '',
      notes: this.workOrder.notes || '',
      asset_id: this.getFieldValue(this.workOrder.asset),
      location_id: this.getFieldValue(this.workOrder.location),
      assigned_to: this.getFieldValue(this.workOrder.assigned_to)
    };

    console.log('EditWorkOrderModalComponent: Form values to set:', formValues);
    this.editForm.patchValue(formValues);
    console.log('EditWorkOrderModalComponent: Form populated successfully');
    
    // Check form state after population
    console.log('EditWorkOrderModalComponent: Form state after population:', {
      formValid: this.editForm.valid,
      formStatus: this.editForm.status,
      formErrors: this.editForm.errors,
      formValues: this.editForm.value,
      titleControl: {
        value: this.editForm.get('title')?.value,
        valid: this.editForm.get('title')?.valid,
        errors: this.editForm.get('title')?.errors
      },
      priorityControl: {
        value: this.editForm.get('priority')?.value,
        valid: this.editForm.get('priority')?.valid,
        errors: this.editForm.get('priority')?.errors
      }
    });
  }

  private getFieldValue(field: any): any {
    if (!field) return '';
    
    // If it's an object with an id property, return the id
    if (typeof field === 'object' && field !== null && 'id' in field) {
      return field.id;
    }
    
    // If it's a primitive value (number, string), return it as is
    if (typeof field === 'number' || typeof field === 'string') {
      return field;
    }
    
    // Default fallback
    return '';
  }

  private async loadDropdownData(): Promise<void> {
    try {
      // Load users (team members for assignment)
      const teamsResponse = await firstValueFrom(this.teamService.getTeamMembers());
      this.users = teamsResponse?.data || [];
      
      // Load assets
      const assetsResponse = await firstValueFrom(this.assetService.getAssets({ per_page: 100 }));
      this.assets = assetsResponse?.data?.assets || assetsResponse?.data || [];

      // Load locations
      const locationsResponse = await firstValueFrom(this.locationService.getLocations({ per_page: 100 }));
      this.locations = locationsResponse?.data?.locations || [];

      // Load team members (teams)
      this.teams = teamsResponse?.data || [];

    } catch (error) {
      console.error('Error loading dropdown data:', error);
    }
  }

  // Form validation helpers
  isFieldInvalid(fieldName: string): boolean {
    const field = this.editForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.editForm.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.errors['required']) {
      return `${this.getFieldLabel(fieldName)} is required`;
    }
    if (field.errors['minlength']) {
      return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters`;
    }
    if (field.errors['maxlength']) {
      return `${this.getFieldLabel(fieldName)} must not exceed ${field.errors['maxlength'].requiredLength} characters`;
    }
    if (field.errors['min']) {
      return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['min'].min}`;
    }

    return 'Invalid value';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      title: 'Title',
      priority: 'Priority',
      due_date: 'Due Date',
      description: 'Description',
      estimated_hours: 'Estimated Hours',
      notes: 'Notes',
      asset_id: 'Asset',
      location_id: 'Location',
      assigned_to: 'Assigned To'
    };
    return labels[fieldName] || fieldName;
  }

  hasFieldError(fieldName: string): boolean {
    return this.isFieldInvalid(fieldName);
  }

  isFormModified(): boolean {
    return this.editForm ? this.editForm.dirty : false;
  }

  canSubmit(): boolean {
    const isValid = this.editForm ? this.editForm.valid : false;
    const notSubmitting = !this.isSubmitting;
    const result = isValid && notSubmitting;
    
    console.log('EditWorkOrderModalComponent: canSubmit check:', {
      formExists: !!this.editForm,
      formValid: isValid,
      notSubmitting: notSubmitting,
      result: result,
      formErrors: this.editForm?.errors,
      formStatus: this.editForm?.status
    });
    
    return result;
  }

  async onSubmit(): Promise<void> {
    console.log('EditWorkOrderModalComponent: onSubmit called');
    console.log('EditWorkOrderModalComponent: Form valid:', this.editForm.valid);
    console.log('EditWorkOrderModalComponent: Form invalid:', this.editForm.invalid);
    console.log('EditWorkOrderModalComponent: isSubmitting:', this.isSubmitting);
    console.log('EditWorkOrderModalComponent: workOrder:', !!this.workOrder);
    
    if (this.editForm.invalid || this.isSubmitting || !this.workOrder) {
      console.log('EditWorkOrderModalComponent: Form submission blocked');
      return;
    }

    console.log('EditWorkOrderModalComponent: Starting form submission');
    this.isSubmitting = true;

    try {
      const formData = this.editForm.value;
      console.log('EditWorkOrderModalComponent: Form data:', formData);
      
      // Prepare the update payload
      const updatePayload = {
        title: formData.title,
        priority: formData.priority,
        due_date: formData.due_date || null,
        description: formData.description || null,
        estimated_hours: formData.estimated_hours || null,
        notes: formData.notes || null,
        asset_id: formData.asset_id || null,
        location_id: formData.location_id || null,
        assigned_to: formData.assigned_to || null
      };
      
      console.log('EditWorkOrderModalComponent: Update payload:', updatePayload);

      // Update the work order
      const updatedWorkOrder = await firstValueFrom(this.workOrderService.updateWorkOrder(this.workOrder.id, updatePayload));
      
      if (updatedWorkOrder) {
        this.workOrderUpdated.emit(updatedWorkOrder);
        this.closeModal();
      }
    } catch (error: any) {
      console.error('Error updating work order:', error);
      
      // Handle specific error cases
      if (error.error && error.error.message) {
        // Show error message to user
        console.error('API Error:', error.error.message);
      } else if (error.message) {
        console.error('Network Error:', error.message);
      }
    } finally {
      this.isSubmitting = false;
    }
  }

  closeModal(): void {
    // Check if form has unsaved changes
    if (this.isFormModified()) {
      if (confirm('You have unsaved changes. Are you sure you want to close?')) {
        this.resetForm();
        this.modalClosed.emit();
      }
    } else {
      this.modalClosed.emit();
    }
  }

  // Prevent modal from closing when clicking inside the modal content
  onModalContentClick(event: Event): void {
    event.stopPropagation();
  }
}
