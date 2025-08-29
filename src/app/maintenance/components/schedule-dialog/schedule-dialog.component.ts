import { Component, EventEmitter, HostListener, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AssetService } from '../../../assets/services/asset.service';
import { MaintenanceService } from '../../maintenance.service';
import { ScheduleMaintenance } from '../../models';
import { MetaWorkOrdersService } from '../../../core/services/meta-work-orders.service';
import { MetaItem } from '../../../core/types/work-order.types';

@Component({
  selector: 'app-schedule-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './schedule-dialog.html',
  styleUrl: './schedule-dialog.scss'
})
export class ScheduleDialogComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  @Output() created = new EventEmitter<any>();

  loading = false;
  error: string | null = null;
  fieldErrors: { [key: string]: string[] } = {};

  model: ScheduleMaintenance = {
    maintenance_plan_id: 0,
    asset_ids: [],
    start_date: '',
    status: 'scheduled',
    priority_id: null,
  } as any;

  // Dropdown per FRONTEND_RULES
  showStatusDropdown = false;
  statusOptions = [
    { id: 'scheduled', name: 'Scheduled' },
    { id: 'in_progress', name: 'In Progress' },
    { id: 'completed', name: 'Completed' },
  ];
  selectedStatus: { id: string; name: string } | null = { id: 'scheduled', name: 'Scheduled' };

  // Plan dropdown
  showPlanDropdown = false;
  plansOptions: Array<{ id: number; name: string }> = [];
  selectedPlan: { id: number; name: string } | null = null;

  // Priority dropdown (reuse Meta service)
  showPriorityDropdown = false;
  priorityOptions: MetaItem[] = [];
  selectedPriorityMeta: MetaItem | null = null;

  // Asset select
  assetOptions: Array<{ id: number; name: string }> = [];
  assetsLoading = false;

  constructor(private api: MaintenanceService, private meta: MetaWorkOrdersService, private assetsApi: AssetService) {}

  ngOnInit(): void {
    // Load plans for dropdown (limit to 50 for performance)
    this.api.listPlans({ per_page: 50 }).subscribe({
      next: (res) => {
        const list = Array.isArray(res?.data?.plans) ? res.data.plans : [];
        this.plansOptions = list.map((p: any) => ({ id: p.id, name: p.name || `Plan #${p.id}` }));
      },
      error: () => { this.plansOptions = []; }
    });

    // Load priorities
    this.meta.clearPrioritiesCache();
    this.meta.getPriorities().subscribe({
      next: (pri) => {
        this.priorityOptions = pri || [];
      },
      error: () => { this.priorityOptions = []; }
    });

    // Load assets for multi-select (first 100; can add search later)
    this.assetsLoading = true;
    this.assetsApi.getAssets({ per_page: 100 }).subscribe({
      next: (res: any) => {
        const list = res?.data?.assets || res?.data?.data || res?.data || [];
        this.assetOptions = (Array.isArray(list) ? list : []).map((a: any) => ({ id: a.id, name: a.name || a.asset_name || `Asset #${a.id}` }));
        this.assetsLoading = false;
      },
      error: () => { this.assetsLoading = false; this.assetOptions = []; }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && changes['isOpen'].currentValue === true) {
      // Reset the form state whenever the dialog is opened
      this.reset();
    }
  }

  @HostListener('document:click')
  closeOnOutsideClick() { this.showStatusDropdown = false; this.showPlanDropdown = false; this.showPriorityDropdown = false; }

  toggleDropdown() { this.showStatusDropdown = !this.showStatusDropdown; }
  selectOption(opt: any) { this.selectedStatus = opt; this.model.status = opt.id as any; this.showStatusDropdown = false; }

  togglePlanDropdown() { this.showPlanDropdown = !this.showPlanDropdown; }
  selectPlan(opt: { id: number; name: string }) { this.selectedPlan = opt; this.model.maintenance_plan_id = opt.id; this.showPlanDropdown = false; }

  togglePriorityDropdown() { this.showPriorityDropdown = !this.showPriorityDropdown; }
  selectPriority(priority: MetaItem) { this.selectedPriorityMeta = priority; this.model.priority_id = priority.id as any; this.showPriorityDropdown = false; }

  onBackdrop(e: MouseEvent) { this.close(); }
  close() { this.closed.emit(); this.reset(); }

  hasFieldError(field: string): boolean { return !!this.fieldErrors[field]?.length; }
  getFieldError(field: string): string { return this.fieldErrors[field]?.[0] || ''; }

  submit() {
    this.loading = true;
    this.error = null;
    this.fieldErrors = {};

    const payload: ScheduleMaintenance = {
      maintenance_plan_id: this.model.maintenance_plan_id,
      asset_ids: this.model.asset_ids,
      start_date: this.model.start_date || null as any,
      status: this.model.status,
      priority_id: this.model.priority_id || null,
    } as any;

    this.api.createSchedule(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.created.emit(res);
        this.close();
      },
      error: (err) => {
        this.loading = false;
        if (err?.error?.errors && typeof err.error.errors === 'object') {
          this.fieldErrors = err.error.errors;
          this.error = err?.error?.message || 'Please fix the validation errors below.';
        } else {
          this.error = err?.error?.message || 'Failed to create schedule';
        }
      }
    });
  }

  private reset() {
    this.model = { maintenance_plan_id: 0, asset_ids: [], start_date: '', status: 'scheduled', priority_id: null } as any;
    this.error = null;
    this.fieldErrors = {};
    this.loading = false;
    // Reset UI selections/dropdowns
    this.selectedPlan = null;
    this.selectedPriorityMeta = null;
    this.selectedStatus = { id: 'scheduled', name: 'Scheduled' } as any;
    this.showPlanDropdown = false;
    this.showPriorityDropdown = false;
    this.showStatusDropdown = false;
  }

  onAssetIdsCsvChange(value: string) {
    const ids = (value || '')
      .split(',')
      .map((s) => parseInt(String(s).trim(), 10))
      .filter((n) => !Number.isNaN(n));
    this.model.asset_ids = ids as any;
  }
}


