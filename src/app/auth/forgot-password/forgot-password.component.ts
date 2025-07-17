import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
  forgotPasswordForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  showSuccessMessage = false;
  countdown = 10;
  countdownInterval: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = '';
      this.showSuccessMessage = false;

      this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.showSuccessMessage = true;
            this.startCountdown();
          } else {
            this.errorMessage = response.message || 'Failed to send reset link';
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

  goBack() {
    this.router.navigate(['/login']);
  }
}
