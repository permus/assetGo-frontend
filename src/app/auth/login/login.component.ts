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
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]]
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
    // Mark all fields as touched to show validation errors
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
      return;
    }

    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = '';

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = response.message || 'Login failed';
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
          // Handle 403 - Forbidden
          else if (error.status === 403) {
            this.errorMessage = errorResponse?.message || 'Access forbidden';
          }
          // Other errors
          else {
            this.errorMessage = errorResponse?.message || 'An error occurred during login';
          }

          this.isLoading = false;
        }
      });
    }
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
    this.router.navigate(['/forgot-password']);
  }

  getEmailErrorMessage(): string {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.hasError('required') && emailControl?.touched) {
      return 'Email is required';
    }
    if (emailControl?.hasError('email') && emailControl?.touched) {
      return 'Please provide a valid email address';
    }
    return '';
  }

  getPasswordErrorMessage(): string {
    const passwordControl = this.loginForm.get('password');
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

  ngOnDestroy() {
    if (this.lockoutInterval) {
      clearInterval(this.lockoutInterval);
    }
  }
}
