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
    this.error = null;
    this.api.getSchedule(id).subscribe({
      next: (res) => {
        // Handle different response structures
        const scheduleData = res?.data?.schedule || res?.data || res;
        if (scheduleData && scheduleData.id) {
          // Ensure we have a fresh copy of the schedule data
          this.schedule = { ...scheduleData };
        } else {
          this.error = 'Schedule not found';
        }
        this.loading = false;
      },
      error: (err) => { 
        console.error('Error loading schedule:', err);
        this.loading = false; 
        this.error = 'Failed to load schedule'; 
      }
    });
  }

  formatDate(value: string | null | undefined): string {
    if (!value) return '-';
    const d = new Date(value);
    if (isNaN(d.getTime())) return '-';
    return d.toLocaleString();
  }

  getStatusName(status: string | null | undefined): string {
    if (!status) return 'Scheduled';
    switch (status) {
      case 'in_progress':
        return 'In Progress';
      case 'overdue':
        return 'Overdue';
      case 'completed':
        return 'Completed';
      case 'scheduled':
        return 'Scheduled';
      default:
        return status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ');
    }
  }

  getAssetNames(): string {
    if (!this.schedule) return '-';
    if (this.schedule.assets && Array.isArray(this.schedule.assets) && this.schedule.assets.length > 0) {
      return this.schedule.assets.map(a => a.name).join(', ');
    }
    // Fallback to IDs if assets array not available
    if (this.schedule.asset_ids && Array.isArray(this.schedule.asset_ids)) {
      return this.schedule.asset_ids.join(', ');
    }
    return '-';
  }

  goBack() {
    this.router.navigate(['/maintenance/scheduled']);
  }
}


