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
          this.error = error.error?.message || 'Failed to update profile';
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

  getFieldError(fieldName: string): string {
    const control = this.profileForm.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    if (control.errors['required']) return `${fieldName} is required`;
    if (control.errors['email']) return 'Please enter a valid email address';
    if (control.errors['maxlength']) return `${fieldName} is too long`;
    
    return 'Invalid input';
  }

  hasFieldError(fieldName: string): boolean {
    const control = this.profileForm.get(fieldName);
    return !!(control && control.errors && control.touched);
  }
}
