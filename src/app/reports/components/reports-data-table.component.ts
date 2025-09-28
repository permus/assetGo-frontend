import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportCategory, PaginationMeta } from '../models/reports.models';

interface SortConfig {
  field: string;
  direction: 'asc' | 'desc';
}

@Component({
  selector: 'app-reports-data-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="data-table-container">
      <!-- Table Header -->
      <div class="table-header">
        <h3 class="table-title">Report Data</h3>
        <div class="table-actions">
          <span class="record-count" *ngIf="pagination">
            Showing {{ pagination.from || 0 }} to {{ pagination.to || 0 }} of {{ pagination.total || 0 }} records
          </span>
        </div>
      </div>

      <!-- Table -->
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th 
                *ngFor="let column of columns" 
                class="table-header-cell"
                [class.sortable]="column.sortable"
                [class.sorted]="sortConfig?.field === column.key"
                (click)="onSort(column.key)"
                [attr.title]="column.sortable ? 'Click to sort' : ''">
                
                <div class="header-content">
                  <span class="header-label">{{ column.label }}</span>
                  <svg 
                    *ngIf="column.sortable" 
                    class="sort-icon"
                    [class.sort-asc]="sortConfig?.field === column.key && sortConfig?.direction === 'asc'"
                    [class.sort-desc]="sortConfig?.field === column.key && sortConfig?.direction === 'desc'"
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr 
              *ngFor="let row of data; trackBy: trackByIndex; let i = index" 
              class="table-row"
              [class.even]="i % 2 === 0">
              <td 
                *ngFor="let column of columns" 
                class="table-cell"
                [class]="'cell-' + column.key">
                
                <ng-container [ngSwitch]="column.type">
                  <!-- Text -->
                  <span *ngSwitchCase="'text'" class="cell-text">
                    {{ getCellValue(row, column.key) }}
                  </span>
                  
                  <!-- Number -->
                  <span *ngSwitchCase="'number'" class="cell-number">
                    {{ formatNumber(getCellValue(row, column.key)) }}
                  </span>
                  
                  <!-- Currency -->
                  <span *ngSwitchCase="'currency'" class="cell-currency">
                    {{ formatCurrency(getCellValue(row, column.key)) }}
                  </span>
                  
                  <!-- Percentage -->
                  <span *ngSwitchCase="'percentage'" class="cell-percentage">
                    {{ formatPercentage(getCellValue(row, column.key)) }}
                  </span>
                  
                  <!-- Date -->
                  <span *ngSwitchCase="'date'" class="cell-date">
                    {{ formatDate(getCellValue(row, column.key)) }}
                  </span>
                  
                  <!-- Status -->
                  <span *ngSwitchCase="'status'" class="cell-status">
                    <span 
                      class="status-badge"
                      [class]="'status-' + getCellValue(row, column.key)">
                      {{ getCellValue(row, column.key) }}
                    </span>
                  </span>
                  
                  <!-- Priority -->
                  <span *ngSwitchCase="'priority'" class="cell-priority">
                    <span 
                      class="priority-badge"
                      [class]="'priority-' + getCellValue(row, column.key)">
                      {{ getCellValue(row, column.key) }}
                    </span>
                  </span>
                  
                  <!-- Actions -->
                  <div *ngSwitchCase="'actions'" class="cell-actions">
                    <button 
                      class="action-button view-button"
                      (click)="onView(row)"
                      title="View Details">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button 
                      class="action-button edit-button"
                      (click)="onEdit(row)"
                      title="Edit">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <!-- Default -->
                  <span *ngSwitchDefault class="cell-default">
                    {{ getCellValue(row, column.key) }}
                  </span>
                </ng-container>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Empty State -->
      <div class="empty-state" *ngIf="!isLoading && data.length === 0">
        <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"></path>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <h4 class="empty-title">No Data Available</h4>
        <p class="empty-description">No records found for the selected filters.</p>
      </div>

      <!-- Loading State -->
      <div class="loading-state" *ngIf="isLoading">
        <div class="loading-skeleton">
          <div class="skeleton-row" *ngFor="let i of [1,2,3,4,5]">
            <div class="skeleton-cell" *ngFor="let j of [1,2,3,4,5]"></div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination-container" *ngIf="pagination && pagination.last_page > 1">
        <div class="pagination-info">
          <span class="pagination-text">
            Page {{ pagination.current_page }} of {{ pagination.last_page }}
          </span>
        </div>
        
        <div class="pagination-controls">
          <button 
            class="pagination-button"
            [disabled]="pagination.current_page <= 1"
            (click)="onPageChange(pagination.current_page - 1)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
          </button>
          
          <div class="pagination-pages">
            <button 
              *ngFor="let page of getPageNumbers()" 
              class="pagination-page"
              [class.active]="page === pagination.current_page"
              [class.ellipsis]="page === '...'"
              [disabled]="page === '...'"
              (click)="onPageChange(page)">
              {{ page }}
            </button>
          </div>
          
          <button 
            class="pagination-button"
            [disabled]="pagination.current_page >= pagination.last_page"
            (click)="onPageChange(pagination.current_page + 1)">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./reports-data-table.component.scss']
})
export class ReportsDataTableComponent {
  @Input() data: any[] = [];
  @Input() pagination: PaginationMeta | null = null;
  @Input() category: ReportCategory = 'assets';
  @Input() isLoading: boolean = false;

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<SortConfig>();
  @Output() view = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  sortConfig: SortConfig | null = null;

  // Column definitions based on category
  get columns() {
    switch (this.category) {
      case 'assets':
        return [
          { key: 'name', label: 'Asset Name', type: 'text', sortable: true },
          { key: 'status', label: 'Status', type: 'status', sortable: true },
          { key: 'location', label: 'Location', type: 'text', sortable: true },
          { key: 'category', label: 'Category', type: 'text', sortable: true },
          { key: 'purchase_price', label: 'Purchase Price', type: 'currency', sortable: true },
          { key: 'purchase_date', label: 'Purchase Date', type: 'date', sortable: true },
          { key: 'actions', label: 'Actions', type: 'actions', sortable: false }
        ];
      case 'maintenance':
        return [
          { key: 'title', label: 'Work Order', type: 'text', sortable: true },
          { key: 'asset', label: 'Asset', type: 'text', sortable: true },
          { key: 'status', label: 'Status', type: 'status', sortable: true },
          { key: 'priority', label: 'Priority', type: 'priority', sortable: true },
          { key: 'assigned_to', label: 'Assigned To', type: 'text', sortable: true },
          { key: 'created_at', label: 'Created', type: 'date', sortable: true },
          { key: 'actions', label: 'Actions', type: 'actions', sortable: false }
        ];
      default:
        return [
          { key: 'name', label: 'Name', type: 'text', sortable: true },
          { key: 'value', label: 'Value', type: 'text', sortable: true },
          { key: 'actions', label: 'Actions', type: 'actions', sortable: false }
        ];
    }
  }

  /**
   * Track by function for ngFor
   */
  trackByIndex(index: number, item: any): number {
    return index;
  }

  /**
   * Get cell value from row data
   */
  getCellValue(row: any, key: string): any {
    return row[key] || '-';
  }

  /**
   * Handle sort
   */
  onSort(field: string): void {
    if (!this.columns.find(c => c.key === field)?.sortable) {
      return;
    }

    let direction: 'asc' | 'desc' = 'asc';
    
    if (this.sortConfig?.field === field) {
      direction = this.sortConfig.direction === 'asc' ? 'desc' : 'asc';
    }

    this.sortConfig = { field, direction };
    this.sortChange.emit(this.sortConfig);
  }

  /**
   * Handle page change
   */
  onPageChange(page: number): void {
    if (page >= 1 && page <= (this.pagination?.last_page || 1)) {
      this.pageChange.emit(page);
    }
  }

  /**
   * Handle view action
   */
  onView(row: any): void {
    this.view.emit(row);
  }

  /**
   * Handle edit action
   */
  onEdit(row: any): void {
    this.edit.emit(row);
  }

  /**
   * Get page numbers for pagination
   */
  getPageNumbers(): (number | string)[] {
    if (!this.pagination) return [];

    const current = this.pagination.current_page;
    const last = this.pagination.last_page;
    const pages: (number | string)[] = [];

    if (last <= 7) {
      for (let i = 1; i <= last; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (current > 4) {
        pages.push('...');
      }
      
      const start = Math.max(2, current - 1);
      const end = Math.min(last - 1, current + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (current < last - 3) {
        pages.push('...');
      }
      
      pages.push(last);
    }

    return pages;
  }

  /**
   * Format number
   */
  formatNumber(value: any): string {
    if (value === null || value === undefined || value === '-') return '-';
    return new Intl.NumberFormat('en-AE').format(Number(value));
  }

  /**
   * Format currency
   */
  formatCurrency(value: any): string {
    if (value === null || value === undefined || value === '-') return '-';
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED'
    }).format(Number(value));
  }

  /**
   * Format percentage
   */
  formatPercentage(value: any): string {
    if (value === null || value === undefined || value === '-') return '-';
    return `${Number(value).toFixed(1)}%`;
  }

  /**
   * Format date
   */
  formatDate(value: any): string {
    if (value === null || value === undefined || value === '-') return '-';
    return new Date(value).toLocaleDateString('en-AE');
  }
}
