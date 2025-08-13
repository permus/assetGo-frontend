import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAnalyticsService, AbcAnalysisItem } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-abc-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abc-analysis.component.html',
  styleUrls: ['./abc-analysis.component.scss']
})
export class AbcAnalysisComponent implements OnInit {
  searchTerm = '';
  selectedClass = 'all';

  loading = true;
  error: string | null = null;

  // ABC Analysis data from API
  inventoryItems: AbcAnalysisItem[] = [];

  // ABC Classification summary data
  abcData = {
    classA: {
      count: 0,
      value: 0,
      percentage: 0.0
    },
    classB: {
      count: 0,
      value: 0,
      percentage: 0.0
    },
    classC: {
      count: 0,
      value: 0,
      percentage: 0.0
    }
  };

  constructor(private analyticsService: InventoryAnalyticsService) { }

  ngOnInit(): void {
    this.loadAbcAnalysis();
  }

  loadAbcAnalysis(): void {
    this.loading = true;
    this.error = null;

    this.analyticsService.getAbcAnalysis().subscribe({
      next: (response) => {
        if (response.success) {
          this.inventoryItems = response.data;
          this.calculateAbcSummary();
        } else {
          this.error = 'Failed to load ABC analysis data';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading ABC analysis:', err);
        this.error = 'Error loading ABC analysis data. Please try again.';
        this.loading = false;
      }
    });
  }

  calculateAbcSummary(): void {
    const classA = this.inventoryItems.filter(item => item.class === 'A');
    const classB = this.inventoryItems.filter(item => item.class === 'B');
    const classC = this.inventoryItems.filter(item => item.class === 'C');

    const totalValue = this.inventoryItems.reduce((sum, item) => sum + item.value, 0);

    this.abcData.classA = {
      count: classA.length,
      value: classA.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? (classA.reduce((sum, item) => sum + item.value, 0) / totalValue) * 100 : 0
    };

    this.abcData.classB = {
      count: classB.length,
      value: classB.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? (classB.reduce((sum, item) => sum + item.value, 0) / totalValue) * 100 : 0
    };

    this.abcData.classC = {
      count: classC.length,
      value: classC.reduce((sum, item) => sum + item.value, 0),
      percentage: totalValue > 0 ? (classC.reduce((sum, item) => sum + item.value, 0) / totalValue) * 100 : 0
    };
  }

  // Filtered items based on search and class selection
  get filteredItems() {
    let items = this.inventoryItems;
    
    if (this.searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.part_id.toString().includes(this.searchTerm)
      );
    }
    
    if (this.selectedClass !== 'all') {
      items = items.filter(item => item.class === this.selectedClass);
    }
    
    return items;
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.searchTerm = target.value;
    }
  }

  onClassFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.selectedClass = target.value;
    }
  }

  exportCSV(): void {
    console.log('Exporting ABC Analysis to CSV...');
    // Here you would implement the actual CSV export logic
    // For now, just log the action
  }

  getAbcClassColor(abcClass: string): string {
    switch (abcClass) {
      case 'A': return 'bg-green-100 text-green-800';
      case 'B': return 'bg-yellow-100 text-yellow-800';
      case 'C': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  refreshData(): void {
    this.loadAbcAnalysis();
  }

  calculateValuePercentage(itemValue: number): number {
    const totalValue = this.inventoryItems.reduce((sum, item) => sum + item.value, 0);
    return totalValue > 0 ? (itemValue / totalValue) * 100 : 0;
  }
}
