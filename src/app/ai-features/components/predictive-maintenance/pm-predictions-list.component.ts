import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Prediction, Summary } from '../../shared/predictive-maintenance.interface';
import { PMPredictionRowComponent } from './pm-prediction-row.component';

@Component({
  selector: 'app-pm-predictions-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PMPredictionRowComponent],
  template: `
    <div class="pm-predictions-list">
      <!-- Filters -->
      <div class="filters-section">
        <div class="filters-main">
          <div class="filter-group">
            <label class="filter-label">Risk Level</label>
            <select 
              class="filter-select" 
              [(ngModel)]="filters.riskLevel"
              (ngModelChange)="onFilterChange()">
              <option value="">All Risk Levels</option>
              <option value="high">High Risk</option>
              <option value="medium">Medium Risk</option>
              <option value="low">Low Risk</option>
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label">Min Confidence</label>
            <div class="confidence-slider">
              <input 
                type="range" 
                class="slider" 
                min="0" 
                max="100" 
                step="5"
                [(ngModel)]="filters.minConfidence"
                (ngModelChange)="onFilterChange()">
              <span class="slider-value">{{ filters.minConfidence }}%</span>
            </div>
          </div>

          <div class="filter-group">
            <label class="filter-label">Date Range</label>
            <div class="date-range">
              <input 
                type="date" 
                class="date-input" 
                [(ngModel)]="filters.dateFrom"
                (ngModelChange)="onFilterChange()">
              <span class="date-separator">to</span>
              <input 
                type="date" 
                class="date-input" 
                [(ngModel)]="filters.dateTo"
                (ngModelChange)="onFilterChange()">
            </div>
          </div>

          <div class="filter-actions">
            <button 
              class="btn btn-outline" 
              (click)="clearFilters()"
              [disabled]="!hasActiveFilters">
              <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
              </svg>
              Clear Filters
            </button>
          </div>
        </div>

        <div class="results-info" *ngIf="predictions.length > 0">
          <span class="results-count">{{ filteredPredictions.length }} of {{ predictions.length }} predictions</span>
        </div>
      </div>

      <!-- Loading State -->
      <div class="loading-state" *ngIf="isLoading">
        <div class="loading-spinner">
          <svg class="animate-spin" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 11-6.219-8.56"></path>
          </svg>
        </div>
        <h3 class="loading-title">Loading Predictions</h3>
        <p class="loading-description">Fetching your predictive maintenance data...</p>
      </div>

      <!-- Empty State -->
      <div class="empty-state" *ngIf="!isLoading && predictions.length === 0">
        <div class="empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        </div>
        <h3 class="empty-title">No Predictions Yet</h3>
        <p class="empty-description">
          Generate AI-powered predictions to get started with predictive maintenance insights.
        </p>
        <button 
          class="btn btn-primary" 
          (click)="onGeneratePredictions()">
          <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          Generate Predictions
        </button>
      </div>

      <!-- No Results State -->
      <div class="no-results-state" *ngIf="!isLoading && predictions.length > 0 && filteredPredictions.length === 0">
        <div class="no-results-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </div>
        <h3 class="no-results-title">No Results Found</h3>
        <p class="no-results-description">
          Try adjusting your filters to see more predictions.
        </p>
        <button 
          class="btn btn-outline" 
          (click)="clearFilters()">
          Clear Filters
        </button>
      </div>

      <!-- Predictions List -->
      <div class="predictions-list" *ngIf="!isLoading && filteredPredictions.length > 0">
        <app-pm-prediction-row
          *ngFor="let prediction of filteredPredictions; trackBy: trackByPredictionId"
          [prediction]="prediction"
          (scheduleMaintenance)="onScheduleMaintenance($event)"
          (createWorkOrder)="onCreateWorkOrder($event)">
        </app-pm-prediction-row>
      </div>

      <!-- Error State -->
      <div class="error-state" *ngIf="errorMessage">
        <div class="error-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
        <h3 class="error-title">Something went wrong</h3>
        <p class="error-description">{{ errorMessage }}</p>
        <button 
          class="btn btn-primary" 
          (click)="onRetry()">
          <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
            <path d="M3 21v-5h5"></path>
          </svg>
          Try Again
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./pm-predictions-list.component.scss']
})
export class PMPredictionsListComponent implements OnInit, OnDestroy {
  @Input() predictions: Prediction[] = [];
  @Input() isLoading = false;
  @Input() errorMessage = '';
  @Input() summary: Summary | null = null;

  @Output() generatePredictions = new EventEmitter<void>();
  @Output() scheduleMaintenance = new EventEmitter<Prediction>();
  @Output() createWorkOrder = new EventEmitter<Prediction>();
  @Output() retry = new EventEmitter<void>();

  private destroy$ = new Subject<void>();

  filters = {
    riskLevel: '',
    minConfidence: 0,
    dateFrom: '',
    dateTo: ''
  };

  filteredPredictions: Prediction[] = [];

  ngOnInit() {
    this.applyFilters();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onFilterChange() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredPredictions = this.predictions.filter(prediction => {
      // Risk level filter
      if (this.filters.riskLevel && prediction.riskLevel !== this.filters.riskLevel) {
        return false;
      }

      // Confidence filter
      if (prediction.confidence < this.filters.minConfidence) {
        return false;
      }

      // Date range filter
      if (this.filters.dateFrom || this.filters.dateTo) {
        const predictionDate = new Date(prediction.predictedFailureDate);
        const fromDate = this.filters.dateFrom ? new Date(this.filters.dateFrom) : null;
        const toDate = this.filters.dateTo ? new Date(this.filters.dateTo) : null;

        if (fromDate && predictionDate < fromDate) {
          return false;
        }
        if (toDate && predictionDate > toDate) {
          return false;
        }
      }

      return true;
    });
  }

  clearFilters() {
    this.filters = {
      riskLevel: '',
      minConfidence: 0,
      dateFrom: '',
      dateTo: ''
    };
    this.applyFilters();
  }

  get hasActiveFilters(): boolean {
    return !!(this.filters.riskLevel || this.filters.minConfidence > 0 || this.filters.dateFrom || this.filters.dateTo);
  }

  onGeneratePredictions() {
    this.generatePredictions.emit();
  }

  onScheduleMaintenance(prediction: Prediction) {
    this.scheduleMaintenance.emit(prediction);
  }

  onCreateWorkOrder(prediction: Prediction) {
    this.createWorkOrder.emit(prediction);
  }

  onRetry() {
    this.retry.emit();
  }

  trackByPredictionId(index: number, prediction: Prediction): string {
    return prediction.id || prediction.assetId;
  }
}
