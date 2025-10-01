import {
  MaintenanceDeleteConfirmationModalComponent
} from "./chunk-YZXBYIQ3.js";
import {
  MaintenanceService
} from "./chunk-G7NBKUQU.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-2SLRX53P.js";
import {
  MetaWorkOrdersService
} from "./chunk-VRK7CGOB.js";
import {
  AssetService
} from "./chunk-DV6PQFY7.js";
import "./chunk-NM3PRJXP.js";
import "./chunk-O5ZMPHOU.js";
import "./chunk-LZKWF3AL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-FSOYXA4J.js";
import {
  Router,
  RouterLink
} from "./chunk-E2GGJA5S.js";
import "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MMJF4Y5E.js";
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
} from "./chunk-YUR5IGOK.js";
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
    args: [{ selector: "app-schedule-dialog", standalone: true, imports: [CommonModule, FormsModule, NgSelectModule], template: `<div *ngIf="isOpen" class="fixed inset-0 z-50 modal-overlay" (click)="onBackdrop($event)">\r
  <div class="absolute inset-0 bg-black/30"></div>\r
  <div class="absolute inset-0 flex items-start justify-center overflow-auto py-8 px-4">\r
    <div class="modal bg-white rounded-2xl shadow-xl w-full max-w-2xl" (click)="$event.stopPropagation()">\r
      <div class="modal-header p-6">\r
        <h2 class="text-xl font-semibold">Schedule Maintenance</h2>\r
        <p class="text-sm text-gray-500">@if (scheduleToEdit?.id) {\r
          Edit\r
        } @else {\r
          Create\r
        }\r
          a scheduled maintenance item for a plan</p>\r
      </div>\r
\r
      <div class="p-6 space-y-4 modal-body">\r
        <div *ngIf="error" class="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700">{{ error }}</div>\r
\r
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
          <div class="form-group" [class.error]="hasFieldError('maintenance_plan_id')">\r
            <label>Maintenance Plan <span class="required">*</span></label>\r
            <div class="relative category-dropdown" (click)="$event.stopPropagation()">\r
              <button type="button" (click)="togglePlanDropdown()" class="dropdown-button"\r
                      [class.error]="hasFieldError('maintenance_plan_id')" [class.active]="showPlanDropdown"\r
                      [disabled]="plansOptions.length===0">\r
                <div class="dropdown-content">\r
                  <span *ngIf="!selectedPlan" class="placeholder">Select plan</span>\r
                  <div *ngIf="selectedPlan" class="selected-item">\r
                    <span class="selected-text">{{ selectedPlan?.name }}</span>\r
                  </div>\r
                  <svg class="dropdown-arrow" [class.rotated]="showPlanDropdown" fill="none" stroke="currentColor"\r
                       viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                  </svg>\r
                </div>\r
              </button>\r
              <div *ngIf="showPlanDropdown" class="dropdown-menu">\r
                <div class="dropdown-header">Select plan</div>\r
                <button *ngFor="let p of plansOptions" type="button" (click)="selectPlan(p)" class="dropdown-item"\r
                        [class.selected]="selectedPlan?.id === p.id">\r
                  <div class="item-content">\r
                    <div class="item-details">\r
                      <div class="item-name">{{ p.name }}</div>\r
                    </div>\r
                  </div>\r
                </button>\r
              </div>\r
            </div>\r
            <div class="field-error"\r
                 *ngIf="hasFieldError('maintenance_plan_id')">{{ getFieldError('maintenance_plan_id') }}\r
            </div>\r
            <div style="height: 4px"></div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Start Date & Time</label>\r
            <div class="grid grid-cols-2 gap-2">\r
              <input type="date" [(ngModel)]="startDatePart" (ngModelChange)="onStartPartsChange()"\r
                     placeholder="YYYY-MM-DD">\r
              <input type="time" [(ngModel)]="startTimePart" (ngModelChange)="onStartPartsChange()" placeholder="HH:MM">\r
            </div>\r
          </div>\r
\r
\r
          <div class="form-group">\r
            <label>Priority</label>\r
            <div class="relative priority-dropdown" (click)="$event.stopPropagation()">\r
              <button type="button" (click)="togglePriorityDropdown()" class="dropdown-button"\r
                      [class.active]="showPriorityDropdown" [disabled]="priorityOptions.length===0">\r
                <div class="dropdown-content">\r
                  <span *ngIf="!selectedPriorityMeta" class="placeholder">Select priority (optional)</span>\r
                  <div *ngIf="selectedPriorityMeta" class="selected-item">\r
                    <span class="selected-text">{{ selectedPriorityMeta?.name || selectedPriorityMeta?.slug }}</span>\r
                  </div>\r
                  <svg class="dropdown-arrow" [class.rotated]="showPriorityDropdown" fill="none" stroke="currentColor"\r
                       viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                  </svg>\r
                </div>\r
              </button>\r
              <div *ngIf="showPriorityDropdown" class="dropdown-menu relative " style="z-index: 9999;">\r
                <div class="dropdown-header">Select priority</div>\r
                <button *ngFor="let priority of priorityOptions" type="button" (click)="selectPriority(priority)"\r
                        class="dropdown-item" [class.selected]="selectedPriorityMeta?.id === priority.id">\r
                  <div class="item-content">\r
                    <div class="item-details">\r
                      <div class="item-name">{{ priority.name || priority.slug }}</div>\r
                    </div>\r
                  </div>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Status</label>\r
            <div class="relative status-dropdown" (click)="$event.stopPropagation()">\r
              <button type="button" (click)="toggleDropdown()" class="dropdown-button"\r
                      [class.active]="showStatusDropdown">\r
                <div class="dropdown-content">\r
                  <span *ngIf="!selectedStatus" class="placeholder">Select status</span>\r
                  <div *ngIf="selectedStatus" class="selected-item">\r
                    <span class="selected-text">{{ selectedStatus?.name }}</span>\r
                  </div>\r
                  <svg class="dropdown-arrow" [class.rotated]="showStatusDropdown" fill="none" stroke="currentColor"\r
                       viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                  </svg>\r
                </div>\r
              </button>\r
              <div *ngIf="showStatusDropdown" class="dropdown-menu" style="z-index: 9999;">\r
                <div class="dropdown-header">Select status</div>\r
                <button *ngFor="let option of statusOptions" type="button" (click)="selectOption(option)"\r
                        class="dropdown-item" [class.selected]="selectedStatus?.id === option.id">\r
                  <div class="item-content">\r
                    <div class="item-details">\r
                      <div class="item-name">{{ option.name }}</div>\r
                    </div>\r
                  </div>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Assets moved to bottom -->\r
        <div class="grid grid-cols-1">\r
          <div class="form-group">\r
            <label>Assets</label>\r
            <ng-select\r
              [items]="assetOptions"\r
              bindLabel="name"\r
              bindValue="id"\r
              [multiple]="true"\r
              [closeOnSelect]="false"\r
              [searchable]="true"\r
              placeholder="Search and select assets"\r
              [(ngModel)]="model.asset_ids">\r
            </ng-select>\r
            <div class="field-help"><small>Leave empty to use plan assets</small></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer p-6 border-t flex justify-end gap-2">\r
        <button class="btn btn-secondary w-[140px]" (click)="close()" [disabled]="loading">Cancel</button>\r
        <button class="btn btn-primary w-[180px]" (click)="submit()" [disabled]="loading">\r
          <ng-container *ngIf="!loading; else creatingTpl">\r
            @if (scheduleToEdit?.id) {\r
              Edit\r
            } @else {\r
              Create\r
            }\r
             Schedule\r
          </ng-container>\r
        </button>\r
        <ng-template #creatingTpl>\r
          <span class="inline-flex items-center gap-2">\r
            <svg class="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor"\r
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
            @if (scheduleToEdit?.id){Editing} @else {Creating}...\r
          </span>\r
        </ng-template>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, ScheduleDialogComponent, MaintenanceDeleteConfirmationModalComponent, RouterLink], styles: ["\n\n/*# sourceMappingURL=scheduled-page.component.css.map */", '\n\n.plan-card-checkbox[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #2563eb;\n  background-color: white;\n  border: 2px solid #60a5fa;\n  border-radius: 9999px;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:checked {\n  background-color: #60a5fa;\n  border-color: #60a5fa;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:checked::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 50%;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #93c5fd;\n}\n/*# sourceMappingURL=schedule-selector.css.map */'] });
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
`, styles: ["/* src/app/maintenance/pages/scheduled-page.component.scss */\n/*# sourceMappingURL=scheduled-page.component.css.map */\n", '/* src/app/maintenance/pages/schedule-selector.scss */\n.plan-card-checkbox {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #2563eb;\n  background-color: white;\n  border: 2px solid #60a5fa;\n  border-radius: 9999px;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n.plan-card-checkbox:checked {\n  background-color: #60a5fa;\n  border-color: #60a5fa;\n}\n.plan-card-checkbox:checked::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 50%;\n}\n.plan-card-checkbox:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n.plan-card-checkbox:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #93c5fd;\n}\n/*# sourceMappingURL=schedule-selector.css.map */\n'] }]
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
//# sourceMappingURL=chunk-TQ4UKAUN.js.map
