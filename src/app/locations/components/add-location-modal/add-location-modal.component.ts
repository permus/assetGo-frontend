import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LocationService, LocationType, Location } from '../../services/location.service';

@Component({
  selector: 'app-add-location-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-location-modal.component.html',
  styleUrl: './add-location-modal.component.scss'
})
export class AddLocationModalComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() locationCreated = new EventEmitter<Location>();

  locationForm: FormGroup;
  locationTypes: LocationType[] = [];
  selectedTypeId: number | null = null;
  isLoading = false;
  errorMessage = '';
  showAllTypes = false;

  // Predefined location types with icons and descriptions
  predefinedTypes: LocationType[] = [];

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService
  ) {
    this.locationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      address: [''],
      location_type_id: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.loadLocationTypes();
  }

  loadLocationTypes() {
    this.locationService.getLocationTypes().subscribe({
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

  getDisplayedTypes() {
    return this.showAllTypes ? this.locationTypes : this.locationTypes.slice(0, 6);
  }

  selectLocationType(type: LocationType) {
    this.selectedTypeId = type.id;
    this.locationForm.patchValue({ location_type_id: type.id });
  }

  getTypeDescription(type: LocationType): string {
    return type.description || `${type.category} location`;
  }

  onSubmit() {
    if (this.locationForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = '';

      const locationData = {
        ...this.locationForm.value,
        parent_id: null // For now, creating top-level locations
      };

      this.locationService.createLocation(locationData).subscribe({
        next: (response) => {
          if (response.success) {
            this.locationCreated.emit(response.data.location);
            this.closeModalHandler();
          } else {
            this.errorMessage = response.message || 'Failed to create location';
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'An error occurred while creating the location';
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
    this.locationForm.reset();
    this.selectedTypeId = null;
    this.errorMessage = '';
    this.showAllTypes = false;
  }

  toggleShowAllTypes() {
    this.showAllTypes = !this.showAllTypes;
  }
}