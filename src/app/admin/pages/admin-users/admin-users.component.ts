import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AdminUsersService, User } from '../../services/admin-users.service';
import { SuspendActivateConfirmationModalComponent } from '../../components/suspend-activate-confirmation-modal/suspend-activate-confirmation-modal.component';
import { ChangePasswordModalComponent } from '../../components/change-password-modal/change-password-modal.component';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, FormsModule, SuspendActivateConfirmationModalComponent, ChangePasswordModalComponent],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent implements OnInit, OnDestroy {

  users: User[] = [];
  loading = false;
  searchTerm = '';
  selectedUserType: string | null = 'admin'; // Default to 'admin'
  currentPage = 1;
  perPage = 15;
  total = 0;
  lastPage = 1;

  userTypeOptions = [
    { value: null, label: 'All' },
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
    { value: 'manager', label: 'Manager' },
    { value: 'team', label: 'Team' },
    { value: 'owner', label: 'Owner' }
  ];

  // Confirmation modal
  showConfirmModal = false;
  selectedUser: User | null = null;
  confirmModalLoading = false;

  // Change password modal
  showChangePasswordModal = false;
  changePasswordLoading = false;

  // View mode: 'list' or 'grid'
  viewMode: 'list' | 'grid' = 'list';

  // Inline editing for team limit
  editingTeamLimitUserId: number | null = null;
  editingTeamLimitValue: number | null = null;
  savingTeamLimit = false;

  // Search subject for debounced search
  private searchSubject = new Subject<string>();

  constructor(
    private adminUsersService: AdminUsersService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    // Subscribe to search term changes with debounce
    this.searchSubject.pipe(
      debounceTime(500), // Wait 500ms after user stops typing
      distinctUntilChanged() // Only emit if value actually changed
    ).subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      this.currentPage = 1;
      this.loadUsers();
    });

    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.searchSubject.complete();
  }

  loadUsers(): void {
    this.loading = true;
    this.adminUsersService.getUsers({
      page: this.currentPage,
      per_page: this.perPage,
      search: this.searchTerm || undefined,
      user_type: this.selectedUserType || undefined,
      sort_by: 'created_at',
      sort_dir: 'desc'
    }).subscribe({
      next: (response) => {
        if (response.success) {
          this.users = response.data.users;
          this.total = response.data.pagination.total;
          this.lastPage = response.data.pagination.last_page;
          this.currentPage = response.data.pagination.current_page;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    // Trigger immediate search (bypass debounce for button click)
    this.currentPage = 1;
    this.loadUsers();
  }

  onSearchInputChange(): void {
    // Emit search term to subject for debounced search
    this.searchSubject.next(this.searchTerm);
  }

  onUserTypeFilter(): void {
    this.currentPage = 1;
    this.loadUsers();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadUsers();
  }

  toggleUserStatus(user: User): void {
    this.selectedUser = user;
    this.showConfirmModal = true;
  }

  onConfirmStatusChange(newStatus: boolean): void {
    if (!this.selectedUser) return;

    this.confirmModalLoading = true;
    const action = newStatus ? 'activate' : 'suspend';
    
    this.adminUsersService.updateUser(this.selectedUser.id, { active: newStatus }).subscribe({
      next: () => {
        this.selectedUser!.active = newStatus;
        this.showConfirmModal = false;
        this.selectedUser = null;
        this.confirmModalLoading = false;
        this.toastService.success(`User ${action}d successfully`);
      },
      error: (error) => {
        this.confirmModalLoading = false;
        this.toastService.error(`Failed to ${action} user`);
        console.error(error);
      }
    });
  }

  onCloseConfirmModal(): void {
    this.showConfirmModal = false;
    this.selectedUser = null;
  }

  viewUser(user: User): void {
    this.router.navigate(['/admin/users', user.id]);
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'list' ? 'grid' : 'list';
  }

  createUser(): void {
    this.router.navigate(['/admin/users/create']);
  }

  changePassword(user: User): void {
    this.selectedUser = user;
    this.showChangePasswordModal = true;
  }

  onPasswordChanged(): void {
    this.showChangePasswordModal = false;
    this.selectedUser = null;
  }

  onCloseChangePasswordModal(): void {
    this.showChangePasswordModal = false;
    this.selectedUser = null;
  }

  // Inline editing methods for team limit
  startEditingTeamLimit(user: User): void {
    this.editingTeamLimitUserId = user.id;
    this.editingTeamLimitValue = user.teams_allowed_count ?? null;
  }

  cancelEditingTeamLimit(): void {
    this.editingTeamLimitUserId = null;
    this.editingTeamLimitValue = null;
  }

  saveTeamLimit(userId: number): void {
    if (this.editingTeamLimitValue !== null && this.editingTeamLimitValue < 0) {
      this.toastService.error('Team limit cannot be negative');
      return;
    }

    this.savingTeamLimit = true;
    this.adminUsersService.updateUser(userId, {
      teams_allowed_count: this.editingTeamLimitValue ?? undefined
    }).subscribe({
      next: (response) => {
        if (response.success) {
          // Update the user in the local array
          const userIndex = this.users.findIndex(u => u.id === userId);
          if (userIndex !== -1) {
            this.users[userIndex].teams_allowed_count = this.editingTeamLimitValue ?? undefined;
          }
          this.toastService.success('Team limit updated successfully');
          this.cancelEditingTeamLimit();
        }
        this.savingTeamLimit = false;
      },
      error: (error) => {
        this.savingTeamLimit = false;
        this.toastService.error('Failed to update team limit');
        console.error(error);
      }
    });
  }

  isEditingTeamLimit(userId: number): boolean {
    return this.editingTeamLimitUserId === userId;
  }

  Math = Math;
}

