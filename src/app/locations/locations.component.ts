import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {Subject, debounceTime, distinctUntilChanged, takeUntil} from 'rxjs';
import {HostListener} from '@angular/core';
import {LocationService, Location, LocationType, LocationsResponse} from './services/location.service';
import {AddLocationModalComponent} from './components/add-location-modal/add-location-modal.component';
import {EditLocationModalComponent} from './components/edit-location-modal/edit-location-modal.component';
import {
  DeleteConfirmationModalComponent
} from './components/delete-confirmation-modal/delete-confirmation-modal.component';
import {BulkCreateModalComponent} from './components/bulk-create-modal/bulk-create-modal.component';
import {HierarchyManagementComponent} from './components/hierarchy-management/hierarchy-management.component';
import {QrViewComponent} from './components/qr-view/qr-view.component';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, AddLocationModalComponent, EditLocationModalComponent, DeleteConfirmationModalComponent, BulkCreateModalComponent, HierarchyManagementComponent, QrViewComponent],
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
    {value: 'created', label: 'Created'},
    {value: 'name', label: 'Name'},
    {value: 'type', label: 'Type'},
    {value: 'updated', label: 'Updated'}
  ];

  hierarchyLevels = [
    {value: '', label: 'All Levels'},
    {value: '0', label: 'Level 0 (Root)'},
    {value: '1', label: 'Level 1'},
    {value: '2', label: 'Level 2'},
    {value: '3', label: 'Level 3'},
    {value: 'true', label: 'Hierarchy Level'}
  ];

  showQrViewModal = false;
  qrData: any;

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
      hierarchy_level: ['0'],
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

    // Always include default parameters
    const params: any = {
      page: page,
      per_page: this.pagination.per_page,
      hierarchy_level: filters.hierarchy_level || '0',
      sort_by: filters.sort_by || 'created',
      sort_direction: filters.sort_direction || 'desc'
    };

    // Only add search if it has a value
    if (searchValue && searchValue.trim() !== '') {
      params.search = searchValue;
    }

    // Only add optional filter parameters if they have actual values
    if (filters.type_id && filters.type_id !== '') {
      params.type_id = filters.type_id;
    }
    if (filters.parent_id && filters.parent_id !== '') {
      params.parent_id = filters.parent_id;
    }
    if (filters.asset_count && filters.asset_count !== '') {
      params.asset_count = filters.asset_count;
    }

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

    // When switching to grid view, clear filters to show only level 0 data
    if (view === 'grid') {
      this.clearFilters();
    } else if (view === 'tree' && this.hierarchyData.length === 0) {
      this.loadHierarchy();
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
      hierarchy_level: '0',
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

  getDefaultLocationIcon(): string {
    // Return SVG for building-2 icon style (Lucide-like)
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>`;
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

  exportQR() {
    this.loading = true;
    
    this.locationService.exportQRCodes().subscribe({
      next: (blob) => {
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `locations-qr-codes-${new Date().toISOString().split('T')[0]}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        this.loading = false;
      },
      error: (error) => {
        console.error('Failed to export QR codes:', error);
        this.loading = false;
        // You might want to show a toast notification here
      }
    });
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


  openQRCodeModal(data: any) { //eslint-disable-line @typescript-es
    this.qrData = data;
    this.showQrViewModal = true;
  }


  closeQrViewModal() {
    this.showQrViewModal = false;
    this.qrData = null;
  }
}
