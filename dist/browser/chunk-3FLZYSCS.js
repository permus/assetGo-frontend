import {
  InventoryAnalyticsService
} from "./chunk-FQPE6O4E.js";
import {
  esm_default
} from "./chunk-S7M3QWGC.js";
import {
  E,
  autoTable
} from "./chunk-PQORQOZW.js";
import "./chunk-7YWLATDR.js";
import {
  AuthService
} from "./chunk-BGMQUXYP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ISERUI2H.js";
import "./chunk-OR4RIGW3.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/transactions/transaction-detail-drawer/transaction-detail-drawer.component.ts
var _c0 = (a0, a1, a2) => ({ "positive": a0, "negative": a1, "neutral": a2 });
function TransactionDetailDrawerComponent_div_0_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ID: ", ctx_r1.selectedTransaction.id, " ");
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.reason);
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.notes);
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_div_35_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2, "Manufacturer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.part.manufacturer);
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_div_35_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2, "Unit of Measure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.part.uom);
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Part Information ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 17)(6, "div", 18)(7, "label", 19);
    \u0275\u0275text(8, "Part Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 18)(12, "label", 19);
    \u0275\u0275text(13, "Part Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, TransactionDetailDrawerComponent_div_0_div_10_div_35_div_16_Template, 5, 1, "div", 24)(17, TransactionDetailDrawerComponent_div_0_div_10_div_35_div_17_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.part.name || "Unknown Part");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.part.part_number || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.part.manufacturer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.part.uom);
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_div_36_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.location.address);
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 27)(4, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Location ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 17)(7, "div", 18)(8, "label", 19);
    \u0275\u0275text(9, "Location Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, TransactionDetailDrawerComponent_div_0_div_10_div_36_div_12_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.location.name || "Unknown Location");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.location.address);
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_div_37_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2, "Reference Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.reference_type);
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Linked Reference ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275template(6, TransactionDetailDrawerComponent_div_0_div_10_div_37_div_6_Template, 5, 1, "div", 24);
    \u0275\u0275elementStart(7, "div", 18)(8, "label", 19);
    \u0275\u0275text(9, "Reference Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.reference_type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTransaction.reference);
  }
}
function TransactionDetailDrawerComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "h3", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 8);
    \u0275\u0275element(4, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Transaction Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 17)(7, "div", 18)(8, "label", 19);
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 20)(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 18)(14, "label", 19);
    \u0275\u0275text(15, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "label", 19);
    \u0275\u0275text(20, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 22);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 18)(24, "label", 19);
    \u0275\u0275text(25, "Unit Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 20);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 18)(29, "label", 19);
    \u0275\u0275text(30, "Total Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 23);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, TransactionDetailDrawerComponent_div_0_div_10_div_33_Template, 5, 1, "div", 24)(34, TransactionDetailDrawerComponent_div_0_div_10_div_34_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, TransactionDetailDrawerComponent_div_0_div_10_div_35_Template, 18, 4, "div", 25)(36, TransactionDetailDrawerComponent_div_0_div_10_div_36_Template, 13, 2, "div", 25)(37, TransactionDetailDrawerComponent_div_0_div_10_div_37_Template, 12, 2, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngClass", ctx_r1.getTransactionTypeClass(ctx_r1.selectedTransaction.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTransactionTypeLabel(ctx_r1.selectedTransaction.type), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedTransaction.created_at));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(13, _c0, ctx_r1.selectedTransaction.type === "receipt" || ctx_r1.selectedTransaction.type === "transfer_in" || ctx_r1.selectedTransaction.type === "return", ctx_r1.selectedTransaction.type === "issue" || ctx_r1.selectedTransaction.type === "transfer_out", ctx_r1.selectedTransaction.type === "adjustment"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedTransaction.type === "issue" || ctx_r1.selectedTransaction.type === "transfer_out" ? "-" : "+", "", ctx_r1.selectedTransaction.quantity, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.selectedTransaction.unit_cost || 0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.selectedTransaction.total_cost || 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.reason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.part);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction.reference);
  }
}
function TransactionDetailDrawerComponent_div_0_div_11_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function TransactionDetailDrawerComponent_div_0_div_11_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReverseTransaction());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reverse Transaction ");
    \u0275\u0275elementEnd();
  }
}
function TransactionDetailDrawerComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, TransactionDetailDrawerComponent_div_0_div_11_button_1_Template, 4, 0, "button", 32);
    \u0275\u0275elementStart(2, "button", 33);
    \u0275\u0275listener("click", function TransactionDetailDrawerComponent_div_0_div_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(3, " Close ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canReverse);
  }
}
function TransactionDetailDrawerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function TransactionDetailDrawerComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdropClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function TransactionDetailDrawerComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "h2", 5);
    \u0275\u0275text(5, "Transaction Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TransactionDetailDrawerComponent_div_0_p_6_Template, 2, 1, "p", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", function TransactionDetailDrawerComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 8);
    \u0275\u0275element(9, "path", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, TransactionDetailDrawerComponent_div_0_div_10_Template, 38, 17, "div", 10)(11, TransactionDetailDrawerComponent_div_0_div_11_Template, 4, 1, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedTransaction);
  }
}
var TransactionDetailDrawerComponent = class _TransactionDetailDrawerComponent {
  authService;
  isOpen = false;
  selectedTransaction = null;
  closeDrawer = new EventEmitter();
  reverseTransaction = new EventEmitter();
  canReverse = false;
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.checkPermissions();
  }
  checkPermissions() {
    const user = this.authService.getCurrentUser();
    this.canReverse = user?.user_type === "manager" || user?.user_type === "admin";
  }
  onClose() {
    this.closeDrawer.emit();
  }
  onReverseTransaction() {
    if (this.selectedTransaction && this.canReverse) {
      this.reverseTransaction.emit(this.selectedTransaction);
    }
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  }
  getTransactionTypeLabel(type) {
    const typeMap = {
      "receipt": "Receipt",
      "issue": "Issue",
      "adjustment": "Adjustment",
      "transfer_out": "Transfer Out",
      "transfer_in": "Transfer In",
      "return": "Return"
    };
    return typeMap[type] || type;
  }
  getTransactionTypeClass(type) {
    const classMap = {
      "receipt": "type-receipt",
      "issue": "type-issue",
      "adjustment": "type-adjustment",
      "transfer_out": "type-transfer-out",
      "transfer_in": "type-transfer-in",
      "return": "type-return"
    };
    return classMap[type] || "type-default";
  }
  static \u0275fac = function TransactionDetailDrawerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionDetailDrawerComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionDetailDrawerComponent, selectors: [["app-transaction-detail-drawer"]], inputs: { isOpen: "isOpen", selectedTransaction: "selectedTransaction" }, outputs: { closeDrawer: "closeDrawer", reverseTransaction: "reverseTransaction" }, decls: 1, vars: 1, consts: [["class", "drawer-overlay", 3, "click", 4, "ngIf"], [1, "drawer-overlay", 3, "click"], [1, "drawer-container", 3, "click"], [1, "drawer-header"], [1, "header-content"], [1, "drawer-title"], ["class", "transaction-id", 4, "ngIf"], ["title", "Close drawer", 1, "close-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["class", "drawer-content", 4, "ngIf"], ["class", "drawer-footer", 4, "ngIf"], [1, "transaction-id"], [1, "drawer-content"], [1, "detail-section"], [1, "section-title"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "transaction-type-badge", 3, "ngClass"], [1, "detail-value", "quantity-value", 3, "ngClass"], [1, "detail-value", "total-cost"], ["class", "detail-item", 4, "ngIf"], ["class", "detail-section", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"], [1, "detail-value", "reference-code"], [1, "drawer-footer"], ["class", "btn btn-danger", "title", "Reverse this transaction", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], ["title", "Reverse this transaction", 1, "btn", "btn-danger", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"]], template: function TransactionDetailDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TransactionDetailDrawerComponent_div_0_Template, 12, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgIf], styles: ['\n\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@media (max-width: 768px) {\n  .drawer-overlay[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n  }\n}\n.drawer-container[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 450px;\n  max-width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .drawer-container[_ngcontent-%COMP%] {\n    width: 95vw;\n    height: 95vh;\n    border-radius: 0.5rem;\n    animation: _ngcontent-%COMP%_slideInUp 0.3s ease-out;\n  }\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n.drawer-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.drawer-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .drawer-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.drawer-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .transaction-id[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: none;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.drawer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.detail-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.detail-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.detail-section[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n  word-break: break-word;\n}\n.detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.total-cost[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.detail-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.reference-code[_ngcontent-%COMP%] {\n  font-family:\n    "Monaco",\n    "Menlo",\n    "Ubuntu Mono",\n    monospace;\n  background-color: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 0.8rem;\n}\n.transaction-type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.transaction-type-badge.type-receipt[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.transaction-type-badge.type-issue[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #991b1b;\n}\n.transaction-type-badge.type-adjustment[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.transaction-type-badge.type-transfer-out[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.transaction-type-badge.type-transfer-in[_ngcontent-%COMP%] {\n  background-color: #e9d5ff;\n  color: #6b21a8;\n}\n.transaction-type-badge.type-return[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.transaction-type-badge.type-default[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.quantity-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.quantity-value.positive[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.quantity-value.negative[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.quantity-value.neutral[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.drawer-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.drawer-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.drawer-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.drawer-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.drawer-footer[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc2626;\n  color: white;\n  border-color: #dc2626;\n}\n.drawer-footer[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #b91c1c;\n  border-color: #b91c1c;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n@media (max-width: 480px) {\n  .drawer-container[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n    border-radius: 0;\n  }\n  .drawer-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .drawer-header[_ngcontent-%COMP%]   .drawer-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .drawer-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n    gap: 1rem;\n  }\n  .drawer-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .drawer-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=transaction-detail-drawer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionDetailDrawerComponent, [{
    type: Component,
    args: [{ selector: "app-transaction-detail-drawer", standalone: true, imports: [CommonModule], template: `<div class="drawer-overlay" *ngIf="isOpen" (click)="onBackdropClick($event)">\r
  <div class="drawer-container" (click)="$event.stopPropagation()">\r
    <!-- Drawer Header -->\r
    <div class="drawer-header">\r
      <div class="header-content">\r
        <h2 class="drawer-title">Transaction Details</h2>\r
        <p class="transaction-id" *ngIf="selectedTransaction">\r
          ID: {{ selectedTransaction.id }}\r
        </p>\r
      </div>\r
      <button class="close-btn" (click)="onClose()" title="Close drawer">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Drawer Content -->\r
    <div class="drawer-content" *ngIf="selectedTransaction">\r
      <!-- Transaction Details Section -->\r
      <div class="detail-section">\r
        <h3 class="section-title">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
          </svg>\r
          Transaction Details\r
        </h3>\r
        <div class="detail-grid">\r
          <div class="detail-item">\r
            <label class="detail-label">Type</label>\r
            <span class="detail-value">\r
              <span class="transaction-type-badge" [ngClass]="getTransactionTypeClass(selectedTransaction.type)">\r
                {{ getTransactionTypeLabel(selectedTransaction.type) }}\r
              </span>\r
            </span>\r
          </div>\r
          <div class="detail-item">\r
            <label class="detail-label">Date</label>\r
            <span class="detail-value">{{ formatDate(selectedTransaction.created_at) }}</span>\r
          </div>\r
          <div class="detail-item">\r
            <label class="detail-label">Quantity</label>\r
            <span class="detail-value quantity-value" [ngClass]="{\r
              'positive': selectedTransaction.type === 'receipt' || selectedTransaction.type === 'transfer_in' || selectedTransaction.type === 'return',\r
              'negative': selectedTransaction.type === 'issue' || selectedTransaction.type === 'transfer_out',\r
              'neutral': selectedTransaction.type === 'adjustment'\r
            }">\r
              {{ selectedTransaction.type === 'issue' || selectedTransaction.type === 'transfer_out' ? '-' : '+' }}{{ selectedTransaction.quantity }}\r
            </span>\r
          </div>\r
          <div class="detail-item">\r
            <label class="detail-label">Unit Cost</label>\r
            <span class="detail-value">{{ formatCurrency(selectedTransaction.unit_cost || 0) }}</span>\r
          </div>\r
          <div class="detail-item">\r
            <label class="detail-label">Total Cost</label>\r
            <span class="detail-value total-cost">{{ formatCurrency(selectedTransaction.total_cost || 0) }}</span>\r
          </div>\r
          <div class="detail-item" *ngIf="selectedTransaction.reason">\r
            <label class="detail-label">Reason</label>\r
            <span class="detail-value">{{ selectedTransaction.reason }}</span>\r
          </div>\r
          <div class="detail-item" *ngIf="selectedTransaction.notes">\r
            <label class="detail-label">Notes</label>\r
            <span class="detail-value">{{ selectedTransaction.notes }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Part Information Section -->\r
      <div class="detail-section" *ngIf="selectedTransaction.part">\r
        <h3 class="section-title">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>\r
          </svg>\r
          Part Information\r
        </h3>\r
        <div class="detail-grid">\r
          <div class="detail-item">\r
            <label class="detail-label">Part Name</label>\r
            <span class="detail-value">{{ selectedTransaction.part.name || 'Unknown Part' }}</span>\r
          </div>\r
          <div class="detail-item">\r
            <label class="detail-label">Part Number</label>\r
            <span class="detail-value">{{ selectedTransaction.part.part_number || 'N/A' }}</span>\r
          </div>\r
          <div class="detail-item" *ngIf="selectedTransaction.part.manufacturer">\r
            <label class="detail-label">Manufacturer</label>\r
            <span class="detail-value">{{ selectedTransaction.part.manufacturer }}</span>\r
          </div>\r
          <div class="detail-item" *ngIf="selectedTransaction.part.uom">\r
            <label class="detail-label">Unit of Measure</label>\r
            <span class="detail-value">{{ selectedTransaction.part.uom }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Location Section -->\r
      <div class="detail-section" *ngIf="selectedTransaction.location">\r
        <h3 class="section-title">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
          </svg>\r
          Location\r
        </h3>\r
        <div class="detail-grid">\r
          <div class="detail-item">\r
            <label class="detail-label">Location Name</label>\r
            <span class="detail-value">{{ selectedTransaction.location.name || 'Unknown Location' }}</span>\r
          </div>\r
          <div class="detail-item" *ngIf="selectedTransaction.location.address">\r
            <label class="detail-label">Address</label>\r
            <span class="detail-value">{{ selectedTransaction.location.address }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Linked Reference Section -->\r
      <div class="detail-section" *ngIf="selectedTransaction.reference">\r
        <h3 class="section-title">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>\r
          </svg>\r
          Linked Reference\r
        </h3>\r
        <div class="detail-grid">\r
          <div class="detail-item" *ngIf="selectedTransaction.reference_type">\r
            <label class="detail-label">Reference Type</label>\r
            <span class="detail-value">{{ selectedTransaction.reference_type }}</span>\r
          </div>\r
          <div class="detail-item">\r
            <label class="detail-label">Reference Code</label>\r
            <span class="detail-value reference-code">{{ selectedTransaction.reference }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Drawer Footer -->\r
    <div class="drawer-footer" *ngIf="selectedTransaction">\r
      <button \r
        *ngIf="canReverse" \r
        class="btn btn-danger" \r
        (click)="onReverseTransaction()"\r
        title="Reverse this transaction">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
        </svg>\r
        Reverse Transaction\r
      </button>\r
      <button class="btn btn-secondary" (click)="onClose()">\r
        Close\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/inventory/components/transactions/transaction-detail-drawer/transaction-detail-drawer.component.scss */\n.drawer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch;\n  animation: fadeIn 0.2s ease-out;\n}\n@media (max-width: 768px) {\n  .drawer-overlay {\n    justify-content: center;\n    align-items: center;\n  }\n}\n.drawer-container {\n  background-color: white;\n  width: 450px;\n  max-width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);\n  animation: slideInRight 0.3s ease-out;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .drawer-container {\n    width: 95vw;\n    height: 95vh;\n    border-radius: 0.5rem;\n    animation: slideInUp 0.3s ease-out;\n  }\n}\n.drawer-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n.drawer-header .header-content {\n  flex: 1;\n}\n.drawer-header .header-content .drawer-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.drawer-header .header-content .transaction-id {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n}\n.drawer-header .close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: none;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.drawer-header .close-btn:hover {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.drawer-header .close-btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.drawer-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.detail-section .section-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.detail-section .section-title svg {\n  color: #6b7280;\n}\n.detail-section .detail-grid {\n  display: grid;\n  gap: 1rem;\n}\n.detail-section .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.detail-section .detail-item .detail-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.detail-section .detail-item .detail-value {\n  font-size: 0.875rem;\n  color: #111827;\n  word-break: break-word;\n}\n.detail-section .detail-item .detail-value.total-cost {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.detail-section .detail-item .detail-value.reference-code {\n  font-family:\n    "Monaco",\n    "Menlo",\n    "Ubuntu Mono",\n    monospace;\n  background-color: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 0.8rem;\n}\n.transaction-type-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.transaction-type-badge.type-receipt {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.transaction-type-badge.type-issue {\n  background-color: #fef2f2;\n  color: #991b1b;\n}\n.transaction-type-badge.type-adjustment {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.transaction-type-badge.type-transfer-out {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.transaction-type-badge.type-transfer-in {\n  background-color: #e9d5ff;\n  color: #6b21a8;\n}\n.transaction-type-badge.type-return {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.transaction-type-badge.type-default {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.quantity-value {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.quantity-value.positive {\n  color: #059669;\n}\n.quantity-value.negative {\n  color: #dc2626;\n}\n.quantity-value.neutral {\n  color: #2563eb;\n}\n.drawer-footer {\n  padding: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.drawer-footer .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.drawer-footer .btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.drawer-footer .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.drawer-footer .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n}\n.drawer-footer .btn.btn-danger {\n  background-color: #dc2626;\n  color: white;\n  border-color: #dc2626;\n}\n.drawer-footer .btn.btn-danger:hover {\n  background-color: #b91c1c;\n  border-color: #b91c1c;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes slideInUp {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n@media (max-width: 480px) {\n  .drawer-container {\n    width: 100vw;\n    height: 100vh;\n    border-radius: 0;\n  }\n  .drawer-header {\n    padding: 1rem;\n  }\n  .drawer-header .drawer-title {\n    font-size: 1.125rem;\n  }\n  .drawer-content {\n    padding: 1rem;\n    gap: 1rem;\n  }\n  .drawer-footer {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .drawer-footer .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=transaction-detail-drawer.component.css.map */\n'] }]
  }], () => [{ type: AuthService }], { isOpen: [{
    type: Input
  }], selectedTransaction: [{
    type: Input
  }], closeDrawer: [{
    type: Output
  }], reverseTransaction: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionDetailDrawerComponent, { className: "TransactionDetailDrawerComponent", filePath: "src/app/inventory/components/transactions/transaction-detail-drawer/transaction-detail-drawer.component.ts", lineNumber: 13 });
})();

// src/app/inventory/components/transactions/transactions.component.ts
var _c02 = (a0, a1, a2) => ({ "text-green-600": a0, "text-red-600": a1, "text-blue-600": a2 });
var _c1 = () => [];
function TransactionsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 26);
    \u0275\u0275listener("click", function TransactionsComponent_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportToCSV());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function TransactionsComponent_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportToPDF());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 8);
    \u0275\u0275element(7, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading || ctx_r1.exporting || ctx_r1.transactions.length === 0)("title", ctx_r1.getExportButtonTitle());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getExportButtonText(), " CSV ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading || ctx_r1.exporting || ctx_r1.transactions.length === 0)("title", ctx_r1.getExportButtonTitle());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getExportButtonText(), " PDF ");
  }
}
function TransactionsComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r3.label, " ");
  }
}
function TransactionsComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r4 = ctx.$implicit;
    \u0275\u0275property("value", part_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", part_r4.name, " (", part_r4.part_number, ") ");
  }
}
function TransactionsComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r5 = ctx.$implicit;
    \u0275\u0275property("value", location_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r5.name, " ");
  }
}
function TransactionsComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 30);
    \u0275\u0275listener("click", function TransactionsComponent_Conditional_46_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(2, " Clear Filters ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function TransactionsComponent_Conditional_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(4, " Apply Filters ");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading transactions...");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 36);
    \u0275\u0275element(3, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function TransactionsComponent_div_48_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275text(7, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function TransactionsComponent_div_49_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 58);
    \u0275\u0275listener("click", function TransactionsComponent_div_49_tr_30_Template_tr_click_0_listener() {
      const transaction_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openTransactionDrawer(transaction_r9));
    });
    \u0275\u0275elementStart(1, "td", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 60)(4, "span", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 62)(7, "div", 63)(8, "div", 64);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 65);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td", 66)(13, "div", 67)(14, "div", 68);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 69);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td", 70)(19, "span", 71);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 72);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 73)(24, "span", 74);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 75)(27, "span", 76);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 77)(30, "span", 78);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const transaction_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(transaction_r9.created_at), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getTransactionTypeClass(transaction_r9.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTransactionTypeLabel(transaction_r9.type), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((transaction_r9.part == null ? null : transaction_r9.part.name) || "Unknown Part");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((transaction_r9.part == null ? null : transaction_r9.part.part_number) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((transaction_r9.location == null ? null : transaction_r9.location.name) || "Unknown Location");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((transaction_r9.location == null ? null : transaction_r9.location.code) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(16, _c02, transaction_r9.type === "receipt" || transaction_r9.type === "transfer_in" || transaction_r9.type === "return", transaction_r9.type === "issue" || transaction_r9.type === "transfer_out", transaction_r9.type === "adjustment"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", transaction_r9.type === "issue" || transaction_r9.type === "transfer_out" ? "-" : "+", "", transaction_r9.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(transaction_r9.unit_cost || 0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transaction_r9.total_cost || 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", transaction_r9.reason);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", transaction_r9.reason || "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", transaction_r9.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", transaction_r9.reference || "N/A", " ");
  }
}
function TransactionsComponent_div_49_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 81);
    \u0275\u0275element(3, "path", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 83);
    \u0275\u0275text(5, "No transactions found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 84);
    \u0275\u0275text(7, " No transactions match your current filters. Try adjusting your search criteria. ");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_div_49_div_32_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function TransactionsComponent_div_49_div_32_button_6_Template_button_click_0_listener() {
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
function TransactionsComponent_div_49_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "button", 86);
    \u0275\u0275listener("click", function TransactionsComponent_div_49_div_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 87);
    \u0275\u0275element(3, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 89);
    \u0275\u0275template(6, TransactionsComponent_div_49_div_32_button_6_Template, 2, 3, "button", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 91);
    \u0275\u0275listener("click", function TransactionsComponent_div_49_div_32_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 87);
    \u0275\u0275element(10, "path", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c1).constructor(ctx_r1.totalPages));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function TransactionsComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h3", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 44)(8, "table", 45)(9, "thead")(10, "tr")(11, "th", 46);
    \u0275\u0275text(12, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 47);
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 48);
    \u0275\u0275text(16, "Part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 49);
    \u0275\u0275text(18, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 50);
    \u0275\u0275text(20, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 51);
    \u0275\u0275text(22, "Unit Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 52);
    \u0275\u0275text(24, "Total Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 53);
    \u0275\u0275text(26, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 54);
    \u0275\u0275text(28, "Reference");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, TransactionsComponent_div_49_tr_30_Template, 32, 20, "tr", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, TransactionsComponent_div_49_div_31_Template, 8, 0, "div", 56)(32, TransactionsComponent_div_49_div_32_Template, 11, 4, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Transactions (", ctx_r1.totalItems, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r1.currentPage, " of ", ctx_r1.totalPages, " ");
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.transactions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.transactions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var TransactionsComponent = class _TransactionsComponent {
  inventoryService;
  authService;
  transactions = [];
  loading = false;
  error = null;
  searchTimeout;
  // Pagination
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  perPage = 15;
  // Filters
  filters = {
    type: "",
    part_id: "",
    location_id: "",
    start_date: "",
    end_date: "",
    search: ""
  };
  // Available options for filters
  availableParts = [];
  availableLocations = [];
  transactionTypes = [
    { value: "", label: "All Types" },
    { value: "receipt", label: "Receipt" },
    { value: "issue", label: "Issue" },
    { value: "adjustment", label: "Adjustment" },
    { value: "transfer_out", label: "Transfer Out" },
    { value: "transfer_in", label: "Transfer In" },
    { value: "return", label: "Return" }
  ];
  // Flatpickr instances
  startDatePicker;
  endDatePicker;
  exporting = false;
  canExport = false;
  // Drawer state
  showDrawer = false;
  selectedTransaction = null;
  constructor(inventoryService, authService) {
    this.inventoryService = inventoryService;
    this.authService = authService;
    this.checkExportPermissions();
  }
  checkExportPermissions() {
    const user = this.authService.getCurrentUser();
    this.canExport = user?.user_type === "manager" || user?.user_type === "admin";
  }
  hasActiveFilters() {
    return !!(this.filters.type || this.filters.part_id || this.filters.location_id || this.filters.start_date || this.filters.end_date || this.filters.search);
  }
  getExportButtonText() {
    if (this.exporting) {
      return "Exporting...";
    }
    return this.hasActiveFilters() ? "Export Filtered" : "Export All";
  }
  getExportButtonTitle() {
    if (this.hasActiveFilters()) {
      const activeFilters = [];
      if (this.filters.type)
        activeFilters.push(`Type: ${this.getTransactionTypeLabel(this.filters.type)}`);
      if (this.filters.part_id) {
        const part = this.availableParts.find((p) => p.id == this.filters.part_id);
        activeFilters.push(`Part: ${part?.name || "Selected"}`);
      }
      if (this.filters.location_id) {
        const location = this.availableLocations.find((l) => l.id == this.filters.location_id);
        activeFilters.push(`Location: ${location?.name || "Selected"}`);
      }
      if (this.filters.start_date)
        activeFilters.push(`From: ${this.filters.start_date}`);
      if (this.filters.end_date)
        activeFilters.push(`To: ${this.filters.end_date}`);
      if (this.filters.search)
        activeFilters.push(`Search: ${this.filters.search}`);
      return `Export filtered data: ${activeFilters.join(", ")}`;
    }
    return "Export all transactions";
  }
  // Drawer methods
  openTransactionDrawer(transaction) {
    this.selectedTransaction = transaction;
    this.showDrawer = true;
    this.trackTransactionView(transaction);
  }
  closeTransactionDrawer() {
    this.showDrawer = false;
    this.selectedTransaction = null;
  }
  onReverseTransaction(transaction) {
    console.log("Reverse transaction requested for:", transaction.id);
    alert("Reverse transaction functionality will be implemented soon.");
  }
  trackTransactionView(transaction) {
    const user = this.authService.getCurrentUser();
    console.log("event: transaction_view", {
      transaction_id: transaction.id,
      user_id: user?.id,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  ngOnInit() {
    this.loadTransactions();
    this.loadAvailableParts();
    this.loadAvailableLocations();
  }
  ngAfterViewInit() {
    this.initializeDatePickers();
  }
  loadTransactions() {
    this.loading = true;
    this.error = null;
    const params = new URLSearchParams();
    params.set("page", this.currentPage.toString());
    params.set("per_page", this.perPage.toString());
    if (this.filters.type)
      params.set("type", this.filters.type);
    if (this.filters.part_id)
      params.set("part_id", this.filters.part_id);
    if (this.filters.location_id)
      params.set("location_id", this.filters.location_id);
    if (this.filters.start_date)
      params.set("start_date", this.filters.start_date);
    if (this.filters.end_date)
      params.set("end_date", this.filters.end_date);
    if (this.filters.search)
      params.set("keyword", this.filters.search);
    this.inventoryService.getTransactions(params.toString()).subscribe({
      next: (response) => {
        this.transactions = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
        this.totalItems = response.data.total;
        this.loading = false;
        console.log("Transactions loaded:", response);
      },
      error: (err) => {
        console.error("Error loading transactions:", err);
        this.error = "Failed to load transactions. Please try again.";
        this.loading = false;
      }
    });
  }
  loadAvailableParts() {
    this.inventoryService.getPartsCatalog("", "active", 1, 100).subscribe({
      next: (response) => {
        this.availableParts = response.data.data || [];
        console.log("Available parts loaded:", this.availableParts.length);
      },
      error: (err) => {
        console.error("Error loading parts:", err);
        this.availableParts = [];
      }
    });
  }
  loadAvailableLocations() {
    this.inventoryService.getLocations(1, 100, 0, "created", "desc").subscribe({
      next: (response) => {
        this.availableLocations = response.data?.locations || [];
      },
      error: (err) => {
        console.error("Error loading locations:", err);
        this.availableLocations = [];
      }
    });
  }
  applyFilters() {
    this.currentPage = 1;
    this.loadTransactions();
  }
  clearFilters() {
    this.filters = {
      type: "",
      part_id: "",
      location_id: "",
      start_date: "",
      end_date: "",
      search: ""
    };
    if (this.startDatePicker) {
      this.startDatePicker.set("maxDate", null);
      this.startDatePicker.set("minDate", null);
      this.startDatePicker.clear();
    }
    if (this.endDatePicker) {
      this.endDatePicker.set("maxDate", null);
      this.endDatePicker.set("minDate", null);
      this.endDatePicker.clear();
    }
    this.currentPage = 1;
    this.loadTransactions();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadTransactions();
  }
  getTransactionTypeLabel(type) {
    const typeMap = {
      "receipt": "Receipt",
      "issue": "Issue",
      "adjustment": "Adjustment",
      "transfer_out": "Transfer Out",
      "transfer_in": "Transfer In",
      "return": "Return"
    };
    return typeMap[type] || type;
  }
  getTransactionTypeClass(type) {
    const classMap = {
      "receipt": "bg-green-100 text-green-800",
      "issue": "bg-red-100 text-red-800",
      "adjustment": "bg-blue-100 text-blue-800",
      "transfer_out": "bg-orange-100 text-orange-800",
      "transfer_in": "bg-purple-100 text-purple-800",
      "return": "bg-yellow-100 text-yellow-800"
    };
    return classMap[type] || "bg-gray-100 text-gray-800";
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  }
  refreshData() {
    this.loadTransactions();
  }
  searchData() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.currentPage = 1;
      this.loadTransactions();
    }, 800);
  }
  initializeDatePickers() {
    this.startDatePicker = esm_default("#start-date-picker", {
      dateFormat: "Y-m-d",
      onChange: (selectedDates, dateStr) => {
        this.filters.start_date = dateStr;
        if (dateStr && this.endDatePicker) {
          this.endDatePicker.set("maxDate", null);
          this.endDatePicker.set("minDate", dateStr);
        }
        this.currentPage = 1;
        this.loadTransactions();
      }
    });
    this.endDatePicker = esm_default("#end-date-picker", {
      dateFormat: "Y-m-d",
      onChange: (selectedDates, dateStr) => {
        this.filters.end_date = dateStr;
        if (dateStr && this.startDatePicker) {
          this.startDatePicker.set("maxDate", dateStr);
        }
        this.currentPage = 1;
        this.loadTransactions();
      }
    });
  }
  exportToCSV() {
    if (this.transactions.length === 0) {
      alert("No transactions to export");
      return;
    }
    this.exporting = true;
    const params = new URLSearchParams();
    params.set("per_page", "1000");
    params.set("page", "1");
    if (this.filters.type)
      params.set("type", this.filters.type);
    if (this.filters.part_id)
      params.set("part_id", this.filters.part_id);
    if (this.filters.location_id)
      params.set("location_id", this.filters.location_id);
    if (this.filters.start_date)
      params.set("start_date", this.filters.start_date);
    if (this.filters.end_date)
      params.set("end_date", this.filters.end_date);
    if (this.filters.search)
      params.set("keyword", this.filters.search);
    this.inventoryService.getTransactions(params.toString()).subscribe({
      next: (response) => {
        const filteredTransactions = response.data.data;
        this.generateCSV(filteredTransactions);
        this.exporting = false;
      },
      error: (err) => {
        console.error("Error fetching transactions for export:", err);
        this.generateCSV(this.transactions);
        this.exporting = false;
      }
    });
  }
  generateCSV(transactions) {
    const headers = [
      "Date",
      "Type",
      "Part Number",
      "Part Name",
      "Location",
      "Quantity",
      "Unit Cost",
      "Total Cost",
      "Reason",
      "Reference"
    ];
    const rows = transactions.map((transaction) => {
      const quantity = transaction.type === "issue" || transaction.type === "transfer_out" ? `-${transaction.quantity}` : `+${transaction.quantity}`;
      return [
        this.formatDate(transaction.created_at),
        this.getTransactionTypeLabel(transaction.type),
        transaction.part?.part_number || "N/A",
        this.escapeCSV(transaction.part?.name || "Unknown Part"),
        this.escapeCSV(transaction.location?.name || "Unknown Location"),
        quantity,
        (transaction.unit_cost || 0).toString(),
        (transaction.total_cost || 0).toString(),
        this.escapeCSV(transaction.reason || "N/A"),
        this.escapeCSV(transaction.reference || "N/A")
      ];
    });
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `transactions-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  escapeCSV(value) {
    if (!value)
      return "";
    const escaped = value.replace(/"/g, '""');
    if (escaped.includes(",") || escaped.includes('"') || escaped.includes("\n")) {
      return `"${escaped}"`;
    }
    return escaped;
  }
  exportToPDF() {
    if (this.transactions.length === 0) {
      alert("No transactions to export");
      return;
    }
    this.exporting = true;
    const params = new URLSearchParams();
    params.set("per_page", "1000");
    params.set("page", "1");
    if (this.filters.type)
      params.set("type", this.filters.type);
    if (this.filters.part_id)
      params.set("part_id", this.filters.part_id);
    if (this.filters.location_id)
      params.set("location_id", this.filters.location_id);
    if (this.filters.start_date)
      params.set("start_date", this.filters.start_date);
    if (this.filters.end_date)
      params.set("end_date", this.filters.end_date);
    if (this.filters.search)
      params.set("keyword", this.filters.search);
    this.inventoryService.getTransactions(params.toString()).subscribe({
      next: (response) => {
        const filteredTransactions = response.data.data;
        this.generatePDF(filteredTransactions);
        this.exporting = false;
      },
      error: (err) => {
        console.error("Error fetching transactions for export:", err);
        this.generatePDF(this.transactions);
        this.exporting = false;
      }
    });
  }
  generatePDF(transactions) {
    let title = "Inventory Transactions Report";
    const filterParts = [];
    if (this.filters.type) {
      filterParts.push(`Type: ${this.getTransactionTypeLabel(this.filters.type)}`);
    }
    if (this.filters.start_date && this.filters.end_date) {
      filterParts.push(`Date Range: ${this.filters.start_date} to ${this.filters.end_date}`);
    } else if (this.filters.start_date) {
      filterParts.push(`From: ${this.filters.start_date}`);
    } else if (this.filters.end_date) {
      filterParts.push(`To: ${this.filters.end_date}`);
    }
    if (filterParts.length > 0) {
      title += ` (${filterParts.join(", ")})`;
    }
    const doc = new E({
      orientation: "landscape",
      unit: "mm",
      format: "a4"
    });
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(title, 20, 20);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    const currentDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
    doc.text(`Generated on: ${currentDate}`, 20, 30);
    const tableData = transactions.map((transaction) => {
      const quantity = transaction.type === "issue" || transaction.type === "transfer_out" ? `-${transaction.quantity}` : `+${transaction.quantity}`;
      return [
        this.formatDate(transaction.created_at),
        this.getTransactionTypeLabel(transaction.type),
        transaction.part?.part_number || "N/A",
        transaction.part?.name || "Unknown Part",
        transaction.location?.name || "Unknown Location",
        quantity,
        this.formatCurrency(transaction.unit_cost || 0),
        this.formatCurrency(transaction.total_cost || 0),
        transaction.reason || "N/A",
        transaction.reference || "N/A"
      ];
    });
    autoTable(doc, {
      head: [["Date", "Type", "Part #", "Part Name", "Location", "Qty", "Unit Cost", "Total", "Reason", "Ref"]],
      body: tableData,
      startY: 35,
      margin: { left: 20, right: 20 },
      styles: {
        fontSize: 7,
        cellPadding: 2,
        halign: "left",
        overflow: "linebreak",
        cellWidth: "wrap"
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: "bold",
        fontSize: 7
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      columnStyles: {
        0: { cellWidth: 20, halign: "center" },
        // Date
        1: { cellWidth: 25 },
        // Type
        2: { cellWidth: 30 },
        // Part #
        3: { cellWidth: 40, overflow: "linebreak" },
        // Part Name - allow wrapping
        4: { cellWidth: 35, overflow: "linebreak" },
        // Location - allow wrapping
        5: { cellWidth: 15, halign: "center" },
        // Quantity
        6: { cellWidth: 25, halign: "right" },
        // Unit Cost
        7: { cellWidth: 25, halign: "right" },
        // Total Cost
        8: { cellWidth: 30, overflow: "linebreak" },
        // Reason - allow wrapping
        9: { cellWidth: 25, overflow: "linebreak" }
        // Reference - allow wrapping
      },
      // Use tableWidth: 'auto' to fit page width
      tableWidth: "auto"
    });
    const fileName = `transactions-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`;
    doc.save(fileName);
  }
  static \u0275fac = function TransactionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionsComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionsComponent, selectors: [["app-transactions"]], decls: 51, vars: 15, consts: [[1, "transactions-container"], [1, "header-section"], [1, "header-content"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "text-gray-600"], [1, "header-actions"], ["class", "export-buttons", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "filters-section"], [1, "filters-grid"], [1, "filter-group"], [1, "filter-label"], [1, "filter-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["value", ""], ["id", "start-date-picker", "type", "text", "placeholder", "Select start date", "readonly", "", 1, "filter-input"], ["id", "end-date-picker", "type", "text", "placeholder", "Select end date", "readonly", "", 1, "filter-input"], ["type", "text", "placeholder", "Search transactions...", 1, "filter-input", 3, "ngModelChange", "ngModel"], [1, "filter-actions", "mt-6"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], [3, "closeDrawer", "reverseTransaction", "isOpen", "selectedTransaction"], [1, "export-buttons"], [1, "btn", "btn-outline", 3, "click", "disabled", "title"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [3, "value"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "error-message"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "table-actions"], [1, "text-sm", "text-gray-500"], [1, "table-wrapper"], [1, "transactions-table"], [1, "th-date"], [1, "th-type"], [1, "th-part"], [1, "th-location"], [1, "th-quantity"], [1, "th-cost"], [1, "th-total"], [1, "th-reason"], [1, "th-reference"], ["class", "table-row", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "table-row", 3, "click"], [1, "td-date"], [1, "td-type"], [1, "transaction-type-badge", 3, "ngClass"], [1, "td-part"], [1, "part-info"], [1, "part-name"], [1, "part-number"], [1, "td-location"], [1, "location-info"], [1, "location-name"], [1, "location-code"], [1, "td-quantity"], [1, "quantity-value", 3, "ngClass"], [1, "td-cost"], [1, "td-total"], [1, "total-cost"], [1, "td-reason"], [1, "reason-text", 3, "title"], [1, "td-reference"], [1, "reference-text", 3, "title"], [1, "empty-state"], [1, "empty-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "empty-title"], [1, "empty-description"], [1, "pagination"], [1, "pagination-btn", "pagination-prev", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "pagination-btn", "pagination-next", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "pagination-page", 3, "click"]], template: function TransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Inventory Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Track and manage all inventory movements and transactions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275template(8, TransactionsComponent_div_8_Template, 9, 6, "div", 6);
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function TransactionsComponent_Template_button_click_9_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Refresh ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "label", 13);
      \u0275\u0275text(17, "Transaction Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.type, $event) || (ctx.filters.type = $event);
        return $event;
      });
      \u0275\u0275template(19, TransactionsComponent_option_19_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 12)(21, "label", 13);
      \u0275\u0275text(22, "Part");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.part_id, $event) || (ctx.filters.part_id = $event);
        return $event;
      });
      \u0275\u0275elementStart(24, "option", 16);
      \u0275\u0275text(25, "All Parts");
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, TransactionsComponent_option_26_Template, 2, 3, "option", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 12)(28, "label", 13);
      \u0275\u0275text(29, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.location_id, $event) || (ctx.filters.location_id = $event);
        return $event;
      });
      \u0275\u0275elementStart(31, "option", 16);
      \u0275\u0275text(32, "All Locations");
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, TransactionsComponent_option_33_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 12)(35, "label", 13);
      \u0275\u0275text(36, "Start Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 12)(39, "label", 13);
      \u0275\u0275text(40, "End Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 12)(43, "label", 13);
      \u0275\u0275text(44, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.search, $event) || (ctx.filters.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_45_listener() {
        return ctx.searchData();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(46, TransactionsComponent_Conditional_46_Template, 5, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, TransactionsComponent_div_47_Template, 4, 0, "div", 21)(48, TransactionsComponent_div_48_Template, 8, 1, "div", 22)(49, TransactionsComponent_div_49_Template, 33, 6, "div", 23);
      \u0275\u0275elementStart(50, "app-transaction-detail-drawer", 24);
      \u0275\u0275listener("closeDrawer", function TransactionsComponent_Template_app_transaction_detail_drawer_closeDrawer_50_listener() {
        return ctx.closeTransactionDrawer();
      })("reverseTransaction", function TransactionsComponent_Template_app_transaction_detail_drawer_reverseTransaction_50_listener($event) {
        return ctx.onReverseTransaction($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.canExport);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.transactionTypes);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.part_id);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.availableParts);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.location_id);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.availableLocations);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.search);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.filters.type || ctx.filters.part_id || ctx.filters.location_id || ctx.filters.start_date || ctx.filters.end_date ? 46 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showDrawer)("selectedTransaction", ctx.selectedTransaction);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TransactionDetailDrawerComponent], styles: ['\n\n.flatpickr-calendar[_ngcontent-%COMP%] {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n  animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  background: #fff;\n  -webkit-box-shadow:\n    1px 0 0 #e6e6e6,\n    -1px 0 0 #e6e6e6,\n    0 1px 0 #e6e6e6,\n    0 -1px 0 #e6e6e6,\n    0 3px 13px rgba(0, 0, 0, 0.08);\n  box-shadow:\n    1px 0 0 #e6e6e6,\n    -1px 0 0 #e6e6e6,\n    0 1px 0 #e6e6e6,\n    0 -1px 0 #e6e6e6,\n    0 3px 13px rgba(0, 0, 0, 0.08);\n}\n.flatpickr-calendar.open[_ngcontent-%COMP%], \n.flatpickr-calendar.inline[_ngcontent-%COMP%] {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n.flatpickr-calendar.open[_ngcontent-%COMP%] {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open[_ngcontent-%COMP%] {\n  -webkit-animation: _ngcontent-%COMP%_fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  animation: _ngcontent-%COMP%_fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open[_ngcontent-%COMP%] {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.multiMonth[_ngcontent-%COMP%]   .flatpickr-days[_ngcontent-%COMP%]   .dayContainer[_ngcontent-%COMP%]:nth-child(n+1)   .flatpickr-day.inRange[_ngcontent-%COMP%]:nth-child(7n+7) {\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n}\n.flatpickr-calendar.multiMonth[_ngcontent-%COMP%]   .flatpickr-days[_ngcontent-%COMP%]   .dayContainer[_ngcontent-%COMP%]:nth-child(n+2)   .flatpickr-day.inRange[_ngcontent-%COMP%]:nth-child(7n+1) {\n  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n  box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-calendar[_ngcontent-%COMP%]   .hasWeeks[_ngcontent-%COMP%]   .dayContainer[_ngcontent-%COMP%], \n.flatpickr-calendar[_ngcontent-%COMP%]   .hasTime[_ngcontent-%COMP%]   .dayContainer[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar[_ngcontent-%COMP%]   .hasWeeks[_ngcontent-%COMP%]   .dayContainer[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.flatpickr-calendar.hasTime[_ngcontent-%COMP%]   .flatpickr-time[_ngcontent-%COMP%] {\n  height: 40px;\n  border-top: 1px solid #e6e6e6;\n}\n.flatpickr-calendar.noCalendar.hasTime[_ngcontent-%COMP%]   .flatpickr-time[_ngcontent-%COMP%] {\n  height: auto;\n}\n.flatpickr-calendar[_ngcontent-%COMP%]:before, \n.flatpickr-calendar[_ngcontent-%COMP%]:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: "";\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost[_ngcontent-%COMP%]:before, \n.flatpickr-calendar.arrowRight[_ngcontent-%COMP%]:before, \n.flatpickr-calendar.rightMost[_ngcontent-%COMP%]:after, \n.flatpickr-calendar.arrowRight[_ngcontent-%COMP%]:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar.arrowCenter[_ngcontent-%COMP%]:before, \n.flatpickr-calendar.arrowCenter[_ngcontent-%COMP%]:after {\n  left: 50%;\n  right: 50%;\n}\n.flatpickr-calendar[_ngcontent-%COMP%]:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar[_ngcontent-%COMP%]:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop[_ngcontent-%COMP%]:before, \n.flatpickr-calendar.arrowTop[_ngcontent-%COMP%]:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop[_ngcontent-%COMP%]:before {\n  border-bottom-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowTop[_ngcontent-%COMP%]:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-calendar.arrowBottom[_ngcontent-%COMP%]:before, \n.flatpickr-calendar.arrowBottom[_ngcontent-%COMP%]:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom[_ngcontent-%COMP%]:before {\n  border-top-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowBottom[_ngcontent-%COMP%]:after {\n  border-top-color: #fff;\n}\n.flatpickr-calendar[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.flatpickr-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-months[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-month[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.9);\n  fill: rgba(0, 0, 0, 0.9);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month[_ngcontent-%COMP%], \n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 3;\n  color: rgba(0, 0, 0, 0.9);\n  fill: rgba(0, 0, 0, 0.9);\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month.flatpickr-disabled[_ngcontent-%COMP%], \n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month.flatpickr-disabled[_ngcontent-%COMP%] {\n  display: none;\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month.flatpickr-prev-month[_ngcontent-%COMP%], \n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month.flatpickr-prev-month[_ngcontent-%COMP%] {\n  left: 0;\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month.flatpickr-next-month[_ngcontent-%COMP%], \n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month.flatpickr-next-month[_ngcontent-%COMP%] {\n  right: 0;\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month[_ngcontent-%COMP%]:hover, \n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month[_ngcontent-%COMP%]:hover {\n  color: #959ea9;\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], \n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #f64747;\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], \n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.numInputWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.numInputWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.numInputWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.numInputWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.numInputWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n.numInputWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(57, 57, 57, 0.15);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.numInputWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.numInputWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.2);\n}\n.numInputWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  display: block;\n  content: "";\n  position: absolute;\n}\n.numInputWrapper[_ngcontent-%COMP%]   span.arrowUp[_ngcontent-%COMP%] {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper[_ngcontent-%COMP%]   span.arrowUp[_ngcontent-%COMP%]:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(57, 57, 57, 0.6);\n  top: 26%;\n}\n.numInputWrapper[_ngcontent-%COMP%]   span.arrowDown[_ngcontent-%COMP%] {\n  top: 50%;\n}\n.numInputWrapper[_ngcontent-%COMP%]   span.arrowDown[_ngcontent-%COMP%]:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(57, 57, 57, 0.6);\n  top: 40%;\n}\n.numInputWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: rgba(0, 0, 0, 0.5);\n}\n.numInputWrapper[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.numInputWrapper[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.flatpickr-current-month[_ngcontent-%COMP%] {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   span.cur-month[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   span.cur-month[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   .numInputWrapper[_ngcontent-%COMP%] {\n  width: 6ch;\n  width: 7ch\\fffd;\n  display: inline-block;\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   .numInputWrapper[_ngcontent-%COMP%]   span.arrowUp[_ngcontent-%COMP%]:after {\n  border-bottom-color: rgba(0, 0, 0, 0.9);\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   .numInputWrapper[_ngcontent-%COMP%]   span.arrowDown[_ngcontent-%COMP%]:after {\n  border-top-color: rgba(0, 0, 0, 0.9);\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   input.cur-year[_ngcontent-%COMP%] {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   input.cur-year[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   input.cur-year[disabled][_ngcontent-%COMP%], \n.flatpickr-current-month[_ngcontent-%COMP%]   input.cur-year[disabled][_ngcontent-%COMP%]:hover {\n  font-size: 100%;\n  color: rgba(0, 0, 0, 0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   .flatpickr-monthDropdown-months[_ngcontent-%COMP%] {\n  appearance: menulist;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   .flatpickr-monthDropdown-months[_ngcontent-%COMP%]:focus, \n.flatpickr-current-month[_ngcontent-%COMP%]   .flatpickr-monthDropdown-months[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   .flatpickr-monthDropdown-months[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.flatpickr-current-month[_ngcontent-%COMP%]   .flatpickr-monthDropdown-months[_ngcontent-%COMP%]   .flatpickr-monthDropdown-month[_ngcontent-%COMP%] {\n  background-color: transparent;\n  outline: none;\n  padding: 0;\n}\n.flatpickr-weekdays[_ngcontent-%COMP%] {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 28px;\n}\n.flatpickr-weekdays[_ngcontent-%COMP%]   .flatpickr-weekdaycontainer[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\nspan.flatpickr-weekday[_ngcontent-%COMP%] {\n  cursor: default;\n  font-size: 90%;\n  background: transparent;\n  color: rgba(0, 0, 0, 0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-weight: bolder;\n}\n.dayContainer[_ngcontent-%COMP%], \n.flatpickr-weeks[_ngcontent-%COMP%] {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  width: 307.875px;\n}\n.flatpickr-days[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.dayContainer[_ngcontent-%COMP%] {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.dayContainer[_ngcontent-%COMP%]    + .dayContainer[_ngcontent-%COMP%] {\n  -webkit-box-shadow: -1px 0 0 #e6e6e6;\n  box-shadow: -1px 0 0 #e6e6e6;\n}\n.flatpickr-day[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #393939;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n  -ms-flex-preferred-size: 14.2857143%;\n  flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange[_ngcontent-%COMP%], \n.flatpickr-day.prevMonthDay.inRange[_ngcontent-%COMP%], \n.flatpickr-day.nextMonthDay.inRange[_ngcontent-%COMP%], \n.flatpickr-day.today.inRange[_ngcontent-%COMP%], \n.flatpickr-day.prevMonthDay.today.inRange[_ngcontent-%COMP%], \n.flatpickr-day.nextMonthDay.today.inRange[_ngcontent-%COMP%], \n.flatpickr-day[_ngcontent-%COMP%]:hover, \n.flatpickr-day.prevMonthDay[_ngcontent-%COMP%]:hover, \n.flatpickr-day.nextMonthDay[_ngcontent-%COMP%]:hover, \n.flatpickr-day[_ngcontent-%COMP%]:focus, \n.flatpickr-day.prevMonthDay[_ngcontent-%COMP%]:focus, \n.flatpickr-day.nextMonthDay[_ngcontent-%COMP%]:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e6e6e6;\n  border-color: #e6e6e6;\n}\n.flatpickr-day.today[_ngcontent-%COMP%] {\n  border-color: #959ea9;\n}\n.flatpickr-day.today[_ngcontent-%COMP%]:hover, \n.flatpickr-day.today[_ngcontent-%COMP%]:focus {\n  border-color: #959ea9;\n  background: #959ea9;\n  color: #fff;\n}\n.flatpickr-day.selected[_ngcontent-%COMP%], \n.flatpickr-day.startRange[_ngcontent-%COMP%], \n.flatpickr-day.endRange[_ngcontent-%COMP%], \n.flatpickr-day.selected.inRange[_ngcontent-%COMP%], \n.flatpickr-day.startRange.inRange[_ngcontent-%COMP%], \n.flatpickr-day.endRange.inRange[_ngcontent-%COMP%], \n.flatpickr-day.selected[_ngcontent-%COMP%]:focus, \n.flatpickr-day.startRange[_ngcontent-%COMP%]:focus, \n.flatpickr-day.endRange[_ngcontent-%COMP%]:focus, \n.flatpickr-day.selected[_ngcontent-%COMP%]:hover, \n.flatpickr-day.startRange[_ngcontent-%COMP%]:hover, \n.flatpickr-day.endRange[_ngcontent-%COMP%]:hover, \n.flatpickr-day.selected.prevMonthDay[_ngcontent-%COMP%], \n.flatpickr-day.startRange.prevMonthDay[_ngcontent-%COMP%], \n.flatpickr-day.endRange.prevMonthDay[_ngcontent-%COMP%], \n.flatpickr-day.selected.nextMonthDay[_ngcontent-%COMP%], \n.flatpickr-day.startRange.nextMonthDay[_ngcontent-%COMP%], \n.flatpickr-day.endRange.nextMonthDay[_ngcontent-%COMP%] {\n  background: #569ff7;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  color: #fff;\n  border-color: #569ff7;\n}\n.flatpickr-day.selected.startRange[_ngcontent-%COMP%], \n.flatpickr-day.startRange.startRange[_ngcontent-%COMP%], \n.flatpickr-day.endRange.startRange[_ngcontent-%COMP%] {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange[_ngcontent-%COMP%], \n.flatpickr-day.startRange.endRange[_ngcontent-%COMP%], \n.flatpickr-day.endRange.endRange[_ngcontent-%COMP%] {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange[_ngcontent-%COMP%]    + .endRange[_ngcontent-%COMP%]:not(:nth-child(7n+1)), \n.flatpickr-day.startRange.startRange[_ngcontent-%COMP%]    + .endRange[_ngcontent-%COMP%]:not(:nth-child(7n+1)), \n.flatpickr-day.endRange.startRange[_ngcontent-%COMP%]    + .endRange[_ngcontent-%COMP%]:not(:nth-child(7n+1)) {\n  -webkit-box-shadow: -10px 0 0 #569ff7;\n  box-shadow: -10px 0 0 #569ff7;\n}\n.flatpickr-day.selected.startRange.endRange[_ngcontent-%COMP%], \n.flatpickr-day.startRange.startRange.endRange[_ngcontent-%COMP%], \n.flatpickr-day.endRange.startRange.endRange[_ngcontent-%COMP%] {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange[_ngcontent-%COMP%] {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n  box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-day.flatpickr-disabled[_ngcontent-%COMP%], \n.flatpickr-day.flatpickr-disabled[_ngcontent-%COMP%]:hover, \n.flatpickr-day.prevMonthDay[_ngcontent-%COMP%], \n.flatpickr-day.nextMonthDay[_ngcontent-%COMP%], \n.flatpickr-day.notAllowed[_ngcontent-%COMP%], \n.flatpickr-day.notAllowed.prevMonthDay[_ngcontent-%COMP%], \n.flatpickr-day.notAllowed.nextMonthDay[_ngcontent-%COMP%] {\n  color: rgba(57, 57, 57, 0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.flatpickr-disabled[_ngcontent-%COMP%], \n.flatpickr-day.flatpickr-disabled[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n  color: rgba(57, 57, 57, 0.1);\n}\n.flatpickr-day.week.selected[_ngcontent-%COMP%] {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n  box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n}\n.flatpickr-day.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.rangeMode[_ngcontent-%COMP%]   .flatpickr-day[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper[_ngcontent-%COMP%] {\n  float: left;\n}\n.flatpickr-weekwrapper[_ngcontent-%COMP%]   .flatpickr-weeks[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6;\n  box-shadow: 1px 0 0 #e6e6e6;\n}\n.flatpickr-weekwrapper[_ngcontent-%COMP%]   .flatpickr-weekday[_ngcontent-%COMP%] {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper[_ngcontent-%COMP%]   span.flatpickr-day[_ngcontent-%COMP%], \n.flatpickr-weekwrapper[_ngcontent-%COMP%]   span.flatpickr-day[_ngcontent-%COMP%]:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(57, 57, 57, 0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n.flatpickr-innerContainer[_ngcontent-%COMP%] {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.flatpickr-rContainer[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.flatpickr-time[_ngcontent-%COMP%] {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-time[_ngcontent-%COMP%]:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.flatpickr-time[_ngcontent-%COMP%]   .numInputWrapper[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time[_ngcontent-%COMP%]   .numInputWrapper[_ngcontent-%COMP%]   span.arrowUp[_ngcontent-%COMP%]:after {\n  border-bottom-color: #393939;\n}\n.flatpickr-time[_ngcontent-%COMP%]   .numInputWrapper[_ngcontent-%COMP%]   span.arrowDown[_ngcontent-%COMP%]:after {\n  border-top-color: #393939;\n}\n.flatpickr-time.hasSeconds[_ngcontent-%COMP%]   .numInputWrapper[_ngcontent-%COMP%] {\n  width: 26%;\n}\n.flatpickr-time.time24hr[_ngcontent-%COMP%]   .numInputWrapper[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.flatpickr-time[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: #393939;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-time[_ngcontent-%COMP%]   input.flatpickr-hour[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.flatpickr-time[_ngcontent-%COMP%]   input.flatpickr-minute[_ngcontent-%COMP%], \n.flatpickr-time[_ngcontent-%COMP%]   input.flatpickr-second[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.flatpickr-time[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time[_ngcontent-%COMP%]   .flatpickr-time-separator[_ngcontent-%COMP%], \n.flatpickr-time[_ngcontent-%COMP%]   .flatpickr-am-pm[_ngcontent-%COMP%] {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  color: #393939;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-align-self: center;\n  -ms-flex-item-align: center;\n  align-self: center;\n}\n.flatpickr-time[_ngcontent-%COMP%]   .flatpickr-am-pm[_ngcontent-%COMP%] {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, \n.flatpickr-time[_ngcontent-%COMP%]   .flatpickr-am-pm[_ngcontent-%COMP%]:hover, \n.flatpickr-time[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.flatpickr-time[_ngcontent-%COMP%]   .flatpickr-am-pm[_ngcontent-%COMP%]:focus {\n  background: #eee;\n}\n.flatpickr-input[readonly][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@-webkit-keyframes _ngcontent-%COMP%_fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.transactions-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .export-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n@media (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1280px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  color: #374151;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], \n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus, \n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.transactions-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border: 4px solid #bfdbfe;\n  border-top: 4px solid #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.transactions-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n@media (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #6b7280;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1200px;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  text-align: left;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid #e5e7eb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-date[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-type[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-part[_ngcontent-%COMP%] {\n  width: 14rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-location[_ngcontent-%COMP%] {\n  width: 12rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-quantity[_ngcontent-%COMP%] {\n  width: 7rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-cost[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-total[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reason[_ngcontent-%COMP%] {\n  width: 11rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reference[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #111827;\n  border-bottom: 1px solid #e5e7eb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-date[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-type[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-type[_ngcontent-%COMP%]   .transaction-type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.125rem 0.625rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-part[_ngcontent-%COMP%] {\n  width: 14rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-part[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-part[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-part[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-number[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-location[_ngcontent-%COMP%] {\n  width: 12rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-location[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-location[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-location[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-quantity[_ngcontent-%COMP%] {\n  width: 7rem;\n  text-align: center;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-quantity[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-cost[_ngcontent-%COMP%] {\n  width: 9rem;\n  text-align: right;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-total[_ngcontent-%COMP%] {\n  width: 9rem;\n  text-align: right;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-total[_ngcontent-%COMP%]   .total-cost[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reason[_ngcontent-%COMP%] {\n  width: 11rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reason[_ngcontent-%COMP%]   .reason-text[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reference[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reference[_ngcontent-%COMP%]   .reference-text[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.transactions-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-align: center;\n  max-width: 28rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  color: #374151;\n  background-color: white;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn.pagination-prev[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn.pagination-next[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:not(.active) {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  color: #1d4ed8;\n  background-color: #eff6ff;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  border-color: transparent;\n  color: white;\n  background-color: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1024px) and (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%] {\n    min-width: 1000px;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reason[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reference[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reason[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reference[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n}\n@media (max-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reason[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reference[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reason[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reference[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n    gap: 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) and (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-cost[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-total[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) and (min-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-cost[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-total[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-cost[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-total[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) and (min-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-cost[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-total[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n    order: 1;\n    width: 100%;\n    justify-content: center;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn.pagination-prev[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn.pagination-next[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n\n\n/*# sourceMappingURL=transactions.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-transactions", standalone: true, imports: [CommonModule, FormsModule, TransactionDetailDrawerComponent], template: `<div class="transactions-container">\r
  <!-- Header -->\r
  <div class="header-section">\r
    <div class="header-content">\r
      <h1 class="text-2xl font-bold text-gray-900">Inventory Transactions</h1>\r
      <p class="text-gray-600">Track and manage all inventory movements and transactions</p>\r
    </div>\r
    <div class="header-actions">\r
      <div class="export-buttons" *ngIf="canExport">\r
        <button\r
          (click)="exportToCSV()"\r
          class="btn btn-outline"\r
          [disabled]="loading || exporting || transactions.length === 0"\r
          [title]="getExportButtonTitle()">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
          </svg>\r
          {{ getExportButtonText() }} CSV\r
        </button>\r
        <button\r
          (click)="exportToPDF()"\r
          class="btn btn-outline"\r
          [disabled]="loading || exporting || transactions.length === 0"\r
          [title]="getExportButtonTitle()">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>\r
          </svg>\r
          {{ getExportButtonText() }} PDF\r
        </button>\r
      </div>\r
      <button\r
        (click)="refreshData()"\r
        class="btn btn-secondary"\r
        [disabled]="loading">\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
        </svg>\r
        Refresh\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Filters Section -->\r
  <div class="filters-section">\r
    <div class="filters-grid">\r
      <!-- Transaction Type Filter -->\r
      <div class="filter-group">\r
        <label class="filter-label">Transaction Type</label>\r
        <select [(ngModel)]="filters.type" class="filter-select">\r
          <option *ngFor="let type of transactionTypes" [value]="type.value">\r
            {{ type.label }}\r
          </option>\r
        </select>\r
      </div>\r
\r
      <!-- Part Filter -->\r
      <div class="filter-group">\r
        <label class="filter-label">Part</label>\r
        <select\r
          [(ngModel)]="filters.part_id"\r
          class="filter-select"\r
        >\r
          <option value="">All Parts</option>\r
          <option *ngFor="let part of availableParts" [value]="part.id">\r
            {{ part.name }} ({{ part.part_number }})\r
          </option>\r
        </select>\r
      </div>\r
\r
      <!-- Location Filter -->\r
      <div class="filter-group">\r
        <label class="filter-label">Location</label>\r
        <select\r
          [(ngModel)]="filters.location_id"\r
          class="filter-select"\r
          >\r
          <option value="">All Locations</option>\r
          <option *ngFor="let location of availableLocations" [value]="location.id">\r
            {{ location.name }}\r
          </option>\r
        </select>\r
      </div>\r
\r
      <!-- Date Range Filters -->\r
      <div class="filter-group">\r
        <label class="filter-label">Start Date</label>\r
        <input\r
          id="start-date-picker"\r
          type="text"\r
          placeholder="Select start date"\r
          class="filter-input"\r
          readonly>\r
      </div>\r
\r
      <div class="filter-group">\r
        <label class="filter-label">End Date</label>\r
        <input\r
          id="end-date-picker"\r
          type="text"\r
          placeholder="Select end date"\r
          class="filter-input"\r
          readonly>\r
      </div>\r
\r
      <!-- Search Filter -->\r
      <div class="filter-group">\r
        <label class="filter-label">Search</label>\r
        <input\r
          type="text"\r
          [(ngModel)]="filters.search"\r
          (ngModelChange)="searchData()"\r
          placeholder="Search transactions..."\r
          class="filter-input">\r
      </div>\r
    </div>\r
\r
    @if (filters.type || filters.part_id || filters.location_id || filters.start_date || filters.end_date){\r
      <div class="filter-actions mt-6">\r
        <button\r
          (click)="clearFilters()"\r
          class="btn btn-outline">\r
          Clear Filters\r
        </button>\r
        <button\r
          (click)="applyFilters()"\r
          class="btn btn-primary">\r
          Apply Filters\r
        </button>\r
      </div>\r
    }\r
\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Loading transactions...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="error-state">\r
    <div class="error-icon">\r
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
    </div>\r
    <p class="error-message">{{ error }}</p>\r
    <button (click)="refreshData()" class="btn btn-primary">Retry</button>\r
  </div>\r
\r
  <!-- Transactions Table -->\r
  <div *ngIf="!loading && !error" class="table-container">\r
    <div class="table-header">\r
      <h3 class="table-title">Transactions ({{ totalItems }})</h3>\r
      <div class="table-actions">\r
        <span class="text-sm text-gray-500">\r
          Page {{ currentPage }} of {{ totalPages }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <div class="table-wrapper">\r
      <table class="transactions-table">\r
        <thead>\r
          <tr>\r
            <th class="th-date">Date</th>\r
            <th class="th-type">Type</th>\r
            <th class="th-part">Part</th>\r
            <th class="th-location">Location</th>\r
            <th class="th-quantity">Quantity</th>\r
            <th class="th-cost">Unit Cost</th>\r
            <th class="th-total">Total Cost</th>\r
            <th class="th-reason">Reason</th>\r
            <th class="th-reference">Reference</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let transaction of transactions" class="table-row" (click)="openTransactionDrawer(transaction)">\r
            <td class="td-date">\r
              {{ formatDate(transaction.created_at) }}\r
            </td>\r
            <td class="td-type">\r
              <span\r
                class="transaction-type-badge"\r
                [ngClass]="getTransactionTypeClass(transaction.type)">\r
                {{ getTransactionTypeLabel(transaction.type) }}\r
              </span>\r
            </td>\r
            <td class="td-part">\r
              <div class="part-info">\r
                <div class="part-name">{{ transaction.part?.name || 'Unknown Part' }}</div>\r
                <div class="part-number">{{ transaction.part?.part_number || 'N/A' }}</div>\r
              </div>\r
            </td>\r
            <td class="td-location">\r
              <div class="location-info">\r
                <div class="location-name">{{ transaction.location?.name || 'Unknown Location' }}</div>\r
                <div class="location-code">{{ transaction.location?.code || 'N/A' }}</div>\r
              </div>\r
            </td>\r
            <td class="td-quantity">\r
              <span class="quantity-value" [ngClass]="{\r
                'text-green-600': transaction.type === 'receipt' || transaction.type === 'transfer_in' || transaction.type === 'return',\r
                'text-red-600': transaction.type === 'issue' || transaction.type === 'transfer_out',\r
                'text-blue-600': transaction.type === 'adjustment'\r
              }">\r
                {{ transaction.type === 'issue' || transaction.type === 'transfer_out' ? '-' : '+' }}{{ transaction.quantity }}\r
              </span>\r
            </td>\r
            <td class="td-cost">\r
              {{ formatCurrency(transaction.unit_cost || 0) }}\r
            </td>\r
            <td class="td-total">\r
              <span class="total-cost">{{ formatCurrency(transaction.total_cost || 0) }}</span>\r
            </td>\r
            <td class="td-reason">\r
              <span class="reason-text" [title]="transaction.reason">\r
                {{ transaction.reason || 'N/A' }}\r
              </span>\r
            </td>\r
            <td class="td-reference">\r
              <span class="reference-text" [title]="transaction.reference">\r
                {{ transaction.reference || 'N/A' }}\r
              </span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div *ngIf="transactions.length === 0" class="empty-state">\r
      <div class="empty-icon">\r
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="empty-title">No transactions found</h3>\r
      <p class="empty-description">\r
        No transactions match your current filters. Try adjusting your search criteria.\r
      </p>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div *ngIf="totalPages > 1" class="pagination">\r
      <button\r
        (click)="onPageChange(currentPage - 1)"\r
        [disabled]="currentPage === 1"\r
        class="pagination-btn pagination-prev">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
        </svg>\r
        Previous\r
      </button>\r
\r
      <div class="pagination-pages">\r
        <button\r
          *ngFor="let page of [].constructor(totalPages); let i = index"\r
          (click)="onPageChange(i + 1)"\r
          [class.active]="currentPage === i + 1"\r
          class="pagination-page">\r
          {{ i + 1 }}\r
        </button>\r
      </div>\r
\r
      <button\r
        (click)="onPageChange(currentPage + 1)"\r
        [disabled]="currentPage === totalPages"\r
        class="pagination-btn pagination-next">\r
        Next\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
        </svg>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Transaction Detail Drawer -->\r
  <app-transaction-detail-drawer\r
    [isOpen]="showDrawer"\r
    [selectedTransaction]="selectedTransaction"\r
    (closeDrawer)="closeTransactionDrawer()"\r
    (reverseTransaction)="onReverseTransaction($event)">\r
  </app-transaction-detail-drawer>\r
</div>\r
`, styles: ['/* src/app/inventory/components/transactions/transactions.component.scss */\n.flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n  animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  background: #fff;\n  -webkit-box-shadow:\n    1px 0 0 #e6e6e6,\n    -1px 0 0 #e6e6e6,\n    0 1px 0 #e6e6e6,\n    0 -1px 0 #e6e6e6,\n    0 3px 13px rgba(0, 0, 0, 0.08);\n  box-shadow:\n    1px 0 0 #e6e6e6,\n    -1px 0 0 #e6e6e6,\n    0 1px 0 #e6e6e6,\n    0 -1px 0 #e6e6e6,\n    0 3px 13px rgba(0, 0, 0, 0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n  box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid #e6e6e6;\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: "";\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.arrowRight:before,\n.flatpickr-calendar.rightMost:after,\n.flatpickr-calendar.arrowRight:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar.arrowCenter:before,\n.flatpickr-calendar.arrowCenter:after {\n  left: 50%;\n  right: 50%;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #fff;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-months {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-months .flatpickr-month {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.9);\n  fill: rgba(0, 0, 0, 0.9);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 3;\n  color: rgba(0, 0, 0, 0.9);\n  fill: rgba(0, 0, 0, 0.9);\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n  left: 0;\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n  right: 0;\n}\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: #959ea9;\n}\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n}\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(57, 57, 57, 0.15);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0, 0, 0, 0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: "";\n  position: absolute;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(57, 57, 57, 0.6);\n  top: 26%;\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(57, 57, 57, 0.6);\n  top: 40%;\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(0, 0, 0, 0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\fffd;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: rgba(0, 0, 0, 0.9);\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: rgba(0, 0, 0, 0.9);\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(0, 0, 0, 0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: transparent;\n  outline: none;\n  padding: 0;\n}\n.flatpickr-weekdays {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 28px;\n}\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: transparent;\n  color: rgba(0, 0, 0, 0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  width: 307.875px;\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.dayContainer + .dayContainer {\n  -webkit-box-shadow: -1px 0 0 #e6e6e6;\n  box-shadow: -1px 0 0 #e6e6e6;\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #393939;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n  -ms-flex-preferred-size: 14.2857143%;\n  flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e6e6e6;\n  border-color: #e6e6e6;\n}\n.flatpickr-day.today {\n  border-color: #959ea9;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #959ea9;\n  background: #959ea9;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #569ff7;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  color: #fff;\n  border-color: #569ff7;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  -webkit-box-shadow: -10px 0 0 #569ff7;\n  box-shadow: -10px 0 0 #569ff7;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n  box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(57, 57, 57, 0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: rgba(57, 57, 57, 0.1);\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n  box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n}\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6;\n  box-shadow: 1px 0 0 #e6e6e6;\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(57, 57, 57, 0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-time:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #393939;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #393939;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: #393939;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  color: #393939;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-align-self: center;\n  -ms-flex-item-align: center;\n  align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #eee;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.transactions-container {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.transactions-container .header-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 640px) {\n  .transactions-container .header-section {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.transactions-container .header-section .header-content h1 {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.transactions-container .header-section .header-content p {\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.transactions-container .header-section .header-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.transactions-container .header-section .header-actions .export-buttons {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.transactions-container .filters-section {\n  background-color: white;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n}\n.transactions-container .filters-section .filters-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n@media (min-width: 640px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1280px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n.transactions-container .filters-section .filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.transactions-container .filters-section .filter-group .filter-label {\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  color: #374151;\n}\n.transactions-container .filters-section .filter-group .filter-select,\n.transactions-container .filters-section .filter-group .filter-input {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.transactions-container .filters-section .filter-group .filter-select:focus,\n.transactions-container .filters-section .filter-group .filter-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container .filters-section .filter-group .filter-select {\n  background-color: white;\n}\n.transactions-container .filters-section .filter-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.transactions-container .loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container .loading-state .loading-spinner {\n  width: 2rem;\n  height: 2rem;\n  border: 4px solid #bfdbfe;\n  border-top: 4px solid #2563eb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.transactions-container .loading-state p {\n  color: #6b7280;\n}\n.transactions-container .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container .error-state .error-icon {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.transactions-container .error-state .error-message {\n  color: #374151;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.transactions-container .table-container {\n  background-color: white;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.transactions-container .table-container .table-header {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (min-width: 640px) {\n  .transactions-container .table-container .table-header {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n.transactions-container .table-container .table-header .table-title {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n@media (min-width: 640px) {\n  .transactions-container .table-container .table-header .table-title {\n    margin-bottom: 0;\n  }\n}\n.transactions-container .table-container .table-header .table-actions {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #6b7280;\n}\n.transactions-container .table-container .table-wrapper {\n  overflow-x: auto;\n}\n.transactions-container .table-container .table-wrapper table {\n  table-layout: fixed;\n}\n.transactions-container .table-container .transactions-table {\n  width: 100%;\n  min-width: 1200px;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.transactions-container .table-container .transactions-table thead {\n  background-color: #f9fafb;\n}\n.transactions-container .table-container .transactions-table thead th {\n  padding: 0.75rem 1.5rem;\n  text-align: left;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid #e5e7eb;\n}\n.transactions-container .table-container .transactions-table thead th.th-date {\n  width: 6rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-type {\n  width: 8rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-part {\n  width: 14rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-location {\n  width: 12rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-quantity {\n  width: 7rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-cost {\n  width: 9rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-total {\n  width: 9rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-reason {\n  width: 11rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-reference {\n  width: 9rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row {\n  transition: background-color 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container .table-container .transactions-table tbody .table-row:hover {\n  background-color: #f9fafb;\n}\n.transactions-container .table-container .transactions-table tbody .table-row:nth-child(even) {\n  background-color: #f9fafb;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td {\n  padding: 1rem 1.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #111827;\n  border-bottom: 1px solid #e5e7eb;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-date {\n  color: #6b7280;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-type {\n  width: 8rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-type .transaction-type-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.125rem 0.625rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-part {\n  width: 14rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-part .part-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-part .part-info .part-name {\n  font-weight: 500;\n  color: #111827;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1.25rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-part .part-info .part-number {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-location {\n  width: 12rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-location .location-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-location .location-info .location-name {\n  font-weight: 500;\n  color: #111827;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1.25rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-location .location-info .location-code {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-quantity {\n  width: 7rem;\n  text-align: center;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-quantity .quantity-value {\n  font-weight: 500;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-cost {\n  width: 9rem;\n  text-align: right;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-total {\n  width: 9rem;\n  text-align: right;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-total .total-cost {\n  font-weight: 500;\n  color: #111827;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-reason {\n  width: 11rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-reason .reason-text {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-reference {\n  width: 9rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-reference .reference-text {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.transactions-container .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container .empty-state .empty-icon {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.transactions-container .empty-state .empty-title {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.transactions-container .empty-state .empty-description {\n  color: #6b7280;\n  text-align: center;\n  max-width: 28rem;\n}\n.transactions-container .pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.transactions-container .pagination .pagination-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  color: #374151;\n  background-color: white;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container .pagination .pagination-btn:hover {\n  background-color: #f9fafb;\n}\n.transactions-container .pagination .pagination-btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container .pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.transactions-container .pagination .pagination-btn.pagination-prev {\n  margin-right: 0.5rem;\n}\n.transactions-container .pagination .pagination-btn.pagination-next {\n  margin-left: 0.5rem;\n}\n.transactions-container .pagination .pagination-pages {\n  display: flex;\n  gap: 0.25rem;\n}\n.transactions-container .pagination .pagination-pages .pagination-page {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container .pagination .pagination-pages .pagination-page:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container .pagination .pagination-pages .pagination-page:not(.active) {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.transactions-container .pagination .pagination-pages .pagination-page:not(.active):hover {\n  background-color: #f9fafb;\n}\n.transactions-container .pagination .pagination-pages .pagination-page.active {\n  border-color: #3b82f6;\n  color: #1d4ed8;\n  background-color: #eff6ff;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.btn.btn-primary {\n  border-color: transparent;\n  color: white;\n  background-color: #2563eb;\n}\n.btn.btn-primary:hover {\n  background-color: #1d4ed8;\n}\n.btn.btn-secondary {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.btn.btn-secondary:hover {\n  background-color: #f9fafb;\n}\n.btn.btn-outline {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.btn.btn-outline:hover {\n  background-color: #f9fafb;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 1024px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1024px) and (min-width: 640px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1024px) {\n  .transactions-container .table-container .transactions-table {\n    min-width: 1000px;\n  }\n  .transactions-container .table-container .transactions-table thead th.th-reason,\n  .transactions-container .table-container .transactions-table thead th.th-reference {\n    display: none;\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container .table-container .transactions-table thead th.th-reason,\n  .transactions-container .table-container .transactions-table thead th.th-reference {\n    display: table-cell;\n  }\n}\n@media (max-width: 1024px) {\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-reason,\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-reference {\n    display: none;\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-reason,\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-reference {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container {\n    padding: 1rem;\n    gap: 1rem;\n  }\n  .transactions-container .filters-section {\n    padding: 1rem;\n  }\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) and (min-width: 640px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container .filters-section .filter-actions {\n    flex-direction: column;\n  }\n  .transactions-container .filters-section .filter-actions .btn {\n    width: 100%;\n  }\n  .transactions-container .table-container .table-header {\n    padding: 1rem;\n  }\n  .transactions-container .table-container .transactions-table {\n    min-width: 800px;\n  }\n  .transactions-container .table-container .transactions-table thead th {\n    padding: 0.5rem 1rem;\n  }\n  .transactions-container .table-container .transactions-table thead th.th-cost,\n  .transactions-container .table-container .transactions-table thead th.th-total {\n    display: none;\n  }\n}\n@media (max-width: 768px) and (min-width: 768px) {\n  .transactions-container .table-container .transactions-table thead th.th-cost,\n  .transactions-container .table-container .transactions-table thead th.th-total {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container .table-container .transactions-table tbody .table-row td {\n    padding: 0.5rem 1rem;\n  }\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-cost,\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-total {\n    display: none;\n  }\n}\n@media (max-width: 768px) and (min-width: 768px) {\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-cost,\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-total {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container .table-container .pagination {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .transactions-container .table-container .pagination .pagination-pages {\n    order: 2;\n  }\n  .transactions-container .table-container .pagination .pagination-btn {\n    order: 1;\n    width: 100%;\n    justify-content: center;\n  }\n  .transactions-container .table-container .pagination .pagination-btn.pagination-prev {\n    margin-right: 0;\n  }\n  .transactions-container .table-container .pagination .pagination-btn.pagination-next {\n    margin-left: 0;\n  }\n}\n/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=transactions.component.css.map */\n'] }]
  }], () => [{ type: InventoryAnalyticsService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionsComponent, { className: "TransactionsComponent", filePath: "src/app/inventory/components/transactions/transactions.component.ts", lineNumber: 18 });
})();
export {
  TransactionsComponent
};
//# sourceMappingURL=chunk-3FLZYSCS.js.map
