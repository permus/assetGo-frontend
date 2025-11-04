import {
  CurrencyService,
  SettingsService
} from "./chunk-RPSM5X2G.js";
import {
  PreferencesService
} from "./chunk-3QBMOR5J.js";
import {
  AuthService
} from "./chunk-BGMQUXYP.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-ISERUI2H.js";
import "./chunk-OR4RIGW3.js";
import {
  Router
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/login/login.component.ts
function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.sessionMessage);
  }
}
function LoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 41);
    \u0275\u0275element(3, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 43)(5, "p", 44);
    \u0275\u0275text(6, "Account Temporarily Locked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 46)(10, "div", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 48);
    \u0275\u0275text(13, "minute(s) remaining");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getLockoutMinutes());
  }
}
function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "p", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function LoginComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getEmailErrorMessage(), " ");
  }
}
function LoginComponent__svg_svg_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 53)(2, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 55);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPasswordErrorMessage(), " ");
  }
}
function LoginComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "circle", 58)(3, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Signing In... ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  router;
  authService;
  loginForm;
  isLoading = false;
  errorMessage = "";
  isLocked = false;
  lockoutTime = 0;
  lockoutCountdown = 0;
  lockoutInterval;
  showPassword = false;
  sessionMessage = "";
  currencyService = inject(CurrencyService);
  preferencesService = inject(PreferencesService);
  settingsService = inject(SettingsService);
  constructor(fb, router, authService) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]]
    });
    const message = localStorage.getItem("session_message");
    if (message) {
      this.sessionMessage = message;
      localStorage.removeItem("session_message");
      setTimeout(() => {
        this.sessionMessage = "";
      }, 5e3);
    }
  }
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(["/dashboard"]);
    }
  }
  toggleMode() {
    this.router.navigate(["/register"]);
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        this.loginForm.get(key)?.markAsTouched();
      });
      return;
    }
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.authService.initializeAppServices(this.currencyService, this.preferencesService, this.settingsService);
            this.router.navigate(["/dashboard"]);
          } else {
            this.errorMessage = response.message || "Login failed";
          }
          this.isLoading = false;
        },
        error: (error) => {
          const errorResponse = error.error;
          if (error.status === 429) {
            this.isLocked = true;
            this.errorMessage = errorResponse?.message || "Too many login attempts. Please try again later.";
            if (errorResponse?.retry_after) {
              this.lockoutCountdown = errorResponse.retry_after;
              this.startLockoutTimer();
            }
          } else if (error.status === 403) {
            this.errorMessage = errorResponse?.message || "Access forbidden";
          } else {
            this.errorMessage = errorResponse?.message || "An error occurred during login";
          }
          this.isLoading = false;
        }
      });
    }
  }
  startLockoutTimer() {
    if (this.lockoutInterval) {
      clearInterval(this.lockoutInterval);
    }
    this.lockoutInterval = setInterval(() => {
      this.lockoutCountdown--;
      if (this.lockoutCountdown <= 0) {
        clearInterval(this.lockoutInterval);
        this.isLocked = false;
        this.errorMessage = "";
        this.lockoutCountdown = 0;
      }
    }, 1e3);
  }
  getLockoutMinutes() {
    return Math.ceil(this.lockoutCountdown / 60);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  goToForgotPassword() {
    this.router.navigate(["/forgot-password"]);
  }
  getEmailErrorMessage() {
    const emailControl = this.loginForm.get("email");
    if (emailControl?.hasError("required") && emailControl?.touched) {
      return "Email is required";
    }
    if (emailControl?.hasError("email") && emailControl?.touched) {
      return "Please provide a valid email address";
    }
    return "";
  }
  getPasswordErrorMessage() {
    const passwordControl = this.loginForm.get("password");
    if (passwordControl?.hasError("required") && passwordControl?.touched) {
      return "Password is required";
    }
    if (passwordControl?.hasError("minlength") && passwordControl?.touched) {
      return "Password must be at least 8 characters long";
    }
    if (passwordControl?.hasError("pattern") && passwordControl?.touched) {
      return "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }
    return "";
  }
  ngOnDestroy() {
    if (this.lockoutInterval) {
      clearInterval(this.lockoutInterval);
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 60, vars: 17, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], [1, "flex", "mb-8", "bg-gray-100", "rounded-lg", "p-1"], ["type", "button", 1, "flex-1", "py-2", "px-4", "text-center", "font-medium", "rounded-md", "bg-blue-600", "text-white", "transition-all", "cursor-pointer"], ["type", "button", 1, "flex-1", "py-2", "px-4", "text-center", "font-medium", "rounded-md", "text-gray-600", "hover:text-gray-800", "transition-all", "cursor-pointer", 3, "click"], ["class", "mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg", 4, "ngIf"], ["class", "mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg", 4, "ngIf"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "space-y-6"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["class", "text-red-500 text-xs mt-1", 4, "ngIf"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "relative"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", "required", "", 1, "w-full", "px-4", "py-3", "pr-10", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400", 3, "type"], ["type", "button", 1, "absolute", "inset-y-0", "right-0", "pr-3", "flex", "items-center", "cursor-pointer", "text-gray-400", "hover:text-gray-600", 3, "click"], ["class", "h-5 w-5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-left"], ["type", "button", 1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "flex", "justify-center", "space-x-12", "text-sm", "text-gray-500", "mt-8"], [1, "flex", "flex-col", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-600", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"], [1, "mb-4", "p-3", "bg-blue-50", "border", "border-blue-200", "rounded-lg"], [1, "text-blue-800", "text-sm"], [1, "mb-4", "p-4", "bg-orange-50", "border", "border-orange-200", "rounded-lg"], [1, "flex", "items-start"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-orange-600", "mt-0.5", "mr-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], [1, "flex-1"], [1, "text-orange-800", "text-sm", "font-medium"], [1, "text-orange-700", "text-sm", "mt-1"], [1, "mt-2", "flex", "items-center", "space-x-2"], [1, "text-orange-900", "font-bold", "text-lg"], [1, "text-orange-700", "text-sm"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [1, "text-red-500", "text-xs", "mt-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Enterprise Asset Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2", 9);
      \u0275\u0275text(11, "Welcome");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 6);
      \u0275\u0275text(13, "Sign in to your account or create a new one");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
      \u0275\u0275text(16, " Sign In ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 12);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_17_listener() {
        return ctx.toggleMode();
      });
      \u0275\u0275text(18, " Sign Up ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, LoginComponent_div_19_Template, 3, 1, "div", 13)(20, LoginComponent_div_20_Template, 14, 2, "div", 14)(21, LoginComponent_div_21_Template, 3, 1, "div", 15);
      \u0275\u0275elementStart(22, "form", 16);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_22_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(23, "div", 17)(24, "div")(25, "label", 18);
      \u0275\u0275text(26, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 19);
      \u0275\u0275template(28, LoginComponent_div_28_Template, 2, 1, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "label", 21);
      \u0275\u0275text(31, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 22);
      \u0275\u0275element(33, "input", 23);
      \u0275\u0275elementStart(34, "button", 24);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_34_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275template(35, LoginComponent__svg_svg_35_Template, 3, 0, "svg", 25)(36, LoginComponent__svg_svg_36_Template, 2, 0, "svg", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(37, LoginComponent_div_37_Template, 2, 1, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 26)(39, "button", 27);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_39_listener() {
        return ctx.goToForgotPassword();
      });
      \u0275\u0275text(40, " Forgot password? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "button", 28);
      \u0275\u0275template(42, LoginComponent_span_42_Template, 2, 0, "span", 29)(43, LoginComponent_span_43_Template, 5, 0, "span", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 31)(45, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 33);
      \u0275\u0275element(47, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "Secure");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(51, "svg", 33);
      \u0275\u0275element(52, "path", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Enterprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 33);
      \u0275\u0275element(57, "path", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "Multi-tenant");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_7_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("src", "images/logo.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.sessionMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLocked && ctx.lockoutCountdown > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.isLocked);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-300", ((tmp_5_0 = ctx.loginForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.loginForm.get("email")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getEmailErrorMessage());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-300", ((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.touched));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getPasswordErrorMessage());
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading || ctx.isLocked);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      NgIf,
      ReactiveFormsModule
    ], template: `<!-- Login Component HTML -->\r
<div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">\r
  <div class="max-w-md w-full space-y-8">\r
    <!-- Logo -->\r
    <div class="text-center">\r
      <div class="flex justify-center mb-6">\r
        <div class="flex items-center space-x-3">\r
          <img [src]="'images/logo.png'" alt="AssetGo Logo" class="h-20 w-auto">\r
        </div>\r
      </div>\r
      <p class="text-gray-600">Enterprise Asset Management System</p>\r
    </div>\r
\r
    <!-- Auth Card -->\r
    <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
      <div class="text-center mb-8">\r
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Welcome</h2>\r
        <p class="text-gray-600">Sign in to your account or create a new one</p>\r
      </div>\r
\r
      <!-- Tab Buttons -->\r
      <div class="flex mb-8 bg-gray-100 rounded-lg p-1">\r
        <button \r
          class="flex-1 py-2 px-4 text-center font-medium rounded-md bg-blue-600 text-white transition-all cursor-pointer"\r
          type="button">\r
          Sign In\r
        </button>\r
        <button \r
          class="flex-1 py-2 px-4 text-center font-medium rounded-md text-gray-600 hover:text-gray-800 transition-all cursor-pointer"\r
          type="button"\r
          (click)="toggleMode()">\r
          Sign Up\r
        </button>\r
      </div>\r
\r
      <!-- Session Expired Message -->\r
      <div *ngIf="sessionMessage" class="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">\r
        <p class="text-blue-800 text-sm">{{ sessionMessage }}</p>\r
      </div>\r
\r
\r
      <!-- Lockout Message -->\r
      <div *ngIf="isLocked && lockoutCountdown > 0" class="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">\r
        <div class="flex items-start">\r
          <svg class="w-5 h-5 text-orange-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>\r
          </svg>\r
          <div class="flex-1">\r
            <p class="text-orange-800 text-sm font-medium">Account Temporarily Locked</p>\r
            <p class="text-orange-700 text-sm mt-1">{{ errorMessage }}</p>\r
            <div class="mt-2 flex items-center space-x-2">\r
              <div class="text-orange-900 font-bold text-lg">{{ getLockoutMinutes() }}</div>\r
              <span class="text-orange-700 text-sm">minute(s) remaining</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div *ngIf="errorMessage && !isLocked" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
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
            <div *ngIf="getEmailErrorMessage()" class="text-red-500 text-xs mt-1">\r
              {{ getEmailErrorMessage() }}\r
            </div>\r
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
            <div *ngIf="getPasswordErrorMessage()" class="text-red-500 text-xs mt-1">\r
              {{ getPasswordErrorMessage() }}\r
            </div>\r
          </div>\r
\r
          <div class="text-left">\r
            <button type="button" (click)="goToForgotPassword()" class="text-blue-600 hover:text-blue-500 text-sm font-medium cursor-pointer">\r
              Forgot password?\r
            </button>\r
          </div>\r
\r
          <button\r
            type="submit"\r
            [disabled]="loginForm.invalid || isLoading || isLocked"\r
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
\r
    <!-- Trust Indicators -->\r
    <div class="flex justify-center space-x-12 text-sm text-gray-500 mt-8">\r
      <div class="flex flex-col items-center">\r
        <svg class="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>\r
        </svg>\r
        <span>Secure</span>\r
      </div>\r
      <div class="flex flex-col items-center">\r
        <svg class="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
        </svg>\r
        <span>Enterprise</span>\r
      </div>\r
      <div class="flex flex-col items-center">\r
        <svg class="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>\r
        </svg>\r
        <span>Multi-tenant</span>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 21 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-CJDTKOXN.js.map
