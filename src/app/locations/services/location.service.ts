import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface LocationType {
  id: number;
  name: string;
  category: string;
  hierarchy_level: number;
  icon: string;
  suggestions: any[];
  created_at: string;
  updated_at: string;
  description?: string;
}

export interface Location {
  id: number;
  name: string;
  slug?: string;
  address?: string;
  description?: string;
  location_type_id: number;
  parent_id?: number;
  company_id: number;
  user_id: number;
  hierarchy_level: number;
  latitude?: number;
  longitude?: number;
  qr_code_path?: string;
  qr_code_url?: string;
  quick_chart_qr_url?: string;
  created_at: string;
  updated_at: string;
  type: LocationType;
  parent?: Location;
  children?: Location[];
  creator?: any;
  asset_summary?: {
    asset_count: number;
    total_value: number;
  };
}

export interface LocationsResponse {
  success: boolean;
  data: {
    locations: Location[];
    pagination: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
      from: number;
      to: number;
    };
    filters: {
      search?: string;
      type_id?: number;
      parent_id?: number;
    };
  };
}

export interface LocationResponse {
  success: boolean;
  data: {
    location: Location;
    ancestors?: Location[];
    children_count?: number;
    descendants_count?: number;
  };
  message?: string;
}

export interface LocationTypesResponse {
  success: boolean;
  data: {
    types: LocationType[];
  };
}

export interface HierarchyResponse {
  success: boolean;
  data: {
    hierarchy: any[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = `${environment.apiUrl}/locations`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): { headers: { [header: string]: string } } {
    const token = localStorage.getItem('token');
    return {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    };
  }

  // Get locations with filtering and pagination
  getLocations(params: {
    search?: string;
    type_id?: number;
    parent_id?: number;
    per_page?: number;
    page?: number;
  } = {}): Observable<LocationsResponse> {
    let httpParams = new HttpParams();
    
    Object.keys(params).forEach(key => {
      const value = params[key as keyof typeof params];
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, value.toString());
      }
    });

    return this.http.get<LocationsResponse>(this.apiUrl, { 
      params: httpParams,
      ...this.getAuthHeaders()
    });
  }

  // Get single location
  getLocation(id: number): Observable<LocationResponse> {
    return this.http.get<LocationResponse>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Create location
  createLocation(location: Partial<Location>): Observable<LocationResponse> {
    return this.http.post<LocationResponse>(this.apiUrl, location, this.getAuthHeaders());
  }

  // Update location
  updateLocation(id: number, location: Partial<Location>): Observable<LocationResponse> {
    return this.http.put<LocationResponse>(`${this.apiUrl}/${id}`, location, this.getAuthHeaders());
  }

  // Delete location
  deleteLocation(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Bulk create locations
  bulkCreateLocations(locations: Partial<Location>[]): Observable<LocationResponse> {
    return this.http.post<LocationResponse>(`${this.apiUrl}/bulk`, { locations }, this.getAuthHeaders());
  }

  // Move locations
  moveLocations(locationIds: number[], newParentId?: number | null): Observable<any> {
    return this.http.post(`${this.apiUrl}/move`, {
      location_ids: locationIds,
      new_parent_id: newParentId
    }, this.getAuthHeaders());
  }

  // Get QR code
  getQRCode(id: number, action: string = 'download', format: string = 'png'): Observable<Blob> {
    const params = new HttpParams()
      .set('action', action)
      .set('format', format);
    
    return this.http.get(`${this.apiUrl}/${id}/qr`, {
      params,
      responseType: 'blob',
      ...this.getAuthHeaders()
    });
  }

  // Get location types
  getLocationTypes(hierarchyLevel?: number): Observable<LocationTypesResponse> {
    let params = new HttpParams();
    if (hierarchyLevel !== undefined) {
      params = params.set('hierarchy_level', hierarchyLevel.toString());
    }
    
    return this.http.get<LocationTypesResponse>(`${environment.apiUrl}/location-types`, { 
      params,
      ...this.getAuthHeaders()
    });
  }

  // Get hierarchy
  getHierarchy(): Observable<HierarchyResponse> {
    return this.http.get<HierarchyResponse>(`${environment.apiUrl}/locations-hierarchy`, this.getAuthHeaders());
  }

  // Get possible parents
  getPossibleParents(typeId: number, locationId?: number): Observable<any> {
    let params = new HttpParams().set('type_id', typeId.toString());
    if (locationId) {
      params = params.set('location_id', locationId.toString());
    }
    
    const url = locationId 
      ? `${environment.apiUrl}/locations/possible-parents/${locationId}`
      : `${environment.apiUrl}/locations/possible-parents`;
    
    return this.http.get(url, { 
      params,
      ...this.getAuthHeaders()
    });
  }
}