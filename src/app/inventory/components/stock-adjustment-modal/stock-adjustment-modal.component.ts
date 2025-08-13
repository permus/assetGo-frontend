import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-adjustment-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stock-adjustment-modal.component.html',
  styleUrls: ['./stock-adjustment-modal.component.scss']
})
export class StockAdjustmentModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() adjustStock = new EventEmitter<any>();

  adjustmentForm: FormGroup;

  // Sample data for dropdowns
  parts = [
    { id: 1, name: 'part 1', description: 'e2 • ews' },
    { id: 2, name: 'part 2', description: 'Sample part' }
  ];

  locations = [
    { id: 1, name: 'Toilet' },
    { id: 2, name: 'Kitchen' },
    { id: 3, name: 'Office' }
  ];

  reasons = [
    { id: 1, name: 'Damaged' },
    { id: 2, name: 'Lost' },
    { id: 3, name: 'Theft' },
    { id: 4, name: 'Adjustment' },
    { id: 5, name: 'Transfer' }
  ];

  constructor(private fb: FormBuilder) {
    this.adjustmentForm = this.fb.group({
      part: ['', [Validators.required]],
      location: ['', [Validators.required]],
      adjustmentQuantity: [0, [Validators.required]],
      reason: ['', [Validators.required]],
      notes: ['']
    });
  }

  onSubmit(): void {
    if (this.adjustmentForm.valid) {
      this.adjustStock.emit(this.adjustmentForm.value);
    }
  }

  onCancel(): void {
    this.closeModal.emit();
  }

  getFieldError(fieldName: string): string {
    const field = this.adjustmentForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) {
        return 'This field is required';
      }
    }
    return '';
  }

  getSelectedPartName(): string {
    const partId = this.adjustmentForm.get('part')?.value;
    const part = this.parts.find(p => p.id === partId);
    return part ? part.name : '';
  }

  getSelectedLocationName(): string {
    const locationId = this.adjustmentForm.get('location')?.value;
    const location = this.locations.find(l => l.id === locationId);
    return location ? location.name : '';
  }

  getSelectedReasonName(): string {
    const reasonId = this.adjustmentForm.get('reason')?.value;
    const reason = this.reasons.find(r => r.id === reasonId);
    return reason ? reason.name : '';
  }
}
