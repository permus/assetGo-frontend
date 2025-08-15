import {
  environment
} from "./chunk-5YESG6NV.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-7F6J47MM.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IDZXZHOB.js";
import {
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

export {
  LocationService
};
//# sourceMappingURL=chunk-PGADV5CC.js.map
