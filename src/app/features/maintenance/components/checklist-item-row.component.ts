import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenancePlanChecklist } from '../models';

@Component({
  selector: 'app-checklist-item-row',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="border rounded-lg p-3 space-y-2">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <input class="border rounded px-3 py-2" [(ngModel)]="item.title" placeholder="Title" />
      <select class="border rounded px-3 py-2" [(ngModel)]="item.type">
        <option value="checkbox">checkbox</option>
        <option value="measurements">measurements</option>
        <option value="text_input">text_input</option>
        <option value="photo_capture">photo_capture</option>
        <option value="pass_fail">pass_fail</option>
      </select>
      <input type="number" class="border rounded px-3 py-2" [(ngModel)]="item.order" min="0" placeholder="Order" />
    </div>
    <textarea class="w-full border rounded px-3 py-2" [(ngModel)]="item.description" rows="2" placeholder="Description (optional)"></textarea>
    <div class="flex flex-wrap gap-4">
      <label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" [(ngModel)]="item.is_required" /> Required</label>
      <label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" [(ngModel)]="item.is_safety_critical" /> Safety Critical</label>
      <label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" [(ngModel)]="item.is_photo_required" /> Photo Required</label>
    </div>
    <div class="text-right">
      <button class="text-red-600 text-sm" (click)="remove.emit()">Remove</button>
    </div>
  </div>
  `
})
export class ChecklistItemRowComponent {
  @Input() item!: MaintenancePlanChecklist;
  @Output() remove = new EventEmitter<void>();
}


