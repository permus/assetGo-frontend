import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAnalyticsService, AbcAnalysisItem } from '../../../core/services/inventory-analytics.service';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';
import { FormatService } from '../../../core/services/format.service';

@Component({
  selector: 'app-abc-analysis',
  standalone: true,
  imports: [CommonModule, NumberFormatPipe],
  templateUrl: './abc-analysis.component.html',
  styleUrls: ['./abc-analysis.component.scss']
})
export class AbcAnalysisComponent implements OnInit {
  private formatService = inject(FormatService);
  searchTerm = '';
  selectedClass = 'all';
  // Optional configuration
  costBasis: 'average' | 'unit' = 'average';
  thrA: number | undefined;
  thrB: number | undefined;

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

    this.analyticsService.getAbcAnalysis({
      cost_basis: this.costBasis,
      ...(typeof this.thrA === 'number' ? { thr_a: this.thrA } : {}),
      ...(typeof this.thrB === 'number' ? { thr_b: this.thrB } : {}),
    }).subscribe({
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
  get filteredItems(): AbcAnalysisItem[] {
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
    // Check if there are any filters applied
    const hasFilters = this.searchTerm.trim() || this.selectedClass !== 'all';
    
    if (hasFilters) {
      // Export only the filtered items (frontend filtering)
      this.exportFilteredCSV();
    } else {
      // Export all items from backend
      this.analyticsService.downloadAbcCsv({
        cost_basis: this.costBasis,
        ...(typeof this.thrA === 'number' ? { thr_a: this.thrA } : {}),
        ...(typeof this.thrB === 'number' ? { thr_b: this.thrB } : {}),
      }).subscribe((blob: any) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `abc-analysis-${new Date().toISOString().slice(0,19)}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
      });
    }
  }

  private exportFilteredCSV(): void {
    const filteredData: AbcAnalysisItem[] = this.filteredItems;
    
    if (filteredData.length === 0) {
      alert('No data to export. Please adjust your filters.');
      return;
    }

    // Create CSV content
    const headers = ['Part Number', 'Part Name', 'Total Value', 'Value %', 'Cumulative %', 'ABC Class'];
    const csvContent = [
      headers.join(','),
      ...filteredData.map((item: AbcAnalysisItem) => [
        item.part_id,
        `"${item.name.replace(/"/g, '""')}"`, // Escape quotes in names
        item.value,
        this.formatService.formatNumber(this.calculateValuePercentage(item.value), 2),
        this.formatService.formatNumber(item.cumulative_ratio * 100, 2),
        item.class
      ].join(','))
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    // Generate filename with filter info
    let filename = 'abc-analysis-filtered';
    if (this.searchTerm.trim()) {
      filename += `-search-${this.searchTerm.trim()}`;
    }
    if (this.selectedClass !== 'all') {
      filename += `-class-${this.selectedClass}`;
    }
    filename += `-${new Date().toISOString().slice(0,19)}.csv`;
    
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
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

  getExportButtonText(): string {
    const hasFilters = this.searchTerm.trim() || this.selectedClass !== 'all';
    return hasFilters ? 'Export Filtered CSV' : 'Export CSV';
  }

  getExportButtonTitle(): string {
    const hasFilters = this.searchTerm.trim() || this.selectedClass !== 'all';
    if (hasFilters) {
      let filterInfo = 'Exporting filtered data: ';
      if (this.searchTerm.trim()) {
        filterInfo += `Search: "${this.searchTerm.trim()}"`;
      }
      if (this.selectedClass !== 'all') {
        if (this.searchTerm.trim()) filterInfo += ', ';
        filterInfo += `Class: ${this.selectedClass}`;
      }
      return filterInfo;
    }
    return 'Export all ABC analysis data';
  }
}
