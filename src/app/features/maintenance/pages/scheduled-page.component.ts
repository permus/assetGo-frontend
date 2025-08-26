import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceService } from '../maintenance.service';
import { ScheduleMaintenance } from '../models';

@Component({
  selector: 'app-scheduled-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="text-xl font-semibold mb-4">Preventive Maintenance — Scheduled</h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <div class="rounded-xl border p-4">
        <div class="text-gray-500 text-sm">Total Scheduled</div>
        <div class="text-2xl font-semibold">{{total}}</div>
      </div>
      <div class="rounded-xl border p-4">
        <div class="text-gray-500 text-sm">Upcoming (7d)</div>
        <div class="text-2xl font-semibold">{{upcoming}}</div>
      </div>
      <div class="rounded-xl border p-4">
        <div class="text-gray-500 text-sm">In Progress</div>
        <div class="text-2xl font-semibold">{{inProgress}}</div>
      </div>
      <div class="rounded-xl border p-4">
        <div class="text-gray-500 text-sm">Overdue</div>
        <div class="text-2xl font-semibold">{{overdue}}</div>
      </div>
    </div>

    <div class="flex gap-2 mb-3">
      <button class="btn" [class.btn-primary]="filter==='all'" (click)="setFilter('all')">All</button>
      <button class="btn" [class.btn-primary]="filter==='scheduled'" (click)="setFilter('scheduled')">Scheduled</button>
      <button class="btn" [class.btn-primary]="filter==='in_progress'" (click)="setFilter('in_progress')">In Progress</button>
      <button class="btn" [class.btn-primary]="filter==='overdue'" (click)="setFilter('overdue')">Overdue</button>
    </div>

    <div *ngIf="filtered.length===0" class="rounded-xl border p-8 text-center text-gray-500">No items.</div>
    <div *ngIf="filtered.length>0" class="space-y-2">
      <div class="rounded-xl border p-3" *ngFor="let s of filtered">
        <div class="flex justify-between">
          <div>
            <div class="font-medium">Plan #{{s.maintenance_plan_id}}</div>
            <div class="text-sm text-gray-500">Status: {{s.status}} · Due: {{s.due_date || '-'}}</div>
          </div>
          <div class="text-sm">Priority: {{s.priority_id || '-'}}</div>
        </div>
      </div>
    </div>
  `
})
export class ScheduledPageComponent implements OnInit {
  all: ScheduleMaintenance[] = [];
  filtered: ScheduleMaintenance[] = [];
  filter: 'all' | 'scheduled' | 'in_progress' | 'overdue' = 'all';
  total = 0; upcoming = 0; inProgress = 0; overdue = 0;

  constructor(private api: MaintenanceService) {}

  ngOnInit() {
    this.api.listSchedules({ per_page: 100 }).subscribe(res => {
      const items: ScheduleMaintenance[] = Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.schedules) ? res.data.schedules : [];
      this.all = items;
      this.computeMetrics();
      this.applyFilter();
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

  setFilter(f: 'all' | 'scheduled' | 'in_progress' | 'overdue') { this.filter = f; this.applyFilter(); }
  applyFilter() {
    const today = new Date();
    if (this.filter === 'all') this.filtered = this.all;
    else if (this.filter === 'scheduled') this.filtered = this.all.filter(s => s.status === 'scheduled');
    else if (this.filter === 'in_progress') this.filtered = this.all.filter(s => s.status === 'in_progress');
    else if (this.filter === 'overdue') this.filtered = this.all.filter(s => s.due_date && new Date(s.due_date) < today && s.status !== 'completed');
  }
}


