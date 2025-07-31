import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, NgIf, NgFor, DecimalPipe, DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetService } from '../services/asset.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ArchiveConfirmationModalComponent } from '../components/archive-confirmation-modal/archive-confirmation-modal.component';
import { DeleteConfirmationModalComponent } from '../components/delete-confirmation-modal/delete-confirmation-modal.component';
import { RestoreConfirmationModalComponent } from '../components/restore-confirmation-modal/restore-confirmation-modal.component';
import { PdfExportService } from '../../shared/services/pdf-export.service';
import { RouterModule } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgFor, FormsModule, DecimalPipe, DatePipe, ArchiveConfirmationModalComponent, DeleteConfirmationModalComponent, RestoreConfirmationModalComponent, NgClass, RouterModule],
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private assetService: AssetService,
    private pdfExportService: PdfExportService
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
  showRestoreConfirmationModal = false;
  selectedAssetForRestore: any = null;
  
  // View state
  showingArchived = false;

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
    per_page: 20,
    archived: false
  };

  assetList: any[] = [];
  categories: any[] = [];
  locations: any[] = [];
  assetTypes: any[] = [];
  showAssetTypeDropdown = false;
  selectedAssetType: any | null = null;
  assetStatuses: any[] = [];
  showAssetStatusDropdown = false;
  selectedAssetStatus: any | null = null;
  
  // Asset menu state
  openAssetMenuId: number | null = null;
  
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
    this.assetService.getAssetTypes().subscribe(res => {
      if (res.success && res.data) {
        this.assetTypes = [{ id: '', name: 'All Types', label: 'All Types', icon: null }, ...res.data.map((type: any) => ({
          id: type.id,
          name: type.name,
          label: type.name,
          icon: type.icon || null
        }))];
        this.selectedAssetType = this.assetTypes[0];
      }
    });
    this.assetService.getAssetStatuses().subscribe(res => {
      if (res.success && res.data) {
        this.assetStatuses = [{ id: '', name: 'All Statuses', label: 'All Statuses', color: null }, ...res.data.map((status: any) => ({
          id: status.id,
          name: status.name,
          label: status.name,
          color: status.color || null
        }))];
        this.selectedAssetStatus = this.assetStatuses[0];
      }
    });
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
    // Add archived parameter
    params.archived = this.currentFilters.archived;
    params.page = this.currentFilters.page;
    params.per_page = this.currentFilters.per_page;

    this.assetService.getAssets(params as any)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.assetList = (response.data.assets || response.data).map((asset: any) => ({
              ...asset,
              selected: false,
              showMenu: false
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

    // Navigate to create page with the first selected asset for duplication
    const assetToDuplicate = selectedAssets[0];
    this.router.navigate(['/assets/create'], {
      queryParams: {
        duplicate: true,
        sourceId: assetToDuplicate.id
      }
    });
    this.clearSelection();
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

  closeRestoreModal() {
    this.showRestoreConfirmationModal = false;
    this.selectedAssetForRestore = null;
  }

  restoreSelectedAsset(restoreReason?: string) {
    // Check if this is a bulk restore (multiple selected assets) or single asset restore
    const selectedAssets = this.assetList.filter(asset => asset.selected);
    
    if (selectedAssets.length > 1) {
      // Bulk restore
      this.restoreBulkAssets(restoreReason);
    } else if (this.selectedAssetForRestore) {
      // Single asset restore
      const payload: any = {};
      if (restoreReason && restoreReason.trim()) {
        payload.restore_reason = restoreReason.trim();
      }

      this.assetService.restoreAsset(this.selectedAssetForRestore.id, payload)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response.success) {
              this.loadAssets();
              this.loadAssetStatistics();
              console.log('Asset restored successfully');
            } else {
              this.error = response.message || 'Failed to restore asset';
            }
            this.closeRestoreModal();
          },
          error: (error) => {
            this.error = error.error?.message || 'An error occurred while restoring the asset';
            this.closeRestoreModal();
          }
        });
    } else {
      this.closeRestoreModal();
    }
  }

  deleteSelected(deletionReason?: string) {
    const selectedAssets = this.assetList.filter(asset => asset.selected);
    if (selectedAssets.length === 0) {
      this.closeDeleteModal();
      return;
    }

    // Get asset IDs for bulk delete
    const assetIds = selectedAssets.map(asset => asset.id);
    const payload: any = { asset_ids: assetIds };
    if (deletionReason && deletionReason.trim()) {
      payload.deletion_reason = deletionReason.trim();
    }

    this.assetService.bulkDeleteAssets(payload)
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

  viewAsset(asset: any) {
    this.router.navigate(['/assets/preview', asset.id]);
  }

  archiveSelected(archiveReason?: string) {
    const selectedAssets = this.assetList.filter(asset => asset.selected);
    if (selectedAssets.length === 0) {
      this.closeArchiveModal();
      return;
    }

    // Get asset IDs for bulk archive
    const assetIds = selectedAssets.map(asset => asset.id);
    const payload: any = { asset_ids: assetIds };
    if (archiveReason && archiveReason.trim()) {
      payload.archive_reason = archiveReason.trim();
    }

    this.assetService.bulkArchiveAssets(payload)
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

  toggleArchivedView() {
    this.showingArchived = !this.showingArchived;
    this.currentFilters.archived = this.showingArchived;
    this.currentFilters.page = 1; // Reset to first page
    this.clearSelection();
    this.loadAssets();
    this.showMenu = false; // Close the dropdown menu
  }

  goToCreateAsset() {
    this.router.navigate(['assets/create']);
  }

  exportToPdf() {
    if (this.assetList.length > 0) {
      const title = this.showingArchived ? 'Archived Assets Export Report' : 'Asset Export Report';
      this.pdfExportService.exportAssetsToPdf(this.assetList, title);
      this.showMenu = false; // Close the dropdown menu
    } else {
      console.log('No assets to export');
    }
  }

  public getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'Active': 'green',
      'Maintenance': 'orange',
      'Inactive': 'gray',
      'Retired': 'red'
    };
    return colors[status] || 'gray';
  }

  // Asset menu methods
  toggleAssetMenu(assetId: number) {
    // Close all other menus first
    this.assetList.forEach(asset => {
      if (asset.id !== assetId) {
        asset.showMenu = false;
      }
    });
    
    // Toggle the clicked asset's menu
    const asset = this.assetList.find(a => a.id === assetId);
    if (asset) {
      asset.showMenu = !asset.showMenu;
    }
  }

  editAsset(asset: any) {
    this.router.navigate(['/assets', asset.id, 'edit']);
    asset.showMenu = false;
  }

  duplicateAsset(asset: any) {
    // Navigate to create page with duplication parameters
    this.router.navigate(['/assets/create'], {
      queryParams: {
        duplicate: true,
        sourceId: asset.id
      }
    });
    asset.showMenu = false;
  }

  archiveAsset(asset: any) {
    // Set the asset for single archive and open modal
    this.assetList.forEach(a => a.selected = false); // Clear all selections
    asset.selected = true; // Select only this asset
    this.showArchiveConfirmationModal = true;
    asset.showMenu = false;
  }

  deleteAsset(asset: any) {
    // Set the asset for single delete and open modal
    this.assetList.forEach(a => a.selected = false); // Clear all selections
    asset.selected = true; // Select only this asset
    this.showDeleteConfirmationModal = true;
    asset.showMenu = false;
  }

  restoreSelected() {
    const selectedAssets = this.assetList.filter(asset => asset.selected);
    if (selectedAssets.length === 0) {
      return;
    }
    
    // Open bulk restore modal
    this.showRestoreConfirmationModal = true;
  }

  restoreBulkAssets(restoreReason?: string) {
    const selectedAssets = this.assetList.filter(asset => asset.selected);
    if (selectedAssets.length === 0) {
      this.closeRestoreModal();
      return;
    }

    // Get asset IDs for bulk restore
    const assetIds = selectedAssets.map(asset => asset.id);

    this.assetService.bulkRestoreAssets(assetIds, restoreReason)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            // Check if any assets failed to restore
            if (response.failed && response.failed.length > 0) {
              const failedCount = response.failed.length;
              const successCount = response.restored ? response.restored.length : 0;
              this.error = `${successCount} assets restored successfully, ${failedCount} failed to restore`;
            } else {
              // All assets restored successfully
              const restoredCount = response.restored ? response.restored.length : selectedAssets.length;
              console.log(`${restoredCount} assets restored successfully`);
            }
            
            // Reload assets and statistics
            this.loadAssets();
            this.loadAssetStatistics();
            this.clearSelection();
          } else {
            this.error = response.message || 'Failed to restore assets';
          }
          // Close modal after completion
          this.closeRestoreModal();
        },
        error: (error) => {
          this.error = error.error?.message || 'An error occurred while restoring assets';
          // Close modal even on error
          this.closeRestoreModal();
        }
      });
  }

  restoreAsset(asset: any) {
    this.selectedAssetForRestore = asset;
    this.showRestoreConfirmationModal = true;
    asset.showMenu = false;
  }

  toggleAssetTypeDropdown() {
    this.showAssetTypeDropdown = !this.showAssetTypeDropdown;
    this.showStatusDropdown = false;
    this.showSortDropdown = false;
    this.showSortDirDropdown = false;
  }
  selectAssetType(type: any) {
    this.selectedAssetType = type;
    this.currentFilters.type = type.id;
    this.showAssetTypeDropdown = false;
    this.applyFilters();
  }

  toggleAssetStatusDropdown() {
    this.showAssetStatusDropdown = !this.showAssetStatusDropdown;
  }
  selectAssetStatus(status: any) {
    this.selectedAssetStatus = status;
    // Optionally, trigger filtering here
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-container')) {
      this.showMenu = false;
    }
  }

  // QR Code functionality
  generateQRCodeForAsset(asset: any) {
    const publicUrl = `${window.location.origin}/public/asset/${asset.id}`;
    
    QRCode.toDataURL(publicUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    }).then((dataUrl) => {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `asset-${asset.id}-qr.png`;
      link.click();
    }).catch((error) => {
      console.error('Error generating QR code:', error);
    });
  }

  generateQRCodeForSelectedAssets() {
    const selectedAssets = this.assetList.filter(asset => asset.selected);
    
    if (selectedAssets.length === 0) {
      console.log('No assets selected');
      return;
    }

    // Generate QR codes for each selected asset
    selectedAssets.forEach(asset => {
      this.generateQRCodeForAsset(asset);
    });
  }

  copyPublicUrl(asset: any) {
    const publicUrl = `${window.location.origin}/public/asset/${asset.id}`;
    navigator.clipboard.writeText(publicUrl).then(() => {
      console.log('Public URL copied to clipboard');
    });
  }
}