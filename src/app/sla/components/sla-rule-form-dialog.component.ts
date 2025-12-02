import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlaService } from '../sla.service';
import { SlaDefinition, AppliesTo, PriorityLevel } from '../models';
import { ToastService } from '../../core/services/toast.service';
import { MetaWorkOrdersService } from '../../core/services/meta-work-orders.service';
import { MetaItem } from '../../core/types/work-order.types';

@Component({
  selector: 'app-sla-rule-form-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sla-rule-form-dialog.component.html',
  styleUrls: ['./sla-rule-form-dialog.component.scss']
})
export class SlaRuleFormDialogComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  @Input() editMode = false;
  @Input() definition: SlaDefinition | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  loading = false;
  submitted = false;

  model: Partial<SlaDefinition> = {
    name: '',
    description: '',
    appliesTo: 'work_orders',
    priorityLevel: null,
    categoryId: null,
    responseTimeHours: 4,
    containmentTimeHours: null,
    completionTimeHours: 24,
    isActive: true,
  };

  // Dropdown states
  showAppliesToDropdown = false;
  showPriorityDropdown = false;
  showCategoryDropdown = false;

  // Category options
  categoryOptions: MetaItem[] = [];
  selectedCategoryId: number | null = null;

  // Options
  appliesToOptions: Array<{ value: AppliesTo; label: string }> = [
    { value: 'work_orders', label: 'Work Orders' },
    { value: 'maintenance', label: 'Maintenance Tasks' },
    { value: 'both', label: 'Both' },
  ];

  priorityOptions: Array<{ value: PriorityLevel; label: string }> = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'critical', label: 'Critical' },
    { value: 'ppm', label: 'PPM' },
  ];

  constructor(
    private slaService: SlaService,
    private toast: ToastService,
    private metaWorkOrdersService: MetaWorkOrdersService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    if (this.editMode && this.definition) {
      this.loadDefinition();
    }
  }

  loadCategories(): void {
    this.metaWorkOrdersService.getCategories().subscribe({
      next: (categories) => {
        this.categoryOptions = categories;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
        this.toast.error('Failed to load category options');
        this.categoryOptions = [];
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['definition'] && this.editMode && this.definition) {
      this.loadDefinition();
    }
  }

  loadDefinition(): void {
    if (!this.definition) return;
    
    this.model = {
      name: this.definition.name,
      description: this.definition.description || '',
      appliesTo: this.definition.appliesTo,
      priorityLevel: this.definition.priorityLevel || null,
      categoryId: this.definition.categoryId || null,
      responseTimeHours: this.definition.responseTimeHours,
      containmentTimeHours: this.definition.containmentTimeHours || null,
      completionTimeHours: this.definition.completionTimeHours,
      isActive: this.definition.isActive,
    };
    this.selectedCategoryId = this.model.categoryId || null;
  }

  close(): void {
    this.isOpen = false;
    this.submitted = false;
    this.resetForm();
    this.closed.emit();
  }

  resetForm(): void {
    this.model = {
      name: '',
      description: '',
      appliesTo: 'work_orders',
      priorityLevel: null,
      categoryId: null,
      responseTimeHours: 4,
      containmentTimeHours: null,
      completionTimeHours: 24,
      isActive: true,
    };
    this.selectedCategoryId = null;
    this.showAppliesToDropdown = false;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
  }

  getAppliesToLabel(): string {
    return this.appliesToOptions.find(opt => opt.value === this.model.appliesTo)?.label || 'Select';
  }

  getPriorityLabel(): string {
    if (!this.model.priorityLevel) return 'Select priority level';
    return this.priorityOptions.find(opt => opt.value === this.model.priorityLevel)?.label || '';
  }

  selectAppliesTo(value: AppliesTo): void {
    this.model.appliesTo = value;
    this.showAppliesToDropdown = false;
  }

  selectPriority(value: PriorityLevel | null): void {
    this.model.priorityLevel = value;
    this.showPriorityDropdown = false;
  }

  selectCategory(categoryId: number | null): void {
    this.model.categoryId = categoryId;
    this.selectedCategoryId = categoryId;
    this.showCategoryDropdown = false;
  }

  getCategoryLabel(): string {
    if (!this.selectedCategoryId) return 'No Category';
    const category = this.categoryOptions.find(c => c.id === this.selectedCategoryId);
    return category ? category.name : 'No Category';
  }

  submit(): void {
    this.submitted = true;

    if (!this.model.name || !this.model.appliesTo || !this.model.responseTimeHours || !this.model.completionTimeHours) {
      return;
    }

    this.loading = true;

    const payload = {
      name: this.model.name,
      description: this.model.description || null,
      applies_to: this.model.appliesTo,
      priority_level: this.model.priorityLevel || null,
      category_id: this.model.categoryId || null,
      response_time_hours: this.model.responseTimeHours,
      containment_time_hours: this.model.containmentTimeHours || null,
      completion_time_hours: this.model.completionTimeHours,
      is_active: this.model.isActive !== false,
    };

    const request = this.editMode && this.definition?.id
      ? this.slaService.updateDefinition(this.definition.id, payload)
      : this.slaService.createDefinition(payload);

    request.subscribe({
      next: (response) => {
        if (response.success) {
          this.toast.success(`SLA rule ${this.editMode ? 'updated' : 'created'} successfully`);
          this.close();
          this.saved.emit();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Failed to save SLA definition:', error);
        this.toast.error(error.error?.message || `Failed to ${this.editMode ? 'update' : 'create'} SLA rule`);
        this.loading = false;
      }
    });
  }
}

