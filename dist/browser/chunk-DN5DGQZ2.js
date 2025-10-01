import {
  PlanDialogComponent
} from "./chunk-QSJUAGEP.js";
import {
  MaintenanceService
} from "./chunk-G7NBKUQU.js";
import "./chunk-VRK7CGOB.js";
import "./chunk-DV6PQFY7.js";
import "./chunk-NM3PRJXP.js";
import {
  FormsModule
} from "./chunk-FSOYXA4J.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-E2GGJA5S.js";
import "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-MMJF4Y5E.js";
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
} from "./chunk-YUR5IGOK.js";
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
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, RouterLink, PlanDialogComponent], styles: ["\n\n/*# sourceMappingURL=plan-preview-page.component.css.map */"] });
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
`, styles: ["/* src/app/maintenance/pages/plan-preview-page/plan-preview-page.component.scss */\n/*# sourceMappingURL=plan-preview-page.component.css.map */\n"] }]
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
//# sourceMappingURL=chunk-DN5DGQZ2.js.map
