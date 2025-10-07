import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProfileService, UserProfile } from '../services/profile.service';
import { AuthService } from '../../core/services/auth.service';
import { ProfileFormComponent } from '../components/profile-form/profile-form.component';
import { PasswordChangeFormComponent } from '../components/password-change-form/password-change-form.component';
import { AvatarUploadComponent } from '../components/avatar-upload/avatar-upload.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProfileFormComponent, PasswordChangeFormComponent, AvatarUploadComponent],
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  userProfile: UserProfile | null = null;
  loading = false;
  error = '';
  successMessage = '';
  
  activeTab: 'profile' | 'password' = 'profile';

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadProfile(): void {
    this.loading = true;
    this.error = '';
    
    this.profileService.getProfile()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.userProfile = response.data.user;
          }
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load profile information';
          this.loading = false;
          console.error('Profile load error:', error);
        }
      });
  }

  getUserInitials(): string {
    if (!this.userProfile) return 'U';
    const firstInitial = this.userProfile.first_name?.charAt(0) || '';
    const lastInitial = this.userProfile.last_name?.charAt(0) || '';
    return (firstInitial + lastInitial).toUpperCase() || 'U';
  }

  onProfileUpdated(updatedProfile: UserProfile): void {
    this.userProfile = updatedProfile;
    
    // Update the current user in AuthService to reflect changes in header
    this.authService.updateCurrentUser(updatedProfile as any);
    
    this.showSuccessMessage('Profile updated successfully');
  }

  onPasswordChanged(): void {
    this.showSuccessMessage('Password changed successfully');
  }

  onAvatarUpdated(avatarUrl: string): void {
    this.showSuccessMessage('Avatar updated successfully');
  }

  private showSuccessMessage(message: string): void {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }

  setActiveTab(tab: 'profile' | 'password'): void {
    this.activeTab = tab;
    this.error = '';
    this.successMessage = '';
  }
}
