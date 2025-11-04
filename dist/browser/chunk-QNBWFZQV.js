import {
  PlanDialogComponent
} from "./chunk-WN5YL3LI.js";
import {
  MaintenanceDeleteConfirmationModalComponent
} from "./chunk-P4PMKA2U.js";
import {
  MaintenanceService
} from "./chunk-NKW5FA2N.js";
import "./chunk-5LL6FNGY.js";
import "./chunk-XSZSUCV7.js";
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
  Router
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  HostListener,
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
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
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/maintenance/store.ts
var MaintenanceStore = class _MaintenanceStore {
  api;
  plans = signal([]);
  meta = signal({});
  loading = signal(false);
  totalPlans = computed(() => this.plans().length);
  activePlans = computed(() => this.plans().filter((p) => p.is_active).length);
  scheduledItems = computed(() => this.plans().reduce((sum, p) => sum + (p.scheduled_count || 0), 0));
  criticalPlans = computed(() => this.plans().filter((p) => p.priority_id === 1).length);
  constructor(api) {
    this.api = api;
  }
  fetchPlans(keyword, per_page) {
    this.loading.set(true);
    this.api.listPlans({ include: "meta", per_page: per_page ? per_page : 20, keyword }).subscribe({
      next: (res) => {
        const list = Array.isArray(res?.data?.plans) ? res.data.plans : [];
        this.plans.set(list);
        if (res?.meta)
          this.meta.set(res.meta);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static \u0275fac = function MaintenanceStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceStore)(\u0275\u0275inject(MaintenanceService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MaintenanceStore, factory: _MaintenanceStore.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: MaintenanceService }], null);
})();

// src/app/maintenance/pages/plans-page.component.ts
function PlansPageComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 62);
    \u0275\u0275element(4, "circle", 63)(5, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 65);
    \u0275\u0275text(7, "Loading Maintenance Plans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 66);
    \u0275\u0275text(9, "Please wait while we fetch your plans...");
    \u0275\u0275elementEnd()()();
  }
}
function PlansPageComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 68);
    \u0275\u0275element(4, "path", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 65);
    \u0275\u0275text(6, "No maintenance plans found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 70);
    \u0275\u0275text(8, "Create your first maintenance plan to get started with preventive maintenance.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 71);
    \u0275\u0275listener("click", function PlansPageComponent_div_77_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDialog());
    });
    \u0275\u0275text(10, " + Create Your First Plan ");
    \u0275\u0275elementEnd()()();
  }
}
function PlansPageComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "button", 73);
    \u0275\u0275listener("click", function PlansPageComponent_div_78_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAllPlans());
    });
    \u0275\u0275element(2, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Select all ", ctx_r1.store.plans().length, " plans");
  }
}
function PlansPageComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "button", 73);
    \u0275\u0275listener("click", function PlansPageComponent_div_79_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAllPlans());
    });
    \u0275\u0275element(3, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 81);
    \u0275\u0275element(8, "path", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Selection Mode Active - Click cards to select ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 39)(11, "button", 83);
    \u0275\u0275listener("click", function PlansPageComponent_div_79_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteSelected());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 81);
    \u0275\u0275element(13, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-blue-100", ctx_r1.selectedCount === ctx_r1.store.plans().length);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-blue-400", ctx_r1.selectedCount === ctx_r1.store.plans().length)("bg-white", ctx_r1.selectedCount !== ctx_r1.store.plans().length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCount, " plan", ctx_r1.selectedCount > 1 ? "s" : "", " selected");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.selectedCount === 0);
  }
}
function PlansPageComponent_div_80_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function PlansPageComponent_div_80_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "Inactive");
    \u0275\u0275elementEnd();
  }
}
function PlansPageComponent_div_80_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function PlansPageComponent_div_80_div_1_div_13_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 111);
    \u0275\u0275listener("click", function PlansPageComponent_div_80_div_1_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const plan_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPlan(plan_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 112);
    \u0275\u0275element(3, "path", 113)(4, "path", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 51);
    \u0275\u0275text(6, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 111);
    \u0275\u0275listener("click", function PlansPageComponent_div_80_div_1_div_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const plan_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editPlan(plan_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 112);
    \u0275\u0275element(9, "path", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 51);
    \u0275\u0275text(11, "Edit Plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 116);
    \u0275\u0275elementStart(13, "button", 117);
    \u0275\u0275listener("click", function PlansPageComponent_div_80_div_1_div_13_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const plan_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deletePlan(plan_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 118);
    \u0275\u0275element(15, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span", 119);
    \u0275\u0275text(17, "Delete Plan");
    \u0275\u0275elementEnd()()();
  }
}
function PlansPageComponent_div_80_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "span", 106);
    \u0275\u0275text(2, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, plan_r6.plan_type), " ");
  }
}
function PlansPageComponent_div_80_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "span", 106);
    \u0275\u0275text(2, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", plan_r6.priority_id, " ");
  }
}
function PlansPageComponent_div_80_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "span", 106);
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", plan_r6.descriptions, " ");
  }
}
function PlansPageComponent_div_80_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "span", 106);
    \u0275\u0275text(2, "Frequency:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", plan_r6.frequency_value, " ", plan_r6.frequency_unit, " ");
  }
}
function PlansPageComponent_div_80_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "span", 106);
    \u0275\u0275text(2, "Scheduled:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", plan_r6.scheduled_count, " ");
  }
}
function PlansPageComponent_div_80_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "div", 89)(3, "input", 90);
    \u0275\u0275listener("change", function PlansPageComponent_div_80_div_1_Template_input_change_3_listener() {
      const plan_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePlanSelection(plan_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 91);
    \u0275\u0275template(5, PlansPageComponent_div_80_div_1_span_5_Template, 2, 0, "span", 92)(6, PlansPageComponent_div_80_div_1_span_6_Template, 2, 0, "span", 93);
    \u0275\u0275elementStart(7, "div", 94);
    \u0275\u0275listener("click", function PlansPageComponent_div_80_div_1_Template_div_click_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(8, "button", 95);
    \u0275\u0275listener("click", function PlansPageComponent_div_80_div_1_Template_button_click_8_listener() {
      const plan_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePlanMenu(plan_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 96);
    \u0275\u0275element(10, "circle", 97)(11, "circle", 98)(12, "circle", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, PlansPageComponent_div_80_div_1_div_13_Template, 18, 0, "div", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "svg", 101);
    \u0275\u0275element(15, "path", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 102)(17, "div")(18, "div", 103);
    \u0275\u0275listener("click", function PlansPageComponent_div_80_div_1_Template_div_click_18_listener() {
      const plan_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPlan(plan_r6));
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, PlansPageComponent_div_80_div_1_div_20_Template, 5, 3, "div", 104)(21, PlansPageComponent_div_80_div_1_div_21_Template, 4, 1, "div", 104);
    \u0275\u0275elementStart(22, "div", 105)(23, "span", 106);
    \u0275\u0275text(24, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, PlansPageComponent_div_80_div_1_div_26_Template, 5, 1, "div", 107)(27, PlansPageComponent_div_80_div_1_div_27_Template, 4, 2, "div", 104)(28, PlansPageComponent_div_80_div_1_div_28_Template, 4, 1, "div", 104);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-blue-400", ctx_r1.isPlanSelected(plan_r6));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isPlanSelected(plan_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r6.is_active);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !plan_r6.is_active);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isPlanMenuOpen(plan_r6.id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", plan_r6.name || "Unnamed Plan", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r6.plan_type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r6.priority_id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", plan_r6.is_active ? "Active" : "Inactive", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r6.descriptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r6.frequency_value && plan_r6.frequency_unit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r6.scheduled_count !== void 0);
  }
}
function PlansPageComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275template(1, PlansPageComponent_div_80_div_1_Template, 29, 13, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.store.plans());
  }
}
function PlansPageComponent_div_81_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function PlansPageComponent_div_81_div_8_div_18_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 111);
    \u0275\u0275listener("click", function PlansPageComponent_div_81_div_8_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const plan_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPlan(plan_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 112);
    \u0275\u0275element(3, "path", 113)(4, "path", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 51);
    \u0275\u0275text(6, "View Plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 111);
    \u0275\u0275listener("click", function PlansPageComponent_div_81_div_8_div_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const plan_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editPlan(plan_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 112);
    \u0275\u0275element(9, "path", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 51);
    \u0275\u0275text(11, "Edit Plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 116);
    \u0275\u0275elementStart(13, "button", 117);
    \u0275\u0275listener("click", function PlansPageComponent_div_81_div_8_div_18_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r10);
      const plan_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deletePlan(plan_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 118);
    \u0275\u0275element(15, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span", 119);
    \u0275\u0275text(17, "Delete Plan");
    \u0275\u0275elementEnd()()();
  }
}
function PlansPageComponent_div_81_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 124)(2, "div", 77)(3, "input", 129);
    \u0275\u0275listener("change", function PlansPageComponent_div_81_div_8_Template_input_change_3_listener() {
      const plan_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePlanSelection(plan_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 130);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 66);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 39)(10, "span", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 131)(13, "button", 132);
    \u0275\u0275listener("click", function PlansPageComponent_div_81_div_8_Template_button_click_13_listener() {
      const plan_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePlanMenu(plan_r9.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 96);
    \u0275\u0275element(15, "circle", 97)(16, "circle", 98)(17, "circle", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, PlansPageComponent_div_81_div_8_div_18_Template, 18, 0, "div", 100);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const plan_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isPlanSelected(plan_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", plan_r9.plan_type, " \u2022 Priority: ", plan_r9.priority_id || "-", " \u2022 ", plan_r9.is_active ? "Active" : "Inactive", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Scheduled: ", plan_r9.scheduled_count || 0, "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isPlanMenuOpen(plan_r9.id));
  }
}
function PlansPageComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123)(2, "div", 124)(3, "h3", 125);
    \u0275\u0275text(4, "Maintenance Plans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 126);
    \u0275\u0275template(8, PlansPageComponent_div_81_div_8_Template, 19, 7, "div", 127);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.store.totalPlans(), " plans");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.store.plans());
  }
}
var PlansPageComponent = class _PlansPageComponent {
  store;
  maintenanceService;
  router;
  isDialogOpen = false;
  editMode = false;
  planToEdit = null;
  viewType = "grid";
  searchQuery = "";
  selectedPlans = [];
  showingArchived = false;
  planMenus = [];
  searchTimeOut = null;
  //eslint-disable-line @typescript-eslint/no-explicit-any
  // Delete modal state
  showDeleteConfirmationModal = false;
  constructor(store, maintenanceService, router) {
    this.store = store;
    this.maintenanceService = maintenanceService;
    this.router = router;
  }
  ngOnInit() {
    this.store.fetchPlans();
  }
  openDialog() {
    this.editMode = false;
    this.planToEdit = null;
    this.isDialogOpen = true;
  }
  onCreated() {
    this.isDialogOpen = false;
    this.store.fetchPlans();
  }
  onUpdated() {
    this.isDialogOpen = false;
    this.editMode = false;
    this.planToEdit = null;
    this.store.fetchPlans();
  }
  onDialogClosed() {
    this.isDialogOpen = false;
    this.editMode = false;
    this.planToEdit = null;
  }
  // Selection methods
  toggleSelectAllPlans() {
    if (this.selectedPlans.length === this.store.plans().length) {
      this.selectedPlans = [];
    } else {
      this.selectedPlans = [...this.store.plans()];
    }
  }
  togglePlanSelection(plan) {
    const index = this.selectedPlans.findIndex((p) => p.id === plan.id);
    if (index > -1) {
      this.selectedPlans.splice(index, 1);
    } else {
      this.selectedPlans.push(plan);
    }
  }
  isPlanSelected(plan) {
    return this.selectedPlans.some((p) => p.id === plan.id);
  }
  get selectedCount() {
    return this.selectedPlans.length;
  }
  // Action methods
  duplicateSelected() {
    console.log("Duplicating selected plans:", this.selectedPlans);
  }
  generateQRCodesForSelected() {
    console.log("Generating QR codes for selected plans:", this.selectedPlans);
  }
  archiveSelected() {
    console.log("Archiving selected plans:", this.selectedPlans);
  }
  deleteSelected(deletionReason) {
    if (this.selectedPlans.length === 0) {
      this.closeDeleteModal();
      return;
    }
    const planIds = this.selectedPlans.map((plan) => plan.id);
    let completed = 0;
    let successCount = 0;
    let errorCount = 0;
    const finalize = () => {
      completed++;
      if (completed >= planIds.length) {
        this.store.fetchPlans();
        this.clearSelection();
        this.closeDeleteModal();
        if (errorCount === 0) {
          console.log(`${successCount} plans deleted successfully`);
        } else if (successCount === 0) {
          console.error(`Failed to delete ${errorCount} plans`);
        } else {
          console.log(`${successCount} plans deleted successfully, ${errorCount} failed`);
        }
      }
    };
    planIds.forEach((id) => {
      this.maintenanceService.deletePlan(id).subscribe({
        next: () => {
          successCount++;
          finalize();
        },
        error: (error) => {
          console.error("Failed to delete plan:", error);
          errorCount++;
          finalize();
        }
      });
    });
  }
  restoreSelected() {
    console.log("Restoring selected plans:", this.selectedPlans);
  }
  clearSelection() {
    this.selectedPlans = [];
  }
  // Search and filtering
  onSearch() {
    if (this.searchTimeOut) {
      clearTimeout(this.searchTimeOut);
    }
    this.searchTimeOut = setTimeout(() => {
      this.store.fetchPlans(this.searchQuery);
    }, 500);
  }
  onShowChange(event) {
    this.store.fetchPlans(this.searchQuery, event.target.value);
  }
  // View toggle
  toggleViewType() {
    this.viewType = this.viewType === "grid" ? "list" : "grid";
  }
  // Individual plan actions
  viewPlan(plan) {
    this.router.navigate(["/maintenance/plans", plan.id]);
    this.closeAllDropdowns();
  }
  editPlan(plan) {
    this.planMenus[plan.id] = false;
    this.editMode = true;
    this.planToEdit = plan;
    this.isDialogOpen = true;
  }
  duplicatePlan(plan) {
    console.log("Duplicating plan:", plan);
  }
  generateQRCodeForPlan(plan) {
    console.log("Generating QR code for plan:", plan);
  }
  copyPublicUrl(plan) {
    console.log("Copying public URL for plan:", plan);
  }
  archivePlan(plan) {
    console.log("Archiving plan:", plan);
  }
  restorePlan(plan) {
    console.log("Restoring plan:", plan);
  }
  deletePlan(plan) {
    this.planMenus[plan.id] = false;
    this.selectedPlans = [plan];
    this.showDeleteConfirmationModal = true;
  }
  togglePlanMenu(planId) {
    this.planMenus[planId] = !this.planMenus[planId];
  }
  isPlanMenuOpen(planId) {
    return this.planMenus[planId] || false;
  }
  closeAllDropdowns() {
    Object.keys(this.planMenus).forEach((key) => {
      this.planMenus[Number(key)] = false;
    });
  }
  // Delete modal methods
  closeDeleteModal() {
    this.showDeleteConfirmationModal = false;
  }
  openDeleteModalForSelected() {
    if (this.selectedPlans.length === 0) {
      return;
    }
    this.showDeleteConfirmationModal = true;
  }
  static \u0275fac = function PlansPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlansPageComponent)(\u0275\u0275directiveInject(MaintenanceStore), \u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlansPageComponent, selectors: [["app-plans-page"]], hostBindings: function PlansPageComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function PlansPageComponent_click_HostBindingHandler() {
        return ctx.closeAllDropdowns();
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 101, vars: 22, consts: [[1, "plans-page", "min-h-screen", "bg-gray-50", "p-6"], [1, "mb-6", "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "flex", "items-center", "space-x-3", "mt-4", "md:mt-0"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "px-5", "py-2", "rounded-lg", "shadow-sm", "transition-colors", "flex", "items-center", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-8"], [1, "rounded-xl", "bg-blue-50", "border", "border-blue-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-base", "font-medium", "text-gray-700"], [1, "w-10", "h-10", "bg-blue-100", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "text-sm", "text-blue-600", "font-medium", "mt-1"], [1, "rounded-xl", "bg-green-50", "border", "border-green-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "w-10", "h-10", "bg-green-100", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-green-400"], ["cx", "12", "cy", "12", "r", "8", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["cx", "12", "cy", "12", "r", "4", "fill", "currentColor", 1, "text-green-400"], [1, "text-sm", "text-green-600", "font-medium", "mt-1"], [1, "rounded-xl", "bg-orange-50", "border", "border-orange-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "w-10", "h-10", "bg-orange-100", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-orange-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.232 5.232l3.536 3.536m-2.036-1.5a2.5 2.5 0 11-3.536 3.536l-7.5 7.5a2 2 0 102.828 2.828l7.5-7.5a2.5 2.5 0 013.536-3.536z"], [1, "text-sm", "text-orange-600", "font-medium", "mt-1"], [1, "rounded-xl", "bg-red-50", "border", "border-red-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "w-10", "h-10", "bg-red-100", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-red-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"], [1, "text-sm", "text-red-600", "font-medium", "mt-1"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "mb-6"], [1, "flex-1", "flex", "flex-col", "space-y-3", "md:space-y-0", "md:flex-row", "md:items-center", "md:space-x-3"], [1, "relative", "w-full", "md:w-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search plans by name, type, or description...", 1, "w-full", "pl-10", "pr-4", "py-2", "border-2", "border-blue-300", "rounded-xl", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", 3, "ngModelChange", "input", "ngModel"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "bg-white", "border", "border-gray-200", "rounded-xl", "p-1", "shadow-sm"], [1, "px-4", "py-2", "text-sm", "font-medium", "rounded-lg", "border", "transition-all", "duration-200", "flex", "items-center", "space-x-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 10h16M4 14h16M4 18h16"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "w-full bg-white rounded-xl border border-gray-200 px-6 py-3 mb-4 flex items-center", 4, "ngIf"], ["class", "w-full bg-white rounded-xl border border-gray-200 px-6 py-3 mb-4 flex items-center justify-between", 4, "ngIf"], ["class", "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2", 4, "ngIf"], ["class", "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", 4, "ngIf"], [1, "mt-8", "flex", "items-center", "justify-between"], [1, "text-sm", "text-gray-700"], [1, "border", "border-gray-300", "rounded-md", "px-2", "py-1", "text-sm", 3, "change"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [3, "closed", "created", "updated", "isOpen", "editMode", "planToEdit"], [3, "closeModal", "confirmDelete", "isOpen", "selectedCount"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-blue-100", "rounded-full", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-8", "h-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-500"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-gray-100", "rounded-full", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-sm", "text-gray-500", "mb-4"], [1, "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-colors", 3, "click"], [1, "w-full", "bg-white", "rounded-xl", "border", "border-gray-200", "px-6", "py-3", "mb-4", "flex", "items-center"], ["type", "button", 1, "focus:outline-none", "inline-flex", "items-center", "justify-center", "w-6", "h-6", "rounded-full", "border-2", "border-blue-400", "mr-3", "transition-colors", 3, "click"], [1, "w-3", "h-3", "rounded-full", "block", "bg-white", "transition-colors"], [1, "font-semibold", "text-gray-900"], [1, "w-full", "bg-white", "rounded-xl", "border", "border-gray-200", "px-6", "py-3", "mb-4", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-4"], [1, "w-3", "h-3", "rounded-full", "block", "transition-colors"], [1, "font-bold", "text-gray-900"], [1, "bg-blue-50", "text-blue-600", "px-3", "py-1", "rounded-full", "text-sm", "flex", "items-center", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7"], [1, "bg-red-50", "text-red-600", "font-semibold", "px-4", "py-2", "rounded-lg", "flex", "items-center", "space-x-2", "cursor-pointer", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6", "mt-2"], ["class", "rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col transition-all hover:shadow-md overflow-hidden", 3, "border-blue-400", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-blue-200", "bg-white", "shadow-sm", "flex", "flex-col", "transition-all", "hover:shadow-md", "overflow-hidden"], [1, "relative", "bg-[#e0edff]", "h-32", "flex", "flex-col", "items-center", "justify-center"], [1, "absolute", "left-4", "top-4", "flex", "items-center"], ["type", "checkbox", 1, "plan-card-checkbox", 3, "change", "checked"], [1, "absolute", "right-4", "top-4", "flex", "items-center", "space-x-2"], ["class", "bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full", 4, "ngIf"], ["class", "bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full", 4, "ngIf"], [1, "relative", 3, "click"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "hover:bg-gray-100", "transition-colors", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["cx", "12", "cy", "6", "r", "1.5"], ["cx", "12", "cy", "12", "r", "1.5"], ["cx", "12", "cy", "18", "r", "1.5"], ["class", "absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50", 3, "click", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-blue-400"], [1, "flex-1", "flex", "flex-col", "justify-between", "p-6", "pt-4"], [1, "font-semibold", "text-lg", "text-gray-900", "mb-2", "cursor-pointer", "hover:text-blue-600", "transition-colors", 3, "click"], ["class", "text-sm text-gray-700 mb-1", 4, "ngIf"], [1, "text-sm", "text-gray-700", "mb-1"], [1, "font-medium", "text-gray-600"], ["class", "text-sm text-gray-700 mb-2", 4, "ngIf"], [1, "bg-green-100", "text-green-700", "text-xs", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "bg-gray-100", "text-gray-700", "text-xs", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "absolute", "right-0", "top-full", "mt-1", "w-48", "bg-white", "rounded-lg", "shadow-lg", "border", "border-gray-200", "py-1", "z-50", 3, "click"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "text-left", "hover:bg-gray-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "border-t", "border-gray-100", "my-1"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "text-left", "hover:bg-red-50", "text-red-600", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], [1, "text-sm", "font-medium"], [1, "text-sm", "text-gray-700", "mb-2"], [1, "line-clamp-2"], [1, "bg-white", "rounded-lg", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-gray-200", "bg-gray-50"], [1, "flex", "items-center", "justify-between"], [1, "text-lg", "font-medium", "text-gray-900"], [1, "divide-y", "divide-gray-200"], ["class", "px-6 py-4 hover:bg-gray-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "px-6", "py-4", "hover:bg-gray-50", "transition-colors"], ["type", "checkbox", 1, "plan-list-checkbox", 3, "change", "checked"], [1, "font-medium", "text-gray-900"], [1, "relative"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "hover:bg-gray-100", "transition-colors", 3, "click"]], template: function PlansPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Maintenance Plans Hub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Create and manage preventive maintenance templates with advanced scheduling");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function PlansPageComponent_Template_button_click_8_listener() {
        return ctx.openDialog();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Create Plan ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "span", 11);
      \u0275\u0275text(16, "Total Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 13);
      \u0275\u0275element(19, "path", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "div", 15);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23, "Plans in system");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 17)(25, "div", 10)(26, "span", 11);
      \u0275\u0275text(27, "Active Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 19);
      \u0275\u0275element(30, "circle", 20)(31, "circle", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "div", 15);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 22);
      \u0275\u0275text(35, "Operational plans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 23)(37, "div", 10)(38, "span", 11);
      \u0275\u0275text(39, "Scheduled Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(41, "svg", 25);
      \u0275\u0275element(42, "path", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "div", 15);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 27);
      \u0275\u0275text(46, "Scheduled maintenance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 28)(48, "div", 10)(49, "span", 11);
      \u0275\u0275text(50, "Critical Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 29);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 30);
      \u0275\u0275element(53, "path", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "div", 15);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 32);
      \u0275\u0275text(57, "High priority plans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 33)(59, "div", 34)(60, "div", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 36);
      \u0275\u0275element(62, "path", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(63, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function PlansPageComponent_Template_input_ngModelChange_63_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function PlansPageComponent_Template_input_input_63_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 39)(65, "div", 40)(66, "button", 41);
      \u0275\u0275listener("click", function PlansPageComponent_Template_button_click_66_listener() {
        return ctx.toggleViewType();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(67, "svg", 42);
      \u0275\u0275element(68, "path", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Grid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "button", 41);
      \u0275\u0275listener("click", function PlansPageComponent_Template_button_click_71_listener() {
        return ctx.toggleViewType();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(72, "svg", 42);
      \u0275\u0275element(73, "path", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275text(75, "List");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(76, PlansPageComponent_div_76_Template, 10, 0, "div", 45)(77, PlansPageComponent_div_77_Template, 11, 0, "div", 45)(78, PlansPageComponent_div_78_Template, 5, 1, "div", 46)(79, PlansPageComponent_div_79_Template, 15, 9, "div", 47)(80, PlansPageComponent_div_80_Template, 2, 1, "div", 48)(81, PlansPageComponent_div_81_Template, 9, 2, "div", 49);
      \u0275\u0275elementStart(82, "div", 50)(83, "div", 39)(84, "span", 51);
      \u0275\u0275text(85, "Show:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "select", 52);
      \u0275\u0275listener("change", function PlansPageComponent_Template_select_change_86_listener($event) {
        return ctx.onShowChange($event);
      });
      \u0275\u0275elementStart(87, "option", 53);
      \u0275\u0275text(88, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option", 54);
      \u0275\u0275text(90, "25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "option", 55);
      \u0275\u0275text(92, "50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "option", 56);
      \u0275\u0275text(94, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "span", 51);
      \u0275\u0275text(96, "per page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 51);
      \u0275\u0275text(98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "app-plan-dialog", 57);
      \u0275\u0275listener("closed", function PlansPageComponent_Template_app_plan_dialog_closed_99_listener() {
        return ctx.onDialogClosed();
      })("created", function PlansPageComponent_Template_app_plan_dialog_created_99_listener() {
        return ctx.onCreated();
      })("updated", function PlansPageComponent_Template_app_plan_dialog_updated_99_listener() {
        return ctx.onUpdated();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "app-maintenance-delete-confirmation-modal", 58);
      \u0275\u0275listener("closeModal", function PlansPageComponent_Template_app_maintenance_delete_confirmation_modal_closeModal_100_listener() {
        return ctx.closeDeleteModal();
      })("confirmDelete", function PlansPageComponent_Template_app_maintenance_delete_confirmation_modal_confirmDelete_100_listener($event) {
        return ctx.deleteSelected($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate(ctx.store.totalPlans());
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate((tmp_1_0 = (tmp_1_0 = ctx.store.meta()) == null ? null : tmp_1_0.active_plans_count) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ctx.store.activePlans());
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.store.scheduledItems());
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.store.criticalPlans());
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.viewType === "grid" ? "bg-blue-50 text-blue-600 border-blue-200" : "bg-white text-gray-600 border-transparent");
      \u0275\u0275advance(5);
      \u0275\u0275classMap(ctx.viewType === "list" ? "bg-blue-50 text-blue-600 border-blue-200" : "bg-white text-gray-600 border-transparent");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.store.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.store.loading() && ctx.store.totalPlans() === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "grid" && ctx.selectedCount === 0 && !ctx.store.loading() && ctx.store.totalPlans() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "grid" && ctx.selectedCount > 0 && !ctx.store.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "grid" && !ctx.store.loading() && ctx.store.totalPlans() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "list" && !ctx.store.loading() && ctx.store.totalPlans() > 0);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate2(" Showing 1 - ", ctx.store.totalPlans(), " of ", ctx.store.totalPlans(), " entries ");
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.isDialogOpen)("editMode", ctx.editMode)("planToEdit", ctx.planToEdit);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showDeleteConfirmationModal)("selectedCount", ctx.selectedCount);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, PlanDialogComponent, MaintenanceDeleteConfirmationModalComponent], styles: ['\n\n.plans-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.plans-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.plans-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0.25rem 0 0;\n}\n.plans-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.plans-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.plans-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.plans-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.plans-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.plans-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .value.success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.plans-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .value.danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.plans-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 0.75rem;\n  opacity: 0.6;\n}\n.plans-page[_ngcontent-%COMP%]   .skeletons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n.plans-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 3rem;\n  color: #6b7280;\n}\n.plans-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n  margin-top: 0.5rem;\n}\n.plans-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 1rem;\n}\n.plans-page[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n.plans-page[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.plans-page[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.plans-page[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.plans-page[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n}\n.plans-page[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.plans-page[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.plans-page[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.plans-page[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n}\n.plans-page[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.plan-card-checkbox[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #2563eb;\n  background-color: white;\n  border: 2px solid #60a5fa;\n  border-radius: 9999px;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:checked {\n  background-color: #60a5fa;\n  border-color: #60a5fa;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:checked::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 50%;\n}\n.plan-card-checkbox[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n.plan-list-checkbox[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #2563eb;\n  background-color: white;\n  border: 2px solid #60a5fa;\n  border-radius: 50%;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n.plan-list-checkbox[_ngcontent-%COMP%]:checked {\n  background-color: #60a5fa;\n  border-color: #60a5fa;\n}\n.plan-list-checkbox[_ngcontent-%COMP%]:checked::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.375rem;\n  height: 0.375rem;\n  background-color: white;\n  border-radius: 50%;\n}\n.plan-list-checkbox[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n.plan-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.border-blue-400[_ngcontent-%COMP%] {\n  border-color: #60a5fa;\n}\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 641px) and (max-width: 768px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1025px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.animate-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n  border-color: transparent;\n}\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.05);\n}\n.border-blue-400[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.bg-green-100[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #15803d;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.w-16.h-16[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n.rotate-180[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.transition-all[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition:\n    color 0.2s ease-in-out,\n    background-color 0.2s ease-in-out,\n    border-color 0.2s ease-in-out;\n}\n.transition-transform[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n}\n.shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.shadow-md[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.hover\\:shadow-md[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.hover\\:shadow-lg[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=plans-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlansPageComponent, [{
    type: Component,
    args: [{ selector: "app-plans-page", standalone: true, imports: [CommonModule, FormsModule, PlanDialogComponent, MaintenanceDeleteConfirmationModalComponent], template: `<div class="plans-page min-h-screen bg-gray-50 p-6">\r
  <!-- Page Title and Subtitle + Actions -->\r
  <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Maintenance Plans Hub</h1>\r
      <p class="text-gray-600 text-base">Create and manage preventive maintenance templates with advanced scheduling</p>\r
    </div>\r
    <div class="flex items-center space-x-3 mt-4 md:mt-0">\r
      <button (click)="openDialog()" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-sm transition-colors flex items-center cursor-pointer">\r
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
        </svg>\r
        Create Plan\r
      </button>\r
\r
    </div>\r
  </div>\r
\r
  <!-- Summary Cards -->\r
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">\r
    <!-- Total Plans -->\r
    <div class="rounded-xl bg-blue-50 border border-blue-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Total Plans</span>\r
        <span class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">\r
          <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>\r
          </svg>\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{ store.totalPlans() }}</div>\r
      <span class="text-sm text-blue-600 font-medium mt-1">Plans in system</span>\r
    </div>\r
\r
    <!-- Active Plans -->\r
    <div class="rounded-xl bg-green-50 border border-green-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Active Plans</span>\r
        <span class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">\r
          <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none" />\r
            <circle cx="12" cy="12" r="4" fill="currentColor" class="text-green-400" />\r
          </svg>\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{store.meta()?.active_plans_count ?? store.activePlans()}}</div>\r
      <span class="text-sm text-green-600 font-medium mt-1">Operational plans</span>\r
    </div>\r
\r
    <!-- Scheduled Items -->\r
    <div class="rounded-xl bg-orange-50 border border-orange-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Scheduled Items</span>\r
        <span class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">\r
          <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-1.5a2.5 2.5 0 11-3.536 3.536l-7.5 7.5a2 2 0 102.828 2.828l7.5-7.5a2.5 2.5 0 013.536-3.536z" />\r
          </svg>\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{store.scheduledItems()}}</div>\r
      <span class="text-sm text-orange-600 font-medium mt-1">Scheduled maintenance</span>\r
    </div>\r
\r
    <!-- Critical Plans -->\r
    <div class="rounded-xl bg-red-50 border border-red-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Critical Plans</span>\r
        <span class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">\r
          <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>\r
          </svg>\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{store.criticalPlans()}}</div>\r
      <span class="text-sm text-red-600 font-medium mt-1">High priority plans</span>\r
    </div>\r
  </div>\r
\r
  <!-- Filters and Search -->\r
  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">\r
    <!-- Left: Search and Filters -->\r
    <div class="flex-1 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:space-x-3">\r
      <!-- Search -->\r
      <div class="relative w-full md:w-100">\r
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
        </svg>\r
        <input\r
          type="text"\r
          placeholder="Search plans by name, type, or description..."\r
          class="w-full pl-10 pr-4 py-2 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
          [(ngModel)]="searchQuery"\r
          (input)="onSearch()" />\r
      </div>\r
    </div>\r
\r
         <!-- Right: View Toggle -->\r
     <div class="flex items-center space-x-2">\r
       <div class="flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">\r
         <button\r
           (click)="toggleViewType()"\r
           [class]="viewType === 'grid' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-600 border-transparent'"\r
           class="px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 flex items-center space-x-2">\r
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>\r
           </svg>\r
           <span>Grid</span>\r
         </button>\r
         <button\r
           (click)="toggleViewType()"\r
           [class]="viewType === 'list' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-600 border-transparent'"\r
           class="px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 flex items-center space-x-2">\r
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r
           </svg>\r
           <span>List</span>\r
         </button>\r
       </div>\r
     </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="store.loading()" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">\r
        <svg class="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">Loading Maintenance Plans</h3>\r
      <p class="text-sm text-gray-500">Please wait while we fetch your plans...</p>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!store.loading() && store.totalPlans() === 0" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">\r
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">No maintenance plans found</h3>\r
      <p class="text-sm text-gray-500 mb-4">Create your first maintenance plan to get started with preventive maintenance.</p>\r
      <button (click)="openDialog()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">\r
        + Create Your First Plan\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Selection Bar (when nothing is selected) -->\r
  <div class="w-full bg-white rounded-xl border border-gray-200 px-6 py-3 mb-4 flex items-center" *ngIf="viewType === 'grid' && selectedCount === 0 && !store.loading() && store.totalPlans() > 0">\r
    <button type="button" (click)="toggleSelectAllPlans()" class="focus:outline-none inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-400 mr-3 transition-colors">\r
      <span class="w-3 h-3 rounded-full block bg-white transition-colors"></span>\r
    </button>\r
    <span class="font-semibold text-gray-900">Select all {{ store.plans().length }} plans</span>\r
  </div>\r
\r
  <!-- Action Bar (Selection) -->\r
  <div class="w-full bg-white rounded-xl border border-gray-200 px-6 py-3 mb-4 flex items-center justify-between" *ngIf="viewType === 'grid' && selectedCount > 0 && !store.loading()">\r
    <div class="flex items-center space-x-4">\r
      <button type="button" (click)="toggleSelectAllPlans()" class="focus:outline-none inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-400 mr-3 transition-colors"\r
        [class.bg-blue-100]="selectedCount === store.plans().length">\r
        <span class="w-3 h-3 rounded-full block transition-colors"\r
          [class.bg-blue-400]="selectedCount === store.plans().length"\r
          [class.bg-white]="selectedCount !== store.plans().length"></span>\r
      </button>\r
      <span class="font-bold text-gray-900">{{ selectedCount }} plan{{ selectedCount > 1 ? 's' : '' }} selected</span>\r
      <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm flex items-center font-medium">\r
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7"></path></svg>\r
        Selection Mode Active - Click cards to select\r
      </span>\r
    </div>\r
    <div class="flex items-center space-x-2">\r
      <button\r
        (click)="deleteSelected()"\r
        [disabled]="selectedCount === 0"\r
        class="bg-red-50 text-red-600 font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">\r
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
        </svg>\r
        Delete\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Grid View Cards -->\r
  <div *ngIf="viewType === 'grid' && !store.loading() && store.totalPlans() > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2">\r
    <div *ngFor="let plan of store.plans()" class="rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col transition-all hover:shadow-md overflow-hidden" [class.border-blue-400]="isPlanSelected(plan)">\r
      <!-- Card Header -->\r
      <div class="relative bg-[#e0edff] h-32 flex flex-col items-center justify-center">\r
        <div class="absolute left-4 top-4 flex items-center">\r
          <input type="checkbox" class="plan-card-checkbox" [checked]="isPlanSelected(plan)" (change)="togglePlanSelection(plan)" />\r
        </div>\r
        <div class="absolute right-4 top-4 flex items-center space-x-2">\r
          <span *ngIf="plan.is_active" class="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Active</span>\r
          <span *ngIf="!plan.is_active" class="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">Inactive</span>\r
          <div class="relative" (click)="$event.stopPropagation()">\r
            <button\r
              (click)="togglePlanMenu(plan.id!)"\r
              class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">\r
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <circle cx="12" cy="6" r="1.5" />\r
                <circle cx="12" cy="12" r="1.5" />\r
                <circle cx="12" cy="18" r="1.5" />\r
              </svg>\r
            </button>\r
\r
            <!-- Dropdown Menu -->\r
            <div *ngIf="isPlanMenuOpen(plan.id!)" class="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50" (click)="$event.stopPropagation()">\r
              <button\r
                (click)="viewPlan(plan)"\r
                class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors">\r
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                </svg>\r
                <span class="text-sm text-gray-700">View Details</span>\r
              </button>\r
\r
              <button\r
                (click)="editPlan(plan)"\r
                class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors">\r
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                </svg>\r
                <span class="text-sm text-gray-700">Edit Plan</span>\r
              </button>\r
\r
              <!-- Divider -->\r
              <div class="border-t border-gray-100 my-1"></div>\r
\r
              <button\r
                (click)="deletePlan(plan)"\r
                class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-red-50 text-red-600 transition-colors">\r
                <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                </svg>\r
                <span class="text-sm font-medium">Delete Plan</span>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
        <svg class="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>\r
        </svg>\r
      </div>\r
\r
      <!-- Card Body -->\r
      <div class="flex-1 flex flex-col justify-between p-6 pt-4">\r
        <div>\r
\r
          <!-- Plan Name -->\r
          <div\r
            class="font-semibold text-lg text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors"\r
            (click)="viewPlan(plan)">\r
            {{ plan.name || 'Unnamed Plan' }}\r
          </div>\r
\r
          <!-- Plan Type -->\r
          <div class="text-sm text-gray-700 mb-1" *ngIf="plan.plan_type">\r
            <span class="font-medium text-gray-600">Type:</span> {{ plan.plan_type | titlecase }}\r
          </div>\r
\r
          <!-- Priority -->\r
          <div class="text-sm text-gray-700 mb-1" *ngIf="plan.priority_id">\r
            <span class="font-medium text-gray-600">Priority:</span> {{ plan.priority_id }}\r
          </div>\r
\r
          <!-- Status -->\r
          <div class="text-sm text-gray-700 mb-1">\r
            <span class="font-medium text-gray-600">Status:</span> {{ plan.is_active ? 'Active' : 'Inactive' }}\r
          </div>\r
\r
          <!-- Description -->\r
          <div class="text-sm text-gray-700 mb-2" *ngIf="plan.descriptions">\r
            <span class="font-medium text-gray-600">Description:</span> <span class="line-clamp-2">\r
            {{ plan.descriptions }}\r
          </span>\r
          </div>\r
\r
          <!-- Frequency -->\r
          <div class="text-sm text-gray-700 mb-1" *ngIf="plan.frequency_value && plan.frequency_unit">\r
            <span class="font-medium text-gray-600">Frequency:</span> {{ plan.frequency_value }} {{ plan.frequency_unit }}\r
          </div>\r
\r
          <!-- Scheduled Count -->\r
          <div class="text-sm text-gray-700 mb-1" *ngIf="plan.scheduled_count !== undefined">\r
            <span class="font-medium text-gray-600">Scheduled:</span> {{ plan.scheduled_count }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="viewType === 'list' && !store.loading() && store.totalPlans() > 0" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">\r
    <!-- Table Header -->\r
    <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">\r
      <div class="flex items-center justify-between">\r
        <h3 class="text-lg font-medium text-gray-900">Maintenance Plans</h3>\r
        <span class="text-sm text-gray-500">{{ store.totalPlans() }} plans</span>\r
      </div>\r
    </div>\r
\r
    <!-- Table Content -->\r
    <div class="divide-y divide-gray-200">\r
      <div *ngFor="let plan of store.plans()" class="px-6 py-4 hover:bg-gray-50 transition-colors">\r
        <div class="flex items-center justify-between">\r
          <div class="flex items-center space-x-4">\r
            <input type="checkbox" class="plan-list-checkbox" [checked]="isPlanSelected(plan)" (change)="togglePlanSelection(plan)" />\r
            <div>\r
              <div class="font-medium text-gray-900">{{ plan.name }}</div>\r
              <div class="text-sm text-gray-500">{{ plan.plan_type }} \u2022 Priority: {{ plan.priority_id || '-' }} \u2022 {{ plan.is_active ? 'Active' : 'Inactive' }}</div>\r
            </div>\r
          </div>\r
          <div class="flex items-center space-x-2">\r
            <span class="text-sm text-gray-500">Scheduled: {{ plan.scheduled_count || 0 }}</span>\r
            <div class="relative">\r
              <button\r
                (click)="togglePlanMenu(plan.id!)"\r
                class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">\r
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <circle cx="12" cy="6" r="1.5" />\r
                  <circle cx="12" cy="12" r="1.5" />\r
                  <circle cx="12" cy="18" r="1.5" />\r
                </svg>\r
              </button>\r
\r
              <!-- Dropdown Menu -->\r
              <div *ngIf="isPlanMenuOpen(plan.id!)" class="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50" (click)="$event.stopPropagation()">\r
                <button\r
                  (click)="viewPlan(plan)"\r
                  class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors">\r
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                  </svg>\r
                  <span class="text-sm text-gray-700">View Plan</span>\r
                </button>\r
\r
                <button\r
                  (click)="editPlan(plan)"\r
                  class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors">\r
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                  </svg>\r
                  <span class="text-sm text-gray-700">Edit Plan</span>\r
                </button>\r
\r
                <!-- Divider -->\r
                <div class="border-t border-gray-100 my-1"></div>\r
\r
                <button\r
                  (click)="deletePlan(plan)"\r
                  class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-red-50 text-red-600 transition-colors">\r
                  <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                  </svg>\r
                  <span class="text-sm font-medium">Delete Plan</span>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div class="mt-8 flex items-center justify-between">\r
    <div class="flex items-center space-x-2">\r
      <span class="text-sm text-gray-700">Show:</span>\r
      <select class="border border-gray-300 rounded-md px-2 py-1 text-sm" (change)="onShowChange($event)">\r
        <option value="10">10</option>\r
        <option value="25">25</option>\r
        <option value="50">50</option>\r
        <option value="100">100</option>\r
      </select>\r
      <span class="text-sm text-gray-700">per page</span>\r
    </div>\r
    <div class="text-sm text-gray-700">\r
      Showing 1 - {{ store.totalPlans() }} of {{ store.totalPlans() }} entries\r
    </div>\r
  </div>\r
\r
  <app-plan-dialog\r
    [isOpen]="isDialogOpen"\r
    [editMode]="editMode"\r
    [planToEdit]="planToEdit"\r
    (closed)="onDialogClosed()"\r
    (created)="onCreated()"\r
    (updated)="onUpdated()">\r
  </app-plan-dialog>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <app-maintenance-delete-confirmation-modal\r
    [isOpen]="showDeleteConfirmationModal"\r
    [selectedCount]="selectedCount"\r
    (closeModal)="closeDeleteModal()"\r
    (confirmDelete)="deleteSelected($event)">\r
  </app-maintenance-delete-confirmation-modal>\r
\r
\r
</div>\r
\r
\r
\r
`, styles: ['/* src/app/maintenance/pages/plans-page.component.scss */\n.plans-page .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.plans-page .section-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.plans-page .section-header p {\n  color: #6b7280;\n  margin: 0.25rem 0 0;\n}\n.plans-page .section-header .actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.plans-page .metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.plans-page .metrics-grid .metric-card {\n  position: relative;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.plans-page .metrics-grid .metric-card .label {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.plans-page .metrics-grid .metric-card .value {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.plans-page .metrics-grid .metric-card .value.success {\n  color: #16a34a;\n}\n.plans-page .metrics-grid .metric-card .value.danger {\n  color: #ef4444;\n}\n.plans-page .metrics-grid .metric-card .icon {\n  position: absolute;\n  right: 0.75rem;\n  top: 0.75rem;\n  opacity: 0.6;\n}\n.plans-page .skeletons {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n.plans-page .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 3rem;\n  color: #6b7280;\n}\n.plans-page .empty-state .title {\n  font-weight: 600;\n  color: #111827;\n  margin-top: 0.5rem;\n}\n.plans-page .empty-state .subtitle {\n  margin: 0.25rem 0 1rem;\n}\n.plans-page .cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n.plans-page .plan-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.plans-page .card-title {\n  font-weight: 600;\n}\n.plans-page .card-subtitle {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.plans-page .card-meta {\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n}\n.plans-page .btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.plans-page .btn.btn-secondary {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.plans-page .btn.btn-secondary:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.plans-page .btn.btn-primary {\n  background: #2563eb;\n  color: white;\n}\n.plans-page .btn.btn-primary:hover {\n  background: #1d4ed8;\n}\n.plan-card-checkbox {\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #2563eb;\n  background-color: white;\n  border: 2px solid #60a5fa;\n  border-radius: 9999px;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n.plan-card-checkbox:checked {\n  background-color: #60a5fa;\n  border-color: #60a5fa;\n}\n.plan-card-checkbox:checked::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: white;\n  border-radius: 50%;\n}\n.plan-card-checkbox:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n.plan-list-checkbox {\n  width: 1rem;\n  height: 1rem;\n  color: #2563eb;\n  background-color: white;\n  border: 2px solid #60a5fa;\n  border-radius: 50%;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  position: relative;\n}\n.plan-list-checkbox:checked {\n  background-color: #60a5fa;\n  border-color: #60a5fa;\n}\n.plan-list-checkbox:checked::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.375rem;\n  height: 0.375rem;\n  background-color: white;\n  border-radius: 50%;\n}\n.plan-list-checkbox:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n.plan-card {\n  transition: all 0.2s ease-in-out;\n}\n.plan-card:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.border-blue-400 {\n  border-color: #60a5fa;\n}\n.btn {\n  transition: all 0.2s ease-in-out;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.relative {\n  position: relative;\n}\n.z-50 {\n  z-index: 50;\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 641px) and (max-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1025px) {\n  .grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\ninput:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n  border-color: transparent;\n}\nbutton:hover:not(:disabled) {\n  transform: scale(1.05);\n}\n.border-blue-400 {\n  transition: all 0.2s ease-in-out;\n}\n.bg-green-100 {\n  background-color: #dcfce7;\n  color: #15803d;\n}\n.bg-gray-100 {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.w-16.h-16 {\n  width: 4rem;\n  height: 4rem;\n}\n.rotate-180 {\n  transform: rotate(180deg);\n}\n.transition-all {\n  transition: all 0.2s ease-in-out;\n}\n.transition-colors {\n  transition:\n    color 0.2s ease-in-out,\n    background-color 0.2s ease-in-out,\n    border-color 0.2s ease-in-out;\n}\n.transition-transform {\n  transition: transform 0.2s ease-in-out;\n}\n.shadow-sm {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.shadow-md {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.shadow-lg {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.hover\\:shadow-md:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.hover\\:shadow-lg:hover {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=plans-page.component.css.map */\n'] }]
  }], () => [{ type: MaintenanceStore }, { type: MaintenanceService }, { type: Router }], { closeAllDropdowns: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlansPageComponent, { className: "PlansPageComponent", filePath: "src/app/maintenance/pages/plans-page.component.ts", lineNumber: 19 });
})();
export {
  PlansPageComponent
};
//# sourceMappingURL=chunk-QNBWFZQV.js.map
