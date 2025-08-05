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
  Math = Math; // Make Math available in template
  private roleData: any = null; // Store role data until permissions are loaded

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
        
        // If we have stored role data, populate it now that form controls exist
        if (this.roleData) {
          this.populateRolePermissions(this.roleData);
          this.roleData = null; // Clear stored data
        }
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
        
        // Store role data for later population when form controls are ready
        if (role.permissions && role.permissions.permissions) {
          if (Object.keys(this.availablePermissions).length > 0) {
            // Form controls already exist, populate immediately
            this.populateRolePermissions(role);
          } else {
            // Store for later when available permissions are loaded
            this.roleData = role;
          }
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

  onViewPermissionChange(module: string, event: any): void {
    const isChecked = event.target.checked;
    
    // If View is unchecked, uncheck all other permissions for this module
    if (!isChecked) {
      const moduleGroup = this.roleForm.get(`permissions.${module}`) as FormGroup;
      moduleGroup.get('can_create')?.setValue(false);
      moduleGroup.get('can_edit')?.setValue(false);
      moduleGroup.get('can_delete')?.setValue(false);
      moduleGroup.get('can_export')?.setValue(false);
    }
  }

  private populateRolePermissions(role: any): void {
    if (role.permissions && role.permissions.permissions) {
      const permissionsData = role.permissions.permissions;
      const permissionGroup = this.roleForm.get('permissions') as FormGroup;
      
      // Iterate through each module and set the permission values
      Object.keys(permissionsData).forEach(module => {
        const moduleGroup = permissionGroup.get(module) as FormGroup;
        if (moduleGroup) {
          const modulePermissions = permissionsData[module];
          moduleGroup.patchValue({
            can_view: modulePermissions.can_view || false,
            can_create: modulePermissions.can_create || false,
            can_edit: modulePermissions.can_edit || false,
            can_delete: modulePermissions.can_delete || false,
            can_export: modulePermissions.can_export || false
          });
        }
      });
    }
  }
} 