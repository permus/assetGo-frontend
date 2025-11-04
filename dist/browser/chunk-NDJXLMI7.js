import {
  environment
} from "./chunk-OR4RIGW3.js";
import {
  HttpClient
} from "./chunk-ENJBTPXH.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SCVX3V3B.js";
import {
  __async,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/ai-features/shared/ai-image-upload.service.ts
var AIImageUploadService = class _AIImageUploadService {
  http;
  MAX_SIZE = 10 * 1024 * 1024;
  ALLOWED = ["image/png", "image/jpeg", "image/jpg"];
  constructor(http) {
    this.http = http;
  }
  getAuthHeaders() {
    const token = localStorage.getItem("token");
    return {
      headers: __spreadValues({
        "Content-Type": "application/json"
      }, token ? { "Authorization": `Bearer ${token}` } : {})
    };
  }
  validate(file) {
    if (!this.ALLOWED.includes(file.type))
      return { ok: false, reason: "Only PNG/JPG allowed" };
    if (file.size > this.MAX_SIZE)
      return { ok: false, reason: "File exceeds 10MB" };
    return { ok: true };
  }
  toDataUrl(file) {
    return __async(this, null, function* () {
      const compressedFile = yield this.compressImage(file);
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(compressedFile);
      });
    });
  }
  compressImage(file, quality = 0.8) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
          const maxSize = 2048;
          let { width, height } = img;
          if (width > height) {
            if (width > maxSize) {
              height = height * maxSize / width;
              width = maxSize;
            }
          } else {
            if (height > maxSize) {
              width = width * maxSize / height;
              height = maxSize;
            }
          }
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(new File([blob], file.name, { type: "image/jpeg" }));
            } else {
              resolve(file);
            }
          }, "image/jpeg", quality);
        };
        img.src = URL.createObjectURL(file);
      });
    });
  }
  analyze(dataUrls) {
    const cleanBase64Images = dataUrls.map((dataUrl) => dataUrl.replace(/^data:image\/\w+;base64,/, ""));
    return this.http.post(`${environment.apiUrl}/ai/image-recognition/analyze`, { images: cleanBase64Images }, this.getAuthHeaders());
  }
  static \u0275fac = function AIImageUploadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIImageUploadService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AIImageUploadService, factory: _AIImageUploadService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIImageUploadService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AIImageUploadService
};
//# sourceMappingURL=chunk-NDJXLMI7.js.map
