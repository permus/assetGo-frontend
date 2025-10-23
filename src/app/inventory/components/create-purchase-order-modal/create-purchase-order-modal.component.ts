import { Component, EventEmitter, Output, OnInit, AfterViewInit, OnDestroy, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { InventoryAnalyticsService, InventoryPart, CreatePurchaseOrderRequest, Supplier } from '../../../core/services/inventory-analytics.service';
import { AddSupplierModalComponent } from '../add-supplier-modal/add-supplier-modal.component';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-create-purchase-order-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddSupplierModalComponent],
  templateUrl: './create-purchase-order-modal.component.html',
  styleUrls: ['./create-purchase-order-modal.component.scss']
})
export class CreatePurchaseOrderModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() closeModal = new EventEmitter<void>();
  @Output() createPurchaseOrder = new EventEmitter<CreatePurchaseOrderRequest>();
  @ViewChildren('dateInput') dateInputs!: QueryList<ElementRef>;

  poForm: FormGroup;
  loading = false;
  submitting = false;
  error: string | null = null;

  // Flatpickr instances
  flatpickrInstances: any[] = [];

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
    
    // Add date validation listeners
    this.setupDateValidation();
    
    // Listen for supplier selection changes
    this.poForm.get('supplier_id')?.valueChanges.subscribe(supplierId => {
      this.onSupplierChange();
    });
  }

  ngAfterViewInit(): void {
    // Initialize Flatpickr after view is ready
    setTimeout(() => {
      this.initializeFlatpickr();
    }, 100);
  }

  ngOnDestroy(): void {
    // Cleanup Flatpickr instances
    this.flatpickrInstances.forEach(instance => {
      if (instance) {
        instance.destroy();
      }
    });
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
      part_id: ['',Validators.required],
      part_number: ['', [Validators.required]],
      description: ['', [Validators.required]],
      qty: ['', [Validators.required, Validators.min(1)]],
      unit_cost: ['', [Validators.required, Validators.min(0.01)]]
    });

    this.itemsArray.push(itemGroup);
    
    // Add change listener for part selection after adding to array
    const itemIndex = this.itemsArray.length - 1;
    itemGroup.get('part_id')?.valueChanges.subscribe(partId => {
      this.onPartChange(itemIndex);
    });
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

  onPartChange(itemIndex: number): void {
    const itemGroup = this.itemsArray.at(itemIndex);
    const partId = itemGroup.get('part_id')?.value;
    
    if (partId && partId !== '') {
      // Convert to number if it's a string
      const id = typeof partId === 'string' ? parseInt(partId) : partId;
      const selectedPart = this.parts.find(p => p.id === id);
      
      if (selectedPart) {
        // Populate part number and description with selected part data
        itemGroup.patchValue({
          part_number: selectedPart.part_number,
          description: selectedPart.description || selectedPart.name
        });
      }
    } else {
      // Clear fields when no part is selected
      itemGroup.patchValue({
        part_number: '',
        description: ''
      });
    }
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
    if (this.poForm.valid && !this.submitting) {
      this.submitting = true;
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
          this.submitting = false;
          this.loading = false;
          if (response.success) {
            this.createPurchaseOrder.emit(poData);
            this.closeModal.emit();
          } else {
            this.error = 'Failed to create purchase order';
          }
        },
        error: (err) => {
          this.submitting = false;
          this.loading = false;
          this.error = 'Error creating purchase order: ' + (err.error?.message || err.message);
        }
      });
    } else if (!this.poForm.valid) {
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
      if (field.errors['dateOrder']) {
        return 'Order date cannot be after expected delivery date';
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

  setupDateValidation(): void {
    // Listen to order_date changes
    this.poForm.get('order_date')?.valueChanges.subscribe(() => {
      this.validateDateOrder();
    });

    // Listen to expected_date changes
    this.poForm.get('expected_date')?.valueChanges.subscribe(() => {
      this.validateDateOrder();
    });
  }

  validateDateOrder(): void {
    const orderDate = this.poForm.get('order_date')?.value;
    const expectedDate = this.poForm.get('expected_date')?.value;

    if (orderDate && expectedDate) {
      const orderDateObj = new Date(orderDate);
      const expectedDateObj = new Date(expectedDate);

      if (orderDateObj > expectedDateObj) {
        this.poForm.get('order_date')?.setErrors({ dateOrder: true });
        this.poForm.get('expected_date')?.setErrors({ dateOrder: true });
      } else {
        // Clear the error if dates are valid
        const orderDateErrors = this.poForm.get('order_date')?.errors;
        const expectedDateErrors = this.poForm.get('expected_date')?.errors;
        
        if (orderDateErrors?.['dateOrder']) {
          delete orderDateErrors['dateOrder'];
          if (Object.keys(orderDateErrors).length === 0) {
            this.poForm.get('order_date')?.setErrors(null);
          } else {
            this.poForm.get('order_date')?.setErrors(orderDateErrors);
          }
        }
        
        if (expectedDateErrors?.['dateOrder']) {
          delete expectedDateErrors['dateOrder'];
          if (Object.keys(expectedDateErrors).length === 0) {
            this.poForm.get('expected_date')?.setErrors(null);
          } else {
            this.poForm.get('expected_date')?.setErrors(expectedDateErrors);
          }
        }
      }
    }
  }

  private initializeFlatpickr(): void {
    // Cleanup existing instances
    this.flatpickrInstances.forEach(instance => {
      if (instance) {
        instance.destroy();
      }
    });
    this.flatpickrInstances = [];

    // Initialize new instances
    if (this.dateInputs) {
      this.dateInputs.forEach((inputRef, index) => {
        if (inputRef?.nativeElement) {
          const inputElement = inputRef.nativeElement;
          const fieldName = inputElement.getAttribute('formControlName');
          
          let config: any = {
            dateFormat: 'Y-m-d',
            allowInput: true,
            clickOpens: true,
            onChange: (selectedDates: Date[], dateStr: string) => {
              // Update form control value
              if (fieldName) {
                this.poForm.get(fieldName)?.setValue(dateStr);
                // Trigger validation
                this.validateDateOrder();
              }
            }
          };

          // Set specific configurations for each field
          if (fieldName === 'expected_date') {
            config.minDate = 'today'; // Expected date should be today or in the future
          }

          const instance = flatpickr(inputElement, config);
          this.flatpickrInstances.push(instance);
        }
      });
    }
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

    // Populate vendor fields with the new supplier's information
    this.poForm.patchValue({
      vendor_name: supplier.name,
      vendor_contact: supplier.contact_person + ' - ' + supplier.phone
    });

    // Close the modal
    this.closeAddSupplierModal();
  }

  onSupplierChange(): void {
    const supplierId = this.poForm.get('supplier_id')?.value;
    
    if (supplierId && supplierId !== '') {
      // Convert to number if it's a string
      const id = typeof supplierId === 'string' ? parseInt(supplierId) : supplierId;
      const selectedSupplier = this.suppliers.find(s => s.id === id);
      
      if (selectedSupplier) {
        // Populate vendor name and contact with supplier information
        this.poForm.patchValue({
          vendor_name: selectedSupplier.name,
          vendor_contact: selectedSupplier.contact_person + ' - ' + selectedSupplier.phone
        });
      }
    } else {
      // Clear vendor fields when no supplier is selected
      this.poForm.patchValue({
        vendor_name: '',
        vendor_contact: ''
      });
    }
  }
}
