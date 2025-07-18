import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false
})
export class DashboardComponent {
  public currentUser: User | null = null;
  public showUserDropdown = false;

  stats = [
    { title: 'Total Assets', value: '24', subtitle: 'Live data', icon: 'info', color: 'blue' },
    { title: 'Active Assets', value: '23', subtitle: '95.8% operational', icon: 'check', color: 'green' },
    { title: 'Critical Alerts', value: '1', subtitle: '1 require immediate attention', icon: 'warning', color: 'orange' },
    { title: 'Monthly Investment', value: '$0', subtitle: 'No data available', icon: 'dollar', color: 'purple' },
    { title: 'Asset Utilization', value: '--', subtitle: 'No data available', icon: 'trending', color: 'blue' },
    { title: 'Scheduled Maintenance', value: '0', subtitle: 'Next 30 days', icon: 'clock', color: 'teal' },
    { title: 'Active Work Orders', value: '2', subtitle: '1 high priority', icon: 'clipboard', color: 'yellow' },
    { title: 'Compliance Score', value: '--', subtitle: 'No data available', icon: 'shield', color: 'green' }
  ];

  workOrders = [
    { title: 'Total Work Orders', value: 2 },
    { title: 'Scheduled This Week', value: 0 },
    { title: 'Overdue', value: 1 }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.getCurrentUser();
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.showUserDropdown = false;
    }
  }
}
