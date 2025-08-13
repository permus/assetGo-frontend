import {
  InventoryAnalyticsService
} from "./chunk-AUIJHXYG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RCYJD2NT.js";
import "./chunk-5YESG6NV.js";
import "./chunk-3DQDTIJW.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
} from "./chunk-E3IEKUEF.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/transactions/transactions.component.ts
var _c0 = (a0, a1, a2) => ({ "text-green-600": a0, "text-red-600": a1, "text-blue-600": a2 });
var _c1 = () => [];
function TransactionsComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r1.label, " ");
  }
}
function TransactionsComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r2 = ctx.$implicit;
    \u0275\u0275property("value", part_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", part_r2.name, " (", part_r2.part_number, ") ");
  }
}
function TransactionsComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r3 = ctx.$implicit;
    \u0275\u0275property("value", location_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", location_r3.name, " (", location_r3.code, ") ");
  }
}
function TransactionsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading transactions...");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275element(3, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 20);
    \u0275\u0275listener("click", function TransactionsComponent_div_51_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.refreshData());
    });
    \u0275\u0275text(7, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.error);
  }
}
function TransactionsComponent_div_52_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53)(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 55)(7, "div", 56)(8, "div", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 58);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td", 59)(13, "div", 60)(14, "div", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 62);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td", 63)(19, "span", 64);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 65);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 66)(24, "span", 67);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 68)(27, "span", 69);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 70)(30, "span", 71);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const transaction_r6 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.formatDate(transaction_r6.created_at), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r4.getTransactionTypeClass(transaction_r6.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getTransactionTypeLabel(transaction_r6.type), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((transaction_r6.part == null ? null : transaction_r6.part.name) || "Unknown Part");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((transaction_r6.part == null ? null : transaction_r6.part.part_number) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((transaction_r6.location == null ? null : transaction_r6.location.name) || "Unknown Location");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((transaction_r6.location == null ? null : transaction_r6.location.code) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(16, _c0, transaction_r6.type === "receipt" || transaction_r6.type === "transfer_in" || transaction_r6.type === "return", transaction_r6.type === "issue" || transaction_r6.type === "transfer_out", transaction_r6.type === "adjustment"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", transaction_r6.type === "issue" || transaction_r6.type === "transfer_out" ? "-" : "+", "", transaction_r6.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.formatCurrency(transaction_r6.unit_cost || 0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.formatCurrency(transaction_r6.total_cost || 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", transaction_r6.reason);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", transaction_r6.reason || "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", transaction_r6.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", transaction_r6.reference || "N/A", " ");
  }
}
function TransactionsComponent_div_52_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 74);
    \u0275\u0275element(3, "path", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 76);
    \u0275\u0275text(5, "No transactions found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 77);
    \u0275\u0275text(7, " No transactions match your current filters. Try adjusting your search criteria. ");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_div_52_div_32_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function TransactionsComponent_div_52_div_32_button_6_Template_button_click_0_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.onPageChange(i_r9 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r4.currentPage === i_r9 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r9 + 1, " ");
  }
}
function TransactionsComponent_div_52_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "button", 79);
    \u0275\u0275listener("click", function TransactionsComponent_div_52_div_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onPageChange(ctx_r4.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 80);
    \u0275\u0275element(3, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 82);
    \u0275\u0275template(6, TransactionsComponent_div_52_div_32_button_6_Template, 2, 3, "button", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 84);
    \u0275\u0275listener("click", function TransactionsComponent_div_52_div_32_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onPageChange(ctx_r4.currentPage + 1));
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 80);
    \u0275\u0275element(10, "path", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentPage === 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c1).constructor(ctx_r4.totalPages));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentPage === ctx_r4.totalPages);
  }
}
function TransactionsComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h3", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 37)(8, "table", 38)(9, "thead")(10, "tr")(11, "th", 39);
    \u0275\u0275text(12, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 40);
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 41);
    \u0275\u0275text(16, "Part");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 42);
    \u0275\u0275text(18, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 43);
    \u0275\u0275text(20, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 44);
    \u0275\u0275text(22, "Unit Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 45);
    \u0275\u0275text(24, "Total Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 46);
    \u0275\u0275text(26, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 47);
    \u0275\u0275text(28, "Reference");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, TransactionsComponent_div_52_tr_30_Template, 32, 20, "tr", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, TransactionsComponent_div_52_div_31_Template, 8, 0, "div", 49)(32, TransactionsComponent_div_52_div_32_Template, 11, 4, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Transactions (", ctx_r4.totalItems, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r4.currentPage, " of ", ctx_r4.totalPages, " ");
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r4.transactions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.transactions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.totalPages > 1);
  }
}
var TransactionsComponent = class _TransactionsComponent {
  inventoryService;
  transactions = [];
  loading = false;
  error = null;
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
  constructor(inventoryService) {
    this.inventoryService = inventoryService;
  }
  ngOnInit() {
    this.loadTransactions();
    this.loadAvailableParts();
    this.loadAvailableLocations();
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
        this.availableLocations = response.data.data || [];
        console.log("Available locations loaded:", this.availableLocations.length);
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
  static \u0275fac = function TransactionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionsComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionsComponent, selectors: [["app-transactions"]], decls: 53, vars: 13, consts: [[1, "transactions-container"], [1, "header-section"], [1, "header-content"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "text-gray-600"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "filters-section"], [1, "filters-grid"], [1, "filter-group"], [1, "filter-label"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["value", ""], ["type", "date", 1, "filter-input", 3, "ngModelChange", "change", "ngModel"], ["type", "text", "placeholder", "Search transactions...", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], [3, "value"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "error-message"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "table-actions"], [1, "text-sm", "text-gray-500"], [1, "table-wrapper"], [1, "transactions-table"], [1, "th-date"], [1, "th-type"], [1, "th-part"], [1, "th-location"], [1, "th-quantity"], [1, "th-cost"], [1, "th-total"], [1, "th-reason"], [1, "th-reference"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "table-row"], [1, "td-date"], [1, "td-type"], [1, "transaction-type-badge", 3, "ngClass"], [1, "td-part"], [1, "part-info"], [1, "part-name"], [1, "part-number"], [1, "td-location"], [1, "location-info"], [1, "location-name"], [1, "location-code"], [1, "td-quantity"], [1, "quantity-value", 3, "ngClass"], [1, "td-cost"], [1, "td-total"], [1, "total-cost"], [1, "td-reason"], [1, "reason-text", 3, "title"], [1, "td-reference"], [1, "reference-text", 3, "title"], [1, "empty-state"], [1, "empty-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "empty-title"], [1, "empty-description"], [1, "pagination"], [1, "pagination-btn", "pagination-prev", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "pagination-btn", "pagination-next", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "pagination-page", 3, "click"]], template: function TransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Inventory Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Track and manage all inventory movements and transactions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function TransactionsComponent_Template_button_click_8_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Refresh ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "label", 12);
      \u0275\u0275text(16, "Transaction Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.type, $event) || (ctx.filters.type = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TransactionsComponent_Template_select_change_17_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275template(18, TransactionsComponent_option_18_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 11)(20, "label", 12);
      \u0275\u0275text(21, "Part");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.part_id, $event) || (ctx.filters.part_id = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TransactionsComponent_Template_select_change_22_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(23, "option", 15);
      \u0275\u0275text(24, "All Parts");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, TransactionsComponent_option_25_Template, 2, 3, "option", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 11)(27, "label", 12);
      \u0275\u0275text(28, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.location_id, $event) || (ctx.filters.location_id = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TransactionsComponent_Template_select_change_29_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(30, "option", 15);
      \u0275\u0275text(31, "All Locations");
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, TransactionsComponent_option_32_Template, 2, 3, "option", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 11)(34, "label", 12);
      \u0275\u0275text(35, "Start Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.start_date, $event) || (ctx.filters.start_date = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TransactionsComponent_Template_input_change_36_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 11)(38, "label", 12);
      \u0275\u0275text(39, "End Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.end_date, $event) || (ctx.filters.end_date = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TransactionsComponent_Template_input_change_40_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 11)(42, "label", 12);
      \u0275\u0275text(43, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.search, $event) || (ctx.filters.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function TransactionsComponent_Template_input_input_44_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 18)(46, "button", 19);
      \u0275\u0275listener("click", function TransactionsComponent_Template_button_click_46_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(47, " Clear Filters ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 20);
      \u0275\u0275listener("click", function TransactionsComponent_Template_button_click_48_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275text(49, " Apply Filters ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(50, TransactionsComponent_div_50_Template, 4, 0, "div", 21)(51, TransactionsComponent_div_51_Template, 8, 1, "div", 22)(52, TransactionsComponent_div_52_Template, 33, 6, "div", 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
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
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.start_date);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.end_date);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.search);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.transactions-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n@media (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1280px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  color: #374151;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], \n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus, \n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.transactions-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border: 4px solid #bfdbfe;\n  border-top: 4px solid #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.transactions-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n@media (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #6b7280;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1200px;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  text-align: left;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid #e5e7eb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-date[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-type[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-part[_ngcontent-%COMP%] {\n  width: 14rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-location[_ngcontent-%COMP%] {\n  width: 12rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-quantity[_ngcontent-%COMP%] {\n  width: 7rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-cost[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-total[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reason[_ngcontent-%COMP%] {\n  width: 11rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reference[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #111827;\n  border-bottom: 1px solid #e5e7eb;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-date[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-type[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-type[_ngcontent-%COMP%]   .transaction-type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.125rem 0.625rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-part[_ngcontent-%COMP%] {\n  width: 14rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-part[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-part[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-part[_ngcontent-%COMP%]   .part-info[_ngcontent-%COMP%]   .part-number[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-location[_ngcontent-%COMP%] {\n  width: 12rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-location[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-location[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-location[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .location-code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-quantity[_ngcontent-%COMP%] {\n  width: 7rem;\n  text-align: center;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-quantity[_ngcontent-%COMP%]   .quantity-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-cost[_ngcontent-%COMP%] {\n  width: 9rem;\n  text-align: right;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-total[_ngcontent-%COMP%] {\n  width: 9rem;\n  text-align: right;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-total[_ngcontent-%COMP%]   .total-cost[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reason[_ngcontent-%COMP%] {\n  width: 11rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reason[_ngcontent-%COMP%]   .reason-text[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reference[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reference[_ngcontent-%COMP%]   .reference-text[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.transactions-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-align: center;\n  max-width: 28rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  color: #374151;\n  background-color: white;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn.pagination-prev[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn.pagination-next[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:not(.active) {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: #f9fafb;\n}\n.transactions-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  color: #1d4ed8;\n  background-color: #eff6ff;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  border-color: transparent;\n  color: white;\n  background-color: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #1d4ed8;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1024px) and (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%] {\n    min-width: 1000px;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reason[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reference[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reason[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-reference[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n}\n@media (max-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reason[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reference[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reason[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-reference[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n    gap: 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) and (min-width: 640px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-cost[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-total[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) and (min-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-cost[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.th-total[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-cost[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-total[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) and (min-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-cost[_ngcontent-%COMP%], \n   .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .transactions-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   td.td-total[_ngcontent-%COMP%] {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n    order: 1;\n    width: 100%;\n    justify-content: center;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn.pagination-prev[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n  .transactions-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .pagination-btn.pagination-next[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=transactions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-transactions", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="transactions-container">\r
  <!-- Header -->\r
  <div class="header-section">\r
    <div class="header-content">\r
      <h1 class="text-2xl font-bold text-gray-900">Inventory Transactions</h1>\r
      <p class="text-gray-600">Track and manage all inventory movements and transactions</p>\r
    </div>\r
    <div class="header-actions">\r
      <button \r
        (click)="refreshData()" \r
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
        <select \r
          [(ngModel)]="filters.type" \r
          class="filter-select"\r
          (change)="applyFilters()">\r
          <option *ngFor="let type of transactionTypes" [value]="type.value">\r
            {{ type.label }}\r
          </option>\r
        </select>\r
      </div>\r
\r
      <!-- Part Filter -->\r
      <div class="filter-group">\r
        <label class="filter-label">Part</label>\r
        <select \r
          [(ngModel)]="filters.part_id" \r
          class="filter-select"\r
          (change)="applyFilters()">\r
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
        <select \r
          [(ngModel)]="filters.location_id" \r
          class="filter-select"\r
          (change)="applyFilters()">\r
          <option value="">All Locations</option>\r
          <option *ngFor="let location of availableLocations" [value]="location.id">\r
            {{ location.name }} ({{ location.code }})\r
          </option>\r
        </select>\r
      </div>\r
\r
      <!-- Date Range Filters -->\r
      <div class="filter-group">\r
        <label class="filter-label">Start Date</label>\r
        <input \r
          type="date" \r
          [(ngModel)]="filters.start_date" \r
          class="filter-input"\r
          (change)="applyFilters()">\r
      </div>\r
\r
      <div class="filter-group">\r
        <label class="filter-label">End Date</label>\r
        <input \r
          type="date" \r
          [(ngModel)]="filters.end_date" \r
          class="filter-input"\r
          (change)="applyFilters()">\r
      </div>\r
\r
      <!-- Search Filter -->\r
      <div class="filter-group">\r
        <label class="filter-label">Search</label>\r
        <input \r
          type="text" \r
          [(ngModel)]="filters.search" \r
          placeholder="Search transactions..."\r
          class="filter-input"\r
          (input)="applyFilters()">\r
      </div>\r
    </div>\r
\r
    <div class="filter-actions">\r
      <button \r
        (click)="clearFilters()" \r
        class="btn btn-outline">\r
        Clear Filters\r
      </button>\r
      <button \r
        (click)="applyFilters()" \r
        class="btn btn-primary">\r
        Apply Filters\r
      </button>\r
    </div>\r
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
          <tr *ngFor="let transaction of transactions" class="table-row">\r
            <td class="td-date">\r
              {{ formatDate(transaction.created_at) }}\r
            </td>\r
            <td class="td-type">\r
              <span \r
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
      <button \r
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
        <button \r
          *ngFor="let page of [].constructor(totalPages); let i = index"\r
          (click)="onPageChange(i + 1)"\r
          [class.active]="currentPage === i + 1"\r
          class="pagination-page">\r
          {{ i + 1 }}\r
        </button>\r
      </div>\r
\r
      <button \r
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
</div>\r
`, styles: ["/* src/app/inventory/components/transactions/transactions.component.scss */\n.transactions-container {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.transactions-container .header-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 640px) {\n  .transactions-container .header-section {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.transactions-container .header-section .header-content h1 {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.25rem;\n}\n.transactions-container .header-section .header-content p {\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.transactions-container .header-section .header-actions {\n  display: flex;\n  gap: 0.75rem;\n}\n.transactions-container .filters-section {\n  background-color: white;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n}\n.transactions-container .filters-section .filters-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n@media (min-width: 640px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1280px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n.transactions-container .filters-section .filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.transactions-container .filters-section .filter-group .filter-label {\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  color: #374151;\n}\n.transactions-container .filters-section .filter-group .filter-select,\n.transactions-container .filters-section .filter-group .filter-input {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.transactions-container .filters-section .filter-group .filter-select:focus,\n.transactions-container .filters-section .filter-group .filter-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container .filters-section .filter-group .filter-select {\n  background-color: white;\n}\n.transactions-container .filters-section .filter-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.transactions-container .loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container .loading-state .loading-spinner {\n  width: 2rem;\n  height: 2rem;\n  border: 4px solid #bfdbfe;\n  border-top: 4px solid #2563eb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.transactions-container .loading-state p {\n  color: #6b7280;\n}\n.transactions-container .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container .error-state .error-icon {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.transactions-container .error-state .error-message {\n  color: #374151;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.transactions-container .table-container {\n  background-color: white;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.transactions-container .table-container .table-header {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n@media (min-width: 640px) {\n  .transactions-container .table-container .table-header {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n.transactions-container .table-container .table-header .table-title {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n@media (min-width: 640px) {\n  .transactions-container .table-container .table-header .table-title {\n    margin-bottom: 0;\n  }\n}\n.transactions-container .table-container .table-header .table-actions {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #6b7280;\n}\n.transactions-container .table-container .table-wrapper {\n  overflow-x: auto;\n}\n.transactions-container .table-container .table-wrapper table {\n  table-layout: fixed;\n}\n.transactions-container .table-container .transactions-table {\n  width: 100%;\n  min-width: 1200px;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.transactions-container .table-container .transactions-table thead {\n  background-color: #f9fafb;\n}\n.transactions-container .table-container .transactions-table thead th {\n  padding: 0.75rem 1.5rem;\n  text-align: left;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid #e5e7eb;\n}\n.transactions-container .table-container .transactions-table thead th.th-date {\n  width: 6rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-type {\n  width: 8rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-part {\n  width: 14rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-location {\n  width: 12rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-quantity {\n  width: 7rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-cost {\n  width: 9rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-total {\n  width: 9rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-reason {\n  width: 11rem;\n}\n.transactions-container .table-container .transactions-table thead th.th-reference {\n  width: 9rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row {\n  transition: background-color 0.15s ease;\n}\n.transactions-container .table-container .transactions-table tbody .table-row:hover {\n  background-color: #f9fafb;\n}\n.transactions-container .table-container .transactions-table tbody .table-row:nth-child(even) {\n  background-color: #f9fafb;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td {\n  padding: 1rem 1.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #111827;\n  border-bottom: 1px solid #e5e7eb;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-date {\n  color: #6b7280;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-type {\n  width: 8rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-type .transaction-type-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.125rem 0.625rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-part {\n  width: 14rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-part .part-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-part .part-info .part-name {\n  font-weight: 500;\n  color: #111827;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1.25rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-part .part-info .part-number {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-location {\n  width: 12rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-location .location-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-location .location-info .location-name {\n  font-weight: 500;\n  color: #111827;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1.25rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-location .location-info .location-code {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-height: 1rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-quantity {\n  width: 7rem;\n  text-align: center;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-quantity .quantity-value {\n  font-weight: 500;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-cost {\n  width: 9rem;\n  text-align: right;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-total {\n  width: 9rem;\n  text-align: right;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-total .total-cost {\n  font-weight: 500;\n  color: #111827;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-reason {\n  width: 11rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-reason .reason-text {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-reference {\n  width: 9rem;\n}\n.transactions-container .table-container .transactions-table tbody .table-row td.td-reference .reference-text {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.transactions-container .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n}\n.transactions-container .empty-state .empty-icon {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.transactions-container .empty-state .empty-title {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.transactions-container .empty-state .empty-description {\n  color: #6b7280;\n  text-align: center;\n  max-width: 28rem;\n}\n.transactions-container .pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.transactions-container .pagination .pagination-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  color: #374151;\n  background-color: white;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container .pagination .pagination-btn:hover {\n  background-color: #f9fafb;\n}\n.transactions-container .pagination .pagination-btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container .pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.transactions-container .pagination .pagination-btn.pagination-prev {\n  margin-right: 0.5rem;\n}\n.transactions-container .pagination .pagination-btn.pagination-next {\n  margin-left: 0.5rem;\n}\n.transactions-container .pagination .pagination-pages {\n  display: flex;\n  gap: 0.25rem;\n}\n.transactions-container .pagination .pagination-pages .pagination-page {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.transactions-container .pagination .pagination-pages .pagination-page:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.transactions-container .pagination .pagination-pages .pagination-page:not(.active) {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.transactions-container .pagination .pagination-pages .pagination-page:not(.active):hover {\n  background-color: #f9fafb;\n}\n.transactions-container .pagination .pagination-pages .pagination-page.active {\n  border-color: #3b82f6;\n  color: #1d4ed8;\n  background-color: #eff6ff;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  border: 1px solid transparent;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.btn.btn-primary {\n  border-color: transparent;\n  color: white;\n  background-color: #2563eb;\n}\n.btn.btn-primary:hover {\n  background-color: #1d4ed8;\n}\n.btn.btn-secondary {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.btn.btn-secondary:hover {\n  background-color: #f9fafb;\n}\n.btn.btn-outline {\n  border-color: #d1d5db;\n  color: #374151;\n  background-color: white;\n}\n.btn.btn-outline:hover {\n  background-color: #f9fafb;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 1024px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1024px) and (min-width: 640px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1024px) {\n  .transactions-container .table-container .transactions-table {\n    min-width: 1000px;\n  }\n  .transactions-container .table-container .transactions-table thead th.th-reason,\n  .transactions-container .table-container .transactions-table thead th.th-reference {\n    display: none;\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container .table-container .transactions-table thead th.th-reason,\n  .transactions-container .table-container .transactions-table thead th.th-reference {\n    display: table-cell;\n  }\n}\n@media (max-width: 1024px) {\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-reason,\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-reference {\n    display: none;\n  }\n}\n@media (max-width: 1024px) and (min-width: 1024px) {\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-reason,\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-reference {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container {\n    padding: 1rem;\n    gap: 1rem;\n  }\n  .transactions-container .filters-section {\n    padding: 1rem;\n  }\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) and (min-width: 640px) {\n  .transactions-container .filters-section .filters-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container .filters-section .filter-actions {\n    flex-direction: column;\n  }\n  .transactions-container .filters-section .filter-actions .btn {\n    width: 100%;\n  }\n  .transactions-container .table-container .table-header {\n    padding: 1rem;\n  }\n  .transactions-container .table-container .transactions-table {\n    min-width: 800px;\n  }\n  .transactions-container .table-container .transactions-table thead th {\n    padding: 0.5rem 1rem;\n  }\n  .transactions-container .table-container .transactions-table thead th.th-cost,\n  .transactions-container .table-container .transactions-table thead th.th-total {\n    display: none;\n  }\n}\n@media (max-width: 768px) and (min-width: 768px) {\n  .transactions-container .table-container .transactions-table thead th.th-cost,\n  .transactions-container .table-container .transactions-table thead th.th-total {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container .table-container .transactions-table tbody .table-row td {\n    padding: 0.5rem 1rem;\n  }\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-cost,\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-total {\n    display: none;\n  }\n}\n@media (max-width: 768px) and (min-width: 768px) {\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-cost,\n  .transactions-container .table-container .transactions-table tbody .table-row td.td-total {\n    display: table-cell;\n  }\n}\n@media (max-width: 768px) {\n  .transactions-container .table-container .pagination {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .transactions-container .table-container .pagination .pagination-pages {\n    order: 2;\n  }\n  .transactions-container .table-container .pagination .pagination-btn {\n    order: 1;\n    width: 100%;\n    justify-content: center;\n  }\n  .transactions-container .table-container .pagination .pagination-btn.pagination-prev {\n    margin-right: 0;\n  }\n  .transactions-container .table-container .pagination .pagination-btn.pagination-next {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=transactions.component.css.map */\n"] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionsComponent, { className: "TransactionsComponent", filePath: "src/app/inventory/components/transactions/transactions.component.ts", lineNumber: 13 });
})();
export {
  TransactionsComponent
};
//# sourceMappingURL=chunk-NHWAAQJI.js.map
