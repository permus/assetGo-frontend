import {Component, OnInit, OnDestroy, Output, EventEmitter, effect} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkOrderService, WorkOrderFilters } from '../../services/work-order.service';
import { AssetService } from '../../../assets/services/asset.service';
import { LocationService } from '../../../locations/services/location.service';
import { MetaWorkOrdersService } from '../../../core/services/meta-work-orders.service';
import { MetaItem } from '../../../core/types/work-order.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-order-filters',
  standalone: false,
  templateUrl: './work-order-filters.component.html',
  styleUrls: ['./work-order-filters.component.scss']
})

export class WorkOrderFiltersComponent implements OnInit, OnDestroy {
  @Output() filtersChanged = new EventEmitter<any>();

  filterForm: FormGroup;
  isLoading = false;
  private subscription = new Subscription();

  // Filter states
  showStatusDropdown = false;
  showPriorityDropdown = false;
  showCategoryDropdown = false;
  showTypeDropdown = false;
  showAdvanced = false;
  showDateRangePicker = false;
  showAssetDropdown = false;
  showLocationDropdown = false;

  // Sort options
  sortBy = 'created_at';
  sortOrder = 'desc';

  // Filter data
  statusOptions: MetaItem[] = [];
  priorityOptions: MetaItem[] = [];
  categoryOptions: MetaItem[] = [];
  typeOptions: Array<{value: string; label: string}> = [
    { value: 'ppm', label: 'PPM (Planned Preventive Maintenance)' },
    { value: 'corrective', label: 'Corrective' },
    { value: 'predictive', label: 'Predictive' },
    { value: 'reactive', label: 'Reactive' }
  ];

  sortOptions = [
    { value: 'created_at', label: 'Created Date' },
    { value: 'due_date', label: 'Due Date' },
    { value: 'priority', label: 'Priority' },
    { value: 'status', label: 'Status' },
    { value: 'title', label: 'Title' }
  ];

  // Asset and location options
  assets: Array<{ id: number; name: string; asset_id: string }> = [];
  locations: Array<{ id: number; name: string }> = [];
  users: Array<{ id: number; first_name: string; last_name: string }> = [];

  constructor(
    private fb: FormBuilder,
    private workOrderService: WorkOrderService,
    private assetService: AssetService,
    private locationService: LocationService,
    private metaService: MetaWorkOrdersService
  ) {
    this.filterForm = this.fb.group({
      search: [''],
      status_id: [null],
      priority_id: [null],
      category_id: [null],
      type: [null],
      asset_id: [''],
      location_id: [''],
      assigned_to: [''],
      is_overdue: [false],
      start_date: [''],
      end_date: [''],
      due_start_date: [''],
      due_end_date: ['']
    });
    effect(() => {
      this.checkFilter();
    });
  }

  ngOnInit(): void {
    // Avoid stale cached metadata if user session or API changed
    this.metaService.clearAllCache();
    this.loadFilterOptions();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadFilterOptions(): void {
    // Load metadata
    this.subscription.add(
      this.metaService.getStatus().subscribe({
        next: (statuses) => {
          this.statusOptions = statuses;
        },
        error: (error) => {
          console.error('Error loading statuses:', error);
        }
      })
    );

    this.subscription.add(
      this.metaService.getPriorities().subscribe({
        next: (priorities) => {
          this.priorityOptions = priorities;
        },
        error: (error) => {
          console.error('Error loading priorities:', error);
        }
      })
    );

    this.subscription.add(
      this.metaService.getCategories().subscribe({
        next: (categories) => {
          this.categoryOptions = categories;
        },
        error: (error) => {
          console.error('Error loading categories:', error);
        }
      })
    );

    // Load assets
    this.subscription.add(
      this.assetService.getAssets({ per_page: 1000 }).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.assets = response.data.assets || response.data || [];
          }
        },
        error: (error) => {
          console.error('Error loading assets:', error);
        }
      })
    );

    // Load locations
    this.subscription.add(
      this.locationService.getLocations({ per_page: 1000 }).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.locations = response.data.locations || response.data || [];
          }
        },
        error: (error) => {
          console.error('Error loading locations:', error);
        }
      })
    );

    // Load work order filters (users, etc.)
    this.subscription.add(
      this.workOrderService.getWorkOrderFilters().subscribe({
        next: (response) => {
          this.users = response.users || [];
        },
        error: (error) => {
          console.error('Error loading filter options:', error);
        }
      })
    );
  }

  // Status dropdown methods
  toggleStatusDropdown(): void {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
    this.showTypeDropdown = false;
    this.showAssetDropdown = false;
    this.showLocationDropdown = false;
  }

  selectStatus(statusId: number | null): void {
    this.filterForm.patchValue({ status_id: statusId });
    this.showStatusDropdown = false;
  }

  getStatusLabel(): string {
    const statusId = this.filterForm.value.status_id;
    if (!statusId) return 'All Status';
    const selected = this.statusOptions.find(opt => opt.id === statusId);
    return selected ? selected.name : 'All Status';
  }

  // Priority dropdown methods
  togglePriorityDropdown(): void {
    this.showPriorityDropdown = !this.showPriorityDropdown;
    this.showStatusDropdown = false;
    this.showCategoryDropdown = false;
    this.showTypeDropdown = false;
    this.showAssetDropdown = false;
    this.showLocationDropdown = false;
  }

  selectPriority(priorityId: number | null): void {
    this.filterForm.patchValue({ priority_id: priorityId });
    this.showPriorityDropdown = false;
  }

  getPriorityLabel(): string {
    const priorityId = this.filterForm.value.priority_id;
    if (!priorityId) return 'All Priority';
    const selected = this.priorityOptions.find(opt => opt.id === priorityId);
    return selected ? selected.name : 'All Priority';
  }

  // Asset dropdown methods
  toggleAssetDropdown(): void {
    this.showAssetDropdown = !this.showAssetDropdown;
    this.showStatusDropdown = false;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
    this.showTypeDropdown = false;
    this.showLocationDropdown = false;
  }

  selectAsset(assetId: number): void {
    this.filterForm.patchValue({ asset_id: assetId === 0 ? null : assetId });
    this.showAssetDropdown = false;
  }

  getAssetLabel(): string {
    const assetId = this.filterForm.value.asset_id;
    if (!assetId) return 'All Assets';
    const asset = this.assets.find(a => a.id === assetId);
    return asset ? asset.name : 'All Assets';
  }

  // Category dropdown methods
  toggleCategoryDropdown(): void {
    this.showCategoryDropdown = !this.showCategoryDropdown;
    this.showStatusDropdown = false;
    this.showPriorityDropdown = false;
    this.showTypeDropdown = false;
    this.showAssetDropdown = false;
    this.showLocationDropdown = false;
  }

  selectCategory(categoryId: number | null): void {
    this.filterForm.patchValue({ category_id: categoryId });
    this.showCategoryDropdown = false;
  }

  getCategoryLabel(): string {
    const categoryId = this.filterForm.value.category_id;
    if (!categoryId) return 'All Categories';
    const selected = this.categoryOptions.find(opt => opt.id === categoryId);
    return selected ? selected.name : 'All Categories';
  }

  getCategoryValue(): number | null {
    return this.filterForm.value.category_id;
  }

  // Type dropdown methods
  toggleTypeDropdown(): void {
    this.showTypeDropdown = !this.showTypeDropdown;
    this.showStatusDropdown = false;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
    this.showAssetDropdown = false;
    this.showLocationDropdown = false;
  }

  selectType(type: string | null): void {
    this.filterForm.patchValue({ type: type });
    this.showTypeDropdown = false;
    this.onFilterChange();
  }

  getTypeLabel(): string {
    const type = this.filterForm.value.type;
    if (!type) return 'All Types';
    const selected = this.typeOptions.find(opt => opt.value === type);
    return selected ? selected.label : 'All Types';
  }

  getTypeValue(): string | null {
    return this.filterForm.value.type;
  }

  // Location dropdown methods
  toggleLocationDropdown(): void {
    this.showLocationDropdown = !this.showLocationDropdown;
    this.showStatusDropdown = false;
    this.showPriorityDropdown = false;
    this.showCategoryDropdown = false;
    this.showTypeDropdown = false;
    this.showAssetDropdown = false;
  }

  selectLocation(locationId: number): void {
    this.filterForm.patchValue({ location_id: locationId === 0 ? null : locationId });
    this.showLocationDropdown = false;
  }

  getLocationLabel(): string {
    const locationId = this.filterForm.value.location_id;
    if (!locationId) return 'All Locations';
    const location = this.locations.find(l => l.id === locationId);
    return location ? location.name : 'All Locations';
  }

  // Date range methods
  toggleDateRangePicker(): void {
    this.showDateRangePicker = !this.showDateRangePicker;
  }

  // Advanced methods
  toggleAdvanced(): void {
    this.showAdvanced = !this.showAdvanced;
  }

  setSortBy(value: string): void {
    this.sortBy = value;
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  onSearch(): void {
    this.onFilterChange();
  }

  onFilterChange(): void {
    const formValue = this.filterForm.value;
    const filters = {
      ...formValue,
      sortBy: this.sortBy,
      sortOrder: this.sortOrder
    };

    // Clean up empty values
    Object.keys(filters).forEach(key => {
      if (filters[key] === '' || filters[key] === null || filters[key] === undefined) {
        delete filters[key];
      }
    });

    // Emit the filters to parent component
    this.filtersChanged.emit(filters);
  }

  clearFilters(): void {
    this.filterForm.patchValue({
      search: '',
      status_id: null,
      priority_id: null,
      category_id: null,
      type: null,
      asset_id: '',
      location_id: '',
      assigned_to: '',
      is_overdue: false,
      start_date: '',
      end_date: '',
      due_start_date: '',
      due_end_date: ''
    });
    this.sortBy = 'created_at';
    this.sortOrder = 'desc';
    this.showAdvanced = false;
    this.showDateRangePicker = false;
    this.onFilterChange();
  }
  checkFilter(): boolean {
    const { status_id, priority_id, category_id, type, search } = this.filterForm.value;

    return !!(
      status_id ||
      priority_id ||
      category_id ||
      type ||
      (search && search.trim() !== '')
    );
  }

  // Close dropdowns when clicking outside
  onDocumentClick(event: any): void {
    if (!event.target.closest('.filter-dropdown')) {
      this.showStatusDropdown = false;
      this.showPriorityDropdown = false;
      this.showCategoryDropdown = false;
      this.showTypeDropdown = false;
      this.showAssetDropdown = false;
      this.showLocationDropdown = false;
    }
  }

  // Helper methods for template
  getAssetName(assetId: number): string {
    const asset = this.assets.find(a => a.id === assetId);
    return asset ? asset.name : '';
  }

  getLocationName(locationId: number): string {
    const location = this.locations.find(l => l.id === locationId);
    return location ? location.name : '';
  }

  // New helper methods for enhanced select boxes
  getStatusValue(): number | null {
    return this.filterForm.value.status_id;
  }

  getPriorityValue(): number | null {
    return this.filterForm.value.priority_id;
  }

  getAssetValue(): number | null {
    return this.filterForm.value.asset_id;
  }

  getLocationValue(): number | null {
    return this.filterForm.value.location_id;
  }

  getStatusColor(statusId: number | null): string {
    if (!statusId) return '#6B7280';
    const status = this.statusOptions.find(s => s.id === statusId);
    if (!status) return '#6B7280';

    const colorMap: { [key: string]: string } = {
      'open': '#10B981',      // Green
      'in-progress': '#F59E0B', // Amber
      'completed': '#3B82F6',   // Blue
      'cancelled': '#EF4444',   // Red
      'pending': '#8B5CF6'      // Purple
    };
    return colorMap[status.slug] || '#6B7280'; // Default gray
  }

  getPriorityColor(priorityId: number | null): string {
    if (!priorityId) return '#6B7280';
    const priority = this.priorityOptions.find(p => p.id === priorityId);
    if (!priority) return '#6B7280';

    const colorMap: { [key: string]: string } = {
      'low': '#10B981',       // Green
      'medium': '#F59E0B',    // Amber
      'high': '#F97316',      // Orange
      'critical': '#EF4444'   // Red
    };
    return colorMap[priority.slug] || '#6B7280'; // Default gray
  }

  getStatusDescription(statusId: number | null): string {
    if (!statusId) return 'Work order status';
    const status = this.statusOptions.find(s => s.id === statusId);
    if (!status) return 'Work order status';

    const descriptionMap: { [key: string]: string } = {
      'open': 'Work order is open and ready for assignment',
      'in-progress': 'Work order is currently being worked on',
      'completed': 'Work order has been completed successfully',
      'cancelled': 'Work order has been cancelled',
      'pending': 'Work order is pending approval or resources'
    };
    return descriptionMap[status.slug] || 'Work order status';
  }

  getPriorityDescription(priorityId: number | null): string {
    if (!priorityId) return 'Work order priority level';
    const priority = this.priorityOptions.find(p => p.id === priorityId);
    if (!priority) return 'Work order priority level';

    const descriptionMap: { [key: string]: string } = {
      'low': 'Low priority - can be addressed when convenient',
      'medium': 'Medium priority - should be addressed soon',
      'high': 'High priority - needs immediate attention',
      'critical': 'Critical priority - requires immediate action'
    };
    return descriptionMap[priority.slug] || 'Work order priority level';
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }
}
