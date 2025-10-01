import {
  InventoryAnalyticsService
} from "./chunk-ILYFWJC3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FSOYXA4J.js";
import "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-MMJF4Y5E.js";
import {
  Component,
  setClassMetadata,
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
  ɵɵpureFunction0,
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
} from "./chunk-YUR5IGOK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/inventory/components/stock-levels/stock-levels.component.ts
var _c0 = () => [];
function StockLevelsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading stock levels...");
    \u0275\u0275elementEnd()();
  }
}
function StockLevelsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function StockLevelsComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 15);
    \u0275\u0275element(7, "path", 16);
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
function StockLevelsComponent_div_3_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r4 = ctx.$implicit;
    \u0275\u0275property("value", location_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r4.name, " ");
  }
}
function StockLevelsComponent_div_3_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r5 = ctx.$implicit;
    \u0275\u0275property("value", part_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", part_r5.part_number, " - ", part_r5.name, " ");
  }
}
function StockLevelsComponent_div_3_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_Conditional_58_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 64);
    \u0275\u0275element(2, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Clear Filters ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_Conditional_58_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 64);
    \u0275\u0275element(6, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Apply Filters ");
    \u0275\u0275elementEnd();
  }
}
function StockLevelsComponent_div_3_tr_94_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stock_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stock_r8.location.code);
  }
}
function StockLevelsComponent_div_3_tr_94_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stock_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stock_r8.reserved);
  }
}
function StockLevelsComponent_div_3_tr_94_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function StockLevelsComponent_div_3_tr_94_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stock_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, stock_r8.average_cost, "1.2-2"), "");
  }
}
function StockLevelsComponent_div_3_tr_94_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function StockLevelsComponent_div_3_tr_94_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_tr_94_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const stock_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openTransferModal(stock_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "button", 89);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_tr_94_Conditional_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const stock_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openReserveModal(stock_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 15);
    \u0275\u0275element(5, "path", 90);
    \u0275\u0275elementEnd()();
  }
}
function StockLevelsComponent_div_3_tr_94_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_3_tr_94_div_36_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const stock_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.releaseQuantities[stock_r8.id], $event) || (ctx_r1.releaseQuantities[stock_r8.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 93);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_tr_94_div_36_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const stock_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReleaseStock(stock_r8, ctx_r1.releaseQuantities[stock_r8.id]));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 15);
    \u0275\u0275element(4, "path", 94);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stock_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.releaseQuantities[stock_r8.id]);
    \u0275\u0275property("max", stock_r8.reserved);
  }
}
function StockLevelsComponent_div_3_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 65)(2, "div", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 68)(7, "div", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StockLevelsComponent_div_3_tr_94_div_9_Template, 2, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 71)(11, "span", 72);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 71)(14, "span", 73);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 71);
    \u0275\u0275template(17, StockLevelsComponent_div_3_tr_94_span_17_Template, 2, 1, "span", 74)(18, StockLevelsComponent_div_3_tr_94_span_18_Template, 2, 0, "span", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 76);
    \u0275\u0275template(20, StockLevelsComponent_div_3_tr_94_span_20_Template, 3, 4, "span", 77)(21, StockLevelsComponent_div_3_tr_94_span_21_Template, 2, 0, "span", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 78)(23, "span", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 15);
    \u0275\u0275element(25, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "td", 80)(28, "div", 81)(29, "button", 82);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_tr_94_Template_button_click_29_listener() {
      const stock_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAdjustmentModal(stock_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 15);
    \u0275\u0275element(31, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, StockLevelsComponent_div_3_tr_94_Conditional_32_Template, 6, 0);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "button", 83);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_tr_94_Template_button_click_33_listener() {
      const stock_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCountModal(stock_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 15);
    \u0275\u0275element(35, "path", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, StockLevelsComponent_div_3_tr_94_div_36_Template, 5, 2, "div", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stock_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stock_r8.part.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stock_r8.part.part_number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stock_r8.location.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stock_r8.location.code);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStockLevelClass(stock_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stock_r8.on_hand, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stock_r8.available);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", stock_r8.reserved > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stock_r8.reserved === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", stock_r8.average_cost > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !stock_r8.average_cost || stock_r8.average_cost === 0);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStockStatus(stock_r8).class);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStockStatus(stock_r8).status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(stock_r8.available > 0 ? 32 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", stock_r8.reserved > 0);
  }
}
function StockLevelsComponent_div_3_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 96);
    \u0275\u0275element(2, "path", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 98);
    \u0275\u0275text(4, "No Stock Items Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 99);
    \u0275\u0275text(6, "Try adjusting your search criteria or filters.");
    \u0275\u0275elementEnd()();
  }
}
function StockLevelsComponent_div_3_div_96_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_div_96_button_6_Template_button_click_0_listener() {
      const i_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r13 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.currentPage === i_r13 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r13 + 1, " ");
  }
}
function StockLevelsComponent_div_3_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "button", 101);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_div_96_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "path", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 103);
    \u0275\u0275template(6, StockLevelsComponent_div_3_div_96_button_6_Template, 2, 3, "button", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 101);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_div_96_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 15);
    \u0275\u0275element(10, "path", 105);
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
function StockLevelsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 17)(2, "div", 18)(3, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 6);
    \u0275\u0275element(5, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 21)(7, "div", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275text(10, "Total Stock Items");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 24)(12, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 6);
    \u0275\u0275element(14, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 21)(16, "div", 22);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 23);
    \u0275\u0275text(19, "Total Inventory Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 26)(21, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 6);
    \u0275\u0275element(23, "path", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 21)(25, "div", 27);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 23);
    \u0275\u0275text(28, "Low Stock Items");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 28)(30, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 6);
    \u0275\u0275element(32, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div", 21)(34, "div", 30);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 23);
    \u0275\u0275text(37, "Out of Stock");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 31)(39, "div", 32)(40, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 34);
    \u0275\u0275element(42, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_3_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 37)(45, "select", 38);
    \u0275\u0275listener("mousedown", function StockLevelsComponent_div_3_Template_select_mousedown_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.locationDropdownOpen = true);
    })("change", function StockLevelsComponent_div_3_Template_select_change_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.locationDropdownOpen = false);
    })("blur", function StockLevelsComponent_div_3_Template_select_blur_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.locationDropdownOpen = false);
    });
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_3_Template_select_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLocationId, $event) || (ctx_r1.selectedLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(46, "option", 39);
    \u0275\u0275text(47, "All Locations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, StockLevelsComponent_div_3_option_48_Template, 2, 2, "option", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 41);
    \u0275\u0275element(50, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "div", 37)(52, "select", 38);
    \u0275\u0275listener("mousedown", function StockLevelsComponent_div_3_Template_select_mousedown_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.partDropdownOpen = true);
    })("change", function StockLevelsComponent_div_3_Template_select_change_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.partDropdownOpen = false);
    })("blur", function StockLevelsComponent_div_3_Template_select_blur_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.partDropdownOpen = false);
    });
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_3_Template_select_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPartId, $event) || (ctx_r1.selectedPartId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(53, "option", 39);
    \u0275\u0275text(54, "All Parts");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, StockLevelsComponent_div_3_option_55_Template, 2, 3, "option", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 41);
    \u0275\u0275element(57, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, StockLevelsComponent_div_3_Conditional_58_Template, 8, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "div", 43)(60, "div", 44)(61, "button", 14);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdjustmentModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 15);
    \u0275\u0275element(63, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Stock Adjustment ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "button", 45);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTransferModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 15);
    \u0275\u0275element(67, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " Transfer Stock ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(69, "button", 47);
    \u0275\u0275listener("click", function StockLevelsComponent_div_3_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCountModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(70, "svg", 15);
    \u0275\u0275element(71, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, " Stock Count ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(73, "div", 49)(74, "table", 50)(75, "thead")(76, "tr", 51)(77, "th", 52);
    \u0275\u0275text(78, "Part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th", 53);
    \u0275\u0275text(80, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "th", 54);
    \u0275\u0275text(82, "On Hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th", 55);
    \u0275\u0275text(84, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th", 56);
    \u0275\u0275text(86, "Reserved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "th", 57);
    \u0275\u0275text(88, "Average Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "th", 58);
    \u0275\u0275text(90, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "th", 59);
    \u0275\u0275text(92, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "tbody");
    \u0275\u0275template(94, StockLevelsComponent_div_3_tr_94_Template, 37, 17, "tr", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(95, StockLevelsComponent_div_3_div_95_Template, 7, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275template(96, StockLevelsComponent_div_3_div_96_Template, 11, 4, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.summaryData.totalItems);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", ctx_r1.summaryData.totalValue.toLocaleString(), "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.summaryData.lowStockItems);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.summaryData.outOfStockItems);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLocationId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.availableLocations);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", ctx_r1.locationDropdownOpen);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPartId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.availableParts);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", ctx_r1.partDropdownOpen);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.searchTerm || ctx_r1.selectedLocationId || ctx_r1.selectedPartId ? 58 : -1);
    \u0275\u0275advance(36);
    \u0275\u0275property("ngForOf", ctx_r1.stockLevels);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stockLevels.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function StockLevelsComponent_div_4_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r15 = ctx.$implicit;
    \u0275\u0275property("value", part_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", part_r15.part_number, " - ", part_r15.name, " ");
  }
}
function StockLevelsComponent_div_4_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r16 = ctx.$implicit;
    \u0275\u0275property("value", location_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r16.name, " ");
  }
}
function StockLevelsComponent_div_4_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adjusting... ");
    \u0275\u0275element(1, "span", 147);
  }
}
function StockLevelsComponent_div_4_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adjust Stock ");
  }
}
function StockLevelsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function StockLevelsComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentModal());
    });
    \u0275\u0275elementStart(1, "div", 108);
    \u0275\u0275listener("click", function StockLevelsComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 109)(3, "h2", 110)(4, "a", 111);
    \u0275\u0275listener("click", function StockLevelsComponent_div_4_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 112);
    \u0275\u0275element(6, "path", 113);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(7, " Stock Adjustment ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 114);
    \u0275\u0275listener("click", function StockLevelsComponent_div_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 115);
    \u0275\u0275element(10, "path", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "form", 116);
    \u0275\u0275listener("ngSubmit", function StockLevelsComponent_div_4_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAdjustStock());
    });
    \u0275\u0275elementStart(12, "div", 117)(13, "div", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 115);
    \u0275\u0275element(15, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "h3", 119);
    \u0275\u0275text(17, "Part Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 120)(19, "label", 121);
    \u0275\u0275text(20, "Part *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 122);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_4_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.part_id, $event) || (ctx_r1.adjustmentForm.part_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 123);
    \u0275\u0275text(23, "Select a part");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, StockLevelsComponent_div_4_option_24_Template, 2, 3, "option", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 117)(26, "div", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 115);
    \u0275\u0275element(28, "path", 124)(29, "path", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "h3", 119);
    \u0275\u0275text(31, "Location Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 120)(33, "label", 126);
    \u0275\u0275text(34, "Location *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 127);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_4_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.location_id, $event) || (ctx_r1.adjustmentForm.location_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(36, "option", 123);
    \u0275\u0275text(37, "Select a location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, StockLevelsComponent_div_4_option_38_Template, 2, 2, "option", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 117)(40, "div", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 115);
    \u0275\u0275element(42, "path", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "h3", 119);
    \u0275\u0275text(44, "Adjustment Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 120)(46, "label", 129);
    \u0275\u0275text(47, "Adjustment Quantity *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 130);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_4_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.quantity, $event) || (ctx_r1.adjustmentForm.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 120)(50, "label", 131);
    \u0275\u0275text(51, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "select", 132);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_4_Template_select_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.reason, $event) || (ctx_r1.adjustmentForm.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(53, "option", 133);
    \u0275\u0275text(54, "Select a reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 134);
    \u0275\u0275text(56, "Receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 135);
    \u0275\u0275text(58, "Issue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 136);
    \u0275\u0275text(60, "Adjustment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 137);
    \u0275\u0275text(62, "Return");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 138);
    \u0275\u0275text(64, "Damage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 139);
    \u0275\u0275text(66, "Expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 140);
    \u0275\u0275text(68, "Theft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "option", 141);
    \u0275\u0275text(70, "Other");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 117)(72, "div", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 115);
    \u0275\u0275element(74, "path", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(75, "h3", 119);
    \u0275\u0275text(76, "Additional Notes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 120)(78, "label", 142);
    \u0275\u0275text(79, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "textarea", 143);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_4_Template_textarea_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adjustmentForm.notes, $event) || (ctx_r1.adjustmentForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 144)(82, "button", 145);
    \u0275\u0275listener("click", function StockLevelsComponent_div_4_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAdjustmentModal());
    });
    \u0275\u0275text(83, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "button", 146);
    \u0275\u0275template(85, StockLevelsComponent_div_4_Conditional_85_Template, 2, 0)(86, StockLevelsComponent_div_4_Conditional_86_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.part_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.availableParts);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.location_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.availableLocations);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.reason);
    \u0275\u0275advance(28);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adjustmentForm.notes);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-50", ctx_r1.adjustStockLoading && !ctx_r1.adjustmentForm.part_id && !ctx_r1.adjustmentForm.location_id && ctx_r1.adjustmentForm.quantity == 0);
    \u0275\u0275property("disabled", !ctx_r1.adjustmentForm.part_id && !ctx_r1.adjustmentForm.location_id && ctx_r1.adjustmentForm.quantity == 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.adjustStockLoading ? 85 : 86);
  }
}
function StockLevelsComponent_div_5_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r18 = ctx.$implicit;
    \u0275\u0275property("value", location_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r18.name, " ");
  }
}
function StockLevelsComponent_div_5_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r19 = ctx.$implicit;
    \u0275\u0275property("value", location_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r19.name, " ");
  }
}
function StockLevelsComponent_div_5_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Transferring... ");
    \u0275\u0275element(1, "span", 147);
  }
}
function StockLevelsComponent_div_5_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Transfer Stock ");
  }
}
function StockLevelsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function StockLevelsComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTransferModal());
    });
    \u0275\u0275elementStart(1, "div", 108);
    \u0275\u0275listener("click", function StockLevelsComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 109)(3, "h2", 110);
    \u0275\u0275text(4, "Transfer Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 114);
    \u0275\u0275listener("click", function StockLevelsComponent_div_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTransferModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 115);
    \u0275\u0275element(7, "path", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 116);
    \u0275\u0275listener("ngSubmit", function StockLevelsComponent_div_5_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTransferStock());
    });
    \u0275\u0275elementStart(9, "div", 120)(10, "label", 148);
    \u0275\u0275text(11, "From Location *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 149);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_5_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.transferForm.from_location_id, $event) || (ctx_r1.transferForm.from_location_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 133);
    \u0275\u0275text(14, "Select source location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, StockLevelsComponent_div_5_option_15_Template, 2, 2, "option", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 120)(17, "label", 150);
    \u0275\u0275text(18, "To Location *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 151);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_5_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.transferForm.to_location_id, $event) || (ctx_r1.transferForm.to_location_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 133);
    \u0275\u0275text(21, "Select destination location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, StockLevelsComponent_div_5_option_22_Template, 2, 2, "option", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 120)(24, "label", 152);
    \u0275\u0275text(25, "Quantity *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_5_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.transferForm.quantity, $event) || (ctx_r1.transferForm.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 120)(28, "label", 154);
    \u0275\u0275text(29, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 155);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_5_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.transferForm.reason, $event) || (ctx_r1.transferForm.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 120)(32, "label", 156);
    \u0275\u0275text(33, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "textarea", 157);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_5_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.transferForm.notes, $event) || (ctx_r1.transferForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 120)(36, "label", 158);
    \u0275\u0275text(37, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_5_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.transferForm.reference, $event) || (ctx_r1.transferForm.reference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 144)(40, "button", 145);
    \u0275\u0275listener("click", function StockLevelsComponent_div_5_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTransferModal());
    });
    \u0275\u0275text(41, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 146);
    \u0275\u0275template(43, StockLevelsComponent_div_5_Conditional_43_Template, 2, 0)(44, StockLevelsComponent_div_5_Conditional_44_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transferForm.from_location_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.availableLocations);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transferForm.to_location_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.availableLocations);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transferForm.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transferForm.reason);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transferForm.notes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.transferForm.reference);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-50", ctx_r1.transferLoading);
    \u0275\u0275property("disabled", ctx_r1.transferLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.transferLoading ? 43 : 44);
  }
}
function StockLevelsComponent_div_6_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Reserving Stock... ");
    \u0275\u0275element(1, "span", 147);
  }
}
function StockLevelsComponent_div_6_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Reserve Stock ");
  }
}
function StockLevelsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function StockLevelsComponent_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReserveModal());
    });
    \u0275\u0275elementStart(1, "div", 108);
    \u0275\u0275listener("click", function StockLevelsComponent_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 109)(3, "h2", 110);
    \u0275\u0275text(4, "Reserve Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 114);
    \u0275\u0275listener("click", function StockLevelsComponent_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReserveModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 115);
    \u0275\u0275element(7, "path", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 116);
    \u0275\u0275listener("ngSubmit", function StockLevelsComponent_div_6_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReserveStock());
    });
    \u0275\u0275elementStart(9, "div", 120)(10, "label", 160);
    \u0275\u0275text(11, "Quantity to Reserve *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_6_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reserveForm.quantity, $event) || (ctx_r1.reserveForm.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 120)(14, "label", 162);
    \u0275\u0275text(15, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 163);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_6_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reserveForm.reference, $event) || (ctx_r1.reserveForm.reference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 144)(18, "button", 145);
    \u0275\u0275listener("click", function StockLevelsComponent_div_6_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReserveModal());
    });
    \u0275\u0275text(19, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 164);
    \u0275\u0275template(21, StockLevelsComponent_div_6_Conditional_21_Template, 2, 0)(22, StockLevelsComponent_div_6_Conditional_22_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reserveForm.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reserveForm.reference);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.reserveLoading ? 21 : 22);
  }
}
function StockLevelsComponent_div_7_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Updating Count... ");
    \u0275\u0275element(1, "span", 147);
  }
}
function StockLevelsComponent_div_7_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Update Count ");
  }
}
function StockLevelsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function StockLevelsComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCountModal());
    });
    \u0275\u0275elementStart(1, "div", 108);
    \u0275\u0275listener("click", function StockLevelsComponent_div_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 109)(3, "h2", 110);
    \u0275\u0275text(4, "Stock Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 114);
    \u0275\u0275listener("click", function StockLevelsComponent_div_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCountModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 115);
    \u0275\u0275element(7, "path", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 116);
    \u0275\u0275listener("ngSubmit", function StockLevelsComponent_div_7_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPerformStockCount());
    });
    \u0275\u0275elementStart(9, "div", 120)(10, "label", 165);
    \u0275\u0275text(11, "Counted Quantity *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 166);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_7_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countForm.counted_quantity, $event) || (ctx_r1.countForm.counted_quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 120)(14, "label", 167);
    \u0275\u0275text(15, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 168);
    \u0275\u0275twoWayListener("ngModelChange", function StockLevelsComponent_div_7_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.countForm.notes, $event) || (ctx_r1.countForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 144)(18, "button", 145);
    \u0275\u0275listener("click", function StockLevelsComponent_div_7_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCountModal());
    });
    \u0275\u0275text(19, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 164);
    \u0275\u0275template(21, StockLevelsComponent_div_7_Conditional_21_Template, 2, 0)(22, StockLevelsComponent_div_7_Conditional_22_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countForm.counted_quantity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.countForm.notes);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.countLoading ? 21 : 22);
  }
}
var StockLevelsComponent = class _StockLevelsComponent {
  analyticsService;
  // Data properties
  stockLevels = [];
  loading = true;
  reserveLoading = false;
  transferLoading = false;
  countLoading = false;
  releaseLoading = false;
  error = null;
  adjustStockLoading = false;
  // Search and filter properties
  searchTerm = "";
  selectedLocationId = null;
  selectedPartId = null;
  currentPage = 1;
  perPage = 15;
  totalStocks = 0;
  totalPages = 0;
  locationDropdownOpen = false;
  partDropdownOpen = false;
  // Summary data
  summaryData = {
    totalItems: 0,
    totalValue: 0,
    lowStockItems: 0,
    outOfStockItems: 0
  };
  // Modal states
  showAdjustmentModal = false;
  showTransferModal = false;
  showReserveModal = false;
  showCountModal = false;
  // Form data
  adjustmentForm = {
    part_id: null,
    location_id: null,
    type: "receipt",
    quantity: 0,
    reason: ""
  };
  transferForm = {
    part_id: 0,
    from_location_id: 0,
    to_location_id: 0,
    quantity: 1
  };
  reserveForm = {
    part_id: 0,
    location_id: 0,
    quantity: 1
  };
  countForm = {
    part_id: 0,
    location_id: 0,
    counted_quantity: 0
  };
  // Available locations (you might want to fetch this from a separate API)
  availableLocations = [];
  availableParts = [];
  releaseQuantities = {};
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.loadStockLevels();
    this.loadAvailableLocations();
    this.loadAvailableParts();
  }
  loadStockLevels() {
    this.loading = true;
    this.error = null;
    this.analyticsService.getStockLevels(this.selectedLocationId || void 0, this.selectedPartId || void 0, this.searchTerm || void 0, this.currentPage, this.perPage).subscribe({
      next: (response) => {
        if (response.success) {
          this.stockLevels = response.data.data.map((s) => __spreadProps(__spreadValues({}, s), {
            average_cost: typeof s.average_cost === "string" ? parseFloat(s.average_cost) : s.average_cost ?? 0,
            on_hand: typeof s.on_hand === "string" ? parseFloat(s.on_hand) : s.on_hand,
            available: typeof s.available === "string" ? parseFloat(s.available) : s.available,
            reserved: typeof s.reserved === "string" ? parseFloat(s.reserved) : s.reserved
          }));
          this.totalStocks = response.data.total;
          this.totalPages = response.data.last_page;
          this.currentPage = response.data.current_page;
          this.calculateSummaryData();
        } else {
          this.error = "Failed to load stock levels";
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading stock levels:", err);
        this.error = "Error loading stock levels. Please try again.";
        this.loading = false;
      }
    });
  }
  loadAvailableLocations() {
    console.log("Loading available locations...");
    console.log("API URL:", this.analyticsService["apiUrl"]);
    this.analyticsService.getLocations(1, 100, 0, "created", "desc").subscribe({
      next: (response) => {
        console.log("Locations API response:", response);
        console.log("Response success:", response.success);
        console.log("Response data:", response.data);
        let locationsData = [];
        if (response.success && response.data) {
          if (Array.isArray(response.data)) {
            locationsData = response.data;
          } else if (response.data.data && Array.isArray(response.data.data)) {
            locationsData = response.data.data;
          } else if (response.data.locations && Array.isArray(response.data.locations)) {
            locationsData = response.data.locations;
          }
        }
        if (locationsData.length > 0) {
          this.availableLocations = locationsData.map((location) => ({
            id: location.id,
            name: location.name || location.title || location.display_name || "Unknown Location",
            code: location.code || location.short_code || (location.name ? location.name.substring(0, 2).toUpperCase() : "LO")
          }));
          console.log("Available locations loaded:", this.availableLocations);
          console.log("Locations count:", this.availableLocations.length);
        } else {
          console.error("Failed to load locations for dropdown - no valid data found");
          console.error("Response structure:", {
            success: response.success,
            hasData: !!response.data,
            dataType: typeof response.data,
            isArray: Array.isArray(response.data),
            dataKeys: response.data ? Object.keys(response.data) : []
          });
          this.availableLocations = [
            { id: 1, name: "Main Warehouse", code: "MW" },
            { id: 2, name: "Secondary Storage", code: "SS" },
            { id: 3, name: "Field Office", code: "FO" }
          ];
        }
      },
      error: (err) => {
        console.error("Error loading locations:", err);
        console.error("Error details:", {
          status: err.status,
          statusText: err.statusText,
          message: err.message,
          error: err.error
        });
        this.availableLocations = [
          { id: 1, name: "Main Warehouse", code: "MW" },
          { id: 2, name: "Secondary Storage", code: "SS" },
          { id: 3, name: "Field Office", code: "FO" }
        ];
        console.log("Using fallback locations:", this.availableLocations);
      }
    });
  }
  loadAvailableParts() {
    console.log("Loading available parts...");
    this.analyticsService.getPartsCatalog("", "active", 1, 100).subscribe({
      next: (response) => {
        console.log("Parts API response:", response);
        if (response.success) {
          this.availableParts = response.data.data.map((part) => ({
            id: part.id,
            name: part.name,
            part_number: part.part_number
          }));
          console.log("Available parts loaded:", this.availableParts);
        } else {
          console.error("Failed to load parts for dropdown");
          this.availableParts = [
            { id: 1, name: "Sample Part 1", part_number: "P001" },
            { id: 2, name: "Sample Part 2", part_number: "P002" },
            { id: 3, name: "Sample Part 3", part_number: "P003" }
          ];
        }
      },
      error: (err) => {
        console.error("Error loading parts for dropdown:", err);
        this.availableParts = [
          { id: 1, name: "Sample Part 1", part_number: "P001" },
          { id: 2, name: "Sample Part 2", part_number: "P002" },
          { id: 3, name: "Sample Part 3", part_number: "P003" }
        ];
        console.log("Using fallback parts:", this.availableParts);
      }
    });
  }
  calculateSummaryData() {
    this.summaryData.totalItems = this.totalStocks;
    this.summaryData.totalValue = this.stockLevels.reduce((sum, stock) => sum + stock.on_hand * stock.average_cost, 0);
    this.summaryData.lowStockItems = this.stockLevels.filter((stock) => stock.on_hand <= (stock.part.reorder_point || 0)).length;
    this.summaryData.outOfStockItems = this.stockLevels.filter((stock) => stock.on_hand <= 0).length;
  }
  applyFilters() {
    this.currentPage = 1;
    this.loadStockLevels();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedLocationId = null;
    this.selectedPartId = null;
    this.currentPage = 1;
    this.loadStockLevels();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadStockLevels();
  }
  // Stock Adjustment
  openAdjustmentModal(stock) {
    console.log("Opening adjustment modal...");
    console.log("Available locations:", this.availableLocations);
    console.log("Available parts:", this.availableParts);
    if (this.availableLocations.length === 0) {
      console.log("No locations available, reloading...");
      this.loadAvailableLocations();
    }
    if (stock) {
      this.adjustmentForm = {
        part_id: stock.part_id,
        location_id: stock.location_id,
        type: "receipt",
        quantity: 1
      };
    }
    this.showAdjustmentModal = true;
  }
  closeAdjustmentModal() {
    this.showAdjustmentModal = false;
    this.adjustmentForm = {
      part_id: null,
      location_id: null,
      type: "receipt",
      quantity: 0,
      reason: "",
      notes: ""
    };
  }
  onAdjustStock() {
    if (this.adjustmentForm.part_id && this.adjustmentForm.location_id && this.adjustmentForm.quantity !== 0) {
      this.adjustStockLoading = true;
      const adjustmentData = __spreadProps(__spreadValues({}, this.adjustmentForm), {
        type: this.adjustmentForm.quantity > 0 ? "receipt" : "issue"
      });
      this.analyticsService.adjustStock(adjustmentData).subscribe({
        next: (response) => {
          if (response.success) {
            this.closeAdjustmentModal();
            this.loadStockLevels();
          }
        },
        error: (err) => {
          this.adjustStockLoading = false;
          console.error("Error adjusting stock:", err);
        }
      }).add(() => {
        this.adjustStockLoading = false;
      });
    }
  }
  // Stock Transfer
  openTransferModal(stock) {
    if (stock) {
      this.transferForm = {
        part_id: stock.part_id,
        from_location_id: stock.location_id,
        to_location_id: 0,
        quantity: 1
      };
    }
    this.showTransferModal = true;
  }
  closeTransferModal() {
    this.showTransferModal = false;
    this.transferForm = {
      part_id: 0,
      from_location_id: 0,
      to_location_id: 0,
      quantity: 1
    };
  }
  onTransferStock() {
    if (this.transferForm.part_id && this.transferForm.from_location_id && this.transferForm.to_location_id && this.transferForm.quantity > 0 && this.transferForm.from_location_id !== this.transferForm.to_location_id) {
      this.transferLoading = true;
      this.analyticsService.transferStock(this.transferForm).subscribe({
        next: (response) => {
          if (response.success) {
            this.closeTransferModal();
            this.loadStockLevels();
          }
        },
        error: (err) => {
          this.transferLoading = false;
          console.error("Error transferring stock:", err);
        }
      }).add(() => {
        this.transferLoading = false;
      });
    }
  }
  // Stock Reservation
  openReserveModal(stock) {
    if (stock) {
      this.reserveForm = {
        part_id: stock.part_id,
        location_id: stock.location_id,
        quantity: 1
      };
    }
    this.showReserveModal = true;
  }
  closeReserveModal() {
    this.showReserveModal = false;
    this.reserveForm = {
      part_id: 0,
      location_id: 0,
      quantity: 1
    };
  }
  onReserveStock() {
    if (this.reserveForm.part_id && this.reserveForm.location_id && this.reserveForm.quantity > 0) {
      this.reserveLoading = true;
      this.analyticsService.reserveStock(this.reserveForm).subscribe({
        next: (response) => {
          if (response.success) {
            this.closeReserveModal();
            this.loadStockLevels();
          }
        },
        error: (err) => {
          this.reserveLoading = false;
          console.error("Error reserving stock:", err);
        }
      }).add(() => {
        this.reserveLoading = false;
      });
    }
  }
  // Stock Count
  openCountModal(stock) {
    if (stock) {
      this.countForm = {
        part_id: stock.part_id,
        location_id: stock.location_id,
        counted_quantity: stock.on_hand
      };
    }
    this.showCountModal = true;
  }
  closeCountModal() {
    this.showCountModal = false;
    this.countForm = {
      part_id: 0,
      location_id: 0,
      counted_quantity: 0
    };
  }
  onPerformStockCount() {
    if (this.countForm.part_id && this.countForm.location_id && this.countForm.counted_quantity >= 0) {
      this.countLoading = true;
      this.analyticsService.performStockCount(this.countForm).subscribe({
        next: (response) => {
          if (response.success) {
            this.closeCountModal();
            this.loadStockLevels();
          }
        },
        error: (err) => {
          this.countLoading = false;
          console.error("Error performing stock count:", err);
        }
      }).add(() => {
        this.countLoading = false;
      });
    }
  }
  // Stock Release
  onReleaseStock(stock, quantity = 1) {
    if (quantity === null) {
      quantity = 1;
    }
    if (quantity > 0 && quantity <= stock.reserved) {
      const releaseData = {
        part_id: stock.part_id,
        location_id: stock.location_id,
        quantity
      };
      this.releaseLoading = true;
      this.analyticsService.releaseStock(releaseData).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadStockLevels();
            this.releaseQuantities = {};
          }
        },
        error: (err) => {
          this.releaseLoading = false;
          console.error("Error releasing stock:", err);
        }
      }).add(() => {
        this.releaseLoading = false;
      });
    }
  }
  getStockStatus(stock) {
    if (stock.on_hand <= 0) {
      return { status: "Out of Stock", class: "out-of-stock", icon: "x-circle" };
    }
    if (stock.on_hand <= (stock.part.reorder_point || 0)) {
      return { status: "Low Stock", class: "low-stock", icon: "exclamation-triangle" };
    }
    if (stock.reserved > 0) {
      return { status: "Partially Reserved", class: "reserved", icon: "lock-closed" };
    }
    return { status: "In Stock", class: "in-stock", icon: "check-circle" };
  }
  getStockLevelClass(stock) {
    const percentage = stock.on_hand > 0 ? stock.available / stock.on_hand * 100 : 0;
    if (percentage <= 20)
      return "critical";
    if (percentage <= 50)
      return "warning";
    return "good";
  }
  refreshData() {
    this.loadStockLevels();
  }
  getAdjustmentTypes() {
    return ["receipt", "issue", "adjustment", "return"];
  }
  // Debug method to test API calls
  testAPIs() {
    console.log("Testing APIs...");
    console.log("Environment API URL:", this.analyticsService["apiUrl"]);
    this.analyticsService.getLocations(1, 100, 0, "created", "desc").subscribe({
      next: (response) => {
        console.log("Locations API test response:", response);
      },
      error: (err) => {
        console.error("Locations API test error:", err);
      }
    });
    this.analyticsService.getPartsCatalog("", "active", 1, 5).subscribe({
      next: (response) => {
        console.log("Parts API test response:", response);
      },
      error: (err) => {
        console.error("Parts API test error:", err);
      }
    });
  }
  // Method to refresh locations data
  refreshLocations() {
    console.log("Refreshing locations data...");
    this.loadAvailableLocations();
  }
  // Method to force reload locations and show status
  forceReloadLocations() {
    console.log("Force reloading locations...");
    this.availableLocations = [];
    this.loadAvailableLocations();
    setTimeout(() => {
      if (this.availableLocations.length === 0) {
        console.log("Still no locations after force reload");
      } else {
        console.log("Locations successfully loaded after force reload");
      }
    }, 2e3);
  }
  // Method to manually test the locations API
  testLocationsAPI() {
    console.log("=== Testing Locations API ===");
    console.log("Current token:", localStorage.getItem("token"));
    console.log("Current API URL:", this.analyticsService["apiUrl"]);
    this.analyticsService.getLocations(1, 5, 0, "created", "desc").subscribe({
      next: (response) => {
        console.log("\u2705 Locations API test successful:", response);
        if (response.success && response.data && response.data.data) {
          console.log("\u2705 Locations found:", response.data.data.length);
          console.log("\u2705 First location:", response.data.data[0]);
        } else {
          console.log("\u274C No locations in response");
        }
      },
      error: (err) => {
        console.log("\u274C Locations API test failed:", err);
        console.log("\u274C Error status:", err.status);
        console.log("\u274C Error message:", err.message);
      }
    });
  }
  static \u0275fac = function StockLevelsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockLevelsComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockLevelsComponent, selectors: [["app-stock-levels"]], decls: 11, vars: 7, consts: [[1, "stock-levels"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["title", "Stock Adjustment", 1, "fab", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "summary-cards-row"], [1, "summary-card", "total-items"], [1, "card-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"], [1, "card-content"], [1, "card-value"], [1, "card-label"], [1, "summary-card", "total-value"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"], [1, "summary-card", "low-stock"], [1, "card-value", "warning"], [1, "summary-card", "out-of-stock"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "card-value", "danger"], [1, "search-filters-section"], [1, "search-row"], [1, "search-container"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search here...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filter-container", "position-relative"], [1, "filter-select", 3, "mousedown", "change", "blur", "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow", "absolute", "top-1/2", "right-2", "transform", "-translate-y-1/2", "w-4", "h-4", "transition", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "actions-row"], [1, "bulk-actions"], [1, "btn", "btn-secondary", "!hidden", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"], [1, "btn", "btn-warning", "!hidden", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "stock-table-container"], [1, "stock-table"], [1, "uppercase"], [1, "th-part"], [1, "th-location"], [1, "th-on-hand"], [1, "th-available"], [1, "th-reserved"], [1, "th-cost"], [1, "th-status"], [1, "th-actions", 2, "min-width", "220px", "width", "20%"], [4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "btn", "btn-outline", "!border", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "margin-right", ".5rem"], [1, "part-info"], [1, "part-name"], [1, "part-number"], [1, "location-info"], [1, "location-name"], ["class", "location-code", 4, "ngIf"], [1, "stock-quantity"], [1, "quantity"], [1, "quantity", "available"], ["class", "quantity reserved", 4, "ngIf"], ["class", "quantity", 4, "ngIf"], [1, "stock-cost"], ["class", "cost", 4, "ngIf"], [1, "stock-status"], [1, "status-badge"], [1, "stock-actions", 2, "min-width", "220px", "width", "20%"], [1, "action-buttons"], ["title", "Adjust Stock", 1, "action-btn", "adjust", 3, "click"], ["title", "Stock Count", 1, "action-btn", "count", 3, "click"], ["class", "quick-release", 4, "ngIf"], [1, "location-code"], [1, "quantity", "reserved"], [1, "cost"], ["title", "Transfer Stock", 1, "action-btn", "transfer", 3, "click"], ["title", "Reserve Stock", 1, "action-btn", "reserve", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], [1, "quick-release"], ["type", "number", "min", "1", "placeholder", "Qty", 1, "release-quantity", 3, "ngModelChange", "ngModel", "max"], ["title", "Release Reserved Stock", 1, "release-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"], [1, "no-results"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "no-results-title"], [1, "no-results-description"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "pagination-page", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["href", "javascript:void(0)", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "inline", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16l-4-4m0 0l4-4m-4 4h18"], [1, "close-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], [1, "modal-form", 3, "ngSubmit"], [1, "form-section"], [1, "section-header"], [1, "section-title"], [1, "form-group"], ["for", "adjustment-part", 1, "form-label"], ["id", "adjustment-part", "name", "part_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "null"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["for", "adjustment-location", 1, "form-label"], ["id", "adjustment-location", "name", "location_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], ["for", "adjustment-quantity", 1, "form-label"], ["type", "number", "id", "adjustment-quantity", "name", "quantity", "min", "0", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "adjustment-reason", 1, "form-label"], ["id", "adjustment-reason", "name", "reason", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "receipt"], ["value", "issue"], ["value", "adjustment"], ["value", "return"], ["value", "damage"], ["value", "expiry"], ["value", "theft"], ["value", "other"], ["for", "adjustment-notes", 1, "form-label"], ["id", "adjustment-notes", "name", "notes", "rows", "3", "placeholder", "Additional notes...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "border-t", "border-white", "animate-spin", "border-opacity-25", "ml-2", "w-4", "h-4", "rounded-full", "inline-block"], ["for", "transfer-from", 1, "form-label"], ["id", "transfer-from", "name", "from_location_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "transfer-to", 1, "form-label"], ["id", "transfer-to", "name", "to_location_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "transfer-quantity", 1, "form-label"], ["type", "number", "id", "transfer-quantity", "name", "quantity", "min", "1", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "transfer-reason", 1, "form-label"], ["type", "text", "id", "transfer-reason", "name", "reason", "placeholder", "Reason for transfer", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "transfer-notes", 1, "form-label"], ["id", "transfer-notes", "name", "notes", "rows", "3", "placeholder", "Additional notes", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "transfer-reference", 1, "form-label"], ["type", "text", "id", "transfer-reference", "name", "reference", "placeholder", "Reference number or document", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "reserve-quantity", 1, "form-label"], ["type", "number", "id", "reserve-quantity", "name", "quantity", "min", "1", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "reserve-reference", 1, "form-label"], ["type", "text", "id", "reserve-reference", "name", "reference", "placeholder", "Reference for reservation", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], ["for", "count-quantity", 1, "form-label"], ["type", "number", "id", "count-quantity", "name", "counted_quantity", "min", "0", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "count-notes", 1, "form-label"], ["id", "count-notes", "name", "notes", "rows", "3", "placeholder", "Notes about the count", 1, "form-textarea", 3, "ngModelChange", "ngModel"]], template: function StockLevelsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, StockLevelsComponent_div_1_Template, 4, 0, "div", 1)(2, StockLevelsComponent_div_2_Template, 9, 1, "div", 2)(3, StockLevelsComponent_div_3_Template, 97, 19, "div", 3)(4, StockLevelsComponent_div_4_Template, 87, 11, "div", 4)(5, StockLevelsComponent_div_5_Template, 45, 12, "div", 4)(6, StockLevelsComponent_div_6_Template, 23, 3, "div", 4)(7, StockLevelsComponent_div_7_Template, 23, 3, "div", 4);
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function StockLevelsComponent_Template_button_click_8_listener() {
        return ctx.openAdjustmentModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAdjustmentModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTransferModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showReserveModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCountModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], styles: [`

.stock-levels[_ngcontent-%COMP%] {
  position: relative;
  padding: 1.5rem;
  background-color: #f9fafb;
  min-height: 100vh;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.2s;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #f3f4f6;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #6b7280;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.warning[_ngcontent-%COMP%] {
  color: #d97706;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value.danger[_ngcontent-%COMP%] {
  color: #dc2626;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-items[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {
  background-color: #dbeafe;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-items[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #2563eb;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-value[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {
  background-color: #d1fae5;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.total-value[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #059669;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.low-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {
  background-color: #fef3c7;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.low-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #d97706;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.out-of-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {
  background-color: #fee2e2;
}
.stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card.out-of-stock[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #dc2626;
}
.stock-levels[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.stock-levels[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .no-results-title[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
}
.stock-levels[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .no-results-description[_ngcontent-%COMP%] {
  color: #9ca3af;
  font-size: 1rem;
  margin: 0;
}
.stock-levels[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {
  width: 3rem;
  height: 3rem;
  border: 3px solid #f3f4f6;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 1s linear infinite;
  margin-bottom: 1rem;
}
.stock-levels[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 1.125rem;
}
@keyframes _ngcontent-%COMP%_spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.stock-levels[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {
  color: #ef4444;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0;
}
.stock-levels[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {
  position: relative;
  flex: 1;
  width: 300px;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  pointer-events: none;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: #f9fafb;
  transition: all 0.2s;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {
  color: #9ca3af;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {
  position: relative;
  max-width: 150px;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: white;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover {
  border-color: #9ca3af;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {
  border-color: #d1d5db;
  color: #374151;
  background-color: white;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {
  background-color: #f9fafb;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  min-width: 140px;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 1rem 0.75rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-part[_ngcontent-%COMP%] {
  min-width: 200px;
  width: 20%;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-location[_ngcontent-%COMP%] {
  min-width: 150px;
  width: 15%;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-on-hand[_ngcontent-%COMP%] {
  min-width: 100px;
  width: 10%;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-available[_ngcontent-%COMP%] {
  min-width: 100px;
  width: 10%;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reserved[_ngcontent-%COMP%] {
  min-width: 100px;
  width: 10%;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-allocated[_ngcontent-%COMP%] {
  min-width: 100px;
  width: 10%;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-cost[_ngcontent-%COMP%] {
  min-width: 120px;
  width: 12%;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-status[_ngcontent-%COMP%] {
  min-width: 120px;
  width: 12%;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-actions[_ngcontent-%COMP%] {
  min-width: 150px;
  width: 15%;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid #f3f4f6;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background-color: #f9fafb;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 1rem 0.75rem;
  vertical-align: top;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-info[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-info[_ngcontent-%COMP%]   .part-number[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: monospace;
  background-color: #f3f4f6;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  display: inline-block;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.location-info[_ngcontent-%COMP%]   .location-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.location-info[_ngcontent-%COMP%]   .location-code[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: monospace;
  background-color: #f3f4f6;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  display: inline-block;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-quantity[_ngcontent-%COMP%] {
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-quantity[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  display: inline-block;
  min-width: 2rem;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-quantity[_ngcontent-%COMP%]   .quantity.critical[_ngcontent-%COMP%] {
  background-color: #fef2f2;
  color: #dc2626;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-quantity[_ngcontent-%COMP%]   .quantity.warning[_ngcontent-%COMP%] {
  background-color: #fffbeb;
  color: #d97706;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-quantity[_ngcontent-%COMP%]   .quantity.good[_ngcontent-%COMP%] {
  background-color: #f0fdf4;
  color: #16a34a;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-quantity[_ngcontent-%COMP%]   .quantity.available[_ngcontent-%COMP%] {
  color: #16a34a;
  font-weight: 700;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-quantity[_ngcontent-%COMP%]   .quantity.reserved[_ngcontent-%COMP%] {
  background-color: #fef3c7;
  color: #d97706;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-quantity[_ngcontent-%COMP%]   .quantity.allocated[_ngcontent-%COMP%] {
  background-color: #dbeafe;
  color: #2563eb;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-cost[_ngcontent-%COMP%] {
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-cost[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #10b981;
  font-size: 0.875rem;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-status[_ngcontent-%COMP%] {
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-status[_ngcontent-%COMP%]   .status-badge.in-stock[_ngcontent-%COMP%] {
  background-color: #f0fdf4;
  color: #16a34a;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-status[_ngcontent-%COMP%]   .status-badge.low-stock[_ngcontent-%COMP%] {
  background-color: #fffbeb;
  color: #d97706;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-status[_ngcontent-%COMP%]   .status-badge.out-of-stock[_ngcontent-%COMP%] {
  background-color: #fef2f2;
  color: #dc2626;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-status[_ngcontent-%COMP%]   .status-badge.reserved[_ngcontent-%COMP%] {
  background-color: #fef3c7;
  color: #d97706;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%] {
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  justify-content: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 2rem;
  min-height: 2rem;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.adjust[_ngcontent-%COMP%] {
  background-color: #dbeafe;
  color: #2563eb;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.adjust[_ngcontent-%COMP%]:hover {
  background-color: #bfdbfe;
  transform: translateY(-1px);
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.transfer[_ngcontent-%COMP%] {
  background-color: #fef3c7;
  color: #d97706;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.transfer[_ngcontent-%COMP%]:hover {
  background-color: #fde68a;
  transform: translateY(-1px);
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.reserve[_ngcontent-%COMP%] {
  background-color: #f3e8ff;
  color: #9333ea;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.reserve[_ngcontent-%COMP%]:hover {
  background-color: #e9d5ff;
  transform: translateY(-1px);
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.count[_ngcontent-%COMP%] {
  background-color: #ecfdf5;
  color: #059669;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-btn.count[_ngcontent-%COMP%]:hover {
  background-color: #d1fae5;
  transform: translateY(-1px);
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .quick-release[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .quick-release[_ngcontent-%COMP%]   .release-quantity[_ngcontent-%COMP%] {
  width: 60px;
  padding: 0.25rem 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .quick-release[_ngcontent-%COMP%]   .release-quantity[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .quick-release[_ngcontent-%COMP%]   .release-btn[_ngcontent-%COMP%] {
  padding: 0.25rem 0.5rem;
  background-color: #fef2f2;
  color: #dc2626;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
}
.stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.stock-actions[_ngcontent-%COMP%]   .quick-release[_ngcontent-%COMP%]   .release-btn[_ngcontent-%COMP%]:hover {
  background-color: #fee2e2;
  transform: translateY(-1px);
}
.stock-levels[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
  text-decoration: none;
  justify-content: center;
}
.stock-levels[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-1px);
}
.stock-levels[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {
  background-color: #3b82f6;
  color: white;
  box-shadow: 0 1px 3px 0 rgba(59, 130, 246, 0.3);
}
.stock-levels[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {
  background-color: #2563eb;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
}
.stock-levels[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {
  background-color: white;
  color: #374151;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}
.stock-levels[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.stock-levels[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%] {
  background-color: #f59e0b;
  color: white;
  box-shadow: 0 1px 3px 0 rgba(245, 158, 11, 0.3);
}
.stock-levels[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:hover {
  background-color: #d97706;
  box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.4);
}
.stock-levels[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {
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
.stock-levels[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}
.stock-levels[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.stock-levels[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.stock-levels[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
}
.stock-levels[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {
  background-color: #f3f4f6;
  color: #374151;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #6b7280;
  flex-shrink: 0;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], 
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%], 
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: white;
  transition: all 0.2s;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, 
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus, 
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, 
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder, 
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]::placeholder {
  color: #9ca3af;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 80px;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {
  background-color: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {
  background-color: #3b82f6;
  color: white;
}
.stock-levels[_ngcontent-%COMP%]   .modal-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {
  background-color: #2563eb;
}
.stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
}
.stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: white;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #f9fafb;
  border-color: #9ca3af;
}
.stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.25rem;
}
.stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: white;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 2.5rem;
  text-align: center;
}
.stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:hover:not(.active) {
  background-color: #f9fafb;
  border-color: #9ca3af;
}
.stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: white;
}
.stock-levels[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  z-index: 100;
}
.stock-levels[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.stock-levels[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 1.5rem;
  height: 1.5rem;
}
@media (max-width: 1024px) {
  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {
    min-width: 250px;
  }
  .stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {
    min-width: 150px;
  }
}
@media (max-width: 768px) {
  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {
    min-width: auto;
    max-width: none;
  }
  .stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .search-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {
    min-width: auto;
  }
  .stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
  .stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%] {
    overflow-x: auto;
  }
  .stock-levels[_ngcontent-%COMP%]   .stock-table-container[_ngcontent-%COMP%]   .stock-table[_ngcontent-%COMP%] {
    min-width: 800px;
  }
  .stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .stock-levels[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {
    order: -1;
  }
  .stock-levels[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
  .stock-levels[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {
    bottom: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
  }
  .stock-levels[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    width: 1.25rem;
    height: 1.25rem;
  }
}
@media (max-width: 480px) {
  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .stock-levels[_ngcontent-%COMP%]   .summary-cards-row[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {
    font-size: 0.75rem;
  }
  .stock-levels[_ngcontent-%COMP%]   .search-filters-section[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .stock-levels[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {
    bottom: 0.5rem;
    right: 0.5rem;
  }
}
/*# sourceMappingURL=stock-levels.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockLevelsComponent, [{
    type: Component,
    args: [{ selector: "app-stock-levels", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="stock-levels">\r\n  <!-- Loading State -->\r\n  <div *ngIf="loading" class="loading-state">\r\n    <div class="loading-spinner"></div>\r\n    <p>Loading stock levels...</p>\r\n  </div>\r\n\r\n  <!-- Error State -->\r\n  <div *ngIf="error && !loading" class="error-state">\r\n    <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n    </svg>\r\n    <h3 class="error-title">{{ error }}</h3>\r\n    <button class="btn btn-primary" (click)="refreshData()">\r\n      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r\n      </svg>\r\n      Retry\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Stock Levels Content -->\r\n  <div *ngIf="!loading && !error">\r\n    <!-- Summary Cards Row -->\r\n    <div class="summary-cards-row">\r\n      <div class="summary-card total-items">\r\n        <div class="card-icon">\r\n          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                  d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r\n          </svg>\r\n        </div>\r\n        <div class="card-content">\r\n          <div class="card-value">{{ summaryData.totalItems }}</div>\r\n          <div class="card-label">Total Stock Items</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="summary-card total-value">\r\n        <div class="card-icon">\r\n          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>\r\n          </svg>\r\n        </div>\r\n        <div class="card-content">\r\n          <div class="card-value">${{ summaryData.totalValue.toLocaleString() }}</div>\r\n          <div class="card-label">Total Inventory Value</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="summary-card low-stock">\r\n        <div class="card-icon">\r\n          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n          </svg>\r\n        </div>\r\n        <div class="card-content">\r\n          <div class="card-value warning">{{ summaryData.lowStockItems }}</div>\r\n          <div class="card-label">Low Stock Items</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="summary-card out-of-stock">\r\n        <div class="card-icon">\r\n          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n          </svg>\r\n        </div>\r\n        <div class="card-content">\r\n          <div class="card-value danger">{{ summaryData.outOfStockItems }}</div>\r\n          <div class="card-label">Out of Stock</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Search and Filters Section -->\r\n    <div class="search-filters-section">\r\n      <div class="search-row">\r\n        <div class="search-container">\r\n          <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r\n          </svg>\r\n          <input\r\n            type="text"\r\n            placeholder="Search here..."\r\n            class="search-input"\r\n            [(ngModel)]="searchTerm">\r\n        </div>\r\n\r\n        <div class="filter-container position-relative">\r\n          <select\r\n            (mousedown)="locationDropdownOpen = true"\r\n            (change)="locationDropdownOpen =false"\r\n            (blur)="locationDropdownOpen = false"\r\n            class="filter-select"\r\n            [(ngModel)]="selectedLocationId">\r\n            <option [value]="null">All Locations</option>\r\n            <option *ngFor="let location of availableLocations" [value]="location.id">\r\n              {{ location.name }}\r\n            </option>\r\n          </select>\r\n          <svg\r\n            class="dropdown-arrow absolute top-1/2 right-2 transform -translate-y-1/2 w-4 h-4 transition duration-200"\r\n            [class.rotate-180]="locationDropdownOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r\n          </svg>\r\n        </div>\r\n\r\n        <div class="filter-container position-relative">\r\n          <select\r\n            (mousedown)="partDropdownOpen = true"\r\n            (change)="partDropdownOpen =false"\r\n            (blur)="partDropdownOpen = false"\r\n            class="filter-select"\r\n            [(ngModel)]="selectedPartId">\r\n            <option [value]="null">All Parts</option>\r\n            <option *ngFor="let part of availableParts" [value]="part.id">\r\n              {{ part.part_number }} - {{ part.name }}\r\n            </option>\r\n          </select>\r\n          <svg\r\n            class="dropdown-arrow absolute top-1/2 right-2 transform -translate-y-1/2 w-4 h-4 transition duration-200"\r\n            [class.rotate-180]="partDropdownOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r\n          </svg>\r\n        </div>\r\n        @if (searchTerm || selectedLocationId || selectedPartId) {\r\n          <button class="btn btn-outline !border" (click)="clearFilters()">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: .5rem;">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n            </svg>\r\n            Clear Filters\r\n          </button>\r\n          <button class="btn btn-primary" (click)="applyFilters()">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-right: .5rem;">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r\n            </svg>\r\n            Apply Filters\r\n          </button>\r\n        }\r\n\r\n      </div>\r\n\r\n      <div class="actions-row">\r\n        <div class="bulk-actions">\r\n          <button class="btn btn-primary" (click)="openAdjustmentModal()">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r\n            </svg>\r\n            Stock Adjustment\r\n          </button>\r\n          <button class="btn btn-secondary !hidden" (click)="openTransferModal()">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>\r\n            </svg>\r\n            Transfer Stock\r\n          </button>\r\n          <button class="btn btn-warning !hidden" (click)="openCountModal()">\r\n            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>\r\n            </svg>\r\n            Stock Count\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Stock Levels Table -->\r\n    <div class="stock-table-container">\r\n      <table class="stock-table">\r\n        <thead>\r\n        <tr class="uppercase">\r\n          <th class="th-part">Part</th>\r\n          <th class="th-location">Location</th>\r\n          <th class="th-on-hand">On Hand</th>\r\n          <th class="th-available">Available</th>\r\n          <th class="th-reserved">Reserved</th>\r\n          <th class="th-cost">Average Cost</th>\r\n          <th class="th-status">Status</th>\r\n          <th class="th-actions" style="min-width: 220px; width: 20%">Actions</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor="let stock of stockLevels">\r\n          <td class="part-info">\r\n            <div class="part-name">{{ stock.part.name }}</div>\r\n            <div class="part-number">{{ stock.part.part_number }}</div>\r\n          </td>\r\n          <td class="location-info">\r\n            <div class="location-name">{{ stock.location.name }}</div>\r\n            <div class="location-code" *ngIf="stock.location.code">{{ stock.location.code }}</div>\r\n          </td>\r\n          <td class="stock-quantity">\r\n              <span class="quantity" [class]="getStockLevelClass(stock)">\r\n                {{ stock.on_hand }}\r\n              </span>\r\n          </td>\r\n          <td class="stock-quantity">\r\n            <span class="quantity available">{{ stock.available }}</span>\r\n          </td>\r\n          <td class="stock-quantity">\r\n            <span class="quantity reserved" *ngIf="stock.reserved > 0">{{ stock.reserved }}</span>\r\n            <span class="quantity" *ngIf="stock.reserved === 0">-</span>\r\n          </td>\r\n          <td class="stock-cost">\r\n            <span class="cost" *ngIf="stock.average_cost > 0">${{ stock.average_cost | number:\'1.2-2\' }}</span>\r\n            <span class="cost" *ngIf="!stock.average_cost || stock.average_cost === 0">-</span>\r\n          </td>\r\n          <td class="stock-status">\r\n              <span class="status-badge" [class]="getStockStatus(stock).class">\r\n                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n                </svg>\r\n                {{ getStockStatus(stock).status }}\r\n              </span>\r\n          </td>\r\n          <td class="stock-actions" style="min-width: 220px; width: 20%">\r\n            <div class="action-buttons">\r\n              <button class="action-btn adjust" (click)="openAdjustmentModal(stock)" title="Adjust Stock">\r\n                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r\n                </svg>\r\n              </button>\r\n              @if (stock.available > 0){\r\n                <button class="action-btn transfer" (click)="openTransferModal(stock)" title="Transfer Stock">\r\n                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>\r\n                  </svg>\r\n                </button>\r\n\r\n                <button class="action-btn reserve" (click)="openReserveModal(stock)" title="Reserve Stock">\r\n                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>\r\n                  </svg>\r\n                </button>\r\n              }\r\n\r\n\r\n              <button class="action-btn count" (click)="openCountModal(stock)" title="Stock Count">\r\n                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>\r\n                </svg>\r\n              </button>\r\n            </div>\r\n\r\n            <!-- Quick Release for Reserved Stock -->\r\n            <div class="quick-release" *ngIf="stock.reserved > 0">\r\n              <input\r\n                type="number"\r\n                [(ngModel)]="releaseQuantities[stock.id]"\r\n                class="release-quantity"\r\n                [max]="stock.reserved"\r\n                min="1"\r\n                placeholder="Qty">\r\n              <button class="release-btn" (click)="onReleaseStock(stock, releaseQuantities[stock.id])"\r\n                      title="Release Reserved Stock">\r\n                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>\r\n                </svg>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <!-- No Results Message -->\r\n      <div *ngIf="stockLevels.length === 0" class="no-results">\r\n        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r\n        </svg>\r\n        <h3 class="no-results-title">No Stock Items Found</h3>\r\n        <p class="no-results-description">Try adjusting your search criteria or filters.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Pagination -->\r\n    <div *ngIf="totalPages > 1" class="pagination">\r\n      <button\r\n        class="pagination-btn"\r\n        [disabled]="currentPage === 1"\r\n        (click)="onPageChange(currentPage - 1)">\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r\n        </svg>\r\n        Previous\r\n      </button>\r\n\r\n      <div class="pagination-pages">\r\n        <button\r\n          *ngFor="let page of [].constructor(totalPages); let i = index"\r\n          class="pagination-page"\r\n          [class.active]="currentPage === i + 1"\r\n          (click)="onPageChange(i + 1)">\r\n          {{ i + 1 }}\r\n        </button>\r\n      </div>\r\n\r\n      <button\r\n        class="pagination-btn"\r\n        [disabled]="currentPage === totalPages"\r\n        (click)="onPageChange(currentPage + 1)">\r\n        Next\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r\n        </svg>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Stock Adjustment Modal -->\r\n  <div *ngIf="showAdjustmentModal" class="modal-overlay" (click)="closeAdjustmentModal()">\r\n    <div class="modal-content" (click)="$event.stopPropagation()">\r\n      <div class="modal-header">\r\n        <h2 class="modal-title">\r\n          <a href="javascript:void(0)" (click)="closeAdjustmentModal()">\r\n            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>\r\n            </svg>\r\n          </a>\r\n          Stock Adjustment\r\n        </h2>\r\n        <button class="close-btn" (click)="closeAdjustmentModal()">\r\n          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <form (ngSubmit)="onAdjustStock()" class="modal-form">\r\n        <!-- Part Information Section -->\r\n        <div class="form-section">\r\n          <div class="section-header">\r\n            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M20 7l-8-4-8 4m16 0l-8 4m8-14V4a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0H4"></path>\r\n            </svg>\r\n            <h3 class="section-title">Part Information</h3>\r\n          </div>\r\n          <div class="form-group">\r\n            <label for="adjustment-part" class="form-label">Part *</label>\r\n            <select\r\n              id="adjustment-part"\r\n              class="form-select"\r\n              [(ngModel)]="adjustmentForm.part_id"\r\n              name="part_id"\r\n              required>\r\n              <option value="null">Select a part</option>\r\n              <option *ngFor="let part of availableParts" [value]="part.id">\r\n                {{ part.part_number }} - {{ part.name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Location Details Section -->\r\n        <div class="form-section">\r\n          <div class="section-header">\r\n            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r\n            </svg>\r\n            <h3 class="section-title">Location Details</h3>\r\n          </div>\r\n          <div class="form-group">\r\n            <label for="adjustment-location" class="form-label">Location *</label>\r\n            <select\r\n              id="adjustment-location"\r\n              class="form-select"\r\n              [(ngModel)]="adjustmentForm.location_id"\r\n              name="location_id"\r\n              required>\r\n              <option value="null">Select a location</option>\r\n              <option *ngFor="let location of availableLocations" [value]="location.id">\r\n                {{ location.name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Adjustment Information Section -->\r\n        <div class="form-section">\r\n          <div class="section-header">\r\n            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r\n            </svg>\r\n            <h3 class="section-title">Adjustment Information</h3>\r\n          </div>\r\n          <div class="form-group">\r\n            <label for="adjustment-quantity" class="form-label">Adjustment Quantity *</label>\r\n            <input\r\n              type="number"\r\n              id="adjustment-quantity"\r\n              class="form-input"\r\n              [(ngModel)]="adjustmentForm.quantity"\r\n              name="quantity"\r\n              min="0"\r\n              required>\r\n          </div>\r\n          <div class="form-group">\r\n            <label for="adjustment-reason" class="form-label">Reason</label>\r\n            <select\r\n              id="adjustment-reason"\r\n              class="form-select"\r\n              [(ngModel)]="adjustmentForm.reason"\r\n              name="reason">\r\n              <option value="">Select a reason</option>\r\n              <option value="receipt">Receipt</option>\r\n              <option value="issue">Issue</option>\r\n              <option value="adjustment">Adjustment</option>\r\n              <option value="return">Return</option>\r\n              <option value="damage">Damage</option>\r\n              <option value="expiry">Expiry</option>\r\n              <option value="theft">Theft</option>\r\n              <option value="other">Other</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Additional Notes Section -->\r\n        <div class="form-section">\r\n          <div class="section-header">\r\n            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r\n            </svg>\r\n            <h3 class="section-title">Additional Notes</h3>\r\n          </div>\r\n          <div class="form-group">\r\n            <label for="adjustment-notes" class="form-label">Notes</label>\r\n            <textarea\r\n              id="adjustment-notes"\r\n              class="form-textarea"\r\n              [(ngModel)]="adjustmentForm.notes"\r\n              name="notes"\r\n              rows="3"\r\n              placeholder="Additional notes..."></textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-actions">\r\n          <button type="button" class="btn btn-secondary" (click)="closeAdjustmentModal()">\r\n            Cancel\r\n          </button>\r\n          <button type="submit" class="btn btn-primary"\r\n                  [class.opacity-50]="adjustStockLoading && !adjustmentForm.part_id && !adjustmentForm.location_id && adjustmentForm.quantity == 0"\r\n                  [disabled]="!adjustmentForm.part_id && !adjustmentForm.location_id && adjustmentForm.quantity == 0">\r\n\r\n            @if (adjustStockLoading) {\r\n              Adjusting...\r\n              <span\r\n                class="border-t border-white animate-spin border-opacity-25 ml-2 w-4 h-4 rounded-full inline-block"></span>\r\n            } @else {\r\n              Adjust Stock\r\n            }\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Stock Transfer Modal -->\r\n  <div *ngIf="showTransferModal" class="modal-overlay" (click)="closeTransferModal()">\r\n    <div class="modal-content" (click)="$event.stopPropagation()">\r\n      <div class="modal-header">\r\n        <h2 class="modal-title">Transfer Stock</h2>\r\n        <button class="close-btn" (click)="closeTransferModal()">\r\n          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <form (ngSubmit)="onTransferStock()" class="modal-form">\r\n        <div class="form-group">\r\n          <label for="transfer-from" class="form-label">From Location *</label>\r\n          <select\r\n            id="transfer-from"\r\n            class="form-select"\r\n            [(ngModel)]="transferForm.from_location_id"\r\n            name="from_location_id"\r\n            required>\r\n            <option value="">Select source location</option>\r\n            <option *ngFor="let location of availableLocations" [value]="location.id">\r\n              {{ location.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="transfer-to" class="form-label">To Location *</label>\r\n          <select\r\n            id="transfer-to"\r\n            class="form-select"\r\n            [(ngModel)]="transferForm.to_location_id"\r\n            name="to_location_id"\r\n            required>\r\n            <option value="">Select destination location</option>\r\n            <option *ngFor="let location of availableLocations" [value]="location.id">\r\n              {{ location.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="transfer-quantity" class="form-label">Quantity *</label>\r\n          <input\r\n            type="number"\r\n            id="transfer-quantity"\r\n            class="form-input"\r\n            [(ngModel)]="transferForm.quantity"\r\n            name="quantity"\r\n            min="1"\r\n            required>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="transfer-reason" class="form-label">Reason</label>\r\n          <input\r\n            type="text"\r\n            id="transfer-reason"\r\n            class="form-input"\r\n            [(ngModel)]="transferForm.reason"\r\n            name="reason"\r\n            placeholder="Reason for transfer">\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="transfer-notes" class="form-label">Notes</label>\r\n          <textarea\r\n            id="transfer-notes"\r\n            class="form-textarea"\r\n            [(ngModel)]="transferForm.notes"\r\n            name="notes"\r\n            rows="3"\r\n            placeholder="Additional notes"></textarea>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="transfer-reference" class="form-label">Reference</label>\r\n          <input\r\n            type="text"\r\n            id="transfer-reference"\r\n            class="form-input"\r\n            [(ngModel)]="transferForm.reference"\r\n            name="reference"\r\n            placeholder="Reference number or document">\r\n        </div>\r\n\r\n        <div class="form-actions">\r\n          <button type="button" class="btn btn-secondary" (click)="closeTransferModal()">\r\n            Cancel\r\n          </button>\r\n          <button type="submit" class="btn btn-primary" [class.opacity-50]="transferLoading"\r\n                  [disabled]="transferLoading">\r\n            @if (transferLoading) {\r\n              Transferring...\r\n              <span\r\n                class="border-t border-white animate-spin border-opacity-25 ml-2 w-4 h-4 rounded-full inline-block"></span>\r\n            } @else {\r\n              Transfer Stock\r\n            }\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Stock Reserve Modal -->\r\n  <div *ngIf="showReserveModal" class="modal-overlay" (click)="closeReserveModal()">\r\n    <div class="modal-content" (click)="$event.stopPropagation()">\r\n      <div class="modal-header">\r\n        <h2 class="modal-title">Reserve Stock</h2>\r\n        <button class="close-btn" (click)="closeReserveModal()">\r\n          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <form (ngSubmit)="onReserveStock()" class="modal-form">\r\n        <div class="form-group">\r\n          <label for="reserve-quantity" class="form-label">Quantity to Reserve *</label>\r\n          <input\r\n            type="number"\r\n            id="reserve-quantity"\r\n            class="form-input"\r\n            [(ngModel)]="reserveForm.quantity"\r\n            name="quantity"\r\n            min="1"\r\n            required>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="reserve-reference" class="form-label">Reference</label>\r\n          <input\r\n            type="text"\r\n            id="reserve-reference"\r\n            class="form-input"\r\n            [(ngModel)]="reserveForm.reference"\r\n            name="reference"\r\n            placeholder="Reference for reservation">\r\n        </div>\r\n\r\n        <div class="form-actions">\r\n          <button type="button" class="btn btn-secondary" (click)="closeReserveModal()">\r\n            Cancel\r\n          </button>\r\n          <button type="submit" class="btn btn-primary">\r\n            @if (reserveLoading){\r\n              Reserving Stock...\r\n              <span class="border-t border-white animate-spin border-opacity-25 ml-2 w-4 h-4 rounded-full inline-block"></span>\r\n            } @else {\r\n              Reserve Stock\r\n            }\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Stock Count Modal -->\r\n  <div *ngIf="showCountModal" class="modal-overlay" (click)="closeCountModal()">\r\n    <div class="modal-content" (click)="$event.stopPropagation()">\r\n      <div class="modal-header">\r\n        <h2 class="modal-title">Stock Count</h2>\r\n        <button class="close-btn" (click)="closeCountModal()">\r\n          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n\r\n      <form (ngSubmit)="onPerformStockCount()" class="modal-form">\r\n        <div class="form-group">\r\n          <label for="count-quantity" class="form-label">Counted Quantity *</label>\r\n          <input\r\n            type="number"\r\n            id="count-quantity"\r\n            class="form-input"\r\n            [(ngModel)]="countForm.counted_quantity"\r\n            name="counted_quantity"\r\n            min="0"\r\n            required>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="count-notes" class="form-label">Notes</label>\r\n          <textarea\r\n            id="count-notes"\r\n            class="form-textarea"\r\n            [(ngModel)]="countForm.notes"\r\n            name="notes"\r\n            rows="3"\r\n            placeholder="Notes about the count"></textarea>\r\n        </div>\r\n\r\n        <div class="form-actions">\r\n          <button type="button" class="btn btn-secondary" (click)="closeCountModal()">\r\n            Cancel\r\n          </button>\r\n          <button type="submit" class="btn btn-primary">\r\n            @if (countLoading){\r\n              Updating Count...\r\n              <span class="border-t border-white animate-spin border-opacity-25 ml-2 w-4 h-4 rounded-full inline-block"></span>\r\n            } @else {\r\n              Update Count\r\n            }\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Floating Action Button -->\r\n  <button class="fab" (click)="openAdjustmentModal()" title="Stock Adjustment">\r\n    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r\n    </svg>\r\n  </button>\r\n</div>\r\n', styles: [`/* src/app/inventory/components/stock-levels/stock-levels.component.scss */
.stock-levels {
  position: relative;
  padding: 1.5rem;
  background-color: #f9fafb;
  min-height: 100vh;
}
.stock-levels .summary-cards-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.stock-levels .summary-cards-row .summary-card {
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.2s;
}
.stock-levels .summary-cards-row .summary-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.stock-levels .summary-cards-row .summary-card .card-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #f3f4f6;
}
.stock-levels .summary-cards-row .summary-card .card-icon svg {
  color: #6b7280;
}
.stock-levels .summary-cards-row .summary-card .card-content .card-value {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1;
}
.stock-levels .summary-cards-row .summary-card .card-content .card-value.warning {
  color: #d97706;
}
.stock-levels .summary-cards-row .summary-card .card-content .card-value.danger {
  color: #dc2626;
}
.stock-levels .summary-cards-row .summary-card .card-content .card-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.stock-levels .summary-cards-row .summary-card.total-items .card-icon {
  background-color: #dbeafe;
}
.stock-levels .summary-cards-row .summary-card.total-items .card-icon svg {
  color: #2563eb;
}
.stock-levels .summary-cards-row .summary-card.total-value .card-icon {
  background-color: #d1fae5;
}
.stock-levels .summary-cards-row .summary-card.total-value .card-icon svg {
  color: #059669;
}
.stock-levels .summary-cards-row .summary-card.low-stock .card-icon {
  background-color: #fef3c7;
}
.stock-levels .summary-cards-row .summary-card.low-stock .card-icon svg {
  color: #d97706;
}
.stock-levels .summary-cards-row .summary-card.out-of-stock .card-icon {
  background-color: #fee2e2;
}
.stock-levels .summary-cards-row .summary-card.out-of-stock .card-icon svg {
  color: #dc2626;
}
.stock-levels .no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.stock-levels .no-results .no-results-title {
  color: #6b7280;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
}
.stock-levels .no-results .no-results-description {
  color: #9ca3af;
  font-size: 1rem;
  margin: 0;
}
.stock-levels .loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}
.stock-levels .loading-state .loading-spinner {
  width: 3rem;
  height: 3rem;
  border: 3px solid #f3f4f6;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}
.stock-levels .loading-state p {
  color: #6b7280;
  font-size: 1.125rem;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.stock-levels .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}
.stock-levels .error-state .error-title {
  color: #ef4444;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0;
}
.stock-levels .error-state .btn {
  margin-top: 1rem;
}
.stock-levels .search-filters-section {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.stock-levels .search-filters-section .search-row {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.stock-levels .search-filters-section .search-row .search-container {
  position: relative;
  flex: 1;
  width: 300px;
}
.stock-levels .search-filters-section .search-row .search-container .search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  pointer-events: none;
}
.stock-levels .search-filters-section .search-row .search-container .search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: #f9fafb;
  transition: all 0.2s;
}
.stock-levels .search-filters-section .search-row .search-container .search-input:focus {
  outline: none;
  border-color: #3b82f6;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.stock-levels .search-filters-section .search-row .search-container .search-input::placeholder {
  color: #9ca3af;
}
.stock-levels .search-filters-section .search-row .filter-container {
  position: relative;
  max-width: 150px;
}
.stock-levels .search-filters-section .search-row .filter-container .filter-select {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: white;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s;
}
.stock-levels .search-filters-section .search-row .filter-container .filter-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.stock-levels .search-filters-section .search-row .filter-container .filter-select:hover {
  border-color: #9ca3af;
}
.stock-levels .search-filters-section .search-row .btn-outline {
  border-color: #d1d5db;
  color: #374151;
  background-color: white;
}
.stock-levels .search-filters-section .search-row .btn-outline:hover {
  background-color: #f9fafb;
}
.stock-levels .search-filters-section .actions-row .bulk-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.stock-levels .search-filters-section .actions-row .bulk-actions .btn {
  min-width: 140px;
}
.stock-levels .stock-table-container .stock-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.stock-levels .stock-table-container .stock-table thead {
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}
.stock-levels .stock-table-container .stock-table thead th {
  padding: 1rem 0.75rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
}
.stock-levels .stock-table-container .stock-table thead th.th-part {
  min-width: 200px;
  width: 20%;
}
.stock-levels .stock-table-container .stock-table thead th.th-location {
  min-width: 150px;
  width: 15%;
}
.stock-levels .stock-table-container .stock-table thead th.th-on-hand {
  min-width: 100px;
  width: 10%;
  text-align: center;
}
.stock-levels .stock-table-container .stock-table thead th.th-available {
  min-width: 100px;
  width: 10%;
  text-align: center;
}
.stock-levels .stock-table-container .stock-table thead th.th-reserved {
  min-width: 100px;
  width: 10%;
  text-align: center;
}
.stock-levels .stock-table-container .stock-table thead th.th-allocated {
  min-width: 100px;
  width: 10%;
  text-align: center;
}
.stock-levels .stock-table-container .stock-table thead th.th-cost {
  min-width: 120px;
  width: 12%;
  text-align: center;
}
.stock-levels .stock-table-container .stock-table thead th.th-status {
  min-width: 120px;
  width: 12%;
  text-align: center;
}
.stock-levels .stock-table-container .stock-table thead th.th-actions {
  min-width: 150px;
  width: 15%;
  text-align: center;
}
.stock-levels .stock-table-container .stock-table tbody tr {
  border-bottom: 1px solid #f3f4f6;
}
.stock-levels .stock-table-container .stock-table tbody tr:hover {
  background-color: #f9fafb;
}
.stock-levels .stock-table-container .stock-table tbody tr:last-child {
  border-bottom: none;
}
.stock-levels .stock-table-container .stock-table tbody tr td {
  padding: 1rem 0.75rem;
  vertical-align: top;
}
.stock-levels .stock-table-container .stock-table tbody tr td.part-info .part-name {
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25;
}
.stock-levels .stock-table-container .stock-table tbody tr td.part-info .part-number {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: monospace;
  background-color: #f3f4f6;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  display: inline-block;
}
.stock-levels .stock-table-container .stock-table tbody tr td.location-info .location-name {
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
}
.stock-levels .stock-table-container .stock-table tbody tr td.location-info .location-code {
  font-size: 0.75rem;
  color: #6b7280;
  font-family: monospace;
  background-color: #f3f4f6;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  display: inline-block;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-quantity {
  text-align: center;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-quantity .quantity {
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  display: inline-block;
  min-width: 2rem;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-quantity .quantity.critical {
  background-color: #fef2f2;
  color: #dc2626;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-quantity .quantity.warning {
  background-color: #fffbeb;
  color: #d97706;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-quantity .quantity.good {
  background-color: #f0fdf4;
  color: #16a34a;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-quantity .quantity.available {
  color: #16a34a;
  font-weight: 700;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-quantity .quantity.reserved {
  background-color: #fef3c7;
  color: #d97706;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-quantity .quantity.allocated {
  background-color: #dbeafe;
  color: #2563eb;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-cost {
  text-align: center;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-cost .cost {
  font-weight: 600;
  color: #10b981;
  font-size: 0.875rem;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-status {
  text-align: center;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-status .status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-status .status-badge.in-stock {
  background-color: #f0fdf4;
  color: #16a34a;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-status .status-badge.low-stock {
  background-color: #fffbeb;
  color: #d97706;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-status .status-badge.out-of-stock {
  background-color: #fef2f2;
  color: #dc2626;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-status .status-badge.reserved {
  background-color: #fef3c7;
  color: #d97706;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions {
  text-align: center;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  justify-content: center;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons .action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 2rem;
  min-height: 2rem;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons .action-btn.adjust {
  background-color: #dbeafe;
  color: #2563eb;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons .action-btn.adjust:hover {
  background-color: #bfdbfe;
  transform: translateY(-1px);
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons .action-btn.transfer {
  background-color: #fef3c7;
  color: #d97706;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons .action-btn.transfer:hover {
  background-color: #fde68a;
  transform: translateY(-1px);
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons .action-btn.reserve {
  background-color: #f3e8ff;
  color: #9333ea;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons .action-btn.reserve:hover {
  background-color: #e9d5ff;
  transform: translateY(-1px);
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons .action-btn.count {
  background-color: #ecfdf5;
  color: #059669;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .action-buttons .action-btn.count:hover {
  background-color: #d1fae5;
  transform: translateY(-1px);
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .quick-release {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .quick-release .release-quantity {
  width: 60px;
  padding: 0.25rem 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  text-align: center;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .quick-release .release-quantity:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .quick-release .release-btn {
  padding: 0.25rem 0.5rem;
  background-color: #fef2f2;
  color: #dc2626;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
}
.stock-levels .stock-table-container .stock-table tbody tr td.stock-actions .quick-release .release-btn:hover {
  background-color: #fee2e2;
  transform: translateY(-1px);
}
.stock-levels .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
  text-decoration: none;
  justify-content: center;
}
.stock-levels .btn:hover {
  transform: translateY(-1px);
}
.stock-levels .btn.btn-primary {
  background-color: #3b82f6;
  color: white;
  box-shadow: 0 1px 3px 0 rgba(59, 130, 246, 0.3);
}
.stock-levels .btn.btn-primary:hover {
  background-color: #2563eb;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
}
.stock-levels .btn.btn-secondary {
  background-color: white;
  color: #374151;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}
.stock-levels .btn.btn-secondary:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.stock-levels .btn.btn-warning {
  background-color: #f59e0b;
  color: white;
  box-shadow: 0 1px 3px 0 rgba(245, 158, 11, 0.3);
}
.stock-levels .btn.btn-warning:hover {
  background-color: #d97706;
  box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.4);
}
.stock-levels .modal-overlay {
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
.stock-levels .modal-content {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}
.stock-levels .modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}
.stock-levels .modal-header .modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.stock-levels .modal-header .close-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
}
.stock-levels .modal-header .close-btn:hover {
  background-color: #f3f4f6;
  color: #374151;
}
.stock-levels .modal-form {
  padding: 1.5rem;
}
.stock-levels .modal-form .form-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}
.stock-levels .modal-form .form-section .section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}
.stock-levels .modal-form .form-section .section-header svg {
  color: #6b7280;
  flex-shrink: 0;
}
.stock-levels .modal-form .form-section .section-header .section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 0;
}
.stock-levels .modal-form .form-section:last-child {
  margin-bottom: 0;
}
.stock-levels .modal-form .form-group {
  margin-bottom: 1.5rem;
}
.stock-levels .modal-form .form-group:last-child {
  margin-bottom: 0;
}
.stock-levels .modal-form .form-group .form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
.stock-levels .modal-form .form-group .form-input,
.stock-levels .modal-form .form-group .form-textarea,
.stock-levels .modal-form .form-group .form-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: white;
  transition: all 0.2s;
}
.stock-levels .modal-form .form-group .form-input:focus,
.stock-levels .modal-form .form-group .form-textarea:focus,
.stock-levels .modal-form .form-group .form-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.stock-levels .modal-form .form-group .form-input::placeholder,
.stock-levels .modal-form .form-group .form-textarea::placeholder,
.stock-levels .modal-form .form-group .form-select::placeholder {
  color: #9ca3af;
}
.stock-levels .modal-form .form-group .form-textarea {
  resize: vertical;
  min-height: 80px;
}
.stock-levels .modal-form .form-group .form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
.stock-levels .modal-form .form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}
.stock-levels .modal-form .form-actions .btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
}
.stock-levels .modal-form .form-actions .btn.btn-secondary {
  background-color: white;
  color: #374151;
  border: 1px solid #d1d5db;
}
.stock-levels .modal-form .form-actions .btn.btn-secondary:hover {
  background-color: #f9fafb;
  border-color: #9ca3af;
}
.stock-levels .modal-form .form-actions .btn.btn-primary {
  background-color: #3b82f6;
  color: white;
}
.stock-levels .modal-form .form-actions .btn.btn-primary:hover {
  background-color: #2563eb;
}
.stock-levels .pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
}
.stock-levels .pagination .pagination-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: white;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.stock-levels .pagination .pagination-btn:hover:not(:disabled) {
  background-color: #f9fafb;
  border-color: #9ca3af;
}
.stock-levels .pagination .pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.stock-levels .pagination .pagination-pages {
  display: flex;
  gap: 0.25rem;
}
.stock-levels .pagination .pagination-pages .pagination-page {
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: white;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 2.5rem;
  text-align: center;
}
.stock-levels .pagination .pagination-pages .pagination-page:hover:not(.active) {
  background-color: #f9fafb;
  border-color: #9ca3af;
}
.stock-levels .pagination .pagination-pages .pagination-page.active {
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: white;
}
.stock-levels .fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  z-index: 100;
}
.stock-levels .fab:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.stock-levels .fab svg {
  width: 1.5rem;
  height: 1.5rem;
}
@media (max-width: 1024px) {
  .stock-levels .summary-cards-row {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .stock-levels .search-filters-section .search-row .search-container {
    min-width: 250px;
  }
  .stock-levels .search-filters-section .search-row .filter-container {
    min-width: 150px;
  }
}
@media (max-width: 768px) {
  .stock-levels .summary-cards-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .stock-levels .search-filters-section .search-row {
    flex-direction: column;
    gap: 1rem;
  }
  .stock-levels .search-filters-section .search-row .search-container {
    min-width: auto;
    max-width: none;
  }
  .stock-levels .search-filters-section .search-row .filter-container {
    min-width: auto;
  }
  .stock-levels .search-filters-section .actions-row .bulk-actions {
    flex-direction: column;
  }
  .stock-levels .search-filters-section .actions-row .bulk-actions .btn {
    width: 100%;
    justify-content: center;
  }
  .stock-levels .stock-table-container {
    overflow-x: auto;
  }
  .stock-levels .stock-table-container .stock-table {
    min-width: 800px;
  }
  .stock-levels .pagination {
    flex-direction: column;
    gap: 1rem;
  }
  .stock-levels .pagination .pagination-pages {
    order: -1;
  }
  .stock-levels .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
  .stock-levels .fab {
    bottom: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
  }
  .stock-levels .fab svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}
@media (max-width: 480px) {
  .stock-levels .summary-cards-row .summary-card {
    padding: 1rem;
  }
  .stock-levels .summary-cards-row .summary-card .card-value {
    font-size: 1.5rem;
  }
  .stock-levels .summary-cards-row .summary-card .card-label {
    font-size: 0.75rem;
  }
  .stock-levels .search-filters-section {
    padding: 1rem;
  }
  .stock-levels .fab {
    bottom: 0.5rem;
    right: 0.5rem;
  }
}
/*# sourceMappingURL=stock-levels.component.css.map */
`] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockLevelsComponent, { className: "StockLevelsComponent", filePath: "src/app/inventory/components/stock-levels/stock-levels.component.ts", lineNumber: 21 });
})();
export {
  StockLevelsComponent
};
//# sourceMappingURL=chunk-F2CDK2IE.js.map
