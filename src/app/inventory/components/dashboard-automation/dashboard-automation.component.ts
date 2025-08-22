// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAnalyticsService } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-dashboard-automation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-automation.component.html',
  styleUrls: ['./dashboard-automation.component.scss']
})
export class DashboardAutomationComponent implements OnInit {
  recommendations: any[] = [];
  loading = false;

  constructor(private analyticsService: InventoryAnalyticsService) {}

  ngOnInit(): void {
    this.loadRecommendations();
  }

  loadRecommendations(): void {
    this.loading = true;
    this.analyticsService.getReorderRecommendations({ lookback_days: 90, lead_time_days: 14, safety_days: 7 })
      .subscribe({ next: (res) => { this.recommendations = res.data.recommendations; this.loading = false; }, error: () => { this.loading = false; } });
  }
}

 
