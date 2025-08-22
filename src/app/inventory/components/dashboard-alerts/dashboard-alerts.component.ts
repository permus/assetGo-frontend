import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAnalyticsService, InventoryAlertDTO } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-dashboard-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-alerts.component.html',
  styleUrls: ['./dashboard-alerts.component.scss']
})
export class DashboardAlertsComponent implements OnInit {
  alerts: InventoryAlertDTO[] = [];
  summary = { active: 0, critical: 0, ack: 0, total: 0 };
  filter: 'active' | 'critical' | 'ack' | 'all' = 'active';
  loading = false;

  constructor(private analyticsService: InventoryAnalyticsService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.loadSummary();
    this.loadAlerts();
  }

  loadSummary(): void {
    this.analyticsService.getAlertsSummary().subscribe({
      next: (res) => { this.summary = res.data || this.summary; },
      error: () => {}
    });
  }

  loadAlerts(): void {
    this.loading = true;
    const params: any = {};
    if (this.filter === 'active') params.is_resolved = false;
    if (this.filter === 'ack') params.is_resolved = true;
    // for 'critical' we fetch active and filter client-side by level
    this.analyticsService.getAlerts(params)
      .subscribe({
        next: (res) => {
          let items = res.data?.data || [];
          if (this.filter === 'critical') items = items.filter(a => a.alert_level === 'critical');
          this.alerts = items;
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
  }

  resolve(alert: InventoryAlertDTO): void {
    this.analyticsService.resolveAlert(alert.id).subscribe({ next: () => this.loadAlerts() });
  }

  runScan(): void {
    this.analyticsService.scanAlerts().subscribe({ next: () => this.refresh() });
  }

  setFilter(val: 'active' | 'critical' | 'ack' | 'all'): void {
    this.filter = val;
    this.loadAlerts();
  }
}
