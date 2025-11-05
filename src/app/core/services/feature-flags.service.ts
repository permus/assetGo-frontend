import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface FeatureFlagsMe {
  role_id: number | null;
  has_location_access: boolean;
}

@Injectable({ providedIn: 'root' })
export class FeatureFlagsService {
  private readonly me$ = new ReplaySubject<FeatureFlagsMe>(1);
  private readonly apiUrl = `${environment.apiUrl}/me/features`;

  constructor(private http: HttpClient) {}

  fetchMe(): Observable<FeatureFlagsMe> {
    // Check cache first
    const cached = localStorage.getItem('cached_feature_flags');
    if (cached) {
      try {
        const cachedData = JSON.parse(cached);
        const flags = cachedData.data;
        this.me$.next(flags);
        return new Observable<FeatureFlagsMe>(observer => {
          observer.next(flags);
          observer.complete();
        });
      } catch (error) {
        console.error('Failed to parse cached feature flags:', error);
        localStorage.removeItem('cached_feature_flags');
      }
    }

    // No cache, fetch from server and cache it
    return this.http.get<{ success: boolean; data: FeatureFlagsMe }>(this.apiUrl)
      .pipe(
        map(res => res.data),
        tap(flags => {
          this.me$.next(flags);
          // Cache the response
          localStorage.setItem('cached_feature_flags', JSON.stringify({ success: true, data: flags }));
        })
      );
  }

  getMe$(): Observable<FeatureFlagsMe> {
    return this.me$.asObservable();
  }

  clearCache(): void {
    localStorage.removeItem('cached_feature_flags');
  }
}


