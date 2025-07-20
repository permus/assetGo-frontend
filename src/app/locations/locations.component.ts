import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { HostListener } from '@angular/core';
import { LocationService, Location, LocationType, LocationsResponse } from './services/location.service';
import { AddLocationModalComponent } from './components/add-location-modal/add-location-modal.component';
import { EditLocationModalComponent } from './components/edit-location-modal/edit-location-modal.component';
import { DeleteConfirmationModalComponent } from './components/delete-confirmation-modal/delete-confirmation-modal.component';
import { BulkCreateModalComponent } from './components/bulk-create-modal/bulk-create-modal.component';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, AddLocationModalComponent, EditLocationModalComponent, DeleteConfirmationModalComponent, BulkCreateModalComponent],
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  // Data
  locations: Location[] = [];
  locationTypes: LocationType[] = [];
  hierarchyData: any[] = [];
  
  // UI State
  loading = false;
  hierarchyLoading = false;
  showFilters = false;
  currentView: 'grid' | 'tree' | 'analytics' | 'mgmt' = 'grid';
  currentListView: 'grid' | 'list' = 'grid';
  expandedNodes: Set<number> = new Set();
  
  // Management tab state
  selectedLocations: Set<number> = new Set();
  draggedLocation: Location | null = null;
  isDragging = false;
  dropZoneActive = false;
  managementHierarchy: any[] = [];
  managementLoading = false;
  
  // Modal state
  showAddLocationModal = false;
  showEditLocationModal = false;
  showDeleteConfirmationModal = false;
  showBulkCreateModal = false;
  selectedLocation: Location | null = null;
  
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
  jumpToPage: number | undefined;
  
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
    private locationService: LocationService,
    private router: Router
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
    this.loadHierarchy();
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

  loadHierarchy() {
    this.hierarchyLoading = true;
    
    this.locationService.getHierarchy()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.hierarchyData = response.data.hierarchy;
          }
          this.hierarchyLoading = false;
        },
        error: (error) => {
          console.error('Error loading hierarchy:', error);
          this.hierarchyLoading = false;
        }
      });
  }
  // View Controls
  setView(view: 'grid' | 'tree' | 'analytics' | 'mgmt') {
    this.currentView = view;
    if (view === 'tree' && this.hierarchyData.length === 0) {
      this.loadHierarchy();
    }
    if (view === 'mgmt') {
      this.fetchManagementHierarchy();
    }
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
    this.showFilters = false;
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

  getVisiblePages(): number[] {
    const current = this.pagination.current_page;
    const total = this.pagination.last_page;
    const pages: number[] = [];
    
    // Show current page and 2 pages on each side
    const start = Math.max(1, current - 2);
    const end = Math.min(total, current + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  changePerPage(event: any) {
    this.pagination.per_page = parseInt(event.target.value);
    this.loadLocations(1); // Reset to first page when changing per page
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
    this.selectedLocation = location;
    this.showEditLocationModal = true;
  }

  deleteLocation(location: Location) {
    this.selectedLocation = location;
    this.showDeleteConfirmationModal = true;
  }

  viewLocation(location: Location) {
    this.router.navigate(['/locations', location.id]);
  }

  addLocation() {
    this.showAddLocationModal = true;
  }

  closeAddLocationModal() {
    this.showAddLocationModal = false;
  }

  closeEditLocationModal() {
    this.showEditLocationModal = false;
    this.selectedLocation = null;
  }

  closeDeleteConfirmationModal() {
    this.showDeleteConfirmationModal = false;
    this.selectedLocation = null;
  }

  openBulkCreateModal() {
    this.showBulkCreateModal = true;
  }

  closeBulkCreateModal() {
    this.showBulkCreateModal = false;
  }

  onLocationCreated(location: Location) {
    // Refresh the locations list
    this.loadLocations(this.pagination.current_page);
    this.showAddLocationModal = false;
  }

  onLocationUpdated(updatedLocation: Location) {
    // Update the location in the current list
    const index = this.locations.findIndex(l => l.id === updatedLocation.id);
    if (index !== -1) {
      this.locations[index] = updatedLocation;
    }
    this.showEditLocationModal = false;
    this.selectedLocation = null;
  }

  onLocationDeleted(deletedLocation: Location) {
    // Remove the location from the current list
    this.locations = this.locations.filter(l => l.id !== deletedLocation.id);
    
    // Update pagination totals
    this.pagination.total = Math.max(0, this.pagination.total - 1);
    this.pagination.to = Math.max(0, this.pagination.to - 1);
    
    // If current page is empty and not the first page, go to previous page
    if (this.locations.length === 0 && this.pagination.current_page > 1) {
      this.loadLocations(this.pagination.current_page - 1);
    }
    
    this.showDeleteConfirmationModal = false;
    this.selectedLocation = null;
  }

  onLocationsCreated(locations: Location[]) {
    // Refresh the locations list
    this.loadLocations(this.pagination.current_page);
    this.loadHierarchy(); // Refresh hierarchy as well
    this.showBulkCreateModal = false;
  }

  // Tree View Methods
  toggleNode(nodeId: number) {
    if (this.expandedNodes.has(nodeId)) {
      this.expandedNodes.delete(nodeId);
    } else {
      this.expandedNodes.add(nodeId);
    }
  }

  isNodeExpanded(nodeId: number): boolean {
    return this.expandedNodes.has(nodeId);
  }

  expandAll() {
    this.hierarchyData.forEach(node => {
      this.addAllNodeIds(node, this.expandedNodes);
    });
  }

  collapseAll() {
    this.expandedNodes.clear();
  }

  private addAllNodeIds(node: any, nodeSet: Set<number>) {
    nodeSet.add(node.id);
    if (node.children && node.children.length > 0) {
      node.children.forEach((child: any) => {
        this.addAllNodeIds(child, nodeSet);
      });
    }
  }

  getLocationTypeColor(typeName: string): string {
    const colorMap: { [key: string]: string } = {
      'Community': 'gray',
      'Residential Building': 'blue',
      'Floor': 'green',
      'Garden': 'orange',
      'Office Building': 'blue'
    };
    return colorMap[typeName] || 'gray';
  }

  // Management Tab Methods
  fetchManagementHierarchy() {
    this.managementLoading = true;
    
    this.locationService.getHierarchy()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.managementHierarchy = response.data.hierarchy;
          }
          this.managementLoading = false;
        },
        error: (error) => {
          console.error('Error loading management hierarchy:', error);
          this.managementLoading = false;
        }
      });
  }

  // Selection Methods
  toggleLocationSelection(locationId: number, event?: MouseEvent) {
    if (event?.ctrlKey || event?.metaKey) {
      // Multi-select with Ctrl/Cmd
      if (this.selectedLocations.has(locationId)) {
        this.selectedLocations.delete(locationId);
      } else {
        this.selectedLocations.add(locationId);
      }
    } else {
      // Single select
      this.selectedLocations.clear();
      this.selectedLocations.add(locationId);
    }
  }

  isLocationSelected(locationId: number): boolean {
    return this.selectedLocations.has(locationId);
  }

  clearSelection() {
    this.selectedLocations.clear();
  }

  getSelectedCount(): number {
    return this.selectedLocations.size;
  }

  // Drag and Drop Methods
  onDragStart(event: DragEvent, location: any) {
    this.draggedLocation = location;
    this.isDragging = true;
    
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', location.id.toString());
    }
  }

  onDragEnd(event: DragEvent) {
    this.draggedLocation = null;
    this.isDragging = false;
    this.dropZoneActive = false;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    this.dropZoneActive = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    // Only deactivate if leaving the actual drop zone
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;
    
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      this.dropZoneActive = false;
    }
  }

  onDropToRoot(event: DragEvent) {
    event.preventDefault();
    this.dropZoneActive = false;
    
    if (this.draggedLocation) {
      this.moveLocationToRoot(this.draggedLocation);
    }
  }

  onDropToParent(event: DragEvent, targetLocation: any) {
    event.preventDefault();
    
    if (this.draggedLocation && this.draggedLocation.id !== targetLocation.id) {
      this.moveLocationToParent(this.draggedLocation, targetLocation);
    }
  }

  // Move Operations
  moveLocationToRoot(location: any) {
    const locationIds = this.selectedLocations.has(location.id) 
      ? Array.from(this.selectedLocations)
      : [location.id];

    this.locationService.moveLocations(locationIds, undefined).subscribe({
      next: (response) => {
        if (response.success) {
          this.fetchManagementHierarchy();
          this.clearSelection();
        }
      },
      error: (error) => {
        console.error('Error moving locations to root:', error);
      }
    });
  }

  moveLocationToParent(location: any, newParent: any) {
    const locationIds = this.selectedLocations.has(location.id) 
      ? Array.from(this.selectedLocations)
      : [location.id];

    this.locationService.moveLocations(locationIds, newParent.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.fetchManagementHierarchy();
          this.clearSelection();
        }
      },
      error: (error) => {
        console.error('Error moving locations:', error);
      }
    });
  }

  // Bulk Operations
  bulkMoveToRoot() {
    if (this.selectedLocations.size === 0) return;
    
    const locationIds = Array.from(this.selectedLocations);
    this.locationService.moveLocations(locationIds, undefined).subscribe({
      next: (response) => {
        if (response.success) {
          this.fetchManagementHierarchy();
          this.clearSelection();
        }
      },
      error: (error) => {
        console.error('Error bulk moving to root:', error);
      }
    });
  }

  bulkDelete() {
    if (this.selectedLocations.size === 0) return;
    
    if (confirm(`Are you sure you want to delete ${this.selectedLocations.size} selected locations?`)) {
      // Implement bulk delete functionality
      console.log('Bulk delete:', Array.from(this.selectedLocations));
    }
  }

  // Helper Methods
  getLocationIcon(type: string): string {
    const iconMap: { [key: string]: string } = {
      'Community': 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z',
      'Residential Building': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      'Floor': 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
      'Office Building': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      'Garden': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
    };
    return iconMap[type] || iconMap['Community'];
  }

  getLocationTypeColor(typeName: string): string {
    const colorMap: { [key: string]: string } = {
      'Community': 'gray',
      'Residential Building': 'blue',
      'Floor': 'green',
      'Garden': 'orange',
      'Office Building': 'blue',
      'Apartment': 'purple'
    };
    return colorMap[typeName] || 'gray';
  }

  exportQR() {
    // TODO: Implement QR export
    console.log('Export QR');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const filterButton = target.closest('.filter-button');
    const filterDropdown = target.closest('.filter-dropdown');
    const selectElement = target.closest('select');
    const optionElement = target.tagName === 'OPTION';
    
    // Close dropdown if click is outside button, dropdown, select elements, and options
    if (!filterButton && !filterDropdown && !selectElement && !optionElement && this.showFilters) {
      this.showFilters = false;
    }
  }
}