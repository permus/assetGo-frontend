import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkOrderService } from '../../services/work-order.service';
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
  showAdvanced = false;

  // Sort options
  sortBy = 'date';
  sortOrder = 'desc';

  statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'open', label: 'Open' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  priorityOptions = [
    { value: 'all', label: 'All Priority' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'critical', label: 'Critical' }
  ];

  sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'priority', label: 'Priority' },
    { value: 'status', label: 'Status' }
  ];

  constructor(private fb: FormBuilder, private workOrderService: WorkOrderService) {
    this.filterForm = this.fb.group({
      search: [''],
      status: ['all'],
      priority: ['all']
    });
  }

  ngOnInit(): void {
    // Listen to form changes and emit filter events
    this.subscription.add(
      this.filterForm.valueChanges.subscribe(() => {
        this.onFilterChange();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Status dropdown methods
  toggleStatusDropdown(): void {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showPriorityDropdown = false;
  }

  selectStatus(value: string): void {
    this.filterForm.patchValue({ status: value });
    this.showStatusDropdown = false;
  }

  getStatusLabel(): string {
    const selected = this.statusOptions.find(opt => opt.value === this.filterForm.value.status);
    return selected ? selected.label : 'All Status';
  }

  // Priority dropdown methods
  togglePriorityDropdown(): void {
    this.showPriorityDropdown = !this.showPriorityDropdown;
    this.showStatusDropdown = false;
  }

  selectPriority(value: string): void {
    this.filterForm.patchValue({ priority: value });
    this.showPriorityDropdown = false;
  }

  getPriorityLabel(): string {
    const selected = this.priorityOptions.find(opt => opt.value === this.filterForm.value.priority);
    return selected ? selected.label : 'All Priority';
  }

  // Advanced methods
  toggleAdvanced(): void {
    this.showAdvanced = !this.showAdvanced;
  }

  setSortBy(value: string): void {
    this.sortBy = value;
    this.onFilterChange();
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.onFilterChange();
  }

  onSearch(): void {
    this.onFilterChange();
  }

  onFilterChange(): void {
    const filters = {
      ...this.filterForm.value,
      sortBy: this.sortBy,
      sortOrder: this.sortOrder
    };
    
    // Emit the filters to parent component
    this.filtersChanged.emit(filters);
    
    // Log for debugging
    console.log('Filters changed:', filters);
  }

  clearFilters(): void {
    this.filterForm.patchValue({
      search: '',
      status: 'all',
      priority: 'all'
    });
    this.sortBy = 'date';
    this.sortOrder = 'desc';
    this.showAdvanced = false;
  }

  // Close dropdowns when clicking outside
  onDocumentClick(event: any): void {
    if (!event.target.closest('.filter-dropdown')) {
      this.showStatusDropdown = false;
      this.showPriorityDropdown = false;
    }
  }
}
