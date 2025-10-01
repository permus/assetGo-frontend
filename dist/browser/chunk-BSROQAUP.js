import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵresolveDocument
} from "./chunk-YUR5IGOK.js";

// src/app/shared/directives/click-outside/click-outside.directive.ts
var ClickOutsideDirective = class _ClickOutsideDirective {
  elementRef;
  clickOutside = new EventEmitter();
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  onClick(target) {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.clickOutside.emit();
    }
  }
  static \u0275fac = function ClickOutsideDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClickOutsideDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      }, false, \u0275\u0275resolveDocument);
    }
  }, outputs: { clickOutside: "clickOutside" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[clickOutside]"
    }]
  }], () => [{ type: ElementRef }], { clickOutside: [{
    type: Output
  }], onClick: [{
    type: HostListener,
    args: ["document:click", ["$event.target"]]
  }] });
})();

export {
  ClickOutsideDirective
};
//# sourceMappingURL=chunk-BSROQAUP.js.map
