import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ProfileService, UserProfile } from '../../services/profile.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-avatar-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.scss']
})
export class AvatarUploadComponent implements OnInit, OnDestroy {
  @Input() userProfile: UserProfile | null = null;
  @Output() avatarUpdated = new EventEmitter<string>();

  private destroy$ = new Subject<void>();
  
  loading = false;
  error = '';
  previewUrl: string | null = null;
  selectedFile: File | null = null;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Initialize preview with current avatar if exists
    if (this.userProfile?.avatar_url) {
      this.previewUrl = this.userProfile.avatar_url;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        this.error = 'Please select an image file';
        return;
      }

      // Validate file size (2MB)
      if (file.size > 2 * 1024 * 1024) {
        this.error = 'File size must be less than 2MB';
        return;
      }

      this.selectedFile = file;
      this.error = '';

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadAvatar(): void {
    if (!this.selectedFile) {
      this.error = 'Please select a file first';
      return;
    }

    this.loading = true;
    this.error = '';

    this.profileService.uploadAvatar(this.selectedFile)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            // Update the current user in AuthService
            if (this.userProfile) {
              const updatedProfile = {
                ...this.userProfile,
                avatar_url: response.data.avatar_url,
                avatar: response.data.avatar_path
              };
              this.authService.updateCurrentUser(updatedProfile as any);
              this.avatarUpdated.emit(response.data.avatar_url);
            }
            
            this.selectedFile = null;
            // Keep the preview URL as it's already set
          }
          this.loading = false;
        },
        error: (error) => {
          this.error = error.error?.message || 'Failed to upload avatar';
          this.loading = false;
        }
      });
  }

  removeAvatar(): void {
    this.previewUrl = null;
    this.selectedFile = null;
    this.error = '';
  }

  getUserInitials(): string {
    if (!this.userProfile) return 'U';
    const firstInitial = this.userProfile.first_name?.charAt(0) || '';
    const lastInitial = this.userProfile.last_name?.charAt(0) || '';
    return (firstInitial + lastInitial).toUpperCase() || 'U';
  }

  get hasFile(): boolean {
    return !!this.selectedFile;
  }

  get canUpload(): boolean {
    return this.hasFile && !this.loading;
  }
}
