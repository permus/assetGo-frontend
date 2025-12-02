import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminUsersService, CreateUserRequest } from '../../../services/admin-users.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  errorMessage = '';
  selectedLogo: File | null = null;
  logoPreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminUsersService: AdminUsersService,
    private toastService: ToastService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.userForm = this.fb.group({
      // Basic Information
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
      password_confirmation: ['', [Validators.required]],
      teams_allowed_count: [null, [Validators.min(0)]],
      
      // Company Information
      company_name: ['', [Validators.required, Validators.maxLength(255)]],
      industry: ['', [Validators.maxLength(255)]],
      business_type: ['', [Validators.maxLength(255)]],
      company_email: ['', [Validators.email, Validators.maxLength(255)]],
      company_phone: ['', [Validators.maxLength(255)]],
      company_address: ['', [Validators.maxLength(500)]],
      logo: [null]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const passwordConfirmation = form.get('password_confirmation');
    
    if (!password || !passwordConfirmation) {
      return null;
    }
    
    return password.value === passwordConfirmation.value ? null : { passwordMismatch: true };
  }

  getFieldError(fieldName: string): string {
    const field = this.userForm.get(fieldName);
    if (!field || !field.errors || !field.touched) {
      return '';
    }

    if (field.errors['required']) {
      return `${this.getFieldLabel(fieldName)} is required`;
    }
    if (field.errors['email']) {
      return 'Please enter a valid email address';
    }
    if (field.errors['minlength']) {
      const minLength = field.errors['minlength'].requiredLength;
      return `${this.getFieldLabel(fieldName)} must be at least ${minLength} characters`;
    }
    if (field.errors['maxlength']) {
      const maxLength = field.errors['maxlength'].requiredLength;
      return `${this.getFieldLabel(fieldName)} must not exceed ${maxLength} characters`;
    }
    if (field.errors['pattern']) {
      if (fieldName === 'password') {
        return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
      }
    }

    return '';
  }

  getPasswordConfirmationError(): string {
    if (this.userForm.errors && this.userForm.errors['passwordMismatch'] && this.userForm.get('password_confirmation')?.touched) {
      return 'Password confirmation does not match';
    }
    return '';
  }

  getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      'first_name': 'First name',
      'last_name': 'Last name',
      'email': 'Email',
      'password': 'Password',
      'password_confirmation': 'Password confirmation',
      'teams_allowed_count': 'Teams Allowed Count',
      'company_name': 'Company name',
      'industry': 'Industry',
      'business_type': 'Business type',
      'company_email': 'Email address',
      'company_phone': 'Phone number',
      'company_address': 'Company address'
    };
    return labels[fieldName] || fieldName;
  }

  triggerLogoUpload(): void {
    const input = document.getElementById('logo') as HTMLInputElement;
    if (input) {
      input.click();
    }
  }

  onLogoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      
      // Validate file type
      if (!file.type.match(/image\/(jpeg|png|webp)/)) {
        this.toastService.error('Please select a valid image file (JPEG, PNG, or WebP)');
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        this.toastService.error('Logo size must not exceed 5MB');
        return;
      }
      
      this.selectedLogo = file;
      this.userForm.patchValue({ logo: file });
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.logoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeLogo(): void {
    this.selectedLogo = null;
    this.logoPreview = null;
    this.userForm.patchValue({ logo: null });
    const input = document.getElementById('logo') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const formValue = this.userForm.value;
    const userData: CreateUserRequest = {
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      email: formValue.email,
      password: formValue.password,
      password_confirmation: formValue.password_confirmation,
      teams_allowed_count: formValue.teams_allowed_count ? Number(formValue.teams_allowed_count) : undefined,
      company_name: formValue.company_name,
      industry: formValue.industry || undefined,
      business_type: formValue.business_type || undefined,
      company_email: formValue.company_email || undefined,
      company_phone: formValue.company_phone || undefined,
      company_address: formValue.company_address || undefined,
      logo: this.selectedLogo || undefined
    };

    this.adminUsersService.createUser(userData).subscribe({
      next: (response) => {
        if (response.success) {
          this.toastService.success('User and company created successfully');
          this.router.navigate(['/admin/users']);
        }
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error.error?.message || 'Failed to create user. Please try again.';
        if (error.error?.errors) {
          // Handle validation errors from backend
          const errors = error.error.errors;
          Object.keys(errors).forEach(key => {
            const control = this.userForm.get(key);
            if (control) {
              control.setErrors({ serverError: errors[key][0] });
            }
          });
        }
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/admin/users']);
  }
}

