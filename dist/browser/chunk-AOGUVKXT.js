import {
  AIImageUploadService
} from "./chunk-NDJXLMI7.js";
import {
  FormsModule
} from "./chunk-ISERUI2H.js";
import "./chunk-OR4RIGW3.js";
import {
  CommonModule,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SCVX3V3B.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/ai-features/ai-image-recognition/ai-image-recognition.component.ts
function AIImageRecognitionComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementStart(2, "button", 12);
    \u0275\u0275listener("click", function AIImageRecognitionComponent_div_7_div_1_Template_button_click_2_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(i_r2));
    });
    \u0275\u0275text(3, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("src", p_r4, \u0275\u0275sanitizeUrl)("alt", "preview-" + i_r2);
  }
}
function AIImageRecognitionComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, AIImageRecognitionComponent_div_7_div_1_Template, 4, 2, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.previews);
  }
}
function AIImageRecognitionComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg);
  }
}
function AIImageRecognitionComponent_section_11_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getConfidenceClass(ctx_r2.result.evidence == null ? null : ctx_r2.result.evidence.fieldsFound == null ? null : ctx_r2.result.evidence.fieldsFound.includes("manufacturer")));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.result.evidence == null ? null : ctx_r2.result.evidence.fieldsFound == null ? null : ctx_r2.result.evidence.fieldsFound.includes("manufacturer")) ? "High" : "Low", " confidence ");
  }
}
function AIImageRecognitionComponent_section_11_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getConfidenceClass(ctx_r2.result.evidence == null ? null : ctx_r2.result.evidence.fieldsFound == null ? null : ctx_r2.result.evidence.fieldsFound.includes("model")));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.result.evidence == null ? null : ctx_r2.result.evidence.fieldsFound == null ? null : ctx_r2.result.evidence.fieldsFound.includes("model")) ? "High" : "Low", " confidence ");
  }
}
function AIImageRecognitionComponent_section_11_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getConfidenceClass(ctx_r2.result.evidence == null ? null : ctx_r2.result.evidence.fieldsFound == null ? null : ctx_r2.result.evidence.fieldsFound.includes("serialNumber")));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.result.evidence == null ? null : ctx_r2.result.evidence.fieldsFound == null ? null : ctx_r2.result.evidence.fieldsFound.includes("serialNumber")) ? "High" : "Low", " confidence ");
  }
}
function AIImageRecognitionComponent_section_11_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "strong");
    \u0275\u0275text(5, "Low confidence detected.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " For better results, try uploading a close-up of the nameplate or label. ");
    \u0275\u0275elementEnd()();
  }
}
function AIImageRecognitionComponent_section_11_li_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5);
  }
}
function AIImageRecognitionComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 15)(2, "div")(3, "div", 16);
    \u0275\u0275text(4, "Asset Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 20)(11, "span");
    \u0275\u0275text(12, "Manufacturer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 21)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AIImageRecognitionComponent_section_11_span_16_Template, 2, 3, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 20)(18, "span");
    \u0275\u0275text(19, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 21)(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AIImageRecognitionComponent_section_11_span_23_Template, 2, 3, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 20)(25, "span");
    \u0275\u0275text(26, "Serial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 21)(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AIImageRecognitionComponent_section_11_span_30_Template, 2, 3, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 20)(32, "span");
    \u0275\u0275text(33, "Condition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 21)(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 23);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(39, AIImageRecognitionComponent_section_11_div_39_Template, 7, 0, "div", 24);
    \u0275\u0275elementStart(40, "div", 25)(41, "div", 16);
    \u0275\u0275text(42, "Recommendations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ul");
    \u0275\u0275template(44, AIImageRecognitionComponent_section_11_li_44_Template, 2, 1, "li", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 27)(46, "button");
    \u0275\u0275text(47, "Generate QR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 28);
    \u0275\u0275text(49, "Create Asset Record");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.result.assetType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Confidence ", ctx_r2.result.confidence, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.result.manufacturer || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.result.manufacturer);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.result.model || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.result.model);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.result.serialNumber || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.result.serialNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.result.condition);
    \u0275\u0275advance();
    \u0275\u0275classMap("condition-" + ctx_r2.result.condition.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.result.condition, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.result.confidence < 70);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.result.recommendations);
  }
}
var AIImageRecognitionComponent = class _AIImageRecognitionComponent {
  up;
  files = [];
  previews = [];
  isAnalyzing = false;
  result = null;
  errorMsg = "";
  constructor(up) {
    this.up = up;
  }
  onSelect(e) {
    return __async(this, null, function* () {
      const input = e.target;
      if (!input.files?.length)
        return;
      for (const f of Array.from(input.files)) {
        const v = this.up.validate(f);
        if (!v.ok) {
          this.errorMsg = v.reason || "Invalid file";
          continue;
        }
        this.files.push(f);
        this.previews.push(yield this.up.toDataUrl(f));
      }
    });
  }
  analyze() {
    return __async(this, null, function* () {
      if (this.previews.length === 0)
        return;
      this.isAnalyzing = true;
      this.errorMsg = "";
      this.result = null;
      this.up.analyze(this.previews).subscribe({
        next: (r) => {
          this.result = r.data;
          this.isAnalyzing = false;
        },
        error: (err) => {
          this.errorMsg = err?.error?.message || "Analysis failed";
          this.isAnalyzing = false;
        }
      });
    });
  }
  remove(i) {
    this.files.splice(i, 1);
    this.previews.splice(i, 1);
  }
  getConfidenceClass(isHighConfidence) {
    return isHighConfidence ? "confidence-high" : "confidence-low";
  }
  static \u0275fac = function AIImageRecognitionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIImageRecognitionComponent)(\u0275\u0275directiveInject(AIImageUploadService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIImageRecognitionComponent, selectors: [["app-ai-image-recognition"]], decls: 12, vars: 5, consts: [[1, "container"], [1, "uploader"], ["type", "file", "multiple", "", "accept", "image/png,image/jpeg", 3, "change"], [1, "hint"], ["class", "previews", 4, "ngIf"], [3, "click", "disabled"], ["class", "error", 4, "ngIf"], ["class", "result", 4, "ngIf"], [1, "previews"], ["class", "thumb", 4, "ngFor", "ngForOf"], [1, "thumb"], [3, "src", "alt"], [3, "click"], [1, "error"], [1, "result"], [1, "header"], [1, "label"], [1, "value"], [1, "chip"], [1, "grid"], [1, "field"], [1, "field-content"], ["class", "confidence-chip", 3, "class", 4, "ngIf"], [1, "condition-badge"], ["class", "low-confidence-warning", 4, "ngIf"], [1, "recs"], [4, "ngFor", "ngForOf"], [1, "actions"], [1, "primary"], [1, "confidence-chip"], [1, "low-confidence-warning"], [1, "warning-icon"], [1, "warning-text"]], template: function AIImageRecognitionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "AI Image Recognition");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "input", 2);
      \u0275\u0275listener("change", function AIImageRecognitionComponent_Template_input_change_4_listener($event) {
        return ctx.onSelect($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "PNG/JPG up to 10MB. Add 1\u20135 images. Include nameplate close-ups.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AIImageRecognitionComponent_div_7_Template, 2, 1, "div", 4);
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function AIImageRecognitionComponent_Template_button_click_8_listener() {
        return ctx.analyze();
      });
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, AIImageRecognitionComponent_p_10_Template, 2, 1, "p", 6)(11, AIImageRecognitionComponent_section_11_Template, 50, 14, "section", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.previews.length);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isAnalyzing || !ctx.previews.length);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isAnalyzing ? "Analyzing\u2026" : "Analyze Image", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.result);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 20px auto;\n  padding: 16px;\n}\n.uploader[_ngcontent-%COMP%] {\n  border: 2px dashed #d1d5db;\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n}\n.hint[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-top: 8px;\n}\n.previews[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n  margin-top: 16px;\n}\n.thumb[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  display: block;\n}\n.thumb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  border: 1px solid rgba(17, 24, 39, 0.1333333333);\n  background: #111827;\n  color: #fff;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  margin-top: 8px;\n}\n.result[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.label[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 12px;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n}\n.chip[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n}\n.grid[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.confidence-chip[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.confidence-high[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.confidence-low[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.condition-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.condition-excellent[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.condition-good[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.condition-fair[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.condition-poor[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.low-confidence-warning[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px;\n  background: #fef3c7;\n  border: 1px solid #f59e0b;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.warning-text[_ngcontent-%COMP%] {\n  color: #92400e;\n  font-size: 14px;\n}\n.recs[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 12px;\n}\n.actions[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n/*# sourceMappingURL=ai-image-recognition.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIImageRecognitionComponent, [{
    type: Component,
    args: [{ selector: "app-ai-image-recognition", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="container">\r
  <h2>AI Image Recognition</h2>\r
\r
  <div class="uploader">\r
    <input type="file" multiple accept="image/png,image/jpeg" (change)="onSelect($event)" />\r
    <p class="hint">PNG/JPG up to 10MB. Add 1\u20135 images. Include nameplate close-ups.</p>\r
  </div>\r
\r
  <div class="previews" *ngIf="previews.length">\r
    <div class="thumb" *ngFor="let p of previews; let i = index">\r
      <img [src]="p" [alt]="'preview-'+i" />\r
      <button (click)="remove(i)">Remove</button>\r
    </div>\r
  </div>\r
\r
  <button [disabled]="isAnalyzing || !previews.length" (click)="analyze()">\r
    {{ isAnalyzing ? 'Analyzing\u2026' : 'Analyze Image' }}\r
  </button>\r
\r
  <p class="error" *ngIf="errorMsg">{{ errorMsg }}</p>\r
\r
  <section class="result" *ngIf="result">\r
    <div class="header">\r
      <div>\r
        <div class="label">Asset Type</div>\r
        <div class="value">{{ result.assetType }}</div>\r
      </div>\r
      <div class="chip">Confidence {{ result.confidence }}%</div>\r
    </div>\r
\r
    <div class="grid">\r
      <div class="field">\r
        <span>Manufacturer</span>\r
        <div class="field-content">\r
          <strong>{{ result.manufacturer || '\u2014' }}</strong>\r
          <span class="confidence-chip" *ngIf="result.manufacturer" \r
                [class]="getConfidenceClass(result.evidence?.fieldsFound?.includes('manufacturer'))">\r
            {{ result.evidence?.fieldsFound?.includes('manufacturer') ? 'High' : 'Low' }} confidence\r
          </span>\r
        </div>\r
      </div>\r
      <div class="field">\r
        <span>Model</span>\r
        <div class="field-content">\r
          <strong>{{ result.model || '\u2014' }}</strong>\r
          <span class="confidence-chip" *ngIf="result.model" \r
                [class]="getConfidenceClass(result.evidence?.fieldsFound?.includes('model'))">\r
            {{ result.evidence?.fieldsFound?.includes('model') ? 'High' : 'Low' }} confidence\r
          </span>\r
        </div>\r
      </div>\r
      <div class="field">\r
        <span>Serial</span>\r
        <div class="field-content">\r
          <strong>{{ result.serialNumber || '\u2014' }}</strong>\r
          <span class="confidence-chip" *ngIf="result.serialNumber" \r
                [class]="getConfidenceClass(result.evidence?.fieldsFound?.includes('serialNumber'))">\r
            {{ result.evidence?.fieldsFound?.includes('serialNumber') ? 'High' : 'Low' }} confidence\r
          </span>\r
        </div>\r
      </div>\r
      <div class="field">\r
        <span>Condition</span>\r
        <div class="field-content">\r
          <strong>{{ result.condition }}</strong>\r
          <span class="condition-badge" [class]="'condition-' + result.condition.toLowerCase()">\r
            {{ result.condition }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="low-confidence-warning" *ngIf="result.confidence < 70">\r
      <div class="warning-icon">\u26A0\uFE0F</div>\r
      <div class="warning-text">\r
        <strong>Low confidence detected.</strong> For better results, try uploading a close-up of the nameplate or label.\r
      </div>\r
    </div>\r
\r
    <div class="recs">\r
      <div class="label">Recommendations</div>\r
      <ul>\r
        <li *ngFor="let r of result.recommendations">{{ r }}</li>\r
      </ul>\r
    </div>\r
\r
    <div class="actions">\r
      <button>Generate QR</button>\r
      <button class="primary">Create Asset Record</button>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/ai-features/ai-image-recognition/ai-image-recognition.component.scss */\n.container {\n  max-width: 960px;\n  margin: 20px auto;\n  padding: 16px;\n}\n.uploader {\n  border: 2px dashed #d1d5db;\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n}\n.hint {\n  color: #6b7280;\n  margin-top: 8px;\n}\n.previews {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n  margin-top: 16px;\n}\n.thumb {\n  position: relative;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.thumb img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  display: block;\n}\n.thumb button {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n}\nbutton {\n  margin-top: 16px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  border: 1px solid rgba(17, 24, 39, 0.1333333333);\n  background: #111827;\n  color: #fff;\n}\nbutton[disabled] {\n  opacity: 0.6;\n}\n.error {\n  color: #b91c1c;\n  margin-top: 8px;\n}\n.result {\n  margin-top: 24px;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.label {\n  color: #6b7280;\n  font-size: 12px;\n}\n.value {\n  font-weight: 600;\n  font-size: 18px;\n}\n.chip {\n  background: #d1fae5;\n  color: #065f46;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n}\n.grid {\n  margin-top: 12px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-content {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.confidence-chip {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.confidence-high {\n  background: #d1fae5;\n  color: #065f46;\n}\n.confidence-low {\n  background: #fef3c7;\n  color: #92400e;\n}\n.condition-badge {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.condition-excellent {\n  background: #d1fae5;\n  color: #065f46;\n}\n.condition-good {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.condition-fair {\n  background: #fef3c7;\n  color: #92400e;\n}\n.condition-poor {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.low-confidence-warning {\n  margin-top: 16px;\n  padding: 12px;\n  background: #fef3c7;\n  border: 1px solid #f59e0b;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.warning-icon {\n  font-size: 16px;\n}\n.warning-text {\n  color: #92400e;\n  font-size: 14px;\n}\n.recs {\n  margin-top: 12px;\n}\n.actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 12px;\n}\n.actions .primary {\n  background: #2563eb;\n}\n/*# sourceMappingURL=ai-image-recognition.component.css.map */\n"] }]
  }], () => [{ type: AIImageUploadService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIImageRecognitionComponent, { className: "AIImageRecognitionComponent", filePath: "src/app/ai-features/ai-image-recognition/ai-image-recognition.component.ts", lineNumber: 14 });
})();
export {
  AIImageRecognitionComponent
};
//# sourceMappingURL=chunk-AOGUVKXT.js.map
