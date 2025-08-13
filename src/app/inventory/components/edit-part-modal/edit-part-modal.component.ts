import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryPart, UpdatePartRequest } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-edit-part-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-part-modal.component.html',
  styleUrls: ['./edit-part-modal.component.scss']
})
export class EditPartModalComponent implements OnInit {
  @Input() part!: InventoryPart;
  @Output() closeModal = new EventEmitter<void>();
  @Output() updatePart = new EventEmitter<UpdatePartRequest>();

  editForm: UpdatePartRequest = {};

  ngOnInit(): void {
    // Initialize form with current part data
    this.editForm = {
      name: this.part.name,
      part_number: this.part.part_number,
      description: this.part.description,
      uom: this.part.uom,
      unit_cost: this.part.unit_cost,
      category_id: this.part.category_id,
      reorder_point: this.part.reorder_point,
      reorder_qty: this.part.reorder_qty,
      barcode: this.part.barcode,
      status: this.part.status,
      abc_class: this.part.abc_class
    };
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.updatePart.emit(this.editForm);
    }
  }

  onCancel(): void {
    this.closeModal.emit();
  }

  private isFormValid(): boolean {
    return !!(this.editForm.name && this.editForm.uom);
  }

  getStatusOptions(): string[] {
    return ['active', 'inactive', 'discontinued'];
  }

  getAbcClassOptions(): string[] {
    return ['A', 'B', 'C'];
  }
}
