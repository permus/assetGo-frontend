import "./chunk-XQSJLIX2.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-LZKWF3AL.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-RCYJD2NT.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-WX4YBHDT.js";
import {
  environment
} from "./chunk-5YESG6NV.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-3DQDTIJW.js";
import {
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ConnectableObservable,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  Location,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  createComponent,
  debounceTime,
  distinctUntilChanged,
  filter,
  forwardRef,
  inject,
  interval,
  isObservable,
  isPlatformBrowser,
  map,
  merge,
  numberAttribute,
  of,
  pairwise,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-E3IEKUEF.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/locations/services/location.service.ts
var LocationService = class _LocationService {
  http;
  apiUrl = `${environment.apiUrl}/locations`;
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
  // Get locations with filtering and pagination
  getLocations(params = {}) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (value !== void 0 && value !== null && value !== "") {
        httpParams = httpParams.set(key, value.toString());
      }
    });
    return this.http.get(this.apiUrl, __spreadValues({
      params: httpParams
    }, this.getAuthHeaders()));
  }
  // Get single location
  getLocation(id) {
    return this.http.get(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Create location
  createLocation(location) {
    return this.http.post(this.apiUrl, location, this.getAuthHeaders());
  }
  // Update location
  updateLocation(id, location) {
    return this.http.put(`${this.apiUrl}/${id}`, location, this.getAuthHeaders());
  }
  // Delete location
  deleteLocation(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Bulk create locations
  bulkCreateLocations(locations) {
    return this.http.post(`${this.apiUrl}/bulk`, { locations }, this.getAuthHeaders());
  }
  // Move locations
  moveLocations(locationIds, newParentId) {
    return this.http.post(`${this.apiUrl}/move`, {
      location_ids: locationIds,
      new_parent_id: newParentId
    }, this.getAuthHeaders());
  }
  // Get QR code
  getQRCode(id, action = "download", format = "png") {
    const params = new HttpParams().set("action", action).set("format", format);
    return this.http.get(`${this.apiUrl}/${id}/qr`, __spreadValues({
      params,
      responseType: "blob"
    }, this.getAuthHeaders()));
  }
  // Get location types
  getLocationTypes(hierarchyLevel) {
    let params = new HttpParams();
    if (hierarchyLevel !== void 0) {
      params = params.set("hierarchy_level", hierarchyLevel.toString());
    }
    return this.http.get(`${environment.apiUrl}/location-types`, __spreadValues({
      params
    }, this.getAuthHeaders()));
  }
  // Get hierarchy
  getHierarchy() {
    return this.http.get(`${environment.apiUrl}/locations-hierarchy`, this.getAuthHeaders());
  }
  // Get possible parents
  getPossibleParents(typeId, locationId) {
    let params = new HttpParams().set("type_id", typeId.toString());
    if (locationId) {
      params = params.set("location_id", locationId.toString());
    }
    const url = locationId ? `${environment.apiUrl}/locations/possible-parents/${locationId}` : `${environment.apiUrl}/locations/possible-parents`;
    return this.http.get(url, __spreadValues({
      params
    }, this.getAuthHeaders()));
  }
  static \u0275fac = function LocationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocationService, factory: _LocationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/shared/services/google-places.service.ts
var GooglePlacesService = class _GooglePlacesService {
  isLoaded = false;
  loadPromise = null;
  constructor() {
  }
  loadGoogleMaps() {
    return __async(this, null, function* () {
      if (this.isLoaded) {
        return Promise.resolve();
      }
      if (this.loadPromise) {
        return this.loadPromise;
      }
      this.loadPromise = new Promise((resolve, reject) => {
        if (typeof window.google !== "undefined" && window.google.maps) {
          this.isLoaded = true;
          resolve();
          return;
        }
        const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
        if (existingScript) {
          existingScript.addEventListener("load", () => {
            this.isLoaded = true;
            resolve();
          });
          existingScript.addEventListener("error", reject);
          return;
        }
        const checkGoogle = () => {
          if (typeof window.google !== "undefined" && window.google.maps) {
            this.isLoaded = true;
            resolve();
          } else {
            setTimeout(checkGoogle, 100);
          }
        };
        checkGoogle();
      });
      return this.loadPromise;
    });
  }
  initializeAutocomplete(_0, _1) {
    return __async(this, arguments, function* (inputElement, onPlaceSelected, options = {}) {
      yield this.loadGoogleMaps();
      const defaultOptions = {
        types: ["geocode"],
        fields: ["formatted_address", "place_id", "geometry", "address_components"]
      };
      const autocompleteOptions = __spreadValues(__spreadValues({}, defaultOptions), options);
      const autocomplete = new window.google.maps.places.Autocomplete(inputElement, autocompleteOptions);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place && place.formatted_address) {
          onPlaceSelected({
            formatted_address: place.formatted_address,
            place_id: place.place_id,
            geometry: place.geometry,
            address_components: place.address_components
          });
        }
      });
      return autocomplete;
    });
  }
  searchPlaces(_0) {
    return __async(this, arguments, function* (query, options = {}) {
      yield this.loadGoogleMaps();
      return new Promise((resolve, reject) => {
        const service = new window.google.maps.places.PlacesService(document.createElement("div"));
        const request = __spreadValues({
          query,
          fields: ["formatted_address", "place_id", "geometry"]
        }, options);
        service.textSearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            resolve(results || []);
          } else {
            reject(new Error(`Places search failed: ${status}`));
          }
        });
      });
    });
  }
  static \u0275fac = function GooglePlacesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GooglePlacesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GooglePlacesService, factory: _GooglePlacesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GooglePlacesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/locations/components/add-location-modal/add-location-modal.component.ts
var _c0 = ["addressInput"];
function AddLocationModalComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "p", 52);
    \u0275\u0275text(2, "Location Hierarchy:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 53)(4, "div")(5, "strong");
    \u0275\u0275text(6, "Level 0:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Communities, Campuses, Buildings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "strong");
    \u0275\u0275text(10, "Level 1:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Buildings, Floors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "strong");
    \u0275\u0275text(14, "Level 2+:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Rooms, Areas, Amenities");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 54);
    \u0275\u0275text(17, "Available types: 16 options including Community, Campus, and Buildings");
    \u0275\u0275elementEnd()();
  }
}
function AddLocationModalComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 5)(2, "div", 56);
    \u0275\u0275element(3, "img", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 58)(5, "p", 59);
    \u0275\u0275text(6, "Parent Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 60);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 61);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.parentLocation.type.icon, \u0275\u0275sanitizeUrl)("alt", ctx_r1.parentLocation.type.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.parentLocation.name, " (", ctx_r1.parentLocation.type.name, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Creating Level ", ctx_r1.parentLocation.hierarchy_level + 1, " location");
  }
}
function AddLocationModalComponent_div_0_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 64);
    \u0275\u0275element(3, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Drag the marker or click on the map to adjust the location ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(5, "div", 66);
    \u0275\u0275elementEnd();
  }
}
function AddLocationModalComponent_div_0_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function AddLocationModalComponent_div_0_div_60_Template_div_click_0_listener() {
      const type_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectLocationType(type_r4));
    });
    \u0275\u0275elementStart(1, "div", 68)(2, "div", 69);
    \u0275\u0275element(3, "img", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.selectedTypeId === type_r4.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", type_r4.icon, \u0275\u0275sanitizeUrl)("alt", type_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTypeDescription(type_r4));
  }
}
function AddLocationModalComponent_div_0_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "button", 73);
    \u0275\u0275listener("click", function AddLocationModalComponent_div_0_div_61_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleShowAllTypes());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 74);
    \u0275\u0275element(3, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.showAllTypes ? "Show Less" : ctx_r1.locationTypes.length - 6 + " More Types");
  }
}
function AddLocationModalComponent_div_0_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "p", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function AddLocationModalComponent_div_0_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Location");
    \u0275\u0275elementEnd();
  }
}
function AddLocationModalComponent_div_0_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "circle", 80)(3, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Creating...");
    \u0275\u0275elementEnd()();
  }
}
function AddLocationModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 7);
    \u0275\u0275element(6, "path", 8)(7, "path", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h2", 10);
    \u0275\u0275text(9, "Add New Location");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275listener("click", function AddLocationModalComponent_div_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 12);
    \u0275\u0275element(12, "path", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 17);
    \u0275\u0275element(17, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "h3", 19);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 20);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AddLocationModalComponent_div_0_div_22_Template, 18, 0, "div", 21)(23, AddLocationModalComponent_div_0_div_23_Template, 11, 5, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "form", 23);
    \u0275\u0275listener("ngSubmit", function AddLocationModalComponent_div_0_Template_form_ngSubmit_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(25, "div", 24)(26, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 26);
    \u0275\u0275element(28, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "h4", 28);
    \u0275\u0275text(30, "Basic Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 29)(32, "label", 30);
    \u0275\u0275text(33, " Location Name ");
    \u0275\u0275elementStart(34, "span", 31);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 29)(38, "label", 33);
    \u0275\u0275text(39, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "textarea", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 29)(42, "label", 35);
    \u0275\u0275text(43, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 37);
    \u0275\u0275element(46, "path", 8)(47, "path", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "input", 38, 0);
    \u0275\u0275listener("blur", function AddLocationModalComponent_div_0_Template_input_blur_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddressChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 39);
    \u0275\u0275text(51, "Enter the physical address of the location");
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, AddLocationModalComponent_div_0_div_52_Template, 6, 0, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 24)(54, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 26);
    \u0275\u0275element(56, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "h4", 28);
    \u0275\u0275text(58, "Location Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 42);
    \u0275\u0275template(60, AddLocationModalComponent_div_0_div_60_Template, 8, 6, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, AddLocationModalComponent_div_0_div_61_Template, 6, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, AddLocationModalComponent_div_0_div_62_Template, 3, 1, "div", 45);
    \u0275\u0275elementStart(63, "div", 46)(64, "button", 47);
    \u0275\u0275listener("click", function AddLocationModalComponent_div_0_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275text(65, " Use Template ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 48);
    \u0275\u0275template(67, AddLocationModalComponent_div_0_span_67_Template, 2, 0, "span", 49)(68, AddLocationModalComponent_div_0_span_68_Template, 6, 0, "span", 50);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate1(" ", ctx_r1.parentLocation ? "Add New Sub-location" : "Add New Facility", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.parentLocation ? "Create a new sub-location under " + ctx_r1.parentLocation.name : "Create a new top-level facility or community", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.parentLocation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parentLocation);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.locationForm);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("border-red-300", ((tmp_9_0 = ctx_r1.locationForm.get("name")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.locationForm.get("name")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r1.showMap);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.getDisplayedTypes());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.locationTypes.length > 6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.locationForm.invalid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
var AddLocationModalComponent = class _AddLocationModalComponent {
  fb;
  locationService;
  googlePlacesService;
  http;
  isOpen = false;
  parentLocation = null;
  closeModal = new EventEmitter();
  locationCreated = new EventEmitter();
  addressInput;
  locationForm;
  locationTypes = [];
  selectedTypeId = null;
  isLoading = false;
  errorMessage = "";
  showAllTypes = false;
  autocomplete;
  // Google Maps properties
  showMap = false;
  map;
  marker;
  geocoder;
  constructor(fb, locationService, googlePlacesService, http) {
    this.fb = fb;
    this.locationService = locationService;
    this.googlePlacesService = googlePlacesService;
    this.http = http;
    this.locationForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""],
      address: [""],
      location_type_id: [null, Validators.required]
    });
  }
  ngOnInit() {
    this.loadLocationTypes();
  }
  ngAfterViewInit() {
    this.initializeAutocomplete();
  }
  ngOnChanges(changes) {
    if (changes["isOpen"] && this.isOpen && !changes["isOpen"].firstChange) {
      this.resetForm();
      setTimeout(() => {
        this.initializeAutocomplete();
      }, 200);
    }
  }
  loadLocationTypes() {
    const hierarchyLevel = this.parentLocation ? this.parentLocation.hierarchy_level + 1 : 0;
    this.locationService.getLocationTypes(hierarchyLevel).subscribe({
      next: (response) => {
        if (response.success) {
          this.locationTypes = response.data.types;
        }
      },
      error: (error) => {
        console.error("Error loading location types:", error);
      }
    });
  }
  getDisplayedTypes() {
    return this.showAllTypes ? this.locationTypes : this.locationTypes.slice(0, 6);
  }
  selectLocationType(type) {
    this.selectedTypeId = type.id;
    this.locationForm.patchValue({ location_type_id: type.id });
  }
  getTypeDescription(type) {
    return type.description || `${type.category}`;
  }
  getTypeIcon(type) {
    return `assets/icons/${type.icon}.svg`;
  }
  onSubmit() {
    if (this.locationForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      const locationData = __spreadProps(__spreadValues({}, this.locationForm.value), {
        parent_id: this.parentLocation ? this.parentLocation.id : null
      });
      this.locationService.createLocation(locationData).subscribe({
        next: (response) => {
          if (response.success) {
            this.locationCreated.emit(response.data.location);
            this.closeModalHandler();
          } else {
            this.errorMessage = response.message || "Failed to create location";
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "An error occurred while creating the location";
          this.isLoading = false;
        }
      });
    }
  }
  initializeAutocomplete() {
    return __async(this, null, function* () {
      setTimeout(() => __async(this, null, function* () {
        if (this.addressInput?.nativeElement && this.isOpen) {
          try {
            if (this.autocomplete) {
              this.autocomplete = null;
            }
            this.autocomplete = yield this.googlePlacesService.initializeAutocomplete(this.addressInput.nativeElement, (place) => {
              this.locationForm.patchValue({
                address: place.formatted_address
              });
              if (place.geometry && place.geometry.location) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                this.showMap = true;
                setTimeout(() => this.showMapOnCoords(lat, lng), 100);
              }
            }, {
              types: ["geocode"]
            });
          } catch (error) {
            console.error("Failed to initialize Google Places Autocomplete:", error);
          }
        }
      }), 300);
    });
  }
  closeModalHandler() {
    if (this.autocomplete) {
      this.autocomplete = null;
    }
    this.cleanupMap();
    this.isOpen = false;
    this.closeModal.emit();
  }
  cleanupMap() {
    if (this.marker && typeof google !== "undefined" && google.maps) {
      try {
        google.maps.event.clearInstanceListeners(this.marker);
        this.marker.setMap(null);
      } catch (error) {
        console.warn("Error cleaning up marker:", error);
      }
      this.marker = void 0;
    }
    if (this.map && typeof google !== "undefined" && google.maps) {
      try {
        google.maps.event.clearInstanceListeners(this.map);
      } catch (error) {
        console.warn("Error cleaning up map:", error);
      }
      this.map = void 0;
    }
    const mapElement = document.getElementById("location-map");
    if (mapElement) {
      mapElement.innerHTML = "";
    }
    this.geocoder = void 0;
    this.showMap = false;
  }
  toggleShowAllTypes() {
    this.showAllTypes = !this.showAllTypes;
  }
  resetForm() {
    this.locationForm.reset();
    this.selectedTypeId = null;
    this.errorMessage = "";
    this.showAllTypes = false;
    this.isLoading = false;
    this.cleanupMap();
    if (this.autocomplete) {
      this.autocomplete = null;
    }
  }
  // Map methods
  onAddressChanged() {
    const address = this.locationForm.get("address")?.value;
    if (address && address.trim().length > 0) {
      this.geocodeAddress();
    } else {
      this.showMap = false;
      if (this.map) {
        this.map = void 0;
        this.marker = void 0;
      }
    }
  }
  geocodeAddress() {
    const address = this.locationForm.get("address")?.value;
    if (!address)
      return;
    if (typeof google === "undefined" || !google.maps) {
      console.warn("Google Maps not loaded yet");
      return;
    }
    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }
    this.geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results.length > 0) {
        const location = results[0].geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        this.showMap = true;
        setTimeout(() => this.showMapOnCoords(lat, lng), 100);
      }
    });
  }
  showMapOnCoords(lat, lng) {
    const mapElement = document.getElementById("location-map");
    if (!mapElement) {
      console.warn("Map element not found");
      return;
    }
    if (typeof google === "undefined" || !google.maps) {
      console.warn("Google Maps not loaded yet");
      return;
    }
    if (mapElement.offsetWidth === 0 || mapElement.offsetHeight === 0) {
      console.warn("Map element has no dimensions");
      return;
    }
    if (!this.map) {
      this.map = new google.maps.Map(mapElement, {
        center: { lat, lng },
        zoom: 15,
        mapTypeId: "roadmap",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });
    } else {
      this.map.setCenter({ lat, lng });
    }
    if (this.marker) {
      this.marker.setPosition({ lat, lng });
    } else {
      this.marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.map,
        title: this.locationForm.get("name")?.value || "Location",
        draggable: true
      });
      this.marker.addListener("dragend", () => {
        const position = this.marker.getPosition();
        if (position) {
          this.reverseGeocode(position.lat(), position.lng());
        }
      });
      this.map.addListener("click", (event) => {
        const position = event.latLng;
        this.marker.setPosition(position);
        this.reverseGeocode(position.lat(), position.lng());
      });
    }
  }
  reverseGeocode(lat, lng) {
    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }
    this.geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results && results.length > 0) {
        const address = results[0].formatted_address;
        this.locationForm.patchValue({ address });
      }
    });
  }
  static \u0275fac = function AddLocationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddLocationModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LocationService), \u0275\u0275directiveInject(GooglePlacesService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddLocationModalComponent, selectors: [["app-add-location-modal"]], viewQuery: function AddLocationModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addressInput = _t.first);
    }
  }, inputs: { isOpen: "isOpen", parentLocation: "parentLocation" }, outputs: { closeModal: "closeModal", locationCreated: "locationCreated" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["addressInput", ""], ["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4 animate-fade-in", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4", "animate-fade-in"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-2xl", "w-full", "max-h-[90vh]", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], [1, "text-center", "mb-8"], [1, "w-16", "h-16", "bg-blue-50", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-2"], [1, "text-gray-600", "text-sm"], ["class", "mt-4 p-4 bg-blue-50 rounded-lg", 4, "ngIf"], ["class", "mt-4 p-4 bg-green-50 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "mb-8"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "mb-4"], ["for", "name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "text-red-500"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Enter location name", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400"], ["for", "description", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Brief description of this location", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", "resize-none"], ["for", "address", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "w-4", "h-4", "text-gray-400"], ["id", "address", "type", "text", "formControlName", "address", "placeholder", "Enter location address", "autocomplete", "off", 1, "w-full", "pl-10", "pr-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", 3, "blur"], [1, "text-xs", "text-gray-500", "mt-1"], ["class", "mt-4", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-4"], ["class", "border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-sm", 3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "pt-6", "border-t", "border-gray-200"], ["type", "button", 1, "px-6", "py-2", "text-gray-600", "hover:text-gray-800", "font-medium", "transition-colors", 3, "click"], ["type", "submit", 1, "px-6", "py-2", "bg-blue-600", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "mt-4", "p-4", "bg-blue-50", "rounded-lg"], [1, "text-sm", "font-medium", "text-blue-900", "mb-2"], [1, "text-xs", "text-blue-700", "space-y-1"], [1, "text-xs", "text-blue-600", "mt-2"], [1, "mt-4", "p-4", "bg-green-50", "rounded-lg"], [1, "w-10", "h-10", "bg-green-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "w-6", "h-6", 3, "src", "alt"], [1, "text-left"], [1, "text-sm", "font-medium", "text-green-900"], [1, "text-sm", "text-green-700"], [1, "text-xs", "text-green-600"], [1, "mt-4"], [1, "text-xs", "text-gray-600", "mb-2", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16l-4-4m0 0l4-4m-4 4h18"], ["id", "location-map", 2, "height", "300px", "width", "100%", "border-radius", "0.5rem", "border", "1px solid #e5e7eb"], [1, "border-2", "rounded-lg", "p-4", "cursor-pointer", "transition-all", "hover:shadow-sm", 3, "click"], [1, "text-center"], [1, "mb-2", "flex", "justify-center"], [1, "w-8", "h-8", "text-gray-600", 3, "src", "alt"], [1, "font-medium", "text-gray-900", "mb-1"], [1, "text-xs", "text-gray-500"], ["type", "button", 1, "flex", "items-center", "space-x-2", "mx-auto", "px-4", "py-2", "text-sm", "text-gray-600", "hover:text-gray-800", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function AddLocationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AddLocationModalComponent_div_0_Template, 69, 16, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.location-type-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.location-type-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.location-type-card.selected[_ngcontent-%COMP%] {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);\n}\n.type-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1;\n}\n.form-input[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.hierarchy-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .location-type-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=add-location-modal.component.css.map */"], data: { animation: [
    trigger("backdropAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("150ms ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({ opacity: 0 }))
      ])
    ]),
    trigger("modalAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }),
        animate("200ms ease-out", style({
          opacity: 1,
          transform: "scale(1) translateY(0)"
        }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddLocationModalComponent, [{
    type: Component,
    args: [{ selector: "app-add-location-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], animations: [
      trigger("backdropAnimation", [
        transition(":enter", [
          style({ opacity: 0 }),
          animate("150ms ease-out", style({ opacity: 1 }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({ opacity: 0 }))
        ])
      ]),
      trigger("modalAnimation", [
        transition(":enter", [
          style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }),
          animate("200ms ease-out", style({
            opacity: 1,
            transform: "scale(1) translateY(0)"
          }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }))
        ])
      ])
    ], template: `<!-- Modal Backdrop -->\r
<div *ngIf="isOpen" \r
     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4 animate-fade-in"\r
     [@backdropAnimation]>\r
  <!-- Modal Container -->\r
  <div class="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"\r
       [@modalAnimation]>\r
    <!-- Modal Header -->\r
    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r
      <div class="flex items-center space-x-3">\r
        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
          </svg>\r
        </div>\r
        <h2 class="text-xl font-semibold text-gray-900">Add New Location</h2>\r
      </div>\r
      <button\r
        (click)="closeModalHandler()"\r
        class="p-2 hover:bg-gray-100 rounded-lg transition-colors">\r
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Content -->\r
    <div class="p-6">\r
      <!-- Add New Facility Section -->\r
      <div class="text-center mb-8">\r
        <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">\r
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
        </div>\r
        <h3 class="text-lg font-semibold text-gray-900 mb-2">\r
          {{parentLocation ? 'Add New Sub-location' : 'Add New Facility'}}\r
        </h3>\r
        <p class="text-gray-600 text-sm">\r
          {{parentLocation ? 'Create a new sub-location under ' + parentLocation.name : 'Create a new top-level facility or community'}}\r
        </p>\r
\r
        <!-- Location Hierarchy Info -->\r
        <div *ngIf="!parentLocation" class="mt-4 p-4 bg-blue-50 rounded-lg">\r
          <p class="text-sm font-medium text-blue-900 mb-2">Location Hierarchy:</p>\r
          <div class="text-xs text-blue-700 space-y-1">\r
            <div><strong>Level 0:</strong> Communities, Campuses, Buildings</div>\r
            <div><strong>Level 1:</strong> Buildings, Floors</div>\r
            <div><strong>Level 2+:</strong> Rooms, Areas, Amenities</div>\r
          </div>\r
          <p class="text-xs text-blue-600 mt-2">Available types: 16 options including Community, Campus, and Buildings</p>\r
        </div>\r
        \r
        <!-- Parent Location Info -->\r
        <div *ngIf="parentLocation" class="mt-4 p-4 bg-green-50 rounded-lg">\r
          <div class="flex items-center space-x-3">\r
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">\r
              <img [src]="parentLocation.type.icon" [alt]="parentLocation.type.name" class="w-6 h-6">\r
            </div>\r
            <div class="text-left">\r
              <p class="text-sm font-medium text-green-900">Parent Location:</p>\r
              <p class="text-sm text-green-700">{{parentLocation.name}} ({{parentLocation.type.name}})</p>\r
              <p class="text-xs text-green-600">Creating Level {{parentLocation.hierarchy_level + 1}} location</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <form [formGroup]="locationForm" (ngSubmit)="onSubmit()">\r
        <!-- Basic Information Section -->\r
        <div class="mb-8">\r
          <div class="flex items-center space-x-2 mb-4">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
            </svg>\r
            <h4 class="text-lg font-semibold text-gray-900">Basic Information</h4>\r
          </div>\r
\r
          <!-- Location Name -->\r
          <div class="mb-4">\r
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">\r
              Location Name <span class="text-red-500">*</span>\r
            </label>\r
            <input\r
              id="name"\r
              type="text"\r
              formControlName="name"\r
              placeholder="Enter location name"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
              [class.border-red-300]="locationForm.get('name')?.invalid && locationForm.get('name')?.touched">\r
          </div>\r
\r
          <!-- Description -->\r
          <div class="mb-4">\r
            <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description</label>\r
            <textarea\r
              id="description"\r
              formControlName="description"\r
              rows="3"\r
              placeholder="Brief description of this location"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none"></textarea>\r
          </div>\r
\r
          <!-- Address -->\r
          <div class="mb-4">\r
            <label for="address" class="block text-sm font-medium text-gray-700 mb-2">Address</label>\r
            <div class="relative">\r
              <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
              </svg>\r
              <input\r
                id="address"\r
                type="text"\r
                #addressInput\r
                formControlName="address"\r
                placeholder="Enter location address"\r
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
                autocomplete="off"\r
                (blur)="onAddressChanged()">\r
            </div>\r
            <div class="text-xs text-gray-500 mt-1">Enter the physical address of the location</div>\r
            \r
            <!-- Interactive Map -->\r
            <div *ngIf="showMap" class="mt-4">\r
              <div class="text-xs text-gray-600 mb-2 flex items-center">\r
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>\r
                </svg>\r
                Drag the marker or click on the map to adjust the location\r
              </div>\r
              <div id="location-map" style="height: 300px; width: 100%; border-radius: 0.5rem; border: 1px solid #e5e7eb;"></div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Location Type Section -->\r
        <div class="mb-8">\r
          <div class="flex items-center space-x-2 mb-4">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
            </svg>\r
            <h4 class="text-lg font-semibold text-gray-900">Location Type</h4>\r
          </div>\r
\r
\r
          <!-- Location Type Grid -->\r
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">\r
            <div\r
              *ngFor="let type of getDisplayedTypes()"\r
              (click)="selectLocationType(type)"\r
              [class]="selectedTypeId === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'"\r
              class="border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-sm">\r
              <div class="text-center">\r
                <div class="mb-2 flex justify-center">\r
                  <img [src]="type.icon" [alt]="type.name" class="w-8 h-8 text-gray-600">\r
                </div>\r
                <div class="font-medium text-gray-900 mb-1">{{type.name}}</div>\r
                <div class="text-xs text-gray-500">{{getTypeDescription(type)}}</div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Show More Types Button -->\r
          <div *ngIf="locationTypes.length > 6" class="text-center">\r
            <button\r
              type="button"\r
              (click)="toggleShowAllTypes()"\r
              class="flex items-center space-x-2 mx-auto px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
              <span>{{showAllTypes ? 'Show Less' : locationTypes.length - 6 + ' More Types'}}</span>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Error Message -->\r
        <div *ngIf="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
          <p class="text-red-600 text-sm">{{errorMessage}}</p>\r
        </div>\r
\r
        <!-- Modal Footer -->\r
        <div class="flex items-center justify-between pt-6 border-t border-gray-200">\r
          <button\r
            type="button"\r
            (click)="closeModalHandler()"\r
            class="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">\r
            Use Template\r
          </button>\r
\r
          <button\r
            type="submit"\r
            [disabled]="locationForm.invalid || isLoading"\r
            class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">\r
            <span *ngIf="!isLoading">Create Location</span>\r
            <span *ngIf="isLoading" class="flex items-center space-x-2">\r
              <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              <span>Creating...</span>\r
            </span>\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/locations/components/add-location-modal/add-location-modal.component.scss */\n.modal-backdrop {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.location-type-card {\n  transition: all 0.2s ease-in-out;\n}\n.location-type-card:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.location-type-card.selected {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);\n}\n.type-icon {\n  font-size: 2rem;\n  line-height: 1;\n}\n.form-input {\n  transition: all 0.2s ease-in-out;\n}\n.form-input:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.hierarchy-info {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n}\n.loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .location-type-grid {\n    grid-template-columns: 1fr;\n  }\n  .modal-container {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=add-location-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: LocationService }, { type: GooglePlacesService }, { type: HttpClient }], { isOpen: [{
    type: Input
  }], parentLocation: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], locationCreated: [{
    type: Output
  }], addressInput: [{
    type: ViewChild,
    args: ["addressInput", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddLocationModalComponent, { className: "AddLocationModalComponent", filePath: "src/app/locations/components/add-location-modal/add-location-modal.component.ts", lineNumber: 49 });
})();

// src/app/locations/components/edit-location-modal/edit-location-modal.component.ts
var _c02 = ["addressInput"];
function EditLocationModalComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "p", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function EditLocationModalComponent_div_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 51);
    \u0275\u0275element(3, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Drag the marker or click on the map to adjust the location ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(5, "div", 53);
    \u0275\u0275elementEnd();
  }
}
function EditLocationModalComponent_div_0_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 5)(2, "div", 6);
    \u0275\u0275element(3, "img", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57);
    \u0275\u0275text(8, "Current location type");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.location.type.icon, \u0275\u0275sanitizeUrl)("alt", ctx_r1.location.type.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.location.type.name);
  }
}
function EditLocationModalComponent_div_0_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function EditLocationModalComponent_div_0_div_53_Template_div_click_0_listener() {
      const type_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectLocationType(type_r4));
    });
    \u0275\u0275elementStart(1, "div", 59)(2, "div", 60);
    \u0275\u0275element(3, "img", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.selectedTypeId === type_r4.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", type_r4.icon, \u0275\u0275sanitizeUrl)("alt", type_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTypeDescription(type_r4));
  }
}
function EditLocationModalComponent_div_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "button", 64);
    \u0275\u0275listener("click", function EditLocationModalComponent_div_0_div_54_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleShowAllTypes());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 65);
    \u0275\u0275element(3, "path", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.showAllTypes ? "Show Less" : ctx_r1.locationTypes.length - 6 + " More Types");
  }
}
function EditLocationModalComponent_div_0_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Update Location");
    \u0275\u0275elementEnd();
  }
}
function EditLocationModalComponent_div_0_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 68);
    \u0275\u0275element(2, "circle", 69)(3, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Updating...");
    \u0275\u0275elementEnd()();
  }
}
function EditLocationModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 7);
    \u0275\u0275element(6, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 9);
    \u0275\u0275text(8, "Edit Location");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function EditLocationModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 11);
    \u0275\u0275element(11, "path", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 13);
    \u0275\u0275template(13, EditLocationModalComponent_div_0_div_13_Template, 3, 1, "div", 14);
    \u0275\u0275elementStart(14, "form", 15);
    \u0275\u0275listener("ngSubmit", function EditLocationModalComponent_div_0_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(15, "div", 16)(16, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 18);
    \u0275\u0275element(18, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "h4", 20);
    \u0275\u0275text(20, "Basic Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 21)(22, "label", 22);
    \u0275\u0275text(23, " Location Name ");
    \u0275\u0275elementStart(24, "span", 23);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 21)(28, "label", 25);
    \u0275\u0275text(29, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "textarea", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 21)(32, "label", 27);
    \u0275\u0275text(33, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 29);
    \u0275\u0275element(36, "path", 30)(37, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "input", 32, 0);
    \u0275\u0275listener("blur", function EditLocationModalComponent_div_0_Template_input_blur_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddressChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "p", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 34);
    \u0275\u0275element(42, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Address suggestions powered by Google Places ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, EditLocationModalComponent_div_0_div_44_Template, 6, 0, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "div", 16)(46, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 18);
    \u0275\u0275element(48, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "h4", 20);
    \u0275\u0275text(50, "Location Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, EditLocationModalComponent_div_0_div_51_Template, 9, 3, "div", 38);
    \u0275\u0275elementStart(52, "div", 39);
    \u0275\u0275template(53, EditLocationModalComponent_div_0_div_53_Template, 8, 6, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, EditLocationModalComponent_div_0_div_54_Template, 6, 1, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 42)(56, "button", 43);
    \u0275\u0275listener("click", function EditLocationModalComponent_div_0_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275text(57, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 44);
    \u0275\u0275template(59, EditLocationModalComponent_div_0_span_59_Template, 2, 0, "span", 45)(60, EditLocationModalComponent_div_0_span_60_Template, 6, 0, "span", 46);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("border-red-300", ((tmp_6_0 = ctx_r1.editForm.get("name")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.editForm.get("name")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.showMap);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.location);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getDisplayedTypes());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.locationTypes.length > 6);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.editForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var EditLocationModalComponent = class _EditLocationModalComponent {
  fb;
  locationService;
  googlePlacesService;
  http;
  isOpen = false;
  location = null;
  closeModal = new EventEmitter();
  locationUpdated = new EventEmitter();
  addressInput;
  editForm;
  locationTypes = [];
  selectedTypeId = null;
  loading = false;
  errorMessage = "";
  showAllTypes = false;
  autocomplete;
  // Google Maps properties
  showMap = false;
  map;
  marker;
  geocoder;
  constructor(fb, locationService, googlePlacesService, http) {
    this.fb = fb;
    this.locationService = locationService;
    this.googlePlacesService = googlePlacesService;
    this.http = http;
    this.editForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""],
      address: [""],
      location_type_id: [null, Validators.required]
    });
  }
  ngOnInit() {
    this.loadLocationTypes();
  }
  ngAfterViewInit() {
    if (this.isOpen) {
      this.initializeAutocomplete();
    }
  }
  ngOnChanges(changes) {
    if (changes["location"] && this.location) {
      this.populateForm();
    }
    if (changes["isOpen"] && this.isOpen && !changes["isOpen"].firstChange) {
      setTimeout(() => {
        this.initializeAutocomplete();
      }, 200);
    }
  }
  initializeAutocomplete() {
    return __async(this, null, function* () {
      setTimeout(() => __async(this, null, function* () {
        if (this.addressInput?.nativeElement && this.isOpen) {
          try {
            if (this.autocomplete) {
              this.autocomplete = null;
            }
            this.autocomplete = yield this.googlePlacesService.initializeAutocomplete(this.addressInput.nativeElement, (place) => {
              this.editForm.patchValue({
                address: place.formatted_address
              });
              if (place.geometry && place.geometry.location) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                this.showMap = true;
                setTimeout(() => this.showMapOnCoords(lat, lng), 100);
              }
            }, {
              types: ["geocode"]
            });
          } catch (error) {
            console.error("Failed to initialize Google Places Autocomplete:", error);
          }
        }
      }), 300);
    });
  }
  loadLocationTypes() {
    const hierarchyLevel = this.location?.hierarchy_level;
    this.locationService.getLocationTypes(hierarchyLevel).subscribe({
      next: (response) => {
        if (response.success) {
          this.locationTypes = response.data.types;
        }
      },
      error: (error) => {
        console.error("Error loading location types:", error);
      }
    });
  }
  populateForm() {
    if (this.location) {
      this.editForm.patchValue({
        name: this.location.name,
        description: this.location.description || "",
        address: this.location.address || "",
        location_type_id: this.location.location_type_id
      });
      this.selectedTypeId = this.location?.location_type_id || null;
      if (this.location && this.location.latitude !== void 0 && this.location.longitude !== void 0) {
        this.showMap = true;
        const lat = this.location.latitude;
        const lng = this.location.longitude;
        setTimeout(() => this.showMapOnCoords(lat, lng), 100);
      } else if (this.location && this.location.address) {
        this.geocodeAddress();
      }
    }
  }
  getDisplayedTypes() {
    return this.showAllTypes ? this.locationTypes : this.locationTypes.slice(0, 6);
  }
  selectLocationType(type) {
    this.selectedTypeId = type.id;
    this.editForm.patchValue({ location_type_id: type.id });
  }
  getTypeDescription(type) {
    return type.description || `${type.category}`;
  }
  getTypeIcon(type) {
    return `assets/icons/${type.icon}.svg`;
  }
  onSubmit() {
    if (this.editForm.valid && !this.loading && this.location) {
      this.loading = true;
      this.errorMessage = "";
      const updateData = __spreadValues({}, this.editForm.value);
      this.locationService.updateLocation(this.location.id, updateData).subscribe({
        next: (response) => {
          if (response.success) {
            this.locationUpdated.emit(response.data.location);
            this.closeModalHandler();
          } else {
            this.errorMessage = response.message || "Failed to update location";
          }
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "An error occurred while updating the location";
          this.loading = false;
        }
      });
    }
  }
  closeModalHandler() {
    if (this.autocomplete) {
      this.autocomplete = null;
    }
    this.cleanupMap();
    this.isOpen = false;
    this.closeModal.emit();
    this.resetForm();
  }
  cleanupMap() {
    if (this.marker && typeof google !== "undefined" && google.maps) {
      try {
        google.maps.event.clearInstanceListeners(this.marker);
        this.marker.setMap(null);
      } catch (error) {
        console.warn("Error cleaning up marker:", error);
      }
      this.marker = void 0;
    }
    if (this.map && typeof google !== "undefined" && google.maps) {
      try {
        google.maps.event.clearInstanceListeners(this.map);
      } catch (error) {
        console.warn("Error cleaning up map:", error);
      }
      this.map = void 0;
    }
    const mapElement = document.getElementById("edit-location-map");
    if (mapElement) {
      mapElement.innerHTML = "";
    }
    this.geocoder = void 0;
    this.showMap = false;
  }
  resetForm() {
    this.editForm.reset();
    this.selectedTypeId = null;
    this.errorMessage = "";
    this.showAllTypes = false;
  }
  toggleShowAllTypes() {
    this.showAllTypes = !this.showAllTypes;
  }
  // Map methods
  onAddressChanged() {
    const address = this.editForm.get("address")?.value;
    if (address && address.trim().length > 0) {
      this.geocodeAddress();
    } else {
      this.showMap = false;
      if (this.map) {
        this.map = void 0;
        this.marker = void 0;
      }
    }
  }
  geocodeAddress() {
    const address = this.editForm.get("address")?.value;
    if (!address)
      return;
    if (typeof google === "undefined" || !google.maps) {
      console.warn("Google Maps not loaded yet");
      return;
    }
    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }
    this.geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results.length > 0) {
        const location = results[0].geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        this.showMap = true;
        setTimeout(() => this.showMapOnCoords(lat, lng), 100);
      }
    });
  }
  showMapOnCoords(lat, lng) {
    const mapElement = document.getElementById("edit-location-map");
    if (!mapElement) {
      console.warn("Map element not found");
      return;
    }
    if (typeof google === "undefined" || !google.maps) {
      console.warn("Google Maps not loaded yet");
      return;
    }
    if (mapElement.offsetWidth === 0 || mapElement.offsetHeight === 0) {
      console.warn("Map element has no dimensions");
      return;
    }
    if (!this.map) {
      this.map = new google.maps.Map(mapElement, {
        center: { lat, lng },
        zoom: 15,
        mapTypeId: "roadmap",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });
    } else {
      this.map.setCenter({ lat, lng });
    }
    if (this.marker) {
      this.marker.setPosition({ lat, lng });
    } else {
      this.marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.map,
        title: this.editForm.get("name")?.value || "Location",
        draggable: true
      });
      this.marker.addListener("dragend", () => {
        const position = this.marker.getPosition();
        if (position) {
          this.reverseGeocode(position.lat(), position.lng());
        }
      });
      this.map.addListener("click", (event) => {
        const position = event.latLng;
        this.marker.setPosition(position);
        this.reverseGeocode(position.lat(), position.lng());
      });
    }
  }
  reverseGeocode(lat, lng) {
    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }
    this.geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results && results.length > 0) {
        const address = results[0].formatted_address;
        this.editForm.patchValue({ address });
      }
    });
  }
  static \u0275fac = function EditLocationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditLocationModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LocationService), \u0275\u0275directiveInject(GooglePlacesService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditLocationModalComponent, selectors: [["app-edit-location-modal"]], viewQuery: function EditLocationModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addressInput = _t.first);
    }
  }, inputs: { isOpen: "isOpen", location: "location" }, outputs: { closeModal: "closeModal", locationUpdated: "locationUpdated" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["addressInput", ""], ["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4 animate-fade-in", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4", "animate-fade-in"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-2xl", "w-full", "max-h-[90vh]", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "mb-8"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "mb-4"], ["for", "name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "text-red-500"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Enter location name", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400"], ["for", "description", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Brief description of this location", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", "resize-none"], ["for", "address", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["id", "address", "type", "text", "formControlName", "address", "placeholder", "Start typing address...", "autocomplete", "off", 1, "w-full", "pl-10", "pr-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", 3, "blur"], [1, "text-xs", "text-gray-500", "mt-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "inline", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["class", "mt-4", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], ["class", "mb-4 p-4 bg-gray-50 rounded-lg", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-4"], ["class", "border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-sm", 3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "pt-6", "border-t", "border-gray-200"], ["type", "button", 1, "px-6", "py-2", "text-gray-600", "hover:text-gray-800", "font-medium", "transition-colors", 3, "click"], ["type", "submit", 1, "px-6", "py-2", "bg-blue-600", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [1, "mt-4"], [1, "text-xs", "text-gray-600", "mb-2", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16l-4-4m0 0l4-4m-4 4h18"], ["id", "edit-location-map", 2, "height", "300px", "width", "100%", "border-radius", "0.5rem", "border", "1px solid #e5e7eb"], [1, "mb-4", "p-4", "bg-gray-50", "rounded-lg"], [1, "w-6", "h-6", 3, "src", "alt"], [1, "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-500"], [1, "border-2", "rounded-lg", "p-4", "cursor-pointer", "transition-all", "hover:shadow-sm", 3, "click"], [1, "text-center"], [1, "mb-2", "flex", "justify-center"], [1, "w-8", "h-8", "text-gray-600", 3, "src", "alt"], [1, "font-medium", "text-gray-900", "mb-1"], [1, "text-xs", "text-gray-500"], ["type", "button", 1, "flex", "items-center", "space-x-2", "mx-auto", "px-4", "py-2", "text-sm", "text-gray-600", "hover:text-gray-800", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function EditLocationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EditLocationModalComponent_div_0_Template, 61, 13, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.location-type-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.location-type-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.location-type-card.selected[_ngcontent-%COMP%] {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);\n}\n.type-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1;\n}\n.form-input[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.current-type-display[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .location-type-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=edit-location-modal.component.css.map */"], data: { animation: [
    trigger("backdropAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("150ms ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({ opacity: 0 }))
      ])
    ]),
    trigger("modalAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }),
        animate("200ms ease-out", style({
          opacity: 1,
          transform: "scale(1) translateY(0)"
        }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditLocationModalComponent, [{
    type: Component,
    args: [{ selector: "app-edit-location-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], animations: [
      trigger("backdropAnimation", [
        transition(":enter", [
          style({ opacity: 0 }),
          animate("150ms ease-out", style({ opacity: 1 }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({ opacity: 0 }))
        ])
      ]),
      trigger("modalAnimation", [
        transition(":enter", [
          style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }),
          animate("200ms ease-out", style({
            opacity: 1,
            transform: "scale(1) translateY(0)"
          }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }))
        ])
      ])
    ], template: `<!-- Edit Location Modal Component HTML -->\r
<div *ngIf="isOpen" \r
     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4 animate-fade-in"\r
     [@backdropAnimation]>\r
  <!-- Modal Container -->\r
  <div class="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"\r
       [@modalAnimation]>\r
    <!-- Modal Header -->\r
    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r
      <div class="flex items-center space-x-3">\r
        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">\r
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
          </svg>\r
        </div>\r
        <h2 class="text-xl font-semibold text-gray-900">Edit Location</h2>\r
      </div>\r
      <button\r
        (click)="closeModalHandler()"\r
        class="p-2 hover:bg-gray-100 rounded-lg transition-colors">\r
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Content -->\r
    <div class="p-6">\r
      <!-- Error Message -->\r
      <div *ngIf="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r
        <p class="text-red-600 text-sm">{{errorMessage}}</p>\r
      </div>\r
\r
      <form [formGroup]="editForm" (ngSubmit)="onSubmit()">\r
        <!-- Basic Information Section -->\r
        <div class="mb-8">\r
          <div class="flex items-center space-x-2 mb-4">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
            </svg>\r
            <h4 class="text-lg font-semibold text-gray-900">Basic Information</h4>\r
          </div>\r
\r
          <!-- Location Name -->\r
          <div class="mb-4">\r
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">\r
              Location Name <span class="text-red-500">*</span>\r
            </label>\r
            <input\r
              id="name"\r
              type="text"\r
              formControlName="name"\r
              placeholder="Enter location name"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
              [class.border-red-300]="editForm.get('name')?.invalid && editForm.get('name')?.touched"\r
              required>\r
          </div>\r
\r
          <!-- Description -->\r
          <div class="mb-4">\r
            <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description</label>\r
            <textarea\r
              id="description"\r
              formControlName="description"\r
              rows="3"\r
              placeholder="Brief description of this location"\r
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none"></textarea>\r
          </div>\r
\r
          <!-- Address -->\r
          <div class="mb-4">\r
            <label for="address" class="block text-sm font-medium text-gray-700 mb-2">Address</label>\r
            <div class="relative">\r
              <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
              </svg>\r
              <input\r
                id="address"\r
                type="text"\r
                #addressInput\r
                formControlName="address"\r
                placeholder="Start typing address..."\r
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
                autocomplete="off"\r
                (blur)="onAddressChanged()">\r
            </div>\r
            <p class="text-xs text-gray-500 mt-1">\r
              <svg class="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
              </svg>\r
              Address suggestions powered by Google Places\r
            </p>\r
            \r
            <!-- Interactive Map -->\r
            <div *ngIf="showMap" class="mt-4">\r
              <div class="text-xs text-gray-600 mb-2 flex items-center">\r
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>\r
                </svg>\r
                Drag the marker or click on the map to adjust the location\r
              </div>\r
              <div id="edit-location-map" style="height: 300px; width: 100%; border-radius: 0.5rem; border: 1px solid #e5e7eb;"></div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Location Type Section -->\r
        <div class="mb-8">\r
          <div class="flex items-center space-x-2 mb-4">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
            </svg>\r
            <h4 class="text-lg font-semibold text-gray-900">Location Type</h4>\r
          </div>\r
\r
          <!-- Current Type Display -->\r
          <div *ngIf="location" class="mb-4 p-4 bg-gray-50 rounded-lg">\r
            <div class="flex items-center space-x-3">\r
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">\r
                <img [src]="location.type.icon" [alt]="location.type.name" class="w-6 h-6">\r
              </div>\r
              <div>\r
                <div class="font-medium text-gray-900">{{location.type.name}}</div>\r
                <div class="text-sm text-gray-500">Current location type</div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Location Type Grid -->\r
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">\r
            <div\r
              *ngFor="let type of getDisplayedTypes()"\r
              (click)="selectLocationType(type)"\r
              [class]="selectedTypeId === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'"\r
              class="border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-sm">\r
              <div class="text-center">\r
                <div class="mb-2 flex justify-center">\r
                  <img [src]="type.icon" [alt]="type.name" class="w-8 h-8 text-gray-600">\r
                </div>\r
                <div class="font-medium text-gray-900 mb-1">{{type.name}}</div>\r
                <div class="text-xs text-gray-500">{{getTypeDescription(type)}}</div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Show More Types Button -->\r
          <div *ngIf="locationTypes.length > 6" class="text-center">\r
            <button\r
              type="button"\r
              (click)="toggleShowAllTypes()"\r
              class="flex items-center space-x-2 mx-auto px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
              <span>{{showAllTypes ? 'Show Less' : locationTypes.length - 6 + ' More Types'}}</span>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Modal Footer -->\r
        <div class="flex items-center justify-between pt-6 border-t border-gray-200">\r
          <button\r
            type="button"\r
            (click)="closeModalHandler()"\r
            class="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">\r
            Cancel\r
          </button>\r
\r
          <button\r
            type="submit"\r
            [disabled]="editForm.invalid || loading"\r
            class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">\r
            <span *ngIf="!loading">Update Location</span>\r
            <span *ngIf="loading" class="flex items-center space-x-2">\r
              <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              <span>Updating...</span>\r
            </span>\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/locations/components/edit-location-modal/edit-location-modal.component.scss */\n.modal-backdrop {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.location-type-card {\n  transition: all 0.2s ease-in-out;\n}\n.location-type-card:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.location-type-card.selected {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);\n}\n.type-icon {\n  font-size: 2rem;\n  line-height: 1;\n}\n.form-input {\n  transition: all 0.2s ease-in-out;\n}\n.form-input:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.current-type-display {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n}\n.loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .location-type-grid {\n    grid-template-columns: 1fr;\n  }\n  .modal-container {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=edit-location-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: LocationService }, { type: GooglePlacesService }, { type: HttpClient }], { isOpen: [{
    type: Input
  }], location: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], locationUpdated: [{
    type: Output
  }], addressInput: [{
    type: ViewChild,
    args: ["addressInput", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditLocationModalComponent, { className: "EditLocationModalComponent", filePath: "src/app/locations/components/edit-location-modal/edit-location-modal.component.ts", lineNumber: 49 });
})();

// src/app/locations/components/delete-confirmation-modal/delete-confirmation-modal.component.ts
function DeleteConfirmationModalComponent_div_0_div_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F This location has ", ctx_r1.location.children == null ? null : ctx_r1.location.children.length, " child location(s) ");
  }
}
function DeleteConfirmationModalComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 4)(2, "div", 28);
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DeleteConfirmationModalComponent_div_0_div_25_div_9_Template, 2, 1, "div", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.location.type.icon, \u0275\u0275sanitizeUrl)("alt", ctx_r1.location.type.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.location.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.location.type.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.location.children == null ? null : ctx_r1.location.children.length);
  }
}
function DeleteConfirmationModalComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "p", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function DeleteConfirmationModalComponent_div_0_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Delete Location");
    \u0275\u0275elementEnd();
  }
}
function DeleteConfirmationModalComponent_div_0_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "circle", 39)(3, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Deleting...");
    \u0275\u0275elementEnd()();
  }
}
function DeleteConfirmationModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 8);
    \u0275\u0275text(8, "Delete Location");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function DeleteConfirmationModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "path", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 15);
    \u0275\u0275element(16, "path", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 17)(18, "h3", 18);
    \u0275\u0275text(19, "Are you sure?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 19);
    \u0275\u0275text(21, " You are about to delete the location ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, ". This action cannot be undone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, DeleteConfirmationModalComponent_div_0_div_25_Template, 10, 5, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, DeleteConfirmationModalComponent_div_0_div_26_Template, 3, 1, "div", 21);
    \u0275\u0275elementStart(27, "div", 22)(28, "button", 23);
    \u0275\u0275listener("click", function DeleteConfirmationModalComponent_div_0_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275text(29, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 24);
    \u0275\u0275listener("click", function DeleteConfirmationModalComponent_div_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275template(31, DeleteConfirmationModalComponent_div_0_span_31_Template, 2, 0, "span", 25)(32, DeleteConfirmationModalComponent_div_0_span_32_Template, 6, 0, "span", 26);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate1('"', ctx_r1.location == null ? null : ctx_r1.location.name, '"');
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var DeleteConfirmationModalComponent = class _DeleteConfirmationModalComponent {
  locationService;
  isOpen = false;
  location = null;
  closeModal = new EventEmitter();
  locationDeleted = new EventEmitter();
  loading = false;
  errorMessage = "";
  constructor(locationService) {
    this.locationService = locationService;
  }
  confirmDelete() {
    if (!this.location || this.loading)
      return;
    this.loading = true;
    this.errorMessage = "";
    this.locationService.deleteLocation(this.location.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.locationDeleted.emit(this.location);
          this.closeModalHandler();
        } else {
          this.errorMessage = response.message || "Failed to delete location";
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || "An error occurred while deleting the location";
        this.loading = false;
      }
    });
  }
  closeModalHandler() {
    if (this.loading)
      return;
    this.isOpen = false;
    this.closeModal.emit();
    this.resetModal();
  }
  resetModal() {
    this.errorMessage = "";
    this.loading = false;
  }
  static \u0275fac = function DeleteConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeleteConfirmationModalComponent)(\u0275\u0275directiveInject(LocationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteConfirmationModalComponent, selectors: [["app-delete-confirmation-modal"]], inputs: { isOpen: "isOpen", location: "location" }, outputs: { closeModal: "closeModal", locationDeleted: "locationDeleted" }, decls: 1, vars: 1, consts: [["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-md", "w-full"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "bg-red-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6"], [1, "flex", "justify-center", "mb-4"], [1, "w-16", "h-16", "bg-red-100", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-center", "mb-6"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-2"], [1, "text-gray-600", "mb-4"], ["class", "bg-gray-50 rounded-lg p-4 mb-4", 4, "ngIf"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "space-x-3"], [1, "px-6", "py-2", "text-gray-600", "hover:text-gray-800", "font-medium", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], [1, "px-6", "py-2", "bg-red-600", "text-white", "font-medium", "rounded-lg", "hover:bg-red-700", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "bg-gray-50", "rounded-lg", "p-4", "mb-4"], [1, "w-10", "h-10", "bg-orange-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "w-6", "h-6", 3, "src", "alt"], [1, "text-left"], [1, "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-500"], ["class", "text-xs text-red-600 mt-1", 4, "ngIf"], [1, "text-xs", "text-red-600", "mt-1"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-lg"], [1, "text-red-600", "text-sm"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function DeleteConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DeleteConfirmationModalComponent_div_0_Template, 33, 9, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.warning-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=delete-confirmation-modal.component.css.map */"], data: { animation: [
    trigger("backdropAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("150ms ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({ opacity: 0 }))
      ])
    ]),
    trigger("modalAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }),
        animate("200ms ease-out", style({
          opacity: 1,
          transform: "scale(1) translateY(0)"
        }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-delete-confirmation-modal", standalone: true, imports: [CommonModule], animations: [
      trigger("backdropAnimation", [
        transition(":enter", [
          style({ opacity: 0 }),
          animate("150ms ease-out", style({ opacity: 1 }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({ opacity: 0 }))
        ])
      ]),
      trigger("modalAnimation", [
        transition(":enter", [
          style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }),
          animate("200ms ease-out", style({
            opacity: 1,
            transform: "scale(1) translateY(0)"
          }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }))
        ])
      ])
    ], template: '<!-- Delete Confirmation Modal -->\r\n<div *ngIf="isOpen"\r\n     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4"\r\n     [@backdropAnimation]>\r\n  <!-- Modal Container -->\r\n  <div class="bg-white rounded-2xl shadow-xl max-w-md w-full"\r\n       [@modalAnimation]>\r\n    <!-- Modal Header -->\r\n    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r\n      <div class="flex items-center space-x-3">\r\n        <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">\r\n          <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r\n          </svg>\r\n        </div>\r\n        <h2 class="text-xl font-semibold text-gray-900">Delete Location</h2>\r\n      </div>\r\n      <button\r\n        (click)="closeModalHandler()"\r\n        class="p-2 hover:bg-gray-100 rounded-lg transition-colors">\r\n        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n        </svg>\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Modal Content -->\r\n    <div class="p-6">\r\n      <!-- Warning Icon -->\r\n      <div class="flex justify-center mb-4">\r\n        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">\r\n          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Warning Message -->\r\n      <div class="text-center mb-6">\r\n        <h3 class="text-lg font-semibold text-gray-900 mb-2">Are you sure?</h3>\r\n        <p class="text-gray-600 mb-4">\r\n          You are about to delete the location <strong>"{{location?.name}}"</strong>.\r\n          This action cannot be undone.\r\n        </p>\r\n\r\n        <!-- Location Details -->\r\n        <div *ngIf="location" class="bg-gray-50 rounded-lg p-4 mb-4">\r\n          <div class="flex items-center space-x-3">\r\n            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">\r\n              <img [src]="location.type.icon" [alt]="location.type.name" class="w-6 h-6">\r\n            </div>\r\n            <div class="text-left">\r\n              <div class="font-medium text-gray-900">{{location.name}}</div>\r\n              <div class="text-sm text-gray-500">{{location.type.name}}</div>\r\n              <div *ngIf="location.children?.length" class="text-xs text-red-600 mt-1">\r\n                \u26A0\uFE0F This location has {{location.children?.length}} child location(s)\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Error Message -->\r\n      <div *ngIf="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">\r\n        <p class="text-red-600 text-sm">{{errorMessage}}</p>\r\n      </div>\r\n\r\n      <!-- Action Buttons -->\r\n      <div class="flex items-center justify-end space-x-3">\r\n        <button\r\n          (click)="closeModalHandler()"\r\n          [disabled]="loading"\r\n          class="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors disabled:opacity-50">\r\n          Cancel\r\n        </button>\r\n\r\n        <button\r\n          (click)="confirmDelete()"\r\n          [disabled]="loading"\r\n          class="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">\r\n          <span *ngIf="!loading">Delete Location</span>\r\n          <span *ngIf="loading" class="flex items-center space-x-2">\r\n            <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r\n              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r\n              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r\n            </svg>\r\n            <span>Deleting...</span>\r\n          </span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/locations/components/delete-confirmation-modal/delete-confirmation-modal.component.scss */\n.modal-backdrop {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.warning-icon {\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n.loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .modal-container {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=delete-confirmation-modal.component.css.map */\n"] }]
  }], () => [{ type: LocationService }], { isOpen: [{
    type: Input
  }], location: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], locationDeleted: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteConfirmationModalComponent, { className: "DeleteConfirmationModalComponent", filePath: "src/app/locations/components/delete-confirmation-modal/delete-confirmation-modal.component.ts", lineNumber: 42 });
})();

// src/app/locations/components/bulk-create-modal/bulk-create-modal.component.ts
var _c03 = ["addressInput"];
function BulkCreateModalComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275element(3, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Successfully created ", ctx_r1.successCount, " locations!");
  }
}
function BulkCreateModalComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function BulkCreateModalComponent_div_0_div_21_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    \u0275\u0275property("value", type_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r5.name);
  }
}
function BulkCreateModalComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h3", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "button", 37);
    \u0275\u0275listener("click", function BulkCreateModalComponent_div_0_div_21_Template_button_click_5_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.duplicateLocationRow(i_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 8);
    \u0275\u0275element(7, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 39);
    \u0275\u0275listener("click", function BulkCreateModalComponent_div_0_div_21_Template_button_click_8_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeLocationRow(i_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 8);
    \u0275\u0275element(10, "path", 40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 41)(12, "div")(13, "label", 42);
    \u0275\u0275text(14, " Name ");
    \u0275\u0275elementStart(15, "span", 43);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "label", 42);
    \u0275\u0275text(20, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 45)(22, "select", 46)(23, "option", 47);
    \u0275\u0275text(24, "Select type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, BulkCreateModalComponent_div_0_div_21_option_25_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 50);
    \u0275\u0275element(28, "path", 51);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 52)(30, "label", 42);
    \u0275\u0275text(31, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 53, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 52)(35, "label", 42);
    \u0275\u0275text(36, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "textarea", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const locationControl_r6 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Location ", i_r4 + 1, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.locationsArray.length <= 1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("border-red-300", ((tmp_8_0 = locationControl_r6.get("name")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = locationControl_r6.get("name")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-red-300", ((tmp_9_0 = locationControl_r6.get("location_type_id")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = locationControl_r6.get("location_type_id")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.locationTypes);
  }
}
function BulkCreateModalComponent_div_0_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Create ", ctx_r1.getValidLocationsCount(), " Locations");
  }
}
function BulkCreateModalComponent_div_0_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "circle", 57)(3, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Creating...");
    \u0275\u0275elementEnd()();
  }
}
function BulkCreateModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div")(4, "h2", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
    \u0275\u0275listener("click", function BulkCreateModalComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addLocationRow());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 8);
    \u0275\u0275element(9, "path", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Add Location");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 10);
    \u0275\u0275listener("click", function BulkCreateModalComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 11);
    \u0275\u0275element(14, "path", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 13);
    \u0275\u0275template(16, BulkCreateModalComponent_div_0_div_16_Template, 6, 1, "div", 14)(17, BulkCreateModalComponent_div_0_div_17_Template, 3, 1, "div", 15);
    \u0275\u0275elementStart(18, "div", 16)(19, "form", 17);
    \u0275\u0275listener("ngSubmit", function BulkCreateModalComponent_div_0_Template_form_ngSubmit_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(20, "div", 18);
    \u0275\u0275template(21, BulkCreateModalComponent_div_0_div_21_Template, 38, 8, "div", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 20)(23, "div", 21)(24, "span", 22);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " of ");
    \u0275\u0275elementStart(27, "span", 22);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " locations ready ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 6)(31, "button", 23);
    \u0275\u0275listener("click", function BulkCreateModalComponent_div_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModalHandler());
    });
    \u0275\u0275text(32, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 24);
    \u0275\u0275listener("click", function BulkCreateModalComponent_div_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(34, BulkCreateModalComponent_div_0_span_34_Template, 2, 1, "span", 25)(35, BulkCreateModalComponent_div_0_span_35_Template, 6, 0, "span", 26);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@backdropAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@modalAnimation", void 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Create up to 5 locations at once (", ctx_r1.getTotalLocationsCount(), "/5)");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.successCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.bulkForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.locationsArray.controls);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getValidLocationsCount());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTotalLocationsCount());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.bulkForm.invalid || ctx_r1.isLoading || ctx_r1.getValidLocationsCount() === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
var BulkCreateModalComponent = class _BulkCreateModalComponent {
  fb;
  locationService;
  googlePlacesService;
  isOpen = false;
  closeModal = new EventEmitter();
  locationsCreated = new EventEmitter();
  addressInputs;
  bulkForm;
  locationTypes = [];
  isLoading = false;
  errorMessage = "";
  successCount = 0;
  autocompleteInstances = [];
  constructor(fb, locationService, googlePlacesService) {
    this.fb = fb;
    this.locationService = locationService;
    this.googlePlacesService = googlePlacesService;
    this.bulkForm = this.fb.group({
      locations: this.fb.array([])
    });
  }
  ngOnInit() {
    this.loadLocationTypes();
    this.addLocationRow();
    this.addLocationRow();
    this.addLocationRow();
    this.bulkForm.valueChanges.subscribe(() => {
      this.locationsArray.updateValueAndValidity();
    });
  }
  ngAfterViewInit() {
    if (this.isOpen) {
      this.initializeAllAutocomplete();
    }
  }
  get locationsArray() {
    return this.bulkForm.get("locations");
  }
  loadLocationTypes() {
    this.locationService.getLocationTypes(0).subscribe({
      next: (response) => {
        if (response.success) {
          this.locationTypes = response.data.types;
        }
      },
      error: (error) => {
        console.error("Error loading location types:", error);
      }
    });
  }
  createLocationFormGroup() {
    return this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""],
      address: [""],
      location_type_id: [null, Validators.required]
    });
  }
  addLocationRow() {
    if (this.locationsArray.length >= 5) {
      return;
    }
    this.locationsArray.push(this.createLocationFormGroup());
  }
  initializeAllAutocomplete() {
    return __async(this, null, function* () {
      setTimeout(() => __async(this, null, function* () {
        if (this.addressInputs) {
          this.addressInputs.forEach((inputRef, index) => __async(this, null, function* () {
            if (inputRef?.nativeElement) {
              try {
                const autocomplete = yield this.googlePlacesService.initializeAutocomplete(inputRef.nativeElement, (place) => {
                  const locationControl = this.locationsArray.at(index);
                  if (locationControl) {
                    locationControl.patchValue({
                      address: place.formatted_address
                    });
                  }
                }, {
                  types: ["geocode"]
                });
                this.autocompleteInstances[index] = autocomplete;
              } catch (error) {
                console.error("Failed to initialize Google Places Autocomplete:", error);
              }
            }
          }));
        }
      }), 100);
    });
  }
  duplicateLocationRow(index) {
    if (this.locationsArray.length >= 5) {
      return;
    }
    const sourceLocation = this.locationsArray.at(index);
    if (sourceLocation) {
      const duplicatedLocation = this.createLocationFormGroup();
      duplicatedLocation.patchValue(sourceLocation.value);
      this.locationsArray.push(duplicatedLocation);
    }
    setTimeout(() => this.initializeAllAutocomplete(), 100);
  }
  removeLocationRow(index) {
    if (this.locationsArray.length > 1) {
      this.locationsArray.removeAt(index);
    }
  }
  getLocationTypeName(typeId) {
    const type = this.locationTypes.find((t) => t.id === typeId);
    return type ? type.name : "Unknown";
  }
  onSubmit() {
    if (this.bulkForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.successCount = 0;
      const locationsData = this.locationsArray.value.map((location) => __spreadProps(__spreadValues({}, location), {
        parent_id: null
        // For now, creating top-level locations
      }));
      this.locationService.bulkCreateLocations(locationsData).subscribe({
        next: (response) => {
          if (response.success) {
            this.successCount = locationsData.length;
            this.locationsCreated.emit(response.data.location ? [response.data.location] : []);
            setTimeout(() => {
              this.closeModalHandler();
            }, 2e3);
          } else {
            this.errorMessage = response.message || "Failed to create locations";
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "An error occurred while creating locations";
          this.isLoading = false;
        }
      });
    }
  }
  closeModalHandler() {
    this.isOpen = false;
    this.closeModal.emit();
    this.resetForm();
  }
  resetForm() {
    while (this.locationsArray.length > 0) {
      this.locationsArray.removeAt(0);
    }
    this.addLocationRow();
    this.addLocationRow();
    this.addLocationRow();
    this.errorMessage = "";
    this.successCount = 0;
  }
  getValidLocationsCount() {
    return this.locationsArray.controls.filter((control) => {
      const name = control.get("name")?.value;
      const locationTypeId = control.get("location_type_id")?.value;
      return control.valid && name && name.trim().length >= 2 && locationTypeId;
    }).length;
  }
  getTotalLocationsCount() {
    return this.locationsArray.length;
  }
  static \u0275fac = function BulkCreateModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BulkCreateModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LocationService), \u0275\u0275directiveInject(GooglePlacesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BulkCreateModalComponent, selectors: [["app-bulk-create-modal"]], viewQuery: function BulkCreateModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addressInputs = _t);
    }
  }, inputs: { isOpen: "isOpen" }, outputs: { closeModal: "closeModal", locationsCreated: "locationsCreated" }, decls: 1, vars: 1, consts: [["addressInput", ""], ["class", "fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4 animate-fade-in", 4, "ngIf"], [1, "fixed", "inset-0", "bg-[#00000085]", "flex", "items-center", "justify-center", "z-50", "p-4", "animate-fade-in"], [1, "bg-white", "rounded-2xl", "shadow-xl", "max-w-4xl", "w-full", "max-h-[90vh]", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-200"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "flex", "items-center", "space-x-3"], ["type", "button", 1, "flex", "items-center", "space-x-2", "px-4", "py-2", "text-blue-600", "hover:bg-blue-50", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex", "flex-col", "h-full", "max-h-[calc(90vh-140px)]"], ["class", "p-4 bg-green-50 border-b border-green-200", 4, "ngIf"], ["class", "p-4 bg-red-50 border-b border-red-200", 4, "ngIf"], [1, "flex-1", "overflow-auto", "p-6"], [3, "ngSubmit", "formGroup"], ["formArrayName", "locations", 1, "space-y-6"], ["class", "bg-white border border-gray-200 rounded-lg p-6 relative", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-6", "border-t", "border-gray-200", "bg-gray-50"], [1, "text-sm", "text-gray-600"], [1, "font-medium"], ["type", "button", 1, "px-6", "py-2", "text-gray-600", "hover:text-gray-800", "font-medium", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["type", "submit", 1, "px-6", "py-2", "bg-blue-600", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "p-4", "bg-green-50", "border-b", "border-green-200"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-green-800", "font-medium"], [1, "p-4", "bg-red-50", "border-b", "border-red-200"], [1, "text-red-600", "text-sm"], [1, "bg-white", "border", "border-gray-200", "rounded-lg", "p-6", "relative", 3, "formGroupName"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-lg", "font-semibold", "text-gray-900"], ["type", "button", 1, "p-2", "text-gray-400", "hover:text-gray-600", "hover:bg-gray-50", "rounded-lg", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"], ["type", "button", 1, "p-2", "text-gray-400", "hover:text-red-600", "hover:bg-red-50", "rounded-lg", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "text-red-500"], ["type", "text", "formControlName", "name", "placeholder", "Enter location name", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400"], [1, "relative"], ["formControlName", "location_type_id", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "appearance-none", "bg-white"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "mt-6"], ["type", "text", "formControlName", "address", "placeholder", "Enter location address", "autocomplete", "off", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400"], ["formControlName", "description", "rows", "3", "placeholder", "Enter location description", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400", "resize-none"], [3, "value"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function BulkCreateModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, BulkCreateModalComponent_div_0_Template, 36, 13, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.location-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.location-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-color: #e5e7eb;\n}\n.form-input[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n  padding-bottom: 1rem;\n  margin-bottom: 1.5rem;\n}\n.action-button[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-in-out;\n}\n.action-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.05);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\nselect[_ngcontent-%COMP%] {\n  background-image: none;\n}\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #ef4444 !important;\n}\n.ng-valid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #10b981;\n}\n.success-message[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.location-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.location-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .grid-cols-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .location-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n*[_ngcontent-%COMP%] {\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n  opacity: 1;\n}\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\nbutton[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=bulk-create-modal.component.css.map */"], data: { animation: [
    trigger("backdropAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("150ms ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({ opacity: 0 }))
      ])
    ]),
    trigger("modalAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }),
        animate("200ms ease-out", style({
          opacity: 1,
          transform: "scale(1) translateY(0)"
        }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({
          opacity: 0,
          transform: "scale(0.7) translateY(-50px)"
        }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkCreateModalComponent, [{
    type: Component,
    args: [{ selector: "app-bulk-create-modal", standalone: true, imports: [CommonModule, ReactiveFormsModule], animations: [
      trigger("backdropAnimation", [
        transition(":enter", [
          style({ opacity: 0 }),
          animate("150ms ease-out", style({ opacity: 1 }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({ opacity: 0 }))
        ])
      ]),
      trigger("modalAnimation", [
        transition(":enter", [
          style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }),
          animate("200ms ease-out", style({
            opacity: 1,
            transform: "scale(1) translateY(0)"
          }))
        ]),
        transition(":leave", [
          animate("150ms ease-in", style({
            opacity: 0,
            transform: "scale(0.7) translateY(-50px)"
          }))
        ])
      ])
    ], template: `<!-- Bulk Create Modal -->\r
<div *ngIf="isOpen" \r
     class="fixed inset-0 bg-[#00000085] flex items-center justify-center z-50 p-4 animate-fade-in"\r
     [@backdropAnimation]>\r
  <!-- Modal Container -->\r
  <div class="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"\r
       [@modalAnimation]>\r
    <!-- Modal Header -->\r
    <div class="flex items-center justify-between p-6 border-b border-gray-200">\r
      <div>\r
        <h2 class="text-xl font-semibold text-gray-900">Create up to 5 locations at once ({{getTotalLocationsCount()}}/5)</h2>\r
      </div>\r
      <div class="flex items-center space-x-3">\r
        <button\r
          type="button"\r
          (click)="addLocationRow()"\r
          class="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          <span>Add Location</span>\r
        </button>\r
        <button\r
          (click)="closeModalHandler()"\r
          class="p-2 hover:bg-gray-100 rounded-lg transition-colors">\r
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Modal Content -->\r
    <div class="flex flex-col h-full max-h-[calc(90vh-140px)]">\r
      <!-- Success Message -->\r
      <div *ngIf="successCount > 0" class="p-4 bg-green-50 border-b border-green-200">\r
        <div class="flex items-center space-x-2">\r
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
          </svg>\r
          <span class="text-green-800 font-medium">Successfully created {{successCount}} locations!</span>\r
        </div>\r
      </div>\r
\r
      <!-- Error Message -->\r
      <div *ngIf="errorMessage" class="p-4 bg-red-50 border-b border-red-200">\r
        <p class="text-red-600 text-sm">{{errorMessage}}</p>\r
      </div>\r
\r
      <!-- Locations Container -->\r
      <div class="flex-1 overflow-auto p-6">\r
        <form [formGroup]="bulkForm" (ngSubmit)="onSubmit()">\r
          <div formArrayName="locations" class="space-y-6">\r
            <!-- Location Cards -->\r
            <div *ngFor="let locationControl of locationsArray.controls; let i = index" \r
                 [formGroupName]="i"\r
                 class="bg-white border border-gray-200 rounded-lg p-6 relative">\r
              \r
              <!-- Card Header -->\r
              <div class="flex items-center justify-between mb-6">\r
                <h3 class="text-lg font-semibold text-gray-900">Location {{i + 1}}</h3>\r
                <div class="flex items-center space-x-2">\r
                  <!-- Copy Button -->\r
                  <button\r
                    type="button"\r
                   (click)="duplicateLocationRow(i)"\r
                    class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>\r
                    </svg>\r
                  </button>\r
                  \r
                  <!-- Delete Button -->\r
                  <button\r
                    type="button"\r
                    (click)="removeLocationRow(i)"\r
                    [disabled]="locationsArray.length <= 1"\r
                    class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                    </svg>\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <!-- Form Fields -->\r
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
                <!-- Name Field -->\r
                <div>\r
                  <label class="block text-sm font-medium text-gray-700 mb-2">\r
                    Name <span class="text-red-500">*</span>\r
                  </label>\r
                  <input\r
                    type="text"\r
                    formControlName="name"\r
                    placeholder="Enter location name"\r
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
                    [class.border-red-300]="locationControl.get('name')?.invalid && locationControl.get('name')?.touched">\r
                </div>\r
\r
                <!-- Type Field -->\r
                <div>\r
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type</label>\r
                  <div class="relative">\r
                    <select\r
                      formControlName="location_type_id"\r
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"\r
                      [class.border-red-300]="locationControl.get('location_type_id')?.invalid && locationControl.get('location_type_id')?.touched">\r
                      <option value="">Select type</option>\r
                      <option *ngFor="let type of locationTypes" [value]="type.id">{{type.name}}</option>\r
                    </select>\r
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">\r
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
                      </svg>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Address Field -->\r
              <div class="mt-6">\r
                <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>\r
                <input\r
                  type="text"\r
                  #addressInput\r
                  formControlName="address"\r
                  placeholder="Enter location address"\r
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\r
                  autocomplete="off">\r
              </div>\r
\r
              <!-- Description Field -->\r
              <div class="mt-6">\r
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>\r
                <textarea\r
                  formControlName="description"\r
                  rows="3"\r
                  placeholder="Enter location description"\r
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none"></textarea>\r
              </div>\r
            </div>\r
          </div>\r
        </form>\r
      </div>\r
\r
      <!-- Modal Footer -->\r
      <div class="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">\r
        <div class="text-sm text-gray-600">\r
          <span class="font-medium">{{getValidLocationsCount()}}</span> of <span class="font-medium">{{getTotalLocationsCount()}}</span> locations ready\r
        </div>\r
\r
        <div class="flex items-center space-x-3">\r
          <button\r
            type="button"\r
            (click)="closeModalHandler()"\r
            [disabled]="isLoading"\r
            class="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors disabled:opacity-50">\r
            Cancel\r
          </button>\r
\r
          <button\r
            type="submit"\r
            (click)="onSubmit()"\r
            [disabled]="bulkForm.invalid || isLoading || getValidLocationsCount() === 0"\r
            class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">\r
            <span *ngIf="!isLoading">Create {{getValidLocationsCount()}} Locations</span>\r
            <span *ngIf="isLoading" class="flex items-center space-x-2">\r
              <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              <span>Creating...</span>\r
            </span>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/locations/components/bulk-create-modal/bulk-create-modal.component.scss */\n.modal-backdrop {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.location-card {\n  transition: all 0.2s ease-in-out;\n}\n.location-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-color: #e5e7eb;\n}\n.form-input {\n  transition: all 0.2s ease-in-out;\n}\n.form-input:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.card-header {\n  border-bottom: 1px solid #f3f4f6;\n  padding-bottom: 1rem;\n  margin-bottom: 1.5rem;\n}\n.action-button {\n  transition: all 0.15s ease-in-out;\n}\n.action-button:hover:not(:disabled) {\n  transform: scale(1.05);\n}\n.loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\nselect {\n  background-image: none;\n}\nselect:focus {\n  outline: none;\n}\n.ng-invalid.ng-touched {\n  border-color: #ef4444 !important;\n}\n.ng-valid.ng-touched {\n  border-color: #10b981;\n}\n.success-message {\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.location-card {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.location-card:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .modal-container {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .grid-cols-2 {\n    grid-template-columns: 1fr;\n  }\n  .location-card {\n    padding: 1rem;\n  }\n}\n* {\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n::placeholder {\n  color: #9ca3af;\n  opacity: 1;\n}\nbutton:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\nbutton:active:not(:disabled) {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=bulk-create-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: LocationService }, { type: GooglePlacesService }], { isOpen: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], locationsCreated: [{
    type: Output
  }], addressInputs: [{
    type: ViewChildren,
    args: ["addressInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkCreateModalComponent, { className: "BulkCreateModalComponent", filePath: "src/app/locations/components/bulk-create-modal/bulk-create-modal.component.ts", lineNumber: 45 });
})();

// node_modules/@angular/cdk/fesm2022/shadow-dom-B0oHn41l.mjs
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}

// node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/backwards-compatibility-DHR38MsD.mjs
function _bindEventWithOptions(renderer, target, eventName, callback, options) {
  const major = parseInt(VERSION.major);
  const minor = parseInt(VERSION.minor);
  if (major > 19 || major === 19 && minor > 0 || major === 0 && minor === 0) {
    return renderer.listen(target, eventName, callback, options);
  }
  target.addEventListener(eventName, callback, options);
  return () => {
    target.removeEventListener(eventName, callback, options);
  };
}

// node_modules/@angular/cdk/fesm2022/style-loader-Cu9AvjH9.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
  _appRef;
  _injector = inject(Injector);
  _environmentInjector = inject(EnvironmentInjector);
  /**
   * Loads a set of styles.
   * @param loader Component which will be instantiated to load the styles.
   */
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: /* @__PURE__ */ new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push(createComponent(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __CdkPrivateStyleLoader,
    factory: __CdkPrivateStyleLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/platform-DmdVEw_C.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  _platformId = inject(PLATFORM_ID);
  // We want to use the Angular platform check because if the Document is shimmed
  // without the navigator, the following checks will fail. This is preferred because
  // sometimes the Document may be shimmed without the user's knowledge or intention
  /** Whether the Angular application is being rendered in the browser. */
  isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
  /** Whether the current browser is Microsoft Edge. */
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  /** Whether the current rendering engine is Microsoft Trident. */
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
  /** Whether the current rendering engine is Blink. */
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
  // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
  // ensure that Webkit runs standalone and is not used as another engine's base.
  /** Whether the current rendering engine is WebKit. */
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  /** Whether the current platform is Apple iOS. */
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
  // It's difficult to detect the plain Gecko engine, because most of the browsers identify
  // them self as Gecko-like browsers and modify the userAgent's according to that.
  // Since we only cover one explicit Firefox case, we can simply check for Firefox
  // instead of having an unstable check for Gecko.
  /** Whether the current browser is Firefox. */
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  /** Whether the current platform is Android. */
  // Trident on mobile adds the android platform to the userAgent to trick detections.
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
  // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
  // Safari browser should also use Webkit as its layout engine.
  /** Whether the current browser is Safari. */
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  constructor() {
  }
  static \u0275fac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Platform,
    factory: _Platform.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/directionality-CBXD4hga.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  /** The current 'ltr' or 'rtl' value. */
  value = "ltr";
  /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Directionality,
    factory: _Directionality.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling-BkvA05C8.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  /** Normalized direction that accounts for invalid/unsupported values. */
  _dir = "ltr";
  /** Whether the `value` has been set to its initial value. */
  _isInitialized = false;
  /** Direction as passed in by the consumer. */
  _rawDir;
  /** Event emitted when the direction changes. */
  change = new EventEmitter();
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static \u0275fac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/data-source-D34wiQZj.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}

// node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy-DoWdPqVw.mjs
var ArrayDataSource = class extends DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _RecycleViewRepeaterStrategy = class {
  /**
   * The size of the cache used to store unused views.
   * Setting the cache size to `0` will disable caching. Defaults to 20 views.
   */
  viewCacheSize = 20;
  /**
   * View cache that stores embedded view instances that have been previously stamped out,
   * but don't are not currently rendered. The view repeater will reuse these views rather than
   * creating brand new ones.
   *
   * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
   */
  _viewCache = [];
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c04 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  _scrolledIndexChange = new Subject();
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
  /** The attached viewport. */
  _viewport = null;
  /** The size of the items in the virtually scrolling list. */
  _itemSize;
  /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
  _minBufferPx;
  /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
  _maxBufferPx;
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  _itemSize = 20;
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  _minBufferPx = 100;
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  _maxBufferPx = 200;
  /** The scroll strategy used by this directive. */
  _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static \u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFixedSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
    inputs: {
      itemSize: "itemSize",
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: _fixedSizeVirtualScrollStrategyFactory,
      deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupGlobalListener;
  constructor() {
  }
  /** Subject for notifying that a registered scrollable reference element has been scrolled. */
  _scrolled = new Subject();
  /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
  _scrolledCount = 0;
  /**
   * Map of all the scrollable references that are registered with the service and their
   * scroll event subscriptions.
   */
  scrollContainers = /* @__PURE__ */ new Map();
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._cleanupGlobalListener) {
        this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._cleanupGlobalListener?.();
          this._cleanupGlobalListener = void 0;
        }
      };
    });
  }
  ngOnDestroy() {
    this._cleanupGlobalListener?.();
    this._cleanupGlobalListener = void 0;
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  static \u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollDispatcher,
    factory: _ScrollDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkScrollable = class _CdkScrollable {
  elementRef = inject(ElementRef);
  scrollDispatcher = inject(ScrollDispatcher);
  ngZone = inject(NgZone);
  dir = inject(Directionality, {
    optional: true
  });
  _scrollElement = this.elementRef.nativeElement;
  _destroyed = new Subject();
  _renderer = inject(Renderer2);
  _cleanupScroll;
  _elementScrolled = new Subject();
  constructor() {
  }
  ngOnInit() {
    this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this._cleanupScroll?.();
    this._elementScrolled.complete();
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static \u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkScrollable,
    selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]"
    }]
  }], () => [], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  _platform = inject(Platform);
  _listeners;
  /** Cached viewport dimensions. */
  _viewportSize;
  /** Stream of viewport change events. */
  _change = new Subject();
  /** Used to reference correct document/window */
  _document = inject(DOCUMENT, {
    optional: true
  });
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    ngZone.runOutsideAngular(() => {
      if (this._platform.isBrowser) {
        const changeListener = (event) => this._change.next(event);
        this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    this._listeners?.forEach((cleanup) => cleanup());
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static \u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportRuler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ViewportRuler,
    factory: _ViewportRuler.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor() {
    super();
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static \u0275fac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollable,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
    optional: true
  });
  scrollable = inject(VIRTUAL_SCROLLABLE, {
    optional: true
  });
  _platform = inject(Platform);
  /** Emits when the viewport is detached from a CdkVirtualForOf. */
  _detachedSubject = new Subject();
  /** Emits when the rendered range changes. */
  _renderedRangeSubject = new Subject();
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  _orientation = "vertical";
  /**
   * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
   * will be removed.
   */
  appendOnly = false;
  // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
  // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
  // depending on how the strategy calculates the scrolled index, it may come at a cost to
  // performance.
  /** Emits when the index of the first element visible in the viewport changes. */
  scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
  /** The element that wraps the rendered content. */
  _contentWrapper;
  /** A stream that emits whenever the rendered range changes. */
  renderedRangeStream = this._renderedRangeSubject;
  /**
   * The total size of all content (in pixels), including content that is not currently rendered.
   */
  _totalContentSize = 0;
  /** A string representing the `style.width` property value to be used for the spacer element. */
  _totalContentWidth = "";
  /** A string representing the `style.height` property value to be used for the spacer element. */
  _totalContentHeight = "";
  /**
   * The CSS transform applied to the rendered subset of items so that they appear within the bounds
   * of the visible viewport.
   */
  _renderedContentTransform;
  /** The currently rendered range of indices. */
  _renderedRange = {
    start: 0,
    end: 0
  };
  /** The length of the data bound to this viewport (in number of items). */
  _dataLength = 0;
  /** The size of the viewport (in pixels). */
  _viewportSize = 0;
  /** the currently attached CdkVirtualScrollRepeater. */
  _forOf;
  /** The last rendered content offset that was set. */
  _renderedContentOffset = 0;
  /**
   * Whether the last rendered content offset was to the end of the content (and therefore needs to
   * be rewritten as an offset to the start of the content).
   */
  _renderedContentOffsetNeedsRewrite = false;
  /** Whether there is a pending change detection cycle. */
  _isChangeDetectionPending = false;
  /** A list of functions to run after the next change detection cycle. */
  _runAfterChangeDetection = [];
  /** Subscription to changes in the viewport size. */
  _viewportChanges = Subscription.EMPTY;
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    const viewportRuler = inject(ViewportRuler);
    if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      afterNextRender(() => {
        this._isChangeDetectionPending = false;
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === "horizontal" ? `${this._totalContentSize}px` : "";
  }
  static \u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkVirtualScrollViewport,
    selectors: [["cdk-virtual-scroll-viewport"]],
    viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t.first);
      }
    },
    hostAttrs: [1, "cdk-virtual-scroll-viewport"],
    hostVars: 4,
    hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
      }
    },
    inputs: {
      orientation: "orientation",
      appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
    },
    outputs: {
      scrolledIndexChange: "scrolledIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
      deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 4,
    consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
    template: function CdkVirtualScrollViewport_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
      }
    },
    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"]
    }]
  }], () => [], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  _viewContainerRef = inject(ViewContainerRef);
  _template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
  _viewport = inject(CdkVirtualScrollViewport, {
    skipSelf: true
  });
  /** Emits when the rendered view of the data changes. */
  viewChange = new Subject();
  /** Subject that emits when a new DataSource instance is given. */
  _dataSourceChanges = new Subject();
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  _cdkVirtualForOf;
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  _cdkVirtualForTrackBy;
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  /** Emits whenever the data in the current DataSource changes. */
  dataStream = this._dataSourceChanges.pipe(
    // Start off with null `DataSource`.
    startWith(null),
    // Bundle up the previous and current data sources so we can work with both.
    pairwise(),
    // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
    // Replay the last emitted data when someone subscribes.
    shareReplay(1)
  );
  /** The differ used to calculate changes to the data. */
  _differ = null;
  /** The most recent data emitted from the DataSource. */
  _data;
  /** The currently rendered items. */
  _renderedItems;
  /** The currently rendered range of indices. */
  _renderedRange;
  /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
  _needsUpdate = false;
  _destroyed = new Subject();
  constructor() {
    const ngZone = inject(NgZone);
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static \u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualForOf)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualForOf,
    selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
    inputs: {
      cdkVirtualForOf: "cdkVirtualForOf",
      cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
      cdkVirtualForTemplate: "cdkVirtualForTemplate",
      cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _RecycleViewRepeaterStrategy
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], () => [], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor() {
    super();
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static \u0275fac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableElement)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableElement,
    selectors: [["", "cdkVirtualScrollingElement", ""]],
    hostAttrs: [1, "cdk-virtual-scrollable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableElement
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor() {
    super();
    const document2 = inject(DOCUMENT);
    this.elementRef = new ElementRef(document2.documentElement);
    this._scrollElement = document2;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static \u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableWindow,
    selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableWindow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]
    }]
  }], () => [], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static \u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkScrollableModule,
    imports: [CdkScrollable],
    exports: [CdkScrollable]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static \u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollingModule,
    imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
    exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/id-generator-Dw_9dSDu.mjs
var counters = {};
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  /**
   * Generates a unique ID with a specific prefix.
   * @param prefix Prefix to add to the ID.
   */
  getId(prefix) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${counters[prefix]++}`;
  }
  static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __IdGenerator,
    factory: __IdGenerator.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/array-I1yfCXUO.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  _document;
  /** Cached positions of the scrollable parent elements. */
  positions = /* @__PURE__ */ new Map();
  constructor(_document) {
    this._document = _document;
  }
  /** Clears the cached positions. */
  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
var importantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var PreviewRef = class {
  _document;
  _rootElement;
  _direction;
  _initialDomRect;
  _previewTemplate;
  _previewClass;
  _pickupPositionOnPage;
  _initialTransform;
  _zIndex;
  _renderer;
  /** Reference to the view of the preview element. */
  _previewEmbeddedView;
  /** Reference to the preview element. */
  _preview;
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
    this._renderer = _renderer;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview["showPopover"]();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    return this._renderer.listen(this._preview, name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      "pointer-events": "none",
      // If the preview has a margin, it can throw off our positioning so we reset it. The reset
      // value for `margin-right` needs to be `auto` when opened as a popover, because our
      // positioning is always top/left based, but native popover seems to position itself
      // to the top/right if `<html>` or `<body>` have `dir="rtl"` (see #29604). Setting it
      // to `auto` pushed it to the top/left corner in RTL and is a noop in LTR.
      "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": this._zIndex + ""
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("popover", "manual");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
};
function supportsPopover(element) {
  return "showPopover" in element;
}
var passiveEventListenerOptions = {
  passive: true
};
var activeEventListenerOptions = {
  passive: false
};
var activeCapturingEventOptions$1 = {
  passive: false,
  capture: true
};
var MOUSE_EVENT_IGNORE_TIME = 800;
var dragImportantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var DragRef = class {
  _config;
  _document;
  _ngZone;
  _viewportRuler;
  _dragDropRegistry;
  _renderer;
  _rootElementCleanups;
  _cleanupShadowRootSelectStart;
  /** Element displayed next to the user's pointer while the element is dragged. */
  _preview;
  /** Container into which to insert the preview. */
  _previewContainer;
  /** Reference to the view of the placeholder element. */
  _placeholderRef;
  /** Element that is rendered instead of the draggable item while it is being sorted. */
  _placeholder;
  /** Coordinates within the element at which the user picked up the element. */
  _pickupPositionInElement;
  /** Coordinates on the page at which the user picked up the element. */
  _pickupPositionOnPage;
  /**
   * Anchor node used to save the place in the DOM where the element was
   * picked up so that it can be restored at the end of the drag sequence.
   */
  _anchor;
  /**
   * CSS `transform` applied to the element when it isn't being dragged. We need a
   * passive transform in order for the dragged element to retain its new position
   * after the user has stopped dragging and because we need to know the relative
   * position in case they start dragging again. This corresponds to `element.style.transform`.
   */
  _passiveTransform = {
    x: 0,
    y: 0
  };
  /** CSS `transform` that is applied to the element while it's being dragged. */
  _activeTransform = {
    x: 0,
    y: 0
  };
  /** Inline `transform` value that the element had before the first dragging sequence. */
  _initialTransform;
  /**
   * Whether the dragging sequence has been started. Doesn't
   * necessarily mean that the element has been moved.
   */
  _hasStartedDragging = signal(false);
  /** Whether the element has moved since the user started dragging it. */
  _hasMoved;
  /** Drop container in which the DragRef resided when dragging began. */
  _initialContainer;
  /** Index at which the item started in its initial container. */
  _initialIndex;
  /** Cached positions of scrollable parent elements. */
  _parentPositions;
  /** Emits when the item is being moved. */
  _moveEvents = new Subject();
  /** Keeps track of the direction in which the user is dragging along each axis. */
  _pointerDirectionDelta;
  /** Pointer position at which the last change in the delta occurred. */
  _pointerPositionAtLastDirectionChange;
  /** Position of the pointer at the last pointer event. */
  _lastKnownPointerPosition;
  /**
   * Root DOM node of the drag instance. This is the element that will
   * be moved around as the user is dragging.
   */
  _rootElement;
  /**
   * Nearest ancestor SVG, relative to which coordinates are calculated if dragging SVGElement
   */
  _ownerSVGElement;
  /**
   * Inline style value of `-webkit-tap-highlight-color` at the time the
   * dragging was started. Used to restore the value once we're done dragging.
   */
  _rootElementTapHighlight;
  /** Subscription to pointer movement events. */
  _pointerMoveSubscription = Subscription.EMPTY;
  /** Subscription to the event that is dispatched when the user lifts their pointer. */
  _pointerUpSubscription = Subscription.EMPTY;
  /** Subscription to the viewport being scrolled. */
  _scrollSubscription = Subscription.EMPTY;
  /** Subscription to the viewport being resized. */
  _resizeSubscription = Subscription.EMPTY;
  /**
   * Time at which the last touch event occurred. Used to avoid firing the same
   * events multiple times on touch devices where the browser will fire a fake
   * mouse event for each touch event, after a certain time.
   */
  _lastTouchEventTime;
  /** Time at which the last dragging sequence was started. */
  _dragStartTime;
  /** Cached reference to the boundary element. */
  _boundaryElement = null;
  /** Whether the native dragging interactions have been enabled on the root element. */
  _nativeInteractionsEnabled = true;
  /** Client rect of the root element when the dragging sequence has started. */
  _initialDomRect;
  /** Cached dimensions of the preview element. Should be read via `_getPreviewRect`. */
  _previewRect;
  /** Cached dimensions of the boundary element. */
  _boundaryRect;
  /** Element that will be used as a template to create the draggable item's preview. */
  _previewTemplate;
  /** Template for placeholder element rendered to show where a draggable would be dropped. */
  _placeholderTemplate;
  /** Elements that can be used to drag the draggable item. */
  _handles = [];
  /** Registered handles that are currently disabled. */
  _disabledHandles = /* @__PURE__ */ new Set();
  /** Droppable container that the draggable is a part of. */
  _dropContainer;
  /** Layout direction of the item. */
  _direction = "ltr";
  /** Ref that the current drag item is nested in. */
  _parentDragRef;
  /**
   * Cached shadow root that the element is placed in. `null` means that the element isn't in
   * the shadow DOM and `undefined` means that it hasn't been resolved yet. Should be read via
   * `_getShadowRoot`, not directly.
   */
  _cachedShadowRoot;
  /** Axis along which dragging is locked. */
  lockAxis;
  /**
   * Amount of milliseconds to wait after the user has put their
   * pointer down before starting to drag the element.
   */
  dragStartDelay = 0;
  /** Class to be added to the preview element. */
  previewClass;
  /**
   * If the parent of the dragged element has a `scale` transform, it can throw off the
   * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
   */
  scale = 1;
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  _disabled = false;
  /** Emits as the drag sequence is being prepared. */
  beforeStarted = new Subject();
  /** Emits when the user starts dragging the item. */
  started = new Subject();
  /** Emits when the user has released a drag item, before any animations have started. */
  released = new Subject();
  /** Emits when the user stops dragging an item in the container. */
  ended = new Subject();
  /** Emits when the user has moved the item into a new container. */
  entered = new Subject();
  /** Emits when the user removes the item its container by dragging it into another container. */
  exited = new Subject();
  /** Emits when the user drops the item inside a container. */
  dropped = new Subject();
  /**
   * Emits as the user is dragging the item. Use with caution,
   * because this event will fire for every pixel that the user has dragged.
   */
  moved = this._moveEvents;
  /** Arbitrary data that can be attached to the drag item. */
  data;
  /**
   * Function that can be used to customize the logic of how the position of the drag item
   * is limited while it's being dragged. Gets called with a point containing the current position
   * of the user's pointer on the page, a reference to the item being dragged and its dimensions.
   * Should return a point describing where the item should be rendered.
   */
  constrainPosition;
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._renderer = _renderer;
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      this._removeRootElementListeners();
      this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [_bindEventWithOptions(this._renderer, element, "mousedown", this._pointerDown, activeEventListenerOptions), _bindEventWithOptions(this._renderer, element, "touchstart", this._pointerDown, passiveEventListenerOptions), _bindEventWithOptions(this._renderer, element, "dragstart", this._nativeDragStart, activeEventListenerOptions)]);
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */
  dispose() {
    this._removeRootElementListeners();
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._anchor?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._cleanupShadowRootSelectStart?.();
    this._cleanupShadowRootSelectStart = void 0;
  }
  /** Destroys the preview element and its ViewRef. */
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  /** Destroys the placeholder element and its ViewRef. */
  _destroyPlaceholder() {
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /** Handler for the `mousedown`/`touchstart` events. */
  _pointerDown = (event) => {
    this.beforeStarted.next();
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        this._initializeDragSequence(targetHandle, event);
      }
    } else if (!this.disabled) {
      this._initializeDragSequence(this._rootElement, event);
    }
  };
  /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
  _pointerMove = (event) => {
    const pointerPosition = this._getPointerPositionOnPage(event);
    if (!this._hasStartedDragging()) {
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
        const container = this._dropContainer;
        if (!isDelayElapsed) {
          this._endDragSequence(event);
          return;
        }
        if (!container || !container.isDragging() && !container.isReceiving()) {
          if (event.cancelable) {
            event.preventDefault();
          }
          this._hasStartedDragging.set(true);
          this._ngZone.run(() => this._startDragSequence(event));
        }
      }
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
    this._hasMoved = true;
    this._lastKnownPointerPosition = pointerPosition;
    this._updatePointerDirectionDelta(constrainedPointerPosition);
    if (this._dropContainer) {
      this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
    } else {
      const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
      const activeTransform = this._activeTransform;
      activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
      activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
      this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    }
    if (this._moveEvents.observers.length) {
      this._ngZone.run(() => {
        this._moveEvents.next({
          source: this,
          pointerPosition: constrainedPointerPosition,
          event,
          distance: this._getDragDistance(constrainedPointerPosition),
          delta: this._pointerDirectionDelta
        });
      });
    }
  };
  /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
  _pointerUp = (event) => {
    this._endDragSequence(event);
  };
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupShadowRootSelectStart = _bindEventWithOptions(this._renderer, shadowRoot, "selectstart", shadowDomSelectStart, activeCapturingEventOptions$1);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const anchor = this._anchor = this._anchor || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-anchor" : "");
      parent.insertBefore(anchor, element);
      this._initialTransform = element.style.transform || "";
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3, this._renderer);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
            cleanupListener();
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        const cleanupListener = this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add("cdk-drag-placeholder");
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? (
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
      // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
      // to have a value, but Firefox in device emulation mode has a bug where both can be empty
      // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
      // throwing an error. The value returned here will be incorrect, but since this only
      // breaks inside a developer tool and the value is only used for secondary information,
      // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
      event.touches[0] || event.changedTouches[0] || {
        pageX: 0,
        pageY: 0
      }
    ) : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */
  _removeRootElementListeners() {
    this._rootElementCleanups?.forEach((cleanup) => cleanup());
    this._rootElementCleanups = void 0;
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  /** Handles a native `dragstart` event. */
  _nativeDragStart = (event) => {
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        event.preventDefault();
      }
    } else if (!this.disabled) {
      event.preventDefault();
    }
  };
  /** Gets a handle that is the target of an event. */
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
};
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  _dragDropRegistry;
  /** Root element container of the drop list. */
  _element;
  /** Function used to determine if an item can be sorted into a specific index. */
  _sortPredicate;
  /** Cache of the dimensions of all the items inside the container. */
  _itemPositions = [];
  /**
   * Draggable items that are currently active inside the container. Includes the items
   * that were there at the start of the sequence, as well as any items that have been dragged
   * in, but haven't been dropped yet.
   */
  _activeDraggables;
  /** Direction in which the list is oriented. */
  orientation = "vertical";
  /** Layout direction of the drop list. */
  direction;
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Keeps track of the item that was last swapped with the dragged item, as well as what direction
   * the pointer was moving in when the swap occurred and whether the user's pointer continued to
   * overlap with the swapped item after the swapping occurred.
   */
  _previousSwap = {
    drag: null,
    delta: 0,
    overlaps: false
  };
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ? (
      // We use the coordinates of where the item entered the drop
      // zone to figure out at which index it should be inserted.
      this._getItemIndexFromPointerPosition(item, pointerX, pointerY)
    ) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    this._activeDraggables?.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    const items = this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex((currentItem) => currentItem.drag === item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  /** Refreshes the position cache of the items and sibling containers. */
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? (
        // Round these down since most browsers report client rects with
        // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
        pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right)
      ) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var MixedSortStrategy = class {
  _document;
  _dragDropRegistry;
  /** Root element container of the drop list. */
  _element;
  /** Function used to determine if an item can be sorted into a specific index. */
  _sortPredicate;
  /** Lazily-resolved root node containing the list. Use `_getRootNode` to read this. */
  _rootNode;
  /**
   * Draggable items that are currently active inside the container. Includes the items
   * that were there at the start of the sequence, as well as any items that have been dragged
   * in, but haven't been dropped yet.
   */
  _activeItems;
  /**
   * Keeps track of the item that was last swapped with the dragged item, as well as what direction
   * the pointer was moving in when the swap occurred and whether the user's pointer continued to
   * overlap with the swapped item after the swapping occurred.
   */
  _previousSwap = {
    drag: null,
    deltaX: 0,
    deltaY: 0,
    overlaps: false
  };
  /**
   * Keeps track of the relationship between a node and its next sibling. This information
   * is used to restore the DOM to the order it was in before dragging started.
   */
  _relatedNodes = [];
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeItems = items.slice();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll() {
    this._activeItems.forEach((item) => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = void 0;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
      const root = item2.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  /** Lazily resolves the list's root node. */
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = _getShadowRoot(this._element) || this._document;
    }
    return this._rootNode;
  }
  /**
   * Finds the index of the item that's closest to the item being dragged.
   * @param item Item being dragged.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
var DropListRef = class {
  _dragDropRegistry;
  _ngZone;
  _viewportRuler;
  /** Element that the drop list is attached to. */
  element;
  /** Whether starting a dragging sequence from this container is disabled. */
  disabled = false;
  /** Whether sorting items within the list is disabled. */
  sortingDisabled = false;
  /** Locks the position of the draggable elements inside the container along the specified axis. */
  lockAxis;
  /**
   * Whether auto-scrolling the view when the user
   * moves their pointer close to the edges is disabled.
   */
  autoScrollDisabled = false;
  /** Number of pixels to scroll for each frame when auto-scrolling an element. */
  autoScrollStep = 2;
  /**
   * Function that is used to determine whether an item
   * is allowed to be moved into a drop container.
   */
  enterPredicate = () => true;
  /** Function that is used to determine whether an item can be sorted into a particular index. */
  sortPredicate = () => true;
  /** Emits right before dragging has started. */
  beforeStarted = new Subject();
  /**
   * Emits when the user has moved a new drag item into this container.
   */
  entered = new Subject();
  /**
   * Emits when the user removes an item from the container
   * by dragging it into another container.
   */
  exited = new Subject();
  /** Emits when the user drops an item inside the container. */
  dropped = new Subject();
  /** Emits as the user is swapping items while actively dragging. */
  sorted = new Subject();
  /** Emits when a dragging sequence is started in a list connected to the current one. */
  receivingStarted = new Subject();
  /** Emits when a dragging sequence is stopped from a list connected to the current one. */
  receivingStopped = new Subject();
  /** Arbitrary data that can be attached to the drop list. */
  data;
  /** Element that is the direct parent of the drag items. */
  _container;
  /** Whether an item in the list is being dragged. */
  _isDragging = false;
  /** Keeps track of the positions of any parent scrollable elements. */
  _parentPositions;
  /** Strategy being used to sort items within the list. */
  _sortStrategy;
  /** Cached `DOMRect` of the drop list. */
  _domRect;
  /** Draggable items in the container. */
  _draggables = [];
  /** Drop lists that are connected to the current one. */
  _siblings = [];
  /** Connected siblings that currently have a dragged item. */
  _activeSiblings = /* @__PURE__ */ new Set();
  /** Subscription to the window being scrolled. */
  _viewportScrollSubscription = Subscription.EMPTY;
  /** Vertical direction in which the list is currently scrolling. */
  _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  /** Horizontal direction in which the list is currently scrolling. */
  _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  /** Node that is being auto-scrolled. */
  _scrollNode;
  /** Used to signal to the current auto-scroll sequence when to stop. */
  _stopScrollTimers = new Subject();
  /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
  _cachedShadowRoot = null;
  /** Reference to the document. */
  _document;
  /** Elements that can be scrolled while the user is dragging. */
  _scrollableElements = [];
  /** Initial value for the element's `scroll-snap-type` style. */
  _initialScrollSnap;
  /** Direction of the list's layout. */
  _direction = "ltr";
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    const coercedElement = this.element = coerceElement(element);
    this._document = _document;
    this.withOrientation("vertical").withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  /** Removes the drop list functionality from the DOM element. */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */
  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  /**
   * Attempts to move an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   * @param event Event that triggered the dropping sequence.
   *
   * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
   */
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  /** Sets the layout direction of the drop list. */
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */
  withOrientation(orientation) {
    if (orientation === "mixed") {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /**
   * Configures the drop list so that a different element is used as the container for the
   * dragged items. This is useful for the cases when one might not have control over the
   * full DOM that sets up the dragging.
   * Note that the alternate container needs to be a descendant of the drop list.
   * @param container New element container to be assigned.
   */
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = coerceElement(this.element);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */
  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && // Prevent the check from running on apps not using an alternate container. Ideally we
    // would always run it, but introducing it at this stage would be a breaking change.
    this._container !== coerceElement(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  /** Resets the container to its initial state. */
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  /** Starts the interval that'll auto-scroll the element. */
  _startScrollInterval = () => {
    this._stopScrolling();
    interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
      const node = this._scrollNode;
      const scrollStep = this.autoScrollStep;
      if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
        node.scrollBy(0, -scrollStep);
      } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
        node.scrollBy(0, scrollStep);
      }
      if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
        node.scrollBy(-scrollStep, 0);
      } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
        node.scrollBy(scrollStep, 0);
      }
    });
  };
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var capturingEventOptions = {
  capture: true
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var _ResetsLoader = class __ResetsLoader {
  static \u0275fac = function _ResetsLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __ResetsLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __ResetsLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-drag-resets-container", ""],
    decls: 0,
    vars: 0,
    template: function _ResetsLoader_Template(rf, ctx) {
    },
    styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_ResetsLoader, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "cdk-drag-resets-container": ""
      },
      styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"]
    }]
  }], null, null);
})();
var DragDropRegistry = class _DragDropRegistry {
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupDocumentTouchmove;
  /** Registered drop container instances. */
  _dropInstances = /* @__PURE__ */ new Set();
  /** Registered drag item instances. */
  _dragInstances = /* @__PURE__ */ new Set();
  /** Drag item instances that are currently being dragged. */
  _activeDragInstances = signal([]);
  /** Keeps track of the event listeners that we've bound to the `document`. */
  _globalListeners;
  /**
   * Predicate function to check if an item is being dragged.  Moved out into a property,
   * because it'll be called a lot and we don't want to create a new function every time.
   */
  _draggingPredicate = (item) => item.isDragging();
  /**
   * Map tracking DOM nodes and their corresponding drag directives. Note that this is different
   * from looking through the `_dragInstances` and getting their root node, because the root node
   * isn't necessarily the node that the directive is set on.
   */
  _domNodesToDirectives = null;
  /**
   * Emits the `touchmove` or `mousemove` events that are dispatched
   * while the user is dragging a drag item instance.
   */
  pointerMove = new Subject();
  /**
   * Emits the `touchend` or `mouseup` events that are dispatched
   * while the user is dragging a drag item instance.
   */
  pointerUp = new Subject();
  /**
   * Emits when the viewport has been scrolled while the user is dragging an item.
   * @deprecated To be turned into a private member. Use the `scrolled` method instead.
   * @breaking-change 13.0.0
   */
  scroll = new Subject();
  constructor() {
  }
  /** Adds a drop container to the registry. */
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupDocumentTouchmove?.();
        this._cleanupDocumentTouchmove = _bindEventWithOptions(this._renderer, this._document, "touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._cleanupDocumentTouchmove?.();
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */
  startDragging(drag, event) {
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._styleLoader.load(_ResetsLoader);
    this._activeDragInstances.update((instances) => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      const endEventHandler = (e) => this.pointerUp.next(e);
      const toBind = [
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        ["scroll", (e) => this.scroll.next(e), capturingEventOptions],
        // Preventing the default action on `mousemove` isn't enough to disable text selection
        // on Safari so we need to prevent the selection event as well. Alternatively this can
        // be done by setting `user-select: none` on the `body`, however it has causes a style
        // recalculation which can be expensive on pages with a lot of elements.
        ["selectstart", this._preventDefaultWhileDragging, activeCapturingEventOptions]
      ];
      if (isTouchEvent2) {
        toBind.push(["touchend", endEventHandler, capturingEventOptions], ["touchcancel", endEventHandler, capturingEventOptions]);
      } else {
        toBind.push(["mouseup", endEventHandler, capturingEventOptions]);
      }
      if (!isTouchEvent2) {
        toBind.push(["mousemove", (e) => this.pointerMove.next(e), activeCapturingEventOptions]);
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners = toBind.map(([name, handler, options]) => _bindEventWithOptions(this._renderer, this._document, name, handler, options));
      });
    }
  }
  /** Stops dragging a drag item instance. */
  stopDragging(drag) {
    this._activeDragInstances.update((instances) => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */
  scrolled(shadowRoot) {
    const streams = [this.scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const cleanup = _bindEventWithOptions(this._renderer, shadowRoot, "scroll", (event) => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          }, capturingEventOptions);
          return () => {
            cleanup();
          };
        });
      }));
    }
    return merge(...streams);
  }
  /**
   * Tracks the DOM node which has a draggable directive.
   * @param node Node to track.
   * @param dragRef Drag directive set on the node.
   */
  registerDirectiveNode(node, dragRef) {
    this._domNodesToDirectives ??= /* @__PURE__ */ new WeakMap();
    this._domNodesToDirectives.set(node, dragRef);
  }
  /**
   * Stops tracking a draggable directive node.
   * @param node Node to stop tracking.
   */
  removeDirectiveNode(node) {
    this._domNodesToDirectives?.delete(node);
  }
  /**
   * Gets the drag directive corresponding to a specific DOM node, if any.
   * @param node Node for which to do the lookup.
   */
  getDragDirectiveForNode(node) {
    return this._domNodesToDirectives?.get(node) || null;
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._domNodesToDirectives = null;
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /**
   * Event listener that will prevent the default browser action while the user is dragging.
   * @param event Event whose default action should be prevented.
   */
  _preventDefaultWhileDragging = (event) => {
    if (this._activeDragInstances().length > 0) {
      event.preventDefault();
    }
  };
  /** Event listener for `touchmove` that is bound even if no dragging is happening. */
  _persistentTouchmoveListener = (event) => {
    if (this._activeDragInstances().length > 0) {
      if (this._activeDragInstances().some(this._draggingPredicate)) {
        event.preventDefault();
      }
      this.pointerMove.next(event);
    }
  };
  /** Clears out the global event listeners from the `document`. */
  _clearGlobalListeners() {
    this._globalListeners?.forEach((cleanup) => cleanup());
    this._globalListeners = void 0;
  }
  static \u0275fac = function DragDropRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDropRegistry,
    factory: _DragDropRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
var DragDrop = class _DragDrop {
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _viewportRuler = inject(ViewportRuler);
  _dragDropRegistry = inject(DragDropRegistry);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  constructor() {
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */
  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry, this._renderer);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */
  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }
  static \u0275fac = function DragDrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDrop)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDrop,
    factory: _DragDrop.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var CdkDragHandle = class _CdkDragHandle {
  element = inject(ElementRef);
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  /** Emits when the state of the handle has changed. */
  _stateChanges = new Subject();
  /** Whether starting to drag through this handle is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  _disabled = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag?._addHandle(this);
  }
  ngAfterViewInit() {
    if (!this._parentDrag) {
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (ref) {
          this._parentDrag = ref;
          ref._addHandle(this);
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static \u0275fac = function CdkDragHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragHandle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragHandle,
    selectors: [["", "cdkDragHandle", ""]],
    hostAttrs: [1, "cdk-drag-handle"],
    inputs: {
      disabled: [2, "cdkDragHandleDisabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_HANDLE,
      useExisting: _CdkDragHandle
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var CdkDrag = class _CdkDrag {
  element = inject(ElementRef);
  dropContainer = inject(CDK_DROP_LIST, {
    optional: true,
    skipSelf: true
  });
  _ngZone = inject(NgZone);
  _viewContainerRef = inject(ViewContainerRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _selfHandle = inject(CDK_DRAG_HANDLE, {
    optional: true,
    self: true
  });
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _destroyed = new Subject();
  _handles = new BehaviorSubject([]);
  _previewTemplate;
  _placeholderTemplate;
  /** Reference to the underlying drag instance. */
  _dragRef;
  /** Arbitrary data to attach to this drag instance. */
  data;
  /** Locks the position of the dragged element along the specified axis. */
  lockAxis;
  /**
   * Selector that will be used to determine the root draggable element, starting from
   * the `cdkDrag` element and going up the DOM. Passing an alternate root element is useful
   * when trying to enable dragging on an element that you might not have access to.
   */
  rootElementSelector;
  /**
   * Node or selector that will be used to determine the element to which the draggable's
   * position will be constrained. If a string is passed in, it'll be used as a selector that
   * will be matched starting from the element's parent and going up the DOM until a match
   * has been found.
   */
  boundaryElement;
  /**
   * Amount of milliseconds to wait after the user has put their
   * pointer down before starting to drag the element.
   */
  dragStartDelay;
  /**
   * Sets the position of a `CdkDrag` that is outside of a drop container.
   * Can be used to restore the element's position for a returning user.
   */
  freeDragPosition;
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  _disabled;
  /**
   * Function that can be used to customize the logic of how the position of the drag item
   * is limited while it's being dragged. Gets called with a point containing the current position
   * of the user's pointer on the page, a reference to the item being dragged and its dimensions.
   * Should return a point describing where the item should be rendered.
   */
  constrainPosition;
  /** Class to be added to the preview element. */
  previewClass;
  /**
   * Configures the place into which the preview of the item will be inserted. Can be configured
   * globally through `CDK_DROP_LIST`. Possible values:
   * - `global` - Preview will be inserted at the bottom of the `<body>`. The advantage is that
   * you don't have to worry about `overflow: hidden` or `z-index`, but the item won't retain
   * its inherited styles.
   * - `parent` - Preview will be inserted into the parent of the drag item. The advantage is that
   * inherited styles will be preserved, but it may be clipped by `overflow: hidden` or not be
   * visible due to `z-index`. Furthermore, the preview is going to have an effect over selectors
   * like `:nth-child` and some flexbox configurations.
   * - `ElementRef<HTMLElement> | HTMLElement` - Preview will be inserted into a specific element.
   * Same advantages and disadvantages as `parent`.
   */
  previewContainer;
  /**
   * If the parent of the dragged element has a `scale` transform, it can throw off the
   * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
   */
  scale = 1;
  /** Emits when the user starts dragging the item. */
  started = new EventEmitter();
  /** Emits when the user has released a drag item, before any animations have started. */
  released = new EventEmitter();
  /** Emits when the user stops dragging an item in the container. */
  ended = new EventEmitter();
  /** Emits when the user has moved the item into a new container. */
  entered = new EventEmitter();
  /** Emits when the user removes the item its container by dragging it into another container. */
  exited = new EventEmitter();
  /** Emits when the user drops the item inside a container. */
  dropped = new EventEmitter();
  /**
   * Emits as the user is dragging the item. Use with caution,
   * because this event will fire for every pixel that the user has dragged.
   */
  moved = new Observable((observer) => {
    const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
      source: this,
      pointerPosition: movedEvent.pointerPosition,
      event: movedEvent.event,
      delta: movedEvent.delta,
      distance: movedEvent.distance
    }))).subscribe(observer);
    return () => {
      subscription.unsubscribe();
    };
  });
  _injector = inject(Injector);
  constructor() {
    const dropContainer = this.dropContainer;
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    const dragDrop = inject(DragDrop);
    this._dragRef = dragDrop.createDrag(this.element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);
      dropContainer.addItem(this);
      dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    afterNextRender(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    this._dragRef.scale = this.scale;
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  /** Syncs the root element with the `DragRef`. */
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : (
        // Comment tag doesn't have closest method, so use parent's one.
        element.parentElement?.closest(this.rootElementSelector)
      );
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (parentDrag) {
          ref.withParent(parentDrag._dragRef);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */
  _setupHandlesListener() {
    this._handles.pipe(
      // Sync the new handles with the DragRef.
      tap((handles) => {
        const handleElements = handles.map((handle) => handle.element);
        if (this._selfHandle && this.rootElementSelector) {
          handleElements.push(this.element);
        }
        this._dragRef.withHandles(handleElements);
      }),
      // Listen if the state of any of the handles changes.
      switchMap((handles) => {
        return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
      }),
      takeUntil(this._destroyed)
    ).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static \u0275fac = function CdkDrag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDrag)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDrag,
    selectors: [["", "cdkDrag", ""]],
    hostAttrs: [1, "cdk-drag"],
    hostVars: 4,
    hostBindings: function CdkDrag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
      }
    },
    inputs: {
      data: [0, "cdkDragData", "data"],
      lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
      rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
      boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
      dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
      freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
      disabled: [2, "cdkDragDisabled", "disabled", booleanAttribute],
      constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
      previewClass: [0, "cdkDragPreviewClass", "previewClass"],
      previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
      scale: [2, "cdkDragScale", "scale", numberAttribute]
    },
    outputs: {
      started: "cdkDragStarted",
      released: "cdkDragReleased",
      ended: "cdkDragEnded",
      entered: "cdkDragEntered",
      exited: "cdkDragExited",
      dropped: "cdkDragDropped",
      moved: "cdkDragMoved"
    },
    exportAs: ["cdkDrag"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PARENT,
      useExisting: _CdkDrag
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      host: {
        "class": "cdk-drag",
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [], {
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    scale: [{
      type: Input,
      args: [{
        alias: "cdkDragScale",
        transform: numberAttribute
      }]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var CdkDropListGroup = class _CdkDropListGroup {
  /** Drop lists registered inside the group. */
  _items = /* @__PURE__ */ new Set();
  /** Whether starting a dragging sequence from inside this group is disabled. */
  disabled = false;
  ngOnDestroy() {
    this._items.clear();
  }
  static \u0275fac = function CdkDropListGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropListGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropListGroup,
    selectors: [["", "cdkDropListGroup", ""]],
    inputs: {
      disabled: [2, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
    },
    exportAs: ["cdkDropListGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useExisting: _CdkDropListGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkDropList = class _CdkDropList {
  element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollDispatcher = inject(ScrollDispatcher);
  _dir = inject(Directionality, {
    optional: true
  });
  _group = inject(CDK_DROP_LIST_GROUP, {
    optional: true,
    skipSelf: true
  });
  /** Refs that have been synced with the drop ref most recently. */
  _latestSortedRefs;
  /** Emits when the list has been destroyed. */
  _destroyed = new Subject();
  /** Whether the element's scrollable parents have been resolved. */
  _scrollableParentsResolved;
  /** Keeps track of the drop lists that are currently on the page. */
  static _dropLists = [];
  /** Reference to the underlying drop list instance. */
  _dropListRef;
  /**
   * Other draggable containers that this container is connected to and into which the
   * container's items can be transferred. Can either be references to other drop containers,
   * or their unique IDs.
   */
  connectedTo = [];
  /** Arbitrary data to attach to this container. */
  data;
  /** Direction in which the list is oriented. */
  orientation;
  /**
   * Unique ID for the drop zone. Can be used as a reference
   * in the `connectedTo` of another `CdkDropList`.
   */
  id = inject(_IdGenerator).getId("cdk-drop-list-");
  /** Locks the position of the draggable elements inside the container along the specified axis. */
  lockAxis;
  /** Whether starting a dragging sequence from this container is disabled. */
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  _disabled;
  /** Whether sorting within this drop list is disabled. */
  sortingDisabled;
  /**
   * Function that is used to determine whether an item
   * is allowed to be moved into a drop container.
   */
  enterPredicate = () => true;
  /** Functions that is used to determine whether an item can be sorted into a particular index. */
  sortPredicate = () => true;
  /** Whether to auto-scroll the view when the user moves their pointer close to the edges. */
  autoScrollDisabled;
  /** Number of pixels to scroll for each frame when auto-scrolling an element. */
  autoScrollStep;
  /**
   * Selector that will be used to resolve an alternate element container for the drop list.
   * Passing an alternate container is useful for the cases where one might not have control
   * over the parent node of the draggable items within the list (e.g. due to content projection).
   * This allows for usages like:
   *
   * ```
   * <div cdkDropList cdkDropListElementContainer=".inner">
   *   <div class="inner">
   *     <div cdkDrag></div>
   *   </div>
   * </div>
   * ```
   */
  elementContainerSelector;
  /** Emits when the user drops an item inside the container. */
  dropped = new EventEmitter();
  /**
   * Emits when the user has moved a new drag item into this container.
   */
  entered = new EventEmitter();
  /**
   * Emits when the user removes an item from the container
   * by dragging it into another container.
   */
  exited = new EventEmitter();
  /** Emits as the user is swapping items while actively dragging. */
  sorted = new EventEmitter();
  /**
   * Keeps track of the items that are registered with this container. Historically we used to
   * do this with a `ContentChildren` query, however queries don't handle transplanted views very
   * well which means that we can't handle cases like dragging the headers of a `mat-table`
   * correctly. What we do instead is to have the items register themselves with the container
   * and then we sort them based on their position in the DOM.
   */
  _unsortedItems = /* @__PURE__ */ new Set();
  constructor() {
    const dragDrop = inject(DragDrop);
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDropList");
    }
    this._dropListRef = dragDrop.createDropList(this.element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (this._group) {
      this._group._items.add(this);
    }
  }
  /** Registers an items with the drop list. */
  addItem(item) {
    this._unsortedItems.add(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef(this.getSortedItems().map((item2) => item2._dragRef));
    }
  }
  /** Removes an item from the drop list. */
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._latestSortedRefs) {
      const index = this._latestSortedRefs.indexOf(item._dragRef);
      if (index > -1) {
        this._latestSortedRefs.splice(index, 1);
        this._syncItemsWithRef(this._latestSortedRefs);
      }
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._latestSortedRefs = void 0;
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef(this.getSortedItems().map((item) => item._dragRef));
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
  }
  /** Syncs up the registered drag items with underlying drop list ref. */
  _syncItemsWithRef(items) {
    this._latestSortedRefs = items;
    this._dropListRef.withItems(items);
  }
  static \u0275fac = function CdkDropList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropList)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropList,
    selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
    hostAttrs: [1, "cdk-drop-list"],
    hostVars: 7,
    hostBindings: function CdkDropList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275classProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
      }
    },
    inputs: {
      connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
      data: [0, "cdkDropListData", "data"],
      orientation: [0, "cdkDropListOrientation", "orientation"],
      id: "id",
      lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
      disabled: [2, "cdkDropListDisabled", "disabled", booleanAttribute],
      sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
      enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
      sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
      autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
      autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
      elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"]
    },
    outputs: {
      dropped: "cdkDropListDropped",
      entered: "cdkDropListEntered",
      exited: "cdkDropListExited",
      sorted: "cdkDropListSorted"
    },
    exportAs: ["cdkDropList"],
    features: [\u0275\u0275ProvidersFeature([
      // Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CDK_DROP_LIST_GROUP,
        useValue: void 0
      },
      {
        provide: CDK_DROP_LIST,
        useExisting: _CdkDropList
      }
    ])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      providers: [
        // Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: void 0
        },
        {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }
      ],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var CdkDragPreview = class _CdkDragPreview {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  /** Context data to be added to the preview template instance. */
  data;
  /** Whether the preview should preserve the same size as the item that is being dragged. */
  matchSize = false;
  constructor() {
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static \u0275fac = function CdkDragPreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPreview)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPreview,
    selectors: [["ng-template", "cdkDragPreview", ""]],
    inputs: {
      data: "data",
      matchSize: [2, "matchSize", "matchSize", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PREVIEW,
      useExisting: _CdkDragPreview
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var CdkDragPlaceholder = class _CdkDragPlaceholder {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  /** Context data to be added to the placeholder template instance. */
  data;
  constructor() {
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static \u0275fac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPlaceholder)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPlaceholder,
    selectors: [["ng-template", "cdkDragPlaceholder", ""]],
    inputs: {
      data: "data"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PLACEHOLDER,
      useExisting: _CdkDragPlaceholder
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var DragDropModule = class _DragDropModule {
  static \u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DragDropModule,
    imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
    exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DragDrop],
    imports: [CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// src/app/locations/components/hierarchy-management/hierarchy-management.component.ts
function HierarchyManagementComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function HierarchyManagementComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveSelectedToRoot());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Move to Root (", ctx_r1.selectedNodes.size, ") ");
  }
}
function HierarchyManagementComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function HierarchyManagementComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteSelected());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Delete Selected (", ctx_r1.selectedNodes.size, ") ");
  }
}
function HierarchyManagementComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 16);
    \u0275\u0275element(4, "circle", 17)(5, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 19);
    \u0275\u0275text(7, "Loading Hierarchy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 20);
    \u0275\u0275text(9, "Please wait while we fetch the location hierarchy...");
    \u0275\u0275elementEnd()()();
  }
}
function HierarchyManagementComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 23);
    \u0275\u0275element(3, "path", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 19);
    \u0275\u0275text(5, "Error Loading Hierarchy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 26);
    \u0275\u0275listener("click", function HierarchyManagementComponent_div_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadHierarchy());
    });
    \u0275\u0275text(9, " Retry ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function HierarchyManagementComponent_div_14_div_8_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", node_r7.children.length, " sub-location", node_r7.children.length !== 1 ? "s" : "", " ");
  }
}
function HierarchyManagementComponent_div_14_div_8_div_22_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", child_r9.children.length, " sub-location", child_r9.children.length !== 1 ? "s" : "", " ");
  }
}
function HierarchyManagementComponent_div_14_div_8_div_22_div_1_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_div_20_div_1_Template_div_click_0_listener($event) {
      const grandchild_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleNodeSelection(grandchild_r11, $event));
    })("dragover", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_div_20_div_1_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("drop", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_div_20_div_1_Template_div_drop_0_listener($event) {
      const grandchild_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onDropOnNode($event, grandchild_r11));
    });
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 4)(3, "div", 37);
    \u0275\u0275listener("dragstart", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_div_20_div_1_Template_div_dragstart_3_listener($event) {
      const grandchild_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, grandchild_r11));
    })("dragend", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_div_20_div_1_Template_div_dragend_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onDragEnd($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 38);
    \u0275\u0275element(5, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 40);
    \u0275\u0275element(8, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 42)(10, "div", 4)(11, "span", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 61);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 45);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "span", 62);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const grandchild_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("ring-2", grandchild_r11.selected)("ring-blue-500", grandchild_r11.selected)("bg-blue-50", grandchild_r11.selected);
    \u0275\u0275advance(6);
    \u0275\u0275classMap("w-6 h-6 bg-" + ctx_r1.getNodeIconColor(grandchild_r11) + "-100 rounded flex items-center justify-center");
    \u0275\u0275advance();
    \u0275\u0275classMap("w-3 h-3 text-" + ctx_r1.getNodeIconColor(grandchild_r11) + "-600");
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r1.getNodeIcon(grandchild_r11));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(grandchild_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (grandchild_r11.type == null ? null : grandchild_r11.type.name) || "Floor", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", grandchild_r11.asset_count, " assets");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLevelText(grandchild_r11), " ");
  }
}
function HierarchyManagementComponent_div_14_div_8_div_22_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, HierarchyManagementComponent_div_14_div_8_div_22_div_1_div_20_div_1_Template, 19, 15, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", child_r9.children);
  }
}
function HierarchyManagementComponent_div_14_div_8_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_Template_div_click_0_listener($event) {
      const child_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleNodeSelection(child_r9, $event));
    })("dragover", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("drop", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_Template_div_drop_0_listener($event) {
      const child_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDropOnNode($event, child_r9));
    });
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 4)(3, "div", 54);
    \u0275\u0275listener("dragstart", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_Template_div_dragstart_3_listener($event) {
      const child_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, child_r9));
    })("dragend", function HierarchyManagementComponent_div_14_div_8_div_22_div_1_Template_div_dragend_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDragEnd($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 38);
    \u0275\u0275element(5, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 40);
    \u0275\u0275element(8, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 42)(10, "div", 4)(11, "span", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 56);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 45);
    \u0275\u0275text(16);
    \u0275\u0275template(17, HierarchyManagementComponent_div_14_div_8_div_22_div_1_span_17_Template, 2, 2, "span", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "span", 48);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, HierarchyManagementComponent_div_14_div_8_div_22_div_1_div_20_Template, 2, 1, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("ring-2", child_r9.selected)("ring-blue-500", child_r9.selected)("bg-blue-50", child_r9.selected);
    \u0275\u0275advance(6);
    \u0275\u0275classMap("w-8 h-8 bg-" + ctx_r1.getNodeIconColor(child_r9) + "-100 rounded flex items-center justify-center");
    \u0275\u0275advance();
    \u0275\u0275classMap("w-4 h-4 text-" + ctx_r1.getNodeIconColor(child_r9) + "-600");
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r1.getNodeIcon(child_r9));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(child_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (child_r9.type == null ? null : child_r9.type.name) || "Residential Building", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", child_r9.asset_count, " assets ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r9.children.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLevelText(child_r9), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r9.children.length > 0);
  }
}
function HierarchyManagementComponent_div_14_div_8_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, HierarchyManagementComponent_div_14_div_8_div_22_div_1_Template, 21, 17, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", node_r7.children);
  }
}
function HierarchyManagementComponent_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275listener("click", function HierarchyManagementComponent_div_14_div_8_Template_div_click_1_listener($event) {
      const node_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleNodeSelection(node_r7, $event));
    })("dragover", function HierarchyManagementComponent_div_14_div_8_Template_div_dragover_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("drop", function HierarchyManagementComponent_div_14_div_8_Template_div_drop_1_listener($event) {
      const node_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropOnNode($event, node_r7));
    });
    \u0275\u0275elementStart(2, "div", 36)(3, "div", 4)(4, "div", 37);
    \u0275\u0275listener("dragstart", function HierarchyManagementComponent_div_14_div_8_Template_div_dragstart_4_listener($event) {
      const node_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, node_r7));
    })("dragend", function HierarchyManagementComponent_div_14_div_8_Template_div_dragend_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragEnd($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 38);
    \u0275\u0275element(6, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 40);
    \u0275\u0275element(9, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 42)(11, "div", 4)(12, "span", 43);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 45);
    \u0275\u0275text(17);
    \u0275\u0275template(18, HierarchyManagementComponent_div_14_div_8_span_18_Template, 2, 2, "span", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 47)(20, "span", 48);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, HierarchyManagementComponent_div_14_div_8_div_22_Template, 2, 1, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ring-2", node_r7.selected)("ring-blue-500", node_r7.selected)("bg-blue-50", node_r7.selected);
    \u0275\u0275advance(6);
    \u0275\u0275classMap("w-10 h-10 bg-" + ctx_r1.getNodeIconColor(node_r7) + "-100 rounded-lg flex items-center justify-center");
    \u0275\u0275advance();
    \u0275\u0275classMap("w-5 h-5 text-" + ctx_r1.getNodeIconColor(node_r7) + "-600");
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r1.getNodeIcon(node_r7));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(node_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (node_r7.type == null ? null : node_r7.type.name) || "Community", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", node_r7.asset_count, " assets ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r7.children.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLevelText(node_r7), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r7.children.length > 0);
  }
}
function HierarchyManagementComponent_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 64);
    \u0275\u0275element(3, "path", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 19);
    \u0275\u0275text(5, "No hierarchy data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 20);
    \u0275\u0275text(7, "Create some locations to manage the hierarchy.");
    \u0275\u0275elementEnd()();
  }
}
function HierarchyManagementComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("dragover", function HierarchyManagementComponent_div_14_Template_div_dragover_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("drop", function HierarchyManagementComponent_div_14_Template_div_drop_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDropToRoot($event));
    });
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 30);
    \u0275\u0275element(4, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6, "Root Level - Drop here to make location top-level");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275template(8, HierarchyManagementComponent_div_14_div_8_Template, 23, 17, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, HierarchyManagementComponent_div_14_div_9_Template, 8, 0, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("border-blue-500", ctx_r1.dropZoneActive)("bg-blue-50", ctx_r1.dropZoneActive);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.hierarchyData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hierarchyData.length === 0);
  }
}
var HierarchyManagementComponent = class _HierarchyManagementComponent {
  locationService;
  destroy$ = new Subject();
  hierarchyData = [];
  selectedNodes = /* @__PURE__ */ new Set();
  loading = false;
  error = "";
  // Drag and drop state
  draggedNode = null;
  dropZoneActive = false;
  constructor(locationService) {
    this.locationService = locationService;
  }
  ngOnInit() {
    this.loadHierarchy();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadHierarchy() {
    this.loading = true;
    this.error = "";
    this.locationService.getHierarchy().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.hierarchyData = this.transformHierarchyData(response.data.hierarchy);
        } else {
          this.error = "Failed to load hierarchy data";
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || "An error occurred while loading hierarchy";
        this.loading = false;
      }
    });
  }
  transformHierarchyData(data) {
    return data.map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      hierarchy_level: item.hierarchy_level || 0,
      asset_count: item.asset_count || 0,
      children: item.children ? this.transformHierarchyData(item.children) : [],
      parent_id: item.parent_id,
      selected: false,
      expanded: true
    }));
  }
  // Selection methods
  toggleNodeSelection(node, event) {
    event.stopPropagation();
    if (event.ctrlKey || event.metaKey) {
      if (this.selectedNodes.has(node.id)) {
        this.selectedNodes.delete(node.id);
        node.selected = false;
      } else {
        this.selectedNodes.add(node.id);
        node.selected = true;
      }
    } else {
      this.clearSelection();
      this.selectedNodes.add(node.id);
      node.selected = true;
    }
  }
  clearSelection() {
    this.selectedNodes.clear();
    this.updateSelectionState(this.hierarchyData, false);
  }
  updateSelectionState(nodes, selected) {
    nodes.forEach((node) => {
      node.selected = selected;
      if (node.children.length > 0) {
        this.updateSelectionState(node.children, selected);
      }
    });
  }
  // Drag and drop methods
  onDragStart(event, node) {
    this.draggedNode = node;
    this.dropZoneActive = true;
    event.dataTransfer.effectAllowed = "move";
  }
  onDragEnd(event) {
    this.draggedNode = null;
    this.dropZoneActive = false;
  }
  onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }
  onDropToRoot(event) {
    event.preventDefault();
    if (this.draggedNode) {
      this.moveToRoot(this.draggedNode);
    }
    this.dropZoneActive = false;
    this.draggedNode = null;
  }
  onDropOnNode(event, targetNode) {
    event.preventDefault();
    event.stopPropagation();
    if (this.draggedNode && this.draggedNode.id !== targetNode.id) {
      this.moveToParent(this.draggedNode, targetNode);
    }
    this.dropZoneActive = false;
    this.draggedNode = null;
  }
  moveToRoot(node) {
    this.removeNodeFromHierarchy(node);
    node.hierarchy_level = 0;
    node.parent_id = void 0;
    this.hierarchyData.push(node);
    this.updateLocationHierarchy(node.id, null);
  }
  moveToParent(node, newParent) {
    this.removeNodeFromHierarchy(node);
    node.hierarchy_level = newParent.hierarchy_level + 1;
    node.parent_id = newParent.id;
    newParent.children.push(node);
    newParent.expanded = true;
    this.updateLocationHierarchy(node.id, newParent.id);
  }
  removeNodeFromHierarchy(nodeToRemove) {
    const rootIndex = this.hierarchyData.findIndex((n) => n.id === nodeToRemove.id);
    if (rootIndex !== -1) {
      this.hierarchyData.splice(rootIndex, 1);
      return;
    }
    this.removeFromChildren(this.hierarchyData, nodeToRemove);
  }
  removeFromChildren(nodes, nodeToRemove) {
    for (const node of nodes) {
      const childIndex = node.children.findIndex((child) => child.id === nodeToRemove.id);
      if (childIndex !== -1) {
        node.children.splice(childIndex, 1);
        return true;
      }
      if (this.removeFromChildren(node.children, nodeToRemove)) {
        return true;
      }
    }
    return false;
  }
  updateLocationHierarchy(locationId, newParentId) {
    this.locationService.moveLocations([locationId], newParentId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          console.log("Location moved successfully");
        } else {
          console.error("Failed to move location:", response.message);
          this.loadHierarchy();
        }
      },
      error: (error) => {
        console.error("Error moving location:", error);
        this.loadHierarchy();
      }
    });
  }
  // Bulk operations
  moveSelectedToRoot() {
    if (this.selectedNodes.size === 0)
      return;
    const selectedIds = Array.from(this.selectedNodes);
    this.locationService.moveLocations(selectedIds, null).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadHierarchy();
          this.clearSelection();
        }
      },
      error: (error) => {
        console.error("Error moving locations:", error);
      }
    });
  }
  deleteSelected() {
    if (this.selectedNodes.size === 0)
      return;
    console.log("Delete selected locations:", Array.from(this.selectedNodes));
  }
  // Utility methods
  getNodeIcon(node) {
    if (node.hierarchy_level === 0) {
      return "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4";
    } else if (node.hierarchy_level === 1) {
      return "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4";
    } else {
      return "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z";
    }
  }
  getNodeIconColor(node) {
    if (node.hierarchy_level === 0)
      return "blue";
    if (node.hierarchy_level === 1)
      return "blue";
    return "green";
  }
  getLevelBadge(node) {
    return node.hierarchy_level === 0 ? "L0" : "LP";
  }
  getLevelText(node) {
    return node.hierarchy_level === 0 ? "Level 0" : "Parent";
  }
  getChildrenCount(node) {
    return node.children.length;
  }
  static \u0275fac = function HierarchyManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HierarchyManagementComponent)(\u0275\u0275directiveInject(LocationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HierarchyManagementComponent, selectors: [["app-hierarchy-management"]], decls: 15, vars: 5, consts: [[1, "hierarchy-management"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "text-gray-600", "mt-1"], [1, "flex", "items-center", "space-x-3"], ["class", "px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium", 3, "click", 4, "ngIf"], ["class", "px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium", 3, "click", 4, "ngIf"], [1, "px-4", "py-2", "text-gray-600", "hover:bg-gray-100", "rounded-lg", "transition-colors", "text-sm", "font-medium", 3, "click"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "text-center py-12", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "px-4", "py-2", "text-blue-600", "hover:bg-blue-50", "rounded-lg", "transition-colors", "text-sm", "font-medium", 3, "click"], [1, "px-4", "py-2", "text-red-600", "hover:bg-red-50", "rounded-lg", "transition-colors", "text-sm", "font-medium", 3, "click"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-blue-100", "rounded-full", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-8", "h-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-500"], [1, "text-center", "py-12"], [1, "w-16", "h-16", "bg-red-100", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-sm", "text-gray-500", "mb-4"], [1, "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-colors", 3, "click"], [1, "space-y-4"], [1, "border-2", "border-dashed", "border-gray-300", "rounded-lg", "p-8", "text-center", "transition-all", 3, "dragover", "drop"], [1, "flex", "items-center", "justify-center", "space-x-2", "text-gray-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "font-medium"], ["class", "hierarchy-card", 4, "ngFor", "ngForOf"], [1, "hierarchy-card"], [1, "bg-white", "border", "border-gray-200", "rounded-lg", "p-4", "transition-all", "hover:shadow-sm", 3, "click", "dragover", "drop"], [1, "flex", "items-center", "justify-between"], ["draggable", "true", 1, "drag-handle", "cursor-move", "p-1", "hover:bg-gray-100", "rounded", 3, "dragstart", "dragend"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 8h16M4 16h16"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], [1, "flex-1"], [1, "font-semibold", "text-gray-900"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded", "text-xs", "font-medium", "bg-gray-100", "text-gray-700"], [1, "text-sm", "text-gray-500", "mt-1"], ["class", "ml-4", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded", "text-xs", "font-medium", "bg-blue-100", "text-blue-800"], ["class", "mt-4 ml-7 space-y-3", 4, "ngIf"], [1, "ml-4"], [1, "mt-4", "ml-7", "space-y-3"], ["class", "bg-gray-50 rounded-lg p-3 transition-all hover:bg-gray-100", 3, "ring-2", "ring-blue-500", "bg-blue-50", "click", "dragover", "drop", 4, "ngFor", "ngForOf"], [1, "bg-gray-50", "rounded-lg", "p-3", "transition-all", "hover:bg-gray-100", 3, "click", "dragover", "drop"], ["draggable", "true", 1, "drag-handle", "cursor-move", "p-1", "hover:bg-gray-200", "rounded", 3, "dragstart", "dragend"], [1, "font-medium", "text-gray-900"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded", "text-xs", "font-medium", "bg-blue-100", "text-blue-700"], ["class", "mt-3 ml-7 space-y-2", 4, "ngIf"], [1, "mt-3", "ml-7", "space-y-2"], ["class", "bg-white rounded border border-gray-100 p-3 transition-all hover:shadow-sm", 3, "ring-2", "ring-blue-500", "bg-blue-50", "click", "dragover", "drop", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded", "border", "border-gray-100", "p-3", "transition-all", "hover:shadow-sm", 3, "click", "dragover", "drop"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded", "text-xs", "font-medium", "bg-green-100", "text-green-700"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded", "text-xs", "font-medium", "bg-green-100", "text-green-800"], [1, "w-16", "h-16", "bg-gray-100", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"]], template: function HierarchyManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Hierarchy Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, " Drag and drop locations to reorganize your hierarchy. Hold Ctrl/Cmd and click to select multiple locations for bulk operations. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, HierarchyManagementComponent_button_8_Template, 2, 1, "button", 5)(9, HierarchyManagementComponent_button_9_Template, 2, 1, "button", 6);
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275listener("click", function HierarchyManagementComponent_Template_button_click_10_listener() {
        return ctx.clearSelection();
      });
      \u0275\u0275text(11, " Clear Selection ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, HierarchyManagementComponent_div_12_Template, 10, 0, "div", 8)(13, HierarchyManagementComponent_div_13_Template, 10, 1, "div", 9)(14, HierarchyManagementComponent_div_14_Template, 10, 6, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.selectedNodes.size > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedNodes.size > 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DragDropModule], styles: ['\n\n.hierarchy-management[_ngcontent-%COMP%]   .hierarchy-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .hierarchy-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.hierarchy-management[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transition: all 0.2s ease-in-out;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: #f3f4f6;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .dragging[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transform: rotate(2deg);\n}\n.hierarchy-management[_ngcontent-%COMP%]   .drop-zone-active[_ngcontent-%COMP%] {\n  border-color: #3b82f6 !important;\n  background-color: #eff6ff !important;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .drop-zone-active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border: 2px dashed #3b82f6;\n  border-radius: 0.5rem;\n  pointer-events: none;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .drop-target[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);\n}\n.hierarchy-management[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background-color: #eff6ff !important;\n  border-color: #3b82f6 !important;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);\n}\n.hierarchy-management[_ngcontent-%COMP%]   .level-0[_ngcontent-%COMP%] {\n  border-left: 4px solid #3b82f6;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .level-1[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n  margin-left: 1rem;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .level-2[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n  margin-left: 2rem;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .node-card[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-in-out;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .node-card[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n  border-color: #e2e8f0;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.hierarchy-management[_ngcontent-%COMP%]   .level-badge[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 9999px;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.hierarchy-management[_ngcontent-%COMP%]   .node-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.hierarchy-management[_ngcontent-%COMP%]   .multi-select-info[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  background: #1f2937;\n  color: white;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  z-index: 50;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n.hierarchy-management[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .hierarchy-management[_ngcontent-%COMP%]   .hierarchy-card[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n  }\n  .hierarchy-management[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hierarchy-management[_ngcontent-%COMP%]   .level-1[_ngcontent-%COMP%] {\n    margin-left: 0.5rem;\n  }\n  .hierarchy-management[_ngcontent-%COMP%]   .level-2[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n  }\n}\n@media print {\n  .hierarchy-management[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%], \n   .hierarchy-management[_ngcontent-%COMP%]   .multi-select-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hierarchy-management[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #cbd5e1 #f1f5f9;\n}\n.hierarchy-management[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.hierarchy-management[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f5f9;\n  border-radius: 3px;\n}\n.hierarchy-management[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.hierarchy-management[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  background: white;\n  border: 1px solid #e5e7eb;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  background: #f3f4f6;\n  border: 2px dashed #d1d5db;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=hierarchy-management.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HierarchyManagementComponent, [{
    type: Component,
    args: [{ selector: "app-hierarchy-management", standalone: true, imports: [CommonModule, DragDropModule], template: `<!-- Hierarchy Management Component -->\r
<div class="hierarchy-management">\r
  <!-- Header -->\r
  <div class="flex items-center justify-between mb-6">\r
    <div>\r
      <h2 class="text-2xl font-bold text-gray-900">Hierarchy Management</h2>\r
      <p class="text-gray-600 mt-1">\r
        Drag and drop locations to reorganize your hierarchy. Hold Ctrl/Cmd and click to select multiple locations for bulk operations.\r
      </p>\r
    </div>\r
    <div class="flex items-center space-x-3">\r
      <button\r
        *ngIf="selectedNodes.size > 0"\r
        (click)="moveSelectedToRoot()"\r
        class="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium">\r
        Move to Root ({{selectedNodes.size}})\r
      </button>\r
      <button\r
        *ngIf="selectedNodes.size > 0"\r
        (click)="deleteSelected()"\r
        class="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">\r
        Delete Selected ({{selectedNodes.size}})\r
      </button>\r
      <button\r
        (click)="clearSelection()"\r
        class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">\r
        Clear Selection\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">\r
        <svg class="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">Loading Hierarchy</h3>\r
      <p class="text-sm text-gray-500">Please wait while we fetch the location hierarchy...</p>\r
    </div>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="text-center py-12">\r
    <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">\r
      <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
      </svg>\r
    </div>\r
    <h3 class="text-lg font-medium text-gray-900 mb-2">Error Loading Hierarchy</h3>\r
    <p class="text-sm text-gray-500 mb-4">{{error}}</p>\r
    <button \r
      (click)="loadHierarchy()"\r
      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">\r
      Retry\r
    </button>\r
  </div>\r
\r
  <!-- Hierarchy Content -->\r
  <div *ngIf="!loading && !error" class="space-y-4">\r
    <!-- Root Level Drop Zone -->\r
    <div \r
      class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-all"\r
      [class.border-blue-500]="dropZoneActive"\r
      [class.bg-blue-50]="dropZoneActive"\r
      (dragover)="onDragOver($event)"\r
      (drop)="onDropToRoot($event)">\r
      <div class="flex items-center justify-center space-x-2 text-gray-500">\r
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
        </svg>\r
        <span class="font-medium">Root Level - Drop here to make location top-level</span>\r
      </div>\r
    </div>\r
\r
    <!-- Hierarchy Nodes -->\r
    <div class="space-y-4">\r
      <div *ngFor="let node of hierarchyData" class="hierarchy-card">\r
        <!-- Root Level Node -->\r
        <div \r
          class="bg-white border border-gray-200 rounded-lg p-4 transition-all hover:shadow-sm"\r
          [class.ring-2]="node.selected"\r
          [class.ring-blue-500]="node.selected"\r
          [class.bg-blue-50]="node.selected"\r
          (click)="toggleNodeSelection(node, $event)"\r
          (dragover)="onDragOver($event)"\r
          (drop)="onDropOnNode($event, node)">\r
          \r
          <div class="flex items-center justify-between">\r
            <div class="flex items-center space-x-3">\r
              <!-- Drag Handle -->\r
              <div \r
                class="drag-handle cursor-move p-1 hover:bg-gray-100 rounded"\r
                draggable="true"\r
                (dragstart)="onDragStart($event, node)"\r
                (dragend)="onDragEnd($event)">\r
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>\r
                </svg>\r
              </div>\r
\r
              <!-- Node Icon -->\r
              <div [class]="'w-10 h-10 bg-' + getNodeIconColor(node) + '-100 rounded-lg flex items-center justify-center'">\r
                <svg [class]="'w-5 h-5 text-' + getNodeIconColor(node) + '-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getNodeIcon(node)"></path>\r
                </svg>\r
              </div>\r
\r
              <!-- Node Info -->\r
              <div class="flex-1">\r
                <div class="flex items-center space-x-3">\r
                  <span class="font-semibold text-gray-900">{{node.name}}</span>\r
                  <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">\r
                    {{node.type?.name || 'Community'}}\r
                  </span>\r
                </div>\r
                <div class="text-sm text-gray-500 mt-1">\r
                  {{node.asset_count}} assets\r
                  <span *ngIf="node.children.length > 0" class="ml-4">\r
                    {{node.children.length}} sub-location{{node.children.length !== 1 ? 's' : ''}}\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Level Badge -->\r
            <div class="flex items-center space-x-2">\r
              <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">\r
                {{getLevelText(node)}}\r
              </span>\r
            </div>\r
          </div>\r
\r
          <!-- Child Nodes -->\r
          <div *ngIf="node.children.length > 0" class="mt-4 ml-7 space-y-3">\r
            <div *ngFor="let child of node.children" \r
                 class="bg-gray-50 rounded-lg p-3 transition-all hover:bg-gray-100"\r
                 [class.ring-2]="child.selected"\r
                 [class.ring-blue-500]="child.selected"\r
                 [class.bg-blue-50]="child.selected"\r
                 (click)="toggleNodeSelection(child, $event)"\r
                 (dragover)="onDragOver($event)"\r
                 (drop)="onDropOnNode($event, child)">\r
              \r
              <div class="flex items-center justify-between">\r
                <div class="flex items-center space-x-3">\r
                  <!-- Drag Handle -->\r
                  <div \r
                    class="drag-handle cursor-move p-1 hover:bg-gray-200 rounded"\r
                    draggable="true"\r
                    (dragstart)="onDragStart($event, child)"\r
                    (dragend)="onDragEnd($event)">\r
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>\r
                    </svg>\r
                  </div>\r
\r
                  <!-- Child Icon -->\r
                  <div [class]="'w-8 h-8 bg-' + getNodeIconColor(child) + '-100 rounded flex items-center justify-center'">\r
                    <svg [class]="'w-4 h-4 text-' + getNodeIconColor(child) + '-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getNodeIcon(child)"></path>\r
                    </svg>\r
                  </div>\r
\r
                  <!-- Child Info -->\r
                  <div class="flex-1">\r
                    <div class="flex items-center space-x-3">\r
                      <span class="font-medium text-gray-900">{{child.name}}</span>\r
                      <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700">\r
                        {{child.type?.name || 'Residential Building'}}\r
                      </span>\r
                    </div>\r
                    <div class="text-sm text-gray-500 mt-1">\r
                      {{child.asset_count}} assets\r
                      <span *ngIf="child.children.length > 0" class="ml-4">\r
                        {{child.children.length}} sub-location{{child.children.length !== 1 ? 's' : ''}}\r
                      </span>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- Level Badge -->\r
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">\r
                  {{getLevelText(child)}}\r
                </span>\r
              </div>\r
\r
              <!-- Grandchild Nodes -->\r
              <div *ngIf="child.children.length > 0" class="mt-3 ml-7 space-y-2">\r
                <div *ngFor="let grandchild of child.children" \r
                     class="bg-white rounded border border-gray-100 p-3 transition-all hover:shadow-sm"\r
                     [class.ring-2]="grandchild.selected"\r
                     [class.ring-blue-500]="grandchild.selected"\r
                     [class.bg-blue-50]="grandchild.selected"\r
                     (click)="toggleNodeSelection(grandchild, $event)"\r
                     (dragover)="onDragOver($event)"\r
                     (drop)="onDropOnNode($event, grandchild)">\r
                  \r
                  <div class="flex items-center justify-between">\r
                    <div class="flex items-center space-x-3">\r
                      <!-- Drag Handle -->\r
                      <div \r
                        class="drag-handle cursor-move p-1 hover:bg-gray-100 rounded"\r
                        draggable="true"\r
                        (dragstart)="onDragStart($event, grandchild)"\r
                        (dragend)="onDragEnd($event)">\r
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>\r
                        </svg>\r
                      </div>\r
\r
                      <!-- Grandchild Icon -->\r
                      <div [class]="'w-6 h-6 bg-' + getNodeIconColor(grandchild) + '-100 rounded flex items-center justify-center'">\r
                        <svg [class]="'w-3 h-3 text-' + getNodeIconColor(grandchild) + '-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getNodeIcon(grandchild)"></path>\r
                        </svg>\r
                      </div>\r
\r
                      <!-- Grandchild Info -->\r
                      <div class="flex-1">\r
                        <div class="flex items-center space-x-3">\r
                          <span class="font-medium text-gray-900">{{grandchild.name}}</span>\r
                          <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700">\r
                            {{grandchild.type?.name || 'Floor'}}\r
                          </span>\r
                        </div>\r
                        <div class="text-sm text-gray-500 mt-1">{{grandchild.asset_count}} assets</div>\r
                      </div>\r
                    </div>\r
\r
                    <!-- Level Badge -->\r
                    <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">\r
                      {{getLevelText(grandchild)}}\r
                    </span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div *ngIf="hierarchyData.length === 0" class="text-center py-12">\r
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">\r
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">No hierarchy data</h3>\r
      <p class="text-sm text-gray-500">Create some locations to manage the hierarchy.</p>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/locations/components/hierarchy-management/hierarchy-management.component.scss */\n.hierarchy-management .hierarchy-card {\n  transition: all 0.2s ease-in-out;\n}\n.hierarchy-management .hierarchy-card:hover {\n  transform: translateY(-1px);\n}\n.hierarchy-management .drag-handle {\n  opacity: 0.6;\n  transition: all 0.2s ease-in-out;\n}\n.hierarchy-management .drag-handle:hover {\n  opacity: 1;\n  background-color: #f3f4f6;\n}\n.hierarchy-management .dragging {\n  opacity: 0.5;\n  transform: rotate(2deg);\n}\n.hierarchy-management .drop-zone-active {\n  border-color: #3b82f6 !important;\n  background-color: #eff6ff !important;\n}\n.hierarchy-management .drop-zone-active::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border: 2px dashed #3b82f6;\n  border-radius: 0.5rem;\n  pointer-events: none;\n}\n.hierarchy-management .drop-target {\n  background-color: #eff6ff;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);\n}\n.hierarchy-management .selected {\n  background-color: #eff6ff !important;\n  border-color: #3b82f6 !important;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);\n}\n.hierarchy-management .level-0 {\n  border-left: 4px solid #3b82f6;\n}\n.hierarchy-management .level-1 {\n  border-left: 4px solid #10b981;\n  margin-left: 1rem;\n}\n.hierarchy-management .level-2 {\n  border-left: 4px solid #f59e0b;\n  margin-left: 2rem;\n}\n.hierarchy-management .node-card {\n  transition: all 0.15s ease-in-out;\n}\n.hierarchy-management .node-card:hover {\n  background-color: #f8fafc;\n  border-color: #e2e8f0;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.hierarchy-management .level-badge {\n  font-weight: 600;\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 9999px;\n}\n.hierarchy-management .node-icon {\n  transition: all 0.2s ease-in-out;\n}\n.hierarchy-management .node-icon:hover {\n  transform: scale(1.1);\n}\n.hierarchy-management .multi-select-info {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  background: #1f2937;\n  color: white;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  z-index: 50;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n.hierarchy-management .loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .hierarchy-management .hierarchy-card {\n    margin: 0.5rem;\n  }\n  .hierarchy-management .drag-handle {\n    display: none;\n  }\n  .hierarchy-management .level-1 {\n    margin-left: 0.5rem;\n  }\n  .hierarchy-management .level-2 {\n    margin-left: 1rem;\n  }\n}\n@media print {\n  .hierarchy-management .drag-handle,\n  .hierarchy-management .multi-select-info {\n    display: none;\n  }\n}\n.hierarchy-management {\n  scrollbar-width: thin;\n  scrollbar-color: #cbd5e1 #f1f5f9;\n}\n.hierarchy-management::-webkit-scrollbar {\n  width: 6px;\n}\n.hierarchy-management::-webkit-scrollbar-track {\n  background: #f1f5f9;\n  border-radius: 3px;\n}\n.hierarchy-management::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.hierarchy-management::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  background: white;\n  border: 1px solid #e5e7eb;\n}\n.cdk-drag-placeholder {\n  opacity: 0.4;\n  background: #f3f4f6;\n  border: 2px dashed #d1d5db;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drop-list-dragging .cdk-drag {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=hierarchy-management.component.css.map */\n'] }]
  }], () => [{ type: LocationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HierarchyManagementComponent, { className: "HierarchyManagementComponent", filePath: "src/app/locations/components/hierarchy-management/hierarchy-management.component.ts", lineNumber: 26 });
})();

// src/app/locations/locations.component.ts
function LocationsComponent_div_33_div_15_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    \u0275\u0275property("value", type_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r4.name);
  }
}
function LocationsComponent_div_33_div_15_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    \u0275\u0275property("value", level_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(level_r5.label);
  }
}
function LocationsComponent_div_33_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "form", 36);
    \u0275\u0275listener("ngSubmit", function LocationsComponent_div_33_div_15_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "div")(4, "label", 38);
    \u0275\u0275text(5, "Location Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 39)(7, "option", 40);
    \u0275\u0275text(8, "All Types");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, LocationsComponent_div_33_div_15_option_9_Template, 2, 2, "option", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "label", 38);
    \u0275\u0275text(12, "Hierarchy Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 42);
    \u0275\u0275template(14, LocationsComponent_div_33_div_15_option_14_Template, 2, 2, "option", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 38);
    \u0275\u0275text(17, "Asset Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 43)(19, "option", 40);
    \u0275\u0275text(20, "Any Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 44);
    \u0275\u0275text(22, "No Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 45);
    \u0275\u0275text(24, "1-10 Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 46);
    \u0275\u0275text(26, "11-50 Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 47);
    \u0275\u0275text(28, "51+ Assets");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 48)(30, "button", 49);
    \u0275\u0275listener("click", function LocationsComponent_div_33_div_15_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(31, " Clear Filters ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 50);
    \u0275\u0275text(33, " Apply Filters ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.filtersForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.locationTypes);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.hierarchyLevels);
  }
}
function LocationsComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 2)(2, "form", 25)(3, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 27);
    \u0275\u0275element(5, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(6, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26)(8, "button", 30);
    \u0275\u0275listener("click", function LocationsComponent_div_33_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 7);
    \u0275\u0275element(10, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 32);
    \u0275\u0275element(14, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, LocationsComponent_div_33_div_15_Template, 34, 3, "div", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.searchForm);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("rotate-180", ctx_r1.showFilters);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showFilters);
  }
}
function LocationsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "button", 55);
    \u0275\u0275listener("click", function LocationsComponent_div_35_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentListView = "grid");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 7);
    \u0275\u0275element(6, "path", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function LocationsComponent_div_35_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentListView = "list");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 7);
    \u0275\u0275element(9, "path", 57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Showing ", ctx_r1.locations.length, " locations ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.currentListView === "grid" ? "bg-blue-600 text-white" : "bg-white text-gray-600 border border-gray-300");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.currentListView === "list" ? "bg-blue-600 text-white" : "bg-white text-gray-600 border border-gray-300");
  }
}
function LocationsComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "div", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 65);
    \u0275\u0275element(4, "circle", 66)(5, "path", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 68);
    \u0275\u0275text(7, "Loading Locations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 69);
    \u0275\u0275text(9, "Please wait while we fetch your locations...");
    \u0275\u0275elementEnd()()();
  }
}
function LocationsComponent_div_36_div_2_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getLocationTypeIcon(location_r8.type));
  }
}
function LocationsComponent_div_36_div_2_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("innerHTML", ctx_r1.getDefaultLocationIcon(), \u0275\u0275sanitizeHtml);
  }
}
function LocationsComponent_div_36_div_2_div_1_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", location_r8.children == null ? null : location_r8.children.length, ")");
  }
}
function LocationsComponent_div_36_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74)(3, "div", 75);
    \u0275\u0275template(4, LocationsComponent_div_36_div_2_div_1_span_4_Template, 2, 1, "span", 76)(5, LocationsComponent_div_36_div_2_div_1_span_5_Template, 1, 1, "span", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h3", 78);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 79)(10, "span", 80);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 53);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "div", 81)(15, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 83);
    \u0275\u0275element(17, "path", 84)(18, "path", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 53);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 7);
    \u0275\u0275element(25, "path", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "span", 88);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 89)(29, "button", 90);
    \u0275\u0275listener("click", function LocationsComponent_div_36_div_2_div_1_Template_button_click_29_listener() {
      const location_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewLocation(location_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 7);
    \u0275\u0275element(31, "path", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "View Details");
    \u0275\u0275template(34, LocationsComponent_div_36_div_2_div_1_span_34_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 54)(36, "button", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 7);
    \u0275\u0275element(38, "path", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "button", 94);
    \u0275\u0275listener("click", function LocationsComponent_div_36_div_2_div_1_Template_button_click_39_listener() {
      const location_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editLocation(location_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 7);
    \u0275\u0275element(41, "path", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "button", 96);
    \u0275\u0275listener("click", function LocationsComponent_div_36_div_2_div_1_Template_button_click_42_listener() {
      const location_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteLocation(location_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 7);
    \u0275\u0275element(44, "path", 97);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const location_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", location_r8.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !location_r8.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(location_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getHierarchyLevelBadge(location_r8.hierarchy_level), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((location_r8.type == null ? null : location_r8.type.name) || "Unknown Type");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(location_r8.address || location_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", location_r8.description || location_r8.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((location_r8.children == null ? null : location_r8.children.length) || 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", location_r8.children == null ? null : location_r8.children.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function LocationsComponent_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, LocationsComponent_div_36_div_2_div_1_Template, 45, 11, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.locations);
  }
}
function LocationsComponent_div_36_div_3_div_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(location_r10.description);
  }
}
function LocationsComponent_div_36_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "div", 103)(3, "div", 5)(4, "div", 110);
    \u0275\u0275element(5, "img", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 112);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, LocationsComponent_div_36_div_3_div_18_div_9_Template, 2, 1, "div", 113);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 104)(11, "span", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 104)(14, "span", 53);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 105)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 105)(20, "div", 114);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 115);
    \u0275\u0275element(22, "path", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span", 53);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 105)(26, "div", 114);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 115);
    \u0275\u0275element(28, "path", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "span", 53);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 104)(32, "div", 54)(33, "button", 117);
    \u0275\u0275listener("click", function LocationsComponent_div_36_div_3_div_18_Template_button_click_33_listener() {
      const location_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewLocation(location_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 7);
    \u0275\u0275element(35, "path", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "button", 118);
    \u0275\u0275listener("click", function LocationsComponent_div_36_div_3_div_18_Template_button_click_36_listener() {
      const location_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editLocation(location_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 7);
    \u0275\u0275element(38, "path", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "button", 119);
    \u0275\u0275listener("click", function LocationsComponent_div_36_div_3_div_18_Template_button_click_39_listener() {
      const location_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteLocation(location_r10));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 7);
    \u0275\u0275element(41, "path", 97);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const location_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", location_r10.type.icon, \u0275\u0275sanitizeUrl)("alt", location_r10.type.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(location_r10.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", location_r10.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(location_r10.type.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (location_r10.parent == null ? null : location_r10.parent.name) || "Root Level", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-" + ctx_r1.getHierarchyLevelColor(location_r10.hierarchy_level) + "-100 text-" + ctx_r1.getHierarchyLevelColor(location_r10.hierarchy_level) + "-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getHierarchyLevelBadge(location_r10.hierarchy_level), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((location_r10.asset_summary == null ? null : location_r10.asset_summary.asset_count) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((location_r10.children == null ? null : location_r10.children.length) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function LocationsComponent_div_36_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "div", 102)(3, "div", 103);
    \u0275\u0275text(4, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 104);
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 104);
    \u0275\u0275text(8, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 105);
    \u0275\u0275text(10, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 105);
    \u0275\u0275text(12, "Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 105);
    \u0275\u0275text(14, "Children");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 104);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 106);
    \u0275\u0275template(18, LocationsComponent_div_36_div_3_div_18_Template, 42, 13, "div", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.locations);
  }
}
function LocationsComponent_div_36_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 121);
    \u0275\u0275element(2, "path", 84)(3, "path", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 122);
    \u0275\u0275text(5, "No locations found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 123);
    \u0275\u0275text(7, "Get started by creating your first location.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 124)(9, "button", 125);
    \u0275\u0275listener("click", function LocationsComponent_div_36_div_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addLocation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 126);
    \u0275\u0275element(11, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Add Location ");
    \u0275\u0275elementEnd()()();
  }
}
function LocationsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, LocationsComponent_div_36_div_1_Template, 10, 0, "div", 58)(2, LocationsComponent_div_36_div_2_Template, 2, 1, "div", 59)(3, LocationsComponent_div_36_div_3_Template, 19, 1, "div", 60)(4, LocationsComponent_div_36_div_4_Template, 13, 0, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.currentListView === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.currentListView === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.locations.length === 0);
  }
}
function LocationsComponent_div_37_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "div", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 65);
    \u0275\u0275element(4, "circle", 66)(5, "path", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 68);
    \u0275\u0275text(7, "Loading Hierarchy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 69);
    \u0275\u0275text(9, "Please wait while we fetch the location hierarchy...");
    \u0275\u0275elementEnd()()();
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 145);
    \u0275\u0275listener("click", function LocationsComponent_div_37_div_10_ng_container_1_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const node_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleNode(node_r14.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 146);
    \u0275\u0275element(2, "path", 91);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r1.isNodeExpanded(node_r14.id));
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275element(1, "div", 148);
    \u0275\u0275elementEnd();
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", node_r14.children.length, " sub-location", node_r14.children.length !== 1 ? "s" : "", " ");
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 145);
    \u0275\u0275listener("click", function LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const child_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleNode(child_r16.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 146);
    \u0275\u0275element(2, "path", 91);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-90", ctx_r1.isNodeExpanded(child_r16.id));
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275element(1, "div", 148);
    \u0275\u0275elementEnd();
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", child_r16.children.length, " sub-location", child_r16.children.length !== 1 ? "s" : "", " ");
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 147);
    \u0275\u0275element(2, "div", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 161);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 162);
    \u0275\u0275element(5, "path", 163);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 139)(7, "div", 5)(8, "span", 155);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 164);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 142);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const grandchild_r17 = ctx.$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(grandchild_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (grandchild_r17.type == null ? null : grandchild_r17.type.name) || "Floor", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", grandchild_r17.asset_count || 0, " assets");
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275template(1, LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_div_17_div_1_Template, 14, 3, "div", 159);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", child_r16.children);
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 151)(2, "div", 5);
    \u0275\u0275template(3, LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_button_3_Template, 3, 2, "button", 133)(4, LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_div_4_Template, 2, 0, "div", 134);
    \u0275\u0275elementStart(5, "div", 152);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 153);
    \u0275\u0275element(7, "path", 154);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 139)(9, "div", 5)(10, "span", 155);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 156);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 142);
    \u0275\u0275text(15);
    \u0275\u0275template(16, LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_span_16_Template, 2, 2, "span", 143);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(17, LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_div_17_Template, 2, 1, "div", 157);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const child_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", child_r16.children && child_r16.children.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !child_r16.children || child_r16.children.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(child_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (child_r16.type == null ? null : child_r16.type.name) || "Residential Building", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", child_r16.asset_count || 0, " assets ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r16.children && child_r16.children.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isNodeExpanded(child_r16.id) && child_r16.children && child_r16.children.length > 0);
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275template(1, LocationsComponent_div_37_div_10_ng_container_1_div_19_ng_container_1_Template, 18, 7, "ng-container", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", node_r14.children);
  }
}
function LocationsComponent_div_37_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 132)(2, "div", 89)(3, "div", 5);
    \u0275\u0275template(4, LocationsComponent_div_37_div_10_ng_container_1_button_4_Template, 3, 2, "button", 133)(5, LocationsComponent_div_37_div_10_ng_container_1_div_5_Template, 2, 0, "div", 134);
    \u0275\u0275elementStart(6, "div", 135);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 136);
    \u0275\u0275element(8, "path", 137)(9, "path", 138);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 139)(11, "div", 5)(12, "span", 140);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 141);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 142);
    \u0275\u0275text(17);
    \u0275\u0275template(18, LocationsComponent_div_37_div_10_ng_container_1_span_18_Template, 2, 2, "span", 143);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(19, LocationsComponent_div_37_div_10_ng_container_1_div_19_Template, 2, 1, "div", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const node_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", node_r14.children && node_r14.children.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !node_r14.children || node_r14.children.length === 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(node_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (node_r14.type == null ? null : node_r14.type.name) || "Community", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", node_r14.asset_count || 0, " assets ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r14.children && node_r14.children.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isNodeExpanded(node_r14.id) && node_r14.children && node_r14.children.length > 0);
  }
}
function LocationsComponent_div_37_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 121);
    \u0275\u0275element(2, "path", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 122);
    \u0275\u0275text(4, "No hierarchy data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 123);
    \u0275\u0275text(6, "Create some locations to see the hierarchy tree.");
    \u0275\u0275elementEnd()();
  }
}
function LocationsComponent_div_37_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275template(1, LocationsComponent_div_37_div_10_ng_container_1_Template, 20, 7, "ng-container", 131)(2, LocationsComponent_div_37_div_10_div_2_Template, 7, 0, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.hierarchyData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hierarchyData.length === 0);
  }
}
function LocationsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 52)(2, "h2", 127);
    \u0275\u0275text(3, "Location Hierarchy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "button", 128);
    \u0275\u0275listener("click", function LocationsComponent_div_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expandAll());
    });
    \u0275\u0275text(6, " Expand All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 128);
    \u0275\u0275listener("click", function LocationsComponent_div_37_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.collapseAll());
    });
    \u0275\u0275text(8, " Collapse All ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, LocationsComponent_div_37_div_9_Template, 10, 0, "div", 58)(10, LocationsComponent_div_37_div_10_Template, 3, 2, "div", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.hierarchyLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hierarchyLoading);
  }
}
function LocationsComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165);
    \u0275\u0275element(1, "app-hierarchy-management");
    \u0275\u0275elementEnd();
  }
}
function LocationsComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 52)(2, "h2", 127);
    \u0275\u0275text(3, "Location Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "button", 166);
    \u0275\u0275text(6, " Export Report ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 120)(8, "div", 167);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 168);
    \u0275\u0275element(10, "path", 169);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "h3", 68);
    \u0275\u0275text(12, "Analytics Coming Soon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 69);
    \u0275\u0275text(14, "Detailed analytics and insights about your locations will be available here.");
    \u0275\u0275elementEnd()()();
  }
}
function LocationsComponent_div_40_nav_18_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 188);
    \u0275\u0275listener("click", function LocationsComponent_div_40_nav_18_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275text(1, " 1 ");
    \u0275\u0275elementEnd();
  }
}
function LocationsComponent_div_40_nav_18_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 189);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 190);
    \u0275\u0275element(2, "circle", 191)(3, "circle", 192)(4, "circle", 193);
    \u0275\u0275elementEnd()();
  }
}
function LocationsComponent_div_40_nav_18_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 194);
    \u0275\u0275listener("click", function LocationsComponent_div_40_nav_18_button_7_Template_button_click_0_listener() {
      const page_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r22));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.pagination.current_page === page_r22 ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50");
    \u0275\u0275property("title", "Page " + page_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r22, " ");
  }
}
function LocationsComponent_div_40_nav_18_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 189);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 190);
    \u0275\u0275element(2, "circle", 191)(3, "circle", 192)(4, "circle", 193);
    \u0275\u0275elementEnd()();
  }
}
function LocationsComponent_div_40_nav_18_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 188);
    \u0275\u0275listener("click", function LocationsComponent_div_40_nav_18_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pagination.last_page));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pagination.last_page, " ");
  }
}
function LocationsComponent_div_40_nav_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 181)(1, "button", 182);
    \u0275\u0275listener("click", function LocationsComponent_div_40_nav_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pagination.current_page - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 7);
    \u0275\u0275element(3, "path", 183);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 114);
    \u0275\u0275template(5, LocationsComponent_div_40_nav_18_button_5_Template, 2, 0, "button", 184)(6, LocationsComponent_div_40_nav_18_span_6_Template, 5, 0, "span", 185)(7, LocationsComponent_div_40_nav_18_button_7_Template, 2, 4, "button", 186)(8, LocationsComponent_div_40_nav_18_span_8_Template, 5, 0, "span", 185)(9, LocationsComponent_div_40_nav_18_button_9_Template, 2, 1, "button", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 187);
    \u0275\u0275listener("click", function LocationsComponent_div_40_nav_18_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pagination.current_page + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 7);
    \u0275\u0275element(12, "path", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pagination.current_page === 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.getVisiblePages()[0] > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getVisiblePages()[0] > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getVisiblePages());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getVisiblePages()[ctx_r1.getVisiblePages().length - 1] < ctx_r1.pagination.last_page - 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getVisiblePages()[ctx_r1.getVisiblePages().length - 1] < ctx_r1.pagination.last_page);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pagination.current_page === ctx_r1.pagination.last_page);
  }
}
function LocationsComponent_div_40_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 195)(1, "div", 171)(2, "span");
    \u0275\u0275text(3, "Go to page:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 196);
    \u0275\u0275twoWayListener("ngModelChange", function LocationsComponent_div_40_div_21_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.jumpToPage, $event) || (ctx_r1.jumpToPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function LocationsComponent_div_40_div_21_Template_input_keyup_enter_4_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.jumpToPage));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 197);
    \u0275\u0275listener("click", function LocationsComponent_div_40_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.jumpToPage));
    });
    \u0275\u0275text(6, " Go ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", ctx_r1.pagination.current_page);
    \u0275\u0275property("min", 1)("max", ctx_r1.pagination.last_page);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jumpToPage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.jumpToPage || ctx_r1.jumpToPage < 1 || ctx_r1.jumpToPage > ctx_r1.pagination.last_page);
  }
}
function LocationsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 170)(1, "div", 89)(2, "div", 171)(3, "span");
    \u0275\u0275text(4, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 172);
    \u0275\u0275twoWayListener("ngModelChange", function LocationsComponent_div_40_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pagination.per_page, $event) || (ctx_r1.pagination.per_page = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function LocationsComponent_div_40_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePerPage($event));
    });
    \u0275\u0275elementStart(6, "option", 173);
    \u0275\u0275text(7, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 174);
    \u0275\u0275text(9, "15");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 175);
    \u0275\u0275text(11, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 176);
    \u0275\u0275text(13, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 177);
    \u0275\u0275text(15, "100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "entries");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, LocationsComponent_div_40_nav_18_Template, 13, 7, "nav", 178);
    \u0275\u0275elementStart(19, "div", 179);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, LocationsComponent_div_40_div_21_Template, 7, 5, "div", 180);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pagination.per_page);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.pagination.last_page > 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.pagination.from, " - ", ctx_r1.pagination.to, " of ", ctx_r1.pagination.total, " entries ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagination.last_page > 10);
  }
}
var LocationsComponent = class _LocationsComponent {
  fb;
  locationService;
  router;
  destroy$ = new Subject();
  // Data
  locations = [];
  locationTypes = [];
  hierarchyData = [];
  // UI State
  loading = false;
  hierarchyLoading = false;
  showFilters = false;
  currentView = "grid";
  currentListView = "grid";
  expandedNodes = /* @__PURE__ */ new Set();
  // Modal state
  showAddLocationModal = false;
  showEditLocationModal = false;
  showDeleteConfirmationModal = false;
  showBulkCreateModal = false;
  selectedLocation = null;
  // Pagination
  pagination = {
    current_page: 1,
    last_page: 1,
    per_page: 15,
    total: 0,
    from: 0,
    to: 0
  };
  // Forms
  searchForm;
  filtersForm;
  jumpToPage;
  // Filters
  sortOptions = [
    { value: "created", label: "Created" },
    { value: "name", label: "Name" },
    { value: "type", label: "Type" },
    { value: "updated", label: "Updated" }
  ];
  hierarchyLevels = [
    { value: "", label: "All Levels" },
    { value: "0", label: "Level 0 (Root)" },
    { value: "1", label: "Level 1" },
    { value: "2", label: "Level 2" },
    { value: "3", label: "Level 3" },
    { value: "true", label: "Hierarchy Level" }
  ];
  assetCountOptions = [
    { value: "", label: "Any Count" },
    { value: "0", label: "No Assets" },
    { value: "1-10", label: "1-10 Assets" },
    { value: "11-50", label: "11-50 Assets" },
    { value: "50+", label: "50+ Assets" }
  ];
  constructor(fb, locationService, router) {
    this.fb = fb;
    this.locationService = locationService;
    this.router = router;
    this.searchForm = this.fb.group({
      search: [""]
    });
    this.filtersForm = this.fb.group({
      type_id: [""],
      parent_id: [""],
      hierarchy_level: ["0"],
      asset_count: [""],
      sort_by: ["created"],
      sort_direction: ["desc"]
    });
  }
  ngOnInit() {
    this.initializeSearchSubscription();
    this.loadLocationTypes();
    this.loadLocations();
    this.loadHierarchy();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initializeSearchSubscription() {
    this.searchForm.get("search")?.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.loadLocations();
    });
  }
  loadLocationTypes() {
    this.locationService.getLocationTypes().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.locationTypes = response.data.types;
        }
      },
      error: (error) => {
        console.error("Error loading location types:", error);
      }
    });
  }
  loadLocations(page = 1) {
    this.loading = true;
    const searchValue = this.searchForm.get("search")?.value;
    const filters = this.filtersForm.value;
    const params = {
      page,
      per_page: this.pagination.per_page,
      hierarchy_level: filters.hierarchy_level || "0",
      sort_by: filters.sort_by || "created",
      sort_direction: filters.sort_direction || "desc"
    };
    if (searchValue && searchValue.trim() !== "") {
      params.search = searchValue;
    }
    if (filters.type_id && filters.type_id !== "") {
      params.type_id = filters.type_id;
    }
    if (filters.parent_id && filters.parent_id !== "") {
      params.parent_id = filters.parent_id;
    }
    if (filters.asset_count && filters.asset_count !== "") {
      params.asset_count = filters.asset_count;
    }
    this.locationService.getLocations(params).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.locations = response.data.locations;
          this.pagination = response.data.pagination;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading locations:", error);
        this.loading = false;
      }
    });
  }
  loadHierarchy() {
    this.hierarchyLoading = true;
    this.locationService.getHierarchy().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.hierarchyData = response.data.hierarchy;
        }
        this.hierarchyLoading = false;
      },
      error: (error) => {
        console.error("Error loading hierarchy:", error);
        this.hierarchyLoading = false;
      }
    });
  }
  // View Controls
  setView(view) {
    this.currentView = view;
    if (view === "grid") {
      this.clearFilters();
    } else if (view === "tree" && this.hierarchyData.length === 0) {
      this.loadHierarchy();
    }
  }
  setListView(view) {
    this.currentListView = view;
  }
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
  // Filter Actions
  applyFilters() {
    this.loadLocations(1);
    this.showFilters = false;
  }
  clearFilters() {
    this.filtersForm.reset({
      type_id: "",
      parent_id: "",
      hierarchy_level: "0",
      asset_count: "",
      sort_by: "created",
      sort_direction: "desc"
    });
    this.loadLocations(1);
  }
  // Pagination
  goToPage(page) {
    if (page >= 1 && page <= this.pagination.last_page) {
      this.loadLocations(page);
    }
  }
  getVisiblePages() {
    const current = this.pagination.current_page;
    const total = this.pagination.last_page;
    const pages = [];
    const start = Math.max(1, current - 2);
    const end = Math.min(total, current + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  changePerPage(event) {
    this.pagination.per_page = parseInt(event.target.value);
    this.loadLocations(1);
  }
  // Utility Methods
  getLocationTypeIcon(type) {
    const iconMap = {
      "Residential Building": "\u{1F3E0}",
      "Office Building": "\u{1F3E2}",
      "Factory": "\u{1F3ED}",
      "Warehouse": "\u{1F3EA}",
      "Garden": "\u{1F333}",
      "Apartment": "\u{1F3E0}",
      "Room": "\u{1F6AA}",
      "Floor": "\u{1F4CB}"
    };
    return iconMap[type.name] || "\u{1F4CD}";
  }
  getDefaultLocationIcon() {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>`;
  }
  getHierarchyLevelBadge(level) {
    return `L${level}`;
  }
  getHierarchyLevelColor(level) {
    const colors = ["blue", "green", "yellow", "purple"];
    return colors[level] || "gray";
  }
  // Actions
  editLocation(location) {
    this.selectedLocation = location;
    this.showEditLocationModal = true;
  }
  deleteLocation(location) {
    this.selectedLocation = location;
    this.showDeleteConfirmationModal = true;
  }
  viewLocation(location) {
    this.router.navigate(["/locations", location.id]);
  }
  addLocation() {
    this.showAddLocationModal = true;
  }
  closeAddLocationModal() {
    this.showAddLocationModal = false;
  }
  closeEditLocationModal() {
    this.showEditLocationModal = false;
    this.selectedLocation = null;
  }
  closeDeleteConfirmationModal() {
    this.showDeleteConfirmationModal = false;
    this.selectedLocation = null;
  }
  openBulkCreateModal() {
    this.showBulkCreateModal = true;
  }
  closeBulkCreateModal() {
    this.showBulkCreateModal = false;
  }
  onLocationCreated(location) {
    this.loadLocations(this.pagination.current_page);
    this.showAddLocationModal = false;
  }
  onLocationUpdated(updatedLocation) {
    const index = this.locations.findIndex((l) => l.id === updatedLocation.id);
    if (index !== -1) {
      this.locations[index] = updatedLocation;
    }
    this.showEditLocationModal = false;
    this.selectedLocation = null;
  }
  onLocationDeleted(deletedLocation) {
    this.locations = this.locations.filter((l) => l.id !== deletedLocation.id);
    this.pagination.total = Math.max(0, this.pagination.total - 1);
    this.pagination.to = Math.max(0, this.pagination.to - 1);
    if (this.locations.length === 0 && this.pagination.current_page > 1) {
      this.loadLocations(this.pagination.current_page - 1);
    }
    this.showDeleteConfirmationModal = false;
    this.selectedLocation = null;
  }
  onLocationsCreated(locations) {
    this.loadLocations(this.pagination.current_page);
    this.loadHierarchy();
    this.showBulkCreateModal = false;
  }
  // Tree View Methods
  toggleNode(nodeId) {
    if (this.expandedNodes.has(nodeId)) {
      this.expandedNodes.delete(nodeId);
    } else {
      this.expandedNodes.add(nodeId);
    }
  }
  isNodeExpanded(nodeId) {
    return this.expandedNodes.has(nodeId);
  }
  expandAll() {
    this.hierarchyData.forEach((node) => {
      this.addAllNodeIds(node, this.expandedNodes);
    });
  }
  collapseAll() {
    this.expandedNodes.clear();
  }
  addAllNodeIds(node, nodeSet) {
    nodeSet.add(node.id);
    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => {
        this.addAllNodeIds(child, nodeSet);
      });
    }
  }
  getLocationTypeColor(typeName) {
    const colorMap = {
      "Community": "gray",
      "Residential Building": "blue",
      "Floor": "green",
      "Garden": "orange",
      "Office Building": "blue"
    };
    return colorMap[typeName] || "gray";
  }
  exportQR() {
    console.log("Export QR");
  }
  onDocumentClick(event) {
    const target = event.target;
    const filterButton = target.closest(".filter-button");
    const filterDropdown = target.closest(".filter-dropdown");
    const selectElement = target.closest("select");
    const optionElement = target.tagName === "OPTION";
    if (!filterButton && !filterDropdown && !selectElement && !optionElement && this.showFilters) {
      this.showFilters = false;
    }
  }
  static \u0275fac = function LocationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocationsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LocationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocationsComponent, selectors: [["app-locations"]], hostBindings: function LocationsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function LocationsComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 45, vars: 21, consts: [[1, "bg-gray-50"], [1, "bg-white", "border-b", "border-gray-200", "px-6", "py-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "text-gray-600", "mt-1"], [1, "flex", "items-center", "space-x-3"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-100", "rounded-lg", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-100", "rounded-lg", "transition-colors", "cursor-pointer", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "flex", "items-center", "space-x-2", "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "font-medium", "hover:bg-blue-700", "transition-colors", 3, "click"], [1, "flex", "items-center", "space-x-1", "bg-gray-100", "rounded-lg", "p-1"], [1, "flex-1", "px-4", "py-2", "rounded-md", "text-sm", "font-medium", "transition-all", 3, "click"], ["class", "bg-white border-b border-gray-200 px-6 py-4", 4, "ngIf"], [1, "px-6", "py-6"], ["class", "flex items-center justify-between mb-6", 4, "ngIf"], [4, "ngIf"], ["class", "bg-white rounded-lg shadow-sm border border-gray-200 p-6", 4, "ngIf"], ["class", "mt-8 pt-6 border-t border-gray-200", 4, "ngIf"], [3, "closeModal", "locationCreated", "isOpen"], [3, "closeModal", "locationUpdated", "isOpen", "location"], [3, "closeModal", "locationDeleted", "isOpen", "location"], [3, "closeModal", "locationsCreated", "isOpen"], [1, "bg-white", "border-b", "border-gray-200", "px-6", "py-4"], [1, "flex-1", "max-w-md", 3, "formGroup"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "formControlName", "search", "placeholder", "Search locations...", 1, "w-full", "pl-10", "pr-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent"], [1, "filter-button", "relative", "flex", "items-center", "space-x-2", "px-3", "py-2", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-100", "rounded-lg", "transition-colors", "cursor-pointer", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "filter-dropdown absolute text-start top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-4 z-50", 4, "ngIf"], [1, "filter-dropdown", "absolute", "text-start", "top-full", "right-0", "mt-2", "w-80", "bg-white", "rounded-xl", "shadow-lg", "border", "border-gray-200", "py-4", "z-50"], [1, "p-4", 3, "ngSubmit", "formGroup"], [1, "space-y-4"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["formControlName", "type_id", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "hierarchy_level", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent"], ["formControlName", "asset_count", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent"], ["value", "0"], ["value", "1-10"], ["value", "11-50"], ["value", "51+"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-gray-100", "mt-4"], ["type", "button", 1, "px-4", "py-2", "text-gray-600", "hover:text-gray-800", "font-medium", "transition-colors", "cursor-pointer", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "bg-blue-600", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "transition-all", "cursor-pointer"], [3, "value"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-sm", "text-gray-600"], [1, "flex", "items-center", "space-x-2"], [1, "px-3", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 10h16M4 14h16M4 18h16"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6", 4, "ngIf"], ["class", "bg-white rounded-lg shadow-sm border border-gray-200", 4, "ngIf"], ["class", "text-center py-12", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-blue-100", "rounded-full", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-8", "h-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6", "mb-6"], ["class", "relative bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group", 4, "ngFor", "ngForOf"], [1, "relative", "bg-white", "rounded-xl", "p-6", "shadow-sm", "border", "border-gray-200", "hover:shadow-lg", "hover:border-blue-300", "hover:-translate-y-1", "transition-all", "duration-300", "cursor-pointer", "group"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex", "items-start", "space-x-3"], [1, "w-12", "h-12", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center", "group-hover:bg-blue-200", "transition-colors", "duration-300"], ["class", "text-2xl", 4, "ngIf"], ["class", "text-gray-600", 3, "innerHTML", 4, "ngIf"], [1, "text-lg", "font-bold", "text-gray-900", "group-hover:text-blue-700", "transition-colors", "duration-300"], [1, "flex", "items-center", "space-x-2", "mt-1"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded-full", "text-xs", "font-medium", "bg-blue-100", "text-blue-800"], [1, "space-y-2", "mb-6"], [1, "flex", "items-center", "text-sm", "text-gray-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "absolute", "top-4", "right-4", "flex", "items-center", "space-x-1", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "text-sm", "font-medium"], [1, "flex", "items-center", "justify-between"], [1, "bg-blue-600", "text-white", "px-6", "py-2", "rounded-lg", "text-sm", "font-medium", "hover:bg-blue-700", "transition-all", "duration-300", "flex", "items-center", "space-x-2", "hover:shadow-lg", "transform", "hover:scale-105", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "p-2", "text-gray-400", "hover:text-blue-600", "hover:bg-blue-50", "rounded-lg", "transition-all", "duration-300", "transform", "hover:scale-110", "hover:shadow-md"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"], [1, "p-2", "text-gray-400", "hover:text-blue-600", "hover:bg-blue-50", "rounded-lg", "transition-all", "duration-300", "transform", "hover:scale-110", "hover:shadow-md", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "p-2", "text-gray-400", "hover:text-red-600", "hover:bg-red-50", "rounded-lg", "transition-all", "duration-300", "transform", "hover:scale-110", "hover:shadow-md", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-2xl"], [1, "text-gray-600", 3, "innerHTML"], [1, "bg-white", "rounded-lg", "shadow-sm", "border", "border-gray-200"], [1, "px-6", "py-4", "border-b", "border-gray-200", "bg-gray-50"], [1, "grid", "grid-cols-12", "gap-4", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "col-span-3"], [1, "col-span-2"], [1, "col-span-1"], [1, "divide-y", "divide-gray-200"], ["class", "px-6 py-4 hover:bg-gray-50 hover:shadow-sm transition-all duration-200 cursor-pointer group", 4, "ngFor", "ngForOf"], [1, "px-6", "py-4", "hover:bg-gray-50", "hover:shadow-sm", "transition-all", "duration-200", "cursor-pointer", "group"], [1, "grid", "grid-cols-12", "gap-4", "items-center"], [1, "w-10", "h-10", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center", "group-hover:bg-blue-200", "transition-colors", "duration-200"], [1, "w-6", "h-6", 3, "src", "alt"], [1, "font-medium", "text-gray-900", "group-hover:text-blue-700", "transition-colors", "duration-200"], ["class", "text-sm text-gray-500", 4, "ngIf"], [1, "flex", "items-center", "space-x-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "p-1", "text-gray-400", "hover:text-blue-600", "hover:bg-blue-50", "rounded", "transition-all", "duration-200", "hover:scale-110", "cursor-pointer", 3, "click"], [1, "p-1", "text-gray-400", "hover:text-blue-600", "hover:bg-blue-50", "rounded", "transition-all", "duration-200", "hover:scale-110", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], [1, "p-1", "text-gray-400", "hover:text-red-600", "hover:bg-red-50", "rounded", "transition-all", "duration-200", "hover:scale-110", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], [1, "text-center", "py-12"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "mx-auto", "h-12", "w-12", "text-gray-400"], [1, "mt-2", "text-sm", "font-medium", "text-gray-900"], [1, "mt-1", "text-sm", "text-gray-500"], [1, "mt-6"], [1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-transparent", "shadow-sm", "text-sm", "font-medium", "rounded-md", "text-white", "bg-blue-600", "hover:bg-blue-700", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "-ml-1", "mr-2", "h-5", "w-5"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-600", "hover:text-gray-800", "hover:bg-gray-100", "rounded-lg", "transition-colors", "cursor-pointer", 3, "click"], ["class", "space-y-1", 4, "ngIf"], [1, "space-y-1"], [4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "border", "border-gray-200", "p-4"], ["class", "w-4 h-4 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer", 3, "click", 4, "ngIf"], ["class", "w-4 h-4 flex items-center justify-center", 4, "ngIf"], [1, "w-8", "h-8", "bg-blue-100", "rounded", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 21l4-4 4 4"], [1, "flex-1"], [1, "font-semibold", "text-gray-900"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded", "text-xs", "font-medium", "bg-gray-100", "text-gray-700"], [1, "text-sm", "text-gray-500", "mt-1"], ["class", "ml-4", 4, "ngIf"], ["class", "mt-4 ml-7 space-y-3", 4, "ngIf"], [1, "w-4", "h-4", "flex", "items-center", "justify-center", "text-gray-400", "hover:text-gray-600", "transition-colors", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "transition-transform"], [1, "w-4", "h-4", "flex", "items-center", "justify-center"], [1, "w-1", "h-1", "bg-gray-300", "rounded-full"], [1, "ml-4"], [1, "mt-4", "ml-7", "space-y-3"], [1, "flex", "items-center", "justify-between", "py-2", "px-3", "bg-gray-50", "rounded-lg"], [1, "w-6", "h-6", "bg-blue-100", "rounded", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "font-medium", "text-gray-900"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded", "text-xs", "font-medium", "bg-blue-100", "text-blue-700"], ["class", "ml-7 space-y-2", 4, "ngIf"], [1, "ml-7", "space-y-2"], ["class", "flex items-center space-x-3 py-2 px-3 bg-white rounded border border-gray-100", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-3", "py-2", "px-3", "bg-white", "rounded", "border", "border-gray-100"], [1, "w-6", "h-6", "bg-green-100", "rounded", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded", "text-xs", "font-medium", "bg-green-100", "text-green-700"], [1, "bg-white", "rounded-lg", "shadow-sm", "border", "border-gray-200", "p-6"], [1, "px-4", "py-2", "text-gray-600", "hover:text-gray-800", "hover:bg-gray-100", "rounded-lg", "transition-colors", "cursor-pointer"], [1, "w-16", "h-16", "bg-gray-100", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "mt-8", "pt-6", "border-t", "border-gray-200"], [1, "flex", "items-center", "space-x-2", "text-sm", "text-gray-600"], [1, "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-white", 3, "ngModelChange", "change", "ngModel"], ["value", "10"], ["value", "15"], ["value", "25"], ["value", "50"], ["value", "100"], ["class", "flex items-center space-x-1", "aria-label", "Pagination", 4, "ngIf"], [1, "text-sm", "text-gray-700"], ["class", "flex items-center justify-center mt-4", 4, "ngIf"], ["aria-label", "Pagination", 1, "flex", "items-center", "space-x-1"], ["title", "Previous page", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-sm", "font-medium", "text-gray-500", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], ["class", "flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors", 3, "click", 4, "ngIf"], ["class", "flex items-center justify-center w-10 h-10 text-gray-400", 4, "ngIf"], ["class", "flex items-center justify-center w-10 h-10 text-sm font-medium border rounded-lg transition-colors", 3, "class", "title", "click", 4, "ngFor", "ngForOf"], ["title", "Next page", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-sm", "font-medium", "text-gray-500", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-sm", "font-medium", "text-gray-500", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-gray-400"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["cx", "3", "cy", "10", "r", "1.5"], ["cx", "10", "cy", "10", "r", "1.5"], ["cx", "17", "cy", "10", "r", "1.5"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "text-sm", "font-medium", "border", "rounded-lg", "transition-colors", 3, "click", "title"], [1, "flex", "items-center", "justify-center", "mt-4"], ["type", "number", 1, "w-16", "px-2", "py-1", "border", "border-gray-300", "rounded", "text-center", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "ngModelChange", "keyup.enter", "min", "max", "ngModel", "placeholder"], [1, "px-3", "py-1", "bg-blue-600", "text-white", "rounded", "text-sm", "hover:bg-blue-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "click", "disabled"]], template: function LocationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Facilities & Locations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Organize and monitor your facilities with hierarchical location management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Export QR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275listener("click", function LocationsComponent_Template_button_click_14_listener() {
        return ctx.openBulkCreateModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 7);
      \u0275\u0275element(16, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "Bulk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 11);
      \u0275\u0275listener("click", function LocationsComponent_Template_button_click_19_listener() {
        return ctx.addLocation();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 7);
      \u0275\u0275element(21, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Add Location");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 12)(25, "button", 13);
      \u0275\u0275listener("click", function LocationsComponent_Template_button_click_25_listener() {
        return ctx.setView("grid");
      });
      \u0275\u0275text(26, " Grid ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 13);
      \u0275\u0275listener("click", function LocationsComponent_Template_button_click_27_listener() {
        return ctx.setView("tree");
      });
      \u0275\u0275text(28, " Tree ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 13);
      \u0275\u0275listener("click", function LocationsComponent_Template_button_click_29_listener() {
        return ctx.setView("analytics");
      });
      \u0275\u0275text(30, " Analytics ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 13);
      \u0275\u0275listener("click", function LocationsComponent_Template_button_click_31_listener() {
        return ctx.setView("mgmt");
      });
      \u0275\u0275text(32, " Mgmt ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(33, LocationsComponent_div_33_Template, 16, 4, "div", 14);
      \u0275\u0275elementStart(34, "div", 15);
      \u0275\u0275template(35, LocationsComponent_div_35_Template, 10, 5, "div", 16)(36, LocationsComponent_div_36_Template, 5, 4, "div", 17)(37, LocationsComponent_div_37_Template, 11, 2, "div", 17)(38, LocationsComponent_div_38_Template, 2, 0, "div", 18)(39, LocationsComponent_div_39_Template, 15, 0, "div", 17)(40, LocationsComponent_div_40_Template, 22, 6, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "app-add-location-modal", 20);
      \u0275\u0275listener("closeModal", function LocationsComponent_Template_app_add_location_modal_closeModal_41_listener() {
        return ctx.closeAddLocationModal();
      })("locationCreated", function LocationsComponent_Template_app_add_location_modal_locationCreated_41_listener($event) {
        return ctx.onLocationCreated($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "app-edit-location-modal", 21);
      \u0275\u0275listener("closeModal", function LocationsComponent_Template_app_edit_location_modal_closeModal_42_listener() {
        return ctx.closeEditLocationModal();
      })("locationUpdated", function LocationsComponent_Template_app_edit_location_modal_locationUpdated_42_listener($event) {
        return ctx.onLocationUpdated($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "app-delete-confirmation-modal", 22);
      \u0275\u0275listener("closeModal", function LocationsComponent_Template_app_delete_confirmation_modal_closeModal_43_listener() {
        return ctx.closeDeleteConfirmationModal();
      })("locationDeleted", function LocationsComponent_Template_app_delete_confirmation_modal_locationDeleted_43_listener($event) {
        return ctx.onLocationDeleted($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "app-bulk-create-modal", 23);
      \u0275\u0275listener("closeModal", function LocationsComponent_Template_app_bulk_create_modal_closeModal_44_listener() {
        return ctx.closeBulkCreateModal();
      })("locationsCreated", function LocationsComponent_Template_app_bulk_create_modal_locationsCreated_44_listener($event) {
        return ctx.onLocationsCreated($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275classMap(ctx.currentView === "grid" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-800");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.currentView === "tree" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-800");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.currentView === "analytics" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-800");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.currentView === "mgmt" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-800");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentView === "grid");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentView === "grid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentView === "grid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentView === "tree");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentView === "mgmt");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentView === "analytics");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentView === "grid" && !ctx.loading && ctx.locations.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showAddLocationModal);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showEditLocationModal)("location", ctx.selectedLocation);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showDeleteConfirmationModal)("location", ctx.selectedLocation);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showBulkCreateModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, RouterModule, AddLocationModalComponent, EditLocationModalComponent, DeleteConfirmationModalComponent, BulkCreateModalComponent, HierarchyManagementComponent], styles: ["\n\n.location-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.location-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.hierarchy-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 9999px;\n}\n.location-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  font-size: 1.25rem;\n}\n.filter-panel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border: 1px solid #e2e8f0;\n}\n.search-input[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);\n}\n.table-row[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease-in-out;\n}\n.table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n.action-button[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-in-out;\n}\n.action-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .location-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filter-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .table-header[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=locations.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationsComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, AddLocationModalComponent, EditLocationModalComponent, DeleteConfirmationModalComponent, BulkCreateModalComponent, HierarchyManagementComponent], selector: "app-locations", template: `<div class="bg-gray-50">\r
  <!-- Header -->\r
  <div class="bg-white border-b border-gray-200 px-6 py-6">\r
    <div class="flex items-center justify-between mb-4">\r
      <div>\r
        <h1 class="text-3xl font-bold text-gray-900">Facilities & Locations</h1>\r
        <p class="text-gray-600 mt-1">Organize and monitor your facilities with hierarchical location management</p>\r
      </div>\r
      <div class="flex items-center space-x-3">\r
        <button class="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>\r
          </svg>\r
          <span>Export QR</span>\r
        </button>\r
        <button (click)="openBulkCreateModal()" class="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          <span>Bulk</span>\r
        </button>\r
        <button (click)="addLocation()" class="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          <span>Add Location</span>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- View Tabs -->\r
    <div class="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">\r
      <button\r
        (click)="setView('grid')"\r
        [class]="currentView === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'"\r
        class="flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all">\r
        Grid\r
      </button>\r
      <button\r
        (click)="setView('tree')"\r
        [class]="currentView === 'tree' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'"\r
        class="flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all">\r
        Tree\r
      </button>\r
      <button\r
        (click)="setView('analytics')"\r
        [class]="currentView === 'analytics' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'"\r
        class="flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all">\r
        Analytics\r
      </button>\r
      <button\r
        (click)="setView('mgmt')"\r
        [class]="currentView === 'mgmt' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'"\r
        class="flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all">\r
        Mgmt\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Search and Filters -->\r
  <div *ngIf="currentView === 'grid'" class="bg-white border-b border-gray-200 px-6 py-4">\r
    <div class="flex items-center justify-between mb-4">\r
      <!-- Search -->\r
      <form [formGroup]="searchForm" class="flex-1 max-w-md">\r
        <div class="relative">\r
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
          <input\r
            type="text"\r
            formControlName="search"\r
            placeholder="Search locations..."\r
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
        </div>\r
      </form>\r
\r
      <!-- Filters Toggle -->\r
      <div class="relative">\r
        <button\r
          (click)="toggleFilters()"\r
          class="filter-button relative flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"></path>\r
          </svg>\r
          <span>Filters</span>\r
          <svg class="w-4 h-4 transition-transform" [class.rotate-180]="showFilters" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
          </svg>\r
        </button>\r
\r
        <!-- Filters Dropdown -->\r
        <div *ngIf="showFilters" class="filter-dropdown absolute text-start top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-4 z-50">\r
          <form [formGroup]="filtersForm" (ngSubmit)="applyFilters()" class="p-4">\r
            <div class="space-y-4">\r
              <!-- Location Type -->\r
              <div>\r
                <label class="block text-sm font-medium text-gray-700 mb-2">Location Type</label>\r
                <select formControlName="type_id" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
                  <option value="">All Types</option>\r
                  <option *ngFor="let type of locationTypes" [value]="type.id">{{type.name}}</option>\r
                </select>\r
              </div>\r
\r
              <!-- Hierarchy Level -->\r
              <div>\r
                <label class="block text-sm font-medium text-gray-700 mb-2">Hierarchy Level</label>\r
                <select formControlName="hierarchy_level" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
                  <option *ngFor="let level of hierarchyLevels" [value]="level.value">{{level.label}}</option>\r
                </select>\r
              </div>\r
\r
              <!-- Asset Count -->\r
              <div>\r
                <label class="block text-sm font-medium text-gray-700 mb-2">Asset Count</label>\r
                <select formControlName="asset_count" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
                  <option value="">Any Count</option>\r
                  <option value="0">No Assets</option>\r
                  <option value="1-10">1-10 Assets</option>\r
                  <option value="11-50">11-50 Assets</option>\r
                  <option value="51+">51+ Assets</option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            <!-- Action Buttons -->\r
            <div class="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">\r
              <button\r
                type="button"\r
                (click)="clearFilters()"\r
                class="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors cursor-pointer">\r
                Clear Filters\r
              </button>\r
\r
              <button\r
                type="submit"\r
                class="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all cursor-pointer">\r
                Apply Filters\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
\r
  <!-- Content Area -->\r
  <div class="px-6 py-6">\r
    <!-- View Toggle (Only for Grid View) -->\r
    <div *ngIf="currentView === 'grid'" class="flex items-center justify-between mb-6">\r
      <div class="text-sm text-gray-600">\r
        Showing {{locations.length}} locations\r
      </div>\r
      <div class="flex items-center space-x-2">\r
        <button\r
          (click)="currentListView = 'grid'"\r
          [class]="currentListView === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-300'"\r
          class="px-3 py-2 rounded-lg text-sm font-medium transition-colors">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>\r
          </svg>\r
        </button>\r
        <button\r
          (click)="currentListView = 'list'"\r
          [class]="currentListView === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-300'"\r
          class="px-3 py-2 rounded-lg text-sm font-medium transition-colors">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Grid View Content -->\r
    <div *ngIf="currentView === 'grid'">\r
    <!-- Loading State -->\r
    <div *ngIf="loading" class="flex items-center justify-center py-20">\r
      <div class="text-center">\r
        <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">\r
          <svg class="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
          </svg>\r
        </div>\r
        <h3 class="text-lg font-medium text-gray-900 mb-2">Loading Locations</h3>\r
        <p class="text-sm text-gray-500">Please wait while we fetch your locations...</p>\r
      </div>\r
    </div>\r
\r
      <div *ngIf="!loading && currentListView === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">\r
      <div *ngFor="let location of locations" class="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">\r
        <!-- Top Section -->\r
        <div class="flex items-start justify-between mb-4">\r
          <!-- Left: Icon and Title -->\r
          <div class="flex items-start space-x-3">\r
            <!--w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200-->\r
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">\r
              <span *ngIf="location.type" class="text-2xl">{{getLocationTypeIcon(location.type)}}</span>\r
              <span *ngIf="!location.type" class="text-gray-600" [innerHTML]="getDefaultLocationIcon()"></span>\r
            </div>\r
            <div>\r
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{{location.name}}</h3>\r
              <div class="flex items-center space-x-2 mt-1">\r
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">\r
                  {{getHierarchyLevelBadge(location.hierarchy_level)}}\r
                </span>\r
                <span class="text-sm text-gray-600">{{location.type?.name || 'Unknown Type'}}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Location Details -->\r
        <div class="space-y-2 mb-6">\r
          <div class="flex items-center text-sm text-gray-600">\r
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
            </svg>\r
            <span>{{location.address || location.name}}</span>\r
          </div>\r
          <div class="text-sm text-gray-600">\r
            {{location.description || location.name}}\r
          </div>\r
        </div>\r
\r
        <!-- Children Count (Top Right) -->\r
        <div class="absolute top-4 right-4 flex items-center space-x-1 text-blue-600">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
          </svg>\r
          <span class="text-sm font-medium">{{location.children?.length || 0}}</span>\r
        </div>\r
\r
        <!-- Actions Section -->\r
        <div class="flex items-center justify-between">\r
          <!-- View Details Button -->\r
          <button\r
            (click)="viewLocation(location)"\r
            class="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 hover:shadow-lg transform hover:scale-105">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
            </svg>\r
            <span>View Details<span *ngIf="location.children?.length"> ({{location.children?.length}})</span></span>\r
          </button>\r
\r
          <!-- Action Icons -->\r
          <div class="flex items-center space-x-2">\r
            <!-- QR Code -->\r
            <button class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-md">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>\r
              </svg>\r
            </button>\r
\r
            <!-- Edit -->\r
            <button\r
              (click)="editLocation(location)"\r
              [disabled]="loading"\r
              class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
              </svg>\r
            </button>\r
\r
            <!-- Delete -->\r
            <button\r
              (click)="deleteLocation(location)"\r
              [disabled]="loading"\r
              class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
      <!-- List View -->\r
      <div *ngIf="!loading && currentListView === 'list'" class="bg-white rounded-lg shadow-sm border border-gray-200">\r
      <!-- Table Header -->\r
      <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">\r
        <div class="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">\r
          <div class="col-span-3">Location</div>\r
          <div class="col-span-2">Type</div>\r
          <div class="col-span-2">Parent</div>\r
          <div class="col-span-1">Level</div>\r
          <div class="col-span-1">Assets</div>\r
          <div class="col-span-1">Children</div>\r
          <div class="col-span-2">Actions</div>\r
        </div>\r
      </div>\r
\r
      <!-- Table Body -->\r
      <div class="divide-y divide-gray-200">\r
        <div *ngFor="let location of locations" class="px-6 py-4 hover:bg-gray-50 hover:shadow-sm transition-all duration-200 cursor-pointer group">\r
          <div class="grid grid-cols-12 gap-4 items-center">\r
            <!-- Location -->\r
            <div class="col-span-3">\r
              <div class="flex items-center space-x-3">\r
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">\r
                  <img [src]="location.type.icon" [alt]="location.type.name" class="w-6 h-6">\r
                </div>\r
                <div>\r
                  <div class="font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-200">{{location.name}}</div>\r
                  <div *ngIf="location.description" class="text-sm text-gray-500">{{location.description}}</div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Type -->\r
            <div class="col-span-2">\r
              <span class="text-sm text-gray-600">{{location.type.name}}</span>\r
            </div>\r
\r
            <!-- Parent -->\r
            <div class="col-span-2">\r
              <span class="text-sm text-gray-600">\r
                {{location.parent?.name || 'Root Level'}}\r
              </span>\r
            </div>\r
\r
            <!-- Level -->\r
            <div class="col-span-1">\r
              <span\r
                [class]="'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-' + getHierarchyLevelColor(location.hierarchy_level) + '-100 text-' + getHierarchyLevelColor(location.hierarchy_level) + '-800'">\r
                {{getHierarchyLevelBadge(location.hierarchy_level)}}\r
              </span>\r
            </div>\r
\r
            <!-- Assets -->\r
            <div class="col-span-1">\r
              <div class="flex items-center space-x-1">\r
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>\r
                </svg>\r
                <span class="text-sm text-gray-600">{{location.asset_summary?.asset_count || 0}}</span>\r
              </div>\r
            </div>\r
\r
            <!-- Children -->\r
            <div class="col-span-1">\r
              <div class="flex items-center space-x-1">\r
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
                </svg>\r
                <span class="text-sm text-gray-600">{{location.children?.length || 0}}</span>\r
              </div>\r
            </div>\r
\r
            <!-- Actions -->\r
            <div class="col-span-2">\r
              <div class="flex items-center space-x-2">\r
                <button\r
                  (click)="viewLocation(location)"\r
                  class="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 hover:scale-110 cursor-pointer">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
                  </svg>\r
                </button>\r
                <button\r
                  (click)="editLocation(location)"\r
                  [disabled]="loading"\r
                  class="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                  </svg>\r
                </button>\r
                <button\r
                  (click)="deleteLocation(location)"\r
                  [disabled]="loading"\r
                  class="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                  </svg>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
      <!-- Empty State -->\r
      <div *ngIf="!loading && locations.length === 0" class="text-center py-12">\r
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
      </svg>\r
      <h3 class="mt-2 text-sm font-medium text-gray-900">No locations found</h3>\r
      <p class="mt-1 text-sm text-gray-500">Get started by creating your first location.</p>\r
      <div class="mt-6">\r
        <button\r
          (click)="addLocation()"\r
          class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">\r
          <svg class="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Add Location\r
        </button>\r
      </div>\r
    </div>\r
    </div>\r
\r
    <!-- Tree View -->\r
    <div *ngIf="currentView === 'tree'">\r
      <!-- Tree View Header -->\r
      <div class="flex items-center justify-between mb-6">\r
        <h2 class="text-2xl font-bold text-gray-900">Location Hierarchy</h2>\r
        <div class="flex items-center space-x-3">\r
          <button\r
            (click)="expandAll()"\r
            class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">\r
            Expand All\r
          </button>\r
          <button\r
            (click)="collapseAll()"\r
            class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">\r
            Collapse All\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Tree Loading State -->\r
      <div *ngIf="hierarchyLoading" class="flex items-center justify-center py-20">\r
        <div class="text-center">\r
          <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">\r
            <svg class="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-lg font-medium text-gray-900 mb-2">Loading Hierarchy</h3>\r
          <p class="text-sm text-gray-500">Please wait while we fetch the location hierarchy...</p>\r
        </div>\r
      </div>\r
\r
      <!-- Tree Content -->\r
      <div *ngIf="!hierarchyLoading" class="space-y-1">\r
        <!-- Tree Nodes -->\r
        <ng-container *ngFor="let node of hierarchyData">\r
          <!-- Root Node -->\r
          <div class="bg-white rounded-lg border border-gray-200 p-4">\r
            <div class="flex items-center justify-between">\r
              <div class="flex items-center space-x-3">\r
                <!-- Expand/Collapse Icon -->\r
                <button\r
                  *ngIf="node.children && node.children.length > 0"\r
                  (click)="toggleNode(node.id)"\r
                  class="w-4 h-4 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">\r
                  <svg class="w-3 h-3 transition-transform"\r
                       [class.rotate-90]="isNodeExpanded(node.id)"\r
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
                  </svg>\r
                </button>\r
                <div *ngIf="!node.children || node.children.length === 0" class="w-4 h-4 flex items-center justify-center">\r
                  <div class="w-1 h-1 bg-gray-300 rounded-full"></div>\r
                </div>\r
\r
                <!-- Node Icon -->\r
                <div class="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">\r
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21l4-4 4 4"></path>\r
                  </svg>\r
                </div>\r
\r
                <!-- Node Info -->\r
                <div class="flex-1">\r
                  <div class="flex items-center space-x-3">\r
                    <span class="font-semibold text-gray-900">{{node.name}}</span>\r
                    <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">\r
                      {{node.type?.name || 'Community'}}\r
                    </span>\r
                  </div>\r
                  <div class="text-sm text-gray-500 mt-1">\r
                    {{node.asset_count || 0}} assets\r
                    <span *ngIf="node.children && node.children.length > 0" class="ml-4">\r
                      {{node.children.length}} sub-location{{node.children.length !== 1 ? 's' : ''}}\r
                    </span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Child Nodes -->\r
            <div *ngIf="isNodeExpanded(node.id) && node.children && node.children.length > 0"\r
                 class="mt-4 ml-7 space-y-3">\r
              <ng-container *ngFor="let child of node.children">\r
                <div class="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">\r
                  <div class="flex items-center space-x-3">\r
                    <!-- Child Expand/Collapse Icon -->\r
                    <button\r
                      *ngIf="child.children && child.children.length > 0"\r
                      (click)="toggleNode(child.id)"\r
                      class="w-4 h-4 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">\r
                      <svg class="w-3 h-3 transition-transform"\r
                           [class.rotate-90]="isNodeExpanded(child.id)"\r
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
                      </svg>\r
                    </button>\r
                    <div *ngIf="!child.children || child.children.length === 0" class="w-4 h-4 flex items-center justify-center">\r
                      <div class="w-1 h-1 bg-gray-300 rounded-full"></div>\r
                    </div>\r
\r
                    <!-- Child Icon -->\r
                    <div class="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">\r
                      <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
                      </svg>\r
                    </div>\r
\r
                    <!-- Child Info -->\r
                    <div class="flex-1">\r
                      <div class="flex items-center space-x-3">\r
                        <span class="font-medium text-gray-900">{{child.name}}</span>\r
                        <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700">\r
                          {{child.type?.name || 'Residential Building'}}\r
                        </span>\r
                      </div>\r
                      <div class="text-sm text-gray-500 mt-1">\r
                        {{child.asset_count || 0}} assets\r
                        <span *ngIf="child.children && child.children.length > 0" class="ml-4">\r
                          {{child.children.length}} sub-location{{child.children.length !== 1 ? 's' : ''}}\r
                        </span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- Grandchild Nodes -->\r
                <div *ngIf="isNodeExpanded(child.id) && child.children && child.children.length > 0"\r
                     class="ml-7 space-y-2">\r
                  <div *ngFor="let grandchild of child.children"\r
                       class="flex items-center space-x-3 py-2 px-3 bg-white rounded border border-gray-100">\r
                    <!-- Grandchild Dot -->\r
                    <div class="w-4 h-4 flex items-center justify-center">\r
                      <div class="w-1 h-1 bg-gray-300 rounded-full"></div>\r
                    </div>\r
\r
                    <!-- Grandchild Icon -->\r
                    <div class="w-6 h-6 bg-green-100 rounded flex items-center justify-center">\r
                      <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                      </svg>\r
                    </div>\r
\r
                    <!-- Grandchild Info -->\r
                    <div class="flex-1">\r
                      <div class="flex items-center space-x-3">\r
                        <span class="font-medium text-gray-900">{{grandchild.name}}</span>\r
                        <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700">\r
                          {{grandchild.type?.name || 'Floor'}}\r
                        </span>\r
                      </div>\r
                      <div class="text-sm text-gray-500 mt-1">{{grandchild.asset_count || 0}} assets</div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </ng-container>\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
        <!-- Empty Tree State -->\r
        <div *ngIf="hierarchyData.length === 0" class="text-center py-12">\r
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
          </svg>\r
          <h3 class="mt-2 text-sm font-medium text-gray-900">No hierarchy data</h3>\r
          <p class="mt-1 text-sm text-gray-500">Create some locations to see the hierarchy tree.</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Mgmt View -->\r
    <div *ngIf="currentView === 'mgmt'" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">\r
      <app-hierarchy-management></app-hierarchy-management>\r
    </div>\r
\r
    <!-- Analytics View -->\r
    <div *ngIf="currentView === 'analytics'">\r
      <div class="flex items-center justify-between mb-6">\r
        <h2 class="text-2xl font-bold text-gray-900">Location Analytics</h2>\r
        <div class="flex items-center space-x-3">\r
          <button class="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">\r
            Export Report\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="text-center py-12">\r
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">\r
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r
          </svg>\r
        </div>\r
        <h3 class="text-lg font-medium text-gray-900 mb-2">Analytics Coming Soon</h3>\r
        <p class="text-sm text-gray-500">Detailed analytics and insights about your locations will be available here.</p>\r
      </div>\r
    </div>\r
\r
    <!-- Enhanced Pagination (Only for Grid View) -->\r
    <div *ngIf="currentView === 'grid' && !loading && locations.length > 0" class="mt-8 pt-6 border-t border-gray-200">\r
      <!-- Pagination Controls -->\r
      <div class="flex items-center justify-between">\r
        <!-- Left: Per Page Selector -->\r
        <div class="flex items-center space-x-2 text-sm text-gray-600">\r
          <span>Show</span>\r
          <select\r
            [(ngModel)]="pagination.per_page"\r
            (change)="changePerPage($event)"\r
            class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">\r
            <option value="10">10</option>\r
            <option value="15">15</option>\r
            <option value="25">25</option>\r
            <option value="50">50</option>\r
            <option value="100">100</option>\r
          </select>\r
          <span>entries</span>\r
        </div>\r
\r
        <!-- Center: Page Navigation -->\r
        <nav *ngIf="pagination.last_page > 1" class="flex items-center space-x-1" aria-label="Pagination">\r
          <!-- Previous Page Button -->\r
          <button\r
            (click)="goToPage(pagination.current_page - 1)"\r
            [disabled]="pagination.current_page === 1"\r
            class="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"\r
            title="Previous page">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
            </svg>\r
          </button>\r
\r
          <!-- Page Numbers -->\r
          <div class="flex items-center space-x-1">\r
            <!-- First page (if not in visible range) -->\r
            <button\r
              *ngIf="getVisiblePages()[0] > 1"\r
              (click)="goToPage(1)"\r
              class="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">\r
              1\r
            </button>\r
\r
            <!-- Ellipsis before visible pages -->\r
            <span *ngIf="getVisiblePages()[0] > 2" class="flex items-center justify-center w-10 h-10 text-gray-400">\r
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">\r
                <circle cx="3" cy="10" r="1.5"></circle>\r
                <circle cx="10" cy="10" r="1.5"></circle>\r
                <circle cx="17" cy="10" r="1.5"></circle>\r
              </svg>\r
            </span>\r
\r
            <!-- Visible page numbers -->\r
            <button\r
              *ngFor="let page of getVisiblePages()"\r
              (click)="goToPage(page)"\r
              [class]="pagination.current_page === page ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50'"\r
              class="flex items-center justify-center w-10 h-10 text-sm font-medium border rounded-lg transition-colors"\r
              [title]="'Page ' + page">\r
              {{page}}\r
            </button>\r
\r
            <!-- Ellipsis after visible pages -->\r
            <span *ngIf="getVisiblePages()[getVisiblePages().length - 1] < pagination.last_page - 1" class="flex items-center justify-center w-10 h-10 text-gray-400">\r
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">\r
                <circle cx="3" cy="10" r="1.5"></circle>\r
                <circle cx="10" cy="10" r="1.5"></circle>\r
                <circle cx="17" cy="10" r="1.5"></circle>\r
              </svg>\r
            </span>\r
\r
            <!-- Last page (if not in visible range) -->\r
            <button\r
              *ngIf="getVisiblePages()[getVisiblePages().length - 1] < pagination.last_page"\r
              (click)="goToPage(pagination.last_page)"\r
              class="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">\r
              {{pagination.last_page}}\r
            </button>\r
          </div>\r
\r
          <!-- Next Page Button -->\r
          <button\r
            (click)="goToPage(pagination.current_page + 1)"\r
            [disabled]="pagination.current_page === pagination.last_page"\r
            class="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"\r
            title="Next page">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
            </svg>\r
          </button>\r
        </nav>\r
\r
        <!-- Right: Pagination Info -->\r
        <div class="text-sm text-gray-700">\r
          Showing {{pagination.from}} - {{pagination.to}} of {{pagination.total}} entries\r
        </div>\r
      </div>\r
\r
      <!-- Page Jump Input (for large datasets) -->\r
      <div *ngIf="pagination.last_page > 10" class="flex items-center justify-center mt-4">\r
        <div class="flex items-center space-x-2 text-sm text-gray-600">\r
          <span>Go to page:</span>\r
          <input\r
            type="number"\r
            [min]="1"\r
            [max]="pagination.last_page"\r
            [(ngModel)]="jumpToPage"\r
            (keyup.enter)="goToPage(jumpToPage!)"\r
            class="w-16 px-2 py-1 border border-gray-300 rounded text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
            placeholder="{{pagination.current_page}}">\r
          <button\r
            (click)="goToPage(jumpToPage!)"\r
            [disabled]="!jumpToPage || jumpToPage < 1 || jumpToPage > pagination.last_page"\r
            class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">\r
            Go\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Add Location Modal -->\r
  <app-add-location-modal\r
    [isOpen]="showAddLocationModal"\r
    (closeModal)="closeAddLocationModal()"\r
    (locationCreated)="onLocationCreated($event)">\r
  </app-add-location-modal>\r
\r
  <!-- Edit Location Modal -->\r
  <app-edit-location-modal\r
    [isOpen]="showEditLocationModal"\r
    [location]="selectedLocation"\r
    (closeModal)="closeEditLocationModal()"\r
    (locationUpdated)="onLocationUpdated($event)">\r
  </app-edit-location-modal>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <app-delete-confirmation-modal\r
    [isOpen]="showDeleteConfirmationModal"\r
    [location]="selectedLocation"\r
    (closeModal)="closeDeleteConfirmationModal()"\r
    (locationDeleted)="onLocationDeleted($event)">\r
  </app-delete-confirmation-modal>\r
\r
  <!-- Bulk Create Modal -->\r
  <app-bulk-create-modal\r
    [isOpen]="showBulkCreateModal"\r
    (closeModal)="closeBulkCreateModal()"\r
    (locationsCreated)="onLocationsCreated($event)">\r
  </app-bulk-create-modal>\r
</div>\r
`, styles: ["/* src/app/locations/locations.component.scss */\n.location-card {\n  transition: all 0.2s ease-in-out;\n}\n.location-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.hierarchy-badge {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 9999px;\n}\n.location-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  font-size: 1.25rem;\n}\n.filter-panel {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border: 1px solid #e2e8f0;\n}\n.search-input {\n  transition: all 0.2s ease-in-out;\n}\n.search-input:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.view-toggle button {\n  transition: all 0.2s ease-in-out;\n}\n.view-toggle button.active {\n  background: #3b82f6;\n  color: white;\n  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);\n}\n.table-row {\n  transition: background-color 0.15s ease-in-out;\n}\n.table-row:hover {\n  background-color: #f8fafc;\n}\n.action-button {\n  transition: all 0.15s ease-in-out;\n}\n.action-button:hover {\n  transform: scale(1.1);\n}\n.loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .location-grid {\n    grid-template-columns: 1fr;\n  }\n  .filter-grid {\n    grid-template-columns: 1fr;\n  }\n  .table-header .grid,\n  .table-row .grid {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=locations.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: LocationService }, { type: Router }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocationsComponent, { className: "LocationsComponent", filePath: "src/app/locations/locations.component.ts", lineNumber: 22 });
})();

// src/app/locations/components/location-view/location-view.component.ts
var _c05 = (a0) => ["/locations", a0];
function LocationViewComponent_div_9_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 21);
    \u0275\u0275element(3, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "a", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ancestor_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c05, ancestor_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ancestor_r1.name, " ");
  }
}
function LocationViewComponent_div_9_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2022 ", ctx_r1.ancestors.length, " parent location", ctx_r1.ancestors.length !== 1 ? "s" : "", " ");
  }
}
function LocationViewComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "nav", 12)(2, "ol", 13)(3, "li")(4, "div", 14)(5, "a", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 16);
    \u0275\u0275element(7, "path", 17)(8, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10, "Locations");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(11, LocationViewComponent_div_9_li_11_Template, 6, 4, "li", 20);
    \u0275\u0275elementStart(12, "li")(13, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 21);
    \u0275\u0275element(15, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 24)(19, "span", 25);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 26);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, LocationViewComponent_div_9_span_23_Template, 2, 2, "span", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.ancestors);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.location.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Level ", ctx_r1.location.hierarchy_level, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.location.type == null ? null : ctx_r1.location.type.name) || "Unknown Type");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ancestors.length > 0);
  }
}
function LocationViewComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 33);
    \u0275\u0275element(4, "circle", 34)(5, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 36);
    \u0275\u0275text(7, "Loading Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 37);
    \u0275\u0275text(9, "Please wait while we fetch the location details...");
    \u0275\u0275elementEnd()()();
  }
}
function LocationViewComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 39);
    \u0275\u0275element(4, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 36);
    \u0275\u0275text(6, "Error Loading Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 42);
    \u0275\u0275listener("click", function LocationViewComponent_div_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(10, " Back to Locations ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function LocationViewComponent_div_12_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 116);
    \u0275\u0275element(3, "circle", 34)(4, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 36);
    \u0275\u0275text(6, "Loading Sub-locations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 37);
    \u0275\u0275text(8, "Please wait...");
    \u0275\u0275elementEnd()();
  }
}
function LocationViewComponent_div_12_div_133_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_div_133_div_1_Template_div_click_0_listener() {
      const subLocation_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewSubLocation(subLocation_r6));
    });
    \u0275\u0275elementStart(1, "div", 127)(2, "div", 49)(3, "div", 128);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 129);
    \u0275\u0275element(5, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div")(7, "h4", 130);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 131)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 132);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 133)(15, "button", 134);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_div_133_div_1_Template_button_click_15_listener($event) {
      const subLocation_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.editSubLocation(subLocation_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 16);
    \u0275\u0275element(17, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 135);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 16);
    \u0275\u0275element(20, "path", 136);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 137)(22, "div", 3)(23, "span", 83);
    \u0275\u0275text(24, "Assets: ");
    \u0275\u0275elementStart(25, "span", 138);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 3)(28, "span", 83);
    \u0275\u0275text(29, "Status: ");
    \u0275\u0275elementStart(30, "span", 139);
    \u0275\u0275text(31, "Active");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const subLocation_r6 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(subLocation_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subLocation_r6.type.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subLocation_r6.description || subLocation_r6.name);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate((subLocation_r6.asset_summary == null ? null : subLocation_r6.asset_summary.asset_count) || 0);
  }
}
function LocationViewComponent_div_12_div_133_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "div", 14)(2, "div", 141);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 142);
    \u0275\u0275element(4, "path", 143);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 144);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 145);
    \u0275\u0275element(7, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span", 146);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subLocation_r7 = ctx.$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(subLocation_r7.name);
  }
}
function LocationViewComponent_div_12_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275template(1, LocationViewComponent_div_12_div_133_div_1_Template, 32, 4, "div", 117);
    \u0275\u0275elementStart(2, "div", 118)(3, "h3", 119);
    \u0275\u0275text(4, "Hierarchy View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 120)(6, "div", 49)(7, "div", 121);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 122);
    \u0275\u0275element(9, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div")(11, "h4", 123);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 124);
    \u0275\u0275template(14, LocationViewComponent_div_12_div_133_div_14_Template, 10, 1, "div", 125);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.subLocations);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.location.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.subLocations);
  }
}
function LocationViewComponent_div_12_div_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 96);
    \u0275\u0275element(3, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 36);
    \u0275\u0275text(5, "No Sub-locations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 97);
    \u0275\u0275text(7, "Create sub-locations to organize your space more effectively.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 147);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_div_134_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addSubLocation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 16);
    \u0275\u0275element(10, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Add First Sub-location");
    \u0275\u0275elementEnd()()();
  }
}
function LocationViewComponent_div_12_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148)(1, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 149);
    \u0275\u0275element(3, "path", 150);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 151)(5, "h4", 138);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 152);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 153);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("w-8 h-8 bg-" + ctx_r1.getActivityColor(activity_r9.type) + "-100 rounded-lg flex items-center justify-center");
    \u0275\u0275advance();
    \u0275\u0275classMap("w-4 h-4 text-" + ctx_r1.getActivityColor(activity_r9.type) + "-600");
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r1.getActivityIcon(activity_r9.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r9.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r9.time);
  }
}
function LocationViewComponent_div_12_img_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 154);
    \u0275\u0275listener("error", function LocationViewComponent_div_12_img_152_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onQRCodeError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.location.quick_chart_qr_url, \u0275\u0275sanitizeUrl)("alt", "QR Code for " + ctx_r1.location.name);
  }
}
function LocationViewComponent_div_12_div_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 156);
    \u0275\u0275element(2, "path", 105);
    \u0275\u0275elementEnd()();
  }
}
function LocationViewComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 2)(3, "div", 3)(4, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 46);
    \u0275\u0275element(6, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h1", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 49)(10, "button", 50);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editLocation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 16);
    \u0275\u0275element(12, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 50);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addAsset());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 16);
    \u0275\u0275element(17, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Add Asset");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 53);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteLocation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 16);
    \u0275\u0275element(22, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "div", 55)(26, "div", 56)(27, "div", 57)(28, "h3", 58);
    \u0275\u0275text(29, "Total Assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 60);
    \u0275\u0275element(32, "path", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div", 62);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 56)(36, "div", 57)(37, "h3", 63);
    \u0275\u0275text(38, "Health Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 65);
    \u0275\u0275element(41, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 62);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 56)(45, "div", 57)(46, "h3", 67);
    \u0275\u0275text(47, "Sub-locations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 69);
    \u0275\u0275element(50, "path", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "div", 62);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 56)(54, "div", 57)(55, "h3", 71);
    \u0275\u0275text(56, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 73);
    \u0275\u0275element(59, "path", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(60, "div", 62);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 74)(63, "div", 75)(64, "div", 76)(65, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 78);
    \u0275\u0275element(67, "path", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "h2", 80);
    \u0275\u0275text(69, "Location Overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 81)(71, "div")(72, "h4", 82);
    \u0275\u0275text(73, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p", 83);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div")(77, "h4", 82);
    \u0275\u0275text(78, "Capacity & Utilization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 84)(80, "div", 85)(81, "span", 83);
    \u0275\u0275text(82, "Asset Utilization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 7);
    \u0275\u0275text(84, "0%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 86);
    \u0275\u0275element(86, "div", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 88)(88, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(89, "svg", 89);
    \u0275\u0275element(90, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(91, "div")(92, "div", 80);
    \u0275\u0275text(93, "72\xB0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 26);
    \u0275\u0275text(95, "Temperature");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(97, "svg", 91);
    \u0275\u0275element(98, "path", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(99, "div")(100, "div", 80);
    \u0275\u0275text(101, "Normal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 26);
    \u0275\u0275text(103, "Status");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(104, "div", 76)(105, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(106, "svg", 78);
    \u0275\u0275element(107, "path", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(108, "h2", 80);
    \u0275\u0275text(109, "Asset Health Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 94)(111, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(112, "svg", 96);
    \u0275\u0275element(113, "path", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(114, "h3", 36);
    \u0275\u0275text(115, "No Assets Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "p", 97);
    \u0275\u0275text(117, "This location doesn't have any assets assigned yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "button", 42);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_Template_button_click_118_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addAsset());
    });
    \u0275\u0275text(119, " Add Assets ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "div", 76)(121, "div", 98)(122, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(123, "svg", 78);
    \u0275\u0275element(124, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(125, "h2", 80);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "button", 99);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_Template_button_click_127_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSubLocation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(128, "svg", 16);
    \u0275\u0275element(129, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(130, "span");
    \u0275\u0275text(131, "Add Sub-location");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(132, LocationViewComponent_div_12_div_132_Template, 9, 0, "div", 100)(133, LocationViewComponent_div_12_div_133_Template, 15, 3, "div", 101)(134, LocationViewComponent_div_12_div_134_Template, 13, 0, "div", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 102)(136, "div", 76)(137, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(138, "svg", 78);
    \u0275\u0275element(139, "path", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(140, "h2", 80);
    \u0275\u0275text(141, "Recent Activity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 81);
    \u0275\u0275template(143, LocationViewComponent_div_12_div_143_Template, 11, 8, "div", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "div", 76)(145, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(146, "svg", 78);
    \u0275\u0275element(147, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(148, "h2", 80);
    \u0275\u0275text(149, "Location QR Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 31)(151, "div", 106);
    \u0275\u0275template(152, LocationViewComponent_div_12_img_152_Template, 1, 2, "img", 107)(153, LocationViewComponent_div_12_div_153_Template, 3, 0, "div", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "h4", 109);
    \u0275\u0275text(155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "p", 110);
    \u0275\u0275text(157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "div", 84)(159, "button", 111);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_Template_button_click_159_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadQR());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(160, "svg", 16);
    \u0275\u0275element(161, "path", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(162, "span");
    \u0275\u0275text(163, "Download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "button", 111);
    \u0275\u0275listener("click", function LocationViewComponent_div_12_Template_button_click_164_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printLabel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(165, "svg", 16);
    \u0275\u0275element(166, "path", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(167, "span");
    \u0275\u0275text(168, "Print Label");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(169, "p", 114);
    \u0275\u0275text(170, " Scan this QR code to quickly access location details and view assets. ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.location.name);
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate(ctx_r1.mockStats.totalAssets);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.mockStats.healthScore, "%");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.mockStats.subLocations);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", ctx_r1.mockStats.totalValue, "");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.location.description || ctx_r1.location.name);
    \u0275\u0275advance(51);
    \u0275\u0275textInterpolate1("Sub-locations (", ctx_r1.mockStats.subLocations, ")");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.subLocationsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.subLocationsLoading && ctx_r1.subLocations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.subLocationsLoading && ctx_r1.subLocations.length === 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.mockActivities);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.location.quick_chart_qr_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.location.quick_chart_qr_url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.location.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mockStats.totalAssets);
  }
}
function LocationViewComponent_Conditional_13_app_add_location_modal_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-add-location-modal", 160);
    \u0275\u0275listener("closeModal", function LocationViewComponent_Conditional_13_app_add_location_modal_0_Template_app_add_location_modal_closeModal_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeAddSubLocationModal());
    })("locationCreated", function LocationViewComponent_Conditional_13_app_add_location_modal_0_Template_app_add_location_modal_locationCreated_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubLocationCreated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isOpen", ctx_r1.showAddSubLocationModal)("parentLocation", ctx_r1.location);
  }
}
function LocationViewComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, LocationViewComponent_Conditional_13_app_add_location_modal_0_Template, 1, 2, "app-add-location-modal", 157);
    \u0275\u0275elementStart(1, "app-edit-location-modal", 158);
    \u0275\u0275listener("closeModal", function LocationViewComponent_Conditional_13_Template_app_edit_location_modal_closeModal_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditLocationModal());
    })("locationUpdated", function LocationViewComponent_Conditional_13_Template_app_edit_location_modal_locationUpdated_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLocationUpdated($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-delete-confirmation-modal", 159);
    \u0275\u0275listener("closeModal", function LocationViewComponent_Conditional_13_Template_app_delete_confirmation_modal_closeModal_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteConfirmationModal());
    })("locationDeleted", function LocationViewComponent_Conditional_13_Template_app_delete_confirmation_modal_locationDeleted_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLocationDeleted($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.location);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r1.showEditLocationModal)("location", ctx_r1.location);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r1.showDeleteConfirmationModal)("location", ctx_r1.location);
  }
}
var LocationViewComponent = class _LocationViewComponent {
  route;
  router;
  locationService;
  angularLocation;
  destroy$ = new Subject();
  location = null;
  loading = true;
  error = "";
  ancestors = [];
  // Sublocation data
  subLocations = [];
  subLocationsLoading = false;
  // Modal state
  showAddSubLocationModal = false;
  showEditLocationModal = false;
  showDeleteConfirmationModal = false;
  // Mock data for demonstration
  mockStats = {
    totalAssets: 0,
    healthScore: 100,
    subLocations: 0,
    totalValue: 0
  };
  mockActivities = [
    {
      type: "maintenance",
      title: "Maintenance Scheduled",
      description: "Routine maintenance scheduled for next week",
      time: "about 2 hours ago",
      icon: "maintenance"
    },
    {
      type: "utilization",
      title: "High Utilization",
      description: "Location utilization increased by 15%",
      time: "about 6 hours ago",
      icon: "chart"
    },
    {
      type: "safety",
      title: "Safety Inspection",
      description: "Monthly safety inspection completed",
      time: "1 day ago",
      icon: "shield"
    }
  ];
  constructor(route, router, locationService, angularLocation) {
    this.route = route;
    this.router = router;
    this.locationService = locationService;
    this.angularLocation = angularLocation;
  }
  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const locationId = params["id"];
      if (locationId) {
        this.loadLocation(parseInt(locationId));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadLocation(id) {
    this.loading = true;
    this.error = "";
    this.locationService.getLocation(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.location = response.data.location;
          this.ancestors = response.data.ancestors || [];
          this.updateMockStats();
          this.loadSubLocations();
        } else {
          this.error = response.message || "Failed to load location";
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || "An error occurred while loading the location";
        this.loading = false;
      }
    });
  }
  loadSubLocations() {
    if (!this.location)
      return;
    this.subLocationsLoading = true;
    const params = {
      parent_id: this.location.id,
      per_page: 50
      // Load more sublocations
    };
    this.locationService.getLocations(params).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success) {
          this.subLocations = response.data.locations;
          this.updateMockStats();
        }
        this.subLocationsLoading = false;
      },
      error: (error) => {
        console.error("Error loading sub-locations:", error);
        this.subLocationsLoading = false;
      }
    });
  }
  updateMockStats() {
    if (this.location) {
      this.mockStats = {
        totalAssets: this.location.asset_summary?.asset_count || 0,
        healthScore: 100,
        subLocations: this.subLocations.length,
        totalValue: this.location.asset_summary?.total_value || 0
      };
    }
  }
  goBack() {
    this.angularLocation.back();
  }
  editLocation() {
    this.showEditLocationModal = true;
  }
  addAsset() {
    console.log("Add asset to location");
  }
  deleteLocation() {
    this.showDeleteConfirmationModal = true;
  }
  addSubLocation() {
    this.showAddSubLocationModal = true;
  }
  closeAddSubLocationModal() {
    this.showAddSubLocationModal = false;
  }
  onSubLocationCreated(subLocation) {
    this.loadSubLocations();
    this.showAddSubLocationModal = false;
  }
  closeEditLocationModal() {
    this.showEditLocationModal = false;
  }
  onLocationUpdated(updatedLocation) {
    this.location = updatedLocation;
    this.updateMockStats();
    this.showEditLocationModal = false;
  }
  closeDeleteConfirmationModal() {
    this.showDeleteConfirmationModal = false;
  }
  onLocationDeleted(deletedLocation) {
    this.router.navigate(["/locations"]);
  }
  onQRCodeError(event) {
    event.target.style.display = "none";
    console.log("QR code image failed to load");
  }
  regenerateQR() {
    console.log("Regenerate QR code");
  }
  downloadQR() {
    if (this.location?.quick_chart_qr_url) {
      const link = document.createElement("a");
      link.href = this.location.quick_chart_qr_url;
      link.target = "_blank";
      link.download = `qr-code-${this.location.name.toLowerCase().replace(/\s+/g, "-")}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  printLabel() {
    if (this.location?.quick_chart_qr_url) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
         <html>
           <head>
             <title>Print Label</title>
             <style>
               body {
                 font-family: Arial, sans-serif;
                 text-align: center;
                 margin: 20px;
               }
               img {
                 max-width: 100%;
                 height: auto;
               }
             </style>
           </head>
           <body>
             <h1>${this.location.name}</h1>
             <img src="${this.location.quick_chart_qr_url}" alt="QR Code for ${this.location.name}">
             <p>Scan this QR code to access location details.</p>
             <script>
               window.onload = function() {
                 window.print();
                 window.close();
               };
             <\/script>
           </body>
         </html>
       `);
        printWindow.document.close();
      }
    } else {
      console.error("QR code URL is not available for printing.");
    }
  }
  getActivityIcon(type) {
    const icons = {
      maintenance: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      chart: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    };
    return icons[type] || icons["maintenance"];
  }
  getActivityColor(type) {
    const colors = {
      maintenance: "orange",
      chart: "purple",
      shield: "blue"
    };
    return colors[type] || "gray";
  }
  viewSubLocation(subLocation) {
    this.router.navigate(["/locations", subLocation.id]);
    setTimeout(() => {
      this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
        const locationId = params["id"];
        if (locationId) {
          this.loadLocation(parseInt(locationId));
        }
      });
    }, 500);
  }
  editSubLocation(subLocation) {
    console.log("Edit sublocation:", subLocation);
  }
  deleteSubLocation(subLocation) {
    console.log("Delete sublocation:", subLocation);
  }
  static \u0275fac = function LocationViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocationViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LocationService), \u0275\u0275directiveInject(Location));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocationViewComponent, selectors: [["app-location-view"]], decls: 14, vars: 5, consts: [[1, "min-h-screen", "bg-gray-50"], [1, "bg-white", "border-b", "border-gray-200", "px-6", "py-4"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "items-center", "space-x-2", "text-gray-600", "hover:text-gray-800", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "font-medium"], ["class", "mt-4", 4, "ngIf"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "px-6 py-6", 4, "ngIf"], [1, "mt-4"], ["aria-label", "Breadcrumb", 1, "flex"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center"], ["routerLink", "/locations", 1, "text-gray-500", "hover:text-gray-700", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 21l4-4 4 4"], [1, "sr-only"], [4, "ngFor", "ngForOf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "mx-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "text-gray-900", "text-sm", "font-medium"], [1, "mt-2", "flex", "items-center", "space-x-2"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded-full", "text-xs", "font-medium", "bg-blue-100", "text-blue-800"], [1, "text-xs", "text-gray-500"], ["class", "text-xs text-gray-400", 4, "ngIf"], [1, "text-gray-500", "hover:text-gray-700", "transition-colors", "text-sm", "font-medium", 3, "routerLink"], [1, "text-xs", "text-gray-400"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-blue-100", "rounded-full", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-8", "h-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-500"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-red-100", "rounded-full", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-sm", "text-gray-500", "mb-4"], [1, "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-colors", 3, "click"], [1, "px-6", "py-6"], [1, "bg-blue-100", "rounded-lg", "p-6", "mb-6"], [1, "w-12", "h-12", "bg-blue-200", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "flex", "items-center", "space-x-3"], [1, "flex", "items-center", "space-x-2", "px-4", "py-2", "text-gray-700", "hover:bg-blue-200", "rounded-lg", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "flex", "items-center", "space-x-2", "px-4", "py-2", "text-red-600", "hover:bg-red-50", "rounded-lg", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-6"], [1, "bg-white", "rounded-lg", "p-4", "border", "border-gray-200"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-sm", "font-medium", "text-blue-600"], [1, "w-8", "h-8", "bg-blue-50", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-sm", "font-medium", "text-green-600"], [1, "w-8", "h-8", "bg-green-50", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"], [1, "text-sm", "font-medium", "text-purple-600"], [1, "w-8", "h-8", "bg-purple-50", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-purple-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "text-sm", "font-medium", "text-orange-600"], [1, "w-8", "h-8", "bg-orange-50", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-orange-600"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-lg", "p-6", "shadow-sm", "border", "border-gray-200"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "space-y-4"], [1, "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "text-gray-600"], [1, "space-y-2"], [1, "flex", "justify-between", "text-sm"], [1, "w-full", "bg-gray-200", "rounded-full", "h-2"], [1, "bg-blue-600", "h-2", "rounded-full", 2, "width", "0%"], [1, "grid", "grid-cols-2", "gap-4", "mt-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "text-center", "py-12"], [1, "w-16", "h-16", "bg-gray-100", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-400"], [1, "text-gray-600", "mb-4"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2", "text-blue-600", "hover:bg-blue-50", "rounded-lg", "transition-colors", 3, "click"], ["class", "text-center py-12", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "space-y-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["class", "flex items-start space-x-3", 4, "ngFor", "ngForOf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"], [1, "w-32", "h-32", "bg-gray-100", "rounded-lg", "mx-auto", "mb-4", "flex", "items-center", "justify-center", "overflow-hidden"], ["class", "w-full h-full object-contain", 3, "src", "alt", "error", 4, "ngIf"], ["class", "w-24 h-24 bg-gray-300 rounded flex items-center justify-center", 4, "ngIf"], [1, "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-600", "mb-4"], [1, "w-full", "flex", "items-center", "justify-center", "space-x-2", "px-3", "py-2", "text-gray-600", "hover:bg-gray-50", "rounded-lg", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"], [1, "text-xs", "text-gray-500", "mt-4"], [1, "inline-flex", "items-center", "justify-center", "w-12", "h-12", "bg-blue-100", "rounded-full", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-6", "h-6", "text-blue-600"], ["class", "bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "mt-8", "pt-6", "border-t", "border-gray-200"], [1, "text-base", "font-semibold", "text-gray-900", "mb-4"], [1, "bg-blue-100", "rounded-lg", "p-3", "mb-2"], [1, "w-6", "h-6", "bg-blue-200", "rounded", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "text-blue-700"], [1, "font-medium", "text-blue-800", "text-sm"], [1, "space-y-1"], ["class", "flex items-center space-x-3 p-2 hover:bg-gray-50 rounded transition-colors", 4, "ngFor", "ngForOf"], [1, "bg-gray-50", "rounded-lg", "p-4", "hover:bg-gray-100", "transition-all", "cursor-pointer", 3, "click"], [1, "flex", "items-start", "justify-between", "mb-3"], [1, "w-8", "h-8", "bg-white", "rounded-lg", "flex", "items-center", "justify-center", "border", "border-gray-200"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-600"], [1, "font-semibold", "text-gray-900"], [1, "flex", "items-center", "space-x-2", "text-sm", "text-gray-500"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "items-center", "space-x-1"], [1, "p-1", "text-gray-400", "hover:text-blue-600", "hover:bg-blue-50", "rounded", "transition-all", 3, "click"], [1, "p-1", "text-gray-400", "hover:text-gray-600", "hover:bg-gray-200", "rounded", "transition-all"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "font-medium", "text-gray-900"], [1, "font-medium", "text-green-600"], [1, "flex", "items-center", "space-x-3", "p-2", "hover:bg-gray-50", "rounded", "transition-colors"], [1, "w-6", "h-6", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "d", "M12 2v20M2 12h20"], [1, "w-5", "h-5", "bg-gray-100", "rounded", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "text-gray-600"], [1, "text-sm", "text-gray-700"], [1, "flex", "items-center", "space-x-2", "mx-auto", "px-4", "py-2", "text-blue-600", "hover:bg-blue-50", "rounded-lg", "transition-colors", 3, "click"], [1, "flex", "items-start", "space-x-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], [1, "flex-1"], [1, "text-sm", "text-gray-600"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "w-full", "h-full", "object-contain", 3, "error", "src", "alt"], [1, "w-24", "h-24", "bg-gray-300", "rounded", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-gray-500"], [3, "isOpen", "parentLocation", "closeModal", "locationCreated", 4, "ngIf"], [3, "closeModal", "locationUpdated", "isOpen", "location"], [3, "closeModal", "locationDeleted", "isOpen", "location"], [3, "closeModal", "locationCreated", "isOpen", "parentLocation"]], template: function LocationViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function LocationViewComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "Back to Locations");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(9, LocationViewComponent_div_9_Template, 24, 5, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, LocationViewComponent_div_10_Template, 10, 0, "div", 9)(11, LocationViewComponent_div_11_Template, 11, 1, "div", 9)(12, LocationViewComponent_div_12_Template, 171, 15, "div", 10)(13, LocationViewComponent_Conditional_13_Template, 3, 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.location && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.location && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 13 : -1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, AddLocationModalComponent, EditLocationModalComponent, DeleteConfirmationModalComponent], styles: ["\n\n.location-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n}\n.stats-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.stats-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.activity-item[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.activity-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n  padding: 0.75rem;\n  margin: -0.75rem;\n}\n.qr-code-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border: 2px dashed #e5e7eb;\n}\n.qr-code-container[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n}\n.action-button[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-in-out;\n}\n.action-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.action-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.back-button[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n}\n.overview-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fafbfc 100%);\n}\n.utilization-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  transition: width 0.3s ease-in-out;\n}\n.temperature-reading[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #f3f4f6 100%);\n  border: 2px dashed #d1d5db;\n  border-radius: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .main-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .location-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n@media print {\n  .action-buttons[_ngcontent-%COMP%], \n   .back-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .qr-code-container[_ngcontent-%COMP%] {\n    border: 1px solid #000;\n    background: white;\n  }\n}\nbutton[_ngcontent-%COMP%]:focus, \na[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #3b82f6;\n  outline-offset: 2px;\n}\n*[_ngcontent-%COMP%] {\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.activity-scroll[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #cbd5e1 #f1f5f9;\n}\n.activity-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.activity-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f5f9;\n  border-radius: 3px;\n}\n.activity-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.activity-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n/*# sourceMappingURL=location-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationViewComponent, [{
    type: Component,
    args: [{ selector: "app-location-view", standalone: true, imports: [CommonModule, RouterModule, AddLocationModalComponent, EditLocationModalComponent, DeleteConfirmationModalComponent], template: `<!-- Location View Page -->\r
<div class="min-h-screen bg-gray-50">\r
  <!-- Header -->\r
  <div class="bg-white border-b border-gray-200 px-6 py-4">\r
    <div class="flex items-center justify-between">\r
      <!-- Back Button and Title -->\r
      <div class="flex items-center space-x-4">\r
        <button\r
          (click)="goBack()"\r
          class="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          <span class="font-medium">Back to Locations</span>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Breadcrumb Navigation -->\r
    <div *ngIf="location && !loading" class="mt-4">\r
      <nav class="flex" aria-label="Breadcrumb">\r
        <ol class="flex items-center space-x-2">\r
          <!-- Root Level -->\r
          <li>\r
            <div class="flex items-center">\r
              <a routerLink="/locations" class="text-gray-500 hover:text-gray-700 transition-colors">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21l4-4 4 4"></path>\r
                </svg>\r
                <span class="sr-only">Locations</span>\r
              </a>\r
            </div>\r
          </li>\r
\r
          <!-- Ancestors -->\r
          <li *ngFor="let ancestor of ancestors">\r
            <div class="flex items-center">\r
              <svg class="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
              </svg>\r
              <a \r
                [routerLink]="['/locations', ancestor.id]"\r
                class="text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium">\r
                {{ancestor.name}}\r
              </a>\r
            </div>\r
          </li>\r
\r
          <!-- Current Location -->\r
          <li>\r
            <div class="flex items-center">\r
              <svg class="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
              </svg>\r
              <span class="text-gray-900 text-sm font-medium">{{location.name}}</span>\r
            </div>\r
          </li>\r
        </ol>\r
      </nav>\r
\r
      <!-- Hierarchy Level Indicator -->\r
      <div class="mt-2 flex items-center space-x-2">\r
        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">\r
          Level {{location.hierarchy_level}}\r
        </span>\r
        <span class="text-xs text-gray-500">{{location.type?.name || 'Unknown Type'}}</span>\r
        <span *ngIf="ancestors.length > 0" class="text-xs text-gray-400">\r
          \u2022 {{ancestors.length}} parent location{{ancestors.length !== 1 ? 's' : ''}}\r
        </span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">\r
        <svg class="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">Loading Location</h3>\r
      <p class="text-sm text-gray-500">Please wait while we fetch the location details...</p>\r
    </div>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">\r
        <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">Error Loading Location</h3>\r
      <p class="text-sm text-gray-500 mb-4">{{error}}</p>\r
      <button\r
        (click)="goBack()"\r
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">\r
        Back to Locations\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Main Content -->\r
  <div *ngIf="location && !loading" class="px-6 py-6">\r
    <!-- Location Header - Blue Background -->\r
    <div class="bg-blue-100 rounded-lg p-6 mb-6">\r
      <div class="flex items-center justify-between">\r
        <!-- Left: Icon and Title -->\r
        <div class="flex items-center space-x-4">\r
          <div class="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">\r
            <svg class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
            </svg>\r
          </div>\r
          <h1 class="text-2xl font-bold text-gray-900">{{location.name}}</h1>\r
        </div>\r
\r
        <!-- Right: Action Buttons -->\r
        <div class="flex items-center space-x-3">\r
          <button\r
            (click)="editLocation()"\r
            class="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-200 rounded-lg transition-colors">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
            </svg>\r
            <span>Edit</span>\r
          </button>\r
\r
          <button\r
            (click)="addAsset()"\r
            class="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-200 rounded-lg transition-colors">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
            </svg>\r
            <span>Add Asset</span>\r
          </button>\r
\r
          <button\r
            (click)="deleteLocation()"\r
            class="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
            </svg>\r
            <span>Delete</span>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Stats Cards -->\r
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">\r
      <!-- Total Assets -->\r
      <div class="bg-white rounded-lg p-4 border border-gray-200">\r
        <div class="flex items-center justify-between mb-2">\r
          <h3 class="text-sm font-medium text-blue-600">Total Assets</h3>\r
          <div class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">\r
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="text-xl font-bold text-gray-900">{{mockStats.totalAssets}}</div>\r
      </div>\r
\r
      <!-- Health Score -->\r
      <div class="bg-white rounded-lg p-4 border border-gray-200">\r
        <div class="flex items-center justify-between mb-2">\r
          <h3 class="text-sm font-medium text-green-600">Health Score</h3>\r
          <div class="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">\r
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="text-xl font-bold text-gray-900">{{mockStats.healthScore}}%</div>\r
      </div>\r
\r
      <!-- Sub-locations -->\r
      <div class="bg-white rounded-lg p-4 border border-gray-200">\r
        <div class="flex items-center justify-between mb-2">\r
          <h3 class="text-sm font-medium text-purple-600">Sub-locations</h3>\r
          <div class="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">\r
            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="text-xl font-bold text-gray-900">{{mockStats.subLocations}}</div>\r
      </div>\r
\r
      <!-- Total Value -->\r
      <div class="bg-white rounded-lg p-4 border border-gray-200">\r
        <div class="flex items-center justify-between mb-2">\r
          <h3 class="text-sm font-medium text-orange-600">Total Value</h3>\r
          <div class="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">\r
            <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="text-xl font-bold text-gray-900">\${{mockStats.totalValue}}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Main Content Grid -->\r
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">\r
      <!-- Left Column -->\r
      <div class="lg:col-span-2 space-y-6">\r
        <!-- Location Overview -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center space-x-2 mb-4">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\r
            </svg>\r
            <h2 class="text-lg font-semibold text-gray-900">Location Overview</h2>\r
          </div>\r
\r
          <div class="space-y-4">\r
            <div>\r
              <h4 class="text-sm font-medium text-gray-700 mb-2">Description</h4>\r
              <p class="text-gray-600">{{location.description || location.name}}</p>\r
            </div>\r
\r
            <div>\r
              <h4 class="text-sm font-medium text-gray-700 mb-2">Capacity & Utilization</h4>\r
              <div class="space-y-2">\r
                <div class="flex justify-between text-sm">\r
                  <span class="text-gray-600">Asset Utilization</span>\r
                  <span class="font-medium">0%</span>\r
                </div>\r
                <div class="w-full bg-gray-200 rounded-full h-2">\r
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 0%"></div>\r
                </div>\r
              </div>\r
\r
              <div class="grid grid-cols-2 gap-4 mt-4">\r
                <div class="flex items-center space-x-2">\r
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>\r
                  </svg>\r
                  <div>\r
                    <div class="text-lg font-semibold text-gray-900">72\xB0F</div>\r
                    <div class="text-xs text-gray-500">Temperature</div>\r
                  </div>\r
                </div>\r
\r
                <div class="flex items-center space-x-2">\r
                  <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                  </svg>\r
                  <div>\r
                    <div class="text-lg font-semibold text-gray-900">Normal</div>\r
                    <div class="text-xs text-gray-500">Status</div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Asset Health Dashboard -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center space-x-2 mb-4">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r
            </svg>\r
            <h2 class="text-lg font-semibold text-gray-900">Asset Health Dashboard</h2>\r
          </div>\r
\r
          <div class="text-center py-12">\r
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">\r
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>\r
              </svg>\r
            </div>\r
            <h3 class="text-lg font-medium text-gray-900 mb-2">No Assets Found</h3>\r
            <p class="text-gray-600 mb-4">This location doesn't have any assets assigned yet.</p>\r
            <button\r
              (click)="addAsset()"\r
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">\r
              Add Assets\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Sub-locations -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center justify-between mb-4">\r
            <div class="flex items-center space-x-2">\r
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
              </svg>\r
              <h2 class="text-lg font-semibold text-gray-900">Sub-locations ({{mockStats.subLocations}})</h2>\r
            </div>\r
            <button\r
              (click)="addSubLocation()"\r
              class="flex items-center space-x-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
              </svg>\r
              <span>Add Sub-location</span>\r
            </button>\r
          </div>\r
\r
          <!-- Loading State -->\r
          <div *ngIf="subLocationsLoading" class="text-center py-12">\r
            <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">\r
              <svg class="animate-spin w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
            </div>\r
            <h3 class="text-lg font-medium text-gray-900 mb-2">Loading Sub-locations</h3>\r
            <p class="text-sm text-gray-500">Please wait...</p>\r
          </div>\r
\r
          <!-- Sub-locations List -->\r
          <div *ngIf="!subLocationsLoading && subLocations.length > 0" class="space-y-4">\r
            <!-- Sub-location Cards -->\r
            <div *ngFor="let subLocation of subLocations"\r
                 class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all cursor-pointer"\r
                 (click)="viewSubLocation(subLocation)">\r
              <!-- Location Header -->\r
              <div class="flex items-start justify-between mb-3">\r
                <div class="flex items-center space-x-3">\r
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-200">\r
                    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
                    </svg>\r
                  </div>\r
                  <div>\r
                    <h4 class="font-semibold text-gray-900">{{subLocation.name}}</h4>\r
                    <div class="flex items-center space-x-2 text-sm text-gray-500">\r
                      <span>{{subLocation.type.name}}</span>\r
                    </div>\r
                    <div class="text-sm text-gray-500 mt-1">{{subLocation.description || subLocation.name}}</div>\r
                  </div>\r
                </div>\r
\r
                <!-- Action Menu -->\r
                <div class="flex items-center space-x-1">\r
                  <button\r
                    (click)="editSubLocation(subLocation); $event.stopPropagation()"\r
                    class="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                    </svg>\r
                  </button>\r
                  <button class="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded transition-all">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>\r
                    </svg>\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <!-- Location Stats -->\r
              <div class="flex items-center justify-between text-sm">\r
                <div class="flex items-center space-x-4">\r
                  <span class="text-gray-600">Assets: <span class="font-medium text-gray-900">{{subLocation.asset_summary?.asset_count || 0}}</span></span>\r
                </div>\r
                <div class="flex items-center space-x-4">\r
                  <span class="text-gray-600">Status: <span class="font-medium text-green-600">Active</span></span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Hierarchy View Section -->\r
            <div class="mt-8 pt-6 border-t border-gray-200">\r
              <h3 class="text-base font-semibold text-gray-900 mb-4">Hierarchy View</h3>\r
\r
              <!-- Parent Location -->\r
              <div class="bg-blue-100 rounded-lg p-3 mb-2">\r
                <div class="flex items-center space-x-3">\r
                  <div class="w-6 h-6 bg-blue-200 rounded flex items-center justify-center">\r
                    <svg class="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
                    </svg>\r
                  </div>\r
                  <div>\r
                    <h4 class="font-medium text-blue-800 text-sm">{{location.name}}</h4>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Sub-locations in hierarchy -->\r
              <div class="space-y-1">\r
                <div *ngFor="let subLocation of subLocations" class="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded transition-colors">\r
                  <!-- Tree connector line -->\r
                  <div class="flex items-center">\r
                    <div class="w-6 h-6 flex items-center justify-center">\r
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 2v20M2 12h20"></path>\r
                      </svg>\r
                    </div>\r
                  </div>\r
                  <div class="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">\r
                    <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
                    </svg>\r
                  </div>\r
                  <span class="text-sm text-gray-700">{{subLocation.name}}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Empty State -->\r
          <div *ngIf="!subLocationsLoading && subLocations.length === 0" class="text-center py-12">\r
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">\r
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
              </svg>\r
            </div>\r
            <h3 class="text-lg font-medium text-gray-900 mb-2">No Sub-locations</h3>\r
            <p class="text-gray-600 mb-4">Create sub-locations to organize your space more effectively.</p>\r
            <button\r
              (click)="addSubLocation()"\r
              class="flex items-center space-x-2 mx-auto px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">\r
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
              </svg>\r
              <span>Add First Sub-location</span>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Right Column -->\r
      <div class="space-y-6">\r
        <!-- Recent Activity -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center space-x-2 mb-4">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
            <h2 class="text-lg font-semibold text-gray-900">Recent Activity</h2>\r
          </div>\r
\r
          <div class="space-y-4">\r
            <div *ngFor="let activity of mockActivities" class="flex items-start space-x-3">\r
              <div [class]="'w-8 h-8 bg-' + getActivityColor(activity.type) + '-100 rounded-lg flex items-center justify-center'">\r
                <svg [class]="'w-4 h-4 text-' + getActivityColor(activity.type) + '-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getActivityIcon(activity.type)"></path>\r
                </svg>\r
              </div>\r
              <div class="flex-1">\r
                <h4 class="font-medium text-gray-900">{{activity.title}}</h4>\r
                <p class="text-sm text-gray-600">{{activity.description}}</p>\r
                <p class="text-xs text-gray-500 mt-1">{{activity.time}}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Location QR Code -->\r
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">\r
          <div class="flex items-center space-x-2 mb-4">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>\r
            </svg>\r
            <h2 class="text-lg font-semibold text-gray-900">Location QR Code</h2>\r
          </div>\r
\r
          <div class="text-center">\r
            <!-- QR Code Image -->\r
            <div class="w-32 h-32 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden">\r
              <img\r
                *ngIf="location.quick_chart_qr_url"\r
                [src]="location.quick_chart_qr_url"\r
                [alt]="'QR Code for ' + location.name"\r
                class="w-full h-full object-contain"\r
                (error)="onQRCodeError($event)">\r
\r
              <!-- Fallback placeholder if no QR code -->\r
              <div *ngIf="!location.quick_chart_qr_url" class="w-24 h-24 bg-gray-300 rounded flex items-center justify-center">\r
                <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>\r
                </svg>\r
              </div>\r
            </div>\r
\r
            <h4 class="font-medium text-gray-900 mb-2">{{location.name}}</h4>\r
            <p class="text-sm text-gray-600 mb-4">{{mockStats.totalAssets}}</p>\r
\r
            <div class="space-y-2">\r
              <button\r
                (click)="downloadQR()"\r
                class="w-full flex items-center justify-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>\r
                </svg>\r
                <span>Download</span>\r
              </button>\r
\r
              <button\r
                (click)="printLabel()"\r
                class="w-full flex items-center justify-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>\r
                </svg>\r
                <span>Print Label</span>\r
              </button>\r
            </div>\r
\r
            <p class="text-xs text-gray-500 mt-4">\r
              Scan this QR code to quickly access location details and view assets.\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  @if (!loading){\r
    <!-- Add Sub-location Modal -->\r
    <app-add-location-modal\r
      *ngIf="location"\r
      [isOpen]="showAddSubLocationModal"\r
      [parentLocation]="location"\r
      (closeModal)="closeAddSubLocationModal()"\r
      (locationCreated)="onSubLocationCreated($event)">\r
    </app-add-location-modal>\r
\r
    <!-- Edit Location Modal -->\r
    <app-edit-location-modal\r
      [isOpen]="showEditLocationModal"\r
      [location]="location"\r
      (closeModal)="closeEditLocationModal()"\r
      (locationUpdated)="onLocationUpdated($event)">\r
    </app-edit-location-modal>\r
\r
    <!-- Delete Confirmation Modal -->\r
    <app-delete-confirmation-modal\r
      [isOpen]="showDeleteConfirmationModal"\r
      [location]="location"\r
      (closeModal)="closeDeleteConfirmationModal()"\r
      (locationDeleted)="onLocationDeleted($event)">\r
    </app-delete-confirmation-modal>\r
  }\r
</div>\r
`, styles: ["/* src/app/locations/components/location-view/location-view.component.scss */\n.location-header {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n}\n.stats-card {\n  transition: all 0.2s ease-in-out;\n}\n.stats-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.activity-item {\n  transition: all 0.2s ease-in-out;\n}\n.activity-item:hover {\n  background-color: #f8fafc;\n  border-radius: 0.5rem;\n  padding: 0.75rem;\n  margin: -0.75rem;\n}\n.qr-code-container {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border: 2px dashed #e5e7eb;\n}\n.qr-code-container:hover {\n  border-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n}\n.action-button {\n  transition: all 0.15s ease-in-out;\n}\n.action-button:hover {\n  transform: scale(1.02);\n}\n.action-button:active {\n  transform: scale(0.98);\n}\n.back-button {\n  transition: all 0.2s ease-in-out;\n}\n.back-button:hover {\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n}\n.overview-section {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fafbfc 100%);\n}\n.utilization-bar {\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6 0%,\n      #1d4ed8 100%);\n  transition: width 0.3s ease-in-out;\n}\n.temperature-reading {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.status-indicator {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border-radius: 0.75rem;\n  padding: 1rem;\n}\n.empty-state {\n  background:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #f3f4f6 100%);\n  border: 2px dashed #d1d5db;\n  border-radius: 1rem;\n}\n.empty-state:hover {\n  border-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n}\n.loading-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .main-grid {\n    grid-template-columns: 1fr;\n  }\n  .location-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .action-buttons {\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n@media print {\n  .action-buttons,\n  .back-button {\n    display: none;\n  }\n  .qr-code-container {\n    border: 1px solid #000;\n    background: white;\n  }\n}\nbutton:focus,\na:focus {\n  outline: 2px solid #3b82f6;\n  outline-offset: 2px;\n}\n* {\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.activity-scroll {\n  scrollbar-width: thin;\n  scrollbar-color: #cbd5e1 #f1f5f9;\n}\n.activity-scroll::-webkit-scrollbar {\n  width: 6px;\n}\n.activity-scroll::-webkit-scrollbar-track {\n  background: #f1f5f9;\n  border-radius: 3px;\n}\n.activity-scroll::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.activity-scroll::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n/*# sourceMappingURL=location-view.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: LocationService }, { type: Location }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocationViewComponent, { className: "LocationViewComponent", filePath: "src/app/locations/components/location-view/location-view.component.ts", lineNumber: 18 });
})();

// src/app/locations/locations-routing.module.ts
var routes = [
  { path: "", component: LocationsComponent },
  { path: ":id", component: LocationViewComponent }
];
var LocationsRoutingModule = class _LocationsRoutingModule {
  static \u0275fac = function LocationsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocationsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LocationsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/locations/locations.module.ts
var LocationsModule = class _LocationsModule {
  static \u0275fac = function LocationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LocationsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LocationsRoutingModule,
    LocationsComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        LocationsRoutingModule,
        LocationsComponent
      ]
    }]
  }], null, null);
})();
export {
  LocationsModule
};
//# sourceMappingURL=chunk-TCEZ5CRF.js.map
