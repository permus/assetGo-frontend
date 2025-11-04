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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ForgotPasswordComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Reset Link");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "circle", 23)(3, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Sending... ");
    \u0275\u0275elementEnd();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb;
  router;
  authService;
  forgotPasswordForm;
  isLoading = false;
  errorMessage = "";
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
      this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(["/reset-password"]);
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
  ngOnDestroy() {
  }
  goBack() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 27, vars: 8, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "space-y-6"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email address", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], ["type", "button", 1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Enterprise Asset Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2", 9);
      \u0275\u0275text(11, "Forgot Password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 6);
      \u0275\u0275text(13, "Enter your email address and we'll send you a link to reset your password");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, ForgotPasswordComponent_div_14_Template, 3, 1, "div", 10);
      \u0275\u0275elementStart(15, "form", 11);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 12)(17, "div")(18, "label", 13);
      \u0275\u0275text(19, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275template(22, ForgotPasswordComponent_span_22_Template, 2, 0, "span", 16)(23, ForgotPasswordComponent_span_23_Template, 5, 0, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 2)(25, "button", 18);
      \u0275\u0275listener("click", function ForgotPasswordComponent_Template_button_click_25_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(26, " \u2190 Back to Sign In ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("src", "images/logo.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.forgotPasswordForm);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-300", ((tmp_3_0 = ctx.forgotPasswordForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.forgotPasswordForm.get("email")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.forgotPasswordForm.invalid || ctx.isLoading);
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
    <div class="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">\r
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
  </div>\r
</div>` }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/forgot-password/forgot-password.component.ts", lineNumber: 19 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-R2UOI3HL.js.map
