import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TeamService, TeamMember } from '../../services/team.service';
import { RoleService, Role } from '../../../roles/services/role.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-form-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './team-form-modal.component.html',
  styleUrls: ['./team-form-modal.component.scss']
})
export class TeamFormModalComponent implements OnInit, OnChanges {
  @Input() teamMember: TeamMember | null = null;
  @Input() isEditMode = false;
  @Output() teamMemberSaved = new EventEmitter<TeamMember>();
  @Output() cancelled = new EventEmitter<void>();

  teamMemberForm: FormGroup;
  loading = false;
  error = '';
  availableRoles: Role[] = [];
  loadingRoles = false;
  rolesError = '';

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    private roleService: RoleService
  ) {
    this.teamMemberForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', [Validators.required]],
      hourly_rate: [null, [Validators.min(0)]]
    });
    this.loadAvailableRoles();
  }

  ngOnInit(): void {
    if (this.teamMember && this.isEditMode) {
      this.loadTeamMember();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['teamMember'] && changes['teamMember'].currentValue && this.isEditMode) {
      // Wait a bit for roles to load if they haven't already
      if (this.availableRoles.length > 0) {
        this.loadTeamMember();
      } else {
        // If roles aren't loaded yet, wait a bit and try again
        setTimeout(() => {
          if (this.availableRoles.length > 0) {
            this.loadTeamMember();
          }
        }, 100);
      }
    }
  }

  // Method to manually update form when needed
  updateFormWithTeamMember(): void {
    if (this.teamMember && this.isEditMode && this.availableRoles.length > 0) {
      this.loadTeamMember();
    }
  }

  loadAvailableRoles(): void {
    this.loadingRoles = true;
    this.rolesError = '';

    this.roleService.getRoles().subscribe({
      next: (response: any) => {
        this.availableRoles = response.data || [];
        this.loadingRoles = false;
        console.log('Available roles loaded:', this.availableRoles);
        
        // If we're in edit mode and have team member data, reload the form
        if (this.isEditMode && this.teamMember) {
          this.loadTeamMember();
        }
      },
      error: (error: any) => {
        console.error('Error loading available roles:', error);
        // Fallback to team service available roles
        this.teamService.getAvailableRoles().subscribe({
          next: (response: any) => {
            this.availableRoles = response.data || [];
            this.loadingRoles = false;
            console.log('Available roles loaded (fallback):', this.availableRoles);
            
            // If we're in edit mode and have team member data, reload the form
            if (this.isEditMode && this.teamMember) {
              this.loadTeamMember();
            }
          },
          error: (fallbackError: any) => {
            console.error('Fallback also failed:', fallbackError);
            this.rolesError = 'Failed to load roles. Please try again.';
            this.loadingRoles = false;
          }
        });
      }
    });
  }

  loadTeamMember(): void {
    if (this.teamMember) {
      console.log('Loading team member data:', this.teamMember);
      
      // Get role_id from either role_id property or role.id
      const roleId = this.teamMember.role_id || this.teamMember.role?.id;
      const hourlyRate = this.teamMember.hourly_rate;
      
      console.log('Role ID:', roleId, 'Type:', typeof roleId);
      console.log('Hourly Rate:', hourlyRate, 'Type:', typeof hourlyRate);
      
      // Convert role_id to number if it's a string
      const roleIdNumber = roleId ? Number(roleId) : '';
      
      this.teamMemberForm.patchValue({
        first_name: this.teamMember.first_name,
        last_name: this.teamMember.last_name,
        email: this.teamMember.email,
        role_id: roleIdNumber,
        hourly_rate: hourlyRate || null
      });
      
      console.log('Form values after patch:', this.teamMemberForm.value);
      console.log('Available roles:', this.availableRoles);
    }
  }

  // Close dropdown when clicking outside
  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }

  onSubmit(): void {
    if (this.teamMemberForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const formData = this.teamMemberForm.value;

    if (this.isEditMode && this.teamMember) {
      this.teamService.updateTeamMember(this.teamMember.id, formData).subscribe({
        next: (response: any) => {
          this.loading = false;
          this.teamMemberSaved.emit(response.data);
        },
        error: (error: any) => {
          this.loading = false;
          this.error = error.error?.message || 'Failed to update team member. Please try again.';
        }
      });
    } else {
      this.teamService.createTeamMember(formData).subscribe({
        next: (response: any) => {
          this.loading = false;
          this.teamMemberSaved.emit(response.data);
        },
        error: (error: any) => {
          this.loading = false;
          this.error = error.error?.message || 'Failed to create team member. Please try again.';
        }
      });
    }
  }

  onCancel(): void {
    this.cancelled.emit();
  }

  getFieldError(fieldName: string): string {
    const field = this.teamMemberForm.get(fieldName);
    if (field?.invalid && (field?.dirty || field?.touched)) {
      if (field?.errors?.['required']) {
        return `${this.getFieldLabel(fieldName)} is required.`;
      }
      if (field?.errors?.['email']) {
        return 'Please enter a valid email address.';
      }
      if (field?.errors?.['minlength']) {
        return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters.`;
      }
      if (field?.errors?.['maxlength']) {
        return `${this.getFieldLabel(fieldName)} must not exceed ${field.errors['maxlength'].requiredLength} characters.`;
      }
      if (field?.errors?.['min']) {
        return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['min'].min}.`;
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      first_name: 'First name',
      last_name: 'Last name',
      email: 'Email',
      role_id: 'Team role',
      hourly_rate: 'Hourly rate'
    };
    return labels[fieldName] || fieldName;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.teamMemberForm.controls).forEach(key => {
      const control = this.teamMemberForm.get(key);
      control?.markAsTouched();
    });
  }
}
