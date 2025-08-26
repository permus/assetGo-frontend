import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryAnalyticsService, InventoryTransaction, TransactionsResponse } from '../../../core/services/inventory-analytics.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: InventoryTransaction[] = [];
  loading = false;
  error: string | null = null;

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

  constructor(private inventoryService: InventoryAnalyticsService) {}

  ngOnInit(): void {
    this.loadTransactions();
    this.loadAvailableParts();
    this.loadAvailableLocations();
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
}
