import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService, Team } from '../services/team.service';
import { RoleService, Role } from '../../roles/services/role.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  teamForm: FormGroup;
  isEditMode = false;
  teamId: number | null = null;
  team: Team | null = null;
  loading = false;
  error = '';
  availableRoles: Role[] = [];
  loadingRoles = false;
  rolesError = '';

  // Enhanced dropdown properties
  isRoleDropdownOpen = false;
  roleSearchTerm = '';
  filteredRoles: Role[] = [];

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.teamForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      role_id: ['', [Validators.required]]
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdownButton = target.closest('button[type="button"]');
    const dropdownMenu = target.closest('.dropdown-menu');
    
    if (!dropdownButton && !dropdownMenu && this.isRoleDropdownOpen) {
      this.isRoleDropdownOpen = false;
      this.roleSearchTerm = '';
      this.filteredRoles = [...this.availableRoles];
    }
  }

  ngOnInit(): void {
    this.loadAvailableRoles();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.teamId = +params['id'];
        this.loadTeam();
      }
    });
  }

  loadAvailableRoles(): void {
    this.loadingRoles = true;
    this.rolesError = '';

    this.roleService.getRoles().subscribe({
      next: (response: any) => {
        this.availableRoles = response.data;
        this.filteredRoles = [...this.availableRoles];
        this.loadingRoles = false;
      },
      error: (error: any) => {
        console.error('Error loading available roles:', error);
        this.rolesError = 'Failed to load roles. Please try again.';
        this.loadingRoles = false;
      }
    });
  }

  loadTeam(): void {
    if (!this.teamId) return;
    this.loading = true;
    this.teamService.getTeam(this.teamId).subscribe({
      next: (response: any) => {
        this.team = response.data;
        if (this.team) {
          this.teamForm.patchValue({
            name: this.team.name,
            description: this.team.description || '',
            role_id: this.team.role_id || ''
          });
        }
        this.loading = false;
      },
      error: (error: any) => {
        this.loading = false;
        this.error = error.error?.message || 'Failed to load team. Please try again.';
      }
    });
  }

  // Enhanced dropdown methods
  toggleRoleDropdown(): void {
    this.isRoleDropdownOpen = !this.isRoleDropdownOpen;
    if (this.isRoleDropdownOpen) {
      this.roleSearchTerm = '';
      this.filteredRoles = [...this.availableRoles];
    }
  }

  getSelectedRoleName(): string {
    const selectedRoleId = this.teamForm.get('role_id')?.value;
    if (!selectedRoleId) return '';
    
    const selectedRole = this.availableRoles.find(role => role.id === selectedRoleId);
    return selectedRole ? selectedRole.name : '';
  }

  selectRole(role: Role): void {
    this.teamForm.patchValue({ role_id: role.id });
    this.isRoleDropdownOpen = false;
    this.roleSearchTerm = '';
    this.filteredRoles = [...this.availableRoles];
  }

  filterRoles(): void {
    if (!this.roleSearchTerm.trim()) {
      this.filteredRoles = [...this.availableRoles];
    } else {
      const searchTerm = this.roleSearchTerm.toLowerCase();
      this.filteredRoles = this.availableRoles.filter(role =>
        role.name.toLowerCase().includes(searchTerm) ||
        (role.description && role.description.toLowerCase().includes(searchTerm))
      );
    }
  }

  onSubmit(): void {
    if (this.teamForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const formData = this.teamForm.value;

    if (this.isEditMode && this.teamId) {
      this.teamService.updateTeam(this.teamId, formData).subscribe({
        next: (response: any) => {
          this.loading = false;
          this.router.navigate(['/teams']);
        },
        error: (error: any) => {
          this.loading = false;
          this.error = error.error?.message || 'Failed to update team. Please try again.';
        }
      });
    } else {
      this.teamService.createTeam(formData).subscribe({
        next: (response: any) => {
          this.loading = false;
          this.router.navigate(['/teams']);
        },
        error: (error: any) => {
          this.loading = false;
          this.error = error.error?.message || 'Failed to create team. Please try again.';
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/teams']);
  }

  getFieldError(fieldName: string): string {
    const field = this.teamForm.get(fieldName);
    if (field?.invalid && (field?.dirty || field?.touched)) {
      if (field?.errors?.['required']) {
        return `${this.getFieldLabel(fieldName)} is required.`;
      }
      if (field?.errors?.['minlength']) {
        return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters.`;
      }
      if (field?.errors?.['maxlength']) {
        return `${this.getFieldLabel(fieldName)} must not exceed ${field.errors['maxlength'].requiredLength} characters.`;
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Team name',
      description: 'Description',
      role_id: 'Team role'
    };
    return labels[fieldName] || fieldName;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.teamForm.controls).forEach(key => {
      const control = this.teamForm.get(key);
      control?.markAsTouched();
    });
  }
}
