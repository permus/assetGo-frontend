import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ProfileService, PasswordChangeRequest } from '../../services/profile.service';

@Component({
  selector: 'app-password-change-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.scss']
})
export class PasswordChangeFormComponent implements OnInit, OnDestroy {
  @Output() passwordChanged = new EventEmitter<void>();

  private destroy$ = new Subject<void>();
  
  passwordForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    this.passwordForm = this.fb.group({
      current_password: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const passwordConfirmation = form.get('password_confirmation');
    
    if (password && passwordConfirmation && password.value !== passwordConfirmation.value) {
      passwordConfirmation.setErrors({ passwordMismatch: true });
    } else if (passwordConfirmation && passwordConfirmation.errors && passwordConfirmation.errors['passwordMismatch']) {
      delete passwordConfirmation.errors['passwordMismatch'];
      if (Object.keys(passwordConfirmation.errors).length === 0) {
        passwordConfirmation.setErrors(null);
      }
    }
    
    return null;
  }

  onSubmit(): void {
    if (this.passwordForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const changeData: PasswordChangeRequest = {
      current_password: this.passwordForm.get('current_password')?.value,
      password: this.passwordForm.get('password')?.value,
      password_confirmation: this.passwordForm.get('password_confirmation')?.value
    };

    this.profileService.changePassword(changeData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.passwordForm.reset();
            this.passwordChanged.emit();
          }
          this.loading = false;
        },
        error: (error) => {
          // Handle validation errors from API
          if (error.error?.errors) {
            const fieldErrors = error.error.errors;
            const errorMessages: string[] = [];
            
            Object.keys(fieldErrors).forEach(field => {
              const messages = fieldErrors[field];
              if (Array.isArray(messages)) {
                messages.forEach(msg => {
                  // Format field names in error messages
                  const formattedMsg = msg.replace(/\b([a-z_]+)\b/g, (match: string) => {
                    if (match.includes('_')) {
                      return this.formatFieldName(match);
                    }
                    return match;
                  });
                  errorMessages.push(formattedMsg);
                });
              } else {
                const formattedMsg = messages.replace(/\b([a-z_]+)\b/g, (match: string) => {
                  if (match.includes('_')) {
                    return this.formatFieldName(match);
                  }
                  return match;
                });
                errorMessages.push(formattedMsg);
              }
            });
            
            this.error = errorMessages.join(', ') || 'Validation failed. Please check the form.';
          } else {
            this.error = error.error?.message || 'Failed to change password';
          }
          this.loading = false;
        }
      });
  }

  private markFormGroupTouched(): void {
    Object.keys(this.passwordForm.controls).forEach(key => {
      const control = this.passwordForm.get(key);
      control?.markAsTouched();
    });
  }

  /**
   * Convert snake_case field name to Title Case
   * Example: first_name -> First name, password_confirmation -> Password confirmation
   */
  private formatFieldName(fieldName: string): string {
    return fieldName
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  getFieldError(fieldName: string): string {
    const control = this.passwordForm.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    const formattedFieldName = this.formatFieldName(fieldName);

    if (control.errors['required']) return `${formattedFieldName} is required`;
    if (control.errors['minlength']) return 'Password must be at least 8 characters';
    if (control.errors['passwordMismatch']) return 'Passwords do not match';
    
    return 'Invalid input';
  }

  hasFieldError(fieldName: string): boolean {
    const control = this.passwordForm.get(fieldName);
    return !!(control && control.errors && control.touched);
  }
}
