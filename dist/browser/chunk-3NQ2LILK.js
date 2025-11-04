import "./chunk-6M5LH3XM.js";
import {
  ToastComponent
} from "./chunk-PHQDZEZE.js";
import {
  ToastService
} from "./chunk-7NKQIE52.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-LZKWF3AL.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ISERUI2H.js";
import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
  NgClass,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-ENJBTPXH.js";
import {
  BehaviorSubject,
  Component,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  Subject,
  debounceTime,
  distinctUntilChanged,
  setClassMetadata,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SCVX3V3B.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/admin/services/admin-auth.service.ts
var AdminAuthService = class _AdminAuthService {
  http;
  apiUrl = environment.apiUrl;
  currentAdminSubject = new BehaviorSubject(null);
  currentAdmin$ = this.currentAdminSubject.asObservable();
  constructor(http) {
    this.http = http;
    this.loadAdminFromStorage();
  }
  loadAdminFromStorage() {
    const adminStr = localStorage.getItem("admin");
    if (adminStr) {
      try {
        const admin = JSON.parse(adminStr);
        this.currentAdminSubject.next(admin);
      } catch (e) {
        localStorage.removeItem("admin");
        localStorage.removeItem("admin_token");
      }
    }
  }
  getAuthHeaders() {
    const token = this.getToken();
    return {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
  }
  login(data) {
    return this.http.post(`${this.apiUrl}/admin/login`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).pipe(tap((response) => {
      if (response.success && response.data?.token) {
        this.setSession(response.data.token, response.data.admin);
      }
    }));
  }
  logout() {
    return this.http.post(`${this.apiUrl}/admin/logout`, {}, this.getAuthHeaders()).pipe(tap(() => {
      this.clearSession();
    }));
  }
  getProfile() {
    return this.http.get(`${this.apiUrl}/admin/profile`, this.getAuthHeaders()).pipe(tap((response) => {
      if (response.success && response.data) {
        this.currentAdminSubject.next(response.data);
        localStorage.setItem("admin", JSON.stringify(response.data));
      }
    }));
  }
  setSession(token, admin) {
    localStorage.setItem("admin_token", token);
    localStorage.setItem("admin", JSON.stringify(admin));
    this.currentAdminSubject.next(admin);
  }
  clearSession() {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin");
    this.currentAdminSubject.next(null);
  }
  getToken() {
    return localStorage.getItem("admin_token");
  }
  isAuthenticated() {
    return !!this.getToken();
  }
  getCurrentAdmin() {
    return this.currentAdminSubject.value;
  }
  static \u0275fac = function AdminAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAuthService, factory: _AdminAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/admin/components/admin-login/admin-login.component.ts
function AdminLoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "p", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function AdminLoginComponent__svg_svg_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 25);
    \u0275\u0275element(1, "path", 26)(2, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent__svg_svg_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 25);
    \u0275\u0275element(1, "path", 28);
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "circle", 31)(3, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Signing In... ");
    \u0275\u0275elementEnd();
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  fb;
  router;
  adminAuthService;
  loginForm;
  isLoading = false;
  errorMessage = "";
  showPassword = false;
  constructor(fb, router, adminAuthService) {
    this.fb = fb;
    this.router = router;
    this.adminAuthService = adminAuthService;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.adminAuthService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(["/admin/dashboard"]);
          } else {
            this.errorMessage = response.message || "Login failed";
          }
          this.isLoading = false;
        },
        error: (error) => {
          const errorResponse = error.error;
          this.errorMessage = errorResponse?.message || "An error occurred during login";
          this.isLoading = false;
        }
      });
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  ngOnDestroy() {
  }
  static \u0275fac = function AdminLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminAuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], decls: 32, vars: 13, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "space-y-6"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "relative"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", "required", "", 1, "w-full", "px-4", "py-3", "pr-10", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400", 3, "type"], ["type", "button", 1, "absolute", "inset-y-0", "right-0", "pr-3", "flex", "items-center", "cursor-pointer", "text-gray-400", "hover:text-gray-600", 3, "click"], ["class", "h-5 w-5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function AdminLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Admin Panel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2", 9);
      \u0275\u0275text(11, "Admin Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 6);
      \u0275\u0275text(13, "Sign in to access the admin panel");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, AdminLoginComponent_div_14_Template, 3, 1, "div", 10);
      \u0275\u0275elementStart(15, "form", 11);
      \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 12)(17, "div")(18, "label", 13);
      \u0275\u0275text(19, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div")(22, "label", 15);
      \u0275\u0275text(23, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 16);
      \u0275\u0275element(25, "input", 17);
      \u0275\u0275elementStart(26, "button", 18);
      \u0275\u0275listener("click", function AdminLoginComponent_Template_button_click_26_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275template(27, AdminLoginComponent__svg_svg_27_Template, 3, 0, "svg", 19)(28, AdminLoginComponent__svg_svg_28_Template, 2, 0, "svg", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "button", 20);
      \u0275\u0275template(30, AdminLoginComponent_span_30_Template, 2, 0, "span", 21)(31, AdminLoginComponent_span_31_Template, 5, 0, "span", 22);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("src", "images/logo.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-300", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-300", ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLoginComponent, [{
    type: Component,
    args: [{ selector: "app-admin-login", standalone: true, imports: [
      NgIf,
      ReactiveFormsModule
    ], template: `<!-- Admin Login Component HTML -->\r
<div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">\r
  <div class="max-w-md w-full space-y-8">\r
    <!-- Logo -->\r
    <div class="text-center">\r
      <div class="flex justify-center mb-6">\r
        <div class="flex items-center space-x-3">\r
          <img [src]="'images/logo.png'" alt="AssetGo Logo" class="h-20 w-auto">\r
        </div>\r
      </div>\r
      <p class="text-gray-600">Admin Panel</p>\r
    </div>\r
\r
    <!-- Auth Card -->\r
    <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
      <div class="text-center mb-8">\r
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Admin Login</h2>\r
        <p class="text-gray-600">Sign in to access the admin panel</p>\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div *ngIf="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
        <p class="text-red-600 text-sm">{{ errorMessage }}</p>\r
      </div>\r
\r
      <!-- Login Form -->\r
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\r
        <div class="space-y-6">\r
          <div>\r
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>\r
            <input\r
              id="email"\r
              type="email"\r
              formControlName="email"\r
              placeholder="Enter your email"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
              [class.border-red-300]="loginForm.get('email')?.invalid && loginForm.get('email')?.touched"\r
              required>\r
          </div>\r
\r
          <div>\r
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>\r
            <div class="relative">\r
              <input\r
                id="password"\r
                [type]="showPassword ? 'text' : 'password'"\r
                formControlName="password"\r
                placeholder="Enter your password"\r
                class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
                [class.border-red-300]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"\r
                required>\r
              <button\r
                type="button"\r
                (click)="togglePasswordVisibility()"\r
                class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600">\r
                <svg *ngIf="!showPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                </svg>\r
                <svg *ngIf="showPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
\r
          <button\r
            type="submit"\r
            [disabled]="loginForm.invalid || isLoading"\r
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">\r
            <span *ngIf="!isLoading">Sign In</span>\r
            <span *ngIf="isLoading" class="flex items-center justify-center">\r
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              Signing In...\r
            </span>\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: AdminAuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/app/admin/components/admin-login/admin-login.component.ts", lineNumber: 17 });
})();

// src/app/admin/components/admin-layout/admin-layout.component.ts
function AdminLayoutComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "div", 42)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "div", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 45)(12, "button", 46);
    \u0275\u0275listener("click", function AdminLayoutComponent_div_50_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signOut());
    });
    \u0275\u0275elementStart(13, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 48);
    \u0275\u0275element(15, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div")(17, "div", 33);
    \u0275\u0275text(18, "Sign Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 50);
    \u0275\u0275text(20, "Sign out of admin panel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getAdminInitials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentAdmin == null ? null : ctx_r1.currentAdmin.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentAdmin == null ? null : ctx_r1.currentAdmin.email);
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  router;
  adminAuthService;
  currentAdmin = null;
  showUserDropdown = false;
  sidebarOpen = true;
  destroy$ = new Subject();
  constructor(router, adminAuthService) {
    this.router = router;
    this.adminAuthService = adminAuthService;
  }
  ngOnInit() {
    this.adminAuthService.currentAdmin$.pipe(takeUntil(this.destroy$)).subscribe((admin) => {
      this.currentAdmin = admin;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getAdminInitials() {
    if (!this.currentAdmin)
      return "A";
    return this.currentAdmin.name.charAt(0).toUpperCase();
  }
  toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
  }
  signOut() {
    this.adminAuthService.logout().subscribe({
      next: () => {
        this.router.navigate(["/admin/login"]);
      },
      error: () => {
        this.router.navigate(["/admin/login"]);
      }
    });
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".relative")) {
      this.showUserDropdown = false;
    }
  }
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminAuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AdminLayoutComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 54, vars: 37, consts: [[1, "min-h-screen", "bg-gray-50", "flex"], [1, "bg-white", "border-r", "border-gray-200", "h-screen", "fixed", "left-0", "top-0", "z-40", "transition-all", "duration-300", "ease-in-out", "overflow-y-auto"], [3, "ngClass"], ["alt", "AssetGo Logo", 3, "src"], [1, "text-2xl", "text-gray-900", 3, "ngClass"], [1, "font-bold"], [1, "p-4"], [1, "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider", "mb-4", 3, "ngClass"], ["routerLink", "/admin/dashboard", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-chart-column", "mr-3", "h-5", "w-5", "text-blue-600"], ["d", "M3 3v16a2 2 0 0 0 2 2h16"], ["d", "M18 17V9"], ["d", "M13 17V5"], ["d", "M8 17v-3"], ["routerLink", "/admin/users", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-users", "mr-3", "h-5", "w-5", "text-teal-600"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M22 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "flex", "flex-col", "flex-1", "transition-all", "duration-300", "ease-in-out"], [1, "bg-white", "border-b", "border-gray-200", "sticky", "top-0", "z-50"], [1, "flex", "items-center", "justify-between", "px-6", "py-4"], [1, "flex", "items-center", "space-x-4"], [1, "p-2", "rounded-lg", "hover:bg-gray-100", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "size-5", "text-gray-600"], ["width", "18", "height", "18", "x", "3", "y", "3", "rx", "2"], ["d", "M9 3v18"], [1, "flex", "items-center", "space-x-4", "ml-auto"], [1, "relative"], [1, "flex", "items-center", "space-x-3", "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", "cursor-pointer", 3, "click"], [1, "w-8", "h-8", "bg-blue-600", "rounded-full", "flex", "items-center", "justify-center", "text-white", "font-medium"], [1, "text-sm"], [1, "font-medium", "text-gray-900"], [1, "text-gray-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50", 4, "ngIf"], [1, "flex-1", "overflow-y-auto"], [1, "absolute", "right-0", "mt-2", "w-80", "bg-white", "rounded-xl", "shadow-lg", "border", "border-gray-200", "py-2", "z-50"], [1, "px-4", "py-3", "border-b", "border-gray-100"], [1, "flex", "items-center", "space-x-3"], [1, "w-12", "h-12", "bg-blue-600", "rounded-full", "flex", "items-center", "justify-center", "text-white", "font-medium", "text-lg"], [1, "font-semibold", "text-gray-900"], [1, "text-sm", "text-gray-500"], [1, "px-4", "py-2", "border-t", "border-gray-100"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "hover:bg-red-50", "text-left", "transition-colors", "cursor-pointer", 3, "click"], [1, "w-8", "h-8", "bg-red-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "text-xs", "text-gray-500"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "h3", 4)(5, "span", 5);
      \u0275\u0275text(6, "Admin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "nav", 6)(8, "div", 7);
      \u0275\u0275text(9, "Navigation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 2)(11, "li")(12, "a", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 9);
      \u0275\u0275element(14, "path", 10)(15, "path", 11)(16, "path", 12)(17, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span", 2);
      \u0275\u0275text(19, "Dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "li")(21, "a", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 15);
      \u0275\u0275element(23, "path", 16)(24, "circle", 17)(25, "path", 18)(26, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "span", 2);
      \u0275\u0275text(28, "Users");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(29, "div", 20)(30, "header", 21)(31, "div", 22)(32, "div", 23)(33, "button", 24);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_33_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 25);
      \u0275\u0275element(35, "rect", 26)(36, "path", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "div", 28)(38, "div", 29)(39, "button", 30);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_39_listener() {
        return ctx.toggleUserDropdown();
      });
      \u0275\u0275elementStart(40, "div", 31)(41, "span");
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 32)(44, "div", 33);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 34);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 35);
      \u0275\u0275element(49, "path", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(50, AdminLayoutComponent_div_50_Template, 21, 3, "div", 37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "main", 38);
      \u0275\u0275element(52, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(53, "app-toast");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("w-64", ctx.sidebarOpen)("w-16", !ctx.sidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "px-2 py-6" : "flex items-center space-x-2 p-6");
      \u0275\u0275advance();
      \u0275\u0275classProp("h-10", ctx.sidebarOpen)("w-auto", ctx.sidebarOpen)("size-10", !ctx.sidebarOpen)("object-contain", !ctx.sidebarOpen);
      \u0275\u0275property("src", "images/logo-short.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("p-4", ctx.sidebarOpen)("p-2", !ctx.sidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "space-y-2" : "space-y-3");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("!block", !ctx.sidebarOpen);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("!block", !ctx.sidebarOpen);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ml-64", ctx.sidebarOpen)("ml-16", !ctx.sidebarOpen);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.getAdminInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentAdmin == null ? null : ctx.currentAdmin.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentAdmin == null ? null : ctx.currentAdmin.email);
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.showUserDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showUserDropdown);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterOutlet, RouterModule, RouterLink, RouterLinkActive, ToastComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [CommonModule, RouterOutlet, RouterModule, ToastComponent], template: `<div class="min-h-screen bg-gray-50 flex">\r
  <!-- Sidebar -->\r
  <aside class="bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out overflow-y-auto"\r
         [class.w-64]="sidebarOpen" [class.w-16]="!sidebarOpen">\r
    <!-- Logo -->\r
    <div [ngClass]="!sidebarOpen ? 'px-2 py-6' : 'flex items-center space-x-2 p-6'">\r
      <img [src]="'images/logo-short.png'" alt="AssetGo Logo"\r
           [class.h-10]="sidebarOpen"\r
           [class.w-auto]="sidebarOpen"\r
           [class.size-10]="!sidebarOpen"\r
           [class.object-contain]="!sidebarOpen">\r
      <h3 class="text-2xl text-gray-900" [ngClass]="!sidebarOpen ? 'hidden' : ''">\r
        <span class="font-bold">Admin</span>\r
      </h3>\r
    </div>\r
\r
    <nav class="p-4" [class.p-4]="sidebarOpen" [class.p-2]="!sidebarOpen">\r
      <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4"\r
           [ngClass]="!sidebarOpen ? 'hidden' : ''">Navigation\r
      </div>\r
\r
      <ul [ngClass]="!sidebarOpen ? 'space-y-2' : 'space-y-3'">\r
        <li>\r
          <a routerLink="/admin/dashboard" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-chart-column mr-3 h-5 w-5 text-blue-600">\r
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>\r
              <path d="M18 17V9"></path>\r
              <path d="M13 17V5"></path>\r
              <path d="M8 17v-3"></path>\r
            </svg>\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Dashboard</span>\r
          </a>\r
        </li>\r
        <li>\r
          <a routerLink="/admin/users" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-users mr-3 h-5 w-5 text-teal-600">\r
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>\r
              <circle cx="9" cy="7" r="4"></circle>\r
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>\r
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
            </svg>\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Users</span>\r
          </a>\r
        </li>\r
      </ul>\r
    </nav>\r
  </aside>\r
\r
  <div class="flex flex-col flex-1 transition-all duration-300 ease-in-out"\r
       [class.ml-64]="sidebarOpen" [class.ml-16]="!sidebarOpen">\r
    <!-- Header -->\r
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">\r
      <div class="flex items-center justify-between px-6 py-4">\r
        <!-- Left side -->\r
        <div class="flex items-center space-x-4">\r
          <!-- Sidebar toggle -->\r
          <button class="p-2 rounded-lg hover:bg-gray-100 cursor-pointer" (click)="toggleSidebar()">\r
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="size-5 text-gray-600"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>\r
              <path d="M9 3v18"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Right side -->\r
        <div class="flex items-center space-x-4 ml-auto">\r
          <!-- User menu -->\r
          <div class="relative">\r
            <button\r
              (click)="toggleUserDropdown()"\r
              class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">\r
              <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">\r
                <span>{{ getAdminInitials() }}</span>\r
              </div>\r
              <div class="text-sm">\r
                <div class="font-medium text-gray-900">{{ currentAdmin?.name }}</div>\r
                <div class="text-gray-500">{{ currentAdmin?.email }}</div>\r
              </div>\r
              <svg class="w-4 h-4 text-gray-400 transition-transform" [class.rotate-180]="showUserDropdown" fill="none"\r
                   stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
            </button>\r
\r
            <!-- User Dropdown Menu -->\r
            <div *ngIf="showUserDropdown"\r
                 class="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">\r
              <!-- User Info Header -->\r
              <div class="px-4 py-3 border-b border-gray-100">\r
                <div class="flex items-center space-x-3">\r
                  <div\r
                    class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-lg">\r
                    <span>{{ getAdminInitials() }}</span>\r
                  </div>\r
                  <div>\r
                    <div class="font-semibold text-gray-900">{{ currentAdmin?.name }}</div>\r
                    <div class="text-sm text-gray-500">{{ currentAdmin?.email }}</div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Sign Out -->\r
              <div class="px-4 py-2 border-t border-gray-100">\r
                <button\r
                  (click)="signOut()"\r
                  class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-50 text-left transition-colors cursor-pointer">\r
                  <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">\r
                    <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>\r
                    </svg>\r
                  </div>\r
                  <div>\r
                    <div class="font-medium text-gray-900">Sign Out</div>\r
                    <div class="text-xs text-gray-500">Sign out of admin panel</div>\r
                  </div>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </header>\r
\r
    <!-- Main Content -->\r
    <main class="flex-1 overflow-y-auto">\r
      <router-outlet></router-outlet>\r
    </main>\r
  </div>\r
\r
  <!-- Toast Notifications -->\r
  <app-toast></app-toast>\r
</div>\r
` }]
  }], () => [{ type: Router }, { type: AdminAuthService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/admin/components/admin-layout/admin-layout.component.ts", lineNumber: 16 });
})();

// src/app/admin/pages/admin-dashboard/admin-dashboard.component.ts
var AdminDashboardComponent = class _AdminDashboardComponent {
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 3, vars: 0, consts: [[1, "p-6", "grid", "place-items-center", "h-[calc(100vh-200px)]"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-6"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Admin Dashboard");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule], template: '<div class="p-6 grid place-items-center h-[calc(100vh-200px)]">\r\n  <h1 class="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>\r\n</div>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/admin/pages/admin-dashboard/admin-dashboard.component.ts", lineNumber: 11 });
})();

// src/app/admin/components/suspend-activate-confirmation-modal/suspend-activate-confirmation-modal.component.ts
function SuspendActivateConfirmationModalComponent_div_0__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "path", 22);
    \u0275\u0275elementEnd();
  }
}
function SuspendActivateConfirmationModalComponent_div_0__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "path", 24);
    \u0275\u0275elementEnd();
  }
}
function SuspendActivateConfirmationModalComponent_div_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " This user will be suspended and will not be able to access the system. You can activate them again later. ");
    \u0275\u0275elementEnd();
  }
}
function SuspendActivateConfirmationModalComponent_div_0_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " This user will be activated and will regain access to the system. ");
    \u0275\u0275elementEnd();
  }
}
function SuspendActivateConfirmationModalComponent_div_0_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.actionText));
  }
}
function SuspendActivateConfirmationModalComponent_div_0_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "circle", 27)(3, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Processing...");
    \u0275\u0275elementEnd()();
  }
}
function SuspendActivateConfirmationModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function SuspendActivateConfirmationModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function SuspendActivateConfirmationModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div");
    \u0275\u0275template(5, SuspendActivateConfirmationModalComponent_div_0__svg_svg_5_Template, 2, 0, "svg", 5)(6, SuspendActivateConfirmationModalComponent_div_0__svg_svg_6_Template, 2, 0, "svg", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275listener("click", function SuspendActivateConfirmationModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 9);
    \u0275\u0275element(11, "path", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "h3", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "span", 14);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 15);
    \u0275\u0275template(20, SuspendActivateConfirmationModalComponent_div_0_span_20_Template, 2, 0, "span", 16)(21, SuspendActivateConfirmationModalComponent_div_0_span_21_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
    \u0275\u0275listener("click", function SuspendActivateConfirmationModalComponent_div_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(24, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 19);
    \u0275\u0275listener("click", function SuspendActivateConfirmationModalComponent_div_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275template(26, SuspendActivateConfirmationModalComponent_div_0_span_26_Template, 3, 3, "span", 16)(27, SuspendActivateConfirmationModalComponent_div_0_span_27_Template, 6, 0, "span", 20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.isActive ? "w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center" : "w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.actionTitle);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Are you sure you want to ", ctx_r1.actionText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userName);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.isActive ? "px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed" : "px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed");
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
var SuspendActivateConfirmationModalComponent = class _SuspendActivateConfirmationModalComponent {
  isOpen = false;
  isActive = true;
  userName = "";
  isLoading = false;
  closeModal = new EventEmitter();
  confirmAction = new EventEmitter();
  get actionText() {
    return this.isActive ? "suspend" : "activate";
  }
  get actionTitle() {
    return this.isActive ? "Suspend User" : "Activate User";
  }
  onConfirm() {
    if (this.isLoading)
      return;
    this.confirmAction.emit(!this.isActive);
  }
  onCancel() {
    if (this.isLoading)
      return;
    this.closeModal.emit();
  }
  static \u0275fac = function SuspendActivateConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuspendActivateConfirmationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuspendActivateConfirmationModalComponent, selectors: [["app-suspend-activate-confirmation-modal"]], inputs: { isOpen: "isOpen", isActive: "isActive", userName: "userName", isLoading: "isLoading" }, outputs: { closeModal: "closeModal", confirmAction: "confirmAction" }, decls: 1, vars: 1, consts: [["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4", 3, "click", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-md", "w-full", 3, "click"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], ["class", "w-5 h-5 text-orange-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-5 h-5 text-green-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], [1, "text-center", "mb-6"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-2"], [1, "font-bold"], [1, "text-gray-600"], [4, "ngIf"], [1, "flex", "items-center", "justify-end", "space-x-3"], [1, "px-6", "py-2", "text-gray-600", "hover:text-gray-800", "font-medium", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], [3, "click", "disabled"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-orange-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function SuspendActivateConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SuspendActivateConfirmationModalComponent_div_0_Template, 28, 18, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgIf, TitleCasePipe], encapsulation: 2, data: { animation: [
    trigger("backdropAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("150ms ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({ opacity: 0 }))
      ])
    ]),
    trigger("modalAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }),
        animate("200ms ease-out", style({
          opacity: 1,
          transform: "scale(1) translateY(0)"
        }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuspendActivateConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-suspend-activate-confirmation-modal", standalone: true, imports: [CommonModule], animations: [
      trigger("backdropAnimation", [
        transition(":enter", [
          style({ opacity: 0 }),
          animate("150ms ease-out", style({ opacity: 1 }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({ opacity: 0 }))
        ])
      ]),
      trigger("modalAnimation", [
        transition(":enter", [
          style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }),
          animate("200ms ease-out", style({
            opacity: 1,
            transform: "scale(1) translateY(0)"
          }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }))
        ])
      ])
    ], template: `<!-- Suspend/Activate Confirmation Modal -->\r
<div *ngIf="isOpen"\r
     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4"\r
     [@backdropAnimation]\r
     (click)="onCancel()">\r
  <!-- Modal Container -->\r
  <div class="bg-white rounded-2xl shadow-xl max-w-md w-full"\r
       [@modalAnimation]\r
       (click)="$event.stopPropagation()">\r
    <!-- Modal Header -->\r
    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r
      <div class="flex items-center space-x-3">\r
        <div [class]="isActive ? 'w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center' : 'w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'">\r
          <svg *ngIf="isActive" class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>\r
          </svg>\r
          <svg *ngIf="!isActive" class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
        </div>\r
        <h2 class="text-xl font-semibold text-gray-900">{{ actionTitle }}</h2>\r
      </div>\r
      <button\r
        (click)="onCancel()"\r
        [disabled]="isLoading"\r
        class="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50">\r
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Content -->\r
    <div class="p-6">\r
      <!-- Confirmation Message -->\r
      <div class="text-center mb-6">\r
        <h3 class="text-lg font-semibold text-gray-900 mb-2">\r
          Are you sure you want to {{ actionText }} <span class="font-bold">{{ userName }}</span>?\r
        </h3>\r
        <p class="text-gray-600">\r
          <span *ngIf="isActive">\r
            This user will be suspended and will not be able to access the system. You can activate them again later.\r
          </span>\r
          <span *ngIf="!isActive">\r
            This user will be activated and will regain access to the system.\r
          </span>\r
        </p>\r
      </div>\r
\r
      <!-- Action Buttons -->\r
      <div class="flex items-center justify-end space-x-3">\r
        <button\r
          (click)="onCancel()"\r
          [disabled]="isLoading"\r
          class="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors disabled:opacity-50">\r
          Cancel\r
        </button>\r
\r
        <button\r
          (click)="onConfirm()"\r
          [disabled]="isLoading"\r
          [class]="isActive ? 'px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed' : 'px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed'">\r
          <span *ngIf="!isLoading">{{ actionText | titlecase }}</span>\r
          <span *ngIf="isLoading" class="flex items-center space-x-2">\r
            <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
            <span>Processing...</span>\r
          </span>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { isOpen: [{
    type: Input
  }], isActive: [{
    type: Input
  }], userName: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], confirmAction: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuspendActivateConfirmationModalComponent, { className: "SuspendActivateConfirmationModalComponent", filePath: "src/app/admin/components/suspend-activate-confirmation-modal/suspend-activate-confirmation-modal.component.ts", lineNumber: 41 });
})();

// src/app/admin/services/admin-users.service.ts
var AdminUsersService = class _AdminUsersService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getAuthHeaders() {
    const adminToken = localStorage.getItem("admin_token");
    const regularToken = localStorage.getItem("token");
    if (!adminToken) {
      console.error("AdminUsersService: No admin_token found in localStorage");
      console.error("Regular token exists:", !!regularToken);
      console.error("Please login through /admin/login to get an admin token");
      alert("Admin authentication required. Please login through the admin panel at /admin/login");
      throw new Error("Admin token not found. Please login through /admin/login");
    }
    console.log("AdminUsersService: Using admin_token (first 20 chars):", adminToken.substring(0, 20) + "...");
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${adminToken.trim()}`
    };
    return { headers };
  }
  getUsers(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== void 0 && params[key] !== null) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/admin/users`, __spreadProps(__spreadValues({}, this.getAuthHeaders()), {
      params: httpParams
    }));
  }
  getUser(id) {
    return this.http.get(`${this.apiUrl}/admin/users/${id}`, this.getAuthHeaders());
  }
  updateUser(id, data) {
    return this.http.put(`${this.apiUrl}/admin/users/${id}`, data, this.getAuthHeaders());
  }
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`, this.getAuthHeaders());
  }
  getCreatedTeams(userId, params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== void 0 && params[key] !== null) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/admin/users/${userId}/teams`, __spreadProps(__spreadValues({}, this.getAuthHeaders()), {
      params: httpParams
    }));
  }
  static \u0275fac = function AdminUsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminUsersService, factory: _AdminUsersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUsersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/admin/pages/admin-users/admin-users.component.ts
function AdminUsersComponent__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r1.label);
  }
}
function AdminUsersComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, " Loading... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_15_table_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 28)(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 28)(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 28)(11, "div", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 28)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 32)(17, "div", 33)(18, "button", 34);
    \u0275\u0275listener("click", function AdminUsersComponent_div_15_table_2_tr_16_Template_button_click_18_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.viewUser(user_r3));
    });
    \u0275\u0275text(19, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 35);
    \u0275\u0275listener("click", function AdminUsersComponent_div_15_table_2_tr_16_Template_button_click_20_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleUserStatus(user_r3));
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r3.first_name, " ", user_r3.last_name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r3.user_type, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((user_r3.company == null ? null : user_r3.company.name) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(user_r3.active ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(user_r3.active ? "text-orange-600 hover:text-orange-900" : "text-green-600 hover:text-green-900");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.active ? "Suspend" : "Activate", " ");
  }
}
function AdminUsersComponent_div_15_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 23)(1, "thead", 24)(2, "tr")(3, "th", 25);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 25);
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 25);
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 25);
    \u0275\u0275text(10, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 25);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 25);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 26);
    \u0275\u0275template(16, AdminUsersComponent_div_15_table_2_tr_16_Template, 22, 11, "tr", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r3.users);
  }
}
function AdminUsersComponent_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " No users found. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 20);
    \u0275\u0275template(2, AdminUsersComponent_div_15_table_2_Template, 17, 1, "table", 21)(3, AdminUsersComponent_div_15_div_3_Template, 2, 0, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.users.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.users.length === 0);
  }
}
function AdminUsersComponent_div_16_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "div", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 46)(11, "div", 47)(12, "span", 45);
    \u0275\u0275text(13, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 48);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 47)(17, "span", 45);
    \u0275\u0275text(18, "Company:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 49);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 47)(22, "span", 45);
    \u0275\u0275text(23, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 50)(27, "button", 51);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_div_1_div_1_Template_button_click_27_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.viewUser(user_r6));
    });
    \u0275\u0275text(28, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 52);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_div_1_div_1_Template_button_click_29_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleUserStatus(user_r6));
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", user_r6.first_name.charAt(0), "", user_r6.last_name.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r6.first_name, " ", user_r6.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", user_r6.user_type, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((user_r6.company == null ? null : user_r6.company.name) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(user_r6.active ? "px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800" : "px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r6.active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(user_r6.active ? "flex-1 px-3 py-2 text-xs font-medium text-orange-600 hover:text-orange-900 hover:bg-orange-50 rounded-lg cursor-pointer transition-colors" : "flex-1 px-3 py-2 text-xs font-medium text-green-600 hover:text-green-900 hover:bg-green-50 rounded-lg cursor-pointer transition-colors");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r6.active ? "Suspend" : "Activate", " ");
  }
}
function AdminUsersComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, AdminUsersComponent_div_16_div_1_div_1_Template, 31, 13, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.users);
  }
}
function AdminUsersComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, " No users found. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminUsersComponent_div_16_div_1_Template, 2, 1, "div", 37)(2, AdminUsersComponent_div_16_div_2_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.users.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.users.length === 0);
  }
}
function AdminUsersComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "button", 55);
    \u0275\u0275listener("click", function AdminUsersComponent_div_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageChange(ctx_r3.currentPage - 1));
    });
    \u0275\u0275text(5, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function AdminUsersComponent_div_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageChange(ctx_r3.currentPage + 1));
    });
    \u0275\u0275text(7, " Next ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Showing ", (ctx_r3.currentPage - 1) * ctx_r3.perPage + 1, " to ", ctx_r3.Math.min(ctx_r3.currentPage * ctx_r3.perPage, ctx_r3.total), " of ", ctx_r3.total, " users ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.currentPage === ctx_r3.lastPage);
  }
}
var AdminUsersComponent = class _AdminUsersComponent {
  adminUsersService;
  router;
  toastService;
  users = [];
  loading = false;
  searchTerm = "";
  selectedUserType = null;
  currentPage = 1;
  perPage = 15;
  total = 0;
  lastPage = 1;
  userTypeOptions = [
    { value: null, label: "All" },
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "team", label: "Team" }
  ];
  // Confirmation modal
  showConfirmModal = false;
  selectedUser = null;
  confirmModalLoading = false;
  // View mode: 'list' or 'grid'
  viewMode = "list";
  // Search subject for debounced search
  searchSubject = new Subject();
  constructor(adminUsersService, router, toastService) {
    this.adminUsersService = adminUsersService;
    this.router = router;
    this.toastService = toastService;
  }
  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(500),
      // Wait 500ms after user stops typing
      distinctUntilChanged()
      // Only emit if value actually changed
    ).subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.currentPage = 1;
      this.loadUsers();
    });
    this.loadUsers();
  }
  ngOnDestroy() {
    this.searchSubject.complete();
  }
  loadUsers() {
    this.loading = true;
    this.adminUsersService.getUsers({
      page: this.currentPage,
      per_page: this.perPage,
      search: this.searchTerm || void 0,
      user_type: this.selectedUserType || void 0,
      sort_by: "created_at",
      sort_dir: "desc"
    }).subscribe({
      next: (response) => {
        if (response.success) {
          this.users = response.data.users;
          this.total = response.data.pagination.total;
          this.lastPage = response.data.pagination.last_page;
          this.currentPage = response.data.pagination.current_page;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onSearch() {
    this.currentPage = 1;
    this.loadUsers();
  }
  onSearchInputChange() {
    this.searchSubject.next(this.searchTerm);
  }
  onUserTypeFilter() {
    this.currentPage = 1;
    this.loadUsers();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadUsers();
  }
  toggleUserStatus(user) {
    this.selectedUser = user;
    this.showConfirmModal = true;
  }
  onConfirmStatusChange(newStatus) {
    if (!this.selectedUser)
      return;
    this.confirmModalLoading = true;
    const action = newStatus ? "activate" : "suspend";
    this.adminUsersService.updateUser(this.selectedUser.id, { active: newStatus }).subscribe({
      next: () => {
        this.selectedUser.active = newStatus;
        this.showConfirmModal = false;
        this.selectedUser = null;
        this.confirmModalLoading = false;
        this.toastService.success(`User ${action}d successfully`);
      },
      error: (error) => {
        this.confirmModalLoading = false;
        this.toastService.error(`Failed to ${action} user`);
        console.error(error);
      }
    });
  }
  onCloseConfirmModal() {
    this.showConfirmModal = false;
    this.selectedUser = null;
  }
  viewUser(user) {
    this.router.navigate(["/admin/users", user.id]);
  }
  toggleViewMode() {
    this.viewMode = this.viewMode === "list" ? "grid" : "list";
  }
  Math = Math;
  static \u0275fac = function AdminUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsersComponent)(\u0275\u0275directiveInject(AdminUsersService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], decls: 19, vars: 14, consts: [[1, "p-6"], [1, "mb-6", "flex", "justify-between", "items-center"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "cursor-pointer", 3, "click"], ["class", "w-5 h-5 text-gray-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "text-gray-700"], [1, "mb-4"], [1, "flex", "gap-4", "items-center"], ["type", "text", "placeholder", "Search users...", 1, "w-64", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "bg-white rounded-lg shadow p-6 text-center text-gray-500", 4, "ngIf"], [4, "ngIf"], ["class", "mt-4 flex items-center justify-between", 4, "ngIf"], [3, "closeModal", "confirmAction", "isOpen", "isActive", "userName", "isLoading"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], [3, "value"], [1, "bg-white", "rounded-lg", "shadow", "p-6", "text-center", "text-gray-500"], [1, "bg-white", "rounded-lg", "shadow", "overflow-hidden"], ["class", "min-w-full divide-y divide-gray-200", 4, "ngIf"], ["class", "p-6 text-center text-gray-500", 4, "ngIf"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "bg-gray-50"], [1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "bg-white", "divide-y", "divide-gray-200"], [4, "ngFor", "ngForOf"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-500"], [1, "px-2", "inline-flex", "text-xs", "leading-5", "font-semibold", "rounded-full", "bg-blue-100", "text-blue-800", "capitalize"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "font-medium"], [1, "flex", "gap-3"], [1, "text-blue-600", "hover:text-blue-900", "cursor-pointer", 3, "click"], [1, "cursor-pointer", 3, "click"], [1, "p-6", "text-center", "text-gray-500"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-4"], ["class", "bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "shadow", "hover:shadow-md", "transition-shadow", "p-6"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-3"], [1, "w-12", "h-12", "bg-blue-600", "rounded-full", "flex", "items-center", "justify-center", "text-white", "font-semibold", "text-lg"], [1, "text-sm", "font-semibold", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "space-y-2", "mb-4"], [1, "flex", "items-center", "justify-between"], [1, "px-2", "py-1", "text-xs", "font-semibold", "rounded-full", "bg-blue-100", "text-blue-800", "capitalize"], [1, "text-xs", "font-medium", "text-gray-900"], [1, "flex", "gap-2", "pt-4", "border-t", "border-gray-200"], [1, "flex-1", "px-3", "py-2", "text-xs", "font-medium", "text-blue-600", "hover:text-blue-900", "hover:bg-blue-50", "rounded-lg", "cursor-pointer", "transition-colors", 3, "click"], [3, "click"], [1, "mt-4", "flex", "items-center", "justify-between"], [1, "flex", "gap-2"], [1, "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "disabled:opacity-50", "disabled:cursor-not-allowed", "hover:bg-gray-50", "cursor-pointer", 3, "click", "disabled"]], template: function AdminUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_4_listener() {
        return ctx.toggleViewMode();
      });
      \u0275\u0275template(5, AdminUsersComponent__svg_svg_5_Template, 2, 0, "svg", 4)(6, AdminUsersComponent__svg_svg_6_Template, 2, 0, "svg", 4);
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_11_listener() {
        return ctx.onSearchInputChange();
      })("keyup.enter", function AdminUsersComponent_Template_input_keyup_enter_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedUserType, $event) || (ctx.selectedUserType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminUsersComponent_Template_select_change_12_listener() {
        return ctx.onUserTypeFilter();
      });
      \u0275\u0275template(13, AdminUsersComponent_option_13_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(14, AdminUsersComponent_div_14_Template, 2, 0, "div", 11)(15, AdminUsersComponent_div_15_Template, 4, 2, "div", 12)(16, AdminUsersComponent_div_16_Template, 3, 2, "div", 12)(17, AdminUsersComponent_div_17_Template, 8, 5, "div", 13);
      \u0275\u0275elementStart(18, "app-suspend-activate-confirmation-modal", 14);
      \u0275\u0275listener("closeModal", function AdminUsersComponent_Template_app_suspend_activate_confirmation_modal_closeModal_18_listener() {
        return ctx.onCloseConfirmModal();
      })("confirmAction", function AdminUsersComponent_Template_app_suspend_activate_confirmation_modal_confirmAction_18_listener($event) {
        return ctx.onConfirmStatusChange($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_11_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.viewMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "grid");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.viewMode === "list" ? "Grid View" : "List View");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedUserType);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.userTypeOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viewMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viewMode === "grid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.total > 0);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showConfirmModal)("isActive", (tmp_11_0 = ctx.selectedUser == null ? null : ctx.selectedUser.active) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : true)("userName", ctx.selectedUser ? ctx.selectedUser.first_name + " " + ctx.selectedUser.last_name : "")("isLoading", ctx.confirmModalLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SuspendActivateConfirmationModalComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUsersComponent, [{
    type: Component,
    args: [{ selector: "app-admin-users", standalone: true, imports: [CommonModule, FormsModule, SuspendActivateConfirmationModalComponent], template: `<div class="p-6">\r
  <div class="mb-6 flex justify-between items-center">\r
    <h1 class="text-2xl font-bold text-gray-900">Users</h1>\r
    <button\r
      (click)="toggleViewMode()"\r
      class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">\r
      <svg *ngIf="viewMode === 'list'" class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>\r
      </svg>\r
      <svg *ngIf="viewMode === 'grid'" class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>\r
      </svg>\r
      <span class="text-sm text-gray-700">{{ viewMode === 'list' ? 'Grid View' : 'List View' }}</span>\r
    </button>\r
  </div>\r
\r
  <!-- Search and Filters -->\r
  <div class="mb-4">\r
    <div class="flex gap-4 items-center">\r
      <input\r
        type="text"\r
        [(ngModel)]="searchTerm"\r
        (ngModelChange)="onSearchInputChange()"\r
        (keyup.enter)="onSearch()"\r
        placeholder="Search users..."\r
        class="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">\r
      <select\r
        [(ngModel)]="selectedUserType"\r
        (change)="onUserTypeFilter()"\r
        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">\r
        <option *ngFor="let option of userTypeOptions" [value]="option.value">{{ option.label }}</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="bg-white rounded-lg shadow p-6 text-center text-gray-500">\r
    Loading...\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="!loading && viewMode === 'list'">\r
    <div class="bg-white rounded-lg shadow overflow-hidden">\r
      <table *ngIf="users.length > 0" class="min-w-full divide-y divide-gray-200">\r
        <thead class="bg-gray-50">\r
          <tr>\r
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>\r
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>\r
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>\r
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>\r
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>\r
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody class="bg-white divide-y divide-gray-200">\r
          <tr *ngFor="let user of users">\r
            <td class="px-6 py-4 whitespace-nowrap">\r
              <div class="text-sm font-medium text-gray-900">{{ user.first_name }} {{ user.last_name }}</div>\r
            </td>\r
            <td class="px-6 py-4 whitespace-nowrap">\r
              <div class="text-sm text-gray-500">{{ user.email }}</div>\r
            </td>\r
            <td class="px-6 py-4 whitespace-nowrap">\r
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">\r
                {{ user.user_type }}\r
              </span>\r
            </td>\r
            <td class="px-6 py-4 whitespace-nowrap">\r
              <div class="text-sm text-gray-500">{{ user.company?.name || 'N/A' }}</div>\r
            </td>\r
            <td class="px-6 py-4 whitespace-nowrap">\r
              <span [class]="user.active ? 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800' : 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'">\r
                {{ user.active ? 'Active' : 'Inactive' }}\r
              </span>\r
            </td>\r
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">\r
              <div class="flex gap-3">\r
                <button\r
                  (click)="viewUser(user)"\r
                  class="text-blue-600 hover:text-blue-900 cursor-pointer">\r
                  View\r
                </button>\r
                <button\r
                  (click)="toggleUserStatus(user)"\r
                  [class]="user.active ? 'text-orange-600 hover:text-orange-900' : 'text-green-600 hover:text-green-900'"\r
                  class="cursor-pointer">\r
                  {{ user.active ? 'Suspend' : 'Activate' }}\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
\r
      <div *ngIf="users.length === 0" class="p-6 text-center text-gray-500">\r
        No users found.\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Grid View -->\r
  <div *ngIf="!loading && viewMode === 'grid'">\r
    <div *ngIf="users.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">\r
      <div *ngFor="let user of users" class="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6">\r
        <div class="flex items-start justify-between mb-4">\r
          <div class="flex items-center gap-3">\r
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">\r
              {{ user.first_name.charAt(0) }}{{ user.last_name.charAt(0) }}\r
            </div>\r
            <div>\r
              <h3 class="text-sm font-semibold text-gray-900">{{ user.first_name }} {{ user.last_name }}</h3>\r
              <p class="text-xs text-gray-500">{{ user.email }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="space-y-2 mb-4">\r
          <div class="flex items-center justify-between">\r
            <span class="text-xs text-gray-500">Type:</span>\r
            <span class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">\r
              {{ user.user_type }}\r
            </span>\r
          </div>\r
          <div class="flex items-center justify-between">\r
            <span class="text-xs text-gray-500">Company:</span>\r
            <span class="text-xs font-medium text-gray-900">{{ user.company?.name || 'N/A' }}</span>\r
          </div>\r
          <div class="flex items-center justify-between">\r
            <span class="text-xs text-gray-500">Status:</span>\r
            <span [class]="user.active ? 'px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800' : 'px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800'">\r
              {{ user.active ? 'Active' : 'Inactive' }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <div class="flex gap-2 pt-4 border-t border-gray-200">\r
          <button\r
            (click)="viewUser(user)"\r
            class="flex-1 px-3 py-2 text-xs font-medium text-blue-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">\r
            View\r
          </button>\r
          <button\r
            (click)="toggleUserStatus(user)"\r
            [class]="user.active ? 'flex-1 px-3 py-2 text-xs font-medium text-orange-600 hover:text-orange-900 hover:bg-orange-50 rounded-lg cursor-pointer transition-colors' : 'flex-1 px-3 py-2 text-xs font-medium text-green-600 hover:text-green-900 hover:bg-green-50 rounded-lg cursor-pointer transition-colors'">\r
            {{ user.active ? 'Suspend' : 'Activate' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="users.length === 0" class="bg-white rounded-lg shadow p-6 text-center text-gray-500">\r
      No users found.\r
    </div>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div *ngIf="!loading && total > 0" class="mt-4 flex items-center justify-between">\r
    <div class="text-sm text-gray-700">\r
      Showing {{ ((currentPage - 1) * perPage) + 1 }} to {{ Math.min(currentPage * perPage, total) }} of {{ total }} users\r
    </div>\r
    <div class="flex gap-2">\r
      <button\r
        (click)="onPageChange(currentPage - 1)"\r
        [disabled]="currentPage === 1"\r
        class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer">\r
        Previous\r
      </button>\r
      <button\r
        (click)="onPageChange(currentPage + 1)"\r
        [disabled]="currentPage === lastPage"\r
        class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer">\r
        Next\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Suspend/Activate Confirmation Modal -->\r
  <app-suspend-activate-confirmation-modal\r
    [isOpen]="showConfirmModal"\r
    [isActive]="selectedUser?.active ?? true"\r
    [userName]="selectedUser ? (selectedUser.first_name + ' ' + selectedUser.last_name) : ''"\r
    [isLoading]="confirmModalLoading"\r
    (closeModal)="onCloseConfirmModal()"\r
    (confirmAction)="onConfirmStatusChange($event)">\r
  </app-suspend-activate-confirmation-modal>\r
</div>\r
` }]
  }], () => [{ type: AdminUsersService }, { type: Router }, { type: ToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/admin/pages/admin-users/admin-users.component.ts", lineNumber: 18 });
})();

// src/app/admin/pages/admin-users/user-details/user-details.component.ts
function UserDetailsComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function UserDetailsComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUserStatus());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.user.active ? "px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 cursor-pointer" : "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.active ? "Suspend User" : "Activate User", " ");
  }
}
function UserDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " Loading user details... ");
    \u0275\u0275elementEnd();
  }
}
function UserDetailsComponent_div_11_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Avatar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.user.avatar, \u0275\u0275sanitizeUrl);
  }
}
function UserDetailsComponent_div_11_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Hourly Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", ctx_r1.user.hourly_rate, "");
  }
}
function UserDetailsComponent_div_11_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("User ID: ", ctx_r1.user.created_by, "");
  }
}
function UserDetailsComponent_div_11_div_42_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.company.phone);
  }
}
function UserDetailsComponent_div_11_div_42_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.company.email);
  }
}
function UserDetailsComponent_div_11_div_42_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.company.address);
  }
}
function UserDetailsComponent_div_11_div_42_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Business Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.company.business_type);
  }
}
function UserDetailsComponent_div_11_div_42_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.company.industry);
  }
}
function UserDetailsComponent_div_11_div_42_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.company.currency);
  }
}
function UserDetailsComponent_div_11_div_42_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Subscription Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20)(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.company.subscription_status, " ");
  }
}
function UserDetailsComponent_div_11_div_42_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 18);
    \u0275\u0275text(2, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.company.slug);
  }
}
function UserDetailsComponent_div_11_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h2", 16);
    \u0275\u0275text(3, "Company Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 0)(5, "div", 17)(6, "div")(7, "label", 18);
    \u0275\u0275text(8, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, UserDetailsComponent_div_11_div_42_div_11_Template, 5, 1, "div", 22)(12, UserDetailsComponent_div_11_div_42_div_12_Template, 5, 1, "div", 22)(13, UserDetailsComponent_div_11_div_42_div_13_Template, 5, 1, "div", 22)(14, UserDetailsComponent_div_11_div_42_div_14_Template, 5, 1, "div", 22)(15, UserDetailsComponent_div_11_div_42_div_15_Template, 5, 1, "div", 22)(16, UserDetailsComponent_div_11_div_42_div_16_Template, 5, 1, "div", 22)(17, UserDetailsComponent_div_11_div_42_div_17_Template, 6, 1, "div", 22)(18, UserDetailsComponent_div_11_div_42_div_18_Template, 5, 1, "div", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.user.company.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company.business_type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company.industry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company.currency);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company.subscription_status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company.slug);
  }
}
function UserDetailsComponent_div_11_div_43_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r3.name, " ");
  }
}
function UserDetailsComponent_div_11_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h2", 16);
    \u0275\u0275text(3, "Roles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 0)(5, "div", 28);
    \u0275\u0275template(6, UserDetailsComponent_div_11_div_43_span_6_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.user.roles);
  }
}
function UserDetailsComponent_div_11_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Loading teams... ");
    \u0275\u0275elementEnd();
  }
}
function UserDetailsComponent_div_11_div_50_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38)(2, "div", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 38)(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 38)(8, "div", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 38)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 38)(14, "div", 40);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const team_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", team_r4.first_name, " ", team_r4.last_name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r4.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getRoleName(team_r4));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(team_r4.active ? "px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800" : "px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", team_r4.active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(team_r4.created_at));
  }
}
function UserDetailsComponent_div_11_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "table", 33)(2, "thead", 34)(3, "tr")(4, "th", 35);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 35);
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 35);
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 35);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 35);
    \u0275\u0275text(13, "Created");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody", 36);
    \u0275\u0275template(15, UserDetailsComponent_div_11_div_50_tr_15_Template, 16, 8, "tr", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.teams);
  }
}
function UserDetailsComponent_div_11_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " No teams created by this user. ");
    \u0275\u0275elementEnd();
  }
}
function UserDetailsComponent_div_11_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "button", 45);
    \u0275\u0275listener("click", function UserDetailsComponent_div_11_div_52_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTeamsPageChange(ctx_r1.teamsCurrentPage - 1));
    });
    \u0275\u0275text(5, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 45);
    \u0275\u0275listener("click", function UserDetailsComponent_div_11_div_52_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTeamsPageChange(ctx_r1.teamsCurrentPage + 1));
    });
    \u0275\u0275text(7, " Next ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Showing ", (ctx_r1.teamsCurrentPage - 1) * ctx_r1.teamsPerPage + 1, " to ", ctx_r1.Math.min(ctx_r1.teamsCurrentPage * ctx_r1.teamsPerPage, ctx_r1.teamsTotal), " of ", ctx_r1.teamsTotal, " teams ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.teamsCurrentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.teamsCurrentPage === ctx_r1.teamsLastPage);
  }
}
function UserDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "h2", 16);
    \u0275\u0275text(4, "User Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 0)(6, "div", 17)(7, "div")(8, "label", 18);
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 18);
    \u0275\u0275text(14, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 20);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 18);
    \u0275\u0275text(19, "User Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 20)(21, "span", 21);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div")(24, "label", 18);
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 20)(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, UserDetailsComponent_div_11_div_29_Template, 4, 1, "div", 22)(30, UserDetailsComponent_div_11_div_30_Template, 5, 1, "div", 22);
    \u0275\u0275elementStart(31, "div")(32, "label", 18);
    \u0275\u0275text(33, "Created Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 20);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "label", 18);
    \u0275\u0275text(38, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 20);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, UserDetailsComponent_div_11_div_41_Template, 5, 1, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(42, UserDetailsComponent_div_11_div_42_Template, 19, 9, "div", 23)(43, UserDetailsComponent_div_11_div_43_Template, 7, 1, "div", 23);
    \u0275\u0275elementStart(44, "div", 14)(45, "div", 15)(46, "h2", 16);
    \u0275\u0275text(47, "Teams Created by User");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 0);
    \u0275\u0275template(49, UserDetailsComponent_div_11_div_49_Template, 2, 0, "div", 24)(50, UserDetailsComponent_div_11_div_50_Template, 16, 1, "div", 25)(51, UserDetailsComponent_div_11_div_51_Template, 2, 0, "div", 24)(52, UserDetailsComponent_div_11_div_52_Template, 8, 5, "div", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate2("", ctx_r1.user.first_name, " ", ctx_r1.user.last_name, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.user_type, " ");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.user.active ? "px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800" : "px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.active ? "Active" : "Inactive", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.avatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.hourly_rate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.user.created_at));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.user.updated_at));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.created_by);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.roles && ctx_r1.user.roles.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.teamsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.teamsLoading && ctx_r1.teams.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.teamsLoading && ctx_r1.teams.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.teamsLoading && ctx_r1.teamsTotal > 0);
  }
}
var UserDetailsComponent = class _UserDetailsComponent {
  route;
  router;
  adminUsersService;
  toastService;
  user = null;
  loading = false;
  userId = null;
  // Teams pagination
  teams = [];
  teamsLoading = false;
  teamsCurrentPage = 1;
  teamsPerPage = 15;
  teamsTotal = 0;
  teamsLastPage = 1;
  // Confirmation modal
  showConfirmModal = false;
  confirmModalLoading = false;
  constructor(route, router, adminUsersService, toastService) {
    this.route = route;
    this.router = router;
    this.adminUsersService = adminUsersService;
    this.toastService = toastService;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = +params["id"];
      if (this.userId) {
        this.loadUserDetails();
        this.loadTeams();
      }
    });
  }
  loadUserDetails() {
    if (!this.userId)
      return;
    this.loading = true;
    this.adminUsersService.getUser(this.userId).subscribe({
      next: (response) => {
        if (response.success) {
          this.user = response.data.user;
        }
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.toastService.error("Failed to load user details");
        console.error(error);
      }
    });
  }
  loadTeams(page = 1) {
    if (!this.userId)
      return;
    this.teamsLoading = true;
    this.teamsCurrentPage = page;
    this.adminUsersService.getCreatedTeams(this.userId, {
      page: this.teamsCurrentPage,
      per_page: this.teamsPerPage,
      sort_by: "created_at",
      sort_dir: "desc"
    }).subscribe({
      next: (response) => {
        if (response.success) {
          this.teams = response.data.teams;
          this.teamsTotal = response.data.pagination.total;
          this.teamsLastPage = response.data.pagination.last_page;
          this.teamsCurrentPage = response.data.pagination.current_page;
        }
        this.teamsLoading = false;
      },
      error: () => {
        this.teamsLoading = false;
      }
    });
  }
  onTeamsPageChange(page) {
    this.loadTeams(page);
  }
  formatDate(dateString) {
    if (!dateString)
      return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  getRoleName(teamMember) {
    if (teamMember.roles && teamMember.roles.length > 0) {
      return teamMember.roles[0].name;
    }
    return "N/A";
  }
  toggleUserStatus() {
    if (!this.user)
      return;
    this.showConfirmModal = true;
  }
  onConfirmStatusChange(newStatus) {
    if (!this.user || !this.userId)
      return;
    this.confirmModalLoading = true;
    this.adminUsersService.updateUser(this.userId, { active: newStatus }).subscribe({
      next: () => {
        if (this.user) {
          this.user.active = newStatus;
        }
        this.showConfirmModal = false;
        this.confirmModalLoading = false;
        this.toastService.success(`User ${newStatus ? "activated" : "suspended"} successfully`);
      },
      error: (error) => {
        this.confirmModalLoading = false;
        this.toastService.error(`Failed to ${newStatus ? "activate" : "suspend"} user`);
        console.error(error);
      }
    });
  }
  onCloseConfirmModal() {
    this.showConfirmModal = false;
  }
  goBack() {
    this.router.navigate(["/admin/users"]);
  }
  Math = Math;
  static \u0275fac = function UserDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminUsersService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDetailsComponent, selectors: [["app-user-details"]], decls: 13, vars: 7, consts: [[1, "p-6"], [1, "mb-6", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4"], [1, "px-4", "py-2", "text-gray-600", "hover:text-gray-800", "flex", "items-center", "gap-2", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "text-2xl", "font-bold", "text-gray-900"], [3, "class", "click", 4, "ngIf"], ["class", "bg-white rounded-lg shadow p-6 text-center text-gray-500", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], [3, "closeModal", "confirmAction", "isOpen", "isActive", "userName", "isLoading"], [3, "click"], [1, "bg-white", "rounded-lg", "shadow", "p-6", "text-center", "text-gray-500"], [1, "space-y-6"], [1, "bg-white", "rounded-lg", "shadow", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-gray-200"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "grid", "grid-cols-2", "gap-6"], [1, "block", "text-sm", "font-medium", "text-gray-500", "mb-1"], [1, "text-gray-900", "font-medium"], [1, "text-gray-900"], [1, "px-2", "py-1", "text-xs", "font-semibold", "rounded-full", "bg-blue-100", "text-blue-800"], [4, "ngIf"], ["class", "bg-white rounded-lg shadow overflow-hidden", 4, "ngIf"], ["class", "text-center py-8 text-gray-500", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "mt-4 flex items-center justify-between", 4, "ngIf"], ["alt", "User Avatar", 1, "w-16", "h-16", "rounded-full", "object-cover", 3, "src"], [1, "flex", "flex-wrap", "gap-2"], ["class", "px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800", 4, "ngFor", "ngForOf"], [1, "px-3", "py-1", "text-sm", "font-medium", "rounded-full", "bg-purple-100", "text-purple-800"], [1, "text-center", "py-8", "text-gray-500"], [1, "overflow-x-auto"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "bg-gray-50"], [1, "px-4", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase"], [1, "bg-white", "divide-y", "divide-gray-200"], [4, "ngFor", "ngForOf"], [1, "px-4", "py-3", "whitespace-nowrap"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-500"], [1, "text-sm", "text-gray-900"], [1, "mt-4", "flex", "items-center", "justify-between"], [1, "text-sm", "text-gray-700"], [1, "flex", "gap-2"], [1, "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "disabled:opacity-50", "disabled:cursor-not-allowed", "hover:bg-gray-50", "cursor-pointer", 3, "click", "disabled"]], template: function UserDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function UserDetailsComponent_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Back to Users ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, "User Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, UserDetailsComponent_button_9_Template, 2, 3, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, UserDetailsComponent_div_10_Template, 2, 0, "div", 8)(11, UserDetailsComponent_div_11_Template, 53, 18, "div", 9);
      \u0275\u0275elementStart(12, "app-suspend-activate-confirmation-modal", 10);
      \u0275\u0275listener("closeModal", function UserDetailsComponent_Template_app_suspend_activate_confirmation_modal_closeModal_12_listener() {
        return ctx.onCloseConfirmModal();
      })("confirmAction", function UserDetailsComponent_Template_app_suspend_activate_confirmation_modal_confirmAction_12_listener($event) {
        return ctx.onConfirmStatusChange($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.user);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.user);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showConfirmModal)("isActive", (tmp_4_0 = ctx.user == null ? null : ctx.user.active) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : true)("userName", ctx.user ? ctx.user.first_name + " " + ctx.user.last_name : "")("isLoading", ctx.confirmModalLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SuspendActivateConfirmationModalComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-user-details", standalone: true, imports: [CommonModule, SuspendActivateConfirmationModalComponent], template: `<div class="p-6">\r
  <!-- Header with Back Button -->\r
  <div class="mb-6 flex items-center justify-between">\r
    <div class="flex items-center gap-4">\r
      <button\r
        (click)="goBack()"\r
        class="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2 cursor-pointer">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>\r
        </svg>\r
        Back to Users\r
      </button>\r
      <h1 class="text-2xl font-bold text-gray-900">User Details</h1>\r
    </div>\r
    <button\r
      *ngIf="user"\r
      (click)="toggleUserStatus()"\r
      [class]="user.active ? 'px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 cursor-pointer' : 'px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer'">\r
      {{ user.active ? 'Suspend User' : 'Activate User' }}\r
    </button>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="bg-white rounded-lg shadow p-6 text-center text-gray-500">\r
    Loading user details...\r
  </div>\r
\r
  <!-- User Details -->\r
  <div *ngIf="!loading && user" class="space-y-6">\r
    <!-- User Information Card -->\r
    <div class="bg-white rounded-lg shadow overflow-hidden">\r
      <div class="px-6 py-4 border-b border-gray-200">\r
        <h2 class="text-xl font-semibold text-gray-900">User Information</h2>\r
      </div>\r
      <div class="p-6">\r
        <div class="grid grid-cols-2 gap-6">\r
          <div>\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Name</label>\r
            <p class="text-gray-900 font-medium">{{ user.first_name }} {{ user.last_name }}</p>\r
          </div>\r
          <div>\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Email</label>\r
            <p class="text-gray-900">{{ user.email }}</p>\r
          </div>\r
          <div>\r
            <label class="block text-sm font-medium text-gray-500 mb-1">User Type</label>\r
            <p class="text-gray-900">\r
              <span class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">\r
                {{ user.user_type }}\r
              </span>\r
            </p>\r
          </div>\r
          <div>\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Status</label>\r
            <p class="text-gray-900">\r
              <span [class]="user.active ? 'px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800' : 'px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800'">\r
                {{ user.active ? 'Active' : 'Inactive' }}\r
              </span>\r
            </p>\r
          </div>\r
          <div *ngIf="user.avatar">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Avatar</label>\r
            <img [src]="user.avatar" alt="User Avatar" class="w-16 h-16 rounded-full object-cover">\r
          </div>\r
          <div *ngIf="user.hourly_rate">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Hourly Rate</label>\r
            <p class="text-gray-900">\${{ user.hourly_rate }}</p>\r
          </div>\r
          <div>\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Created Date</label>\r
            <p class="text-gray-900">{{ formatDate(user.created_at) }}</p>\r
          </div>\r
          <div>\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Last Updated</label>\r
            <p class="text-gray-900">{{ formatDate(user.updated_at) }}</p>\r
          </div>\r
          <div *ngIf="user.created_by">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Created By</label>\r
            <p class="text-gray-900">User ID: {{ user.created_by }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Company Information Card -->\r
    <div *ngIf="user.company" class="bg-white rounded-lg shadow overflow-hidden">\r
      <div class="px-6 py-4 border-b border-gray-200">\r
        <h2 class="text-xl font-semibold text-gray-900">Company Information</h2>\r
      </div>\r
      <div class="p-6">\r
        <div class="grid grid-cols-2 gap-6">\r
          <div>\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Company Name</label>\r
            <p class="text-gray-900">{{ user.company.name }}</p>\r
          </div>\r
          <div *ngIf="user.company.phone">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Phone</label>\r
            <p class="text-gray-900">{{ user.company.phone }}</p>\r
          </div>\r
          <div *ngIf="user.company.email">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Email</label>\r
            <p class="text-gray-900">{{ user.company.email }}</p>\r
          </div>\r
          <div *ngIf="user.company.address">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Address</label>\r
            <p class="text-gray-900">{{ user.company.address }}</p>\r
          </div>\r
          <div *ngIf="user.company.business_type">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Business Type</label>\r
            <p class="text-gray-900">{{ user.company.business_type }}</p>\r
          </div>\r
          <div *ngIf="user.company.industry">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Industry</label>\r
            <p class="text-gray-900">{{ user.company.industry }}</p>\r
          </div>\r
          <div *ngIf="user.company.currency">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Currency</label>\r
            <p class="text-gray-900">{{ user.company.currency }}</p>\r
          </div>\r
          <div *ngIf="user.company.subscription_status">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Subscription Status</label>\r
            <p class="text-gray-900">\r
              <span class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">\r
                {{ user.company.subscription_status }}\r
              </span>\r
            </p>\r
          </div>\r
          <div *ngIf="user.company.slug">\r
            <label class="block text-sm font-medium text-gray-500 mb-1">Slug</label>\r
            <p class="text-gray-900">{{ user.company.slug }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Roles Information Card -->\r
    <div *ngIf="user.roles && user.roles.length > 0" class="bg-white rounded-lg shadow overflow-hidden">\r
      <div class="px-6 py-4 border-b border-gray-200">\r
        <h2 class="text-xl font-semibold text-gray-900">Roles</h2>\r
      </div>\r
      <div class="p-6">\r
        <div class="flex flex-wrap gap-2">\r
          <span *ngFor="let role of user.roles" class="px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800">\r
            {{ role.name }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Teams Created by User Card -->\r
    <div class="bg-white rounded-lg shadow overflow-hidden">\r
      <div class="px-6 py-4 border-b border-gray-200">\r
        <h2 class="text-xl font-semibold text-gray-900">Teams Created by User</h2>\r
      </div>\r
      <div class="p-6">\r
        <!-- Teams Loading State -->\r
        <div *ngIf="teamsLoading" class="text-center py-8 text-gray-500">\r
          Loading teams...\r
        </div>\r
\r
        <!-- Teams Table -->\r
        <div *ngIf="!teamsLoading && teams.length > 0" class="overflow-x-auto">\r
          <table class="min-w-full divide-y divide-gray-200">\r
            <thead class="bg-gray-50">\r
              <tr>\r
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>\r
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>\r
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>\r
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>\r
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>\r
              </tr>\r
            </thead>\r
            <tbody class="bg-white divide-y divide-gray-200">\r
              <tr *ngFor="let team of teams">\r
                <td class="px-4 py-3 whitespace-nowrap">\r
                  <div class="text-sm font-medium text-gray-900">{{ team.first_name }} {{ team.last_name }}</div>\r
                </td>\r
                <td class="px-4 py-3 whitespace-nowrap">\r
                  <div class="text-sm text-gray-500">{{ team.email }}</div>\r
                </td>\r
                <td class="px-4 py-3 whitespace-nowrap">\r
                  <div class="text-sm text-gray-900">{{ getRoleName(team) }}</div>\r
                </td>\r
                <td class="px-4 py-3 whitespace-nowrap">\r
                  <span [class]="team.active ? 'px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800' : 'px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800'">\r
                    {{ team.active ? 'Active' : 'Inactive' }}\r
                  </span>\r
                </td>\r
                <td class="px-4 py-3 whitespace-nowrap">\r
                  <div class="text-sm text-gray-500">{{ formatDate(team.created_at) }}</div>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <!-- Empty State -->\r
        <div *ngIf="!teamsLoading && teams.length === 0" class="text-center py-8 text-gray-500">\r
          No teams created by this user.\r
        </div>\r
\r
        <!-- Pagination -->\r
        <div *ngIf="!teamsLoading && teamsTotal > 0" class="mt-4 flex items-center justify-between">\r
          <div class="text-sm text-gray-700">\r
            Showing {{ ((teamsCurrentPage - 1) * teamsPerPage) + 1 }} to {{ Math.min(teamsCurrentPage * teamsPerPage, teamsTotal) }} of {{ teamsTotal }} teams\r
          </div>\r
          <div class="flex gap-2">\r
            <button\r
              (click)="onTeamsPageChange(teamsCurrentPage - 1)"\r
              [disabled]="teamsCurrentPage === 1"\r
              class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer">\r
              Previous\r
            </button>\r
            <button\r
              (click)="onTeamsPageChange(teamsCurrentPage + 1)"\r
              [disabled]="teamsCurrentPage === teamsLastPage"\r
              class="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer">\r
              Next\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Suspend/Activate Confirmation Modal -->\r
  <app-suspend-activate-confirmation-modal\r
    [isOpen]="showConfirmModal"\r
    [isActive]="user?.active ?? true"\r
    [userName]="user ? (user.first_name + ' ' + user.last_name) : ''"\r
    [isLoading]="confirmModalLoading"\r
    (closeModal)="onCloseConfirmModal()"\r
    (confirmAction)="onConfirmStatusChange($event)">\r
  </app-suspend-activate-confirmation-modal>\r
</div>\r
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AdminUsersService }, { type: ToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDetailsComponent, { className: "UserDetailsComponent", filePath: "src/app/admin/pages/admin-users/user-details/user-details.component.ts", lineNumber: 15 });
})();

// src/app/admin/guards/admin-auth.guard.ts
var AdminAuthGuard = class _AdminAuthGuard {
  router;
  adminAuthService;
  constructor(router, adminAuthService) {
    this.router = router;
    this.adminAuthService = adminAuthService;
  }
  canActivate() {
    const isAuthenticated = this.adminAuthService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(["/admin/login"]);
      return false;
    }
    return true;
  }
  static \u0275fac = function AdminAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(AdminAuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAuthGuard, factory: _AdminAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: AdminAuthService }], null);
})();

// src/app/admin/admin-routing.module.ts
var routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: AdminLoginComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: "dashboard",
        component: AdminDashboardComponent
      },
      {
        path: "users",
        component: AdminUsersComponent
      },
      {
        path: "users/:id",
        component: UserDetailsComponent
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  }
];
var AdminRoutingModule = class _AdminRoutingModule {
  static \u0275fac = function AdminRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/admin/admin.module.ts
var AdminModule = class _AdminModule {
  static \u0275fac = function AdminModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AdminRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        AdminRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AdminModule
};
//# sourceMappingURL=chunk-3NQ2LILK.js.map
