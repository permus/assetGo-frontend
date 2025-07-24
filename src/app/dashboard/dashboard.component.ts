import { Component } from '@angular/core';
import { AssetService } from '../assets/services/asset.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  // Archive analytics
  archiveAnalytics = {
    totalAssets: 0,
    activeAssets: 0,
    archivedAssets: 0,
    archivedByMonth: []
  };

  stats = [
    { title: 'Total Assets', value: '24', subtitle: 'Live data', icon: 'info', color: 'blue' },
    { title: 'Active Assets', value: '23', subtitle: '95.8% operational', icon: 'check', color: 'green' },
    { title: 'Critical Alerts', value: '1', subtitle: '1 require immediate attention', icon: 'warning', color: 'orange' },
    { title: 'Monthly Investment', value: '$0', subtitle: 'No data available', icon: 'dollar', color: 'purple' },
    { title: 'Asset Utilization', value: '--', subtitle: 'No data available', icon: 'trending', color: 'blue' },
    { title: 'Scheduled Maintenance', value: '0', subtitle: 'Next 30 days', icon: 'clock', color: 'teal' },
    { title: 'Active Work Orders', value: '2', subtitle: '1 high priority', icon: 'clipboard', color: 'yellow' },
    { title: 'Archived Assets', value: '0', subtitle: 'In archive', icon: 'shield', color: 'gray' }
  ];

  workOrders = [
    { title: 'Total Work Orders', value: 2 },
    { title: 'Scheduled This Week', value: 0 },
    { title: 'Overdue', value: 1 }
  ];

  constructor(
    private assetService: AssetService
  ) {
  }

  ngOnInit() {
    this.loadArchiveAnalytics();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadArchiveAnalytics() {
    this.assetService.getArchiveAnalytics()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.archiveAnalytics = response.data;
            // Update stats with real data
            this.updateStatsWithAnalytics();
          }
        },
        error: (error) => {
          console.error('Error loading archive analytics:', error);
        }
      });
  }

  private updateStatsWithAnalytics() {
    // Update the archived assets stat
    const archivedStat = this.stats.find(stat => stat.title === 'Archived Assets');
    if (archivedStat) {
      archivedStat.value = this.archiveAnalytics.archivedAssets.toString();
      archivedStat.subtitle = `${this.archiveAnalytics.archivedAssets} assets in archive`;
    }
  }
}
