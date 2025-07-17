import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import * as AuthActions from '../../store/auth/auth.actions';
import { 
  selectAuthLoading, 
  selectAuthError, 
  selectAuthSuccessMessage 
} from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  forgotPasswordForm: FormGroup;
  private destroy$ = new Subject<void>();
  
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  successMessage$: Observable<string | null>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.isLoading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
    this.successMessage$ = this.store.select(selectAuthSuccessMessage);
  }

  ngOnInit() {
    // Clear any previous auth state
    this.store.dispatch(AuthActions.clearMessages());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.store.dispatch(AuthActions.forgotPassword(this.forgotPasswordForm.value));
    }
  }

  goBack() {
    this.router.navigate(['/auth/login']);
  }
}