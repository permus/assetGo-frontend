import {
  PasswordValidator
} from "./chunk-R7TAE5GV.js";
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
  NgClass,
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
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/register/register.component.ts
var _c0 = (a0, a1, a2) => ({ "text-red-600": a0, "text-yellow-600": a1, "text-green-600": a2 });
var _c1 = (a0, a1, a2) => ({ "bg-red-500": a0, "bg-yellow-500": a1, "bg-green-500": a2 });
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
    \u0275\u0275elementStart(0, "div", 54)(1, "p", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function RegisterComponent_div_9__svg_svg_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 56);
    \u0275\u0275element(1, "path", 57)(2, "path", 58);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_9__svg_svg_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 56);
    \u0275\u0275element(1, "path", 59);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_9_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "span", 62);
    \u0275\u0275text(3, "Password Strength:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275element(7, "div", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c0, ctx_r1.passwordStrength.level === "weak", ctx_r1.passwordStrength.level === "medium", ctx_r1.passwordStrength.level === "strong" || ctx_r1.passwordStrength.level === "very-strong"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.passwordStrength.level, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.passwordStrength.percentage, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(9, _c1, ctx_r1.passwordStrength.level === "weak", ctx_r1.passwordStrength.level === "medium", ctx_r1.passwordStrength.level === "strong" || ctx_r1.passwordStrength.level === "very-strong"));
  }
}
function RegisterComponent_div_9_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 67);
    \u0275\u0275text(2, "Password must contain:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 68)(4, "li", 69)(5, "span", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " At least 8 characters ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li", 69)(9, "span", 70);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " One uppercase letter (A-Z) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li", 69)(13, "span", 70);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " One lowercase letter (a-z) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li", 69)(17, "span", 70);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " One number (0-9) ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getPasswordRequirements().minLength ? "text-green-600" : "text-gray-500");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPasswordRequirements().minLength ? "\u2713" : "\u25CB");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getPasswordRequirements().hasUpperCase ? "text-green-600" : "text-gray-500");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPasswordRequirements().hasUpperCase ? "\u2713" : "\u25CB");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getPasswordRequirements().hasLowerCase ? "text-green-600" : "text-gray-500");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPasswordRequirements().hasLowerCase ? "\u2713" : "\u25CB");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getPasswordRequirements().hasNumber ? "text-green-600" : "text-gray-500");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPasswordRequirements().hasNumber ? "\u2713" : "\u25CB");
  }
}
function RegisterComponent_div_9__svg_svg_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 56);
    \u0275\u0275element(1, "path", 57)(2, "path", 58);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_9__svg_svg_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 56);
    \u0275\u0275element(1, "path", 59);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_9_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_9_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign Up");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_9_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "circle", 74)(3, "path", 75);
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
    \u0275\u0275template(11, RegisterComponent_div_9_div_11_Template, 3, 1, "div", 29);
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
    \u0275\u0275elementStart(34, "div", 42)(35, "input", 43);
    \u0275\u0275listener("focus", function RegisterComponent_div_9_Template_input_focus_35_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPasswordRequirements = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 44);
    \u0275\u0275listener("click", function RegisterComponent_div_9_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePasswordVisibility());
    });
    \u0275\u0275template(37, RegisterComponent_div_9__svg_svg_37_Template, 3, 0, "svg", 45)(38, RegisterComponent_div_9__svg_svg_38_Template, 2, 0, "svg", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, RegisterComponent_div_9_div_39_Template, 8, 13, "div", 46)(40, RegisterComponent_div_9_div_40_Template, 20, 8, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div")(42, "label", 48);
    \u0275\u0275text(43, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 42);
    \u0275\u0275element(45, "input", 49);
    \u0275\u0275elementStart(46, "button", 44);
    \u0275\u0275listener("click", function RegisterComponent_div_9_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleConfirmPasswordVisibility());
    });
    \u0275\u0275template(47, RegisterComponent_div_9__svg_svg_47_Template, 3, 0, "svg", 45)(48, RegisterComponent_div_9__svg_svg_48_Template, 2, 0, "svg", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, RegisterComponent_div_9_div_49_Template, 2, 0, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 51);
    \u0275\u0275template(51, RegisterComponent_div_9_span_51_Template, 2, 0, "span", 52)(52, RegisterComponent_div_9_span_52_Template, 5, 0, "span", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
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
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-red-300", ((tmp_7_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_7_0.touched));
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passwordStrength && ((tmp_11_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_11_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPasswordRequirements && ((tmp_12_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_12_0.value));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-red-300", ((tmp_13_0 = ctx_r1.registerForm.get("password_confirmation")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.registerForm.get("password_confirmation")) == null ? null : tmp_13_0.touched));
    \u0275\u0275property("type", ctx_r1.showConfirmPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.registerForm.errors == null ? null : ctx_r1.registerForm.errors["passwordMismatch"]) && ((tmp_17_0 = ctx_r1.registerForm.get("password_confirmation")) == null ? null : tmp_17_0.touched));
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
  passwordStrength = null;
  showPasswordRequirements = false;
  showPassword = false;
  showConfirmPassword = false;
  constructor(fb, router, authService) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.registerForm = this.fb.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      company_name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [
        Validators.required,
        Validators.minLength(8),
        PasswordValidator.strong()
      ]],
      password_confirmation: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
    this.registerForm.get("password")?.valueChanges.subscribe((password) => {
      this.passwordStrength = PasswordValidator.calculateStrength(password || "");
    });
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
  getPasswordRequirements() {
    const password = this.registerForm.get("password")?.value || "";
    return PasswordValidator.meetsRequirements(password);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 26, vars: 3, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8"], [1, "text-center"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "items-center", "space-x-3"], ["alt", "AssetGo Logo", 1, "h-20", "w-auto", 3, "src"], [1, "text-gray-600"], ["class", "bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto", 4, "ngIf"], [1, "flex", "justify-center", "space-x-12", "text-sm", "text-gray-500", "mt-8"], [1, "flex", "flex-col", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-600", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-8", "max-w-md", "mx-auto"], [1, "w-16", "h-16", "bg-green-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-4"], [1, "text-gray-600", "mb-6", "leading-relaxed"], [1, "bg-blue-50", "rounded-lg", "p-4", "mb-6"], [1, "text-blue-800", "text-sm"], [1, "font-bold"], [1, "text-blue-600", "hover:text-blue-500", "text-sm", "font-medium", "cursor-pointer", 3, "click"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], [1, "flex", "mb-8", "bg-gray-100", "rounded-lg", "p-1"], ["type", "button", 1, "flex-1", "py-2", "px-4", "text-center", "font-medium", "rounded-md", "text-gray-600", "hover:text-gray-800", "transition-all", "cursor-pointer", 3, "click"], ["type", "button", 1, "flex-1", "py-2", "px-4", "text-center", "font-medium", "rounded-md", "bg-blue-600", "text-white", "transition-all", "cursor-pointer"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "space-y-4"], [1, "grid", "grid-cols-2", "gap-4"], ["for", "first_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "first_name", "type", "text", "formControlName", "first_name", "placeholder", "First name", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "last_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "last_name", "type", "text", "formControlName", "last_name", "placeholder", "Last name", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "company_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "company_name", "type", "text", "formControlName", "company_name", "placeholder", "Enter your company name", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email", "required", "", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], [1, "relative"], ["id", "password", "formControlName", "password", "placeholder", "Create a password", "required", "", 1, "w-full", "px-3", "py-2", "pr-10", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400", 3, "focus", "type"], ["type", "button", 1, "absolute", "inset-y-0", "right-0", "pr-3", "flex", "items-center", "cursor-pointer", "text-gray-400", "hover:text-gray-600", 3, "click"], ["class", "h-5 w-5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], ["class", "mt-3 p-3 bg-gray-50 rounded-lg", 4, "ngIf"], ["for", "password_confirmation", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["id", "password_confirmation", "formControlName", "password_confirmation", "placeholder", "Confirm your password", "required", "", 1, "w-full", "px-3", "py-2", "pr-10", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-all", "placeholder-gray-400", 3, "type"], ["class", "text-red-500 text-xs mt-1", 4, "ngIf"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-4", "rounded-lg", "font-medium", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", "mt-6", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"], [1, "mt-2"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "text-xs", "font-medium", "text-gray-600"], [1, "text-xs", "font-semibold", "capitalize", 3, "ngClass"], [1, "w-full", "bg-gray-200", "rounded-full", "h-2"], [1, "h-2", "rounded-full", "transition-all", "duration-300", 3, "ngClass"], [1, "mt-3", "p-3", "bg-gray-50", "rounded-lg"], [1, "text-xs", "font-medium", "text-gray-700", "mb-2"], [1, "space-y-1"], [1, "text-xs", "flex", "items-center", 3, "ngClass"], [1, "mr-2"], [1, "text-red-500", "text-xs", "mt-1"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Enterprise Asset Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, RegisterComponent_div_8_Template, 18, 1, "div", 7)(9, RegisterComponent_div_9_Template, 53, 26, "div", 7);
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
    NgClass,
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
      NgClass,
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
      <div *ngIf="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
        <p class="text-red-600 text-sm">{{ errorMessage }}</p>\r
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
            <div class="relative">\r
              <input\r
                id="password"\r
                [type]="showPassword ? 'text' : 'password'"\r
                formControlName="password"\r
                placeholder="Create a password"\r
                (focus)="showPasswordRequirements = true"\r
                class="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
                [class.border-red-300]="registerForm.get('password')?.invalid && registerForm.get('password')?.touched"\r
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
            \r
            <!-- Password Strength Indicator -->\r
            <div *ngIf="passwordStrength && registerForm.get('password')?.value" class="mt-2">\r
              <div class="flex items-center justify-between mb-1">\r
                <span class="text-xs font-medium text-gray-600">Password Strength:</span>\r
                <span class="text-xs font-semibold capitalize"\r
                      [ngClass]="{\r
                        'text-red-600': passwordStrength.level === 'weak',\r
                        'text-yellow-600': passwordStrength.level === 'medium',\r
                        'text-green-600': passwordStrength.level === 'strong' || passwordStrength.level === 'very-strong'\r
                      }">\r
                  {{ passwordStrength.level }}\r
                </span>\r
              </div>\r
              <div class="w-full bg-gray-200 rounded-full h-2">\r
                <div class="h-2 rounded-full transition-all duration-300"\r
                     [style.width.%]="passwordStrength.percentage"\r
                     [ngClass]="{\r
                       'bg-red-500': passwordStrength.level === 'weak',\r
                       'bg-yellow-500': passwordStrength.level === 'medium',\r
                       'bg-green-500': passwordStrength.level === 'strong' || passwordStrength.level === 'very-strong'\r
                     }">\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <!-- Password Requirements -->\r
            <div *ngIf="showPasswordRequirements && registerForm.get('password')?.value" class="mt-3 p-3 bg-gray-50 rounded-lg">\r
              <p class="text-xs font-medium text-gray-700 mb-2">Password must contain:</p>\r
              <ul class="space-y-1">\r
                <li class="text-xs flex items-center"\r
                    [ngClass]="getPasswordRequirements().minLength ? 'text-green-600' : 'text-gray-500'">\r
                  <span class="mr-2">{{ getPasswordRequirements().minLength ? '\u2713' : '\u25CB' }}</span>\r
                  At least 8 characters\r
                </li>\r
                <li class="text-xs flex items-center"\r
                    [ngClass]="getPasswordRequirements().hasUpperCase ? 'text-green-600' : 'text-gray-500'">\r
                  <span class="mr-2">{{ getPasswordRequirements().hasUpperCase ? '\u2713' : '\u25CB' }}</span>\r
                  One uppercase letter (A-Z)\r
                </li>\r
                <li class="text-xs flex items-center"\r
                    [ngClass]="getPasswordRequirements().hasLowerCase ? 'text-green-600' : 'text-gray-500'">\r
                  <span class="mr-2">{{ getPasswordRequirements().hasLowerCase ? '\u2713' : '\u25CB' }}</span>\r
                  One lowercase letter (a-z)\r
                </li>\r
                <li class="text-xs flex items-center"\r
                    [ngClass]="getPasswordRequirements().hasNumber ? 'text-green-600' : 'text-gray-500'">\r
                  <span class="mr-2">{{ getPasswordRequirements().hasNumber ? '\u2713' : '\u25CB' }}</span>\r
                  One number (0-9)\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
\r
          <div>\r
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>\r
            <div class="relative">\r
              <input\r
                id="password_confirmation"\r
                [type]="showConfirmPassword ? 'text' : 'password'"\r
                formControlName="password_confirmation"\r
                placeholder="Confirm your password"\r
                class="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"\r
                [class.border-red-300]="registerForm.get('password_confirmation')?.invalid && registerForm.get('password_confirmation')?.touched"\r
                required>\r
              <button\r
                type="button"\r
                (click)="toggleConfirmPasswordVisibility()"\r
                class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600">\r
                <svg *ngIf="!showConfirmPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                </svg>\r
                <svg *ngIf="showConfirmPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>\r
                </svg>\r
              </button>\r
            </div>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/auth/register/register.component.ts", lineNumber: 19 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-2JYY5XOP.js.map
