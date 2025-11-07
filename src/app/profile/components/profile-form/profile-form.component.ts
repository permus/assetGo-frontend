import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ProfileService, UserProfile, ProfileUpdateRequest } from '../../services/profile.service';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit, OnDestroy {
  @Input() userProfile: UserProfile | null = null;
  @Output() profileUpdated = new EventEmitter<UserProfile>();

  private destroy$ = new Subject<void>();
  
  profileForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    this.profileForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(255)]],
      last_name: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      user_type: [''] // Keep for display only, not for updating
    });
  }

  ngOnInit(): void {
    if (this.userProfile) {
      this.populateForm();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private populateForm(): void {
    if (this.userProfile) {
      this.profileForm.patchValue({
        first_name: this.userProfile.first_name || '',
        last_name: this.userProfile.last_name || '',
        email: this.userProfile.email || '',
        user_type: this.userProfile.user_type || ''
      });
    }
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const updateData: ProfileUpdateRequest = {
      first_name: this.profileForm.get('first_name')?.value,
      last_name: this.profileForm.get('last_name')?.value,
      email: this.profileForm.get('email')?.value
    };

    this.profileService.updateProfile(updateData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.profileUpdated.emit(response.data.user);
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
            this.error = error.error?.message || 'Failed to update profile';
          }
          this.loading = false;
        }
      });
  }

  private markFormGroupTouched(): void {
    Object.keys(this.profileForm.controls).forEach(key => {
      const control = this.profileForm.get(key);
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
    const control = this.profileForm.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    const formattedFieldName = this.formatFieldName(fieldName);

    if (control.errors['required']) return `${formattedFieldName} is required`;
    if (control.errors['email']) return 'Please enter a valid email address';
    if (control.errors['maxlength']) return `${formattedFieldName} is too long`;
    
    return 'Invalid input';
  }

  hasFieldError(fieldName: string): boolean {
    const control = this.profileForm.get(fieldName);
    return !!(control && control.errors && control.touched);
  }
}
