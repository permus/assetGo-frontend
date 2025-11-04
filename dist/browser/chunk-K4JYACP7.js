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
  Validators,
  ɵNgNoValidate
} from "./chunk-ISERUI2H.js";
import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  Router
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  CommonModule,
  HttpClient,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SCVX3V3B.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/profile/services/profile.service.ts
var ProfileService = class _ProfileService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`);
  }
  updateProfile(data) {
    return this.http.put(`${this.apiUrl}/profile`, data);
  }
  changePassword(data) {
    return this.http.post(`${this.apiUrl}/change-password`, data);
  }
  uploadAvatar(file) {
    const formData = new FormData();
    formData.append("avatar", file);
    return this.http.post(`${this.apiUrl}/profile/avatar`, formData);
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/profile/components/profile-form/profile-form.component.ts
function ProfileFormComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function ProfileFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("first_name"), " ");
  }
}
function ProfileFormComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("last_name"), " ");
  }
}
function ProfileFormComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function ProfileFormComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
var ProfileFormComponent = class _ProfileFormComponent {
  fb;
  profileService;
  userProfile = null;
  profileUpdated = new EventEmitter();
  destroy$ = new Subject();
  profileForm;
  loading = false;
  error = "";
  constructor(fb, profileService) {
    this.fb = fb;
    this.profileService = profileService;
    this.profileForm = this.fb.group({
      first_name: ["", [Validators.required, Validators.maxLength(255)]],
      last_name: ["", [Validators.required, Validators.maxLength(255)]],
      email: ["", [Validators.required, Validators.email, Validators.maxLength(255)]],
      user_type: [""]
      // Keep for display only, not for updating
    });
  }
  ngOnInit() {
    if (this.userProfile) {
      this.populateForm();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  populateForm() {
    if (this.userProfile) {
      this.profileForm.patchValue({
        first_name: this.userProfile.first_name || "",
        last_name: this.userProfile.last_name || "",
        email: this.userProfile.email || "",
        user_type: this.userProfile.user_type || ""
      });
    }
  }
  onSubmit() {
    if (this.profileForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    const updateData = {
      first_name: this.profileForm.get("first_name")?.value,
      last_name: this.profileForm.get("last_name")?.value,
      email: this.profileForm.get("email")?.value
    };
    this.profileService.updateProfile(updateData).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.profileUpdated.emit(response.data.user);
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || "Failed to update profile";
        this.loading = false;
      }
    });
  }
  markFormGroupTouched() {
    Object.keys(this.profileForm.controls).forEach((key) => {
      const control = this.profileForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const control = this.profileForm.get(fieldName);
    if (!control || !control.errors || !control.touched)
      return "";
    if (control.errors["required"])
      return `${fieldName} is required`;
    if (control.errors["email"])
      return "Please enter a valid email address";
    if (control.errors["maxlength"])
      return `${fieldName} is too long`;
    return "Invalid input";
  }
  hasFieldError(fieldName) {
    const control = this.profileForm.get(fieldName);
    return !!(control && control.errors && control.touched);
  }
  static \u0275fac = function ProfileFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProfileService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileFormComponent, selectors: [["app-profile-form"]], inputs: { userProfile: "userProfile" }, outputs: { profileUpdated: "profileUpdated" }, decls: 35, vars: 16, consts: [[1, "profile-form-card"], [1, "profile-form", 3, "ngSubmit", "formGroup"], ["class", "form-error", 4, "ngIf"], [1, "form-grid"], [1, "form-group"], ["for", "first_name", 1, "form-label"], [1, "required"], ["id", "first_name", "type", "text", "formControlName", "first_name", "placeholder", "Enter your first name", 1, "form-input"], ["class", "field-error", 4, "ngIf"], ["for", "last_name", 1, "form-label"], ["id", "last_name", "type", "text", "formControlName", "last_name", "placeholder", "Enter your last name", 1, "form-input"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter your email address", 1, "form-input"], ["for", "user_type", 1, "form-label"], ["id", "user_type", "type", "text", "formControlName", "user_type", "readonly", "", 1, "form-input"], [1, "form-help"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-error"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "error-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "field-error"], [1, "loading-spinner"]], template: function ProfileFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function ProfileFormComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(2, ProfileFormComponent_div_2_Template, 4, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "label", 5);
      \u0275\u0275text(6, " First Name ");
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "input", 7);
      \u0275\u0275template(10, ProfileFormComponent_div_10_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 4)(12, "label", 9);
      \u0275\u0275text(13, " Last Name ");
      \u0275\u0275elementStart(14, "span", 6);
      \u0275\u0275text(15, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "input", 10);
      \u0275\u0275template(17, ProfileFormComponent_div_17_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 4)(19, "label", 11);
      \u0275\u0275text(20, " Email Address ");
      \u0275\u0275elementStart(21, "span", 6);
      \u0275\u0275text(22, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "input", 12);
      \u0275\u0275template(24, ProfileFormComponent_div_24_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 4)(26, "label", 13);
      \u0275\u0275text(27, "User Type");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 14);
      \u0275\u0275elementStart(29, "div", 15);
      \u0275\u0275text(30, " Your user type is managed by your administrator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 16)(32, "button", 17);
      \u0275\u0275template(33, ProfileFormComponent_span_33_Template, 1, 0, "span", 18);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("error", ctx.hasFieldError("first_name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("first_name"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ctx.hasFieldError("last_name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("last_name"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ctx.hasFieldError("email"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("email"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("error", ctx.hasFieldError("user_type"));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading || ctx.profileForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Updating..." : "Update Profile", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.profile-form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.profile-form[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  color: #dc2626;\n  font-size: 14px;\n}\n.form-error[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #374151;\n  margin: 0;\n}\n.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-left: 2px;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s ease-in-out;\n  background-color: #ffffff;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input[_ngcontent-%COMP%]:read-only {\n  background-color: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-input.error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc2626;\n  margin-top: 4px;\n}\n.form-help[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  border: none;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=profile-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileFormComponent, [{
    type: Component,
    args: [{ selector: "app-profile-form", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="profile-form-card">\r
  <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="profile-form">\r
    <!-- Error Message -->\r
    <div *ngIf="error" class="form-error">\r
      <svg class="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
      {{ error }}\r
    </div>\r
\r
    <div class="form-grid">\r
      <!-- First Name -->\r
      <div class="form-group">\r
        <label for="first_name" class="form-label">\r
          First Name <span class="required">*</span>\r
        </label>\r
        <input\r
          id="first_name"\r
          type="text"\r
          formControlName="first_name"\r
          class="form-input"\r
          [class.error]="hasFieldError('first_name')"\r
          placeholder="Enter your first name">\r
        <div *ngIf="hasFieldError('first_name')" class="field-error">\r
          {{ getFieldError('first_name') }}\r
        </div>\r
      </div>\r
\r
      <!-- Last Name -->\r
      <div class="form-group">\r
        <label for="last_name" class="form-label">\r
          Last Name <span class="required">*</span>\r
        </label>\r
        <input\r
          id="last_name"\r
          type="text"\r
          formControlName="last_name"\r
          class="form-input"\r
          [class.error]="hasFieldError('last_name')"\r
          placeholder="Enter your last name">\r
        <div *ngIf="hasFieldError('last_name')" class="field-error">\r
          {{ getFieldError('last_name') }}\r
        </div>\r
      </div>\r
\r
      <!-- Email -->\r
      <div class="form-group">\r
        <label for="email" class="form-label">\r
          Email Address <span class="required">*</span>\r
        </label>\r
        <input\r
          id="email"\r
          type="email"\r
          formControlName="email"\r
          class="form-input"\r
          [class.error]="hasFieldError('email')"\r
          placeholder="Enter your email address">\r
        <div *ngIf="hasFieldError('email')" class="field-error">\r
          {{ getFieldError('email') }}\r
        </div>\r
      </div>\r
\r
      <!-- User Type (Read-only) -->\r
      <div class="form-group">\r
        <label for="user_type" class="form-label">User Type</label>\r
        <input\r
          id="user_type"\r
          type="text"\r
          formControlName="user_type"\r
          class="form-input"\r
          readonly\r
          [class.error]="hasFieldError('user_type')">\r
        <div class="form-help">\r
          Your user type is managed by your administrator\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Submit Button -->\r
    <div class="form-actions">\r
      <button\r
        type="submit"\r
        class="btn btn-primary"\r
        [disabled]="loading || profileForm.invalid">\r
        <span *ngIf="loading" class="loading-spinner"></span>\r
        {{ loading ? 'Updating...' : 'Update Profile' }}\r
      </button>\r
    </div>\r
  </form>\r
</div>\r
`, styles: ["/* src/app/profile/components/profile-form/profile-form.component.scss */\n.profile-form-card {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.profile-form {\n  padding: 24px;\n}\n.form-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  color: #dc2626;\n  font-size: 14px;\n}\n.form-error .error-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .form-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-label {\n  font-weight: 500;\n  font-size: 14px;\n  color: #374151;\n  margin: 0;\n}\n.form-label .required {\n  color: #dc2626;\n  margin-left: 2px;\n}\n.form-input {\n  padding: 12px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s ease-in-out;\n  background-color: #ffffff;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input:read-only {\n  background-color: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-input.error {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-input::placeholder {\n  color: #9ca3af;\n}\n.field-error {\n  font-size: 12px;\n  color: #dc2626;\n  margin-top: 4px;\n}\n.form-help {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.form-actions {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  border: none;\n  text-decoration: none;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.btn-primary:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);\n}\n.loading-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=profile-form.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ProfileService }], { userProfile: [{
    type: Input
  }], profileUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileFormComponent, { className: "ProfileFormComponent", filePath: "src/app/profile/components/profile-form/profile-form.component.ts", lineNumber: 14 });
})();

// src/app/profile/components/password-change-form/password-change-form.component.ts
function PasswordChangeFormComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function PasswordChangeFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("current_password"), " ");
  }
}
function PasswordChangeFormComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("password"), " ");
  }
}
function PasswordChangeFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("password_confirmation"), " ");
  }
}
function PasswordChangeFormComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
var PasswordChangeFormComponent = class _PasswordChangeFormComponent {
  fb;
  profileService;
  passwordChanged = new EventEmitter();
  destroy$ = new Subject();
  passwordForm;
  loading = false;
  error = "";
  constructor(fb, profileService) {
    this.fb = fb;
    this.profileService = profileService;
    this.passwordForm = this.fb.group({
      current_password: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      password_confirmation: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  passwordMatchValidator(form) {
    const password = form.get("password");
    const passwordConfirmation = form.get("password_confirmation");
    if (password && passwordConfirmation && password.value !== passwordConfirmation.value) {
      passwordConfirmation.setErrors({ passwordMismatch: true });
    } else if (passwordConfirmation && passwordConfirmation.errors && passwordConfirmation.errors["passwordMismatch"]) {
      delete passwordConfirmation.errors["passwordMismatch"];
      if (Object.keys(passwordConfirmation.errors).length === 0) {
        passwordConfirmation.setErrors(null);
      }
    }
    return null;
  }
  onSubmit() {
    if (this.passwordForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    const changeData = {
      current_password: this.passwordForm.get("current_password")?.value,
      password: this.passwordForm.get("password")?.value,
      password_confirmation: this.passwordForm.get("password_confirmation")?.value
    };
    this.profileService.changePassword(changeData).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.passwordForm.reset();
          this.passwordChanged.emit();
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || "Failed to change password";
        this.loading = false;
      }
    });
  }
  markFormGroupTouched() {
    Object.keys(this.passwordForm.controls).forEach((key) => {
      const control = this.passwordForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const control = this.passwordForm.get(fieldName);
    if (!control || !control.errors || !control.touched)
      return "";
    if (control.errors["required"])
      return `${fieldName} is required`;
    if (control.errors["minlength"])
      return "Password must be at least 8 characters";
    if (control.errors["passwordMismatch"])
      return "Passwords do not match";
    return "Invalid input";
  }
  hasFieldError(fieldName) {
    const control = this.passwordForm.get(fieldName);
    return !!(control && control.errors && control.touched);
  }
  static \u0275fac = function PasswordChangeFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordChangeFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProfileService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordChangeFormComponent, selectors: [["app-password-change-form"]], outputs: { passwordChanged: "passwordChanged" }, decls: 31, vars: 14, consts: [[1, "password-form-card"], [1, "password-form", 3, "ngSubmit", "formGroup"], ["class", "form-error", 4, "ngIf"], [1, "form-grid"], [1, "form-group"], ["for", "current_password", 1, "form-label"], [1, "required"], ["id", "current_password", "type", "password", "formControlName", "current_password", "placeholder", "Enter your current password", 1, "form-input"], ["class", "field-error", 4, "ngIf"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Enter your new password", 1, "form-input"], [1, "form-help"], ["for", "password_confirmation", 1, "form-label"], ["id", "password_confirmation", "type", "password", "formControlName", "password_confirmation", "placeholder", "Confirm your new password", 1, "form-input"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-error"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "error-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "field-error"], [1, "loading-spinner"]], template: function PasswordChangeFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function PasswordChangeFormComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(2, PasswordChangeFormComponent_div_2_Template, 4, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "label", 5);
      \u0275\u0275text(6, " Current Password ");
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "input", 7);
      \u0275\u0275template(10, PasswordChangeFormComponent_div_10_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 4)(12, "label", 9);
      \u0275\u0275text(13, " New Password ");
      \u0275\u0275elementStart(14, "span", 6);
      \u0275\u0275text(15, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "input", 10);
      \u0275\u0275template(17, PasswordChangeFormComponent_div_17_Template, 2, 1, "div", 8);
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275text(19, " Password must be at least 8 characters long ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 4)(21, "label", 12);
      \u0275\u0275text(22, " Confirm New Password ");
      \u0275\u0275elementStart(23, "span", 6);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "input", 13);
      \u0275\u0275template(26, PasswordChangeFormComponent_div_26_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 14)(28, "button", 15);
      \u0275\u0275template(29, PasswordChangeFormComponent_span_29_Template, 1, 0, "span", 16);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.passwordForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("error", ctx.hasFieldError("current_password"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("current_password"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ctx.hasFieldError("password"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("password"));
      \u0275\u0275advance(8);
      \u0275\u0275classProp("error", ctx.hasFieldError("password_confirmation"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("password_confirmation"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading || ctx.passwordForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Changing..." : "Change Password", " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.password-form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.password-form[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  color: #dc2626;\n  font-size: 14px;\n}\n.form-error[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]:last-child {\n  grid-column: 1/-1;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: #374151;\n  margin: 0;\n}\n.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-left: 2px;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s ease-in-out;\n  background-color: #ffffff;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc2626;\n  margin-top: 4px;\n}\n.form-help[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  border: none;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=password-change-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordChangeFormComponent, [{
    type: Component,
    args: [{ selector: "app-password-change-form", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="password-form-card">\r
  <form [formGroup]="passwordForm" (ngSubmit)="onSubmit()" class="password-form">\r
    <!-- Error Message -->\r
    <div *ngIf="error" class="form-error">\r
      <svg class="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
      {{ error }}\r
    </div>\r
\r
    <div class="form-grid">\r
      <!-- Current Password -->\r
      <div class="form-group">\r
        <label for="current_password" class="form-label">\r
          Current Password <span class="required">*</span>\r
        </label>\r
        <input\r
          id="current_password"\r
          type="password"\r
          formControlName="current_password"\r
          class="form-input"\r
          [class.error]="hasFieldError('current_password')"\r
          placeholder="Enter your current password">\r
        <div *ngIf="hasFieldError('current_password')" class="field-error">\r
          {{ getFieldError('current_password') }}\r
        </div>\r
      </div>\r
\r
      <!-- New Password -->\r
      <div class="form-group">\r
        <label for="password" class="form-label">\r
          New Password <span class="required">*</span>\r
        </label>\r
        <input\r
          id="password"\r
          type="password"\r
          formControlName="password"\r
          class="form-input"\r
          [class.error]="hasFieldError('password')"\r
          placeholder="Enter your new password">\r
        <div *ngIf="hasFieldError('password')" class="field-error">\r
          {{ getFieldError('password') }}\r
        </div>\r
        <div class="form-help">\r
          Password must be at least 8 characters long\r
        </div>\r
      </div>\r
\r
      <!-- Confirm New Password -->\r
      <div class="form-group">\r
        <label for="password_confirmation" class="form-label">\r
          Confirm New Password <span class="required">*</span>\r
        </label>\r
        <input\r
          id="password_confirmation"\r
          type="password"\r
          formControlName="password_confirmation"\r
          class="form-input"\r
          [class.error]="hasFieldError('password_confirmation')"\r
          placeholder="Confirm your new password">\r
        <div *ngIf="hasFieldError('password_confirmation')" class="field-error">\r
          {{ getFieldError('password_confirmation') }}\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Submit Button -->\r
    <div class="form-actions">\r
      <button\r
        type="submit"\r
        class="btn btn-primary"\r
        [disabled]="loading || passwordForm.invalid">\r
        <span *ngIf="loading" class="loading-spinner"></span>\r
        {{ loading ? 'Changing...' : 'Change Password' }}\r
      </button>\r
    </div>\r
  </form>\r
</div>\r
`, styles: ["/* src/app/profile/components/password-change-form/password-change-form.component.scss */\n.password-form-card {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.password-form {\n  padding: 24px;\n}\n.form-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  color: #dc2626;\n  font-size: 14px;\n}\n.form-error .error-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .form-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group:last-child {\n  grid-column: 1/-1;\n}\n.form-label {\n  font-weight: 500;\n  font-size: 14px;\n  color: #374151;\n  margin: 0;\n}\n.form-label .required {\n  color: #dc2626;\n  margin-left: 2px;\n}\n.form-input {\n  padding: 12px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s ease-in-out;\n  background-color: #ffffff;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-input::placeholder {\n  color: #9ca3af;\n}\n.field-error {\n  font-size: 12px;\n  color: #dc2626;\n  margin-top: 4px;\n}\n.form-help {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.form-actions {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  border: none;\n  text-decoration: none;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.btn-primary:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);\n}\n.loading-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=password-change-form.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ProfileService }], { passwordChanged: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordChangeFormComponent, { className: "PasswordChangeFormComponent", filePath: "src/app/profile/components/password-change-form/password-change-form.component.ts", lineNumber: 14 });
})();

// src/app/profile/components/avatar-upload/avatar-upload.component.ts
function AvatarUploadComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.previewUrl || (ctx_r1.userProfile == null ? null : ctx_r1.userProfile.avatar_url), \u0275\u0275sanitizeUrl);
  }
}
function AvatarUploadComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getUserInitials(), " ");
  }
}
function AvatarUploadComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function AvatarUploadComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAvatar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Remove ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function AvatarUploadComponent_div_19__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 27);
    \u0275\u0275element(1, "circle", 28)(2, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function AvatarUploadComponent_div_19__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function AvatarUploadComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24);
    \u0275\u0275listener("click", function AvatarUploadComponent_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uploadAvatar());
    });
    \u0275\u0275template(2, AvatarUploadComponent_div_19__svg_svg_2_Template, 3, 0, "svg", 25)(3, AvatarUploadComponent_div_19__svg_svg_3_Template, 2, 0, "svg", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canUpload);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Uploading..." : "Save Picture", " ");
  }
}
function AvatarUploadComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
var AvatarUploadComponent = class _AvatarUploadComponent {
  profileService;
  authService;
  userProfile = null;
  avatarUpdated = new EventEmitter();
  destroy$ = new Subject();
  loading = false;
  error = "";
  previewUrl = null;
  selectedFile = null;
  constructor(profileService, authService) {
    this.profileService = profileService;
    this.authService = authService;
  }
  ngOnInit() {
    if (this.userProfile?.avatar_url) {
      this.previewUrl = this.userProfile.avatar_url;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (!file.type.startsWith("image/")) {
        this.error = "Please select an image file";
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        this.error = "File size must be less than 2MB";
        return;
      }
      this.selectedFile = file;
      this.error = "";
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
  uploadAvatar() {
    if (!this.selectedFile) {
      this.error = "Please select a file first";
      return;
    }
    this.loading = true;
    this.error = "";
    this.profileService.uploadAvatar(this.selectedFile).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          if (this.userProfile) {
            const updatedProfile = __spreadProps(__spreadValues({}, this.userProfile), {
              avatar_url: response.data.avatar_url,
              avatar: response.data.avatar_path
            });
            this.authService.updateCurrentUser(updatedProfile);
            this.avatarUpdated.emit(response.data.avatar_url);
          }
          this.selectedFile = null;
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || "Failed to upload avatar";
        this.loading = false;
      }
    });
  }
  removeAvatar() {
    this.previewUrl = null;
    this.selectedFile = null;
    this.error = "";
  }
  getUserInitials() {
    if (!this.userProfile)
      return "U";
    const firstInitial = this.userProfile.first_name?.charAt(0) || "";
    const lastInitial = this.userProfile.last_name?.charAt(0) || "";
    return (firstInitial + lastInitial).toUpperCase() || "U";
  }
  get hasFile() {
    return !!this.selectedFile;
  }
  get canUpload() {
    return this.hasFile && !this.loading;
  }
  static \u0275fac = function AvatarUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarUploadComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvatarUploadComponent, selectors: [["app-avatar-upload"]], inputs: { userProfile: "userProfile" }, outputs: { avatarUpdated: "avatarUpdated" }, decls: 26, vars: 9, consts: [["fileInput", ""], [1, "avatar-upload"], [1, "avatar-section"], [1, "section-title"], [1, "section-description"], [1, "avatar-container"], [1, "avatar-display"], [1, "avatar-circle"], ["alt", "Profile Picture", "class", "avatar-image", 3, "src", 4, "ngIf"], ["class", "avatar-initials", 4, "ngIf"], [1, "avatar-controls"], ["type", "file", "id", "avatar-input", "accept", "image/*", 1, "file-input", 3, "change"], ["type", "button", 1, "upload-button", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "button-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], ["type", "button", "class", "remove-button", 3, "disabled", "click", 4, "ngIf"], ["class", "upload-actions", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "help-text"], ["alt", "Profile Picture", 1, "avatar-image", 3, "src"], [1, "avatar-initials"], ["type", "button", 1, "remove-button", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "upload-actions"], ["type", "button", 1, "save-button", 3, "click", "disabled"], ["class", "button-icon animate-spin", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "button-icon", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", 1, "button-icon", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "error-message"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "error-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"]], template: function AvatarUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
      \u0275\u0275text(3, "Profile Picture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275text(5, "Upload a profile picture to personalize your account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275template(9, AvatarUploadComponent_img_9_Template, 1, 1, "img", 8)(10, AvatarUploadComponent_div_10_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "input", 11, 0);
      \u0275\u0275listener("change", function AvatarUploadComponent_Template_input_change_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 12);
      \u0275\u0275listener("click", function AvatarUploadComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r3 = \u0275\u0275reference(13);
        return \u0275\u0275resetView(fileInput_r3.click());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 13);
      \u0275\u0275element(16, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, AvatarUploadComponent_button_18_Template, 4, 1, "button", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, AvatarUploadComponent_div_19_Template, 5, 4, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, AvatarUploadComponent_div_20_Template, 4, 1, "div", 17);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 18)(22, "p");
      \u0275\u0275text(23, "Supported formats: JPEG, PNG, JPG, GIF, SVG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "Maximum file size: 2MB");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275classProp("has-avatar", ctx.previewUrl || (ctx.userProfile == null ? null : ctx.userProfile.avatar_url));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewUrl || (ctx.userProfile == null ? null : ctx.userProfile.avatar_url));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.previewUrl && !(ctx.userProfile == null ? null : ctx.userProfile.avatar_url));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Uploading..." : ctx.hasFile ? "Change Picture" : "Upload Picture", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.avatar-upload[_ngcontent-%COMP%]   .avatar-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  border: 1px solid #e5e7eb;\n}\n.avatar-upload[_ngcontent-%COMP%]   .avatar-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 8px 0;\n}\n.avatar-upload[_ngcontent-%COMP%]   .avatar-section[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 24px 0;\n}\n.avatar-upload[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n.avatar-upload[_ngcontent-%COMP%]   .avatar-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.avatar-upload[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid #e5e7eb;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.avatar-upload[_ngcontent-%COMP%]   .avatar-circle.has-avatar[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.avatar-upload[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.avatar-upload[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 600;\n  color: #6b7280;\n}\n.avatar-upload[_ngcontent-%COMP%]   .avatar-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n}\n.avatar-upload[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.avatar-upload[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%], \n.avatar-upload[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  border: 1px solid;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.avatar-upload[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%]:disabled, \n.avatar-upload[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.avatar-upload[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.avatar-upload[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.avatar-upload[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  background: white;\n  color: #dc2626;\n  border-color: #dc2626;\n}\n.avatar-upload[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fef2f2;\n}\n.avatar-upload[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.avatar-upload[_ngcontent-%COMP%]   .button-icon.animate-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.avatar-upload[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.avatar-upload[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: #10b981;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.avatar-upload[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.avatar-upload[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #059669;\n}\n.avatar-upload[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 14px;\n  margin-top: 16px;\n}\n.avatar-upload[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.avatar-upload[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.avatar-upload[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 4px 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .avatar-upload[_ngcontent-%COMP%]   .avatar-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .avatar-upload[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .avatar-upload[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .avatar-upload[_ngcontent-%COMP%]   .avatar-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .avatar-upload[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%], \n   .avatar-upload[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=avatar-upload.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarUploadComponent, [{
    type: Component,
    args: [{ selector: "app-avatar-upload", standalone: true, imports: [CommonModule], template: `<div class="avatar-upload">\r
  <div class="avatar-section">\r
    <h3 class="section-title">Profile Picture</h3>\r
    <p class="section-description">Upload a profile picture to personalize your account</p>\r
    \r
    <div class="avatar-container">\r
      <!-- Current Avatar Display -->\r
      <div class="avatar-display">\r
        <div class="avatar-circle" [class.has-avatar]="previewUrl || userProfile?.avatar_url">\r
          <img \r
            *ngIf="previewUrl || userProfile?.avatar_url" \r
            [src]="previewUrl || userProfile?.avatar_url" \r
            alt="Profile Picture"\r
            class="avatar-image">\r
          <div \r
            *ngIf="!previewUrl && !userProfile?.avatar_url" \r
            class="avatar-initials">\r
            {{ getUserInitials() }}\r
          </div>\r
        </div>\r
        \r
        <!-- Upload Controls -->\r
        <div class="avatar-controls">\r
          <input\r
            type="file"\r
            id="avatar-input"\r
            accept="image/*"\r
            (change)="onFileSelected($event)"\r
            class="file-input"\r
            #fileInput>\r
          \r
          <button\r
            type="button"\r
            class="upload-button"\r
            (click)="fileInput.click()"\r
            [disabled]="loading">\r
            <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" \r
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>\r
            </svg>\r
            {{ loading ? 'Uploading...' : (hasFile ? 'Change Picture' : 'Upload Picture') }}\r
          </button>\r
          \r
          <button\r
            *ngIf="hasFile"\r
            type="button"\r
            class="remove-button"\r
            (click)="removeAvatar()"\r
            [disabled]="loading">\r
            <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" \r
                    d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
            Remove\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <!-- Upload Actions -->\r
      <div *ngIf="hasFile" class="upload-actions">\r
        <button\r
          type="button"\r
          class="save-button"\r
          (click)="uploadAvatar()"\r
          [disabled]="!canUpload">\r
          <svg *ngIf="loading" class="button-icon animate-spin" fill="none" viewBox="0 0 24 24">\r
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
          </svg>\r
          <svg *ngIf="!loading" class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" \r
                  d="M5 13l4 4L19 7"></path>\r
          </svg>\r
          {{ loading ? 'Uploading...' : 'Save Picture' }}\r
        </button>\r
      </div>\r
    </div>\r
    \r
    <!-- Error Message -->\r
    <div *ngIf="error" class="error-message">\r
      <svg class="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" \r
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
      {{ error }}\r
    </div>\r
    \r
    <!-- Help Text -->\r
    <div class="help-text">\r
      <p>Supported formats: JPEG, PNG, JPG, GIF, SVG</p>\r
      <p>Maximum file size: 2MB</p>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/profile/components/avatar-upload/avatar-upload.component.scss */\n.avatar-upload .avatar-section {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  border: 1px solid #e5e7eb;\n}\n.avatar-upload .avatar-section .section-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 8px 0;\n}\n.avatar-upload .avatar-section .section-description {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 24px 0;\n}\n.avatar-upload .avatar-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n.avatar-upload .avatar-display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.avatar-upload .avatar-circle {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid #e5e7eb;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.avatar-upload .avatar-circle.has-avatar {\n  border-color: #3b82f6;\n}\n.avatar-upload .avatar-circle .avatar-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.avatar-upload .avatar-circle .avatar-initials {\n  font-size: 36px;\n  font-weight: 600;\n  color: #6b7280;\n}\n.avatar-upload .avatar-controls {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n}\n.avatar-upload .file-input {\n  display: none;\n}\n.avatar-upload .upload-button,\n.avatar-upload .remove-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  border: 1px solid;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.avatar-upload .upload-button:disabled,\n.avatar-upload .remove-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.avatar-upload .upload-button {\n  background: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.avatar-upload .upload-button:hover:not(:disabled) {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.avatar-upload .remove-button {\n  background: white;\n  color: #dc2626;\n  border-color: #dc2626;\n}\n.avatar-upload .remove-button:hover:not(:disabled) {\n  background: #fef2f2;\n}\n.avatar-upload .button-icon {\n  width: 16px;\n  height: 16px;\n}\n.avatar-upload .button-icon.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.avatar-upload .upload-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.avatar-upload .save-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: #10b981;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.avatar-upload .save-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.avatar-upload .save-button:hover:not(:disabled) {\n  background: #059669;\n}\n.avatar-upload .error-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 14px;\n  margin-top: 16px;\n}\n.avatar-upload .error-message .error-icon {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.avatar-upload .help-text {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.avatar-upload .help-text p {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 4px 0;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .avatar-upload .avatar-section {\n    padding: 16px;\n  }\n  .avatar-upload .avatar-circle {\n    width: 100px;\n    height: 100px;\n  }\n  .avatar-upload .avatar-circle .avatar-initials {\n    font-size: 28px;\n  }\n  .avatar-upload .avatar-controls {\n    flex-direction: column;\n    width: 100%;\n  }\n  .avatar-upload .upload-button,\n  .avatar-upload .remove-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=avatar-upload.component.css.map */\n"] }]
  }], () => [{ type: ProfileService }, { type: AuthService }], { userProfile: [{
    type: Input
  }], avatarUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvatarUploadComponent, { className: "AvatarUploadComponent", filePath: "src/app/profile/components/avatar-upload/avatar-upload.component.ts", lineNumber: 14 });
})();

// src/app/profile/pages/profile.page.ts
function ProfilePage_img_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.userProfile.avatar_url, \u0275\u0275sanitizeUrl)("alt", ctx_r0.userProfile.first_name + " " + ctx_r0.userProfile.last_name);
  }
}
function ProfilePage_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getUserInitials());
  }
}
function ProfilePage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ProfilePage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function ProfilePage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading profile information...");
    \u0275\u0275elementEnd()();
  }
}
function ProfilePage_div_21_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h2", 36);
    \u0275\u0275text(3, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 37);
    \u0275\u0275text(5, "Update your personal details and contact information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-avatar-upload", 38);
    \u0275\u0275listener("avatarUpdated", function ProfilePage_div_21_div_11_Template_app_avatar_upload_avatarUpdated_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onAvatarUpdated($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-profile-form", 39);
    \u0275\u0275listener("profileUpdated", function ProfilePage_div_21_div_11_Template_app_profile_form_profileUpdated_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onProfileUpdated($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("userProfile", ctx_r0.userProfile);
    \u0275\u0275advance();
    \u0275\u0275property("userProfile", ctx_r0.userProfile);
  }
}
function ProfilePage_div_21_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h2", 36);
    \u0275\u0275text(3, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 37);
    \u0275\u0275text(5, "Update your password to keep your account secure");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-password-change-form", 40);
    \u0275\u0275listener("passwordChanged", function ProfilePage_div_21_div_12_Template_app_password_change_form_passwordChanged_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPasswordChanged());
    });
    \u0275\u0275elementEnd()();
  }
}
function ProfilePage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "button", 28);
    \u0275\u0275listener("click", function ProfilePage_div_21_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setActiveTab("profile"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 29);
    \u0275\u0275element(4, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Personal Information ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 28);
    \u0275\u0275listener("click", function ProfilePage_div_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setActiveTab("password"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 29);
    \u0275\u0275element(8, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Change Password ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 32);
    \u0275\u0275template(11, ProfilePage_div_21_div_11_Template, 8, 2, "div", 33)(12, ProfilePage_div_21_div_12_Template, 7, 0, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab === "profile");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r0.activeTab === "password");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "profile");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "password");
  }
}
var ProfilePage = class _ProfilePage {
  profileService;
  authService;
  router;
  destroy$ = new Subject();
  userProfile = null;
  loading = false;
  error = "";
  successMessage = "";
  activeTab = "profile";
  constructor(profileService, authService, router) {
    this.profileService = profileService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.loadProfile();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadProfile() {
    this.loading = true;
    this.error = "";
    this.profileService.getProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.userProfile = response.data.user;
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = "Failed to load profile information";
        this.loading = false;
        console.error("Profile load error:", error);
      }
    });
  }
  getUserInitials() {
    if (!this.userProfile)
      return "U";
    const firstInitial = this.userProfile.first_name?.charAt(0) || "";
    const lastInitial = this.userProfile.last_name?.charAt(0) || "";
    return (firstInitial + lastInitial).toUpperCase() || "U";
  }
  onProfileUpdated(updatedProfile) {
    this.userProfile = updatedProfile;
    this.authService.updateCurrentUser(updatedProfile);
    this.showSuccessMessage("Profile updated successfully");
  }
  onPasswordChanged() {
    this.showSuccessMessage("Password changed successfully");
  }
  onAvatarUpdated(avatarUrl) {
    this.showSuccessMessage("Avatar updated successfully");
  }
  showSuccessMessage(message) {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = "";
    }, 5e3);
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    this.error = "";
    this.successMessage = "";
  }
  static \u0275fac = function ProfilePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfilePage)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePage, selectors: [["app-profile"]], decls: 22, vars: 9, consts: [[1, "profile-page"], [1, "page-header"], [1, "header-content"], [1, "header-left"], [1, "page-title"], [1, "page-subtitle"], [1, "header-right"], [1, "user-avatar"], [1, "avatar-circle"], ["class", "avatar-image", 3, "src", "alt", 4, "ngIf"], [4, "ngIf"], [1, "avatar-info"], [1, "user-name"], [1, "user-email"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "profile-content", 4, "ngIf"], [1, "avatar-image", 3, "src", "alt"], [1, "alert", "alert-success"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "alert-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "alert", "alert-error"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "loading-state"], [1, "loading-spinner"], [1, "profile-content"], [1, "tab-navigation"], [1, "tab-button", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "tab-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z"], [1, "tab-content"], ["class", "tab-panel", 4, "ngIf"], [1, "tab-panel"], [1, "panel-header"], [1, "panel-title"], [1, "panel-subtitle"], [3, "avatarUpdated", "userProfile"], [3, "profileUpdated", "userProfile"], [3, "passwordChanged"]], template: function ProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, "Profile Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Manage your account information and password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275template(11, ProfilePage_img_11_Template, 1, 2, "img", 9)(12, ProfilePage_span_12_Template, 2, 1, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(18, ProfilePage_div_18_Template, 4, 1, "div", 14)(19, ProfilePage_div_19_Template, 4, 1, "div", 15)(20, ProfilePage_div_20_Template, 4, 0, "div", 16)(21, ProfilePage_div_21_Template, 13, 6, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.userProfile == null ? null : ctx.userProfile.avatar_url);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.userProfile == null ? null : ctx.userProfile.avatar_url));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.userProfile == null ? null : ctx.userProfile.first_name, " ", ctx.userProfile == null ? null : ctx.userProfile.last_name, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userProfile == null ? null : ctx.userProfile.email);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.userProfile);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, ProfileFormComponent, PasswordChangeFormComponent, AvatarUploadComponent], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f9fafb;\n  padding: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 32px;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 24px;\n  }\n}\n.header-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n@media (max-width: 768px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n.header-right[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background-color: #f3f4f6;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 600;\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-circle[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.avatar-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.2;\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.2;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.alert[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 24px;\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 16px;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.profile-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.tab-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n@media (max-width: 768px) {\n  .tab-navigation[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px;\n  background: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  position: relative;\n}\n.tab-button[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #f3f4f6;\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  background-color: white;\n  border-bottom: 2px solid #3b82f6;\n}\n.tab-button[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .tab-button[_ngcontent-%COMP%] {\n    justify-content: center;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .tab-button.active[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #e5e7eb;\n    border-right: 2px solid #3b82f6;\n  }\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 32px;\n  min-height: 400px;\n}\n@media (max-width: 768px) {\n  .tab-content[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n.tab-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.panel-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=profile.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilePage, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, ReactiveFormsModule, ProfileFormComponent, PasswordChangeFormComponent, AvatarUploadComponent], template: `<div class="profile-page">\r
  <!-- Header -->\r
  <div class="page-header">\r
    <div class="header-content">\r
      <div class="header-left">\r
        <h1 class="page-title">Profile Settings</h1>\r
        <p class="page-subtitle">Manage your account information and password</p>\r
      </div>\r
      \r
      <!-- User Avatar -->\r
      <div class="header-right">\r
        <div class="user-avatar">\r
          <div class="avatar-circle">\r
            <img \r
              *ngIf="userProfile?.avatar_url" \r
              [src]="userProfile.avatar_url" \r
              [alt]="userProfile.first_name + ' ' + userProfile.last_name"\r
              class="avatar-image">\r
            <span *ngIf="!userProfile?.avatar_url">{{ getUserInitials() }}</span>\r
          </div>\r
          <div class="avatar-info">\r
            <div class="user-name">{{ userProfile?.first_name }} {{ userProfile?.last_name }}</div>\r
            <div class="user-email">{{ userProfile?.email }}</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Success/Error Messages -->\r
  <div *ngIf="successMessage" class="alert alert-success">\r
    <svg class="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
    </svg>\r
    {{ successMessage }}\r
  </div>\r
\r
  <div *ngIf="error" class="alert alert-error">\r
    <svg class="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
    </svg>\r
    {{ error }}\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Loading profile information...</p>\r
  </div>\r
\r
  <!-- Main Content -->\r
  <div *ngIf="!loading && userProfile" class="profile-content">\r
    <!-- Tab Navigation -->\r
    <div class="tab-navigation">\r
      <button \r
        class="tab-button" \r
        [class.active]="activeTab === 'profile'"\r
        (click)="setActiveTab('profile')">\r
        <svg class="tab-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
        </svg>\r
        Personal Information\r
      </button>\r
      \r
      <button \r
        class="tab-button" \r
        [class.active]="activeTab === 'password'"\r
        (click)="setActiveTab('password')">\r
        <svg class="tab-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z"></path>\r
        </svg>\r
        Change Password\r
      </button>\r
    </div>\r
\r
    <!-- Tab Content -->\r
    <div class="tab-content">\r
      <!-- Personal Information Tab -->\r
      <div *ngIf="activeTab === 'profile'" class="tab-panel">\r
        <div class="panel-header">\r
          <h2 class="panel-title">Personal Information</h2>\r
          <p class="panel-subtitle">Update your personal details and contact information</p>\r
        </div>\r
        \r
        <!-- Avatar Upload Section -->\r
        <app-avatar-upload \r
          [userProfile]="userProfile"\r
          (avatarUpdated)="onAvatarUpdated($event)">\r
        </app-avatar-upload>\r
\r
        <!-- Profile Form Section -->\r
        <app-profile-form \r
          [userProfile]="userProfile"\r
          (profileUpdated)="onProfileUpdated($event)">\r
        </app-profile-form>\r
      </div>\r
\r
      <!-- Change Password Tab -->\r
      <div *ngIf="activeTab === 'password'" class="tab-panel">\r
        <div class="panel-header">\r
          <h2 class="panel-title">Change Password</h2>\r
          <p class="panel-subtitle">Update your password to keep your account secure</p>\r
        </div>\r
        \r
        <app-password-change-form \r
          (passwordChanged)="onPasswordChanged()">\r
        </app-password-change-form>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/profile/pages/profile.page.scss */\n.profile-page {\n  min-height: 100vh;\n  background-color: #f9fafb;\n  padding: 24px;\n}\n.page-header {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 32px;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .header-content {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 24px;\n  }\n}\n.header-left {\n  flex: 1;\n}\n.page-title {\n  font-size: 32px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n@media (max-width: 768px) {\n  .page-title {\n    font-size: 24px;\n  }\n}\n.page-subtitle {\n  font-size: 16px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n.header-right {\n  flex-shrink: 0;\n}\n.user-avatar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  background-color: #f3f4f6;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.avatar-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 600;\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-circle .avatar-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.avatar-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-name {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.2;\n}\n.user-email {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.2;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.alert .alert-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.alert.alert-success {\n  background-color: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n.alert.alert-error {\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 24px;\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.loading-state .loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state p {\n  color: #6b7280;\n  font-size: 16px;\n  margin: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.profile-content {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.tab-navigation {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n@media (max-width: 768px) {\n  .tab-navigation {\n    flex-direction: column;\n  }\n}\n.tab-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px;\n  background: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  position: relative;\n}\n.tab-button:hover {\n  color: #374151;\n  background-color: #f3f4f6;\n}\n.tab-button.active {\n  color: #3b82f6;\n  background-color: white;\n  border-bottom: 2px solid #3b82f6;\n}\n.tab-button .tab-icon {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .tab-button {\n    justify-content: center;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .tab-button.active {\n    border-bottom: 1px solid #e5e7eb;\n    border-right: 2px solid #3b82f6;\n  }\n}\n.tab-content {\n  padding: 32px;\n  min-height: 400px;\n}\n@media (max-width: 768px) {\n  .tab-content {\n    padding: 24px;\n  }\n}\n.tab-panel {\n  animation: fadeIn 0.3s ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.panel-header {\n  margin-bottom: 32px;\n}\n.panel-title {\n  font-size: 24px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.panel-subtitle {\n  font-size: 16px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=profile.page.css.map */\n"] }]
  }], () => [{ type: ProfileService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePage, { className: "ProfilePage", filePath: "src/app/profile/pages/profile.page.ts", lineNumber: 19 });
})();
export {
  ProfilePage
};
//# sourceMappingURL=chunk-K4JYACP7.js.map
