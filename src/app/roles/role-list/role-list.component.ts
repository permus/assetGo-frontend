import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RoleService, Role } from '../services/role.service';
import { RoleDeleteConfirmationModalComponent } from '../components/role-delete-confirmation-modal/role-delete-confirmation-modal.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RoleDeleteConfirmationModalComponent]
})
export class RoleListComponent implements OnInit {
  roles: Role[] = [];
  filteredRoles: Role[] = [];
  loading = false;
  error = '';
  
  // Search and filtering
  searchTerm = '';
  
  // Sorting
  selectedSort: any = null;
  selectedSortDir: 'asc' | 'desc' = 'asc';
  showSortDropdown = false;
  
  // View type
  viewType: 'grid' | 'list' = 'grid';
  
  // Delete modal
  showDeleteModal = false;
  roleToDelete: Role | null = null;
  
  // Sort options
  sortOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Created Date', value: 'created_at' },
    { label: 'Users Count', value: 'users_count' },
    { label: 'Permissions', value: 'permissions' }
  ];

  constructor(
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.loading = true;
    this.error = '';

    this.roleService.getRoles().subscribe({
      next: (response: any) => {
        this.roles = response.data;
        this.filteredRoles = [...this.roles];
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Failed to load roles';
        this.loading = false;
        console.error('Error loading roles:', error);
      }
    });
  }

  createRole(): void {
    this.router.navigate(['/roles/create']);
  }

  editRole(role: Role): void {
    this.router.navigate(['/roles/edit', role.id]);
  }

  deleteRole(role: Role): void {
    this.roleToDelete = role;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.roleToDelete = null;
  }

  confirmDeleteRole(data: { roleId: number, reason: string }): void {
    this.roleService.deleteRole(data.roleId).subscribe({
      next: () => {
        this.loadRoles();
        this.closeDeleteModal();
        // You could add a success notification here
      },
      error: (error: any) => {
        console.error('Error deleting role:', error);
        // You could add an error notification here instead of alert
        alert('Failed to delete role');
      }
    });
  }

  getPermissionSummary(role: Role): string {
    if (!role.permissions) return 'No permissions';
    
    const permissions = role.permissions.permissions;
    const modules = Object.keys(permissions);
    const totalPermissions = modules.reduce((total, module) => {
      return total + Object.values(permissions[module]).filter(Boolean).length;
    }, 0);
    
    return `${totalPermissions} permissions across ${modules.length} modules`;
  }

  // New methods for the enhanced UI
  getActiveRolesCount(): number {
    return this.roles.length; // All roles are considered active for now
  }

  getTotalUsersCount(): number {
    return this.roles.reduce((total, role) => total + (role.users_count || 0), 0);
  }

  getTotalPermissionsCount(): number {
    return this.roles.reduce((total, role) => {
      if (!role.permissions) return total;
      const permissions = role.permissions.permissions;
      const modules = Object.keys(permissions);
      const rolePermissions = modules.reduce((moduleTotal, module) => {
        return moduleTotal + Object.values(permissions[module]).filter(Boolean).length;
      }, 0);
      return total + rolePermissions;
    }, 0);
  }

  getPermissionScore(role: Role): number {
    if (!role.permissions) return 0;
    
    const permissions = role.permissions.permissions;
    const modules = Object.keys(permissions);
    if (modules.length === 0) return 0;
    
    const totalPermissions = modules.reduce((total, module) => {
      return total + Object.values(permissions[module]).filter(Boolean).length;
    }, 0);
    
    const maxPossiblePermissions = modules.length * 5; // 5 permissions per module
    return Math.round((totalPermissions / maxPossiblePermissions) * 100);
  }

  onSearchChange(): void {
    this.filterRoles();
  }

  filterRoles(): void {
    if (!this.searchTerm.trim()) {
      this.filteredRoles = [...this.roles];
    } else {
      this.filteredRoles = this.roles.filter(role =>
        role.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (role.description && role.description.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
    this.sortRoles();
  }

  toggleSortDropdown(): void {
    this.showSortDropdown = !this.showSortDropdown;
  }

  selectSort(sort: any): void {
    this.selectedSort = sort;
    this.sortRoles();
  }

  toggleSortDir(): void {
    this.selectedSortDir = this.selectedSortDir === 'asc' ? 'desc' : 'asc';
    this.sortRoles();
  }

  sortRoles(): void {
    if (!this.selectedSort) return;

    this.filteredRoles.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (this.selectedSort.value) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'created_at':
          aValue = new Date(a.created_at).getTime();
          bValue = new Date(b.created_at).getTime();
          break;
        case 'users_count':
          aValue = a.users_count || 0;
          bValue = b.users_count || 0;
          break;
        case 'permissions':
          aValue = this.getPermissionScore(a);
          bValue = this.getPermissionScore(b);
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (this.selectedSortDir === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  toggleRoleMenu(roleId: number): void {
    this.roles.forEach(role => {
      role.showMenu = role.id === roleId ? !role.showMenu : false;
    });
  }
} 