import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-restore-confirmation-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restore-confirmation-modal.component.html',
  styleUrl: './restore-confirmation-modal.component.scss',
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
export class RestoreConfirmationModalComponent {
  @Input() isOpen = false;
  @Input() selectedCount = 0;
  @Input() assetName = '';
  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmRestore = new EventEmitter<string>();

  loading = false;
  restoreReason = '';

  onConfirm() {
    this.loading = true;
    this.confirmRestore.emit(this.restoreReason);
    
    // Stop loading after a short delay to allow the parent component to handle the restore
    setTimeout(() => {
      this.loading = false;
      this.restoreReason = '';
    }, 2000);
  }

  onCancel() {
    if (this.loading) return;
    this.restoreReason = '';
    this.closeModal.emit();
  }
}