import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-MQFZXT5S.js";
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
} from "./chunk-BHMN65X2.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/create-purchase-order-modal/create-purchase-order-modal.component.ts
function CreatePurchaseOrderModalComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r1 = ctx.$implicit;
    \u0275\u0275property("value", supplier_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", supplier_r1.name, " - ", supplier_r1.contact, " ");
  }
}
function CreatePurchaseOrderModalComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("supplier"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("orderDate"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("expectedDelivery"), " ");
  }
}
var CreatePurchaseOrderModalComponent = class _CreatePurchaseOrderModalComponent {
  fb;
  closeModal = new EventEmitter();
  createPurchaseOrder = new EventEmitter();
  poForm;
  // Sample data for dropdowns
  suppliers = [
    { id: 1, name: "Supplier A", contact: "John Doe" },
    { id: 2, name: "Supplier B", contact: "Jane Smith" },
    { id: 3, name: "Supplier C", contact: "Bob Johnson" }
  ];
  items = [
    { id: 1, name: "Item 1", description: "Sample item 1", unitCost: 25 },
    { id: 2, name: "Item 2", description: "Sample item 2", unitCost: 15.5 },
    { id: 3, name: "Item 3", description: "Sample item 3", unitCost: 45.75 }
  ];
  constructor(fb) {
    this.fb = fb;
    this.poForm = this.fb.group({
      supplier: ["", [Validators.required]],
      orderDate: ["", [Validators.required]],
      expectedDelivery: ["", [Validators.required]],
      items: this.fb.array([]),
      notes: [""],
      priority: ["medium"]
    });
  }
  onSubmit() {
    if (this.poForm.valid) {
      this.createPurchaseOrder.emit(this.poForm.value);
    }
  }
  onCancel() {
    this.closeModal.emit();
  }
  getFieldError(fieldName) {
    const field = this.poForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return "This field is required";
      }
    }
    return "";
  }
  getSelectedSupplierName() {
    const supplierId = this.poForm.get("supplier")?.value;
    const supplier = this.suppliers.find((s) => s.id === supplierId);
    return supplier ? supplier.name : "";
  }
  static \u0275fac = function CreatePurchaseOrderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreatePurchaseOrderModalComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePurchaseOrderModalComponent, selectors: [["app-create-purchase-order-modal"]], outputs: { closeModal: "closeModal", createPurchaseOrder: "createPurchaseOrder" }, decls: 74, vars: 6, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "section-icon", "supplier"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "section-title"], [1, "form-row"], [1, "form-field"], ["for", "supplier", 1, "field-label"], ["id", "supplier", "formControlName", "supplier", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-message", 4, "ngIf"], [1, "section-icon", "order"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["for", "orderDate", 1, "field-label"], ["type", "date", "id", "orderDate", "formControlName", "orderDate", 1, "form-input"], ["for", "expectedDelivery", 1, "field-label"], ["type", "date", "id", "expectedDelivery", "formControlName", "expectedDelivery", 1, "form-input"], ["for", "priority", 1, "field-label"], ["id", "priority", "formControlName", "priority", 1, "form-select"], ["value", "low"], ["value", "medium"], ["value", "high"], ["value", "urgent"], [1, "section-icon", "notes"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "form-field", "full-width"], ["for", "notes", 1, "field-label"], ["id", "notes", "formControlName", "notes", "rows", "3", "placeholder", "Add any additional notes or special instructions...", 1, "form-textarea"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [3, "value"], [1, "error-message"]], template: function CreatePurchaseOrderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Create Purchase Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_Template_button_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div", 7)(9, "form", 8);
      \u0275\u0275listener("ngSubmit", function CreatePurchaseOrderModalComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 5);
      \u0275\u0275element(14, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "h3", 13);
      \u0275\u0275text(16, "Supplier Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "label", 16);
      \u0275\u0275text(20, "Supplier *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 17)(22, "option", 18);
      \u0275\u0275text(23, "Select a supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, CreatePurchaseOrderModalComponent_option_24_Template, 2, 3, "option", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, CreatePurchaseOrderModalComponent_div_25_Template, 2, 1, "div", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 9)(27, "div", 10)(28, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 5);
      \u0275\u0275element(30, "path", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "h3", 13);
      \u0275\u0275text(32, "Order Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 14)(34, "div", 15)(35, "label", 23);
      \u0275\u0275text(36, "Order Date *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 24);
      \u0275\u0275template(38, CreatePurchaseOrderModalComponent_div_38_Template, 2, 1, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 15)(40, "label", 25);
      \u0275\u0275text(41, "Expected Delivery *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 26);
      \u0275\u0275template(43, CreatePurchaseOrderModalComponent_div_43_Template, 2, 1, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 14)(45, "div", 15)(46, "label", 27);
      \u0275\u0275text(47, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "select", 28)(49, "option", 29);
      \u0275\u0275text(50, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 30);
      \u0275\u0275text(52, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "option", 31);
      \u0275\u0275text(54, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "option", 32);
      \u0275\u0275text(56, "Urgent");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "div", 9)(58, "div", 10)(59, "div", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(60, "svg", 5);
      \u0275\u0275element(61, "path", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(62, "h3", 13);
      \u0275\u0275text(63, "Additional Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 14)(65, "div", 35)(66, "label", 36);
      \u0275\u0275text(67, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "textarea", 37);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(69, "div", 38)(70, "button", 39);
      \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_Template_button_click_70_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(71, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 40);
      \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_Template_button_click_72_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(73, " Create Purchase Order ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.poForm);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngForOf", ctx.suppliers);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("supplier"));
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.getFieldError("orderDate"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.getFieldError("expectedDelivery"));
      \u0275\u0275advance(29);
      \u0275\u0275property("disabled", !ctx.poForm.valid);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 0.75rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon.supplier[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon.order[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #16a34a;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon.notes[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-field.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  min-height: 1rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 0.75rem 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem 1rem 1rem;\n  }\n}\n/*# sourceMappingURL=create-purchase-order-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatePurchaseOrderModalComponent, [{
    type: Component,
    args: [{ selector: "app-create-purchase-order-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="modal-overlay" (click)="onCancel()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <h2 class="modal-title">Create Purchase Order</h2>\r
      <button class="close-btn" (click)="onCancel()">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="modal-body">\r
      <form [formGroup]="poForm" (ngSubmit)="onSubmit()">\r
        <!-- Supplier Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <div class="section-icon supplier">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>\r
              </svg>\r
            </div>\r
            <h3 class="section-title">Supplier Information</h3>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="supplier" class="field-label">Supplier *</label>\r
              <select id="supplier" formControlName="supplier" class="form-select">\r
                <option value="">Select a supplier</option>\r
                <option *ngFor="let supplier of suppliers" [value]="supplier.id">\r
                  {{ supplier.name }} - {{ supplier.contact }}\r
                </option>\r
              </select>\r
              <div class="error-message" *ngIf="getFieldError('supplier')">\r
                {{ getFieldError('supplier') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Order Details -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <div class="section-icon order">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
              </svg>\r
            </div>\r
            <h3 class="section-title">Order Details</h3>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="orderDate" class="field-label">Order Date *</label>\r
              <input type="date" id="orderDate" formControlName="orderDate" class="form-input">\r
              <div class="error-message" *ngIf="getFieldError('orderDate')">\r
                {{ getFieldError('orderDate') }}\r
              </div>\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="expectedDelivery" class="field-label">Expected Delivery *</label>\r
              <input type="date" id="expectedDelivery" formControlName="expectedDelivery" class="form-input">\r
              <div class="error-message" *ngIf="getFieldError('expectedDelivery')">\r
                {{ getFieldError('expectedDelivery') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="priority" class="field-label">Priority</label>\r
              <select id="priority" formControlName="priority" class="form-select">\r
                <option value="low">Low</option>\r
                <option value="medium">Medium</option>\r
                <option value="high">High</option>\r
                <option value="urgent">Urgent</option>\r
              </select>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Additional Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <div class="section-icon notes">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
              </svg>\r
            </div>\r
            <h3 class="section-title">Additional Information</h3>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-field full-width">\r
              <label for="notes" class="field-label">Notes</label>\r
              <textarea id="notes" formControlName="notes" rows="3" class="form-textarea" \r
                        placeholder="Add any additional notes or special instructions..."></textarea>\r
            </div>\r
          </div>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Modal Footer -->\r
    <div class="modal-footer">\r
      <button type="button" class="btn btn-secondary" (click)="onCancel()">\r
        Cancel\r
      </button>\r
      <button type="submit" class="btn btn-primary" (click)="onSubmit()" [disabled]="!poForm.valid">\r
        Create Purchase Order\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/inventory/components/create-purchase-order-modal/create-purchase-order-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header .modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header .close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.modal-header .close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header .close-btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-body .form-section {\n  margin-bottom: 2rem;\n}\n.modal-body .form-section:last-child {\n  margin-bottom: 0;\n}\n.modal-body .form-section .section-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 0.75rem;\n}\n.modal-body .form-section .section-header .section-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body .form-section .section-header .section-icon.supplier {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.modal-body .form-section .section-header .section-icon.order {\n  background-color: #dcfce7;\n  color: #16a34a;\n}\n.modal-body .form-section .section-header .section-icon.notes {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.modal-body .form-section .section-header .section-icon svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body .form-section .section-header .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.modal-body .form-section .form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-body .form-section .form-row:last-child {\n  margin-bottom: 0;\n}\n.modal-body .form-section .form-row .form-field.full-width {\n  grid-column: 1/-1;\n}\n.modal-body .form-section .form-field .field-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-body .form-section .form-field .form-input,\n.modal-body .form-section .form-field .form-select,\n.modal-body .form-section .form-field .form-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.modal-body .form-section .form-field .form-input:focus,\n.modal-body .form-section .form-field .form-select:focus,\n.modal-body .form-section .form-field .form-textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-body .form-section .form-field .form-input.ng-invalid.ng-touched,\n.modal-body .form-section .form-field .form-select.ng-invalid.ng-touched,\n.modal-body .form-section .form-field .form-textarea.ng-invalid.ng-touched {\n  border-color: #ef4444;\n}\n.modal-body .form-section .form-field .form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.modal-body .form-section .form-field .error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  min-height: 1rem;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-footer .btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.modal-footer .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-footer .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer .btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.modal-footer .btn.btn-primary:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .modal-container {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-body .form-section .form-row {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .modal-footer .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .modal-header {\n    padding: 1rem 1rem 0.75rem 1rem;\n  }\n  .modal-header .modal-title {\n    font-size: 1.125rem;\n  }\n  .modal-body {\n    padding: 0.75rem;\n  }\n  .modal-footer {\n    padding: 0.75rem 1rem 1rem 1rem;\n  }\n}\n/*# sourceMappingURL=create-purchase-order-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], { closeModal: [{
    type: Output
  }], createPurchaseOrder: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePurchaseOrderModalComponent, { className: "CreatePurchaseOrderModalComponent", filePath: "src/app/inventory/components/create-purchase-order-modal/create-purchase-order-modal.component.ts", lineNumber: 12 });
})();

// src/app/inventory/components/purchase-orders/purchase-orders.component.ts
function PurchaseOrdersComponent_app_create_purchase_order_modal_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-purchase-order-modal", 40);
    \u0275\u0275listener("closeModal", function PurchaseOrdersComponent_app_create_purchase_order_modal_78_Template_app_create_purchase_order_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePOModal());
    })("createPurchaseOrder", function PurchaseOrdersComponent_app_create_purchase_order_modal_78_Template_app_create_purchase_order_modal_createPurchaseOrder_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreatePurchaseOrder($event));
    });
    \u0275\u0275elementEnd();
  }
}
var PurchaseOrdersComponent = class _PurchaseOrdersComponent {
  showCreatePOModal = false;
  openCreatePOModal() {
    this.showCreatePOModal = true;
  }
  closeCreatePOModal() {
    this.showCreatePOModal = false;
  }
  onCreatePurchaseOrder(poData) {
    console.log("New Purchase Order data:", poData);
    this.closeCreatePOModal();
  }
  static \u0275fac = function PurchaseOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseOrdersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseOrdersComponent, selectors: [["app-purchase-orders"]], decls: 79, vars: 1, consts: [[1, "purchase-orders"], [1, "overview-cards-row"], [1, "overview-card", "total-pos"], [1, "card-content"], [1, "card-value"], [1, "card-label"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "card-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "overview-card", "pending"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "overview-card", "approved"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "overview-card", "total-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "control-bar"], [1, "search-controls"], [1, "search-container"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search purchase orders...", 1, "search-input"], [1, "status-dropdown"], [1, "status-select"], ["value", ""], ["value", "pending"], ["value", "approved"], ["value", "rejected"], ["value", "completed"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "action-buttons"], [1, "btn", "btn-secondary"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "btn", "btn-primary", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "empty-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "empty-icon"], [1, "empty-title"], [1, "empty-description"], [3, "closeModal", "createPurchaseOrder", 4, "ngIf"], [3, "closeModal", "createPurchaseOrder"]], template: function PurchaseOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7, "Total POs");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 3)(12, "div", 4);
      \u0275\u0275text(13, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 5);
      \u0275\u0275text(15, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 6);
      \u0275\u0275element(17, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 3)(20, "div", 4);
      \u0275\u0275text(21, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 5);
      \u0275\u0275text(23, "Approved");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 6);
      \u0275\u0275element(25, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "div", 12)(27, "div", 3)(28, "div", 4);
      \u0275\u0275text(29, "AED 0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 5);
      \u0275\u0275text(31, "Total Value");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 6);
      \u0275\u0275element(33, "path", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "div", 14)(35, "div", 15)(36, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 17);
      \u0275\u0275element(38, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(39, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 20)(41, "select", 21)(42, "option", 22);
      \u0275\u0275text(43, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 23);
      \u0275\u0275text(45, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 24);
      \u0275\u0275text(47, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 25);
      \u0275\u0275text(49, "Rejected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 26);
      \u0275\u0275text(51, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 27);
      \u0275\u0275element(53, "path", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "div", 29)(55, "button", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 31);
      \u0275\u0275element(57, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(58, " Templates ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(59, "button", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(60, "svg", 31);
      \u0275\u0275element(61, "path", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275text(62, " Budget Controls ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(63, "button", 33);
      \u0275\u0275listener("click", function PurchaseOrdersComponent_Template_button_click_63_listener() {
        return ctx.openCreatePOModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 31);
      \u0275\u0275element(65, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " Create Purchase Order ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "div", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(68, "svg", 36);
      \u0275\u0275element(69, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(70, "h3", 37);
      \u0275\u0275text(71, "No Purchase Orders Yet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 38);
      \u0275\u0275text(73, "Create your first purchase order to start managing inventory procurement.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 33);
      \u0275\u0275listener("click", function PurchaseOrdersComponent_Template_button_click_74_listener() {
        return ctx.openCreatePOModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(75, "svg", 31);
      \u0275\u0275element(76, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(77, " Create Purchase Order ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(78, PurchaseOrdersComponent_app_create_purchase_order_modal_78_Template, 1, 0, "app-create-purchase-order-modal", 39);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(78);
      \u0275\u0275property("ngIf", ctx.showCreatePOModal);
    }
  }, dependencies: [CommonModule, NgIf, CreatePurchaseOrderModalComponent], styles: ["\n\n.purchase-orders[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  position: relative;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #374151;\n  font-weight: 600;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  width: 2rem;\n  height: 2rem;\n  color: #9ca3af;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card.total-pos[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card.pending[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card.approved[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card.total-value[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex: 1;\n  min-width: 300px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 0.75rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 150px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  white-space: nowrap;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 4rem 2rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  color: #9ca3af;\n  margin: 0 auto 1.5rem auto;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.75rem 0;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .purchase-orders[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-width: auto;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n@media (max-width: 480px) {\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=purchase-orders.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-orders", standalone: true, imports: [CommonModule, CreatePurchaseOrderModalComponent], template: '<div class="purchase-orders">\r\n  <!-- Overview Cards Row -->\r\n  <div class="overview-cards-row">\r\n    <div class="overview-card total-pos">\r\n      <div class="card-content">\r\n        <div class="card-value">0</div>\r\n        <div class="card-label">Total POs</div>\r\n      </div>\r\n      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class="overview-card pending">\r\n      <div class="card-content">\r\n        <div class="card-value">0</div>\r\n        <div class="card-label">Pending</div>\r\n      </div>\r\n      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class="overview-card approved">\r\n      <div class="card-content">\r\n        <div class="card-value">0</div>\r\n        <div class="card-label">Approved</div>\r\n      </div>\r\n      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r\n      </svg>\r\n    </div>\r\n\r\n    <div class="overview-card total-value">\r\n      <div class="card-content">\r\n        <div class="card-value">AED 0</div>\r\n        <div class="card-label">Total Value</div>\r\n      </div>\r\n      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Control Bar -->\r\n  <div class="control-bar">\r\n    <div class="search-controls">\r\n      <div class="search-container">\r\n        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r\n        </svg>\r\n        <input type="text" placeholder="Search purchase orders..." class="search-input">\r\n      </div>\r\n\r\n      <div class="status-dropdown">\r\n        <select class="status-select">\r\n          <option value="">All Status</option>\r\n          <option value="pending">Pending</option>\r\n          <option value="approved">Approved</option>\r\n          <option value="rejected">Rejected</option>\r\n          <option value="completed">Completed</option>\r\n        </select>\r\n        <svg class="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="action-buttons">\r\n      <button class="btn btn-secondary">\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r\n        </svg>\r\n        Templates\r\n      </button>\r\n      <button class="btn btn-secondary">\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>\r\n        </svg>\r\n        Budget Controls\r\n      </button>\r\n      <button class="btn btn-primary" (click)="openCreatePOModal()">\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r\n        </svg>\r\n        Create Purchase Order\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Empty State -->\r\n  <div class="empty-state">\r\n    <svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r\n    </svg>\r\n    <h3 class="empty-title">No Purchase Orders Yet</h3>\r\n    <p class="empty-description">Create your first purchase order to start managing inventory procurement.</p>\r\n    <button class="btn btn-primary" (click)="openCreatePOModal()">\r\n      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r\n      </svg>\r\n      Create Purchase Order\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Create Purchase Order Modal -->\r\n  <app-create-purchase-order-modal\r\n    *ngIf="showCreatePOModal"\r\n    (closeModal)="closeCreatePOModal()"\r\n    (createPurchaseOrder)="onCreatePurchaseOrder($event)">\r\n  </app-create-purchase-order-modal>\r\n</div>\r\n', styles: ["/* src/app/inventory/components/purchase-orders/purchase-orders.component.scss */\n.purchase-orders {\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.purchase-orders .overview-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.purchase-orders .overview-cards-row .overview-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  position: relative;\n}\n.purchase-orders .overview-cards-row .overview-card .card-content .card-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n.purchase-orders .overview-cards-row .overview-card .card-content .card-label {\n  font-size: 1rem;\n  color: #374151;\n  font-weight: 600;\n}\n.purchase-orders .overview-cards-row .overview-card .card-icon {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  width: 2rem;\n  height: 2rem;\n  color: #9ca3af;\n}\n.purchase-orders .overview-cards-row .overview-card.total-pos .card-icon {\n  color: #3b82f6;\n}\n.purchase-orders .overview-cards-row .overview-card.pending .card-icon {\n  color: #f59e0b;\n}\n.purchase-orders .overview-cards-row .overview-card.approved .card-icon {\n  color: #10b981;\n}\n.purchase-orders .overview-cards-row .overview-card.total-value .card-icon {\n  color: #8b5cf6;\n}\n.purchase-orders .control-bar {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.purchase-orders .control-bar .search-controls {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex: 1;\n  min-width: 300px;\n}\n.purchase-orders .control-bar .search-controls .search-container {\n  position: relative;\n  flex: 1;\n}\n.purchase-orders .control-bar .search-controls .search-container .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.purchase-orders .control-bar .search-controls .search-container .search-input {\n  width: 100%;\n  padding: 0.75rem 0.75rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.purchase-orders .control-bar .search-controls .search-container .search-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.purchase-orders .control-bar .search-controls .status-dropdown {\n  position: relative;\n  min-width: 150px;\n}\n.purchase-orders .control-bar .search-controls .status-dropdown .status-select {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.purchase-orders .control-bar .search-controls .status-dropdown .status-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.purchase-orders .control-bar .search-controls .status-dropdown .dropdown-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.purchase-orders .control-bar .action-buttons {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.purchase-orders .control-bar .action-buttons .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  white-space: nowrap;\n}\n.purchase-orders .control-bar .action-buttons .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.purchase-orders .control-bar .action-buttons .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.purchase-orders .control-bar .action-buttons .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.purchase-orders .control-bar .action-buttons .btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.purchase-orders .control-bar .action-buttons .btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.purchase-orders .empty-state {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 4rem 2rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.purchase-orders .empty-state .empty-icon {\n  width: 4rem;\n  height: 4rem;\n  color: #9ca3af;\n  margin: 0 auto 1.5rem auto;\n}\n.purchase-orders .empty-state .empty-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.75rem 0;\n}\n.purchase-orders .empty-state .empty-description {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.purchase-orders .empty-state .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders .empty-state .btn:hover {\n  background-color: #2563eb;\n}\n.purchase-orders .empty-state .btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .purchase-orders {\n    padding: 1rem;\n  }\n  .purchase-orders .overview-cards-row {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .purchase-orders .overview-cards-row .overview-card {\n    padding: 1rem;\n  }\n  .purchase-orders .overview-cards-row .overview-card .card-content .card-value {\n    font-size: 1.5rem;\n  }\n  .purchase-orders .overview-cards-row .overview-card .card-content .card-label {\n    font-size: 0.875rem;\n  }\n  .purchase-orders .overview-cards-row .overview-card .card-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .purchase-orders .control-bar {\n    padding: 1rem;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .purchase-orders .control-bar .search-controls {\n    flex-direction: column;\n    min-width: auto;\n  }\n  .purchase-orders .control-bar .search-controls .search-container {\n    min-width: auto;\n  }\n  .purchase-orders .control-bar .search-controls .status-dropdown {\n    min-width: auto;\n  }\n  .purchase-orders .control-bar .action-buttons {\n    justify-content: stretch;\n  }\n  .purchase-orders .control-bar .action-buttons .btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .purchase-orders .empty-state {\n    padding: 2rem 1rem;\n  }\n  .purchase-orders .empty-state .empty-icon {\n    width: 3rem;\n    height: 3rem;\n  }\n  .purchase-orders .empty-state .empty-title {\n    font-size: 1.25rem;\n  }\n  .purchase-orders .empty-state .empty-description {\n    font-size: 0.875rem;\n  }\n}\n@media (max-width: 480px) {\n  .purchase-orders .overview-cards-row {\n    grid-template-columns: 1fr;\n  }\n  .purchase-orders .control-bar .action-buttons {\n    flex-direction: column;\n  }\n  .purchase-orders .control-bar .action-buttons .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=purchase-orders.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseOrdersComponent, { className: "PurchaseOrdersComponent", filePath: "src/app/inventory/components/purchase-orders/purchase-orders.component.ts", lineNumber: 12 });
})();
export {
  PurchaseOrdersComponent
};
//# sourceMappingURL=chunk-DNINAUKQ.js.map
