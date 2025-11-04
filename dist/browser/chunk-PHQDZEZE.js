import {
  ToastService
} from "./chunk-7NKQIE52.js";
import {
  AsyncPipe,
  NgClass,
  NgForOf,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SCVX3V3B.js";

// src/app/shared/components/toast/toast.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "bg-green-50 border border-green-200": a0, "bg-red-50 border border-red-200": a1, "bg-yellow-50 border border-yellow-200": a2, "bg-blue-50 border border-blue-200": a3 });
var _c1 = (a0, a1, a2, a3) => ({ "text-green-800": a0, "text-red-800": a1, "text-yellow-800": a2, "text-blue-800": a3 });
var _c2 = (a0, a1, a2, a3) => ({ "text-green-600": a0, "text-red-600": a1, "text-yellow-600": a2, "text-blue-600": a3 });
function ToastComponent_div_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "path", 14);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, ToastComponent_div_1__svg_svg_2_Template, 2, 0, "svg", 4)(3, ToastComponent_div_1__svg_svg_3_Template, 2, 0, "svg", 5)(4, ToastComponent_div_1__svg_svg_4_Template, 2, 0, "svg", 6)(5, ToastComponent_div_1__svg_svg_5_Template, 2, 0, "svg", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8)(7, "p", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function ToastComponent_div_1_Template_button_click_9_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.remove(toast_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 11);
    \u0275\u0275element(11, "path", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(8, _c0, toast_r2.type === "success", toast_r2.type === "error", toast_r2.type === "warning", toast_r2.type === "info"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", toast_r2.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(13, _c1, toast_r2.type === "success", toast_r2.type === "error", toast_r2.type === "warning", toast_r2.type === "info"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(18, _c2, toast_r2.type === "success", toast_r2.type === "error", toast_r2.type === "warning", toast_r2.type === "info"));
  }
}
var ToastComponent = class _ToastComponent {
  toastService;
  toasts$;
  constructor(toastService) {
    this.toastService = toastService;
    this.toasts$ = toastService.toasts$;
  }
  ngOnInit() {
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 3, vars: 3, consts: [[1, "fixed", "top-4", "right-4", "z-50", "space-y-2", "w-96"], ["class", "transform transition-all duration-300 ease-in-out rounded-lg shadow-lg p-4 flex items-start gap-3", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "transform", "transition-all", "duration-300", "ease-in-out", "rounded-lg", "shadow-lg", "p-4", "flex", "items-start", "gap-3", 3, "ngClass"], [1, "flex-shrink-0"], ["class", "w-5 h-5 text-green-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-5 h-5 text-red-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-5 h-5 text-yellow-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-5 h-5 text-blue-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "flex-1", 3, "ngClass"], [1, "text-sm", "font-medium"], [1, "flex-shrink-0", "rounded-md", "p-1", "hover:bg-black", "hover:bg-opacity-5", "transition-colors", 3, "click", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-yellow-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ToastComponent_div_1_Template, 12, 23, "div", 1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx.toasts$));
    }
  }, dependencies: [NgForOf, NgIf, NgClass, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", standalone: true, imports: [NgForOf, NgIf, NgClass, AsyncPipe], template: `
    <div class="fixed top-4 right-4 z-50 space-y-2 w-96">
      <div *ngFor="let toast of toasts$ | async"
           class="transform transition-all duration-300 ease-in-out rounded-lg shadow-lg p-4 flex items-start gap-3"
           [ngClass]="{
             'bg-green-50 border border-green-200': toast.type === 'success',
             'bg-red-50 border border-red-200': toast.type === 'error',
             'bg-yellow-50 border border-yellow-200': toast.type === 'warning',
             'bg-blue-50 border border-blue-200': toast.type === 'info'
           }">
        <!-- Icon -->
        <div class="flex-shrink-0">
          <!-- Success Icon -->
          <svg *ngIf="toast.type === 'success'" class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          
          <!-- Error Icon -->
          <svg *ngIf="toast.type === 'error'" class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          
          <!-- Warning Icon -->
          <svg *ngIf="toast.type === 'warning'" class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          
          <!-- Info Icon -->
          <svg *ngIf="toast.type === 'info'" class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>

        <!-- Message -->
        <div class="flex-1"
             [ngClass]="{
               'text-green-800': toast.type === 'success',
               'text-red-800': toast.type === 'error',
               'text-yellow-800': toast.type === 'warning',
               'text-blue-800': toast.type === 'info'
             }">
          <p class="text-sm font-medium">{{ toast.message }}</p>
        </div>

        <!-- Close Button -->
        <button (click)="toastService.remove(toast.id)"
                class="flex-shrink-0 rounded-md p-1 hover:bg-black hover:bg-opacity-5 transition-colors"
                [ngClass]="{
                  'text-green-600': toast.type === 'success',
                  'text-red-600': toast.type === 'error',
                  'text-yellow-600': toast.type === 'warning',
                  'text-blue-600': toast.type === 'info'
                }">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;219558ef63f119a92210704329b58a3cdceaa4fb296db559e672f74512827dc7;D:/laragon-2025/www/assetGo-backend/assetGo-frontend/src/app/shared/components/toast/toast.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], () => [{ type: ToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/shared/components/toast/toast.component.ts", lineNumber: 76 });
})();

export {
  ToastComponent
};
//# sourceMappingURL=chunk-PHQDZEZE.js.map
