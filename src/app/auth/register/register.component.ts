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
  selectAuthSuccessMessage 
} from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  private destroy$ = new Subject<void>();
  
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  successMessage$: Observable<string | null>;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private store: Store
  ) {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
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

  toggleMode() {
    this.router.navigate(['/auth/login']);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.store.dispatch(AuthActions.register(this.registerForm.value));
    }
  }
}