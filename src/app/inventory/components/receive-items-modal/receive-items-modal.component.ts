import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { InventoryAnalyticsService, PurchaseOrder, ReceivePurchaseOrderRequest, InventoryLocation } from '../../../core/services/inventory-analytics.service';
import { CurrencyService } from '../../../core/services/currency.service';

@Component({
  selector: 'app-receive-items-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './receive-items-modal.component.html',
  styleUrls: ['./receive-items-modal.component.scss']
})
export class ReceiveItemsModalComponent implements OnInit {
  @Input() purchaseOrder: PurchaseOrder | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() itemsReceived = new EventEmitter<void>();

  receiveForm: FormGroup;
  loading = false;
  error: string | null = null;
  locations: any[] = [];

  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryAnalyticsService,
    private currency: CurrencyService
  ) {
    this.receiveForm = this.fb.group({
      location_id: ['', [Validators.required]],
      reference: [''],
      notes: [''],
      items: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadLocations();
    this.initializeItemsForm();
  }

  loadLocations(): void {
    // Request all locations (no hierarchy filter) sorted by name
    this.inventoryService.getLocations(1, 1000, undefined as unknown as number, 'name', 'asc').subscribe({
      next: (response: any) => {
        this.locations = response.data.locations ?? [];
        console.log(this.locations)
      },
      error: (err) => {
        console.error('Error loading locations:', err);
      }
    });
  }

  initializeItemsForm(): void {
    if (!this.purchaseOrder?.items) return;


    const itemsArray = this.receiveForm.get('items') as FormArray;
    itemsArray.clear();

    this.purchaseOrder.items.forEach(item => {
      const remainingQty = (item.ordered_qty || 0) - (item.received_qty || 0);
      if (remainingQty > 0) {
        const itemGroup = this.fb.group({
          item_id: [item.id, [Validators.required]],
          receive_qty: ['', [Validators.required, Validators.min(1), Validators.max(remainingQty)]],
          part_number: [item.part_number || 'Unknown Part'],
          ordered_qty: [item.ordered_qty],
          received_qty: [item.received_qty || 0],
          remaining_qty: [remainingQty]
        });
        itemsArray.push(itemGroup);
      }
    });
  }

  get itemsArray(): FormArray {
    return this.receiveForm.get('items') as FormArray;
  }

  onSubmit(): void {
    if (this.receiveForm.valid && this.purchaseOrder?.id) {
      this.loading = true;
      this.error = null;

      const formData = this.receiveForm.value;
      const receiveData: ReceivePurchaseOrderRequest = {
        location_id: formData.location_id,
        items: formData.items.map((item: any) => ({
          item_id: item.item_id,
          receive_qty: item.receive_qty
        })),
        reference: formData.reference,
        notes: formData.notes
      };

      this.inventoryService.receivePurchaseOrder(this.purchaseOrder.id, receiveData).subscribe({
        next: () => {
          this.itemsReceived.emit();
          this.closeModal.emit();
        },
        error: (err) => {
          this.error = 'Error receiving items: ' + err.message;
          this.loading = false;
        }
      });
    }
  }

  onCancel(): void {
    this.closeModal.emit();
  }

  getFieldError(fieldName: string): string {
    const field = this.receiveForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) {
        return 'This field is required';
      }
    }
    return '';
  }

  getArrayFieldError(index: number, fieldName: string): string {
    const field = this.itemsArray.at(index).get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) {
        return 'This field is required';
      }
      if (field.errors['min']) {
        return `Minimum value is ${field.errors['min'].min}`;
      }
      if (field.errors['max']) {
        return `Maximum value is ${field.errors['max'].max}`;
      }
    }
    return '';
  }

  formatCurrency(amount: any): string { return this.currency.format(amount); }

  getLocationName(locationId: number): string {
    const location = this.locations.find(l => l.id === locationId);
    return location ? location.name : 'Unknown Location';
  }
}
