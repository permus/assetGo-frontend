import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recommendation } from '../../shared/ai-recommendations.interface';

@Component({
  selector: 'app-recs-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="recs-list">
      <!-- List Header -->
      <div class="list-header">
        <h3 class="list-title">Recommendations</h3>
        <div class="list-info" *ngIf="pagination">
          <span class="item-count">{{ pagination.total }} recommendations</span>
          <div class="page-size-selector">
            <label class="page-size-label">Show:</label>
            <select 
              [(ngModel)]="pageSize" 
              (ngModelChange)="onPageSizeChange()"
              class="page-size-select">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="loading-state">
        <div class="skeleton-card" *ngFor="let i of [1,2,3]">
          <div class="skeleton-header">
            <div class="skeleton-icon"></div>
            <div class="skeleton-content">
              <div class="skeleton-line w-3-4"></div>
              <div class="skeleton-line w-1-2"></div>
            </div>
          </div>
          <div class="skeleton-body">
            <div class="skeleton-line w-full"></div>
            <div class="skeleton-line w-2-3"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div *ngIf="!isLoading && errorMessage" class="error-state">
        <svg class="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <h3 class="error-title">Error Loading Recommendations</h3>
        <p class="error-description">{{ errorMessage }}</p>
        <button class="retry-button" (click)="onRetry()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
            <path d="M3 21v-5h5"></path>
          </svg>
          Try Again
        </button>
      </div>

      <!-- Empty State -->
      <div *ngIf="!isLoading && !errorMessage && recommendations.length === 0" class="empty-state">
        <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        <h3 class="empty-title">No Recommendations Yet</h3>
        <p class="empty-description">
          Generate your first set of AI-powered recommendations to optimize your asset management.
        </p>
        <button class="generate-button" (click)="onGenerate()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          Generate Recommendations
        </button>
      </div>

      <!-- Recommendations Grid -->
      <div *ngIf="!isLoading && !errorMessage && recommendations.length > 0" class="recommendations-grid">
        <app-rec-card
          *ngFor="let recommendation of recommendations"
          [recommendation]="recommendation"
          (toggleImplementation)="onToggleImplementation($event)"
          (createActionPlan)="onCreateActionPlan($event)">
        </app-rec-card>
      </div>

      <!-- Pagination -->
      <div *ngIf="!isLoading && !errorMessage && pagination && pagination.totalPages > 1" class="pagination">
        <button
          class="pagination-btn"
          [disabled]="pagination.page <= 1"
          (click)="onPageChange(pagination.page - 1)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
          Previous
        </button>

        <div class="pagination-info">
          Page {{ pagination.page }} of {{ pagination.totalPages }}
        </div>

        <button
          class="pagination-btn"
          [disabled]="pagination.page >= pagination.totalPages"
          (click)="onPageChange(pagination.page + 1)">
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./recs-list.component.scss']
})
export class RecsListComponent {
  @Input() recommendations: Recommendation[] = [];
  @Input() isLoading: boolean = false;
  @Input() errorMessage: string | null = null;
  @Input() pagination: any = null;
  @Input() pageSize: number = 10;

  @Output() retry = new EventEmitter<void>();
  @Output() generate = new EventEmitter<void>();
  @Output() toggleImplementation = new EventEmitter<{ id: string; implemented: boolean }>();
  @Output() createActionPlan = new EventEmitter<Recommendation>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  onRetry() {
    this.retry.emit();
  }

  onGenerate() {
    this.generate.emit();
  }

  onToggleImplementation(event: { id: string; implemented: boolean }) {
    this.toggleImplementation.emit(event);
  }

  onCreateActionPlan(recommendation: Recommendation) {
    this.createActionPlan.emit(recommendation);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  onPageSizeChange() {
    this.pageSizeChange.emit(this.pageSize);
  }
}
