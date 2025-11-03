import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUsersService, User, TeamMember } from '../../../services/admin-users.service';
import { SuspendActivateConfirmationModalComponent } from '../../../components/suspend-activate-confirmation-modal/suspend-activate-confirmation-modal.component';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, SuspendActivateConfirmationModalComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;
  loading = false;
  userId: number | null = null;
  
  // Teams pagination
  teams: TeamMember[] = [];
  teamsLoading = false;
  teamsCurrentPage = 1;
  teamsPerPage = 15;
  teamsTotal = 0;
  teamsLastPage = 1;
  
  // Confirmation modal
  showConfirmModal = false;
  confirmModalLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminUsersService: AdminUsersService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      if (this.userId) {
        this.loadUserDetails();
        this.loadTeams();
      }
    });
  }

  loadUserDetails(): void {
    if (!this.userId) return;

    this.loading = true;
    this.adminUsersService.getUser(this.userId).subscribe({
      next: (response) => {
        if (response.success) {
          this.user = response.data.user;
        }
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.toastService.error('Failed to load user details');
        console.error(error);
      }
    });
  }

  loadTeams(page: number = 1): void {
    if (!this.userId) return;

    this.teamsLoading = true;
    this.teamsCurrentPage = page;
    
    this.adminUsersService.getCreatedTeams(this.userId, {
      page: this.teamsCurrentPage,
      per_page: this.teamsPerPage,
      sort_by: 'created_at',
      sort_dir: 'desc'
    }).subscribe({
      next: (response) => {
        if (response.success) {
          this.teams = response.data.teams;
          this.teamsTotal = response.data.pagination.total;
          this.teamsLastPage = response.data.pagination.last_page;
          this.teamsCurrentPage = response.data.pagination.current_page;
        }
        this.teamsLoading = false;
      },
      error: () => {
        this.teamsLoading = false;
      }
    });
  }

  onTeamsPageChange(page: number): void {
    this.loadTeams(page);
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getRoleName(teamMember: TeamMember): string {
    if (teamMember.roles && teamMember.roles.length > 0) {
      return teamMember.roles[0].name;
    }
    return 'N/A';
  }

  toggleUserStatus(): void {
    if (!this.user) return;
    this.showConfirmModal = true;
  }

  onConfirmStatusChange(newStatus: boolean): void {
    if (!this.user || !this.userId) return;

    this.confirmModalLoading = true;
    this.adminUsersService.updateUser(this.userId, { active: newStatus }).subscribe({
      next: () => {
        if (this.user) {
          this.user.active = newStatus;
        }
        this.showConfirmModal = false;
        this.confirmModalLoading = false;
        this.toastService.success(`User ${newStatus ? 'activated' : 'suspended'} successfully`);
      },
      error: (error) => {
        this.confirmModalLoading = false;
        this.toastService.error(`Failed to ${newStatus ? 'activate' : 'suspend'} user`);
        console.error(error);
      }
    });
  }

  onCloseConfirmModal(): void {
    this.showConfirmModal = false;
  }

  goBack(): void {
    this.router.navigate(['/admin/users']);
  }

  Math = Math;
}
