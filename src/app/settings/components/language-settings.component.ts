import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'language-settings',
  standalone: true,
  template: `
    <div class="border border-gray-200 p-4 rounded-lg mb-4 bg-white">
      <h2 class="text-xl font-medium mb-2">Language & Display</h2>
      <div class="text-sm text-gray-600 mb-2">Interface Language</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <button class="relative p-4 rounded-lg border border-gray-200 text-left" [class.bg-blue-600]="language()==='en'" [class.text-white]="language()==='en'" (click)="setLanguage('en')">
          <div class="text-xs">US</div>
          <div class="font-medium">English</div>
          <div class="text-xs opacity-80">English</div>
          <span *ngIf="language()==='en'" class="absolute right-3 top-3 text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">Active</span>
        </button>
        <button class="relative p-4 rounded-lg border border-gray-200 text-left" [class.bg-blue-600]="language()==='ar'" [class.text-white]="language()==='ar'" (click)="setLanguage('ar')">
          <div class="text-xs">AE</div>
          <div class="font-medium">Arabic</div>
          <div class="text-xs opacity-80">العربية</div>
        </button>
      </div>
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium">Right-to-Left Layout</div>
            <p class="text-sm text-gray-500">Enable RTL layout for Arabic and other RTL languages</p>
          </div>
          <button type="button" role="switch" [attr.aria-checked]="rtl()" (click)="setRtl(!rtl())"
                  class="relative inline-flex h-6 w-11 items-center rounded-full"
                  [class.bg-blue-600]="rtl()" [class.bg-gray-300]="!rtl()">
            <span class="inline-block h-5 w-5 transform rounded-full bg-white transition" [class.translate-x-5]="rtl()" [class.translate-x-1]="!rtl()"></span>
          </button>
        </div>
      </div>
      <div class="mt-4 text-sm text-gray-500">
        Current locale: {{ language()==='en' ? 'English (US)' : (language()==='ar' ? 'Arabic' : language()) }}
      </div>
    </div>
  `,
  styles: [`
    .input { width: 100%; border-radius: 0.5rem; border: 1px solid #d1d5db; padding: 0.75rem 0.875rem; font-size: 1rem; background: #ffffff; transition: all 0.2s ease-in-out; }
    .input::placeholder { color: #9ca3af; }
  `]
})
export class LanguageSettingsComponent implements OnInit {
  language = signal(localStorage.getItem('app.language') || 'en');
  rtl = signal(localStorage.getItem('app.rtl') === 'true');

  ngOnInit() { this.apply(); }

  setLanguage(lang: string) {
    this.language.set(lang);
    localStorage.setItem('app.language', lang);
    this.apply();
  }

  setRtl(v: boolean) {
    this.rtl.set(v);
    localStorage.setItem('app.rtl', String(v));
    this.apply();
  }

  private apply() {
    document.documentElement.lang = this.language();
    document.documentElement.dir = this.rtl() ? 'rtl' : 'ltr';
  }
}


