import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService, User } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public currentUser: User | null = null;
  public showUserDropdown = false;

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