import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryAnalyticsService, InventoryTransaction, TransactionsResponse } from '../../../core/services/inventory-analytics.service';
import { AuthService } from '../../../core/services/auth.service';
import { TransactionDetailDrawerComponent } from './transaction-detail-drawer/transaction-detail-drawer.component';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, TransactionDetailDrawerComponent],
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

  exporting = false;
  canExport = false;

  // Drawer state
  showDrawer = false;
  selectedTransaction: InventoryTransaction | null = null;

  constructor(
    private inventoryService: InventoryAnalyticsService,
    private authService: AuthService
  ) {
    this.checkExportPermissions();
  }

  checkExportPermissions(): void {
    const user = this.authService.getCurrentUser();
    this.canExport = user?.user_type === 'manager' || user?.user_type === 'admin';
  }

  hasActiveFilters(): boolean {
    return !!(
      this.filters.type ||
      this.filters.part_id ||
      this.filters.location_id ||
      this.filters.start_date ||
      this.filters.end_date ||
      this.filters.search
    );
  }

  getExportButtonText(): string {
    if (this.exporting) {
      return 'Exporting...';
    }
    return this.hasActiveFilters() ? 'Export Filtered' : 'Export All';
  }

  getExportButtonTitle(): string {
    if (this.hasActiveFilters()) {
      const activeFilters = [];
      if (this.filters.type) activeFilters.push(`Type: ${this.getTransactionTypeLabel(this.filters.type)}`);
      if (this.filters.part_id) {
        const part = this.availableParts.find(p => p.id == this.filters.part_id);
        activeFilters.push(`Part: ${part?.name || 'Selected'}`);
      }
      if (this.filters.location_id) {
        const location = this.availableLocations.find(l => l.id == this.filters.location_id);
        activeFilters.push(`Location: ${location?.name || 'Selected'}`);
      }
      if (this.filters.start_date) activeFilters.push(`From: ${this.filters.start_date}`);
      if (this.filters.end_date) activeFilters.push(`To: ${this.filters.end_date}`);
      if (this.filters.search) activeFilters.push(`Search: ${this.filters.search}`);
      
      return `Export filtered data: ${activeFilters.join(', ')}`;
    }
    return 'Export all transactions';
  }

  // Drawer methods
  openTransactionDrawer(transaction: InventoryTransaction): void {
    this.selectedTransaction = transaction;
    this.showDrawer = true;
    this.trackTransactionView(transaction);
  }

  closeTransactionDrawer(): void {
    this.showDrawer = false;
    this.selectedTransaction = null;
  }

  onReverseTransaction(transaction: InventoryTransaction): void {
    // Placeholder for reverse transaction functionality
    console.log('Reverse transaction requested for:', transaction.id);
    // TODO: Implement reverse transaction logic
    alert('Reverse transaction functionality will be implemented soon.');
  }

  trackTransactionView(transaction: InventoryTransaction): void {
    const user = this.authService.getCurrentUser();
    console.log('event: transaction_view', {
      transaction_id: transaction.id,
      user_id: user?.id,
      timestamp: new Date().toISOString()
    });
  }

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

  exportToCSV(): void {
    if (this.transactions.length === 0) {
      alert('No transactions to export');
      return;
    }

    this.exporting = true;

    // Build query params with current filters
    const params = new URLSearchParams();
    params.set('per_page', '1000'); // Fetch more data for export
    params.set('page', '1');

    // Apply current filters
    if (this.filters.type) params.set('type', this.filters.type);
    if (this.filters.part_id) params.set('part_id', this.filters.part_id);
    if (this.filters.location_id) params.set('location_id', this.filters.location_id);
    if (this.filters.start_date) params.set('start_date', this.filters.start_date);
    if (this.filters.end_date) params.set('end_date', this.filters.end_date);
    if (this.filters.search) params.set('keyword', this.filters.search);

    // Fetch filtered transactions
    this.inventoryService.getTransactions(params.toString()).subscribe({
      next: (response: TransactionsResponse) => {
        const filteredTransactions = response.data.data;
        this.generateCSV(filteredTransactions);
        this.exporting = false;
      },
      error: (err) => {
        console.error('Error fetching transactions for export:', err);
        // Fallback to current page data
        this.generateCSV(this.transactions);
        this.exporting = false;
      }
    });
  }

  generateCSV(transactions: InventoryTransaction[]): void {
    // CSV headers
    const headers = [
      'Date',
      'Type',
      'Part Number',
      'Part Name',
      'Location',
      'Quantity',
      'Unit Cost',
      'Total Cost',
      'Reason',
      'Reference'
    ];

    // CSV rows
    const rows = transactions.map(transaction => {
      const quantity = transaction.type === 'issue' || transaction.type === 'transfer_out'
        ? `-${transaction.quantity}`
        : `+${transaction.quantity}`;

      return [
        this.formatDate(transaction.created_at),
        this.getTransactionTypeLabel(transaction.type),
        transaction.part?.part_number || 'N/A',
        this.escapeCSV(transaction.part?.name || 'Unknown Part'),
        this.escapeCSV(transaction.location?.name || 'Unknown Location'),
        quantity,
        (transaction.unit_cost || 0).toString(),
        (transaction.total_cost || 0).toString(),
        this.escapeCSV(transaction.reason || 'N/A'),
        this.escapeCSV(transaction.reference || 'N/A')
      ];
    });

    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `transactions-${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  escapeCSV(value: string): string {
    if (!value) return '';
    // Escape quotes and wrap in quotes if contains comma, quote, or newline
    const escaped = value.replace(/"/g, '""');
    if (escaped.includes(',') || escaped.includes('"') || escaped.includes('\n')) {
      return `"${escaped}"`;
    }
    return escaped;
  }

  exportToPDF(): void {
    if (this.transactions.length === 0) {
      alert('No transactions to export');
      return;
    }

    this.exporting = true;

    // Build query params with current filters
    const params = new URLSearchParams();
    params.set('per_page', '1000'); // Fetch more data for export
    params.set('page', '1');

    // Apply current filters
    if (this.filters.type) params.set('type', this.filters.type);
    if (this.filters.part_id) params.set('part_id', this.filters.part_id);
    if (this.filters.location_id) params.set('location_id', this.filters.location_id);
    if (this.filters.start_date) params.set('start_date', this.filters.start_date);
    if (this.filters.end_date) params.set('end_date', this.filters.end_date);
    if (this.filters.search) params.set('keyword', this.filters.search);

    // Fetch filtered transactions
    this.inventoryService.getTransactions(params.toString()).subscribe({
      next: (response: TransactionsResponse) => {
        const filteredTransactions = response.data.data;
        this.generatePDF(filteredTransactions);
        this.exporting = false;
      },
      error: (err) => {
        console.error('Error fetching transactions for export:', err);
        // Fallback to current page data
        this.generatePDF(this.transactions);
        this.exporting = false;
      }
    });
  }

  generatePDF(transactions: InventoryTransaction[]): void {
    // Build title with filter info
    let title = 'Inventory Transactions Report';
    const filterParts: string[] = [];

    if (this.filters.type) {
      filterParts.push(`Type: ${this.getTransactionTypeLabel(this.filters.type)}`);
    }
    if (this.filters.start_date && this.filters.end_date) {
      filterParts.push(`Date Range: ${this.filters.start_date} to ${this.filters.end_date}`);
    } else if (this.filters.start_date) {
      filterParts.push(`From: ${this.filters.start_date}`);
    } else if (this.filters.end_date) {
      filterParts.push(`To: ${this.filters.end_date}`);
    }

    if (filterParts.length > 0) {
      title += ` (${filterParts.join(', ')})`;
    }

    // Create PDF document in landscape orientation for better table fit
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Set title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 20, 20);

    // Generated date
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
    doc.text(`Generated on: ${currentDate}`, 20, 30);

    // Prepare table data
    const tableData = transactions.map(transaction => {
      const quantity = transaction.type === 'issue' || transaction.type === 'transfer_out'
        ? `-${transaction.quantity}`
        : `+${transaction.quantity}`;

      return [
        this.formatDate(transaction.created_at),
        this.getTransactionTypeLabel(transaction.type),
        transaction.part?.part_number || 'N/A',
        transaction.part?.name || 'Unknown Part',
        transaction.location?.name || 'Unknown Location',
        quantity,
        this.formatCurrency(transaction.unit_cost || 0),
        this.formatCurrency(transaction.total_cost || 0),
        transaction.reason || 'N/A',
        transaction.reference || 'N/A'
      ];
    });

    // Create table with optimized column widths for landscape
    autoTable(doc, {
      head: [['Date', 'Type', 'Part #', 'Part Name', 'Location', 'Qty', 'Unit Cost', 'Total', 'Reason', 'Ref']],
      body: tableData,
      startY: 35,
      margin: { left: 20, right: 20 },
      styles: {
        fontSize: 7,
        cellPadding: 2,
        halign: 'left',
        overflow: 'linebreak',
        cellWidth: 'wrap'
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 7
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      columnStyles: {
        0: { cellWidth: 20, halign: 'center' }, // Date
        1: { cellWidth: 25 }, // Type
        2: { cellWidth: 30 }, // Part #
        3: { cellWidth: 40, overflow: 'linebreak' }, // Part Name - allow wrapping
        4: { cellWidth: 35, overflow: 'linebreak' }, // Location - allow wrapping
        5: { cellWidth: 15, halign: 'center' }, // Quantity
        6: { cellWidth: 25, halign: 'right' }, // Unit Cost
        7: { cellWidth: 25, halign: 'right' }, // Total Cost
        8: { cellWidth: 30, overflow: 'linebreak' }, // Reason - allow wrapping
        9: { cellWidth: 25, overflow: 'linebreak' }, // Reference - allow wrapping
      },
      // Use tableWidth: 'auto' to fit page width
      tableWidth: 'auto',
    });

    // Save the PDF
    const fileName = `transactions-${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(fileName);
  }
}
