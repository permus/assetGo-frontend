import { Component, EventEmitter, Input, Output, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AssetService } from '../../services/asset.service';
import flatpickr from 'flatpickr';

export interface TransferAssetData {
  new_location_id: number | null;
  new_department_id?: number | null;
  to_user_id?: number | null;
  transfer_reason: string;
  transfer_date: string;
  notes?: string;
  condition_report?: string;
}

@Component({
  selector: 'app-transfer-asset-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transfer-asset-modal.component.html',
  styleUrl: './transfer-asset-modal.component.scss',
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
export class TransferAssetModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() isOpen = false;
  @Input() asset: any = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() transferComplete = new EventEmitter<any>();

  @ViewChild('dateInput', { static: false }) dateInput!: ElementRef;
  private flatpickrInstance: any;

  // Dropdown toggles
  showLocationDropdown = false;
  showDepartmentDropdown = false;
  showReasonDropdown = false;

  loading = false;
  error = '';
  
  // Form data
  transferData: TransferAssetData = {
    new_location_id: null,
    new_department_id: null,
    to_user_id: null,
    transfer_reason: '',
    transfer_date: new Date().toISOString().split('T')[0],
    notes: '',
    condition_report: ''
  };

  // Dropdown options
  locations: any[] = [];
  departments: any[] = [];
  users: any[] = [];
  transferReasons = [
    'Relocation',
    'Maintenance',
    'Replacement',
    'Department Transfer',
    'User Assignment',
    'Storage',
    'Disposal',
    'Other'
  ];

  constructor(private assetService: AssetService) {}

  ngOnInit(): void {
    console.log('TransferAssetModalComponent initialized');
    this.loadDropdownData();
  }

  ngOnChanges(): void {
    console.log('TransferAssetModalComponent changes:', {
      isOpen: this.isOpen,
      asset: this.asset
    });
    
    // Reinitialize flatpickr when modal opens
    if (this.isOpen) {
      setTimeout(() => {
        this.initializeFlatpickr();
      }, 200);
    }
  }

  ngAfterViewInit(): void {
    // Don't initialize here, wait for modal to open
  }

  ngOnDestroy(): void {
    this.destroyFlatpickr();
  }

  private destroyFlatpickr(): void {
    if (this.flatpickrInstance) {
      try {
        this.flatpickrInstance.destroy();
        this.flatpickrInstance = null;
      } catch (error) {
        console.error('Error destroying flatpickr:', error);
      }
    }
  }

  private initializeFlatpickr(): void {
    try {
      // Destroy existing instance first
      this.destroyFlatpickr();
      
      if (this.dateInput && this.dateInput.nativeElement) {
        console.log('Initializing flatpickr on element:', this.dateInput.nativeElement);
        
        this.flatpickrInstance = flatpickr(this.dateInput.nativeElement, {
          dateFormat: 'Y-m-d',
          defaultDate: new Date(),
          allowInput: false,
          clickOpens: true,
          minDate: new Date(),
          locale: {
            firstDayOfWeek: 1
          },
          onChange: (selectedDates, dateStr) => {
            console.log('Date selected:', dateStr);
            this.transferData.transfer_date = dateStr;
          },
          onOpen: () => {
            console.log('Flatpickr opened');
          },
          onClose: () => {
            console.log('Flatpickr closed');
          }
        });
        
        console.log('Flatpickr initialized successfully');
      } else {
        console.warn('Date input element not found');
      }
    } catch (error) {
      console.error('Error initializing flatpickr:', error);
    }
  }

  private loadDropdownData(): void {
    console.log('Loading dropdown data...');
    
    // Load locations with pagination (page 1, 1000 per page)
    console.log('Calling locations API with pagination...');
    this.assetService.getLocations(1, 1000, 'created', 'desc').subscribe({
      next: (response) => {
        console.log('Locations API response:', response);
        console.log('Response type:', typeof response);
        console.log('Response keys:', Object.keys(response));
        
        // Handle paginated response format
        if (response && response.data && response.data.locations) {
          this.locations = response.data.locations;
          console.log('Using response.data.locations (paginated):', this.locations);
          console.log('Response pagination:', response.data.pagination);
        } else if (response && response.data && Array.isArray(response.data)) {
          this.locations = response.data;
          console.log('Using response.data as array:', this.locations);
        } else if (Array.isArray(response)) {
          this.locations = response;
          console.log('Using response as array:', this.locations);
        } else {
          this.locations = [];
          console.warn('Unexpected response format:', response);
          console.log('Response structure:', response);
        }
        
        console.log('Final locations array:', this.locations);
        console.log('Locations count:', this.locations.length);
        
        if (this.locations.length === 0) {
          console.warn('No locations found in response');
        }
      },
      error: (error) => {
        console.error('Error loading locations:', error);
        console.error('Error details:', {
          status: error.status,
          statusText: error.statusText,
          message: error.message,
          url: error.url
        });
        // Fallback to empty array
        this.locations = [];
      }
    });

    // Load departments with pagination (page 1, 1000 per page)
    console.log('Calling departments API with pagination...');
    this.assetService.getDepartments(1, 1000, 'created', 'desc').subscribe({
      next: (response) => {
        console.log('Departments API response:', response);
        
        // Handle paginated response format
        if (response && response.data && response.data.departments) {
          this.departments = response.data.departments;
          console.log('Using response.data.departments (paginated):', this.departments);
          console.log('Response pagination:', response.data.pagination);
        } else if (response && response.data && Array.isArray(response.data)) {
          this.departments = response.data;
          console.log('Using response.data as array:', this.departments);
        } else if (Array.isArray(response)) {
          this.departments = response;
        } else {
          this.departments = [];
          console.warn('Unexpected departments response format:', response);
          console.log('Response structure:', response);
        }
        
        console.log('Final departments array:', this.departments);
        console.log('Departments count:', this.departments.length);
        
        if (this.departments.length === 0) {
          console.warn('No departments found');
        }
      },
      error: (error) => {
        console.error('Error loading departments:', error);
        console.error('Error details:', {
          status: error.status,
          statusText: error.statusText,
          message: error.message,
          url: error.url
        });
        // Fallback to empty array
        this.departments = [];
      }
    });

    // Load users (you might need to add this method to your service)
    // this.assetService.getUsers().subscribe({
    //   next: (response) => {
    //     this.users = response.data || [];
    //   },
    //   error: (error) => {
    //     console.error('Error loading users:', error);
    //   }
    // });
  }

  // Manual method to reload location data
  reloadLocationData(): void {
    console.log('Manually reloading location data...');
    this.loadDropdownData();
  }

  onTransfer(): void {
    if (!this.validateForm()) {
      return;
    }

    this.loading = true;
    this.error = '';

    this.assetService.transferAsset(this.asset.id, this.transferData).subscribe({
      next: (response) => {
        this.loading = false;
        this.transferComplete.emit(response);
        this.resetForm();
        this.closeModal.emit();
      },
      error: (error) => {
        this.loading = false;
        this.error = error.error?.message || 'Transfer failed. Please try again.';
        console.error('Transfer error:', error);
      }
    });
  }

  onCancel(): void {
    if (this.loading) return;
    this.destroyFlatpickr();
    this.resetForm();
    this.closeModal.emit();
  }

  private validateForm(): boolean {
    if (!this.transferData.new_location_id) {
      this.error = 'Please select a new location.';
      return false;
    }

    if (!this.transferData.transfer_reason) {
      this.error = 'Please select a transfer reason.';
      return false;
    }

    if (!this.transferData.transfer_date) {
      this.error = 'Please select a transfer date.';
      return false;
    }

    // Check if new location is different from current
    if (this.asset?.location_id === this.transferData.new_location_id) {
      this.error = 'Transfer location must be different from current location.';
      return false;
    }

    this.error = '';
    return true;
  }

  private resetForm(): void {
    this.transferData = {
      new_location_id: null,
      new_department_id: null,
      to_user_id: null,
      transfer_reason: '',
      transfer_date: new Date().toISOString().split('T')[0],
      notes: '',
      condition_report: ''
    };
    this.error = '';
  }

  getCurrentLocationName(): string {
    return this.asset?.location?.name || 'No location assigned';
  }

  getCurrentDepartmentName(): string {
    return this.asset?.department?.name || 'No department assigned';
  }

  getLocationNameById(id: number | null): string {
    if (!id) return '';
    const loc = this.locations.find(l => l.id === id);
    return loc ? loc.name : '';
  }

  getDepartmentNameById(id: number | null): string {
    if (!id) return '';
    const dept = this.departments.find(d => d.id === id);
    return dept ? dept.name : '';
  }

  // Debug methods to check dropdown data
  getLocationsCount(): number {
    return this.locations.length;
  }

  getDepartmentsCount(): number {
    return this.departments.length;
  }

  getUsersCount(): number {
    return this.users.length;
  }

  // Close all dropdowns when clicking outside
  onModalClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.showLocationDropdown = false;
      this.showDepartmentDropdown = false;
      this.showReasonDropdown = false;
    }
  }
} 