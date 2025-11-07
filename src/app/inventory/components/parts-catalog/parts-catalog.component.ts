import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryAnalyticsService, InventoryPart, PartsCatalogResponse, CreatePartRequest, UpdatePartRequest } from '../../../core/services/inventory-analytics.service';
import { AddPartModalComponent } from '../add-part-modal/add-part-modal.component';
import {
  DeleteConfirmationModalComponent
} from '../../../assets/components/delete-confirmation-modal/delete-confirmation-modal.component';
import { ArchiveConfirmationModalComponent } from './archive-confirmation-modal/archive-confirmation-modal.component';
import { RestoreConfirmationModalComponent } from './restore-confirmation-modal/restore-confirmation-modal.component';
import { PartsBulkImportModalComponent } from '../parts-bulk-import-modal/parts-bulk-import-modal.component';
import { CurrencyService } from '../../../core/services/currency.service';
import { PreferencesService } from '../../../core/services/preferences.service';
import { ModuleAccessService } from '../../../core/services/module-access.service';
import { ToastService } from '../../../core/services/toast.service';
import { AuthService } from '../../../core/services/auth.service';
import { NumberFormatPipe } from '../../../core/pipes/number-format.pipe';

@Component({
  selector: 'app-parts-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, AddPartModalComponent, DeleteConfirmationModalComponent, ArchiveConfirmationModalComponent, RestoreConfirmationModalComponent, PartsBulkImportModalComponent, NumberFormatPipe],
  templateUrl: './parts-catalog.component.html',
  styleUrls: ['./parts-catalog.component.scss']
})
export class PartsCatalogComponent implements OnInit {
  private prefsService = inject(PreferencesService);
  
  // Data properties
  parts: InventoryPart[] = [];
  loading = true;
  error: string | null = null;
  isDropdownOpen = false;
  showDeleteConfirmationModal = false;
  showArchiveModal = false;
  showRestoreModal = false;
  archiveWarningData: any = null;
  includeArchived = false;
  hasOpenPOs = false; // Track if selected part has open POs
  showBulkImportModal = false; // Bulk import modal flag
  // Search and filter properties
  searchTerm = '';
  selectedStatus = '';
  currentPage = 1;
  perPage = 15;
  totalParts = 0;
  totalPages = 0;

  // View control properties
  currentView: 'grid' | 'list' | 'compact' | 'table' = 'grid';
  showAddPartModal = false;
  showEditPartModal = false;
  selectedPart: InventoryPart | null = null;
  partLoading = false;

  // Summary data
  summaryData = {
    totalParts: 0,
    lowStockItems: 0,
    totalValue: 0
  };

  constructor(
    private analyticsService: InventoryAnalyticsService, 
    private currencyService: CurrencyService,
    private moduleAccessService: ModuleAccessService,
    private toastService: ToastService,
    private authService: AuthService
  ) { }

  getCurrencySymbol(): string {
    return this.currencyService.getSymbol();
  }

  ngOnInit(): void {
    // Apply items per page from user preferences
    this.perPage = this.prefsService.get('items_per_page') || 15;
    
    this.loadPartsCatalog();
    this.loadPartsOverview();
  }

  loadPartsCatalog(): void {
    this.loading = true;
    this.error = null;

    this.analyticsService.getPartsCatalog(
      this.searchTerm || undefined,
      this.selectedStatus || undefined,
      this.currentPage,
      this.perPage,
      this.includeArchived ? true : undefined
    ).subscribe({
      next: (response) => {
        if (response.success) {
          this.parts = response.data.data;
          this.totalParts = response.data.total;
          this.totalPages = response.data.last_page;
          this.currentPage = response.data.current_page;
          // Note: Summary data is now loaded from API via loadPartsOverview()
        } else {
          this.error = 'Failed to load parts catalog';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading parts catalog:', err);
        this.error = 'Error loading parts catalog. Please try again.';
        this.loading = false;
      }
    });
  }

  calculateSummaryData(): void {
    this.summaryData.totalParts = this.totalParts;
    this.summaryData.lowStockItems = this.parts.filter(part =>
      part.reorder_point && part.reorder_point > 0
    ).length;
    this.summaryData.totalValue = this.parts.reduce((sum, part) =>
      sum + Number(part.unit_cost || 0), 0
    );
  }

  loadPartsOverview(): void {
    this.analyticsService.getPartsOverview().subscribe({
      next: (response) => {
        if (response.success) {
          // Use active_parts to match the list endpoint behavior (excludes archived by default)
          this.summaryData.totalParts = response.data.active_parts || response.data.total_parts;
          this.summaryData.lowStockItems = response.data.low_stock_count;
          this.summaryData.totalValue = response.data.total_value;
        } else {
          console.error('API returned success: false', response);
        }
      },
      error: (err) => {
        console.error('Error loading parts overview:', err);
      }
    });
  }

  onSearchChange(): void {
    // No-op; apply on button click
  }

  onStatusFilterChange(): void {
    this.currentPage = 1;
    this.loadPartsCatalog();
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.loadPartsCatalog();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = '';
    this.currentPage = 1;
    this.loadPartsCatalog();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPartsCatalog();
  }

  onViewChange(view: 'grid' | 'list' | 'compact' | 'table'): void {
    this.currentView = view;
  }

  openAddPartModal(): void {
    this.showAddPartModal = true;
  }

  closeAddPartModal(): void {
    this.showAddPartModal = false;
  }

  openEditPartModal(part: InventoryPart): void {
    this.selectedPart = { ...part };
    this.showEditPartModal = true;
  }

  closeEditPartModal(): void {
    this.selectedPart = null;
    this.showEditPartModal = false;
  }

  onCreatePart(partData: CreatePartRequest): void {
    this.partLoading = true;
    this.analyticsService.createPart(partData).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeAddPartModal();
          this.loadPartsCatalog();
          // You could add a success notification here
        }
      },
      error: (err) => {
        console.error('Error creating part:', err);
        this.partLoading = false;
      }
    }).add(() =>{
      this.partLoading = false;
    });
  }

  onUpdatePart(partData: UpdatePartRequest): void {
    this.partLoading = true;
    if (!this.selectedPart) return;

    this.analyticsService.updatePart(this.selectedPart.id, partData).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeEditPartModal();
          this.loadPartsCatalog();
          // You could add a success notification here
        }
      },
      error: (err) => {
        console.error('Error updating part:', err);
        // You could add an error notification here
        this.partLoading = false;
      }
    }).add(() => {
      this.partLoading = false;
    });
  }

  openDeleteConfirmationModal(selectedPart: InventoryPart): void {
    this.selectedPart = selectedPart;
    this.showDeleteConfirmationModal = true;
  }

  onDeletePart(partId: number): void {
    this.analyticsService.deletePart(partId).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeDeleteModal();
          this.loadPartsCatalog();
          // You could add a success notification here
        }
      },
      error: (err) => {
        console.error('Error deleting part:', err);
        // You could add an error notification here
      }
    });
  }

  getStockStatus(part: InventoryPart): { status: string; class: string; icon: string } {
    if (!part.reorder_point || part.reorder_point <= 0) {
      return { status: 'In Stock', class: 'in-stock', icon: 'check-circle' };
    }

    // This is a simplified check - in a real app you'd compare with actual stock levels
    if (part.unit_cost && part.unit_cost > 0) {
      return { status: 'Low Stock', class: 'low-stock', icon: 'exclamation-triangle' };
    }

    return { status: 'Out of Stock', class: 'out-of-stock', icon: 'x-circle' };
  }

  refreshData(): void {
    this.loadPartsCatalog();
  }

  getStatusOptions(): string[] {
    return ['active', 'inactive', 'discontinued'];
  }

  closeDeleteModal(): void {
    this.showDeleteConfirmationModal = false;
  }

  onIncludeArchivedChange(): void {
    this.currentPage = 1;
    this.loadPartsCatalog();
  }

  hasPermission(module: string, action: string): boolean {
    return this.moduleAccessService.hasPermission(module, action);
  }

  openArchiveModal(part: InventoryPart): void {
    this.selectedPart = part;
    this.hasOpenPOs = false; // Reset, will be updated by API response if needed
    this.showArchiveModal = true;
  }

  closeArchiveModal(): void {
    this.showArchiveModal = false;
    this.selectedPart = null;
  }

  onArchivePart(data: { reason: string; force: boolean }): void {
    if (!this.selectedPart) return;

    this.partLoading = true;
    this.analyticsService.archivePart(this.selectedPart.id, data.force).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeArchiveModal();
          this.loadPartsCatalog();
          this.loadPartsOverview();
          this.toastService.success('Part archived successfully.');
        }
        this.partLoading = false;
      },
      error: (err) => {
        console.error('Error archiving part:', err);
        if (err.status === 422 && err.error?.requires_force) {
          // Part has open POs - set flag to show force archive option
          this.hasOpenPOs = true;
          // Don't close modal, let user see the force archive option
          this.toastService.warning('Part is linked to open Purchase Orders. Check "Force archive" option to proceed.');
        } else {
          this.toastService.error(err.error?.message || 'Failed to archive part. Please try again.');
        }
        this.partLoading = false;
      }
    });
  }

  openRestoreModal(part: InventoryPart): void {
    this.selectedPart = part;
    this.showRestoreModal = true;
  }

  closeRestoreModal(): void {
    this.showRestoreModal = false;
    this.selectedPart = null;
  }

  onRestorePart(reason: string): void {
    if (!this.selectedPart) return;

    this.partLoading = true;
    this.analyticsService.restorePart(this.selectedPart.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.closeRestoreModal();
          this.loadPartsCatalog();
          this.loadPartsOverview();
          this.toastService.success('Part restored successfully.');
        }
        this.partLoading = false;
      },
      error: (err) => {
        console.error('Error restoring part:', err);
        this.toastService.error(err.error?.message || 'Failed to restore part. Please try again.');
        this.partLoading = false;
      }
    });
  }

  // Helper methods for role-based access
  canArchiveOrRestore(): boolean {
    const user = this.authService.getCurrentUser();
    return user?.user_type === 'manager' || user?.user_type === 'admin';
  }

  isArchived(part: InventoryPart): boolean {
    return part.is_archived === true;
  }

  // Bulk Import Methods
  openBulkImportModal(): void {
    this.showBulkImportModal = true;
  }

  closeBulkImportModal(): void {
    this.showBulkImportModal = false;
  }

  onBulkImportComplete(): void {
    this.closeBulkImportModal();
    this.loadPartsCatalog();
    this.loadPartsOverview();
  }

}
