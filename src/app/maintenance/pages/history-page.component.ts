import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../maintenance.service';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'history-page.component.html',
  styleUrls: ['history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  loading = false;
  error: string | null = null;
  all: any[] = [];
  filtered: any[] = [];
  search = '';
  filter: 'all' | 'preventive' | 'predictive' | 'condition_based' = 'all';

  constructor(private api: MaintenanceService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.loading = true;
    // placeholder until backend endpoint exists; integrate when available
    this.api.listSchedules({ status: 'completed', per_page: 100 }).subscribe({
      next: (res) => {
        const items = Array.isArray(res?.data) ? res.data : (Array.isArray(res?.data?.schedules) ? res.data.schedules : []);
        // map schedules to simple history rows (completed items only)
        this.all = items.filter((s: any) => s.status === 'completed');
        this.apply();
        this.loading = false;
      },
      error: () => { this.loading = false; this.error = 'Failed to load history'; }
    });
  }

  apply() {
    const base = this.search ? this.all.filter(h => String(h.maintenance_plan_id).includes(this.search)) : this.all;
    this.filtered = this.filter === 'all' ? base : base.filter(h => (h.plan_type || 'preventive') === this.filter);
  }
}


