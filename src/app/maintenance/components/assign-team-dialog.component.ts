import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../maintenance.service';
import { AssignableUser } from '../models';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-assign-team-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assign-team-dialog.component.html',
  styleUrls: ['./assign-team-dialog.component.scss']
})
export class AssignTeamDialogComponent implements OnInit {
  @Input() scheduleId!: number;
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Output() assigned = new EventEmitter<void>();

  loading = false;
  saving = false;
  users: AssignableUser[] = [];
  filteredUsers: AssignableUser[] = [];
  selectedUsers: Set<number> = new Set();
  searchQuery = '';

  constructor(
    private service: MaintenanceService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    if (this.isOpen) {
      this.loadUsers();
    }
  }

  ngOnChanges(): void {
    if (this.isOpen && this.users.length === 0) {
      this.loadUsers();
    }
  }

  loadUsers(): void {
    this.loading = true;
    this.service.getAssignableUsers(this.scheduleId).subscribe({
      next: (response) => {
        this.users = response.data;
        this.filteredUsers = this.users;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.loading = false;
      }
    });
  }

  onSearchChange(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  }

  toggleUser(userId: number): void {
    if (this.selectedUsers.has(userId)) {
      this.selectedUsers.delete(userId);
    } else {
      this.selectedUsers.add(userId);
    }
  }

  isSelected(userId: number): boolean {
    return this.selectedUsers.has(userId);
  }

  getUserInitials(user: AssignableUser): string {
    const firstInitial = user.first_name?.charAt(0) || '';
    const lastInitial = user.last_name?.charAt(0) || '';
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

  assign(): void {
    if (this.selectedUsers.size === 0) return;

    this.saving = true;
    const userIds = Array.from(this.selectedUsers);
    let completed = 0;
    let successCount = 0;
    let hasError = false;

    userIds.forEach(userId => {
      this.service.assignUserToSchedule(this.scheduleId, userId).subscribe({
        next: () => {
          completed++;
          successCount++;
          if (completed === userIds.length) {
            this.saving = false;
            if (!hasError) {
              this.toastService.success(`Successfully assigned ${successCount} user${successCount > 1 ? 's' : ''}`);
              this.assigned.emit();
              this.close();
            } else {
              this.toastService.warning(`Assigned ${successCount} of ${userIds.length} users. Some assignments failed.`);
              this.assigned.emit();
              this.close();
            }
          }
        },
        error: (error) => {
          console.error('Error assigning user:', error);
          hasError = true;
          completed++;
          if (completed === userIds.length) {
            this.saving = false;
            if (successCount > 0) {
              this.toastService.warning(`Assigned ${successCount} of ${userIds.length} users. Some assignments failed.`);
              this.assigned.emit();
              this.close();
            } else {
              this.toastService.error('Failed to assign users. Please try again.');
            }
          }
        }
      });
    });
  }

  close(): void {
    this.isOpen = false;
    this.isOpenChange.emit(false);
    this.selectedUsers.clear();
    this.searchQuery = '';
    this.filteredUsers = this.users;
  }
}

