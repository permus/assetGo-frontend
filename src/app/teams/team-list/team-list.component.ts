import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamService, TeamMember, TeamMemberStatistics, TeamMembersPaginatedResponse, Pagination, TeamAnalyticsResponse } from '../services/team.service';
import { TeamDeleteConfirmationModalComponent } from '../components/team-delete-confirmation-modal/team-delete-confirmation-modal.component';
import { TeamFormModalComponent } from '../components/team-form-modal/team-form-modal.component';
import { AssignWorkOrderModalComponent } from '../components/assign-work-order-modal/assign-work-order-modal.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, TeamDeleteConfirmationModalComponent, TeamFormModalComponent, AssignWorkOrderModalComponent]
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

  // Search and filtering
  searchTerm = '';

  // Sorting
  selectedSort: any = null;
  selectedRole: any = {label: 'All Roles', value: ''};
  selectedType: any = {label: 'All Types', value: ''};
  selectedStatus: any = {label: 'All Status', value: ''};
  selectedSortDir: 'asc' | 'desc' = 'asc';
  showSortDropdown = false;
  showRoleDropdown = false;
  showTypeDropdown = false;
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
    { label: 'Role', value: 'role' }
  ];

  roleOptions = [
    { label: 'All Roles', value: '' },
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' },
    {label: 'Technician', value: 'technician'}
  ];

  typeOptions = [
    { label: 'All Types', value: '' },
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' },
    {label: 'Technician', value: 'technician'}
  ];

  statusOptions = [
    { label: 'All Status', value: '' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' }
  ];

  constructor(
    private teamService: TeamService
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

    // Close all dropdowns if clicking outside
    this.teamMembers = this.teamMembers.map(tm => ({
      ...tm,
      showMenu: false
    }));
    this.filteredTeamMembers = this.filteredTeamMembers.map(tm => ({
      ...tm,
      showMenu: false
    }));
  }

  ngOnInit(): void {
    this.loadTeamMembers();
    this.loadStatistics();
  }

  loadTeamMembers(page: number = 1): void {
    this.loading = true;
    this.error = '';

    this.teamService.getTeamMembers(page, 15, {
      search: this.searchTerm || undefined,
      role_name: this.selectedRole?.value || undefined,
      status: this.selectedStatus?.value || undefined,
      type: this.selectedType?.value || undefined,
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
        console.error('Error loading team members:', error);
      }
    });
  }

  loadStatistics(): void {
    this.teamService.getTeamMemberStatistics().subscribe({
      next: (response: any) => {
        this.statistics = response.data;
      },
      error: (error: any) => {
        console.error('Error loading team member statistics:', error);
      }
    });

    // Load analytics panel data
    this.teamService.getTeamAnalytics({ date_range: 30 }).subscribe({
      next: (res) => { this.analytics = res.data; },
      error: (e) => { console.error('Error loading team analytics:', e); }
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
    // Set success message
    this.successMessage = `Work order successfully assigned to ${this.teamMemberToAssign?.first_name} ${this.teamMemberToAssign?.last_name}`;

    // Clear success message after 3 seconds
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);

    // Refresh the team member list to update the assigned work order count
    this.loadTeamMembers();
    this.closeAssign();
  }

  viewTeamMember(teamMember: TeamMember): void {
    // For now, we'll just show the team member details in a modal or navigate to a view page
    console.log('View team member:', teamMember);
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

    this.teamService.deleteTeamMember(this.teamMemberToDelete.id).subscribe({
      next: (response: any) => {
        this.teamMembers = this.teamMembers.filter(tm => tm.id !== this.teamMemberToDelete!.id);
        this.filteredTeamMembers = this.filteredTeamMembers.filter(tm => tm.id !== this.teamMemberToDelete!.id);
        this.closeDeleteModal();
      },
      error: (error: any) => {
        this.error = 'Failed to delete team member';
        console.error('Error deleting team member:', error);
      }
    });
  }

  closeFormModal(): void {
    this.showFormModal = false;
    this.teamMemberToEdit = null;
    this.isEditMode = false;
  }

  onTeamMemberSaved(teamMember: TeamMember): void {
    if (this.isEditMode) {
      const index = this.teamMembers.findIndex(tm => tm.id === teamMember.id);
      if (index !== -1) {
        this.teamMembers[index] = teamMember;
        this.filteredTeamMembers = this.filteredTeamMembers.map(tm =>
          tm.id === teamMember.id ? teamMember : tm
        );
      }
    } else {
      this.teamMembers.unshift(teamMember);
      this.filteredTeamMembers.unshift(teamMember);
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

  toggleTypeDropdown(): void {
    this.showTypeDropdown = !this.showTypeDropdown;
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

  selectType(type: any): void {
    this.selectedType = type;
    this.showTypeDropdown = false;
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
    this.teamMembers = this.teamMembers.map(tm => ({
      ...tm,
      showMenu: tm.id === teamMemberId ? !tm.showMenu : false
    }));
    this.filteredTeamMembers = this.filteredTeamMembers.map(tm => ({
      ...tm,
      showMenu: tm.id === teamMemberId ? !tm.showMenu : false
    }));
  }
}
