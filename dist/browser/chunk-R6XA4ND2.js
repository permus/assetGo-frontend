import {
  AuthService
} from "./chunk-ORU7ONSE.js";
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
} from "./chunk-MQFZXT5S.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-ANYYK4S4.js";
import "./chunk-5YESG6NV.js";
import "./chunk-TS6BXV7E.js";
import {
  CommonModule,
  Component,
  NgIf,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BHMN65X2.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/login/login.component.ts
function LoginComponent_div_19_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function LoginComponent_div_19_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resendVerification());
    });
    \u0275\u0275text(1, " Resend verification email ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LoginComponent_div_19_button_3_Template, 2, 1, "button", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.emailVerificationMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showResendVerification);
  }
}
function LoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "p", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function LoginComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 39);
    \u0275\u0275element(2, "circle", 40)(3, "path", 41);
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
  emailVerificationMessage = "";
  showResendVerification = false;
  userId = null;
  constructor(fb, router, authService) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  toggleMode() {
    this.router.navigate(["/register"]);
  }
  onSubmit() {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.emailVerificationMessage = "";
      this.showResendVerification = false;
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(["/dashboard"]);
          } else {
            this.errorMessage = response.message || "Login failed";
            if (response.email_verified === false) {
              this.emailVerificationMessage = response.message;
              this.showResendVerification = true;
              this.userId = response.user_id || null;
            }
          }
          this.isLoading = false;
        },
        error: (error) => {
          const errorResponse = error.error;
          this.errorMessage = errorResponse?.message || "An error occurred during login";
          if (errorResponse?.email_verified === false) {
            this.emailVerificationMessage = errorResponse.message;
            this.showResendVerification = true;
            this.userId = errorResponse.user_id || null;
          }
          this.isLoading = false;
        }
      });
    }
  }
  resendVerification() {
    if (!this.loginForm.get("email")?.value) {
      this.errorMessage = "Please enter your email address";
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.resendVerification({ email: this.loginForm.get("email")?.value }).subscribe({
      next: (response) => {
        if (response.success) {
          this.emailVerificationMessage = response.message;
          this.showResendVerification = false;
        } else {
          this.errorMessage = response.message || "Failed to resend verification email";
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || "Failed to resend verification email";
        this.isLoading = false;
      }
    });
  }
  goToForgotPassword() {
    this.router.navigate(["/auth/forgot-password"]);
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 53, vars: 11, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], [1, "flex", "mb-8", "bg-gray-100", "rounded-lg", "p-1"], ["type", "button", 1, "flex-1", "py-2", "px-4", "text-center", "font-medium", "rounded-md", "bg-blue-600", "text-white", "transition-all", "cursor-pointer"], ["type", "button", 1, "flex-1", "py-2", "px-4", "text-center", "font-medium", "rounded-md", "text-gray-600", "hover:text-gray-800", "transition-all", "cursor-pointer", 3, "click"], ["class", "mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg", 4, "ngIf"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "space-y-6"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Enter your password", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], [1, "text-left"], ["type", "button", 1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "flex", "justify-center", "space-x-12", "text-sm", "text-gray-500", "mt-8"], [1, "flex", "flex-col", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-600", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"], [1, "mb-4", "p-3", "bg-yellow-50", "border", "border-yellow-200", "rounded-lg"], [1, "text-yellow-800", "text-sm"], ["class", "mt-2 text-blue-600 hover:text-blue-500 text-sm font-medium disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed", 3, "disabled", "click", 4, "ngIf"], [1, "mt-2", "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "disabled:opacity-50", "cursor-pointer", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function LoginComponent_Template(rf, ctx) {
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
      \u0275\u0275template(19, LoginComponent_div_19_Template, 4, 2, "div", 13)(20, LoginComponent_div_20_Template, 3, 1, "div", 14);
      \u0275\u0275elementStart(21, "form", 15);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_21_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(22, "div", 16)(23, "div")(24, "label", 17);
      \u0275\u0275text(25, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div")(28, "label", 19);
      \u0275\u0275text(29, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "button", 22);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_32_listener() {
        return ctx.goToForgotPassword();
      });
      \u0275\u0275text(33, " Forgot password? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "button", 23);
      \u0275\u0275template(35, LoginComponent_span_35_Template, 2, 0, "span", 24)(36, LoginComponent_span_36_Template, 5, 0, "span", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 26)(38, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 28);
      \u0275\u0275element(40, "path", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Secure");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 28);
      \u0275\u0275element(45, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "Enterprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(49, "svg", 28);
      \u0275\u0275element(50, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Multi-tenant");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("src", "images/logo.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.emailVerificationMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.emailVerificationMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-300", ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-300", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(4);
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
      <!-- Email Verification Message -->\r
      <div *ngIf="emailVerificationMessage" class="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">\r
        <p class="text-yellow-800 text-sm">{{ emailVerificationMessage }}</p>\r
        <button \r
          *ngIf="showResendVerification"\r
          (click)="resendVerification()"\r
          [disabled]="isLoading"\r
          class="mt-2 text-blue-600 hover:text-blue-500 text-sm font-medium disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed">\r
          Resend verification email\r
        </button>\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div *ngIf="errorMessage && !emailVerificationMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
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
            <input\r
              id="password"\r
              type="password"\r
              formControlName="password"\r
              placeholder="Enter your password"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
              [class.border-red-300]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"\r
              required>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 18 });
})();

// src/app/auth/register/register.component.ts
function RegisterComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 2)(2, "div", 3)(3, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 16);
    \u0275\u0275element(5, "path", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 18);
    \u0275\u0275text(7, "Registration Successful!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 19);
    \u0275\u0275text(9, " User registered successfully. Please login now. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 20)(11, "p", 21);
    \u0275\u0275text(12, " Redirecting to login page in ");
    \u0275\u0275elementStart(13, "span", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " seconds ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 23);
    \u0275\u0275listener("click", function RegisterComponent_div_8_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMode());
    });
    \u0275\u0275text(17, " Go to login now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.countdown);
  }
}
function RegisterComponent_div_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "p", 50);
    \u0275\u0275text(2, "User registered successfully. Please check your email to verify your account.");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_div_9_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_9_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign Up");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_9_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "circle", 54)(3, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Creating Account... ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 24)(2, "h2", 25);
    \u0275\u0275text(3, "Welcome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5, "Sign in to your account or create a new one");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26)(7, "button", 27);
    \u0275\u0275listener("click", function RegisterComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMode());
    });
    \u0275\u0275text(8, " Sign In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 28);
    \u0275\u0275text(10, " Sign Up ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, RegisterComponent_div_9_div_11_Template, 3, 0, "div", 29);
    \u0275\u0275elementStart(12, "form", 30);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_div_9_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(13, "div", 31)(14, "div", 32)(15, "div")(16, "label", 33);
    \u0275\u0275text(17, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "label", 35);
    \u0275\u0275text(21, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 37);
    \u0275\u0275text(25, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "label", 39);
    \u0275\u0275text(29, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "label", 41);
    \u0275\u0275text(33, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div")(36, "label", 43);
    \u0275\u0275text(37, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 44);
    \u0275\u0275template(39, RegisterComponent_div_9_div_39_Template, 2, 0, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 46);
    \u0275\u0275template(41, RegisterComponent_div_9_span_41_Template, 2, 0, "span", 47)(42, RegisterComponent_div_9_span_42_Template, 5, 0, "span", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.showSuccessMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.registerForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-300", ((tmp_3_0 = ctx_r1.registerForm.get("first_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.registerForm.get("first_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ((tmp_4_0 = ctx_r1.registerForm.get("last_name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.registerForm.get("last_name")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ((tmp_5_0 = ctx_r1.registerForm.get("company_name")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.registerForm.get("company_name")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ((tmp_6_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ((tmp_7_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ((tmp_8_0 = ctx_r1.registerForm.get("password_confirmation")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.registerForm.get("password_confirmation")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.registerForm.errors == null ? null : ctx_r1.registerForm.errors["passwordMismatch"]) && ((tmp_9_0 = ctx_r1.registerForm.get("password_confirmation")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.registerForm.invalid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
var RegisterComponent = class _RegisterComponent {
  fb;
  router;
  authService;
  registerForm;
  isLoading = false;
  errorMessage = "";
  showSuccessMessage = false;
  countdown = 60;
  countdownInterval;
  constructor(fb, router, authService) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.registerForm = this.fb.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      company_name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      password_confirmation: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  passwordMatchValidator(form) {
    const password = form.get("password");
    const confirmPassword = form.get("password_confirmation");
    return password && confirmPassword && password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }
  toggleMode() {
    this.router.navigate(["/login"]);
  }
  onSubmit() {
    if (this.registerForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.showSuccessMessage = false;
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.showSuccessMessage = true;
            this.startCountdown();
          } else {
            this.errorMessage = response.message || "Registration failed";
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || error.error?.error || "An error occurred during registration";
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
        this.router.navigate(["/login"]);
      }
    }, 1e3);
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 26, vars: 3, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], ["class", "bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto", 4, "ngIf"], [1, "flex", "justify-center", "space-x-12", "text-sm", "text-gray-500", "mt-8"], [1, "flex", "flex-col", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-600", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], [1, "w-16", "h-16", "bg-green-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-4"], [1, "text-gray-600", "mb-6", "leading-relaxed"], [1, "bg-blue-50", "rounded-lg", "p-4", "mb-6"], [1, "text-blue-800", "text-sm"], [1, "font-bold"], [1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], [1, "flex", "mb-8", "bg-gray-100", "rounded-lg", "p-1"], ["type", "button", 1, "flex-1", "py-2", "px-4", "text-center", "font-medium", "rounded-md", "text-gray-600", "hover:text-gray-800", "transition-all", "cursor-pointer", 3, "click"], ["type", "button", 1, "flex-1", "py-2", "px-4", "text-center", "font-medium", "rounded-md", "bg-blue-600", "text-white", "transition-all", "cursor-pointer"], ["class", "mb-4 p-3 bg-green-50 border border-green-200 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "space-y-4"], [1, "grid", "grid-cols-2", "gap-4"], ["for", "first_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "first_name", "type", "text", "formControlName", "first_name", "placeholder", "First name", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "last_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "last_name", "type", "text", "formControlName", "last_name", "placeholder", "Last name", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "company_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "company_name", "type", "text", "formControlName", "company_name", "placeholder", "Enter your company name", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Create a password", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "password_confirmation", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "password_confirmation", "type", "password", "formControlName", "password_confirmation", "placeholder", "Confirm your password", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["class", "text-red-500 text-xs mt-1", 4, "ngIf"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", "mt-6", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "mb-4", "p-3", "bg-green-50", "border", "border-green-200", "rounded-lg"], [1, "text-green-600", "text-sm"], [1, "text-red-500", "text-xs", "mt-1"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Enterprise Asset Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, RegisterComponent_div_8_Template, 18, 1, "div", 7)(9, RegisterComponent_div_9_Template, 43, 18, "div", 7);
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Secure");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 10);
      \u0275\u0275element(18, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Enterprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 10);
      \u0275\u0275element(23, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Multi-tenant");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("src", "images/logo.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showSuccessMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showSuccessMessage);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [
      NgIf,
      ReactiveFormsModule
    ], template: `<!-- Register Component HTML -->\r
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
    <!-- Success Message Card -->\r
    <div *ngIf="showSuccessMessage" class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
      <div class="text-center">\r
        <!-- Success Icon -->\r
        <div class="flex justify-center mb-6">\r
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">\r
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
            </svg>\r
          </div>\r
        </div>\r
\r
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>\r
        <p class="text-gray-600 mb-6 leading-relaxed">\r
          User registered successfully. Please login now.\r
        </p>\r
\r
        <!-- Countdown -->\r
        <div class="bg-blue-50 rounded-lg p-4 mb-6">\r
          <p class="text-blue-800 text-sm">\r
            Redirecting to login page in <span class="font-bold">{{ countdown }}</span> seconds\r
          </p>\r
        </div>\r
\r
        <!-- Manual redirect button -->\r
        <button\r
          (click)="toggleMode()"\r
          class="text-blue-600 hover:text-blue-500 text-sm font-medium cursor-pointer">\r
          Go to login now\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Auth Card -->\r
    <div *ngIf="!showSuccessMessage" class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
      <div class="text-center mb-8">\r
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Welcome</h2>\r
        <p class="text-gray-600">Sign in to your account or create a new one</p>\r
      </div>\r
\r
      <!-- Tab Buttons -->\r
      <div class="flex mb-8 bg-gray-100 rounded-lg p-1">\r
        <button\r
          class="flex-1 py-2 px-4 text-center font-medium rounded-md text-gray-600 hover:text-gray-800 transition-all cursor-pointer"\r
          type="button"\r
          (click)="toggleMode()">\r
          Sign In\r
        </button>\r
        <button\r
          class="flex-1 py-2 px-4 text-center font-medium rounded-md bg-blue-600 text-white transition-all cursor-pointer"\r
          type="button">\r
          Sign Up\r
        </button>\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div *ngIf="showSuccessMessage" class="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">\r
        <p class="text-green-600 text-sm">User registered successfully. Please check your email to verify your account.</p>\r
      </div>\r
\r
      <!-- Register Form -->\r
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\r
        <div class="space-y-4">\r
          <!-- Name Fields -->\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label for="first_name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>\r
              <input\r
                id="first_name"\r
                type="text"\r
                formControlName="first_name"\r
                placeholder="First name"\r
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
                [class.border-red-300]="registerForm.get('first_name')?.invalid && registerForm.get('first_name')?.touched"\r
                required>\r
            </div>\r
            <div>\r
              <label for="last_name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>\r
              <input\r
                id="last_name"\r
                type="text"\r
                formControlName="last_name"\r
                placeholder="Last name"\r
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
                [class.border-red-300]="registerForm.get('last_name')?.invalid && registerForm.get('last_name')?.touched"\r
                required>\r
            </div>\r
          </div>\r
\r
          <div>\r
            <label for="company_name" class="block text-sm font-medium text-gray-700 mb-1">Company Name</label>\r
            <input\r
              id="company_name"\r
              type="text"\r
              formControlName="company_name"\r
              placeholder="Enter your company name"\r
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
              [class.border-red-300]="registerForm.get('company_name')?.invalid && registerForm.get('company_name')?.touched"\r
              required>\r
          </div>\r
\r
          <div>\r
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>\r
            <input\r
              id="email"\r
              type="email"\r
              formControlName="email"\r
              placeholder="Enter your email"\r
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
              [class.border-red-300]="registerForm.get('email')?.invalid && registerForm.get('email')?.touched"\r
              required>\r
          </div>\r
\r
          <div>\r
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>\r
            <input\r
              id="password"\r
              type="password"\r
              formControlName="password"\r
              placeholder="Create a password"\r
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
              [class.border-red-300]="registerForm.get('password')?.invalid && registerForm.get('password')?.touched"\r
              required>\r
          </div>\r
\r
          <div>\r
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>\r
            <input\r
              id="password_confirmation"\r
              type="password"\r
              formControlName="password_confirmation"\r
              placeholder="Confirm your password"\r
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
              [class.border-red-300]="registerForm.get('password_confirmation')?.invalid && registerForm.get('password_confirmation')?.touched"\r
              required>\r
            <div *ngIf="registerForm.errors?.['passwordMismatch'] && registerForm.get('password_confirmation')?.touched" class="text-red-500 text-xs mt-1">\r
              Passwords do not match\r
            </div>\r
          </div>\r
\r
          <button\r
            type="submit"\r
            [disabled]="registerForm.invalid || isLoading"\r
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-6">\r
            <span *ngIf="!isLoading">Sign Up</span>\r
            <span *ngIf="isLoading" class="flex items-center justify-center">\r
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              Creating Account...\r
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
</div>\r
` }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/auth/register/register.component.ts", lineNumber: 18 });
})();

// src/app/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function ForgotPasswordComponent_div_8_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Reset Link");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_8_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "circle", 24)(3, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Sending... ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2", 10);
    \u0275\u0275text(3, "Forgot Password?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5, "Enter your email address and we'll send you a link to reset your password");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ForgotPasswordComponent_div_8_div_6_Template, 3, 1, "div", 11);
    \u0275\u0275elementStart(7, "form", 12);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_div_8_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(8, "div", 13)(9, "div")(10, "label", 14);
    \u0275\u0275text(11, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 16);
    \u0275\u0275template(14, ForgotPasswordComponent_div_8_span_14_Template, 2, 0, "span", 17)(15, ForgotPasswordComponent_div_8_span_15_Template, 5, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 2)(17, "button", 19);
    \u0275\u0275listener("click", function ForgotPasswordComponent_div_8_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(18, " \u2190 Back to Sign In ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.forgotPasswordForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-red-300", ((tmp_3_0 = ctx_r1.forgotPasswordForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.forgotPasswordForm.get("email")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.forgotPasswordForm.invalid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ForgotPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 2)(2, "div", 3)(3, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 27);
    \u0275\u0275element(5, "path", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 29);
    \u0275\u0275text(7, "Reset Link Sent!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 30);
    \u0275\u0275text(9, " Password reset link sent to your email. Please check your email to reset your password. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 31)(11, "p", 32);
    \u0275\u0275text(12, " Redirecting to login page in ");
    \u0275\u0275elementStart(13, "span", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " seconds ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 34);
    \u0275\u0275listener("click", function ForgotPasswordComponent_div_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(17, " Go to login now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.countdown);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb;
  router;
  authService;
  forgotPasswordForm;
  isLoading = false;
  errorMessage = "";
  showSuccessMessage = false;
  countdown = 10;
  countdownInterval;
  constructor(fb, router, authService) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.showSuccessMessage = false;
      this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.showSuccessMessage = true;
            this.startCountdown();
          } else {
            this.errorMessage = response.message || "Failed to send reset link";
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || error.error?.error || "An error occurred";
          this.isLoading = false;
        }
      });
    }
  }
  startCountdown() {
    this.countdown = 10;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
        this.router.navigate(["/login"]);
      }
    }, 1e3);
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  goBack() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 10, vars: 3, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], ["class", "bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto", 4, "ngIf"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "space-y-6"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email address", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], ["type", "button", 1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "w-16", "h-16", "bg-green-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-4"], [1, "text-gray-600", "mb-6", "leading-relaxed"], [1, "bg-blue-50", "rounded-lg", "p-4", "mb-6"], [1, "text-blue-800", "text-sm"], [1, "font-bold"], [1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Enterprise Asset Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ForgotPasswordComponent_div_8_Template, 19, 7, "div", 7)(9, ForgotPasswordComponent_div_9_Template, 18, 1, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("src", "images/logo.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.showSuccessMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessMessage);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [
      NgIf,
      ReactiveFormsModule
    ], template: `<!-- Forgot Password Component HTML -->\r
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
    <!-- Forgot Password Card -->\r
    <div *ngIf="!showSuccessMessage" class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
      <div class="text-center mb-8">\r
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h2>\r
        <p class="text-gray-600">Enter your email address and we'll send you a link to reset your password</p>\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div *ngIf="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
        <p class="text-red-600 text-sm">{{ errorMessage }}</p>\r
      </div>\r
\r
      <!-- Forgot Password Form -->\r
      <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()">\r
        <div class="space-y-6">\r
          <div>\r
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>\r
            <input\r
              id="email"\r
              type="email"\r
              formControlName="email"\r
              placeholder="Enter your email address"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
              [class.border-red-300]="forgotPasswordForm.get('email')?.invalid && forgotPasswordForm.get('email')?.touched"\r
              required>\r
          </div>\r
\r
          <button\r
            type="submit"\r
            [disabled]="forgotPasswordForm.invalid || isLoading"\r
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">\r
            <span *ngIf="!isLoading">Send Reset Link</span>\r
            <span *ngIf="isLoading" class="flex items-center justify-center">\r
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              Sending...\r
            </span>\r
          </button>\r
\r
          <div class="text-center">\r
            <button type="button" (click)="goBack()" class="text-blue-600 hover:text-blue-500 text-sm font-medium cursor-pointer">\r
              \u2190 Back to Sign In\r
            </button>\r
          </div>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Success Message Card -->\r
    <div *ngIf="showSuccessMessage" class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
      <div class="text-center">\r
        <!-- Success Icon -->\r
        <div class="flex justify-center mb-6">\r
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">\r
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        \r
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Reset Link Sent!</h2>\r
        <p class="text-gray-600 mb-6 leading-relaxed">\r
          Password reset link sent to your email. Please check your email to reset your password.\r
        </p>\r
        \r
        <!-- Countdown -->\r
        <div class="bg-blue-50 rounded-lg p-4 mb-6">\r
          <p class="text-blue-800 text-sm">\r
            Redirecting to login page in <span class="font-bold">{{ countdown }}</span> seconds\r
          </p>\r
        </div>\r
        \r
        <!-- Manual redirect button -->\r
        <button\r
          (click)="goBack()"\r
          class="text-blue-600 hover:text-blue-500 text-sm font-medium cursor-pointer">\r
          Go to login now\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/forgot-password/forgot-password.component.ts", lineNumber: 19 });
})();

// src/app/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function ResetPasswordComponent_div_8_form_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_8_form_7_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reset Password");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_8_form_7_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "circle", 30)(3, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Resetting... ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_8_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 17);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_div_8_form_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "div")(3, "label", 19);
    \u0275\u0275text(4, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 21);
    \u0275\u0275text(8, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 22);
    \u0275\u0275template(10, ResetPasswordComponent_div_8_form_7_div_10_Template, 2, 0, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 24);
    \u0275\u0275template(12, ResetPasswordComponent_div_8_form_7_span_12_Template, 2, 0, "span", 25)(13, ResetPasswordComponent_div_8_form_7_span_13_Template, 5, 0, "span", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.resetPasswordForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-red-300", ((tmp_3_0 = ctx_r1.resetPasswordForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.resetPasswordForm.get("password")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ((tmp_4_0 = ctx_r1.resetPasswordForm.get("password_confirmation")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.resetPasswordForm.get("password_confirmation")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.resetPasswordForm.errors == null ? null : ctx_r1.resetPasswordForm.errors["passwordMismatch"]) && ((tmp_5_0 = ctx_r1.resetPasswordForm.get("password_confirmation")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.resetPasswordForm.invalid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ResetPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2", 10);
    \u0275\u0275text(3, "Reset Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5, "Enter your new password below");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ResetPasswordComponent_div_8_div_6_Template, 3, 1, "div", 11)(7, ResetPasswordComponent_div_8_form_7_Template, 14, 9, "form", 12);
    \u0275\u0275elementStart(8, "div", 13)(9, "button", 14);
    \u0275\u0275listener("click", function ResetPasswordComponent_div_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(10, " \u2190 Back to Sign In ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.errorMessage || ctx_r1.errorMessage && ctx_r1.token && ctx_r1.email);
  }
}
function ResetPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 2)(2, "div", 3)(3, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 33);
    \u0275\u0275element(5, "path", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 35);
    \u0275\u0275text(7, "Password Reset Successfully!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 36);
    \u0275\u0275text(9, " Your password has been reset successfully. You can now log in with your new password. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 37)(11, "p", 38);
    \u0275\u0275text(12, " Redirecting to login page in ");
    \u0275\u0275elementStart(13, "span", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " seconds ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 40);
    \u0275\u0275listener("click", function ResetPasswordComponent_div_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(17, " Go to login now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.countdown);
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  router;
  route;
  authService;
  resetPasswordForm;
  isLoading = false;
  errorMessage = "";
  showSuccessMessage = false;
  countdown = 10;
  countdownInterval;
  token = "";
  email = "";
  constructor(fb, router, route, authService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.resetPasswordForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
      password_confirmation: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParams["token"] || "";
    this.email = this.route.snapshot.queryParams["email"] || "";
    if (!this.token || !this.email) {
      this.errorMessage = "Invalid reset link";
    }
  }
  passwordMatchValidator(form) {
    const password = form.get("password");
    const confirmPassword = form.get("password_confirmation");
    return password && confirmPassword && password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }
  onSubmit() {
    if (this.resetPasswordForm.valid && !this.isLoading && this.token && this.email) {
      this.isLoading = true;
      this.errorMessage = "";
      this.showSuccessMessage = false;
      const resetData = {
        token: this.token,
        email: this.email,
        password: this.resetPasswordForm.value.password,
        password_confirmation: this.resetPasswordForm.value.password_confirmation
      };
      this.authService.resetPassword(resetData).subscribe({
        next: (response) => {
          if (response.success) {
            this.showSuccessMessage = true;
            this.startCountdown();
          } else {
            this.errorMessage = response.message || "Failed to reset password";
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || error.error?.error || "An error occurred";
          this.isLoading = false;
        }
      });
    }
  }
  startCountdown() {
    this.countdown = 10;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
        this.router.navigate(["/login"]);
      }
    }, 1e3);
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  goToLogin() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 10, vars: 3, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], ["class", "bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto", 4, "ngIf"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "text-center", "mt-6"], ["type", "button", 1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [3, "ngSubmit", "formGroup"], [1, "space-y-6"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Enter new password", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "password_confirmation", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "password_confirmation", "type", "password", "formControlName", "password_confirmation", "placeholder", "Confirm new password", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["class", "text-red-500 text-xs mt-1", 4, "ngIf"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "text-red-500", "text-xs", "mt-1"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "w-16", "h-16", "bg-green-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-4"], [1, "text-gray-600", "mb-6", "leading-relaxed"], [1, "bg-blue-50", "rounded-lg", "p-4", "mb-6"], [1, "text-blue-800", "text-sm"], [1, "font-bold"], [1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Enterprise Asset Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ResetPasswordComponent_div_8_Template, 11, 2, "div", 7)(9, ResetPasswordComponent_div_9_Template, 18, 1, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("src", "images/logo.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.showSuccessMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessMessage);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [
      NgIf,
      ReactiveFormsModule
    ], template: `<!-- Reset Password Component HTML -->\r
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
    <!-- Reset Password Card -->\r
    <div *ngIf="!showSuccessMessage" class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
      <div class="text-center mb-8">\r
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Reset Password</h2>\r
        <p class="text-gray-600">Enter your new password below</p>\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div *ngIf="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
        <p class="text-red-600 text-sm">{{ errorMessage }}</p>\r
      </div>\r
\r
      <!-- Reset Password Form -->\r
      <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()" *ngIf="!errorMessage || (errorMessage && token && email)">\r
        <div class="space-y-6">\r
          <div>\r
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">New Password</label>\r
            <input\r
              id="password"\r
              type="password"\r
              formControlName="password"\r
              placeholder="Enter new password"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
              [class.border-red-300]="resetPasswordForm.get('password')?.invalid && resetPasswordForm.get('password')?.touched"\r
              required>\r
          </div>\r
\r
          <div>\r
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>\r
            <input\r
              id="password_confirmation"\r
              type="password"\r
              formControlName="password_confirmation"\r
              placeholder="Confirm new password"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
              [class.border-red-300]="resetPasswordForm.get('password_confirmation')?.invalid && resetPasswordForm.get('password_confirmation')?.touched"\r
              required>\r
            <div *ngIf="resetPasswordForm.errors?.['passwordMismatch'] && resetPasswordForm.get('password_confirmation')?.touched" class="text-red-500 text-xs mt-1">\r
              Passwords do not match\r
            </div>\r
          </div>\r
\r
          <button\r
            type="submit"\r
            [disabled]="resetPasswordForm.invalid || isLoading"\r
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">\r
            <span *ngIf="!isLoading">Reset Password</span>\r
            <span *ngIf="isLoading" class="flex items-center justify-center">\r
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              Resetting...\r
            </span>\r
          </button>\r
        </div>\r
      </form>\r
\r
      <div class="text-center mt-6">\r
        <button type="button" (click)="goToLogin()" class="text-blue-600 hover:text-blue-500 text-sm font-medium cursor-pointer">\r
          \u2190 Back to Sign In\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Success Message Card -->\r
    <div *ngIf="showSuccessMessage" class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
      <div class="text-center">\r
        <!-- Success Icon -->\r
        <div class="flex justify-center mb-6">\r
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">\r
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        \r
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Password Reset Successfully!</h2>\r
        <p class="text-gray-600 mb-6 leading-relaxed">\r
          Your password has been reset successfully. You can now log in with your new password.\r
        </p>\r
        \r
        <!-- Countdown -->\r
        <div class="bg-blue-50 rounded-lg p-4 mb-6">\r
          <p class="text-blue-800 text-sm">\r
            Redirecting to login page in <span class="font-bold">{{ countdown }}</span> seconds\r
          </p>\r
        </div>\r
        \r
        <!-- Manual redirect button -->\r
        <button\r
          (click)="goToLogin()"\r
          class="text-blue-600 hover:text-blue-500 text-sm font-medium cursor-pointer">\r
          Go to login now\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: ActivatedRoute }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/auth/reset-password/reset-password.component.ts", lineNumber: 18 });
})();

// src/app/auth/activate-account/activate-account.component.ts
function ActivateAccountComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "circle", 12)(4, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2", 14);
    \u0275\u0275text(6, "Activating Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, "Please wait while we activate your account...");
    \u0275\u0275elementEnd()();
  }
}
function ActivateAccountComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 16);
    \u0275\u0275element(4, "path", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2", 14);
    \u0275\u0275text(6, "Account Activated!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function ActivateAccountComponent_div_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(10, " Continue to Sign In ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function ActivateAccountComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 21);
    \u0275\u0275element(4, "path", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2", 14);
    \u0275\u0275text(6, "Activation Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23)(10, "button", 19);
    \u0275\u0275listener("click", function ActivateAccountComponent_div_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendActivation());
    });
    \u0275\u0275text(11, " Request New Activation Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 24);
    \u0275\u0275listener("click", function ActivateAccountComponent_div_12_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(13, " Back to Sign In ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
var ActivateAccountComponent = class _ActivateAccountComponent {
  router;
  route;
  authService;
  isLoading = true;
  successMessage = "";
  errorMessage = "";
  id = "";
  hash = "";
  constructor(router, route, authService) {
    this.router = router;
    this.route = route;
    this.authService = authService;
  }
  ngOnInit() {
    this.id = this.route.snapshot.params["id"] || "";
    this.hash = this.route.snapshot.params["hash"] || "";
    if (!this.id || !this.hash) {
      this.errorMessage = "Invalid verification link";
      this.isLoading = false;
      return;
    }
    this.verifyEmail();
  }
  verifyEmail() {
    this.authService.verifyEmail(this.id, this.hash).subscribe({
      next: (response) => {
        if (response.success) {
          this.successMessage = response.message || "Email verified successfully";
        } else {
          this.errorMessage = response.message || "Failed to verify email";
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || error.error?.error || "An error occurred during verification";
        this.isLoading = false;
      }
    });
  }
  goToLogin() {
    this.router.navigate(["/login"]);
  }
  resendActivation() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function ActivateAccountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActivateAccountComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivateAccountComponent, selectors: [["app-activate-account"]], decls: 13, vars: 4, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], ["class", "py-8", 4, "ngIf"], [1, "py-8"], [1, "flex", "justify-center", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-12", "w-12", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], [1, "w-16", "h-16", "bg-green-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-gray-600", "mb-6"], [1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "cursor-pointer", 3, "click"], [1, "w-16", "h-16", "bg-red-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-3"], [1, "w-full", "text-blue-600", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "cursor-pointer", 3, "click"]], template: function ActivateAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Enterprise Asset Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 2);
      \u0275\u0275template(10, ActivateAccountComponent_div_10_Template, 9, 0, "div", 8)(11, ActivateAccountComponent_div_11_Template, 11, 1, "div", 8)(12, ActivateAccountComponent_div_12_Template, 14, 1, "div", 8);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("src", "images/logo.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.errorMessage);
    }
  }, dependencies: [NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivateAccountComponent, [{
    type: Component,
    args: [{ selector: "app-activate-account", standalone: true, imports: [
      NgIf
    ], template: `<!-- Activate Account Component HTML -->\r
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
    <!-- Activation Card -->\r
    <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
      <div class="text-center">\r
        <!-- Loading State -->\r
        <div *ngIf="isLoading" class="py-8">\r
          <div class="flex justify-center mb-4">\r
            <svg class="animate-spin h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
          </div>\r
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Activating Account</h2>\r
          <p class="text-gray-600">Please wait while we activate your account...</p>\r
        </div>\r
\r
        <!-- Success State -->\r
        <div *ngIf="!isLoading && successMessage" class="py-8">\r
          <div class="flex justify-center mb-4">\r
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">\r
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
              </svg>\r
            </div>\r
          </div>\r
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Account Activated!</h2>\r
          <p class="text-gray-600 mb-6">{{ successMessage }}</p>\r
          \r
          <button\r
            (click)="goToLogin()"\r
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all cursor-pointer">\r
            Continue to Sign In\r
          </button>\r
        </div>\r
\r
        <!-- Error State -->\r
        <div *ngIf="!isLoading && errorMessage" class="py-8">\r
          <div class="flex justify-center mb-4">\r
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">\r
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
              </svg>\r
            </div>\r
          </div>\r
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Activation Failed</h2>\r
          <p class="text-gray-600 mb-6">{{ errorMessage }}</p>\r
          \r
          <div class="space-y-3">\r
            <button\r
              (click)="resendActivation()"\r
              class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all cursor-pointer">\r
              Request New Activation Link\r
            </button>\r
            \r
            <button\r
              (click)="goToLogin()"\r
              class="w-full text-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all cursor-pointer">\r
              Back to Sign In\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivateAccountComponent, { className: "ActivateAccountComponent", filePath: "src/app/auth/activate-account/activate-account.component.ts", lineNumber: 15 });
})();

// src/app/auth/auth-routing.module.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "activate-account", component: ActivateAccountComponent },
  { path: "email/verify/:id/:hash", component: ActivateAccountComponent }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        ActivateAccountComponent
      ]
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=chunk-R6XA4ND2.js.map
