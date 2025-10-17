import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ToastService } from '../../core/services/toast.service';
import { PasswordValidator } from '../../core/validators/password.validator';

@Component({
  selector: 'security-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="space-y-6">
      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
          </svg>
          Security
        </h2>
        <p class="text-sm text-gray-500 mt-2">Manage your account security and password</p>
      </div>

      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h3 class="text-2xl font-medium mb-4">Change Password</h3>
        <form [formGroup]="passwordForm" (ngSubmit)="changePassword()" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input type="password" formControlName="current_password"
                   class="input w-full px-3 py-2 border border-gray-300 rounded-lg"
                   placeholder="Enter current password">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input type="password" formControlName="password"
                   class="input w-full px-3 py-2 border border-gray-300 rounded-lg"
                   placeholder="Enter new password">
            <p class="text-xs text-gray-500 mt-1">Must be at least 8 characters with uppercase, lowercase, and number</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input type="password" formControlName="password_confirmation"
                   class="input w-full px-3 py-2 border border-gray-300 rounded-lg"
                   placeholder="Confirm new password">
          </div>
          <div class="flex justify-end">
            <button type="submit"
                    [disabled]="passwordForm.invalid || saving()"
                    class="bg-blue-600 text-white px-4 py-3 rounded-xl disabled:opacity-50 transition-all duration-300 hover:bg-blue-700 cursor-pointer">
              <span *ngIf="!saving()">Change Password</span>
              <span *ngIf="saving()">Changing...</span>
            </button>
          </div>
        </form>
      </div>

      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h3 class="text-2xl font-medium mb-4">Account Security</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <div class="font-medium text-sm">Email Verification</div>
              <div class="text-xs text-gray-500">Your email is verified</div>
            </div>
            <span class="text-green-600 text-sm font-medium">✓ Verified</span>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <div class="font-medium text-sm">Two-Factor Authentication</div>
              <div class="text-xs text-gray-500">Add an extra layer of security (coming soon)</div>
            </div>
            <span class="text-gray-400 text-sm">Not Available</span>
          </div>
          <div class="flex items-center justify-between py-3">
            <div>
              <div class="font-medium text-sm">Active Sessions</div>
              <div class="text-xs text-gray-500">Manage your login sessions (coming soon)</div>
            </div>
            <span class="text-gray-400 text-sm">Not Available</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .input {
      width: 100%;
      border-radius: 12px;
      border: 1px solid #d1d5db;
      padding: 0.75rem 0.875rem;
      font-size: 1rem;
      background: #ffffff;
      transition: all 0.2s ease-in-out;
    }
    .input:focus {
      outline: none;
      border-color: #3b82f6;
    }
  `]
})
export class SecuritySettingsComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private toast = inject(ToastService);
  private apiUrl = environment.apiUrl;
  
  saving = signal(false);
  
  passwordForm = this.fb.group({
    current_password: ['', [Validators.required]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      PasswordValidator.strong()
    ]],
    password_confirmation: ['', [Validators.required]]
  });

  changePassword() {
    if (this.passwordForm.invalid) return;
    
    this.saving.set(true);
    this.http.post(`${this.apiUrl}/change-password`, this.passwordForm.value).subscribe({
      next: () => {
        this.saving.set(false);
        this.passwordForm.reset();
        this.toast.success('Password changed successfully!');
      },
      error: (error) => {
        this.saving.set(false);
        this.toast.error(error.error?.message || 'Failed to change password');
      }
    });
  }
}

