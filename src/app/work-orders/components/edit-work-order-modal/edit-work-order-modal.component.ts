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

  // Getter to safely access the form
  get form(): FormGroup | null {
    return this.editForm || null;
  }

  // Check if the form is ready to use
  get isFormReady(): boolean {
    return !!(this.editForm && typeof this.editForm.patchValue === 'function');
  }

  // Safely ensure the form is ready
  private ensureFormReady(): boolean {
    if (!this.isFormReady) {
      console.log('EditWorkOrderModalComponent: Form not ready, initializing now');
      this.initForm();
      return this.isFormReady;
    }
    return true;
  }

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
    console.log('EditWorkOrderModalComponent: ngOnInit - workOrder:', !!this.workOrder, 'isOpen:', this.isOpen);
    this.initForm();
    this.loadDropdownData();
    if (this.workOrder && this.isFormReady) {
      console.log('EditWorkOrderModalComponent: WorkOrder found, populating form');
      this.populateForm();
    } else if (this.workOrder) {
      console.log('EditWorkOrderModalComponent: WorkOrder found but form not ready');
    } else {
      console.log('EditWorkOrderModalComponent: No WorkOrder provided');
    }
  }

  // Removed ngDoCheck as it was called too frequently and could cause performance issues
  // We'll rely on ngOnChanges for detecting input changes instead

  ngOnChanges(): void {
    // Ensure form is initialized before trying to use it
    if (!this.isFormReady) {
      this.initForm();

      // Check again after initialization
      if (!this.isFormReady) {
        console.error('EditWorkOrderModalComponent: Form still not ready after initialization in ngOnChanges');
        return;
      }
    }

    if (this.workOrder && this.isFormReady) {
      this.populateForm();
    }

    // Reset form when modal is opened/closed
    if (this.isOpen && this.workOrder) {
      this.resetForm();
      this.populateForm();
    }
  }

  private resetForm(): void {
    if (!this.isFormReady) {
      this.initForm();

      // Check again after initialization
      if (!this.isFormReady) {
        console.error('EditWorkOrderModalComponent: Form still not ready after initialization');
        return;
      }
    }

    if (this.isFormReady && this.editForm) {
      this.editForm.reset();
      this.editForm.markAsUntouched();
      this.editForm.markAsPristine();
    }
  }

  private initForm(): void {

    if (!this.fb) {
      console.error('EditWorkOrderModalComponent: FormBuilder not available');
      return;
    }

    try {
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
        formValues: this.editForm.value,
        formType: typeof this.editForm,
        formConstructor: this.editForm.constructor.name
      });

      // Verify the form was created properly
      if (!this.editForm || typeof this.editForm.patchValue !== 'function') {
        console.error('EditWorkOrderModalComponent: Form not properly initialized');
        this.editForm = null as any;
        return;
      }
    } catch (error: unknown) {
      console.error('EditWorkOrderModalComponent: Error initializing form:', error);
      this.editForm = null as any;
    }
  }

  private populateForm(): void {
    if (!this.workOrder) {
      console.log('EditWorkOrderModalComponent: No workOrder to populate form with');
      return;
    }

    if (!this.isFormReady) {
      console.log('EditWorkOrderModalComponent: Form not ready, initializing first');
      this.initForm();

      // Check again after initialization
      if (!this.isFormReady) {
        console.error('EditWorkOrderModalComponent: Form still not ready after initialization');
        return;
      }
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
    console.log('EditWorkOrderModalComponent: About to call patchValue, editForm exists:', !!this.editForm);
    console.log('EditWorkOrderModalComponent: editForm type:', typeof this.editForm);
    console.log('EditWorkOrderModalComponent: editForm constructor:', this.editForm?.constructor?.name);

    // Final safety check before calling patchValue
    if (!this.isFormReady) {
      console.error('EditWorkOrderModalComponent: Form not ready for patchValue operation');
      return;
    }

    try {
      this.editForm.patchValue(formValues);
      console.log('EditWorkOrderModalComponent: Form populated successfully');
    } catch (error: unknown) {
      console.error('EditWorkOrderModalComponent: Error populating form:', error);
      console.error('EditWorkOrderModalComponent: Error details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        editFormExists: !!this.editForm,
        editFormType: typeof this.editForm,
        editFormConstructor: this.editForm?.constructor?.name
      });
      // If there's an error, try to reinitialize the form
      this.initForm();
      try {
        this.editForm.patchValue(formValues);
        console.log('EditWorkOrderModalComponent: Form reinitialized and populated successfully');
      } catch (retryError: unknown) {
        console.error('EditWorkOrderModalComponent: Failed to populate form after reinitialization:', retryError);
      }
    }

    // Check form state after population
    if (this.isFormReady && this.editForm) {
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

    } catch (error: unknown) {
      console.error('Error loading dropdown data:', error);
    }
  }

  // Form validation helpers
  isFieldInvalid(fieldName: string): boolean {
    if (!this.isFormReady || !this.editForm) {
      return false;
    }
    const field = this.editForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    if (!this.isFormReady || !this.editForm) {
      return '';
    }
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
    if (!this.isFormReady || !this.editForm) {
      return false;
    }
    return this.isFieldInvalid(fieldName);
  }

  isFormModified(): boolean {
    return this.isFormReady && this.editForm ? this.editForm.dirty : false;
  }

  canSubmit(): boolean {
    if (!this.isFormReady || !this.editForm) {
      return false;
    }

    const isValid = this.editForm.valid;
    const notSubmitting = !this.isSubmitting;
    const result = isValid && notSubmitting;

    console.log('EditWorkOrderModalComponent: canSubmit check:', {
      formExists: !!this.editForm,
      formValid: isValid,
      notSubmitting: notSubmitting,
      result: result,
      formErrors: this.editForm.errors,
      formStatus: this.editForm.status
    });

    return result;
  }

  async onSubmit(): Promise<void> {
    console.log('EditWorkOrderModalComponent: onSubmit called');

    // Ensure form is initialized before trying to use it
    if (!this.isFormReady) {
      console.log('EditWorkOrderModalComponent: Form not ready, initializing first');
      this.initForm();

      // Check again after initialization
      if (!this.isFormReady) {
        console.error('EditWorkOrderModalComponent: Form still not ready after initialization');
        return;
      }
    }

    // Final safety check before accessing form properties
    if (!this.isFormReady) {
      console.error('EditWorkOrderModalComponent: Form not ready for submission');
      return;
    }

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
    } catch (error: unknown) {
      console.error('Error updating work order:', error);

      // Handle specific error cases
      if (error && typeof error === 'object' && 'error' in error && error.error && typeof error.error === 'object' && 'message' in error.error) {
        // Show error message to user
        console.error('API Error:', (error.error as any).message);
      } else if (error instanceof Error && error.message) {
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
