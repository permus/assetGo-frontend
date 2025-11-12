import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleAssignment } from '../models';
import { ConfirmationModalComponent } from '../../shared/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-assigned-users-list',
  standalone: true,
  imports: [CommonModule, ConfirmationModalComponent],
  templateUrl: './assigned-users-list.component.html',
  styleUrls: ['./assigned-users-list.component.scss']
})
export class AssignedUsersListComponent {
  @Input() assignments: ScheduleAssignment[] = [];
  @Input() loading = false;
  @Output() removeAssignment = new EventEmitter<number>();
  
  // Confirmation modal state
  showConfirmModal = false;
  assignmentToRemove: number | null = null;
  userToRemoveName = '';

  getUserInitials(assignment: ScheduleAssignment): string {
    const firstInitial = assignment.user.first_name?.charAt(0) || '';
    const lastInitial = assignment.user.last_name?.charAt(0) || '';
    return (firstInitial + lastInitial).toUpperCase();
  }

  getRoleBadgeClass(userType: string): string {
    const roleMap: { [key: string]: string } = {
      'admin': 'badge-admin',
      'manager': 'badge-manager',
      'team': 'badge-team',
      'owner': 'badge-owner'
    };
    return roleMap[userType] || 'badge-default';
  }

  getRoleLabel(userType: string): string {
    const roleMap: { [key: string]: string } = {
      'admin': 'Admin',
      'manager': 'Manager',
      'team': 'Team Member',
      'owner': 'Owner'
    };
    return roleMap[userType] || userType;
  }

  getProgressColor(percentage: number): string {
    if (percentage === 100) return '#10b981';
    if (percentage >= 50) return '#3b82f6';
    if (percentage > 0) return '#f59e0b';
    return '#9ca3af';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  onRemove(assignment: ScheduleAssignment): void {
    this.assignmentToRemove = assignment.id;
    this.userToRemoveName = `${assignment.user.first_name} ${assignment.user.last_name}`;
    this.showConfirmModal = true;
  }

  confirmRemoval(): void {
    if (this.assignmentToRemove !== null) {
      this.removeAssignment.emit(this.assignmentToRemove);
      this.assignmentToRemove = null;
      this.userToRemoveName = '';
    }
  }

  cancelRemoval(): void {
    this.assignmentToRemove = null;
    this.userToRemoveName = '';
  }
}

