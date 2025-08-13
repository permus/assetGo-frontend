import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { InventoryAnalyticsService, InventoryPart, CreatePurchaseOrderRequest, Supplier } from '../../../core/services/inventory-analytics.service';
import { AddSupplierModalComponent } from '../add-supplier-modal/add-supplier-modal.component';

@Component({
  selector: 'app-create-purchase-order-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddSupplierModalComponent],
  templateUrl: './create-purchase-order-modal.component.html',
  styleUrls: ['./create-purchase-order-modal.component.scss']
})
export class CreatePurchaseOrderModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Output() createPurchaseOrder = new EventEmitter<CreatePurchaseOrderRequest>();

  poForm: FormGroup;
  loading = false;
  error: string | null = null;

  // Data for dropdowns
  suppliers: Supplier[] = [];
  parts: InventoryPart[] = [];

  // Add Supplier Modal
  showAddSupplierModal = false;

  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryAnalyticsService
  ) {
    this.poForm = this.fb.group({
      supplier_id: [''],
      vendor_name: ['', [Validators.required]],
      vendor_contact: ['', [Validators.required]],
      order_date: ['', [Validators.required]],
      expected_date: ['', [Validators.required]],
      tax_rate: [0],
      terms: [''],
      notes: [''],
      items: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadSuppliers();
    this.loadParts();
    this.addItem(); // Add first item by default
  }

  loadSuppliers(): void {
    this.inventoryService.getSuppliers('', 1000, 1).subscribe({
      next: (response) => {
        if (response.success) {
          this.suppliers = response.data.data;
        }
      },
      error: (err) => {
        console.error('Error loading suppliers:', err);
        // Fallback to mock data if API fails
        this.suppliers = [
          { id: 1, company_id: 1, supplier_code: 'SUP001', name: 'Supplier A', contact_person: 'John Doe', email: 'john@suppliera.com', phone: '+1234567890', currency: 'USD', created_at: '', updated_at: '' },
          { id: 2, company_id: 1, supplier_code: 'SUP002', name: 'Supplier B', contact_person: 'Jane Smith', email: 'jane@supplierb.com', phone: '+1234567891', currency: 'USD', created_at: '', updated_at: '' },
          { id: 3, company_id: 1, supplier_code: 'SUP003', name: 'Supplier C', contact_person: 'Bob Johnson', email: 'bob@supplierc.com', phone: '+1234567892', currency: 'USD', created_at: '', updated_at: '' }
        ];
      }
    });
  }

  loadParts(): void {
    this.inventoryService.getPartsCatalog('', 'active', 1, 1000).subscribe({
      next: (response) => {
        if (response.success) {
          this.parts = response.data.data;
        }
      },
      error: (err) => {
        console.error('Error loading parts:', err);
      }
    });
  }

  get itemsArray(): FormArray {
    return this.poForm.get('items') as FormArray;
  }

  addItem(): void {
    const itemGroup = this.fb.group({
      part_id: [''],
      part_number: ['', [Validators.required]],
      description: ['', [Validators.required]],
      qty: ['', [Validators.required, Validators.min(1)]],
      unit_cost: ['', [Validators.required, Validators.min(0.01)]]
    });

    this.itemsArray.push(itemGroup);
  }

  removeItem(index: number): void {
    if (this.itemsArray.length > 1) {
      this.itemsArray.removeAt(index);
    }
  }

  getItemPartName(partId: number): string {
    const part = this.parts.find(p => p.id === partId);
    return part ? part.name : 'Unknown Part';
  }

  calculateItemTotal(index: number): number {
    const item = this.itemsArray.at(index);
    const qty = item.get('qty')?.value || 0;
    const cost = item.get('unit_cost')?.value || 0;
    return qty * cost;
  }

  calculateTotal(): number {
    const subtotal = this.itemsArray.controls.reduce((total, item) => {
      return total + this.calculateItemTotal(this.itemsArray.controls.indexOf(item));
    }, 0);
    
    const taxRate = this.poForm.get('tax_rate')?.value || 0;
    const tax = subtotal * (taxRate / 100);
    
    return subtotal + tax;
  }

  calculateSubtotal(): number {
    return this.itemsArray.controls.reduce((total, item) => {
      return total + this.calculateItemTotal(this.itemsArray.controls.indexOf(item));
    }, 0);
  }

  calculateTax(): number {
    const subtotal = this.calculateSubtotal();
    const taxRate = this.poForm.get('tax_rate')?.value || 0;
    return subtotal * (taxRate / 100);
  }

  onSubmit(): void {
    if (this.poForm.valid) {
      this.loading = true;
      this.error = null;

      const formData = this.poForm.value;
      const poData: CreatePurchaseOrderRequest = {
        supplier_id: formData.supplier_id || undefined,
        vendor_name: formData.vendor_name,
        vendor_contact: formData.vendor_contact,
        order_date: formData.order_date,
        expected_date: formData.expected_date,
        tax_rate: formData.tax_rate,
        terms: formData.terms,
        notes: formData.notes,
        items: formData.items.map((item: any) => ({
          part_id: item.part_id || undefined,
          part_number: item.part_number,
          description: item.description,
          qty: item.qty,
          unit_cost: item.unit_cost
        }))
      };

      this.inventoryService.createPurchaseOrder(poData).subscribe({
        next: (response) => {
          this.loading = false;
          if (response.success) {
            this.createPurchaseOrder.emit(poData);
            this.closeModal.emit();
          } else {
            this.error = 'Failed to create purchase order';
          }
        },
        error: (err) => {
          this.loading = false;
          this.error = 'Error creating purchase order: ' + (err.error?.message || err.message);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched(): void {
    Object.keys(this.poForm.controls).forEach(key => {
      const control = this.poForm.get(key);
      control?.markAsTouched();
    });
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
      if (field.errors['min']) {
        return `Minimum value is ${field.errors['min'].min}`;
      }
    }
    return '';
  }

  getArrayFieldError(arrayName: string, index: number, fieldName: string): string {
    const field = this.itemsArray.at(index).get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) {
        return 'This field is required';
      }
      if (field.errors['min']) {
        return `Minimum value is ${field.errors['min'].min}`;
      }
    }
    return '';
  }

  getSelectedSupplierName(): string {
    const supplierId = this.poForm.get('supplier_id')?.value;
    const supplier = this.suppliers.find(s => s.id === supplierId);
    return supplier ? supplier.name : '';
  }

  openAddSupplierModal(): void {
    this.showAddSupplierModal = true;
  }

  closeAddSupplierModal(): void {
    this.showAddSupplierModal = false;
  }

  onSupplierCreated(supplier: Supplier): void {
    // Add the new supplier to the list
    this.suppliers.push(supplier);
    
    // Select the newly created supplier
    this.poForm.patchValue({ supplier_id: supplier.id });
    
    // Close the modal
    this.closeAddSupplierModal();
  }
}
