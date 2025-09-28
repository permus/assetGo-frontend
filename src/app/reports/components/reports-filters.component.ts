import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { ReportsApiService } from '../services/reports-api.service';
import { ReportConfig, DateRange, ReportPeriod, LocationOption, AssetOption, UserOption, StatusOption, PriorityOption, CategoryOption } from '../models/reports.models';

@Component({
  selector: 'app-reports-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="reports-filters">
      <div class="filters-container">
        <!-- Date Range Filters -->
        <div class="filter-group">
          <label class="filter-label">Date Range</label>
          <div class="date-range-controls">
            <select 
              class="filter-select period-select"
              [(ngModel)]="config.period"
              (ngModelChange)="onPeriodChange($event)">
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="this_week">This Week</option>
              <option value="last_week">Last Week</option>
              <option value="this_month">This Month</option>
              <option value="last_month">Last Month</option>
              <option value="this_quarter">This Quarter</option>
              <option value="last_quarter">Last Quarter</option>
              <option value="this_year">This Year</option>
              <option value="last_year">Last Year</option>
              <option value="ytd">Year to Date</option>
              <option value="custom">Custom Range</option>
            </select>
            
            <div class="custom-date-range" *ngIf="config.period === 'custom'">
              <input 
                type="date" 
                class="filter-input date-input"
                [(ngModel)]="config.dateRange.start"
                (ngModelChange)="onDateRangeChange()"
                placeholder="Start Date">
              <span class="date-separator">to</span>
              <input 
                type="date" 
                class="filter-input date-input"
                [(ngModel)]="config.dateRange.end"
                (ngModelChange)="onDateRangeChange()"
                placeholder="End Date">
            </div>
          </div>
        </div>

        <!-- Search Filter -->
        <div class="filter-group">
          <label class="filter-label">Search</label>
          <div class="search-input-container">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
            <input 
              type="text" 
              class="filter-input search-input"
              [(ngModel)]="config.search"
              (ngModelChange)="onSearchChange($event)"
              placeholder="Search assets, work orders...">
          </div>
        </div>

        <!-- Location Filter -->
        <div class="filter-group" *ngIf="showLocationFilter">
          <label class="filter-label">Location</label>
          <select 
            class="filter-select multi-select"
            multiple
            [(ngModel)]="config.locationIds"
            (ngModelChange)="onFilterChange()">
            <option 
              *ngFor="let location of locations" 
              [value]="location.id">
              {{ location.full_path }}
            </option>
          </select>
        </div>

        <!-- Asset Filter -->
        <div class="filter-group" *ngIf="showAssetFilter">
          <label class="filter-label">Asset</label>
          <select 
            class="filter-select multi-select"
            multiple
            [(ngModel)]="config.assetIds"
            (ngModelChange)="onFilterChange()">
            <option 
              *ngFor="let asset of assets" 
              [value]="asset.id">
              {{ asset.name }} ({{ asset.location }})
            </option>
          </select>
        </div>

        <!-- Status Filter -->
        <div class="filter-group" *ngIf="showStatusFilter">
          <label class="filter-label">Status</label>
          <select 
            class="filter-select multi-select"
            multiple
            [(ngModel)]="config.statusIds"
            (ngModelChange)="onFilterChange()">
            <option 
              *ngFor="let status of statuses" 
              [value]="status.id">
              {{ status.name }}
            </option>
          </select>
        </div>

        <!-- Priority Filter -->
        <div class="filter-group" *ngIf="showPriorityFilter">
          <label class="filter-label">Priority</label>
          <select 
            class="filter-select multi-select"
            multiple
            [(ngModel)]="config.priorityIds"
            (ngModelChange)="onFilterChange()">
            <option 
              *ngFor="let priority of priorities" 
              [value]="priority.id">
              {{ priority.name }}
            </option>
          </select>
        </div>

        <!-- User Filter -->
        <div class="filter-group" *ngIf="showUserFilter">
          <label class="filter-label">Assigned To</label>
          <select 
            class="filter-select multi-select"
            multiple
            [(ngModel)]="config.userIds"
            (ngModelChange)="onFilterChange()">
            <option 
              *ngFor="let user of users" 
              [value]="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>

        <!-- Page Size Filter -->
        <div class="filter-group">
          <label class="filter-label">Page Size</label>
          <select 
            class="filter-select"
            [(ngModel)]="config.pageSize"
            (ngModelChange)="onPageSizeChange($event)">
            <option value="25">25 per page</option>
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
            <option value="200">200 per page</option>
          </select>
        </div>

        <!-- Action Buttons -->
        <div class="filter-actions">
          <button 
            class="filter-button apply-button"
            [disabled]="isLoading"
            (click)="onApplyFilters()">
            <svg class="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            Apply Filters
          </button>
          
          <button 
            class="filter-button reset-button"
            [disabled]="isLoading"
            (click)="onResetFilters()">
            <svg class="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            Reset
          </button>
        </div>
      </div>

      <!-- Active Filters Summary -->
      <div class="active-filters" *ngIf="hasActiveFilters">
        <div class="active-filters-header">
          <span class="active-filters-label">Active Filters:</span>
          <button 
            class="clear-all-button"
            (click)="onResetFilters()">
            Clear All
          </button>
        </div>
        <div class="active-filters-list">
          <span 
            *ngIf="config.period !== 'this_month'" 
            class="filter-tag">
            {{ getPeriodLabel(config.period) }}
            <button class="remove-tag" (click)="removePeriodFilter()">×</button>
          </span>
          <span 
            *ngIf="config.search" 
            class="filter-tag">
            Search: "{{ config.search }}"
            <button class="remove-tag" (click)="removeSearchFilter()">×</button>
          </span>
          <span 
            *ngFor="let locationId of config.locationIds" 
            class="filter-tag">
            {{ getLocationName(locationId) }}
            <button class="remove-tag" (click)="removeLocationFilter(locationId)">×</button>
          </span>
          <span 
            *ngFor="let assetId of config.assetIds" 
            class="filter-tag">
            {{ getAssetName(assetId) }}
            <button class="remove-tag" (click)="removeAssetFilter(assetId)">×</button>
          </span>
          <span 
            *ngFor="let statusId of config.statusIds" 
            class="filter-tag">
            {{ getStatusName(statusId) }}
            <button class="remove-tag" (click)="removeStatusFilter(statusId)">×</button>
          </span>
          <span 
            *ngFor="let priorityId of config.priorityIds" 
            class="filter-tag">
            {{ getPriorityName(priorityId) }}
            <button class="remove-tag" (click)="removePriorityFilter(priorityId)">×</button>
          </span>
          <span 
            *ngFor="let userId of config.userIds" 
            class="filter-tag">
            {{ getUserName(userId) }}
            <button class="remove-tag" (click)="removeUserFilter(userId)">×</button>
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./reports-filters.component.scss']
})
export class ReportsFiltersComponent implements OnInit, OnDestroy {
  @Input() config: ReportConfig = {
    dateRange: { start: null, end: null },
    period: 'this_month',
    page: 1,
    pageSize: 50,
    locationIds: [],
    assetIds: [],
    userIds: [],
    statusIds: [],
    priorityIds: [],
    categoryIds: [],
    search: '',
    sortBy: '',
    sortDirection: 'asc'
  };
  @Input() isLoading: boolean = false;

  @Output() configChange = new EventEmitter<ReportConfig>();
  @Output() applyFilters = new EventEmitter<void>();
  @Output() resetFilters = new EventEmitter<void>();

  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();

  // Filter options
  locations: LocationOption[] = [];
  assets: AssetOption[] = [];
  users: UserOption[] = [];
  statuses: StatusOption[] = [];
  priorities: PriorityOption[] = [];
  categories: CategoryOption[] = [];

  constructor(private reportsApi: ReportsApiService) {}

  // Filter visibility
  showLocationFilter = true;
  showAssetFilter = true;
  showStatusFilter = true;
  showPriorityFilter = false;
  showUserFilter = false;

  ngOnInit(): void {
    this.loadFilterOptions();
    this.setupSearchDebounce();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Load filter options from API
   */
  private loadFilterOptions(): void {
    // Load locations
    this.reportsApi.getLocations()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (locations) => this.locations = locations,
        error: (error) => console.error('Error loading locations:', error)
      });

    // Load assets
    this.reportsApi.getAssets()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (assets) => this.assets = assets,
        error: (error) => console.error('Error loading assets:', error)
      });

    // Load users
    this.reportsApi.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => this.users = users,
        error: (error) => console.error('Error loading users:', error)
      });

    // Load statuses
    this.reportsApi.getWorkOrderStatuses()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (statuses) => this.statuses = statuses,
        error: (error) => console.error('Error loading statuses:', error)
      });

    // Load priorities
    this.reportsApi.getWorkOrderPriorities()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (priorities) => this.priorities = priorities,
        error: (error) => console.error('Error loading priorities:', error)
      });
  }

  /**
   * Setup search debounce
   */
  private setupSearchDebounce(): void {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.onFilterChange();
      });
  }

  /**
   * Handle period change
   */
  onPeriodChange(period: ReportPeriod): void {
    this.config.period = period;
    this.updateDateRangeFromPeriod();
    this.onFilterChange();
  }

  /**
   * Handle date range change
   */
  onDateRangeChange(): void {
    this.config.period = 'custom';
    this.onFilterChange();
  }

  /**
   * Handle search change
   */
  onSearchChange(search: string): void {
    this.config.search = search;
    this.searchSubject.next(search);
  }

  /**
   * Handle page size change
   */
  onPageSizeChange(pageSize: number): void {
    this.config.pageSize = pageSize;
    this.config.page = 1; // Reset to first page
    this.onFilterChange();
  }

  /**
   * Handle filter change
   */
  onFilterChange(): void {
    this.configChange.emit({ ...this.config });
  }

  /**
   * Handle apply filters
   */
  onApplyFilters(): void {
    this.applyFilters.emit();
  }

  /**
   * Handle reset filters
   */
  onResetFilters(): void {
    this.resetFilters.emit();
  }

  /**
   * Update date range based on period
   */
  private updateDateRangeFromPeriod(): void {
    const now = new Date();
    const period = this.config.period;

    switch (period) {
      case 'today':
        this.config.dateRange = {
          start: now.toISOString().split('T')[0],
          end: now.toISOString().split('T')[0]
        };
        break;
      case 'yesterday':
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        this.config.dateRange = {
          start: yesterday.toISOString().split('T')[0],
          end: yesterday.toISOString().split('T')[0]
        };
        break;
      case 'this_week':
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        this.config.dateRange = {
          start: startOfWeek.toISOString().split('T')[0],
          end: endOfWeek.toISOString().split('T')[0]
        };
        break;
      case 'this_month':
        this.config.dateRange = {
          start: new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0],
          end: new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0]
        };
        break;
      case 'this_quarter':
        const quarter = Math.floor(now.getMonth() / 3);
        this.config.dateRange = {
          start: new Date(now.getFullYear(), quarter * 3, 1).toISOString().split('T')[0],
          end: new Date(now.getFullYear(), quarter * 3 + 3, 0).toISOString().split('T')[0]
        };
        break;
      case 'this_year':
        this.config.dateRange = {
          start: new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0],
          end: new Date(now.getFullYear(), 11, 31).toISOString().split('T')[0]
        };
        break;
      case 'ytd':
        this.config.dateRange = {
          start: new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0],
          end: now.toISOString().split('T')[0]
        };
        break;
    }
  }

  /**
   * Get period label
   */
  getPeriodLabel(period: ReportPeriod): string {
    const labels: Record<ReportPeriod, string> = {
      'today': 'Today',
      'yesterday': 'Yesterday',
      'this_week': 'This Week',
      'last_week': 'Last Week',
      'this_month': 'This Month',
      'last_month': 'Last Month',
      'this_quarter': 'This Quarter',
      'last_quarter': 'Last Quarter',
      'this_year': 'This Year',
      'last_year': 'Last Year',
      'ytd': 'Year to Date',
      'custom': 'Custom Range'
    };
    return labels[period] || period;
  }

  /**
   * Check if there are active filters
   */
  get hasActiveFilters(): boolean {
    return !!(
      this.config.period !== 'this_month' ||
      this.config.search ||
      this.config.locationIds.length > 0 ||
      this.config.assetIds.length > 0 ||
      this.config.statusIds.length > 0 ||
      this.config.priorityIds.length > 0 ||
      this.config.userIds.length > 0
    );
  }

  // Helper methods for getting names
  getLocationName(id: number): string {
    const location = this.locations.find(l => l.id === id);
    return location ? location.full_path : `Location ${id}`;
  }

  getAssetName(id: number): string {
    const asset = this.assets.find(a => a.id === id);
    return asset ? asset.name : `Asset ${id}`;
  }

  getStatusName(id: number): string {
    const status = this.statuses.find(s => s.id === id);
    return status ? status.name : `Status ${id}`;
  }

  getPriorityName(id: number): string {
    const priority = this.priorities.find(p => p.id === id);
    return priority ? priority.name : `Priority ${id}`;
  }

  getUserName(id: number): string {
    const user = this.users.find(u => u.id === id);
    return user ? user.name : `User ${id}`;
  }

  // Remove filter methods
  removePeriodFilter(): void {
    this.config.period = 'this_month';
    this.updateDateRangeFromPeriod();
    this.onFilterChange();
  }

  removeSearchFilter(): void {
    this.config.search = '';
    this.onFilterChange();
  }

  removeLocationFilter(id: number): void {
    this.config.locationIds = this.config.locationIds.filter(lid => lid !== id);
    this.onFilterChange();
  }

  removeAssetFilter(id: number): void {
    this.config.assetIds = this.config.assetIds.filter(aid => aid !== id);
    this.onFilterChange();
  }

  removeStatusFilter(id: number): void {
    this.config.statusIds = this.config.statusIds.filter(sid => sid !== id);
    this.onFilterChange();
  }

  removePriorityFilter(id: number): void {
    this.config.priorityIds = this.config.priorityIds.filter(pid => pid !== id);
    this.onFilterChange();
  }

  removeUserFilter(id: number): void {
    this.config.userIds = this.config.userIds.filter(uid => uid !== id);
    this.onFilterChange();
  }
}
