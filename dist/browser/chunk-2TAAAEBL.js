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
  ActivatedRoute,
  Router
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_8_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Enter your new password below");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_8_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Password Reset Instructions");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 18);
    \u0275\u0275element(3, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.infoMessage);
  }
}
function ResetPasswordComponent_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ResetPasswordComponent_div_8_form_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPasswordErrorMessage(), " ");
  }
}
function ResetPasswordComponent_div_8_form_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getConfirmPasswordErrorMessage(), " ");
  }
}
function ResetPasswordComponent_div_8_form_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reset Password");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_8_form_8_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "circle", 36)(3, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Resetting... ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_8_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 23);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_div_8_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "div")(3, "label", 25);
    \u0275\u0275text(4, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 26);
    \u0275\u0275template(6, ResetPasswordComponent_div_8_form_8_div_6_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 28);
    \u0275\u0275text(9, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 29);
    \u0275\u0275template(11, ResetPasswordComponent_div_8_form_8_div_11_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 30);
    \u0275\u0275template(13, ResetPasswordComponent_div_8_form_8_span_13_Template, 2, 0, "span", 31)(14, ResetPasswordComponent_div_8_form_8_span_14_Template, 5, 0, "span", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r0.resetPasswordForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-red-300", ((tmp_3_0 = ctx_r0.resetPasswordForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.resetPasswordForm.get("password")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getPasswordErrorMessage());
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-300", ((tmp_5_0 = ctx_r0.resetPasswordForm.get("password_confirmation")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.resetPasswordForm.get("password_confirmation")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getConfirmPasswordErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.resetPasswordForm.invalid || ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
  }
}
function ResetPasswordComponent_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "button", 39);
    \u0275\u0275listener("click", function ResetPasswordComponent_div_8_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToLogin());
    });
    \u0275\u0275text(2, " \u2190 Back to Sign In ");
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2", 10);
    \u0275\u0275text(3, "Reset Password");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ResetPasswordComponent_div_8_p_4_Template, 2, 0, "p", 11)(5, ResetPasswordComponent_div_8_p_5_Template, 2, 0, "p", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ResetPasswordComponent_div_8_div_6_Template, 6, 1, "div", 12)(7, ResetPasswordComponent_div_8_div_7_Template, 3, 1, "div", 13)(8, ResetPasswordComponent_div_8_form_8_Template, 15, 10, "form", 14)(9, ResetPasswordComponent_div_8_div_9_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.hasValidLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasValidLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.infoMessage && !ctx_r0.hasValidLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasValidLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasValidLink || ctx_r0.infoMessage);
  }
}
function ResetPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 2)(2, "div", 3)(3, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 41);
    \u0275\u0275element(5, "path", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 43);
    \u0275\u0275text(7, "Password Reset Successfully!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 44);
    \u0275\u0275text(9, " Your password has been reset successfully. You can now log in with your new password. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 45)(11, "p", 20);
    \u0275\u0275text(12, " Redirecting to login page in ");
    \u0275\u0275elementStart(13, "span", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " seconds ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 47);
    \u0275\u0275listener("click", function ResetPasswordComponent_div_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToLogin());
    });
    \u0275\u0275text(17, " Go to login now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.countdown);
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
  infoMessage = "";
  showSuccessMessage = false;
  countdown = 10;
  countdownInterval;
  token = "";
  email = "";
  hasValidLink = false;
  constructor(fb, router, route, authService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.resetPasswordForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
      password_confirmation: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParams["token"] || "";
    this.email = this.route.snapshot.queryParams["email"] || "";
    if (this.token && this.email) {
      this.hasValidLink = true;
    } else {
      this.infoMessage = "Please check your email for the password reset link. Click the link in the email to reset your password.";
    }
  }
  passwordMatchValidator(form) {
    const password = form.get("password");
    const confirmPassword = form.get("password_confirmation");
    return password && confirmPassword && password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }
  onSubmit() {
    if (this.resetPasswordForm.invalid) {
      Object.keys(this.resetPasswordForm.controls).forEach((key) => {
        this.resetPasswordForm.get(key)?.markAsTouched();
      });
      return;
    }
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
  getPasswordErrorMessage() {
    const passwordControl = this.resetPasswordForm.get("password");
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
  getConfirmPasswordErrorMessage() {
    const confirmPasswordControl = this.resetPasswordForm.get("password_confirmation");
    if (confirmPasswordControl?.hasError("required") && confirmPasswordControl?.touched) {
      return "Password confirmation is required";
    }
    if (this.resetPasswordForm.errors?.["passwordMismatch"] && confirmPasswordControl?.touched) {
      return "Passwords do not match";
    }
    return "";
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 10, vars: 3, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], ["class", "bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto", 4, "ngIf"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], ["class", "text-gray-600", 4, "ngIf"], ["class", "mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg", 4, "ngIf"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "text-center mt-6", 4, "ngIf"], [1, "mb-4", "p-4", "bg-blue-50", "border", "border-blue-200", "rounded-lg"], [1, "flex", "items-start"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600", "mt-0.5", "mr-3", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-blue-800", "text-sm"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [3, "ngSubmit", "formGroup"], [1, "space-y-6"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Enter new password", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["class", "text-red-500 text-xs mt-1", 4, "ngIf"], ["for", "password_confirmation", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "password_confirmation", "type", "password", "formControlName", "password_confirmation", "placeholder", "Confirm new password", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "text-red-500", "text-xs", "mt-1"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-center", "mt-6"], ["type", "button", 1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"], [1, "w-16", "h-16", "bg-green-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-4"], [1, "text-gray-600", "mb-6", "leading-relaxed"], [1, "bg-blue-50", "rounded-lg", "p-4", "mb-6"], [1, "font-bold"], [1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Enterprise Asset Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ResetPasswordComponent_div_8_Template, 10, 6, "div", 7)(9, ResetPasswordComponent_div_9_Template, 18, 1, "div", 7);
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
        <p class="text-gray-600" *ngIf="hasValidLink">Enter your new password below</p>\r
        <p class="text-gray-600" *ngIf="!hasValidLink">Password Reset Instructions</p>\r
      </div>\r
\r
      <!-- Info Message (when waiting for email link) -->\r
      <div *ngIf="infoMessage && !hasValidLink" class="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">\r
        <div class="flex items-start">\r
          <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
          <p class="text-blue-800 text-sm">{{ infoMessage }}</p>\r
        </div>\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div *ngIf="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
        <p class="text-red-600 text-sm">{{ errorMessage }}</p>\r
      </div>\r
\r
      <!-- Reset Password Form -->\r
      <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()" *ngIf="hasValidLink">\r
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
            <div *ngIf="getPasswordErrorMessage()" class="text-red-500 text-xs mt-1">\r
              {{ getPasswordErrorMessage() }}\r
            </div>\r
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
            <div *ngIf="getConfirmPasswordErrorMessage()" class="text-red-500 text-xs mt-1">\r
              {{ getConfirmPasswordErrorMessage() }}\r
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
      <div class="text-center mt-6" *ngIf="hasValidLink || infoMessage">\r
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
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-2TAAAEBL.js.map
