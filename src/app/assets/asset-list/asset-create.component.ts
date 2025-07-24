import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from '../services/asset.service';
import { Router } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.scss'],
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf]
})
export class AssetCreateComponent implements OnInit {
  // Asset form fields
  name: string = '';
  description: string = '';
  serial_number: string = '';
  model: string = '';
  manufacturer: string = '';
  purchase_date: string = '';
  purchase_price: number | null = null;
  depreciation: number | null = null;
  location_id: number | null = null;
  department_id: number | null = null;
  user_id: number | null = null;
  company_id: number | null = null; // Set this from auth or context
  warranty: string = '';
  insurance: string = '';
  health_score: number = 85;
  status: string = '';
  tags: number[] = [];
  images: File[] = [];
  previewImage: string | null = null;
  isSubmitting = false;
  submitError = '';
  submitSuccess = '';
  submitFieldErrors: { [key: string]: string[] } = {};
  locations: any[] = [];
  
  // Dropdown state properties
  showAssetTypeDropdown = false;
  showCategoryDropdown = false;
  showLocationDropdown = false;
  selectedAssetType: any | null = null;
  selectedCategory: any | null = null;
  selectedLocation: any | null = null;

  // Validation error properties
  nameError: string = '';
  assetTypeError: string = '';
  categoryError: string = '';
  serialNumberError: string = '';

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.images = Array.from(event.target.files);
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.previewImage = null;
      }
    }
  }

  onSubmit() {
    // Clear previous errors
    this.clearErrors();
    
    // Validate form
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = '';
    this.submitFieldErrors = {};
    const payload: any = {
      name: this.name,
      description: this.description,
      category_id: this.category,
      type: this.assetType,
      serial_number: this.serial_number,
      model: this.model,
      manufacturer: this.manufacturer,
      purchase_date: this.purchase_date || null,
      purchase_price: this.purchase_price !== null ? this.purchase_price : null,
      depreciation: this.depreciation !== null ? this.depreciation : null,
      location_id: this.location_id,
      department_id: this.department_id,
      user_id: this.user_id,
      company_id: this.company_id,
      warranty: this.warranty,
      insurance: this.insurance,
      health_score: this.health_score,
      status: this.status,
      tags: this.tags,
      // images: this.images // skip images for JSON, handle separately if needed
    };

    this.assetService.createAsset(payload).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        if (res.success) {
          this.submitSuccess = 'Asset created successfully!';
          // Navigate back after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/assets']);
          }, 2000);
        } else {
          this.submitError = res.message || 'Failed to create asset.';
          this.handleFieldErrors(res.errors || {});
        }
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitError = err.error?.message || 'Failed to create asset.';
        this.handleFieldErrors(err.error?.errors || err.errors || {});
      }
    });
  }

  healthScore = 85;
  categories: any[] = [];
  category: any[] = [];
  assetTypes = [
    { value: 'fixed', label: 'Fixed Asset', icon: 'building-office-2', color: '#2563eb', description: 'Permanent assets like buildings and machinery' },
    { value: 'semi-fixed', label: 'Semi-Fixed Asset', icon: 'cube', color: '#22c55e', description: 'Assets that can be moved but are typically stationary' },
    { value: 'mobile', label: 'Mobile Asset', icon: 'cog', color: '#f59e42', description: 'Portable equipment and tools' },
    { value: 'fleet', label: 'Fleet Asset', icon: 'car', color: '#a855f7', description: 'Vehicles and transportation equipment' }
  ];
  assetType: string | null = null;

  constructor(
    private assetService: AssetService, 
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Check if we're duplicating an asset
    this.route.queryParams.subscribe((params: any) => {
      if (params['duplicate'] && params['sourceId']) {
        this.loadAssetForDuplication(params['sourceId']);
      }
    });
    
    this.assetService.getAssetCategories().subscribe(res => {
      if (res.success && res.data?.categories) {
        this.categories = res.data.categories;
      }
    });
    this.assetService.getLocations().subscribe(res => {
      if (res.success && res.data) {
        this.locations = res.data.locations || res.data;
      }
    });
  }

  loadAssetForDuplication(sourceId: string) {
    this.assetService.getAsset(sourceId).subscribe({
      next: (response) => {
        if (response.success) {
          const sourceAsset = response.data.asset || response.data;
          this.populateFormFromSource(sourceAsset);
        }
      },
      error: (error) => {
        console.error('Error loading source asset for duplication:', error);
      }
    });
  }

  populateFormFromSource(sourceAsset: any) {
    // Copy all fields except unique ones
    this.name = sourceAsset.name ? `${sourceAsset.name} (Copy)` : '';
    this.description = sourceAsset.description || '';
    this.model = sourceAsset.model || '';
    this.manufacturer = sourceAsset.manufacturer || '';
    this.purchase_date = sourceAsset.purchase_date || '';
    this.purchase_price = sourceAsset.purchase_price || null;
    this.depreciation = sourceAsset.depreciation || null;
    this.location_id = sourceAsset.location_id || null;
    this.department_id = sourceAsset.department_id || null;
    this.user_id = sourceAsset.user_id || null;
    this.company_id = sourceAsset.company_id || null;
    this.warranty = sourceAsset.warranty || '';
    this.insurance = sourceAsset.insurance || '';
    this.health_score = sourceAsset.health_score || 85;
    this.status = sourceAsset.status || 'Active';
    
    // Set dropdowns after data loads
    setTimeout(() => {
      if (sourceAsset.type) {
        this.selectedAssetType = this.assetTypes.find(type => type.value === sourceAsset.type) || null;
        this.assetType = sourceAsset.type;
      }
      
      if (sourceAsset.category_id) {
        this.selectedCategory = this.categories.find(cat => cat.id === sourceAsset.category_id) || null;
        this.category = sourceAsset.category_id;
      }
      
      if (sourceAsset.location_id) {
        this.selectedLocation = this.locations.find(loc => loc.id === sourceAsset.location_id) || null;
      }
    }, 100);
    
    // Clear unique fields - these will be auto-generated or user-entered
    this.serial_number = ''; // Must be unique - user needs to enter new one
    // Asset ID and QR code are auto-generated by backend
    // Creation date and activity history are not copied
  }

  goBack() {
    this.router.navigate(['/assets']);
  }

  // Dropdown toggle methods
  toggleAssetTypeDropdown() {
    this.showAssetTypeDropdown = !this.showAssetTypeDropdown;
    this.showCategoryDropdown = false;
    this.showLocationDropdown = false;
  }

  toggleCategoryDropdown() {
    this.showCategoryDropdown = !this.showCategoryDropdown;
    this.showAssetTypeDropdown = false;
    this.showLocationDropdown = false;
  }

  toggleLocationDropdown() {
    this.showLocationDropdown = !this.showLocationDropdown;
    this.showAssetTypeDropdown = false;
    this.showCategoryDropdown = false;
  }

  // Selection methods
  selectAssetType(type: any) {
    this.selectedAssetType = type;
    this.assetType = type.value;
    this.showAssetTypeDropdown = false;
    this.clearErrors();
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
    this.category = category.id;
    this.showCategoryDropdown = false;
    this.clearErrors();
  }

  selectLocation(location: any) {
    this.selectedLocation = location;
    this.location_id = location.id;
    this.showLocationDropdown = false;
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.showAssetTypeDropdown = false;
    this.showCategoryDropdown = false;
    this.showLocationDropdown = false;
  }

  // Validation methods
  validateForm(): boolean {
    let isValid = true;

    if (!this.name || this.name.trim().length < 2) {
      this.nameError = 'Asset name is required and must be at least 2 characters';
      isValid = false;
    }

    if (!this.selectedAssetType) {
      this.assetTypeError = 'Please select an asset type';
      isValid = false;
    }

    if (!this.selectedCategory) {
      this.categoryError = 'Please select a category';
      isValid = false;
    }

    if (!this.serial_number || this.serial_number.trim().length < 3) {
      this.serialNumberError = 'Serial number is required and must be at least 3 characters';
      isValid = false;
    }

    return isValid;
  }

  clearErrors(): void {
    this.nameError = '';
    this.assetTypeError = '';
    this.categoryError = '';
    this.serialNumberError = '';
    this.submitError = '';
    this.submitSuccess = '';
  }

  handleFieldErrors(errors: { [key: string]: string[] }): void {
    if (errors['name']) {
      this.nameError = errors['name'][0];
    }
    if (errors['type']) {
      this.assetTypeError = errors['type'][0];
    }
    if (errors['category_id']) {
      this.categoryError = errors['category_id'][0];
    }
    if (errors['serial_number']) {
      this.serialNumberError = errors['serial_number'][0];
    }
  }

  isFormValid(): boolean {
    return !!(this.name && this.selectedAssetType && this.selectedCategory && this.serial_number);
  }

  removeImage(): void {
    this.previewImage = null;
    this.images = [];
  }
}
