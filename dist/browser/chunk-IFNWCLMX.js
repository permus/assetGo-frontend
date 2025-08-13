import {
  RoleService
} from "./chunk-C5XD4BW2.js";
import {
  AuthService
} from "./chunk-5RUWZRCY.js";
import {
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
} from "./chunk-RCYJD2NT.js";
import {
  RouterModule
} from "./chunk-WX4YBHDT.js";
import {
  environment
} from "./chunk-5YESG6NV.js";
import {
  HttpClient
} from "./chunk-3DQDTIJW.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-E3IEKUEF.js";
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

// src/app/teams/services/team.service.ts
var TeamService = class _TeamService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/teams`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return {
      headers: __spreadValues({
        "Content-Type": "application/json"
      }, token ? { "Authorization": `Bearer ${token}` } : {})
    };
  }
  // Get all team members
  getTeamMembers() {
    return this.http.get(this.apiUrl, this.getAuthHeaders());
  }
  // Get a specific team member
  getTeamMember(id) {
    return this.http.get(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Create a new team member (invite)
  createTeamMember(teamMemberData) {
    return this.http.post(this.apiUrl, teamMemberData, this.getAuthHeaders());
  }
  // Update a team member
  updateTeamMember(id, teamMemberData) {
    return this.http.put(`${this.apiUrl}/${id}`, teamMemberData, this.getAuthHeaders());
  }
  // Delete a team member
  deleteTeamMember(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Resend invitation
  resendInvitation(id) {
    return this.http.post(`${this.apiUrl}/${id}/resend-invitation`, {}, this.getAuthHeaders());
  }
  // Get team member statistics
  getTeamMemberStatistics() {
    return this.http.get(`${this.apiUrl}/statistics`, this.getAuthHeaders());
  }
  // Get available roles for team members
  getAvailableRoles() {
    return this.http.get(`${this.apiUrl}/available-roles`, this.getAuthHeaders());
  }
  static \u0275fac = function TeamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamService, factory: _TeamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

// src/app/teams/components/team-form-modal/team-form-modal.component.ts
function TeamFormModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 35);
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
    \u0275\u0275elementStart(0, "p", 36);
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
    \u0275\u0275elementStart(0, "p", 36);
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
    \u0275\u0275elementStart(0, "p", 36);
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
    \u0275\u0275elementStart(0, "option", 37);
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
    \u0275\u0275elementStart(0, "p", 36);
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
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.rolesError, " ");
  }
}
function TeamFormModalComponent_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("hourly_rate"), " ");
  }
}
function TeamFormModalComponent__svg_svg_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38);
    \u0275\u0275element(1, "circle", 39)(2, "path", 40);
    \u0275\u0275elementEnd();
  }
}
var TeamFormModalComponent = class _TeamFormModalComponent {
  fb;
  teamService;
  roleService;
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
  constructor(fb, teamService, roleService) {
    this.fb = fb;
    this.teamService = teamService;
    this.roleService = roleService;
    this.teamMemberForm = this.fb.group({
      first_name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      last_name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ["", [Validators.required, Validators.email]],
      role_id: ["", [Validators.required]],
      hourly_rate: [null, [Validators.min(0)]]
    });
    this.loadAvailableRoles();
  }
  ngOnInit() {
    if (this.teamMember && this.isEditMode) {
      this.loadTeamMember();
    }
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
      const roleId = this.teamMember.role_id || this.teamMember.role?.id;
      const hourlyRate = this.teamMember.hourly_rate;
      console.log("Role ID:", roleId, "Type:", typeof roleId);
      console.log("Hourly Rate:", hourlyRate, "Type:", typeof hourlyRate);
      const roleIdNumber = roleId ? Number(roleId) : "";
      this.teamMemberForm.patchValue({
        first_name: this.teamMember.first_name,
        last_name: this.teamMember.last_name,
        email: this.teamMember.email,
        role_id: roleIdNumber,
        hourly_rate: hourlyRate || null
      });
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
    const formData = this.teamMemberForm.value;
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
  static \u0275fac = function TeamFormModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamFormModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TeamService), \u0275\u0275directiveInject(RoleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamFormModalComponent, selectors: [["app-team-form-modal"]], inputs: { teamMember: "teamMember", isEditMode: "isEditMode" }, outputs: { teamMemberSaved: "teamMemberSaved", cancelled: "cancelled" }, features: [\u0275\u0275NgOnChangesFeature], decls: 49, vars: 23, consts: [[1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", 3, "click"], [1, "bg-white", "rounded-xl", "shadow-2xl", "w-full", "max-w-md", "mx-4", "transform", "transition-all"], [1, "px-6", "py-4", "border-b", "border-gray-200"], [1, "flex", "items-center", "justify-between"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "px-6", "py-4"], [3, "ngSubmit", "formGroup"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "mb-4"], ["for", "first_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "first_name", "type", "text", "formControlName", "first_name", "placeholder", "Enter first name", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], ["class", "mt-1 text-sm text-red-600", 4, "ngIf"], ["for", "last_name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "last_name", "type", "text", "formControlName", "last_name", "placeholder", "Enter last name", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Enter email address", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], ["for", "role_id", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "role_id", "formControlName", "role_id", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "mb-6"], ["for", "hourly_rate", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "hourly_rate", "type", "number", "formControlName", "hourly_rate", "placeholder", "Enter hourly rate", "min", "0", "step", "0.01", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors"], [1, "mt-1", "text-xs", "text-gray-500"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-200"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-colors", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-blue-600", "border", "border-transparent", "rounded-lg", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white inline", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "flex"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-400", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "ml-2", "text-sm", "text-red-700"], [1, "mt-1", "text-sm", "text-red-600"], [3, "value"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white", "inline"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function TeamFormModalComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(36, "div", 23)(37, "label", 24);
      \u0275\u0275text(38, " Hourly Rate (Optional) ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 25);
      \u0275\u0275template(40, TeamFormModalComponent_p_40_Template, 2, 1, "p", 14);
      \u0275\u0275elementStart(41, "p", 26);
      \u0275\u0275text(42, " Optional hourly rate for this team member ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 27)(44, "button", 28);
      \u0275\u0275listener("click", function TeamFormModalComponent_Template_button_click_44_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(45, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 29);
      \u0275\u0275template(47, TeamFormModalComponent__svg_svg_47_Template, 3, 0, "svg", 30);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_5_0;
      let tmp_7_0;
      let tmp_9_0;
      let tmp_13_0;
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
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-300", ((tmp_13_0 = ctx.teamMemberForm.get("hourly_rate")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.teamMemberForm.get("hourly_rate")) == null ? null : tmp_13_0.dirty) || ((tmp_13_0 = ctx.teamMemberForm.get("hourly_rate")) == null ? null : tmp_13_0.touched)));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("hourly_rate"));
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.teamMemberForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Team Member" : "Send Invitation", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormsModule], styles: ["\n\n.modal-enter[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.9);\n}\n.modal-enter-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out;\n}\n.modal-exit[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.modal-exit-active[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 0.2s ease-in, transform 0.2s ease-in;\n}\n.backdrop-enter[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.backdrop-enter-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.2s ease-out;\n}\n.backdrop-exit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.backdrop-exit-active[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.2s ease-in;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\nbutton[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: translateY(-1px);\n  transition: transform 0.1s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n/*# sourceMappingURL=team-form-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamFormModalComponent, [{
    type: Component,
    args: [{ selector: "app-team-form-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<!-- Modal Backdrop -->\r
<div class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50" (click)="onBackdropClick($event)">\r
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
`, styles: ["/* src/app/teams/components/team-form-modal/team-form-modal.component.scss */\n.modal-enter {\n  opacity: 0;\n  transform: scale(0.9);\n}\n.modal-enter-active {\n  opacity: 1;\n  transform: scale(1);\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out;\n}\n.modal-exit {\n  opacity: 1;\n  transform: scale(1);\n}\n.modal-exit-active {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 0.2s ease-in, transform 0.2s ease-in;\n}\n.backdrop-enter {\n  opacity: 0;\n}\n.backdrop-enter-active {\n  opacity: 1;\n  transition: opacity 0.2s ease-out;\n}\n.backdrop-exit {\n  opacity: 1;\n}\n.backdrop-exit-active {\n  opacity: 0;\n  transition: opacity 0.2s ease-in;\n}\ninput:focus,\ntextarea:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\nbutton:not(:disabled):hover {\n  transform: translateY(-1px);\n  transition: transform 0.1s ease-in-out;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n/*# sourceMappingURL=team-form-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: TeamService }, { type: RoleService }], { teamMember: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamFormModalComponent, { className: "TeamFormModalComponent", filePath: "src/app/teams/components/team-form-modal/team-form-modal.component.ts", lineNumber: 15 });
})();

// src/app/teams/team-list/team-list.component.ts
function TeamListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 35);
    \u0275\u0275element(5, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 37)(7, "p", 38);
    \u0275\u0275text(8, "Total Team Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 32)(12, "div", 33)(13, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 41);
    \u0275\u0275element(15, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 37)(17, "p", 38);
    \u0275\u0275text(18, "Active Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 39);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 32)(22, "div", 33)(23, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 44);
    \u0275\u0275element(25, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 37)(27, "p", 38);
    \u0275\u0275text(28, "Pending Invitations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 39);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.statistics.total_team_members);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.statistics.active_team_members);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.statistics.pending_team_members);
  }
}
function TeamListComponent_div_26_div_2__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function TeamListComponent_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function TeamListComponent_div_26_div_2_Template_div_click_0_listener() {
      const sort_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectSort(sort_r3));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TeamListComponent_div_26_div_2__svg_svg_3_Template, 2, 0, "svg", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sort_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-blue-100", (ctx_r0.selectedSort == null ? null : ctx_r0.selectedSort.value) === sort_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sort_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.selectedSort == null ? null : ctx_r0.selectedSort.value) === sort_r3.value);
  }
}
function TeamListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275template(2, TeamListComponent_div_26_div_2_Template, 4, 4, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.sortOptions);
  }
}
function TeamListComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementEnd();
  }
}
function TeamListComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function TeamListComponent_div_32_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 47)(2, "button", 81);
    \u0275\u0275listener("click", function TeamListComponent_div_32_div_1_div_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const teamMember_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editTeamMember(teamMember_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 82);
    \u0275\u0275element(4, "path", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Edit Member");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 84);
    \u0275\u0275listener("click", function TeamListComponent_div_32_div_1_div_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const teamMember_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteTeamMember(teamMember_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 85);
    \u0275\u0275element(9, "path", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Remove Member");
    \u0275\u0275elementEnd()()()();
  }
}
function TeamListComponent_div_32_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 78);
    \u0275\u0275element(2, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamMember_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(teamMember_r5.role.name);
  }
}
function TeamListComponent_div_32_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 78);
    \u0275\u0275element(2, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamMember_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", teamMember_r5.hourly_rate, "/hour");
  }
}
function TeamListComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 17)(3, "div", 33)(4, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 35);
    \u0275\u0275element(6, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "span", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 66)(11, "button", 67);
    \u0275\u0275listener("click", function TeamListComponent_div_32_div_1_Template_button_click_11_listener() {
      const teamMember_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleTeamMemberMenu(teamMember_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 68);
    \u0275\u0275element(13, "path", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, TeamListComponent_div_32_div_1_div_14_Template, 12, 0, "div", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 71)(16, "h3", 72);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 73);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, TeamListComponent_div_32_div_1_div_20_Template, 5, 1, "div", 74);
    \u0275\u0275element(21, "hr", 75);
    \u0275\u0275template(22, TeamListComponent_div_32_div_1_div_22_Template, 5, 1, "div", 76);
    \u0275\u0275elementStart(23, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 78);
    \u0275\u0275element(25, "path", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const teamMember_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", teamMember_r5.email_verified_at ? "Active" : "Pending", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", teamMember_r5.showMenu);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getTeamMemberFullName(teamMember_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teamMember_r5.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", teamMember_r5.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", teamMember_r5.hourly_rate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Created ", \u0275\u0275pipeBind2(28, 7, teamMember_r5.created_at, "MMM d, y"), "");
  }
}
function TeamListComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, TeamListComponent_div_32_div_1_Template, 29, 10, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredTeamMembers);
  }
}
function TeamListComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 92);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 93);
    \u0275\u0275text(4, "No team members found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 94);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 95)(8, "button", 96);
    \u0275\u0275listener("click", function TeamListComponent_div_33_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createTeamMember());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 6);
    \u0275\u0275element(10, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Invite Team Member ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.searchTerm ? "Try adjusting your search terms." : "Get started by inviting your first team member.", " ");
  }
}
function TeamListComponent_app_team_delete_confirmation_modal_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-team-delete-confirmation-modal", 97);
    \u0275\u0275listener("confirmed", function TeamListComponent_app_team_delete_confirmation_modal_34_Template_app_team_delete_confirmation_modal_confirmed_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteTeamMember($event));
    })("cancelled", function TeamListComponent_app_team_delete_confirmation_modal_34_Template_app_team_delete_confirmation_modal_cancelled_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("teamMember", ctx_r0.teamMemberToDelete);
  }
}
function TeamListComponent_app_team_form_modal_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-team-form-modal", 98);
    \u0275\u0275listener("teamMemberSaved", function TeamListComponent_app_team_form_modal_35_Template_app_team_form_modal_teamMemberSaved_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTeamMemberSaved($event));
    })("cancelled", function TeamListComponent_app_team_form_modal_35_Template_app_team_form_modal_cancelled_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFormModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("teamMember", ctx_r0.teamMemberToEdit)("isEditMode", ctx_r0.isEditMode);
  }
}
var TeamListComponent = class _TeamListComponent {
  teamService;
  teamMembers = [];
  filteredTeamMembers = [];
  loading = false;
  error = "";
  statistics = null;
  // Search and filtering
  searchTerm = "";
  // Sorting
  selectedSort = null;
  selectedSortDir = "asc";
  showSortDropdown = false;
  // Modal states
  showDeleteModal = false;
  teamMemberToDelete = null;
  showFormModal = false;
  teamMemberToEdit = null;
  isEditMode = false;
  // Sort options
  sortOptions = [
    { label: "Name", value: "name" },
    { label: "Created Date", value: "created_at" },
    { label: "Email", value: "email" },
    { label: "Role", value: "role" }
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
  loadTeamMembers() {
    this.loading = true;
    this.error = "";
    this.teamService.getTeamMembers().subscribe({
      next: (response) => {
        this.teamMembers = response.data;
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
  getActiveTeamMembersCount() {
    return this.statistics?.active_team_members || 0;
  }
  getTotalTeamMembersCount() {
    return this.statistics?.total_team_members || 0;
  }
  onSearchChange() {
    this.filterTeamMembers();
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
  selectSort(sort) {
    this.selectedSort = sort;
    this.showSortDropdown = false;
    this.sortTeamMembers();
  }
  toggleSortDir() {
    this.selectedSortDir = this.selectedSortDir === "asc" ? "desc" : "asc";
    this.sortTeamMembers();
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
  }, decls: 36, vars: 15, consts: [[1, "team-list-page", "min-h-screen", "bg-gray-50", "p-6"], [1, "mb-6", "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "flex", "items-center", "space-x-3", "mt-4", "md:mt-0"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "px-5", "py-2", "rounded-lg", "shadow-sm", "transition-colors", "flex", "items-center", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], ["class", "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", 4, "ngIf"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "mb-6"], [1, "flex-1", "flex", "flex-col", "space-y-3", "md:space-y-0", "md:flex-row", "md:items-center", "md:space-x-3"], [1, "relative", "w-full", "md:w-80"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search team members by name or email...", 1, "w-full", "pl-10", "pr-4", "py-2", "border-2", "border-blue-300", "rounded-xl", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", 3, "ngModelChange", "input", "ngModel"], [1, "relative", 3, "click"], ["type", "button", 1, "w-full", "px-4", "py-2", "text-left", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-white", "transition-all", "min-w-[180px]", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "text-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg", 4, "ngIf"], [1, "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "bg-white", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], ["class", "flex justify-center items-center py-12", 4, "ngIf"], ["class", "bg-red-50 border border-red-200 rounded-lg p-4 mb-6", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", 4, "ngIf"], ["class", "text-center py-12", 4, "ngIf"], [3, "teamMember", "confirmed", "cancelled", 4, "ngIf"], [3, "teamMember", "isEditMode", "teamMemberSaved", "cancelled", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "mb-6"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "p-6", "shadow-sm"], [1, "flex", "items-center"], [1, "w-12", "h-12", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "ml-4"], [1, "text-sm", "font-medium", "text-gray-600"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "w-12", "h-12", "bg-green-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "w-12", "h-12", "bg-orange-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-orange-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "absolute", "z-10", "w-full", "mt-1", "bg-white", "border", "border-gray-300", "rounded-lg", "shadow-lg"], [1, "py-1"], ["class", "px-3 py-2 text-sm text-gray-900 hover:bg-blue-50 cursor-pointer transition-colors flex items-center justify-between", 3, "bg-blue-100", "click", 4, "ngFor", "ngForOf"], [1, "px-3", "py-2", "text-sm", "text-gray-900", "hover:bg-blue-50", "cursor-pointer", "transition-colors", "flex", "items-center", "justify-between", 3, "click"], ["class", "w-4 h-4 text-blue-600", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "flex", "justify-center", "items-center", "py-12"], [1, "animate-spin", "rounded-full", "h-8", "w-8", "border-b-2", "border-blue-600"], [1, "bg-red-50", "border", "border-red-200", "rounded-lg", "p-4", "mb-6"], [1, "flex"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-400", "mt-0.5"], [1, "ml-2", "text-sm", "text-red-700"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "shadow-sm", "hover:shadow-md", "transition-shadow", "overflow-hidden"], [1, "bg-blue-50", "px-6", "py-4", "relative"], [1, "w-12", "h-12", "bg-blue-100", "rounded-full", "flex", "items-center", "justify-center", "mr-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "text-sm", "font-medium", "text-blue-600"], [1, "relative"], [1, "text-gray-400", "hover:text-gray-600", "p-1.5", "rounded-full", "hover:bg-gray-100", "transition-colors", "focus:outline-none", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"], ["class", "absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20", 4, "ngIf"], [1, "px-6", "py-4"], [1, "text-xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-600", "mb-4"], ["class", "flex items-center text-sm text-gray-500 mb-3", 4, "ngIf"], [1, "my-3", "border-gray-200"], ["class", "flex items-center text-sm text-gray-500 mb-2", 4, "ngIf"], [1, "flex", "items-center", "text-sm", "text-gray-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "absolute", "right-0", "mt-1", "w-40", "bg-white", "rounded-lg", "shadow-lg", "border", "border-gray-200", "z-20"], [1, "flex", "items-center", "w-full", "px-3", "py-2.5", "text-sm", "text-gray-700", "hover:bg-gray-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2.5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "flex", "items-center", "w-full", "px-3", "py-2.5", "text-sm", "text-red-600", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2.5", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "flex", "items-center", "text-sm", "text-gray-500", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "flex", "items-center", "text-sm", "text-gray-500", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "text-center", "py-12"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "mx-auto", "h-12", "w-12", "text-gray-400"], [1, "mt-2", "text-sm", "font-medium", "text-gray-900"], [1, "mt-1", "text-sm", "text-gray-500"], [1, "mt-6"], [1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-transparent", "shadow-sm", "text-sm", "font-medium", "rounded-md", "text-white", "bg-blue-600", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", 3, "click"], [3, "confirmed", "cancelled", "teamMember"], [3, "teamMemberSaved", "cancelled", "teamMember", "isEditMode"]], template: function TeamListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Team Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage your team members and their roles within your organization");
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
      \u0275\u0275template(12, TeamListComponent_div_12_Template, 31, 3, "div", 8);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 12);
      \u0275\u0275element(17, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function TeamListComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function TeamListComponent_Template_input_input_18_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 15);
      \u0275\u0275listener("click", function TeamListComponent_Template_div_click_19_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(20, "button", 16);
      \u0275\u0275listener("click", function TeamListComponent_Template_button_click_20_listener() {
        return ctx.toggleSortDropdown();
      });
      \u0275\u0275elementStart(21, "div", 17)(22, "span", 18);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 19);
      \u0275\u0275element(25, "path", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(26, TeamListComponent_div_26_Template, 3, 1, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "button", 22);
      \u0275\u0275listener("click", function TeamListComponent_Template_button_click_27_listener() {
        return ctx.toggleSortDir();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 23);
      \u0275\u0275element(29, "path", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(30, TeamListComponent_div_30_Template, 2, 0, "div", 25)(31, TeamListComponent_div_31_Template, 6, 1, "div", 26)(32, TeamListComponent_div_32_Template, 2, 1, "div", 27)(33, TeamListComponent_div_33_Template, 12, 1, "div", 28)(34, TeamListComponent_app_team_delete_confirmation_modal_34_Template, 1, 1, "app-team-delete-confirmation-modal", 29)(35, TeamListComponent_app_team_form_modal_35_Template, 1, 2, "app-team-form-modal", 30);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.statistics);
      \u0275\u0275advance(6);
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
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredTeamMembers.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFormModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TeamDeleteConfirmationModalComponent, TeamFormModalComponent], styles: ["\n\n.team-list-page[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  box-shadow: 0 2px 8px 0 rgba(16, 30, 54, 0.08);\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #bfdbfe;\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s;\n}\n.team-list-page[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  border-color: #e5e7eb;\n}\n.team-list-page[_ngcontent-%COMP%]   .team-card-header[_ngcontent-%COMP%] {\n  background: #e0edff;\n  height: 8rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  overflow: hidden;\n}\n.team-list-page[_ngcontent-%COMP%]   .dropdown-enter[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n.team-list-page[_ngcontent-%COMP%]   .dropdown-enter-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.team-list-page[_ngcontent-%COMP%]   .dropdown-exit[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.team-list-page[_ngcontent-%COMP%]   .dropdown-exit-active[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.team-list-page[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px 0 rgba(16, 30, 54, 0.12);\n}\n.team-list-page[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n}\n.team-list-page[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.team-list-page[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.team-list-page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.team-list-page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.team-list-page[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.team-list-page[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .team-list-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-list-page[_ngcontent-%COMP%]   .statistics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .team-list-page[_ngcontent-%COMP%]   .statistics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=team-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamListComponent, [{
    type: Component,
    args: [{ selector: "app-team-list", standalone: true, imports: [CommonModule, FormsModule, TeamDeleteConfirmationModalComponent, TeamFormModalComponent], template: `<div class="team-list-page min-h-screen bg-gray-50 p-6">\r
  <!-- Page Title and Subtitle + Actions -->\r
  <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Team Members</h1>\r
      <p class="text-gray-600 text-base">Manage your team members and their roles within your organization</p>\r
    </div>\r
    <div class="flex items-center space-x-3 mt-4 md:mt-0">\r
      <button (click)="createTeamMember()" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-sm transition-colors flex items-center cursor-pointer">\r
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
        </svg>\r
        Invite Team Member\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Statistics Cards -->\r
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" *ngIf="statistics">\r
    <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">\r
      <div class="flex items-center">\r
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>\r
          </svg>\r
        </div>\r
        <div class="ml-4">\r
          <p class="text-sm font-medium text-gray-600">Total Team Members</p>\r
          <p class="text-2xl font-bold text-gray-900">{{ statistics.total_team_members }}</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">\r
      <div class="flex items-center">\r
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
        </div>\r
        <div class="ml-4">\r
          <p class="text-sm font-medium text-gray-600">Active Members</p>\r
          <p class="text-2xl font-bold text-gray-900">{{ statistics.active_team_members }}</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">\r
      <div class="flex items-center">\r
        <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
        </div>\r
        <div class="ml-4">\r
          <p class="text-sm font-medium text-gray-600">Pending Invitations</p>\r
          <p class="text-2xl font-bold text-gray-900">{{ statistics.pending_team_members }}</p>\r
        </div>\r
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
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
        </svg>\r
        <input\r
          type="text"\r
          placeholder="Search team members by name or email..."\r
          class="w-full pl-10 pr-4 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
          [(ngModel)]="searchTerm"\r
          (input)="onSearchChange()" />\r
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
            <svg class="w-4 h-4 text-gray-400 transition-transform duration-200" \r
                 [class.rotate-180]="showSortDropdown"\r
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
            </svg>\r
          </div>\r
        </button>\r
\r
        <!-- Sort Options Dropdown -->\r
        <div *ngIf="showSortDropdown" \r
             class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">\r
          <div class="py-1">\r
            <div *ngFor="let sort of sortOptions" \r
                 (click)="selectSort(sort)"\r
                 class="px-3 py-2 text-sm text-gray-900 hover:bg-blue-50 cursor-pointer transition-colors flex items-center justify-between"\r
                 [class.bg-blue-100]="selectedSort?.value === sort.value">\r
              <span>{{ sort.label }}</span>\r
              <svg *ngIf="selectedSort?.value === sort.value" class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" \r
                [attr.d]="selectedSortDir === 'asc' ? 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' : 'M17 8V4m0 0l4 4m-4-4l-4 4M7 16v4m0 0l-4-4m4 4l4-4'"></path>\r
        </svg>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="flex justify-center items-center py-12">\r
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">\r
    <div class="flex">\r
      <svg class="w-5 h-5 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
      <p class="ml-2 text-sm text-red-700">{{ error }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Team Members Cards -->\r
  <div *ngIf="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
    <div *ngFor="let teamMember of filteredTeamMembers" \r
         class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">\r
      \r
      <!-- Card Header (Light Blue Background) -->\r
      <div class="bg-blue-50 px-6 py-4 relative">\r
        <div class="flex items-center justify-between">\r
          <div class="flex items-center">\r
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">\r
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
              </svg>\r
            </div>\r
            <div>\r
              <span class="text-sm font-medium text-blue-600">\r
                {{ teamMember.email_verified_at ? 'Active' : 'Pending' }}\r
              </span>\r
            </div>\r
          </div>\r
          \r
          <!-- Options Menu -->\r
          <div class="relative">\r
            <button\r
              (click)="toggleTeamMemberMenu(teamMember.id)"\r
              class="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>\r
              </svg>\r
            </button>\r
            \r
            <!-- Dropdown Menu -->\r
            <div *ngIf="teamMember.showMenu" \r
                 class="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20">\r
              <div class="py-1">\r
                <!-- Edit Option -->\r
                <button\r
                  (click)="editTeamMember(teamMember)"\r
                  class="flex items-center w-full px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">\r
                  <svg class="w-4 h-4 mr-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                  </svg>\r
                  <span>Edit Member</span>\r
                </button>\r
                \r
                <!-- Remove Option -->\r
                <button\r
                  (click)="deleteTeamMember(teamMember)"\r
                  class="flex items-center w-full px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">\r
                  <svg class="w-4 h-4 mr-2.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>\r
          </svg>\r
          <span>{{ teamMember.role.name }}</span>\r
        </div>\r
        \r
        <!-- Separator Line -->\r
        <hr class="my-3 border-gray-200">\r
        \r
        <!-- Hourly Rate -->\r
        <div class="flex items-center text-sm text-gray-500 mb-2" *ngIf="teamMember.hourly_rate">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
          </svg>\r
          <span>\${{ teamMember.hourly_rate }}/hour</span>\r
        </div>\r
        \r
        <!-- Created Date -->\r
        <div class="flex items-center text-sm text-gray-500">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
          </svg>\r
          <span>Created {{ teamMember.created_at | date:'MMM d, y' }}</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!loading && filteredTeamMembers.length === 0" class="text-center py-12">\r
    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>\r
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
</div>\r
`, styles: ["/* src/app/teams/team-list/team-list.component.scss */\n.team-list-page .team-card {\n  border-radius: 1rem;\n  box-shadow: 0 2px 8px 0 rgba(16, 30, 54, 0.08);\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #bfdbfe;\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s;\n}\n.team-list-page .team-card hr {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  border-color: #e5e7eb;\n}\n.team-list-page .team-card-header {\n  background: #e0edff;\n  height: 8rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  overflow: hidden;\n}\n.team-list-page .dropdown-enter {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n.team-list-page .dropdown-enter-active {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.team-list-page .dropdown-exit {\n  opacity: 1;\n  transform: translateY(0);\n}\n.team-list-page .dropdown-exit-active {\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.team-list-page .team-card:hover {\n  box-shadow: 0 4px 12px 0 rgba(16, 30, 54, 0.12);\n}\n.team-list-page .stat-card {\n  transition: transform 0.2s ease-in-out;\n}\n.team-list-page .stat-card:hover {\n  transform: translateY(-2px);\n}\n.team-list-page .search-input:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.team-list-page .btn-primary {\n  transition: all 0.2s ease-in-out;\n}\n.team-list-page .btn-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.team-list-page .table-row:hover {\n  background-color: #f9fafb;\n}\n.team-list-page .loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .team-list-page .grid {\n    grid-template-columns: 1fr;\n  }\n  .team-list-page .statistics-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .team-list-page .statistics-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=team-list.component.css.map */\n"] }]
  }], () => [{ type: TeamService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamListComponent, { className: "TeamListComponent", filePath: "src/app/teams/team-list/team-list.component.ts", lineNumber: 15 });
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
//# sourceMappingURL=chunk-IFNWCLMX.js.map
