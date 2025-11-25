import {Component, computed, effect, inject, signal, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet, RouterModule} from '@angular/router';
import {AuthService, User} from '../../../core/services/auth.service';
import {Router} from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';
import { NotificationDropdownComponent } from '../notification-dropdown/notification-dropdown.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {HostListener} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, NotificationDropdownComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, OnDestroy {
  public currentUser: User | null = null;
  public showUserDropdown = false;
  sidebarOpen = true;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    console.log('[LayoutComponent] Constructor called');
  }

  ngOnInit(): void {
    console.log('[LayoutComponent] ngOnInit called');
    
    // Subscribe to current user changes
    this.authService.currentUser$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      this.currentUser = user;
      // Connect to Pusher when user is available and load initial unread count
      // The NotificationService handles its own initialization state to prevent duplicates
      if (user) {
        console.log('[LayoutComponent] User authenticated, initializing notifications');
        // Load initial unread count once when user is authenticated
        this.notificationService.getUnreadCount().pipe(
          takeUntil(this.destroy$)
        ).subscribe();
        // Then connect to Pusher for real-time updates
        // Service will prevent duplicate connections via static flags
        this.notificationService.connectPusher();
      } else if (!user) {
        // User logged out - reset everything
        console.log('[LayoutComponent] User logged out, disconnecting notifications');
        this.notificationService.disconnectPusher(true); // Pass true to reset initialization flags
      }
    });
  }

  ngOnDestroy(): void {
    console.log('[LayoutComponent] ngOnDestroy called');
    // Don't reset initialization flags on component destroy (page refresh)
    // Only disconnect without resetting, allowing reconnection on component recreation
    this.notificationService.disconnectPusher(false);
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getUserInitials(): string {
    if (!this.currentUser) return 'U';
    const firstInitial = this.currentUser.first_name?.charAt(0) || '';
    const lastInitial = this.currentUser.last_name?.charAt(0) || '';
    return (firstInitial + lastInitial).toUpperCase() || 'U';
  }

  public toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
  }

  public signOut() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        // Even if logout fails on server, clear local session
        this.router.navigate(['/login']);
      }
    });
  }


  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.showUserDropdown = false;
    }
  }

}
