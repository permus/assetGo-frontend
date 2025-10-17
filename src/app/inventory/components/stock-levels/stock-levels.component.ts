import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  InventoryAnalyticsService,
  InventoryStock,
  StockAdjustmentRequest,
  StockTransferRequest,
  StockReserveRequest,
  StockCountRequest,
  LocationResponse
} from '../../../core/services/inventory-analytics.service';
import {CurrencyService} from '../../../core/services/currency.service';
import {ToastService} from '../../../core/services/toast.service';

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
  reserveLoading = false;
  transferLoading = false;
  countLoading = false;
  releaseLoading = false;
  error: string | null = null;
  adjustStockLoading = false;
  // Search and filter properties
  searchTerm = '';
  selectedLocationId: number | null = null;
  selectedPartId: number | null = null;
  currentPage = 1;
  perPage = 15;
  totalStocks = 0;
  totalPages = 0;
  locationDropdownOpen = false;
  partDropdownOpen = false;
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
    part_id: null,
    location_id: null,
    type: 'receipt',
    quantity: 0,
    reason: '',
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
  releaseQuantities: { [stockId: number]: number } = {};
  constructor(
    private analyticsService: InventoryAnalyticsService,
    private currencyService: CurrencyService,
    private toastService: ToastService
  ) {
  }

  getCurrencySymbol(): string {
    return this.currencyService.getSymbol();
  }

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
          // Normalize numeric fields (average_cost can come back as a string)
          this.stockLevels = response.data.data.map((s: any) => ({
            ...s,
            average_cost: typeof s.average_cost === 'string' ? parseFloat(s.average_cost) : (s.average_cost ?? 0),
            on_hand: typeof s.on_hand === 'string' ? parseFloat(s.on_hand) : s.on_hand,
            available: typeof s.available === 'string' ? parseFloat(s.available) : s.available,
            reserved: typeof s.reserved === 'string' ? parseFloat(s.reserved) : s.reserved,
          }));
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
        this.toastService.error('Error loading stock levels. Please try again.');
        this.error = 'Error loading stock levels. Please try again.';
        this.loading = false;
      }
    });
  }

  loadAvailableLocations(): void {
    // Fetch locations from the API with exact parameters as specified
    this.analyticsService.getLocations(1, 100, 0, 'created', 'desc').subscribe({
      next: (response: any) => {

        // Handle different possible response structures
        let locationsData: any[] = [];

        if (response.success && response.data) {
          // Check if data is directly an array
          if (Array.isArray(response.data)) {
            locationsData = response.data;
          }
          // Check if data has a data property (paginated response)
          else if (response.data.data && Array.isArray(response.data.data)) {
            locationsData = response.data.data;
          }
          // Check if data has a locations property
          else if (response.data.locations && Array.isArray(response.data.locations)) {
            locationsData = response.data.locations;
          }
        }

        if (locationsData.length > 0) {
          this.availableLocations = locationsData.map(location => ({
            id: location.id,
            name: location.name || location.title || location.display_name || 'Unknown Location',
            code: location.code || location.short_code || (location.name ? location.name.substring(0, 2).toUpperCase() : 'LO')
          }));
        } else {
          this.toastService.warning('No locations found, using fallback data');
          // Fallback to mock data if API response is not successful
          this.availableLocations = [
            {id: 1, name: 'Main Warehouse', code: 'MW'},
            {id: 2, name: 'Secondary Storage', code: 'SS'},
            {id: 3, name: 'Field Office', code: 'FO'}
          ];
        }
      },
      error: (err: any) => {
        this.toastService.error('Error loading locations. Using fallback data.');
        // Fallback to mock data if API fails
        this.availableLocations = [
          {id: 1, name: 'Main Warehouse', code: 'MW'},
          {id: 2, name: 'Secondary Storage', code: 'SS'},
          {id: 3, name: 'Field Office', code: 'FO'}
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
          this.toastService.warning('Failed to load parts, using fallback data');
          // Fallback to mock data if API response is not successful
          this.availableParts = [
            {id: 1, name: 'Sample Part 1', part_number: 'P001'},
            {id: 2, name: 'Sample Part 2', part_number: 'P002'},
            {id: 3, name: 'Sample Part 3', part_number: 'P003'}
          ];
        }
      },
      error: (err: any) => {
        this.toastService.error('Error loading parts. Using fallback data.');
        // Fallback to mock data if API fails
        this.availableParts = [
          {id: 1, name: 'Sample Part 1', part_number: 'P001'},
          {id: 2, name: 'Sample Part 2', part_number: 'P002'},
          {id: 3, name: 'Sample Part 3', part_number: 'P003'}
        ];
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

  applyFilters(): void {
    this.currentPage = 1;
    this.loadStockLevels();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedLocationId = null;
    this.selectedPartId = null;
    this.currentPage = 1;
    this.loadStockLevels();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadStockLevels();
  }

  // Stock Adjustment
  openAdjustmentModal(stock?: InventoryStock): void {
    // Ensure locations are loaded when modal opens
    if (this.availableLocations.length === 0) {
      this.loadAvailableLocations();
    }

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
      part_id: null,
      location_id: null,
      type: 'receipt',
      quantity: 0,
      reason: '',
      notes: '',
    };
  }

  onAdjustStock(): void {
    if (this.adjustmentForm.part_id && this.adjustmentForm.location_id && this.adjustmentForm.quantity !== 0) {
      this.adjustStockLoading = true;
      // Set a default type based on quantity (positive = receipt, negative = issue)
      const adjustmentData: StockAdjustmentRequest = {
        ...this.adjustmentForm,
        type: this.adjustmentForm.quantity > 0 ? 'receipt' : 'issue'
      };

      this.analyticsService.adjustStock(adjustmentData).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.success('Stock adjusted successfully');
            this.closeAdjustmentModal();
            this.loadStockLevels();
          }
        },
        error: (err) => {
          this.adjustStockLoading = false;
          this.toastService.error('Error adjusting stock: ' + (err.error?.message || 'Please try again'));
        }
      }).add(() => {
        this.adjustStockLoading = false;
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
      this.transferLoading = true;
      this.analyticsService.transferStock(this.transferForm).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.success('Stock transferred successfully');
            this.closeTransferModal();
            this.loadStockLevels();
          }
        },
        error: (err) => {
          this.transferLoading = false;
          this.toastService.error('Error transferring stock: ' + (err.error?.message || 'Please try again'));
        }
      }).add(() => {
        this.transferLoading = false;
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
      this.reserveLoading = true;
      this.analyticsService.reserveStock(this.reserveForm).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.success('Stock reserved successfully');
            this.closeReserveModal();
            this.loadStockLevels();
          }
        },
        error: (err) => {
          this.reserveLoading = false;
          this.toastService.error('Error reserving stock: ' + (err.error?.message || 'Please try again'));
        }
      }).add(() => {
        this.reserveLoading = false;
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
      this.countLoading = true;
      this.analyticsService.performStockCount(this.countForm).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.success('Stock count completed successfully');
            this.closeCountModal();
            this.loadStockLevels();
          }
        },
        error: (err) => {
          this.countLoading = false;
          this.toastService.error('Error performing stock count: ' + (err.error?.message || 'Please try again'));
        }
      }).add(() => {
        this.countLoading = false;
      });
    }
  }

  // Stock Release
  onReleaseStock(stock: InventoryStock, quantity: number | null = 1): void {
    if (quantity === null) {
      quantity = 1;
    }
    if (quantity > 0 && quantity <= stock.reserved) {
      const releaseData: StockReserveRequest = {
        part_id: stock.part_id,
        location_id: stock.location_id,
        quantity: quantity
      };
      this.releaseLoading = true;
      this.analyticsService.releaseStock(releaseData).subscribe({
        next: (response) => {
          if (response.success) {
            this.toastService.success('Stock released successfully');
            this.loadStockLevels();
            this.releaseQuantities = {};
          }
        },
        error: (err) => {
          this.releaseLoading = false;
          this.toastService.error('Error releasing stock: ' + (err.error?.message || 'Please try again'));
        }
      }).add(() => {
        this.releaseLoading = false;
      });
    }
  }

  getStockStatus(stock: InventoryStock): { status: string; class: string; icon: string } {
    if (stock.on_hand <= 0) {
      return {status: 'Out of Stock', class: 'out-of-stock', icon: 'x-circle'};
    }

    if (stock.on_hand <= (stock.part.reorder_point || 0)) {
      return {status: 'Low Stock', class: 'low-stock', icon: 'exclamation-triangle'};
    }

    if (stock.reserved > 0) {
      return {status: 'Partially Reserved', class: 'reserved', icon: 'lock-closed'};
    }

    return {status: 'In Stock', class: 'in-stock', icon: 'check-circle'};
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

  // Method to refresh locations data
  refreshLocations(): void {
    this.loadAvailableLocations();
    this.toastService.info('Refreshing locations...');
  }

  // Method to force reload locations and show status
  forceReloadLocations(): void {
    this.availableLocations = []; // Clear current locations
    this.loadAvailableLocations();
    this.toastService.info('Reloading locations...');
  }
}
