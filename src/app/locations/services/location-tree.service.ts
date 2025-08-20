import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface LocationTreeNode {
  id: number;
  name: string;
  // On /locations-hierarchy, `type` is a full object; we do not rely on its shape for selection
  type?: any;
  children: LocationTreeNode[];
}

@Injectable({ providedIn: 'root' })
export class LocationTreeService {
  private cache$?: Observable<LocationTreeNode[]>;
  private readonly apiUrl = `${environment.apiUrl}/locations-hierarchy`;

  constructor(private http: HttpClient) {}

  getTree(): Observable<LocationTreeNode[]> {
    if (!this.cache$) {
      this.cache$ = this.http
        .get<{ success: boolean; data: { hierarchy: LocationTreeNode[] } }>(this.apiUrl)
        .pipe(map(res => res.data.hierarchy), shareReplay(1));
    }
    return this.cache$;
  }

  clearCache(): void {
    this.cache$ = undefined;
  }
}


