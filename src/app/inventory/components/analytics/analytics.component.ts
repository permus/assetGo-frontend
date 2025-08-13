import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  activeTab = 'turnover';
  selectedPeriod = '6months';

  // Sample data for different periods
  periodData = {
    '6months': {
      turnover: '2.4x',
      turnoverChange: '+12.5% from last period',
      carryingCost: 'AED 15,000',
      deadStockValue: 'AED 8,500',
      deadStockItems: '23 items',
      avgDays: '45 days'
    },
    '3months': {
      turnover: '2.1x',
      turnoverChange: '+8.2% from last period',
      carryingCost: 'AED 12,500',
      deadStockValue: 'AED 6,200',
      deadStockItems: '18 items',
      avgDays: '42 days'
    },
    '1month': {
      turnover: '1.8x',
      turnoverChange: '+5.1% from last period',
      carryingCost: 'AED 10,000',
      deadStockValue: 'AED 4,800',
      deadStockItems: '15 items',
      avgDays: '38 days'
    },
    '1year': {
      turnover: '2.8x',
      turnoverChange: '+18.7% from last period',
      carryingCost: 'AED 18,500',
      deadStockValue: 'AED 9,200',
      deadStockItems: '28 items',
      avgDays: '52 days'
    }
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
    // Here you would typically load different data based on the selected tab
    console.log('Switched to tab:', tab);
  }

  onPeriodChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      this.selectedPeriod = target.value;
      // Here you would typically refresh the data based on the selected period
      console.log('Changed period to:', target.value);
    }
  }

  exportReport(): void {
    // Here you would implement the export functionality
    console.log('Exporting report for period:', this.selectedPeriod);
    // Example: this.analyticsService.exportReport(this.selectedPeriod);
  }

  getCurrentData() {
    return this.periodData[this.selectedPeriod as keyof typeof this.periodData];
  }
}
