import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-part-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-part-modal.component.html',
  styleUrls: ['./add-part-modal.component.scss']
})
export class AddPartModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() createPart = new EventEmitter<any>();

  partForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.partForm = this.fb.group({
      partNumber: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: [''],
      manufacturer: [''],
      category: [''],
      unitOfMeasure: ['each'],
      unitCost: [''],
      barcode: [''],
      minStock: [0],
      maxStock: [''],
      reorderPoint: [0],
      reorderQty: [1],
      notes: ['']
    });
  }

  onSubmit(): void {
    if (this.partForm.valid) {
      this.createPart.emit(this.partForm.value);
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
}
