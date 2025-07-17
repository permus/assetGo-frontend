import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
    this.router.navigate(['/auth/register']);
  }

  onSubmit() {
    if (this.loginForm.invalid || this.isLoading) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.emailVerificationMessage = '';
    this.showResendVerification = false;
    this.userId = null;

    const loginData = this.loginForm.value;

    this.authService.login(loginData).subscribe({
      next: (response) => {
        this.isLoading = false;

        if (response.success && response.data?.email_verified) {
          this.router.navigate(['/dashboard']);
        } else if (response.email_verified === false) {
          this.emailVerificationMessage = response.message;
          this.showResendVerification = true;
          this.userId = response.user_id || null;
        } else {
          this.errorMessage = response.message || 'Login failed';
        }
      },
      error: (error) => {
        this.isLoading = false;

        const err = error?.error;

        // Handle unverified email
        if (err?.email_verified === false) {
          this.emailVerificationMessage = err.message || 'Please verify your email.';
          this.showResendVerification = true;
          this.userId = err.user_id || null;
        } else {
          this.errorMessage = err?.message || 'An error occurred during login';
        }
      }
    });
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
