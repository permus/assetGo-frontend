import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../maintenance.service';
import { ScheduleDialogComponent } from '../components/schedule-dialog/schedule-dialog.component';
import { MaintenanceDeleteConfirmationModalComponent } from '../components/delete-confirmation-modal';
import { ScheduleMaintenance } from '../models';
import { MetaWorkOrdersService } from '../../core/services/meta-work-orders.service';
import { MetaItem } from '../../core/types/work-order.types';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-scheduled-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ScheduleDialogComponent, MaintenanceDeleteConfirmationModalComponent, RouterLink],
  templateUrl: 'scheduled-page.component.html',
  styleUrls: ['scheduled-page.component.scss', 'schedule-selector.scss']
})
export class ScheduledPageComponent implements OnInit {
  loading = false;
  all: ScheduleMaintenance[] = [];
  filtered: ScheduleMaintenance[] = [];
  viewType: 'grid' | 'list' = 'grid';
  searchQuery = '';
  perPage = 20;
  filter: 'all' | 'scheduled' | 'in_progress' | 'overdue' = 'all';
  total = 0; upcoming = 0; inProgress = 0; overdue = 0;

  // Lookup maps for display
  planIdToName: Record<number, string> = {};
  priorityIdToName: Record<number, string> = {};
  assetIdToName: Record<number, string> = {};

  // Dropdown per FRONTEND_RULES
  showStatusDropdown = false;
  statusOptions = [
    { id: 'all', name: 'All' },
    { id: 'scheduled', name: 'Scheduled' },
    { id: 'in_progress', name: 'In Progress' },
    { id: 'overdue', name: 'Overdue' },
  ];
  selectedStatus: { id: string; name: string } | null = { id: 'all', name: 'All' };

  // Dialog state
  isDialogOpen = false;
  editMode = false;
  scheduleToEdit: ScheduleMaintenance | null = null;

  // Action menus state per schedule id
  menuOpen: { [id: number]: boolean } = {};

  // Delete modal state
  showDeleteModal = false;
  pendingDelete: ScheduleMaintenance | null = null;

  // Multi-select state
  selectedSchedules: ScheduleMaintenance[] = [];

  constructor(private api: MaintenanceService, private meta: MetaWorkOrdersService, private router: Router) {}

  ngOnInit() {
    this.fetchSchedules();
  }

  fetchSchedules() {
    this.loading = true;
    this.api.listSchedules({ per_page: this.perPage }).subscribe({
      next: (res) => {
        const items: ScheduleMaintenance[] = Array.isArray(res?.data)
          ? res.data
          : Array.isArray(res?.data?.schedules)
            ? res.data.schedules
            : [];
        this.all = items;
        this.loadLookupsAndEnrich();
      },
      error: () => { this.loading = false; }
    });
  }

  private loadLookupsAndEnrich() {
    // Use plan_name and assets directly from the response
    for (const s of this.all) {
      // Use plan_name from response if available
      if (s.maintenance_plan_id && s.plan_name) {
        this.planIdToName[s.maintenance_plan_id] = s.plan_name;
      }
      
      // Use assets array from response if available
      if (s.assets && Array.isArray(s.assets)) {
        for (const asset of s.assets) {
          if (asset?.id != null) {
            this.assetIdToName[asset.id] = asset.name || `Asset #${asset.id}`;
          }
        }
      }
    }

    // Fetch priorities (names) once - this is the only API call needed now
    if (Object.keys(this.priorityIdToName).length > 0) {
      // Priorities already loaded, skip fetching
      this.computeMetrics();
      this.applyFilter();
      this.loading = false;
    } else {
      this.meta.getPriorities().subscribe({
        next: (priorities: MetaItem[]) => {
          // Priorities map
          if (priorities && Array.isArray(priorities)) {
            for (const p of priorities) {
              if (p?.id != null) this.priorityIdToName[p.id] = p.name || p.slug || String(p.id);
            }
          }

          // Enrich and apply
          this.computeMetrics();
          this.applyFilter();
          this.loading = false;
        },
        error: () => {
          // Even if lookups fail, show basic list
          this.computeMetrics();
          this.applyFilter();
          this.loading = false;
        }
      });
    }
  }

  computeMetrics() {
    const today = new Date();
    const in7 = new Date(); in7.setDate(today.getDate() + 7);
    this.total = this.all.length;
    this.inProgress = this.all.filter(s => s.status === 'in_progress').length;
    this.overdue = this.all.filter(s => s.due_date && new Date(s.due_date) < today && s.status !== 'completed').length;
    this.upcoming = this.all.filter(s => s.due_date && new Date(s.due_date) >= today && new Date(s.due_date) <= in7).length;
  }

  // View toggle
  toggleViewType() { this.viewType = this.viewType === 'grid' ? 'list' : 'grid'; }

  // Search and filters
  onSearch() { this.applyFilter(); }

  setFilter(f: 'all' | 'scheduled' | 'in_progress' | 'overdue') {
    this.filter = f;
    this.selectedStatus = this.statusOptions.find(o => o.id === f) || { id: 'all', name: 'All' };
    this.applyFilter();
  }

  applyFilter() {
    const today = new Date();
    const base = this.searchQuery
      ? this.all.filter(s =>
          (this.getPlanName(s.maintenance_plan_id).toLowerCase().includes(this.searchQuery.toLowerCase())) ||
          (s.status || '').toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      : this.all;

    if (this.filter === 'all') this.filtered = base;
    else if (this.filter === 'scheduled') this.filtered = base.filter(s => s.status === 'scheduled');
    else if (this.filter === 'in_progress') this.filtered = base.filter(s => s.status === 'in_progress');
    else if (this.filter === 'overdue') this.filtered = base.filter(s => s.due_date && new Date(s.due_date) < today && s.status !== 'completed');
  }

  onShowChange(event: any) {
    const value = Number(event?.target?.value || 20);
    this.perPage = value;
    this.fetchSchedules();
  }

  // Dropdown behavior (FRONTEND_RULES)
  toggleDropdown(): void { this.showStatusDropdown = !this.showStatusDropdown; }
  selectOption(option: any): void {
    this.selectedStatus = option;
    this.showStatusDropdown = false;
    this.setFilter(option?.id as any);
  }
  @HostListener('document:click')
  closeOnOutsideClick(): void { this.showStatusDropdown = false; }

  // Dialog handlers
  openDialog() { this.editMode = false; this.scheduleToEdit = null; this.isDialogOpen = true; }
  onDialogClosed() { this.isDialogOpen = false; this.editMode = false; this.scheduleToEdit = null; }
  onCreated() { this.isDialogOpen = false; this.editMode = false; this.scheduleToEdit = null; this.fetchSchedules(); }

  // 3-dots menu handlers
  toggleMenu(id: number) { this.menuOpen[id] = !this.menuOpen[id]; }
  isMenuOpen(id: number): boolean { return !!this.menuOpen[id]; }

  previewSchedule(s: ScheduleMaintenance) {
    if (!s.id) return;
    this.menuOpen[s.id!] = false;
    this.router.navigate(['/maintenance/scheduled', s.id]);
  }
  editSchedule(s: ScheduleMaintenance) {
    this.editMode = true;
    this.scheduleToEdit = s;
    this.isDialogOpen = true;
    this.menuOpen[s.id!] = false;
  }
  requestDelete(s: ScheduleMaintenance) {
    this.pendingDelete = s;
    this.selectedSchedules = [s];
    this.showDeleteModal = true;
    this.menuOpen[s.id!] = false;
  }
  confirmDelete(reason?: string) { this.deleteSelected(reason); }
  closeDeleteModal() { this.showDeleteModal = false; this.pendingDelete = null; }

  // Selection helpers
  toggleSelectAllSchedules() {
    if (this.selectedSchedules.length === this.all.length) {
      this.selectedSchedules = [];
    } else {
      this.selectedSchedules = [...this.all];
    }
  }
  toggleScheduleSelection(s: ScheduleMaintenance) {
    const idx = this.selectedSchedules.findIndex(x => x.id === s.id);
    if (idx >= 0) this.selectedSchedules.splice(idx, 1); else this.selectedSchedules.push(s);
  }
  isScheduleSelected(s: ScheduleMaintenance): boolean { return this.selectedSchedules.some(x => x.id === s.id); }
  get selectedCount(): number { return this.selectedSchedules.length; }
  clearSelection() { this.selectedSchedules = []; }

  openDeleteModalForSelected(): void {
    if (this.selectedSchedules.length === 0) return;
    this.showDeleteModal = true;
  }

  deleteSelected(deletionReason?: string) {
    if (this.selectedSchedules.length === 0) { this.closeDeleteModal(); return; }

    const ids = this.selectedSchedules.map(s => s.id!).filter(Boolean) as number[];
    let completed = 0; let success = 0; let failed = 0;
    const finalize = () => {
      completed++;
      if (completed >= ids.length) {
        this.fetchSchedules();
        this.clearSelection();
        this.closeDeleteModal();
        if (failed === 0) console.log(`${success} schedules deleted successfully`);
        else if (success === 0) console.error(`Failed to delete ${failed} schedules`);
        else console.log(`${success} schedules deleted, ${failed} failed`);
      }
    };

    ids.forEach(id => {
      this.api.deleteSchedule(id).subscribe({
        next: () => { success++; finalize(); },
        error: () => { failed++; finalize(); }
      });
    });
  }

  // Display helpers
  getPlanName(id: number | null | undefined): string {
    if (!id && id !== 0) return '-';
    return this.planIdToName[id as number] || `#${id}`;
  }
  getPriorityName(id: number | null | undefined): string {
    if (!id) return '-';
    return this.priorityIdToName[id as number] || `#${id}`;
  }
  getAssetNames(ids: Array<number> | null | undefined): string {
    const list = (ids || []).map(id => this.assetIdToName[id] || `#${id}`);
    if (list.length <= 3) return list.join(', ') || '-';
    const shown = list.slice(0,3).join(', ');
    return `${shown} +${list.length-3} more`;
  }
  formatDate(value: string | null | undefined): string {
    if (!value) return '-';
    const d = new Date(value);
    if (isNaN(d.getTime())) return '-';
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  }


  getScheduledName(name: string | null | undefined) {
    switch (name) {
      case 'in_progress':
        return 'In Progress';
      case 'overdue':
        return 'Overdue';
      case 'completed':
        return 'Completed';
      case 'scheduled':
        return 'Scheduled';
      default:
        return name || 'Scheduled';
    }
  }
}


