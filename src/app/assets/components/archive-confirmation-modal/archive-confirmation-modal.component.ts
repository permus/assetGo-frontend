import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-archive-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive-confirmation-modal.component.html',
  styleUrl: './archive-confirmation-modal.component.scss',
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
export class ArchiveConfirmationModalComponent {
  @Input() isOpen = false;
  @Input() selectedCount = 0;
  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmArchive = new EventEmitter<void>();

  loading = false;

  onConfirm() {
    this.loading = true;
    this.confirmArchive.emit();
    
    // Stop loading after a short delay to allow the parent component to handle the archive
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  onCancel() {
    if (this.loading) return;
    this.closeModal.emit();
  }
}