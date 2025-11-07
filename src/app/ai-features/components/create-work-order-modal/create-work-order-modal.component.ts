import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Prediction } from '../../shared/predictive-maintenance.interface';
import { WorkOrderService, CreateWorkOrderRequest } from '../../../work-orders/services/work-order.service';
import { AssetService } from '../../../assets/services/asset.service';
import { LocationService } from '../../../locations/services/location.service';
import { TeamService } from '../../../teams/services/team.service';
import { MetaWorkOrdersService } from '../../../core/services/meta-work-orders.service';
import { ToastService } from '../../../core/services/toast.service';
import { MetaItem } from '../../../core/types/work-order.types';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';
import { FormatService } from '../../../core/services/format.service';

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
  location: any;
}

interface Location {
  id: number;
  name: string;
}

interface Team {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

@Component({
  selector: 'app-create-work-order-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NumberFormatPipe],
  templateUrl: './create-work-order-modal.component.html',
  styleUrls: ['./create-work-order-modal.component.scss'],
  animations: [
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'scale(0.7) translateY(-50px)' 
        }),
        animate('200ms ease-out', style({ 
          opacity: 1, 
          transform: 'scale(1) translateY(0)' 
        }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ 
          opacity: 0, 
          transform: 'scale(0.7) translateY(-50px)' 
        }))
      ])
    ])
  ]
})
export class CreateWorkOrderModalComponent implements OnInit {
  @Input() isOpen = false;
  @Input() prediction: Prediction | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() workOrderCreated = new EventEmitter<any>();

  form!: FormGroup;
  isSubmitting = false;
  statusOptions: MetaItem[] = [];
  priorityOptions: MetaItem[] = [];
  categoryOptions: MetaItem[] = [];
  
  users: User[] = [];
  assets: Asset[] = [];
  locations: Location[] = [];
  teams: Team[] = [];
  selectedAsset: Asset | null = null;
  selectedLocation: Location | null = null;
  selectedPriority: MetaItem | null = null;
  selectedStatus: MetaItem | null = null;
  selectedCategory: MetaItem | null = null;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private workOrderService: WorkOrderService,
    private assetService: AssetService,
    private locationService: LocationService,
    private teamService: TeamService,
    private metaWorkOrdersService: MetaWorkOrdersService,
    private toastService: ToastService,
    private formatService: FormatService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDropdownData();
    this.loadMetadataOptions();
    
    // Pre-fill form with prediction data if available
    if (this.prediction) {
      this.prefillFormFromPrediction();
    }
  }

  initForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      priority_id: [null, [Validators.required]],
      status_id: [null, [Validators.required]],
      category_id: [null],
      due_date: [''],
      asset_id: [null],
      location_id: [null],
      assigned_to: [null],
      team_id: [null],
      tags: [''],
      estimated_hours: [null],
      notes: ['']
    });
  }

  loadDropdownData(): void {
    this.assetService.getAssets({ per_page: 1000 }).subscribe({
      next: (response) => {
        // Handle both paginated and non-paginated response formats
        const assetsList = response.data?.assets || response.data || [];
        this.assets = Array.isArray(assetsList) ? assetsList.map((asset: any) => ({
          id: asset.id,
          name: asset.name,
          asset_id: asset.asset_id,
          location: asset.location
        })) : [];
        
        if (this.prediction?.assetId) {
          this.selectedAsset = this.assets.find(a => a.id.toString() === this.prediction?.assetId) || null;
        }
      }
    });

    this.locationService.getLocations().subscribe({
      next: (response) => {
        this.locations = response.data.locations.map((loc: Location) => ({
          id: loc.id,
          name: loc.name
        }));
      }
    });

    this.teamService.getTeamMembersFlat(1000).subscribe({
      next: (teams) => {
        this.teams = teams.map((team: any) => ({
          id: team.id,
          first_name: team.first_name,
          last_name: team.last_name,
          email: team.email
        }));
      }
    });
  }

  loadMetadataOptions(): void {
    this.metaWorkOrdersService.getPriorities().subscribe({
      next: (priorities) => {
        this.priorityOptions = priorities;
        // Set default priority based on risk level
        if (this.prediction) {
          if (this.prediction.riskLevel === 'high') {
            this.selectedPriority = priorities.find(p => p.name.toLowerCase() === 'high') || null;
          } else {
            this.selectedPriority = priorities.find(p => p.name.toLowerCase() === 'medium') || null;
          }
        }
      }
    });

    this.metaWorkOrdersService.getStatus().subscribe({
      next: (statuses) => {
        this.statusOptions = statuses;
        // Set default status to 'open' or first available
        this.selectedStatus = statuses[0] || null;
      }
    });

    this.metaWorkOrdersService.getCategories().subscribe({
      next: (categories) => {
        this.categoryOptions = categories;
        // Set default category to 'preventive maintenance'
        this.selectedCategory = categories.find(c => c.name.toLowerCase().includes('preventive')) || null;
      }
    });
  }

  prefillFormFromPrediction(): void {
    if (!this.prediction) return;

    this.form.patchValue({
      title: `Preventive Maintenance: ${this.prediction.assetName}`,
      description: this.prediction.recommendedAction,
      asset_id: parseInt(this.prediction.assetId),
      notes: this.buildNotesFromPrediction()
    });

    // Calculate due date (1 week from predicted failure date for high risk, 2 weeks for others)
    const predictedDate = new Date(this.prediction.predictedFailureDate);
    const dueDate = new Date(predictedDate);
    
    if (this.prediction.riskLevel === 'high') {
      dueDate.setDate(dueDate.getDate() - 7); // 1 week before predicted failure
    } else {
      dueDate.setDate(dueDate.getDate() - 14); // 2 weeks before predicted failure
    }

    this.form.patchValue({
      due_date: dueDate.toISOString().split('T')[0]
    });

    // Calculate estimated hours based on preventive cost
    if (this.prediction.preventiveCost > 0) {
      // Assume average hourly rate, estimate hours
      const estimatedHours = Math.ceil(this.prediction.preventiveCost / 100); // $100/hr assumption
      this.form.patchValue({
        estimated_hours: estimatedHours
      });
    }
  }

  buildNotesFromPrediction(): string {
    if (!this.prediction) return '';
    
    return `Risk Level: ${this.prediction.riskLevel.toUpperCase()}
Confidence: ${this.prediction.confidence}%
Predicted Failure Date: ${new Date(this.prediction.predictedFailureDate).toLocaleDateString()}
Estimated Savings: $${this.formatService.formatNumber(this.prediction.savings, 2)}

Factors:
${this.prediction.factors?.join('\n- ') || 'None identified'}

Recommended Actions:
${this.prediction.recommendedAction}`;
  }

  onAssetChange(assetId: string | null): void {
    if (assetId) {
      this.selectedAsset = this.assets.find(a => a.id === parseInt(assetId)) || null;
    }
  }

  onPriorityChange(priorityId: string | null): void {
    if (priorityId) {
      this.selectedPriority = this.priorityOptions.find(p => p.id === parseInt(priorityId)) || null;
    }
  }

  onStatusChange(statusId: string | null): void {
    if (statusId) {
      this.selectedStatus = this.statusOptions.find(s => s.id === parseInt(statusId)) || null;
    }
  }

  onCategoryChange(categoryId: string | null): void {
    if (categoryId) {
      this.selectedCategory = this.categoryOptions.find(c => c.id === parseInt(categoryId)) || null;
    }
  }

  onSubmit(): void {
    if (!this.form.valid || !this.selectedPriority || !this.selectedStatus) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const workOrderData: CreateWorkOrderRequest = {
      title: this.form.value.title,
      description: this.form.value.description,
      priority_id: this.selectedPriority.id,
      status_id: this.selectedStatus.id,
      category_id: this.selectedCategory?.id || undefined,
      due_date: this.form.value.due_date || undefined,
      asset_id: this.form.value.asset_id || undefined,
      location_id: this.form.value.location_id || undefined,
      assigned_to: this.form.value.assigned_to || undefined,
      estimated_hours: this.form.value.estimated_hours || undefined,
      notes: this.form.value.notes || undefined,
      tags: 'predictive-maintenance,preventive'
    };

    this.workOrderService.createWorkOrder(workOrderData).subscribe({
      next: (response) => {
        this.toastService.success('Work order created successfully!');
        this.workOrderCreated.emit(response);
        this.closeModalHandler();
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Failed to create work order';
        this.isSubmitting = false;
      }
    });
  }

  closeModalHandler(): void {
    if (this.isSubmitting) return;
    
    this.isOpen = false;
    this.closeModal.emit();
    this.resetModal();
  }

  private resetModal(): void {
    this.form.reset();
    this.errorMessage = '';
    this.selectedAsset = null;
    this.selectedLocation = null;
    this.selectedPriority = null;
    this.selectedStatus = null;
    this.selectedCategory = null;
  }

  ngOnDestroy(): void {
    // Cleanup
  }
}

