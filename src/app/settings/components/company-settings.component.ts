import { Component, OnInit, inject, signal } from '@angular/core';
import { SettingsService, Company } from '../settings.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'company-settings',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="space-y-4">
      <div class="border bg-white shadow border-gray-200 p-5 rounded-2xl">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
          </svg>

          Company
        </h2>
        <p class="text-sm text-gray-500 mt-2">Company-wide settings and preferences</p>
      </div>


      <div class="border border-gray-200 rounded-2xl shadow bg-white">
        <div class="p-5 pb-2 border-gray-200 flex items-center gap-2">
          <span class="text-2xl font-medium">Company Information</span>
        </div>
        <form [formGroup]="form" class="p-5 space-y-4">
          <div>
            <div class="text-sm font-medium mb-2">Company Logo</div>
            <div class="flex items-center gap-4">
              <img *ngIf="form.get('logo_url')?.value" [src]="form.get('logo_url')?.value || ''"
                   class="h-12 w-12 object-cover rounded-lg border border-gray-200" alt="Company logo">
              <div class="space-y-1">
                <button type="button" class="px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 inline-flex items-center gap-2"
                        (click)="fileInput.click()">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>

                  Upload Logo
                </button>
                <div class="text-xs text-gray-500">PNG, JPG up to 5MB. Recommended: 200×200px</div>
                <input #fileInput type="file" class="input hidden" accept="image/*" (change)="onLogoChange($event)"/>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('name')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Company Name <span class="text-red-500"
                                                                                                 *ngIf="isRequired('name')">*</span></label>
                  <input
                    type="text"
                    class="input w-full"
                    formControlName="name"
                    placeholder="e.g., Company LLC"
                    [class.error-input]="hasFieldError('name')">
                  <div class="field-error" *ngIf="hasFieldError('name')">{{ getFieldError('name') }}</div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('industry')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <input
                    type="text"
                    class="input w-full"
                    formControlName="industry"
                    placeholder="e.g., Manufacturing"
                    [class.error-input]="hasFieldError('industry')">
                  <div class="field-error" *ngIf="hasFieldError('industry')">{{ getFieldError('industry') }}</div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('business_type')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <input
                    type="text"
                    class="input w-full"
                    formControlName="business_type"
                    placeholder="e.g., LLC, Sole Proprietor"
                    [class.error-input]="hasFieldError('business_type')">
                  <div class="field-error" *ngIf="hasFieldError('business_type')">{{ getFieldError('business_type') }}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('email')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    class="input w-full"
                    formControlName="email"
                    placeholder="e.g., hello@company.com"
                    [class.error-input]="hasFieldError('email')">
                  <div class="field-error" *ngIf="hasFieldError('email')">{{ getFieldError('email') }}</div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('phone')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="text"
                    class="input w-full"
                    formControlName="phone"
                    placeholder="e.g., +1 555 123 4567"
                    [class.error-input]="hasFieldError('phone')">
                  <div class="field-error" *ngIf="hasFieldError('phone')">{{ getFieldError('phone') }}</div>
                </div>
              </div>
            </div>
            <div class="md:col-span-2">
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('address')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Company Address</label>
                  <textarea
                    formControlName="address"
                    placeholder="Enter company address"
                    class="input resize-none w-full"
                    [class.error-input]="hasFieldError('address')"></textarea>
                  <div class="field-error" *ngIf="hasFieldError('address')">{{ getFieldError('address') }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-2 flex justify-end">
            <button type="button"
                    class="bg-blue-600 text-white px-4 py-3 font-medium rounded-xl disabled:opacity-50 transition-all duration-300 hover:bg-blue-700 cursor-pointer"
                    [disabled]="saving() || form.invalid" (click)="save()">Save Changes
            </button>
          </div>
        </form>
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
      outline: none;
    }

    .input::placeholder {
      color: #9ca3af;
    }
    .input:focus {
      outline: none;
      border-color: #3b82f6;
      background: #ffffff;
    }
  `]
})
export class CompanySettingsComponent implements OnInit {
  private api = inject(SettingsService);
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    industry: [''],
    business_type: [''],
    email: ['', [Validators.email]],
    phone: [''],
    address: [''],
    logo_url: ['']
  });
  saving = signal(false);
  private logoFile: File | null = null;

  ngOnInit() {
    this.api.getCompany().subscribe(res => {
      const c = res.data?.company || {} as Partial<Company>;
      this.form.patchValue({
        name: c.name || '',
        industry: c.industry || '',
        business_type: c.business_type || '',
        email: c.email || '',
        phone: c.phone || '',
        address: c.address || '',
        logo_url: c.logo_url || ''
      });
    });
  }

  // Frontend Rules helpers
  hasFieldError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  getFieldError(controlName: string): string {
    const control = this.form.get(controlName);
    if (!control || !control.errors) return '';
    if (control.errors['required']) return 'This field is required.';
    if (control.errors['email']) return 'Enter a valid email address.';
    if (control.errors['minlength']) return `Minimum ${control.errors['minlength'].requiredLength} characters.`;
    if (control.errors['maxlength']) return `Maximum ${control.errors['maxlength'].requiredLength} characters.`;
    if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}.`;
    if (control.errors['max']) return `Maximum value is ${control.errors['max'].max}.`;
    return 'Invalid value.';
  }

  isRequired(controlName: string): boolean {
    const control = this.form.get(controlName);
    try {
      // @ts-ignore - Angular 16 provides hasValidator
      if (control && typeof control.hasValidator === 'function') {
        return control.hasValidator(Validators.required);
      }
    } catch {}
    return controlName === 'name';
  }
  onLogoChange(e: Event) { this.logoFile = (e.target as HTMLInputElement).files?.[0] || null; }

  save() {
    this.saving.set(true);
    const payload: Partial<Company> = this.form.value as any;
    this.api.updateCompany(payload).subscribe({
      next: () => {
        if (!this.logoFile) { this.saving.set(false); return; }
        this.api.uploadCompanyLogo(this.logoFile).subscribe({
          next: r => { this.form.patchValue({ logo_url: r.data?.logo_url || this.form.get('logo_url')?.value }); this.saving.set(false); },
          error: () => this.saving.set(false)
        });
      },
      error: () => this.saving.set(false)
    });
  }
}


