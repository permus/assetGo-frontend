import {
  PlanDialogComponent
} from "./chunk-WN5YL3LI.js";
import {
  MaintenanceService
} from "./chunk-NKW5FA2N.js";
import "./chunk-5LL6FNGY.js";
import "./chunk-XSZSUCV7.js";
import "./chunk-BGMQUXYP.js";
import {
  FormsModule
} from "./chunk-ISERUI2H.js";
import "./chunk-OR4RIGW3.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  HostListener,
  Subject,
  setClassMetadata,
  takeUntil,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/maintenance/pages/plan-preview-page/plan-preview-page.component.ts
function PlanPreviewPageComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 25);
    \u0275\u0275listener("click", function PlanPreviewPageComponent_div_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.duplicatePlan();
      return \u0275\u0275resetView(ctx_r1.showActionsDropdown = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5, "Duplicate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 29);
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function PlanPreviewPageComponent_div_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.printPlan();
      return \u0275\u0275resetView(ctx_r1.showActionsDropdown = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 26);
    \u0275\u0275element(9, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 28);
    \u0275\u0275text(11, "Print");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 25);
    \u0275\u0275listener("click", function PlanPreviewPageComponent_div_26_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.exportPlan();
      return \u0275\u0275resetView(ctx_r1.showActionsDropdown = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 26);
    \u0275\u0275element(14, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span", 28);
    \u0275\u0275text(16, "Export");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 25);
    \u0275\u0275listener("click", function PlanPreviewPageComponent_div_26_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sharePlan();
      return \u0275\u0275resetView(ctx_r1.showActionsDropdown = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 26);
    \u0275\u0275element(19, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "span", 28);
    \u0275\u0275text(21, "Share");
    \u0275\u0275elementEnd()()();
  }
}
function PlanPreviewPageComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 36);
    \u0275\u0275element(4, "circle", 37)(5, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 39);
    \u0275\u0275text(7, "Loading Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 40);
    \u0275\u0275text(9, "Please wait while we fetch the plan details...");
    \u0275\u0275elementEnd()()();
  }
}
function PlanPreviewPageComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 42);
    \u0275\u0275element(4, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 39);
    \u0275\u0275text(6, "Error Loading Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 45);
    \u0275\u0275listener("click", function PlanPreviewPageComponent_div_28_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadPlanData((ctx_r1.plan == null ? null : ctx_r1.plan.id) || 0));
    });
    \u0275\u0275text(10, " Try Again ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PlanPreviewPageComponent_div_29_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.plan.plan_type, " ");
  }
}
function PlanPreviewPageComponent_div_29_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 40);
    \u0275\u0275text(2, "Frequency:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 87);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFrequencyLabel(ctx_r1.plan.frequency_type, ctx_r1.plan.frequency_value, ctx_r1.plan.frequency_unit), " ");
  }
}
function PlanPreviewPageComponent_div_29_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function PlanPreviewPageComponent_div_29_button_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.descriptionExpanded = !ctx_r1.descriptionExpanded);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.descriptionExpanded ? "Show Less" : "Show More", " ");
  }
}
function PlanPreviewPageComponent_div_29_button_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function PlanPreviewPageComponent_div_29_button_97_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.instructionsExpanded = !ctx_r1.instructionsExpanded);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.instructionsExpanded ? "Show Less" : "Show More", " ");
  }
}
function PlanPreviewPageComponent_div_29_button_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function PlanPreviewPageComponent_div_29_button_103_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.notesExpanded = !ctx_r1.notesExpanded);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.notesExpanded ? "Show Less" : "Show More", " ");
  }
}
function PlanPreviewPageComponent_div_29_div_119_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "h3", 93);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 94)(5, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 96);
    \u0275\u0275element(7, "path", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const asset_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(asset_r8.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(asset_r8.serial_number);
  }
}
function PlanPreviewPageComponent_div_29_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, PlanPreviewPageComponent_div_29_div_119_div_1_Template, 10, 2, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.plan.assets);
  }
}
function PlanPreviewPageComponent_div_29_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 98);
    \u0275\u0275element(2, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 99);
    \u0275\u0275text(4, "No assets assigned to this plan");
    \u0275\u0275elementEnd()();
  }
}
function PlanPreviewPageComponent_div_29_Conditional_127_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function PlanPreviewPageComponent_div_29_Conditional_127_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1, "Safety Critical");
    \u0275\u0275elementEnd();
  }
}
function PlanPreviewPageComponent_div_29_Conditional_127_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Photo Required");
    \u0275\u0275elementEnd();
  }
}
function PlanPreviewPageComponent_div_29_Conditional_127_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "div", 103)(3, "h3", 104);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 106)(8, "span", 107);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PlanPreviewPageComponent_div_29_Conditional_127_div_1_span_10_Template, 2, 0, "span", 108)(11, PlanPreviewPageComponent_div_29_Conditional_127_div_1_span_11_Template, 2, 0, "span", 109)(12, PlanPreviewPageComponent_div_29_Conditional_127_div_1_span_12_Template, 2, 0, "span", 110);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r9.is_required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r9.is_safety_critical);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r9.is_photo_required);
  }
}
function PlanPreviewPageComponent_div_29_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275template(1, PlanPreviewPageComponent_div_29_Conditional_127_div_1_Template, 13, 6, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.checklistItems)("ngForTrackBy", ctx_r1.trackByChecklistItem);
  }
}
function PlanPreviewPageComponent_div_29_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 98);
    \u0275\u0275element(2, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 114);
    \u0275\u0275text(4, "No checklist items defined");
    \u0275\u0275elementEnd()();
  }
}
function PlanPreviewPageComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48)(3, "div", 3)(4, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 50);
    \u0275\u0275element(6, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "h1", 52);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 3);
    \u0275\u0275template(11, PlanPreviewPageComponent_div_29_span_11_Template, 2, 1, "span", 53);
    \u0275\u0275elementStart(12, "span", 54);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 54);
    \u0275\u0275text(15, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 54);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 55)(19, "div", 56)(20, "span", 40);
    \u0275\u0275text(21, "Plan ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 57);
    \u0275\u0275listener("click", function PlanPreviewPageComponent_div_29_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyPlanId());
    });
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 58);
    \u0275\u0275element(26, "path", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, PlanPreviewPageComponent_div_29_div_27_Template, 5, 1, "div", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 60)(29, "div", 61)(30, "div", 62)(31, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 64);
    \u0275\u0275element(33, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "h2", 66);
    \u0275\u0275text(35, "Plan Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 60)(37, "div", 67)(38, "div")(39, "h4", 68);
    \u0275\u0275text(40, "Plan Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 66);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "h4", 68);
    \u0275\u0275text(45, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 69)(47, "p", 70);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, PlanPreviewPageComponent_div_29_button_49_Template, 2, 1, "button", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "h4", 68);
    \u0275\u0275text(52, "Plan Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 72);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div")(56, "h4", 68);
    \u0275\u0275text(57, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 73);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 67)(61, "div")(62, "h4", 68);
    \u0275\u0275text(63, "Estimated Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(65, "svg", 74);
    \u0275\u0275element(66, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(67, "span", 9);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div")(70, "h4", 68);
    \u0275\u0275text(71, "Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 74);
    \u0275\u0275element(74, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(75, "span", 77);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div")(78, "h4", 68);
    \u0275\u0275text(79, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 78);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div")(83, "h4", 68);
    \u0275\u0275text(84, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(86, "svg", 74);
    \u0275\u0275element(87, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(88, "span", 77);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(91, "div", 67)(92, "div")(93, "h4", 68);
    \u0275\u0275text(94, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p", 79);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd();
    \u0275\u0275template(97, PlanPreviewPageComponent_div_29_button_97_Template, 2, 1, "button", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div")(99, "h4", 68);
    \u0275\u0275text(100, "Safety Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "p", 79);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, PlanPreviewPageComponent_div_29_button_103_Template, 2, 1, "button", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div")(105, "h4", 68);
    \u0275\u0275text(106, "Last Modified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(108, "svg", 74);
    \u0275\u0275element(109, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(110, "span", 77);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "date");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(113, "div", 62)(114, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(115, "svg", 64);
    \u0275\u0275element(116, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(117, "h2", 66);
    \u0275\u0275text(118);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(119, PlanPreviewPageComponent_div_29_div_119_Template, 2, 1, "div", 81)(120, PlanPreviewPageComponent_div_29_div_120_Template, 5, 0, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 62)(122, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(123, "svg", 64);
    \u0275\u0275element(124, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(125, "h2", 66);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(127, PlanPreviewPageComponent_div_29_Conditional_127_Template, 2, 2, "div", 83)(128, PlanPreviewPageComponent_div_29_Conditional_128_Template, 5, 0, "div", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 67)(130, "div", 62)(131, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(132, "svg", 64);
    \u0275\u0275element(133, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(134, "h2", 66);
    \u0275\u0275text(135, "Schedule Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "div", 83)(137, "div", 85)(138, "h4", 68);
    \u0275\u0275text(139, "Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "p", 9);
    \u0275\u0275text(141);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 85)(143, "h4", 68);
    \u0275\u0275text(144, "Next Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "p", 77);
    \u0275\u0275text(146);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 85)(148, "h4", 68);
    \u0275\u0275text(149, "Last Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "p", 77);
    \u0275\u0275text(151);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(152, "div", 62)(153, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(154, "svg", 64);
    \u0275\u0275element(155, "path", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(156, "h2", 66);
    \u0275\u0275text(157, "Additional Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "div", 83)(159, "div")(160, "h4", 68);
    \u0275\u0275text(161, "Sort Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "p", 77);
    \u0275\u0275text(163);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div")(165, "h4", 68);
    \u0275\u0275text(166, "Scheduled Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "p", 77);
    \u0275\u0275text(168);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.plan.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.plan.plan_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.plan.estimeted_duration || 0, " hours");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.plan.is_active ? "Active" : "Inactive");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.plan.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.plan.frequency_type);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate((ctx_r1.plan == null ? null : ctx_r1.plan.name) || "Unnamed Plan");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("line-clamp-3", !ctx_r1.descriptionExpanded);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.plan == null ? null : ctx_r1.plan.descriptions) || "No description available", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.plan == null ? null : ctx_r1.plan.descriptions) && ctx_r1.plan.descriptions.length > 150);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.plan == null ? null : ctx_r1.plan.plan_type) || "Not specified", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.plan == null ? null : ctx_r1.plan.priority.name) || "Not set", " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", (ctx_r1.plan == null ? null : ctx_r1.plan.estimeted_duration) || 0, " hours");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getFrequencyLabel(ctx_r1.plan == null ? null : ctx_r1.plan.frequency_type, ctx_r1.plan == null ? null : ctx_r1.plan.frequency_value, ctx_r1.plan == null ? null : ctx_r1.plan.frequency_unit));
    \u0275\u0275advance(4);
    \u0275\u0275classMap((ctx_r1.plan == null ? null : ctx_r1.plan.is_active) ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.plan == null ? null : ctx_r1.plan.is_active) ? "Active" : "Inactive", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 38, ctx_r1.plan == null ? null : ctx_r1.plan.created_at, "MMM d, y"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("line-clamp-3", !ctx_r1.instructionsExpanded);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r1.plan == null ? null : ctx_r1.plan.instractions) || "No instructions available");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.plan == null ? null : ctx_r1.plan.instractions) && (ctx_r1.plan == null ? null : ctx_r1.plan.instractions.length) > 150);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("line-clamp-3", !ctx_r1.notesExpanded);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r1.plan == null ? null : ctx_r1.plan.safety_notes) || "No safety notes available");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.plan == null ? null : ctx_r1.plan.safety_notes) && (ctx_r1.plan == null ? null : ctx_r1.plan.safety_notes.length) > 150);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(112, 41, ctx_r1.plan == null ? null : ctx_r1.plan.updated_at, "MMM d, y"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Assigned Assets (", ctx_r1.selectedAssets.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAssets.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedAssets.length === 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Checklist Items (", ctx_r1.checklistItems.length, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.checklistItems.length > 0 ? 127 : ctx_r1.checklistItems.length === 0 ? 128 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFrequencyLabel(ctx_r1.scheduleInfo == null ? null : ctx_r1.scheduleInfo.frequency_type, ctx_r1.scheduleInfo == null ? null : ctx_r1.scheduleInfo.frequency_value, ctx_r1.scheduleInfo == null ? null : ctx_r1.scheduleInfo.frequency_unit), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.scheduleInfo == null ? null : ctx_r1.scheduleInfo.next_due_date));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.scheduleInfo == null ? null : ctx_r1.scheduleInfo.last_completed));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((ctx_r1.plan == null ? null : ctx_r1.plan.sort) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.plan == null ? null : ctx_r1.plan.scheduled_count) || 0);
  }
}
var PlanPreviewPageComponent = class _PlanPreviewPageComponent {
  route;
  maintenanceService;
  destroy$ = new Subject();
  editMode = false;
  planToEdit = null;
  isDialogOpen = false;
  // Plan data
  plan = null;
  selectedAssets = [];
  checklistItems = [];
  scheduleInfo = null;
  planMenus = [];
  // Loading states
  loading = false;
  error = null;
  // UI state
  descriptionExpanded = false;
  notesExpanded = false;
  instructionsExpanded = false;
  showActionsDropdown = false;
  constructor(route, maintenanceService) {
    this.route = route;
    this.maintenanceService = maintenanceService;
  }
  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const planId = params["id"];
      if (planId) {
        this.loadPlanData(Number(planId));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadPlanData(planId) {
    this.loading = true;
    this.error = null;
    this.maintenanceService.getPlan(planId).subscribe({
      next: (response) => {
        this.plan = response.data.plan;
        this.checklistItems = response.data.plan.checklists;
        this.selectedAssets = response.data.plan.assets;
        if (response.data.plan.frequency_type) {
          this.scheduleInfo = {
            frequency_type: this.plan?.frequency_type,
            frequency_value: this.plan?.frequency_value,
            frequency_unit: this.plan?.frequency_unit,
            next_due_date: null,
            // This would come from schedule API
            last_completed: null
            // This would come from schedule API
          };
        }
      },
      error: (error) => {
        this.error = "Failed to load maintenance plan. Please try again.";
        this.loading = false;
        console.error("Error loading plan:", error);
      }
    }).add(() => {
      this.loading = false;
    });
  }
  editPlan(plan) {
    this.planMenus[plan.id] = false;
    this.editMode = true;
    this.planToEdit = plan;
    this.isDialogOpen = true;
  }
  duplicatePlan() {
    console.log("Duplicate plan:", this.plan?.id);
  }
  exportPlan() {
    console.log("Export plan:", this.plan?.id);
  }
  printPlan() {
    window.print();
  }
  sharePlan() {
    console.log("Share plan:", this.plan?.id);
  }
  copyPlanId() {
    if (this.plan?.id && navigator.clipboard) {
      navigator.clipboard.writeText(this.plan.id.toString()).then(() => {
        console.log("Plan ID copied to clipboard");
      }).catch((err) => {
        console.error("Failed to copy plan ID:", err);
      });
    }
  }
  getFrequencyLabel(type, value, unit) {
    if (type === "time") {
      return `Every ${value} ${unit}`;
    } else if (type === "usage") {
      return `Every ${value} hours of operation`;
    } else if (type === "condition") {
      return "Based on condition monitoring";
    }
    return "Custom schedule";
  }
  formatDate(date) {
    if (!date)
      return "Not set";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  trackByChecklistItem(index, item) {
    return item.id || index;
  }
  // Close dropdowns when clicking outside
  onDocumentClick(event) {
    if (!event.target.closest(".relative")) {
      this.showActionsDropdown = false;
    }
  }
  onUpdated() {
    this.isDialogOpen = false;
    this.editMode = false;
    this.planToEdit = null;
    if (this.plan?.id) {
      this.loadPlanData(this.plan.id);
    }
  }
  onDialogClosed() {
    this.isDialogOpen = false;
    this.editMode = false;
    this.planToEdit = null;
  }
  static \u0275fac = function PlanPreviewPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlanPreviewPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MaintenanceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanPreviewPageComponent, selectors: [["app-plan-preview-page"]], hostBindings: function PlanPreviewPageComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function PlanPreviewPageComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 31, vars: 9, consts: [[1, "min-h-screen", "bg-gray-50", "maintenance-preview-container"], [1, "bg-white", "border-b", "border-gray-200", "px-6", "py-4", "print-hide"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-4"], ["aria-label", "Breadcrumb", 1, "flex"], [1, "flex", "items-center", "space-x-2"], [1, "text-gray-500", "hover:text-gray-700", "transition-colors", 3, "routerLink"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "mx-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "text-gray-900", "font-medium"], [1, "flex", "items-center", "space-x-3"], [1, "flex", "items-center", "space-x-2", "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "relative", 3, "click"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-gray-600", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["cx", "12", "cy", "5", "r", "2"], ["cx", "12", "cy", "12", "r", "2"], ["cx", "12", "cy", "19", "r", "2"], ["class", "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", 4, "ngIf"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "px-6 py-6", 4, "ngIf"], [3, "closed", "updated", "isOpen", "editMode", "planToEdit"], [1, "absolute", "right-0", "mt-2", "w-48", "bg-white", "rounded-lg", "shadow-lg", "border", "border-gray-200", "py-2", "z-50"], [1, "w-full", "flex", "items-center", "space-x-3", "px-4", "py-2", "text-left", "hover:bg-gray-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"], [1, "text-gray-700"], [1, "border-t", "border-gray-100", "my-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-8a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-blue-100", "rounded-full", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-8", "h-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-500"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-red-100", "rounded-full", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-sm", "text-gray-500", "mb-4"], [1, "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-colors", 3, "click"], [1, "px-6", "py-6"], [1, "bg-white", "rounded-lg", "p-6", "mb-6", "shadow-sm", "border", "border-gray-200"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "w-16", "h-16", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], [1, "text-3xl", "font-bold", "text-gray-900", "mb-2"], ["class", "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800", 4, "ngIf"], [1, "text-gray-500"], [1, "text-right"], [1, "flex", "items-center", "space-x-2", "mb-2"], [1, "flex", "items-center", "space-x-1", "px-2", "py-1", "text-sm", "font-mono", "bg-gray-100", "rounded", "hover:bg-gray-200", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-lg", "p-6", "shadow-sm", "border", "border-gray-200"], [1, "flex", "items-center", "space-x-2", "mb-6"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "space-y-6"], [1, "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "relative"], [1, "text-gray-600", "leading-relaxed"], ["class", "text-blue-600 hover:text-blue-700 text-sm font-medium mt-2", 3, "click", 4, "ngIf"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "text-sm", "font-medium", "bg-blue-100", "text-blue-800"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "text-sm", "font-medium", "bg-yellow-100", "text-yellow-800"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "text-gray-900"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "text-sm", "font-medium"], [1, "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], ["class", "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "space-y-4"], [1, "empty-state"], [1, "schedule-item"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-blue-600", "hover:text-blue-700", "text-sm", "font-medium", "mt-2", 3, "click"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-4"], ["class", "asset-card p-4 rounded-lg border border-gray-200", 4, "ngFor", "ngForOf"], [1, "asset-card", "p-4", "rounded-lg", "border", "border-gray-200"], [1, "asset-header"], [1, "asset-name", "font-medium", "mb-2"], [1, "asset-details"], [1, "asset-detail", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-gray-300", "mx-auto", "mb-4"], [1, "empty-text", "text-center", "text-gray-500"], ["class", "checklist-item p-4 border border-gray-200 rounded-lg", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "checklist-item", "p-4", "border", "border-gray-200", "rounded-lg"], [1, "item-content", "flex", "flex-col", "space-y-3"], [1, "item-main"], [1, "item-title", "font-semibold", "text-md"], [1, "item-description", "text-gray-600", "text-sm"], [1, "item-badges", "flex", "flex-wrap", "gap-2"], [1, "item-badge", "type-badge", "px-2", "py-1", "rounded-full", "text-xs", "font-medium", "bg-blue-100", "text-blue-800"], ["class", "item-badge required-badge px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800", 4, "ngIf"], ["class", "item-badge safety-badge px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800", 4, "ngIf"], ["class", "item-badge photo-badge px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800", 4, "ngIf"], [1, "item-badge", "required-badge", "px-2", "py-1", "rounded-full", "text-xs", "font-medium", "bg-yellow-100", "text-yellow-800"], [1, "item-badge", "safety-badge", "px-2", "py-1", "rounded-full", "text-xs", "font-medium", "bg-red-100", "text-red-800"], [1, "item-badge", "photo-badge", "px-2", "py-1", "rounded-full", "text-xs", "font-medium", "bg-purple-100", "text-purple-800"], [1, "empty-text"]], template: function PlanPreviewPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "ol", 5)(6, "li")(7, "a", 6);
      \u0275\u0275text(8, "Maintenance Plans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "li", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
      \u0275\u0275listener("click", function PlanPreviewPageComponent_Template_button_click_15_listener() {
        return ctx.editPlan(ctx.plan);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 12);
      \u0275\u0275element(17, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Edit Plan ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275listener("click", function PlanPreviewPageComponent_Template_div_click_20_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function PlanPreviewPageComponent_Template_button_click_21_listener() {
        return ctx.showActionsDropdown = !ctx.showActionsDropdown;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 16);
      \u0275\u0275element(23, "circle", 17)(24, "circle", 18)(25, "circle", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, PlanPreviewPageComponent_div_26_Template, 22, 0, "div", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(27, PlanPreviewPageComponent_div_27_Template, 10, 0, "div", 21)(28, PlanPreviewPageComponent_div_28_Template, 11, 1, "div", 21)(29, PlanPreviewPageComponent_div_29_Template, 169, 44, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "app-plan-dialog", 23);
      \u0275\u0275listener("closed", function PlanPreviewPageComponent_Template_app_plan_dialog_closed_30_listener() {
        return ctx.onDialogClosed();
      })("updated", function PlanPreviewPageComponent_Template_app_plan_dialog_updated_30_listener() {
        return ctx.onUpdated();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", "/maintenance/plans");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate((ctx.plan == null ? null : ctx.plan.name) || "Plan Details");
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.showActionsDropdown);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.plan && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.isDialogOpen)("editMode", ctx.editMode)("planToEdit", ctx.planToEdit);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, RouterLink, PlanDialogComponent], styles: ['@charset "UTF-8";\n\n\n\n@layer properties;\n@layer theme, base, components, utilities;\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --font-sans:\n      ui-sans-serif,\n      system-ui,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji",\n      "Segoe UI Symbol",\n      "Noto Color Emoji";\n    --font-mono:\n      ui-monospace,\n      SFMono-Regular,\n      Menlo,\n      Monaco,\n      Consolas,\n      "Liberation Mono",\n      "Courier New",\n      monospace;\n    --color-red-50: oklch(97.1% 0.013 17.38);\n    --color-red-100: oklch(93.6% 0.032 17.717);\n    --color-red-200: oklch(88.5% 0.062 18.334);\n    --color-red-300: oklch(80.8% 0.114 19.571);\n    --color-red-400: oklch(70.4% 0.191 22.216);\n    --color-red-500: oklch(63.7% 0.237 25.331);\n    --color-red-600: oklch(57.7% 0.245 27.325);\n    --color-red-700: oklch(50.5% 0.213 27.518);\n    --color-red-800: oklch(44.4% 0.177 26.899);\n    --color-red-900: oklch(39.6% 0.141 25.723);\n    --color-orange-50: oklch(98% 0.016 73.684);\n    --color-orange-100: oklch(95.4% 0.038 75.164);\n    --color-orange-200: oklch(90.1% 0.076 70.697);\n    --color-orange-400: oklch(75% 0.183 55.934);\n    --color-orange-500: oklch(70.5% 0.213 47.604);\n    --color-orange-600: oklch(64.6% 0.222 41.116);\n    --color-orange-700: oklch(55.3% 0.195 38.402);\n    --color-orange-800: oklch(47% 0.157 37.304);\n    --color-orange-900: oklch(40.8% 0.123 38.172);\n    --color-amber-50: oklch(98.7% 0.022 95.277);\n    --color-amber-200: oklch(92.4% 0.12 95.746);\n    --color-amber-600: oklch(66.6% 0.179 58.318);\n    --color-amber-700: oklch(55.5% 0.163 48.998);\n    --color-amber-800: oklch(47.3% 0.137 46.201);\n    --color-yellow-50: oklch(98.7% 0.026 102.212);\n    --color-yellow-100: oklch(97.3% 0.071 103.193);\n    --color-yellow-200: oklch(94.5% 0.129 101.54);\n    --color-yellow-400: oklch(85.2% 0.199 91.936);\n    --color-yellow-500: oklch(79.5% 0.184 86.047);\n    --color-yellow-600: oklch(68.1% 0.162 75.834);\n    --color-yellow-700: oklch(55.4% 0.135 66.442);\n    --color-yellow-800: oklch(47.6% 0.114 61.907);\n    --color-green-50: oklch(98.2% 0.018 155.826);\n    --color-green-100: oklch(96.2% 0.044 156.743);\n    --color-green-200: oklch(92.5% 0.084 155.995);\n    --color-green-400: oklch(79.2% 0.209 151.711);\n    --color-green-500: oklch(72.3% 0.219 149.579);\n    --color-green-600: oklch(62.7% 0.194 149.214);\n    --color-green-700: oklch(52.7% 0.154 150.069);\n    --color-green-800: oklch(44.8% 0.119 151.328);\n    --color-green-900: oklch(39.3% 0.095 152.535);\n    --color-emerald-500: oklch(69.6% 0.17 162.48);\n    --color-teal-50: oklch(98.4% 0.014 180.72);\n    --color-teal-600: oklch(60% 0.118 184.704);\n    --color-cyan-50: oklch(98.4% 0.019 200.873);\n    --color-cyan-100: oklch(95.6% 0.045 203.388);\n    --color-cyan-400: oklch(78.9% 0.154 211.53);\n    --color-cyan-600: oklch(60.9% 0.126 221.723);\n    --color-blue-50: oklch(97% 0.014 254.604);\n    --color-blue-100: oklch(93.2% 0.032 255.585);\n    --color-blue-200: oklch(88.2% 0.059 254.128);\n    --color-blue-300: oklch(80.9% 0.105 251.813);\n    --color-blue-400: oklch(70.7% 0.165 254.624);\n    --color-blue-500: oklch(62.3% 0.214 259.815);\n    --color-blue-600: oklch(54.6% 0.245 262.881);\n    --color-blue-700: oklch(48.8% 0.243 264.376);\n    --color-blue-800: oklch(42.4% 0.199 265.638);\n    --color-blue-900: oklch(37.9% 0.146 265.522);\n    --color-indigo-50: oklch(96.2% 0.018 272.314);\n    --color-indigo-100: oklch(93% 0.034 272.788);\n    --color-indigo-500: oklch(58.5% 0.233 277.117);\n    --color-indigo-600: oklch(51.1% 0.262 276.966);\n    --color-indigo-700: oklch(45.7% 0.24 277.023);\n    --color-purple-50: oklch(97.7% 0.014 308.299);\n    --color-purple-100: oklch(94.6% 0.033 307.174);\n    --color-purple-400: oklch(71.4% 0.203 305.504);\n    --color-purple-500: oklch(62.7% 0.265 303.9);\n    --color-purple-600: oklch(55.8% 0.288 302.321);\n    --color-purple-700: oklch(49.6% 0.265 301.924);\n    --color-purple-800: oklch(43.8% 0.218 303.724);\n    --color-pink-100: oklch(94.8% 0.028 342.258);\n    --color-pink-600: oklch(59.2% 0.249 0.584);\n    --color-pink-800: oklch(45.9% 0.187 3.815);\n    --color-slate-600: oklch(44.6% 0.043 257.281);\n    --color-gray-50: oklch(98.5% 0.002 247.839);\n    --color-gray-100: oklch(96.7% 0.003 264.542);\n    --color-gray-200: oklch(92.8% 0.006 264.531);\n    --color-gray-300: oklch(87.2% 0.01 258.338);\n    --color-gray-400: oklch(70.7% 0.022 261.325);\n    --color-gray-500: oklch(55.1% 0.027 264.364);\n    --color-gray-600: oklch(44.6% 0.03 256.802);\n    --color-gray-700: oklch(37.3% 0.034 259.733);\n    --color-gray-800: oklch(27.8% 0.033 256.848);\n    --color-gray-900: oklch(21% 0.034 264.665);\n    --color-black: #000;\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --container-md: 28rem;\n    --container-lg: 32rem;\n    --container-xl: 36rem;\n    --container-2xl: 42rem;\n    --container-3xl: 48rem;\n    --container-4xl: 56rem;\n    --container-5xl: 64rem;\n    --container-6xl: 72rem;\n    --container-7xl: 80rem;\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-3xl: 1.875rem;\n    --text-3xl--line-height: calc(2.25 / 1.875);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --text-5xl: 3rem;\n    --text-5xl--line-height: 1;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --tracking-tight: -0.025em;\n    --tracking-wide: 0.025em;\n    --tracking-wider: 0.05em;\n    --leading-tight: 1.25;\n    --leading-relaxed: 1.625;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --ease-in: cubic-bezier(0.4, 0, 1, 1);\n    --ease-out: cubic-bezier(0, 0, 0.2, 1);\n    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n    --animate-spin: spin 1s linear infinite;\n    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    --default-font-family: var(--font-sans);\n    --default-mono-font-family: var(--font-mono);\n  }\n}\n@layer base {\n  *[_ngcontent-%COMP%], \n   [_ngcontent-%COMP%]::after, \n   [_ngcontent-%COMP%]::before, \n   [_ngcontent-%COMP%]::backdrop, \n   [_ngcontent-%COMP%]::file-selector-button {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0 solid;\n  }\n  html[_ngcontent-%COMP%], \n   [_nghost-%COMP%] {\n    line-height: 1.5;\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr[_ngcontent-%COMP%] {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr[_ngcontent-%COMP%]:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1[_ngcontent-%COMP%], \n   h2[_ngcontent-%COMP%], \n   h3[_ngcontent-%COMP%], \n   h4[_ngcontent-%COMP%], \n   h5[_ngcontent-%COMP%], \n   h6[_ngcontent-%COMP%] {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a[_ngcontent-%COMP%] {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b[_ngcontent-%COMP%], \n   strong[_ngcontent-%COMP%] {\n    font-weight: bolder;\n  }\n  code[_ngcontent-%COMP%], \n   kbd[_ngcontent-%COMP%], \n   samp[_ngcontent-%COMP%], \n   pre[_ngcontent-%COMP%] {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n  small[_ngcontent-%COMP%] {\n    font-size: 80%;\n  }\n  sub[_ngcontent-%COMP%], \n   sup[_ngcontent-%COMP%] {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  sub[_ngcontent-%COMP%] {\n    bottom: -0.25em;\n  }\n  sup[_ngcontent-%COMP%] {\n    top: -0.5em;\n  }\n  table[_ngcontent-%COMP%] {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  [_ngcontent-%COMP%]:-moz-focusring {\n    outline: auto;\n  }\n  progress[_ngcontent-%COMP%] {\n    vertical-align: baseline;\n  }\n  summary[_ngcontent-%COMP%] {\n    display: list-item;\n  }\n  ol[_ngcontent-%COMP%], \n   ul[_ngcontent-%COMP%], \n   menu[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n  img[_ngcontent-%COMP%], \n   svg[_ngcontent-%COMP%], \n   video[_ngcontent-%COMP%], \n   canvas[_ngcontent-%COMP%], \n   audio[_ngcontent-%COMP%], \n   iframe[_ngcontent-%COMP%], \n   embed[_ngcontent-%COMP%], \n   object[_ngcontent-%COMP%] {\n    display: block;\n    vertical-align: middle;\n  }\n  img[_ngcontent-%COMP%], \n   video[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n  }\n  button[_ngcontent-%COMP%], \n   input[_ngcontent-%COMP%], \n   select[_ngcontent-%COMP%], \n   optgroup[_ngcontent-%COMP%], \n   textarea[_ngcontent-%COMP%], \n   [_ngcontent-%COMP%]::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    border-radius: 0;\n    background-color: transparent;\n    opacity: 1;\n  }\n  :where(select[_ngcontent-%COMP%]:is([multiple], [size]))   optgroup[_ngcontent-%COMP%] {\n    font-weight: bolder;\n  }\n  :where(select[_ngcontent-%COMP%]:is([multiple], [size]))   optgroup[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    padding-inline-start: 20px;\n  }\n  [_ngcontent-%COMP%]::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  [_ngcontent-%COMP%]::placeholder {\n    opacity: 1;\n  }\n  @supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px) {\n    [_ngcontent-%COMP%]::placeholder {\n      color: currentcolor;\n    }\n    @supports (color: color-mix(in lab, red, red)) {\n         {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n  textarea[_ngcontent-%COMP%] {\n    resize: vertical;\n  }\n  [_ngcontent-%COMP%]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  [_ngcontent-%COMP%]::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  [_ngcontent-%COMP%]::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  [_ngcontent-%COMP%]::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  [_ngcontent-%COMP%]::-webkit-datetime-edit, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-year-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-month-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-day-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-hour-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-minute-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-second-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-millisecond-field, \n   [_ngcontent-%COMP%]::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  [_ngcontent-%COMP%]:-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button[_ngcontent-%COMP%], \n   input[_ngcontent-%COMP%]:where([type=button], [type=reset], [type=submit]), \n   [_ngcontent-%COMP%]::file-selector-button {\n    appearance: button;\n  }\n  [_ngcontent-%COMP%]::-webkit-inner-spin-button, \n   [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden][_ngcontent-%COMP%]:where(:not([hidden=until-found])) {\n    display: none !important;\n  }\n}\n@layer utilities {\n  .pointer-events-none[_ngcontent-%COMP%] {\n    pointer-events: none;\n  }\n  .collapse[_ngcontent-%COMP%] {\n    visibility: collapse;\n  }\n  .invisible[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n  .visible[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  .sr-only[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip-path: inset(50%);\n    white-space: nowrap;\n    border-width: 0;\n  }\n  .absolute[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  .fixed[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n  .relative[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .static[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .sticky[_ngcontent-%COMP%] {\n    position: sticky;\n  }\n  .inset-0[_ngcontent-%COMP%] {\n    inset: calc(var(--spacing) * 0);\n  }\n  .inset-y-0[_ngcontent-%COMP%] {\n    inset-block: calc(var(--spacing) * 0);\n  }\n  .\\!top-\\__ph-0__[_ngcontent-%COMP%] {\n    top: 10px !important;\n  }\n  .top-0[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 0);\n  }\n  .top-1[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 1);\n  }\n  .top-1\\/2[_ngcontent-%COMP%] {\n    top: calc(1/2 * 100%);\n  }\n  .top-2[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 2);\n  }\n  .top-2\\.5[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 2.5);\n  }\n  .top-3[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 3);\n  }\n  .top-4[_ngcontent-%COMP%] {\n    top: calc(var(--spacing) * 4);\n  }\n  .top-full[_ngcontent-%COMP%] {\n    top: 100%;\n  }\n  .right-0[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 0);\n  }\n  .right-2[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 2);\n  }\n  .right-3[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 3);\n  }\n  .right-4[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 4);\n  }\n  .right-6[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 6);\n  }\n  .right-8[_ngcontent-%COMP%] {\n    right: calc(var(--spacing) * 8);\n  }\n  .bottom-4[_ngcontent-%COMP%] {\n    bottom: calc(var(--spacing) * 4);\n  }\n  .bottom-6[_ngcontent-%COMP%] {\n    bottom: calc(var(--spacing) * 6);\n  }\n  .left-0[_ngcontent-%COMP%] {\n    left: calc(var(--spacing) * 0);\n  }\n  .left-2[_ngcontent-%COMP%] {\n    left: calc(var(--spacing) * 2);\n  }\n  .left-3[_ngcontent-%COMP%] {\n    left: calc(var(--spacing) * 3);\n  }\n  .left-4[_ngcontent-%COMP%] {\n    left: calc(var(--spacing) * 4);\n  }\n  .z-0[_ngcontent-%COMP%] {\n    z-index: 0;\n  }\n  .z-1[_ngcontent-%COMP%] {\n    z-index: 1;\n  }\n  .z-10[_ngcontent-%COMP%] {\n    z-index: 10;\n  }\n  .z-40[_ngcontent-%COMP%] {\n    z-index: 40;\n  }\n  .z-50[_ngcontent-%COMP%] {\n    z-index: 50;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    grid-column: 6;\n  }\n  .col-span-1[_ngcontent-%COMP%] {\n    grid-column: span 1 / span 1;\n  }\n  .col-span-2[_ngcontent-%COMP%] {\n    grid-column: span 2 / span 2;\n  }\n  .col-span-3[_ngcontent-%COMP%] {\n    grid-column: span 3 / span 3;\n  }\n  .col-span-12[_ngcontent-%COMP%] {\n    grid-column: span 12 / span 12;\n  }\n  .col-span-full[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  @media (width >= 40rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 40rem;\n    }\n  }\n  @media (width >= 48rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 48rem;\n    }\n  }\n  @media (width >= 64rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 64rem;\n    }\n  }\n  @media (width >= 80rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 80rem;\n    }\n  }\n  @media (width >= 96rem) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 96rem;\n    }\n  }\n  .mx-2[_ngcontent-%COMP%] {\n    margin-inline: calc(var(--spacing) * 2);\n  }\n  .mx-4[_ngcontent-%COMP%] {\n    margin-inline: calc(var(--spacing) * 4);\n  }\n  .mx-auto[_ngcontent-%COMP%] {\n    margin-inline: auto;\n  }\n  .my-1[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 1);\n  }\n  .my-2[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 2);\n  }\n  .my-3[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 3);\n  }\n  .my-4[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 4);\n  }\n  .my-8[_ngcontent-%COMP%] {\n    margin-block: calc(var(--spacing) * 8);\n  }\n  .mt-0[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 0);\n  }\n  .mt-0\\.5[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 0.5);\n  }\n  .mt-1[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 1);\n  }\n  .mt-2[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 2);\n  }\n  .mt-3[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 3);\n  }\n  .mt-4[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 4);\n  }\n  .mt-5[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 5);\n  }\n  .mt-6[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 6);\n  }\n  .mt-8[_ngcontent-%COMP%] {\n    margin-top: calc(var(--spacing) * 8);\n  }\n  .mr-1[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 1);\n  }\n  .mr-2[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 2);\n  }\n  .mr-2\\.5[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 2.5);\n  }\n  .mr-3[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 3);\n  }\n  .mr-4[_ngcontent-%COMP%] {\n    margin-right: calc(var(--spacing) * 4);\n  }\n  .\\!mb-0[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 0) !important;\n  }\n  .mb-1[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 1);\n  }\n  .mb-2[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 2);\n  }\n  .mb-3[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 3);\n  }\n  .mb-4[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 4);\n  }\n  .mb-5[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 5);\n  }\n  .mb-6[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 6);\n  }\n  .mb-8[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 8);\n  }\n  .mb-12[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 12);\n  }\n  .mb-16[_ngcontent-%COMP%] {\n    margin-bottom: calc(var(--spacing) * 16);\n  }\n  .-ml-1[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * -1);\n  }\n  .ml-1[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 1);\n  }\n  .ml-2[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 2);\n  }\n  .ml-3[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 3);\n  }\n  .ml-4[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 4);\n  }\n  .ml-6[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 6);\n  }\n  .ml-7[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 7);\n  }\n  .ml-8[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 8);\n  }\n  .ml-16[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 16);\n  }\n  .ml-64[_ngcontent-%COMP%] {\n    margin-left: calc(var(--spacing) * 64);\n  }\n  .ml-auto[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  .\\!line-clamp-2[_ngcontent-%COMP%] {\n    overflow: hidden !important;\n    display: -webkit-box !important;\n    -webkit-box-orient: vertical !important;\n    -webkit-line-clamp: 2 !important;\n  }\n  .line-clamp-1[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 1;\n  }\n  .line-clamp-2[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n  }\n  .line-clamp-3[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n  }\n  .\\!block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .\\!grid[_ngcontent-%COMP%] {\n    display: grid !important;\n  }\n  .\\!hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .block[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .contents[_ngcontent-%COMP%] {\n    display: contents;\n  }\n  .flex[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .flow-root[_ngcontent-%COMP%] {\n    display: flow-root;\n  }\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n  }\n  .hidden[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .inline[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .inline-block[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .inline-grid[_ngcontent-%COMP%] {\n    display: inline-grid;\n  }\n  .inline-table[_ngcontent-%COMP%] {\n    display: inline-table;\n  }\n  .list-item[_ngcontent-%COMP%] {\n    display: list-item;\n  }\n  .table[_ngcontent-%COMP%] {\n    display: table;\n  }\n  .table-caption[_ngcontent-%COMP%] {\n    display: table-caption;\n  }\n  .table-cell[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n  .table-column[_ngcontent-%COMP%] {\n    display: table-column;\n  }\n  .table-column-group[_ngcontent-%COMP%] {\n    display: table-column-group;\n  }\n  .table-footer-group[_ngcontent-%COMP%] {\n    display: table-footer-group;\n  }\n  .table-header-group[_ngcontent-%COMP%] {\n    display: table-header-group;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    display: table-row;\n  }\n  .table-row-group[_ngcontent-%COMP%] {\n    display: table-row-group;\n  }\n  .aspect-square[_ngcontent-%COMP%] {\n    aspect-ratio: 1 / 1;\n  }\n  .size-3[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 3);\n    height: calc(var(--spacing) * 3);\n  }\n  .size-4[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 4);\n    height: calc(var(--spacing) * 4);\n  }\n  .size-5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 5);\n    height: calc(var(--spacing) * 5);\n  }\n  .size-6[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 6);\n    height: calc(var(--spacing) * 6);\n  }\n  .size-10[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 10);\n    height: calc(var(--spacing) * 10);\n  }\n  .h-1[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 1);\n  }\n  .h-1\\.5[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 1.5);\n  }\n  .h-2[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 2);\n  }\n  .h-2\\.5[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 2.5);\n  }\n  .h-3[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 3);\n  }\n  .h-3\\.5[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 3.5);\n  }\n  .h-4[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 4);\n  }\n  .h-5[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 5);\n  }\n  .h-6[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 6);\n  }\n  .h-7[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 7);\n  }\n  .h-8[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 8);\n  }\n  .h-10[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 10);\n  }\n  .h-12[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 12);\n  }\n  .h-14[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 14);\n  }\n  .h-16[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 16);\n  }\n  .h-20[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 20);\n  }\n  .h-24[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 24);\n  }\n  .h-32[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 32);\n  }\n  .h-40[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 40);\n  }\n  .h-48[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 48);\n  }\n  .h-64[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 64);\n  }\n  .h-100[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 100);\n  }\n  .h-\\__ph-0__[_ngcontent-%COMP%] {\n    height: 230px;\n  }\n  .h-\\__ph-0__[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .h-\\__ph-0__[_ngcontent-%COMP%] {\n    height: calc(100vh - 200px);\n  }\n  .h-fit[_ngcontent-%COMP%] {\n    height: fit-content;\n  }\n  .h-full[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .h-screen[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  .max-h-60[_ngcontent-%COMP%] {\n    max-height: calc(var(--spacing) * 60);\n  }\n  .max-h-72[_ngcontent-%COMP%] {\n    max-height: calc(var(--spacing) * 72);\n  }\n  .max-h-\\__ph-0__[_ngcontent-%COMP%] {\n    max-height: 60vh;\n  }\n  .max-h-\\__ph-0__[_ngcontent-%COMP%] {\n    max-height: 90vh;\n  }\n  .max-h-\\__ph-0__[_ngcontent-%COMP%] {\n    max-height: 600px;\n  }\n  .max-h-\\__ph-0__[_ngcontent-%COMP%] {\n    max-height: calc(90vh - 140px);\n  }\n  .max-h-full[_ngcontent-%COMP%] {\n    max-height: 100%;\n  }\n  .min-h-full[_ngcontent-%COMP%] {\n    min-height: 100%;\n  }\n  .min-h-screen[_ngcontent-%COMP%] {\n    min-height: 100vh;\n  }\n  .w-0[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 0);\n  }\n  .w-1[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 1);\n  }\n  .w-1\\.5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 1.5);\n  }\n  .w-1\\/3[_ngcontent-%COMP%] {\n    width: calc(1/3 * 100%);\n  }\n  .w-2[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 2);\n  }\n  .w-2\\.5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 2.5);\n  }\n  .w-2\\/3[_ngcontent-%COMP%] {\n    width: calc(2/3 * 100%);\n  }\n  .w-3[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 3);\n  }\n  .w-3\\.5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 3.5);\n  }\n  .w-4[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 4);\n  }\n  .w-5[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 5);\n  }\n  .w-6[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 6);\n  }\n  .w-7[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 7);\n  }\n  .w-8[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 8);\n  }\n  .w-10[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 10);\n  }\n  .w-11[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 11);\n  }\n  .w-12[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 12);\n  }\n  .w-14[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 14);\n  }\n  .w-16[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 16);\n  }\n  .w-20[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 20);\n  }\n  .w-24[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 24);\n  }\n  .w-28[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 28);\n  }\n  .w-32[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 32);\n  }\n  .w-40[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 40);\n  }\n  .w-44[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 44);\n  }\n  .w-48[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 48);\n  }\n  .w-56[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 56);\n  }\n  .w-64[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 64);\n  }\n  .w-80[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 80);\n  }\n  .w-96[_ngcontent-%COMP%] {\n    width: calc(var(--spacing) * 96);\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 140px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 420px;\n  }\n  .w-\\__ph-0__[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n  .w-auto[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .w-full[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .max-w-2xl[_ngcontent-%COMP%] {\n    max-width: var(--container-2xl);\n  }\n  .max-w-3xl[_ngcontent-%COMP%] {\n    max-width: var(--container-3xl);\n  }\n  .max-w-4xl[_ngcontent-%COMP%] {\n    max-width: var(--container-4xl);\n  }\n  .max-w-5xl[_ngcontent-%COMP%] {\n    max-width: var(--container-5xl);\n  }\n  .max-w-6xl[_ngcontent-%COMP%] {\n    max-width: var(--container-6xl);\n  }\n  .max-w-7xl[_ngcontent-%COMP%] {\n    max-width: var(--container-7xl);\n  }\n  .max-w-\\__ph-0__[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n  .max-w-\\__ph-0__[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n  .max-w-full[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .max-w-lg[_ngcontent-%COMP%] {\n    max-width: var(--container-lg);\n  }\n  .max-w-md[_ngcontent-%COMP%] {\n    max-width: var(--container-md);\n  }\n  .max-w-xl[_ngcontent-%COMP%] {\n    max-width: var(--container-xl);\n  }\n  .min-w-0[_ngcontent-%COMP%] {\n    min-width: calc(var(--spacing) * 0);\n  }\n  .min-w-\\__ph-0__[_ngcontent-%COMP%] {\n    min-width: 1.25rem;\n  }\n  .min-w-\\__ph-0__[_ngcontent-%COMP%] {\n    min-width: 70px;\n  }\n  .min-w-\\__ph-0__[_ngcontent-%COMP%] {\n    min-width: 180px;\n  }\n  .min-w-full[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .flex-1[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .flex-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .border-collapse[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n  }\n  .translate-x-1[_ngcontent-%COMP%] {\n    --tw-translate-x: calc(var(--spacing) * 1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-1\\/2[_ngcontent-%COMP%] {\n    --tw-translate-x: calc(1/2 * 100%);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-5[_ngcontent-%COMP%] {\n    --tw-translate-x: calc(var(--spacing) * 5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-\\__ph-0__[_ngcontent-%COMP%] {\n    --tw-translate-x: -2px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-\\__ph-0__[_ngcontent-%COMP%] {\n    --tw-translate-x: 2px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-1[_ngcontent-%COMP%] {\n    --tw-translate-y: calc(var(--spacing) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-1\\/2[_ngcontent-%COMP%] {\n    --tw-translate-y: calc(calc(1/2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .rotate-90[_ngcontent-%COMP%] {\n    rotate: 90deg;\n  }\n  .rotate-180[_ngcontent-%COMP%] {\n    rotate: 180deg;\n  }\n  .transform[_ngcontent-%COMP%] {\n    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);\n  }\n  .transform\\![_ngcontent-%COMP%] {\n    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,) !important;\n  }\n  .animate-pulse[_ngcontent-%COMP%] {\n    animation: var(--animate-pulse);\n  }\n  .animate-spin[_ngcontent-%COMP%] {\n    animation: var(--animate-spin);\n  }\n  .cursor-default[_ngcontent-%COMP%] {\n    cursor: default;\n  }\n  .cursor-move[_ngcontent-%COMP%] {\n    cursor: move;\n  }\n  .cursor-pointer[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .resize[_ngcontent-%COMP%] {\n    resize: both;\n  }\n  .resize-none[_ngcontent-%COMP%] {\n    resize: none;\n  }\n  .list-inside[_ngcontent-%COMP%] {\n    list-style-position: inside;\n  }\n  .list-disc[_ngcontent-%COMP%] {\n    list-style-type: disc;\n  }\n  .list-none[_ngcontent-%COMP%] {\n    list-style-type: none;\n  }\n  .appearance-none[_ngcontent-%COMP%] {\n    appearance: none;\n  }\n  .grid-cols-1[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid-cols-6[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .grid-cols-12[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n  .\\!flex-row[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n  }\n  .flex-col[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .flex-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .place-items-center[_ngcontent-%COMP%] {\n    place-items: center;\n  }\n  .items-center[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .items-end[_ngcontent-%COMP%] {\n    align-items: flex-end;\n  }\n  .items-start[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .justify-between[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .justify-center[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .justify-end[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .gap-1[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 1);\n  }\n  .gap-2[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 2);\n  }\n  .gap-3[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 3);\n  }\n  .gap-4[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 4);\n  }\n  .gap-6[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 6);\n  }\n  .gap-8[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 8);\n  }\n  :where(.space-y-1[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-1\\.5[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-2[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-3[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-4[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-6[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-y-8[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));\n  }\n  :where(.space-x-1[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 1) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.space-x-2[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.space-x-3[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.space-x-4[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.space-x-12[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-space-x-reverse: 0;\n    margin-inline-start: calc(calc(var(--spacing) * 12) * var(--tw-space-x-reverse));\n    margin-inline-end: calc(calc(var(--spacing) * 12) * calc(1 - var(--tw-space-x-reverse)));\n  }\n  :where(.divide-y[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    --tw-divide-y-reverse: 0;\n    border-bottom-style: var(--tw-border-style);\n    border-top-style: var(--tw-border-style);\n    border-top-width: calc(1px * var(--tw-divide-y-reverse));\n    border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  }\n  :where(.divide-gray-200[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n    border-color: var(--color-gray-200);\n  }\n  .truncate[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .overflow-auto[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  .overflow-hidden[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n  .overflow-x-auto[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .overflow-y-auto[_ngcontent-%COMP%] {\n    overflow-y: auto;\n  }\n  .rounded[_ngcontent-%COMP%] {\n    border-radius: 0.25rem;\n  }\n  .rounded-2xl[_ngcontent-%COMP%] {\n    border-radius: var(--radius-2xl);\n  }\n  .rounded-\\__ph-0__[_ngcontent-%COMP%] {\n    border-radius: inherit;\n  }\n  .rounded-full[_ngcontent-%COMP%] {\n    border-radius: calc(infinity * 1px);\n  }\n  .rounded-lg[_ngcontent-%COMP%] {\n    border-radius: var(--radius-lg);\n  }\n  .rounded-md[_ngcontent-%COMP%] {\n    border-radius: var(--radius-md);\n  }\n  .rounded-xl[_ngcontent-%COMP%] {\n    border-radius: var(--radius-xl);\n  }\n  .rounded-b-2xl[_ngcontent-%COMP%] {\n    border-bottom-right-radius: var(--radius-2xl);\n    border-bottom-left-radius: var(--radius-2xl);\n  }\n  .\\!border[_ngcontent-%COMP%] {\n    border-style: var(--tw-border-style) !important;\n    border-width: 1px !important;\n  }\n  .border[_ngcontent-%COMP%] {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-2[_ngcontent-%COMP%] {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n  .border-t[_ngcontent-%COMP%] {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 1px;\n  }\n  .border-r[_ngcontent-%COMP%] {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 1px;\n  }\n  .border-b[_ngcontent-%COMP%] {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n  .border-b-2[_ngcontent-%COMP%] {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 2px;\n  }\n  .border-dashed[_ngcontent-%COMP%] {\n    --tw-border-style: dashed;\n    border-style: dashed;\n  }\n  .\\!border-blue-200[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-200) !important;\n  }\n  .border-amber-200[_ngcontent-%COMP%] {\n    border-color: var(--color-amber-200);\n  }\n  .border-blue-100[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-100);\n  }\n  .border-blue-200[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-200);\n  }\n  .border-blue-300[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-300);\n  }\n  .border-blue-400[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-400);\n  }\n  .border-blue-500[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-500);\n  }\n  .border-blue-600[_ngcontent-%COMP%] {\n    border-color: var(--color-blue-600);\n  }\n  .border-cyan-100[_ngcontent-%COMP%] {\n    border-color: var(--color-cyan-100);\n  }\n  .border-gray-100[_ngcontent-%COMP%] {\n    border-color: var(--color-gray-100);\n  }\n  .border-gray-200[_ngcontent-%COMP%] {\n    border-color: var(--color-gray-200);\n  }\n  .border-gray-300[_ngcontent-%COMP%] {\n    border-color: var(--color-gray-300);\n  }\n  .border-gray-600[_ngcontent-%COMP%] {\n    border-color: var(--color-gray-600);\n  }\n  .border-green-100[_ngcontent-%COMP%] {\n    border-color: var(--color-green-100);\n  }\n  .border-green-200[_ngcontent-%COMP%] {\n    border-color: var(--color-green-200);\n  }\n  .border-indigo-600[_ngcontent-%COMP%] {\n    border-color: var(--color-indigo-600);\n  }\n  .border-orange-100[_ngcontent-%COMP%] {\n    border-color: var(--color-orange-100);\n  }\n  .border-orange-200[_ngcontent-%COMP%] {\n    border-color: var(--color-orange-200);\n  }\n  .border-purple-100[_ngcontent-%COMP%] {\n    border-color: var(--color-purple-100);\n  }\n  .border-red-100[_ngcontent-%COMP%] {\n    border-color: var(--color-red-100);\n  }\n  .border-red-200[_ngcontent-%COMP%] {\n    border-color: var(--color-red-200);\n  }\n  .border-red-300[_ngcontent-%COMP%] {\n    border-color: var(--color-red-300);\n  }\n  .border-red-500[_ngcontent-%COMP%] {\n    border-color: var(--color-red-500);\n  }\n  .border-transparent[_ngcontent-%COMP%] {\n    border-color: transparent;\n  }\n  .border-white[_ngcontent-%COMP%] {\n    border-color: var(--color-white);\n  }\n  .border-yellow-200[_ngcontent-%COMP%] {\n    border-color: var(--color-yellow-200);\n  }\n  .border-t-blue-600[_ngcontent-%COMP%] {\n    border-top-color: var(--color-blue-600);\n  }\n  .border-t-transparent[_ngcontent-%COMP%] {\n    border-top-color: transparent;\n  }\n  .\\!bg-blue-600[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-600) !important;\n  }\n  .bg-\\__ph-0__[_ngcontent-%COMP%] {\n    background-color: #00000085;\n  }\n  .bg-\\__ph-0__[_ngcontent-%COMP%] {\n    background-color: #e0edff;\n  }\n  .bg-amber-50[_ngcontent-%COMP%] {\n    background-color: var(--color-amber-50);\n  }\n  .bg-black[_ngcontent-%COMP%] {\n    background-color: var(--color-black);\n  }\n  .bg-black\\/30[_ngcontent-%COMP%] {\n    background-color: color-mix(in srgb, #000 30%, transparent);\n  }\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/30[_ngcontent-%COMP%] {\n      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);\n    }\n  }\n  .bg-blue-50[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-50);\n  }\n  .bg-blue-100[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-100);\n  }\n  .bg-blue-200[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-200);\n  }\n  .bg-blue-400[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-400);\n  }\n  .bg-blue-500[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-500);\n  }\n  .bg-blue-600[_ngcontent-%COMP%] {\n    background-color: var(--color-blue-600);\n  }\n  .bg-cyan-50[_ngcontent-%COMP%] {\n    background-color: var(--color-cyan-50);\n  }\n  .bg-cyan-100[_ngcontent-%COMP%] {\n    background-color: var(--color-cyan-100);\n  }\n  .bg-emerald-500[_ngcontent-%COMP%] {\n    background-color: var(--color-emerald-500);\n  }\n  .bg-gray-50[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-50);\n  }\n  .bg-gray-100[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-100);\n  }\n  .bg-gray-200[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-200);\n  }\n  .bg-gray-300[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-300);\n  }\n  .bg-gray-400[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-400);\n  }\n  .bg-gray-600[_ngcontent-%COMP%] {\n    background-color: var(--color-gray-600);\n  }\n  .bg-green-50[_ngcontent-%COMP%] {\n    background-color: var(--color-green-50);\n  }\n  .bg-green-100[_ngcontent-%COMP%] {\n    background-color: var(--color-green-100);\n  }\n  .bg-green-500[_ngcontent-%COMP%] {\n    background-color: var(--color-green-500);\n  }\n  .bg-green-600[_ngcontent-%COMP%] {\n    background-color: var(--color-green-600);\n  }\n  .bg-indigo-50[_ngcontent-%COMP%] {\n    background-color: var(--color-indigo-50);\n  }\n  .bg-indigo-100[_ngcontent-%COMP%] {\n    background-color: var(--color-indigo-100);\n  }\n  .bg-indigo-600[_ngcontent-%COMP%] {\n    background-color: var(--color-indigo-600);\n  }\n  .bg-orange-50[_ngcontent-%COMP%] {\n    background-color: var(--color-orange-50);\n  }\n  .bg-orange-100[_ngcontent-%COMP%] {\n    background-color: var(--color-orange-100);\n  }\n  .bg-orange-500[_ngcontent-%COMP%] {\n    background-color: var(--color-orange-500);\n  }\n  .bg-orange-600[_ngcontent-%COMP%] {\n    background-color: var(--color-orange-600);\n  }\n  .bg-pink-100[_ngcontent-%COMP%] {\n    background-color: var(--color-pink-100);\n  }\n  .bg-purple-50[_ngcontent-%COMP%] {\n    background-color: var(--color-purple-50);\n  }\n  .bg-purple-100[_ngcontent-%COMP%] {\n    background-color: var(--color-purple-100);\n  }\n  .bg-purple-500[_ngcontent-%COMP%] {\n    background-color: var(--color-purple-500);\n  }\n  .bg-purple-600[_ngcontent-%COMP%] {\n    background-color: var(--color-purple-600);\n  }\n  .bg-red-50[_ngcontent-%COMP%] {\n    background-color: var(--color-red-50);\n  }\n  .bg-red-100[_ngcontent-%COMP%] {\n    background-color: var(--color-red-100);\n  }\n  .bg-red-500[_ngcontent-%COMP%] {\n    background-color: var(--color-red-500);\n  }\n  .bg-red-600[_ngcontent-%COMP%] {\n    background-color: var(--color-red-600);\n  }\n  .bg-teal-50[_ngcontent-%COMP%] {\n    background-color: var(--color-teal-50);\n  }\n  .bg-transparent[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n  .bg-white[_ngcontent-%COMP%] {\n    background-color: var(--color-white);\n  }\n  .bg-white\\/20[_ngcontent-%COMP%] {\n    background-color: color-mix(in srgb, #fff 20%, transparent);\n  }\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-white\\/20[_ngcontent-%COMP%] {\n      background-color: color-mix(in oklab, var(--color-white) 20%, transparent);\n    }\n  }\n  .bg-yellow-50[_ngcontent-%COMP%] {\n    background-color: var(--color-yellow-50);\n  }\n  .bg-yellow-100[_ngcontent-%COMP%] {\n    background-color: var(--color-yellow-100);\n  }\n  .bg-yellow-500[_ngcontent-%COMP%] {\n    background-color: var(--color-yellow-500);\n  }\n  .bg-gradient-to-br[_ngcontent-%COMP%] {\n    --tw-gradient-position: to bottom right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-r[_ngcontent-%COMP%] {\n    --tw-gradient-position: to right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .from-blue-50[_ngcontent-%COMP%] {\n    --tw-gradient-from: var(--color-blue-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-blue-500[_ngcontent-%COMP%] {\n    --tw-gradient-from: var(--color-blue-500);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-blue-600[_ngcontent-%COMP%] {\n    --tw-gradient-from: var(--color-blue-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-blue-600[_ngcontent-%COMP%] {\n    --tw-gradient-to: var(--color-blue-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-indigo-50[_ngcontent-%COMP%] {\n    --tw-gradient-to: var(--color-indigo-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-purple-600[_ngcontent-%COMP%] {\n    --tw-gradient-to: var(--color-purple-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .object-contain[_ngcontent-%COMP%] {\n    object-fit: contain;\n  }\n  .object-cover[_ngcontent-%COMP%] {\n    object-fit: cover;\n  }\n  .p-1[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 1);\n  }\n  .p-1\\.5[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 1.5);\n  }\n  .p-2[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 2);\n  }\n  .p-2\\.5[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 2.5);\n  }\n  .p-3[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 3);\n  }\n  .p-4[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 4);\n  }\n  .p-5[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 5);\n  }\n  .p-6[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 6);\n  }\n  .p-8[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 8);\n  }\n  .p-12[_ngcontent-%COMP%] {\n    padding: calc(var(--spacing) * 12);\n  }\n  .px-2[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n  .px-2\\.5[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 2.5);\n  }\n  .px-3[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 3);\n  }\n  .px-4[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n  .px-5[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 5);\n  }\n  .px-6[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n  .px-8[_ngcontent-%COMP%] {\n    padding-inline: calc(var(--spacing) * 8);\n  }\n  .py-0[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 0);\n  }\n  .py-0\\.5[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 0.5);\n  }\n  .py-1[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 1);\n  }\n  .py-1\\.5[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 1.5);\n  }\n  .py-2[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 2);\n  }\n  .py-2\\.5[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 2.5);\n  }\n  .py-3[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 3);\n  }\n  .py-4[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 4);\n  }\n  .py-5[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 5);\n  }\n  .py-6[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 6);\n  }\n  .py-8[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 8);\n  }\n  .py-12[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 12);\n  }\n  .py-20[_ngcontent-%COMP%] {\n    padding-block: calc(var(--spacing) * 20);\n  }\n  .pt-0[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 0);\n  }\n  .pt-2[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 2);\n  }\n  .pt-3[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 3);\n  }\n  .pt-4[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 4);\n  }\n  .pt-6[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 6);\n  }\n  .pt-8[_ngcontent-%COMP%] {\n    padding-top: calc(var(--spacing) * 8);\n  }\n  .pr-3[_ngcontent-%COMP%] {\n    padding-right: calc(var(--spacing) * 3);\n  }\n  .pr-4[_ngcontent-%COMP%] {\n    padding-right: calc(var(--spacing) * 4);\n  }\n  .pr-10[_ngcontent-%COMP%] {\n    padding-right: calc(var(--spacing) * 10);\n  }\n  .pb-2[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--spacing) * 2);\n  }\n  .pb-6[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--spacing) * 6);\n  }\n  .pb-8[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--spacing) * 8);\n  }\n  .pb-20[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--spacing) * 20);\n  }\n  .pl-3[_ngcontent-%COMP%] {\n    padding-left: calc(var(--spacing) * 3);\n  }\n  .pl-10[_ngcontent-%COMP%] {\n    padding-left: calc(var(--spacing) * 10);\n  }\n  .text-center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .text-end[_ngcontent-%COMP%] {\n    text-align: end;\n  }\n  .text-left[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .text-right[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n  .text-start[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n  .align-middle[_ngcontent-%COMP%] {\n    vertical-align: middle;\n  }\n  .font-mono[_ngcontent-%COMP%] {\n    font-family: var(--font-mono);\n  }\n  .\\!text-xs[_ngcontent-%COMP%] {\n    font-size: var(--text-xs) !important;\n    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;\n  }\n  .text-2xl[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n    line-height: var(--tw-leading, var(--text-2xl--line-height));\n  }\n  .text-3xl[_ngcontent-%COMP%] {\n    font-size: var(--text-3xl);\n    line-height: var(--tw-leading, var(--text-3xl--line-height));\n  }\n  .text-4xl[_ngcontent-%COMP%] {\n    font-size: var(--text-4xl);\n    line-height: var(--tw-leading, var(--text-4xl--line-height));\n  }\n  .text-5xl[_ngcontent-%COMP%] {\n    font-size: var(--text-5xl);\n    line-height: var(--tw-leading, var(--text-5xl--line-height));\n  }\n  .text-base[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n  .text-lg[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n  }\n  .text-sm[_ngcontent-%COMP%] {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n  }\n  .text-xl[_ngcontent-%COMP%] {\n    font-size: var(--text-xl);\n    line-height: var(--tw-leading, var(--text-xl--line-height));\n  }\n  .text-xs[_ngcontent-%COMP%] {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n  .text-\\__ph-0__[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .leading-5[_ngcontent-%COMP%] {\n    --tw-leading: calc(var(--spacing) * 5);\n    line-height: calc(var(--spacing) * 5);\n  }\n  .leading-none[_ngcontent-%COMP%] {\n    --tw-leading: 1;\n    line-height: 1;\n  }\n  .leading-relaxed[_ngcontent-%COMP%] {\n    --tw-leading: var(--leading-relaxed);\n    line-height: var(--leading-relaxed);\n  }\n  .leading-tight[_ngcontent-%COMP%] {\n    --tw-leading: var(--leading-tight);\n    line-height: var(--leading-tight);\n  }\n  .font-bold[_ngcontent-%COMP%] {\n    --tw-font-weight: var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n  .font-medium[_ngcontent-%COMP%] {\n    --tw-font-weight: var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n  .font-semibold[_ngcontent-%COMP%] {\n    --tw-font-weight: var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n  .tracking-tight[_ngcontent-%COMP%] {\n    --tw-tracking: var(--tracking-tight);\n    letter-spacing: var(--tracking-tight);\n  }\n  .tracking-wide[_ngcontent-%COMP%] {\n    --tw-tracking: var(--tracking-wide);\n    letter-spacing: var(--tracking-wide);\n  }\n  .tracking-wider[_ngcontent-%COMP%] {\n    --tw-tracking: var(--tracking-wider);\n    letter-spacing: var(--tracking-wider);\n  }\n  .break-all[_ngcontent-%COMP%] {\n    word-break: break-all;\n  }\n  .whitespace-nowrap[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  .text-amber-600[_ngcontent-%COMP%] {\n    color: var(--color-amber-600);\n  }\n  .text-amber-700[_ngcontent-%COMP%] {\n    color: var(--color-amber-700);\n  }\n  .text-amber-800[_ngcontent-%COMP%] {\n    color: var(--color-amber-800);\n  }\n  .text-blue-100[_ngcontent-%COMP%] {\n    color: var(--color-blue-100);\n  }\n  .text-blue-200[_ngcontent-%COMP%] {\n    color: var(--color-blue-200);\n  }\n  .text-blue-400[_ngcontent-%COMP%] {\n    color: var(--color-blue-400);\n  }\n  .text-blue-500[_ngcontent-%COMP%] {\n    color: var(--color-blue-500);\n  }\n  .text-blue-600[_ngcontent-%COMP%] {\n    color: var(--color-blue-600);\n  }\n  .text-blue-700[_ngcontent-%COMP%] {\n    color: var(--color-blue-700);\n  }\n  .text-blue-800[_ngcontent-%COMP%] {\n    color: var(--color-blue-800);\n  }\n  .text-blue-900[_ngcontent-%COMP%] {\n    color: var(--color-blue-900);\n  }\n  .text-cyan-400[_ngcontent-%COMP%] {\n    color: var(--color-cyan-400);\n  }\n  .text-cyan-600[_ngcontent-%COMP%] {\n    color: var(--color-cyan-600);\n  }\n  .text-gray-300[_ngcontent-%COMP%] {\n    color: var(--color-gray-300);\n  }\n  .text-gray-400[_ngcontent-%COMP%] {\n    color: var(--color-gray-400);\n  }\n  .text-gray-500[_ngcontent-%COMP%] {\n    color: var(--color-gray-500);\n  }\n  .text-gray-600[_ngcontent-%COMP%] {\n    color: var(--color-gray-600);\n  }\n  .text-gray-700[_ngcontent-%COMP%] {\n    color: var(--color-gray-700);\n  }\n  .text-gray-800[_ngcontent-%COMP%] {\n    color: var(--color-gray-800);\n  }\n  .text-gray-900[_ngcontent-%COMP%] {\n    color: var(--color-gray-900);\n  }\n  .text-green-400[_ngcontent-%COMP%] {\n    color: var(--color-green-400);\n  }\n  .text-green-500[_ngcontent-%COMP%] {\n    color: var(--color-green-500);\n  }\n  .text-green-600[_ngcontent-%COMP%] {\n    color: var(--color-green-600);\n  }\n  .text-green-700[_ngcontent-%COMP%] {\n    color: var(--color-green-700);\n  }\n  .text-green-800[_ngcontent-%COMP%] {\n    color: var(--color-green-800);\n  }\n  .text-green-900[_ngcontent-%COMP%] {\n    color: var(--color-green-900);\n  }\n  .text-indigo-500[_ngcontent-%COMP%] {\n    color: var(--color-indigo-500);\n  }\n  .text-indigo-600[_ngcontent-%COMP%] {\n    color: var(--color-indigo-600);\n  }\n  .text-orange-400[_ngcontent-%COMP%] {\n    color: var(--color-orange-400);\n  }\n  .text-orange-500[_ngcontent-%COMP%] {\n    color: var(--color-orange-500);\n  }\n  .text-orange-600[_ngcontent-%COMP%] {\n    color: var(--color-orange-600);\n  }\n  .text-orange-700[_ngcontent-%COMP%] {\n    color: var(--color-orange-700);\n  }\n  .text-orange-800[_ngcontent-%COMP%] {\n    color: var(--color-orange-800);\n  }\n  .text-orange-900[_ngcontent-%COMP%] {\n    color: var(--color-orange-900);\n  }\n  .text-pink-600[_ngcontent-%COMP%] {\n    color: var(--color-pink-600);\n  }\n  .text-pink-800[_ngcontent-%COMP%] {\n    color: var(--color-pink-800);\n  }\n  .text-purple-400[_ngcontent-%COMP%] {\n    color: var(--color-purple-400);\n  }\n  .text-purple-500[_ngcontent-%COMP%] {\n    color: var(--color-purple-500);\n  }\n  .text-purple-600[_ngcontent-%COMP%] {\n    color: var(--color-purple-600);\n  }\n  .text-purple-700[_ngcontent-%COMP%] {\n    color: var(--color-purple-700);\n  }\n  .text-purple-800[_ngcontent-%COMP%] {\n    color: var(--color-purple-800);\n  }\n  .text-red-400[_ngcontent-%COMP%] {\n    color: var(--color-red-400);\n  }\n  .text-red-500[_ngcontent-%COMP%] {\n    color: var(--color-red-500);\n  }\n  .text-red-600[_ngcontent-%COMP%] {\n    color: var(--color-red-600);\n  }\n  .text-red-700[_ngcontent-%COMP%] {\n    color: var(--color-red-700);\n  }\n  .text-red-800[_ngcontent-%COMP%] {\n    color: var(--color-red-800);\n  }\n  .text-slate-600[_ngcontent-%COMP%] {\n    color: var(--color-slate-600);\n  }\n  .text-teal-600[_ngcontent-%COMP%] {\n    color: var(--color-teal-600);\n  }\n  .text-white[_ngcontent-%COMP%] {\n    color: var(--color-white);\n  }\n  .text-yellow-400[_ngcontent-%COMP%] {\n    color: var(--color-yellow-400);\n  }\n  .text-yellow-500[_ngcontent-%COMP%] {\n    color: var(--color-yellow-500);\n  }\n  .text-yellow-600[_ngcontent-%COMP%] {\n    color: var(--color-yellow-600);\n  }\n  .text-yellow-700[_ngcontent-%COMP%] {\n    color: var(--color-yellow-700);\n  }\n  .text-yellow-800[_ngcontent-%COMP%] {\n    color: var(--color-yellow-800);\n  }\n  .capitalize[_ngcontent-%COMP%] {\n    text-transform: capitalize;\n  }\n  .lowercase[_ngcontent-%COMP%] {\n    text-transform: lowercase;\n  }\n  .uppercase[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n  }\n  .italic[_ngcontent-%COMP%] {\n    font-style: italic;\n  }\n  .ordinal[_ngcontent-%COMP%] {\n    --tw-ordinal: ordinal;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .ordinal\\![_ngcontent-%COMP%] {\n    --tw-ordinal: ordinal !important;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,) !important;\n  }\n  .line-through[_ngcontent-%COMP%] {\n    text-decoration-line: line-through;\n  }\n  .overline[_ngcontent-%COMP%] {\n    text-decoration-line: overline;\n  }\n  .underline[_ngcontent-%COMP%] {\n    text-decoration-line: underline;\n  }\n  .placeholder-gray-400[_ngcontent-%COMP%]::placeholder {\n    color: var(--color-gray-400);\n  }\n  .opacity-0[_ngcontent-%COMP%] {\n    opacity: 0%;\n  }\n  .opacity-25[_ngcontent-%COMP%] {\n    opacity: 25%;\n  }\n  .opacity-50[_ngcontent-%COMP%] {\n    opacity: 50%;\n  }\n  .opacity-60[_ngcontent-%COMP%] {\n    opacity: 60%;\n  }\n  .opacity-75[_ngcontent-%COMP%] {\n    opacity: 75%;\n  }\n  .opacity-80[_ngcontent-%COMP%] {\n    opacity: 80%;\n  }\n  .shadow[_ngcontent-%COMP%] {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-2xl[_ngcontent-%COMP%] {\n    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-lg[_ngcontent-%COMP%] {\n    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-md[_ngcontent-%COMP%] {\n    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-sm[_ngcontent-%COMP%] {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .shadow-xl[_ngcontent-%COMP%] {\n    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .ring-2[_ngcontent-%COMP%] {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .ring-blue-500[_ngcontent-%COMP%] {\n    --tw-ring-color: var(--color-blue-500);\n  }\n  .outline[_ngcontent-%COMP%] {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .blur[_ngcontent-%COMP%] {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .grayscale[_ngcontent-%COMP%] {\n    --tw-grayscale: grayscale(100%);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .filter[_ngcontent-%COMP%] {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .filter\\![_ngcontent-%COMP%] {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,) !important;\n  }\n  .transition[_ngcontent-%COMP%] {\n    transition-property:\n      color,\n      background-color,\n      border-color,\n      outline-color,\n      text-decoration-color,\n      fill,\n      stroke,\n      --tw-gradient-from,\n      --tw-gradient-via,\n      --tw-gradient-to,\n      opacity,\n      box-shadow,\n      transform,\n      translate,\n      scale,\n      rotate,\n      filter,\n      -webkit-backdrop-filter,\n      backdrop-filter,\n      display,\n      content-visibility,\n      overlay,\n      pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-all[_ngcontent-%COMP%] {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-colors[_ngcontent-%COMP%] {\n    transition-property:\n      color,\n      background-color,\n      border-color,\n      outline-color,\n      text-decoration-color,\n      fill,\n      stroke,\n      --tw-gradient-from,\n      --tw-gradient-via,\n      --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-opacity[_ngcontent-%COMP%] {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-shadow[_ngcontent-%COMP%] {\n    transition-property: box-shadow;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-transform[_ngcontent-%COMP%] {\n    transition-property:\n      transform,\n      translate,\n      scale,\n      rotate;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .delay-1[_ngcontent-%COMP%] {\n    transition-delay: 1ms;\n  }\n  .delay-2[_ngcontent-%COMP%] {\n    transition-delay: 2ms;\n  }\n  .duration-200[_ngcontent-%COMP%] {\n    --tw-duration: 200ms;\n    transition-duration: 200ms;\n  }\n  .duration-300[_ngcontent-%COMP%] {\n    --tw-duration: 300ms;\n    transition-duration: 300ms;\n  }\n  .duration-400[_ngcontent-%COMP%] {\n    --tw-duration: 400ms;\n    transition-duration: 400ms;\n  }\n  .ease-in[_ngcontent-%COMP%] {\n    --tw-ease: var(--ease-in);\n    transition-timing-function: var(--ease-in);\n  }\n  .ease-in-out[_ngcontent-%COMP%] {\n    --tw-ease: var(--ease-in-out);\n    transition-timing-function: var(--ease-in-out);\n  }\n  .ease-out[_ngcontent-%COMP%] {\n    --tw-ease: var(--ease-out);\n    transition-timing-function: var(--ease-out);\n  }\n  .select-none[_ngcontent-%COMP%] {\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  @media (hover: hover) {\n    .group-hover\\:scale-110[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      --tw-scale-x: 110%;\n      --tw-scale-y: 110%;\n      --tw-scale-z: 110%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:bg-blue-200[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      background-color: var(--color-blue-200);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:text-blue-600[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      color: var(--color-blue-600);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:text-blue-700[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      color: var(--color-blue-700);\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:opacity-50[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      opacity: 50%;\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:opacity-75[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      opacity: 75%;\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\:opacity-100[_ngcontent-%COMP%]:is(:where(.group):hover *) {\n      opacity: 100%;\n    }\n  }\n  @media (hover: hover) {\n    .group-hover\\/title\\:text-blue-600[_ngcontent-%COMP%]:is(:where(.group\\/title):hover *) {\n      color: var(--color-blue-600);\n    }\n  }\n  .peer-checked\\:bg-blue-600[_ngcontent-%COMP%]:is(:where(.peer):checked ~ *) {\n    background-color: var(--color-blue-600);\n  }\n  .peer-focus\\:ring-4[_ngcontent-%COMP%]:is(:where(.peer):focus ~ *) {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .peer-focus\\:ring-blue-300[_ngcontent-%COMP%]:is(:where(.peer):focus ~ *) {\n    --tw-ring-color: var(--color-blue-300);\n  }\n  .peer-focus\\:outline-none[_ngcontent-%COMP%]:is(:where(.peer):focus ~ *) {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .after\\:absolute[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    position: absolute;\n  }\n  .after\\:top-\\__ph-0__[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    top: 2px;\n  }\n  .after\\:left-\\__ph-0__[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    left: 2px;\n  }\n  .after\\:h-5[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    height: calc(var(--spacing) * 5);\n  }\n  .after\\:w-5[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    width: calc(var(--spacing) * 5);\n  }\n  .after\\:rounded-full[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    border-radius: calc(infinity * 1px);\n  }\n  .after\\:border[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .after\\:border-gray-300[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    border-color: var(--color-gray-300);\n  }\n  .after\\:bg-white[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    background-color: var(--color-white);\n  }\n  .after\\:transition-all[_ngcontent-%COMP%]::after {\n    content: var(--tw-content);\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .after\\:content-\\__ph-0__[_ngcontent-%COMP%]::after {\n    --tw-content: "";\n    content: var(--tw-content);\n  }\n  .peer-checked\\:after\\:translate-x-full[_ngcontent-%COMP%]:is(:where(.peer):checked ~ *)::after {\n    content: var(--tw-content);\n    --tw-translate-x: 100%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .peer-checked\\:after\\:border-white[_ngcontent-%COMP%]:is(:where(.peer):checked ~ *)::after {\n    content: var(--tw-content);\n    border-color: var(--color-white);\n  }\n  .last\\:border-b-0[_ngcontent-%COMP%]:last-child {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 0px;\n  }\n  @media (hover: hover) {\n    .hover\\:scale-105[_ngcontent-%COMP%]:hover {\n      --tw-scale-x: 105%;\n      --tw-scale-y: 105%;\n      --tw-scale-z: 105%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:scale-110[_ngcontent-%COMP%]:hover {\n      --tw-scale-x: 110%;\n      --tw-scale-y: 110%;\n      --tw-scale-z: 110%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-blue-300[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-blue-300);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-blue-400[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-blue-400);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-blue-500[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-blue-500);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-gray-300[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-gray-300);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:border-gray-400[_ngcontent-%COMP%]:hover {\n      border-color: var(--color-gray-400);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-black[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-black);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-blue-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-100[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-blue-100);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-200[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-blue-200);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-blue-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-blue-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-100[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-100);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-200[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-200);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-300[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-300);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-gray-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-gray-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-green-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-green-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-green-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-green-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-indigo-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-indigo-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-indigo-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-indigo-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-orange-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-orange-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-orange-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-orange-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-purple-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-purple-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-purple-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-purple-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-red-50[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-red-50);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-red-100[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-red-100);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-red-600[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-red-600);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:bg-red-700[_ngcontent-%COMP%]:hover {\n      background-color: var(--color-red-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:from-blue-700[_ngcontent-%COMP%]:hover {\n      --tw-gradient-from: var(--color-blue-700);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:to-purple-700[_ngcontent-%COMP%]:hover {\n      --tw-gradient-to: var(--color-purple-700);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-500[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-500);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-600[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-600);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-700[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-800[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-800);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-blue-900[_ngcontent-%COMP%]:hover {\n      color: var(--color-blue-900);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-gray-300[_ngcontent-%COMP%]:hover {\n      color: var(--color-gray-300);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-gray-600[_ngcontent-%COMP%]:hover {\n      color: var(--color-gray-600);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-gray-700[_ngcontent-%COMP%]:hover {\n      color: var(--color-gray-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-gray-800[_ngcontent-%COMP%]:hover {\n      color: var(--color-gray-800);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-green-700[_ngcontent-%COMP%]:hover {\n      color: var(--color-green-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-green-900[_ngcontent-%COMP%]:hover {\n      color: var(--color-green-900);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-orange-900[_ngcontent-%COMP%]:hover {\n      color: var(--color-orange-900);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-red-600[_ngcontent-%COMP%]:hover {\n      color: var(--color-red-600);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-red-700[_ngcontent-%COMP%]:hover {\n      color: var(--color-red-700);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:text-red-900[_ngcontent-%COMP%]:hover {\n      color: var(--color-red-900);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:no-underline[_ngcontent-%COMP%]:hover {\n      text-decoration-line: none;\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:underline[_ngcontent-%COMP%]:hover {\n      text-decoration-line: underline;\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:shadow-md[_ngcontent-%COMP%]:hover {\n      --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n      box-shadow:\n        var(--tw-inset-shadow),\n        var(--tw-inset-ring-shadow),\n        var(--tw-ring-offset-shadow),\n        var(--tw-ring-shadow),\n        var(--tw-shadow);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:shadow-sm[_ngcontent-%COMP%]:hover {\n      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n      box-shadow:\n        var(--tw-inset-shadow),\n        var(--tw-inset-ring-shadow),\n        var(--tw-ring-offset-shadow),\n        var(--tw-ring-shadow),\n        var(--tw-shadow);\n    }\n  }\n  @media (hover: hover) {\n    .hover\\:shadow-xl[_ngcontent-%COMP%]:hover {\n      --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n      box-shadow:\n        var(--tw-inset-shadow),\n        var(--tw-inset-ring-shadow),\n        var(--tw-ring-offset-shadow),\n        var(--tw-ring-shadow),\n        var(--tw-shadow);\n    }\n  }\n  .focus\\:border-blue-500[_ngcontent-%COMP%]:focus {\n    border-color: var(--color-blue-500);\n  }\n  .focus\\:border-indigo-500[_ngcontent-%COMP%]:focus {\n    border-color: var(--color-indigo-500);\n  }\n  .focus\\:border-red-500[_ngcontent-%COMP%]:focus {\n    border-color: var(--color-red-500);\n  }\n  .focus\\:border-transparent[_ngcontent-%COMP%]:focus {\n    border-color: transparent;\n  }\n  .focus\\:bg-blue-50[_ngcontent-%COMP%]:focus {\n    background-color: var(--color-blue-50);\n  }\n  .focus\\:ring-2[_ngcontent-%COMP%]:focus {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow:\n      var(--tw-inset-shadow),\n      var(--tw-inset-ring-shadow),\n      var(--tw-ring-offset-shadow),\n      var(--tw-ring-shadow),\n      var(--tw-shadow);\n  }\n  .focus\\:ring-blue-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-blue-500);\n  }\n  .focus\\:ring-gray-300[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-gray-300);\n  }\n  .focus\\:ring-gray-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-gray-500);\n  }\n  .focus\\:ring-green-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-green-500);\n  }\n  .focus\\:ring-indigo-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-indigo-500);\n  }\n  .focus\\:ring-orange-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-orange-500);\n  }\n  .focus\\:ring-red-500[_ngcontent-%COMP%]:focus {\n    --tw-ring-color: var(--color-red-500);\n  }\n  .focus\\:ring-offset-2[_ngcontent-%COMP%]:focus {\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n  .focus\\:outline-none[_ngcontent-%COMP%]:focus {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .enabled\\:text-gray-700[_ngcontent-%COMP%]:enabled {\n    color: var(--color-gray-700);\n  }\n  @media (hover: hover) {\n    .enabled\\:hover\\:bg-gray-50[_ngcontent-%COMP%]:enabled:hover {\n      background-color: var(--color-gray-50);\n    }\n  }\n  .disabled\\:transform-none[_ngcontent-%COMP%]:disabled {\n    transform: none;\n  }\n  .disabled\\:cursor-not-allowed[_ngcontent-%COMP%]:disabled {\n    cursor: not-allowed;\n  }\n  .disabled\\:bg-gray-100[_ngcontent-%COMP%]:disabled {\n    background-color: var(--color-gray-100);\n  }\n  .disabled\\:opacity-50[_ngcontent-%COMP%]:disabled {\n    opacity: 50%;\n  }\n  @media (width >= 40rem) {\n    .sm\\:mb-0[_ngcontent-%COMP%] {\n      margin-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:block[_ngcontent-%COMP%] {\n      display: block;\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:w-64[_ngcontent-%COMP%] {\n      width: calc(var(--spacing) * 64);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:grid-cols-2[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:flex-row[_ngcontent-%COMP%] {\n      flex-direction: row;\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:items-center[_ngcontent-%COMP%] {\n      align-items: center;\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:justify-between[_ngcontent-%COMP%] {\n      justify-content: space-between;\n    }\n  }\n  @media (width >= 40rem) {\n    :where(.sm\\:space-y-0[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  @media (width >= 40rem) {\n    :where(.sm\\:space-x-4[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:p-0[_ngcontent-%COMP%] {\n      padding: calc(var(--spacing) * 0);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:p-6[_ngcontent-%COMP%] {\n      padding: calc(var(--spacing) * 6);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:px-6[_ngcontent-%COMP%] {\n      padding-inline: calc(var(--spacing) * 6);\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:text-left[_ngcontent-%COMP%] {\n      text-align: left;\n    }\n  }\n  @media (width >= 40rem) {\n    .sm\\:text-sm[_ngcontent-%COMP%] {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:col-span-2[_ngcontent-%COMP%] {\n      grid-column: span 2 / span 2;\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:mt-0[_ngcontent-%COMP%] {\n      margin-top: calc(var(--spacing) * 0);\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:w-80[_ngcontent-%COMP%] {\n      width: calc(var(--spacing) * 80);\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:w-100[_ngcontent-%COMP%] {\n      width: calc(var(--spacing) * 100);\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:grid-cols-2[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:grid-cols-3[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:grid-cols-4[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:grid-cols-5[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(5, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:flex-row[_ngcontent-%COMP%] {\n      flex-direction: row;\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:items-center[_ngcontent-%COMP%] {\n      align-items: center;\n    }\n  }\n  @media (width >= 48rem) {\n    .md\\:justify-between[_ngcontent-%COMP%] {\n      justify-content: space-between;\n    }\n  }\n  @media (width >= 48rem) {\n    :where(.md\\:space-y-0[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  @media (width >= 48rem) {\n    :where(.md\\:space-x-3[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:col-span-2[_ngcontent-%COMP%] {\n      grid-column: span 2 / span 2;\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:grid-cols-3[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:grid-cols-4[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:grid-cols-5[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(5, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:grid-cols-6[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(6, minmax(0, 1fr));\n    }\n  }\n  @media (width >= 64rem) {\n    .lg\\:px-8[_ngcontent-%COMP%] {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  @media (width >= 80rem) {\n    .xl\\:col-span-1[_ngcontent-%COMP%] {\n      grid-column: span 1 / span 1;\n    }\n  }\n  @media (width >= 80rem) {\n    .xl\\:col-span-2[_ngcontent-%COMP%] {\n      grid-column: span 2 / span 2;\n    }\n  }\n  @media (width >= 80rem) {\n    .xl\\:grid-cols-4[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n}\n.maintenance-preview-container[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--color-gray-200);\n  background-color: var(--color-gray-50);\n  padding: calc(var(--spacing) * 4);\n  transition-property: all;\n  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n  transition-duration: var(--tw-duration, var(--default-transition-duration));\n}\n@media (hover: hover) {\n  .maintenance-preview-container[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]:hover {\n    border-color: var(--color-gray-300);\n  }\n}\n:where(.maintenance-preview-container[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child)) {\n  --tw-space-y-reverse: 0;\n  margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));\n  margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));\n}\n.maintenance-preview-container[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%]   .asset-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: var(--text-sm);\n  line-height: var(--tw-leading, var(--text-sm--line-height));\n  color: var(--color-gray-600);\n}\n.maintenance-preview-container[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%]   .asset-detail[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.maintenance-preview-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  background-color: var(--color-gray-50);\n  padding-block: calc(var(--spacing) * 12);\n  text-align: center;\n}\n.maintenance-preview-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  line-height: var(--tw-leading, var(--text-sm--line-height));\n  color: var(--color-gray-500);\n}\n.maintenance-preview-container[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  background-color: var(--color-gray-50);\n  padding: calc(var(--spacing) * 3);\n}\n.maintenance-preview-container[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--spacing) * 1);\n  font-size: var(--text-sm);\n  line-height: var(--tw-leading, var(--text-sm--line-height));\n  --tw-font-weight: var(--font-weight-medium);\n  font-weight: var(--font-weight-medium);\n  color: var(--color-gray-700);\n}\n.maintenance-preview-container[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-gray-900);\n}\n@media print {\n  .maintenance-preview-container[_ngcontent-%COMP%]   .print-hide[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@property --tw-translate-x { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-translate-y { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-translate-z { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-rotate-x { syntax: "*"; inherits: false; }\n@property --tw-rotate-y { syntax: "*"; inherits: false; }\n@property --tw-rotate-z { syntax: "*"; inherits: false; }\n@property --tw-skew-x { syntax: "*"; inherits: false; }\n@property --tw-skew-y { syntax: "*"; inherits: false; }\n@property --tw-space-y-reverse { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-space-x-reverse { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-divide-y-reverse { syntax: "*"; inherits: false; initial-value: 0; }\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n@property --tw-gradient-position { syntax: "*"; inherits: false; }\n@property --tw-gradient-from { syntax: "<color>"; inherits: false; initial-value: #0000; }\n@property --tw-gradient-via { syntax: "<color>"; inherits: false; initial-value: #0000; }\n@property --tw-gradient-to { syntax: "<color>"; inherits: false; initial-value: #0000; }\n@property --tw-gradient-stops { syntax: "*"; inherits: false; }\n@property --tw-gradient-via-stops { syntax: "*"; inherits: false; }\n@property --tw-gradient-from-position { syntax: "<length-percentage>"; inherits: false; initial-value: 0%; }\n@property --tw-gradient-via-position { syntax: "<length-percentage>"; inherits: false; initial-value: 50%; }\n@property --tw-gradient-to-position { syntax: "<length-percentage>"; inherits: false; initial-value: 100%; }\n@property --tw-leading { syntax: "*"; inherits: false; }\n@property --tw-font-weight { syntax: "*"; inherits: false; }\n@property --tw-tracking { syntax: "*"; inherits: false; }\n@property --tw-ordinal { syntax: "*"; inherits: false; }\n@property --tw-slashed-zero { syntax: "*"; inherits: false; }\n@property --tw-numeric-figure { syntax: "*"; inherits: false; }\n@property --tw-numeric-spacing { syntax: "*"; inherits: false; }\n@property --tw-numeric-fraction { syntax: "*"; inherits: false; }\n@property --tw-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-shadow-alpha { syntax: "<percentage>"; inherits: false; initial-value: 100%; }\n@property --tw-inset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-inset-shadow-alpha { syntax: "<percentage>"; inherits: false; initial-value: 100%; }\n@property --tw-ring-color { syntax: "*"; inherits: false; }\n@property --tw-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-ring-color { syntax: "*"; inherits: false; }\n@property --tw-inset-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-ring-inset { syntax: "*"; inherits: false; }\n@property --tw-ring-offset-width { syntax: "<length>"; inherits: false; initial-value: 0px; }\n@property --tw-ring-offset-color { syntax: "*"; inherits: false; initial-value: #fff; }\n@property --tw-ring-offset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-outline-style { syntax: "*"; inherits: false; initial-value: solid; }\n@property --tw-blur { syntax: "*"; inherits: false; }\n@property --tw-brightness { syntax: "*"; inherits: false; }\n@property --tw-contrast { syntax: "*"; inherits: false; }\n@property --tw-grayscale { syntax: "*"; inherits: false; }\n@property --tw-hue-rotate { syntax: "*"; inherits: false; }\n@property --tw-invert { syntax: "*"; inherits: false; }\n@property --tw-opacity { syntax: "*"; inherits: false; }\n@property --tw-saturate { syntax: "*"; inherits: false; }\n@property --tw-sepia { syntax: "*"; inherits: false; }\n@property --tw-drop-shadow { syntax: "*"; inherits: false; }\n@property --tw-drop-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-drop-shadow-alpha { syntax: "<percentage>"; inherits: false; initial-value: 100%; }\n@property --tw-drop-shadow-size { syntax: "*"; inherits: false; }\n@property --tw-duration { syntax: "*"; inherits: false; }\n@property --tw-ease { syntax: "*"; inherits: false; }\n@property --tw-scale-x { syntax: "*"; inherits: false; initial-value: 1; }\n@property --tw-scale-y { syntax: "*"; inherits: false; initial-value: 1; }\n@property --tw-scale-z { syntax: "*"; inherits: false; initial-value: 1; }\n@property --tw-content { syntax: "*"; initial-value: ""; inherits: false; }\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@layer properties {\n  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {\n    *[_ngcontent-%COMP%], \n   [_ngcontent-%COMP%]::before, \n   [_ngcontent-%COMP%]::after, \n   [_ngcontent-%COMP%]::backdrop {\n      --tw-translate-x: 0;\n      --tw-translate-y: 0;\n      --tw-translate-z: 0;\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-space-y-reverse: 0;\n      --tw-space-x-reverse: 0;\n      --tw-divide-y-reverse: 0;\n      --tw-border-style: solid;\n      --tw-gradient-position: initial;\n      --tw-gradient-from: #0000;\n      --tw-gradient-via: #0000;\n      --tw-gradient-to: #0000;\n      --tw-gradient-stops: initial;\n      --tw-gradient-via-stops: initial;\n      --tw-gradient-from-position: 0%;\n      --tw-gradient-via-position: 50%;\n      --tw-gradient-to-position: 100%;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-ordinal: initial;\n      --tw-slashed-zero: initial;\n      --tw-numeric-figure: initial;\n      --tw-numeric-spacing: initial;\n      --tw-numeric-fraction: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-outline-style: solid;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-duration: initial;\n      --tw-ease: initial;\n      --tw-scale-x: 1;\n      --tw-scale-y: 1;\n      --tw-scale-z: 1;\n      --tw-content: "";\n    }\n  }\n}\n\n\n/*# sourceMappingURL=plan-preview-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlanPreviewPageComponent, [{
    type: Component,
    args: [{ selector: "app-plan-preview-page", standalone: true, imports: [CommonModule, FormsModule, RouterLink, PlanDialogComponent], template: `<!-- Maintenance Plan Preview Page -->\r
<div class="min-h-screen bg-gray-50 maintenance-preview-container">\r
  <!-- Header -->\r
  <div class="bg-white border-b border-gray-200 px-6 py-4 print-hide">\r
    <div class="flex items-center justify-between">\r
      <!-- Back Button and Breadcrumb -->\r
      <div class="flex items-center space-x-4">\r
        <!-- Breadcrumb -->\r
        <nav class="flex" aria-label="Breadcrumb">\r
          <ol class="flex items-center space-x-2">\r
            <li>\r
              <a [routerLink]="'/maintenance/plans'" class="text-gray-500 hover:text-gray-700 transition-colors">Maintenance\r
                Plans</a>\r
            </li>\r
            <li>\r
              <svg class="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
              </svg>\r
            </li>\r
            <li class="text-gray-900 font-medium">{{ plan?.name || 'Plan Details' }}</li>\r
          </ol>\r
        </nav>\r
      </div>\r
\r
      <!-- Quick Actions -->\r
      <div class="flex items-center space-x-3">\r
        <button\r
          (click)="editPlan(plan)"\r
          class="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
          </svg>\r
          <span>Edit Plan </span>\r
        </button>\r
\r
        <!-- 3-Dot Menu -->\r
        <div class="relative" (click)="$event.stopPropagation()">\r
          <button\r
            (click)="showActionsDropdown = !showActionsDropdown"\r
            class="flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <circle cx="12" cy="5" r="2"/>\r
              <circle cx="12" cy="12" r="2"/>\r
              <circle cx="12" cy="19" r="2"/>\r
            </svg>\r
          </button>\r
\r
          <!-- Dropdown Menu -->\r
          <div *ngIf="showActionsDropdown"\r
               class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">\r
            <button\r
              (click)="duplicatePlan(); showActionsDropdown = false"\r
              class="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">\r
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>\r
              </svg>\r
              <span class="text-gray-700">Duplicate</span>\r
            </button>\r
\r
            <div class="border-t border-gray-100 my-2"></div>\r
\r
            <button\r
              (click)="printPlan(); showActionsDropdown = false"\r
              class="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">\r
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-8a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>\r
              </svg>\r
              <span class="text-gray-700">Print</span>\r
            </button>\r
\r
            <button\r
              (click)="exportPlan(); showActionsDropdown = false"\r
              class="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">\r
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>\r
              </svg>\r
              <span class="text-gray-700">Export</span>\r
            </button>\r
\r
            <button\r
              (click)="sharePlan(); showActionsDropdown = false"\r
              class="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">\r
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>\r
              </svg>\r
              <span class="text-gray-700">Share</span>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">\r
        <svg class="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor"\r
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">Loading Plan</h3>\r
      <p class="text-sm text-gray-500">Please wait while we fetch the plan details...</p>\r
    </div>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">\r
        <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">Error Loading Plan</h3>\r
      <p class="text-sm text-gray-500 mb-4">{{ error }}</p>\r
      <button\r
        (click)="loadPlanData(plan?.id || 0)"\r
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">\r
        Try Again\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Main Content -->\r
  <div *ngIf="plan && !loading" class="px-6 py-6">\r
    <!-- Plan Header -->\r
    <div class="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-200">\r
      <div class="flex items-start justify-between mb-4">\r
        <div class="flex items-center space-x-4">\r
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">\r
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>\r
            </svg>\r
          </div>\r
          <div>\r
            <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ plan.name }}</h1>\r
            <div class="flex items-center space-x-4">\r
              <span\r
                *ngIf="plan.plan_type"\r
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">\r
                {{ plan.plan_type }}\r
              </span>\r
              <span class="text-gray-500">{{ plan.estimeted_duration || 0 }} hours</span>\r
              <span class="text-gray-500">\u2022</span>\r
              <span class="text-gray-500">{{ plan.is_active ? 'Active' : 'Inactive' }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Plan ID with Copy -->\r
        <div class="text-right">\r
          <div class="flex items-center space-x-2 mb-2">\r
            <span class="text-sm text-gray-500">Plan ID:</span>\r
            <button\r
              (click)="copyPlanId()"\r
              class="flex items-center space-x-1 px-2 py-1 text-sm font-mono bg-gray-100 rounded hover:bg-gray-200 transition-colors">\r
              <span>{{ plan.id }}</span>\r
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>\r
              </svg>\r
            </button>\r
          </div>\r
          <div *ngIf="plan.frequency_type" class="flex items-center space-x-2">\r
            <span class="text-sm text-gray-500">Frequency:</span>\r
            <span class="text-sm font-medium text-gray-900">\r
              {{ getFrequencyLabel(plan.frequency_type, plan.frequency_value, plan.frequency_unit) }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Main Content Grid -->\r
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">\r
      <!-- Left Column -->\r
      <div class="lg:col-span-2 space-y-6">\r
        <!-- Basic Information -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center space-x-2 mb-6">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
            </svg>\r
            <h2 class="text-lg font-semibold text-gray-900">Plan Information</h2>\r
          </div>\r
\r
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">\r
            <!-- Left Column -->\r
            <div class="space-y-6">\r
              <!-- Plan Name -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Plan Name</h4>\r
                <p class="text-lg font-semibold text-gray-900">{{ plan?.name || 'Unnamed Plan' }}</p>\r
              </div>\r
\r
              <!-- Description -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Description</h4>\r
                <div class="relative">\r
                  <p class="text-gray-600 leading-relaxed" [class.line-clamp-3]="!descriptionExpanded">\r
                    {{ plan?.descriptions || 'No description available' }}\r
                  </p>\r
                  <button\r
                    *ngIf="plan?.descriptions && plan.descriptions.length > 150"\r
                    (click)="descriptionExpanded = !descriptionExpanded"\r
                    class="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2">\r
                    {{ descriptionExpanded ? 'Show Less' : 'Show More' }}\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <!-- Plan Type -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Plan Type</h4>\r
                <span\r
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">\r
                  {{ plan?.plan_type || 'Not specified' }}\r
                </span>\r
              </div>\r
\r
              <!-- Priority -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Priority</h4>\r
                <span\r
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">\r
                  {{ plan?.priority.name || 'Not set' }}\r
                </span>\r
              </div>\r
            </div>\r
\r
            <!-- Middle Column -->\r
            <div class="space-y-6">\r
              <!-- Estimated Duration -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Estimated Duration</h4>\r
                <div class="flex items-center space-x-2">\r
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                  </svg>\r
                  <span class="text-gray-900 font-medium">{{ plan?.estimeted_duration || 0 }} hours</span>\r
                </div>\r
              </div>\r
\r
              <!-- Frequency -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Frequency</h4>\r
                <div class="flex items-center space-x-2">\r
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <span\r
                    class="text-gray-900">{{ getFrequencyLabel(plan?.frequency_type, plan?.frequency_value, plan?.frequency_unit) }}</span>\r
                </div>\r
              </div>\r
\r
              <!-- Status -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Status</h4>\r
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"\r
                      [class]="plan?.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'">\r
                  {{ plan?.is_active ? 'Active' : 'Inactive' }}\r
                </span>\r
              </div>\r
\r
              <!-- Creation Date -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Created</h4>\r
                <div class="flex items-center space-x-2">\r
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <span class="text-gray-900">{{ plan?.created_at | date:'MMM d, y' }}</span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Right Column -->\r
            <div class="space-y-6">\r
              <!-- Instructions -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Instructions</h4>\r
                <p class="text-gray-600"\r
                   [class.line-clamp-3]="!instructionsExpanded">{{ plan?.instractions || 'No instructions available' }}</p>\r
                <button\r
                  *ngIf="plan?.instractions && plan?.instractions.length > 150"\r
                  (click)="instructionsExpanded = !instructionsExpanded"\r
                  class="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2">\r
                  {{ instructionsExpanded ? 'Show Less' : 'Show More' }}\r
                </button>\r
              </div>\r
\r
              <!-- Safety Notes -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Safety Notes</h4>\r
                <p class="text-gray-600"\r
                   [class.line-clamp-3]="!notesExpanded">{{ plan?.safety_notes || 'No safety notes available' }}</p>\r
                <button\r
                  *ngIf="plan?.safety_notes && plan?.safety_notes.length > 150"\r
                  (click)="notesExpanded = !notesExpanded"\r
                  class="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2">\r
                  {{ notesExpanded ? 'Show Less' : 'Show More' }}\r
                </button>\r
              </div>\r
\r
              <!-- Last Modified Date -->\r
              <div>\r
                <h4 class="text-sm font-medium text-gray-700 mb-2">Last Modified</h4>\r
                <div class="flex items-center space-x-2">\r
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                  </svg>\r
                  <span class="text-gray-900">{{ plan?.updated_at | date:'MMM d, y' }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Assigned Assets -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center space-x-2 mb-6">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
            </svg>\r
            <h2 class="text-lg font-semibold text-gray-900">Assigned Assets ({{ selectedAssets.length }})</h2>\r
          </div>\r
\r
          <div *ngIf="selectedAssets.length > 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">\r
            <div *ngFor="let asset of plan.assets" class="asset-card p-4 rounded-lg border border-gray-200">\r
              <div class="asset-header">\r
                <h3 class="asset-name font-medium mb-2">{{ asset.name }}</h3>\r
              </div>\r
              <div class="asset-details">\r
                <div class="asset-detail flex items-center">\r
                  <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>\r
                  </svg>\r
                  <span>{{ asset.serial_number }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="selectedAssets.length === 0" class="empty-state">\r
            <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
            </svg>\r
            <p class="empty-text text-center text-gray-500">No assets assigned to this plan</p>\r
          </div>\r
        </div>\r
\r
        <!-- Checklist Section -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center space-x-2 mb-6">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>\r
            </svg>\r
            <h2 class="text-lg font-semibold text-gray-900">Checklist Items ({{ checklistItems.length }})</h2>\r
          </div>\r
          @if (checklistItems.length > 0) {\r
            <div class="space-y-4">\r
              <div *ngFor="let item of checklistItems; trackBy: trackByChecklistItem" class="checklist-item p-4 border border-gray-200 rounded-lg">\r
                <div class="item-content flex flex-col space-y-3">\r
                  <div class="item-main">\r
                    <h3 class="item-title font-semibold text-md">{{ item.title }}</h3>\r
                    <p class="item-description text-gray-600 text-sm">{{ item.description }}</p>\r
                  </div>\r
                  <div class="item-badges flex flex-wrap gap-2">\r
                    <span class="item-badge type-badge px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{{ item.type }}</span>\r
                    <span *ngIf="item.is_required" class="item-badge required-badge px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Required</span>\r
                    <span *ngIf="item.is_safety_critical" class="item-badge safety-badge px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">Safety Critical</span>\r
                    <span *ngIf="item.is_photo_required" class="item-badge photo-badge px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Photo Required</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          } @else if (checklistItems.length === 0) {\r
            <div class="empty-state">\r
              <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>\r
              </svg>\r
              <p class="empty-text">No checklist items defined</p>\r
            </div>\r
          }\r
\r
\r
        </div>\r
      </div>\r
\r
      <!-- Right Column -->\r
      <div class="space-y-6">\r
        <!-- Schedule Information -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center space-x-2 mb-6">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
            </svg>\r
            <h2 class="text-lg font-semibold text-gray-900">Schedule Information</h2>\r
          </div>\r
\r
          <div class="space-y-4">\r
            <div class="schedule-item">\r
              <h4 class="text-sm font-medium text-gray-700 mb-2">Frequency</h4>\r
              <p class="text-gray-900 font-medium">\r
                {{ getFrequencyLabel(scheduleInfo?.frequency_type, scheduleInfo?.frequency_value, scheduleInfo?.frequency_unit) }}\r
              </p>\r
            </div>\r
\r
            <div class="schedule-item">\r
              <h4 class="text-sm font-medium text-gray-700 mb-2">Next Due Date</h4>\r
              <p class="text-gray-900">{{ formatDate(scheduleInfo?.next_due_date) }}</p>\r
            </div>\r
\r
            <div class="schedule-item">\r
              <h4 class="text-sm font-medium text-gray-700 mb-2">Last Completed</h4>\r
              <p class="text-gray-900">{{ formatDate(scheduleInfo?.last_completed) }}</p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Additional Information -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center space-x-2 mb-6">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
            <h2 class="text-lg font-semibold text-gray-900">Additional Information</h2>\r
          </div>\r
\r
          <div class="space-y-4">\r
            <div>\r
              <h4 class="text-sm font-medium text-gray-700 mb-2">Sort Order</h4>\r
              <p class="text-gray-900">{{ plan?.sort || 0 }}</p>\r
            </div>\r
\r
            <div>\r
              <h4 class="text-sm font-medium text-gray-700 mb-2">Scheduled Count</h4>\r
              <p class="text-gray-900">{{ plan?.scheduled_count || 0 }}</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<app-plan-dialog\r
  [isOpen]="isDialogOpen"\r
  [editMode]="editMode"\r
  [planToEdit]="planToEdit"\r
  (closed)="onDialogClosed()"\r
  (updated)="onUpdated()">\r
</app-plan-dialog>\r
`, styles: [`@charset "UTF-8";

/* src/app/maintenance/pages/plan-preview-page/plan-preview-page.component.scss */
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
.maintenance-preview-container .asset-card {
  border-radius: var(--radius-lg);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-gray-200);
  background-color: var(--color-gray-50);
  padding: calc(var(--spacing) * 4);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
@media (hover: hover) {
  .maintenance-preview-container .asset-card:hover {
    border-color: var(--color-gray-300);
  }
}
:where(.maintenance-preview-container .asset-card .asset-details > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
  margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
}
.maintenance-preview-container .asset-card .asset-details .asset-detail {
  display: flex;
  align-items: center;
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  color: var(--color-gray-600);
}
.maintenance-preview-container .asset-card .asset-details .asset-detail svg {
  flex-shrink: 0;
}
.maintenance-preview-container .empty-state {
  border-radius: var(--radius-lg);
  background-color: var(--color-gray-50);
  padding-block: calc(var(--spacing) * 12);
  text-align: center;
}
.maintenance-preview-container .empty-state .empty-text {
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  color: var(--color-gray-500);
}
.maintenance-preview-container .schedule-item {
  border-radius: var(--radius-lg);
  background-color: var(--color-gray-50);
  padding: calc(var(--spacing) * 3);
}
.maintenance-preview-container .schedule-item h4 {
  margin-bottom: calc(var(--spacing) * 1);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
}
.maintenance-preview-container .schedule-item p {
  color: var(--color-gray-900);
}
@media print {
  .maintenance-preview-container .print-hide {
    display: none !important;
  }
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
/*# sourceMappingURL=plan-preview-page.component.css.map */
`] }]
  }], () => [{ type: ActivatedRoute }, { type: MaintenanceService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanPreviewPageComponent, { className: "PlanPreviewPageComponent", filePath: "src/app/maintenance/pages/plan-preview-page/plan-preview-page.component.ts", lineNumber: 18 });
})();
export {
  PlanPreviewPageComponent
};
//# sourceMappingURL=chunk-T66FYZXH.js.map
