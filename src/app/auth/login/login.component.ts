import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  emailVerificationMessage = '';
  showResendVerification = false;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
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
          this.errorMessage = errorResponse?.message || 'An error occurred during login';

          // Check if it's an email verification issue
          if (errorResponse?.email_verified === false) {
            this.emailVerificationMessage = errorResponse.message;
            this.showResendVerification = true;
            this.userId = errorResponse.user_id || null;
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

  goToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}
