import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecFilters, RecType, Level } from '../../shared/ai-recommendations.interface';

@Component({
  selector: 'app-recs-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="recs-filters">
      <div class="filters-content">
        <!-- Search -->
        <div class="filter-group">
          <label class="filter-label">Search</label>
          <div class="search-input">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              [(ngModel)]="filters.search"
              (ngModelChange)="onFilterChange()"
              placeholder="Search recommendations..."
              class="search-field">
          </div>
        </div>

        <!-- Type Filter -->
        <div class="filter-group">
          <label class="filter-label">Type</label>
          <select
            [(ngModel)]="filters.type"
            (ngModelChange)="onFilterChange()"
            class="filter-select">
            <option value="">All Types</option>
            <option value="cost_optimization">Cost Optimization</option>
            <option value="maintenance">Maintenance</option>
            <option value="efficiency">Efficiency</option>
            <option value="compliance">Compliance</option>
          </select>
        </div>

        <!-- Priority Filter -->
        <div class="filter-group">
          <label class="filter-label">Priority</label>
          <select
            [(ngModel)]="filters.priority"
            (ngModelChange)="onFilterChange()"
            class="filter-select">
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <!-- Impact Filter -->
        <div class="filter-group">
          <label class="filter-label">Impact</label>
          <select
            [(ngModel)]="filters.impact"
            (ngModelChange)="onFilterChange()"
            class="filter-select">
            <option value="">All Impacts</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <!-- Min Confidence -->
        <div class="filter-group">
          <label class="filter-label">Min Confidence: {{ filters.minConfidence || 0 }}%</label>
          <input
            type="range"
            [(ngModel)]="filters.minConfidence"
            (ngModelChange)="onFilterChange()"
            min="0"
            max="100"
            step="5"
            class="confidence-slider">
        </div>

        <!-- Clear Filters -->
        <div class="filter-group">
          <button
            (click)="clearFilters()"
            class="clear-button"
            [disabled]="!hasActiveFilters">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M10 11v6M14 11v6"></path>
            </svg>
            Clear
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./recs-filters.component.scss']
})
export class RecsFiltersComponent implements OnInit {
  @Input() filters: RecFilters = {};
  @Output() filtersChange = new EventEmitter<RecFilters>();

  ngOnInit() {
    // Initialize default values
    if (this.filters.minConfidence === undefined) {
      this.filters.minConfidence = 0;
    }
  }

  onFilterChange() {
    this.filtersChange.emit(this.filters);
  }

  clearFilters() {
    this.filters = {
      minConfidence: 0
    };
    this.filtersChange.emit(this.filters);
  }

  get hasActiveFilters(): boolean {
    return !!(
      this.filters.type ||
      this.filters.priority ||
      this.filters.impact ||
      this.filters.search ||
      (this.filters.minConfidence && this.filters.minConfidence > 0)
    );
  }
}
