import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent implements OnInit {
  isLoading = true;
  successMessage = '';
  errorMessage = '';
  token = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.queryParams['token'] || '';

    if (!this.token) {
      this.errorMessage = 'Invalid activation link';
      this.isLoading = false;
      return;
    }

    this.activateAccount();
  }

  activateAccount() {
    this.authService.activateAccount(this.token).subscribe({
      next: (response) => {
        if (response.success) {
          this.successMessage = response.message || 'Account activated successfully';
        } else {
          this.errorMessage = response.message || 'Failed to activate account';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'An error occurred during activation';
        this.isLoading = false;
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  resendActivation() {
    // This would typically require the user's email
    // For now, redirect to login where they can request a new activation
    this.router.navigate(['/auth/login']);
  }
}
