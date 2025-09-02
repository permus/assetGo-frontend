import { Component, OnInit, inject, signal } from '@angular/core';
import { SettingsService, Company } from '../settings.service';

@Component({
  selector: 'company-settings',
  standalone: true,
  template: `
    <div class="border border-gray-200 p-4 rounded-2xl space-y-4">
      <h2 class="text-xl font-medium">Company</h2>
      <p class="text-sm text-gray-600">Company-wide settings and preferences</p>

      <div class="border border-gray-200 rounded-2xl">
        <div class="p-4 border-b border-gray-200 flex items-center gap-2">
          <span class="font-medium">Company Information</span>
        </div>
        <div class="p-4 space-y-4">
          <div>
            <div class="text-sm font-medium mb-1">Company Logo</div>
            <div class="flex items-center gap-4">
              <img *ngIf="form().logo_url" [src]="form().logo_url!" class="h-12 w-12 object-cover rounded border" alt="Company logo">
              <div class="space-y-1">
                <button type="button" class="px-3 py-2 rounded border bg-white hover:bg-gray-50" (click)="fileInput.click()">Upload Logo</button>
                <div class="text-xs text-gray-500">PNG, JPG up to 5MB. Recommended: 200×200px</div>
                <input #fileInput type="file" class="hidden" accept="image/*" (change)="onLogoChange($event)" />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="font-medium">Company Name</label>
              <input class="border p-2 rounded w-full" [value]="form().name || ''" (input)="patch('name', $any($event.target).value)" />
            </div>
            <div>
              <label class="font-medium">Industry</label>
              <input class="border p-2 rounded w-full" [value]="form().industry || ''" (input)="patch('industry', $any($event.target).value)" />
            </div>
            <div>
              <label class="font-medium">Business Type</label>
              <input class="border p-2 rounded w-full" [value]="form().business_type || ''" (input)="patch('business_type', $any($event.target).value)" />
            </div>
            <div>
              <label class="font-medium">Email Address</label>
              <input class="border p-2 rounded w-full" [value]="form().email || ''" (input)="patch('email', $any($event.target).value)" />
            </div>
            <div>
              <label class="font-medium">Phone Number</label>
              <input class="border p-2 rounded w-full" [value]="form().phone || ''" (input)="patch('phone', $any($event.target).value)" />
            </div>
            <div class="md:col-span-2">
              <label class="font-medium">Company Address</label>
              <textarea class="border p-2 rounded w-full" [value]="form().address || ''" (input)="patch('address', $any($event.target).value)"></textarea>
            </div>
          </div>

          <div class="pt-2 flex justify-end">
            <button class="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50" [disabled]="saving()" (click)="save()">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CompanySettingsComponent implements OnInit {
  private api = inject(SettingsService);
  form = signal<Partial<Company>>({});
  saving = signal(false);
  private logoFile: File | null = null;

  ngOnInit() { this.api.getCompany().subscribe(res => this.form.set(res.data?.company || {})); }
  patch<K extends keyof Company>(k: K, v: Company[K]) { this.form.set({ ...this.form(), [k]: v }); }
  onLogoChange(e: Event) { this.logoFile = (e.target as HTMLInputElement).files?.[0] || null; }

  save() {
    this.saving.set(true);
    this.api.updateCompany(this.form()).subscribe({
      next: () => {
        if (!this.logoFile) { this.saving.set(false); return; }
        this.api.uploadCompanyLogo(this.logoFile).subscribe({
          next: r => { this.form.set({ ...this.form(), logo_url: r.data?.logo_url || this.form().logo_url }); this.saving.set(false); },
          error: () => this.saving.set(false)
        });
      },
      error: () => this.saving.set(false)
    });
  }
}


