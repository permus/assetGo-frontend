import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ISERUI2H.js";
import {
  CommonModule,
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
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SCVX3V3B.js";

// src/app/shared/components/pagination/pagination.component.ts
function PaginationComponent_div_1_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3, " ");
  }
}
function PaginationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 7);
    \u0275\u0275text(2, "Show:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 8);
    \u0275\u0275listener("change", function PaginationComponent_div_1_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPerPageChange($event));
    });
    \u0275\u0275template(4, PaginationComponent_div_1_option_4_Template, 2, 2, "option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, "per page");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.pagination.per_page);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.perPageOptions);
  }
}
function PaginationComponent_div_2_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function PaginationComponent_div_2_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275text(1, " 1 ");
    \u0275\u0275elementEnd();
  }
}
function PaginationComponent_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, " ... ");
    \u0275\u0275elementEnd();
  }
}
function PaginationComponent_div_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function PaginationComponent_div_2_button_7_Template_button_click_0_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.pagination.current_page === page_r7 ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50 hover:text-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r7, " ");
  }
}
function PaginationComponent_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, " ... ");
    \u0275\u0275elementEnd();
  }
}
function PaginationComponent_div_2_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function PaginationComponent_div_2_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pagination.last_page));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pagination.last_page, " ");
  }
}
function PaginationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "nav", 13)(2, "button", 14);
    \u0275\u0275listener("click", function PaginationComponent_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 15);
    \u0275\u0275element(4, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, PaginationComponent_div_2_button_5_Template, 2, 0, "button", 17)(6, PaginationComponent_div_2_span_6_Template, 2, 0, "span", 18)(7, PaginationComponent_div_2_button_7_Template, 2, 3, "button", 19)(8, PaginationComponent_div_2_span_8_Template, 2, 0, "span", 18)(9, PaginationComponent_div_2_button_9_Template, 2, 1, "button", 17);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 14);
    \u0275\u0275listener("click", function PaginationComponent_div_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 15);
    \u0275\u0275element(12, "path", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pagination.current_page === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.visiblePages.length > 0 && ctx_r1.visiblePages[0] > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showStartEllipsis);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.visiblePages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showEndEllipsis);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.visiblePages.length > 0 && ctx_r1.visiblePages[ctx_r1.visiblePages.length - 1] < ctx_r1.pagination.last_page);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pagination.current_page === ctx_r1.pagination.last_page);
  }
}
function PaginationComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "label", 25);
    \u0275\u0275text(2, "Go to:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PaginationComponent_div_6_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jumpToPage, $event) || (ctx_r1.jumpToPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function PaginationComponent_div_6_Template_input_keyup_enter_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onJumpToPage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function PaginationComponent_div_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onJumpToPage());
    });
    \u0275\u0275text(5, " Go ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jumpToPage);
    \u0275\u0275property("min", 1)("max", ctx_r1.pagination.last_page)("placeholder", ctx_r1.pagination.current_page.toString());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.jumpToPage || ctx_r1.jumpToPage < 1 || ctx_r1.jumpToPage > ctx_r1.pagination.last_page);
  }
}
var PaginationComponent = class _PaginationComponent {
  pagination;
  showPerPageSelector = true;
  showJumpToPage = true;
  perPageOptions = [10, 20, 50, 100];
  maxVisiblePages = 7;
  pageChange = new EventEmitter();
  perPageChange = new EventEmitter();
  jumpToPage = null;
  visiblePages = [];
  ngOnChanges(changes) {
    if (changes["pagination"]) {
      this.calculateVisiblePages();
      this.jumpToPage = this.pagination.current_page;
    }
  }
  /**
   * Calculate which page numbers to show
   */
  calculateVisiblePages() {
    const current = this.pagination.current_page;
    const total = this.pagination.last_page;
    const maxVisible = this.maxVisiblePages;
    this.visiblePages = [];
    if (total <= maxVisible) {
      for (let i = 1; i <= total; i++) {
        this.visiblePages.push(i);
      }
    } else {
      let start = Math.max(1, current - Math.floor(maxVisible / 2));
      let end = Math.min(total, start + maxVisible - 1);
      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }
      for (let i = start; i <= end; i++) {
        this.visiblePages.push(i);
      }
    }
  }
  /**
   * Navigate to a specific page
   */
  goToPage(page) {
    if (page >= 1 && page <= this.pagination.last_page && page !== this.pagination.current_page) {
      this.pageChange.emit(page);
    }
  }
  /**
   * Change items per page
   */
  onPerPageChange(event) {
    const newPerPage = parseInt(event.target.value);
    if (newPerPage !== this.pagination.per_page) {
      this.perPageChange.emit(newPerPage);
    }
  }
  /**
   * Jump to a specific page using input
   */
  onJumpToPage() {
    if (this.jumpToPage && this.jumpToPage >= 1 && this.jumpToPage <= this.pagination.last_page) {
      this.goToPage(this.jumpToPage);
    }
  }
  /**
   * Go to previous page
   */
  previousPage() {
    if (this.pagination.current_page > 1) {
      this.goToPage(this.pagination.current_page - 1);
    }
  }
  /**
   * Go to next page
   */
  nextPage() {
    if (this.pagination.current_page < this.pagination.last_page) {
      this.goToPage(this.pagination.current_page + 1);
    }
  }
  /**
   * Check if we should show ellipsis before pages
   */
  get showStartEllipsis() {
    return this.visiblePages.length > 0 && this.visiblePages[0] > 2;
  }
  /**
   * Check if we should show ellipsis after pages
   */
  get showEndEllipsis() {
    return this.visiblePages.length > 0 && this.visiblePages[this.visiblePages.length - 1] < this.pagination.last_page - 1;
  }
  static \u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { pagination: "pagination", showPerPageSelector: "showPerPageSelector", showJumpToPage: "showJumpToPage", perPageOptions: "perPageOptions", maxVisiblePages: "maxVisiblePages" }, outputs: { pageChange: "pageChange", perPageChange: "perPageChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 7, vars: 6, consts: [[1, "flex", "flex-col", "rounded-xl", "sm:flex-row", "sm:items-center", "sm:justify-between", "bg-white", "px-6", "py-4", "border-t", "border-gray-200"], ["class", "flex items-center space-x-2 mb-4 sm:mb-0", 4, "ngIf"], ["class", "flex items-center justify-center mb-4 sm:mb-0", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:space-x-4"], [1, "text-sm", "text-gray-700", "text-center", "sm:text-left", "mb-2", "sm:mb-0"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "mb-4", "sm:mb-0"], ["for", "per-page", 1, "text-sm", "text-gray-700"], ["id", "per-page", 1, "px-3", "py-1", "border", "border-gray-300", "rounded-lg", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-sm", "text-gray-700"], [3, "value"], [1, "flex", "items-center", "justify-center", "mb-4", "sm:mb-0"], ["aria-label", "Pagination", 1, "flex", "items-center", "space-x-1"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-sm", "font-medium", "rounded-lg", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", "enabled:hover:bg-gray-50", "enabled:text-gray-700", "bg-white", "border", "border-gray-300", "text-gray-500", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], ["class", "flex items-center justify-center w-10 h-10 text-sm font-medium rounded-lg transition-colors\n               bg-white text-gray-500 border border-gray-300 hover:bg-gray-50 hover:text-gray-700", 3, "click", 4, "ngIf"], ["class", "flex items-center justify-center w-10 h-10 text-gray-400", 4, "ngIf"], ["class", "flex items-center justify-center w-10 h-10 text-sm font-medium rounded-lg border transition-colors", 3, "class", "click", 4, "ngFor", "ngForOf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-sm", "font-medium", "rounded-lg", "transition-colors", "bg-white", "text-gray-500", "border", "border-gray-300", "hover:bg-gray-50", "hover:text-gray-700", 3, "click"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-gray-400"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-sm", "font-medium", "rounded-lg", "border", "transition-colors", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["for", "jump-page", 1, "text-sm", "text-gray-700"], ["id", "jump-page", "type", "number", 1, "w-16", "px-2", "py-1", "border", "border-gray-300", "rounded", "text-sm", "text-center", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", 3, "ngModelChange", "keyup.enter", "ngModel", "min", "max", "placeholder"], [1, "px-3", "py-1", "bg-blue-600", "text-white", "text-sm", "rounded", "hover:bg-blue-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"]], template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PaginationComponent_div_1_Template, 7, 2, "div", 1)(2, PaginationComponent_div_2_Template, 13, 7, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, PaginationComponent_div_6_Template, 6, 5, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPerPageSelector);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination.last_page > 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate3(" Showing ", ctx.pagination.from, " - ", ctx.pagination.to, " of ", ctx.pagination.total, " entries ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showJumpToPage && ctx.pagination.last_page > 10);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.pagination-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-top: 1px solid #e5e7eb;\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-duration: 150ms;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n}\n.pagination-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background-color: #f9fafb;\n  color: #374151;\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-btn.active[_ngcontent-%COMP%] {\n  background-color: #2563eb;\n  color: #ffffff;\n  border-color: #2563eb;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.pagination-btn.active[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n  border-color: #1d4ed8;\n}\n.per-page-select[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n}\n.per-page-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);\n  border-color: #3b82f6;\n}\n.jump-page-input[_ngcontent-%COMP%] {\n  width: 4rem;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n  text-align: center;\n}\n.jump-page-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);\n  border-color: #3b82f6;\n}\n@media (max-width: 640px) {\n  .pagination-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.page-transition[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: #9ca3af;\n}\n.pagination-btn[_ngcontent-%COMP%]:focus, \n.per-page-select[_ngcontent-%COMP%]:focus, \n.jump-page-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=pagination.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{ selector: "app-pagination", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Pagination Component -->\r
<div class="flex flex-col rounded-xl sm:flex-row sm:items-center sm:justify-between bg-white px-6 py-4 border-t border-gray-200">\r
\r
  <!-- Left: Per Page Selector -->\r
  <div *ngIf="showPerPageSelector" class="flex items-center space-x-2 mb-4 sm:mb-0">\r
    <label for="per-page" class="text-sm text-gray-700">Show:</label>\r
    <select\r
      id="per-page"\r
      [value]="pagination.per_page"\r
      (change)="onPerPageChange($event)"\r
      class="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">\r
      <option *ngFor="let option of perPageOptions" [value]="option">\r
        {{ option }}\r
      </option>\r
    </select>\r
    <span class="text-sm text-gray-700">per page</span>\r
  </div>\r
\r
  <!-- Center: Pagination Controls -->\r
  <div *ngIf="pagination.last_page > 1" class="flex items-center justify-center mb-4 sm:mb-0">\r
    <nav class="flex items-center space-x-1" aria-label="Pagination">\r
\r
      <!-- Previous Button -->\r
      <button\r
        (click)="previousPage()"\r
        [disabled]="pagination.current_page === 1"\r
        class="flex items-center justify-center w-10 h-10 text-sm font-medium rounded-lg transition-colors\r
               disabled:opacity-50 disabled:cursor-not-allowed\r
               enabled:hover:bg-gray-50 enabled:text-gray-700\r
               bg-white border border-gray-300 text-gray-500">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
        </svg>\r
      </button>\r
\r
      <!-- First Page (if not in visible range) -->\r
      <button\r
        *ngIf="visiblePages.length > 0 && visiblePages[0] > 1"\r
        (click)="goToPage(1)"\r
        class="flex items-center justify-center w-10 h-10 text-sm font-medium rounded-lg transition-colors\r
               bg-white text-gray-500 border border-gray-300 hover:bg-gray-50 hover:text-gray-700">\r
        1\r
      </button>\r
\r
      <!-- Start Ellipsis -->\r
      <span *ngIf="showStartEllipsis" class="flex items-center justify-center w-10 h-10 text-gray-400">\r
        ...\r
      </span>\r
\r
      <!-- Page Numbers -->\r
      <button\r
        *ngFor="let page of visiblePages"\r
        (click)="goToPage(page)"\r
        [class]="pagination.current_page === page ?\r
                  'bg-blue-600 text-white border-blue-600 shadow-sm' :\r
                  'bg-white text-gray-500 border-gray-300 hover:bg-gray-50 hover:text-gray-700'"\r
        class="flex items-center justify-center w-10 h-10 text-sm font-medium rounded-lg border transition-colors">\r
        {{ page }}\r
      </button>\r
\r
      <!-- End Ellipsis -->\r
      <span *ngIf="showEndEllipsis" class="flex items-center justify-center w-10 h-10 text-gray-400">\r
        ...\r
      </span>\r
\r
      <!-- Last Page (if not in visible range) -->\r
      <button\r
        *ngIf="visiblePages.length > 0 && visiblePages[visiblePages.length - 1] < pagination.last_page"\r
        (click)="goToPage(pagination.last_page)"\r
        class="flex items-center justify-center w-10 h-10 text-sm font-medium rounded-lg transition-colors\r
               bg-white text-gray-500 border border-gray-300 hover:bg-gray-50 hover:text-gray-700">\r
        {{ pagination.last_page }}\r
      </button>\r
\r
      <!-- Next Button -->\r
      <button\r
        (click)="nextPage()"\r
        [disabled]="pagination.current_page === pagination.last_page"\r
        class="flex items-center justify-center w-10 h-10 text-sm font-medium rounded-lg transition-colors\r
               disabled:opacity-50 disabled:cursor-not-allowed\r
               enabled:hover:bg-gray-50 enabled:text-gray-700\r
               bg-white border border-gray-300 text-gray-500">\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
        </svg>\r
      </button>\r
\r
    </nav>\r
  </div>\r
\r
  <!-- Right: Pagination Info and Jump to Page -->\r
  <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4">\r
\r
    <!-- Pagination Info -->\r
    <div class="text-sm text-gray-700 text-center sm:text-left mb-2 sm:mb-0">\r
      Showing {{ pagination.from }} - {{ pagination.to }} of {{ pagination.total }} entries\r
    </div>\r
\r
    <!-- Jump to Page (only show if there are many pages) -->\r
    <div *ngIf="showJumpToPage && pagination.last_page > 10" class="flex items-center space-x-2">\r
      <label for="jump-page" class="text-sm text-gray-700">Go to:</label>\r
      <input\r
        id="jump-page"\r
        type="number"\r
        [(ngModel)]="jumpToPage"\r
        [min]="1"\r
        [max]="pagination.last_page"\r
        (keyup.enter)="onJumpToPage()"\r
        class="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"\r
        [placeholder]="pagination.current_page.toString()">\r
      <button\r
        (click)="onJumpToPage()"\r
        [disabled]="!jumpToPage || jumpToPage < 1 || jumpToPage > pagination.last_page"\r
        class="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">\r
        Go\r
      </button>\r
    </div>\r
\r
  </div>\r
\r
</div>\r
`, styles: ["/* src/app/shared/components/pagination/pagination.component.scss */\n.pagination-container {\n  background-color: #ffffff;\n  border-top: 1px solid #e5e7eb;\n}\n.pagination-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-duration: 150ms;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n}\n.pagination-btn:not(:disabled):hover {\n  background-color: #f9fafb;\n  color: #374151;\n}\n.pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-btn.active {\n  background-color: #2563eb;\n  color: #ffffff;\n  border-color: #2563eb;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.pagination-btn.active:hover {\n  background-color: #1d4ed8;\n  border-color: #1d4ed8;\n}\n.per-page-select {\n  padding: 0.25rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n}\n.per-page-select:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);\n  border-color: #3b82f6;\n}\n.jump-page-input {\n  width: 4rem;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n  text-align: center;\n}\n.jump-page-input:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);\n  border-color: #3b82f6;\n}\n@media (max-width: 640px) {\n  .pagination-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .pagination-info {\n    text-align: center;\n  }\n}\n.page-transition {\n  transition: all 0.2s ease-in-out;\n}\n.ellipsis {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: #9ca3af;\n}\n.pagination-btn:focus,\n.per-page-select:focus,\n.jump-page-input:focus {\n  outline: none;\n}\n/*# sourceMappingURL=pagination.component.css.map */\n"] }]
  }], null, { pagination: [{
    type: Input
  }], showPerPageSelector: [{
    type: Input
  }], showJumpToPage: [{
    type: Input
  }], perPageOptions: [{
    type: Input
  }], maxVisiblePages: [{
    type: Input
  }], pageChange: [{
    type: Output
  }], perPageChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/shared/components/pagination/pagination.component.ts", lineNumber: 21 });
})();

export {
  PaginationComponent
};
//# sourceMappingURL=chunk-FLVBNG45.js.map
