import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface PaginationData {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() pagination!: PaginationData;
  @Input() showPerPageSelector: boolean = true;
  @Input() showJumpToPage: boolean = true;
  @Input() perPageOptions: number[] = [10, 20, 50, 100];
  @Input() maxVisiblePages: number = 7;

  @Output() pageChange = new EventEmitter<number>();
  @Output() perPageChange = new EventEmitter<number>();

  jumpToPage: number | null = null;
  visiblePages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pagination']) {
      this.calculateVisiblePages();
      this.jumpToPage = this.pagination.current_page;
    }
  }

  /**
   * Calculate which page numbers to show
   */
  private calculateVisiblePages(): void {
    const current = this.pagination.current_page;
    const total = this.pagination.last_page;
    const maxVisible = this.maxVisiblePages;

    this.visiblePages = [];

    if (total <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= total; i++) {
        this.visiblePages.push(i);
      }
    } else {
      // Calculate range around current page
      let start = Math.max(1, current - Math.floor(maxVisible / 2));
      let end = Math.min(total, start + maxVisible - 1);

      // Adjust start if we're near the end
      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        this.visiblePages.push(i);
      }
    }
  }

  /**
   * Navigate to a specific page
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.pagination.last_page && page !== this.pagination.current_page) {
      this.pageChange.emit(page);
    }
  }

  /**
   * Change items per page
   */
  onPerPageChange(event: any): void {
    const newPerPage = parseInt(event.target.value);
    if (newPerPage !== this.pagination.per_page) {
      this.perPageChange.emit(newPerPage);
    }
  }

  /**
   * Jump to a specific page using input
   */
  onJumpToPage(): void {
    if (this.jumpToPage && this.jumpToPage >= 1 && this.jumpToPage <= this.pagination.last_page) {
      this.goToPage(this.jumpToPage);
    }
  }

  /**
   * Go to previous page
   */
  previousPage(): void {
    if (this.pagination.current_page > 1) {
      this.goToPage(this.pagination.current_page - 1);
    }
  }

  /**
   * Go to next page
   */
  nextPage(): void {
    if (this.pagination.current_page < this.pagination.last_page) {
      this.goToPage(this.pagination.current_page + 1);
    }
  }

  /**
   * Check if we should show ellipsis before pages
   */
  get showStartEllipsis(): boolean {
    return this.visiblePages.length > 0 && this.visiblePages[0] > 2;
  }

  /**
   * Check if we should show ellipsis after pages
   */
  get showEndEllipsis(): boolean {
    return this.visiblePages.length > 0 && 
           this.visiblePages[this.visiblePages.length - 1] < this.pagination.last_page - 1;
  }
}