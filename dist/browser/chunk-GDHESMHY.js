import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SCVX3V3B.js";

// src/app/shared/components/global-dropdown/global-dropdown.component.ts
function GlobalDropdownComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function GlobalDropdownComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 13);
    \u0275\u0275text(1);
    \u0275\u0275template(2, GlobalDropdownComponent_label_1_span_2_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.required);
  }
}
function GlobalDropdownComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.placeholder);
  }
}
function GlobalDropdownComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd()();
  }
}
function GlobalDropdownComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, GlobalDropdownComponent_div_6_div_1_Template, 3, 0, "div", 18);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedOption.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedOption.name);
  }
}
function GlobalDropdownComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function GlobalDropdownComponent_button_8_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.clearSelection();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 25);
    \u0275\u0275elementEnd()();
  }
}
function GlobalDropdownComponent_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "input", 33);
    \u0275\u0275listener("input", function GlobalDropdownComponent_div_11_div_6_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSearchInput($event));
    })("click", function GlobalDropdownComponent_div_11_div_6_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.searchTerm);
  }
}
function GlobalDropdownComponent_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No options found for "', ctx_r0.searchTerm, '" ');
  }
}
function GlobalDropdownComponent_div_11_button_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd()();
  }
}
function GlobalDropdownComponent_div_11_button_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getOptionDescription(option_r5));
  }
}
function GlobalDropdownComponent_div_11_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function GlobalDropdownComponent_div_11_button_8_Template_button_click_0_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectOption(option_r5));
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275template(2, GlobalDropdownComponent_div_11_button_8_div_2_Template, 3, 0, "div", 18);
    \u0275\u0275elementStart(3, "div", 37)(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, GlobalDropdownComponent_div_11_button_8_div_6_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", (ctx_r0.selectedOption == null ? null : ctx_r0.selectedOption.id) === option_r5.id)("disabled", option_r5.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", option_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", option_r5.description);
  }
}
function GlobalDropdownComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, GlobalDropdownComponent_div_11_div_6_Template, 2, 1, "div", 29)(7, GlobalDropdownComponent_div_11_div_7_Template, 2, 1, "div", 30)(8, GlobalDropdownComponent_div_11_button_8_Template, 7, 7, "button", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("max-height", ctx_r0.maxHeight);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.placeholder);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.filteredOptions.length, " option", ctx_r0.filteredOptions.length !== 1 ? "s" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.searchable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.searchable && ctx_r0.filteredOptions.length === 0 && ctx_r0.searchTerm.trim() !== "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredOptions);
  }
}
function GlobalDropdownComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError(), " ");
  }
}
var GlobalDropdownComponent = class _GlobalDropdownComponent {
  options = [];
  selectedOption = null;
  placeholder = "Select option";
  label = "";
  required = false;
  disabled = false;
  error = false;
  errorMessage = "";
  searchable = false;
  maxHeight = "300px";
  minWidth = "260px";
  selectionChange = new EventEmitter();
  showDropdown = false;
  searchTerm = "";
  filteredOptions = [];
  ngOnInit() {
    this.filteredOptions = [...this.options];
  }
  ngOnChanges() {
    this.filteredOptions = [...this.options];
  }
  toggleDropdown() {
    if (this.disabled)
      return;
    this.showDropdown = !this.showDropdown;
    if (this.showDropdown) {
      this.searchTerm = "";
      this.filteredOptions = [...this.options];
    }
  }
  selectOption(option) {
    if (option.disabled)
      return;
    this.selectedOption = option;
    this.showDropdown = false;
    this.selectionChange.emit(option);
  }
  onSearchInput(event) {
    const target = event.target;
    this.searchTerm = target.value;
    if (this.searchTerm.trim() === "") {
      this.filteredOptions = [...this.options];
    } else {
      this.filteredOptions = this.options.filter((option) => option.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || option.description && option.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  }
  clearSelection() {
    this.selectedOption = null;
    this.selectionChange.emit(null);
  }
  closeOnOutsideClick() {
    this.showDropdown = false;
  }
  getOptionDescription(option) {
    return option.description || "";
  }
  hasFieldError() {
    return this.error && this.errorMessage !== "";
  }
  getFieldError() {
    return this.errorMessage;
  }
  static \u0275fac = function GlobalDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalDropdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalDropdownComponent, selectors: [["app-global-dropdown"]], hostBindings: function GlobalDropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function GlobalDropdownComponent_click_HostBindingHandler() {
        return ctx.closeOnOutsideClick();
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { options: "options", selectedOption: "selectedOption", placeholder: "placeholder", label: "label", required: "required", disabled: "disabled", error: "error", errorMessage: "errorMessage", searchable: "searchable", maxHeight: "maxHeight", minWidth: "minWidth" }, outputs: { selectionChange: "selectionChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 13, vars: 17, consts: [[1, "dropdown-wrapper"], ["class", "dropdown-label", 4, "ngIf"], [1, "relative", "generic-dropdown", 3, "click"], ["type", "button", 1, "dropdown-button", 3, "click", "disabled"], [1, "dropdown-content"], ["class", "placeholder", 4, "ngIf"], ["class", "selected-item", 4, "ngIf"], [1, "dropdown-actions"], ["type", "button", "class", "clear-btn", "title", "Clear selection", 3, "click", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "dropdown-menu", 3, "max-height", 4, "ngIf"], ["class", "field-error", 4, "ngIf"], [1, "dropdown-label"], ["class", "required", 4, "ngIf"], [1, "required"], [1, "placeholder"], [1, "selected-item"], ["class", "item-icon", 4, "ngIf"], [1, "selected-text"], [1, "item-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["type", "button", "title", "Clear selection", 1, "clear-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "clear-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "dropdown-menu"], [1, "dropdown-header"], [1, "options-count"], ["class", "search-container", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], ["type", "button", "class", "dropdown-item", 3, "selected", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["type", "text", "placeholder", "Search options...", 1, "search-input", 3, "input", "click", "value"], [1, "no-results"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "item-content"], [1, "item-details"], [1, "item-name"], ["class", "item-description", 4, "ngIf"], [1, "item-description"], [1, "field-error"]], template: function GlobalDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, GlobalDropdownComponent_label_1_Template, 3, 2, "label", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275listener("click", function GlobalDropdownComponent_Template_div_click_2_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function GlobalDropdownComponent_Template_button_click_3_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275template(5, GlobalDropdownComponent_span_5_Template, 2, 1, "span", 5)(6, GlobalDropdownComponent_div_6_Template, 4, 2, "div", 6);
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275template(8, GlobalDropdownComponent_button_8_Template, 3, 0, "button", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(11, GlobalDropdownComponent_div_11_Template, 9, 8, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, GlobalDropdownComponent_div_12_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("error", ctx.hasFieldError());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275styleProp("min-width", ctx.minWidth);
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.hasFieldError())("active", ctx.showDropdown);
      \u0275\u0275property("disabled", ctx.disabled);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedOption);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedOption);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedOption && !ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275classProp("rotated", ctx.showDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showDropdown);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.dropdown-wrapper.error[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.dropdown-wrapper.error[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.dropdown-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-left: 4px;\n}\n.generic-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.dropdown-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-size: 14px;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dropdown-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #9ca3af;\n}\n.dropdown-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.dropdown-button.active[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.dropdown-button[_ngcontent-%COMP%]:disabled {\n  background-color: #f9fafb;\n  color: #9ca3af;\n  cursor: not-allowed;\n  border-color: #e5e7eb;\n}\n.dropdown-button.error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.dropdown-button.error[_ngcontent-%COMP%]:focus {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.placeholder[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-style: italic;\n}\n.selected-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n.item-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: #6b7280;\n}\n.selected-text[_ngcontent-%COMP%] {\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n}\n.dropdown-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 4px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.clear-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: #6b7280;\n}\n.dropdown-arrow[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n.dropdown-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #d1d5db;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.options-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: normal;\n}\n.search-container[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.no-results[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: center;\n  color: #6b7280;\n  font-style: italic;\n  font-size: 14px;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f3f4f6;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background-color: #f3f4f6;\n}\n.dropdown-item.selected[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n}\n.dropdown-item.disabled[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  cursor: not-allowed;\n  background-color: #f9fafb;\n}\n.dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.item-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.item-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 2px;\n}\n.item-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  line-height: 1.4;\n}\n.field-error[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #dc2626;\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=global-dropdown.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-global-dropdown", standalone: true, imports: [CommonModule], template: `<div class="dropdown-wrapper" [class.error]="hasFieldError()">\r
  <label *ngIf="label" class="dropdown-label">{{ label }} <span class="required" *ngIf="required">*</span></label>\r
\r
  <div class="relative generic-dropdown" (click)="$event.stopPropagation()" [style.min-width]="minWidth">\r
    <button\r
      type="button"\r
      (click)="toggleDropdown()"\r
      class="dropdown-button"\r
      [class.error]="hasFieldError()"\r
      [class.active]="showDropdown"\r
      [disabled]="disabled">\r
      <div class="dropdown-content">\r
        <span *ngIf="!selectedOption" class="placeholder">{{ placeholder }}</span>\r
\r
        <div *ngIf="selectedOption" class="selected-item">\r
          <div class="item-icon" *ngIf="selectedOption.icon">\r
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
          </div>\r
          <span class="selected-text">{{ selectedOption.name }}</span>\r
        </div>\r
\r
        <div class="dropdown-actions">\r
          <button\r
            *ngIf="selectedOption && !disabled"\r
            type="button"\r
            (click)="clearSelection(); $event.stopPropagation()"\r
            class="clear-btn"\r
            title="Clear selection">\r
            <svg class="clear-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
          \r
          <svg class="dropdown-arrow" [class.rotated]="showDropdown" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
          </svg>\r
        </div>\r
      </div>\r
    </button>\r
\r
    <div *ngIf="showDropdown" class="dropdown-menu" [style.max-height]="maxHeight">\r
      <div class="dropdown-header">\r
        <span>{{ placeholder }}</span>\r
        <span class="options-count">{{ filteredOptions.length }} option{{ filteredOptions.length !== 1 ? 's' : '' }}</span>\r
      </div>\r
\r
      <!-- Search input -->\r
      <div *ngIf="searchable" class="search-container">\r
        <input\r
          type="text"\r
          [value]="searchTerm"\r
          (input)="onSearchInput($event)"\r
          placeholder="Search options..."\r
          class="search-input"\r
          (click)="$event.stopPropagation()">\r
      </div>\r
\r
      <!-- No results message -->\r
      <div *ngIf="searchable && filteredOptions.length === 0 && searchTerm.trim() !== ''" class="no-results">\r
        No options found for "{{ searchTerm }}"\r
      </div>\r
\r
      <!-- Options list -->\r
      <button\r
        *ngFor="let option of filteredOptions"\r
        type="button"\r
        (click)="selectOption(option)"\r
        class="dropdown-item"\r
        [class.selected]="selectedOption?.id === option.id"\r
        [class.disabled]="option.disabled">\r
        <div class="item-content">\r
          <div class="item-icon" *ngIf="option.icon">\r
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
          </div>\r
          <div class="item-details">\r
            <div class="item-name">{{ option.name }}</div>\r
            <div class="item-description" *ngIf="option.description">{{ getOptionDescription(option) }}</div>\r
          </div>\r
        </div>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="field-error" *ngIf="hasFieldError()">\r
    {{ getFieldError() }}\r
  </div>\r
</div>\r
`, styles: ["/* src/app/shared/components/global-dropdown/global-dropdown.component.scss */\n.dropdown-wrapper.error .dropdown-button {\n  border-color: #dc2626;\n}\n.dropdown-wrapper.error .dropdown-button:focus {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.dropdown-label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n}\n.required {\n  color: #dc2626;\n  margin-left: 4px;\n}\n.generic-dropdown {\n  position: relative;\n  width: 100%;\n}\n.dropdown-button {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-size: 14px;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dropdown-button:hover:not(:disabled) {\n  border-color: #9ca3af;\n}\n.dropdown-button:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.dropdown-button.active {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.dropdown-button:disabled {\n  background-color: #f9fafb;\n  color: #9ca3af;\n  cursor: not-allowed;\n  border-color: #e5e7eb;\n}\n.dropdown-button.error {\n  border-color: #dc2626;\n}\n.dropdown-button.error:focus {\n  border-color: #dc2626;\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.dropdown-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.placeholder {\n  color: #9ca3af;\n  font-style: italic;\n}\n.selected-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n.item-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.icon {\n  width: 16px;\n  height: 16px;\n  color: #6b7280;\n}\n.selected-text {\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n}\n.dropdown-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.clear-btn {\n  background: none;\n  border: none;\n  padding: 4px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.clear-btn:hover {\n  background-color: #f3f4f6;\n}\n.clear-icon {\n  width: 16px;\n  height: 16px;\n  color: #6b7280;\n}\n.dropdown-arrow {\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n.dropdown-arrow.rotated {\n  transform: rotate(180deg);\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #d1d5db;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.dropdown-header {\n  padding: 12px 16px;\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 500;\n  color: #374151;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.options-count {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: normal;\n}\n.search-container {\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.search-input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.search-input::placeholder {\n  color: #9ca3af;\n}\n.no-results {\n  padding: 16px;\n  text-align: center;\n  color: #6b7280;\n  font-style: italic;\n  font-size: 14px;\n}\n.dropdown-item {\n  width: 100%;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f3f4f6;\n}\n.dropdown-item:hover:not(.disabled) {\n  background-color: #f3f4f6;\n}\n.dropdown-item.selected {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n}\n.dropdown-item.disabled {\n  color: #9ca3af;\n  cursor: not-allowed;\n  background-color: #f9fafb;\n}\n.dropdown-item:last-child {\n  border-bottom: none;\n}\n.item-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.item-details {\n  flex: 1;\n}\n.item-name {\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 2px;\n}\n.item-description {\n  font-size: 12px;\n  color: #6b7280;\n  line-height: 1.4;\n}\n.field-error {\n  margin-top: 8px;\n  color: #dc2626;\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=global-dropdown.component.css.map */\n"] }]
  }], null, { options: [{
    type: Input
  }], selectedOption: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], label: [{
    type: Input
  }], required: [{
    type: Input
  }], disabled: [{
    type: Input
  }], error: [{
    type: Input
  }], errorMessage: [{
    type: Input
  }], searchable: [{
    type: Input
  }], maxHeight: [{
    type: Input
  }], minWidth: [{
    type: Input
  }], selectionChange: [{
    type: Output
  }], closeOnOutsideClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalDropdownComponent, { className: "GlobalDropdownComponent", filePath: "src/app/shared/components/global-dropdown/global-dropdown.component.ts", lineNumber: 19 });
})();

export {
  GlobalDropdownComponent
};
//# sourceMappingURL=chunk-GDHESMHY.js.map
