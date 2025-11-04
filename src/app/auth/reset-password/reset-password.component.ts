import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  resetPasswordForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  infoMessage = '';
  showSuccessMessage = false;
  countdown = 10;
  countdownInterval: any;
  token = '';
  email = '';
  hasValidLink = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
      password_confirmation: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    this.token = this.route.snapshot.queryParams['token'] || '';
    this.email = this.route.snapshot.queryParams['email'] || '';

    if (this.token && this.email) {
      this.hasValidLink = true;
    } else {
      // User came from forgot-password page - show helpful message instead of error
      this.infoMessage = 'Please check your email for the password reset link. Click the link in the email to reset your password.';
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('password_confirmation');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null : { passwordMismatch: true };
  }

  onSubmit() {
    // Mark all fields as touched to show validation errors
    if (this.resetPasswordForm.invalid) {
      Object.keys(this.resetPasswordForm.controls).forEach(key => {
        this.resetPasswordForm.get(key)?.markAsTouched();
      });
      return;
    }

    if (this.resetPasswordForm.valid && !this.isLoading && this.token && this.email) {
      this.isLoading = true;
      this.errorMessage = '';
      this.showSuccessMessage = false;

      const resetData = {
        token: this.token,
        email: this.email,
        password: this.resetPasswordForm.value.password,
        password_confirmation: this.resetPasswordForm.value.password_confirmation
      };

      this.authService.resetPassword(resetData).subscribe({
        next: (response) => {
          if (response.success) {
            this.showSuccessMessage = true;
            this.startCountdown();
          } else {
            this.errorMessage = response.message || 'Failed to reset password';
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || error.error?.error || 'An error occurred';
          this.isLoading = false;
        }
      });
    }
  }

  startCountdown() {
    this.countdown = 10;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
        this.router.navigate(['/login']);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  getPasswordErrorMessage(): string {
    const passwordControl = this.resetPasswordForm.get('password');
    if (passwordControl?.hasError('required') && passwordControl?.touched) {
      return 'Password is required';
    }
    if (passwordControl?.hasError('minlength') && passwordControl?.touched) {
      return 'Password must be at least 8 characters long';
    }
    if (passwordControl?.hasError('pattern') && passwordControl?.touched) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    return '';
  }

  getConfirmPasswordErrorMessage(): string {
    const confirmPasswordControl = this.resetPasswordForm.get('password_confirmation');
    if (confirmPasswordControl?.hasError('required') && confirmPasswordControl?.touched) {
      return 'Password confirmation is required';
    }
    if (this.resetPasswordForm.errors?.['passwordMismatch'] && confirmPasswordControl?.touched) {
      return 'Passwords do not match';
    }
    return '';
  }
}
