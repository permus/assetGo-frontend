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
    return this.http.get<{ success: boolean; data: FeatureFlagsMe }>(this.apiUrl)
      .pipe(
        map(res => res.data),
        tap(flags => this.me$.next(flags))
      );
  }

  getMe$(): Observable<FeatureFlagsMe> {
    return this.me$.asObservable();
  }
}


