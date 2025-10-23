import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CreatePartRequest, UpdatePartRequest, InventoryPart } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-add-part-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-part-modal.component.html',
  styleUrls: ['./add-part-modal.component.scss']
})
export class AddPartModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Output() createPart = new EventEmitter<CreatePartRequest>();
  @Output() updatePart = new EventEmitter<UpdatePartRequest>();
  @Input() manageLoading = false;
  @Input() part: InventoryPart | null = null;
  @Input() isEditMode = false;

  partForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.partForm = this.fb.group({
      part_number: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: [''],
      uom: ['', [Validators.required]],
      unit_cost: [''],
      category_id: [''],
      reorder_point: [0],
      reorder_qty: [1],
      barcode: [''],
      status: ['active'],
      abc_class: ['']
    });
  }

  ngOnInit(): void {
    if (this.isEditMode && this.part) {
      this.partForm.patchValue({
        part_number: this.part.part_number,
        name: this.part.name,
        description: this.part.description,
        uom: this.part.uom,
        unit_cost: this.part.unit_cost,
        category_id: this.part.category_id,
        reorder_point: this.part.reorder_point,
        reorder_qty: this.part.reorder_qty,
        barcode: this.part.barcode,
        status: this.part.status,
        abc_class: this.part.abc_class
      });
    } else {
      // Ensure form is properly initialized for create mode
      this.partForm.patchValue({
        part_number: '',
        name: '',
        description: '',
        uom: '',
        unit_cost: '',
        category_id: '',
        reorder_point: 0,
        reorder_qty: 1,
        barcode: '',
        status: 'active',
        abc_class: ''
      });
    }
    
  }

  onSubmit(): void {
    console.log('Form submitted');
    console.log('Form value:', this.partForm.value);
    console.log('Status:', this.partForm.get('status')?.value);
    console.log('ABC Class:', this.partForm.get('abc_class')?.value);
    
    if (this.partForm.valid) {
      const formValue = this.partForm.value;

      if (this.isEditMode) {
        // Convert empty strings to undefined for optional fields
        const updateData: UpdatePartRequest = {
          name: formValue.name,
          part_number: formValue.part_number,
          description: formValue.description || undefined,
          uom: formValue.uom,
          unit_cost: formValue.unit_cost ? parseFloat(formValue.unit_cost) : undefined,
          category_id: formValue.category_id ? parseInt(formValue.category_id) : undefined,
          reorder_point: formValue.reorder_point ? parseInt(formValue.reorder_point) : undefined,
          reorder_qty: formValue.reorder_qty ? parseInt(formValue.reorder_qty) : undefined,
          barcode: formValue.barcode || undefined,
          status: formValue.status,
          abc_class: formValue.abc_class || undefined
        };

        this.updatePart.emit(updateData);
      } else {
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
          barcode: formValue.barcode || undefined,
          status: formValue.status,
          abc_class: formValue.abc_class || undefined
        };

        this.createPart.emit(partData);
      }
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
