import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map, catchError, tap, take } from 'rxjs/operators';
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
  private isLoadingUnreadCount = false;
  private loadUnreadCountTimeout: any = null;
  private unreadCountRequestInFlight = false;
  
  // Static flag to prevent multiple initializations across component recreations
  private static serviceInitialized = false;
  private static isConnecting = false;

  constructor() {
    // Don't load unread count in constructor - wait for user to be authenticated
    // This prevents requests before auth is ready
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
    // Prevent concurrent requests - return current value if request is in flight
    if (this.unreadCountRequestInFlight) {
      console.log('[NotificationService] Unread count request already in flight, returning cached value');
      return this.unreadCountSubject.asObservable().pipe(
        take(1),
        map(count => count)
      );
    }

    // Don't make request if not authenticated
    if (!this.authService.isAuthenticated()) {
      console.log('[NotificationService] Not authenticated, skipping unread count request');
      return of(0);
    }

    this.unreadCountRequestInFlight = true;
    console.log('[NotificationService] Fetching unread count from server');
    return this.http.get<UnreadCountResponse>(`${this.apiUrl}/unread-count`).pipe(
      map(response => {
        const count = response.data?.count || 0;
        this.unreadCountSubject.next(count);
        this.unreadCountRequestInFlight = false;
        console.log('[NotificationService] Unread count loaded:', count);
        return count;
      }),
      catchError(error => {
        console.error('[NotificationService] Failed to get unread count', error);
        this.unreadCountRequestInFlight = false;
        // Return Observable that emits 0
        return of(0);
      })
    );
  }

  /**
   * Load unread count (internal method) with debouncing to prevent request floods
   */
  private loadUnreadCount(): void {
    if (!this.authService.isAuthenticated() || this.isLoadingUnreadCount || this.unreadCountRequestInFlight) {
      console.log('[NotificationService] Skipping loadUnreadCount - already loading or request in flight');
      return;
    }

    // Clear any pending timeout
    if (this.loadUnreadCountTimeout) {
      clearTimeout(this.loadUnreadCountTimeout);
    }

    // Debounce: wait 1000ms before making the request
    // This prevents multiple rapid calls from flooding the server
    this.loadUnreadCountTimeout = setTimeout(() => {
      // Double-check we're still authenticated and not already loading
      if (!this.authService.isAuthenticated() || this.isLoadingUnreadCount || this.unreadCountRequestInFlight) {
        this.isLoadingUnreadCount = false;
        return;
      }
      
      this.isLoadingUnreadCount = true;
      this.getUnreadCount().subscribe({
        next: () => {
          this.isLoadingUnreadCount = false;
        },
        error: () => {
          this.isLoadingUnreadCount = false;
        }
      });
    }, 1000); // Increased debounce from 500ms to 1000ms for better flood prevention
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
    // Prevent multiple connection attempts using static flag
    if (NotificationService.serviceInitialized || NotificationService.isConnecting) {
      console.log('[NotificationService] Pusher already initialized or connecting, skipping');
      return;
    }
    
    // Prevent multiple connection attempts
    if (this.isConnected || !this.authService.isAuthenticated()) {
      console.log('[NotificationService] Already connected or not authenticated, skipping');
      return;
    }
    
    // Additional check: if Pusher instance exists but not connected, disconnect first
    if (this.pusher && !this.isConnected) {
      console.log('[NotificationService] Cleaning up existing Pusher instance');
      this.disconnectPusher();
    }

    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      console.log('[NotificationService] No current user, skipping Pusher connection');
      return;
    }

    // Mark as connecting to prevent concurrent connection attempts
    NotificationService.isConnecting = true;
    console.log('[NotificationService] Starting Pusher connection for user:', currentUser.id);

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
          enabledTransports: ['ws', 'wss'],
        });

        // Handle Pusher connection events
        this.pusher.connection.bind('connected', () => {
          console.log('[NotificationService] Pusher: Connected successfully');
          this.isConnected = true;
          NotificationService.serviceInitialized = true;
          NotificationService.isConnecting = false;
        });

        this.pusher.connection.bind('error', (error: any) => {
          console.error('[NotificationService] Pusher: Connection error', error);
          NotificationService.isConnecting = false;
        });

        // Subscribe to private user channel
        const channelName = `private-user.${currentUser.id}`;
        this.channel = this.pusher.subscribe(channelName);

        // Handle subscription events for debugging
        this.channel.bind('pusher:subscription_succeeded', () => {
          console.log('[NotificationService] Pusher: Successfully subscribed to', channelName);
        });

        this.channel.bind('pusher:subscription_error', (error: any) => {
          console.error('[NotificationService] Pusher: Subscription error', error);
          NotificationService.isConnecting = false;
        });

        // Listen for new notifications
        this.channel.bind('notification.created', (data: any) => {
          console.log('Pusher: Received notification.created', data);
          
          // Only process if this notification is for the current user
          if (data.userId && data.userId.toString() !== currentUser.id.toString()) {
            return;
          }
          
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
          // Reload unread count from server to get accurate count
          // Don't increment locally to avoid race conditions with multiple notifications
          this.loadUnreadCount();
        });

        // Listen for unread count updates
        this.channel.bind('unread-count.updated', (data: any) => {
          if (data.userId === currentUser.id) {
            this.unreadCountSubject.next(data.count || 0);
          }
        });

        // Mark as connected if not already set by connection event
        if (!this.isConnected) {
          this.isConnected = true;
          NotificationService.serviceInitialized = true;
          NotificationService.isConnecting = false;
        }
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
            enabledTransports: ['ws', 'wss'],
          });

          // Handle Pusher connection events
          this.pusher.connection.bind('connected', () => {
            console.log('[NotificationService] Pusher: Connected successfully (dynamic import)');
            this.isConnected = true;
            NotificationService.serviceInitialized = true;
            NotificationService.isConnecting = false;
          });

          this.pusher.connection.bind('error', (error: any) => {
            console.error('[NotificationService] Pusher: Connection error (dynamic import)', error);
            NotificationService.isConnecting = false;
          });

          const channelName = `private-user.${currentUser.id}`;
          this.channel = this.pusher.subscribe(channelName);

          // Handle subscription events for debugging
          this.channel.bind('pusher:subscription_succeeded', () => {
            console.log('[NotificationService] Pusher: Successfully subscribed to', channelName);
          });

          this.channel.bind('pusher:subscription_error', (error: any) => {
            console.error('[NotificationService] Pusher: Subscription error (dynamic import)', error);
            NotificationService.isConnecting = false;
          });

          this.channel.bind('notification.created', (data: any) => {
            console.log('Pusher: Received notification.created', data);
            
            // Only process if this notification is for the current user
            if (data.userId && data.userId.toString() !== currentUser.id.toString()) {
              return;
            }
            
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
            // Reload unread count from server to get accurate count
            // Don't increment locally to avoid race conditions with multiple notifications
            this.loadUnreadCount();
          });

          this.channel.bind('unread-count.updated', (data: any) => {
            if (data.userId === currentUser.id) {
              this.unreadCountSubject.next(data.count || 0);
            }
          });

          // Mark as connected if not already set by connection event
          if (!this.isConnected) {
            this.isConnected = true;
            NotificationService.serviceInitialized = true;
            NotificationService.isConnecting = false;
          }
        }).catch(error => {
          console.warn('[NotificationService] Pusher not available, using fallback polling', error);
          NotificationService.isConnecting = false;
          NotificationService.serviceInitialized = true; // Mark as initialized even if Pusher fails
          // Fallback: Load unread count periodically if Pusher fails
          this.startFallbackPolling();
        });
      }
    } catch (error) {
      console.warn('[NotificationService] Failed to connect Pusher, using fallback polling', error);
      NotificationService.isConnecting = false;
      NotificationService.serviceInitialized = true; // Mark as initialized even if Pusher fails
      // Fallback: Load unread count periodically if Pusher fails
      this.startFallbackPolling();
    }
  }

  /**
   * Disconnect Pusher connection
   * @param resetInitialization - If true, resets static flags to allow reconnection (e.g., on logout)
   */
  disconnectPusher(resetInitialization: boolean = false): void {
    console.log('[NotificationService] Disconnecting Pusher', { resetInitialization });
    
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
    
    // Clear any pending loadUnreadCount timeout
    if (this.loadUnreadCountTimeout) {
      clearTimeout(this.loadUnreadCountTimeout);
      this.loadUnreadCountTimeout = null;
    }
    this.isLoadingUnreadCount = false;
    this.unreadCountRequestInFlight = false;
    
    // Only reset static flags on explicit logout, not on component recreation
    if (resetInitialization) {
      console.log('[NotificationService] Resetting initialization flags for logout');
      NotificationService.serviceInitialized = false;
      NotificationService.isConnecting = false;
      this.unreadCountSubject.next(0);
    }
  }

  private pollingInterval: any = null;

  /**
   * Fallback polling mechanism if Pusher is not available
   */
  private startFallbackPolling(): void {
    if (this.pollingInterval) {
      return;
    }
    // Poll every 60 seconds as fallback (increased from 30 to reduce load)
    this.pollingInterval = setInterval(() => {
      if (this.authService.isAuthenticated()) {
        this.loadUnreadCount();
      }
    }, 60000);
  }

  private stopFallbackPolling(): void {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }
}

