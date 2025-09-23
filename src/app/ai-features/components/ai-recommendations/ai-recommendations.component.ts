import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { 
  Recommendation, 
  RecSummary, 
  RecFilters, 
  RecResponse 
} from '../../shared/ai-recommendations.interface';
import { AIRecommendationsService } from '../../shared/ai-recommendations.service';
import { RecsHeaderComponent } from './recs-header.component';
import { RecsSummaryComponent } from './recs-summary.component';
import { RecsFiltersComponent } from './recs-filters.component';
import { RecsListComponent } from './recs-list.component';

@Component({
  selector: 'app-ai-recommendations',
  standalone: true,
  imports: [
    CommonModule,
    RecsHeaderComponent,
    RecsSummaryComponent,
    RecsFiltersComponent,
    RecsListComponent
  ],
  template: `
    <div class="ai-recommendations-page">
      <!-- Header -->
      <app-recs-header
        [lastUpdated]="summary?.lastUpdated"
        [isLoading]="isLoading"
        [isGenerating]="isGenerating"
        [hasData]="recommendations.length > 0"
        (refresh)="onRefresh()"
        (generate)="onGenerate()"
        (export)="onExport()">
      </app-recs-header>

      <!-- Summary -->
      <app-recs-summary [summary]="summary"></app-recs-summary>

      <!-- Filters -->
      <app-recs-filters
        [filters]="filters"
        (filtersChange)="onFiltersChange($event)">
      </app-recs-filters>

      <!-- List -->
      <app-recs-list
        [recommendations]="recommendations"
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        [pagination]="pagination"
        [pageSize]="pageSize"
        (retry)="onRetry()"
        (generate)="onGenerate()"
        (toggleImplementation)="onToggleImplementation($event)"
        (createActionPlan)="onCreateActionPlan($event)"
        (pageChange)="onPageChange($event)"
        (pageSizeChange)="onPageSizeChange($event)">
      </app-recs-list>
    </div>
  `,
  styleUrls: ['./ai-recommendations.component.scss']
})
export class AIRecommendationsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // State
  recommendations: Recommendation[] = [];
  summary: RecSummary | null = null;
  isLoading = false;
  isGenerating = false;
  errorMessage: string | null = null;
  pagination: any = null;

  // Filters and pagination
  filters: RecFilters = {
    minConfidence: 0
  };
  currentPage = 1;
  pageSize = 10;

  constructor(private recService: AIRecommendationsService) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadData() {
    this.isLoading = true;
    this.errorMessage = null;

    this.recService.getRecommendations(this.filters, this.currentPage, this.pageSize)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: RecResponse) => {
          if (response.success && response.data) {
            this.recommendations = response.data.recommendations;
            this.summary = response.data.summary;
            this.pagination = response.data.pagination;
          } else {
            this.errorMessage = response.error || 'Failed to load recommendations';
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading recommendations:', error);
          this.errorMessage = 'Failed to load recommendations. Please try again.';
          this.isLoading = false;
        }
      });
  }

  onRefresh() {
    this.loadData();
  }

  onGenerate() {
    this.isGenerating = true;
    this.errorMessage = null;

    this.recService.generateRecommendations()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.recommendations = response.data.recommendations;
            this.summary = response.data.summary;
            this.currentPage = 1; // Reset to first page
            this.loadData(); // Reload to get pagination
          } else {
            this.errorMessage = response.error || 'Failed to generate recommendations';
          }
          this.isGenerating = false;
        },
        error: (error) => {
          console.error('Error generating recommendations:', error);
          this.errorMessage = 'Failed to generate recommendations. Please try again.';
          this.isGenerating = false;
        }
      });
  }

  onExport() {
    if (this.recommendations.length === 0) {
      alert('No recommendations to export. Please generate recommendations first.');
      return;
    }

    this.recService.exportRecommendations(this.filters)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob) => {
          const filename = `ai_recommendations_${new Date().toISOString().split('T')[0]}.csv`;
          this.recService.downloadCsv(blob, filename);
        },
        error: (error) => {
          console.error('Error exporting recommendations:', error);
          this.errorMessage = 'Failed to export recommendations. Please try again.';
        }
      });
  }

  onFiltersChange(filters: RecFilters) {
    this.filters = filters;
    this.currentPage = 1; // Reset to first page
    this.loadData();
  }

  onRetry() {
    this.loadData();
  }

  onToggleImplementation(event: { id: string; implemented: boolean }) {
    this.recService.toggleImplementation(event.id, event.implemented)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            // Update the recommendation in the list
            const index = this.recommendations.findIndex(r => r.id === event.id);
            if (index !== -1) {
              this.recommendations[index] = response.data;
            }
            // Reload summary
            this.loadSummary();
          } else {
            console.error('Failed to toggle implementation:', response.error);
          }
        },
        error: (error) => {
          console.error('Error toggling implementation:', error);
        }
      });
  }

  onCreateActionPlan(recommendation: Recommendation) {
    // TODO: Implement action plan creation
    alert(`Create Action Plan for: ${recommendation.title}`);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadData();
  }

  onPageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.currentPage = 1; // Reset to first page
    this.loadData();
  }

  private loadSummary() {
    this.recService.getSummary()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.summary = response.data;
          }
        },
        error: (error) => {
          console.error('Error loading summary:', error);
        }
      });
  }
}
