import {
  InventoryAnalyticsService
} from "./chunk-XNYP7EEO.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MaxValidator,
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
} from "./chunk-UU3SL57D.js";
import "./chunk-5YESG6NV.js";
import "./chunk-7F6J47MM.js";
import {
  CommonModule,
  Component,
  CurrencyPipe,
  EventEmitter,
  Input,
  NgClass,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
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
} from "./chunk-IDZXZHOB.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/add-supplier-modal/add-supplier-modal.component.ts
function AddSupplierModalComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("supplier_code"), " ");
  }
}
function AddSupplierModalComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("name"), " ");
  }
}
function AddSupplierModalComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("contact_person"), " ");
  }
}
function AddSupplierModalComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function AddSupplierModalComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("phone"), " ");
  }
}
function AddSupplierModalComponent_div_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AddSupplierModalComponent_span_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Supplier");
    \u0275\u0275elementEnd();
  }
}
function AddSupplierModalComponent_span_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Creating...");
    \u0275\u0275elementEnd();
  }
}
var AddSupplierModalComponent = class _AddSupplierModalComponent {
  fb;
  inventoryService;
  closeModal = new EventEmitter();
  supplierCreated = new EventEmitter();
  supplierForm;
  loading = false;
  error = null;
  constructor(fb, inventoryService) {
    this.fb = fb;
    this.inventoryService = inventoryService;
    this.supplierForm = this.fb.group({
      supplier_code: ["SUP001", [Validators.required]],
      name: ["", [Validators.required]],
      contact_person: ["", [Validators.required]],
      tax_registration_number: [""],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required]],
      alternate_phone: [""],
      website: [""],
      street_address: [""],
      city: [""],
      state: [""],
      postal_code: [""],
      payment_terms: ["Net 30"],
      currency: ["AED"],
      credit_limit: [0],
      delivery_lead_time: [7],
      notes: [""]
    });
  }
  generateSupplierCode() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    const newCode = `SUP${timestamp}${random}`;
    this.supplierForm.patchValue({ supplier_code: newCode });
  }
  onSubmit() {
    if (this.supplierForm.valid) {
      this.loading = true;
      this.error = null;
      const formData = this.supplierForm.value;
      const supplierData = {
        name: formData.name,
        contact_person: formData.contact_person,
        email: formData.email,
        phone: formData.phone,
        supplier_code: formData.supplier_code,
        tax_registration_number: formData.tax_registration_number,
        alternate_phone: formData.alternate_phone,
        website: formData.website,
        street_address: formData.street_address,
        city: formData.city,
        state: formData.state,
        postal_code: formData.postal_code,
        payment_terms: formData.payment_terms,
        currency: formData.currency,
        credit_limit: formData.credit_limit,
        delivery_lead_time: formData.delivery_lead_time,
        notes: formData.notes
      };
      this.inventoryService.createSupplier(supplierData).subscribe({
        next: (response) => {
          if (response.success) {
            this.supplierCreated.emit(response.data);
            this.closeModal.emit();
          } else {
            this.error = "Failed to create supplier";
          }
          this.loading = false;
        },
        error: (err) => {
          console.error("Error creating supplier:", err);
          this.error = "Error creating supplier. Please try again.";
          this.loading = false;
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.supplierForm.controls).forEach((key) => {
      const control = this.supplierForm.get(key);
      control?.markAsTouched();
    });
  }
  onCancel() {
    this.closeModal.emit();
  }
  getFieldError(fieldName) {
    const field = this.supplierForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return "This field is required";
      }
      if (field.errors["email"]) {
        return "Please enter a valid email address";
      }
      if (field.errors["min"]) {
        return `Minimum value is ${field.errors["min"].min}`;
      }
    }
    return "";
  }
  static \u0275fac = function AddSupplierModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddSupplierModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddSupplierModalComponent, selectors: [["app-add-supplier-modal"]], outputs: { closeModal: "closeModal", supplierCreated: "supplierCreated" }, decls: 177, vars: 10, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-subtitle"], [1, "close-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "section-icon", "basic"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "section-title"], [1, "form-row"], [1, "form-field"], ["for", "supplierCode", 1, "field-label"], [1, "input-with-button"], ["type", "text", "id", "supplierCode", "formControlName", "supplier_code", "placeholder", "Enter supplier code", 1, "form-input"], ["type", "button", 1, "generate-btn", 3, "click"], ["class", "error-message", 4, "ngIf"], ["for", "businessName", 1, "field-label"], ["type", "text", "id", "businessName", "formControlName", "name", "placeholder", "Enter business name", 1, "form-input"], ["for", "contactPerson", 1, "field-label"], ["type", "text", "id", "contactPerson", "formControlName", "contact_person", "placeholder", "Enter contact person name", 1, "form-input"], ["for", "taxRegistration", 1, "field-label"], ["type", "text", "id", "taxRegistration", "formControlName", "tax_registration_number", "placeholder", "Enter tax registration number", 1, "form-input"], [1, "section-icon", "contact"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["for", "email", 1, "field-label"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter email address", 1, "form-input"], ["for", "primaryPhone", 1, "field-label"], ["type", "tel", "id", "primaryPhone", "formControlName", "phone", "placeholder", "Enter primary phone", 1, "form-input"], ["for", "alternatePhone", 1, "field-label"], ["type", "tel", "id", "alternatePhone", "formControlName", "alternate_phone", "placeholder", "Enter alternate phone", 1, "form-input"], ["for", "website", 1, "field-label"], ["type", "url", "id", "website", "formControlName", "website", "placeholder", "Enter website URL", 1, "form-input"], [1, "section-icon", "address"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "form-field", "full-width"], ["for", "streetAddress", 1, "field-label"], [1, "input-with-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "input-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["type", "text", "id", "streetAddress", "formControlName", "street_address", "placeholder", "Enter supplier address", 1, "form-input"], ["for", "city", 1, "field-label"], ["type", "text", "id", "city", "formControlName", "city", "placeholder", "Enter city", 1, "form-input"], ["for", "state", 1, "field-label"], ["id", "state", "formControlName", "state", 1, "form-select"], ["value", ""], ["value", "Abu Dhabi"], ["value", "Dubai"], ["value", "Sharjah"], ["value", "Ajman"], ["value", "Umm Al Quwain"], ["value", "Ras Al Khaimah"], ["value", "Fujairah"], ["for", "postalCode", 1, "field-label"], ["type", "text", "id", "postalCode", "formControlName", "postal_code", "placeholder", "Enter postal code", 1, "form-input"], [1, "section-icon", "business"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], ["for", "paymentTerms", 1, "field-label"], ["id", "paymentTerms", "formControlName", "payment_terms", 1, "form-select"], ["value", "Net 30"], ["value", "Net 45"], ["value", "Net 60"], ["value", "Net 90"], ["value", "Due on Receipt"], ["for", "currency", 1, "field-label"], ["id", "currency", "formControlName", "currency", 1, "form-select"], ["value", "AED"], ["value", "USD"], ["value", "EUR"], ["value", "GBP"], ["for", "creditLimit", 1, "field-label"], ["type", "number", "id", "creditLimit", "formControlName", "credit_limit", "min", "0", "step", "0.01", "placeholder", "Enter credit limit", 1, "form-input"], ["for", "deliveryLeadTime", 1, "field-label"], ["type", "number", "id", "deliveryLeadTime", "formControlName", "delivery_lead_time", "min", "1", "placeholder", "Enter lead time", 1, "form-input"], [1, "section-icon", "notes"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["for", "notes", 1, "field-label"], ["id", "notes", "formControlName", "notes", "rows", "3", "placeholder", "Additional notes about this supplier...", 1, "form-textarea"], ["class", "error-section", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [1, "error-message"], [1, "error-section"]], template: function AddSupplierModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AddSupplierModalComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function AddSupplierModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Add New Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Create a new supplier for purchase orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function AddSupplierModalComponent_Template_button_click_7_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "path", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 8)(11, "form", 9);
      \u0275\u0275listener("ngSubmit", function AddSupplierModalComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 6);
      \u0275\u0275element(16, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "h3", 14);
      \u0275\u0275text(18, "Basic Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "label", 17);
      \u0275\u0275text(22, "Supplier Code *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 18);
      \u0275\u0275element(24, "input", 19);
      \u0275\u0275elementStart(25, "button", 20);
      \u0275\u0275listener("click", function AddSupplierModalComponent_Template_button_click_25_listener() {
        return ctx.generateSupplierCode();
      });
      \u0275\u0275text(26, "Generate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, AddSupplierModalComponent_div_27_Template, 2, 1, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 16)(29, "label", 22);
      \u0275\u0275text(30, "Business Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 23);
      \u0275\u0275template(32, AddSupplierModalComponent_div_32_Template, 2, 1, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 15)(34, "div", 16)(35, "label", 24);
      \u0275\u0275text(36, "Contact Person *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 25);
      \u0275\u0275template(38, AddSupplierModalComponent_div_38_Template, 2, 1, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 16)(40, "label", 26);
      \u0275\u0275text(41, "Tax Registration Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 10)(44, "div", 11)(45, "div", 28);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 6);
      \u0275\u0275element(47, "path", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "h3", 14);
      \u0275\u0275text(49, "Contact Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 15)(51, "div", 16)(52, "label", 30);
      \u0275\u0275text(53, "Email *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "input", 31);
      \u0275\u0275template(55, AddSupplierModalComponent_div_55_Template, 2, 1, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 16)(57, "label", 32);
      \u0275\u0275text(58, "Primary Phone *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "input", 33);
      \u0275\u0275template(60, AddSupplierModalComponent_div_60_Template, 2, 1, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 15)(62, "div", 16)(63, "label", 34);
      \u0275\u0275text(64, "Alternate Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 16)(67, "label", 36);
      \u0275\u0275text(68, "Website");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "input", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 10)(71, "div", 11)(72, "div", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(73, "svg", 6);
      \u0275\u0275element(74, "path", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(75, "h3", 14);
      \u0275\u0275text(76, "Address Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 15)(78, "div", 40)(79, "label", 41);
      \u0275\u0275text(80, "Street Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 42);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(82, "svg", 43);
      \u0275\u0275element(83, "path", 44)(84, "path", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(85, "input", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 15)(87, "div", 16)(88, "label", 47);
      \u0275\u0275text(89, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 16)(92, "label", 49);
      \u0275\u0275text(93, "State/Emirate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "select", 50)(95, "option", 51);
      \u0275\u0275text(96, "Select emirate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "option", 52);
      \u0275\u0275text(98, "Abu Dhabi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "option", 53);
      \u0275\u0275text(100, "Dubai");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "option", 54);
      \u0275\u0275text(102, "Sharjah");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "option", 55);
      \u0275\u0275text(104, "Ajman");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "option", 56);
      \u0275\u0275text(106, "Umm Al Quwain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "option", 57);
      \u0275\u0275text(108, "Ras Al Khaimah");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "option", 58);
      \u0275\u0275text(110, "Fujairah");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "div", 16)(112, "label", 59);
      \u0275\u0275text(113, "Postal Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "input", 60);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 10)(116, "div", 11)(117, "div", 61);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(118, "svg", 6);
      \u0275\u0275element(119, "path", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(120, "h3", 14);
      \u0275\u0275text(121, "Business Terms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 15)(123, "div", 16)(124, "label", 63);
      \u0275\u0275text(125, "Payment Terms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "select", 64)(127, "option", 65);
      \u0275\u0275text(128, "Net 30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "option", 66);
      \u0275\u0275text(130, "Net 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "option", 67);
      \u0275\u0275text(132, "Net 60");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "option", 68);
      \u0275\u0275text(134, "Net 90");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "option", 69);
      \u0275\u0275text(136, "Due on Receipt");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 16)(138, "label", 70);
      \u0275\u0275text(139, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "select", 71)(141, "option", 72);
      \u0275\u0275text(142, "AED - UAE Dirham");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "option", 73);
      \u0275\u0275text(144, "USD - US Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "option", 74);
      \u0275\u0275text(146, "EUR - Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "option", 75);
      \u0275\u0275text(148, "GBP - British Pound");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(149, "div", 15)(150, "div", 16)(151, "label", 76);
      \u0275\u0275text(152, "Credit Limit");
      \u0275\u0275elementEnd();
      \u0275\u0275element(153, "input", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 16)(155, "label", 78);
      \u0275\u0275text(156, "Delivery Lead Time (Days)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(157, "input", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "div", 10)(159, "div", 11)(160, "div", 80);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(161, "svg", 6);
      \u0275\u0275element(162, "path", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(163, "h3", 14);
      \u0275\u0275text(164, "Additional Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 15)(166, "div", 40)(167, "label", 82);
      \u0275\u0275text(168, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(169, "textarea", 83);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(170, AddSupplierModalComponent_div_170_Template, 3, 1, "div", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 85)(172, "button", 86);
      \u0275\u0275listener("click", function AddSupplierModalComponent_Template_button_click_172_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(173, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "button", 87);
      \u0275\u0275listener("click", function AddSupplierModalComponent_Template_button_click_174_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(175, AddSupplierModalComponent_span_175_Template, 2, 0, "span", 88)(176, AddSupplierModalComponent_span_176_Template, 2, 0, "span", 88);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.supplierForm);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngIf", ctx.getFieldError("supplier_code"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.getFieldError("name"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.getFieldError("contact_person"));
      \u0275\u0275advance(17);
      \u0275\u0275property("ngIf", ctx.getFieldError("email"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.getFieldError("phone"));
      \u0275\u0275advance(110);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.supplierForm.valid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ['\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  position: relative;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.modal-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  gap: 0.75rem;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n}\n.section-icon.basic[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n}\n.section-icon.contact[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n}\n.section-icon.address[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.section-icon.business[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #7c3aed);\n}\n.section-icon.notes[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n}\n.section-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-row[_ngcontent-%COMP%]   .form-field.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.field-label[_ngcontent-%COMP%]::after {\n  content: " *";\n  color: #ef4444;\n}\n.field-label[_ngcontent-%COMP%]:not(:has(+ .form-input[required]))::after {\n  content: "";\n}\n.form-input[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  padding: 0.75rem;\n  color: #111827;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input[_ngcontent-%COMP%]::placeholder, \n.form-select[_ngcontent-%COMP%]::placeholder, \n.form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-input[_ngcontent-%COMP%]:readonly, \n.form-select[_ngcontent-%COMP%]:readonly, \n.form-textarea[_ngcontent-%COMP%]:readonly {\n  background-color: #f9fafb;\n  color: #6b7280;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.input-with-button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.generate-btn[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: #ffffff;\n  border: none;\n  padding: 0.75rem 1rem;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.generate-btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.generate-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-icon[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #6b7280;\n}\n.input-with-icon[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  padding-left: 2.75rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.error-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 6px;\n}\n.error-section[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 100px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: #ffffff;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6b7280;\n  color: #ffffff;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #4b5563;\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0 1rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=add-supplier-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddSupplierModalComponent, [{
    type: Component,
    args: [{ selector: "app-add-supplier-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="modal-overlay" (click)="onCancel()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <h2 class="modal-title">Add New Supplier</h2>\r
      <p class="modal-subtitle">Create a new supplier for purchase orders</p>\r
      <button class="close-btn" (click)="onCancel()">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="modal-body">\r
      <form [formGroup]="supplierForm" (ngSubmit)="onSubmit()">\r
        <!-- Basic Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <div class="section-icon basic">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
              </svg>\r
            </div>\r
            <h3 class="section-title">Basic Information</h3>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="supplierCode" class="field-label">Supplier Code *</label>\r
              <div class="input-with-button">\r
                <input type="text" id="supplierCode" formControlName="supplier_code" class="form-input" placeholder="Enter supplier code">\r
                <button type="button" class="generate-btn" (click)="generateSupplierCode()">Generate</button>\r
              </div>\r
              <div class="error-message" *ngIf="getFieldError('supplier_code')">\r
                {{ getFieldError('supplier_code') }}\r
              </div>\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="businessName" class="field-label">Business Name *</label>\r
              <input type="text" id="businessName" formControlName="name" class="form-input" placeholder="Enter business name">\r
              <div class="error-message" *ngIf="getFieldError('name')">\r
                {{ getFieldError('name') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="contactPerson" class="field-label">Contact Person *</label>\r
              <input type="text" id="contactPerson" formControlName="contact_person" class="form-input" placeholder="Enter contact person name">\r
              <div class="error-message" *ngIf="getFieldError('contact_person')">\r
                {{ getFieldError('contact_person') }}\r
              </div>\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="taxRegistration" class="field-label">Tax Registration Number</label>\r
              <input type="text" id="taxRegistration" formControlName="tax_registration_number" class="form-input" placeholder="Enter tax registration number">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Contact Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <div class="section-icon contact">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\r
              </svg>\r
            </div>\r
            <h3 class="section-title">Contact Information</h3>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="email" class="field-label">Email *</label>\r
              <input type="email" id="email" formControlName="email" class="form-input" placeholder="Enter email address">\r
              <div class="error-message" *ngIf="getFieldError('email')">\r
                {{ getFieldError('email') }}\r
              </div>\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="primaryPhone" class="field-label">Primary Phone *</label>\r
              <input type="tel" id="primaryPhone" formControlName="phone" class="form-input" placeholder="Enter primary phone">\r
              <div class="error-message" *ngIf="getFieldError('phone')">\r
                {{ getFieldError('phone') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="alternatePhone" class="field-label">Alternate Phone</label>\r
              <input type="tel" id="alternatePhone" formControlName="alternate_phone" class="form-input" placeholder="Enter alternate phone">\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="website" class="field-label">Website</label>\r
              <input type="url" id="website" formControlName="website" class="form-input" placeholder="Enter website URL">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Address Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <div class="section-icon address">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
              </svg>\r
            </div>\r
            <h3 class="section-title">Address Information</h3>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-field full-width">\r
              <label for="streetAddress" class="field-label">Street Address</label>\r
              <div class="input-with-icon">\r
                <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                </svg>\r
                <input type="text" id="streetAddress" formControlName="street_address" class="form-input" placeholder="Enter supplier address">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="city" class="field-label">City</label>\r
              <input type="text" id="city" formControlName="city" class="form-input" placeholder="Enter city">\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="state" class="field-label">State/Emirate</label>\r
              <select id="state" formControlName="state" class="form-select">\r
                <option value="">Select emirate</option>\r
                <option value="Abu Dhabi">Abu Dhabi</option>\r
                <option value="Dubai">Dubai</option>\r
                <option value="Sharjah">Sharjah</option>\r
                <option value="Ajman">Ajman</option>\r
                <option value="Umm Al Quwain">Umm Al Quwain</option>\r
                <option value="Ras Al Khaimah">Ras Al Khaimah</option>\r
                <option value="Fujairah">Fujairah</option>\r
              </select>\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="postalCode" class="field-label">Postal Code</label>\r
              <input type="text" id="postalCode" formControlName="postal_code" class="form-input" placeholder="Enter postal code">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Business Terms -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <div class="section-icon business">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
              </svg>\r
            </div>\r
            <h3 class="section-title">Business Terms</h3>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="paymentTerms" class="field-label">Payment Terms</label>\r
              <select id="paymentTerms" formControlName="payment_terms" class="form-select">\r
                <option value="Net 30">Net 30</option>\r
                <option value="Net 45">Net 45</option>\r
                <option value="Net 60">Net 60</option>\r
                <option value="Net 90">Net 90</option>\r
                <option value="Due on Receipt">Due on Receipt</option>\r
              </select>\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="currency" class="field-label">Currency</label>\r
              <select id="currency" formControlName="currency" class="form-select">\r
                <option value="AED">AED - UAE Dirham</option>\r
                <option value="USD">USD - US Dollar</option>\r
                <option value="EUR">EUR - Euro</option>\r
                <option value="GBP">GBP - British Pound</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="creditLimit" class="field-label">Credit Limit</label>\r
              <input type="number" id="creditLimit" formControlName="credit_limit" class="form-input" min="0" step="0.01" placeholder="Enter credit limit">\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="deliveryLeadTime" class="field-label">Delivery Lead Time (Days)</label>\r
              <input type="number" id="deliveryLeadTime" formControlName="delivery_lead_time" class="form-input" min="1" placeholder="Enter lead time">\r
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
                        placeholder="Additional notes about this supplier..."></textarea>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Error Message -->\r
        <div class="error-section" *ngIf="error">\r
          <div class="error-message">{{ error }}</div>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Modal Footer -->\r
    <div class="modal-footer">\r
      <button type="button" class="btn btn-secondary" (click)="onCancel()">\r
        Cancel\r
      </button>\r
      <button type="submit" class="btn btn-primary" (click)="onSubmit()" [disabled]="!supplierForm.valid || loading">\r
        <span *ngIf="!loading">Create Supplier</span>\r
        <span *ngIf="loading">Creating...</span>\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/inventory/components/add-supplier-modal/add-supplier-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container {\n  background: #ffffff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n.modal-header {\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  position: relative;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.modal-subtitle {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.close-btn {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.close-btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.form-section {\n  margin-bottom: 2rem;\n}\n.form-section:last-child {\n  margin-bottom: 0;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  gap: 0.75rem;\n}\n.section-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n}\n.section-icon.basic {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n}\n.section-icon.contact {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n}\n.section-icon.address {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.section-icon.business {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #7c3aed);\n}\n.section-icon.notes {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n}\n.section-icon svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.form-row:last-child {\n  margin-bottom: 0;\n}\n.form-row .form-field.full-width {\n  grid-column: 1/-1;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n}\n.field-label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.field-label::after {\n  content: " *";\n  color: #ef4444;\n}\n.field-label:not(:has(+ .form-input[required]))::after {\n  content: "";\n}\n.form-input,\n.form-select,\n.form-textarea {\n  background-color: #ffffff;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  padding: 0.75rem;\n  color: #111827;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n}\n.form-input:focus,\n.form-select:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input::placeholder,\n.form-select::placeholder,\n.form-textarea::placeholder {\n  color: #9ca3af;\n}\n.form-input:readonly,\n.form-select:readonly,\n.form-textarea:readonly {\n  background-color: #f9fafb;\n  color: #6b7280;\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.input-with-button {\n  display: flex;\n  gap: 0.5rem;\n}\n.generate-btn {\n  background-color: #3b82f6;\n  color: #ffffff;\n  border: none;\n  padding: 0.75rem 1rem;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.generate-btn:hover {\n  background-color: #2563eb;\n}\n.generate-btn:active {\n  transform: translateY(1px);\n}\n.input-with-icon {\n  position: relative;\n}\n.input-with-icon .input-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #6b7280;\n}\n.input-with-icon .form-input {\n  padding-left: 2.75rem;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.error-section {\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 6px;\n}\n.error-section .error-message {\n  color: #ef4444;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.modal-footer {\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 100px;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background-color: #3b82f6;\n  color: #ffffff;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.btn-secondary {\n  background-color: #6b7280;\n  color: #ffffff;\n}\n.btn.btn-secondary:hover:not(:disabled) {\n  background-color: #4b5563;\n}\n@media (max-width: 768px) {\n  .modal-container {\n    max-width: 100%;\n    margin: 0 1rem;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .modal-header {\n    padding: 1rem;\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-footer {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .modal-footer .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=add-supplier-modal.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: InventoryAnalyticsService }], { closeModal: [{
    type: Output
  }], supplierCreated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddSupplierModalComponent, { className: "AddSupplierModalComponent", filePath: "src/app/inventory/components/add-supplier-modal/add-supplier-modal.component.ts", lineNumber: 13 });
})();

// src/app/inventory/components/create-purchase-order-modal/create-purchase-order-modal.component.ts
function CreatePurchaseOrderModalComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r1 = ctx.$implicit;
    \u0275\u0275property("value", supplier_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", supplier_r1.name, " - ", supplier_r1.contact_person, " ");
  }
}
function CreatePurchaseOrderModalComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("vendor_name"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("vendor_contact"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("order_date"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("expected_date"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_77_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_div_77_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const i_r4 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeItem(i_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 70);
    \u0275\u0275element(2, "path", 71);
    \u0275\u0275elementEnd()();
  }
}
function CreatePurchaseOrderModalComponent_div_77_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r5 = ctx.$implicit;
    \u0275\u0275property("value", part_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", part_r5.name, " (", part_r5.part_number, ") ");
  }
}
function CreatePurchaseOrderModalComponent_div_77_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getArrayFieldError("items", i_r4, "part_number"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_77_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getArrayFieldError("items", i_r4, "description"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_77_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getArrayFieldError("items", i_r4, "qty"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_77_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getArrayFieldError("items", i_r4, "unit_cost"), " ");
  }
}
function CreatePurchaseOrderModalComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "h4", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreatePurchaseOrderModalComponent_div_77_button_4_Template, 3, 0, "button", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "div", 15)(7, "label", 61);
    \u0275\u0275text(8, "Part (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 62)(10, "option", 19);
    \u0275\u0275text(11, "Select a part");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CreatePurchaseOrderModalComponent_div_77_option_12_Template, 2, 3, "option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "label", 61);
    \u0275\u0275text(15, "Part Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 63);
    \u0275\u0275template(17, CreatePurchaseOrderModalComponent_div_77_div_17_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14)(19, "div", 35)(20, "label", 61);
    \u0275\u0275text(21, "Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 64);
    \u0275\u0275template(23, CreatePurchaseOrderModalComponent_div_77_div_23_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "div", 15)(26, "label", 61);
    \u0275\u0275text(27, "Quantity *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 65);
    \u0275\u0275template(29, CreatePurchaseOrderModalComponent_div_77_div_29_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 15)(31, "label", 61);
    \u0275\u0275text(32, "Unit Cost *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 66);
    \u0275\u0275template(34, CreatePurchaseOrderModalComponent_div_77_div_34_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 15)(36, "label", 67);
    \u0275\u0275text(37, "Line Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 68);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "currency");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Item ", i_r4 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.itemsArray.length > 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", "part_" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "part_" + i_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.parts);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", "partNumber_" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "partNumber_" + i_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getArrayFieldError("items", i_r4, "part_number"));
    \u0275\u0275advance(3);
    \u0275\u0275property("for", "description_" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "description_" + i_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getArrayFieldError("items", i_r4, "description"));
    \u0275\u0275advance(3);
    \u0275\u0275property("for", "qty_" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "qty_" + i_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getArrayFieldError("items", i_r4, "qty"));
    \u0275\u0275advance(2);
    \u0275\u0275property("for", "cost_" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "cost_" + i_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getArrayFieldError("items", i_r4, "unit_cost"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 19, ctx_r1.calculateItemTotal(i_r4), "AED"));
  }
}
function CreatePurchaseOrderModalComponent_app_add_supplier_modal_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-add-supplier-modal", 72);
    \u0275\u0275listener("closeModal", function CreatePurchaseOrderModalComponent_app_add_supplier_modal_114_Template_app_add_supplier_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddSupplierModal());
    })("supplierCreated", function CreatePurchaseOrderModalComponent_app_add_supplier_modal_114_Template_app_add_supplier_modal_supplierCreated_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSupplierCreated($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CreatePurchaseOrderModalComponent = class _CreatePurchaseOrderModalComponent {
  fb;
  inventoryService;
  closeModal = new EventEmitter();
  createPurchaseOrder = new EventEmitter();
  poForm;
  loading = false;
  error = null;
  // Data for dropdowns
  suppliers = [];
  parts = [];
  // Add Supplier Modal
  showAddSupplierModal = false;
  constructor(fb, inventoryService) {
    this.fb = fb;
    this.inventoryService = inventoryService;
    this.poForm = this.fb.group({
      supplier_id: [""],
      vendor_name: ["", [Validators.required]],
      vendor_contact: ["", [Validators.required]],
      order_date: ["", [Validators.required]],
      expected_date: ["", [Validators.required]],
      tax_rate: [0],
      terms: [""],
      notes: [""],
      items: this.fb.array([])
    });
  }
  ngOnInit() {
    this.loadSuppliers();
    this.loadParts();
    this.addItem();
  }
  loadSuppliers() {
    this.inventoryService.getSuppliers("", 1e3, 1).subscribe({
      next: (response) => {
        if (response.success) {
          this.suppliers = response.data.data;
        }
      },
      error: (err) => {
        console.error("Error loading suppliers:", err);
        this.suppliers = [
          { id: 1, company_id: 1, supplier_code: "SUP001", name: "Supplier A", contact_person: "John Doe", email: "john@suppliera.com", phone: "+1234567890", currency: "USD", created_at: "", updated_at: "" },
          { id: 2, company_id: 1, supplier_code: "SUP002", name: "Supplier B", contact_person: "Jane Smith", email: "jane@supplierb.com", phone: "+1234567891", currency: "USD", created_at: "", updated_at: "" },
          { id: 3, company_id: 1, supplier_code: "SUP003", name: "Supplier C", contact_person: "Bob Johnson", email: "bob@supplierc.com", phone: "+1234567892", currency: "USD", created_at: "", updated_at: "" }
        ];
      }
    });
  }
  loadParts() {
    this.inventoryService.getPartsCatalog("", "active", 1, 1e3).subscribe({
      next: (response) => {
        if (response.success) {
          this.parts = response.data.data;
        }
      },
      error: (err) => {
        console.error("Error loading parts:", err);
      }
    });
  }
  get itemsArray() {
    return this.poForm.get("items");
  }
  addItem() {
    const itemGroup = this.fb.group({
      part_id: [""],
      part_number: ["", [Validators.required]],
      description: ["", [Validators.required]],
      qty: ["", [Validators.required, Validators.min(1)]],
      unit_cost: ["", [Validators.required, Validators.min(0.01)]]
    });
    this.itemsArray.push(itemGroup);
  }
  removeItem(index) {
    if (this.itemsArray.length > 1) {
      this.itemsArray.removeAt(index);
    }
  }
  getItemPartName(partId) {
    const part = this.parts.find((p) => p.id === partId);
    return part ? part.name : "Unknown Part";
  }
  calculateItemTotal(index) {
    const item = this.itemsArray.at(index);
    const qty = item.get("qty")?.value || 0;
    const cost = item.get("unit_cost")?.value || 0;
    return qty * cost;
  }
  calculateTotal() {
    const subtotal = this.itemsArray.controls.reduce((total, item) => {
      return total + this.calculateItemTotal(this.itemsArray.controls.indexOf(item));
    }, 0);
    const taxRate = this.poForm.get("tax_rate")?.value || 0;
    const tax = subtotal * (taxRate / 100);
    return subtotal + tax;
  }
  calculateSubtotal() {
    return this.itemsArray.controls.reduce((total, item) => {
      return total + this.calculateItemTotal(this.itemsArray.controls.indexOf(item));
    }, 0);
  }
  calculateTax() {
    const subtotal = this.calculateSubtotal();
    const taxRate = this.poForm.get("tax_rate")?.value || 0;
    return subtotal * (taxRate / 100);
  }
  onSubmit() {
    if (this.poForm.valid) {
      this.loading = true;
      this.error = null;
      const formData = this.poForm.value;
      const poData = {
        supplier_id: formData.supplier_id || void 0,
        vendor_name: formData.vendor_name,
        vendor_contact: formData.vendor_contact,
        order_date: formData.order_date,
        expected_date: formData.expected_date,
        tax_rate: formData.tax_rate,
        terms: formData.terms,
        notes: formData.notes,
        items: formData.items.map((item) => ({
          part_id: item.part_id || void 0,
          part_number: item.part_number,
          description: item.description,
          qty: item.qty,
          unit_cost: item.unit_cost
        }))
      };
      this.inventoryService.createPurchaseOrder(poData).subscribe({
        next: (response) => {
          this.loading = false;
          if (response.success) {
            this.createPurchaseOrder.emit(poData);
            this.closeModal.emit();
          } else {
            this.error = "Failed to create purchase order";
          }
        },
        error: (err) => {
          this.loading = false;
          this.error = "Error creating purchase order: " + (err.error?.message || err.message);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.poForm.controls).forEach((key) => {
      const control = this.poForm.get(key);
      control?.markAsTouched();
    });
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
      if (field.errors["min"]) {
        return `Minimum value is ${field.errors["min"].min}`;
      }
    }
    return "";
  }
  getArrayFieldError(arrayName, index, fieldName) {
    const field = this.itemsArray.at(index).get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return "This field is required";
      }
      if (field.errors["min"]) {
        return `Minimum value is ${field.errors["min"].min}`;
      }
    }
    return "";
  }
  getSelectedSupplierName() {
    const supplierId = this.poForm.get("supplier_id")?.value;
    const supplier = this.suppliers.find((s) => s.id === supplierId);
    return supplier ? supplier.name : "";
  }
  openAddSupplierModal() {
    this.showAddSupplierModal = true;
  }
  closeAddSupplierModal() {
    this.showAddSupplierModal = false;
  }
  onSupplierCreated(supplier) {
    this.suppliers.push(supplier);
    this.poForm.patchValue({ supplier_id: supplier.id });
    this.closeAddSupplierModal();
  }
  static \u0275fac = function CreatePurchaseOrderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreatePurchaseOrderModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePurchaseOrderModalComponent, selectors: [["app-create-purchase-order-modal"]], outputs: { closeModal: "closeModal", createPurchaseOrder: "createPurchaseOrder" }, decls: 115, vars: 22, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "section-icon", "supplier"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "section-title"], [1, "form-row"], [1, "form-field"], ["for", "supplier", 1, "field-label"], [1, "supplier-selection"], ["id", "supplier", "formControlName", "supplier_id", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline", 3, "click"], ["for", "vendorName", 1, "field-label"], ["type", "text", "id", "vendorName", "formControlName", "vendor_name", "placeholder", "Enter vendor name", 1, "form-input"], ["class", "error-message", 4, "ngIf"], ["for", "vendorContact", 1, "field-label"], ["type", "text", "id", "vendorContact", "formControlName", "vendor_contact", "placeholder", "Enter vendor contact information", 1, "form-input"], [1, "section-icon", "order"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["for", "orderDate", 1, "field-label"], ["type", "date", "id", "orderDate", "formControlName", "order_date", 1, "form-input"], ["for", "expectedDelivery", 1, "field-label"], ["type", "date", "id", "expectedDelivery", "formControlName", "expected_date", 1, "form-input"], ["for", "taxRate", 1, "field-label"], ["type", "number", "id", "taxRate", "formControlName", "tax_rate", "min", "0", "max", "100", "step", "0.01", "placeholder", "0.00", 1, "form-input"], [1, "form-field", "full-width"], ["for", "terms", 1, "field-label"], ["id", "terms", "formControlName", "terms", "rows", "2", "placeholder", "Enter payment terms and conditions...", 1, "form-textarea"], [1, "section-icon", "items"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], ["formArrayName", "items", 1, "items-container"], ["class", "item-row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "total-section"], [1, "total-row"], [1, "total-label"], [1, "total-value"], [1, "total-row", "total-final"], [1, "section-icon", "notes"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["for", "notes", 1, "field-label"], ["id", "notes", "formControlName", "notes", "rows", "3", "placeholder", "Add any additional notes or special instructions...", 1, "form-textarea"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [3, "closeModal", "supplierCreated", 4, "ngIf"], [3, "value"], [1, "error-message"], [1, "item-row", 3, "formGroupName"], [1, "item-header"], [1, "item-title"], ["type", "button", "class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], [1, "field-label", 3, "for"], ["formControlName", "part_id", 1, "form-select", 3, "id"], ["type", "text", "formControlName", "part_number", "placeholder", "Enter part number", 1, "form-input", 3, "id"], ["type", "text", "formControlName", "description", "placeholder", "Enter item description", 1, "form-input", 3, "id"], ["type", "number", "formControlName", "qty", "min", "1", 1, "form-input", 3, "id"], ["type", "number", "formControlName", "unit_cost", "min", "0.01", "step", "0.01", 1, "form-input", 3, "id"], [1, "field-label"], [1, "line-total"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [3, "closeModal", "supplierCreated"]], template: function CreatePurchaseOrderModalComponent_Template(rf, ctx) {
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
      \u0275\u0275text(20, "Supplier (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 17)(22, "select", 18)(23, "option", 19);
      \u0275\u0275text(24, "Select a supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, CreatePurchaseOrderModalComponent_option_25_Template, 2, 3, "option", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 21);
      \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_Template_button_click_26_listener() {
        return ctx.openAddSupplierModal();
      });
      \u0275\u0275text(27, " New Supplier ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 14)(29, "div", 15)(30, "label", 22);
      \u0275\u0275text(31, "Vendor Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 23);
      \u0275\u0275template(33, CreatePurchaseOrderModalComponent_div_33_Template, 2, 1, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 15)(35, "label", 25);
      \u0275\u0275text(36, "Vendor Contact *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 26);
      \u0275\u0275template(38, CreatePurchaseOrderModalComponent_div_38_Template, 2, 1, "div", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 9)(40, "div", 10)(41, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 5);
      \u0275\u0275element(43, "path", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(44, "h3", 13);
      \u0275\u0275text(45, "Order Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 14)(47, "div", 15)(48, "label", 29);
      \u0275\u0275text(49, "Order Date *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 30);
      \u0275\u0275template(51, CreatePurchaseOrderModalComponent_div_51_Template, 2, 1, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 15)(53, "label", 31);
      \u0275\u0275text(54, "Expected Delivery *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "input", 32);
      \u0275\u0275template(56, CreatePurchaseOrderModalComponent_div_56_Template, 2, 1, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 14)(58, "div", 15)(59, "label", 33);
      \u0275\u0275text(60, "Tax Rate (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 14)(63, "div", 35)(64, "label", 36);
      \u0275\u0275text(65, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "textarea", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 9)(68, "div", 10)(69, "div", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(70, "svg", 5);
      \u0275\u0275element(71, "path", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(72, "h3", 13);
      \u0275\u0275text(73, "Order Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 21);
      \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_Template_button_click_74_listener() {
        return ctx.addItem();
      });
      \u0275\u0275text(75, " Add Item ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 40);
      \u0275\u0275template(77, CreatePurchaseOrderModalComponent_div_77_Template, 41, 22, "div", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 42)(79, "div", 43)(80, "div", 44);
      \u0275\u0275text(81, "Subtotal:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 45);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 43)(86, "div", 44);
      \u0275\u0275text(87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 45);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "currency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 46)(92, "div", 44);
      \u0275\u0275text(93, "Total Order Value:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 45);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "currency");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "div", 9)(98, "div", 10)(99, "div", 47);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(100, "svg", 5);
      \u0275\u0275element(101, "path", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(102, "h3", 13);
      \u0275\u0275text(103, "Additional Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 14)(105, "div", 35)(106, "label", 49);
      \u0275\u0275text(107, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(108, "textarea", 50);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(109, "div", 51)(110, "button", 52);
      \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_Template_button_click_110_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(111, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "button", 53);
      \u0275\u0275listener("click", function CreatePurchaseOrderModalComponent_Template_button_click_112_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(113, " Create Purchase Order ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(114, CreatePurchaseOrderModalComponent_app_add_supplier_modal_114_Template, 1, 0, "app-add-supplier-modal", 54);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.poForm);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.suppliers);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.getFieldError("vendor_name"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.getFieldError("vendor_contact"));
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.getFieldError("order_date"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.getFieldError("expected_date"));
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.itemsArray.controls);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 13, ctx.calculateSubtotal(), "AED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Tax (", ((tmp_8_0 = ctx.poForm.get("tax_rate")) == null ? null : tmp_8_0.value) || 0, "%):");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 16, ctx.calculateTax(), "AED"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 19, ctx.calculateTotal(), "AED"));
      \u0275\u0275advance(17);
      \u0275\u0275property("disabled", !ctx.poForm.valid);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showAddSupplierModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, AddSupplierModalComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 0.75rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon.supplier[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon.order[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #16a34a;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon.notes[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon.items[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #7c3aed;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n  flex-grow: 1;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-field.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  min-height: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  background-color: #f9fafb;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n  border-color: #fca5a5;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 0.75rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .line-total[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  color: #111827;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .total-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .total-section[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .total-section[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .total-section[_ngcontent-%COMP%]   .total-row.total-final[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #1e293b;\n  border-top: 2px solid #3b82f6;\n  padding-top: 0.75rem;\n  margin-top: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .total-section[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n}\n.modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .total-section[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n}\n.supplier-selection[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-end;\n}\n.supplier-selection[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.supplier-selection[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  border: 1px solid #3b82f6;\n  background-color: #3b82f6;\n  color: #ffffff;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.supplier-selection[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  border-color: #2563eb;\n  color: #ffffff;\n}\n.supplier-selection[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%] {\n  border: 1px solid #3b82f6;\n  background-color: #3b82f6;\n  color: #ffffff;\n}\n.supplier-selection[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  border-color: #2563eb;\n  color: #ffffff;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem 1rem 0.75rem 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem 1rem 1rem;\n  }\n}\n/*# sourceMappingURL=create-purchase-order-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatePurchaseOrderModalComponent, [{
    type: Component,
    args: [{ selector: "app-create-purchase-order-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule, AddSupplierModalComponent], template: `<div class="modal-overlay" (click)="onCancel()">\r
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
              <label for="supplier" class="field-label">Supplier (Optional)</label>\r
              <div class="supplier-selection">\r
                <select id="supplier" formControlName="supplier_id" class="form-select">\r
                  <option value="">Select a supplier</option>\r
                  <option *ngFor="let supplier of suppliers" [value]="supplier.id">\r
                    {{ supplier.name }} - {{ supplier.contact_person }}\r
                  </option>\r
                </select>\r
                <button type="button" class="btn btn-sm btn-outline" (click)="openAddSupplierModal()">\r
                  New Supplier\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="vendorName" class="field-label">Vendor Name *</label>\r
              <input type="text" id="vendorName" formControlName="vendor_name" class="form-input" placeholder="Enter vendor name">\r
              <div class="error-message" *ngIf="getFieldError('vendor_name')">\r
                {{ getFieldError('vendor_name') }}\r
              </div>\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="vendorContact" class="field-label">Vendor Contact *</label>\r
              <input type="text" id="vendorContact" formControlName="vendor_contact" class="form-input" placeholder="Enter vendor contact information">\r
              <div class="error-message" *ngIf="getFieldError('vendor_contact')">\r
                {{ getFieldError('vendor_contact') }}\r
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
              <input type="date" id="orderDate" formControlName="order_date" class="form-input">\r
              <div class="error-message" *ngIf="getFieldError('order_date')">\r
                {{ getFieldError('order_date') }}\r
              </div>\r
            </div>\r
            \r
            <div class="form-field">\r
              <label for="expectedDelivery" class="field-label">Expected Delivery *</label>\r
              <input type="date" id="expectedDelivery" formControlName="expected_date" class="form-input">\r
              <div class="error-message" *ngIf="getFieldError('expected_date')">\r
                {{ getFieldError('expected_date') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="taxRate" class="field-label">Tax Rate (%)</label>\r
              <input type="number" id="taxRate" formControlName="tax_rate" class="form-input" min="0" max="100" step="0.01" placeholder="0.00">\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-field full-width">\r
              <label for="terms" class="field-label">Terms & Conditions</label>\r
              <textarea id="terms" formControlName="terms" rows="2" class="form-textarea" \r
                        placeholder="Enter payment terms and conditions..."></textarea>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Order Items -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <div class="section-icon items">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>\r
              </svg>\r
            </div>\r
            <h3 class="section-title">Order Items</h3>\r
            <button type="button" class="btn btn-sm btn-outline" (click)="addItem()">\r
              Add Item\r
            </button>\r
          </div>\r
          \r
          <div formArrayName="items" class="items-container">\r
            <div *ngFor="let item of itemsArray.controls; let i = index" [formGroupName]="i" class="item-row">\r
              <div class="item-header">\r
                <h4 class="item-title">Item {{ i + 1 }}</h4>\r
                <button \r
                  type="button" \r
                  class="btn btn-sm btn-danger" \r
                  (click)="removeItem(i)"\r
                  *ngIf="itemsArray.length > 1">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                  </svg>\r
                </button>\r
              </div>\r
              \r
              <div class="form-row">\r
                <div class="form-field">\r
                  <label [for]="'part_' + i" class="field-label">Part (Optional)</label>\r
                  <select [id]="'part_' + i" formControlName="part_id" class="form-select">\r
                    <option value="">Select a part</option>\r
                    <option *ngFor="let part of parts" [value]="part.id">\r
                      {{ part.name }} ({{ part.part_number }})\r
                    </option>\r
                  </select>\r
                </div>\r
                \r
                <div class="form-field">\r
                  <label [for]="'partNumber_' + i" class="field-label">Part Number *</label>\r
                  <input type="text" [id]="'partNumber_' + i" formControlName="part_number" class="form-input" placeholder="Enter part number">\r
                  <div class="error-message" *ngIf="getArrayFieldError('items', i, 'part_number')">\r
                    {{ getArrayFieldError('items', i, 'part_number') }}\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="form-row">\r
                <div class="form-field full-width">\r
                  <label [for]="'description_' + i" class="field-label">Description *</label>\r
                  <input type="text" [id]="'description_' + i" formControlName="description" class="form-input" placeholder="Enter item description">\r
                  <div class="error-message" *ngIf="getArrayFieldError('items', i, 'description')">\r
                    {{ getArrayFieldError('items', i, 'description') }}\r
                  </div>\r
                </div>\r
              </div>\r
              \r
              <div class="form-row">\r
                <div class="form-field">\r
                  <label [for]="'qty_' + i" class="field-label">Quantity *</label>\r
                  <input \r
                    type="number" \r
                    [id]="'qty_' + i" \r
                    formControlName="qty" \r
                    class="form-input"\r
                    min="1">\r
                  <div class="error-message" *ngIf="getArrayFieldError('items', i, 'qty')">\r
                    {{ getArrayFieldError('items', i, 'qty') }}\r
                  </div>\r
                </div>\r
                \r
                <div class="form-field">\r
                  <label [for]="'cost_' + i" class="field-label">Unit Cost *</label>\r
                  <input \r
                    type="number" \r
                    [id]="'cost_' + i" \r
                    formControlName="unit_cost" \r
                    class="form-input"\r
                    min="0.01"\r
                    step="0.01">\r
                  <div class="error-message" *ngIf="getArrayFieldError('items', i, 'unit_cost')">\r
                    {{ getArrayFieldError('items', i, 'unit_cost') }}\r
                  </div>\r
                </div>\r
                \r
                <div class="form-field">\r
                  <label class="field-label">Line Total</label>\r
                  <div class="line-total">{{ calculateItemTotal(i) | currency:'AED' }}</div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="total-section">\r
            <div class="total-row">\r
              <div class="total-label">Subtotal:</div>\r
              <div class="total-value">{{ calculateSubtotal() | currency:'AED' }}</div>\r
            </div>\r
            <div class="total-row">\r
              <div class="total-label">Tax ({{ poForm.get('tax_rate')?.value || 0 }}%):</div>\r
              <div class="total-value">{{ calculateTax() | currency:'AED' }}</div>\r
            </div>\r
            <div class="total-row total-final">\r
              <div class="total-label">Total Order Value:</div>\r
              <div class="total-value">{{ calculateTotal() | currency:'AED' }}</div>\r
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
\r
  <!-- Add Supplier Modal -->\r
  <app-add-supplier-modal \r
    *ngIf="showAddSupplierModal"\r
    (closeModal)="closeAddSupplierModal()"\r
    (supplierCreated)="onSupplierCreated($event)">\r
  </app-add-supplier-modal>\r
</div>\r
`, styles: ["/* src/app/inventory/components/create-purchase-order-modal/create-purchase-order-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header .modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header .close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.modal-header .close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header .close-btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-body .form-section {\n  margin-bottom: 2rem;\n}\n.modal-body .form-section:last-child {\n  margin-bottom: 0;\n}\n.modal-body .form-section .section-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  gap: 0.75rem;\n}\n.modal-body .form-section .section-header .section-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body .form-section .section-header .section-icon.supplier {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.modal-body .form-section .section-header .section-icon.order {\n  background-color: #dcfce7;\n  color: #16a34a;\n}\n.modal-body .form-section .section-header .section-icon.notes {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.modal-body .form-section .section-header .section-icon.items {\n  background-color: #e0e7ff;\n  color: #7c3aed;\n}\n.modal-body .form-section .section-header .section-icon svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body .form-section .section-header .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n  flex-grow: 1;\n}\n.modal-body .form-section .section-header .btn {\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n}\n.modal-body .form-section .section-header .btn:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-body .form-section .section-header .btn svg {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.5rem;\n}\n.modal-body .form-section .form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-body .form-section .form-row:last-child {\n  margin-bottom: 0;\n}\n.modal-body .form-section .form-row .form-field.full-width {\n  grid-column: 1/-1;\n}\n.modal-body .form-section .form-field .field-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-body .form-section .form-field .form-input,\n.modal-body .form-section .form-field .form-select,\n.modal-body .form-section .form-field .form-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.modal-body .form-section .form-field .form-input:focus,\n.modal-body .form-section .form-field .form-select:focus,\n.modal-body .form-section .form-field .form-textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-body .form-section .form-field .form-input.ng-invalid.ng-touched,\n.modal-body .form-section .form-field .form-select.ng-invalid.ng-touched,\n.modal-body .form-section .form-field .form-textarea.ng-invalid.ng-touched {\n  border-color: #ef4444;\n}\n.modal-body .form-section .form-field .form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.modal-body .form-section .form-field .error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  min-height: 1rem;\n}\n.modal-body .form-section .items-container .item-row {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  background-color: #f9fafb;\n}\n.modal-body .form-section .items-container .item-row:last-child {\n  margin-bottom: 0;\n}\n.modal-body .form-section .items-container .item-row .item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.modal-body .form-section .items-container .item-row .item-header .item-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.modal-body .form-section .items-container .item-row .item-header .btn-danger {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.modal-body .form-section .items-container .item-row .item-header .btn-danger:hover {\n  background-color: #fee2e2;\n  border-color: #fca5a5;\n}\n.modal-body .form-section .items-container .item-row .form-row {\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 0.75rem;\n}\n.modal-body .form-section .items-container .item-row .form-row .line-total {\n  padding: 0.75rem;\n  background-color: #f3f4f6;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  color: #111827;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body .form-section .total-section {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.modal-body .form-section .total-section .total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-body .form-section .total-section .total-row:last-child {\n  border-bottom: none;\n}\n.modal-body .form-section .total-section .total-row.total-final {\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #1e293b;\n  border-top: 2px solid #3b82f6;\n  padding-top: 0.75rem;\n  margin-top: 0.5rem;\n}\n.modal-body .form-section .total-section .total-label {\n  font-weight: 500;\n  color: #475569;\n}\n.modal-body .form-section .total-section .total-value {\n  font-weight: 600;\n  color: #1e293b;\n}\n.supplier-selection {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-end;\n}\n.supplier-selection .form-select {\n  flex: 1;\n}\n.supplier-selection .btn {\n  white-space: nowrap;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  border: 1px solid #3b82f6;\n  background-color: #3b82f6;\n  color: #ffffff;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.supplier-selection .btn:hover {\n  background-color: #2563eb;\n  border-color: #2563eb;\n  color: #ffffff;\n}\n.supplier-selection .btn.btn-outline {\n  border: 1px solid #3b82f6;\n  background-color: #3b82f6;\n  color: #ffffff;\n}\n.supplier-selection .btn.btn-outline:hover {\n  background-color: #2563eb;\n  border-color: #2563eb;\n  color: #ffffff;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-footer .btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.modal-footer .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-footer .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer .btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.modal-footer .btn.btn-primary:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .modal-container {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-body .form-section .form-row {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-body .form-section .items-container .item-row .form-row {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .modal-footer .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .modal-header {\n    padding: 1rem 1rem 0.75rem 1rem;\n  }\n  .modal-header .modal-title {\n    font-size: 1.125rem;\n  }\n  .modal-body {\n    padding: 0.75rem;\n  }\n  .modal-footer {\n    padding: 0.75rem 1rem 1rem 1rem;\n  }\n}\n/*# sourceMappingURL=create-purchase-order-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: InventoryAnalyticsService }], { closeModal: [{
    type: Output
  }], createPurchaseOrder: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePurchaseOrderModalComponent, { className: "CreatePurchaseOrderModalComponent", filePath: "src/app/inventory/components/create-purchase-order-modal/create-purchase-order-modal.component.ts", lineNumber: 14 });
})();

// src/app/inventory/components/view-purchase-order-modal/view-purchase-order-modal.component.ts
var _c0 = () => [];
function ViewPurchaseOrderModalComponent_div_76_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r1 == null ? null : item_r1.part == null ? null : item_r1.part.name) || (item_r1 == null ? null : item_r1.part_number) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r1 == null ? null : item_r1.part_number) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r1 == null ? null : item_r1.description) || "No description");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r1 == null ? null : item_r1.ordered_qty) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r1 == null ? null : item_r1.unit_cost));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(((item_r1 == null ? null : item_r1.ordered_qty) || 0) * ((item_r1 == null ? null : item_r1.unit_cost) || 0)));
  }
}
function ViewPurchaseOrderModalComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "table", 35)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Part Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Unit Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ViewPurchaseOrderModalComponent_div_76_tr_17_Template, 13, 6, "tr", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", (ctx_r1.purchaseOrder == null ? null : ctx_r1.purchaseOrder.items) || \u0275\u0275pureFunction0(1, _c0));
  }
}
function ViewPurchaseOrderModalComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 44);
    \u0275\u0275element(2, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No items in this purchase order");
    \u0275\u0275elementEnd()();
  }
}
function ViewPurchaseOrderModalComponent_button_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ViewPurchaseOrderModalComponent_button_106_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Edit Purchase Order ");
    \u0275\u0275elementEnd();
  }
}
var ViewPurchaseOrderModalComponent = class _ViewPurchaseOrderModalComponent {
  purchaseOrder = null;
  closeModal = new EventEmitter();
  purchaseOrderUpdated = new EventEmitter();
  // Safe getters for template use
  get hasItems() {
    return !!(this.purchaseOrder?.items && this.purchaseOrder.items.length > 0);
  }
  get itemsCount() {
    return this.purchaseOrder?.items?.length || 0;
  }
  getStatusClass(status) {
    switch (status) {
      case "draft":
        return "status-draft";
      case "pending":
        return "status-pending";
      case "approved":
        return "status-approved";
      case "ordered":
        return "status-ordered";
      case "rejected":
        return "status-rejected";
      case "closed":
        return "status-closed";
      case "cancelled":
        return "status-cancelled";
      default:
        return "status-default";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "draft":
        return "Draft";
      case "pending":
        return "Pending";
      case "approved":
        return "Approved";
      case "ordered":
        return "Ordered";
      case "rejected":
        return "Rejected";
      case "closed":
        return "Closed";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  }
  formatCurrency(amount) {
    const numAmount = Number(amount);
    if (isNaN(numAmount) || !isFinite(numAmount)) {
      return "AED 0.00";
    }
    return `AED ${numAmount.toFixed(2)}`;
  }
  formatDate(dateString) {
    if (!dateString) {
      return "N/A";
    }
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      return date.toLocaleDateString();
    } catch (error) {
      return "Invalid Date";
    }
  }
  calculateItemsTotal(items) {
    if (!items || !Array.isArray(items) || items.length === 0)
      return 0;
    return items.reduce((sum, item) => {
      const qty = Number(item?.ordered_qty) || 0;
      return sum + (isNaN(qty) ? 0 : qty);
    }, 0);
  }
  calculateTotalValue(items) {
    if (!items || !Array.isArray(items) || items.length === 0)
      return 0;
    return items.reduce((sum, item) => {
      const qty = Number(item?.ordered_qty) || 0;
      const price = Number(item?.unit_price) || 0;
      return sum + qty * price;
    }, 0);
  }
  onClose() {
    this.closeModal.emit();
  }
  onEdit() {
    if (this.purchaseOrder) {
      this.purchaseOrderUpdated.emit(this.purchaseOrder);
    }
    this.onClose();
  }
  static \u0275fac = function ViewPurchaseOrderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPurchaseOrderModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPurchaseOrderModalComponent, selectors: [["app-view-purchase-order-modal"]], inputs: { purchaseOrder: "purchaseOrder" }, outputs: { closeModal: "closeModal", purchaseOrderUpdated: "purchaseOrderUpdated" }, decls: 107, vars: 23, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "header-content"], [1, "modal-title"], [1, "po-number"], [1, "close-button", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], [1, "info-section"], [1, "section-header"], [1, "info-grid"], [1, "info-item"], [1, "status-badge", 3, "ngClass"], [1, "total-value"], [1, "supplier-info"], [1, "supplier-card"], [1, "supplier-header"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "supplier-details"], [1, "supplier-name"], [1, "supplier-id"], [1, "supplier-contact"], [1, "contact-item"], [1, "items-summary"], ["class", "items-table-container", 4, "ngIf"], ["class", "no-items", 4, "ngIf"], [1, "additional-info"], [1, "notes"], [1, "terms"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "items-table-container"], [1, "items-table"], [4, "ngFor", "ngForOf"], [1, "item-name"], [1, "part-number"], [1, "description"], [1, "quantity"], [1, "unit-cost"], [1, "item-total"], [1, "no-items"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"]], template: function ViewPurchaseOrderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ViewPurchaseOrderModalComponent_Template_div_click_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function ViewPurchaseOrderModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5, "Purchase Order Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 6);
      \u0275\u0275listener("click", function ViewPurchaseOrderModalComponent_Template_button_click_8_listener() {
        return ctx.onClose();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "h3");
      \u0275\u0275text(15, "Basic Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "label");
      \u0275\u0275text(19, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 13)(23, "label");
      \u0275\u0275text(24, "Order Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 13)(28, "label");
      \u0275\u0275text(29, "Expected Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 13)(33, "label");
      \u0275\u0275text(34, "Total Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 15);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 10)(38, "div", 11)(39, "h3");
      \u0275\u0275text(40, "Supplier Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 16)(42, "div", 17)(43, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 7);
      \u0275\u0275element(45, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(46, "div", 20)(47, "div", 21);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 22);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 23)(52, "div", 24)(53, "label");
      \u0275\u0275text(54, "Email:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span");
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 24)(58, "label");
      \u0275\u0275text(59, "Phone:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span");
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 24)(63, "label");
      \u0275\u0275text(64, "Address:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(67, "div", 10)(68, "div", 11)(69, "h3");
      \u0275\u0275text(70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 25)(72, "span");
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(76, ViewPurchaseOrderModalComponent_div_76_Template, 18, 2, "div", 26)(77, ViewPurchaseOrderModalComponent_div_77_Template, 5, 0, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 10)(79, "div", 11)(80, "h3");
      \u0275\u0275text(81, "Additional Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 28)(83, "div", 13)(84, "label");
      \u0275\u0275text(85, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span", 29);
      \u0275\u0275text(87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 13)(89, "label");
      \u0275\u0275text(90, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span", 30);
      \u0275\u0275text(92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 13)(94, "label");
      \u0275\u0275text(95, "Created By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 13)(99, "label");
      \u0275\u0275text(100, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "span");
      \u0275\u0275text(102);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(103, "div", 31)(104, "button", 32);
      \u0275\u0275listener("click", function ViewPurchaseOrderModalComponent_Template_button_click_104_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(105, " Close ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(106, ViewPurchaseOrderModalComponent_button_106_Template, 4, 0, "button", 33);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("PO-", ctx.purchaseOrder == null ? null : ctx.purchaseOrder.po_number, "");
      \u0275\u0275advance(13);
      \u0275\u0275property("ngClass", ctx.getStatusClass((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.status) || ""));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusLabel((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.status) || ""), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatDate(ctx.purchaseOrder == null ? null : ctx.purchaseOrder.order_date));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatDate(ctx.purchaseOrder == null ? null : ctx.purchaseOrder.expected_date));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.purchaseOrder == null ? null : ctx.purchaseOrder.total));
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.supplier == null ? null : ctx.purchaseOrder.supplier.name) || "Unknown Supplier");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("ID: ", ctx.purchaseOrder == null ? null : ctx.purchaseOrder.supplier_id, "");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.supplier == null ? null : ctx.purchaseOrder.supplier.email) || "N/A");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.supplier == null ? null : ctx.purchaseOrder.supplier.phone) || "N/A");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.supplier == null ? null : ctx.purchaseOrder.supplier.address) || "N/A");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Order Items (", ctx.itemsCount, ")");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Total Quantity: ", ctx.calculateItemsTotal((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.items) || \u0275\u0275pureFunction0(21, _c0)), "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Total Value: ", ctx.formatCurrency(ctx.calculateTotalValue((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.items) || \u0275\u0275pureFunction0(22, _c0))), "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasItems);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasItems);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.notes) || "No notes available");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.terms) || "Standard terms apply");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.purchaseOrder == null ? null : ctx.purchaseOrder.created_by) || "System");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatDate(ctx.purchaseOrder == null ? null : ctx.purchaseOrder.created_at));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", (ctx.purchaseOrder == null ? null : ctx.purchaseOrder.status) === "draft");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  max-width: 900px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .po-number[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #3b82f6;\n  font-family: "Courier New", monospace;\n}\n.modal-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: none;\n  color: #6b7280;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem;\n  overflow-y: auto;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #f3f4f6;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .items-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .items-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #111827;\n  font-weight: 500;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span.total-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #10b981;\n  font-size: 1.125rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  width: fit-content;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .status-badge.status-draft[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .status-badge.status-approved[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .status-badge.status-ordered[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .status-badge.status-rejected[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .status-badge.status-closed[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #7f1d1d;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%]   .supplier-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%]   .supplier-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%]   .supplier-header[_ngcontent-%COMP%]   .supplier-details[_ngcontent-%COMP%]   .supplier-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%]   .supplier-header[_ngcontent-%COMP%]   .supplier-details[_ngcontent-%COMP%]   .supplier-id[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-family: "Courier New", monospace;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%]   .supplier-contact[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 0.75rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%]   .supplier-contact[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%]   .supplier-contact[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%]   .supplier-contact[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  white-space: nowrap;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  color: #111827;\n  vertical-align: top;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-number[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  color: #6b7280;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.description[_ngcontent-%COMP%] {\n  max-width: 200px;\n  color: #6b7280;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.quantity[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.unit-price[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: right;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.item-total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #10b981;\n  text-align: right;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .no-items[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .no-items[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin: 0 auto 1rem auto;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .no-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #111827;\n  font-weight: 500;\n}\n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span.notes[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span.terms[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-style: italic;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  white-space: nowrap;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .po-number[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .items-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-card[_ngcontent-%COMP%]   .supplier-contact[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .items-table-container[_ngcontent-%COMP%]   .items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .additional-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=view-purchase-order-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPurchaseOrderModalComponent, [{
    type: Component,
    args: [{ selector: "app-view-purchase-order-modal", standalone: true, imports: [CommonModule], template: `<div class="modal-overlay" (click)="onClose()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <div class="header-content">\r
        <h2 class="modal-title">Purchase Order Details</h2>\r
        <div class="po-number">PO-{{ purchaseOrder?.po_number }}</div>\r
      </div>\r
      <button class="close-button" (click)="onClose()">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="modal-body">\r
      <!-- Status and Basic Info -->\r
      <div class="info-section">\r
        <div class="section-header">\r
          <h3>Basic Information</h3>\r
        </div>\r
        <div class="info-grid">\r
          <div class="info-item">\r
            <label>Status</label>\r
            <span class="status-badge" [ngClass]="getStatusClass(purchaseOrder?.status || '')">\r
              {{ getStatusLabel(purchaseOrder?.status || '') }}\r
            </span>\r
          </div>\r
          <div class="info-item">\r
            <label>Order Date</label>\r
            <span>{{ formatDate(purchaseOrder?.order_date) }}</span>\r
          </div>\r
          <div class="info-item">\r
            <label>Expected Date</label>\r
            <span>{{ formatDate(purchaseOrder?.expected_date) }}</span>\r
          </div>\r
          <div class="info-item">\r
            <label>Total Value</label>\r
            <span class="total-value">{{ formatCurrency(purchaseOrder?.total) }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Supplier Information -->\r
      <div class="info-section">\r
        <div class="section-header">\r
          <h3>Supplier Details</h3>\r
        </div>\r
        <div class="supplier-info">\r
          <div class="supplier-card">\r
            <div class="supplier-header">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
              </svg>\r
              <div class="supplier-details">\r
                <div class="supplier-name">{{ purchaseOrder?.supplier?.name || 'Unknown Supplier' }}</div>\r
                <div class="supplier-id">ID: {{ purchaseOrder?.supplier_id }}</div>\r
              </div>\r
            </div>\r
            <div class="supplier-contact">\r
              <div class="contact-item">\r
                <label>Email:</label>\r
                <span>{{ purchaseOrder?.supplier?.email || 'N/A' }}</span>\r
              </div>\r
              <div class="contact-item">\r
                <label>Phone:</label>\r
                <span>{{ purchaseOrder?.supplier?.phone || 'N/A' }}</span>\r
              </div>\r
              <div class="contact-item">\r
                <label>Address:</label>\r
                <span>{{ purchaseOrder?.supplier?.address || 'N/A' }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Items List -->\r
      <div class="info-section">\r
        <div class="section-header">\r
          <h3>Order Items ({{ itemsCount }})</h3>\r
          <div class="items-summary">\r
            <span>Total Quantity: {{ calculateItemsTotal(purchaseOrder?.items || []) }}</span>\r
            <span>Total Value: {{ formatCurrency(calculateTotalValue(purchaseOrder?.items || [])) }}</span>\r
          </div>\r
        </div>\r
        \r
        <div class="items-table-container" *ngIf="hasItems">\r
          <table class="items-table">\r
            <thead>\r
              <tr>\r
                <th>Item</th>\r
                <th>Part Number</th>\r
                <th>Description</th>\r
                <th>Quantity</th>\r
                <th>Unit Cost</th>\r
                <th>Total</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let item of (purchaseOrder?.items || [])">\r
                <td class="item-name">{{ item?.part?.name || item?.part_number || 'N/A' }}</td>\r
                <td class="part-number">{{ item?.part_number || 'N/A' }}</td>\r
                <td class="description">{{ item?.description || 'No description' }}</td>\r
                <td class="quantity">{{ item?.ordered_qty || 0 }}</td>\r
                <td class="unit-cost">{{ formatCurrency(item?.unit_cost) }}</td>\r
                <td class="item-total">{{ formatCurrency((item?.ordered_qty || 0) * (item?.unit_cost || 0)) }}</td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
        \r
        <div class="no-items" *ngIf="!hasItems">\r
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>\r
          </svg>\r
          <p>No items in this purchase order</p>\r
        </div>\r
      </div>\r
\r
      <!-- Additional Information -->\r
      <div class="info-section">\r
        <div class="section-header">\r
          <h3>Additional Information</h3>\r
        </div>\r
        <div class="additional-info">\r
          <div class="info-item">\r
            <label>Notes</label>\r
            <span class="notes">{{ purchaseOrder?.notes || 'No notes available' }}</span>\r
          </div>\r
          <div class="info-item">\r
            <label>Terms & Conditions</label>\r
            <span class="terms">{{ purchaseOrder?.terms || 'Standard terms apply' }}</span>\r
          </div>\r
          <div class="info-item">\r
            <label>Created By</label>\r
            <span>{{ purchaseOrder?.created_by || 'System' }}</span>\r
          </div>\r
          <div class="info-item">\r
            <label>Created Date</label>\r
            <span>{{ formatDate(purchaseOrder?.created_at) }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Modal Footer -->\r
    <div class="modal-footer">\r
      <button class="btn btn-secondary" (click)="onClose()">\r
        Close\r
      </button>\r
      <button class="btn btn-primary" (click)="onEdit()" *ngIf="purchaseOrder?.status === 'draft'">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
        </svg>\r
        Edit Purchase Order\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/inventory/components/view-purchase-order-modal/view-purchase-order-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  max-width: 900px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header .header-content {\n  flex: 1;\n}\n.modal-header .header-content .modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.modal-header .header-content .po-number {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #3b82f6;\n  font-family: "Courier New", monospace;\n}\n.modal-header .close-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: none;\n  color: #6b7280;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.modal-header .close-button:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  flex: 1;\n  padding: 1.5rem;\n  overflow-y: auto;\n}\n.modal-body .info-section {\n  margin-bottom: 2rem;\n}\n.modal-body .info-section:last-child {\n  margin-bottom: 0;\n}\n.modal-body .info-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #f3f4f6;\n}\n.modal-body .info-section .section-header h3 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-body .info-section .section-header .items-summary {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.modal-body .info-section .section-header .items-summary span {\n  font-weight: 500;\n}\n.modal-body .info-section .info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.modal-body .info-section .info-grid .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.modal-body .info-section .info-grid .info-item label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.modal-body .info-section .info-grid .info-item span {\n  font-size: 1rem;\n  color: #111827;\n  font-weight: 500;\n}\n.modal-body .info-section .info-grid .info-item span.total-value {\n  font-weight: 700;\n  color: #10b981;\n  font-size: 1.125rem;\n}\n.modal-body .info-section .info-grid .info-item .status-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  width: fit-content;\n}\n.modal-body .info-section .info-grid .info-item .status-badge.status-draft {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body .info-section .info-grid .info-item .status-badge.status-pending {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.modal-body .info-section .info-grid .info-item .status-badge.status-approved {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.modal-body .info-section .info-grid .info-item .status-badge.status-ordered {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.modal-body .info-section .info-grid .info-item .status-badge.status-rejected {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.modal-body .info-section .info-grid .info-item .status-badge.status-closed {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.modal-body .info-section .info-grid .info-item .status-badge.status-cancelled {\n  background-color: #fef2f2;\n  color: #7f1d1d;\n}\n.modal-body .info-section .supplier-info .supplier-card {\n  background-color: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1rem;\n}\n.modal-body .info-section .supplier-info .supplier-card .supplier-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-body .info-section .supplier-info .supplier-card .supplier-header svg {\n  color: #6b7280;\n}\n.modal-body .info-section .supplier-info .supplier-card .supplier-header .supplier-details .supplier-name {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.modal-body .info-section .supplier-info .supplier-card .supplier-header .supplier-details .supplier-id {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-family: "Courier New", monospace;\n}\n.modal-body .info-section .supplier-info .supplier-card .supplier-contact {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 0.75rem;\n}\n.modal-body .info-section .supplier-info .supplier-card .supplier-contact .contact-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.modal-body .info-section .supplier-info .supplier-card .supplier-contact .contact-item label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.modal-body .info-section .supplier-info .supplier-card .supplier-contact .contact-item span {\n  font-size: 0.875rem;\n  color: #111827;\n}\n.modal-body .info-section .items-table-container {\n  overflow-x: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n}\n.modal-body .info-section .items-table-container .items-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.modal-body .info-section .items-table-container .items-table thead {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-body .info-section .items-table-container .items-table thead th {\n  padding: 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  white-space: nowrap;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr {\n  border-bottom: 1px solid #f3f4f6;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr:last-child {\n  border-bottom: none;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr td {\n  padding: 0.75rem;\n  color: #111827;\n  vertical-align: top;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr td.item-name {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr td.part-number {\n  font-family: "Courier New", monospace;\n  color: #6b7280;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr td.description {\n  max-width: 200px;\n  color: #6b7280;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr td.quantity {\n  font-weight: 500;\n  text-align: center;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr td.unit-price {\n  font-weight: 500;\n  text-align: right;\n}\n.modal-body .info-section .items-table-container .items-table tbody tr td.item-total {\n  font-weight: 600;\n  color: #10b981;\n  text-align: right;\n}\n.modal-body .info-section .no-items {\n  text-align: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.modal-body .info-section .no-items svg {\n  color: #d1d5db;\n  margin: 0 auto 1rem auto;\n}\n.modal-body .info-section .no-items p {\n  margin: 0;\n  font-size: 1rem;\n}\n.modal-body .info-section .additional-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.modal-body .info-section .additional-info .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.modal-body .info-section .additional-info .info-item label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.modal-body .info-section .additional-info .info-item span {\n  font-size: 1rem;\n  color: #111827;\n  font-weight: 500;\n}\n.modal-body .info-section .additional-info .info-item span.notes,\n.modal-body .info-section .additional-info .info-item span.terms {\n  color: #6b7280;\n  font-style: italic;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n.modal-footer .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  white-space: nowrap;\n}\n.modal-footer .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.modal-footer .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.modal-footer .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.modal-footer .btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.modal-footer .btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .modal-header {\n    padding: 1rem;\n  }\n  .modal-header .header-content .modal-title {\n    font-size: 1.25rem;\n  }\n  .modal-header .header-content .po-number {\n    font-size: 1rem;\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-body .info-section .section-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .modal-body .info-section .section-header .items-summary {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .modal-body .info-section .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .modal-body .info-section .supplier-info .supplier-card .supplier-contact {\n    grid-template-columns: 1fr;\n  }\n  .modal-body .info-section .items-table-container .items-table {\n    font-size: 0.75rem;\n  }\n  .modal-body .info-section .items-table-container .items-table thead th,\n  .modal-body .info-section .items-table-container .items-table tbody td {\n    padding: 0.5rem;\n  }\n  .modal-body .info-section .additional-info {\n    grid-template-columns: 1fr;\n  }\n  .modal-footer {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .modal-footer .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .modal-overlay {\n    padding: 0.5rem;\n  }\n  .modal-content {\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header {\n    border-radius: 0;\n  }\n  .modal-footer {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=view-purchase-order-modal.component.css.map */\n'] }]
  }], null, { purchaseOrder: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], purchaseOrderUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPurchaseOrderModalComponent, { className: "ViewPurchaseOrderModalComponent", filePath: "src/app/inventory/components/view-purchase-order-modal/view-purchase-order-modal.component.ts", lineNumber: 12 });
})();

// src/app/inventory/components/receive-items-modal/receive-items-modal.component.ts
function ReceiveItemsModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function ReceiveItemsModalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "h3", 12);
    \u0275\u0275text(2, "Purchase Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "div", 33)(5, "label");
    \u0275\u0275text(6, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 33)(10, "label");
    \u0275\u0275text(11, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 33)(15, "label");
    \u0275\u0275text(16, "Total Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "label");
    \u0275\u0275text(21, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.purchaseOrder.po_number);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.purchaseOrder.supplier == null ? null : ctx_r0.purchaseOrder.supplier.name) || "Unknown Supplier");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.purchaseOrder.items == null ? null : ctx_r0.purchaseOrder.items.length) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.purchaseOrder.total));
  }
}
function ReceiveItemsModalComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r2 = ctx.$implicit;
    \u0275\u0275property("value", location_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", location_r2.name, " (", location_r2.code || "N/A", ") ");
  }
}
function ReceiveItemsModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("location_id"), " ");
  }
}
function ReceiveItemsModalComponent_div_27_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = \u0275\u0275nextContext().index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getArrayFieldError(i_r3, "receive_qty"), " ");
  }
}
function ReceiveItemsModalComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "h4", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "span", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 20)(12, "div", 13)(13, "label", 42);
    \u0275\u0275text(14, "Receive Quantity *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 43);
    \u0275\u0275template(16, ReceiveItemsModalComponent_div_27_div_16_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_11_0;
    const item_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_4_0 = item_r4.get("part_name")) == null ? null : tmp_4_0.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Ordered: ", (tmp_5_0 = item_r4.get("ordered_qty")) == null ? null : tmp_5_0.value, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Received: ", (tmp_6_0 = item_r4.get("received_qty")) == null ? null : tmp_6_0.value, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Remaining: ", (tmp_7_0 = item_r4.get("remaining_qty")) == null ? null : tmp_7_0.value, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("for", "receive_qty_" + i_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "receive_qty_" + i_r3)("min", 1)("max", (tmp_11_0 = item_r4.get("remaining_qty")) == null ? null : tmp_11_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getArrayFieldError(i_r3, "receive_qty"));
  }
}
function ReceiveItemsModalComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Receiving...");
    \u0275\u0275elementEnd();
  }
}
function ReceiveItemsModalComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Receive Items");
    \u0275\u0275elementEnd();
  }
}
var ReceiveItemsModalComponent = class _ReceiveItemsModalComponent {
  fb;
  inventoryService;
  purchaseOrder = null;
  closeModal = new EventEmitter();
  itemsReceived = new EventEmitter();
  receiveForm;
  loading = false;
  error = null;
  locations = [];
  constructor(fb, inventoryService) {
    this.fb = fb;
    this.inventoryService = inventoryService;
    this.receiveForm = this.fb.group({
      location_id: ["", [Validators.required]],
      reference: [""],
      notes: [""],
      items: this.fb.array([])
    });
  }
  ngOnInit() {
    this.loadLocations();
    this.initializeItemsForm();
  }
  loadLocations() {
    this.inventoryService.getLocations(1, 1e3).subscribe({
      next: (response) => {
        if (response.success) {
          this.locations = response.data.data;
        }
      },
      error: (err) => {
        console.error("Error loading locations:", err);
      }
    });
  }
  initializeItemsForm() {
    if (!this.purchaseOrder?.items)
      return;
    const itemsArray = this.receiveForm.get("items");
    itemsArray.clear();
    this.purchaseOrder.items.forEach((item) => {
      const remainingQty = (item.ordered_qty || 0) - (item.received_qty || 0);
      if (remainingQty > 0) {
        const itemGroup = this.fb.group({
          item_id: [item.id, [Validators.required]],
          receive_qty: ["", [Validators.required, Validators.min(1), Validators.max(remainingQty)]],
          part_name: [item.part?.name || "Unknown Part"],
          ordered_qty: [item.ordered_qty],
          received_qty: [item.received_qty || 0],
          remaining_qty: [remainingQty]
        });
        itemsArray.push(itemGroup);
      }
    });
  }
  get itemsArray() {
    return this.receiveForm.get("items");
  }
  onSubmit() {
    if (this.receiveForm.valid && this.purchaseOrder?.id) {
      this.loading = true;
      this.error = null;
      const formData = this.receiveForm.value;
      const receiveData = {
        location_id: formData.location_id,
        items: formData.items.map((item) => ({
          item_id: item.item_id,
          receive_qty: item.receive_qty
        })),
        reference: formData.reference,
        notes: formData.notes
      };
      this.inventoryService.receivePurchaseOrder(this.purchaseOrder.id, receiveData).subscribe({
        next: () => {
          this.itemsReceived.emit();
          this.closeModal.emit();
        },
        error: (err) => {
          this.error = "Error receiving items: " + err.message;
          this.loading = false;
        }
      });
    }
  }
  onCancel() {
    this.closeModal.emit();
  }
  getFieldError(fieldName) {
    const field = this.receiveForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return "This field is required";
      }
    }
    return "";
  }
  getArrayFieldError(index, fieldName) {
    const field = this.itemsArray.at(index).get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return "This field is required";
      }
      if (field.errors["min"]) {
        return `Minimum value is ${field.errors["min"].min}`;
      }
      if (field.errors["max"]) {
        return `Maximum value is ${field.errors["max"].max}`;
      }
    }
    return "";
  }
  formatCurrency(amount) {
    return `AED ${amount.toFixed(2)}`;
  }
  getLocationName(locationId) {
    const location = this.locations.find((l) => l.id === locationId);
    return location ? location.name : "Unknown Location";
  }
  static \u0275fac = function ReceiveItemsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceiveItemsModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceiveItemsModalComponent, selectors: [["app-receive-items-modal"]], inputs: { purchaseOrder: "purchaseOrder" }, outputs: { closeModal: "closeModal", itemsReceived: "itemsReceived" }, decls: 47, vars: 9, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], ["class", "error-message", 4, "ngIf"], ["class", "po-summary", 4, "ngIf"], [1, "receive-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "form-field"], ["for", "location", 1, "field-label"], ["id", "location", "formControlName", "location_id", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formArrayName", "items", 1, "items-container"], ["class", "item-row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "form-row"], ["for", "reference", 1, "field-label"], ["type", "text", "id", "reference", "formControlName", "reference", "placeholder", "e.g., Delivery Note DN-001", 1, "form-input"], [1, "form-field", "full-width"], ["for", "notes", 1, "field-label"], ["id", "notes", "formControlName", "notes", "rows", "3", "placeholder", "Add any additional notes about this delivery...", 1, "form-textarea"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [1, "error-message"], [1, "po-summary"], [1, "summary-grid"], [1, "summary-item"], [3, "value"], [1, "item-row", 3, "formGroupName"], [1, "item-header"], [1, "item-title"], [1, "item-summary"], [1, "ordered"], [1, "received"], [1, "remaining"], [1, "field-label", 3, "for"], ["type", "number", "formControlName", "receive_qty", 1, "form-input", 3, "id", "min", "max"]], template: function ReceiveItemsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ReceiveItemsModalComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function ReceiveItemsModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Receive Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function ReceiveItemsModalComponent_Template_button_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275template(9, ReceiveItemsModalComponent_div_9_Template, 2, 1, "div", 8)(10, ReceiveItemsModalComponent_div_10_Template, 24, 4, "div", 9);
      \u0275\u0275elementStart(11, "form", 10);
      \u0275\u0275listener("ngSubmit", function ReceiveItemsModalComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 11)(13, "h3", 12);
      \u0275\u0275text(14, "Receiving Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13)(16, "label", 14);
      \u0275\u0275text(17, "Location *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 15)(19, "option", 16);
      \u0275\u0275text(20, "Select a location");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, ReceiveItemsModalComponent_option_21_Template, 2, 3, "option", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, ReceiveItemsModalComponent_div_22_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 11)(24, "h3", 12);
      \u0275\u0275text(25, "Items to Receive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 18);
      \u0275\u0275template(27, ReceiveItemsModalComponent_div_27_Template, 17, 10, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 11)(29, "h3", 12);
      \u0275\u0275text(30, "Additional Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 13)(33, "label", 21);
      \u0275\u0275text(34, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 20)(37, "div", 23)(38, "label", 24);
      \u0275\u0275text(39, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "textarea", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(41, "div", 26)(42, "button", 27);
      \u0275\u0275listener("click", function ReceiveItemsModalComponent_Template_button_click_42_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(43, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 28);
      \u0275\u0275listener("click", function ReceiveItemsModalComponent_Template_button_click_44_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(45, ReceiveItemsModalComponent_span_45_Template, 2, 0, "span", 29)(46, ReceiveItemsModalComponent_span_46_Template, 2, 0, "span", 29);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.purchaseOrder);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.receiveForm);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.locations);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("location_id"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.itemsArray.controls);
      \u0275\u0275advance(17);
      \u0275\u0275property("disabled", !ctx.receiveForm.valid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 700px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .po-summary[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .po-summary[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 1rem 0;\n}\n.modal-body[_ngcontent-%COMP%]   .po-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .po-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n}\n.modal-body[_ngcontent-%COMP%]   .po-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  color: #111827;\n  font-weight: 500;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select.ng-invalid.ng-touched[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  min-height: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  background-color: #f9fafb;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-weight: 500;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-summary[_ngcontent-%COMP%]   span.ordered[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-summary[_ngcontent-%COMP%]   span.received[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #16a34a;\n}\n.modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-summary[_ngcontent-%COMP%]   span.remaining[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1px solid transparent;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6b7280;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #4b5563;\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .po-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .receive-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=receive-items-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceiveItemsModalComponent, [{
    type: Component,
    args: [{ selector: "app-receive-items-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="modal-overlay" (click)="onCancel()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <h2 class="modal-title">Receive Items</h2>\r
      <button class="close-btn" (click)="onCancel()">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="modal-body">\r
      <div *ngIf="error" class="error-message">\r
        {{ error }}\r
      </div>\r
\r
      <div *ngIf="purchaseOrder" class="po-summary">\r
        <h3 class="section-title">Purchase Order Summary</h3>\r
        <div class="summary-grid">\r
          <div class="summary-item">\r
            <label>PO Number</label>\r
            <span>{{ purchaseOrder.po_number }}</span>\r
          </div>\r
          <div class="summary-item">\r
            <label>Supplier</label>\r
            <span>{{ purchaseOrder.supplier?.name || 'Unknown Supplier' }}</span>\r
          </div>\r
          <div class="summary-item">\r
            <label>Total Items</label>\r
            <span>{{ purchaseOrder.items?.length || 0 }}</span>\r
          </div>\r
          <div class="summary-item">\r
            <label>Total Value</label>\r
            <span>{{ formatCurrency(purchaseOrder.total) }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <form [formGroup]="receiveForm" (ngSubmit)="onSubmit()" class="receive-form">\r
        <!-- Location Selection -->\r
        <div class="form-section">\r
          <h3 class="section-title">Receiving Location</h3>\r
          <div class="form-field">\r
            <label for="location" class="field-label">Location *</label>\r
            <select id="location" formControlName="location_id" class="form-select">\r
              <option value="">Select a location</option>\r
              <option *ngFor="let location of locations" [value]="location.id">\r
                {{ location.name }} ({{ location.code || 'N/A' }})\r
              </option>\r
            </select>\r
            <div class="error-message" *ngIf="getFieldError('location_id')">\r
              {{ getFieldError('location_id') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Items to Receive -->\r
        <div class="form-section">\r
          <h3 class="section-title">Items to Receive</h3>\r
          <div formArrayName="items" class="items-container">\r
            <div *ngFor="let item of itemsArray.controls; let i = index" [formGroupName]="i" class="item-row">\r
              <div class="item-header">\r
                <h4 class="item-title">{{ item.get('part_name')?.value }}</h4>\r
                <div class="item-summary">\r
                  <span class="ordered">Ordered: {{ item.get('ordered_qty')?.value }}</span>\r
                  <span class="received">Received: {{ item.get('received_qty')?.value }}</span>\r
                  <span class="remaining">Remaining: {{ item.get('remaining_qty')?.value }}</span>\r
                </div>\r
              </div>\r
              \r
              <div class="form-row">\r
                <div class="form-field">\r
                  <label [for]="'receive_qty_' + i" class="field-label">Receive Quantity *</label>\r
                  <input \r
                    type="number" \r
                    [id]="'receive_qty_' + i" \r
                    formControlName="receive_qty" \r
                    class="form-input"\r
                    [min]="1"\r
                    [max]="item.get('remaining_qty')?.value">\r
                  <div class="error-message" *ngIf="getArrayFieldError(i, 'receive_qty')">\r
                    {{ getArrayFieldError(i, 'receive_qty') }}\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Additional Information -->\r
        <div class="form-section">\r
          <h3 class="section-title">Additional Information</h3>\r
          <div class="form-row">\r
            <div class="form-field">\r
              <label for="reference" class="field-label">Reference</label>\r
              <input \r
                type="text" \r
                id="reference" \r
                formControlName="reference" \r
                class="form-input"\r
                placeholder="e.g., Delivery Note DN-001">\r
            </div>\r
          </div>\r
          \r
          <div class="form-row">\r
            <div class="form-field full-width">\r
              <label for="notes" class="field-label">Notes</label>\r
              <textarea \r
                id="notes" \r
                formControlName="notes" \r
                rows="3" \r
                class="form-textarea" \r
                placeholder="Add any additional notes about this delivery..."></textarea>\r
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
      <button \r
        type="submit" \r
        class="btn btn-primary" \r
        (click)="onSubmit()" \r
        [disabled]="!receiveForm.valid || loading">\r
        <span *ngIf="loading">Receiving...</span>\r
        <span *ngIf="!loading">Receive Items</span>\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
`, styles: ["/* src/app/inventory/components/receive-items-modal/receive-items-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 700px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header .modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header .close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n}\n.modal-header .close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header .close-btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-body .error-message {\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.modal-body .po-summary {\n  margin-bottom: 2rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.modal-body .po-summary .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 1rem 0;\n}\n.modal-body .po-summary .summary-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.modal-body .po-summary .summary-grid .summary-item label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n}\n.modal-body .po-summary .summary-grid .summary-item span {\n  display: block;\n  font-size: 1rem;\n  color: #111827;\n  font-weight: 500;\n}\n.modal-body .receive-form .form-section {\n  margin-bottom: 2rem;\n}\n.modal-body .receive-form .form-section:last-child {\n  margin-bottom: 0;\n}\n.modal-body .receive-form .form-section .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-body .receive-form .form-section .form-field {\n  margin-bottom: 1rem;\n}\n.modal-body .receive-form .form-section .form-field:last-child {\n  margin-bottom: 0;\n}\n.modal-body .receive-form .form-section .form-field.full-width {\n  grid-column: 1/-1;\n}\n.modal-body .receive-form .form-section .form-field .field-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.modal-body .receive-form .form-section .form-field .form-input,\n.modal-body .receive-form .form-section .form-field .form-select,\n.modal-body .receive-form .form-section .form-field .form-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.modal-body .receive-form .form-section .form-field .form-input:focus,\n.modal-body .receive-form .form-section .form-field .form-select:focus,\n.modal-body .receive-form .form-section .form-field .form-textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.modal-body .receive-form .form-section .form-field .form-input.ng-invalid.ng-touched,\n.modal-body .receive-form .form-section .form-field .form-select.ng-invalid.ng-touched,\n.modal-body .receive-form .form-section .form-field .form-textarea.ng-invalid.ng-touched {\n  border-color: #ef4444;\n}\n.modal-body .receive-form .form-section .form-field .form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.modal-body .receive-form .form-section .form-field .error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  min-height: 1rem;\n}\n.modal-body .receive-form .form-section .form-row {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.modal-body .receive-form .form-section .form-row:last-child {\n  margin-bottom: 0;\n}\n.modal-body .receive-form .form-section .items-container .item-row {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  background-color: #f9fafb;\n}\n.modal-body .receive-form .form-section .items-container .item-row:last-child {\n  margin-bottom: 0;\n}\n.modal-body .receive-form .form-section .items-container .item-row .item-header {\n  margin-bottom: 1rem;\n}\n.modal-body .receive-form .form-section .items-container .item-row .item-header .item-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.modal-body .receive-form .form-section .items-container .item-row .item-header .item-summary {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n}\n.modal-body .receive-form .form-section .items-container .item-row .item-header .item-summary span {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-weight: 500;\n}\n.modal-body .receive-form .form-section .items-container .item-row .item-header .item-summary span.ordered {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.modal-body .receive-form .form-section .items-container .item-row .item-header .item-summary span.received {\n  background-color: #dcfce7;\n  color: #16a34a;\n}\n.modal-body .receive-form .form-section .items-container .item-row .item-header .item-summary span.remaining {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1px solid transparent;\n}\n.btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.btn.btn-primary:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background-color: #6b7280;\n  color: white;\n}\n.btn.btn-secondary:hover {\n  background-color: #4b5563;\n}\n@media (max-width: 768px) {\n  .modal-container {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-body .po-summary .summary-grid {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .modal-body .receive-form .form-section .items-container .item-row .item-header .item-summary {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .modal-footer .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=receive-items-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: InventoryAnalyticsService }], { purchaseOrder: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], itemsReceived: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceiveItemsModalComponent, { className: "ReceiveItemsModalComponent", filePath: "src/app/inventory/components/receive-items-modal/receive-items-modal.component.ts", lineNumber: 13 });
})();

// src/app/inventory/components/purchase-orders/purchase-orders.component.ts
function PurchaseOrdersComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading purchase orders...");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseOrdersComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 50);
    \u0275\u0275element(3, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 38);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_div_80_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275text(7, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PurchaseOrdersComponent_div_81_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 62);
    \u0275\u0275element(2, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 63);
    \u0275\u0275text(4, "No Purchase Orders Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 64);
    \u0275\u0275text(6, "No purchase orders match your current filters. Try adjusting your search criteria or create a new purchase order.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 38);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_div_81_div_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreatePOModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 34);
    \u0275\u0275element(9, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Create Purchase Order ");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseOrdersComponent_div_81_div_8_tr_21_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_div_81_div_8_tr_21_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const po_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approvePurchaseOrder(po_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Approve ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseOrdersComponent_div_81_div_8_tr_21_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_div_81_div_8_tr_21_button_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const po_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markAsOrdered(po_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mark as Ordered ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseOrdersComponent_div_81_div_8_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 75)(1, "td", 76)(2, "div", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 78)(5, "div", 79)(6, "div", 80);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 81);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 82);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 83);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 84)(15, "span", 85);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 86)(18, "div", 87)(19, "div", 88);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 89);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td", 90)(24, "div", 91);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 92)(27, "div", 93)(28, "button", 94);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_div_81_div_8_tr_21_Template_button_click_28_listener($event) {
      const po_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(po_r5.id && ctx_r1.toggleDropdown($event, po_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 34);
    \u0275\u0275element(30, "path", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div", 96)(32, "button", 97);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_div_81_div_8_tr_21_Template_button_click_32_listener() {
      const po_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewPurchaseOrder(po_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 34);
    \u0275\u0275element(34, "path", 98)(35, "path", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, PurchaseOrdersComponent_div_81_div_8_tr_21_button_37_Template, 4, 0, "button", 100);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "button", 97);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_div_81_div_8_tr_21_Template_button_click_38_listener() {
      const po_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendEmail(po_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 34);
    \u0275\u0275element(40, "path", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Send Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, PurchaseOrdersComponent_div_81_div_8_tr_21_button_42_Template, 4, 0, "button", 100);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const po_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(po_r5.po_number);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((po_r5.supplier == null ? null : po_r5.supplier.name) || "Unknown Supplier");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", po_r5.supplier_id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(po_r5.order_date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(po_r5.expected_date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(po_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(po_r5.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (po_r5.items == null ? null : po_r5.items.length) || 0, " items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.calculateItemsTotal(po_r5.items), " total qty ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(po_r5.total));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("show", po_r5.id && ctx_r1.openDropdownId === po_r5.id);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", po_r5.status === "pending");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", po_r5.status === "approved");
  }
}
function PurchaseOrdersComponent_div_81_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "table", 53)(2, "thead")(3, "tr")(4, "th", 66);
    \u0275\u0275text(5, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 67);
    \u0275\u0275text(7, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 68);
    \u0275\u0275text(9, "Order Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 69);
    \u0275\u0275text(11, "Expected Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 70);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 71);
    \u0275\u0275text(15, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 72);
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 73);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, PurchaseOrdersComponent_div_81_div_8_tr_21_Template, 43, 14, "tr", 74);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.purchaseOrders);
  }
}
function PurchaseOrdersComponent_div_81_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 105)(4, "button", 106);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_div_81_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275text(5, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 106);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_div_81_div_9_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(7, " Next ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Showing ", (ctx_r1.currentPage - 1) * ctx_r1.perPage + 1, " to ", ctx_r1.getMinValue(ctx_r1.currentPage * ctx_r1.perPage, ctx_r1.totalItems), " of ", ctx_r1.totalItems, " results ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function PurchaseOrdersComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "h3", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, PurchaseOrdersComponent_div_81_div_7_Template, 11, 0, "div", 58)(8, PurchaseOrdersComponent_div_81_div_8_Template, 22, 1, "div", 59)(9, PurchaseOrdersComponent_div_81_div_9_Template, 8, 5, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Purchase Orders (", ctx_r1.totalItems, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r1.currentPage, " of ", ctx_r1.totalPages, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.purchaseOrders.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.purchaseOrders.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.purchaseOrders.length > 0);
  }
}
function PurchaseOrdersComponent_app_create_purchase_order_modal_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-purchase-order-modal", 107);
    \u0275\u0275listener("closeModal", function PurchaseOrdersComponent_app_create_purchase_order_modal_82_Template_app_create_purchase_order_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreatePOModal());
    })("createPurchaseOrder", function PurchaseOrdersComponent_app_create_purchase_order_modal_82_Template_app_create_purchase_order_modal_createPurchaseOrder_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreatePurchaseOrder($event));
    });
    \u0275\u0275elementEnd();
  }
}
function PurchaseOrdersComponent_app_view_purchase_order_modal_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-view-purchase-order-modal", 108);
    \u0275\u0275listener("closeModal", function PurchaseOrdersComponent_app_view_purchase_order_modal_83_Template_app_view_purchase_order_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeViewPOModal());
    })("purchaseOrderUpdated", function PurchaseOrdersComponent_app_view_purchase_order_modal_83_Template_app_view_purchase_order_modal_purchaseOrderUpdated_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPurchaseOrderUpdated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("purchaseOrder", ctx_r1.selectedPurchaseOrder);
  }
}
function PurchaseOrdersComponent_app_receive_items_modal_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-receive-items-modal", 109);
    \u0275\u0275listener("closeModal", function PurchaseOrdersComponent_app_receive_items_modal_84_Template_app_receive_items_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReceiveItemsModal());
    })("itemsReceived", function PurchaseOrdersComponent_app_receive_items_modal_84_Template_app_receive_items_modal_itemsReceived_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemsReceived());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("purchaseOrder", ctx_r1.selectedPurchaseOrder);
  }
}
var PurchaseOrdersComponent = class _PurchaseOrdersComponent {
  inventoryService;
  showCreatePOModal = false;
  showViewPOModal = false;
  showReceiveItemsModal = false;
  selectedPurchaseOrder = null;
  // Dropdown state
  openDropdownId = null;
  // Data properties
  purchaseOrders = [];
  loading = false;
  error = null;
  // Pagination
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  perPage = 15;
  // Filters
  filters = {
    status: "",
    search: ""
  };
  // Overview stats
  overviewStats = {
    totalPOs: 0,
    pending: 0,
    approved: 0,
    totalValue: 0
  };
  constructor(inventoryService) {
    this.inventoryService = inventoryService;
  }
  ngOnInit() {
    this.loadPurchaseOrders();
    this.loadOverviewStats();
    document.addEventListener("click", this.onDocumentClick.bind(this));
  }
  ngOnDestroy() {
    document.removeEventListener("click", this.onDocumentClick.bind(this));
  }
  // Dropdown functionality
  toggleDropdown(event, poId) {
    event.stopPropagation();
    if (poId) {
      this.openDropdownId = this.openDropdownId === poId ? null : poId;
    }
  }
  onDocumentClick(event) {
    if (!event.target.closest(".dropdown-container")) {
      this.openDropdownId = null;
    }
  }
  // New action methods
  viewPurchaseOrder(po) {
    this.openViewPOModal(po);
    this.openDropdownId = null;
  }
  approvePurchaseOrder(po) {
    console.log("Approving Purchase Order:", po.po_number);
    if (!po.id) {
      this.error = "Purchase Order ID is missing";
      return;
    }
    this.inventoryService.updatePurchaseOrder(po.id, { status: "approved" }).subscribe({
      next: (response) => {
        if (response.success) {
          console.log("Purchase Order approved successfully");
          this.loadPurchaseOrders();
          this.loadOverviewStats();
        } else {
          this.error = "Failed to approve purchase order";
        }
      },
      error: (err) => {
        this.error = "Error approving purchase order: " + err.message;
      }
    });
    this.openDropdownId = null;
  }
  sendEmail(po) {
    console.log("Sending email for Purchase Order:", po.po_number);
    alert(`Email functionality for PO ${po.po_number} would be implemented here.`);
    this.openDropdownId = null;
  }
  markAsOrdered(po) {
    console.log("Marking Purchase Order as Ordered:", po.po_number);
    if (!po.id) {
      this.error = "Purchase Order ID is missing";
      return;
    }
    this.inventoryService.updatePurchaseOrder(po.id, { status: "ordered" }).subscribe({
      next: (response) => {
        if (response.success) {
          console.log("Purchase Order marked as ordered successfully");
          this.loadPurchaseOrders();
          this.loadOverviewStats();
        } else {
          this.error = "Failed to mark purchase order as ordered";
        }
      },
      error: (err) => {
        this.error = "Error marking purchase order as ordered: " + err.message;
      }
    });
    this.openDropdownId = null;
  }
  loadPurchaseOrders() {
    this.loading = true;
    this.error = null;
    this.inventoryService.getPurchaseOrders(this.currentPage, this.perPage, this.filters.status || void 0, this.filters.search || void 0).subscribe({
      next: (response) => {
        if (response.success) {
          this.purchaseOrders = response.data.data;
          this.currentPage = response.data.current_page;
          this.totalPages = response.data.last_page;
          this.totalItems = response.data.total;
        } else {
          this.error = "Failed to load purchase orders";
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = "Error loading purchase orders: " + err.message;
        this.loading = false;
      }
    });
  }
  loadOverviewStats() {
    this.inventoryService.getPurchaseOrders(1, 1e3).subscribe({
      next: (response) => {
        if (response.success) {
          const allPOs = response.data.data;
          this.overviewStats.totalPOs = allPOs.length;
          this.overviewStats.pending = allPOs.filter((po) => po.status === "pending").length;
          this.overviewStats.approved = allPOs.filter((po) => po.status === "approved").length;
          this.overviewStats.totalValue = allPOs.reduce((sum, po) => sum + po.total, 0);
        }
      },
      error: (err) => {
        console.error("Error loading overview stats:", err);
      }
    });
  }
  applyFilters() {
    this.currentPage = 1;
    this.loadPurchaseOrders();
  }
  clearFilters() {
    this.filters = {
      status: "",
      search: ""
    };
    this.currentPage = 1;
    this.loadPurchaseOrders();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadPurchaseOrders();
  }
  openCreatePOModal() {
    this.showCreatePOModal = true;
  }
  closeCreatePOModal() {
    this.showCreatePOModal = false;
  }
  openViewPOModal(purchaseOrder) {
    this.selectedPurchaseOrder = purchaseOrder;
    this.showViewPOModal = true;
  }
  closeViewPOModal() {
    this.showViewPOModal = false;
    this.selectedPurchaseOrder = null;
  }
  openReceiveItemsModal(purchaseOrder) {
    this.selectedPurchaseOrder = purchaseOrder;
    this.showReceiveItemsModal = true;
  }
  closeReceiveItemsModal() {
    this.showReceiveItemsModal = false;
    this.selectedPurchaseOrder = null;
  }
  onCreatePurchaseOrder(poData) {
    console.log("Creating Purchase Order:", poData);
    this.inventoryService.createPurchaseOrder(poData).subscribe({
      next: (response) => {
        if (response.success) {
          console.log("Purchase Order created successfully:", response.data);
          this.loadPurchaseOrders();
          this.loadOverviewStats();
          this.closeCreatePOModal();
        } else {
          this.error = "Failed to create purchase order";
        }
      },
      error: (err) => {
        this.error = "Error creating purchase order: " + err.message;
      }
    });
  }
  onPurchaseOrderUpdated(updatedPO) {
    const index = this.purchaseOrders.findIndex((po) => po.id === updatedPO.id);
    if (index !== -1) {
      this.purchaseOrders[index] = updatedPO;
    }
    this.loadOverviewStats();
  }
  onItemsReceived() {
    this.loadPurchaseOrders();
    this.loadOverviewStats();
  }
  getStatusClass(status) {
    switch (status) {
      case "draft":
        return "status-draft";
      case "pending":
        return "status-pending";
      case "approved":
        return "status-approved";
      case "ordered":
        return "status-ordered";
      case "rejected":
        return "status-rejected";
      case "closed":
        return "status-closed";
      case "cancelled":
        return "status-cancelled";
      default:
        return "status-default";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "draft":
        return "Draft";
      case "pending":
        return "Pending";
      case "approved":
        return "Approved";
      case "ordered":
        return "Ordered";
      case "rejected":
        return "Rejected";
      case "closed":
        return "Closed";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  }
  formatCurrency(amount) {
    const numAmount = Number(amount);
    if (isNaN(numAmount) || !isFinite(numAmount)) {
      return "AED 0.00";
    }
    return `AED ${numAmount.toFixed(2)}`;
  }
  formatDate(dateString) {
    if (!dateString) {
      return "N/A";
    }
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      return date.toLocaleDateString();
    } catch (error) {
      return "Invalid Date";
    }
  }
  calculateItemsTotal(items) {
    if (!items || !Array.isArray(items) || items.length === 0)
      return 0;
    return items.reduce((sum, item) => {
      const qty = Number(item?.ordered_qty) || 0;
      return sum + (isNaN(qty) ? 0 : qty);
    }, 0);
  }
  getMinValue(a, b) {
    return Math.min(a, b);
  }
  refreshData() {
    this.loadPurchaseOrders();
    this.loadOverviewStats();
  }
  static \u0275fac = function PurchaseOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseOrdersComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseOrdersComponent, selectors: [["app-purchase-orders"]], decls: 85, vars: 12, consts: [[1, "purchase-orders"], [1, "overview-cards-row"], [1, "overview-card", "total-pos"], [1, "card-content"], [1, "card-value"], [1, "card-label"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "card-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "overview-card", "pending"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "overview-card", "approved"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "overview-card", "total-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "control-bar"], [1, "search-controls"], [1, "search-container"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search purchase orders...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "status-dropdown"], [1, "status-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "draft"], ["value", "pending"], ["value", "approved"], ["value", "ordered"], ["value", "rejected"], ["value", "closed"], ["value", "cancelled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "btn", "btn-outline", 3, "click"], [1, "action-buttons"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "btn", "btn-secondary"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "btn", "btn-primary", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "purchase-orders-table", 4, "ngIf"], [3, "closeModal", "createPurchaseOrder", 4, "ngIf"], [3, "purchaseOrder", "closeModal", "purchaseOrderUpdated", 4, "ngIf"], [3, "purchaseOrder", "closeModal", "itemsReceived", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "error-message"], [1, "purchase-orders-table"], [1, "table-header"], [1, "table-title"], [1, "table-actions"], [1, "text-sm", "text-gray-500"], ["class", "empty-state", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "empty-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "empty-icon"], [1, "empty-title"], [1, "empty-description"], [1, "table-wrapper"], [1, "th-po-number"], [1, "th-supplier"], [1, "th-order-date"], [1, "th-expected-date"], [1, "th-status"], [1, "th-items"], [1, "th-total"], [1, "th-actions"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "td-po-number"], [1, "po-number"], [1, "td-supplier"], [1, "supplier-info"], [1, "supplier-name"], [1, "supplier-id"], [1, "td-order-date"], [1, "td-expected-date"], [1, "td-status"], [1, "status-badge", 3, "ngClass"], [1, "td-items"], [1, "items-info"], [1, "items-count"], [1, "items-summary"], [1, "td-total"], [1, "total-amount"], [1, "td-actions"], [1, "dropdown-container"], [1, "dropdown-trigger", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], [1, "pagination"], [1, "pagination-info"], [1, "pagination-buttons"], [1, "btn", "btn-outline", 3, "click", "disabled"], [3, "closeModal", "createPurchaseOrder"], [3, "closeModal", "purchaseOrderUpdated", "purchaseOrder"], [3, "closeModal", "itemsReceived", "purchaseOrder"]], template: function PurchaseOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5);
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
      \u0275\u0275text(13);
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
      \u0275\u0275text(21);
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
      \u0275\u0275text(29);
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
      \u0275\u0275elementStart(39, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrdersComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.search, $event) || (ctx.filters.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function PurchaseOrdersComponent_Template_input_input_39_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 20)(41, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrdersComponent_Template_select_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.status, $event) || (ctx.filters.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function PurchaseOrdersComponent_Template_select_change_41_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(42, "option", 22);
      \u0275\u0275text(43, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 23);
      \u0275\u0275text(45, "Draft");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 24);
      \u0275\u0275text(47, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 25);
      \u0275\u0275text(49, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 26);
      \u0275\u0275text(51, "Ordered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 27);
      \u0275\u0275text(53, "Rejected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 28);
      \u0275\u0275text(55, "Closed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 29);
      \u0275\u0275text(57, "Cancelled");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 30);
      \u0275\u0275element(59, "path", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(60, "button", 32);
      \u0275\u0275listener("click", function PurchaseOrdersComponent_Template_button_click_60_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(61, " Clear Filters ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 33)(63, "button", 32);
      \u0275\u0275listener("click", function PurchaseOrdersComponent_Template_button_click_63_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 34);
      \u0275\u0275element(65, "path", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "button", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(68, "svg", 34);
      \u0275\u0275element(69, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, " Templates ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(71, "button", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(72, "svg", 34);
      \u0275\u0275element(73, "path", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275text(74, " Budget Controls ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(75, "button", 38);
      \u0275\u0275listener("click", function PurchaseOrdersComponent_Template_button_click_75_listener() {
        return ctx.openCreatePOModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(76, "svg", 34);
      \u0275\u0275element(77, "path", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275text(78, " Create Purchase Order ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(79, PurchaseOrdersComponent_div_79_Template, 4, 0, "div", 40)(80, PurchaseOrdersComponent_div_80_Template, 8, 1, "div", 41)(81, PurchaseOrdersComponent_div_81_Template, 10, 6, "div", 42)(82, PurchaseOrdersComponent_app_create_purchase_order_modal_82_Template, 1, 0, "app-create-purchase-order-modal", 43)(83, PurchaseOrdersComponent_app_view_purchase_order_modal_83_Template, 1, 1, "app-view-purchase-order-modal", 44)(84, PurchaseOrdersComponent_app_receive_items_modal_84_Template, 1, 1, "app-receive-items-modal", 45);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.overviewStats.totalPOs);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.overviewStats.pending);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.overviewStats.approved);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.overviewStats.totalValue));
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.search);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.status);
      \u0275\u0275advance(38);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCreatePOModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showViewPOModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showReceiveItemsModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, CreatePurchaseOrderModalComponent, ViewPurchaseOrderModalComponent, ReceiveItemsModalComponent], styles: ['\n\n.purchase-orders[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  position: relative;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #374151;\n  font-weight: 600;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  width: 2rem;\n  height: 2rem;\n  color: #9ca3af;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card.total-pos[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card.pending[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card.approved[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card.total-value[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex: 1;\n  min-width: 300px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 0.75rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 150px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  white-space: nowrap;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%], \n.purchase-orders[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 3rem 2rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.purchase-orders[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem auto;\n}\n.purchase-orders[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.purchase-orders[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin: 0 auto 1rem auto;\n}\n.purchase-orders[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.purchase-orders[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n  margin: 0 0 1.5rem 0;\n}\n.purchase-orders[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], \n.purchase-orders[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, \n.purchase-orders[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-po-number[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-supplier[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-order-date[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-expected-date[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-status[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-items[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-total[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-actions[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-po-number[_ngcontent-%COMP%]   .po-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n  font-family: "Courier New", monospace;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-supplier[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-supplier[_ngcontent-%COMP%]   .supplier-info[_ngcontent-%COMP%]   .supplier-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-order-date[_ngcontent-%COMP%], \n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-expected-date[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 500;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-status[_ngcontent-%COMP%]   .status-badge.status-draft[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-status[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-status[_ngcontent-%COMP%]   .status-badge.status-approved[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-status[_ngcontent-%COMP%]   .status-badge.status-ordered[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-status[_ngcontent-%COMP%]   .status-badge.status-rejected[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-status[_ngcontent-%COMP%]   .status-badge.status-closed[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-status[_ngcontent-%COMP%]   .status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #7f1d1d;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-items[_ngcontent-%COMP%]   .items-info[_ngcontent-%COMP%]   .items-count[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-items[_ngcontent-%COMP%]   .items-info[_ngcontent-%COMP%]   .items-summary[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-total[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #10b981;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-trigger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  border-radius: 0.375rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-trigger[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-trigger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  z-index: 50;\n  min-width: 160px;\n  background-color: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-8px);\n  transition: all 0.2s ease;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: none;\n  color: #374151;\n  font-size: 0.875rem;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.td-actions[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 4rem 2rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  color: #9ca3af;\n  margin: 0 auto 1.5rem auto;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.75rem 0;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 1024px) {\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-po-number[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-supplier[_ngcontent-%COMP%] {\n    min-width: 160px;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-order-date[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-expected-date[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-status[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-items[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-total[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-actions[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n}\n@media (max-width: 768px) {\n  .purchase-orders[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%]   .overview-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-width: auto;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .search-controls[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.75rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.75rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n@media (max-width: 480px) {\n  .purchase-orders[_ngcontent-%COMP%]   .overview-cards-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .control-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .purchase-orders[_ngcontent-%COMP%]   .purchase-orders-table[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n}\n/*# sourceMappingURL=purchase-orders.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-orders", standalone: true, imports: [CommonModule, FormsModule, CreatePurchaseOrderModalComponent, ViewPurchaseOrderModalComponent, ReceiveItemsModalComponent], template: `<div class="purchase-orders">\r
  <!-- Overview Cards Row -->\r
  <div class="overview-cards-row">\r
    <div class="overview-card total-pos">\r
      <div class="card-content">\r
        <div class="card-value">{{ overviewStats.totalPOs }}</div>\r
        <div class="card-label">Total POs</div>\r
      </div>\r
      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
      </svg>\r
    </div>\r
\r
    <div class="overview-card pending">\r
      <div class="card-content">\r
        <div class="card-value">{{ overviewStats.pending }}</div>\r
        <div class="card-label">Pending</div>\r
      </div>\r
      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
    </div>\r
\r
    <div class="overview-card approved">\r
      <div class="card-content">\r
        <div class="card-value">{{ overviewStats.approved }}</div>\r
        <div class="card-label">Approved</div>\r
      </div>\r
      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
      </svg>\r
    </div>\r
\r
    <div class="overview-card total-value">\r
      <div class="card-content">\r
        <div class="card-value">{{ formatCurrency(overviewStats.totalValue) }}</div>\r
        <div class="card-label">Total Value</div>\r
      </div>\r
      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
      </svg>\r
    </div>\r
  </div>\r
\r
  <!-- Control Bar -->\r
  <div class="control-bar">\r
    <div class="search-controls">\r
      <div class="search-container">\r
        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
        </svg>\r
        <input \r
          type="text" \r
          placeholder="Search purchase orders..." \r
          class="search-input"\r
          [(ngModel)]="filters.search"\r
          (input)="applyFilters()">\r
      </div>\r
\r
      <div class="status-dropdown">\r
        <select \r
          class="status-select"\r
          [(ngModel)]="filters.status"\r
          (change)="applyFilters()">\r
          <option value="">All Status</option>\r
          <option value="draft">Draft</option>\r
          <option value="pending">Pending</option>\r
          <option value="approved">Approved</option>\r
          <option value="ordered">Ordered</option>\r
          <option value="rejected">Rejected</option>\r
          <option value="closed">Closed</option>\r
          <option value="cancelled">Cancelled</option>\r
        </select>\r
        <svg class="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
        </svg>\r
      </div>\r
\r
      <button class="btn btn-outline" (click)="clearFilters()">\r
        Clear Filters\r
      </button>\r
    </div>\r
\r
    <div class="action-buttons">\r
      <button class="btn btn-outline" (click)="refreshData()">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
        </svg>\r
        Refresh\r
      </button>\r
      <button class="btn btn-secondary">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
        </svg>\r
        Templates\r
      </button>\r
      <button class="btn btn-secondary">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>\r
        </svg>\r
        Budget Controls\r
      </button>\r
      <button class="btn btn-primary" (click)="openCreatePOModal()">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        Create Purchase Order\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Loading purchase orders...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="error-state">\r
    <div class="error-icon">\r
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
    </div>\r
    <p class="error-message">{{ error }}</p>\r
    <button (click)="refreshData()" class="btn btn-primary">Retry</button>\r
  </div>\r
\r
  <!-- Purchase Orders Table -->\r
  <div *ngIf="!loading && !error" class="purchase-orders-table">\r
    <div class="table-header">\r
      <h3 class="table-title">Purchase Orders ({{ totalItems }})</h3>\r
      <div class="table-actions">\r
        <span class="text-sm text-gray-500">\r
          Page {{ currentPage }} of {{ totalPages }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div *ngIf="purchaseOrders.length === 0" class="empty-state">\r
      <svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
      </svg>\r
      <h3 class="empty-title">No Purchase Orders Found</h3>\r
      <p class="empty-description">No purchase orders match your current filters. Try adjusting your search criteria or create a new purchase order.</p>\r
      <button class="btn btn-primary" (click)="openCreatePOModal()">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        Create Purchase Order\r
      </button>\r
    </div>\r
\r
    <!-- Purchase Orders List -->\r
    <div *ngIf="purchaseOrders.length > 0" class="table-wrapper">\r
      <table class="purchase-orders-table">\r
        <thead>\r
          <tr>\r
            <th class="th-po-number">PO Number</th>\r
            <th class="th-supplier">Supplier</th>\r
            <th class="th-order-date">Order Date</th>\r
            <th class="th-expected-date">Expected Date</th>\r
            <th class="th-status">Status</th>\r
            <th class="th-items">Items</th>\r
            <th class="th-total">Total</th>\r
            <th class="th-actions">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let po of purchaseOrders" class="table-row">\r
            <td class="td-po-number">\r
              <div class="po-number">{{ po.po_number }}</div>\r
            </td>\r
            <td class="td-supplier">\r
              <div class="supplier-info">\r
                <div class="supplier-name">{{ po.supplier?.name || 'Unknown Supplier' }}</div>\r
                <div class="supplier-id">ID: {{ po.supplier_id }}</div>\r
              </div>\r
            </td>\r
            <td class="td-order-date">\r
              {{ formatDate(po.order_date) }}\r
            </td>\r
            <td class="td-expected-date">\r
              {{ formatDate(po.expected_date) }}\r
            </td>\r
            <td class="td-status">\r
              <span \r
                class="status-badge"\r
                [ngClass]="getStatusClass(po.status)">\r
                {{ getStatusLabel(po.status) }}\r
              </span>\r
            </td>\r
            <td class="td-items">\r
              <div class="items-info">\r
                <div class="items-count">{{ po.items?.length || 0 }} items</div>\r
                <div class="items-summary">\r
                  {{ calculateItemsTotal(po.items) }} total qty\r
                </div>\r
              </div>\r
            </td>\r
            <td class="td-total">\r
              <div class="total-amount">{{ formatCurrency(po.total) }}</div>\r
            </td>\r
            <td class="td-actions">\r
              <div class="dropdown-container">\r
                <button class="dropdown-trigger" (click)="po.id && toggleDropdown($event, po.id)">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>\r
                  </svg>\r
                </button>\r
                \r
                <div class="dropdown-menu" [class.show]="po.id && openDropdownId === po.id">\r
                  <button class="dropdown-item" (click)="viewPurchaseOrder(po)">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                    </svg>\r
                    View Details\r
                  </button>\r
                  \r
                  <button class="dropdown-item" (click)="approvePurchaseOrder(po)" *ngIf="po.status === 'pending'">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
                    </svg>\r
                    Approve\r
                  </button>\r
                  \r
                  <button class="dropdown-item" (click)="sendEmail(po)">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\r
                    </svg>\r
                    Send Email\r
                  </button>\r
                  \r
                  <button class="dropdown-item" (click)="markAsOrdered(po)" *ngIf="po.status === 'approved'">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>\r
                    </svg>\r
                    Mark as Ordered\r
                  </button>\r
                </div>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div *ngIf="purchaseOrders.length > 0" class="pagination">\r
      <div class="pagination-info">\r
        Showing {{ (currentPage - 1) * perPage + 1 }} to {{ getMinValue(currentPage * perPage, totalItems) }} of {{ totalItems }} results\r
      </div>\r
      <div class="pagination-buttons">\r
        <button \r
          class="btn btn-outline" \r
          [disabled]="currentPage === 1"\r
          (click)="onPageChange(currentPage - 1)">\r
          Previous\r
        </button>\r
        <button \r
          class="btn btn-outline" \r
          [disabled]="currentPage === totalPages"\r
          (click)="onPageChange(currentPage + 1)">\r
          Next\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Create Purchase Order Modal -->\r
  <app-create-purchase-order-modal\r
    *ngIf="showCreatePOModal"\r
    (closeModal)="closeCreatePOModal()"\r
    (createPurchaseOrder)="onCreatePurchaseOrder($event)">\r
  </app-create-purchase-order-modal>\r
\r
  <!-- View/Edit Purchase Order Modal -->\r
  <app-view-purchase-order-modal\r
    *ngIf="showViewPOModal"\r
    [purchaseOrder]="selectedPurchaseOrder"\r
    (closeModal)="closeViewPOModal()"\r
    (purchaseOrderUpdated)="onPurchaseOrderUpdated($event)">\r
  </app-view-purchase-order-modal>\r
\r
  <!-- Receive Items Modal -->\r
  <app-receive-items-modal\r
    *ngIf="showReceiveItemsModal"\r
    [purchaseOrder]="selectedPurchaseOrder"\r
    (closeModal)="closeReceiveItemsModal()"\r
    (itemsReceived)="onItemsReceived()">\r
  </app-receive-items-modal>\r
</div>\r
`, styles: ['/* src/app/inventory/components/purchase-orders/purchase-orders.component.scss */\n.purchase-orders {\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.purchase-orders .overview-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.purchase-orders .overview-cards-row .overview-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  position: relative;\n}\n.purchase-orders .overview-cards-row .overview-card .card-content .card-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n.purchase-orders .overview-cards-row .overview-card .card-content .card-label {\n  font-size: 1rem;\n  color: #374151;\n  font-weight: 600;\n}\n.purchase-orders .overview-cards-row .overview-card .card-icon {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  width: 2rem;\n  height: 2rem;\n  color: #9ca3af;\n}\n.purchase-orders .overview-cards-row .overview-card.total-pos .card-icon {\n  color: #3b82f6;\n}\n.purchase-orders .overview-cards-row .overview-card.pending .card-icon {\n  color: #f59e0b;\n}\n.purchase-orders .overview-cards-row .overview-card.approved .card-icon {\n  color: #10b981;\n}\n.purchase-orders .overview-cards-row .overview-card.total-value .card-icon {\n  color: #8b5cf6;\n}\n.purchase-orders .control-bar {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.purchase-orders .control-bar .search-controls {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex: 1;\n  min-width: 300px;\n}\n.purchase-orders .control-bar .search-controls .search-container {\n  position: relative;\n  flex: 1;\n}\n.purchase-orders .control-bar .search-controls .search-container .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.purchase-orders .control-bar .search-controls .search-container .search-input {\n  width: 100%;\n  padding: 0.75rem 0.75rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.purchase-orders .control-bar .search-controls .search-container .search-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.purchase-orders .control-bar .search-controls .status-dropdown {\n  position: relative;\n  min-width: 150px;\n}\n.purchase-orders .control-bar .search-controls .status-dropdown .status-select {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.purchase-orders .control-bar .search-controls .status-dropdown .status-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.purchase-orders .control-bar .search-controls .status-dropdown .dropdown-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.purchase-orders .control-bar .action-buttons {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.purchase-orders .control-bar .action-buttons .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  white-space: nowrap;\n}\n.purchase-orders .control-bar .action-buttons .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.purchase-orders .control-bar .action-buttons .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.purchase-orders .control-bar .action-buttons .btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.purchase-orders .control-bar .action-buttons .btn.btn-primary:hover {\n  background-color: #2563eb;\n}\n.purchase-orders .control-bar .action-buttons .btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.purchase-orders .loading-state,\n.purchase-orders .error-state {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 3rem 2rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.purchase-orders .loading-state .loading-spinner,\n.purchase-orders .error-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem auto;\n}\n.purchase-orders .loading-state .error-icon,\n.purchase-orders .error-state .error-icon {\n  color: #ef4444;\n  margin: 0 auto 1rem auto;\n}\n.purchase-orders .loading-state p,\n.purchase-orders .error-state p {\n  color: #6b7280;\n  font-size: 1.125rem;\n  margin: 0 0 1.5rem 0;\n}\n.purchase-orders .loading-state .btn,\n.purchase-orders .error-state .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders .loading-state .btn:hover,\n.purchase-orders .error-state .btn:hover {\n  background-color: #2563eb;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.purchase-orders .purchase-orders-table {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.purchase-orders .purchase-orders-table .table-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.purchase-orders .purchase-orders-table .table-header .table-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.purchase-orders .purchase-orders-table .table-header .table-actions {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.purchase-orders .purchase-orders-table .table-wrapper {\n  overflow-x: auto;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead th.th-po-number {\n  min-width: 140px;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead th.th-supplier {\n  min-width: 180px;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead th.th-order-date {\n  min-width: 120px;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead th.th-expected-date {\n  min-width: 120px;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead th.th-status {\n  min-width: 100px;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead th.th-items {\n  min-width: 120px;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead th.th-total {\n  min-width: 120px;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table thead th.th-actions {\n  min-width: 120px;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr {\n  border-bottom: 1px solid #f3f4f6;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr:last-child {\n  border-bottom: none;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-po-number .po-number {\n  font-weight: 600;\n  color: #3b82f6;\n  font-family: "Courier New", monospace;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-supplier .supplier-info .supplier-name {\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-supplier .supplier-info .supplier-id {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-order-date,\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-expected-date {\n  color: #374151;\n  font-weight: 500;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-status .status-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-status .status-badge.status-draft {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-status .status-badge.status-pending {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-status .status-badge.status-approved {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-status .status-badge.status-ordered {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-status .status-badge.status-rejected {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-status .status-badge.status-closed {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-status .status-badge.status-cancelled {\n  background-color: #fef2f2;\n  color: #7f1d1d;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-items .items-info .items-count {\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-items .items-info .items-summary {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-total .total-amount {\n  font-weight: 600;\n  color: #10b981;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container {\n  position: relative;\n  display: inline-block;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-trigger {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  border-radius: 0.375rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-trigger:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-trigger svg {\n  width: 1rem;\n  height: 1rem;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-menu {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  z-index: 50;\n  min-width: 160px;\n  background-color: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-8px);\n  transition: all 0.2s ease;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-menu.show {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-menu .dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  background: none;\n  color: #374151;\n  font-size: 0.875rem;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-menu .dropdown-item:first-child {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-menu .dropdown-item:last-child {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-menu .dropdown-item:hover {\n  background-color: #f9fafb;\n}\n.purchase-orders .purchase-orders-table .table-wrapper table tbody tr td.td-actions .dropdown-container .dropdown-menu .dropdown-item svg {\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n}\n.purchase-orders .purchase-orders-table .pagination {\n  padding: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.purchase-orders .purchase-orders-table .pagination .pagination-info {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.purchase-orders .purchase-orders-table .pagination .pagination-buttons {\n  display: flex;\n  gap: 0.5rem;\n}\n.purchase-orders .purchase-orders-table .pagination .pagination-buttons .btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders .purchase-orders-table .pagination .pagination-buttons .btn:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.purchase-orders .purchase-orders-table .pagination .pagination-buttons .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.purchase-orders .empty-state {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 4rem 2rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.purchase-orders .empty-state .empty-icon {\n  width: 4rem;\n  height: 4rem;\n  color: #9ca3af;\n  margin: 0 auto 1.5rem auto;\n}\n.purchase-orders .empty-state .empty-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.75rem 0;\n}\n.purchase-orders .empty-state .empty-description {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.purchase-orders .empty-state .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.purchase-orders .empty-state .btn:hover {\n  background-color: #2563eb;\n}\n.purchase-orders .empty-state .btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 1024px) {\n  .purchase-orders .purchase-orders-table .table-wrapper table thead th.th-po-number {\n    min-width: 120px;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table thead th.th-supplier {\n    min-width: 160px;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table thead th.th-order-date {\n    min-width: 100px;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table thead th.th-expected-date {\n    min-width: 100px;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table thead th.th-status {\n    min-width: 80px;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table thead th.th-items {\n    min-width: 100px;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table thead th.th-total {\n    min-width: 100px;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table thead th.th-actions {\n    min-width: 100px;\n  }\n}\n@media (max-width: 768px) {\n  .purchase-orders {\n    padding: 1rem;\n  }\n  .purchase-orders .overview-cards-row {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .purchase-orders .overview-cards-row .overview-card {\n    padding: 1rem;\n  }\n  .purchase-orders .overview-cards-row .overview-card .card-content .card-value {\n    font-size: 1.5rem;\n  }\n  .purchase-orders .overview-cards-row .overview-card .card-content .card-label {\n    font-size: 0.875rem;\n  }\n  .purchase-orders .overview-cards-row .overview-card .card-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .purchase-orders .control-bar {\n    padding: 1rem;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .purchase-orders .control-bar .search-controls {\n    flex-direction: column;\n    min-width: auto;\n  }\n  .purchase-orders .control-bar .search-controls .search-container {\n    min-width: auto;\n  }\n  .purchase-orders .control-bar .search-controls .status-dropdown {\n    min-width: auto;\n  }\n  .purchase-orders .control-bar .action-buttons {\n    justify-content: stretch;\n  }\n  .purchase-orders .control-bar .action-buttons .btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .purchase-orders .purchase-orders-table .table-header {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table thead th {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.75rem;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table tbody td {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.75rem;\n  }\n  .purchase-orders .purchase-orders-table .pagination {\n    padding: 1rem;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n  }\n  .purchase-orders .purchase-orders-table .pagination .pagination-buttons {\n    justify-content: center;\n  }\n  .purchase-orders .empty-state {\n    padding: 2rem 1rem;\n  }\n  .purchase-orders .empty-state .empty-icon {\n    width: 3rem;\n    height: 3rem;\n  }\n  .purchase-orders .empty-state .empty-title {\n    font-size: 1.25rem;\n  }\n  .purchase-orders .empty-state .empty-description {\n    font-size: 0.875rem;\n  }\n}\n@media (max-width: 480px) {\n  .purchase-orders .overview-cards-row {\n    grid-template-columns: 1fr;\n  }\n  .purchase-orders .control-bar .action-buttons {\n    flex-direction: column;\n  }\n  .purchase-orders .control-bar .action-buttons .btn {\n    width: 100%;\n  }\n  .purchase-orders .purchase-orders-table .table-wrapper table {\n    min-width: 600px;\n  }\n}\n/*# sourceMappingURL=purchase-orders.component.css.map */\n'] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseOrdersComponent, { className: "PurchaseOrdersComponent", filePath: "src/app/inventory/components/purchase-orders/purchase-orders.component.ts", lineNumber: 16 });
})();
export {
  PurchaseOrdersComponent
};
//# sourceMappingURL=chunk-56CFYZIH.js.map
