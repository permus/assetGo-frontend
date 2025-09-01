import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { MaintenanceService } from '../../maintenance.service';
import { ScheduleMaintenance } from '../../models';

@Component({
  selector: 'app-schedule-preview-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-preview-page.component.html',
  styleUrls: ['./schedule-preview-page.component.scss']
})
export class SchedulePreviewPageComponent implements OnInit {
  loading = false;
  error: string | null = null;
  schedule: ScheduleMaintenance | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private api: MaintenanceService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) { this.error = 'Invalid schedule id'; return; }
    this.fetch(id);
  }

  fetch(id: number) {
    this.loading = true;
    this.api.getSchedule(id).subscribe({
      next: (res) => {
        this.schedule = res?.data || res;
        this.loading = false;
      },
      error: () => { this.loading = false; this.error = 'Failed to load schedule'; }
    });
  }

  formatDate(value: string | null | undefined): string {
    if (!value) return '-';
    const d = new Date(value);
    if (isNaN(d.getTime())) return '-';
    return d.toLocaleString();
  }

  goBack() {
    this.router.navigate(['/maintenance/scheduled']);
  }
}


