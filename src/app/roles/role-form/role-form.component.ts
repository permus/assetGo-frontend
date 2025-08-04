import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService, Role, AvailablePermissions } from '../services/role.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
  standalone: false
})
export class RoleFormComponent implements OnInit {
  roleForm: FormGroup;
  availablePermissions: AvailablePermissions = {};
  loading = false;
  saving = false;
  error = '';
  isEditMode = false;
  roleId?: number;

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.roleForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      description: [''],
      permissions: this.fb.group({})
    });
  }

  ngOnInit(): void {
    this.loadAvailablePermissions();
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.roleId = +id;
      this.loadRole(this.roleId);
    }
  }

  loadAvailablePermissions(): void {
    this.roleService.getAvailablePermissions().subscribe({
      next: (response: any) => {
        this.availablePermissions = response.data;
        this.initializePermissionForm();
      },
      error: (error: any) => {
        this.error = 'Failed to load available permissions';
        console.error('Error loading permissions:', error);
      }
    });
  }

  loadRole(id: number): void {
    this.loading = true;
    this.roleService.getRole(id).subscribe({
      next: (response: any) => {
        const role = response.data;
        this.roleForm.patchValue({
          name: role.name,
          description: role.description
        });
        
        if (role.permissions) {
          this.roleForm.patchValue({
            permissions: role.permissions.permissions
          });
        }
        
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Failed to load role';
        this.loading = false;
        console.error('Error loading role:', error);
      }
    });
  }

  initializePermissionForm(): void {
    const permissionGroup = this.roleForm.get('permissions') as FormGroup;
    
    Object.keys(this.availablePermissions).forEach(module => {
      const moduleGroup = this.fb.group({
        can_view: [false],
        can_create: [false],
        can_edit: [false],
        can_delete: [false],
        can_export: [false]
      });
      permissionGroup.addControl(module, moduleGroup);
    });
  }

  onSubmit(): void {
    if (this.roleForm.valid) {
      this.saving = true;
      this.error = '';

      const formData = this.roleForm.value;
      
      if (this.isEditMode && this.roleId) {
        this.roleService.updateRole(this.roleId, formData).subscribe({
          next: () => {
            this.router.navigate(['/roles']);
          },
          error: (error: any) => {
            this.error = 'Failed to update role';
            this.saving = false;
            console.error('Error updating role:', error);
          }
        });
      } else {
        this.roleService.createRole(formData).subscribe({
          next: () => {
            this.router.navigate(['/roles']);
          },
          error: (error: any) => {
            this.error = 'Failed to create role';
            this.saving = false;
            console.error('Error creating role:', error);
          }
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/roles']);
  }

  getModuleDisplayName(module: string): string {
    return module.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  toggleAllPermissions(module: string, value: boolean): void {
    const moduleGroup = this.roleForm.get(`permissions.${module}`) as FormGroup;
    Object.keys(moduleGroup.controls).forEach(control => {
      moduleGroup.get(control)?.setValue(value);
    });
  }
} 