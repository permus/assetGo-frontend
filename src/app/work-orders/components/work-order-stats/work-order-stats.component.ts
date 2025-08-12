import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkOrderService, WorkOrderStats } from '../../services/work-order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-order-stats',
  standalone: false,
  templateUrl: './work-order-stats.component.html',
  styleUrls: ['./work-order-stats.component.scss']
})
export class WorkOrderStatsComponent implements OnInit, OnDestroy {
  stats: WorkOrderStats | null = null;
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
      this.workOrderService.getWorkOrderStats().subscribe({
        next: (stats) => {
          this.stats = stats;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading stats:', error);
          this.isLoading = false;
          // Fallback to default stats
          this.stats = {
            total: 0,
            open: 0,
            inProgress: 0,
            completed: 0,
            critical: 0
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
}
