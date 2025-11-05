import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LocationService, LocationType, Location } from '../../services/location.service';
import { GooglePlacesService, PlaceResult } from '../../../shared/services/google-places.service';
import { AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Google Maps types
declare var google: any;

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
  addressType: 'gps' | 'manual' = 'gps'; // Address input type

  // Google Maps properties
  showMap = false;
  map: any;
  marker: any;
  geocoder: any;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private googlePlacesService: GooglePlacesService,
    private http: HttpClient
  ) {
    this.locationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      location_code: ['', [Validators.required]],
      description: [''],
      address_type: ['gps'], // Default to GPS Address with Map
      address: [''],
      location_type_id: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.loadLocationTypes();
    // Initialize address type
    this.addressType = this.locationForm.get('address_type')?.value || 'gps';
  }

  ngAfterViewInit() {
    // Initialize autocomplete when view is ready (only for GPS mode)
    if (this.locationForm.get('address_type')?.value === 'gps') {
      this.initializeAutocomplete();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Reinitialize autocomplete when modal opens (only for GPS mode)
    if (changes['isOpen'] && this.isOpen && !changes['isOpen'].firstChange) {
      // Reset form and state when modal opens
      this.resetForm();
      if (this.locationForm.get('address_type')?.value === 'gps') {
        setTimeout(() => {
          this.initializeAutocomplete();
        }, 200);
      }
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
               
               // Trigger map display when address is selected
               if (place.geometry && place.geometry.location) {
                 const lat = place.geometry.location.lat();
                 const lng = place.geometry.location.lng();
                 this.showMap = true;
                 setTimeout(() => this.showMapOnCoords(lat, lng), 100);
               }
             },
                         {
               types: ['geocode']
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
    
    // Clean up map resources
    this.cleanupMap();
    
    this.isOpen = false;
    this.closeModal.emit();
  }

  private cleanupMap() {
    // Remove event listeners and clean up map resources
    if (this.marker && typeof google !== 'undefined' && google.maps) {
      try {
        google.maps.event.clearInstanceListeners(this.marker);
        this.marker.setMap(null);
      } catch (error) {
        console.warn('Error cleaning up marker:', error);
      }
      this.marker = undefined;
    }
    
    if (this.map && typeof google !== 'undefined' && google.maps) {
      try {
        google.maps.event.clearInstanceListeners(this.map);
      } catch (error) {
        console.warn('Error cleaning up map:', error);
      }
      this.map = undefined;
    }
    
    // Clear the map container
    const mapElement = document.getElementById('location-map');
    if (mapElement) {
      mapElement.innerHTML = '';
    }
    
    this.geocoder = undefined;
    this.showMap = false;
  }

  public toggleShowAllTypes() {
    this.showAllTypes = !this.showAllTypes;
  }

  resetForm() {
    this.locationForm.reset({
      name: '',
      location_code: '',
      description: '',
      address_type: 'gps', // Reset to default
      address: '',
      location_type_id: null
    });
    this.selectedTypeId = null;
    this.errorMessage = '';
    this.showAllTypes = false;
    this.isLoading = false;
    this.addressType = 'gps';
    
    // Clean up map when resetting form
    this.cleanupMap();
    
    // Clear any existing autocomplete
    if (this.autocomplete) {
      this.autocomplete = null;
    }
  }

  // Map methods
  onAddressChanged() {
    const addressType = this.locationForm.get('address_type')?.value;
    if (addressType === 'gps') {
      const address = this.locationForm.get('address')?.value;
      if (address && address.trim().length > 0) {
        this.geocodeAddress();
      } else {
        this.showMap = false;
        if (this.map) {
          this.map = undefined;
          this.marker = undefined;
        }
      }
    }
  }

  geocodeAddress() {
    const address = this.locationForm.get('address')?.value;
    if (!address) return;

    // Check if Google Maps is loaded
    if (typeof google === 'undefined' || !google.maps) {
      console.warn('Google Maps not loaded yet');
      return;
    }

    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }

    this.geocoder.geocode({ address: address }, (results: any, status: any) => {
      if (status === 'OK' && results && results.length > 0) {
        const location = results[0].geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        this.showMap = true;
        setTimeout(() => this.showMapOnCoords(lat, lng), 100);
      }
    });
  }

  showMapOnCoords(lat: number, lng: number) {
    const mapElement = document.getElementById('location-map');
    if (!mapElement) {
      console.warn('Map element not found');
      return;
    }

    // Check if Google Maps is loaded
    if (typeof google === 'undefined' || !google.maps) {
      console.warn('Google Maps not loaded yet');
      return;
    }

    // Ensure map element is visible and has dimensions
    if (mapElement.offsetWidth === 0 || mapElement.offsetHeight === 0) {
      console.warn('Map element has no dimensions');
      return;
    }

    if (!this.map) {
      this.map = new google.maps.Map(mapElement, {
        center: { lat: lat, lng: lng },
        zoom: 15,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });
    } else {
      this.map.setCenter({ lat: lat, lng: lng });
    }
    
    if (this.marker) {
      this.marker.setPosition({ lat: lat, lng: lng });
    } else {
      this.marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: this.map,
        title: this.locationForm.get('name')?.value || 'Location',
        draggable: true
      });

      // Add drag event listeners
      this.marker.addListener('dragend', () => {
        const position = this.marker.getPosition();
        if (position) {
          this.reverseGeocode(position.lat(), position.lng());
        }
      });

      // Add click event listener to the map for placing marker
      this.map.addListener('click', (event: any) => {
        const position = event.latLng;
        this.marker.setPosition(position);
        this.reverseGeocode(position.lat(), position.lng());
      });
    }
  }

  reverseGeocode(lat: number, lng: number) {
    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }

    this.geocoder.geocode({ location: { lat: lat, lng: lng } }, (results: any, status: any) => {
      if (status === 'OK' && results && results.length > 0) {
        const address = results[0].formatted_address;
        this.locationForm.patchValue({ address: address });
      }
    });
  }
}