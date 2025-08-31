import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceService } from '../maintenance.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss']
})
export class AnalyticsPageComponent implements OnInit {
  loading = false;
  error: string | null = null;
  // simple series placeholders
  trendLabels: string[] = [];
  trendData: number[] = [];
  typeBreakdown: { name: string; value: number }[] = [];
  monthlyCostsLabels: string[] = [];
  monthlyCostsData: number[] = [];

  constructor(private api: MaintenanceService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.loading = true;
    // Approximate analytics using schedules; swap to real endpoint later
    this.api.listSchedules({ per_page: 500 }).subscribe({
      next: (res) => {
        const items: any[] = Array.isArray(res?.data) ? res.data : (Array.isArray(res?.data?.schedules) ? res.data.schedules : []);
        // trend by month count (due_date month)
        const mapCounts: Record<string, number> = {};
        const mapCosts: Record<string, number> = {};
        for (const s of items) {
          const d = s.due_date ? new Date(s.due_date) : null;
          const key = d && !isNaN(d.getTime()) ? `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}` : 'unknown';
          mapCounts[key] = (mapCounts[key] || 0) + 1;
          // cost placeholder 0
          mapCosts[key] = (mapCosts[key] || 0) + (s.cost || 0);
        }
        this.trendLabels = Object.keys(mapCounts).sort();
        this.trendData = this.trendLabels.map(k => mapCounts[k]);

        this.monthlyCostsLabels = Object.keys(mapCosts).sort();
        this.monthlyCostsData = this.monthlyCostsLabels.map(k => mapCosts[k]);

        // type breakdown placeholder
        const breakdown: Record<string, number> = { preventive: 0, corrective: 0, emergency: 0 };
        for (const s of items) breakdown['preventive']++;
        this.typeBreakdown = Object.entries(breakdown).map(([name, value]) => ({ name, value }));

        this.loading = false;
      },
      error: () => { this.loading = false; this.error = 'Failed to load analytics'; }
    });
  }

  get totalCount(): number {
    let sum = 0;
    for (const n of this.trendData) sum += Number(n) || 0;
    return sum;
  }
}


