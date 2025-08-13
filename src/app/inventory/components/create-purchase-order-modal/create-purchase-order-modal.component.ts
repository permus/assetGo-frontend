import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-purchase-order-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-purchase-order-modal.component.html',
  styleUrls: ['./create-purchase-order-modal.component.scss']
})
export class CreatePurchaseOrderModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() createPurchaseOrder = new EventEmitter<any>();

  poForm: FormGroup;

  // Sample data for dropdowns
  suppliers = [
    { id: 1, name: 'Supplier A', contact: 'John Doe' },
    { id: 2, name: 'Supplier B', contact: 'Jane Smith' },
    { id: 3, name: 'Supplier C', contact: 'Bob Johnson' }
  ];

  items = [
    { id: 1, name: 'Item 1', description: 'Sample item 1', unitCost: 25.00 },
    { id: 2, name: 'Item 2', description: 'Sample item 2', unitCost: 15.50 },
    { id: 3, name: 'Item 3', description: 'Sample item 3', unitCost: 45.75 }
  ];

  constructor(private fb: FormBuilder) {
    this.poForm = this.fb.group({
      supplier: ['', [Validators.required]],
      orderDate: ['', [Validators.required]],
      expectedDelivery: ['', [Validators.required]],
      items: this.fb.array([]),
      notes: [''],
      priority: ['medium']
    });
  }

  onSubmit(): void {
    if (this.poForm.valid) {
      this.createPurchaseOrder.emit(this.poForm.value);
    }
  }

  onCancel(): void {
    this.closeModal.emit();
  }

  getFieldError(fieldName: string): string {
    const field = this.poForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) {
        return 'This field is required';
      }
    }
    return '';
  }

  getSelectedSupplierName(): string {
    const supplierId = this.poForm.get('supplier')?.value;
    const supplier = this.suppliers.find(s => s.id === supplierId);
    return supplier ? supplier.name : '';
  }
}
