import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as AuthActions from '../../store/auth/auth.actions';
import { 
  selectAuthLoading, 
  selectAuthError, 
  selectEmailVerified, 
  selectUserId 
} from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private destroy$ = new Subject<void>();
  
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  emailVerified$: Observable<boolean | null>;
  userId$: Observable<number | null>;

  emailVerificationMessage = '';
  showResendVerification = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.isLoading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
    this.emailVerified$ = this.store.select(selectEmailVerified);
    this.userId$ = this.store.select(selectUserId);
  }

  ngOnInit() {
    // Clear any previous auth state
    this.store.dispatch(AuthActions.clearMessages());

    // Subscribe to auth state changes
    this.error$.pipe(takeUntil(this.destroy$)).subscribe(error => {
      if (error) {
        this.emailVerificationMessage = error;
      }
    });

    this.emailVerified$.pipe(takeUntil(this.destroy$)).subscribe(emailVerified => {
      if (emailVerified === false) {
        this.showResendVerification = true;
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleMode() {
    this.router.navigate(['/auth/register']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(AuthActions.login(this.loginForm.value));
    }
  }

  resendVerification() {
    if (!this.loginForm.get('email')?.value) {
      return;
    }

    this.store.dispatch(AuthActions.resendVerification({ 
      email: this.loginForm.get('email')?.value 
    }));
  }

  goToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}