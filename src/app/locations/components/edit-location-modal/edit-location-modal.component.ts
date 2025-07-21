import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LocationService, LocationType, Location } from '../../services/location.service';
import { GooglePlacesService, PlaceResult } from '../../../shared/services/google-places.service';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-location-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-location-modal.component.html',
  styleUrl: './edit-location-modal.component.scss',
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
export class EditLocationModalComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() isOpen = false;
  @Input() location: Location | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() locationUpdated = new EventEmitter<Location>();
  @ViewChild('addressInput', { static: false }) addressInput!: ElementRef<HTMLInputElement>;

  editForm: FormGroup;
  locationTypes: LocationType[] = [];
  selectedTypeId: number | null = null;
  loading = false;
  errorMessage = '';
  showAllTypes = false;
  autocomplete: any;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private googlePlacesService: GooglePlacesService
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

  ngAfterViewInit() {
    if (this.isOpen) {
      this.initializeAutocomplete();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['location'] && this.location) {
      this.populateForm();
    }
    
    // Reinitialize autocomplete when modal opens
    if (changes['isOpen'] && this.isOpen && !changes['isOpen'].firstChange) {
      setTimeout(() => {
        this.initializeAutocomplete();
      }, 200);
    }
  }

  private async initializeAutocomplete() {
    // Wait for the view to be fully rendered
    setTimeout(async () => {
      if (this.addressInput?.nativeElement && this.isOpen) {
        try {
          // Clear any existing autocomplete
          if (this.autocomplete) {
            this.autocomplete = null;
          }

          this.autocomplete = await this.googlePlacesService.initializeAutocomplete(
            this.addressInput.nativeElement,
            (place: PlaceResult) => {
              this.editForm.patchValue({
                address: place.formatted_address
              });
            },
            {
              types: ['address'],
              componentRestrictions: { country: 'us' }
            }
          );
        } catch (error) {
          console.error('Failed to initialize Google Places Autocomplete:', error);
        }
      }
    }, 300);
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

  public onSubmit() {
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

  public closeModalHandler() {
    // Clear autocomplete when closing
    if (this.autocomplete) {
      this.autocomplete = null;
    }
    this.isOpen = false;
    this.closeModal.emit();
    this.resetForm();
  }

  public resetForm() {
    this.editForm.reset();
    this.selectedTypeId = null;
    this.errorMessage = '';
    this.showAllTypes = false;
  }

  public toggleShowAllTypes() {
    this.showAllTypes = !this.showAllTypes;
  }
}