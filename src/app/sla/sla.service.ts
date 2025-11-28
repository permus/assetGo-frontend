import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SlaDefinition, SlaDefinitionResponse, SlaDefinitionSingleResponse } from './models';

@Injectable({ providedIn: 'root' })
export class SlaService {
  private base = `${environment.apiUrl}/sla`;

  constructor(private http: HttpClient) {}

  listDefinitions(params?: Record<string, any>): Observable<SlaDefinitionResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(k => {
        if (params[k] !== undefined && params[k] !== null) {
          httpParams = httpParams.set(k, String(params[k]));
        }
      });
    }
    return this.http.get<SlaDefinitionResponse>(`${this.base}/definitions`, { params: httpParams });
  }

  getDefinition(id: number): Observable<SlaDefinitionSingleResponse> {
    return this.http.get<SlaDefinitionSingleResponse>(`${this.base}/definitions/${id}`);
  }

  createDefinition(payload: Partial<SlaDefinition>): Observable<SlaDefinitionSingleResponse> {
    return this.http.post<SlaDefinitionSingleResponse>(`${this.base}/definitions`, payload);
  }

  updateDefinition(id: number, payload: Partial<SlaDefinition>): Observable<SlaDefinitionSingleResponse> {
    return this.http.put<SlaDefinitionSingleResponse>(`${this.base}/definitions/${id}`, payload);
  }

  deleteDefinition(id: number): Observable<{ success: boolean; message?: string }> {
    return this.http.delete<{ success: boolean; message?: string }>(`${this.base}/definitions/${id}`);
  }

  toggleActive(id: number): Observable<SlaDefinitionSingleResponse> {
    return this.http.patch<SlaDefinitionSingleResponse>(`${this.base}/definitions/${id}/toggle-active`, {});
  }
}

