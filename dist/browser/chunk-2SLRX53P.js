import {
  NG_VALUE_ACCESSOR
} from "./chunk-FSOYXA4J.js";
import {
  DOCUMENT,
  NgTemplateOutlet
} from "./chunk-MMJF4Y5E.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  HostAttributeToken,
  HostBinding,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Renderer2,
  ReplaySubject,
  Subject,
  TemplateRef,
  ViewEncapsulation,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  assertInInjectionContext,
  auditTime,
  booleanAttribute,
  computed,
  contentChild,
  contentChildren,
  debounceTime,
  effect,
  filter,
  forwardRef,
  fromEvent,
  inject,
  input,
  map,
  merge,
  model,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeUntil,
  tap,
  untracked,
  viewChild,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-YUR5IGOK.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toObservable(source, options) {
  !options?.injector && assertInInjectionContext(toObservable);
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}

// node_modules/@ng-select/ng-select/fesm2022/ng-select-ng-select.mjs
var _c0 = ["content"];
var _c1 = ["scroll"];
var _c2 = ["padding"];
var _c3 = ["*"];
var _c4 = (a0) => ({
  searchTerm: a0
});
function NgDropdownPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275elementContainer(1, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r0.filterValue()));
  }
}
function NgDropdownPanelComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275elementContainer(1, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r0.filterValue()));
  }
}
var _c5 = ["searchInput"];
var _c6 = ["clearButton"];
var _c7 = (a0, a1, a2) => ({
  item: a0,
  clear: a1,
  label: a2
});
var _c8 = (a0, a1) => ({
  items: a0,
  clear: a1
});
var _c9 = (a0, a1, a2, a3) => ({
  item: a0,
  item$: a1,
  index: a2,
  searchTerm: a3
});
function NgSelectComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.placeholder()) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ctx_r1.config.placeholder);
  }
}
function NgSelectComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_2_ng_template_0_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultPlaceholderTemplate_r3 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.placeholderTemplate() || defaultPlaceholderTemplate_r3);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275listener("click", function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unselect(item_r5));
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 24);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngItemLabel", item_r5.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, NgSelectComponent_Conditional_3_For_1_ng_template_1_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(3, NgSelectComponent_Conditional_3_For_1_ng_template_3_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const defaultLabelTemplate_r6 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ng-value-disabled", item_r5.disabled);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.labelTemplate() || defaultLabelTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction3(4, _c7, item_r5.value, ctx_r1.clearItem, item_r5.label));
  }
}
function NgSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NgSelectComponent_Conditional_3_For_1_Template, 4, 8, "div", 21, \u0275\u0275componentInstance().trackByOption, true);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.selectedItems);
  }
}
function NgSelectComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.multiLabelTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c8, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}
function NgSelectComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
}
function NgSelectComponent_Conditional_8_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_8_ng_template_0_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_8_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultLoadingSpinnerTemplate_r8 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingSpinnerTemplate() || defaultLoadingSpinnerTemplate_r8);
  }
}
function NgSelectComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearButtonTemplate());
  }
}
function NgSelectComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26, 4)(2, "span", 27);
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("title", ctx_r1.clearAllText() || ctx_r1.config.clearAllText);
    \u0275\u0275attribute("tabindex", ctx_r1.tabFocusOnClear() ? 0 : -1);
  }
}
function NgSelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_9_Conditional_0_Template, 1, 1, "ng-container", 19)(1, NgSelectComponent_Conditional_9_Conditional_1_Template, 4, 2, "span", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.clearButtonTemplate() ? 0 : 1);
  }
}
function NgSelectComponent_Conditional_12_For_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 32);
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngItemLabel", item_r11.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_12_For_4_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function NgSelectComponent_Conditional_12_For_4_Template_div_click_0_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r11));
    })("mouseover", function NgSelectComponent_Conditional_12_For_4_Template_div_mouseover_0_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onItemHover(item_r11));
    });
    \u0275\u0275template(1, NgSelectComponent_Conditional_12_For_4_ng_template_1_Template, 1, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(3, NgSelectComponent_Conditional_12_For_4_ng_template_3_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const defaultOptionTemplate_r12 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ng-option-disabled", item_r11.disabled)("ng-option-selected", item_r11.selected)("ng-optgroup", item_r11.children)("ng-option", !item_r11.children)("ng-option-child", !!item_r11.parent)("ng-option-marked", item_r11 === ctx_r1.itemsList.markedItem);
    \u0275\u0275attribute("role", item_r11.children ? "group" : "option")("aria-selected", item_r11.selected)("id", item_r11 == null ? null : item_r11.htmlId)("aria-setsize", ctx_r1.itemsList.filteredItems.length)("aria-posinset", item_r11.index + 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", item_r11.children ? ctx_r1.optgroupTemplate() || defaultOptionTemplate_r12 : ctx_r1.optionTemplate() || defaultOptionTemplate_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction4(19, _c9, item_r11.value, item_r11, item_r11.index, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.addTagText() || ctx_r1.config.addTagText);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', ctx_r1.searchTerm, '"');
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("mouseover", function NgSelectComponent_Conditional_12_Conditional_5_Template_div_mouseover_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.itemsList.unmarkItem());
    })("click", function NgSelectComponent_Conditional_12_Conditional_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTag());
    });
    \u0275\u0275template(1, NgSelectComponent_Conditional_12_Conditional_5_ng_template_1_Template, 4, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(3, NgSelectComponent_Conditional_12_Conditional_5_ng_template_3_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const defaultTagTemplate_r14 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ng-option-marked", !ctx_r1.itemsList.markedItem);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tagTemplate() || defaultTagTemplate_r14)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.notFoundText()) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ctx_r1.config.notFoundText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultNotFoundTemplate_r15 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.notFoundTemplate() || defaultNotFoundTemplate_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeToSearchText() || ctx_r1.config.typeToSearchText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template, 2, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultTypeToSearchTemplate_r16 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.typeToSearchTemplate() || defaultTypeToSearchTemplate_r16);
  }
}
function NgSelectComponent_Conditional_12_Conditional_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loadingText() || ctx_r1.config.loadingText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_8_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgSelectComponent_Conditional_12_Conditional_8_ng_template_0_Template, 2, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_8_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultLoadingTextTemplate_r17 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingTextTemplate() || defaultLoadingTextTemplate_r17)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "ng-dropdown-panel", 28);
    \u0275\u0275listener("update", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_update_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewPortItems = $event);
    })("scroll", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scroll_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scroll.emit($event));
    })("scrollToEnd", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scrollToEnd_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollToEnd.emit($event));
    })("outsideClick", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_outsideClick_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275repeaterCreate(3, NgSelectComponent_Conditional_12_For_4_Template, 4, 24, "div", 29, \u0275\u0275componentInstance().trackByOption, true);
    \u0275\u0275template(5, NgSelectComponent_Conditional_12_Conditional_5_Template, 4, 6, "div", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(6, NgSelectComponent_Conditional_12_Conditional_6_Template, 3, 4)(7, NgSelectComponent_Conditional_12_Conditional_7_Template, 3, 1)(8, NgSelectComponent_Conditional_12_Conditional_8_Template, 3, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    const appendToValue_r18 = ctx_r1.appendTo() || ctx_r1.config.appendTo;
    \u0275\u0275advance();
    \u0275\u0275classMap(appendToValue_r18 ? ctx_r1.ngClass() ? ctx_r1.ngClass() : ctx_r1.classes : null);
    \u0275\u0275classProp("ng-select-multiple", ctx_r1.multiple());
    \u0275\u0275property("virtualScroll", (tmp_5_0 = (tmp_5_0 = ctx_r1.virtualScroll()) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : !ctx_r1.config.disableVirtualScroll) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false)("bufferAmount", ctx_r1.bufferAmount())("appendTo", appendToValue_r18)("position", ctx_r1.dropdownPosition())("headerTemplate", ctx_r1.headerTemplate())("footerTemplate", ctx_r1.footerTemplate())("filterValue", ctx_r1.searchTerm)("items", ctx_r1.itemsList.filteredItems)("markedItem", ctx_r1.itemsList.markedItem)("id", ctx_r1.dropdownId)("ariaLabelDropdown", ctx_r1.ariaLabelDropdown());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.viewPortItems);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showAddTag ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNoItemsFound() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showTypeToSearch() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() && ctx_r1.itemsList.filteredItems.length === 0 ? 8 : -1);
  }
}
function NgSelectComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.notFoundText, " ");
  }
}
var unescapedHTMLExp = /[&<>"']/g;
var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escapeHTML(value) {
  return value && hasUnescapedHTMLExp.test(value) ? value.replace(unescapedHTMLExp, (chr) => htmlEscapes[chr]) : value;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isObject(value) {
  return typeof value === "object" && isDefined(value);
}
function isPromise(value) {
  return value instanceof Promise;
}
function isFunction(value) {
  return value instanceof Function;
}
var NgItemLabelDirective = class _NgItemLabelDirective {
  constructor() {
    this.element = inject(ElementRef);
    this.ngItemLabel = input();
    this.escape = input(true);
    effect(() => {
      this.element.nativeElement.innerHTML = this.escape() ? escapeHTML(this.ngItemLabel()) : this.ngItemLabel();
    });
  }
  static {
    this.\u0275fac = function NgItemLabelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgItemLabelDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgItemLabelDirective,
      selectors: [["", "ngItemLabel", ""]],
      inputs: {
        ngItemLabel: [1, "ngItemLabel"],
        escape: [1, "escape"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgItemLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[ngItemLabel]",
      standalone: true
    }]
  }], () => [], null);
})();
var NgOptionTemplateDirective = class _NgOptionTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgOptionTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOptionTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgOptionTemplateDirective,
      selectors: [["", "ng-option-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptionTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-option-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgOptgroupTemplateDirective = class _NgOptgroupTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgOptgroupTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOptgroupTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgOptgroupTemplateDirective,
      selectors: [["", "ng-optgroup-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptgroupTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-optgroup-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgLabelTemplateDirective = class _NgLabelTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgLabelTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgLabelTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgLabelTemplateDirective,
      selectors: [["", "ng-label-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLabelTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-label-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgMultiLabelTemplateDirective = class _NgMultiLabelTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgMultiLabelTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgMultiLabelTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgMultiLabelTemplateDirective,
      selectors: [["", "ng-multi-label-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgMultiLabelTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-multi-label-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgHeaderTemplateDirective = class _NgHeaderTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgHeaderTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgHeaderTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgHeaderTemplateDirective,
      selectors: [["", "ng-header-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-header-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgFooterTemplateDirective = class _NgFooterTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgFooterTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFooterTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgFooterTemplateDirective,
      selectors: [["", "ng-footer-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFooterTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-footer-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgNotFoundTemplateDirective = class _NgNotFoundTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgNotFoundTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgNotFoundTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgNotFoundTemplateDirective,
      selectors: [["", "ng-notfound-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgNotFoundTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-notfound-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgPlaceholderTemplateDirective = class _NgPlaceholderTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgPlaceholderTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgPlaceholderTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgPlaceholderTemplateDirective,
      selectors: [["", "ng-placeholder-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPlaceholderTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-placeholder-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgTypeToSearchTemplateDirective = class _NgTypeToSearchTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgTypeToSearchTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgTypeToSearchTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgTypeToSearchTemplateDirective,
      selectors: [["", "ng-typetosearch-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTypeToSearchTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-typetosearch-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgLoadingTextTemplateDirective = class _NgLoadingTextTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgLoadingTextTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgLoadingTextTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgLoadingTextTemplateDirective,
      selectors: [["", "ng-loadingtext-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLoadingTextTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-loadingtext-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgTagTemplateDirective = class _NgTagTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgTagTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgTagTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgTagTemplateDirective,
      selectors: [["", "ng-tag-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTagTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-tag-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgLoadingSpinnerTemplateDirective = class _NgLoadingSpinnerTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgLoadingSpinnerTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgLoadingSpinnerTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgLoadingSpinnerTemplateDirective,
      selectors: [["", "ng-loadingspinner-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLoadingSpinnerTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-loadingspinner-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgClearButtonTemplateDirective = class _NgClearButtonTemplateDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.\u0275fac = function NgClearButtonTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgClearButtonTemplateDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgClearButtonTemplateDirective,
      selectors: [["", "ng-clearbutton-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClearButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ng-clearbutton-tmp]",
      standalone: true
    }]
  }], null, null);
})();
var NgSelectConfig = class _NgSelectConfig {
  constructor() {
    this.fixedPlaceholder = true;
    this.notFoundText = "No items found";
    this.typeToSearchText = "Type to search";
    this.addTagText = "Add item";
    this.loadingText = "Loading...";
    this.clearAllText = "Clear all";
    this.disableVirtualScroll = true;
    this.openOnEnter = true;
    this.appearance = "underline";
    this.tabFocusOnClear = true;
  }
  static {
    this.\u0275fac = function NgSelectConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgSelectConfig,
      factory: _NgSelectConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConsoleService = class _ConsoleService {
  warn(message) {
    console.warn(message);
  }
  static {
    this.\u0275fac = function ConsoleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsoleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ConsoleService,
      factory: _ConsoleService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function newId() {
  return "axxxxxxxxxxx".replace(/[x]/g, () => {
    const val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
var diacritics = {
  "\u24B6": "A",
  "\uFF21": "A",
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\u1EA6": "A",
  "\u1EA4": "A",
  "\u1EAA": "A",
  "\u1EA8": "A",
  "\xC3": "A",
  "\u0100": "A",
  "\u0102": "A",
  "\u1EB0": "A",
  "\u1EAE": "A",
  "\u1EB4": "A",
  "\u1EB2": "A",
  "\u0226": "A",
  "\u01E0": "A",
  "\xC4": "A",
  "\u01DE": "A",
  "\u1EA2": "A",
  "\xC5": "A",
  "\u01FA": "A",
  "\u01CD": "A",
  "\u0200": "A",
  "\u0202": "A",
  "\u1EA0": "A",
  "\u1EAC": "A",
  "\u1EB6": "A",
  "\u1E00": "A",
  "\u0104": "A",
  "\u023A": "A",
  "\u2C6F": "A",
  "\uA732": "AA",
  "\xC6": "AE",
  "\u01FC": "AE",
  "\u01E2": "AE",
  "\uA734": "AO",
  "\uA736": "AU",
  "\uA738": "AV",
  "\uA73A": "AV",
  "\uA73C": "AY",
  "\u24B7": "B",
  "\uFF22": "B",
  "\u1E02": "B",
  "\u1E04": "B",
  "\u1E06": "B",
  "\u0243": "B",
  "\u0182": "B",
  "\u0181": "B",
  "\u24B8": "C",
  "\uFF23": "C",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\xC7": "C",
  "\u1E08": "C",
  "\u0187": "C",
  "\u023B": "C",
  "\uA73E": "C",
  "\u24B9": "D",
  "\uFF24": "D",
  "\u1E0A": "D",
  "\u010E": "D",
  "\u1E0C": "D",
  "\u1E10": "D",
  "\u1E12": "D",
  "\u1E0E": "D",
  "\u0110": "D",
  "\u018B": "D",
  "\u018A": "D",
  "\u0189": "D",
  "\uA779": "D",
  "\u01F1": "DZ",
  "\u01C4": "DZ",
  "\u01F2": "Dz",
  "\u01C5": "Dz",
  "\u24BA": "E",
  "\uFF25": "E",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\u1EC0": "E",
  "\u1EBE": "E",
  "\u1EC4": "E",
  "\u1EC2": "E",
  "\u1EBC": "E",
  "\u0112": "E",
  "\u1E14": "E",
  "\u1E16": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\xCB": "E",
  "\u1EBA": "E",
  "\u011A": "E",
  "\u0204": "E",
  "\u0206": "E",
  "\u1EB8": "E",
  "\u1EC6": "E",
  "\u0228": "E",
  "\u1E1C": "E",
  "\u0118": "E",
  "\u1E18": "E",
  "\u1E1A": "E",
  "\u0190": "E",
  "\u018E": "E",
  "\u24BB": "F",
  "\uFF26": "F",
  "\u1E1E": "F",
  "\u0191": "F",
  "\uA77B": "F",
  "\u24BC": "G",
  "\uFF27": "G",
  "\u01F4": "G",
  "\u011C": "G",
  "\u1E20": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u01E6": "G",
  "\u0122": "G",
  "\u01E4": "G",
  "\u0193": "G",
  "\uA7A0": "G",
  "\uA77D": "G",
  "\uA77E": "G",
  "\u24BD": "H",
  "\uFF28": "H",
  "\u0124": "H",
  "\u1E22": "H",
  "\u1E26": "H",
  "\u021E": "H",
  "\u1E24": "H",
  "\u1E28": "H",
  "\u1E2A": "H",
  "\u0126": "H",
  "\u2C67": "H",
  "\u2C75": "H",
  "\uA78D": "H",
  "\u24BE": "I",
  "\uFF29": "I",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u0130": "I",
  "\xCF": "I",
  "\u1E2E": "I",
  "\u1EC8": "I",
  "\u01CF": "I",
  "\u0208": "I",
  "\u020A": "I",
  "\u1ECA": "I",
  "\u012E": "I",
  "\u1E2C": "I",
  "\u0197": "I",
  "\u24BF": "J",
  "\uFF2A": "J",
  "\u0134": "J",
  "\u0248": "J",
  "\u24C0": "K",
  "\uFF2B": "K",
  "\u1E30": "K",
  "\u01E8": "K",
  "\u1E32": "K",
  "\u0136": "K",
  "\u1E34": "K",
  "\u0198": "K",
  "\u2C69": "K",
  "\uA740": "K",
  "\uA742": "K",
  "\uA744": "K",
  "\uA7A2": "K",
  "\u24C1": "L",
  "\uFF2C": "L",
  "\u013F": "L",
  "\u0139": "L",
  "\u013D": "L",
  "\u1E36": "L",
  "\u1E38": "L",
  "\u013B": "L",
  "\u1E3C": "L",
  "\u1E3A": "L",
  "\u0141": "L",
  "\u023D": "L",
  "\u2C62": "L",
  "\u2C60": "L",
  "\uA748": "L",
  "\uA746": "L",
  "\uA780": "L",
  "\u01C7": "LJ",
  "\u01C8": "Lj",
  "\u24C2": "M",
  "\uFF2D": "M",
  "\u1E3E": "M",
  "\u1E40": "M",
  "\u1E42": "M",
  "\u2C6E": "M",
  "\u019C": "M",
  "\u24C3": "N",
  "\uFF2E": "N",
  "\u01F8": "N",
  "\u0143": "N",
  "\xD1": "N",
  "\u1E44": "N",
  "\u0147": "N",
  "\u1E46": "N",
  "\u0145": "N",
  "\u1E4A": "N",
  "\u1E48": "N",
  "\u0220": "N",
  "\u019D": "N",
  "\uA790": "N",
  "\uA7A4": "N",
  "\u01CA": "NJ",
  "\u01CB": "Nj",
  "\u24C4": "O",
  "\uFF2F": "O",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\u1ED2": "O",
  "\u1ED0": "O",
  "\u1ED6": "O",
  "\u1ED4": "O",
  "\xD5": "O",
  "\u1E4C": "O",
  "\u022C": "O",
  "\u1E4E": "O",
  "\u014C": "O",
  "\u1E50": "O",
  "\u1E52": "O",
  "\u014E": "O",
  "\u022E": "O",
  "\u0230": "O",
  "\xD6": "O",
  "\u022A": "O",
  "\u1ECE": "O",
  "\u0150": "O",
  "\u01D1": "O",
  "\u020C": "O",
  "\u020E": "O",
  "\u01A0": "O",
  "\u1EDC": "O",
  "\u1EDA": "O",
  "\u1EE0": "O",
  "\u1EDE": "O",
  "\u1EE2": "O",
  "\u1ECC": "O",
  "\u1ED8": "O",
  "\u01EA": "O",
  "\u01EC": "O",
  "\xD8": "O",
  "\u01FE": "O",
  "\u0186": "O",
  "\u019F": "O",
  "\uA74A": "O",
  "\uA74C": "O",
  "\u01A2": "OI",
  "\uA74E": "OO",
  "\u0222": "OU",
  "\u24C5": "P",
  "\uFF30": "P",
  "\u1E54": "P",
  "\u1E56": "P",
  "\u01A4": "P",
  "\u2C63": "P",
  "\uA750": "P",
  "\uA752": "P",
  "\uA754": "P",
  "\u24C6": "Q",
  "\uFF31": "Q",
  "\uA756": "Q",
  "\uA758": "Q",
  "\u024A": "Q",
  "\u24C7": "R",
  "\uFF32": "R",
  "\u0154": "R",
  "\u1E58": "R",
  "\u0158": "R",
  "\u0210": "R",
  "\u0212": "R",
  "\u1E5A": "R",
  "\u1E5C": "R",
  "\u0156": "R",
  "\u1E5E": "R",
  "\u024C": "R",
  "\u2C64": "R",
  "\uA75A": "R",
  "\uA7A6": "R",
  "\uA782": "R",
  "\u24C8": "S",
  "\uFF33": "S",
  "\u1E9E": "S",
  "\u015A": "S",
  "\u1E64": "S",
  "\u015C": "S",
  "\u1E60": "S",
  "\u0160": "S",
  "\u1E66": "S",
  "\u1E62": "S",
  "\u1E68": "S",
  "\u0218": "S",
  "\u015E": "S",
  "\u2C7E": "S",
  "\uA7A8": "S",
  "\uA784": "S",
  "\u24C9": "T",
  "\uFF34": "T",
  "\u1E6A": "T",
  "\u0164": "T",
  "\u1E6C": "T",
  "\u021A": "T",
  "\u0162": "T",
  "\u1E70": "T",
  "\u1E6E": "T",
  "\u0166": "T",
  "\u01AC": "T",
  "\u01AE": "T",
  "\u023E": "T",
  "\uA786": "T",
  "\uA728": "TZ",
  "\u24CA": "U",
  "\uFF35": "U",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\u0168": "U",
  "\u1E78": "U",
  "\u016A": "U",
  "\u1E7A": "U",
  "\u016C": "U",
  "\xDC": "U",
  "\u01DB": "U",
  "\u01D7": "U",
  "\u01D5": "U",
  "\u01D9": "U",
  "\u1EE6": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u01D3": "U",
  "\u0214": "U",
  "\u0216": "U",
  "\u01AF": "U",
  "\u1EEA": "U",
  "\u1EE8": "U",
  "\u1EEE": "U",
  "\u1EEC": "U",
  "\u1EF0": "U",
  "\u1EE4": "U",
  "\u1E72": "U",
  "\u0172": "U",
  "\u1E76": "U",
  "\u1E74": "U",
  "\u0244": "U",
  "\u24CB": "V",
  "\uFF36": "V",
  "\u1E7C": "V",
  "\u1E7E": "V",
  "\u01B2": "V",
  "\uA75E": "V",
  "\u0245": "V",
  "\uA760": "VY",
  "\u24CC": "W",
  "\uFF37": "W",
  "\u1E80": "W",
  "\u1E82": "W",
  "\u0174": "W",
  "\u1E86": "W",
  "\u1E84": "W",
  "\u1E88": "W",
  "\u2C72": "W",
  "\u24CD": "X",
  "\uFF38": "X",
  "\u1E8A": "X",
  "\u1E8C": "X",
  "\u24CE": "Y",
  "\uFF39": "Y",
  "\u1EF2": "Y",
  "\xDD": "Y",
  "\u0176": "Y",
  "\u1EF8": "Y",
  "\u0232": "Y",
  "\u1E8E": "Y",
  "\u0178": "Y",
  "\u1EF6": "Y",
  "\u1EF4": "Y",
  "\u01B3": "Y",
  "\u024E": "Y",
  "\u1EFE": "Y",
  "\u24CF": "Z",
  "\uFF3A": "Z",
  "\u0179": "Z",
  "\u1E90": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u1E92": "Z",
  "\u1E94": "Z",
  "\u01B5": "Z",
  "\u0224": "Z",
  "\u2C7F": "Z",
  "\u2C6B": "Z",
  "\uA762": "Z",
  "\u24D0": "a",
  "\uFF41": "a",
  "\u1E9A": "a",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\u1EA7": "a",
  "\u1EA5": "a",
  "\u1EAB": "a",
  "\u1EA9": "a",
  "\xE3": "a",
  "\u0101": "a",
  "\u0103": "a",
  "\u1EB1": "a",
  "\u1EAF": "a",
  "\u1EB5": "a",
  "\u1EB3": "a",
  "\u0227": "a",
  "\u01E1": "a",
  "\xE4": "a",
  "\u01DF": "a",
  "\u1EA3": "a",
  "\xE5": "a",
  "\u01FB": "a",
  "\u01CE": "a",
  "\u0201": "a",
  "\u0203": "a",
  "\u1EA1": "a",
  "\u1EAD": "a",
  "\u1EB7": "a",
  "\u1E01": "a",
  "\u0105": "a",
  "\u2C65": "a",
  "\u0250": "a",
  "\uA733": "aa",
  "\xE6": "ae",
  "\u01FD": "ae",
  "\u01E3": "ae",
  "\uA735": "ao",
  "\uA737": "au",
  "\uA739": "av",
  "\uA73B": "av",
  "\uA73D": "ay",
  "\u24D1": "b",
  "\uFF42": "b",
  "\u1E03": "b",
  "\u1E05": "b",
  "\u1E07": "b",
  "\u0180": "b",
  "\u0183": "b",
  "\u0253": "b",
  "\u24D2": "c",
  "\uFF43": "c",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\xE7": "c",
  "\u1E09": "c",
  "\u0188": "c",
  "\u023C": "c",
  "\uA73F": "c",
  "\u2184": "c",
  "\u24D3": "d",
  "\uFF44": "d",
  "\u1E0B": "d",
  "\u010F": "d",
  "\u1E0D": "d",
  "\u1E11": "d",
  "\u1E13": "d",
  "\u1E0F": "d",
  "\u0111": "d",
  "\u018C": "d",
  "\u0256": "d",
  "\u0257": "d",
  "\uA77A": "d",
  "\u01F3": "dz",
  "\u01C6": "dz",
  "\u24D4": "e",
  "\uFF45": "e",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\u1EC1": "e",
  "\u1EBF": "e",
  "\u1EC5": "e",
  "\u1EC3": "e",
  "\u1EBD": "e",
  "\u0113": "e",
  "\u1E15": "e",
  "\u1E17": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\xEB": "e",
  "\u1EBB": "e",
  "\u011B": "e",
  "\u0205": "e",
  "\u0207": "e",
  "\u1EB9": "e",
  "\u1EC7": "e",
  "\u0229": "e",
  "\u1E1D": "e",
  "\u0119": "e",
  "\u1E19": "e",
  "\u1E1B": "e",
  "\u0247": "e",
  "\u025B": "e",
  "\u01DD": "e",
  "\u24D5": "f",
  "\uFF46": "f",
  "\u1E1F": "f",
  "\u0192": "f",
  "\uA77C": "f",
  "\u24D6": "g",
  "\uFF47": "g",
  "\u01F5": "g",
  "\u011D": "g",
  "\u1E21": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u01E7": "g",
  "\u0123": "g",
  "\u01E5": "g",
  "\u0260": "g",
  "\uA7A1": "g",
  "\u1D79": "g",
  "\uA77F": "g",
  "\u24D7": "h",
  "\uFF48": "h",
  "\u0125": "h",
  "\u1E23": "h",
  "\u1E27": "h",
  "\u021F": "h",
  "\u1E25": "h",
  "\u1E29": "h",
  "\u1E2B": "h",
  "\u1E96": "h",
  "\u0127": "h",
  "\u2C68": "h",
  "\u2C76": "h",
  "\u0265": "h",
  "\u0195": "hv",
  "\u24D8": "i",
  "\uFF49": "i",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\xEF": "i",
  "\u1E2F": "i",
  "\u1EC9": "i",
  "\u01D0": "i",
  "\u0209": "i",
  "\u020B": "i",
  "\u1ECB": "i",
  "\u012F": "i",
  "\u1E2D": "i",
  "\u0268": "i",
  "\u0131": "i",
  "\u24D9": "j",
  "\uFF4A": "j",
  "\u0135": "j",
  "\u01F0": "j",
  "\u0249": "j",
  "\u24DA": "k",
  "\uFF4B": "k",
  "\u1E31": "k",
  "\u01E9": "k",
  "\u1E33": "k",
  "\u0137": "k",
  "\u1E35": "k",
  "\u0199": "k",
  "\u2C6A": "k",
  "\uA741": "k",
  "\uA743": "k",
  "\uA745": "k",
  "\uA7A3": "k",
  "\u24DB": "l",
  "\uFF4C": "l",
  "\u0140": "l",
  "\u013A": "l",
  "\u013E": "l",
  "\u1E37": "l",
  "\u1E39": "l",
  "\u013C": "l",
  "\u1E3D": "l",
  "\u1E3B": "l",
  "\u017F": "l",
  "\u0142": "l",
  "\u019A": "l",
  "\u026B": "l",
  "\u2C61": "l",
  "\uA749": "l",
  "\uA781": "l",
  "\uA747": "l",
  "\u01C9": "lj",
  "\u24DC": "m",
  "\uFF4D": "m",
  "\u1E3F": "m",
  "\u1E41": "m",
  "\u1E43": "m",
  "\u0271": "m",
  "\u026F": "m",
  "\u24DD": "n",
  "\uFF4E": "n",
  "\u01F9": "n",
  "\u0144": "n",
  "\xF1": "n",
  "\u1E45": "n",
  "\u0148": "n",
  "\u1E47": "n",
  "\u0146": "n",
  "\u1E4B": "n",
  "\u1E49": "n",
  "\u019E": "n",
  "\u0272": "n",
  "\u0149": "n",
  "\uA791": "n",
  "\uA7A5": "n",
  "\u01CC": "nj",
  "\u24DE": "o",
  "\uFF4F": "o",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\u1ED3": "o",
  "\u1ED1": "o",
  "\u1ED7": "o",
  "\u1ED5": "o",
  "\xF5": "o",
  "\u1E4D": "o",
  "\u022D": "o",
  "\u1E4F": "o",
  "\u014D": "o",
  "\u1E51": "o",
  "\u1E53": "o",
  "\u014F": "o",
  "\u022F": "o",
  "\u0231": "o",
  "\xF6": "o",
  "\u022B": "o",
  "\u1ECF": "o",
  "\u0151": "o",
  "\u01D2": "o",
  "\u020D": "o",
  "\u020F": "o",
  "\u01A1": "o",
  "\u1EDD": "o",
  "\u1EDB": "o",
  "\u1EE1": "o",
  "\u1EDF": "o",
  "\u1EE3": "o",
  "\u1ECD": "o",
  "\u1ED9": "o",
  "\u01EB": "o",
  "\u01ED": "o",
  "\xF8": "o",
  "\u01FF": "o",
  "\u0254": "o",
  "\uA74B": "o",
  "\uA74D": "o",
  "\u0275": "o",
  "\u01A3": "oi",
  "\u0223": "ou",
  "\uA74F": "oo",
  "\u24DF": "p",
  "\uFF50": "p",
  "\u1E55": "p",
  "\u1E57": "p",
  "\u01A5": "p",
  "\u1D7D": "p",
  "\uA751": "p",
  "\uA753": "p",
  "\uA755": "p",
  "\u24E0": "q",
  "\uFF51": "q",
  "\u024B": "q",
  "\uA757": "q",
  "\uA759": "q",
  "\u24E1": "r",
  "\uFF52": "r",
  "\u0155": "r",
  "\u1E59": "r",
  "\u0159": "r",
  "\u0211": "r",
  "\u0213": "r",
  "\u1E5B": "r",
  "\u1E5D": "r",
  "\u0157": "r",
  "\u1E5F": "r",
  "\u024D": "r",
  "\u027D": "r",
  "\uA75B": "r",
  "\uA7A7": "r",
  "\uA783": "r",
  "\u24E2": "s",
  "\uFF53": "s",
  "\xDF": "s",
  "\u015B": "s",
  "\u1E65": "s",
  "\u015D": "s",
  "\u1E61": "s",
  "\u0161": "s",
  "\u1E67": "s",
  "\u1E63": "s",
  "\u1E69": "s",
  "\u0219": "s",
  "\u015F": "s",
  "\u023F": "s",
  "\uA7A9": "s",
  "\uA785": "s",
  "\u1E9B": "s",
  "\u24E3": "t",
  "\uFF54": "t",
  "\u1E6B": "t",
  "\u1E97": "t",
  "\u0165": "t",
  "\u1E6D": "t",
  "\u021B": "t",
  "\u0163": "t",
  "\u1E71": "t",
  "\u1E6F": "t",
  "\u0167": "t",
  "\u01AD": "t",
  "\u0288": "t",
  "\u2C66": "t",
  "\uA787": "t",
  "\uA729": "tz",
  "\u24E4": "u",
  "\uFF55": "u",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\u0169": "u",
  "\u1E79": "u",
  "\u016B": "u",
  "\u1E7B": "u",
  "\u016D": "u",
  "\xFC": "u",
  "\u01DC": "u",
  "\u01D8": "u",
  "\u01D6": "u",
  "\u01DA": "u",
  "\u1EE7": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u01D4": "u",
  "\u0215": "u",
  "\u0217": "u",
  "\u01B0": "u",
  "\u1EEB": "u",
  "\u1EE9": "u",
  "\u1EEF": "u",
  "\u1EED": "u",
  "\u1EF1": "u",
  "\u1EE5": "u",
  "\u1E73": "u",
  "\u0173": "u",
  "\u1E77": "u",
  "\u1E75": "u",
  "\u0289": "u",
  "\u24E5": "v",
  "\uFF56": "v",
  "\u1E7D": "v",
  "\u1E7F": "v",
  "\u028B": "v",
  "\uA75F": "v",
  "\u028C": "v",
  "\uA761": "vy",
  "\u24E6": "w",
  "\uFF57": "w",
  "\u1E81": "w",
  "\u1E83": "w",
  "\u0175": "w",
  "\u1E87": "w",
  "\u1E85": "w",
  "\u1E98": "w",
  "\u1E89": "w",
  "\u2C73": "w",
  "\u24E7": "x",
  "\uFF58": "x",
  "\u1E8B": "x",
  "\u1E8D": "x",
  "\u24E8": "y",
  "\uFF59": "y",
  "\u1EF3": "y",
  "\xFD": "y",
  "\u0177": "y",
  "\u1EF9": "y",
  "\u0233": "y",
  "\u1E8F": "y",
  "\xFF": "y",
  "\u1EF7": "y",
  "\u1E99": "y",
  "\u1EF5": "y",
  "\u01B4": "y",
  "\u024F": "y",
  "\u1EFF": "y",
  "\u24E9": "z",
  "\uFF5A": "z",
  "\u017A": "z",
  "\u1E91": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u1E93": "z",
  "\u1E95": "z",
  "\u01B6": "z",
  "\u0225": "z",
  "\u0240": "z",
  "\u2C6C": "z",
  "\uA763": "z",
  "\u0386": "\u0391",
  "\u0388": "\u0395",
  "\u0389": "\u0397",
  "\u038A": "\u0399",
  "\u03AA": "\u0399",
  "\u038C": "\u039F",
  "\u038E": "\u03A5",
  "\u03AB": "\u03A5",
  "\u038F": "\u03A9",
  "\u03AC": "\u03B1",
  "\u03AD": "\u03B5",
  "\u03AE": "\u03B7",
  "\u03AF": "\u03B9",
  "\u03CA": "\u03B9",
  "\u0390": "\u03B9",
  "\u03CC": "\u03BF",
  "\u03CD": "\u03C5",
  "\u03CB": "\u03C5",
  "\u03B0": "\u03C5",
  "\u03C9": "\u03C9",
  "\u03C2": "\u03C3"
};
function stripSpecialChars(text) {
  const match = (a) => diacritics[a] || a;
  return text.replace(/[^\u0000-\u007E]/g, match);
}
var ItemsList = class {
  constructor(_ngSelect, _selectionModel) {
    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }
  get items() {
    return this._items;
  }
  get filteredItems() {
    return this._filteredItems;
  }
  get markedIndex() {
    return this._markedIndex;
  }
  get selectedItems() {
    return this._selectionModel.value;
  }
  get markedItem() {
    return this._filteredItems[this._markedIndex];
  }
  get noItemsToSelect() {
    return this._ngSelect.hideSelected() && this._items.length === this.selectedItems.length;
  }
  get maxItemsSelected() {
    return this._ngSelect.multiple() && this._ngSelect.maxSelectedItems() <= this.selectedItems.length;
  }
  get lastSelectedItem() {
    let i = this.selectedItems.length - 1;
    for (; i >= 0; i--) {
      const item = this.selectedItems[i];
      if (!item.disabled) {
        return item;
      }
    }
    return null;
  }
  setItems(items) {
    this._items = items.map((item, index) => this.mapItem(item, index));
    const groupBy = this._ngSelect.groupBy();
    if (groupBy) {
      this._groups = this._groupBy(this._items, groupBy);
      this._items = this._flatten(this._groups);
    } else {
      this._groups = /* @__PURE__ */ new Map();
      this._groups.set(void 0, this._items);
    }
    this._filteredItems = [...this._items];
  }
  select(item) {
    if (item.selected || this.maxItemsSelected) {
      return;
    }
    const multiple = this._ngSelect.multiple();
    if (!multiple) {
      this.clearSelected();
    }
    this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel());
    if (this._ngSelect.hideSelected()) {
      this._hideSelected(item);
    }
  }
  unselect(item) {
    if (!item.selected) {
      return;
    }
    const multiple = this._ngSelect.multiple();
    this._selectionModel.unselect(item, multiple);
    if (this._ngSelect.hideSelected() && isDefined(item.index) && multiple) {
      this._showSelected(item);
    }
  }
  findItem(value) {
    let findBy;
    if (this._ngSelect.compareWith()) {
      findBy = (item) => this._ngSelect.compareWith()(item.value, value);
    } else if (this._ngSelect.bindValue()) {
      findBy = (item) => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue()) === value;
    } else {
      findBy = (item) => item.value === value || !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel());
    }
    return this._items.find((item) => findBy(item));
  }
  addItem(item) {
    const option = this.mapItem(item, this._items.length);
    this._items.push(option);
    this._filteredItems.push(option);
    return option;
  }
  clearSelected(keepDisabled = false) {
    this._selectionModel.clear(keepDisabled);
    this._items.forEach((item) => {
      item.selected = keepDisabled && item.selected && item.disabled;
      item.marked = false;
    });
    if (this._ngSelect.hideSelected()) {
      this.resetFilteredItems();
    }
  }
  findByLabel(term) {
    term = stripSpecialChars(term).toLocaleLowerCase();
    return this.filteredItems.find((item) => {
      const label = stripSpecialChars(item.label).toLocaleLowerCase();
      return label.substr(0, term.length) === term;
    });
  }
  filter(term) {
    if (!term) {
      this.resetFilteredItems();
      return;
    }
    this._filteredItems = [];
    term = this._ngSelect.searchFn() ? term : stripSpecialChars(term).toLocaleLowerCase();
    const match = this._ngSelect.searchFn() || this._defaultSearchFn;
    const hideSelected = this._ngSelect.hideSelected();
    for (const key of Array.from(this._groups.keys())) {
      const matchedItems = [];
      for (const item of this._groups.get(key)) {
        if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
          continue;
        }
        const searchItem = this._ngSelect.searchFn() ? item.value : item;
        if (match(term, searchItem)) {
          matchedItems.push(item);
        }
      }
      if (matchedItems.length > 0) {
        const [last] = matchedItems.slice(-1);
        if (last.parent) {
          const head = this._items.find((x) => x === last.parent);
          this._filteredItems.push(head);
        }
        this._filteredItems.push(...matchedItems);
      }
    }
  }
  resetFilteredItems() {
    if (this._filteredItems.length === this._items.length) {
      return;
    }
    if (this._ngSelect.hideSelected() && this.selectedItems.length > 0) {
      this._filteredItems = this._items.filter((x) => !x.selected);
    } else {
      this._filteredItems = this._items;
    }
  }
  unmarkItem() {
    this._markedIndex = -1;
  }
  markNextItem() {
    this._stepToItem(1);
  }
  markPreviousItem() {
    this._stepToItem(-1);
  }
  markItem(item) {
    this._markedIndex = this._filteredItems.indexOf(item);
  }
  markSelectedOrDefault(markDefault) {
    if (this._filteredItems.length === 0) {
      return;
    }
    const lastMarkedIndex = this._getLastMarkedIndex();
    if (lastMarkedIndex > -1) {
      this._markedIndex = lastMarkedIndex;
    } else {
      this._markedIndex = markDefault ? this.filteredItems.findIndex((x) => !x.disabled) : -1;
    }
  }
  resolveNested(option, key) {
    if (!isObject(option)) {
      return option;
    }
    if (key.indexOf(".") === -1) {
      return option[key];
    } else {
      const keys = key.split(".");
      let value = option;
      for (let i = 0, len = keys.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[keys[i]];
      }
      return value;
    }
  }
  mapItem(item, index) {
    const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel());
    const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
    return {
      index,
      label: isDefined(label) ? label.toString() : "",
      value,
      disabled: item.disabled,
      htmlId: `${this._ngSelect.dropdownId}-${index}`
    };
  }
  mapSelectedItems() {
    const multiple = this._ngSelect.multiple();
    for (const selected of this.selectedItems) {
      const bindValue = this._ngSelect.bindValue();
      const value = bindValue ? this.resolveNested(selected.value, bindValue) : selected.value;
      const item = isDefined(value) ? this.findItem(value) : null;
      this._selectionModel.unselect(selected, multiple);
      this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel());
    }
    if (this._ngSelect.hideSelected()) {
      this._filteredItems = this.filteredItems.filter((x) => this.selectedItems.indexOf(x) === -1);
    }
  }
  _showSelected(item) {
    this._filteredItems.push(item);
    if (item.parent) {
      const parent = item.parent;
      const parentExists = this._filteredItems.find((x) => x === parent);
      if (!parentExists) {
        this._filteredItems.push(parent);
      }
    } else if (item.children) {
      for (const child of item.children) {
        child.selected = false;
        this._filteredItems.push(child);
      }
    }
    this._filteredItems = [...this._filteredItems.sort((a, b) => a.index - b.index)];
  }
  _hideSelected(item) {
    this._filteredItems = this._filteredItems.filter((x) => x !== item);
    if (item.parent) {
      const children = item.parent.children;
      if (children.every((x) => x.selected)) {
        this._filteredItems = this._filteredItems.filter((x) => x !== item.parent);
      }
    } else if (item.children) {
      this._filteredItems = this.filteredItems.filter((x) => x.parent !== item);
    }
  }
  _defaultSearchFn(search, opt) {
    const label = stripSpecialChars(opt.label).toLocaleLowerCase();
    return label.indexOf(search) > -1;
  }
  _getNextItemIndex(steps) {
    if (steps > 0) {
      return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
    }
    return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
  }
  _stepToItem(steps) {
    if (this._filteredItems.length === 0 || this._filteredItems.every((x) => x.disabled)) {
      return;
    }
    this._markedIndex = this._getNextItemIndex(steps);
    if (this.markedItem.disabled) {
      this._stepToItem(steps);
    }
  }
  _getLastMarkedIndex() {
    if (this._ngSelect.hideSelected()) {
      return -1;
    }
    if (this._markedIndex > -1 && this.markedItem === void 0) {
      return -1;
    }
    const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
    if (this.lastSelectedItem && selectedIndex < 0) {
      return -1;
    }
    return Math.max(this.markedIndex, selectedIndex);
  }
  _groupBy(items, prop) {
    const groups = /* @__PURE__ */ new Map();
    if (items.length === 0) {
      return groups;
    }
    if (Array.isArray(items[0].value[prop])) {
      for (const item of items) {
        const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
        groups.set(item, children);
      }
      return groups;
    }
    const isFnKey = isFunction(this._ngSelect.groupBy());
    const keyFn = (item) => {
      const key = isFnKey ? prop(item.value) : item.value[prop];
      return isDefined(key) ? key : void 0;
    };
    for (const item of items) {
      const key = keyFn(item);
      const group = groups.get(key);
      if (group) {
        group.push(item);
      } else {
        groups.set(key, [item]);
      }
    }
    return groups;
  }
  _flatten(groups) {
    const isGroupByFn = isFunction(this._ngSelect.groupBy());
    const items = [];
    for (const key of Array.from(groups.keys())) {
      let i = items.length;
      if (key === void 0) {
        const withoutGroup = groups.get(void 0) || [];
        items.push(...withoutGroup.map((x) => {
          x.index = i++;
          return x;
        }));
        continue;
      }
      const isObjectKey = isObject(key);
      const parent = {
        label: isObjectKey ? "" : String(key),
        children: void 0,
        parent: null,
        index: i++,
        disabled: !this._ngSelect.selectableGroup(),
        htmlId: newId()
      };
      const groupKey = isGroupByFn ? this._ngSelect.bindLabel() : this._ngSelect.groupBy();
      const groupValue = this._ngSelect.groupValue() || (() => {
        if (isObjectKey) {
          return key.value;
        }
        return {
          [groupKey]: key
        };
      });
      const children = groups.get(key).map((x) => {
        x.parent = parent;
        x.children = void 0;
        x.index = i++;
        return x;
      });
      parent.children = children;
      parent.value = groupValue(key, children.map((x) => x.value));
      items.push(parent);
      items.push(...children);
    }
    return items;
  }
};
var NgDropdownPanelService = class _NgDropdownPanelService {
  constructor() {
    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }
  get dimensions() {
    return this._dimensions;
  }
  calculateItems(scrollPos, itemsLength, buffer) {
    const d = this._dimensions;
    const scrollHeight = d.itemHeight * itemsLength;
    const scrollTop = Math.max(0, scrollPos);
    const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
    let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
    const maxStartEnd = end;
    const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
    let start = Math.min(maxStart, Math.floor(indexByScrollTop));
    let topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
    topPadding = !isNaN(topPadding) ? topPadding : 0;
    start = !isNaN(start) ? start : -1;
    end = !isNaN(end) ? end : -1;
    start -= buffer;
    start = Math.max(0, start);
    end += buffer;
    end = Math.min(itemsLength, end);
    return {
      topPadding,
      scrollHeight,
      start,
      end
    };
  }
  setDimensions(itemHeight, panelHeight) {
    const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
    this._dimensions = {
      itemHeight,
      panelHeight,
      itemsPerViewport
    };
  }
  getScrollTo(itemTop, itemHeight, lastScroll) {
    const {
      panelHeight
    } = this.dimensions;
    const itemBottom = itemTop + itemHeight;
    const top = lastScroll;
    const bottom = top + panelHeight;
    if (panelHeight >= itemBottom && lastScroll === itemTop) {
      return null;
    }
    if (itemBottom > bottom) {
      return top + itemBottom - bottom;
    } else if (itemTop <= top) {
      return itemTop;
    }
    return null;
  }
  static {
    this.\u0275fac = function NgDropdownPanelService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgDropdownPanelService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgDropdownPanelService,
      factory: _NgDropdownPanelService.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDropdownPanelService, [{
    type: Injectable
  }], null, null);
})();
var CSS_POSITIONS = ["top", "right", "bottom", "left"];
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var NgDropdownPanelComponent = class _NgDropdownPanelComponent {
  constructor() {
    this._renderer = inject(Renderer2);
    this._zone = inject(NgZone);
    this._panelService = inject(NgDropdownPanelService);
    this._document = inject(DOCUMENT, {
      optional: true
    });
    this._dropdown = inject(ElementRef).nativeElement;
    this.items = input([]);
    this.markedItem = input(void 0);
    this.position = input("auto");
    this.appendTo = input(void 0);
    this.bufferAmount = input(void 0);
    this.virtualScroll = input(false, {
      transform: booleanAttribute
    });
    this.headerTemplate = input(void 0);
    this.footerTemplate = input(void 0);
    this.filterValue = input(null);
    this.ariaLabelDropdown = input(null);
    this.update = output();
    this.scroll = output();
    this.scrollToEnd = output();
    this.outsideClick = output();
    this.contentElementRef = viewChild("content", {
      read: ElementRef
    });
    this.scrollElementRef = viewChild("scroll", {
      read: ElementRef
    });
    this.paddingElementRef = viewChild("padding", {
      read: ElementRef
    });
    this._destroy$ = new Subject();
    this._virtualPadding = computed(() => this.paddingElementRef()?.nativeElement);
    this._scrollablePanel = computed(() => this.scrollElementRef()?.nativeElement);
    this._contentPanel = computed(() => this.contentElementRef()?.nativeElement);
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
  }
  get currentPosition() {
    return this._currentPosition;
  }
  get itemsLength() {
    return this._itemsLength;
  }
  set itemsLength(value) {
    if (value !== this._itemsLength) {
      this._itemsLength = value;
      this._onItemsLengthChanged();
    }
  }
  get _startOffset() {
    if (this.markedItem()) {
      const {
        itemHeight,
        panelHeight
      } = this._panelService.dimensions;
      const offset = this.markedItem().index * itemHeight;
      return panelHeight > offset ? 0 : offset;
    }
    return 0;
  }
  ngOnInit() {
    this._select = this._dropdown.parentElement;
    this._handleScroll();
    this._handleOutsideClick();
    this._appendDropdown();
    this._setupMousedownListener();
  }
  ngOnChanges(changes) {
    if (changes.items) {
      const change = changes.items;
      this._onItemsChange(change.currentValue, change.firstChange);
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
    if (this.appendTo()) {
      this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
    }
  }
  scrollTo(option, startFromOption = false) {
    if (!option) {
      return;
    }
    const index = this.items().indexOf(option);
    if (index < 0 || index >= this.itemsLength) {
      return;
    }
    let scrollTo;
    if (this.virtualScroll()) {
      const itemHeight = this._panelService.dimensions.itemHeight;
      scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
    } else {
      const item = this._dropdown.querySelector(`#${option.htmlId}`);
      const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
      scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
    }
    if (isDefined(scrollTo)) {
      this._scrollablePanel().scrollTop = scrollTo;
    }
  }
  scrollToTag() {
    const panel = this._scrollablePanel();
    panel.scrollTop = panel.scrollHeight - panel.clientHeight;
  }
  adjustPosition() {
    this._updateYPosition();
  }
  _handleDropdownPosition() {
    this._currentPosition = this._calculateCurrentPosition(this._dropdown);
    if (CSS_POSITIONS.includes(this._currentPosition)) {
      this._updateDropdownClass(this._currentPosition);
    } else {
      this._updateDropdownClass("bottom");
    }
    if (this.appendTo()) {
      this._updateYPosition();
    }
    this._dropdown.style.opacity = "1";
  }
  _updateDropdownClass(currentPosition) {
    CSS_POSITIONS.forEach((position) => {
      const REMOVE_CSS_CLASS = `ng-select-${position}`;
      this._renderer.removeClass(this._dropdown, REMOVE_CSS_CLASS);
      this._renderer.removeClass(this._select, REMOVE_CSS_CLASS);
    });
    const ADD_CSS_CLASS = `ng-select-${currentPosition}`;
    this._renderer.addClass(this._dropdown, ADD_CSS_CLASS);
    this._renderer.addClass(this._select, ADD_CSS_CLASS);
  }
  _handleScroll() {
    this._zone.runOutsideAngular(() => {
      if (!this._scrollablePanel()) {
        return;
      }
      fromEvent(this._scrollablePanel(), "scroll").pipe(takeUntil(this._destroy$), auditTime(0, SCROLL_SCHEDULER)).subscribe((e) => {
        const path = e.path || e.composedPath && e.composedPath();
        if (!path || path.length === 0 && !e.target) {
          return;
        }
        const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
        this._onContentScrolled(scrollTop);
      });
    });
  }
  _handleOutsideClick() {
    if (!this._document) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      merge(fromEvent(this._document, "touchstart", {
        capture: true
      }), fromEvent(this._document, "click", {
        capture: true
      })).pipe(takeUntil(this._destroy$)).subscribe(($event) => this._checkToClose($event));
    });
  }
  _checkToClose($event) {
    if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
      return;
    }
    const path = $event.path || $event.composedPath && $event.composedPath();
    if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
      return;
    }
    this._zone.run(() => this.outsideClick.emit());
  }
  _onItemsChange(items = [], firstChange) {
    this._scrollToEndFired = false;
    this.itemsLength = items.length;
    if (this.virtualScroll()) {
      this._updateItemsRange(firstChange);
    } else {
      this._setVirtualHeight();
      this._updateItems(firstChange);
    }
  }
  _updateItems(firstChange) {
    this.update.emit(this.items());
    if (firstChange === false) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        const panelHeight = this._scrollablePanel().clientHeight;
        this._panelService.setDimensions(0, panelHeight);
        this._handleDropdownPosition();
        this.scrollTo(this.markedItem(), firstChange);
      });
    });
  }
  _updateItemsRange(firstChange) {
    this._zone.runOutsideAngular(() => {
      this._measureDimensions().then(() => {
        if (firstChange) {
          this._renderItemsRange(this._startOffset);
          this._handleDropdownPosition();
        } else {
          this._renderItemsRange();
        }
      });
    });
  }
  _onContentScrolled(scrollTop) {
    if (this.virtualScroll()) {
      this._renderItemsRange(scrollTop);
    }
    this._lastScrollPosition = scrollTop;
    this._fireScrollToEnd(scrollTop);
  }
  _updateVirtualHeight(height) {
    if (this._updateScrollHeight) {
      this._virtualPadding().style.height = `${height}px`;
      this._updateScrollHeight = false;
    }
  }
  _setVirtualHeight() {
    if (!this._virtualPadding()) {
      return;
    }
    this._virtualPadding().style.height = `0px`;
  }
  _onItemsLengthChanged() {
    this._updateScrollHeight = true;
  }
  _renderItemsRange(scrollTop = null) {
    if (scrollTop && this._lastScrollPosition === scrollTop) {
      return;
    }
    scrollTop = scrollTop || this._scrollablePanel().scrollTop;
    const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount());
    this._updateVirtualHeight(range.scrollHeight);
    this._contentPanel().style.transform = `translateY(${range.topPadding}px)`;
    this._zone.run(() => {
      this.update.emit(this.items().slice(range.start, range.end));
      this.scroll.emit({
        start: range.start,
        end: range.end
      });
    });
    if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
      this._scrollablePanel().scrollTop = scrollTop;
      this._lastScrollPosition = scrollTop;
    }
  }
  _measureDimensions() {
    if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
      return Promise.resolve(this._panelService.dimensions);
    }
    const [first] = this.items();
    this.update.emit([first]);
    return Promise.resolve().then(() => {
      const option = this._dropdown.querySelector(`#${first.htmlId}`);
      const optionHeight = option.clientHeight;
      this._virtualPadding().style.height = `${optionHeight * this.itemsLength}px`;
      const panelHeight = this._scrollablePanel().clientHeight;
      this._panelService.setDimensions(optionHeight, panelHeight);
      return this._panelService.dimensions;
    });
  }
  _fireScrollToEnd(scrollTop) {
    if (this._scrollToEndFired || scrollTop === 0) {
      return;
    }
    const padding = this.virtualScroll() ? this._virtualPadding() : this._contentPanel();
    if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
      this._zone.run(() => this.scrollToEnd.emit());
      this._scrollToEndFired = true;
    }
  }
  _calculateCurrentPosition(dropdownEl) {
    const position = this.position();
    if (position !== "auto") {
      return position;
    }
    const selectRect = this._select.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = selectRect.top + window.pageYOffset;
    const height = selectRect.height;
    const dropdownHeight = dropdownEl.getBoundingClientRect().height;
    if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
      return "top";
    } else {
      return "bottom";
    }
  }
  _appendDropdown() {
    if (!this.appendTo()) {
      return;
    }
    this._parent = this._dropdown.shadowRoot ? this._dropdown.shadowRoot.querySelector(this.appendTo()) : document.querySelector(this.appendTo());
    if (!this._parent) {
      throw new Error(`appendTo selector ${this.appendTo()} did not found any parent element`);
    }
    this._updateXPosition();
    this._parent.appendChild(this._dropdown);
  }
  _updateXPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const isRTL = document.documentElement.dir === "rtl";
    const offsetLeft = select.left - parent.left;
    if (isRTL) {
      const offsetRight = parent.right - select.right;
      this._dropdown.style.right = offsetRight + "px";
      this._dropdown.style.left = "auto";
    } else {
      this._dropdown.style.left = offsetLeft + "px";
      this._dropdown.style.right = "auto";
    }
    this._dropdown.style.width = select.width + "px";
    this._dropdown.style.minWidth = select.width + "px";
  }
  _updateYPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const delta = select.height;
    if (this._currentPosition === "top") {
      const offsetBottom = parent.bottom - select.bottom;
      this._dropdown.style.bottom = offsetBottom + delta + "px";
      this._dropdown.style.top = "auto";
    } else if (this._currentPosition === "bottom") {
      const offsetTop = select.top - parent.top;
      this._dropdown.style.top = offsetTop + delta + "px";
      this._dropdown.style.bottom = "auto";
    }
  }
  _setupMousedownListener() {
    this._zone.runOutsideAngular(() => {
      fromEvent(this._dropdown, "mousedown").pipe(takeUntil(this._destroy$)).subscribe((event) => {
        const target = event.target;
        if (target.tagName === "INPUT") {
          return;
        }
        event.preventDefault();
      });
    });
  }
  static {
    this.\u0275fac = function NgDropdownPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgDropdownPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgDropdownPanelComponent,
      selectors: [["ng-dropdown-panel"]],
      viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx.contentElementRef, _c0, 5, ElementRef);
          \u0275\u0275viewQuerySignal(ctx.scrollElementRef, _c1, 5, ElementRef);
          \u0275\u0275viewQuerySignal(ctx.paddingElementRef, _c2, 5, ElementRef);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance(3);
        }
      },
      inputs: {
        items: [1, "items"],
        markedItem: [1, "markedItem"],
        position: [1, "position"],
        appendTo: [1, "appendTo"],
        bufferAmount: [1, "bufferAmount"],
        virtualScroll: [1, "virtualScroll"],
        headerTemplate: [1, "headerTemplate"],
        footerTemplate: [1, "footerTemplate"],
        filterValue: [1, "filterValue"],
        ariaLabelDropdown: [1, "ariaLabelDropdown"]
      },
      outputs: {
        update: "update",
        scroll: "scroll",
        scrollToEnd: "scrollToEnd",
        outsideClick: "outsideClick"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c3,
      decls: 9,
      vars: 7,
      consts: [["scroll", ""], ["padding", ""], ["content", ""], [1, "ng-dropdown-header"], ["role", "listbox", 1, "ng-dropdown-panel-items", "scroll-host"], [1, "ng-dropdown-footer"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgDropdownPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, NgDropdownPanelComponent_Conditional_0_Template, 2, 4, "div", 3);
          \u0275\u0275elementStart(1, "div", 4, 0);
          \u0275\u0275element(3, "div", null, 1);
          \u0275\u0275elementStart(5, "div", null, 2);
          \u0275\u0275projection(7);
          \u0275\u0275elementEnd()();
          \u0275\u0275template(8, NgDropdownPanelComponent_Conditional_8_Template, 2, 4, "div", 5);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.headerTemplate() ? 0 : -1);
          \u0275\u0275advance();
          \u0275\u0275attribute("aria-label", ctx.ariaLabelDropdown());
          \u0275\u0275advance(2);
          \u0275\u0275classProp("total-padding", ctx.virtualScroll());
          \u0275\u0275advance(2);
          \u0275\u0275classProp("scrollable-content", ctx.virtualScroll() && ctx.items().length);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.footerTemplate() ? 8 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDropdownPanelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "ng-dropdown-panel",
      template: `
		@if (headerTemplate()) {
			<div class="ng-dropdown-header">
				<ng-container [ngTemplateOutlet]="headerTemplate()" [ngTemplateOutletContext]="{ searchTerm: filterValue() }" />
			</div>
		}
		<div #scroll role="listbox" class="ng-dropdown-panel-items scroll-host" [attr.aria-label]="ariaLabelDropdown()">
			<div #padding [class.total-padding]="virtualScroll()"></div>
			<div #content [class.scrollable-content]="virtualScroll() && items().length">
				<ng-content />
			</div>
		</div>
		@if (footerTemplate()) {
			<div class="ng-dropdown-footer">
				<ng-container [ngTemplateOutlet]="footerTemplate()" [ngTemplateOutletContext]="{ searchTerm: filterValue() }" />
			</div>
		}
	`,
      imports: [NgTemplateOutlet]
    }]
  }], null, null);
})();
var NgOptionComponent = class _NgOptionComponent {
  constructor() {
    this.value = input();
    this.disabled = input(false, {
      transform: booleanAttribute
    });
    this.elementRef = inject(ElementRef);
    this.label = signal("");
    this.stateChange = computed(() => ({
      value: this.value(),
      disabled: this.disabled(),
      label: this.label()
    }));
    this.stateChange$ = toObservable(this.stateChange);
    afterNextRender(() => {
      if (this._label !== this.label()) {
        this.label.set(this._label);
      }
    });
  }
  get _label() {
    return (this.elementRef.nativeElement.innerHTML || "").trim();
  }
  static {
    this.\u0275fac = function NgOptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOptionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgOptionComponent,
      selectors: [["ng-option"]],
      inputs: {
        value: [1, "value"],
        disabled: [1, "disabled"]
      },
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function NgOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptionComponent, [{
    type: Component,
    args: [{
      selector: "ng-option",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`
    }]
  }], () => [], null);
})();
var KeyCode;
(function(KeyCode2) {
  KeyCode2["Tab"] = "Tab";
  KeyCode2["Enter"] = "Enter";
  KeyCode2["Esc"] = "Escape";
  KeyCode2["Space"] = " ";
  KeyCode2["ArrowUp"] = "ArrowUp";
  KeyCode2["ArrowDown"] = "ArrowDown";
  KeyCode2["Backspace"] = "Backspace";
})(KeyCode || (KeyCode = {}));
function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}
var DefaultSelectionModel = class {
  constructor() {
    this._selected = [];
  }
  get value() {
    return this._selected;
  }
  select(item, multiple, groupAsModel) {
    item.selected = true;
    if (!item.children || !multiple && groupAsModel) {
      this._selected.push(item);
    }
    if (multiple) {
      if (item.parent) {
        const childrenCount = item.parent.children.length;
        const selectedCount = item.parent.children.filter((x) => x.selected).length;
        item.parent.selected = childrenCount === selectedCount;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, true);
        this._removeChildren(item);
        if (groupAsModel && this._activeChildren(item)) {
          this._selected = [...this._selected.filter((x) => x.parent !== item), item];
        } else {
          this._selected = [...this._selected, ...item.children.filter((x) => !x.disabled)];
        }
      }
    }
  }
  unselect(item, multiple) {
    this._selected = this._selected.filter((x) => x !== item);
    item.selected = false;
    if (multiple) {
      if (item.parent && item.parent.selected) {
        const children = item.parent.children;
        this._removeParent(item.parent);
        this._removeChildren(item.parent);
        this._selected.push(...children.filter((x) => x !== item && !x.disabled));
        item.parent.selected = false;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, false);
        this._removeChildren(item);
      }
    }
  }
  clear(keepDisabled) {
    this._selected = keepDisabled ? this._selected.filter((x) => x.disabled) : [];
  }
  _setChildrenSelectedState(children, selected) {
    for (const child of children) {
      if (child.disabled) {
        continue;
      }
      child.selected = selected;
    }
  }
  _removeChildren(parent) {
    this._selected = [...this._selected.filter((x) => x.parent !== parent), ...parent.children.filter((x) => x.parent === parent && x.disabled && x.selected)];
  }
  _removeParent(parent) {
    this._selected = this._selected.filter((x) => x !== parent);
  }
  _activeChildren(item) {
    return item.children.every((x) => !x.disabled || x.selected);
  }
};
var SELECTION_MODEL_FACTORY = new InjectionToken("ng-select-selection-model");
var NgSelectComponent = class _NgSelectComponent {
  constructor() {
    this.classes = inject(new HostAttributeToken("class"), {
      optional: true
    });
    this.autoFocus = inject(new HostAttributeToken("autofocus"), {
      optional: true
    });
    this.config = inject(NgSelectConfig);
    this._cd = inject(ChangeDetectorRef);
    this._console = inject(ConsoleService);
    this.bindLabel = model(void 0);
    this.bindValue = model(void 0);
    this.appearance = model(void 0);
    this.ariaLabelDropdown = input("Options List");
    this.ariaLabel = input(void 0);
    this.markFirst = input(true, {
      transform: booleanAttribute
    });
    this.placeholder = input(this.config.placeholder);
    this.fixedPlaceholder = input(false);
    this.notFoundText = input(void 0);
    this.typeToSearchText = input(void 0);
    this.preventToggleOnRightClick = input(false);
    this.addTagText = input(void 0);
    this.loadingText = input(void 0);
    this.clearAllText = input(void 0);
    this.dropdownPosition = input("auto");
    this.appendTo = input(void 0);
    this.loading = input(false, {
      transform: booleanAttribute
    });
    this.closeOnSelect = input(true, {
      transform: booleanAttribute
    });
    this.hideSelected = input(false, {
      transform: booleanAttribute
    });
    this.selectOnTab = input(false, {
      transform: booleanAttribute
    });
    this.openOnEnter = input(void 0, {
      transform: booleanAttribute
    });
    this.maxSelectedItems = input(void 0, {
      transform: numberAttribute
    });
    this.groupBy = input(void 0);
    this.groupValue = input(void 0);
    this.bufferAmount = input(4, {
      transform: numberAttribute
    });
    this.virtualScroll = input(void 0, {
      transform: booleanAttribute
    });
    this.selectableGroup = input(false, {
      transform: booleanAttribute
    });
    this.tabFocusOnClearButton = input();
    this.selectableGroupAsModel = input(true, {
      transform: booleanAttribute
    });
    this.searchFn = input(null);
    this.trackByFn = input(null);
    this.clearOnBackspace = input(true, {
      transform: booleanAttribute
    });
    this.labelForId = input(null);
    this.inputAttrs = input({});
    this.tabIndex = input(void 0, {
      transform: numberAttribute
    });
    this.readonly = input(false, {
      transform: booleanAttribute
    });
    this.searchWhileComposing = input(true, {
      transform: booleanAttribute
    });
    this.minTermLength = input(0, {
      transform: numberAttribute
    });
    this.editableSearchTerm = input(false, {
      transform: booleanAttribute
    });
    this.ngClass = input(null);
    this.typeahead = input(void 0);
    this.multiple = input(false, {
      transform: booleanAttribute
    });
    this.addTag = input(false);
    this.searchable = input(true, {
      transform: booleanAttribute
    });
    this.clearable = input(true, {
      transform: booleanAttribute
    });
    this.isOpen = model(false);
    this.blurEvent = output({
      alias: "blur"
    });
    this.focusEvent = output({
      alias: "focus"
    });
    this.changeEvent = output({
      alias: "change"
    });
    this.openEvent = output({
      alias: "open"
    });
    this.closeEvent = output({
      alias: "close"
    });
    this.searchEvent = output({
      alias: "search"
    });
    this.clearEvent = output({
      alias: "clear"
    });
    this.addEvent = output({
      alias: "add"
    });
    this.removeEvent = output({
      alias: "remove"
    });
    this.scroll = output({
      alias: "scroll"
    });
    this.scrollToEnd = output({
      alias: "scrollToEnd"
    });
    this.optionTemplate = contentChild(NgOptionTemplateDirective, {
      read: TemplateRef
    });
    this.optgroupTemplate = contentChild(NgOptgroupTemplateDirective, {
      read: TemplateRef
    });
    this.labelTemplate = contentChild(NgLabelTemplateDirective, {
      read: TemplateRef
    });
    this.multiLabelTemplate = contentChild(NgMultiLabelTemplateDirective, {
      read: TemplateRef
    });
    this.headerTemplate = contentChild(NgHeaderTemplateDirective, {
      read: TemplateRef
    });
    this.footerTemplate = contentChild(NgFooterTemplateDirective, {
      read: TemplateRef
    });
    this.notFoundTemplate = contentChild(NgNotFoundTemplateDirective, {
      read: TemplateRef
    });
    this.placeholderTemplate = contentChild(NgPlaceholderTemplateDirective, {
      read: TemplateRef
    });
    this.typeToSearchTemplate = contentChild(NgTypeToSearchTemplateDirective, {
      read: TemplateRef
    });
    this.loadingTextTemplate = contentChild(NgLoadingTextTemplateDirective, {
      read: TemplateRef
    });
    this.tagTemplate = contentChild(NgTagTemplateDirective, {
      read: TemplateRef
    });
    this.loadingSpinnerTemplate = contentChild(NgLoadingSpinnerTemplateDirective, {
      read: TemplateRef
    });
    this.clearButtonTemplate = contentChild(NgClearButtonTemplateDirective, {
      read: TemplateRef
    });
    this.dropdownPanel = viewChild(forwardRef(() => NgDropdownPanelComponent));
    this.searchInput = viewChild("searchInput");
    this.clearButton = viewChild("clearButton");
    this.ngOptions = contentChildren(NgOptionComponent, {
      descendants: true
    });
    this.ngOptionsObservable = toObservable(this.ngOptions);
    this.useDefaultClass = true;
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this.tabFocusOnClear = signal(true);
    this._defaultLabel = "label";
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new Subject();
    this._keyPress$ = new Subject();
    this.items = model([]);
    this._disabled = signal(false);
    this.compareWith = input(void 0, {
      transform: (fn) => {
        if (fn !== void 0 && fn !== null && !isFunction(fn)) {
          throw Error("`compareWith` must be a function.");
        }
        return fn;
      }
    });
    this.clearSearchOnAdd = input(void 0);
    this.clearSearchOnAddValue = computed(() => {
      if (isDefined(this.clearSearchOnAdd())) {
        return this.clearSearchOnAdd();
      }
      if (isDefined(this.config.clearSearchOnAdd)) {
        return this.config.clearSearchOnAdd;
      }
      return this.closeOnSelect();
    });
    this.deselectOnClick = input();
    this.deselectOnClickValue = computed(() => {
      if (isDefined(this.deselectOnClick())) {
        return this.deselectOnClick();
      }
      if (isDefined(this.config.deselectOnClick)) {
        return this.config.deselectOnClick;
      }
      return this.multiple();
    });
    this.keyDownFn = input((_) => true);
    this.clearItem = (item) => {
      const option = this.selectedItems.find((x) => x.value === item);
      this.unselect(option);
    };
    this.trackByOption = (_, item) => {
      if (this.trackByFn()) {
        return this.trackByFn()(item.value);
      }
      return item;
    };
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    const config = this.config;
    const newSelectionModel = inject(SELECTION_MODEL_FACTORY, {
      optional: true
    });
    const _elementRef = inject(ElementRef);
    this._mergeGlobalConfig(config);
    this.itemsList = new ItemsList(this, newSelectionModel ? newSelectionModel() : DefaultSelectionModelFactory());
    this.element = _elementRef.nativeElement;
  }
  get filtered() {
    return !!this.searchTerm && this.searchable() || this._isComposing;
  }
  get single() {
    return !this.multiple();
  }
  get disabled() {
    return this.readonly() || this._disabled();
  }
  get selectedItems() {
    return this.itemsList.selectedItems;
  }
  get selectedValues() {
    return this.selectedItems.map((x) => x.value);
  }
  get hasValue() {
    return this.selectedItems.length > 0;
  }
  get currentPanelPosition() {
    if (this.dropdownPanel()) {
      return this.dropdownPanel().currentPosition;
    }
    return void 0;
  }
  get showAddTag() {
    if (!this._validTerm) {
      return false;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.addTag() && !this.itemsList.filteredItems.some((x) => x.label.toLowerCase() === term) && (!this.hideSelected() && this.isOpen() || !this.selectedItems.some((x) => x.label.toLowerCase() === term)) && !this.loading();
  }
  get _editableSearchTerm() {
    return this.editableSearchTerm() && !this.multiple();
  }
  get _isTypeahead() {
    return this.typeahead() && this.typeahead().observed;
  }
  get _validTerm() {
    const term = this.searchTerm?.trim();
    return term && term.length >= this.minTermLength();
  }
  ngOnInit() {
    this._handleKeyPresses();
    this._setInputAttributes();
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this.itemsList.clearSelected();
    }
    if (changes.items) {
      this._itemsAreUsed = true;
      this._setItems(changes.items.currentValue || []);
    }
    if (changes.isOpen) {
      this._manualOpen = isDefined(changes.isOpen.currentValue);
    }
    if (changes.groupBy) {
      if (!changes.items) {
        this._setItems([...this.items()]);
      }
    }
    if (changes.inputAttrs) {
      this._setInputAttributes();
    }
    this._setTabFocusOnClear();
  }
  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this.escapeHTML = false;
      this._setItemsFromNgOptions();
    }
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  handleKeyDown($event) {
    const keyName = $event.key;
    if (Object.values(KeyCode).includes(keyName)) {
      if (this.keyDownFn()($event) === false) {
        return;
      }
      this.handleKeyCode($event);
    } else if (keyName && keyName.length === 1) {
      this._keyPress$.next(keyName.toLocaleLowerCase());
    }
  }
  handleKeyCode($event) {
    const target = $event.target;
    if (this.clearButton() && this.clearButton().nativeElement === target) {
      this.handleKeyCodeClear($event);
    } else {
      this.handleKeyCodeInput($event);
    }
  }
  handleKeyCodeInput($event) {
    switch ($event.key) {
      case KeyCode.ArrowDown:
        this._handleArrowDown($event);
        break;
      case KeyCode.ArrowUp:
        this._handleArrowUp($event);
        break;
      case KeyCode.Space:
        this._handleSpace($event);
        break;
      case KeyCode.Enter:
        this._handleEnter($event);
        break;
      case KeyCode.Tab:
        this._handleTab($event);
        break;
      case KeyCode.Esc:
        this.close();
        $event.preventDefault();
        break;
      case KeyCode.Backspace:
        this._handleBackspace();
        break;
    }
  }
  handleKeyCodeClear($event) {
    switch ($event.key) {
      case KeyCode.Enter:
        this.handleClearClick();
        $event.preventDefault();
        break;
    }
  }
  handleMousedown($event) {
    if (this.disabled) {
      return;
    }
    if (this.preventToggleOnRightClick() && $event.button === 2) {
      return false;
    }
    const target = $event.target;
    if (target.tagName !== "INPUT") {
      $event.preventDefault();
    }
    if (target.classList.contains("ng-clear-wrapper")) {
      this.handleClearClick();
      return;
    }
    if (target.classList.contains("ng-arrow-wrapper")) {
      this.handleArrowClick();
      return;
    }
    if (target.classList.contains("ng-value-icon")) {
      return;
    }
    if (!this.focused) {
      this.focus();
    }
    if (this.searchable()) {
      this.open();
    } else {
      this.toggle();
    }
  }
  handleArrowClick() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  handleClearClick() {
    if (this.hasValue) {
      this.itemsList.clearSelected(true);
      this._updateNgModel();
    }
    this._clearSearch();
    this.focus();
    this.clearEvent.emit();
    this._onSelectionChanged();
  }
  clearModel() {
    if (!this.clearable()) {
      return;
    }
    this.itemsList.clearSelected();
    this._updateNgModel();
  }
  writeValue(value) {
    this.itemsList.clearSelected();
    this._handleWriteValue(value);
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(state) {
    this._disabled.set(state);
    this._cd.markForCheck();
  }
  toggle() {
    if (!this.isOpen()) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    if (this.disabled || this.isOpen() || this._manualOpen) {
      return;
    }
    if (!this._isTypeahead && !this.addTag() && this.itemsList.noItemsToSelect) {
      return;
    }
    this.isOpen.set(true);
    this.itemsList.markSelectedOrDefault(this.markFirst());
    this.openEvent.emit();
    if (!this.searchTerm) {
      this.focus();
    }
    this.detectChanges();
  }
  close() {
    if (!this.isOpen() || this._manualOpen) {
      return;
    }
    this.isOpen.set(false);
    this._isComposing = false;
    if (!this._editableSearchTerm) {
      this._clearSearch();
    } else {
      this.itemsList.resetFilteredItems();
    }
    this.itemsList.unmarkItem();
    this._onTouched();
    this.closeEvent.emit();
    this._cd.markForCheck();
  }
  toggleItem(item) {
    if (!item || item.disabled || this.disabled) {
      return;
    }
    if (this.deselectOnClickValue() && item.selected) {
      this.unselect(item);
    } else {
      this.select(item);
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
  }
  select(item) {
    if (!item.selected) {
      this.itemsList.select(item);
      if (this.clearSearchOnAddValue() && !this._editableSearchTerm) {
        this._clearSearch();
      }
      this._updateNgModel();
      if (this.multiple()) {
        this.addEvent.emit(item.value);
      }
    }
    if (this.closeOnSelect() || this.itemsList.noItemsToSelect) {
      this.close();
    }
    this._onSelectionChanged();
  }
  focus() {
    this.searchInput().nativeElement.focus();
  }
  blur() {
    this.searchInput().nativeElement.blur();
  }
  unselect(item) {
    if (!item) {
      return;
    }
    this.itemsList.unselect(item);
    this.focus();
    this._updateNgModel();
    this.removeEvent.emit(item.value);
    this._onSelectionChanged();
  }
  selectTag() {
    let tag;
    if (isFunction(this.addTag())) {
      tag = this.addTag()(this.searchTerm);
    } else {
      tag = this._primitive ? this.searchTerm : {
        [this.bindLabel()]: this.searchTerm
      };
    }
    const handleTag = (item) => this._isTypeahead || !this.isOpen() ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
    if (isPromise(tag)) {
      tag.then((item) => this.select(handleTag(item))).catch(() => {
      });
    } else if (tag) {
      this.select(handleTag(tag));
    }
  }
  showClear() {
    return this.clearable() && (this.hasValue || this.searchTerm) && !this.disabled;
  }
  focusOnClear() {
    this.blur();
    if (this.clearButton()) {
      this.clearButton().nativeElement.focus();
    }
  }
  showNoItemsFound() {
    const empty = this.itemsList.filteredItems.length === 0;
    return (empty && !this._isTypeahead && !this.loading() || empty && this._isTypeahead && this._validTerm && !this.loading()) && !this.showAddTag;
  }
  showTypeToSearch() {
    const empty = this.itemsList.filteredItems.length === 0;
    return empty && this._isTypeahead && !this._validTerm && !this.loading();
  }
  onCompositionStart() {
    this._isComposing = true;
  }
  onCompositionEnd(term) {
    this._isComposing = false;
    if (this.searchWhileComposing()) {
      return;
    }
    this.filter(term);
  }
  filter(term) {
    if (this._isComposing && !this.searchWhileComposing()) {
      return;
    }
    this.searchTerm = term;
    if (this._isTypeahead && (this._validTerm || this.minTermLength() === 0)) {
      this.typeahead().next(term);
    }
    if (!this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
      if (this.isOpen()) {
        this.itemsList.markSelectedOrDefault(this.markFirst());
      }
    }
    this.searchEvent.emit({
      term,
      items: this.itemsList.filteredItems.map((x) => x.value)
    });
    this.open();
  }
  onInputFocus($event) {
    if (this.focused) {
      return;
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.element.classList.add("ng-select-focused");
    this.focusEvent.emit($event);
    this.focused = true;
  }
  onInputBlur($event) {
    this.element.classList.remove("ng-select-focused");
    this.blurEvent.emit($event);
    if (!this.isOpen() && !this.disabled) {
      this._onTouched();
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.focused = false;
  }
  onItemHover(item) {
    if (item.disabled) {
      return;
    }
    this.itemsList.markItem(item);
  }
  detectChanges() {
    if (!this._cd.destroyed) {
      this._cd.detectChanges();
    }
  }
  _setSearchTermFromItems() {
    const selected = this.selectedItems?.[0];
    this.searchTerm = selected?.label ?? null;
  }
  _setItems(items) {
    const firstItem = items[0];
    this.bindLabel.set(this.bindLabel() || this._defaultLabel);
    this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel() === this._defaultLabel;
    this.itemsList.setItems(items);
    if (items.length > 0 && this.hasValue) {
      this.itemsList.mapSelectedItems();
    }
    if (this.isOpen() && isDefined(this.searchTerm) && !this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
    }
    if (this._isTypeahead || this.isOpen()) {
      this.itemsList.markSelectedOrDefault(this.markFirst());
    }
  }
  _setItemsFromNgOptions() {
    const mapNgOptions = (options) => {
      const items = options.map((option) => ({
        $ngOptionValue: option.value(),
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled()
      })) ?? [];
      this.items.set(items);
      this.itemsList.setItems(items);
      if (this.hasValue) {
        this.itemsList.mapSelectedItems();
      }
    };
    const handleOptionChange = (options) => {
      return merge(...options.map((option) => option.stateChange$)).pipe(tap((option) => {
        const item = this.itemsList.findItem(option.value);
        item.disabled = option.disabled;
        item.label = option.label || item.label;
      }));
    };
    this.ngOptionsObservable.pipe(startWith(this.ngOptions()), takeUntil(this._destroy$), tap((options) => {
      this.bindLabel.set(this._defaultLabel);
      mapNgOptions(options);
      this._cd.detectChanges();
    }), switchMap((options) => handleOptionChange(options))).subscribe();
  }
  _isValidWriteValue(value) {
    if (!isDefined(value) || this.multiple() && value === "" || Array.isArray(value) && value.length === 0) {
      return false;
    }
    const validateBinding = (item) => {
      if (!isDefined(this.compareWith()) && isObject(item) && this.bindValue()) {
        this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
        return false;
      }
      return true;
    };
    if (this.multiple()) {
      if (!Array.isArray(value)) {
        this._console.warn("Multiple select ngModel should be array.");
        return false;
      }
      return value.every((item) => validateBinding(item));
    } else {
      return validateBinding(value);
    }
  }
  _handleWriteValue(ngModel) {
    if (!this._isValidWriteValue(ngModel)) {
      return;
    }
    const select = (val) => {
      let item = this.itemsList.findItem(val);
      if (item) {
        this.itemsList.select(item);
      } else {
        const isValObject = isObject(val);
        const isPrimitive = !isValObject && !this.bindValue();
        if (isValObject || isPrimitive) {
          this.itemsList.select(this.itemsList.mapItem(val, null));
        } else if (this.bindValue()) {
          item = {
            [this.bindLabel()]: null,
            [this.bindValue()]: val
          };
          this.itemsList.select(this.itemsList.mapItem(item, null));
        }
      }
    };
    if (this.multiple()) {
      ngModel.forEach((item) => select(item));
    } else {
      select(ngModel);
    }
  }
  _handleKeyPresses() {
    if (this.searchable()) {
      return;
    }
    this._keyPress$.pipe(takeUntil(this._destroy$), tap((letter) => this._pressedKeys.push(letter)), debounceTime(200), filter(() => this._pressedKeys.length > 0), map(() => this._pressedKeys.join(""))).subscribe((term) => {
      const item = this.itemsList.findByLabel(term);
      if (item) {
        if (this.isOpen()) {
          this.itemsList.markItem(item);
          this._scrollToMarked();
          this._cd.markForCheck();
        } else {
          this.select(item);
        }
      }
      this._pressedKeys = [];
    });
  }
  _setInputAttributes() {
    const input2 = this.searchInput().nativeElement;
    const attributes = __spreadValues({
      type: "text",
      autocorrect: "off",
      autocapitalize: "off",
      autocomplete: "off",
      "aria-controls": this.dropdownId
    }, this.inputAttrs());
    for (const key of Object.keys(attributes)) {
      input2.setAttribute(key, attributes[key]);
    }
  }
  _setTabFocusOnClear() {
    this.tabFocusOnClear.set(isDefined(this.tabFocusOnClearButton()) ? !!this.tabFocusOnClearButton() : this.config.tabFocusOnClear);
  }
  _updateNgModel() {
    const model2 = [];
    for (const item of this.selectedItems) {
      if (this.bindValue()) {
        let value = null;
        if (item.children) {
          const groupKey = this.groupValue() ? this.bindValue() : this.groupBy();
          value = item.value[groupKey || this.groupBy()];
        } else {
          value = this.itemsList.resolveNested(item.value, this.bindValue());
        }
        model2.push(value);
      } else {
        model2.push(item.value);
      }
    }
    const selected = this.selectedItems.map((x) => x.value);
    if (this.multiple()) {
      this._onChange(model2);
      this.changeEvent.emit(selected);
    } else {
      this._onChange(isDefined(model2[0]) ? model2[0] : null);
      this.changeEvent.emit(selected[0]);
    }
    this._cd.markForCheck();
  }
  _clearSearch() {
    if (!this.searchTerm) {
      return;
    }
    this._changeSearch(null);
    this.itemsList.resetFilteredItems();
  }
  _changeSearch(searchTerm) {
    this.searchTerm = searchTerm;
    if (this._isTypeahead) {
      this.typeahead().next(searchTerm);
    }
  }
  _scrollToMarked() {
    if (!this.isOpen() || !this.dropdownPanel()) {
      return;
    }
    this.dropdownPanel().scrollTo(this.itemsList.markedItem);
  }
  _scrollToTag() {
    if (!this.isOpen() || !this.dropdownPanel()) {
      return;
    }
    this.dropdownPanel().scrollToTag();
  }
  _onSelectionChanged() {
    const appendTo = this.appendTo() ?? this.config.appendTo;
    if (this.isOpen() && this.deselectOnClickValue() && appendTo) {
      this._cd.detectChanges();
      this.dropdownPanel().adjustPosition();
    }
  }
  _handleTab($event) {
    if (this.isOpen() === false) {
      if (this.showClear() && !$event.shiftKey && this.tabFocusOnClear()) {
        this.focusOnClear();
        $event.preventDefault();
      } else if (!this.addTag()) {
        return;
      }
    }
    if (this.selectOnTab()) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
        $event.preventDefault();
      } else if (this.showAddTag) {
        this.selectTag();
        $event.preventDefault();
      } else {
        this.close();
      }
    } else {
      this.close();
    }
  }
  _handleEnter($event) {
    const openOnEnter = this.openOnEnter() ?? this.config.openOnEnter;
    if (this.isOpen() || this._manualOpen) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
      } else if (this.showAddTag) {
        this.selectTag();
      }
    } else if (openOnEnter) {
      this.open();
    } else {
      return;
    }
    $event.preventDefault();
  }
  _handleSpace($event) {
    if (this.isOpen() || this._manualOpen) {
      return;
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowDown($event) {
    if (this._nextItemIsTag(1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markNextItem();
      this._scrollToMarked();
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowUp($event) {
    if (!this.isOpen()) {
      return;
    }
    if (this._nextItemIsTag(-1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markPreviousItem();
      this._scrollToMarked();
    }
    $event.preventDefault();
  }
  _nextItemIsTag(nextStep) {
    const nextIndex = this.itemsList.markedIndex + nextStep;
    return this.addTag() && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
  }
  _handleBackspace() {
    if (this.searchTerm || !this.clearable() || !this.clearOnBackspace() || !this.hasValue) {
      return;
    }
    if (this.multiple()) {
      this.unselect(this.itemsList.lastSelectedItem);
    } else {
      this.clearModel();
    }
  }
  _mergeGlobalConfig(config) {
    this.bindValue.set(this.bindValue() || config.bindValue);
    this.bindLabel.set(this.bindLabel() || config.bindLabel);
    this.appearance.set(this.appearance() || config.appearance);
    this._setTabFocusOnClear();
  }
  /**
   * Gets virtual scroll value from input or from config
   *
   *  @param config NgSelectConfig object
   *
   *  @returns `true` if virtual scroll is enabled, `false` otherwise
   */
  getVirtualScroll(config) {
    return isDefined(this.virtualScroll) ? this.virtualScroll() : this.isVirtualScrollDisabled(config);
  }
  /**
   * Gets disableVirtualScroll value from input or from config
   *
   *  @param config NgSelectConfig object
   *
   *  @returns `true` if disableVirtualScroll is enabled, `false` otherwise
   */
  isVirtualScrollDisabled(config) {
    return isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
  }
  static {
    this.\u0275fac = function NgSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgSelectComponent,
      selectors: [["ng-select"]],
      contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuerySignal(dirIndex, ctx.optionTemplate, NgOptionTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.optgroupTemplate, NgOptgroupTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.labelTemplate, NgLabelTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.multiLabelTemplate, NgMultiLabelTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.headerTemplate, NgHeaderTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.footerTemplate, NgFooterTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.notFoundTemplate, NgNotFoundTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.placeholderTemplate, NgPlaceholderTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.typeToSearchTemplate, NgTypeToSearchTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.loadingTextTemplate, NgLoadingTextTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.tagTemplate, NgTagTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.loadingSpinnerTemplate, NgLoadingSpinnerTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.clearButtonTemplate, NgClearButtonTemplateDirective, 5, TemplateRef);
          \u0275\u0275contentQuerySignal(dirIndex, ctx.ngOptions, NgOptionComponent, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance(14);
        }
      },
      viewQuery: function NgSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx.dropdownPanel, NgDropdownPanelComponent, 5);
          \u0275\u0275viewQuerySignal(ctx.searchInput, _c5, 5);
          \u0275\u0275viewQuerySignal(ctx.clearButton, _c6, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance(3);
        }
      },
      hostVars: 20,
      hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275classProp("ng-select-typeahead", ctx.typeahead)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select", ctx.useDefaultClass)("ng-select-filtered", ctx.filtered)("ng-select-single", ctx.single)("ng-select-disabled", ctx.disabled);
        }
      },
      inputs: {
        bindLabel: [1, "bindLabel"],
        bindValue: [1, "bindValue"],
        appearance: [1, "appearance"],
        ariaLabelDropdown: [1, "ariaLabelDropdown"],
        ariaLabel: [1, "ariaLabel"],
        markFirst: [1, "markFirst"],
        placeholder: [1, "placeholder"],
        fixedPlaceholder: [1, "fixedPlaceholder"],
        notFoundText: [1, "notFoundText"],
        typeToSearchText: [1, "typeToSearchText"],
        preventToggleOnRightClick: [1, "preventToggleOnRightClick"],
        addTagText: [1, "addTagText"],
        loadingText: [1, "loadingText"],
        clearAllText: [1, "clearAllText"],
        dropdownPosition: [1, "dropdownPosition"],
        appendTo: [1, "appendTo"],
        loading: [1, "loading"],
        closeOnSelect: [1, "closeOnSelect"],
        hideSelected: [1, "hideSelected"],
        selectOnTab: [1, "selectOnTab"],
        openOnEnter: [1, "openOnEnter"],
        maxSelectedItems: [1, "maxSelectedItems"],
        groupBy: [1, "groupBy"],
        groupValue: [1, "groupValue"],
        bufferAmount: [1, "bufferAmount"],
        virtualScroll: [1, "virtualScroll"],
        selectableGroup: [1, "selectableGroup"],
        tabFocusOnClearButton: [1, "tabFocusOnClearButton"],
        selectableGroupAsModel: [1, "selectableGroupAsModel"],
        searchFn: [1, "searchFn"],
        trackByFn: [1, "trackByFn"],
        clearOnBackspace: [1, "clearOnBackspace"],
        labelForId: [1, "labelForId"],
        inputAttrs: [1, "inputAttrs"],
        tabIndex: [1, "tabIndex"],
        readonly: [1, "readonly"],
        searchWhileComposing: [1, "searchWhileComposing"],
        minTermLength: [1, "minTermLength"],
        editableSearchTerm: [1, "editableSearchTerm"],
        ngClass: [1, "ngClass"],
        typeahead: [1, "typeahead"],
        multiple: [1, "multiple"],
        addTag: [1, "addTag"],
        searchable: [1, "searchable"],
        clearable: [1, "clearable"],
        isOpen: [1, "isOpen"],
        items: [1, "items"],
        compareWith: [1, "compareWith"],
        clearSearchOnAdd: [1, "clearSearchOnAdd"],
        deselectOnClick: [1, "deselectOnClick"],
        keyDownFn: [1, "keyDownFn"]
      },
      outputs: {
        bindLabel: "bindLabelChange",
        bindValue: "bindValueChange",
        appearance: "appearanceChange",
        isOpen: "isOpenChange",
        blurEvent: "blur",
        focusEvent: "focus",
        changeEvent: "change",
        openEvent: "open",
        closeEvent: "close",
        searchEvent: "search",
        clearEvent: "clear",
        addEvent: "add",
        removeEvent: "remove",
        scroll: "scroll",
        scrollToEnd: "scrollToEnd",
        items: "itemsChange"
      },
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgSelectComponent),
        multi: true
      }, NgDropdownPanelService]), \u0275\u0275NgOnChangesFeature],
      decls: 15,
      vars: 20,
      consts: [["searchInput", ""], ["defaultPlaceholderTemplate", ""], ["defaultLabelTemplate", ""], ["defaultLoadingSpinnerTemplate", ""], ["clearButton", ""], ["defaultOptionTemplate", ""], ["defaultTagTemplate", ""], ["defaultNotFoundTemplate", ""], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""], [1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-input"], ["aria-autocomplete", "list", "role", "combobox", 3, "blur", "change", "compositionend", "compositionstart", "focus", "input", "disabled", "readOnly", "value"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], [1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "class", "id", "ariaLabelDropdown"], ["aria-atomic", "true", "aria-live", "polite", "role", "status", 1, "ng-visually-hidden"], [3, "ngTemplateOutlet"], [1, "ng-placeholder"], [1, "ng-value", 3, "ng-value-disabled"], [1, "ng-value"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], [1, "ng-spinner-loader"], ["role", "button", "tabindex", "0", 1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], [1, "ng-dropdown-panel", 3, "update", "scroll", "scrollToEnd", "outsideClick", "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "id", "ariaLabelDropdown"], [1, "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked"], ["role", "option", 1, "ng-option", 3, "ng-option-marked"], [1, "ng-option", 3, "click", "mouseover"], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], [1, "ng-tag-label"], [1, "ng-option", "ng-option-disabled"]],
      template: function NgSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275elementStart(0, "div", 10);
          \u0275\u0275listener("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.handleMousedown($event));
          });
          \u0275\u0275elementStart(1, "div", 11);
          \u0275\u0275template(2, NgSelectComponent_Conditional_2_Template, 3, 1)(3, NgSelectComponent_Conditional_3_Template, 2, 0)(4, NgSelectComponent_Conditional_4_Template, 1, 5, null, 12);
          \u0275\u0275elementStart(5, "div", 13)(6, "input", 14, 0);
          \u0275\u0275listener("blur", function NgSelectComponent_Template_input_blur_6_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onInputBlur($event));
          })("change", function NgSelectComponent_Template_input_change_6_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView($event.stopPropagation());
          })("compositionend", function NgSelectComponent_Template_input_compositionend_6_listener() {
            \u0275\u0275restoreView(_r1);
            const searchInput_r7 = \u0275\u0275reference(7);
            return \u0275\u0275resetView(ctx.onCompositionEnd(searchInput_r7.value));
          })("compositionstart", function NgSelectComponent_Template_input_compositionstart_6_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onCompositionStart());
          })("focus", function NgSelectComponent_Template_input_focus_6_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx.onInputFocus($event));
          })("input", function NgSelectComponent_Template_input_input_6_listener() {
            \u0275\u0275restoreView(_r1);
            const searchInput_r7 = \u0275\u0275reference(7);
            return \u0275\u0275resetView(ctx.filter(searchInput_r7.value));
          });
          \u0275\u0275elementEnd()()();
          \u0275\u0275template(8, NgSelectComponent_Conditional_8_Template, 3, 1)(9, NgSelectComponent_Conditional_9_Template, 2, 1);
          \u0275\u0275elementStart(10, "span", 15);
          \u0275\u0275element(11, "span", 16);
          \u0275\u0275elementEnd()();
          \u0275\u0275template(12, NgSelectComponent_Conditional_12_Template, 9, 19, "ng-dropdown-panel", 17);
          \u0275\u0275elementStart(13, "div", 18);
          \u0275\u0275template(14, NgSelectComponent_Conditional_14_Template, 1, 1);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_8_0;
          \u0275\u0275classProp("ng-appearance-outline", ctx.appearance() === "outline")("ng-has-value", ctx.hasValue);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.selectedItems.length === 0 && !ctx.searchTerm || ((tmp_3_0 = ctx.fixedPlaceholder()) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ctx.config.fixedPlaceholder) ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional((!ctx.multiLabelTemplate() || !ctx.multiple()) && ctx.selectedItems.length > 0 ? 3 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.multiple() && ctx.multiLabelTemplate() && ctx.selectedValues.length > 0 ? 4 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275property("disabled", ctx.disabled)("readOnly", !ctx.searchable() || ctx.itemsList.maxItemsSelected)("value", (tmp_8_0 = ctx.searchTerm) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "");
          \u0275\u0275attribute("aria-activedescendant", ctx.isOpen() ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen() ? ctx.dropdownId : null)("aria-expanded", ctx.isOpen())("aria-label", ctx.ariaLabel())("id", ctx.labelForId())("tabindex", ctx.tabIndex());
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.loading() ? 8 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showClear() ? 9 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.isOpen() ? 12 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.isOpen && ctx.showNoItemsFound() ? 14 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent],
      styles: ['@charset "UTF-8";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{position:relative;z-index:1001;-webkit-user-select:text;user-select:text;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}.ng-visually-hidden{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0;white-space:nowrap}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectComponent, [{
    type: Component,
    args: [{
      selector: "ng-select",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgSelectComponent),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent],
      template: `<div
	(mousedown)="handleMousedown($event)"
	[class.ng-appearance-outline]="appearance() === 'outline'"
	[class.ng-has-value]="hasValue"
	class="ng-select-container">
	<div class="ng-value-container">
		@if ((selectedItems.length === 0 && !searchTerm) || (fixedPlaceholder() ?? config.fixedPlaceholder )) {
			<ng-template #defaultPlaceholderTemplate>
				<div class="ng-placeholder">{{ placeholder() ?? config.placeholder }}</div>
			</ng-template>
			<ng-template [ngTemplateOutlet]="placeholderTemplate() || defaultPlaceholderTemplate"> </ng-template>
		}

		@if ((!multiLabelTemplate() || !multiple()) && selectedItems.length > 0) {
			@for (item of selectedItems; track trackByOption($index, item)) {
				<div [class.ng-value-disabled]="item.disabled" class="ng-value">
					<ng-template #defaultLabelTemplate>
						<span class="ng-value-icon left" (click)="unselect(item)" aria-hidden="true">\xD7</span>
						<span class="ng-value-label" [ngItemLabel]="item.label" [escape]="escapeHTML"></span>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="labelTemplate() || defaultLabelTemplate"
						[ngTemplateOutletContext]="{ item: item.value, clear: clearItem, label: item.label }">
					</ng-template>
				</div>
			}
		}

		@if (multiple() && multiLabelTemplate() && selectedValues.length > 0) {
			<ng-template [ngTemplateOutlet]="multiLabelTemplate()" [ngTemplateOutletContext]="{ items: selectedValues, clear: clearItem }">
			</ng-template>
		}

		<div class="ng-input">
			<input
				#searchInput
				(blur)="onInputBlur($event)"
				(change)="$event.stopPropagation()"
				(compositionend)="onCompositionEnd(searchInput.value)"
				(compositionstart)="onCompositionStart()"
				(focus)="onInputFocus($event)"
				(input)="filter(searchInput.value)"
				[attr.aria-activedescendant]="isOpen() ? itemsList?.markedItem?.htmlId : null"
				[attr.aria-controls]="isOpen() ? dropdownId : null"
				[attr.aria-expanded]="isOpen()"
				[attr.aria-label]="ariaLabel()"
				[attr.id]="labelForId()"
				[attr.tabindex]="tabIndex()"
				[disabled]="disabled"
				[readOnly]="!searchable() || itemsList.maxItemsSelected"
				[value]="searchTerm ?? ''"
				aria-autocomplete="list"
				role="combobox" />
		</div>
	</div>

	@if (loading()) {
		<ng-template #defaultLoadingSpinnerTemplate>
			<div class="ng-spinner-loader"></div>
		</ng-template>
		<ng-template [ngTemplateOutlet]="loadingSpinnerTemplate() || defaultLoadingSpinnerTemplate"></ng-template>
	}

	@if (showClear()) {
		@if (clearButtonTemplate()) {
			<ng-container [ngTemplateOutlet]="clearButtonTemplate()"></ng-container>
		} @else {
			<span
				class="ng-clear-wrapper"
				role="button"
				tabindex="0"
				[attr.tabindex]="tabFocusOnClear() ? 0 : -1"
				title="{{ clearAllText() || config.clearAllText }}"
				#clearButton>
				<span class="ng-clear" aria-hidden="true">\xD7</span>
			</span>
		}
	}

	<span class="ng-arrow-wrapper">
		<span class="ng-arrow"></span>
	</span>
</div>

@if (isOpen()) {
	@let appendToValue = appendTo() || config.appendTo;
	<ng-dropdown-panel
		class="ng-dropdown-panel"
		[virtualScroll]="virtualScroll() ?? !config.disableVirtualScroll ?? false"
		[bufferAmount]="bufferAmount()"
		[appendTo]="appendToValue"
		[position]="dropdownPosition()"
		[headerTemplate]="headerTemplate()"
		[footerTemplate]="footerTemplate()"
		[filterValue]="searchTerm"
		[items]="itemsList.filteredItems"
		[markedItem]="itemsList.markedItem"
		(update)="viewPortItems = $event"
		(scroll)="scroll.emit($event)"
		(scrollToEnd)="scrollToEnd.emit($event)"
		(outsideClick)="close()"
		[class.ng-select-multiple]="multiple()"
		[class]="appendToValue ? (ngClass() ? ngClass() : classes) : null"
		[id]="dropdownId"
		[ariaLabelDropdown]="ariaLabelDropdown()">
		<ng-container>
			@for (item of viewPortItems; track trackByOption($index, item)) {
				<div
					class="ng-option"
					[attr.role]="item.children ? 'group' : 'option'"
					(click)="toggleItem(item)"
					(mouseover)="onItemHover(item)"
					[class.ng-option-disabled]="item.disabled"
					[class.ng-option-selected]="item.selected"
					[class.ng-optgroup]="item.children"
					[class.ng-option]="!item.children"
					[class.ng-option-child]="!!item.parent"
					[class.ng-option-marked]="item === itemsList.markedItem"
					[attr.aria-selected]="item.selected"
					[attr.id]="item?.htmlId"
					[attr.aria-setsize]="itemsList.filteredItems.length"
					[attr.aria-posinset]="item.index + 1">
					<ng-template #defaultOptionTemplate>
						<span class="ng-option-label" [ngItemLabel]="item.label" [escape]="escapeHTML"></span>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="
							item.children ? optgroupTemplate() || defaultOptionTemplate : optionTemplate() || defaultOptionTemplate
						"
						[ngTemplateOutletContext]="{ item: item.value, item$: item, index: item.index, searchTerm: searchTerm }">
					</ng-template>
				</div>
			}
			@if (showAddTag) {
				<div
					class="ng-option"
					[class.ng-option-marked]="!itemsList.markedItem"
					(mouseover)="itemsList.unmarkItem()"
					role="option"
					(click)="selectTag()">
					<ng-template #defaultTagTemplate>
						<span
							><span class="ng-tag-label">{{ addTagText() || config.addTagText }}</span
							>"{{ searchTerm }}"</span
						>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="tagTemplate() || defaultTagTemplate"
						[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
					</ng-template>
				</div>
			}
		</ng-container>
		@if (showNoItemsFound()) {
			<ng-template #defaultNotFoundTemplate>
				<div class="ng-option ng-option-disabled">{{ notFoundText() ?? config.notFoundText }}</div>
			</ng-template>
			<ng-template
				[ngTemplateOutlet]="notFoundTemplate() || defaultNotFoundTemplate"
				[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
			</ng-template>
		}
		@if (showTypeToSearch()) {
			<ng-template #defaultTypeToSearchTemplate>
				<div class="ng-option ng-option-disabled">{{ typeToSearchText() || config.typeToSearchText }}</div>
			</ng-template>
			<ng-template [ngTemplateOutlet]="typeToSearchTemplate() || defaultTypeToSearchTemplate"></ng-template>
		}
		@if (loading() && itemsList.filteredItems.length === 0) {
			<ng-template #defaultLoadingTextTemplate>
				<div class="ng-option ng-option-disabled">{{ loadingText() || config.loadingText }}</div>
			</ng-template>
			<ng-template
				[ngTemplateOutlet]="loadingTextTemplate() || defaultLoadingTextTemplate"
				[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
			</ng-template>
		}
	</ng-dropdown-panel>
}

<!-- Always present aria-live region -->
<div aria-atomic="true" aria-live="polite" class="ng-visually-hidden" role="status">
	@if (isOpen && showNoItemsFound()) {
		{{ notFoundText }}
	}
</div>
`,
      styles: ['@charset "UTF-8";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{position:relative;z-index:1001;-webkit-user-select:text;user-select:text;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}.ng-visually-hidden{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0;white-space:nowrap}\n']
    }]
  }], () => [], {
    typeahead: [{
      type: HostBinding,
      args: ["class.ng-select-typeahead"]
    }],
    multiple: [{
      type: HostBinding,
      args: ["class.ng-select-multiple"]
    }],
    addTag: [{
      type: HostBinding,
      args: ["class.ng-select-taggable"]
    }],
    searchable: [{
      type: HostBinding,
      args: ["class.ng-select-searchable"]
    }],
    clearable: [{
      type: HostBinding,
      args: ["class.ng-select-clearable"]
    }],
    isOpen: [{
      type: HostBinding,
      args: ["class.ng-select-opened"]
    }],
    useDefaultClass: [{
      type: HostBinding,
      args: ["class.ng-select"]
    }],
    filtered: [{
      type: HostBinding,
      args: ["class.ng-select-filtered"]
    }],
    single: [{
      type: HostBinding,
      args: ["class.ng-select-single"]
    }],
    disabled: [{
      type: HostBinding,
      args: ["class.ng-select-disabled"]
    }],
    handleKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var NgSelectModule = class _NgSelectModule {
  static {
    this.\u0275fac = function NgSelectModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgSelectModule,
      imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgClearButtonTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgClearButtonTemplateDirective]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: provideNgSelect()
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgClearButtonTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgClearButtonTemplateDirective],
      providers: provideNgSelect()
    }]
  }], null, null);
})();
function provideNgSelect() {
  return [{
    provide: SELECTION_MODEL_FACTORY,
    useValue: DefaultSelectionModelFactory
  }];
}

export {
  NgSelectComponent,
  NgSelectModule
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v19.2.14
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-2SLRX53P.js.map
