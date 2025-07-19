import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LocationService, LocationType, Location } from '../../services/location.service';

@Component({
  selector: 'app-bulk-create-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bulk-create-modal.component.html',
  styleUrl: './bulk-create-modal.component.scss',
  animations: [
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('modalAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0, 
          transform: 'scale(0.7) translateY(-50px)' 
        }),
        animate('200ms ease-out', style({ 
          opacity: 1, 
          transform: 'scale(1) translateY(0)' 
        }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ 
          opacity: 0, 
          transform: 'scale(0.7) translateY(-50px)' 
        }))
      ])
    ])
  ]
})
export class BulkCreateModalComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() locationsCreated = new EventEmitter<Location[]>();

  bulkForm: FormGroup;
  locationTypes: LocationType[] = [];
  isLoading = false;
  errorMessage = '';
  successCount = 0;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService
  ) {
    this.bulkForm = this.fb.group({
      locations: this.fb.array([])
    });
  }

  ngOnInit() {
    this.loadLocationTypes();
    this.addLocationRow(); // Start with one row
  }

  get locationsArray(): FormArray {
    return this.bulkForm.get('locations') as FormArray;
  }

  loadLocationTypes() {
    this.locationService.getLocationTypes(0).subscribe({
      next: (response) => {
        if (response.success) {
          this.locationTypes = response.data.types;
        }
      },
      error: (error) => {
        console.error('Error loading location types:', error);
      }
    });
  }

  createLocationFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      address: [''],
      location_type_id: [null, Validators.required]
    });
  }

  addLocationRow() {
    this.locationsArray.push(this.createLocationFormGroup());
  }

  removeLocationRow(index: number) {
    if (this.locationsArray.length > 1) {
      this.locationsArray.removeAt(index);
    }
  }

  addMultipleRows() {
    for (let i = 0; i < 5; i++) {
      this.addLocationRow();
    }
  }

  clearAllRows() {
    while (this.locationsArray.length > 1) {
      this.locationsArray.removeAt(this.locationsArray.length - 1);
    }
    // Reset the remaining row
    this.locationsArray.at(0)?.reset();
  }

  getLocationTypeName(typeId: number): string {
    const type = this.locationTypes.find(t => t.id === typeId);
    return type ? type.name : 'Unknown';
  }

  onSubmit() {
    if (this.bulkForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successCount = 0;

      const locationsData = this.locationsArray.value.map((location: any) => ({
        ...location,
        parent_id: null // For now, creating top-level locations
      }));

      this.locationService.bulkCreateLocations(locationsData).subscribe({
        next: (response) => {
          if (response.success) {
            this.successCount = locationsData.length;
            this.locationsCreated.emit(response.data.location ? [response.data.location] : []);
            setTimeout(() => {
              this.closeModalHandler();
            }, 2000);
          } else {
            this.errorMessage = response.message || 'Failed to create locations';
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'An error occurred while creating locations';
          this.isLoading = false;
        }
      });
    }
  }

  closeModalHandler() {
    this.isOpen = false;
    this.closeModal.emit();
    this.resetForm();
  }

  resetForm() {
    // Clear all rows except the first one
    while (this.locationsArray.length > 1) {
      this.locationsArray.removeAt(1);
    }
    // Reset the first row
    this.locationsArray.at(0)?.reset();
    this.errorMessage = '';
    this.successCount = 0;
  }

  getValidLocationsCount(): number {
    return this.locationsArray.controls.filter(control => control.valid).length;
  }

  getTotalLocationsCount(): number {
    return this.locationsArray.length;
  }
}