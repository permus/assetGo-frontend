import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../core/services/toast.service';
import { PreferencesService } from '../../core/services/preferences.service';

@Component({
  selector: 'language-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border border-gray-200 bg-white shadow p-5 rounded-2xl mb-4 bg-white">
      <h2 class="text-2xl font-medium mb-3">Language & Display</h2>
      <div class="text-sm text-gray-500 mb-2">Interface Language</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <button
          class="relative p-4 rounded-2xl border border-gray-200 text-left transition-all duration-300 hover:border-blue-500 cursor-pointer"
          [class.bg-blue-600]="language()==='en'" [class.text-white]="language()==='en'" (click)="setLanguage('en')">
          <div class="text-xs">US</div>
          <div class="font-medium">English</div>
          <div class="text-xs opacity-80">English</div>
          <span *ngIf="language()==='en'"
                class="absolute right-3 top-3 text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">Active</span>
        </button>
        <button
          class="relative p-4 rounded-2xl border border-gray-200 text-left transition-all duration-300 hover:border-blue-500 cursor-pointer"
          [class.bg-blue-600]="language()==='ar'" [class.text-white]="language()==='ar'" (click)="setLanguage('ar')">
          <div class="text-xs">AE</div>
          <div class="font-medium">Arabic</div>
          <div class="text-xs opacity-80">العربية</div>
        </button>
      </div>
      <div class="mt-5">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium">Right-to-Left Layout</div>
            <p class="text-sm text-gray-500">Enable RTL layout for Arabic and other RTL languages</p>
          </div>
<!--          <button type="button" role="switch" [attr.aria-checked]="rtl()" (click)="setRtl(!rtl())"
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300"
                  [class.bg-blue-600]="rtl()" [class.bg-gray-300]="!rtl()">
            <span
              class="inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 cursor-pointer"
              [class.translate-x-[-2px]]="rtl()" [class.translate-x-[2px]]="!rtl()"></span>
          </button>-->

          <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out !p-1"
                  [class.bg-blue-600]="rtl()" [class.bg-gray-300]="!rtl()"
                  (click)="setRtl(!rtl())">
            <span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out shadow-sm"
                  [class.translate-x--5]="rtl()" [class.translate-x-0.5]="!rtl()"></span>
          </button>


        </div>
      </div>
      <div class="mt-4 text-sm text-gray-500">
        Current locale: {{ language() === 'en' ? 'English (US)' : (language() === 'ar' ? 'Arabic' : language()) }}
      </div>
    </div>
  `
})
export class LanguageSettingsComponent implements OnInit {
  language = signal('en');
  rtl = signal(false);
  private toast = inject(ToastService);
  private prefsService = inject(PreferencesService);

  ngOnInit() {
    // Load preferences from backend
    const prefs = this.prefsService.getPreferences();
    const lang = prefs?.language || localStorage.getItem('app.language') || 'en';
    const rtlValue = prefs?.rtl !== undefined ? prefs.rtl : (localStorage.getItem('app.rtl') === 'true');
    
    this.language.set(lang);
    
    // Initialize RTL based on language if not explicitly set
    if (prefs?.rtl === undefined && localStorage.getItem('app.rtl') === null) {
      // If RTL was never set, auto-set based on language
      const shouldBeRtl = lang === 'ar';
      this.rtl.set(shouldBeRtl);
    } else {
      this.rtl.set(rtlValue);
    }
    
    this.apply();
  }

  setLanguage(lang: string) {
    this.language.set(lang);
    
    // Automatically set RTL based on language
    const shouldBeRtl = lang === 'ar';
    this.rtl.set(shouldBeRtl);
    
    // Save to backend
    this.prefsService.setAndSave('language', lang).subscribe({
      next: () => {
        this.prefsService.setAndSave('rtl', shouldBeRtl).subscribe({
          next: () => {
            this.apply();
            this.toast.success(`Language changed to ${lang === 'en' ? 'English' : 'Arabic'}`);
          },
          error: () => {
            this.toast.error('Failed to save RTL preference');
          }
        });
      },
      error: () => {
        this.toast.error('Failed to save language preference');
      }
    });
  }

  setRtl(v: boolean) {
    this.rtl.set(v);
    
    // Save to backend
    this.prefsService.setAndSave('rtl', v).subscribe({
      next: () => {
        this.apply();
        this.toast.success(`RTL layout ${v ? 'enabled' : 'disabled'}`);
      },
      error: () => {
        this.toast.error('Failed to save RTL preference');
      }
    });
  }

  private apply() {
    document.documentElement.lang = this.language();
    document.documentElement.dir = this.rtl() ? 'rtl' : 'ltr';
  }
}


