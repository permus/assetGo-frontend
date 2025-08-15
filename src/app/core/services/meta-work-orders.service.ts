import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, shareReplay, map } from 'rxjs';
import { MetaItem } from '../types/work-order.types';

@Injectable({ providedIn: 'root' })
export class MetaWorkOrdersService {
  private http = inject(HttpClient);
  private base = `${environment.apiUrl}/meta/work-orders`;

  private status$?: Observable<MetaItem[]>;
  private priorities$?: Observable<MetaItem[]>;
  private categories$?: Observable<MetaItem[]>;

  getStatus(): Observable<MetaItem[]> {
    if (!this.status$) {
      this.status$ = this.http
        .get<any>(`${this.base}/status`)
        .pipe(
          map((res) => (Array.isArray(res) ? res : (res?.data as MetaItem[]) ?? [])),
          shareReplay({ bufferSize: 1, refCount: true })
        );
    }
    return this.status$;
  }

  getPriorities(): Observable<MetaItem[]> {
    if (!this.priorities$) {
      this.priorities$ = this.http
        .get<any>(`${this.base}/priorities`)
        .pipe(
          map((res) => (Array.isArray(res) ? res : (res?.data as MetaItem[]) ?? [])),
          shareReplay({ bufferSize: 1, refCount: true })
        );
    }
    return this.priorities$;
  }

  getCategories(): Observable<MetaItem[]> {
    if (!this.categories$) {
      this.categories$ = this.http
        .get<any>(`${this.base}/categories`)
        .pipe(
          map((res) => (Array.isArray(res) ? res : (res?.data as MetaItem[]) ?? [])),
          shareReplay({ bufferSize: 1, refCount: true })
        );
    }
    return this.categories$;
  }

  // Clear cache methods for when data needs to be refreshed
  clearStatusCache(): void {
    this.status$ = undefined;
  }

  clearPrioritiesCache(): void {
    this.priorities$ = undefined;
  }

  clearCategoriesCache(): void {
    this.categories$ = undefined;
  }

  clearAllCache(): void {
    this.clearStatusCache();
    this.clearPrioritiesCache();
    this.clearCategoriesCache();
  }
}
