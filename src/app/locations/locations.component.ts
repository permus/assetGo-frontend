import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { LocationService, Location, LocationType, LocationsResponse } from './services/location.service';
import { AddLocationModalComponent } from './components/add-location-modal/add-location-modal.component';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddLocationModalComponent],
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  // Data
  locations: Location[] = [];
  locationTypes: LocationType[] = [];
  
  // UI State
  loading = false;
  showFilters = false;
  currentView: 'grid' | 'tree' | 'analytics' | 'mgmt' = 'grid';
  currentListView: 'grid' | 'list' = 'list';
  
  // Modal state
  showAddLocationModal = false;
  
  // Pagination
  pagination = {
    current_page: 1,
    last_page: 1,
    per_page: 15,
    total: 0,
    from: 0,
    to: 0
  };
  
  // Forms
  searchForm: FormGroup;
  filtersForm: FormGroup;
  
  // Filters
  sortOptions = [
    { value: 'created', label: 'Created' },
    { value: 'name', label: 'Name' },
    { value: 'type', label: 'Type' },
    { value: 'updated', label: 'Updated' }
  ];
  
  hierarchyLevels = [
    { value: '', label: 'All Levels' },
    { value: '0', label: 'Level 0 (Root)' },
    { value: '1', label: 'Level 1' },
    { value: '2', label: 'Level 2' },
    { value: '3', label: 'Level 3' }
  ];
  
  assetCountOptions = [
    { value: '', label: 'Any Count' },
    { value: '0', label: 'No Assets' },
    { value: '1-10', label: '1-10 Assets' },
    { value: '11-50', label: '11-50 Assets' },
    { value: '50+', label: '50+ Assets' }
  ];

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService
  ) {
    this.searchForm = this.fb.group({
      search: ['']
    });
    
    this.filtersForm = this.fb.group({
      type_id: [''],
      parent_id: [''],
      hierarchy_level: [''],
      asset_count: [''],
      sort_by: ['created'],
      sort_direction: ['desc']
    });
  }

  ngOnInit() {
    this.initializeSearchSubscription();
    this.loadLocationTypes();
    this.loadLocations();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeSearchSubscription() {
    this.searchForm.get('search')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.loadLocations();
      });
  }

  loadLocationTypes() {
    this.locationService.getLocationTypes()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
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

  loadLocations(page: number = 1) {
    this.loading = true;
    
    const searchValue = this.searchForm.get('search')?.value;
    const filters = this.filtersForm.value;
    
    const params = {
      search: searchValue,
      page: page,
      per_page: this.pagination.per_page,
      ...filters
    };

    // Remove empty values
    Object.keys(params).forEach(key => {
      if (params[key as keyof typeof params] === '' || params[key as keyof typeof params] === null) {
        delete params[key as keyof typeof params];
      }
    });

    this.locationService.getLocations(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: LocationsResponse) => {
          if (response.success) {
            this.locations = response.data.locations;
            this.pagination = response.data.pagination;
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading locations:', error);
          this.loading = false;
        }
      });
  }

  // View Controls
  setView(view: 'grid' | 'tree' | 'analytics' | 'mgmt') {
    this.currentView = view;
  }

  setListView(view: 'grid' | 'list') {
    this.currentListView = view;
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  // Filter Actions
  applyFilters() {
    this.loadLocations(1);
  }

  clearFilters() {
    this.filtersForm.reset({
      type_id: '',
      parent_id: '',
      hierarchy_level: '',
      asset_count: '',
      sort_by: 'created',
      sort_direction: 'desc'
    });
    this.loadLocations(1);
  }

  // Pagination
  goToPage(page: number) {
    if (page >= 1 && page <= this.pagination.last_page) {
      this.loadLocations(page);
    }
  }

  // Utility Methods
  getLocationTypeIcon(type: LocationType): string {
    const iconMap: { [key: string]: string } = {
      'Residential Building': '🏠',
      'Office Building': '🏢',
      'Factory': '🏭',
      'Warehouse': '🏪',
      'Garden': '🌳',
      'Apartment': '🏠',
      'Room': '🚪',
      'Floor': '📋'
    };
    return iconMap[type.name] || '📍';
  }

  getHierarchyLevelBadge(level: number): string {
    return `L${level}`;
  }

  getHierarchyLevelColor(level: number): string {
    const colors = ['blue', 'green', 'yellow', 'purple'];
    return colors[level] || 'gray';
  }

  // Actions
  editLocation(location: Location) {
    // TODO: Implement edit modal
    console.log('Edit location:', location);
  }

  deleteLocation(location: Location) {
    if (confirm(`Are you sure you want to delete "${location.name}"?`)) {
      this.locationService.deleteLocation(location.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.loadLocations(this.pagination.current_page);
            }
          },
          error: (error) => {
            console.error('Error deleting location:', error);
          }
        });
    }
  }

  viewLocation(location: Location) {
    // TODO: Implement view modal or navigation
    console.log('View location:', location);
  }

  addLocation() {
    this.showAddLocationModal = true;
  }

  closeAddLocationModal() {
    this.showAddLocationModal = false;
  }

  onLocationCreated(location: Location) {
    // Refresh the locations list
    this.loadLocations(this.pagination.current_page);
    this.showAddLocationModal = false;
  }

  bulkActions() {
    // TODO: Implement bulk actions
    console.log('Bulk actions');
  }

  exportQR() {
    // TODO: Implement QR export
    console.log('Export QR');
  }
}