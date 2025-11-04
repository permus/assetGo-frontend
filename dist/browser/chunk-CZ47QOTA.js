import {
  MaintenanceDeleteConfirmationModalComponent
} from "./chunk-P4PMKA2U.js";
import {
  MaintenanceService
} from "./chunk-NKW5FA2N.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-UMLTJTEE.js";
import {
  MetaWorkOrdersService
} from "./chunk-5LL6FNGY.js";
import {
  AssetService
} from "./chunk-XSZSUCV7.js";
import "./chunk-6M5LH3XM.js";
import "./chunk-LZKWF3AL.js";
import "./chunk-BGMQUXYP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-ISERUI2H.js";
import "./chunk-OR4RIGW3.js";
import {
  Router,
  RouterLink
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
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
  forkJoin,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵpropertyInterpolate1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/maintenance/components/schedule-dialog/schedule-dialog.component.ts
function ScheduleDialogComponent_div_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Edit ");
  }
}
function ScheduleDialogComponent_div_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create ");
  }
}
function ScheduleDialogComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ScheduleDialogComponent_div_0_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Select plan");
    \u0275\u0275elementEnd();
  }
}
function ScheduleDialogComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedPlan == null ? null : ctx_r1.selectedPlan.name);
  }
}
function ScheduleDialogComponent_div_0_div_26_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_div_26_button_3_Template_button_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectPlan(p_r4));
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "div", 48)(3, "div", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r1.selectedPlan == null ? null : ctx_r1.selectedPlan.id) === p_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r4.name);
  }
}
function ScheduleDialogComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2, "Select plan");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ScheduleDialogComponent_div_0_div_26_button_3_Template, 5, 3, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.plansOptions);
  }
}
function ScheduleDialogComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.getFieldError("maintenance_plan_id"), " ");
  }
}
function ScheduleDialogComponent_div_0_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Select priority (optional)");
    \u0275\u0275elementEnd();
  }
}
function ScheduleDialogComponent_div_0_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.selectedPriorityMeta == null ? null : ctx_r1.selectedPriorityMeta.name) || (ctx_r1.selectedPriorityMeta == null ? null : ctx_r1.selectedPriorityMeta.slug));
  }
}
function ScheduleDialogComponent_div_0_div_45_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_div_45_button_3_Template_button_click_0_listener() {
      const priority_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectPriority(priority_r6));
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "div", 48)(3, "div", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const priority_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r1.selectedPriorityMeta == null ? null : ctx_r1.selectedPriorityMeta.id) === priority_r6.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(priority_r6.name || priority_r6.slug);
  }
}
function ScheduleDialogComponent_div_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 44);
    \u0275\u0275text(2, "Select priority");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ScheduleDialogComponent_div_0_div_45_button_3_Template, 5, 3, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.priorityOptions);
  }
}
function ScheduleDialogComponent_div_0_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Select status");
    \u0275\u0275elementEnd();
  }
}
function ScheduleDialogComponent_div_0_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedStatus == null ? null : ctx_r1.selectedStatus.name);
  }
}
function ScheduleDialogComponent_div_0_div_56_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_div_56_button_3_Template_button_click_0_listener() {
      const option_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectOption(option_r8));
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "div", 48)(3, "div", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r1.selectedStatus == null ? null : ctx_r1.selectedStatus.id) === option_r8.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r8.name);
  }
}
function ScheduleDialogComponent_div_0_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 44);
    \u0275\u0275text(2, "Select status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ScheduleDialogComponent_div_0_div_56_button_3_Template, 5, 3, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.statusOptions);
  }
}
function ScheduleDialogComponent_div_0_ng_container_69_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Edit ");
  }
}
function ScheduleDialogComponent_div_0_ng_container_69_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create ");
  }
}
function ScheduleDialogComponent_div_0_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ScheduleDialogComponent_div_0_ng_container_69_Conditional_1_Template, 1, 0)(2, ScheduleDialogComponent_div_0_ng_container_69_Conditional_2_Template, 1, 0);
    \u0275\u0275text(3, " Schedule ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.scheduleToEdit == null ? null : ctx_r1.scheduleToEdit.id) ? 1 : 2);
  }
}
function ScheduleDialogComponent_div_0_ng_template_70_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Editing");
  }
}
function ScheduleDialogComponent_div_0_ng_template_70_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Creating");
  }
}
function ScheduleDialogComponent_div_0_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54);
    \u0275\u0275element(2, "circle", 55)(3, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ScheduleDialogComponent_div_0_ng_template_70_Conditional_4_Template, 1, 0)(5, ScheduleDialogComponent_div_0_ng_template_70_Conditional_5_Template, 1, 0);
    \u0275\u0275text(6, "... ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r1.scheduleToEdit == null ? null : ctx_r1.scheduleToEdit.id) ? 4 : 5);
  }
}
function ScheduleDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdrop($event));
    });
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 6)(5, "h2", 7);
    \u0275\u0275text(6, "Schedule Maintenance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 8);
    \u0275\u0275template(8, ScheduleDialogComponent_div_0_Conditional_8_Template, 1, 0)(9, ScheduleDialogComponent_div_0_Conditional_9_Template, 1, 0);
    \u0275\u0275text(10, " a scheduled maintenance item for a plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275template(12, ScheduleDialogComponent_div_0_div_12_Template, 2, 1, "div", 10);
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "label");
    \u0275\u0275text(16, "Maintenance Plan ");
    \u0275\u0275elementStart(17, "span", 13);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 14);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_div_click_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(20, "button", 15);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePlanDropdown());
    });
    \u0275\u0275elementStart(21, "div", 16);
    \u0275\u0275template(22, ScheduleDialogComponent_div_0_span_22_Template, 2, 0, "span", 17)(23, ScheduleDialogComponent_div_0_div_23_Template, 3, 1, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 19);
    \u0275\u0275element(25, "path", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, ScheduleDialogComponent_div_0_div_26_Template, 4, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ScheduleDialogComponent_div_0_div_27_Template, 2, 1, "div", 22);
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(28, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 12)(30, "label");
    \u0275\u0275text(31, "Start Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 24)(33, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ScheduleDialogComponent_div_0_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.startDatePart, $event) || (ctx_r1.startDatePart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ScheduleDialogComponent_div_0_Template_input_ngModelChange_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStartPartsChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ScheduleDialogComponent_div_0_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.startTimePart, $event) || (ctx_r1.startTimePart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ScheduleDialogComponent_div_0_Template_input_ngModelChange_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStartPartsChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 12)(36, "label");
    \u0275\u0275text(37, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 27);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_div_click_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(39, "button", 15);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePriorityDropdown());
    });
    \u0275\u0275elementStart(40, "div", 16);
    \u0275\u0275template(41, ScheduleDialogComponent_div_0_span_41_Template, 2, 0, "span", 17)(42, ScheduleDialogComponent_div_0_div_42_Template, 3, 1, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 19);
    \u0275\u0275element(44, "path", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, ScheduleDialogComponent_div_0_div_45_Template, 4, 1, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 12)(47, "label");
    \u0275\u0275text(48, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 29);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_div_click_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(50, "button", 30);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDropdown());
    });
    \u0275\u0275elementStart(51, "div", 16);
    \u0275\u0275template(52, ScheduleDialogComponent_div_0_span_52_Template, 2, 0, "span", 17)(53, ScheduleDialogComponent_div_0_div_53_Template, 3, 1, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 19);
    \u0275\u0275element(55, "path", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(56, ScheduleDialogComponent_div_0_div_56_Template, 4, 1, "div", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "div", 32)(58, "div", 12)(59, "label");
    \u0275\u0275text(60, "Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ng-select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ScheduleDialogComponent_div_0_Template_ng_select_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.asset_ids, $event) || (ctx_r1.model.asset_ids = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 34)(63, "small");
    \u0275\u0275text(64, "Leave empty to use plan assets");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(65, "div", 35)(66, "button", 36);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(67, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 37);
    \u0275\u0275listener("click", function ScheduleDialogComponent_div_0_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275template(69, ScheduleDialogComponent_div_0_ng_container_69_Template, 4, 1, "ng-container", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, ScheduleDialogComponent_div_0_ng_template_70_Template, 7, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const creatingTpl_r9 = \u0275\u0275reference(71);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional((ctx_r1.scheduleToEdit == null ? null : ctx_r1.scheduleToEdit.id) ? 8 : 9);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("maintenance_plan_id"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r1.hasFieldError("maintenance_plan_id"))("active", ctx_r1.showPlanDropdown);
    \u0275\u0275property("disabled", ctx_r1.plansOptions.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedPlan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPlan);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showPlanDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showPlanDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFieldError("maintenance_plan_id"));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.startDatePart);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.startTimePart);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.showPriorityDropdown);
    \u0275\u0275property("disabled", ctx_r1.priorityOptions.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedPriorityMeta);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPriorityMeta);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showPriorityDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showPriorityDropdown);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.showStatusDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedStatus);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showStatusDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showStatusDropdown);
    \u0275\u0275advance(5);
    \u0275\u0275property("items", ctx_r1.assetOptions)("multiple", true)("closeOnSelect", false)("searchable", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.asset_ids);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading)("ngIfElse", creatingTpl_r9);
  }
}
var ScheduleDialogComponent = class _ScheduleDialogComponent {
  api;
  meta;
  assetsApi;
  isOpen = false;
  editMode = false;
  scheduleToEdit = null;
  closed = new EventEmitter();
  created = new EventEmitter();
  updated = new EventEmitter();
  loading = false;
  error = null;
  fieldErrors = {};
  model = {
    maintenance_plan_id: 0,
    asset_ids: [],
    start_date: "",
    status: "scheduled",
    priority_id: null
  };
  // Dropdown per FRONTEND_RULES
  showStatusDropdown = false;
  statusOptions = [
    { id: "scheduled", name: "Scheduled" },
    { id: "in_progress", name: "In Progress" },
    { id: "completed", name: "Completed" }
  ];
  selectedStatus = { id: "scheduled", name: "Scheduled" };
  // Plan dropdown
  showPlanDropdown = false;
  plansOptions = [];
  selectedPlan = null;
  // Priority dropdown (reuse Meta service)
  showPriorityDropdown = false;
  priorityOptions = [];
  selectedPriorityMeta = null;
  // Asset select
  assetOptions = [];
  assetsLoading = false;
  // Start date-time parts
  startDatePart = "";
  startTimePart = "";
  constructor(api, meta, assetsApi) {
    this.api = api;
    this.meta = meta;
    this.assetsApi = assetsApi;
  }
  ngOnInit() {
    this.api.listPlans({ per_page: 50 }).subscribe({
      next: (res) => {
        const list = Array.isArray(res?.data?.plans) ? res.data.plans : [];
        this.plansOptions = list.map((p) => ({ id: p.id, name: p.name || `Plan #${p.id}` }));
      },
      error: () => {
        this.plansOptions = [];
      }
    });
    this.meta.clearPrioritiesCache();
    this.meta.getPriorities().subscribe({
      next: (pri) => {
        this.priorityOptions = pri || [];
      },
      error: () => {
        this.priorityOptions = [];
      }
    });
    this.assetsLoading = true;
    this.assetsApi.getAssets({ per_page: 100 }).subscribe({
      next: (res) => {
        const list = res?.data?.assets || res?.data?.data || res?.data || [];
        this.assetOptions = (Array.isArray(list) ? list : []).map((a) => ({ id: a.id, name: a.name || a.asset_name || `Asset #${a.id}` }));
        this.assetsLoading = false;
      },
      error: () => {
        this.assetsLoading = false;
        this.assetOptions = [];
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["isOpen"] && changes["isOpen"].currentValue === true) {
      if (!this.editMode) {
        this.reset();
      }
      if (this.editMode && this.scheduleToEdit?.id) {
        this.reset();
        setTimeout(() => this.loadForEdit(this.scheduleToEdit.id), 50);
      }
    }
    if (changes["editMode"] && changes["editMode"].currentValue === false && this.isOpen) {
      this.reset();
    }
  }
  closeOnOutsideClick() {
    this.showStatusDropdown = false;
    this.showPlanDropdown = false;
    this.showPriorityDropdown = false;
  }
  toggleDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
  }
  selectOption(opt) {
    this.selectedStatus = opt;
    this.model.status = opt.id;
    this.showStatusDropdown = false;
  }
  togglePlanDropdown() {
    this.showPlanDropdown = !this.showPlanDropdown;
  }
  selectPlan(opt) {
    this.selectedPlan = opt;
    this.model.maintenance_plan_id = opt.id;
    this.showPlanDropdown = false;
  }
  togglePriorityDropdown() {
    this.showPriorityDropdown = !this.showPriorityDropdown;
  }
  selectPriority(priority) {
    this.selectedPriorityMeta = priority;
    this.model.priority_id = priority.id;
    this.showPriorityDropdown = false;
  }
  onBackdrop(e) {
    this.close();
  }
  close() {
    this.closed.emit();
    this.reset();
  }
  hasFieldError(field) {
    return !!this.fieldErrors[field]?.length;
  }
  getFieldError(field) {
    return this.fieldErrors[field]?.[0] || "";
  }
  submit() {
    this.loading = true;
    this.error = null;
    this.fieldErrors = {};
    const payload = {
      maintenance_plan_id: this.model.maintenance_plan_id,
      asset_ids: this.model.asset_ids,
      start_date: this.combineStartParts(),
      status: this.model.status,
      priority_id: this.model.priority_id || null
    };
    const request$ = this.editMode && this.scheduleToEdit?.id ? this.api.updateSchedule(this.scheduleToEdit.id, payload) : this.api.createSchedule(payload);
    request$.subscribe({
      next: (res) => {
        this.loading = false;
        if (this.editMode)
          this.updated.emit(res);
        else
          this.created.emit(res);
        this.close();
      },
      error: (err) => {
        this.loading = false;
        if (err?.error?.errors && typeof err.error.errors === "object") {
          this.fieldErrors = err.error.errors;
          this.error = err?.error?.message || "Please fix the validation errors below.";
        } else {
          this.error = err?.error?.message || (this.editMode ? "Failed to update schedule" : "Failed to create schedule");
        }
      }
    });
  }
  normalizeToDateString(input) {
    if (!input)
      return null;
    if (input instanceof Date && !isNaN(input.getTime())) {
      const yyyy = input.getFullYear();
      const mm = String(input.getMonth() + 1).padStart(2, "0");
      const dd = String(input.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
    const s = String(input).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(s))
      return s;
    const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (m) {
      const [_, M, D, Y] = m;
      const mm = String(Number(M)).padStart(2, "0");
      const dd = String(Number(D)).padStart(2, "0");
      return `${Y}-${mm}-${dd}`;
    }
    const d = new Date(s);
    if (!isNaN(d.getTime()))
      return this.normalizeToDateString(d);
    return null;
  }
  combineStartParts() {
    const datePart = (this.startDatePart || "").trim();
    const timePart = (this.startTimePart || "").trim();
    if (datePart) {
      const normalizedDate = this.normalizeToDateString(datePart);
      if (!normalizedDate)
        return null;
      const t = timePart && /^\d{2}:\d{2}$/.test(timePart) ? `${timePart}:00` : "00:00:00";
      return `${normalizedDate} ${t}`;
    }
    const norm = this.normalizeToDateString(this.model.start_date);
    return norm ? `${norm} 00:00:00` : null;
  }
  onStartPartsChange() {
    const combined = this.combineStartParts();
    this.model.start_date = combined || "";
  }
  loadForEdit(id) {
    this.loading = true;
    this.api.getSchedule(id).subscribe({
      next: (res) => {
        const s = res?.data || res;
        this.model = {
          maintenance_plan_id: s.maintenance_plan_id,
          asset_ids: s.asset_ids || [],
          start_date: s.start_date || "",
          status: s.status || "scheduled",
          priority_id: s.priority_id || null
        };
        if (s.start_date) {
          const d = new Date(s.start_date);
          if (!isNaN(d.getTime())) {
            this.startDatePart = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
            this.startTimePart = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
          }
        }
        const plan = this.plansOptions.find((p) => p.id === s.maintenance_plan_id) || null;
        if (!plan && s.maintenance_plan_id) {
          this.plansOptions = [{ id: s.maintenance_plan_id, name: `Plan #${s.maintenance_plan_id}` }, ...this.plansOptions];
        }
        this.selectedPlan = plan || (s.maintenance_plan_id ? { id: s.maintenance_plan_id, name: `Plan #${s.maintenance_plan_id}` } : null);
        if (s.priority_id) {
          const pri = this.priorityOptions.find((p) => p.id === s.priority_id) || null;
          if (pri)
            this.selectedPriorityMeta = pri;
        }
        if (s.status)
          this.selectedStatus = this.statusOptions.find((o) => o.id === s.status) || this.selectedStatus;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  reset() {
    this.model = { maintenance_plan_id: 0, asset_ids: [], start_date: "", status: "scheduled", priority_id: null };
    this.error = null;
    this.fieldErrors = {};
    this.loading = false;
    this.selectedPlan = null;
    this.selectedPriorityMeta = null;
    this.selectedStatus = { id: "scheduled", name: "Scheduled" };
    this.showPlanDropdown = false;
    this.showPriorityDropdown = false;
    this.showStatusDropdown = false;
  }
  onAssetIdsCsvChange(value) {
    const ids = (value || "").split(",").map((s) => parseInt(String(s).trim(), 10)).filter((n) => !Number.isNaN(n));
    this.model.asset_ids = ids;
  }
  static \u0275fac = function ScheduleDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleDialogComponent)(\u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(MetaWorkOrdersService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleDialogComponent, selectors: [["app-schedule-dialog"]], hostBindings: function ScheduleDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ScheduleDialogComponent_click_HostBindingHandler() {
        return ctx.closeOnOutsideClick();
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { isOpen: "isOpen", editMode: "editMode", scheduleToEdit: "scheduleToEdit" }, outputs: { closed: "closed", created: "created", updated: "updated" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["creatingTpl", ""], ["class", "fixed inset-0 z-50 modal-overlay", 3, "click", 4, "ngIf"], [1, "fixed", "inset-0", "z-50", "modal-overlay", 3, "click"], [1, "absolute", "inset-0", "bg-black/30"], [1, "absolute", "inset-0", "flex", "items-start", "justify-center", "overflow-auto", "py-8", "px-4"], [1, "modal", "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", 3, "click"], [1, "modal-header", "p-6"], [1, "text-xl", "font-semibold"], [1, "text-sm", "text-gray-500"], [1, "p-6", "space-y-4", "modal-body"], ["class", "bg-red-50 border border-red-200 rounded-lg p-3 text-red-700", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "form-group"], [1, "required"], [1, "relative", "category-dropdown", 3, "click"], ["type", "button", 1, "dropdown-button", 3, "click", "disabled"], [1, "dropdown-content"], ["class", "placeholder", 4, "ngIf"], ["class", "selected-item", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "dropdown-menu", 4, "ngIf"], ["class", "field-error", 4, "ngIf"], [2, "height", "4px"], [1, "grid", "grid-cols-2", "gap-2"], ["type", "date", "placeholder", "YYYY-MM-DD", 3, "ngModelChange", "ngModel"], ["type", "time", "placeholder", "HH:MM", 3, "ngModelChange", "ngModel"], [1, "relative", "priority-dropdown", 3, "click"], ["class", "dropdown-menu relative ", "style", "z-index: 9999;", 4, "ngIf"], [1, "relative", "status-dropdown", 3, "click"], ["type", "button", 1, "dropdown-button", 3, "click"], ["class", "dropdown-menu", "style", "z-index: 9999;", 4, "ngIf"], [1, "grid", "grid-cols-1"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Search and select assets", 3, "ngModelChange", "items", "multiple", "closeOnSelect", "searchable", "ngModel"], [1, "field-help"], [1, "modal-footer", "p-6", "border-t", "flex", "justify-end", "gap-2"], [1, "btn", "btn-secondary", "w-[140px]", 3, "click", "disabled"], [1, "btn", "btn-primary", "w-[180px]", 3, "click", "disabled"], [4, "ngIf", "ngIfElse"], [1, "bg-red-50", "border", "border-red-200", "rounded-lg", "p-3", "text-red-700"], [1, "placeholder"], [1, "selected-item"], [1, "selected-text"], [1, "dropdown-menu"], [1, "dropdown-header"], ["type", "button", "class", "dropdown-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "item-content"], [1, "item-details"], [1, "item-name"], [1, "field-error"], [1, "dropdown-menu", "relative", 2, "z-index", "9999"], [1, "dropdown-menu", 2, "z-index", "9999"], [1, "inline-flex", "items-center", "gap-2"], ["viewBox", "0 0 24 24", "fill", "none", 1, "animate-spin", "w-4", "h-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function ScheduleDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ScheduleDialogComponent_div_0_Template, 72, 41, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgSelectModule, NgSelectComponent], styles: [`@charset "UTF-8";



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
  width: 280px;
  min-width: 200px;
  max-width: 350px;
}
@media (max-width: 768px) {
  .modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%]   .relative[_ngcontent-%COMP%] {
    width: 100%;
    max-width: none;
  }
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
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .assets-loading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
  border: 3px solid #e5e7eb;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 1s linear infinite;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}
@keyframes _ngcontent-%COMP%_spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .assets-error[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  max-width: 400px;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {
  width: 3rem;
  height: 3rem;
  color: #ef4444;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .assets-empty[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  max-width: 400px;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {
  width: 3rem;
  height: 3rem;
  color: #9ca3af;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .assets-section.light[_ngcontent-%COMP%]   .empty-message[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
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
  z-index: 2000;
  width: 100%;
  min-width: 250px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  max-width: 42rem;
  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.modal-overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {
  padding: 1rem 1.5rem 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  border-top: 1px solid #e2e8f0;
}
.form-row[_ngcontent-%COMP%] {
  width: 100%;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  min-height: 44px;
  font-size: 0.875rem;
}
.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {
  color: #dc2626;
}
.form-group.error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  color: #dc2626;
}
.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {
  color: #dc2626;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
.btn[_ngcontent-%COMP%] {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #2563eb;
  color: #fff;
}
.btn-secondary[_ngcontent-%COMP%] {
  background: #fff;
  color: #374151;
  border: 1px solid #d1d5db;
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
.category-dropdown[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%] {
  position: relative;
}
.category-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.45rem 1rem;
  text-align: left;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  min-height: 44px;
  background-color: #fff;
  transition: all 0.2s ease;
  cursor: pointer;
}
.category-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.category-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {
  color: #9ca3af;
}
.category-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.category-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%] {
  color: #111827;
  font-weight: 500;
}
.category-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  transition: transform 0.2s ease;
  margin-left: 0.5rem;
}
.category-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.category-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {
  position: absolute;
  z-index: 2000;
  width: 100%;
  margin-top: 0.25rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 15rem;
  overflow: auto;
}
.category-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  background: #f9fafb;
}
.category-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
}
.category-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.category-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {
  background: #eff6ff;
  outline: none;
}
.category-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%] {
  background: #eff6ff;
  color: #1d4ed8;
}
.category-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.category-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%] {
  flex: 1;
}
.category-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.priority-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], 
.status-dropdown[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #111827;
}
  .cdk-overlay-container, 
  .ng-dropdown-panel {
  z-index: 2100 !important;
}
/*# sourceMappingURL=schedule-dialog.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleDialogComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-dialog", standalone: true, imports: [CommonModule, FormsModule, NgSelectModule], template: `<div *ngIf="isOpen" class="fixed inset-0 z-50 modal-overlay" (click)="onBackdrop($event)">
  <div class="absolute inset-0 bg-black/30"></div>
  <div class="absolute inset-0 flex items-start justify-center overflow-auto py-8 px-4">
    <div class="modal bg-white rounded-2xl shadow-xl w-full max-w-2xl" (click)="$event.stopPropagation()">
      <div class="modal-header p-6">
        <h2 class="text-xl font-semibold">Schedule Maintenance</h2>
        <p class="text-sm text-gray-500">@if (scheduleToEdit?.id) {
          Edit
        } @else {
          Create
        }
          a scheduled maintenance item for a plan</p>
      </div>

      <div class="p-6 space-y-4 modal-body">
        <div *ngIf="error" class="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700">{{ error }}</div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="form-group" [class.error]="hasFieldError('maintenance_plan_id')">
            <label>Maintenance Plan <span class="required">*</span></label>
            <div class="relative category-dropdown" (click)="$event.stopPropagation()">
              <button type="button" (click)="togglePlanDropdown()" class="dropdown-button"
                      [class.error]="hasFieldError('maintenance_plan_id')" [class.active]="showPlanDropdown"
                      [disabled]="plansOptions.length===0">
                <div class="dropdown-content">
                  <span *ngIf="!selectedPlan" class="placeholder">Select plan</span>
                  <div *ngIf="selectedPlan" class="selected-item">
                    <span class="selected-text">{{ selectedPlan?.name }}</span>
                  </div>
                  <svg class="dropdown-arrow" [class.rotated]="showPlanDropdown" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <div *ngIf="showPlanDropdown" class="dropdown-menu">
                <div class="dropdown-header">Select plan</div>
                <button *ngFor="let p of plansOptions" type="button" (click)="selectPlan(p)" class="dropdown-item"
                        [class.selected]="selectedPlan?.id === p.id">
                  <div class="item-content">
                    <div class="item-details">
                      <div class="item-name">{{ p.name }}</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div class="field-error"
                 *ngIf="hasFieldError('maintenance_plan_id')">{{ getFieldError('maintenance_plan_id') }}
            </div>
            <div style="height: 4px"></div>
          </div>

          <div class="form-group">
            <label>Start Date & Time</label>
            <div class="grid grid-cols-2 gap-2">
              <input type="date" [(ngModel)]="startDatePart" (ngModelChange)="onStartPartsChange()"
                     placeholder="YYYY-MM-DD">
              <input type="time" [(ngModel)]="startTimePart" (ngModelChange)="onStartPartsChange()" placeholder="HH:MM">
            </div>
          </div>


          <div class="form-group">
            <label>Priority</label>
            <div class="relative priority-dropdown" (click)="$event.stopPropagation()">
              <button type="button" (click)="togglePriorityDropdown()" class="dropdown-button"
                      [class.active]="showPriorityDropdown" [disabled]="priorityOptions.length===0">
                <div class="dropdown-content">
                  <span *ngIf="!selectedPriorityMeta" class="placeholder">Select priority (optional)</span>
                  <div *ngIf="selectedPriorityMeta" class="selected-item">
                    <span class="selected-text">{{ selectedPriorityMeta?.name || selectedPriorityMeta?.slug }}</span>
                  </div>
                  <svg class="dropdown-arrow" [class.rotated]="showPriorityDropdown" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <div *ngIf="showPriorityDropdown" class="dropdown-menu relative " style="z-index: 9999;">
                <div class="dropdown-header">Select priority</div>
                <button *ngFor="let priority of priorityOptions" type="button" (click)="selectPriority(priority)"
                        class="dropdown-item" [class.selected]="selectedPriorityMeta?.id === priority.id">
                  <div class="item-content">
                    <div class="item-details">
                      <div class="item-name">{{ priority.name || priority.slug }}</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Status</label>
            <div class="relative status-dropdown" (click)="$event.stopPropagation()">
              <button type="button" (click)="toggleDropdown()" class="dropdown-button"
                      [class.active]="showStatusDropdown">
                <div class="dropdown-content">
                  <span *ngIf="!selectedStatus" class="placeholder">Select status</span>
                  <div *ngIf="selectedStatus" class="selected-item">
                    <span class="selected-text">{{ selectedStatus?.name }}</span>
                  </div>
                  <svg class="dropdown-arrow" [class.rotated]="showStatusDropdown" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <div *ngIf="showStatusDropdown" class="dropdown-menu" style="z-index: 9999;">
                <div class="dropdown-header">Select status</div>
                <button *ngFor="let option of statusOptions" type="button" (click)="selectOption(option)"
                        class="dropdown-item" [class.selected]="selectedStatus?.id === option.id">
                  <div class="item-content">
                    <div class="item-details">
                      <div class="item-name">{{ option.name }}</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Assets moved to bottom -->
        <div class="grid grid-cols-1">
          <div class="form-group">
            <label>Assets</label>
            <ng-select
              [items]="assetOptions"
              bindLabel="name"
              bindValue="id"
              [multiple]="true"
              [closeOnSelect]="false"
              [searchable]="true"
              placeholder="Search and select assets"
              [(ngModel)]="model.asset_ids">
            </ng-select>
            <div class="field-help"><small>Leave empty to use plan assets</small></div>
          </div>
        </div>
      </div>

      <div class="modal-footer p-6 border-t flex justify-end gap-2">
        <button class="btn btn-secondary w-[140px]" (click)="close()" [disabled]="loading">Cancel</button>
        <button class="btn btn-primary w-[180px]" (click)="submit()" [disabled]="loading">
          <ng-container *ngIf="!loading; else creatingTpl">
            @if (scheduleToEdit?.id) {
              Edit
            } @else {
              Create
            }
             Schedule
          </ng-container>
        </button>
        <ng-template #creatingTpl>
          <span class="inline-flex items-center gap-2">
            <svg class="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            @if (scheduleToEdit?.id){Editing} @else {Creating}...
          </span>
        </ng-template>
      </div>
    </div>
  </div>
</div>


`, styles: [`@charset "UTF-8";

/* src/app/maintenance/components/schedule-dialog/schedule-dialog.scss */
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
  width: 280px;
  min-width: 200px;
  max-width: 350px;
}
@media (max-width: 768px) {
  .modal-overlay .modal .modal-body .assets-section.light .filters-row .relative {
    width: 100%;
    max-width: none;
  }
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
.modal-overlay .modal .modal-body .assets-section.light .assets-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
}
.modal-overlay .modal .modal-body .assets-section.light .loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.modal-overlay .modal .modal-body .assets-section.light .spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid #e5e7eb;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
.modal-overlay .modal .modal-body .assets-section.light .loading-text {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.modal-overlay .modal .modal-body .assets-section.light .assets-error {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
}
.modal-overlay .modal .modal-body .assets-section.light .error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  max-width: 400px;
}
.modal-overlay .modal .modal-body .assets-section.light .error-icon {
  width: 3rem;
  height: 3rem;
  color: #ef4444;
}
.modal-overlay .modal .modal-body .assets-section.light .error-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.modal-overlay .modal .modal-body .assets-section.light .error-message {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}
.modal-overlay .modal .modal-body .assets-section.light .assets-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
}
.modal-overlay .modal .modal-body .assets-section.light .empty-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  max-width: 400px;
}
.modal-overlay .modal .modal-body .assets-section.light .empty-icon {
  width: 3rem;
  height: 3rem;
  color: #9ca3af;
}
.modal-overlay .modal .modal-body .assets-section.light .empty-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.modal-overlay .modal .modal-body .assets-section.light .empty-message {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
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
  z-index: 2000;
  width: 100%;
  min-width: 250px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  max-width: 42rem;
  animation: slideIn 0.3s ease-out;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.modal-overlay .modal .modal-header {
  padding: 1.5rem;
}
.modal-overlay .modal .modal-body {
  padding: 1.5rem;
}
.modal-overlay .modal .modal-footer {
  padding: 1rem 1.5rem 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  border-top: 1px solid #e2e8f0;
}
.form-row {
  width: 100%;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  min-height: 44px;
  font-size: 0.875rem;
}
.form-group .required {
  color: #dc2626;
}
.form-group.error label {
  color: #dc2626;
}
.form-group .field-error {
  color: #dc2626;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
.btn-primary {
  background: #2563eb;
  color: #fff;
}
.btn-secondary {
  background: #fff;
  color: #374151;
  border: 1px solid #d1d5db;
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
.category-dropdown,
.priority-dropdown,
.status-dropdown {
  position: relative;
}
.category-dropdown .dropdown-button,
.priority-dropdown .dropdown-button,
.status-dropdown .dropdown-button {
  width: 100%;
  padding: 0.45rem 1rem;
  text-align: left;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  min-height: 44px;
  background-color: #fff;
  transition: all 0.2s ease;
  cursor: pointer;
}
.category-dropdown .dropdown-content,
.priority-dropdown .dropdown-content,
.status-dropdown .dropdown-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.category-dropdown .placeholder,
.priority-dropdown .placeholder,
.status-dropdown .placeholder {
  color: #9ca3af;
}
.category-dropdown .selected-item,
.priority-dropdown .selected-item,
.status-dropdown .selected-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.category-dropdown .selected-text,
.priority-dropdown .selected-text,
.status-dropdown .selected-text {
  color: #111827;
  font-weight: 500;
}
.category-dropdown .dropdown-arrow,
.priority-dropdown .dropdown-arrow,
.status-dropdown .dropdown-arrow {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  transition: transform 0.2s ease;
  margin-left: 0.5rem;
}
.category-dropdown .dropdown-arrow.rotated,
.priority-dropdown .dropdown-arrow.rotated,
.status-dropdown .dropdown-arrow.rotated {
  transform: rotate(180deg);
}
.category-dropdown .dropdown-menu,
.priority-dropdown .dropdown-menu,
.status-dropdown .dropdown-menu {
  position: absolute;
  z-index: 2000;
  width: 100%;
  margin-top: 0.25rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 15rem;
  overflow: auto;
}
.category-dropdown .dropdown-header,
.priority-dropdown .dropdown-header,
.status-dropdown .dropdown-header {
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  background: #f9fafb;
}
.category-dropdown .dropdown-item,
.priority-dropdown .dropdown-item,
.status-dropdown .dropdown-item {
  width: 100%;
  padding: 0.75rem;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
}
.category-dropdown .dropdown-item:hover,
.category-dropdown .dropdown-item:focus,
.priority-dropdown .dropdown-item:hover,
.priority-dropdown .dropdown-item:focus,
.status-dropdown .dropdown-item:hover,
.status-dropdown .dropdown-item:focus {
  background: #eff6ff;
  outline: none;
}
.category-dropdown .dropdown-item.selected,
.priority-dropdown .dropdown-item.selected,
.status-dropdown .dropdown-item.selected {
  background: #eff6ff;
  color: #1d4ed8;
}
.category-dropdown .item-content,
.priority-dropdown .item-content,
.status-dropdown .item-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.category-dropdown .item-details,
.priority-dropdown .item-details,
.status-dropdown .item-details {
  flex: 1;
}
.category-dropdown .item-name,
.priority-dropdown .item-name,
.status-dropdown .item-name {
  font-weight: 500;
  color: #111827;
}
::ng-deep .cdk-overlay-container,
::ng-deep .ng-dropdown-panel {
  z-index: 2100 !important;
}
/*# sourceMappingURL=schedule-dialog.css.map */
`] }]
  }], () => [{ type: MaintenanceService }, { type: MetaWorkOrdersService }, { type: AssetService }], { isOpen: [{
    type: Input
  }], editMode: [{
    type: Input
  }], scheduleToEdit: [{
    type: Input
  }], closed: [{
    type: Output
  }], created: [{
    type: Output
  }], updated: [{
    type: Output
  }], closeOnOutsideClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleDialogComponent, { className: "ScheduleDialogComponent", filePath: "src/app/maintenance/components/schedule-dialog/schedule-dialog.component.ts", lineNumber: 18 });
})();

// src/app/maintenance/pages/scheduled-page.component.ts
function ScheduledPageComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 59);
    \u0275\u0275element(4, "circle", 60)(5, "path", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 62);
    \u0275\u0275text(7, "Loading Scheduled Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 63);
    \u0275\u0275text(9, "Please wait while we fetch schedules...");
    \u0275\u0275elementEnd()()();
  }
}
function ScheduledPageComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 65);
    \u0275\u0275element(4, "path", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 62);
    \u0275\u0275text(6, "No scheduled maintenance found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 63);
    \u0275\u0275text(8, "Create a plan and schedule maintenance to see items here.");
    \u0275\u0275elementEnd()()();
  }
}
function ScheduledPageComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "button", 68);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_71_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAllSchedules());
    });
    \u0275\u0275element(2, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Select all ", ctx_r1.filtered.length, " schedules");
  }
}
function ScheduledPageComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "button", 68);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_72_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAllSchedules());
    });
    \u0275\u0275element(3, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 75);
    \u0275\u0275text(7, " Selection Mode Active - Click cards to select ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 47)(9, "button", 76);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_72_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteModalForSelected());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 77);
    \u0275\u0275element(11, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Delete Selected ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-blue-100", ctx_r1.selectedCount === ctx_r1.filtered.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-blue-400", ctx_r1.selectedCount === ctx_r1.filtered.length)("bg-white", ctx_r1.selectedCount !== ctx_r1.filtered.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCount, " schedule", ctx_r1.selectedCount > 1 ? "s" : "", " selected");
  }
}
function ScheduledPageComponent_div_73_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "button", 101);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_73_div_1_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const s_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewSchedule(s_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 102);
    \u0275\u0275element(3, "path", 103)(4, "path", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6, "Preview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 101);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_73_div_1_div_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const s_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editSchedule(s_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 102);
    \u0275\u0275element(9, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 48);
    \u0275\u0275text(11, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 106);
    \u0275\u0275elementStart(13, "button", 107);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_73_div_1_div_17_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const s_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.requestDelete(s_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 108);
    \u0275\u0275element(15, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span", 109);
    \u0275\u0275text(17, "Delete");
    \u0275\u0275elementEnd()()();
  }
}
function ScheduledPageComponent_div_73_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_73_div_1_Template_div_click_0_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleScheduleSelection(s_r5));
    });
    \u0275\u0275elementStart(1, "div", 82)(2, "div", 83)(3, "input", 84);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_73_div_1_Template_input_click_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function ScheduledPageComponent_div_73_div_1_Template_input_change_3_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleScheduleSelection(s_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "a", 85)(6, "div", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 87)(9, "span", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 89);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_73_div_1_Template_div_click_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(12, "button", 90);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_73_div_1_Template_button_click_12_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(s_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 91);
    \u0275\u0275element(14, "circle", 92)(15, "circle", 93)(16, "circle", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ScheduledPageComponent_div_73_div_1_div_17_Template, 18, 0, "div", 95);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 96)(19, "div", 97)(20, "span", 98);
    \u0275\u0275text(21, "Due:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 97)(24, "span", 98);
    \u0275\u0275text(25, "Start:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 99)(28, "span", 98);
    \u0275\u0275text(29, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 48)(32, "span", 98);
    \u0275\u0275text(33, "Assets:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-blue-400", ctx_r1.isScheduleSelected(s_r5));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isScheduleSelected(s_r5));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("routerLink", "/maintenance/scheduled/", s_r5.maintenance_plan_id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPlanName(s_r5.maintenance_plan_id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getScheduledName(s_r5 == null ? null : s_r5.status) || "Scheduled");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isMenuOpen(s_r5.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(s_r5.due_date), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(s_r5.start_date), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityName(s_r5.priority_id), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAssetNames(s_r5.asset_ids), " ");
  }
}
function ScheduledPageComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, ScheduledPageComponent_div_73_div_1_Template, 35, 12, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filtered);
  }
}
function ScheduledPageComponent_div_74_div_8_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "button", 101);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_74_div_8_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const s_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewSchedule(s_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 102);
    \u0275\u0275element(3, "path", 103)(4, "path", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6, "Preview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 101);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_74_div_8_div_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const s_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editSchedule(s_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 102);
    \u0275\u0275element(9, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 48);
    \u0275\u0275text(11, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 106);
    \u0275\u0275elementStart(13, "button", 107);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_74_div_8_div_20_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const s_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.requestDelete(s_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 108);
    \u0275\u0275element(15, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span", 109);
    \u0275\u0275text(17, "Delete");
    \u0275\u0275elementEnd()()();
  }
}
function ScheduledPageComponent_div_74_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 112)(2, "div", 117)(3, "input", 118);
    \u0275\u0275listener("change", function ScheduledPageComponent_div_74_div_8_Template_input_change_3_listener() {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleScheduleSelection(s_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 119);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 63);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 120)(12, "div", 48);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 121)(15, "button", 122);
    \u0275\u0275listener("click", function ScheduledPageComponent_div_74_div_8_Template_button_click_15_listener() {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu(s_r8.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 123);
    \u0275\u0275element(17, "circle", 92)(18, "circle", 93)(19, "circle", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ScheduledPageComponent_div_74_div_8_div_20_Template, 18, 0, "div", 95);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isScheduleSelected(s_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getPlanName(s_r8.maintenance_plan_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Status: ", ctx_r1.getScheduledName(s_r8 == null ? null : s_r8.status) || "scheduled", " \u2022 Due: ", ctx_r1.formatDate(s_r8.due_date), " \u2022 Start: ", ctx_r1.formatDate(s_r8.start_date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Assets: ", ctx_r1.getAssetNames(s_r8.asset_ids), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Priority: ", ctx_r1.getPriorityName(s_r8.priority_id), "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isMenuOpen(s_r8.id));
  }
}
function ScheduledPageComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111)(2, "div", 112)(3, "h3", 113);
    \u0275\u0275text(4, "Scheduled Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 114);
    \u0275\u0275template(8, ScheduledPageComponent_div_74_div_8_Template, 21, 8, "div", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.filtered.length, " items");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filtered);
  }
}
var ScheduledPageComponent = class _ScheduledPageComponent {
  api;
  meta;
  assetsApi;
  router;
  loading = false;
  all = [];
  filtered = [];
  viewType = "grid";
  searchQuery = "";
  perPage = 20;
  filter = "all";
  total = 0;
  upcoming = 0;
  inProgress = 0;
  overdue = 0;
  // Lookup maps for display
  planIdToName = {};
  priorityIdToName = {};
  assetIdToName = {};
  // Dropdown per FRONTEND_RULES
  showStatusDropdown = false;
  statusOptions = [
    { id: "all", name: "All" },
    { id: "scheduled", name: "Scheduled" },
    { id: "in_progress", name: "In Progress" },
    { id: "overdue", name: "Overdue" }
  ];
  selectedStatus = { id: "all", name: "All" };
  // Dialog state
  isDialogOpen = false;
  editMode = false;
  scheduleToEdit = null;
  // Action menus state per schedule id
  menuOpen = {};
  // Delete modal state
  showDeleteModal = false;
  pendingDelete = null;
  // Multi-select state
  selectedSchedules = [];
  constructor(api, meta, assetsApi, router) {
    this.api = api;
    this.meta = meta;
    this.assetsApi = assetsApi;
    this.router = router;
  }
  ngOnInit() {
    this.fetchSchedules();
  }
  fetchSchedules() {
    this.loading = true;
    this.api.listSchedules({ per_page: this.perPage }).subscribe({
      next: (res) => {
        const items = Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.schedules) ? res.data.schedules : [];
        this.all = items;
        this.loadLookupsAndEnrich();
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadLookupsAndEnrich() {
    const planIds = Array.from(new Set(this.all.map((s) => s.maintenance_plan_id).filter((v) => !!v)));
    const assetIdsSet = /* @__PURE__ */ new Set();
    this.all.forEach((s) => (s.asset_ids || []).forEach((id) => {
      if (id != null)
        assetIdsSet.add(Number(id));
    }));
    const assetIds = Array.from(assetIdsSet);
    const priorities$ = Object.keys(this.priorityIdToName).length > 0 ? of(null) : this.meta.getPriorities();
    const missingPlanIds = planIds.filter((id) => this.planIdToName[id] == null);
    const missingAssetIds = assetIds.filter((id) => this.assetIdToName[id] == null);
    const planRequests = missingPlanIds.map((id) => this.api.getPlan(id));
    const assetRequests = missingAssetIds.map((id) => this.assetsApi.getAsset(id));
    forkJoin({
      priorities: priorities$,
      plans: planRequests.length ? forkJoin(planRequests) : of([]),
      assets: assetRequests.length ? forkJoin(assetRequests) : of([])
    }).subscribe({
      next: (bundle) => {
        if (bundle?.priorities && Array.isArray(bundle.priorities)) {
          for (const p of bundle.priorities) {
            if (p?.id != null)
              this.priorityIdToName[p.id] = p.name || p.slug || String(p.id);
          }
        }
        const plansArr = Array.isArray(bundle?.plans) ? bundle.plans : [];
        for (const res of plansArr) {
          const plan = res?.data?.plan || res?.data || res;
          if (plan?.id != null)
            this.planIdToName[plan.id] = plan.name || `Plan #${plan.id}`;
        }
        const assetsArr = Array.isArray(bundle?.assets) ? bundle.assets : [];
        for (const res of assetsArr) {
          const a = res?.data?.asset || res?.data || res;
          if (a?.id != null)
            this.assetIdToName[a.id] = a.name || a.asset_name || `Asset #${a.id}`;
        }
        this.computeMetrics();
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.computeMetrics();
        this.applyFilter();
        this.loading = false;
      }
    });
  }
  computeMetrics() {
    const today = /* @__PURE__ */ new Date();
    const in7 = /* @__PURE__ */ new Date();
    in7.setDate(today.getDate() + 7);
    this.total = this.all.length;
    this.inProgress = this.all.filter((s) => s.status === "in_progress").length;
    this.overdue = this.all.filter((s) => s.due_date && new Date(s.due_date) < today && s.status !== "completed").length;
    this.upcoming = this.all.filter((s) => s.due_date && new Date(s.due_date) >= today && new Date(s.due_date) <= in7).length;
  }
  // View toggle
  toggleViewType() {
    this.viewType = this.viewType === "grid" ? "list" : "grid";
  }
  // Search and filters
  onSearch() {
    this.applyFilter();
  }
  setFilter(f) {
    this.filter = f;
    this.selectedStatus = this.statusOptions.find((o) => o.id === f) || { id: "all", name: "All" };
    this.applyFilter();
  }
  applyFilter() {
    const today = /* @__PURE__ */ new Date();
    const base = this.searchQuery ? this.all.filter((s) => this.getPlanName(s.maintenance_plan_id).toLowerCase().includes(this.searchQuery.toLowerCase()) || (s.status || "").toLowerCase().includes(this.searchQuery.toLowerCase())) : this.all;
    if (this.filter === "all")
      this.filtered = base;
    else if (this.filter === "scheduled")
      this.filtered = base.filter((s) => s.status === "scheduled");
    else if (this.filter === "in_progress")
      this.filtered = base.filter((s) => s.status === "in_progress");
    else if (this.filter === "overdue")
      this.filtered = base.filter((s) => s.due_date && new Date(s.due_date) < today && s.status !== "completed");
  }
  onShowChange(event) {
    const value = Number(event?.target?.value || 20);
    this.perPage = value;
    this.fetchSchedules();
  }
  // Dropdown behavior (FRONTEND_RULES)
  toggleDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
  }
  selectOption(option) {
    this.selectedStatus = option;
    this.showStatusDropdown = false;
    this.setFilter(option?.id);
  }
  closeOnOutsideClick() {
    this.showStatusDropdown = false;
  }
  // Dialog handlers
  openDialog() {
    this.editMode = false;
    this.scheduleToEdit = null;
    this.isDialogOpen = true;
  }
  onDialogClosed() {
    this.isDialogOpen = false;
    this.editMode = false;
    this.scheduleToEdit = null;
  }
  onCreated() {
    this.isDialogOpen = false;
    this.editMode = false;
    this.scheduleToEdit = null;
    this.fetchSchedules();
  }
  // 3-dots menu handlers
  toggleMenu(id) {
    this.menuOpen[id] = !this.menuOpen[id];
  }
  isMenuOpen(id) {
    return !!this.menuOpen[id];
  }
  previewSchedule(s) {
    if (!s.id)
      return;
    this.menuOpen[s.id] = false;
    this.router.navigate(["/maintenance/scheduled", s.id]);
  }
  editSchedule(s) {
    this.editMode = true;
    this.scheduleToEdit = s;
    this.isDialogOpen = true;
    this.menuOpen[s.id] = false;
  }
  requestDelete(s) {
    this.pendingDelete = s;
    this.selectedSchedules = [s];
    this.showDeleteModal = true;
    this.menuOpen[s.id] = false;
  }
  confirmDelete(reason) {
    this.deleteSelected(reason);
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.pendingDelete = null;
  }
  // Selection helpers
  toggleSelectAllSchedules() {
    if (this.selectedSchedules.length === this.all.length) {
      this.selectedSchedules = [];
    } else {
      this.selectedSchedules = [...this.all];
    }
  }
  toggleScheduleSelection(s) {
    const idx = this.selectedSchedules.findIndex((x) => x.id === s.id);
    if (idx >= 0)
      this.selectedSchedules.splice(idx, 1);
    else
      this.selectedSchedules.push(s);
  }
  isScheduleSelected(s) {
    return this.selectedSchedules.some((x) => x.id === s.id);
  }
  get selectedCount() {
    return this.selectedSchedules.length;
  }
  clearSelection() {
    this.selectedSchedules = [];
  }
  openDeleteModalForSelected() {
    if (this.selectedSchedules.length === 0)
      return;
    this.showDeleteModal = true;
  }
  deleteSelected(deletionReason) {
    if (this.selectedSchedules.length === 0) {
      this.closeDeleteModal();
      return;
    }
    const ids = this.selectedSchedules.map((s) => s.id).filter(Boolean);
    let completed = 0;
    let success = 0;
    let failed = 0;
    const finalize = () => {
      completed++;
      if (completed >= ids.length) {
        this.fetchSchedules();
        this.clearSelection();
        this.closeDeleteModal();
        if (failed === 0)
          console.log(`${success} schedules deleted successfully`);
        else if (success === 0)
          console.error(`Failed to delete ${failed} schedules`);
        else
          console.log(`${success} schedules deleted, ${failed} failed`);
      }
    };
    ids.forEach((id) => {
      this.api.deleteSchedule(id).subscribe({
        next: () => {
          success++;
          finalize();
        },
        error: () => {
          failed++;
          finalize();
        }
      });
    });
  }
  // Display helpers
  getPlanName(id) {
    if (!id && id !== 0)
      return "-";
    return this.planIdToName[id] || `#${id}`;
  }
  getPriorityName(id) {
    if (!id)
      return "-";
    return this.priorityIdToName[id] || `#${id}`;
  }
  getAssetNames(ids) {
    const list = (ids || []).map((id) => this.assetIdToName[id] || `#${id}`);
    if (list.length <= 3)
      return list.join(", ") || "-";
    const shown = list.slice(0, 3).join(", ");
    return `${shown} +${list.length - 3} more`;
  }
  formatDate(value) {
    if (!value)
      return "-";
    const d = new Date(value);
    if (isNaN(d.getTime()))
      return "-";
    return d.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "2-digit" });
  }
  getScheduledName(name) {
    switch (name) {
      case "in_progress":
        return "In Progress";
      case "overdue":
        return "Overdue";
      case "completed":
        return "Completed";
      case "scheduled":
        return "Scheduled";
      default:
        return name || "Scheduled";
    }
  }
  static \u0275fac = function ScheduledPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduledPageComponent)(\u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(MetaWorkOrdersService), \u0275\u0275directiveInject(AssetService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduledPageComponent, selectors: [["app-scheduled-page"]], hostBindings: function ScheduledPageComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ScheduledPageComponent_click_HostBindingHandler() {
        return ctx.closeOnOutsideClick();
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 94, vars: 25, consts: [[1, "plans-page", "min-h-screen", "bg-gray-50", "p-6"], [1, "mb-6", "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-8"], [1, "rounded-xl", "bg-blue-50", "border", "border-blue-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-base", "font-medium", "text-gray-700"], [1, "w-10", "h-10", "bg-blue-100", "rounded-xl", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "text-sm", "text-blue-600", "font-medium", "mt-1"], [1, "rounded-xl", "bg-green-50", "border", "border-green-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "w-10", "h-10", "bg-green-100", "rounded-xl", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-green-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "text-sm", "text-green-600", "font-medium", "mt-1"], [1, "rounded-xl", "bg-orange-50", "border", "border-orange-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "w-10", "h-10", "bg-orange-100", "rounded-xl", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-orange-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.867 19.125h.008v.008h-.008v-.008Z"], [1, "text-sm", "text-orange-600", "font-medium", "mt-1"], [1, "rounded-xl", "bg-red-50", "border", "border-red-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "w-10", "h-10", "bg-red-100", "rounded-xl", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-red-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"], [1, "text-sm", "text-red-600", "font-medium", "mt-1"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "mb-6"], [1, "flex-1", "flex", "flex-col", "space-y-3", "md:space-y-0", "md:flex-row", "md:items-center", "md:space-x-3"], [1, "relative", "w-full", "md:w-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search by plan ID or status...", 1, "w-full", "pl-10", "pr-4", "py-2", "border-2", "border-blue-300", "rounded-xl", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", 3, "ngModelChange", "input", "ngModel"], [1, "flex", "items-center", "space-x-2", "mt-3", "md:mt-0"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "px-5", "py-2", "rounded-lg", "shadow-sm", "transition-colors", "flex", "items-center", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "flex", "bg-white", "border", "border-gray-200", "rounded-xl", "p-1", "shadow-sm"], [1, "px-4", "py-2", "text-sm", "font-medium", "rounded-lg", "border", "transition-all", "duration-200", 3, "click"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "w-full bg-white rounded-xl border border-gray-200 px-6 py-3 mb-4 flex items-center", 4, "ngIf"], ["class", "w-full bg-white rounded-xl border border-gray-200 px-6 py-3 mb-4 flex items-center justify-between", 4, "ngIf"], ["class", "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2", 4, "ngIf"], ["class", "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", 4, "ngIf"], [1, "mt-8", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-2"], [1, "text-sm", "text-gray-700"], [1, "border", "border-gray-300", "rounded-md", "px-2", "py-1", "text-sm", 3, "change"], ["value", "10"], ["value", "20", "selected", ""], ["value", "50"], ["value", "100"], [3, "closed", "created", "updated", "isOpen", "editMode", "scheduleToEdit"], [3, "closeModal", "confirmDelete", "isOpen", "selectedCount", "entitySingular", "entityPlural", "title"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-blue-100", "rounded-full", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-8", "h-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-500"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-gray-100", "rounded-full", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5h6M5 9h14M7 13h10M9 17h6"], [1, "w-full", "bg-white", "rounded-xl", "border", "border-gray-200", "px-6", "py-3", "mb-4", "flex", "items-center"], ["type", "button", 1, "focus:outline-none", "inline-flex", "items-center", "justify-center", "w-6", "h-6", "rounded-full", "border-2", "border-blue-400", "mr-3", "transition-colors", 3, "click"], [1, "w-3", "h-3", "rounded-full", "block", "bg-white", "transition-colors"], [1, "font-semibold", "text-gray-900"], [1, "w-full", "bg-white", "rounded-xl", "border", "border-gray-200", "px-6", "py-3", "mb-4", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-4"], [1, "w-3", "h-3", "rounded-full", "block", "transition-colors"], [1, "font-bold", "text-gray-900"], [1, "bg-blue-50", "text-blue-600", "px-3", "py-1", "rounded-full", "text-sm", "flex", "items-center", "font-medium"], [1, "bg-red-50", "text-red-600", "font-semibold", "px-4", "py-2", "rounded-lg", "flex", "items-center", "space-x-2", "cursor-pointer", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6", "mt-2"], ["class", "rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col transition-all hover:shadow-md overflow-hidden", 3, "border-blue-400", "click", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-blue-200", "bg-white", "shadow-sm", "flex", "flex-col", "transition-all", "hover:shadow-md", "overflow-hidden", 3, "click"], [1, "relative", "bg-[#e0edff]", "h-24", "flex", "items-center", "justify-between", "px-6"], [1, "absolute", "left-2", "!top-[10px]", "flex", "items-center"], ["type", "checkbox", 1, "plan-card-checkbox", 3, "click", "change", "checked"], [3, "routerLink"], [1, "font-semibold", "text-lg", "text-gray-900", "mb-2", "cursor-pointer", "hover:text-blue-600", "transition-colors"], [1, "flex", "items-center", "gap-2"], [1, "bg-gray-100", "text-gray-700", "text-xs", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "relative", 3, "click"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "hover:bg-gray-100", "transition-colors", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-500"], ["cx", "12", "cy", "6", "r", "1.5"], ["cx", "12", "cy", "12", "r", "1.5"], ["cx", "12", "cy", "18", "r", "1.5"], ["class", "absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50", 4, "ngIf"], [1, "p-6"], [1, "text-sm", "text-gray-700", "mb-1"], [1, "font-medium", "text-gray-600"], [1, "text-sm", "text-gray-700", "mb-1", "capitalize"], [1, "absolute", "right-0", "top-full", "mt-1", "w-44", "bg-white", "rounded-lg", "shadow-lg", "border", "border-gray-200", "py-1", "z-50"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2", "text-left", "hover:bg-gray-50", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "border-t", "border-gray-100", "my-1"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2", "text-left", "hover:bg-red-50", "text-red-600", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], [1, "text-sm", "font-medium"], [1, "bg-white", "rounded-lg", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-gray-200", "bg-gray-50"], [1, "flex", "items-center", "justify-between"], [1, "text-lg", "font-medium", "text-gray-900"], [1, "divide-y", "divide-gray-200"], ["class", "px-6 py-4 hover:bg-gray-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "px-6", "py-4", "hover:bg-gray-50", "transition-colors"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", 1, "plan-list-checkbox", 3, "change", "checked"], [1, "font-medium", "text-gray-900"], [1, "flex", "items-center", "gap-2", "capitalize"], [1, "relative"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "hover:bg-gray-100", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"]], template: function ScheduledPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Scheduled Maintenance Hub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "View and manage upcoming preventive maintenance executions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "span", 7);
      \u0275\u0275text(11, "Total Scheduled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 9);
      \u0275\u0275element(14, "path", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 12);
      \u0275\u0275text(18, "Items scheduled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 13)(20, "div", 6)(21, "span", 7);
      \u0275\u0275text(22, "Upcoming (7d)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 15);
      \u0275\u0275element(25, "path", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "div", 11);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 17);
      \u0275\u0275text(29, "Due soon");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 6)(32, "span", 7);
      \u0275\u0275text(33, "In Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 20);
      \u0275\u0275element(36, "path", 21)(37, "path", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "div", 11);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 23);
      \u0275\u0275text(41, "Currently running");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 24)(43, "div", 6)(44, "span", 7);
      \u0275\u0275text(45, "Overdue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(47, "svg", 26);
      \u0275\u0275element(48, "path", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(49, "div", 11);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 28);
      \u0275\u0275text(52, "Past due");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 29)(54, "div", 30)(55, "div", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 32);
      \u0275\u0275element(57, "path", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function ScheduledPageComponent_Template_input_ngModelChange_58_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function ScheduledPageComponent_Template_input_input_58_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 35)(60, "button", 36);
      \u0275\u0275listener("click", function ScheduledPageComponent_Template_button_click_60_listener() {
        return ctx.openDialog();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 37);
      \u0275\u0275element(62, "path", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275text(63, " Schedule Maintenance ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "div", 39)(65, "button", 40);
      \u0275\u0275listener("click", function ScheduledPageComponent_Template_button_click_65_listener() {
        return ctx.toggleViewType();
      });
      \u0275\u0275text(66, "Grid ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 40);
      \u0275\u0275listener("click", function ScheduledPageComponent_Template_button_click_67_listener() {
        return ctx.toggleViewType();
      });
      \u0275\u0275text(68, "List ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(69, ScheduledPageComponent_div_69_Template, 10, 0, "div", 41)(70, ScheduledPageComponent_div_70_Template, 9, 0, "div", 41)(71, ScheduledPageComponent_div_71_Template, 5, 1, "div", 42)(72, ScheduledPageComponent_div_72_Template, 13, 8, "div", 43)(73, ScheduledPageComponent_div_73_Template, 2, 1, "div", 44)(74, ScheduledPageComponent_div_74_Template, 9, 2, "div", 45);
      \u0275\u0275elementStart(75, "div", 46)(76, "div", 47)(77, "span", 48);
      \u0275\u0275text(78, "Show:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "select", 49);
      \u0275\u0275listener("change", function ScheduledPageComponent_Template_select_change_79_listener($event) {
        return ctx.onShowChange($event);
      });
      \u0275\u0275elementStart(80, "option", 50);
      \u0275\u0275text(81, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "option", 51);
      \u0275\u0275text(83, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "option", 52);
      \u0275\u0275text(85, "50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "option", 53);
      \u0275\u0275text(87, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "span", 48);
      \u0275\u0275text(89, "per page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 48);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "app-schedule-dialog", 54);
      \u0275\u0275listener("closed", function ScheduledPageComponent_Template_app_schedule_dialog_closed_92_listener() {
        return ctx.onDialogClosed();
      })("created", function ScheduledPageComponent_Template_app_schedule_dialog_created_92_listener() {
        return ctx.onCreated();
      })("updated", function ScheduledPageComponent_Template_app_schedule_dialog_updated_92_listener() {
        return ctx.onCreated();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "app-maintenance-delete-confirmation-modal", 55);
      \u0275\u0275listener("closeModal", function ScheduledPageComponent_Template_app_maintenance_delete_confirmation_modal_closeModal_93_listener() {
        return ctx.closeDeleteModal();
      })("confirmDelete", function ScheduledPageComponent_Template_app_maintenance_delete_confirmation_modal_confirmDelete_93_listener($event) {
        return ctx.confirmDelete($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate(ctx.total);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.upcoming);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.inProgress);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.overdue);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(7);
      \u0275\u0275classMap(ctx.viewType === "grid" ? "bg-blue-50 text-blue-600 border-blue-200" : "bg-white text-gray-600 border-transparent");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.viewType === "list" ? "bg-blue-50 text-blue-600 border-blue-200" : "bg-white text-gray-600 border-transparent");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "grid" && ctx.selectedCount === 0 && !ctx.loading && ctx.filtered.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "grid" && ctx.selectedCount > 0 && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "grid" && !ctx.loading && ctx.filtered.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "list" && !ctx.loading && ctx.filtered.length > 0);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate2(" Showing 1 - ", ctx.filtered.length, " of ", ctx.filtered.length, " entries ");
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.isDialogOpen)("editMode", ctx.editMode)("scheduleToEdit", ctx.scheduleToEdit);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showDeleteModal)("selectedCount", ctx.selectedCount || 1)("entitySingular", "Maintenance Schedule")("entityPlural", "Maintenance Schedules")("title", "Delete Selected Maintenance Schedule");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, ScheduleDialogComponent, MaintenanceDeleteConfirmationModalComponent, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n@layer properties;\n@layer theme, base, components, utilities;\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --font-sans:\n      ui-sans-serif,\n      system-ui,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji",\n      "Segoe UI Symbol",\n      "Noto Color Emoji";\n    --font-mono:\n      ui-monospace,\n      SFMono-Regular,\n      Menlo,\n      Monaco,\n      Consolas,\n      "Liberation Mono",\n      "Courier New",\n      monospace;\n    --color-red-50: oklch(97.1% 0.013 17.38);\n    --color-red-100: oklch(93.6% 0.032 17.717);\n    --color-red-200: oklch(88.5% 0.062 18.334);\n    --color-red-300: oklch(80.8% 0.114 19.571);\n    --color-red-400: oklch(70.4% 0.191 22.216);\n    --color-red-500: oklch(63.7% 0.237 25.331);\n    --color-red-600: oklch(57.7% 0.245 27.325);\n    --color-red-700: oklch(50.5% 0.213 27.518);\n    --color-red-800: oklch(44.4% 0.177 26.899);\n    --color-red-900: oklch(39.6% 0.141 25.723);\n    --color-orange-50: oklch(98% 0.016 73.684);\n    --color-orange-100: oklch(95.4% 0.038 75.164);\n    --color-orange-200: oklch(90.1% 0.076 70.697);\n    --color-orange-400: oklch(75% 0.183 55.934);\n    --color-orange-500: oklch(70.5% 0.213 47.604);\n    --color-orange-600: oklch(64.6% 0.222 41.116);\n    --color-orange-700: oklch(55.3% 0.195 38.402);\n    --color-orange-800: oklch(47% 0.157 37.304);\n    --color-orange-900: oklch(40.8% 0.123 38.172);\n    --color-amber-50: oklch(98.7% 0.022 95.277);\n    --color-amber-200: oklch(92.4% 0.12 95.746);\n    --color-amber-600: oklch(66.6% 0.179 58.318);\n    --color-amber-700: oklch(55.5% 0.163 48.998);\n    --color-amber-800: oklch(47.3% 0.137 46.201);\n    --color-yellow-50: oklch(98.7% 0.026 102.212);\n    --color-yellow-100: oklch(97.3% 0.071 103.193);\n    --color-yellow-200: oklch(94.5% 0.129 101.54);\n    --color-yellow-400: oklch(85.2% 0.199 91.936);\n    --color-yellow-500: oklch(79.5% 0.184 86.047);\n    --color-yellow-600: oklch(68.1% 0.162 75.834);\n    --color-yellow-700: oklch(55.4% 0.135 66.442);\n    --color-yellow-800: oklch(47.6% 0.114 61.907);\n    --color-green-50: oklch(98.2% 0.018 155.826);\n    --color-green-100: oklch(96.2% 0.044 156.743);\n    --color-green-200: oklch(92.5% 0.084 155.995);\n    --color-green-400: oklch(79.2% 0.209 151.711);\n    --color-green-500: oklch(72.3% 0.219 149.579);\n    --color-green-600: oklch(62.7% 0.194 149.214);\n    --color-green-700: oklch(52.7% 0.154 150.069);\n    --color-green-800: oklch(44.8% 0.119 151.328);\n    --color-green-900: oklch(39.3% 0.095 152.535);\n    --color-emerald-500: oklch(69.6% 0.17 162.48);\n    --color-teal-50: oklch(98.4% 0.014 180.72);\n    --color-teal-600: oklch(60% 0.118 184.704);\n    --color-cyan-50: oklch(98.4% 0.019 200.873);\n    --color-cyan-100: oklch(95.6% 0.045 203.388);\n    --color-cyan-400: oklch(78.9% 0.154 211.53);\n    --color-cyan-600: oklch(60.9% 0.126 221.723);\n    --color-blue-50: oklch(97% 0.014 254.604);\n    --color-blue-100: oklch(93.2% 0.032 255.585);\n    --color-blue-200: oklch(88.2% 0.059 254.128);\n    --color-blue-300: oklch(80.9% 0.105 251.813);\n    --color-blue-400: oklch(70.7% 0.165 254.624);\n    --color-blue-500: oklch(62.3% 0.214 259.815);\n    --color-blue-600: oklch(54.6% 0.245 262.881);\n    --color-blue-700: oklch(48.8% 0.243 264.376);\n    --color-blue-800: oklch(42.4% 0.199 265.638);\n    --color-blue-900: oklch(37.9% 0.146 265.522);\n    --color-indigo-50: oklch(96.2% 0.018 272.314);\n    --color-indigo-100: oklch(93% 0.034 272.788);\n    --color-indigo-500: oklch(58.5% 0.233 277.117);\n    --color-indigo-600: oklch(51.1% 0.262 276.966);\n    --color-indigo-700: oklch(45.7% 0.24 277.023);\n    --color-purple-50: oklch(97.7% 0.014 308.299);\n    --color-purple-100: oklch(94.6% 0.033 307.174);\n    --color-purple-400: oklch(71.4% 0.203 305.504);\n    --color-purple-500: oklch(62.7% 0.265 303.9);\n    --color-purple-600: oklch(55.8% 0.288 302.321);\n    --color-purple-700: oklch(49.6% 0.265 301.924);\n    --color-purple-800: oklch(43.8% 0.218 303.724);\n    --color-pink-100: oklch(94.8% 0.028 342.258);\n    --color-pink-600: oklch(59.2% 0.249 0.584);\n    --color-pink-800: oklch(45.9% 0.187 3.815);\n    --color-slate-600: oklch(44.6% 0.043 257.281);\n    --color-gray-50: oklch(98.5% 0.002 247.839);\n    --color-gray-100: oklch(96.7% 0.003 264.542);\n    --color-gray-200: oklch(92.8% 0.006 264.531);\n    --color-gray-300: oklch(87.2% 0.01 258.338);\n    --color-gray-400: oklch(70.7% 0.022 261.325);\n    --color-gray-500: oklch(55.1% 0.027 264.364);\n    --color-gray-600: oklch(44.6% 0.03 256.802);\n    --color-gray-700: oklch(37.3% 0.034 259.733);\n    --color-gray-800: oklch(27.8% 0.033 256.848);\n    --color-gray-900: oklch(21% 0.034 264.665);\n    --color-black: #000;\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --container-md: 28rem;\n    --container-lg: 32rem;\n    --container-xl: 36rem;\n    --container-2xl: 42rem;\n    --container-3xl: 48rem;\n    --container-4xl: 56rem;\n    --container-5xl: 64rem;\n    --container-6xl: 72rem;\n    --container-7xl: 80rem;\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-3xl: 1.875rem;\n    --text-3xl--line-height: calc(2.25 / 1.875);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --text-5xl: 3rem;\n    --text-5xl--line-height: 1;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --tracking-tight: -0.025em;\n    --tracking-wide: 0.025em;\n    --tracking-wider: 0.05em;\n    --leading-tight: 1.25;\n    --leading-relaxed: 1.625;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --ease-in: cubic-bezier(0.4, 0, 1, 1);\n    --ease-out: cubic-bezier(0, 0, 0.2, 1);\n    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n    --animate-spin: spin 1s linear infinite;\n    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    --default-font-family: var(--font-sans);\n    --default-mono-font-family: var(--font-mono);\n  }\n}\n@layer base {\n  *[_ngcontent-%COMP%], \n   [_ngcontent-%COMP%]::after, \n   [_ngcontent-%COMP%]::before, \n   [_ngcontent-%COMP%]::backdrop, \n   [_ngcontent-%COMP%]::file-selector-button {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0 solid;\n  }\n  html[_ngcontent-%COMP%], \n   [_nghost-%COMP%] {\n    line-height: 1.5;\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr[_ngcontent-%COMP%] {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr[_ngcontent-%COMP%]:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1[_ngcontent-%COMP%], \n   h2[_ngcontent-%COMP%], \n   h3[_ngcontent-%COMP%], \n   h4[_ngcontent-%COMP%], \n   h5[_ngcontent-%COMP%], \n   h6[_ngcontent-%COMP%] {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a[_ngcontent-%COMP%] {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b[_ngcontent-%COMP%], \n   strong[_ngcontent-%COMP%] {\n    font-weight: bolder;\n  }\n  code[_ngcontent-%COMP%], \n   kbd[_ngcontent-%COMP%], \n   samp[_ngcontent-%COMP%], \n   pre[_ngcontent-%COMP%] {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n  small[_ngcontent-%COMP%] {\n    font-size: 80%;\n  }\n  sub[_ngcontent-%COMP%], \n   sup[_ngcontent-%COMP%] {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  sub[_ngcontent-%COMP%] {\n    bottom: -0.25em;\n  }\n  sup[_ngcontent-%COMP%] {\n    top: -0.5em;\n  }\n  table[_ngcontent-%COMP%] {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  [_ngcontent-%COMP%]:-moz-focusring {\n    outline: auto;\n  }\n  progress[_ngcontent-%COMP%] {\n    vertical-align: baseline;\n  }\n  summary[_ngcontent-%COMP%] {\n    display: list-item;\n  }\n  ol[_ngcontent-%COMP%], \n   ul[_ngcontent-%COMP%], \n   menu[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n  img[_ngcontent-%COMP%], \n   svg[_ngcontent-%COMP%], \n   video[_ngcontent-%COMP%], \n   canvas[_ngcontent-%COMP%], \n   audio[_ngcontent-%COMP%], \n   iframe[_ngcontent-%COMP%], \n   embed[_ngcontent-%COMP%], \n   object[_ngcontent-%COMP%] {\n    display: block;\n    vertical-align: middle;\n  }\n  img[_ngcontent-%COMP%], \n   video[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n  }\n  button[_ngcontent-%COMP%], \n   input[_ngcontent-%COMP%], \n   select[_ngcontent-%COMP%], \n   optgroup[_ngcontent-%COMP%], \n   textarea[_ngcontent-%COMP%], \n   [_ngcontent-%COMP%]::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    border-radius: 0;\n    background-color: transparent;\n    opacity: 1;\n  }\n  :where(select[_ngcontent-%COMP%]:is([multiple], [size]))   optgroup[_ngcontent-%COMP%] {\n    font-weight: bolder;\n  }\n  :where(select[_ngcontent-%COMP%]:is([multiple], [size]))   optgroup[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    padding-inline-start: 20px;\n  }\n  [_ngcontent-%COMP%]::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  [_ngcontent-%COMP%]::placeholder {\n    opacity: 1;\n  }\n  @supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px) {\n    [_ngcontent-%COMP%]::placeholder {\n      color: currentcolor;\n    }\n    @supports (color: color-mix(in lab, red, red)) {\n         {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n  textarea[_ngcontent-%COMP%] {\n    resize: vertical;\n  }\n  [_ngcontent-%COMP%]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  [_ngcontent-%COMP%]::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  [_ngcontent-%COMP%]::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  [_ngcontent-%COMP%]::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  [_ngcontent-%COMP%]::-webkit-datetime-edit, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-year-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-month-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-day-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-hour-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-minute-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-second-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-millisecond-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  [_ngcontent-%COMP%]:-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button[_ngcontent-%COMP%], \n   input[_ngcontent-%COMP%]:where([type=button], [type=reset], [type=submit]), \n   [_ngcontent-%COMP%]::file-selector-button {\n    appearance: button;\n  }\n  [_ngcontent-%COMP%]::-webkit-inner-spin-button, \n   [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden][_ngcontent-%COMP%]:where(:not([hidden=until-found])) {\n    display: none !important;\n  }\n}\n@layer utilities {\n  .pointer-events-none[_ngcontent-%COMP%] {\n    pointer-events: none;\n  }\n  .collapse[_ngcontent-%COMP%] {\n    visibility: collapse;\n  }\n  .invisible[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n  .visible[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  .sr-only[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip-path: inset(50%);\n    white-space: nowrap;\n    border-width: 0;\n  }\n  .absolute[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  .fixed[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n  .relative[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .static[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .sticky[_ngcontent-%COMP%] {\n    position: sticky;\n  }\n  .inset-0[_ngcontent-%COMP%] {\n    inset: calc(var(--spacing) * 0);\n  }\n  .inset-y-0[_ngcontent-%COMP%] {\n    inset-block: calc(var(--spacing) * 0);\n  }\n  .\\!top-\\__ph-0__[_ngcontent-%COMP%] {\n    top: 10px !important;\n  }\n  .top-0[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 0);\n  }\n  .top-1[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 1);\n  }\n  .top-1\\/2[_ngcontent-%COMP%] {\n    top: calc(1/2 * 100%);\n  }\n  .top-2[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 2);\n  }\n  .top-2\\.5[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 2.5);\n  }\n  .top-3[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 3);\n  }\n  .top-4[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 4);\n  }\n  .top-full[_ngcontent-%COMP%] {\n    top: 100%;\n  }\n  .right-0[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 0);\n  }\n  .right-2[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 2);\n  }\n  .right-3[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 3);\n  }\n  .right-4[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 4);\n  }\n  .right-6[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 6);\n  }\n  .right-8[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 8);\n  }\n  .bottom-4[_ngcontent-%COMP%] {\n    bottom: calc(var(--spacing) * 4);\n  }\n  .bottom-6[_ngcontent-%COMP%] {\n    bottom: calc(var(--spacing) * 6);\n  }\n  .left-0[_ngcontent-%COMP%] {\n    left: calc(var(--spacing) * 0);\n  }\n  .left-2[_ngcontent-%COMP%] {\n    left: calc(var(--spacing) * 2);\n  }\n  .left-3[_ngcontent-%COMP%] {\n    left: calc(var(--spacing) * 3);\n  }\n  .left-4[_ngcontent-%COMP%] {\n    left: calc(var(--spacing) * 4);\n  }\n  .z-0[_ngcontent-%COMP%] {\n    z-index: 0;\n  }\n  .z-1[_ngcontent-%COMP%] {\n    z-index: 1;\n  }\n  .z-10[_ngcontent-%COMP%] {\n    z-index: 10;\n  }\n  .z-40[_ngcontent-%COMP%] {\n    z-index: 40;\n  }\n  .z-50[_ngcontent-%COMP%] {\n    z-index: 50;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    grid-column: 6;\n  }\n  .col-span-1[_ngcontent-%COMP%] {\n    grid-column: span 1 / span 1;\n  }\n  .col-span-2[_ngcontent-%COMP%] {\n    grid-column: span 2 / span 2;\n  }\n  .col-span-3[_ngcontent-%COMP%] {\n    grid-column: span 3 / span 3;\n  }\n  .col-span-12[_ngcontent-%COMP%] {\n    grid-column: span 12 / span 12;\n  }\n  .col-span-full[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  @media (width >= 40rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 40rem;\n    }\n  }\n  @media (width >= 48rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 48rem;\n    }\n  }\n  @media (width >= 64rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 64rem;\n    }\n  }\n  @media (width >= 80rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 80rem;\n    }\n  }\n  @media (width >= 96rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 96rem;\n    }\n  }\n  .mx-2[_ngcontent-%COMP%] {\n    margin-inline: calc(var(--spacing) * 2);\n  }\n  .mx-4[_ngcontent-%COMP%] {\n    margin-inline: calc(var(--spacing) * 4);\n  }\n  .mx-auto[_ngcontent-%COMP%] {\n    margin-inline: auto;\n  }\n  .my-1[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 1);\n  }\n  .my-2[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 2);\n  }\n  .my-3[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 3);\n  }\n  .my-4[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 4);\n  }\n  .my-8[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 8);\n  }\n  .mt-0[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 0);\n  }\n  .mt-0\\.5[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 0.5);\n  }\n  .mt-1[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 1);\n  }\n  .mt-2[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 2);\n  }\n  .mt-3[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 3);\n  }\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 4);\n  }\n  .mt-5[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 5);\n  }\n  .mt-6[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 6);\n  }\n  .mt-8[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 8);\n  }\n  .mr-1[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 1);\n  }\n  .mr-2[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 2);\n  }\n  .mr-2\\.5[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 2.5);\n  }\n  .mr-3[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 3);\n  }\n  .mr-4[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 4);\n  }\n  .\\!mb-0[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 0) !important;\n  }\n  .mb-1[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 1);\n  }\n  .mb-2[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 2);\n  }\n  .mb-3[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 3);\n  }\n  .mb-4[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 4);\n  }\n  .mb-5[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 5);\n  }\n  .mb-6[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 6);\n  }\n  .mb-8[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 8);\n  }\n  .mb-12[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 12);\n  }\n  .mb-16[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 16);\n  }\n  .-ml-1[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * -1);\n  }\n  .ml-1[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 1);\n  }\n  .ml-2[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 2);\n  }\n  .ml-3[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 3);\n  }\n  .ml-4[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 4);\n  }\n  .ml-6[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 6);\n  }\n  .ml-7[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 7);\n  }\n  .ml-8[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 8);\n  }\n  .ml-16[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 16);\n  }\n  .ml-64[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 64);\n  }\n  .ml-auto[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  .\\!line-clamp-2[_ngcontent-%COMP%] {\n    overflow: hidden !important;\n    display: -webkit-box !important;\n    -webkit-box-orient: vertical !important;\n    -webkit-line-clamp: 2 !important;\n  }\n  .line-clamp-1[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 1;\n  }\n  .line-clamp-2[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n  }\n  .line-clamp-3[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n  }\n  .\\!block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .\\!grid[_ngcontent-%COMP%] {\n    display: grid !important;\n  }\n  .\\!hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .block[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .contents[_ngcontent-%COMP%] {\n    display: contents;\n  }\n  .flex[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .flow-root[_ngcontent-%COMP%] {\n    display: flow-root;\n  }\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n  }\n  .hidden[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .inline[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .inline-block[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .inline-grid[_ngcontent-%COMP%] {\n    display: inline-grid;\n  }\n  .inline-table[_ngcontent-%COMP%] {\n    display: inline-table;\n  }\n  .list-item[_ngcontent-%COMP%] {\n    display: list-item;\n  }\n  .table[_ngcontent-%COMP%] {\n    display: table;\n  }\n  .table-caption[_ngcontent-%COMP%] {\n    display: table-caption;\n  }\n  .table-cell[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n  .table-column[_ngcontent-%COMP%] {\n    display: table-column;\n  }\n  .table-column-group[_ngcontent-%COMP%] {\n    display: table-column-group;\n  }\n  .table-footer-group[_ngcontent-%COMP%] {\n    display: table-footer-group;\n  }\n  .table-header-group[_ngcontent-%COMP%] {\n    display: table-header-group;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    display: table-row;\n  }\n  .table-row-group[_ngcontent-%COMP%] {\n    display: table-row-group;\n  }\n  .aspect-square[_ngcontent-%COMP%] {\n    aspect-ratio: 1 / 1;\n  }\n  .size-3[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 3);\n    height: calc(var(--spacing) * 3);\n  }\n  .size-4[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 4);\n    height: calc(var(--spacing) * 4);\n  }\n  .size-5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 5);\n    height: calc(var(--spacing) * 5);\n  }\n  .size-6[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 6);\n    height: calc(var(--spacing) * 6);\n  }\n  .size-10[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 10);\n    height: calc(var(--spacing) * 10);\n  }\n  .h-1[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 1);\n  }\n  .h-1\\.5[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 1.5);\n  }\n  .h-2[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 2);\n  }\n  .h-2\\.5[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 2.5);\n  }\n  .h-3[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 3);\n  }\n  .h-3\\.5[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 3.5);\n  }\n  .h-4[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 4);\n  }\n  .h-5[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 5);\n  }\n  .h-6[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 6);\n  }\n  .h-7[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 7);\n  }\n  .h-8[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 8);\n  }\n  .h-10[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 10);\n  }\n  .h-12[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 12);\n  }\n  .h-14[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 14);\n  }\n  .h-16[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 16);\n  }\n  .h-20[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 20);\n  }\n  .h-24[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 24);\n  }\n  .h-32[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 32);\n  }\n  .h-40[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 40);\n  }\n  .h-48[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 48);\n  }\n  .h-64[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 64);\n  }\n  .h-100[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 100);\n  }\n  .h-\\__ph-0__[_ngcontent-%COMP%] {\n    height: 230px;\n  }\n  .h-\\__ph-0__[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .h-\\__ph-0__[_ngcontent-%COMP%] {\n    height: calc(100vh - 200px);\n  }\n  .h-fit[_ngcontent-%COMP%] {\n    height: fit-content;\n  }\n  .h-full[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .h-screen[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  .max-h-60[_ngcontent-%COMP%] {\n    max-height: calc(var(--spacing) * 60);\n  }\n  .max-h-72[_ngcontent-%COMP%] {\n    max-height: calc(var(--spacing) * 72);\n  }\n  .max-h-\\__ph-0__[_ngcontent-%COMP%] {\n    max-height: 60vh;\n  }\n  .max-h-\\__ph-0__[_ngcontent-%COMP%] {\n    max-height: 90vh;\n  }\n  .max-h-\\__ph-0__[_ngcontent-%COMP%] {\n    max-height: 600px;\n  }\n  .max-h-\\__ph-0__[_ngcontent-%COMP%] {\n    max-height: calc(90vh - 140px);\n  }\n  .max-h-full[_ngcontent-%COMP%] {\n    max-height: 100%;\n  }\n  .min-h-full[_ngcontent-%COMP%] {\n    min-height: 100%;\n  }\n  .min-h-screen[_ngcontent-%COMP%] {\n    min-height: 100vh;\n  }\n  .w-0[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 0);\n  }\n  .w-1[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 1);\n  }\n  .w-1\\.5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 1.5);\n  }\n  .w-1\\/3[_ngcontent-%COMP%] {\n    width: calc(1/3 * 100%);\n  }\n  .w-2[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 2);\n  }\n  .w-2\\.5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 2.5);\n  }\n  .w-2\\/3[_ngcontent-%COMP%] {\n    width: calc(2/3 * 100%);\n  }\n  .w-3[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 3);\n  }\n  .w-3\\.5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 3.5);\n  }\n  .w-4[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 4);\n  }\n  .w-5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 5);\n  }\n  .w-6[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 6);\n  }\n  .w-7[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 7);\n  }\n  .w-8[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 8);\n  }\n  .w-10[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 10);\n  }\n  .w-11[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 11);\n  }\n  .w-12[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 12);\n  }\n  .w-14[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 14);\n  }\n  .w-16[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 16);\n  }\n  .w-20[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 20);\n  }\n  .w-24[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 24);\n  }\n  .w-28[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 28);\n  }\n  .w-32[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 32);\n  }\n  .w-40[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 40);\n  }\n  .w-44[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 44);\n  }\n  .w-48[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 48);\n  }\n  .w-56[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 56);\n  }\n  .w-64[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 64);\n  }\n  .w-80[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 80);\n  }\n  .w-96[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 96);\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 140px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n  .w-auto[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .w-full[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .max-w-2xl[_ngcontent-%COMP%] {\n    max-width: var(--container-2xl);\n  }\n  .max-w-3xl[_ngcontent-%COMP%] {\n    max-width: var(--container-3xl);\n  }\n  .max-w-4xl[_ngcontent-%COMP%] {\n    max-width: var(--container-4xl);\n  }\n  .max-w-5xl[_ngcontent-%COMP%] {\n    max-width: var(--container-5xl);\n  }\n  .max-w-6xl[_ngcontent-%COMP%] {\n    max-width: var(--container-6xl);\n  }\n  .max-w-7xl[_ngcontent-%COMP%] {\n    max-width: var(--container-7xl);\n  }\n  .max-w-\\__ph-0__[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n  .max-w-\\__ph-0__[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n  .max-w-full[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .max-w-lg[_ngcontent-%COMP%] {\n    max-width: var(--container-lg);\n  }\n  .max-w-md[_ngcontent-%COMP%] {\n    max-width: var(--container-md);\n  }\n  .max-w-xl[_ngcontent-%COMP%] {\n    max-width: var(--container-xl);\n  }\n  .min-w-0[_ngcontent-%COMP%] {\n    min-width: calc(var(--spacing) * 0);\n  }\n  .min-w-\\__ph-0__[_ngcontent-%COMP%] {\n    min-width: 1.25rem;\n  }\n  .min-w-\\__ph-0__[_ngcontent-%COMP%] {\n    min-width: 70px;\n  }\n  .min-w-\\__ph-0__[_ngcontent-%COMP%] {\n    min-width: 180px;\n  }\n  .min-w-full[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .flex-1[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .flex-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .border-collapse[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n  }\n  .translate-x-1[_ngcontent-%COMP%] {\n    --tw-translate-x: calc(var(--spacing) * 1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-1\\/2[_ngcontent-%COMP%] {\n    --tw-translate-x: calc(1/2 * 100%);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-5[_ngcontent-%COMP%] {\n    --tw-translate-x: calc(var(--spacing) * 5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-\\__ph-0__[_ngcontent-%COMP%] {\n    --tw-translate-x: -2px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-\\__ph-0__[_ngcontent-%COMP%] {\n    --tw-translate-x: 2px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-1[_ngcontent-%COMP%] {\n    --tw-translate-y: calc(var(--spacing) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-1\\/2[_ngcontent-%COMP%] {\n    --tw-translate-y: calc(calc(1/2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .rotate-90[_ngcontent-%COMP%] {\n    rotate: 90deg;\n  }\n  .rotate-180[_ngcontent-%COMP%] {\n    rotate: 180deg;\n  }\n  .transform[_ngcontent-%COMP%] {\n    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);\n  }\n  .transform\\![_ngcontent-%COMP%] {\n    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,) !important;\n  }\n  .animate-pulse[_ngcontent-%COMP%] {\n    animation: var(--animate-pulse);\n  }\n  .animate-spin[_ngcontent-%COMP%] {\n    animation: var(--animate-spin);\n  }\n  .cursor-default[_ngcontent-%COMP%] {\n    cursor: default;\n  }\n  .cursor-move[_ngcontent-%COMP%] {\n    cursor: move;\n  }\n  .cursor-pointer[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .resize[_ngcontent-%COMP%] {\n    resize: both;\n  }\n  .resize-none[_ngcontent-%COMP%] {\n    resize: none;\n  }\n  .list-inside[_ngcontent-%COMP%] {\n    list-style-position: inside;\n  }\n  .list-disc[_ngcontent-%COMP%] {\n    list-style-type: disc;\n  }\n  .list-none[_ngcontent-%COMP%] {\n    list-style-type: none;\n  }\n  .appearance-none[_ngcontent-%COMP%] {\n    appearance: none;\n  }\n  .grid-cols-1[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid-cols-6[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .grid-cols-12[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n  .\\!flex-row[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n  }\n  .flex-col[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .flex-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .place-items-center[_ngcontent-%COMP%] {\n    place-items: center;\n  }\n  .items-center[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .items-end[_ngcontent-%COMP%] {\n    align-items: flex-end;\n  }\n  .items-start[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .justify-between[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .justify-center[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .justify-end[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .gap-1[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 1);\n  }\n  .gap-2[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 2);\n  }\n  .gap-3[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 3);\n  }\n  .gap-4[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 4);\n  }\n  .gap-6[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 6);\n  }\n  .gap-8[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 8);\n  }\n  :where(.space-y-1[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-1\\.5[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-2[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-3[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-4[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-6[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-8[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-x-1[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 1) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.space-x-2[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.space-x-3[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.space-x-4[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.space-x-12[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 12) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 12) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.divide-y[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-divide-y-reverse: 0;\n    border-bottom-style: var(--tw-border-style);\n    border-top-style: var(--tw-border-style);\n    border-top-width: calc(1px * var(--tw-divide-y-reverse));\n    border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  }\n  :where(.divide-gray-200[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    border-color: var(--color-gray-200);\n  }\n  .truncate[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .overflow-auto[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  .overflow-hidden[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n  .overflow-x-auto[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .overflow-y-auto[_ngcontent-%COMP%] {\n    overflow-y: auto;\n  }\n  .rounded[_ngcontent-%COMP%] {\n    border-radius: 0.25rem;\n  }\n  .rounded-2xl[_ngcontent-%COMP%] {\n    border-radius: var(--radius-2xl);\n  }\n  .rounded-\\__ph-0__[_ngcontent-%COMP%] {\n    border-radius: inherit;\n  }\n  .rounded-full[_ngcontent-%COMP%] {\n    border-radius: calc(infinity * 1px);\n  }\n  .rounded-lg[_ngcontent-%COMP%] {\n    border-radius: var(--radius-lg);\n  }\n  .rounded-md[_ngcontent-%COMP%] {\n    border-radius: var(--radius-md);\n  }\n  .rounded-xl[_ngcontent-%COMP%] {\n    border-radius: var(--radius-xl);\n  }\n  .rounded-b-2xl[_ngcontent-%COMP%] {\n    border-bottom-right-radius: var(--radius-2xl);\n    border-bottom-left-radius: var(--radius-2xl);\n  }\n  .\\!border[_ngcontent-%COMP%] {\n    border-style: var(--tw-border-style) !important;\n    border-width: 1px !important;\n  }\n  .border[_ngcontent-%COMP%] {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-2[_ngcontent-%COMP%] {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n  .border-t[_ngcontent-%COMP%] {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 1px;\n  }\n  .border-r[_ngcontent-%COMP%] {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 1px;\n  }\n  .border-b[_ngcontent-%COMP%] {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n  .border-b-2[_ngcontent-%COMP%] {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 2px;\n  }\n  .border-dashed[_ngcontent-%COMP%] {\n    --tw-border-style: dashed;\n    border-style: dashed;\n  }\n  .\\!border-blue-200[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-200) !important;\n  }\n  .border-amber-200[_ngcontent-%COMP%] {\n    border-color: var(--color-amber-200);\n  }\n  .border-blue-100[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-100);\n  }\n  .border-blue-200[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-200);\n  }\n  .border-blue-300[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-300);\n  }\n  .border-blue-400[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-400);\n  }\n  .border-blue-500[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-500);\n  }\n  .border-blue-600[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-600);\n  }\n  .border-cyan-100[_ngcontent-%COMP%] {\n    border-color: var(--color-cyan-100);\n  }\n  .border-gray-100[_ngcontent-%COMP%] {\n    border-color: var(--color-gray-100);\n  }\n  .border-gray-200[_ngcontent-%COMP%] {\n    border-color: var(--color-gray-200);\n  }\n  .border-gray-300[_ngcontent-%COMP%] {\n    border-color: var(--color-gray-300);\n  }\n  .border-gray-600[_ngcontent-%COMP%] {\n    border-color: var(--color-gray-600);\n  }\n  .border-green-100[_ngcontent-%COMP%] {\n    border-color: var(--color-green-100);\n  }\n  .border-green-200[_ngcontent-%COMP%] {\n    border-color: var(--color-green-200);\n  }\n  .border-indigo-600[_ngcontent-%COMP%] {\n    border-color: var(--color-indigo-600);\n  }\n  .border-orange-100[_ngcontent-%COMP%] {\n    border-color: var(--color-orange-100);\n  }\n  .border-orange-200[_ngcontent-%COMP%] {\n    border-color: var(--color-orange-200);\n  }\n  .border-purple-100[_ngcontent-%COMP%] {\n    border-color: var(--color-purple-100);\n  }\n  .border-red-100[_ngcontent-%COMP%] {\n    border-color: var(--color-red-100);\n  }\n  .border-red-200[_ngcontent-%COMP%] {\n    border-color: var(--color-red-200);\n  }\n  .border-red-300[_ngcontent-%COMP%] {\n    border-color: var(--color-red-300);\n  }\n  .border-red-500[_ngcontent-%COMP%] {\n    border-color: var(--color-red-500);\n  }\n  .border-transparent[_ngcontent-%COMP%] {\n    border-color: transparent;\n  }\n  .border-white[_ngcontent-%COMP%] {\n    border-color: var(--color-white);\n  }\n  .border-yellow-200[_ngcontent-%COMP%] {\n    border-color: var(--color-yellow-200);\n  }\n  .border-t-blue-600[_ngcontent-%COMP%] {\n    border-top-color: var(--color-blue-600);\n  }\n  .border-t-transparent[_ngcontent-%COMP%] {\n    border-top-color: transparent;\n  }\n  .\\!bg-blue-600[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-600) !important;\n  }\n  .bg-\\__ph-0__[_ngcontent-%COMP%] {\n    background-color: #00000085;\n  }\n  .bg-\\__ph-0__[_ngcontent-%COMP%] {\n    background-color: #e0edff;\n  }\n  .bg-amber-50[_ngcontent-%COMP%] {\n    background-color: var(--color-amber-50);\n  }\n  .bg-black[_ngcontent-%COMP%] {\n    background-color: var(--color-black);\n  }\n  .bg-black\\/30[_ngcontent-%COMP%] {\n    background-color: color-mix(in srgb, #000 30%, transparent);\n  }\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/30[_ngcontent-%COMP%] {\n      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);\n    }\n  }\n  .bg-blue-50[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-50);\n  }\n  .bg-blue-100[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-100);\n  }\n  .bg-blue-200[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-200);\n  }\n  .bg-blue-400[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-400);\n  }\n  .bg-blue-500[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-500);\n  }\n  .bg-blue-600[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-600);\n  }\n  .bg-cyan-50[_ngcontent-%COMP%] {\n    background-color: var(--color-cyan-50);\n  }\n  .bg-cyan-100[_ngcontent-%COMP%] {\n    background-color: var(--color-cyan-100);\n  }\n  .bg-emerald-500[_ngcontent-%COMP%] {\n    background-color: var(--color-emerald-500);\n  }\n  .bg-gray-50[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-50);\n  }\n  .bg-gray-100[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-100);\n  }\n  .bg-gray-200[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-200);\n  }\n  .bg-gray-300[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-300);\n  }\n  .bg-gray-400[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-400);\n  }\n  .bg-gray-600[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-600);\n  }\n  .bg-green-50[_ngcontent-%COMP%] {\n    background-color: var(--color-green-50);\n  }\n  .bg-green-100[_ngcontent-%COMP%] {\n    background-color: var(--color-green-100);\n  }\n  .bg-green-500[_ngcontent-%COMP%] {\n    background-color: var(--color-green-500);\n  }\n  .bg-green-600[_ngcontent-%COMP%] {\n    background-color: var(--color-green-600);\n  }\n  .bg-indigo-50[_ngcontent-%COMP%] {\n    background-color: var(--color-indigo-50);\n  }\n  .bg-indigo-100[_ngcontent-%COMP%] {\n    background-color: var(--color-indigo-100);\n  }\n  .bg-indigo-600[_ngcontent-%COMP%] {\n    background-color: var(--color-indigo-600);\n  }\n  .bg-orange-50[_ngcontent-%COMP%] {\n    background-color: var(--color-orange-50);\n  }\n  .bg-orange-100[_ngcontent-%COMP%] {\n    background-color: var(--color-orange-100);\n  }\n  .bg-orange-500[_ngcontent-%COMP%] {\n    background-color: var(--color-orange-500);\n  }\n  .bg-orange-600[_ngcontent-%COMP%] {\n    background-color: var(--color-orange-600);\n  }\n  .bg-pink-100[_ngcontent-%COMP%] {\n    background-color: var(--color-pink-100);\n  }\n  .bg-purple-50[_ngcontent-%COMP%] {\n    background-color: var(--color-purple-50);\n  }\n  .bg-purple-100[_ngcontent-%COMP%] {\n    background-color: var(--color-purple-100);\n  }\n  .bg-purple-500[_ngcontent-%COMP%] {\n    background-color: var(--color-purple-500);\n  }\n  .bg-purple-600[_ngcontent-%COMP%] {\n    background-color: var(--color-purple-600);\n  }\n  .bg-red-50[_ngcontent-%COMP%] {\n    background-color: var(--color-red-50);\n  }\n  .bg-red-100[_ngcontent-%COMP%] {\n    background-color: var(--color-red-100);\n  }\n  .bg-red-500[_ngcontent-%COMP%] {\n    background-color: var(--color-red-500);\n  }\n  .bg-red-600[_ngcontent-%COMP%] {\n    background-color: var(--color-red-600);\n  }\n  .bg-teal-50[_ngcontent-%COMP%] {\n    background-color: var(--color-teal-50);\n  }\n  .bg-transparent[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n  .bg-white[_ngcontent-%COMP%] {\n    background-color: var(--color-white);\n  }\n  .bg-white\\/20[_ngcontent-%COMP%] {\n    background-color: color-mix(in srgb, #fff 20%, transparent);\n  }\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-white\\/20[_ngcontent-%COMP%] {\n      background-color: color-mix(in oklab, var(--color-white) 20%, transparent);\n    }\n  }\n  .bg-yellow-50[_ngcontent-%COMP%] {\n    background-color: var(--color-yellow-50);\n  }\n  .bg-yellow-100[_ngcontent-%COMP%] {\n    background-color: var(--color-yellow-100);\n  }\n  .bg-yellow-500[_ngcontent-%COMP%] {\n    background-color: var(--color-yellow-500);\n  }\n  .bg-gradient-to-br[_ngcontent-%COMP%] {\n    --tw-gradient-position: to bottom right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-r[_ngcontent-%COMP%] {\n    --tw-gradient-position: to right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .from-blue-50[_ngcontent-%COMP%] {\n    --tw-gradient-from: var(--color-blue-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-blue-500[_ngcontent-%COMP%] {\n    --tw-gradient-from: var(--color-blue-500);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-blue-600[_ngcontent-%COMP%] {\n    --tw-gradient-from: var(--color-blue-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-blue-600[_ngcontent-%COMP%] {\n    --tw-gradient-to: var(--color-blue-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-indigo-50[_ngcontent-%COMP%] {\n    --tw-gradient-to: var(--color-indigo-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-purple-600[_ngcontent-%COMP%] {\n    --tw-gradient-to: var(--color-purple-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .object-contain[_ngcontent-%COMP%] {\n    object-fit: contain;\n  }\n  .object-cover[_ngcontent-%COMP%] {\n    object-fit: cover;\n  }\n  .p-1[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 1);\n  }\n  .p-1\\.5[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 1.5);\n  }\n  .p-2[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 2);\n  }\n  .p-2\\.5[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 2.5);\n  }\n  .p-3[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 3);\n  }\n  .p-4[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 4);\n  }\n  .p-5[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 5);\n  }\n  .p-6[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 6);\n  }\n  .p-8[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 8);\n  }\n  .p-12[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 12);\n  }\n  .px-2[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n  .px-2\\.5[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 2.5);\n  }\n  .px-3[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 3);\n  }\n  .px-4[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n  .px-5[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 5);\n  }\n  .px-6[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n  .px-8[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 8);\n  }\n  .py-0[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 0);\n  }\n  .py-0\\.5[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 0.5);\n  }\n  .py-1[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 1);\n  }\n  .py-1\\.5[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 1.5);\n  }\n  .py-2[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 2);\n  }\n  .py-2\\.5[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 2.5);\n  }\n  .py-3[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 3);\n  }\n  .py-4[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 4);\n  }\n  .py-5[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 5);\n  }\n  .py-6[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 6);\n  }\n  .py-8[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 8);\n  }\n  .py-12[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 12);\n  }\n  .py-20[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 20);\n  }\n  .pt-0[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 0);\n  }\n  .pt-2[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 2);\n  }\n  .pt-3[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 3);\n  }\n  .pt-4[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 4);\n  }\n  .pt-6[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 6);\n  }\n  .pt-8[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 8);\n  }\n  .pr-3[_ngcontent-%COMP%] {\n    padding-right: calc(var(--spacing) * 3);\n  }\n  .pr-4[_ngcontent-%COMP%] {\n    padding-right: calc(var(--spacing) * 4);\n  }\n  .pr-10[_ngcontent-%COMP%] {\n    padding-right: calc(var(--spacing) * 10);\n  }\n  .pb-2[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--spacing) * 2);\n  }\n  .pb-6[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--spacing) * 6);\n  }\n  .pb-8[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--spacing) * 8);\n  }\n  .pb-20[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--spacing) * 20);\n  }\n  .pl-3[_ngcontent-%COMP%] {\n    padding-left: calc(var(--spacing) * 3);\n  }\n  .pl-10[_ngcontent-%COMP%] {\n    padding-left: calc(var(--spacing) * 10);\n  }\n  .text-center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .text-end[_ngcontent-%COMP%] {\n    text-align: end;\n  }\n  .text-left[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .text-right[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n  .text-start[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n  .align-middle[_ngcontent-%COMP%] {\n    vertical-align: middle;\n  }\n  .font-mono[_ngcontent-%COMP%] {\n    font-family: var(--font-mono);\n  }\n  .\\!text-xs[_ngcontent-%COMP%] {\n    font-size: var(--text-xs) !important;\n    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;\n  }\n  .text-2xl[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n    line-height: var(--tw-leading, var(--text-2xl--line-height));\n  }\n  .text-3xl[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n    line-height: var(--tw-leading, var(--text-3xl--line-height));\n  }\n  .text-4xl[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n    line-height: var(--tw-leading, var(--text-4xl--line-height));\n  }\n  .text-5xl[_ngcontent-%COMP%] {\n    font-size: var(--text-5xl);\n    line-height: var(--tw-leading, var(--text-5xl--line-height));\n  }\n  .text-base[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n  .text-lg[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n  }\n  .text-sm[_ngcontent-%COMP%] {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n  }\n  .text-xl[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n    line-height: var(--tw-leading, var(--text-xl--line-height));\n  }\n  .text-xs[_ngcontent-%COMP%] {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n  .text-\\__ph-0__[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .leading-5[_ngcontent-%COMP%] {\n    --tw-leading: calc(var(--spacing) * 5);\n    line-height: calc(var(--spacing) * 5);\n  }\n  .leading-none[_ngcontent-%COMP%] {\n    --tw-leading: 1;\n    line-height: 1;\n  }\n  .leading-relaxed[_ngcontent-%COMP%] {\n    --tw-leading: var(--leading-relaxed);\n    line-height: var(--leading-relaxed);\n  }\n  .leading-tight[_ngcontent-%COMP%] {\n    --tw-leading: var(--leading-tight);\n    line-height: var(--leading-tight);\n  }\n  .font-bold[_ngcontent-%COMP%] {\n    --tw-font-weight: var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n  .font-medium[_ngcontent-%COMP%] {\n    --tw-font-weight: var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n  .font-semibold[_ngcontent-%COMP%] {\n    --tw-font-weight: var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n  .tracking-tight[_ngcontent-%COMP%] {\n    --tw-tracking: var(--tracking-tight);\n    letter-spacing: var(--tracking-tight);\n  }\n  .tracking-wide[_ngcontent-%COMP%] {\n    --tw-tracking: var(--tracking-wide);\n    letter-spacing: var(--tracking-wide);\n  }\n  .tracking-wider[_ngcontent-%COMP%] {\n    --tw-tracking: var(--tracking-wider);\n    letter-spacing: var(--tracking-wider);\n  }\n  .break-all[_ngcontent-%COMP%] {\n    word-break: break-all;\n  }\n  .whitespace-nowrap[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .text-amber-600[_ngcontent-%COMP%] {\n    color: var(--color-amber-600);\n  }\n  .text-amber-700[_ngcontent-%COMP%] {\n    color: var(--color-amber-700);\n  }\n  .text-amber-800[_ngcontent-%COMP%] {\n    color: var(--color-amber-800);\n  }\n  .text-blue-100[_ngcontent-%COMP%] {\n    color: var(--color-blue-100);\n  }\n  .text-blue-200[_ngcontent-%COMP%] {\n    color: var(--color-blue-200);\n  }\n  .text-blue-400[_ngcontent-%COMP%] {\n    color: var(--color-blue-400);\n  }\n  .text-blue-500[_ngcontent-%COMP%] {\n    color: var(--color-blue-500);\n  }\n  .text-blue-600[_ngcontent-%COMP%] {\n    color: var(--color-blue-600);\n  }\n  .text-blue-700[_ngcontent-%COMP%] {\n    color: var(--color-blue-700);\n  }\n  .text-blue-800[_ngcontent-%COMP%] {\n    color: var(--color-blue-800);\n  }\n  .text-blue-900[_ngcontent-%COMP%] {\n    color: var(--color-blue-900);\n  }\n  .text-cyan-400[_ngcontent-%COMP%] {\n    color: var(--color-cyan-400);\n  }\n  .text-cyan-600[_ngcontent-%COMP%] {\n    color: var(--color-cyan-600);\n  }\n  .text-gray-300[_ngcontent-%COMP%] {\n    color: var(--color-gray-300);\n  }\n  .text-gray-400[_ngcontent-%COMP%] {\n    color: var(--color-gray-400);\n  }\n  .text-gray-500[_ngcontent-%COMP%] {\n    color: var(--color-gray-500);\n  }\n  .text-gray-600[_ngcontent-%COMP%] {\n    color: var(--color-gray-600);\n  }\n  .text-gray-700[_ngcontent-%COMP%] {\n    color: var(--color-gray-700);\n  }\n  .text-gray-800[_ngcontent-%COMP%] {\n    color: var(--color-gray-800);\n  }\n  .text-gray-900[_ngcontent-%COMP%] {\n    color: var(--color-gray-900);\n  }\n  .text-green-400[_ngcontent-%COMP%] {\n    color: var(--color-green-400);\n  }\n  .text-green-500[_ngcontent-%COMP%] {\n    color: var(--color-green-500);\n  }\n  .text-green-600[_ngcontent-%COMP%] {\n    color: var(--color-green-600);\n  }\n  .text-green-700[_ngcontent-%COMP%] {\n    color: var(--color-green-700);\n  }\n  .text-green-800[_ngcontent-%COMP%] {\n    color: var(--color-green-800);\n  }\n  .text-green-900[_ngcontent-%COMP%] {\n    color: var(--color-green-900);\n  }\n  .text-indigo-500[_ngcontent-%COMP%] {\n    color: var(--color-indigo-500);\n  }\n  .text-indigo-600[_ngcontent-%COMP%] {\n    color: var(--color-indigo-600);\n  }\n  .text-orange-400[_ngcontent-%COMP%] {\n    color: var(--color-orange-400);\n  }\n  .text-orange-500[_ngcontent-%COMP%] {\n    color: var(--color-orange-500);\n  }\n  .text-orange-600[_ngcontent-%COMP%] {\n    color: var(--color-orange-600);\n  }\n  .text-orange-700[_ngcontent-%COMP%] {\n    color: var(--color-orange-700);\n  }\n  .text-orange-800[_ngcontent-%COMP%] {\n    color: var(--color-orange-800);\n  }\n  .text-orange-900[_ngcontent-%COMP%] {\n    color: var(--color-orange-900);\n  }\n  .text-pink-600[_ngcontent-%COMP%] {\n    color: var(--color-pink-600);\n  }\n  .text-pink-800[_ngcontent-%COMP%] {\n    color: var(--color-pink-800);\n  }\n  .text-purple-400[_ngcontent-%COMP%] {\n    color: var(--color-purple-400);\n  }\n  .text-purple-500[_ngcontent-%COMP%] {\n    color: var(--color-purple-500);\n  }\n  .text-purple-600[_ngcontent-%COMP%] {\n    color: var(--color-purple-600);\n  }\n  .text-purple-700[_ngcontent-%COMP%] {\n    color: var(--color-purple-700);\n  }\n  .text-purple-800[_ngcontent-%COMP%] {\n    color: var(--color-purple-800);\n  }\n  .text-red-400[_ngcontent-%COMP%] {\n    color: var(--color-red-400);\n  }\n  .text-red-500[_ngcontent-%COMP%] {\n    color: var(--color-red-500);\n  }\n  .text-red-600[_ngcontent-%COMP%] {\n    color: var(--color-red-600);\n  }\n  .text-red-700[_ngcontent-%COMP%] {\n    color: var(--color-red-700);\n  }\n  .text-red-800[_ngcontent-%COMP%] {\n    color: var(--color-red-800);\n  }\n  .text-slate-600[_ngcontent-%COMP%] {\n    color: var(--color-slate-600);\n  }\n  .text-teal-600[_ngcontent-%COMP%] {\n    color: var(--color-teal-600);\n  }\n  .text-white[_ngcontent-%COMP%] {\n    color: var(--color-white);\n  }\n  .text-yellow-400[_ngcontent-%COMP%] {\n    color: var(--color-yellow-400);\n  }\n  .text-yellow-500[_ngcontent-%COMP%] {\n    color: var(--color-yellow-500);\n  }\n  .text-yellow-600[_ngcontent-%COMP%] {\n    color: var(--color-yellow-600);\n  }\n  .text-yellow-700[_ngcontent-%COMP%] {\n    color: var(--color-yellow-700);\n  }\n  .text-yellow-800[_ngcontent-%COMP%] {\n    color: var(--color-yellow-800);\n  }\n  .capitalize[_ngcontent-%COMP%] {\n    text-transform: capitalize;\n  }\n  .lowercase[_ngcontent-%COMP%] {\n    text-transform: lowercase;\n  }\n  .uppercase[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n  }\n  .italic[_ngcontent-%COMP%] {\n    font-style: italic;\n  }\n  .ordinal[_ngcontent-%COMP%] {\n    --tw-ordinal: ordinal;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .ordinal\\![_ngcontent-%COMP%] {\n    --tw-ordinal: ordinal !important;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,) !important;\n  }\n  .line-through[_ngcontent-%COMP%] {\n    text-decoration-line: line-through;\n  }\n  .overline[_ngcontent-%COMP%] {\n    text-decoration-line: overline;\n  }\n  .underline[_ngcontent-%COMP%] {\n    text-decoration-line: underline;\n  }\n  .placeholder-gray-400[_ngcontent-%COMP%]::placeholder {\n    color: var(--color-gray-400);\n  }\n  .opacity-0[_ngcontent-%COMP%] {\n    opacity: 0%;\n  }\n  .opacity-25[_ngcontent-%COMP%] {\n    opacity: 25%;\n  }\n  .opacity-50[_ngcontent-%COMP%] {\n    opacity: 50%;\n  }\n  .opacity-60[_ngcontent-%COMP%] {\n    opacity: 60%;\n  }\n  .opacity-75[_ngcontent-%COMP%] {\n    opacity: 75%;\n  }\n  .opacity-80[_ngcontent-%COMP%] {\n    opacity: 80%;\n  }\n  .shadow[_ngcontent-%COMP%] {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-2xl[_ngcontent-%COMP%] {\n    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-lg[_ngcontent-%COMP%] {\n    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-md[_ngcontent-%COMP%] {\n    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-sm[_ngcontent-%COMP%] {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-xl[_ngcontent-%COMP%] {\n    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .ring-2[_ngcontent-%COMP%] {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .ring-blue-500[_ngcontent-%COMP%] {\n    --tw-ring-color: var(--color-blue-500);\n  }\n  .outline[_ngcontent-%COMP%] {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .blur[_ngcontent-%COMP%] {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .grayscale[_ngcontent-%COMP%] {\n    --tw-grayscale: grayscale(100%);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .filter[_ngcontent-%COMP%] {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .filter\\![_ngcontent-%COMP%] {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,) !important;\n  }\n  .transition[_ngcontent-%COMP%] {\n    transition-property:\n      color,\n      background-color,\n      border-color,\n      outline-color,\n      text-decoration-color,\n      fill,\n      stroke,\n      --tw-gradient-from,\n      --tw-gradient-via,\n      --tw-gradient-to,\n      opacity,\n      box-shadow,\n      transform,\n      translate,\n      scale,\n      rotate,\n      filter,\n      -webkit-backdrop-filter,\n      backdrop-filter,\n      display,\n      content-visibility,\n      overlay,\n      pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-all[_ngcontent-%COMP%] {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-colors[_ngcontent-%COMP%] {\n    transition-property:\n      color,\n      background-color,\n      border-color,\n      outline-color,\n      text-decoration-color,\n      fill,\n      stroke,\n      --tw-gradient-from,\n      --tw-gradient-via,\n      --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-opacity[_ngcontent-%COMP%] {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-shadow[_ngcontent-%COMP%] {\n    transition-property: box-shadow;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-transform[_ngcontent-%COMP%] {\n    transition-property:\n      transform,\n      translate,\n      scale,\n      rotate;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .delay-1[_ngcontent-%COMP%] {\n    transition-delay: 1ms;\n  }\n  .delay-2[_ngcontent-%COMP%] {\n    transition-delay: 2ms;\n  }\n  .duration-200[_ngcontent-%COMP%] {\n    --tw-duration: 200ms;\n    transition-duration: 200ms;\n  }\n  .duration-300[_ngcontent-%COMP%] {\n    --tw-duration: 300ms;\n    transition-duration: 300ms;\n  }\n  .duration-400[_ngcontent-%COMP%] {\n    --tw-duration: 400ms;\n    transition-duration: 400ms;\n  }\n  .ease-in[_ngcontent-%COMP%] {\n    --tw-ease: var(--ease-in);\n    transition-timing-function: var(--ease-in);\n  }\n  .ease-in-out[_ngcontent-%COMP%] {\n    --tw-ease: var(--ease-in-out);\n    transition-timing-function: var(--ease-in-out);\n  }\n  .ease-out[_ngcontent-%COMP%] {\n    --tw-ease: var(--ease-out);\n    transition-timing-function: var(--ease-out);\n  }\n  .select-none[_ngcontent-%COMP%] {\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  @media (hover: hover) {\n    .group-hover\\:scale-110[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      --tw-scale-x: 110%;\n      --tw-scale-y: 110%;\n      --tw-scale-z: 110%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:bg-blue-200[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      background-color: var(--color-blue-200);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:text-blue-600[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      color: var(--color-blue-600);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:text-blue-700[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      color: var(--color-blue-700);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:opacity-50[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      opacity: 50%;\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:opacity-75[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      opacity: 75%;\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:opacity-100[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      opacity: 100%;\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\/title\\:text-blue-600[_ngcontent-%COMP%]:is(:where(.group\\/title):hover *) {\n      color: var(--color-blue-600);\n    }\n  }\n  .peer-checked\\:bg-blue-600[_ngcontent-%COMP%]:is(:where(.peer):checked ~ *) {\n    background-color: var(--color-blue-600);\n  }\n  .peer-focus\\:ring-4[_ngcontent-%COMP%]:is(:where(.peer):focus ~ *) {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .peer-focus\\:ring-blue-300[_ngcontent-%COMP%]:is(:where(.peer):focus ~ *) {\n    --tw-ring-color: var(--color-blue-300);\n  }\n  .peer-focus\\:outline-none[_ngcontent-%COMP%]:is(:where(.peer):focus ~ *) {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .after\\:absolute[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    position: absolute;\n  }\n  .after\\:top-\\__ph-0__[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    top: 2px;\n  }\n  .after\\:left-\\__ph-0__[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    left: 2px;\n  }\n  .after\\:h-5[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    height: calc(var(--spacing) * 5);\n  }\n  .after\\:w-5[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    width: calc(var(--spacing) * 5);\n  }\n  .after\\:rounded-full[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    border-radius: calc(infinity * 1px);\n  }\n  .after\\:border[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .after\\:border-gray-300[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    border-color: var(--color-gray-300);\n  }\n  .after\\:bg-white[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    background-color: var(--color-white);\n  }\n  .after\\:transition-all[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .after\\:content-\\__ph-0__[_ngcontent-%COMP%]::after {\n    --tw-content: "";\n    content: var(--tw-content);\n  }\n  .peer-checked\\:after\\:translate-x-full[_ngcontent-%COMP%]:is(:where(.peer):checked ~ *)::after {\n    content: var(--tw-content);\n    --tw-translate-x: 100%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .peer-checked\\:after\\:border-white[_ngcontent-%COMP%]:is(:where(.peer):checked ~ *)::after {\n    content: var(--tw-content);\n    border-color: var(--color-white);\n  }\n  .last\\:border-b-0[_ngcontent-%COMP%]:last-child {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 0px;\n  }\n  @media (hover: hover) {\n    .hover\\:scale-105[_ngcontent-%COMP%]:hover {\n      --tw-scale-x: 105%;\n      --tw-scale-y: 105%;\n      --tw-scale-z: 105%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:scale-110[_ngcontent-%COMP%]:hover {\n      --tw-scale-x: 110%;\n      --tw-scale-y: 110%;\n      --tw-scale-z: 110%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-blue-300[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-blue-300);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-blue-400[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-blue-400);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-blue-500[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-blue-500);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-gray-300[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-gray-300);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-gray-400[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-gray-400);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-black[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-black);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-blue-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-100[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-blue-100);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-200[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-blue-200);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-blue-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-100[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-100);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-200[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-200);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-300[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-300);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-green-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-green-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-green-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-green-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-indigo-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-indigo-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-indigo-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-indigo-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-orange-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-orange-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-orange-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-orange-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-purple-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-purple-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-purple-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-purple-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-red-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-red-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-red-100[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-red-100);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-red-600[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-red-600);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-red-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-red-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:from-blue-700[_ngcontent-%COMP%]:hover {\n      --tw-gradient-from: var(--color-blue-700);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:to-purple-700[_ngcontent-%COMP%]:hover {\n      --tw-gradient-to: var(--color-purple-700);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-500[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-500);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-600[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-600);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-700[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-800[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-800);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-900[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-900);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-gray-300[_ngcontent-%COMP%]:hover {\n      color: var(--color-gray-300);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-gray-600[_ngcontent-%COMP%]:hover {\n      color: var(--color-gray-600);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-gray-700[_ngcontent-%COMP%]:hover {\n      color: var(--color-gray-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-gray-800[_ngcontent-%COMP%]:hover {\n      color: var(--color-gray-800);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-green-700[_ngcontent-%COMP%]:hover {\n      color: var(--color-green-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-green-900[_ngcontent-%COMP%]:hover {\n      color: var(--color-green-900);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-orange-900[_ngcontent-%COMP%]:hover {\n      color: var(--color-orange-900);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-red-600[_ngcontent-%COMP%]:hover {\n      color: var(--color-red-600);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-red-700[_ngcontent-%COMP%]:hover {\n      color: var(--color-red-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-red-900[_ngcontent-%COMP%]:hover {\n      color: var(--color-red-900);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:no-underline[_ngcontent-%COMP%]:hover {\n      text-decoration-line: none;\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:underline[_ngcontent-%COMP%]:hover {\n      text-decoration-line: underline;\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:shadow-md[_ngcontent-%COMP%]:hover {\n      --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n      box-shadow:\n        var(--tw-inset-shadow),\n        var(--tw-inset-ring-shadow),\n        var(--tw-ring-offset-shadow),\n        var(--tw-ring-shadow),\n        var(--tw-shadow);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:shadow-sm[_ngcontent-%COMP%]:hover {\n      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n      box-shadow:\n        var(--tw-inset-shadow),\n        var(--tw-inset-ring-shadow),\n        var(--tw-ring-offset-shadow),\n        var(--tw-ring-shadow),\n        var(--tw-shadow);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:shadow-xl[_ngcontent-%COMP%]:hover {\n      --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n      box-shadow:\n        var(--tw-inset-shadow),\n        var(--tw-inset-ring-shadow),\n        var(--tw-ring-offset-shadow),\n        var(--tw-ring-shadow),\n        var(--tw-shadow);\n    }\n  }\n  .focus\\:border-blue-500[_ngcontent-%COMP%]:focus {\n    border-color: var(--color-blue-500);\n  }\n  .focus\\:border-indigo-500[_ngcontent-%COMP%]:focus {\n    border-color: var(--color-indigo-500);\n  }\n  .focus\\:border-red-500[_ngcontent-%COMP%]:focus {\n    border-color: var(--color-red-500);\n  }\n  .focus\\:border-transparent[_ngcontent-%COMP%]:focus {\n    border-color: transparent;\n  }\n  .focus\\:bg-blue-50[_ngcontent-%COMP%]:focus {\n    background-color: var(--color-blue-50);\n  }\n  .focus\\:ring-2[_ngcontent-%COMP%]:focus {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .focus\\:ring-blue-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-blue-500);\n  }\n  .focus\\:ring-gray-300[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-gray-300);\n  }\n  .focus\\:ring-gray-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-gray-500);\n  }\n  .focus\\:ring-green-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-green-500);\n  }\n  .focus\\:ring-indigo-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-indigo-500);\n  }\n  .focus\\:ring-orange-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-orange-500);\n  }\n  .focus\\:ring-red-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-red-500);\n  }\n  .focus\\:ring-offset-2[_ngcontent-%COMP%]:focus {\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n  .focus\\:outline-none[_ngcontent-%COMP%]:focus {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .enabled\\:text-gray-700[_ngcontent-%COMP%]:enabled {\n    color: var(--color-gray-700);\n  }\n  @media (hover: hover) {\n    .enabled\\:hover\\:bg-gray-50[_ngcontent-%COMP%]:enabled:hover {\n      background-color: var(--color-gray-50);\n    }\n  }\n  .disabled\\:transform-none[_ngcontent-%COMP%]:disabled {\n    transform: none;\n  }\n  .disabled\\:cursor-not-allowed[_ngcontent-%COMP%]:disabled {\n    cursor: not-allowed;\n  }\n  .disabled\\:bg-gray-100[_ngcontent-%COMP%]:disabled {\n    background-color: var(--color-gray-100);\n  }\n  .disabled\\:opacity-50[_ngcontent-%COMP%]:disabled {\n    opacity: 50%;\n  }\n  @media (width >= 40rem) {\n    .sm\\:mb-0[_ngcontent-%COMP%] {\n      margin-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:block[_ngcontent-%COMP%] {\n      display: block;\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:w-64[_ngcontent-%COMP%] {\n      width: calc(var(--spacing) * 64);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:grid-cols-2[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:flex-row[_ngcontent-%COMP%] {\n      flex-direction: row;\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:items-center[_ngcontent-%COMP%] {\n      align-items: center;\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:justify-between[_ngcontent-%COMP%] {\n      justify-content: space-between;\n    }\n  }\n  @media (width >= 40rem) {\n    :where(.sm\\:space-y-0[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  @media (width >= 40rem) {\n    :where(.sm\\:space-x-4[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:p-0[_ngcontent-%COMP%] {\n      padding: calc(var(--spacing) * 0);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:p-6[_ngcontent-%COMP%] {\n      padding: calc(var(--spacing) * 6);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:px-6[_ngcontent-%COMP%] {\n      padding-inline: calc(var(--spacing) * 6);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:text-left[_ngcontent-%COMP%] {\n      text-align: left;\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:text-sm[_ngcontent-%COMP%] {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:col-span-2[_ngcontent-%COMP%] {\n      grid-column: span 2 / span 2;\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:mt-0[_ngcontent-%COMP%] {\n      margin-top: calc(var(--spacing) * 0);\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:w-80[_ngcontent-%COMP%] {\n      width: calc(var(--spacing) * 80);\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:w-100[_ngcontent-%COMP%] {\n      width: calc(var(--spacing) * 100);\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:grid-cols-2[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:grid-cols-3[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:grid-cols-4[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:grid-cols-5[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(5, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:flex-row[_ngcontent-%COMP%] {\n      flex-direction: row;\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:items-center[_ngcontent-%COMP%] {\n      align-items: center;\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:justify-between[_ngcontent-%COMP%] {\n      justify-content: space-between;\n    }\n  }\n  @media (width >= 48rem) {\n    :where(.md\\:space-y-0[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  @media (width >= 48rem) {\n    :where(.md\\:space-x-3[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:col-span-2[_ngcontent-%COMP%] {\n      grid-column: span 2 / span 2;\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:grid-cols-3[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:grid-cols-4[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:grid-cols-5[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(5, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:grid-cols-6[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(6, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:px-8[_ngcontent-%COMP%] {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  @media (width >= 80rem) {\n    .xl\\:col-span-1[_ngcontent-%COMP%] {\n      grid-column: span 1 / span 1;\n    }\n  }\n  @media (width >= 80rem) {\n    .xl\\:col-span-2[_ngcontent-%COMP%] {\n      grid-column: span 2 / span 2;\n    }\n  }\n  @media (width >= 80rem) {\n    .xl\\:grid-cols-4[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n.plan-list-checkbox[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  background-color: #fff;\n  border: 2px solid #60a5fa;\n  border-radius: 0.375rem;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n.plan-list-checkbox[_ngcontent-%COMP%]:checked {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n.plan-list-checkbox[_ngcontent-%COMP%]:checked::after {\n  content: "";\n  position: absolute;\n  width: 0.3rem;\n  height: 0.6rem;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -60%) rotate(45deg);\n}\n.plan-list-checkbox[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #93c5fd;\n}\n.generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: var(--radius-xl);\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--color-gray-200);\n  background-color: var(--color-white);\n  padding-inline: calc(var(--spacing) * 4);\n  padding-block: calc(var(--spacing) * 2);\n  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n}\n.generic-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n:where(.generic-dropdown[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n  --tw-space-x-reverse: 0;\n  margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));\n  margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));\n}\n.generic-dropdown[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  margin-left: calc(var(--spacing) * 2);\n  height: calc(var(--spacing) * 4);\n  width: calc(var(--spacing) * 4);\n  transition-property:\n    transform,\n    translate,\n    scale,\n    rotate;\n  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n  transition-duration: var(--tw-duration, var(--default-transition-duration));\n}\n.generic-dropdown[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: calc(var(--spacing) * 0);\n  z-index: 50;\n  margin-top: calc(var(--spacing) * 1);\n  width: calc(var(--spacing) * 56);\n  border-radius: var(--radius-lg);\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--color-gray-200);\n  background-color: var(--color-white);\n  padding-block: calc(var(--spacing) * 1);\n  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n}\n.generic-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-inline: calc(var(--spacing) * 3);\n  padding-block: calc(var(--spacing) * 2);\n  text-align: left;\n}\n@media (hover: hover) {\n  .generic-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-gray-50);\n  }\n}\n.generic-dropdown[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.generic-dropdown[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%] {\n  --tw-font-weight: var(--font-weight-medium);\n  font-weight: var(--font-weight-medium);\n}\n.generic-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding-inline: calc(var(--spacing) * 3);\n  padding-block: calc(var(--spacing) * 2);\n  font-size: var(--text-xs);\n  line-height: var(--tw-leading, var(--text-xs--line-height));\n  color: var(--color-gray-500);\n}\n.plans-page[_ngcontent-%COMP%] {\n  padding: calc(var(--spacing) * 6);\n}\n@property --tw-translate-x { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-translate-y { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-translate-z { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-rotate-x { syntax: "*"; inherits: false; }\n@property --tw-rotate-y { syntax: "*"; inherits: false; }\n@property --tw-rotate-z { syntax: "*"; inherits: false; }\n@property --tw-skew-x { syntax: "*"; inherits: false; }\n@property --tw-skew-y { syntax: "*"; inherits: false; }\n@property --tw-space-y-reverse { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-space-x-reverse { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-divide-y-reverse { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n@property --tw-gradient-position { syntax: "*"; inherits: false; }\n@property --tw-gradient-from { syntax: "<color>"; inherits: false; initial-value: #0000; }\n@property --tw-gradient-via { syntax: "<color>"; inherits: false; initial-value: #0000; }\n@property --tw-gradient-to { syntax: "<color>"; inherits: false; initial-value: #0000; }\n@property --tw-gradient-stops { syntax: "*"; inherits: false; }\n@property --tw-gradient-via-stops { syntax: "*"; inherits: false; }\n@property --tw-gradient-from-position { syntax: "<length-percentage>"; inherits: false; initial-value: 0%; }\n@property --tw-gradient-via-position { syntax: "<length-percentage>"; inherits: false; initial-value: 50%; }\n@property --tw-gradient-to-position { syntax: "<length-percentage>"; inherits: false; initial-value: 100%; }\n@property --tw-leading { syntax: "*"; inherits: false; }\n@property --tw-font-weight { syntax: "*"; inherits: false; }\n@property --tw-tracking { syntax: "*"; inherits: false; }\n@property --tw-ordinal { syntax: "*"; inherits: false; }\n@property --tw-slashed-zero { syntax: "*"; inherits: false; }\n@property --tw-numeric-figure { syntax: "*"; inherits: false; }\n@property --tw-numeric-spacing { syntax: "*"; inherits: false; }\n@property --tw-numeric-fraction { syntax: "*"; inherits: false; }\n@property --tw-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-shadow-alpha { syntax: "<percentage>"; inherits: false; initial-value: 100%; }\n@property --tw-inset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-inset-shadow-alpha { syntax: "<percentage>"; inherits: false; initial-value: 100%; }\n@property --tw-ring-color { syntax: "*"; inherits: false; }\n@property --tw-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-ring-color { syntax: "*"; inherits: false; }\n@property --tw-inset-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-ring-inset { syntax: "*"; inherits: false; }\n@property --tw-ring-offset-width { syntax: "<length>"; inherits: false; initial-value: 0px; }\n@property --tw-ring-offset-color { syntax: "*"; inherits: false; initial-value: #fff; }\n@property --tw-ring-offset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-outline-style { syntax: "*"; inherits: false; initial-value: solid; }\n@property --tw-blur { syntax: "*"; inherits: false; }\n@property --tw-brightness { syntax: "*"; inherits: false; }\n@property --tw-contrast { syntax: "*"; inherits: false; }\n@property --tw-grayscale { syntax: "*"; inherits: false; }\n@property --tw-hue-rotate { syntax: "*"; inherits: false; }\n@property --tw-invert { syntax: "*"; inherits: false; }\n@property --tw-opacity { syntax: "*"; inherits: false; }\n@property --tw-saturate { syntax: "*"; inherits: false; }\n@property --tw-sepia { syntax: "*"; inherits: false; }\n@property --tw-drop-shadow { syntax: "*"; inherits: false; }\n@property --tw-drop-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-drop-shadow-alpha { syntax: "<percentage>"; inherits: false; initial-value: 100%; }\n@property --tw-drop-shadow-size { syntax: "*"; inherits: false; }\n@property --tw-duration { syntax: "*"; inherits: false; }\n@property --tw-ease { syntax: "*"; inherits: false; }\n@property --tw-scale-x { syntax: "*"; inherits: false; initial-value: 1; }\n@property --tw-scale-y { syntax: "*"; inherits: false; initial-value: 1; }\n@property --tw-scale-z { syntax: "*"; inherits: false; initial-value: 1; }\n@property --tw-content { syntax: "*"; initial-value: ""; inherits: false; }\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@layer properties {\n  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {\n    *[_ngcontent-%COMP%], \n   [_ngcontent-%COMP%]::before, \n   [_ngcontent-%COMP%]::after, \n   [_ngcontent-%COMP%]::backdrop {\n      --tw-translate-x: 0;\n      --tw-translate-y: 0;\n      --tw-translate-z: 0;\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-space-y-reverse: 0;\n      --tw-space-x-reverse: 0;\n      --tw-divide-y-reverse: 0;\n      --tw-border-style: solid;\n      --tw-gradient-position: initial;\n      --tw-gradient-from: #0000;\n      --tw-gradient-via: #0000;\n      --tw-gradient-to: #0000;\n      --tw-gradient-stops: initial;\n      --tw-gradient-via-stops: initial;\n      --tw-gradient-from-position: 0%;\n      --tw-gradient-via-position: 50%;\n      --tw-gradient-to-position: 100%;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-ordinal: initial;\n      --tw-slashed-zero: initial;\n      --tw-numeric-figure: initial;\n      --tw-numeric-spacing: initial;\n      --tw-numeric-fraction: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-outline-style: solid;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-duration: initial;\n      --tw-ease: initial;\n      --tw-scale-x: 1;\n      --tw-scale-y: 1;\n      --tw-scale-z: 1;\n      --tw-content: "";\n    }\n  }\n}\n\n\n/*# sourceMappingURL=scheduled-page.component.css.map */', '\n\n.plan-card-checkbox[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #2563eb;\n  background-color: white;\n  border: 2px solid #60a5fa;\n  border-radius: 9999px;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:checked {\n  background-color: #60a5fa;\n  border-color: #60a5fa;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:checked::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 50%;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #93c5fd;\n}\n/*# sourceMappingURL=schedule-selector.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduledPageComponent, [{
    type: Component,
    args: [{ selector: "app-scheduled-page", standalone: true, imports: [CommonModule, FormsModule, ScheduleDialogComponent, MaintenanceDeleteConfirmationModalComponent, RouterLink], template: `<div class="plans-page min-h-screen bg-gray-50 p-6">\r
  <!-- Page Title and Subtitle -->\r
  <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Scheduled Maintenance Hub</h1>\r
      <p class="text-gray-600 text-base">View and manage upcoming preventive maintenance executions</p>\r
    </div>\r
  </div>\r
\r
  <!-- Summary Cards -->\r
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">\r
    <div\r
      class="rounded-xl bg-blue-50 border border-blue-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Total Scheduled</span>\r
        <span class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor"\r
               class="size-5 text-blue-400">\r
            <path stroke-linecap="round" stroke-linejoin="round"\r
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>\r
          </svg>\r
\r
\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{ total }}</div>\r
      <span class="text-sm text-blue-600 font-medium mt-1">Items scheduled</span>\r
    </div>\r
\r
    <div\r
      class="rounded-xl bg-green-50 border border-green-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Upcoming (7d)</span>\r
        <span class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">\r
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
               stroke="currentColor"\r
               class="size-5 text-green-400">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>\r
          </svg>\r
\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{ upcoming }}</div>\r
      <span class="text-sm text-green-600 font-medium mt-1">Due soon</span>\r
    </div>\r
\r
    <div\r
      class="rounded-xl bg-orange-50 border border-orange-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">In Progress</span>\r
        <span class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">\r
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"\r
          class="size-5 text-orange-400">\r
      <path stroke-linecap="round" stroke-linejoin="round"\r
            d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"/>\r
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z"/>\r
    </svg>\r
\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{ inProgress }}</div>\r
      <span class="text-sm text-orange-600 font-medium mt-1">Currently running</span>\r
    </div>\r
\r
    <div\r
      class="rounded-xl bg-red-50 border border-red-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Overdue</span>\r
        <span class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">\r
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
              stroke="currentColor" class="size-5 text-red-400">\r
              <path stroke-linecap="round" stroke-linejoin="round"\r
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>\r
          </svg>\r
\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{ overdue }}</div>\r
      <span class="text-sm text-red-600 font-medium mt-1">Past due</span>\r
    </div>\r
  </div>\r
\r
  <!-- Filters and Search -->\r
  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">\r
    <!-- Search -->\r
    <div class="flex-1 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:space-x-3">\r
      <div class="relative w-full md:w-100">\r
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none"\r
             stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
        </svg>\r
        <input\r
          type="text"\r
          placeholder="Search by plan ID or status..."\r
          class="w-full pl-10 pr-4 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
          [(ngModel)]="searchQuery"\r
          (input)="onSearch()"/>\r
      </div>\r
    </div>\r
\r
    <!-- Right: Actions + View toggle -->\r
    <div class="flex items-center space-x-2 mt-3 md:mt-0">\r
      <button (click)="openDialog()"\r
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-sm transition-colors flex items-center cursor-pointer">\r
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
        </svg>\r
        Schedule Maintenance\r
      </button>\r
      <div class="flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">\r
        <button (click)="toggleViewType()"\r
                [class]="viewType === 'grid' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-600 border-transparent'"\r
                class="px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200">Grid\r
        </button>\r
        <button (click)="toggleViewType()"\r
                [class]="viewType === 'list' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-600 border-transparent'"\r
                class="px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200">List\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">\r
        <svg class="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor"\r
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">Loading Scheduled Items</h3>\r
      <p class="text-sm text-gray-500">Please wait while we fetch schedules...</p>\r
    </div>\r
  </div>\r
\r
  <!-- Empty state -->\r
  <div *ngIf="!loading && filtered.length === 0" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">\r
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5h6M5 9h14M7 13h10M9 17h6"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">No scheduled maintenance found</h3>\r
      <p class="text-sm text-gray-500">Create a plan and schedule maintenance to see items here.</p>\r
    </div>\r
  </div>\r
\r
  <!-- Selection Bar (when nothing is selected) -->\r
  <div class="w-full bg-white rounded-xl border border-gray-200 px-6 py-3 mb-4 flex items-center"\r
       *ngIf="viewType === 'grid' && selectedCount === 0 && !loading && filtered.length > 0">\r
    <button type="button" (click)="toggleSelectAllSchedules()"\r
            class="focus:outline-none inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-400 mr-3 transition-colors">\r
      <span class="w-3 h-3 rounded-full block bg-white transition-colors"></span>\r
    </button>\r
    <span class="font-semibold text-gray-900">Select all {{ filtered.length }} schedules</span>\r
  </div>\r
\r
  <!-- Action Bar (Selection) -->\r
  <div class="w-full bg-white rounded-xl border border-gray-200 px-6 py-3 mb-4 flex items-center justify-between"\r
       *ngIf="viewType === 'grid' && selectedCount > 0 && !loading">\r
    <div class="flex items-center space-x-4">\r
      <button type="button" (click)="toggleSelectAllSchedules()"\r
              class="focus:outline-none inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-400 mr-3 transition-colors"\r
              [class.bg-blue-100]="selectedCount === filtered.length">\r
        <span class="w-3 h-3 rounded-full block transition-colors"\r
              [class.bg-blue-400]="selectedCount === filtered.length"\r
              [class.bg-white]="selectedCount !== filtered.length"></span>\r
      </button>\r
      <span class="font-bold text-gray-900">{{ selectedCount }} schedule{{ selectedCount > 1 ? 's' : '' }}\r
        selected</span>\r
      <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm flex items-center font-medium">\r
        Selection Mode Active - Click cards to select\r
      </span>\r
    </div>\r
    <div class="flex items-center space-x-2">\r
      <button (click)="openDeleteModalForSelected()"\r
              class="bg-red-50 text-red-600 font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">\r
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
        </svg>\r
        Delete Selected\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Grid View -->\r
  <div *ngIf="viewType === 'grid' && !loading && filtered.length > 0"\r
       class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2">\r
    <div *ngFor="let s of filtered"\r
         class="rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col transition-all hover:shadow-md overflow-hidden"\r
         [class.border-blue-400]="isScheduleSelected(s)" (click)="toggleScheduleSelection(s)">\r
      <div class="relative bg-[#e0edff] h-24 flex items-center justify-between px-6">\r
        <div class="absolute left-2 !top-[10px] flex items-center">\r
          <input type="checkbox" class="plan-card-checkbox" [checked]="isScheduleSelected(s)"\r
                 (click)="$event.stopPropagation()" (change)="toggleScheduleSelection(s)"/>\r
        </div>\r
        <div>\r
          <a routerLink="/maintenance/scheduled/{{ s.maintenance_plan_id }}">\r
            <div class="font-semibold text-lg text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors">{{ getPlanName(s.maintenance_plan_id) }}</div>\r
          </a>\r
        </div>\r
        <div class="flex items-center gap-2">\r
          <span\r
            class="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{{ getScheduledName(s?.status) || 'Scheduled' }}</span>\r
          <div class="relative" (click)="$event.stopPropagation()">\r
            <button (click)="toggleMenu(s.id!)"\r
                    class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">\r
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <circle cx="12" cy="6" r="1.5"/>\r
                <circle cx="12" cy="12" r="1.5"/>\r
                <circle cx="12" cy="18" r="1.5"/>\r
              </svg>\r
            </button>\r
            <div *ngIf="isMenuOpen(s.id!)"\r
                 class="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">\r
              <button (click)="previewSchedule(s)"\r
                      class="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50">\r
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                </svg>\r
                <span class="text-sm text-gray-700">Preview</span>\r
              </button>\r
              <button (click)="editSchedule(s)"\r
                      class="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50">\r
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                </svg>\r
                <span class="text-sm text-gray-700">Edit</span>\r
              </button>\r
              <div class="border-t border-gray-100 my-1"></div>\r
              <button (click)="requestDelete(s)"\r
                      class="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-red-50 text-red-600">\r
                <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                </svg>\r
                <span class="text-sm font-medium">Delete</span>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="p-6">\r
        <div class="text-sm text-gray-700 mb-1"><span\r
          class="font-medium text-gray-600">Due:</span> {{ formatDate(s.due_date) }}\r
        </div>\r
        <div class="text-sm text-gray-700 mb-1"><span\r
          class="font-medium text-gray-600">Start:</span> {{ formatDate(s.start_date) }}\r
        </div>\r
        <div class="text-sm text-gray-700 mb-1 capitalize"><span\r
          class="font-medium text-gray-600">Priority:</span> {{ getPriorityName(s.priority_id) }}\r
        </div>\r
        <div class="text-sm text-gray-700"><span\r
          class="font-medium text-gray-600">Assets:</span> {{ getAssetNames(s.asset_ids) }}\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="viewType === 'list' && !loading && filtered.length > 0"\r
       class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">\r
    <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">\r
      <div class="flex items-center justify-between">\r
        <h3 class="text-lg font-medium text-gray-900">Scheduled Items</h3>\r
        <span class="text-sm text-gray-500">{{ filtered.length }} items</span>\r
      </div>\r
    </div>\r
    <div class="divide-y divide-gray-200">\r
      <div *ngFor="let s of filtered" class="px-6 py-4 hover:bg-gray-50 transition-colors">\r
        <div class="flex items-center justify-between">\r
          <div class="flex items-center gap-3">\r
            <input type="checkbox" class="plan-list-checkbox" [checked]="isScheduleSelected(s)"\r
                   (change)="toggleScheduleSelection(s)"/>\r
            <div>\r
              <div class="font-medium text-gray-900">{{ getPlanName(s.maintenance_plan_id) }}</div>\r
              <div class="text-sm text-gray-500">Status: {{getScheduledName(s?.status) || 'scheduled' }} \u2022\r
                Due: {{ formatDate(s.due_date) }} \u2022 Start: {{ formatDate(s.start_date) }}\r
              </div>\r
              <div class="text-sm text-gray-500">Assets: {{ getAssetNames(s.asset_ids) }}</div>\r
            </div>\r
          </div>\r
          <div class="flex items-center gap-2 capitalize">\r
            <div class="text-sm text-gray-700">Priority: {{ getPriorityName(s.priority_id) }}</div>\r
            <div class="relative">\r
              <button (click)="toggleMenu(s.id!)"\r
                      class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">\r
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <circle cx="12" cy="6" r="1.5"/>\r
                  <circle cx="12" cy="12" r="1.5"/>\r
                  <circle cx="12" cy="18" r="1.5"/>\r
                </svg>\r
              </button>\r
              <div *ngIf="isMenuOpen(s.id!)"\r
                   class="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">\r
                <button (click)="previewSchedule(s)"\r
                        class="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50">\r
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                  </svg>\r
                  <span class="text-sm text-gray-700">Preview</span>\r
                </button>\r
                <button (click)="editSchedule(s)"\r
                        class="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50">\r
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                  </svg>\r
                  <span class="text-sm text-gray-700">Edit</span>\r
                </button>\r
                <div class="border-t border-gray-100 my-1"></div>\r
                <button (click)="requestDelete(s)"\r
                        class="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-red-50 text-red-600">\r
                  <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                  </svg>\r
                  <span class="text-sm font-medium">Delete</span>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination (client-side per page) -->\r
  <div class="mt-8 flex items-center justify-between">\r
    <div class="flex items-center space-x-2">\r
      <span class="text-sm text-gray-700">Show:</span>\r
      <select class="border border-gray-300 rounded-md px-2 py-1 text-sm" (change)="onShowChange($event)">\r
        <option value="10">10</option>\r
        <option value="20" selected>20</option>\r
        <option value="50">50</option>\r
        <option value="100">100</option>\r
      </select>\r
      <span class="text-sm text-gray-700">per page</span>\r
    </div>\r
    <div class="text-sm text-gray-700">\r
      Showing 1 - {{ filtered.length }} of {{ filtered.length }} entries\r
    </div>\r
  </div>\r
  <app-schedule-dialog [isOpen]="isDialogOpen" [editMode]="editMode" [scheduleToEdit]="scheduleToEdit"\r
                       (closed)="onDialogClosed()" (created)="onCreated()"\r
                       (updated)="onCreated()"></app-schedule-dialog>\r
\r
  <app-maintenance-delete-confirmation-modal\r
    [isOpen]="showDeleteModal"\r
    [selectedCount]="selectedCount || 1"\r
    [entitySingular]="'Maintenance Schedule'"\r
    [entityPlural]="'Maintenance Schedules'"\r
    [title]="'Delete Selected Maintenance Schedule'"\r
    (closeModal)="closeDeleteModal()"\r
    (confirmDelete)="confirmDelete($event)">\r
  </app-maintenance-delete-confirmation-modal>\r
\r
</div>\r
\r
\r
`, styles: [`@charset "UTF-8";

/* src/app/maintenance/pages/scheduled-page.component.scss */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root,
  :host {
    --font-sans:
      ui-sans-serif,
      system-ui,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji";
    --font-mono:
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      "Liberation Mono",
      "Courier New",
      monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-orange-50: oklch(98% 0.016 73.684);
    --color-orange-100: oklch(95.4% 0.038 75.164);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-700: oklch(55.3% 0.195 38.402);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-orange-900: oklch(40.8% 0.123 38.172);
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-100: oklch(97.3% 0.071 103.193);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-400: oklch(85.2% 0.199 91.936);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-teal-50: oklch(98.4% 0.014 180.72);
    --color-teal-600: oklch(60% 0.118 184.704);
    --color-cyan-50: oklch(98.4% 0.019 200.873);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-600: oklch(60.9% 0.126 221.723);
    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-purple-50: oklch(97.7% 0.014 308.299);
    --color-purple-100: oklch(94.6% 0.033 307.174);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-purple-700: oklch(49.6% 0.265 301.924);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-pink-100: oklch(94.8% 0.028 342.258);
    --color-pink-600: oklch(59.2% 0.249 0.584);
    --color-pink-800: oklch(45.9% 0.187 3.815);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-tight: -0.025em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --leading-tight: 1.25;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html,
  :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp,
  pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol,
  ul,
  menu {
    list-style: none;
  }
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }
  img,
  video {
    max-width: 100%;
    height: auto;
  }
  button,
  input,
  select,
  optgroup,
  textarea,
  ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
    }
    @supports (color: color-mix(in lab, red, red)) {
       {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit,
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field,
  ::-webkit-datetime-edit-second-field,
  ::-webkit-datetime-edit-millisecond-field,
  ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button,
  input:where([type=button], [type=reset], [type=submit]),
  ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden=until-found])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .\\!top-\\[10px\\] {
    top: 10px !important;
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-1 {
    top: calc(var(--spacing) * 1);
  }
  .top-1\\/2 {
    top: calc(1/2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .top-2\\.5 {
    top: calc(var(--spacing) * 2.5);
  }
  .top-3 {
    top: calc(var(--spacing) * 3);
  }
  .top-4 {
    top: calc(var(--spacing) * 4);
  }
  .top-full {
    top: 100%;
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-3 {
    right: calc(var(--spacing) * 3);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .right-6 {
    right: calc(var(--spacing) * 6);
  }
  .right-8 {
    right: calc(var(--spacing) * 8);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .bottom-6 {
    bottom: calc(var(--spacing) * 6);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-2 {
    left: calc(var(--spacing) * 2);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .left-4 {
    left: calc(var(--spacing) * 4);
  }
  .z-0 {
    z-index: 0;
  }
  .z-1 {
    z-index: 1;
  }
  .z-10 {
    z-index: 10;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .col-6 {
    grid-column: 6;
  }
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }
  .container {
    width: 100%;
  }
  @media (width >= 40rem) {
    .container {
      max-width: 40rem;
    }
  }
  @media (width >= 48rem) {
    .container {
      max-width: 48rem;
    }
  }
  @media (width >= 64rem) {
    .container {
      max-width: 64rem;
    }
  }
  @media (width >= 80rem) {
    .container {
      max-width: 80rem;
    }
  }
  @media (width >= 96rem) {
    .container {
      max-width: 96rem;
    }
  }
  .mx-2 {
    margin-inline: calc(var(--spacing) * 2);
  }
  .mx-4 {
    margin-inline: calc(var(--spacing) * 4);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .my-1 {
    margin-block: calc(var(--spacing) * 1);
  }
  .my-2 {
    margin-block: calc(var(--spacing) * 2);
  }
  .my-3 {
    margin-block: calc(var(--spacing) * 3);
  }
  .my-4 {
    margin-block: calc(var(--spacing) * 4);
  }
  .my-8 {
    margin-block: calc(var(--spacing) * 8);
  }
  .mt-0 {
    margin-top: calc(var(--spacing) * 0);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-8 {
    margin-top: calc(var(--spacing) * 8);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .mr-2\\.5 {
    margin-right: calc(var(--spacing) * 2.5);
  }
  .mr-3 {
    margin-right: calc(var(--spacing) * 3);
  }
  .mr-4 {
    margin-right: calc(var(--spacing) * 4);
  }
  .\\!mb-0 {
    margin-bottom: calc(var(--spacing) * 0) !important;
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-5 {
    margin-bottom: calc(var(--spacing) * 5);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .mb-12 {
    margin-bottom: calc(var(--spacing) * 12);
  }
  .mb-16 {
    margin-bottom: calc(var(--spacing) * 16);
  }
  .-ml-1 {
    margin-left: calc(var(--spacing) * -1);
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-3 {
    margin-left: calc(var(--spacing) * 3);
  }
  .ml-4 {
    margin-left: calc(var(--spacing) * 4);
  }
  .ml-6 {
    margin-left: calc(var(--spacing) * 6);
  }
  .ml-7 {
    margin-left: calc(var(--spacing) * 7);
  }
  .ml-8 {
    margin-left: calc(var(--spacing) * 8);
  }
  .ml-16 {
    margin-left: calc(var(--spacing) * 16);
  }
  .ml-64 {
    margin-left: calc(var(--spacing) * 64);
  }
  .ml-auto {
    margin-left: auto;
  }
  .\\!line-clamp-2 {
    overflow: hidden !important;
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    -webkit-line-clamp: 2 !important;
  }
  .line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .\\!block {
    display: block !important;
  }
  .\\!grid {
    display: grid !important;
  }
  .\\!hidden {
    display: none !important;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .flow-root {
    display: flow-root;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .inline-table {
    display: inline-table;
  }
  .list-item {
    display: list-item;
  }
  .table {
    display: table;
  }
  .table-caption {
    display: table-caption;
  }
  .table-cell {
    display: table-cell;
  }
  .table-column {
    display: table-column;
  }
  .table-column-group {
    display: table-column-group;
  }
  .table-footer-group {
    display: table-footer-group;
  }
  .table-header-group {
    display: table-header-group;
  }
  .table-row {
    display: table-row;
  }
  .table-row-group {
    display: table-row-group;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .size-3 {
    width: calc(var(--spacing) * 3);
    height: calc(var(--spacing) * 3);
  }
  .size-4 {
    width: calc(var(--spacing) * 4);
    height: calc(var(--spacing) * 4);
  }
  .size-5 {
    width: calc(var(--spacing) * 5);
    height: calc(var(--spacing) * 5);
  }
  .size-6 {
    width: calc(var(--spacing) * 6);
    height: calc(var(--spacing) * 6);
  }
  .size-10 {
    width: calc(var(--spacing) * 10);
    height: calc(var(--spacing) * 10);
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-1\\.5 {
    height: calc(var(--spacing) * 1.5);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-14 {
    height: calc(var(--spacing) * 14);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-20 {
    height: calc(var(--spacing) * 20);
  }
  .h-24 {
    height: calc(var(--spacing) * 24);
  }
  .h-32 {
    height: calc(var(--spacing) * 32);
  }
  .h-40 {
    height: calc(var(--spacing) * 40);
  }
  .h-48 {
    height: calc(var(--spacing) * 48);
  }
  .h-64 {
    height: calc(var(--spacing) * 64);
  }
  .h-100 {
    height: calc(var(--spacing) * 100);
  }
  .h-\\[230px\\] {
    height: 230px;
  }
  .h-\\[400px\\] {
    height: 400px;
  }
  .h-\\[calc\\(100vh-200px\\)\\] {
    height: calc(100vh - 200px);
  }
  .h-fit {
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-60 {
    max-height: calc(var(--spacing) * 60);
  }
  .max-h-72 {
    max-height: calc(var(--spacing) * 72);
  }
  .max-h-\\[60vh\\] {
    max-height: 60vh;
  }
  .max-h-\\[90vh\\] {
    max-height: 90vh;
  }
  .max-h-\\[600px\\] {
    max-height: 600px;
  }
  .max-h-\\[calc\\(90vh-140px\\)\\] {
    max-height: calc(90vh - 140px);
  }
  .max-h-full {
    max-height: 100%;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-0 {
    width: calc(var(--spacing) * 0);
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\.5 {
    width: calc(var(--spacing) * 1.5);
  }
  .w-1\\/3 {
    width: calc(1/3 * 100%);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-2\\.5 {
    width: calc(var(--spacing) * 2.5);
  }
  .w-2\\/3 {
    width: calc(2/3 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-11 {
    width: calc(var(--spacing) * 11);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-14 {
    width: calc(var(--spacing) * 14);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-20 {
    width: calc(var(--spacing) * 20);
  }
  .w-24 {
    width: calc(var(--spacing) * 24);
  }
  .w-28 {
    width: calc(var(--spacing) * 28);
  }
  .w-32 {
    width: calc(var(--spacing) * 32);
  }
  .w-40 {
    width: calc(var(--spacing) * 40);
  }
  .w-44 {
    width: calc(var(--spacing) * 44);
  }
  .w-48 {
    width: calc(var(--spacing) * 48);
  }
  .w-56 {
    width: calc(var(--spacing) * 56);
  }
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-96 {
    width: calc(var(--spacing) * 96);
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[140px\\] {
    width: 140px;
  }
  .w-\\[150px\\] {
    width: 150px;
  }
  .w-\\[170px\\] {
    width: 170px;
  }
  .w-\\[180px\\] {
    width: 180px;
  }
  .w-\\[420px\\] {
    width: 420px;
  }
  .w-\\[500px\\] {
    width: 500px;
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }
  .max-w-2xl {
    max-width: var(--container-2xl);
  }
  .max-w-3xl {
    max-width: var(--container-3xl);
  }
  .max-w-4xl {
    max-width: var(--container-4xl);
  }
  .max-w-5xl {
    max-width: var(--container-5xl);
  }
  .max-w-6xl {
    max-width: var(--container-6xl);
  }
  .max-w-7xl {
    max-width: var(--container-7xl);
  }
  .max-w-\\[200px\\] {
    max-width: 200px;
  }
  .max-w-\\[250px\\] {
    max-width: 250px;
  }
  .max-w-full {
    max-width: 100%;
  }
  .max-w-lg {
    max-width: var(--container-lg);
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .max-w-xl {
    max-width: var(--container-xl);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[1\\.25rem\\] {
    min-width: 1.25rem;
  }
  .min-w-\\[70px\\] {
    min-width: 70px;
  }
  .min-w-\\[180px\\] {
    min-width: 180px;
  }
  .min-w-full {
    min-width: 100%;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .translate-x-1 {
    --tw-translate-x: calc(var(--spacing) * 1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-1\\/2 {
    --tw-translate-x: calc(1/2 * 100%);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-5 {
    --tw-translate-x: calc(var(--spacing) * 5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-\\[-2px\\] {
    --tw-translate-x: -2px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-\\[2px\\] {
    --tw-translate-x: 2px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .transform\\! {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,) !important;
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize {
    resize: both;
  }
  .resize-none {
    resize: none;
  }
  .list-inside {
    list-style-position: inside;
  }
  .list-disc {
    list-style-type: disc;
  }
  .list-none {
    list-style-type: none;
  }
  .appearance-none {
    appearance: none;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .\\!flex-row {
    flex-direction: row !important;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .place-items-center {
    place-items: center;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  :where(.space-y-1 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-1\\.5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-2 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-3 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-4 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-6 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-8 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-x-1 > :not(:last-child)) {
    --tw-space-x-reverse: 0;
    margin-inline-start: calc(calc(var(--spacing) * 1) * var(--tw-space-x-reverse));
    margin-inline-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-x-reverse)));
  }
  :where(.space-x-2 > :not(:last-child)) {
    --tw-space-x-reverse: 0;
    margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));
    margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));
  }
  :where(.space-x-3 > :not(:last-child)) {
    --tw-space-x-reverse: 0;
    margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));
    margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));
  }
  :where(.space-x-4 > :not(:last-child)) {
    --tw-space-x-reverse: 0;
    margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));
    margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));
  }
  :where(.space-x-12 > :not(:last-child)) {
    --tw-space-x-reverse: 0;
    margin-inline-start: calc(calc(var(--spacing) * 12) * var(--tw-space-x-reverse));
    margin-inline-end: calc(calc(var(--spacing) * 12) * calc(1 - var(--tw-space-x-reverse)));
  }
  :where(.divide-y > :not(:last-child)) {
    --tw-divide-y-reverse: 0;
    border-bottom-style: var(--tw-border-style);
    border-top-style: var(--tw-border-style);
    border-top-width: calc(1px * var(--tw-divide-y-reverse));
    border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  }
  :where(.divide-gray-200 > :not(:last-child)) {
    border-color: var(--color-gray-200);
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-\\[inherit\\] {
    border-radius: inherit;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .rounded-b-2xl {
    border-bottom-right-radius: var(--radius-2xl);
    border-bottom-left-radius: var(--radius-2xl);
  }
  .\\!border {
    border-style: var(--tw-border-style) !important;
    border-width: 1px !important;
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-b-2 {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 2px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .\\!border-blue-200 {
    border-color: var(--color-blue-200) !important;
  }
  .border-amber-200 {
    border-color: var(--color-amber-200);
  }
  .border-blue-100 {
    border-color: var(--color-blue-100);
  }
  .border-blue-200 {
    border-color: var(--color-blue-200);
  }
  .border-blue-300 {
    border-color: var(--color-blue-300);
  }
  .border-blue-400 {
    border-color: var(--color-blue-400);
  }
  .border-blue-500 {
    border-color: var(--color-blue-500);
  }
  .border-blue-600 {
    border-color: var(--color-blue-600);
  }
  .border-cyan-100 {
    border-color: var(--color-cyan-100);
  }
  .border-gray-100 {
    border-color: var(--color-gray-100);
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-gray-600 {
    border-color: var(--color-gray-600);
  }
  .border-green-100 {
    border-color: var(--color-green-100);
  }
  .border-green-200 {
    border-color: var(--color-green-200);
  }
  .border-indigo-600 {
    border-color: var(--color-indigo-600);
  }
  .border-orange-100 {
    border-color: var(--color-orange-100);
  }
  .border-orange-200 {
    border-color: var(--color-orange-200);
  }
  .border-purple-100 {
    border-color: var(--color-purple-100);
  }
  .border-red-100 {
    border-color: var(--color-red-100);
  }
  .border-red-200 {
    border-color: var(--color-red-200);
  }
  .border-red-300 {
    border-color: var(--color-red-300);
  }
  .border-red-500 {
    border-color: var(--color-red-500);
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-white {
    border-color: var(--color-white);
  }
  .border-yellow-200 {
    border-color: var(--color-yellow-200);
  }
  .border-t-blue-600 {
    border-top-color: var(--color-blue-600);
  }
  .border-t-transparent {
    border-top-color: transparent;
  }
  .\\!bg-blue-600 {
    background-color: var(--color-blue-600) !important;
  }
  .bg-\\[\\#00000085\\] {
    background-color: #00000085;
  }
  .bg-\\[\\#e0edff\\] {
    background-color: #e0edff;
  }
  .bg-amber-50 {
    background-color: var(--color-amber-50);
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/30 {
    background-color: color-mix(in srgb, #000 30%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .bg-black\\/30 {
      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);
    }
  }
  .bg-blue-50 {
    background-color: var(--color-blue-50);
  }
  .bg-blue-100 {
    background-color: var(--color-blue-100);
  }
  .bg-blue-200 {
    background-color: var(--color-blue-200);
  }
  .bg-blue-400 {
    background-color: var(--color-blue-400);
  }
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }
  .bg-cyan-50 {
    background-color: var(--color-cyan-50);
  }
  .bg-cyan-100 {
    background-color: var(--color-cyan-100);
  }
  .bg-emerald-500 {
    background-color: var(--color-emerald-500);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-300 {
    background-color: var(--color-gray-300);
  }
  .bg-gray-400 {
    background-color: var(--color-gray-400);
  }
  .bg-gray-600 {
    background-color: var(--color-gray-600);
  }
  .bg-green-50 {
    background-color: var(--color-green-50);
  }
  .bg-green-100 {
    background-color: var(--color-green-100);
  }
  .bg-green-500 {
    background-color: var(--color-green-500);
  }
  .bg-green-600 {
    background-color: var(--color-green-600);
  }
  .bg-indigo-50 {
    background-color: var(--color-indigo-50);
  }
  .bg-indigo-100 {
    background-color: var(--color-indigo-100);
  }
  .bg-indigo-600 {
    background-color: var(--color-indigo-600);
  }
  .bg-orange-50 {
    background-color: var(--color-orange-50);
  }
  .bg-orange-100 {
    background-color: var(--color-orange-100);
  }
  .bg-orange-500 {
    background-color: var(--color-orange-500);
  }
  .bg-orange-600 {
    background-color: var(--color-orange-600);
  }
  .bg-pink-100 {
    background-color: var(--color-pink-100);
  }
  .bg-purple-50 {
    background-color: var(--color-purple-50);
  }
  .bg-purple-100 {
    background-color: var(--color-purple-100);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-600 {
    background-color: var(--color-purple-600);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
  }
  .bg-red-100 {
    background-color: var(--color-red-100);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-600 {
    background-color: var(--color-red-600);
  }
  .bg-teal-50 {
    background-color: var(--color-teal-50);
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-white\\/20 {
    background-color: color-mix(in srgb, #fff 20%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .bg-white\\/20 {
      background-color: color-mix(in oklab, var(--color-white) 20%, transparent);
    }
  }
  .bg-yellow-50 {
    background-color: var(--color-yellow-50);
  }
  .bg-yellow-100 {
    background-color: var(--color-yellow-100);
  }
  .bg-yellow-500 {
    background-color: var(--color-yellow-500);
  }
  .bg-gradient-to-br {
    --tw-gradient-position: to bottom right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-blue-50 {
    --tw-gradient-from: var(--color-blue-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-blue-500 {
    --tw-gradient-from: var(--color-blue-500);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-blue-600 {
    --tw-gradient-from: var(--color-blue-600);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-blue-600 {
    --tw-gradient-to: var(--color-blue-600);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-indigo-50 {
    --tw-gradient-to: var(--color-indigo-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-purple-600 {
    --tw-gradient-to: var(--color-purple-600);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .object-contain {
    object-fit: contain;
  }
  .object-cover {
    object-fit: cover;
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-1\\.5 {
    padding: calc(var(--spacing) * 1.5);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-2\\.5 {
    padding: calc(var(--spacing) * 2.5);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-12 {
    padding: calc(var(--spacing) * 12);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }
  .py-0 {
    padding-block: calc(var(--spacing) * 0);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-5 {
    padding-block: calc(var(--spacing) * 5);
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-12 {
    padding-block: calc(var(--spacing) * 12);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-6 {
    padding-top: calc(var(--spacing) * 6);
  }
  .pt-8 {
    padding-top: calc(var(--spacing) * 8);
  }
  .pr-3 {
    padding-right: calc(var(--spacing) * 3);
  }
  .pr-4 {
    padding-right: calc(var(--spacing) * 4);
  }
  .pr-10 {
    padding-right: calc(var(--spacing) * 10);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-6 {
    padding-bottom: calc(var(--spacing) * 6);
  }
  .pb-8 {
    padding-bottom: calc(var(--spacing) * 8);
  }
  .pb-20 {
    padding-bottom: calc(var(--spacing) * 20);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-10 {
    padding-left: calc(var(--spacing) * 10);
  }
  .text-center {
    text-align: center;
  }
  .text-end {
    text-align: end;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .text-start {
    text-align: start;
  }
  .align-middle {
    vertical-align: middle;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .\\!text-xs {
    font-size: var(--text-xs) !important;
    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .leading-5 {
    --tw-leading: calc(var(--spacing) * 5);
    line-height: calc(var(--spacing) * 5);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-tight {
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-amber-600 {
    color: var(--color-amber-600);
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-amber-800 {
    color: var(--color-amber-800);
  }
  .text-blue-100 {
    color: var(--color-blue-100);
  }
  .text-blue-200 {
    color: var(--color-blue-200);
  }
  .text-blue-400 {
    color: var(--color-blue-400);
  }
  .text-blue-500 {
    color: var(--color-blue-500);
  }
  .text-blue-600 {
    color: var(--color-blue-600);
  }
  .text-blue-700 {
    color: var(--color-blue-700);
  }
  .text-blue-800 {
    color: var(--color-blue-800);
  }
  .text-blue-900 {
    color: var(--color-blue-900);
  }
  .text-cyan-400 {
    color: var(--color-cyan-400);
  }
  .text-cyan-600 {
    color: var(--color-cyan-600);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-800 {
    color: var(--color-gray-800);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-green-400 {
    color: var(--color-green-400);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-green-600 {
    color: var(--color-green-600);
  }
  .text-green-700 {
    color: var(--color-green-700);
  }
  .text-green-800 {
    color: var(--color-green-800);
  }
  .text-green-900 {
    color: var(--color-green-900);
  }
  .text-indigo-500 {
    color: var(--color-indigo-500);
  }
  .text-indigo-600 {
    color: var(--color-indigo-600);
  }
  .text-orange-400 {
    color: var(--color-orange-400);
  }
  .text-orange-500 {
    color: var(--color-orange-500);
  }
  .text-orange-600 {
    color: var(--color-orange-600);
  }
  .text-orange-700 {
    color: var(--color-orange-700);
  }
  .text-orange-800 {
    color: var(--color-orange-800);
  }
  .text-orange-900 {
    color: var(--color-orange-900);
  }
  .text-pink-600 {
    color: var(--color-pink-600);
  }
  .text-pink-800 {
    color: var(--color-pink-800);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-purple-500 {
    color: var(--color-purple-500);
  }
  .text-purple-600 {
    color: var(--color-purple-600);
  }
  .text-purple-700 {
    color: var(--color-purple-700);
  }
  .text-purple-800 {
    color: var(--color-purple-800);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-red-600 {
    color: var(--color-red-600);
  }
  .text-red-700 {
    color: var(--color-red-700);
  }
  .text-red-800 {
    color: var(--color-red-800);
  }
  .text-slate-600 {
    color: var(--color-slate-600);
  }
  .text-teal-600 {
    color: var(--color-teal-600);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-yellow-400 {
    color: var(--color-yellow-400);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-yellow-600 {
    color: var(--color-yellow-600);
  }
  .text-yellow-700 {
    color: var(--color-yellow-700);
  }
  .text-yellow-800 {
    color: var(--color-yellow-800);
  }
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .ordinal {
    --tw-ordinal: ordinal;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .ordinal\\! {
    --tw-ordinal: ordinal !important;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,) !important;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .overline {
    text-decoration-line: overline;
  }
  .underline {
    text-decoration-line: underline;
  }
  .placeholder-gray-400::placeholder {
    color: var(--color-gray-400);
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-25 {
    opacity: 25%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-60 {
    opacity: 60%;
  }
  .opacity-75 {
    opacity: 75%;
  }
  .opacity-80 {
    opacity: 80%;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow:
      var(--tw-inset-shadow),
      var(--tw-inset-ring-shadow),
      var(--tw-ring-offset-shadow),
      var(--tw-ring-shadow),
      var(--tw-shadow);
  }
  .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));
    box-shadow:
      var(--tw-inset-shadow),
      var(--tw-inset-ring-shadow),
      var(--tw-ring-offset-shadow),
      var(--tw-ring-shadow),
      var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow:
      var(--tw-inset-shadow),
      var(--tw-inset-ring-shadow),
      var(--tw-ring-offset-shadow),
      var(--tw-ring-shadow),
      var(--tw-shadow);
  }
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow:
      var(--tw-inset-shadow),
      var(--tw-inset-ring-shadow),
      var(--tw-ring-offset-shadow),
      var(--tw-ring-shadow),
      var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow:
      var(--tw-inset-shadow),
      var(--tw-inset-ring-shadow),
      var(--tw-ring-offset-shadow),
      var(--tw-ring-shadow),
      var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow:
      var(--tw-inset-shadow),
      var(--tw-inset-ring-shadow),
      var(--tw-ring-offset-shadow),
      var(--tw-ring-shadow),
      var(--tw-shadow);
  }
  .ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow:
      var(--tw-inset-shadow),
      var(--tw-inset-ring-shadow),
      var(--tw-ring-offset-shadow),
      var(--tw-ring-shadow),
      var(--tw-shadow);
  }
  .ring-blue-500 {
    --tw-ring-color: var(--color-blue-500);
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter\\! {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,) !important;
  }
  .transition {
    transition-property:
      color,
      background-color,
      border-color,
      outline-color,
      text-decoration-color,
      fill,
      stroke,
      --tw-gradient-from,
      --tw-gradient-via,
      --tw-gradient-to,
      opacity,
      box-shadow,
      transform,
      translate,
      scale,
      rotate,
      filter,
      -webkit-backdrop-filter,
      backdrop-filter,
      display,
      content-visibility,
      overlay,
      pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property:
      color,
      background-color,
      border-color,
      outline-color,
      text-decoration-color,
      fill,
      stroke,
      --tw-gradient-from,
      --tw-gradient-via,
      --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property:
      transform,
      translate,
      scale,
      rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .delay-1 {
    transition-delay: 1ms;
  }
  .delay-2 {
    transition-delay: 2ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .duration-400 {
    --tw-duration: 400ms;
    transition-duration: 400ms;
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  @media (hover: hover) {
    .group-hover\\:scale-110:is(:where(.group):hover *) {
      --tw-scale-x: 110%;
      --tw-scale-y: 110%;
      --tw-scale-z: 110%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  @media (hover: hover) {
    .group-hover\\:bg-blue-200:is(:where(.group):hover *) {
      background-color: var(--color-blue-200);
    }
  }
  @media (hover: hover) {
    .group-hover\\:text-blue-600:is(:where(.group):hover *) {
      color: var(--color-blue-600);
    }
  }
  @media (hover: hover) {
    .group-hover\\:text-blue-700:is(:where(.group):hover *) {
      color: var(--color-blue-700);
    }
  }
  @media (hover: hover) {
    .group-hover\\:opacity-50:is(:where(.group):hover *) {
      opacity: 50%;
    }
  }
  @media (hover: hover) {
    .group-hover\\:opacity-75:is(:where(.group):hover *) {
      opacity: 75%;
    }
  }
  @media (hover: hover) {
    .group-hover\\:opacity-100:is(:where(.group):hover *) {
      opacity: 100%;
    }
  }
  @media (hover: hover) {
    .group-hover\\/title\\:text-blue-600:is(:where(.group\\/title):hover *) {
      color: var(--color-blue-600);
    }
  }
  .peer-checked\\:bg-blue-600:is(:where(.peer):checked ~ *) {
    background-color: var(--color-blue-600);
  }
  .peer-focus\\:ring-4:is(:where(.peer):focus ~ *) {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow:
      var(--tw-inset-shadow),
      var(--tw-inset-ring-shadow),
      var(--tw-ring-offset-shadow),
      var(--tw-ring-shadow),
      var(--tw-shadow);
  }
  .peer-focus\\:ring-blue-300:is(:where(.peer):focus ~ *) {
    --tw-ring-color: var(--color-blue-300);
  }
  .peer-focus\\:outline-none:is(:where(.peer):focus ~ *) {
    --tw-outline-style: none;
    outline-style: none;
  }
  .after\\:absolute::after {
    content: var(--tw-content);
    position: absolute;
  }
  .after\\:top-\\[2px\\]::after {
    content: var(--tw-content);
    top: 2px;
  }
  .after\\:left-\\[2px\\]::after {
    content: var(--tw-content);
    left: 2px;
  }
  .after\\:h-5::after {
    content: var(--tw-content);
    height: calc(var(--spacing) * 5);
  }
  .after\\:w-5::after {
    content: var(--tw-content);
    width: calc(var(--spacing) * 5);
  }
  .after\\:rounded-full::after {
    content: var(--tw-content);
    border-radius: calc(infinity * 1px);
  }
  .after\\:border::after {
    content: var(--tw-content);
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .after\\:border-gray-300::after {
    content: var(--tw-content);
    border-color: var(--color-gray-300);
  }
  .after\\:bg-white::after {
    content: var(--tw-content);
    background-color: var(--color-white);
  }
  .after\\:transition-all::after {
    content: var(--tw-content);
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .after\\:content-\\[\\'\\'\\]::after {
    --tw-content: "";
    content: var(--tw-content);
  }
  .peer-checked\\:after\\:translate-x-full:is(:where(.peer):checked ~ *)::after {
    content: var(--tw-content);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .peer-checked\\:after\\:border-white:is(:where(.peer):checked ~ *)::after {
    content: var(--tw-content);
    border-color: var(--color-white);
  }
  .last\\:border-b-0:last-child {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 0px;
  }
  @media (hover: hover) {
    .hover\\:scale-105:hover {
      --tw-scale-x: 105%;
      --tw-scale-y: 105%;
      --tw-scale-z: 105%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  @media (hover: hover) {
    .hover\\:scale-110:hover {
      --tw-scale-x: 110%;
      --tw-scale-y: 110%;
      --tw-scale-z: 110%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  @media (hover: hover) {
    .hover\\:border-blue-300:hover {
      border-color: var(--color-blue-300);
    }
  }
  @media (hover: hover) {
    .hover\\:border-blue-400:hover {
      border-color: var(--color-blue-400);
    }
  }
  @media (hover: hover) {
    .hover\\:border-blue-500:hover {
      border-color: var(--color-blue-500);
    }
  }
  @media (hover: hover) {
    .hover\\:border-gray-300:hover {
      border-color: var(--color-gray-300);
    }
  }
  @media (hover: hover) {
    .hover\\:border-gray-400:hover {
      border-color: var(--color-gray-400);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-black:hover {
      background-color: var(--color-black);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-blue-50:hover {
      background-color: var(--color-blue-50);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-blue-100:hover {
      background-color: var(--color-blue-100);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-blue-200:hover {
      background-color: var(--color-blue-200);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-blue-700:hover {
      background-color: var(--color-blue-700);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-gray-50:hover {
      background-color: var(--color-gray-50);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-gray-100:hover {
      background-color: var(--color-gray-100);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-gray-200:hover {
      background-color: var(--color-gray-200);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-gray-300:hover {
      background-color: var(--color-gray-300);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-gray-700:hover {
      background-color: var(--color-gray-700);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-green-50:hover {
      background-color: var(--color-green-50);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-green-700:hover {
      background-color: var(--color-green-700);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-indigo-50:hover {
      background-color: var(--color-indigo-50);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-indigo-700:hover {
      background-color: var(--color-indigo-700);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-orange-50:hover {
      background-color: var(--color-orange-50);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-orange-700:hover {
      background-color: var(--color-orange-700);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-purple-50:hover {
      background-color: var(--color-purple-50);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-purple-700:hover {
      background-color: var(--color-purple-700);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-red-50:hover {
      background-color: var(--color-red-50);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-red-100:hover {
      background-color: var(--color-red-100);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-red-600:hover {
      background-color: var(--color-red-600);
    }
  }
  @media (hover: hover) {
    .hover\\:bg-red-700:hover {
      background-color: var(--color-red-700);
    }
  }
  @media (hover: hover) {
    .hover\\:from-blue-700:hover {
      --tw-gradient-from: var(--color-blue-700);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  @media (hover: hover) {
    .hover\\:to-purple-700:hover {
      --tw-gradient-to: var(--color-purple-700);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  @media (hover: hover) {
    .hover\\:text-blue-500:hover {
      color: var(--color-blue-500);
    }
  }
  @media (hover: hover) {
    .hover\\:text-blue-600:hover {
      color: var(--color-blue-600);
    }
  }
  @media (hover: hover) {
    .hover\\:text-blue-700:hover {
      color: var(--color-blue-700);
    }
  }
  @media (hover: hover) {
    .hover\\:text-blue-800:hover {
      color: var(--color-blue-800);
    }
  }
  @media (hover: hover) {
    .hover\\:text-blue-900:hover {
      color: var(--color-blue-900);
    }
  }
  @media (hover: hover) {
    .hover\\:text-gray-300:hover {
      color: var(--color-gray-300);
    }
  }
  @media (hover: hover) {
    .hover\\:text-gray-600:hover {
      color: var(--color-gray-600);
    }
  }
  @media (hover: hover) {
    .hover\\:text-gray-700:hover {
      color: var(--color-gray-700);
    }
  }
  @media (hover: hover) {
    .hover\\:text-gray-800:hover {
      color: var(--color-gray-800);
    }
  }
  @media (hover: hover) {
    .hover\\:text-green-700:hover {
      color: var(--color-green-700);
    }
  }
  @media (hover: hover) {
    .hover\\:text-green-900:hover {
      color: var(--color-green-900);
    }
  }
  @media (hover: hover) {
    .hover\\:text-orange-900:hover {
      color: var(--color-orange-900);
    }
  }
  @media (hover: hover) {
    .hover\\:text-red-600:hover {
      color: var(--color-red-600);
    }
  }
  @media (hover: hover) {
    .hover\\:text-red-700:hover {
      color: var(--color-red-700);
    }
  }
  @media (hover: hover) {
    .hover\\:text-red-900:hover {
      color: var(--color-red-900);
    }
  }
  @media (hover: hover) {
    .hover\\:no-underline:hover {
      text-decoration-line: none;
    }
  }
  @media (hover: hover) {
    .hover\\:underline:hover {
      text-decoration-line: underline;
    }
  }
  @media (hover: hover) {
    .hover\\:shadow-md:hover {
      --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow:
        var(--tw-inset-shadow),
        var(--tw-inset-ring-shadow),
        var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow),
        var(--tw-shadow);
    }
  }
  @media (hover: hover) {
    .hover\\:shadow-sm:hover {
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow:
        var(--tw-inset-shadow),
        var(--tw-inset-ring-shadow),
        var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow),
        var(--tw-shadow);
    }
  }
  @media (hover: hover) {
    .hover\\:shadow-xl:hover {
      --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow:
        var(--tw-inset-shadow),
        var(--tw-inset-ring-shadow),
        var(--tw-ring-offset-shadow),
        var(--tw-ring-shadow),
        var(--tw-shadow);
    }
  }
  .focus\\:border-blue-500:focus {
    border-color: var(--color-blue-500);
  }
  .focus\\:border-indigo-500:focus {
    border-color: var(--color-indigo-500);
  }
  .focus\\:border-red-500:focus {
    border-color: var(--color-red-500);
  }
  .focus\\:border-transparent:focus {
    border-color: transparent;
  }
  .focus\\:bg-blue-50:focus {
    background-color: var(--color-blue-50);
  }
  .focus\\:ring-2:focus {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow:
      var(--tw-inset-shadow),
      var(--tw-inset-ring-shadow),
      var(--tw-ring-offset-shadow),
      var(--tw-ring-shadow),
      var(--tw-shadow);
  }
  .focus\\:ring-blue-500:focus {
    --tw-ring-color: var(--color-blue-500);
  }
  .focus\\:ring-gray-300:focus {
    --tw-ring-color: var(--color-gray-300);
  }
  .focus\\:ring-gray-500:focus {
    --tw-ring-color: var(--color-gray-500);
  }
  .focus\\:ring-green-500:focus {
    --tw-ring-color: var(--color-green-500);
  }
  .focus\\:ring-indigo-500:focus {
    --tw-ring-color: var(--color-indigo-500);
  }
  .focus\\:ring-orange-500:focus {
    --tw-ring-color: var(--color-orange-500);
  }
  .focus\\:ring-red-500:focus {
    --tw-ring-color: var(--color-red-500);
  }
  .focus\\:ring-offset-2:focus {
    --tw-ring-offset-width: 2px;
    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  }
  .focus\\:outline-none:focus {
    --tw-outline-style: none;
    outline-style: none;
  }
  .enabled\\:text-gray-700:enabled {
    color: var(--color-gray-700);
  }
  @media (hover: hover) {
    .enabled\\:hover\\:bg-gray-50:enabled:hover {
      background-color: var(--color-gray-50);
    }
  }
  .disabled\\:transform-none:disabled {
    transform: none;
  }
  .disabled\\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  .disabled\\:bg-gray-100:disabled {
    background-color: var(--color-gray-100);
  }
  .disabled\\:opacity-50:disabled {
    opacity: 50%;
  }
  @media (width >= 40rem) {
    .sm\\:mb-0 {
      margin-bottom: calc(var(--spacing) * 0);
    }
  }
  @media (width >= 40rem) {
    .sm\\:block {
      display: block;
    }
  }
  @media (width >= 40rem) {
    .sm\\:w-64 {
      width: calc(var(--spacing) * 64);
    }
  }
  @media (width >= 40rem) {
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (width >= 40rem) {
    .sm\\:flex-row {
      flex-direction: row;
    }
  }
  @media (width >= 40rem) {
    .sm\\:items-center {
      align-items: center;
    }
  }
  @media (width >= 40rem) {
    .sm\\:justify-between {
      justify-content: space-between;
    }
  }
  @media (width >= 40rem) {
    :where(.sm\\:space-y-0 > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  @media (width >= 40rem) {
    :where(.sm\\:space-x-4 > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  @media (width >= 40rem) {
    .sm\\:p-0 {
      padding: calc(var(--spacing) * 0);
    }
  }
  @media (width >= 40rem) {
    .sm\\:p-6 {
      padding: calc(var(--spacing) * 6);
    }
  }
  @media (width >= 40rem) {
    .sm\\:px-6 {
      padding-inline: calc(var(--spacing) * 6);
    }
  }
  @media (width >= 40rem) {
    .sm\\:text-left {
      text-align: left;
    }
  }
  @media (width >= 40rem) {
    .sm\\:text-sm {
      font-size: var(--text-sm);
      line-height: var(--tw-leading, var(--text-sm--line-height));
    }
  }
  @media (width >= 48rem) {
    .md\\:col-span-2 {
      grid-column: span 2 / span 2;
    }
  }
  @media (width >= 48rem) {
    .md\\:mt-0 {
      margin-top: calc(var(--spacing) * 0);
    }
  }
  @media (width >= 48rem) {
    .md\\:w-80 {
      width: calc(var(--spacing) * 80);
    }
  }
  @media (width >= 48rem) {
    .md\\:w-100 {
      width: calc(var(--spacing) * 100);
    }
  }
  @media (width >= 48rem) {
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (width >= 48rem) {
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  @media (width >= 48rem) {
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  @media (width >= 48rem) {
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }
  @media (width >= 48rem) {
    .md\\:flex-row {
      flex-direction: row;
    }
  }
  @media (width >= 48rem) {
    .md\\:items-center {
      align-items: center;
    }
  }
  @media (width >= 48rem) {
    .md\\:justify-between {
      justify-content: space-between;
    }
  }
  @media (width >= 48rem) {
    :where(.md\\:space-y-0 > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  @media (width >= 48rem) {
    :where(.md\\:space-x-3 > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  @media (width >= 64rem) {
    .lg\\:col-span-2 {
      grid-column: span 2 / span 2;
    }
  }
  @media (width >= 64rem) {
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  @media (width >= 64rem) {
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  @media (width >= 64rem) {
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }
  @media (width >= 64rem) {
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
  }
  @media (width >= 64rem) {
    .lg\\:px-8 {
      padding-inline: calc(var(--spacing) * 8);
    }
  }
  @media (width >= 80rem) {
    .xl\\:col-span-1 {
      grid-column: span 1 / span 1;
    }
  }
  @media (width >= 80rem) {
    .xl\\:col-span-2 {
      grid-column: span 2 / span 2;
    }
  }
  @media (width >= 80rem) {
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
}
.plan-list-checkbox {
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  border: 2px solid #60a5fa;
  border-radius: 0.375rem;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
}
.plan-list-checkbox:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}
.plan-list-checkbox:checked::after {
  content: "";
  position: absolute;
  width: 0.3rem;
  height: 0.6rem;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%) rotate(45deg);
}
.plan-list-checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 2px #93c5fd;
}
.generic-dropdown .dropdown-button {
  display: flex;
  align-items: center;
  border-radius: var(--radius-xl);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-gray-200);
  background-color: var(--color-white);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow:
    var(--tw-inset-shadow),
    var(--tw-inset-ring-shadow),
    var(--tw-ring-offset-shadow),
    var(--tw-ring-shadow),
    var(--tw-shadow);
}
.generic-dropdown .dropdown-content {
  display: flex;
  align-items: center;
}
:where(.generic-dropdown .dropdown-content > :not(:last-child)) {
  --tw-space-x-reverse: 0;
  margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));
  margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));
}
.generic-dropdown .dropdown-arrow {
  margin-left: calc(var(--spacing) * 2);
  height: calc(var(--spacing) * 4);
  width: calc(var(--spacing) * 4);
  transition-property:
    transform,
    translate,
    scale,
    rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
.generic-dropdown .dropdown-arrow.rotated {
  transform: rotate(180deg);
}
.generic-dropdown .dropdown-menu {
  position: absolute;
  top: 100%;
  right: calc(var(--spacing) * 0);
  z-index: 50;
  margin-top: calc(var(--spacing) * 1);
  width: calc(var(--spacing) * 56);
  border-radius: var(--radius-lg);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-gray-200);
  background-color: var(--color-white);
  padding-block: calc(var(--spacing) * 1);
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow:
    var(--tw-inset-shadow),
    var(--tw-inset-ring-shadow),
    var(--tw-ring-offset-shadow),
    var(--tw-ring-shadow),
    var(--tw-shadow);
}
.generic-dropdown .dropdown-item {
  width: 100%;
  padding-inline: calc(var(--spacing) * 3);
  padding-block: calc(var(--spacing) * 2);
  text-align: left;
}
@media (hover: hover) {
  .generic-dropdown .dropdown-item:hover {
    background-color: var(--color-gray-50);
  }
}
.generic-dropdown .selected-item {
  display: flex;
  align-items: center;
}
.generic-dropdown .selected-text {
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
}
.generic-dropdown .dropdown-header {
  padding-inline: calc(var(--spacing) * 3);
  padding-block: calc(var(--spacing) * 2);
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  color: var(--color-gray-500);
}
.plans-page {
  padding: calc(var(--spacing) * 6);
}
@property --tw-translate-x { syntax: "*"; inherits: false; initial-value: 0; }
@property --tw-translate-y { syntax: "*"; inherits: false; initial-value: 0; }
@property --tw-translate-z { syntax: "*"; inherits: false; initial-value: 0; }
@property --tw-rotate-x { syntax: "*"; inherits: false; }
@property --tw-rotate-y { syntax: "*"; inherits: false; }
@property --tw-rotate-z { syntax: "*"; inherits: false; }
@property --tw-skew-x { syntax: "*"; inherits: false; }
@property --tw-skew-y { syntax: "*"; inherits: false; }
@property --tw-space-y-reverse { syntax: "*"; inherits: false; initial-value: 0; }
@property --tw-space-x-reverse { syntax: "*"; inherits: false; initial-value: 0; }
@property --tw-divide-y-reverse { syntax: "*"; inherits: false; initial-value: 0; }
@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }
@property --tw-gradient-position { syntax: "*"; inherits: false; }
@property --tw-gradient-from { syntax: "<color>"; inherits: false; initial-value: #0000; }
@property --tw-gradient-via { syntax: "<color>"; inherits: false; initial-value: #0000; }
@property --tw-gradient-to { syntax: "<color>"; inherits: false; initial-value: #0000; }
@property --tw-gradient-stops { syntax: "*"; inherits: false; }
@property --tw-gradient-via-stops { syntax: "*"; inherits: false; }
@property --tw-gradient-from-position { syntax: "<length-percentage>"; inherits: false; initial-value: 0%; }
@property --tw-gradient-via-position { syntax: "<length-percentage>"; inherits: false; initial-value: 50%; }
@property --tw-gradient-to-position { syntax: "<length-percentage>"; inherits: false; initial-value: 100%; }
@property --tw-leading { syntax: "*"; inherits: false; }
@property --tw-font-weight { syntax: "*"; inherits: false; }
@property --tw-tracking { syntax: "*"; inherits: false; }
@property --tw-ordinal { syntax: "*"; inherits: false; }
@property --tw-slashed-zero { syntax: "*"; inherits: false; }
@property --tw-numeric-figure { syntax: "*"; inherits: false; }
@property --tw-numeric-spacing { syntax: "*"; inherits: false; }
@property --tw-numeric-fraction { syntax: "*"; inherits: false; }
@property --tw-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }
@property --tw-shadow-color { syntax: "*"; inherits: false; }
@property --tw-shadow-alpha { syntax: "<percentage>"; inherits: false; initial-value: 100%; }
@property --tw-inset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }
@property --tw-inset-shadow-color { syntax: "*"; inherits: false; }
@property --tw-inset-shadow-alpha { syntax: "<percentage>"; inherits: false; initial-value: 100%; }
@property --tw-ring-color { syntax: "*"; inherits: false; }
@property --tw-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }
@property --tw-inset-ring-color { syntax: "*"; inherits: false; }
@property --tw-inset-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }
@property --tw-ring-inset { syntax: "*"; inherits: false; }
@property --tw-ring-offset-width { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --tw-ring-offset-color { syntax: "*"; inherits: false; initial-value: #fff; }
@property --tw-ring-offset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }
@property --tw-outline-style { syntax: "*"; inherits: false; initial-value: solid; }
@property --tw-blur { syntax: "*"; inherits: false; }
@property --tw-brightness { syntax: "*"; inherits: false; }
@property --tw-contrast { syntax: "*"; inherits: false; }
@property --tw-grayscale { syntax: "*"; inherits: false; }
@property --tw-hue-rotate { syntax: "*"; inherits: false; }
@property --tw-invert { syntax: "*"; inherits: false; }
@property --tw-opacity { syntax: "*"; inherits: false; }
@property --tw-saturate { syntax: "*"; inherits: false; }
@property --tw-sepia { syntax: "*"; inherits: false; }
@property --tw-drop-shadow { syntax: "*"; inherits: false; }
@property --tw-drop-shadow-color { syntax: "*"; inherits: false; }
@property --tw-drop-shadow-alpha { syntax: "<percentage>"; inherits: false; initial-value: 100%; }
@property --tw-drop-shadow-size { syntax: "*"; inherits: false; }
@property --tw-duration { syntax: "*"; inherits: false; }
@property --tw-ease { syntax: "*"; inherits: false; }
@property --tw-scale-x { syntax: "*"; inherits: false; initial-value: 1; }
@property --tw-scale-y { syntax: "*"; inherits: false; initial-value: 1; }
@property --tw-scale-z { syntax: "*"; inherits: false; initial-value: 1; }
@property --tw-content { syntax: "*"; initial-value: ""; inherits: false; }
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *,
    ::before,
    ::after,
    ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-space-x-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-content: "";
    }
  }
}
/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */
/*# sourceMappingURL=scheduled-page.component.css.map */
`, '/* src/app/maintenance/pages/schedule-selector.scss */\n.plan-card-checkbox {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #2563eb;\n  background-color: white;\n  border: 2px solid #60a5fa;\n  border-radius: 9999px;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n.plan-card-checkbox:checked {\n  background-color: #60a5fa;\n  border-color: #60a5fa;\n}\n.plan-card-checkbox:checked::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 50%;\n}\n.plan-card-checkbox:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n.plan-card-checkbox:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #93c5fd;\n}\n/*# sourceMappingURL=schedule-selector.css.map */\n'] }]
  }], () => [{ type: MaintenanceService }, { type: MetaWorkOrdersService }, { type: AssetService }, { type: Router }], { closeOnOutsideClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduledPageComponent, { className: "ScheduledPageComponent", filePath: "src/app/maintenance/pages/scheduled-page.component.ts", lineNumber: 20 });
})();
export {
  ScheduledPageComponent
};
//# sourceMappingURL=chunk-CZ47QOTA.js.map
