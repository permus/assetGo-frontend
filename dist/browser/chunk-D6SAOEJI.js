import {
  MetaWorkOrdersService
} from "./chunk-5LL6FNGY.js";
import {
  TeamService,
  WorkOrderService
} from "./chunk-7MV7TIRV.js";
import {
  LocationService
} from "./chunk-HLNFKPU6.js";
import {
  AIImageUploadService
} from "./chunk-NDJXLMI7.js";
import {
  AssetService
} from "./chunk-XSZSUCV7.js";
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
  AuthService
} from "./chunk-BGMQUXYP.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RangeValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ISERUI2H.js";
import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  DomSanitizer
} from "./chunk-MFJIZLX6.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  NgClass,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  Output,
  SecurityContext,
  Subject,
  ViewChild,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SCVX3V3B.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/ai-features/components/create-work-order-modal/create-work-order-modal.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-red-100 text-red-700": a0, "bg-yellow-100 text-yellow-700": a1, "bg-green-100 text-green-700": a2 });
function CreateWorkOrderModalComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "h3", 46);
    \u0275\u0275text(3, "AI Prediction Context");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48)(7, "p")(8, "strong");
    \u0275\u0275text(9, "Asset:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Confidence:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p")(16, "strong");
    \u0275\u0275text(17, "Predicted Failure:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p")(21, "strong");
    \u0275\u0275text(22, "Potential Savings:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(9, _c0, ctx_r1.prediction.riskLevel === "high", ctx_r1.prediction.riskLevel === "medium", ctx_r1.prediction.riskLevel === "low"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.prediction.riskLevel.toUpperCase(), " RISK ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.prediction.assetName, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.prediction.confidence, "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 6, ctx_r1.prediction.predictedFailureDate, "shortDate"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" $", ctx_r1.prediction.savings.toFixed(2), "");
  }
}
function CreateWorkOrderModalComponent_div_0_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const priority_r3 = ctx.$implicit;
    \u0275\u0275property("value", priority_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", priority_r3.name, " ");
  }
}
function CreateWorkOrderModalComponent_div_0_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    \u0275\u0275property("value", status_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r4.name, " ");
  }
}
function CreateWorkOrderModalComponent_div_0_option_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r5 = ctx.$implicit;
    \u0275\u0275property("value", asset_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asset_r5.name, " ");
  }
}
function CreateWorkOrderModalComponent_div_0_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    \u0275\u0275property("value", category_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r6.name, " ");
  }
}
function CreateWorkOrderModalComponent_div_0_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "p", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function CreateWorkOrderModalComponent_div_0_span_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Work Order");
    \u0275\u0275elementEnd();
  }
}
function CreateWorkOrderModalComponent_div_0_span_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "circle", 54)(3, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Creating...");
    \u0275\u0275elementEnd()();
  }
}
function CreateWorkOrderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function CreateWorkOrderModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function CreateWorkOrderModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 8);
    \u0275\u0275text(8, "Create Work Order");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function CreateWorkOrderModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "path", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275template(13, CreateWorkOrderModalComponent_div_0_div_13_Template, 24, 13, "div", 13);
    \u0275\u0275elementStart(14, "form", 14);
    \u0275\u0275listener("ngSubmit", function CreateWorkOrderModalComponent_div_0_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(15, "div", 15)(16, "div")(17, "label", 16);
    \u0275\u0275text(18, " Work Order Title ");
    \u0275\u0275elementStart(19, "span", 17);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "label", 19);
    \u0275\u0275text(24, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 21)(27, "div")(28, "label", 22);
    \u0275\u0275text(29, " Priority ");
    \u0275\u0275elementStart(30, "span", 17);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "select", 23);
    \u0275\u0275listener("change", function CreateWorkOrderModalComponent_div_0_Template_select_change_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPriorityChange($event.target.value));
    });
    \u0275\u0275elementStart(33, "option", 24);
    \u0275\u0275text(34, "Select Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, CreateWorkOrderModalComponent_div_0_option_35_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "label", 26);
    \u0275\u0275text(38, " Status ");
    \u0275\u0275elementStart(39, "span", 17);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "select", 27);
    \u0275\u0275listener("change", function CreateWorkOrderModalComponent_div_0_Template_select_change_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusChange($event.target.value));
    });
    \u0275\u0275elementStart(42, "option", 24);
    \u0275\u0275text(43, "Select Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, CreateWorkOrderModalComponent_div_0_option_44_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 21)(46, "div")(47, "label", 28);
    \u0275\u0275text(48, "Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 29);
    \u0275\u0275listener("change", function CreateWorkOrderModalComponent_div_0_Template_select_change_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAssetChange($event.target.value));
    });
    \u0275\u0275elementStart(50, "option", 24);
    \u0275\u0275text(51, "Select Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, CreateWorkOrderModalComponent_div_0_option_52_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div")(54, "label", 30);
    \u0275\u0275text(55, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "select", 31);
    \u0275\u0275listener("change", function CreateWorkOrderModalComponent_div_0_Template_select_change_56_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryChange($event.target.value));
    });
    \u0275\u0275elementStart(57, "option", 24);
    \u0275\u0275text(58, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, CreateWorkOrderModalComponent_div_0_option_59_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 21)(61, "div")(62, "label", 32);
    \u0275\u0275text(63, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div")(66, "label", 34);
    \u0275\u0275text(67, "Estimated Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div")(70, "label", 36);
    \u0275\u0275text(71, "Additional Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(72, "textarea", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(73, CreateWorkOrderModalComponent_div_0_div_73_Template, 3, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 39)(75, "button", 40);
    \u0275\u0275listener("click", function CreateWorkOrderModalComponent_div_0_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275text(76, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 41);
    \u0275\u0275template(78, CreateWorkOrderModalComponent_div_0_span_78_Template, 2, 0, "span", 42)(79, CreateWorkOrderModalComponent_div_0_span_79_Template, 6, 0, "span", 43);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.prediction);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-300", ((tmp_5_0 = ctx_r1.form.get("title")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.form.get("title")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.priorityOptions);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.statusOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.assets);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.categoryOptions);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
  }
}
var CreateWorkOrderModalComponent = class _CreateWorkOrderModalComponent {
  fb;
  workOrderService;
  assetService;
  locationService;
  teamService;
  metaWorkOrdersService;
  toastService;
  isOpen = false;
  prediction = null;
  closeModal = new EventEmitter();
  workOrderCreated = new EventEmitter();
  form;
  isSubmitting = false;
  statusOptions = [];
  priorityOptions = [];
  categoryOptions = [];
  users = [];
  assets = [];
  locations = [];
  teams = [];
  selectedAsset = null;
  selectedLocation = null;
  selectedPriority = null;
  selectedStatus = null;
  selectedCategory = null;
  errorMessage = "";
  constructor(fb, workOrderService, assetService, locationService, teamService, metaWorkOrdersService, toastService) {
    this.fb = fb;
    this.workOrderService = workOrderService;
    this.assetService = assetService;
    this.locationService = locationService;
    this.teamService = teamService;
    this.metaWorkOrdersService = metaWorkOrdersService;
    this.toastService = toastService;
  }
  ngOnInit() {
    this.initForm();
    this.loadDropdownData();
    this.loadMetadataOptions();
    if (this.prediction) {
      this.prefillFormFromPrediction();
    }
  }
  initForm() {
    this.form = this.fb.group({
      title: ["", [Validators.required]],
      description: [""],
      priority_id: [null, [Validators.required]],
      status_id: [null, [Validators.required]],
      category_id: [null],
      due_date: [""],
      asset_id: [null],
      location_id: [null],
      assigned_to: [null],
      team_id: [null],
      tags: [""],
      estimated_hours: [null],
      notes: [""]
    });
  }
  loadDropdownData() {
    this.assetService.getAssets({ per_page: 1e3 }).subscribe({
      next: (response) => {
        const assetsList = response.data?.assets || response.data || [];
        this.assets = Array.isArray(assetsList) ? assetsList.map((asset) => ({
          id: asset.id,
          name: asset.name,
          asset_id: asset.asset_id,
          location: asset.location
        })) : [];
        if (this.prediction?.assetId) {
          this.selectedAsset = this.assets.find((a) => a.id.toString() === this.prediction?.assetId) || null;
        }
      }
    });
    this.locationService.getLocations().subscribe({
      next: (response) => {
        this.locations = response.data.locations.map((loc) => ({
          id: loc.id,
          name: loc.name
        }));
      }
    });
    this.teamService.getTeamMembersFlat(1e3).subscribe({
      next: (teams) => {
        this.teams = teams.map((team) => ({
          id: team.id,
          first_name: team.first_name,
          last_name: team.last_name,
          email: team.email
        }));
      }
    });
  }
  loadMetadataOptions() {
    this.metaWorkOrdersService.getPriorities().subscribe({
      next: (priorities) => {
        this.priorityOptions = priorities;
        if (this.prediction) {
          if (this.prediction.riskLevel === "high") {
            this.selectedPriority = priorities.find((p) => p.name.toLowerCase() === "high") || null;
          } else {
            this.selectedPriority = priorities.find((p) => p.name.toLowerCase() === "medium") || null;
          }
        }
      }
    });
    this.metaWorkOrdersService.getStatus().subscribe({
      next: (statuses) => {
        this.statusOptions = statuses;
        this.selectedStatus = statuses[0] || null;
      }
    });
    this.metaWorkOrdersService.getCategories().subscribe({
      next: (categories) => {
        this.categoryOptions = categories;
        this.selectedCategory = categories.find((c) => c.name.toLowerCase().includes("preventive")) || null;
      }
    });
  }
  prefillFormFromPrediction() {
    if (!this.prediction)
      return;
    this.form.patchValue({
      title: `Preventive Maintenance: ${this.prediction.assetName}`,
      description: this.prediction.recommendedAction,
      asset_id: parseInt(this.prediction.assetId),
      notes: this.buildNotesFromPrediction()
    });
    const predictedDate = new Date(this.prediction.predictedFailureDate);
    const dueDate = new Date(predictedDate);
    if (this.prediction.riskLevel === "high") {
      dueDate.setDate(dueDate.getDate() - 7);
    } else {
      dueDate.setDate(dueDate.getDate() - 14);
    }
    this.form.patchValue({
      due_date: dueDate.toISOString().split("T")[0]
    });
    if (this.prediction.preventiveCost > 0) {
      const estimatedHours = Math.ceil(this.prediction.preventiveCost / 100);
      this.form.patchValue({
        estimated_hours: estimatedHours
      });
    }
  }
  buildNotesFromPrediction() {
    if (!this.prediction)
      return "";
    return `Risk Level: ${this.prediction.riskLevel.toUpperCase()}
Confidence: ${this.prediction.confidence}%
Predicted Failure Date: ${new Date(this.prediction.predictedFailureDate).toLocaleDateString()}
Estimated Savings: $${this.prediction.savings.toFixed(2)}

Factors:
${this.prediction.factors?.join("\n- ") || "None identified"}

Recommended Actions:
${this.prediction.recommendedAction}`;
  }
  onAssetChange(assetId) {
    if (assetId) {
      this.selectedAsset = this.assets.find((a) => a.id === parseInt(assetId)) || null;
    }
  }
  onPriorityChange(priorityId) {
    if (priorityId) {
      this.selectedPriority = this.priorityOptions.find((p) => p.id === parseInt(priorityId)) || null;
    }
  }
  onStatusChange(statusId) {
    if (statusId) {
      this.selectedStatus = this.statusOptions.find((s) => s.id === parseInt(statusId)) || null;
    }
  }
  onCategoryChange(categoryId) {
    if (categoryId) {
      this.selectedCategory = this.categoryOptions.find((c) => c.id === parseInt(categoryId)) || null;
    }
  }
  onSubmit() {
    if (!this.form.valid || !this.selectedPriority || !this.selectedStatus) {
      this.errorMessage = "Please fill in all required fields";
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    const workOrderData = {
      title: this.form.value.title,
      description: this.form.value.description,
      priority_id: this.selectedPriority.id,
      status_id: this.selectedStatus.id,
      category_id: this.selectedCategory?.id || void 0,
      due_date: this.form.value.due_date || void 0,
      asset_id: this.form.value.asset_id || void 0,
      location_id: this.form.value.location_id || void 0,
      assigned_to: this.form.value.assigned_to || void 0,
      estimated_hours: this.form.value.estimated_hours || void 0,
      notes: this.form.value.notes || void 0,
      tags: "predictive-maintenance,preventive"
    };
    this.workOrderService.createWorkOrder(workOrderData).subscribe({
      next: (response) => {
        this.toastService.success("Work order created successfully!");
        this.workOrderCreated.emit(response);
        this.closeModalHandler();
      },
      error: (error) => {
        this.errorMessage = error.error?.message || "Failed to create work order";
        this.isSubmitting = false;
      }
    });
  }
  closeModalHandler() {
    if (this.isSubmitting)
      return;
    this.isOpen = false;
    this.closeModal.emit();
    this.resetModal();
  }
  resetModal() {
    this.form.reset();
    this.errorMessage = "";
    this.selectedAsset = null;
    this.selectedLocation = null;
    this.selectedPriority = null;
    this.selectedStatus = null;
    this.selectedCategory = null;
  }
  ngOnDestroy() {
  }
  static \u0275fac = function CreateWorkOrderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateWorkOrderModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WorkOrderService), \u0275\u0275directiveInject(AssetService), \u0275\u0275directiveInject(LocationService), \u0275\u0275directiveInject(TeamService), \u0275\u0275directiveInject(MetaWorkOrdersService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateWorkOrderModalComponent, selectors: [["app-create-work-order-modal"]], inputs: { isOpen: "isOpen", prediction: "prediction" }, outputs: { closeModal: "closeModal", workOrderCreated: "workOrderCreated" }, decls: 1, vars: 1, consts: [["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4", 3, "click", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-3xl", "w-full", "max-h-[90vh]", "overflow-y-auto", 3, "click"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], ["class", "mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "space-y-4"], ["for", "title", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "text-red-500"], ["id", "title", "type", "text", "formControlName", "title", "placeholder", "Enter work order title", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent"], ["for", "description", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter work order description", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "resize-none"], [1, "grid", "grid-cols-2", "gap-4"], ["for", "priority", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "priority", "formControlName", "priority_id", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "status", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "status", "formControlName", "status_id", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "change"], ["for", "asset", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "asset", "formControlName", "asset_id", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "change"], ["for", "category", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "category", "formControlName", "category_id", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "change"], ["for", "due_date", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "due_date", "type", "date", "formControlName", "due_date", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent"], ["for", "estimated_hours", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "estimated_hours", "type", "number", "formControlName", "estimated_hours", "placeholder", "0", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent"], ["for", "notes", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "notes", "formControlName", "notes", "rows", "4", "placeholder", "Additional notes or instructions", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "resize-none"], ["class", "p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "pt-6", "gap-3", "border-t", "border-gray-200", "mt-6"], ["type", "button", 1, "px-6", "py-2", "text-gray-600", "border", "border-gray-200", "rounded-lg", "hover:border-gray-300", "hover:text-gray-800", "font-medium", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["type", "submit", 1, "px-6", "py-2", "bg-blue-600", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "mb-6", "p-4", "bg-blue-50", "border", "border-blue-200", "rounded-lg"], [1, "flex", "items-start", "justify-between", "mb-2"], [1, "text-sm", "font-semibold", "text-blue-900"], [1, "px-2", "py-1", "text-xs", "font-semibold", "rounded-full", 3, "ngClass"], [1, "text-sm", "text-blue-800", "space-y-1"], [3, "value"], [1, "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function CreateWorkOrderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CreateWorkOrderModalComponent_div_0_Template, 80, 15, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n/*# sourceMappingURL=create-work-order-modal.component.css.map */"], data: { animation: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateWorkOrderModalComponent, [{
    type: Component,
    args: [{ selector: "app-create-work-order-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], animations: [
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
    ], template: `<!-- Modal Backdrop -->\r
<div *ngIf="isOpen"\r
     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4"\r
     [@backdropAnimation]\r
     (click)="closeModalHandler()">\r
  <!-- Modal Container -->\r
  <div class="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"\r
       [@modalAnimation]\r
       (click)="$event.stopPropagation()">\r
    \r
    <!-- Modal Header -->\r
    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r
      <div class="flex items-center space-x-3">\r
        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
          </svg>\r
        </div>\r
        <h2 class="text-xl font-semibold text-gray-900">Create Work Order</h2>\r
      </div>\r
      <button\r
        (click)="closeModalHandler()"\r
        class="p-2 hover:bg-gray-100 rounded-lg transition-colors">\r
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Content -->\r
    <div class="p-6">\r
      <!-- Prediction Context -->\r
      <div *ngIf="prediction" class="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">\r
        <div class="flex items-start justify-between mb-2">\r
          <h3 class="text-sm font-semibold text-blue-900">AI Prediction Context</h3>\r
          <span class="px-2 py-1 text-xs font-semibold rounded-full"\r
                [ngClass]="{\r
                  'bg-red-100 text-red-700': prediction.riskLevel === 'high',\r
                  'bg-yellow-100 text-yellow-700': prediction.riskLevel === 'medium',\r
                  'bg-green-100 text-green-700': prediction.riskLevel === 'low'\r
                }">\r
            {{ prediction.riskLevel.toUpperCase() }} RISK\r
          </span>\r
        </div>\r
        <div class="text-sm text-blue-800 space-y-1">\r
          <p><strong>Asset:</strong> {{ prediction.assetName }}</p>\r
          <p><strong>Confidence:</strong> {{ prediction.confidence }}%</p>\r
          <p><strong>Predicted Failure:</strong> {{ prediction.predictedFailureDate | date:'shortDate' }}</p>\r
          <p><strong>Potential Savings:</strong> \${{ prediction.savings.toFixed(2) }}</p>\r
        </div>\r
      </div>\r
\r
      <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
        <!-- Basic Information -->\r
        <div class="space-y-4">\r
          <!-- Title -->\r
          <div>\r
            <label for="title" class="block text-sm font-medium text-gray-700 mb-2">\r
              Work Order Title <span class="text-red-500">*</span>\r
            </label>\r
            <input\r
              id="title"\r
              type="text"\r
              formControlName="title"\r
              placeholder="Enter work order title"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
              [class.border-red-300]="form.get('title')?.invalid && form.get('title')?.touched">\r
          </div>\r
\r
          <!-- Description -->\r
          <div>\r
            <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description</label>\r
            <textarea\r
              id="description"\r
              formControlName="description"\r
              rows="3"\r
              placeholder="Enter work order description"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"></textarea>\r
          </div>\r
\r
          <!-- Priority and Status -->\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label for="priority" class="block text-sm font-medium text-gray-700 mb-2">\r
                Priority <span class="text-red-500">*</span>\r
              </label>\r
              <select\r
                id="priority"\r
                formControlName="priority_id"\r
                (change)="onPriorityChange($any($event.target).value)"\r
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
                <option value="">Select Priority</option>\r
                <option *ngFor="let priority of priorityOptions" [value]="priority.id">\r
                  {{ priority.name }}\r
                </option>\r
              </select>\r
            </div>\r
\r
            <div>\r
              <label for="status" class="block text-sm font-medium text-gray-700 mb-2">\r
                Status <span class="text-red-500">*</span>\r
              </label>\r
              <select\r
                id="status"\r
                formControlName="status_id"\r
                (change)="onStatusChange($any($event.target).value)"\r
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
                <option value="">Select Status</option>\r
                <option *ngFor="let status of statusOptions" [value]="status.id">\r
                  {{ status.name }}\r
                </option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Asset and Location -->\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label for="asset" class="block text-sm font-medium text-gray-700 mb-2">Asset</label>\r
              <select\r
                id="asset"\r
                formControlName="asset_id"\r
                (change)="onAssetChange($any($event.target).value)"\r
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
                <option value="">Select Asset</option>\r
                <option *ngFor="let asset of assets" [value]="asset.id">\r
                  {{ asset.name }}\r
                </option>\r
              </select>\r
            </div>\r
\r
            <div>\r
              <label for="category" class="block text-sm font-medium text-gray-700 mb-2">Category</label>\r
              <select\r
                id="category"\r
                formControlName="category_id"\r
                (change)="onCategoryChange($any($event.target).value)"\r
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
                <option value="">Select Category</option>\r
                <option *ngFor="let category of categoryOptions" [value]="category.id">\r
                  {{ category.name }}\r
                </option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Due Date and Estimated Hours -->\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label for="due_date" class="block text-sm font-medium text-gray-700 mb-2">Due Date</label>\r
              <input\r
                id="due_date"\r
                type="date"\r
                formControlName="due_date"\r
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
            </div>\r
\r
            <div>\r
              <label for="estimated_hours" class="block text-sm font-medium text-gray-700 mb-2">Estimated Hours</label>\r
              <input\r
                id="estimated_hours"\r
                type="number"\r
                formControlName="estimated_hours"\r
                placeholder="0"\r
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
            </div>\r
          </div>\r
\r
          <!-- Notes -->\r
          <div>\r
            <label for="notes" class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>\r
            <textarea\r
              id="notes"\r
              formControlName="notes"\r
              rows="4"\r
              placeholder="Additional notes or instructions"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"></textarea>\r
          </div>\r
\r
          <!-- Error Message -->\r
          <div *ngIf="errorMessage" class="p-3 bg-red-50 border border-red-200 rounded-lg">\r
            <p class="text-red-600 text-sm">{{ errorMessage }}</p>\r
          </div>\r
        </div>\r
\r
        <!-- Modal Footer -->\r
        <div class="flex items-center justify-end pt-6 gap-3 border-t border-gray-200 mt-6">\r
          <button\r
            type="button"\r
            (click)="closeModalHandler()"\r
            [disabled]="isSubmitting"\r
            class="px-6 py-2 text-gray-600 border border-gray-200 rounded-lg hover:border-gray-300 hover:text-gray-800 font-medium transition-colors disabled:opacity-50">\r
            Cancel\r
          </button>\r
\r
          <button\r
            type="submit"\r
            [disabled]="form.invalid || isSubmitting"\r
            class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">\r
            <span *ngIf="!isSubmitting">Create Work Order</span>\r
            <span *ngIf="isSubmitting" class="flex items-center space-x-2">\r
              <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              <span>Creating...</span>\r
            </span>\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/ai-features/components/create-work-order-modal/create-work-order-modal.component.scss */\n/*# sourceMappingURL=create-work-order-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: WorkOrderService }, { type: AssetService }, { type: LocationService }, { type: TeamService }, { type: MetaWorkOrdersService }, { type: ToastService }], { isOpen: [{
    type: Input
  }], prediction: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], workOrderCreated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateWorkOrderModalComponent, { className: "CreateWorkOrderModalComponent", filePath: "src/app/ai-features/components/create-work-order-modal/create-work-order-modal.component.ts", lineNumber: 77 });
})();

// src/app/ai-features/components/schedule-maintenance-modal/schedule-maintenance-modal.component.ts
var _c02 = (a0, a1, a2) => ({ "bg-red-100 text-red-700": a0, "bg-yellow-100 text-yellow-700": a1, "bg-green-100 text-green-700": a2 });
function ScheduleMaintenanceModalComponent_div_0_strong_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.prediction.assetName);
  }
}
function ScheduleMaintenanceModalComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "h4", 33);
    \u0275\u0275text(3, "AI Prediction Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35)(7, "p")(8, "strong");
    \u0275\u0275text(9, "Asset:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Confidence:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p")(16, "strong");
    \u0275\u0275text(17, "Recommended Action:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p")(20, "strong");
    \u0275\u0275text(21, "Potential Savings:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c02, ctx_r1.prediction.riskLevel === "high", ctx_r1.prediction.riskLevel === "medium", ctx_r1.prediction.riskLevel === "low"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.prediction.riskLevel.toUpperCase(), " RISK ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.prediction.assetName, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.prediction.confidence, "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.prediction.recommendedAction, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" $", ctx_r1.prediction.savings.toFixed(2), "");
  }
}
function ScheduleMaintenanceModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ScheduleMaintenanceModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ScheduleMaintenanceModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 8);
    \u0275\u0275text(8, "Schedule Maintenance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function ScheduleMaintenanceModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "path", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 15);
    \u0275\u0275element(16, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "h3", 17);
    \u0275\u0275text(18, "Schedule Maintenance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 18);
    \u0275\u0275text(20, " This feature will create a maintenance schedule for ");
    \u0275\u0275template(21, ScheduleMaintenanceModalComponent_div_0_strong_21_Template, 2, 1, "strong", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ScheduleMaintenanceModalComponent_div_0_div_22_Template, 23, 10, "div", 20);
    \u0275\u0275elementStart(23, "div", 21)(24, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 23);
    \u0275\u0275element(26, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 25)(28, "p", 26);
    \u0275\u0275text(29, "Full scheduling integration coming soon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 27);
    \u0275\u0275text(31, "This will allow you to create recurring maintenance schedules based on AI predictions.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 28)(33, "button", 29);
    \u0275\u0275listener("click", function ScheduleMaintenanceModalComponent_div_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275text(34, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 30);
    \u0275\u0275text(36, " View Work Orders ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r1.prediction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.prediction);
  }
}
var ScheduleMaintenanceModalComponent = class _ScheduleMaintenanceModalComponent {
  isOpen = false;
  prediction = null;
  closeModal = new EventEmitter();
  closeModalHandler() {
    this.isOpen = false;
    this.closeModal.emit();
  }
  static \u0275fac = function ScheduleMaintenanceModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleMaintenanceModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleMaintenanceModalComponent, selectors: [["app-schedule-maintenance-modal"]], inputs: { isOpen: "isOpen", prediction: "prediction" }, outputs: { closeModal: "closeModal" }, decls: 1, vars: 1, consts: [["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4", 3, "click", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-md", "w-full", 3, "click"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], [1, "text-center", "mb-6"], [1, "w-16", "h-16", "bg-blue-50", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-2"], [1, "text-gray-600", "text-sm"], [4, "ngIf"], ["class", "mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg", 4, "ngIf"], [1, "p-4", "bg-blue-50", "border", "border-blue-200", "rounded-lg"], [1, "flex", "items-start", "space-x-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600", "flex-shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "text-blue-800"], [1, "font-semibold", "mb-1"], [1, "text-blue-700"], [1, "flex", "items-center", "justify-end", "gap-3", "pt-6", "border-t", "border-gray-200", "mt-6"], [1, "px-6", "py-2", "text-gray-600", "border", "border-gray-200", "rounded-lg", "hover:border-gray-300", "hover:text-gray-800", "font-medium", "transition-colors", 3, "click"], ["href", "/work-orders", 1, "px-6", "py-2", "bg-blue-600", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all"], [1, "mb-6", "p-4", "bg-gray-50", "border", "border-gray-200", "rounded-lg"], [1, "flex", "items-start", "justify-between", "mb-2"], [1, "text-sm", "font-semibold", "text-gray-900"], [1, "px-2", "py-1", "text-xs", "font-semibold", "rounded-full", 3, "ngClass"], [1, "text-sm", "text-gray-700", "space-y-1"]], template: function ScheduleMaintenanceModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ScheduleMaintenanceModalComponent_div_0_Template, 37, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgIf], styles: ["\n\n/*# sourceMappingURL=schedule-maintenance-modal.component.css.map */"], data: { animation: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleMaintenanceModalComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-maintenance-modal", standalone: true, imports: [CommonModule], animations: [
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
    ], template: `<!-- Modal Backdrop -->\r
<div *ngIf="isOpen"\r
     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4"\r
     [@backdropAnimation]\r
     (click)="closeModalHandler()">\r
  <!-- Modal Container -->\r
  <div class="bg-white rounded-2xl shadow-xl max-w-md w-full"\r
       [@modalAnimation]\r
       (click)="$event.stopPropagation()">\r
    \r
    <!-- Modal Header -->\r
    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r
      <div class="flex items-center space-x-3">\r
        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>\r
          </svg>\r
        </div>\r
        <h2 class="text-xl font-semibold text-gray-900">Schedule Maintenance</h2>\r
      </div>\r
      <button\r
        (click)="closeModalHandler()"\r
        class="p-2 hover:bg-gray-100 rounded-lg transition-colors">\r
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Content -->\r
    <div class="p-6">\r
      <!-- Info Message -->\r
      <div class="text-center mb-6">\r
        <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">\r
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
        </div>\r
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Schedule Maintenance</h3>\r
        <p class="text-gray-600 text-sm">\r
          This feature will create a maintenance schedule for \r
          <strong *ngIf="prediction">{{ prediction.assetName }}</strong>\r
        </p>\r
      </div>\r
\r
      <!-- Prediction Context -->\r
      <div *ngIf="prediction" class="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">\r
        <div class="flex items-start justify-between mb-2">\r
          <h4 class="text-sm font-semibold text-gray-900">AI Prediction Details</h4>\r
          <span class="px-2 py-1 text-xs font-semibold rounded-full"\r
                [ngClass]="{\r
                  'bg-red-100 text-red-700': prediction.riskLevel === 'high',\r
                  'bg-yellow-100 text-yellow-700': prediction.riskLevel === 'medium',\r
                  'bg-green-100 text-green-700': prediction.riskLevel === 'low'\r
                }">\r
            {{ prediction.riskLevel.toUpperCase() }} RISK\r
          </span>\r
        </div>\r
        <div class="text-sm text-gray-700 space-y-1">\r
          <p><strong>Asset:</strong> {{ prediction.assetName }}</p>\r
          <p><strong>Confidence:</strong> {{ prediction.confidence }}%</p>\r
          <p><strong>Recommended Action:</strong> {{ prediction.recommendedAction }}</p>\r
          <p><strong>Potential Savings:</strong> \${{ prediction.savings.toFixed(2) }}</p>\r
        </div>\r
      </div>\r
\r
      <!-- Coming Soon Note -->\r
      <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">\r
        <div class="flex items-start space-x-3">\r
          <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
          <div class="text-sm text-blue-800">\r
            <p class="font-semibold mb-1">Full scheduling integration coming soon</p>\r
            <p class="text-blue-700">This will allow you to create recurring maintenance schedules based on AI predictions.</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Action Buttons -->\r
      <div class="flex items-center justify-end gap-3 pt-6 border-t border-gray-200 mt-6">\r
        <button\r
          (click)="closeModalHandler()"\r
          class="px-6 py-2 text-gray-600 border border-gray-200 rounded-lg hover:border-gray-300 hover:text-gray-800 font-medium transition-colors">\r
          Close\r
        </button>\r
        <a\r
          href="/work-orders"\r
          class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">\r
          View Work Orders\r
        </a>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/ai-features/components/schedule-maintenance-modal/schedule-maintenance-modal.component.scss */\n/*# sourceMappingURL=schedule-maintenance-modal.component.css.map */\n"] }]
  }], null, { isOpen: [{
    type: Input
  }], prediction: [{
    type: Input
  }], closeModal: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleMaintenanceModalComponent, { className: "ScheduleMaintenanceModalComponent", filePath: "src/app/ai-features/components/schedule-maintenance-modal/schedule-maintenance-modal.component.ts", lineNumber: 42 });
})();

// src/app/ai-features/shared/predictive-maintenance.service.ts
var PredictiveMaintenanceService = class _PredictiveMaintenanceService {
  http;
  baseUrl = `${environment.apiUrl}/ai/predictive-maintenance`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get predictions with optional filtering.
   */
  getPredictions(filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.riskLevel)
        params = params.set("risk_level", filters.riskLevel);
      if (filters.minConfidence)
        params = params.set("min_confidence", filters.minConfidence.toString());
      if (filters.dateFrom)
        params = params.set("date_from", filters.dateFrom);
      if (filters.dateTo)
        params = params.set("date_to", filters.dateTo);
    }
    return this.http.get(this.baseUrl, { params });
  }
  /**
   * Generate new predictions using AI.
   */
  generatePredictions(request) {
    return this.http.post(`${this.baseUrl}/generate`, request);
  }
  /**
   * Export predictions to CSV.
   */
  exportToCsv(filters) {
    let params = new HttpParams().set("format", "csv");
    if (filters) {
      if (filters.riskLevel)
        params = params.set("filters[risk_level]", filters.riskLevel);
      if (filters.minConfidence)
        params = params.set("filters[min_confidence]", filters.minConfidence.toString());
      if (filters.dateFrom)
        params = params.set("filters[date_from]", filters.dateFrom);
      if (filters.dateTo)
        params = params.set("filters[date_to]", filters.dateTo);
    }
    return this.http.get(`${this.baseUrl}/export`, {
      params,
      responseType: "blob"
    });
  }
  /**
   * Get summary statistics.
   */
  getSummary() {
    return this.http.get(`${this.baseUrl}/summary`);
  }
  /**
   * Clear all predictions.
   */
  clearPredictions() {
    return this.http.delete(`${this.baseUrl}/clear`);
  }
  /**
   * Get job status for async generation.
   */
  getJobStatus(jobId) {
    return this.http.get(`${this.baseUrl}/job-status/${jobId}`);
  }
  /**
   * Download CSV file.
   */
  downloadCsv(blob, filename = "predictive_maintenance.csv") {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  /**
   * Format currency for display.
   */
  formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  }
  /**
   * Format date for display.
   */
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  /**
   * Get risk level color class.
   */
  getRiskLevelClass(riskLevel) {
    switch (riskLevel.toLowerCase()) {
      case "high":
        return "bg-red-50 text-red-700 border-red-200";
      case "medium":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "low":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  }
  /**
   * Get confidence level class.
   */
  getConfidenceClass(confidence) {
    if (confidence >= 80)
      return "text-green-600";
    if (confidence >= 60)
      return "text-amber-600";
    return "text-red-600";
  }
  /**
   * Calculate ROI percentage.
   */
  calculateROI(estimatedCost, preventiveCost) {
    if (preventiveCost <= 0)
      return 0;
    return Math.round((estimatedCost - preventiveCost) / preventiveCost * 100);
  }
  static \u0275fac = function PredictiveMaintenanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PredictiveMaintenanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PredictiveMaintenanceService, factory: _PredictiveMaintenanceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PredictiveMaintenanceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/ai-features/components/predictive-maintenance/predictive-maintenance.component.ts
function PredictiveMaintenanceComponent__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function PredictiveMaintenanceComponent__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 28);
    \u0275\u0275element(1, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function PredictiveMaintenanceComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "circle", 33)(4, "polyline", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Last updated: ", ctx_r0.formatDate(ctx_r0.lastUpdated), "");
  }
}
function PredictiveMaintenanceComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 40);
    \u0275\u0275element(5, "rect", 41)(6, "line", 42)(7, "line", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 44)(9, "div", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 46);
    \u0275\u0275text(12, "Assets Monitored");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 38)(14, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 40);
    \u0275\u0275element(16, "path", 48)(17, "path", 49)(18, "path", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 44)(20, "div", 51);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 46);
    \u0275\u0275text(23, "High-Risk Assets");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 38)(25, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 40);
    \u0275\u0275element(27, "line", 53)(28, "path", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 44)(30, "div", 55);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 46);
    \u0275\u0275text(33, "Potential Savings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 38)(35, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 40);
    \u0275\u0275element(37, "path", 57)(38, "polyline", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 44)(40, "div", 59);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 46);
    \u0275\u0275text(43, "Avg Confidence");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r0.summary == null ? null : ctx_r0.summary.totalAssets) || 0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx_r0.summary == null ? null : ctx_r0.summary.highRiskCount) || 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency((ctx_r0.summary == null ? null : ctx_r0.summary.totalSavings) || 0));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", (ctx_r0.summary == null ? null : ctx_r0.summary.averageConfidence) || 0, "%");
  }
}
function PredictiveMaintenanceComponent_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "h4", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 67);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 68)(8, "div", 69)(9, "span", 70);
    \u0275\u0275text(10, "Confidence:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 71);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 69)(14, "span", 70);
    \u0275\u0275text(15, "Predicted Failure:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 71);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 69)(19, "span", 70);
    \u0275\u0275text(20, "Action:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 71);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 72)(24, "button", 73);
    \u0275\u0275listener("click", function PredictiveMaintenanceComponent_div_27_div_4_Template_button_click_24_listener() {
      const prediction_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onScheduleMaintenance(prediction_r3));
    });
    \u0275\u0275text(25, " Schedule Maintenance ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 74);
    \u0275\u0275listener("click", function PredictiveMaintenanceComponent_div_27_div_4_Template_button_click_26_listener() {
      const prediction_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCreateWorkOrder(prediction_r3));
    });
    \u0275\u0275text(27, " Create Work Order ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prediction_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prediction_r3.assetName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getRiskClass(prediction_r3.riskLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, prediction_r3.riskLevel), " Risk ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", prediction_r3.confidence, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(prediction_r3.predictedFailureDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prediction_r3.recommendedAction);
  }
}
function PredictiveMaintenanceComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "h3", 61);
    \u0275\u0275text(2, "Predictions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275template(4, PredictiveMaintenanceComponent_div_27_div_4_Template, 28, 8, "div", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.predictions);
  }
}
function PredictiveMaintenanceComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 77);
    \u0275\u0275element(3, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 78);
    \u0275\u0275text(5, "No Predictions Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 79);
    \u0275\u0275text(7, " Generate AI-powered predictions to get started with predictive maintenance insights. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 80);
    \u0275\u0275listener("click", function PredictiveMaintenanceComponent_div_28_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onGenerate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 7);
    \u0275\u0275element(10, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Generate Predictions ");
    \u0275\u0275elementEnd()();
  }
}
function PredictiveMaintenanceComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 83);
    \u0275\u0275element(3, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 84);
    \u0275\u0275text(5, "Loading Predictions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 85);
    \u0275\u0275text(7, "Fetching your predictive maintenance data...");
    \u0275\u0275elementEnd()();
  }
}
function PredictiveMaintenanceComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 88);
    \u0275\u0275element(3, "circle", 33)(4, "line", 89)(5, "line", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 91);
    \u0275\u0275text(7, "Something Went Wrong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 92);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 80);
    \u0275\u0275listener("click", function PredictiveMaintenanceComponent_div_30_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onRefresh());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 7);
    \u0275\u0275element(12, "path", 8)(13, "path", 9)(14, "path", 10)(15, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Try Again ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var PredictiveMaintenanceComponent = class _PredictiveMaintenanceComponent {
  pmService;
  toastService;
  destroy$ = new Subject();
  // State
  predictions = [];
  summary = null;
  isLoading = false;
  isGenerating = false;
  errorMessage = "";
  lastUpdated = null;
  showCreateWorkOrderModal = false;
  showScheduleMaintenanceModal = false;
  selectedPrediction = null;
  generationJobId = null;
  pollingInterval = null;
  jobProgress = 0;
  constructor(pmService, toastService) {
    this.pmService = pmService;
    this.toastService = toastService;
  }
  ngOnInit() {
    this.loadData();
  }
  ngOnDestroy() {
    this.stopPolling();
    this.destroy$.next();
    this.destroy$.complete();
  }
  get hasData() {
    return this.predictions.length > 0;
  }
  loadData() {
    this.isLoading = true;
    this.errorMessage = "";
    this.pmService.getPredictions().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.predictions = response.data.predictions;
          this.summary = response.data.summary;
          this.lastUpdated = response.data.summary.lastUpdated;
        } else {
          this.errorMessage = response.message || "Failed to load predictions";
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading predictions:", error);
        this.errorMessage = "Failed to load predictions. Please try again.";
        this.isLoading = false;
      }
    });
  }
  onRefresh() {
    this.loadData();
  }
  onGenerate() {
    this.isGenerating = true;
    this.errorMessage = "";
    this.jobProgress = 0;
    this.pmService.generatePredictions({ forceRefresh: true }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data?.job_id) {
          this.generationJobId = response.data.job_id;
          this.startPollingJobStatus();
        }
      },
      error: (error) => {
        console.error("Error starting generation:", error);
        this.errorMessage = "Failed to start predictions generation.";
        this.isGenerating = false;
        this.toastService.error("Failed to start predictions generation.");
      }
    });
  }
  startPollingJobStatus() {
    this.pollingInterval = setInterval(() => {
      if (this.generationJobId) {
        this.pmService.getJobStatus(this.generationJobId).pipe(takeUntil(this.destroy$)).subscribe({
          next: (response) => {
            if (response.data.status === "completed") {
              this.stopPolling();
              this.isGenerating = false;
              this.jobProgress = 100;
              this.loadData();
              this.toastService.success("Predictions generated successfully!");
            } else if (response.data.status === "failed") {
              this.stopPolling();
              this.isGenerating = false;
              this.errorMessage = response.data.error || "Generation failed";
              this.toastService.error(this.errorMessage);
            } else if (response.data.status === "processing") {
              this.jobProgress = response.data.progress || 0;
            }
          },
          error: () => {
            this.stopPolling();
            this.isGenerating = false;
          }
        });
      }
    }, 3e3);
  }
  stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
      this.generationJobId = null;
    }
  }
  onScheduleMaintenance(prediction) {
    this.onCreateWorkOrder(prediction);
  }
  onCreateWorkOrder(prediction) {
    this.selectedPrediction = prediction;
    this.showCreateWorkOrderModal = true;
  }
  closeCreateWorkOrderModal() {
    this.showCreateWorkOrderModal = false;
    this.selectedPrediction = null;
  }
  closeScheduleMaintenanceModal() {
    this.showScheduleMaintenanceModal = false;
    this.selectedPrediction = null;
  }
  onWorkOrderCreated(workOrder) {
    this.toastService.success("Work order created successfully!");
    this.closeCreateWorkOrderModal();
  }
  onExport() {
    if (this.predictions.length === 0) {
      this.toastService.warning("No predictions to export. Please generate predictions first.");
      return;
    }
    this.pmService.exportToCsv().pipe(takeUntil(this.destroy$)).subscribe({
      next: (blob) => {
        const filename = `predictive_maintenance_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
        this.pmService.downloadCsv(blob, filename);
        this.toastService.success("Report exported successfully!");
      },
      error: (error) => {
        console.error("Error exporting data:", error);
        this.errorMessage = "Failed to export data. Please try again.";
        this.toastService.error(this.errorMessage);
      }
    });
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
  getRiskClass(riskLevel) {
    switch (riskLevel.toLowerCase()) {
      case "high":
        return "risk-high";
      case "medium":
        return "risk-medium";
      case "low":
        return "risk-low";
      default:
        return "risk-medium";
    }
  }
  static \u0275fac = function PredictiveMaintenanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PredictiveMaintenanceComponent)(\u0275\u0275directiveInject(PredictiveMaintenanceService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PredictiveMaintenanceComponent, selectors: [["app-predictive-maintenance"]], decls: 33, vars: 16, consts: [[1, "predictive-maintenance"], [1, "pm-header"], [1, "pm-title"], [1, "pm-description"], [1, "pm-actions"], [1, "action-buttons"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], ["d", "M21 3v5h-5"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], ["d", "M3 21v-5h5"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn-icon", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "btn-icon animate-spin", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "btn", "btn-outline", 3, "click", "disabled"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7,10 12,15 17,10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["class", "action-info", 4, "ngIf"], ["class", "pm-summary", 4, "ngIf"], ["class", "pm-predictions", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [3, "closeModal", "workOrderCreated", "isOpen", "prediction"], [3, "closeModal", "isOpen", "prediction"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon", "animate-spin"], ["d", "M21 12a9 9 0 11-6.219-8.56"], [1, "action-info"], [1, "info-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "info-icon"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12,6 12,12 16,14"], [1, "info-text"], [1, "pm-summary"], [1, "summary-grid"], [1, "summary-card"], [1, "card-icon", "assets-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["x1", "8", "y1", "21", "x2", "16", "y2", "21"], ["x1", "12", "y1", "17", "x2", "12", "y2", "21"], [1, "card-content"], [1, "card-value"], [1, "card-label"], [1, "card-icon", "risk-icon"], ["d", "M12 2L2 7l10 5 10-5-10-5z"], ["d", "M2 17l10 5 10-5"], ["d", "M2 12l10 5 10-5"], [1, "card-value", "risk-value"], [1, "card-icon", "savings-icon"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "card-value", "savings-value"], [1, "card-icon", "confidence-icon"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "card-value", "confidence-value"], [1, "pm-predictions"], [1, "predictions-title"], [1, "predictions-list"], ["class", "prediction-card", 4, "ngFor", "ngForOf"], [1, "prediction-card"], [1, "prediction-header"], [1, "asset-name"], [1, "risk-badge", 3, "ngClass"], [1, "prediction-details"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "prediction-actions"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "empty-state"], [1, "empty-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], [1, "empty-title"], [1, "empty-description"], [1, "btn", "btn-primary", 3, "click"], [1, "loading-state"], [1, "loading-spinner"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "animate-spin"], [1, "loading-title"], [1, "loading-description"], [1, "error-state"], [1, "error-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "error-title"], [1, "error-description"]], template: function PredictiveMaintenanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Predictive Maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " AI-powered failure prediction and maintenance optimization. Get intelligent insights to prevent costly breakdowns and optimize your maintenance schedule. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function PredictiveMaintenanceComponent_Template_button_click_8_listener() {
        return ctx.onRefresh();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8)(11, "path", 9)(12, "path", 10)(13, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Refresh Analysis ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "button", 12);
      \u0275\u0275listener("click", function PredictiveMaintenanceComponent_Template_button_click_15_listener() {
        return ctx.onGenerate();
      });
      \u0275\u0275template(16, PredictiveMaintenanceComponent__svg_svg_16_Template, 2, 0, "svg", 13)(17, PredictiveMaintenanceComponent__svg_svg_17_Template, 2, 0, "svg", 14);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 15);
      \u0275\u0275listener("click", function PredictiveMaintenanceComponent_Template_button_click_19_listener() {
        return ctx.onExport();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 7);
      \u0275\u0275element(21, "path", 16)(22, "polyline", 17)(23, "line", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Export Report ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, PredictiveMaintenanceComponent_div_25_Template, 7, 1, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, PredictiveMaintenanceComponent_div_26_Template, 44, 4, "div", 20)(27, PredictiveMaintenanceComponent_div_27_Template, 5, 1, "div", 21)(28, PredictiveMaintenanceComponent_div_28_Template, 12, 0, "div", 22)(29, PredictiveMaintenanceComponent_div_29_Template, 8, 0, "div", 23)(30, PredictiveMaintenanceComponent_div_30_Template, 17, 1, "div", 24);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "app-create-work-order-modal", 25);
      \u0275\u0275listener("closeModal", function PredictiveMaintenanceComponent_Template_app_create_work_order_modal_closeModal_31_listener() {
        return ctx.closeCreateWorkOrderModal();
      })("workOrderCreated", function PredictiveMaintenanceComponent_Template_app_create_work_order_modal_workOrderCreated_31_listener($event) {
        return ctx.onWorkOrderCreated($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "app-schedule-maintenance-modal", 26);
      \u0275\u0275listener("closeModal", function PredictiveMaintenanceComponent_Template_app_schedule_maintenance_modal_closeModal_32_listener() {
        return ctx.closeScheduleMaintenanceModal();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.isLoading || ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isGenerating ? ctx.jobProgress > 0 ? "Generating... " + ctx.jobProgress + "%" : "Generating..." : "Generate Predictions", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading || !ctx.hasData);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.lastUpdated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.summary);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.predictions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.predictions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showCreateWorkOrderModal)("prediction", ctx.selectedPrediction);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showScheduleMaintenanceModal)("prediction", ctx.selectedPrediction);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, CreateWorkOrderModalComponent, ScheduleMaintenanceModalComponent], styles: ["\n\n.predictive-maintenance[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-header[_ngcontent-%COMP%]   .pm-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 1rem 0;\n  line-height: 1.2;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-header[_ngcontent-%COMP%]   .pm-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);\n  transform: translateY(-1px);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #3b82f6;\n  border: 1px solid #3b82f6;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n  transform: translateY(-1px);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.75rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-color: #d1d5db;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.75rem;\n  flex-shrink: 0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon.assets-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon.risk-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon.savings-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon.confidence-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n  line-height: 1;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.risk-value[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.savings-value[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.confidence-value[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 1.5rem 0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-color: #d1d5db;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-header[_ngcontent-%COMP%]   .asset-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n  flex: 1;\n  min-width: 0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-header[_ngcontent-%COMP%]   .risk-badge[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  border: 1px solid transparent;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-header[_ngcontent-%COMP%]   .risk-badge.risk-high[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-header[_ngcontent-%COMP%]   .risk-badge.risk-medium[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fed7aa;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-header[_ngcontent-%COMP%]   .risk-badge.risk-low[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: #bbf7d0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  margin-bottom: 0.25rem;\n  display: block;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #9ca3af;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .loading-title[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .loading-description[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%], \n.predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 32rem;\n  line-height: 1.6;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .animate-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #ef4444;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n}\n.predictive-maintenance[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 32rem;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .predictive-maintenance[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    justify-content: center;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-actions[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .pm-predictions[_ngcontent-%COMP%]   .predictions-list[_ngcontent-%COMP%]   .prediction-card[_ngcontent-%COMP%]   .prediction-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%], \n   .predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%], \n   .predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .loading-title[_ngcontent-%COMP%], \n   .predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%], \n   .predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%], \n   .predictive-maintenance[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .loading-description[_ngcontent-%COMP%], \n   .predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%], \n   .predictive-maintenance[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-description[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=predictive-maintenance.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PredictiveMaintenanceComponent, [{
    type: Component,
    args: [{ selector: "app-predictive-maintenance", standalone: true, imports: [CommonModule, CreateWorkOrderModalComponent, ScheduleMaintenanceModalComponent], template: `
    <div class="predictive-maintenance">
      <!-- Header -->
      <div class="pm-header">
        <h1 class="pm-title">Predictive Maintenance</h1>
        <p class="pm-description">
          AI-powered failure prediction and maintenance optimization. 
          Get intelligent insights to prevent costly breakdowns and optimize your maintenance schedule.
        </p>
      </div>

      <!-- Actions -->
      <div class="pm-actions">
        <div class="action-buttons">
          <button 
            class="btn btn-secondary" 
            (click)="onRefresh()"
            [disabled]="isLoading">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            Refresh Analysis
          </button>

          <button 
            class="btn btn-primary" 
            (click)="onGenerate()"
            [disabled]="isLoading || isGenerating">
            <svg *ngIf="!isGenerating" class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            <svg *ngIf="isGenerating" class="btn-icon animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 11-6.219-8.56"></path>
            </svg>
            {{ isGenerating 
              ? (jobProgress > 0 
                ? 'Generating... ' + jobProgress + '%' 
                : 'Generating...') 
              : 'Generate Predictions' 
            }}
          </button>

          <button 
            class="btn btn-outline" 
            (click)="onExport()"
            [disabled]="isLoading || !hasData">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export Report
          </button>
        </div>

        <div class="action-info" *ngIf="lastUpdated">
          <div class="info-item">
            <svg class="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span class="info-text">Last updated: {{ formatDate(lastUpdated) }}</span>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="pm-summary" *ngIf="summary">
        <div class="summary-grid">
          <div class="summary-card">
            <div class="card-icon assets-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div class="card-content">
              <div class="card-value">{{ summary?.totalAssets || 0 }}</div>
              <div class="card-label">Assets Monitored</div>
            </div>
          </div>

          <div class="summary-card">
            <div class="card-icon risk-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div class="card-content">
              <div class="card-value risk-value">{{ summary?.highRiskCount || 0 }}</div>
              <div class="card-label">High-Risk Assets</div>
            </div>
          </div>

          <div class="summary-card">
            <div class="card-icon savings-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div class="card-content">
              <div class="card-value savings-value">{{ formatCurrency(summary?.totalSavings || 0) }}</div>
              <div class="card-label">Potential Savings</div>
            </div>
          </div>

          <div class="summary-card">
            <div class="card-icon confidence-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22,4 12,14.01 9,11.01"></polyline>
              </svg>
            </div>
            <div class="card-content">
              <div class="card-value confidence-value">{{ summary?.averageConfidence || 0 }}%</div>
              <div class="card-label">Avg Confidence</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Predictions List -->
      <div class="pm-predictions" *ngIf="!isLoading && predictions.length > 0">
        <h3 class="predictions-title">Predictions</h3>
        <div class="predictions-list">
          <div class="prediction-card" *ngFor="let prediction of predictions">
            <div class="prediction-header">
              <h4 class="asset-name">{{ prediction.assetName }}</h4>
              <span class="risk-badge" [ngClass]="getRiskClass(prediction.riskLevel)">
                {{ prediction.riskLevel | titlecase }} Risk
              </span>
            </div>
            <div class="prediction-details">
              <div class="detail-item">
                <span class="detail-label">Confidence:</span>
                <span class="detail-value">{{ prediction.confidence }}%</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Predicted Failure:</span>
                <span class="detail-value">{{ formatDate(prediction.predictedFailureDate) }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Action:</span>
                <span class="detail-value">{{ prediction.recommendedAction }}</span>
              </div>
            </div>
            <div class="prediction-actions">
              <button class="btn btn-sm btn-secondary" (click)="onScheduleMaintenance(prediction)">
                Schedule Maintenance
              </button>
              <button class="btn btn-sm btn-primary" (click)="onCreateWorkOrder(prediction)">
                Create Work Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="empty-state" *ngIf="!isLoading && predictions.length === 0">
        <div class="empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        </div>
        <h3 class="empty-title">No Predictions Yet</h3>
        <p class="empty-description">
          Generate AI-powered predictions to get started with predictive maintenance insights.
        </p>
        <button class="btn btn-primary" (click)="onGenerate()">
          <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          Generate Predictions
        </button>
      </div>

      <!-- Loading State -->
      <div class="loading-state" *ngIf="isLoading">
        <div class="loading-spinner">
          <svg class="animate-spin" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 11-6.219-8.56"></path>
          </svg>
        </div>
        <h3 class="loading-title">Loading Predictions</h3>
        <p class="loading-description">Fetching your predictive maintenance data...</p>
      </div>

      <!-- Error State -->
      <div class="error-state" *ngIf="errorMessage && !isLoading">
        <div class="error-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
        <h3 class="error-title">Something Went Wrong</h3>
        <p class="error-description">{{ errorMessage }}</p>
        <button class="btn btn-primary" (click)="onRefresh()">
          <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
            <path d="M3 21v-5h5"></path>
          </svg>
          Try Again
        </button>
      </div>

      <!-- Modals -->
      <app-create-work-order-modal
        [isOpen]="showCreateWorkOrderModal"
        [prediction]="selectedPrediction"
        (closeModal)="closeCreateWorkOrderModal()"
        (workOrderCreated)="onWorkOrderCreated($event)">
      </app-create-work-order-modal>

      <app-schedule-maintenance-modal
        [isOpen]="showScheduleMaintenanceModal"
        [prediction]="selectedPrediction"
        (closeModal)="closeScheduleMaintenanceModal()">
      </app-schedule-maintenance-modal>
    </div>
  `, styles: ["/* src/app/ai-features/components/predictive-maintenance/predictive-maintenance.component.scss */\n.predictive-maintenance {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.predictive-maintenance .pm-header {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n.predictive-maintenance .pm-header .pm-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 1rem 0;\n  line-height: 1.2;\n}\n.predictive-maintenance .pm-header .pm-description {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.predictive-maintenance .pm-actions {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.predictive-maintenance .pm-actions .action-buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.predictive-maintenance .pm-actions .action-buttons .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.predictive-maintenance .pm-actions .action-buttons .btn .btn-icon {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.predictive-maintenance .pm-actions .action-buttons .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05);\n  transform: translateY(-1px);\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-secondary {\n  background: #f8fafc;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-secondary:hover:not(:disabled) {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-secondary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-outline {\n  background: transparent;\n  color: #3b82f6;\n  border: 1px solid #3b82f6;\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-outline:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n  transform: translateY(-1px);\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-outline:active:not(:disabled) {\n  transform: translateY(0);\n}\n.predictive-maintenance .pm-actions .action-buttons .btn.btn-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.75rem;\n}\n.predictive-maintenance .pm-actions .action-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.predictive-maintenance .pm-actions .action-info .info-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.predictive-maintenance .pm-actions .action-info .info-item .info-icon {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.predictive-maintenance .pm-actions .action-info .info-item .info-text {\n  font-weight: 500;\n}\n.predictive-maintenance .pm-summary {\n  margin-bottom: 2rem;\n}\n.predictive-maintenance .pm-summary .summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-color: #d1d5db;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.75rem;\n  flex-shrink: 0;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-icon svg {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-icon.assets-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-icon.risk-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-icon.savings-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-icon.confidence-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-content {\n  flex: 1;\n  min-width: 0;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-content .card-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n  line-height: 1;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-content .card-value.risk-value {\n  color: #dc2626;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-content .card-value.savings-value {\n  color: #059669;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-content .card-value.confidence-value {\n  color: #7c3aed;\n}\n.predictive-maintenance .pm-summary .summary-grid .summary-card .card-content .card-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n}\n.predictive-maintenance .pm-predictions .predictions-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 1.5rem 0;\n}\n.predictive-maintenance .pm-predictions .predictions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-color: #d1d5db;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-header .asset-name {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n  flex: 1;\n  min-width: 0;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-header .risk-badge {\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  border: 1px solid transparent;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-header .risk-badge.risk-high {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-header .risk-badge.risk-medium {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fed7aa;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-header .risk-badge.risk-low {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: #bbf7d0;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-details {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-details .detail-item .detail-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  margin-bottom: 0.25rem;\n  display: block;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-details .detail-item .detail-value {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.predictive-maintenance .empty-state,\n.predictive-maintenance .loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.predictive-maintenance .empty-state .empty-icon,\n.predictive-maintenance .empty-state .loading-spinner,\n.predictive-maintenance .loading-state .empty-icon,\n.predictive-maintenance .loading-state .loading-spinner {\n  margin-bottom: 1.5rem;\n  color: #9ca3af;\n}\n.predictive-maintenance .empty-state .loading-spinner,\n.predictive-maintenance .loading-state .loading-spinner {\n  color: #3b82f6;\n}\n.predictive-maintenance .empty-state .empty-title,\n.predictive-maintenance .empty-state .loading-title,\n.predictive-maintenance .loading-state .empty-title,\n.predictive-maintenance .loading-state .loading-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n}\n.predictive-maintenance .empty-state .empty-description,\n.predictive-maintenance .empty-state .loading-description,\n.predictive-maintenance .loading-state .empty-description,\n.predictive-maintenance .loading-state .loading-description {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 32rem;\n  line-height: 1.6;\n}\n.predictive-maintenance .animate-spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.predictive-maintenance .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.predictive-maintenance .error-state .error-icon {\n  margin-bottom: 1.5rem;\n  color: #ef4444;\n}\n.predictive-maintenance .error-state .error-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n}\n.predictive-maintenance .error-state .error-description {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 32rem;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .predictive-maintenance {\n    padding: 1rem;\n  }\n  .predictive-maintenance .pm-actions {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .predictive-maintenance .pm-actions .action-buttons {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .predictive-maintenance .pm-actions .action-buttons .btn {\n    flex: 1;\n    min-width: 0;\n    justify-content: center;\n  }\n  .predictive-maintenance .pm-actions .action-info {\n    justify-content: center;\n  }\n  .predictive-maintenance .pm-summary .summary-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .predictive-maintenance .pm-summary .summary-grid .summary-card {\n    padding: 1.25rem;\n  }\n  .predictive-maintenance .pm-summary .summary-grid .summary-card .card-icon {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .predictive-maintenance .pm-summary .summary-grid .summary-card .card-icon svg {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n  .predictive-maintenance .pm-summary .summary-grid .summary-card .card-content .card-value {\n    font-size: 1.75rem;\n  }\n  .predictive-maintenance .pm-predictions .predictions-list .prediction-card {\n    padding: 1.25rem;\n  }\n  .predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-details {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-actions {\n    flex-direction: column;\n  }\n  .predictive-maintenance .pm-predictions .predictions-list .prediction-card .prediction-actions .btn {\n    width: 100%;\n  }\n  .predictive-maintenance .empty-state,\n  .predictive-maintenance .loading-state {\n    padding: 3rem 1.5rem;\n  }\n  .predictive-maintenance .empty-state .empty-title,\n  .predictive-maintenance .empty-state .loading-title,\n  .predictive-maintenance .loading-state .empty-title,\n  .predictive-maintenance .loading-state .loading-title {\n    font-size: 1.25rem;\n  }\n  .predictive-maintenance .empty-state .empty-description,\n  .predictive-maintenance .empty-state .loading-description,\n  .predictive-maintenance .loading-state .empty-description,\n  .predictive-maintenance .loading-state .loading-description {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=predictive-maintenance.component.css.map */\n"] }]
  }], () => [{ type: PredictiveMaintenanceService }, { type: ToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PredictiveMaintenanceComponent, { className: "PredictiveMaintenanceComponent", filePath: "src/app/ai-features/components/predictive-maintenance/predictive-maintenance.component.ts", lineNumber: 251 });
})();

// src/app/ai-features/components/natural-language/nlq-header.component.ts
function NLQHeaderComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 28);
    \u0275\u0275element(3, "path", 29)(4, "line", 30)(5, "line", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 32)(7, "h3", 33);
    \u0275\u0275text(8, "OpenAI API Key Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 34);
    \u0275\u0275text(10, " To use Natural Language Queries, please configure your OpenAI API key in the system settings. ");
    \u0275\u0275elementEnd()()()();
  }
}
var NLQHeaderComponent = class _NLQHeaderComponent {
  needsApiKey = false;
  static \u0275fac = function NLQHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NLQHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NLQHeaderComponent, selectors: [["app-nlq-header"]], inputs: { needsApiKey: "needsApiKey" }, decls: 32, vars: 1, consts: [[1, "nlq-header"], [1, "breadcrumbs"], [1, "breadcrumb-list"], [1, "breadcrumb-item"], ["routerLink", "/ai-features", 1, "breadcrumb-link"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "breadcrumb-icon"], ["d", "M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"], [1, "breadcrumb-separator"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 18l6-6-6-6"], [1, "breadcrumb-item", "active"], [1, "breadcrumb-current"], [1, "header-content"], [1, "header-main"], [1, "header-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["d", "M13 8H7"], ["d", "M17 12H7"], [1, "header-text"], [1, "header-title"], [1, "header-description"], [1, "ai-badge"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "ai-icon"], [1, "ai-text"], ["class", "api-key-banner", 4, "ngIf"], [1, "api-key-banner"], [1, "banner-content"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "banner-icon"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "banner-text"], [1, "banner-title"], [1, "banner-description"]], template: function NLQHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "ol", 2)(3, "li", 3)(4, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " AI Features ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "li", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 8);
      \u0275\u0275element(10, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "li", 10)(12, "span", 11);
      \u0275\u0275text(13, "Natural Language");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 15);
      \u0275\u0275element(18, "path", 16)(19, "path", 17)(20, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 19)(22, "h1", 20);
      \u0275\u0275text(23, "Natural Language Queries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 21);
      \u0275\u0275text(25, " Ask questions about your assets in plain English and get AI-powered answers. Get insights on maintenance, costs, performance, and more. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 23);
      \u0275\u0275element(28, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "span", 24);
      \u0275\u0275text(30, "Powered by AI");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(31, NLQHeaderComponent_div_31_Template, 11, 0, "div", 25);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(31);
      \u0275\u0275property("ngIf", ctx.needsApiKey);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.nlq-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   .breadcrumb-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   .breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   .breadcrumb-link[_ngcontent-%COMP%]   .breadcrumb-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   .breadcrumb-current[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%]   .breadcrumb-current[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]   .breadcrumb-separator[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  display: flex;\n  align-items: center;\n}\n.nlq-header[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]   .breadcrumb-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  flex: 1;\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4rem;\n  height: 4rem;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  border-radius: 1rem;\n  color: white;\n  flex-shrink: 0;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.2;\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 42rem;\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .ai-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  border: 1px solid #d1d5db;\n  border-radius: 0.75rem;\n  color: #374151;\n  font-size: 0.875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .ai-badge[_ngcontent-%COMP%]   .ai-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #3b82f6;\n}\n.nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .ai-badge[_ngcontent-%COMP%]   .ai-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.nlq-header[_ngcontent-%COMP%]   .api-key-banner[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  border: 1px solid #f59e0b;\n  border-radius: 1rem;\n  padding: 1rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.nlq-header[_ngcontent-%COMP%]   .api-key-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.nlq-header[_ngcontent-%COMP%]   .api-key-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  color: #d97706;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.nlq-header[_ngcontent-%COMP%]   .api-key-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nlq-header[_ngcontent-%COMP%]   .api-key-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #92400e;\n  margin: 0 0 0.25rem 0;\n}\n.nlq-header[_ngcontent-%COMP%]   .api-key-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #92400e;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 1rem;\n  }\n  .nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n  }\n  .nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .nlq-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .ai-badge[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n}\n/*# sourceMappingURL=nlq-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NLQHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-nlq-header", standalone: true, imports: [CommonModule], template: `
    <div class="nlq-header">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item">
            <a routerLink="/ai-features" class="breadcrumb-link">
              <svg class="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
              </svg>
              AI Features
            </a>
          </li>
          <li class="breadcrumb-separator">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </li>
          <li class="breadcrumb-item active">
            <span class="breadcrumb-current">Natural Language</span>
          </li>
        </ol>
      </nav>

      <!-- Main Header -->
      <div class="header-content">
        <div class="header-main">
          <div class="header-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M13 8H7"></path>
              <path d="M17 12H7"></path>
            </svg>
          </div>
          <div class="header-text">
            <h1 class="header-title">Natural Language Queries</h1>
            <p class="header-description">
              Ask questions about your assets in plain English and get AI-powered answers. 
              Get insights on maintenance, costs, performance, and more.
            </p>
          </div>
        </div>
        
        <!-- AI Badge -->
        <div class="ai-badge">
          <svg class="ai-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
          </svg>
          <span class="ai-text">Powered by AI</span>
        </div>
      </div>

      <!-- API Key Warning Banner -->
      <div *ngIf="needsApiKey" class="api-key-banner">
        <div class="banner-content">
          <svg class="banner-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <div class="banner-text">
            <h3 class="banner-title">OpenAI API Key Required</h3>
            <p class="banner-description">
              To use Natural Language Queries, please configure your OpenAI API key in the system settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/natural-language/nlq-header.component.scss */\n.nlq-header {\n  margin-bottom: 2rem;\n}\n.nlq-header .breadcrumbs {\n  margin-bottom: 1.5rem;\n}\n.nlq-header .breadcrumbs .breadcrumb-list {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nlq-header .breadcrumbs .breadcrumb-list .breadcrumb-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.nlq-header .breadcrumbs .breadcrumb-list .breadcrumb-item .breadcrumb-link {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.nlq-header .breadcrumbs .breadcrumb-list .breadcrumb-item .breadcrumb-link:hover {\n  color: #3b82f6;\n}\n.nlq-header .breadcrumbs .breadcrumb-list .breadcrumb-item .breadcrumb-link .breadcrumb-icon {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.nlq-header .breadcrumbs .breadcrumb-list .breadcrumb-item .breadcrumb-current {\n  color: #1f2937;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.nlq-header .breadcrumbs .breadcrumb-list .breadcrumb-item.active .breadcrumb-current {\n  color: #3b82f6;\n}\n.nlq-header .breadcrumbs .breadcrumb-list .breadcrumb-separator {\n  color: #d1d5db;\n  display: flex;\n  align-items: center;\n}\n.nlq-header .breadcrumbs .breadcrumb-list .breadcrumb-separator svg {\n  width: 1rem;\n  height: 1rem;\n}\n.nlq-header .header-content {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.nlq-header .header-content .header-main {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  flex: 1;\n}\n.nlq-header .header-content .header-main .header-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4rem;\n  height: 4rem;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  border-radius: 1rem;\n  color: white;\n  flex-shrink: 0;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.nlq-header .header-content .header-main .header-icon svg {\n  width: 2rem;\n  height: 2rem;\n}\n.nlq-header .header-content .header-main .header-text {\n  flex: 1;\n}\n.nlq-header .header-content .header-main .header-text .header-title {\n  font-size: 2.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.2;\n}\n.nlq-header .header-content .header-main .header-text .header-description {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 42rem;\n}\n.nlq-header .header-content .ai-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f4f6 0%,\n      #e5e7eb 100%);\n  border: 1px solid #d1d5db;\n  border-radius: 0.75rem;\n  color: #374151;\n  font-size: 0.875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.nlq-header .header-content .ai-badge .ai-icon {\n  width: 1rem;\n  height: 1rem;\n  color: #3b82f6;\n}\n.nlq-header .header-content .ai-badge .ai-text {\n  font-weight: 600;\n}\n.nlq-header .api-key-banner {\n  margin-top: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  border: 1px solid #f59e0b;\n  border-radius: 1rem;\n  padding: 1rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.nlq-header .api-key-banner .banner-content {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.nlq-header .api-key-banner .banner-content .banner-icon {\n  color: #d97706;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.nlq-header .api-key-banner .banner-content .banner-text {\n  flex: 1;\n}\n.nlq-header .api-key-banner .banner-content .banner-text .banner-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #92400e;\n  margin: 0 0 0.25rem 0;\n}\n.nlq-header .api-key-banner .banner-content .banner-text .banner-description {\n  font-size: 0.875rem;\n  color: #92400e;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .nlq-header .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .nlq-header .header-content .header-main {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 1rem;\n  }\n  .nlq-header .header-content .header-main .header-icon {\n    width: 3rem;\n    height: 3rem;\n  }\n  .nlq-header .header-content .header-main .header-icon svg {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .nlq-header .header-content .header-main .header-text .header-title {\n    font-size: 1.875rem;\n  }\n  .nlq-header .header-content .header-main .header-text .header-description {\n    font-size: 1rem;\n  }\n  .nlq-header .header-content .ai-badge {\n    align-self: center;\n  }\n}\n/*# sourceMappingURL=nlq-header.component.css.map */\n"] }]
  }], null, { needsApiKey: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NLQHeaderComponent, { className: "NLQHeaderComponent", filePath: "src/app/ai-features/components/natural-language/nlq-header.component.ts", lineNumber: 80 });
})();

// src/app/ai-features/components/natural-language/nlq-context-strip.component.ts
function NLQContextStripComponent_div_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "path", 26)(3, "line", 27)(4, "line", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8, "Need Maintenance");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.context.overdueMaintenance);
  }
}
function NLQContextStripComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 5);
    \u0275\u0275element(3, "circle", 6)(4, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Current Context");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 10);
    \u0275\u0275element(10, "rect", 11)(11, "line", 12)(12, "line", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 15);
    \u0275\u0275text(16, "Assets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 10);
    \u0275\u0275element(19, "path", 16)(20, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 10);
    \u0275\u0275element(27, "path", 18)(28, "polyline", 19)(29, "line", 20)(30, "line", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "span", 14);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 15);
    \u0275\u0275text(34, "Open WOs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 10);
    \u0275\u0275element(37, "path", 22)(38, "circle", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "span", 14);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 15);
    \u0275\u0275text(42, "Locations");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, NLQContextStripComponent_div_1_div_43_Template, 9, 1, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.context.totalAssets);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.context.activeAssets);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.context.openWorkOrders);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.context.totalLocations);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.context.overdueMaintenance > 0);
  }
}
function NLQContextStripComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "div", 32)(3, "div", 33)(4, "div", 34)(5, "div", 35);
    \u0275\u0275elementEnd()();
  }
}
var NLQContextStripComponent = class _NLQContextStripComponent {
  context = null;
  static \u0275fac = function NLQContextStripComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NLQContextStripComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NLQContextStripComponent, selectors: [["app-nlq-context-strip"]], inputs: { context: "context" }, decls: 4, vars: 2, consts: [["loadingTemplate", ""], [1, "context-strip"], ["class", "context-content", 4, "ngIf", "ngIfElse"], [1, "context-content"], [1, "context-title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "context-icon"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "context-stats"], [1, "stat-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "stat-icon"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["x1", "8", "y1", "21", "x2", "16", "y2", "21"], ["x1", "12", "y1", "17", "x2", "12", "y2", "21"], [1, "stat-value"], [1, "stat-label"], ["d", "M9 12l2 2 4-4"], ["d", "M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14,2 14,8 20,8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], ["class", "stat-item", 4, "ngIf"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "stat-icon", "warning"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "stat-value", "warning"], [1, "context-loading"], [1, "loading-skeleton"], [1, "skeleton-line", "w-24"], [1, "skeleton-line", "w-32"], [1, "skeleton-line", "w-28"], [1, "skeleton-line", "w-20"]], template: function NLQContextStripComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, NLQContextStripComponent_div_1_Template, 44, 5, "div", 2)(2, NLQContextStripComponent_ng_template_2_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const loadingTemplate_r2 = \u0275\u0275reference(3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.context)("ngIfElse", loadingTemplate_r2);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.context-strip[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1rem 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.context-strip[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #374151;\n  font-size: 0.875rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-title[_ngcontent-%COMP%]   .context-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #3b82f6;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.375rem 0.75rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-icon.warning[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value.warning[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.context-strip[_ngcontent-%COMP%]   .context-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.context-strip[_ngcontent-%COMP%]   .context-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 0.375rem;\n}\n.context-strip[_ngcontent-%COMP%]   .context-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-line.w-24[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.context-strip[_ngcontent-%COMP%]   .context-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-line.w-32[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.context-strip[_ngcontent-%COMP%]   .context-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-line.w-28[_ngcontent-%COMP%] {\n  width: 7rem;\n}\n.context-strip[_ngcontent-%COMP%]   .context-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-line.w-20[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .context-strip[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n    width: 100%;\n  }\n  .context-strip[_ngcontent-%COMP%]   .context-content[_ngcontent-%COMP%]   .context-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    justify-content: center;\n  }\n  .context-strip[_ngcontent-%COMP%]   .context-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .context-strip[_ngcontent-%COMP%]   .context-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=nlq-context-strip.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NLQContextStripComponent, [{
    type: Component,
    args: [{ selector: "app-nlq-context-strip", standalone: true, imports: [CommonModule], template: `
    <div class="context-strip">
      <div class="context-content" *ngIf="context; else loadingTemplate">
        <div class="context-title">
          <svg class="context-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <span>Current Context</span>
        </div>
        
        <div class="context-stats">
          <div class="stat-item">
            <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <span class="stat-value">{{ context.totalAssets }}</span>
            <span class="stat-label">Assets</span>
          </div>

          <div class="stat-item">
            <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
            </svg>
            <span class="stat-value">{{ context.activeAssets }}</span>
            <span class="stat-label">Active</span>
          </div>

          <div class="stat-item">
            <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span class="stat-value">{{ context.openWorkOrders }}</span>
            <span class="stat-label">Open WOs</span>
          </div>

          <div class="stat-item">
            <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span class="stat-value">{{ context.totalLocations }}</span>
            <span class="stat-label">Locations</span>
          </div>

          <div class="stat-item" *ngIf="context.overdueMaintenance > 0">
            <svg class="stat-icon warning" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="stat-value warning">{{ context.overdueMaintenance }}</span>
            <span class="stat-label">Need Maintenance</span>
          </div>
        </div>
      </div>

      <ng-template #loadingTemplate>
        <div class="context-loading">
          <div class="loading-skeleton">
            <div class="skeleton-line w-24"></div>
            <div class="skeleton-line w-32"></div>
            <div class="skeleton-line w-28"></div>
            <div class="skeleton-line w-20"></div>
          </div>
        </div>
      </ng-template>
    </div>
  `, styles: ["/* src/app/ai-features/components/natural-language/nlq-context-strip.component.scss */\n.context-strip {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1rem 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.context-strip:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.context-strip .context-content {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.context-strip .context-content .context-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #374151;\n  font-size: 0.875rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.context-strip .context-content .context-title .context-icon {\n  width: 1rem;\n  height: 1rem;\n  color: #3b82f6;\n}\n.context-strip .context-content .context-stats {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.context-strip .context-content .context-stats .stat-item {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.375rem 0.75rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n}\n.context-strip .context-content .context-stats .stat-item:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.context-strip .context-content .context-stats .stat-item .stat-icon {\n  width: 0.875rem;\n  height: 0.875rem;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.context-strip .context-content .context-stats .stat-item .stat-icon.warning {\n  color: #d97706;\n}\n.context-strip .context-content .context-stats .stat-item .stat-value {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.context-strip .context-content .context-stats .stat-item .stat-value.warning {\n  color: #d97706;\n}\n.context-strip .context-content .context-stats .stat-item .stat-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.context-strip .context-loading .loading-skeleton {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.context-strip .context-loading .loading-skeleton .skeleton-line {\n  height: 1.5rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 0.375rem;\n}\n.context-strip .context-loading .loading-skeleton .skeleton-line.w-24 {\n  width: 6rem;\n}\n.context-strip .context-loading .loading-skeleton .skeleton-line.w-32 {\n  width: 8rem;\n}\n.context-strip .context-loading .loading-skeleton .skeleton-line.w-28 {\n  width: 7rem;\n}\n.context-strip .context-loading .loading-skeleton .skeleton-line.w-20 {\n  width: 5rem;\n}\n@keyframes loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .context-strip {\n    padding: 0.75rem 1rem;\n  }\n  .context-strip .context-content {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .context-strip .context-content .context-stats {\n    gap: 0.75rem;\n    width: 100%;\n  }\n  .context-strip .context-content .context-stats .stat-item {\n    flex: 1;\n    min-width: 0;\n    justify-content: center;\n  }\n  .context-strip .context-loading .loading-skeleton {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .context-strip .context-loading .loading-skeleton .skeleton-line {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=nlq-context-strip.component.css.map */\n"] }]
  }], null, { context: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NLQContextStripComponent, { className: "NLQContextStripComponent", filePath: "src/app/ai-features/components/natural-language/nlq-context-strip.component.ts", lineNumber: 86 });
})();

// src/app/ai-features/shared/natural-language.service.ts
var NaturalLanguageService = class _NaturalLanguageService {
  http;
  apiUrl = `${environment.apiUrl}/ai/natural-language`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get asset context for natural language queries.
   */
  getContext() {
    return this.http.get(`${this.apiUrl}/context`);
  }
  /**
   * Send chat message to AI.
   */
  chat(request) {
    return this.http.post(`${this.apiUrl}/chat`, request);
  }
  /**
   * Check if OpenAI API key is configured.
   */
  checkApiKey() {
    return this.http.get(`${this.apiUrl}/check-api-key`);
  }
  /**
   * Format markdown content for display.
   */
  formatMarkdown(content) {
    return content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/`(.*?)`/g, "<code>$1</code>").replace(/\n/g, "<br>").replace(/^### (.*$)/gim, "<h3>$1</h3>").replace(/^## (.*$)/gim, "<h2>$1</h2>").replace(/^# (.*$)/gim, "<h1>$1</h1>").replace(/^\* (.*$)/gim, "<li>$1</li>").replace(/^- (.*$)/gim, "<li>$1</li>");
  }
  /**
   * Copy text to clipboard.
   */
  copyToClipboard(text) {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          document.body.removeChild(textArea);
          return true;
        } catch (err2) {
          document.body.removeChild(textArea);
          return false;
        }
      }
    });
  }
  static \u0275fac = function NaturalLanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NaturalLanguageService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NaturalLanguageService, factory: _NaturalLanguageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NaturalLanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/ai-features/components/natural-language/nlq-chat.component.ts
var _c03 = ["messageInput"];
var _c1 = ["messagesContainer"];
function NLQChatComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 17);
    \u0275\u0275element(3, "path", 18)(4, "path", 19)(5, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 21);
    \u0275\u0275text(7, "Start a Conversation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 22);
    \u0275\u0275text(9, " Ask me anything about your assets, maintenance, work orders, or operations. I can help you analyze data, find information, and get insights. ");
    \u0275\u0275elementEnd()();
  }
}
function NLQChatComponent_div_4__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 34);
    \u0275\u0275elementEnd();
  }
}
function NLQChatComponent_div_4__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "path", 35)(2, "circle", 36);
    \u0275\u0275elementEnd();
  }
}
function NLQChatComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275template(2, NLQChatComponent_div_4__svg_svg_2_Template, 2, 0, "svg", 25)(3, NLQChatComponent_div_4__svg_svg_3_Template, 3, 0, "svg", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275element(5, "div", 27);
    \u0275\u0275elementStart(6, "div", 28)(7, "button", 29);
    \u0275\u0275listener("click", function NLQChatComponent_div_4_Template_button_click_7_listener() {
      const message_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyMessage(message_r3.content));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 30);
    \u0275\u0275element(9, "rect", 31)(10, "path", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "message-" + message_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", message_r3.type === "assistant");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r3.type === "user");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r3.formatMessage(message_r3.content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.formatTime(message_r3.timestamp));
  }
}
function NLQChatComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 26)(5, "div", 38)(6, "div", 39);
    \u0275\u0275element(7, "span")(8, "span")(9, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 40);
    \u0275\u0275text(11, "AI is thinking...");
    \u0275\u0275elementEnd()()()();
  }
}
var NLQChatComponent = class _NLQChatComponent {
  nlService;
  sanitizer;
  messages = [];
  isProcessing = false;
  needsApiKey = false;
  hasContext = false;
  messageSent = new EventEmitter();
  messageInput;
  messagesContainer;
  currentMessage = "";
  destroy$ = new Subject();
  constructor(nlService, sanitizer) {
    this.nlService = nlService;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    setTimeout(() => {
      if (this.messageInput) {
        this.messageInput.nativeElement.focus();
      }
    }, 100);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  sendMessage() {
    if (!this.currentMessage.trim() || this.isProcessing || this.needsApiKey || !this.hasContext) {
      return;
    }
    this.messageSent.emit(this.currentMessage.trim());
    this.currentMessage = "";
    this.autoResize();
  }
  copyMessage(content) {
    this.nlService.copyToClipboard(content).then((success) => {
      if (success) {
        console.log("Message copied to clipboard");
      }
    });
  }
  formatMessage(content) {
    const formatted = this.nlService.formatMarkdown(content);
    const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, formatted);
    return this.sanitizer.bypassSecurityTrustHtml(sanitized || "");
  }
  formatTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  autoResize() {
    if (this.messageInput) {
      const textarea = this.messageInput.nativeElement;
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
    }
  }
  ngAfterViewChecked() {
    if (this.messagesContainer) {
      const container = this.messagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }
  }
  static \u0275fac = function NLQChatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NLQChatComponent)(\u0275\u0275directiveInject(NaturalLanguageService), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NLQChatComponent, selectors: [["app-nlq-chat"]], viewQuery: function NLQChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messageInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
    }
  }, inputs: { messages: "messages", isProcessing: "isProcessing", needsApiKey: "needsApiKey", hasContext: "hasContext" }, outputs: { messageSent: "messageSent" }, decls: 17, vars: 6, consts: [["messagesContainer", ""], ["messageInput", ""], [1, "chat-container"], [1, "messages-area"], ["class", "empty-state", 4, "ngIf"], ["class", "message", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "message message-assistant", 4, "ngIf"], [1, "input-area"], [1, "input-container"], ["placeholder", "Ask me anything about your assets...", "rows", "1", 1, "message-input", 3, "ngModelChange", "keydown", "ngModel", "disabled"], [1, "send-button", 3, "click", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22,2 15,22 11,13 2,9 22,2"], [1, "input-hint"], [1, "empty-state"], [1, "empty-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["d", "M13 8H7"], ["d", "M17 12H7"], [1, "empty-title"], [1, "empty-description"], [1, "message", 3, "ngClass"], [1, "message-avatar"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "message-content"], [1, "message-text", 3, "innerHTML"], [1, "message-actions"], ["title", "Copy message", 1, "action-button", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], [1, "message-timestamp"], ["d", "M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "message", "message-assistant"], [1, "processing-indicator"], [1, "processing-dots"], [1, "processing-text"]], template: function NLQChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3, 0);
      \u0275\u0275template(3, NLQChatComponent_div_3_Template, 10, 0, "div", 4)(4, NLQChatComponent_div_4_Template, 13, 5, "div", 5)(5, NLQChatComponent_div_5_Template, 12, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "textarea", 9, 1);
      \u0275\u0275twoWayListener("ngModelChange", function NLQChatComponent_Template_textarea_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentMessage, $event) || (ctx.currentMessage = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keydown", function NLQChatComponent_Template_textarea_keydown_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeyDown($event));
      });
      \u0275\u0275text(10, "          ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 10);
      \u0275\u0275listener("click", function NLQChatComponent_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendMessage());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 11);
      \u0275\u0275element(13, "line", 12)(14, "polygon", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 14);
      \u0275\u0275text(16, " Press Enter to send, Shift+Enter for new line ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.messages.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.messages);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isProcessing);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentMessage);
      \u0275\u0275property("disabled", ctx.isProcessing || ctx.needsApiKey || !ctx.hasContext);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.currentMessage.trim() || ctx.isProcessing || ctx.needsApiKey || !ctx.hasContext);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.chat-container[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  color: #6b7280;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  max-width: 24rem;\n  line-height: 1.5;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  max-width: 80%;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message.message-user[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message.message-user[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message.message-user[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message.message-user[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-timestamp[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message.message-assistant[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message.message-assistant[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #6b7280;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 1rem;\n  position: relative;\n  min-width: 0;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #374151;\n  word-wrap: break-word;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global(h1), \n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global(h2), \n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global(h3) {\n  margin: 0 0 0.5rem 0;\n  font-weight: 600;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global(ul), \n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global(ol) {\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global(li) {\n  margin: 0.25rem 0;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global(code) {\n  background: rgba(0, 0, 0, 0.1);\n  padding: 0.125rem 0.25rem;\n  border-radius: 0.25rem;\n  font-family: "Courier New", monospace;\n  font-size: 0.8em;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global(strong) {\n  font-weight: 600;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:global(em) {\n  font-style: italic;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.75rem;\n  height: 1.75rem;\n  border: none;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.2);\n  color: #374151;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-timestamp[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin-top: 0.25rem;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]:hover   .message-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .processing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #6b7280;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .processing-indicator[_ngcontent-%COMP%]   .processing-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .processing-indicator[_ngcontent-%COMP%]   .processing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 0.375rem;\n  height: 0.375rem;\n  background: #9ca3af;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_processing 1.4s infinite ease-in-out both;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .processing-indicator[_ngcontent-%COMP%]   .processing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .processing-indicator[_ngcontent-%COMP%]   .processing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.16s;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .processing-indicator[_ngcontent-%COMP%]   .processing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0s;\n}\n.chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .processing-indicator[_ngcontent-%COMP%]   .processing-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-style: italic;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding: 1rem 1.5rem;\n  background: #f8fafc;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.75rem;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.75rem;\n  padding: 0.75rem;\n  transition: all 0.2s ease;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]:focus-within {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  resize: none;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #374151;\n  background: transparent;\n  min-height: 1.25rem;\n  max-height: 120px;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]:disabled {\n  color: #9ca3af;\n  cursor: not-allowed;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  transform: translateY(-1px);\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:disabled {\n  background: #d1d5db;\n  color: #9ca3af;\n  cursor: not-allowed;\n  transform: none;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 0.5rem;\n  text-align: center;\n}\n@keyframes _ngcontent-%COMP%_processing {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .chat-container[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  .chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  .chat-container[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-actions[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=nlq-chat.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NLQChatComponent, [{
    type: Component,
    args: [{ selector: "app-nlq-chat", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="chat-container">
      <!-- Messages Area -->
      <div class="messages-area" #messagesContainer>
        <div *ngIf="messages.length === 0" class="empty-state">
          <div class="empty-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M13 8H7"></path>
              <path d="M17 12H7"></path>
            </svg>
          </div>
          <h3 class="empty-title">Start a Conversation</h3>
          <p class="empty-description">
            Ask me anything about your assets, maintenance, work orders, or operations. 
            I can help you analyze data, find information, and get insights.
          </p>
        </div>

        <div *ngFor="let message of messages" class="message" [ngClass]="'message-' + message.type">
          <div class="message-avatar">
            <svg *ngIf="message.type === 'assistant'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
            </svg>
            <svg *ngIf="message.type === 'user'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="message-content">
            <div class="message-text" [innerHTML]="formatMessage(message.content)"></div>
            <div class="message-actions">
              <button class="action-button" (click)="copyMessage(message.content)" title="Copy message">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <div class="message-timestamp">{{ formatTime(message.timestamp) }}</div>
          </div>
        </div>

        <!-- Processing Indicator -->
        <div *ngIf="isProcessing" class="message message-assistant">
          <div class="message-avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
            </svg>
          </div>
          <div class="message-content">
            <div class="processing-indicator">
              <div class="processing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="processing-text">AI is thinking...</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="input-area">
        <div class="input-container">
          <textarea
            #messageInput
            [(ngModel)]="currentMessage"
            (keydown)="onKeyDown($event)"
            [disabled]="isProcessing || needsApiKey || !hasContext"
            placeholder="Ask me anything about your assets..."
            class="message-input"
            rows="1">
          </textarea>
          <button
            (click)="sendMessage()"
            [disabled]="!currentMessage.trim() || isProcessing || needsApiKey || !hasContext"
            class="send-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
            </svg>
          </button>
        </div>
        <div class="input-hint">
          Press Enter to send, Shift+Enter for new line
        </div>
      </div>
    </div>
  `, styles: ['/* src/app/ai-features/components/natural-language/nlq-chat.component.scss */\n.chat-container {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.chat-container .messages-area {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.chat-container .messages-area .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  color: #6b7280;\n}\n.chat-container .messages-area .empty-state .empty-icon {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.chat-container .messages-area .empty-state .empty-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.chat-container .messages-area .empty-state .empty-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  max-width: 24rem;\n  line-height: 1.5;\n}\n.chat-container .messages-area .message {\n  display: flex;\n  gap: 0.75rem;\n  max-width: 80%;\n}\n.chat-container .messages-area .message.message-user {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n.chat-container .messages-area .message.message-user .message-content {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n}\n.chat-container .messages-area .message.message-user .message-content .message-text {\n  color: white;\n}\n.chat-container .messages-area .message.message-user .message-content .message-timestamp {\n  color: rgba(255, 255, 255, 0.7);\n}\n.chat-container .messages-area .message.message-assistant {\n  align-self: flex-start;\n}\n.chat-container .messages-area .message.message-assistant .message-content {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n.chat-container .messages-area .message .message-avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #6b7280;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n}\n.chat-container .messages-area .message .message-content {\n  padding: 0.75rem 1rem;\n  border-radius: 1rem;\n  position: relative;\n  min-width: 0;\n}\n.chat-container .messages-area .message .message-content .message-text {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #374151;\n  word-wrap: break-word;\n}\n.chat-container .messages-area .message .message-content .message-text :global(h1),\n.chat-container .messages-area .message .message-content .message-text :global(h2),\n.chat-container .messages-area .message .message-content .message-text :global(h3) {\n  margin: 0 0 0.5rem 0;\n  font-weight: 600;\n}\n.chat-container .messages-area .message .message-content .message-text :global(ul),\n.chat-container .messages-area .message .message-content .message-text :global(ol) {\n  margin: 0.5rem 0;\n  padding-left: 1.5rem;\n}\n.chat-container .messages-area .message .message-content .message-text :global(li) {\n  margin: 0.25rem 0;\n}\n.chat-container .messages-area .message .message-content .message-text :global(code) {\n  background: rgba(0, 0, 0, 0.1);\n  padding: 0.125rem 0.25rem;\n  border-radius: 0.25rem;\n  font-family: "Courier New", monospace;\n  font-size: 0.8em;\n}\n.chat-container .messages-area .message .message-content .message-text :global(strong) {\n  font-weight: 600;\n}\n.chat-container .messages-area .message .message-content .message-text :global(em) {\n  font-style: italic;\n}\n.chat-container .messages-area .message .message-content .message-actions {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.chat-container .messages-area .message .message-content .message-actions .action-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.75rem;\n  height: 1.75rem;\n  border: none;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 0.375rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.chat-container .messages-area .message .message-content .message-actions .action-button:hover {\n  background: rgba(0, 0, 0, 0.2);\n  color: #374151;\n}\n.chat-container .messages-area .message .message-content .message-timestamp {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin-top: 0.25rem;\n}\n.chat-container .messages-area .message .message-content:hover .message-actions {\n  opacity: 1;\n}\n.chat-container .messages-area .message .processing-indicator {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #6b7280;\n}\n.chat-container .messages-area .message .processing-indicator .processing-dots {\n  display: flex;\n  gap: 0.25rem;\n}\n.chat-container .messages-area .message .processing-indicator .processing-dots span {\n  width: 0.375rem;\n  height: 0.375rem;\n  background: #9ca3af;\n  border-radius: 50%;\n  animation: processing 1.4s infinite ease-in-out both;\n}\n.chat-container .messages-area .message .processing-indicator .processing-dots span:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.chat-container .messages-area .message .processing-indicator .processing-dots span:nth-child(2) {\n  animation-delay: -0.16s;\n}\n.chat-container .messages-area .message .processing-indicator .processing-dots span:nth-child(3) {\n  animation-delay: 0s;\n}\n.chat-container .messages-area .message .processing-indicator .processing-text {\n  font-size: 0.875rem;\n  font-style: italic;\n}\n.chat-container .input-area {\n  border-top: 1px solid #e5e7eb;\n  padding: 1rem 1.5rem;\n  background: #f8fafc;\n}\n.chat-container .input-area .input-container {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.75rem;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.75rem;\n  padding: 0.75rem;\n  transition: all 0.2s ease;\n}\n.chat-container .input-area .input-container:focus-within {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.chat-container .input-area .input-container .message-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  resize: none;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #374151;\n  background: transparent;\n  min-height: 1.25rem;\n  max-height: 120px;\n}\n.chat-container .input-area .input-container .message-input::placeholder {\n  color: #9ca3af;\n}\n.chat-container .input-area .input-container .message-input:disabled {\n  color: #9ca3af;\n  cursor: not-allowed;\n}\n.chat-container .input-area .input-container .send-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.chat-container .input-area .input-container .send-button:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  transform: translateY(-1px);\n}\n.chat-container .input-area .input-container .send-button:active:not(:disabled) {\n  transform: translateY(0);\n}\n.chat-container .input-area .input-container .send-button:disabled {\n  background: #d1d5db;\n  color: #9ca3af;\n  cursor: not-allowed;\n  transform: none;\n}\n.chat-container .input-area .input-hint {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 0.5rem;\n  text-align: center;\n}\n@keyframes processing {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .chat-container {\n    height: 500px;\n  }\n  .chat-container .messages-area {\n    padding: 1rem;\n  }\n  .chat-container .messages-area .message {\n    max-width: 90%;\n  }\n  .chat-container .messages-area .message .message-content .message-actions {\n    opacity: 1;\n  }\n  .chat-container .input-area {\n    padding: 0.75rem 1rem;\n  }\n  .chat-container .input-area .input-container .message-input {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=nlq-chat.component.css.map */\n'] }]
  }], () => [{ type: NaturalLanguageService }, { type: DomSanitizer }], { messages: [{
    type: Input
  }], isProcessing: [{
    type: Input
  }], needsApiKey: [{
    type: Input
  }], hasContext: [{
    type: Input
  }], messageSent: [{
    type: Output
  }], messageInput: [{
    type: ViewChild,
    args: ["messageInput"]
  }], messagesContainer: [{
    type: ViewChild,
    args: ["messagesContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NLQChatComponent, { className: "NLQChatComponent", filePath: "src/app/ai-features/components/natural-language/nlq-chat.component.ts", lineNumber: 106 });
})();

// src/app/ai-features/components/natural-language/nlq-examples.component.ts
function NLQExamplesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function NLQExamplesComponent_div_7_Template_div_click_0_listener() {
      const example_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectExample(example_r2));
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 9);
    \u0275\u0275element(4, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11)(8, "h4", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const example_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "category-" + example_r2.category.toLowerCase());
    \u0275\u0275advance(4);
    \u0275\u0275attribute("d", ctx_r2.getIconPath(example_r2.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "badge-" + example_r2.category.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", example_r2.category, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(example_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(example_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(' "', example_r2.query, '" ');
  }
}
var NLQExamplesComponent = class _NLQExamplesComponent {
  exampleSelected = new EventEmitter();
  examples = [
    {
      id: "1",
      category: "Maintenance",
      title: "Overdue Maintenance",
      description: "Find assets that need immediate attention",
      query: "Show me all assets with overdue maintenance",
      icon: "wrench"
    },
    {
      id: "2",
      category: "Financial",
      title: "Asset Costs",
      description: "Analyze spending and budgets",
      query: "What are my highest value assets and their maintenance costs?",
      icon: "dollar-sign"
    },
    {
      id: "3",
      category: "Analytics",
      title: "Performance Trends",
      description: "Get insights on asset performance",
      query: "How are my assets performing this quarter compared to last?",
      icon: "bar-chart-3"
    },
    {
      id: "4",
      category: "Search",
      title: "Find Assets",
      description: "Locate specific assets or types",
      query: "Find all HVAC units in Building A that are over 5 years old",
      icon: "search"
    },
    {
      id: "5",
      category: "Operations",
      title: "Work Orders",
      description: "Check work order status and priorities",
      query: "What work orders are high priority and who is assigned to them?",
      icon: "settings-2"
    },
    {
      id: "6",
      category: "Maintenance",
      title: "Maintenance Schedule",
      description: "Plan upcoming maintenance",
      query: "What maintenance is scheduled for next week?",
      icon: "calendar"
    }
  ];
  selectExample(example) {
    this.exampleSelected.emit(example.query);
  }
  getIconPath(iconName) {
    const icons = {
      "wrench": "M22 7l-7.5-4.5L7 7l5.5 3.5L22 7zM7 7v10l5.5 3.5L18 17V7l-5.5 3.5L7 7z",
      "dollar-sign": "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
      "bar-chart-3": "M3 3v18h18M18 17V9M13 17V5M8 17v-3",
      "search": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      "settings-2": "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      "calendar": "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
    };
    return icons[iconName] || icons["search"];
  }
  static \u0275fac = function NLQExamplesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NLQExamplesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NLQExamplesComponent, selectors: [["app-nlq-examples"]], outputs: { exampleSelected: "exampleSelected" }, decls: 8, vars: 1, consts: [[1, "examples-container"], [1, "examples-header"], [1, "examples-title"], [1, "examples-description"], [1, "examples-grid"], ["class", "example-card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "example-card", 3, "click", "ngClass"], [1, "example-header"], [1, "example-icon"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "example-category", 3, "ngClass"], [1, "example-content"], [1, "example-title"], [1, "example-description"], [1, "example-query"]], template: function NLQExamplesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Example Queries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Click any example to get started");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275template(7, NLQExamplesComponent_div_7_Template, 14, 7, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.examples);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf], styles: ["\n\n.examples-container[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.examples-container[_ngcontent-%COMP%]   .examples-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-header[_ngcontent-%COMP%]   .examples-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-header[_ngcontent-%COMP%]   .examples-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: #f8fafc;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background: white;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .example-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  background: #e5e7eb;\n  color: #6b7280;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .example-category[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .example-category.badge-maintenance[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .example-category.badge-financial[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .example-category.badge-analytics[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .example-category.badge-search[_ngcontent-%COMP%] {\n  background: #fed7aa;\n  color: #c2410c;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .example-category.badge-operations[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-content[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-content[_ngcontent-%COMP%]   .example-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-content[_ngcontent-%COMP%]   .example-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.4;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-query[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #374151;\n  font-style: italic;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  border-left: 3px solid #3b82f6;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-maintenance[_ngcontent-%COMP%] {\n  border-left: 3px solid #3b82f6;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-maintenance[_ngcontent-%COMP%]   .example-icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-financial[_ngcontent-%COMP%] {\n  border-left: 3px solid #10b981;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-financial[_ngcontent-%COMP%]   .example-icon[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-analytics[_ngcontent-%COMP%] {\n  border-left: 3px solid #8b5cf6;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-analytics[_ngcontent-%COMP%]   .example-icon[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-search[_ngcontent-%COMP%] {\n  border-left: 3px solid #f59e0b;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-search[_ngcontent-%COMP%]   .example-icon[_ngcontent-%COMP%] {\n  background: #fed7aa;\n  color: #c2410c;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-operations[_ngcontent-%COMP%] {\n  border-left: 3px solid #ef4444;\n}\n.examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card.category-operations[_ngcontent-%COMP%]   .example-icon[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n}\n@media (max-width: 768px) {\n  .examples-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n  .examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .example-icon[_ngcontent-%COMP%] {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n  .examples-container[_ngcontent-%COMP%]   .examples-grid[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .example-content[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n}\n/*# sourceMappingURL=nlq-examples.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NLQExamplesComponent, [{
    type: Component,
    args: [{ selector: "app-nlq-examples", standalone: true, imports: [CommonModule], template: `
    <div class="examples-container">
      <div class="examples-header">
        <h3 class="examples-title">Example Queries</h3>
        <p class="examples-description">Click any example to get started</p>
      </div>

      <div class="examples-grid">
        <div 
          *ngFor="let example of examples" 
          class="example-card"
          [ngClass]="'category-' + example.category.toLowerCase()"
          (click)="selectExample(example)">
          <div class="example-header">
            <div class="example-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path [attr.d]="getIconPath(example.icon)"></path>
              </svg>
            </div>
            <div class="example-category" [ngClass]="'badge-' + example.category.toLowerCase()">
              {{ example.category }}
            </div>
          </div>
          <div class="example-content">
            <h4 class="example-title">{{ example.title }}</h4>
            <p class="example-description">{{ example.description }}</p>
          </div>
          <div class="example-query">
            "{{ example.query }}"
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/natural-language/nlq-examples.component.scss */\n.examples-container {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.examples-container .examples-header {\n  margin-bottom: 1.5rem;\n}\n.examples-container .examples-header .examples-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.examples-container .examples-header .examples-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.examples-container .examples-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n.examples-container .examples-grid .example-card {\n  padding: 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: #f8fafc;\n}\n.examples-container .examples-grid .example-card:hover {\n  border-color: #3b82f6;\n  background: white;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.examples-container .examples-grid .example-card .example-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.examples-container .examples-grid .example-card .example-header .example-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  background: #e5e7eb;\n  color: #6b7280;\n}\n.examples-container .examples-grid .example-card .example-header .example-category {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.examples-container .examples-grid .example-card .example-header .example-category.badge-maintenance {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.examples-container .examples-grid .example-card .example-header .example-category.badge-financial {\n  background: #dcfce7;\n  color: #166534;\n}\n.examples-container .examples-grid .example-card .example-header .example-category.badge-analytics {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.examples-container .examples-grid .example-card .example-header .example-category.badge-search {\n  background: #fed7aa;\n  color: #c2410c;\n}\n.examples-container .examples-grid .example-card .example-header .example-category.badge-operations {\n  background: #fecaca;\n  color: #dc2626;\n}\n.examples-container .examples-grid .example-card .example-content {\n  margin-bottom: 0.75rem;\n}\n.examples-container .examples-grid .example-card .example-content .example-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n}\n.examples-container .examples-grid .example-card .example-content .example-description {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.4;\n}\n.examples-container .examples-grid .example-card .example-query {\n  font-size: 0.75rem;\n  color: #374151;\n  font-style: italic;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  border-left: 3px solid #3b82f6;\n}\n.examples-container .examples-grid .example-card.category-maintenance {\n  border-left: 3px solid #3b82f6;\n}\n.examples-container .examples-grid .example-card.category-maintenance .example-icon {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.examples-container .examples-grid .example-card.category-financial {\n  border-left: 3px solid #10b981;\n}\n.examples-container .examples-grid .example-card.category-financial .example-icon {\n  background: #dcfce7;\n  color: #166534;\n}\n.examples-container .examples-grid .example-card.category-analytics {\n  border-left: 3px solid #8b5cf6;\n}\n.examples-container .examples-grid .example-card.category-analytics .example-icon {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.examples-container .examples-grid .example-card.category-search {\n  border-left: 3px solid #f59e0b;\n}\n.examples-container .examples-grid .example-card.category-search .example-icon {\n  background: #fed7aa;\n  color: #c2410c;\n}\n.examples-container .examples-grid .example-card.category-operations {\n  border-left: 3px solid #ef4444;\n}\n.examples-container .examples-grid .example-card.category-operations .example-icon {\n  background: #fecaca;\n  color: #dc2626;\n}\n@media (max-width: 768px) {\n  .examples-container {\n    padding: 1rem;\n  }\n  .examples-container .examples-grid .example-card {\n    padding: 0.75rem;\n  }\n  .examples-container .examples-grid .example-card .example-header {\n    margin-bottom: 0.5rem;\n  }\n  .examples-container .examples-grid .example-card .example-header .example-icon {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n  .examples-container .examples-grid .example-card .example-content {\n    margin-bottom: 0.5rem;\n  }\n}\n/*# sourceMappingURL=nlq-examples.component.css.map */\n"] }]
  }], null, { exampleSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NLQExamplesComponent, { className: "NLQExamplesComponent", filePath: "src/app/ai-features/components/natural-language/nlq-examples.component.ts", lineNumber: 45 });
})();

// src/app/ai-features/components/natural-language/nlq-capabilities.component.ts
function NLQCapabilitiesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 9)(5, "h4", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const capability_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "capability-" + capability_r1.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "icon-" + capability_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r1.getIconPath(capability_r1.icon));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(capability_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(capability_r1.description);
  }
}
var NLQCapabilitiesComponent = class _NLQCapabilitiesComponent {
  capabilities = [
    {
      id: "search",
      title: "Search & Filter",
      description: "Find assets, work orders, and data using natural language",
      icon: "search",
      color: "blue"
    },
    {
      id: "financial",
      title: "Financial Analysis",
      description: "Analyze costs, budgets, and financial performance",
      icon: "dollar-sign",
      color: "green"
    },
    {
      id: "maintenance",
      title: "Maintenance Planning",
      description: "Schedule, track, and optimize maintenance activities",
      icon: "wrench",
      color: "purple"
    },
    {
      id: "analytics",
      title: "Data Analytics",
      description: "Get insights from your asset data and trends",
      icon: "bar-chart-3",
      color: "orange"
    },
    {
      id: "reports",
      title: "Smart Reports",
      description: "Generate detailed reports and summaries",
      icon: "file-text",
      color: "red"
    },
    {
      id: "recommendations",
      title: "Recommendations",
      description: "Get AI-powered suggestions and best practices",
      icon: "lightbulb",
      color: "indigo"
    }
  ];
  getIconPath(iconName) {
    const icons = {
      "search": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      "dollar-sign": "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
      "wrench": "M22 7l-7.5-4.5L7 7l5.5 3.5L22 7zM7 7v10l5.5 3.5L18 17V7l-5.5 3.5L7 7z",
      "bar-chart-3": "M3 3v18h18M18 17V9M13 17V5M8 17v-3",
      "file-text": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
      "lightbulb": "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
    };
    return icons[iconName] || icons["search"];
  }
  static \u0275fac = function NLQCapabilitiesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NLQCapabilitiesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NLQCapabilitiesComponent, selectors: [["app-nlq-capabilities"]], decls: 8, vars: 1, consts: [[1, "capabilities-container"], [1, "capabilities-header"], [1, "capabilities-title"], [1, "capabilities-description"], [1, "capabilities-grid"], ["class", "capability-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "capability-card", 3, "ngClass"], [1, "capability-icon", 3, "ngClass"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "capability-content"], [1, "capability-title"], [1, "capability-description"]], template: function NLQCapabilitiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "AI Capabilities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "What I can help you with");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275template(7, NLQCapabilitiesComponent_div_7_Template, 9, 5, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.capabilities);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf], styles: ["\n\n.capabilities-container[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-header[_ngcontent-%COMP%]   .capabilities-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-header[_ngcontent-%COMP%]   .capabilities-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  transition: all 0.2s ease;\n  background: #f8fafc;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background: white;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);\n  transform: translateY(-1px);\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  flex-shrink: 0;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-icon.icon-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-icon.icon-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-icon.icon-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-icon.icon-orange[_ngcontent-%COMP%] {\n  background: #fed7aa;\n  color: #c2410c;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-icon.icon-red[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-icon.icon-indigo[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-content[_ngcontent-%COMP%]   .capability-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-content[_ngcontent-%COMP%]   .capability-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.4;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card.capability-search[_ngcontent-%COMP%] {\n  border-left: 3px solid #3b82f6;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card.capability-financial[_ngcontent-%COMP%] {\n  border-left: 3px solid #10b981;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card.capability-maintenance[_ngcontent-%COMP%] {\n  border-left: 3px solid #8b5cf6;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card.capability-analytics[_ngcontent-%COMP%] {\n  border-left: 3px solid #f59e0b;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card.capability-reports[_ngcontent-%COMP%] {\n  border-left: 3px solid #ef4444;\n}\n.capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card.capability-recommendations[_ngcontent-%COMP%] {\n  border-left: 3px solid #6366f1;\n}\n@media (max-width: 768px) {\n  .capabilities-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .capabilities-container[_ngcontent-%COMP%]   .capabilities-grid[_ngcontent-%COMP%]   .capability-card[_ngcontent-%COMP%]   .capability-icon[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n}\n/*# sourceMappingURL=nlq-capabilities.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NLQCapabilitiesComponent, [{
    type: Component,
    args: [{ selector: "app-nlq-capabilities", standalone: true, imports: [CommonModule], template: `
    <div class="capabilities-container">
      <div class="capabilities-header">
        <h3 class="capabilities-title">AI Capabilities</h3>
        <p class="capabilities-description">What I can help you with</p>
      </div>

      <div class="capabilities-grid">
        <div 
          *ngFor="let capability of capabilities" 
          class="capability-card"
          [ngClass]="'capability-' + capability.id">
          <div class="capability-icon" [ngClass]="'icon-' + capability.color">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path [attr.d]="getIconPath(capability.icon)"></path>
            </svg>
          </div>
          <div class="capability-content">
            <h4 class="capability-title">{{ capability.title }}</h4>
            <p class="capability-description">{{ capability.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/natural-language/nlq-capabilities.component.scss */\n.capabilities-container {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.capabilities-container .capabilities-header {\n  margin-bottom: 1.5rem;\n}\n.capabilities-container .capabilities-header .capabilities-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.capabilities-container .capabilities-header .capabilities-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.capabilities-container .capabilities-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n.capabilities-container .capabilities-grid .capability-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  transition: all 0.2s ease;\n  background: #f8fafc;\n}\n.capabilities-container .capabilities-grid .capability-card:hover {\n  border-color: #3b82f6;\n  background: white;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);\n  transform: translateY(-1px);\n}\n.capabilities-container .capabilities-grid .capability-card .capability-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  flex-shrink: 0;\n}\n.capabilities-container .capabilities-grid .capability-card .capability-icon.icon-blue {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.capabilities-container .capabilities-grid .capability-card .capability-icon.icon-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.capabilities-container .capabilities-grid .capability-card .capability-icon.icon-purple {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.capabilities-container .capabilities-grid .capability-card .capability-icon.icon-orange {\n  background: #fed7aa;\n  color: #c2410c;\n}\n.capabilities-container .capabilities-grid .capability-card .capability-icon.icon-red {\n  background: #fecaca;\n  color: #dc2626;\n}\n.capabilities-container .capabilities-grid .capability-card .capability-icon.icon-indigo {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.capabilities-container .capabilities-grid .capability-card .capability-content {\n  flex: 1;\n  min-width: 0;\n}\n.capabilities-container .capabilities-grid .capability-card .capability-content .capability-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n}\n.capabilities-container .capabilities-grid .capability-card .capability-content .capability-description {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.4;\n}\n.capabilities-container .capabilities-grid .capability-card.capability-search {\n  border-left: 3px solid #3b82f6;\n}\n.capabilities-container .capabilities-grid .capability-card.capability-financial {\n  border-left: 3px solid #10b981;\n}\n.capabilities-container .capabilities-grid .capability-card.capability-maintenance {\n  border-left: 3px solid #8b5cf6;\n}\n.capabilities-container .capabilities-grid .capability-card.capability-analytics {\n  border-left: 3px solid #f59e0b;\n}\n.capabilities-container .capabilities-grid .capability-card.capability-reports {\n  border-left: 3px solid #ef4444;\n}\n.capabilities-container .capabilities-grid .capability-card.capability-recommendations {\n  border-left: 3px solid #6366f1;\n}\n@media (max-width: 768px) {\n  .capabilities-container {\n    padding: 1rem;\n  }\n  .capabilities-container .capabilities-grid .capability-card {\n    padding: 0.75rem;\n  }\n  .capabilities-container .capabilities-grid .capability-card .capability-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n}\n/*# sourceMappingURL=nlq-capabilities.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NLQCapabilitiesComponent, { className: "NLQCapabilitiesComponent", filePath: "src/app/ai-features/components/natural-language/nlq-capabilities.component.ts", lineNumber: 36 });
})();

// src/app/ai-features/components/natural-language/natural-language.component.ts
var _c04 = ["chatComponent"];
function NaturalLanguageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 12);
    \u0275\u0275element(4, "path", 13)(5, "line", 14)(6, "line", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 16)(8, "span", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 18)(11, "button", 19);
    \u0275\u0275listener("click", function NaturalLanguageComponent_div_9_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 20);
    \u0275\u0275element(13, "path", 21)(14, "path", 22)(15, "path", 23)(16, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 25);
    \u0275\u0275listener("click", function NaturalLanguageComponent_div_9_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissError());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 20);
    \u0275\u0275element(19, "line", 26)(20, "line", 27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
var NaturalLanguageComponent = class _NaturalLanguageComponent {
  nlService;
  authService;
  chatComponent;
  state = {
    query: "",
    messages: [],
    isProcessing: false,
    assetContext: null,
    needsApiKey: false,
    hasContext: false
  };
  errorMessage = null;
  companyName = "Your Company";
  destroy$ = new Subject();
  constructor(nlService, authService) {
    this.nlService = nlService;
    this.authService = authService;
  }
  ngOnInit() {
    this.loadCompanyName();
    this.loadContext();
    this.checkApiKey();
  }
  loadCompanyName() {
    const currentUser = this.authService.getCurrentUser();
    this.companyName = currentUser?.company?.name || "Your Company";
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadContext() {
    this.nlService.getContext().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.state.assetContext = response.data;
          this.state.hasContext = true;
        } else {
          this.errorMessage = response.error || "Failed to load context";
          this.state.hasContext = false;
        }
      },
      error: (error) => {
        console.error("Error loading context:", error);
        this.errorMessage = "Failed to load context. Please try again.";
        this.state.hasContext = false;
      }
    });
  }
  checkApiKey() {
    this.nlService.checkApiKey().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.state.needsApiKey = !response.hasApiKey;
      },
      error: (error) => {
        console.error("Error checking API key:", error);
        this.state.needsApiKey = true;
      }
    });
  }
  onMessageSent(message) {
    if (!message.trim() || this.state.isProcessing || this.state.needsApiKey || !this.state.hasContext) {
      return;
    }
    const userMessage = {
      type: "user",
      content: message,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.state.messages.push(userMessage);
    this.state.isProcessing = true;
    this.errorMessage = null;
    const chatRequest = {
      messages: this.state.messages.map((msg) => ({
        role: msg.type,
        content: msg.content
      })),
      assetContext: this.state.assetContext,
      companyContext: {
        name: this.companyName
      }
    };
    this.nlService.chat(chatRequest).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.reply) {
          const assistantMessage = {
            type: "assistant",
            content: response.reply,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          };
          this.state.messages.push(assistantMessage);
        } else {
          this.errorMessage = response.error || "Failed to get response from AI";
        }
        this.state.isProcessing = false;
      },
      error: (error) => {
        console.error("Error sending message:", error);
        this.errorMessage = "Failed to send message. Please try again.";
        this.state.isProcessing = false;
      }
    });
  }
  onExampleSelected(query) {
    this.onMessageSent(query);
  }
  retry() {
    this.errorMessage = null;
    this.loadContext();
    this.checkApiKey();
  }
  dismissError() {
    this.errorMessage = null;
  }
  static \u0275fac = function NaturalLanguageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NaturalLanguageComponent)(\u0275\u0275directiveInject(NaturalLanguageService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NaturalLanguageComponent, selectors: [["app-natural-language"]], viewQuery: function NaturalLanguageComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatComponent = _t.first);
    }
  }, decls: 10, vars: 7, consts: [[1, "natural-language-page"], [3, "needsApiKey"], [3, "context"], [1, "main-content"], [1, "chat-section"], [3, "messageSent", "messages", "isProcessing", "needsApiKey", "hasContext"], [1, "sidebar"], [3, "exampleSelected"], ["class", "error-banner", 4, "ngIf"], [1, "error-banner"], [1, "error-banner-content"], [1, "error-banner-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "error-banner-text"], [1, "error-banner-message"], [1, "error-banner-actions"], ["title", "Retry", 1, "error-banner-retry", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], ["d", "M21 3v5h-5"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], ["d", "M3 21v-5h5"], ["title", "Dismiss", 1, "error-banner-dismiss", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"]], template: function NaturalLanguageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-nlq-header", 1)(2, "app-nlq-context-strip", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "app-nlq-chat", 5);
      \u0275\u0275listener("messageSent", function NaturalLanguageComponent_Template_app_nlq_chat_messageSent_5_listener($event) {
        return ctx.onMessageSent($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "app-nlq-examples", 7);
      \u0275\u0275listener("exampleSelected", function NaturalLanguageComponent_Template_app_nlq_examples_exampleSelected_7_listener($event) {
        return ctx.onExampleSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-nlq-capabilities");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, NaturalLanguageComponent_div_9_Template, 21, 1, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("needsApiKey", ctx.state.needsApiKey);
      \u0275\u0275advance();
      \u0275\u0275property("context", ctx.state.assetContext);
      \u0275\u0275advance(3);
      \u0275\u0275property("messages", ctx.state.messages)("isProcessing", ctx.state.isProcessing)("needsApiKey", ctx.state.needsApiKey)("hasContext", ctx.state.hasContext);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    NLQHeaderComponent,
    NLQContextStripComponent,
    NLQChatComponent,
    NLQExamplesComponent,
    NLQCapabilitiesComponent
  ], styles: ["\n\n.natural-language-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.natural-language-page[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 2rem;\n  align-items: start;\n}\n.natural-language-page[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .chat-section[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n.natural-language-page[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.75rem;\n  padding: 0.75rem 1rem;\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #ef4444;\n  display: flex;\n  align-items: center;\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-text[_ngcontent-%COMP%]   .error-banner-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #991b1b;\n  line-height: 1.5;\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-retry[_ngcontent-%COMP%], \n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-dismiss[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  background: transparent;\n  border: none;\n  border-radius: 0.375rem;\n  color: #991b1b;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-retry[_ngcontent-%COMP%]:hover, \n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-dismiss[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-retry[_ngcontent-%COMP%]:active, \n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-dismiss[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-retry[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-dismiss[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 1024px) {\n  .natural-language-page[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .natural-language-page[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n@media (max-width: 768px) {\n  .natural-language-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .natural-language-page[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .natural-language-page[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .chat-section[_ngcontent-%COMP%] {\n    min-height: 500px;\n  }\n  .natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.875rem;\n  }\n  .natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-text[_ngcontent-%COMP%]   .error-banner-message[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-retry[_ngcontent-%COMP%], \n   .natural-language-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-dismiss[_ngcontent-%COMP%] {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n}\n/*# sourceMappingURL=natural-language.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NaturalLanguageComponent, [{
    type: Component,
    args: [{ selector: "app-natural-language", standalone: true, imports: [
      CommonModule,
      NLQHeaderComponent,
      NLQContextStripComponent,
      NLQChatComponent,
      NLQExamplesComponent,
      NLQCapabilitiesComponent
    ], template: `
    <div class="natural-language-page">
      <!-- Header -->
      <app-nlq-header [needsApiKey]="state.needsApiKey"></app-nlq-header>

      <!-- Context Strip -->
      <app-nlq-context-strip [context]="state.assetContext"></app-nlq-context-strip>

      <!-- Main Content -->
      <div class="main-content">
        <div class="chat-section">
          <app-nlq-chat
            [messages]="state.messages"
            [isProcessing]="state.isProcessing"
            [needsApiKey]="state.needsApiKey"
            [hasContext]="state.hasContext"
            (messageSent)="onMessageSent($event)">
          </app-nlq-chat>
        </div>

        <div class="sidebar">
          <!-- Examples -->
          <app-nlq-examples (exampleSelected)="onExampleSelected($event)"></app-nlq-examples>

          <!-- Capabilities -->
          <app-nlq-capabilities></app-nlq-capabilities>
        </div>
      </div>

      <!-- Error Banner -->
      <div *ngIf="errorMessage" class="error-banner">
        <div class="error-banner-content">
          <div class="error-banner-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div class="error-banner-text">
            <span class="error-banner-message">{{ errorMessage }}</span>
          </div>
          <div class="error-banner-actions">
            <button class="error-banner-retry" (click)="retry()" title="Retry">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M3 21v-5h5"></path>
              </svg>
            </button>
            <button class="error-banner-dismiss" (click)="dismissError()" title="Dismiss">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/natural-language/natural-language.component.scss */\n.natural-language-page {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.natural-language-page .main-content {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 2rem;\n  align-items: start;\n}\n.natural-language-page .main-content .chat-section {\n  min-height: 600px;\n}\n.natural-language-page .main-content .sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.natural-language-page .error-banner {\n  margin-bottom: 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.75rem;\n  padding: 0.75rem 1rem;\n}\n.natural-language-page .error-banner .error-banner-content {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.natural-language-page .error-banner .error-banner-content .error-banner-icon {\n  flex-shrink: 0;\n  color: #ef4444;\n  display: flex;\n  align-items: center;\n}\n.natural-language-page .error-banner .error-banner-content .error-banner-text {\n  flex: 1;\n  min-width: 0;\n}\n.natural-language-page .error-banner .error-banner-content .error-banner-text .error-banner-message {\n  font-size: 0.875rem;\n  color: #991b1b;\n  line-height: 1.5;\n}\n.natural-language-page .error-banner .error-banner-content .error-banner-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-retry,\n.natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-dismiss {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  background: transparent;\n  border: none;\n  border-radius: 0.375rem;\n  color: #991b1b;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-retry:hover,\n.natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-dismiss:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-retry:active,\n.natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-dismiss:active {\n  transform: scale(0.95);\n}\n.natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-retry svg,\n.natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-dismiss svg {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 1024px) {\n  .natural-language-page .main-content {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .natural-language-page .main-content .sidebar {\n    order: -1;\n  }\n}\n@media (max-width: 768px) {\n  .natural-language-page {\n    padding: 1rem;\n  }\n  .natural-language-page .main-content {\n    gap: 1rem;\n  }\n  .natural-language-page .main-content .chat-section {\n    min-height: 500px;\n  }\n  .natural-language-page .error-banner {\n    padding: 0.625rem 0.875rem;\n  }\n  .natural-language-page .error-banner .error-banner-content {\n    gap: 0.5rem;\n  }\n  .natural-language-page .error-banner .error-banner-content .error-banner-text .error-banner-message {\n    font-size: 0.8rem;\n  }\n  .natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-retry,\n  .natural-language-page .error-banner .error-banner-content .error-banner-actions .error-banner-dismiss {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n}\n/*# sourceMappingURL=natural-language.component.css.map */\n"] }]
  }], () => [{ type: NaturalLanguageService }, { type: AuthService }], { chatComponent: [{
    type: ViewChild,
    args: ["chatComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NaturalLanguageComponent, { className: "NaturalLanguageComponent", filePath: "src/app/ai-features/components/natural-language/natural-language.component.ts", lineNumber: 93 });
})();

// src/app/ai-features/components/ai-recommendations/recs-header.component.ts
function RecsHeaderComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "circle", 29)(3, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Last updated ", \u0275\u0275pipeBind2(6, 1, ctx_r0.lastUpdated, "short"), "");
  }
}
function RecsHeaderComponent__svg_svg_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function RecsHeaderComponent__svg_svg_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
var RecsHeaderComponent = class _RecsHeaderComponent {
  lastUpdated = null;
  isLoading = false;
  isGenerating = false;
  hasData = false;
  refresh = new EventEmitter();
  generate = new EventEmitter();
  export = new EventEmitter();
  onRefresh() {
    this.refresh.emit();
  }
  onGenerate() {
    this.generate.emit();
  }
  onExport() {
    this.export.emit();
  }
  static \u0275fac = function RecsHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecsHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecsHeaderComponent, selectors: [["app-recs-header"]], inputs: { lastUpdated: "lastUpdated", isLoading: "isLoading", isGenerating: "isGenerating", hasData: "hasData" }, outputs: { refresh: "refresh", generate: "generate", export: "export" }, decls: 35, vars: 7, consts: [[1, "recs-header"], [1, "header-content"], [1, "header-main"], [1, "header-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "header-text"], [1, "header-title"], [1, "header-description"], ["class", "last-updated", 4, "ngIf"], [1, "action-bar"], [1, "action-buttons"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], ["d", "M21 3v5h-5"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], ["d", "M3 21v-5h5"], [1, "btn-text"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn-icon", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "btn-icon animate-spin", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "btn", "btn-outline", 3, "click", "disabled"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7,10 12,15 17,10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "last-updated"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "update-icon"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon", "animate-spin"], ["d", "M21 12a9 9 0 11-6.219-8.56"]], template: function RecsHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 7)(8, "h1", 8);
      \u0275\u0275text(9, "AI Recommendations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11, " Intelligent suggestions to optimize your asset management operations, reduce costs, and improve efficiency. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, RecsHeaderComponent_div_12_Template, 7, 4, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "button", 13);
      \u0275\u0275listener("click", function RecsHeaderComponent_Template_button_click_15_listener() {
        return ctx.onRefresh();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 14);
      \u0275\u0275element(17, "path", 15)(18, "path", 16)(19, "path", 17)(20, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "span", 19);
      \u0275\u0275text(22, "Refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 20);
      \u0275\u0275listener("click", function RecsHeaderComponent_Template_button_click_23_listener() {
        return ctx.onGenerate();
      });
      \u0275\u0275template(24, RecsHeaderComponent__svg_svg_24_Template, 2, 0, "svg", 21)(25, RecsHeaderComponent__svg_svg_25_Template, 2, 0, "svg", 22);
      \u0275\u0275elementStart(26, "span", 19);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 23);
      \u0275\u0275listener("click", function RecsHeaderComponent_Template_button_click_28_listener() {
        return ctx.onExport();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 14);
      \u0275\u0275element(30, "path", 24)(31, "polyline", 25)(32, "line", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "span", 19);
      \u0275\u0275text(34, "Export Report");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.lastUpdated);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isLoading || ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isGenerating);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isGenerating ? "Generating..." : "Generate New");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading || !ctx.hasData);
    }
  }, dependencies: [CommonModule, NgIf, DatePipe], styles: ["\n\n.recs-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n.recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  flex: 1;\n}\n.recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4rem;\n  height: 4rem;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  border-radius: 1rem;\n  color: white;\n  flex-shrink: 0;\n  box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06);\n}\n.recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.2;\n}\n.recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 42rem;\n}\n.recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%]   .update-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #8b5cf6;\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  text-decoration: none;\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n  border-color: #8b5cf6;\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #6d28d9 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.3), 0 2px 4px -1px rgba(139, 92, 246, 0.2);\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #8b5cf6;\n  border-color: #8b5cf6;\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  transform: translateY(-1px);\n}\n.recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 1rem;\n  }\n  .recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n  }\n  .recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .recs-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  .recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n    gap: 0.75rem;\n  }\n  .recs-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=recs-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecsHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-recs-header", standalone: true, imports: [CommonModule], template: `
    <div class="recs-header">
      <!-- Main Header -->
      <div class="header-content">
        <div class="header-main">
          <div class="header-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <div class="header-text">
            <h1 class="header-title">AI Recommendations</h1>
            <p class="header-description">
              Intelligent suggestions to optimize your asset management operations, 
              reduce costs, and improve efficiency.
            </p>
          </div>
        </div>
        
        <!-- Last Updated -->
        <div class="last-updated" *ngIf="lastUpdated">
          <svg class="update-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <span>Last updated {{ lastUpdated | date:'short' }}</span>
        </div>
      </div>

      <!-- Action Bar -->
      <div class="action-bar">
        <div class="action-buttons">
          <button
            class="btn btn-secondary"
            (click)="onRefresh()"
            [disabled]="isLoading">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            <span class="btn-text">Refresh</span>
          </button>

          <button
            class="btn btn-primary"
            (click)="onGenerate()"
            [disabled]="isLoading || isGenerating">
            <svg *ngIf="!isGenerating" class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            <svg *ngIf="isGenerating" class="btn-icon animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 11-6.219-8.56"></path>
            </svg>
            <span class="btn-text">{{ isGenerating ? 'Generating...' : 'Generate New' }}</span>
          </button>

          <button
            class="btn btn-outline"
            (click)="onExport()"
            [disabled]="isLoading || !hasData">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span class="btn-text">Export Report</span>
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-recommendations/recs-header.component.scss */\n.recs-header {\n  margin-bottom: 2rem;\n}\n.recs-header .header-content {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n.recs-header .header-content .header-main {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  flex: 1;\n}\n.recs-header .header-content .header-main .header-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4rem;\n  height: 4rem;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  border-radius: 1rem;\n  color: white;\n  flex-shrink: 0;\n  box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06);\n}\n.recs-header .header-content .header-main .header-icon svg {\n  width: 2rem;\n  height: 2rem;\n}\n.recs-header .header-content .header-main .header-text {\n  flex: 1;\n}\n.recs-header .header-content .header-main .header-text .header-title {\n  font-size: 2.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.2;\n}\n.recs-header .header-content .header-main .header-text .header-description {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 42rem;\n}\n.recs-header .header-content .last-updated {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.recs-header .header-content .last-updated .update-icon {\n  width: 1rem;\n  height: 1rem;\n  color: #8b5cf6;\n}\n.recs-header .action-bar .action-buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.recs-header .action-bar .action-buttons .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  text-decoration: none;\n}\n.recs-header .action-bar .action-buttons .btn .btn-icon {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.recs-header .action-bar .action-buttons .btn .btn-text {\n  white-space: nowrap;\n}\n.recs-header .action-bar .action-buttons .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.recs-header .action-bar .action-buttons .btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n  border-color: #8b5cf6;\n}\n.recs-header .action-bar .action-buttons .btn.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #6d28d9 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.3), 0 2px 4px -1px rgba(139, 92, 246, 0.2);\n}\n.recs-header .action-bar .action-buttons .btn.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.recs-header .action-bar .action-buttons .btn.btn-secondary {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.recs-header .action-bar .action-buttons .btn.btn-secondary:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.recs-header .action-bar .action-buttons .btn.btn-secondary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.recs-header .action-bar .action-buttons .btn.btn-outline {\n  background: transparent;\n  color: #8b5cf6;\n  border-color: #8b5cf6;\n}\n.recs-header .action-bar .action-buttons .btn.btn-outline:hover:not(:disabled) {\n  background: #f3f4f6;\n  transform: translateY(-1px);\n}\n.recs-header .action-bar .action-buttons .btn.btn-outline:active:not(:disabled) {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .recs-header .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .recs-header .header-content .header-main {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 1rem;\n  }\n  .recs-header .header-content .header-main .header-icon {\n    width: 3rem;\n    height: 3rem;\n  }\n  .recs-header .header-content .header-main .header-icon svg {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .recs-header .header-content .header-main .header-text .header-title {\n    font-size: 1.875rem;\n  }\n  .recs-header .header-content .header-main .header-text .header-description {\n    font-size: 1rem;\n  }\n  .recs-header .header-content .last-updated {\n    align-self: center;\n  }\n  .recs-header .action-bar .action-buttons {\n    justify-content: center;\n    gap: 0.75rem;\n  }\n  .recs-header .action-bar .action-buttons .btn {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=recs-header.component.css.map */\n"] }]
  }], null, { lastUpdated: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], isGenerating: [{
    type: Input
  }], hasData: [{
    type: Input
  }], refresh: [{
    type: Output
  }], generate: [{
    type: Output
  }], export: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecsHeaderComponent, { className: "RecsHeaderComponent", filePath: "src/app/ai-features/components/ai-recommendations/recs-header.component.ts", lineNumber: 84 });
})();

// src/app/ai-features/components/ai-recommendations/recs-summary.component.ts
var _c05 = () => [1, 2, 3, 4, 5];
function RecsSummaryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 6);
    \u0275\u0275element(4, "path", 7)(5, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 9)(7, "span", 10);
    \u0275\u0275text(8, "Total Recommendations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 4)(12, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 6);
    \u0275\u0275element(14, "path", 13)(15, "line", 14)(16, "line", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 9)(18, "span", 10);
    \u0275\u0275text(19, "High Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 11);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 4)(23, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 6);
    \u0275\u0275element(25, "path", 17)(26, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 9)(28, "span", 10);
    \u0275\u0275text(29, "Potential Savings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 11);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 4)(34, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 6);
    \u0275\u0275element(36, "path", 17)(37, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div", 9)(39, "span", 10);
    \u0275\u0275text(40, "Investment Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 11);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 4)(45, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 6);
    \u0275\u0275element(47, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "div", 9)(49, "span", 10);
    \u0275\u0275text(50, "ROI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 11);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.summary.totalRecommendations);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.summary.highPriorityCount);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(32, 5, ctx_r0.summary.totalSavings, "AED", "symbol", "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(43, 10, ctx_r0.summary.totalCost, "AED", "symbol", "1.2-2"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(53, 15, ctx_r0.summary.roi, "1.0-1"), "%");
  }
}
function RecsSummaryComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "div", 27);
    \u0275\u0275element(3, "div", 28)(4, "div", 29);
    \u0275\u0275elementEnd()();
  }
}
function RecsSummaryComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, RecsSummaryComponent_ng_template_2_div_1_Template, 5, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c05));
  }
}
var RecsSummaryComponent = class _RecsSummaryComponent {
  summary = null;
  static \u0275fac = function RecsSummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecsSummaryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecsSummaryComponent, selectors: [["app-recs-summary"]], inputs: { summary: "summary" }, decls: 4, vars: 2, consts: [["loadingTemplate", ""], [1, "recs-summary"], ["class", "summary-grid", 4, "ngIf", "ngIfElse"], [1, "summary-grid"], [1, "summary-card"], [1, "card-icon", "bg-gradient-blue"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 12l2 2 4-4"], ["d", "M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"], [1, "card-content"], [1, "card-label"], [1, "card-value"], [1, "card-icon", "bg-gradient-red"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "card-icon", "bg-gradient-green"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"], ["d", "M12 8V12L15 15"], [1, "card-icon", "bg-gradient-orange"], ["d", "M12 6V12L16 14"], [1, "card-icon", "bg-gradient-purple"], ["d", "M3 3v18h18M18 17V9M13 17V5M8 17v-3"], [1, "summary-loading"], ["class", "loading-skeleton", 4, "ngFor", "ngForOf"], [1, "loading-skeleton"], [1, "skeleton-icon"], [1, "skeleton-content"], [1, "skeleton-line", "w-24"], [1, "skeleton-line", "w-16"]], template: function RecsSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, RecsSummaryComponent_div_1_Template, 54, 18, "div", 2)(2, RecsSummaryComponent_ng_template_2_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const loadingTemplate_r2 = \u0275\u0275reference(3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.summary)("ngIfElse", loadingTemplate_r2);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, CurrencyPipe], styles: ["\n\n.recs-summary[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n@media (min-width: 900px) {\n  .recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n  transform: translateY(-1px);\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.75rem;\n  color: white;\n  flex-shrink: 0;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon.bg-gradient-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon.bg-gradient-red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon.bg-gradient-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon.bg-gradient-orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon.bg-gradient-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  line-height: 1.2;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 0.75rem;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 1rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line.w-24[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n  .recs-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .recs-summary[_ngcontent-%COMP%]   .summary-loading[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n}\n/*# sourceMappingURL=recs-summary.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecsSummaryComponent, [{
    type: Component,
    args: [{ selector: "app-recs-summary", standalone: true, imports: [CommonModule], template: `
    <div class="recs-summary">
      <div class="summary-grid" *ngIf="summary; else loadingTemplate">
        <!-- Total Recommendations -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">Total Recommendations</span>
            <span class="card-value">{{ summary.totalRecommendations }}</span>
          </div>
        </div>

        <!-- High Priority -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-red">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">High Priority</span>
            <span class="card-value">{{ summary.highPriorityCount }}</span>
          </div>
        </div>

        <!-- Potential Savings -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
              <path d="M12 8V12L15 15"></path>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">Potential Savings</span>
            <span class="card-value">{{ summary.totalSavings | currency:'AED':'symbol':'1.2-2' }}</span>
          </div>
        </div>

        <!-- Investment Required -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-orange">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
              <path d="M12 6V12L16 14"></path>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">Investment Required</span>
            <span class="card-value">{{ summary.totalCost | currency:'AED':'symbol':'1.2-2' }}</span>
          </div>
        </div>

        <!-- ROI -->
        <div class="summary-card">
          <div class="card-icon bg-gradient-purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"></path>
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">ROI</span>
            <span class="card-value">{{ summary.roi | number:'1.0-1' }}%</span>
          </div>
        </div>
      </div>

      <ng-template #loadingTemplate>
        <div class="summary-loading">
          <div class="loading-skeleton" *ngFor="let i of [1,2,3,4,5]">
            <div class="skeleton-icon"></div>
            <div class="skeleton-content">
              <div class="skeleton-line w-24"></div>
              <div class="skeleton-line w-16"></div>
            </div>
          </div>
        </div>
      </ng-template>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-recommendations/recs-summary.component.scss */\n.recs-summary {\n  margin-bottom: 2rem;\n}\n.recs-summary .summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n@media (min-width: 900px) {\n  .recs-summary .summary-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.recs-summary .summary-grid .summary-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n.recs-summary .summary-grid .summary-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n  transform: translateY(-1px);\n}\n.recs-summary .summary-grid .summary-card .card-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.75rem;\n  color: white;\n  flex-shrink: 0;\n}\n.recs-summary .summary-grid .summary-card .card-icon.bg-gradient-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n}\n.recs-summary .summary-grid .summary-card .card-icon.bg-gradient-red {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n}\n.recs-summary .summary-grid .summary-card .card-icon.bg-gradient-green {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n}\n.recs-summary .summary-grid .summary-card .card-icon.bg-gradient-orange {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n.recs-summary .summary-grid .summary-card .card-icon.bg-gradient-purple {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n}\n.recs-summary .summary-grid .summary-card .card-icon svg {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.recs-summary .summary-grid .summary-card .card-content {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.recs-summary .summary-grid .summary-card .card-content .card-label {\n  display: block;\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.recs-summary .summary-grid .summary-card .card-content .card-value {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  line-height: 1.2;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.recs-summary .summary-loading {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n}\n.recs-summary .summary-loading .loading-skeleton {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.recs-summary .summary-loading .loading-skeleton .skeleton-icon {\n  width: 3rem;\n  height: 3rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 0.75rem;\n}\n.recs-summary .summary-loading .loading-skeleton .skeleton-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.recs-summary .summary-loading .loading-skeleton .skeleton-content .skeleton-line {\n  height: 1rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.recs-summary .summary-loading .loading-skeleton .skeleton-content .skeleton-line.w-24 {\n  width: 6rem;\n}\n.recs-summary .summary-loading .loading-skeleton .skeleton-content .skeleton-line.w-16 {\n  width: 4rem;\n}\n@keyframes loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .recs-summary .summary-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .recs-summary .summary-grid .summary-card {\n    padding: 1rem;\n  }\n  .recs-summary .summary-grid .summary-card .card-icon {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .recs-summary .summary-grid .summary-card .card-icon svg {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n  .recs-summary .summary-grid .summary-card .card-content .card-value {\n    font-size: 1.25rem;\n  }\n  .recs-summary .summary-loading {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .recs-summary .summary-loading .loading-skeleton {\n    padding: 1rem;\n  }\n  .recs-summary .summary-loading .loading-skeleton .skeleton-icon {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n}\n/*# sourceMappingURL=recs-summary.component.css.map */\n"] }]
  }], null, { summary: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecsSummaryComponent, { className: "RecsSummaryComponent", filePath: "src/app/ai-features/components/ai-recommendations/recs-summary.component.ts", lineNumber: 98 });
})();

// src/app/ai-features/components/ai-recommendations/recs-filters.component.ts
var RecsFiltersComponent = class _RecsFiltersComponent {
  filters = {};
  filtersChange = new EventEmitter();
  ngOnInit() {
    if (this.filters.minConfidence === void 0) {
      this.filters.minConfidence = 0;
    }
  }
  onFilterChange() {
    this.filtersChange.emit(this.filters);
  }
  clearFilters() {
    this.filters = {
      minConfidence: 0
    };
    this.filtersChange.emit(this.filters);
  }
  get hasActiveFilters() {
    return !!(this.filters.type || this.filters.priority || this.filters.impact || this.filters.search || this.filters.minConfidence && this.filters.minConfidence > 0);
  }
  static \u0275fac = function RecsFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecsFiltersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecsFiltersComponent, selectors: [["app-recs-filters"]], inputs: { filters: "filters" }, outputs: { filtersChange: "filtersChange" }, decls: 56, vars: 7, consts: [[1, "recs-filters"], [1, "filters-content"], [1, "filter-group"], [1, "filter-label"], [1, "search-input"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search recommendations...", 1, "search-field", 3, "ngModelChange", "ngModel"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "cost_optimization"], ["value", "maintenance"], ["value", "efficiency"], ["value", "compliance"], ["value", "high"], ["value", "medium"], ["value", "low"], ["type", "range", "min", "0", "max", "100", "step", "5", 1, "confidence-slider", 3, "ngModelChange", "ngModel"], [1, "clear-button", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M10 11v6M14 11v6"]], template: function RecsFiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      \u0275\u0275text(4, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function RecsFiltersComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.search, $event) || (ctx.filters.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RecsFiltersComponent_Template_input_ngModelChange_8_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 2)(10, "label", 3);
      \u0275\u0275text(11, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RecsFiltersComponent_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.type, $event) || (ctx.filters.type = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RecsFiltersComponent_Template_select_ngModelChange_12_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(13, "option", 9);
      \u0275\u0275text(14, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 10);
      \u0275\u0275text(16, "Cost Optimization");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 11);
      \u0275\u0275text(18, "Maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 12);
      \u0275\u0275text(20, "Efficiency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 13);
      \u0275\u0275text(22, "Compliance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 2)(24, "label", 3);
      \u0275\u0275text(25, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RecsFiltersComponent_Template_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.priority, $event) || (ctx.filters.priority = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RecsFiltersComponent_Template_select_ngModelChange_26_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(27, "option", 9);
      \u0275\u0275text(28, "All Priorities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 14);
      \u0275\u0275text(30, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 15);
      \u0275\u0275text(32, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 16);
      \u0275\u0275text(34, "Low");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 2)(36, "label", 3);
      \u0275\u0275text(37, "Impact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RecsFiltersComponent_Template_select_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.impact, $event) || (ctx.filters.impact = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RecsFiltersComponent_Template_select_ngModelChange_38_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(39, "option", 9);
      \u0275\u0275text(40, "All Impacts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 14);
      \u0275\u0275text(42, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 15);
      \u0275\u0275text(44, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 16);
      \u0275\u0275text(46, "Low");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 2)(48, "label", 3);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function RecsFiltersComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.minConfidence, $event) || (ctx.filters.minConfidence = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RecsFiltersComponent_Template_input_ngModelChange_50_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 2)(52, "button", 18);
      \u0275\u0275listener("click", function RecsFiltersComponent_Template_button_click_52_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(53, "svg", 19);
      \u0275\u0275element(54, "path", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " Clear ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.search);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.type);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.priority);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.impact);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("Min Confidence: ", ctx.filters.minConfidence || 0, "%");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.minConfidence);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.hasActiveFilters);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, RangeValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.recs-filters[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr auto;\n  gap: 1.5rem;\n  align-items: end;\n}\n@media (min-width: 1400px) {\n  .recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr auto;\n  }\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  color: #9ca3af;\n  z-index: 1;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 0.75rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .confidence-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0.5rem;\n  border-radius: 0.25rem;\n  background: #e5e7eb;\n  outline: none;\n  cursor: pointer;\n  appearance: none;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .confidence-slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  appearance: none;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  background: #8b5cf6;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .confidence-slider[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {\n  background: #7c3aed;\n  transform: scale(1.1);\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .confidence-slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  background: #8b5cf6;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .confidence-slider[_ngcontent-%COMP%]::-moz-range-thumb:hover {\n  background: #7c3aed;\n  transform: scale(1.1);\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n  color: #374151;\n  border-color: #9ca3af;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 1024px) {\n  .recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n  }\n  .recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]:first-child {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 768px) {\n  .recs-filters[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .recs-filters[_ngcontent-%COMP%]   .filters-content[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=recs-filters.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecsFiltersComponent, [{
    type: Component,
    args: [{ selector: "app-recs-filters", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="recs-filters">
      <div class="filters-content">
        <!-- Search -->
        <div class="filter-group">
          <label class="filter-label">Search</label>
          <div class="search-input">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              [(ngModel)]="filters.search"
              (ngModelChange)="onFilterChange()"
              placeholder="Search recommendations..."
              class="search-field">
          </div>
        </div>

        <!-- Type Filter -->
        <div class="filter-group">
          <label class="filter-label">Type</label>
          <select
            [(ngModel)]="filters.type"
            (ngModelChange)="onFilterChange()"
            class="filter-select">
            <option value="">All Types</option>
            <option value="cost_optimization">Cost Optimization</option>
            <option value="maintenance">Maintenance</option>
            <option value="efficiency">Efficiency</option>
            <option value="compliance">Compliance</option>
          </select>
        </div>

        <!-- Priority Filter -->
        <div class="filter-group">
          <label class="filter-label">Priority</label>
          <select
            [(ngModel)]="filters.priority"
            (ngModelChange)="onFilterChange()"
            class="filter-select">
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <!-- Impact Filter -->
        <div class="filter-group">
          <label class="filter-label">Impact</label>
          <select
            [(ngModel)]="filters.impact"
            (ngModelChange)="onFilterChange()"
            class="filter-select">
            <option value="">All Impacts</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <!-- Min Confidence -->
        <div class="filter-group">
          <label class="filter-label">Min Confidence: {{ filters.minConfidence || 0 }}%</label>
          <input
            type="range"
            [(ngModel)]="filters.minConfidence"
            (ngModelChange)="onFilterChange()"
            min="0"
            max="100"
            step="5"
            class="confidence-slider">
        </div>

        <!-- Clear Filters -->
        <div class="filter-group">
          <button
            (click)="clearFilters()"
            class="clear-button"
            [disabled]="!hasActiveFilters">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M10 11v6M14 11v6"></path>
            </svg>
            Clear
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-recommendations/recs-filters.component.scss */\n.recs-filters {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.recs-filters .filters-content {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr auto;\n  gap: 1.5rem;\n  align-items: end;\n}\n@media (min-width: 1400px) {\n  .recs-filters .filters-content {\n    grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr auto;\n  }\n}\n.recs-filters .filters-content .filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.recs-filters .filters-content .filter-group .filter-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.recs-filters .filters-content .filter-group .search-input {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.recs-filters .filters-content .filter-group .search-input .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  color: #9ca3af;\n  z-index: 1;\n}\n.recs-filters .filters-content .filter-group .search-input .search-field {\n  width: 100%;\n  padding: 0.75rem 0.75rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.recs-filters .filters-content .filter-group .search-input .search-field:focus {\n  outline: none;\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);\n}\n.recs-filters .filters-content .filter-group .search-input .search-field::placeholder {\n  color: #9ca3af;\n}\n.recs-filters .filters-content .filter-group .filter-select {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recs-filters .filters-content .filter-group .filter-select:focus {\n  outline: none;\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);\n}\n.recs-filters .filters-content .filter-group .filter-select:hover {\n  border-color: #9ca3af;\n}\n.recs-filters .filters-content .filter-group .confidence-slider {\n  width: 100%;\n  height: 0.5rem;\n  border-radius: 0.25rem;\n  background: #e5e7eb;\n  outline: none;\n  cursor: pointer;\n  appearance: none;\n}\n.recs-filters .filters-content .filter-group .confidence-slider::-webkit-slider-thumb {\n  appearance: none;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  background: #8b5cf6;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n}\n.recs-filters .filters-content .filter-group .confidence-slider::-webkit-slider-thumb:hover {\n  background: #7c3aed;\n  transform: scale(1.1);\n}\n.recs-filters .filters-content .filter-group .confidence-slider::-moz-range-thumb {\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  background: #8b5cf6;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n}\n.recs-filters .filters-content .filter-group .confidence-slider::-moz-range-thumb:hover {\n  background: #7c3aed;\n  transform: scale(1.1);\n}\n.recs-filters .filters-content .filter-group .clear-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.recs-filters .filters-content .filter-group .clear-button:hover:not(:disabled) {\n  background: #e5e7eb;\n  color: #374151;\n  border-color: #9ca3af;\n}\n.recs-filters .filters-content .filter-group .clear-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.recs-filters .filters-content .filter-group .clear-button svg {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 1024px) {\n  .recs-filters .filters-content {\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n  }\n  .recs-filters .filters-content .filter-group:first-child {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 768px) {\n  .recs-filters {\n    padding: 1rem;\n  }\n  .recs-filters .filters-content {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .recs-filters .filters-content .filter-group .clear-button {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=recs-filters.component.css.map */\n"] }]
  }], null, { filters: [{
    type: Input
  }], filtersChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecsFiltersComponent, { className: "RecsFiltersComponent", filePath: "src/app/ai-features/components/ai-recommendations/recs-filters.component.ts", lineNumber: 102 });
})();

// src/app/ai-features/shared/ai-recommendations.service.ts
var AIRecommendationsService = class _AIRecommendationsService {
  http;
  apiUrl = `${environment.apiUrl}/ai/recommendations`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get recommendations with filters and pagination
   */
  getRecommendations(filters = {}, page = 1, pageSize = 10) {
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString());
    if (filters.type)
      params = params.set("type", filters.type);
    if (filters.priority)
      params = params.set("priority", filters.priority);
    if (filters.impact)
      params = params.set("impact", filters.impact);
    if (filters.search)
      params = params.set("search", filters.search);
    if (filters.minConfidence !== void 0)
      params = params.set("minConfidence", filters.minConfidence.toString());
    return this.http.get(`${this.apiUrl}`, { params });
  }
  /**
   * Generate new recommendations
   */
  generateRecommendations() {
    return this.http.post(`${this.apiUrl}/generate`, {});
  }
  /**
   * Toggle implementation status
   */
  toggleImplementation(id, implemented) {
    return this.http.post(`${this.apiUrl}/${id}/toggle`, { implemented });
  }
  /**
   * Export recommendations to CSV
   */
  exportRecommendations(filters = {}) {
    let params = new HttpParams();
    if (filters.type)
      params = params.set("type", filters.type);
    if (filters.priority)
      params = params.set("priority", filters.priority);
    if (filters.impact)
      params = params.set("impact", filters.impact);
    if (filters.search)
      params = params.set("search", filters.search);
    if (filters.minConfidence !== void 0)
      params = params.set("minConfidence", filters.minConfidence.toString());
    return this.http.get(`${this.apiUrl}/export`, {
      params,
      responseType: "blob"
    });
  }
  /**
   * Get summary statistics
   */
  getSummary() {
    return this.http.get(`${this.apiUrl}/summary`);
  }
  /**
   * Download CSV file
   */
  downloadCsv(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  /**
   * Compute ROI and net benefit
   */
  computeROI(estimatedSavings, implementationCost) {
    if (!estimatedSavings || !implementationCost || implementationCost <= 0) {
      return { net: null, roi: null };
    }
    const net = estimatedSavings - implementationCost;
    const roi = net / implementationCost * 100;
    return { net, roi };
  }
  /**
   * Compute payback period
   */
  computePaybackPeriod(estimatedSavings, implementationCost) {
    if (!estimatedSavings || !implementationCost || estimatedSavings <= 0) {
      return null;
    }
    const months = Math.max(1, Math.round(implementationCost / (estimatedSavings / 12)));
    return `${months} months`;
  }
  /**
   * Get type display name
   */
  getTypeDisplayName(type) {
    const typeMap = {
      "cost_optimization": "Cost Optimization",
      "maintenance": "Maintenance",
      "efficiency": "Efficiency",
      "compliance": "Compliance"
    };
    return typeMap[type] || type;
  }
  /**
   * Get type icon
   */
  getTypeIcon(type) {
    const iconMap = {
      "cost_optimization": "dollar-sign",
      "maintenance": "wrench",
      "efficiency": "trending-up",
      "compliance": "shield-check"
    };
    return iconMap[type] || "help-circle";
  }
  /**
   * Get priority color class
   */
  getPriorityColorClass(priority) {
    const colorMap = {
      "low": "priority-low",
      "medium": "priority-medium",
      "high": "priority-high"
    };
    return colorMap[priority] || "priority-medium";
  }
  /**
   * Get impact color class
   */
  getImpactColorClass(impact) {
    const colorMap = {
      "low": "impact-low",
      "medium": "impact-medium",
      "high": "impact-high"
    };
    return colorMap[impact] || "impact-medium";
  }
  static \u0275fac = function AIRecommendationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIRecommendationsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AIRecommendationsService, factory: _AIRecommendationsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIRecommendationsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/ai-features/components/ai-recommendations/rec-card.component.ts
var _c06 = (a0) => ({ "implemented": a0 });
function RecCardComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "Estimated Savings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, ctx_r0.recommendation.estimatedSavings, "AED", "symbol", "1.2-2"));
  }
}
function RecCardComponent_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "Implementation Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, ctx_r0.recommendation.implementationCost, "AED", "symbol", "1.2-2"));
  }
}
function RecCardComponent_div_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "Net Benefit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.netBenefit >= 0 ? "savings" : "cost");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(5, 2, ctx_r0.netBenefit, "AED", "symbol", "1.2-2"), " ");
  }
}
function RecCardComponent_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "ROI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.roi >= 0 ? "savings" : "cost");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 2, ctx_r0.roi, "1.0-1"), "% ");
  }
}
function RecCardComponent_div_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "Payback Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.paybackPeriod);
  }
}
function RecCardComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, RecCardComponent_div_28_div_1_Template, 6, 6, "div", 36)(2, RecCardComponent_div_28_div_2_Template, 6, 6, "div", 36)(3, RecCardComponent_div_28_div_3_Template, 6, 7, "div", 36)(4, RecCardComponent_div_28_div_4_Template, 6, 5, "div", 36)(5, RecCardComponent_div_28_div_5_Template, 5, 1, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recommendation.estimatedSavings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recommendation.implementationCost);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.netBenefit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.roi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paybackPeriod);
  }
}
function RecCardComponent_div_35_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "polyline", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", action_r2, " ");
  }
}
function RecCardComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "h4", 44);
    \u0275\u0275text(2, "Recommended Actions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 45);
    \u0275\u0275template(4, RecCardComponent_div_35_li_4_Template, 4, 1, "li", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.recommendation.actions);
  }
}
function RecCardComponent__svg_svg_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 50)(2, "path", 51);
    \u0275\u0275elementEnd();
  }
}
function RecCardComponent__svg_svg_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 50)(2, "path", 51);
    \u0275\u0275elementEnd();
  }
}
var RecCardComponent = class _RecCardComponent {
  recService;
  recommendation;
  toggleImplementation = new EventEmitter();
  createActionPlan = new EventEmitter();
  isToggling = false;
  constructor(recService) {
    this.recService = recService;
  }
  get netBenefit() {
    const result = this.recService.computeROI(this.recommendation.estimatedSavings, this.recommendation.implementationCost);
    return result.net;
  }
  get roi() {
    const result = this.recService.computeROI(this.recommendation.estimatedSavings, this.recommendation.implementationCost);
    return result.roi;
  }
  get paybackPeriod() {
    return this.recService.computePaybackPeriod(this.recommendation.estimatedSavings, this.recommendation.implementationCost);
  }
  onToggleImplementation() {
    this.isToggling = true;
    this.toggleImplementation.emit({
      id: this.recommendation.id,
      implemented: !this.recommendation.implemented
    });
    setTimeout(() => {
      this.isToggling = false;
    }, 1e3);
  }
  onCreateActionPlan() {
    this.createActionPlan.emit(this.recommendation);
  }
  getTypeDisplayName(type) {
    return this.recService.getTypeDisplayName(type);
  }
  getTypeIconPath(type) {
    const iconMap = {
      "dollar-sign": "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
      "wrench": "M22 7l-7.5-4.5L7 7l5.5 3.5L22 7zM7 7v10l5.5 3.5L18 17V7l-5.5 3.5L7 7z",
      "trending-up": "M23 6l-9.5 9.5-5-5L1 18",
      "shield-check": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"
    };
    const iconName = this.recService.getTypeIcon(type);
    return iconMap[iconName] || iconMap["help-circle"];
  }
  getPriorityColorClass(priority) {
    return this.recService.getPriorityColorClass(priority);
  }
  getImpactColorClass(impact) {
    return this.recService.getImpactColorClass(impact);
  }
  static \u0275fac = function RecCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecCardComponent)(\u0275\u0275directiveInject(AIRecommendationsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecCardComponent, selectors: [["app-rec-card"]], inputs: { recommendation: "recommendation" }, outputs: { toggleImplementation: "toggleImplementation", createActionPlan: "createActionPlan" }, decls: 50, vars: 27, consts: [[1, "rec-card", 3, "ngClass"], [1, "card-header"], [1, "header-left"], [1, "type-icon", 3, "ngClass"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "title-section"], [1, "card-title"], [1, "type-badge"], [1, "header-right"], [1, "badges"], [1, "priority-badge", 3, "ngClass"], [1, "impact-badge", 3, "ngClass"], [1, "confidence-chip"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"], ["d", "M12 16V12"], ["d", "M12 8H12.01"], [1, "card-content"], [1, "card-description"], ["class", "cost-analysis", 4, "ngIf"], [1, "timeline"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "timeline-icon"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "timeline-text"], ["class", "actions-list", 4, "ngIf"], [1, "card-actions"], [1, "btn", "btn-secondary", 3, "click", "ngClass", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14,2 14,8 20,8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], [1, "cost-analysis"], ["class", "cost-item", 4, "ngIf"], [1, "cost-item"], [1, "cost-label"], [1, "cost-value", "savings"], [1, "cost-value", "cost"], [1, "cost-value", 3, "ngClass"], [1, "cost-value"], [1, "actions-list"], [1, "actions-title"], [1, "actions-items"], ["class", "action-item", 4, "ngFor", "ngForOf"], [1, "action-item"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "action-icon"], ["points", "9 18 15 12 9 6"], ["d", "M9 12l2 2 4-4"], ["d", "M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"]], template: function RecCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 5)(7, "h3", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "span", 10);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "titlecase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 11);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "titlecase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 13);
      \u0275\u0275element(21, "path", 14)(22, "path", 15)(23, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "div", 17)(26, "p", 18);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, RecCardComponent_div_28_Template, 6, 5, "div", 19);
      \u0275\u0275elementStart(29, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 21);
      \u0275\u0275element(31, "circle", 22)(32, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "span", 24);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, RecCardComponent_div_35_Template, 5, 1, "div", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 26)(37, "button", 27);
      \u0275\u0275listener("click", function RecCardComponent_Template_button_click_37_listener() {
        return ctx.onToggleImplementation();
      });
      \u0275\u0275template(38, RecCardComponent__svg_svg_38_Template, 3, 0, "svg", 28)(39, RecCardComponent__svg_svg_39_Template, 3, 0, "svg", 28);
      \u0275\u0275elementStart(40, "span");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "button", 29);
      \u0275\u0275listener("click", function RecCardComponent_Template_button_click_42_listener() {
        return ctx.onCreateActionPlan();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 30);
      \u0275\u0275element(44, "path", 31)(45, "polyline", 32)(46, "line", 33)(47, "line", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "Create Action Plan");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c06, ctx.recommendation.implemented));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", "type-" + ctx.recommendation.type);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("d", ctx.getTypeIconPath(ctx.recommendation.type));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.recommendation.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getTypeDisplayName(ctx.recommendation.type));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.getPriorityColorClass(ctx.recommendation.priority));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 19, ctx.recommendation.priority), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.getImpactColorClass(ctx.recommendation.impact));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 21, ctx.recommendation.impact), " Impact ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.recommendation.confidence, "% ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.recommendation.description);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.recommendation.estimatedSavings || ctx.recommendation.implementationCost);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Timeline: ", ctx.recommendation.timeline, "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.recommendation.actions == null ? null : ctx.recommendation.actions.length);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c06, ctx.recommendation.implemented))("disabled", ctx.isToggling);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.recommendation.implemented);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.recommendation.implemented);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.recommendation.implemented ? "Implemented" : "Mark as Implemented");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, TitleCasePipe, CurrencyPipe], styles: ["\n\n.rec-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n.rec-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n  transform: translateY(-1px);\n}\n.rec-card.implemented[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  background: #f8fafc;\n  border-color: #d1d5db;\n}\n.rec-card.implemented[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  overflow: hidden;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n  min-width: 0;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .type-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  flex-shrink: 0;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .type-icon.type-cost_optimization[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .type-icon.type-maintenance[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .type-icon.type-efficiency[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .type-icon.type-compliance[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .type-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n  line-height: 1.4;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  hyphens: auto;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-end;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .priority-badge.priority-low[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .priority-badge.priority-medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .priority-badge.priority-high[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .impact-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border: 1px solid;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .impact-badge.impact-low[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #6b7280;\n  border-color: #e2e8f0;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .impact-badge.impact-medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n  border-color: #fbbf24;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .impact-badge.impact-high[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n  border-color: #f87171;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .confidence-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: #e0e7ff;\n  color: #4338ca;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .confidence-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  overflow: hidden;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 1rem 0;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  hyphens: auto;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .cost-analysis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 0.75rem;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .cost-analysis[_ngcontent-%COMP%]   .cost-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .cost-analysis[_ngcontent-%COMP%]   .cost-item[_ngcontent-%COMP%]   .cost-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .cost-analysis[_ngcontent-%COMP%]   .cost-item[_ngcontent-%COMP%]   .cost-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .cost-analysis[_ngcontent-%COMP%]   .cost-item[_ngcontent-%COMP%]   .cost-value.savings[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .cost-analysis[_ngcontent-%COMP%]   .cost-item[_ngcontent-%COMP%]   .cost-value.cost[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  background: #f0f9ff;\n  border-radius: 0.5rem;\n  border: 1px solid #bae6fd;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n  flex-shrink: 0;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0c4a6e;\n  font-weight: 500;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .actions-list[_ngcontent-%COMP%]   .actions-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .actions-list[_ngcontent-%COMP%]   .actions-items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .actions-list[_ngcontent-%COMP%]   .actions-items[_ngcontent-%COMP%]   .action-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 0.25rem;\n}\n.rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .actions-list[_ngcontent-%COMP%]   .actions-items[_ngcontent-%COMP%]   .action-item[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  text-decoration: none;\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n  border-color: #8b5cf6;\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #6d28d9 100%);\n  transform: translateY(-1px);\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn.btn-secondary.implemented[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n  border-color: #bbf7d0;\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn.btn-secondary.implemented[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #bbf7d0;\n  border-color: #86efac;\n}\n.rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .rec-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .rec-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n  .rec-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .cost-analysis[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .rec-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=rec-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecCardComponent, [{
    type: Component,
    args: [{ selector: "app-rec-card", standalone: true, imports: [CommonModule], template: `
    <div class="rec-card" [ngClass]="{'implemented': recommendation.implemented}">
      <!-- Card Header -->
      <div class="card-header">
        <div class="header-left">
          <div class="type-icon" [ngClass]="'type-' + recommendation.type">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path [attr.d]="getTypeIconPath(recommendation.type)"></path>
            </svg>
          </div>
          <div class="title-section">
            <h3 class="card-title">{{ recommendation.title }}</h3>
            <div class="type-badge">{{ getTypeDisplayName(recommendation.type) }}</div>
          </div>
        </div>
        <div class="header-right">
          <div class="badges">
            <span class="priority-badge" [ngClass]="getPriorityColorClass(recommendation.priority)">
              {{ recommendation.priority | titlecase }}
            </span>
            <span class="impact-badge" [ngClass]="getImpactColorClass(recommendation.impact)">
              {{ recommendation.impact | titlecase }} Impact
            </span>
            <span class="confidence-chip">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
                <path d="M12 16V12"></path>
                <path d="M12 8H12.01"></path>
              </svg>
              {{ recommendation.confidence }}%
            </span>
          </div>
        </div>
      </div>

      <!-- Card Content -->
      <div class="card-content">
        <p class="card-description">{{ recommendation.description }}</p>

        <!-- Cost Analysis -->
        <div class="cost-analysis" *ngIf="recommendation.estimatedSavings || recommendation.implementationCost">
          <div class="cost-item" *ngIf="recommendation.estimatedSavings">
            <span class="cost-label">Estimated Savings</span>
            <span class="cost-value savings">{{ recommendation.estimatedSavings | currency:'AED':'symbol':'1.2-2' }}</span>
          </div>
          <div class="cost-item" *ngIf="recommendation.implementationCost">
            <span class="cost-label">Implementation Cost</span>
            <span class="cost-value cost">{{ recommendation.implementationCost | currency:'AED':'symbol':'1.2-2' }}</span>
          </div>
          <div class="cost-item" *ngIf="netBenefit">
            <span class="cost-label">Net Benefit</span>
            <span class="cost-value" [ngClass]="netBenefit >= 0 ? 'savings' : 'cost'">
              {{ netBenefit | currency:'AED':'symbol':'1.2-2' }}
            </span>
          </div>
          <div class="cost-item" *ngIf="roi">
            <span class="cost-label">ROI</span>
            <span class="cost-value" [ngClass]="roi >= 0 ? 'savings' : 'cost'">
              {{ roi | number:'1.0-1' }}%
            </span>
          </div>
          <div class="cost-item" *ngIf="paybackPeriod">
            <span class="cost-label">Payback Period</span>
            <span class="cost-value">{{ paybackPeriod }}</span>
          </div>
        </div>

        <!-- Timeline -->
        <div class="timeline">
          <svg class="timeline-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <span class="timeline-text">Timeline: {{ recommendation.timeline }}</span>
        </div>

        <!-- Actions List -->
        <div class="actions-list" *ngIf="recommendation.actions?.length">
          <h4 class="actions-title">Recommended Actions:</h4>
          <ul class="actions-items">
            <li *ngFor="let action of recommendation.actions" class="action-item">
              <svg class="action-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              {{ action }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Card Actions -->
      <div class="card-actions">
        <button
          class="btn btn-secondary"
          [ngClass]="{'implemented': recommendation.implemented}"
          (click)="onToggleImplementation()"
          [disabled]="isToggling">
          <svg *ngIf="!recommendation.implemented" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"></path>
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
          </svg>
          <svg *ngIf="recommendation.implemented" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"></path>
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
          </svg>
          <span>{{ recommendation.implemented ? 'Implemented' : 'Mark as Implemented' }}</span>
        </button>

        <button
          class="btn btn-primary"
          (click)="onCreateActionPlan()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
          <span>Create Action Plan</span>
        </button>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-recommendations/rec-card.component.scss */\n.rec-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n.rec-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n  transform: translateY(-1px);\n}\n.rec-card.implemented {\n  opacity: 0.7;\n  background: #f8fafc;\n  border-color: #d1d5db;\n}\n.rec-card.implemented .card-title {\n  text-decoration: line-through;\n}\n.rec-card .card-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  overflow: hidden;\n}\n.rec-card .card-header .header-left {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n  min-width: 0;\n}\n.rec-card .card-header .header-left .type-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  flex-shrink: 0;\n}\n.rec-card .card-header .header-left .type-icon.type-cost_optimization {\n  background: #dcfce7;\n  color: #166534;\n}\n.rec-card .card-header .header-left .type-icon.type-maintenance {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.rec-card .card-header .header-left .type-icon.type-efficiency {\n  background: #fef3c7;\n  color: #d97706;\n}\n.rec-card .card-header .header-left .type-icon.type-compliance {\n  background: #f3e8ff;\n  color: #7c3aed;\n}\n.rec-card .card-header .header-left .type-icon svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.rec-card .card-header .header-left .title-section {\n  flex: 1;\n  min-width: 0;\n}\n.rec-card .card-header .header-left .title-section .card-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n  line-height: 1.4;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  hyphens: auto;\n}\n.rec-card .card-header .header-left .title-section .type-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.rec-card .card-header .header-right .badges {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-end;\n}\n.rec-card .card-header .header-right .badges .priority-badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.rec-card .card-header .header-right .badges .priority-badge.priority-low {\n  background: #dcfce7;\n  color: #166534;\n}\n.rec-card .card-header .header-right .badges .priority-badge.priority-medium {\n  background: #fef3c7;\n  color: #d97706;\n}\n.rec-card .card-header .header-right .badges .priority-badge.priority-high {\n  background: #fecaca;\n  color: #dc2626;\n}\n.rec-card .card-header .header-right .badges .impact-badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border: 1px solid;\n}\n.rec-card .card-header .header-right .badges .impact-badge.impact-low {\n  background: #f8fafc;\n  color: #6b7280;\n  border-color: #e2e8f0;\n}\n.rec-card .card-header .header-right .badges .impact-badge.impact-medium {\n  background: #fef3c7;\n  color: #d97706;\n  border-color: #fbbf24;\n}\n.rec-card .card-header .header-right .badges .impact-badge.impact-high {\n  background: #fecaca;\n  color: #dc2626;\n  border-color: #f87171;\n}\n.rec-card .card-header .header-right .badges .confidence-chip {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: #e0e7ff;\n  color: #4338ca;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.rec-card .card-header .header-right .badges .confidence-chip svg {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.rec-card .card-content {\n  margin-bottom: 1.5rem;\n  overflow: hidden;\n}\n.rec-card .card-content .card-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 1rem 0;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  hyphens: auto;\n}\n.rec-card .card-content .cost-analysis {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background: #f8fafc;\n  border-radius: 0.75rem;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.rec-card .card-content .cost-analysis .cost-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.rec-card .card-content .cost-analysis .cost-item .cost-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n.rec-card .card-content .cost-analysis .cost-item .cost-value {\n  font-size: 0.875rem;\n  font-weight: 600;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rec-card .card-content .cost-analysis .cost-item .cost-value.savings {\n  color: #059669;\n}\n.rec-card .card-content .cost-analysis .cost-item .cost-value.cost {\n  color: #dc2626;\n}\n.rec-card .card-content .timeline {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  background: #f0f9ff;\n  border-radius: 0.5rem;\n  border: 1px solid #bae6fd;\n}\n.rec-card .card-content .timeline .timeline-icon {\n  color: #0ea5e9;\n  flex-shrink: 0;\n}\n.rec-card .card-content .timeline .timeline-text {\n  font-size: 0.875rem;\n  color: #0c4a6e;\n  font-weight: 500;\n}\n.rec-card .card-content .actions-list .actions-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.rec-card .card-content .actions-list .actions-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.rec-card .card-content .actions-list .actions-items .action-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 0.25rem;\n}\n.rec-card .card-content .actions-list .actions-items .action-item .action-icon {\n  color: #8b5cf6;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.rec-card .card-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.rec-card .card-actions .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  text-decoration: none;\n}\n.rec-card .card-actions .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.rec-card .card-actions .btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n  border-color: #8b5cf6;\n}\n.rec-card .card-actions .btn.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #6d28d9 100%);\n  transform: translateY(-1px);\n}\n.rec-card .card-actions .btn.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.rec-card .card-actions .btn.btn-secondary {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.rec-card .card-actions .btn.btn-secondary:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.rec-card .card-actions .btn.btn-secondary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.rec-card .card-actions .btn.btn-secondary.implemented {\n  background: #dcfce7;\n  color: #166534;\n  border-color: #bbf7d0;\n}\n.rec-card .card-actions .btn.btn-secondary.implemented:hover:not(:disabled) {\n  background: #bbf7d0;\n  border-color: #86efac;\n}\n.rec-card .card-actions .btn svg {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .rec-card {\n    padding: 1rem;\n  }\n  .rec-card .card-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .rec-card .card-header .header-left .title-section .card-title {\n    font-size: 1rem;\n  }\n  .rec-card .card-header .header-right .badges {\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n  .rec-card .card-content .cost-analysis {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .rec-card .card-actions {\n    flex-direction: column;\n  }\n  .rec-card .card-actions .btn {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=rec-card.component.css.map */\n"] }]
  }], () => [{ type: AIRecommendationsService }], { recommendation: [{
    type: Input
  }], toggleImplementation: [{
    type: Output
  }], createActionPlan: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecCardComponent, { className: "RecCardComponent", filePath: "src/app/ai-features/components/ai-recommendations/rec-card.component.ts", lineNumber: 134 });
})();

// src/app/ai-features/components/ai-recommendations/recs-list.component.ts
var _c07 = () => [1, 2, 3];
function RecsListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "label", 12);
    \u0275\u0275text(5, "Show:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function RecsListComponent_div_4_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecsListComponent_div_4_Template_select_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275elementStart(7, "option", 14);
    \u0275\u0275text(8, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 15);
    \u0275\u0275text(10, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 16);
    \u0275\u0275text(12, "50");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.pagination.total, " recommendations");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
  }
}
function RecsListComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "div", 21);
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275element(4, "div", 23)(5, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275element(7, "div", 26)(8, "div", 27);
    \u0275\u0275elementEnd()();
  }
}
function RecsListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, RecsListComponent_div_5_div_1_Template, 9, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c07));
  }
}
function RecsListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30)(3, "line", 31)(4, "line", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 33);
    \u0275\u0275text(6, "Error Loading Recommendations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 35);
    \u0275\u0275listener("click", function RecsListComponent_div_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRetry());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 36);
    \u0275\u0275element(11, "path", 37)(12, "path", 38)(13, "path", 39)(14, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Try Again ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function RecsListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 42);
    \u0275\u0275element(2, "path", 43)(3, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 45);
    \u0275\u0275text(5, "No Recommendations Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 46);
    \u0275\u0275text(7, " Generate your first set of AI-powered recommendations to optimize your asset management. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 47);
    \u0275\u0275listener("click", function RecsListComponent_div_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGenerate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 36);
    \u0275\u0275element(10, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Generate Recommendations ");
    \u0275\u0275elementEnd()();
  }
}
function RecsListComponent_div_8_app_rec_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-rec-card", 51);
    \u0275\u0275listener("toggleImplementation", function RecsListComponent_div_8_app_rec_card_1_Template_app_rec_card_toggleImplementation_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onToggleImplementation($event));
    })("createActionPlan", function RecsListComponent_div_8_app_rec_card_1_Template_app_rec_card_createActionPlan_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCreateActionPlan($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recommendation_r6 = ctx.$implicit;
    \u0275\u0275property("recommendation", recommendation_r6);
  }
}
function RecsListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, RecsListComponent_div_8_app_rec_card_1_Template, 1, 1, "app-rec-card", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recommendations);
  }
}
function RecsListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "button", 53);
    \u0275\u0275listener("click", function RecsListComponent_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pagination.page - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 36);
    \u0275\u0275element(3, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function RecsListComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.pagination.page + 1));
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 36);
    \u0275\u0275element(10, "path", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pagination.page <= 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" Page ", ctx_r1.pagination.page, " of ", ctx_r1.pagination.totalPages, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pagination.page >= ctx_r1.pagination.totalPages);
  }
}
var RecsListComponent = class _RecsListComponent {
  recommendations = [];
  isLoading = false;
  errorMessage = null;
  pagination = null;
  pageSize = 10;
  retry = new EventEmitter();
  generate = new EventEmitter();
  toggleImplementation = new EventEmitter();
  createActionPlan = new EventEmitter();
  pageChange = new EventEmitter();
  pageSizeChange = new EventEmitter();
  onRetry() {
    this.retry.emit();
  }
  onGenerate() {
    this.generate.emit();
  }
  onToggleImplementation(event) {
    this.toggleImplementation.emit(event);
  }
  onCreateActionPlan(recommendation) {
    this.createActionPlan.emit(recommendation);
  }
  onPageChange(page) {
    this.pageChange.emit(page);
  }
  onPageSizeChange() {
    this.pageSizeChange.emit(this.pageSize);
  }
  static \u0275fac = function RecsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecsListComponent, selectors: [["app-recs-list"]], inputs: { recommendations: "recommendations", isLoading: "isLoading", errorMessage: "errorMessage", pagination: "pagination", pageSize: "pageSize" }, outputs: { retry: "retry", generate: "generate", toggleImplementation: "toggleImplementation", createActionPlan: "createActionPlan", pageChange: "pageChange", pageSizeChange: "pageSizeChange" }, decls: 10, vars: 6, consts: [[1, "recs-list"], [1, "list-header"], [1, "list-title"], ["class", "list-info", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "recommendations-grid", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "list-info"], [1, "item-count"], [1, "page-size-selector"], [1, "page-size-label"], [1, "page-size-select", 3, "ngModelChange", "ngModel"], ["value", "10"], ["value", "25"], ["value", "50"], [1, "loading-state"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "skeleton-header"], [1, "skeleton-icon"], [1, "skeleton-content"], [1, "skeleton-line", "w-3-4"], [1, "skeleton-line", "w-1-2"], [1, "skeleton-body"], [1, "skeleton-line", "w-full"], [1, "skeleton-line", "w-2-3"], [1, "error-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "error-icon"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "error-title"], [1, "error-description"], [1, "retry-button", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], ["d", "M21 3v5h-5"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], ["d", "M3 21v-5h5"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "empty-icon"], ["d", "M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "empty-title"], [1, "empty-description"], [1, "generate-button", 3, "click"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "recommendations-grid"], [3, "recommendation", "toggleImplementation", "createActionPlan", 4, "ngFor", "ngForOf"], [3, "toggleImplementation", "createActionPlan", "recommendation"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], ["d", "M15 18l-6-6 6-6"], [1, "pagination-info"], ["d", "M9 18l6-6-6-6"]], template: function RecsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Recommendations");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, RecsListComponent_div_4_Template, 13, 2, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, RecsListComponent_div_5_Template, 2, 2, "div", 4)(6, RecsListComponent_div_6_Template, 16, 1, "div", 5)(7, RecsListComponent_div_7_Template, 12, 0, "div", 6)(8, RecsListComponent_div_8_Template, 2, 1, "div", 7)(9, RecsListComponent_div_9_Template, 11, 4, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.pagination);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.recommendations.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.recommendations.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.pagination && ctx.pagination.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RecCardComponent], styles: ["\n\n.recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .list-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .list-info[_ngcontent-%COMP%]   .item-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .list-info[_ngcontent-%COMP%]   .page-size-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .list-info[_ngcontent-%COMP%]   .page-size-selector[_ngcontent-%COMP%]   .page-size-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .list-info[_ngcontent-%COMP%]   .page-size-selector[_ngcontent-%COMP%]   .page-size-select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  cursor: pointer;\n}\n.recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .list-info[_ngcontent-%COMP%]   .page-size-selector[_ngcontent-%COMP%]   .page-size-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 0.75rem;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 1rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line.w-3-4[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line.w-1-2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-body[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 0.875rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-body[_ngcontent-%COMP%]   .skeleton-line.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-body[_ngcontent-%COMP%]   .skeleton-line.w-2-3[_ngcontent-%COMP%] {\n  width: 66.666667%;\n}\n.recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n  border: none;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #6d28d9 100%);\n  transform: translateY(-1px);\n}\n.recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n  max-width: 24rem;\n}\n.recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n  border: none;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #6d28d9 100%);\n  transform: translateY(-1px);\n}\n.recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .recommendations-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.recs-list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n}\n.recs-list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recs-list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.recs-list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.recs-list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.recs-list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.recs-list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n  }\n  .recs-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .list-info[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .recs-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n  .recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%], \n   .recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%], \n   .recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%], \n   .recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%], \n   .recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%], \n   .recs-list[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%], \n   .recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%], \n   .recs-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n  .recs-list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .recs-list[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=recs-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecsListComponent, [{
    type: Component,
    args: [{ selector: "app-recs-list", standalone: true, imports: [CommonModule, FormsModule, RecCardComponent], template: `
    <div class="recs-list">
      <!-- List Header -->
      <div class="list-header">
        <h3 class="list-title">Recommendations</h3>
        <div class="list-info" *ngIf="pagination">
          <span class="item-count">{{ pagination.total }} recommendations</span>
          <div class="page-size-selector">
            <label class="page-size-label">Show:</label>
            <select 
              [(ngModel)]="pageSize" 
              (ngModelChange)="onPageSizeChange()"
              class="page-size-select">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-state">
        <div class="skeleton-card" *ngFor="let i of [1,2,3]">
          <div class="skeleton-header">
            <div class="skeleton-icon"></div>
            <div class="skeleton-content">
              <div class="skeleton-line w-3-4"></div>
              <div class="skeleton-line w-1-2"></div>
            </div>
          </div>
          <div class="skeleton-body">
            <div class="skeleton-line w-full"></div>
            <div class="skeleton-line w-2-3"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div *ngIf="!isLoading && errorMessage" class="error-state">
        <svg class="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <h3 class="error-title">Error Loading Recommendations</h3>
        <p class="error-description">{{ errorMessage }}</p>
        <button class="retry-button" (click)="onRetry()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
            <path d="M3 21v-5h5"></path>
          </svg>
          Try Again
        </button>
      </div>

      <!-- Empty State -->
      <div *ngIf="!isLoading && !errorMessage && recommendations.length === 0" class="empty-state">
        <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <h3 class="empty-title">No Recommendations Yet</h3>
        <p class="empty-description">
          Generate your first set of AI-powered recommendations to optimize your asset management.
        </p>
        <button class="generate-button" (click)="onGenerate()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          Generate Recommendations
        </button>
      </div>

      <!-- Recommendations Grid -->
      <div *ngIf="!isLoading && !errorMessage && recommendations.length > 0" class="recommendations-grid">
        <app-rec-card
          *ngFor="let recommendation of recommendations"
          [recommendation]="recommendation"
          (toggleImplementation)="onToggleImplementation($event)"
          (createActionPlan)="onCreateActionPlan($event)">
        </app-rec-card>
      </div>

      <!-- Pagination -->
      <div *ngIf="!isLoading && !errorMessage && pagination && pagination.totalPages > 1" class="pagination">
        <button
          class="pagination-btn"
          [disabled]="pagination.page <= 1"
          (click)="onPageChange(pagination.page - 1)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
          Previous
        </button>

        <div class="pagination-info">
          Page {{ pagination.page }} of {{ pagination.totalPages }}
        </div>

        <button
          class="pagination-btn"
          [disabled]="pagination.page >= pagination.totalPages"
          (click)="onPageChange(pagination.page + 1)">
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-recommendations/recs-list.component.scss */\n.recs-list .list-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.recs-list .list-header .list-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.recs-list .list-header .list-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.recs-list .list-header .list-info .item-count {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.recs-list .list-header .list-info .page-size-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.recs-list .list-header .list-info .page-size-selector .page-size-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.recs-list .list-header .list-info .page-size-selector .page-size-select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  cursor: pointer;\n}\n.recs-list .list-header .list-info .page-size-selector .page-size-select:focus {\n  outline: none;\n  border-color: #8b5cf6;\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);\n}\n.recs-list .loading-state {\n  display: grid;\n  gap: 1.5rem;\n}\n.recs-list .loading-state .skeleton-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n}\n.recs-list .loading-state .skeleton-card .skeleton-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.recs-list .loading-state .skeleton-card .skeleton-header .skeleton-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 0.75rem;\n}\n.recs-list .loading-state .skeleton-card .skeleton-header .skeleton-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.recs-list .loading-state .skeleton-card .skeleton-header .skeleton-content .skeleton-line {\n  height: 1rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.recs-list .loading-state .skeleton-card .skeleton-header .skeleton-content .skeleton-line.w-3-4 {\n  width: 75%;\n}\n.recs-list .loading-state .skeleton-card .skeleton-header .skeleton-content .skeleton-line.w-1-2 {\n  width: 50%;\n}\n.recs-list .loading-state .skeleton-card .skeleton-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.recs-list .loading-state .skeleton-card .skeleton-body .skeleton-line {\n  height: 0.875rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.recs-list .loading-state .skeleton-card .skeleton-body .skeleton-line.w-full {\n  width: 100%;\n}\n.recs-list .loading-state .skeleton-card .skeleton-body .skeleton-line.w-2-3 {\n  width: 66.666667%;\n}\n.recs-list .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n}\n.recs-list .error-state .error-icon {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.recs-list .error-state .error-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.recs-list .error-state .error-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.recs-list .error-state .retry-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n  border: none;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recs-list .error-state .retry-button:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #6d28d9 100%);\n  transform: translateY(-1px);\n}\n.recs-list .error-state .retry-button:active {\n  transform: translateY(0);\n}\n.recs-list .error-state .retry-button svg {\n  width: 1rem;\n  height: 1rem;\n}\n.recs-list .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n}\n.recs-list .empty-state .empty-icon {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.recs-list .empty-state .empty-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.recs-list .empty-state .empty-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n  max-width: 24rem;\n}\n.recs-list .empty-state .generate-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #7c3aed 100%);\n  color: white;\n  border: none;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recs-list .empty-state .generate-button:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed 0%,\n      #6d28d9 100%);\n  transform: translateY(-1px);\n}\n.recs-list .empty-state .generate-button:active {\n  transform: translateY(0);\n}\n.recs-list .empty-state .generate-button svg {\n  width: 1rem;\n  height: 1rem;\n}\n.recs-list .recommendations-grid {\n  display: grid;\n  gap: 1.5rem;\n}\n.recs-list .pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n}\n.recs-list .pagination .pagination-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recs-list .pagination .pagination-btn:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.recs-list .pagination .pagination-btn:active:not(:disabled) {\n  transform: translateY(0);\n}\n.recs-list .pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.recs-list .pagination .pagination-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.recs-list .pagination .pagination-info {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n@keyframes loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .recs-list .list-header {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n  }\n  .recs-list .list-header .list-info {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .recs-list .loading-state .skeleton-card {\n    padding: 1rem;\n  }\n  .recs-list .loading-state .skeleton-card .skeleton-header .skeleton-icon {\n    width: 2rem;\n    height: 2rem;\n  }\n  .recs-list .error-state,\n  .recs-list .empty-state {\n    padding: 2rem 1rem;\n  }\n  .recs-list .error-state .error-title,\n  .recs-list .error-state .empty-title,\n  .recs-list .empty-state .error-title,\n  .recs-list .empty-state .empty-title {\n    font-size: 1.125rem;\n  }\n  .recs-list .error-state .retry-button,\n  .recs-list .error-state .generate-button,\n  .recs-list .empty-state .retry-button,\n  .recs-list .empty-state .generate-button {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n  .recs-list .pagination {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .recs-list .pagination .pagination-btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=recs-list.component.css.map */\n"] }]
  }], null, { recommendations: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], errorMessage: [{
    type: Input
  }], pagination: [{
    type: Input
  }], pageSize: [{
    type: Input
  }], retry: [{
    type: Output
  }], generate: [{
    type: Output
  }], toggleImplementation: [{
    type: Output
  }], createActionPlan: [{
    type: Output
  }], pageChange: [{
    type: Output
  }], pageSizeChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecsListComponent, { className: "RecsListComponent", filePath: "src/app/ai-features/components/ai-recommendations/recs-list.component.ts", lineNumber: 127 });
})();

// src/app/ai-features/components/ai-recommendations/ai-recommendations.component.ts
var AIRecommendationsComponent = class _AIRecommendationsComponent {
  recService;
  destroy$ = new Subject();
  // State
  recommendations = [];
  summary = null;
  isLoading = false;
  isGenerating = false;
  errorMessage = null;
  pagination = null;
  // Filters and pagination
  filters = {
    minConfidence: 0
  };
  currentPage = 1;
  pageSize = 10;
  // Work Order Modal state
  showWorkOrderModal = false;
  selectedRecommendationForWorkOrder = null;
  constructor(recService) {
    this.recService = recService;
  }
  ngOnInit() {
    this.loadData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadData() {
    this.isLoading = true;
    this.errorMessage = null;
    this.recService.getRecommendations(this.filters, this.currentPage, this.pageSize).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const recommendationsData = response.data.recommendations;
          this.recommendations = Array.isArray(recommendationsData) ? recommendationsData : recommendationsData?.data || [];
          const summary = response.data.summary;
          if (summary) {
            this.summary = __spreadProps(__spreadValues({}, summary), {
              totalSavings: typeof summary.totalSavings === "string" ? parseFloat(summary.totalSavings) : summary.totalSavings,
              totalCost: typeof summary.totalCost === "string" ? parseFloat(summary.totalCost) : summary.totalCost,
              roi: typeof summary.roi === "string" ? parseFloat(summary.roi) : summary.roi
            });
          }
          this.pagination = response.data.pagination;
        } else {
          this.errorMessage = response.error || "Failed to load recommendations";
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading recommendations:", error);
        this.errorMessage = "Failed to load recommendations. Please try again.";
        this.isLoading = false;
      }
    });
  }
  onRefresh() {
    this.loadData();
  }
  onGenerate() {
    this.isGenerating = true;
    this.errorMessage = null;
    this.recService.generateRecommendations().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const recommendationsData = response.data.recommendations;
          this.recommendations = Array.isArray(recommendationsData) ? recommendationsData : recommendationsData?.data || [];
          this.summary = response.data.summary;
          this.currentPage = 1;
          this.loadData();
        } else {
          this.errorMessage = response.error || "Failed to generate recommendations";
        }
        this.isGenerating = false;
      },
      error: (error) => {
        console.error("Error generating recommendations:", error);
        this.errorMessage = "Failed to generate recommendations. Please try again.";
        this.isGenerating = false;
      }
    });
  }
  onExport() {
    if (this.recommendations.length === 0) {
      this.errorMessage = "No recommendations to export. Please generate recommendations first.";
      return;
    }
    this.errorMessage = null;
    this.recService.exportRecommendations(this.filters).pipe(takeUntil(this.destroy$)).subscribe({
      next: (blob) => {
        const filename = `ai_recommendations_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
        this.recService.downloadCsv(blob, filename);
      },
      error: (error) => {
        console.error("Error exporting recommendations:", error);
        this.errorMessage = "Failed to export recommendations. Please try again.";
      }
    });
  }
  onFiltersChange(filters) {
    this.filters = filters;
    this.currentPage = 1;
    this.loadData();
  }
  onRetry() {
    this.loadData();
  }
  onToggleImplementation(event) {
    this.recService.toggleImplementation(event.id, event.implemented).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const index = this.recommendations.findIndex((r) => r.id === event.id);
          if (index !== -1) {
            this.recommendations[index] = response.data;
          }
          this.loadSummary();
        } else {
          this.errorMessage = response.error || "Failed to update recommendation. Please try again.";
        }
      },
      error: (error) => {
        console.error("Error toggling implementation:", error);
        this.errorMessage = "Failed to update recommendation. Please try again.";
      }
    });
  }
  onCreateActionPlan(recommendation) {
    this.selectedRecommendationForWorkOrder = {
      assetId: null,
      // Recommendations don't have specific asset
      assetName: "General Recommendation",
      riskLevel: recommendation.priority === "high" ? "high" : recommendation.priority === "medium" ? "medium" : "low",
      recommendedAction: recommendation.title + ": " + recommendation.description,
      confidence: recommendation.confidence
    };
    this.showWorkOrderModal = true;
  }
  onWorkOrderCreated() {
    this.showWorkOrderModal = false;
    this.selectedRecommendationForWorkOrder = null;
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadData();
  }
  onPageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.loadData();
  }
  loadSummary() {
    this.recService.getSummary().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.summary = response.data;
        }
      },
      error: (error) => {
        console.error("Error loading summary:", error);
      }
    });
  }
  static \u0275fac = function AIRecommendationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIRecommendationsComponent)(\u0275\u0275directiveInject(AIRecommendationsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIRecommendationsComponent, selectors: [["app-ai-recommendations"]], decls: 6, vars: 13, consts: [[1, "ai-recommendations-page"], [3, "refresh", "generate", "export", "lastUpdated", "isLoading", "isGenerating", "hasData"], [3, "summary"], [3, "filtersChange", "filters"], [3, "retry", "generate", "toggleImplementation", "createActionPlan", "pageChange", "pageSizeChange", "recommendations", "isLoading", "errorMessage", "pagination", "pageSize"], [3, "closeModal", "workOrderCreated", "isOpen", "prediction"]], template: function AIRecommendationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-recs-header", 1);
      \u0275\u0275listener("refresh", function AIRecommendationsComponent_Template_app_recs_header_refresh_1_listener() {
        return ctx.onRefresh();
      })("generate", function AIRecommendationsComponent_Template_app_recs_header_generate_1_listener() {
        return ctx.onGenerate();
      })("export", function AIRecommendationsComponent_Template_app_recs_header_export_1_listener() {
        return ctx.onExport();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "app-recs-summary", 2);
      \u0275\u0275elementStart(3, "app-recs-filters", 3);
      \u0275\u0275listener("filtersChange", function AIRecommendationsComponent_Template_app_recs_filters_filtersChange_3_listener($event) {
        return ctx.onFiltersChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-recs-list", 4);
      \u0275\u0275listener("retry", function AIRecommendationsComponent_Template_app_recs_list_retry_4_listener() {
        return ctx.onRetry();
      })("generate", function AIRecommendationsComponent_Template_app_recs_list_generate_4_listener() {
        return ctx.onGenerate();
      })("toggleImplementation", function AIRecommendationsComponent_Template_app_recs_list_toggleImplementation_4_listener($event) {
        return ctx.onToggleImplementation($event);
      })("createActionPlan", function AIRecommendationsComponent_Template_app_recs_list_createActionPlan_4_listener($event) {
        return ctx.onCreateActionPlan($event);
      })("pageChange", function AIRecommendationsComponent_Template_app_recs_list_pageChange_4_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function AIRecommendationsComponent_Template_app_recs_list_pageSizeChange_4_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-create-work-order-modal", 5);
      \u0275\u0275listener("closeModal", function AIRecommendationsComponent_Template_app_create_work_order_modal_closeModal_5_listener() {
        return ctx.showWorkOrderModal = false;
      })("workOrderCreated", function AIRecommendationsComponent_Template_app_create_work_order_modal_workOrderCreated_5_listener() {
        return ctx.onWorkOrderCreated();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("lastUpdated", ctx.summary == null ? null : ctx.summary.lastUpdated)("isLoading", ctx.isLoading)("isGenerating", ctx.isGenerating)("hasData", ctx.recommendations.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("summary", ctx.summary);
      \u0275\u0275advance();
      \u0275\u0275property("filters", ctx.filters);
      \u0275\u0275advance();
      \u0275\u0275property("recommendations", ctx.recommendations)("isLoading", ctx.isLoading)("errorMessage", ctx.errorMessage)("pagination", ctx.pagination)("pageSize", ctx.pageSize);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showWorkOrderModal)("prediction", ctx.selectedRecommendationForWorkOrder);
    }
  }, dependencies: [
    CommonModule,
    RecsHeaderComponent,
    RecsSummaryComponent,
    RecsFiltersComponent,
    RecsListComponent,
    CreateWorkOrderModalComponent
  ], styles: ["\n\n.ai-recommendations-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.ai-recommendations-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n@media (max-width: 1024px) {\n  .ai-recommendations-page[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .ai-recommendations-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=ai-recommendations.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIRecommendationsComponent, [{
    type: Component,
    args: [{ selector: "app-ai-recommendations", standalone: true, imports: [
      CommonModule,
      RecsHeaderComponent,
      RecsSummaryComponent,
      RecsFiltersComponent,
      RecsListComponent,
      CreateWorkOrderModalComponent
    ], template: `
    <div class="ai-recommendations-page">
      <!-- Header -->
      <app-recs-header
        [lastUpdated]="summary?.lastUpdated"
        [isLoading]="isLoading"
        [isGenerating]="isGenerating"
        [hasData]="recommendations.length > 0"
        (refresh)="onRefresh()"
        (generate)="onGenerate()"
        (export)="onExport()">
      </app-recs-header>

      <!-- Summary -->
      <app-recs-summary [summary]="summary"></app-recs-summary>

      <!-- Filters -->
      <app-recs-filters
        [filters]="filters"
        (filtersChange)="onFiltersChange($event)">
      </app-recs-filters>

      <!-- List -->
      <app-recs-list
        [recommendations]="recommendations"
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        [pagination]="pagination"
        [pageSize]="pageSize"
        (retry)="onRetry()"
        (generate)="onGenerate()"
        (toggleImplementation)="onToggleImplementation($event)"
        (createActionPlan)="onCreateActionPlan($event)"
        (pageChange)="onPageChange($event)"
        (pageSizeChange)="onPageSizeChange($event)">
      </app-recs-list>

      <!-- Work Order Modal for Action Plan -->
      <app-create-work-order-modal
        [isOpen]="showWorkOrderModal"
        [prediction]="selectedRecommendationForWorkOrder"
        (closeModal)="showWorkOrderModal = false"
        (workOrderCreated)="onWorkOrderCreated()">
      </app-create-work-order-modal>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-recommendations/ai-recommendations.component.scss */\n.ai-recommendations-page {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.ai-recommendations-page * {\n  box-sizing: border-box;\n}\n@media (max-width: 1024px) {\n  .ai-recommendations-page {\n    padding: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .ai-recommendations-page {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=ai-recommendations.component.css.map */\n"] }]
  }], () => [{ type: AIRecommendationsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIRecommendationsComponent, { className: "AIRecommendationsComponent", filePath: "src/app/ai-features/components/ai-recommendations/ai-recommendations.component.ts", lineNumber: 76 });
})();

// src/app/ai-features/components/ai-analytics/analytics-header.component.ts
function AnalyticsHeaderComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "circle", 27)(3, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Last updated ", \u0275\u0275pipeBind2(6, 1, ctx_r0.lastUpdated, "short"), "");
  }
}
function AnalyticsHeaderComponent__svg_svg_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function AnalyticsHeaderComponent__svg_svg_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
var AnalyticsHeaderComponent = class _AnalyticsHeaderComponent {
  lastUpdated = null;
  isLoading = false;
  isGenerating = false;
  hasData = false;
  refresh = new EventEmitter();
  generate = new EventEmitter();
  export = new EventEmitter();
  schedule = new EventEmitter();
  onRefresh() {
    this.refresh.emit();
  }
  onGenerate() {
    this.generate.emit();
  }
  onExport() {
    this.export.emit();
  }
  onSchedule() {
    this.schedule.emit();
  }
  static \u0275fac = function AnalyticsHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsHeaderComponent, selectors: [["app-analytics-header"]], inputs: { lastUpdated: "lastUpdated", isLoading: "isLoading", isGenerating: "isGenerating", hasData: "hasData" }, outputs: { refresh: "refresh", generate: "generate", export: "export", schedule: "schedule" }, decls: 41, vars: 8, consts: [[1, "analytics-header"], [1, "header-content"], [1, "header-main"], [1, "header-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 3v18h18M18 17V9M13 17V5M8 17v-3"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "header-text"], [1, "header-title"], [1, "header-description"], ["class", "last-updated", 4, "ngIf"], [1, "action-bar"], [1, "action-buttons"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], ["d", "M21 3v5h-5"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], ["d", "M3 21v-5h5"], [1, "btn-text"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn-icon", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "btn-icon animate-spin", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "btn", "btn-outline", 3, "click", "disabled"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7,10 12,15 17,10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "last-updated"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "update-icon"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon", "animate-spin"], ["d", "M21 12a9 9 0 11-6.219-8.56"]], template: function AnalyticsHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 7)(8, "h1", 8);
      \u0275\u0275text(9, "AI Asset Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11, " AI-powered insights and comprehensive analytics for your asset portfolio. Get intelligent recommendations to optimize performance and reduce costs. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, AnalyticsHeaderComponent_div_12_Template, 7, 4, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "button", 13);
      \u0275\u0275listener("click", function AnalyticsHeaderComponent_Template_button_click_15_listener() {
        return ctx.onRefresh();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 14);
      \u0275\u0275element(17, "path", 15)(18, "path", 16)(19, "path", 17)(20, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "span", 19);
      \u0275\u0275text(22, "Refresh Analysis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 20);
      \u0275\u0275listener("click", function AnalyticsHeaderComponent_Template_button_click_23_listener() {
        return ctx.onGenerate();
      });
      \u0275\u0275template(24, AnalyticsHeaderComponent__svg_svg_24_Template, 2, 0, "svg", 21)(25, AnalyticsHeaderComponent__svg_svg_25_Template, 2, 0, "svg", 22);
      \u0275\u0275elementStart(26, "span", 19);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 23);
      \u0275\u0275listener("click", function AnalyticsHeaderComponent_Template_button_click_28_listener() {
        return ctx.onExport();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 14);
      \u0275\u0275element(30, "path", 24)(31, "polyline", 25)(32, "line", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "span", 19);
      \u0275\u0275text(34, "Export Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "button", 23);
      \u0275\u0275listener("click", function AnalyticsHeaderComponent_Template_button_click_35_listener() {
        return ctx.onSchedule();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(36, "svg", 14);
      \u0275\u0275element(37, "circle", 27)(38, "path", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "span", 19);
      \u0275\u0275text(40, "Schedule Updates");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.lastUpdated);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isLoading || ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isGenerating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isGenerating);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isGenerating ? "Generating..." : "Generate New");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading || !ctx.hasData);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, DatePipe], styles: ["\n\n.analytics-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  flex: 1;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4rem;\n  height: 4rem;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  border-radius: 1rem;\n  color: white;\n  flex-shrink: 0;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.2;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 42rem;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%]   .update-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #3b82f6;\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  text-decoration: none;\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border-color: #3b82f6;\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8 0%,\n      #1e40af 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3), 0 2px 4px -1px rgba(59, 130, 246, 0.2);\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  transform: translateY(-1px);\n}\n.analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 1rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-main[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n    gap: 0.75rem;\n  }\n  .analytics-header[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=analytics-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-analytics-header", standalone: true, imports: [CommonModule], template: `
    <div class="analytics-header">
      <!-- Main Header -->
      <div class="header-content">
        <div class="header-main">
          <div class="header-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"></path>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <div class="header-text">
            <h1 class="header-title">AI Asset Analytics</h1>
            <p class="header-description">
              AI-powered insights and comprehensive analytics for your asset portfolio. 
              Get intelligent recommendations to optimize performance and reduce costs.
            </p>
          </div>
        </div>
        
        <!-- Last Updated -->
        <div class="last-updated" *ngIf="lastUpdated">
          <svg class="update-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <span>Last updated {{ lastUpdated | date:'short' }}</span>
        </div>
      </div>

      <!-- Action Bar -->
      <div class="action-bar">
        <div class="action-buttons">
          <button
            class="btn btn-secondary"
            (click)="onRefresh()"
            [disabled]="isLoading">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            <span class="btn-text">Refresh Analysis</span>
          </button>

          <button
            class="btn btn-primary"
            (click)="onGenerate()"
            [disabled]="isLoading || isGenerating">
            <svg *ngIf="!isGenerating" class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            <svg *ngIf="isGenerating" class="btn-icon animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12a9 9 0 11-6.219-8.56"></path>
            </svg>
            <span class="btn-text">{{ isGenerating ? 'Generating...' : 'Generate New' }}</span>
          </button>

          <button
            class="btn btn-outline"
            (click)="onExport()"
            [disabled]="isLoading || !hasData">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span class="btn-text">Export Report</span>
          </button>

          <button
            class="btn btn-outline"
            (click)="onSchedule()"
            [disabled]="isLoading">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span class="btn-text">Schedule Updates</span>
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-analytics/analytics-header.component.scss */\n.analytics-header {\n  margin-bottom: 2rem;\n}\n.analytics-header .header-content {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n.analytics-header .header-content .header-main {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  flex: 1;\n}\n.analytics-header .header-content .header-main .header-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4rem;\n  height: 4rem;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  border-radius: 1rem;\n  color: white;\n  flex-shrink: 0;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06);\n}\n.analytics-header .header-content .header-main .header-icon svg {\n  width: 2rem;\n  height: 2rem;\n}\n.analytics-header .header-content .header-main .header-text {\n  flex: 1;\n}\n.analytics-header .header-content .header-main .header-text .header-title {\n  font-size: 2.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.2;\n}\n.analytics-header .header-content .header-main .header-text .header-description {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 42rem;\n}\n.analytics-header .header-content .last-updated {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.analytics-header .header-content .last-updated .update-icon {\n  width: 1rem;\n  height: 1rem;\n  color: #3b82f6;\n}\n.analytics-header .action-bar .action-buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.analytics-header .action-bar .action-buttons .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  text-decoration: none;\n}\n.analytics-header .action-bar .action-buttons .btn .btn-icon {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.analytics-header .action-bar .action-buttons .btn .btn-text {\n  white-space: nowrap;\n}\n.analytics-header .action-bar .action-buttons .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.analytics-header .action-bar .action-buttons .btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border-color: #3b82f6;\n}\n.analytics-header .action-bar .action-buttons .btn.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8 0%,\n      #1e40af 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3), 0 2px 4px -1px rgba(59, 130, 246, 0.2);\n}\n.analytics-header .action-bar .action-buttons .btn.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.analytics-header .action-bar .action-buttons .btn.btn-secondary {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.analytics-header .action-bar .action-buttons .btn.btn-secondary:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.analytics-header .action-bar .action-buttons .btn.btn-secondary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.analytics-header .action-bar .action-buttons .btn.btn-outline {\n  background: transparent;\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.analytics-header .action-bar .action-buttons .btn.btn-outline:hover:not(:disabled) {\n  background: #f3f4f6;\n  transform: translateY(-1px);\n}\n.analytics-header .action-bar .action-buttons .btn.btn-outline:active:not(:disabled) {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .analytics-header .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .analytics-header .header-content .header-main {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 1rem;\n  }\n  .analytics-header .header-content .header-main .header-icon {\n    width: 3rem;\n    height: 3rem;\n  }\n  .analytics-header .header-content .header-main .header-icon svg {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n  .analytics-header .header-content .header-main .header-text .header-title {\n    font-size: 1.875rem;\n  }\n  .analytics-header .header-content .header-main .header-text .header-description {\n    font-size: 1rem;\n  }\n  .analytics-header .header-content .last-updated {\n    align-self: center;\n  }\n  .analytics-header .action-bar .action-buttons {\n    justify-content: center;\n    gap: 0.75rem;\n  }\n  .analytics-header .action-bar .action-buttons .btn {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=analytics-header.component.css.map */\n"] }]
  }], null, { lastUpdated: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], isGenerating: [{
    type: Input
  }], hasData: [{
    type: Input
  }], refresh: [{
    type: Output
  }], generate: [{
    type: Output
  }], export: [{
    type: Output
  }], schedule: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsHeaderComponent, { className: "AnalyticsHeaderComponent", filePath: "src/app/ai-features/components/ai-analytics/analytics-header.component.ts", lineNumber: 95 });
})();

// src/app/ai-features/shared/ai-analytics.service.ts
var AIAnalyticsService = class _AIAnalyticsService {
  http;
  apiUrl = `${environment.apiUrl}/ai/analytics`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get latest analytics and history
   */
  getAnalytics() {
    return this.http.get(`${this.apiUrl}`);
  }
  /**
   * Generate new analytics
   */
  generateAnalytics() {
    return this.http.post(`${this.apiUrl}/generate`, {});
  }
  /**
   * Export analytics to CSV
   */
  exportAnalytics() {
    return this.http.get(`${this.apiUrl}/export`, {
      responseType: "blob"
    });
  }
  /**
   * Get schedule settings
   */
  getScheduleSettings() {
    return this.http.get(`${this.apiUrl}/schedule`);
  }
  /**
   * Update schedule settings
   */
  updateScheduleSettings(settings) {
    return this.http.post(`${this.apiUrl}/schedule`, settings);
  }
  /**
   * Download CSV file
   */
  downloadCsv(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  /**
   * Get health score label
   */
  getHealthScoreLabel(score) {
    if (score >= 90)
      return "Excellent";
    if (score >= 80)
      return "Good";
    if (score >= 70)
      return "Fair";
    if (score >= 60)
      return "Poor";
    return "Critical";
  }
  /**
   * Get health score color class
   */
  getHealthScoreColorClass(score) {
    if (score >= 90)
      return "health-excellent";
    if (score >= 80)
      return "health-good";
    if (score >= 70)
      return "health-fair";
    if (score >= 60)
      return "health-poor";
    return "health-critical";
  }
  /**
   * Get risk level color class
   */
  getRiskLevelColorClass(riskLevel) {
    const colorMap = {
      "high": "risk-high",
      "medium": "risk-medium",
      "low": "risk-low"
    };
    return colorMap[riskLevel] || "risk-medium";
  }
  /**
   * Get impact color class
   */
  getImpactColorClass(impact) {
    const colorMap = {
      "high": "impact-high",
      "medium": "impact-medium",
      "low": "impact-low"
    };
    return colorMap[impact] || "impact-medium";
  }
  /**
   * Get category icon
   */
  getCategoryIcon(category) {
    const iconMap = {
      "utilization": "activity",
      "efficiency": "trending-up",
      "maintenance": "wrench",
      "cost": "dollar-sign",
      "energy": "zap",
      "vendor": "truck",
      "lifecycle": "refresh-cw"
    };
    return iconMap[category] || "help-circle";
  }
  /**
   * Get frequency display name
   */
  getFrequencyDisplayName(frequency) {
    const nameMap = {
      "daily": "Daily",
      "weekly": "Weekly",
      "monthly": "Monthly"
    };
    return nameMap[frequency] || "Weekly";
  }
  /**
   * Filter analytics data
   */
  filterAnalyticsData(data, filters) {
    if (!data)
      return data;
    const filteredData = __spreadValues({}, data);
    if (data.riskAssets && Array.isArray(data.riskAssets)) {
      filteredData.riskAssets = data.riskAssets.filter((asset) => {
        if (filters.riskLevel && asset.riskLevel !== filters.riskLevel)
          return false;
        if (filters.minConfidence && asset.confidence < filters.minConfidence)
          return false;
        if (filters.search && !asset.name.toLowerCase().includes(filters.search.toLowerCase()))
          return false;
        return true;
      });
    }
    if (data.performanceInsights && Array.isArray(data.performanceInsights)) {
      filteredData.performanceInsights = data.performanceInsights.filter((insight) => {
        if (filters.impact && insight.impact !== filters.impact)
          return false;
        if (filters.minConfidence && insight.confidence < filters.minConfidence)
          return false;
        if (filters.category && insight.category !== filters.category)
          return false;
        if (filters.search && !insight.title.toLowerCase().includes(filters.search.toLowerCase()))
          return false;
        return true;
      });
    }
    if (data.costOptimizations && Array.isArray(data.costOptimizations)) {
      filteredData.costOptimizations = data.costOptimizations.filter((optimization) => {
        if (filters.minConfidence && optimization.confidence < filters.minConfidence)
          return false;
        if (filters.category && optimization.category !== filters.category)
          return false;
        if (filters.search && !optimization.title.toLowerCase().includes(filters.search.toLowerCase()))
          return false;
        return true;
      });
    }
    return filteredData;
  }
  static \u0275fac = function AIAnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIAnalyticsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AIAnalyticsService, factory: _AIAnalyticsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIAnalyticsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/ai-features/components/ai-analytics/health-score-card.component.ts
function HealthScoreCardComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, " Your asset portfolio is in excellent condition with minimal maintenance needs and optimal performance. ");
    \u0275\u0275elementEnd();
  }
}
function HealthScoreCardComponent_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, " Your assets are performing well with good maintenance practices. Consider minor optimizations. ");
    \u0275\u0275elementEnd();
  }
}
function HealthScoreCardComponent_p_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, " Your assets are in fair condition. Some maintenance improvements and optimizations are recommended. ");
    \u0275\u0275elementEnd();
  }
}
function HealthScoreCardComponent_p_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, " Your assets need attention. Immediate maintenance and performance improvements are recommended. ");
    \u0275\u0275elementEnd();
  }
}
function HealthScoreCardComponent_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, " Critical attention required. Your assets need immediate maintenance and performance improvements. ");
    \u0275\u0275elementEnd();
  }
}
var HealthScoreCardComponent = class _HealthScoreCardComponent {
  analyticsService;
  healthScore = 0;
  avgAssetAge = 0;
  maintenanceStatus = "Good";
  performanceStatus = "Optimal";
  conditionStatus = "Excellent";
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  getHealthScoreLabel(score) {
    return this.analyticsService.getHealthScoreLabel(score);
  }
  getHealthScoreColorClass(score) {
    return this.analyticsService.getHealthScoreColorClass(score);
  }
  formatHealthScore(score) {
    return Math.round(score * 10) / 10 + "";
  }
  formatAssetAge(age) {
    if (!age || age === 0)
      return "N/A";
    const rounded = Math.round(age * 10) / 10;
    return `${rounded} years`;
  }
  getStatusColorClass(status) {
    const normalized = status.toLowerCase();
    if (normalized === "excellent" || normalized === "optimal")
      return "status-excellent";
    if (normalized === "good")
      return "status-good";
    if (normalized === "fair")
      return "status-fair";
    if (normalized === "poor" || normalized === "critical")
      return "status-poor";
    return "";
  }
  static \u0275fac = function HealthScoreCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HealthScoreCardComponent)(\u0275\u0275directiveInject(AIAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HealthScoreCardComponent, selectors: [["app-health-score-card"]], inputs: { healthScore: "healthScore", avgAssetAge: "avgAssetAge", maintenanceStatus: "maintenanceStatus", performanceStatus: "performanceStatus", conditionStatus: "conditionStatus" }, decls: 41, vars: 19, consts: [[1, "health-score-card"], [1, "card-header"], [1, "card-title"], [1, "score-label", 3, "ngClass"], [1, "score-display"], [1, "score-circle", 3, "ngClass"], [1, "score-value"], [1, "score-percent"], [1, "score-details"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "detail-value", 3, "ngClass"], [1, "progress-bar"], [1, "progress-fill", 3, "ngClass"], [1, "health-description"], ["class", "description-text", 4, "ngIf"], [1, "description-text"]], template: function HealthScoreCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Overall Asset Health Score");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11, "%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "span", 10);
      \u0275\u0275text(15, "Asset Age");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 11);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9)(19, "span", 10);
      \u0275\u0275text(20, "Maintenance Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 12);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 9)(24, "span", 10);
      \u0275\u0275text(25, "Performance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 12);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 9)(29, "span", 10);
      \u0275\u0275text(30, "Condition");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 12);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 13);
      \u0275\u0275element(34, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 15);
      \u0275\u0275template(36, HealthScoreCardComponent_p_36_Template, 2, 0, "p", 16)(37, HealthScoreCardComponent_p_37_Template, 2, 0, "p", 16)(38, HealthScoreCardComponent_p_38_Template, 2, 0, "p", 16)(39, HealthScoreCardComponent_p_39_Template, 2, 0, "p", 16)(40, HealthScoreCardComponent_p_40_Template, 2, 0, "p", 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.getHealthScoreColorClass(ctx.healthScore));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getHealthScoreLabel(ctx.healthScore), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.getHealthScoreColorClass(ctx.healthScore));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.formatHealthScore(ctx.healthScore));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.formatAssetAge(ctx.avgAssetAge));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.getStatusColorClass(ctx.maintenanceStatus));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.maintenanceStatus);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.getStatusColorClass(ctx.performanceStatus));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.performanceStatus);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.getStatusColorClass(ctx.conditionStatus));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.conditionStatus);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.healthScore, "%");
      \u0275\u0275property("ngClass", ctx.getHealthScoreColorClass(ctx.healthScore));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.healthScore >= 90);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.healthScore >= 80 && ctx.healthScore < 90);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.healthScore >= 70 && ctx.healthScore < 80);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.healthScore >= 60 && ctx.healthScore < 70);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.healthScore < 60);
    }
  }, dependencies: [CommonModule, NgClass, NgIf], styles: ["\n\n.health-score-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.health-score-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.health-score-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n.health-score-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.health-score-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.health-score-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .score-label.health-excellent[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.health-score-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .score-label.health-good[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.health-score-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .score-label.health-fair[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.health-score-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .score-label.health-poor[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n}\n.health-score-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .score-label.health-critical[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #991b1b;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 5.5rem;\n  height: 5.5rem;\n  border-radius: 50%;\n  position: relative;\n  flex-shrink: 0;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle.health-excellent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #166534;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle.health-good[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #1e40af;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle.health-fair[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #d97706;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle.health-poor[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca 0%,\n      #fca5a5 100%);\n  color: #dc2626;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle.health-critical[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca 0%,\n      #f87171 100%);\n  color: #991b1b;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-percent[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-left: 0.25rem;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-details[_ngcontent-%COMP%] {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.status-excellent[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.status-good[_ngcontent-%COMP%] {\n  color: #1e40af;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.status-fair[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.status-poor[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.health-score-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0.5rem;\n  background: #e5e7eb;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  margin-bottom: 1.5rem;\n}\n.health-score-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.health-score-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.health-excellent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e 0%,\n      #16a34a 100%);\n}\n.health-score-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.health-good[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n}\n.health-score-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.health-fair[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n.health-score-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.health-poor[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ef4444 0%,\n      #dc2626 100%);\n}\n.health-score-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.health-critical[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #dc2626 0%,\n      #991b1b 100%);\n}\n.health-score-card[_ngcontent-%COMP%]   .health-description[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .health-score-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .health-score-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n    text-align: center;\n  }\n  .health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 1.5rem;\n  }\n  .health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%] {\n    width: 4.5rem;\n    height: 4.5rem;\n  }\n  .health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-percent[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .health-score-card[_ngcontent-%COMP%]   .score-display[_ngcontent-%COMP%]   .score-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n/*# sourceMappingURL=health-score-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HealthScoreCardComponent, [{
    type: Component,
    args: [{ selector: "app-health-score-card", standalone: true, imports: [CommonModule], template: `
    <div class="health-score-card">
      <div class="card-header">
        <h3 class="card-title">Overall Asset Health Score</h3>
        <div class="score-label" [ngClass]="getHealthScoreColorClass(healthScore)">
          {{ getHealthScoreLabel(healthScore) }}
        </div>
      </div>

      <div class="score-display">
        <div class="score-circle" [ngClass]="getHealthScoreColorClass(healthScore)">
          <div class="score-value">{{ formatHealthScore(healthScore) }}</div>
          <div class="score-percent">%</div>
        </div>
        
        <div class="score-details">
          <div class="detail-item">
            <span class="detail-label">Asset Age</span>
            <span class="detail-value">{{ formatAssetAge(avgAssetAge) }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Maintenance Status</span>
            <span class="detail-value" [ngClass]="getStatusColorClass(maintenanceStatus)">{{ maintenanceStatus }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Performance</span>
            <span class="detail-value" [ngClass]="getStatusColorClass(performanceStatus)">{{ performanceStatus }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Condition</span>
            <span class="detail-value" [ngClass]="getStatusColorClass(conditionStatus)">{{ conditionStatus }}</span>
          </div>
        </div>
      </div>

      <div class="progress-bar">
        <div 
          class="progress-fill" 
          [ngClass]="getHealthScoreColorClass(healthScore)"
          [style.width.%]="healthScore">
        </div>
      </div>

      <div class="health-description">
        <p *ngIf="healthScore >= 90" class="description-text">
          Your asset portfolio is in excellent condition with minimal maintenance needs and optimal performance.
        </p>
        <p *ngIf="healthScore >= 80 && healthScore < 90" class="description-text">
          Your assets are performing well with good maintenance practices. Consider minor optimizations.
        </p>
        <p *ngIf="healthScore >= 70 && healthScore < 80" class="description-text">
          Your assets are in fair condition. Some maintenance improvements and optimizations are recommended.
        </p>
        <p *ngIf="healthScore >= 60 && healthScore < 70" class="description-text">
          Your assets need attention. Immediate maintenance and performance improvements are recommended.
        </p>
        <p *ngIf="healthScore < 60" class="description-text">
          Critical attention required. Your assets need immediate maintenance and performance improvements.
        </p>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-analytics/health-score-card.component.scss */\n.health-score-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.health-score-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.health-score-card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n.health-score-card .card-header .card-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.health-score-card .card-header .score-label {\n  padding: 0.5rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.health-score-card .card-header .score-label.health-excellent {\n  background: #dcfce7;\n  color: #166534;\n}\n.health-score-card .card-header .score-label.health-good {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.health-score-card .card-header .score-label.health-fair {\n  background: #fef3c7;\n  color: #d97706;\n}\n.health-score-card .card-header .score-label.health-poor {\n  background: #fecaca;\n  color: #dc2626;\n}\n.health-score-card .card-header .score-label.health-critical {\n  background: #fecaca;\n  color: #991b1b;\n}\n.health-score-card .score-display {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.health-score-card .score-display .score-circle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 5.5rem;\n  height: 5.5rem;\n  border-radius: 50%;\n  position: relative;\n  flex-shrink: 0;\n}\n.health-score-card .score-display .score-circle.health-excellent {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #166534;\n}\n.health-score-card .score-display .score-circle.health-good {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #1e40af;\n}\n.health-score-card .score-display .score-circle.health-fair {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #d97706;\n}\n.health-score-card .score-display .score-circle.health-poor {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca 0%,\n      #fca5a5 100%);\n  color: #dc2626;\n}\n.health-score-card .score-display .score-circle.health-critical {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca 0%,\n      #f87171 100%);\n  color: #991b1b;\n}\n.health-score-card .score-display .score-circle .score-value {\n  font-size: 1.75rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.health-score-card .score-display .score-circle .score-percent {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-left: 0.25rem;\n}\n.health-score-card .score-display .score-details {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.health-score-card .score-display .score-details .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.health-score-card .score-display .score-details .detail-item .detail-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.health-score-card .score-display .score-details .detail-item .detail-value {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.health-score-card .score-display .score-details .detail-item .detail-value.status-excellent {\n  color: #166534;\n}\n.health-score-card .score-display .score-details .detail-item .detail-value.status-good {\n  color: #1e40af;\n}\n.health-score-card .score-display .score-details .detail-item .detail-value.status-fair {\n  color: #d97706;\n}\n.health-score-card .score-display .score-details .detail-item .detail-value.status-poor {\n  color: #dc2626;\n}\n.health-score-card .progress-bar {\n  width: 100%;\n  height: 0.5rem;\n  background: #e5e7eb;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  margin-bottom: 1.5rem;\n}\n.health-score-card .progress-bar .progress-fill {\n  height: 100%;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.health-score-card .progress-bar .progress-fill.health-excellent {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e 0%,\n      #16a34a 100%);\n}\n.health-score-card .progress-bar .progress-fill.health-good {\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n}\n.health-score-card .progress-bar .progress-fill.health-fair {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n.health-score-card .progress-bar .progress-fill.health-poor {\n  background:\n    linear-gradient(\n      90deg,\n      #ef4444 0%,\n      #dc2626 100%);\n}\n.health-score-card .progress-bar .progress-fill.health-critical {\n  background:\n    linear-gradient(\n      90deg,\n      #dc2626 0%,\n      #991b1b 100%);\n}\n.health-score-card .health-description .description-text {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .health-score-card {\n    padding: 1.5rem;\n  }\n  .health-score-card .card-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n    text-align: center;\n  }\n  .health-score-card .score-display {\n    flex-direction: column;\n    text-align: center;\n    gap: 1.5rem;\n  }\n  .health-score-card .score-display .score-circle {\n    width: 4.5rem;\n    height: 4.5rem;\n  }\n  .health-score-card .score-display .score-circle .score-value {\n    font-size: 1.5rem;\n  }\n  .health-score-card .score-display .score-circle .score-percent {\n    font-size: 0.75rem;\n  }\n  .health-score-card .score-display .score-details {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n/*# sourceMappingURL=health-score-card.component.css.map */\n"] }]
  }], () => [{ type: AIAnalyticsService }], { healthScore: [{
    type: Input
  }], avgAssetAge: [{
    type: Input
  }], maintenanceStatus: [{
    type: Input
  }], performanceStatus: [{
    type: Input
  }], conditionStatus: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HealthScoreCardComponent, { className: "HealthScoreCardComponent", filePath: "src/app/ai-features/components/ai-analytics/health-score-card.component.ts", lineNumber: 73 });
})();

// src/app/ai-features/components/ai-analytics/risk-assets.component.ts
function RiskAssetsComponent_div_6_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2, "Est. Cost:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, asset_r2.estimatedCost, "AED", "symbol", "1.2-2"));
  }
}
function RiskAssetsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 15);
    \u0275\u0275element(12, "path", 16)(13, "path", 17)(14, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, RiskAssetsComponent_div_6_div_1_div_16_Template, 6, 6, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 20)(18, "button", 21);
    \u0275\u0275listener("click", function RiskAssetsComponent_div_6_div_1_Template_button_click_18_listener() {
      const asset_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onScheduleMaintenance(asset_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 22);
    \u0275\u0275element(20, "circle", 23)(21, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Schedule Maintenance ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 25);
    \u0275\u0275listener("click", function RiskAssetsComponent_div_6_div_1_Template_button_click_23_listener() {
      const asset_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCreateWorkOrder(asset_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 22);
    \u0275\u0275element(25, "path", 26)(26, "polyline", 27)(27, "line", 28)(28, "line", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Create Work Order ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 30)(31, "strong");
    \u0275\u0275text(32, "Recommended Action:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "risk-" + asset_r2.riskLevel);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(asset_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getRiskLevelColorClass(asset_r2.riskLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, asset_r2.riskLevel), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(asset_r2.reason);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", asset_r2.confidence, "% ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", asset_r2.estimatedCost);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1(" ", asset_r2.recommendedAction, " ");
  }
}
function RiskAssetsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, RiskAssetsComponent_div_6_div_1_Template, 34, 10, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.riskAssets);
  }
}
function RiskAssetsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "path", 36)(3, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 38);
    \u0275\u0275text(5, "No High-Risk Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 39);
    \u0275\u0275text(7, " Great! Your assets are currently in good condition with no high-risk items identified. ");
    \u0275\u0275elementEnd()();
  }
}
var RiskAssetsComponent = class _RiskAssetsComponent {
  analyticsService;
  riskAssets = [];
  scheduleMaintenance = new EventEmitter();
  createWorkOrder = new EventEmitter();
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  getRiskLevelColorClass(riskLevel) {
    return this.analyticsService.getRiskLevelColorClass(riskLevel);
  }
  onScheduleMaintenance(asset) {
    this.scheduleMaintenance.emit(asset);
  }
  onCreateWorkOrder(asset) {
    this.createWorkOrder.emit(asset);
  }
  static \u0275fac = function RiskAssetsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RiskAssetsComponent)(\u0275\u0275directiveInject(AIAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RiskAssetsComponent, selectors: [["app-risk-assets"]], inputs: { riskAssets: "riskAssets" }, outputs: { scheduleMaintenance: "scheduleMaintenance", createWorkOrder: "createWorkOrder" }, decls: 9, vars: 3, consts: [["emptyState", ""], [1, "risk-assets-card"], [1, "card-header"], [1, "card-title"], [1, "asset-count"], ["class", "assets-list", 4, "ngIf", "ngIfElse"], [1, "assets-list"], ["class", "asset-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "asset-item", 3, "ngClass"], [1, "asset-header"], [1, "asset-name"], [1, "risk-badge", 3, "ngClass"], [1, "asset-reason"], [1, "asset-details"], [1, "confidence-chip"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"], ["d", "M12 16V12"], ["d", "M12 8H12.01"], ["class", "cost-info", 4, "ngIf"], [1, "asset-actions"], [1, "action-btn", "primary", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], [1, "action-btn", "secondary", 3, "click"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14,2 14,8 20,8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], [1, "recommended-action"], [1, "cost-info"], [1, "cost-label"], [1, "cost-value"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "empty-icon"], ["d", "M9 12l2 2 4-4"], ["d", "M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"], [1, "empty-title"], [1, "empty-description"]], template: function RiskAssetsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
      \u0275\u0275text(3, "High-Risk Assets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, RiskAssetsComponent_div_6_Template, 2, 1, "div", 5)(7, RiskAssetsComponent_ng_template_7_Template, 8, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const emptyState_r4 = \u0275\u0275reference(8);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.riskAssets.length, " assets");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.riskAssets.length > 0)("ngIfElse", emptyState_r4);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, CurrencyPipe], styles: ["\n\n.risk-assets-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.risk-assets-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .asset-count[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item.risk-high[_ngcontent-%COMP%] {\n  border-left: 4px solid #dc2626;\n  background: #fef2f2;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item.risk-medium[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n  background: #fffbeb;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item.risk-low[_ngcontent-%COMP%] {\n  border-left: 4px solid #22c55e;\n  background: #f0fdf4;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-header[_ngcontent-%COMP%]   .asset-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-header[_ngcontent-%COMP%]   .risk-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-header[_ngcontent-%COMP%]   .risk-badge.risk-high[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-header[_ngcontent-%COMP%]   .risk-badge.risk-medium[_ngcontent-%COMP%] {\n  background: #fde68a;\n  color: #d97706;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-header[_ngcontent-%COMP%]   .risk-badge.risk-low[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n  color: #166534;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-reason[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 0.75rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%]   .confidence-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: #e0e7ff;\n  color: #4338ca;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%]   .confidence-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%]   .cost-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%]   .cost-info[_ngcontent-%COMP%]   .cost-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%]   .cost-info[_ngcontent-%COMP%]   .cost-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .recommended-action[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n  line-height: 1.5;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 0.5rem;\n  border: 1px solid #e2e8f0;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  text-align: center;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.risk-assets-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .risk-assets-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .risk-assets-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .risk-assets-card[_ngcontent-%COMP%]   .assets-list[_ngcontent-%COMP%]   .asset-item[_ngcontent-%COMP%]   .asset-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=risk-assets.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RiskAssetsComponent, [{
    type: Component,
    args: [{ selector: "app-risk-assets", standalone: true, imports: [CommonModule], template: `
    <div class="risk-assets-card">
      <div class="card-header">
        <h3 class="card-title">High-Risk Assets</h3>
        <div class="asset-count">{{ riskAssets.length }} assets</div>
      </div>

      <div class="assets-list" *ngIf="riskAssets.length > 0; else emptyState">
        <div 
          *ngFor="let asset of riskAssets" 
          class="asset-item"
          [ngClass]="'risk-' + asset.riskLevel">
          <div class="asset-header">
            <div class="asset-name">{{ asset.name }}</div>
            <div class="risk-badge" [ngClass]="getRiskLevelColorClass(asset.riskLevel)">
              {{ asset.riskLevel | titlecase }}
            </div>
          </div>
          
          <div class="asset-reason">{{ asset.reason }}</div>
          
          <div class="asset-details">
            <div class="confidence-chip">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
                <path d="M12 16V12"></path>
                <path d="M12 8H12.01"></path>
              </svg>
              {{ asset.confidence }}%
            </div>
            
            <div class="cost-info" *ngIf="asset.estimatedCost">
              <span class="cost-label">Est. Cost:</span>
              <span class="cost-value">{{ asset.estimatedCost | currency:'AED':'symbol':'1.2-2' }}</span>
            </div>
          </div>

          <div class="asset-actions">
            <button 
              class="action-btn primary"
              (click)="onScheduleMaintenance(asset)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              Schedule Maintenance
            </button>
            
            <button 
              class="action-btn secondary"
              (click)="onCreateWorkOrder(asset)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              Create Work Order
            </button>
          </div>

          <div class="recommended-action">
            <strong>Recommended Action:</strong> {{ asset.recommendedAction }}
          </div>
        </div>
      </div>

      <ng-template #emptyState>
        <div class="empty-state">
          <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 12l2 2 4-4"></path>
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
          </svg>
          <h4 class="empty-title">No High-Risk Assets</h4>
          <p class="empty-description">
            Great! Your assets are currently in good condition with no high-risk items identified.
          </p>
        </div>
      </ng-template>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-analytics/risk-assets.component.scss */\n.risk-assets-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.risk-assets-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.risk-assets-card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.risk-assets-card .card-header .card-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.risk-assets-card .card-header .asset-count {\n  padding: 0.25rem 0.75rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.risk-assets-card .assets-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.risk-assets-card .assets-list .asset-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.risk-assets-card .assets-list .asset-item:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);\n}\n.risk-assets-card .assets-list .asset-item.risk-high {\n  border-left: 4px solid #dc2626;\n  background: #fef2f2;\n}\n.risk-assets-card .assets-list .asset-item.risk-medium {\n  border-left: 4px solid #f59e0b;\n  background: #fffbeb;\n}\n.risk-assets-card .assets-list .asset-item.risk-low {\n  border-left: 4px solid #22c55e;\n  background: #f0fdf4;\n}\n.risk-assets-card .assets-list .asset-item .asset-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.risk-assets-card .assets-list .asset-item .asset-header .asset-name {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.risk-assets-card .assets-list .asset-item .asset-header .risk-badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.risk-assets-card .assets-list .asset-item .asset-header .risk-badge.risk-high {\n  background: #fecaca;\n  color: #dc2626;\n}\n.risk-assets-card .assets-list .asset-item .asset-header .risk-badge.risk-medium {\n  background: #fde68a;\n  color: #d97706;\n}\n.risk-assets-card .assets-list .asset-item .asset-header .risk-badge.risk-low {\n  background: #bbf7d0;\n  color: #166534;\n}\n.risk-assets-card .assets-list .asset-item .asset-reason {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 0.75rem;\n}\n.risk-assets-card .assets-list .asset-item .asset-details {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.risk-assets-card .assets-list .asset-item .asset-details .confidence-chip {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: #e0e7ff;\n  color: #4338ca;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.risk-assets-card .assets-list .asset-item .asset-details .confidence-chip svg {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.risk-assets-card .assets-list .asset-item .asset-details .cost-info {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n}\n.risk-assets-card .assets-list .asset-item .asset-details .cost-info .cost-label {\n  color: #6b7280;\n}\n.risk-assets-card .assets-list .asset-item .asset-details .cost-info .cost-value {\n  font-weight: 600;\n  color: #1f2937;\n}\n.risk-assets-card .assets-list .asset-item .asset-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n}\n.risk-assets-card .assets-list .asset-item .asset-actions .action-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.risk-assets-card .assets-list .asset-item .asset-actions .action-btn.primary {\n  background: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.risk-assets-card .assets-list .asset-item .asset-actions .action-btn.primary:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n}\n.risk-assets-card .assets-list .asset-item .asset-actions .action-btn.secondary {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.risk-assets-card .assets-list .asset-item .asset-actions .action-btn.secondary:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.risk-assets-card .assets-list .asset-item .asset-actions .action-btn svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.risk-assets-card .assets-list .asset-item .recommended-action {\n  font-size: 0.875rem;\n  color: #374151;\n  line-height: 1.5;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 0.5rem;\n  border: 1px solid #e2e8f0;\n}\n.risk-assets-card .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  text-align: center;\n}\n.risk-assets-card .empty-state .empty-icon {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.risk-assets-card .empty-state .empty-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.risk-assets-card .empty-state .empty-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .risk-assets-card {\n    padding: 1rem;\n  }\n  .risk-assets-card .card-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .risk-assets-card .assets-list .asset-item .asset-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .risk-assets-card .assets-list .asset-item .asset-details {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .risk-assets-card .assets-list .asset-item .asset-actions {\n    flex-direction: column;\n  }\n  .risk-assets-card .assets-list .asset-item .asset-actions .action-btn {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=risk-assets.component.css.map */\n"] }]
  }], () => [{ type: AIAnalyticsService }], { riskAssets: [{
    type: Input
  }], scheduleMaintenance: [{
    type: Output
  }], createWorkOrder: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RiskAssetsComponent, { className: "RiskAssetsComponent", filePath: "src/app/ai-features/components/ai-analytics/risk-assets.component.ts", lineNumber: 93 });
})();

// src/app/ai-features/components/ai-analytics/performance-insights.component.ts
function PerformanceInsightsComponent_div_6_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const insight_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, insight_r2.category), " ");
  }
}
function PerformanceInsightsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 11);
    \u0275\u0275element(4, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 15)(13, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 17);
    \u0275\u0275element(15, "path", 18)(16, "path", 19)(17, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, PerformanceInsightsComponent_div_6_div_1_div_19_Template, 3, 3, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 22)(21, "div", 23)(22, "strong");
    \u0275\u0275text(23, "Recommended Action:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 24);
    \u0275\u0275listener("click", function PerformanceInsightsComponent_div_6_div_1_Template_button_click_25_listener() {
      const insight_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onViewDetails(insight_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 25);
    \u0275\u0275element(27, "path", 26)(28, "circle", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " View Details ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const insight_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "impact-" + insight_r2.impact);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("d", ctx_r2.getCategoryIconPath(insight_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(insight_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getImpactColorClass(insight_r2.impact));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, insight_r2.impact), " Impact ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(insight_r2.description);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", insight_r2.confidence, "% ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", insight_r2.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", insight_r2.action, " ");
  }
}
function PerformanceInsightsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, PerformanceInsightsComponent_div_6_div_1_Template, 30, 11, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.performanceInsights);
  }
}
function PerformanceInsightsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 31)(3, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 33);
    \u0275\u0275text(5, "No Performance Insights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 34);
    \u0275\u0275text(7, " Generate analytics to get AI-powered performance insights for your assets. ");
    \u0275\u0275elementEnd()();
  }
}
var PerformanceInsightsComponent = class _PerformanceInsightsComponent {
  analyticsService;
  performanceInsights = [];
  viewDetails = new EventEmitter();
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  getImpactColorClass(impact) {
    return this.analyticsService.getImpactColorClass(impact);
  }
  getCategoryIconPath(category) {
    const iconMap = {
      "utilization": "M22 12h-4l-3 9L9 3l-3 9H2",
      "efficiency": "M3 3v18h18M18 17V9M13 17V5M8 17v-3",
      "maintenance": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      "cost": "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
    };
    const iconName = this.analyticsService.getCategoryIcon(category || "");
    return iconMap[iconName] || iconMap["help-circle"];
  }
  onViewDetails(insight) {
    this.viewDetails.emit(insight);
  }
  static \u0275fac = function PerformanceInsightsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PerformanceInsightsComponent)(\u0275\u0275directiveInject(AIAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerformanceInsightsComponent, selectors: [["app-performance-insights"]], inputs: { performanceInsights: "performanceInsights" }, outputs: { viewDetails: "viewDetails" }, decls: 9, vars: 3, consts: [["emptyState", ""], [1, "insights-card"], [1, "card-header"], [1, "card-title"], [1, "insights-count"], ["class", "insights-list", 4, "ngIf", "ngIfElse"], [1, "insights-list"], ["class", "insight-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "insight-item", 3, "ngClass"], [1, "insight-header"], [1, "insight-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "insight-title"], [1, "impact-badge", 3, "ngClass"], [1, "insight-description"], [1, "insight-details"], [1, "confidence-chip"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"], ["d", "M12 16V12"], ["d", "M12 8H12.01"], ["class", "category-badge", 4, "ngIf"], [1, "insight-action"], [1, "action-text"], [1, "action-btn", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "category-badge"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "empty-icon"], ["d", "M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "empty-title"], [1, "empty-description"]], template: function PerformanceInsightsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
      \u0275\u0275text(3, "Performance Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, PerformanceInsightsComponent_div_6_Template, 2, 1, "div", 5)(7, PerformanceInsightsComponent_ng_template_7_Template, 8, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const emptyState_r4 = \u0275\u0275reference(8);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.performanceInsights.length, " insights");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.performanceInsights.length > 0)("ngIfElse", emptyState_r4);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe], styles: ["\n\n.insights-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.insights-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.insights-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.insights-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.insights-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .insights-count[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item.impact-high[_ngcontent-%COMP%] {\n  border-left: 4px solid #dc2626;\n  background: #fef2f2;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item.impact-medium[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n  background: #fffbeb;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item.impact-low[_ngcontent-%COMP%] {\n  border-left: 4px solid #22c55e;\n  background: #f0fdf4;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%]   .insight-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  background: #f3f4f6;\n  border-radius: 0.5rem;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%]   .insight-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%]   .insight-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%]   .impact-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%]   .impact-badge.impact-high[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #dc2626;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%]   .impact-badge.impact-medium[_ngcontent-%COMP%] {\n  background: #fde68a;\n  color: #d97706;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%]   .impact-badge.impact-low[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n  color: #166534;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 0.75rem;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-details[_ngcontent-%COMP%]   .confidence-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: #e0e7ff;\n  color: #4338ca;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-details[_ngcontent-%COMP%]   .confidence-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-details[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 0.5rem;\n  border: 1px solid #e2e8f0;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-action[_ngcontent-%COMP%]   .action-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.875rem;\n  color: #374151;\n  line-height: 1.5;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-action[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 0.75rem;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-action[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n}\n.insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-action[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.insights-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  text-align: center;\n}\n.insights-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.insights-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.insights-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .insights-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .insights-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-action[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n  }\n  .insights-card[_ngcontent-%COMP%]   .insights-list[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .insight-action[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=performance-insights.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerformanceInsightsComponent, [{
    type: Component,
    args: [{ selector: "app-performance-insights", standalone: true, imports: [CommonModule], template: `
    <div class="insights-card">
      <div class="card-header">
        <h3 class="card-title">Performance Insights</h3>
        <div class="insights-count">{{ performanceInsights.length }} insights</div>
      </div>

      <div class="insights-list" *ngIf="performanceInsights.length > 0; else emptyState">
        <div 
          *ngFor="let insight of performanceInsights; let i = index" 
          class="insight-item"
          [ngClass]="'impact-' + insight.impact">
          <div class="insight-header">
            <div class="insight-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path [attr.d]="getCategoryIconPath(insight.category)"></path>
              </svg>
            </div>
            <div class="insight-title">{{ insight.title }}</div>
            <div class="impact-badge" [ngClass]="getImpactColorClass(insight.impact)">
              {{ insight.impact | titlecase }} Impact
            </div>
          </div>
          
          <div class="insight-description">{{ insight.description }}</div>
          
          <div class="insight-details">
            <div class="confidence-chip">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
                <path d="M12 16V12"></path>
                <path d="M12 8H12.01"></path>
              </svg>
              {{ insight.confidence }}%
            </div>
            
            <div class="category-badge" *ngIf="insight.category">
              {{ insight.category | titlecase }}
            </div>
          </div>

          <div class="insight-action">
            <div class="action-text">
              <strong>Recommended Action:</strong> {{ insight.action }}
            </div>
            <button 
              class="action-btn"
              (click)="onViewDetails(insight)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View Details
            </button>
          </div>
        </div>
      </div>

      <ng-template #emptyState>
        <div class="empty-state">
          <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <h4 class="empty-title">No Performance Insights</h4>
          <p class="empty-description">
            Generate analytics to get AI-powered performance insights for your assets.
          </p>
        </div>
      </ng-template>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-analytics/performance-insights.component.scss */\n.insights-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.insights-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.insights-card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.insights-card .card-header .card-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.insights-card .card-header .insights-count {\n  padding: 0.25rem 0.75rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.insights-card .insights-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.insights-card .insights-list .insight-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.insights-card .insights-list .insight-item:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);\n}\n.insights-card .insights-list .insight-item.impact-high {\n  border-left: 4px solid #dc2626;\n  background: #fef2f2;\n}\n.insights-card .insights-list .insight-item.impact-medium {\n  border-left: 4px solid #f59e0b;\n  background: #fffbeb;\n}\n.insights-card .insights-list .insight-item.impact-low {\n  border-left: 4px solid #22c55e;\n  background: #f0fdf4;\n}\n.insights-card .insights-list .insight-item .insight-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.insights-card .insights-list .insight-item .insight-header .insight-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  background: #f3f4f6;\n  border-radius: 0.5rem;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.insights-card .insights-list .insight-item .insight-header .insight-icon svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.insights-card .insights-list .insight-item .insight-header .insight-title {\n  flex: 1;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.insights-card .insights-list .insight-item .insight-header .impact-badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.insights-card .insights-list .insight-item .insight-header .impact-badge.impact-high {\n  background: #fecaca;\n  color: #dc2626;\n}\n.insights-card .insights-list .insight-item .insight-header .impact-badge.impact-medium {\n  background: #fde68a;\n  color: #d97706;\n}\n.insights-card .insights-list .insight-item .insight-header .impact-badge.impact-low {\n  background: #bbf7d0;\n  color: #166534;\n}\n.insights-card .insights-list .insight-item .insight-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 0.75rem;\n}\n.insights-card .insights-list .insight-item .insight-details {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.insights-card .insights-list .insight-item .insight-details .confidence-chip {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: #e0e7ff;\n  color: #4338ca;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.insights-card .insights-list .insight-item .insight-details .confidence-chip svg {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.insights-card .insights-list .insight-item .insight-details .category-badge {\n  padding: 0.25rem 0.5rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.insights-card .insights-list .insight-item .insight-action {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border-radius: 0.5rem;\n  border: 1px solid #e2e8f0;\n}\n.insights-card .insights-list .insight-item .insight-action .action-text {\n  flex: 1;\n  font-size: 0.875rem;\n  color: #374151;\n  line-height: 1.5;\n}\n.insights-card .insights-list .insight-item .insight-action .action-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 0.75rem;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.insights-card .insights-list .insight-item .insight-action .action-btn:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n}\n.insights-card .insights-list .insight-item .insight-action .action-btn svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.insights-card .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  text-align: center;\n}\n.insights-card .empty-state .empty-icon {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.insights-card .empty-state .empty-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.insights-card .empty-state .empty-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .insights-card {\n    padding: 1rem;\n  }\n  .insights-card .card-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .insights-card .insights-list .insight-item .insight-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .insights-card .insights-list .insight-item .insight-details {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .insights-card .insights-list .insight-item .insight-action {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n  }\n  .insights-card .insights-list .insight-item .insight-action .action-btn {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=performance-insights.component.css.map */\n"] }]
  }], () => [{ type: AIAnalyticsService }], { performanceInsights: [{
    type: Input
  }], viewDetails: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerformanceInsightsComponent, { className: "PerformanceInsightsComponent", filePath: "src/app/ai-features/components/ai-analytics/performance-insights.component.ts", lineNumber: 84 });
})();

// src/app/ai-features/components/ai-analytics/cost-optimizations.component.ts
function CostOptimizationsComponent_div_6_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const optimization_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, optimization_r2.category), " ");
  }
}
function CostOptimizationsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 11);
    \u0275\u0275element(4, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CostOptimizationsComponent_div_6_div_1_div_7_Template, 3, 3, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15)(11, "div", 16)(12, "div", 17);
    \u0275\u0275text(13, "Estimated Savings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 18);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17);
    \u0275\u0275text(19, "Payback Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "div", 17);
    \u0275\u0275text(24, "Confidence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 19)(26, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 21);
    \u0275\u0275element(28, "path", 22)(29, "path", 23)(30, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 25)(33, "button", 26);
    \u0275\u0275listener("click", function CostOptimizationsComponent_div_6_div_1_Template_button_click_33_listener() {
      const optimization_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImplement(optimization_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 27);
    \u0275\u0275element(35, "path", 28)(36, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " Implement ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "button", 30);
    \u0275\u0275listener("click", function CostOptimizationsComponent_div_6_div_1_Template_button_click_38_listener() {
      const optimization_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onViewDetails(optimization_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 27);
    \u0275\u0275element(40, "path", 31)(41, "circle", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " View Details ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const optimization_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "category-" + (optimization_r2.category || "general"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("d", ctx_r2.getCategoryIconPath(optimization_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(optimization_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", optimization_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(optimization_r2.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(16, 8, optimization_r2.estimatedSavings, "AED", "symbol", "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(optimization_r2.paybackPeriod);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", optimization_r2.confidence, "% ");
  }
}
function CostOptimizationsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, CostOptimizationsComponent_div_6_div_1_Template, 43, 13, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.costOptimizations);
  }
}
function CostOptimizationsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "path", 22)(3, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 37);
    \u0275\u0275text(5, "No Cost Optimizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 38);
    \u0275\u0275text(7, " Generate analytics to discover AI-powered cost optimization opportunities. ");
    \u0275\u0275elementEnd()();
  }
}
var CostOptimizationsComponent = class _CostOptimizationsComponent {
  analyticsService;
  costOptimizations = [];
  implement = new EventEmitter();
  viewDetails = new EventEmitter();
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  getCategoryIconPath(category) {
    const iconMap = {
      "energy": "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
      "maintenance": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      "vendor": "M1 3h15l4 6-4 6H1V3z",
      "lifecycle": "M1 4v16l4-4 4 4 4-4 4 4V4H1z",
      "general": "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
    };
    const iconName = this.analyticsService.getCategoryIcon(category || "");
    return iconMap[iconName] || iconMap["general"];
  }
  onImplement(optimization) {
    this.implement.emit(optimization);
  }
  onViewDetails(optimization) {
    this.viewDetails.emit(optimization);
  }
  static \u0275fac = function CostOptimizationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CostOptimizationsComponent)(\u0275\u0275directiveInject(AIAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CostOptimizationsComponent, selectors: [["app-cost-optimizations"]], inputs: { costOptimizations: "costOptimizations" }, outputs: { implement: "implement", viewDetails: "viewDetails" }, decls: 9, vars: 3, consts: [["emptyState", ""], [1, "cost-optimizations-card"], [1, "card-header"], [1, "card-title"], [1, "optimizations-count"], ["class", "optimizations-list", 4, "ngIf", "ngIfElse"], [1, "optimizations-list"], ["class", "optimization-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "optimization-item", 3, "ngClass"], [1, "optimization-header"], [1, "optimization-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "optimization-title"], ["class", "category-badge", 4, "ngIf"], [1, "optimization-description"], [1, "optimization-metrics"], [1, "metric-item"], [1, "metric-label"], [1, "metric-value", "savings"], [1, "metric-value"], [1, "confidence-chip"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"], ["d", "M12 16V12"], ["d", "M12 8H12.01"], [1, "optimization-actions"], [1, "action-btn", "primary", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 12l2 2 4-4"], ["d", "M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"], [1, "action-btn", "secondary", 3, "click"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "category-badge"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "empty-icon"], ["d", "M12 8V12L15 15"], [1, "empty-title"], [1, "empty-description"]], template: function CostOptimizationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
      \u0275\u0275text(3, "Cost Optimizations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, CostOptimizationsComponent_div_6_Template, 2, 1, "div", 5)(7, CostOptimizationsComponent_ng_template_7_Template, 8, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const emptyState_r4 = \u0275\u0275reference(8);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.costOptimizations.length, " opportunities");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.costOptimizations.length > 0)("ngIfElse", emptyState_r4);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, CurrencyPipe], styles: ["\n\n.cost-optimizations-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .optimizations-count[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item.category-energy[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n  background: #fffbeb;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item.category-maintenance[_ngcontent-%COMP%] {\n  border-left: 4px solid #3b82f6;\n  background: #eff6ff;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item.category-vendor[_ngcontent-%COMP%] {\n  border-left: 4px solid #8b5cf6;\n  background: #faf5ff;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item.category-lifecycle[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n  background: #f0fdf4;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item.category-general[_ngcontent-%COMP%] {\n  border-left: 4px solid #6b7280;\n  background: #f9fafb;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-header[_ngcontent-%COMP%]   .optimization-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  background: #f3f4f6;\n  border-radius: 0.5rem;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-header[_ngcontent-%COMP%]   .optimization-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-header[_ngcontent-%COMP%]   .optimization-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-header[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 1rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value.savings[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%]   .confidence-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: #e0e7ff;\n  color: #4338ca;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  width: fit-content;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%]   .confidence-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%] {\n  background: #059669;\n  color: white;\n  border-color: #059669;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%]:hover {\n  background: #047857;\n  transform: translateY(-1px);\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  text-align: center;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.cost-optimizations-card[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .cost-optimizations-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .cost-optimizations-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cost-optimizations-card[_ngcontent-%COMP%]   .optimizations-list[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .optimization-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=cost-optimizations.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostOptimizationsComponent, [{
    type: Component,
    args: [{ selector: "app-cost-optimizations", standalone: true, imports: [CommonModule], template: `
    <div class="cost-optimizations-card">
      <div class="card-header">
        <h3 class="card-title">Cost Optimizations</h3>
        <div class="optimizations-count">{{ costOptimizations.length }} opportunities</div>
      </div>

      <div class="optimizations-list" *ngIf="costOptimizations.length > 0; else emptyState">
        <div 
          *ngFor="let optimization of costOptimizations; let i = index" 
          class="optimization-item"
          [ngClass]="'category-' + (optimization.category || 'general')">
          <div class="optimization-header">
            <div class="optimization-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path [attr.d]="getCategoryIconPath(optimization.category)"></path>
              </svg>
            </div>
            <div class="optimization-title">{{ optimization.title }}</div>
            <div class="category-badge" *ngIf="optimization.category">
              {{ optimization.category | titlecase }}
            </div>
          </div>
          
          <div class="optimization-description">{{ optimization.description }}</div>
          
          <div class="optimization-metrics">
            <div class="metric-item">
              <div class="metric-label">Estimated Savings</div>
              <div class="metric-value savings">
                {{ optimization.estimatedSavings | currency:'AED':'symbol':'1.2-2' }}
              </div>
            </div>
            
            <div class="metric-item">
              <div class="metric-label">Payback Period</div>
              <div class="metric-value">{{ optimization.paybackPeriod }}</div>
            </div>
            
            <div class="metric-item">
              <div class="metric-label">Confidence</div>
              <div class="metric-value">
                <div class="confidence-chip">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
                    <path d="M12 16V12"></path>
                    <path d="M12 8H12.01"></path>
                  </svg>
                  {{ optimization.confidence }}%
                </div>
              </div>
            </div>
          </div>

          <div class="optimization-actions">
            <button 
              class="action-btn primary"
              (click)="onImplement(optimization)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
              </svg>
              Implement
            </button>
            
            <button 
              class="action-btn secondary"
              (click)="onViewDetails(optimization)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View Details
            </button>
          </div>
        </div>
      </div>

      <ng-template #emptyState>
        <div class="empty-state">
          <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"></path>
            <path d="M12 8V12L15 15"></path>
          </svg>
          <h4 class="empty-title">No Cost Optimizations</h4>
          <p class="empty-description">
            Generate analytics to discover AI-powered cost optimization opportunities.
          </p>
        </div>
      </ng-template>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-analytics/cost-optimizations.component.scss */\n.cost-optimizations-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease;\n}\n.cost-optimizations-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border-color: #d1d5db;\n}\n.cost-optimizations-card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.cost-optimizations-card .card-header .card-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.cost-optimizations-card .card-header .optimizations-count {\n  padding: 0.25rem 0.75rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.cost-optimizations-card .optimizations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.cost-optimizations-card .optimizations-list .optimization-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.cost-optimizations-card .optimizations-list .optimization-item:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);\n}\n.cost-optimizations-card .optimizations-list .optimization-item.category-energy {\n  border-left: 4px solid #f59e0b;\n  background: #fffbeb;\n}\n.cost-optimizations-card .optimizations-list .optimization-item.category-maintenance {\n  border-left: 4px solid #3b82f6;\n  background: #eff6ff;\n}\n.cost-optimizations-card .optimizations-list .optimization-item.category-vendor {\n  border-left: 4px solid #8b5cf6;\n  background: #faf5ff;\n}\n.cost-optimizations-card .optimizations-list .optimization-item.category-lifecycle {\n  border-left: 4px solid #10b981;\n  background: #f0fdf4;\n}\n.cost-optimizations-card .optimizations-list .optimization-item.category-general {\n  border-left: 4px solid #6b7280;\n  background: #f9fafb;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-header .optimization-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  background: #f3f4f6;\n  border-radius: 0.5rem;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-header .optimization-icon svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-header .optimization-title {\n  flex: 1;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-header .category-badge {\n  padding: 0.25rem 0.5rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 1rem;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-metrics {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-metrics .metric-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-metrics .metric-item .metric-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-metrics .metric-item .metric-value {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-metrics .metric-item .metric-value.savings {\n  color: #059669;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-metrics .metric-item .metric-value .confidence-chip {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: #e0e7ff;\n  color: #4338ca;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  width: fit-content;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-metrics .metric-item .metric-value .confidence-chip svg {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-actions .action-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-actions .action-btn.primary {\n  background: #059669;\n  color: white;\n  border-color: #059669;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-actions .action-btn.primary:hover {\n  background: #047857;\n  transform: translateY(-1px);\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-actions .action-btn.secondary {\n  background: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-actions .action-btn.secondary:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  transform: translateY(-1px);\n}\n.cost-optimizations-card .optimizations-list .optimization-item .optimization-actions .action-btn svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.cost-optimizations-card .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  text-align: center;\n}\n.cost-optimizations-card .empty-state .empty-icon {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.cost-optimizations-card .empty-state .empty-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.cost-optimizations-card .empty-state .empty-description {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .cost-optimizations-card {\n    padding: 1rem;\n  }\n  .cost-optimizations-card .card-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .cost-optimizations-card .optimizations-list .optimization-item .optimization-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .cost-optimizations-card .optimizations-list .optimization-item .optimization-metrics {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .cost-optimizations-card .optimizations-list .optimization-item .optimization-actions {\n    flex-direction: column;\n  }\n  .cost-optimizations-card .optimizations-list .optimization-item .optimization-actions .action-btn {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=cost-optimizations.component.css.map */\n"] }]
  }], () => [{ type: AIAnalyticsService }], { costOptimizations: [{
    type: Input
  }], implement: [{
    type: Output
  }], viewDetails: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CostOptimizationsComponent, { className: "CostOptimizationsComponent", filePath: "src/app/ai-features/components/ai-analytics/cost-optimizations.component.ts", lineNumber: 104 });
})();

// src/app/ai-features/components/ai-analytics/schedule-settings-modal.component.ts
function ScheduleSettingsModalComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3, "Loading schedule settings...");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleSettingsModalComponent_div_0_form_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 30);
    \u0275\u0275text(2, "Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ScheduleSettingsModalComponent_div_0_form_14_div_10_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.frequency, $event) || (ctx_r1.settings.frequency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 32);
    \u0275\u0275text(5, "Daily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 33);
    \u0275\u0275text(7, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 34);
    \u0275\u0275text(9, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 21);
    \u0275\u0275text(11, "How often to generate new analytics");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.frequency);
  }
}
function ScheduleSettingsModalComponent_div_0_form_14_div_11_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", hour_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatHour(hour_r6));
  }
}
function ScheduleSettingsModalComponent_div_0_form_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 30);
    \u0275\u0275text(2, "Run Time (UTC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ScheduleSettingsModalComponent_div_0_form_14_div_11_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.hourUTC, $event) || (ctx_r1.settings.hourUTC = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(4, ScheduleSettingsModalComponent_div_0_form_14_div_11_option_4_Template, 2, 2, "option", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "Time of day to run analytics generation (UTC)");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.hourUTC);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.hours);
  }
}
function ScheduleSettingsModalComponent_div_0_form_14_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "p", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function ScheduleSettingsModalComponent_div_0_form_14_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Save Settings");
    \u0275\u0275elementEnd();
  }
}
function ScheduleSettingsModalComponent_div_0_form_14_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function ScheduleSettingsModalComponent_div_0_form_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 18);
    \u0275\u0275listener("ngSubmit", function ScheduleSettingsModalComponent_div_0_form_14_Template_form_ngSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSave($event));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "div")(3, "label", 20);
    \u0275\u0275text(4, "Enable Scheduled Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "Automatically generate analytics reports");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label", 22)(8, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ScheduleSettingsModalComponent_div_0_form_14_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.enabled, $event) || (ctx_r1.settings.enabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ScheduleSettingsModalComponent_div_0_form_14_div_10_Template, 12, 1, "div", 25)(11, ScheduleSettingsModalComponent_div_0_form_14_div_11_Template, 7, 2, "div", 25)(12, ScheduleSettingsModalComponent_div_0_form_14_div_12_Template, 3, 1, "div", 26);
    \u0275\u0275elementStart(13, "div", 27)(14, "button", 28);
    \u0275\u0275listener("click", function ScheduleSettingsModalComponent_div_0_form_14_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 29);
    \u0275\u0275template(17, ScheduleSettingsModalComponent_div_0_form_14_span_17_Template, 2, 0, "span", 25)(18, ScheduleSettingsModalComponent_div_0_form_14_span_18_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.enabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.settings.enabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.enabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
  }
}
function ScheduleSettingsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ScheduleSettingsModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ScheduleSettingsModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 8);
    \u0275\u0275text(8, "Schedule Analytics Updates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function ScheduleSettingsModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "path", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275template(13, ScheduleSettingsModalComponent_div_0_div_13_Template, 4, 0, "div", 13)(14, ScheduleSettingsModalComponent_div_0_form_14_Template, 19, 7, "form", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
  }
}
var ScheduleSettingsModalComponent = class _ScheduleSettingsModalComponent {
  analyticsService;
  isOpen = false;
  closeModal = new EventEmitter();
  settingsUpdated = new EventEmitter();
  settings = {
    enabled: false,
    frequency: "daily",
    hourUTC: 0
  };
  isLoading = false;
  isSaving = false;
  errorMessage = null;
  hours = Array.from({ length: 24 }, (_, i) => i);
  destroy$ = new Subject();
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes["isOpen"] && this.isOpen) {
      this.loadSettings();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadSettings() {
    this.isLoading = true;
    this.errorMessage = null;
    this.analyticsService.getScheduleSettings().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.settings = {
            enabled: response.data.enabled ?? false,
            frequency: response.data.frequency ?? "daily",
            hourUTC: response.data.hourUTC ?? 0
          };
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading schedule settings:", error);
        this.errorMessage = "Failed to load schedule settings. Please try again.";
        this.isLoading = false;
      }
    });
  }
  onSave(event) {
    if (event) {
      event.preventDefault();
    }
    this.isSaving = true;
    this.errorMessage = null;
    this.analyticsService.updateScheduleSettings(this.settings).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.settingsUpdated.emit();
          this.closeModalHandler();
        } else {
          this.errorMessage = response.error || "Failed to save settings.";
        }
        this.isSaving = false;
      },
      error: (error) => {
        console.error("Error saving schedule settings:", error);
        this.errorMessage = "Failed to save schedule settings. Please try again.";
        this.isSaving = false;
      }
    });
  }
  formatHour(hour) {
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:00 ${period} (UTC ${hour}:00)`;
  }
  closeModalHandler() {
    this.isOpen = false;
    this.errorMessage = null;
    this.closeModal.emit();
  }
  static \u0275fac = function ScheduleSettingsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleSettingsModalComponent)(\u0275\u0275directiveInject(AIAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleSettingsModalComponent, selectors: [["app-schedule-settings-modal"]], inputs: { isOpen: "isOpen" }, outputs: { closeModal: "closeModal", settingsUpdated: "settingsUpdated" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", "style", "background-color: #0000008f", 3, "click", 4, "ngIf"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-50", "p-4", 2, "background-color", "#0000008f", 3, "click"], [1, "bg-white", "rounded-lg", "shadow-xl", "max-w-md", "w-full", 3, "click"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], ["class", "text-center py-8", 4, "ngIf"], ["class", "space-y-6", 3, "ngSubmit", 4, "ngIf"], [1, "text-center", "py-8"], [1, "inline-block", "animate-spin", "rounded-full", "h-8", "w-8", "border-b-2", "border-blue-600"], [1, "mt-4", "text-gray-600"], [1, "space-y-6", 3, "ngSubmit"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "relative", "inline-flex", "items-center", "cursor-pointer"], ["type", "checkbox", "name", "enabled", 1, "sr-only", "peer", 3, "ngModelChange", "ngModel"], [1, "w-11", "h-6", "bg-gray-200", "peer-focus:outline-none", "peer-focus:ring-4", "peer-focus:ring-blue-300", "rounded-full", "peer", "peer-checked:after:translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-[2px]", "after:left-[2px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-5", "after:w-5", "after:transition-all", "peer-checked:bg-blue-600"], [4, "ngIf"], ["class", "p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-200"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-blue-600", "rounded-lg", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "block", "text-sm", "font-medium", "text-gray-900", "mb-2"], ["name", "frequency", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["name", "hourUTC", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-sm", "text-red-600"]], template: function ScheduleSettingsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ScheduleSettingsModalComponent_div_0_Template, 15, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=schedule-settings-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleSettingsModalComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-settings-modal", standalone: true, imports: [CommonModule, FormsModule], template: `
    <!-- Modal Backdrop -->
    <div *ngIf="isOpen"
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style="background-color: #0000008f"
         (click)="closeModalHandler()">
      <!-- Modal Container -->
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full"
           (click)="$event.stopPropagation()">

        <!-- Modal Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 class="text-xl font-semibold text-gray-900">Schedule Analytics Updates</h2>
          </div>
          <button
            (click)="closeModalHandler()"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <div *ngIf="isLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p class="mt-4 text-gray-600">Loading schedule settings...</p>
          </div>

          <form *ngIf="!isLoading" (ngSubmit)="onSave($event)" class="space-y-6">
            <!-- Enable/Disable Toggle -->
            <div class="flex items-center justify-between">
              <div>
                <label class="text-sm font-medium text-gray-900">Enable Scheduled Updates</label>
                <p class="text-xs text-gray-500 mt-1">Automatically generate analytics reports</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" [(ngModel)]="settings.enabled" name="enabled" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <!-- Frequency Selection -->
            <div *ngIf="settings.enabled">
              <label class="block text-sm font-medium text-gray-900 mb-2">Frequency</label>
              <select [(ngModel)]="settings.frequency" name="frequency"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
              <p class="text-xs text-gray-500 mt-1">How often to generate new analytics</p>
            </div>

            <!-- Hour Selection -->
            <div *ngIf="settings.enabled">
              <label class="block text-sm font-medium text-gray-900 mb-2">Run Time (UTC)</label>
              <select [(ngModel)]="settings.hourUTC" name="hourUTC"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option *ngFor="let hour of hours" [value]="hour">{{ formatHour(hour) }}</option>
              </select>
              <p class="text-xs text-gray-500 mt-1">Time of day to run analytics generation (UTC)</p>
            </div>

            <!-- Error Message -->
            <div *ngIf="errorMessage" class="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-sm text-red-600">{{ errorMessage }}</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                (click)="closeModalHandler()"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Cancel
              </button>
              <button
                type="submit"
                [disabled]="isSaving"
                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
                <span *ngIf="!isSaving">Save Settings</span>
                <span *ngIf="isSaving">Saving...</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;219558ef63f119a92210704329b58a3cdceaa4fb296db559e672f74512827dc7;D:/laragon-2025/www/assetGo-backend/assetGo-frontend/src/app/ai-features/components/ai-analytics/schedule-settings-modal.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=schedule-settings-modal.component.css.map */\n"] }]
  }], () => [{ type: AIAnalyticsService }], { isOpen: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], settingsUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleSettingsModalComponent, { className: "ScheduleSettingsModalComponent", filePath: "src/app/ai-features/components/ai-analytics/schedule-settings-modal.component.ts", lineNumber: 115 });
})();

// src/app/ai-features/components/ai-analytics/ai-analytics.component.ts
var _c08 = (a0, a1, a2) => ({ "text-red-600": a0, "text-yellow-600": a1, "text-green-600": a2 });
function AIAnalyticsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "app-health-score-card", 12);
    \u0275\u0275elementStart(4, "app-performance-insights", 13);
    \u0275\u0275listener("viewDetails", function AIAnalyticsComponent_div_2_Template_app_performance_insights_viewDetails_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewInsightDetails($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "app-risk-assets", 15);
    \u0275\u0275listener("scheduleMaintenance", function AIAnalyticsComponent_div_2_Template_app_risk_assets_scheduleMaintenance_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onScheduleMaintenance($event));
    })("createWorkOrder", function AIAnalyticsComponent_div_2_Template_app_risk_assets_createWorkOrder_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCreateWorkOrder($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-cost-optimizations", 16);
    \u0275\u0275listener("implement", function AIAnalyticsComponent_div_2_Template_app_cost_optimizations_implement_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImplementOptimization($event));
    })("viewDetails", function AIAnalyticsComponent_div_2_Template_app_cost_optimizations_viewDetails_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewOptimizationDetails($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("healthScore", ctx_r2.latest.healthScore)("avgAssetAge", ctx_r2.avgAssetAge)("maintenanceStatus", ctx_r2.maintenanceStatus)("performanceStatus", ctx_r2.performanceStatus)("conditionStatus", ctx_r2.conditionStatus);
    \u0275\u0275advance();
    \u0275\u0275property("performanceInsights", ctx_r2.latest.performanceInsights);
    \u0275\u0275advance(2);
    \u0275\u0275property("riskAssets", ctx_r2.latest.riskAssets);
    \u0275\u0275advance();
    \u0275\u0275property("costOptimizations", ctx_r2.latest.costOptimizations);
  }
}
function AIAnalyticsComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21);
    \u0275\u0275element(3, "div", 22);
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275element(5, "div", 24)(6, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26);
    \u0275\u0275element(8, "div", 27)(9, "div", 28);
    \u0275\u0275elementEnd()()();
  }
}
function AIAnalyticsComponent_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 31)(3, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2", 33);
    \u0275\u0275text(5, "No Analytics Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 34);
    \u0275\u0275text(7, " Generate your first AI-powered analytics report to get comprehensive insights into your asset portfolio. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 35);
    \u0275\u0275listener("click", function AIAnalyticsComponent_ng_template_3_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onGenerate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 36);
    \u0275\u0275element(10, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Generate Analytics ");
    \u0275\u0275elementEnd()();
  }
}
function AIAnalyticsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AIAnalyticsComponent_ng_template_3_div_0_Template, 10, 0, "div", 17)(1, AIAnalyticsComponent_ng_template_3_div_1_Template, 12, 0, "div", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading && !ctx_r2.latest);
  }
}
function AIAnalyticsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 41);
    \u0275\u0275element(4, "path", 42)(5, "line", 43)(6, "line", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 45)(8, "p", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 47)(11, "button", 48);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_5_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.errorMessage = null);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 36);
    \u0275\u0275element(13, "line", 49)(14, "line", 50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function AIAnalyticsComponent_div_9_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 67);
    \u0275\u0275text(2, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r2.selectedInsight.category));
  }
}
function AIAnalyticsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeInsightDetailsModal());
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "div", 54)(4, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 56);
    \u0275\u0275element(6, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 58);
    \u0275\u0275text(8, "Performance Insight Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeInsightDetailsModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 60);
    \u0275\u0275element(11, "path", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 62)(13, "div", 63)(14, "div")(15, "h3", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 65);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 66)(20, "div")(21, "div", 67);
    \u0275\u0275text(22, "Impact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 68);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "div", 67);
    \u0275\u0275text(28, "Confidence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 69);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, AIAnalyticsComponent_div_9_div_31_Template, 6, 3, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 71)(33, "h4", 72);
    \u0275\u0275text(34, "Recommended Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 65);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 71)(38, "h4", 72);
    \u0275\u0275text(39, "Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ul", 73)(41, "li");
    \u0275\u0275text(42, "Improved operational performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li");
    \u0275\u0275text(44, "Better resource allocation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "li");
    \u0275\u0275text(46, "Enhanced efficiency metrics");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 74)(48, "button", 75);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_9_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeInsightDetailsModal());
    });
    \u0275\u0275text(49, " Close ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r2.selectedInsight.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedInsight.description);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(9, _c08, ctx_r2.selectedInsight.impact === "high", ctx_r2.selectedInsight.impact === "medium", ctx_r2.selectedInsight.impact === "low"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 7, ctx_r2.selectedInsight.impact), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedInsight.confidence, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedInsight.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedInsight.action);
  }
}
function AIAnalyticsComponent_div_10_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 67);
    \u0275\u0275text(2, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r2.selectedOptimization.category));
  }
}
function AIAnalyticsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOptimizationDetailsModal());
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_10_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "div", 54)(4, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 77);
    \u0275\u0275element(6, "path", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 58);
    \u0275\u0275text(8, "Cost Optimization Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOptimizationDetailsModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 60);
    \u0275\u0275element(11, "path", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 62)(13, "div", 63)(14, "div")(15, "h3", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 65);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 66)(20, "div")(21, "div", 67);
    \u0275\u0275text(22, "Estimated Savings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 79);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "div", 67);
    \u0275\u0275text(28, "Payback Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 69);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "div", 67);
    \u0275\u0275text(33, "Confidence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 69);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, AIAnalyticsComponent_div_10_div_36_Template, 6, 3, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 71)(38, "h4", 72);
    \u0275\u0275text(39, "Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ul", 73)(41, "li");
    \u0275\u0275text(42, "Significant cost reduction over time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li");
    \u0275\u0275text(44, "Improved operational efficiency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "li");
    \u0275\u0275text(46, "Better resource utilization");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 74)(48, "button", 75);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_10_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOptimizationDetailsModal());
    });
    \u0275\u0275text(49, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 80);
    \u0275\u0275listener("click", function AIAnalyticsComponent_div_10_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onImplementOptimization(ctx_r2.selectedOptimization);
      return \u0275\u0275resetView(ctx_r2.closeOptimizationDetailsModal());
    });
    \u0275\u0275text(51, " Implement ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r2.selectedOptimization.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedOptimization.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(25, 6, ctx_r2.selectedOptimization.estimatedSavings, "AED", "symbol", "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedOptimization.paybackPeriod);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedOptimization.confidence, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedOptimization.category);
  }
}
var AIAnalyticsComponent = class _AIAnalyticsComponent {
  analyticsService;
  destroy$ = new Subject();
  // State
  latest = null;
  isLoading = false;
  isGenerating = false;
  errorMessage = null;
  showScheduleModal = false;
  showWorkOrderModal = false;
  showScheduleMaintenanceModal = false;
  showOptimizationDetailsModal = false;
  showInsightDetailsModal = false;
  selectedAssetForWorkOrder = null;
  selectedAssetForMaintenance = null;
  selectedOptimization = null;
  selectedInsight = null;
  // Computed properties
  get avgAssetAge() {
    if (!this.latest)
      return 0;
    return this.latest.avgAssetAge ?? 0;
  }
  get maintenanceStatus() {
    if (!this.latest)
      return "Unknown";
    const maintenanceAssets = this.latest.riskAssets.filter((asset) => asset.recommendedAction.toLowerCase().includes("maintenance")).length;
    if (maintenanceAssets === 0)
      return "Excellent";
    if (maintenanceAssets <= 2)
      return "Good";
    if (maintenanceAssets <= 5)
      return "Fair";
    return "Poor";
  }
  get performanceStatus() {
    if (!this.latest)
      return "Unknown";
    const avgConfidence = this.latest.performanceInsights.reduce((sum, insight) => sum + insight.confidence, 0) / this.latest.performanceInsights.length;
    if (avgConfidence >= 90)
      return "Excellent";
    if (avgConfidence >= 80)
      return "Good";
    if (avgConfidence >= 70)
      return "Fair";
    return "Poor";
  }
  get conditionStatus() {
    if (!this.latest)
      return "Unknown";
    const healthScore = this.latest.healthScore;
    if (healthScore >= 90)
      return "Excellent";
    if (healthScore >= 80)
      return "Good";
    if (healthScore >= 70)
      return "Fair";
    if (healthScore >= 60)
      return "Poor";
    return "Critical";
  }
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.loadAnalytics();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadAnalytics() {
    this.isLoading = true;
    this.errorMessage = null;
    this.analyticsService.getAnalytics().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.latest = response.data.latest;
        } else {
          this.errorMessage = response.error || "Failed to load analytics";
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading analytics:", error);
        this.errorMessage = "Failed to load analytics. Please try again.";
        this.isLoading = false;
      }
    });
  }
  onRefresh() {
    this.loadAnalytics();
  }
  onGenerate() {
    this.isGenerating = true;
    this.errorMessage = null;
    this.analyticsService.generateAnalytics().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.latest = response.data.latest;
        } else {
          this.errorMessage = response.error || "Failed to generate analytics";
        }
        this.isGenerating = false;
      },
      error: (error) => {
        console.error("Error generating analytics:", error);
        this.errorMessage = "Failed to generate analytics. Please try again.";
        this.isGenerating = false;
      }
    });
  }
  onExport() {
    if (!this.latest) {
      this.errorMessage = "No analytics data to export. Please generate analytics first.";
      return;
    }
    this.errorMessage = null;
    this.analyticsService.exportAnalytics().pipe(takeUntil(this.destroy$)).subscribe({
      next: (blob) => {
        const filename = `ai_analytics_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
        this.analyticsService.downloadCsv(blob, filename);
      },
      error: (error) => {
        console.error("Error exporting analytics:", error);
        this.errorMessage = "Failed to export analytics. Please try again.";
      }
    });
  }
  onSchedule() {
    this.showScheduleModal = true;
  }
  closeScheduleModal() {
    this.showScheduleModal = false;
  }
  onScheduleUpdated() {
    this.closeScheduleModal();
  }
  onScheduleMaintenance(asset) {
    this.selectedAssetForMaintenance = {
      assetId: asset.id,
      assetName: asset.name,
      riskLevel: asset.riskLevel,
      recommendedAction: asset.recommendedAction,
      confidence: asset.confidence,
      savings: asset.estimatedCost ? asset.estimatedCost - (asset.preventiveCost || 0) : 0
    };
    this.showScheduleMaintenanceModal = true;
  }
  onCreateWorkOrder(asset) {
    this.selectedAssetForWorkOrder = {
      assetId: asset.id,
      assetName: asset.name,
      riskLevel: asset.riskLevel,
      recommendedAction: asset.recommendedAction,
      confidence: asset.confidence,
      savings: asset.estimatedCost ? asset.estimatedCost - (asset.preventiveCost || 0) : 0
    };
    this.showWorkOrderModal = true;
  }
  closeWorkOrderModal() {
    this.showWorkOrderModal = false;
    this.selectedAssetForWorkOrder = null;
  }
  closeScheduleMaintenanceModal() {
    this.showScheduleMaintenanceModal = false;
    this.selectedAssetForMaintenance = null;
  }
  onWorkOrderCreated() {
    this.closeWorkOrderModal();
  }
  onViewInsightDetails(insight) {
    this.selectedInsight = insight;
    this.showInsightDetailsModal = true;
  }
  closeInsightDetailsModal() {
    this.showInsightDetailsModal = false;
    this.selectedInsight = null;
  }
  onImplementOptimization(optimization) {
    this.selectedAssetForWorkOrder = {
      assetId: null,
      // Cost optimizations are general, not asset-specific
      assetName: "Cost Optimization",
      riskLevel: "medium",
      recommendedAction: `${optimization.title}: ${optimization.description}`,
      confidence: optimization.confidence,
      savings: optimization.estimatedSavings
    };
    this.showWorkOrderModal = true;
  }
  onViewOptimizationDetails(optimization) {
    this.selectedOptimization = optimization;
    this.showOptimizationDetailsModal = true;
  }
  closeOptimizationDetailsModal() {
    this.showOptimizationDetailsModal = false;
    this.selectedOptimization = null;
  }
  static \u0275fac = function AIAnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIAnalyticsComponent)(\u0275\u0275directiveInject(AIAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIAnalyticsComponent, selectors: [["app-ai-analytics"]], decls: 11, vars: 14, consts: [["loadingState", ""], [1, "ai-analytics-page"], [3, "refresh", "generate", "export", "schedule", "lastUpdated", "isLoading", "isGenerating", "hasData"], ["class", "analytics-content", 4, "ngIf", "ngIfElse"], ["class", "error-banner", 4, "ngIf"], [3, "closeModal", "settingsUpdated", "isOpen"], [3, "closeModal", "workOrderCreated", "isOpen", "prediction"], [3, "closeModal", "isOpen", "prediction"], ["class", "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", "style", "background-color: #0000008f", 3, "click", 4, "ngIf"], [1, "analytics-content"], [1, "content-grid"], [1, "left-column"], [3, "healthScore", "avgAssetAge", "maintenanceStatus", "performanceStatus", "conditionStatus"], [3, "viewDetails", "performanceInsights"], [1, "right-column"], [3, "scheduleMaintenance", "createWorkOrder", "riskAssets"], [3, "implement", "viewDetails", "costOptimizations"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-state"], [1, "loading-skeleton"], [1, "skeleton-header"], [1, "skeleton-icon"], [1, "skeleton-content"], [1, "skeleton-line", "w-3-4"], [1, "skeleton-line", "w-1-2"], [1, "skeleton-body"], [1, "skeleton-line", "w-full"], [1, "skeleton-line", "w-2-3"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "empty-icon"], ["d", "M3 3v18h18M18 17V9M13 17V5M8 17v-3"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "empty-title"], [1, "empty-description"], [1, "generate-button", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "error-banner"], [1, "error-banner-content"], [1, "error-banner-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "error-banner-text"], [1, "error-banner-message"], [1, "error-banner-actions"], ["title", "Dismiss", 1, "error-banner-dismiss", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-50", "p-4", 2, "background-color", "#0000008f", 3, "click"], [1, "bg-white", "rounded-lg", "shadow-xl", "max-w-lg", "w-full", 3, "click"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], [1, "space-y-4"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-2"], [1, "text-gray-600"], [1, "grid", "grid-cols-2", "gap-4", "pt-4", "border-t", "border-gray-200"], [1, "text-sm", "text-gray-500"], [1, "text-xl", "font-bold", 3, "ngClass"], [1, "text-xl", "font-bold", "text-gray-900"], [4, "ngIf"], [1, "pt-4", "border-t", "border-gray-200"], [1, "text-sm", "font-semibold", "text-gray-900", "mb-2"], [1, "list-disc", "list-inside", "text-sm", "text-gray-600", "space-y-1"], [1, "flex", "justify-end", "space-x-3", "pt-6", "mt-6", "border-t", "border-gray-200"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", 3, "click"], [1, "w-10", "h-10", "bg-green-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xl", "font-bold", "text-green-600"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "text-white", "bg-green-600", "rounded-lg", "hover:bg-green-700", 3, "click"]], template: function AIAnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-analytics-header", 2);
      \u0275\u0275listener("refresh", function AIAnalyticsComponent_Template_app_analytics_header_refresh_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRefresh());
      })("generate", function AIAnalyticsComponent_Template_app_analytics_header_generate_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onGenerate());
      })("export", function AIAnalyticsComponent_Template_app_analytics_header_export_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onExport());
      })("schedule", function AIAnalyticsComponent_Template_app_analytics_header_schedule_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSchedule());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, AIAnalyticsComponent_div_2_Template, 8, 8, "div", 3)(3, AIAnalyticsComponent_ng_template_3_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, AIAnalyticsComponent_div_5_Template, 15, 1, "div", 4);
      \u0275\u0275elementStart(6, "app-schedule-settings-modal", 5);
      \u0275\u0275listener("closeModal", function AIAnalyticsComponent_Template_app_schedule_settings_modal_closeModal_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeScheduleModal());
      })("settingsUpdated", function AIAnalyticsComponent_Template_app_schedule_settings_modal_settingsUpdated_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onScheduleUpdated());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-create-work-order-modal", 6);
      \u0275\u0275listener("closeModal", function AIAnalyticsComponent_Template_app_create_work_order_modal_closeModal_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeWorkOrderModal());
      })("workOrderCreated", function AIAnalyticsComponent_Template_app_create_work_order_modal_workOrderCreated_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWorkOrderCreated());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "app-schedule-maintenance-modal", 7);
      \u0275\u0275listener("closeModal", function AIAnalyticsComponent_Template_app_schedule_maintenance_modal_closeModal_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeScheduleMaintenanceModal());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, AIAnalyticsComponent_div_9_Template, 50, 13, "div", 8)(10, AIAnalyticsComponent_div_10_Template, 52, 11, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const loadingState_r8 = \u0275\u0275reference(4);
      \u0275\u0275advance();
      \u0275\u0275property("lastUpdated", ctx.latest == null ? null : ctx.latest.createdAt)("isLoading", ctx.isLoading)("isGenerating", ctx.isGenerating)("hasData", !!ctx.latest);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.latest)("ngIfElse", loadingState_r8);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showScheduleModal);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showWorkOrderModal)("prediction", ctx.selectedAssetForWorkOrder);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showScheduleMaintenanceModal)("prediction", ctx.selectedAssetForMaintenance);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showInsightDetailsModal && ctx.selectedInsight);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showOptimizationDetailsModal && ctx.selectedOptimization);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    TitleCasePipe,
    CurrencyPipe,
    AnalyticsHeaderComponent,
    HealthScoreCardComponent,
    RiskAssetsComponent,
    PerformanceInsightsComponent,
    CostOptimizationsComponent,
    ScheduleSettingsModalComponent,
    CreateWorkOrderModalComponent,
    ScheduleMaintenanceModalComponent
  ], styles: ["\n\n.ai-analytics-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 2rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 2rem;\n  margin-bottom: 2rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 1rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 1rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line.w-3-4[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line.w-1-2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-content[_ngcontent-%COMP%]   .skeleton-line.w-2-3[_ngcontent-%COMP%] {\n  width: 66.666667%;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-body[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 0.875rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 1.5rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  line-height: 1.6;\n  max-width: 32rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border: none;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8 0%,\n      #1e40af 100%);\n  transform: translateY(-1px);\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.75rem;\n  padding: 0.75rem 1rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #ef4444;\n  display: flex;\n  align-items: center;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-text[_ngcontent-%COMP%]   .error-banner-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #991b1b;\n  line-height: 1.5;\n  margin: 0;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-dismiss[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  background: transparent;\n  border: none;\n  border-radius: 0.375rem;\n  color: #991b1b;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-dismiss[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-dismiss[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.ai-analytics-page[_ngcontent-%COMP%]   .error-banner[_ngcontent-%COMP%]   .error-banner-content[_ngcontent-%COMP%]   .error-banner-actions[_ngcontent-%COMP%]   .error-banner-dismiss[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 1024px) {\n  .ai-analytics-page[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .ai-analytics-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .analytics-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .skeleton-header[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .generate-button[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .ai-analytics-page[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=ai-analytics.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIAnalyticsComponent, [{
    type: Component,
    args: [{ selector: "app-ai-analytics", standalone: true, imports: [
      CommonModule,
      AnalyticsHeaderComponent,
      HealthScoreCardComponent,
      RiskAssetsComponent,
      PerformanceInsightsComponent,
      CostOptimizationsComponent,
      ScheduleSettingsModalComponent,
      CreateWorkOrderModalComponent,
      ScheduleMaintenanceModalComponent
    ], template: `
    <div class="ai-analytics-page">
      <!-- Header -->
      <app-analytics-header
        [lastUpdated]="latest?.createdAt"
        [isLoading]="isLoading"
        [isGenerating]="isGenerating"
        [hasData]="!!latest"
        (refresh)="onRefresh()"
        (generate)="onGenerate()"
        (export)="onExport()"
        (schedule)="onSchedule()">
      </app-analytics-header>

      <!-- Main Content -->
      <div class="analytics-content" *ngIf="latest; else loadingState">
        <div class="content-grid">
          <!-- Left Column -->
          <div class="left-column">
            <!-- Health Score -->
            <app-health-score-card
              [healthScore]="latest.healthScore"
              [avgAssetAge]="avgAssetAge"
              [maintenanceStatus]="maintenanceStatus"
              [performanceStatus]="performanceStatus"
              [conditionStatus]="conditionStatus">
            </app-health-score-card>

            <!-- Performance Insights -->
            <app-performance-insights
              [performanceInsights]="latest.performanceInsights"
              (viewDetails)="onViewInsightDetails($event)">
            </app-performance-insights>
          </div>

          <!-- Right Column -->
          <div class="right-column">
            <!-- Risk Assets -->
            <app-risk-assets
              [riskAssets]="latest.riskAssets"
              (scheduleMaintenance)="onScheduleMaintenance($event)"
              (createWorkOrder)="onCreateWorkOrder($event)">
            </app-risk-assets>

            <!-- Cost Optimizations -->
            <app-cost-optimizations
              [costOptimizations]="latest.costOptimizations"
              (implement)="onImplementOptimization($event)"
              (viewDetails)="onViewOptimizationDetails($event)">
            </app-cost-optimizations>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <ng-template #loadingState>
        <div class="loading-state" *ngIf="isLoading">
          <div class="loading-skeleton">
            <div class="skeleton-header">
              <div class="skeleton-icon"></div>
              <div class="skeleton-content">
                <div class="skeleton-line w-3-4"></div>
                <div class="skeleton-line w-1-2"></div>
              </div>
            </div>
            <div class="skeleton-body">
              <div class="skeleton-line w-full"></div>
              <div class="skeleton-line w-2-3"></div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div class="empty-state" *ngIf="!isLoading && !latest">
          <svg class="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"></path>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <h2 class="empty-title">No Analytics Data</h2>
          <p class="empty-description">
            Generate your first AI-powered analytics report to get comprehensive insights into your asset portfolio.
          </p>
          <button class="generate-button" (click)="onGenerate()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            Generate Analytics
          </button>
        </div>
      </ng-template>

      <!-- Error Banner -->
      <div class="error-banner" *ngIf="errorMessage">
        <div class="error-banner-content">
          <div class="error-banner-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div class="error-banner-text">
            <p class="error-banner-message">{{ errorMessage }}</p>
          </div>
          <div class="error-banner-actions">
            <button class="error-banner-dismiss" (click)="errorMessage = null" title="Dismiss">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Schedule Settings Modal -->
      <app-schedule-settings-modal
        [isOpen]="showScheduleModal"
        (closeModal)="closeScheduleModal()"
        (settingsUpdated)="onScheduleUpdated()">
      </app-schedule-settings-modal>

      <!-- Create Work Order Modal -->
      <app-create-work-order-modal
        [isOpen]="showWorkOrderModal"
        [prediction]="selectedAssetForWorkOrder"
        (closeModal)="closeWorkOrderModal()"
        (workOrderCreated)="onWorkOrderCreated()">
      </app-create-work-order-modal>

      <!-- Schedule Maintenance Modal -->
      <app-schedule-maintenance-modal
        [isOpen]="showScheduleMaintenanceModal"
        [prediction]="selectedAssetForMaintenance"
        (closeModal)="closeScheduleMaintenanceModal()">
      </app-schedule-maintenance-modal>

      <!-- Insight Details Modal -->
      <div *ngIf="showInsightDetailsModal && selectedInsight"
           class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style="background-color: #0000008f"
           (click)="closeInsightDetailsModal()">
        <div class="bg-white rounded-lg shadow-xl max-w-lg w-full"
             (click)="$event.stopPropagation()">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-gray-900">Performance Insight Details</h2>
            </div>
            <button
              (click)="closeInsightDetailsModal()"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="p-6">
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ selectedInsight.title }}</h3>
                <p class="text-gray-600">{{ selectedInsight.description }}</p>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <div class="text-sm text-gray-500">Impact</div>
                  <div class="text-xl font-bold" [ngClass]="{
                    'text-red-600': selectedInsight.impact === 'high',
                    'text-yellow-600': selectedInsight.impact === 'medium',
                    'text-green-600': selectedInsight.impact === 'low'
                  }">
                    {{ selectedInsight.impact | titlecase }}
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">Confidence</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedInsight.confidence }}%</div>
                </div>
                <div *ngIf="selectedInsight.category">
                  <div class="text-sm text-gray-500">Category</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedInsight.category | titlecase }}</div>
                </div>
              </div>

              <div class="pt-4 border-t border-gray-200">
                <h4 class="text-sm font-semibold text-gray-900 mb-2">Recommended Action</h4>
                <p class="text-gray-600">{{ selectedInsight.action }}</p>
              </div>

              <div class="pt-4 border-t border-gray-200">
                <h4 class="text-sm font-semibold text-gray-900 mb-2">Benefits</h4>
                <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Improved operational performance</li>
                  <li>Better resource allocation</li>
                  <li>Enhanced efficiency metrics</li>
                </ul>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-200">
              <button
                type="button"
                (click)="closeInsightDetailsModal()"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Optimization Details Modal -->
      <div *ngIf="showOptimizationDetailsModal && selectedOptimization"
           class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style="background-color: #0000008f"
           (click)="closeOptimizationDetailsModal()">
        <div class="bg-white rounded-lg shadow-xl max-w-lg w-full"
             (click)="$event.stopPropagation()">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-gray-900">Cost Optimization Details</h2>
            </div>
            <button
              (click)="closeOptimizationDetailsModal()"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="p-6">
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ selectedOptimization.title }}</h3>
                <p class="text-gray-600">{{ selectedOptimization.description }}</p>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <div class="text-sm text-gray-500">Estimated Savings</div>
                  <div class="text-xl font-bold text-green-600">
                    {{ selectedOptimization.estimatedSavings | currency:'AED':'symbol':'1.2-2' }}
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">Payback Period</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedOptimization.paybackPeriod }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">Confidence</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedOptimization.confidence }}%</div>
                </div>
                <div *ngIf="selectedOptimization.category">
                  <div class="text-sm text-gray-500">Category</div>
                  <div class="text-xl font-bold text-gray-900">{{ selectedOptimization.category | titlecase }}</div>
                </div>
              </div>

              <div class="pt-4 border-t border-gray-200">
                <h4 class="text-sm font-semibold text-gray-900 mb-2">Benefits</h4>
                <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Significant cost reduction over time</li>
                  <li>Improved operational efficiency</li>
                  <li>Better resource utilization</li>
                </ul>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-200">
              <button
                type="button"
                (click)="closeOptimizationDetailsModal()"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Close
              </button>
              <button
                type="button"
                (click)="onImplementOptimization(selectedOptimization); closeOptimizationDetailsModal()"
                class="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
                Implement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/ai-features/components/ai-analytics/ai-analytics.component.scss */\n.ai-analytics-page {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.ai-analytics-page .analytics-content .content-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 2rem;\n}\n.ai-analytics-page .analytics-content .content-grid .left-column {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.ai-analytics-page .analytics-content .content-grid .right-column {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.ai-analytics-page .loading-state .loading-skeleton {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 2rem;\n  margin-bottom: 2rem;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-header .skeleton-icon {\n  width: 4rem;\n  height: 4rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 1rem;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-header .skeleton-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-header .skeleton-content .skeleton-line {\n  height: 1rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-header .skeleton-content .skeleton-line.w-3-4 {\n  width: 75%;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-header .skeleton-content .skeleton-line.w-1-2 {\n  width: 50%;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-header .skeleton-content .skeleton-line.w-full {\n  width: 100%;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-header .skeleton-content .skeleton-line.w-2-3 {\n  width: 66.666667%;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.ai-analytics-page .loading-state .loading-skeleton .skeleton-body .skeleton-line {\n  height: 0.875rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: loading 1.5s infinite;\n  border-radius: 0.25rem;\n}\n.ai-analytics-page .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n}\n.ai-analytics-page .empty-state .empty-icon {\n  color: #d1d5db;\n  margin-bottom: 1.5rem;\n}\n.ai-analytics-page .empty-state .empty-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.75rem 0;\n}\n.ai-analytics-page .empty-state .empty-description {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  line-height: 1.6;\n  max-width: 32rem;\n}\n.ai-analytics-page .empty-state .generate-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border: none;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.ai-analytics-page .empty-state .generate-button:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8 0%,\n      #1e40af 100%);\n  transform: translateY(-1px);\n}\n.ai-analytics-page .empty-state .generate-button:active {\n  transform: translateY(0);\n}\n.ai-analytics-page .empty-state .generate-button svg {\n  width: 1rem;\n  height: 1rem;\n}\n.ai-analytics-page .error-banner {\n  margin-bottom: 1.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.75rem;\n  padding: 0.75rem 1rem;\n}\n.ai-analytics-page .error-banner .error-banner-content {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.ai-analytics-page .error-banner .error-banner-content .error-banner-icon {\n  flex-shrink: 0;\n  color: #ef4444;\n  display: flex;\n  align-items: center;\n}\n.ai-analytics-page .error-banner .error-banner-content .error-banner-text {\n  flex: 1;\n  min-width: 0;\n}\n.ai-analytics-page .error-banner .error-banner-content .error-banner-text .error-banner-message {\n  font-size: 0.875rem;\n  color: #991b1b;\n  line-height: 1.5;\n  margin: 0;\n}\n.ai-analytics-page .error-banner .error-banner-content .error-banner-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.ai-analytics-page .error-banner .error-banner-content .error-banner-actions .error-banner-dismiss {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  background: transparent;\n  border: none;\n  border-radius: 0.375rem;\n  color: #991b1b;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.ai-analytics-page .error-banner .error-banner-content .error-banner-actions .error-banner-dismiss:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n.ai-analytics-page .error-banner .error-banner-content .error-banner-actions .error-banner-dismiss:active {\n  transform: scale(0.95);\n}\n.ai-analytics-page .error-banner .error-banner-content .error-banner-actions .error-banner-dismiss svg {\n  width: 1rem;\n  height: 1rem;\n}\n@keyframes loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 1024px) {\n  .ai-analytics-page .analytics-content .content-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .ai-analytics-page {\n    padding: 1rem;\n  }\n  .ai-analytics-page .analytics-content .content-grid {\n    gap: 1rem;\n  }\n  .ai-analytics-page .loading-state .loading-skeleton {\n    padding: 1rem;\n  }\n  .ai-analytics-page .loading-state .loading-skeleton .skeleton-header .skeleton-icon {\n    width: 3rem;\n    height: 3rem;\n  }\n  .ai-analytics-page .empty-state {\n    padding: 2rem 1rem;\n  }\n  .ai-analytics-page .empty-state .empty-title {\n    font-size: 1.25rem;\n  }\n  .ai-analytics-page .empty-state .empty-description {\n    font-size: 0.875rem;\n  }\n  .ai-analytics-page .empty-state .generate-button {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n  .ai-analytics-page .error-state {\n    padding: 2rem 1rem;\n  }\n  .ai-analytics-page .error-state .error-title {\n    font-size: 1.125rem;\n  }\n  .ai-analytics-page .error-state .retry-button {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=ai-analytics.component.css.map */\n"] }]
  }], () => [{ type: AIAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIAnalyticsComponent, { className: "AIAnalyticsComponent", filePath: "src/app/ai-features/components/ai-analytics/ai-analytics.component.ts", lineNumber: 340 });
})();

// src/app/ai-features/ai-features.component.ts
var _c09 = ["fileInput"];
function AIFeaturesComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function AIFeaturesComponent_button_8_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveTab(tab_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab === tab_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", ctx_r2.getTabIcon(tab_r2.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.label);
  }
}
function AIFeaturesComponent_div_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "path", 40)(4, "circle", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 42);
    \u0275\u0275text(6, "Upload Asset Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 43);
    \u0275\u0275text(8, "Drag & drop your image here, or click to browse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 44);
    \u0275\u0275text(10, "PNG, JPG, JPEG up to 10MB \u2022 High-quality, well-lit images recommended");
    \u0275\u0275elementEnd()();
  }
}
function AIFeaturesComponent_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275element(2, "img", 47);
    \u0275\u0275elementStart(3, "div", 48)(4, "button", 49);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFile(0));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 26);
    \u0275\u0275element(6, "path", 50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.getFilePreview(ctx_r2.selectedFiles[0]), \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedFiles[0].name);
  }
}
function AIFeaturesComponent_div_10__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_10__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_10_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "div", 56);
    \u0275\u0275element(4, "div", 57)(5, "div", 58)(6, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "AI is Analyzing Your Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 60);
    \u0275\u0275text(10, "Our advanced AI is examining your asset image to identify its type, condition, and provide intelligent recommendations.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 61)(12, "div", 62)(13, "div", 63);
    \u0275\u0275text(14, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Scanning image details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 64)(18, "div", 63);
    \u0275\u0275text(19, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "AI processing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 64)(23, "div", 63);
    \u0275\u0275text(24, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Generating results");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 26);
    \u0275\u0275element(29, "circle", 66)(30, "path", 67)(31, "path", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "This usually takes 10-30 seconds");
    \u0275\u0275elementEnd()()()();
  }
}
function AIFeaturesComponent_div_10_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function AIFeaturesComponent_div_10_div_23_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Manufacturer ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 113);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.analysisResult.manufacturer);
  }
}
function AIFeaturesComponent_div_10_div_23_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "rect", 87)(4, "line", 88)(5, "line", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Model ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 113);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.analysisResult.model);
  }
}
function AIFeaturesComponent_div_10_div_23_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 114)(4, "polyline", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Serial Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 113);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.analysisResult.serialNumber);
  }
}
function AIFeaturesComponent_div_10_div_23_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 116)(4, "line", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Asset Tag ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 113);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.analysisResult.assetTag);
  }
}
function AIFeaturesComponent_div_10_div_23_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 119)(4, "polyline", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Condition ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275classMapInterpolate1("detail-value condition-badge condition-", ctx_r2.analysisResult.condition.toLowerCase(), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.analysisResult.condition, " ");
  }
}
function AIFeaturesComponent_div_10_div_23_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 102)(4, "polyline", 103)(5, "line", 104)(6, "line", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.analysisResult.evidence.notes);
  }
}
function AIFeaturesComponent_div_10_div_23_div_35_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "div", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "polyline", 131);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rec_r7 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(rec_r7);
  }
}
function AIFeaturesComponent_div_10_div_23_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123)(1, "div", 83)(2, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 86);
    \u0275\u0275element(4, "path", 124)(5, "line", 125)(6, "line", 126);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 81)(8, "h4");
    \u0275\u0275text(9, "AI Recommendations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Based on the analysis, here are our suggestions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 127);
    \u0275\u0275template(13, AIFeaturesComponent_div_10_div_23_div_35_div_13_Template, 6, 1, "div", 128);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r2.analysisResult.recommendations);
  }
}
function AIFeaturesComponent_div_10_div_23_div_36_div_32_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150)(1, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function AIFeaturesComponent_div_10_div_23_div_36_div_32_div_7_Template_input_ngModelChange_1_listener($event) {
      const correction_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(correction_r11.value, $event) || (correction_r11.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 152);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_div_23_div_36_div_32_div_7_Template_button_click_2_listener() {
      const i_r12 = \u0275\u0275restoreView(_r10).index;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeCorrection(i_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 26);
    \u0275\u0275element(4, "line", 153)(5, "line", 154);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const correction_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", correction_r11.value);
  }
}
function AIFeaturesComponent_div_10_div_23_div_36_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 16)(2, "h5");
    \u0275\u0275text(3, "What needs to be corrected?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Please specify what was incorrect in the recognition");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 145);
    \u0275\u0275template(7, AIFeaturesComponent_div_10_div_23_div_36_div_32_div_7_Template, 6, 1, "div", 146);
    \u0275\u0275elementStart(8, "button", 147);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_div_23_div_36_div_32_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.addCorrection());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 26);
    \u0275\u0275element(10, "line", 148)(11, "line", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Add Correction ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.corrections);
  }
}
function AIFeaturesComponent_div_10_div_23_div_36_div_33__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_10_div_23_div_36_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 155)(1, "button", 156);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_div_23_div_36_div_33_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelFeedback());
    });
    \u0275\u0275text(2, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 28);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_div_23_div_36_div_33_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.submitFeedback());
    });
    \u0275\u0275template(4, AIFeaturesComponent_div_10_div_23_div_36_div_33__svg_svg_4_Template, 2, 0, "svg", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.isSubmittingFeedback);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isSubmittingFeedback);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSubmittingFeedback ? "Submitting..." : "Submit Feedback", " ");
  }
}
function AIFeaturesComponent_div_10_div_23_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 83)(2, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 86);
    \u0275\u0275element(4, "path", 133);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 81)(6, "h4");
    \u0275\u0275text(7, "Help Improve AI Recognition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Was this recognition accurate? Your feedback helps improve our AI.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 134)(11, "div", 135)(12, "button", 136);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_div_23_div_36_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectFeedback("accurate"));
    });
    \u0275\u0275elementStart(13, "div", 101);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 86);
    \u0275\u0275element(15, "path", 137)(16, "rect", 138)(17, "path", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 107)(19, "span", 108);
    \u0275\u0275text(20, "Accurate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 109);
    \u0275\u0275text(22, "Recognition was correct");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 140);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_div_23_div_36_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectFeedback("needs_correction"));
    });
    \u0275\u0275elementStart(24, "div", 101);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 86);
    \u0275\u0275element(26, "path", 141);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 107)(28, "span", 108);
    \u0275\u0275text(29, "Needs Correction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 109);
    \u0275\u0275text(31, "Something was wrong");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(32, AIFeaturesComponent_div_10_div_23_div_36_div_32_Template, 13, 1, "div", 142)(33, AIFeaturesComponent_div_10_div_23_div_36_div_33_Template, 6, 3, "div", 143);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("selected", ctx_r2.feedbackType === "accurate");
    \u0275\u0275advance(11);
    \u0275\u0275classProp("selected", ctx_r2.feedbackType === "needs_correction");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.feedbackType === "needs_correction");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.feedbackType);
  }
}
function AIFeaturesComponent_div_10_div_23_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158)(2, "div", 159);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 160);
    \u0275\u0275element(4, "path", 119)(5, "polyline", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7, "Thank You!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Your feedback has been submitted and will help improve our AI recognition.");
    \u0275\u0275elementEnd()()();
  }
}
function AIFeaturesComponent_div_10_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 74);
    \u0275\u0275element(5, "path", 75)(6, "path", 76)(7, "path", 77)(8, "path", 78)(9, "path", 79)(10, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 81)(12, "h3");
    \u0275\u0275text(13, "AI Recognition Complete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "Your asset has been successfully analyzed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 82)(17, "div", 83)(18, "div", 84)(19, "div", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 86);
    \u0275\u0275element(21, "rect", 87)(22, "line", 88)(23, "line", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 90)(25, "h4");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 91)(28, "div", 92);
    \u0275\u0275template(29, AIFeaturesComponent_div_10_div_23_div_29_Template, 7, 1, "div", 93)(30, AIFeaturesComponent_div_10_div_23_div_30_Template, 9, 1, "div", 93)(31, AIFeaturesComponent_div_10_div_23_div_31_Template, 8, 1, "div", 93)(32, AIFeaturesComponent_div_10_div_23_div_32_Template, 8, 1, "div", 93)(33, AIFeaturesComponent_div_10_div_23_div_33_Template, 8, 4, "div", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, AIFeaturesComponent_div_10_div_23_div_34_Template, 9, 1, "div", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, AIFeaturesComponent_div_10_div_23_div_35_Template, 14, 1, "div", 96)(36, AIFeaturesComponent_div_10_div_23_div_36_Template, 34, 6, "div", 97)(37, AIFeaturesComponent_div_10_div_23_div_37_Template, 10, 0, "div", 98);
    \u0275\u0275elementStart(38, "div", 99)(39, "button", 100);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_div_23_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreateAssetModal());
    });
    \u0275\u0275elementStart(40, "div", 101);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 86);
    \u0275\u0275element(42, "path", 102)(43, "polyline", 103)(44, "line", 104)(45, "line", 105)(46, "polyline", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "div", 107)(48, "span", 108);
    \u0275\u0275text(49, "Create Asset Record");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 109);
    \u0275\u0275text(51, "Save this recognition as a new asset");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate(ctx_r2.analysisResult.assetType);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.analysisResult.manufacturer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analysisResult.model);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analysisResult.serialNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analysisResult.assetTag);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analysisResult.condition);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analysisResult.evidence == null ? null : ctx_r2.analysisResult.evidence.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analysisResult.recommendations && ctx_r2.analysisResult.recommendations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.feedbackSubmitted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.feedbackSubmitted);
  }
}
function AIFeaturesComponent_div_10_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161)(1, "div", 162)(2, "div", 163);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 74);
    \u0275\u0275element(4, "path");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 164)(6, "span", 165);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 166);
    \u0275\u0275text(9, "Supported");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const assetType_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("d", ctx_r2.getAssetTypeIcon(assetType_r14.icon));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(assetType_r14.name);
  }
}
function AIFeaturesComponent_div_10_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 167);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 168);
    \u0275\u0275element(4, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Analyzing Portfolio...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Our AI is analyzing your asset portfolio to provide comprehensive insights and recommendations.");
    \u0275\u0275elementEnd()()();
  }
}
function AIFeaturesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "h2", 17);
    \u0275\u0275text(3, "AI Image Recognition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 18);
    \u0275\u0275text(5, "Upload asset images for automatic identification, condition assessment, and intelligent data extraction.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 20);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerFileInput());
    })("dragover", function AIFeaturesComponent_div_10_Template_div_dragover_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragOver($event));
    })("drop", function AIFeaturesComponent_div_10_Template_div_drop_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrop($event));
    });
    \u0275\u0275template(8, AIFeaturesComponent_div_10_div_8_Template, 11, 0, "div", 21)(9, AIFeaturesComponent_div_10_div_9_Template, 7, 2, "div", 22);
    \u0275\u0275elementStart(10, "input", 23, 0);
    \u0275\u0275listener("change", function AIFeaturesComponent_div_10_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "button", 25);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerFileInput());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 26);
    \u0275\u0275element(15, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Upload Images ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "button", 28);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_10_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.analyzeImages());
    });
    \u0275\u0275template(18, AIFeaturesComponent_div_10__svg_svg_18_Template, 2, 0, "svg", 29)(19, AIFeaturesComponent_div_10__svg_svg_19_Template, 2, 0, "svg", 30);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AIFeaturesComponent_div_10_div_21_Template, 34, 0, "div", 31)(22, AIFeaturesComponent_div_10_div_22_Template, 3, 1, "div", 32)(23, AIFeaturesComponent_div_10_div_23_Template, 52, 10, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 34)(25, "div", 16)(26, "h3", 17);
    \u0275\u0275text(27, "Supported Asset Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 18);
    \u0275\u0275text(29, "Our AI can recognize and analyze various types of industrial equipment and assets with high accuracy.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 35);
    \u0275\u0275template(31, AIFeaturesComponent_div_10_div_31_Template, 10, 2, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, AIFeaturesComponent_div_10_div_32_Template, 9, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.selectedFiles.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedFiles.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.isAnalyzing);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.selectedFiles.length || ctx_r2.isAnalyzing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isAnalyzing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAnalyzing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isAnalyzing ? "Analyzing..." : "Analyze Image", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAnalyzing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analysisResult);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.assetTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAnalyzingAssets);
  }
}
function AIFeaturesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-predictive-maintenance");
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-natural-language");
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-ai-recommendations");
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-ai-analytics");
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_15_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 180)(1, "div", 181)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 182);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 183);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 184)(10, "span", 185);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const asset_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(asset_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", asset_r16.type, " \u2022 ", asset_r16.manufacturer, " ", asset_r16.model, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Age: ", asset_r16.age, " years \u2022 Condition: ", asset_r16.condition, " \u2022 Value: $", \u0275\u0275pipeBind1(8, 9, asset_r16.value), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", asset_r16.condition.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(asset_r16.condition);
  }
}
function AIFeaturesComponent_div_15_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178);
    \u0275\u0275template(1, AIFeaturesComponent_div_15_div_19_div_1_Template, 12, 11, "div", 179);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedAssets);
  }
}
function AIFeaturesComponent_div_15_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 187);
    \u0275\u0275element(2, "path", 188);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Assets Selected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Add assets to your portfolio to get AI-powered analytics and insights.");
    \u0275\u0275elementEnd()();
  }
}
function AIFeaturesComponent_div_15_div_21_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "img", 202);
    \u0275\u0275elementStart(2, "button", 203);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_15_div_21_div_17_div_1_Template_button_click_2_listener() {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeAnalyticsImage(i_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 26);
    \u0275\u0275element(4, "path", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const image_r21 = ctx.$implicit;
    const i_r20 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r21, \u0275\u0275sanitizeUrl)("alt", "Asset image " + (i_r20 + 1));
  }
}
function AIFeaturesComponent_div_15_div_21_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 200);
    \u0275\u0275template(1, AIFeaturesComponent_div_15_div_21_div_17_div_1_Template, 5, 2, "div", 201);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.analyticsImages);
  }
}
function AIFeaturesComponent_div_15_div_21_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 204)(1, "button", 156);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_15_div_21_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearAnalyticsImages());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "path", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Clear All Images ");
    \u0275\u0275elementEnd()();
  }
}
function AIFeaturesComponent_div_15_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 189)(1, "h4");
    \u0275\u0275text(2, "Asset Images (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4, "Upload images of your assets for enhanced analysis. Maximum 5 images.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 190)(6, "input", 191, 1);
    \u0275\u0275listener("change", function AIFeaturesComponent_div_15_div_21_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onAnalyticsFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 192);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_15_div_21_Template_div_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const analyticsFileInput_r18 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(analyticsFileInput_r18.click());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 193);
    \u0275\u0275element(10, "path", 194)(11, "polyline", 195)(12, "line", 196);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14, "Click to upload images or drag and drop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 197);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, AIFeaturesComponent_div_15_div_21_div_17_Template, 2, 1, "div", 198)(18, AIFeaturesComponent_div_15_div_21_div_18_Template, 5, 0, "div", 199);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.analyticsImages.length >= 5);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r2.analyticsImages.length, "/5 images");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analyticsImages.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analyticsImages.length > 0);
  }
}
function AIFeaturesComponent_div_15_div_22__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "path", 206);
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_15_div_22__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 205)(1, "button", 28);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_15_div_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.analyzeAssets());
    });
    \u0275\u0275template(2, AIFeaturesComponent_div_15_div_22__svg_svg_2_Template, 2, 0, "svg", 29)(3, AIFeaturesComponent_div_15_div_22__svg_svg_3_Template, 2, 0, "svg", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isAnalyzingAssets);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isAnalyzingAssets);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAnalyzingAssets);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isAnalyzingAssets ? "Analyzing..." : "Analyze Portfolio", " ");
  }
}
function AIFeaturesComponent_div_15_div_23_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 221)(1, "div", 222)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 223);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 224)(7, "span", 225);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 226);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const asset_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(asset_r24.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r24.reason);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getRiskLevelClass(asset_r24.riskLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(asset_r24.riskLevel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", asset_r24.confidence, "% confidence");
  }
}
function AIFeaturesComponent_div_15_div_23_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 218)(1, "h4");
    \u0275\u0275text(2, "High-Risk Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 219);
    \u0275\u0275template(4, AIFeaturesComponent_div_15_div_23_div_18_div_4_Template, 11, 5, "div", 220);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.analyticsResult.riskAssets);
  }
}
function AIFeaturesComponent_div_15_div_23_div_19_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230)(1, "div", 231)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 232);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 233);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 234)(9, "strong");
    \u0275\u0275text(10, "Action:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const insight_r25 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(insight_r25.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getImpactClass(insight_r25.impact));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(insight_r25.impact);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(insight_r25.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", insight_r25.action, " ");
  }
}
function AIFeaturesComponent_div_15_div_23_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 227)(1, "h4");
    \u0275\u0275text(2, "Performance Insights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 228);
    \u0275\u0275template(4, AIFeaturesComponent_div_15_div_23_div_19_div_4_Template, 12, 5, "div", 229);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.analyticsResult.insights);
  }
}
function AIFeaturesComponent_div_15_div_23_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 238)(1, "div", 239)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 240)(5, "span", 241);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 242);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 243);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 244)(13, "span", 245);
    \u0275\u0275text(14, "Confidence:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 246);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r26 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r26.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("AED ", \u0275\u0275pipeBind1(7, 5, opt_r26.estimatedSavings), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", opt_r26.paybackPeriod, " payback");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r26.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", opt_r26.confidence, "%");
  }
}
function AIFeaturesComponent_div_15_div_23_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "h4");
    \u0275\u0275text(2, "Cost Optimization Opportunities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 236);
    \u0275\u0275template(4, AIFeaturesComponent_div_15_div_23_div_20_div_4_Template, 17, 7, "div", 237);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.analyticsResult.optimizations);
  }
}
function AIFeaturesComponent_div_15_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "div", 71)(2, "h3");
    \u0275\u0275text(3, "Analytics Results");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 208)(5, "h4");
    \u0275\u0275text(6, "Overall Health Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 209)(8, "div", 210)(9, "span", 211);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 212);
    \u0275\u0275text(12, "/ 100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 213)(14, "p");
    \u0275\u0275text(15, "Portfolio Health Assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 214);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(18, AIFeaturesComponent_div_15_div_23_div_18_Template, 5, 1, "div", 215)(19, AIFeaturesComponent_div_15_div_23_div_19_Template, 5, 1, "div", 216)(20, AIFeaturesComponent_div_15_div_23_div_20_Template, 5, 1, "div", 217);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ctx_r2.getHealthScoreClass(ctx_r2.analyticsResult.healthScore));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.analyticsResult.healthScore);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r2.getHealthScoreClass(ctx_r2.analyticsResult.healthScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.analyticsResult.healthScore >= 80 ? "Excellent" : ctx_r2.analyticsResult.healthScore >= 60 ? "Good" : ctx_r2.analyticsResult.healthScore >= 40 ? "Fair" : "Poor", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analyticsResult.riskAssets.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analyticsResult.insights.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analyticsResult.optimizations.length > 0);
  }
}
function AIFeaturesComponent_div_15_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function AIFeaturesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "h2", 17);
    \u0275\u0275text(3, "AI Asset Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 18);
    \u0275\u0275text(5, "Get comprehensive insights into your asset portfolio with AI-powered analysis.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 169)(7, "div", 16)(8, "h3");
    \u0275\u0275text(9, "Asset Portfolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 170)(11, "button", 156);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_15_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addSampleAssets());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 26);
    \u0275\u0275element(13, "path", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Add Sample Assets ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 25);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSelectedAssets());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 26);
    \u0275\u0275element(17, "path", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Clear All ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, AIFeaturesComponent_div_15_div_19_Template, 2, 1, "div", 173)(20, AIFeaturesComponent_div_15_div_20_Template, 7, 0, "div", 174)(21, AIFeaturesComponent_div_15_div_21_Template, 19, 4, "div", 175)(22, AIFeaturesComponent_div_15_div_22_Template, 5, 4, "div", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AIFeaturesComponent_div_15_div_23_Template, 21, 7, "div", 177)(24, AIFeaturesComponent_div_15_div_24_Template, 3, 1, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r2.selectedAssets.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.selectedAssets.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedAssets.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedAssets.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedAssets.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.analyticsResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.errorMessage);
  }
}
function AIFeaturesComponent_div_16_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 278);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("name"), " ");
  }
}
function AIFeaturesComponent_div_16_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 278);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("manufacturer"), " ");
  }
}
function AIFeaturesComponent_div_16_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 278);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("model"), " ");
  }
}
function AIFeaturesComponent_div_16_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 278);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("serialNumber"), " ");
  }
}
function AIFeaturesComponent_div_16_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 278);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("description"), " ");
  }
}
function AIFeaturesComponent_div_16_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 279);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadingLocations ? "Loading locations..." : "Select a location", " ");
  }
}
function AIFeaturesComponent_div_16_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280)(1, "div", 281);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 282);
    \u0275\u0275element(3, "path", 283)(4, "path", 284);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 285);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedLocation.name);
  }
}
function AIFeaturesComponent_div_16_div_65_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 289);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_16_div_65_button_3_Template_button_click_0_listener() {
      const location_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectLocation(location_r29));
    });
    \u0275\u0275elementStart(1, "div", 290)(2, "div", 281);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 282);
    \u0275\u0275element(4, "path", 283)(5, "path", 284);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 291)(7, "div", 292);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 293);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const location_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r2.selectedLocation == null ? null : ctx_r2.selectedLocation.id) === location_r29.id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(location_r29.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getLocationDescription(location_r29));
  }
}
function AIFeaturesComponent_div_16_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 286)(1, "div", 287);
    \u0275\u0275text(2, "Select location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AIFeaturesComponent_div_16_div_65_button_3_Template, 11, 4, "button", 288);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.locations);
  }
}
function AIFeaturesComponent_div_16_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 278);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("location"), " ");
  }
}
function AIFeaturesComponent_div_16__svg_svg_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "path", 188);
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_16__svg_svg_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function AIFeaturesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 247)(1, "div", 248);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_16_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreateAssetModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 249)(3, "div", 250)(4, "div", 251)(5, "div", 252);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 253);
    \u0275\u0275element(7, "path", 102)(8, "polyline", 103)(9, "line", 104)(10, "line", 105)(11, "polyline", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 254)(13, "h2");
    \u0275\u0275text(14, "Create Asset Record");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Add a new asset to your inventory with detailed information");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 255);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_16_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreateAssetModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 86);
    \u0275\u0275element(19, "path", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 256)(21, "p", 257);
    \u0275\u0275text(22, "Complete the asset details based on AI recognition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "form", 258)(24, "div", 259)(25, "div", 260)(26, "label");
    \u0275\u0275text(27, "Asset Name ");
    \u0275\u0275elementStart(28, "span", 261);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 262);
    \u0275\u0275twoWayListener("ngModelChange", function AIFeaturesComponent_div_16_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.assetForm.name, $event) || (ctx_r2.assetForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, AIFeaturesComponent_div_16_div_31_Template, 2, 1, "div", 263);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 260)(33, "label");
    \u0275\u0275text(34, "Manufacturer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 264);
    \u0275\u0275twoWayListener("ngModelChange", function AIFeaturesComponent_div_16_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.assetForm.manufacturer, $event) || (ctx_r2.assetForm.manufacturer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AIFeaturesComponent_div_16_div_36_Template, 2, 1, "div", 263);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 259)(38, "div", 260)(39, "label");
    \u0275\u0275text(40, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 265);
    \u0275\u0275twoWayListener("ngModelChange", function AIFeaturesComponent_div_16_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.assetForm.model, $event) || (ctx_r2.assetForm.model = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, AIFeaturesComponent_div_16_div_42_Template, 2, 1, "div", 263);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 260)(44, "label");
    \u0275\u0275text(45, "Serial Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 266);
    \u0275\u0275twoWayListener("ngModelChange", function AIFeaturesComponent_div_16_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.assetForm.serialNumber, $event) || (ctx_r2.assetForm.serialNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, AIFeaturesComponent_div_16_div_47_Template, 2, 1, "div", 263);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 267)(49, "label");
    \u0275\u0275text(50, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "textarea", 268);
    \u0275\u0275twoWayListener("ngModelChange", function AIFeaturesComponent_div_16_Template_textarea_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.assetForm.description, $event) || (ctx_r2.assetForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, AIFeaturesComponent_div_16_div_52_Template, 2, 1, "div", 263);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 267)(54, "label");
    \u0275\u0275text(55, "Asset Location ");
    \u0275\u0275elementStart(56, "span", 261);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 269);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_16_Template_div_click_58_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(59, "button", 270);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_16_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleLocationDropdown());
    });
    \u0275\u0275elementStart(60, "div", 271);
    \u0275\u0275template(61, AIFeaturesComponent_div_16_span_61_Template, 2, 1, "span", 272)(62, AIFeaturesComponent_div_16_div_62_Template, 7, 1, "div", 273);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 274);
    \u0275\u0275element(64, "path", 275);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(65, AIFeaturesComponent_div_16_div_65_Template, 4, 1, "div", 276);
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, AIFeaturesComponent_div_16_div_66_Template, 2, 1, "div", 263);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(67, "div", 277)(68, "button", 25);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_16_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreateAssetModal());
    });
    \u0275\u0275text(69, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 28);
    \u0275\u0275listener("click", function AIFeaturesComponent_div_16_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createAsset());
    });
    \u0275\u0275template(71, AIFeaturesComponent_div_16__svg_svg_71_Template, 2, 0, "svg", 29)(72, AIFeaturesComponent_div_16__svg_svg_72_Template, 2, 0, "svg", 30);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(25);
    \u0275\u0275classProp("error", ctx_r2.hasFieldError("name"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error-input", ctx_r2.hasFieldError("name"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.assetForm.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasFieldError("name"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.hasFieldError("manufacturer"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r2.hasFieldError("manufacturer"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.assetForm.manufacturer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasFieldError("manufacturer"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r2.hasFieldError("model"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r2.hasFieldError("model"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.assetForm.model);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasFieldError("model"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.hasFieldError("serialNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r2.hasFieldError("serialNumber"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.assetForm.serialNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasFieldError("serialNumber"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.hasFieldError("description"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error-input", ctx_r2.hasFieldError("description"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.assetForm.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasFieldError("description"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.hasFieldError("location"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("error", ctx_r2.hasFieldError("location"))("active", ctx_r2.showLocationDropdown);
    \u0275\u0275property("disabled", ctx_r2.loadingLocations);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.selectedLocation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedLocation);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r2.showLocationDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.showLocationDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasFieldError("location"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isCreatingAsset);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isCreatingAsset || !ctx_r2.assetForm.name.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isCreatingAsset);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isCreatingAsset);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isCreatingAsset ? "Creating..." : "Create Asset", " ");
  }
}
var AIFeaturesComponent = class _AIFeaturesComponent {
  aiImageUploadService;
  locationService;
  fileInput;
  activeTab = "image-recognition";
  selectedFiles = [];
  filePreviews = {};
  errorMessage = "";
  analysisResult = null;
  isAnalyzing = false;
  // Feedback properties
  feedbackSubmitted = false;
  feedbackType = null;
  correctionText = "";
  isSubmittingFeedback = false;
  corrections = [];
  // Asset creation properties
  showCreateAssetModal = false;
  isCreatingAsset = false;
  assetForm = {
    name: "",
    model: "",
    description: "",
    manufacturer: "",
    serialNumber: "",
    location: ""
  };
  // Location properties
  destroy$ = new Subject();
  locations = [];
  loadingLocations = false;
  // Removed old analytics properties
  tabs = [
    { id: "image-recognition", label: "Image Recognition", icon: "camera" },
    { id: "predictive-maintenance", label: "Predictive Maintenance", icon: "trending-up" },
    { id: "natural-language", label: "Natural Language", icon: "message-circle" },
    { id: "recommendations", label: "Recommendations", icon: "lightbulb" },
    { id: "analytics", label: "AI Analytics", icon: "bar-chart" }
  ];
  assetTypes = [
    { name: "HVAC Units", icon: "hvac" },
    { name: "Generators", icon: "generator" },
    { name: "Pumps", icon: "pump" },
    { name: "Conveyor Systems", icon: "conveyor" },
    { name: "Vehicles", icon: "vehicle" },
    { name: "Machinery", icon: "machinery" },
    { name: "Electrical Panels", icon: "electrical" },
    { name: "Safety Equipment", icon: "safety" }
  ];
  constructor(aiImageUploadService, locationService) {
    this.aiImageUploadService = aiImageUploadService;
    this.locationService = locationService;
  }
  ngOnInit() {
    this.loadLocations();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setActiveTab(tabId) {
    this.activeTab = tabId;
  }
  getTabIcon(iconName) {
    const icons = {
      "camera": "M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2M12 4V6H12V4M12 8C10.9 8 10 8.9 10 10S10.9 12 12 12S14 11.1 14 10S13.1 8 12 8M12 14C10.9 14 10 14.9 10 16S10.9 18 12 18S14 17.1 14 16S13.1 14 12 14Z",
      "trending-up": "M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z",
      "message-circle": "M12 2C6.48 2 2 6.48 2 12C2 13.54 2.36 14.99 3 16.29L2 22L7.71 21C9.01 21.64 10.46 22 12 22C17.52 22 22 17.52 22 12S17.52 2 12 2M12 4C16.41 4 20 7.59 20 12S16.41 20 12 20C10.74 20 9.57 19.72 8.5 19.24L8 19L4 20L5 16L4.76 15.5C4.28 14.43 4 13.26 4 12C4 7.59 7.59 4 12 4M8 9V11H16V9H8M8 13V15H14V13H8Z",
      "lightbulb": "M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21Z",
      "bar-chart": "M22 21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"
    };
    return icons[iconName] || icons["camera"];
  }
  getAssetTypeIcon(iconName) {
    const icons = {
      "hvac": "M12 2L2 7L12 12L22 7L12 2Z",
      "generator": "M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z",
      "pump": "M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z",
      "conveyor": "M2 12H22M2 12L6 8M2 12L6 16M22 12L18 8M22 12L18 16",
      "vehicle": "M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z",
      "machinery": "M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z",
      "electrical": "M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z",
      "safety": "M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2Z"
    };
    return icons[iconName] || icons["hvac"];
  }
  // File handling methods
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
  onFileSelected(event) {
    const files = Array.from(event.target.files);
    this.addFiles(files);
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = Array.from(event.dataTransfer?.files || []);
    this.addFiles(files);
  }
  addFiles(files) {
    this.errorMessage = "";
    const file = files[0];
    if (!file)
      return;
    const validation = this.aiImageUploadService.validate(file);
    if (!validation.ok) {
      this.errorMessage = validation.reason || "Invalid file";
      return;
    }
    this.selectedFiles = [file];
    this.filePreviews = {};
    this.generateFilePreview(file);
  }
  generateFilePreview(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.filePreviews[file.name] = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
  getFilePreview(file) {
    return this.filePreviews[file.name] || "";
  }
  removeFile(index) {
    this.selectedFiles = [];
    this.filePreviews = {};
    this.errorMessage = "";
  }
  formatFileSize(bytes) {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  analyzeImages() {
    return __async(this, null, function* () {
      if (this.selectedFiles.length === 0) {
        this.errorMessage = "Please select at least one image";
        return;
      }
      this.isAnalyzing = true;
      this.errorMessage = "";
      this.analysisResult = null;
      this.feedbackSubmitted = false;
      this.feedbackType = null;
      this.correctionText = "";
      this.corrections = [];
      this.showCreateAssetModal = false;
      this.isCreatingAsset = false;
      this.selectedLocation = null;
      this.showLocationDropdown = false;
      this.assetForm = {
        name: "",
        model: "",
        description: "",
        manufacturer: "",
        serialNumber: "",
        location: ""
      };
      try {
        const dataUrls = [];
        for (const file of this.selectedFiles) {
          const dataUrl = yield this.aiImageUploadService.toDataUrl(file);
          dataUrls.push(dataUrl);
        }
        const cleanImages = dataUrls.map((img) => {
          if (img.startsWith("data:image/")) {
            return img.split(",")[1] || img;
          }
          return img;
        });
        this.aiImageUploadService.analyze(cleanImages).subscribe({
          next: (response) => {
            if (response.success) {
              this.analysisResult = response.data;
            } else {
              this.errorMessage = "Analysis failed. Please try again.";
            }
            this.isAnalyzing = false;
          },
          error: (error) => {
            this.errorMessage = error?.error?.message || "Analysis failed. Please try again.";
            this.isAnalyzing = false;
          }
        });
      } catch (error) {
        console.log(error);
        this.errorMessage = "Failed to process images. Please try again.";
        this.isAnalyzing = false;
      }
    });
  }
  // Feedback methods
  selectFeedback(type) {
    this.feedbackType = type;
  }
  submitFeedback() {
    if (!this.feedbackType)
      return;
    if (this.feedbackType === "needs_correction" && this.corrections.length === 0) {
      return;
    }
    this.isSubmittingFeedback = true;
    setTimeout(() => {
      this.feedbackSubmitted = true;
      this.errorMessage = "";
      this.isSubmittingFeedback = false;
      console.log("Feedback submitted:", {
        type: this.feedbackType,
        corrections: this.corrections.map((c) => c.value)
      });
      setTimeout(() => {
        this.feedbackSubmitted = false;
        this.feedbackType = null;
        this.correctionText = "";
        this.corrections = [];
      }, 3e3);
    }, 1e3);
  }
  cancelFeedback() {
    this.feedbackType = null;
    this.correctionText = "";
    this.corrections = [];
  }
  addCorrection() {
    this.corrections.push({ field: "", value: "" });
  }
  removeCorrection(index) {
    this.corrections.splice(index, 1);
  }
  updateCorrection(index, field, value) {
    this.corrections[index][field] = value;
  }
  getConditionClass(condition) {
    return condition.toLowerCase();
  }
  // Location methods
  loadLocations() {
    this.loadingLocations = true;
    this.locationService.getLocations({
      per_page: 1e3,
      // Get all locations
      page: 1
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.locations = response.data.locations;
          this.locations.sort((a, b) => a.name.localeCompare(b.name));
        }
        this.loadingLocations = false;
      },
      error: (error) => {
        console.error("Error loading locations:", error);
        this.loadingLocations = false;
      }
    });
  }
  // Dropdown state
  showLocationDropdown = false;
  selectedLocation = null;
  // Asset creation methods
  openCreateAssetModal() {
    if (this.analysisResult) {
      this.assetForm = {
        name: this.analysisResult.assetType || "",
        model: this.analysisResult.model || "",
        description: `AI-identified ${this.analysisResult.assetType} in ${this.analysisResult.condition.toLowerCase()} condition`,
        manufacturer: this.analysisResult.manufacturer || "",
        serialNumber: this.analysisResult.serialNumber || "",
        location: ""
      };
    }
    this.showCreateAssetModal = true;
  }
  closeCreateAssetModal() {
    this.showCreateAssetModal = false;
    this.assetForm = {
      name: "",
      model: "",
      description: "",
      manufacturer: "",
      serialNumber: "",
      location: ""
    };
    this.selectedLocation = null;
    this.showLocationDropdown = false;
  }
  // Dropdown methods
  toggleLocationDropdown() {
    this.showLocationDropdown = !this.showLocationDropdown;
  }
  selectLocation(location) {
    this.selectedLocation = location;
    this.showLocationDropdown = false;
    this.assetForm.location = location?.id ?? null;
  }
  getLocationDescription(location) {
    return location.description || `Location ID: ${location.id}`;
  }
  closeOnOutsideClick() {
    this.showLocationDropdown = false;
  }
  // Validation helpers
  hasFieldError(controlName) {
    return false;
  }
  getFieldError(controlName) {
    return "";
  }
  createAsset() {
    if (!this.assetForm.name.trim()) {
      this.errorMessage = "Asset name is required";
      return;
    }
    this.isCreatingAsset = true;
    setTimeout(() => {
      this.isCreatingAsset = false;
      this.showCreateAssetModal = false;
      this.analysisResult = null;
      this.selectedFiles = [];
      this.filePreviews = {};
      this.errorMessage = "";
    }, 1500);
  }
  static \u0275fac = function AIFeaturesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIFeaturesComponent)(\u0275\u0275directiveInject(AIImageUploadService), \u0275\u0275directiveInject(LocationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIFeaturesComponent, selectors: [["app-ai-features"]], viewQuery: function AIFeaturesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c09, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, hostBindings: function AIFeaturesComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AIFeaturesComponent_click_HostBindingHandler() {
        return ctx.closeOnOutsideClick();
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 17, vars: 8, consts: [["fileInput", ""], ["analyticsFileInput", ""], [1, "ai-features-container"], [1, "header-section"], [1, "main-title"], [1, "main-description"], [1, "tabs-container"], [1, "tabs-nav"], ["class", "tab-button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["class", "tab-panel", 4, "ngIf"], ["class", "create-asset-modal", 4, "ngIf"], [1, "tab-button", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "tab-icon"], [1, "tab-label"], [1, "tab-panel"], [1, "section-header"], [1, "section-title"], [1, "section-description"], [1, "upload-section"], [1, "upload-area", 3, "click", "dragover", "drop"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "single-image-preview", 4, "ngIf"], ["type", "file", "accept", "image/png,image/jpeg,image/jpg", 2, "display", "none", 3, "change"], [1, "upload-actions"], [1, "btn-secondary", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M17 8L12 3M12 3L7 8M12 3V15"], [1, "btn-primary", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "animate-spin", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "recognition-results", 4, "ngIf"], [1, "supported-assets-section"], [1, "asset-types-grid"], ["class", "asset-type-card", 4, "ngFor", "ngForOf"], [1, "upload-placeholder"], [1, "upload-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"], ["cx", "12", "cy", "13", "r", "3"], [1, "upload-title"], [1, "upload-text"], [1, "upload-hint"], [1, "single-image-preview"], [1, "preview-item"], [1, "preview-image", 3, "src", "alt"], [1, "preview-overlay"], ["title", "Remove image", 1, "remove-preview", 3, "click"], ["d", "M18 6L6 18M6 6L18 18"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "animate-spin"], ["d", "M21 12a9 9 0 11-6.219-8.56"], [1, "loading-overlay"], [1, "loading-content"], [1, "loading-animation"], [1, "ai-brain"], [1, "brain-pulse"], [1, "brain-pulse", "delay-1"], [1, "brain-pulse", "delay-2"], [1, "loading-description"], [1, "loading-steps"], [1, "step", "active"], [1, "step-icon"], [1, "step"], [1, "loading-tip"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], ["d", "M12 17h.01"], [1, "error-message"], [1, "recognition-results"], [1, "results-header"], [1, "header-content"], [1, "header-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 12l2 2 4-4"], ["d", "M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"], ["d", "M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"], ["d", "M13 12h3a2 2 0 0 1 2 2v1"], ["d", "M13 12H9"], ["d", "M9 12H6a2 2 0 0 0-2 2v1"], [1, "header-text"], [1, "results-card"], [1, "card-header"], [1, "asset-type"], [1, "type-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["x1", "8", "y1", "21", "x2", "16", "y2", "21"], ["x1", "12", "y1", "17", "x2", "12", "y2", "21"], [1, "type-info"], [1, "card-content"], [1, "details-grid"], ["class", "detail-item", 4, "ngIf"], ["class", "detail-item condition-item", 4, "ngIf"], ["class", "description", 4, "ngIf"], ["class", "recommendations-card", 4, "ngIf"], ["class", "feedback-card", 4, "ngIf"], ["class", "success-card", 4, "ngIf"], [1, "create-asset-section"], [1, "create-asset-btn", 3, "click"], [1, "btn-icon"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14,2 14,8 20,8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10,9 9,9 8,9"], [1, "btn-text"], [1, "btn-title"], [1, "btn-subtitle"], [1, "detail-item"], [1, "detail-label"], ["d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "detail-value"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["d", "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"], ["x1", "7", "y1", "7", "x2", "7.01", "y2", "7"], [1, "detail-item", "condition-item"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "description"], [1, "description-content"], [1, "recommendations-card"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "recommendations-list"], ["class", "recommendation-item", 4, "ngFor", "ngForOf"], [1, "recommendation-item"], [1, "rec-icon"], ["points", "20,6 9,17 4,12"], [1, "feedback-card"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "feedback-content"], [1, "feedback-options"], [1, "feedback-btn", "accurate", 3, "click"], ["d", "M14 9V5a3 3 0 0 0-6 0v4"], ["x", "2", "y", "9", "width", "20", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 13h10"], [1, "feedback-btn", "needs-correction", 3, "click"], ["d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"], ["class", "correction-section", 4, "ngIf"], ["class", "feedback-actions", 4, "ngIf"], [1, "correction-section"], [1, "corrections-list"], ["class", "correction-item", 4, "ngFor", "ngForOf"], ["type", "button", 1, "add-correction", 3, "click"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "correction-item"], ["type", "text", "placeholder", "Enter correction...", 1, "correction-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "remove-correction", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "feedback-actions"], [1, "btn-secondary", 3, "click"], [1, "success-card"], [1, "success-content"], [1, "success-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "asset-type-card"], [1, "asset-icon-wrapper"], [1, "asset-type-icon"], [1, "asset-type-info"], [1, "asset-type-name"], [1, "asset-type-status"], [1, "loading-spinner"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "animate-spin"], [1, "analytics-section"], [1, "section-actions"], ["d", "M12 5v14M5 12h14"], ["d", "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"], ["class", "selected-assets", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "image-upload-section", 4, "ngIf"], ["class", "analysis-actions", 4, "ngIf"], ["class", "analytics-results", 4, "ngIf"], [1, "selected-assets"], ["class", "asset-card", 4, "ngFor", "ngForOf"], [1, "asset-card"], [1, "asset-info"], [1, "asset-details"], [1, "asset-meta"], [1, "asset-status"], [1, "status-badge", 3, "ngClass"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", 1, "empty-icon"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "image-upload-section"], [1, "image-upload-area"], ["type", "file", "accept", "image/*", "multiple", "", 1, "file-input", 3, "change", "disabled"], [1, "upload-prompt", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "upload-icon"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "17,8 12,3 7,8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "upload-limit"], ["class", "image-previews", 4, "ngIf"], ["class", "image-actions", 4, "ngIf"], [1, "image-previews"], ["class", "preview-item", 4, "ngFor", "ngForOf"], [3, "src", "alt"], [1, "remove-image", 3, "click"], [1, "image-actions"], [1, "analysis-actions"], ["d", "M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"], [1, "analytics-results"], [1, "health-score-section"], [1, "health-score-display"], [1, "score-circle", 3, "ngClass"], [1, "score-value"], [1, "score-label"], [1, "score-description"], [1, "score-status", 3, "ngClass"], ["class", "risk-assets-section", 4, "ngIf"], ["class", "insights-section", 4, "ngIf"], ["class", "optimizations-section", 4, "ngIf"], [1, "risk-assets-section"], [1, "risk-assets-list"], ["class", "risk-asset-card", 4, "ngFor", "ngForOf"], [1, "risk-asset-card"], [1, "risk-info"], [1, "risk-reason"], [1, "risk-meta"], [1, "risk-level", 3, "ngClass"], [1, "confidence"], [1, "insights-section"], [1, "insights-list"], ["class", "insight-card", 4, "ngFor", "ngForOf"], [1, "insight-card"], [1, "insight-header"], [1, "impact-badge", 3, "ngClass"], [1, "insight-description"], [1, "insight-action"], [1, "optimizations-section"], [1, "optimizations-list"], ["class", "optimization-card", 4, "ngFor", "ngForOf"], [1, "optimization-card"], [1, "optimization-header"], [1, "savings-info"], [1, "savings-amount"], [1, "payback-period"], [1, "optimization-description"], [1, "optimization-confidence"], [1, "confidence-label"], [1, "confidence-value"], [1, "create-asset-modal"], [1, "modal-overlay", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "title-icon"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "modal-icon"], [1, "title-content"], [1, "close-modal", 3, "click"], [1, "modal-body"], [1, "modal-subtitle"], [1, "asset-form"], [1, "form-grid-row"], [1, "form-group"], [1, "required"], ["type", "text", "name", "name", "placeholder", "Enter asset name", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["type", "text", "name", "manufacturer", "placeholder", "Enter manufacturer", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "model", "placeholder", "Enter model", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "serialNumber", "placeholder", "Enter serial number", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-width"], ["name", "description", "placeholder", "Enter description", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "relative", "generic-dropdown", 3, "click"], ["type", "button", 1, "dropdown-button", 3, "click", "disabled"], [1, "dropdown-content"], ["class", "placeholder", 4, "ngIf"], ["class", "selected-item", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "dropdown-menu", 4, "ngIf"], [1, "modal-footer"], [1, "field-error"], [1, "placeholder"], [1, "selected-item"], [1, "item-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "selected-text"], [1, "dropdown-menu"], [1, "dropdown-header"], ["type", "button", "class", "dropdown-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "item-content"], [1, "item-details"], [1, "item-name"], [1, "item-description"]], template: function AIFeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
      \u0275\u0275text(3, "AI-Powered Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 5);
      \u0275\u0275text(5, "Transform your asset management with cutting-edge AI technology. Automate identification, predict maintenance needs, and optimize operations with intelligent insights.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
      \u0275\u0275template(8, AIFeaturesComponent_button_8_Template, 5, 4, "button", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 9);
      \u0275\u0275template(10, AIFeaturesComponent_div_10_Template, 33, 12, "div", 10)(11, AIFeaturesComponent_div_11_Template, 2, 0, "div", 10)(12, AIFeaturesComponent_div_12_Template, 2, 0, "div", 10)(13, AIFeaturesComponent_div_13_Template, 2, 0, "div", 10)(14, AIFeaturesComponent_div_14_Template, 2, 0, "div", 10)(15, AIFeaturesComponent_div_15_Template, 25, 7, "div", 10)(16, AIFeaturesComponent_div_16_Template, 74, 48, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "image-recognition");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "predictive-maintenance");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "natural-language");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "recommendations");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "analytics");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCreateAssetModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, PredictiveMaintenanceComponent, NaturalLanguageComponent, AIRecommendationsComponent, AIAnalyticsComponent], styles: ['@charset "UTF-8";\n\n\n\n.ai-features-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  background: #ffffff;\n  min-height: 100vh;\n}\n.header-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.header-section[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.header-section[_ngcontent-%COMP%]   .main-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n}\n.tabs-container[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.tabs-container[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  gap: 0;\n}\n.tabs-container[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border: none;\n  background: transparent;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.tabs-container[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background: #f9fafb;\n}\n.tabs-container[_ngcontent-%COMP%]   .tabs-nav[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n  background: #f0f9ff;\n}\n.tab-panel[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.tab-panel[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n.tab-panel[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0;\n}\n.upload-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px dashed #d1d5db;\n  border-radius: 8px;\n  padding: 60px 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background: #f8fafc;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area.dragover[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #f0f9ff;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   .upload-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 8px 0;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   .upload-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  color: #6b7280;\n  margin: 0 0 8px 0;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   .upload-hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #9ca3af;\n  margin: 0;\n  font-style: italic;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .single-image-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .single-image-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .single-image-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 300px;\n  object-fit: cover;\n  display: block;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .single-image-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   .preview-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .single-image-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   .preview-overlay[_ngcontent-%COMP%]   .remove-preview[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.9);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s ease;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .single-image-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   .preview-overlay[_ngcontent-%COMP%]   .remove-preview[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.9);\n}\n.upload-section[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], \n.upload-section[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:disabled, \n.upload-section[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.upload-section[_ngcontent-%COMP%]   .upload-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.supported-assets-section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n  margin-top: 24px;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%]   .asset-type-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%]   .asset-type-card[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1);\n  transform: translateY(-2px);\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%]   .asset-type-card[_ngcontent-%COMP%]   .asset-icon-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%]   .asset-type-card[_ngcontent-%COMP%]   .asset-icon-wrapper[_ngcontent-%COMP%]   .asset-type-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #f0f9ff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3b82f6;\n  transition: all 0.2s ease;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%]   .asset-type-card[_ngcontent-%COMP%]   .asset-type-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%]   .asset-type-card[_ngcontent-%COMP%]   .asset-type-info[_ngcontent-%COMP%]   .asset-type-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%]   .asset-type-card[_ngcontent-%COMP%]   .asset-type-info[_ngcontent-%COMP%]   .asset-type-status[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #10b981;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%]   .asset-type-card[_ngcontent-%COMP%]   .asset-type-info[_ngcontent-%COMP%]   .asset-type-status[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  font-size: 0.75rem;\n}\n.supported-assets-section[_ngcontent-%COMP%]   .asset-types-grid[_ngcontent-%COMP%]   .asset-type-card[_ngcontent-%COMP%]:hover   .asset-icon-wrapper[_ngcontent-%COMP%]   .asset-type-icon[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: #ffffff;\n}\n.file-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.file-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n}\n.file-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.file-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(239, 68, 68, 0.9);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.file-preview[_ngcontent-%COMP%]   .preview-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.9);\n}\n.analyze-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #8b5cf6);\n  color: white;\n  border: none;\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 auto;\n}\n.analyze-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);\n}\n.analyze-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.analyze-button[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  max-width: 480px;\n  width: 90%;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-animation[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-animation[_ngcontent-%COMP%]   .ai-brain[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-animation[_ngcontent-%COMP%]   .ai-brain[_ngcontent-%COMP%]   .brain-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-animation[_ngcontent-%COMP%]   .ai-brain[_ngcontent-%COMP%]   .brain-pulse.delay-1[_ngcontent-%COMP%] {\n  animation-delay: 0.5s;\n  border-color: #8b5cf6;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-animation[_ngcontent-%COMP%]   .ai-brain[_ngcontent-%COMP%]   .brain-pulse.delay-2[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n  border-color: #06b6d4;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #1f2937;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-description[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  color: #6b7280;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-steps[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  opacity: 0.4;\n  transition: opacity 0.3s ease;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-steps[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f3f4f6;\n  border-radius: 50%;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-tip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f0f9ff;\n  border: 1px solid #e0f2fe;\n  border-radius: 8px;\n  color: #0369a1;\n  font-size: 0.875rem;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-tip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(0.8);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.2);\n    opacity: 0;\n  }\n}\n.recognition-results[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  color: white;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.recognition-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.9;\n  font-size: 1rem;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%], \n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%], \n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%], \n.recognition-results[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .asset-type[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .asset-type[_ngcontent-%COMP%]   .type-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #3b82f6;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .asset-type[_ngcontent-%COMP%]   .type-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .asset-type[_ngcontent-%COMP%]   .type-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.condition-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  max-width: fit-content;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.condition-badge.condition-excellent[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.condition-badge.condition-good[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.condition-badge.condition-fair[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.condition-badge.condition-poor[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .description-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .description-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.recognition-results[_ngcontent-%COMP%]   .results-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .description-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  padding: 20px 24px;\n  border-bottom: 1px solid #fde68a;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #f59e0b;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #92400e;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #a16207;\n  font-size: 0.875rem;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .recommendations-list[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .recommendations-list[_ngcontent-%COMP%]   .recommendation-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .recommendations-list[_ngcontent-%COMP%]   .recommendation-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .recommendations-list[_ngcontent-%COMP%]   .recommendation-item[_ngcontent-%COMP%]   .rec-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: #dcfce7;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .recommendations-list[_ngcontent-%COMP%]   .recommendation-item[_ngcontent-%COMP%]   .rec-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.recognition-results[_ngcontent-%COMP%]   .recommendations-card[_ngcontent-%COMP%]   .recommendations-list[_ngcontent-%COMP%]   .recommendation-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  padding: 20px 24px;\n  border-bottom: 1px solid #dbeafe;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #3b82f6;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1e40af;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #3730a3;\n  font-size: 0.875rem;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%]   .feedback-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%]   .feedback-btn[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background: #f8fafc;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%]   .feedback-btn.selected[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%]   .feedback-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%]   .feedback-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%]   .feedback-btn.selected[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%]   .feedback-btn.selected[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%]   .feedback-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]   .btn-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-options[_ngcontent-%COMP%]   .feedback-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]   .btn-subtitle[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .corrections-list[_ngcontent-%COMP%]   .correction-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .corrections-list[_ngcontent-%COMP%]   .correction-item[_ngcontent-%COMP%]   .correction-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .corrections-list[_ngcontent-%COMP%]   .correction-item[_ngcontent-%COMP%]   .correction-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .corrections-list[_ngcontent-%COMP%]   .correction-item[_ngcontent-%COMP%]   .remove-correction[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .corrections-list[_ngcontent-%COMP%]   .correction-item[_ngcontent-%COMP%]   .remove-correction[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #ef4444;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .corrections-list[_ngcontent-%COMP%]   .add-correction[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border: 2px dashed #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #6b7280;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .correction-section[_ngcontent-%COMP%]   .corrections-list[_ngcontent-%COMP%]   .add-correction[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.recognition-results[_ngcontent-%COMP%]   .feedback-card[_ngcontent-%COMP%]   .feedback-content[_ngcontent-%COMP%]   .feedback-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n}\n.recognition-results[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  padding: 32px 24px;\n  text-align: center;\n}\n.recognition-results[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n  margin-bottom: 16px;\n}\n.recognition-results[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #166534;\n}\n.recognition-results[_ngcontent-%COMP%]   .success-card[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #15803d;\n  font-size: 0.875rem;\n}\n.recognition-results[_ngcontent-%COMP%]   .create-asset-section[_ngcontent-%COMP%]   .create-asset-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.recognition-results[_ngcontent-%COMP%]   .create-asset-section[_ngcontent-%COMP%]   .create-asset-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1);\n}\n.recognition-results[_ngcontent-%COMP%]   .create-asset-section[_ngcontent-%COMP%]   .create-asset-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.recognition-results[_ngcontent-%COMP%]   .create-asset-section[_ngcontent-%COMP%]   .create-asset-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.recognition-results[_ngcontent-%COMP%]   .create-asset-section[_ngcontent-%COMP%]   .create-asset-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.recognition-results[_ngcontent-%COMP%]   .create-asset-section[_ngcontent-%COMP%]   .create-asset-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]   .btn-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.recognition-results[_ngcontent-%COMP%]   .create-asset-section[_ngcontent-%COMP%]   .create-asset-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]   .btn-subtitle[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.analysis-results[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 24px;\n  margin-top: 24px;\n}\n.analysis-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.analysis-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.analysis-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .confidence-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.analysis-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .confidence-badge.high[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.analysis-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .confidence-badge.medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.analysis-results[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   .confidence-badge.low[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.analysis-results[_ngcontent-%COMP%]   .key-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.analysis-results[_ngcontent-%COMP%]   .key-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 4px;\n}\n.analysis-results[_ngcontent-%COMP%]   .key-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n}\n.analysis-results[_ngcontent-%COMP%]   .condition-assessment[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.analysis-results[_ngcontent-%COMP%]   .condition-assessment[_ngcontent-%COMP%]   .condition-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.analysis-results[_ngcontent-%COMP%]   .condition-assessment[_ngcontent-%COMP%]   .condition-badge.excellent[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.analysis-results[_ngcontent-%COMP%]   .condition-assessment[_ngcontent-%COMP%]   .condition-badge.good[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.analysis-results[_ngcontent-%COMP%]   .condition-assessment[_ngcontent-%COMP%]   .condition-badge.fair[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.analysis-results[_ngcontent-%COMP%]   .condition-assessment[_ngcontent-%COMP%]   .condition-badge.poor[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.analysis-results[_ngcontent-%COMP%]   .recommendations[_ngcontent-%COMP%]   .recommendations-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 12px;\n}\n.analysis-results[_ngcontent-%COMP%]   .recommendations[_ngcontent-%COMP%]   .recommendation-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.analysis-results[_ngcontent-%COMP%]   .recommendations[_ngcontent-%COMP%]   .recommendation-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 0;\n  color: #374151;\n}\n.analysis-results[_ngcontent-%COMP%]   .recommendations[_ngcontent-%COMP%]   .recommendation-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  color: #3b82f6;\n  font-weight: bold;\n  margin-top: 2px;\n}\n.feedback-section[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 24px;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 16px;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-buttons[_ngcontent-%COMP%]   .feedback-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-buttons[_ngcontent-%COMP%]   .feedback-btn[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-buttons[_ngcontent-%COMP%]   .feedback-btn.selected[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.feedback-section[_ngcontent-%COMP%]   .correction-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n.feedback-section[_ngcontent-%COMP%]   .correction-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 16px;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.feedback-section[_ngcontent-%COMP%]   .feedback-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n.feedback-section[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n  padding: 12px;\n  border-radius: 8px;\n  font-weight: 500;\n  margin-top: 16px;\n}\n.asset-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #6b7280;\n  cursor: pointer;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selection-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selection-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selection-header[_ngcontent-%COMP%]   .add-sample-btn[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selection-header[_ngcontent-%COMP%]   .add-sample-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selected-assets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selected-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selected-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   .asset-info[_ngcontent-%COMP%]   .asset-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  margin: 0 0 4px 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selected-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   .asset-info[_ngcontent-%COMP%]   .asset-type[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selected-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  border: none;\n  border-radius: 4px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.analytics-section[_ngcontent-%COMP%]   .asset-selection[_ngcontent-%COMP%]   .selected-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .health-score[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #8b5cf6);\n  color: white;\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n  margin-bottom: 24px;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .health-score[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .health-score[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  opacity: 0.9;\n  margin: 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 16px 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]:last-child, \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]:last-child, \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]:last-child, \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]:last-child, \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]:last-child, \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]:last-child, \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]:last-child, \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]:last-child, \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 8px 0;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 0.875rem;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.high[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.medium[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .risk-assets[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .insights[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .risk-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .risk-level.low[_ngcontent-%COMP%], \n.analytics-section[_ngcontent-%COMP%]   .analytics-results[_ngcontent-%COMP%]   .optimizations[_ngcontent-%COMP%]   .optimization-item[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   .impact-level.low[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 12px;\n  border-radius: 8px;\n  margin: 16px 0;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .ai-features-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .tabs-nav[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .tabs-nav[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 120px;\n  }\n  .key-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .feedback-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n    padding: 16px;\n  }\n  .selected-assets[_ngcontent-%COMP%]   .asset-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.create-asset-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 20px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.35);\n  width: 100%;\n  max-width: 700px;\n  max-height: 90vh;\n  overflow-y: auto;\n  z-index: 10001;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 40px 40px 24px 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 20px 20px 0 0;\n  margin-bottom: 0;\n  position: relative;\n  overflow: hidden;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #8b5cf6,\n      #06b6d4);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  flex: 1;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  border-radius: 16px;\n  padding: 16px;\n  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%] {\n  color: white;\n  width: 28px;\n  height: 28px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 0 0 8px 0;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #64748b;\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-modal[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n  cursor: pointer;\n  padding: 14px;\n  border-radius: 14px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  flex-shrink: 0;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-modal[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #374151;\n  border-color: #cbd5e1;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-modal[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 40px;\n  background: white;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.95rem;\n  margin-bottom: 24px;\n  text-align: center;\n  font-weight: 500;\n  padding: 14px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 8px;\n  border-left: 3px solid #3b82f6;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-grid-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group.error[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n  background: white;\n  color: #1e293b;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error-input[_ngcontent-%COMP%], \n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.error-input[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #ef4444;\n  margin-top: 4px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 18px 24px;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  background: white;\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  text-align: left;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);\n  transform: translateY(-1px);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button.active[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:disabled {\n  background-color: #f9fafb;\n  color: #9ca3af;\n  cursor: not-allowed;\n  border-color: #e2e8f0;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-weight: 400;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   .selected-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e293b;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.3s ease;\n  flex-shrink: 0;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-button[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   .dropdown-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  margin-top: 4px;\n  overflow: hidden;\n  animation: slideDown 0.2s ease-out;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 20px;\n  border: none;\n  background: white;\n  color: #1e293b;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f1f5f9;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1e40af;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e293b;\n  margin-bottom: 2px;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .asset-form[_ngcontent-%COMP%]   .generic-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 20px;\n  padding: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 0 0 20px 20px;\n  border-top: 1px solid #e2e8f0;\n  position: relative;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #8b5cf6,\n      #06b6d4);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 18px 36px;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  background: white;\n  color: #64748b;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.5s ease;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  transform: translateY(-3px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  left: 100%;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 36px;\n  border: none;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 12px 24px rgba(59, 130, 246, 0.4);\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  left: 100%;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.create-asset-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .create-asset-modal[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n    padding: 32px 24px 20px 24px;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%] {\n    align-self: center;\n    padding: 12px;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .title-icon[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-subtitle[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n    margin-bottom: 32px;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 24px;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n    flex-direction: column;\n    gap: 16px;\n  }\n  .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], \n   .create-asset-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 16px 24px;\n  }\n}\n/*# sourceMappingURL=ai-features.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIFeaturesComponent, [{
    type: Component,
    args: [{ selector: "app-ai-features", standalone: true, imports: [CommonModule, FormsModule, PredictiveMaintenanceComponent, NaturalLanguageComponent, AIRecommendationsComponent, AIAnalyticsComponent], template: `<div class="ai-features-container">\r
  <!-- Header Section -->\r
  <div class="header-section">\r
    <h1 class="main-title">AI-Powered Features</h1>\r
    <p class="main-description">Transform your asset management with cutting-edge AI technology. Automate identification, predict maintenance needs, and optimize operations with intelligent insights.</p>\r
  </div>\r
\r
  <!-- Tabs Navigation -->\r
  <div class="tabs-container">\r
    <div class="tabs-nav">\r
      <button\r
        *ngFor="let tab of tabs"\r
        [class.active]="activeTab === tab.id"\r
        (click)="setActiveTab(tab.id)"\r
        class="tab-button">\r
        <svg class="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path [attr.d]="getTabIcon(tab.icon)"></path>\r
        </svg>\r
        <span class="tab-label">{{ tab.label }}</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Tab Content -->\r
  <div class="tab-content">\r
    <!-- Image Recognition Tab -->\r
    <div *ngIf="activeTab === 'image-recognition'" class="tab-panel">\r
      <div class="section-header">\r
        <h2 class="section-title">AI Image Recognition</h2>\r
        <p class="section-description">Upload asset images for automatic identification, condition assessment, and intelligent data extraction.</p>\r
      </div>\r
\r
      <!-- Asset Image Upload Section -->\r
      <div class="upload-section">\r
        <div class="upload-area" (click)="triggerFileInput()" (dragover)="onDragOver($event)" (drop)="onDrop($event)">\r
          <!-- Upload Placeholder (when no files) -->\r
          <div class="upload-placeholder" *ngIf="selectedFiles.length === 0">\r
            <div class="upload-icon">\r
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>\r
                <circle cx="12" cy="13" r="3"></circle>\r
            </svg>\r
          </div>\r
            <h3 class="upload-title">Upload Asset Image</h3>\r
            <p class="upload-text">Drag & drop your image here, or click to browse</p>\r
            <p class="upload-hint">PNG, JPG, JPEG up to 10MB \u2022 High-quality, well-lit images recommended</p>\r
        </div>\r
\r
            <!-- Single Image Preview -->\r
            <div class="single-image-preview" *ngIf="selectedFiles.length > 0">\r
              <div class="preview-item">\r
                <img [src]="getFilePreview(selectedFiles[0])" [alt]="selectedFiles[0].name" class="preview-image">\r
                <div class="preview-overlay">\r
                  <button class="remove-preview" (click)="removeFile(0)" title="Remove image">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M18 6L6 18M6 6L18 18"></path>\r
                    </svg>\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <input #fileInput type="file" accept="image/png,image/jpeg,image/jpg" (change)="onFileSelected($event)" style="display: none;">\r
          </div>\r
\r
        <!-- Action Buttons -->\r
        <div class="upload-actions">\r
          <button class="btn-secondary" (click)="triggerFileInput()" [disabled]="isAnalyzing">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M17 8L12 3M12 3L7 8M12 3V15"></path>\r
            </svg>\r
            Upload Images\r
          </button>\r
          <button class="btn-primary" (click)="analyzeImages()" [disabled]="!selectedFiles.length || isAnalyzing">\r
            <svg *ngIf="!isAnalyzing" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M17 8L12 3M12 3L7 8M12 3V15"></path>\r
            </svg>\r
            <svg *ngIf="isAnalyzing" class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M21 12a9 9 0 11-6.219-8.56"></path>\r
            </svg>\r
            {{ isAnalyzing ? 'Analyzing...' : 'Analyze Image' }}\r
          </button>\r
              </div>\r
\r
        <!-- Loading Overlay -->\r
        <div class="loading-overlay" *ngIf="isAnalyzing">\r
          <div class="loading-content">\r
            <div class="loading-animation">\r
              <div class="ai-brain">\r
                <div class="brain-pulse"></div>\r
                <div class="brain-pulse delay-1"></div>\r
                <div class="brain-pulse delay-2"></div>\r
              </div>\r
            </div>\r
            <h3>AI is Analyzing Your Image</h3>\r
            <p class="loading-description">Our advanced AI is examining your asset image to identify its type, condition, and provide intelligent recommendations.</p>\r
            <div class="loading-steps">\r
              <div class="step active">\r
                <div class="step-icon">\u{1F50D}</div>\r
                <span>Scanning image details</span>\r
              </div>\r
              <div class="step">\r
                <div class="step-icon">\u{1F916}</div>\r
                <span>AI processing</span>\r
              </div>\r
              <div class="step">\r
                <div class="step-icon">\u{1F4CA}</div>\r
                <span>Generating results</span>\r
              </div>\r
              </div>\r
            <div class="loading-tip">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <circle cx="12" cy="12" r="10"></circle>\r
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\r
                <path d="M12 17h.01"></path>\r
              </svg>\r
              <span>This usually takes 10-30 seconds</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Error Message -->\r
        <div class="error-message" *ngIf="errorMessage">\r
          <p>{{ errorMessage }}</p>\r
        </div>\r
\r
        <!-- Recognition Results -->\r
        <div class="recognition-results" *ngIf="analysisResult">\r
          <!-- Results Header -->\r
          <div class="results-header">\r
            <div class="header-content">\r
              <div class="header-icon">\r
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M9 12l2 2 4-4"></path>\r
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>\r
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>\r
                  <path d="M13 12h3a2 2 0 0 1 2 2v1"></path>\r
                  <path d="M13 12H9"></path>\r
                  <path d="M9 12H6a2 2 0 0 0-2 2v1"></path>\r
                </svg>\r
              </div>\r
              <div class="header-text">\r
                <h3>AI Recognition Complete</h3>\r
                <p>Your asset has been successfully analyzed</p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Main Results Card -->\r
          <div class="results-card">\r
            <div class="card-header">\r
              <div class="asset-type">\r
                <div class="type-icon">\r
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>\r
                    <line x1="8" y1="21" x2="16" y2="21"></line>\r
                    <line x1="12" y1="17" x2="12" y2="21"></line>\r
                  </svg>\r
                </div>\r
                <div class="type-info">\r
                  <h4>{{ analysisResult.assetType }}</h4>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="card-content">\r
              <div class="details-grid">\r
                <div class="detail-item" *ngIf="analysisResult.manufacturer">\r
                  <div class="detail-label">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>\r
                    </svg>\r
                    Manufacturer\r
                  </div>\r
                  <div class="detail-value">{{ analysisResult.manufacturer }}</div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="analysisResult.model">\r
                  <div class="detail-label">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>\r
                      <line x1="8" y1="21" x2="16" y2="21"></line>\r
                      <line x1="12" y1="17" x2="12" y2="21"></line>\r
                    </svg>\r
                    Model\r
                  </div>\r
                  <div class="detail-value">{{ analysisResult.model }}</div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="analysisResult.serialNumber">\r
                  <div class="detail-label">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>\r
                      <polyline points="22,6 12,13 2,6"></polyline>\r
                    </svg>\r
                    Serial Number\r
                  </div>\r
                  <div class="detail-value">{{ analysisResult.serialNumber }}</div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="analysisResult.assetTag">\r
                  <div class="detail-label">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>\r
                      <line x1="7" y1="7" x2="7.01" y2="7"></line>\r
                    </svg>\r
                    Asset Tag\r
                  </div>\r
                  <div class="detail-value">{{ analysisResult.assetTag }}</div>\r
                </div>\r
\r
                <div class="detail-item condition-item" *ngIf="analysisResult.condition">\r
                  <div class="detail-label">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
                      <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
                    </svg>\r
                    Condition\r
                  </div>\r
                  <div class="detail-value condition-badge condition-{{ analysisResult.condition.toLowerCase() }}">\r
                    {{ analysisResult.condition }}\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="description" *ngIf="analysisResult.evidence?.notes">\r
                <div class="description-content">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\r
                    <polyline points="14,2 14,8 20,8"></polyline>\r
                    <line x1="16" y1="13" x2="8" y2="13"></line>\r
                    <line x1="16" y1="17" x2="8" y2="17"></line>\r
                  </svg>\r
                  <p>{{ analysisResult.evidence.notes }}</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
          <!-- Recommendations Card -->\r
          <div class="recommendations-card" *ngIf="analysisResult.recommendations && analysisResult.recommendations.length > 0">\r
            <div class="card-header">\r
              <div class="header-icon">\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>\r
                  <line x1="12" y1="9" x2="12" y2="13"></line>\r
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
                </svg>\r
              </div>\r
              <div class="header-text">\r
                <h4>AI Recommendations</h4>\r
                <p>Based on the analysis, here are our suggestions</p>\r
              </div>\r
            </div>\r
            <div class="recommendations-list">\r
              <div class="recommendation-item" *ngFor="let rec of analysisResult.recommendations">\r
                <div class="rec-icon">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <polyline points="20,6 9,17 4,12"></polyline>\r
                  </svg>\r
                </div>\r
                <span>{{ rec }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Feedback Section -->\r
          <div class="feedback-card" *ngIf="!feedbackSubmitted">\r
            <div class="card-header">\r
              <div class="header-icon">\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>\r
                </svg>\r
              </div>\r
              <div class="header-text">\r
                <h4>Help Improve AI Recognition</h4>\r
                <p>Was this recognition accurate? Your feedback helps improve our AI.</p>\r
              </div>\r
            </div>\r
\r
            <div class="feedback-content">\r
              <div class="feedback-options">\r
                <button\r
                  class="feedback-btn accurate"\r
                  [class.selected]="feedbackType === 'accurate'"\r
                  (click)="selectFeedback('accurate')">\r
                  <div class="btn-icon">\r
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M14 9V5a3 3 0 0 0-6 0v4"></path>\r
                      <rect x="2" y="9" width="20" height="11" rx="2" ry="2"></rect>\r
                      <path d="M7 13h10"></path>\r
                    </svg>\r
                  </div>\r
                  <div class="btn-text">\r
                    <span class="btn-title">Accurate</span>\r
                    <span class="btn-subtitle">Recognition was correct</span>\r
                  </div>\r
                </button>\r
\r
                <button\r
                  class="feedback-btn needs-correction"\r
                  [class.selected]="feedbackType === 'needs_correction'"\r
                  (click)="selectFeedback('needs_correction')">\r
                  <div class="btn-icon">\r
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"></path>\r
                    </svg>\r
                  </div>\r
                  <div class="btn-text">\r
                    <span class="btn-title">Needs Correction</span>\r
                    <span class="btn-subtitle">Something was wrong</span>\r
                  </div>\r
                </button>\r
              </div>\r
\r
              <div class="correction-section" *ngIf="feedbackType === 'needs_correction'">\r
                <div class="section-header">\r
                  <h5>What needs to be corrected?</h5>\r
                  <p>Please specify what was incorrect in the recognition</p>\r
                </div>\r
                <div class="corrections-list">\r
                  <div class="correction-item" *ngFor="let correction of corrections; let i = index">\r
                    <input\r
                      type="text"\r
                      [(ngModel)]="correction.value"\r
                      placeholder="Enter correction..."\r
                      class="correction-input">\r
                    <button\r
                      type="button"\r
                      class="remove-correction"\r
                      (click)="removeCorrection(i)">\r
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                        <line x1="18" y1="6" x2="6" y2="18"></line>\r
                        <line x1="6" y1="6" x2="18" y2="18"></line>\r
                      </svg>\r
                    </button>\r
                  </div>\r
                  <button\r
                    type="button"\r
                    class="add-correction"\r
                    (click)="addCorrection()">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <line x1="12" y1="5" x2="12" y2="19"></line>\r
                      <line x1="5" y1="12" x2="19" y2="12"></line>\r
                    </svg>\r
                    Add Correction\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <div class="feedback-actions" *ngIf="feedbackType">\r
                <button\r
                  class="btn-secondary"\r
                  (click)="cancelFeedback()">\r
                  Cancel\r
                </button>\r
                <button\r
                  class="btn-primary"\r
                  [disabled]="isSubmittingFeedback"\r
                  (click)="submitFeedback()">\r
                  <svg *ngIf="isSubmittingFeedback" class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M21 12a9 9 0 11-6.219-8.56"></path>\r
                  </svg>\r
                  {{ isSubmittingFeedback ? 'Submitting...' : 'Submit Feedback' }}\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Feedback Success -->\r
          <div class="success-card" *ngIf="feedbackSubmitted">\r
            <div class="success-content">\r
              <div class="success-icon">\r
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
                  <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
                </svg>\r
              </div>\r
              <h4>Thank You!</h4>\r
              <p>Your feedback has been submitted and will help improve our AI recognition.</p>\r
            </div>\r
          </div>\r
\r
          <!-- Create Asset Button -->\r
          <div class="create-asset-section">\r
            <button class="create-asset-btn" (click)="openCreateAssetModal()">\r
              <div class="btn-icon">\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\r
                  <polyline points="14,2 14,8 20,8"></polyline>\r
                  <line x1="16" y1="13" x2="8" y2="13"></line>\r
                  <line x1="16" y1="17" x2="8" y2="17"></line>\r
                  <polyline points="10,9 9,9 8,9"></polyline>\r
                </svg>\r
              </div>\r
              <div class="btn-text">\r
                <span class="btn-title">Create Asset Record</span>\r
                <span class="btn-subtitle">Save this recognition as a new asset</span>\r
              </div>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Supported Asset Types Section -->\r
      <div class="supported-assets-section">\r
        <div class="section-header">\r
          <h3 class="section-title">Supported Asset Types</h3>\r
          <p class="section-description">Our AI can recognize and analyze various types of industrial equipment and assets with high accuracy.</p>\r
        </div>\r
\r
        <div class="asset-types-grid">\r
          <div class="asset-type-card" *ngFor="let assetType of assetTypes">\r
            <div class="asset-icon-wrapper">\r
            <div class="asset-type-icon">\r
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path [attr.d]="getAssetTypeIcon(assetType.icon)"></path>\r
              </svg>\r
            </div>\r
            </div>\r
            <div class="asset-type-info">\r
            <span class="asset-type-name">{{ assetType.name }}</span>\r
              <span class="asset-type-status">Supported</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
    <!-- Analytics Loading Overlay -->\r
    <div class="loading-overlay" *ngIf="isAnalyzingAssets">\r
      <div class="loading-content">\r
        <div class="loading-spinner">\r
          <svg class="animate-spin" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M21 12a9 9 0 11-6.219-8.56"></path>\r
          </svg>\r
        </div>\r
        <h3>Analyzing Portfolio...</h3>\r
        <p>Our AI is analyzing your asset portfolio to provide comprehensive insights and recommendations.</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
    <!-- Predictive Maintenance Tab -->\r
    <div *ngIf="activeTab === 'predictive-maintenance'" class="tab-panel">\r
      <app-predictive-maintenance></app-predictive-maintenance>\r
    </div>\r
\r
    <!-- Natural Language Tab -->\r
    <div *ngIf="activeTab === 'natural-language'" class="tab-panel">\r
      <app-natural-language></app-natural-language>\r
    </div>\r
\r
    <!-- AI Recommendations Tab -->\r
    <div *ngIf="activeTab === 'recommendations'" class="tab-panel">\r
      <app-ai-recommendations></app-ai-recommendations>\r
    </div>\r
\r
    <!-- AI Analytics Tab -->\r
    <div *ngIf="activeTab === 'analytics'" class="tab-panel">\r
      <app-ai-analytics></app-ai-analytics>\r
    </div>\r
\r
\r
\r
    <!-- Old Analytics Tab - Removed -->\r
    <div *ngIf="false" class="tab-panel">\r
      <div class="section-header">\r
        <h2 class="section-title">AI Asset Analytics</h2>\r
        <p class="section-description">Get comprehensive insights into your asset portfolio with AI-powered analysis.</p>\r
      </div>\r
\r
      <!-- Asset Selection Section -->\r
      <div class="analytics-section">\r
        <div class="section-header">\r
          <h3>Asset Portfolio</h3>\r
          <div class="section-actions">\r
            <button class="btn-secondary" (click)="addSampleAssets()">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M12 5v14M5 12h14"></path>\r
              </svg>\r
              Add Sample Assets\r
            </button>\r
            <button class="btn-secondary" (click)="clearSelectedAssets()" [disabled]="selectedAssets.length === 0">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>\r
              </svg>\r
              Clear All\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Selected Assets List -->\r
        <div class="selected-assets" *ngIf="selectedAssets.length > 0">\r
          <div class="asset-card" *ngFor="let asset of selectedAssets">\r
            <div class="asset-info">\r
              <h4>{{ asset.name }}</h4>\r
              <p class="asset-details">{{ asset.type }} \u2022 {{ asset.manufacturer }} {{ asset.model }}</p>\r
              <p class="asset-meta">Age: {{ asset.age }} years \u2022 Condition: {{ asset.condition }} \u2022 Value: \${{ asset.value | number }}</p>\r
            </div>\r
            <div class="asset-status">\r
              <span class="status-badge" [ngClass]="asset.condition.toLowerCase()">{{ asset.condition }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Empty State -->\r
        <div class="empty-state" *ngIf="selectedAssets.length === 0">\r
          <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
          <h3>No Assets Selected</h3>\r
          <p>Add assets to your portfolio to get AI-powered analytics and insights.</p>\r
        </div>\r
\r
        <!-- Image Upload Section -->\r
        <div class="image-upload-section" *ngIf="selectedAssets.length > 0">\r
          <h4>Asset Images (Optional)</h4>\r
          <p class="section-description">Upload images of your assets for enhanced analysis. Maximum 5 images.</p>\r
\r
          <div class="image-upload-area">\r
            <input\r
              type="file"\r
              #analyticsFileInput\r
              (change)="onAnalyticsFileSelected($event)"\r
              accept="image/*"\r
              multiple\r
              [disabled]="analyticsImages.length >= 5"\r
              class="file-input">\r
\r
            <div class="upload-prompt" (click)="analyticsFileInput.click()">\r
              <svg class="upload-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
                <polyline points="17,8 12,3 7,8"></polyline>\r
                <line x1="12" y1="3" x2="12" y2="15"></line>\r
              </svg>\r
              <p>Click to upload images or drag and drop</p>\r
              <span class="upload-limit">{{ analyticsImages.length }}/5 images</span>\r
            </div>\r
          </div>\r
\r
          <!-- Image Previews -->\r
          <div class="image-previews" *ngIf="analyticsImages.length > 0">\r
            <div class="preview-item" *ngFor="let image of analyticsImages; let i = index">\r
              <img [src]="image" [alt]="'Asset image ' + (i + 1)">\r
              <button class="remove-image" (click)="removeAnalyticsImage(i)">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M18 6L6 18M6 6L18 18"></path>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
\r
          <div class="image-actions" *ngIf="analyticsImages.length > 0">\r
            <button class="btn-secondary" (click)="clearAnalyticsImages()">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>\r
              </svg>\r
              Clear All Images\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Analysis Button -->\r
        <div class="analysis-actions" *ngIf="selectedAssets.length > 0">\r
          <button\r
            class="btn-primary"\r
            (click)="analyzeAssets()"\r
            [disabled]="isAnalyzingAssets">\r
            <svg *ngIf="!isAnalyzingAssets" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>\r
            </svg>\r
            <svg *ngIf="isAnalyzingAssets" class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M21 12a9 9 0 11-6.219-8.56"></path>\r
            </svg>\r
            {{ isAnalyzingAssets ? 'Analyzing...' : 'Analyze Portfolio' }}\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Analytics Results -->\r
      <div class="analytics-results" *ngIf="analyticsResult">\r
        <div class="results-header">\r
          <h3>Analytics Results</h3>\r
        </div>\r
\r
        <!-- Health Score -->\r
        <div class="health-score-section">\r
          <h4>Overall Health Score</h4>\r
          <div class="health-score-display">\r
            <div class="score-circle" [ngClass]="getHealthScoreClass(analyticsResult.healthScore)">\r
              <span class="score-value">{{ analyticsResult.healthScore }}</span>\r
              <span class="score-label">/ 100</span>\r
            </div>\r
            <div class="score-description">\r
              <p>Portfolio Health Assessment</p>\r
              <span class="score-status" [ngClass]="getHealthScoreClass(analyticsResult.healthScore)">\r
                {{ analyticsResult.healthScore >= 80 ? 'Excellent' : analyticsResult.healthScore >= 60 ? 'Good' : analyticsResult.healthScore >= 40 ? 'Fair' : 'Poor' }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Risk Assets -->\r
        <div class="risk-assets-section" *ngIf="analyticsResult.riskAssets.length > 0">\r
          <h4>High-Risk Assets</h4>\r
          <div class="risk-assets-list">\r
            <div class="risk-asset-card" *ngFor="let asset of analyticsResult.riskAssets">\r
              <div class="risk-info">\r
                <h5>{{ asset.name }}</h5>\r
                <p class="risk-reason">{{ asset.reason }}</p>\r
              </div>\r
              <div class="risk-meta">\r
                <span class="risk-level" [ngClass]="getRiskLevelClass(asset.riskLevel)">{{ asset.riskLevel }}</span>\r
                <span class="confidence">{{ asset.confidence }}% confidence</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Performance Insights -->\r
        <div class="insights-section" *ngIf="analyticsResult.insights.length > 0">\r
          <h4>Performance Insights</h4>\r
          <div class="insights-list">\r
            <div class="insight-card" *ngFor="let insight of analyticsResult.insights">\r
              <div class="insight-header">\r
                <h5>{{ insight.title }}</h5>\r
                <span class="impact-badge" [ngClass]="getImpactClass(insight.impact)">{{ insight.impact }}</span>\r
              </div>\r
              <p class="insight-description">{{ insight.description }}</p>\r
              <div class="insight-action">\r
                <strong>Action:</strong> {{ insight.action }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Cost Optimizations -->\r
        <div class="optimizations-section" *ngIf="analyticsResult.optimizations.length > 0">\r
          <h4>Cost Optimization Opportunities</h4>\r
          <div class="optimizations-list">\r
            <div class="optimization-card" *ngFor="let opt of analyticsResult.optimizations">\r
              <div class="optimization-header">\r
                <h5>{{ opt.title }}</h5>\r
                <div class="savings-info">\r
                  <span class="savings-amount">AED {{ opt.estimatedSavings | number }}</span>\r
                  <span class="payback-period">{{ opt.paybackPeriod }} payback</span>\r
                </div>\r
              </div>\r
              <p class="optimization-description">{{ opt.description }}</p>\r
              <div class="optimization-confidence">\r
                <span class="confidence-label">Confidence:</span>\r
                <span class="confidence-value">{{ opt.confidence }}%</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div class="error-message" *ngIf="errorMessage">\r
        <p>{{ errorMessage }}</p>\r
      </div>\r
    </div>\r
\r
  <!-- Create Asset Record Modal -->\r
  <div class="create-asset-modal" *ngIf="showCreateAssetModal">\r
    <div class="modal-overlay" (click)="closeCreateAssetModal()"></div>\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <div class="modal-title">\r
          <div class="title-icon">\r
            <svg class="modal-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\r
              <polyline points="14,2 14,8 20,8"></polyline>\r
              <line x1="16" y1="13" x2="8" y2="13"></line>\r
              <line x1="16" y1="17" x2="8" y2="17"></line>\r
              <polyline points="10,9 9,9 8,9"></polyline>\r
            </svg>\r
          </div>\r
          <div class="title-content">\r
            <h2>Create Asset Record</h2>\r
            <p>Add a new asset to your inventory with detailed information</p>\r
          </div>\r
        </div>\r
        <button class="close-modal" (click)="closeCreateAssetModal()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M18 6L6 18M6 6L18 18"></path>\r
          </svg>\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <p class="modal-subtitle">Complete the asset details based on AI recognition</p>\r
\r
        <form class="asset-form">\r
          <!-- Row 1: Asset Name + Manufacturer -->\r
          <div class="form-grid-row">\r
            <div class="form-group" [class.error]="hasFieldError('name')">\r
              <label>Asset Name <span class="required">*</span></label>\r
              <input\r
                type="text"\r
                [(ngModel)]="assetForm.name"\r
                name="name"\r
                placeholder="Enter asset name"\r
                [class.error-input]="hasFieldError('name')">\r
              <div class="field-error" *ngIf="hasFieldError('name')">\r
                {{ getFieldError('name') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group" [class.error]="hasFieldError('manufacturer')">\r
              <label>Manufacturer</label>\r
              <input\r
                type="text"\r
                [(ngModel)]="assetForm.manufacturer"\r
                name="manufacturer"\r
                placeholder="Enter manufacturer"\r
                [class.error-input]="hasFieldError('manufacturer')">\r
              <div class="field-error" *ngIf="hasFieldError('manufacturer')">\r
                {{ getFieldError('manufacturer') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Row 2: Model + Serial Number -->\r
          <div class="form-grid-row">\r
            <div class="form-group" [class.error]="hasFieldError('model')">\r
              <label>Model</label>\r
              <input\r
                type="text"\r
                [(ngModel)]="assetForm.model"\r
                name="model"\r
                placeholder="Enter model"\r
                [class.error-input]="hasFieldError('model')">\r
              <div class="field-error" *ngIf="hasFieldError('model')">\r
                {{ getFieldError('model') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group" [class.error]="hasFieldError('serialNumber')">\r
              <label>Serial Number</label>\r
              <input\r
                type="text"\r
                [(ngModel)]="assetForm.serialNumber"\r
                name="serialNumber"\r
                placeholder="Enter serial number"\r
                [class.error-input]="hasFieldError('serialNumber')">\r
              <div class="field-error" *ngIf="hasFieldError('serialNumber')">\r
                {{ getFieldError('serialNumber') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Row 3: Description (Full Width) -->\r
          <div class="form-group full-width" [class.error]="hasFieldError('description')">\r
            <label>Description</label>\r
            <textarea\r
              [(ngModel)]="assetForm.description"\r
              name="description"\r
              placeholder="Enter description"\r
              [class.error-input]="hasFieldError('description')"\r
              rows="3"></textarea>\r
            <div class="field-error" *ngIf="hasFieldError('description')">\r
              {{ getFieldError('description') }}\r
            </div>\r
          </div>\r
\r
          <!-- Row 4: Location (Full Width) -->\r
          <div class="form-group full-width" [class.error]="hasFieldError('location')">\r
            <label>Asset Location <span class="required">*</span></label>\r
\r
            <div class="relative generic-dropdown" (click)="$event.stopPropagation()">\r
              <button\r
                type="button"\r
                (click)="toggleLocationDropdown()"\r
                class="dropdown-button"\r
                [class.error]="hasFieldError('location')"\r
                [class.active]="showLocationDropdown"\r
                [disabled]="loadingLocations">\r
                <div class="dropdown-content">\r
                  <span *ngIf="!selectedLocation" class="placeholder">\r
                    {{ loadingLocations ? 'Loading locations...' : 'Select a location' }}\r
                  </span>\r
\r
                  <div *ngIf="selectedLocation" class="selected-item">\r
                    <div class="item-icon">\r
                      <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                      </svg>\r
                    </div>\r
                    <span class="selected-text">{{ selectedLocation.name }}</span>\r
                  </div>\r
\r
                  <svg class="dropdown-arrow" [class.rotated]="showLocationDropdown" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                  </svg>\r
                </div>\r
              </button>\r
\r
              <div *ngIf="showLocationDropdown" class="dropdown-menu">\r
                <div class="dropdown-header">Select location</div>\r
\r
                <button\r
                  *ngFor="let location of locations"\r
                  type="button"\r
                  (click)="selectLocation(location)"\r
                  class="dropdown-item"\r
                  [class.selected]="selectedLocation?.id === location.id">\r
                  <div class="item-content">\r
                    <div class="item-icon">\r
                      <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                      </svg>\r
                    </div>\r
                    <div class="item-details">\r
                      <div class="item-name">{{ location.name }}</div>\r
                      <div class="item-description">{{ getLocationDescription(location) }}</div>\r
                    </div>\r
                  </div>\r
                </button>\r
              </div>\r
            </div>\r
\r
            <div class="field-error" *ngIf="hasFieldError('location')">\r
              {{ getFieldError('location') }}\r
            </div>\r
          </div>\r
        </form>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button class="btn-secondary" (click)="closeCreateAssetModal()" [disabled]="isCreatingAsset">\r
          Cancel\r
        </button>\r
        <button\r
          class="btn-primary"\r
          (click)="createAsset()"\r
          [disabled]="isCreatingAsset || !assetForm.name.trim()">\r
          <svg *ngIf="!isCreatingAsset" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
          <svg *ngIf="isCreatingAsset" class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M21 12a9 9 0 11-6.219-8.56"></path>\r
          </svg>\r
          {{ isCreatingAsset ? 'Creating...' : 'Create Asset' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/ai-features/ai-features.component.scss */\n.ai-features-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  background: #ffffff;\n  min-height: 100vh;\n}\n.header-section {\n  margin-bottom: 32px;\n}\n.header-section .main-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.header-section .main-description {\n  font-size: 1.125rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n}\n.tabs-container {\n  margin-bottom: 32px;\n}\n.tabs-container .tabs-nav {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  gap: 0;\n}\n.tabs-container .tabs-nav .tab-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border: none;\n  background: transparent;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.tabs-container .tabs-nav .tab-button:hover {\n  color: #374151;\n  background: #f9fafb;\n}\n.tabs-container .tabs-nav .tab-button.active {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n  background: #f0f9ff;\n}\n.tab-panel .section-header {\n  margin-bottom: 24px;\n}\n.tab-panel .section-header .section-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n.tab-panel .section-header .section-description {\n  color: #6b7280;\n  margin: 0;\n}\n.upload-section {\n  margin-bottom: 24px;\n}\n.upload-section .upload-area {\n  background: #ffffff;\n  border: 2px dashed #d1d5db;\n  border-radius: 8px;\n  padding: 60px 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n}\n.upload-section .upload-area:hover {\n  border-color: #3b82f6;\n  background: #f8fafc;\n}\n.upload-section .upload-area.dragover {\n  border-color: #3b82f6;\n  background: #f0f9ff;\n}\n.upload-section .upload-area .upload-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.upload-section .upload-area .upload-placeholder .upload-icon {\n  color: #6b7280;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.upload-section .upload-area .upload-placeholder .upload-icon svg {\n  width: 48px;\n  height: 48px;\n}\n.upload-section .upload-area .upload-placeholder .upload-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 8px 0;\n}\n.upload-section .upload-area .upload-placeholder .upload-text {\n  font-size: 1rem;\n  font-weight: 400;\n  color: #6b7280;\n  margin: 0 0 8px 0;\n}\n.upload-section .upload-area .upload-placeholder .upload-hint {\n  font-size: 0.875rem;\n  color: #9ca3af;\n  margin: 0;\n  font-style: italic;\n}\n.upload-section .upload-area .single-image-preview {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.upload-section .upload-area .single-image-preview .preview-item {\n  position: relative;\n  display: inline-block;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.upload-section .upload-area .single-image-preview .preview-item .preview-image {\n  max-width: 300px;\n  max-height: 300px;\n  object-fit: cover;\n  display: block;\n}\n.upload-section .upload-area .single-image-preview .preview-item .preview-overlay {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n.upload-section .upload-area .single-image-preview .preview-item .preview-overlay .remove-preview {\n  background: rgba(239, 68, 68, 0.9);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s ease;\n}\n.upload-section .upload-area .single-image-preview .preview-item .preview-overlay .remove-preview:hover {\n  background: rgba(220, 38, 38, 0.9);\n}\n.upload-section .upload-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.upload-section .upload-actions .btn-secondary,\n.upload-section .upload-actions .btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.upload-section .upload-actions .btn-secondary:disabled,\n.upload-section .upload-actions .btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.upload-section .upload-actions .btn-secondary {\n  background: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.upload-section .upload-actions .btn-secondary:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.upload-section .upload-actions .btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.upload-section .upload-actions .btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.supported-assets-section {\n  margin-top: 32px;\n}\n.supported-assets-section .section-header {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.supported-assets-section .section-header .section-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n.supported-assets-section .section-header .section-description {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.supported-assets-section .asset-types-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n  margin-top: 24px;\n}\n.supported-assets-section .asset-types-grid .asset-type-card {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.supported-assets-section .asset-types-grid .asset-type-card:hover {\n  border-color: #3b82f6;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1);\n  transform: translateY(-2px);\n}\n.supported-assets-section .asset-types-grid .asset-type-card .asset-icon-wrapper {\n  flex-shrink: 0;\n}\n.supported-assets-section .asset-types-grid .asset-type-card .asset-icon-wrapper .asset-type-icon {\n  width: 48px;\n  height: 48px;\n  background: #f0f9ff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3b82f6;\n  transition: all 0.2s ease;\n}\n.supported-assets-section .asset-types-grid .asset-type-card .asset-type-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.supported-assets-section .asset-types-grid .asset-type-card .asset-type-info .asset-type-name {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.supported-assets-section .asset-types-grid .asset-type-card .asset-type-info .asset-type-status {\n  font-size: 0.875rem;\n  color: #10b981;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.supported-assets-section .asset-types-grid .asset-type-card .asset-type-info .asset-type-status::before {\n  content: "\\2713";\n  font-size: 0.75rem;\n}\n.supported-assets-section .asset-types-grid .asset-type-card:hover .asset-icon-wrapper .asset-type-icon {\n  background: #3b82f6;\n  color: #ffffff;\n}\n.file-preview {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.file-preview .preview-item {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n}\n.file-preview .preview-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.file-preview .preview-item .remove-btn {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(239, 68, 68, 0.9);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.file-preview .preview-item .remove-btn:hover {\n  background: rgba(220, 38, 38, 0.9);\n}\n.analyze-button {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #8b5cf6);\n  color: white;\n  border: none;\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 auto;\n}\n.analyze-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);\n}\n.analyze-button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.analyze-button .spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.loading-overlay .loading-content {\n  background: white;\n  padding: 40px;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  max-width: 480px;\n  width: 90%;\n}\n.loading-overlay .loading-content .loading-animation {\n  margin-bottom: 24px;\n}\n.loading-overlay .loading-content .loading-animation .ai-brain {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n}\n.loading-overlay .loading-content .loading-animation .ai-brain .brain-pulse {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: pulse 2s infinite;\n}\n.loading-overlay .loading-content .loading-animation .ai-brain .brain-pulse.delay-1 {\n  animation-delay: 0.5s;\n  border-color: #8b5cf6;\n}\n.loading-overlay .loading-content .loading-animation .ai-brain .brain-pulse.delay-2 {\n  animation-delay: 1s;\n  border-color: #06b6d4;\n}\n.loading-overlay .loading-content h3 {\n  margin: 0 0 12px 0;\n  color: #1f2937;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.loading-overlay .loading-content .loading-description {\n  margin: 0 0 24px 0;\n  color: #6b7280;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.loading-overlay .loading-content .loading-steps {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.loading-overlay .loading-content .loading-steps .step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  opacity: 0.4;\n  transition: opacity 0.3s ease;\n}\n.loading-overlay .loading-content .loading-steps .step.active {\n  opacity: 1;\n}\n.loading-overlay .loading-content .loading-steps .step .step-icon {\n  font-size: 1.5rem;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f3f4f6;\n  border-radius: 50%;\n}\n.loading-overlay .loading-content .loading-steps .step span {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.loading-overlay .loading-content .loading-tip {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f0f9ff;\n  border: 1px solid #e0f2fe;\n  border-radius: 8px;\n  color: #0369a1;\n  font-size: 0.875rem;\n}\n.loading-overlay .loading-content .loading-tip svg {\n  color: #0ea5e9;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0.8);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.2);\n    opacity: 0;\n  }\n}\n.recognition-results {\n  margin-top: 24px;\n}\n.recognition-results .results-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  color: white;\n}\n.recognition-results .results-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.recognition-results .results-header .header-content .header-icon {\n  width: 48px;\n  height: 48px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.recognition-results .results-header .header-content .header-icon svg {\n  color: white;\n}\n.recognition-results .results-header .header-content .header-text h3 {\n  margin: 0 0 4px 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.recognition-results .results-header .header-content .header-text p {\n  margin: 0;\n  opacity: 0.9;\n  font-size: 1rem;\n}\n.recognition-results .results-card,\n.recognition-results .recommendations-card,\n.recognition-results .feedback-card,\n.recognition-results .success-card {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.recognition-results .results-card .card-header {\n  background: #f8fafc;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.recognition-results .results-card .card-header .asset-type {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.recognition-results .results-card .card-header .asset-type .type-icon {\n  width: 48px;\n  height: 48px;\n  background: #3b82f6;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.recognition-results .results-card .card-header .asset-type .type-icon svg {\n  color: white;\n}\n.recognition-results .results-card .card-header .asset-type .type-info h4 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.recognition-results .results-card .card-content {\n  padding: 24px;\n}\n.recognition-results .results-card .card-content .details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.recognition-results .results-card .card-content .details-grid .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.recognition-results .results-card .card-content .details-grid .detail-item .detail-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.recognition-results .results-card .card-content .details-grid .detail-item .detail-label svg {\n  color: #3b82f6;\n}\n.recognition-results .results-card .card-content .details-grid .detail-item .detail-value {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.recognition-results .results-card .card-content .details-grid .detail-item .detail-value.condition-badge {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  max-width: fit-content;\n}\n.recognition-results .results-card .card-content .details-grid .detail-item .detail-value.condition-badge.condition-excellent {\n  background: #dcfce7;\n  color: #166534;\n}\n.recognition-results .results-card .card-content .details-grid .detail-item .detail-value.condition-badge.condition-good {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.recognition-results .results-card .card-content .details-grid .detail-item .detail-value.condition-badge.condition-fair {\n  background: #fef3c7;\n  color: #92400e;\n}\n.recognition-results .results-card .card-content .details-grid .detail-item .detail-value.condition-badge.condition-poor {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.recognition-results .results-card .card-content .description {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n}\n.recognition-results .results-card .card-content .description .description-content {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.recognition-results .results-card .card-content .description .description-content svg {\n  color: #3b82f6;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.recognition-results .results-card .card-content .description .description-content p {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.recognition-results .recommendations-card .card-header {\n  background: #fef3c7;\n  padding: 20px 24px;\n  border-bottom: 1px solid #fde68a;\n}\n.recognition-results .recommendations-card .card-header .header-icon {\n  width: 40px;\n  height: 40px;\n  background: #f59e0b;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.recognition-results .recommendations-card .card-header .header-icon svg {\n  color: white;\n}\n.recognition-results .recommendations-card .card-header .header-text h4 {\n  margin: 0 0 4px 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #92400e;\n}\n.recognition-results .recommendations-card .card-header .header-text p {\n  margin: 0;\n  color: #a16207;\n  font-size: 0.875rem;\n}\n.recognition-results .recommendations-card .recommendations-list {\n  padding: 24px;\n}\n.recognition-results .recommendations-card .recommendations-list .recommendation-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.recognition-results .recommendations-card .recommendations-list .recommendation-item:last-child {\n  border-bottom: none;\n}\n.recognition-results .recommendations-card .recommendations-list .recommendation-item .rec-icon {\n  width: 24px;\n  height: 24px;\n  background: #dcfce7;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.recognition-results .recommendations-card .recommendations-list .recommendation-item .rec-icon svg {\n  color: #16a34a;\n}\n.recognition-results .recommendations-card .recommendations-list .recommendation-item span {\n  color: #374151;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.recognition-results .feedback-card .card-header {\n  background: #eff6ff;\n  padding: 20px 24px;\n  border-bottom: 1px solid #dbeafe;\n}\n.recognition-results .feedback-card .card-header .header-icon {\n  width: 40px;\n  height: 40px;\n  background: #3b82f6;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.recognition-results .feedback-card .card-header .header-icon svg {\n  color: white;\n}\n.recognition-results .feedback-card .card-header .header-text h4 {\n  margin: 0 0 4px 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1e40af;\n}\n.recognition-results .feedback-card .card-header .header-text p {\n  margin: 0;\n  color: #3730a3;\n  font-size: 0.875rem;\n}\n.recognition-results .feedback-card .feedback-content {\n  padding: 24px;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options .feedback-btn {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options .feedback-btn:hover {\n  border-color: #3b82f6;\n  background: #f8fafc;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options .feedback-btn.selected {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options .feedback-btn .btn-icon {\n  width: 40px;\n  height: 40px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options .feedback-btn .btn-icon svg {\n  color: #64748b;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options .feedback-btn.selected .btn-icon {\n  background: #3b82f6;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options .feedback-btn.selected .btn-icon svg {\n  color: white;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options .feedback-btn .btn-text .btn-title {\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.recognition-results .feedback-card .feedback-content .feedback-options .feedback-btn .btn-text .btn-subtitle {\n  display: block;\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.recognition-results .feedback-card .feedback-content .correction-section {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.recognition-results .feedback-card .feedback-content .correction-section .section-header {\n  margin-bottom: 16px;\n}\n.recognition-results .feedback-card .feedback-content .correction-section .section-header h5 {\n  margin: 0 0 4px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.recognition-results .feedback-card .feedback-content .correction-section .section-header p {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n.recognition-results .feedback-card .feedback-content .correction-section .corrections-list .correction-item {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.recognition-results .feedback-card .feedback-content .correction-section .corrections-list .correction-item .correction-input {\n  flex: 1;\n  padding: 12px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.recognition-results .feedback-card .feedback-content .correction-section .corrections-list .correction-item .correction-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.recognition-results .feedback-card .feedback-content .correction-section .corrections-list .correction-item .remove-correction {\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recognition-results .feedback-card .feedback-content .correction-section .corrections-list .correction-item .remove-correction:hover {\n  background: #f3f4f6;\n  color: #ef4444;\n}\n.recognition-results .feedback-card .feedback-content .correction-section .corrections-list .add-correction {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border: 2px dashed #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #6b7280;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recognition-results .feedback-card .feedback-content .correction-section .corrections-list .add-correction:hover {\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.recognition-results .feedback-card .feedback-content .feedback-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n}\n.recognition-results .success-card .success-content {\n  background: #f0fdf4;\n  padding: 32px 24px;\n  text-align: center;\n}\n.recognition-results .success-card .success-content .success-icon {\n  color: #16a34a;\n  margin-bottom: 16px;\n}\n.recognition-results .success-card .success-content h4 {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #166534;\n}\n.recognition-results .success-card .success-content p {\n  margin: 0;\n  color: #15803d;\n  font-size: 0.875rem;\n}\n.recognition-results .create-asset-section .create-asset-btn {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  width: 100%;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.recognition-results .create-asset-section .create-asset-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1);\n}\n.recognition-results .create-asset-section .create-asset-btn .btn-icon {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.recognition-results .create-asset-section .create-asset-btn .btn-icon svg {\n  color: white;\n}\n.recognition-results .create-asset-section .create-asset-btn .btn-text {\n  text-align: left;\n}\n.recognition-results .create-asset-section .create-asset-btn .btn-text .btn-title {\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.recognition-results .create-asset-section .create-asset-btn .btn-text .btn-subtitle {\n  display: block;\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.analysis-results {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 24px;\n  margin-top: 24px;\n}\n.analysis-results .results-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.analysis-results .results-header h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.analysis-results .results-header .confidence-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.analysis-results .results-header .confidence-badge.high {\n  background: #dcfce7;\n  color: #166534;\n}\n.analysis-results .results-header .confidence-badge.medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.analysis-results .results-header .confidence-badge.low {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.analysis-results .key-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.analysis-results .key-info .info-item .label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 4px;\n}\n.analysis-results .key-info .info-item .value {\n  font-weight: 500;\n  color: #1f2937;\n}\n.analysis-results .condition-assessment {\n  margin-bottom: 20px;\n}\n.analysis-results .condition-assessment .condition-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.analysis-results .condition-assessment .condition-badge.excellent {\n  background: #dcfce7;\n  color: #166534;\n}\n.analysis-results .condition-assessment .condition-badge.good {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.analysis-results .condition-assessment .condition-badge.fair {\n  background: #fef3c7;\n  color: #92400e;\n}\n.analysis-results .condition-assessment .condition-badge.poor {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.analysis-results .recommendations .recommendations-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 12px;\n}\n.analysis-results .recommendations .recommendation-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.analysis-results .recommendations .recommendation-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 0;\n  color: #374151;\n}\n.analysis-results .recommendations .recommendation-list li::before {\n  content: "\\2022";\n  color: #3b82f6;\n  font-weight: bold;\n  margin-top: 2px;\n}\n.feedback-section {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 24px;\n}\n.feedback-section .feedback-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 16px;\n}\n.feedback-section .feedback-buttons {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.feedback-section .feedback-buttons .feedback-btn {\n  padding: 8px 16px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: white;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.feedback-section .feedback-buttons .feedback-btn:hover {\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.feedback-section .feedback-buttons .feedback-btn.selected {\n  background: #3b82f6;\n  color: white;\n  border-color: #3b82f6;\n}\n.feedback-section .correction-input {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n.feedback-section .correction-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.feedback-section .feedback-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 16px;\n}\n.feedback-section .feedback-actions .submit-btn {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.feedback-section .feedback-actions .submit-btn:hover:not(:disabled) {\n  background: #2563eb;\n}\n.feedback-section .feedback-actions .submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.feedback-section .feedback-actions .cancel-btn {\n  background: #6b7280;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.feedback-section .feedback-actions .cancel-btn:hover {\n  background: #4b5563;\n}\n.feedback-section .success-message {\n  background: #dcfce7;\n  color: #166534;\n  padding: 12px;\n  border-radius: 8px;\n  font-weight: 500;\n  margin-top: 16px;\n}\n.asset-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n}\n.asset-modal .modal-content {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.asset-modal .modal-content .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.asset-modal .modal-content .modal-header h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.asset-modal .modal-content .modal-header .close-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #6b7280;\n  cursor: pointer;\n}\n.asset-modal .modal-content .modal-header .close-btn:hover {\n  color: #374151;\n}\n.asset-modal .modal-content .form-group {\n  margin-bottom: 20px;\n}\n.asset-modal .modal-content .form-group label {\n  display: block;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.asset-modal .modal-content .form-group input,\n.asset-modal .modal-content .form-group select,\n.asset-modal .modal-content .form-group textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n}\n.asset-modal .modal-content .form-group input:focus,\n.asset-modal .modal-content .form-group select:focus,\n.asset-modal .modal-content .form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.asset-modal .modal-content .form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.asset-modal .modal-content .modal-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.asset-modal .modal-content .modal-actions .create-btn {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.asset-modal .modal-content .modal-actions .create-btn:hover:not(:disabled) {\n  background: #2563eb;\n}\n.asset-modal .modal-content .modal-actions .create-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.asset-modal .modal-content .modal-actions .cancel-btn {\n  background: #6b7280;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.asset-modal .modal-content .modal-actions .cancel-btn:hover {\n  background: #4b5563;\n}\n.analytics-section .asset-selection {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.analytics-section .asset-selection .selection-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.analytics-section .asset-selection .selection-header h3 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.analytics-section .asset-selection .selection-header .add-sample-btn {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.analytics-section .asset-selection .selection-header .add-sample-btn:hover {\n  background: #2563eb;\n}\n.analytics-section .asset-selection .selected-assets {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.analytics-section .asset-selection .selected-assets .asset-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.analytics-section .asset-selection .selected-assets .asset-card .asset-info .asset-name {\n  font-weight: 500;\n  color: #1f2937;\n  margin: 0 0 4px 0;\n}\n.analytics-section .asset-selection .selected-assets .asset-card .asset-info .asset-type {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.analytics-section .asset-selection .selected-assets .asset-card .remove-btn {\n  background: #fee2e2;\n  color: #dc2626;\n  border: none;\n  border-radius: 4px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.analytics-section .asset-selection .selected-assets .asset-card .remove-btn:hover {\n  background: #fecaca;\n}\n.analytics-section .analytics-results .health-score {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #8b5cf6);\n  color: white;\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n  margin-bottom: 24px;\n}\n.analytics-section .analytics-results .health-score .score-value {\n  font-size: 3rem;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.analytics-section .analytics-results .health-score .score-label {\n  font-size: 1.125rem;\n  opacity: 0.9;\n  margin: 0;\n}\n.analytics-section .analytics-results .risk-assets,\n.analytics-section .analytics-results .insights,\n.analytics-section .analytics-results .optimizations {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.analytics-section .analytics-results .risk-assets h4,\n.analytics-section .analytics-results .insights h4,\n.analytics-section .analytics-results .optimizations h4 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 16px 0;\n}\n.analytics-section .analytics-results .risk-assets .risk-item,\n.analytics-section .analytics-results .risk-assets .insight-item,\n.analytics-section .analytics-results .risk-assets .optimization-item,\n.analytics-section .analytics-results .insights .risk-item,\n.analytics-section .analytics-results .insights .insight-item,\n.analytics-section .analytics-results .insights .optimization-item,\n.analytics-section .analytics-results .optimizations .risk-item,\n.analytics-section .analytics-results .optimizations .insight-item,\n.analytics-section .analytics-results .optimizations .optimization-item {\n  padding: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.analytics-section .analytics-results .risk-assets .risk-item:last-child,\n.analytics-section .analytics-results .risk-assets .insight-item:last-child,\n.analytics-section .analytics-results .risk-assets .optimization-item:last-child,\n.analytics-section .analytics-results .insights .risk-item:last-child,\n.analytics-section .analytics-results .insights .insight-item:last-child,\n.analytics-section .analytics-results .insights .optimization-item:last-child,\n.analytics-section .analytics-results .optimizations .risk-item:last-child,\n.analytics-section .analytics-results .optimizations .insight-item:last-child,\n.analytics-section .analytics-results .optimizations .optimization-item:last-child {\n  margin-bottom: 0;\n}\n.analytics-section .analytics-results .risk-assets .risk-item .item-title,\n.analytics-section .analytics-results .risk-assets .insight-item .item-title,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-title,\n.analytics-section .analytics-results .insights .risk-item .item-title,\n.analytics-section .analytics-results .insights .insight-item .item-title,\n.analytics-section .analytics-results .insights .optimization-item .item-title,\n.analytics-section .analytics-results .optimizations .risk-item .item-title,\n.analytics-section .analytics-results .optimizations .insight-item .item-title,\n.analytics-section .analytics-results .optimizations .optimization-item .item-title {\n  font-weight: 500;\n  color: #1f2937;\n  margin: 0 0 8px 0;\n}\n.analytics-section .analytics-results .risk-assets .risk-item .item-description,\n.analytics-section .analytics-results .risk-assets .insight-item .item-description,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-description,\n.analytics-section .analytics-results .insights .risk-item .item-description,\n.analytics-section .analytics-results .insights .insight-item .item-description,\n.analytics-section .analytics-results .insights .optimization-item .item-description,\n.analytics-section .analytics-results .optimizations .risk-item .item-description,\n.analytics-section .analytics-results .optimizations .insight-item .item-description,\n.analytics-section .analytics-results .optimizations .optimization-item .item-description {\n  color: #6b7280;\n  margin: 0 0 8px 0;\n}\n.analytics-section .analytics-results .risk-assets .risk-item .item-meta,\n.analytics-section .analytics-results .risk-assets .insight-item .item-meta,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-meta,\n.analytics-section .analytics-results .insights .risk-item .item-meta,\n.analytics-section .analytics-results .insights .insight-item .item-meta,\n.analytics-section .analytics-results .insights .optimization-item .item-meta,\n.analytics-section .analytics-results .optimizations .risk-item .item-meta,\n.analytics-section .analytics-results .optimizations .insight-item .item-meta,\n.analytics-section .analytics-results .optimizations .optimization-item .item-meta {\n  display: flex;\n  gap: 12px;\n  font-size: 0.875rem;\n}\n.analytics-section .analytics-results .risk-assets .risk-item .item-meta .risk-level,\n.analytics-section .analytics-results .risk-assets .risk-item .item-meta .impact-level,\n.analytics-section .analytics-results .risk-assets .insight-item .item-meta .risk-level,\n.analytics-section .analytics-results .risk-assets .insight-item .item-meta .impact-level,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-meta .risk-level,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-meta .impact-level,\n.analytics-section .analytics-results .insights .risk-item .item-meta .risk-level,\n.analytics-section .analytics-results .insights .risk-item .item-meta .impact-level,\n.analytics-section .analytics-results .insights .insight-item .item-meta .risk-level,\n.analytics-section .analytics-results .insights .insight-item .item-meta .impact-level,\n.analytics-section .analytics-results .insights .optimization-item .item-meta .risk-level,\n.analytics-section .analytics-results .insights .optimization-item .item-meta .impact-level,\n.analytics-section .analytics-results .optimizations .risk-item .item-meta .risk-level,\n.analytics-section .analytics-results .optimizations .risk-item .item-meta .impact-level,\n.analytics-section .analytics-results .optimizations .insight-item .item-meta .risk-level,\n.analytics-section .analytics-results .optimizations .insight-item .item-meta .impact-level,\n.analytics-section .analytics-results .optimizations .optimization-item .item-meta .risk-level,\n.analytics-section .analytics-results .optimizations .optimization-item .item-meta .impact-level {\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n}\n.analytics-section .analytics-results .risk-assets .risk-item .item-meta .risk-level.high,\n.analytics-section .analytics-results .risk-assets .risk-item .item-meta .impact-level.high,\n.analytics-section .analytics-results .risk-assets .insight-item .item-meta .risk-level.high,\n.analytics-section .analytics-results .risk-assets .insight-item .item-meta .impact-level.high,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-meta .risk-level.high,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-meta .impact-level.high,\n.analytics-section .analytics-results .insights .risk-item .item-meta .risk-level.high,\n.analytics-section .analytics-results .insights .risk-item .item-meta .impact-level.high,\n.analytics-section .analytics-results .insights .insight-item .item-meta .risk-level.high,\n.analytics-section .analytics-results .insights .insight-item .item-meta .impact-level.high,\n.analytics-section .analytics-results .insights .optimization-item .item-meta .risk-level.high,\n.analytics-section .analytics-results .insights .optimization-item .item-meta .impact-level.high,\n.analytics-section .analytics-results .optimizations .risk-item .item-meta .risk-level.high,\n.analytics-section .analytics-results .optimizations .risk-item .item-meta .impact-level.high,\n.analytics-section .analytics-results .optimizations .insight-item .item-meta .risk-level.high,\n.analytics-section .analytics-results .optimizations .insight-item .item-meta .impact-level.high,\n.analytics-section .analytics-results .optimizations .optimization-item .item-meta .risk-level.high,\n.analytics-section .analytics-results .optimizations .optimization-item .item-meta .impact-level.high {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.analytics-section .analytics-results .risk-assets .risk-item .item-meta .risk-level.medium,\n.analytics-section .analytics-results .risk-assets .risk-item .item-meta .impact-level.medium,\n.analytics-section .analytics-results .risk-assets .insight-item .item-meta .risk-level.medium,\n.analytics-section .analytics-results .risk-assets .insight-item .item-meta .impact-level.medium,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-meta .risk-level.medium,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-meta .impact-level.medium,\n.analytics-section .analytics-results .insights .risk-item .item-meta .risk-level.medium,\n.analytics-section .analytics-results .insights .risk-item .item-meta .impact-level.medium,\n.analytics-section .analytics-results .insights .insight-item .item-meta .risk-level.medium,\n.analytics-section .analytics-results .insights .insight-item .item-meta .impact-level.medium,\n.analytics-section .analytics-results .insights .optimization-item .item-meta .risk-level.medium,\n.analytics-section .analytics-results .insights .optimization-item .item-meta .impact-level.medium,\n.analytics-section .analytics-results .optimizations .risk-item .item-meta .risk-level.medium,\n.analytics-section .analytics-results .optimizations .risk-item .item-meta .impact-level.medium,\n.analytics-section .analytics-results .optimizations .insight-item .item-meta .risk-level.medium,\n.analytics-section .analytics-results .optimizations .insight-item .item-meta .impact-level.medium,\n.analytics-section .analytics-results .optimizations .optimization-item .item-meta .risk-level.medium,\n.analytics-section .analytics-results .optimizations .optimization-item .item-meta .impact-level.medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.analytics-section .analytics-results .risk-assets .risk-item .item-meta .risk-level.low,\n.analytics-section .analytics-results .risk-assets .risk-item .item-meta .impact-level.low,\n.analytics-section .analytics-results .risk-assets .insight-item .item-meta .risk-level.low,\n.analytics-section .analytics-results .risk-assets .insight-item .item-meta .impact-level.low,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-meta .risk-level.low,\n.analytics-section .analytics-results .risk-assets .optimization-item .item-meta .impact-level.low,\n.analytics-section .analytics-results .insights .risk-item .item-meta .risk-level.low,\n.analytics-section .analytics-results .insights .risk-item .item-meta .impact-level.low,\n.analytics-section .analytics-results .insights .insight-item .item-meta .risk-level.low,\n.analytics-section .analytics-results .insights .insight-item .item-meta .impact-level.low,\n.analytics-section .analytics-results .insights .optimization-item .item-meta .risk-level.low,\n.analytics-section .analytics-results .insights .optimization-item .item-meta .impact-level.low,\n.analytics-section .analytics-results .optimizations .risk-item .item-meta .risk-level.low,\n.analytics-section .analytics-results .optimizations .risk-item .item-meta .impact-level.low,\n.analytics-section .analytics-results .optimizations .insight-item .item-meta .risk-level.low,\n.analytics-section .analytics-results .optimizations .insight-item .item-meta .impact-level.low,\n.analytics-section .analytics-results .optimizations .optimization-item .item-meta .risk-level.low,\n.analytics-section .analytics-results .optimizations .optimization-item .item-meta .impact-level.low {\n  background: #dcfce7;\n  color: #166534;\n}\n.error-message {\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 12px;\n  border-radius: 8px;\n  margin: 16px 0;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .ai-features-container {\n    padding: 16px;\n  }\n  .tabs-nav {\n    flex-wrap: wrap;\n  }\n  .tabs-nav .tab-button {\n    flex: 1;\n    min-width: 120px;\n  }\n  .key-info {\n    grid-template-columns: 1fr;\n  }\n  .feedback-buttons {\n    flex-direction: column;\n  }\n  .modal-content {\n    width: 95%;\n    padding: 16px;\n  }\n  .selected-assets .asset-card {\n    width: 100%;\n  }\n}\n.create-asset-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 20px;\n}\n.create-asset-modal .modal-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  animation: fadeIn 0.3s ease-out;\n}\n.create-asset-modal .modal-content {\n  position: relative;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.35);\n  width: 100%;\n  max-width: 700px;\n  max-height: 90vh;\n  overflow-y: auto;\n  z-index: 10001;\n  animation: slideIn 0.3s ease-out;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.create-asset-modal .modal-content .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 40px 40px 24px 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 20px 20px 0 0;\n  margin-bottom: 0;\n  position: relative;\n  overflow: hidden;\n}\n.create-asset-modal .modal-content .modal-header::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #8b5cf6,\n      #06b6d4);\n}\n.create-asset-modal .modal-content .modal-header .modal-title {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  flex: 1;\n}\n.create-asset-modal .modal-content .modal-header .modal-title .title-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  border-radius: 16px;\n  padding: 16px;\n  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.create-asset-modal .modal-content .modal-header .modal-title .title-icon .modal-icon {\n  color: white;\n  width: 28px;\n  height: 28px;\n}\n.create-asset-modal .modal-content .modal-header .modal-title .title-content {\n  flex: 1;\n}\n.create-asset-modal .modal-content .modal-header .modal-title .title-content h2 {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 0 0 8px 0;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n}\n.create-asset-modal .modal-content .modal-header .modal-title .title-content p {\n  font-size: 1.125rem;\n  color: #64748b;\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.create-asset-modal .modal-content .modal-header .close-modal {\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n  cursor: pointer;\n  padding: 14px;\n  border-radius: 14px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  flex-shrink: 0;\n}\n.create-asset-modal .modal-content .modal-header .close-modal:hover {\n  background: white;\n  color: #374151;\n  border-color: #cbd5e1;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.create-asset-modal .modal-content .modal-header .close-modal svg {\n  width: 20px;\n  height: 20px;\n}\n.create-asset-modal .modal-content .modal-body {\n  padding: 40px;\n  background: white;\n}\n.create-asset-modal .modal-content .modal-body .modal-subtitle {\n  color: #64748b;\n  font-size: 0.95rem;\n  margin-bottom: 24px;\n  text-align: center;\n  font-weight: 500;\n  padding: 14px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 8px;\n  border-left: 3px solid #3b82f6;\n}\n.create-asset-modal .modal-content .modal-body .asset-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-grid-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group {\n  display: flex;\n  flex-direction: column;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group.full-width {\n  grid-column: 1/-1;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group.error input,\n.create-asset-modal .modal-content .modal-body .asset-form .form-group.error textarea,\n.create-asset-modal .modal-content .modal-body .asset-form .form-group.error .dropdown-button {\n  border-color: #ef4444;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group label .required {\n  color: #ef4444;\n  margin-left: 2px;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group input,\n.create-asset-modal .modal-content .modal-body .asset-form .form-group textarea {\n  padding: 10px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s;\n  background: white;\n  color: #1e293b;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group input:focus,\n.create-asset-modal .modal-content .modal-body .asset-form .form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group input::placeholder,\n.create-asset-modal .modal-content .modal-body .asset-form .form-group textarea::placeholder {\n  color: #9ca3af;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group input.error-input,\n.create-asset-modal .modal-content .modal-body .asset-form .form-group textarea.error-input {\n  border-color: #ef4444;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n  font-family: inherit;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .form-group .field-error {\n  font-size: 0.75rem;\n  color: #ef4444;\n  margin-top: 4px;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown {\n  position: relative;\n  width: 100%;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button {\n  width: 100%;\n  padding: 18px 24px;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  background: white;\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  text-align: left;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button:hover {\n  border-color: #cbd5e1;\n  background: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);\n  transform: translateY(-1px);\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button.active {\n  border-color: #3b82f6;\n  background: white;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button.error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button:disabled {\n  background-color: #f9fafb;\n  color: #9ca3af;\n  cursor: not-allowed;\n  border-color: #e2e8f0;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button .dropdown-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button .dropdown-content .placeholder {\n  color: #9ca3af;\n  font-weight: 400;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button .dropdown-content .selected-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button .dropdown-content .selected-item .item-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button .dropdown-content .selected-item .item-icon .icon {\n  width: 18px;\n  height: 18px;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button .dropdown-content .selected-item .selected-text {\n  font-weight: 500;\n  color: #1e293b;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button .dropdown-content .dropdown-arrow {\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  transition: transform 0.3s ease;\n  flex-shrink: 0;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-button .dropdown-content .dropdown-arrow.rotated {\n  transform: rotate(180deg);\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  margin-top: 4px;\n  overflow: hidden;\n  animation: slideDown 0.2s ease-out;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-header {\n  padding: 16px 20px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item {\n  width: 100%;\n  padding: 16px 20px;\n  border: none;\n  background: white;\n  color: #1e293b;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f1f5f9;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item:last-child {\n  border-bottom: none;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item:hover {\n  background: #f8fafc;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item.selected {\n  background: #eff6ff;\n  color: #1e40af;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item.selected .item-icon .icon {\n  color: #3b82f6;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item .item-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item .item-content .item-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item .item-content .item-icon .icon {\n  width: 18px;\n  height: 18px;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item .item-content .item-details {\n  flex: 1;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item .item-content .item-details .item-name {\n  font-weight: 500;\n  color: #1e293b;\n  margin-bottom: 2px;\n}\n.create-asset-modal .modal-content .modal-body .asset-form .generic-dropdown .dropdown-menu .dropdown-item .item-content .item-details .item-description {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.create-asset-modal .modal-content .modal-body .full-width {\n  grid-column: 1/-1;\n}\n.create-asset-modal .modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 20px;\n  padding: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 0 0 20px 20px;\n  border-top: 1px solid #e2e8f0;\n  position: relative;\n}\n.create-asset-modal .modal-footer::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #8b5cf6,\n      #06b6d4);\n}\n.create-asset-modal .modal-footer .btn-secondary {\n  padding: 18px 36px;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  background: white;\n  color: #64748b;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n}\n.create-asset-modal .modal-footer .btn-secondary::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.5s ease;\n}\n.create-asset-modal .modal-footer .btn-secondary:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  transform: translateY(-3px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);\n}\n.create-asset-modal .modal-footer .btn-secondary:hover:not(:disabled)::before {\n  left: 100%;\n}\n.create-asset-modal .modal-footer .btn-secondary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.create-asset-modal .modal-footer .btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 36px;\n  border: none;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.create-asset-modal .modal-footer .btn-primary::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.create-asset-modal .modal-footer .btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 100%);\n  transform: translateY(-3px);\n  box-shadow: 0 12px 24px rgba(59, 130, 246, 0.4);\n}\n.create-asset-modal .modal-footer .btn-primary:hover:not(:disabled)::before {\n  left: 100%;\n}\n.create-asset-modal .modal-footer .btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.create-asset-modal .modal-footer .btn-primary svg {\n  width: 20px;\n  height: 20px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .create-asset-modal {\n    padding: 16px;\n  }\n  .create-asset-modal .modal-content {\n    width: 100%;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n  .create-asset-modal .modal-content .modal-header {\n    padding: 32px 24px 20px 24px;\n  }\n  .create-asset-modal .modal-content .modal-header .modal-title {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .create-asset-modal .modal-content .modal-header .modal-title .title-icon {\n    align-self: center;\n    padding: 12px;\n  }\n  .create-asset-modal .modal-content .modal-header .modal-title .title-icon .modal-icon {\n    width: 24px;\n    height: 24px;\n  }\n  .create-asset-modal .modal-content .modal-header .modal-title .title-content h2 {\n    font-size: 1.75rem;\n  }\n  .create-asset-modal .modal-content .modal-header .modal-title .title-content p {\n    font-size: 1rem;\n  }\n  .create-asset-modal .modal-content .modal-body {\n    padding: 24px;\n  }\n  .create-asset-modal .modal-content .modal-body .modal-subtitle {\n    padding: 16px 20px;\n    margin-bottom: 32px;\n  }\n  .create-asset-modal .modal-content .modal-body .form-container {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 24px;\n  }\n  .create-asset-modal .modal-content .modal-footer {\n    padding: 32px 24px;\n    flex-direction: column;\n    gap: 16px;\n  }\n  .create-asset-modal .modal-content .modal-footer .btn-secondary,\n  .create-asset-modal .modal-content .modal-footer .btn-primary {\n    width: 100%;\n    justify-content: center;\n    padding: 16px 24px;\n  }\n}\n/*# sourceMappingURL=ai-features.component.css.map */\n'] }]
  }], () => [{ type: AIImageUploadService }, { type: LocationService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], closeOnOutsideClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIFeaturesComponent, { className: "AIFeaturesComponent", filePath: "src/app/ai-features/ai-features.component.ts", lineNumber: 22 });
})();
export {
  AIFeaturesComponent
};
//# sourceMappingURL=chunk-D6SAOEJI.js.map
