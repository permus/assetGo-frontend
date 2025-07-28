import { Component, OnInit } from '@angular/core';
import { HostListener, AfterViewInit, ViewChild, ElementRef, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from '../services/asset.service';
import { Router } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf]
})
export class AssetCreateComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('dateInput') dateInputs!: QueryList<ElementRef>;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  // Flatpickr instances
  flatpickrInstances: any[] = [];

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
  departments: any[] = [];

  // Dropdown state properties
  showAssetTypeDropdown = false;
  showCategoryDropdown = false;
  showLocationDropdown = false;
  showStatusDropdown = false;
  showTagsDropdown = false;
  showDepartmentDropdown = false;
  selectedAssetType: any | null = null;
  selectedCategory: any | null = null;
  selectedLocation: any | null = null;
  selectedStatus: any | null = null;
  selectedDepartment: any | null = null;
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
    const maxImages = 10;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    const newImages: File[] = [];
    const newPreviews: string[] = [];

    for (const file of files) {
      // Skip unsupported file types
      if (!allowedTypes.includes(file.type)) {
        console.warn('Invalid file type:', file.name);
        continue;
      }

      // Skip files > 10MB
      if (file.size > 10 * 1024 * 1024) {
        console.warn('File too large:', file.name);
        continue;
      }

      // Prevent duplicate files (based on name + size)
      const isDuplicate = this.images.some(existing =>
        existing.name === file.name && existing.size === file.size
      );
      if (isDuplicate) {
        console.warn('Duplicate file skipped:', file.name);
        continue;
      }

      // Prevent exceeding max image count
      if (this.images.length + newImages.length >= maxImages) {
        console.warn('Max image count exceeded:', file.name);
        break;
      }

      newImages.push(file);

      // Generate preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (e.target?.result) {
          this.imagePreviewUrls.push(e.target.result as string);
        }
      };
      reader.onerror = (error) => {
        console.error('Preview failed for:', file.name, error);
      };
      reader.readAsDataURL(file);
    }

    // Append validated files
    this.images = [...this.images, ...newImages];
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
    
    // Convert dates to backend format before sending
    let purchaseDateFormatted = this.purchase_date;
    let warrantyFormatted = this.warranty;
    
    if (this.purchase_date) {
      purchaseDateFormatted = this.convertDateToBackendFormat(this.purchase_date);
    }
    if (this.warranty) {
      warrantyFormatted = this.convertDateToBackendFormat(this.warranty);
    }
    
    // Convert images to base64
    this.convertImagesToBase64().then((base64Images: string[]) => {
      // Create payload object
      const payload = {
        name: this.name,
        description: this.description,
        category_id: this.category_id,
        type: this.selectedAssetType?.id || null,
        serial_number: this.serial_number,
        model: this.model,
        manufacturer: this.manufacturer,
        purchase_date: purchaseDateFormatted,
        purchase_price: this.purchase_price,
        depreciation: this.depreciation,
        location_id: this.location_id,
        department_id: this.department_id,
        warranty: warrantyFormatted,
        insurance: this.insurance,
        health_score: this.health_score,
        status: this.status,
        tags: this.selectedTags.map(tag => tag.name),
        meta: this.meta,
        images: base64Images
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
    }).catch((error) => {
      this.isSubmitting = false;
      this.submitError = 'Failed to process images. Please try again.';
      console.error('Image conversion error:', error);
    });
  }

  healthScore = 85;
  categories: any[] = [];
  category_id: number | null = null;
  assetTypes: any[] = [];
  assetType: string | null = null;

  // Asset types from API
  assetTypesFromAPI: any[] = [];

  // Status options from API
  statusOptionsFromAPI: any[] = [];

  // Status options with proper typing
  statusOptions: Array<{
    id?: number;
    value: string;
    label: string;
    color: string;
    description: string;
    hexColor?: string;
    sort_order: number;
  }> = [
    { value: 'Active', label: 'Active', color: 'green', description: 'Asset is operational and in use', sort_order: 1 },
    { value: 'Maintenance', label: 'Maintenance', color: 'orange', description: 'Asset is under maintenance or repair', sort_order: 2 },
    { value: 'Inactive', label: 'Inactive', color: 'gray', description: 'Asset is not currently in use', sort_order: 3 },
    { value: 'Retired', label: 'Retired', color: 'red', description: 'Asset is retired and no longer in service', sort_order: 4 }
  ];

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
    
    // Load asset types from API
    this.assetService.getAssetTypes().subscribe(res => {
      if (res.success && res.data) {
        this.assetTypesFromAPI = res.data;
        // Use API data directly with proper icon URLs
        this.assetTypes = this.assetTypesFromAPI.map(type => ({
          id: type.id,
          name: type.name,
          label: type.name,
          icon: type.icon, // Use the full icon URL from API
          color: this.getColorForType(type.name),
          description: `${type.name} asset type`,
          iconError: false
        }));
      }
    });
    
    // Load asset statuses from API
    this.assetService.getAssetStatuses().subscribe(res => {
      if (res.success && res.data) {
        this.statusOptionsFromAPI = res.data;
        // Transform API data to match existing UI structure
        this.statusOptions = this.statusOptionsFromAPI.map(status => ({
          id: status.id,
          value: status.name,
          label: status.name,
          color: this.hexToTailwindColor(status.color),
          description: status.description || `Asset is ${status.name.toLowerCase()}`,
          hexColor: status.color,
          sort_order: status.sort_order
        }));
        
        // Sort by sort_order
        this.statusOptions.sort((a, b) => a.sort_order - b.sort_order);
        
        // Set default status to first active status (usually 'Active')
        if (this.statusOptions.length > 0) {
          this.selectedStatus = this.statusOptions[0];
          this.status = this.selectedStatus.value;
        }
      }
    });
    
    this.assetService.getLocations().subscribe(res => {
      if (res.success && res.data) {
        this.locations = res.data.locations || res.data;
      }
    });

    // Load departments from API
    this.assetService.getDepartments().subscribe(res => {
      if (res.success && res.data) {
        this.departments = res.data;
      }
    });

    // Load available tags
    this.loadAvailableTags();
  }

  ngAfterViewInit(): void {
    // Initialize Flatpickr after view is ready
    setTimeout(() => {
      this.initializeFlatpickr();
    }, 100);
  }

  ngOnDestroy(): void {
    // Cleanup Flatpickr instances
    this.flatpickrInstances.forEach(instance => {
      if (instance) {
        instance.destroy();
      }
    });
  }

  private initializeFlatpickr() {
    // Cleanup existing instances
    this.flatpickrInstances.forEach(instance => {
      if (instance) {
        instance.destroy();
      }
    });
    this.flatpickrInstances = [];

    // Initialize new instances
    setTimeout(() => {
      if (this.dateInputs) {
        this.dateInputs.forEach((inputRef, index) => {
          if (inputRef?.nativeElement) {
            const inputElement = inputRef.nativeElement;
            const fieldName = inputElement.getAttribute('name');
            
            let config: any = {
              dateFormat: 'd M, Y',
              allowInput: true,
              clickOpens: true,
              onChange: (selectedDates: Date[], dateStr: string) => {
                if (fieldName === 'purchase_date') {
                  this.purchase_date = dateStr;
                } else if (fieldName === 'warranty') {
                  this.warranty = dateStr;
                }
              }
            };

            // Set specific constraints based on field
            if (fieldName === 'purchase_date') {
              config.maxDate = 'today';
            } else if (fieldName === 'warranty') {
              config.minDate = 'today';
            }

            const instance = flatpickr(inputElement, config);
            this.flatpickrInstances.push(instance);
          }
        });
      }
    }, 50);
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
    this.purchase_date = sourceAsset.purchase_date ? this.convertBackendDateToDisplay(sourceAsset.purchase_date) : '';
    this.purchase_price = sourceAsset.purchase_price || null;
    this.depreciation = sourceAsset.depreciation || null;
    this.location_id = sourceAsset.location_id || null;
    this.department_id = sourceAsset.department_id || null;
    this.warranty = sourceAsset.warranty ? this.convertBackendDateToDisplay(sourceAsset.warranty) : '';
    this.insurance = sourceAsset.insurance || '';
    this.health_score = sourceAsset.health_score || 85;
    this.status = sourceAsset.status || 'Active';

    // Set dropdowns after data loads
    setTimeout(() => {
      if (sourceAsset.type) {
        this.selectedAssetType = this.assetTypes.find(type => 
          type.id == sourceAsset.type || type.id === parseInt(sourceAsset.type)
        ) || null;
        if (this.selectedAssetType) {
          this.assetType = this.selectedAssetType.id;
        }
      }

      if (sourceAsset.category_id) {
        this.selectedCategory = this.categories.find(cat => cat.id === sourceAsset.category_id) || null;
        this.category_id = sourceAsset.category_id;
      }

      if (sourceAsset.location_id) {
        this.selectedLocation = this.locations.find(loc => loc.id === sourceAsset.location_id) || null;
      }

      if (sourceAsset.department_id) {
        this.selectedDepartment = this.departments.find(dept => dept.id === sourceAsset.department_id) || null;
      }

      if (sourceAsset.status) {
        this.selectedStatus = this.statusOptions.find(status => status.value === sourceAsset.status) || null;
        if (this.selectedStatus) {
          this.status = this.selectedStatus.value;
        }
      }

      // Set default status if none selected and options are available
      if (!this.selectedStatus && this.statusOptions.length > 0) {
        this.selectedStatus = this.statusOptions[0];
        this.status = this.selectedStatus.value;
      }

      // Set tags if available
      if (sourceAsset.tags && Array.isArray(sourceAsset.tags)) {
        this.selectedTags = sourceAsset.tags.map((tag: any) => {
          return this.availableTags.find(t => t.id === tag.id) || tag;
        });
      }

      // Clear validation errors after populating form
      this.clearErrors();
    }, 500); // Increased timeout to ensure asset types are loaded

    // Clear unique fields - these will be auto-generated or user-entered
    this.serial_number = ''; // Must be unique - user needs to enter new one

    // Handle images - convert existing images to new files for duplication
    if (sourceAsset.images && Array.isArray(sourceAsset.images) && sourceAsset.images.length > 0) {
      this.duplicateImages(sourceAsset.images);
    }
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
    this.showDepartmentDropdown = false;
  }

  toggleDepartmentDropdown() {
    this.showDepartmentDropdown = !this.showDepartmentDropdown;
    this.showAssetTypeDropdown = false;
    this.showCategoryDropdown = false;
    this.showLocationDropdown = false;
    this.showStatusDropdown = false;
    this.showTagsDropdown = false;
  }

  // Selection methods
  selectAssetType(type: any) {
    this.selectedAssetType = type;
    this.assetType = type.id;
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

  selectDepartment(department: any) {
    this.selectedDepartment = department;
    this.department_id = department.id;
    this.showDepartmentDropdown = false;
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
      this.newTagInput = '';
    }
  }

  removeTag(tag: any) {
    const index = this.selectedTags.findIndex(t => t.id === tag.id);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
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
    this.showDepartmentDropdown = false;
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

  // Helper method to convert date from display format to backend format
  private convertDateToBackendFormat(dateStr: string): string {
    if (!dateStr) return '';
    
    try {
      // Parse the display format "01 Jul, 2025" to Date object
      const date = new Date(dateStr);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return dateStr; // Return original if parsing fails
      }
      
      // Convert to Y-m-d format
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      
      return `${year}-${month}-${day}`;
    } catch (error) {
      console.error('Date conversion error:', error);
      return dateStr; // Return original if conversion fails
    }
  }

  // Helper method to convert backend date format to display format
  convertBackendDateToDisplay(dateStr: string): string {
    if (!dateStr) return '';

    try {
      // Parse Y-m-d format or ISO format to Date object
      const date = new Date(dateStr);

      // Check if date is valid
      if (isNaN(date.getTime())) {
        return dateStr; // Return original if parsing fails
      }

      // Convert to display format "01 Jul, 2025"
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      };

      return date.toLocaleDateString('en-GB', options).replace(/,/g, ',');
    } catch (error) {
      console.error('Date conversion error:', error);
      return dateStr; // Return original if conversion fails
    }
  }

  // Helper method to extract icon name from path
  getIconFromPath(iconPath: string): string {
    if (!iconPath) return 'cube';
    
    // Extract filename without extension from path like "assets/icons/car.svg"
    const filename = iconPath.split('/').pop() || '';
    return filename.replace('.svg', '') || 'cube';
  }

  // Helper method to assign colors to asset types
  getColorForType(typeName: string): string {
    const colorMap: { [key: string]: string } = {
      'Fixed Asset': '#2563eb',
      'Semi-Fixed Asset': '#22c55e', 
      'Mobile Asset': '#f59e42',
      'Fleet Asset': '#a855f7',
      'IT Equipment': '#3b82f6',
      'Furniture': '#10b981',
      'Vehicle': '#f59e0b',
      'Machinery': '#ef4444',
      'Electronics': '#8b5cf6',
      'Tools': '#f97316'
    };
    
    return colorMap[typeName] || '#6b7280'; // Default gray color
  }

  // Helper method to convert hex colors to Tailwind color names
  private hexToTailwindColor(hexColor: string): string {
    const colorMap: { [key: string]: string } = {
      '#10B981': 'green',    // Active
      '#F59E0B': 'orange',   // Maintenance  
      '#9CA3AF': 'gray',     // Inactive
      '#EF4444': 'red',      // Retired
      '#6B7280': 'gray',     // Archived
      '#22C55E': 'green',    // Alternative green
      '#3B82F6': 'blue',     // Alternative blue
      '#8B5CF6': 'purple',   // Alternative purple
      '#F97316': 'orange',   // Alternative orange
    };
    
    return colorMap[hexColor.toUpperCase()] || 'gray';
  }

  onImageError(event: any, index: number) {
    console.error('Image failed to load at index:', index);
    console.error('Image src:', event.target.src);
    console.error('Image file:', this.images[index]);
    // Set a placeholder or remove the failed image
    event.target.style.display = 'none';
  }

  onImageLoad(event: any, index: number) {
    console.log('Image loaded successfully at index:', index);
    console.log('Image dimensions:', event.target.naturalWidth, 'x', event.target.naturalHeight);
  }

  // Convert images to base64
  private convertImagesToBase64(): Promise<string[]> {
    return Promise.all(
      this.images.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.result) {
              resolve(reader.result as string);
            } else {
              reject(new Error('Failed to read file'));
            }
          };
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        });
      })
    );
  }
  onCategoryIconError(event: any, category: any) {
    console.warn('Category icon failed to load:', category.name, category.icon);
    // Mark this category as having an icon error so we show the fallback
    category.iconError = true;
    event.target.style.display = 'none';
  }

  onAssetTypeIconError(event: any, assetType: any) {
    console.warn('Asset type icon failed to load:', assetType.name, assetType.icon);
    // Mark this asset type as having an icon error so we show the fallback
    assetType.iconError = true;
    event.target.style.display = 'none';
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  // Method to duplicate images from source asset
  private duplicateImages(sourceImages: any[]) {
    sourceImages.forEach((image, index) => {
      if (image.image_url) {
        // Fetch the image and convert to File object
        fetch(image.image_url)
          .then(response => response.blob())
          .then(blob => {
            // Create a File object from the blob
            const fileName = `duplicated-image-${index + 1}.jpg`;
            const file = new File([blob], fileName, { type: blob.type || 'image/jpeg' });
            
            // Add to images array
            this.images.push(file);
            
            // Create preview URL
            const reader = new FileReader();
            reader.onload = (e: any) => {
              if (e.target?.result) {
                this.imagePreviewUrls.push(e.target.result as string);
              }
            };
            reader.readAsDataURL(file);
          })
          .catch(error => {
            console.warn('Failed to duplicate image:', image.image_url, error);
          });
      }
    });
  }
}