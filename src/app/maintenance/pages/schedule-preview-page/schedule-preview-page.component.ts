import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { MaintenanceService } from '../../maintenance.service';
import { ScheduleMaintenance, ScheduleAssignment } from '../../models';
import { AssignTeamDialogComponent } from '../../components/assign-team-dialog.component';
import { AssignedUsersListComponent } from '../../components/assigned-users-list.component';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-schedule-preview-page',
  standalone: true,
  imports: [CommonModule, AssignTeamDialogComponent, AssignedUsersListComponent],
  templateUrl: './schedule-preview-page.component.html',
  styleUrls: ['./schedule-preview-page.component.scss']
})
export class SchedulePreviewPageComponent implements OnInit {
  loading = false;
  error: string | null = null;
  schedule: ScheduleMaintenance | null = null;
  
  // Assignment management
  assignments: ScheduleAssignment[] = [];
  assignmentsLoading = false;
  isAssignDialogOpen = false;
  scheduleId: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private api: MaintenanceService,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) { this.error = 'Invalid schedule id'; return; }
    this.scheduleId = id;
    this.fetch(id);
    this.loadAssignments(id);
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

  loadAssignments(scheduleId: number): void {
    this.assignmentsLoading = true;
    this.api.getScheduleAssignments(scheduleId).subscribe({
      next: (response) => {
        this.assignments = response.data;
        this.assignmentsLoading = false;
      },
      error: (error) => {
        console.error('Error loading assignments:', error);
        this.assignmentsLoading = false;
      }
    });
  }

  openAssignDialog(): void {
    this.isAssignDialogOpen = true;
  }

  onAssigned(): void {
    this.loadAssignments(this.scheduleId);
  }

  onRemoveAssignment(assignmentId: number): void {
    this.api.removeAssignment(assignmentId).subscribe({
      next: () => {
        this.toastService.success('Assignment removed successfully');
        this.loadAssignments(this.scheduleId);
      },
      error: (error) => {
        console.error('Error removing assignment:', error);
        this.toastService.error('Failed to remove assignment. Please try again.');
      }
    });
  }

  canManageAssignments(): boolean {
    const user = this.authService.getCurrentUser();
    if (!user) return false;
    const userType = user.user_type?.toLowerCase();
    return userType === 'admin' || userType === 'manager' || userType === 'owner';
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


