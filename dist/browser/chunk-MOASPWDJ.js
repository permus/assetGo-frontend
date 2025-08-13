import {
  InventoryAnalyticsService
} from "./chunk-ESHGZUZD.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-RCYJD2NT.js";
import "./chunk-5YESG6NV.js";
import "./chunk-3DQDTIJW.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  TitleCasePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-E3IEKUEF.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/inventory/components/edit-part-modal/edit-part-modal.component.ts
function EditPartModalComponent_option_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r1 = ctx.$implicit;
    \u0275\u0275property("value", status_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, status_r1), " ");
  }
}
function EditPartModalComponent_option_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const abcClass_r2 = ctx.$implicit;
    \u0275\u0275property("value", abcClass_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Class ", abcClass_r2, " ");
  }
}
var EditPartModalComponent = class _EditPartModalComponent {
  part;
  closeModal = new EventEmitter();
  updatePart = new EventEmitter();
  editForm = {};
  ngOnInit() {
    this.editForm = {
      name: this.part.name,
      part_number: this.part.part_number,
      description: this.part.description,
      uom: this.part.uom,
      unit_cost: this.part.unit_cost,
      category_id: this.part.category_id,
      reorder_point: this.part.reorder_point,
      reorder_qty: this.part.reorder_qty,
      barcode: this.part.barcode,
      status: this.part.status,
      abc_class: this.part.abc_class
    };
  }
  onSubmit() {
    if (this.isFormValid()) {
      this.updatePart.emit(this.editForm);
    }
  }
  onCancel() {
    this.closeModal.emit();
  }
  isFormValid() {
    return !!(this.editForm.name && this.editForm.uom);
  }
  getStatusOptions() {
    return ["active", "inactive", "discontinued"];
  }
  getAbcClassOptions() {
    return ["A", "B", "C"];
  }
  static \u0275fac = function EditPartModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditPartModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPartModalComponent, selectors: [["app-edit-part-modal"]], inputs: { part: "part" }, outputs: { closeModal: "closeModal", updatePart: "updatePart" }, decls: 77, vars: 13, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "edit-form", 3, "ngSubmit"], [1, "form-grid"], [1, "form-section"], [1, "section-title"], [1, "form-group"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "name", "name", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "part_number", 1, "form-label"], ["type", "text", "id", "part_number", "name", "part_number", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "description", 1, "form-label"], ["id", "description", "name", "description", "rows", "3", "placeholder", "Enter part description...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "uom", 1, "form-label"], ["type", "text", "id", "uom", "name", "uom", "required", "", "placeholder", "e.g., pcs, kg, m", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "unit_cost", 1, "form-label"], ["type", "number", "id", "unit_cost", "name", "unit_cost", "min", "0", "step", "0.01", "placeholder", "0.00", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "category_id", 1, "form-label"], ["type", "number", "id", "category_id", "name", "category_id", "placeholder", "Category ID", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "reorder_point", 1, "form-label"], ["type", "number", "id", "reorder_point", "name", "reorder_point", "min", "0", "placeholder", "0", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "reorder_qty", 1, "form-label"], ["type", "number", "id", "reorder_qty", "name", "reorder_qty", "min", "0", "placeholder", "0", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "barcode", 1, "form-label"], ["type", "text", "id", "barcode", "name", "barcode", "placeholder", "Barcode", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "status", 1, "form-label"], ["id", "status", "name", "status", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "abc_class", 1, "form-label"], ["id", "abc_class", "name", "abc_class", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"]], template: function EditPartModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function EditPartModalComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function EditPartModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Edit Part");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function EditPartModalComponent_Template_button_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "form", 7);
      \u0275\u0275listener("ngSubmit", function EditPartModalComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "h3", 10);
      \u0275\u0275text(12, "Basic Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "label", 12);
      \u0275\u0275text(15, "Part Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.name, $event) || (ctx.editForm.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11)(18, "label", 14);
      \u0275\u0275text(19, "Part Number *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.part_number, $event) || (ctx.editForm.part_number = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 11)(22, "label", 16);
      \u0275\u0275text(23, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "textarea", 17);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_textarea_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.description, $event) || (ctx.editForm.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 9)(26, "h3", 10);
      \u0275\u0275text(27, "Specifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 11)(29, "label", 18);
      \u0275\u0275text(30, "Unit of Measure *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.uom, $event) || (ctx.editForm.uom = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 11)(33, "label", 20);
      \u0275\u0275text(34, "Unit Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.unit_cost, $event) || (ctx.editForm.unit_cost = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 11)(37, "label", 22);
      \u0275\u0275text(38, "Category ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.category_id, $event) || (ctx.editForm.category_id = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 9)(41, "h3", 10);
      \u0275\u0275text(42, "Inventory Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 11)(44, "label", 24);
      \u0275\u0275text(45, "Reorder Point");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.reorder_point, $event) || (ctx.editForm.reorder_point = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 11)(48, "label", 26);
      \u0275\u0275text(49, "Reorder Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.reorder_qty, $event) || (ctx.editForm.reorder_qty = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 11)(52, "label", 28);
      \u0275\u0275text(53, "Barcode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.barcode, $event) || (ctx.editForm.barcode = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 9)(56, "h3", 10);
      \u0275\u0275text(57, "Classification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 11)(59, "label", 30);
      \u0275\u0275text(60, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "select", 31);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_select_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.status, $event) || (ctx.editForm.status = $event);
        return $event;
      });
      \u0275\u0275elementStart(62, "option", 32);
      \u0275\u0275text(63, "Select Status");
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, EditPartModalComponent_option_64_Template, 3, 4, "option", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 11)(66, "label", 34);
      \u0275\u0275text(67, "ABC Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "select", 35);
      \u0275\u0275twoWayListener("ngModelChange", function EditPartModalComponent_Template_select_ngModelChange_68_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editForm.abc_class, $event) || (ctx.editForm.abc_class = $event);
        return $event;
      });
      \u0275\u0275elementStart(69, "option", 32);
      \u0275\u0275text(70, "Select ABC Class");
      \u0275\u0275elementEnd();
      \u0275\u0275template(71, EditPartModalComponent_option_71_Template, 2, 2, "option", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "div", 36)(73, "button", 37);
      \u0275\u0275listener("click", function EditPartModalComponent_Template_button_click_73_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(74, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 38);
      \u0275\u0275text(76, " Update Part ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.part_number);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.description);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.uom);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.unit_cost);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.category_id);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.reorder_point);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.reorder_qty);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.barcode);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.status);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.getStatusOptions());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.editForm.abc_class);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.getAbcClassOptions());
    }
  }, dependencies: [CommonModule, NgForOf, TitleCasePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm], styles: [`

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
.modal-content[_ngcontent-%COMP%] {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
}
.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {
  background-color: #f3f4f6;
  color: #374151;
}
.edit-form[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.edit-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}
.edit-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], 
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%], 
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: white;
  transition: all 0.2s;
}
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, 
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus, 
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, 
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder, 
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]::placeholder {
  color: #9ca3af;
}
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 80px;
}
.edit-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
.edit-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}
.edit-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
}
.edit-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {
  background-color: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.edit-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}
.edit-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {
  background-color: #3b82f6;
  color: white;
}
.edit-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {
  background-color: #2563eb;
}
.edit-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}
@media (max-width: 768px) {
  .modal-content[_ngcontent-%COMP%] {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
  .edit-form[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .edit-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .edit-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .edit-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .modal-header[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
    font-size: 1.25rem;
  }
  .edit-form[_ngcontent-%COMP%] {
    padding: 1rem;
  }
}
/*# sourceMappingURL=edit-part-modal.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditPartModalComponent, [{
    type: Component,
    args: [{ selector: "app-edit-part-modal", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="modal-overlay" (click)="onCancel()">\r\n  <div class="modal-content" (click)="$event.stopPropagation()">\r\n    <div class="modal-header">\r\n      <h2 class="modal-title">Edit Part</h2>\r\n      <button class="close-btn" (click)="onCancel()">\r\n        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n        </svg>\r\n      </button>\r\n    </div>\r\n\r\n    <form (ngSubmit)="onSubmit()" class="edit-form">\r\n      <div class="form-grid">\r\n        <!-- Basic Information -->\r\n        <div class="form-section">\r\n          <h3 class="section-title">Basic Information</h3>\r\n          \r\n          <div class="form-group">\r\n            <label for="name" class="form-label">Part Name *</label>\r\n            <input \r\n              type="text" \r\n              id="name" \r\n              name="name" \r\n              class="form-input"\r\n              [(ngModel)]="editForm.name"\r\n              required>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="part_number" class="form-label">Part Number *</label>\r\n            <input \r\n              type="text" \r\n              id="part_number" \r\n              name="part_number" \r\n              class="form-input"\r\n              [(ngModel)]="editForm.part_number"\r\n              required>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="description" class="form-label">Description</label>\r\n            <textarea \r\n              id="description" \r\n              name="description" \r\n              class="form-textarea"\r\n              rows="3"\r\n              [(ngModel)]="editForm.description"\r\n              placeholder="Enter part description..."></textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Specifications -->\r\n        <div class="form-section">\r\n          <h3 class="section-title">Specifications</h3>\r\n          \r\n          <div class="form-group">\r\n            <label for="uom" class="form-label">Unit of Measure *</label>\r\n            <input \r\n              type="text" \r\n              id="uom" \r\n              name="uom" \r\n              class="form-input"\r\n              [(ngModel)]="editForm.uom"\r\n              required\r\n              placeholder="e.g., pcs, kg, m">\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="unit_cost" class="form-label">Unit Cost</label>\r\n            <input \r\n              type="number" \r\n              id="unit_cost" \r\n              name="unit_cost" \r\n              class="form-input"\r\n              [(ngModel)]="editForm.unit_cost"\r\n              min="0"\r\n              step="0.01"\r\n              placeholder="0.00">\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="category_id" class="form-label">Category ID</label>\r\n            <input \r\n              type="number" \r\n              id="category_id" \r\n              name="category_id" \r\n              class="form-input"\r\n              [(ngModel)]="editForm.category_id"\r\n              placeholder="Category ID">\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Inventory Management -->\r\n        <div class="form-section">\r\n          <h3 class="section-title">Inventory Management</h3>\r\n          \r\n          <div class="form-group">\r\n            <label for="reorder_point" class="form-label">Reorder Point</label>\r\n            <input \r\n              type="number" \r\n              id="reorder_point" \r\n              name="reorder_point" \r\n              class="form-input"\r\n              [(ngModel)]="editForm.reorder_point"\r\n              min="0"\r\n              placeholder="0">\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="reorder_qty" class="form-label">Reorder Quantity</label>\r\n            <input \r\n              type="number" \r\n              id="reorder_qty" \r\n              name="reorder_qty" \r\n              class="form-input"\r\n              [(ngModel)]="editForm.reorder_qty"\r\n              min="0"\r\n              placeholder="0">\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="barcode" class="form-label">Barcode</label>\r\n            <input \r\n              type="text" \r\n              id="barcode" \r\n              name="barcode" \r\n              class="form-input"\r\n              [(ngModel)]="editForm.barcode"\r\n              placeholder="Barcode">\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Classification -->\r\n        <div class="form-section">\r\n          <h3 class="section-title">Classification</h3>\r\n          \r\n          <div class="form-group">\r\n            <label for="status" class="form-label">Status</label>\r\n            <select \r\n              id="status" \r\n              name="status" \r\n              class="form-select"\r\n              [(ngModel)]="editForm.status">\r\n              <option value="">Select Status</option>\r\n              <option *ngFor="let status of getStatusOptions()" [value]="status">\r\n                {{ status | titlecase }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label for="abc_class" class="form-label">ABC Class</label>\r\n            <select \r\n              id="abc_class" \r\n              name="abc_class" \r\n              class="form-select"\r\n              [(ngModel)]="editForm.abc_class">\r\n              <option value="">Select ABC Class</option>\r\n              <option *ngFor="let abcClass of getAbcClassOptions()" [value]="abcClass">\r\n                Class {{ abcClass }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-actions">\r\n        <button type="button" class="btn btn-secondary" (click)="onCancel()">\r\n          Cancel\r\n        </button>\r\n        <button type="submit" class="btn btn-primary">\r\n          Update Part\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n', styles: [`/* src/app/inventory/components/edit-part-modal/edit-part-modal.component.scss */
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
.modal-content {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.modal-header .modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.modal-header .close-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
}
.modal-header .close-btn:hover {
  background-color: #f3f4f6;
  color: #374151;
}
.edit-form {
  padding: 1.5rem;
}
.edit-form .form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}
.edit-form .form-section .section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}
.edit-form .form-group {
  margin-bottom: 1rem;
}
.edit-form .form-group .form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.edit-form .form-group .form-input,
.edit-form .form-group .form-textarea,
.edit-form .form-group .form-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: white;
  transition: all 0.2s;
}
.edit-form .form-group .form-input:focus,
.edit-form .form-group .form-textarea:focus,
.edit-form .form-group .form-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.edit-form .form-group .form-input::placeholder,
.edit-form .form-group .form-textarea::placeholder,
.edit-form .form-group .form-select::placeholder {
  color: #9ca3af;
}
.edit-form .form-group .form-textarea {
  resize: vertical;
  min-height: 80px;
}
.edit-form .form-group .form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
.edit-form .form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}
.edit-form .form-actions .btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
}
.edit-form .form-actions .btn.btn-secondary {
  background-color: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.edit-form .form-actions .btn.btn-secondary:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}
.edit-form .form-actions .btn.btn-primary {
  background-color: #3b82f6;
  color: white;
}
.edit-form .form-actions .btn.btn-primary:hover {
  background-color: #2563eb;
}
.edit-form .form-actions .btn.btn-primary:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}
@media (max-width: 768px) {
  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
  .edit-form {
    padding: 1rem;
  }
  .edit-form .form-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .edit-form .form-actions {
    flex-direction: column;
  }
  .edit-form .form-actions .btn {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .modal-header {
    padding: 1rem;
  }
  .modal-header .modal-title {
    font-size: 1.25rem;
  }
  .edit-form {
    padding: 1rem;
  }
}
/*# sourceMappingURL=edit-part-modal.component.css.map */
`] }]
  }], null, { part: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], updatePart: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPartModalComponent, { className: "EditPartModalComponent", filePath: "src/app/inventory/components/edit-part-modal/edit-part-modal.component.ts", lineNumber: 13 });
})();

// src/app/inventory/components/add-part-modal/add-part-modal.component.ts
function AddPartModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
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
    \u0275\u0275elementStart(0, "div", 39);
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
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("uom"), " ");
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
      part_number: ["", [Validators.required]],
      name: ["", [Validators.required]],
      description: [""],
      uom: ["each", [Validators.required]],
      unit_cost: [""],
      category_id: [""],
      reorder_point: [0],
      reorder_qty: [1],
      barcode: [""]
    });
  }
  onSubmit() {
    if (this.partForm.valid) {
      const formValue = this.partForm.value;
      const partData = {
        part_number: formValue.part_number,
        name: formValue.name,
        description: formValue.description || void 0,
        uom: formValue.uom,
        unit_cost: formValue.unit_cost ? parseFloat(formValue.unit_cost) : void 0,
        category_id: formValue.category_id ? parseInt(formValue.category_id) : void 0,
        reorder_point: formValue.reorder_point ? parseInt(formValue.reorder_point) : void 0,
        reorder_qty: formValue.reorder_qty ? parseInt(formValue.reorder_qty) : void 0,
        barcode: formValue.barcode || void 0
      };
      this.createPart.emit(partData);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPartModalComponent, selectors: [["app-add-part-modal"]], outputs: { closeModal: "closeModal", createPart: "createPart" }, decls: 81, vars: 11, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "header-left"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "modal-title"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "section-title"], [1, "form-row"], [1, "form-field"], ["for", "part_number", 1, "field-label"], [1, "required"], ["type", "text", "id", "part_number", "formControlName", "part_number", "placeholder", "Enter part number", 1, "form-input"], ["class", "error-message", 4, "ngIf"], ["for", "name", 1, "field-label"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter part name", 1, "form-input"], ["for", "description", 1, "field-label"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter part description", 1, "form-textarea"], ["for", "category_id", 1, "field-label"], ["type", "number", "id", "category_id", "formControlName", "category_id", "placeholder", "Enter category ID", 1, "form-input"], ["for", "barcode", 1, "field-label"], ["type", "text", "id", "barcode", "formControlName", "barcode", "placeholder", "Enter barcode", 1, "form-input"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], ["for", "uom", 1, "field-label"], ["type", "text", "id", "uom", "formControlName", "uom", "placeholder", "e.g., pcs, kg, m", 1, "form-input"], ["for", "unit_cost", 1, "field-label"], ["type", "number", "id", "unit_cost", "formControlName", "unit_cost", "placeholder", "0.00", "step", "0.01", "min", "0", 1, "form-input"], ["for", "reorder_point", 1, "field-label"], ["type", "number", "id", "reorder_point", "formControlName", "reorder_point", "placeholder", "0", "min", "0", 1, "form-input"], ["for", "reorder_qty", 1, "field-label"], ["type", "number", "id", "reorder_qty", "formControlName", "reorder_qty", "placeholder", "1", "min", "1", 1, "form-input"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error-message"]], template: function AddPartModalComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(76, "div", 36)(77, "button", 37);
      \u0275\u0275listener("click", function AddPartModalComponent_Template_button_click_77_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(78, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "button", 38);
      \u0275\u0275text(80, " Create Part ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_3_0;
      let tmp_5_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.partForm);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("error", ((tmp_1_0 = ctx.partForm.get("part_number")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx.partForm.get("part_number")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("part_number"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("error", ((tmp_3_0 = ctx.partForm.get("name")) == null ? null : tmp_3_0.errors) && ((tmp_3_0 = ctx.partForm.get("name")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("name"));
      \u0275\u0275advance(26);
      \u0275\u0275classProp("error", ((tmp_5_0 = ctx.partForm.get("uom")) == null ? null : tmp_5_0.errors) && ((tmp_5_0 = ctx.partForm.get("uom")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("uom"));
      \u0275\u0275advance(23);
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
            <label for="part_number" class="field-label">\r
              Part Number <span class="required">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              id="part_number" \r
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
            <label for="category_id" class="field-label">Category ID</label>\r
            <input \r
              type="number" \r
              id="category_id" \r
              formControlName="category_id"\r
              class="form-input"\r
              placeholder="Enter category ID">\r
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
            <input \r
              type="text" \r
              id="uom" \r
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
            <input \r
              type="number" \r
              id="unit_cost" \r
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
            <input \r
              type="number" \r
              id="reorder_point" \r
              formControlName="reorder_point"\r
              class="form-input"\r
              placeholder="0"\r
              min="0">\r
          </div>\r
          \r
          <div class="form-field">\r
            <label for="reorder_qty" class="field-label">Reorder Quantity</label>\r
            <input \r
              type="number" \r
              id="reorder_qty" \r
              formControlName="reorder_qty"\r
              class="form-input"\r
              placeholder="1"\r
              min="1">\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPartModalComponent, { className: "AddPartModalComponent", filePath: "src/app/inventory/components/add-part-modal/add-part-modal.component.ts", lineNumber: 13 });
})();

// src/app/inventory/components/parts-catalog/parts-catalog.component.ts
var _c0 = () => [];
function PartsCatalogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading parts catalog...");
    \u0275\u0275elementEnd()();
  }
}
function PartsCatalogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 16);
    \u0275\u0275element(7, "path", 17);
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
function PartsCatalogComponent_div_3_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    \u0275\u0275property("value", status_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, status_r4), " ");
  }
}
function PartsCatalogComponent_div_3_div_60_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r6.description);
  }
}
function PartsCatalogComponent_div_3_div_60_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 70);
    \u0275\u0275text(2, "Unit Cost:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const part_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", part_r6.unit_cost.toLocaleString(), "");
  }
}
function PartsCatalogComponent_div_3_div_60_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 70);
    \u0275\u0275text(2, "Reorder Point:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const part_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(part_r6.reorder_point);
  }
}
function PartsCatalogComponent_div_3_div_60_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 70);
    \u0275\u0275text(2, "ABC Class:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const part_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(part_r6.abc_class);
  }
}
function PartsCatalogComponent_div_3_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div", 61)(3, "h4", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PartsCatalogComponent_div_3_div_60_div_1_span_7_Template, 2, 1, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 65)(9, "span", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 16);
    \u0275\u0275element(11, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 67);
    \u0275\u0275template(14, PartsCatalogComponent_div_3_div_60_div_1_div_14_Template, 5, 1, "div", 68);
    \u0275\u0275elementStart(15, "div", 69)(16, "span", 70);
    \u0275\u0275text(17, "UOM:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 71);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, PartsCatalogComponent_div_3_div_60_div_1_div_20_Template, 5, 1, "div", 68)(21, PartsCatalogComponent_div_3_div_60_div_1_div_21_Template, 5, 1, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 72)(23, "button", 73);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_60_div_1_Template_button_click_23_listener() {
      const part_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartModal(part_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 16);
    \u0275\u0275element(25, "path", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 75);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_60_div_1_Template_button_click_27_listener() {
      const part_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDeletePart(part_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 16);
    \u0275\u0275element(29, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const part_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(part_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r6.part_number);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", part_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStockStatus(part_r6).class);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStockStatus(part_r6).status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", part_r6.unit_cost);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(part_r6.uom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", part_r6.reorder_point);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", part_r6.abc_class);
  }
}
function PartsCatalogComponent_div_3_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, PartsCatalogComponent_div_3_div_60_div_1_Template, 31, 10, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.parts);
  }
}
function PartsCatalogComponent_div_3_div_61_tr_23_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", part_r8.unit_cost.toLocaleString(), "");
  }
}
function PartsCatalogComponent_div_3_div_61_tr_23_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 89);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_div_3_div_61_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 77);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 82);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PartsCatalogComponent_div_3_div_61_tr_23_td_9_Template, 2, 1, "td", 83)(10, PartsCatalogComponent_div_3_div_61_tr_23_td_10_Template, 2, 0, "td", 83);
    \u0275\u0275elementStart(11, "td", 84);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 85);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 86)(16, "span", 66);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 72)(19, "button", 87);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_61_tr_23_Template_button_click_19_listener() {
      const part_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditPartModal(part_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 16);
    \u0275\u0275element(21, "path", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 88);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_61_tr_23_Template_button_click_22_listener() {
      const part_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDeletePart(part_r8.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 16);
    \u0275\u0275element(24, "path", 76);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const part_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r8.part_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r8.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r8.uom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", part_r8.unit_cost);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !part_r8.unit_cost);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r8.reorder_point || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r8.abc_class || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStockStatus(part_r8).class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStockStatus(part_r8).status, " ");
  }
}
function PartsCatalogComponent_div_3_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "table", 79)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275template(23, PartsCatalogComponent_div_3_div_61_tr_23_Template, 25, 11, "tr", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.parts);
  }
}
function PartsCatalogComponent_div_3_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 91);
    \u0275\u0275element(2, "path", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 93);
    \u0275\u0275text(4, "No Parts Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 94);
    \u0275\u0275text(6, "Try adjusting your search criteria or create your first part.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_62_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddPartModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 16);
    \u0275\u0275element(9, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Add First Part ");
    \u0275\u0275elementEnd()();
  }
}
function PartsCatalogComponent_div_3_div_63_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_63_button_6_Template_button_click_0_listener() {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r12 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.currentPage === i_r12 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r12 + 1, " ");
  }
}
function PartsCatalogComponent_div_3_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "button", 96);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_63_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 98);
    \u0275\u0275template(6, PartsCatalogComponent_div_3_div_63_button_6_Template, 2, 3, "button", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 96);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_div_63_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 16);
    \u0275\u0275element(10, "path", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0).constructor(ctx_r1.totalPages));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function PartsCatalogComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 18)(2, "div", 19)(3, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5);
    \u0275\u0275element(5, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 22)(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 24);
    \u0275\u0275text(10, "Total Parts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 25)(12, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 5);
    \u0275\u0275element(14, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 22)(16, "div", 26);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 24);
    \u0275\u0275text(19, "Low Stock Items");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 27)(21, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 5);
    \u0275\u0275element(23, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 22)(25, "div", 23);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 24);
    \u0275\u0275text(28, "Total Inventory Value");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 29)(30, "div", 30)(31, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 32);
    \u0275\u0275element(33, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PartsCatalogComponent_div_3_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function PartsCatalogComponent_div_3_Template_input_input_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 35)(36, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PartsCatalogComponent_div_3_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PartsCatalogComponent_div_3_Template_select_change_36_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusFilterChange());
    });
    \u0275\u0275elementStart(37, "option", 37);
    \u0275\u0275text(38, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, PartsCatalogComponent_div_3_option_39_Template, 3, 4, "option", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 39)(41, "div", 40)(42, "div", 41)(43, "button", 42);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewChange("grid"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 16);
    \u0275\u0275element(45, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "button", 44);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewChange("list"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 16);
    \u0275\u0275element(48, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "button", 46);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewChange("compact"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 16);
    \u0275\u0275element(51, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "button", 48);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewChange("table"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 16);
    \u0275\u0275element(54, "path", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "button", 50);
    \u0275\u0275listener("click", function PartsCatalogComponent_div_3_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddPartModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 16);
    \u0275\u0275element(57, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " Add Part ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "div", 51);
    \u0275\u0275template(60, PartsCatalogComponent_div_3_div_60_Template, 2, 1, "div", 52)(61, PartsCatalogComponent_div_3_div_61_Template, 24, 1, "div", 53)(62, PartsCatalogComponent_div_3_div_62_Template, 11, 0, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, PartsCatalogComponent_div_3_div_63_Template, 11, 4, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.summaryData.totalParts);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.summaryData.lowStockItems);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", ctx_r1.summaryData.totalValue.toLocaleString(), "");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getStatusOptions());
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.currentView === "grid");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.currentView === "list");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.currentView === "compact");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.currentView === "table");
    \u0275\u0275advance(8);
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
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-add-part-modal", 102);
    \u0275\u0275listener("closeModal", function PartsCatalogComponent_app_add_part_modal_7_Template_app_add_part_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddPartModal());
    })("createPart", function PartsCatalogComponent_app_add_part_modal_7_Template_app_add_part_modal_createPart_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreatePart($event));
    });
    \u0275\u0275elementEnd();
  }
}
function PartsCatalogComponent_app_edit_part_modal_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-part-modal", 103);
    \u0275\u0275listener("closeModal", function PartsCatalogComponent_app_edit_part_modal_8_Template_app_edit_part_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditPartModal());
    })("updatePart", function PartsCatalogComponent_app_edit_part_modal_8_Template_app_edit_part_modal_updatePart_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdatePart($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("part", ctx_r1.selectedPart);
  }
}
var PartsCatalogComponent = class _PartsCatalogComponent {
  analyticsService;
  // Data properties
  parts = [];
  loading = true;
  error = null;
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
  // Summary data
  summaryData = {
    totalParts: 0,
    lowStockItems: 0,
    totalValue: 0
  };
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.loadPartsCatalog();
  }
  loadPartsCatalog() {
    this.loading = true;
    this.error = null;
    this.analyticsService.getPartsCatalog(this.searchTerm || void 0, this.selectedStatus || void 0, this.currentPage, this.perPage).subscribe({
      next: (response) => {
        if (response.success) {
          this.parts = response.data.data;
          this.totalParts = response.data.total;
          this.totalPages = response.data.last_page;
          this.currentPage = response.data.current_page;
          this.calculateSummaryData();
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
    this.summaryData.totalValue = this.parts.reduce((sum, part) => sum + (part.unit_cost || 0), 0);
  }
  onSearchChange() {
    this.currentPage = 1;
    this.loadPartsCatalog();
  }
  onStatusFilterChange() {
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
    this.analyticsService.createPart(partData).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeAddPartModal();
          this.loadPartsCatalog();
        }
      },
      error: (err) => {
        console.error("Error creating part:", err);
      }
    });
  }
  onUpdatePart(partData) {
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
      }
    });
  }
  onDeletePart(partId) {
    if (confirm("Are you sure you want to delete this part? This action cannot be undone.")) {
      this.analyticsService.deletePart(partId).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadPartsCatalog();
          }
        },
        error: (err) => {
          console.error("Error deleting part:", err);
        }
      });
    }
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
  static \u0275fac = function PartsCatalogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartsCatalogComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartsCatalogComponent, selectors: [["app-parts-catalog"]], decls: 9, vars: 5, consts: [[1, "parts-catalog"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["title", "Add New Part", 1, "fab", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [3, "closeModal", "createPart", 4, "ngIf"], [3, "part", "closeModal", "updatePart", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "summary-cards-row"], [1, "summary-card", "total-parts"], [1, "card-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "card-content"], [1, "card-value"], [1, "card-label"], [1, "summary-card", "low-stock"], [1, "card-value", "warning"], [1, "summary-card", "total-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "search-filters-section"], [1, "search-row"], [1, "search-container"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search parts...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "status-filter"], [1, "status-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "actions-row"], [1, "view-controls"], [1, "view-toggles"], ["title", "Grid View", 1, "view-toggle", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["title", "List View", 1, "view-toggle", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 10h16M4 14h16M4 18h16"], ["title", "Compact Grid", 1, "view-toggle", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"], ["title", "Table View", 1, "view-toggle", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"], [1, "add-part-btn", 3, "click"], [1, "parts-display"], ["class", "parts-grid", 4, "ngIf"], ["class", "parts-table-container", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [3, "value"], [1, "parts-grid"], ["class", "part-card", 4, "ngFor", "ngForOf"], [1, "part-card"], [1, "part-header"], [1, "part-info"], [1, "part-name"], [1, "part-id"], ["class", "part-description", 4, "ngIf"], [1, "stock-status"], [1, "status-badge"], [1, "part-details"], ["class", "detail-row", 4, "ngIf"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "part-actions"], [1, "action-btn", "edit", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "action-btn", "delete", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "part-description"], [1, "parts-table-container"], [1, "parts-table"], [4, "ngFor", "ngForOf"], [1, "part-number"], [1, "part-uom"], ["class", "part-cost", 4, "ngIf"], [1, "part-reorder"], [1, "part-abc"], [1, "part-status"], ["title", "Edit", 1, "action-btn", "edit", 3, "click"], ["title", "Delete", 1, "action-btn", "delete", 3, "click"], [1, "part-cost"], [1, "no-results"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "no-results-title"], [1, "no-results-description"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "pagination-page", 3, "click"], [3, "closeModal", "createPart"], [3, "closeModal", "updatePart", "part"]], template: function PartsCatalogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PartsCatalogComponent_div_1_Template, 4, 0, "div", 1)(2, PartsCatalogComponent_div_2_Template, 9, 1, "div", 2)(3, PartsCatalogComponent_div_3_Template, 64, 18, "div", 3);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function PartsCatalogComponent_Template_button_click_4_listener() {
        return ctx.openAddPartModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, PartsCatalogComponent_app_add_part_modal_7_Template, 1, 0, "app-add-part-modal", 7)(8, PartsCatalogComponent_app_edit_part_modal_8_Template, 1, 1, "app-edit-part-modal", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showAddPartModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditPartModal && ctx.selectedPart);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, EditPartModalComponent, AddPartModalComponent], styles: ['\n\n.parts-catalog[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-parts[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.low-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.parts-catalog[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-value[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-bottom: 2rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  align-items: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .advanced-filters-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .advanced-filters-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .advanced-filters-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 2px solid #d1d5db;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 0.125rem;\n  transform: scale(0);\n  transition: transform 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]::after {\n  transform: scale(1);\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .bulk-checkbox[_ngcontent-%COMP%]   .bulk-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: none;\n  border: none;\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .view-toggles[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .view-controls[_ngcontent-%COMP%]   .add-part-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-id[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-description[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .status-badge.out-of-stock[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-header[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%]:hover {\n  background-color: #dc2626;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-grid[_ngcontent-%COMP%]   .part-card[_ngcontent-%COMP%]   .part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: currentColor;\n}\n.parts-catalog[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.parts-catalog[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.parts-catalog[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .no-results-title[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .no-results-description[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.parts-catalog[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n  min-width: 150px;\n}\n.parts-catalog[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  max-width: 200px;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-uom[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-cost[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #10b981;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-reorder[_ngcontent-%COMP%], \n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-abc[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  min-width: 2rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border: none;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-right: 0.5rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.edit[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #ef4444;\n}\n.parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-actions[_ngcontent-%COMP%]   .action-btn.delete[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background-color: white;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background-color: white;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 2.5rem;\n  text-align: center;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n@media (max-width: 768px) {\n  .parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .parts-catalog[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n  }\n  .parts-catalog[_ngcontent-%COMP%]   .parts-table-container[_ngcontent-%COMP%]   .parts-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n  .parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .parts-catalog[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n/*# sourceMappingURL=parts-catalog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartsCatalogComponent, [{
    type: Component,
    args: [{ selector: "app-parts-catalog", standalone: true, imports: [CommonModule, FormsModule, EditPartModalComponent, AddPartModalComponent], template: `<div class="parts-catalog">\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Loading parts catalog...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="error-state">\r
    <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
    </svg>\r
    <h3 class="error-title">{{ error }}</h3>\r
    <button class="btn btn-primary" (click)="refreshData()">\r
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r
          </svg>\r
        </div>\r
        <div class="card-content">\r
          <div class="card-value">\${{ summaryData.totalValue.toLocaleString() }}</div>\r
          <div class="card-label">Total Inventory Value</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Search and Filters Section -->\r
    <div class="search-filters-section">\r
      <div class="search-row">\r
        <div class="search-container">\r
          <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
          <input \r
            type="text" \r
            placeholder="Search parts..." \r
            class="search-input"\r
            [(ngModel)]="searchTerm"\r
            (input)="onSearchChange()">\r
        </div>\r
        \r
        <div class="status-filter">\r
          <select \r
            class="status-select"\r
            [(ngModel)]="selectedStatus"\r
            (change)="onStatusFilterChange()">\r
            <option value="">All Status</option>\r
            <option *ngFor="let status of getStatusOptions()" [value]="status">\r
              {{ status | titlecase }}\r
            </option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <div class="actions-row">\r
        <div class="view-controls">\r
          <div class="view-toggles">\r
            <button \r
              class="view-toggle" \r
              [class.active]="currentView === 'grid'"\r
              (click)="onViewChange('grid')"\r
              title="Grid View">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>\r
              </svg>\r
            </button>\r
            <button \r
              class="view-toggle" \r
              [class.active]="currentView === 'list'"\r
              (click)="onViewChange('list')"\r
              title="List View">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r
              </svg>\r
            </button>\r
            <button \r
              class="view-toggle" \r
              [class.active]="currentView === 'compact'"\r
              (click)="onViewChange('compact')"\r
              title="Compact Grid">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>\r
              </svg>\r
            </button>\r
            <button \r
              class="view-toggle" \r
              [class.active]="currentView === 'table'"\r
              (click)="onViewChange('table')"\r
              title="Table View">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"></path>\r
              </svg>\r
            </button>\r
          </div>\r
\r
          <button class="add-part-btn" (click)="openAddPartModal()">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
            </svg>\r
            Add Part\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Parts Display -->\r
    <div class="parts-display">\r
      <!-- Grid View -->\r
      <div *ngIf="currentView === 'grid'" class="parts-grid">\r
        <div *ngFor="let part of parts" class="part-card">\r
          <div class="part-header">\r
            <div class="part-info">\r
              <h4 class="part-name">{{ part.name }}</h4>\r
              <span class="part-id">{{ part.part_number }}</span>\r
              <span class="part-description" *ngIf="part.description">{{ part.description }}</span>\r
            </div>\r
            <div class="stock-status">\r
              <span class="status-badge" [class]="getStockStatus(part).class">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r
                </svg>\r
                {{ getStockStatus(part).status }}\r
              </span>\r
            </div>\r
          </div>\r
\r
          <div class="part-details">\r
            <div class="detail-row" *ngIf="part.unit_cost">\r
              <span class="detail-label">Unit Cost:</span>\r
              <span class="detail-value">\${{ part.unit_cost.toLocaleString() }}</span>\r
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
            <button class="action-btn edit" (click)="openEditPartModal(part)">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
              </svg>\r
              Edit\r
            </button>\r
            <button class="action-btn delete" (click)="onDeletePart(part.id)">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
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
            <tr>\r
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
            <tr *ngFor="let part of parts">\r
              <td class="part-number">{{ part.part_number }}</td>\r
              <td class="part-name">{{ part.name }}</td>\r
              <td class="part-description">{{ part.description || '-' }}</td>\r
              <td class="part-uom">{{ part.uom }}</td>\r
              <td class="part-cost" *ngIf="part.unit_cost">\${{ part.unit_cost.toLocaleString() }}</td>\r
              <td class="part-cost" *ngIf="!part.unit_cost">-</td>\r
              <td class="part-reorder">{{ part.reorder_point || '-' }}</td>\r
              <td class="part-abc">{{ part.abc_class || '-' }}</td>\r
              <td class="part-status">\r
                <span class="status-badge" [class]="getStockStatus(part).class">\r
                  {{ getStockStatus(part).status }}\r
                </span>\r
              </td>\r
              <td class="part-actions">\r
                <button class="action-btn edit" (click)="openEditPartModal(part)" title="Edit">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                  </svg>\r
                </button>\r
                <button class="action-btn delete" (click)="onDeletePart(part.id)" title="Delete">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
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
      <button \r
        class="pagination-btn" \r
        [disabled]="currentPage === 1"\r
        (click)="onPageChange(currentPage - 1)">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
        </svg>\r
        Previous\r
      </button>\r
      \r
      <div class="pagination-pages">\r
        <button \r
          *ngFor="let page of [].constructor(totalPages); let i = index"\r
          class="pagination-page" \r
          [class.active]="currentPage === i + 1"\r
          (click)="onPageChange(i + 1)">\r
          {{ i + 1 }}\r
        </button>\r
      </div>\r
      \r
      <button \r
        class="pagination-btn" \r
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
  <!-- Add Part Modal -->\r
  <app-add-part-modal\r
    *ngIf="showAddPartModal"\r
    (closeModal)="closeAddPartModal()"\r
    (createPart)="onCreatePart($event)">\r
  </app-add-part-modal>\r
\r
  <!-- Edit Part Modal -->\r
  <app-edit-part-modal\r
    *ngIf="showEditPartModal && selectedPart"\r
    [part]="selectedPart"\r
    (closeModal)="closeEditPartModal()"\r
    (updatePart)="onUpdatePart($event)">\r
  </app-edit-part-modal>\r
</div>\r
`, styles: ['/* src/app/inventory/components/parts-catalog/parts-catalog.component.scss */\n.parts-catalog {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.parts-catalog .summary-cards-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.parts-catalog .summary-cards-row .summary-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog .summary-cards-row .summary-card .card-icon {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.parts-catalog .summary-cards-row .summary-card .card-content .card-value {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog .summary-cards-row .summary-card .card-content .card-value.warning {\n  color: #f59e0b;\n}\n.parts-catalog .summary-cards-row .summary-card .card-content .card-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog .summary-cards-row .summary-card.total-parts .card-icon {\n  background-color: #dbeafe;\n  color: #3b82f6;\n}\n.parts-catalog .summary-cards-row .summary-card.low-stock .card-icon {\n  background-color: #fef3c7;\n  color: #f59e0b;\n}\n.parts-catalog .summary-cards-row .summary-card.total-value .card-icon {\n  background-color: #d1fae5;\n  color: #10b981;\n}\n.parts-catalog .search-filters-section {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-bottom: 2rem;\n}\n.parts-catalog .search-filters-section .search-row {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  align-items: center;\n}\n.parts-catalog .search-filters-section .search-row .search-container {\n  flex: 1;\n  position: relative;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.parts-catalog .search-filters-section .search-row .search-container .search-input::placeholder {\n  color: #9ca3af;\n}\n.parts-catalog .search-filters-section .search-row .advanced-filters-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.parts-catalog .search-filters-section .search-row .advanced-filters-btn:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog .search-filters-section .search-row .advanced-filters-btn svg {\n  color: #6b7280;\n}\n.parts-catalog .search-filters-section .actions-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox input[type=checkbox] {\n  display: none;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox .checkmark {\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 2px solid #d1d5db;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox .checkmark::after {\n  content: "";\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 0.125rem;\n  transform: scale(0);\n  transition: transform 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox input[type=checkbox]:checked + .checkmark {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox input[type=checkbox]:checked + .checkmark::after {\n  transform: scale(1);\n}\n.parts-catalog .search-filters-section .actions-row .bulk-actions .bulk-checkbox .bulk-text {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: none;\n  border: none;\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle.active {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .view-toggles .view-toggle svg {\n  width: 1rem;\n  height: 1rem;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn:hover {\n  background-color: #2563eb;\n}\n.parts-catalog .search-filters-section .actions-row .view-controls .add-part-btn svg {\n  color: white;\n}\n.parts-catalog .parts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.parts-catalog .parts-grid .part-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog .parts-grid .part-card .part-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.parts-catalog .parts-grid .part-card .part-header .part-info .part-name {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.parts-catalog .parts-grid .part-card .part-header .part-info .part-id {\n  display: block;\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n}\n.parts-catalog .parts-grid .part-card .part-header .part-info .part-description {\n  display: block;\n  font-size: 0.875rem;\n  color: #9ca3af;\n}\n.parts-catalog .parts-grid .part-card .part-header .stock-status .status-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-header .stock-status .status-badge.out-of-stock {\n  background-color: #ef4444;\n}\n.parts-catalog .parts-grid .part-card .part-header .stock-status .status-badge svg {\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-details {\n  margin-bottom: 1.5rem;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row:last-child {\n  border-bottom: none;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row .detail-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row .detail-value {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.parts-catalog .parts-grid .part-card .part-details .detail-row .detail-value svg {\n  color: #9ca3af;\n}\n.parts-catalog .parts-grid .part-card .part-actions {\n  display: flex;\n  gap: 0.75rem;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.edit {\n  background-color: #3b82f6;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.edit:hover {\n  background-color: #2563eb;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.delete {\n  background-color: #ef4444;\n  color: white;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn.delete:hover {\n  background-color: #dc2626;\n}\n.parts-catalog .parts-grid .part-card .part-actions .action-btn svg {\n  color: currentColor;\n}\n.parts-catalog .fab {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.parts-catalog .fab:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.parts-catalog .fab svg {\n  color: white;\n}\n.parts-catalog .no-results {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog .no-results .no-results-title {\n  color: #6b7280;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.parts-catalog .no-results .no-results-description {\n  color: #9ca3af;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n}\n.parts-catalog .no-results .btn {\n  margin-top: 0.5rem;\n}\n.parts-catalog .loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.parts-catalog .loading-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.parts-catalog .loading-state p {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.parts-catalog .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.parts-catalog .error-state .error-title {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.parts-catalog .error-state .btn {\n  margin-top: 1rem;\n}\n.parts-catalog .status-filter .status-select {\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n  min-width: 150px;\n}\n.parts-catalog .status-filter .status-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.parts-catalog .parts-table-container {\n  overflow-x: auto;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.parts-catalog .parts-table-container .parts-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.parts-catalog .parts-table-container .parts-table thead {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.parts-catalog .parts-table-container .parts-table thead th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr {\n  border-bottom: 1px solid #f3f4f6;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr:last-child {\n  border-bottom: none;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-number {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-name {\n  font-weight: 500;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-description {\n  color: #6b7280;\n  max-width: 200px;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-uom {\n  font-weight: 500;\n  color: #374151;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-cost {\n  font-weight: 600;\n  color: #10b981;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-reorder,\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-abc {\n  text-align: center;\n  color: #6b7280;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-status .status-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  min-width: 2rem;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border: none;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-right: 0.5rem;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn:last-child {\n  margin-right: 0;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.edit {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.edit:hover {\n  background-color: #e5e7eb;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.delete {\n  background-color: #fef2f2;\n  color: #ef4444;\n}\n.parts-catalog .parts-table-container .parts-table tbody tr td.part-actions .action-btn.delete:hover {\n  background-color: #fee2e2;\n}\n.parts-catalog .pagination {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1rem;\n}\n.parts-catalog .pagination .pagination-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background-color: white;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.parts-catalog .pagination .pagination-btn:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog .pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.parts-catalog .pagination .pagination-pages {\n  display: flex;\n  gap: 0.25rem;\n}\n.parts-catalog .pagination .pagination-pages .pagination-page {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  background-color: white;\n  color: #374151;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 2.5rem;\n  text-align: center;\n}\n.parts-catalog .pagination .pagination-pages .pagination-page:hover:not(.active) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.parts-catalog .pagination .pagination-pages .pagination-page.active {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n@media (max-width: 768px) {\n  .parts-catalog .search-filters-section .search-row {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .parts-catalog .search-filters-section .search-row .status-filter .status-select {\n    min-width: auto;\n    width: 100%;\n  }\n  .parts-catalog .parts-table-container .parts-table {\n    min-width: 800px;\n  }\n  .parts-catalog .pagination {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .parts-catalog .pagination .pagination-pages {\n    order: -1;\n  }\n}\n/*# sourceMappingURL=parts-catalog.component.css.map */\n'] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartsCatalogComponent, { className: "PartsCatalogComponent", filePath: "src/app/inventory/components/parts-catalog/parts-catalog.component.ts", lineNumber: 15 });
})();
export {
  PartsCatalogComponent
};
//# sourceMappingURL=chunk-MOASPWDJ.js.map
