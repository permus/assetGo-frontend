import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryAnalyticsService, InventoryTransaction, TransactionsResponse } from '../../../core/services/inventory-analytics.service';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, AfterViewInit {
  transactions: InventoryTransaction[] = [];
  loading = false;
  error: string | null = null;
  searchTimeout: any;

  // Pagination
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  perPage = 15;

  // Filters
  filters = {
    type: '',
    part_id: '',
    location_id: '',
    start_date: '',
    end_date: '',
    search: ''
  };

  // Available options for filters
  availableParts: any[] = [];
  availableLocations: any[] = [];
  transactionTypes = [
    { value: '', label: 'All Types' },
    { value: 'receipt', label: 'Receipt' },
    { value: 'issue', label: 'Issue' },
    { value: 'adjustment', label: 'Adjustment' },
    { value: 'transfer_out', label: 'Transfer Out' },
    { value: 'transfer_in', label: 'Transfer In' },
    { value: 'return', label: 'Return' }
  ];

  // Flatpickr instances
  startDatePicker: any;
  endDatePicker: any;

  constructor(private inventoryService: InventoryAnalyticsService) {}

  ngOnInit(): void {
    this.loadTransactions();
    this.loadAvailableParts();
    this.loadAvailableLocations();
  }

  ngAfterViewInit(): void {
    this.initializeDatePickers();
  }

  loadTransactions(): void {
    this.loading = true;
    this.error = null;

    const params = new URLSearchParams();
    params.set('page', this.currentPage.toString());
    params.set('per_page', this.perPage.toString());

    if (this.filters.type) params.set('type', this.filters.type);
    if (this.filters.part_id) params.set('part_id', this.filters.part_id);
    if (this.filters.location_id) params.set('location_id', this.filters.location_id);
    if (this.filters.start_date) params.set('start_date', this.filters.start_date);
    if (this.filters.end_date) params.set('end_date', this.filters.end_date);
    if (this.filters.search) params.set('keyword', this.filters.search);

    this.inventoryService.getTransactions(params.toString()).subscribe({
      next: (response: TransactionsResponse) => {
        this.transactions = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
        this.totalItems = response.data.total;
        this.loading = false;
        console.log('Transactions loaded:', response);
      },
      error: (err) => {
        console.error('Error loading transactions:', err);
        this.error = 'Failed to load transactions. Please try again.';
        this.loading = false;
      }
    });
  }

  loadAvailableParts(): void {
    this.inventoryService.getPartsCatalog('', 'active', 1, 100).subscribe({
      next: (response) => {
        this.availableParts = response.data.data || [];
        console.log('Available parts loaded:', this.availableParts.length);
      },
      error: (err) => {
        console.error('Error loading parts:', err);
        this.availableParts = [];
      }
    });
  }

  loadAvailableLocations(): void {
    this.inventoryService.getLocations(1, 100, 0, 'created', 'desc').subscribe({
      next: (response) => {
        this.availableLocations = response.data?.locations || [];
      },
      error: (err) => {
        console.error('Error loading locations:', err);
        this.availableLocations = [];
      }
    });
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.loadTransactions();
  }

  clearFilters(): void {
    this.filters = {
      type: '',
      part_id: '',
      location_id: '',
      start_date: '',
      end_date: '',
      search: ''
    };
    
    // Reset date picker restrictions
    if (this.startDatePicker) {
      this.startDatePicker.set('maxDate', null);
      this.startDatePicker.set('minDate', null);
      this.startDatePicker.clear();
    }
    if (this.endDatePicker) {
      this.endDatePicker.set('maxDate', null);
      this.endDatePicker.set('minDate', null);
      this.endDatePicker.clear();
    }
    
    this.currentPage = 1;
    this.loadTransactions();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadTransactions();
  }

  getTransactionTypeLabel(type: string): string {
    const typeMap: { [key: string]: string } = {
      'receipt': 'Receipt',
      'issue': 'Issue',
      'adjustment': 'Adjustment',
      'transfer_out': 'Transfer Out',
      'transfer_in': 'Transfer In',
      'return': 'Return'
    };
    return typeMap[type] || type;
  }

  getTransactionTypeClass(type: string): string {
    const classMap: { [key: string]: string } = {
      'receipt': 'bg-green-100 text-green-800',
      'issue': 'bg-red-100 text-red-800',
      'adjustment': 'bg-blue-100 text-blue-800',
      'transfer_out': 'bg-orange-100 text-orange-800',
      'transfer_in': 'bg-purple-100 text-purple-800',
      'return': 'bg-yellow-100 text-yellow-800'
    };
    return classMap[type] || 'bg-gray-100 text-gray-800';
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  refreshData(): void {
    this.loadTransactions();
  }

  searchData(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.currentPage = 1;
      this.loadTransactions();
    }, 800);
  }

  initializeDatePickers(): void {
    // Initialize start date picker
    this.startDatePicker = flatpickr('#start-date-picker', {
      dateFormat: 'Y-m-d',
      onChange: (selectedDates, dateStr) => {
        this.filters.start_date = dateStr;
        // Update end date picker max date when start date changes
        if (dateStr && this.endDatePicker) {
          this.endDatePicker.set('maxDate', null);
          this.endDatePicker.set('minDate', dateStr);
        }
        this.currentPage = 1;
        this.loadTransactions();
      }
    });

    // Initialize end date picker
    this.endDatePicker = flatpickr('#end-date-picker', {
      dateFormat: 'Y-m-d',
      onChange: (selectedDates, dateStr) => {
        this.filters.end_date = dateStr;
        // Update start date picker max date when end date changes
        if (dateStr && this.startDatePicker) {
          this.startDatePicker.set('maxDate', dateStr);
        }
        this.currentPage = 1;
        this.loadTransactions();
      }
    });
  }
}
