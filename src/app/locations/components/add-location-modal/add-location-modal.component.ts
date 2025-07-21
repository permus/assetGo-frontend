import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LocationService, LocationType, Location } from '../../services/location.service';
import { GooglePlacesService, PlaceResult } from '../../../shared/services/google-places.service';
import { AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-location-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-location-modal.component.html',
  styleUrl: './add-location-modal.component.scss',
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
export class AddLocationModalComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() isOpen = false;
  @Input() parentLocation: Location | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() locationCreated = new EventEmitter<Location>();
  @ViewChild('addressInput', { static: false }) addressInput!: ElementRef<HTMLInputElement>;

  locationForm: FormGroup;
  locationTypes: LocationType[] = [];
  selectedTypeId: number | null = null;
  isLoading = false;
  errorMessage = '';
  showAllTypes = false;
  autocomplete: any;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private googlePlacesService: GooglePlacesService
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

  ngAfterViewInit() {
    // Initialize autocomplete when view is ready
    this.initializeAutocomplete();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Reinitialize autocomplete when modal opens
    if (changes['isOpen'] && this.isOpen && !changes['isOpen'].firstChange) {
      setTimeout(() => {
        this.initializeAutocomplete();
      }, 200);
    }
  }

  loadLocationTypes() {
    // Get location types based on parent location hierarchy level
    const hierarchyLevel = this.parentLocation ? this.parentLocation.hierarchy_level + 1 : 0;
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

  getDisplayedTypes() {
    return this.showAllTypes ? this.locationTypes : this.locationTypes.slice(0, 6);
  }

  selectLocationType(type: LocationType) {
    this.selectedTypeId = type.id;
    this.locationForm.patchValue({ location_type_id: type.id });
  }

  getTypeDescription(type: LocationType): string {
    return type.description || `${type.category}`;
  }

  getTypeIcon(type: LocationType): string {
    return `assets/icons/${type.icon}.svg`;
  }

  onSubmit() {
    if (this.locationForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = '';

      const locationData = {
        ...this.locationForm.value,
        parent_id: this.parentLocation ? this.parentLocation.id : null
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
              this.locationForm.patchValue({
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

  public closeModalHandler() {
    // Clear autocomplete when closing
    if (this.autocomplete) {
      this.autocomplete = null;
    }
    this.isOpen = false;
  }
  public toggleShowAllTypes() {
    this.showAllTypes = !this.showAllTypes;
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