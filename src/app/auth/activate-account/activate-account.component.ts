import { Component, OnInit } from '@angular/core';
import { NgIf} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent implements OnInit {
  isLoading = true;
  successMessage = '';
  errorMessage = '';
  id = '';
  hash = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || '';
    this.hash = this.route.snapshot.params['hash'] || '';

    if (!this.id || !this.hash) {
      this.errorMessage = 'Invalid verification link';
      this.isLoading = false;
      return;
    }

    this.verifyEmail();
  }

  verifyEmail() {
    this.authService.verifyEmail(this.id, this.hash).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.successMessage = response.message || 'Email verified successfully';
        } else {
          this.errorMessage = response.message || 'Failed to verify email';
        }
        this.isLoading = false;
      },
      error: (error: any) => {
        this.errorMessage = error.error?.message || error.error?.error || 'An error occurred during verification';
        this.isLoading = false;
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  resendActivation() {
    this.router.navigate(['/login']);
  }
}
