import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamMember } from '../../services/team.service';

@Component({
  selector: 'app-team-delete-confirmation-modal',
  templateUrl: './team-delete-confirmation-modal.component.html',
  styleUrls: ['./team-delete-confirmation-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TeamDeleteConfirmationModalComponent {
  @Input() teamMember: TeamMember | null = null;
  @Output() cancelled = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<{ teamId: number; reason: string }>();

  deleteReason = '';

  onClose(): void {
    this.cancelled.emit();
  }

  onConfirmDelete(): void {
    if (this.teamMember) {
      this.confirmed.emit({
        teamId: this.teamMember.id,
        reason: this.deleteReason.trim()
      });
    }
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
