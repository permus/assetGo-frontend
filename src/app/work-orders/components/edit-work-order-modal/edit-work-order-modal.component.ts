import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WorkOrder, WorkOrderService} from '../../services/work-order.service';
import {AssetService} from '../../../assets/services/asset.service';
import {LocationService} from '../../../locations/services/location.service';
import {TeamService} from '../../../teams/services/team.service';
import {AuthService} from '../../../core/services/auth.service';
import {firstValueFrom, Subscription} from 'rxjs';
import {MetaItem} from '../../../core/types/work-order.types';
import {MetaWorkOrdersService} from '../../../core/services/meta-work-orders.service';

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
  location: any; //eslint-disable-line @typescript-eslint/no-explicit-any
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
export class EditWorkOrderModalComponent implements OnInit, OnChanges {
  @Input() workOrder: WorkOrder | null = null;
  @Input() isOpen = false;
  @Output() modalClosed = new EventEmitter<void>();
  @Output() workOrderUpdated = new EventEmitter<WorkOrder>();

  editForm!: FormGroup;
  isSubmitting = false;
  statusOptions: MetaItem[] = [];
  priorityOptions: MetaItem[] = [];
  categoryOptions: MetaItem[] = [];
  // Getter to safely access the form
  get form(): FormGroup | null {
    return this.editForm || null;
  }

  // Check if the form is ready to use
  get isFormReady(): boolean {
    return (this.editForm && typeof this.editForm.patchValue === 'function');
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
  private subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private workOrderService: WorkOrderService,
    private assetService: AssetService,
    private locationService: LocationService,
    private teamService: TeamService,
    protected authService: AuthService,
    private metaWorkOrdersService: MetaWorkOrdersService,

  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.loadDropdownData();
    this.loadMetadataOptions();
    if (this.workOrder && this.isFormReady) {
      this.populateForm();
    }
  }

  // Removed ngDoCheck as it was called too frequently and could cause performance issues
  // We'll rely on ngOnChanges for detecting input changes instead

  ngOnChanges(): void {
    // Ensure form is initialized before trying to use it
    if (!this.isFormReady) {
      this.initForm();
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
    }

    if (this.isFormReady && this.editForm) {
      this.editForm.reset();
      this.editForm.markAsUntouched();
      this.editForm.markAsPristine();
    }
  }

  private initForm(): void {
    try {
      this.editForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
        priority_id: ['', Validators.required],
        status_id: ['', Validators.required],
        category_id: [''],
        due_date: [''],
        description: ['', [Validators.maxLength(1000)]],
        estimated_hours: ['', [Validators.min(0)]],
        notes: [''],
        asset_id: [''],
        location_id: [''],
        assigned_to: ['']
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
    if (!this.workOrder || !this.isFormReady) {
      return;
    }

    this.editForm.patchValue({
      title: this.workOrder.title || '',
      priority_id: this.workOrder.priority?.id || this.workOrder.priority || '',
      status_id: this.workOrder.status?.id || this.workOrder.status || '',
      category_id: this.workOrder.category?.id || this.workOrder.category || '',
      due_date:this.workOrder?.due_date ? this.workOrder.due_date.split('T')[0] : undefined,
      description: this.workOrder.description || '',
      estimated_hours: this.workOrder.estimated_hours || '',
      notes: this.workOrder.notes || '',
      asset_id: this.getFieldValue(this.workOrder.asset),
      location_id: this.getFieldValue(this.workOrder.location),
      assigned_to: this.getFieldValue(this.workOrder.assigned_to)
    });
    console.log(this.editForm.get('due_date')?.value,'due_date',this.workOrder.due_date);
  }

  private getFieldValue(field: any): any {
    if (!field) return '';

    // If it's an object with an id property, return the id
    if (typeof field === 'object' && 'id' in field) {
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
      const assetsResponse = await firstValueFrom(this.assetService.getAssets({per_page: 100}));
      this.assets = assetsResponse?.data?.assets || assetsResponse?.data || [];

      // Load locations
      const locationsResponse = await firstValueFrom(this.locationService.getLocations({per_page: 100}));
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
      status_id: 'Status',
      category_id: 'Category',
      priority_id: 'Priority',
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

  canSubmit(): boolean {
    if (!this.isFormReady || !this.editForm) {
      return false;
    }

    const isValid = this.editForm.valid;
    const notSubmitting = !this.isSubmitting;
    return isValid && notSubmitting;
  }

  async onSubmit(): Promise<void> {
    if (this.editForm.invalid || this.isSubmitting || !this.workOrder) {
      return;
    }

    this.isSubmitting = true;

    try {
      const formData = this.editForm.value;

      // Prepare the update payload
      const updatePayload = {
        title: formData.title,
        status_id: formData.status_id,
        category_id: formData.category_id,
        priority_id: formData.priority_id,
        due_date: formData.due_date || null,
        description: formData.description || null,
        estimated_hours: formData.estimated_hours || null,
        notes: formData.notes || null,
        asset_id: formData.asset_id || null,
        location_id: formData.location_id || null,
        assigned_to: formData.assigned_to || null
      };

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
    this.resetForm();
    this.modalClosed.emit();
  }

  onAssetChange(event: Event) {
    const selectedId = (event.target as HTMLSelectElement).value;
    const selectedAsset = this.assets.find(a => a.id === +selectedId);
    this.editForm.patchValue({ location_id: selectedAsset?.location?.id || '' });
  }

  private loadMetadataOptions(): void {
    // Ensure we don't reuse any stale cached responses after deploy/code changes
    this.metaWorkOrdersService.clearAllCache();

    // Load statuses
    this.subscription.add(
      this.metaWorkOrdersService.getStatus().subscribe({
        next: (statuses) => {
          this.statusOptions = statuses;
        },
        error: (error) => {
          console.error('Error loading statuses:', error);
          this.statusOptions = [];
        }
      })
    );

    // Load priorities
    this.subscription.add(
      this.metaWorkOrdersService.getPriorities().subscribe({
        next: (priorities) => {
          this.priorityOptions = priorities;
        },
        error: (error) => {
          console.error('Error loading priorities:', error);
          this.priorityOptions = [];
        }
      })
    );

    // Load categories
    this.subscription.add(
      this.metaWorkOrdersService.getCategories().subscribe({
        next: (categories) => {
          this.categoryOptions = categories;
        },
        error: (error) => {
          console.error('Error loading categories:', error);
          this.categoryOptions = [];
        }
      })
    );
  }
}
