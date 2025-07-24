import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, NgIf, NgFor, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgFor, FormsModule, DecimalPipe, DatePipe],
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent {
  constructor(private router: Router) {}

  summary = {
    totalAssets: 26,
    activeAssets: 26,
    maintenance: 0,
    totalValue: 2000000,
    assetHealth: 100
  };

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

  assetList = [
    {
      id: 1,
      name: 'Dell PowerEdge Server R750 (Copy) (Copy)',
      code: 'AST-011',
      type: 'IT Equipment',
      status: 'Active',
      location: 'No location',
      value: 25000,
      purchaseDate: '2023-06-15',
      healthScore: 100,
      selected: true
    },
    {
      id: 2,
      name: 'Wireless Headset System',
      code: 'AST-010',
      type: 'General',
      status: 'Active',
      location: 'No location',
      value: null,
      purchaseDate: null,
      healthScore: 100,
      selected: true
    },
    {
      id: 3,
      name: 'ytu (Copy)',
      code: 'AST-009',
      type: 'General',
      status: 'Active',
      location: 'No location',
      value: null,
      purchaseDate: null,
      healthScore: 85,
      selected: false
    },
    {
      id: 4,
      name: 'Dell PowerEdge Server R750 (Copy)',
      code: 'AST-008',
      type: 'IT Equipment',
      status: 'Active',
      location: 'No location',
      value: 25000,
      purchaseDate: '2023-06-15',
      healthScore: 100,
      selected: false
    }
    // Add more mock assets as needed
  ];

  selectAllAssets = false;

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
  }
  
  selectStatus(status: string) {
    this.selectedStatus = status;
    this.showStatusDropdown = false;
  }
  
  selectSort(sort: string) {
    this.selectedSort = sort;
    this.showSortDropdown = false;
  }
  
  selectSortDir(dir: 'A-Z' | 'Z-A') {
    this.selectedSortDir = dir;
    this.showSortDirDropdown = false;
  }

  toggleSortDir() {
    this.selectedSortDir = this.selectedSortDir === 'A-Z' ? 'Z-A' : 'A-Z';
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