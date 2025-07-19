import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LocationService, LocationType, Location } from '../../services/location.service';

@Component({
  selector: 'app-edit-location-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-location-modal.component.html',
  styleUrl: './edit-location-modal.component.scss'
})
export class EditLocationModalComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  @Input() location: Location | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() locationUpdated = new EventEmitter<Location>();

  editForm: FormGroup;
  locationTypes: LocationType[] = [];
  selectedTypeId: number | null = null;
  loading = false;
  errorMessage = '';
  showAllTypes = false;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService
  ) {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      address: [''],
      location_type_id: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.loadLocationTypes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['location'] && this.location) {
      this.populateForm();
    }
  }

  loadLocationTypes() {
    // Get location types based on current location's hierarchy level
    const hierarchyLevel = this.location?.hierarchy_level;
    this.locationService.getLocationTypes(hierarchyLevel).subscribe({
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

  populateForm() {
    if (this.location) {
      this.editForm.patchValue({
        name: this.location.name,
        description: this.location.description || '',
        address: this.location.address || '',
        location_type_id: this.location.location_type_id
      });
      this.selectedTypeId = this.location.location_type_id;
    }
  }

  getDisplayedTypes() {
    return this.showAllTypes ? this.locationTypes : this.locationTypes.slice(0, 6);
  }

  selectLocationType(type: LocationType) {
    this.selectedTypeId = type.id;
    this.editForm.patchValue({ location_type_id: type.id });
  }

  getTypeDescription(type: LocationType): string {
    return type.description || `${type.category}`;
  }

  getTypeIcon(type: LocationType): string {
    return `assets/icons/${type.icon}.svg`;
  }

  onSubmit() {
    if (this.editForm.valid && !this.loading && this.location) {
      this.loading = true;
      this.errorMessage = '';

      const updateData = {
        ...this.editForm.value
      };

      this.locationService.updateLocation(this.location.id, updateData).subscribe({
        next: (response) => {
          if (response.success) {
            this.locationUpdated.emit(response.data.location);
            this.closeModalHandler();
          } else {
            this.errorMessage = response.message || 'Failed to update location';
          }
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'An error occurred while updating the location';
          this.loading = false;
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
    this.editForm.reset();
    this.selectedTypeId = null;
    this.errorMessage = '';
    this.showAllTypes = false;
  }

  toggleShowAllTypes() {
    this.showAllTypes = !this.showAllTypes;
  }
}