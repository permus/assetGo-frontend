import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { LocationService, Location } from '../../services/location.service';

@Component({
  selector: 'app-delete-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrl: './delete-confirmation-modal.component.scss',
  animations: [
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'scale(0.7) translateY(-50px)' 
        }),
        animate('200ms ease-out', style({ 
          opacity: 1, 
          transform: 'scale(1) translateY(0)' 
        }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ 
          opacity: 0, 
          transform: 'scale(0.7) translateY(-50px)' 
        }))
      ])
    ])
  ]
})
export class DeleteConfirmationModalComponent {
  @Input() isOpen = false;
  @Input() location: Location | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() locationDeleted = new EventEmitter<Location>();

  loading = false;
  errorMessage = '';

  constructor(private locationService: LocationService) {}

  confirmDelete() {
    if (!this.location || this.loading) return;

    this.loading = true;
    this.errorMessage = '';

    this.locationService.deleteLocation(this.location.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.locationDeleted.emit(this.location!);
          this.closeModalHandler();
        } else {
          this.errorMessage = response.message || 'Failed to delete location';
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'An error occurred while deleting the location';
        this.loading = false;
      }
    });
  }

  closeModalHandler() {
    if (this.loading) return;
    
    this.isOpen = false;
    this.closeModal.emit();
    this.resetModal();
  }

  private resetModal() {
    this.errorMessage = '';
    this.loading = false;
  }
}