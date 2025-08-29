import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../maintenance.service';
import { ScheduleDialogComponent } from '../components/schedule-dialog/schedule-dialog.component';
import { ScheduleMaintenance } from '../models';

@Component({
  selector: 'app-scheduled-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ScheduleDialogComponent],
  templateUrl: 'scheduled-page.component.html',
  styleUrls: ['scheduled-page.component.scss']
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

  constructor(private api: MaintenanceService) {}

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
        this.computeMetrics();
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
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
          String(s.maintenance_plan_id).includes(this.searchQuery) ||
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
  openDialog() { this.isDialogOpen = true; }
  onDialogClosed() { this.isDialogOpen = false; }
  onCreated() { this.isDialogOpen = false; this.fetchSchedules(); }
}


