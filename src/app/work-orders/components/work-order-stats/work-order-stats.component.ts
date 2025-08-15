import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkOrderService, WorkOrderStatistics } from '../../services/work-order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-order-stats',
  standalone: false,
  templateUrl: './work-order-stats.component.html',
  styleUrls: ['./work-order-stats.component.scss']
})
export class WorkOrderStatsComponent implements OnInit, OnDestroy {
  stats: WorkOrderStatistics | null = null;
  isLoading = true;
  private subscription = new Subscription();

  constructor(private workOrderService: WorkOrderService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadStats(): void {
    this.isLoading = true;
    
    this.subscription.add(
      this.workOrderService.getWorkOrderStatistics().subscribe({
        next: (stats) => {
          console.log('Work order stats loaded:', stats);
          this.stats = stats;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading stats:', error);
          this.isLoading = false;
          // Fallback to default stats
          this.stats = {
            status_counts: {},
            priority_counts: {},
            overdue_count: 0,
            recent_created: 0,
            recent_completed: 0
          };
        }
      })
    );
  }

  getIconClass(icon: string): string {
    const iconMap: { [key: string]: string } = {
      'wrench': 'fas fa-wrench',
      'warning': 'fas fa-exclamation-triangle',
      'clock': 'fas fa-clock',
      'check': 'fas fa-check-circle'
    };
    return iconMap[icon] || 'fas fa-circle';
  }

  getTotalCount(): number {
    if (!this.stats?.status_counts) return 0;
    return Object.values(this.stats.status_counts).reduce((sum, count) => sum + count, 0);
  }

  // Helper methods for template access
  getStatusCount(status: string): number {
    return this.stats?.status_counts?.[status] || 0;
  }

  getPriorityCount(priority: string): number {
    return this.stats?.priority_counts?.[priority] || 0;
  }

  getOverdueCount(): number {
    return this.stats?.overdue_count || 0;
  }

  getRecentCreated(): number {
    return this.stats?.recent_created || 0;
  }

  getRecentCompleted(): number {
    return this.stats?.recent_completed || 0;
  }

  // Check if we have any data to show
  hasData(): boolean {
    return !!(this.stats && (
      Object.keys(this.stats.status_counts || {}).length > 0 ||
      Object.keys(this.stats.priority_counts || {}).length > 0 ||
      this.stats.overdue_count > 0 ||
      this.stats.recent_created > 0 ||
      this.stats.recent_completed > 0
    ));
  }
}
