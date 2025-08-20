import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TeamService, TeamMember } from '../../services/team.service';
import { RoleService, Role } from '../../../roles/services/role.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationTreeService, LocationTreeNode } from '../../../locations/services/location-tree.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-team-form-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule],
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

  // Location scoping state
  locationTree: LocationTreeNode[] = [];
  loadingTree = false;
  treeError = '';
  expandDescendants = true;
  flatLocationOptions: { id: number; label: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    private roleService: RoleService,
    private locationTreeService: LocationTreeService
  ) {
    this.teamMemberForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', [Validators.required]],
      hourly_rate: [null, [Validators.min(0)]],
      location_ids: [[] as number[]],
      expand_descendants: [true],
    });
    this.loadAvailableRoles();
  }

  ngOnInit(): void {
    if (this.teamMember && this.isEditMode) {
      // Fetch full team details to ensure we have role(s), locations, and rate
      this.teamService.getTeamMember(this.teamMember.id).subscribe({
        next: (resp: any) => {
          this.teamMember = resp.data;
          this.loadTeamMember();
        },
        error: () => {
          // Fall back to input data if detail fetch fails
          this.loadTeamMember();
        }
      });
    }

    // React to role changes to toggle location scoping UI
    this.teamMemberForm.get('role_id')?.valueChanges.subscribe((roleId: number) => {
      const role = this.availableRoles.find(r => r.id === Number(roleId));
      if (role && role.has_location_access) {
        this.ensureTreeLoaded();
        // If switching to a role with access and we have existing teamMember locations in edit mode,
        // prefill them once tree loads
        if (this.isEditMode && this.teamMember && Array.isArray(this.teamMember.locations)) {
          const assignedIds = this.teamMember.locations.map(l => l.id);
          if (assignedIds.length > 0 && this.teamMember.has_full_location_access === false) {
            this.teamMemberForm.patchValue({ location_ids: assignedIds });
          }
        }
      } else {
        // Clear selection to represent full access when role doesn't allow scoping
        this.teamMemberForm.patchValue({ location_ids: [] });
      }
    });
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
      
      // Get role_id from role_id, role.id or roles[0].id
      const roleId = (this.teamMember as any).role_id
        || (this.teamMember as any).role?.id
        || (Array.isArray((this.teamMember as any).roles) ? (this.teamMember as any).roles[0]?.id : undefined);
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
        hourly_rate: (hourlyRate !== undefined && hourlyRate !== null) ? Number(hourlyRate) : null,
        expand_descendants: true,
      });

      // If role allows scoping, ensure tree is available
      const role = this.availableRoles.find(r => r.id === Number(roleIdNumber));
      if (role && role.has_location_access) {
        this.ensureTreeLoaded();
        // Pre-select assigned locations if any and not full access
        const assigned = Array.isArray(this.teamMember.locations) ? this.teamMember.locations.map(l => l.id) : [];
        if (assigned.length > 0 && this.teamMember.has_full_location_access === false) {
          this.teamMemberForm.patchValue({ location_ids: assigned });
        } else {
          this.teamMemberForm.patchValue({ location_ids: [] });
        }
      }
      
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

    const formData = { ...this.teamMemberForm.value } as any;
    // Normalize location scoping payload
    formData.location_ids = (formData.location_ids && formData.location_ids.length > 0) ? formData.location_ids : null;
    if (formData.expand_descendants === undefined || formData.expand_descendants === null) {
      formData.expand_descendants = true;
    }

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

  // UI helpers for location tree
  get selectedRole(): Role | undefined {
    const roleId = this.teamMemberForm.get('role_id')?.value;
    return this.availableRoles.find(r => r.id === Number(roleId));
  }

  get showLocationScope(): boolean {
    return !!this.selectedRole?.has_location_access;
  }

  private ensureTreeLoaded(): void {
    if (this.locationTree.length > 0 || this.loadingTree) return;
    this.loadingTree = true;
    this.treeError = '';
    this.locationTreeService.getTree().subscribe({
      next: (nodes) => {
        this.locationTree = nodes;
        this.flatLocationOptions = this.flatten(nodes);
        this.loadingTree = false;
      },
      error: (err) => {
        this.treeError = 'Failed to load locations tree.';
        this.loadingTree = false;
      }
    });
  }

  isChecked(id: number): boolean {
    const selected: number[] = this.teamMemberForm.get('location_ids')?.value || [];
    return selected.includes(id);
  }

  toggleNode(node: LocationTreeNode, checked: boolean): void {
    const control = this.teamMemberForm.get('location_ids');
    const selected: number[] = [...(control?.value || [])];
    const affected = this.collectIds(node);
    if (checked) {
      affected.forEach(id => { if (!selected.includes(id)) selected.push(id); });
    } else {
      affected.forEach(id => {
        const idx = selected.indexOf(id);
        if (idx >= 0) selected.splice(idx, 1);
      });
    }
    control?.setValue(selected);
  }

  clearSelection(): void {
    this.teamMemberForm.patchValue({ location_ids: [] });
  }

  private collectIds(node: LocationTreeNode): number[] {
    const ids: number[] = [node.id];
    if (node.children && node.children.length) {
      node.children.forEach(c => ids.push(...this.collectIds(c)));
    }
    return ids;
  }

  private flatten(nodes: LocationTreeNode[], depth = 0, acc: { id: number; label: string }[] = []): { id: number; label: string }[] {
    for (const n of nodes) {
      acc.push({ id: n.id, label: `${'— '.repeat(depth)}${n.name}` });
      if (n.children?.length) {
        this.flatten(n.children, depth + 1, acc);
      }
    }
    return acc;
  }
}
