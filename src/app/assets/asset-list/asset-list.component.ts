import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, NgIf, NgFor, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetService } from '../services/asset.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgFor, FormsModule, DecimalPipe, DatePipe],
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
    totalAssets: 26,
    activeAssets: 26,
    maintenance: 0,
    totalValue: 2000000,
    assetHealth: 100
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

  typeOptions = ['All Types', 'Equipment', 'Vehicle', 'Facility', 'IT'];
  statusOptions = ['All Status', 'Active', 'Maintenance', 'Inactive', 'Retired'];
  sortOptions = ['Name', 'Date Added', 'Status', 'Manufacturer', 'Cost'];
  selectedType = 'All Types';
  selectedStatus = 'All Status';
  selectedSort = 'Name';
  selectedSortDir = 'Z-A';

  viewType: 'grid' | 'list' = 'grid';
  searchQuery = '';

  assetList: any[] = [];
  categories: any[] = [];

  selectAllAssets = false;

  ngOnInit() {
    this.loadAssets();
    this.loadCategories();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAssets() {
    this.loading = true;
    this.error = '';

    this.assetService.getAssets()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.assetList = response.data.assets.map((asset: any) => ({
              ...asset,
              selected: false
            }));
            this.updateSummary();
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

  updateSummary() {
    const activeAssets = this.assetList.filter(asset => asset.status === 'Active');
    const maintenanceAssets = this.assetList.filter(asset => asset.status === 'Maintenance');
    const totalValue = this.assetList.reduce((sum, asset) => sum + (asset.purchase_price || 0), 0);
    const avgHealthScore = this.assetList.length > 0 
      ? Math.round(this.assetList.reduce((sum, asset) => sum + (asset.health_score || 100), 0) / this.assetList.length)
      : 100;

    this.summary = {
      totalAssets: this.assetList.length,
      activeAssets: activeAssets.length,
      maintenance: maintenanceAssets.length,
      totalValue: totalValue,
      assetHealth: avgHealthScore
    };
  }

  onSearch() {
    // Implement search functionality
    this.loadAssets();
  }

  applyFilters() {
    // Implement filter functionality
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

  selectType(type: string) {
    this.selectedType = type;
    this.showTypeDropdown = false;
    this.applyFilters();
  }
  
  selectStatus(status: string) {
    this.selectedStatus = status;
    this.showStatusDropdown = false;
    this.applyFilters();
  }
  
  selectSort(sort: string) {
    this.selectedSort = sort;
    this.showSortDropdown = false;
    this.applyFilters();
  }
  
  selectSortDir(dir: 'A-Z' | 'Z-A') {
    this.selectedSortDir = dir;
    this.showSortDirDropdown = false;
    this.applyFilters();
  }

  toggleSortDir() {
    this.selectedSortDir = this.selectedSortDir === 'A-Z' ? 'Z-A' : 'A-Z';
    this.applyFilters();
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