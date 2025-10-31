import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { NotificationService, Notification } from '../../../core/services/notification.service';

@Component({
  selector: 'app-notification-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-dropdown.component.html',
  styleUrl: './notification-dropdown.component.scss'
})
export class NotificationDropdownComponent implements OnInit, OnDestroy {
  showDropdown = false;
  notifications: Notification[] = [];
  unreadCount = 0;
  isLoading = false;
  currentPage = 1;
  lastPage = 1;
  hasMore = false;
  private destroy$ = new Subject<void>();

  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to unread count updates
    this.notificationService.unreadCount$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(count => {
      this.unreadCount = count;
    });

    // Subscribe to new notifications from Pusher
    this.notificationService.newNotification$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(notification => {
      // Add new notification to the top of the list
      this.notifications.unshift(notification);
      // Keep only first 50 notifications
      if (this.notifications.length > 50) {
        this.notifications = this.notifications.slice(0, 50);
      }
    });

    // Load initial notifications when dropdown is opened
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
    if (this.showDropdown && this.notifications.length === 0) {
      this.loadNotifications();
    }
  }

  loadNotifications(page: number = 1): void {
    if (this.isLoading) return;

    this.isLoading = true;
    this.notificationService.getNotifications({
      page,
      perPage: 20
    }).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          if (page === 1) {
            this.notifications = response.data.notifications;
          } else {
            this.notifications = [...this.notifications, ...response.data.notifications];
          }
          this.currentPage = response.data.pagination.current_page;
          this.lastPage = response.data.pagination.last_page;
          this.hasMore = this.currentPage < this.lastPage;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  loadMore(): void {
    if (this.hasMore && !this.isLoading) {
      this.loadNotifications(this.currentPage + 1);
    }
  }

  markAsRead(notification: Notification, event: Event): void {
    event.stopPropagation();
    if (notification.read) return;

    this.notificationService.markAsRead(notification.id).subscribe({
      next: () => {
        notification.read = true;
        notification.readAt = new Date().toISOString();
      },
      error: () => {
        // Handle error silently or show toast
      }
    });
  }

  markAllAsRead(): void {
    this.notificationService.markAllAsRead().subscribe({
      next: () => {
        this.notifications.forEach(n => {
          n.read = true;
          n.readAt = new Date().toISOString();
        });
      },
      error: () => {
        // Handle error silently or show toast
      }
    });
  }

  deleteNotification(notification: Notification, event: Event): void {
    event.stopPropagation();
    this.notificationService.delete(notification.id).subscribe({
      next: () => {
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
      },
      error: () => {
        // Handle error silently or show toast
      }
    });
  }

  onNotificationClick(notification: Notification): void {
    // Mark as read when clicked
    if (!notification.read) {
      this.markAsRead(notification, new Event('click'));
    }

    // Navigate based on notification type and data
    if (notification.data) {
      if (notification.type === 'asset' && notification.data.assetId) {
        this.router.navigate(['/assets', notification.data.assetId]);
      } else if (notification.type === 'work_order' && notification.data.workOrderId) {
        this.router.navigate(['/work-orders', notification.data.workOrderId]);
      } else if (notification.type === 'location' && notification.data.locationId) {
        this.router.navigate(['/locations', notification.data.locationId]);
      }
    }

    this.showDropdown = false;
  }

  getNotificationIcon(type: string): string {
    const icons: Record<string, string> = {
      asset: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      location: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      work_order: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      team: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      maintenance: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      inventory: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      report: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    };
    return icons[type] || icons['settings'];
  }

  getNotificationColor(type: string): string {
    const colors: Record<string, string> = {
      asset: 'text-blue-600 bg-blue-50',
      location: 'text-green-600 bg-green-50',
      work_order: 'text-orange-600 bg-orange-50',
      team: 'text-purple-600 bg-purple-50',
      maintenance: 'text-teal-600 bg-teal-50',
      inventory: 'text-indigo-600 bg-indigo-50',
      report: 'text-gray-600 bg-gray-50',
      settings: 'text-gray-600 bg-gray-50',
    };
    return colors[type] || colors['settings'];
  }

  groupNotificationsByDate(): { label: string; notifications: Notification[] }[] {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const thisWeek = new Date(today);
    thisWeek.setDate(thisWeek.getDate() - 7);

    const groups: { label: string; notifications: Notification[] }[] = [
      { label: 'Today', notifications: [] },
      { label: 'Yesterday', notifications: [] },
      { label: 'This Week', notifications: [] },
      { label: 'Older', notifications: [] },
    ];

    this.notifications.forEach(notification => {
      const notifDate = new Date(notification.createdAt);
      
      if (notifDate >= today) {
        groups[0].notifications.push(notification);
      } else if (notifDate >= yesterday) {
        groups[1].notifications.push(notification);
      } else if (notifDate >= thisWeek) {
        groups[2].notifications.push(notification);
      } else {
        groups[3].notifications.push(notification);
      }
    });

    return groups.filter(group => group.notifications.length > 0);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.notification-dropdown-container')) {
      this.showDropdown = false;
    }
  }
}
