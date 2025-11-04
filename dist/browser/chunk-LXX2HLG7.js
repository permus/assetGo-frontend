import {
  InventoryAnalyticsService
} from "./chunk-FQPE6O4E.js";
import {
  DeleteConfirmationModalComponent
} from "./chunk-VSCYFJEH.js";
import {
  ModuleAccessService
} from "./chunk-QO55V45C.js";
import "./chunk-6M5LH3XM.js";
import {
  ToastService
} from "./chunk-7NKQIE52.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-LZKWF3AL.js";
import {
  CurrencyService
} from "./chunk-RPSM5X2G.js";
import {
  PreferencesService
} from "./chunk-3QBMOR5J.js";
import {
  AuthService
} from "./chunk-BGMQUXYP.js";
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
} from "./chunk-ISERUI2H.js";
import "./chunk-OR4RIGW3.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SCVX3V3B.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/inventory/components/add-part-modal/add-part-modal.component.ts
function AddPartModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("part_number"), " ");
  }
}
function AddPartModalComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("name"), " ");
  }
}
function AddPartModalComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("uom"), " ");
  }
}
function AddPartModalComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275element(1, "span", 52);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Updating..." : "Creating...", " ");
  }
}
function AddPartModalComponent_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Update Part" : "Create Part", " ");
  }
}
var AddPartModalComponent = class _AddPartModalComponent {
  fb;
  closeModal = new EventEmitter();
  createPart = new EventEmitter();
  updatePart = new EventEmitter();
  manageLoading = false;
  part = null;
  isEditMode = false;
  partForm;
  constructor(fb) {
    this.fb = fb;
    this.partForm = this.fb.group({
      part_number: ["", [Validators.required]],
      name: ["", [Validators.required]],
      description: [""],
      uom: ["", [Validators.required]],
      unit_cost: [""],
      category_id: [""],
      reorder_point: [0],
      reorder_qty: [1],
      barcode: [""],
      status: ["active"],
      abc_class: [""]
    });
  }
  ngOnInit() {
    if (this.isEditMode && this.part) {
      this.partForm.patchValue({
        part_number: this.part.part_number,
        name: this.part.name,
        description: this.part.description,
        uom: this.part.uom,
        unit_cost: this.part.unit_cost,
        category_id: this.part.category_id,
        reorder_point: this.part.reorder_point,
        reorder_qty: this.part.reorder_qty,
        barcode: this.part.barcode,
        status: this.part.status,
        abc_class: this.part.abc_class
      });
    } else {
      this.partForm.patchValue({
        part_number: "",
        name: "",
        description: "",
        uom: "",
        unit_cost: "",
        category_id: "",
        reorder_point: 0,
        reorder_qty: 1,
        barcode: "",
        status: "active",
        abc_class: ""
      });
    }
  }
  onSubmit() {
    console.log("Form submitted");
    console.log("Form value:", this.partForm.value);
    console.log("Status:", this.partForm.get("status")?.value);
    console.log("ABC Class:", this.partForm.get("abc_class")?.value);
    if (this.partForm.valid) {
      const formValue = this.partForm.value;
      if (this.isEditMode) {
        const updateData = {
          name: formValue.name,
          part_number: formValue.part_number,
          description: formValue.description || void 0,
          uom: formValue.uom,
          unit_cost: formValue.unit_cost ? parseFloat(formValue.unit_cost) : void 0,
          category_id: formValue.category_id ? parseInt(formValue.category_id) : void 0,
          reorder_point: formValue.reorder_point ? parseInt(formValue.reorder_point) : void 0,
          reorder_qty: formValue.reorder_qty ? parseInt(formValue.reorder_qty) : void 0,
          barcode: formValue.barcode || void 0,
          status: formValue.status,
          abc_class: formValue.abc_class || void 0
        };
        this.updatePart.emit(updateData);
      } else {
        const partData = {
          part_number: formValue.part_number,
          name: formValue.name,
          description: formValue.description || void 0,
          uom: formValue.uom,
          unit_cost: formValue.unit_cost ? parseFloat(formValue.unit_cost) : void 0,
          category_id: formValue.category_id ? parseInt(formValue.category_id) : void 0,
          reorder_point: formValue.reorder_point ? parseInt(formValue.reorder_point) : void 0,
          reorder_qty: formValue.reorder_qty ? parseInt(formValue.reorder_qty) : void 0,
          barcode: formValue.barcode || void 0,
          status: formValue.status,
          abc_class: formValue.abc_class || void 0
        };
        this.createPart.emit(partData);
      }
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
  getStatusOptions() {
    return ["active", "inactive", "discontinued"];
  }
  getAbcClassOptions() {
    return ["A", "B", "C"];
  }
  static \u0275fac = function AddPartModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddPartModalComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPartModalComponent, selectors: [["app-add-part-modal"]], inputs: { manageLoading: "manageLoading", part: "part", isEditMode: "isEditMode" }, outputs: { closeModal: "closeModal", createPart: "createPart", updatePart: "updatePart" }, decls: 111, vars: 13, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "header-left"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "modal-title"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "section-title"], [1, "form-row"], [1, "form-field"], ["for", "part_number", 1, "field-label"], [1, "required"], ["type", "text", "id", "part_number", "formControlName", "part_number", "placeholder", "Enter part number", 1, "form-input"], ["class", "error-message", 4, "ngIf"], ["for", "name", 1, "field-label"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter part name", 1, "form-input"], ["for", "description", 1, "field-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter part description", 1, "form-textarea"], ["for", "category_id", 1, "field-label"], ["type", "number", "id", "category_id", "formControlName", "category_id", "placeholder", "Enter category ID", 1, "form-input"], ["for", "barcode", 1, "field-label"], ["type", "text", "id", "barcode", "formControlName", "barcode", "placeholder", "Enter barcode", 1, "form-input"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], ["for", "uom", 1, "field-label"], ["type", "text", "id", "uom", "formControlName", "uom", "placeholder", "e.g., pcs, kg, m", 1, "form-input"], ["for", "unit_cost", 1, "field-label"], ["type", "number", "id", "unit_cost", "formControlName", "unit_cost", "placeholder", "0.00", "step", "0.01", "min", "0", 1, "form-input"], ["for", "reorder_point", 1, "field-label"], ["type", "number", "id", "reorder_point", "formControlName", "reorder_point", "placeholder", "0", "min", "0", 1, "form-input"], ["for", "reorder_qty", 1, "field-label"], ["type", "number", "id", "reorder_qty", "formControlName", "reorder_qty", "placeholder", "1", "min", "1", 1, "form-input"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"], ["for", "status", 1, "field-label"], ["id", "status", "formControlName", "status", 1, "form-input", "form-select"], ["value", "active"], ["value", "inactive"], ["value", "discontinued"], ["for", "abc_class", 1, "field-label"], ["id", "abc_class", "formControlName", "abc_class", 1, "form-input", "form-select"], ["value", ""], ["value", "A"], ["value", "B"], ["value", "C"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error-message"], [1, "border-t", "border-white", "border-opacity-25", "ml-2", "w-4", "h-4", "rounded-full", "animate-spin", "inline-block"]], template: function AddPartModalComponent_Template(rf, ctx) {
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
      \u0275\u0275text(7);
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
      \u0275\u0275text(25, " Part Name ");
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
      \u0275\u0275text(37, "Category ID");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14)(40, "label", 25);
      \u0275\u0275text(41, "Barcode");
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
      \u0275\u0275text(48, "Specifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 13)(50, "div", 14)(51, "label", 28);
      \u0275\u0275text(52, " Unit of Measure ");
      \u0275\u0275elementStart(53, "span", 16);
      \u0275\u0275text(54, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(55, "input", 29);
      \u0275\u0275template(56, AddPartModalComponent_div_56_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 14)(58, "label", 30);
      \u0275\u0275text(59, "Unit Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "input", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 8)(62, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(63, "svg", 10);
      \u0275\u0275element(64, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(65, "h3", 12);
      \u0275\u0275text(66, "Stock Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 13)(68, "div", 14)(69, "label", 32);
      \u0275\u0275text(70, "Reorder Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "input", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 14)(73, "label", 34);
      \u0275\u0275text(74, "Reorder Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 8)(77, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(78, "svg", 10);
      \u0275\u0275element(79, "path", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(80, "h3", 12);
      \u0275\u0275text(81, "Classification");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 13)(83, "div", 14)(84, "label", 37);
      \u0275\u0275text(85, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "select", 38)(87, "option", 39);
      \u0275\u0275text(88, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option", 40);
      \u0275\u0275text(90, "Inactive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "option", 41);
      \u0275\u0275text(92, "Discontinued");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "div", 14)(94, "label", 42);
      \u0275\u0275text(95, "ABC Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "select", 43)(97, "option", 44);
      \u0275\u0275text(98, "Select ABC Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "option", 45);
      \u0275\u0275text(100, "Class A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "option", 46);
      \u0275\u0275text(102, "Class B");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "option", 47);
      \u0275\u0275text(104, "Class C");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(105, "div", 48)(106, "button", 49);
      \u0275\u0275listener("click", function AddPartModalComponent_Template_button_click_106_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(107, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "button", 50);
      \u0275\u0275template(109, AddPartModalComponent_Conditional_109_Template, 2, 1)(110, AddPartModalComponent_Conditional_110_Template, 1, 1);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_4_0;
      let tmp_6_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Part" : "Add New Part");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.partForm);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("error", ((tmp_2_0 = ctx.partForm.get("part_number")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx.partForm.get("part_number")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("part_number"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ((tmp_4_0 = ctx.partForm.get("name")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx.partForm.get("name")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("name"));
      \u0275\u0275advance(26);
      \u0275\u0275classProp("error", ((tmp_6_0 = ctx.partForm.get("uom")) == null ? null : tmp_6_0.errors) && ((tmp_6_0 = ctx.partForm.get("uom")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("uom"));
      \u0275\u0275advance(52);
      \u0275\u0275property("disabled", !ctx.partForm.valid);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.manageLoading ? 109 : 110);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: [`

.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}
.modal-container[_ngcontent-%COMP%] {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;
}
.modal-container[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 0;
  display: none;
}
@keyframes _ngcontent-%COMP%_modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.modal-header[_ngcontent-%COMP%] {
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #3b82f6;
  width: 1.5rem;
  height: 1.5rem;
}
.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}
.modal-form[_ngcontent-%COMP%] {
  padding: 1rem 1.5rem 1.5rem 1.5rem;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-of-type {
  margin-bottom: 1.5rem;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1.25rem;
  height: 1.25rem;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%] {
  color: #10b981;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:nth-child(2)   svg[_ngcontent-%COMP%] {
  color: #f59e0b;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:nth-child(3)   svg[_ngcontent-%COMP%] {
  color: #8b5cf6;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {
  color: #ef4444;
  font-weight: 600;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], 
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%], 
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #111827;
  background-color: white;
  transition: all 0.2s;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, 
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus, 
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, 
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder, 
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]::placeholder {
  color: #9ca3af;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%], 
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea.error[_ngcontent-%COMP%], 
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select.error[_ngcontent-%COMP%] {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
}
.modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
.modal-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}
.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {
  background-color: #f3f4f6;
  color: #374151;
}
.modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: #e5e7eb;
}
.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {
  background-color: #3b82f6;
  color: white;
}
.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #2563eb;
}
.modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}
@media (max-width: 768px) {
  .modal-container[_ngcontent-%COMP%] {
    max-width: 95vw;
    margin: 0.5rem;
  }
  .modal-form[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .modal-footer[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .modal-header[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
    font-size: 1.25rem;
  }
  .modal-form[_ngcontent-%COMP%] {
    padding: 0.75rem;
  }
  .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
}
/*# sourceMappingURL=add-part-modal.component.css.map */`] });
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
        <h2 class="modal-title">{{ isEditMode ? 'Edit Part' : 'Add New Part' }}</h2>\r
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
            <label for="part_number" class="field-label">\r
              Part Number <span class="required">*</span>\r
            </label>\r
            <input\r
              type="text"\r
              id="part_number"\r
              formControlName="part_number"\r
              class="form-input"\r
              [class.error]="partForm.get('part_number')?.errors && partForm.get('part_number')?.touched"\r
              placeholder="Enter part number">\r
            <div class="error-message" *ngIf="getFieldError('part_number')">\r
              {{ getFieldError('part_number') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-field">\r
            <label for="name" class="field-label">\r
             Part Name <span class="required">*</span>\r
            </label>\r
            <input\r
              type="text"\r
              id="name"\r
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
          <textarea\r
            id="description"\r
            formControlName="description"\r
            class="form-textarea"\r
            rows="3"\r
            placeholder="Enter part description"></textarea>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-field">\r
            <label for="category_id" class="field-label">Category ID</label>\r
            <input\r
              type="number"\r
              id="category_id"\r
              formControlName="category_id"\r
              class="form-input"\r
              placeholder="Enter category ID">\r
          </div>\r
\r
          <div class="form-field">\r
            <label for="barcode" class="field-label">Barcode</label>\r
            <input\r
              type="text"\r
              id="barcode"\r
              formControlName="barcode"\r
              class="form-input"\r
              placeholder="Enter barcode">\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Specifications Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
          </svg>\r
          <h3 class="section-title">Specifications</h3>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-field">\r
            <label for="uom" class="field-label">\r
              Unit of Measure <span class="required">*</span>\r
            </label>\r
            <input\r
              type="text"\r
              id="uom"\r
              formControlName="uom"\r
              class="form-input"\r
              [class.error]="partForm.get('uom')?.errors && partForm.get('uom')?.touched"\r
              placeholder="e.g., pcs, kg, m">\r
            <div class="error-message" *ngIf="getFieldError('uom')">\r
              {{ getFieldError('uom') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-field">\r
            <label for="unit_cost" class="field-label">Unit Cost</label>\r
            <input\r
              type="number"\r
              id="unit_cost"\r
              formControlName="unit_cost"\r
              class="form-input"\r
              placeholder="0.00"\r
              step="0.01"\r
              min="0">\r
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
            <label for="reorder_point" class="field-label">Reorder Point</label>\r
            <input\r
              type="number"\r
              id="reorder_point"\r
              formControlName="reorder_point"\r
              class="form-input"\r
              placeholder="0"\r
              min="0">\r
          </div>\r
\r
          <div class="form-field">\r
            <label for="reorder_qty" class="field-label">Reorder Quantity</label>\r
            <input\r
              type="number"\r
              id="reorder_qty"\r
              formControlName="reorder_qty"\r
              class="form-input"\r
              placeholder="1"\r
              min="1">\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Classification Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>\r
          </svg>\r
          <h3 class="section-title">Classification</h3>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-field">\r
            <label for="status" class="field-label">Status</label>\r
            <select\r
              id="status"\r
              formControlName="status"\r
              class="form-input form-select">\r
              <option value="active">Active</option>\r
              <option value="inactive">Inactive</option>\r
              <option value="discontinued">Discontinued</option>\r
            </select>\r
          </div>\r
\r
          <div class="form-field">\r
            <label for="abc_class" class="field-label">ABC Class</label>\r
            <select\r
              id="abc_class"\r
              formControlName="abc_class"\r
              class="form-input form-select">\r
              <option value="">Select ABC Class</option>\r
              <option value="A">Class A</option>\r
              <option value="B">Class B</option>\r
              <option value="C">Class C</option>\r
            </select>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Modal Footer -->\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="onCancel()">\r
          Cancel\r
        </button>\r
        <button type="submit" class="btn btn-primary" [disabled]="!partForm.valid">\r
\r
          @if (manageLoading) {\r
            {{ isEditMode ? 'Updating...' : 'Creating...' }}\r
            <span class="border-t border-white border-opacity-25 ml-2 w-4 h-4 rounded-full animate-spin inline-block"></span>\r
          } @else {\r
            {{ isEditMode ? 'Update Part' : 'Create Part' }}\r
          }\r
\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: [`/* src/app/inventory/components/add-part-modal/add-part-modal.component.scss */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}
.modal-container {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  animation: modalSlideIn 0.3s ease-out;
}
.modal-container::-webkit-scrollbar {
  width: 0;
  display: none;
}
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.modal-header {
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.modal-header .header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.modal-header .header-left svg {
  color: #3b82f6;
  width: 1.5rem;
  height: 1.5rem;
}
.modal-header .header-left .modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}
.modal-form {
  padding: 1rem 1.5rem 1.5rem 1.5rem;
}
.modal-form .form-section {
  margin-bottom: 2rem;
}
.modal-form .form-section:last-of-type {
  margin-bottom: 1.5rem;
}
.modal-form .form-section .section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
}
.modal-form .form-section .section-header svg {
  width: 1.25rem;
  height: 1.25rem;
}
.modal-form .form-section .section-header .section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.modal-form .form-section .section-header:first-child svg {
  color: #10b981;
}
.modal-form .form-section .section-header:nth-child(2) svg {
  color: #f59e0b;
}
.modal-form .form-section .section-header:nth-child(3) svg {
  color: #8b5cf6;
}
.modal-form .form-section .form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}
.modal-form .form-section .form-row:last-child {
  margin-bottom: 0;
}
.modal-form .form-section .form-field {
  margin-bottom: 1rem;
}
.modal-form .form-section .form-field:last-child {
  margin-bottom: 0;
}
.modal-form .form-section .form-field .field-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.modal-form .form-section .form-field .field-label .required {
  color: #ef4444;
  font-weight: 600;
}
.modal-form .form-section .form-field .form-input,
.modal-form .form-section .form-field .form-textarea,
.modal-form .form-section .form-field .form-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #111827;
  background-color: white;
  transition: all 0.2s;
}
.modal-form .form-section .form-field .form-input:focus,
.modal-form .form-section .form-field .form-textarea:focus,
.modal-form .form-section .form-field .form-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.modal-form .form-section .form-field .form-input::placeholder,
.modal-form .form-section .form-field .form-textarea::placeholder,
.modal-form .form-section .form-field .form-select::placeholder {
  color: #9ca3af;
}
.modal-form .form-section .form-field .form-input.error,
.modal-form .form-section .form-field .form-textarea.error,
.modal-form .form-section .form-field .form-select.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
.modal-form .form-section .form-field .form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
.modal-form .form-section .form-field .form-textarea {
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
}
.modal-form .form-section .form-field .error-message {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}
.modal-footer .btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.modal-footer .btn.btn-secondary {
  background-color: #f3f4f6;
  color: #374151;
}
.modal-footer .btn.btn-secondary:hover {
  background-color: #e5e7eb;
}
.modal-footer .btn.btn-primary {
  background-color: #3b82f6;
  color: white;
}
.modal-footer .btn.btn-primary:hover:not(:disabled) {
  background-color: #2563eb;
}
.modal-footer .btn.btn-primary:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}
@media (max-width: 768px) {
  .modal-container {
    max-width: 95vw;
    margin: 0.5rem;
  }
  .modal-form {
    padding: 1rem;
  }
  .modal-form .form-section .form-row {
    grid-template-columns: 1fr;
  }
  .modal-footer {
    flex-direction: column;
  }
  .modal-footer .btn {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .modal-header {
    padding: 1rem;
  }
  .modal-header .header-left .modal-title {
    font-size: 1.25rem;
  }
  .modal-form {
    padding: 0.75rem;
  }
  .modal-form .form-section .section-header .section-title {
    font-size: 1rem;
  }
}
/*# sourceMappingURL=add-part-modal.component.css.map */
`] }]
  }], () => [{ type: FormBuilder }], { closeModal: [{
    type: Output
  }], createPart: [{
    type: Output
  }], updatePart: [{
    type: Output
  }], manageLoading: [{
    type: Input
  }], part: [{
    type: Input
  }], isEditMode: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPartModalComponent, { className: "AddPartModalComponent", filePath: "src/app/inventory/components/add-part-modal/add-part-modal.component.ts", lineNumber: 13 });
})();

// src/app/inventory/components/parts-catalog/archive-confirmation-modal/archive-confirmation-modal.component.ts
function ArchiveConfirmationModalComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div")(5, "h4", 34);
    \u0275\u0275text(6, "Warning: Part is linked to open Purchase Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 35);
    \u0275\u0275text(8, " This part is currently linked to open purchase orders. Archiving it may affect ongoing procurement processes. ");
    \u0275\u0275elementEnd()()()();
  }
}
function ArchiveConfirmationModalComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 4)(2, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ArchiveConfirmationModalComponent_div_0_div_20_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.forceArchive, $event) || (ctx_r1.forceArchive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4, " Force archive despite open Purchase Orders ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 38);
    \u0275\u0275text(6, " \u26A0\uFE0F Warning: This will archive the part even though it's linked to active Purchase Orders. This action cannot be easily undone. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.forceArchive);
  }
}
function ArchiveConfirmationModalComponent_div_0_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Archive Part");
    \u0275\u0275elementEnd();
  }
}
function ArchiveConfirmationModalComponent_div_0_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "circle", 41)(3, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Archiving...");
    \u0275\u0275elementEnd()();
  }
}
function ArchiveConfirmationModalComponent_div_0_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function ArchiveConfirmationModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "path", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275template(13, ArchiveConfirmationModalComponent_div_0_div_13_Template, 9, 0, "div", 13);
    \u0275\u0275elementStart(14, "div", 14)(15, "label", 15);
    \u0275\u0275text(16, "Archive Reason (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ArchiveConfirmationModalComponent_div_0_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.archiveReason, $event) || (ctx_r1.archiveReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 17);
    \u0275\u0275text(19, "This will be recorded in the audit trail");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ArchiveConfirmationModalComponent_div_0_div_20_Template, 7, 1, "div", 18);
    \u0275\u0275elementStart(21, "div", 19)(22, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 21);
    \u0275\u0275element(24, "path", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "div", 22)(26, "h3", 23);
    \u0275\u0275text(27, " Are you sure you want to archive this part? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 24);
    \u0275\u0275text(29, " It will no longer appear in purchase orders and will be hidden from the main parts list. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 25)(31, "button", 26);
    \u0275\u0275listener("click", function ArchiveConfirmationModalComponent_div_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(32, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 27);
    \u0275\u0275listener("click", function ArchiveConfirmationModalComponent_div_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275template(34, ArchiveConfirmationModalComponent_div_0_span_34_Template, 2, 0, "span", 28)(35, ArchiveConfirmationModalComponent_div_0_span_35_Template, 6, 0, "span", 29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.partName ? "Archive " + ctx_r1.partName : "Archive Part", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.hasOpenPOs);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.archiveReason);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.hasOpenPOs && ctx_r1.canForceArchive);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var ArchiveConfirmationModalComponent = class _ArchiveConfirmationModalComponent {
  isOpen = false;
  partName = "";
  hasOpenPOs = false;
  canForceArchive = false;
  // New input for role-based access
  closeModal = new EventEmitter();
  confirmArchive = new EventEmitter();
  loading = false;
  archiveReason = "";
  forceArchive = false;
  onConfirm() {
    this.loading = true;
    this.confirmArchive.emit({
      reason: this.archiveReason,
      force: this.forceArchive
    });
    setTimeout(() => {
      this.loading = false;
      this.archiveReason = "";
      this.forceArchive = false;
    }, 2e3);
  }
  onCancel() {
    if (this.loading)
      return;
    this.archiveReason = "";
    this.forceArchive = false;
    this.closeModal.emit();
  }
  static \u0275fac = function ArchiveConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArchiveConfirmationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArchiveConfirmationModalComponent, selectors: [["app-archive-confirmation-modal"]], inputs: { isOpen: "isOpen", partName: "partName", hasOpenPOs: "hasOpenPOs", canForceArchive: "canForceArchive" }, outputs: { closeModal: "closeModal", confirmArchive: "confirmArchive" }, decls: 1, vars: 1, consts: [["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-md", "w-full"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-orange-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-orange-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H19a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], ["class", "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "mb-6"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["rows", "3", "placeholder", "Enter reason for archiving this part...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-orange-500", "focus:border-transparent", "resize-none", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], [1, "text-xs", "text-gray-500", "mt-1"], ["class", "mb-6", 4, "ngIf"], [1, "flex", "justify-center", "mb-4"], [1, "w-16", "h-16", "bg-orange-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-orange-600"], [1, "text-center", "mb-6"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-2"], [1, "text-gray-600"], [1, "flex", "items-center", "justify-end", "space-x-3"], [1, "px-6", "py-2", "text-gray-600", "hover:text-gray-800", "font-medium", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], [1, "px-6", "py-2", "bg-orange-600", "text-white", "font-medium", "rounded-lg", "hover:bg-orange-700", "focus:outline-none", "focus:ring-2", "focus:ring-orange-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "mb-6", "p-4", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "flex", "items-start", "space-x-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-600", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "text-sm", "font-semibold", "text-red-800"], [1, "text-sm", "text-red-700", "mt-1"], ["type", "checkbox", 1, "w-4", "h-4", "text-orange-600", "bg-gray-100", "border-gray-300", "rounded", "focus:ring-orange-500", "focus:ring-2", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-medium", "text-gray-700"], [1, "text-xs", "text-red-600", "mt-1", "ml-7"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function ArchiveConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ArchiveConfirmationModalComponent_div_0_Template, 36, 11, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=archive-confirmation-modal.component.css.map */"], data: { animation: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArchiveConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-archive-confirmation-modal", standalone: true, imports: [CommonModule, FormsModule], animations: [
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
    ], template: `<!-- Archive Confirmation Modal -->\r
<div *ngIf="isOpen"\r
     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4"\r
     [@backdropAnimation]>\r
  <!-- Modal Container -->\r
  <div class="bg-white rounded-2xl shadow-xl max-w-md w-full"\r
       [@modalAnimation]>\r
    <!-- Modal Header -->\r
    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r
      <div class="flex items-center space-x-3">\r
        <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H19a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>\r
          </svg>\r
        </div>\r
        <h2 class="text-xl font-semibold text-gray-900">\r
          {{ partName ? 'Archive ' + partName : 'Archive Part' }}\r
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
      <!-- Warning for Open POs -->\r
      <div *ngIf="hasOpenPOs" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">\r
        <div class="flex items-start space-x-3">\r
          <svg class="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
          </svg>\r
          <div>\r
            <h4 class="text-sm font-semibold text-red-800">Warning: Part is linked to open Purchase Orders</h4>\r
            <p class="text-sm text-red-700 mt-1">\r
              This part is currently linked to open purchase orders. Archiving it may affect ongoing procurement processes.\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Archive Reason Input -->\r
      <div class="mb-6">\r
        <label class="block text-sm font-medium text-gray-700 mb-2">Archive Reason (Optional)</label>\r
        <textarea\r
          [(ngModel)]="archiveReason"\r
          rows="3"\r
          placeholder="Enter reason for archiving this part..."\r
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none placeholder-gray-400"></textarea>\r
        <p class="text-xs text-gray-500 mt-1">This will be recorded in the audit trail</p>\r
      </div>\r
\r
      <!-- Force Archive Option (only if has open POs and user has permission) -->\r
      <div *ngIf="hasOpenPOs && canForceArchive" class="mb-6">\r
        <label class="flex items-center space-x-3">\r
          <input\r
            type="checkbox"\r
            [(ngModel)]="forceArchive"\r
            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2">\r
          <span class="text-sm font-medium text-gray-700">\r
            Force archive despite open Purchase Orders\r
          </span>\r
        </label>\r
        <p class="text-xs text-red-600 mt-1 ml-7">\r
          \u26A0\uFE0F Warning: This will archive the part even though it's linked to active Purchase Orders. This action cannot be easily undone.\r
        </p>\r
      </div>\r
\r
      <!-- Warning Icon -->\r
      <div class="flex justify-center mb-4">\r
        <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">\r
          <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H19a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>\r
          </svg>\r
        </div>\r
      </div>\r
\r
      <!-- Confirmation Message -->\r
      <div class="text-center mb-6">\r
        <h3 class="text-lg font-semibold text-gray-900 mb-2">\r
          Are you sure you want to archive this part?\r
        </h3>\r
        <p class="text-gray-600">\r
          It will no longer appear in purchase orders and will be hidden from the main parts list.\r
        </p>\r
      </div>\r
\r
      <!-- Action Buttons -->\r
      <div class="flex items-center justify-end space-x-3">\r
        <button\r
          (click)="onCancel()"\r
          [disabled]="loading"\r
          class="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors disabled:opacity-50">\r
          Cancel\r
        </button>\r
\r
        <button\r
          (click)="onConfirm()"\r
          [disabled]="loading"\r
          class="px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">\r
          <span *ngIf="!loading">Archive Part</span>\r
          <span *ngIf="loading" class="flex items-center space-x-2">\r
            <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
            <span>Archiving...</span>\r
          </span>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/inventory/components/parts-catalog/archive-confirmation-modal/archive-confirmation-modal.component.scss */\n/*# sourceMappingURL=archive-confirmation-modal.component.css.map */\n"] }]
  }], null, { isOpen: [{
    type: Input
  }], partName: [{
    type: Input
  }], hasOpenPOs: [{
    type: Input
  }], canForceArchive: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], confirmArchive: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArchiveConfirmationModalComponent, { className: "ArchiveConfirmationModalComponent", filePath: "src/app/inventory/components/parts-catalog/archive-confirmation-modal/archive-confirmation-modal.component.ts", lineNumber: 42 });
})();

// src/app/inventory/components/parts-catalog/restore-confirmation-modal/restore-confirmation-modal.component.ts
function RestoreConfirmationModalComponent_div_0_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Restore Part");
    \u0275\u0275elementEnd();
  }
}
function RestoreConfirmationModalComponent_div_0_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "circle", 34)(3, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Restoring...");
    \u0275\u0275elementEnd()();
  }
}
function RestoreConfirmationModalComponent_div_0_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function RestoreConfirmationModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "path", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 15);
    \u0275\u0275element(16, "path", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 16)(18, "h3", 17);
    \u0275\u0275text(19, " Do you want to restore this part? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 18);
    \u0275\u0275text(21, " It will be available again for purchase orders and will appear in the main parts list. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 19)(23, "label", 20);
    \u0275\u0275text(24, "Restore Reason (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function RestoreConfirmationModalComponent_div_0_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.restoreReason, $event) || (ctx_r1.restoreReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 22);
    \u0275\u0275text(27, "This will be recorded in the audit trail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 23)(29, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 25);
    \u0275\u0275element(31, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "p", 27);
    \u0275\u0275text(33, " Part will be restored to active status ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 28)(35, "button", 29);
    \u0275\u0275listener("click", function RestoreConfirmationModalComponent_div_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(36, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 30);
    \u0275\u0275listener("click", function RestoreConfirmationModalComponent_div_0_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275template(38, RestoreConfirmationModalComponent_div_0_span_38_Template, 2, 0, "span", 31)(39, RestoreConfirmationModalComponent_div_0_span_39_Template, 6, 0, "span", 32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.partName ? "Restore " + ctx_r1.partName : "Restore Part", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.restoreReason);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var RestoreConfirmationModalComponent = class _RestoreConfirmationModalComponent {
  isOpen = false;
  partName = "";
  closeModal = new EventEmitter();
  confirmRestore = new EventEmitter();
  loading = false;
  restoreReason = "";
  onConfirm() {
    this.loading = true;
    this.confirmRestore.emit(this.restoreReason);
    setTimeout(() => {
      this.loading = false;
      this.restoreReason = "";
    }, 2e3);
  }
  onCancel() {
    if (this.loading)
      return;
    this.restoreReason = "";
    this.closeModal.emit();
  }
  static \u0275fac = function RestoreConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RestoreConfirmationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestoreConfirmationModalComponent, selectors: [["app-restore-confirmation-modal"]], inputs: { isOpen: "isOpen", partName: "partName" }, outputs: { closeModal: "closeModal", confirmRestore: "confirmRestore" }, decls: 1, vars: 1, consts: [["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-md", "w-full"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-green-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], [1, "flex", "justify-center", "mb-6"], [1, "w-16", "h-16", "bg-green-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-green-600"], [1, "text-center", "mb-6"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-3"], [1, "text-gray-600", "mb-4"], [1, "mb-6"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["rows", "3", "placeholder", "Enter reason for restoring this part...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-green-500", "focus:border-transparent", "resize-none", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "bg-green-50", "border", "border-green-200", "rounded-lg", "p-3", "mb-6"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-green-800", "text-sm", "font-medium"], [1, "flex", "items-center", "justify-end", "space-x-3"], [1, "px-6", "py-2", "text-gray-600", "hover:text-gray-800", "font-medium", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], [1, "px-6", "py-2", "bg-green-600", "text-white", "font-medium", "rounded-lg", "hover:bg-green-700", "focus:outline-none", "focus:ring-2", "focus:ring-green-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function RestoreConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, RestoreConfirmationModalComponent_div_0_Template, 40, 9, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=restore-confirmation-modal.component.css.map */"], data: { animation: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestoreConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-restore-confirmation-modal", standalone: true, imports: [CommonModule, FormsModule], animations: [
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
    ], template: `<!-- Restore Confirmation Modal -->\r
<div *ngIf="isOpen"\r
     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4"\r
     [@backdropAnimation]>\r
  <!-- Modal Container -->\r
  <div class="bg-white rounded-2xl shadow-xl max-w-md w-full"\r
       [@modalAnimation]>\r
    <!-- Modal Header -->\r
    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r
      <div class="flex items-center space-x-3">\r
        <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
          </svg>\r
        </div>\r
        <h2 class="text-xl font-semibold text-gray-900">\r
          {{ partName ? 'Restore ' + partName : 'Restore Part' }}\r
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
      <!-- Success Icon -->\r
      <div class="flex justify-center mb-6">\r
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">\r
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
          </svg>\r
        </div>\r
      </div>\r
\r
      <!-- Confirmation Message -->\r
      <div class="text-center mb-6">\r
        <h3 class="text-lg font-semibold text-gray-900 mb-3">\r
          Do you want to restore this part?\r
        </h3>\r
        <p class="text-gray-600 mb-4">\r
          It will be available again for purchase orders and will appear in the main parts list.\r
        </p>\r
      </div>\r
\r
      <!-- Restore Reason Input -->\r
      <div class="mb-6">\r
        <label class="block text-sm font-medium text-gray-700 mb-2">Restore Reason (Optional)</label>\r
        <textarea\r
          [(ngModel)]="restoreReason"\r
          rows="3"\r
          placeholder="Enter reason for restoring this part..."\r
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none placeholder-gray-400"></textarea>\r
        <p class="text-xs text-gray-500 mt-1">This will be recorded in the audit trail</p>\r
      </div>\r
\r
      <!-- Info Box -->\r
      <div class="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">\r
        <div class="flex items-center space-x-2">\r
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
          <p class="text-green-800 text-sm font-medium">\r
            Part will be restored to active status\r
          </p>\r
        </div>\r
      </div>\r
\r
      <!-- Action Buttons -->\r
      <div class="flex items-center justify-end space-x-3">\r
        <button\r
          (click)="onCancel()"\r
          [disabled]="loading"\r
          class="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors disabled:opacity-50">\r
          Cancel\r
        </button>\r
\r
        <button\r
          (click)="onConfirm()"\r
          [disabled]="loading"\r
          class="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">\r
          <span *ngIf="!loading">Restore Part</span>\r
          <span *ngIf="loading" class="flex items-center space-x-2">\r
            <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
            <span>Restoring...</span>\r
          </span>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/inventory/components/parts-catalog/restore-confirmation-modal/restore-confirmation-modal.component.scss */\n/*# sourceMappingURL=restore-confirmation-modal.component.css.map */\n"] }]
  }], null, { isOpen: [{
    type: Input
  }], partName: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], confirmRestore: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestoreConfirmationModalComponent, { className: "RestoreConfirmationModalComponent", filePath: "src/app/inventory/components/parts-catalog/restore-confirmation-modal/restore-confirmation-modal.component.ts", lineNumber: 42 });
})();

// src/app/inventory/components/parts-bulk-import-modal/parts-bulk-import-modal.component.ts
var _c0 = ["fileInput"];
function PartsBulkImportModalComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 9);
    \u0275\u0275element(3, "path", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 11);
    \u0275\u0275text(5, "Access Denied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7, "You don't have permission to bulk import parts. Only Managers and Admins can perform bulk imports.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_div_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(9, "Close");
    \u0275\u0275elementEnd()();
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 46)(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 51);
    \u0275\u0275text(4, "Drag and drop your file here");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 52);
    \u0275\u0275text(6, "or");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_div_3_div_28_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const fileInput_r6 = \u0275\u0275reference(27);
      return \u0275\u0275resetView(fileInput_r6.click());
    });
    \u0275\u0275text(8, " Browse Files ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 54);
    \u0275\u0275text(10, "Supports CSV and XLSX files (max 10MB)");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 59)(5, "p", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 61);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_div_3_div_29_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext();
      const fileInput_r6 = \u0275\u0275reference(27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.selectedFile = null;
      return \u0275\u0275resetView(fileInput_r6.value = "");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 30);
    \u0275\u0275element(11, "path", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.selectedFile.size / 1024).toFixed(2), " KB");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Upload & Import ");
    \u0275\u0275elementEnd();
  }
}
function PartsBulkImportModalComponent_div_0_div_3_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 65);
    \u0275\u0275element(2, "circle", 66)(3, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Importing... ");
    \u0275\u0275elementEnd();
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_34_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 71);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 72)(4, "div", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 74);
    \u0275\u0275text(7, "Successfully Imported");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.importResult.data.imported_count);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_34_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 71);
    \u0275\u0275text(2, "\u2795");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 72)(4, "div", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 74);
    \u0275\u0275text(7, "Created");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.importResult.data.created_count);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_34_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 71);
    \u0275\u0275text(2, "\u{1F504}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 72)(4, "div", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 74);
    \u0275\u0275text(7, "Updated");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.importResult.data.updated_count);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_34_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 71);
    \u0275\u0275text(2, "\u2717");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 72)(4, "div", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 74);
    \u0275\u0275text(7, "Failed");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.importResult.data.failed_count);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_34_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "button", 86);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_div_3_div_34_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.downloadErrorReport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 30);
    \u0275\u0275element(3, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Download Error Report ");
    \u0275\u0275elementEnd()();
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_34_div_18_tr_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "span", 97);
    \u0275\u0275text(2, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(error_r9);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_34_div_18_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 92)(1, "td", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 94);
    \u0275\u0275template(4, PartsBulkImportModalComponent_div_0_div_3_div_34_div_18_tr_12_div_4_Template, 5, 1, "div", 95);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const invalidRow_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invalidRow_r10.row_number);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", invalidRow_r10.errors);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_34_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "h4", 88);
    \u0275\u0275text(2, "Invalid Rows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89)(4, "table", 90)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Row #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Errors");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, PartsBulkImportModalComponent_div_0_div_3_div_34_div_18_tr_12_Template, 5, 2, "tr", 91);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.getInvalidRows());
  }
}
function PartsBulkImportModalComponent_div_0_div_3_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 25)(2, "h3", 26);
    \u0275\u0275text(3, "Import Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 69)(5, "div", 70)(6, "div", 71);
    \u0275\u0275text(7, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 72)(9, "div", 73);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 74);
    \u0275\u0275text(12, "Total Rows");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, PartsBulkImportModalComponent_div_0_div_3_div_34_div_13_Template, 8, 1, "div", 75)(14, PartsBulkImportModalComponent_div_0_div_3_div_34_div_14_Template, 8, 1, "div", 76)(15, PartsBulkImportModalComponent_div_0_div_3_div_34_div_15_Template, 8, 1, "div", 77)(16, PartsBulkImportModalComponent_div_0_div_3_div_34_div_16_Template, 8, 1, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PartsBulkImportModalComponent_div_0_div_3_div_34_div_17_Template, 5, 0, "div", 79)(18, PartsBulkImportModalComponent_div_0_div_3_div_34_div_18_Template, 13, 1, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.getTotalRows());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.importResult.data.imported_count > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.data.created_count > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.data.updated_count > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.data.failed_count > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.data.error_report_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getInvalidRows().length > 0);
  }
}
function PartsBulkImportModalComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 14)(2, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 16);
    \u0275\u0275element(4, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2", 18);
    \u0275\u0275text(6, "Parts Bulk Import");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 20);
    \u0275\u0275element(9, "path", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275template(11, PartsBulkImportModalComponent_div_0_div_3_div_11_Template, 6, 1, "div", 23);
    \u0275\u0275elementStart(12, "div", 24)(13, "div", 25)(14, "h3", 26);
    \u0275\u0275text(15, "Upload File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 27);
    \u0275\u0275text(17, "Upload a CSV or XLSX file containing parts data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 28)(19, "button", 29);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_div_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 30);
    \u0275\u0275element(21, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Download Template ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "p", 32);
    \u0275\u0275text(24, "Download the template file and fill it with your parts data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 33);
    \u0275\u0275listener("drop", function PartsBulkImportModalComponent_div_0_div_3_Template_div_drop_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    })("dragover", function PartsBulkImportModalComponent_div_0_div_3_Template_div_dragover_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    });
    \u0275\u0275elementStart(26, "input", 34, 0);
    \u0275\u0275listener("change", function PartsBulkImportModalComponent_div_0_div_3_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, PartsBulkImportModalComponent_div_0_div_3_div_28_Template, 11, 1, "div", 35)(29, PartsBulkImportModalComponent_div_0_div_3_div_29_Template, 12, 3, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 37)(31, "button", 38);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_div_3_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.importParts());
    });
    \u0275\u0275template(32, PartsBulkImportModalComponent_div_0_div_3_span_32_Template, 4, 0, "span", 39)(33, PartsBulkImportModalComponent_div_0_div_3_span_33_Template, 5, 0, "span", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, PartsBulkImportModalComponent_div_0_div_3_div_34_Template, 19, 7, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 42)(36, "button", 43);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_div_3_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("has-file", ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFile);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedFile || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showResults && (ctx_r1.importResult == null ? null : ctx_r1.importResult.data));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showResults ? "Close" : "Cancel", " ");
  }
}
function PartsBulkImportModalComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 100);
    \u0275\u0275element(3, "circle", 66)(4, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 101);
    \u0275\u0275text(6, "Processing file...");
    \u0275\u0275elementEnd()()();
  }
}
function PartsBulkImportModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275listener("click", function PartsBulkImportModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, PartsBulkImportModalComponent_div_0_div_2_Template, 10, 0, "div", 4)(3, PartsBulkImportModalComponent_div_0_div_3_Template, 38, 14, "div", 5)(4, PartsBulkImportModalComponent_div_0_div_4_Template, 7, 0, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.canAccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canAccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var PartsBulkImportModalComponent = class _PartsBulkImportModalComponent {
  inventoryService;
  authService;
  toastService;
  isOpen = false;
  closeModal = new EventEmitter();
  importComplete = new EventEmitter();
  fileInput;
  // Permission check
  canAccess = false;
  // File upload
  selectedFile = null;
  // Import state
  loading = false;
  error = null;
  // Import results
  importResult = null;
  showResults = false;
  constructor(inventoryService, authService, toastService) {
    this.inventoryService = inventoryService;
    this.authService = authService;
    this.toastService = toastService;
  }
  ngOnInit() {
    this.checkPermissions();
  }
  checkPermissions() {
    const user = this.authService.getCurrentUser();
    this.canAccess = user?.user_type === "manager" || user?.user_type === "admin";
  }
  onCancel() {
    if (this.loading)
      return;
    this.resetModal();
    this.closeModal.emit();
  }
  resetModal() {
    this.selectedFile = null;
    this.importResult = null;
    this.showResults = false;
    this.error = null;
    this.loading = false;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = "";
    }
  }
  // Download Template (Frontend Only)
  downloadTemplate() {
    const headers = [
      "Part Number",
      "Part Name",
      "Description",
      "Unit of Measure",
      "Unit Cost",
      "Category ID",
      "Reorder Point",
      "Reorder Quantity",
      "Barcode",
      "Status",
      "ABC Class"
    ];
    const sampleRow = [
      "PART-001",
      "Sample Part",
      "Sample description",
      "PCS",
      "10.00",
      "",
      "10",
      "20",
      "",
      "active",
      "A"
    ];
    const csvContent = [
      headers.join(","),
      sampleRow.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","),
      ""
      // Empty row for clarity
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `parts-import-template-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    this.toastService.success("Template downloaded successfully");
  }
  // File Upload Handlers
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  handleFile(file) {
    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel.sheet.macroEnabled.12"
    ];
    const isValidType = validTypes.includes(file.type) || file.name.endsWith(".csv") || file.name.endsWith(".xlsx") || file.name.endsWith(".xls");
    if (!isValidType) {
      this.toastService.error("Please upload a CSV or XLSX file");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      this.toastService.error("File size must be less than 10MB");
      return;
    }
    if (!(file instanceof File)) {
      this.toastService.error("Invalid file object");
      return;
    }
    this.selectedFile = file;
    this.error = null;
    this.importResult = null;
    this.showResults = false;
  }
  // Import Parts
  importParts() {
    if (!this.selectedFile) {
      this.toastService.error("Please select a file first");
      return;
    }
    if (!(this.selectedFile instanceof File)) {
      this.toastService.error("Invalid file selected");
      return;
    }
    this.loading = true;
    this.error = null;
    this.showResults = false;
    const formData = new FormData();
    formData.append("file", this.selectedFile, this.selectedFile.name);
    console.log("FormData contents:");
    console.log("File:", this.selectedFile);
    console.log("File name:", this.selectedFile.name);
    console.log("File size:", this.selectedFile.size);
    console.log("File type:", this.selectedFile.type);
    this.inventoryService.importParts(formData).subscribe({
      next: (response) => {
        this.loading = false;
        this.importResult = response;
        this.showResults = true;
        if (response.success) {
          const data = response.data;
          if (data) {
            const totalImported = data.imported_count || 0;
            const failedCount = data.failed_count || 0;
            if (totalImported > 0) {
              if (failedCount > 0) {
                this.toastService.warning(`Import completed with errors \u2014 ${totalImported} imported, ${failedCount} failed`);
              } else {
                this.toastService.success(`Parts imported successfully \u2014 ${totalImported} rows imported`);
              }
            } else {
              if (failedCount > 0) {
                this.toastService.error(`No valid rows to import \u2014 ${failedCount} rows failed`);
              } else {
                this.toastService.error("No valid rows to import");
              }
            }
          }
          this.trackImportEvent(data);
          setTimeout(() => {
            this.resetModal();
            this.importComplete.emit();
          }, 2e3);
        } else {
          this.error = response.message || "Import failed";
          this.toastService.error(this.error);
        }
      },
      error: (err) => {
        this.loading = false;
        if (err.error) {
          const errorMessage = err.error.message || "Failed to import parts";
          this.error = errorMessage;
          if (err.error.errors && err.error.errors.file) {
            const fileError = Array.isArray(err.error.errors.file) ? err.error.errors.file[0] : err.error.errors.file;
            this.error = `File Error: ${fileError}`;
            this.toastService.error(`File Error: ${fileError}`);
          } else {
            this.toastService.error(errorMessage);
          }
        } else {
          const errorMessage = "Failed to import parts";
          this.error = errorMessage;
          this.toastService.error(errorMessage);
        }
      }
    });
  }
  downloadErrorReport() {
    if (!this.importResult?.data?.error_report_url) {
      this.toastService.warning("No error report available");
      return;
    }
    const errorReportUrl = this.importResult.data.error_report_url;
    if (!errorReportUrl || typeof errorReportUrl !== "string") {
      this.toastService.warning("No error report available");
      return;
    }
    const link = document.createElement("a");
    link.href = errorReportUrl;
    link.download = `parts-import-errors-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19)}.csv`;
    link.click();
    this.toastService.success("Error report downloaded");
  }
  trackImportEvent(data) {
    if (typeof window !== "undefined" && window.gtag && data) {
      window.gtag("event", "parts_bulk_import", {
        imported_count: data.imported_count || 0,
        created_count: data.created_count || 0,
        updated_count: data.updated_count || 0,
        failed_count: data.failed_count || 0
      });
    }
  }
  getInvalidRows() {
    return this.importResult?.data?.invalid_rows || [];
  }
  getErrorMessages(row) {
    return row.errors.join("; ");
  }
  getTotalRows() {
    if (!this.importResult?.data)
      return 0;
    const imported = this.importResult.data.imported_count || 0;
    const failed = this.importResult.data.failed_count || 0;
    return imported + failed;
  }
  static \u0275fac = function PartsBulkImportModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartsBulkImportModalComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartsBulkImportModalComponent, selectors: [["app-parts-bulk-import-modal"]], viewQuery: function PartsBulkImportModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, inputs: { isOpen: "isOpen" }, outputs: { closeModal: "closeModal", importComplete: "importComplete" }, decls: 1, vars: 1, consts: [["fileInput", ""], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], ["class", "permission-denied", 4, "ngIf"], [4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], [1, "permission-denied"], [1, "permission-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], [1, "permission-title"], [1, "permission-message"], [1, "btn", "btn-secondary", 3, "click"], [1, "modal-header"], [1, "header-left"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "modal-title"], [1, "close-btn", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], ["class", "error-banner", 4, "ngIf"], [1, "upload-section"], [1, "section-header"], [1, "section-title"], [1, "section-description"], [1, "template-section"], ["type", "button", 1, "btn", "btn-outline", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "template-hint"], [1, "upload-area", 3, "drop", "dragover"], ["type", "file", "accept", ".csv,.xlsx,.xls", 1, "file-input", 3, "change", "disabled"], ["class", "upload-placeholder grid place-items-center", 4, "ngIf"], ["class", "file-info", 4, "ngIf"], [1, "import-actions"], ["type", "button", 1, "btn", "btn-primary", "btn-import", 3, "click", "disabled"], ["class", "flex items-center gap-2", 4, "ngIf"], ["class", "loading-content", 4, "ngIf"], ["class", "results-section", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "error-banner"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-content"], [1, "error-text"], [1, "upload-placeholder", "grid", "place-items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], [1, "upload-text"], [1, "upload-subtext"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "upload-hint"], [1, "file-info"], [1, "file-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "file-details"], [1, "file-name"], [1, "file-size"], ["type", "button", "title", "Remove file", 1, "btn-remove", 3, "click", "disabled"], [1, "flex", "items-center", "gap-2"], [1, "loading-content"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "results-section"], [1, "summary-cards"], [1, "summary-card", "total"], [1, "summary-icon"], [1, "summary-info"], [1, "summary-value"], [1, "summary-label"], ["class", "summary-card success", 4, "ngIf"], ["class", "summary-card created", 4, "ngIf"], ["class", "summary-card updated", 4, "ngIf"], ["class", "summary-card error", 4, "ngIf"], ["class", "error-report-section", 4, "ngIf"], ["class", "invalid-rows-section", 4, "ngIf"], [1, "summary-card", "success"], [1, "summary-card", "created"], [1, "summary-card", "updated"], [1, "summary-card", "error"], [1, "error-report-section"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [1, "invalid-rows-section"], [1, "invalid-rows-title"], [1, "invalid-rows-table-container"], [1, "invalid-rows-table"], ["class", "invalid-row", 4, "ngFor", "ngForOf"], [1, "invalid-row"], [1, "row-number"], [1, "error-messages"], ["class", "error-item", 4, "ngFor", "ngForOf"], [1, "error-item"], [1, "error-bullet"], [1, "loading-overlay"], [1, "loading-spinner"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8"], [1, "loading-text"]], template: function PartsBulkImportModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PartsBulkImportModalComponent_div_0_Template, 5, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  position: relative;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  width: 1.5rem;\n  height: 1.5rem;\n  flex-shrink: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.permission-denied[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n  text-align: center;\n}\n.permission-denied[_ngcontent-%COMP%]   .permission-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n  color: #ef4444;\n}\n.permission-denied[_ngcontent-%COMP%]   .permission-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.permission-denied[_ngcontent-%COMP%]   .permission-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.permission-denied[_ngcontent-%COMP%]   .permission-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 2rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  color: #dc2626;\n}\n.modal-body[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.modal-body[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-body[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.modal-body[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.modal-body[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .template-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .template-section[_ngcontent-%COMP%]   .template-hint[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed #d1d5db;\n  border-radius: 0.5rem;\n  padding: 3rem 2rem;\n  text-align: center;\n  transition: all 0.2s;\n  margin-bottom: 1.5rem;\n  background-color: #fafafa;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background-color: #eff6ff;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area.has-file[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  border-style: solid;\n  background-color: #f0fdf4;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   .upload-text[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 1rem 0 0.5rem 0;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   .upload-subtext[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0.5rem 0;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   .upload-hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-top: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n  min-width: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.25rem 0;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .file-size[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #fef2f2;\n}\n.modal-body[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-body[_ngcontent-%COMP%]   .import-actions[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.modal-body[_ngcontent-%COMP%]   .import-actions[_ngcontent-%COMP%]   .btn-import[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  font-size: 1rem;\n  padding: 1rem;\n  gap: 0.75rem;\n}\n.modal-body[_ngcontent-%COMP%]   .import-actions[_ngcontent-%COMP%]   .btn-import[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.total[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  border-color: #93c5fd;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.total[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.success[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  border-color: #86efac;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.success[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.created[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  border-color: #93c5fd;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.created[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.updated[_ngcontent-%COMP%] {\n  background-color: #fefce8;\n  border-color: #fde047;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.updated[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  color: #ca8a04;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.error[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  border-color: #fca5a5;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card.error[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .summary-cards[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .error-report-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  text-align: center;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #991b1b;\n  margin: 0 0 1rem 0;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background-color: #f9fafb;\n  z-index: 10;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 2px solid #e5e7eb;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .invalid-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n  background-color: #fef2f2;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .invalid-row[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .invalid-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .invalid-row[_ngcontent-%COMP%]   td.row-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #dc2626;\n  width: 80px;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .invalid-row[_ngcontent-%COMP%]   td.error-messages[_ngcontent-%COMP%] {\n  color: #991b1b;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .invalid-row[_ngcontent-%COMP%]   td.error-messages[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .invalid-row[_ngcontent-%COMP%]   td.error-messages[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .invalid-row[_ngcontent-%COMP%]   td.error-messages[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-bullet[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.modal-body[_ngcontent-%COMP%]   .results-section[_ngcontent-%COMP%]   .invalid-rows-section[_ngcontent-%COMP%]   .invalid-rows-table-container[_ngcontent-%COMP%]   .invalid-rows-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .invalid-row[_ngcontent-%COMP%]   td.error-messages[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6b7280;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #4b5563;\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #d1d5db;\n  color: #374151;\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  border-radius: 0.75rem;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0.5rem;\n  }\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .invalid-rows-table-container[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=parts-bulk-import-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartsBulkImportModalComponent, [{
    type: Component,
    args: [{ selector: "app-parts-bulk-import-modal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-overlay" (click)="onCancel()" *ngIf="isOpen">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
    <!-- Permission Check -->\r
    <div *ngIf="!canAccess" class="permission-denied">\r
      <div class="permission-icon">\r
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="permission-title">Access Denied</h3>\r
      <p class="permission-message">You don't have permission to bulk import parts. Only Managers and Admins can perform bulk imports.</p>\r
      <button class="btn btn-secondary" (click)="onCancel()">Close</button>\r
    </div>\r
\r
    <!-- Main Content -->\r
    <div *ngIf="canAccess">\r
      <!-- Modal Header -->\r
      <div class="modal-header">\r
        <div class="header-left">\r
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>\r
          </svg>\r
          <h2 class="modal-title">Parts Bulk Import</h2>\r
        </div>\r
        <button class="close-btn" (click)="onCancel()" [disabled]="loading">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
          </svg>\r
        </button>\r
      </div>\r
\r
      <!-- Modal Body -->\r
      <div class="modal-body">\r
        <!-- Error Banner -->\r
        <div *ngIf="error" class="error-banner">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
          </svg>\r
          <div class="error-content">\r
            <span class="error-text">{{ error }}</span>\r
          </div>\r
        </div>\r
\r
        <!-- Upload Section -->\r
        <div class="upload-section">\r
          <div class="section-header">\r
            <h3 class="section-title">Upload File</h3>\r
            <p class="section-description">Upload a CSV or XLSX file containing parts data</p>\r
          </div>\r
\r
          <!-- Download Template -->\r
          <div class="template-section">\r
            <button type="button" class="btn btn-outline" (click)="downloadTemplate()" [disabled]="loading">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
              </svg>\r
              Download Template\r
            </button>\r
            <p class="template-hint">Download the template file and fill it with your parts data</p>\r
          </div>\r
\r
          <!-- File Upload Area -->\r
          <div class="upload-area"\r
               (drop)="onDrop($event)"\r
               (dragover)="onDragOver($event)"\r
               [class.has-file]="selectedFile">\r
            <input\r
              #fileInput\r
              type="file"\r
              accept=".csv,.xlsx,.xls"\r
              (change)="onFileSelected($event)"\r
              class="file-input"\r
              [disabled]="loading">\r
\r
            <div *ngIf="!selectedFile" class="upload-placeholder grid place-items-center">\r
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>\r
              </svg>\r
              <p class="upload-text">Drag and drop your file here</p>\r
              <p class="upload-subtext">or</p>\r
              <button type="button" class="btn btn-primary" (click)="fileInput.click()" [disabled]="loading">\r
                Browse Files\r
              </button>\r
              <p class="upload-hint">Supports CSV and XLSX files (max 10MB)</p>\r
            </div>\r
\r
            <div *ngIf="selectedFile" class="file-info">\r
              <div class="file-icon">\r
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
                </svg>\r
              </div>\r
              <div class="file-details">\r
                <p class="file-name">{{ selectedFile.name }}</p>\r
                <p class="file-size">{{ (selectedFile.size / 1024).toFixed(2) }} KB</p>\r
              </div>\r
              <button\r
                type="button"\r
                class="btn-remove"\r
                (click)="selectedFile = null; fileInput.value = ''"\r
                [disabled]="loading"\r
                title="Remove file">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
\r
          <!-- Import Button -->\r
          <div class="import-actions">\r
            <button\r
              type="button"\r
              class="btn btn-primary btn-import "\r
              (click)="importParts()"\r
              [disabled]="!selectedFile || loading">\r
              <span *ngIf="!loading" class="flex items-center gap-2">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>\r
                </svg>\r
                Upload & Import\r
              </span>\r
              <span *ngIf="loading" class="loading-content">\r
                <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                </svg>\r
                Importing...\r
              </span>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Import Results -->\r
        <div *ngIf="showResults && importResult?.data" class="results-section">\r
          <div class="section-header">\r
            <h3 class="section-title">Import Summary</h3>\r
          </div>\r
\r
          <!-- Summary Cards -->\r
          <div class="summary-cards">\r
            <div class="summary-card total">\r
              <div class="summary-icon">\u{1F4CA}</div>\r
              <div class="summary-info">\r
                <div class="summary-value">{{ getTotalRows() }}</div>\r
                <div class="summary-label">Total Rows</div>\r
              </div>\r
            </div>\r
            <div class="summary-card success" *ngIf="importResult.data.imported_count > 0">\r
              <div class="summary-icon">\u2713</div>\r
              <div class="summary-info">\r
                <div class="summary-value">{{ importResult.data.imported_count }}</div>\r
                <div class="summary-label">Successfully Imported</div>\r
              </div>\r
            </div>\r
            <div class="summary-card created" *ngIf="importResult.data.created_count > 0">\r
              <div class="summary-icon">\u2795</div>\r
              <div class="summary-info">\r
                <div class="summary-value">{{ importResult.data.created_count }}</div>\r
                <div class="summary-label">Created</div>\r
              </div>\r
            </div>\r
            <div class="summary-card updated" *ngIf="importResult.data.updated_count > 0">\r
              <div class="summary-icon">\u{1F504}</div>\r
              <div class="summary-info">\r
                <div class="summary-value">{{ importResult.data.updated_count }}</div>\r
                <div class="summary-label">Updated</div>\r
              </div>\r
            </div>\r
            <div class="summary-card error" *ngIf="importResult.data.failed_count > 0">\r
              <div class="summary-icon">\u2717</div>\r
              <div class="summary-info">\r
                <div class="summary-value">{{ importResult.data.failed_count }}</div>\r
                <div class="summary-label">Failed</div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Error Report Download -->\r
          <div *ngIf="importResult.data.error_report_url" class="error-report-section">\r
            <button type="button" class="btn btn-outline" (click)="downloadErrorReport()">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
              </svg>\r
              Download Error Report\r
            </button>\r
          </div>\r
\r
          <!-- Invalid Rows Table -->\r
          <div *ngIf="getInvalidRows().length > 0" class="invalid-rows-section">\r
            <h4 class="invalid-rows-title">Invalid Rows</h4>\r
            <div class="invalid-rows-table-container">\r
              <table class="invalid-rows-table">\r
                <thead>\r
                  <tr>\r
                    <th>Row #</th>\r
                    <th>Errors</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <tr *ngFor="let invalidRow of getInvalidRows()" class="invalid-row">\r
                    <td class="row-number">{{ invalidRow.row_number }}</td>\r
                    <td class="error-messages">\r
                      <div class="error-item" *ngFor="let error of invalidRow.errors">\r
                        <span class="error-bullet">\u2022</span>\r
                        <span class="error-text">{{ error }}</span>\r
                      </div>\r
                    </td>\r
                  </tr>\r
                </tbody>\r
              </table>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Modal Footer -->\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="onCancel()" [disabled]="loading">\r
          {{ showResults ? 'Close' : 'Cancel' }}\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Loading Overlay -->\r
    <div *ngIf="loading" class="loading-overlay">\r
      <div class="loading-spinner">\r
        <svg class="animate-spin h-8 w-8" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
        <p class="loading-text">Processing file...</p>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/inventory/components/parts-bulk-import-modal/parts-bulk-import-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-container {\n  background-color: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: modalSlideIn 0.3s ease-out;\n  position: relative;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modal-header .header-left svg {\n  color: #3b82f6;\n  width: 1.5rem;\n  height: 1.5rem;\n  flex-shrink: 0;\n}\n.modal-header .header-left .modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.modal-header .close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-header .close-btn:hover:not(:disabled) {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-header .close-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-header .close-btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.permission-denied {\n  padding: 3rem 2rem;\n  text-align: center;\n}\n.permission-denied .permission-icon {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n  color: #ef4444;\n}\n.permission-denied .permission-icon svg {\n  width: 3rem;\n  height: 3rem;\n}\n.permission-denied .permission-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.permission-denied .permission-message {\n  color: #6b7280;\n  margin-bottom: 2rem;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-body .error-banner {\n  background-color: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  color: #dc2626;\n}\n.modal-body .error-banner svg {\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.modal-body .error-banner .error-content {\n  flex: 1;\n}\n.modal-body .error-banner .error-content .error-text {\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.modal-body .section-header {\n  margin-bottom: 1.5rem;\n}\n.modal-body .section-header .section-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.modal-body .section-header .section-description {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.modal-body .template-section {\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.modal-body .template-section .template-hint {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.modal-body .upload-area {\n  border: 2px dashed #d1d5db;\n  border-radius: 0.5rem;\n  padding: 3rem 2rem;\n  text-align: center;\n  transition: all 0.2s;\n  margin-bottom: 1.5rem;\n  background-color: #fafafa;\n}\n.modal-body .upload-area:hover {\n  border-color: #3b82f6;\n  background-color: #eff6ff;\n}\n.modal-body .upload-area.has-file {\n  border-color: #10b981;\n  border-style: solid;\n  background-color: #f0fdf4;\n}\n.modal-body .upload-area .file-input {\n  display: none;\n}\n.modal-body .upload-area .upload-placeholder .upload-text {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 1rem 0 0.5rem 0;\n}\n.modal-body .upload-area .upload-placeholder .upload-subtext {\n  color: #6b7280;\n  margin: 0.5rem 0;\n}\n.modal-body .upload-area .upload-placeholder .upload-hint {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-top: 1rem;\n}\n.modal-body .upload-area .file-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n}\n.modal-body .upload-area .file-info .file-icon {\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.modal-body .upload-area .file-info .file-details {\n  flex: 1;\n  text-align: left;\n  min-width: 0;\n}\n.modal-body .upload-area .file-info .file-details .file-name {\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.25rem 0;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.modal-body .upload-area .file-info .file-details .file-size {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.modal-body .upload-area .file-info .btn-remove {\n  background: none;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body .upload-area .file-info .btn-remove:hover:not(:disabled) {\n  background-color: #fef2f2;\n}\n.modal-body .upload-area .file-info .btn-remove:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-body .import-actions {\n  margin-bottom: 2rem;\n}\n.modal-body .import-actions .btn-import {\n  width: 100%;\n  justify-content: center;\n  font-size: 1rem;\n  padding: 1rem;\n  gap: 0.75rem;\n}\n.modal-body .import-actions .btn-import .loading-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.modal-body .results-section {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-body .results-section .summary-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.modal-body .results-section .summary-cards .summary-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.modal-body .results-section .summary-cards .summary-card.total {\n  background-color: #eff6ff;\n  border-color: #93c5fd;\n}\n.modal-body .results-section .summary-cards .summary-card.total .summary-icon {\n  color: #3b82f6;\n}\n.modal-body .results-section .summary-cards .summary-card.success {\n  background-color: #f0fdf4;\n  border-color: #86efac;\n}\n.modal-body .results-section .summary-cards .summary-card.success .summary-icon {\n  color: #16a34a;\n}\n.modal-body .results-section .summary-cards .summary-card.created {\n  background-color: #eff6ff;\n  border-color: #93c5fd;\n}\n.modal-body .results-section .summary-cards .summary-card.created .summary-icon {\n  color: #3b82f6;\n}\n.modal-body .results-section .summary-cards .summary-card.updated {\n  background-color: #fefce8;\n  border-color: #fde047;\n}\n.modal-body .results-section .summary-cards .summary-card.updated .summary-icon {\n  color: #ca8a04;\n}\n.modal-body .results-section .summary-cards .summary-card.error {\n  background-color: #fef2f2;\n  border-color: #fca5a5;\n}\n.modal-body .results-section .summary-cards .summary-card.error .summary-icon {\n  color: #dc2626;\n}\n.modal-body .results-section .summary-cards .summary-card .summary-icon {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.modal-body .results-section .summary-cards .summary-card .summary-info {\n  flex: 1;\n}\n.modal-body .results-section .summary-cards .summary-card .summary-info .summary-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.modal-body .results-section .summary-cards .summary-card .summary-info .summary-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.modal-body .results-section .error-report-section {\n  margin-bottom: 1.5rem;\n  text-align: center;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.modal-body .results-section .invalid-rows-section {\n  margin-top: 1.5rem;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #991b1b;\n  margin: 0 0 1rem 0;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container {\n  overflow-x: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table thead {\n  position: sticky;\n  top: 0;\n  background-color: #f9fafb;\n  z-index: 10;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table thead th {\n  padding: 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 2px solid #e5e7eb;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table tbody .invalid-row {\n  border-bottom: 1px solid #f3f4f6;\n  background-color: #fef2f2;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table tbody .invalid-row:hover {\n  background-color: #fee2e2;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table tbody .invalid-row td {\n  padding: 0.75rem;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table tbody .invalid-row td.row-number {\n  font-weight: 600;\n  color: #dc2626;\n  width: 80px;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table tbody .invalid-row td.error-messages {\n  color: #991b1b;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table tbody .invalid-row td.error-messages .error-item {\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table tbody .invalid-row td.error-messages .error-item:last-child {\n  margin-bottom: 0;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table tbody .invalid-row td.error-messages .error-item .error-bullet {\n  color: #dc2626;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.modal-body .results-section .invalid-rows-section .invalid-rows-table-container .invalid-rows-table tbody .invalid-row td.error-messages .error-item .error-text {\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n}\n.btn.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background-color: #6b7280;\n  color: white;\n}\n.btn.btn-secondary:hover:not(:disabled) {\n  background-color: #4b5563;\n}\n.btn.btn-outline {\n  background-color: white;\n  border: 1px solid #d1d5db;\n  color: #374151;\n}\n.btn.btn-outline:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.loading-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  border-radius: 0.75rem;\n}\n.loading-overlay .loading-spinner {\n  text-align: center;\n}\n.loading-overlay .loading-spinner svg {\n  color: #3b82f6;\n}\n.loading-overlay .loading-spinner .loading-text {\n  margin-top: 1rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .modal-container {\n    max-width: 100%;\n    margin: 0.5rem;\n  }\n  .summary-cards {\n    grid-template-columns: 1fr;\n  }\n  .invalid-rows-table-container {\n    font-size: 0.75rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n  }\n  .modal-footer .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=parts-bulk-import-modal.component.css.map */\n"] }]
  }], () => [{ type: InventoryAnalyticsService }, { type: AuthService }, { type: ToastService }], { isOpen: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], importComplete: [{
    type: Output
  }], fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartsBulkImportModalComponent, { className: "PartsBulkImportModalComponent", filePath: "src/app/inventory/components/parts-bulk-import-modal/parts-bulk-import-modal.component.ts", lineNumber: 32 });
})();

// src/app/inventory/components/parts-catalog/parts-catalog.component.ts
var _c02 = () => [];
function PartsCatalogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading parts catalog...");
    \u0275\u0275elementEnd()();
  }
}
function PartsCatalogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 19);
    \u0275\u0275element(7, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Retry ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PartsCatalogComponent_div_3_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 67);
    \u0275\u0275element(2, "path", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Clear Filters ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 69);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Conditional_36_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 67);
    \u0275\u0275element(6, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Apply Filters ");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r5 = ctx.$implicit;
    \u0275\u0275property("value", status_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, status_r5), " ");
  }
}
function PartsCatalogComponent_div_3_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_button_67_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBulkImportModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bulk Import ");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, " ARCHIVED ");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r7.description);
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275text(2, "Unit Cost:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const part_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.getCurrencySymbol(), "", part_r7.unit_cost.toLocaleString(), "");
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275text(2, "Reorder Point:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const part_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(part_r7.reorder_point);
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275text(2, "ABC Class:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const part_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(part_r7.abc_class);
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_69_div_1_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const part_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartModal(part_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Edit ");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_69_div_1_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const part_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openArchiveModal(part_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Archive ");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_69_div_1_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const part_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRestoreModal(part_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Restore ");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_69_div_1_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const part_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirmationModal(part_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "div", 77)(3, "div", 78)(4, "h4", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PartsCatalogComponent_div_3_div_69_div_1_span_6_Template, 2, 0, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 81);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PartsCatalogComponent_div_3_div_69_div_1_span_9_Template, 2, 1, "span", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 83)(11, "span", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 19);
    \u0275\u0275element(13, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 85);
    \u0275\u0275template(16, PartsCatalogComponent_div_3_div_69_div_1_div_16_Template, 5, 2, "div", 86);
    \u0275\u0275elementStart(17, "div", 87)(18, "span", 88);
    \u0275\u0275text(19, "UOM:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 89);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, PartsCatalogComponent_div_3_div_69_div_1_div_22_Template, 5, 1, "div", 86)(23, PartsCatalogComponent_div_3_div_69_div_1_div_23_Template, 5, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 90);
    \u0275\u0275template(25, PartsCatalogComponent_div_3_div_69_div_1_button_25_Template, 4, 0, "button", 91)(26, PartsCatalogComponent_div_3_div_69_div_1_button_26_Template, 4, 0, "button", 92)(27, PartsCatalogComponent_div_3_div_69_div_1_button_27_Template, 4, 0, "button", 93)(28, PartsCatalogComponent_div_3_div_69_div_1_button_28_Template, 4, 0, "button", 94);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const part_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("archived", ctx_r1.isArchived(part_r7));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-gray-500", ctx_r1.isArchived(part_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isArchived(part_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r7.part_number);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", part_r7.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStockStatus(part_r7).class);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStockStatus(part_r7).status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", part_r7.unit_cost);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(part_r7.uom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", part_r7.reorder_point);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", part_r7.abc_class);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isArchived(part_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.includeArchived && !ctx_r1.isArchived(part_r7) && ctx_r1.canArchiveOrRestore());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.includeArchived || ctx_r1.isArchived(part_r7)) && ctx_r1.canArchiveOrRestore());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isArchived(part_r7));
  }
}
function PartsCatalogComponent_div_3_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275template(1, PartsCatalogComponent_div_3_div_69_div_1_Template, 29, 19, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.parts);
  }
}
function PartsCatalogComponent_div_3_div_70_tr_23_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, " ARCHIVED ");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_div_70_tr_23_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.getCurrencySymbol(), "", part_r12.unit_cost.toLocaleString(), "");
  }
}
function PartsCatalogComponent_div_3_div_70_tr_23_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 117);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_div_70_tr_23_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_70_tr_23_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const part_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartModal(part_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 98);
    \u0275\u0275elementEnd()();
  }
}
function PartsCatalogComponent_div_3_div_70_tr_23_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_70_tr_23_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const part_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openArchiveModal(part_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 100);
    \u0275\u0275elementEnd()();
  }
}
function PartsCatalogComponent_div_3_div_70_tr_23_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_70_tr_23_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const part_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRestoreModal(part_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd()();
  }
}
function PartsCatalogComponent_div_3_div_70_tr_23_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_70_tr_23_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const part_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirmationModal(part_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 103);
    \u0275\u0275elementEnd()();
  }
}
function PartsCatalogComponent_div_3_div_70_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 108);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 79)(4, "div", 78)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PartsCatalogComponent_div_3_div_70_tr_23_span_7_Template, 2, 0, "span", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 109);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 110);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PartsCatalogComponent_div_3_div_70_tr_23_td_12_Template, 2, 2, "td", 111)(13, PartsCatalogComponent_div_3_div_70_tr_23_td_13_Template, 2, 0, "td", 111);
    \u0275\u0275elementStart(14, "td", 112);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 113);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 114)(19, "span", 84);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 90);
    \u0275\u0275template(22, PartsCatalogComponent_div_3_div_70_tr_23_button_22_Template, 3, 0, "button", 115)(23, PartsCatalogComponent_div_3_div_70_tr_23_button_23_Template, 3, 0, "button", 92)(24, PartsCatalogComponent_div_3_div_70_tr_23_button_24_Template, 3, 0, "button", 93)(25, PartsCatalogComponent_div_3_div_70_tr_23_button_25_Template, 3, 0, "button", 116);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const part_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("opacity-60", ctx_r1.isArchived(part_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r12.part_number);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-gray-500", ctx_r1.isArchived(part_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r12.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isArchived(part_r12));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", part_r12.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r12.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r12.uom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", part_r12.unit_cost);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !part_r12.unit_cost);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r12.reorder_point || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r12.abc_class || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStockStatus(part_r12).class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStockStatus(part_r12).status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isArchived(part_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.includeArchived && !ctx_r1.isArchived(part_r12) && ctx_r1.canArchiveOrRestore());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.includeArchived || ctx_r1.isArchived(part_r12)) && ctx_r1.canArchiveOrRestore());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isArchived(part_r12));
  }
}
function PartsCatalogComponent_div_3_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "table", 105)(2, "thead")(3, "tr", 106)(4, "th");
    \u0275\u0275text(5, "Part Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "UOM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Unit Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Reorder Point");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "ABC Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, PartsCatalogComponent_div_3_div_70_tr_23_Template, 26, 21, "tr", 107);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.parts);
  }
}
function PartsCatalogComponent_div_3_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 121);
    \u0275\u0275element(2, "path", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 123);
    \u0275\u0275text(4, "No Parts Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 124);
    \u0275\u0275text(6, "Try adjusting your search criteria or create your first part.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 18);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_71_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddPartModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 19);
    \u0275\u0275element(9, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Add First Part ");
    \u0275\u0275elementEnd()();
  }
}
function PartsCatalogComponent_div_3_div_72_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 131);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_72_button_6_Template_button_click_0_listener() {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r20 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r20 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.currentPage === i_r20 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r20 + 1, " ");
  }
}
function PartsCatalogComponent_div_3_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "button", 126);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_72_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 19);
    \u0275\u0275element(3, "path", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 128);
    \u0275\u0275template(6, PartsCatalogComponent_div_3_div_72_button_6_Template, 2, 3, "button", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 126);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_72_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 19);
    \u0275\u0275element(10, "path", 130);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c02).constructor(ctx_r1.totalPages));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function PartsCatalogComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 21)(2, "div", 22)(3, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5);
    \u0275\u0275element(5, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 25)(7, "div", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 27);
    \u0275\u0275text(10, "Total Parts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 28)(12, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 5);
    \u0275\u0275element(14, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 25)(16, "div", 29);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 27);
    \u0275\u0275text(19, "Low Stock Items");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 30)(21, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 5);
    \u0275\u0275element(23, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 25)(25, "div", 26);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 27);
    \u0275\u0275text(28, "Total Inventory Value");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 32)(30, "div", 33)(31, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 35);
    \u0275\u0275element(33, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PartsCatalogComponent_div_3_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 38);
    \u0275\u0275template(36, PartsCatalogComponent_div_3_Conditional_36_Template, 8, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 39)(38, "select", 40);
    \u0275\u0275listener("mousedown", function PartsCatalogComponent_div_3_Template_select_mousedown_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isDropdownOpen = true);
    })("change", function PartsCatalogComponent_div_3_Template_select_change_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.onStatusFilterChange();
      return \u0275\u0275resetView(ctx_r1.isDropdownOpen = false);
    })("blur", function PartsCatalogComponent_div_3_Template_select_blur_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isDropdownOpen = false);
    });
    \u0275\u0275twoWayListener("ngModelChange", function PartsCatalogComponent_div_3_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(39, "option", 41);
    \u0275\u0275text(40, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, PartsCatalogComponent_div_3_option_41_Template, 3, 4, "option", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 43);
    \u0275\u0275element(43, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 45)(45, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function PartsCatalogComponent_div_3_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.includeArchived, $event) || (ctx_r1.includeArchived = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PartsCatalogComponent_div_3_Template_input_change_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIncludeArchivedChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "label", 47);
    \u0275\u0275text(47, " Show Only Archived ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 48)(49, "div", 49)(50, "div", 50)(51, "button", 51);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewChange("grid"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 19);
    \u0275\u0275element(53, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(54, "button", 53);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewChange("list"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 19);
    \u0275\u0275element(56, "path", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "button", 55);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewChange("compact"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 19);
    \u0275\u0275element(59, "path", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(60, "button", 57);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewChange("table"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(61, "svg", 19);
    \u0275\u0275element(62, "path", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(63, "button", 59);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddPartModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(64, "svg", 19);
    \u0275\u0275element(65, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, " Add Part ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, PartsCatalogComponent_div_3_button_67_Template, 4, 0, "button", 60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "div", 61);
    \u0275\u0275template(69, PartsCatalogComponent_div_3_div_69_Template, 2, 1, "div", 62)(70, PartsCatalogComponent_div_3_div_70_Template, 24, 1, "div", 63)(71, PartsCatalogComponent_div_3_div_71_Template, 11, 0, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, PartsCatalogComponent_div_3_div_72_Template, 11, 4, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.summaryData.totalParts);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.summaryData.lowStockItems);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.getCurrencySymbol(), "", ctx_r1.summaryData.totalValue.toLocaleString(), "");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.searchTerm ? 36 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getStatusOptions());
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.isDropdownOpen);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.includeArchived);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.currentView === "grid");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.currentView === "list");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.currentView === "compact");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.currentView === "table");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.canArchiveOrRestore());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentView === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "table");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function PartsCatalogComponent_app_add_part_modal_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-add-part-modal", 132);
    \u0275\u0275listener("closeModal", function PartsCatalogComponent_app_add_part_modal_7_Template_app_add_part_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEditPartModal ? ctx_r1.closeEditPartModal() : ctx_r1.closeAddPartModal());
    })("createPart", function PartsCatalogComponent_app_add_part_modal_7_Template_app_add_part_modal_createPart_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreatePart($event));
    })("updatePart", function PartsCatalogComponent_app_add_part_modal_7_Template_app_add_part_modal_updatePart_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdatePart($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("manageLoading", ctx_r1.partLoading)("isEditMode", ctx_r1.showEditPartModal)("part", ctx_r1.selectedPart);
  }
}
var PartsCatalogComponent = class _PartsCatalogComponent {
  analyticsService;
  currencyService;
  moduleAccessService;
  toastService;
  authService;
  prefsService = inject(PreferencesService);
  // Data properties
  parts = [];
  loading = true;
  error = null;
  isDropdownOpen = false;
  showDeleteConfirmationModal = false;
  showArchiveModal = false;
  showRestoreModal = false;
  archiveWarningData = null;
  includeArchived = false;
  hasOpenPOs = false;
  // Track if selected part has open POs
  showBulkImportModal = false;
  // Bulk import modal flag
  // Search and filter properties
  searchTerm = "";
  selectedStatus = "";
  currentPage = 1;
  perPage = 15;
  totalParts = 0;
  totalPages = 0;
  // View control properties
  currentView = "grid";
  showAddPartModal = false;
  showEditPartModal = false;
  selectedPart = null;
  partLoading = false;
  // Summary data
  summaryData = {
    totalParts: 0,
    lowStockItems: 0,
    totalValue: 0
  };
  constructor(analyticsService, currencyService, moduleAccessService, toastService, authService) {
    this.analyticsService = analyticsService;
    this.currencyService = currencyService;
    this.moduleAccessService = moduleAccessService;
    this.toastService = toastService;
    this.authService = authService;
  }
  getCurrencySymbol() {
    return this.currencyService.getSymbol();
  }
  ngOnInit() {
    this.perPage = this.prefsService.get("items_per_page") || 15;
    this.loadPartsCatalog();
    this.loadPartsOverview();
  }
  loadPartsCatalog() {
    this.loading = true;
    this.error = null;
    this.analyticsService.getPartsCatalog(this.searchTerm || void 0, this.selectedStatus || void 0, this.currentPage, this.perPage, this.includeArchived ? true : void 0).subscribe({
      next: (response) => {
        if (response.success) {
          this.parts = response.data.data;
          this.totalParts = response.data.total;
          this.totalPages = response.data.last_page;
          this.currentPage = response.data.current_page;
        } else {
          this.error = "Failed to load parts catalog";
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading parts catalog:", err);
        this.error = "Error loading parts catalog. Please try again.";
        this.loading = false;
      }
    });
  }
  calculateSummaryData() {
    this.summaryData.totalParts = this.totalParts;
    this.summaryData.lowStockItems = this.parts.filter((part) => part.reorder_point && part.reorder_point > 0).length;
    this.summaryData.totalValue = this.parts.reduce((sum, part) => sum + Number(part.unit_cost || 0), 0);
  }
  loadPartsOverview() {
    this.analyticsService.getPartsOverview().subscribe({
      next: (response) => {
        if (response.success) {
          this.summaryData.totalParts = response.data.active_parts || response.data.total_parts;
          this.summaryData.lowStockItems = response.data.low_stock_count;
          this.summaryData.totalValue = response.data.total_value;
        } else {
          console.error("API returned success: false", response);
        }
      },
      error: (err) => {
        console.error("Error loading parts overview:", err);
      }
    });
  }
  onSearchChange() {
  }
  onStatusFilterChange() {
    this.currentPage = 1;
    this.loadPartsCatalog();
  }
  applyFilters() {
    this.currentPage = 1;
    this.loadPartsCatalog();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedStatus = "";
    this.currentPage = 1;
    this.loadPartsCatalog();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadPartsCatalog();
  }
  onViewChange(view) {
    this.currentView = view;
  }
  openAddPartModal() {
    this.showAddPartModal = true;
  }
  closeAddPartModal() {
    this.showAddPartModal = false;
  }
  openEditPartModal(part) {
    this.selectedPart = __spreadValues({}, part);
    this.showEditPartModal = true;
  }
  closeEditPartModal() {
    this.selectedPart = null;
    this.showEditPartModal = false;
  }
  onCreatePart(partData) {
    this.partLoading = true;
    this.analyticsService.createPart(partData).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeAddPartModal();
          this.loadPartsCatalog();
        }
      },
      error: (err) => {
        console.error("Error creating part:", err);
        this.partLoading = false;
      }
    }).add(() => {
      this.partLoading = false;
    });
  }
  onUpdatePart(partData) {
    this.partLoading = true;
    if (!this.selectedPart)
      return;
    this.analyticsService.updatePart(this.selectedPart.id, partData).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeEditPartModal();
          this.loadPartsCatalog();
        }
      },
      error: (err) => {
        console.error("Error updating part:", err);
        this.partLoading = false;
      }
    }).add(() => {
      this.partLoading = false;
    });
  }
  openDeleteConfirmationModal(selectedPart) {
    this.selectedPart = selectedPart;
    this.showDeleteConfirmationModal = true;
  }
  onDeletePart(partId) {
    this.analyticsService.deletePart(partId).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeDeleteModal();
          this.loadPartsCatalog();
        }
      },
      error: (err) => {
        console.error("Error deleting part:", err);
      }
    });
  }
  getStockStatus(part) {
    if (!part.reorder_point || part.reorder_point <= 0) {
      return { status: "In Stock", class: "in-stock", icon: "check-circle" };
    }
    if (part.unit_cost && part.unit_cost > 0) {
      return { status: "Low Stock", class: "low-stock", icon: "exclamation-triangle" };
    }
    return { status: "Out of Stock", class: "out-of-stock", icon: "x-circle" };
  }
  refreshData() {
    this.loadPartsCatalog();
  }
  getStatusOptions() {
    return ["active", "inactive", "discontinued"];
  }
  closeDeleteModal() {
    this.showDeleteConfirmationModal = false;
  }
  onIncludeArchivedChange() {
    this.currentPage = 1;
    this.loadPartsCatalog();
  }
  hasPermission(module, action) {
    return this.moduleAccessService.hasPermission(module, action);
  }
  openArchiveModal(part) {
    this.selectedPart = part;
    this.hasOpenPOs = false;
    this.showArchiveModal = true;
  }
  closeArchiveModal() {
    this.showArchiveModal = false;
    this.selectedPart = null;
  }
  onArchivePart(data) {
    if (!this.selectedPart)
      return;
    this.partLoading = true;
    this.analyticsService.archivePart(this.selectedPart.id, data.force).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeArchiveModal();
          this.loadPartsCatalog();
          this.loadPartsOverview();
          this.toastService.success("Part archived successfully.");
        }
        this.partLoading = false;
      },
      error: (err) => {
        console.error("Error archiving part:", err);
        if (err.status === 422 && err.error?.requires_force) {
          this.hasOpenPOs = true;
          this.toastService.warning('Part is linked to open Purchase Orders. Check "Force archive" option to proceed.');
        } else {
          this.toastService.error(err.error?.message || "Failed to archive part. Please try again.");
        }
        this.partLoading = false;
      }
    });
  }
  openRestoreModal(part) {
    this.selectedPart = part;
    this.showRestoreModal = true;
  }
  closeRestoreModal() {
    this.showRestoreModal = false;
    this.selectedPart = null;
  }
  onRestorePart(reason) {
    if (!this.selectedPart)
      return;
    this.partLoading = true;
    this.analyticsService.restorePart(this.selectedPart.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeRestoreModal();
          this.loadPartsCatalog();
          this.loadPartsOverview();
          this.toastService.success("Part restored successfully.");
        }
        this.partLoading = false;
      },
      error: (err) => {
        console.error("Error restoring part:", err);
        this.toastService.error(err.error?.message || "Failed to restore part. Please try again.");
        this.partLoading = false;
      }
    });
  }
  // Helper methods for role-based access
  canArchiveOrRestore() {
    const user = this.authService.getCurrentUser();
    return user?.user_type === "manager" || user?.user_type === "admin";
  }
  isArchived(part) {
    return part.is_archived === true;
  }
  // Bulk Import Methods
  openBulkImportModal() {
    this.showBulkImportModal = true;
  }
  closeBulkImportModal() {
    this.showBulkImportModal = false;
  }
  onBulkImportComplete() {
    this.closeBulkImportModal();
    this.loadPartsCatalog();
    this.loadPartsOverview();
  }
  static \u0275fac = function PartsCatalogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartsCatalogComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService), \u0275\u0275directiveInject(CurrencyService), \u0275\u0275directiveInject(ModuleAccessService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartsCatalogComponent, selectors: [["app-parts-catalog"]], decls: 12, vars: 17, consts: [[1, "parts-catalog"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["title", "Add New Part", 1, "fab", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [3, "manageLoading", "isEditMode", "part", "closeModal", "createPart", "updatePart", 4, "ngIf"], [3, "closeModal", "confirmDelete", "isOpen", "selectedCount", "entitySingular", "entityPlural", "itemName", "warningText"], [3, "closeModal", "confirmArchive", "isOpen", "partName", "hasOpenPOs", "canForceArchive"], [3, "closeModal", "confirmRestore", "isOpen", "partName"], [3, "closeModal", "importComplete", "isOpen"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "summary-cards-row"], [1, "summary-card", "total-parts"], [1, "card-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "card-content"], [1, "card-value"], [1, "card-label"], [1, "summary-card", "low-stock"], [1, "card-value", "warning"], [1, "summary-card", "total-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "search-filters-section"], [1, "search-row"], [1, "search-container", "grid-cols-2", "!grid"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search here...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "grid-cols-2"], [1, "status-filter", "relative"], [1, "status-select", 3, "mousedown", "change", "blur", "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow", "absolute", "top-1/2", "right-2", "transform", "-translate-y-1/2", "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "flex", "items-center", "gap-2", "ml-3"], ["type", "checkbox", "id", "includeArchived", 1, "w-4", "h-4", "text-orange-600", "rounded", "focus:ring-orange-500", 3, "ngModelChange", "change", "ngModel"], ["for", "includeArchived", 1, "text-sm", "text-gray-700", "cursor-pointer", "select-none"], [1, "actions-row"], [1, "view-controls"], [1, "view-toggles", "gap-2"], ["title", "Grid View", 1, "view-toggle", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["title", "List View", 1, "view-toggle", "!hidden", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 10h16M4 14h16M4 18h16"], ["title", "Compact Grid", 1, "view-toggle", "!hidden", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"], ["title", "Table View", 1, "view-toggle", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"], [1, "add-part-btn", 3, "click"], ["class", "add-part-btn bulk-import-btn", 3, "click", 4, "ngIf"], [1, "parts-display"], ["class", "parts-grid", 4, "ngIf"], ["class", "parts-table-container", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "btn", "btn-outline", 2, "margin-left", "0.5rem", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "margin-right", ".5rem"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "btn", "btn-primary", 2, "margin-left", "0.5rem", 3, "click"], [3, "value"], [1, "add-part-btn", "bulk-import-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "parts-grid"], ["class", "part-card", 3, "archived", 4, "ngFor", "ngForOf"], [1, "part-card"], [1, "part-header"], [1, "part-info"], [1, "flex", "items-center", "gap-2"], [1, "part-name"], ["class", "px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded", 4, "ngIf"], [1, "part-id"], ["class", "part-description !line-clamp-2", 4, "ngIf"], [1, "stock-status"], [1, "status-badge"], [1, "part-details"], ["class", "detail-row", 4, "ngIf"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "part-actions"], ["class", "action-btn edit", 3, "click", 4, "ngIf"], ["class", "action-btn archive", "title", "Archive", 3, "click", 4, "ngIf"], ["class", "action-btn restore", "title", "Restore", 3, "click", 4, "ngIf"], ["class", "action-btn delete", 3, "click", 4, "ngIf"], [1, "px-2", "py-1", "text-xs", "font-semibold", "text-gray-600", "bg-gray-200", "rounded"], [1, "part-description", "!line-clamp-2"], [1, "action-btn", "edit", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Archive", 1, "action-btn", "archive", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"], ["title", "Restore", 1, "action-btn", "restore", 3, "click"], [1, "action-btn", "delete", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "parts-table-container"], [1, "parts-table"], [1, "uppercase"], [3, "opacity-60", 4, "ngFor", "ngForOf"], [1, "part-number"], [1, "part-description", "truncate", 3, "title"], [1, "part-uom"], ["class", "part-cost", 4, "ngIf"], [1, "part-reorder"], [1, "part-abc"], [1, "part-status"], ["class", "action-btn edit", "title", "Edit", 3, "click", 4, "ngIf"], ["class", "action-btn delete", "title", "Delete", 3, "click", 4, "ngIf"], [1, "part-cost"], ["title", "Edit", 1, "action-btn", "edit", 3, "click"], ["title", "Delete", 1, "action-btn", "delete", 3, "click"], [1, "no-results"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "no-results-title"], [1, "no-results-description"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "pagination-page", 3, "click"], [3, "closeModal", "createPart", "updatePart", "manageLoading", "isEditMode", "part"]], template: function PartsCatalogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PartsCatalogComponent_div_1_Template, 4, 0, "div", 1)(2, PartsCatalogComponent_div_2_Template, 9, 1, "div", 2)(3, PartsCatalogComponent_div_3_Template, 73, 24, "div", 3);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function PartsCatalogComponent_Template_button_click_4_listener() {
        return ctx.openAddPartModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, PartsCatalogComponent_app_add_part_modal_7_Template, 1, 3, "app-add-part-modal", 7);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "app-delete-confirmation-modal", 8);
      \u0275\u0275listener("closeModal", function PartsCatalogComponent_Template_app_delete_confirmation_modal_closeModal_8_listener() {
        return ctx.closeDeleteModal();
      })("confirmDelete", function PartsCatalogComponent_Template_app_delete_confirmation_modal_confirmDelete_8_listener() {
        return ctx.onDeletePart(ctx.selectedPart == null ? null : ctx.selectedPart.id);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "app-archive-confirmation-modal", 9);
      \u0275\u0275listener("closeModal", function PartsCatalogComponent_Template_app_archive_confirmation_modal_closeModal_9_listener() {
        return ctx.closeArchiveModal();
      })("confirmArchive", function PartsCatalogComponent_Template_app_archive_confirmation_modal_confirmArchive_9_listener($event) {
        return ctx.onArchivePart($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "app-restore-confirmation-modal", 10);
      \u0275\u0275listener("closeModal", function PartsCatalogComponent_Template_app_restore_confirmation_modal_closeModal_10_listener() {
        return ctx.closeRestoreModal();
      })("confirmRestore", function PartsCatalogComponent_Template_app_restore_confirmation_modal_confirmRestore_10_listener($event) {
        return ctx.onRestorePart($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-parts-bulk-import-modal", 11);
      \u0275\u0275listener("closeModal", function PartsCatalogComponent_Template_app_parts_bulk_import_modal_closeModal_11_listener() {
        return ctx.closeBulkImportModal();
      })("importComplete", function PartsCatalogComponent_Template_app_parts_bulk_import_modal_importComplete_11_listener() {
        return ctx.onBulkImportComplete();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showAddPartModal || ctx.showEditPartModal);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showDeleteConfirmationModal)("selectedCount", ctx.selectedPart ? 1 : 0)("entitySingular", "Part")("entityPlural", "Parts")("itemName", ctx.selectedPart == null ? null : ctx.selectedPart.name)("warningText", null);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showArchiveModal)("partName", ctx.selectedPart == null ? null : ctx.selectedPart.name)("hasOpenPOs", ctx.hasOpenPOs)("canForceArchive", ctx.canArchiveOrRestore());
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showRestoreModal)("partName", ctx.selectedPart == null ? null : ctx.selectedPart.name);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showBulkImportModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AddPartModalComponent, DeleteConfirmationModalComponent, ArchiveConfirmationModalComponent, RestoreConfirmationModalComponent, PartsBulkImportModalComponent], styles: ['\n\n.parts-catalog[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-parts[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.low-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-value[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .advanced-filters-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .advanced-filters-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .advanced-filters-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 2px solid #d1d5db;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 0.125rem;\n  transform: scale(0);\n  transition: transform 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]::after {\n  transform: scale(1);\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   .bulk-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 7.5px;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: none;\n  border: none;\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn.bulk-import-btn[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn.bulk-import-btn[_ngcontent-%COMP%]:hover {\n  background-color: #059669;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-id[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-description[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .status-badge.out-of-stock[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem;\n  display: flex;\n  gap: 0.75rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%]:hover {\n  background-color: #dc2626;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.archive[_ngcontent-%COMP%] {\n  background-color: #f59e0b;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.archive[_ngcontent-%COMP%]:hover {\n  background-color: #d97706;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.restore[_ngcontent-%COMP%] {\n  background-color: #10b981;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.restore[_ngcontent-%COMP%]:hover {\n  background-color: #059669;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: currentColor;\n}\n.parts-catalog[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.parts-catalog[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .no-results-title[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .no-results-description[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.parts-catalog[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n  min-width: 150px;\n}\n.parts-catalog[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n  transition: transform 0.2s ease;\n}\n.parts-catalog[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  max-width: 200px;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-uom[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-cost[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #10b981;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-reorder[_ngcontent-%COMP%], \n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-abc[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  min-width: 2rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border: none;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-right: 0.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #ef4444;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.archive[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.archive[_ngcontent-%COMP%]:hover {\n  background-color: #fde68a;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.restore[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.restore[_ngcontent-%COMP%]:hover {\n  background-color: #a7f3d0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background-color: white;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background-color: white;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 2.5rem;\n  text-align: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n@media (max-width: 768px) {\n  .parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n  }\n  .parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n  .parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n.parts-catalog[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 12px 1rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border: 1px solid transparent;\n}\n.parts-catalog[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #374151;\n  border-color: #d1d5db;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);\n}\n.parts-catalog[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: #ffffff;\n  box-shadow: 0 1px 3px 0 rgba(59, 130, 246, 0.3);\n}\n.parts-catalog[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);\n}\n/*# sourceMappingURL=parts-catalog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartsCatalogComponent, [{
    type: Component,
    args: [{ selector: "app-parts-catalog", standalone: true, imports: [CommonModule, FormsModule, AddPartModalComponent, DeleteConfirmationModalComponent, ArchiveConfirmationModalComponent, RestoreConfirmationModalComponent, PartsBulkImportModalComponent], template: `<div class="parts-catalog">\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Loading parts catalog...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="error-state">\r
    <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
    </svg>\r
    <h3 class="error-title">{{ error }}</h3>\r
    <button class="btn btn-primary" (click)="refreshData()">\r
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
      </svg>\r
      Retry\r
    </button>\r
  </div>\r
\r
  <!-- Parts Catalog Content -->\r
  <div *ngIf="!loading && !error">\r
    <!-- Summary Cards Row -->\r
    <div class="summary-cards-row">\r
      <div class="summary-card total-parts">\r
        <div class="card-icon">\r
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r
          </svg>\r
        </div>\r
        <div class="card-content">\r
          <div class="card-value">{{ summaryData.totalParts }}</div>\r
          <div class="card-label">Total Parts</div>\r
        </div>\r
      </div>\r
\r
      <div class="summary-card low-stock">\r
        <div class="card-icon">\r
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
          </svg>\r
        </div>\r
        <div class="card-content">\r
          <div class="card-value warning">{{ summaryData.lowStockItems }}</div>\r
          <div class="card-label">Low Stock Items</div>\r
        </div>\r
      </div>\r
\r
      <div class="summary-card total-value">\r
        <div class="card-icon">\r
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
          </svg>\r
        </div>\r
        <div class="card-content">\r
          <div class="card-value">{{ getCurrencySymbol() }}{{ summaryData.totalValue.toLocaleString() }}</div>\r
          <div class="card-label">Total Inventory Value</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Search and Filters Section -->\r
    <div class="search-filters-section">\r
      <div class="search-row">\r
        <div class="search-container grid-cols-2 !grid">\r
          <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
          <input\r
            type="text"\r
            placeholder="Search here..."\r
            class="search-input"\r
            [(ngModel)]="searchTerm">\r
\r
          <div class="grid-cols-2">\r
            @if (searchTerm) {\r
              <button class="btn btn-outline" (click)="clearFilters()" style="margin-left: 0.5rem;">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: .5rem;">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
                </svg>\r
                Clear Filters\r
              </button>\r
              <button class="btn btn-primary" (click)="applyFilters()" style="margin-left: 0.5rem;">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: .5rem;">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
                </svg>\r
                Apply Filters\r
              </button>\r
            }\r
          </div>\r
        </div>\r
\r
\r
        <div class="status-filter relative">\r
          <select\r
            (mousedown)="isDropdownOpen = true"\r
            (change)="onStatusFilterChange(); isDropdownOpen = false"\r
            (blur)="isDropdownOpen = false"\r
            class="status-select"\r
            [(ngModel)]="selectedStatus">\r
            <option value="">All Status</option>\r
            <option *ngFor="let status of getStatusOptions()" [value]="status">\r
              {{ status | titlecase }}\r
            </option>\r
          </select>\r
\r
          <svg class="dropdown-arrow absolute top-1/2 right-2 transform -translate-y-1/2 w-4 h-4"\r
               [class.rotated]="isDropdownOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
          </svg>\r
        </div>\r
\r
        <!-- Show Only Archived Toggle -->\r
        <div class="flex items-center gap-2 ml-3">\r
          <input\r
            type="checkbox"\r
            id="includeArchived"\r
            [(ngModel)]="includeArchived"\r
            (change)="onIncludeArchivedChange()"\r
            class="w-4 h-4 text-orange-600 rounded focus:ring-orange-500">\r
          <label for="includeArchived" class="text-sm text-gray-700 cursor-pointer select-none">\r
            Show Only Archived\r
          </label>\r
        </div>\r
\r
        <div class="actions-row">\r
          <div class="view-controls">\r
            <div class="view-toggles gap-2">\r
              <button\r
                class="view-toggle"\r
                [class.active]="currentView === 'grid'"\r
                (click)="onViewChange('grid')"\r
                title="Grid View">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>\r
                </svg>\r
              </button>\r
              <button\r
                class="view-toggle !hidden"\r
                [class.active]="currentView === 'list'"\r
                (click)="onViewChange('list')"\r
                title="List View">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r
                </svg>\r
              </button>\r
              <button\r
                class="view-toggle !hidden"\r
                [class.active]="currentView === 'compact'"\r
                (click)="onViewChange('compact')"\r
                title="Compact Grid">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>\r
                </svg>\r
              </button>\r
              <button\r
                class="view-toggle"\r
                [class.active]="currentView === 'table'"\r
                (click)="onViewChange('table')"\r
                title="Table View">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"></path>\r
                </svg>\r
              </button>\r
            </div>\r
\r
\r
            <button class="add-part-btn" (click)="openAddPartModal()">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
              </svg>\r
              Add Part\r
            </button>\r
            <button \r
              *ngIf="canArchiveOrRestore()" \r
              class="add-part-btn bulk-import-btn" \r
              (click)="openBulkImportModal()">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>\r
              </svg>\r
              Bulk Import\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Parts Display -->\r
    <div class="parts-display">\r
      <!-- Grid View -->\r
      <div *ngIf="currentView === 'grid'" class="parts-grid">\r
        <div *ngFor="let part of parts" class="part-card" [class.archived]="isArchived(part)">\r
          <div class="part-header">\r
            <div class="part-info">\r
              <div class="flex items-center gap-2">\r
                <h4 class="part-name" [class.text-gray-500]="isArchived(part)">{{ part.name }}</h4>\r
                <span *ngIf="isArchived(part)" class="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded">\r
                  ARCHIVED\r
                </span>\r
              </div>\r
              <span class="part-id">{{ part.part_number }}</span>\r
              <span class="part-description !line-clamp-2" *ngIf="part.description">{{ part.description }}</span>\r
            </div>\r
            <div class="stock-status">\r
              <span class="status-badge" [class]="getStockStatus(part).class">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
                </svg>\r
                {{ getStockStatus(part).status }}\r
              </span>\r
            </div>\r
          </div>\r
\r
          <div class="part-details">\r
            <div class="detail-row" *ngIf="part.unit_cost">\r
              <span class="detail-label">Unit Cost:</span>\r
              <span class="detail-value">{{ getCurrencySymbol() }}{{ part.unit_cost.toLocaleString() }}</span>\r
            </div>\r
            <div class="detail-row">\r
              <span class="detail-label">UOM:</span>\r
              <span class="detail-value">{{ part.uom }}</span>\r
            </div>\r
            <div class="detail-row" *ngIf="part.reorder_point">\r
              <span class="detail-label">Reorder Point:</span>\r
              <span class="detail-value">{{ part.reorder_point }}</span>\r
            </div>\r
            <div class="detail-row" *ngIf="part.abc_class">\r
              <span class="detail-label">ABC Class:</span>\r
              <span class="detail-value">{{ part.abc_class }}</span>\r
            </div>\r
          </div>\r
\r
          <div class="part-actions">\r
            <button class="action-btn edit" (click)="openEditPartModal(part)" *ngIf="!isArchived(part)">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
              </svg>\r
              Edit\r
            </button>\r
            <button \r
              *ngIf="!includeArchived && !isArchived(part) && canArchiveOrRestore()" \r
              class="action-btn archive" \r
              (click)="openArchiveModal(part)"\r
              title="Archive">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>\r
              </svg>\r
              Archive\r
            </button>\r
            <button \r
              *ngIf="(includeArchived || isArchived(part)) && canArchiveOrRestore()" \r
              class="action-btn restore" \r
              (click)="openRestoreModal(part)"\r
              title="Restore">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
              </svg>\r
              Restore\r
            </button>\r
            <button class="action-btn delete" (click)="openDeleteConfirmationModal(part)" *ngIf="!isArchived(part)">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
              </svg>\r
              Delete\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Table View -->\r
      <div *ngIf="currentView === 'table'" class="parts-table-container">\r
        <table class="parts-table">\r
          <thead>\r
          <tr class="uppercase">\r
            <th>Part Number</th>\r
            <th>Name</th>\r
            <th>Description</th>\r
            <th>UOM</th>\r
            <th>Unit Cost</th>\r
            <th>Reorder Point</th>\r
            <th>ABC Class</th>\r
            <th>Status</th>\r
            <th>Actions</th>\r
          </tr>\r
          </thead>\r
          <tbody>\r
          <tr *ngFor="let part of parts" [class.opacity-60]="isArchived(part)">\r
            <td class="part-number">{{ part.part_number }}</td>\r
            <td class="part-name">\r
              <div class="flex items-center gap-2">\r
                <span [class.text-gray-500]="isArchived(part)">{{ part.name }}</span>\r
                <span *ngIf="isArchived(part)" class="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded">\r
                  ARCHIVED\r
                </span>\r
              </div>\r
            </td>\r
            <td class="part-description truncate" title="{{ part.description }}">{{ part.description || '-' }}</td>\r
            <td class="part-uom">{{ part.uom }}</td>\r
            <td class="part-cost" *ngIf="part.unit_cost">{{ getCurrencySymbol() }}{{ part.unit_cost.toLocaleString() }}</td>\r
            <td class="part-cost" *ngIf="!part.unit_cost">-</td>\r
            <td class="part-reorder">{{ part.reorder_point || '-' }}</td>\r
            <td class="part-abc">{{ part.abc_class || '-' }}</td>\r
            <td class="part-status">\r
                <span class="status-badge" [class]="getStockStatus(part).class">\r
                  {{ getStockStatus(part).status }}\r
                </span>\r
            </td>\r
            <td class="part-actions">\r
              <button class="action-btn edit" (click)="openEditPartModal(part)" title="Edit" *ngIf="!isArchived(part)">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                </svg>\r
              </button>\r
              <button \r
                *ngIf="!includeArchived && !isArchived(part) && canArchiveOrRestore()" \r
                class="action-btn archive" \r
                (click)="openArchiveModal(part)"\r
                title="Archive">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>\r
                </svg>\r
              </button>\r
              <button \r
                *ngIf="(includeArchived || isArchived(part)) && canArchiveOrRestore()" \r
                class="action-btn restore" \r
                (click)="openRestoreModal(part)"\r
                title="Restore">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
                </svg>\r
              </button>\r
              <button class="action-btn delete" (click)="openDeleteConfirmationModal(part)" title="Delete" *ngIf="!isArchived(part)">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                </svg>\r
              </button>\r
            </td>\r
          </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- No Results Message -->\r
      <div *ngIf="parts.length === 0" class="no-results">\r
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
        </svg>\r
        <h3 class="no-results-title">No Parts Found</h3>\r
        <p class="no-results-description">Try adjusting your search criteria or create your first part.</p>\r
        <button class="btn btn-primary" (click)="openAddPartModal()">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
          </svg>\r
          Add First Part\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div *ngIf="totalPages > 1" class="pagination">\r
      <button\r
        class="pagination-btn"\r
        [disabled]="currentPage === 1"\r
        (click)="onPageChange(currentPage - 1)">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
        </svg>\r
        Previous\r
      </button>\r
\r
      <div class="pagination-pages">\r
        <button\r
          *ngFor="let page of [].constructor(totalPages); let i = index"\r
          class="pagination-page"\r
          [class.active]="currentPage === i + 1"\r
          (click)="onPageChange(i + 1)">\r
          {{ i + 1 }}\r
        </button>\r
      </div>\r
\r
      <button\r
        class="pagination-btn"\r
        [disabled]="currentPage === totalPages"\r
        (click)="onPageChange(currentPage + 1)">\r
        Next\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
        </svg>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Floating Action Button -->\r
  <button class="fab" (click)="openAddPartModal()" title="Add New Part">\r
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
    </svg>\r
  </button>\r
\r
  <!-- Unified Part Modal -->\r
  <app-add-part-modal\r
    *ngIf="showAddPartModal || showEditPartModal"\r
    [manageLoading]="partLoading"\r
    [isEditMode]="showEditPartModal"\r
    [part]="selectedPart"\r
    (closeModal)="showEditPartModal ? closeEditPartModal() : closeAddPartModal()"\r
    (createPart)="onCreatePart($event)"\r
    (updatePart)="onUpdatePart($event)">\r
  </app-add-part-modal>\r
\r
  <!--Delete Part Modal-->\r
  <app-delete-confirmation-modal\r
    [isOpen]="showDeleteConfirmationModal"\r
    [selectedCount]="selectedPart ? 1 : 0"\r
    [entitySingular]="'Part'"\r
    [entityPlural]="'Parts'"\r
    [itemName]="selectedPart?.name"\r
    [warningText]="null"\r
    (closeModal)="closeDeleteModal()"\r
    (confirmDelete)="onDeletePart(selectedPart?.id)">\r
  </app-delete-confirmation-modal>\r
\r
  <!-- Archive Confirmation Modal -->\r
  <app-archive-confirmation-modal\r
    [isOpen]="showArchiveModal"\r
    [partName]="selectedPart?.name"\r
    [hasOpenPOs]="hasOpenPOs"\r
    [canForceArchive]="canArchiveOrRestore()"\r
    (closeModal)="closeArchiveModal()"\r
    (confirmArchive)="onArchivePart($event)">\r
  </app-archive-confirmation-modal>\r
\r
  <!-- Restore Confirmation Modal -->\r
  <app-restore-confirmation-modal\r
    [isOpen]="showRestoreModal"\r
    [partName]="selectedPart?.name"\r
    (closeModal)="closeRestoreModal()"\r
    (confirmRestore)="onRestorePart($event)">\r
  </app-restore-confirmation-modal>\r
\r
  <!-- Bulk Import Modal -->\r
  <app-parts-bulk-import-modal\r
    [isOpen]="showBulkImportModal"\r
    (closeModal)="closeBulkImportModal()"\r
    (importComplete)="onBulkImportComplete()">\r
  </app-parts-bulk-import-modal>\r
</div>\r
`, styles: ['/* src/app/inventory/components/parts-catalog/parts-catalog.component.scss */\n.parts-catalog {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.parts-catalog .summary-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.parts-catalog .summary-cards-row .summary-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog .summary-cards-row .summary-card .card-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.parts-catalog .summary-cards-row .summary-card .card-content .card-value {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog .summary-cards-row .summary-card .card-content .card-value.warning {\n  color: #f59e0b;\n}\n.parts-catalog .summary-cards-row .summary-card .card-content .card-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog .summary-cards-row .summary-card.total-parts .card-icon {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.parts-catalog .summary-cards-row .summary-card.low-stock .card-icon {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.parts-catalog .summary-cards-row .summary-card.total-value .card-icon {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.parts-catalog .search-filters-section {\n  margin-bottom: 2rem;\n}\n.parts-catalog .search-filters-section .search-row {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.parts-catalog .search-filters-section .search-row .search-container {\n  flex: 1;\n  position: relative;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-input::placeholder {\n  color: #9ca3af;\n}\n.parts-catalog .search-filters-section .search-row .advanced-filters-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.parts-catalog .search-filters-section .search-row .advanced-filters-btn:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog .search-filters-section .search-row .advanced-filters-btn svg {\n  color: #6b7280;\n}\n.parts-catalog .search-filters-section .actions-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox input[type=checkbox] {\n  display: none;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox .checkmark {\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 2px solid #d1d5db;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox .checkmark::after {\n  content: "";\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 0.125rem;\n  transform: scale(0);\n  transition: transform 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox input[type=checkbox]:checked + .checkmark {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox input[type=checkbox]:checked + .checkmark::after {\n  transform: scale(1);\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox .bulk-text {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 7.5px;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: none;\n  border: none;\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle.active {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle svg {\n  width: 1rem;\n  height: 1rem;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn:hover {\n  background-color: #2563eb;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn svg {\n  color: white;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn.bulk-import-btn {\n  background-color: #10b981;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn.bulk-import-btn:hover {\n  background-color: #059669;\n}\n.parts-catalog .parts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.parts-catalog .parts-grid .part-card {\n  background-color: white;\n  position: relative;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog .parts-grid .part-card .part-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.parts-catalog .parts-grid .part-card .part-header .part-info .part-name {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.parts-catalog .parts-grid .part-card .part-header .part-info .part-id {\n  display: block;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog .parts-grid .part-card .part-header .part-info .part-description {\n  display: block;\n  font-size: 0.875rem;\n  color: #9ca3af;\n}\n.parts-catalog .parts-grid .part-card .part-header .stock-status .status-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-header .stock-status .status-badge.out-of-stock {\n  background-color: #ef4444;\n}\n.parts-catalog .parts-grid .part-card .part-header .stock-status .status-badge svg {\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-details {\n  margin-bottom: 2.5rem;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row:last-child {\n  border-bottom: none;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row .detail-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row .detail-value {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row .detail-value svg {\n  color: #9ca3af;\n}\n.parts-catalog .parts-grid .part-card .part-actions {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem;\n  display: flex;\n  gap: 0.75rem;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.edit {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.edit:hover {\n  background-color: #2563eb;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.delete {\n  background-color: #ef4444;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.delete:hover {\n  background-color: #dc2626;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.archive {\n  background-color: #f59e0b;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.archive:hover {\n  background-color: #d97706;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.restore {\n  background-color: #10b981;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.restore:hover {\n  background-color: #059669;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn svg {\n  color: currentColor;\n}\n.parts-catalog .fab {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.parts-catalog .fab:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.parts-catalog .fab svg {\n  color: white;\n}\n.parts-catalog .no-results {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog .no-results .no-results-title {\n  color: #6b7280;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.parts-catalog .no-results .no-results-description {\n  color: #9ca3af;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n}\n.parts-catalog .no-results .btn {\n  margin-top: 0.5rem;\n}\n.parts-catalog .loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.parts-catalog .loading-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.parts-catalog .loading-state p {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.parts-catalog .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.parts-catalog .error-state .error-title {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.parts-catalog .error-state .btn {\n  margin-top: 1rem;\n}\n.parts-catalog .status-filter .status-select {\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n  min-width: 150px;\n}\n.parts-catalog .status-filter .status-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.parts-catalog .status-filter .dropdown-arrow {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n  transition: transform 0.2s ease;\n}\n.parts-catalog .status-filter .dropdown-arrow.rotated {\n  transform: rotate(180deg);\n}\n.parts-catalog .parts-table-container {\n  overflow-x: auto;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog .parts-table-container .parts-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.parts-catalog .parts-table-container .parts-table thead {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.parts-catalog .parts-table-container .parts-table thead th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr {\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr:last-child {\n  border-bottom: none;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-number {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-name {\n  font-weight: 500;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-description {\n  color: #6b7280;\n  max-width: 200px;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-uom {\n  font-weight: 500;\n  color: #374151;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-cost {\n  font-weight: 600;\n  color: #10b981;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-reorder,\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-abc {\n  text-align: center;\n  color: #6b7280;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-status .status-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  min-width: 2rem;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border: none;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-right: 0.5rem;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn:last-child {\n  margin-right: 0;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.edit {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.edit:hover {\n  background-color: #e5e7eb;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.delete {\n  background-color: #fef2f2;\n  color: #ef4444;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.delete:hover {\n  background-color: #fee2e2;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.archive {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.archive:hover {\n  background-color: #fde68a;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.restore {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.restore:hover {\n  background-color: #a7f3d0;\n}\n.parts-catalog .pagination {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1rem;\n}\n.parts-catalog .pagination .pagination-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background-color: white;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .pagination .pagination-btn:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog .pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.parts-catalog .pagination .pagination-pages {\n  display: flex;\n  gap: 0.25rem;\n}\n.parts-catalog .pagination .pagination-pages .pagination-page {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background-color: white;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 2.5rem;\n  text-align: center;\n}\n.parts-catalog .pagination .pagination-pages .pagination-page:hover:not(.active) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog .pagination .pagination-pages .pagination-page.active {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n@media (max-width: 768px) {\n  .parts-catalog .search-filters-section .search-row {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .parts-catalog .search-filters-section .search-row .status-filter .status-select {\n    min-width: auto;\n    width: 100%;\n  }\n  .parts-catalog .parts-table-container .parts-table {\n    min-width: 800px;\n  }\n  .parts-catalog .pagination {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .parts-catalog .pagination .pagination-pages {\n    order: -1;\n  }\n}\n.parts-catalog .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 12px 1rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  font-size: 0.875rem;\n  border: 1px solid transparent;\n}\n.parts-catalog .btn.btn-outline {\n  background-color: #ffffff;\n  color: #374151;\n  border-color: #d1d5db;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);\n}\n.parts-catalog .btn.btn-outline:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog .btn.btn-primary {\n  background-color: #3b82f6;\n  color: #ffffff;\n  box-shadow: 0 1px 3px 0 rgba(59, 130, 246, 0.3);\n}\n.parts-catalog .btn.btn-primary:hover {\n  background-color: #2563eb;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);\n}\n/*# sourceMappingURL=parts-catalog.component.css.map */\n'] }]
  }], () => [{ type: InventoryAnalyticsService }, { type: CurrencyService }, { type: ModuleAccessService }, { type: ToastService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartsCatalogComponent, { className: "PartsCatalogComponent", filePath: "src/app/inventory/components/parts-catalog/parts-catalog.component.ts", lineNumber: 25 });
})();
export {
  PartsCatalogComponent
};
//# sourceMappingURL=chunk-LXX2HLG7.js.map
