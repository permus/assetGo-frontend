import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AdminAuthService, Admin } from '../../services/admin-auth.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ToastComponent } from '../../../shared/components/toast/toast.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, ToastComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  public currentAdmin: Admin | null = null;
  public showUserDropdown = false;
  sidebarOpen = true;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private adminAuthService: AdminAuthService
  ) {}

  ngOnInit(): void {
    // Subscribe to current admin changes
    this.adminAuthService.currentAdmin$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(admin => {
      this.currentAdmin = admin;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getAdminInitials(): string {
    if (!this.currentAdmin) return 'A';
    return this.currentAdmin.name.charAt(0).toUpperCase();
  }

  public toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
  }

  public signOut() {
    this.adminAuthService.logout().subscribe({
      next: () => {
        this.router.navigate(['/admin/login']);
      },
      error: () => {
        // Even if logout fails on server, clear local session
        this.router.navigate(['/admin/login']);
      }
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.showUserDropdown = false;
    }
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }
}
