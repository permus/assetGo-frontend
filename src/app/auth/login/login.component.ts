import { Component, OnDestroy } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  emailVerificationMessage = '';
  showResendVerification = false;
  userId: number | null = null;
  isLocked = false;
  lockoutTime: number = 0;
  lockoutCountdown: number = 0;
  lockoutInterval: any;
  showPassword = false;
  sessionMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Check for session expired message
    const message = localStorage.getItem('session_message');
    if (message) {
      this.sessionMessage = message;
      localStorage.removeItem('session_message');

      // Auto-clear after 5 seconds
      setTimeout(() => {
        this.sessionMessage = '';
      }, 5000);
    }
  }

  toggleMode() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = '';
      this.emailVerificationMessage = '';
      this.showResendVerification = false;

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = response.message || 'Login failed';

            // Check if it's an email verification issue
            if (response.email_verified === false) {
              this.emailVerificationMessage = response.message;
              this.showResendVerification = true;
              this.userId = response.user_id || null;
            }
          }
          this.isLoading = false;
        },
        error: (error) => {
          const errorResponse = error.error;

          // Handle 429 - Rate limiting / Account lockout
          if (error.status === 429) {
            this.isLocked = true;
            this.errorMessage = errorResponse?.message || 'Too many login attempts. Please try again later.';

            // Calculate lockout time if provided
            if (errorResponse?.retry_after) {
              this.lockoutCountdown = errorResponse.retry_after;
              this.startLockoutTimer();
            }
          }
          // Handle 403 - Email verification
          else if (error.status === 403 && errorResponse?.email_verified === false) {
            this.emailVerificationMessage = errorResponse.message;
            this.showResendVerification = true;
            this.userId = errorResponse.user_id || null;
            this.errorMessage = '';
          }
          // Other errors
          else {
            this.errorMessage = errorResponse?.message || 'An error occurred during login';

            // Check if it's an email verification issue (fallback)
            if (errorResponse?.email_verified === false) {
              this.emailVerificationMessage = errorResponse.message;
              this.showResendVerification = true;
              this.userId = errorResponse.user_id || null;
            }
          }

          this.isLoading = false;
        }
      });
    }
  }

  resendVerification() {
    if (!this.loginForm.get('email')?.value) {
      this.errorMessage = 'Please enter your email address';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.resendVerification({ email: this.loginForm.get('email')?.value }).subscribe({
      next: (response) => {
        if (response.success) {
          this.emailVerificationMessage = response.message;
          this.showResendVerification = false;
        } else {
          this.errorMessage = response.message || 'Failed to resend verification email';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Failed to resend verification email';
        this.isLoading = false;
      }
    });
  }

  startLockoutTimer() {
    // Clear any existing interval
    if (this.lockoutInterval) {
      clearInterval(this.lockoutInterval);
    }

    this.lockoutInterval = setInterval(() => {
      this.lockoutCountdown--;

      if (this.lockoutCountdown <= 0) {
        clearInterval(this.lockoutInterval);
        this.isLocked = false;
        this.errorMessage = '';
        this.lockoutCountdown = 0;
      }
    }, 1000);
  }

  getLockoutMinutes(): number {
    return Math.ceil(this.lockoutCountdown / 60);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  goToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  ngOnDestroy() {
    if (this.lockoutInterval) {
      clearInterval(this.lockoutInterval);
    }
  }
}
