import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryAnalyticsService, InventoryPart, PartsCatalogResponse, CreatePartRequest, UpdatePartRequest } from '../../../core/services/inventory-analytics.service';
import { EditPartModalComponent } from '../edit-part-modal/edit-part-modal.component';
import { AddPartModalComponent } from '../add-part-modal/add-part-modal.component';

@Component({
  selector: 'app-parts-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, EditPartModalComponent, AddPartModalComponent],
  templateUrl: './parts-catalog.component.html',
  styleUrls: ['./parts-catalog.component.scss']
})
export class PartsCatalogComponent implements OnInit {
  // Data properties
  parts: InventoryPart[] = [];
  loading = true;
  error: string | null = null;

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

  constructor(private analyticsService: InventoryAnalyticsService) { }

  ngOnInit(): void {
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
      this.perPage
    ).subscribe({
      next: (response) => {
        if (response.success) {
          this.parts = response.data.data;
          this.totalParts = response.data.total;
          this.totalPages = response.data.last_page;
          this.currentPage = response.data.current_page;
          this.calculateSummaryData();
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
      sum + (part.unit_cost || 0), 0
    );
  }

  loadPartsOverview(): void {
    this.analyticsService.getPartsOverview().subscribe({
      next: (response) => {
        if (response.success) {
          this.summaryData.totalParts = response.data.total_parts;
          this.summaryData.lowStockItems = response.data.low_stock_count;
          this.summaryData.totalValue = response.data.total_value;
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
    // No-op; apply on button click
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
      }
    });
  }

  onDeletePart(partId: number): void {
    if (confirm('Are you sure you want to delete this part? This action cannot be undone.')) {
      this.analyticsService.deletePart(partId).subscribe({
        next: (response) => {
          if (response.success) {
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
}
