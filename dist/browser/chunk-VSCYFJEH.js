import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-LZKWF3AL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ISERUI2H.js";
import {
  CommonModule,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SCVX3V3B.js";

// src/app/assets/components/delete-confirmation-modal/delete-confirmation-modal.component.ts
function DeleteConfirmationModalComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.warningText);
  }
}
function DeleteConfirmationModalComponent_div_0_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Delete ", ctx_r1.itemName || ctx_r1.selectedCount + " " + (ctx_r1.selectedCount === 1 ? ctx_r1.entitySingular : ctx_r1.entityPlural), "");
  }
}
function DeleteConfirmationModalComponent_div_0_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "circle", 33)(3, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Deleting...");
    \u0275\u0275elementEnd()();
  }
}
function DeleteConfirmationModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function DeleteConfirmationModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "path", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "label", 14);
    \u0275\u0275text(15, "Deletion Reason (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 15);
    \u0275\u0275twoWayListener("ngModelChange", function DeleteConfirmationModalComponent_div_0_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.deletionReason, $event) || (ctx_r1.deletionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 16);
    \u0275\u0275text(18, "This will be recorded in the audit trail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 17)(20, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 19);
    \u0275\u0275element(22, "path", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 20)(24, "h3", 21);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 22);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, DeleteConfirmationModalComponent_div_0_div_28_Template, 3, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 24)(30, "button", 25);
    \u0275\u0275listener("click", function DeleteConfirmationModalComponent_div_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(31, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 26);
    \u0275\u0275listener("click", function DeleteConfirmationModalComponent_div_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275template(33, DeleteConfirmationModalComponent_div_0_span_33_Template, 2, 1, "span", 27)(34, DeleteConfirmationModalComponent_div_0_span_34_Template, 6, 0, "span", 28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.title || (ctx_r1.itemName ? "Delete " + ctx_r1.itemName : "Delete Selected " + (ctx_r1.selectedCount === 1 ? ctx_r1.entitySingular : ctx_r1.entityPlural)), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(7);
    \u0275\u0275propertyInterpolate1("placeholder", "Enter reason for permanently deleting ", ctx_r1.itemName ? "this part" : "these " + (ctx_r1.selectedCount === 1 ? ctx_r1.entitySingular.toLowerCase() : ctx_r1.entityPlural.toLowerCase()), "...");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.deletionReason);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" Are you sure you want to permanently delete ", ctx_r1.itemName || ctx_r1.selectedCount + " " + (ctx_r1.selectedCount === 1 ? ctx_r1.entitySingular.toLowerCase() : ctx_r1.entityPlural.toLowerCase()), "? ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" This action cannot be undone. ", ctx_r1.itemName ? 'The part "' + ctx_r1.itemName + '"' : "The " + (ctx_r1.selectedCount === 1 ? ctx_r1.entitySingular.toLowerCase() : ctx_r1.entityPlural.toLowerCase()), " will be permanently removed from the system. ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.warningText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var DeleteConfirmationModalComponent = class _DeleteConfirmationModalComponent {
  isOpen = false;
  selectedCount = 0;
  // Customizable labels so this modal can be reused across entities
  entitySingular = "Asset";
  entityPlural = "Assets";
  title = null;
  warningText = "\u26A0\uFE0F Warning: Only archived assets can be permanently deleted";
  // For showing specific item name instead of generic text
  itemName = null;
  closeModal = new EventEmitter();
  confirmDelete = new EventEmitter();
  loading = false;
  deletionReason = "";
  onConfirm() {
    this.loading = true;
    this.confirmDelete.emit(this.deletionReason);
    setTimeout(() => {
      this.loading = false;
      this.deletionReason = "";
    }, 2e3);
  }
  onCancel() {
    if (this.loading)
      return;
    this.deletionReason = "";
    this.closeModal.emit();
  }
  static \u0275fac = function DeleteConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeleteConfirmationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteConfirmationModalComponent, selectors: [["app-delete-confirmation-modal"]], inputs: { isOpen: "isOpen", selectedCount: "selectedCount", entitySingular: "entitySingular", entityPlural: "entityPlural", title: "title", warningText: "warningText", itemName: "itemName" }, outputs: { closeModal: "closeModal", confirmDelete: "confirmDelete" }, decls: 1, vars: 1, consts: [["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-md", "w-full"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-red-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], [1, "mb-6"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["rows", "3", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "focus:border-transparent", "resize-none", "placeholder-gray-400", 3, "ngModelChange", "ngModel", "placeholder"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "flex", "justify-center", "mb-4"], [1, "w-16", "h-16", "bg-red-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-red-600"], [1, "text-center", "mb-6"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-2"], [1, "text-gray-600"], ["class", "mt-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "space-x-3"], [1, "px-6", "py-2", "bg-gray-100", "text-gray-700", "font-medium", "rounded-lg", "hover:bg-gray-200", "focus:outline-none", "focus:ring-2", "focus:ring-gray-300", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "px-6", "py-2", "bg-red-600", "text-white", "font-medium", "rounded-lg", "hover:bg-red-700", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "mt-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-800", "text-sm", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function DeleteConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DeleteConfirmationModalComponent_div_0_Template, 35, 14, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.warning-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=delete-confirmation-modal.component.css.map */"], data: { animation: [
    trigger("backdropAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("150ms ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({ opacity: 0 }))
      ])
    ]),
    trigger("modalAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }),
        animate("200ms ease-out", style({
          opacity: 1,
          transform: "scale(1) translateY(0)"
        }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-delete-confirmation-modal", standalone: true, imports: [CommonModule, FormsModule], animations: [
      trigger("backdropAnimation", [
        transition(":enter", [
          style({ opacity: 0 }),
          animate("150ms ease-out", style({ opacity: 1 }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({ opacity: 0 }))
        ])
      ]),
      trigger("modalAnimation", [
        transition(":enter", [
          style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }),
          animate("200ms ease-out", style({
            opacity: 1,
            transform: "scale(1) translateY(0)"
          }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }))
        ])
      ])
    ], template: `<!-- Delete Confirmation Modal -->\r
<div *ngIf="isOpen"\r
     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4"\r
     [@backdropAnimation]>\r
  <!-- Modal Container -->\r
  <div class="bg-white rounded-2xl shadow-xl max-w-md w-full"\r
       [@modalAnimation]>\r
    <!-- Modal Header -->\r
    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r
      <div class="flex items-center space-x-3">\r
        <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
          </svg>\r
        </div>\r
        <h2 class="text-xl font-semibold text-gray-900">\r
          {{ title || (itemName ? 'Delete ' + itemName : 'Delete Selected ' + (selectedCount === 1 ? entitySingular : entityPlural)) }}\r
        </h2>\r
      </div>\r
      <button\r
        (click)="onCancel()"\r
        [disabled]="loading"\r
        class="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50">\r
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Content -->\r
    <div class="p-6">\r
      <!-- Deletion Reason Input -->\r
      <div class="mb-6">\r
        <label class="block text-sm font-medium text-gray-700 mb-2">Deletion Reason (Optional)</label>\r
        <textarea\r
          [(ngModel)]="deletionReason"\r
          rows="3"\r
          placeholder="Enter reason for permanently deleting {{ itemName ? 'this part' : 'these ' + (selectedCount === 1 ? entitySingular.toLowerCase() : entityPlural.toLowerCase()) }}..."\r
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none placeholder-gray-400"></textarea>\r
        <p class="text-xs text-gray-500 mt-1">This will be recorded in the audit trail</p>\r
      </div>\r
\r
      <!-- Warning Icon -->\r
      <div class="flex justify-center mb-4">\r
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">\r
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
          </svg>\r
        </div>\r
      </div>\r
\r
      <!-- Confirmation Message -->\r
      <div class="text-center mb-6">\r
        <h3 class="text-lg font-semibold text-gray-900 mb-2">\r
          Are you sure you want to permanently delete {{ itemName || (selectedCount + ' ' + (selectedCount === 1 ? entitySingular.toLowerCase() : entityPlural.toLowerCase())) }}?\r
        </h3>\r
        <p class="text-gray-600">\r
          This action cannot be undone. {{ itemName ? 'The part "' + itemName + '"' : 'The ' + (selectedCount === 1 ? entitySingular.toLowerCase() : entityPlural.toLowerCase()) }} will be permanently removed from the system.\r
        </p>\r
        <div *ngIf="warningText" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
          <p class="text-red-800 text-sm font-medium">{{ warningText }}</p>\r
        </div>\r
      </div>\r
\r
      <!-- Action Buttons -->\r
      <div class="flex items-center justify-end space-x-3">\r
        <button\r
          (click)="onCancel()"\r
          [disabled]="loading"\r
          class="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">\r
          Cancel\r
        </button>\r
\r
        <button\r
          (click)="onConfirm()"\r
          [disabled]="loading"\r
          class="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">\r
          <span *ngIf="!loading">Delete {{ itemName || (selectedCount + ' ' + (selectedCount === 1 ? entitySingular : entityPlural)) }}</span>\r
          <span *ngIf="loading" class="flex items-center space-x-2">\r
            <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
            <span>Deleting...</span>\r
          </span>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/assets/components/delete-confirmation-modal/delete-confirmation-modal.component.scss */\n.modal-backdrop {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.warning-icon {\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n.loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .modal-container {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=delete-confirmation-modal.component.css.map */\n"] }]
  }], null, { isOpen: [{
    type: Input
  }], selectedCount: [{
    type: Input
  }], entitySingular: [{
    type: Input
  }], entityPlural: [{
    type: Input
  }], title: [{
    type: Input
  }], warningText: [{
    type: Input
  }], itemName: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], confirmDelete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteConfirmationModalComponent, { className: "DeleteConfirmationModalComponent", filePath: "src/app/assets/components/delete-confirmation-modal/delete-confirmation-modal.component.ts", lineNumber: 42 });
})();

export {
  DeleteConfirmationModalComponent
};
//# sourceMappingURL=chunk-VSCYFJEH.js.map
