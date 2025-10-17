import { Component, OnDestroy } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { PasswordValidator, PasswordStrength } from '../../core/validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    ReactiveFormsModule
  ],
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  showSuccessMessage = false;
  countdown = 60;
  countdownInterval: any;
  passwordStrength: PasswordStrength | null = null;
  showPasswordRequirements = false;
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8),
        PasswordValidator.strong()
      ]],
      password_confirmation: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
    
    // Watch password field for strength calculation
    this.registerForm.get('password')?.valueChanges.subscribe(password => {
      this.passwordStrength = PasswordValidator.calculateStrength(password || '');
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('password_confirmation');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null : { passwordMismatch: true };
  }

  toggleMode() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.registerForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = '';
      this.showSuccessMessage = false;

      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.showSuccessMessage = true;
            this.startCountdown();
          } else {
            this.errorMessage = response.message || 'Registration failed';
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || error.error?.error || 'An error occurred during registration';
          this.isLoading = false;
        }
      });
    }
  }

  startCountdown() {
    this.countdown = 60;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
        this.router.navigate(['/login']);
      }
    }, 1000);
  }

  getPasswordRequirements() {
    const password = this.registerForm.get('password')?.value || '';
    return PasswordValidator.meetsRequirements(password);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
