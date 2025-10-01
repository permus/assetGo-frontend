import {
  MaintenanceService
} from "./chunk-G7NBKUQU.js";
import {
  MetaWorkOrdersService
} from "./chunk-VRK7CGOB.js";
import {
  AssetService
} from "./chunk-DV6PQFY7.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-FSOYXA4J.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase
} from "./chunk-MMJF4Y5E.js";
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
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
} from "./chunk-YUR5IGOK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/maintenance/components/plan-dialog/plan-dialog.component.ts
function PlanDialogComponent_div_0_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_button_10_Template_button_click_0_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTabClick(i_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-blue-600", i_r4 === ctx_r1.step())("text-white", i_r4 === ctx_r1.step())("disabled", i_r4 > ctx_r1.step());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", s_r5, " ");
  }
}
function PlanDialogComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 24);
    \u0275\u0275element(3, "circle", 25)(4, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 27);
    \u0275\u0275text(6, "Loading plan data...");
    \u0275\u0275elementEnd()()();
  }
}
function PlanDialogComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275element(3, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PlanDialogComponent_div_0_ng_container_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("name"), " ");
  }
}
function PlanDialogComponent_div_0_ng_container_15_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Select priority");
    \u0275\u0275elementEnd();
  }
}
function PlanDialogComponent_div_0_ng_container_15_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.selectedPriorityMeta == null ? null : ctx_r1.selectedPriorityMeta.name) || (ctx_r1.selectedPriorityMeta == null ? null : ctx_r1.selectedPriorityMeta.slug));
  }
}
function PlanDialogComponent_div_0_ng_container_15_div_23_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_15_div_23_button_3_Template_button_click_0_listener() {
      const priority_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectPriority(priority_r8));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 57);
    \u0275\u0275element(4, "path", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 65)(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const priority_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r1.selectedPriorityMeta == null ? null : ctx_r1.selectedPriorityMeta.id) === priority_r8.id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(priority_r8.name || priority_r8.slug);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPriorityDescription(priority_r8));
  }
}
function PlanDialogComponent_div_0_ng_container_15_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2, "Select priority");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PlanDialogComponent_div_0_ng_container_15_div_23_button_3_Template, 10, 4, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.priorityOptions);
  }
}
function PlanDialogComponent_div_0_ng_container_15_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Select plan type");
    \u0275\u0275elementEnd();
  }
}
function PlanDialogComponent_div_0_ng_container_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getPlanTypeName(ctx_r1.model.plan_type));
  }
}
function PlanDialogComponent_div_0_ng_container_15_div_35_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_15_div_35_button_3_Template_button_click_0_listener() {
      const opt_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectPlanType(opt_r10.value));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 57);
    \u0275\u0275element(4, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 65)(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.model.plan_type === opt_r10.value);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(opt_r10.name);
  }
}
function PlanDialogComponent_div_0_ng_container_15_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2, "Select plan type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PlanDialogComponent_div_0_ng_container_15_div_35_button_3_Template, 8, 3, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.planTypeOptions);
  }
}
function PlanDialogComponent_div_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 32)(2, "div", 33)(3, "div", 34)(4, "label");
    \u0275\u0275text(5, "Name ");
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_15_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.name, $event) || (ctx_r1.model.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function PlanDialogComponent_div_0_ng_container_15_Template_input_input_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFieldError("name"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PlanDialogComponent_div_0_ng_container_15_div_9_Template, 2, 1, "div", 37);
    \u0275\u0275elementStart(10, "div", 38);
    \u0275\u0275text(11, " Plan names must be unique within your company. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 33)(13, "div", 34)(14, "label");
    \u0275\u0275text(15, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 39);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_15_Template_div_click_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(17, "button", 40);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_15_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePriorityDropdown());
    });
    \u0275\u0275elementStart(18, "div", 41);
    \u0275\u0275template(19, PlanDialogComponent_div_0_ng_container_15_span_19_Template, 2, 0, "span", 42)(20, PlanDialogComponent_div_0_ng_container_15_div_20_Template, 6, 1, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 44);
    \u0275\u0275element(22, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, PlanDialogComponent_div_0_ng_container_15_div_23_Template, 4, 1, "div", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 33)(25, "div", 34)(26, "label");
    \u0275\u0275text(27, "Plan Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 47);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_15_Template_div_click_28_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(29, "button", 40);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_15_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePlanTypeDropdown());
    });
    \u0275\u0275elementStart(30, "div", 41);
    \u0275\u0275template(31, PlanDialogComponent_div_0_ng_container_15_span_31_Template, 2, 0, "span", 42)(32, PlanDialogComponent_div_0_ng_container_15_div_32_Template, 6, 1, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 44);
    \u0275\u0275element(34, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, PlanDialogComponent_div_0_ng_container_15_div_35_Template, 4, 1, "div", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 33)(37, "div", 34)(38, "label");
    \u0275\u0275text(39, "Estimated Duration (hours)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_15_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.estimeted_duration, $event) || (ctx_r1.model.estimeted_duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 49)(42, "div", 34)(43, "label");
    \u0275\u0275text(44, "Descriptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "textarea", 50);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_15_Template_textarea_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.descriptions, $event) || (ctx_r1.model.descriptions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 49)(47, "div", 34)(48, "label");
    \u0275\u0275text(49, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_15_Template_textarea_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.instractions, $event) || (ctx_r1.model.instractions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 49)(52, "div", 34)(53, "label");
    \u0275\u0275text(54, "Safety Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_15_Template_textarea_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.safety_notes, $event) || (ctx_r1.model.safety_notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("name"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error-input", ctx_r1.hasFieldError("name"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.name);
    \u0275\u0275property("disabled", ctx_r1.editMode && ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("name"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx_r1.showPriorityDropdown);
    \u0275\u0275property("disabled", ctx_r1.editMode && ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedPriorityMeta);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPriorityMeta);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showPriorityDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showPriorityDropdown);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.showPlanTypeDropdown);
    \u0275\u0275property("disabled", ctx_r1.editMode && ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.model.plan_type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.plan_type);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showPlanTypeDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showPlanTypeDropdown);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.estimeted_duration);
    \u0275\u0275property("disabled", ctx_r1.editMode && ctx_r1.loading);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.descriptions);
    \u0275\u0275property("disabled", ctx_r1.editMode && ctx_r1.loading);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.instractions);
    \u0275\u0275property("disabled", ctx_r1.editMode && ctx_r1.loading);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.safety_notes);
    \u0275\u0275property("disabled", ctx_r1.editMode && ctx_r1.loading);
  }
}
function PlanDialogComponent_div_0_ng_container_16_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "All Categories");
    \u0275\u0275elementEnd();
  }
}
function PlanDialogComponent_div_0_ng_container_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedAssetCategory == null ? null : ctx_r1.selectedAssetCategory.name);
  }
}
function PlanDialogComponent_div_0_ng_container_16_div_16_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_div_16_button_8_Template_button_click_0_listener() {
      const c_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectAssetCategoryFilter(c_r14));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 65)(3, "div", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r1.selectedAssetCategory == null ? null : ctx_r1.selectedAssetCategory.id) === c_r14.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r14.name);
  }
}
function PlanDialogComponent_div_0_ng_container_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 63);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_div_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectAssetCategoryFilter(null));
    });
    \u0275\u0275elementStart(4, "div", 64)(5, "div", 65)(6, "div", 66);
    \u0275\u0275text(7, "All");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(8, PlanDialogComponent_div_0_ng_container_16_div_16_button_8_Template, 5, 3, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.assetCategoryOptions);
  }
}
function PlanDialogComponent_div_0_ng_container_16_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "All Status");
    \u0275\u0275elementEnd();
  }
}
function PlanDialogComponent_div_0_ng_container_16_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedAssetStatus == null ? null : ctx_r1.selectedAssetStatus.name);
  }
}
function PlanDialogComponent_div_0_ng_container_16_div_24_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_div_24_button_8_Template_button_click_0_listener() {
      const s_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectAssetStatusFilter(s_r17));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 65)(3, "div", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r1.selectedAssetStatus == null ? null : ctx_r1.selectedAssetStatus.id) === s_r17.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r17.name);
  }
}
function PlanDialogComponent_div_0_ng_container_16_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 63);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_div_24_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectAssetStatusFilter(null));
    });
    \u0275\u0275elementStart(4, "div", 64)(5, "div", 65)(6, "div", 66);
    \u0275\u0275text(7, "All");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(8, PlanDialogComponent_div_0_ng_container_16_div_24_button_8_Template, 5, 3, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.assetStatusOptions);
  }
}
function PlanDialogComponent_div_0_ng_container_16_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "label", 88)(3, "input", 89);
    \u0275\u0275listener("change", function PlanDialogComponent_div_0_ng_container_16_div_33_Template_input_change_3_listener() {
      const a_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAssetSelection(a_r19.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 91);
    \u0275\u0275text(6, " No Schedule ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 92)(8, "div", 93);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 94)(11, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 96);
    \u0275\u0275element(13, "path", 97)(14, "path", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 99);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 100);
    \u0275\u0275element(18, "path", 101)(19, "path", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 99);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 100);
    \u0275\u0275element(23, "path", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("!border-blue-200", ctx_r1.isAssetSelected(a_r19.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isAssetSelected(a_r19.id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r19.name || a_r19.asset_name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", a_r19.asset_id || a_r19.serial_number || a_r19.id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (a_r19.location == null ? null : a_r19.location.name) || (a_r19.department == null ? null : a_r19.department.name) || a_r19.brand || "N/A", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (a_r19.manufacturer == null ? null : a_r19.manufacturer.name) || (a_r19.department == null ? null : a_r19.department.manufacturer) || "N/A", " ");
  }
}
function PlanDialogComponent_div_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 69)(2, "h3", 70);
    \u0275\u0275text(3, "Assign Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5, "Select which assets this maintenance plan should apply to. You can always modify this later.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 72)(7, "div", 73)(8, "input", 74);
    \u0275\u0275listener("ngModelChange", function PlanDialogComponent_div_0_ng_container_16_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAssetsSearchChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 75);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_Template_div_click_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "button", 76);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAssetCategoryDropdown());
    });
    \u0275\u0275elementStart(11, "div", 41);
    \u0275\u0275template(12, PlanDialogComponent_div_0_ng_container_16_span_12_Template, 2, 0, "span", 42)(13, PlanDialogComponent_div_0_ng_container_16_div_13_Template, 6, 1, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 44);
    \u0275\u0275element(15, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, PlanDialogComponent_div_0_ng_container_16_div_16_Template, 9, 1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 77);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_Template_div_click_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "button", 76);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAssetStatusDropdown());
    });
    \u0275\u0275elementStart(19, "div", 41);
    \u0275\u0275template(20, PlanDialogComponent_div_0_ng_container_16_span_20_Template, 2, 0, "span", 42)(21, PlanDialogComponent_div_0_ng_container_16_div_21_Template, 6, 1, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 44);
    \u0275\u0275element(23, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, PlanDialogComponent_div_0_ng_container_16_div_24_Template, 9, 1, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "div", 78)(26, "button", 79);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAllOnPage());
    });
    \u0275\u0275text(27, "Select All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 79);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAllSelection());
    });
    \u0275\u0275text(29, "Clear All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 80);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 81);
    \u0275\u0275template(33, PlanDialogComponent_div_0_ng_container_16_div_33_Template, 25, 7, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 83)(35, "button", 79);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevAssetsPage());
    });
    \u0275\u0275text(36, "Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 84);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 79);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_16_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextAssetsPage());
    });
    \u0275\u0275text(40, "Next ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r1.searchAssets());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.showAssetCategoryDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedAssetCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAssetCategory);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showAssetCategoryDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showAssetCategoryDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.showAssetStatusDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedAssetStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAssetStatus);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showAssetStatusDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showAssetStatusDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.assetsLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.assetsLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedAssetIds().size, " selected");
    \u0275\u0275advance();
    \u0275\u0275classProp("loading", ctx_r1.assetsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.assets());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.assetsPage() === 1 || ctx_r1.assetsLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.assetsPage(), " / ", ctx_r1.totalAssetPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.assetsPage() === ctx_r1.totalAssetPages() || ctx_r1.assetsLoading);
  }
}
function PlanDialogComponent_div_0_ng_container_17_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Select type");
    \u0275\u0275elementEnd();
  }
}
function PlanDialogComponent_div_0_ng_container_17_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.newChecklistItem.type);
  }
}
function PlanDialogComponent_div_0_ng_container_17_div_25_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_17_div_25_button_3_Template_button_click_0_listener() {
      const t_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectNewItemType(t_r22));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 65)(3, "div", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.newChecklistItem.type === t_r22);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r22);
  }
}
function PlanDialogComponent_div_0_ng_container_17_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2, "Select type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PlanDialogComponent_div_0_ng_container_17_div_25_button_3_Template, 5, 3, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.itemTypeOptions);
  }
}
function PlanDialogComponent_div_0_ng_container_17_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 121);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 122);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 123);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_17_div_46_div_1_Template_button_click_5_listener() {
      const i_r24 = \u0275\u0275restoreView(_r23).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeItem(i_r24));
    });
    \u0275\u0275text(6, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r25.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", it_r25.type, " \u2022 ", it_r25.is_required ? "Required" : "Optional", "");
  }
}
function PlanDialogComponent_div_0_ng_container_17_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275template(1, PlanDialogComponent_div_0_ng_container_17_div_46_div_1_Template, 7, 3, "div", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.items());
  }
}
function PlanDialogComponent_div_0_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 104)(2, "h3", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 105)(5, "div", 106)(6, "div", 107);
    \u0275\u0275text(7, "Add New Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 80);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 108)(11, "div", 34)(12, "label");
    \u0275\u0275text(13, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_17_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newChecklistItem.title, $event) || (ctx_r1.newChecklistItem.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 34)(16, "label");
    \u0275\u0275text(17, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 110);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_17_Template_div_click_18_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(19, "button", 76);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_17_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleNewItemTypeDropdown());
    });
    \u0275\u0275elementStart(20, "div", 41);
    \u0275\u0275template(21, PlanDialogComponent_div_0_ng_container_17_span_21_Template, 2, 0, "span", 42)(22, PlanDialogComponent_div_0_ng_container_17_div_22_Template, 6, 1, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 44);
    \u0275\u0275element(24, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, PlanDialogComponent_div_0_ng_container_17_div_25_Template, 4, 1, "div", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 34)(27, "label");
    \u0275\u0275text(28, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 111);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_17_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newChecklistItem.description, $event) || (ctx_r1.newChecklistItem.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 112)(31, "label", 113)(32, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_17_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newChecklistItem.is_required, $event) || (ctx_r1.newChecklistItem.is_required = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "span", 90);
    \u0275\u0275text(34, " Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "label", 113)(36, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_17_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newChecklistItem.is_safety_critical, $event) || (ctx_r1.newChecklistItem.is_safety_critical = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "span", 90);
    \u0275\u0275text(38, " Safety Critical");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 113)(40, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_17_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newChecklistItem.is_photo_required, $event) || (ctx_r1.newChecklistItem.is_photo_required = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "span", 90);
    \u0275\u0275text(42, " Photo Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 115)(44, "button", 116);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_17_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addItemFromForm());
    });
    \u0275\u0275text(45, "+ Add Item");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(46, PlanDialogComponent_div_0_ng_container_17_div_46_Template, 2, 1, "div", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Checklist Items (", ctx_r1.items().length, ")");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.items().length);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newChecklistItem.title);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.showNewItemTypeDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.newChecklistItem.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newChecklistItem.type);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showNewItemTypeDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showNewItemTypeDropdown);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newChecklistItem.description);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newChecklistItem.is_required);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newChecklistItem.is_safety_critical);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newChecklistItem.is_photo_required);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.items().length > 0);
  }
}
function PlanDialogComponent_div_0_ng_container_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Select frequency type");
    \u0275\u0275elementEnd();
  }
}
function PlanDialogComponent_div_0_ng_container_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getFrequencyTypeLabel(ctx_r1.model.frequency_type));
  }
}
function PlanDialogComponent_div_0_ng_container_18_div_13_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_18_div_13_button_3_Template_button_click_0_listener() {
      const opt_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectFrequencyType(opt_r28.value));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 57);
    \u0275\u0275element(4, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 65)(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const opt_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.model.frequency_type === opt_r28.value);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(opt_r28.name);
  }
}
function PlanDialogComponent_div_0_ng_container_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2, "Select frequency type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PlanDialogComponent_div_0_ng_container_18_div_13_button_3_Template, 8, 3, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.frequencyTypeOptions);
  }
}
function PlanDialogComponent_div_0_ng_container_18_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("frequency_value"), " ");
  }
}
function PlanDialogComponent_div_0_ng_container_18_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Select unit");
    \u0275\u0275elementEnd();
  }
}
function PlanDialogComponent_div_0_ng_container_18_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.model.frequency_unit);
  }
}
function PlanDialogComponent_div_0_ng_container_18_div_31_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_18_div_31_button_3_Template_button_click_0_listener() {
      const u_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectFrequencyUnit(u_r30));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 57);
    \u0275\u0275element(4, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 65)(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r30 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.model.frequency_unit === u_r30);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(u_r30);
  }
}
function PlanDialogComponent_div_0_ng_container_18_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2, "Select unit");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PlanDialogComponent_div_0_ng_container_18_div_31_button_3_Template, 8, 3, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.frequencyUnitOptions);
  }
}
function PlanDialogComponent_div_0_ng_container_18_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("frequency_unit"), " ");
  }
}
function PlanDialogComponent_div_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 124)(2, "div", 33)(3, "div", 34)(4, "label");
    \u0275\u0275text(5, "Frequency Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 125);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_18_Template_div_click_6_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(7, "button", 76);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFrequencyTypeDropdown());
    });
    \u0275\u0275elementStart(8, "div", 41);
    \u0275\u0275template(9, PlanDialogComponent_div_0_ng_container_18_span_9_Template, 2, 0, "span", 42)(10, PlanDialogComponent_div_0_ng_container_18_div_10_Template, 6, 1, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 44);
    \u0275\u0275element(12, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, PlanDialogComponent_div_0_ng_container_18_div_13_Template, 4, 1, "div", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 33)(15, "div", 34)(16, "label");
    \u0275\u0275text(17, "Frequency Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function PlanDialogComponent_div_0_ng_container_18_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.frequency_value, $event) || (ctx_r1.model.frequency_value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, PlanDialogComponent_div_0_ng_container_18_div_19_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 33)(21, "div", 34)(22, "label");
    \u0275\u0275text(23, "Frequency Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 127);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_18_Template_div_click_24_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(25, "button", 40);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_ng_container_18_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFrequencyUnitDropdown());
    });
    \u0275\u0275elementStart(26, "div", 41);
    \u0275\u0275template(27, PlanDialogComponent_div_0_ng_container_18_span_27_Template, 2, 0, "span", 42)(28, PlanDialogComponent_div_0_ng_container_18_div_28_Template, 6, 1, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 44);
    \u0275\u0275element(30, "path", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, PlanDialogComponent_div_0_ng_container_18_div_31_Template, 4, 1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, PlanDialogComponent_div_0_ng_container_18_div_32_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r1.showFrequencyTypeDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.model.frequency_type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.frequency_type);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showFrequencyTypeDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showFrequencyTypeDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("frequency_value"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r1.hasFieldError("frequency_value"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.frequency_value);
    \u0275\u0275property("disabled", ctx_r1.model.frequency_type !== "time");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("frequency_value"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("frequency_unit"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.showFrequencyUnitDropdown);
    \u0275\u0275property("disabled", ctx_r1.model.frequency_type !== "time");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.model.frequency_unit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.frequency_unit);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showFrequencyUnitDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showFrequencyUnitDropdown && ctx_r1.model.frequency_type === "time");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("frequency_unit"));
  }
}
function PlanDialogComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PlanDialogComponent_div_0_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275text(1, "Back ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function PlanDialogComponent_div_0_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 130);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(1, "Next ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.canGoNext() || ctx_r1.loading);
  }
}
function PlanDialogComponent_div_0_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 130);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.canSubmit() || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.editMode ? "Update Plan" : "Create Plan", " ");
  }
}
function PlanDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdrop($event));
    });
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 5)(5, "h2", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275template(10, PlanDialogComponent_div_0_button_10_Template, 2, 7, "button", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275template(12, PlanDialogComponent_div_0_div_12_Template, 7, 0, "div", 11)(13, PlanDialogComponent_div_0_div_13_Template, 6, 1, "div", 12);
    \u0275\u0275elementContainerStart(14, 13);
    \u0275\u0275template(15, PlanDialogComponent_div_0_ng_container_15_Template, 56, 31, "ng-container", 14)(16, PlanDialogComponent_div_0_ng_container_16_Template, 41, 25, "ng-container", 14)(17, PlanDialogComponent_div_0_ng_container_17_Template, 47, 15, "ng-container", 14)(18, PlanDialogComponent_div_0_ng_container_18_Template, 33, 25, "ng-container", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15);
    \u0275\u0275template(20, PlanDialogComponent_div_0_div_20_Template, 2, 1, "div", 16);
    \u0275\u0275elementStart(21, "div", 17);
    \u0275\u0275template(22, PlanDialogComponent_div_0_button_22_Template, 2, 1, "button", 18);
    \u0275\u0275elementStart(23, "button", 19);
    \u0275\u0275listener("click", function PlanDialogComponent_div_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(24, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 17);
    \u0275\u0275template(26, PlanDialogComponent_div_0_button_26_Template, 2, 1, "button", 20)(27, PlanDialogComponent_div_0_button_27_Template, 2, 2, "button", 20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editMode ? "Edit Maintenance Plan" : "Create Maintenance Plan");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editMode ? "Update your existing maintenance plan" : "Create a new preventive maintenance plan with tasks and scheduling");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.steps);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.editMode && ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r1.step());
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.step() > 0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.step() < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step() === 3);
  }
}
var PlanDialogComponent = class _PlanDialogComponent {
  api;
  meta;
  assetsApi;
  isOpen = false;
  editMode = false;
  planToEdit = null;
  closed = new EventEmitter();
  created = new EventEmitter();
  updated = new EventEmitter();
  steps = ["Basic Info", "Assets", "Checklist", "Schedule"];
  step = signal(0);
  loading = false;
  error = null;
  fieldErrors = {};
  assetsSearchTimeout = null;
  model = {
    name: "",
    priority_id: void 0,
    sort: 0,
    descriptions: "",
    category_id: void 0,
    plan_type: "preventive",
    estimeted_duration: void 0,
    instractions: "",
    safety_notes: "",
    asset_ids: [],
    frequency_type: "time",
    frequency_value: 30,
    frequency_unit: "days",
    is_active: true,
    checklist_items: []
  };
  items = signal([]);
  assetIdsCsv = signal("");
  // UI state for dropdowns per FRONTEND_RULES
  showPlanTypeDropdown = false;
  showFrequencyTypeDropdown = false;
  showFrequencyUnitDropdown = false;
  openItemTypeDropdownIndex = null;
  // Options
  planTypeOptions = [
    { value: "preventive", name: "preventive" },
    { value: "predictive", name: "predictive" },
    { value: "condition_based", name: "Condition Based" }
  ];
  itemTypeOptions = [
    "checkbox",
    "measurements",
    "text_input",
    "photo_capture",
    "pass_fail"
  ];
  frequencyTypeOptions = [
    { value: "time", name: "Time Based" },
    { value: "usage", name: "Usage Based" },
    { value: "condition", name: "Condition Based" }
  ];
  frequencyUnitOptions = ["days", "weeks", "months", "years"];
  submitted = false;
  // Assets tab state
  assets = signal([]);
  assetsLoading = false;
  assetsError = null;
  assetsPage = signal(1);
  assetsPerPage = 12;
  assetsTotal = signal(0);
  searchAssets = signal("");
  assetCategoryOptions = [];
  assetStatusOptions = [];
  selectedAssetCategoryId = null;
  selectedAssetStatusId = null;
  selectedAssetIds = signal(/* @__PURE__ */ new Set());
  showAssetCategoryDropdown = false;
  showAssetStatusDropdown = false;
  selectedAssetCategory = null;
  selectedAssetStatus = null;
  // Checklist - add new item form state
  newChecklistItem = {
    title: "",
    type: "checkbox",
    description: "",
    is_required: false,
    is_safety_critical: false,
    is_photo_required: false
  };
  showNewItemTypeDropdown = false;
  constructor(api, meta, assetsApi) {
    this.api = api;
    this.meta = meta;
    this.assetsApi = assetsApi;
  }
  go(i) {
    this.step.set(i);
    if (i === 1)
      this.ensureAssetsLoaded();
  }
  onTabClick(i) {
    if (i <= this.step()) {
      this.go(i);
      return;
    }
    if (i === this.step() + 1 && this.canGoNext()) {
      this.go(i);
    }
  }
  next() {
    if (this.step() < 3) {
      this.step.set(this.step() + 1);
      if (this.step() === 1)
        this.ensureAssetsLoaded();
    }
  }
  prev() {
    if (this.step() > 0)
      this.step.set(this.step() - 1);
  }
  onBackdrop(e) {
    this.close();
  }
  close() {
    this.closed.emit();
    this.reset();
  }
  addItem() {
    const order = this.items().length;
    this.items.set([...this.items(), { title: "", type: "checkbox", order, is_required: false, is_safety_critical: false, is_photo_required: false }]);
  }
  removeItem(i) {
    const list = [...this.items()];
    list.splice(i, 1);
    this.items.set(list.map((it, idx) => __spreadProps(__spreadValues({}, it), { order: idx })));
  }
  setAssetIdsCsv(v) {
    this.assetIdsCsv.set(v);
    const ids = v.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => !isNaN(n));
    this.model.asset_ids = ids;
  }
  // Priority dropdown state/data pulled from Work Orders meta service
  priorityOptions = [];
  selectedPriorityMeta = null;
  showPriorityDropdown = false;
  ngOnInitHookLoaded = false;
  ngOnInitOnce() {
    if (this.ngOnInitHookLoaded)
      return;
    this.ngOnInitHookLoaded = true;
    this.meta.clearPrioritiesCache();
    this.meta.getPriorities().subscribe({
      next: (priorities) => {
        this.priorityOptions = priorities;
        const def = priorities.find((p) => p.slug === "medium") || priorities[0] || null;
        if (def) {
          this.selectPriority(def);
        }
      },
      error: () => {
        this.priorityOptions = [];
      }
    });
  }
  // Ensure meta loaded when dialog opens (component constructed earlier)
  ngAfterViewInit() {
    this.ngOnInitOnce();
  }
  loadPlanForEditing() {
    if (!this.planToEdit?.id)
      return;
    this.loading = true;
    this.api.getPlan(this.planToEdit.id).subscribe({
      next: (response) => {
        const planData = response?.data?.plan || response;
        this.model = __spreadProps(__spreadValues({}, planData), {
          checklist_items: []
        });
        if (planData.checklists && planData.checklists.length > 0) {
          this.items.set([...planData.checklists]);
        }
        if (planData.asset_ids && planData.asset_ids.length > 0) {
          this.selectedAssetIds.set(new Set(planData.asset_ids));
          this.assetIdsCsv.set(planData.asset_ids.join(", "));
        }
        if (planData?.priority_id) {
          const priority = this.priorityOptions.find((p) => p.id === planData.priority_id);
          if (priority) {
            this.selectedPriorityMeta = priority;
          }
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Failed to load plan data:", error);
        this.loading = false;
        this.loadBasicPlanData();
      }
    });
  }
  loadBasicPlanData() {
    if (!this.planToEdit)
      return;
    this.model = __spreadProps(__spreadValues({}, this.planToEdit), {
      checklist_items: []
    });
    if (this.planToEdit.checklists && this.planToEdit.checklists.length > 0) {
      this.items.set([...this.planToEdit.checklists]);
    }
    if (this.planToEdit.asset_ids && this.planToEdit.asset_ids.length > 0) {
      this.selectedAssetIds.set(new Set(this.planToEdit.asset_ids));
      this.assetIdsCsv.set(this.planToEdit.asset_ids.join(", "));
    }
    if (this.planToEdit?.priority_id) {
      const priority = this.priorityOptions.find((p) => p.id === this.planToEdit.priority_id);
      if (priority) {
        this.selectedPriorityMeta = priority;
      }
    }
  }
  ngOnInit() {
    this.ngOnInitOnce();
    if (this.editMode && this.planToEdit?.id) {
      setTimeout(() => {
        this.loadPlanForEditing();
      }, 100);
    }
  }
  ngOnChanges(changes) {
    if (changes["editMode"] || changes["planToEdit"]) {
      if (this.editMode && this.planToEdit?.id && this.isOpen) {
        setTimeout(() => {
          this.loadPlanForEditing();
        }, 100);
      }
    }
  }
  // Validation helpers (Rule 2)
  hasFieldError(controlName) {
    if (!this.submitted)
      return false;
    if (this.fieldErrors[controlName] && this.fieldErrors[controlName].length > 0) {
      return true;
    }
    switch (controlName) {
      case "name":
        return !this.model.name || this.model.name.trim().length === 0;
      case "frequency_value":
        if (this.model.frequency_type !== "time")
          return false;
        return !this.model.frequency_value || this.model.frequency_value < 1;
      case "frequency_unit":
        if (this.model.frequency_type !== "time")
          return false;
        return !this.model.frequency_unit;
      default:
        return false;
    }
  }
  getFieldError(controlName) {
    if (this.fieldErrors[controlName] && this.fieldErrors[controlName].length > 0) {
      return this.fieldErrors[controlName][0];
    }
    switch (controlName) {
      case "name":
        return "This field is required.";
      case "frequency_value":
        return "Minimum value is 1.";
      case "frequency_unit":
        return "This field is required.";
      default:
        return "Invalid value.";
    }
  }
  // Clear field errors when user starts typing
  clearFieldError(fieldName) {
    if (this.fieldErrors[fieldName]) {
      delete this.fieldErrors[fieldName];
    }
  }
  // Dropdown helpers (Rule 1)
  togglePlanTypeDropdown() {
    this.showPlanTypeDropdown = !this.showPlanTypeDropdown;
  }
  selectPlanType(value) {
    this.model.plan_type = value;
    this.showPlanTypeDropdown = false;
  }
  getPlanTypeName(val) {
    if (!val)
      return "";
    return val.toLowerCase().replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
  toggleNewItemTypeDropdown() {
    this.showNewItemTypeDropdown = !this.showNewItemTypeDropdown;
  }
  selectNewItemType(t) {
    this.newChecklistItem.type = t;
    this.showNewItemTypeDropdown = false;
  }
  toggleFrequencyTypeDropdown() {
    this.showFrequencyTypeDropdown = !this.showFrequencyTypeDropdown;
  }
  selectFrequencyType(value) {
    this.model.frequency_type = value;
    this.showFrequencyTypeDropdown = false;
    if (value !== "time") {
      this.model.frequency_unit = null;
      this.model.frequency_value = void 0;
    }
  }
  getFrequencyTypeLabel(val) {
    const found = this.frequencyTypeOptions.find((o) => o.value === val);
    return found?.name || "";
  }
  toggleFrequencyUnitDropdown() {
    this.showFrequencyUnitDropdown = !this.showFrequencyUnitDropdown;
  }
  selectFrequencyUnit(u) {
    this.model.frequency_unit = u;
    this.showFrequencyUnitDropdown = false;
  }
  togglePriorityDropdown() {
    this.showPriorityDropdown = !this.showPriorityDropdown;
  }
  selectPriority(priority) {
    this.selectedPriorityMeta = priority;
    this.model.priority_id = priority.id;
    this.showPriorityDropdown = false;
  }
  // Priority helpers (descriptions/colors consistent with Work Orders)
  getPriorityDescription(priority) {
    if (!priority)
      return "";
    switch (priority.slug) {
      case "low":
        return "Low priority - can be addressed when convenient";
      case "medium":
        return "Medium priority - should be addressed soon";
      case "high":
        return "High priority - needs immediate attention";
      case "critical":
        return "Critical priority - urgent, requires immediate action";
      case "ppm":
        return "Preventive maintenance - scheduled maintenance task";
      default:
        return priority.name || priority.slug;
    }
  }
  // ===== Assets Tab Logic =====
  ensureAssetsLoaded() {
    if (this.assetCategoryOptions.length === 0) {
      this.assetsApi.getAssetCategories().subscribe({
        next: (res) => {
          const data = res?.data || res || [];
          this.assetCategoryOptions = Array.isArray(data) ? data : [];
        },
        error: () => {
          this.assetCategoryOptions = [];
        }
      });
    }
    if (this.assetStatusOptions.length === 0) {
      this.assetsApi.getAssetStatuses().subscribe({
        next: (res) => {
          const data = res?.data || res || [];
          this.assetStatusOptions = Array.isArray(data) ? data : [];
        },
        error: () => {
          this.assetStatusOptions = [];
        }
      });
    }
    this.loadAssets();
  }
  loadAssets() {
    this.assetsLoading = true;
    this.assetsError = null;
    const params = {
      page: this.assetsPage(),
      per_page: this.assetsPerPage,
      search: this.searchAssets(),
      category_id: this.selectedAssetCategoryId || void 0,
      status_id: this.selectedAssetStatusId || void 0
    };
    this.assetsApi.getAssets(params).subscribe({
      next: (res) => {
        const list = res?.data?.assets || res?.data?.data || res?.data || res?.items || [];
        const total = res?.data?.total ?? res?.total ?? (Array.isArray(list) ? list.length : 0);
        this.assets.set(Array.isArray(list) ? list : []);
        this.assetsTotal.set(Number(total) || 0);
        if (this.model.asset_ids?.length) {
          this.selectedAssetIds.set(new Set(this.model.asset_ids));
        }
      },
      error: (err) => {
        this.assetsError = err?.error?.message || "Failed to load assets";
        this.assets.set([]);
        this.assetsTotal.set(0);
      },
      complete: () => {
        this.assetsLoading = false;
      }
    });
  }
  totalAssetPages() {
    const t = this.assetsTotal();
    return t > 0 ? Math.ceil(t / this.assetsPerPage) : 1;
  }
  nextAssetsPage() {
    if (this.assetsPage() < this.totalAssetPages()) {
      this.assetsPage.set(this.assetsPage() + 1);
      this.loadAssets();
    }
  }
  prevAssetsPage() {
    if (this.assetsPage() > 1) {
      this.assetsPage.set(this.assetsPage() - 1);
      this.loadAssets();
    }
  }
  onAssetsSearchChange(v) {
    if (this.assetsSearchTimeout) {
      clearTimeout(this.assetsSearchTimeout);
    }
    this.assetsSearchTimeout = setTimeout(() => {
      this.searchAssets.set(v);
      this.assetsPage.set(1);
      this.loadAssets();
    }, 500);
  }
  onAssetsCategoryChange(id) {
    this.selectedAssetCategoryId = id ? Number(id) : null;
    this.assetsPage.set(1);
    this.loadAssets();
  }
  onAssetsStatusChange(id) {
    this.selectedAssetStatusId = id ? Number(id) : null;
    this.assetsPage.set(1);
    this.loadAssets();
  }
  toggleAssetCategoryDropdown() {
    this.showAssetCategoryDropdown = !this.showAssetCategoryDropdown;
    this.showAssetStatusDropdown = false;
  }
  toggleAssetStatusDropdown() {
    this.showAssetStatusDropdown = !this.showAssetStatusDropdown;
    this.showAssetCategoryDropdown = false;
  }
  selectAssetCategoryFilter(cat) {
    this.selectedAssetCategory = cat;
    this.selectedAssetCategoryId = cat?.id ?? null;
    this.showAssetCategoryDropdown = false;
    this.assetsPage.set(1);
    this.loadAssets();
  }
  selectAssetStatusFilter(st) {
    this.selectedAssetStatus = st;
    this.selectedAssetStatusId = st?.id ?? null;
    this.showAssetStatusDropdown = false;
    this.assetsPage.set(1);
    this.loadAssets();
  }
  isAssetSelected(id) {
    return this.selectedAssetIds().has(id);
  }
  toggleAssetSelection(id) {
    const set = new Set(this.selectedAssetIds());
    if (set.has(id))
      set.delete(id);
    else
      set.add(id);
    this.selectedAssetIds.set(set);
    this.model.asset_ids = Array.from(set);
  }
  selectAllOnPage() {
    const set = new Set(this.selectedAssetIds());
    for (const a of this.assets()) {
      if (a?.id != null)
        set.add(Number(a.id));
    }
    this.selectedAssetIds.set(set);
    this.model.asset_ids = Array.from(set);
  }
  clearAllSelection() {
    this.selectedAssetIds.set(/* @__PURE__ */ new Set());
    this.model.asset_ids = [];
  }
  // Add checklist item from the form
  addItemFromForm() {
    const nextOrder = this.items().length;
    const toAdd = {
      title: (this.newChecklistItem.title || "").trim(),
      type: this.newChecklistItem.type,
      description: (this.newChecklistItem.description || "").trim(),
      is_required: !!this.newChecklistItem.is_required,
      is_safety_critical: !!this.newChecklistItem.is_safety_critical,
      is_photo_required: !!this.newChecklistItem.is_photo_required,
      order: nextOrder
    };
    if (!toAdd.title)
      return;
    this.items.set([...this.items(), toAdd]);
    this.newChecklistItem = { title: "", type: "checkbox", description: "", is_required: false, is_safety_critical: false, is_photo_required: false };
  }
  closeAllDropdowns() {
    this.showPlanTypeDropdown = false;
    this.showFrequencyTypeDropdown = false;
    this.showFrequencyUnitDropdown = false;
    this.openItemTypeDropdownIndex = null;
    this.showPriorityDropdown = false;
  }
  canSubmit() {
    const hasChecklist = this.items().length > 0;
    const hasName = !!this.model.name && this.model.name.trim().length > 0;
    if (this.model.frequency_type === "time") {
      return hasChecklist && hasName && !!this.model.frequency_value && !!this.model.frequency_unit;
    }
    return hasChecklist && hasName;
  }
  // Step-level validation for enabling Next
  canGoNext() {
    switch (this.step()) {
      case 0: {
        const hasName = !!this.model.name && this.model.name.trim().length > 0;
        const hasPlanType = !!this.model.plan_type;
        return hasName && hasPlanType;
      }
      case 1: {
        return true;
      }
      case 2: {
        return this.items().length > 0;
      }
      default:
        return false;
    }
  }
  submit() {
    this.submitted = true;
    if (!this.canSubmit())
      return;
    this.loading = true;
    this.error = null;
    this.fieldErrors = {};
    const payload = __spreadProps(__spreadValues({}, this.model), { checklist_items: this.items().map((it, idx) => __spreadProps(__spreadValues({}, it), { order: it.order ?? idx })) });
    if (this.editMode && this.planToEdit?.id) {
      this.api.updatePlan(this.planToEdit.id, payload).subscribe({
        next: (res) => {
          this.loading = false;
          this.updated.emit(res);
          this.close();
        },
        error: (err) => {
          this.loading = false;
          if (err?.error?.errors && typeof err.error.errors === "object") {
            this.fieldErrors = err.error.errors;
            this.error = err?.error?.message || "Please fix the validation errors below.";
          } else {
            const msg = err?.error?.message || "Failed to update plan";
            this.error = msg;
          }
        }
      });
    } else {
      this.api.createPlan(payload).subscribe({
        next: (res) => {
          this.loading = false;
          this.created.emit(res);
          this.close();
        },
        error: (err) => {
          this.loading = false;
          if (err?.error?.errors && typeof err.error.errors === "object") {
            this.fieldErrors = err.error.errors;
            this.error = err?.error?.message || "Please fix the validation errors below.";
          } else {
            const msg = err?.error?.message || "Failed to create plan";
            this.error = msg;
          }
        }
      });
    }
  }
  reset() {
    this.step.set(0);
    if (this.editMode && this.planToEdit?.id) {
      this.loadPlanForEditing();
    } else {
      this.model = {
        name: "",
        priority_id: void 0,
        sort: 0,
        descriptions: "",
        category_id: void 0,
        plan_type: "preventive",
        estimeted_duration: void 0,
        instractions: "",
        safety_notes: "",
        asset_ids: [],
        frequency_type: "time",
        frequency_value: 30,
        frequency_unit: "days",
        is_active: true,
        checklist_items: []
      };
      this.items.set([]);
      this.assetIdsCsv.set("");
      this.selectedAssetIds.set(/* @__PURE__ */ new Set());
    }
    this.error = null;
    this.fieldErrors = {};
    this.loading = false;
    this.submitted = false;
    this.closeAllDropdowns();
  }
  static \u0275fac = function PlanDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlanDialogComponent)(\u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(MetaWorkOrdersService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanDialogComponent, selectors: [["app-plan-dialog"]], hostBindings: function PlanDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function PlanDialogComponent_click_HostBindingHandler() {
        return ctx.closeAllDropdowns();
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { isOpen: "isOpen", editMode: "editMode", planToEdit: "planToEdit" }, outputs: { closed: "closed", created: "created", updated: "updated" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "fixed inset-0 z-50 modal-overlay", 3, "click", 4, "ngIf"], [1, "fixed", "inset-0", "z-50", "modal-overlay", 3, "click"], [1, "absolute", "inset-0", "bg-black/30"], [1, "absolute", "inset-0", "flex", "items-start", "justify-center", "overflow-auto", "py-8", "px-4"], [1, "modal", "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-5xl", 3, "click"], [1, "modal-header"], [1, "text-xl", "font-semibold"], [1, "text-sm", "text-gray-500"], [1, "mt-3", "grid", "grid-cols-4", "w-full", "gap-2", "bg-white", "p-3", "rounded-lg"], ["class", "tab-btn p-2 rounded-lg", 3, "bg-blue-600", "text-white", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "p-6", "space-y-4", "modal-body"], ["class", "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4", 4, "ngIf"], ["class", "bg-red-50 border border-red-200 rounded-lg p-4 mb-4", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "modal-footer", "p-6", "border-t", "flex", "justify-between", "items-center"], ["class", "text-sm text-red-600", 4, "ngIf"], [1, "flex", "gap-2"], ["type", "button", "class", "btn btn-secondary w-[150px]", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-secondary", "w-[150px]", 3, "click", "disabled"], ["class", "btn btn-primary w-[150px]", 3, "disabled", "click", 4, "ngIf"], [1, "tab-btn", "p-2", "rounded-lg", 3, "click"], [1, "bg-blue-50", "border", "border-blue-200", "rounded-lg", "p-4", "mb-4"], [1, "flex", "items-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5", "text-blue-400", "mr-2"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-blue-800", "font-medium"], [1, "bg-red-50", "border", "border-red-200", "rounded-lg", "p-4", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-400", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-red-800", "font-medium"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "form-row", "full-width"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Plan name", 3, "ngModelChange", "input", "ngModel", "disabled"], ["class", "field-error", 4, "ngIf"], [1, "field-hint", "text-xs", "text-gray-500", "mt-1"], [1, "relative", "priority-dropdown", 3, "click"], ["type", "button", 1, "dropdown-button", 3, "click", "disabled"], [1, "dropdown-content"], ["class", "placeholder", 4, "ngIf"], ["class", "selected-item", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "dropdown-menu", 4, "ngIf"], [1, "relative", "plan-type-dropdown", 3, "click"], ["type", "number", "placeholder", "0", "min", "0", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-row", "full-width", "md:col-span-2"], ["placeholder", "Enter work order description", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "Enter instructions", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "Enter safety notes", 3, "ngModelChange", "ngModel", "disabled"], [1, "field-error"], [1, "placeholder"], [1, "selected-item"], [1, "item-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "selected-text"], [1, "dropdown-menu"], [1, "dropdown-header"], ["type", "button", "class", "dropdown-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "item-content"], [1, "item-details"], [1, "item-name"], [1, "item-description", "!text-xs"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "assets-section", "light"], [1, "section-title"], [1, "section-subtitle"], [1, "filters-row"], [1, "search-box"], ["type", "text", "placeholder", "Search assets...", 3, "ngModelChange", "ngModel"], [1, "relative", "category-dropdown", 3, "click"], ["type", "button", 1, "dropdown-button", 3, "click"], [1, "relative", "status-dropdown", 3, "click"], [1, "bulk-actions"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "count"], [1, "assets-grid"], ["class", "asset-card flex-col", 3, "!border-blue-200", 4, "ngFor", "ngForOf"], [1, "pagination-row"], [1, "page-indicator"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"], [1, "asset-card", "flex-col"], [1, "flex", "justify-between", "w-full"], [1, "asset-select"], ["type", "checkbox", 1, "rounded-full", 3, "change", "checked"], [1, "checkmark"], [1, "border", "border-gray-200", "px-2", "py-1", "rounded-full", "bg-gray-100", "text-xs", "font-medium"], [1, "asset-body"], [1, "asset-name"], [1, "asset-meta"], [1, "meta-line", "flex", "gap-2", "items-center", "w-full"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 6h.008v.008H6V6Z"], [1, "meta-line", "flex", "gap-2", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"], [1, "checklist-section"], [1, "add-item-card"], [1, "header-row"], [1, "title"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3"], ["type", "text", "placeholder", "Item title", 3, "ngModelChange", "ngModel"], [1, "relative", "item-type-dropdown", 3, "click"], ["placeholder", "Detailed instructions for this item", 3, "ngModelChange", "ngModel"], [1, "toggles-row"], [1, "toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "actions-row"], [1, "btn", "btn-primary", 3, "click"], ["class", "list", 4, "ngIf"], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"], [1, "item-title"], [1, "item-meta"], [1, "remove", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-3"], [1, "relative", "freq-type-dropdown", 3, "click"], ["type", "number", "min", "1", "placeholder", "Value", 3, "ngModelChange", "ngModel", "disabled"], [1, "relative", "freq-unit-dropdown", 3, "click"], [1, "text-sm", "text-red-600"], ["type", "button", 1, "btn", "btn-secondary", "w-[150px]", 3, "click", "disabled"], [1, "btn", "btn-primary", "w-[150px]", 3, "click", "disabled"]], template: function PlanDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PlanDialogComponent_div_0_Template, 28, 15, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgSwitch, NgSwitchCase, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: [`@charset "UTF-8";



.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  min-height: 60vh;
  max-height: 90vh;
  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 0;
  display: none;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  padding: 1.5rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {
  font-weight: 500;
  transition: all 0.2s ease;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover {
  background-color: #e6e6e6;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .tab-btn.bg-blue-600[_ngcontent-%COMP%]:hover {
  background-color: #1d4ed8;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .tab-btn.disabled[_ngcontent-%COMP%] {
  pointer-events: none;
  opacity: 0.5;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {
  padding: 1.5rem;
  flex: 1 1 auto;
  overflow: auto;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {
  color: #dc2626;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  min-height: 44px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {
  color: #9ca3af;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error-input[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.error-input[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.error-input[_ngcontent-%COMP%] {
  border-color: #dc2626;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error-input[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.error-input[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.error-input[_ngcontent-%COMP%]:focus {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  background-color: #f9fafb;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  background: white;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover {
  background-color: #f3f4f6;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 80px;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  color: #dc2626;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {
  color: #dc2626;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%]::before {
  content: "\\26a0";
  font-size: 0.875rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-help[_ngcontent-%COMP%] {
  margin-top: 0.25rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-help[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.75rem;
  font-style: italic;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  align-items: center;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {
  flex: 1;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.6rem 0.9rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  padding: 0.6rem 0.9rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background: #fff;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%] {
  width: 220px;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {
  margin-left: auto;
  font-size: 0.875rem;
  color: #6b7280;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .assets-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.75rem;
}
@media (min-width: 768px) {
  .modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .assets-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1024px) {
  .modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .assets-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%] {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.75rem;
  background: #fff;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .asset-select[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .asset-select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .asset-body[_ngcontent-%COMP%] {
  flex: 1;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .asset-name[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .asset-meta[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #6b7280;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .asset-status[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #374151;
  background: #f3f4f6;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .pagination-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #374151;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%] {
  width: 100%;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .add-item-card[_ngcontent-%COMP%] {
  border: 1px dashed #d1d5db;
  border-radius: 0.75rem;
  padding: 1rem;
  background: #fff;
  margin-bottom: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .add-item-card[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .add-item-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #111827;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .add-item-card[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .toggles-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 0.5rem 0 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  background: #fff;
  margin-bottom: 0.5rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #111827;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .checklist-section[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%] {
  color: #ef4444;
  background: none;
  border: none;
  cursor: pointer;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%] {
  position: relative;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.45rem 1rem;
  text-align: left;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  min-height: 44px;
  background-color: white;
  transition: all 0.2s ease;
  cursor: pointer;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%] {
  border-color: #fca5a5;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%] {
  border-color: #3b82f6;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {
  color: #9ca3af;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%] {
  color: #111827;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  transition: transform 0.2s ease;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {
  position: absolute;
  z-index: 50;
  width: 100%;
  margin-top: 0.25rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 15rem;
  overflow: auto;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #f9fafb;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {
  background: #eff6ff;
  outline: none;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%] {
  background: #eff6ff;
  color: #1d4ed8;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eff6ff;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%] {
  flex: 1;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #111827;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .plan-type-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .priority-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .item-type-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-type-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .freq-unit-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .category-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], 
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .status-dropdown[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.125rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: auto;
}
.btn[_ngcontent-%COMP%] {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}
.btn.btn-secondary[_ngcontent-%COMP%] {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.btn.btn-secondary[_ngcontent-%COMP%]:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}
.btn.btn-primary[_ngcontent-%COMP%] {
  background: #2563eb;
  color: white;
}
.btn.btn-primary[_ngcontent-%COMP%]:hover {
  background: #1d4ed8;
}
@keyframes _ngcontent-%COMP%_slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
input[type=datetime-local][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
input[type=datetime-local][_ngcontent-%COMP%]:hover::-webkit-calendar-picker-indicator {
  opacity: 1;
}
input[type=checkbox][_ngcontent-%COMP%] {
  display: none;
}
.checkmark[_ngcontent-%COMP%] {
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #d1d5db;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.checkmark[_ngcontent-%COMP%]::after {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  background-color: white;
  border-radius: 50px;
  transform: scale(0);
  transition: transform 0.2s;
}
input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {
  background-color: #3b82f6;
  border-color: #3b82f6;
}
input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]::after {
  transform: scale(1);
}
/*# sourceMappingURL=plan-dialog.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlanDialogComponent, [{
    type: Component,
    args: [{ selector: "app-plan-dialog", standalone: true, imports: [CommonModule, FormsModule], template: `<div *ngIf="isOpen" class="fixed inset-0 z-50 modal-overlay" (click)="onBackdrop($event)">\r
  <div class="absolute inset-0 bg-black/30"></div>\r
  <div class="absolute inset-0 flex items-start justify-center overflow-auto py-8 px-4">\r
    <div class="modal bg-white rounded-2xl shadow-xl w-full max-w-5xl" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h2 class="text-xl  font-semibold">{{ editMode ? 'Edit Maintenance Plan' : 'Create Maintenance Plan' }}</h2>\r
        <p\r
          class="text-sm text-gray-500">{{ editMode ? 'Update your existing maintenance plan' : 'Create a new preventive maintenance plan with tasks and scheduling' }}</p>\r
\r
        <div class="mt-3 grid grid-cols-4 w-full gap-2 bg-white p-3 rounded-lg">\r
          <button *ngFor="let s of steps; index as i" class="tab-btn p-2 rounded-lg" [class.bg-blue-600]="i === step()"\r
                  [class.text-white]="i===step()" [class.disabled]="i>step()" (click)="onTabClick(i)">{{ s }}\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="p-6 space-y-4 modal-body">\r
        <!-- Loading State for Edit Mode -->\r
        <div *ngIf="editMode && loading" class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">\r
          <div class="flex items-center">\r
            <svg class="animate-spin w-5 h-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor"\r
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
            <span class="text-blue-800 font-medium">Loading plan data...</span>\r
          </div>\r
        </div>\r
\r
        <!-- General Error Display -->\r
        <div *ngIf="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">\r
          <div class="flex items-center">\r
            <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
            <span class="text-red-800 font-medium">{{ error }}</span>\r
          </div>\r
        </div>\r
\r
        <ng-container [ngSwitch]="step()">\r
          <ng-container *ngSwitchCase="0">\r
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
              <div class="form-row full-width">\r
                <div class="form-group" [class.error]="hasFieldError('name')">\r
                  <label>Name <span class="required">*</span></label>\r
                  <input\r
                    type="text"\r
                    [(ngModel)]="model.name"\r
                    placeholder="Plan name"\r
                    [class.error-input]="hasFieldError('name')"\r
                    [disabled]="editMode && loading"\r
                    (input)="clearFieldError('name')"/>\r
                  <div class="field-error" *ngIf="hasFieldError('name')">\r
                    {{ getFieldError('name') }}\r
                  </div>\r
                  <div class="field-hint text-xs text-gray-500 mt-1">\r
                    Plan names must be unique within your company.\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="form-row full-width">\r
                <div class="form-group">\r
                  <label>Priority</label>\r
                  <div class="relative priority-dropdown" (click)="$event.stopPropagation()">\r
                    <button type="button" (click)="togglePriorityDropdown()" class="dropdown-button"\r
                            [class.active]="showPriorityDropdown" [disabled]="editMode && loading">\r
                      <div class="dropdown-content">\r
                        <span *ngIf="!selectedPriorityMeta" class="placeholder">Select priority</span>\r
                        <div *ngIf="selectedPriorityMeta" class="selected-item">\r
                          <div class="item-icon">\r
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
                            </svg>\r
                          </div>\r
                          <span\r
                            class="selected-text">{{ selectedPriorityMeta?.name || selectedPriorityMeta?.slug }}</span>\r
                        </div>\r
                        <svg class="dropdown-arrow" [class.rotated]="showPriorityDropdown" fill="none"\r
                             stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M19 9l-7 7-7-7"></path>\r
                        </svg>\r
                      </div>\r
                    </button>\r
                    <div *ngIf="showPriorityDropdown" class="dropdown-menu">\r
                      <div class="dropdown-header">Select priority</div>\r
                      <button *ngFor="let priority of priorityOptions" type="button" (click)="selectPriority(priority)"\r
                              class="dropdown-item" [class.selected]="selectedPriorityMeta?.id === priority.id">\r
                        <div class="item-content">\r
                          <div class="item-icon">\r
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
                            </svg>\r
                          </div>\r
                          <div class="item-details">\r
                            <div class="item-name">{{ priority.name || priority.slug }}</div>\r
                            <div class="item-description !text-xs">{{ getPriorityDescription(priority) }}</div>\r
                          </div>\r
                        </div>\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="form-row full-width">\r
                <div class="form-group">\r
                  <label>Plan Type</label>\r
                  <div class="relative plan-type-dropdown" (click)="$event.stopPropagation()">\r
                    <button type="button" (click)="togglePlanTypeDropdown()" class="dropdown-button"\r
                            [class.active]="showPlanTypeDropdown" [disabled]="editMode && loading">\r
                      <div class="dropdown-content">\r
                        <span *ngIf="!model.plan_type" class="placeholder">Select plan type</span>\r
                        <div *ngIf="model.plan_type" class="selected-item">\r
                          <div class="item-icon">\r
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                            </svg>\r
                          </div>\r
                          <span class="selected-text">{{ getPlanTypeName(model.plan_type) }}</span>\r
                        </div>\r
                        <svg class="dropdown-arrow" [class.rotated]="showPlanTypeDropdown" fill="none"\r
                             stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M19 9l-7 7-7-7"></path>\r
                        </svg>\r
                      </div>\r
                    </button>\r
                    <div *ngIf="showPlanTypeDropdown" class="dropdown-menu">\r
                      <div class="dropdown-header">Select plan type</div>\r
                      <button *ngFor="let opt of planTypeOptions" type="button" (click)="selectPlanType(opt.value)"\r
                              class="dropdown-item" [class.selected]="model.plan_type === opt.value">\r
                        <div class="item-content">\r
                          <div class="item-icon">\r
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                            </svg>\r
                          </div>\r
                          <div class="item-details">\r
                            <div class="item-name">{{ opt.name }}</div>\r
                          </div>\r
                        </div>\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="form-row full-width">\r
                <div class="form-group">\r
                  <label>Estimated Duration (hours)</label>\r
                  <input\r
                    type="number"\r
                    [(ngModel)]="model.estimeted_duration"\r
                    placeholder="0"\r
                    min="0"\r
                    [disabled]="editMode && loading"/>\r
                </div>\r
              </div>\r
\r
              <div class="form-row full-width md:col-span-2">\r
                <div class="form-group">\r
                  <label>Descriptions</label>\r
                  <textarea\r
                    [(ngModel)]="model.descriptions"\r
                    placeholder="Enter work order description"\r
                    [disabled]="editMode && loading"></textarea>\r
                </div>\r
              </div>\r
\r
              <div class="form-row full-width md:col-span-2">\r
                <div class="form-group">\r
                  <label>Instructions</label>\r
                  <textarea\r
                    [(ngModel)]="model.instractions"\r
                    placeholder="Enter instructions"\r
                    [disabled]="editMode && loading"></textarea>\r
                </div>\r
              </div>\r
\r
              <div class="form-row full-width md:col-span-2">\r
                <div class="form-group">\r
                  <label>Safety Notes</label>\r
                  <textarea\r
                    [(ngModel)]="model.safety_notes"\r
                    placeholder="Enter safety notes"\r
                    [disabled]="editMode && loading"></textarea>\r
                </div>\r
              </div>\r
            </div>\r
          </ng-container>\r
\r
          <ng-container *ngSwitchCase="1">\r
            <div class="assets-section light">\r
              <h3 class="section-title">Assign Assets</h3>\r
              <p class="section-subtitle">Select which assets this maintenance plan should apply to. You can always\r
                modify this later.</p>\r
\r
              <div class="filters-row">\r
                <div class="search-box">\r
                  <input type="text" [ngModel]="searchAssets()" (ngModelChange)="onAssetsSearchChange($event)"\r
                         placeholder="Search assets..."/>\r
                </div>\r
\r
                <div class="relative category-dropdown" (click)="$event.stopPropagation()">\r
                  <button type="button" (click)="toggleAssetCategoryDropdown()" class="dropdown-button"\r
                          [class.active]="showAssetCategoryDropdown">\r
                    <div class="dropdown-content">\r
                      <span *ngIf="!selectedAssetCategory" class="placeholder">All Categories</span>\r
                      <div *ngIf="selectedAssetCategory" class="selected-item">\r
                        <div class="item-icon">\r
                          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>\r
                          </svg>\r
                        </div>\r
                        <span class="selected-text">{{ selectedAssetCategory?.name }}</span>\r
                      </div>\r
                      <svg class="dropdown-arrow" [class.rotated]="showAssetCategoryDropdown" fill="none"\r
                           stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                      </svg>\r
                    </div>\r
                  </button>\r
                  <div *ngIf="showAssetCategoryDropdown" class="dropdown-menu">\r
                    <div class="dropdown-header">All Categories</div>\r
                    <button type="button" class="dropdown-item" (click)="selectAssetCategoryFilter(null)">\r
                      <div class="item-content">\r
                        <div class="item-details">\r
                          <div class="item-name">All</div>\r
                        </div>\r
                      </div>\r
                    </button>\r
                    <button *ngFor="let c of assetCategoryOptions" type="button" (click)="selectAssetCategoryFilter(c)"\r
                            class="dropdown-item" [class.selected]="selectedAssetCategory?.id===c.id">\r
                      <div class="item-content">\r
                        <div class="item-details">\r
                          <div class="item-name">{{ c.name }}</div>\r
                        </div>\r
                      </div>\r
                    </button>\r
                  </div>\r
                </div>\r
\r
                <div class="relative status-dropdown" (click)="$event.stopPropagation()">\r
                  <button type="button" (click)="toggleAssetStatusDropdown()" class="dropdown-button"\r
                          [class.active]="showAssetStatusDropdown">\r
                    <div class="dropdown-content">\r
                      <span *ngIf="!selectedAssetStatus" class="placeholder">All Status</span>\r
                      <div *ngIf="selectedAssetStatus" class="selected-item">\r
                        <div class="item-icon">\r
                          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                          </svg>\r
                        </div>\r
                        <span class="selected-text">{{ selectedAssetStatus?.name }}</span>\r
                      </div>\r
                      <svg class="dropdown-arrow" [class.rotated]="showAssetStatusDropdown" fill="none"\r
                           stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                      </svg>\r
                    </div>\r
                  </button>\r
                  <div *ngIf="showAssetStatusDropdown" class="dropdown-menu">\r
                    <div class="dropdown-header">All Status</div>\r
                    <button type="button" class="dropdown-item" (click)="selectAssetStatusFilter(null)">\r
                      <div class="item-content">\r
                        <div class="item-details">\r
                          <div class="item-name">All</div>\r
                        </div>\r
                      </div>\r
                    </button>\r
                    <button *ngFor="let s of assetStatusOptions" type="button" (click)="selectAssetStatusFilter(s)"\r
                            class="dropdown-item" [class.selected]="selectedAssetStatus?.id===s.id">\r
                      <div class="item-content">\r
                        <div class="item-details">\r
                          <div class="item-name">{{ s.name }}</div>\r
                        </div>\r
                      </div>\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="bulk-actions">\r
                <button class="btn btn-secondary" (click)="selectAllOnPage()" [disabled]="assetsLoading">Select All\r
                </button>\r
                <button class="btn btn-secondary" (click)="clearAllSelection()" [disabled]="assetsLoading">Clear All\r
                </button>\r
                <div class="count">{{ selectedAssetIds().size }} selected</div>\r
              </div>\r
\r
              <div class="assets-grid" [class.loading]="assetsLoading">\r
                <div class="asset-card flex-col" *ngFor="let a of assets()"\r
                     [class.!border-blue-200]="isAssetSelected(a.id)">\r
                  <div class="flex justify-between w-full">\r
                    <label class="asset-select">\r
                      <input type="checkbox" class="rounded-full" [checked]="isAssetSelected(a.id)"\r
                             (change)="toggleAssetSelection(a.id)"/>\r
                      <span class="checkmark"></span>\r
                    </label>\r
\r
                    <div class="border border-gray-200  px-2 py-1 rounded-full bg-gray-100 text-xs font-medium">\r
                      No Schedule\r
                    </div>\r
                  </div>\r
                  <div class="asset-body">\r
                    <div class="asset-name">{{ a.name || a.asset_name }}</div>\r
                    <div class="asset-meta">\r
                      <div class="meta-line flex gap-2 items-center w-full">\r
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                             stroke="currentColor" class="size-3">\r
                          <path stroke-linecap="round" stroke-linejoin="round"\r
                                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"/>\r
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z"/>\r
                        </svg>\r
\r
                        {{ a.asset_id || a.serial_number || a.id }}\r
                      </div>\r
\r
                      <div class="meta-line flex gap-2 items-center">\r
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                             stroke="currentColor" class="size-4">\r
                          <path stroke-linecap="round" stroke-linejoin="round"\r
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>\r
                          <path stroke-linecap="round" stroke-linejoin="round"\r
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>\r
                        </svg>\r
\r
                        {{ a.location?.name || a.department?.name || a.brand || 'N/A' }}\r
                      </div>\r
\r
                      <div class="meta-line flex gap-2 items-center">\r
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                             stroke="currentColor" class="size-4">\r
                          <path stroke-linecap="round" stroke-linejoin="round"\r
                                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"/>\r
                        </svg>\r
\r
\r
                        {{ a.manufacturer?.name || a.department?.manufacturer || 'N/A' }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="pagination-row">\r
                <button class="btn btn-secondary" (click)="prevAssetsPage()"\r
                        [disabled]="assetsPage()===1 || assetsLoading">Prev\r
                </button>\r
                <span class="page-indicator">Page {{ assetsPage() }} / {{ totalAssetPages() }}</span>\r
                <button class="btn btn-secondary" (click)="nextAssetsPage()"\r
                        [disabled]="assetsPage()===totalAssetPages() || assetsLoading">Next\r
                </button>\r
              </div>\r
            </div>\r
          </ng-container>\r
\r
          <ng-container *ngSwitchCase="2">\r
            <div class="checklist-section">\r
              <h3 class="section-title">Checklist Items ({{ items().length }})</h3>\r
\r
              <div class="add-item-card">\r
                <div class="header-row">\r
                  <div class="title">Add New Item</div>\r
                  <div class="count">{{ items().length }}</div>\r
                </div>\r
\r
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">\r
                  <div class="form-group"><label>Title</label>\r
                    <input type="text" [(ngModel)]="newChecklistItem.title" placeholder="Item title"/>\r
                  </div>\r
                  <div class="form-group"><label>Type</label>\r
                    <div class="relative item-type-dropdown" (click)="$event.stopPropagation()">\r
                      <button type="button" (click)="toggleNewItemTypeDropdown()" class="dropdown-button"\r
                              [class.active]="showNewItemTypeDropdown">\r
                        <div class="dropdown-content">\r
                          <span *ngIf="!newChecklistItem.type" class="placeholder">Select type</span>\r
                          <div *ngIf="newChecklistItem.type" class="selected-item">\r
                            <div class="item-icon">\r
                              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                              </svg>\r
                            </div>\r
                            <span class="selected-text">{{ newChecklistItem.type }}</span>\r
                          </div>\r
                          <svg class="dropdown-arrow" [class.rotated]="showNewItemTypeDropdown" fill="none"\r
                               stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M19 9l-7 7-7-7"></path>\r
                          </svg>\r
                        </div>\r
                      </button>\r
                      <div *ngIf="showNewItemTypeDropdown" class="dropdown-menu">\r
                        <div class="dropdown-header">Select type</div>\r
                        <button *ngFor="let t of itemTypeOptions" type="button" (click)="selectNewItemType(t)"\r
                                class="dropdown-item" [class.selected]="newChecklistItem.type===t">\r
                          <div class="item-content">\r
                            <div class="item-details">\r
                              <div class="item-name">{{ t }}</div>\r
                            </div>\r
                          </div>\r
                        </button>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="form-group"><label>Description</label>\r
                  <textarea [(ngModel)]="newChecklistItem.description"\r
                            placeholder="Detailed instructions for this item"></textarea>\r
                </div>\r
\r
                <div class="toggles-row">\r
                  <label class="toggle"><input type="checkbox" [(ngModel)]="newChecklistItem.is_required"/>\r
                    <span class="checkmark"></span>\r
                    Required</label>\r
                  <label class="toggle"><input type="checkbox" [(ngModel)]="newChecklistItem.is_safety_critical"/>\r
                    <span class="checkmark"></span>\r
                    Safety Critical</label>\r
                  <label class="toggle"><input type="checkbox" [(ngModel)]="newChecklistItem.is_photo_required"/>\r
                    <span class="checkmark"></span>\r
                    Photo Required</label>\r
                </div>\r
\r
                <div class="actions-row">\r
                  <button class="btn btn-primary" (click)="addItemFromForm()">+ Add Item</button>\r
                </div>\r
              </div>\r
\r
              <div class="list" *ngIf="items().length > 0">\r
                <div *ngFor="let it of items(); index as i" class="list-item">\r
                  <div class="item-title">{{ it.title }}</div>\r
                  <div class="item-meta">{{ it.type }} \u2022 {{ it.is_required ? 'Required' : 'Optional' }}</div>\r
                  <button class="remove" (click)="removeItem(i)">Remove</button>\r
                </div>\r
              </div>\r
            </div>\r
          </ng-container>\r
\r
          <ng-container *ngSwitchCase="3">\r
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">\r
              <div class="form-row full-width">\r
                <div class="form-group">\r
                  <label>Frequency Type</label>\r
                  <div class="relative freq-type-dropdown" (click)="$event.stopPropagation()">\r
                    <button type="button" (click)="toggleFrequencyTypeDropdown()" class="dropdown-button"\r
                            [class.active]="showFrequencyTypeDropdown">\r
                      <div class="dropdown-content">\r
                        <span *ngIf="!model.frequency_type" class="placeholder">Select frequency type</span>\r
                        <div *ngIf="model.frequency_type" class="selected-item">\r
                          <div class="item-icon">\r
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                            </svg>\r
                          </div>\r
                          <span class="selected-text">{{ getFrequencyTypeLabel(model.frequency_type) }}</span>\r
                        </div>\r
                        <svg class="dropdown-arrow" [class.rotated]="showFrequencyTypeDropdown" fill="none"\r
                             stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M19 9l-7 7-7-7"></path>\r
                        </svg>\r
                      </div>\r
                    </button>\r
                    <div *ngIf="showFrequencyTypeDropdown" class="dropdown-menu">\r
                      <div class="dropdown-header">Select frequency type</div>\r
                      <button *ngFor="let opt of frequencyTypeOptions" type="button"\r
                              (click)="selectFrequencyType(opt.value)" class="dropdown-item"\r
                              [class.selected]="model.frequency_type === opt.value">\r
                        <div class="item-content">\r
                          <div class="item-icon">\r
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                            </svg>\r
                          </div>\r
                          <div class="item-details">\r
                            <div class="item-name">{{ opt.name }}</div>\r
                          </div>\r
                        </div>\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="form-row full-width">\r
                <div class="form-group" [class.error]="hasFieldError('frequency_value')">\r
                  <label>Frequency Value</label>\r
                  <input type="number" [(ngModel)]="model.frequency_value" [disabled]="model.frequency_type!=='time'"\r
                         min="1" placeholder="Value" [class.error-input]="hasFieldError('frequency_value')"/>\r
                  <div class="field-error" *ngIf="hasFieldError('frequency_value')">\r
                    {{ getFieldError('frequency_value') }}\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="form-row full-width">\r
                <div class="form-group" [class.error]="hasFieldError('frequency_unit')">\r
                  <label>Frequency Unit</label>\r
                  <div class="relative freq-unit-dropdown" (click)="$event.stopPropagation()">\r
                    <button type="button" (click)="toggleFrequencyUnitDropdown()" class="dropdown-button"\r
                            [class.active]="showFrequencyUnitDropdown" [disabled]="model.frequency_type!=='time'">\r
                      <div class="dropdown-content">\r
                        <span *ngIf="!model.frequency_unit" class="placeholder">Select unit</span>\r
                        <div *ngIf="model.frequency_unit" class="selected-item">\r
                          <div class="item-icon">\r
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                            </svg>\r
                          </div>\r
                          <span class="selected-text">{{ model.frequency_unit }}</span>\r
                        </div>\r
                        <svg class="dropdown-arrow" [class.rotated]="showFrequencyUnitDropdown" fill="none"\r
                             stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M19 9l-7 7-7-7"></path>\r
                        </svg>\r
                      </div>\r
                    </button>\r
                    <div *ngIf="showFrequencyUnitDropdown && model.frequency_type==='time'" class="dropdown-menu">\r
                      <div class="dropdown-header">Select unit</div>\r
                      <button *ngFor="let u of frequencyUnitOptions" type="button" (click)="selectFrequencyUnit(u)"\r
                              class="dropdown-item" [class.selected]="model.frequency_unit===u">\r
                        <div class="item-content">\r
                          <div class="item-icon">\r
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                            </svg>\r
                          </div>\r
                          <div class="item-details">\r
                            <div class="item-name">{{ u }}</div>\r
                          </div>\r
                        </div>\r
                      </button>\r
                    </div>\r
                  </div>\r
                  <div class="field-error" *ngIf="hasFieldError('frequency_unit')">\r
                    {{ getFieldError('frequency_unit') }}\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </ng-container>\r
        </ng-container>\r
      </div>\r
\r
      <div class="modal-footer p-6 border-t flex justify-between items-center">\r
        <div class="text-sm text-red-600" *ngIf="error">{{ error }}</div>\r
        <div class="flex gap-2">\r
          <button *ngIf="step() > 0" type="button" class="btn btn-secondary w-[150px]" (click)="prev()"\r
                  [disabled]="loading">Back\r
          </button>\r
          <button class="btn btn-secondary w-[150px]" (click)="close()" [disabled]="loading">Cancel</button>\r
        </div>\r
        <div class="flex gap-2">\r
          <button *ngIf="step() < 3" class="btn btn-primary w-[150px]" (click)="next()"\r
                  [disabled]="!canGoNext() || loading">Next\r
          </button>\r
          <button *ngIf="step() === 3" class="btn btn-primary w-[150px]" (click)="submit()"\r
                  [disabled]="!canSubmit() || loading">{{ editMode ? 'Update Plan' : 'Create Plan' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: [`@charset "UTF-8";

/* src/app/maintenance/components/plan-dialog/plan-dialog.scss */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}
.modal-overlay .modal {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  min-height: 60vh;
  max-height: 90vh;
  animation: slideIn 0.3s ease-out;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
}
.modal-overlay .modal::-webkit-scrollbar {
  width: 0;
  display: none;
}
.modal-overlay .modal .modal-header {
  padding: 1.5rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}
.modal-overlay .modal .modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}
.modal-overlay .modal .modal-header .tab-btn {
  font-weight: 500;
  transition: all 0.2s ease;
}
.modal-overlay .modal .modal-header .tab-btn:hover {
  background-color: #e6e6e6;
}
.modal-overlay .modal .modal-header .tab-btn.bg-blue-600:hover {
  background-color: #1d4ed8;
}
.modal-overlay .modal .modal-header .tab-btn.disabled {
  pointer-events: none;
  opacity: 0.5;
}
.modal-overlay .modal .modal-body {
  padding: 1.5rem;
  flex: 1 1 auto;
  overflow: auto;
}
.modal-overlay .modal .modal-body .form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}
.modal-overlay .modal .modal-body .form-group label .required {
  color: #dc2626;
}
.modal-overlay .modal .modal-body .form-group input,
.modal-overlay .modal .modal-body .form-group select,
.modal-overlay .modal .modal-body .form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  min-height: 44px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
}
.modal-overlay .modal .modal-body .form-group input:focus,
.modal-overlay .modal .modal-body .form-group select:focus,
.modal-overlay .modal .modal-body .form-group textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
.modal-overlay .modal .modal-body .form-group input::placeholder,
.modal-overlay .modal .modal-body .form-group select::placeholder,
.modal-overlay .modal .modal-body .form-group textarea::placeholder {
  color: #9ca3af;
}
.modal-overlay .modal .modal-body .form-group input.error-input,
.modal-overlay .modal .modal-body .form-group select.error-input,
.modal-overlay .modal .modal-body .form-group textarea.error-input {
  border-color: #dc2626;
}
.modal-overlay .modal .modal-body .form-group input.error-input:focus,
.modal-overlay .modal .modal-body .form-group select.error-input:focus,
.modal-overlay .modal .modal-body .form-group textarea.error-input:focus {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
.modal-overlay .modal .modal-body .form-group select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
}
.modal-overlay .modal .modal-body .form-group select:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  background-color: #f9fafb;
}
.modal-overlay .modal .modal-body .form-group select option {
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  background: white;
}
.modal-overlay .modal .modal-body .form-group select option:hover {
  background-color: #f3f4f6;
}
.modal-overlay .modal .modal-body .form-group textarea {
  resize: vertical;
  min-height: 80px;
}
.modal-overlay .modal .modal-body .form-group.error label {
  color: #dc2626;
}
.modal-overlay .modal .modal-body .form-group .field-error {
  color: #dc2626;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.modal-overlay .modal .modal-body .form-group .field-error::before {
  content: "\\26a0";
  font-size: 0.875rem;
}
.modal-overlay .modal .modal-body .form-group .field-help {
  margin-top: 0.25rem;
}
.modal-overlay .modal .modal-body .form-group .field-help small {
  color: #6b7280;
  font-size: 0.75rem;
  font-style: italic;
}
.modal-overlay .modal .modal-body .assets-section.light .section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}
.modal-overlay .modal .modal-body .assets-section.light .section-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
}
.modal-overlay .modal .modal-body .assets-section.light .filters-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  align-items: center;
}
.modal-overlay .modal .modal-body .assets-section.light .filters-row .search-box {
  flex: 1;
}
.modal-overlay .modal .modal-body .assets-section.light .filters-row input {
  width: 100%;
  padding: 0.6rem 0.9rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
}
.modal-overlay .modal .modal-body .assets-section.light .filters-row .select-box select {
  padding: 0.6rem 0.9rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background: #fff;
}
.modal-overlay .modal .modal-body .assets-section.light .filters-row .relative {
  width: 220px;
}
.modal-overlay .modal .modal-body .assets-section.light .bulk-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.modal-overlay .modal .modal-body .assets-section.light .bulk-actions .count {
  margin-left: auto;
  font-size: 0.875rem;
  color: #6b7280;
}
.modal-overlay .modal .modal-body .assets-section.light .assets-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.75rem;
}
@media (min-width: 768px) {
  .modal-overlay .modal .modal-body .assets-section.light .assets-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1024px) {
  .modal-overlay .modal .modal-body .assets-section.light .assets-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.modal-overlay .modal .modal-body .assets-section.light .asset-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.75rem;
  background: #fff;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}
.modal-overlay .modal .modal-body .assets-section.light .asset-select {
  display: flex;
  align-items: center;
}
.modal-overlay .modal .modal-body .assets-section.light .asset-select input {
  width: 1rem;
  height: 1rem;
}
.modal-overlay .modal .modal-body .assets-section.light .asset-body {
  flex: 1;
}
.modal-overlay .modal .modal-body .assets-section.light .asset-name {
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}
.modal-overlay .modal .modal-body .assets-section.light .asset-meta {
  font-size: 0.75rem;
  color: #6b7280;
}
.modal-overlay .modal .modal-body .assets-section.light .asset-status {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #374151;
  background: #f3f4f6;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
}
.modal-overlay .modal .modal-body .assets-section.light .pagination-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
}
.modal-overlay .modal .modal-body .assets-section.light .page-indicator {
  font-size: 0.875rem;
  color: #374151;
}
.modal-overlay .modal .modal-body .freq-type-dropdown,
.modal-overlay .modal .modal-body .freq-unit-dropdown {
  width: 100%;
}
.modal-overlay .modal .modal-body .checklist-section .section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}
.modal-overlay .modal .modal-body .checklist-section .add-item-card {
  border: 1px dashed #d1d5db;
  border-radius: 0.75rem;
  padding: 1rem;
  background: #fff;
  margin-bottom: 1rem;
}
.modal-overlay .modal .modal-body .checklist-section .add-item-card .header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.modal-overlay .modal .modal-body .checklist-section .add-item-card .title {
  font-weight: 600;
  color: #111827;
}
.modal-overlay .modal .modal-body .checklist-section .add-item-card .count {
  font-size: 0.875rem;
  color: #6b7280;
}
.modal-overlay .modal .modal-body .checklist-section .toggles-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 0.5rem 0 1rem;
}
.modal-overlay .modal .modal-body .checklist-section .toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
}
.modal-overlay .modal .modal-body .checklist-section .actions-row {
  display: flex;
  justify-content: flex-end;
}
.modal-overlay .modal .modal-body .checklist-section .list .list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  background: #fff;
  margin-bottom: 0.5rem;
}
.modal-overlay .modal .modal-body .checklist-section .list .item-title {
  font-weight: 600;
  color: #111827;
}
.modal-overlay .modal .modal-body .checklist-section .list .item-meta {
  font-size: 0.875rem;
  color: #6b7280;
}
.modal-overlay .modal .modal-body .checklist-section .list .remove {
  color: #ef4444;
  background: none;
  border: none;
  cursor: pointer;
}
.modal-overlay .modal .modal-body .plan-type-dropdown,
.modal-overlay .modal .modal-body .priority-dropdown,
.modal-overlay .modal .modal-body .item-type-dropdown,
.modal-overlay .modal .modal-body .freq-type-dropdown,
.modal-overlay .modal .modal-body .freq-unit-dropdown,
.modal-overlay .modal .modal-body .category-dropdown,
.modal-overlay .modal .modal-body .status-dropdown {
  position: relative;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-button,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-button,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-button,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-button,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-button,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-button,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-button {
  width: 100%;
  padding: 0.45rem 1rem;
  text-align: left;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  min-height: 44px;
  background-color: white;
  transition: all 0.2s ease;
  cursor: pointer;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-button:focus,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-button:focus,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-button:focus,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-button:focus,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-button:focus,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-button:focus,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-button.error,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-button.error,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-button.error,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-button.error,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-button.error,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-button.error,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-button.error {
  border-color: #fca5a5;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-button.active,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-button.active,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-button.active,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-button.active,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-button.active,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-button.active,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-button.active {
  border-color: #3b82f6;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-content,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-content,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-content,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-content,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-content,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-content,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .placeholder,
.modal-overlay .modal .modal-body .priority-dropdown .placeholder,
.modal-overlay .modal .modal-body .item-type-dropdown .placeholder,
.modal-overlay .modal .modal-body .freq-type-dropdown .placeholder,
.modal-overlay .modal .modal-body .freq-unit-dropdown .placeholder,
.modal-overlay .modal .modal-body .category-dropdown .placeholder,
.modal-overlay .modal .modal-body .status-dropdown .placeholder {
  color: #9ca3af;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .selected-item,
.modal-overlay .modal .modal-body .priority-dropdown .selected-item,
.modal-overlay .modal .modal-body .item-type-dropdown .selected-item,
.modal-overlay .modal .modal-body .freq-type-dropdown .selected-item,
.modal-overlay .modal .modal-body .freq-unit-dropdown .selected-item,
.modal-overlay .modal .modal-body .category-dropdown .selected-item,
.modal-overlay .modal .modal-body .status-dropdown .selected-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .icon,
.modal-overlay .modal .modal-body .priority-dropdown .icon,
.modal-overlay .modal .modal-body .item-type-dropdown .icon,
.modal-overlay .modal .modal-body .freq-type-dropdown .icon,
.modal-overlay .modal .modal-body .freq-unit-dropdown .icon,
.modal-overlay .modal .modal-body .category-dropdown .icon,
.modal-overlay .modal .modal-body .status-dropdown .icon {
  width: 1rem;
  height: 1rem;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .selected-text,
.modal-overlay .modal .modal-body .priority-dropdown .selected-text,
.modal-overlay .modal .modal-body .item-type-dropdown .selected-text,
.modal-overlay .modal .modal-body .freq-type-dropdown .selected-text,
.modal-overlay .modal .modal-body .freq-unit-dropdown .selected-text,
.modal-overlay .modal .modal-body .category-dropdown .selected-text,
.modal-overlay .modal .modal-body .status-dropdown .selected-text {
  color: #111827;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-arrow,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-arrow,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-arrow,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-arrow,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-arrow,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-arrow,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-arrow {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  transition: transform 0.2s ease;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-arrow.rotated,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-arrow.rotated,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-arrow.rotated,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-arrow.rotated,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-arrow.rotated,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-arrow.rotated,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-arrow.rotated {
  transform: rotate(180deg);
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-menu,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-menu,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-menu,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-menu,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-menu,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-menu,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-menu {
  position: absolute;
  z-index: 50;
  width: 100%;
  margin-top: 0.25rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 15rem;
  overflow: auto;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-header,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-header,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-header,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-header,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-header,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-header,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-header {
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #f9fafb;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-item,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-item,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-item,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-item,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-item,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-item,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-item {
  width: 100%;
  padding: 0.75rem;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-item:hover,
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-item:focus,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-item:hover,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-item:focus,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-item:hover,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-item:focus,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-item:hover,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-item:focus,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-item:hover,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-item:focus,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-item:hover,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-item:focus,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-item:hover,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-item:focus {
  background: #eff6ff;
  outline: none;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .dropdown-item.selected,
.modal-overlay .modal .modal-body .priority-dropdown .dropdown-item.selected,
.modal-overlay .modal .modal-body .item-type-dropdown .dropdown-item.selected,
.modal-overlay .modal .modal-body .freq-type-dropdown .dropdown-item.selected,
.modal-overlay .modal .modal-body .freq-unit-dropdown .dropdown-item.selected,
.modal-overlay .modal .modal-body .category-dropdown .dropdown-item.selected,
.modal-overlay .modal .modal-body .status-dropdown .dropdown-item.selected {
  background: #eff6ff;
  color: #1d4ed8;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .item-content,
.modal-overlay .modal .modal-body .priority-dropdown .item-content,
.modal-overlay .modal .modal-body .item-type-dropdown .item-content,
.modal-overlay .modal .modal-body .freq-type-dropdown .item-content,
.modal-overlay .modal .modal-body .freq-unit-dropdown .item-content,
.modal-overlay .modal .modal-body .category-dropdown .item-content,
.modal-overlay .modal .modal-body .status-dropdown .item-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .item-icon,
.modal-overlay .modal .modal-body .priority-dropdown .item-icon,
.modal-overlay .modal .modal-body .item-type-dropdown .item-icon,
.modal-overlay .modal .modal-body .freq-type-dropdown .item-icon,
.modal-overlay .modal .modal-body .freq-unit-dropdown .item-icon,
.modal-overlay .modal .modal-body .category-dropdown .item-icon,
.modal-overlay .modal .modal-body .status-dropdown .item-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eff6ff;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .item-details,
.modal-overlay .modal .modal-body .priority-dropdown .item-details,
.modal-overlay .modal .modal-body .item-type-dropdown .item-details,
.modal-overlay .modal .modal-body .freq-type-dropdown .item-details,
.modal-overlay .modal .modal-body .freq-unit-dropdown .item-details,
.modal-overlay .modal .modal-body .category-dropdown .item-details,
.modal-overlay .modal .modal-body .status-dropdown .item-details {
  flex: 1;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .item-name,
.modal-overlay .modal .modal-body .priority-dropdown .item-name,
.modal-overlay .modal .modal-body .item-type-dropdown .item-name,
.modal-overlay .modal .modal-body .freq-type-dropdown .item-name,
.modal-overlay .modal .modal-body .freq-unit-dropdown .item-name,
.modal-overlay .modal .modal-body .category-dropdown .item-name,
.modal-overlay .modal .modal-body .status-dropdown .item-name {
  font-weight: 500;
  color: #111827;
}
.modal-overlay .modal .modal-body .plan-type-dropdown .item-description,
.modal-overlay .modal .modal-body .priority-dropdown .item-description,
.modal-overlay .modal .modal-body .item-type-dropdown .item-description,
.modal-overlay .modal .modal-body .freq-type-dropdown .item-description,
.modal-overlay .modal .modal-body .freq-unit-dropdown .item-description,
.modal-overlay .modal .modal-body .category-dropdown .item-description,
.modal-overlay .modal .modal-body .status-dropdown .item-description {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.125rem;
}
.modal-overlay .modal .modal-footer {
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: auto;
}
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}
.btn.btn-secondary {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.btn.btn-secondary:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}
.btn.btn-primary {
  background: #2563eb;
  color: white;
}
.btn.btn-primary:hover {
  background: #1d4ed8;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
input[type=datetime-local]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
input[type=datetime-local]:hover::-webkit-calendar-picker-indicator {
  opacity: 1;
}
input[type=checkbox] {
  display: none;
}
.checkmark {
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #d1d5db;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.checkmark::after {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  background-color: white;
  border-radius: 50px;
  transform: scale(0);
  transition: transform 0.2s;
}
input[type=checkbox]:checked + .checkmark {
  background-color: #3b82f6;
  border-color: #3b82f6;
}
input[type=checkbox]:checked + .checkmark::after {
  transform: scale(1);
}
/*# sourceMappingURL=plan-dialog.css.map */
`] }]
  }], () => [{ type: MaintenanceService }, { type: MetaWorkOrdersService }, { type: AssetService }], { isOpen: [{
    type: Input
  }], editMode: [{
    type: Input
  }], planToEdit: [{
    type: Input
  }], closed: [{
    type: Output
  }], created: [{
    type: Output
  }], updated: [{
    type: Output
  }], closeAllDropdowns: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanDialogComponent, { className: "PlanDialogComponent", filePath: "src/app/maintenance/components/plan-dialog/plan-dialog.component.ts", lineNumber: 17 });
})();

export {
  PlanDialogComponent
};
//# sourceMappingURL=chunk-QSJUAGEP.js.map
