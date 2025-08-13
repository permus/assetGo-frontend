import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IWKUZ4XC.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  NgForOf,
  NgIf,
  Output,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7JZMUYI4.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/stock-adjustment-modal/stock-adjustment-modal.component.ts
function StockAdjustmentModalComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r1 = ctx.$implicit;
    \u0275\u0275property("value", part_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", part_r1.name, " - ", part_r1.description, " ");
  }
}
function StockAdjustmentModalComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("part"), " ");
  }
}
function StockAdjustmentModalComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r3 = ctx.$implicit;
    \u0275\u0275property("value", location_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r3.name, " ");
  }
}
function StockAdjustmentModalComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("location"), " ");
  }
}
function StockAdjustmentModalComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("adjustmentQuantity"), " ");
  }
}
function StockAdjustmentModalComponent_option_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r4 = ctx.$implicit;
    \u0275\u0275property("value", reason_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reason_r4.name, " ");
  }
}
function StockAdjustmentModalComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("reason"), " ");
  }
}
var StockAdjustmentModalComponent = class _StockAdjustmentModalComponent {
  fb;
  closeModal = new EventEmitter();
  adjustStock = new EventEmitter();
  adjustmentForm;
  // Sample data for dropdowns
  parts = [
    { id: 1, name: "part 1", description: "e2 \u2022 ews" },
    { id: 2, name: "part 2", description: "Sample part" }
  ];
  locations = [
    { id: 1, name: "Toilet" },
    { id: 2, name: "Kitchen" },
    { id: 3, name: "Office" }
  ];
  reasons = [
    { id: 1, name: "Damaged" },
    { id: 2, name: "Lost" },
    { id: 3, name: "Theft" },
    { id: 4, name: "Adjustment" },
    { id: 5, name: "Transfer" }
  ];
  constructor(fb) {
    this.fb = fb;
    this.adjustmentForm = this.fb.group({
      part: ["", [Validators.required]],
      location: ["", [Validators.required]],
      adjustmentQuantity: [0, [Validators.required]],
      reason: ["", [Validators.required]],
      notes: [""]
    });
  }
  onSubmit() {
    if (this.adjustmentForm.valid) {
      this.adjustStock.emit(this.adjustmentForm.value);
    }
  }
  onCancel() {
    this.closeModal.emit();
  }
  getFieldError(fieldName) {
    const field = this.adjustmentForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return "This field is required";
      }
    }
    return "";
  }
  getSelectedPartName() {
    const partId = this.adjustmentForm.get("part")?.value;
    const part = this.parts.find((p) => p.id === partId);
    return part ? part.name : "";
  }
  getSelectedLocationName() {
    const locationId = this.adjustmentForm.get("location")?.value;
    const location = this.locations.find((l) => l.id === locationId);
    return location ? location.name : "";
  }
  getSelectedReasonName() {
    const reasonId = this.adjustmentForm.get("reason")?.value;
    const reason = this.reasons.find((r) => r.id === reasonId);
    return reason ? reason.name : "";
  }
  static \u0275fac = function StockAdjustmentModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockAdjustmentModalComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockAdjustmentModalComponent, selectors: [["app-stock-adjustment-modal"]], outputs: { closeModal: "closeModal", adjustStock: "adjustStock" }, decls: 87, vars: 17, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "section-title"], [1, "form-field"], ["for", "part", 1, "field-label"], [1, "required"], [1, "select-container"], ["id", "part", "formControlName", "part", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "select-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "error-message", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["for", "location", 1, "field-label"], ["id", "location", "formControlName", "location", 1, "form-select"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "form-row"], ["for", "adjustmentQuantity", 1, "field-label"], ["type", "number", "id", "adjustmentQuantity", "formControlName", "adjustmentQuantity", "placeholder", "0", 1, "form-input"], ["for", "reason", 1, "field-label"], ["id", "reason", "formControlName", "reason", 1, "form-select"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["for", "notes", 1, "field-label"], ["id", "notes", "formControlName", "notes", "rows", "3", "placeholder", "Additional notes...", 1, "form-textarea"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "value"], [1, "error-message"]], template: function StockAdjustmentModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function StockAdjustmentModalComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function StockAdjustmentModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Stock Adjustment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "form", 4);
      \u0275\u0275listener("ngSubmit", function StockAdjustmentModalComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 7);
      \u0275\u0275element(9, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "h3", 9);
      \u0275\u0275text(11, "Part Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "label", 11);
      \u0275\u0275text(14, " Part ");
      \u0275\u0275elementStart(15, "span", 12);
      \u0275\u0275text(16, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "select", 14)(19, "option", 15);
      \u0275\u0275text(20, "Select a part");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, StockAdjustmentModalComponent_option_21_Template, 2, 3, "option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 17);
      \u0275\u0275element(23, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, StockAdjustmentModalComponent_div_24_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "div", 5)(26, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 7);
      \u0275\u0275element(28, "path", 20)(29, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "h3", 9);
      \u0275\u0275text(31, "Location Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 10)(33, "label", 22);
      \u0275\u0275text(34, " Location ");
      \u0275\u0275elementStart(35, "span", 12);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 13)(38, "select", 23)(39, "option", 15);
      \u0275\u0275text(40, "Select a location");
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, StockAdjustmentModalComponent_option_41_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 17);
      \u0275\u0275element(43, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(44, StockAdjustmentModalComponent_div_44_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div", 5)(46, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(47, "svg", 7);
      \u0275\u0275element(48, "path", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(49, "h3", 9);
      \u0275\u0275text(50, "Adjustment Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 25)(52, "div", 10)(53, "label", 26);
      \u0275\u0275text(54, " Adjustment Quantity ");
      \u0275\u0275elementStart(55, "span", 12);
      \u0275\u0275text(56, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(57, "input", 27);
      \u0275\u0275template(58, StockAdjustmentModalComponent_div_58_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 10)(60, "label", 28);
      \u0275\u0275text(61, " Reason ");
      \u0275\u0275elementStart(62, "span", 12);
      \u0275\u0275text(63, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 13)(65, "select", 29)(66, "option", 15);
      \u0275\u0275text(67, "Select a reason");
      \u0275\u0275elementEnd();
      \u0275\u0275template(68, StockAdjustmentModalComponent_option_68_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(69, "svg", 17);
      \u0275\u0275element(70, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(71, StockAdjustmentModalComponent_div_71_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(72, "div", 5)(73, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(74, "svg", 7);
      \u0275\u0275element(75, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(76, "h3", 9);
      \u0275\u0275text(77, "Additional Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 10)(79, "label", 31);
      \u0275\u0275text(80, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "textarea", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 33)(83, "button", 34);
      \u0275\u0275listener("click", function StockAdjustmentModalComponent_Template_button_click_83_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(84, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "button", 35);
      \u0275\u0275text(86, " Adjust Stock ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_4_0;
      let tmp_7_0;
      let tmp_9_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.adjustmentForm);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("error", ((tmp_1_0 = ctx.adjustmentForm.get("part")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx.adjustmentForm.get("part")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.parts);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.getFieldError("part"));
      \u0275\u0275advance(14);
      \u0275\u0275classProp("error", ((tmp_4_0 = ctx.adjustmentForm.get("location")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx.adjustmentForm.get("location")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.locations);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.getFieldError("location"));
      \u0275\u0275advance(13);
      \u0275\u0275classProp("error", ((tmp_7_0 = ctx.adjustmentForm.get("adjustmentQuantity")) == null ? null : tmp_7_0.errors) && ((tmp_7_0 = ctx.adjustmentForm.get("adjustmentQuantity")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("adjustmentQuantity"));
      \u0275\u0275advance(7);
      \u0275\u0275classProp("error", ((tmp_9_0 = ctx.adjustmentForm.get("reason")) == null ? null : tmp_9_0.errors) && ((tmp_9_0 = ctx.adjustmentForm.get("reason")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.reasons);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.getFieldError("reason"));
      \u0275\u0275advance(14);
      \u0275\u0275property("disabled", !ctx.adjustmentForm.valid);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #3b82f6;\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 0.75rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n  transition: border-color 0.2s;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .form-select.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  resize: vertical;\n  min-height: 80px;\n  transition: border-color 0.2s;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  min-height: 1rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  margin: 0 -1.5rem -1.5rem -1.5rem;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n  .modal-form[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n    margin: 0 -1rem -1rem -1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 0.75rem 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .modal-form[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem 1rem 1rem;\n    margin: 0 -0.75rem -0.75rem -0.75rem;\n  }\n}\n/*# sourceMappingURL=stock-adjustment-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockAdjustmentModalComponent, [{
    type: Component,
    args: [{ selector: "app-stock-adjustment-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="modal-overlay" (click)="onCancel()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <h2 class="modal-title">Stock Adjustment</h2>\r
    </div>\r
\r
    <form [formGroup]="adjustmentForm" (ngSubmit)="onSubmit()" class="modal-form">\r
      <!-- Part Information Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r
          </svg>\r
          <h3 class="section-title">Part Information</h3>\r
        </div>\r
        \r
        <div class="form-field">\r
          <label for="part" class="field-label">\r
            Part <span class="required">*</span>\r
          </label>\r
          <div class="select-container">\r
            <select \r
              id="part" \r
              formControlName="part"\r
              class="form-select"\r
              [class.error]="adjustmentForm.get('part')?.errors && adjustmentForm.get('part')?.touched">\r
              <option value="">Select a part</option>\r
              <option *ngFor="let part of parts" [value]="part.id">\r
                {{ part.name }} - {{ part.description }}\r
              </option>\r
            </select>\r
            <svg class="select-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
            </svg>\r
          </div>\r
          <div class="error-message" *ngIf="getFieldError('part')">\r
            {{ getFieldError('part') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Location Details Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
          </svg>\r
          <h3 class="section-title">Location Details</h3>\r
        </div>\r
        \r
        <div class="form-field">\r
          <label for="location" class="field-label">\r
            Location <span class="required">*</span>\r
          </label>\r
          <div class="select-container">\r
            <select \r
              id="location" \r
              formControlName="location"\r
              class="form-select"\r
              [class.error]="adjustmentForm.get('location')?.errors && adjustmentForm.get('location')?.touched">\r
              <option value="">Select a location</option>\r
              <option *ngFor="let location of locations" [value]="location.id">\r
                {{ location.name }}\r
              </option>\r
            </select>\r
            <svg class="select-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
            </svg>\r
          </div>\r
          <div class="error-message" *ngIf="getFieldError('location')">\r
            {{ getFieldError('location') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Adjustment Information Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r
          </svg>\r
          <h3 class="section-title">Adjustment Information</h3>\r
        </div>\r
        \r
        <div class="form-row">\r
          <div class="form-field">\r
            <label for="adjustmentQuantity" class="field-label">\r
              Adjustment Quantity <span class="required">*</span>\r
            </label>\r
            <input \r
              type="number" \r
              id="adjustmentQuantity" \r
              formControlName="adjustmentQuantity"\r
              class="form-input"\r
              [class.error]="adjustmentForm.get('adjustmentQuantity')?.errors && adjustmentForm.get('adjustmentQuantity')?.touched"\r
              placeholder="0">\r
            <div class="error-message" *ngIf="getFieldError('adjustmentQuantity')">\r
              {{ getFieldError('adjustmentQuantity') }}\r
            </div>\r
          </div>\r
          \r
          <div class="form-field">\r
            <label for="reason" class="field-label">\r
              Reason <span class="required">*</span>\r
            </label>\r
            <div class="select-container">\r
              <select \r
                id="reason" \r
                formControlName="reason"\r
                class="form-select"\r
                [class.error]="adjustmentForm.get('reason')?.errors && adjustmentForm.get('reason')?.touched">\r
                <option value="">Select a reason</option>\r
                <option *ngFor="let reason of reasons" [value]="reason.id">\r
                  {{ reason.name }}\r
                </option>\r
              </select>\r
              <svg class="select-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
            </div>\r
            <div class="error-message" *ngIf="getFieldError('reason')">\r
              {{ getFieldError('reason') }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Additional Notes Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
          </svg>\r
          <h3 class="section-title">Additional Notes</h3>\r
        </div>\r
        \r
        <div class="form-field">\r
          <label for="notes" class="field-label">Notes</label>\r
          <textarea \r
            id="notes" \r
            formControlName="notes"\r
            class="form-textarea"\r
            rows="3"\r
            placeholder="Additional notes..."></textarea>\r
        </div>\r
      </div>\r
\r
      <!-- Modal Footer -->\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="onCancel()">\r
          Cancel\r
        </button>\r
        <button type="submit" class="btn btn-primary" [disabled]="!adjustmentForm.valid">\r
          Adjust Stock\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/inventory/components/stock-adjustment-modal/stock-adjustment-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal-header .modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header svg {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #3b82f6;\n}\n.modal-form {\n  padding: 1.5rem;\n}\n.modal-form .form-section {\n  margin-bottom: 2rem;\n}\n.modal-form .form-section:last-child {\n  margin-bottom: 0;\n}\n.modal-form .form-section .section-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 0.75rem;\n}\n.modal-form .form-section .section-header svg {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.modal-form .form-section .section-header .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.modal-form .form-section .form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-form .form-section .form-row:last-child {\n  margin-bottom: 0;\n}\n.modal-form .form-section .form-field {\n  margin-bottom: 1rem;\n}\n.modal-form .form-section .form-field:last-child {\n  margin-bottom: 0;\n}\n.modal-form .form-section .form-field .field-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-form .form-section .form-field .field-label .required {\n  color: #ef4444;\n}\n.modal-form .form-section .form-field .select-container {\n  position: relative;\n}\n.modal-form .form-section .form-field .select-container .form-select {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n  transition: border-color 0.2s;\n}\n.modal-form .form-section .form-field .select-container .form-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.modal-form .form-section .form-field .select-container .form-select.error {\n  border-color: #ef4444;\n}\n.modal-form .form-section .form-field .select-container .select-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.modal-form .form-section .form-field .form-input {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.modal-form .form-section .form-field .form-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.modal-form .form-section .form-field .form-input.error {\n  border-color: #ef4444;\n}\n.modal-form .form-section .form-field .form-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  resize: vertical;\n  min-height: 80px;\n  transition: border-color 0.2s;\n}\n.modal-form .form-section .form-field .form-textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.modal-form .form-section .form-field .error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  min-height: 1rem;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  margin: 0 -1.5rem -1.5rem -1.5rem;\n}\n.modal-footer .btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.modal-footer .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-footer .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer .btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.modal-footer .btn.btn-primary:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .modal-container {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n  .modal-form {\n    padding: 1rem;\n  }\n  .modal-form .form-section .form-row {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n    gap: 0.75rem;\n    margin: 0 -1rem -1rem -1rem;\n  }\n  .modal-footer .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .modal-header {\n    padding: 1rem 1rem 0.75rem 1rem;\n  }\n  .modal-header .modal-title {\n    font-size: 1.125rem;\n  }\n  .modal-form {\n    padding: 0.75rem;\n  }\n  .modal-footer {\n    padding: 0.75rem 1rem 1rem 1rem;\n    margin: 0 -0.75rem -0.75rem -0.75rem;\n  }\n}\n/*# sourceMappingURL=stock-adjustment-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], { closeModal: [{
    type: Output
  }], adjustStock: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockAdjustmentModalComponent, { className: "StockAdjustmentModalComponent", filePath: "src/app/inventory/components/stock-adjustment-modal/stock-adjustment-modal.component.ts", lineNumber: 12 });
})();

// src/app/inventory/components/stock-levels/stock-levels.component.ts
function StockLevelsComponent_app_stock_adjustment_modal_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-stock-adjustment-modal", 56);
    \u0275\u0275listener("closeModal", function StockLevelsComponent_app_stock_adjustment_modal_121_Template_app_stock_adjustment_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStockAdjustmentModal());
    })("adjustStock", function StockLevelsComponent_app_stock_adjustment_modal_121_Template_app_stock_adjustment_modal_adjustStock_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStockAdjustment($event));
    });
    \u0275\u0275elementEnd();
  }
}
var StockLevelsComponent = class _StockLevelsComponent {
  showStockAdjustmentModal = false;
  openStockAdjustmentModal() {
    this.showStockAdjustmentModal = true;
  }
  closeStockAdjustmentModal() {
    this.showStockAdjustmentModal = false;
  }
  onStockAdjustment(adjustmentData) {
    console.log("Stock adjustment data:", adjustmentData);
    this.closeStockAdjustmentModal();
  }
  static \u0275fac = function StockLevelsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockLevelsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockLevelsComponent, selectors: [["app-stock-levels"]], decls: 122, vars: 1, consts: [[1, "stock-levels"], [1, "summary-cards-row"], [1, "summary-card", "total-stock"], [1, "card-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "card-content"], [1, "card-value"], [1, "card-label"], [1, "summary-card", "low-stock"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "card-value", "warning"], [1, "summary-card", "out-of-stock"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "card-value", "danger"], [1, "summary-card", "total-value"], [1, "control-bar"], [1, "search-controls"], [1, "search-container"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search parts...", 1, "search-input"], [1, "location-dropdown"], [1, "location-select"], ["value", ""], ["value", "toilet"], ["value", "kitchen"], ["value", "office"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "action-buttons"], [1, "btn", "btn-primary"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "btn", "btn-primary", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "inventory-table-container"], [1, "inventory-table"], [1, "part-number"], [1, "part-name"], [1, "name-primary"], [1, "name-secondary"], [1, "location"], [1, "bin"], [1, "on-hand"], [1, "reserved"], [1, "available"], [1, "status"], [1, "status-badge", "in-stock"], [1, "value"], [1, "last-counted"], [1, "actions"], ["title", "Edit", 1, "action-btn", "edit"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "fab", 3, "click"], [3, "closeModal", "adjustStock", 4, "ngIf"], [3, "closeModal", "adjustStock"]], template: function StockLevelsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275text(8, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275text(10, "Total Stock Items");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 4);
      \u0275\u0275element(14, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 6)(16, "div", 11);
      \u0275\u0275text(17, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8);
      \u0275\u0275text(19, "Low Stock");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 12)(21, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 4);
      \u0275\u0275element(23, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "div", 6)(25, "div", 14);
      \u0275\u0275text(26, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 8);
      \u0275\u0275text(28, "Out of Stock");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 15)(30, "div", 6)(31, "div", 7);
      \u0275\u0275text(32, "AED 9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 8);
      \u0275\u0275text(34, "Total Value");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 16)(36, "div", 17)(37, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 19);
      \u0275\u0275element(39, "path", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(40, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 22)(42, "select", 23)(43, "option", 24);
      \u0275\u0275text(44, "All Locations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 25);
      \u0275\u0275text(46, "Toilet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 26);
      \u0275\u0275text(48, "Kitchen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 27);
      \u0275\u0275text(50, "Office");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(51, "svg", 28);
      \u0275\u0275element(52, "path", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "div", 30)(54, "button", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 32);
      \u0275\u0275element(56, "path", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, " Create Store Room ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "button", 34);
      \u0275\u0275listener("click", function StockLevelsComponent_Template_button_click_58_listener() {
        return ctx.openStockAdjustmentModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 32);
      \u0275\u0275element(60, "path", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(61, " Stock Adjustment ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(62, "div", 36)(63, "table", 37)(64, "thead")(65, "tr")(66, "th");
      \u0275\u0275text(67, "Part Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th");
      \u0275\u0275text(69, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th");
      \u0275\u0275text(71, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th");
      \u0275\u0275text(73, "Bin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th");
      \u0275\u0275text(75, "On Hand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th");
      \u0275\u0275text(77, "Reserved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th");
      \u0275\u0275text(79, "Available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th");
      \u0275\u0275text(81, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th");
      \u0275\u0275text(83, "Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th");
      \u0275\u0275text(85, "Last Counted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th");
      \u0275\u0275text(87, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "tbody")(89, "tr")(90, "td", 38);
      \u0275\u0275text(91, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "td", 39)(93, "div", 40);
      \u0275\u0275text(94, "part 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 41);
      \u0275\u0275text(96, "e2 \u2022 ews");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "td", 42);
      \u0275\u0275text(98, "Toilet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "td", 43);
      \u0275\u0275text(100, "-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "td", 44);
      \u0275\u0275text(102, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "td", 45);
      \u0275\u0275text(104, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "td", 46);
      \u0275\u0275text(106, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "td", 47)(108, "span", 48);
      \u0275\u0275text(109, "In Stock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "td", 49);
      \u0275\u0275text(111, "AED 9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "td", 50);
      \u0275\u0275text(113, "Never");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "td", 51)(115, "button", 52);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(116, "svg", 32);
      \u0275\u0275element(117, "path", 53);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(118, "button", 54);
      \u0275\u0275listener("click", function StockLevelsComponent_Template_button_click_118_listener() {
        return ctx.openStockAdjustmentModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(119, "svg", 4);
      \u0275\u0275element(120, "path", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(121, StockLevelsComponent_app_stock_adjustment_modal_121_Template, 1, 0, "app-stock-adjustment-modal", 55);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(121);
      \u0275\u0275property("ngIf", ctx.showStockAdjustmentModal);
    }
  }, dependencies: [CommonModule, NgIf, StockAdjustmentModalComponent], styles: ["\n\n.stock-levels[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.low-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.out-of-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #ef4444;\n}\n.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-value[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex: 1;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 300px;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .location-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 150px;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .location-dropdown[_ngcontent-%COMP%]   .location-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .location-dropdown[_ngcontent-%COMP%]   .location-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .location-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-name[_ngcontent-%COMP%]   .name-primary[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-name[_ngcontent-%COMP%]   .name-secondary[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.location[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.bin[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.on-hand[_ngcontent-%COMP%], \n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.reserved[_ngcontent-%COMP%], \n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.available[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-align: center;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.status[_ngcontent-%COMP%]   .status-badge.in-stock[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.status[_ngcontent-%COMP%]   .status-badge.low-stock[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.status[_ngcontent-%COMP%]   .status-badge.out-of-stock[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #10b981;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.last-counted[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: none;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  border-color: #9ca3af;\n  color: #374151;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%]:hover {\n  background-color: #dbeafe;\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.stock-levels[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.stock-levels[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.stock-levels[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 1024px) {\n  .stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .location-dropdown[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .inventory-table-container[_ngcontent-%COMP%]   .inventory-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n@media (max-width: 768px) {\n  .stock-levels[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 1rem;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stock-levels[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem 0.75rem 2.5rem;\n  }\n}\n/*# sourceMappingURL=stock-levels.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockLevelsComponent, [{
    type: Component,
    args: [{ selector: "app-stock-levels", standalone: true, imports: [CommonModule, StockAdjustmentModalComponent], template: '<div class="stock-levels">\r\n  <!-- Summary Cards Row -->\r\n  <div class="summary-cards-row">\r\n    <div class="summary-card total-stock">\r\n      <div class="card-icon">\r\n        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="card-value">1</div>\r\n        <div class="card-label">Total Stock Items</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="summary-card low-stock">\r\n      <div class="card-icon">\r\n        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="card-value warning">0</div>\r\n        <div class="card-label">Low Stock</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="summary-card out-of-stock">\r\n      <div class="card-icon">\r\n        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="card-value danger">0</div>\r\n        <div class="card-label">Out of Stock</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="summary-card total-value">\r\n      <div class="card-content">\r\n        <div class="card-value">AED 9</div>\r\n        <div class="card-label">Total Value</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Control Bar -->\r\n  <div class="control-bar">\r\n    <div class="search-controls">\r\n      <div class="search-container">\r\n        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r\n        </svg>\r\n        <input type="text" placeholder="Search parts..." class="search-input">\r\n      </div>\r\n\r\n      <div class="location-dropdown">\r\n        <select class="location-select">\r\n          <option value="">All Locations</option>\r\n          <option value="toilet">Toilet</option>\r\n          <option value="kitchen">Kitchen</option>\r\n          <option value="office">Office</option>\r\n        </select>\r\n        <svg class="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="action-buttons">\r\n      <button class="btn btn-primary">\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r\n        </svg>\r\n        Create Store Room\r\n      </button>\r\n      <button class="btn btn-primary" (click)="openStockAdjustmentModal()">\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r\n        </svg>\r\n        Stock Adjustment\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Inventory Table -->\r\n  <div class="inventory-table-container">\r\n    <table class="inventory-table">\r\n      <thead>\r\n        <tr>\r\n          <th>Part Number</th>\r\n          <th>Name</th>\r\n          <th>Location</th>\r\n          <th>Bin</th>\r\n          <th>On Hand</th>\r\n          <th>Reserved</th>\r\n          <th>Available</th>\r\n          <th>Status</th>\r\n          <th>Value</th>\r\n          <th>Last Counted</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td class="part-number">1</td>\r\n          <td class="part-name">\r\n            <div class="name-primary">part 1</div>\r\n            <div class="name-secondary">e2 \u2022 ews</div>\r\n          </td>\r\n          <td class="location">Toilet</td>\r\n          <td class="bin">-</td>\r\n          <td class="on-hand">3</td>\r\n          <td class="reserved">0</td>\r\n          <td class="available">3</td>\r\n          <td class="status">\r\n            <span class="status-badge in-stock">In Stock</span>\r\n          </td>\r\n          <td class="value">AED 9</td>\r\n          <td class="last-counted">Never</td>\r\n          <td class="actions">\r\n            <button class="action-btn edit" title="Edit">\r\n              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r\n              </svg>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <!-- Floating Action Button -->\r\n  <button class="fab" (click)="openStockAdjustmentModal()">\r\n    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r\n    </svg>\r\n  </button>\r\n\r\n  <!-- Stock Adjustment Modal -->\r\n  <app-stock-adjustment-modal\r\n    *ngIf="showStockAdjustmentModal"\r\n    (closeModal)="closeStockAdjustmentModal()"\r\n    (adjustStock)="onStockAdjustment($event)">\r\n  </app-stock-adjustment-modal>\r\n</div>\r\n', styles: ["/* src/app/inventory/components/stock-levels/stock-levels.component.scss */\n.stock-levels {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.stock-levels .summary-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stock-levels .summary-cards-row .summary-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.stock-levels .summary-cards-row .summary-card .card-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stock-levels .summary-cards-row .summary-card .card-content .card-value {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.stock-levels .summary-cards-row .summary-card .card-content .card-value.warning {\n  color: #f59e0b;\n}\n.stock-levels .summary-cards-row .summary-card .card-content .card-value.danger {\n  color: #ef4444;\n}\n.stock-levels .summary-cards-row .summary-card .card-content .card-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.stock-levels .summary-cards-row .summary-card.total-stock .card-icon {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.stock-levels .summary-cards-row .summary-card.low-stock .card-icon {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.stock-levels .summary-cards-row .summary-card.out-of-stock .card-icon {\n  background-color: #fee2e2;\n  color: #ef4444;\n}\n.stock-levels .summary-cards-row .summary-card.total-value .card-value {\n  color: #10b981;\n}\n.stock-levels .control-bar {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.stock-levels .control-bar .search-controls {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex: 1;\n}\n.stock-levels .control-bar .search-controls .search-container {\n  position: relative;\n  min-width: 300px;\n}\n.stock-levels .control-bar .search-controls .search-container .search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.stock-levels .control-bar .search-controls .search-container .search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.stock-levels .control-bar .search-controls .search-container .search-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.stock-levels .control-bar .search-controls .search-container .search-input::placeholder {\n  color: #9ca3af;\n}\n.stock-levels .control-bar .search-controls .location-dropdown {\n  position: relative;\n  min-width: 150px;\n}\n.stock-levels .control-bar .search-controls .location-dropdown .location-select {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.stock-levels .control-bar .search-controls .location-dropdown .location-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.stock-levels .control-bar .search-controls .location-dropdown .dropdown-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.stock-levels .control-bar .action-buttons {\n  display: flex;\n  gap: 1rem;\n}\n.stock-levels .control-bar .action-buttons .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.stock-levels .control-bar .action-buttons .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.stock-levels .control-bar .action-buttons .btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.stock-levels .control-bar .action-buttons .btn.btn-primary svg {\n  color: white;\n}\n.stock-levels .inventory-table-container {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.stock-levels .inventory-table-container .inventory-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.stock-levels .inventory-table-container .inventory-table thead {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.stock-levels .inventory-table-container .inventory-table thead th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr {\n  border-bottom: 1px solid #f3f4f6;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr:last-child {\n  border-bottom: none;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.part-number {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.part-name .name-primary {\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.part-name .name-secondary {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.location {\n  font-weight: 500;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.bin {\n  color: #9ca3af;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.on-hand,\n.stock-levels .inventory-table-container .inventory-table tbody tr td.reserved,\n.stock-levels .inventory-table-container .inventory-table tbody tr td.available {\n  font-weight: 600;\n  text-align: center;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.status .status-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.status .status-badge.in-stock {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.status .status-badge.low-stock {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.status .status-badge.out-of-stock {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.value {\n  font-weight: 600;\n  color: #10b981;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.last-counted {\n  color: #6b7280;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.actions .action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: none;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.actions .action-btn:hover {\n  background-color: #f3f4f6;\n  border-color: #9ca3af;\n  color: #374151;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.actions .action-btn.edit:hover {\n  background-color: #dbeafe;\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.stock-levels .inventory-table-container .inventory-table tbody tr td.actions .action-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.stock-levels .fab {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.stock-levels .fab:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.stock-levels .fab svg {\n  color: white;\n}\n@media (max-width: 1024px) {\n  .stock-levels .control-bar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .stock-levels .control-bar .search-controls {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .stock-levels .control-bar .search-controls .search-container {\n    min-width: auto;\n  }\n  .stock-levels .control-bar .search-controls .location-dropdown {\n    min-width: auto;\n  }\n  .stock-levels .control-bar .action-buttons {\n    justify-content: center;\n  }\n  .stock-levels .inventory-table-container {\n    overflow-x: auto;\n  }\n  .stock-levels .inventory-table-container .inventory-table {\n    min-width: 800px;\n  }\n}\n@media (max-width: 768px) {\n  .stock-levels {\n    padding: 1rem;\n  }\n  .stock-levels .summary-cards-row {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 1rem;\n  }\n  .stock-levels .summary-cards-row .summary-card {\n    padding: 1rem;\n  }\n  .stock-levels .summary-cards-row .summary-card .card-icon {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .stock-levels .summary-cards-row .summary-card .card-content .card-value {\n    font-size: 1.5rem;\n  }\n  .stock-levels .summary-cards-row .summary-card .card-content .card-label {\n    font-size: 0.75rem;\n  }\n  .stock-levels .control-bar {\n    padding: 1rem;\n  }\n  .stock-levels .control-bar .action-buttons {\n    flex-direction: column;\n  }\n  .stock-levels .control-bar .action-buttons .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .stock-levels .summary-cards-row {\n    grid-template-columns: 1fr;\n  }\n  .stock-levels .control-bar .search-controls .search-container .search-input {\n    padding: 0.75rem 1rem 0.75rem 2.5rem;\n  }\n}\n/*# sourceMappingURL=stock-levels.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockLevelsComponent, { className: "StockLevelsComponent", filePath: "src/app/inventory/components/stock-levels/stock-levels.component.ts", lineNumber: 12 });
})();
export {
  StockLevelsComponent
};
//# sourceMappingURL=chunk-VV5PYV64.js.map
