import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import * as AuthActions from '../../store/auth/auth.actions';
import { 
  selectAuthLoading, 
  selectAuthError, 
  selectAuthSuccessMessage 
} from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  resetPasswordForm: FormGroup;
  private destroy$ = new Subject<void>();
  
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  successMessage$: Observable<string | null>;
  
  token = '';
  email = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    this.isLoading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
    this.successMessage$ = this.store.select(selectAuthSuccessMessage);
  }

  ngOnInit() {
    // Clear any previous auth state
    this.store.dispatch(AuthActions.clearMessages());
    
    this.token = this.route.snapshot.queryParams['token'] || '';
    this.email = this.route.snapshot.queryParams['email'] || '';

    if (!this.token || !this.email) {
      this.store.dispatch(AuthActions.resetPasswordFailure({ 
        error: 'Invalid reset link' 
      }));
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('password_confirmation');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.resetPasswordForm.valid && this.token && this.email) {
      const resetData = {
        token: this.token,
        email: this.email,
        password: this.resetPasswordForm.value.password,
        password_confirmation: this.resetPasswordForm.value.password_confirmation
      };

      this.store.dispatch(AuthActions.resetPassword(resetData));
    }
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}