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
  imports: [FormsModule, NgIf, NgForOf]
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
  warranty: string = '';
  insurance: string = '';
  health_score: number = 85;
  status: string = 'Active';
  tags: number[] = [];
  images: File[] = [];
  imagePreviewUrls: string[] = [];
  meta: any = {};
  isSubmitting = false;
  isDragOver = false;
  submitError = '';
  submitSuccess = '';
  submitFieldErrors: { [key: string]: string[] } = {};
  locations: any[] = [];
  availableTags: any[] = [];

  // Dropdown state properties
  showAssetTypeDropdown = false;
  showCategoryDropdown = false;
  showLocationDropdown = false;
  showStatusDropdown = false;
  showTagsDropdown = false;
  selectedAssetType: any | null = null;
  selectedCategory: any | null = null;
  selectedLocation: any | null = null;
  selectedStatus: any | null = null;
  selectedTags: any[] = [];
  newTagInput: string = '';

  // Validation error properties
  nameError: string = '';
  assetTypeError: string = '';
  categoryError: string = '';
  serialNumberError: string = '';

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const newFiles = Array.from(event.target.files) as File[];
      this.processFiles(newFiles);
      event.target.value = ''; // Clear the input
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files).filter(file => file.type.startsWith('image/'));
      if (fileArray.length > 0) {
        this.processFiles(fileArray);
      }
    }
  }

  private processFiles(files: File[]) {
    // Add new files to existing images array
    this.images = [...this.images, ...files];

    // Generate preview URLs for new files
    files.forEach((file, index) => {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        console.warn('Skipping non-image file:', file.name);
        return;
      }

      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        console.warn('File too large:', file.name);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (e.target && e.target.result) {
          this.imagePreviewUrls.push(e.target.result);
        }
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', file.name, error);
      };
      reader.readAsDataURL(file);
    });
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
      category_id: this.category_id,
      type: this.assetType,
      serial_number: this.serial_number,
      model: this.model,
      manufacturer: this.manufacturer,
      purchase_date: this.purchase_date || null,
      purchase_price: this.purchase_price !== null ? this.purchase_price : null,
      depreciation: this.depreciation !== null ? this.depreciation : null,
      location_id: this.location_id,
      department_id: this.department_id,
      warranty: this.warranty,
      insurance: this.insurance,
      health_score: this.health_score,
      status: this.status,
      tags: this.tags,
      meta: this.meta,
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
  category_id: number | null = null;
  assetTypes = [
    { value: 'fixed', label: 'Fixed Asset', icon: 'building-office-2', color: '#2563eb', description: 'Permanent assets like buildings and machinery' },
    { value: 'semi-fixed', label: 'Semi-Fixed Asset', icon: 'cube', color: '#22c55e', description: 'Assets that can be moved but are typically stationary' },
    { value: 'mobile', label: 'Mobile Asset', icon: 'cog', color: '#f59e42', description: 'Portable equipment and tools' },
    { value: 'fleet', label: 'Fleet Asset', icon: 'car', color: '#a855f7', description: 'Vehicles and transportation equipment' }
  ];
  assetType: string | null = null;

  // Status options
  statusOptions = [
    { value: 'Active', label: 'Active', color: 'green', description: 'Asset is operational and in use' },
    { value: 'Maintenance', label: 'Maintenance', color: 'orange', description: 'Asset is under maintenance or repair' },
    { value: 'Inactive', label: 'Inactive', color: 'gray', description: 'Asset is not currently in use' },
    { value: 'Retired', label: 'Retired', color: 'red', description: 'Asset is retired and no longer in service' }
  ];

  constructor(
    private assetService: AssetService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Set default status
    this.selectedStatus = this.statusOptions[0]; // Default to 'Active'
    this.status = this.selectedStatus.value;

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

    // Load available tags
    this.loadAvailableTags();
  }

  loadAvailableTags() {
    // For now, using mock data since we don't have the tags endpoint
    // TODO: Replace with actual API call when available
    this.availableTags = [
      { id: 1, name: 'Critical', color: 'red' },
      { id: 2, name: 'High Priority', color: 'orange' },
      { id: 3, name: 'Equipment', color: 'blue' },
      { id: 4, name: 'IT Hardware', color: 'purple' },
      { id: 5, name: 'Furniture', color: 'green' },
      { id: 6, name: 'Vehicle', color: 'yellow' },
      { id: 7, name: 'Safety Equipment', color: 'red' },
      { id: 8, name: 'Office Supplies', color: 'gray' }
    ];

    // Uncomment when tags API is available:
    // this.assetService.getAssetTags().subscribe(res => {
    //   if (res.success && res.data) {
    //     this.availableTags = res.data.tags || res.data;
    //   }
    // });
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
        this.category_id = sourceAsset.category_id;
      }

      if (sourceAsset.location_id) {
        this.selectedLocation = this.locations.find(loc => loc.id === sourceAsset.location_id) || null;
      }

      if (sourceAsset.status) {
        this.selectedStatus = this.statusOptions.find(status => status.value === sourceAsset.status) || this.statusOptions[0];
        this.status = this.selectedStatus.value;
      }

      // Set tags if available
      if (sourceAsset.tags && Array.isArray(sourceAsset.tags)) {
        this.selectedTags = sourceAsset.tags.map((tag: any) => {
          return this.availableTags.find(t => t.id === tag.id) || tag;
        });
        this.tags = this.selectedTags.map(tag => tag.id);
      }

      // Clear validation errors after populating form
      this.clearErrors();
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
    this.showStatusDropdown = false;
  }

  toggleStatusDropdown() {
    this.showStatusDropdown = !this.showStatusDropdown;
    this.showAssetTypeDropdown = false;
    this.showCategoryDropdown = false;
    this.showLocationDropdown = false;
    this.showTagsDropdown = false;
  }

  toggleTagsDropdown() {
    this.showTagsDropdown = !this.showTagsDropdown;
    this.showAssetTypeDropdown = false;
    this.showCategoryDropdown = false;
    this.showLocationDropdown = false;
    this.showStatusDropdown = false;
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
    this.category_id = category.id;
    this.showCategoryDropdown = false;
    this.clearErrors();
  }

  selectLocation(location: any) {
    this.selectedLocation = location;
    this.location_id = location.id;
    this.showLocationDropdown = false;
  }

  selectStatus(status: any) {
    this.selectedStatus = status;
    this.status = status.value;
    this.showStatusDropdown = false;
  }

  toggleTag(tag: any) {
    const index = this.selectedTags.findIndex(t => t.id === tag.id);
    if (index > -1) {
      // Remove tag
      this.selectedTags.splice(index, 1);
    } else {
      // Add tag
      this.selectedTags.push(tag);
    }
    // Update tags array for form submission
    this.tags = this.selectedTags.map(t => t.id);
  }

  isTagSelected(tag: any): boolean {
    return this.selectedTags.some(t => t.id === tag.id);
  }

  onTagInputKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.createNewTag();
    }
  }

  createNewTag() {
    const tagName = this.newTagInput.trim();
    if (tagName && !this.selectedTags.some(t => t.name.toLowerCase() === tagName.toLowerCase())) {
      // Create a new tag with a random color
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'indigo', 'gray'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const newTag = {
        id: Date.now(), // Temporary ID until saved to backend
        name: tagName,
        color: randomColor,
        isNew: true // Flag to identify newly created tags
      };

      this.selectedTags.push(newTag);
      this.tags = this.selectedTags.map(t => t.id);
      this.newTagInput = '';
    }
  }

  removeTag(tag: any) {
    const index = this.selectedTags.findIndex(t => t.id === tag.id);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
      this.tags = this.selectedTags.map(t => t.id);
    }
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.showAssetTypeDropdown = false;
    this.showCategoryDropdown = false;
    this.showLocationDropdown = false;
    this.showStatusDropdown = false;
    this.showTagsDropdown = false;
  }

  // Validation methods
  validateForm(): boolean {
    let isValid = true;

    // Name validation (required, max 100)
    if (!this.name || this.name.trim().length === 0) {
      this.nameError = 'Asset name is required';
      isValid = false;
    } else if (this.name.trim().length > 100) {
      this.nameError = 'Asset name cannot exceed 100 characters';
      isValid = false;
    }

    // Description validation (optional, max 500)
    if (this.description && this.description.length > 500) {
      this.submitError = 'Description cannot exceed 500 characters';
      isValid = false;
    }

    // Serial number validation (optional, max 255, cannot be empty if provided)
    if (this.serial_number && this.serial_number.trim().length === 0) {
      this.serialNumberError = 'Serial number cannot be empty if provided';
      isValid = false;
    } else if (this.serial_number && this.serial_number.length > 255) {
      this.serialNumberError = 'Serial number cannot exceed 255 characters';
      isValid = false;
    }

    // Model validation (optional, max 255)
    if (this.model && this.model.length > 255) {
      this.submitError = 'Model cannot exceed 255 characters';
      isValid = false;
    }

    // Manufacturer validation (optional, max 255)
    if (this.manufacturer && this.manufacturer.length > 255) {
      this.submitError = 'Manufacturer cannot exceed 255 characters';
      isValid = false;
    }

    // Warranty validation (optional, max 255)
    if (this.warranty && this.warranty.length > 255) {
      this.submitError = 'Warranty cannot exceed 255 characters';
      isValid = false;
    }

    // Insurance validation (optional, max 255)
    if (this.insurance && this.insurance.length > 255) {
      this.submitError = 'Insurance cannot exceed 255 characters';
      isValid = false;
    }

    // Status validation (optional, max 50)
    if (this.status && this.status.length > 50) {
      this.submitError = 'Status cannot exceed 50 characters';
      isValid = false;
    }

    // Purchase price validation (optional, min 0.01 if provided)
    if (this.purchase_price !== null && this.purchase_price <= 0) {
      this.submitError = 'Purchase price must be at least 0.01';
      isValid = false;
    }

    // Depreciation validation (optional, numeric)
    if (this.depreciation !== null && this.depreciation < 0) {
      this.submitError = 'Depreciation cannot be negative';
      isValid = false;
    }

    // Purchase date validation (optional, cannot be future)
    if (this.purchase_date) {
      const today = new Date();
      const purchaseDate = new Date(this.purchase_date);
      if (purchaseDate > today) {
        this.submitError = 'Purchase date cannot be in the future';
        isValid = false;
      }
    }

    // Health score validation (optional, 0-100)
    if (this.health_score < 0 || this.health_score > 100) {
      this.submitError = 'Health score must be between 0 and 100';
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
    // Only name is required according to backend validation
    return !!(
      this.name &&
      this.name.trim().length > 0 &&
      this.name.trim().length <= 100
    );
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
    this.imagePreviewUrls.splice(index, 1);
  }

  removeAllImages(): void {
    this.images = [];
    this.imagePreviewUrls = [];
  }

  moveImage(fromIndex: number, toIndex: number): void {
    if (toIndex >= 0 && toIndex < this.images.length) {
      // Move file
      const file = this.images.splice(fromIndex, 1)[0];
      this.images.splice(toIndex, 0, file);

      // Move preview URL
      const previewUrl = this.imagePreviewUrls.splice(fromIndex, 1)[0];
      this.imagePreviewUrls.splice(toIndex, 0, previewUrl);
    }
  }

  moveImageUp(index: number): void {
    if (index > 0) {
      this.moveImage(index, index - 1);
    }
  }

  moveImageDown(index: number): void {
    if (index < this.images.length - 1) {
      this.moveImage(index, index + 1);
    }
  }

  getTodayDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  onImageError(event: any, index: number) {
    console.error('Image failed to load at index:', index);
    // Optionally remove the failed image
    // this.removeImage(index);
  }

  onImageLoad(event: any, index: number) {
    console.log('Image loaded successfully at index:', index);
  }

  onImageError(event: any, index: number) {
    console.error('Image failed to load at index:', index);
    // Optionally remove the failed image
    // this.removeImage(index);
  }
}
