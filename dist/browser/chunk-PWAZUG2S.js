import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IWKUZ4XC.js";
import {
  CommonModule,
  Component,
  EventEmitter,
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
  ɵɵtextInterpolate1
} from "./chunk-7JZMUYI4.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/add-part-modal/add-part-modal.component.ts
function AddPartModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("partNumber"), " ");
  }
}
function AddPartModalComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("name"), " ");
  }
}
var AddPartModalComponent = class _AddPartModalComponent {
  fb;
  closeModal = new EventEmitter();
  createPart = new EventEmitter();
  partForm;
  constructor(fb) {
    this.fb = fb;
    this.partForm = this.fb.group({
      partNumber: ["", [Validators.required]],
      name: ["", [Validators.required]],
      description: [""],
      manufacturer: [""],
      category: [""],
      unitOfMeasure: ["each"],
      unitCost: [""],
      barcode: [""],
      minStock: [0],
      maxStock: [""],
      reorderPoint: [0],
      reorderQty: [1],
      notes: [""]
    });
  }
  onSubmit() {
    if (this.partForm.valid) {
      this.createPart.emit(this.partForm.value);
    }
  }
  onCancel() {
    this.closeModal.emit();
  }
  getFieldError(fieldName) {
    const field = this.partForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return "This field is required";
      }
    }
    return "";
  }
  static \u0275fac = function AddPartModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddPartModalComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPartModalComponent, selectors: [["app-add-part-modal"]], outputs: { closeModal: "closeModal", createPart: "createPart" }, decls: 94, vars: 8, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "header-left"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "modal-title"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "section-title"], [1, "form-row"], [1, "form-field"], ["for", "partNumber", 1, "field-label"], [1, "required"], ["type", "text", "id", "partNumber", "formControlName", "partNumber", "placeholder", "Enter part number", 1, "form-input"], ["class", "error-message", 4, "ngIf"], ["for", "name", 1, "field-label"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter part name", 1, "form-input"], ["for", "description", 1, "field-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter part description", 1, "form-textarea"], ["for", "manufacturer", 1, "field-label"], ["type", "text", "id", "manufacturer", "formControlName", "manufacturer", "placeholder", "Enter manufacturer", 1, "form-input"], ["for", "category", 1, "field-label"], ["type", "text", "id", "category", "formControlName", "category", "placeholder", "Enter category", 1, "form-input"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], ["for", "unitOfMeasure", 1, "field-label"], ["type", "text", "id", "unitOfMeasure", "formControlName", "unitOfMeasure", "placeholder", "each", 1, "form-input"], ["for", "unitCost", 1, "field-label"], ["type", "number", "id", "unitCost", "formControlName", "unitCost", "placeholder", "0.00", "step", "0.01", "min", "0", 1, "form-input"], ["for", "barcode", 1, "field-label"], ["type", "text", "id", "barcode", "formControlName", "barcode", "placeholder", "Enter barcode", 1, "form-input"], ["for", "minStock", 1, "field-label"], ["type", "number", "id", "minStock", "formControlName", "minStock", "placeholder", "0", "min", "0", 1, "form-input"], ["for", "maxStock", 1, "field-label"], ["type", "number", "id", "maxStock", "formControlName", "maxStock", "placeholder", "Enter max stock", "min", "0", 1, "form-input"], ["for", "reorderPoint", 1, "field-label"], ["type", "number", "id", "reorderPoint", "formControlName", "reorderPoint", "placeholder", "0", "min", "0", 1, "form-input"], ["for", "reorderQty", 1, "field-label"], ["type", "number", "id", "reorderQty", "formControlName", "reorderQty", "placeholder", "1", "min", "1", 1, "form-input"], ["for", "notes", 1, "field-label"], ["id", "notes", "formControlName", "notes", "rows", "3", "placeholder", "Enter additional notes", 1, "form-textarea"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error-message"]], template: function AddPartModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AddPartModalComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function AddPartModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h2", 6);
      \u0275\u0275text(7, "Add New Part");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddPartModalComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 10);
      \u0275\u0275element(12, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "h3", 12);
      \u0275\u0275text(14, "Basic Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "label", 15);
      \u0275\u0275text(18, " Part Number ");
      \u0275\u0275elementStart(19, "span", 16);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "input", 17);
      \u0275\u0275template(22, AddPartModalComponent_div_22_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14)(24, "label", 19);
      \u0275\u0275text(25, " Name ");
      \u0275\u0275elementStart(26, "span", 16);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "input", 20);
      \u0275\u0275template(29, AddPartModalComponent_div_29_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 14)(31, "label", 21);
      \u0275\u0275text(32, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "textarea", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 13)(35, "div", 14)(36, "label", 23);
      \u0275\u0275text(37, "Manufacturer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14)(40, "label", 25);
      \u0275\u0275text(41, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 8)(44, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(45, "svg", 10);
      \u0275\u0275element(46, "path", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "h3", 12);
      \u0275\u0275text(48, "Pricing & Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 13)(50, "div", 14)(51, "label", 28);
      \u0275\u0275text(52, "Unit of Measure");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "input", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 14)(55, "label", 30);
      \u0275\u0275text(56, "Unit Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "input", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 14)(59, "label", 32);
      \u0275\u0275text(60, "Barcode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "input", 33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 8)(63, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 10);
      \u0275\u0275element(65, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(66, "h3", 12);
      \u0275\u0275text(67, "Stock Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 13)(69, "div", 14)(70, "label", 34);
      \u0275\u0275text(71, "Min Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 14)(74, "label", 36);
      \u0275\u0275text(75, "Max Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 14)(78, "label", 38);
      \u0275\u0275text(79, "Reorder Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 14)(82, "label", 40);
      \u0275\u0275text(83, "Reorder Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "input", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 14)(86, "label", 42);
      \u0275\u0275text(87, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(88, "textarea", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 44)(90, "button", 45);
      \u0275\u0275listener("click", function AddPartModalComponent_Template_button_click_90_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(91, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "button", 46);
      \u0275\u0275text(93, " Create Part ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_3_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.partForm);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("error", ((tmp_1_0 = ctx.partForm.get("partNumber")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx.partForm.get("partNumber")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("partNumber"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ((tmp_3_0 = ctx.partForm.get("name")) == null ? null : tmp_3_0.errors) && ((tmp_3_0 = ctx.partForm.get("name")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("name"));
      \u0275\u0275advance(63);
      \u0275\u0275property("disabled", !ctx.partForm.valid);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 1.5rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:nth-child(2)   svg[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:nth-child(3)   svg[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 600;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  color: #111827;\n  background-color: white;\n  transition: all 0.2s;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, \n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .modal-form[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .modal-form[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=add-part-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddPartModalComponent, [{
    type: Component,
    args: [{ selector: "app-add-part-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="modal-overlay" (click)="onCancel()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <div class="header-left">\r
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r
        </svg>\r
        <h2 class="modal-title">Add New Part</h2>\r
      </div>\r
    </div>\r
\r
    <form [formGroup]="partForm" (ngSubmit)="onSubmit()" class="modal-form">\r
      <!-- Basic Information Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
          </svg>\r
          <h3 class="section-title">Basic Information</h3>\r
        </div>\r
        \r
        <div class="form-row">\r
          <div class="form-field">\r
            <label for="partNumber" class="field-label">\r
              Part Number <span class="required">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              id="partNumber" \r
              formControlName="partNumber"\r
              class="form-input"\r
              [class.error]="partForm.get('partNumber')?.errors && partForm.get('partNumber')?.touched"\r
              placeholder="Enter part number">\r
            <div class="error-message" *ngIf="getFieldError('partNumber')">\r
              {{ getFieldError('partNumber') }}\r
            </div>\r
          </div>\r
          \r
          <div class="form-field">\r
            <label for="name" class="field-label">\r
              Name <span class="required">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              id="name" \r
              formControlName="name"\r
              class="form-input"\r
              [class.error]="partForm.get('name')?.errors && partForm.get('name')?.touched"\r
              placeholder="Enter part name">\r
            <div class="error-message" *ngIf="getFieldError('name')">\r
              {{ getFieldError('name') }}\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="form-field">\r
          <label for="description" class="field-label">Description</label>\r
          <textarea \r
            id="description" \r
            formControlName="description"\r
            class="form-textarea"\r
            rows="3"\r
            placeholder="Enter part description"></textarea>\r
        </div>\r
        \r
        <div class="form-row">\r
          <div class="form-field">\r
            <label for="manufacturer" class="field-label">Manufacturer</label>\r
            <input \r
              type="text" \r
              id="manufacturer" \r
              formControlName="manufacturer"\r
              class="form-input"\r
              placeholder="Enter manufacturer">\r
          </div>\r
          \r
          <div class="form-field">\r
            <label for="category" class="field-label">Category</label>\r
            <input \r
              type="text" \r
              id="category" \r
              formControlName="category"\r
              class="form-input"\r
              placeholder="Enter category">\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Pricing & Details Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
          </svg>\r
          <h3 class="section-title">Pricing & Details</h3>\r
        </div>\r
        \r
        <div class="form-row">\r
          <div class="form-field">\r
            <label for="unitOfMeasure" class="field-label">Unit of Measure</label>\r
            <input \r
              type="text" \r
              id="unitOfMeasure" \r
              formControlName="unitOfMeasure"\r
              class="form-input"\r
              placeholder="each">\r
          </div>\r
          \r
          <div class="form-field">\r
            <label for="unitCost" class="field-label">Unit Cost</label>\r
            <input \r
              type="number" \r
              id="unitCost" \r
              formControlName="unitCost"\r
              class="form-input"\r
              placeholder="0.00"\r
              step="0.01"\r
              min="0">\r
          </div>\r
          \r
          <div class="form-field">\r
            <label for="barcode" class="field-label">Barcode</label>\r
            <input \r
              type="text" \r
              id="barcode" \r
              formControlName="barcode"\r
              class="form-input"\r
              placeholder="Enter barcode">\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Stock Management Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r
          </svg>\r
          <h3 class="section-title">Stock Management</h3>\r
        </div>\r
        \r
        <div class="form-row">\r
          <div class="form-field">\r
            <label for="minStock" class="field-label">Min Stock</label>\r
            <input \r
              type="number" \r
              id="minStock" \r
              formControlName="minStock"\r
              class="form-input"\r
              placeholder="0"\r
              min="0">\r
          </div>\r
          \r
          <div class="form-field">\r
            <label for="maxStock" class="field-label">Max Stock</label>\r
            <input \r
              type="number" \r
              id="maxStock" \r
              formControlName="maxStock"\r
              class="form-input"\r
              placeholder="Enter max stock"\r
              min="0">\r
          </div>\r
          \r
          <div class="form-field">\r
            <label for="reorderPoint" class="field-label">Reorder Point</label>\r
            <input \r
              type="number" \r
              id="reorderPoint" \r
              formControlName="reorderPoint"\r
              class="form-input"\r
              placeholder="0"\r
              min="0">\r
          </div>\r
          \r
          <div class="form-field">\r
            <label for="reorderQty" class="field-label">Reorder Qty</label>\r
            <input \r
              type="number" \r
              id="reorderQty" \r
              formControlName="reorderQty"\r
              class="form-input"\r
              placeholder="1"\r
              min="1">\r
          </div>\r
        </div>\r
        \r
        <div class="form-field">\r
          <label for="notes" class="field-label">Notes</label>\r
          <textarea \r
            id="notes" \r
            formControlName="notes"\r
            class="form-textarea"\r
            rows="3"\r
            placeholder="Enter additional notes"></textarea>\r
        </div>\r
      </div>\r
\r
      <!-- Modal Footer -->\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="onCancel()">\r
          Cancel\r
        </button>\r
        <button type="submit" class="btn btn-primary" [disabled]="!partForm.valid">\r
          Create Part\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/inventory/components/add-part-modal/add-part-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal-header .header-left svg {\n  color: #3b82f6;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.modal-header .header-left .modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.modal-form {\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n}\n.modal-form .form-section {\n  margin-bottom: 2rem;\n}\n.modal-form .form-section:last-of-type {\n  margin-bottom: 1.5rem;\n}\n.modal-form .form-section .section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.modal-form .form-section .section-header svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-form .form-section .section-header .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-form .form-section .section-header:first-child svg {\n  color: #10b981;\n}\n.modal-form .form-section .section-header:nth-child(2) svg {\n  color: #f59e0b;\n}\n.modal-form .form-section .section-header:nth-child(3) svg {\n  color: #8b5cf6;\n}\n.modal-form .form-section .form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-form .form-section .form-row:last-child {\n  margin-bottom: 0;\n}\n.modal-form .form-section .form-field {\n  margin-bottom: 1rem;\n}\n.modal-form .form-section .form-field:last-child {\n  margin-bottom: 0;\n}\n.modal-form .form-section .form-field .field-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-form .form-section .form-field .field-label .required {\n  color: #ef4444;\n  font-weight: 600;\n}\n.modal-form .form-section .form-field .form-input,\n.modal-form .form-section .form-field .form-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  color: #111827;\n  background-color: white;\n  transition: all 0.2s;\n}\n.modal-form .form-section .form-field .form-input:focus,\n.modal-form .form-section .form-field .form-textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-form .form-section .form-field .form-input::placeholder,\n.modal-form .form-section .form-field .form-textarea::placeholder {\n  color: #9ca3af;\n}\n.modal-form .form-section .form-field .form-input.error,\n.modal-form .form-section .form-field .form-textarea.error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.modal-form .form-section .form-field .form-textarea {\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n.modal-form .form-section .form-field .error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-footer .btn {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.modal-footer .btn.btn-secondary {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-footer .btn.btn-secondary:hover {\n  background-color: #e5e7eb;\n}\n.modal-footer .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer .btn.btn-primary:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.modal-footer .btn.btn-primary:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .modal-container {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .modal-form {\n    padding: 1rem;\n  }\n  .modal-form .form-section .form-row {\n    grid-template-columns: 1fr;\n  }\n  .modal-footer {\n    flex-direction: column;\n  }\n  .modal-footer .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .modal-header {\n    padding: 1rem;\n  }\n  .modal-header .header-left .modal-title {\n    font-size: 1.25rem;\n  }\n  .modal-form {\n    padding: 0.75rem;\n  }\n  .modal-form .form-section .section-header .section-title {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=add-part-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], { closeModal: [{
    type: Output
  }], createPart: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPartModalComponent, { className: "AddPartModalComponent", filePath: "src/app/inventory/components/add-part-modal/add-part-modal.component.ts", lineNumber: 12 });
})();

// src/app/inventory/components/parts-catalog/parts-catalog.component.ts
function PartsCatalogComponent_app_add_part_modal_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-add-part-modal", 62);
    \u0275\u0275listener("closeModal", function PartsCatalogComponent_app_add_part_modal_120_Template_app_add_part_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddPartModal());
    })("createPart", function PartsCatalogComponent_app_add_part_modal_120_Template_app_add_part_modal_createPart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreatePart($event));
    });
    \u0275\u0275elementEnd();
  }
}
var PartsCatalogComponent = class _PartsCatalogComponent {
  showAddPartModal = false;
  openAddPartModal() {
    this.showAddPartModal = true;
  }
  closeAddPartModal() {
    this.showAddPartModal = false;
  }
  onCreatePart(partData) {
    console.log("New part data:", partData);
    this.closeAddPartModal();
  }
  static \u0275fac = function PartsCatalogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartsCatalogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartsCatalogComponent, selectors: [["app-parts-catalog"]], decls: 121, vars: 1, consts: [[1, "parts-catalog"], [1, "summary-cards-row"], [1, "summary-card", "total-parts"], [1, "card-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "card-content"], [1, "card-value"], [1, "card-label"], [1, "summary-card", "low-stock"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "card-value", "warning"], [1, "summary-card", "total-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "search-filters-section"], [1, "search-row"], [1, "search-container"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search parts...", 1, "search-input"], [1, "advanced-filters-btn"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "actions-row"], [1, "bulk-actions"], [1, "bulk-checkbox"], ["type", "checkbox"], [1, "checkmark"], [1, "bulk-text"], [1, "view-controls"], [1, "view-toggles"], ["title", "Grid View", 1, "view-toggle", "active"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["title", "List View", 1, "view-toggle"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 10h16M4 14h16M4 18h16"], ["title", "Compact Grid", 1, "view-toggle"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"], ["title", "Table View", 1, "view-toggle"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"], [1, "add-part-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "parts-grid"], [1, "part-card"], [1, "part-header"], [1, "part-info"], [1, "part-name"], [1, "part-id"], [1, "part-description"], [1, "stock-status"], [1, "status-badge", "out-of-stock"], [1, "part-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "part-actions"], [1, "action-btn", "edit"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "action-btn", "delete"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "fab"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"], [3, "closeModal", "createPart", 4, "ngIf"], [3, "closeModal", "createPart"]], template: function PartsCatalogComponent_Template(rf, ctx) {
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
      \u0275\u0275text(10, "Total Parts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 4);
      \u0275\u0275element(14, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 6)(16, "div", 11);
      \u0275\u0275text(17, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8);
      \u0275\u0275text(19, "Low Stock Items");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 12)(21, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 4);
      \u0275\u0275element(23, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "div", 6)(25, "div", 7);
      \u0275\u0275text(26, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 8);
      \u0275\u0275text(28, "Total Inventory Value");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 14)(30, "div", 15)(31, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 17);
      \u0275\u0275element(33, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(34, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 20)(36, "span");
      \u0275\u0275text(37, "Advanced Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 21);
      \u0275\u0275element(39, "path", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(40, "div", 23)(41, "div", 24)(42, "label", 25);
      \u0275\u0275element(43, "input", 26)(44, "span", 27);
      \u0275\u0275elementStart(45, "span", 28);
      \u0275\u0275text(46, "Bulk Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 29)(48, "div", 30)(49, "button", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 21);
      \u0275\u0275element(51, "path", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "button", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(53, "svg", 21);
      \u0275\u0275element(54, "path", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(55, "button", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 21);
      \u0275\u0275element(57, "path", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "button", 37);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 21);
      \u0275\u0275element(60, "path", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(61, "button", 39);
      \u0275\u0275listener("click", function PartsCatalogComponent_Template_button_click_61_listener() {
        return ctx.openAddPartModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(62, "svg", 21);
      \u0275\u0275element(63, "path", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " Add Part ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(65, "div", 41)(66, "div", 42)(67, "div", 43)(68, "div", 44)(69, "h4", 45);
      \u0275\u0275text(70, "part 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span", 46);
      \u0275\u0275text(72, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 47);
      \u0275\u0275text(74, "part 1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 48)(76, "span", 49);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(77, "svg", 21);
      \u0275\u0275element(78, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(79, " Out of Stock ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(80, "div", 50)(81, "div", 51)(82, "span", 52);
      \u0275\u0275text(83, "Category:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 53);
      \u0275\u0275text(85, "ews");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 51)(87, "span", 52);
      \u0275\u0275text(88, "Manufacturer:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "span", 53);
      \u0275\u0275text(90, "e2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 51)(92, "span", 52);
      \u0275\u0275text(93, "Unit Cost:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span", 53);
      \u0275\u0275text(95, "$3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 51)(97, "span", 52);
      \u0275\u0275text(98, "On Hand:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(100, "svg", 21);
      \u0275\u0275element(101, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(102, " 0 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(103, "div", 51)(104, "span", 52);
      \u0275\u0275text(105, "Available:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span", 53);
      \u0275\u0275text(107, "0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 54)(109, "button", 55);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(110, "svg", 21);
      \u0275\u0275element(111, "path", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275text(112, " Edit ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(113, "button", 57);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(114, "svg", 21);
      \u0275\u0275element(115, "path", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275text(116, " Delete ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(117, "button", 59);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(118, "svg", 4);
      \u0275\u0275element(119, "path", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(120, PartsCatalogComponent_app_add_part_modal_120_Template, 1, 0, "app-add-part-modal", 61);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(120);
      \u0275\u0275property("ngIf", ctx.showAddPartModal);
    }
  }, dependencies: [CommonModule, NgIf, AddPartModalComponent], styles: ['\n\n.parts-catalog[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-parts[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.low-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-value[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-bottom: 2rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  align-items: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .advanced-filters-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .advanced-filters-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .advanced-filters-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 2px solid #d1d5db;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 0.125rem;\n  transform: scale(0);\n  transition: transform 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]::after {\n  transform: scale(1);\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   .bulk-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: none;\n  border: none;\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-id[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-description[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .status-badge.out-of-stock[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%]:hover {\n  background-color: #dc2626;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: currentColor;\n}\n.parts-catalog[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.parts-catalog[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=parts-catalog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartsCatalogComponent, [{
    type: Component,
    args: [{ selector: "app-parts-catalog", standalone: true, imports: [CommonModule, AddPartModalComponent], template: '<div class="parts-catalog">\r\n  <!-- Summary Cards Row -->\r\n  <div class="summary-cards-row">\r\n    <div class="summary-card total-parts">\r\n      <div class="card-icon">\r\n        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="card-value">1</div>\r\n        <div class="card-label">Total Parts</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="summary-card low-stock">\r\n      <div class="card-icon">\r\n        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="card-value warning">1</div>\r\n        <div class="card-label">Low Stock Items</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="summary-card total-value">\r\n      <div class="card-icon">\r\n        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="card-value">$0</div>\r\n        <div class="card-label">Total Inventory Value</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Search and Filters Section -->\r\n  <div class="search-filters-section">\r\n    <div class="search-row">\r\n      <div class="search-container">\r\n        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r\n        </svg>\r\n        <input type="text" placeholder="Search parts..." class="search-input">\r\n      </div>\r\n      \r\n      <button class="advanced-filters-btn">\r\n        <span>Advanced Filters</span>\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r\n        </svg>\r\n      </button>\r\n    </div>\r\n\r\n    <div class="actions-row">\r\n      <div class="bulk-actions">\r\n        <label class="bulk-checkbox">\r\n          <input type="checkbox">\r\n          <span class="checkmark"></span>\r\n          <span class="bulk-text">Bulk Actions</span>\r\n        </label>\r\n      </div>\r\n\r\n      <div class="view-controls">\r\n        <div class="view-toggles">\r\n          <button class="view-toggle active" title="Grid View">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>\r\n            </svg>\r\n          </button>\r\n          <button class="view-toggle" title="List View">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r\n            </svg>\r\n          </button>\r\n          <button class="view-toggle" title="Compact Grid">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>\r\n            </svg>\r\n          </button>\r\n          <button class="view-toggle" title="Table View">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"></path>\r\n            </svg>\r\n          </button>\r\n        </div>\r\n\r\n        <button class="add-part-btn" (click)="openAddPartModal()">\r\n          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r\n          </svg>\r\n          Add Part\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Parts Grid -->\r\n  <div class="parts-grid">\r\n    <div class="part-card">\r\n      <div class="part-header">\r\n        <div class="part-info">\r\n          <h4 class="part-name">part 1</h4>\r\n          <span class="part-id">1</span>\r\n          <span class="part-description">part 1</span>\r\n        </div>\r\n        <div class="stock-status">\r\n          <span class="status-badge out-of-stock">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n            </svg>\r\n            Out of Stock\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="part-details">\r\n        <div class="detail-row">\r\n          <span class="detail-label">Category:</span>\r\n          <span class="detail-value">ews</span>\r\n        </div>\r\n        <div class="detail-row">\r\n          <span class="detail-label">Manufacturer:</span>\r\n          <span class="detail-value">e2</span>\r\n        </div>\r\n        <div class="detail-row">\r\n          <span class="detail-label">Unit Cost:</span>\r\n          <span class="detail-value">$3</span>\r\n        </div>\r\n        <div class="detail-row">\r\n          <span class="detail-label">On Hand:</span>\r\n          <span class="detail-value">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r\n            </svg>\r\n            0\r\n          </span>\r\n        </div>\r\n        <div class="detail-row">\r\n          <span class="detail-label">Available:</span>\r\n          <span class="detail-value">0</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="part-actions">\r\n        <button class="action-btn edit">\r\n          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r\n          </svg>\r\n          Edit\r\n        </button>\r\n        <button class="action-btn delete">\r\n          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r\n          </svg>\r\n          Delete\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Floating Action Button -->\r\n  <button class="fab">\r\n    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>\r\n    </svg>\r\n  </button>\r\n\r\n  <!-- Add Part Modal -->\r\n  <app-add-part-modal\r\n    *ngIf="showAddPartModal"\r\n    (closeModal)="closeAddPartModal()"\r\n    (createPart)="onCreatePart($event)">\r\n  </app-add-part-modal>\r\n</div>\r\n', styles: ['/* src/app/inventory/components/parts-catalog/parts-catalog.component.scss */\n.parts-catalog {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.parts-catalog .summary-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.parts-catalog .summary-cards-row .summary-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog .summary-cards-row .summary-card .card-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.parts-catalog .summary-cards-row .summary-card .card-content .card-value {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog .summary-cards-row .summary-card .card-content .card-value.warning {\n  color: #f59e0b;\n}\n.parts-catalog .summary-cards-row .summary-card .card-content .card-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog .summary-cards-row .summary-card.total-parts .card-icon {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.parts-catalog .summary-cards-row .summary-card.low-stock .card-icon {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.parts-catalog .summary-cards-row .summary-card.total-value .card-icon {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.parts-catalog .search-filters-section {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-bottom: 2rem;\n}\n.parts-catalog .search-filters-section .search-row {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  align-items: center;\n}\n.parts-catalog .search-filters-section .search-row .search-container {\n  flex: 1;\n  position: relative;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-input::placeholder {\n  color: #9ca3af;\n}\n.parts-catalog .search-filters-section .search-row .advanced-filters-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.parts-catalog .search-filters-section .search-row .advanced-filters-btn:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog .search-filters-section .search-row .advanced-filters-btn svg {\n  color: #6b7280;\n}\n.parts-catalog .search-filters-section .actions-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox input[type=checkbox] {\n  display: none;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox .checkmark {\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 2px solid #d1d5db;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox .checkmark::after {\n  content: "";\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 0.125rem;\n  transform: scale(0);\n  transition: transform 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox input[type=checkbox]:checked + .checkmark {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox input[type=checkbox]:checked + .checkmark::after {\n  transform: scale(1);\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox .bulk-text {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: none;\n  border: none;\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle.active {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle svg {\n  width: 1rem;\n  height: 1rem;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn:hover {\n  background-color: #2563eb;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn svg {\n  color: white;\n}\n.parts-catalog .parts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.parts-catalog .parts-grid .part-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog .parts-grid .part-card .part-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.parts-catalog .parts-grid .part-card .part-header .part-info .part-name {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.parts-catalog .parts-grid .part-card .part-header .part-info .part-id {\n  display: block;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog .parts-grid .part-card .part-header .part-info .part-description {\n  display: block;\n  font-size: 0.875rem;\n  color: #9ca3af;\n}\n.parts-catalog .parts-grid .part-card .part-header .stock-status .status-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-header .stock-status .status-badge.out-of-stock {\n  background-color: #ef4444;\n}\n.parts-catalog .parts-grid .part-card .part-header .stock-status .status-badge svg {\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-details {\n  margin-bottom: 1.5rem;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row:last-child {\n  border-bottom: none;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row .detail-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row .detail-value {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row .detail-value svg {\n  color: #9ca3af;\n}\n.parts-catalog .parts-grid .part-card .part-actions {\n  display: flex;\n  gap: 0.75rem;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.edit {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.edit:hover {\n  background-color: #2563eb;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.delete {\n  background-color: #ef4444;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.delete:hover {\n  background-color: #dc2626;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn svg {\n  color: currentColor;\n}\n.parts-catalog .fab {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.parts-catalog .fab:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.parts-catalog .fab svg {\n  color: white;\n}\n/*# sourceMappingURL=parts-catalog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartsCatalogComponent, { className: "PartsCatalogComponent", filePath: "src/app/inventory/components/parts-catalog/parts-catalog.component.ts", lineNumber: 12 });
})();
export {
  PartsCatalogComponent
};
//# sourceMappingURL=chunk-PWAZUG2S.js.map
