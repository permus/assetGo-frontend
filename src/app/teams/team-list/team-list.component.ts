import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamService, TeamMember, TeamMemberStatistics, TeamMembersPaginatedResponse, Pagination, TeamAnalyticsResponse } from '../services/team.service';
import { TeamDeleteConfirmationModalComponent } from '../components/team-delete-confirmation-modal/team-delete-confirmation-modal.component';
import { TeamFormModalComponent } from '../components/team-form-modal/team-form-modal.component';
import { AssignWorkOrderModalComponent } from '../components/assign-work-order-modal/assign-work-order-modal.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, TeamDeleteConfirmationModalComponent, TeamFormModalComponent, AssignWorkOrderModalComponent, PaginationComponent]
})
export class TeamListComponent implements OnInit {
  teamMembers: TeamMember[] = [];
  filteredTeamMembers: TeamMember[] = [];
  pagination: Pagination | null = null;
  loading = false;
  error = '';
  successMessage = '';
  statistics: TeamMemberStatistics | null = null;
  analytics: TeamAnalyticsResponse['data'] | null = null;
  currentPerPage = 10;

  // Search and filtering
  searchTerm = '';

  // Sorting
  selectedSort: any = null;
  selectedRole: any = {label: 'All Roles', value: ''};
  selectedStatus: any = {label: 'All Status', value: ''};
  selectedSortDir: 'asc' | 'desc' = 'asc';
  showSortDropdown = false;
  showRoleDropdown = false;
  showStatusDropdown = false;

  // Modal states
  showDeleteModal = false;
  teamMemberToDelete: TeamMember | null = null;
  showFormModal = false;
  teamMemberToEdit: TeamMember | null = null;
  isEditMode = false;
  showAssignModal = false;
  teamMemberToAssign: TeamMember | null = null;

  // Sort options
  sortOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Created Date', value: 'created_at' },
    { label: 'Email', value: 'email' },
    { label: 'Role', value: 'role_name' }
  ];

  roleOptions = [
    { label: 'All Roles', value: '' },
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' },
    {label: 'Technician', value: 'technician'}
  ];

  // Removed redundant "Types" filter (duplicated Roles)

  statusOptions = [
    { label: 'All Status', value: '' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' }
  ];

  constructor(
    private teamService: TeamService,
    private toastService: ToastService,
    private cdr: ChangeDetectorRef
  ) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdownButton = target.closest('button');
    const dropdownMenu = target.closest('.dropdown-menu');

    // Don't close if clicking on dropdown elements
    if (dropdownButton || dropdownMenu) {
      return;
    }

    // Close all team member menu dropdowns
    this.teamMembers = this.teamMembers.map(tm => ({
      ...tm,
      showMenu: false
    }));
    this.filteredTeamMembers = this.filteredTeamMembers.map(tm => ({
      ...tm,
      showMenu: false
    }));

    // Close all filter dropdowns
    this.showSortDropdown = false;
    this.showRoleDropdown = false;
    this.showStatusDropdown = false;
  }

  // Removed scroll prevention listener as it might interfere with dropdown functionality

  ngOnInit(): void {
    this.loadTeamMembers();
    this.loadStatistics();
  }

  loadTeamMembers(page: number = 1, perPage: number = 10): void {
    this.loading = true;
    this.error = '';

    // Convert status filter to active parameter
    let activeParam: boolean | undefined;
    if (this.selectedStatus?.value === 'active') {
      activeParam = true;
    } else if (this.selectedStatus?.value === 'inactive') {
      activeParam = false;
    }

    this.teamService.getTeamMembers(page, perPage, {
      search: this.searchTerm || undefined,
      role_name: this.selectedRole?.value || undefined,
      active: activeParam,
      sort_by: this.selectedSort?.value || undefined,
      sort_dir: this.selectedSortDir
    }).subscribe({
      next: (response: TeamMembersPaginatedResponse) => {
        this.teamMembers = response.data.teams;
        this.pagination = response.data.pagination;
        this.filteredTeamMembers = [...this.teamMembers];
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Failed to load team members';
        this.loading = false;
        this.toastService.error('Failed to load team members');
      }
    });
  }

  loadStatistics(): void {
    this.teamService.getTeamMemberStatistics().subscribe({
      next: (response: any) => {
        this.statistics = response.data;
      },
      error: (error: any) => {
        this.toastService.error('Failed to load team statistics');
      }
    });

    // Load analytics panel data
    this.teamService.getTeamAnalytics({ date_range: 30 }).subscribe({
      next: (res) => { this.analytics = res.data; },
      error: (e) => { this.toastService.error('Failed to load team analytics'); }
    });
  }

  refreshStats(): void {
    this.loadStatistics();
  }

  createTeamMember(): void {
    this.teamMemberToEdit = null;
    this.isEditMode = false;
    this.showFormModal = true;
  }

  editTeamMember(teamMember: TeamMember): void {
    this.teamMemberToEdit = teamMember;
    this.isEditMode = true;
    this.showFormModal = true;
  }

  openAssign(teamMember: TeamMember): void {
    this.teamMemberToAssign = teamMember;
    this.showAssignModal = true;
  }

  closeAssign(): void {
    this.showAssignModal = false;
    this.teamMemberToAssign = null;
  }

  onAssignmentSubmitted(data: { work_order_id: number; due_date?: string; notes?: string }): void {
    // Show success toast
    this.toastService.success(`Work order #${data.work_order_id} successfully assigned to ${this.teamMemberToAssign?.first_name} ${this.teamMemberToAssign?.last_name}`);

    // Refresh the team member list to update the assigned work order count
    this.loadTeamMembers(this.pagination?.current_page || 1, this.currentPerPage);
    this.loadStatistics(); // Also refresh statistics
    this.closeAssign();
  }

  viewTeamMember(teamMember: TeamMember): void {
    // For now, we'll just show the team member details in a modal or navigate to a view page
    this.toastService.info('View team member feature coming soon');
  }

  deleteTeamMember(teamMember: TeamMember): void {
    this.teamMemberToDelete = teamMember;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.teamMemberToDelete = null;
  }

  confirmDeleteTeamMember(data: { teamId: number, reason: string }): void {
    if (!this.teamMemberToDelete) return;

    const memberName = `${this.teamMemberToDelete.first_name} ${this.teamMemberToDelete.last_name}`;

    this.teamService.deleteTeamMember(this.teamMemberToDelete.id).subscribe({
      next: (response: any) => {
        this.teamMembers = this.teamMembers.filter(tm => tm.id !== this.teamMemberToDelete!.id);
        this.filteredTeamMembers = this.filteredTeamMembers.filter(tm => tm.id !== this.teamMemberToDelete!.id);
        this.toastService.success(`Team member ${memberName} removed successfully`);
        this.closeDeleteModal();
      },
      error: (error: any) => {
        this.error = 'Failed to delete team member';
        this.toastService.error('Failed to delete team member');
        this.closeDeleteModal();
      }
    });
  }

  closeFormModal(): void {
    this.showFormModal = false;
    this.teamMemberToEdit = null;
    this.isEditMode = false;
  }

  onTeamMemberSaved(teamMember: TeamMember): void {
    const memberName = `${teamMember.first_name} ${teamMember.last_name}`;

    if (this.isEditMode) {
      const index = this.teamMembers.findIndex(tm => tm.id === teamMember.id);
      if (index !== -1) {
        this.teamMembers[index] = teamMember;
        this.filteredTeamMembers = this.filteredTeamMembers.map(tm =>
          tm.id === teamMember.id ? teamMember : tm
        );
      }
      this.toastService.success(`Team member ${memberName} updated successfully`);
    } else {
      this.teamMembers.unshift(teamMember);
      this.filteredTeamMembers.unshift(teamMember);
      this.toastService.success(`Team member ${memberName} created successfully`);
    }
    this.closeFormModal();
  }

  onSearchChange(): void {
    // Server-side search
    this.loadTeamMembers(1);
  }

  filterTeamMembers(): void {
    if (!this.searchTerm.trim()) {
      this.filteredTeamMembers = [...this.teamMembers];
    } else {
      this.filteredTeamMembers = this.teamMembers.filter(teamMember =>
        `${teamMember.first_name} ${teamMember.last_name}`.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        teamMember.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (teamMember.role?.name && teamMember.role.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
    this.sortTeamMembers();
  }

  toggleSortDropdown(): void {
    this.showSortDropdown = !this.showSortDropdown;
  }
  toggleRoleDropdown(): void {
    this.showRoleDropdown = !this.showRoleDropdown;
  }

  toggleStatusDropdown(): void {
    this.showStatusDropdown = !this.showStatusDropdown;
  }

  selectSort(sort: any): void {
    this.selectedSort = sort;
    this.showSortDropdown = false;
    this.loadTeamMembers(1);
  }

  selectRole(role: any): void {
    this.selectedRole = role;
    this.showRoleDropdown = false;
    this.loadTeamMembers(1);
  }

  selectStatus(status: any): void {
    this.selectedStatus = status;
    this.showStatusDropdown = false;
    this.loadTeamMembers(1);
  }

  toggleSortDir(): void {
    this.selectedSortDir = this.selectedSortDir === 'asc' ? 'desc' : 'asc';
    this.loadTeamMembers(1);
  }

  sortTeamMembers(): void {
    if (!this.selectedSort) return;

    this.filteredTeamMembers.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (this.selectedSort.value) {
        case 'name':
          aValue = `${a.first_name} ${a.last_name}`.toLowerCase();
          bValue = `${b.first_name} ${b.last_name}`.toLowerCase();
          break;
        case 'email':
          aValue = a.email.toLowerCase();
          bValue = b.email.toLowerCase();
          break;
        case 'created_at':
          aValue = new Date(a.created_at).getTime();
          bValue = new Date(b.created_at).getTime();
          break;
        case 'role':
          aValue = (a.role?.name || '').toLowerCase();
          bValue = (b.role?.name || '').toLowerCase();
          break;
        default:
          aValue = `${a.first_name} ${a.last_name}`.toLowerCase();
          bValue = `${b.first_name} ${b.last_name}`.toLowerCase();
      }

      if (aValue < bValue) {
        return this.selectedSortDir === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.selectedSortDir === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getTeamMemberFullName(teamMember: TeamMember): string {
    return `${teamMember.first_name} ${teamMember.last_name}`;
  }

  getTeamMemberInitials(teamMember: TeamMember): string {
    return `${teamMember.first_name.charAt(0)}${teamMember.last_name.charAt(0)}`.toUpperCase();
  }

  toggleTeamMemberMenu(teamMemberId: number): void {
    // Close all other dropdowns first and toggle the specific one
    this.teamMembers = this.teamMembers.map(tm => ({
      ...tm,
      showMenu: tm.id === teamMemberId ? !tm.showMenu : false
    }));
    this.filteredTeamMembers = this.filteredTeamMembers.map(tm => ({
      ...tm,
      showMenu: tm.id === teamMemberId ? !tm.showMenu : false
    }));
  }

  // Pagination event handlers
  onPageChange(page: number): void {
    this.loadTeamMembers(page, this.currentPerPage);
  }

  onPerPageChange(perPage: number): void {
    // Update the per_page parameter and reload from page 1
    this.currentPerPage = perPage;
    this.loadTeamMembers(1, perPage);
  }

  // Toggle team member active/inactive status
  toggleTeamMemberStatus(teamMember: TeamMember): void {
    const memberName = `${teamMember.first_name} ${teamMember.last_name}`;
    const currentStatus = teamMember.active ? 'active' : 'inactive';
    const newStatus = teamMember.active ? 'inactive' : 'active';

    this.teamService.toggleTeamMemberStatus(teamMember.id).subscribe({
      next: (response: any) => {
        // Update the team member in both arrays
        const updatedTeamMember = { ...teamMember, active: !teamMember.active };

        const teamIndex = this.teamMembers.findIndex(tm => tm.id === teamMember.id);
        if (teamIndex !== -1) {
          this.teamMembers[teamIndex] = updatedTeamMember;
        }

        const filteredIndex = this.filteredTeamMembers.findIndex(tm => tm.id === teamMember.id);
        if (filteredIndex !== -1) {
          this.filteredTeamMembers[filteredIndex] = updatedTeamMember;
        }

        this.toastService.success(`Team member ${memberName} status changed to ${newStatus}`);

        // Refresh statistics to update active/inactive counts (without scrolling)
        setTimeout(() => {
          this.loadStatistics();
        }, 100);
      },
      error: (error: any) => {
        this.toastService.error(`Failed to update ${memberName}'s status`);
      }
    });
  }

  // New click handlers with proper event prevention
  onEditClick(event: Event, teamMember: TeamMember): void {
    event.preventDefault();
    event.stopPropagation();
    this.closeAllDropdowns();
    this.editTeamMember(teamMember);
  }

  onToggleStatusClick(event: Event, teamMember: TeamMember): void {
    event.preventDefault();
    event.stopPropagation();
    this.closeAllDropdowns();
    this.toggleTeamMemberStatus(teamMember);
  }

  onDeleteClick(event: Event, teamMember: TeamMember): void {
    event.preventDefault();
    event.stopPropagation();
    this.closeAllDropdowns();
    this.deleteTeamMember(teamMember);
  }

  onToggleMenuClick(event: Event, teamMemberId: number): void {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    console.log('Toggle menu clicked for team member:', teamMemberId);
    
    // Store current scroll position
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Store original styles
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    
    // Prevent scroll while preserving scrollbar space
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${currentScrollTop}px`;
    document.body.style.width = '100%';
    
    this.toggleTeamMemberMenu(teamMemberId);
    
    // Re-enable scroll after DOM update
    setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, currentScrollTop);
    }, 50);
    
    console.log('After toggle, showMenu states:', this.teamMembers.map(tm => ({ id: tm.id, showMenu: tm.showMenu })));
  }

  private closeAllDropdowns(): void {
    this.teamMembers = this.teamMembers.map(tm => ({
      ...tm,
      showMenu: false
    }));
    this.filteredTeamMembers = this.filteredTeamMembers.map(tm => ({
      ...tm,
      showMenu: false
    }));
  }
}
