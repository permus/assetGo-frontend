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
  @Input() editMode = false;
  @Input() scheduleToEdit: ScheduleMaintenance | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() created = new EventEmitter<any>();
  @Output() updated = new EventEmitter<any>();

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

  // Start date-time parts
  startDatePart: string = '';
  startTimePart: string = '';

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
      // When opened fresh for create, reset immediately
      if (!this.editMode) {
        this.reset();
      }
      // When opened for edit, load the data
      if (this.editMode && this.scheduleToEdit?.id) {
        this.reset();
        setTimeout(() => this.loadForEdit(this.scheduleToEdit!.id!), 50);
      }
    }
    // If parent toggles editMode from true->false while dialog remains open, ensure form resets
    if (changes['editMode'] && changes['editMode'].currentValue === false && this.isOpen) {
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
      start_date: this.combineStartParts(),
      status: this.model.status,
      priority_id: this.model.priority_id || null,
    } as any;

    const request$ = this.editMode && this.scheduleToEdit?.id
      ? this.api.updateSchedule(this.scheduleToEdit.id, payload)
      : this.api.createSchedule(payload);

    request$.subscribe({
      next: (res) => {
        this.loading = false;
        if (this.editMode) this.updated.emit(res); else this.created.emit(res);
        this.close();
      },
      error: (err) => {
        this.loading = false;
        if (err?.error?.errors && typeof err.error.errors === 'object') {
          this.fieldErrors = err.error.errors;
          this.error = err?.error?.message || 'Please fix the validation errors below.';
        } else {
          this.error = err?.error?.message || (this.editMode ? 'Failed to update schedule' : 'Failed to create schedule');
        }
      }
    });
  }

  private normalizeToDateString(input: string | Date | null | undefined): string | null {
    if (!input) return null;
    if (input instanceof Date && !isNaN(input.getTime())) {
      const yyyy = input.getFullYear();
      const mm = String(input.getMonth() + 1).padStart(2, '0');
      const dd = String(input.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    }
    const s = String(input).trim();
    // Already YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
    // Handle MM/DD/YYYY
    const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (m) {
      const [_, M, D, Y] = m;
      const mm = String(Number(M)).padStart(2, '0');
      const dd = String(Number(D)).padStart(2, '0');
      return `${Y}-${mm}-${dd}`;
    }
    // Fallback attempt via Date
    const d = new Date(s);
    if (!isNaN(d.getTime())) return this.normalizeToDateString(d);
    return null;
  }

  private combineStartParts(): string | null {
    // Prefer explicit parts if provided; else normalize model.start_date
    const datePart = (this.startDatePart || '').trim();
    const timePart = (this.startTimePart || '').trim();
    if (datePart) {
      const normalizedDate = this.normalizeToDateString(datePart);
      if (!normalizedDate) return null;
      const t = timePart && /^\d{2}:\d{2}$/.test(timePart) ? `${timePart}:00` : '00:00:00';
      return `${normalizedDate} ${t}`;
    }
    const norm = this.normalizeToDateString(this.model.start_date);
    return norm ? `${norm} 00:00:00` : null;
  }

  onStartPartsChange() {
    // Keep model.start_date in sync for display-only usages
    const combined = this.combineStartParts();
    this.model.start_date = combined || '' as any;
  }

  private loadForEdit(id: number) {
    this.loading = true;
    this.api.getSchedule(id).subscribe({
      next: (res) => {
        const s: ScheduleMaintenance = res?.data || res;
        this.model = {
          maintenance_plan_id: s.maintenance_plan_id,
          asset_ids: s.asset_ids || [],
          start_date: s.start_date || '',
          status: s.status || 'scheduled',
          priority_id: s.priority_id || null,
        } as any;

        // populate parts
        if (s.start_date) {
          const d = new Date(s.start_date as any);
          if (!isNaN(d.getTime())) {
            this.startDatePart = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
            this.startTimePart = `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
          }
        }

        // Selections for dropdowns
        const plan = this.plansOptions.find(p => p.id === s.maintenance_plan_id) || null;
        if (!plan && s.maintenance_plan_id) {
          this.plansOptions = [{ id: s.maintenance_plan_id, name: `Plan #${s.maintenance_plan_id}` }, ...this.plansOptions];
        }
        this.selectedPlan = plan || (s.maintenance_plan_id ? { id: s.maintenance_plan_id, name: `Plan #${s.maintenance_plan_id}` } : null);

        if (s.priority_id) {
          const pri = this.priorityOptions.find(p => p.id === s.priority_id) || null;
          if (pri) this.selectedPriorityMeta = pri;
        }
        if (s.status) this.selectedStatus = this.statusOptions.find(o => o.id === s.status) || this.selectedStatus;

        this.loading = false;
      },
      error: () => { this.loading = false; }
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


