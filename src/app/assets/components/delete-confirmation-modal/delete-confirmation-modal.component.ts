import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-delete-confirmation-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  @Input() selectedCount = 0;
  // Customizable labels so this modal can be reused across entities
  @Input() entitySingular = 'Asset';
  @Input() entityPlural = 'Assets';
  @Input() title: string | null = null;
  @Input() warningText: string | null = '⚠️ Warning: Only archived assets can be permanently deleted';
  // For showing specific item name instead of generic text
  @Input() itemName: string | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmDelete = new EventEmitter<string>();

  loading = false;
  deletionReason = '';

  onConfirm() {
    this.loading = true;
    this.confirmDelete.emit(this.deletionReason);
    
    // Stop loading after a short delay to allow the parent component to handle the delete
    setTimeout(() => {
      this.loading = false;
      this.deletionReason = '';
    }, 2000);
  }

  onCancel() {
    if (this.loading) return;
    this.deletionReason = '';
    this.closeModal.emit();
  }
}