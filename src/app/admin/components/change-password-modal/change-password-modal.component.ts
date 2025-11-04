import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminUsersService, User } from '../../services/admin-users.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-change-password-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './change-password-modal.component.html',
  styleUrl: './change-password-modal.component.scss'
})
export class ChangePasswordModalComponent implements OnInit {
  @Input() isOpen = false;
  @Input() user: User | null = null;
  @Input() isLoading = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() passwordChanged = new EventEmitter<void>();

  passwordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminUsersService: AdminUsersService,
    private toastService: ToastService
  ) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
      password_confirmation: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    if (this.isOpen) {
      this.passwordForm.reset();
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const passwordConfirmation = form.get('password_confirmation');
    
    if (!password || !passwordConfirmation) {
      return null;
    }
    
    return password.value === passwordConfirmation.value ? null : { passwordMismatch: true };
  }

  getPasswordError(): string {
    const field = this.passwordForm.get('password');
    if (!field || !field.errors || !field.touched) {
      return '';
    }

    if (field.errors['required']) {
      return 'Password is required';
    }
    if (field.errors['minlength']) {
      return 'Password must be at least 8 characters';
    }
    if (field.errors['pattern']) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    return '';
  }

  getPasswordConfirmationError(): string {
    if (this.passwordForm.errors && this.passwordForm.errors['passwordMismatch'] && this.passwordForm.get('password_confirmation')?.touched) {
      return 'Password confirmation does not match';
    }
    return '';
  }

  onConfirm(): void {
    if (this.isLoading || !this.user) return;

    if (this.passwordForm.invalid) {
      Object.keys(this.passwordForm.controls).forEach(key => {
        this.passwordForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isLoading = true;
    const formValue = this.passwordForm.value;

    this.adminUsersService.changePassword(this.user.id, {
      password: formValue.password,
      password_confirmation: formValue.password_confirmation
    }).subscribe({
      next: (response) => {
        if (response.success) {
          this.toastService.success('Password changed successfully');
          this.passwordForm.reset();
          this.passwordChanged.emit();
          this.closeModal.emit();
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        const errorMessage = error.error?.message || 'Failed to change password. Please try again.';
        this.toastService.error(errorMessage);
      }
    });
  }

  onCancel(): void {
    if (this.isLoading) return;
    this.passwordForm.reset();
    this.closeModal.emit();
  }
}

