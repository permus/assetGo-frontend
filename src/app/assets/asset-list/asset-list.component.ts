import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, NgIf, NgFor, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetService } from '../services/asset.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ArchiveConfirmationModalComponent } from '../components/archive-confirmation-modal/archive-confirmation-modal.component';
import { DeleteConfirmationModalComponent } from '../components/delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgFor, FormsModule, DecimalPipe, DatePipe, ArchiveConfirmationModalComponent, DeleteConfirmationModalComponent],
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private assetService: AssetService
  ) {}

  summary = {
    totalAssets: 0,
    activeAssets: 0,
    maintenance: 0,
    totalValue: 0,
    assetHealth: 0
  };

  // Loading states
  loading = false;
  error = '';

  showMenu = false;

  // Filter dropdowns
  showTypeDropdown = false;
  showStatusDropdown = false;
  showSortDropdown = false;
  showSortDirDropdown = false;

  // Archive modal state
  showArchiveConfirmationModal = false;
  showDeleteConfirmationModal = false;

  typeOptions = [
    { value: '', label: 'All Types' },
    { value: 'fixed', label: 'Fixed Asset' },
    { value: 'semi-fixed', label: 'Semi-Fixed Asset' },
    { value: 'mobile', label: 'Mobile Asset' },
    { value: 'fleet', label: 'Fleet Asset' }
  ];
  statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'Active', label: 'Active' },
    { value: 'Maintenance', label: 'Maintenance' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Retired', label: 'Retired' }
  ];
  sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'created_at', label: 'Date Added' },
    { value: 'status', label: 'Status' },
    { value: 'manufacturer', label: 'Manufacturer' },
    { value: 'purchase_price', label: 'Cost' }
  ];
  selectedType = this.typeOptions[0];
  selectedStatus = this.statusOptions[0];
  selectedSort = this.sortOptions[0];
  selectedSortDir = 'desc';

  viewType: 'grid' | 'list' = 'grid';
  searchQuery = '';
  
  // Filter parameters
  currentFilters = {
    search: '',
    type: '',
    status: '',
    category_id: '',
    location_id: '',
    sort_by: 'name',
    sort_direction: 'desc',
    page: 1,
    per_page: 20
  };

  assetList: any[] = [];
  categories: any[] = [];
  locations: any[] = [];
  
  // Pagination
  pagination = {
    current_page: 1,
    last_page: 1,
    per_page: 20,
    total: 0,
    from: 0,
    to: 0
  };

  selectAllAssets = false;

  ngOnInit() {
    this.loadAssetStatistics();
    this.loadAssets();
    this.loadCategories();
    this.loadLocations();
  }

  loadAssetStatistics() {
    this.assetService.getAssetStatistics()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            const data = response.data;
            this.summary = {
              totalAssets: data.total_assets || 0,
              activeAssets: data.active_assets || 0,
              maintenance: data.maintenance || 0,
              totalValue: data.total_asset_value || 0,
              assetHealth: data.total_asset_health && data.total_assets ? 
                Math.round(data.total_asset_health / data.total_assets) : 100
            };
          }
        },
        error: (error) => {
          console.error('Error loading asset statistics:', error);
          // Keep default summary values on error
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // loadAssetStatistics() {
  //   this.assetService.getAssetStatistics()
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe({
  //       next: (response) => {
  //         if (response.success && response.data) {
  //           const data = response.data;
  //           this.summary = {
  //             totalAssets: data.total_assets || 0,
  //             activeAssets: data.active_assets || 0,
  //             maintenance: data.maintenance || 0,
  //             totalValue: data.total_asset_value || 0,
  //             assetHealth: data.total_asset_health ? Math.round(data.total_asset_health / (data.total_assets || 1)) : 100
  //           };
  //         }
  //       },
  //       error: (error) => {
  //         console.error('Error loading asset statistics:', error);
  //         // Keep default summary values on error
  //       }
  //     });
  // }

  loadAssets() {
    this.loading = true;
    this.error = '';

    // Build query parameters
    const params: any = {};
    
    if (this.currentFilters.search) {
      params.search = this.currentFilters.search;
    }
    if (this.currentFilters.type) {
      params.type = this.currentFilters.type;
    }
    if (this.currentFilters.status) {
      params.status = this.currentFilters.status;
    }
    if (this.currentFilters.category_id) {
      params.category_id = this.currentFilters.category_id;
    }
    if (this.currentFilters.location_id) {
      params.location_id = this.currentFilters.location_id;
    }
    if (this.currentFilters.sort_by) {
      params.sort_by = this.currentFilters.sort_by;
    }
    if (this.currentFilters.sort_direction) {
      params.sort_direction = this.currentFilters.sort_direction;
    }
    params.page = this.currentFilters.page;
    params.per_page = this.currentFilters.per_page;

    this.assetService.getAssets(params as any)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.assetList = (response.data.assets || response.data).map((asset: any) => ({
              ...asset,
              selected: false
            }));
            
            // Update pagination if available
            if (response.data.pagination) {
              this.pagination = response.data.pagination;
            }
            
          } else {
            this.error = response.message || 'Failed to load assets';
          }
          this.loading = false;
        },
        error: (error) => {
          this.error = error.error?.message || 'An error occurred while loading assets';
          this.loading = false;
        }
      });
  }

  loadCategories() {
    this.assetService.getAssetCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.categories = response.data.categories;
          }
        },
        error: (error) => {
          console.error('Error loading categories:', error);
        }
      });
  }

  loadLocations() {
    this.assetService.getLocations()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.locations = response.data.locations || response.data;
          }
        },
        error: (error) => {
          console.error('Error loading locations:', error);
        }
      });
  }

  onSearch() {
    this.currentFilters.search = this.searchQuery;
    this.currentFilters.page = 1; // Reset to first page
    this.loadAssets();
  }

  applyFilters() {
    this.currentFilters.page = 1; // Reset to first page
    this.loadAssets();
  }

  get selectedCount() {
    return this.assetList.filter(asset => asset.selected).length;
  }

  toggleSelectAllAssets() {
    const allSelected = this.selectedCount === this.assetList.length;
    this.assetList.forEach(asset => asset.selected = !allSelected);
    this.selectAllAssets = !allSelected;
  }

  selectType(type: any) {
    const selectedOption = this.typeOptions.find(option => option.value === type);
    if (selectedOption) {
      this.selectedType = selectedOption;
      this.currentFilters.type = selectedOption.value;
    }
    this.showTypeDropdown = false;
    this.applyFilters();
  }
  
  selectStatus(status: any) {
    const selectedOption = this.statusOptions.find(option => option.value === status);
    if (selectedOption) {
      this.selectedStatus = selectedOption;
      this.currentFilters.status = selectedOption.value;
    }
    this.showStatusDropdown = false;
    this.applyFilters();
  }
  
  selectSort(sort: any) {
    const selectedOption = this.sortOptions.find(option => option.value === sort);
    if (selectedOption) {
      this.selectedSort = selectedOption;
      this.currentFilters.sort_by = selectedOption.value;
    }
    this.showSortDropdown = false;
    this.applyFilters();
  }
  
  selectSortDir(dir: 'asc' | 'desc') {
    this.selectedSortDir = dir;
    this.currentFilters.sort_direction = dir;
    this.showSortDirDropdown = false;
    this.applyFilters();
  }

  toggleSortDir() {
    this.selectedSortDir = this.selectedSortDir === 'asc' ? 'desc' : 'asc';
    this.currentFilters.sort_direction = this.selectedSortDir;
    this.applyFilters();
  }

  duplicateSelected() {
    const selectedAssets = this.assetList.filter(asset => asset.selected);
    if (selectedAssets.length === 0) return;

    // For now, duplicate the first selected asset as an example
    // In a real implementation, you might want to show a modal for each asset
    const assetToDuplicate = selectedAssets[0];
    
    // Generate new serial number automatically
    const newSerialNumber = this.generateSerialNumber();

    this.loading = true;
    
    this.assetService.duplicateAsset(assetToDuplicate.id, { serial_number: newSerialNumber })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            // Reload assets to show the new duplicated asset
            this.loadAssets();
            this.clearSelection();
            // Show success message (you could add a toast notification here)
            console.log('Asset duplicated successfully:', response.data);
          } else {
            this.error = response.message || 'Failed to duplicate asset';
          }
          this.loading = false;
        },
        error: (error) => {
          this.error = error.error?.message || 'An error occurred while duplicating the asset';
          this.loading = false;
        }
      });
  }

  generateSerialNumber(): string {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `SN${timestamp.slice(-6)}${random}`;
  }

  clearSelection() {
    this.assetList.forEach(asset => asset.selected = false);
    this.selectAllAssets = false;
  }

  showArchiveModal() {
    if (this.selectedCount > 0) {
      this.showArchiveConfirmationModal = true;
    }
  }

  closeArchiveModal() {
    this.showArchiveConfirmationModal = false;
  }

  showDeleteModal() {
    if (this.selectedCount > 0) {
      this.showDeleteConfirmationModal = true;
    }
  }

  closeDeleteModal() {
    this.showDeleteConfirmationModal = false;
  }

  deleteSelected() {
    const selectedAssets = this.assetList.filter(asset => asset.selected);
    if (selectedAssets.length === 0) {
      this.closeDeleteModal();
      return;
    }

    // Get asset IDs for bulk delete
    const assetIds = selectedAssets.map(asset => asset.id);

    this.assetService.bulkDeleteAssets(assetIds)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            // Check if any assets failed to delete
            if (response.failed && response.failed.length > 0) {
              const failedCount = response.failed.length;
              const successCount = response.deleted ? response.deleted.length : 0;
              this.error = `${successCount} assets deleted successfully, ${failedCount} failed to delete`;
            } else {
              // All assets deleted successfully
              const deletedCount = response.deleted ? response.deleted.length : selectedAssets.length;
              console.log(`${deletedCount} assets deleted successfully`);
            }
            
            // Reload assets and statistics
            this.loadAssets();
            this.loadAssetStatistics();
            this.clearSelection();
          } else {
            this.error = response.message || 'Failed to delete assets';
          }
          // Close modal after completion
          this.closeDeleteModal();
        },
        error: (error) => {
          this.error = error.error?.message || 'An error occurred while deleting assets';
          // Close modal even on error
          this.closeDeleteModal();
        }
      });
  }

  archiveSelected() {
    const selectedAssets = this.assetList.filter(asset => asset.selected);
    if (selectedAssets.length === 0) {
      this.closeArchiveModal();
      return;
    }

    // Get asset IDs for bulk archive
    const assetIds = selectedAssets.map(asset => asset.id);

    this.assetService.bulkArchiveAssets(assetIds)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            // Check if any assets failed to archive
            if (response.failed && response.failed.length > 0) {
              const failedCount = response.failed.length;
              const successCount = response.archived ? response.archived.length : 0;
              this.error = `${successCount} assets archived successfully, ${failedCount} failed to archive`;
            } else {
              // All assets archived successfully
              const archivedCount = response.archived ? response.archived.length : selectedAssets.length;
              console.log(`${archivedCount} assets archived successfully`);
            }
            
            // Reload assets and statistics
            this.loadAssets();
            this.loadAssetStatistics();
            this.clearSelection();
          } else {
            this.error = response.message || 'Failed to archive assets';
          }
          // Close modal after completion
          this.closeArchiveModal();
        },
        error: (error) => {
          this.error = error.error?.message || 'An error occurred while archiving assets';
          // Close modal even on error
          this.closeArchiveModal();
        }
      });
  }

  toggleTypeDropdown() {
    this.showTypeDropdown = !this.showTypeDropdown;
    this.showStatusDropdown = false;
    this.showSortDropdown = false;
    this.showSortDirDropdown = false;
  }

  toggleStatusDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showTypeDropdown = false;
    this.showSortDropdown = false;
    this.showSortDirDropdown = false;
  }

  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
    this.showTypeDropdown = false;
    this.showStatusDropdown = false;
    this.showSortDirDropdown = false;
  }

  goToCreateAsset() {
    this.router.navigate(['assets/create']);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.showMenu = false;
    this.showTypeDropdown = false;
    this.showStatusDropdown = false;
    this.showSortDropdown = false;
    this.showSortDirDropdown = false;
  }
}