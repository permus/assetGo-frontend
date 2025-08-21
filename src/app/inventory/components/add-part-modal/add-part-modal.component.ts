import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CreatePartRequest } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-add-part-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-part-modal.component.html',
  styleUrls: ['./add-part-modal.component.scss']
})
export class AddPartModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() createPart = new EventEmitter<CreatePartRequest>();
  @Input() manageLoading = false;

  partForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.partForm = this.fb.group({
      part_number: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: [''],
      uom: ['each', [Validators.required]],
      unit_cost: [''],
      category_id: [''],
      reorder_point: [0],
      reorder_qty: [1],
      barcode: ['']
    });
  }

  onSubmit(): void {
    if (this.partForm.valid) {
      const formValue = this.partForm.value;

      // Convert empty strings to undefined for optional fields
      const partData: CreatePartRequest = {
        part_number: formValue.part_number,
        name: formValue.name,
        description: formValue.description || undefined,
        uom: formValue.uom,
        unit_cost: formValue.unit_cost ? parseFloat(formValue.unit_cost) : undefined,
        category_id: formValue.category_id ? parseInt(formValue.category_id) : undefined,
        reorder_point: formValue.reorder_point ? parseInt(formValue.reorder_point) : undefined,
        reorder_qty: formValue.reorder_qty ? parseInt(formValue.reorder_qty) : undefined,
        barcode: formValue.barcode || undefined
      };

      this.createPart.emit(partData);
    }
  }

  onCancel(): void {
    this.closeModal.emit();
  }

  getFieldError(fieldName: string): string {
    const field = this.partForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) {
        return 'This field is required';
      }
    }
    return '';
  }

  getStatusOptions(): string[] {
    return ['active', 'inactive', 'discontinued'];
  }

  getAbcClassOptions(): string[] {
    return ['A', 'B', 'C'];
  }
}
