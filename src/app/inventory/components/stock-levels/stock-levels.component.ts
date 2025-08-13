import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryAnalyticsService, InventoryStock, StockLevelsResponse, StockAdjustmentRequest, StockTransferRequest, StockReserveRequest, StockCountRequest, LocationResponse } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-stock-levels',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-levels.component.html',
  styleUrls: ['./stock-levels.component.scss']
})
export class StockLevelsComponent implements OnInit {
  // Data properties
  stockLevels: InventoryStock[] = [];
  loading = true;
  error: string | null = null;
  
  // Search and filter properties
  searchTerm = '';
  selectedLocationId: number | null = null;
  selectedPartId: number | null = null;
  currentPage = 1;
  perPage = 15;
  totalStocks = 0;
  totalPages = 0;
  
  // Summary data
  summaryData = {
    totalItems: 0,
    totalValue: 0,
    lowStockItems: 0,
    outOfStockItems: 0
  };

  // Modal states
  showAdjustmentModal = false;
  showTransferModal = false;
  showReserveModal = false;
  showCountModal = false;
  
  // Form data
  adjustmentForm: StockAdjustmentRequest = {
    part_id: 0,
    location_id: 0,
    type: 'receipt',
    quantity: 0
  };

  transferForm: StockTransferRequest = {
    part_id: 0,
    from_location_id: 0,
    to_location_id: 0,
    quantity: 1
  };

  reserveForm: StockReserveRequest = {
    part_id: 0,
    location_id: 0,
    quantity: 1
  };

  countForm: StockCountRequest = {
    part_id: 0,
    location_id: 0,
    counted_quantity: 0
  };

  // Available locations (you might want to fetch this from a separate API)
  availableLocations: any[] = [];
  availableParts: any[] = [];

  constructor(private analyticsService: InventoryAnalyticsService) { }

  ngOnInit(): void {
    this.loadStockLevels();
    this.loadAvailableLocations();
    this.loadAvailableParts();
  }

  loadStockLevels(): void {
    this.loading = true;
    this.error = null;

    this.analyticsService.getStockLevels(
      this.selectedLocationId || undefined,
      this.selectedPartId || undefined,
      this.searchTerm || undefined,
      this.currentPage,
      this.perPage
    ).subscribe({
      next: (response) => {
        if (response.success) {
          this.stockLevels = response.data.data;
          this.totalStocks = response.data.total;
          this.totalPages = response.data.last_page;
          this.currentPage = response.data.current_page;
          this.calculateSummaryData();
        } else {
          this.error = 'Failed to load stock levels';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading stock levels:', err);
        this.error = 'Error loading stock levels. Please try again.';
        this.loading = false;
      }
    });
  }

  loadAvailableLocations(): void {
    // Fetch locations from the API
    this.analyticsService.getLocations(1, 100).subscribe({
      next: (response: LocationResponse) => {
        if (response.success) {
          this.availableLocations = response.data.data.map(location => ({
            id: location.id,
            name: location.name,
            code: location.code || location.name.substring(0, 2).toUpperCase()
          }));
        } else {
          console.error('Failed to load locations for dropdown');
        }
      },
      error: (err: any) => {
        console.error('Error loading locations:', err);
        // Fallback to mock data if API fails
        this.availableLocations = [
          { id: 1, name: 'Main Warehouse', code: 'MW' },
          { id: 2, name: 'Secondary Storage', code: 'SS' },
          { id: 3, name: 'Field Office', code: 'FO' }
        ];
      }
    });
  }

  loadAvailableParts(): void {
    // Fetch parts from the API
    this.analyticsService.getPartsCatalog('', 'active', 1, 100).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.availableParts = response.data.data.map((part: any) => ({
            id: part.id,
            name: part.name,
            part_number: part.part_number
          }));
        } else {
          console.error('Failed to load parts for dropdown');
        }
      },
      error: (err: any) => {
        console.error('Error loading parts for dropdown:', err);
        // Fallback to empty array if API fails
        this.availableParts = [];
      }
    });
  }

  calculateSummaryData(): void {
    this.summaryData.totalItems = this.totalStocks;
    this.summaryData.totalValue = this.stockLevels.reduce((sum, stock) => 
      sum + (stock.on_hand * stock.average_cost), 0
    );
    this.summaryData.lowStockItems = this.stockLevels.filter(stock => 
      stock.on_hand <= (stock.part.reorder_point || 0)
    ).length;
    this.summaryData.outOfStockItems = this.stockLevels.filter(stock => 
      stock.on_hand <= 0
    ).length;
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.loadStockLevels();
  }

  onLocationFilterChange(): void {
    this.currentPage = 1;
    this.loadStockLevels();
  }

  onPartFilterChange(): void {
    this.currentPage = 1;
    this.loadStockLevels();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadStockLevels();
  }

  // Stock Adjustment
  openAdjustmentModal(stock?: InventoryStock): void {
    if (stock) {
      this.adjustmentForm = {
        part_id: stock.part_id,
        location_id: stock.location_id,
        type: 'receipt',
        quantity: 1
      };
    }
    this.showAdjustmentModal = true;
  }

  closeAdjustmentModal(): void {
    this.showAdjustmentModal = false;
    this.adjustmentForm = {
      part_id: 0,
      location_id: 0,
      type: 'receipt',
      quantity: 0
    };
  }

  onAdjustStock(): void {
    if (this.adjustmentForm.part_id && this.adjustmentForm.location_id && this.adjustmentForm.quantity !== 0) {
      // Set a default type based on quantity (positive = receipt, negative = issue)
      const adjustmentData: StockAdjustmentRequest = {
        ...this.adjustmentForm,
        type: this.adjustmentForm.quantity > 0 ? 'receipt' : 'issue'
      };
      
      this.analyticsService.adjustStock(adjustmentData).subscribe({
        next: (response) => {
          if (response.success) {
            this.closeAdjustmentModal();
            this.loadStockLevels();
            // You could add a success notification here
          }
        },
        error: (err) => {
          console.error('Error adjusting stock:', err);
          // You could add an error notification here
        }
      });
    }
  }

  // Stock Transfer
  openTransferModal(stock?: InventoryStock): void {
    if (stock) {
      this.transferForm = {
        part_id: stock.part_id,
        from_location_id: stock.location_id,
        to_location_id: 0,
        quantity: 1
      };
    }
    this.showTransferModal = true;
  }

  closeTransferModal(): void {
    this.showTransferModal = false;
    this.transferForm = {
      part_id: 0,
      from_location_id: 0,
      to_location_id: 0,
      quantity: 1
    };
  }

  onTransferStock(): void {
    if (this.transferForm.part_id && this.transferForm.from_location_id && 
        this.transferForm.to_location_id && this.transferForm.quantity > 0 &&
        this.transferForm.from_location_id !== this.transferForm.to_location_id) {
      this.analyticsService.transferStock(this.transferForm).subscribe({
        next: (response) => {
          if (response.success) {
            this.closeTransferModal();
            this.loadStockLevels();
            // You could add a success notification here
          }
        },
        error: (err) => {
          console.error('Error transferring stock:', err);
          // You could add an error notification here
        }
      });
    }
  }

  // Stock Reservation
  openReserveModal(stock?: InventoryStock): void {
    if (stock) {
      this.reserveForm = {
        part_id: stock.part_id,
        location_id: stock.location_id,
        quantity: 1
      };
    }
    this.showReserveModal = true;
  }

  closeReserveModal(): void {
    this.showReserveModal = false;
    this.reserveForm = {
      part_id: 0,
      location_id: 0,
      quantity: 1
    };
  }

  onReserveStock(): void {
    if (this.reserveForm.part_id && this.reserveForm.location_id && this.reserveForm.quantity > 0) {
      this.analyticsService.reserveStock(this.reserveForm).subscribe({
        next: (response) => {
          if (response.success) {
            this.closeReserveModal();
            this.loadStockLevels();
            // You could add a success notification here
          }
        },
        error: (err) => {
          console.error('Error reserving stock:', err);
          // You could add an error notification here
        }
      });
    }
  }

  // Stock Count
  openCountModal(stock?: InventoryStock): void {
    if (stock) {
      this.countForm = {
        part_id: stock.part_id,
        location_id: stock.location_id,
        counted_quantity: stock.on_hand
      };
    }
    this.showCountModal = true;
  }

  closeCountModal(): void {
    this.showCountModal = false;
    this.countForm = {
      part_id: 0,
      location_id: 0,
      counted_quantity: 0
    };
  }

  onPerformStockCount(): void {
    if (this.countForm.part_id && this.countForm.location_id && this.countForm.counted_quantity >= 0) {
      this.analyticsService.performStockCount(this.countForm).subscribe({
        next: (response) => {
          if (response.success) {
            this.closeCountModal();
            this.loadStockLevels();
            // You could add a success notification here
          }
        },
        error: (err) => {
          console.error('Error performing stock count:', err);
          // You could add an error notification here
        }
      });
    }
  }

  // Stock Release
  onReleaseStock(stock: InventoryStock, quantity: number): void {
    if (quantity > 0 && quantity <= stock.reserved) {
      const releaseData: StockReserveRequest = {
        part_id: stock.part_id,
        location_id: stock.location_id,
        quantity: quantity
      };

      this.analyticsService.releaseStock(releaseData).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadStockLevels();
            // You could add a success notification here
          }
        },
        error: (err) => {
          console.error('Error releasing stock:', err);
          // You could add an error notification here
        }
      });
    }
  }

  getStockStatus(stock: InventoryStock): { status: string; class: string; icon: string } {
    if (stock.on_hand <= 0) {
      return { status: 'Out of Stock', class: 'out-of-stock', icon: 'x-circle' };
    }
    
    if (stock.on_hand <= (stock.part.reorder_point || 0)) {
      return { status: 'Low Stock', class: 'low-stock', icon: 'exclamation-triangle' };
    }
    
    if (stock.reserved > 0) {
      return { status: 'Partially Reserved', class: 'reserved', icon: 'lock-closed' };
    }
    
    return { status: 'In Stock', class: 'in-stock', icon: 'check-circle' };
  }

  getStockLevelClass(stock: InventoryStock): string {
    const percentage = stock.on_hand > 0 ? (stock.available / stock.on_hand) * 100 : 0;
    
    if (percentage <= 20) return 'critical';
    if (percentage <= 50) return 'warning';
    return 'good';
  }

  refreshData(): void {
    this.loadStockLevels();
  }

  getAdjustmentTypes(): string[] {
    return ['receipt', 'issue', 'adjustment', 'return'];
  }
}
