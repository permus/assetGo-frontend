import {
  InventoryAnalyticsService
} from "./chunk-FQPE6O4E.js";
import "./chunk-OR4RIGW3.js";
import {
  CommonModule,
  CurrencyPipe,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SCVX3V3B.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/inventory/components/abc-analysis/abc-analysis.component.ts
function AbcAnalysisComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading ABC analysis data...");
    \u0275\u0275elementEnd()();
  }
}
function AbcAnalysisComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function AbcAnalysisComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 14);
    \u0275\u0275element(7, "path", 6);
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
function AbcAnalysisComponent_div_3_tr_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 62);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 63);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 64);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 65)(13, "span", 66);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.part_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, item_r4.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.calculateValuePercentage(item_r4.value).toFixed(2), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (item_r4.cumulative_ratio * 100).toFixed(2), "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getAbcClassColor(item_r4.class));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.class, " ");
  }
}
function AbcAnalysisComponent_div_3_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 68);
    \u0275\u0275element(2, "path", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 70);
    \u0275\u0275text(4, "No Results Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 71);
    \u0275\u0275text(6, "Try adjusting your search criteria or filters.");
    \u0275\u0275elementEnd()();
  }
}
function AbcAnalysisComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 15)(2, "div", 16)(3, "h2", 17);
    \u0275\u0275text(4, "ABC Analysis Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Inventory classification by value contribution");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "button", 20);
    \u0275\u0275listener("click", function AbcAnalysisComponent_div_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 14);
    \u0275\u0275element(10, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Refresh ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 21);
    \u0275\u0275listener("click", function AbcAnalysisComponent_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCSV());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 14);
    \u0275\u0275element(14, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 23)(17, "div", 24)(18, "div", 25)(19, "div", 26);
    \u0275\u0275text(20, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h3", 27);
    \u0275\u0275text(22, "Class A Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 28)(24, "div", 29)(25, "span", 30);
    \u0275\u0275text(26, "Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 31);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 29)(30, "span", 30);
    \u0275\u0275text(31, "Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 31);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 29)(36, "span", 30);
    \u0275\u0275text(37, "Value %:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 31);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 32);
    \u0275\u0275element(41, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 34)(43, "div", 25)(44, "div", 35);
    \u0275\u0275text(45, "B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h3", 27);
    \u0275\u0275text(47, "Class B Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 28)(49, "div", 29)(50, "span", 30);
    \u0275\u0275text(51, "Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 31);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 29)(55, "span", 30);
    \u0275\u0275text(56, "Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 31);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 29)(61, "span", 30);
    \u0275\u0275text(62, "Value %:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 31);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 32);
    \u0275\u0275element(66, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 37)(68, "div", 25)(69, "div", 38);
    \u0275\u0275text(70, "C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "h3", 27);
    \u0275\u0275text(72, "Class C Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 28)(74, "div", 29)(75, "span", 30);
    \u0275\u0275text(76, "Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 31);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 29)(80, "span", 30);
    \u0275\u0275text(81, "Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 31);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 29)(86, "span", 30);
    \u0275\u0275text(87, "Value %:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 31);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "div", 32);
    \u0275\u0275element(91, "div", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 40)(93, "h3", 41);
    \u0275\u0275text(94, "Detailed Analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 42)(96, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(97, "svg", 44);
    \u0275\u0275element(98, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(99, "input", 46);
    \u0275\u0275listener("input", function AbcAnalysisComponent_div_3_Template_input_input_99_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 47)(101, "select", 48);
    \u0275\u0275listener("change", function AbcAnalysisComponent_div_3_Template_select_change_101_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClassFilterChange($event));
    });
    \u0275\u0275elementStart(102, "option", 49);
    \u0275\u0275text(103, "All Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "option", 50);
    \u0275\u0275text(105, "Class A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "option", 51);
    \u0275\u0275text(107, "Class B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "option", 52);
    \u0275\u0275text(109, "Class C");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(110, "svg", 53);
    \u0275\u0275element(111, "path", 54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(112, "div", 55)(113, "table", 56)(114, "thead")(115, "tr", 57)(116, "th");
    \u0275\u0275text(117, "Part Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "th");
    \u0275\u0275text(119, "Part Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "th");
    \u0275\u0275text(121, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "th");
    \u0275\u0275text(123, "Value %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "th");
    \u0275\u0275text(125, "Cumulative %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "th");
    \u0275\u0275text(127, "ABC Class");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(128, "tbody");
    \u0275\u0275template(129, AbcAnalysisComponent_div_3_tr_129_Template, 15, 10, "tr", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(130, AbcAnalysisComponent_div_3_div_130_Template, 7, 0, "div", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("title", ctx_r1.getExportButtonTitle());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getExportButtonText(), " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.abcData.classA.count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 21, ctx_r1.abcData.classA.value));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.abcData.classA.percentage.toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.abcData.classA.percentage, "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.abcData.classB.count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 23, ctx_r1.abcData.classB.value));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.abcData.classB.percentage.toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.abcData.classB.percentage, "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.abcData.classC.count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 25, ctx_r1.abcData.classC.value));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.abcData.classC.percentage.toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.abcData.classC.percentage, "%");
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.selectedClass);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r1.filteredItems);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredItems.length === 0);
  }
}
var AbcAnalysisComponent = class _AbcAnalysisComponent {
  analyticsService;
  searchTerm = "";
  selectedClass = "all";
  // Optional configuration
  costBasis = "average";
  thrA;
  thrB;
  loading = true;
  error = null;
  // ABC Analysis data from API
  inventoryItems = [];
  // ABC Classification summary data
  abcData = {
    classA: {
      count: 0,
      value: 0,
      percentage: 0
    },
    classB: {
      count: 0,
      value: 0,
      percentage: 0
    },
    classC: {
      count: 0,
      value: 0,
      percentage: 0
    }
  };
  constructor(analyticsService) {
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    this.loadAbcAnalysis();
  }
  loadAbcAnalysis() {
    this.loading = true;
    this.error = null;
    this.analyticsService.getAbcAnalysis(__spreadValues(__spreadValues({
      cost_basis: this.costBasis
    }, typeof this.thrA === "number" ? { thr_a: this.thrA } : {}), typeof this.thrB === "number" ? { thr_b: this.thrB } : {})).subscribe({
      next: (response) => {
        if (response.success) {
          this.inventoryItems = response.data;
          this.calculateAbcSummary();
        } else {
          this.error = "Failed to load ABC analysis data";
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading ABC analysis:", err);
        this.error = "Error loading ABC analysis data. Please try again.";
        this.loading = false;
      }
    });
  }
  calculateAbcSummary() {
    const classA = this.inventoryItems.filter((item) => item.class === "A");
    const classB = this.inventoryItems.filter((item) => item.class === "B");
    const classC = this.inventoryItems.filter((item) => item.class === "C");
    const totalValue = this.inventoryItems.reduce((sum, item) => sum + item.value, 0);
    this.abcData.classA = {
      count: classA.length,
      value: classA.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? classA.reduce((sum, item) => sum + item.value, 0) / totalValue * 100 : 0
    };
    this.abcData.classB = {
      count: classB.length,
      value: classB.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? classB.reduce((sum, item) => sum + item.value, 0) / totalValue * 100 : 0
    };
    this.abcData.classC = {
      count: classC.length,
      value: classC.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? classC.reduce((sum, item) => sum + item.value, 0) / totalValue * 100 : 0
    };
  }
  // Filtered items based on search and class selection
  get filteredItems() {
    let items = this.inventoryItems;
    if (this.searchTerm) {
      items = items.filter((item) => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.part_id.toString().includes(this.searchTerm));
    }
    if (this.selectedClass !== "all") {
      items = items.filter((item) => item.class === this.selectedClass);
    }
    return items;
  }
  onSearchChange(event) {
    const target = event.target;
    if (target) {
      this.searchTerm = target.value;
    }
  }
  onClassFilterChange(event) {
    const target = event.target;
    if (target) {
      this.selectedClass = target.value;
    }
  }
  exportCSV() {
    const hasFilters = this.searchTerm.trim() || this.selectedClass !== "all";
    if (hasFilters) {
      this.exportFilteredCSV();
    } else {
      this.analyticsService.downloadAbcCsv(__spreadValues(__spreadValues({
        cost_basis: this.costBasis
      }, typeof this.thrA === "number" ? { thr_a: this.thrA } : {}), typeof this.thrB === "number" ? { thr_b: this.thrB } : {})).subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `abc-analysis-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19)}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
      });
    }
  }
  exportFilteredCSV() {
    const filteredData = this.filteredItems;
    if (filteredData.length === 0) {
      alert("No data to export. Please adjust your filters.");
      return;
    }
    const headers = ["Part Number", "Part Name", "Total Value", "Value %", "Cumulative %", "ABC Class"];
    const csvContent = [
      headers.join(","),
      ...filteredData.map((item) => [
        item.part_id,
        `"${item.name.replace(/"/g, '""')}"`,
        // Escape quotes in names
        item.value,
        this.calculateValuePercentage(item.value).toFixed(2),
        (item.cumulative_ratio * 100).toFixed(2),
        item.class
      ].join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    let filename = "abc-analysis-filtered";
    if (this.searchTerm.trim()) {
      filename += `-search-${this.searchTerm.trim()}`;
    }
    if (this.selectedClass !== "all") {
      filename += `-class-${this.selectedClass}`;
    }
    filename += `-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19)}.csv`;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  getAbcClassColor(abcClass) {
    switch (abcClass) {
      case "A":
        return "bg-green-100 text-green-800";
      case "B":
        return "bg-yellow-100 text-yellow-800";
      case "C":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }
  refreshData() {
    this.loadAbcAnalysis();
  }
  calculateValuePercentage(itemValue) {
    const totalValue = this.inventoryItems.reduce((sum, item) => sum + item.value, 0);
    return totalValue > 0 ? itemValue / totalValue * 100 : 0;
  }
  getExportButtonText() {
    const hasFilters = this.searchTerm.trim() || this.selectedClass !== "all";
    return hasFilters ? "Export Filtered CSV" : "Export CSV";
  }
  getExportButtonTitle() {
    const hasFilters = this.searchTerm.trim() || this.selectedClass !== "all";
    if (hasFilters) {
      let filterInfo = "Exporting filtered data: ";
      if (this.searchTerm.trim()) {
        filterInfo += `Search: "${this.searchTerm.trim()}"`;
      }
      if (this.selectedClass !== "all") {
        if (this.searchTerm.trim())
          filterInfo += ", ";
        filterInfo += `Class: ${this.selectedClass}`;
      }
      return filterInfo;
    }
    return "Export all ABC analysis data";
  }
  static \u0275fac = function AbcAnalysisComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbcAnalysisComponent)(\u0275\u0275directiveInject(InventoryAnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbcAnalysisComponent, selectors: [["app-abc-analysis"]], decls: 7, vars: 3, consts: [[1, "abc-analysis"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], ["title", "Refresh Data", 1, "voice-assistant", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "error-title"], [1, "btn", "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "abc-header"], [1, "header-left"], [1, "main-title"], [1, "subtitle"], [1, "header-right"], ["title", "Refresh Data", 1, "btn", "btn-secondary", 3, "click"], [1, "export-btn", 3, "click", "title"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "abc-summary-cards"], [1, "abc-card", "class-a"], [1, "card-header"], [1, "class-badge", "class-a-badge"], [1, "card-title"], [1, "card-metrics"], [1, "metric-row"], [1, "metric-label"], [1, "metric-value"], [1, "progress-bar"], [1, "progress-fill", "class-a-fill"], [1, "abc-card", "class-b"], [1, "class-badge", "class-b-badge"], [1, "progress-fill", "class-b-fill"], [1, "abc-card", "class-c"], [1, "class-badge", "class-c-badge"], [1, "progress-fill", "class-c-fill"], [1, "detailed-analysis"], [1, "section-title"], [1, "controls-row"], [1, "search-container"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search parts...", 1, "search-input", 3, "input", "value"], [1, "filter-container"], [1, "filter-select", 3, "change", "value"], ["value", "all"], ["value", "A"], ["value", "B"], ["value", "C"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "analysis-table-container"], [1, "analysis-table"], [1, "uppercase"], [4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "part-number"], [1, "part-name"], [1, "total-value"], [1, "value-percentage"], [1, "cumulative-percentage"], [1, "abc-class"], [1, "abc-badge"], [1, "no-results"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "no-results-title"], [1, "no-results-description"]], template: function AbcAnalysisComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AbcAnalysisComponent_div_1_Template, 4, 0, "div", 1)(2, AbcAnalysisComponent_div_2_Template, 9, 1, "div", 2)(3, AbcAnalysisComponent_div_3_Template, 131, 27, "div", 3);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function AbcAnalysisComponent_Template_button_click_4_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe], styles: ["\n\n.abc-analysis[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.abc-analysis[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.abc-analysis[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.abc-analysis[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.abc-analysis[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .class-badge[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1rem;\n  color: white;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .class-a-badge[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .class-b-badge[_ngcontent-%COMP%] {\n  background-color: #f59e0b;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .class-c-badge[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 600;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0.5rem;\n  background-color: #f3f4f6;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.class-a-fill[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.class-b-fill[_ngcontent-%COMP%] {\n  background-color: #f59e0b;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.class-c-fill[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1.5rem 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  align-items: center;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 150px;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.category[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.total-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #10b981;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.value-percentage[_ngcontent-%COMP%], \n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.cumulative-percentage[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.abc-class[_ngcontent-%COMP%]   .abc-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  min-width: 2rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .no-results-title[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   .no-results-description[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 1rem;\n  margin: 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .voice-assistant[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.abc-analysis[_ngcontent-%COMP%]   .voice-assistant[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.abc-analysis[_ngcontent-%COMP%]   .voice-assistant[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 1024px) {\n  .abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .abc-analysis[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n}\n@media (max-width: 480px) {\n  .abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem 0.75rem 2.5rem;\n  }\n}\n/*# sourceMappingURL=abc-analysis.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbcAnalysisComponent, [{
    type: Component,
    args: [{ selector: "app-abc-analysis", standalone: true, imports: [CommonModule], template: '<div class="abc-analysis">\r\n  <!-- Loading State -->\r\n  <div *ngIf="loading" class="loading-state">\r\n    <div class="loading-spinner"></div>\r\n    <p>Loading ABC analysis data...</p>\r\n  </div>\r\n\r\n  <!-- Error State -->\r\n  <div *ngIf="error && !loading" class="error-state">\r\n    <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>\r\n    </svg>\r\n    <h3 class="error-title">{{ error }}</h3>\r\n    <button class="btn btn-primary" (click)="refreshData()">\r\n      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r\n      </svg>\r\n      Retry\r\n    </button>\r\n  </div>\r\n\r\n  <!-- ABC Analysis Content -->\r\n  <div *ngIf="!loading && !error">\r\n    <!-- Header Section -->\r\n    <div class="abc-header">\r\n      <div class="header-left">\r\n        <h2 class="main-title">ABC Analysis Report</h2>\r\n        <p class="subtitle">Inventory classification by value contribution</p>\r\n      </div>\r\n      <div class="header-right">\r\n        <button class="btn btn-secondary" (click)="refreshData()" title="Refresh Data">\r\n          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r\n          </svg>\r\n          Refresh\r\n        </button>\r\n        <button class="export-btn" (click)="exportCSV()" [title]="getExportButtonTitle()">\r\n          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r\n          </svg>\r\n          {{ getExportButtonText() }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ABC Classification Summary Cards -->\r\n    <div class="abc-summary-cards">\r\n      <!-- Class A Items Card -->\r\n      <div class="abc-card class-a">\r\n        <div class="card-header">\r\n          <div class="class-badge class-a-badge">A</div>\r\n          <h3 class="card-title">Class A Items</h3>\r\n        </div>\r\n        <div class="card-metrics">\r\n          <div class="metric-row">\r\n            <span class="metric-label">Count:</span>\r\n            <span class="metric-value">{{ abcData.classA.count }}</span>\r\n          </div>\r\n          <div class="metric-row">\r\n            <span class="metric-label">Value:</span>\r\n            <span class="metric-value">{{ abcData.classA.value | currency }}</span>\r\n          </div>\r\n          <div class="metric-row">\r\n            <span class="metric-label">Value %:</span>\r\n            <span class="metric-value">{{ abcData.classA.percentage.toFixed(1) }}%</span>\r\n          </div>\r\n        </div>\r\n        <div class="progress-bar">\r\n          <div class="progress-fill class-a-fill" [style.width.%]="abcData.classA.percentage"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Class B Items Card -->\r\n      <div class="abc-card class-b">\r\n        <div class="card-header">\r\n          <div class="class-badge class-b-badge">B</div>\r\n          <h3 class="card-title">Class B Items</h3>\r\n        </div>\r\n        <div class="card-metrics">\r\n          <div class="metric-row">\r\n            <span class="metric-label">Count:</span>\r\n            <span class="metric-value">{{ abcData.classB.count }}</span>\r\n          </div>\r\n          <div class="metric-row">\r\n            <span class="metric-label">Value:</span>\r\n            <span class="metric-value">{{ abcData.classB.value | currency }}</span>\r\n          </div>\r\n          <div class="metric-row">\r\n            <span class="metric-label">Value %:</span>\r\n            <span class="metric-value">{{ abcData.classB.percentage.toFixed(1) }}%</span>\r\n          </div>\r\n        </div>\r\n        <div class="progress-bar">\r\n          <div class="progress-fill class-b-fill" [style.width.%]="abcData.classB.percentage"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Class C Items Card -->\r\n      <div class="abc-card class-c">\r\n        <div class="card-header">\r\n          <div class="class-badge class-c-badge">C</div>\r\n          <h3 class="card-title">Class C Items</h3>\r\n        </div>\r\n        <div class="card-metrics">\r\n          <div class="metric-row">\r\n            <span class="metric-label">Count:</span>\r\n            <span class="metric-value">{{ abcData.classC.count }}</span>\r\n          </div>\r\n          <div class="metric-row">\r\n            <span class="metric-label">Value:</span>\r\n            <span class="metric-value">{{ abcData.classC.value | currency }}</span>\r\n          </div>\r\n          <div class="metric-row">\r\n            <span class="metric-label">Value %:</span>\r\n            <span class="metric-value">{{ abcData.classC.percentage.toFixed(1) }}%</span>\r\n          </div>\r\n        </div>\r\n        <div class="progress-bar">\r\n          <div class="progress-fill class-c-fill" [style.width.%]="abcData.classC.percentage"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Detailed Analysis Section -->\r\n    <div class="detailed-analysis">\r\n      <h3 class="section-title">Detailed Analysis</h3>\r\n\r\n      <!-- Search and Filter Controls -->\r\n      <div class="controls-row">\r\n        <div class="search-container">\r\n          <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r\n          </svg>\r\n          <input\r\n            type="text"\r\n            placeholder="Search parts..."\r\n            class="search-input"\r\n            [value]="searchTerm"\r\n            (input)="onSearchChange($event)">\r\n        </div>\r\n\r\n        <div class="filter-container">\r\n          <select\r\n            class="filter-select"\r\n            [value]="selectedClass"\r\n            (change)="onClassFilterChange($event)">\r\n            <option value="all">All Classes</option>\r\n            <option value="A">Class A</option>\r\n            <option value="B">Class B</option>\r\n            <option value="C">Class C</option>\r\n          </select>\r\n          <svg class="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Analysis Table -->\r\n      <div class="analysis-table-container">\r\n        <table class="analysis-table">\r\n          <thead>\r\n            <tr class="uppercase">\r\n              <th>Part Number</th>\r\n              <th>Part Name</th>\r\n              <th>Total Value</th>\r\n              <th>Value %</th>\r\n              <th>Cumulative %</th>\r\n              <th>ABC Class</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor="let item of filteredItems">\r\n              <td class="part-number">{{ item.part_id }}</td>\r\n              <td class="part-name">{{ item.name }}</td>\r\n              <td class="total-value">{{ item.value | currency }}</td>\r\n                             <td class="value-percentage">{{ calculateValuePercentage(item.value).toFixed(2) }}%</td>\r\n              <td class="cumulative-percentage">{{ (item.cumulative_ratio * 100).toFixed(2) }}%</td>\r\n              <td class="abc-class">\r\n                <span class="abc-badge" [class]="getAbcClassColor(item.class)">\r\n                  {{ item.class }}\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <!-- No Results Message -->\r\n        <div *ngIf="filteredItems.length === 0" class="no-results">\r\n          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r\n          </svg>\r\n          <h3 class="no-results-title">No Results Found</h3>\r\n          <p class="no-results-description">Try adjusting your search criteria or filters.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Voice Assistant Button -->\r\n  <button class="voice-assistant" (click)="refreshData()" title="Refresh Data">\r\n    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r\n    </svg>\r\n  </button>\r\n</div>\r\n', styles: ["/* src/app/inventory/components/abc-analysis/abc-analysis.component.scss */\n.abc-analysis {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.abc-analysis .loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.abc-analysis .loading-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.abc-analysis .loading-state p {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.abc-analysis .error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.abc-analysis .error-state .error-title {\n  color: #ef4444;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0;\n}\n.abc-analysis .error-state .btn {\n  margin-top: 1rem;\n}\n.abc-analysis .abc-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.abc-analysis .abc-header .header-left .main-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.abc-analysis .abc-header .header-left .subtitle {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0;\n}\n.abc-analysis .abc-header .header-right {\n  display: flex;\n  gap: 0.75rem;\n}\n.abc-analysis .abc-header .header-right .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n.abc-analysis .abc-header .header-right .btn.btn-secondary {\n  background-color: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.abc-analysis .abc-header .header-right .btn.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.abc-analysis .abc-header .header-right .export-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.abc-analysis .abc-header .header-right .export-btn:hover {\n  background-color: #2563eb;\n}\n.abc-analysis .abc-header .header-right .export-btn svg {\n  color: white;\n}\n.abc-analysis .abc-summary-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.abc-analysis .abc-summary-cards .abc-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .class-badge {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1rem;\n  color: white;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .class-a-badge {\n  background-color: #10b981;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .class-b-badge {\n  background-color: #f59e0b;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .class-c-badge {\n  background-color: #3b82f6;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .card-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics {\n  margin-bottom: 1rem;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics .metric-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics .metric-row:last-child {\n  margin-bottom: 0;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics .metric-row .metric-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics .metric-row .metric-value {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 600;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar {\n  width: 100%;\n  height: 0.5rem;\n  background-color: #f3f4f6;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar .progress-fill {\n  height: 100%;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar .progress-fill.class-a-fill {\n  background-color: #10b981;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar .progress-fill.class-b-fill {\n  background-color: #f59e0b;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar .progress-fill.class-c-fill {\n  background-color: #3b82f6;\n}\n.abc-analysis .detailed-analysis {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis .detailed-analysis .section-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1.5rem 0;\n}\n.abc-analysis .detailed-analysis .controls-row {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  align-items: center;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container .search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container .search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container .search-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container .search-input::placeholder {\n  color: #9ca3af;\n}\n.abc-analysis .detailed-analysis .controls-row .filter-container {\n  position: relative;\n  min-width: 150px;\n}\n.abc-analysis .detailed-analysis .controls-row .filter-container .filter-select {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.abc-analysis .detailed-analysis .controls-row .filter-container .filter-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.abc-analysis .detailed-analysis .controls-row .filter-container .dropdown-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.abc-analysis .detailed-analysis .analysis-table-container {\n  overflow-x: auto;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table thead {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table thead th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr {\n  border-bottom: 1px solid #f3f4f6;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr:last-child {\n  border-bottom: none;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.part-number {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.part-name {\n  font-weight: 500;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.category {\n  color: #6b7280;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.total-value {\n  font-weight: 600;\n  color: #10b981;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.value-percentage,\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.cumulative-percentage {\n  font-weight: 500;\n  text-align: center;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.abc-class .abc-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  min-width: 2rem;\n}\n.abc-analysis .no-results {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis .no-results .no-results-title {\n  color: #6b7280;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 1rem 0 0.5rem 0;\n}\n.abc-analysis .no-results .no-results-description {\n  color: #9ca3af;\n  font-size: 1rem;\n  margin: 0;\n}\n.abc-analysis .voice-assistant {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.abc-analysis .voice-assistant:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.abc-analysis .voice-assistant svg {\n  color: white;\n}\n@media (max-width: 1024px) {\n  .abc-analysis .abc-summary-cards {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n  .abc-analysis .detailed-analysis .controls-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .abc-analysis .detailed-analysis .controls-row .search-container {\n    max-width: none;\n  }\n  .abc-analysis .detailed-analysis .controls-row .filter-container {\n    min-width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .abc-analysis {\n    padding: 1rem;\n  }\n  .abc-analysis .abc-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .abc-analysis .abc-header .header-right .export-btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .abc-analysis .abc-summary-cards {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .abc-analysis .abc-summary-cards .abc-card {\n    padding: 1rem;\n  }\n  .abc-analysis .detailed-analysis {\n    padding: 1rem;\n  }\n  .abc-analysis .detailed-analysis .analysis-table-container .analysis-table {\n    min-width: 600px;\n  }\n}\n@media (max-width: 480px) {\n  .abc-analysis .abc-header .header-left .main-title {\n    font-size: 1.5rem;\n  }\n  .abc-analysis .detailed-analysis .controls-row .search-container .search-input {\n    padding: 0.75rem 1rem 0.75rem 2.5rem;\n  }\n}\n/*# sourceMappingURL=abc-analysis.component.css.map */\n"] }]
  }], () => [{ type: InventoryAnalyticsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbcAnalysisComponent, { className: "AbcAnalysisComponent", filePath: "src/app/inventory/components/abc-analysis/abc-analysis.component.ts", lineNumber: 12 });
})();
export {
  AbcAnalysisComponent
};
//# sourceMappingURL=chunk-MBSLRGKM.js.map
