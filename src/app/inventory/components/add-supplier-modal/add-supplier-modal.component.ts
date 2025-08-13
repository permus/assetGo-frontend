import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InventoryAnalyticsService, CreateSupplierRequest, Supplier } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-add-supplier-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-supplier-modal.component.html',
  styleUrls: ['./add-supplier-modal.component.scss']
})
export class AddSupplierModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() supplierCreated = new EventEmitter<Supplier>();

  supplierForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryAnalyticsService
  ) {
    this.supplierForm = this.fb.group({
      supplier_code: ['SUP001', [Validators.required]],
      name: ['', [Validators.required]],
      contact_person: ['', [Validators.required]],
      tax_registration_number: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      alternate_phone: [''],
      website: [''],
      street_address: [''],
      city: [''],
      state: [''],
      postal_code: [''],
      payment_terms: ['Net 30'],
      currency: ['AED'],
      credit_limit: [0],
      delivery_lead_time: [7],
      notes: ['']
    });
  }

  generateSupplierCode(): void {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    const newCode = `SUP${timestamp}${random}`;
    this.supplierForm.patchValue({ supplier_code: newCode });
  }

  onSubmit(): void {
    if (this.supplierForm.valid) {
      this.loading = true;
      this.error = null;

      const formData = this.supplierForm.value;
      const supplierData: CreateSupplierRequest = {
        name: formData.name,
        contact_person: formData.contact_person,
        email: formData.email,
        phone: formData.phone,
        supplier_code: formData.supplier_code,
        tax_registration_number: formData.tax_registration_number,
        alternate_phone: formData.alternate_phone,
        website: formData.website,
        street_address: formData.street_address,
        city: formData.city,
        state: formData.state,
        postal_code: formData.postal_code,
        payment_terms: formData.payment_terms,
        currency: formData.currency,
        credit_limit: formData.credit_limit,
        delivery_lead_time: formData.delivery_lead_time,
        notes: formData.notes
      };

      this.inventoryService.createSupplier(supplierData).subscribe({
        next: (response) => {
          if (response.success) {
            this.supplierCreated.emit(response.data);
            this.closeModal.emit();
          } else {
            this.error = 'Failed to create supplier';
          }
          this.loading = false;
        },
        error: (err) => {
          console.error('Error creating supplier:', err);
          this.error = 'Error creating supplier. Please try again.';
          this.loading = false;
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched(): void {
    Object.keys(this.supplierForm.controls).forEach(key => {
      const control = this.supplierForm.get(key);
      control?.markAsTouched();
    });
  }

  onCancel(): void {
    this.closeModal.emit();
  }

  getFieldError(fieldName: string): string {
    const field = this.supplierForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) {
        return 'This field is required';
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['min']) {
        return `Minimum value is ${field.errors['min'].min}`;
      }
    }
    return '';
  }
}
