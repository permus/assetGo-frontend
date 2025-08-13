import {
  CommonModule,
  Component,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JZMUYI4.js";
import "./chunk-TXDUYLVM.js";

// src/app/inventory/components/abc-analysis/abc-analysis.component.ts
function AbcAnalysisComponent_tr_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 53)(14, "span", 54);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.partNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.partName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("AED ", item_r1.totalValue, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.valuePercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.cumulativePercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getAbcClassColor(item_r1.abcClass));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.abcClass, " ");
  }
}
var AbcAnalysisComponent = class _AbcAnalysisComponent {
  searchTerm = "";
  selectedClass = "all";
  // Sample ABC Analysis data
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
      count: 1,
      value: 9,
      percentage: 100
    }
  };
  // Sample inventory items for detailed analysis
  inventoryItems = [
    {
      partNumber: 1,
      partName: "part 1",
      category: "ews",
      totalValue: 9,
      valuePercentage: 100,
      cumulativePercentage: 100,
      abcClass: "C"
    }
  ];
  // Filtered items based on search and class selection
  get filteredItems() {
    let items = this.inventoryItems;
    if (this.searchTerm) {
      items = items.filter((item) => item.partName.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.partNumber.toString().includes(this.searchTerm) || item.category.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    if (this.selectedClass !== "all") {
      items = items.filter((item) => item.abcClass === this.selectedClass);
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
    console.log("Exporting ABC Analysis to CSV...");
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
  static \u0275fac = function AbcAnalysisComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbcAnalysisComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbcAnalysisComponent, selectors: [["app-abc-analysis"]], decls: 128, vars: 18, consts: [[1, "abc-analysis"], [1, "abc-header"], [1, "header-left"], [1, "main-title"], [1, "subtitle"], [1, "header-right"], [1, "export-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "abc-summary-cards"], [1, "abc-card", "class-a"], [1, "card-header"], [1, "class-badge", "class-a-badge"], [1, "card-title"], [1, "card-metrics"], [1, "metric-row"], [1, "metric-label"], [1, "metric-value"], [1, "progress-bar"], [1, "progress-fill", "class-a-fill"], [1, "abc-card", "class-b"], [1, "class-badge", "class-b-badge"], [1, "progress-fill", "class-b-fill"], [1, "abc-card", "class-c"], [1, "class-badge", "class-c-badge"], [1, "progress-fill", "class-c-fill"], [1, "detailed-analysis"], [1, "section-title"], [1, "controls-row"], [1, "search-container"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search parts...", 1, "search-input", 3, "input", "value"], [1, "filter-container"], [1, "filter-select", 3, "change", "value"], ["value", "all"], ["value", "A"], ["value", "B"], ["value", "C"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "dropdown-arrow"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "analysis-table-container"], [1, "analysis-table"], [4, "ngFor", "ngForOf"], [1, "voice-assistant"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"], [1, "part-number"], [1, "part-name"], [1, "category"], [1, "total-value"], [1, "value-percentage"], [1, "cumulative-percentage"], [1, "abc-class"], [1, "abc-badge"]], template: function AbcAnalysisComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "ABC Analysis Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Inventory classification by value contribution");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function AbcAnalysisComponent_Template_button_click_8_listener() {
        return ctx.exportCSV();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Export CSV ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12);
      \u0275\u0275text(16, "A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h3", 13);
      \u0275\u0275text(18, "Class A Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "span", 16);
      \u0275\u0275text(22, "Count:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 17);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 15)(26, "span", 16);
      \u0275\u0275text(27, "Value:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 17);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 15)(31, "span", 16);
      \u0275\u0275text(32, "Value %:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 17);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 18);
      \u0275\u0275element(36, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 20)(38, "div", 11)(39, "div", 21);
      \u0275\u0275text(40, "B");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h3", 13);
      \u0275\u0275text(42, "Class B Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 14)(44, "div", 15)(45, "span", 16);
      \u0275\u0275text(46, "Count:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 17);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 15)(50, "span", 16);
      \u0275\u0275text(51, "Value:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 17);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 15)(55, "span", 16);
      \u0275\u0275text(56, "Value %:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 17);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 18);
      \u0275\u0275element(60, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 23)(62, "div", 11)(63, "div", 24);
      \u0275\u0275text(64, "C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "h3", 13);
      \u0275\u0275text(66, "Class C Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 14)(68, "div", 15)(69, "span", 16);
      \u0275\u0275text(70, "Count:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span", 17);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 15)(74, "span", 16);
      \u0275\u0275text(75, "Value:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 17);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 15)(79, "span", 16);
      \u0275\u0275text(80, "Value %:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span", 17);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 18);
      \u0275\u0275element(84, "div", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "div", 26)(86, "h3", 27);
      \u0275\u0275text(87, "Detailed Analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 28)(89, "div", 29);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(90, "svg", 30);
      \u0275\u0275element(91, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(92, "input", 32);
      \u0275\u0275listener("input", function AbcAnalysisComponent_Template_input_input_92_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 33)(94, "select", 34);
      \u0275\u0275listener("change", function AbcAnalysisComponent_Template_select_change_94_listener($event) {
        return ctx.onClassFilterChange($event);
      });
      \u0275\u0275elementStart(95, "option", 35);
      \u0275\u0275text(96, "All Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "option", 36);
      \u0275\u0275text(98, "Class A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "option", 37);
      \u0275\u0275text(100, "Class B");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "option", 38);
      \u0275\u0275text(102, "Class C");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(103, "svg", 39);
      \u0275\u0275element(104, "path", 40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(105, "div", 41)(106, "table", 42)(107, "thead")(108, "tr")(109, "th");
      \u0275\u0275text(110, "Part Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th");
      \u0275\u0275text(112, "Part Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th");
      \u0275\u0275text(114, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th");
      \u0275\u0275text(116, "Total Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th");
      \u0275\u0275text(118, "Value %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th");
      \u0275\u0275text(120, "Cumulative %");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th");
      \u0275\u0275text(122, "ABC Class");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "tbody");
      \u0275\u0275template(124, AbcAnalysisComponent_tr_124_Template, 16, 9, "tr", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "button", 44);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(126, "svg", 45);
      \u0275\u0275element(127, "path", 46);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275textInterpolate(ctx.abcData.classA.count);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("AED ", ctx.abcData.classA.value, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.abcData.classA.percentage, "%");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.abcData.classA.percentage, "%");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.abcData.classB.count);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("AED ", ctx.abcData.classB.value, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.abcData.classB.percentage, "%");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.abcData.classB.percentage, "%");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.abcData.classC.count);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("AED ", ctx.abcData.classC.value, "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.abcData.classC.percentage, "%");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.abcData.classC.percentage, "%");
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.selectedClass);
      \u0275\u0275advance(30);
      \u0275\u0275property("ngForOf", ctx.filteredItems);
    }
  }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.abc-analysis[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .class-badge[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1rem;\n  color: white;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .class-a-badge[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .class-b-badge[_ngcontent-%COMP%] {\n  background-color: #f59e0b;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .class-c-badge[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .card-metrics[_ngcontent-%COMP%]   .metric-row[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 600;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0.5rem;\n  background-color: #f3f4f6;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.class-a-fill[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.class-b-fill[_ngcontent-%COMP%] {\n  background-color: #f59e0b;\n}\n.abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill.class-c-fill[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1.5rem 0;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  align-items: center;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 150px;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.part-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.category[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.total-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #10b981;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.value-percentage[_ngcontent-%COMP%], \n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.cumulative-percentage[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n}\n.abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.abc-class[_ngcontent-%COMP%]   .abc-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  min-width: 2rem;\n}\n.abc-analysis[_ngcontent-%COMP%]   .voice-assistant[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.abc-analysis[_ngcontent-%COMP%]   .voice-assistant[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.abc-analysis[_ngcontent-%COMP%]   .voice-assistant[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 1024px) {\n  .abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .abc-analysis[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .abc-summary-cards[_ngcontent-%COMP%]   .abc-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .analysis-table-container[_ngcontent-%COMP%]   .analysis-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n}\n@media (max-width: 480px) {\n  .abc-analysis[_ngcontent-%COMP%]   .abc-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .abc-analysis[_ngcontent-%COMP%]   .detailed-analysis[_ngcontent-%COMP%]   .controls-row[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem 0.75rem 2.5rem;\n  }\n}\n/*# sourceMappingURL=abc-analysis.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbcAnalysisComponent, [{
    type: Component,
    args: [{ selector: "app-abc-analysis", standalone: true, imports: [CommonModule], template: '<div class="abc-analysis">\r\n  <!-- Header Section -->\r\n  <div class="abc-header">\r\n    <div class="header-left">\r\n      <h2 class="main-title">ABC Analysis Report</h2>\r\n      <p class="subtitle">Inventory classification by value contribution</p>\r\n    </div>\r\n    <div class="header-right">\r\n      <button class="export-btn" (click)="exportCSV()">\r\n        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r\n        </svg>\r\n        Export CSV\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- ABC Classification Summary Cards -->\r\n  <div class="abc-summary-cards">\r\n    <!-- Class A Items Card -->\r\n    <div class="abc-card class-a">\r\n      <div class="card-header">\r\n        <div class="class-badge class-a-badge">A</div>\r\n        <h3 class="card-title">Class A Items</h3>\r\n      </div>\r\n      <div class="card-metrics">\r\n        <div class="metric-row">\r\n          <span class="metric-label">Count:</span>\r\n          <span class="metric-value">{{ abcData.classA.count }}</span>\r\n        </div>\r\n        <div class="metric-row">\r\n          <span class="metric-label">Value:</span>\r\n          <span class="metric-value">AED {{ abcData.classA.value }}</span>\r\n        </div>\r\n        <div class="metric-row">\r\n          <span class="metric-label">Value %:</span>\r\n          <span class="metric-value">{{ abcData.classA.percentage }}%</span>\r\n        </div>\r\n      </div>\r\n      <div class="progress-bar">\r\n        <div class="progress-fill class-a-fill" [style.width.%]="abcData.classA.percentage"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Class B Items Card -->\r\n    <div class="abc-card class-b">\r\n      <div class="card-header">\r\n        <div class="class-badge class-b-badge">B</div>\r\n        <h3 class="card-title">Class B Items</h3>\r\n      </div>\r\n      <div class="card-metrics">\r\n        <div class="metric-row">\r\n          <span class="metric-label">Count:</span>\r\n          <span class="metric-value">{{ abcData.classB.count }}</span>\r\n        </div>\r\n        <div class="metric-row">\r\n          <span class="metric-label">Value:</span>\r\n          <span class="metric-value">AED {{ abcData.classB.value }}</span>\r\n        </div>\r\n        <div class="metric-row">\r\n          <span class="metric-label">Value %:</span>\r\n          <span class="metric-value">{{ abcData.classB.percentage }}%</span>\r\n        </div>\r\n      </div>\r\n      <div class="progress-bar">\r\n        <div class="progress-fill class-b-fill" [style.width.%]="abcData.classB.percentage"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Class C Items Card -->\r\n    <div class="abc-card class-c">\r\n      <div class="card-header">\r\n        <div class="class-badge class-c-badge">C</div>\r\n        <h3 class="card-title">Class C Items</h3>\r\n      </div>\r\n      <div class="card-metrics">\r\n        <div class="metric-row">\r\n          <span class="metric-label">Count:</span>\r\n          <span class="metric-value">{{ abcData.classC.count }}</span>\r\n        </div>\r\n        <div class="metric-row">\r\n          <span class="metric-label">Value:</span>\r\n          <span class="metric-value">AED {{ abcData.classC.value }}</span>\r\n        </div>\r\n        <div class="metric-row">\r\n          <span class="metric-label">Value %:</span>\r\n          <span class="metric-value">{{ abcData.classC.percentage }}%</span>\r\n        </div>\r\n      </div>\r\n      <div class="progress-bar">\r\n        <div class="progress-fill class-c-fill" [style.width.%]="abcData.classC.percentage"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Detailed Analysis Section -->\r\n  <div class="detailed-analysis">\r\n    <h3 class="section-title">Detailed Analysis</h3>\r\n    \r\n    <!-- Search and Filter Controls -->\r\n    <div class="controls-row">\r\n      <div class="search-container">\r\n        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r\n        </svg>\r\n        <input \r\n          type="text" \r\n          placeholder="Search parts..." \r\n          class="search-input"\r\n          [value]="searchTerm"\r\n          (input)="onSearchChange($event)">\r\n      </div>\r\n\r\n      <div class="filter-container">\r\n        <select \r\n          class="filter-select"\r\n          [value]="selectedClass"\r\n          (change)="onClassFilterChange($event)">\r\n          <option value="all">All Classes</option>\r\n          <option value="A">Class A</option>\r\n          <option value="B">Class B</option>\r\n          <option value="C">Class C</option>\r\n        </select>\r\n        <svg class="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Analysis Table -->\r\n    <div class="analysis-table-container">\r\n      <table class="analysis-table">\r\n        <thead>\r\n          <tr>\r\n            <th>Part Number</th>\r\n            <th>Part Name</th>\r\n            <th>Category</th>\r\n            <th>Total Value</th>\r\n            <th>Value %</th>\r\n            <th>Cumulative %</th>\r\n            <th>ABC Class</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor="let item of filteredItems">\r\n            <td class="part-number">{{ item.partNumber }}</td>\r\n            <td class="part-name">{{ item.partName }}</td>\r\n            <td class="category">{{ item.category }}</td>\r\n            <td class="total-value">AED {{ item.totalValue }}</td>\r\n            <td class="value-percentage">{{ item.valuePercentage }}%</td>\r\n            <td class="cumulative-percentage">{{ item.cumulativePercentage }}%</td>\r\n            <td class="abc-class">\r\n              <span class="abc-badge" [class]="getAbcClassColor(item.abcClass)">\r\n                {{ item.abcClass }}\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Voice Assistant Button -->\r\n  <button class="voice-assistant">\r\n    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>\r\n    </svg>\r\n  </button>\r\n</div>\r\n', styles: ["/* src/app/inventory/components/abc-analysis/abc-analysis.component.scss */\n.abc-analysis {\n  position: relative;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.abc-analysis .abc-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.abc-analysis .abc-header .header-left .main-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.abc-analysis .abc-header .header-left .subtitle {\n  font-size: 1rem;\n  color: #6b7280;\n  margin: 0;\n}\n.abc-analysis .abc-header .header-right .export-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.abc-analysis .abc-header .header-right .export-btn:hover {\n  background-color: #2563eb;\n}\n.abc-analysis .abc-header .header-right .export-btn svg {\n  color: white;\n}\n.abc-analysis .abc-summary-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.abc-analysis .abc-summary-cards .abc-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .class-badge {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1rem;\n  color: white;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .class-a-badge {\n  background-color: #10b981;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .class-b-badge {\n  background-color: #f59e0b;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .class-c-badge {\n  background-color: #3b82f6;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-header .card-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics {\n  margin-bottom: 1rem;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics .metric-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics .metric-row:last-child {\n  margin-bottom: 0;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics .metric-row .metric-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.abc-analysis .abc-summary-cards .abc-card .card-metrics .metric-row .metric-value {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 600;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar {\n  width: 100%;\n  height: 0.5rem;\n  background-color: #f3f4f6;\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar .progress-fill {\n  height: 100%;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar .progress-fill.class-a-fill {\n  background-color: #10b981;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar .progress-fill.class-b-fill {\n  background-color: #f59e0b;\n}\n.abc-analysis .abc-summary-cards .abc-card .progress-bar .progress-fill.class-c-fill {\n  background-color: #3b82f6;\n}\n.abc-analysis .detailed-analysis {\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.abc-analysis .detailed-analysis .section-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 1.5rem 0;\n}\n.abc-analysis .detailed-analysis .controls-row {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  align-items: center;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container .search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #9ca3af;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container .search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: #f9fafb;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container .search-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background-color: white;\n}\n.abc-analysis .detailed-analysis .controls-row .search-container .search-input::placeholder {\n  color: #9ca3af;\n}\n.abc-analysis .detailed-analysis .controls-row .filter-container {\n  position: relative;\n  min-width: 150px;\n}\n.abc-analysis .detailed-analysis .controls-row .filter-container .filter-select {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  appearance: none;\n  cursor: pointer;\n}\n.abc-analysis .detailed-analysis .controls-row .filter-container .filter-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.abc-analysis .detailed-analysis .controls-row .filter-container .dropdown-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1rem;\n  height: 1rem;\n  color: #6b7280;\n  pointer-events: none;\n}\n.abc-analysis .detailed-analysis .analysis-table-container {\n  overflow-x: auto;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table thead {\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table thead th {\n  padding: 1rem;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr {\n  border-bottom: 1px solid #f3f4f6;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr:last-child {\n  border-bottom: none;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #111827;\n  vertical-align: top;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.part-number {\n  font-weight: 600;\n  color: #3b82f6;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.part-name {\n  font-weight: 500;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.category {\n  color: #6b7280;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.total-value {\n  font-weight: 600;\n  color: #10b981;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.value-percentage,\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.cumulative-percentage {\n  font-weight: 500;\n  text-align: center;\n}\n.abc-analysis .detailed-analysis .analysis-table-container .analysis-table tbody tr td.abc-class .abc-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  min-width: 2rem;\n}\n.abc-analysis .voice-assistant {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.abc-analysis .voice-assistant:hover {\n  background-color: #2563eb;\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.abc-analysis .voice-assistant svg {\n  color: white;\n}\n@media (max-width: 1024px) {\n  .abc-analysis .abc-summary-cards {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n  .abc-analysis .detailed-analysis .controls-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .abc-analysis .detailed-analysis .controls-row .search-container {\n    max-width: none;\n  }\n  .abc-analysis .detailed-analysis .controls-row .filter-container {\n    min-width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .abc-analysis {\n    padding: 1rem;\n  }\n  .abc-analysis .abc-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .abc-analysis .abc-header .header-right .export-btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .abc-analysis .abc-summary-cards {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .abc-analysis .abc-summary-cards .abc-card {\n    padding: 1rem;\n  }\n  .abc-analysis .detailed-analysis {\n    padding: 1rem;\n  }\n  .abc-analysis .detailed-analysis .analysis-table-container .analysis-table {\n    min-width: 600px;\n  }\n}\n@media (max-width: 480px) {\n  .abc-analysis .abc-header .header-left .main-title {\n    font-size: 1.5rem;\n  }\n  .abc-analysis .detailed-analysis .controls-row .search-container .search-input {\n    padding: 0.75rem 1rem 0.75rem 2.5rem;\n  }\n}\n/*# sourceMappingURL=abc-analysis.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbcAnalysisComponent, { className: "AbcAnalysisComponent", filePath: "src/app/inventory/components/abc-analysis/abc-analysis.component.ts", lineNumber: 11 });
})();
export {
  AbcAnalysisComponent
};
//# sourceMappingURL=chunk-QKIMUY23.js.map
