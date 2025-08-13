import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abc-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abc-analysis.component.html',
  styleUrls: ['./abc-analysis.component.scss']
})
export class AbcAnalysisComponent {
  searchTerm = '';
  selectedClass = 'all';

  // Sample ABC Analysis data
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
      count: 1,
      value: 9,
      percentage: 100.0
    }
  };

  // Sample inventory items for detailed analysis
  inventoryItems = [
    {
      partNumber: 1,
      partName: 'part 1',
      category: 'ews',
      totalValue: 9,
      valuePercentage: 100.00,
      cumulativePercentage: 100.00,
      abcClass: 'C'
    }
  ];

  // Filtered items based on search and class selection
  get filteredItems() {
    let items = this.inventoryItems;
    
    if (this.searchTerm) {
      items = items.filter(item => 
        item.partName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.partNumber.toString().includes(this.searchTerm) ||
        item.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    if (this.selectedClass !== 'all') {
      items = items.filter(item => item.abcClass === this.selectedClass);
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
}
