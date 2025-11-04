import {
  AuthService
} from "./chunk-BGMQUXYP.js";
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
  ɵɵtextInterpolate
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

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
export {
  ActivateAccountComponent
};
//# sourceMappingURL=chunk-G5MJIFBD.js.map
