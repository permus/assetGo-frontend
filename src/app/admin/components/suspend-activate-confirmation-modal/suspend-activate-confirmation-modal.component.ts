import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-suspend-activate-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suspend-activate-confirmation-modal.component.html',
  styleUrl: './suspend-activate-confirmation-modal.component.scss',
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
export class SuspendActivateConfirmationModalComponent {
  @Input() isOpen = false;
  @Input() isActive = true;
  @Input() userName = '';
  @Input() isLoading = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmAction = new EventEmitter<boolean>();

  get actionText(): string {
    return this.isActive ? 'suspend' : 'activate';
  }

  get actionTitle(): string {
    return this.isActive ? 'Suspend User' : 'Activate User';
  }

  onConfirm(): void {
    if (this.isLoading) return;
    this.confirmAction.emit(!this.isActive);
  }

  onCancel(): void {
    if (this.isLoading) return;
    this.closeModal.emit();
  }
}
