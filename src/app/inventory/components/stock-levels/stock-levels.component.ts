import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  InventoryAnalyticsService,
  InventoryStock,
  StockLevelsResponse,
  StockAdjustmentRequest,
  StockTransferRequest,
  StockReserveRequest,
  StockCountRequest,
  LocationResponse
} from '../../../core/services/inventory-analytics.service';

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
  adjustStockLoading = false;
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
  quickReleaseQuantity: number | null = null;

  constructor(private analyticsService: InventoryAnalyticsService) {
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
        console.error('Error loading stock levels:', err);
        this.error = 'Error loading stock levels. Please try again.';
        this.loading = false;
      }
    });
  }

  loadAvailableLocations(): void {
    console.log('Loading available locations...');
    console.log('API URL:', this.analyticsService['apiUrl']);

    // Fetch locations from the API with exact parameters as specified
    this.analyticsService.getLocations(1, 100, 0, 'created', 'desc').subscribe({
      next: (response: any) => {
        console.log('Locations API response:', response);
        console.log('Response success:', response.success);
        console.log('Response data:', response.data);

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
          console.log('Available locations loaded:', this.availableLocations);
          console.log('Locations count:', this.availableLocations.length);
        } else {
          console.error('Failed to load locations for dropdown - no valid data found');
          console.error('Response structure:', {
            success: response.success,
            hasData: !!response.data,
            dataType: typeof response.data,
            isArray: Array.isArray(response.data),
            dataKeys: response.data ? Object.keys(response.data) : []
          });
          // Fallback to mock data if API response is not successful
          this.availableLocations = [
            {id: 1, name: 'Main Warehouse', code: 'MW'},
            {id: 2, name: 'Secondary Storage', code: 'SS'},
            {id: 3, name: 'Field Office', code: 'FO'}
          ];
        }
      },
      error: (err: any) => {
        console.error('Error loading locations:', err);
        console.error('Error details:', {
          status: err.status,
          statusText: err.statusText,
          message: err.message,
          error: err.error
        });
        // Fallback to mock data if API fails
        this.availableLocations = [
          {id: 1, name: 'Main Warehouse', code: 'MW'},
          {id: 2, name: 'Secondary Storage', code: 'SS'},
          {id: 3, name: 'Field Office', code: 'FO'}
        ];
        console.log('Using fallback locations:', this.availableLocations);
      }
    });
  }

  loadAvailableParts(): void {
    console.log('Loading available parts...');
    // Fetch parts from the API
    this.analyticsService.getPartsCatalog('', 'active', 1, 100).subscribe({
      next: (response: any) => {
        console.log('Parts API response:', response);
        if (response.success) {
          this.availableParts = response.data.data.map((part: any) => ({
            id: part.id,
            name: part.name,
            part_number: part.part_number
          }));
          console.log('Available parts loaded:', this.availableParts);
        } else {
          console.error('Failed to load parts for dropdown');
          // Fallback to mock data if API response is not successful
          this.availableParts = [
            {id: 1, name: 'Sample Part 1', part_number: 'P001'},
            {id: 2, name: 'Sample Part 2', part_number: 'P002'},
            {id: 3, name: 'Sample Part 3', part_number: 'P003'}
          ];
        }
      },
      error: (err: any) => {
        console.error('Error loading parts for dropdown:', err);
        // Fallback to mock data if API fails
        this.availableParts = [
          {id: 1, name: 'Sample Part 1', part_number: 'P001'},
          {id: 2, name: 'Sample Part 2', part_number: 'P002'},
          {id: 3, name: 'Sample Part 3', part_number: 'P003'}
        ];
        console.log('Using fallback parts:', this.availableParts);
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
    // No-op; apply on button click
  }

  onLocationFilterChange(): void {
    // No-op; apply on button click
  }

  onPartFilterChange(): void {
    // No-op; apply on button click
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
    console.log('Opening adjustment modal...');
    console.log('Available locations:', this.availableLocations);
    console.log('Available parts:', this.availableParts);

    // Ensure locations are loaded when modal opens
    if (this.availableLocations.length === 0) {
      console.log('No locations available, reloading...');
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
            this.closeAdjustmentModal();
            this.loadStockLevels();
            // You could add a success notification here
          }
        },
        error: (err) => {
          this.adjustStockLoading = false;
          console.error('Error adjusting stock:', err);
          // You could add an error notification here
        }
      }).add(() => {
        this.adjustStockLoading = true;
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

      this.analyticsService.releaseStock(releaseData).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadStockLevels();
            // You could add a success notification here
            this.quickReleaseQuantity = null;
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

  // Debug method to test API calls
  testAPIs(): void {
    console.log('Testing APIs...');
    console.log('Environment API URL:', this.analyticsService['apiUrl']);

    // Test locations API with exact parameters
    this.analyticsService.getLocations(1, 100, 0, 'created', 'desc').subscribe({
      next: (response) => {
        console.log('Locations API test response:', response);
      },
      error: (err) => {
        console.error('Locations API test error:', err);
      }
    });

    // Test parts API
    this.analyticsService.getPartsCatalog('', 'active', 1, 5).subscribe({
      next: (response) => {
        console.log('Parts API test response:', response);
      },
      error: (err) => {
        console.error('Parts API test error:', err);
      }
    });
  }

  // Method to refresh locations data
  refreshLocations(): void {
    console.log('Refreshing locations data...');
    this.loadAvailableLocations();
  }

  // Method to force reload locations and show status
  forceReloadLocations(): void {
    console.log('Force reloading locations...');
    this.availableLocations = []; // Clear current locations
    this.loadAvailableLocations();

    // Show a temporary message
    setTimeout(() => {
      if (this.availableLocations.length === 0) {
        console.log('Still no locations after force reload');
      } else {
        console.log('Locations successfully loaded after force reload');
      }
    }, 2000);
  }

  // Method to manually test the locations API
  testLocationsAPI(): void {
    console.log('=== Testing Locations API ===');
    console.log('Current token:', localStorage.getItem('token'));
    console.log('Current API URL:', this.analyticsService['apiUrl']);

    // Test with a simple HTTP call to see what we get
    this.analyticsService.getLocations(1, 5, 0, 'created', 'desc').subscribe({
      next: (response) => {
        console.log('✅ Locations API test successful:', response);
        if (response.success && response.data && response.data.data) {
          console.log('✅ Locations found:', response.data.data.length);
          console.log('✅ First location:', response.data.data[0]);
        } else {
          console.log('❌ No locations in response');
        }
      },
      error: (err) => {
        console.log('❌ Locations API test failed:', err);
        console.log('❌ Error status:', err.status);
        console.log('❌ Error message:', err.message);
      }
    });
  }
}
