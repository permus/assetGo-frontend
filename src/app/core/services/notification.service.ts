import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

export interface Notification {
  id: string;
  companyId: string;
  userId: string;
  type: 'asset' | 'location' | 'work_order' | 'team' | 'maintenance' | 'inventory' | 'report' | 'settings';
  action: string;
  title: string;
  message: string;
  data?: any;
  read: boolean;
  readAt?: string;
  createdBy?: string;
  createdAt: string;
  timeAgo: string;
}

export interface NotificationResponse {
  success: boolean;
  data: {
    notifications: Notification[];
    pagination: {
      current_page: number;
      last_page: number;
      per_page: number;
      total: number;
      from: number | null;
      to: number | null;
    };
  };
}

export interface UnreadCountResponse {
  success: boolean;
  data: {
    count: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private apiUrl = `${environment.apiUrl}/notifications`;
  
  private unreadCountSubject = new BehaviorSubject<number>(0);
  public unreadCount$ = this.unreadCountSubject.asObservable();
  
  private newNotificationSubject = new Subject<Notification>();
  public newNotification$ = this.newNotificationSubject.asObservable();
  
  private pusher: any = null;
  private channel: any = null;
  private isConnected = false;

  constructor() {
    // Load initial unread count when service is created
    this.loadUnreadCount();
  }

  /**
   * Get notifications with pagination and filtering
   */
  getNotifications(params?: {
    page?: number;
    perPage?: number;
    read?: boolean;
    type?: string;
  }): Observable<NotificationResponse> {
    let httpParams = new HttpParams();
    
    if (params?.page) {
      httpParams = httpParams.set('page', params.page.toString());
    }
    if (params?.perPage) {
      httpParams = httpParams.set('per_page', params.perPage.toString());
    }
    if (params?.read !== undefined) {
      httpParams = httpParams.set('read', params.read.toString());
    }
    if (params?.type) {
      httpParams = httpParams.set('type', params.type);
    }

    return this.http.get<NotificationResponse>(this.apiUrl, { params: httpParams }).pipe(
      catchError(error => {
        console.error('Failed to fetch notifications', error);
        throw error;
      })
    );
  }

  /**
   * Get unread count
   */
  getUnreadCount(): Observable<number> {
    return this.http.get<UnreadCountResponse>(`${this.apiUrl}/unread-count`).pipe(
      map(response => {
        const count = response.data?.count || 0;
        this.unreadCountSubject.next(count);
        return count;
      }),
      catchError(error => {
        console.error('Failed to get unread count', error);
        return [0];
      })
    );
  }

  /**
   * Load unread count (internal method)
   */
  private loadUnreadCount(): void {
    if (this.authService.isAuthenticated()) {
      this.getUnreadCount().subscribe();
    }
  }

  /**
   * Mark notification as read
   */
  markAsRead(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/read`, {}).pipe(
      tap(() => {
        // Reload unread count after marking as read
        this.loadUnreadCount();
      }),
      catchError(error => {
        console.error('Failed to mark notification as read', error);
        throw error;
      })
    );
  }

  /**
   * Mark all notifications as read
   */
  markAllAsRead(): Observable<any> {
    return this.http.patch(`${this.apiUrl}/read-all`, {}).pipe(
      tap(() => {
        // Reload unread count after marking all as read
        this.loadUnreadCount();
      }),
      catchError(error => {
        console.error('Failed to mark all notifications as read', error);
        throw error;
      })
    );
  }

  /**
   * Delete a notification
   */
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        // Reload unread count after deletion
        this.loadUnreadCount();
      }),
      catchError(error => {
        console.error('Failed to delete notification', error);
        throw error;
      })
    );
  }

  /**
   * Delete all read notifications
   */
  deleteAllRead(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/read`).pipe(
      tap(() => {
        // Reload unread count after deletion
        this.loadUnreadCount();
      }),
      catchError(error => {
        console.error('Failed to delete read notifications', error);
        throw error;
      })
    );
  }

  /**
   * Connect to Pusher and subscribe to user channel
   * Note: Requires pusher-js package. Install with: npm install pusher-js
   */
  connectPusher(): void {
    if (this.isConnected || !this.authService.isAuthenticated()) {
      return;
    }

    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      return;
    }

    try {
      // Dynamically import Pusher (requires pusher-js package)
      // Check if Pusher is available
      if (typeof window !== 'undefined' && (window as any).Pusher) {
        const Pusher = (window as any).Pusher;
        
        this.pusher = new Pusher(environment.PUSHER_APP_KEY, {
          cluster: environment.PUSHER_APP_CLUSTER,
          authEndpoint: `${environment.apiUrl}/broadcasting/auth`,
          auth: {
            headers: {
              Authorization: `Bearer ${this.authService.getToken()}`,
            },
          },
        });

        // Subscribe to private user channel
        const channelName = `private-user.${currentUser.id}`;
        this.channel = this.pusher.subscribe(channelName);

        // Listen for new notifications
        this.channel.bind('notification.created', (data: any) => {
          const notification: Notification = {
            id: data.id.toString(),
            companyId: data.companyId?.toString() || '',
            userId: data.userId?.toString() || '',
            type: data.type,
            action: data.action,
            title: data.title,
            message: data.message,
            data: data.data,
            read: data.read || false,
            readAt: data.readAt,
            createdAt: data.createdAt,
            timeAgo: 'just now',
          };
          this.newNotificationSubject.next(notification);
          this.loadUnreadCount();
        });

        // Listen for unread count updates
        this.channel.bind('unread-count.updated', (data: any) => {
          if (data.userId === currentUser.id) {
            this.unreadCountSubject.next(data.count || 0);
          }
        });

        this.isConnected = true;
      } else {
        // Try dynamic import as fallback
        import('pusher-js').then((PusherModule) => {
          const PusherClass = PusherModule.default || (PusherModule as any).Pusher;
          
          this.pusher = new PusherClass(environment.PUSHER_APP_KEY, {
            cluster: environment.PUSHER_APP_CLUSTER,
            authEndpoint: `${environment.apiUrl}/broadcasting/auth`,
            auth: {
              headers: {
                Authorization: `Bearer ${this.authService.getToken()}`,
              },
            },
          });

          const channelName = `private-user.${currentUser.id}`;
          this.channel = this.pusher.subscribe(channelName);

          this.channel.bind('notification.created', (data: any) => {
            const notification: Notification = {
              id: data.id.toString(),
              companyId: data.companyId?.toString() || '',
              userId: data.userId?.toString() || '',
              type: data.type,
              action: data.action,
              title: data.title,
              message: data.message,
              data: data.data,
              read: data.read || false,
              readAt: data.readAt,
              createdAt: data.createdAt,
              timeAgo: 'just now',
            };
            this.newNotificationSubject.next(notification);
            this.loadUnreadCount();
          });

          this.channel.bind('unread-count.updated', (data: any) => {
            if (data.userId === currentUser.id) {
              this.unreadCountSubject.next(data.count || 0);
            }
          });

          this.isConnected = true;
        }).catch(error => {
          console.warn('Pusher not available, using fallback polling', error);
          // Fallback: Load unread count periodically if Pusher fails
          this.startFallbackPolling();
        });
      }
    } catch (error) {
      console.warn('Failed to connect Pusher, using fallback polling', error);
      // Fallback: Load unread count periodically if Pusher fails
      this.startFallbackPolling();
    }
  }

  /**
   * Disconnect Pusher connection
   */
  disconnectPusher(): void {
    if (this.channel) {
      this.channel.unbind_all();
      this.channel = null;
    }
    if (this.pusher) {
      this.pusher.disconnect();
      this.pusher = null;
    }
    this.isConnected = false;
    this.stopFallbackPolling();
  }

  private pollingInterval: any = null;

  /**
   * Fallback polling mechanism if Pusher is not available
   */
  private startFallbackPolling(): void {
    if (this.pollingInterval) {
      return;
    }
    // Poll every 30 seconds as fallback
    this.pollingInterval = setInterval(() => {
      this.loadUnreadCount();
    }, 30000);
  }

  private stopFallbackPolling(): void {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }
}

