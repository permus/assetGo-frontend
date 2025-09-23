import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetContext } from '../../shared/natural-language.interface';

@Component({
  selector: 'app-nlq-context-strip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="context-strip">
      <div class="context-content" *ngIf="context; else loadingTemplate">
        <div class="context-title">
          <svg class="context-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <span>Current Context</span>
        </div>
        
        <div class="context-stats">
          <div class="stat-item">
            <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <span class="stat-value">{{ context.totalAssets }}</span>
            <span class="stat-label">Assets</span>
          </div>

          <div class="stat-item">
            <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
            </svg>
            <span class="stat-value">{{ context.activeAssets }}</span>
            <span class="stat-label">Active</span>
          </div>

          <div class="stat-item">
            <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span class="stat-value">{{ context.openWorkOrders }}</span>
            <span class="stat-label">Open WOs</span>
          </div>

          <div class="stat-item">
            <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span class="stat-value">{{ context.totalLocations }}</span>
            <span class="stat-label">Locations</span>
          </div>

          <div class="stat-item" *ngIf="context.overdueMaintenance > 0">
            <svg class="stat-icon warning" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="stat-value warning">{{ context.overdueMaintenance }}</span>
            <span class="stat-label">Need Maintenance</span>
          </div>
        </div>
      </div>

      <ng-template #loadingTemplate>
        <div class="context-loading">
          <div class="loading-skeleton">
            <div class="skeleton-line w-24"></div>
            <div class="skeleton-line w-32"></div>
            <div class="skeleton-line w-28"></div>
            <div class="skeleton-line w-20"></div>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./nlq-context-strip.component.scss']
})
export class NLQContextStripComponent {
  @Input() context: AssetContext | null = null;
}
