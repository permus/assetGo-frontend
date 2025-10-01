import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-2SLRX53P.js";
import {
  GlobalDropdownComponent
} from "./chunk-A4NIVATF.js";
import {
  RoleService
} from "./chunk-27ZNUS37.js";
import {
  TeamService,
  WorkOrderService
} from "./chunk-SASXSQOM.js";
import "./chunk-NM3PRJXP.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FSOYXA4J.js";
import {
  RouterModule
} from "./chunk-E2GGJA5S.js";
import {
  environment
} from "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  NgForOf,
  NgIf
} from "./chunk-MMJF4Y5E.js";
import {
  Component,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  map,
  setClassMetadata,
  shareReplay,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YUR5IGOK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/teams/components/team-delete-confirmation-modal/team-delete-confirmation-modal.component.ts
var TeamDeleteConfirmationModalComponent = class _TeamDeleteConfirmationModalComponent {
  teamMember = null;
  cancelled = new EventEmitter();
  confirmed = new EventEmitter();
  deleteReason = "";
  onClose() {
    this.cancelled.emit();
  }
  onConfirmDelete() {
    if (this.teamMember) {
      this.confirmed.emit({
        teamId: this.teamMember.id,
        reason: this.deleteReason.trim()
      });
    }
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
  static \u0275fac = function TeamDeleteConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamDeleteConfirmationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamDeleteConfirmationModalComponent, selectors: [["app-team-delete-confirmation-modal"]], inputs: { teamMember: "teamMember" }, outputs: { cancelled: "cancelled", confirmed: "confirmed" }, decls: 40, vars: 3, consts: [[1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", 3, "click"], [1, "relative", "mx-auto", "p-6", "w-[500px]", "rounded-lg", "bg-white"], [1, "mt-3"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-red-600", "mr-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "focus:outline-none", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mb-6"], ["for", "deleteReason", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "deleteReason", "rows", "4", "placeholder", "Enter reason for removing this team member...", 1, "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "focus:border-red-500", "sm:text-sm", 3, "ngModelChange", "ngModel"], [1, "mt-1", "text-xs", "text-gray-500"], [1, "text-center", "mb-6"], [1, "mx-auto", "flex", "items-center", "justify-center", "h-16", "w-16", "rounded-full", "bg-red-100", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-8", "w-8", "text-red-600"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-600", "mb-4"], [1, "bg-red-50", "border", "border-red-200", "rounded-md", "p-4", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-400", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "text-sm", "font-medium", "text-red-800"], [1, "flex", "justify-end", "space-x-3"], [1, "inline-flex", "justify-center", "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-md", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-gray-500", "transition-colors", 3, "click"], [1, "inline-flex", "justify-center", "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-red-600", "border", "border-transparent", "rounded-md", "hover:bg-red-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-red-500", "transition-colors", 3, "click"]], template: function TeamDeleteConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function TeamDeleteConfirmationModalComponent_Template_div_click_0_listener($event) {
        return ctx.onBackdropClick($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h3", 7);
      \u0275\u0275text(8, "Remove Team Member");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function TeamDeleteConfirmationModalComponent_Template_button_click_9_listener() {
        return ctx.onClose();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "path", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 11)(13, "label", 12);
      \u0275\u0275text(14, " Deletion Reason (Optional) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "textarea", 13);
      \u0275\u0275twoWayListener("ngModelChange", function TeamDeleteConfirmationModalComponent_Template_textarea_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.deleteReason, $event) || (ctx.deleteReason = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 14);
      \u0275\u0275text(17, "This will be recorded in the audit trail.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 15)(19, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 17);
      \u0275\u0275element(21, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "h3", 18);
      \u0275\u0275text(23, " Are you sure you want to remove ");
      \u0275\u0275elementStart(24, "strong");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, "? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 19);
      \u0275\u0275text(28, " This action cannot be undone. The team member will be permanently removed from the system. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 20)(30, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 21);
      \u0275\u0275element(32, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "span", 23);
      \u0275\u0275text(34, " Warning: This action will permanently remove the team member and all associated data. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 24)(36, "button", 25);
      \u0275\u0275listener("click", function TeamDeleteConfirmationModalComponent_Template_button_click_36_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(37, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 26);
      \u0275\u0275listener("click", function TeamDeleteConfirmationModalComponent_Template_button_click_38_listener() {
        return ctx.onConfirmDelete();
      });
      \u0275\u0275text(39, " Remove Member ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.deleteReason);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate2('"', ctx.teamMember == null ? null : ctx.teamMember.first_name, " ", ctx.teamMember == null ? null : ctx.teamMember.last_name, '"');
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=team-delete-confirmation-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamDeleteConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-team-delete-confirmation-modal", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50" (click)="onBackdropClick($event)">\r\n  <div class="relative mx-auto p-6  w-[500px] rounded-lg bg-white">\r\n    <div class="mt-3">\r\n      <!-- Header -->\r\n      <div class="flex items-center justify-between mb-6">\r\n        <div class="flex items-center">\r\n          <svg class="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r\n          </svg>\r\n          <h3 class="text-xl font-semibold text-gray-900">Remove Team Member</h3>\r\n        </div>\r\n        <button\r\n          (click)="onClose()"\r\n          class="text-gray-400 hover:text-gray-600 focus:outline-none">\r\n          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- Deletion Reason Section -->\r\n      <div class="mb-6">\r\n        <label for="deleteReason" class="block text-sm font-medium text-gray-700 mb-2">\r\n          Deletion Reason (Optional)\r\n        </label>\r\n        <textarea\r\n          id="deleteReason"\r\n          [(ngModel)]="deleteReason"\r\n          rows="4"\r\n          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"\r\n          placeholder="Enter reason for removing this team member..."></textarea>\r\n        <p class="mt-1 text-xs text-gray-500">This will be recorded in the audit trail.</p>\r\n      </div>\r\n\r\n      <!-- Confirmation Section -->\r\n      <div class="text-center mb-6">\r\n        <!-- Large Trash Icon -->\r\n        <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">\r\n          <svg class="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r\n          </svg>\r\n        </div>\r\n\r\n        <!-- Confirmation Question -->\r\n        <h3 class="text-lg font-medium text-gray-900 mb-2">\r\n          Are you sure you want to remove <strong>"{{ teamMember?.first_name }} {{ teamMember?.last_name }}"</strong>?\r\n        </h3>\r\n        \r\n        <!-- Warning Message -->\r\n        <p class="text-sm text-gray-600 mb-4">\r\n          This action cannot be undone. The team member will be permanently removed from the system.\r\n        </p>\r\n\r\n        <!-- Important Warning Box -->\r\n        <div class="bg-red-50 border border-red-200 rounded-md p-4 mb-4">\r\n          <div class="flex items-center">\r\n            <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n            </svg>\r\n            <span class="text-sm font-medium text-red-800">\r\n              Warning: This action will permanently remove the team member and all associated data.\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Actions -->\r\n      <div class="flex justify-end space-x-3">\r\n        <button\r\n          (click)="onClose()"\r\n          class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">\r\n          Cancel\r\n        </button>\r\n        <button\r\n          (click)="onConfirmDelete()"\r\n          class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">\r\n          Remove Member\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/teams/components/team-delete-confirmation-modal/team-delete-confirmation-modal.component.scss */\n.modal-backdrop {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-content {\n  animation: slideIn 0.3s ease-out;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=team-delete-confirmation-modal.component.css.map */\n"] }]
  }], null, { teamMember: [{
    type: Input
  }], cancelled: [{
    type: Output
  }], confirmed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamDeleteConfirmationModalComponent, { className: "TeamDeleteConfirmationModalComponent", filePath: "src/app/teams/components/team-delete-confirmation-modal/team-delete-confirmation-modal.component.ts", lineNumber: 13 });
})();

// src/app/locations/services/location-tree.service.ts
var LocationTreeService = class _LocationTreeService {
  http;
  cache$;
  apiUrl = `${environment.apiUrl}/locations-hierarchy`;
  constructor(http) {
    this.http = http;
  }
  getTree() {
    if (!this.cache$) {
      this.cache$ = this.http.get(this.apiUrl).pipe(map((res) => res.data.hierarchy), shareReplay(1));
    }
    return this.cache$;
  }
  clearCache() {
    this.cache$ = void 0;
  }
  static \u0275fac = function LocationTreeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocationTreeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocationTreeService, factory: _LocationTreeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationTreeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/teams/components/team-form-modal/team-form-modal.component.ts
function TeamFormModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function TeamFormModalComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("first_name"), " ");
  }
}
function TeamFormModalComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("last_name"), " ");
  }
}
function TeamFormModalComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function TeamFormModalComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275property("value", role_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r2.name, " ");
  }
}
function TeamFormModalComponent_p_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("role_id"), " ");
  }
}
function TeamFormModalComponent_p_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.rolesError, " ");
  }
}
function TeamFormModalComponent_div_36_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, "Loading locations...");
    \u0275\u0275elementEnd();
  }
}
function TeamFormModalComponent_div_36_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.treeError);
  }
}
function TeamFormModalComponent_div_36_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "ng-select", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.flatLocationOptions)("multiple", true)("closeOnSelect", false)("searchable", true);
  }
}
function TeamFormModalComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41);
    \u0275\u0275text(3, "Location Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function TeamFormModalComponent_div_36_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearSelection());
    });
    \u0275\u0275text(5, "Clear selection (Full access)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275element(7, "input", 44);
    \u0275\u0275elementStart(8, "label", 45);
    \u0275\u0275text(9, "Include descendants (recommended)");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, TeamFormModalComponent_div_36_div_10_Template, 2, 0, "div", 46)(11, TeamFormModalComponent_div_36_div_11_Template, 2, 1, "div", 47)(12, TeamFormModalComponent_div_36_div_12_Template, 2, 4, "div", 48);
    \u0275\u0275elementStart(13, "p", 49);
    \u0275\u0275text(14, "No selection means full access to all locations.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.loadingTree);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.treeError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingTree && !ctx_r0.treeError);
  }
}
function TeamFormModalComponent_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("hourly_rate"), " ");
  }
}
function TeamFormModalComponent__svg_svg_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "circle", 54)(2, "path", 55);
    \u0275\u0275elementEnd();
  }
}
var TeamFormModalComponent = class _TeamFormModalComponent {
  fb;
  teamService;
  roleService;
  locationTreeService;
  teamMember = null;
  isEditMode = false;
  teamMemberSaved = new EventEmitter();
  cancelled = new EventEmitter();
  teamMemberForm;
  loading = false;
  error = "";
  availableRoles = [];
  loadingRoles = false;
  rolesError = "";
  // Location scoping state
  locationTree = [];
  loadingTree = false;
  treeError = "";
  expandDescendants = true;
  flatLocationOptions = [];
  constructor(fb, teamService, roleService, locationTreeService) {
    this.fb = fb;
    this.teamService = teamService;
    this.roleService = roleService;
    this.locationTreeService = locationTreeService;
    this.teamMemberForm = this.fb.group({
      first_name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      last_name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ["", [Validators.required, Validators.email]],
      role_id: ["", [Validators.required]],
      hourly_rate: [null, [Validators.min(0)]],
      location_ids: [[]],
      expand_descendants: [true]
    });
    this.loadAvailableRoles();
  }
  ngOnInit() {
    if (this.teamMember && this.isEditMode) {
      this.teamService.getTeamMember(this.teamMember.id).subscribe({
        next: (resp) => {
          this.teamMember = resp.data;
          this.loadTeamMember();
        },
        error: () => {
          this.loadTeamMember();
        }
      });
    }
    this.teamMemberForm.get("role_id")?.valueChanges.subscribe((roleId) => {
      const role = this.availableRoles.find((r) => r.id === Number(roleId));
      if (role && role.has_location_access) {
        this.ensureTreeLoaded();
        if (this.isEditMode && this.teamMember && Array.isArray(this.teamMember.locations)) {
          const assignedIds = this.teamMember.locations.map((l) => l.id);
          if (assignedIds.length > 0 && this.teamMember.has_full_location_access === false) {
            this.teamMemberForm.patchValue({ location_ids: assignedIds });
          }
        }
      } else {
        this.teamMemberForm.patchValue({ location_ids: [] });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["teamMember"] && changes["teamMember"].currentValue && this.isEditMode) {
      if (this.availableRoles.length > 0) {
        this.loadTeamMember();
      } else {
        setTimeout(() => {
          if (this.availableRoles.length > 0) {
            this.loadTeamMember();
          }
        }, 100);
      }
    }
  }
  // Method to manually update form when needed
  updateFormWithTeamMember() {
    if (this.teamMember && this.isEditMode && this.availableRoles.length > 0) {
      this.loadTeamMember();
    }
  }
  loadAvailableRoles() {
    this.loadingRoles = true;
    this.rolesError = "";
    this.roleService.getRoles().subscribe({
      next: (response) => {
        this.availableRoles = response.data || [];
        this.loadingRoles = false;
        console.log("Available roles loaded:", this.availableRoles);
        if (this.isEditMode && this.teamMember) {
          this.loadTeamMember();
        }
      },
      error: (error) => {
        console.error("Error loading available roles:", error);
        this.teamService.getAvailableRoles().subscribe({
          next: (response) => {
            this.availableRoles = response.data || [];
            this.loadingRoles = false;
            console.log("Available roles loaded (fallback):", this.availableRoles);
            if (this.isEditMode && this.teamMember) {
              this.loadTeamMember();
            }
          },
          error: (fallbackError) => {
            console.error("Fallback also failed:", fallbackError);
            this.rolesError = "Failed to load roles. Please try again.";
            this.loadingRoles = false;
          }
        });
      }
    });
  }
  loadTeamMember() {
    if (this.teamMember) {
      console.log("Loading team member data:", this.teamMember);
      const roleId = this.teamMember.role_id || this.teamMember.role?.id || (Array.isArray(this.teamMember.roles) ? this.teamMember.roles[0]?.id : void 0);
      const hourlyRate = this.teamMember.hourly_rate;
      console.log("Role ID:", roleId, "Type:", typeof roleId);
      console.log("Hourly Rate:", hourlyRate, "Type:", typeof hourlyRate);
      const roleIdNumber = roleId ? Number(roleId) : "";
      this.teamMemberForm.patchValue({
        first_name: this.teamMember.first_name,
        last_name: this.teamMember.last_name,
        email: this.teamMember.email,
        role_id: roleIdNumber,
        hourly_rate: hourlyRate !== void 0 && hourlyRate !== null ? Number(hourlyRate) : null,
        expand_descendants: true
      });
      const role = this.availableRoles.find((r) => r.id === Number(roleIdNumber));
      if (role && role.has_location_access) {
        this.ensureTreeLoaded();
        const assigned = Array.isArray(this.teamMember.locations) ? this.teamMember.locations.map((l) => l.id) : [];
        if (assigned.length > 0 && this.teamMember.has_full_location_access === false) {
          this.teamMemberForm.patchValue({ location_ids: assigned });
        } else {
          this.teamMemberForm.patchValue({ location_ids: [] });
        }
      }
      console.log("Form values after patch:", this.teamMemberForm.value);
      console.log("Available roles:", this.availableRoles);
    }
  }
  // Close dropdown when clicking outside
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
  onSubmit() {
    if (this.teamMemberForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.loading = true;
    this.error = "";
    const formData = __spreadValues({}, this.teamMemberForm.value);
    formData.location_ids = formData.location_ids && formData.location_ids.length > 0 ? formData.location_ids : null;
    if (formData.expand_descendants === void 0 || formData.expand_descendants === null) {
      formData.expand_descendants = true;
    }
    if (this.isEditMode && this.teamMember) {
      this.teamService.updateTeamMember(this.teamMember.id, formData).subscribe({
        next: (response) => {
          this.loading = false;
          this.teamMemberSaved.emit(response.data);
        },
        error: (error) => {
          this.loading = false;
          this.error = error.error?.message || "Failed to update team member. Please try again.";
        }
      });
    } else {
      this.teamService.createTeamMember(formData).subscribe({
        next: (response) => {
          this.loading = false;
          this.teamMemberSaved.emit(response.data);
        },
        error: (error) => {
          this.loading = false;
          this.error = error.error?.message || "Failed to create team member. Please try again.";
        }
      });
    }
  }
  onCancel() {
    this.cancelled.emit();
  }
  getFieldError(fieldName) {
    const field = this.teamMemberForm.get(fieldName);
    if (field?.invalid && (field?.dirty || field?.touched)) {
      if (field?.errors?.["required"]) {
        return `${this.getFieldLabel(fieldName)} is required.`;
      }
      if (field?.errors?.["email"]) {
        return "Please enter a valid email address.";
      }
      if (field?.errors?.["minlength"]) {
        return `${this.getFieldLabel(fieldName)} must be at least ${field.errors["minlength"].requiredLength} characters.`;
      }
      if (field?.errors?.["maxlength"]) {
        return `${this.getFieldLabel(fieldName)} must not exceed ${field.errors["maxlength"].requiredLength} characters.`;
      }
      if (field?.errors?.["min"]) {
        return `${this.getFieldLabel(fieldName)} must be at least ${field.errors["min"].min}.`;
      }
    }
    return "";
  }
  getFieldLabel(fieldName) {
    const labels = {
      first_name: "First name",
      last_name: "Last name",
      email: "Email",
      role_id: "Team role",
      hourly_rate: "Hourly rate"
    };
    return labels[fieldName] || fieldName;
  }
  markFormGroupTouched() {
    Object.keys(this.teamMemberForm.controls).forEach((key) => {
      const control = this.teamMemberForm.get(key);
      control?.markAsTouched();
    });
  }
  // UI helpers for location tree
  get selectedRole() {
    const roleId = this.teamMemberForm.get("role_id")?.value;
    return this.availableRoles.find((r) => r.id === Number(roleId));
  }
  get showLocationScope() {
    return !!this.selectedRole?.has_location_access;
  }
  ensureTreeLoaded() {
    if (this.locationTree.length > 0 || this.loadingTree)
      return;
    this.loadingTree = true;
    this.treeError = "";
    this.locationTreeService.getTree().subscribe({
      next: (nodes) => {
        this.locationTree = nodes;
        this.flatLocationOptions = this.flatten(nodes);
        this.loadingTree = false;
      },
      error: (err) => {
        this.treeError = "Failed to load locations tree.";
        this.loadingTree = false;
      }
    });
  }
  isChecked(id) {
    const selected = this.teamMemberForm.get("location_ids")?.value || [];
    return selected.includes(id);
  }
  toggleNode(node, checked) {
    const control = this.teamMemberForm.get("location_ids");
    const selected = [...control?.value || []];
    const affected = this.collectIds(node);
    if (checked) {
      affected.forEach((id) => {
        if (!selected.includes(id))
          selected.push(id);
      });
    } else {
      affected.forEach((id) => {
        const idx = selected.indexOf(id);
        if (idx >= 0)
          selected.splice(idx, 1);
      });
    }
    control?.setValue(selected);
  }
  clearSelection() {
    this.teamMemberForm.patchValue({ location_ids: [] });
  }
  collectIds(node) {
    const ids = [node.id];
    if (node.children && node.children.length) {
      node.children.forEach((c) => ids.push(...this.collectIds(c)));
    }
    return ids;
  }
  flatten(nodes, depth = 0, acc = []) {
    for (const n of nodes) {
      acc.push({ id: n.id, label: `${"\u2014 ".repeat(depth)}${n.name}` });
      if (n.children?.length) {
        this.flatten(n.children, depth + 1, acc);
      }
    }
    return acc;
  }
  static \u0275fac = function TeamFormModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamFormModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TeamService), \u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(LocationTreeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamFormModalComponent, selectors: [["app-team-form-modal"]], inputs: { teamMember: "teamMember", isEditMode: "isEditMode" }, outputs: { teamMemberSaved: "teamMemberSaved", cancelled: "cancelled" }, features: [\u0275\u0275NgOnChangesFeature], decls: 50, vars: 24, consts: [[1, "modal-overlay", "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", 3, "click"], [1, "bg-white", "rounded-xl", "shadow-2xl", "w-full", "max-w-md", "mx-4", "transform", "transition-all"], [1, "px-6", "py-4", "border-b", "border-gray-200"], [1, "flex", "items-center", "justify-between"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "px-6", "py-4"], [3, "ngSubmit", "formGroup"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "mb-4"], ["for", "first_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "first_name", "type", "text", "formControlName", "first_name", "placeholder", "Enter first name", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], ["class", "mt-1 text-sm text-red-600", 4, "ngIf"], ["for", "last_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "last_name", "type", "text", "formControlName", "last_name", "placeholder", "Enter last name", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter email address", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], ["for", "role_id", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "role_id", "formControlName", "role_id", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mb-4 border rounded-lg p-3 bg-gray-50", 4, "ngIf"], [1, "mb-6"], ["for", "hourly_rate", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "hourly_rate", "type", "number", "formControlName", "hourly_rate", "placeholder", "Enter hourly rate", "min", "0", "step", "0.01", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], [1, "mt-1", "text-xs", "text-gray-500"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-200"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-colors", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-blue-600", "border", "border-transparent", "rounded-lg", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white inline", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "flex"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-400", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "ml-2", "text-sm", "text-red-700"], [1, "mt-1", "text-sm", "text-red-600"], [3, "value"], [1, "mb-4", "border", "rounded-lg", "p-3", "bg-gray-50"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-medium", "text-gray-800"], ["type", "button", 1, "text-sm", "text-blue-600", "hover:underline", 3, "click"], [1, "flex", "items-center", "mb-3"], ["type", "checkbox", "id", "expand_descendants", "formControlName", "expand_descendants", 1, "mr-2"], ["for", "expand_descendants", 1, "text-sm", "text-gray-700"], ["class", "text-sm text-gray-500", 4, "ngIf"], ["class", "text-sm text-red-600", 4, "ngIf"], [4, "ngIf"], [1, "mt-2", "text-xs", "text-gray-500"], [1, "text-sm", "text-gray-500"], [1, "text-sm", "text-red-600"], ["bindLabel", "label", "bindValue", "id", "placeholder", "Select locations (empty = full access)", "formControlName", "location_ids", 3, "items", "multiple", "closeOnSelect", "searchable"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white", "inline"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function TeamFormModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function TeamFormModalComponent_Template_div_click_0_listener($event) {
        return ctx.onBackdropClick($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function TeamFormModalComponent_Template_button_click_6_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 6);
      \u0275\u0275element(8, "path", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 8)(10, "form", 9);
      \u0275\u0275listener("ngSubmit", function TeamFormModalComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(11, TeamFormModalComponent_div_11_Template, 6, 1, "div", 10);
      \u0275\u0275elementStart(12, "div", 11)(13, "label", 12);
      \u0275\u0275text(14, " First Name * ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 13);
      \u0275\u0275template(16, TeamFormModalComponent_p_16_Template, 2, 1, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "label", 15);
      \u0275\u0275text(19, " Last Name * ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 16);
      \u0275\u0275template(21, TeamFormModalComponent_p_21_Template, 2, 1, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "label", 17);
      \u0275\u0275text(24, " Email * ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 18);
      \u0275\u0275template(26, TeamFormModalComponent_p_26_Template, 2, 1, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "label", 19);
      \u0275\u0275text(29, " Team Role * ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "select", 20)(31, "option", 21);
      \u0275\u0275text(32, "Select a role");
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, TeamFormModalComponent_option_33_Template, 2, 2, "option", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, TeamFormModalComponent_p_34_Template, 2, 1, "p", 14)(35, TeamFormModalComponent_p_35_Template, 2, 1, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, TeamFormModalComponent_div_36_Template, 15, 3, "div", 23);
      \u0275\u0275elementStart(37, "div", 24)(38, "label", 25);
      \u0275\u0275text(39, " Hourly Rate (Optional) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 26);
      \u0275\u0275template(41, TeamFormModalComponent_p_41_Template, 2, 1, "p", 14);
      \u0275\u0275elementStart(42, "p", 27);
      \u0275\u0275text(43, " Optional hourly rate for this team member ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 28)(45, "button", 29);
      \u0275\u0275listener("click", function TeamFormModalComponent_Template_button_click_45_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(46, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 30);
      \u0275\u0275template(48, TeamFormModalComponent__svg_svg_48_Template, 3, 0, "svg", 31);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_5_0;
      let tmp_7_0;
      let tmp_9_0;
      let tmp_14_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit Team Member" : "Invite New Team Member", " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.teamMemberForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-300", ((tmp_3_0 = ctx.teamMemberForm.get("first_name")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.teamMemberForm.get("first_name")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.teamMemberForm.get("first_name")) == null ? null : tmp_3_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("first_name"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-300", ((tmp_5_0 = ctx.teamMemberForm.get("last_name")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.teamMemberForm.get("last_name")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.teamMemberForm.get("last_name")) == null ? null : tmp_5_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("last_name"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-300", ((tmp_7_0 = ctx.teamMemberForm.get("email")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.teamMemberForm.get("email")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.teamMemberForm.get("email")) == null ? null : tmp_7_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("email"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-300", ((tmp_9_0 = ctx.teamMemberForm.get("role_id")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = ctx.teamMemberForm.get("role_id")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.teamMemberForm.get("role_id")) == null ? null : tmp_9_0.touched)));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.availableRoles);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("role_id"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.rolesError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLocationScope);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-300", ((tmp_14_0 = ctx.teamMemberForm.get("hourly_rate")) == null ? null : tmp_14_0.invalid) && (((tmp_14_0 = ctx.teamMemberForm.get("hourly_rate")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx.teamMemberForm.get("hourly_rate")) == null ? null : tmp_14_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("hourly_rate"));
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.teamMemberForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Team Member" : "Send Invitation", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormsModule, NgSelectModule, NgSelectComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-enter[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.9);\n}\n.modal-enter-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out;\n}\n.modal-exit[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.modal-exit-active[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 0.2s ease-in, transform 0.2s ease-in;\n}\n.backdrop-enter[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.backdrop-enter-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.2s ease-out;\n}\n.backdrop-exit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.backdrop-exit-active[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.2s ease-in;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\nbutton[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: translateY(-1px);\n  transition: transform 0.1s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n/*# sourceMappingURL=team-form-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamFormModalComponent, [{
    type: Component,
    args: [{ selector: "app-team-form-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule], template: `<!-- Modal Backdrop -->\r
  <div class="modal-overlay fixed inset-0 bg-[#00000085] flex items-center justify-center z-50" (click)="onBackdropClick($event)">\r
  <!-- Modal Content -->\r
  <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 transform transition-all">\r
    <!-- Modal Header -->\r
    <div class="px-6 py-4 border-b border-gray-200">\r
      <div class="flex items-center justify-between">\r
        <h3 class="text-lg font-semibold text-gray-900">\r
          {{ isEditMode ? 'Edit Team Member' : 'Invite New Team Member' }}\r
        </h3>\r
        <button\r
          (click)="onCancel()"\r
          class="text-gray-400 hover:text-gray-600 transition-colors">\r
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="px-6 py-4">\r
      <form [formGroup]="teamMemberForm" (ngSubmit)="onSubmit()">\r
        <!-- Error Message -->\r
        <div *ngIf="error" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
          <div class="flex">\r
            <svg class="w-5 h-5 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
            <p class="ml-2 text-sm text-red-700">{{ error }}</p>\r
          </div>\r
        </div>\r
\r
        <!-- First Name -->\r
        <div class="mb-4">\r
          <label for="first_name" class="block text-sm font-medium text-gray-700 mb-2">\r
            First Name *\r
          </label>\r
          <input\r
            id="first_name"\r
            type="text"\r
            formControlName="first_name"\r
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"\r
            placeholder="Enter first name"\r
            [class.border-red-300]="teamMemberForm.get('first_name')?.invalid && (teamMemberForm.get('first_name')?.dirty || teamMemberForm.get('first_name')?.touched)">\r
          <p *ngIf="getFieldError('first_name')" class="mt-1 text-sm text-red-600">\r
            {{ getFieldError('first_name') }}\r
          </p>\r
        </div>\r
\r
        <!-- Last Name -->\r
        <div class="mb-4">\r
          <label for="last_name" class="block text-sm font-medium text-gray-700 mb-2">\r
            Last Name *\r
          </label>\r
          <input\r
            id="last_name"\r
            type="text"\r
            formControlName="last_name"\r
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"\r
            placeholder="Enter last name"\r
            [class.border-red-300]="teamMemberForm.get('last_name')?.invalid && (teamMemberForm.get('last_name')?.dirty || teamMemberForm.get('last_name')?.touched)">\r
          <p *ngIf="getFieldError('last_name')" class="mt-1 text-sm text-red-600">\r
            {{ getFieldError('last_name') }}\r
          </p>\r
        </div>\r
\r
        <!-- Email -->\r
        <div class="mb-4">\r
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">\r
            Email *\r
          </label>\r
          <input\r
            id="email"\r
            type="email"\r
            formControlName="email"\r
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"\r
            placeholder="Enter email address"\r
            [class.border-red-300]="teamMemberForm.get('email')?.invalid && (teamMemberForm.get('email')?.dirty || teamMemberForm.get('email')?.touched)">\r
          <p *ngIf="getFieldError('email')" class="mt-1 text-sm text-red-600">\r
            {{ getFieldError('email') }}\r
          </p>\r
        </div>\r
\r
        <!-- Team Role -->\r
        <div class="mb-4">\r
          <label for="role_id" class="block text-sm font-medium text-gray-700 mb-2">\r
            Team Role *\r
          </label>\r
          <select\r
            id="role_id"\r
            formControlName="role_id"\r
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"\r
            [class.border-red-300]="teamMemberForm.get('role_id')?.invalid && (teamMemberForm.get('role_id')?.dirty || teamMemberForm.get('role_id')?.touched)">\r
            <option value="">Select a role</option>\r
            <option *ngFor="let role of availableRoles" [value]="role.id">\r
              {{ role.name }}\r
            </option>\r
          </select>\r
          <p *ngIf="getFieldError('role_id')" class="mt-1 text-sm text-red-600">\r
            {{ getFieldError('role_id') }}\r
          </p>\r
          <p *ngIf="rolesError" class="mt-1 text-sm text-red-600">\r
            {{ rolesError }}\r
          </p>\r
        </div>\r
\r
        <!-- Location Scope (visible only if role.has_location_access) -->\r
        <div *ngIf="showLocationScope" class="mb-4 border rounded-lg p-3 bg-gray-50">\r
          <div class="flex items-center justify-between mb-2">\r
            <div class="font-medium text-gray-800">Location Scope</div>\r
            <button type="button" (click)="clearSelection()" class="text-sm text-blue-600 hover:underline">Clear selection (Full access)</button>\r
          </div>\r
          <div class="flex items-center mb-3">\r
            <input type="checkbox" id="expand_descendants" formControlName="expand_descendants" class="mr-2">\r
            <label for="expand_descendants" class="text-sm text-gray-700">Include descendants (recommended)</label>\r
          </div>\r
          <div *ngIf="loadingTree" class="text-sm text-gray-500">Loading locations...</div>\r
          <div *ngIf="treeError" class="text-sm text-red-600">{{ treeError }}</div>\r
          <div *ngIf="!loadingTree && !treeError">\r
            <ng-select\r
              [items]="flatLocationOptions"\r
              bindLabel="label"\r
              bindValue="id"\r
              [multiple]="true"\r
              [closeOnSelect]="false"\r
              [searchable]="true"\r
              placeholder="Select locations (empty = full access)"\r
              formControlName="location_ids">\r
            </ng-select>\r
          </div>\r
          <p class="mt-2 text-xs text-gray-500">No selection means full access to all locations.</p>\r
        </div>\r
\r
        <!-- Hourly Rate -->\r
        <div class="mb-6">\r
          <label for="hourly_rate" class="block text-sm font-medium text-gray-700 mb-2">\r
            Hourly Rate (Optional)\r
          </label>\r
          <input\r
            id="hourly_rate"\r
            type="number"\r
            formControlName="hourly_rate"\r
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"\r
            placeholder="Enter hourly rate"\r
            min="0"\r
            step="0.01"\r
            [class.border-red-300]="teamMemberForm.get('hourly_rate')?.invalid && (teamMemberForm.get('hourly_rate')?.dirty || teamMemberForm.get('hourly_rate')?.touched)">\r
          <p *ngIf="getFieldError('hourly_rate')" class="mt-1 text-sm text-red-600">\r
            {{ getFieldError('hourly_rate') }}\r
          </p>\r
          <p class="mt-1 text-xs text-gray-500">\r
            Optional hourly rate for this team member\r
          </p>\r
        </div>\r
\r
        <!-- Modal Actions -->\r
        <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">\r
          <button\r
            type="button"\r
            (click)="onCancel()"\r
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">\r
            Cancel\r
          </button>\r
          <button\r
            type="submit"\r
            [disabled]="teamMemberForm.invalid || loading"\r
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">\r
            <svg *ngIf="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
            {{ isEditMode ? 'Update Team Member' : 'Send Invitation' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/teams/components/team-form-modal/team-form-modal.component.scss */\n.modal-overlay {\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-enter {\n  opacity: 0;\n  transform: scale(0.9);\n}\n.modal-enter-active {\n  opacity: 1;\n  transform: scale(1);\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out;\n}\n.modal-exit {\n  opacity: 1;\n  transform: scale(1);\n}\n.modal-exit-active {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 0.2s ease-in, transform 0.2s ease-in;\n}\n.backdrop-enter {\n  opacity: 0;\n}\n.backdrop-enter-active {\n  opacity: 1;\n  transition: opacity 0.2s ease-out;\n}\n.backdrop-exit {\n  opacity: 1;\n}\n.backdrop-exit-active {\n  opacity: 0;\n  transition: opacity 0.2s ease-in;\n}\ninput:focus,\ntextarea:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\nbutton:not(:disabled):hover {\n  transform: translateY(-1px);\n  transition: transform 0.1s ease-in-out;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n/*# sourceMappingURL=team-form-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: TeamService }, { type: RoleService }, { type: LocationTreeService }], { teamMember: [{
    type: Input
  }], isEditMode: [{
    type: Input
  }], teamMemberSaved: [{
    type: Output
  }], cancelled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamFormModalComponent, { className: "TeamFormModalComponent", filePath: "src/app/teams/components/team-form-modal/team-form-modal.component.ts", lineNumber: 17 });
})();

// src/app/teams/components/assign-work-order-modal/assign-work-order-modal.component.ts
function AssignWorkOrderModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function AssignWorkOrderModalComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Assigning...");
    \u0275\u0275elementEnd();
  }
}
function AssignWorkOrderModalComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Assign Work Order");
    \u0275\u0275elementEnd();
  }
}
var AssignWorkOrderModalComponent = class _AssignWorkOrderModalComponent {
  workOrderService;
  teamMemberName = "";
  teamMemberId = 0;
  closed = new EventEmitter();
  submitted = new EventEmitter();
  workOrders = [];
  selectedWorkOrderId = null;
  selectedWorkOrder = null;
  dueDate = "";
  notes = "";
  loading = false;
  errorMessage = "";
  constructor(workOrderService) {
    this.workOrderService = workOrderService;
  }
  ngOnInit() {
    this.fetchWorkOrders();
  }
  fetchWorkOrders() {
    this.loading = true;
    this.workOrderService.getWorkOrders({ page: 1, per_page: 1e3 }).subscribe({
      next: (response) => {
        this.workOrders = (response.data || []).map((workOrder) => ({
          id: workOrder.id,
          name: workOrder.title,
          description: workOrder.description || `Status: ${workOrder.status_id}`,
          icon: "work-order"
        }));
        this.loading = false;
      },
      error: (error) => {
        console.error("Error fetching work orders:", error);
        this.errorMessage = "Failed to load work orders";
        this.loading = false;
      }
    });
  }
  submit() {
    if (!this.selectedWorkOrderId) {
      this.errorMessage = "Please select a work order";
      return;
    }
    this.errorMessage = "";
    this.workOrderService.assignWorkOrder(this.selectedWorkOrderId, {
      user_id: this.teamMemberId,
      due_date: this.dueDate || void 0,
      notes: this.notes || void 0
    }).subscribe({
      next: (response) => {
        this.submitted.emit({
          work_order_id: this.selectedWorkOrderId,
          due_date: this.dueDate || void 0,
          notes: this.notes || void 0
        });
      },
      error: (error) => {
        console.error("Error assigning work order:", error);
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = "Failed to assign work order. Please try again.";
        }
      }
    });
  }
  selectWorkOrder(workOrder) {
    this.selectedWorkOrder = workOrder;
    this.selectedWorkOrderId = workOrder.id;
    this.errorMessage = "";
  }
  onInputChange() {
    this.errorMessage = "";
  }
  close() {
    this.closed.emit();
  }
  static \u0275fac = function AssignWorkOrderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignWorkOrderModalComponent)(\u0275\u0275directiveInject(WorkOrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignWorkOrderModalComponent, selectors: [["app-assign-work-order-modal"]], inputs: { teamMemberName: "teamMemberName", teamMemberId: "teamMemberId" }, outputs: { closed: "closed", submitted: "submitted" }, decls: 26, vars: 12, consts: [[1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "subtitle"], ["class", "error-message", 4, "ngIf"], [1, "form-group"], ["label", "Available Work Orders", "placeholder", "Select a work order", 3, "selectionChange", "required", "options", "selectedOption", "searchable", "disabled"], ["type", "datetime-local", 1, "input", 3, "ngModelChange", "input", "ngModel"], ["rows", "5", "placeholder", "Add any specific instructions or notes for this assignment...", 1, "textarea", 3, "ngModelChange", "input", "ngModel"], [1, "modal-actions"], [1, "btn", "secondary", 3, "click"], [1, "btn", "primary", 3, "click", "disabled"], [4, "ngIf"], [1, "error-message"]], template: function AssignWorkOrderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AssignWorkOrderModalComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function AssignWorkOrderModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h3");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function AssignWorkOrderModalComponent_Template_button_click_5_listener() {
        return ctx.close();
      });
      \u0275\u0275text(6, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "Select a work order to assign to this team member");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, AssignWorkOrderModalComponent_div_9_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(10, "div", 6)(11, "app-global-dropdown", 7);
      \u0275\u0275listener("selectionChange", function AssignWorkOrderModalComponent_Template_app_global_dropdown_selectionChange_11_listener($event) {
        return ctx.selectWorkOrder($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "label");
      \u0275\u0275text(14, "Due Date (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AssignWorkOrderModalComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dueDate, $event) || (ctx.dueDate = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AssignWorkOrderModalComponent_Template_input_input_15_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 6)(17, "label");
      \u0275\u0275text(18, "Assignment Notes (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "textarea", 9);
      \u0275\u0275twoWayListener("ngModelChange", function AssignWorkOrderModalComponent_Template_textarea_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.notes, $event) || (ctx.notes = $event);
        return $event;
      });
      \u0275\u0275listener("input", function AssignWorkOrderModalComponent_Template_textarea_input_19_listener() {
        return ctx.onInputChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 10)(21, "button", 11);
      \u0275\u0275listener("click", function AssignWorkOrderModalComponent_Template_button_click_21_listener() {
        return ctx.close();
      });
      \u0275\u0275text(22, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 12);
      \u0275\u0275listener("click", function AssignWorkOrderModalComponent_Template_button_click_23_listener() {
        return ctx.submit();
      });
      \u0275\u0275template(24, AssignWorkOrderModalComponent_span_24_Template, 2, 0, "span", 13)(25, AssignWorkOrderModalComponent_span_25_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Assign Work Order to ", ctx.teamMemberName, "");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(2);
      \u0275\u0275property("required", true)("options", ctx.workOrders)("selectedOption", ctx.selectedWorkOrder)("searchable", true)("disabled", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.dueDate);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.notes);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.selectedWorkOrderId || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, GlobalDropdownComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 24px 16px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0 24px 20px 24px;\n  color: #6b7280;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin: 0 24px 20px 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n}\n.input[_ngcontent-%COMP%], \n.textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.input[_ngcontent-%COMP%]:focus, \n.textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin: 0 24px 20px 24px;\n  padding: 12px 16px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 14px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px 24px 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.btn.secondary[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn.secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.btn.primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.primary[_ngcontent-%COMP%]:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-left: 4px;\n}\n.generic-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.dropdown-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-size: 14px;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dropdown-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #9ca3af;\n}\n.dropdown-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.dropdown-button.active[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.dropdown-button[_ngcontent-%COMP%]:disabled {\n  background-color: #f9fafb;\n  color: #9ca3af;\n  cursor: not-allowed;\n  border-color: #e5e7eb;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.placeholder[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-style: italic;\n}\n.selected-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n.item-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: #6b7280;\n}\n.selected-text[_ngcontent-%COMP%] {\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n}\n.dropdown-arrow[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n.dropdown-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #d1d5db;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f3f4f6;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.dropdown-item.selected[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n}\n.dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.item-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.item-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 2px;\n}\n.item-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=assign-work-order-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignWorkOrderModalComponent, [{
    type: Component,
    args: [{ selector: "app-assign-work-order-modal", standalone: true, imports: [CommonModule, FormsModule, GlobalDropdownComponent], template: '<div class="modal-overlay" (click)="close()">\r\n  <div class="modal" (click)="$event.stopPropagation()">\r\n    <div class="modal-header">\r\n      <h3>Assign Work Order to {{ teamMemberName }}</h3>\r\n      <button class="close-btn" (click)="close()">\xD7</button>\r\n    </div>\r\n    \r\n    <p class="subtitle">Select a work order to assign to this team member</p>\r\n    \r\n    <!-- Error Message -->\r\n    <div *ngIf="errorMessage" class="error-message">\r\n      {{ errorMessage }}\r\n    </div>\r\n    \r\n    <div class="form-group">\r\n      <app-global-dropdown\r\n        label="Available Work Orders"\r\n        [required]="true"\r\n        [options]="workOrders"\r\n        [selectedOption]="selectedWorkOrder"\r\n        placeholder="Select a work order"\r\n        [searchable]="true"\r\n        [disabled]="loading"\r\n        (selectionChange)="selectWorkOrder($event)">\r\n      </app-global-dropdown>\r\n    </div>\r\n    \r\n    <div class="form-group">\r\n      <label>Due Date (Optional)</label>\r\n      <input class="input" type="datetime-local" [(ngModel)]="dueDate" (input)="onInputChange()" />\r\n    </div>\r\n    \r\n    <div class="form-group">\r\n      <label>Assignment Notes (Optional)</label>\r\n      <textarea class="textarea" rows="5" [(ngModel)]="notes" (input)="onInputChange()" placeholder="Add any specific instructions or notes for this assignment..."></textarea>\r\n    </div>\r\n    \r\n    <div class="modal-actions">\r\n      <button class="btn secondary" (click)="close()">Cancel</button>\r\n      <button class="btn primary" [disabled]="!selectedWorkOrderId || loading" (click)="submit()">\r\n        <span *ngIf="loading">Assigning...</span>\r\n        <span *ngIf="!loading">Assign Work Order</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n', styles: ["/* src/app/teams/components/assign-work-order-modal/assign-work-order-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 24px 16px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.subtitle {\n  margin: 0 24px 20px 24px;\n  color: #6b7280;\n  font-size: 14px;\n}\n.form-group {\n  margin: 0 24px 20px 24px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n}\n.input,\n.textarea {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.input:focus,\n.textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-message {\n  margin: 0 24px 20px 24px;\n  padding: 12px 16px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 14px;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px 24px 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.btn.secondary {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn.secondary:hover {\n  background-color: #e5e7eb;\n}\n.btn.primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.primary:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.primary:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n.required {\n  color: #dc2626;\n  margin-left: 4px;\n}\n.generic-dropdown {\n  position: relative;\n  width: 100%;\n}\n.dropdown-button {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-size: 14px;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dropdown-button:hover:not(:disabled) {\n  border-color: #9ca3af;\n}\n.dropdown-button:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.dropdown-button.active {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.dropdown-button:disabled {\n  background-color: #f9fafb;\n  color: #9ca3af;\n  cursor: not-allowed;\n  border-color: #e5e7eb;\n}\n.dropdown-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.placeholder {\n  color: #9ca3af;\n  font-style: italic;\n}\n.selected-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n.item-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.icon {\n  width: 16px;\n  height: 16px;\n  color: #6b7280;\n}\n.selected-text {\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n}\n.dropdown-arrow {\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n.dropdown-arrow.rotated {\n  transform: rotate(180deg);\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #d1d5db;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.dropdown-header {\n  padding: 12px 16px;\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n}\n.dropdown-item {\n  width: 100%;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f3f4f6;\n}\n.dropdown-item:hover {\n  background-color: #f3f4f6;\n}\n.dropdown-item.selected {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n}\n.dropdown-item:last-child {\n  border-bottom: none;\n}\n.item-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.item-details {\n  flex: 1;\n}\n.item-name {\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 2px;\n}\n.item-description {\n  font-size: 12px;\n  color: #6b7280;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=assign-work-order-modal.component.css.map */\n"] }]
  }], () => [{ type: WorkOrderService }], { teamMemberName: [{
    type: Input
  }], teamMemberId: [{
    type: Input
  }], closed: [{
    type: Output
  }], submitted: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignWorkOrderModalComponent, { className: "AssignWorkOrderModalComponent", filePath: "src/app/teams/components/assign-work-order-modal/assign-work-order-modal.component.ts", lineNumber: 14 });
})();

// src/app/teams/team-list/team-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function TeamListComponent_Conditional_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 60)(2, "div", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62)(5, "button", 63);
    \u0275\u0275listener("click", function TeamListComponent_Conditional_12_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadTeamMembers(ctx_r1.pagination.current_page - 1));
    });
    \u0275\u0275text(6, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 63);
    \u0275\u0275listener("click", function TeamListComponent_Conditional_12_div_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadTeamMembers(ctx_r1.pagination.current_page + 1));
    });
    \u0275\u0275text(10, " Next ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.pagination.from, " - ", ctx_r1.pagination.to, " of ", ctx_r1.pagination.total, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pagination.current_page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.pagination.current_page, " / ", ctx_r1.pagination.last_page, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pagination.current_page >= ctx_r1.pagination.last_page);
  }
}
function TeamListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 56);
    \u0275\u0275element(3, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, TeamListComponent_Conditional_12_div_6_Template, 11, 7, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagination);
  }
}
function TeamListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", (ctx_r1.statistics == null ? null : ctx_r1.statistics.active_team_members) || 0, " Active");
  }
}
function TeamListComponent_div_75_div_2__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 69);
    \u0275\u0275element(1, "path", 70);
    \u0275\u0275elementEnd();
  }
}
function TeamListComponent_div_75_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function TeamListComponent_div_75_div_2_Template_div_click_0_listener() {
      const sort_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectSort(sort_r4));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TeamListComponent_div_75_div_2__svg_svg_3_Template, 2, 0, "svg", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sort_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-blue-100", (ctx_r1.selectedSort == null ? null : ctx_r1.selectedSort.value) === sort_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sort_r4.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedSort == null ? null : ctx_r1.selectedSort.value) === sort_r4.value);
  }
}
function TeamListComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 65);
    \u0275\u0275template(2, TeamListComponent_div_75_div_2_Template, 4, 4, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sortOptions);
  }
}
function TeamListComponent_Conditional_86_For_3__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 69);
    \u0275\u0275element(1, "path", 70);
    \u0275\u0275elementEnd();
  }
}
function TeamListComponent_Conditional_86_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function TeamListComponent_Conditional_86_For_3_Template_div_click_0_listener() {
      const role_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectRole(role_r6));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TeamListComponent_Conditional_86_For_3__svg_svg_3_Template, 2, 0, "svg", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-blue-100", (ctx_r1.selectedRole == null ? null : ctx_r1.selectedRole.value) === role_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r6.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedRole == null ? null : ctx_r1.selectedRole.value) === role_r6.value);
  }
}
function TeamListComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 65);
    \u0275\u0275repeaterCreate(2, TeamListComponent_Conditional_86_For_3_Template, 4, 4, "div", 71, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.roleOptions);
  }
}
function TeamListComponent_Conditional_94_For_3__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 69);
    \u0275\u0275element(1, "path", 70);
    \u0275\u0275elementEnd();
  }
}
function TeamListComponent_Conditional_94_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function TeamListComponent_Conditional_94_For_3_Template_div_click_0_listener() {
      const status_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectStatus(status_r8));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TeamListComponent_Conditional_94_For_3__svg_svg_3_Template, 2, 0, "svg", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-blue-100", (ctx_r1.selectedStatus == null ? null : ctx_r1.selectedStatus.value) === status_r8.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r8.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedStatus == null ? null : ctx_r1.selectedStatus.value) === status_r8.value);
  }
}
function TeamListComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 65);
    \u0275\u0275repeaterCreate(2, TeamListComponent_Conditional_94_For_3_Template, 4, 4, "div", 71, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.statusOptions);
  }
}
function TeamListComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 73);
    \u0275\u0275element(3, "path", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function TeamListComponent_Conditional_97_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 65)(2, "button", 113);
    \u0275\u0275listener("click", function TeamListComponent_Conditional_97_div_1_div_22_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const teamMember_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editTeamMember(teamMember_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 114);
    \u0275\u0275element(4, "path", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Edit Member");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 117);
    \u0275\u0275element(9, "path", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Inactive ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "button", 119);
    \u0275\u0275listener("click", function TeamListComponent_Conditional_97_div_1_div_22_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const teamMember_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteTeamMember(teamMember_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 120);
    \u0275\u0275element(13, "path", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Remove Member");
    \u0275\u0275elementEnd()()()();
  }
}
function TeamListComponent_Conditional_97_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 100);
    \u0275\u0275element(2, "path", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamMember_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(teamMember_r10.role.name);
  }
}
function TeamListComponent_Conditional_97_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 100);
    \u0275\u0275element(2, "path", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamMember_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", teamMember_r10.hourly_rate, "/hour");
  }
}
function TeamListComponent_Conditional_97_div_1_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "Full access");
    \u0275\u0275elementEnd();
  }
}
function TeamListComponent_Conditional_97_div_1_ng_container_39_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", loc_r12.name, " ");
  }
}
function TeamListComponent_Conditional_97_div_1_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 127);
    \u0275\u0275template(2, TeamListComponent_Conditional_97_div_1_ng_container_39_span_2_Template, 2, 1, "span", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamMember_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", teamMember_r10.locations);
  }
}
function TeamListComponent_Conditional_97_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "div", 11)(3, "div", 55)(4, "div", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 80);
    \u0275\u0275element(6, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "span", 82);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 83);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 84)(13, "button", 85);
    \u0275\u0275listener("click", function TeamListComponent_Conditional_97_div_1_Template_button_click_13_listener() {
      const teamMember_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAssign(teamMember_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 86);
    \u0275\u0275element(15, "path", 87)(16, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Assign");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 89);
    \u0275\u0275listener("click", function TeamListComponent_Conditional_97_div_1_Template_button_click_19_listener() {
      const teamMember_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTeamMemberMenu(teamMember_r10.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 90);
    \u0275\u0275element(21, "path", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, TeamListComponent_Conditional_97_div_1_div_22_Template, 16, 0, "div", 92);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 93)(24, "h3", 94);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 95);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, TeamListComponent_Conditional_97_div_1_div_28_Template, 5, 1, "div", 96)(29, TeamListComponent_Conditional_97_div_1_div_29_Template, 5, 1, "div", 97);
    \u0275\u0275elementStart(30, "div", 98)(31, "div", 99);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 100);
    \u0275\u0275element(33, "path", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 102);
    \u0275\u0275template(38, TeamListComponent_Conditional_97_div_1_span_38_Template, 2, 0, "span", 103)(39, TeamListComponent_Conditional_97_div_1_ng_container_39_Template, 3, 1, "ng-container", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(40, "hr", 105);
    \u0275\u0275elementStart(41, "div", 106)(42, "div", 107)(43, "div", 108);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 109);
    \u0275\u0275text(46, "Assigned");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 107)(48, "div", 110);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 109);
    \u0275\u0275text(51, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 107)(53, "div", 111);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 109);
    \u0275\u0275text(56, "Completed");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const teamMember_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTeamMemberFullName(teamMember_r10), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teamMember_r10.roles[0].name);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", teamMember_r10.showMenu);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTeamMemberFullName(teamMember_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teamMember_r10.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", teamMember_r10.role);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", teamMember_r10.hourly_rate !== void 0 && teamMember_r10.hourly_rate !== null);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Created ", \u0275\u0275pipeBind2(36, 13, teamMember_r10.created_at, "MMM d, y"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", teamMember_r10.has_full_location_access);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !teamMember_r10.has_full_location_access && (teamMember_r10.locations == null ? null : teamMember_r10.locations.length));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_13_0 = (tmp_13_0 = teamMember_r10.assigned_work_orders_total_count) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : teamMember_r10.assigned_work_orders_count) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_14_0 = teamMember_r10.assigned_work_orders_active_count) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_15_0 = teamMember_r10.assigned_work_orders_completed_count) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 0);
  }
}
function TeamListComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, TeamListComponent_Conditional_97_div_1_Template, 57, 16, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredTeamMembers);
  }
}
function TeamListComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 131);
    \u0275\u0275element(3, "path", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 133);
    \u0275\u0275text(5, "No team members found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 134);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 135)(9, "button", 136);
    \u0275\u0275listener("click", function TeamListComponent_Conditional_98_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createTeamMember());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 6);
    \u0275\u0275element(11, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Invite Team Member ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.searchTerm ? "Try adjusting your search terms." : "Get started by inviting your first team member.", " ");
  }
}
function TeamListComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 137);
    \u0275\u0275element(2, "div", 138);
    \u0275\u0275elementEnd()();
  }
}
function TeamListComponent_app_team_delete_confirmation_modal_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-team-delete-confirmation-modal", 139);
    \u0275\u0275listener("confirmed", function TeamListComponent_app_team_delete_confirmation_modal_100_Template_app_team_delete_confirmation_modal_confirmed_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteTeamMember($event));
    })("cancelled", function TeamListComponent_app_team_delete_confirmation_modal_100_Template_app_team_delete_confirmation_modal_cancelled_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("teamMember", ctx_r1.teamMemberToDelete);
  }
}
function TeamListComponent_app_team_form_modal_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-team-form-modal", 140);
    \u0275\u0275listener("teamMemberSaved", function TeamListComponent_app_team_form_modal_101_Template_app_team_form_modal_teamMemberSaved_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTeamMemberSaved($event));
    })("cancelled", function TeamListComponent_app_team_form_modal_101_Template_app_team_form_modal_cancelled_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("teamMember", ctx_r1.teamMemberToEdit)("isEditMode", ctx_r1.isEditMode);
  }
}
function TeamListComponent_app_assign_work_order_modal_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-assign-work-order-modal", 141);
    \u0275\u0275listener("closed", function TeamListComponent_app_assign_work_order_modal_102_Template_app_assign_work_order_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAssign());
    })("submitted", function TeamListComponent_app_assign_work_order_modal_102_Template_app_assign_work_order_modal_submitted_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAssignmentSubmitted($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("teamMemberName", ctx_r1.teamMemberToAssign ? ctx_r1.getTeamMemberFullName(ctx_r1.teamMemberToAssign) : "")("teamMemberId", ctx_r1.teamMemberToAssign ? ctx_r1.teamMemberToAssign.id : 0);
  }
}
var TeamListComponent = class _TeamListComponent {
  teamService;
  teamMembers = [];
  filteredTeamMembers = [];
  pagination = null;
  loading = false;
  error = "";
  successMessage = "";
  statistics = null;
  analytics = null;
  // Search and filtering
  searchTerm = "";
  // Sorting
  selectedSort = null;
  selectedRole = { label: "All Roles", value: "" };
  selectedStatus = { label: "All Status", value: "" };
  selectedSortDir = "asc";
  showSortDropdown = false;
  showRoleDropdown = false;
  showStatusDropdown = false;
  // Modal states
  showDeleteModal = false;
  teamMemberToDelete = null;
  showFormModal = false;
  teamMemberToEdit = null;
  isEditMode = false;
  showAssignModal = false;
  teamMemberToAssign = null;
  // Sort options
  sortOptions = [
    { label: "Name", value: "name" },
    { label: "Created Date", value: "created_at" },
    { label: "Email", value: "email" },
    { label: "Role", value: "role" }
  ];
  roleOptions = [
    { label: "All Roles", value: "" },
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Technician", value: "technician" }
  ];
  // Removed redundant "Types" filter (duplicated Roles)
  statusOptions = [
    { label: "All Status", value: "" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" }
  ];
  constructor(teamService) {
    this.teamService = teamService;
  }
  onDocumentClick(event) {
    const target = event.target;
    const dropdownButton = target.closest("button");
    const dropdownMenu = target.closest(".dropdown-menu");
    if (dropdownButton || dropdownMenu) {
      return;
    }
    this.teamMembers = this.teamMembers.map((tm) => __spreadProps(__spreadValues({}, tm), {
      showMenu: false
    }));
    this.filteredTeamMembers = this.filteredTeamMembers.map((tm) => __spreadProps(__spreadValues({}, tm), {
      showMenu: false
    }));
  }
  ngOnInit() {
    this.loadTeamMembers();
    this.loadStatistics();
  }
  loadTeamMembers(page = 1) {
    this.loading = true;
    this.error = "";
    this.teamService.getTeamMembers(page, 15, {
      search: this.searchTerm || void 0,
      role_name: this.selectedRole?.value || void 0,
      status: this.selectedStatus?.value || void 0,
      sort_by: this.selectedSort?.value || void 0,
      sort_dir: this.selectedSortDir
    }).subscribe({
      next: (response) => {
        this.teamMembers = response.data.teams;
        this.pagination = response.data.pagination;
        this.filteredTeamMembers = [...this.teamMembers];
        this.loading = false;
      },
      error: (error) => {
        this.error = "Failed to load team members";
        this.loading = false;
        console.error("Error loading team members:", error);
      }
    });
  }
  loadStatistics() {
    this.teamService.getTeamMemberStatistics().subscribe({
      next: (response) => {
        this.statistics = response.data;
      },
      error: (error) => {
        console.error("Error loading team member statistics:", error);
      }
    });
    this.teamService.getTeamAnalytics({ date_range: 30 }).subscribe({
      next: (res) => {
        this.analytics = res.data;
      },
      error: (e) => {
        console.error("Error loading team analytics:", e);
      }
    });
  }
  refreshStats() {
    this.loadStatistics();
  }
  createTeamMember() {
    this.teamMemberToEdit = null;
    this.isEditMode = false;
    this.showFormModal = true;
  }
  editTeamMember(teamMember) {
    this.teamMemberToEdit = teamMember;
    this.isEditMode = true;
    this.showFormModal = true;
  }
  openAssign(teamMember) {
    this.teamMemberToAssign = teamMember;
    this.showAssignModal = true;
  }
  closeAssign() {
    this.showAssignModal = false;
    this.teamMemberToAssign = null;
  }
  onAssignmentSubmitted(data) {
    this.successMessage = `Work order successfully assigned to ${this.teamMemberToAssign?.first_name} ${this.teamMemberToAssign?.last_name}`;
    setTimeout(() => {
      this.successMessage = "";
    }, 3e3);
    this.loadTeamMembers();
    this.closeAssign();
  }
  viewTeamMember(teamMember) {
    console.log("View team member:", teamMember);
  }
  deleteTeamMember(teamMember) {
    this.teamMemberToDelete = teamMember;
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.teamMemberToDelete = null;
  }
  confirmDeleteTeamMember(data) {
    if (!this.teamMemberToDelete)
      return;
    this.teamService.deleteTeamMember(this.teamMemberToDelete.id).subscribe({
      next: (response) => {
        this.teamMembers = this.teamMembers.filter((tm) => tm.id !== this.teamMemberToDelete.id);
        this.filteredTeamMembers = this.filteredTeamMembers.filter((tm) => tm.id !== this.teamMemberToDelete.id);
        this.closeDeleteModal();
      },
      error: (error) => {
        this.error = "Failed to delete team member";
        console.error("Error deleting team member:", error);
      }
    });
  }
  closeFormModal() {
    this.showFormModal = false;
    this.teamMemberToEdit = null;
    this.isEditMode = false;
  }
  onTeamMemberSaved(teamMember) {
    if (this.isEditMode) {
      const index = this.teamMembers.findIndex((tm) => tm.id === teamMember.id);
      if (index !== -1) {
        this.teamMembers[index] = teamMember;
        this.filteredTeamMembers = this.filteredTeamMembers.map((tm) => tm.id === teamMember.id ? teamMember : tm);
      }
    } else {
      this.teamMembers.unshift(teamMember);
      this.filteredTeamMembers.unshift(teamMember);
    }
    this.closeFormModal();
  }
  onSearchChange() {
    this.loadTeamMembers(1);
  }
  filterTeamMembers() {
    if (!this.searchTerm.trim()) {
      this.filteredTeamMembers = [...this.teamMembers];
    } else {
      this.filteredTeamMembers = this.teamMembers.filter((teamMember) => `${teamMember.first_name} ${teamMember.last_name}`.toLowerCase().includes(this.searchTerm.toLowerCase()) || teamMember.email.toLowerCase().includes(this.searchTerm.toLowerCase()) || teamMember.role?.name && teamMember.role.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    this.sortTeamMembers();
  }
  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
  }
  toggleRoleDropdown() {
    this.showRoleDropdown = !this.showRoleDropdown;
  }
  toggleStatusDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
  }
  selectSort(sort) {
    this.selectedSort = sort;
    this.showSortDropdown = false;
    this.loadTeamMembers(1);
  }
  selectRole(role) {
    this.selectedRole = role;
    this.showRoleDropdown = false;
    this.loadTeamMembers(1);
  }
  selectStatus(status) {
    this.selectedStatus = status;
    this.showStatusDropdown = false;
    this.loadTeamMembers(1);
  }
  toggleSortDir() {
    this.selectedSortDir = this.selectedSortDir === "asc" ? "desc" : "asc";
    this.loadTeamMembers(1);
  }
  sortTeamMembers() {
    if (!this.selectedSort)
      return;
    this.filteredTeamMembers.sort((a, b) => {
      let aValue;
      let bValue;
      switch (this.selectedSort.value) {
        case "name":
          aValue = `${a.first_name} ${a.last_name}`.toLowerCase();
          bValue = `${b.first_name} ${b.last_name}`.toLowerCase();
          break;
        case "email":
          aValue = a.email.toLowerCase();
          bValue = b.email.toLowerCase();
          break;
        case "created_at":
          aValue = new Date(a.created_at).getTime();
          bValue = new Date(b.created_at).getTime();
          break;
        case "role":
          aValue = (a.role?.name || "").toLowerCase();
          bValue = (b.role?.name || "").toLowerCase();
          break;
        default:
          aValue = `${a.first_name} ${a.last_name}`.toLowerCase();
          bValue = `${b.first_name} ${b.last_name}`.toLowerCase();
      }
      if (aValue < bValue) {
        return this.selectedSortDir === "asc" ? -1 : 1;
      } else if (aValue > bValue) {
        return this.selectedSortDir === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  getTeamMemberFullName(teamMember) {
    return `${teamMember.first_name} ${teamMember.last_name}`;
  }
  getTeamMemberInitials(teamMember) {
    return `${teamMember.first_name.charAt(0)}${teamMember.last_name.charAt(0)}`.toUpperCase();
  }
  toggleTeamMemberMenu(teamMemberId) {
    this.teamMembers = this.teamMembers.map((tm) => __spreadProps(__spreadValues({}, tm), {
      showMenu: tm.id === teamMemberId ? !tm.showMenu : false
    }));
    this.filteredTeamMembers = this.filteredTeamMembers.map((tm) => __spreadProps(__spreadValues({}, tm), {
      showMenu: tm.id === teamMemberId ? !tm.showMenu : false
    }));
  }
  static \u0275fac = function TeamListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamListComponent)(\u0275\u0275directiveInject(TeamService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamListComponent, selectors: [["app-team-list"]], hostBindings: function TeamListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TeamListComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 103, vars: 33, consts: [[1, "team-list-page", "min-h-screen", "bg-gray-50", "p-6"], [1, "mb-6", "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "flex", "items-center", "space-x-3", "mt-4", "md:mt-0"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "px-5", "py-2", "rounded-lg", "shadow-sm", "transition-colors", "flex", "items-center", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "mb-6", "bg-green-50", "border", "border-green-200", "rounded-lg", "p-4"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-4", "gap-6", "mb-6"], [1, "bg-blue-50", "rounded-xl", "border", "border-blue-100", "p-6", "shadow-sm"], [1, "flex", "items-center", "justify-between"], [1, "text-base", "font-medium", "text-gray-700"], [1, "w-12", "h-12", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"], [1, ""], [1, "text-2xl", "font-bold", "text-gray-900", "my-2"], [1, "text-sm", "font-medium", "text-gray-600"], [1, "bg-green-50", "rounded-xl", "border", "border-green-100", "p-6", "shadow-sm"], [1, "w-12", "h-12", "bg-green-100", "rounded-lg", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.867 19.125h.008v.008h-.008v-.008Z"], [1, "bg-orange-50", "rounded-xl", "border", "border-orange-100", "p-6", "shadow-sm"], [1, "w-12", "h-12", "bg-orange-100", "rounded-lg", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-orange-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "bg-red-50", "rounded-xl", "border", "border-red-100", "p-6", "shadow-sm"], [1, "w-12", "h-12", "bg-red-100", "rounded-lg", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "mb-6"], [1, "flex-1", "flex", "flex-col", "space-y-3", "md:space-y-0", "md:flex-row", "md:items-center", "md:space-x-3"], [1, "relative", "w-full", "md:w-80"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search team members by name or email...", 1, "w-full", "pl-10", "pr-4", "py-2", "border-2", "border-blue-300", "rounded-xl", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", 3, "ngModelChange", "input", "ngModel"], [1, "relative", 3, "click"], ["type", "button", 1, "w-full", "px-4", "py-2", "text-left", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-white", "transition-all", "min-w-[180px]", 3, "click"], [1, "text-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg", 4, "ngIf"], [1, "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "bg-white", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], [1, "absolute", "z-10", "w-full", "mt-1", "bg-white", "border", "border-gray-300", "rounded-lg", "shadow-lg"], [1, "bg-red-50", "border", "border-red-200", "rounded-lg", "p-4", "mb-6"], [1, "grid", "grid-cols-1", "gap-6"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], [1, "xl:col-span-2"], [3, "teamMember", "confirmed", "cancelled", 4, "ngIf"], [3, "teamMember", "isEditMode", "teamMemberSaved", "cancelled", 4, "ngIf"], [3, "teamMemberName", "teamMemberId", "closed", "submitted", 4, "ngIf"], [1, "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-green-400", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-green-800", "font-medium"], ["class", "xl:col-span-2", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "mt-4"], [1, "text-sm", "text-gray-600"], [1, "flex", "gap-2"], [1, "px-3", "py-1.5", "rounded", "border", "text-sm", 3, "click", "disabled"], [1, "px-3", "py-1.5", "text-sm"], [1, "py-1"], ["class", "px-3 py-2 text-sm text-gray-900 hover:bg-blue-50 cursor-pointer transition-colors flex items-center justify-between", 3, "bg-blue-100", "click", 4, "ngFor", "ngForOf"], [1, "px-3", "py-2", "text-sm", "text-gray-900", "hover:bg-blue-50", "cursor-pointer", "transition-colors", "flex", "items-center", "justify-between", 3, "click"], ["class", "w-4 h-4 text-blue-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "px-3", "py-2", "text-sm", "text-gray-900", "hover:bg-blue-50", "cursor-pointer", "transition-colors", "flex", "items-center", "justify-between", 3, "bg-blue-100"], [1, "flex"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-400", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "ml-2", "text-sm", "text-red-700"], ["class", "bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "shadow-sm", "hover:shadow-md", "transition-shadow", "overflow-hidden"], [1, "px-6", "py-4", "relative"], [1, "w-12", "h-12", "bg-blue-100", "rounded-full", "flex", "items-center", "justify-center", "mr-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "text-sm", "font-medium", "text-blue-400", "block", "mb-2"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-medium", "bg-blue-100", "text-blue-800", "inline"], [1, "relative", "flex", "items-center", "gap-2"], ["title", "Assign", 1, "flex", "items-center", "gap-1", "text-sm", "px-3", "py-1.5", "rounded-md", "bg-gray-100", "hover:bg-gray-200", "text-gray-700", "border", "border-gray-200", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "text-gray-400", "hover:text-gray-600", "p-1.5", "rounded-full", "hover:bg-gray-100", "transition-colors", "focus:outline-none", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"], ["class", "absolute right-0 top-1/2 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20", 4, "ngIf"], [1, "px-6", "py-4"], [1, "text-xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-600", "mb-4"], ["class", "flex items-center text-sm text-gray-500 mb-3", 4, "ngIf"], ["class", "flex items-center text-sm text-gray-500 mb-2", 4, "ngIf"], [1, "grid", "grid-cols-2"], [1, "flex", "items-center", "text-sm", "text-gray-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "text-xs", "mb-2"], ["class", "inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-700 border border-green-200", 4, "ngIf"], [4, "ngIf"], [1, "my-3", "border-gray-200"], [1, "grid", "grid-cols-3"], [1, "text-center"], [1, "text-lg", "font-semibold", "text-blue-600"], [1, "text-xs", "text-gray-500"], [1, "text-lg", "font-semibold", "text-yellow-600"], [1, "text-lg", "font-semibold", "text-green-600"], [1, "absolute", "right-0", "top-1/2", "mt-1", "w-40", "bg-white", "rounded-lg", "shadow-lg", "border", "border-gray-200", "z-20"], [1, "flex", "items-center", "w-full", "px-3", "py-2.5", "text-sm", "text-gray-700", "hover:bg-gray-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2.5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "flex", "items-center", "w-full", "px-3", "py-2.5", "text-sm", "text-gray-700", "hover:bg-gray-50", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-4", "text-gray-400", "mr-2.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "flex", "items-center", "w-full", "px-3", "py-2.5", "text-sm", "text-red-600", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2.5", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "flex", "items-center", "text-sm", "text-gray-500", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "flex", "items-center", "text-sm", "text-gray-500", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded", "bg-green-100", "text-green-700", "border", "border-green-200"], [1, "flex", "flex-wrap", "gap-1"], ["class", "inline-flex items-center px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200", 4, "ngFor", "ngForOf"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded", "bg-gray-100", "text-gray-700", "border", "border-gray-200"], [1, "text-center", "py-12"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "mx-auto", "h-12", "w-12", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "mt-2", "text-sm", "font-medium", "text-gray-900"], [1, "mt-1", "text-sm", "text-gray-500"], [1, "mt-6"], [1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-transparent", "shadow-sm", "text-sm", "font-medium", "rounded-md", "text-white", "bg-blue-600", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", 3, "click"], [1, "flex", "justify-center", "items-center", "py-12", "h-100"], [1, "animate-spin", "rounded-full", "h-8", "w-8", "border-b-2", "border-blue-600"], [3, "confirmed", "cancelled", "teamMember"], [3, "teamMemberSaved", "cancelled", "teamMember", "isEditMode"], [3, "closed", "submitted", "teamMemberName", "teamMemberId"]], template: function TeamListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Team Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage team members, assign work orders, and track team performance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function TeamListComponent_Template_button_click_8_listener() {
        return ctx.createTeamMember();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Invite Team Member ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, TeamListComponent_Conditional_12_Template, 7, 2, "div", 8);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12);
      \u0275\u0275text(17, "Total Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 14);
      \u0275\u0275element(20, "path", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 16)(22, "p", 17);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, TeamListComponent_Conditional_24_Template, 2, 1, "p", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 19)(26, "div", 11)(27, "div", 12);
      \u0275\u0275text(28, "Assigned Task");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 21);
      \u0275\u0275element(31, "path", 22)(32, "path", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "div", 16)(34, "p", 17);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 18);
      \u0275\u0275text(37, "Work orders pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 24)(39, "div", 11)(40, "div", 12);
      \u0275\u0275text(41, "Active Task");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 26);
      \u0275\u0275element(44, "path", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div", 16)(46, "p", 17);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 18);
      \u0275\u0275text(49, "Currently in progress");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 28)(51, "div", 11)(52, "div", 12);
      \u0275\u0275text(53, "Completion Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 29);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 30);
      \u0275\u0275element(56, "path", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(57, "div", 16)(58, "p", 17);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 18);
      \u0275\u0275text(61, "Tasks completed");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "div", 32)(63, "div", 33)(64, "div", 34);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(65, "svg", 35);
      \u0275\u0275element(66, "path", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function TeamListComponent_Template_input_ngModelChange_67_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function TeamListComponent_Template_input_input_67_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 38);
      \u0275\u0275listener("click", function TeamListComponent_Template_div_click_68_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(69, "button", 39);
      \u0275\u0275listener("click", function TeamListComponent_Template_button_click_69_listener() {
        return ctx.toggleSortDropdown();
      });
      \u0275\u0275elementStart(70, "div", 11)(71, "span", 40);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(73, "svg", 41);
      \u0275\u0275element(74, "path", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(75, TeamListComponent_div_75_Template, 3, 1, "div", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(76, "button", 44);
      \u0275\u0275listener("click", function TeamListComponent_Template_button_click_76_listener() {
        return ctx.toggleSortDir();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(77, "svg", 45);
      \u0275\u0275element(78, "path", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(79, "div", 38);
      \u0275\u0275listener("click", function TeamListComponent_Template_div_click_79_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(80, "button", 39);
      \u0275\u0275listener("click", function TeamListComponent_Template_button_click_80_listener() {
        return ctx.toggleRoleDropdown();
      });
      \u0275\u0275elementStart(81, "div", 11)(82, "span", 40);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(84, "svg", 41);
      \u0275\u0275element(85, "path", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(86, TeamListComponent_Conditional_86_Template, 4, 0, "div", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(87, "div", 38);
      \u0275\u0275listener("click", function TeamListComponent_Template_div_click_87_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(88, "button", 39);
      \u0275\u0275listener("click", function TeamListComponent_Template_button_click_88_listener() {
        return ctx.toggleStatusDropdown();
      });
      \u0275\u0275elementStart(89, "div", 11)(90, "span", 40);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(92, "svg", 41);
      \u0275\u0275element(93, "path", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(94, TeamListComponent_Conditional_94_Template, 4, 0, "div", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(95, TeamListComponent_Conditional_95_Template, 6, 1, "div", 48);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(96, "div", 49);
      \u0275\u0275template(97, TeamListComponent_Conditional_97_Template, 2, 1, "div", 50)(98, TeamListComponent_Conditional_98_Template, 13, 1, "div", 51)(99, TeamListComponent_Conditional_99_Template, 3, 0, "div", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(100, TeamListComponent_app_team_delete_confirmation_modal_100_Template, 1, 1, "app-team-delete-confirmation-modal", 52)(101, TeamListComponent_app_team_form_modal_101_Template, 1, 2, "app-team-form-modal", 53)(102, TeamListComponent_app_assign_work_order_modal_102_Template, 1, 2, "app-assign-work-order-modal", 54);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.successMessage ? 12 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate((ctx.statistics == null ? null : ctx.statistics.total_team_members) || 0);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.statistics == null ? null : ctx.statistics.active_team_members) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : 0) !== 0 ? 24 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate((ctx.statistics == null ? null : ctx.statistics.assigned_work_orders_total_count) || 0);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate((ctx.statistics == null ? null : ctx.statistics.assigned_work_orders_active_count) || 0);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate((ctx.statistics == null ? null : ctx.statistics.assigned_work_orders_completed_count) || 0);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("border-blue-500", ctx.showSortDropdown);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.selectedSort ? "Sort by: " + ctx.selectedSort.label : "Sort by", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.showSortDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showSortDropdown);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("d", ctx.selectedSortDir === "asc" ? "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" : "M17 8V4m0 0l4 4m-4-4l-4 4M7 16v4m0 0l-4-4m4 4l4-4");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("border-blue-500", ctx.showRoleDropdown);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.selectedRole ? ctx.selectedRole.label : "All Roles", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.showRoleDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showRoleDropdown ? 86 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("border-blue-500", ctx.showStatusDropdown);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.selectedStatus ? ctx.selectedStatus.label : "All Status", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.showStatusDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showStatusDropdown ? 94 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error && !ctx.loading ? 95 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading ? 97 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.filteredTeamMembers.length === 0 ? 98 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 99 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFormModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAssignModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TeamDeleteConfirmationModalComponent, TeamFormModalComponent, AssignWorkOrderModalComponent], styles: ["\n\n.team-list-page[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  box-shadow: 0 2px 8px 0 rgba(16, 30, 54, 0.08);\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #bfdbfe;\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s;\n}\n.team-list-page[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  border-color: #e5e7eb;\n}\n.team-list-page[_ngcontent-%COMP%]   .team-card-header[_ngcontent-%COMP%] {\n  background: #e0edff;\n  height: 8rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  overflow: hidden;\n}\n.team-list-page[_ngcontent-%COMP%]   .dropdown-enter[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n.team-list-page[_ngcontent-%COMP%]   .dropdown-enter-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.team-list-page[_ngcontent-%COMP%]   .dropdown-exit[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.team-list-page[_ngcontent-%COMP%]   .dropdown-exit-active[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.team-list-page[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px 0 rgba(16, 30, 54, 0.12);\n}\n.team-list-page[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n}\n.team-list-page[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.team-list-page[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.team-list-page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.team-list-page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.team-list-page[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.team-list-page[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .team-list-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-list-page[_ngcontent-%COMP%]   .statistics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .team-list-page[_ngcontent-%COMP%]   .statistics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=team-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamListComponent, [{
    type: Component,
    args: [{ selector: "app-team-list", standalone: true, imports: [CommonModule, FormsModule, TeamDeleteConfirmationModalComponent, TeamFormModalComponent, AssignWorkOrderModalComponent], template: `<div class="team-list-page min-h-screen bg-gray-50 p-6">\r
  <!-- Page Title and Subtitle + Actions -->\r
  <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Team Management</h1>\r
      <p class="text-gray-600 text-base">Manage team members, assign work orders, and track team performance</p>\r
    </div>\r
    <div class="flex items-center space-x-3 mt-4 md:mt-0">\r
      <button (click)="createTeamMember()"\r
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-sm transition-colors flex items-center cursor-pointer">\r
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
        </svg>\r
        Invite Team Member\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Success Message -->\r
  @if (successMessage) {\r
    <div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">\r
      <div class="flex items-center">\r
        <svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
        </svg>\r
        <span class="text-green-800 font-medium">{{ successMessage }}</span>\r
      </div>\r
      <!-- Pagination Controls -->\r
      <div class="xl:col-span-2" *ngIf="pagination">\r
        <div class="flex items-center justify-between mt-4">\r
          <div class="text-sm text-gray-600">\r
            Showing {{ pagination.from }} - {{ pagination.to }} of {{ pagination.total }}\r
          </div>\r
          <div class="flex gap-2">\r
            <button\r
              class="px-3 py-1.5 rounded border text-sm"\r
              [disabled]="pagination.current_page <= 1"\r
              (click)="loadTeamMembers(pagination.current_page - 1)">\r
              Prev\r
            </button>\r
            <span class="px-3 py-1.5 text-sm">Page {{ pagination.current_page }} / {{ pagination.last_page }}</span>\r
            <button\r
              class="px-3 py-1.5 rounded border text-sm"\r
              [disabled]="pagination.current_page >= pagination.last_page"\r
              (click)="loadTeamMembers(pagination.current_page + 1)">\r
              Next\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Statistics Cards -->\r
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">\r
\r
    <!--Total-->\r
    <div class="bg-blue-50 rounded-xl border border-blue-100 p-6 shadow-sm">\r
      <div class="flex items-center justify-between">\r
        <div class="text-base font-medium text-gray-700">Total Members</div>\r
\r
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor"\r
               class="size-5 text-blue-600">\r
            <path stroke-linecap="round" stroke-linejoin="round"\r
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>\r
          </svg>\r
        </div>\r
\r
      </div>\r
      <div class="">\r
        <p class="text-2xl font-bold text-gray-900 my-2">{{ statistics?.total_team_members || 0 }}</p>\r
        @if ((statistics?.active_team_members ?? 0) !== 0) {\r
          <p class="text-sm font-medium text-gray-600">{{ statistics?.active_team_members || 0 }} Active</p>\r
        }\r
      </div>\r
    </div>\r
\r
    <!--Assigned Task-->\r
    <div class="bg-green-50 rounded-xl border border-green-100 p-6 shadow-sm">\r
      <div class="flex items-center justify-between">\r
        <div class="text-base font-medium text-gray-700">Assigned Task</div>\r
\r
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor"\r
               class="size-5 text-green-600">\r
            <path stroke-linecap="round" stroke-linejoin="round"\r
                  d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"/>\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z"/>\r
          </svg>\r
        </div>\r
\r
      </div>\r
      <div class="">\r
        <p class="text-2xl font-bold text-gray-900 my-2">{{ statistics?.assigned_work_orders_total_count || 0 }}</p>\r
        <p class="text-sm font-medium text-gray-600">Work orders pending</p>\r
      </div>\r
    </div>\r
\r
    <!--Active Task-->\r
    <div class="bg-orange-50 rounded-xl border border-orange-100 p-6 shadow-sm">\r
      <div class="flex items-center justify-between">\r
        <div class="text-base font-medium text-gray-700">Active Task</div>\r
\r
        <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor"\r
               class="size-5 text-orange-600">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
          </svg>\r
        </div>\r
\r
      </div>\r
      <div class="">\r
        <p class="text-2xl font-bold text-gray-900 my-2">{{ statistics?.assigned_work_orders_active_count || 0 }}</p>\r
        <p class="text-sm font-medium text-gray-600">Currently in progress</p>\r
      </div>\r
    </div>\r
\r
    <!--Completion Rate-->\r
    <div class="bg-red-50 rounded-xl border border-red-100 p-6 shadow-sm">\r
      <div class="flex items-center justify-between">\r
        <div class="text-base font-medium text-gray-700">Completion Rate</div>\r
\r
        <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor" class="size-5 text-red-600">\r
            <path stroke-linecap="round" stroke-linejoin="round"\r
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
          </svg>\r
        </div>\r
\r
\r
      </div>\r
      <div class="">\r
        <p class="text-2xl font-bold text-gray-900 my-2">{{ statistics?.assigned_work_orders_completed_count || 0 }}</p>\r
        <p class="text-sm font-medium text-gray-600">Tasks completed</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Filters and View Type -->\r
  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">\r
    <!-- Left: Search and Filters -->\r
    <div class="flex-1 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:space-x-3">\r
      <!-- Search -->\r
      <div class="relative w-full md:w-80">\r
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none"\r
             stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
        </svg>\r
        <input\r
          type="text"\r
          placeholder="Search team members by name or email..."\r
          class="w-full pl-10 pr-4 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
          [(ngModel)]="searchTerm"\r
          (input)="onSearchChange()"/>\r
      </div>\r
\r
      <!-- Sort Dropdown -->\r
      <div class="relative" (click)="$event.stopPropagation()">\r
        <button\r
          type="button"\r
          (click)="toggleSortDropdown()"\r
          class="w-full px-4 py-2 text-left border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all min-w-[180px]"\r
          [class.border-blue-500]="showSortDropdown">\r
          <div class="flex items-center justify-between">\r
            <span class="text-sm">\r
              {{ selectedSort ? 'Sort by: ' + selectedSort.label : 'Sort by' }}\r
            </span>\r
            <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"\r
                 [class.rotate-180]="showSortDropdown"\r
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
            </svg>\r
          </div>\r
        </button>\r
\r
        <!-- Sort Options Dropdown -->\r
        <div *ngIf="showSortDropdown"\r
             class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">\r
          <div class="py-1">\r
            <div *ngFor="let sort of sortOptions"\r
                 (click)="selectSort(sort)"\r
                 class="px-3 py-2 text-sm text-gray-900 hover:bg-blue-50 cursor-pointer transition-colors flex items-center justify-between"\r
                 [class.bg-blue-100]="selectedSort?.value === sort.value">\r
              <span>{{ sort.label }}</span>\r
              <svg *ngIf="selectedSort?.value === sort.value" class="w-4 h-4 text-blue-600" fill="none"\r
                   stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
              </svg>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Sort Direction Toggle -->\r
      <button\r
        (click)="toggleSortDir()"\r
        class="px-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">\r
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                [attr.d]="selectedSortDir === 'asc' ? 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' : 'M17 8V4m0 0l4 4m-4-4l-4 4M7 16v4m0 0l-4-4m4 4l4-4'"></path>\r
        </svg>\r
      </button>\r
\r
      <!--Roles Dropdown-->\r
      <div class="relative" (click)="$event.stopPropagation()">\r
        <button\r
          type="button"\r
          (click)="toggleRoleDropdown()"\r
          class="w-full px-4 py-2 text-left border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all min-w-[180px]"\r
          [class.border-blue-500]="showRoleDropdown">\r
          <div class="flex items-center justify-between">\r
            <span class="text-sm">\r
              {{ selectedRole ? selectedRole.label : 'All Roles' }}\r
            </span>\r
            <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"\r
                 [class.rotate-180]="showRoleDropdown"\r
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
            </svg>\r
          </div>\r
        </button>\r
\r
        <!-- Sort Options Dropdown -->\r
        @if (showRoleDropdown) {\r
          <div\r
            class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">\r
            <div class="py-1">\r
              @for (role of roleOptions; track role.value) {\r
                <div\r
                  (click)="selectRole(role)"\r
                  class="px-3 py-2 text-sm text-gray-900 hover:bg-blue-50 cursor-pointer transition-colors flex items-center justify-between"\r
                  [class.bg-blue-100]="selectedRole?.value === role.value">\r
                  <span>{{ role.label }}</span>\r
                  <svg *ngIf="selectedRole?.value === role.value" class="w-4 h-4 text-blue-600" fill="none"\r
                       stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
                  </svg>\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
      </div>\r
\r
      <!--Status Dropdown-->\r
      <div class="relative" (click)="$event.stopPropagation()">\r
        <button\r
          type="button"\r
          (click)="toggleStatusDropdown()"\r
          class="w-full px-4 py-2 text-left border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all min-w-[180px]"\r
          [class.border-blue-500]="showStatusDropdown">\r
          <div class="flex items-center justify-between">\r
            <span class="text-sm">\r
              {{ selectedStatus ? selectedStatus.label : 'All Status' }}\r
            </span>\r
            <svg class="w-4 h-4 text-gray-400 transition-transform duration-200"\r
                 [class.rotate-180]="showStatusDropdown"\r
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
            </svg>\r
          </div>\r
        </button>\r
\r
        <!-- Sort Options Dropdown -->\r
        @if (showStatusDropdown) {\r
          <div\r
            class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">\r
            <div class="py-1">\r
              @for (status of statusOptions; track status.value) {\r
                <div\r
                  (click)="selectStatus(status)"\r
                  class="px-3 py-2 text-sm text-gray-900 hover:bg-blue-50 cursor-pointer transition-colors flex items-center justify-between"\r
                  [class.bg-blue-100]="selectedStatus?.value === status.value">\r
                  <span>{{ status.label }}</span>\r
                  <svg *ngIf="selectedStatus?.value === status.value" class="w-4 h-4 text-blue-600" fill="none"\r
                       stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
                  </svg>\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
      </div>\r
\r
      <!-- Removed redundant Types dropdown (duplicate of Roles) -->\r
\r
    </div>\r
  </div>\r
\r
\r
\r
  <!-- Error State -->\r
  @if (error && !loading) {\r
    <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">\r
      <div class="flex">\r
        <svg class="w-5 h-5 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
        </svg>\r
        <p class="ml-2 text-sm text-red-700">{{ error }}</p>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Team Members Cards -->\r
\r
    <div class="grid grid-cols-1 gap-6">\r
      @if (!loading) {\r
      <!--Team Card grid-->\r
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">\r
          <div *ngFor="let teamMember of filteredTeamMembers"\r
               class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">\r
\r
            <!-- Card Header (Light Blue Background) -->\r
            <div class="px-6 py-4 relative">\r
              <div class="flex items-center justify-between">\r
                <div class="flex items-center">\r
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">\r
                    <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
                    </svg>\r
                  </div>\r
                  <div>\r
                    <span class="text-sm font-medium text-blue-400 block mb-2">\r
                     {{ getTeamMemberFullName(teamMember) }}\r
                    </span>\r
\r
                    <div class="px-3  py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 inline">{{teamMember.roles[0].name}}</div>\r
                  </div>\r
                </div>\r
\r
                <!-- Assign Button and Options Menu -->\r
                <div class="relative flex items-center gap-2">\r
                  <!-- Assign Button -->\r
                  <button\r
                    class="flex items-center gap-1 text-sm px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"\r
                    title="Assign"\r
                    (click)="openAssign(teamMember)"\r
                  >\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                    </svg>\r
                    <span>Assign</span>\r
                  </button>\r
\r
                  <button\r
                    (click)="toggleTeamMemberMenu(teamMember.id)"\r
                    class="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">\r
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>\r
                    </svg>\r
                  </button>\r
\r
                  <!-- Dropdown Menu -->\r
                  <div *ngIf="teamMember.showMenu"\r
                       class="absolute right-0 top-1/2 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20">\r
                    <div class="py-1">\r
                      <!-- Edit Option -->\r
                      <button\r
                        (click)="editTeamMember(teamMember)"\r
                        class="flex items-center w-full px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">\r
                        <svg class="w-4 h-4 mr-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                        </svg>\r
                        <span>Edit Member</span>\r
                      </button>\r
\r
                      <!--Active/Inactive button-->\r
                      <button type="button"\r
                              class="flex items-center w-full px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">\r
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                             stroke="currentColor" class="size-4 text-gray-400 mr-2.5">\r
                          <path stroke-linecap="round" stroke-linejoin="round"\r
                                d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
                        </svg>\r
\r
                        Inactive\r
                      </button>\r
\r
                      <!-- Remove Option -->\r
                      <button\r
                        (click)="deleteTeamMember(teamMember)"\r
                        class="flex items-center w-full px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">\r
                        <svg class="w-4 h-4 mr-2.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                        </svg>\r
                        <span>Remove Member</span>\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Card Body (White Background) -->\r
            <div class="px-6 py-4">\r
              <!-- Member Name -->\r
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ getTeamMemberFullName(teamMember) }}</h3>\r
\r
              <!-- Member Email -->\r
              <p class="text-gray-600 mb-4">{{ teamMember.email }}</p>\r
\r
              <!-- Role Information -->\r
              <div class="flex items-center text-sm text-gray-500 mb-3" *ngIf="teamMember.role">\r
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>\r
                </svg>\r
                <span>{{ teamMember.role.name }}</span>\r
              </div>\r
\r
              <!-- Hourly Rate -->\r
              <div class="flex items-center text-sm text-gray-500 mb-2"\r
                   *ngIf="teamMember.hourly_rate !== undefined && teamMember.hourly_rate !== null">\r
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
                </svg>\r
                <span>\${{ teamMember.hourly_rate }}/hour</span>\r
              </div>\r
\r
\r
              <div class="grid grid-cols-2">\r
                <!-- Created Date -->\r
                <div class="flex items-center text-sm text-gray-500">\r
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <span>Created {{ teamMember.created_at | date:'MMM d, y' }}</span>\r
                </div>\r
\r
                <!-- Location Scope -->\r
                <div class="text-xs mb-2">\r
          <span *ngIf="teamMember.has_full_location_access"\r
                class="inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-700 border border-green-200">Full access</span>\r
                  <ng-container *ngIf="!teamMember.has_full_location_access && teamMember.locations?.length">\r
                    <div class="flex flex-wrap gap-1">\r
              <span *ngFor="let loc of teamMember.locations"\r
                    class="inline-flex items-center px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200">\r
                {{ loc.name }}\r
              </span>\r
                    </div>\r
                  </ng-container>\r
                </div>\r
              </div>\r
\r
              <!-- Separator Line -->\r
              <hr class="my-3 border-gray-200">\r
\r
              <div class="grid grid-cols-3">\r
                <div class="text-center">\r
                  <div class="text-lg font-semibold text-blue-600">{{ teamMember.assigned_work_orders_total_count ?? teamMember.assigned_work_orders_count ?? 0 }}</div>\r
                  <div class="text-xs text-gray-500">Assigned</div>\r
                </div>\r
                <div class="text-center">\r
                  <div class="text-lg font-semibold text-yellow-600">{{ teamMember.assigned_work_orders_active_count ?? 0 }}</div>\r
                  <div class="text-xs text-gray-500">Active</div>\r
                </div>\r
                <div class="text-center">\r
                  <div class="text-lg font-semibold text-green-600">{{ teamMember.assigned_work_orders_completed_count ?? 0 }}</div>\r
                  <div class="text-xs text-gray-500">Completed</div>\r
                </div>\r
\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      }\r
\r
      <!-- Empty State -->\r
      @if (!loading && filteredTeamMembers.length === 0) {\r
        <div class="xl:col-span-2">\r
          <div class="text-center py-12">\r
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>\r
            </svg>\r
            <h3 class="mt-2 text-sm font-medium text-gray-900">No team members found</h3>\r
            <p class="mt-1 text-sm text-gray-500">\r
              {{ searchTerm ? 'Try adjusting your search terms.' : 'Get started by inviting your first team member.' }}\r
            </p>\r
            <div class="mt-6">\r
              <button\r
                (click)="createTeamMember()"\r
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">\r
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
                </svg>\r
                Invite Team Member\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
      }\r
\r
      <!-- Loading State -->\r
      @if (loading) {\r
       <div class="xl:col-span-2">\r
         <div class="flex justify-center items-center py-12 h-100">\r
           <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>\r
         </div>\r
       </div>\r
      }\r
<!--\r
      &lt;!&ndash;Team Analytics&ndash;&gt;\r
      <div class="xl:col-span-1">\r
        <div class="rounded-lg border bg-white border-gray-200 shadow-sm h-fit">\r
          <div class="flex flex-col space-y-1.5 p-6">\r
            <div class="flex items-center justify-between">\r
              <div>\r
                <h2 class="text-2xl font-semibold flex items-center gap-2 text-black-600">\r
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                       stroke="currentColor" class="size-6">\r
                    <path stroke-linecap="round" stroke-linejoin="round"\r
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>\r
                  </svg>\r
                  Team Analytics\r
                </h2>\r
                <p class="text-gray-500">Performance metrics and team insights</p>\r
              </div>\r
\r
              &lt;!&ndash;Refresh Button&ndash;&gt;\r
              <button (click)="refreshStats()"\r
                      class="flex gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-5 py-2 rounded-lg shadow-sm transition-colors flex items-center cursor-pointer">\r
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                     stroke="currentColor" class="size-4">\r
                  <path stroke-linecap="round" stroke-linejoin="round"\r
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>\r
                </svg>\r
                Refresh\r
              </button>\r
            </div>\r
\r
\r
          </div>\r
          <div class="p-6 pt-0">\r
            <div class="relative overflow-auto h-[400px]">\r
              <div class="h-full w-full rounded-[inherit]">\r
                <div class="space-y-6">\r
                  <div class="space-y-4">\r
\r
                    <h4 class="text-sm font-medium flex items-center gap-2 text-black-600">\r
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                           stroke="currentColor" class="size-4">\r
                        <path stroke-linecap="round" stroke-linejoin="round"\r
                              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>\r
                      </svg>\r
                      Key Performance Indicators\r
                    </h4>\r
\r
                    &lt;!&ndash;Cards&ndash;&gt;\r
                    <div class="grid grid-cols-2 gap-3 pb-6 border-b border-gray-200">\r
\r
                      <div class="p-3 bg-gray-100 rounded-lg">\r
                        <div class="flex items-center gap-2 mb-1">\r
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                               stroke="currentColor" class="size-4 text-green-500">\r
                            <path stroke-linecap="round" stroke-linejoin="round"\r
                                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>\r
                          </svg>\r
                          <span class="text-xs text-gray-800 font-medium">Productivity</span></div>\r
                        <div class="text-lg font-bold text-green-500">{{ analytics?.productivity_rate_percent || 0 }}%</div>\r
\r
                        &lt;!&ndash;Progress Bar&ndash;&gt;\r
                        <div class="relative w-full overflow-hidden rounded-full h-1 mt-1 bg-gray-200">\r
                          <div class="h-full w-full flex-1 transition-all"></div>\r
                        </div>\r
                      </div>\r
\r
                      <div class="p-3 bg-gray-100 rounded-lg">\r
                        <div class="flex items-center gap-2 mb-1">\r
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                               stroke="currentColor" class="size-4 text-blue-500">\r
                            <path stroke-linecap="round" stroke-linejoin="round"\r
                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
                          </svg>\r
\r
                          <span class="text-xs text-gray-800 font-medium">On-Time Rate</span></div>\r
                        <div class="text-lg font-bold text-blue-500">{{ analytics?.on_time_rate_percent || 0 }}%</div>\r
\r
                        &lt;!&ndash;Progress Bar&ndash;&gt;\r
                        <div class="relative w-full overflow-hidden rounded-full h-1 mt-1 bg-gray-200">\r
                          <div class="h-full w-full flex-1 transition-all"></div>\r
                        </div>\r
\r
                      </div>\r
\r
                      <div class="p-3 bg-gray-100 rounded-lg">\r
                        <div class="flex items-center gap-2 mb-1">\r
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                               stroke="currentColor" class="size-4 text-yellow-500">\r
                            <path stroke-linecap="round" stroke-linejoin="round"\r
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>\r
                          </svg>\r
\r
                          <span class="text-xs text-gray-800 font-medium">Avg. Completion</span></div>\r
                        <div class="text-lg font-bold text-yellow-500">{{ analytics?.avg_completion_days || 0 }}d</div>\r
                      </div>\r
\r
                      <div class="p-3 bg-gray-100 rounded-lg">\r
                        <div class="flex items-center gap-2 mb-1">\r
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                               stroke="currentColor" class="size-4 text-green-500">\r
                            <path stroke-linecap="round" stroke-linejoin="round"\r
                                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
                          </svg>\r
                          <span class="text-xs text-gray-800 font-medium">Labor Cost</span></div>\r
                        <div class="text-lg font-bold text-green-500">\${{ analytics?.labor_cost_total || 0 }}</div>\r
                      </div>\r
                    </div>\r
\r
                    &lt;!&ndash;Top Performance&ndash;&gt;\r
                    <div class="space-y-3 pb-6 border-b border-gray-200">\r
                      <h4 class="text-sm font-medium flex items-center gap-2">\r
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                             class="size-4">\r
                          <circle cx="12" cy="12" r="10"></circle>\r
                          <circle cx="12" cy="12" r="6"></circle>\r
                          <circle cx="12" cy="12" r="2"></circle>\r
                        </svg>\r
                        Top Performers\r
                      </h4>\r
\r
                      <div class="space-y-2">\r
                        <div *ngFor="let perf of (analytics?.top_performers || []); let i = index"\r
                          class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">\r
                          <div class="flex items-center gap-2">\r
                            <div class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-xs font-bold text-white">{{ i + 1 }}</div>\r
                            <div>\r
                              <p class="text-sm font-medium">{{ perf.first_name }} {{ perf.last_name }}</p>\r
                              <p class="text-xs text-muted-foreground">{{ perf.completed_count }} completed</p>\r
                            </div>\r
                          </div>\r
                          <div class="text-right">\r
                            <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white text-xs bg-blue-100">\r
                              {{ analytics?.productivity_rate_percent || 0 }}%\r
                            </div>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
\r
                    &lt;!&ndash;Quick actions&ndash;&gt;\r
                    <div class="space-y-3">\r
                      <h4 class="text-sm font-medium flex items-center gap-2">\r
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                             stroke="currentColor" class="size-4">\r
                          <path stroke-linecap="round" stroke-linejoin="round"\r
                                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>\r
                        </svg>\r
                        Quick Actions\r
                      </h4>\r
                      <div class="grid grid-cols-1 gap-2">\r
                        <button\r
                          class="cursor-pointer bg-gray-100 rounded-lg p-2 hover:bg-blue-100 group transition-colors inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium hover:text-blue-600">\r
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                               stroke="currentColor" class="size-4 mr-2 group-hover:text-blue-600">\r
                            <path stroke-linecap="round" stroke-linejoin="round"\r
                                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>\r
                          </svg>\r
\r
                          View Team Schedule\r
                        </button>\r
\r
                        <button\r
                          class="cursor-pointer bg-gray-100 rounded-lg p-2 hover:bg-blue-100 group transition-colors inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium hover:text-blue-600">\r
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                               class="size-4 mr-2 group-hover:text-blue-600">\r
                            <circle cx="12" cy="12" r="10"></circle>\r
                            <circle cx="12" cy="12" r="6"></circle>\r
                            <circle cx="12" cy="12" r="2"></circle>\r
                          </svg>\r
                          Set Performance Goals\r
                        </button>\r
                        <button\r
                          class="cursor-pointer bg-gray-100 rounded-lg p-2 hover:bg-blue-100 group transition-colors inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium hover:text-blue-600">\r
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                               class="lucide lucide-chart-column h-3 w-3 mr-2">\r
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>\r
                            <path d="M18 17V9"></path>\r
                            <path d="M13 17V5"></path>\r
                            <path d="M8 17v-3"></path>\r
                          </svg>\r
                          Generate Report\r
                        </button>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>-->\r
    </div>\r
\r
\r
\r
\r
\r
\r
  <!-- Modals -->\r
  <app-team-delete-confirmation-modal\r
    *ngIf="showDeleteModal"\r
    [teamMember]="teamMemberToDelete"\r
    (confirmed)="confirmDeleteTeamMember($event)"\r
    (cancelled)="closeDeleteModal()">\r
  </app-team-delete-confirmation-modal>\r
\r
  <app-team-form-modal\r
    *ngIf="showFormModal"\r
    [teamMember]="teamMemberToEdit"\r
    [isEditMode]="isEditMode"\r
    (teamMemberSaved)="onTeamMemberSaved($event)"\r
    (cancelled)="closeFormModal()">\r
  </app-team-form-modal>\r
\r
  <app-assign-work-order-modal\r
    *ngIf="showAssignModal"\r
    [teamMemberName]="teamMemberToAssign ? getTeamMemberFullName(teamMemberToAssign) : ''"\r
    [teamMemberId]="teamMemberToAssign ? teamMemberToAssign.id : 0"\r
    (closed)="closeAssign()"\r
    (submitted)="onAssignmentSubmitted($event)">\r
  </app-assign-work-order-modal>\r
</div>\r
`, styles: ["/* src/app/teams/team-list/team-list.component.scss */\n.team-list-page .team-card {\n  border-radius: 1rem;\n  box-shadow: 0 2px 8px 0 rgba(16, 30, 54, 0.08);\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #bfdbfe;\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s;\n}\n.team-list-page .team-card hr {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  border-color: #e5e7eb;\n}\n.team-list-page .team-card-header {\n  background: #e0edff;\n  height: 8rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  overflow: hidden;\n}\n.team-list-page .dropdown-enter {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n.team-list-page .dropdown-enter-active {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.team-list-page .dropdown-exit {\n  opacity: 1;\n  transform: translateY(0);\n}\n.team-list-page .dropdown-exit-active {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.team-list-page .team-card:hover {\n  box-shadow: 0 4px 12px 0 rgba(16, 30, 54, 0.12);\n}\n.team-list-page .stat-card {\n  transition: transform 0.2s ease-in-out;\n}\n.team-list-page .stat-card:hover {\n  transform: translateY(-2px);\n}\n.team-list-page .search-input:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.team-list-page .btn-primary {\n  transition: all 0.2s ease-in-out;\n}\n.team-list-page .btn-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.team-list-page .table-row:hover {\n  background-color: #f9fafb;\n}\n.team-list-page .loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .team-list-page .grid {\n    grid-template-columns: 1fr;\n  }\n  .team-list-page .statistics-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .team-list-page .statistics-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=team-list.component.css.map */\n"] }]
  }], () => [{ type: TeamService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamListComponent, { className: "TeamListComponent", filePath: "src/app/teams/team-list/team-list.component.ts", lineNumber: 16 });
})();

// src/app/teams/teams-routing.module.ts
var routes = [
  {
    path: "",
    component: TeamListComponent
  }
];
var TeamsRoutingModule = class _TeamsRoutingModule {
  static \u0275fac = function TeamsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TeamsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/teams/teams.module.ts
var TeamsModule = class _TeamsModule {
  static \u0275fac = function TeamsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TeamsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TeamsRoutingModule,
    TeamListComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        TeamsRoutingModule,
        TeamListComponent
      ]
    }]
  }], null, null);
})();
export {
  TeamsModule
};
//# sourceMappingURL=chunk-2GYKE73M.js.map
