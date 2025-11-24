import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Prediction } from '../../shared/predictive-maintenance.interface';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';

@Component({
  selector: 'app-schedule-maintenance-modal',
  standalone: true,
  imports: [CommonModule, NumberFormatPipe],
  templateUrl: './schedule-maintenance-modal.component.html',
  styleUrls: ['./schedule-maintenance-modal.component.scss'],
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
export class ScheduleMaintenanceModalComponent {
  @Input() isOpen = false;
  @Input() prediction: Prediction | null = null;
  @Output() closeModal = new EventEmitter<void>();

  closeModalHandler(): void {
    this.isOpen = false;
    this.closeModal.emit();
  }
}


